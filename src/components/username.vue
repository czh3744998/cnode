<template>
          <div>
            <side-bar>
              <div slot="cha">
                <router-link :to="{name:'username',query:{xm:data.loginname}}">

                  <p><img :src="data.avatar_url" alt="" style="width: 50px;height: 50px;"><span style="color:darkgrey;font-size: 20px;margin-left: 10px;">{{data.loginname}}</span></p>
                  <p>积分:{{data.score}}</p>
                  <p>"这家伙很懒，什么个性签名都没有留下。"</p>
                </router-link>
                <div class="fab">
                  <router-link to="/newtheme">发布话题</router-link>
                </div>
              </div>
            </side-bar>
            <div id="content">
              <div class="panel">
                <div class="header">
                  <ul class="breadcrumb">
                    <li><a href="/">主页</a><span class="divider">/</span></li>
                  </ul>
                </div>
                <div class="inner userinfo">
                  <div class="user_big_avatar">
                    <img :src="data.avatar_url" class="user_avatar" title="czh3744998">
                  </div>
                  <a class="dark">{{data.loginname}}</a>

                  <div class="user_profile">
                    <ul class="unstyled">
                      <span class="big">{{data.score}}</span> 积分



                      <li>
                        <router-link :to="{name:'collections',query:{xm:data.loginname}}" class="dark" target="_blank">
                          <span class="big collect-topic-count">{{arr}}</span>个话题收藏
                        </router-link>
                      </li>
                      <li>
                        <i class="fa fa-lg fa-fw fa-github"></i>
                        <a class="dark" href="https://github.com/+data.loginname" target="_blank">
                          @{{data.loginname}}
                        </a>
                      </li>


                    </ul>
                  </div>
                  <p class="col_fade">注册时间 {{data.create_at}}前</p>

                </div>
              </div>

              <div class="panel">
                <div class="header">
                  <span class="col_fade">最近创建的话题</span>
                </div>

                <div class="cell" v-for="item in data.recent_topics">

                  <a class="user_avatar pull-left" href="/user/czh3744998">
                    <img :src="item.author.avatar_url" title="item.author.loginname">
                  </a>

                  <span class="reply_count pull-left">
    <span class="count_of_replies" title="回复数">
      5
    </span>
    <span class="count_seperator">/</span>
    <span class="count_of_visits" title="点击数">
      12
    </span>
  </span>


                  <a class="last_time pull-right" href="/topic/5ad326e4464b1bfa6b4251b8#5ad347bc464b1bfa6b4251f3">
                    <img class="user_small_avatar" src="https://avatars3.githubusercontent.com/u/37645902?v=4&amp;s=120">
                    <span class="last_active_time">{{item.last_reply_at}}前</span>
                  </a>



                  <div class="topic_title_wrapper">




                    <a class="topic_title" href="/topic/5ad326e4464b1bfa6b4251b8" title="测试中测试中测试中测试中">
                    {{item.title}}
                    </a>
                  </div>
                </div>

                <div class="cell more">
                  <a class="dark" href="/user/czh3744998/topics">查看更多»</a>
                </div>

              </div>

              <div class="panel">
                <div class="header">
                  <span class="col_fade">最近参与的话题</span>
                </div>

                <div class="cell" v-for="item in data.recent_replies">

                  <a class="user_avatar pull-left" href="/user/Niuxixian">
                    <img :src="item.author.avatar_url" title="item.author.loginname">
                  </a>

                  <span class="reply_count pull-left">
    <span class="count_of_replies" title="回复数">
      14
    </span>
    <span class="count_seperator">/</span>
    <span class="count_of_visits" title="点击数">
      6
    </span>
  </span>


                  <a class="last_time pull-right" href="/topic/5ad3114cba60fcc66b7b8121#5ad33d733edb2aff6be85893">
                    <img class="user_small_avatar" src="https://avatars0.githubusercontent.com/u/38392524?v=4&amp;s=120">
                    <span class="last_active_time">{{item.last_reply_at}} 小时前</span>
                  </a>



                  <div class="topic_title_wrapper">




                    <router-link :to="{name:'bjzt',query:{id:item.id}}" class="topic_title" href="/topic/5ad3114cba60fcc66b7b8121" title="item.title">
                      {{item.title}}
                    </router-link>
                  </div>
                </div>

                <div class="cell more">
                  <a class="dark" href="/user/czh3744998/replies">查看更多»</a>
                </div>

              </div>
            </div>

          </div>
</template>

<script>
  import  sideBar from "./sidebar"
    export default {
        name: "username",
      components:{
          sideBar
      },
      data(){
          return{
            data:[],
            arr:""
          }
      },
      watch:{
          $route(){
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
            let xm = this.$route.query.xm
            this.$axios.get(" https://cnodejs.org/api/v1/user/"+xm).then(res=>{
              this.data=res.data.data
              // console.log(this.data)
            })
          },
        setdata(){
            let xm = this.$route.query.xm
          // console.log(xm)
            this.$axios.get(" https://cnodejs.org/api/v1/topic_collect/"+xm).then(res=>{
              this.arr=res.data.data.length
              console.log(this.arr)
            })
        }
      }
    }
