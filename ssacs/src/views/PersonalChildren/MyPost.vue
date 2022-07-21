<template>
    <div>
        <el-menu
            :default-active="activeIndex"
            class="el-menu-demo"
            mode="horizontal"
            @select="handleSelect"
            router="true"
        >
            <el-menu-item index="/page/personalCentor/myPost/myPostUnsolved">未解决</el-menu-item>
            <el-menu-item index="/page/personalCentor/myPost/myPostSolved">已解决</el-menu-item>
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
                activeIndex: "/page/personalCentor/myPost/myPostUnsolved"
            }
        },
        methods: {
            changeActiveIndex(event){
                this.activeIndex = event.index;
            }
        },
    }
</script>
