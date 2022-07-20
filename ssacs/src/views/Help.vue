<template>
    <div>
        <el-menu
            :default-active="activeIndex"
            class="el-menu-demo"
            mode="horizontal"
            @select="handleSelect"
            router="true"
        >
            <el-menu-item index="/page/help/details" @click="changeActiveIndex">区块链详情</el-menu-item>
            <el-menu-item index="/page/help/Q&A" @click="changeActiveIndex">Q&A</el-menu-item>
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
            activeIndex: "/page/help/details",
        }
    },
    methods: {
        changeActiveIndex(event){
            this.activeIndex = event.index;
        }
    },
}

</script>