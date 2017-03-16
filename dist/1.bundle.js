webpackJsonp([1],{

/***/ 142:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _marionette = __webpack_require__(100);
	
	var _route = __webpack_require__(143);
	
	var _route2 = _interopRequireDefault(_route);
	
	var _route3 = __webpack_require__(156);
	
	var _route4 = _interopRequireDefault(_route3);
	
	var _route5 = __webpack_require__(185);
	
	var _route6 = _interopRequireDefault(_route5);
	
	var _route7 = __webpack_require__(189);
	
	var _route8 = _interopRequireDefault(_route7);
	
	var _storage = __webpack_require__(151);
	
	var _storage2 = _interopRequireDefault(_storage);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = _marionette.Route.extend({
	  activate: function activate() {
	    //ensure data is loaded for all children routes
	    return _storage2.default.findAll({ ajaxSync: true });
	  },
	
	
	  childRoutes: {
	    'colors.index': _route2.default,
	    'colors.show': _route4.default,
	    'colors.edit': _route6.default,
	    'colors.create': _route8.default
	  }
	});

/***/ },

/***/ 143:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _marionette = __webpack_require__(100);
	
	var _layoutView = __webpack_require__(144);
	
	var _layoutView2 = _interopRequireDefault(_layoutView);
	
	var _storage = __webpack_require__(151);
	
	var _storage2 = _interopRequireDefault(_storage);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = _marionette.Route.extend({
	  activate: function activate(transition) {
	    var _this = this;
	
	    var pageParam = transition.query.page;
	    this.page = pageParam && parseFloat(pageParam) || 1;
	    return _storage2.default.findAll().then(function (collection) {
	      _this.collection = collection;
	    });
	  },
	  updateView: function updateView(transition) {
	    // updateView is called when the route is already rendered (route.view !== undefined)
	    var pageParam = transition.query.page;
	    var page = pageParam && parseFloat(pageParam) || 1;
	    this.view.updateState({ page: page });
	    // the default behavior is the current view be replaced by a new view instance
	    // by returning true, the current view is is not destroyed / removed
	    return true;
	  },
	
	
	  viewClass: _layoutView2.default,
	
	  viewOptions: function viewOptions() {
	    return {
	      collection: this.collection,
	      page: this.page
	    };
	  }
	});

/***/ },

/***/ 144:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _underscore = __webpack_require__(81);
	
	var _underscore2 = _interopRequireDefault(_underscore);
	
	var _backbone = __webpack_require__(83);
	
	var _collectionView = __webpack_require__(145);
	
	var _collectionView2 = _interopRequireDefault(_collectionView);
	
	var _footerView = __webpack_require__(148);
	
	var _footerView2 = _interopRequireDefault(_footerView);
	
	var _backbone2 = __webpack_require__(80);
	
	var _layoutTemplate = __webpack_require__(150);
	
	var _layoutTemplate2 = _interopRequireDefault(_layoutTemplate);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = _backbone.View.extend({
	  template: _layoutTemplate2.default,
	  className: 'colors colors--index container',
	
	  regions: {
	    list: '.colors__list',
	    footer: '.colors__footer'
	  },
	
	  initialize: function initialize() {
	    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	
	    this.state = { start: 0, limit: 20 };
	    this.state.start = (options.page - 1) * this.state.limit;
	  },
	  onBeforeRender: function onBeforeRender() {
	    var filtered = this.getFilteredModels();
	
	    this.filteredCollection = new _backbone2.Collection(filtered);
	  },
	  onRender: function onRender() {
	    var footerView = new _footerView2.default({
	      collection: this.collection,
	      state: this.state
	    });
	
	    this.collectionView = new _collectionView2.default({
	      collection: this.filteredCollection
	    });
	
	    this.getRegion('list').show(this.collectionView);
	    this.getRegion('footer').show(footerView);
	  },
	  getFilteredModels: function getFilteredModels() {
	    return _underscore2.default.chain(this.collection.models).drop(this.state.start).take(this.state.limit).value();
	  },
	  updateState: function updateState(options) {
	    this.state.start = (options.page - 1) * this.state.limit;
	    var filtered = this.getFilteredModels();
	    this.filteredCollection.reset(filtered);
	    this.getRegion('footer').currentView.render();
	  }
	});

