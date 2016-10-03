Realplexor application component for the Yii 2 framework
========================================================

Author: Inpassor <inpassor@yandex.com>

Link: https://github.com/Inpassor/yii2-realplexor

This application component implements Dklab_Realplexor PHP API.

Link: https://github.com/DmitryKoterov/dklab_realplexor

Link: http://dklab.ru/lib/dklab_realplexor/

### Install

1) Add package to your project using composer:
```
composer require inpassor/yii2-realplexor
```

If package installation fails with message
```
[InvalidArgumentException]
Could not find package inpassor/yii2-realplexor at any version for your minimum-stability (stable). Check the package spelling or your minimum-stability
```
add following parameters to your composer.json file (or change existant):
```
    "minimum-stability": "dev",
    "prefer-stable": true,
```

2) Add the daemon command to web / console config file in "components" section:
```
    'components' => [
        ...
        'realplexor' => [
            'class' => 'inpassor\realplexor\Realplexor',
        ],
    ],
```


### Use

Yii::$app->realplexor
