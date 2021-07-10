<!--<template>-->
<!--  <div class="top-row">-->
<!--    <router-view></router-view>-->
<!--  <div class="icon"></div>-->
<!--  <div class="search">-->
<!--    <input type="text" id="search" placeholder="">-->
<!--  </div>-->
<!--  <div class="buy-btn"></div>-->
<!--  <div class="bell">-->
<!--    <div class="notification"></div>-->
<!--  </div>-->
<!--  <div class="profile">-->
<!--    <div class="username"></div>-->
<!--    <div class="userImg"></div>-->
<!--  </div>-->
<!--  </div>-->

<!--  <div class="left-row">-->
<!--    <div class="dash-btn">-->
<!--      <template v-for="(db,ind) in dashbtnObj.dashbtn" :key="ind">-->
<!--        <div class="rp-img" :style="`background-image: url(${db.btnImg})`"></div>-->
<!--      </template>-->
<!--    </div>-->
<!--  </div>-->
<!--</template>-->

<!--<script>-->

<!--import {reactive} from "vue";-->

<!--const dashbtn = [-->
<!--    {-->
<!--  btnImg:'/src/assets/Dasnboard.png',-->
<!--},-->
<!--  {-->
<!--    btnImg:'/src/assets/Community.png',-->
<!--  },-->
<!--  {-->
<!--    btnImg:'/src/assets/CRM.png',-->
<!--  },-->
<!--  {-->
<!--    btnImg:'/src/assets/SAM.png',-->
<!--  },-->
<!--  {-->
<!--    btnImg:'/src/assets/Settings.png',-->
<!--  }-->

<!--]-->
<!--export default {-->
<!--  name: "DBframe",-->
<!--  setup () {-->
<!--    const dashbtnObj = reactive ({dashbtn:dashbtn})-->
<!--    return {dashbtnObj}-->
<!--  }-->

<!--}-->


<!--</script>-->

<!--<style scoped>-->

<!--.icon{-->
<!--    height: 50px;-->
<!--    width: 50px;-->
<!--    background-image: url(../../assets/Venbot.png);-->
<!--    background-size: cover;-->
<!--    background-color: #FFFFFF;-->
<!--    box-shadow: 0px 4.87555px 4.87555px rgba(0, 0, 0, 0.04);-->
<!--    border-radius: 18.2833px;-->
<!--}-->

<!--</style>-->