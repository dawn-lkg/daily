<template>
  <div class="main-box" v-cloak>
    <div class="main-content">
      <div class="section-head">
        <div class="tip">最新内容</div>
        <div class="section-head-title">浏览内容</div>
      </div>
      <div class="main-content-wrap">
        <div class="col-lg">
          <div class="row" v-for="(item, index) in themes" :key="index">
            <router-link
              :to="{ name: 'story', params: { id: item.id } }"
              tag="div"
              class="link"
            >
              <img :src="item.images" alt="item.title" />
              <span>{{ item.title }}</span>
            </router-link>
          </div>
        </div>

        <div class="col-lg">
          <div class="row" v-for="(item, index) in themes_one" :key="index">
            <router-link
              :to="{ name: 'story', params: { id: item.id } }"
              tag="div"
              class="link"
            >
              <img :src="item.images" alt="item.title" />
              <span>{{ item.title }}</span>
            </router-link>
          </div>
        </div>

        <div class="col-lg">
          <div class="row" v-for="(item, index) in themes_two" :key="index">
            <router-link
              :to="{ name: 'story', params: { id: item.id } }"
              tag="a"
              class="link"
            >
              <img :src="item.images" alt="item.title" />
              <span>{{ item.title }}</span>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import $ from "../util";
export default {
  name: "App",
  data() {
    return {
      themes: [],
      themes_one: [],
      themes_two: [],
      recent: [],
      showThemes: false,
      type: "recommend",
      themeId: 0,
    };
  },
  methods: {
    async getThemes() {
      let date = new Date();
      let millsecond = date.getTime() + 86400000;
      let attr = [];
      for (let i = 0; i < 5; i++) {
        attr.push(this.getdate(millsecond));
        millsecond -= 86400000;
      }
      let data = [];
      for (let i in attr) {
        let { stories: stories } = await $.axios.get(`/news/before/${attr[i]}`);
        data = data.concat(stories);
      }
      this.themes = data.slice(0, 9);
      this.themes_one = data.slice(10, 19);
      this.themes_two = data.slice(20, 29);
    },
  },
  mounted() {
    this.getThemes();
  },
};
</script>

<style scoped>
[v-cloak]{
  display: none;
}
body {
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-size: 14px;
  line-height: 1.428571429;
  color: #333333;
}
.main-content {
  padding-bottom: 30px;
  box-sizing: border-box;
  margin: 0 auto;
  width: 1000px;
}
.main-box {
  width: 100%;
  background-color: rgba(249, 249, 249, 1);
}
.main-content .section-head {
  padding: 44px 0 31px;
}
.main-content .tip {
  float: right;
  color: #ccc;
  font-size: 25px;
  line-height: 25px;
}
.main-content .section-head-title {
  font-size: 25px;
  color: #333333;
  line-height: 25px;
  height: 25px;
  overflow: hidden;
}
.col-lg {
  padding-left: 15px;
  padding-right: 15px;
  width: 300px;
  display: inline-block;
  position: relative;
  margin-top: 0;
  vertical-align: top;
}
.col-lg img {
  position: relative;
  max-width: 100%;
  height: 260px;
  margin-bottom: 1em;
}
.col-lg .row {
  background-color: #fff;
  padding: 20px;
  margin-bottom: 20px;
  border-radius: 2px;
}
.col-lg .row span {
  font-size: 16px;
  color: #000000;
}
.link {
  cursor: pointer;
}
</style>
