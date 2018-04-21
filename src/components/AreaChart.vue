/*
* @Description: AreaChart, 面积图
* @Author: John Trump
* @Created: 2018-04-11 11:13
*/
<template>
  <chart :options="chartOptions" ref="chart"></chart>
</template>

<script>
import echarts from "echarts/lib/echarts";
var base = +new Date(2008, 8, 8);
var oneDay = 24 * 3600 * 1000;
var date = [];

var data = [Math.random() * 300];

for (var i = 1; i < 2000; i++) {
  var now = new Date((base += oneDay));
  date.push([now.getFullYear(), now.getMonth() + 1, now.getDate()].join("/"));
  data.push(Math.round((Math.random() - 0.5) * 20 + data[i - 1]));
}

/** 亮色主题 */
const lightThemeOptions = {
  xAxis: {
    axisPointer: {
      snap: true,
      lineStyle: {
        color: "#1863a5",
        opacity: 0.5,
        width: 1
      }
    },
    axisLabel: {
      color: "#343434"
    },
    splitArea: {
      // 区域分割颜色
      // NOTE: 因为数据太密集，所以不显示区域分割的颜色
      show: false,
      areaStyle: {
        color: ["#fff", "#F7F7F7"],
        opacity: 0.5
      }
    }
  },
  yAxis: {
    splitLine: {
      lineStyle: {
        color: "#eee"
      }
    }
  },
  series: [
    {
      itemStyle: {
        normal: {
          type: "solid",
          color: "#2D73B0"
        }
      },
      areaStyle: {
        normal: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            {
              offset: 0,
              color: "rgba(25,100,165,0.50)"
            },
            {
              offset: 1,
              color: "rgba(25,100,165,0.00)"
            }
          ])
        }
      }
    }
  ]
};

const commonOptions = {
  // zoom
  dataZoom: [
    {
      type: "inside",
      start: 0,
      end: 10,
      // 表示按住 ctrl 和鼠标滚轮能触发缩放。
      zoomOnMouseWheel: "ctrl"
    },
    {
      start: 0,
      end: 10,
      handleIcon:
        "M10.7,11.9v-1.3H9.3v1.3c-4.9,0.3-8.8,4.4-8.8,9.4c0,5,3.9,9.1,8.8,9.4v1.3h1.3v-1.3c4.9-0.3,8.8-4.4,8.8-9.4C19.5,16.3,15.6,12.2,10.7,11.9z M13.3,24.4H6.7V23h6.6V24.4z M13.3,19.6H6.7v-1.4h6.6V19.6z",
      handleSize: "80%",
      handleStyle: {
        color: "#fff",
        shadowBlur: 3,
        shadowColor: "rgba(0, 0, 0, 0.6)",
        shadowOffsetX: 2,
        shadowOffsetY: 2
      }
    }
  ],
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
    trigger: "axis",
    show: true,
    position: function(pt) {
      return [pt[0], "10%"];
    },
    axisPointer: {
      animation: false,
      type: "cross",
      label: {
        backgroundColor: "#6a7985"
      }
    }
  },
  axisPointer: {
    link: { xAxisIndex: "all" },
    label: {
      backgroundColor: "#777"
    }
  },
  /** x轴配置 */
  xAxis: {
    type: "category",
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
    }
  },
  /** Y轴配置 */
  yAxis: {
    type: "value",
    splitLine: {
      show: true
    },
    axisLine: {
      show: false
    },
    axisLabel: {
      inside: true,
      formatter: "${value}",
      margin: 5,
      padding: [0, 0, 12, 0],
      textStyle: {
        // 刻度标签文字的颜色
        color: "#D5D5D5"
      }
    },
    axisTick: {
      show: false
    },
    boundaryGap: [0, "100%"]
  },
  /** 数据 */
  series: [
    {
      name: "模拟数据",
      type: "line",
      smooth: true,
      showSymbol: false,
      data: data
    }
  ]
};

export default {
  name: "AreaChart",
  created() {
    // 监听窗口大小变化
    this.chartOptions = this.$_.merge(commonOptions, lightThemeOptions);
    window.addEventListener(
      "resize",
      () => {
        this.$refs.chart.resize();
      },
      false
    );
  },
  methods: {
    resize: function() {
      this.$refs.chart.resize();
    }
  },
  data: function() {
    return {
      // 图表配置
      chartOptions: null
    };
  },
  watch: {}
};
</script>

<style lang="less" scoped>
</style>
