<template>
  <div class="login">
    <el-form
      :model="ruleForm"
      :rules="rules"
      status-icon
      ref="ruleForm"
      label-position="left"
      class="login-page">
        <h3 class="title">系统登录</h3>
        <el-form-item label="用户名：" label-width="90px" prop="username">
          <el-input type="text"
            v-model="ruleForm.username"
            auto-complete="off"
            placeholder="请输入用户名"
          ></el-input>
        </el-form-item>
        <el-form-item label="密码：" label-width="90px" prop="password">
          <el-input type="password"
            v-model="ruleForm.password"
            auto-complete="off"
            placeholder="请输入密码"
          ></el-input>
        </el-form-item>
        <!-- <el-checkbox
          v-model="checked"
          class="rememberme"
        >记住密码</el-checkbox> -->
        <el-form-item>
          <el-button type="primary" style="width:100%;" @click="handleSubmit" :loading="logining">登录</el-button>
        </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: 'login',
  components: {

  },
  data() {
    return {
      logining: false,
      ruleForm: {
        username: '',
        password: ''
      },
      rules: {
        username: [{ required: true, message: '用户名不能为空', trigger: 'blur' }],
        password: [{ required: true, message: '密码不能为空', trigger: 'blur' }]
      },
      checked: false
    }
  },
  created() {

  },
  computed: {

  },
  watch: {

  },
  mounted() {

  },
  methods: {
    handleSubmit() {
      setTimeout(() => {
        this.$router.push('/home');
      }, 1000);
    }
  }
}
</script>

<style lang="scss" scoped>
.title {
  text-align: center;
  font-size: 18px;
  font-weight: bold;
  height: 35px;
  line-height: 35px;
  margin-bottom: 25px;
}
.login-page {
  -webkit-border-radius: 5px;
  border-radius: 5px;
  margin: 200px auto;
  width: 350px;
  padding: 35px 35px 15px;
  background: #fff;
  border: 1px solid #eaeaea;
  box-shadow: 0 0 25px #cac6c6;
}
label.el-checkbox.rememberme {
  margin: 0px 0px 15px;
  text-align: left;
}
</style>
