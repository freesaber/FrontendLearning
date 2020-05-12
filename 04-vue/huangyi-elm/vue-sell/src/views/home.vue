<template>
  <div class="homepage">
    <div class="menuWrapper">
      <el-menu
        default-active="1-1"
        class="el-menu-vertical-demo"
        @open="handleOpen"
        @close="handleClose"
        :default-openeds="openeds"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b">
        <el-submenu index="1">
          <template slot="title">
            <i class="el-icon-location"></i>
            <span>导航一</span>
          </template>
          <el-menu-item-group>
            <template slot="title">分组一</template>
            <el-menu-item index="1-1">选项1</el-menu-item>
            <el-menu-item index="1-2">选项2</el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group title="分组2">
            <el-menu-item index="1-3">选项3</el-menu-item>
          </el-menu-item-group>
          <el-submenu index="1-4">
            <template slot="title">选项4</template>
            <el-menu-item index="1-4-1">选项1</el-menu-item>
          </el-submenu>
        </el-submenu>
        <el-menu-item index="2">
          <i class="el-icon-menu"></i>
          <span slot="title">导航二</span>
        </el-menu-item>
        <el-menu-item index="3">
          <i class="el-icon-setting"></i>
          <span slot="title">导航三</span>
        </el-menu-item>
      </el-menu>
    </div>
    <div class="contentWrapper">
      <div class="header">
        <div class="user">admin</div>
      </div>
      <div class="content">
        <el-table
          ref="multipleTable"
          :data="tableData"
          tooltip-effect="dark"
          style="width: 100%"
          height="400"
          border
          @selection-change="handleSelectionChange">
          <el-table-column
            type="selection"
            width="55">
          </el-table-column>
          <el-table-column
            prop="UserName"
            label="用户名">
          </el-table-column>
          <el-table-column
            prop="DisplayName"
            label="姓名">
          </el-table-column>
          <el-table-column
            prop="EMail"
            label="邮箱">
          </el-table-column>
          <el-table-column
            prop="StateText"
            label="状态">
            <template slot-scope="scope">
              <el-tag
                :type="scope.row.State === 1 ? 'primary' : 'warning'"
                close-transition>
                {{scope.row.StateText}}
              </el-tag>
            </template>
          </el-table-column>
        </el-table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'homepage',
  components: {

  },
  data() {
    return {
      openeds: [0, 1, 2],
      tableData: [],
      multipleSelection: []
    }
  },
  created() {

  },
  computed: {

  },
  watch: {

  },
  mounted() {
    this.getUserData()
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    getUserData() {
      this.axios.get('/api/user/getlist').then((response) => {
        var res = response.data;
        if (res.Ok) {
          this.tableData = res.Content
        } else {
          this.$message.error('获取用户数据失败');
        }
      })
    },
    handleSelectionChange(val) {
      this.multipleSelection = val;
    }
  }
}
</script>

<style lang="scss" scoped>
  .homepage{
    display: flex;
    height: 100%;
  }
  .menuWrapper{
    width: 250px;
    background: rgb(84, 92, 100);
    .el-menu{
      border-right: none;
    }
  }
  .contentWrapper{
    flex: 1;
    background: #f0f2f5;
    .header{
      background: #fff;
      height: 35px;
      padding: 5px 10px;
      text-align: center;
      font-size: 15px;
      position: relative;
      .user{
        position: absolute;
        right: 30px;
        top: 15px;
      }
    }
    .content{
      background: #fff;
      margin: 15px;
      border: 1px solid #e8e8e8;
      padding: 75px;
    }
  }
</style>
