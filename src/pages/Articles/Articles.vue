<template>
  <div class="container">
    <div class="cover-photo"></div>

    <div class="category">HIGH PERFORMANCE</div>

    <div class="article-info-group">
      <div class="date">{{haha.d(artObj.article?.date).fromNow('DD/MM/YYYY')}}</div>
      <div class="author">BY </div>
    </div>

    <div class="article-container">
      <div class="article-title"></div>
      <div class="article-content">
        <Markdown langPrefix="md" :source="artObj.article?.content"/>

      </div>
      <div class="article-btn-1">
        <div class="previous-btn">Previous Post</div>
        <div class="next-btn">Next Post</div>
      </div>
    </div>

    <div class="article-separator"></div>
    <div class="article-btn-2">
      <div class="analysis-btn">Analysis</div>
      <div class="process-btn">Process</div>
    </div>

    <div class="comment-title">5 Comments</div>
    <div class="comments-container">
      <div class="comment">
        <div class="photo"></div>
        <div class="comment-name"></div>
        <div class="comment-separator"></div>
        <div class="comment-date"></div>
        <div class="comment-content"></div>
        <div class="reply-btn"></div>
        <div class="replay">
          <div class="photo"></div>
          <div class="comment-name"></div>
          <div class="comment-separator"></div>
          <div class="comment-date"></div>
          <div class="comment-content"></div>
          <div class="reply-btn"></div>
        </div>
      </div>

      <div class="comment-title">Leave A Comment</div>

    </div>
  </div>
</template>

<script>
import {onMounted, reactive} from "vue";
import {Articles} from "../../models/articles";
import {useRoute} from "vue-router";

import Markdown from 'vue3-markdown-it';

import * as dayjs from 'dayjs'
import rt from 'dayjs/plugin/relativeTime'
dayjs.extend(rt)

export default {
  name: 'Articles',
  setup(props) {
    let route = useRoute()
    const haha = reactive({d:dayjs})
    const artObj = reactive({
      article: null
    })
    onMounted(async() => {
      window.scrollTo(0,0)
      console.log(route.params.articleId)
      let art =await Articles.getArticle(route.params.articleId)
      artObj.article = art
      console.log(art)
    })
    return {
      artObj,
      haha
    }
  },
  components: {
    Markdown
  },
}
</script>

<style>
.container {
  font-family: Nunito, sans-serif;
  font-style: normal;
  font-weight: normal;
}

.cover-photo {
  margin-top: 88px;
}

.category {
  font-weight: bold;
  font-size: 15px;
  line-height: 30px;
  color: #232323;
  margin-top: 30px;
  margin-bottom: 14px;
}

.article-info-group {
  font-size: 14px;
  line-height: 30px;
  text-transform: uppercase;
  color: #666666;
  padding-left: 14px;
  display: flex;
  flex-direction: row;
}

.article-title {
  font-size: 24px;
  line-height: 34px;
  color: #232323;
  margin-top: 15px;
}

.article-content {
  font-size: 15px;
  line-height: 30px;
  color: #666666;
}

.article-btn-1 {
  font-size: 15px;
  line-height: 30px;
  text-align: center;
  text-transform: capitalize;
  color: #4154F1;
  margin-top: 26px;
  margin-bottom: 51px;

  display: flex;
  justify-content: space-between;


}

.article-btn-1 .previous-btn, .article-btn-1 .next-btn{
  padding-left: 32px;
  padding-right: 32px;
  border-radius: 5px;
  border: 2px solid #E7E7E7;
  box-sizing: border-box;
}


.article-separator {
  height: 1px;
  border-bottom: 1px solid #E7E7E7;
}

.article-btn-2 {
  display: flex;
  flex-direction: row;
  font-size: 14px;
  line-height: 30px;
  color: #232323;
  margin-top: 59px;
}

.article-btn-2 .analysis-btn {
  border: 2px solid #E7E7E7;
  box-sizing: border-box;
  border-radius: 5px;
}

.article-btn-2 .Process-btn {
  padding-left: 7px;
  border: 2px solid #E7E7E7;
  box-sizing: border-box;
  border-radius: 5px;
}
blockquote{
  border-left:5px solid #4154F1;
  margin-left: 0;
  padding-left: 53.7px;
}

</style>