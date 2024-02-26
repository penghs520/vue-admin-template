<template>
  <div class="login_container">
    <el-row>
      <!-- xs表示当屏幕宽度小于 768px 时,此时显式0个栅格,也就是不显式左侧布局,右侧占满 -->
      <el-col :span="12" :xs="0"></el-col>
      <el-col :span="12" :xs="24">
        <!-- 登录的表单 -->
        <el-form class="login_form" ref="loginForms" label-width="auto" label-position="top">
          <div class="logo">
            <SvgIcon name="logo" width="80px" height="80px"></SvgIcon>
            <h2>Nuturbo后台管理</h2>
          </div>
          <el-form-item prop="username">
            <el-input :prefix-icon="User" v-model="loginForms.username" placeholder="请输入手机号/邮箱/用户名"></el-input>
          </el-form-item>
          <el-form-item prop="password">
            <el-input :prefix-icon="Lock" type="password" v-model="loginForms.password" show-password placeholder="请输入密码"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button class="login_btn" type="primary" size="default">登录</el-button>
          </el-form-item>
        </el-form>
      </el-col>
    </el-row>
  </div>
</template>
  

<script setup lang='ts'>
import SvgIcon from '@/components/icon/SvgIcon.vue';
import { User,Lock } from '@element-plus/icons-vue';
import { reactive } from 'vue';

let loginForms = reactive({username:'',password:''})


</script>

<style scoped lang="scss">

.login_container {
  width: 100%;
  height: 100vh;
  //background: url('@/assets/images/background.jpg') no-repeat;
  background-size: cover; //cover是让图片铺满整个容器

  .login_form {
    position: relative;
    width: 40%;
    top: 25vh; //vh是视口高度的百分比，需要position: relative
    left: 12vw;
    //background: url("@/assets/images/login_form.png") no-repeat;
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