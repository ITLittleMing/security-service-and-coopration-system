<!-- 视图 -->
<template>
  <div class="common-layout">
    <!-- 顶部导航栏 -->
    <el-container>
      <el-header>
        
        <el-menu
          :default-active="activeIndex"
          class="el-menu-demo"
          mode="horizontal"
          :ellipsis="false"
          @select="handleSelect"
        >
          <el-menu-item index="0">LOGO</el-menu-item>
          <div class="flex-grow" />
          <el-menu-item index="1">首页</el-menu-item>
          <el-menu-item index="2"><router-link to="/Production">产品中心</router-link></el-menu-item>
          <el-menu-item index="3">个人中心</el-menu-item>
          <el-menu-item index="4">帮助</el-menu-item>
        </el-menu>
      </el-header>
      <!-- body部分 -->
      <el-main>
        <!-- 图片 -->
        <div class="scrollImage">
          <el-carousel indicator-position="outside">
            <el-carousel-item v-for="item in 4" :key="item">
              <!-- <h3 text="2xl" justify="center">{{ item }}</h3> -->
            </el-carousel-item>
          </el-carousel>
           <!-- 登录框 -->
            <div class="login">
                <p>在此登录</p>
                <el-form ref="info" :model="info" label-width="70px">

                  <el-form-item label="用户名:">
                    <el-input type="text" v-model="info.username" placeholder="Please input USERNAME" />
                  </el-form-item>

                  <el-form-item label="密&nbsp;&nbsp;&nbsp;码:">
                    <el-input type="password" v-model="info.password" placeholder="Please input PASSWORD" />
                  </el-form-item>

                  <el-form-item>
                    <el-button type="primary">登录</el-button>
                    <el-button type="primary">注册</el-button>
                    <el-button type="success">忘记密码？</el-button>
                  </el-form-item>
                
                </el-form>   
            </div>
        </div>

        <!-- 发布方案：暂时的连接 -->
        <div>
          <h3><router-link to="/Release">发布方案</router-link></h3>
        </div>

        <!-- 行业解决方案 -->
        <div>
          <h3>行业解决方案</h3>
        </div>


        <!-- 产品介绍 -->
        <div>
          <h3>产品介绍</h3>
        </div>

        <!-- 使用指引 -->
        <div>
          <h3>使用指引</h3>
        </div>

      </el-main>
      <el-footer>
        <!-- 关于我们 -->
        <div>
          <h3>关于我们</h3>
        </div>
      </el-footer>
    </el-container>
  </div>
</template>

<!-- 样式 -->
<style scoped>
  .flex-grow {
    flex-grow: 1;
  }

  .el-carousel__item h3 {
    display: flex;
    color: #475669;
    opacity: 0.75;
    line-height: 300px;
    margin: 0;
  }

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
    right: 40px;
    top: 10px;

    width: 350px;
    height: 300px;
    background-color:beige;

  }
</style>
<!-- 操作 -->
<script>
  // import { ref } from 'vue';

// import { dataType } from 'element-plus/es/components/table-v2/src/common'

  // const activeIndex = ref('1');
  // const handleSelect = (key: string, keyPath: string[]) => {
  //   console.log(key, keyPath)
  // }

  export default {
    data(){
      return{
        info:{username:"",password:""}
      }
    }
  }
</script>


