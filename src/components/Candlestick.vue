/*
* @Description: Candlestick, k线图
* @Author: John Trump
* @Created: 2018-04-22 02:34
*/
<template>
  <chart :options="chartOptions" ref="chart" auto-resize></chart>
</template>

<script>

export default {
  name: 'Candlestick',
  computed: {},
  data () {
    return {
      chartOptions: {
        xAxis: {
        data: ['2017-10-24', '2017-10-25', '2017-10-26', '2017-10-27']
      },
      yAxis: {},
      series: [{
          type: 'k',
          data: [
            [20, 30, 10, 35],
            [40, 35, 30, 55],
            [33, 38, 33, 40],
            [40, 40, 32, 42]
          ]
        }]
      }
    }
  },
  created () {
    // 监听窗口大小变化
  },
  methods: {},
  watch: {}
}
</script>

<style lang="css" scoped>

</style>
