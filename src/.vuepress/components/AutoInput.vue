<template>
  <div>
    <span :id="this.iid"></span>
  </div>
</template>

<script>
  export default {
    props: {
      iid: '',
      des: ''
    },
    data() {
      return {};
    },
    mounted(){
      var box = document.getElementById(this.iid);
       new Typed(box,{
          strings: [this.des],
          typeSpeed: 200,
          startDelay: 1000,
          loop: true,
          loopCount: Infinity
       });
    }
  }
</script>

<style>
</style>
