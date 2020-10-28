<template>
    <div>
    <h1>我是用户</h1>
    <h2>我是用户：{{id}}</h2>
    </div>
</template>
<script>
export default {
    name:"User",
    data() {
        return {
            
        }
    },
    computed:{
        id(){
            return this.$route.params.id
        }
    },
      created(){
    console.log("Usercreated")
  },
  destroyed(){
    console.log("Userdestroyed")
  },

}
</script>