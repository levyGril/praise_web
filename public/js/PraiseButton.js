/*istanbul ignore next*/(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports);
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports);
    global.PraiseButton = mod.exports;
  }
})(this, function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

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

  var PraiseButton = function () {
    /**
     * [constructor description]
     * @param  {Number} num  [初始值]
     * @return {[type]}      [description]
     */
    function /*istanbul ignore next*/PraiseButton() {
      /*istanbul ignore next*/var num = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

      /*istanbul ignore next*/_classCallCheck(this, PraiseButton);

      this.praise_num = num;
    }
    /**
     * [praise 该方法返回当前实例的点赞次数]
     * @return {[type]} [description]
     */


    _createClass(PraiseButton, [{
      key: "addPraise",
      value: function addPraise() {
        this.praise_num = this.praise_num + 1;
        //return this.praise_num;
      }
    }]);

    return PraiseButton;
  }();

  exports.default = PraiseButton;
});