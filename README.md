Realplexor extension for the Yii 2 framework
============================================

[![Latest Stable Version](https://poser.pugx.org/inpassor/yii2-realplexor/version)](https://packagist.org/packages/inpassor/yii2-realplexor)
[![Total Downloads](https://poser.pugx.org/inpassor/yii2-realplexor/downloads)](https://packagist.org/packages/inpassor/yii2-realplexor)
[![License](https://poser.pugx.org/inpassor/yii2-realplexor/license)](https://packagist.org/packages/inpassor/yii2-realplexor)

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

Parameter | Type | Description
--- | --- | ---
host | string | The server host. Default: 127.0.0.1
port | integer | The connection port. Default: 10010
namespace | string | Namespace to use. Default: ''
login | string | Login for connection (if the server need it). Default: ''
password | string | Password for connection (if the server need it). Default: ''
timeout | integer | The connection timeout, in seconds. Default: 5

## Usage

Use Realplexor transport as application component:
```
Yii::$app->realplexor
```

To get detailed information about properties and methods of the Realplexor
application component, please read documentation for [Realplexor PHP API](https://github.com/Inpassor/realplexor).

## Client-side

To implement Realplexor client-side use \inpassor\assets\JqueryRealplexor
asset (it included in the dependancies for this package, so just use it),
that refers to bower package
[inpassor-jquery-realplexor](https://github.com/Inpassor/jquery-realplexor)
