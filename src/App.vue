<template>
    <div id="app">
        <div class="wrap">
            <div id="nav">
                <b-navbar toggleable="lg" type="dark" variant="secondary" fixed="top">
                    <b-container>
                        <b-navbar-brand href="#/">首页</b-navbar-brand>

                        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

                        <b-collapse id="nav-collapse" is-nav>
                            <b-navbar-nav>
                                <b-nav-item href="#/resume" :class="[$route.path == '/resume'?'active':'']">我的简历</b-nav-item>
                                <b-nav-item href="#/osworks" :class="[$route.path == '/osworks'?'active':'']">开源作品</b-nav-item>
                            </b-navbar-nav>
                            <!-- Right aligned nav items -->
                            <b-navbar-nav class="ml-auto">
                                <b-nav-item href="#/about" :class="[$route.path == '/about'?'active':'']" right>关于本站</b-nav-item>
                            </b-navbar-nav>
                        </b-collapse>
                    </b-container>
                </b-navbar>
            </div>
            <b-container>
                <router-view/>
            </b-container>
        </div>
        <footer class="footer">
            <div class="container">
                <p class="pull-left">{{copyright}}</p>
            </div>
        </footer>
    </div>
</template>

<script>
    export default {
        name: "App",
        data: function () {
            return {
                copyright: "© vuecli3.0 | © vue-bootstrap"
            }
        },
        mounted: function () {
            let _hmt = _hmt || [];
            (function() {
                let hm = document.createElement("script");
                hm.src = "https://hm.baidu.com/hm.js?b5556692099a6b0e1c1ab06d081719aa";
                let s = document.getElementsByTagName("script")[0];
                s.parentNode.insertBefore(hm, s);
            })();
        }
    }
</script>

<style lang="sass">
    html,body,#app
        height: 100%
        /*background: url("~@/assets/bg1.gif") repeat*/

    p
        text-indent: 2em

    .wrap
        min-height: 100%
        height: auto
        margin: 0 auto -60px
        padding: 0 0 60px

    .wrap > .container
        padding: 70px 15px 20px

    .footer
        height: 60px
        border-top: 1px solid #ddd
        padding-top: 20px

    .mt20
        margin-top: 20px

</style>