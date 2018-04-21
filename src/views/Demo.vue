/*
* @Description: Demo, put some components' demo
* @Author: John Trump
* @Created: 2018-04-21 10:46
*/
<template>
  <div class="demo">

    <div class="areachart">
      <area-chart class="echarts"></area-chart>
    </div>

    <div class="mutillinechart">
      <multi-line-chart class="echarts"></multi-line-chart>
    </div>

    <div class="mutillinechart">
      <candlestick class="echarts"></candlestick>
    </div>

    <div class="gridtable">
      <grid-table
        :selection="TABLECONFIG.selection"
        :columns="TABLECONFIG.columns"
        :operations="TABLECONFIG.operations"
        :tableData="tableData"
      ></grid-table>
    </div>

  </div>
</template>

<script>
import AreaChart from "../components/AreaChart";
import MultiLineChart from "../components/MultiLineChart";
import GridTable from "../components/GridTable";
import Candlestick from "../components/Candlestick";

const TABLECONFIG = {
  selection: true,
  columns: [
    {
      label: "编号",
      width: "20px",
      dataIndex: "deptId"
    },
    {
      label: "部门名称",
      dataIndex: "name"
    },
    {
      label: "排序",
      width: "15px",
      dataIndex: "orderNum"
    },
    {
      label: "状态",
      width: "18px",
      dataIndex: "delFlag",
      name: "department_delFlag",
      filter: {
        filters: [{ text: "禁用", value: 0 }, { text: "正常", value: 1 }],
        method: (value, row) => {
          return row.delFlag === value;
        }
      }
    }
  ],
  operations: [
    {
      label: "编辑",
      perms: "system:sysDept:edit",
      eventType: "edit"
    },
    {
      label: "添加下级",
      eventType: "addSon",
      perms: "system:sysDept:add",
      type: "success"
    },
    {
      label: "删除",
      eventType: "delete",
      perms: "system:sysDept:remove",
      type: "danger"
    }
  ]
};

export default {
  name: "Demo",
  computed: {},
  data() {
    return {
      TABLECONFIG,
      tableData: []
    };
  },
  created() {},
  methods: {},
  watch: {},
  components: {
    AreaChart,
    MultiLineChart,
    GridTable,
    Candlestick
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
