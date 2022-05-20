<template>
  <div class="result-container">
    <div>result2</div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "Result2",
  computed: {
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
.result {
  &-container {
    padding: 50px 30px 0 30px;
  }
  &-text {
    font-size: 30px;
    line-height: 46px;
  }
}
</style>
