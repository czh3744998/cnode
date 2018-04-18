<template>
  <!--<cnode-dh></cnode-dh>-->
  <div id="main">

    <side-bar>

    </side-bar>
    <div id="content">
      <div class="header topic_header">
      <span class="topic_full_title">
<span class="put_top">来自
  <span v-if="arr.good" style="color: white;background: #3c763d;border-radius: 5px;">精品</span>
        <span v-else-if="arr.top" style="color: white;background: #3c763d;border-radius: 5px;">置顶</span>
        <span v-else-if="arr.tab=='share'" style="color: #5e5e5e;background: #e1e1e1;border-radius:5px;">分享</span>
        <span v-else style="color: #5e5e5e;background: #e1e1e1;border-radius: 5px;">问答</span></span>
        {{arr.title}}
      </span>
        <div class="changes">
        <span>
          发布于{{arr.create_at}}前
        </span>
          <span>
          作者 <a href="/user/JacksonTian">{{arr.author.loginname}}</a>
        </span>
          <span>
         {{arr.visit_count}}次浏览
        </span>
          <!--<span>-->
          <!--最后一次编辑是 3 天前-->
          <!--</span>-->
          <span v-if="arr.tab=='share'">分享</span>
          <span v-else>问答</span>
        </div>
        <div class="shoucang" v-if="flag" @click="dj()">收藏</div>
        <div class="qxsc"  v-if="flaga" @click="dj()">取消收藏</div>
        <div id="manage_topic">
          <router-link :to="'/topic/'+arr.id+'/bjzt'">
            <i class="fa fa-lg fa-pencil-square-o" title="编辑">编辑</i></router-link>
          <router-link to="" href="javascript:;" data-id="5ad326e4464b1bfa6b4251b8" class="delete_topic_btn">
            <i class="fa fa-lg fa-trash" title="删除">删除</i></router-link>

        </div>
      </div>
      <div style="width: 60%;">
        <div v-html="arr.content" class="markdown-text">
        </div>
        <com-ment :data-arr="arr.replies" :data-id="arr.id" :data-userid="arr.reply_id"></com-ment>
      </div>
    </div>


  </div>

</template>

<script>
  import cnodeDh from './dh'
  import sideBar from './sidebar'
  import comMent from './comment'

  export default {
    name: "page",
    data() {
      return {
        arr: [],
        flag:"",
        flaga:""
      }
    },
    components: {
      cnodeDh,
      sideBar,
      comMent
    },
    watch: {
      $route() {
        this.getsj()
        this.setdata()
        this.getdata()
        this.dj()
      }
    },
    created() {
      this.getsj()
      this.setdata()
      this.getdata()
      this.dj()
    },
    methods: {
      getsj() {
        let id = this.$route.query.id
        console.log(id)
        this.$axios.get(" https://cnodejs.org/api/v1/topic/" + id).then(res => {
          this.arr = res.data.data
          // console.log(this.arr)
          let i = this.arr
          let ri = new Date()
          let qi = new Date(i.create_at)
          let sj = ri - qi
          let tian = parseInt((sj / 1000 / 60 / 60 / 24))
          this.arr.create_at = tian
        })
      },
      setdata(){
        this.$axios.post(" https://cnodejs.org/api/v1/topic_collect/collect",{
          accesstoken:"5492ec54-7dfb-47b2-ae06-a5ea8f212fc7",
          topic_id:this.$route.query.id
        }).then(res=>{

          this.flag=res.data.success
          console.log(this.flag)
        })
      },
      getdata(){
        this.$axios.post(" https://cnodejs.org/api/v1/topic_collect/de_collect",{
          accesstoken:"5492ec54-7dfb-47b2-ae06-a5ea8f212fc7",
          topic_id:this.$route.query.id
        }).then(res=>{

          this.flaga=res.data.success
          console.log(this.flaga)
        })
      },
      dj(){
        if(this.flag==this.flag){
            this.flag=!this.flag
           this.flaga=!this.flaga
        }else{
          this.flag=!this.flag
          this.flaga=!this.flaga
        }

      },

    }
  }
