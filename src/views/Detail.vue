/*
* @Description: Detail, 显示交易详情
* @Author: John Trump
* @Created: 2018-04-21 10:46
*/
<template>
    <div>
      <div class="select-params">
        <!-- market -->
        <el-select v-model="market" placeholder="market" style="width: 120px;">
          <el-option label="Poloniex" value="poloniex"></el-option>
          <el-option label="Binance" value="binance"></el-option>
          <el-option label="GDAX" value="gdax"></el-option>
          <el-option label="Huobi" value="huobi"></el-option>
        </el-select>
        <!-- instrument -->
        <el-select v-model="instrument" placeholder="instrument" multiple filterable default-first-option style="width: 400px; ">
          <el-option label="ETH/BTC" value="ETH/BTC"></el-option>
          <el-option label="XMR/BTC" value="XMR/BTC"></el-option>
          <el-option label="STR/BTC" value="STR/BTC"></el-option>
          <el-option label="OMG/BTC" value="OMG/BTC"></el-option>
          <el-option label="LSK/BTC" value="LSK/BTC"></el-option>
        </el-select>
        <br>
        <!-- period -->
        <el-select v-model="period" placeholder="period" style="width: 120px;">
          <el-option label="5m" value="5m"></el-option>
          <el-option label="15m" value="15m"></el-option>
          <el-option label="30m" value="30m"></el-option>
          <el-option label="2h" value="2h"></el-option>
          <el-option label="4h" value="4h"></el-option>
          <el-option label="1d" value="1d"></el-option>
        </el-select>
        <!-- time -->
        <el-date-picker
          v-model="times"
          type="datetimerange"
          range-separator="To"
          start-placeholder="start at"
          end-placeholder="end at">
        </el-date-picker>
      </div>
      <!-- row 1 -->
      <el-row>
        <el-col :span="24">
          <el-tabs type="border-card">
            <!-- profit chart module -->
            <el-tab-pane label="Profit chart">
              <div class="areachart">
                <area-chart class="echarts"></area-chart>
              </div>
            </el-tab-pane>
            <el-tab-pane label="Strategy chart">
              <div class="mutillinechart">
                <!-- <multi-line-chart class="echarts"></multi-line-chart> -->
                <candlestick class="echarts"></candlestick>
              </div>
            </el-tab-pane>
          </el-tabs>
        </el-col>
      </el-row>
      <!-- row 2 -->
      <el-row class="row2">
        <el-col :span="14" class="el-col">
          <el-tabs type="border-card" class="test">
            <el-tab-pane label="Performance">
              <!-- blacktest module -->
              <div class="blacktest-module">
                <grid-table
                  :selection="TABLECONFIG.selection"
                  :columns="TABLECONFIG.columns"
                  :operations="TABLECONFIG.operations"
                  :tableData="tableData"
                ></grid-table>
              </div>
            </el-tab-pane>

            <el-tab-pane label="Up/Down">
                <grid-table
                  :selection="TABLECONFIG2.selection"
                  :columns="TABLECONFIG2.columns"
                  :operations="TABLECONFIG2.operations"
                  :tableData="tableData"
                ></grid-table>
            </el-tab-pane>

            </el-tabs>
          </el-tabs>
        </el-col>

        <el-col :span="10" class="el-col">
          <el-tabs type="border-card">
            <el-tab-pane label="Logs" style="min-height: 150px;">
              <div class="log-contents">
                <div class="log">
                  <div class="scroll-log">
                    <!-- loop content -->
                    <div class="level1">
                      <span class="time">2018-04-22 10:30</span>
                      <span class="message">Profit: 18.1734% (15.9673% over B&H)</span>
                    </div>
                    <div class="level2">
                      <span class="time">2018-04-22 10:30</span>
                      <span class="message">Stop detected.</span>
                    </div>
                    <div class="level0">
                      <span class="time">2018-04-22 10:30</span>
                      <span class="message">Profit: 18.1734% (15.9673% over B&H)</span>
                    </div>
                  </div>
                </div>
              </div>
            </el-tab-pane>
            <el-tab-pane label="Status" style="min-height: 150px;">
              <div class="status-wrapper">
                <p> Time: 2018-04-21 17:45:59 </p>
                <p> DeepTimes:1264139 </p>
                <p> P: 17.182</p>
                <p> M: 14.158</p>
                <p>2.5: P_COUNT: 5 M_COUNT: 3</p>
                <p>[{"MarginLevel":10,"Amount":2024,"FrozenAmount":0,"Price":606.1285,"Profit":0.478648,"Type":0,"ContractType":"this_week"},{"MarginLevel":10,"Amount":2024,"FrozenAmount":0,"Price":618.7885,"Profit":-0.595328,"Type":1,"ContractType":"quarter"}]</p>
              </div>
            </el-tab-pane>
          </el-tabs>
        </el-col>
      </el-row>
  </div>

