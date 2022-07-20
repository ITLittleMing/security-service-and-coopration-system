<template>
    <div>
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

<style>

</style>