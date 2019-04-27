(window.webpackJsonp = window.webpackJsonp || []).push([
  [1],
  {
    49: function(e, t, n) {
      var r = n(7);
      e.exports = (r.default || r).template({
        1: function(e, t, n, r, a) {
          var l;
          return (
            '    <div class="alert alert-warning">\r\n      <ul>\r\n' +
            (null !=
            (l = n.each.call(null != t ? t : e.nullContext || {}, null != t ? t.errors : t, {
              name: 'each',
              hash: {},
              fn: e.program(2, a, 0),
              inverse: e.noop,
              data: a,
            }))
              ? l
              : '') +
            '      </ul>\r\n    </div>\r\n'
          );
        },
        2: function(e, t, n, r, a) {
          return '        <li>' + e.escapeExpression(e.lambda(t, t)) + '</li>\r\n';
        },
        compiler: [7, '>= 4.0.0'],
        main: function(e, t, n, r, a) {
          var l;
          return (
            '<div class="colors colors--create container">\r\n  <div class="page-header">\r\n    <h1>Colors: Create</h1>\r\n  </div>\r\n\r\n  <form class="colors__form form-horizontal well" role="form">\r\n' +
            (null !=
            (l = n.if.call(null != t ? t : e.nullContext || {}, null != t ? t.errors : t, {
              name: 'if',
              hash: {},
              fn: e.program(1, a, 0),
              inverse: e.noop,
              data: a,
            }))
              ? l
              : '') +
            '\r\n    <div class="form-group">\r\n      <label class="col-sm-1 control-label" for="name">Name</label>\r\n      <div class="col-sm-11">\r\n        <input class="form-control" name="name" type="text" placeholder="blue">\r\n      </div>\r\n    </div>\r\n\r\n    <div class="form-group">\r\n      <label class="col-sm-1 control-label" for="hex">Hex</label>\r\n      <div class="col-sm-11">\r\n        <input class="form-control" name="hex" type="text" placeholder="#00f">\r\n      </div>\r\n    </div>\r\n\r\n    <div class="form-group">\r\n      <div class="col-sm-offset-1 col-sm-11">\r\n        <button type="submit" class="btn btn-default">Submit</button>\r\n      </div>\r\n    </div>\r\n  </form>\r\n</div>'
          );
        },
        useData: !0,
      });
    },
    50: function(e, t, n) {
      var r = n(7);
      e.exports = (r.default || r).template({
        1: function(e, t, n, r, a) {
          var l;
          return (
            '    <div class="alert alert-warning">\r\n      <ul>\r\n' +
            (null !=
            (l = n.each.call(null != t ? t : e.nullContext || {}, null != t ? t.errors : t, {
              name: 'each',
              hash: {},
              fn: e.program(2, a, 0),
              inverse: e.noop,
              data: a,
            }))
              ? l
              : '') +
            '      </ul>\r\n    </div>\r\n'
          );
        },
        2: function(e, t, n, r, a) {
          return '        <li>' + e.escapeExpression(e.lambda(t, t)) + '</li>\r\n';
        },
        compiler: [7, '>= 4.0.0'],
        main: function(e, t, n, r, a) {
          var l;
          return (
            '<div class="colors colors--edit container">\r\n  <div class="page-header">\r\n    <h1>Colors: Edit</h1>\r\n  </div>\r\n\r\n  <form class="colors__form form-horizontal well" role="form">\r\n' +
            (null !=
            (l = n.if.call(null != t ? t : e.nullContext || {}, null != t ? t.errors : t, {
              name: 'if',
              hash: {},
              fn: e.program(1, a, 0),
              inverse: e.noop,
              data: a,
            }))
              ? l
              : '') +
            '\r\n    <div class="form-group">\r\n      <label class="col-sm-1 control-label" for="name">Name</label>\r\n      <div class="col-sm-11">\r\n        <input class="form-control" name="name" type="text" placeholder="blue">\r\n      </div>\r\n    </div>\r\n\r\n    <div class="form-group">\r\n      <label class="col-sm-1 control-label" for="hex">Hex</label>\r\n      <div class="col-sm-11">\r\n        <input class="form-control" name="hex" type="text" placeholder="#00f">\r\n      </div>\r\n    </div>\r\n\r\n    <div class="form-group">\r\n      <div class="col-sm-offset-1 col-sm-11">\r\n        <button type="submit" class="btn btn-default">Submit</button>\r\n      </div>\r\n    </div>\r\n  </form>\r\n</div>'
          );
        },
        useData: !0,
      });
    },
    51: function(e, t, n) {
      var r = n(7);
      e.exports = (r.default || r).template({
        1: function(e, t, n, r, a) {
          return 'Activate';
        },
        3: function(e, t, n, r, a) {
          return 'Deactivate';
        },
        5: function(e, t, n, r, a) {
          return 'Active';
        },
        7: function(e, t, n, r, a) {
          return 'Inactive';
        },
        compiler: [7, '>= 4.0.0'],
        main: function(e, t, n, r, a) {
          var l,
            o,
            i = null != t ? t : e.nullContext || {},
            s = n.helperMissing,
            c = e.escapeExpression;
          return (
            '<div class="colors colors--show container">\r\n  <div class="page-header">\r\n    <div class="btn-toolbar float-right mt-2" role="toolbar">\r\n      <div class="btn-group mr-2">\r\n        <button class="colors__destroy btn btn-danger">Destroy</button>\r\n      </div>\r\n      <div class="btn-group">\r\n        <button class="colors__toggle btn btn-light">' +
            (null !=
            (l = n.unless.call(i, null != t ? t.active : t, {
              name: 'unless',
              hash: {},
              fn: e.program(1, a, 0),
              inverse: e.program(3, a, 0),
              data: a,
            }))
              ? l
              : '') +
            '</button>\r\n        <a href="#colors/' +
            c(
              'function' == typeof (o = null != (o = n.id || (null != t ? t.id : t)) ? o : s)
                ? o.call(i, { name: 'id', hash: {}, data: a })
                : o,
            ) +
            '/edit" class="btn btn-light">Edit</a>\r\n      </div>\r\n    </div>\r\n    <h1>Colors: Show</h1>\r\n  </div>\r\n\r\n  <div class="row">\r\n    <div class="col-md-3">\r\n      <div class="thumbnail">\r\n        <div class="colors__thumbnail" style="background-color: ' +
            c(
              'function' == typeof (o = null != (o = n.hex || (null != t ? t.hex : t)) ? o : s)
                ? o.call(i, { name: 'hex', hash: {}, data: a })
                : o,
            ) +
            '"></div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class="col-md-9">\r\n      <div class="list-group">\r\n        <div class="list-group-item">\r\n          <h4 class="mb-1">Name</h4>\r\n          <p class="mb-1">' +
            c(
              'function' == typeof (o = null != (o = n.name || (null != t ? t.name : t)) ? o : s)
                ? o.call(i, { name: 'name', hash: {}, data: a })
                : o,
            ) +
            '</p>\r\n        </div>\r\n        <div class="list-group-item">\r\n          <h4 class="mb-1">Hex</h4>\r\n          <p class="mb-1">' +
            c(
              'function' == typeof (o = null != (o = n.hex || (null != t ? t.hex : t)) ? o : s)
                ? o.call(i, { name: 'hex', hash: {}, data: a })
                : o,
            ) +
            '</p>\r\n        </div>\r\n        <div class="list-group-item">\r\n          <h4 class="mb-1">State</h4>\r\n          <p class="mb-1">' +
            (null !=
            (l = n.if.call(i, null != t ? t.active : t, {
              name: 'if',
              hash: {},
              fn: e.program(5, a, 0),
              inverse: e.program(7, a, 0),
              data: a,
            }))
              ? l
              : '') +
            '</p>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>'
          );
        },
        useData: !0,
      });
    },
    60: function(e, t, n) {
      var r = n(7);
      e.exports = (r.default || r).template({
        1: function(e, t, n, r, a) {
          var l;
          return (
            '            <li class="page-item"><a class="page-link" href="#colors?page=' +
            e.escapeExpression(
              'function' ==
                typeof (l = null != (l = n.prev || (null != t ? t.prev : t)) ? l : n.helperMissing)
                ? l.call(null != t ? t : e.nullContext || {}, { name: 'prev', hash: {}, data: a })
                : l,
            ) +
            '">&laquo;</a></li>\r\n'
          );
        },
        3: function(e, t, n, r, a) {
          return '            <li class="page-item disabled"><a class="page-link">&laquo;</a></li>\r\n';
        },
        5: function(e, t, n, r, a) {
          var l;
          return null !=
            (l = n.if.call(null != t ? t : e.nullContext || {}, null != t ? t.current : t, {
              name: 'if',
              hash: {},
              fn: e.program(6, a, 0),
              inverse: e.program(8, a, 0),
              data: a,
            }))
            ? l
            : '';
        },
        6: function(e, t, n, r, a) {
          var l;
          return (
            '                <li class="active page-item"><a class="page-link">' +
            e.escapeExpression(
              'function' ==
                typeof (l = null != (l = n.page || (null != t ? t.page : t)) ? l : n.helperMissing)
                ? l.call(null != t ? t : e.nullContext || {}, { name: 'page', hash: {}, data: a })
                : l,
            ) +
            ' <span class="sr-only">(current)</span></a></li>\r\n'
          );
        },
        8: function(e, t, n, r, a) {
          var l,
            o = null != t ? t : e.nullContext || {},
            i = n.helperMissing,
            s = e.escapeExpression;
          return (
            '                <li class="page-item"><a class="page-link" href="#colors?page=' +
            s(
              'function' == typeof (l = null != (l = n.page || (null != t ? t.page : t)) ? l : i)
                ? l.call(o, { name: 'page', hash: {}, data: a })
                : l,
            ) +
            '">' +
            s(
              'function' == typeof (l = null != (l = n.page || (null != t ? t.page : t)) ? l : i)
                ? l.call(o, { name: 'page', hash: {}, data: a })
                : l,
            ) +
            '</a></li>\r\n'
          );
        },
        10: function(e, t, n, r, a) {
          var l;
          return (
            '            <li class="page-item"><a class="page-link" href="#colors?page=' +
            e.escapeExpression(
              'function' ==
                typeof (l = null != (l = n.next || (null != t ? t.next : t)) ? l : n.helperMissing)
                ? l.call(null != t ? t : e.nullContext || {}, { name: 'next', hash: {}, data: a })
                : l,
            ) +
            '">&raquo;</a></li>\r\n'
          );
        },
        12: function(e, t, n, r, a) {
          return '            <li class="disabled page-item"><a class="page-link">&raquo;</a></li>\r\n';
        },
        compiler: [7, '>= 4.0.0'],
        main: function(e, t, n, r, a) {
          var l,
            o = null != t ? t : e.nullContext || {};
          return (
            '<div class="text-center">\r\n    <ul class="pagination">\r\n' +
            (null !=
            (l = n.if.call(o, null != t ? t.prev : t, {
              name: 'if',
              hash: {},
              fn: e.program(1, a, 0),
              inverse: e.program(3, a, 0),
              data: a,
            }))
              ? l
              : '') +
            '\r\n' +
            (null !=
            (l = n.each.call(o, null != t ? t.pages : t, {
              name: 'each',
              hash: {},
              fn: e.program(5, a, 0),
              inverse: e.noop,
              data: a,
            }))
              ? l
              : '') +
            '\r\n' +
            (null !=
            (l = n.if.call(o, null != t ? t.next : t, {
              name: 'if',
              hash: {},
              fn: e.program(10, a, 0),
              inverse: e.program(12, a, 0),
              data: a,
            }))
              ? l
              : '') +
            '    </ul>\r\n</div>'
          );
        },
        useData: !0,
      });
    },
    64: function(e, t, n) {
      'use strict';
      n.r(t);
      var r = n(3),
        a = n(63),
        l = n(0),
        o = n.n(l),
        i = n(1),
        s = n(2),
        c = n.n(s),
        u = (n(62), n(61), n(47)),
        d = (function() {
          function e(e, t) {
            for (var n = 0; n < t.length; n++) {
              var r = t[n];
              (r.enumerable = r.enumerable || !1),
                (r.configurable = !0),
                'value' in r && (r.writable = !0),
                Object.defineProperty(e, r.key, r);
            }
          }
          return function(t, n, r) {
            return n && e(t.prototype, n), r && e(t, r), t;
          };
        })();
      var h,
        f = ((h = Object(u.b)()),
        (function(e) {
          function t() {
            return (
              (function(e, t) {
                if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function');
              })(this, t),
              (function(e, t) {
                if (!e)
                  throw new ReferenceError(
                    "this hasn't been initialised - super() hasn't been called",
                  );
                return !t || ('object' != typeof t && 'function' != typeof t) ? e : t;
              })(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
            );
          }
          return (
            (function(e, t) {
              if ('function' != typeof t && null !== t)
                throw new TypeError(
                  'Super expression must either be null or a function, not ' + typeof t,
                );
              (e.prototype = Object.create(t && t.prototype, {
                constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 },
              })),
                t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : (e.__proto__ = t));
            })(t, h),
            d(t, [
              {
                key: 'render',
                value: function(e) {
                  if (!this.template) return '';
                  var t = Object.assign({}, e, this.templateContext() || {});
                  return this.template(t) || '';
                },
              },
              { key: 'templateContext', value: function() {} },
            ]),
            t
          );
        })()),
        m = n(60),
        p = n.n(m),
        v = (function() {
          function e(e, t) {
            for (var n = 0; n < t.length; n++) {
              var r = t[n];
              (r.enumerable = r.enumerable || !1),
                (r.configurable = !0),
                'value' in r && (r.writable = !0),
                Object.defineProperty(e, r.key, r);
            }
          }
          return function(t, n, r) {
            return n && e(t.prototype, n), r && e(t, r), t;
          };
        })();
      function g(e, t) {
        if (!e)
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !t || ('object' != typeof t && 'function' != typeof t) ? e : t;
      }
      var b = (function(e) {
        function t() {
          var e, n, r;
          !(function(e, t) {
            if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function');
          })(this, t);
          for (var a = arguments.length, l = Array(a), o = 0; o < a; o++) l[o] = arguments[o];
          return (
            (n = r = g(
              this,
              (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [this].concat(l)),
            )),
            (r.template = p.a),
            g(r, n)
          );
        }
        return (
          (function(e, t) {
            if ('function' != typeof t && null !== t)
              throw new TypeError(
                'Super expression must either be null or a function, not ' + typeof t,
              );
            (e.prototype = Object.create(t && t.prototype, {
              constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 },
            })),
              t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : (e.__proto__ = t));
          })(t, f),
          v(
            t,
            [
              {
                key: 'templateContext',
                value: function() {
                  var e = Math.ceil(this.props.count / this.props.limit),
                    t = Math.ceil(this.props.start / this.props.limit) + 1,
                    n = o.a.times(e, function(e) {
                      return { current: e + 1 === t, page: e + 1 };
                    });
                  return {
                    total: e,
                    current: t,
                    pages: n,
                    prev: t - 1 > 0 && t - 1,
                    next: t < e && t + 1,
                  };
                },
              },
              {
                key: 'renderRoot',
                get: function() {
                  return this;
                },
              },
            ],
            [
              {
                key: 'props',
                get: function() {
                  return { count: u.a.number, start: u.a.number, limit: u.a.number };
                },
              },
            ],
          ),
          t
        );
      })();
      customElements.define('paging-bar', b);
      var x = n(59),
        y = n.n(x)()([
          n(57).default,
          n(56).default,
          n(55).default,
          n(54).default,
          n(53).default,
          n(52).default,
        ]),
        w = i.View.extend({
          initialize: function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            (this.state = { start: 0, limit: 20 }),
              (this.state.start = (e.page - 1) * this.state.limit),
              (this.render = o.a.debounce(this.render, 0));
            var t = this.getFilteredModels();
            (this.filteredCollection = new s.Collection(t)),
              this.listenTo(this.filteredCollection, 'all', this.render);
          },
          getFilteredModels: function() {
            return o.a
              .chain(this.collection.models)
              .drop(this.state.start)
              .take(this.state.limit)
              .value();
          },
          updateState: function(e) {
            this.state.start = (e.page - 1) * this.state.limit;
            var t = this.getFilteredModels();
            this.filteredCollection.reset(t);
          },
          template: function() {
            var e = this.filteredCollection;
            return Object(a.a)(
              'div',
              { className: 'colors colors--index container' },
              Object(a.a)(
                'div',
                { className: 'page-header' },
                Object(a.a)(
                  'a',
                  { href: '#colors/new', className: 'btn btn-primary float-right mt-2' },
                  'Create',
                ),
                Object(a.a)('h1', null, 'Colors: Index'),
              ),
              Object(a.a)(
                'div',
                { className: 'colors__list' },
                Object(a.a)(
                  'div',
                  { className: 'list-group' },
                  e.map(function(e) {
                    return (function(e) {
                      var t = e.attributes,
                        n = t.id,
                        r = t.hex,
                        l = t.name;
                      return Object(
                        a.a,
                      )('a', { className: 'colors__item list-group-item list-group-item-action flex-column align-items-start', href: '#colors/' + n }, Object(a.a)('div', { className: 'd-flex w-100 justify-content-start' }, Object(a.a)('span', { className: 'colors__swatch mt-2', style: { 'background-color': r } }), Object(a.a)('div', null, Object(a.a)('h5', null, l), Object(a.a)('p', { className: 'mb-1' }, r))));
                    })(e);
                  }),
                ),
              ),
              Object(a.a)(
                'div',
                { className: 'colors__footer mt-3 d-flex justify-content-center' },
                Object(a.a)('paging-bar', {
                  count: this.collection.length,
                  start: this.state.start,
                  limit: this.state.limit,
                }),
              ),
            );
          },
        }).setRenderer(y),
        C = n(14),
        _ = n.n(C),
        O = c.a.Model.extend({
          urlRoot: '/api/colors',
          localStorage: new c.a.LocalStorage('colors'),
          defaults: { active: !1 },
          validate: function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
              t = [];
            return (
              '' === e.name && t.push('Missing "name" field'),
              '' === e.hex && t.push('Missing "hex" field'),
              t.length > 0 ? t : void 0
            );
          },
        }),
        j = c.a.Collection.extend({
          url: '../api/colors/fixture.json',
          localStorage: O.prototype.localStorage,
          model: O,
        }),
        S = new (_.a.extend({ model: O, collection: j }))(),
        E = r.a.extend({
          activate: function(e) {
            var t = this,
              n = e.query.page;
            return (
              (this.page = (n && parseFloat(n)) || 1),
              S.findAll().then(function(e) {
                t.collection = e;
              })
            );
          },
          updateView: function(e) {
            var t = e.query.page,
              n = (t && parseFloat(t)) || 1;
            return this.view.updateState({ page: n }), !0;
          },
          viewClass: w,
          viewOptions: function() {
            return { collection: this.collection, page: this.page };
          },
        }),
        k = n(10),
        q = n.n(k),
        M = n(13),
        z = n(12),
        N = n(51),
        D = n.n(N),
        T = n(4),
        R = n.n(T),
        A = i.View.extend({
          template: D.a,
          initialize: function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            this.model = e.model;
          },
          templateContext: function() {
            return { errors: this.model.validationError };
          },
          events: {
            'click .colors__toggle': 'handleToggle',
            'click .colors__destroy': 'handleDestroy',
          },
          modelEvents: { all: 'render' },
          handleToggle: function() {
            var e = this;
            this.model.set('active', !this.model.get('active')),
              this.model.save().fail(function() {
                return e.handleToggleFailure();
              });
          },
          handleToggleFailure: function() {
            this.model.set('active', this.model.previous('active'));
          },
          handleDestroy: function() {
            var e = this;
            M.a
              .request('confirm', {
                title: 'Confirm Color Destruction',
                text: 'Are you sure you want to destroy ' + this.model.get('name') + '?',
              })
              .then(function(t) {
                if (t)
                  return (
                    q.a.start(),
                    e.model.destroy({ wait: !0 }).then(function() {
                      return e.handleDestroySuccess();
                    })
                  );
              });
          },
          handleDestroySuccess: function() {
            R.a.channel('router').request('transitionTo', 'colors.index'),
              z.a.request('add', {
                timeout: 5e3,
                type: 'info',
                title: "It's gone!",
                body: 'You have deleted ' + this.model.get('name') + '.',
              });
          },
        }),
        P = r.a.extend({
          activate: function(e) {
            var t = this;
            return S.find(+e.params.colorid).then(function(e) {
              t.model = e;
            });
          },
          contextRequests: {
            colorModel: function() {
              return this.model;
            },
          },
          viewClass: A,
          viewOptions: function() {
            return { model: this.model };
          },
        }),
        F = n(24),
        V = n.n(F),
        H = i.Behavior.extend({
          events: { 'submit form': 'handleSubmit' },
          initialize: function() {
            this.listenTo(this.view.options.model, 'change', this.onChange);
          },
          serialize: function() {
            this.view.form = V.a.serialize(this);
          },
          deserialize: function() {
            return V.a.deserialize(this, this.view.form);
          },
          onChange: function() {
            (this.view.form = this.view.model.attributes), this.deserialize();
          },
          onBeforeRender: function() {
            this.view.form && this.serialize();
          },
          onDomRefresh: function() {
            this.view.form || (this.view.form = this.view.model.attributes), this.deserialize();
          },
          handleSubmit: function(e) {
            e.preventDefault(), (this.view.form = V.a.serialize(this));
          },
        }),
        I = n(50),
        Y = n.n(I),
        B = i.View.extend({
          template: Y.a,
          behaviors: { form: { behaviorClass: H } },
          templateContext: function() {
            return { errors: this.model.validationError };
          },
          events: { 'submit form': 'handleSubmit' },
          handleSubmit: function() {
            var e = this,
              t = this.model.validate(this.form);
            t
              ? ((this.model.validationError = t), this.render())
              : (q.a.start(),
                this.model.set(this.form),
                S.save(this.model).then(function() {
                  R.a
                    .channel('router')
                    .request('transitionTo', 'colors.show', { colorid: e.model.id });
                }));
          },
          hasUnsavedChanges: function() {
            return !o.a.isEqual(
              V.a.serialize(this),
              o.a.omit(this.model.attributes, 'id', 'active'),
            );
          },
        }),
        J = r.a.extend({
          viewClass: B,
          viewOptions: function() {
            return { model: this.getContext().request('colorModel') };
          },
          deactivate: function(e) {
            if (this.view.hasUnsavedChanges())
              return M.a
                .request('confirm', {
                  title: 'You have unsaved changes',
                  text: 'Are you sure you want to exit without saving?',
                  yes: 'Yes, discard changes',
                  no: 'No, abort exit',
                })
                .then(function(t) {
                  t || e.cancel();
                });
          },
        }),
        U = n(49),
        L = n.n(U),
        G = i.View.extend({
          template: L.a,
          behaviors: { form: { behaviorClass: H } },
          templateContext: function() {
            return { errors: this.errors };
          },
          events: { 'submit form': 'handleSubmit' },
          handleSubmit: function() {
            var e = this.model.validate(this.form);
            e
              ? ((this.errors = e), this.render())
              : (q.a.start(),
                this.model.set(this.form),
                S.save(this.model).then(function() {
                  R.a.channel('router').request('transitionTo', 'colors.index');
                }));
          },
        }),
        K = r.a.extend({
          activate: function() {
            var e = this;
            return (
              (this.model = new O()),
              S.findAll({ ajaxSync: !0 }).then(function(t) {
                e.collection = t;
              })
            );
          },
          viewClass: G,
          viewOptions: function() {
            return { collection: this.collection, model: this.model };
          },
        });
      t.default = r.a.extend({
        activate: function() {
          return S.findAll({ ajaxSync: !0 });
        },
        childRoutes: { 'colors.index': E, 'colors.show': P, 'colors.edit': J, 'colors.create': K },
      });
    },
  },
]);
//# sourceMappingURL=1.bundle.js.map
