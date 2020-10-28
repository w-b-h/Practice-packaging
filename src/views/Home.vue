<template>
  <div class="home">
      <h1>我是Home</h1>
      <router-link to="/blog">博客</router-link>
      <router-link to="/vieo">视频</router-link>
      <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {
      path:"/blog"
    }
  },
  components: {

  },
  created(){
    console.log("Homecreated")
  },
  destroyed(){
    console.log("Homedestroyed")
  },
  activated(){
    this.$router.push(this.path)
  },
  beforeRouteLeave (to, from, next) {
    this.path = this.$route.path
    next()
  },
  deactivated(){

  }
}
</script>
