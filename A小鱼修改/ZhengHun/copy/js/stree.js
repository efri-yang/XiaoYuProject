/*!
 * Distpicker v2.0.0-rc
 * https://github.com/fengyuanchen/distpicker
 *
 * Copyright (c) 2014-2017 Fengyuan Chen
 * Released under the MIT license
 *
 * Date: 2017-03-04T07:50:05.377Z
 */


(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(require('jquery')) :
  typeof define === 'function' && define.amd ? define(['jquery'], factory) :
  (factory(global.$));
}(this, (function ($) { 'use strict';

$ = 'default' in $ ? $['default'] : $;

var DEFAULTS = {
  // Selects the districts automatically.
  // 0 -> Disable autoselect
  // 1 -> Autoselect province only
  // 2 -> Autoselect province and city only
  // 3 -> Autoselect all (province, city and district)
  autoselect: 0,

  // Show placeholder.
  placeholder: true,

  // Select value. Options: 'name' and 'code'
  valueType: 'name',

  // Defines the initial value of province.
  province: '- - 请选择省 - -',

  // Defines the initial value of city.
  city: '- - 请选择市 - -',

  // Defines the initial value of district.
  district: '- - 请选择区(县) - -',
};

var DISTRICTS = {

  350200: {
    350203: '思明区',
    350205: '海沧区',
    350206: '湖里区',
    350211: '集美区',
    350212: '同安区',
    350213: '翔安区',
    350214: '鼓浪屿'
  },
  350203:{
    356001:'中山路/轮渡',
    356002:'厦门大学',
    356003:'白鹭州公园',
    356004:'莲花',
    356005:'市政府',
    356006:'环岛路沿线',
    356007:'前埔/软件园',
    356008:'仙岳路沿线',
    356009:'松柏',
    356010:'禾祥西路',
    356011:'火车站',
    356012:'莲前大道',
    356013:'厝黄',
    356014:'莲坂',
    356015:'曾厝垵',
    356016:'瑞景',
    356017:'嘉禾路',
    356018:'体育路'
  },
  350205:{
    356101:'阿罗海城市广场',
    356102:'新垵',
    356103:'海沧商业园',
    356104:'东孚',
    356105:'海裕路'   
  },
  350206:{
    356201:'湖里公园',
    356202:'塘边',
    356203:'高崎',
    356204:'泰和花园',
    356205:'悦享中心',
    356206:'金山小区',
    356207:'五缘湾建发湾悦城',
    356208:'仙岳路沿线',
    356209:'枋湖',
    356210:'殿前',
    356211:'东渡',
    356212:'SM/江头',
    356213:'湖里万达',
    356214:'五缘湾月乐都',
    356215:'金尚小区',
    356216:'广场',
    356217:'蔡塘广场',
    356218:'马垅',
    356219:'新景国际外滩'
  },
  350211:{
    356301:'集美学村',
    356302:'杏林',
    356303:'集美万达广场',
    356304:'旺角',
    356305:'灌口',
    356306:'园博苑',
    356307:'孙厝新华都',
    356308:'厦门北站'
  },
  350212:{
    356401:'同安乐海广场',
    356402:'马涂商业街',
    356403:'同安老城区/钟楼',
    356404:'汽车站/城南路',
    356405:'后海海鲜船坞',
    356406:'梧侣/康亭',
    356407:'城西/祥平街道',
    356408:'城东/岳口'
  },
  350213:{
    356501:'新店',
    356502:'五巷',
    356503:'大嶝岛'
  },
  350214:{
    356601:'鼓浪屿风景区'
  }
   
  
};

var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
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







var get = function get(object, property, receiver) {
  if (object === null) object = Function.prototype;
  var desc = Object.getOwnPropertyDescriptor(object, property);

  if (desc === undefined) {
    var parent = Object.getPrototypeOf(object);

    if (parent === null) {
      return undefined;
    } else {
      return get(parent, property, receiver);
    }
  } else if ("value" in desc) {
    return desc.value;
  } else {
    var getter = desc.get;

    if (getter === undefined) {
      return undefined;
    }

    return getter.call(receiver);
  }
};

















var set = function set(object, property, value, receiver) {
  var desc = Object.getOwnPropertyDescriptor(object, property);

  if (desc === undefined) {
    var parent = Object.getPrototypeOf(object);

    if (parent !== null) {
      set(parent, property, value, receiver);
    }
  } else if ("value" in desc && desc.writable) {
    desc.value = value;
  } else {
    var setter = desc.set;

    if (setter !== undefined) {
      setter.call(receiver, value);
    }
  }

  return value;
};

var NAMESPACE$1 = 'streetpicker';
var EVENT_CHANGE = 'change.' + NAMESPACE$1;
var DEFAULT_CODE = 350200;
var PROVINCE = 'province';
var CITY = 'city';
var DISTRICT = 'district';

var Streetpicker = function () {
  function Streetpicker(element, options) {
    classCallCheck(this, Streetpicker);

    var self = this;

    self.$element = $(element);
    self.options = $.extend({}, DEFAULTS, $.isPlainObject(options) && options);
    self.placeholders = $.extend({}, DEFAULTS);
    self.ready = false;
    self.init();
  }

  createClass(Streetpicker, [{
    key: 'init',
    value: function init() {
      var self = this;
      var options = self.options;
      var $selects = self.$element.find('select');
      var length = $selects.length;
      var data = {};

      $selects.each(function (i, select) {
        return $.extend(data, $(select).data());
      });

      $.each([PROVINCE, CITY, DISTRICT], function (i, type) {
        if (data[type]) {
          options[type] = data[type];
          self['$' + type] = $selects.filter('[data-' + type + ']');
        } else {
          self['$' + type] = length > i ? $selects.eq(i) : null;
        }
      });

      self.bind();

      // Reset all the selects (after event binding)
      self.reset();
      self.ready = true;
    }
  }, {
    key: 'bind',
    value: function bind() {
      var self = this;

      if (self.$province) {
        self.$province.on(EVENT_CHANGE, self.onChangeProvince = $.proxy(function () {
          self.output(CITY);
          self.output(DISTRICT);
        }, self));
      }

      if (self.$city) {
        self.$city.on(EVENT_CHANGE, self.onChangeCity = $.proxy(function () {
          return self.output(DISTRICT);
        }, self));
      }
    }
  }, {
    key: 'unbind',
    value: function unbind() {
      var self = this;

      if (self.$province) {
        self.$province.off(EVENT_CHANGE, self.onChangeProvince);
      }

      if (self.$city) {
        self.$city.off(EVENT_CHANGE, self.onChangeCity);
      }
    }
  }, {
    key: 'output',
    value: function output(type) {
      var self = this;
      var options = self.options;
      var placeholders = self.placeholders;
      var $select = self['$' + type];

      if (!$select || !$select.length) {
        return;
      }

      var code = void 0;

      switch (type) {
        case PROVINCE:
          code = DEFAULT_CODE;
          break;

        case CITY:
          code = self.$province && (self.$province.find(':selected').data('code') || '');
          break;

        case DISTRICT:
          code = self.$city && (self.$city.find(':selected').data('code') || '');
          break;
      }

      var districts = self.getDistricts(code);
      var value = options[type];
      var data = [];
      var matched = false;

      if ($.isPlainObject(districts)) {
        $.each(districts, function (i, name) {
          var selected = name === value;

          if (options.valueType === 'code') {
            selected = i === String(value);
          }

          if (selected) {
            matched = true;
          }

          data.push({
            code: i,
            name: name,
            selected: selected
          });
        });
      }

      if (!matched) {
        var autoselect = options.autoselect || options.autoSelect;

        if (data.length && (type === PROVINCE && autoselect > 0 || type === CITY && autoselect > 1 || type === DISTRICT && autoselect > 2)) {
          data[0].selected = true;
        }

        // Save the unmatched value as a placeholder at the first output
        if (!self.ready && value) {
          placeholders[type] = value;
        }
      }

      // Add placeholder option
      if (options.placeholder) {
        data.unshift({
          code: '',
          name: placeholders[type],
          selected: false
        });
      }

      if (data.length) {
        $select.html(self.getList(data));
      } else {
        $select.empty();
      }
    }
  }, {
    key: 'getList',
    value: function getList(data) {
      var options = this.options;
      var list = [];

      $.each(data, function (i, n) {
        var attrs = ['data-code="' + n.code + '"', 'data-text="' + n.name + '"', 'value="' + (options.valueType === 'name' && n.code ? n.name : n.code) + '"'];

        if (n.selected) {
          attrs.push('selected');
        }

        list.push('<option ' + attrs.join(' ') + '>' + n.name + '</option>');
      });

      return list.join('');
    }

    // eslint-disable-next-line class-methods-use-this

  }, {
    key: 'getDistricts',
    value: function getDistricts() {
      var code = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : DEFAULT_CODE;

      return DISTRICTS[code] || null;
    }
  }, {
    key: 'reset',
    value: function reset(deep) {
      var self = this;

      if (!deep) {
        self.output(PROVINCE);
        self.output(CITY);
        self.output(DISTRICT);
      } else if (self.$province) {
        self.$province.find(':first').prop('selected', true).trigger(EVENT_CHANGE);
      }
    }
  }, {
    key: 'destroy',
    value: function destroy() {
      var self = this;

      self.unbind();
      self.$element.removeData(NAMESPACE$1);
    }
  }], [{
    key: 'setDefaults',
    value: function setDefaults(options) {
      $.extend(DEFAULTS, $.isPlainObject(options) && options);
    }
  }]);
  return Streetpicker;
}();

var NAMESPACE = 'streetpicker';
var OtherDistpicker = $.fn.streetpicker;

$.fn.streetpicker = function jQueryStreetpicker(option) {
  for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }

  var result = void 0;

  this.each(function each() {
    var $this = $(this);
    var data = $this.data(NAMESPACE);

    if (!data) {
      if (/destroy/.test(option)) {
        return;
      }

      var options = $.extend({}, $this.data(), $.isPlainObject(option) && option);
      $this.data(NAMESPACE, data = new Streetpicker(this, options));
    }

    if (typeof option === 'string') {
      var fn = data[option];

      if ($.isFunction(fn)) {
        result = fn.apply(data, args);
      }
    }
  });

  return typeof result !== 'undefined' ? result : this;
};

$.fn.streetpicker.Constructor = Streetpicker;
$.fn.streetpicker.setDefaults = Streetpicker.setDefaults;

$.fn.streetpicker.noConflict = function noConflict() {
  $.fn.streetpicker = OtherDistpicker;
  return this;
};

$(function () {
  $('[data-toggle="streetpicker"]').streetpicker();
});

})));
//# sourceMappingURL=distpicker.js.map
