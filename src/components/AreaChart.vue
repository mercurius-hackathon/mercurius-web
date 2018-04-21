/*
* @Description: AreaChart, 面积图
* @Author: John Trump
* @Created: 2018-04-11 11:13
*/
<template>
  <chart :options="chartOptions" ref="chart"></chart>
</template>

<script>
import echarts from 'echarts/lib/echarts'
// mock data
var date = []
var data = []
for (var i = 1; i < 12; i++) {
  date.push(i + 11)
  data.push(Math.round((Math.random()) * 10 + 10))
}


/** 亮色主题 */
const lightThemeOptions = {
  xAxis: {
    axisPointer: {
      snap: true,
      lineStyle: {
        color: '#1863a5',
        opacity: 0.5,
        width: 2
      }
    },
    axisLabel: {
      color: '#343434'
    },
    splitArea: {
      // 区域分割颜色
      show: true,
      areaStyle: {
        color: ['#fff', '#F7F7F7'],
        opacity: 0.5
      }
    },
  },
  yAxis: {
    splitLine: {
      lineStyle: {
        color: '#eee'
      }
    }
  },
  series: [{
    itemStyle: {
      normal: {
        type: 'solid',
        color: '#2D73B0',
        opacity: '0.1'
      }
    },
    areaStyle: {
      normal: {
        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
          offset: 0,
          color: 'rgba(25,100,165,0.50)'
        }, {
          offset: 1,
          color: 'rgba(25,100,165,0.00)'
        }])
      }
    }
  }]
}

const commonOptions = {
  /** grid配置 */
  grid: {
    borderWidth: 0,
    top: 12,
    bottom: 10,
    left: 10,
    right: 30,
    containLabel: true
  },
  /** tooltip配置 */
  tooltip: {
    show: true,
    trigger: 'axis',
    position: function (pt) {
      return [pt[0], '10%']
    },
    axisPointer: {
      animation: false,
      type: 'cross'
    }
  },
  axisPointer: {
    link: {xAxisIndex: 'all'},
    label: {
      backgroundColor: '#777'
    }
  },
  /** x轴配置 */
  xAxis: {
    type: 'category',
    boundaryGap: false,
    data: date,
    // 坐标轴刻度相关设置
    axisTick: {
      show: false
    },
    // 坐标轴刻度相关设置
    axisLine: {
      show: false
    },
    axisLabel: {
      padding: [7, 0, 0, 0]
    },
  },
  /** Y轴配置 */
  yAxis: {
    type: 'value',
    splitLine: {
      show: true
    },
    axisLine: {
      show: false
    },
    axisLabel: {
      inside: true,
      formatter: '${value}',
      margin: 5,
      padding: [0, 0, 12, 0],
      textStyle: {
        // 刻度标签文字的颜色
        color: '#D5D5D5'
      }
    },
    axisTick: {
      show: false
    },
    boundaryGap: [0, '100%']
  },
  /** 数据 */
  series: [{
    name: '模拟数据',
    type: 'line',
    smooth: false,
    symbol: 'none',
    sampling: 'average',
    data: data
  }]
}

export default {
  name: 'AreaChart',
  created () {
    // 监听窗口大小变化
    window.addEventListener('resize', () => {
      this.$refs.chart.resize()
    }, false)
  },
  methods: {
    resize: function () {
      this.$refs.chart.resize()
    }
  },
  data: function () {
    return {
      // 图表主题
      chartOptions: null
    }
  },
  watch: {

  }
}
</script>

<style lang="less" scoped>
</style>
