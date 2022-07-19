<template>
    <div class="container">
        <h3>已选择方案</h3>
        <div class="serviceContainer">
            <div class="serviceItem">
                <el-descriptions
                    title="服务名:HHHHH"
                    border="true"
                    :column="1"
                    size="large"
                    :style="blockMargin"
                >
                    <el-descriptions-item label="评价" width="300px" >kooriookami</el-descriptions-item>
                    <el-descriptions-item label="服务商" width="300px">18100000000</el-descriptions-item>
                    <el-descriptions-item label="详细信息" :span="2" width="300px">Suzhou</el-descriptions-item>
                </el-descriptions>
                <div class="action">
                    <el-button type="primary" style="width: 300px;" plain>服务部署</el-button>
                    <el-button type="primary" style="width: 300px;" plain>服务评价</el-button>
                </div>
            </div>
        </div>

        <el-divider />

        <h3>未选择方案</h3>
        <div class="serviceContainer">
            <div class="serviceItem">
                <el-descriptions
                    title="服务名:HHHHH"
                    border="true"
                    :column="1"
                    size="large"
                    :style="blockMargin"
                >
                    <el-descriptions-item label="评价" width="300px" >kooriookami</el-descriptions-item>
                    <el-descriptions-item label="服务商" width="300px">18100000000</el-descriptions-item>
                    <el-descriptions-item label="详细信息" :span="2" width="300px">Suzhou</el-descriptions-item>
                </el-descriptions>
                <div class="action">
                    <el-button type="primary" style="width: 300px;" plain>选择服务</el-button>
                    <el-button type="primary" style="width: 300px;" plain>标记服务</el-button>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>

    .container h3{
        margin-left: 120px;
        text-align: left;
    }
    .serviceContainer{
        width: 100%;
        display: grid;
        grid-template-columns: repeat(2, 50%);
        justify-items: center;
    }

    .serviceItem{
        margin-bottom: 30px;
        width: 70%;
        display: flex;
        justify-content: center;
        flex-direction: column;
    }

    .action{
        margin-top: 20px;
        display: flex;
        justify-content: space-around;
    }

</style>

<script>
</script>