/***/ },

/***/ 145:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _backbone = __webpack_require__(83);
	
	var _itemView = __webpack_require__(146);
	
	var _itemView2 = _interopRequireDefault(_itemView);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = _backbone.CollectionView.extend({
	  className: 'list-group',
	  childView: _itemView2.default
	});

/***/ },

/***/ 146:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _backbone = __webpack_require__(83);
	
	var _itemTemplate = __webpack_require__(147);
	
	var _itemTemplate2 = _interopRequireDefault(_itemTemplate);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = _backbone.View.extend({
	  tagName: 'a',
	  template: _itemTemplate2.default,
	  className: 'colors__item list-group-item',
	
	  attributes: function attributes() {
	    return {
	      href: '#colors/' + this.model.get('id')
	    };
	  },
	
	
	  modelEvents: {
	    all: 'render'
	  }
	});

/***/ },

/***/ 147:
/***/ function(module, exports, __webpack_require__) {

	var Handlebars = __webpack_require__(122);
	function __default(obj) { return obj && (obj.__esModule ? obj["default"] : obj); }
	module.exports = (Handlebars["default"] || Handlebars).template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
	    var helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;
	
	  return "<span class=\"colors__swatch\" style=\"background-color: "
	    + alias4(((helper = (helper = helpers.hex || (depth0 != null ? depth0.hex : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"hex","hash":{},"data":data}) : helper)))
	    + "\"></span>\r\n<h4 class=\"list-group-item-heading\">"
	    + alias4(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
	    + "</h4>\r\n<p class=\"list-group-item-text\">"
	    + alias4(((helper = (helper = helpers.hex || (depth0 != null ? depth0.hex : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"hex","hash":{},"data":data}) : helper)))
	    + "</p>\r\n";
	},"useData":true});

/***/ },

/***/ 148:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _underscore = __webpack_require__(81);
	
	var _underscore2 = _interopRequireDefault(_underscore);
	
	var _backbone = __webpack_require__(83);
	
	var _footerTemplate = __webpack_require__(149);
	
	var _footerTemplate2 = _interopRequireDefault(_footerTemplate);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = _backbone.View.extend({
	  template: _footerTemplate2.default,
	  initialize: function initialize(options) {
	    this.state = options.state;
	  },
	  templateContext: function templateContext() {
	    var total = Math.ceil(this.collection.length / this.state.limit);
	    var current = Math.ceil(this.state.start / this.state.limit) + 1;
	
	    var pages = _underscore2.default.times(total, function (index) {
	      return {
	        current: index + 1 === current,
	        page: index + 1
	      };
	    });
	
	    var prev = current - 1 > 0 ? current - 1 : false;
	    var next = current < total ? current + 1 : false;
	
	    return { total: total, current: current, pages: pages, prev: prev, next: next };
	  }
	});

/***/ },

