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
            router="true"
            >

            <el-menu-item index="/page/home">LOGO</el-menu-item>
            <div class="flex-grow" />

            <el-menu-item index="/page/home" @click="changeActiveIndex">首页</el-menu-item>

            <el-menu-item index="/page/productCentor" @click="changeActiveIndex">产品中心</el-menu-item>

            <el-menu-item index="/page/personalCentor" @click="changeActiveIndex">个人中心</el-menu-item>
            <el-menu-item index="/page/help/details" @click="changeActiveIndex">帮助</el-menu-item>
            </el-menu>
        </el-header>
      
        <!-- body部分 -->

        <router-view></router-view>
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
</style>
<!-- 操作 -->
<script>
  export default{
    data() {
      return {
        activeIndex : "/page/home",
      }
    },
    methods: {
      changeActiveIndex(event){
        this.activeIndex = event.index;
        console.log(event.index);
      }
    },
    
  };
</script>