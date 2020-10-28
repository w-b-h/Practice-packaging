<template>
  <div id="app">
      <!-- <router-link to="/" tag="button" replace>Home</router-link> |
      <router-link :to= "{path:'/about',query:{name:'wbh',age:19}}" tag="button" replace>About</router-link>
      <router-link :to="'/user/'+id" tag="button" replace>User</router-link> -->

      <button @click="home">首页</button>
      <button @click="about">关于</button>
      <button @click="user">用户</button>
    <keep-alive exclude="About">
    <router-view/>
    </keep-alive>
  </div>
</template>
<script>
export default {
  name:"App",
  data() {
    return {
      id:10
    }
  },
  methods:{
    home(){
      // this.$router.replace("/")
      this.$router.push("/")
    },
    about(){
      // this.$router.replace("about")
      this.$router.push({
        path:'/about',
        query:{
          name:'wbh',
          age:19
          }
      })
    },
    user(){
      this.$router.replace('/user/'+this.id)
    }
  }
}
</script>
<style>
  .router-link-active{
    color: red;
  }
</style>
