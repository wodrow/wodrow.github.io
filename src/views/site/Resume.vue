<template>
    <div class="resume">
        <div class="row">
            <div class="col-md-4">
                <div class="card">
                    <div class="card-header">个人信息</div>
                    <div class="card-body">
                        <div class="row" v-for="p in this.profiles" :key="p">
                            <div class="col-sm-4">
                                <span class="text-muted">{{p.k}}</span>
                            </div>
                            <div class="col-sm-8" v-html="p.v"></div>
                        </div>
                    </div>
                </div>
                <div class="card" style="margin-top: 20px;">
                    <div class="card-header">技能</div>
                    <div class="card-body">
                        <div class="row" v-for="s in this.skills" :key="s">
                            <div class="col-sm-4">
                                <span class="text-muted">{{s.name}}</span>
                            </div>
                            <div class="col-sm-8">
                                <div class="progress">
                                    <div class="progress-bar" role="progressbar" :style="{'width':s.percent}" :aria-valuenow="s.len" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="card" style="margin-top: 20px;">
                    <div class="card-body">
                        <div class="amap-page-container">
                            <div :style="{width:'100%',height:'300px'}">
                                <el-amap vid="amap" :plugin="plugin" class="amap-demo" :center="center">
                                    <el-amap-marker vid="component-marker" :position="position"></el-amap-marker>
                                </el-amap>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-md-8">
                <div class="card">
                    <div class="card card-header">工作经历</div>
                    <div class="card card-body">
                        <div class="timeline">
                            <el-timeline>
                                <el-timeline-item v-for="c in this.companys" :key="c" :timestamp="c.intime" placement="top">
                                    <el-card>
                                        <h4 v-html="c.name"></h4>
                                        <div v-html="c.desc"></div>
                                    </el-card>
                                </el-timeline-item>
                            </el-timeline>
                        </div>
                    </div>
                </div>
                <div class="card" style="margin-top: 20px">
                    <div class="card card-header">项目经验</div>
                    <div class="card card-body">
                        <p>至今已开发近1000个接口，示例:<a href="http://api.qiche100.com/route/api" target="_blank">易商金融接口文档</a></p>
                        <p>对接过多种第三方接口</p>
                        <p>做过全栈开发，并开发维护过多个企业站以及商城，示例：<a href="https://www.nongyao001.com/" target="_blank">农药第一网</a></p>
                    </div>
                </div>
                <div class="card" style="margin-top: 20px;">
                    <div class="card-header">个人优势</div>
                    <div class="card-body">
                        <p>多年开发经验，技术面广</p>
                        <p>能够熟练地在linux下开发</p>
                        <p>能够够使用git等版本管理工具进行合作开发</p>
                        <p>熟练掌握各种设计模式，能写出功能稳定，扩展性强，维护方便的代码</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                profiles: [
                    {k:"姓名", v:"杨先生"},
                    {k:"性别", v:"男"},
                    {k:"年龄", v:"29"},
                    {k:"最高学历", v:"本科"},
                    {k:"QQ", v:"1173957281"},
                    {k:"微信号", v:"wodrow"},
                    {k:"邮箱", v:"1173957281@qq.com"},
                    {k:"手机号", v:"17091551612"},
                    {k:"github", v:'<a href="https://github.com/wodrow" target="_blank">wodrow</a>'},
                    {k:"码云", v:'<a href="https://gitee.com/wodrow" target="_blank">wodrow</a>'},
                    {k:"个人主页", v:'<a href="https://wodrow.github.io/" target="_blank">wodrow</a>'},
                    {k:"yiichina", v:'<a href="https://www.yiichina.com/user/30998" target="_blank">wodrow</a>'}
                ],
                skills: [
                    {name:"英文阅读", len:"45", percent: ""},
                    {name:"git", len:"60", percent: ""},
                    {name:"svn", len:"40", percent: ""},
                    {name:"html", len:"60", percent: ""},
                    {name:"css", len:"30", percent: ""},
                    {name:"javascript", len:"20", percent: ""},
                    {name:"jquery", len:"70", percent: ""},
                    {name:"vue", len:"50", percent: ""},
                    {name:"node", len:"40", percent: ""},
                    {name:"bootstrap", len:"60", percent: ""},
                    {name:"vuecli", len:"70", percent: ""},
                    {name:"php", len:"85", percent: ""},
                    {name:"linux", len:"75", percent: ""},
                    {name:"mysql", len:"75", percent: ""},
                    {name:"thinkphp", len:"60", percent: ""},
                    {name:"yii2", len:"90", percent: ""}
                ],
                companys: [
                    {name:"郑州大学", intime:"2014-05-01", desc:"毕业设计写了一个简易的二手书交易系统"},
                    {name:"河南梧桐盛嘉投资管理有限公司", intime:"2014-11-15", desc:"使用thinkphp3.2开发了一个公司站点"},
                    {name:"河南振农科技有限公司", intime:"2015-12-01", desc:"维护公司商城项目，开发新功能"},
                    {name:"歪脸网", intime:"2016-11-04", desc:"接口开发，因个人原因未工作四个月离职"},
                    {name:"易商金融", intime:"2017-03-23", desc:"后公司改名为易商新程，负责接口开发，crm系统维护，脚本编写"}
                ],
                center: [120.407507,30.121258],
                position: [120.407507,30.121258]
            }
        },
        mounted() {
            this.skills.forEach(function (v) {
                v.percent = v.len + '%';
            })
        }
    }
</script>

<style>
    ul.timeline {
        list-style-type: none;
        position: relative;
    }
    ul.timeline:before {
        content: ' ';
        background: #d4d9df;
        display: inline-block;
        position: absolute;
        left: 29px;
        width: 2px;
        height: 100%;
        z-index: 400;
    }
    ul.timeline > li {
        margin: 20px 0;
        padding-left: 20px;
    }
    ul.timeline > li:before {
        content: ' ';
        background: white;
        display: inline-block;
        position: absolute;
        border-radius: 50%;
        border: 3px solid #22c0e8;
        left: 20px;
        width: 20px;
        height: 20px;
        z-index: 400;
    }
</style>