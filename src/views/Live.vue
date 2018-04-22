/*
* @Description: LiveRobots, 自动交易算法列表页面
* @Author: John Trump
* @Created: 2018-04-21 15:28
*/
<template>
  <div style="padding:0 30px 30px;">
    <grid-table
      :selection="TABLECONFIG.selection"
      :columns="TABLECONFIG.columns"
      :operations="TABLECONFIG.operations"
      :tableData="tableData"
      @edit="handleJump"
    ></grid-table>
  </div>
</template>

<script>
import GridTable from "../components/GridTable";
import moment from "moment";
const TABLECONFIG = {
  selection: false,
  columns: [
    {
      label: "Algorithm",
      dataIndex: "name"
    },
    // {
    //   label: "Risk",
    //   dataIndex: "risk"
    // },
    {
      label: "Profit",
      dataIndex: "profit",
      sortable: true
    },
    {
      label: "Created",
      dataIndex: "created",
      sortable: true
    },
    {
      label: "Category",
      dataIndex: "category",
      sortable: true
    }
  ],
  operations: [
    {
      label: "View",
      type: "success",
      eventType: 'edit',
    }
  ]
};

export default {
  name: "LiveRobots",
  computed: {},
  data() {
    return {
      TABLECONFIG,
      tableData: []
    };
  },
  created() {
    var risk_arr = ['low', 'low', 'low']
    var c_arr = ['Follow the winner', 'Follow the loser', 'Mean Reversion', 'others']
    var strategyArray = ['ubah', 'best', 'crp', 'bcrp', 'up', 'eg', 'ons', 'anticor1', 'anticor2', 'pamr', 'cwmr_var', 'cwmr_std', 'olmar2', 'bk', 'bnn', 'cornk', 'm0', 'rmr', 'sp', 'wmamr'];
    strategyArray.forEach(item => {
      this.tableData.push({
        name: item,
        profit: Math.random() * 3 + 1,
        // Math.floor(Math.random() * 3 )
        risk: risk_arr[Math.floor(Math.random() * 3)],
        category: c_arr[(Math.floor(Math.random() * 4))],
        created: moment(new Date(new Date() - 3600 * 1000 * Math.random() * 100 * 24)).format(
        "YYYY-MM-DD HH:MM:mm"
      ),
      });
    });
  },
  methods: {
    handleJump: function () {
      this.$router.push({
        name: 'detail'
      })
    }
  },
  watch: {},
  components: {
    GridTable
  }
};
</script>

<style lang="css" scoped>

</style>
