<template>
  <div class="login_container">
    <el-row>
      <el-col :span="12" :xs="0"></el-col>
      <el-col :span="12" :xs="24">
        <!-- 登录的表单 -->
        <el-form class="login_form" :model="loginForm" ref="loginForms">
          <div class="logo">
            <SvgIcon name="logo" width="80px" height="80px"></SvgIcon>
            <h2>Nuturbo零代码平台</h2>
          </div>
          <el-form-item prop="username">
            <!-- 如果不绑定数据的话，无法输入 -->
            <el-input
              :prefix-icon="User"
              v-model="loginForm.username"
            ></el-input>
          </el-form-item>
          <el-form-item prop="password">
            <el-input
              type="password"
              :prefix-icon="Lock"
              v-model="loginForm.password"
              show-password
            ></el-input>
          </el-form-item>
          <el-form-item>
            <el-button
              class="login_btn"
              type="primary"
              size="default"
              @click="login"
              >登录</el-button
            >
          </el-form-item>
        </el-form>
      </el-col>
    </el-row>
  </div>
</template>

<script setup lang="ts">
import SvgIcon from "@/components/icon/SvgIcon.vue";
import { User, Lock } from "@element-plus/icons-vue";
import { reactive } from "vue";
import  userStore  from "@/stores/user";

let loginForm = reactive({ username: "", password: "" });

function login() {
  userStore().doLogin(loginForm);
}
</script>

<style scoped lang="scss">
//:deep 可以避免scoped的影响
// :deep(.el-form-item__label) {
//   color: aqua;
// }

.login_container {
  width: 100%;
  height: 100vh;
  background: url("@/assets/images/background.jpg") no-repeat;
  background-size: cover; //cover是让图片铺满整个容器

  .login_form {
    position: relative;
    width: 40%;
    top: 25vh; //vh是视口高度的百分比，需要position: relative
    left: 12vw;
    background: url("@/assets/images/login_form.png") no-repeat;
    background-size: cover;
    padding: 40px;

    .logo {
      padding-bottom: 20px;
      //水平居中
      text-align: center;
    }

    h1 {
      color: white;
      font-size: 40px;
    }

    h2 {
      font-size: 20px;
      color: white;
      margin: 20px 0px;
    }

    .login_btn {
      width: 100%;
    }
  }
}
</style>
@/stores/user
