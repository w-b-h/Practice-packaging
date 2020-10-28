<template>
  <div class="about">
    <h1>我是About</h1>
    <h2>{{$route.query.name}}</h2>
    <h2>{{$route.query.age}}</h2>
    <!-- <h2>{{$route.query}}</h2> -->
  <!-- <h1>{{qu}}</h1> -->
  </div>
</template>
<script>
export default {
  name:"About",
  data() {
    return {
      
    }
  },
  computed:{
    qu(){
      return this.$route.query
    }
  },
   created(){
    console.log("aboutcreate")

  },
  destroyed(){
    console.log("Aboutdes")
  }

}
</script>
