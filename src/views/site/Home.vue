<template>
    <div class="home">
        <b-row>
            <b-col md="12">
                <div class="jumbotron p-3 p-md-5 text-white rounded bg-dark">
                    <b-col md="6" class="px-0">
                        <h1 class="display-4 font-italic">欢迎进入我的博客</h1>
                        <p class="lead my-3">人最宝贵的是生命，生命对人来说只有一次。人的一生应当这样度过：当他回首往事时，不会因为碌碌无为，虚度年华而悔恨，也不会因为为人卑劣，生活庸俗而愧疚。</p>
                        <p class="lead mb-0 text-white font-weight-bold">-- 《钢铁是怎样炼成的》 作者：奥斯特洛夫斯基</p>
                    </b-col>
                </div>
            </b-col>
            <b-col md="6">
                <div class="card flex-md-row mb-4 box-shadow h-md-250">
                    <div class="card-body d-flex flex-column align-items-start">
                        <strong class="d-inline-block mb-2 text-primary">电影推荐</strong>
                        <h3 class="mb-0">
                            <div class="text-dark">阿甘正传</div>
                        </h3>
                        <div class="mb-1 text-muted">1994</div>
                        <p class="card-text mb-auto">人生就像一盒巧克力,你永远也不知道下一个吃到的是什么味道。</p>
                        <a href="https://www.iqiyi.com/v_19rrk3u264.html?vfm=2008_aldbd&fc=828fb30b722f3164&fv=p_02_01" target="_blank">去观看</a>
                    </div>
                    <img class="card-img-right flex-auto d-none d-md-block" data-src="holder.js/200x250?theme=thumb"
                         alt="Thumbnail [200x250]" style="width: 200px; height: 250px;"
                         src="~@/assets/agzz.jpg"
                         data-holder-rendered="true">
                </div>
            </b-col>
            <b-col md="6">
                <div class="card flex-md-row mb-4 box-shadow h-md-250">
                    <div class="card-body d-flex flex-column align-items-start">
                        <strong class="d-inline-block mb-2 text-success">书籍推荐</strong>
                        <h3 class="mb-0">
                            <div class="text-dark">人性的弱点</div>
                        </h3>
                        <div class="mb-1 text-muted">2006</div>
                        <p class="card-text mb-auto">时常保持微笑”“牢记每个人的名字”“做一个善于聆听的人”“永远让别人感到重要”</p>
                        <a href="http://www.renxingruodian.com/" target="_blank">去阅读</a>
                    </div>
                    <img class="card-img-right flex-auto d-none d-md-block" data-src="holder.js/200x250?theme=thumb"
                         alt="Thumbnail [200x250]"
                         src="~@/assets/rxdrd.jpg"
                         data-holder-rendered="true" style="width: 200px; height: 250px;">
                </div>
            </b-col>
            <b-col md="8">
                <h3 class="pb-3 mb-4 font-italic border-bottom">
                    个人小结
                </h3>
                <div class="blog-post">
                    <p>
                        时光飞逝，不知不觉间，竟然进入了奔三的行列，作为一个勤恳工作在码农大军前线的一员，蓦然发现，自己在事业上一无所成。
                    </p>
                    <p>
                        难道就这样一直碌碌无为下去？不，作为一个有理想，有抱负，有能力的三有青年，咸鱼一样的生活不是我要的。
                        经过多年的工作学习积累，我已经掌握了许多编程技能，自认为可以解决大部分技术上的难题。我希望找到一家信任我的公司或团队，合作创出一番事业。
                    </p>
                    <p>
                        我主要使用的程序语言是PHP，平时多使用yii2框架，当然也涉猎过许多其他框架，cms以及二次开发的程序，不管是接手新项目或者在老项目上实现功能的添加修改调试，都能胜任；平时使用Linux桌面系统，可以熟练地使用Linux命令；另外，我还了解各种前端知识，前端工作也不是问题，本站就是一个示例,用到了vue、jQuery、bootstrap等各种新技术和流行技术。
                    </p>
                    <p>
                        另外，我掌握各种编程工具以及团队开发工具，可以和团队成员一起完成各种开发任维护任务。
                    </p>
                    <p>
                        我的个人优势主要体现在于能根据需求开发出稳定性强，扩展性高，安全性强的功能，开发会用到许多成熟的开源软件，降低开发和维护成本，让不管是技术人员还是非技术人员，都能更轻松有效率地工作。
                    </p>
                </div>
            </b-col>
            <b-col md="4">
                <div class="p-3 mb-3 bg-light rounded">
                    <h4 class="font-italic">小帖子</h4>
                    <p class="mb-0">
                        珍惜生命，远离百度搜索。我有一万种方法上谷歌。
                    </p>
                </div>
                <div class="p-3">
                    <h4 class="font-italic">站点收藏</h4>
                    <ol class="list-unstyled">
                        <li><a href="https://github.com/" target="_blank">GitHub</a></li>
                        <li><a href="https://packagist.org/" target="_blank">packagist</a></li>
                        <li><a href="https://gitee.com/" target="_blank">码云</a></li>
                        <li><a href="https://www.bootcss.com/" target="_blank">Bootstrap中文网</a></li>
                        <li><a href="https://www.bootcdn.cn/" target="_blank">bootcdn</a></li>
                        <li><a href="https://cdnjs.com/" target="_blank">cdnjs</a></li>
                    </ol>
                </div>
            </b-col>
        </b-row>
    </div>
</template>

<script>
    export default {
        name: 'Home',
        mounted: function () {
            window.document.title = "首页";
        }
    }
</script>
