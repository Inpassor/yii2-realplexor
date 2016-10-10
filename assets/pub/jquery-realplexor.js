/**
 * jquery-realplexor.js
 *
 * @author DmitryKoterov <dmitry.koterov@gmail.com>
 * @link https://github.com/DmitryKoterov/dklab_realplexor/blob/master/dklab_realplexor.js
 *
 * @author Inpassor <inpassor@yandex.com>
 * @link https://github.com/Inpassor/yii2-realplexor
 *
 * @version 0.1.1 (2016.10.10)
 */

;(function ($, window, document, undefined) {

    $.Realplexor = function (params) {
        $.extend(true, this, this.params, params || {});
        this.host = document.location.host;
        if (!this.constructor._registry) {
            this.constructor._registry = {};
        }
        this._iframeId = "mpl" + (new Date().getTime());
        this.constructor._registry[this._iframeId] = this;

        if (!this.url.match(/^\w+:\/\/([^/]+)/)) {
            throw 'Dklab_Realplexor constructor argument must be fully-qualified URL, ' + this.url + ' given.';
        }
        var mHost = RegExp.$1;
        if (mHost != this.host && mHost.lastIndexOf('.' + this.host) != mHost.length - this.host.length - 1) {
            throw 'Due to the standard XMLHttpRequest security policy, hostname in URL passed to Dklab_Realplexor (' + mHost + ') must be equals to the current host (' + this.host + ') or be its direct sub-domain.';
        }

        if (this.viaDocumentWrite) {
            this._createIframe();
        }
        document.domain = host;
        return this;
    };

    $.Realplexor.prototype = {
        version: '1.32',
        url: '',
        host: '',
        namespace: '',
        _map: {},
        _realplexor: null,
        _login: null,
        _iframeId: null,
        _iframeCreated: false,
        _needExecute: false,
        _executeTimer: null,
        _createIframe: function () {
            $('<iframe/>', {
                id: this._iframeId,
                onload: '$.Realplexor._iframeLoaded("' + this._iframeId + '")',
                src: this.url + '?identifier=IFRAME&HOST=' + this.host + '&version=' + this.version
            }).css({
                position: 'absolute',
                visibility: 'hidden',
                width: '200px',
                height: '200px',
                left: '-1000px',
                top: '-1000px'
            }).appendTo('body');
            this._iframeCreated = true;
        },
        logon: function (login) {
            this._login = login;
            return this;
        },
        setCursor: function (id, cursor) {
            if (!this._map[id]) this._map[id] = {cursor: null, callbacks: []};
            this._map[id].cursor = cursor;
            return this;
        },
        subscribe: function (id, callback) {
            if (!this._map[id]) this._map[id] = {cursor: null, callbacks: []};
            var chain = this._map[id].callbacks;
            for (var i = 0; i < chain.length; i++) {
                if (chain[i] === callback) {
                    return this;
                }
            }
            chain.push(callback);
            return this;
        },
        unsubscribe: function (id, callback) {
            if (!this._map[id]) return this;
            if (callback == null) {
                this._map[id].callbacks = [];
                return this;
            }
            var chain = this._map[id].callbacks;
            for (var i = 0; i < chain.length; i++) {
                if (chain[i] === callback) {
                    chain.splice(i, 1);
                    return this;
                }
            }
            return this;
        },
        execute: function () {
            if (!this._iframeCreated) {
                this._createIframe();
            }
            if (this._executeTimer) {
                clearTimeout(this._executeTimer);
                this._executeTimer = null;
            }
            var th = this;
            if (!this._realplexor) {
                this._executeTimer = setTimeout(function () {
                    th.execute()
                }, 30);
                return this;
            }
            this._realplexor.execute(
                this._map,
                this.constructor._callAndReturnException,
                (this._login != null ? this._login + '_' : '') + this.namespace
            );
            return this;
        }
    };

    $.Realplexor._iframeLoaded = function (id) {
        var th = this._registry[id];
        setTimeout(function () {
            var iframe = document.getElementById(id);
            th._realplexor = iframe.contentWindow.Dklab_Realplexor_Loader;
            if (th.needExecute) {
                th.execute();
            }
        }, 50);
    };

    $.Realplexor._callAndReturnException = function (func, args) {
        try {
            func.apply(null, args);
            return null;
        } catch (e) {
            return "" + e;
        }
    }

})(jQuery, window, document);
