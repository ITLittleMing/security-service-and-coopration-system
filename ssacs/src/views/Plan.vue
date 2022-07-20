<template>
<div>
    <h1 style="text-align:left">发布方案</h1>
    <h2 style="text-align:left"> 问题 </h2>
</div>

<div class="d1">
    <h2>&nbsp;</h2>
    <el-form ref="releases" :model="releases" label-width="300px" id="de">
        <el-col :span='15'>

            <el-form-item label="资源类型:">     
                <el-input type="textarea" v-model="releases.type" placeholder="please input Resource Type" /> 
            </el-form-item>

            <el-form-item label="资源摘要:">
                <el-input type="textarea" v-model="releases.summary" placeholder="please input Resource Summary" />
            </el-form-item>

            <el-form-item label="详细描述与安全策略:">
                <el-input type="textarea" v-model="releases.policy" placeholder="please input Detailed Description and Security Policy" />
            </el-form-item>

            <h2>&nbsp;</h2>

        </el-col>
    </el-form>
</div>
<!-- <div><h3>&nbsp;</h3></div> -->
<div class="d1">
    <h2>&nbsp;</h2>
    <el-form ref="releases" :model="releases" label-width="300px">
        <!-- 调节表单中输入框大小 -->
        <el-col :span='15'>
             <el-form-item label="价格:">
                <el-input type="number" v-model="releases.price" placeholder="please input Price" />
            </el-form-item>

            <el-form-item label="链接:">
                <el-input  v-model="releases.link" clearable placeholder="please input Link"></el-input>
            </el-form-item>

            <el-form-item>
                <el-button type="primary">存入草稿</el-button>
                <el-button type="success">发布交易</el-button>
            </el-form-item>
        </el-col>
    </el-form>
    <h2>&nbsp;</h2>
</div>

</template>

<script>
 export default {
    data() {
      return {
        releases:{type:'',summary:'',policy:'',price:'',link:'',},  //发布任务标签中的信息：资源类型、资源摘要、详细描述与安全策略
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

.d1{
    background-color:rgb(236, 255, 238);
    font-weight:700;
}

</style>