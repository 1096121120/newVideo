<template>
  <div class="search_container">
    <mu-appbar style="width: 100%;" color="rgba(0,0,0,.9)">
      <mu-button icon slot="left" @click="goBack">
        <mu-icon value="arrow_back"></mu-icon>
      </mu-button>
      <input type="text" class="search_input" placeholder="输入影片名称">
      <mu-button icon slot="right">
        <mu-icon value="search"></mu-icon>
      </mu-button>
    </mu-appbar>
  </div>
</template>

<script>
export default {
  methods: {
    goBack() {
      this.$router.go(-1);
    }
  }
};
</script>

<style lang="less">
.search_container {
  .search_input {
    font-size: 14px;
    width: 100%;
    height: 2.2rem;
    border-radius: 1.1rem;
    outline: none;
    border: none;
    text-indent: 1rem;
  }
}
</style>
