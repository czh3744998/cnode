<template>
    <div>
      <side-bar></side-bar>
      <div id="content">
        <div class="panel">
          <div class="header">
            <ul class="breadcrumb">
              <li><a href="/">主页</a><span class="divider">/</span></li>
              <li class="active">czh3744998 收藏的话题</li>
            </ul>
          </div>
          <div class="inner no-padding">

            <div id="topic_list">

              <div class="cell" v-for="item in arr">

                <a class="user_avatar pull-left" href="/user/imzengyang">
                  <img  :src="item.author.avatar_url"  title="imzengyang" >
                </a>

                <span class="reply_count pull-left">
    <span class="count_of_replies" title="回复数">
      {{item.reply_count}}
    </span>
    <span class="count_seperator">/</span>
    <span class="count_of_visits" title="点击数">
      {{item.visit_count}}
    </span>
  </span>
                <a class="last_time pull-right" href="/topic/5ab34443e7b166bb7b9ecd06#5ad51d1d3edb2aff6be85a12" >
                  <img class="user_small_avatar img" src="https://avatars2.githubusercontent.com/u/28534235?v=4&amp;s=120">
                  <span class="last_active_time">{{item.last_replay_at}} 小时前</span>
                </a>
                <div class="topic_title_wrapper">
                  <span v-if="item.good" style="color: white;background: #3c763d;border-radius: 5px;">精品</span>
                  <span v-else-if="item.top" style="color: white;background: #3c763d;border-radius: 5px;">置顶</span>
                  <span v-else-if="item.tab=='share'" style="color: #5e5e5e;background: #e1e1e1;border-radius:5px;">分享</span>
                  <span v-else style="color: #5e5e5e;background: #e1e1e1;border-radius: 5px;">问答</span>
                  <a class="topic_title" style="overflow: hidden" href="/topic/5ab34443e7b166bb7b9ecd06" title="为社区做贡献，帮社区写自动化测试代码" >
                    {{item.title}}
                  </a>
                </div>
              </div>

            </div>
            <div class="pagination" current_page="1">
              <ul>
                <li class="disabled"><a>«</a></li>
                <li class="disabled active"><a>1</a></li>
                <li class="disabled"><a>»</a></li>
              </ul>
            </div>



          </div>
        </div>
      </div>
    </div>
</template>

<script>
  import sideBar from  './sidebar'
    export default {
        name: "collections",
      components:{
          sideBar
      },
      data(){
          return{
            arr:[]
          }
      },
      watch:{
          $route(){
            this.getdata()
          }
      },
      created(){
         this.getdata()
      },
      methods:{
          getdata(){
            let xm = this.$route.query.xm
            this.$axios.get(" https://cnodejs.org/api/v1/topic_collect/"+xm).then(res=>{
              this.arr=res.data.data
              console.log(this.arr)
            })
          }
      }
    }
</script>

<style scoped lang="scss">
  .img{
    width: 30px;
    height: 30px;
  }
  #content {
    padding: 0;
    margin-right: 305px;
  }
  #main {
    width: 90%;
    max-width: 1400px;
    min-width: 960px;
    margin: 15px auto;
    min-height: 400px;
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
  .breadcrumb>.active {
    color: #999;
  }
  .breadcrumb>li, .navbar .brand {
    text-shadow: none;
  }
  .panel .inner.no-padding {
    padding: 0;
  }
  .panel .inner {
    padding: 10px;
    border-radius: 0 0 3px 3px;
  }
  .panel .cell:nth-child(1) {
    border-top: none;
  }
  .cell:last-child {
    border-bottom: none;
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
    height: 55px;
  }
  .panel .inner a {
    color: #778087;
  }
  .pull-left {
    float: left;
  }
  .user_avatar img, .user_big_avatar img {
    width: 30px;
    height: 30px;
    border-radius: 3px;
  }
  /*.user_avatar img {*/
    /*width: auto\9;*/
    /*height: auto;*/
    /*max-width: 100%;*/
    /*vertical-align: middle;*/
    /*border: 0;*/
    /*-ms-interpolation-mode: bicubic;*/
  /*}*/
  .cell .reply_count {
    width: 70px;
    display: inline-block;
    text-align: center;
  }
  .pull-left {
    float: left;
  }
  .panel .inner a {
    color: #778087;
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
  .pagination {
    height: 40px;
    margin: 10px 0 0 10px;
  }
  .pagination {
    margin: 20px 0;
  }
  .pagination ul {
    display: inline-block;
    margin-bottom: 0;
    margin-left: 0;
    -webkit-border-radius: 4px;
    -moz-border-radius: 4px;
    border-radius: 4px;
    -webkit-box-shadow: 0 1px 2px rgba(0,0,0,.05);
    -moz-box-shadow: 0 1px 2px rgba(0,0,0,.05);
    box-shadow: 0 1px 2px rgba(0,0,0,.05);
  }
  li {
    line-height: 2em;
  }
  .pagination ul>li {
    display: inline;
  }

</style>
