<?php

namespace inpassor\realplexor\assets;

class RealplexorAsset extends \yii\web\AssetBundle
{

    public $sourcePath = '@inpassor/realplexor/assets/pub';
    public $js = [
        'jquery-realplexor' . (YII_ENV_DEV ? '.min' : '') . '.js',
    ];

}
