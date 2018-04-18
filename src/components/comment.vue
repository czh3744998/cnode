<template>
  <div>
  <div class="panel">
    <div class="header">
      <span class="col_fade">92 回复</span>
    </div>
    <div v-for="(arr,key) in item" :key="key" class="cell reply_area reply_item
  reply_highlight" reply_id="5aae37baf5dfc27d7ad9890f" reply_to_id="" id="5aae37baf5dfc27d7ad9890f">
      <div class="author_content">
        <a href="/user/Lizhooh" class="user_avatar">
          <img :src="arr.author.avatar_url" title="Lizhooh"></a>

        <div class="user_info">
          <a class="dark reply_author" href="/user/Lizhooh" style="color: darkgrey;font-weight: 700">{{arr.author.loginname}}</a>
          <a class="reply_time" href="#5aae37baf5dfc27d7ad9890f">{{key+1}}楼•{{arr.create_at}}前</a>

        </div>
        <div class="user_action">
      <span  >
        <i class="fa up_btn
          fa-thumbs-o-up
          " title="喜欢" @click="dianzan(arr.id,key)"> 点赞</i>

      </span>
          <span class="up-count">
          {{arr.ups.length}}
        </span>
          <span @click="show(arr.id)">
         回复
      </span>
          <div v-if="gh==arr.id">
            <textarea name=""  cols="30" rows="10" v-model="messg"></textarea>
            <input type="button" @click="pinglun(arr.id,id)" value="回复">
          </div>

        </div>
      </div>
      <div class="reply_content from-Lizhooh" v-html="arr.content">

        </div>
      </div>
      <div class="clearfix">
        <div class="reply2_area">

        </div>
      </div>
    </div>
    <div class="panel">
      <div class="header">
        <span class="col_fade">添加回复</span>
      </div>
      <div class="inner reply">
        <form id="reply_form" action="/5ad45c22a7d228c16b986c2c/reply" method="post">


          <textarea name="" id="" cols="100" rows="10" v-model="mesg"></textarea>
          <input class="span-primary submit_btn" type="button" data-loading-text="回复中.." value="回复" @click="setdata">
          <input type="hidden" name="_csrf" id="_csrf" vue="Ytq10nom-DB0pfFNpwv1Egbo2wSg6H4bGC6c">
        </form>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
      props:["dataArr","dataId","dataUserid"],
        name: "comment",
      data(){
          return{
            item:this.dataArr,
            mesg:"",
            id:this.dataId,
            userid:this.dataUserid,
            messg:"",
            gh:""
          }
      },
      watch:{
        $route(){
          this.getdata()
          // this.setdata()
          // this.dianzan()
          // this.show()
        }
      },
      mounted(){
        this.getdata()
        // this.show()
        // this.dianzan()
        // this.setdata()
      },
        methods:{
            getdata(){
              // console.log(this.id)
              // console.log(this.item)
              this.item.forEach((i)=>{
                 let shi = new Date()
                let jian = new Date(i.create_at)
                // console.log(i)
                let sj = shi-jian
                 let tian = parseInt((sj/1000/60/60/24))
                let yue = parseInt((sj/1000/60/60/24/30))
                if(yue>=1){
                   i.create_at = yue  +"月"
                }else if(tian>=1){
                   i.create_at = tian +"天"
                }
              })
            },
            setdata(){
               let id = this.id
              // console.log(id)
                this.$axios.post(" https://cnodejs.org/api/v1/topic/"+id+"/replies",{
                  accesstoken :"5492ec54-7dfb-47b2-ae06-a5ea8f212fc7",
                  content:this.mesg,
              }).then(res=>{
                      // console.log(res)
                })
            },
            dianzan(id,keys){
              // alert("aaa")
              //    console.log(id)
              // console.log(keys)
                this.$axios.post(" https://cnodejs.org/api/v1/reply/"+id+"/ups",{
                  accesstoken:"5492ec54-7dfb-47b2-ae06-a5ea8f212fc7"
                }).then(res=>{
                  if(res.data.action=="up"){
                    this.item[keys].ups.push(1)
                  }else if(res.data.action=="down"){
                    this.item[keys].ups.splice(0,1)
                  }

                })
            },
          show(id){
                if(this.gh==id){
                       this.gh=""
                }else{
                  this.gh=id
                }
                  console.log(this.gh)
            console.log(id)
          },
            pinglun(id,ids){
              // console.log(id)
              this.$axios.post(" https://cnodejs.org/api/v1/topic/"+ids+"/replies",{
                accesstoken :"5492ec54-7dfb-47b2-ae06-a5ea8f212fc7",
                content:this.messg,
                reply_id:id
              }).then(res=>{
                console.log(res)
              })
            }
        }
    }
</script>

<style scoped lang="scss">
  .span-primary {
    border-radius: 3px;
    background-color: #08c;
  }
  .span-primary, .span-success {
    border: none;
    display: inline-block;
    float: none;
    padding: 3px 10px;
    margin: 0;
    font-size: 14px;
    transition: all .2s ease-in-out;
    letter-spacing: 2px;
    box-shadow: none;
    line-height: 2em;
    vertical-align: middle;
    color: #fff;
    cursor: pointer;
  }
  .panel {
    margin-bottom: 13px;
  }
  .panel .header {
    padding: 10px;
    background-color: #f6f6f6;
    border-radius: 3px 3px 0 0;
  }
  .header .col_fade {
    color: #444;
  }
  .col_fade {
    color: #ababab;
  }
  .inner.reply, .panel .inner.topic, .panel .inner.userinfo {
    padding: 10px;
    border-top: 1px solid #e5e5e5;
  }
  .panel .inner {
    padding: 10px;
    border-radius: 0 0 3px 3px;
  }
  form, textarea {
    margin-bottom: 0;
  }
  form {
    margin: 0 0 20px;
  }
  user agent stylesheet
  form {
    display: block;
    margin-top: 0em;
  }
  .cell.reply_highlight {
    background-color: #f4fcf0;
  }

  .panel .cell {
    padding-right: 10px;
    background: #fff;
    border-top: 1px solid #f0f0f0;
  }
  .cell {
    position: relative;
    padding: 10px 0 10px 10px;
    font-size: 14px;
    width: 1000px;
    min-height: 105px;
  }
  #content .changes, .cell, .unstyled li div, .user_name, a.dark, a.topic_title {
    overflow: hidden;
  }
  .reply_content {
    padding-left: 50px;
    color: #333;
    div{
      p {
        font-size: 15px;
        line-height: 1.7em;
        overflow: auto;
        margin-top: 5px;
      }
    }

  }
  .markdown-text{
    margin-top: 5px !important;
  }
  .author_content .user_avatar {
    display: inline-block;
    float: left;
  }
  .user_avatar img, .user_big_avatar img {
    width: 30px !important;
    height: 30px;
    border-radius: 3px;
  }
  .user_info {
    margin-left: 10px;
    display: inline-block;
  }
  .user_action {
    float: right;
    margin-left: 20px;
    font-size: 15px;
  }
  .reply2_area {
    margin-left: 42px;
  }
  .markdown-text{
    width: 992.8px;
    height: 64.6px;
  }
  .cell .reply_area .reply_item .reply_highlight{
    width: 1062.28px !important;
    height: 121.4px !important;
  }
</style>
