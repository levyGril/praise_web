/*istanbul ignore next*/(function (global, factory) {
    if (typeof define === "function" && define.amd) {
        define(['exports', './PraiseButton.js'], factory);
    } else if (typeof exports !== "undefined") {
        factory(exports, require('./PraiseButton.js'));
    } else {
        var mod = {
            exports: {}
        };
        factory(mod.exports, global.PraiseButton);
        global.ThumbButton = mod.exports;
    }
})(this, function (exports, _PraiseButton2) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    var _PraiseButton3 = _interopRequireDefault(_PraiseButton2);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    var _createClass = function () {
        function defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
                var descriptor = props[i];
                descriptor.enumerable = descriptor.enumerable || false;
                descriptor.configurable = true;
                if ("value" in descriptor) descriptor.writable = true;
                Object.defineProperty(target, descriptor.key, descriptor);
            }
        }

        return function (Constructor, protoProps, staticProps) {
            if (protoProps) defineProperties(Constructor.prototype, protoProps);
            if (staticProps) defineProperties(Constructor, staticProps);
            return Constructor;
        };
    }();

    function _possibleConstructorReturn(self, call) {
        if (!self) {
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }

        return call && (typeof call === "object" || typeof call === "function") ? call : self;
    }

    function _inherits(subClass, superClass) {
        if (typeof superClass !== "function" && superClass !== null) {
            throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
        }

        subClass.prototype = Object.create(superClass && superClass.prototype, {
            constructor: {
                value: subClass,
                enumerable: false,
                writable: true,
                configurable: true
            }
        });
        if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
    }

    var ThumbButton = function (_PraiseButton) {
        _inherits(ThumbButton, _PraiseButton);

        function /*istanbul ignore next*/ThumbButton(selector) {
            /*istanbul ignore next*/_classCallCheck(this, ThumbButton);

            var _this = _possibleConstructorReturn(this, (ThumbButton.__proto__ || Object.getPrototypeOf(ThumbButton)).call(this));

            /*istanbul ignore next*/_this.thumbNode = $( /*istanbul ignore next*/'\n            <!--\u5927\u62C7\u6307-->\n                <div class="wrapper">\n                    <!--\u624B\u8155-->\n                    <div class="wrist"></div>\n                    <!--\u5927\u62C7\u6307-->\n                    <div class="one"></div>\n                    <!--\u624B\u638C-->\n                    <div class="circle"></div>\n                </div>\n            ');

            /*istanbul ignore next*/_this.praiseNumNode = $( /*istanbul ignore next*/'\n                <div>\u5F53\u524D\u70B9\u8D5E<span>' + /*istanbul ignore next*/_this.praise_num + '</span>\u6B21</div>\n            ');

            $(selector).append( /*istanbul ignore next*/_this.thumbNode).append( /*istanbul ignore next*/_this.praiseNumNode);

            /*istanbul ignore next*/_this.thumbNode.on('click', /*istanbul ignore next*/_this.onChange.bind( /*istanbul ignore next*/_this));

            /*istanbul ignore next*/return _this;
        }

        _createClass(ThumbButton, [{
            key: 'onChange',
            value: function onChange() {
                this.addPraise(); //触发父类的点赞+1机制
                console.log( /*istanbul ignore next*/'\u60A8\u70B9\u51FB\u4E86\u6211' + this.praise_num + '\u6B21');
                this.praiseNumNode.find('span').html( /*istanbul ignore next*/'' + this.praise_num);
            }
        }]);

        return ThumbButton;
    }(_PraiseButton3.default);

    exports.default = ThumbButton;
});