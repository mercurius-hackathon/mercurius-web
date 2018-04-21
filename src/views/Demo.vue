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

    <div class="mutillinechart">
      <multi-line-chart class="echarts"></multi-line-chart>
    </div>

    <div class="gridtable">
      <grid-table></grid-table>
    </div>
  </div>
</template>

<script>
import AreaChart from "../components/AreaChart";
import MultiLineChart from "../components/MultiLineChart";
import GridTable from "../components/GridTable";

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
    MultiLineChart,
    GridTable
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
