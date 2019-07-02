<template>
    <div class="about">
        <b-row>
            <b-col cols="12">
                <h2>
                    版权说明
                </h2>
                <br>
                <p>
                    本站是由wodrow制作的个人博客，主要运用了vuecli3、vue-bootstrap等技术，如有兴趣请到
                    <code>
                        <a href="https://github.com/wodrow/wodrow.github.io">https://github.com/wodrow/wodrow.github.io</a>
                    </code>
                    下载本站代码，如要使用本站代码，请说明引用自https://github.com/wodrow/wodrow.github.io。
                </p>
                <h2>
                    联系我
                </h2>
                <p>
                    <br>
                    QQ: <code>1173957281</code>
                    <br>
                    微信号: <code>wodrow</code>
                    <br>
                    电话: <code>17091551612</code>
                    <br>
                    邮箱: <code>wodrow451611cv@gmail.com</code>
                    <br>
                    邮箱2: <code>1173957281@qq.com</code>
                    <br>
                    拒绝任何骚扰 !
                </p>
            </b-col>
        </b-row>
    </div>
</template>

<script>
    export default {
        name: "About",
        mounted: function () {
            window.document.title = "关于本站";
        }
    }
</script>