/***/ 149:
/***/ function(module, exports, __webpack_require__) {

	var Handlebars = __webpack_require__(122);
	function __default(obj) { return obj && (obj.__esModule ? obj["default"] : obj); }
	module.exports = (Handlebars["default"] || Handlebars).template({"1":function(container,depth0,helpers,partials,data) {
	    var helper;
	
	  return "            <li><a href=\"#colors?page="
	    + container.escapeExpression(((helper = (helper = helpers.prev || (depth0 != null ? depth0.prev : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"prev","hash":{},"data":data}) : helper)))
	    + "\">&laquo;</a></li>\r\n";
	},"3":function(container,depth0,helpers,partials,data) {
	    return "            <li class=\"disabled\"><a>&laquo;</a></li>\r\n";
	},"5":function(container,depth0,helpers,partials,data) {
	    var stack1;
	
	  return ((stack1 = helpers["if"].call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.current : depth0),{"name":"if","hash":{},"fn":container.program(6, data, 0),"inverse":container.program(8, data, 0),"data":data})) != null ? stack1 : "");
	},"6":function(container,depth0,helpers,partials,data) {
	    var helper;
	
	  return "                <li class=\"active\"><a>"
	    + container.escapeExpression(((helper = (helper = helpers.page || (depth0 != null ? depth0.page : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"page","hash":{},"data":data}) : helper)))
	    + " <span class=\"sr-only\">(current)</span></a></li>\r\n";
	},"8":function(container,depth0,helpers,partials,data) {
	    var helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;
	
	  return "                <li><a href=\"#colors?page="
	    + alias4(((helper = (helper = helpers.page || (depth0 != null ? depth0.page : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"page","hash":{},"data":data}) : helper)))
	    + "\">"
	    + alias4(((helper = (helper = helpers.page || (depth0 != null ? depth0.page : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"page","hash":{},"data":data}) : helper)))
	    + "</a></li>\r\n";
	},"10":function(container,depth0,helpers,partials,data) {
	    var helper;
	
	  return "            <li><a href=\"#colors?page="
	    + container.escapeExpression(((helper = (helper = helpers.next || (depth0 != null ? depth0.next : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"next","hash":{},"data":data}) : helper)))
	    + "\">&raquo;</a></li>\r\n";
	},"12":function(container,depth0,helpers,partials,data) {
	    return "            <li class=\"disabled\"><a>&raquo;</a></li>\r\n";
	},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
	    var stack1, alias1=depth0 != null ? depth0 : {};
	
	  return "<div class=\"text-center\">\r\n    <ul class=\"pagination\">\r\n"
	    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.prev : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(3, data, 0),"data":data})) != null ? stack1 : "")
	    + "\r\n"
	    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.pages : depth0),{"name":"each","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
	    + "\r\n"
	    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.next : depth0),{"name":"if","hash":{},"fn":container.program(10, data, 0),"inverse":container.program(12, data, 0),"data":data})) != null ? stack1 : "")
	    + "    </ul>\r\n</div>";
	},"useData":true});

/***/ },

/***/ 150:
/***/ function(module, exports, __webpack_require__) {

	var Handlebars = __webpack_require__(122);
	function __default(obj) { return obj && (obj.__esModule ? obj["default"] : obj); }
	module.exports = (Handlebars["default"] || Handlebars).template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
	    return "<div class=\"page-header\">\r\n  <a href=\"#colors/new\" class=\"btn btn-primary pull-right\">Create</a>\r\n  <h1>Colors: Index</h1>\r\n</div>\r\n\r\n<div class=\"colors__list\"></div>\r\n\r\n<div class=\"colors__footer\"></div>\r\n\r\n\r\n";
	},"useData":true});

/***/ },

/***/ 151:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _backbone = __webpack_require__(152);
	
	var _backbone2 = _interopRequireDefault(_backbone);
	
	var _model = __webpack_require__(154);
	
	var _model2 = _interopRequireDefault(_model);
	
	var _collection = __webpack_require__(155);
	
	var _collection2 = _interopRequireDefault(_collection);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var ColorsStorage = _backbone2.default.extend({
	  model: _model2.default,
	  collection: _collection2.default
	});
	
	exports.default = new ColorsStorage();

/***/ },

/***/ 154:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _backbone = __webpack_require__(80);
	
	var _backbone2 = _interopRequireDefault(_backbone);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = _backbone2.default.Model.extend({
	  urlRoot: '/api/colors',
	
	  localStorage: new _backbone2.default.LocalStorage('colors'),
	
	  defaults: {
	    active: false
	  },
	
	  validate: function validate() {
	    var attrs = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	
	    var errors = [];
	
	    if (attrs.name === '') {
	      errors.push('Missing "name" field');
	    }
	
	    if (attrs.hex === '') {
	      errors.push('Missing "hex" field');
	    }
	
	    return errors.length > 0 ? errors : undefined;
	  }
	});

