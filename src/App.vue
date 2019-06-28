<template>
    <div id="app">
        <div id="nav">
            <b-navbar toggleable="lg" type="dark" variant="info">
                <div class="container">
                    <b-navbar-brand href="#/">网站首页</b-navbar-brand>

                    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

                    <b-collapse id="nav-collapse" is-nav>
                        <!-- Right aligned nav items -->
                        <b-navbar-nav class="ml-auto">
                            <b-nav-item href="#/about" right>关于本站</b-nav-item>
                        </b-navbar-nav>
                    </b-collapse>
                </div>
            </b-navbar>
        </div>
        <div class="container">
            <router-view/>
        </div>
    </div>
</template>

<stype>

</stype>