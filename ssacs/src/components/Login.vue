<template>
    <!-- 图片 -->
    <div class="scrollImage">
        <el-carousel indicator-position="outside">
            <el-carousel-item v-for="item in 4" :key="item">
            </el-carousel-item>
        </el-carousel>
        <!-- 登录框 -->
        <div class="login">
            <el-button type="primary">登录</el-button>
            <div class="Input">
              <el-button type="primary">账号</el-button>
              <el-input v-model="input" placeholder="Please input" />
            </div>
            
            <div class="Input">
              <el-button type="primary">密码</el-button>
              <el-input v-model="input" placeholder="Please input" />
            </div>
            <div>
              <el-button type="primary">注册</el-button>
              <el-button type="success">忘记密码</el-button>
            </div>
        </div>
    </div>
</template>

<style scoped>
     .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n + 1) {
    background-color: #d3dce6;
  }

  .scrollImage{
    position: relative;
  }

  .login{

    position: absolute;
    right: 100px;
    top: 10px;

    width: 300px;
    height: 300px;
    background-color: red;

  }

  .Input{
    display: flex;
    justify-content: space-around;
  }
</style>

<script>
    export default{
    }
</script>