</script>

<style scoped>

  #content {
    padding: 0;
    margin-right: 305px;
  }
  .panel {
    margin-bottom: 13px;
  }
  .panel .header {
    padding: 10px;
    background-color: #f6f6f6;
    border-radius: 3px 3px 0 0;
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
  breadcrumb a {
    color: #80bd01;
  }
  a {
    color: #08c;
    text-decoration: none;
  }
  .breadcrumb>li>.divider {
    padding: 0 5px;
    color: #ccc;
  }
  .breadcrumb>li, .navbar .brand {
    text-shadow: none;
  }
  .breadcrumb>li {
    display: inline-block;
    text-shadow: 0 1px 0 #fff;
  }
  .panel .inner.userinfo {
    padding: 10px;
    border-top: 1px solid #e5e5e5;
  }
  .panel .inner {
    padding: 10px;
    border-radius: 0 0 3px 3px;
  }
  .user_big_avatar {
    float: left;
    margin-right: 10px;
  }
  .user_big_avatar img {
    width: 40px;
    height: 40px;
  }
  .user_avatar img, .user_big_avatar img {
    width: 30px;
    height: 30px;
    border-radius: 3px;
  }
  img {
    width: auto\9;
    height: auto;
    max-width: 100%;
    vertical-align: middle;
    border: 0;
    -ms-interpolation-mode: bicubic;
  }
  .panel .inner, .panel .inner li {
    line-height: 2em;
  }
  panel .inner a {
    color: #778087;
  }
  a.dark, a.dark:active, a.dark:link, a.dark:visited {
    color: #666;
    text-decoration: none;
  }
  .panel .inner .unstyled li div, .topic_title_wrapper, .user_name, a.dark, a.topic_title {
    text-overflow: ellipsis;
  }
  .user_profile {
    margin-top: 20px;
    clear: left;
  }
  user agent stylesheet
  div {
    display: block;
  }
  .panel .inner, .panel .inner li {
    line-height: 2em;
  }
  ul.unstyled {
    margin-left: 0;
    list-style: none;
  }
  ol, ul {
    padding: 0;
    margin: 0 0 10px 25px;
  }
  .big {
    font-size: 14px;
  }
  .col_fade {
    color: #ababab;
  }
  body, input, p, textarea {
    font-size: 14px;
    word-break: break-word;
  }
  p {
    margin: 0 0 10px;
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
  }
  .pull-left {
    float: left;
  }
  .pull-left {
    float: left;
  }
  a {
    color: #08c;
    text-decoration: none;
  }
  .cell .reply_count {
    width: 70px;
    display: inline-block;
    text-align: center;
  }
  a.last_time {
    text-decoration: none;
  }
  .pull-right {
    float: right;
  }
  .last_time {
    font-size: 11px;
    display: inline-block;
    margin-left: 20px;
    color: #777;
  }
  .topic_title_wrapper {
    white-space: nowrap;
  }
  .panel .inner .unstyled li div, .topic_title_wrapper, .user_name, a.dark, a.topic_title {
    text-overflow: ellipsis;
  }
  a.topic_title {
    max-width: 70%;
    -o-text-overflow: ellipsis;
    white-space: nowrap;
    display: inline-block;
    vertical-align: middle;
    font-size: 16px;
    line-height: 30px;
  }
  .last_time .user_small_avatar {
    height: 18px;
    width: 18px;
    vertical-align: middle;
    margin-right: .5em;
    border-radius: 3px;
  }
  img {
    width: auto\9;
    height: auto;
    max-width: 100%;
    vertical-align: middle;
    border: 0;
    -ms-interpolation-mode: bicubic;
  }
  #content .reply_count {
    position: absolute;
    bottom: 0;
    left: 85px;
    text-align: left;
    line-height: 2em;
    font-size: 10px;
  }
  .cell .reply_count {
    width: 70px;
    display: inline-block;
    text-align: center;
  }
  .panel>.cell:last-child {
    box-shadow: none;
  }
  .cell:last-child {
    border-bottom: none;
  }
  .cell.message, .cell.more, .cell[message_id] {
    padding: 10px;
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
  }
  #content .changes, .cell, .unstyled li div, .user_name, a.dark, a.topic_title {
    overflow: hidden;
  }
  a.dark, a.dark:active, a.dark:link, a.dark:visited {
    color: #666;
    text-decoration: none;
  }
  .panel .inner .unstyled li div, .topic_title_wrapper, .user_name, a.dark, a.topic_title {
    text-overflow: ellipsis;
  }
</style>
