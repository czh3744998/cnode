<template>
<div id="main">
  <div id="content">
    <div class="panel">
      <div class="header">
        <ul class="breadcrumb">
          <li><a href="/">主页</a><span class="divider">/</span></li>
          <li class="active">新消息</li>
        </ul>
      </div>

      <div class="inner">

        <p v-for="item in data.hasnot_read_messages" v-if="item!=0">
          <router-link to="">{{item.author.loginname}}</router-link>
          回复了你的话题：
          <span  @click="yid(item.id)">{{item.topic.title}}</span>
        </p>
        <p v-if="data.hasnot_read_messages==0">无消息</p>
      </div>

    </div>
    <div class="panel">
      <h4>过往消息</h4>
      <p v-for="item in data.has_read_messages" v-if="item!=0">
        <router-link to="">{{item.author.loginname}}</router-link>
        回复了你的话题：
        <router-link to="">{{item.topic.title}}</router-link>
      </p>
      <p v-if="data.has_read_messages==0">无消息</p>

    </div>
  </div>
  <side-bar style="float: right"></side-bar>
</div>
</template>

<script >
  import  sideBar from "./sidebar"
    export default {
        name: "wdxx",
      components:{
          sideBar
      },
      data(){
         return{
           data:[]
         }
      },
      watch:{
          $router(){
            this.getdata()
            this.setdata()
          }
      },
      created(){
          this.getdata()
        this.setdata()
      },
      methods:{
          getdata(){
            this.$axios.get(" https://cnodejs.org/api/v1/messages",{
              params:{
                accesstoken:"5492ec54-7dfb-47b2-ae06-a5ea8f212fc7"
              }
            }).then(res=>{
              this.data=res.data.data
              console.log(this.data)
            })
          },

        yid(id){
          this.$axios.post(" https://cnodejs.org/api/v1/message/mark_one/"+id,{
            accesstoken:"5492ec54-7dfb-47b2-ae06-a5ea8f212fc7"
          }).then(res=>{
            console.log(res)
          })
        },
        setdata(){
          this.$axios.post(" https://cnodejs.org/api/v1/message/mark_all/",{
            accesstoken:"5492ec54-7dfb-47b2-ae06-a5ea8f212fc7"
          }).then(res=>{
            console.log(res)
          })
        }
      }
    }
</script>

<style scoped lang="scss">
  #main {
    width: 90%;
    max-width: 1400px;
    min-width: 960px;
    margin: 15px auto;
    min-height: 400px;
  }
   #main {
    position: relative;
  }
  #content {
    padding: 0;
    /*margin-right: 305px;*/
    float: left;
    width: 1100px;
  }
  .panel {
    margin-bottom: 13px;
  }
  .panel .header {
    padding: 10px;
    background-color: #f6f6f6;
    border-radius: 3px 3px 0 0;
  }
  .panel .inner {
    padding: 10px;
    border-radius: 0 0 3px 3px;
  }
  .panel .header.topic_header, .panel .inner {
    background-color: #fff;
  }
  .panel .inner, .panel .inner li {
    line-height: 2em;
  }
  .breadcrumb {
    padding: 0;
    margin: 0;
    border: none;
    background: 0 0;
  }

  .breadcrumb, .pagination ul, .span-common {
    box-shadow: none;
  }
  .breadcrumb {
    padding: 8px 15px;
    margin: 0 0 20px;
    background-color: #f5f5f5;
    border-radius: 4px;
  }
  .breadcrumb>li, .navbar .brand {
    text-shadow: none;
  }
  .breadcrumb>li {
    display: inline-block;
    text-shadow: 0 1px 0 #fff;
  }
  dd, dt, li {
    line-height: 20px;
  }
  .breadcrumb a {
    color: #80bd01;
  }
  a {
    color: #08c;
    text-decoration: none;
  }
  p, textarea {
    font-size: 14px;
    word-break: break-word;
  }
  p {
    margin: 0 0 10px;
  }
  .inner{
    p{
      a{
        color: blue;
      }
    }
  }
</style>
