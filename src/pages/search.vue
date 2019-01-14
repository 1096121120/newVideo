<template>
  <div class="search_container">
    <mu-appbar style="width: 100%;" color="rgba(0,0,0,.9)">
      <mu-button icon slot="left" @click="goBack">
        <mu-icon value="arrow_back"></mu-icon>
      </mu-button>
      <input type="text" class="search_input" placeholder="输入影片名称" v-model="value">
      <mu-button icon slot="right" @click="search">
        <mu-icon value="search"></mu-icon>
      </mu-button>
    </mu-appbar>
    <div class="search_content">
      <div class="search_item" v-for="(item,index) in searchList" :key="index">
        <img :src="item.imagePic" alt>
        <div class="search_item_info">
          <h3 class="video_name">{{item.name}}</h3>
          <div class="video_daoyan">
            <span>导演：</span>
            <i>{{item.daoyan}}}</i>
          </div>
          <!-- <div class="video_zhuyan">
            <span>主演：</span>
            <i>{{item.zhuyan}}</i>
          </div> -->
          <div class="video_type">
            <span>类型：</span>
            <i>{{item.type}}</i>
          </div>
          <div class="video_play">
            <span>评分：</span>
            <i>{{item.score}}</i>
          </div>
        </div>
        <div class="playButton">
          <mu-button small fab color="#333" class="search_dianzan">
            <mu-icon value="thumb_up"></mu-icon>
          </mu-button>
          <mu-button small fab color="#f44336" class="search_bofang">
            <mu-icon value="play_arrow"></mu-icon>
          </mu-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: "",
      searchList: []
    };
  },
  methods: {
    goBack() {
      this.$router.go(-1);
    },
    search() {
      let url = "http://localhost:8088/search?vName=" + this.value;
      this.axios
        .get(url)
        .then(res => {
          this.searchList = res.data.data;
        })
        .catch(err => {});
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
  .search_content {
    width: 100%;
    .search_item {
      width: 100%;
      height: 10rem;
      padding: 0.8rem;
      box-sizing: border-box;
      border-bottom: 1px dashed #333;
      display: flex;
      justify-content: space-around;
      img {
        width: 6rem;
        border-radius: 0.5rem;
      }
      .search_item_info {
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: flex-start;
        padding-left: 1rem;
        box-sizing: border-box;
        div {
          width: 100%;
          font-size: 12px;
          display: flex;
          span {
            width: 4rem;
          }
          i {
            flex: 1;
            display: inline-block;
            align-self: flex-start;
            font-style: normal;
          }
        }
        .video_zhuyan {
        }
      }
      .playButton {
        width: 3rem;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        .search_dianzan {
          margin-bottom: 0.4rem;
        }
        .search_bofang {
          margin-top: 0.4rem;
        }
      }
    }
  }
}
</style>
