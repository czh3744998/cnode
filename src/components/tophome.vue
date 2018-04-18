<template>
  <div style="background: #e1e1e1;min-height: 1770px;overflow: hidden">
    <div class="content">
      <ul class="nav nav-pills">
        <li role="presentation" v-for="(item,key) in listdata" :key="key"><router-link :to="{path:'/',query:{list:item.list}}">{{item.name}}</router-link></li>
      </ul>
      <div id="content">
        <home-list></home-list>
        <side-bar></side-bar>
      </div>
    </div>
  </div>

</template>

<script>
  import  cnodeDh from './dh'
  import  homeList from './list'
  import  sideBar from './sidebar'
  export default {
    data(){
      return{
        listdata:[
          {name:"全部",list:"all"},
          {name:"精华",list:"good"},
          {name:"分享",list:"share"},
          {name:"问答",list:"ask"},
          {name:"招聘",list:"job"},
          {name:"客户端测试",list:"dev"},
        ]
      }
    },
    components: {
      cnodeDh,
      homeList,
      sideBar
    },
    mounted:function(){
      this.$axios.get("https://cnodejs.org/api/v1/topics").then(res=>{
        // console.log(res.data.data)
      })
    },

  }
</script>

<style scoped lang="scss">
.content{
  width: 85%;
  margin-left: 8%;
  background: white;
overflow: hidden
;
}
  #content{
    width: 97%;
    max-width: 1400px;
    min-width: 960px;
    margin: 15px auto;
    min-height: 1770px;
    position: relative;
    >div:nth-of-type(1){
      width: 70%;
      float: left;
    }
    >div:nth-of-type(2){
      float: left;
      margin-left: 7%;
    }

  }
  .nav{
    margin: 10px 10px;
  }
</style>