/***/ },

/***/ 155:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _backbone = __webpack_require__(80);
	
	var _backbone2 = _interopRequireDefault(_backbone);
	
	var _model = __webpack_require__(154);
	
	var _model2 = _interopRequireDefault(_model);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = _backbone2.default.Collection.extend({
	  url: '../api/colors/fixture.json',
	  localStorage: _model2.default.prototype.localStorage,
	  model: _model2.default
	});

/***/ },

/***/ 156:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _marionette = __webpack_require__(100);
	
	var _view = __webpack_require__(157);
	
	var _view2 = _interopRequireDefault(_view);
	
	var _storage = __webpack_require__(151);
	
	var _storage2 = _interopRequireDefault(_storage);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = _marionette.Route.extend({
	  activate: function activate(transition) {
	    var _this = this;
	
	    return _storage2.default.find(+transition.params.colorid).then(function (model) {
	      _this.model = model;
	    });
	  },
	
	
	  contextRequests: {
	    colorModel: function colorModel() {
	      return this.model;
	    }
	  },
	
	  viewClass: _view2.default,
	
	  viewOptions: function viewOptions() {
	    return {
	      model: this.model
	    };
	  }
	});

/***/ },

/***/ 157:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _backbone = __webpack_require__(83);
	
	var _nprogress = __webpack_require__(119);
	
	var _nprogress2 = _interopRequireDefault(_nprogress);
	
	var _service = __webpack_require__(158);
	
	var _service2 = _interopRequireDefault(_service);
	
	var _service3 = __webpack_require__(178);
	
	var _service4 = _interopRequireDefault(_service3);
	
	var _template = __webpack_require__(184);
	
	var _template2 = _interopRequireDefault(_template);
	
	var _backbone2 = __webpack_require__(84);
	
	var _backbone3 = _interopRequireDefault(_backbone2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = _backbone.View.extend({
	  template: _template2.default,
	  className: 'colors colors--show container',
	
	  initialize: function initialize() {
	    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	
	    this.model = options.model;
	  },
	  templateContext: function templateContext() {
	    return {
	      errors: this.model.validationError
	    };
	  },
	
	
	  events: {
	    'click .colors__toggle': 'handleToggle',
	    'click .colors__destroy': 'handleDestroy'
	  },
	
	  modelEvents: {
	    all: 'render'
	  },
	
	  handleToggle: function handleToggle() {
	    var _this = this;
	
	    this.model.set('active', !this.model.get('active'));
	    this.model.save().fail(function () {
	      return _this.handleToggleFailure();
	    });
	  },
	  handleToggleFailure: function handleToggleFailure() {
	    this.model.set('active', this.model.previous('active'));
	  },
	  handleDestroy: function handleDestroy() {
	    var _this2 = this;
	
	    _service2.default.request('confirm', {
	      title: 'Confirm Color Destruction',
	      text: 'Are you sure you want to destroy ' + this.model.get('name') + '?'
	    }).then(function (confirmed) {
	      if (!confirmed) {
	        return;
	      }
	
	      _nprogress2.default.start();
	
	      return _this2.model.destroy({ wait: true }).then(function () {
	        return _this2.handleDestroySuccess();
	      });
	    });
	  },
	  handleDestroySuccess: function handleDestroySuccess() {
	    _backbone3.default.channel('router').request('transitionTo', 'colors.index');
	    _service4.default.request('add', {
	      timeout: 5000,
	      type: 'info',
	      title: 'It\'s gone!',
	      body: 'You have deleted ' + this.model.get('name') + '.'
	    });
	  }
	});

/***/ },

