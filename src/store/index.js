import  Vue from 'vue'
import  Vuex from 'vuex'

Vue.use(Vuex)
let store = new Vuex.Store({
  state:{
    data:{
      logoli:["首页","新手入门","API","关于","登陆","注册"]
    },
    created(){
      this.$axios.get("https://cnodejs.org/api/v1/topics").then(res=>{
        console.log(res.data.data)
      })
    }
  }
})

export  default  store
