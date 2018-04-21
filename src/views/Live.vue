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
      dataIndex: "robot"
    },
    {
      label: "Strategy",
      dataIndex: "strategy"
    },
    {
      label: "Profit",
      dataIndex: "profit"
    },
    {
      label: "Member",
      dataIndex: "member"
    },
    {
      label: "Created",
      dataIndex: "created"
    }
  ],
  operations: [
    {
      label: "view",
      // eventType: "delete",
      // perms: "system:sysDept:remove",
      type: "success"
    }
  ]
};

export default {
  name: "LiveRobots",
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
    GridTable
  }
};
</script>

<style lang="css" scoped>

</style>