/***/ 184:
/***/ function(module, exports, __webpack_require__) {

	var Handlebars = __webpack_require__(122);
	function __default(obj) { return obj && (obj.__esModule ? obj["default"] : obj); }
	module.exports = (Handlebars["default"] || Handlebars).template({"1":function(container,depth0,helpers,partials,data) {
	    return "Activate";
	},"3":function(container,depth0,helpers,partials,data) {
	    return "Deactivate";
	},"5":function(container,depth0,helpers,partials,data) {
	    return "Active";
	},"7":function(container,depth0,helpers,partials,data) {
	    return "Inactive";
	},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
	    var stack1, helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;
	
	  return "<div class=\"page-header\">\r\n  <div class=\"btn-toolbar pull-right\" role=\"toolbar\">\r\n    <div class=\"btn-group\">\r\n      <button class=\"colors__destroy btn btn-danger\">Destroy</button>\r\n    </div>\r\n    <div class=\"btn-group\">\r\n      <button class=\"colors__toggle btn btn-default\">"
	    + ((stack1 = helpers.unless.call(alias1,(depth0 != null ? depth0.active : depth0),{"name":"unless","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(3, data, 0),"data":data})) != null ? stack1 : "")
	    + "</button>\r\n      <a href=\"#colors/"
	    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
	    + "/edit\" class=\"btn btn-default\">Edit</a>\r\n    </div>\r\n  </div>\r\n  <h1>Colors: Show</h1>\r\n</div>\r\n\r\n<div class=\"row\">\r\n  <div class=\"col-md-3\">\r\n    <div class=\"thumbnail\">\r\n      <div class=\"colors__thumbnail\" style=\"background-color: "
	    + alias4(((helper = (helper = helpers.hex || (depth0 != null ? depth0.hex : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"hex","hash":{},"data":data}) : helper)))
	    + "\"></div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"col-md-9\">\r\n    <div class=\"list-group\">\r\n      <div class=\"list-group-item\">\r\n        <h4 class=\"list-group-item-heading\">Name</h4>\r\n        <p class=\"list-group-item-text\">"
	    + alias4(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
	    + "</p>\r\n      </div>\r\n      <div class=\"list-group-item\">\r\n        <h4 class=\"list-group-item-heading\">Hex</h4>\r\n        <p class=\"list-group-item-text\">"
	    + alias4(((helper = (helper = helpers.hex || (depth0 != null ? depth0.hex : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"hex","hash":{},"data":data}) : helper)))
	    + "</p>\r\n      </div>\r\n      <div class=\"list-group-item\">\r\n        <h4 class=\"list-group-item-heading\">State</h4>\r\n        <p class=\"list-group-item-text\">"
	    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.active : depth0),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.program(7, data, 0),"data":data})) != null ? stack1 : "")
	    + "</p>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n\r\n";
	},"useData":true});

/***/ },

/***/ 185:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _marionette = __webpack_require__(100);
	
	var _view = __webpack_require__(186);
	
	var _view2 = _interopRequireDefault(_view);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = _marionette.Route.extend({
	
	  viewClass: _view2.default,
	
	  viewOptions: function viewOptions() {
	    return {
	      model: this.getContext().request('colorModel')
	    };
	  }
	});

/***/ },

/***/ 186:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _nprogress = __webpack_require__(119);
	
	var _nprogress2 = _interopRequireDefault(_nprogress);
	
	var _behavior = __webpack_require__(187);
	
	var _behavior2 = _interopRequireDefault(_behavior);
	
	var _backbone = __webpack_require__(83);
	
	var _template = __webpack_require__(188);
	
	var _template2 = _interopRequireDefault(_template);
	
	var _storage = __webpack_require__(151);
	
	var _storage2 = _interopRequireDefault(_storage);
	
	var _backbone2 = __webpack_require__(84);
	
	var _backbone3 = _interopRequireDefault(_backbone2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = _backbone.View.extend({
	  template: _template2.default,
	  className: 'colors colors--edit container',
	
	  behaviors: {
	    form: { behaviorClass: _behavior2.default }
	  },
	
	  templateContext: function templateContext() {
	    return {
	      errors: this.model.validationError
	    };
	  },
	
	
	  events: {
	    'submit form': 'handleSubmit'
	  },
	
	  handleSubmit: function handleSubmit() {
	    var _this = this;
	
	    var errors = this.model.validate(this.form);
	
	    if (errors) {
	      this.model.validationError = errors;
	      this.render();
	    } else {
	      _nprogress2.default.start();
	      this.model.set(this.form);
	      _storage2.default.save(this.model).then(function () {
	        _backbone3.default.channel('router').request('transitionTo', 'colors.show', { colorid: _this.model.id });
	      });
	    }
	  }
	});

/***/ },

