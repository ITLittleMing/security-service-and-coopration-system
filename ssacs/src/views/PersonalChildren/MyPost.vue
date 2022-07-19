<template>
    <div>
        <el-menu
            :default-active="activeIndex"
            class="el-menu-demo"
            mode="horizontal"
            @select="handleSelect"
            router="true"
        >
            <el-menu-item index="/page/personalCentor/myPost/unsolved">未解决</el-menu-item>
            <el-menu-item index="/page/personalCentor/myPost/solved">已解决</el-menu-item>
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
                activeIndex: "/page/personalCentor/myPost/unsolved"
            }
        },
        methods: {
            changeActiveIndex(event){
                this.activeIndex = event.index;
            }
        },
    }
</script>
