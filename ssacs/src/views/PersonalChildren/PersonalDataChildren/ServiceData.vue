<template>
    <div class="serviceContainer">
        <div class="serviceItem">
            <el-descriptions
                title="服务名:HHHHH"
                border="true"
                :column="1"
                size="large"
                :style="blockMargin"
            >
                <el-descriptions-item label="状态" width="300px" >kooriookami</el-descriptions-item>
                <el-descriptions-item label="服务商" width="300px">18100000000</el-descriptions-item>
                <el-descriptions-item label="类型" :span="2" width="300px">Suzhou</el-descriptions-item>
            </el-descriptions>
            <div class="action">
                <el-button type="primary" style="width: 300px;" plain>切换状态</el-button>
                <el-button type="primary" style="width: 300px;" plain>卸载</el-button>
            </div>
        </div>

    </div>
</template>

<style scoped>
    .serviceContainer{
        width: 100%;
        display: grid;
        grid-template-columns: repeat(2, 50%);
        justify-items: center;
    }

    .serviceItem{
        margin-top: 30px;
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