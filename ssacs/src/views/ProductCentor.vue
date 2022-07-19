<template>
    <div>
        <Login></Login>
        <div class="problem">
            <text>热点问题1</text>
            <text>热点问题2</text>
            <text>热点问题3</text>
            <text>热点问题4</text>
            <text class="more">更多</text>
        </div>

        <hr/>
        <div>
            <el-menu
                :default-active="activeIndex"
                class="el-menu-demo"
                mode="horizontal"
                @select="handleSelect"
                router="true"
            >
                <el-menu-item index="/page/productCentor/postTask" @click="changeActiveIndex">发布任务</el-menu-item>
                <el-menu-item index="/page/productCentor/getTask" @click="changeActiveIndex">承接任务</el-menu-item>
            </el-menu>
        </div>
        <router-view></router-view>
    </div>
</template>

<style scoped>
    .problem{
        width: 100%;
        height: 50px;
        display: flex;
        justify-content: space-around;

    }
    .el-menu-demo{
        display: flex;
        justify-content: space-around;
    }
</style>

<script>
import Login from '@/components/Login.vue';

export default{
    components: { Login },
    data() {
        return {
            avtiveIndex:"/page/productCentor/postTask",
        }
    },
    methods: {
        changeActiveIndex(event){
            this.avtiveIndex = event.index;
        }
    },
}
</script>
