<template>
    <div class="resume">
        <div class="contailer-fluid">
            <div class="row">
                <!-- 左侧 -->
                <div class="col-sm-3">
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
                        <div class="card card-header">技能</div>
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
                </div>
                <!-- 右侧 -->
                <div class="col-sm-9">
                    <div class="jumbotron">
                        <p class="text-left small">
                            爱学习、爱编程、爱咖啡可乐、爱挑战、爱专研、爱打游戏、爱晚起、也爱工作到深夜.我擅长技术、崇尚简单和懒惰。我神秘而孤僻，沉默而爱憎分明。
                            <br>Don't panic I‘m a programmer
                        </p>
                    </div>

                    <div class="card-group" id="accoradion">
                        <div class="card card-default">
                            <div class="card-header">
                                <div class="card-title">
                                    <a href="#collapseOne" data-toggle="collapse" data-parent="#accoradion">工作经验</a>
                                </div>
                                <div id="collapseOne" class="card-collapse collapse">
                                    <div class="card-body">
                                        <ul class="list-group">
                                            <li class="list-group-item list-group-item-success">
                                                <div class="row">
                                                    <div class="col-sm-4">2015/3/1-至今</div>
                                                    <div class="col-sm-4">XXX公司</div>
                                                    <div class="col-sm-4">IOS开发工程师</div>
                                                </div>
                                            </li>

                                            <li class="list-group-item list-group-item-warning">
                                                <div class="row">
                                                    <div class="col-sm-4">2015/3/1-至今</div>
                                                    <div class="col-sm-4">XXX公司</div>
                                                    <div class="col-sm-4">IOS开发工程师</div>
                                                </div>
                                            </li>

                                            <li class="list-group-item list-group-item-info">
                                                <div class="row">
                                                    <div class="col-sm-4">2015/3/1-至今</div>
                                                    <div class="col-sm-4">XXX公司</div>
                                                    <div class="col-sm-4">IOS开发工程师</div>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div class="card-header">
                                <div class="card-title">
                                    <a href="#collapseTwo" data-toggle="collapse" data-parent="#accoradion">教育经历</a>
                                </div>


                                <div id="collapseTwo" class="card-collapse collapse">
                                    <div class="card-body">
                                        <ul class="list-group">
                                            <li class="list-group-item list-group-item-success">
                                                <div class="row">
                                                    <div class="col-sm-4">2015/3/1-至今</div>
                                                    <div class="col-sm-4">XXX公司</div>
                                                    <div class="col-sm-4">IOS开发工程师</div>
                                                </div>
                                            </li>

                                            <li class="list-group-item list-group-item-warning">
                                                <div class="row">
                                                    <div class="col-sm-4">2015/3/1-至今</div>
                                                    <div class="col-sm-4">XXX公司</div>
                                                    <div class="col-sm-4">IOS开发工程师</div>
                                                </div>
                                            </li>

                                            <li class="list-group-item list-group-item-info">
                                                <div class="row">
                                                    <div class="col-sm-4">2015/3/1-至今</div>
                                                    <div class="col-sm-4">XXX公司</div>
                                                    <div class="col-sm-4">IOS开发工程师</div>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div class="card-header">
                                <div class="card-title">
                                    <a href="#collapseThree" data-toggle="collapse" data-parent="#accoradion">项目经验</a>
                                </div>
                                <div id="collapseThree" class="card-collapse collapse">
                                    <div class="card-body">
                                        <div id="divCarousel" class="carousel slide" data-ride="carousel">
                                            <ol class="carousel-indicators">
                                                <li data-target="#divCarousel" data-slide-to="0" class="active"></li>
                                                <li data-target="#divCarousel" data-slide-to="1"></li>
                                                <li data-target="#divCarousel" data-slide-to="2"></li>
                                            </ol>
                                            <div class="carousel-inner">
                                                <div class="item active">
                                                    <img src="img/1.png" alt="" class="img-responsive img-rounded">
                                                    <div class="carousel-caption">...</div>
                                                </div>

                                                <div class="item">
                                                    <img src="img/1.png" alt="" class="img-responsive img-rounded">
                                                    <div class="carousel-caption">...</div>
                                                </div>

                                                <div class="item">
                                                    <img src="img/1.png" alt="" class="img-responsive img-rounded">
                                                    <div class="carousel-caption">...</div>
                                                </div>
                                            </div>
                                            <a href="#divCarousel" class="left carousel-control" data-slide="prev">
                                                <span class="glyphicon glyphicon-chevron-left"></span>
                                            </a>
                                            <a href="#divCarousel" class="right carousel-control" data-slide="next">
                                                <span class="glyphicon glyphicon-chevron-right"></span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import store from '@/store';
    import Lodash from 'lodash';
    store.state.meta.title = "简历";
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
                    {k:"github", v:'<a href="https://github.com/wodrow" target="_blank">wodrow</a>'},
                    {k:"码云", v:'<a href="https://gitee.com/wodrow" target="_blank">wodrow</a>'},
                    {k:"个人主页", v:'<a href="https://wodrow.github.io/" target="_blank">wodrow</a>'}
                ],
                skills: [
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
                ]
            }
        },
        mounted() {
            Lodash.forEach(this.skills, function (v) {
                v.percent = v.len + '%';
            })
        }
    }
</script>