<template>
    <div>
        <el-menu
            :default-active="activeIndex"
            class="el-menu-demo"
            mode="horizontal"
            @select="handleSelect"
            router="true"
        >
            <el-menu-item index="/page/personalCentor/myPostUnsolved" @click="changeActiveIndex">我的发布</el-menu-item>
            <el-menu-item index="/page/personalCentor/myTask/myTaskUnsolved" @click="changeActiveIndex">我的任务</el-menu-item>
            <el-menu-item index="/page/personalCentor/personalData/serviceData" @click="changeActiveIndex">个人数据</el-menu-item>
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
            activeIndex: "/page/personalCentor/myPostUnsolved",
        }
    },
    methods: {
        changeActiveIndex(event){
            this.activeIndex = event.index;
        }
    },
}

</script>

