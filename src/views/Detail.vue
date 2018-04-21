/*
* @Description: Detail, 显示交易详情
* @Author: John Trump
* @Created: 2018-04-21 10:46
*/
<template>
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
        <pre>
时间2018-04-21 17:45:59
深度次数:1264139
P:13.133
M:14.158
2.5: P_COUNT: 5 M_COUNT: 3
[{"MarginLevel":10,"Amount":1496,"FrozenAmount":88,"Price":611.4285,"Profit":0.531345,"Type":0,"ContractType":"this_week"},{"MarginLevel":10,"Amount":1496,"FrozenAmount":0,"Price":622.1973,"Profit":-0.590996,"Type":1,"ContractType":"quarter"}]
        </pre>
      </div>
    </el-tab-pane>
    <el-tab-pane label="Logs">
      <grid-table
        :selection="TABLECONFIG.selection"
        :columns="TABLECONFIG.columns"
        :operations="TABLECONFIG.operations"
        :tableData="tableData"
      ></grid-table>
    </el-tab-pane>
  </el-tabs>
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
      label: "Type",
      dataIndex: "type"
    },
    {
      label: "Price",
      dataIndex: "price"
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
      TABLECONFIG,
      tableData: [{
        date: "2018-04-21 09:27:50",
        type: "system",
        message: 'plus 开仓： [{"Info":{"symbol":"eth_usd","buy_available":1672,"contract_id":201804270020042,"buy_amount":1672,"sell_price_avg":0,"buy_price_avg":609.07433952,"buy_profit_real":0.48161855,"sell_price_cost":0,"buy_price_cost":609.07433952,"create_date":1524211439000,"lever_rate":10,"contract_type":"this_week","sell_amount":0,"sell_profit_real":0,"sell_available":0},"MarginLevel":10,"Amount":1672,"FrozenAmount":0,"Price":609.0744,"Profit":0.481618,"Type":0,"ContractType":"this_week"},{"Info":{"symbol":"eth_usd","buy_available":0,"sell_price_cost":620.92992253,"create_date":1522430527000,"contract_id":201806290020060,"contract_type":"quarter","sell_amount":1672,"buy_price_cost":577.0323238,"lever_rate":10,"buy_amount":0,"buy_profit_real":0,"sell_available":1672,"buy_price_avg":577.0323238,"sell_price_avg":620.92992253,"sell_profit_real":-0.59243793},"MarginLevel":10,"Amount":1672,"FrozenAmount":0,"Price":620.93,"Profit":-0.592437,"Type":1,"ContractType":"quarter"}]'
      }]
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
.status-wrapper pre {
  text-align: left;
}
</style>
