<template>
  <div>
    <li v-for="(item,key) in sylist" :key="key" class="li">
      <router-link :to="{name:'info',query:{id:item.author.loginname}}"> <img :src="item.author.avatar_url"></router-link>

      <span><span style="color: #9d79d5;font-size: 15px;">{{item.reply_count}}</span>/<span style="font-size: 10px;">{{item.visit_count}}</span>
        </span>
      <span>
          <span v-if="item.good" style="color: white;background: #3c763d;border-radius: 5px;">精品</span>
          <span v-else-if="item.top" style="color: white;background: #3c763d;border-radius: 5px;">置顶</span>
          <span v-else-if="item.tab=='share'" style="color: #5e5e5e;background: #e1e1e1;border-radius:5px;">分享</span>
          <span v-else style="color: #5e5e5e;background: #e1e1e1;border-radius: 5px;">问答</span>
          </span>
      <router-link :to="{name:'page',query:{id:item.id}}">{{item.title}}</router-link>
      <span style="float: right; width: 70px;text-align: right">{{item.last_reply_at}}</span>
      <span style="float:right ;  "><img :src="item.author.avatar_url" style="width: 27px;height: 27px"></span>
    </li>
    <div class="pagination" current_page="1">
      <ul>
        <li class="disabled"><router-link to="">«</router-link></li>
        <li class="disabled active"><router-link :to="{path:'/',query:{tab:table,page:1}}">1</router-link></li>
        <li><router-link :to="{path:'/',query:{tab:table,page:2}}">2</router-link></li>
        <li><router-link :to="{path:'/',query:{tab:table,page:3}}">3</router-link></li>
        <li><router-link :to="{path:'/',query:{tab:table,page:4}}">4</router-link></li>
        <li><router-link :to="{path:'/',query:{tab:table,page:5}}">5</router-link></li>
        <li><router-link to="">...</router-link></li>
        <li><router-link to="">»</router-link></li>
      </ul>
    </div>
  </div>

</template>

<script>
  export default {
    name: "list",
    data() {
      return {
        sylist: [],
        table:""
      }
    },
    computed:{

    },
    watch: {
      $route() {
        this.getlist()
      }
    },
    created() {
      this.getlist()

    },

    methods: {
      getlist() {
        let list = this.$route.query.list
        this.table=list
        let table = this.$route.query.page
        // console.log(this.$route.query.list)
        this.$axios.get("https://cnodejs.org/api/v1/topics/", {
          params: {
            tab: list,
            page:table
          }
        }).then(res => {
          this.sylist = res.data.data
          // console.log(this.sylist)
          this.sylist.forEach((i)=>{
              let dq =new Date()
              let bd = new Date(i.last_reply_at)
              let sj=dq-bd
              let day = parseInt((sj/1000/60/60/24))
              let hous = parseInt((sj/1000/60/60)%24)
              let fen = parseInt((sj/1000/60)%60)
              if(day>=1){
                i.last_reply_at=day+"天前"
              }else if(hous>=1){
                i.last_reply_at=hous+"小时前"
              }else if(fen>=1){
                i.last_reply_at=fen+"分钟前"
              }
          })

        })
      },

    }
  }
</script>

<style scoped lang="scss">
  .li {
    width: 95%;
    height: 30px;
    margin: 10.7px;
    border-bottom: 1px solid darkgray;
    img {
      width: 30px;
      height: 30px;
    }
    > span:nth-of-type(1) {
      text-align: center;
      width: 70px;
      height: 29.6px;
      display: inline-block;
    }

    > span:nth-of-type(2) {
      span {
        width: 32px;
        height: 18.4px;
        display: inline-block;
        text-align: center;
      }
    }
  }
  .pagination {
    height: 40px;
    margin: 10px 0 0 10px;
  }
  .breadcrumb, .pagination ul, .span-common {
    box-shadow: none;
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
  ol, ul {
    padding: 0;
    margin: 0 0 10px 25px;
  }
  .panel .inner, .panel .inner li {
    line-height: 2em;
  }
  .pagination ul>li {
    display: inline;
  }
  dd, dt, li {
    line-height: 20px;
  }
  .pagination ul>li:first-child>a, .pagination ul>li:first-child>span {
    border-left-width: 1px;
    -webkit-border-bottom-left-radius: 4px;
    border-bottom-left-radius: 4px;
    -webkit-border-top-left-radius: 4px;
    border-top-left-radius: 4px;
    -moz-border-radius-bottomleft: 4px;
    -moz-border-radius-topleft: 4px;
  }
  .pagination ul>.disabled>a, .pagination ul>.disabled>a:focus, .pagination ul>.disabled>a:hover, .pagination ul>.disabled>span {
    color: #999;
    cursor: default;
    background-color: transparent;
  }
  .panel .inner a {
    color: #778087;
  }
  .pagination ul>li>a, .pagination ul>li>span {
    float: left;
    padding: 4px 12px;
    line-height: 20px;
    text-decoration: none;
    background-color: #fff;
    border: 1px solid #ddd;
    border-left-width: 0;
  }
  .pagination a {
    line-height: 30px;
    color: #f6f6f6;
  }
  a {
    color: #08c;
    text-decoration: none;
  }
  .panel .inner, .panel .inner li {
    line-height: 2em;
  }
  dd, dt, li {
    line-height: 20px;
  }

</style>
