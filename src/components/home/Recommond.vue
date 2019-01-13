<template>
  <div class="home_recommond">
    <mu-container>
      <mu-flex justify-content="center">
        <mu-paper :z-depth="1">
          <mu-grid-list class="gridlist-demo">
            <mu-sub-header>推荐内容</mu-sub-header>
            <mu-grid-tile v-for="(tile, index) in list" :key="index" @click="goVideo(tile)">
              <img :src="tile.imagePic">
              <span slot="title">{{tile.name}}</span>
              <mu-button slot="action" icon>
                <mu-icon value="star_border"></mu-icon>
              </mu-button>
            </mu-grid-tile>
          </mu-grid-list>
        </mu-paper>
      </mu-flex>
    </mu-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: []
    };
  },
  created() {
    this.axios
      .get("http://localhost:3000/list")
      .then(res => {
        console.log(res);
        this.list = res.data.data;
      })
      .catch(err => {});
  },
  methods: {
    goVideo(video) {
      //先保存至localstorage
      localStorage.setItem("video", JSON.stringify(video));
      this.$router.push({ name: "video", params: { video: video } });
    }
  }
};
</script>

<style lang="less">
.home {
  font-size: 2rem;
  height: calc(100vh - 130px);
  display: flex;
  justify-content: center;
  align-items: center;
  .mu-grid-tile {
    display: flex;
  }
  .mu-grid-tile-titlebar {
    height: 40px !important;
  }
}
</style>

