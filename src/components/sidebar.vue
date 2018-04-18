<template>
      <div id="sidebar">
        <div class="panel">

          <div class="inner">
            <h4 style="margin-bottom: 35px">个人信息</h4>

              <div>

                <slot name="cha">
                  <router-link :to="{name:'username',query:{xm:'czh3744998'}}">

                    <p><img src="../assets/logo.png" alt="" style="width: 50px;height: 50px;"><span style="color:darkgrey;font-size: 20px;margin-left: 10px;">czh3744998</span></p>
                    <p>积分:5</p>
                    <p>"这家伙很懒，什么个性签名都没有留下。"</p>
                  </router-link>
                </slot>

            </div>
            <div class="fab">
              <router-link to="/theme">发布话题</router-link>
            </div>
          </div>

        </div>
        <div class="panel">
          <div class="inner ads">



            <a href="https://www.aliyun.com/product/nodejs?ref=cnode" target="_blank" class="banner sponsor_outlink" data-label="alinode">
              <img src="//dn-cnode.qbox.me/Fn4D6BhOTz1IswvmzeZ1q7QW1ls_">
            </a>


            <div class="sep10"></div>

            <a href="https://render.alipay.com/p/s/taobaonpm_click/image_click_25" target="_blank" class="banner sponsor_outlink" data-label="aliyun">
              <img src="//dn-cnode.qbox.me/Fu6b5DIbI_Va2i5oFjIByRGizFuP">
            </a>


            <div class="sep10"></div>

            <a href="http://www.ucloud.cn/site/active/gift.html?utm_source=cnodejs&amp;utm_medium=content_pic_pc&amp;utm_campaign=multicloud&amp;utm_content=gift&amp;ytag=cnodejs" target="_blank" class="banner sponsor_outlink" data-label="ucloud-banner">
              <img src="//dn-cnode.qbox.me/FgQS-GQDfqwAD_v0NuhyYUOUk5MG">
            </a>


            <div class="sep10"></div>

            <a href="https://0x7.me/UDyj" target="_blank" class="banner sponsor_outlink" data-label="qiniu-sidebar">
              <img src="//dn-cnode.qbox.me/Fv9R31Y6ySKKJi95ldk9TRkJ7o5O">
            </a>


            <div class="sep10"></div>

            <a href="https://enhancer.io" target="_blank" class="banner sponsor_outlink" data-label="enhancer.io">
              <img src="//dn-cnode.qbox.me/Fq72q-0Z18wsDDuHAHsUik1PlIeK">
            </a>

          </div>
        </div>
        <div class="panel">
          <div class="header">
            <span class="col_fade">无人回复的话题</span>
          </div>
          <div class="inner">

            <ul class="unstyled">

              <li>
                <div><a class="dark topic_title" href="/topic/5acd660f042a804dc519683e" title="为什么我的账号里面没有accessToken？ 求各位大神解答下">为什么我的账号里面没有accessToken？ 求各位大神解答下</a>
                </div>
              </li>


              <li>
                <div><a class="dark topic_title" href="/topic/5acc57b8042a804dc5196800" title="Docker&amp;Kubernetes技术沙龙第八期">Docker&amp;Kubernetes技术沙龙第八期</a>
                </div>
              </li>


              <li>
                <div><a class="dark topic_title" href="/topic/5acc05eee34737560fccabc0" title="读nodejs源码的正确打开方式是什么？">读nodejs源码的正确打开方式是什么？</a>
                </div>
              </li>


              <li>
                <div><a class="dark topic_title" href="/topic/5acb8d6996f344940fbbaecc" title="使用 Node.js 的 Express 框架如何测试 ElasticSearch 查询比较好？">使用 Node.js 的 Express 框架如何测试 ElasticSearch 查询比较好？</a>
                </div>
              </li>


              <li>
                <div><a class="dark topic_title" href="/topic/5acb1eed96f344940fbbaeb0" title="【egg-mysql】有支持模糊查询和比较操作的方式吗 查了好久都没看到 有人分享下怎么做的么">【egg-mysql】有支持模糊查询和比较操作的方式吗 查了好久都没看到 有人分享下怎么做的么</a>
                </div>
              </li>


            </ul>

          </div>
        </div>
        <div class="panel">
          <div class="header">
            <span class="col_fade">积分榜</span>
            &nbsp;
            <a class="dark" href="/users/top100">TOP 100 &gt;&gt;</a>
          </div>
          <div class="inner">

            <ol>

              <li>
                <span class="top_score">20925</span>
                <span class="user_name"><a href="/user/i5ting">i5ting</a></span>
              </li>


              <li>
                <span class="top_score">14840</span>
                <span class="user_name"><a href="/user/alsotang">alsotang</a></span>
              </li>


              <li>
                <span class="top_score">9345</span>
                <span class="user_name"><a href="/user/leapon">leapon</a></span>
              </li>


              <li>
                <span class="top_score">8750</span>
                <span class="user_name"><a href="/user/jiyinyiyong">jiyinyiyong</a></span>
              </li>


              <li>
                <span class="top_score">6880</span>
                <span class="user_name"><a href="/user/yakczh">yakczh</a></span>
              </li>


              <li>
                <span class="top_score">6295</span>
                <span class="user_name"><a href="/user/im-here">im-here</a></span>
              </li>


              <li>
                <span class="top_score">5970</span>
                <span class="user_name"><a href="/user/DevinXian">DevinXian</a></span>
              </li>


              <li>
                <span class="top_score">5315</span>
                <span class="user_name"><a href="/user/magicdawn">magicdawn</a></span>
              </li>


              <li>
                <span class="top_score">5310</span>
                <span class="user_name"><a href="/user/atian25">atian25</a></span>
              </li>


              <li>
                <span class="top_score">4740</span>
                <span class="user_name"><a href="/user/captainblue2013">captainblue2013</a></span>
              </li>


            </ol>

          </div>
        </div>
        <div class="panel">
          <div class="header">
            <span class="col_fade">友情社区</span>
          </div>
          <div class="inner">
            <ol class="friendship-community">
              <li>
                <a href="https://ruby-china.org/" target="_blank">
                  <img src="/public/images/ruby-china-20150529.png">
                </a>
              </li>
              <div class="sep10"></div>
              <li>
                <a href="http://golangtc.com/" target="_blank">
                  <img src="/public/images/golangtc-logo.png">
                </a>
              </li>
              <div class="sep10"></div>
              <li>
                <a href="http://phphub.org/" target="_blank">
                  <img src="/public/images/phphub-logo.png">
                </a>
              </li>
            </ol>
          </div>
        </div>
        <div class="panel">
          <div class="header">
            <span class="col_fade">客户端二维码</span>
          </div>
          <div class="inner cnode-app-download">
            <img width="200" src="//dn-cnode.qbox.me/FtG0YVgQ6iginiLpf9W4_ShjiLfU">
            <br>
            <a href="https://github.com/soliury/noder-react-native" target="_blank">客户端源码地址</a>
          </div>
        </div>
      </div>
