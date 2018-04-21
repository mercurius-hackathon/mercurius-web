/*
* @Description: MultiLineChart, 多条折线图
* @Author: John Trump
* @Created: 2018-04-11 11:13
*/
<template>
  <chart :options="chartOptions" ref="chart"></chart>
</template>

<script>
var base = +new Date(2008, 8, 8);
var oneDay = 24 * 3600 * 1000;
var date = [];

var data = [Math.random() * 300];

for (var i = 1; i < 2000; i++) {
  var now = new Date((base += oneDay));
  date.push([now.getFullYear(), now.getMonth() + 1, now.getDate()].join("/"));
  data.push(Math.round((Math.random() - 0.5) * 20 + data[i - 1]));
}

export default {
  name: "AreaChart",
  created() {
    // 监听窗口大小变化
    this.chartOptions = {
      // zoom
      dataZoom: [
        {
          type: "inside",
          start: 0,
          end: 10,
          // 按住 ctrl 和鼠标滚轮能触发缩放。
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
      title: {
        text: "折线图堆叠"
      },
      tooltip: {
        trigger: "axis"
      },
      legend: {
        data: ["邮件营销", "联盟广告", "视频广告", "直接访问", "搜索引擎"],
        bottom: '10%'
      },
      grid: {
        left: '1%',
        right: '4%',
        bottom: '3%',
        top: '10%',
        containLabel: true
      },
      xAxis: {
        type: "category",
        boundaryGap: false,
        data: ["周一", "周二", "周三", "周四", "周五", "周六", "周日"]
      },
      yAxis: {
        type: "value",
        axisLabel: {
          inside: true,
          formatter: "{value}",
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
      },
      series: [
        {
          name: "邮件营销",
          type: "line",
          data: [120, 132, 101, 134, 90, 230, 210]
        },
        {
          name: "联盟广告",
          type: "line",
          data: [220, 182, 191, 234, 290, 330, 310]
        },
        {
          name: "视频广告",
          type: "line",
          data: [150, 232, 201, 154, 190, 330, 410]
        },
        {
          name: "直接访问",
          type: "line",

          data: [320, 332, 301, 334, 390, 330, 320]
        },
        {
          name: "搜索引擎",
          type: "line",
          data: [420, 432, 401, 434, 490, 430, 420]
        }
      ]
    };
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
