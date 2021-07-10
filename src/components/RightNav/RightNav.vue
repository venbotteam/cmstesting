<template>
  <div class="search">
    <input type="text" id="search" placeholder="">
    <span class="line"></span>
  </div>

  <div class="right-heading">Recent Posts</div>
  <template v-for="(rpp,ind) in recentpostObj.recentposts" :key="ind">
    <div class="recent-post-container">
      <div class="rp-img" :style="`background-image: url(${rpp.coverImg})`"></div>
      <div class="rp-info-container">
        <div class="right-subheading">{{ rpp.title }}</div>
        <div class="rp-date">{{ rpp.date }}</div>
      </div>
    </div>
    <div class="right-separator"></div>
  </template>

  <div class="right-heading">Category </div>
  <template v-for="(cl,ind) in categorylistObj.clist" :key="ind">
    <div class="category-list-container">
      <div class="category-name">{{ cl.category }}</div>
      <div class="number">{{ cl.number }}</div>
    </div>
    <div class="right-separator"></div>
  </template>

  <div class="right-heading">gallery</div>
  <div class="gallery-container">
<template v-for="(gl,ind) in galleryObj.gallery" :key="ind">
  <div class="gallery" :style="`background-image: url(${gl.coverImg})`"></div>
</template>
  </div>

  <div class="right-heading">Follow US</div>
  <div class="followus">
  <div class="share-btn facebook-btn"></div>
  <div class="share-btn twitter-btn"></div>
  <div class="share-btn quora-btn"></div>
  <div class="share-btn reddit-btn"></div>
  <div class="share-btn youtube-btn"></div>
  </div>

  <div class="right-heading"></div>

  <div class="right-heading"></div>

  <div class="right-subheading">Consulted admitting is power acuteness.</div>
  <div class="right-separator"></div>
  <div class="right-subheading">Unsatiable entreaties may collecting Power.</div>
  <div class="right-separator"></div>
  <div class="right-subheading">Discovery incommode earnestly command</div>
  <div class="right-separator"></div>
  <div class="right-subheading">Participate in staff meetingness manage</div>
  <div class="right-separator"></div>
  <div class="right-subheading">Future plan & strategy for construction</div>
  <div class="right-separator"></div>
  <div class="right-heading">Categories</div>
  <div class="right-subheading">Digital Marketing</div>
  <div class="right-subheading">Reports</div>
  <div class="right-subheading">SEO</div>
  <div class="right-subheading">Strategy</div>
  <div class="right-heading">Achieves</div>
  <div class="right-subheading">January</div>
  <div class="right-heading">Tags</div>
  <main>
    <a href="">

  </a>
    <div>
      <a href=""></a>
    </div>
  </main>
  <div class="tags">
    <div class="right-tag">Affiliate (3)</div>
    <div class="right-tag">Analysis (2)</div>
    <div class="right-tag">High (2)</div>
    <div class="right-tag">Performance (2)</div>
    <div class="right-tag">SEO (2)</div>
  </div>
</template>

<script>

import {reactive} from "vue";

const articles = [
  {
    coverImg: 'https://images.unsplash.com/photo-1556691421-cf15fe27a0b6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80',
    title: 'Hi~',
    date: '1 Jan 2012'
  },
  {
    coverImg: '/src/assets/img_1.png',
    title: 'Hi~',
    date: '1 Jan 2012'
  },
  {
    coverImg: '/src/assets/img_1.png',
    title: 'Hi~',
    date: '1 Jan 2012'
  },

]

const cl = [
  {
    category: "nation",
    number: 25,
  },
  {
    category: "nation",
    number: 25,
  },
  {
    category: "nation",
    number: 25,
  },
  {
    category: "nation",
    number: 25,
  }
]

const gl = [
  {
    coverImg: '/src/assets/img_1.png',
  },
  {
    coverImg: '/src/assets/img_1.png',
  },
  {
    coverImg: '/src/assets/img_1.png',
  },
  {
    coverImg: '/src/assets/img_1.png',
  },
  {
    coverImg: '/src/assets/img_1.png',
  },
  {
    coverImg: '/src/assets/img_1.png',
  },
]


export default {
  name: "Leftnav",
  setup(props) {
    const recentpostObj = reactive({recentposts: articles})
    const categorylistObj = reactive({clist: cl})
    const galleryObj = reactive({gallery:gl})
    return {recentpostObj, categorylistObj,galleryObj}
  }

}
</script>


<style>

* {
  font-family: Nunito, sans-serif;
  font-style: normal;
  font-weight: normal;
}

#search {
  width: 330px;
  height: 60px;
  text-align: left;
  font-size: 30px;
  background: #F7F7F7;
  border: 1px solid #E7E7E7;
  border-radius: 30px;
  padding-left: 50px;
  margin-top: 48px;
  color: #E7E7E7;
  outline: none;

}

.rp-img {
  width: 80px;
  height: 80px;
  background-size: cover;
}

#search:focus {
  color: rgb(34, 85, 143);
}

.right-heading {
  font-size: 20px;
  line-height: 24px;
  text-transform: capitalize;
  color: #232323;
  margin-top: 48px;
  margin-bottom: 32px;
  cursor: pointer;
}

.right-subheading {

  font-size: 16px;
  line-height: 30px;
  text-transform: capitalize;
  color: #666666;
  cursor: pointer;
}

.tags {
  display: flex;
  flex-wrap: wrap;
  cursor: pointer;
}

.right-tag {
  width: fit-content;
  font-size: 14px;
  line-height: 30px;
  text-transform: capitalize;
  color: #666666;
  background: #F7F7F7;
  border: 1px solid #E7E7E7;
  padding-left: 26px;
  padding-right: 26px;
  margin: 5px;
  border-radius: 30px;
  border: 1px solid #E7E7E7;
  border-radius: 30px;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
}

.right-separator {
  height: 1px;
  margin: 16px;
  border-bottom: 1px solid #E7E7E7;
}

.recent-post-container {
  display: flex;
  flex-direction: row;
}

.rp-info-container {
  padding-left: 24px;
  font-size: 16px;
  line-height: 26px;
  color: #666666;
}

.rp-date {
  font-size: 13px;
  line-height: 26px;
  text-transform: capitalize;
  color: #837F7E;
  padding-left: 16px;
  margin-top: 23px;
}

.category-list-container{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.category-name{
  font-size: 15px;
  line-height: 30px;
  text-transform: capitalize;
  color: #666666;
}

.number{
  font-size: 13px;
  line-height: 30px;
  text-transform: capitalize;
  color: #232323;
  background: #F1F1F1;
  border-radius: 5px;
  padding:5px 10px;
}
.gallery-container{
  padding:14px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
}
.gallery{
  margin-top: 14px;
  width: 100px;
  height: 100px;
  background-size: cover;
}

.followus{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.share-btn{
  /*width: 188px;*/
  height:14px;
  width:50px;
  border-radius: 10px;
}
.facebook-btn{
  background-color: #001D4C;
}

.twitter-btn{
  background: #1DA1F2;
}

.quora-btn{
  background: #BD081C;
}

.reddit-btn{
  background: #DB4437;
}

.youtube-btn{
  background: #0077B5;
}
</style>