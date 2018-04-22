/*
* @Description: LiveRobots, 自动交易算法列表页面
* @Author: John Trump
* @Created: 2018-04-21 15:28
*/
<template>
  <div>
    <grid-table
      :selection="TABLECONFIG.selection"
      :columns="TABLECONFIG.columns"
      :operations="TABLECONFIG.operations"
      :tableData="tableData"
    ></grid-table>
  </div>
</template>

<script>
import GridTable from "../components/GridTable";
const TABLECONFIG = {
  selection: false,
  columns: [
    {
      label: "Robot",
      dataIndex: "name"
    },
    {
      label: "Strategy",
      dataIndex: "strategy"
    },
    {
      label: "Profit",
      dataIndex: "profit",
      sortable: true
    },
    {
      label: "Member",
      dataIndex: "member"
    },
    {
      label: "Created",
      dataIndex: "created",
      sortable: true
    }
  ],
  operations: [
    {
      label: "View",
      type: "success"
    }
  ]
};

export default {
  name: "LiveRobots",
  computed: {},
  data() {
    return {
      TABLECONFIG,
      // TODO: remove this mock
      tableData: [
        {
          name:
            "币安1249947802 BTC 币安1249947802 BTC 币安1249947802 BTC 币安1249947802 BTC",
          strategy: "币安山寨币轮动ETF",
          profit: 0.5558,
          member: "newblock",
          created: "2018-04-21 09:27:50"
        },
        {
          name: "币安1249947802 BTC",
          strategy: "币安山寨币轮动ETF",
          profit: 10.5558,
          member: "newblock",
          created: "2018-04-21 09:27:50"
        }
      ]
    };
  },
  created() {},
  methods: {},
  watch: {},
  components: {
    GridTable
  }
};
</script>

<style lang="css" scoped>

</style>
