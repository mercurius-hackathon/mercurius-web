<template>
    <!-- v-loading="loading" -->
    <!-- TODO: add v-loading -->
  <el-table
    :data="tableData"
    @selection-change="handleSelectionChange"
    align="center"
    show-overflow-tooltip
    stripe
    border>
    <!-- 可选择 -->
    <el-table-column v-if="selection" type="selection" min-width="15px"></el-table-column>
    <!-- 列 -->
    <template v-for="(column) in columns">
      <el-table-column
        v-if="column.filter"
        :label="column.label"
        :key="column.dataIndex"
        :prop="column.dataIndex"
        :sortable="column.sortable"
        :min-width="column.width"
        show-overflow-tooltip
        :filters="column.filter ? column.filter.filters : null"
        :filter-method="column.filter ? column.filter.method : null">
      </el-table-column>
      <el-table-column
        v-else
        show-overflow-tooltip
        :label="column.label"
        :key="column.dataIndex"
        :prop="column.dataIndex"
        :sortable="column.sortable"
        :min-width="column.width">
      </el-table-column>
    </template>
    <!-- 操作 -->
    <el-table-column
      v-if="operations.length"
      label="Action">
      <template slot-scope="scope">
        <template v-for="(operation) in operations">
          <el-button v-if="operation.name === 'placeholder'" size="mini" :key="scope.row.id" style="display: none"> </el-button>
          <el-button
            v-if="!operation.name"
            size="mini"
            :type="operation.type"
            :key="scope.row.id"
            @click="handleClickButton(scope.$index, scope.row, operation.eventType)">
            {{operation.label}}
          </el-button>
        </template>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
export default {
  name: "Table",

  props: {
    // 是否显示可选择
    selection: {
      type: Boolean, // String, Number, Boolean, Function, Object, Array
      required: true,
      default: true
    },
    // 表格列
    columns: {
      type: Array,
      required: true,
      default: function() {
        return [];
      }
    },
    // 操作
    operations: {
      type: Array,
      required: false,
      default: function() {
        return [];
      }
    },
    // 表格的数据源
    tableData: {
      type: Array,
      required: false,
      default: function() {
        return [];
      }
    }
  },
  data() {
    return {
      loading: true
    };
  },
  methods: {
    /**
     * 选中事件
     */
    handleSelectionChange(selects) {
      this.$emit("select", selects);
    },

    /**
     * 点击操作列事件
     */
    handleClickButton(index, row, eventType) {
      this.$emit(eventType, { index, row, ref: this });
    }
  }
};
</script>
<style lang="less" scoped>
/* .el-table__body-wrapper {
    overflow: hidden;
  } */
</style>
