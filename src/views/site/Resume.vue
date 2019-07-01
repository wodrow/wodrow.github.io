<template>
    <div class="resume">
        <b-row>
            <b-col md="4">
                <b-card bg-variant="secondary" text-variant="white">
                    <b-img rounded="circle" fluid src="~@/assets/avatar.jpg"></b-img>
                </b-card>
                <b-card bg-variant="default" header="个人信息" :class="['mt20']">
                    <b-row v-for="(o, i) in this.profiles" :key="i">
                        <b-col cols="4">
                            <span class="text-success">{{o.k}}</span>
                        </b-col>
                        <b-col cols="8" v-html="o.v"></b-col>
                    </b-row>
                </b-card>
                <b-card bg-variant="default" header="技能" :class="['mt20']">
                    <b-row v-for="(o, i) in this.skills" :key="i">
                        <b-col cols="4">
                            <span class="text-success">{{o.name}}</span>
                        </b-col>
                        <b-col cols="8">
                            <div class="progress">
                                <div class="progress-bar" role="progressbar" :style="{'width':o.percent}"
                                     :aria-valuenow="o.len" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                        </b-col>
                    </b-row>
                </b-card>
                <b-card bg-variant="default" :class="['mt20']">
                    <div class="amap-page-container">
                        <div :style="{width:'100%',height:'300px'}">
                            <el-amap vid="amap" :plugin="plugin" class="amap-demo" :center="center">
                                <el-amap-marker vid="component-marker" :position="position"></el-amap-marker>
                            </el-amap>
                        </div>
                    </div>
                </b-card>
            </b-col>
            <b-col md="8">
                <b-card bg-variant="default" header="工作经历">
                    <ul class="timeline">
                        <li v-for="(o, i) in companys" :key="i">
                            <div class="timeline-badge"><font-awesome-icon icon="rocket"></font-awesome-icon></div>
                            <div class="timeline-panel">
                                <div class="timeline-heading">
                                    <h4 class="timeline-title">{{o.name}}</h4>
                                    <p><small class="text-muted"><font-awesome-icon icon="time"></font-awesome-icon> {{o.intime}}</small></p>
                                </div>
                                <div class="timeline-body" v-html="o.desc"></div>
                            </div>
                        </li>
                    </ul>
                </b-card>
                <b-card bg-variant="default" header="项目经验" :class="['mt20']">
                    <p>至今已开发近1000个接口，示例:<a href="http://api.qiche100.com/route/api" target="_blank">易商金融接口文档</a></p>
                    <p>对接过多种第三方接口</p>
                    <p>做过全栈开发，并开发维护过多个企业站以及商城，示例：<a href="https://www.nongyao001.com/" target="_blank">农药第一网</a></p>
                </b-card>
                <b-card bg-variant="default" header="个人优势" :class="['mt20']">
                    <p>多年开发经验，技术面广</p>
                    <p>能够熟练地在linux下开发</p>
                    <p>能够够使用git等版本管理工具进行合作开发</p>
                    <p>熟练掌握各种设计模式，能写出功能稳定，扩展性强，维护方便的代码</p>
                </b-card>
            </b-col>
        </b-row>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                profiles: [
                    {k: "姓名", v: "杨先生"},
                    {k: "性别", v: "男"},
                    {k: "年龄", v: "29"},
                    {k: "最高学历", v: "本科"},
                    {k: "QQ", v: "1173957281"},
                    {k: "微信号", v: "wodrow"},
                    {k: "邮箱", v: "1173957281@qq.com"},
                    {k: "手机号", v: "17091551612"},
                    {k: "github", v: "<a href=\"https://github.com/wodrow\" target=\"_blank\">wodrow</a>"},
                    {k: "码云", v: "<a href=\"https://gitee.com/wodrow\" target=\"_blank\">wodrow</a>"},
                    {k: "个人主页", v: "<a href=\"https://wodrow.github.io/\" target=\"_blank\">wodrow</a>"},
                    {k: "yiichina", v: "<a href=\"https://www.yiichina.com/user/30998\" target=\"_blank\">wodrow</a>"}
                ],
                skills: [
                    {name: "英文阅读", len: "45", percent: ""},
                    {name: "git", len: "60", percent: ""},
                    {name: "svn", len: "40", percent: ""},
                    {name: "html", len: "60", percent: ""},
                    {name: "css", len: "30", percent: ""},
                    {name: "javascript", len: "20", percent: ""},
                    {name: "jquery", len: "70", percent: ""},
                    {name: "vue", len: "50", percent: ""},
                    {name: "node", len: "40", percent: ""},
                    {name: "bootstrap", len: "60", percent: ""},
                    {name: "vuecli", len: "70", percent: ""},
                    {name: "php", len: "85", percent: ""},
                    {name: "linux", len: "75", percent: ""},
                    {name: "mysql", len: "75", percent: ""},
                    {name: "thinkphp", len: "60", percent: ""},
                    {name: "yii2", len: "90", percent: ""}
                ],
                companys: [
                    {name: "郑州大学", intime: "2014-05-01", desc: "<p>毕业设计写了一个简易的二手书交易系统</p>"},
                    {name: "河南梧桐盛嘉投资管理有限公司", intime: "2014-11-15", desc: "<p>使用thinkphp3.2开发了一个公司站点</p><p>工作描述：</p><p>1.负责公司网站开发。 服务器配置管理维护 svn版本控制团队工作把控 数据库设计与维护</p><p>2.负责公司对外接口系统开发。</p><p>3.公司各部门之间的技术沟通、协调。</p><p>4.把握部门工作进度，定期汇报，改善部门工作绩效。</p>"},
                    {name: "河南振农科技有限公司", intime: "2015-12-01", desc: "<p>维护公司商城项目，开发新功能</p><p>工作描述：</p><p>1.制定相关规则及编码规范，负责公司网站功能的开发及维护，对以前其他程序员的代码和开发的功能进行迭代开发和修改，以减少维护压力。</p><p>2.负责项目github的代码版本控制，使服务器与本地代码保持同步，减少代码上传工作量。</p><p>3.对服务器图片和数据库进行备份。</p><p>4.对数据库进行优化和维护。</p><p>5.对手机站及微信站进行开发与维护，解决一些手机app使用的一些问题。</p><p>6.负责公司对外接口系统开发，参与农医问药手机app的混合开发。</p><p>7.使用thinkphp开发数据报表系统和农医问药后台。</p><p>7.公司各部门之间的技术沟通、协调，参与一些公司会议，制定相关工作计划，分配工作任务，配合其他部门进行工作。</p><p>8.把握部门工作进度，定期汇报(使用worktile及钉钉)，改善部门工作绩效。</p>"},
                    {name: "歪脸网", intime: "2016-11-04", desc: "<p>接口开发，因个人原因未工作四个月离职</p>"},
                    {name: "易商金融", intime: "2017-03-23", desc: "<p>后公司改名为易商新程</p><p>负责接口开发，crm系统维护，脚本编写</p>"}
                ],
                plugin: ['AMap.Geolocation'],
                center: [120.407507, 30.121258],
                position: [120.407507, 30.121258]
            }
        },
        mounted() {
            window.document.title = "个人简历";
            this.skills.forEach(function (v) {
                v.percent = v.len + '%';
            })
        }
    }
