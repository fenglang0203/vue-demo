<template>
  <div class="dashboard-container">
    <div>first</div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "First",
  computed: {
    ...mapGetters(["name"]),
  },
  data() {
    return {
    };
  },
  methods: {
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
