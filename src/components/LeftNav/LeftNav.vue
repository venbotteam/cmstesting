<template>

<div class="container">
  <ArticlePreview v-for="(art,ind) in articlesObj.arts" :article="art" :key="ind">
  </ArticlePreview>



</div>
<!--  markdown-->
<!--  <div class="content">-->
<!--    <div id="editor">-->
<!--      <textarea :value="input" @input="update"></textarea>-->
<!--      <div v-html="compiledMarkdown"></div>-->
<!--    </div>-->
<!--  </div>-->
</template>

<script>
import ArticlePreview from "../ArticlePreview/ArticlePreview.vue";
import {onMounted, reactive} from "vue";
import {Articles} from "../../models/articles";

const articles = [
  {
    id: '1',
    author:'admin',
    coverImg: '@/assets/img.png',
    date: '9 January 2021',
    title: 'Consulted admitting is power acuteness.',
    content: 'Give lady of they such they sure it. Me contained explained my education. Vulgar as hearts by garret. Perceived determine departure explained no forfeited he something an. Contrasted dissimilar get joy you instrument out reasonably. Again keeps at no meant…'
  },
  {
    id: '2',
    author:'admin',
    coverImg: '@/assets/img_1.png',
    date: '9 January 2021',
    title: 'Unsatiable entreaties may collecting Power.',
    content: 'Give lady of they such they sure it. Me contained explained my education. Vulgar as hearts by garret. Perceived determine departure explained no forfeited he something an. Contrasted dissimilar get joy you instrument out reasonably. Again keeps at no meant…'
  },
  {
    id: '3',
    author:'admin',
    coverImg: '@/assets/img_2.png',
    date: '9 January 2021',
    title: 'Discovery incommode earnestly command',
    content: 'Give lady of they such they sure it. Me contained explained my education. Vulgar as hearts by garret. Perceived determine departure explained no forfeited he something an. Contrasted dissimilar get joy you instrument out reasonably. Again keeps at no meant…'
  },
  {
    id: '4',
    author:'admin',
    coverImg: '@/assets/img_3.png',
    date: '9 January 2021',
    title: 'Participate in staff meetingness manage',
    content: 'Give lady of they such they sure it. Me contained explained my education. Vulgar as hearts by garret. Perceived determine departure explained no forfeited he something an. Contrasted dissimilar get joy you instrument out reasonably. Again keeps at no meant…'
  }
]

export default {
  name: "RightNav",
  setup(props){
    const articlesObj = reactive({
      arts:[]
    })

    onMounted(async()=>{
      articlesObj.arts =  await Articles.getArticleList()
    })
    return {
      articlesObj
    }
  },
  components:{
    ArticlePreview
  }

}
</script>

<style lang="scss" scoped>

/*html,*/
/*body,*/
/*#editor {*/
/*  margin: 0;*/
/*  height: 100%;*/
/*  font-family: "Helvetica Neue", Arial, sans-serif;*/
/*  color: #333;*/
/*}*/

/*textarea,*/
/*#editor div {*/
/*  display: inline-block;*/
/*  width: 49%;*/
/*  height: 100%;*/
/*  vertical-align: top;*/
/*  box-sizing: border-box;*/
/*  padding: 0 20px;*/
/*}*/

/*textarea {*/
/*  border: none;*/
/*  border-right: 1px solid #ccc;*/
/*  resize: none;*/
/*  outline: none;*/
/*  background-color: #f6f6f6;*/
/*  font-size: 14px;*/
/*  font-family: "Monaco", courier, monospace;*/
/*  padding: 20px;*/
/*}*/

/*code {*/
/*  color: #f66;*/
/*}*/


html,body{
  height: 100%;
}

.container{
  box-shadow: darkgrey;
  display: flex;
  flex-direction: column;
  margin:0;
  padding: 0;
  box-sizing: border-box;
}


//.left-separator {
//  height: 1px;
//  margin-top: 101px;
//  border-bottom: 1px solid darkgrey;
//}
</style>