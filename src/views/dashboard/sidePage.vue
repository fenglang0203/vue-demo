<template>
  <div class="side-container">
    <el-container class="ip-container" direction="vertical">
      <el-header
        style="
          height: 'auto'
          margin: 0;
          padding-top: 10px;
          padding-left: 20px;
          text-align: left;
          border-bottom: solid 1px #ddd;
        "
      >
        <div>
          型号:
          <el-select
            v-model="typeValue"
            size="small"
            placeholder="请选择"
            style="width: 80%"
            @change="changeType"
          >
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            >
            </el-option>
          </el-select>
        </div>
        <dl class="dl-container">
          <dt>参数对信息</dt>
          <dd v-if="selectParam1">
            已选参数1: {{selectParam1.id}}/{{selectParam1.label}}
          </dd>
          <dd v-if="selectParam2">
            已选参数2: {{selectParam2.id}}/{{selectParam2.label}}
          </dd>
        </dl>
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
import { mapState } from "vuex";
export default {
  name: "side-page",
  components: {},
  data() {
    return {
      options: [
        {
          value: "cz1",
          label: "CZ-1",
        },
        {
          value: "cz2",
          label: "CZ-2",
        },
      ],
      typeValue: "cz1",
      activeParam: "1",
      searchValue: "",
      defaultProps: {
        children: "children",
        label: "label",
      },
      selectParam1: null, //点击树选择参数赋值
      selectParam2: null,
    };
  },
  computed: {
    ...mapState("dashboard", {
      // 树要单选且只有叶子节点可以选择，参考https://blog.csdn.net/lianzhang861/article/details/91988151 做
      // 树组件 https://element.eleme.cn/#/zh-CN/component/tree
      param1: (state) => {
        return state.param1;
      },
      param2: (state) => {
        return state.param2;
      },
    }),
  },
  watch: {
    searchValue(val) {
      this.$refs.paramTree1.filter(val);
      // this.$refs.paramTree2.filter(val);
    },
  },
  mounted() {
    const { dispatch } = this.$store;
    // 根据型号初始化值获取参数列表
    dispatch("dashboard/changeType", this.typeValue);
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
    changeType(value) {
      // 型号变动
      const { dispatch } = this.$store;
      dispatch("dashboard/changeType", value);
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
  .dl-container{
    text-align: left;
    margin: 10px 0
    dt{
      font-size: 16px;
    }
    dd{
      font-size: 14px;
      margin: 0;
      line-height: 24px;
    }
  }
}
</style>