</template>

<script>
import AreaChart from "../components/AreaChart";
import MultiLineChart from "../components/MultiLineChart";
import GridTable from "../components/GridTable";
import Candlestick from "../components/Candlestick";
import http from "../service";
import moment from "moment";
const TABLECONFIG = {
  selection: false,
  columns: [
    {
      label: "average",
      dataIndex: "average"
    },
    {
      label: "portfolio value",
      dataIndex: "portfolio_value"
    },
    {
      label: "max drawdown",
      dataIndex: "max_drawdown"
    },
    {
      label: "sharpe ratio",
      dataIndex: "sharpe_ratio"
    },
    {
      label: "sortino ratio",
      dataIndex: "sortino_ratio"
    }
  ],
  operations: []
};
const TABLECONFIG2 = {
  selection: false,
  columns: [
    {
      label: "negative day",
      dataIndex: "negative_day"
    },
    {
      label: "negative periods",
      dataIndex: "negative_periods"
    },
    {
      label: "negative week",
      dataIndex: "negative_week"
    },
    {
      label: "positive periods",
      dataIndex: "positive_periods"
    },
    {
      label: "postive day",
      dataIndex: "postive_day"
    },
    {
      label: "postive week",
      dataIndex: "postive_week"
    }
  ],
  operations: []
};

export default {
  name: "Detail",
  computed: {},
  data() {
    return {
      market: "poloniex",
      instrument: ["ETH/BTC"],
      period: "15m",
      times: [new Date(new Date() - 3600 * 1000 * 24), new Date()],
      start_time: moment(new Date(new Date() - 3600 * 1000 * 24)).format(
        "YYYY-MM-DD HH:MM:mm"
      ),
      end_time: moment(new Date()).format("YYYY-MM-DD HH:MM:mm"),
      TABLECONFIG,
      TABLECONFIG2
    };
  },
  created() {
    this.uploadAlgo();
  },
  methods: {
    uploadAlgo: function() {
      http
        .post("/api/uploadAlgo", {
          exchange: this.market,
          timeframe: this.period,
          symbols: this.instrument,
          start_time: this.start_time,
          end_time: this.end_time
        })
        .then(res => {
          console.log("res", res);
        });
    }
  },
  watch: {
    market: function(val, oldVal) {
      this.uploadAlgo();
    },
    instrument: function(val, oldVal) {
      this.uploadAlgo();
    },
    period: function(val, oldVal) {
      this.uploadAlgo();
    },
    times: function(val, oldVal) {
      this.start_time = moment(this.val[0]).format("YYYY-MM-DD HH:MM:mm");
      this.end_time = moment(this.val[1]).format("YYYY-MM-DD HH:MM:mm");
    }
  },
  components: {
    AreaChart,
    MultiLineChart,
    GridTable,
    Candlestick
  }
};
</script>

<style lang="less" scoped>
@import url("../themes.less");
.areachart {
  width: 100%;
}

// Echarts样式
.echarts {
  width: 100%;
}
.status-wrapper {
  word-break: break-all;
  font-size: 12px;
  text-align: left;
  margin-top: 0;
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
      color: #e0e0e0;
      margin-right: 10px;
    }
  }
  // success status
  .level1 {
    .message {
      color: @light-green;
    }
  }
  // error status
  .level2 {
    .message {
      color: @orange;
    }
  }
  // common status
  .level0 {
    color: @light-blue;
  }
}
.row2 {
  margin-top: 10px;
  box-sizing: content-box;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}

.el-col {
  padding: 10px;
}
.select-params {
  text-align: left;
  & > * {
    margin: 10px 10px;
  }
}
</style>
