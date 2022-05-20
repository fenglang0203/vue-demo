<template>
  <div class="dashboard-container">
    <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
      <el-tab-pane label="突变检测" name="first">
        <firstPage />
      </el-tab-pane>
      <el-tab-pane label="跳变检测" name="second">跳变检测</el-tab-pane>
      <el-tab-pane label="相关性分析" name="third">相关性分析</el-tab-pane>
      <el-tab-pane label="神经网络" name="fourth">神经网络</el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import first from './first.vue'

export default {
  name: "Dashboard",
  components: {
    firstPage: first
  },
  computed: {
    ...mapGetters(["name"]),
  },
  data() {
    return {
      activeName: "first",
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
.dashboard {
  &-container {
    margin: 30px;
  }
  &-text {
    font-size: 30px;
    line-height: 46px;
  }
}
</style>
