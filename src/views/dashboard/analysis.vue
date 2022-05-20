<template>
  <split-pane
    split="vertical"
    :min-percent="18"
    :default-percent="19"
    style="overflow: hidden"
    class="page-container"
  >
    <template slot="paneL">
      <div class="left-container">
        <side-page />
      </div>
    </template>
    <template slot="paneR">
      <div class="right-container">
        <analysis-result />
      </div>
    </template>
  </split-pane>
</template>

<script>
import splitPane from "vue-splitpane";
import sidePage from "./sidePage";
import analysisResult from './analysisResult';

export default {
  name: "Analysis",
  components: {
    splitPane,
    sidePage,
    analysisResult,
  },
  computed: {},
  data() {
    return {};
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
.page {
  &-container {
    padding: 40px 30px 0 30px;
  }
  &-text {
    font-size: 30px;
    line-height: 46px;
  }
}
</style>