</script>

<style scoped lang="scss">
  #manage_topic a {
    text-decoration: none;
    margin-right: .5em;
  }
  a {
    color: #08c;
    text-decoration: none;
  }
  .fa-lg {
    font-size: 1.33333333em;
    line-height: .75em;
    vertical-align: -15%;
  }
  .fa {
    font: normal normal normal 14px/1 FontAwesome;
    font-size: inherit;
    text-rendering: auto;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  #main {
    width: 90%;
    max-width: 1400px;
    min-width: 960px;
    margin: 15px auto;
    min-height: 400px;
  }

  #footer, #main {
    position: relative;
  }

  #content {
    padding: 0;
    margin-right: 305px;

  }

  .panel {
    margin-bottom: 13px;

  }

  .header {
    padding: 10px;
    background-color: #f6f6f6;
    border-radius: 3px 3px 0 0;
    position: relative;
  }

  .topic_full_title {
    font-size: 22px;
    font-weight: 700;
    margin: 8px 0;
    display: inline-block;
    vertical-align: bottom;
    width: 75%;
    line-height: 130%;

  }

  #content .changes {
    font-size: 12px;
    color: #838383;
  }

  .put_top {
    background: #80bd01;
    padding: 2px 4px;
    border-radius: 3px;
    -webkit-border-radius: 3px;
    -moz-border-radius: 3px;
    -o-border-radius: 3px;
    color: #fff;
    font-size: 12px;
  }

  .panel .inner.post, .panel .inner.reply, .panel .inner.topic, .panel .inner.userinfo {
    padding: 10px;
    border-top: 1px solid #e5e5e5;
  }

  .panel .inner {
    padding: 10px;
    border-radius: 0 0 3px 3px;
  }

  .topic_content {
    margin: 0 10px;
  }

  .panel .inner, .panel .inner li {
    line-height: 2em;
  }

  .topic_content p {
    font-size: 15px;
    line-height: 1.7em;
    overflow: auto;
  }

  img {
    width: auto \9
  ;
    height: auto;
    max-width: 100%;
    vertical-align: middle;
    width: 1022.8px !important;
    border: 0;
    -ms-interpolation-mode: bicubic;
  }

  .preview p, .reply_content p, .reply_form p, .topic_content p {
    font-size: 15px;
    line-height: 1.7em;
    overflow: auto;
  }

  .topic_content p {
    font-size: 15px;
    line-height: 1.7em;
    overflow: auto;
  }

  .markdown-text {
    width: 1022.8px;
    height: 501.4px;

  }

  .markdown-text p, .preview p {
    white-space: pre-wrap;
    white-space: -moz-pre-wrap;
    white-space: -pre-wrap;
    white-space: -o-pre-wrap;
    word-wrap: break-word;
    line-height: 2em;
    margin: 1em 0;
  }

  .panel {
    margin-bottom: 13px;
  }

  .panel .header {
    padding: 10px;
    background-color: #f6f6f6;
    border-radius: 3px 3px 0 0;
  }

  .cell.reply_highlight {
    background-color: #f4fcf0;
  }

  .panel .cell {
    padding-right: 10px;
    background: #fff;
    border-top: 1px solid #f0f0f0;
  }
.shoucang{

  width: 60px;
  height: 40px;
  background: greenyellow;
  color: white;
  font-weight: bolder;
  line-height: 40px;
  text-align: center;
  font-size: 15px;
  position: absolute;
  top: 20px;
  right: 20px;
}
  .qxsc{
    width: 60px;
    height: 40px;
    background: darkgrey;
    color: white;
    font-weight: bolder;
    line-height: 40px;
    text-align: center;
    font-size: 15px;
    position: absolute;
    top: 20px;
    right: 20px;
  }
</style>
