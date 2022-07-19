<!-- 视图 -->
<template>
    <div>
      <el-main>
        <Login></Login>

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
      </el-footer>
  </div>
</template>

<!-- 样式 -->
<style scoped>
</style>
<!-- 操作 -->
<script>
  import Login from '../components/Login.vue';

  export default{
    components:{
      Login
    }
    
  };
</script>


