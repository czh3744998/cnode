<template>
  <nav class="navbar navbar-default navbar-static-top">
    <div class="container">
      <li><img src="../assets/logo.png" alt=""></li>
      <li><input type="text"></li>
        <router-link to="/">首页</router-link>
        <router-link to="/wdxx">未读消息
          <span v-if="data==0" class="yd"></span>
          <span v-if="data!=0" class="xyd yd">{{data}}</span>
        </router-link>
      <router-link to="/getstart">新手入门</router-link>
      <router-link to="/api">API</router-link>
      <router-link to="/about">关于</router-link>
      <router-link to="/signin">注册</router-link>
      <router-link to="/signup">登陆</router-link>
        <!--<li><a href="/getstart">新手入门</a></li>-->
        <!--<li><a href="/api">API</a></li>-->
        <!--<li><a href="/about">关于</a></li>-->
        <!--<li><a href="/signin">注册</a></li>-->
        <!--<li><a href="/signup">登陆</a></li>-->

    </div>
  </nav>

</template>

<script>
    export default {
        name: "dh",
      data(){
        return{
          data:""
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
          this.$axios.get(" https://cnodejs.org/api/v1/message/count",{
            params:{
              accesstoken:"5492ec54-7dfb-47b2-ae06-a5ea8f212fc7"
            }
          }).then(res=>{
            this.data=res.data.data
            // console.log(res.data)
          })
        }
      }
    }
</script>

<style scoped lang="scss">
  .container{
    background: #444444;
    width: 100%;
    padding: 0 5%;
    height: 52px;
    line-height: 52px;
    input{
      width: 240px;
      margin-top: 5px;
      border: 0;
      height: 30px;
      border-radius: 20px;
      margin-left: 5%;
    }
    a:nth-of-type(1){
      margin-left: 215px;
    }
    a{
      margin: 0 10px;
    }
     li{
       margin: 0 3%;
     }
   }
li{
  float: left;
  a{
    color: white;
  }
}
a{
  color: white;
  text-decoration:none ;
}
  .navbar{
    margin-bottom: 0;
  }
  .xyd{
    width: 20px;
    height: 20px;
    color: white;
    background: greenyellow;
    font-size:16px;
    border-radius: 10px;
    position:relative;
    left: -85px;
    text-align: center;
    line-height: 20px;
  }
  .yd{
    display: inline-block;
  }
</style>

