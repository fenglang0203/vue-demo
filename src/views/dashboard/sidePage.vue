<template>
  <div class="side-container">
    <el-container class="ip-container" direction="vertical">
      <el-header
        style="
          height: 50px;
          margin: 0;
          padding-top: 10px;
          padding-left: 20px;
          text-align: left;
          border-bottom: solid 1px #ddd;
        "
      >
        型号:
        <el-select
          v-model="value"
          size="small"
          placeholder="请选择"
          style="width: 80%"
        >
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          >
          </el-option>
        </el-select>
      </el-header>
      <el-main class="params-container">
        <el-input
          size="small"
          placeholder="搜索"
          v-model="searchValue"
          class="input-with-select"
          @change="searchParamByValue"
        >
          <el-button slot="append" icon="el-icon-search"></el-button>
        </el-input>
        <el-collapse v-model="activeParam" accordion>
          <el-collapse-item title="参数1" name="1">
            <el-tree
              ref="paramTree1"
              :data="param1"
              show-checkbox
              node-key="id"
              :default-expanded-keys="[2, 3]"
              :default-checked-keys="[5]"
              :props="defaultProps"
              :filter-node-method="filterNode"
            >
            </el-tree>
          </el-collapse-item>
          <el-collapse-item title="参数2" name="2">
            <div>这里也是一棵树，参数区param2,其他同上</div>
          </el-collapse-item>
        </el-collapse>
      </el-main>
    </el-container>
  </div>
</template>

<script>
export default {
  name: "side-page",
  components: {},
  data() {
    return {
      options: [
        {
          value: "选项1",
          label: "黄金糕",
        },
        {
          value: "选项2",
          label: "双皮奶",
        },
        {
          value: "选项3",
          label: "蚵仔煎",
        },
        {
          value: "选项4",
          label: "龙须面",
        },
        {
          value: "选项5",
          label: "北京烤鸭",
        },
      ],
      value: "",
      activeParam: "1",
      searchValue: "",
      // 这里数据写死了，最终根据型号异步获取后从vuex里取
      // 树要单选且只有叶子节点可以选择，参考https://blog.csdn.net/lianzhang861/article/details/91988151 做
      // 树组件 https://element.eleme.cn/#/zh-CN/component/tree
      param1: [
        {
          id: 1,
          label: "一级 1",
          children: [
            {
              id: 4,
              label: "二级 1-1",
              children: [
                {
                  id: 9,
                  label: "三级 1-1-1",
                },
                {
                  id: 10,
                  label: "三级 1-1-2",
                },
              ],
            },
          ],
        },
        {
          id: 2,
          label: "一级 2",
          children: [
            {
              id: 5,
              label: "二级 2-1",
            },
            {
              id: 6,
              label: "二级 2-2",
            },
          ],
        },
      ],
    };
  },
  watch: {
    searchValue(val) {
      this.$refs.paramTree1.filter(val);
      // this.$refs.paramTree2.filter(val);
    },
  },
  methods: {
    searchParamByValue(value) {
      // this.$store.commit("server/setIsSelectGroupFlag", tab.name === "group");
      // this.$store.dispatch("server/getServerList");
      // if (tab.name === "group") this.$store.dispatch("server/getGroupList");
    },
    filterNode(value, data) {
      // 树搜索
      if (!value) return true;
      return data.label.indexOf(value) !== -1;
    },
  },
};
</script>

<style lang="scss">
.side-container {
  height: 100%;
  overflow: hidden;
  .input-with-select {
    margin-bottom: 10px;
  }
}
</style>
