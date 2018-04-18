<template>
  <div id="main">
    <side-bar>
      <div slot="cha">
        <router-link :to="{name:'username',query:{xm:arr.loginname}}">

          <p><img :src="arr.avatar_url" alt="" style="width: 50px;height: 50px;"><span
            style="color:darkgrey;font-size: 20px;margin-left: 10px;">{{arr.loginname}}</span></p>
          <p>积分:{{arr.score}}</p>
          <p>"这家伙很懒，什么个性签名都没有留下。"</p>
        </router-link>
        <div class="fab">
          <router-link to="/theme">发布话题</router-link>
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
            <img :src="arr.avatar_url" class="user_avatar" title="arr.githubUsername">
          </div>
          <a class="dark">{{arr.loginname}}</a>

          <div class="user_profile">
            <ul class="unstyled">
              <span class="big">{{arr.score}}</span> 积分

              <li>
                <a class="dark" target="_blank">
                  <span class="big collect-topic-count">5</span>个话题收藏  bb
                </a>
              </li>
              <li>
                <i class="fa fa-lg fa-fw fa-github"></i>
                <a class="dark" target="_blank">
                  @JacksonTian
                </a>
              </li>
            </ul>
          </div>
          <p class="col_fade">注册时间 7 年前</p>
        </div>
      </div>
      <div class="panel" style="overflow: hidden;height: 302.65px;">
        <div class="header">
          <span class="col_fade">最近创建的话题</span>
        </div>
        <div class="cell" v-for="(item,key) in arr.recent_topics" :key="key">
          <a class="user_avatar pull-left" href="/user/JacksonTian">
            <img :src="item.author.avatar_url" :title="item.author.loginname">
          </a>
          <span class="reply_count pull-left">
    <span class="count_of_replies" title="回复数">
      12
    </span>
    <span class="count_seperator">/</span>
    <span class="count_of_visits" title="点击数">
      3151
    </span>
  </span>
          <a class="last_time pull-right" href="">
            <img class="user_small_avatar" src="https://avatars1.githubusercontent.com/u/17040010?v=4&amp;s=120">
            <span class="last_active_time">{{item.last_reply_at}}前</span>
          </a>
          <div class="topic_title_wrapper">
            <a class="topic_title" :title="item.title">
              <router-link :to="{name:'page',query:{id:item.id}}">
                {{item.title}}
              </router-link>
            </a>
          </div>
        </div>
        <div class="cell more">
          <a class="dark" href="/user/JacksonTian/topics">查看更多»</a>
        </div>
      </div>
      <div class="panel">
        <div class="header">
          <span class="col_fade">最近参与的话题</span>
        </div>
        <div class="cell" v-for="item in arr.recent_replies">
          <a class="user_avatar pull-left">
            <img :src="item.author.avatar_url" title="Kevinzhang29">
          </a>
          <span class="reply_count pull-left">
    <span class="count_of_replies" title="回复数">
      8
    </span>
    <span class="count_seperator">/</span>
    <span class="count_of_visits" title="点击数">
      841
    </span>
  </span>
          <a class="last_time pull-right">
            <img class="user_small_avatar" src="https://avatars2.githubusercontent.com/u/12859005?v=4&amp;s=120">
            <span class="last_active_time">{{item.last_reply_at}}</span>
          </a>
          <div class="topic_title_wrapper">
            <a class="topic_title" title="想问问大佬们，阿里node p6岗 需要什么水平？">
              <router-link :to="{name:'page',query:{id:item.id}}">
                {{item.title}}
              </router-link>

            </a>
          </div>
        </div>
        <div class="cell more">
          <a class="dark">查看更多»</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import sideBar from './sidebar'

  export default {
    name: "info",
    components: {
      sideBar
    },
    data() {
      return {
        arr: []
      }
    },
    watch: {
      $route() {
        this.getdata()
      }
    },
    mounted() {
      this.getdata()
    },
    methods: {
      getdata() {
        let id = this.$route.query.id
        this.$axios.get("https://cnodejs.org/api/v1/user/" + id).then(res => {
          this.arr = res.data.data
          // console.log(this.arr)
          // console.log(this.arr.recent_replies)
          // this.arr.recent_replies.forEach((val)=>{
          //   let si = new Date()
          //   let jan = new Date(val.last_reply_at)
          //   let shij= si-jan
          //   let nian= parseInt((shij/1000/60/60/24/12))
          //   console.log(shij)
          // })
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

  .breadcrumb > li, .navbar .brand {
    text-shadow: none;
  }

  .breadcrumb > li {
    display: inline-block;
    text-shadow: 0 1px 0 #fff;
  }

  .breadcrumb > li > .divider {
    padding: 0 5px;
    color: #ccc;
  }

  .breadcrumb > li, .navbar .brand {
    text-shadow: none;
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

  .panel .inner a {
    color: #778087;
  }

  .user_profile {
    margin-top: 20px;
    clear: left;
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

  .panel .inner, .panel .inner li {
    line-height: 2em;
  }

  .col_fade {
    color: #ababab;
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

  .panel .cell {
    padding-right: 10px;
    background: #fff;
    border-top: 1px solid #f0f0f0;
  }

  .cell {
    position: relative;
    padding: 10px 0 10px 10px;
    font-size: 14px;
    a {
      img {
        width: 30px;
        height: 30px;
      }
    }
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

  .pull-left {
    float: left;
  }

  .last_time {
    font-size: 11px;
    display: inline-block;
    margin-left: 20px;
    color: #777;
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

  .panel .cell {
    padding-right: 10px;
    background: #fff;
    border-top: 1px solid #f0f0f0;
  }

  .cell {
    position: relative;
    padding: 10px 0 10px 10px;
    font-size: 14px;
    img {
      width: auto \9
    ;
      height: auto;
      max-width: 100%;
      vertical-align: middle;
      border: 0;
      -ms-interpolation-mode: bicubic;
    }
  }

  a {
    color: #08c;
    text-decoration: none;
  }

  .cell .reply_count {
    width: 70px;
    display: inline-block;
    text-align: center;
    margin-top: 5px;
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
</style>
