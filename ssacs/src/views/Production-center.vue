<template>
<div>
    <el-container>
      <el-header>
        
        <el-menu
          :default-active="activeIndex"
          class="el-menu-demo"
          mode="horizontal"
          :ellipsis="false"
          @select="handleSelect"
        >
          <el-menu-item index="0"><router-link to="/">LOGO</router-link></el-menu-item>
          <div class="flex-grow" />
          <el-menu-item index="1"><router-link to="/">首页</router-link></el-menu-item>
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
                <el-form ref="form" :model="form" label-width="70px">
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
      </el-main>
    </el-container>
</div>
<div>
  <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
  <!-- 这里因为不知道怎么调节标签的长度所以就用了占位符 -->
    <el-tab-pane label="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;发布任务&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" name="first" >
      <el-form ref="release" :model="release" label-width="200px">
        <el-col :span='15'>
        
          <el-form-item label="资源类型:">
            <el-input type="textarea" v-model="release.type" placeholder="please input Resource Type" />
          </el-form-item>

          <el-form-item label="资源摘要:">
            <el-input type="textarea" v-model="release.summary" placeholder="please input Resource Summary" />
          </el-form-item>

          <el-form-item label="详细描述与安全策略:">
            <el-input type="textarea" v-model="release.policy" placeholder="please input Detailed Description and Security Policy" />
          </el-form-item>

          <el-form-item>
            <el-button type="success">发布交易</el-button>
            <el-button type="primary">存入草稿</el-button>
          </el-form-item>
          
        </el-col>
      </el-form>
    </el-tab-pane>
    <el-tab-pane label="&nbsp;&nbsp;&nbsp;&nbsp;承接任务&nbsp;&nbsp;&nbsp;&nbsp;" name="second">承接任务</el-tab-pane>
  </el-tabs>
</div>
</template>

<script>
 export default {
    data() {
      return {
        activeName: 'first',
        info:{username:"",password:""}, //用户名和密码
        release:{type:'',summary:'',policy:''},  //发布任务标签中的信息：资源类型、资源摘要、详细描述与安全策略
      };
    },
    methods: {
      handleClick(tab, event) {
        console.log(tab, event);
      }
    }
  };
</script>

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
  /* .ReleasUndertake{
    position: absolute;
    text-align: center;
    left: 41.5%;
   

  } */
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