<?php

namespace inpassor\realplexor\assets;

class RealplexorAsset extends \yii\web\AssetBundle
{

    public $sourcePath = '@bower/inpassor-jquery-realplexor';
    public $js = [
        'js/jquery-realplexor' . (YII_ENV_DEV ? '.min' : '') . '.js',
    ];

}
