<template>
  <div class="about">
    <router-link to="detail">
      <img src="../assets/mercurius-logo.png">
    </router-link>
  </div>
</template>

<script>
export default {
  name: "About",
  created: function() {},
  components: {}
};
</script>

<style lang="less" scoped>
.about {
  height: 80vh;
  display: flex;
  justify-content:center;
  align-items: center;
  img {}
}
</style>
