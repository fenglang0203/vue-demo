<template>
  <div class="dashboard-container">
    <el-tabs
      v-model="activeName"
      type="card"
      @tab-click="handleClick"
      style="left: 0"
      class="main-menu-tabs"
    >
      <el-tab-pane label="突变检测" name="first">
        <first-page />
      </el-tab-pane>
      <el-tab-pane label="跳变检测" name="second">
        <second-page />
      </el-tab-pane>
      <el-tab-pane label="相关性分析" name="analysis">
        <analysis-page />
      </el-tab-pane>
      <el-tab-pane label="神经网络" name="fourth">
        <fourth-page />
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import first from "./first.vue";
import second from "./second.vue";
import analysis from "./analysis.vue";
import fourth from "./fourth.vue";

export default {
  name: "Dashboard",
  components: {
    firstPage: first,
    secondPage: second,
    analysisPage: analysis,
    fourthPage: fourth,
  },
  computed: {
    ...mapGetters(["name"]),
  },
  data() {
    return {
      activeName: "analysis",
    };
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    },
  },
};
</script>

<style lang="scss">
.dashboard {
  &-container {
    margin: 0;
    position: relative;
    height: 100%;
    width: 100%;
    overflow: auto;
    display: flex;
    flex-direction: row;

    .main-menu-tabs {
      display: flex;
      flex-direction: row;
      // flex: 1;
      width: 100%;

      > .el-tabs__header {
        margin-bottom: 8px;
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        width: 100%;
        z-index: 2000;
        height: 40px;
        background-color: #fafafa;

        .el-tabs__item {
          height: 40px;
          line-height: 40px;
        }
      }

      > .el-tabs__content {
        height: 100%;
        width: 100%;

        .el-tab-pane {
          height: 100%;
          width: 100%;
          overflow: auto;
        }
      }
    }
  }
  &-text {
    font-size: 30px;
    line-height: 46px;
  }
}
</style>