</template>

<script>
  export default {
    name: "sidebar",

    data(){
      return{
        data:[],
        data1:[]
      }
    },
    watch:{
      $router(){
        this.getdata()
      }
    },
    created(){
      this.getdata()
    },
    methods:{
      getdata(){
        this.$axios.get(" https://cnodejs.org/api/v1/messages",{
          params:{
            accesstoken:"5492ec54-7dfb-47b2-ae06-a5ea8f212fc7"
          }
        }).then(res=>{
          this.data=res.data.data
          // console.log(this.data)
        })
      },

    }
  }

</script>

<style scoped lang="scss">
  #sidebar {
    width: 290px;
    font-size: 14px;
    float: right;
    margin-bottom: 20px;
    margin-top: -60px;
  }
  #sidebar .panel {
    font-size: 13px;
  }
  .panel {
    margin-bottom: 13px;
  }
  #sidebar .header {
    color: #51585c;
    border-radius: 3px 3px 0 0;
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
  .header .col_fade {
    color: #444;
  }
  .col_fade {
    color: #ababab;
  }
  #sidebar .panel {
    font-size: 13px;
  }
  .panel .inner, .panel .inner li {
    line-height: 2em;
  }
  .panel .inner a {
    color: #778087;
  }
  .user_card .user_avatar {
    vertical-align: middle;
    margin-right: .5em;
  }
  .user_card .user_name {
    font-size: 16px;
  }
  .user_name {
    max-width: 120px;
    white-space: nowrap;
    display: inline-block;
    vertical-align: middle;
  }
  .board {
    margin-top: 10px;
    width: 80%;
  }
  .signature {
    font-style: italic;
  }
  .panel .inner a {
    color: #778087;
  }
  a {
    color: #08c;
    text-decoration: none;
  }
  .sep10 {
    height: 10px;
  }
  #sidebar .header {
    color: #51585c;
    border-radius: 3px 3px 0 0;
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
  ul.unstyled {
    margin-left: 0;
    list-style: none;
  }
  ol, ul {
    padding: 0;
    margin: 0 0 10px 25px;
  }
  .panel .inner li {
     line-height: 2em;
   }
  dd, dt, li {
    line-height: 20px;
  }
  .header .col_fade {
    color: #444;
  }
  .col_fade {
    color: #ababab;
  }
  img {
    width: auto\9;
    height: auto;
    max-width: 100%;
    vertical-align: middle;
    border: 0;
    -ms-interpolation-mode: bicubic;
  }
  .preview p, .reply_content p, .reply_form p, .topic_content p {
    font-size: 15px;
    line-height: 1.7em;
    overflow: auto;
  }
  .fab{
    width: 100%;
    height: 70px;
  }
  .fab>button{
    background: forestgreen;
    color: white;
    width: 100px;
    height: 50px;
    font-weight: bolder;
    border: 0;
    border-radius: 10px;
    font-size: 17px;
    margin-top: 20px;
  }
</style>
