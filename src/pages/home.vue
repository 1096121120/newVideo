<template>
  <div class="home">
    <div class="home_carousel">
      <mu-carousel>
        <mu-carousel-item v-for="(item,index) in carouselList" :key="index">
          <img :src="item.pic">
        </mu-carousel-item>
      </mu-carousel>
    </div>
    <Recommond></Recommond>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex"; //mapGetters与下面的computed中的mapGetters对应
import Recommond from "@/components/home/Recommond.vue";
export default {
  date() {
    return {
      carouselList: []
    };
  },
  components: {
    Recommond
  },
  computed: {},
  methods: {},
  created() {
    this.carouselList = [
      {
        pic:
          "http://attachments.gfan.com/forum/201503/25/172948xc9n9lyyvl9kwxyw.jpg"
      },
      {
        pic: "http://pic1.win4000.com/wallpaper/1/57aac9844768e.jpg"
      },
      {
        pic: "http://pic1.win4000.com/wallpaper/7/55dff55b4ce35.jpg"
      },
      {
        pic: "http://shumahezi.com/uploadfile/2013/0318/20130318115555263.jpg"
      }
    ];
  }
};
</script>

<style lang="less">
.home {
  font-size: 2rem;
  height: calc(100vh - 130px);
  background: #fff;
  display: flex;
  flex-direction: column;
  justify-content: flex-start !important;
  overflow-x: hidden;
  overflow-y: auto;
  .home_carousel {
    width: 100%;
    height: 12rem;
    .mu-carousel {
      width: 100%;
      height: 12rem;
    }
    img {
      width: 100%;
      height: 12rem;
    }
  }
}
</style>