/***/ 187:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _backbone = __webpack_require__(98);
	
	var _backbone2 = _interopRequireDefault(_backbone);
	
	var _backbone3 = __webpack_require__(83);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = _backbone3.Behavior.extend({
	  events: {
	    'submit form': 'handleSubmit'
	  },
	
	  initialize: function initialize() {
	    this.listenTo(this.view.options.model, 'change', this.onChange);
	  },
	  serialize: function serialize() {
	    this.view.form = _backbone2.default.serialize(this);
	  },
	  deserialize: function deserialize() {
	    return _backbone2.default.deserialize(this, this.view.form);
	  },
	  onChange: function onChange() {
	    this.view.form = this.view.model.attributes;
	    this.deserialize();
	  },
	  onBeforeRender: function onBeforeRender() {
	    if (this.view.form) {
	      this.serialize();
	    }
	  },
	  onDomRefresh: function onDomRefresh() {
	    if (!this.view.form) {
	      this.view.form = this.view.model.attributes;
	    }
	    this.deserialize();
	  },
	  handleSubmit: function handleSubmit(event) {
	    event.preventDefault();
	    this.view.form = _backbone2.default.serialize(this);
	  }
	});

/***/ },

/***/ 188:
/***/ function(module, exports, __webpack_require__) {

	var Handlebars = __webpack_require__(122);
	function __default(obj) { return obj && (obj.__esModule ? obj["default"] : obj); }
	module.exports = (Handlebars["default"] || Handlebars).template({"1":function(container,depth0,helpers,partials,data) {
	    var stack1;
	
	  return "    <div class=\"alert alert-warning\">\r\n      <ul>\r\n"
	    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.errors : depth0),{"name":"each","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
	    + "      </ul>\r\n    </div>\r\n";
	},"2":function(container,depth0,helpers,partials,data) {
	    return "          <li>"
	    + container.escapeExpression(container.lambda(depth0, depth0))
	    + "</li>\r\n";
	},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
	    var stack1;
	
	  return "<div class=\"page-header\">\r\n  <h1>Colors: Edit</h1>\r\n</div>\r\n\r\n<form class=\"colors__form form-horizontal well\" role=\"form\">\r\n"
	    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.errors : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
	    + "\r\n  <div class=\"form-group\">\r\n    <label class=\"col-sm-1 control-label\" for=\"name\">Name</label>\r\n    <div class=\"col-sm-11\">\r\n      <input class=\"form-control\" name=\"name\" type=\"text\" placeholder=\"blue\">\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"form-group\">\r\n    <label class=\"col-sm-1 control-label\" for=\"hex\">Hex</label>\r\n    <div class=\"col-sm-11\">\r\n      <input class=\"form-control\" name=\"hex\" type=\"text\" placeholder=\"#00f\">\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"form-group\">\r\n     <div class=\"col-sm-offset-1 col-sm-11\">\r\n       <button type=\"submit\" class=\"btn btn-default\">Submit</button>\r\n     </div>\r\n   </div>\r\n</form>\r\n";
	},"useData":true});

/***/ },

