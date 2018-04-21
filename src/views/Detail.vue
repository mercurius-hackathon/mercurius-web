/*
* @Description: Detail, 显示交易详情
* @Author: John Trump
* @Created: 2018-04-21 10:46
*/
<template>
    <div>
      <el-tabs type="border-card">
      <!-- profit chart module -->
      <el-tab-pane label="Profit chart">
        <div class="areachart">
          <area-chart class="echarts"></area-chart>
        </div>
      </el-tab-pane>
      <el-tab-pane label="Strategy chart">
        <div class="mutillinechart">
          <multi-line-chart class="echarts"></multi-line-chart>
        </div>
      </el-tab-pane>
      <el-tab-pane label="Status">
        <div class="status-wrapper">
          <p> Time: 2018-04-21 17:45:59 </p>
          <p> DeepTimes:1264139 </p>
          <p> P: 17.182</p>
          <p> M: 14.158</p>
          <p>2.5: P_COUNT: 5 M_COUNT: 3</p>
          <p>[{"MarginLevel":10,"Amount":2024,"FrozenAmount":0,"Price":606.1285,"Profit":0.478648,"Type":0,"ContractType":"this_week"},{"MarginLevel":10,"Amount":2024,"FrozenAmount":0,"Price":618.7885,"Profit":-0.595328,"Type":1,"ContractType":"quarter"}]</p>
        </div>
      </el-tab-pane>
      <el-tab-pane label="Logs">
        <div class="log-contents">
          <div class="log">
            <div class="scroll-log">
              <!-- loop content -->
              <div class="level1">
                <span class="time">2018-02-28 10:30</span>
                <span class="message">Profit: 18.1734% (15.9673% over B&H)</span>
              </div>
              <div class="level2">
                <span class="time">2018-02-28 10:30</span>
                <span class="message">Stop detected.</span>
              </div>
              <div class="level0">
                <span class="time">2018-02-28 10:30</span>
                <span class="message">Profit: 18.1734% (15.9673% over B&H)</span>
              </div>
            </div>
          </div>
        </div>
      </el-tab-pane>
    </el-tabs>

    <el-tabs type="border-card" class="test">
      <el-tab-pane label="BlackTest">BlackTest</el-tab-pane>
    </el-tabs>
  </div>

</template>

<script>

import AreaChart from "../components/AreaChart";
import MultiLineChart from "../components/MultiLineChart";
import GridTable from "../components/GridTable";
const TABLECONFIG = {
  selection: false,
  columns: [
    {
      label: "Date",
      width: "40px",
      dataIndex: "date"
    },
    {
      label: "Platform",
      dataIndex: "platform"
    },
    {
      label: "Type",
      dataIndex: "type"
    },
    {
      label: "Price",
      dataIndex: "price"
    },
    {
      label: "Amount",
      dataIndex: "amount"
    },
    {
      label: "Message",
      dataIndex: "message"
    }
  ]
}

export default {
  name: "Demo",
  computed: {},
  data() {
    return {
      TABLECONFIG
    };
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
.status-wrapper  {
  text-align: left;
  margin-top: 0;
}
.test {
  margin-top: 40px;
}

.log-contents {
  font-size: 12px;
  position: relative;
  text-align: left;
  padding: 5px;
  .log {
    height: auto;
    overflow: scroll;
    .scroll-log {
      height: 215px;
    }
    .time {
      color: #888;
      margin-right: 10px;
    }
  }
  // success status
  .level1 {
    .message {
      color: #69aa46;
    }
  }
  // error status
  .level2 {
    .message {
      color: #b74635;
    }
  }
  // common status
  .level0 {
    color: #000;
  }
}
</style>
