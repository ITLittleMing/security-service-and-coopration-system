<template>
    <div>
        <el-menu
            :default-active="activeIndex"
            class="el-menu-demo"
            mode="horizontal"
            @select="handleSelect"
            router="true"
        >
            <el-menu-item index="/page/personalCentor/personalData/serviceData">服务数据</el-menu-item>
            <el-menu-item index="/page/personalCentor/personalData/userData">用户数据</el-menu-item>
        </el-menu>
        <router-view></router-view>
    </div>
</template>

<style scoped>
    .el-menu-demo{
        display: flex;
        justify-content: space-around;
    }
</style>

<script>
    export default{
        data() {
            return {
                activeIndex:"/page/personalCentor/personalData/serviceData"
            }
        },
        methods: {
            changeActiveIndex(event){
                this.activeIndex = event.index;
            }
        },
    }
</script>
