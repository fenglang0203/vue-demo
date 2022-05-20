<template>
  <div class="result-container">
    <el-tabs
      v-model="activeResult"
      type="card"
      @tab-click="handleClick"
      style="left: 0"
    >
      <el-tab-pane label="结果总览" name="summary">
        <result-summary />
      </el-tab-pane>
      <el-tab-pane label="整体相关性" name="second1">
        <result2 />
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import resultSummary from './resultSummary.vue';
import result2 from './result2.vue'

export default {
  name: "AnalysisResult",
  components: {
    resultSummary,
    result2
  },
  computed: {
  },
  data() {
    return {
      activeResult: "summary",
    };
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    },
  },
};
</script>

<style lang="scss" scoped>
.result {
  &-container {
    margin: 10px;
  }
  &-text {
    font-size: 30px;
    line-height: 46px;
  }
}
</style>
