<template>
  <div id="app">
    <div class="search-box">
      <el-form :inline="true" :model="formInline" class="demo-form-inline">
        <el-form-item label="id">
          <el-input v-model="formInline.user" placeholder="请输入id"></el-input>
        </el-form-item>
        <el-form-item label="昵称">
          <el-input
            v-model="formInline.user"
            placeholder="请输入昵称"
          ></el-input>
        </el-form-item>
        <el-form-item label="地址">
          <el-select v-model="formInline.region" placeholder="选择地址">
            <el-option label="区域一" value="大阪"></el-option>
            <el-option label="区域二" value="东京"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">查询</el-button>
        </el-form-item>
      </el-form>
      <el-date-picker
        v-model="value2"
        type="daterange"
        align="right"
        unlink-panels
        range-separator="至"
        start-placeholder="开始日期"
        end-placeholder="结束日期"
        :picker-options="pickerOptions"
      >
      </el-date-picker>
    </div>
    <div class="user-box">
      <el-table
        ref="singleTable"
        :data="tableData"
        highlight-current-row
        @select="handleSelectionChange"
        :header-cell-class-name="cellClass"
      >
        <el-table-column type="selection" width="45"></el-table-column>
        <el-table-column prop="name" label="讲师名称" width="180">
        </el-table-column>
        <el-table-column prop="address" label="讲师名称" width="180">
        </el-table-column>
        <el-table-column prop="phone" label="讲师名称" width="180">
        </el-table-column>
        <el-table-column prop="enddate" label="讲师名称" width="180">
        </el-table-column>
        <el-table-column prop="logindate" label="讲师名称" width="180">
        </el-table-column>
      </el-table>
    </div>
    <div style="margin-top: 20px">
      <el-button @click="1">更新</el-button>
      <el-button @click="1">详细</el-button>
      <el-button @click="1">新规作成</el-button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      formInline: {
        user: "",
        region: "",
      },
      tableData: [
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
          phone: "95+959",
          enddate: "45646",
          logindate: "56464",
        },
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
          phone: "95+959",
          enddate: "45646",
          logindate: "56464",
        },
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
          phone: "95+959",
          enddate: "45646",
          logindate: "56464",
        },
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
          phone: "95+959",
          enddate: "45646",
          logindate: "56464",
        },
      ],
    };
  },
  methods: {
    cellClass(row) {
      if (row.columnIndex === 0) {
        return "disabledCheck";
      }
    },
    handleSelectionChange(val) {
      // if (val.length > 1) {
      //   this.$refs.zdxxTab.clearSelection();
      //   this.$refs.zdxxTab.toggleRowSelection(val[val.length - 1]);
      // }
      // this.multipleSelection = val[val.length - 1];
      // this.tableList.records.forEach((item, index) => {
      //   if (item.id == this.selectProtocolId) {
      //     this.$nextTick(() => {
      //       this.$refs.myTable.toggleRowSelection(item);
      //     });
      //   }
      // });
    },

    onSubmit() {
      console.log("submit!");
    },
  },
};
</script>

<style scoped>
::v-deep .el-table .disabledCheck .cell .el-checkbox__inner {
  display: none;
}

/* ::v-deep .el-table .disabledCheck .cell::before {
  content: "";
  text-align: center;
  line-height: 37px;
} */
</style>