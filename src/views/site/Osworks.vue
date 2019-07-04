<template>
    <div class="osworks">
        <b-row>
            <b-col cols="12">
                <h2><a href="https://packagist.org/packages/wodrow/yii2wajaxcrud" target="_blank">wodrow/yii2wajaxcrud</a></h2>
                <p>Gii CRUD template for Single Page Ajax Administration for yii2</p>
                <h4>功能</h4>
                <ul>
                    <li>Create, read, update, delete in onpage with Ajax</li>
                    <li>Bulk delete suport</li>
                    <li>Pjax widget suport</li>
                    <li>Export function(pdf,html,text,csv,excel,json)</li>
                    <li>Editable suport</li>
                    <li>Daterange suport</li>
                </ul>
                <h4>安装</h4>
                <p><code>php composer.phar require --prefer-dist wodrow/yii2wajaxcrud "^3.0"</code></p>
                <h4>用法</h4>
                <p>
                    <code>
                        'modules' => [
                        'gridview' => [
                        'class' => '\kartik\grid\Module'
                        ]
                        ]
                    </code>
                </p>
                <p>
                    <code>
                        $config['bootstrap'][] = 'gii';
                        $config['modules']['gii'] = [
                        'class' => 'yii\gii\Module',
                        ];
                        $config['modules']['gii']['generators']['wodrowmodel'] = [
                        'class' => \wodrow\wajaxcrud\generators\model\Generator::class,
                        'showName' => "YOUR MODEL GENERATOR",
                        ];
                        $config['modules']['gii']['generators']['wodrowwajaxcrud'] = [
                        'class' => \wodrow\wajaxcrud\generators\crud\Generator::class,
                        'showName' => "YOUR AJAX CRUD GENERATOR",
                        ];
                    </code>
                </p>
                <h4>图示</h4>
                <b-row>
                    <b-col cols="4"><b-img src="https://camo.githubusercontent.com/0f206a0bdc1d1db65f8677b7a586f780fe9946c7/68747470733a2f2f692e6c6f6c692e6e65742f323031392f30352f30392f356364336137633263623935612e706e67" fluid></b-img></b-col>
                    <b-col cols="4"><b-img src="https://camo.githubusercontent.com/8d45f8b438630ccd017e940237c0c2cc7de67156/68747470733a2f2f692e6c6f6c692e6e65742f323031392f30352f30392f356364336137633263656537612e706e67" fluid></b-img></b-col>
                    <b-col cols="4"><b-img src="https://camo.githubusercontent.com/a617ee320adce3a97bb38ef83c4c5ed4c2ebb51d/68747470733a2f2f692e6c6f6c692e6e65742f323031392f30352f30392f356364336137633264313461392e706e67" fluid></b-img></b-col>
                </b-row>
            </b-col>
            <b-col cols="12" :class="['mt20']">
                <h2><a href="https://packagist.org/packages/wodrow/yii2-ww-wangeditor" target="_blank">wodrow/yii2-ww-wangeditor</a></h2>
                <p>基于wangEditor3.1.1，详见 <a href="http://www.wangeditor.com/" target="_blank">wangEditor 官网</a></p>
                <h4>安装</h4>
                <p><code>php composer.phar require wodrow/yii2-ww-wangeditor "dev-master"</code></p>
                <h4>使用</h4>
                <h6>配置</h6>
                <p>
                    <code>
                        'modules' => [
                        'wangeditor' => [
                        'class' => \wodrow\yii2wwwangeditor\WangEditorModule::className(),
                        'uploads_root' => "@webroot", // 默认
                        'uploads_url' => "@web", // 默认
                        ],
                        ],
                    </code>
                </p>
                <h6>视图</h6>
                <p>
                    <code>
                        echo \wodrow\yii2wwwangeditor\widgets\WangEditorWidget::widget([
                        'name' => 'content',
                        'clientJs' => $clientJs
                        ]);
                    </code>
                </p>
                <h4>预览效果</h4>
                <p>
                    <b-img src="https://camo.githubusercontent.com/9299e1e227189c4473c011311697a3b2c254e771/68747470733a2f2f692e6c6f6c692e6e65742f323031392f30322f31332f356336336335643361633664642e706e67" fluid></b-img>
                </p>
            </b-col>
            <b-col cols="12" :class="['mt20']">
                <h2><a href="https://packagist.org/packages/wodrow/yii2-wwtree" target="_blank">wodrow/yii2-wwtree</a></h2>
                <p>另一款分类树编辑管理工具</p>
                <h4>安装</h4>
                <p><code>composer require wodrow/yii2-wwtree dev-master</code></p>
                <h4>使用配置</h4>
                <h6>模型</h6>
                <p>
                    <code>
                        public function behaviors()
                        {
                        return [
                        'tree' => [
                        'class' => \wodrow\yii2wwtree\TreeBehavior::class,
                        ],
                        ];
                        }

                        public function rules()
                        {
                        $r = parent::rules(); // 请定义你自己的rules规则
                        $rules = [
                        ['pid', \wodrow\yii2wwtree\Loop::class],
                        ];
                        $rules = ArrayHelper::merge($r, $rules);
                        return $rules;
                        }

                        /**
                        * @return \yii\db\ActiveQuery
                        */
                        public function getP()
                        {
                        return $this->hasOne(self::class, ['id' => 'pid']);
                        }

                        /**
                        * @return \yii\db\ActiveQuery
                        */
                        public function getChilds()
                        {
                        return $this->hasMany(self::class, ['pid' => 'id']);
                        }

                        public function afterDelete()
                        {
                        parent::afterDelete();
                        $this->afMove();
                        foreach ($this->childs as $k => $v) {
                        $v->delete();
                        }
                        }
                    </code>
                </p>
                <h6>视图</h6>
                <p>
                    <code>
                        &lt;?=wodrow\yii2wwtree\TreeWidget::widget([
    'treeModelClass' => "your model class",
                        'custom_field_view' => "add your extend field view",
                        ]) ?&gt;
                    </code>
                </p>
                <h6>注意</h6>
                <p>
                    数据表必须要有id, pid(父级), name, sort, icon, icon_color这六个字段，其他字段根据需要自己添加, 使用它生成的模型
                </p>
                <h4>预览效果</h4>
                <p>
                    <b-img src="https://camo.githubusercontent.com/838414b9d2e53ecd4267fee46855d2777d0d0a02/68747470733a2f2f73322e617831782e636f6d2f323031392f30312f32312f6b6945636a302e706e67" fluid></b-img>
                </p>
            </b-col>
        </b-row>
    </div>
</template>

<script>
    export default {
        name: "Osworks",
        mounted: function () {
            window.document.title = "开源作品"
        }
    }
</script>

<style scoped>

</style>