/***/ 189:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _marionette = __webpack_require__(100);
	
	var _model = __webpack_require__(154);
	
	var _model2 = _interopRequireDefault(_model);
	
	var _view = __webpack_require__(190);
	
	var _view2 = _interopRequireDefault(_view);
	
	var _storage = __webpack_require__(151);
	
	var _storage2 = _interopRequireDefault(_storage);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = _marionette.Route.extend({
	  activate: function activate() {
	    var _this = this;
	
	    this.model = new _model2.default();
	    return _storage2.default.findAll({ ajaxSync: true }).then(function (collection) {
	      _this.collection = collection;
	    });
	  },
	
	
	  viewClass: _view2.default,
	
	  viewOptions: function viewOptions() {
	    return {
	      collection: this.collection,
	      model: this.model
	    };
	  }
	});

/***/ },

/***/ 190:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _nprogress = __webpack_require__(119);
	
	var _nprogress2 = _interopRequireDefault(_nprogress);
	
	var _backbone = __webpack_require__(83);
	
	var _behavior = __webpack_require__(187);
	
	var _behavior2 = _interopRequireDefault(_behavior);
	
	var _template = __webpack_require__(191);
	
	var _template2 = _interopRequireDefault(_template);
	
	var _storage = __webpack_require__(151);
	
	var _storage2 = _interopRequireDefault(_storage);
	
	var _backbone2 = __webpack_require__(84);
	
	var _backbone3 = _interopRequireDefault(_backbone2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = _backbone.View.extend({
	  template: _template2.default,
	  className: 'colors colors--create container',
	
	  behaviors: {
	    form: { behaviorClass: _behavior2.default }
	  },
	
	  templateContext: function templateContext() {
	    return {
	      errors: this.errors
	    };
	  },
	
	
	  events: {
	    'submit form': 'handleSubmit'
	  },
	
	  handleSubmit: function handleSubmit() {
	    var errors = this.model.validate(this.form);
	
	    if (errors) {
	      this.errors = errors;
	      this.render();
	    } else {
	      _nprogress2.default.start();
	      this.model.set(this.form);
	      _storage2.default.save(this.model).then(function () {
	        _backbone3.default.channel('router').request('transitionTo', 'colors.index');
	      });
	    }
	  }
	});

/***/ },

/***/ 191:
/***/ function(module, exports, __webpack_require__) {

	var Handlebars = __webpack_require__(122);
	function __default(obj) { return obj && (obj.__esModule ? obj["default"] : obj); }
	module.exports = (Handlebars["default"] || Handlebars).template({"1":function(container,depth0,helpers,partials,data) {
	    var stack1;
	
	  return "    <div class=\"alert alert-warning\">\r\n      <ul>\r\n"
	    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.errors : depth0),{"name":"each","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
	    + "      </ul>\r\n    </div>\r\n";
	},"2":function(container,depth0,helpers,partials,data) {
	    return "          <li>"
	    + container.escapeExpression(container.lambda(depth0, depth0))
	    + "</li>\r\n";
	},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
	    var stack1;
	
	  return "<div class=\"page-header\">\r\n  <h1>Colors: Create</h1>\r\n</div>\r\n\r\n<form class=\"colors__form form-horizontal well\" role=\"form\">\r\n"
	    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.errors : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
	    + "\r\n  <div class=\"form-group\">\r\n    <label class=\"col-sm-1 control-label\" for=\"name\">Name</label>\r\n    <div class=\"col-sm-11\">\r\n      <input class=\"form-control\" name=\"name\" type=\"text\" placeholder=\"blue\">\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"form-group\">\r\n    <label class=\"col-sm-1 control-label\" for=\"hex\">Hex</label>\r\n    <div class=\"col-sm-11\">\r\n      <input class=\"form-control\" name=\"hex\" type=\"text\" placeholder=\"#00f\">\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"form-group\">\r\n    <div class=\"col-sm-offset-1 col-sm-11\">\r\n      <button type=\"submit\" class=\"btn btn-default\">Submit</button>\r\n    </div>\r\n   </div>\r\n</form>\r\n";
	},"useData":true});

/***/ }

});
//# sourceMappingURL=1.bundle.js.map