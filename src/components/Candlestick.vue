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
        axisLabel: {
          color: '#fff'
        },
        /** grid配置 */
        grid: {
          borderWidth: 0,
          top: 12,
          bottom: 10,
          left: 0,
          right: 10,
          containLabel: true
        },
        xAxis: {
          snap: true,
          axisLine: { lineStyle: { color: '#8392A5' } },
          data: ['2017-10-24', '2017-10-25', '2017-10-26', '2017-10-27']
        },
        yAxis: {
          axisLine: { lineStyle: { color: '#8392A5' } },
          splitLine: {
            lineStyle: {
              color: '#384046'
            }
          }
        },
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
