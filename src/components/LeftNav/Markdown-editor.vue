<template>
  <div class="markdown">
    <mavonEditor v-model="content" ref="md"  :style="{width:width,height:height}" @imgAdd="$imgAdd" @change="changeMavon" />
  </div>
</template>
<script>
import mavonEditor from "vue-meditor";

export default {
  components: {
    mavonEditor
  },
  props: {
    width: {
      type: String,
      default: "100%"
    },
    height: {
      type: String,
      default: "600px"
    }
  },
  data() {
    return {
      content: "",
      configs: {}
    };
  },
  mounted() {},
  methods: {
    changeMavon() {},
    $imgAdd() {}
  }
};
</script>
<style scoped>
.markdown {
  width: 100%;
}
</style>
