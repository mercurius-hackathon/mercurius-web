<template>
  <div class="home">
    <img src="../assets/mercurius-logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "home",
  created: function() {},
  components: {
    HelloWorld
  }
};
</script>
