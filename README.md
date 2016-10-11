Realplexor extension for the Yii 2 framework
============================================

Author: Inpassor <inpassor@yandex.com>

Link: https://github.com/Inpassor/yii2-realplexor

This extension implements Dklab_Realplexor transport.

Link: https://github.com/DmitryKoterov/dklab_realplexor

Link: http://dklab.ru/lib/dklab_realplexor/

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
            'host' => 'rpl.yourdomain.com',
            'port' => 80,
        ],
    ],
```
The example above shows only the required parameters.
There are few more parameters that available to configure:

@var string $namespace
@var string $identifier
@var string $login
@var string $password
@var string $timeout


## Usage

Yii::$app->realplexor