</script>

<style lang="sass">
    .mt20
        margin-top: 20px
        
    .timeline 
        list-style: none
        padding: 20px 0 20px
        position: relative

    .timeline:before 
        top: 0
        bottom: 0
        position: absolute
        content: " "
        width: 3px
        background-color: #eeeeee
        left: 50%
        margin-left: -1.5px

    .timeline > li 
        margin-bottom: 20px
        position: relative

    .timeline > li:before,
    .timeline > li:after 
        content: " "
        display: table

    .timeline > li:after 
        clear: both

    .timeline > li:before,
    .timeline > li:after 
        content: " "
        display: table

    .timeline > li:after 
        clear: both

    .timeline > li > .timeline-panel 
        width: 46%
        float: left
        border: 1px solid #d4d4d4
        border-radius: 2px
        padding: 20px
        position: relative
        -webkit-box-shadow: 0 1px 6px rgba(0, 0, 0, 0.175)
        box-shadow: 0 1px 6px rgba(0, 0, 0, 0.175)

    .timeline > li > .timeline-panel:before 
        position: absolute
        top: 26px
        right: -15px
        display: inline-block
        border-top: 15px solid transparent
        border-left: 15px solid #ccc
        border-right: 0 solid #ccc
        border-bottom: 15px solid transparent
        content: " "

    .timeline > li > .timeline-panel:after 
        position: absolute
        top: 27px
        right: -14px
        display: inline-block
        border-top: 14px solid transparent
        border-left: 14px solid #fff
        border-right: 0 solid #fff
        border-bottom: 14px solid transparent
        content: " "

    .timeline > li > .timeline-badge 
        color: #fff
        width: 50px
        height: 50px
        line-height: 50px
        font-size: 1.4em
        text-align: center
        position: absolute
        top: 16px
        left: 50%
        margin-left: -25px
        background-color: #999999
        z-index: 100
        border-top-right-radius: 50%
        border-top-left-radius: 50%
        border-bottom-right-radius: 50%
        border-bottom-left-radius: 50%

    .timeline > li.timeline-inverted > .timeline-panel 
        float: right

    .timeline > li.timeline-inverted > .timeline-panel:before 
        border-left-width: 0
        border-right-width: 15px
        left: -15px
        right: auto

    .timeline > li.timeline-inverted > .timeline-panel:after 
        border-left-width: 0
        border-right-width: 14px
        left: -14px
        right: auto

    .timeline-badge.primary 
        background-color: #2e6da4 !important
    

    .timeline-badge.success 
        background-color: #3f903f !important

    .timeline-badge.warning 
        background-color: #f0ad4e !important

    .timeline-badge.danger 
        background-color: #d9534f !important

    .timeline-badge.info 
        background-color: #5bc0de !important

    .timeline-title 
        margin-top: 0
        color: inherit

    .timeline-body > p,
    .timeline-body > ul 
        margin-bottom: 0

    .timeline-body > p + p 
        margin-top: 5px


    ul.timeline:before 
        left: 40px

    ul.timeline > li > .timeline-panel 
        width: calc(100% - 90px)
        width: -moz-calc(100% - 90px)
        width: -webkit-calc(100% - 90px)

    ul.timeline > li > .timeline-badge 
        left: 15px
        margin-left: 0
        top: 16px

    ul.timeline > li > .timeline-panel 
        float: right

    ul.timeline > li > .timeline-panel:before 
        border-left-width: 0
        border-right-width: 15px
        left: -15px
        right: auto

    ul.timeline > li > .timeline-panel:after 
        border-left-width: 0
        border-right-width: 14px
        left: -14px
        right: auto

</style>