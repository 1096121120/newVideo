<template lang="html">
  <div id="title">
    <mu-appbar style="width: 100%;" color="rgba(0,0,0,.9)">
  <mu-button icon slot="left">
    <mu-icon value="menu"></mu-icon>
  </mu-button>
  {{Title}}
  <mu-button icon slot="right" @click="goSearch">
    <mu-icon value="search"></mu-icon>
  </mu-button>
</mu-appbar>
  </div>
</template>

<script>
export default {
  name: "Atitle",
  props: {
    Title: String
  },
  methods: {
    goSearch() {
      this.$router.push({ name: "search" });
    }
  }
};
</script>

<style lang="less">
.mu-appbar {
  position: fixed;
  top: 0;
  padding-top: 22px !important;
  height: 70px !important;
}
</style>
