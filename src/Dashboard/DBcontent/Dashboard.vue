<template>
  <div class="info-group" v-for="(info,ind) in infoGroupObj.infogroup" :key="ind">
    <div class="date"></div>
    <div class="info-photo">{{info.photo}}</div>
    <div class="info-name">{{info.name}}</div>
    <div class="info-number">{{info.number}}</div>
  </div>

  <div class="followers">
    <div class="heading">Followers</div>
    <div class="date"></div>
  </div>
  <div class="new-follower">
    <div class="heading">New Followers</div>
  </div>
  <div class="follow-back">
    <div class="heading">Follow Back Rate By Hashtag</div>
  </div>
  <div class="follower-quota">
    <div class="heading">Followering Quota</div>
  </div>
  <div class="interaction">
    <div class="heading">Interaction</div>
    <div class="i-icon"></div>
  </div>
  <div class="imp-rea-group">
    <div class="impression">
      <div class="heading">Impression</div>
      <div class="i-icon"></div>
    </div>
    <div class="Reach">
      <div class="heading">Reach</div>
      <div class="i-icon"></div>
    </div>
  </div>


</template>

<script>

  const infoGroup = [
      {
    // photo:,
    name:'Campagins',
    number:3,
        },
    {
      // photo:,
      name:'Likes',
      number:3456,
    },
    {
      // photo:,
      name:'Followers',
      number:3,
    },
        ]
// import DBframe from "../DBframe/DBframe";
export default {
  name: "Dashboard"
}
</script>

<style scoped>
*{
  font-family: Montserrat;
}
.info-group{
  display: flex;
  flex-direction: row;
}
.info-photo{
  width: 100px;
  height: 100px;
  /*background-image: url("");*/
  border-radius: 25px;
}
.info-name{
  font-size: 18px;
  line-height: 22px;
  color: #000000;
}
.info-number{
  font-size: 14.0776px;
  line-height: 16px;
  color: #15192C;
}

.heading {
  font-family: Montserrat;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 24px;
  display: flex;
  align-items: center;
  color: #4F4F4F;
}
</style>