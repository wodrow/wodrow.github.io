<template>
    <div id="app">
        <el-container>
            <el-aside>
                <el-row class="avatar">
                    <el-col :span="24">
                        <img style="width: 100%;" src="./assets/avatar.jpg" />
                    </el-col>
                </el-row>
                <el-row class="menu">
                    <el-col :span="24">
                        <el-menu class="el-menu-vertical" @open="handleOpen" @close="handleClose" router="true" :default-active="activeMenuIndex">
                            <el-menu-item v-for="m in menus" :key="m.index" :index="m.index" :route="m.route">
                                <i :class="m.icon"></i>
                                <span slot="title">{{m.title}}</span>
                            </el-menu-item>
                        </el-menu>
                    </el-col>
                </el-row>
            </el-aside>
            <el-main>
                <router-view/>
            </el-main>
        </el-container>
    </div>
</template>

<script>
    import store from './store';
    import 'jquery';
    import 'bootstrap';
    export default {
        data() {
            return {
                activeMenuIndex: store.state.activeMenuIndex,
                menus: [
                    {
                        index: "1",
                        route: "/",
                        title: "主页",
                        icon: "el-icon-house"
                    },
                    {
                        index: "2",
                        route: "/resume",
                        title: "简历",
                        icon: "el-icon-tickets"
                    }
                ]
            }
        }
    }
</script>

<style>
    html,body,#app,.el-container {
        height: 100%;
    }
    .el-aside {}
    .el-main {
        background-color: #E9EEF3;
    }

    .avatar {
        text-align: center;
    }
</style>
