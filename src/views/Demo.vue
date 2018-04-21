/*
* @Description: Demo, put some components' demo
* @Author: John Trump
* @Created: 2018-04-21 10:46
*/
<template>
  <div class="demo">

    <div class="areachart">
      <area-chart class="echarts" ref="priceChart"></area-chart>
    </div>

    <div class="element">
      <el-button>are you ok?</el-button>
    </div>

    <div class="mutillinechart">
      <multi-line-chart class="echarts"></multi-line-chart>
    </div>

  </div>
</template>

<script>
import AreaChart from "../components/AreaChart";
import MultiLineChart from "../components/MultiLineChart";

export default {
  name: "Demo",
  computed: {},
  data() {
    return {};
  },
  created() {},
  methods: {},
  watch: {},
  components: {
    AreaChart,
    MultiLineChart
  }
};
</script>

<style lang="less" scoped>
.areachart {
  width: 100%;
}

// Echarts样式
.echarts {
  width: 100%;
}
</style>
