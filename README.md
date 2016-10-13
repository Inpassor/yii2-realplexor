Realplexor extension for the Yii 2 framework
============================================

Author: Inpassor <inpassor@yandex.com>

GitHub repository: https://github.com/Inpassor/yii2-realplexor

This library implements
[Dklab_Realplexor](https://github.com/DmitryKoterov/dklab_realplexor)
PHP API.

Dklab_Realplexor is comet server which handles 1000000+ parallel
browser connections.

## Installation

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
        ],
    ],
```
There are several parameters that available to configure:

Parameter | Description
--- | ---
**host** | Default: 127.0.0.1
**port** | Default: 10010
**namespace** | Default: ''
**login** | Default: ''
**password** | Default: ''
**timeout** | Default: 5


## Usage

Use Realplexor transport as application component:
```
Yii::$app->realplexor
```

To implement Realplexor client-side use \inpassor\assets\JqueryRealplexor
asset, that refers to bower package
[inpassor-jquery-realplexor](https://github.com/Inpassor/jquery-realplexor)
