/*
* @Description: Demo, put some components' demo
* @Author: John Trump
* @Created: 2018-04-21 10:46
*/
<template>
  <div class="demo">
    <div class="areachart">
      <area-chart class="echarts-price" ref="priceChart"></area-chart>
    </div>
  </div>
</template>

<script>
import AreaChart from '../components/AreaChart';

export default {
  name: 'Demo',
  computed: {},
  data () {
    return {
    }
  },
  created () {},
  methods: {},
  watch: {},
  components: {
    AreaChart
  }
}
</script>

<style lang="less" scoped>
  .areachart {
    width: 100%;
  }

    // Echarts样式
  .echarts-price,
  .echarts-treemap {
    width: 100%;
  }

</style>
