<template>
  <div id="app">
    <div class="search-box">
      <el-form :inline="true" :model="conditons" class="demo-form-inline">
        <el-form-item label="ニックネーム">
          <el-input
            v-model="conditons.roleName"
            placeholder="ニックネームを入力してください"
          ></el-input>
        </el-form-item>
        <el-form-item label="日付">
          <el-date-picker
            v-model="value1"
            type="daterange"
            align="right"
            unlink-panels
            range-separator="to"
            start-placeholder="有効期間開始日"
            end-placeholder="有効期間終了日"
          >
          </el-date-picker>
        </el-form-item>
        <el-form-item label="住所">
          <el-select
            v-model="conditons.title"
            placeholder="都道府県を選択してください"
          >
            <el-option label="东京"></el-option>
            <el-option label="大阪"></el-option>
          </el-select>
        </el-form-item>

        <el-form-item>
          <el-button type="primary" @click="onSubmit">検索</el-button>
          <el-button type="primary" @click="clear">クリア</el-button>
        </el-form-item>
      </el-form>
    </div>
    <div class="user-box">
      <el-table
        ref="userList"
        :data="this.userResult.userList"
        highlight-current-row
        @selection-change="handleSelectionChange"
        :header-cell-class-name="cellClass"
      >
        <el-table-column type="selection" width="45"></el-table-column>
        <el-table-column type="index" label="ID" width="180"> </el-table-column>

        <el-table-column prop="roleName" label="ニックネーム" width="180">
        </el-table-column>

        <el-table-column prop="title" label="住所" width="180">
        </el-table-column>

        <el-table-column prop="tel" label="電話番号" width="180">
        </el-table-column>

        <el-table-column
          prop="validPeriodEnd"
          label="有効期間終了日"
          width="180"
        >
        </el-table-column>
        <el-table-column prop="updateDate" label="登録年月日" width="180">
        </el-table-column>
      </el-table>
    </div>
    <div style="margin-top: 20px">
      <el-button @click="update">更新</el-button>
      <el-button @click="Details">详细</el-button>
      <el-button @click="Signin">新规作成</el-button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value1: "",
      conditons: {
        roleName: " ",
        title: "",
        validPeriodEnd: " ",
        validPeriodStart: " ",
      },
      userResult: {
        userList: [],
        totalCount: "",
      },
    };
  },

  created() {
    this.init();
  },

  methods: {
    init() {
      this.$http.post("/showuser/showuserall", this.conditons).then((res) => {
        console.log(res);
        this.userResult.userList = res.data.data.list;
      });
    },
    // チェックボックスを隠します
    cellClass(row) {
      if (row.columnIndex === 0) {
        return "disabledCheck";
      }
    },

    //複数のボックスでラジオ効果を実現します。
    handleSelectionChange(val) {
      if (val.length > 1) {
        this.$refs.userList.clearSelection(); //前の消します
        this.$refs.userList.toggleRowSelection(val.pop()); //pop：最後に選んだの
      }
    },

    //入力されたキーワードをクリアする。
    clear() {
      this.conditons = {
        roleName: " ",
        title: "",
        validPeriodEnd: " ",
        validPeriodStart: " ",
      };
    },

    onSubmit() {
      this.init(this.conditons);
    },

    update() {
      this.$router.push("/register");
    },

    Details() {
      this.$router.push("/register");
    },
    Signin() {
      this.$router.push("/register");
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