<template>
  <div id="app">
    <my-dh class="nav"></my-dh>
    <!--<my-end class="end"></my-end>-->
    <router-view></router-view>
    <my-end></my-end>
  </div>
</template>

<script>
  import topHome from '@/components/tophome'
  import myDh from '@/components/dh'
  import myEnd from '@/components/end'
export  default {
  components:{
    topHome,
    myDh,
    myEnd
  },

}
</script>

<style lang="scss">
  #app{
    *{

      list-style: none;
    }
    .end{
      position: relative;
      bottom: 0;
    }
  }
</style>
