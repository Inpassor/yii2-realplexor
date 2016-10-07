Realplexor application component for the Yii 2 framework
========================================================

Author: Inpassor <inpassor@yandex.com>

Link: https://github.com/Inpassor/yii2-realplexor

This application component implements Dklab_Realplexor PHP API.

Find out information about this great comet server here:

Link: https://github.com/DmitryKoterov/dklab_realplexor

Link: http://dklab.ru/lib/dklab_realplexor/

### Install

1) Add package to your project using composer:
```
composer require inpassor/yii2-realplexor
```

2) Add the daemon command to web / console config file in "components" section:
```
    'components' => [
        ...
        'realplexor' => [
            'class' => 'inpassor\realplexor\Realplexor',
            'namespace' => '',
            'host' => 'rpl.your_domain.com'),
            'port' => 443,
        ],
    ],
```

Configure "namespace", "host" and "port" to fit your Dklab_Realplexor
settings. If server needs it, set parameters "login" and "password".

### Use

Yii::$app->realplexor
