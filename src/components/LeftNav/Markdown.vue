<template>
  <div class="markdown">
    <div class="edit">
      <markDown height="800px" width="100%"></markDown>
    </div>

  </div>
</template>
<script>
import markDown from "../../components/markdown/markdown-editor";
export default {
  components: {
    markDown
  },
  data() {
    return {
      article: {
        title: "",
        tag: ""
      }
    };
  },
  mounted() {
    this.restaurants = this.loadAll();
  },
  methods: {
    loadAll() {
      return [{ value: "vue" }, { value: "node.js" }];
    },
    handleSelect(item) {
      console.log(item);
    },
    querySearch(queryString, cb) {
      var restaurants = this.restaurants;
      var results = queryString
          ? restaurants.filter(this.createFilter(queryString))
          : restaurants;
      cb(results);
    }
  }
};
</script>
<style lang="less" scoped>
.markdown {
  padding: 20px;
  .edit {
    width: 100%;
  }
}
</style>
