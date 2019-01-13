<template>
  <div id="video_container">
    <mu-appbar style="width: 100%;" color="rgba(0,0,0,.9)">
      <mu-button icon slot="left" @click="goBack">
        <mu-icon value="arrow_back"></mu-icon>
      </mu-button>
      正在播放 - {{video.name}}
      <mu-button icon slot="right">
        <!-- <mu-icon value="search"></mu-icon> -->
      </mu-button>
    </mu-appbar>
    <div class="video_content">
      <!-- <video :src="video.playLink[1].videoSrcInfo[0].videoSrc" autoplay></video> -->
      <d-player :options="options" ref="player"></d-player>
    </div>
  </div>
</template>

<script>
import VueDPlayer from "vue-dplayer";
import "vue-dplayer/dist/vue-dplayer.css";
export default {
  data() {
    return {
      options: {
        video: {
          url: "http://static.smartisanos.cn/common/video/t1-ui.mp4",
          type: "hls"
        },
        autoplay: false
      },
      player: null,
      video: {}
    };
  },
  components: {
    "d-player": VueDPlayer
  },
  mounted() {
      console.log(this.$route)
    //判断localstorage中是否有
    if (localStorage.getItem("video")) {
      this.video = JSON.parse(localStorage.getItem("video"));
    } else {
      this.video = this.$route.params.video;
    }
    this.video.playLink = JSON.parse(this.video.playLink);
    this.$refs.player.dp.switchVideo({
      url: this.video.playLink[0].videoSrcInfo[0].videoSrc,
      type: "hls"
    });
    this.$refs.player.dp.play();
    console.log("video信息", this.video);
  },
  methods: {
    goBack() {
      this.$router.go(-1);
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
.video_content {
  width: 100%;
  height: 14rem;
  video {
    width: 100%;
    height: 100%;
  }
}
</style>
