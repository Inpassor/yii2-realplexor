Realplexor extension for the Yii 2 framework
============================================

Author: Inpassor <inpassor@yandex.com>

Link: https://github.com/Inpassor/yii2-realplexor

This extension implements Dklab_Realplexor transport. It contains Yii 2 application
component for server-side interaction with Dklab_Realplexor server, and asset
for client-side.

Link: https://github.com/DmitryKoterov/dklab_realplexor

Link: http://dklab.ru/lib/dklab_realplexor/

### Install

1) Add package to your project using composer:
```
composer require inpassor/yii2-realplexor
```

2) Add the realplexor application component to the console / web config in "components" section:
```
    'components' => [
        ...
        'realplexor' => [
            'class' => 'inpassor\realplexor\Realplexor',
            'namespace' => '',
            'host' => 'rpl.yourdomain.com',
            'port' => 80,
        ],
    ],
```


### Use

Yii::$app->realplexor
