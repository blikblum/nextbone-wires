(window.webpackJsonp = window.webpackJsonp || []).push([
  [0],
  {
    47: function(t, e, n) {
      'use strict';
      function r(t) {
        return 'string' == typeof t
          ? t.split(/([_A-Z])/).reduce(function(t, e, n) {
              return '' + t + (t && n % 2 != 0 ? '-' : '') + (e = '_' === e ? '' : e).toLowerCase();
            })
          : t;
      }
      var o = function(t) {
        return null == t;
      };
      function i(t) {
        t = t || {};
        var e = Object.getOwnPropertyNames(t);
        return Object.getOwnPropertySymbols ? e.concat(Object.getOwnPropertySymbols(t)) : e;
      }
      function a(t, e) {
        return (-1 === t.indexOf('-') ? 'x-' + t : t) + (e ? '-' + e : '');
      }
      function l() {
        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 'element';
        t = r(t);
        for (var e = 0; customElements.get(a(t, e)); ) ++e;
        return a(t, e);
      }
      function s(t) {
        return customElements.define(t.is || l(), t), t;
      }
      var c =
          Object.assign ||
          function(t) {
            for (var e = 1; e < arguments.length; e++) {
              var n = arguments[e];
              for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
            }
            return t;
          },
        u = { bubbles: !0, cancelable: !0, composed: !1 };
      function f(t, e, n) {
        var r = c({}, u, n),
          o = void 0;
        return (
          'composed' in CustomEvent.prototype
            ? (o = new CustomEvent(e, r))
            : ((o = document.createEvent('CustomEvent')).initCustomEvent(
                e,
                r.bubbles,
                r.cancelable,
                r.detail,
              ),
              Object.defineProperty(o, 'composed', { value: r.composed })),
          t.dispatchEvent(o)
        );
      }
      function d(t) {
        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 'state.';
        return function(n) {
          var r = n.target || (n.composedPath && n.composedPath()[0]),
            o = (function(t) {
              var e = t.checked,
                n = t.type,
                r = t.value;
              return 'checkbox' === n || 'radio' === n ? !!e && (r || !0) : r;
            })(r),
            i = e || r.name || 'value';
          if (i.indexOf('.') > -1) {
            var a = i.split('.'),
              l = a[0],
              s = a.pop();
            (a.reduce(function(t, e) {
              return t[e];
            }, t)[s || r.name] = o),
              (t[l] = t[l]);
          } else t[i] = o;
        };
      }
      function p(t) {
        return t._shadowRoot || (t._shadowRoot = t.shadowRoot || t.attachShadow({ mode: 'open' }));
      }
      var h =
          'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
            ? function(t) {
                return typeof t;
              }
            : function(t) {
                return t &&
                  'function' == typeof Symbol &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? 'symbol'
                  : typeof t;
              },
        v = (function() {
          function t(t, e) {
            for (var n = 0; n < e.length; n++) {
              var r = e[n];
              (r.enumerable = r.enumerable || !1),
                (r.configurable = !0),
                'value' in r && (r.writable = !0),
                Object.defineProperty(t, r.key, r);
            }
          }
          return function(e, n, r) {
            return n && t(e.prototype, n), r && t(e, r), e;
          };
        })(),
        m = function t(e, n, r) {
          null === e && (e = Function.prototype);
          var o = Object.getOwnPropertyDescriptor(e, n);
          if (void 0 === o) {
            var i = Object.getPrototypeOf(e);
            return null === i ? void 0 : t(i, n, r);
          }
          if ('value' in o) return o.value;
          var a = o.get;
          return void 0 !== a ? a.call(r) : void 0;
        };
      var y,
        g,
        b,
        w,
        _ = ((y = Object),
        (g =
          y.getPrototypeOf ||
          function(t) {
            return t.__proto__;
          }),
        (b =
          y.setPrototypeOf ||
          function(t, e) {
            return (t.__proto__ = e), t;
          }),
        (w =
          'object' === ('undefined' == typeof Reflect ? 'undefined' : h(Reflect))
            ? Reflect.construct
            : function(t, e, n) {
                var r,
                  o = [null];
                return o.push.apply(o, e), (r = t.bind.apply(t, o)), b(new r(), n.prototype);
              }),
        function(t) {
          var e = g(t);
          return b(
            t,
            b(function() {
              return w(e, arguments, g(this).constructor);
            }, e),
          );
        }),
        E = function() {
          var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : HTMLElement;
          return _(
            (function(e) {
              function n() {
                return (
                  (function(t, e) {
                    if (!(t instanceof e)) throw new TypeError('Cannot call a class as a function');
                  })(this, n),
                  (function(t, e) {
                    if (!t)
                      throw new ReferenceError(
                        "this hasn't been initialised - super() hasn't been called",
                      );
                    return !e || ('object' != typeof e && 'function' != typeof e) ? t : e;
                  })(this, (n.__proto__ || Object.getPrototypeOf(n)).apply(this, arguments))
                );
              }
              return (
                (function(t, e) {
                  if ('function' != typeof e && null !== e)
                    throw new TypeError(
                      'Super expression must either be null or a function, not ' + typeof e,
                    );
                  (t.prototype = Object.create(e && e.prototype, {
                    constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 },
                  })),
                    e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : (t.__proto__ = e));
                })(n, t),
                v(n, [
                  {
                    key: 'childrenUpdated',
                    value: function() {
                      m(
                        n.prototype.__proto__ || Object.getPrototypeOf(n.prototype),
                        'childrenUpdated',
                        this,
                      ) &&
                        m(
                          n.prototype.__proto__ || Object.getPrototypeOf(n.prototype),
                          'childrenUpdated',
                          this,
                        ).call(this),
                        this.props &&
                          this.props.hasOwnProperty('children') &&
                          (this.props = { children: this.children });
                    },
                  },
                  {
                    key: 'connectedCallback',
                    value: function() {
                      if (
                        (m(
                          n.prototype.__proto__ || Object.getPrototypeOf(n.prototype),
                          'connectedCallback',
                          this,
                        ) &&
                          m(
                            n.prototype.__proto__ || Object.getPrototypeOf(n.prototype),
                            'connectedCallback',
                            this,
                          ).call(this),
                        this.childrenUpdated)
                      ) {
                        var t = this.childrenUpdated.bind(this);
                        (this._mo = new MutationObserver(t)),
                          this._mo.observe(this, { childList: !0 }),
                          t();
                      }
                    },
                  },
                  {
                    key: 'disconnectedCallback',
                    value: function() {
                      m(
                        n.prototype.__proto__ || Object.getPrototypeOf(n.prototype),
                        'disconnectedCallback',
                        this,
                      ) &&
                        m(
                          n.prototype.__proto__ || Object.getPrototypeOf(n.prototype),
                          'disconnectedCallback',
                          this,
                        ).call(this),
                        this._mo && this._mo.disconnect();
                    },
                  },
                ]),
                n
              );
            })(),
          );
        },
        N =
          'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
            ? function(t) {
                return typeof t;
              }
            : function(t) {
                return t &&
                  'function' == typeof Symbol &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? 'symbol'
                  : typeof t;
              },
        C = (function() {
          function t(t, e) {
            for (var n = 0; n < e.length; n++) {
              var r = e[n];
              (r.enumerable = r.enumerable || !1),
                (r.configurable = !0),
                'value' in r && (r.writable = !0),
                Object.defineProperty(t, r.key, r);
            }
          }
          return function(e, n, r) {
            return n && t(e.prototype, n), r && t(e, r), e;
          };
        })();
      var S = (function(t) {
          var e =
              t.getPrototypeOf ||
              function(t) {
                return t.__proto__;
              },
            n =
              t.setPrototypeOf ||
              function(t, e) {
                return (t.__proto__ = e), t;
              },
            r =
              'object' === ('undefined' == typeof Reflect ? 'undefined' : N(Reflect))
                ? Reflect.construct
                : function(t, e, r) {
                    var o,
                      i = [null];
                    return i.push.apply(i, e), (o = t.bind.apply(t, i)), n(new o(), r.prototype);
                  };
          return function(t) {
            var o = e(t);
            return n(
              t,
              n(function() {
                return r(o, arguments, e(this).constructor);
              }, o),
            );
          };
        })(Object),
        O = function() {
          var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : HTMLElement;
          return S(
            (function(e) {
              function n() {
                return (
                  (function(t, e) {
                    if (!(t instanceof e)) throw new TypeError('Cannot call a class as a function');
                  })(this, n),
                  (function(t, e) {
                    if (!t)
                      throw new ReferenceError(
                        "this hasn't been initialised - super() hasn't been called",
                      );
                    return !e || ('object' != typeof e && 'function' != typeof e) ? t : e;
                  })(this, (n.__proto__ || Object.getPrototypeOf(n)).apply(this, arguments))
                );
              }
              return (
                (function(t, e) {
                  if ('function' != typeof e && null !== e)
                    throw new TypeError(
                      'Super expression must either be null or a function, not ' + typeof e,
                    );
                  (t.prototype = Object.create(e && e.prototype, {
                    constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 },
                  })),
                    e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : (t.__proto__ = e));
                })(n, t),
                C(n, [
                  {
                    key: 'context',
                    get: function() {
                      if (this._context) return this._context;
                      for (var t = this; (t = t.parentNode || t.host); )
                        if ('context' in t) return t.context;
                      return {};
                    },
                    set: function(t) {
                      this._context = t;
                    },
                  },
                ]),
                n
              );
            })(),
          );
        },
        T =
          'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
            ? function(t) {
                return typeof t;
              }
            : function(t) {
                return t &&
                  'function' == typeof Symbol &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? 'symbol'
                  : typeof t;
              },
        x = (function() {
          function t(t, e) {
            for (var n = 0; n < e.length; n++) {
              var r = e[n];
              (r.enumerable = r.enumerable || !1),
                (r.configurable = !0),
                'value' in r && (r.writable = !0),
                Object.defineProperty(t, r.key, r);
            }
          }
          return function(e, n, r) {
            return n && t(e.prototype, n), r && t(e, r), e;
          };
        })(),
        j = function t(e, n, r) {
          null === e && (e = Function.prototype);
          var o = Object.getOwnPropertyDescriptor(e, n);
          if (void 0 === o) {
            var i = Object.getPrototypeOf(e);
            return null === i ? void 0 : t(i, n, r);
          }
          if ('value' in o) return o.value;
          var a = o.get;
          return void 0 !== a ? a.call(r) : void 0;
        };
      var D = (function(t) {
          var e =
              t.getPrototypeOf ||
              function(t) {
                return t.__proto__;
              },
            n =
              t.setPrototypeOf ||
              function(t, e) {
                return (t.__proto__ = e), t;
              },
            r =
              'object' === ('undefined' == typeof Reflect ? 'undefined' : T(Reflect))
                ? Reflect.construct
                : function(t, e, r) {
                    var o,
                      i = [null];
                    return i.push.apply(i, e), (o = t.bind.apply(t, i)), n(new o(), r.prototype);
                  };
          return function(t) {
            var o = e(t);
            return n(
              t,
              n(function() {
                return r(o, arguments, e(this).constructor);
              }, o),
            );
          };
        })(Object),
        M = function() {
          var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : HTMLElement;
          return D(
            (function(e) {
              function n() {
                return (
                  (function(t, e) {
                    if (!(t instanceof e)) throw new TypeError('Cannot call a class as a function');
                  })(this, n),
                  (function(t, e) {
                    if (!t)
                      throw new ReferenceError(
                        "this hasn't been initialised - super() hasn't been called",
                      );
                    return !e || ('object' != typeof e && 'function' != typeof e) ? t : e;
                  })(this, (n.__proto__ || Object.getPrototypeOf(n)).apply(this, arguments))
                );
              }
              return (
                (function(t, e) {
                  if ('function' != typeof e && null !== e)
                    throw new TypeError(
                      'Super expression must either be null or a function, not ' + typeof e,
                    );
                  (t.prototype = Object.create(e && e.prototype, {
                    constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 },
                  })),
                    e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : (t.__proto__ = e));
                })(n, t),
                x(n, [
                  {
                    key: 'connectedCallback',
                    value: function() {
                      this.connecting && this.connecting(),
                        j(
                          n.prototype.__proto__ || Object.getPrototypeOf(n.prototype),
                          'connectedCallback',
                          this,
                        ) &&
                          j(
                            n.prototype.__proto__ || Object.getPrototypeOf(n.prototype),
                            'connectedCallback',
                            this,
                          ).call(this),
                        this.connected && this.connected();
                    },
                  },
                  {
                    key: 'disconnectedCallback',
                    value: function() {
                      this.disconnecting && this.disconnecting(),
                        j(
                          n.prototype.__proto__ || Object.getPrototypeOf(n.prototype),
                          'disconnectedCallback',
                          this,
                        ) &&
                          j(
                            n.prototype.__proto__ || Object.getPrototypeOf(n.prototype),
                            'disconnectedCallback',
                            this,
                          ).call(this),
                        this.disconnected && this.disconnected();
                    },
                  },
                ]),
                n
              );
            })(),
          );
        },
        P = (function() {
          function t(t, e) {
            for (var n = 0; n < e.length; n++) {
              var r = e[n];
              (r.enumerable = r.enumerable || !1),
                (r.configurable = !0),
                'value' in r && (r.writable = !0),
                Object.defineProperty(t, r.key, r);
            }
          }
          return function(e, n, r) {
            return n && t(e.prototype, n), r && t(e, r), e;
          };
        })(),
        A = function t(e, n, r) {
          null === e && (e = Function.prototype);
          var o = Object.getOwnPropertyDescriptor(e, n);
          if (void 0 === o) {
            var i = Object.getPrototypeOf(e);
            return null === i ? void 0 : t(i, n, r);
          }
          if ('value' in o) return o.value;
          var a = o.get;
          return void 0 !== a ? a.call(r) : void 0;
        },
        k =
          Object.assign ||
          function(t) {
            for (var e = 1; e < arguments.length; e++) {
              var n = arguments[e];
              for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
            }
            return t;
          },
        L =
          'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
            ? function(t) {
                return typeof t;
              }
            : function(t) {
                return t &&
                  'function' == typeof Symbol &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? 'symbol'
                  : typeof t;
              };
      function R(t, e) {
        if (!t)
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !e || ('object' != typeof e && 'function' != typeof e) ? t : e;
      }
      var H = (function(t) {
        var e =
            t.getPrototypeOf ||
            function(t) {
              return t.__proto__;
            },
          n =
            t.setPrototypeOf ||
            function(t, e) {
              return (t.__proto__ = e), t;
            },
          r =
            'object' === ('undefined' == typeof Reflect ? 'undefined' : L(Reflect))
              ? Reflect.construct
              : function(t, e, r) {
                  var o,
                    i = [null];
                  return i.push.apply(i, e), (o = t.bind.apply(t, i)), n(new o(), r.prototype);
                };
        return function(t) {
          var o = e(t);
          return n(
            t,
            n(function() {
              return r(o, arguments, e(this).constructor);
            }, o),
          );
        };
      })(Object);
      function F(t, e) {
        var n = e.attribute,
          o =
            'object' === (void 0 === n ? 'undefined' : L(n)) ? k({}, n) : { source: n, target: n };
        return !0 === o.source && (o.source = r(t)), !0 === o.target && (o.target = r(t)), o;
      }
      function I(t) {
        return t;
      }
      function B(t, e) {
        var n = e.coerce,
          r = e.default,
          o = e.deserialize,
          i = e.serialize;
        return {
          attribute: F(t, e),
          coerce: n || I,
          default: r,
          deserialize: o || I,
          serialize: i || I,
        };
      }
      var U = new Map();
      function V(t) {
        var e = t || {},
          n = function(t, n) {
            var r = t.constructor,
              o = B(n, e);
            r.hasOwnProperty('_propsNormalized') || (r._propsNormalized = {}),
              (r._propsNormalized[n] = o);
            var i = o.attribute,
              a = i.source,
              l = i.target;
            a &&
              (r._observedAttributes.push(a),
              (r._attributeToPropertyMap[a] = n),
              a !== l && (r._attributeToAttributeMap[a] = l)),
              Object.defineProperty(r.prototype, n, {
                configurable: !0,
                get: function() {
                  var t = this._props[n];
                  return null == t ? o.default : t;
                },
                set: function(t) {
                  var e = o.attribute.target,
                    r = o.serialize;
                  if (e) {
                    var i = r ? r(t) : t;
                    null == i ? this.removeAttribute(e) : this.setAttribute(e, i);
                  }
                  (this._props[n] = o.coerce(t)), this.triggerUpdate();
                },
              });
          };
        return (
          Object.keys(e).forEach(function(t) {
            return (n[t] = e[t]);
          }),
          n
        );
      }
      var z = function() {
          var t,
            e,
            n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : HTMLElement;
          return H(
            ((e = t = (function(t) {
              function e() {
                var t, n, r;
                !(function(t, e) {
                  if (!(t instanceof e)) throw new TypeError('Cannot call a class as a function');
                })(this, e);
                for (var o = arguments.length, i = Array(o), a = 0; a < o; a++) i[a] = arguments[a];
                return (
                  (n = r = R(
                    this,
                    (t = e.__proto__ || Object.getPrototypeOf(e)).call.apply(t, [this].concat(i)),
                  )),
                  (r._prevProps = {}),
                  (r._prevState = {}),
                  (r._props = {}),
                  (r._state = {}),
                  R(r, n)
                );
              }
              return (
                (function(t, e) {
                  if ('function' != typeof e && null !== e)
                    throw new TypeError(
                      'Super expression must either be null or a function, not ' + typeof e,
                    );
                  (t.prototype = Object.create(e && e.prototype, {
                    constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 },
                  })),
                    e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : (t.__proto__ = e));
                })(e, n),
                P(
                  e,
                  [
                    {
                      key: 'attributeChangedCallback',
                      value: function(t, n, r) {
                        var o = this.constructor,
                          i = o._attributeToAttributeMap,
                          a = o._attributeToPropertyMap,
                          l = o._propsNormalized;
                        A(
                          e.prototype.__proto__ || Object.getPrototypeOf(e.prototype),
                          'attributeChangedCallback',
                          this,
                        ) &&
                          A(
                            e.prototype.__proto__ || Object.getPrototypeOf(e.prototype),
                            'attributeChangedCallback',
                            this,
                          ).call(this, t, n, r);
                        var s = a[t];
                        if (s) {
                          var c = l[s];
                          if (c) {
                            var u = c.default,
                              f = c.deserialize,
                              d = f ? f(r) : r;
                            (this._props[s] = null == d ? u : d), this.triggerUpdate();
                          }
                        }
                        var p = i[t];
                        p && (null == r ? this.removeAttribute(p) : this.setAttribute(p, r));
                      },
                    },
                    {
                      key: 'connectedCallback',
                      value: function() {
                        A(
                          e.prototype.__proto__ || Object.getPrototypeOf(e.prototype),
                          'connectedCallback',
                          this,
                        ) &&
                          A(
                            e.prototype.__proto__ || Object.getPrototypeOf(e.prototype),
                            'connectedCallback',
                            this,
                          ).call(this),
                          this.triggerUpdate();
                      },
                    },
                    {
                      key: 'shouldUpdate',
                      value: function() {
                        return !0;
                      },
                    },
                    {
                      key: 'triggerUpdate',
                      value: function() {
                        var t,
                          e = this;
                        this._updating ||
                          ((this._updating = !0),
                          (t = function() {
                            var t = e._prevProps,
                              n = e._prevState;
                            e.updating && e.updating(t, n),
                              e.updated && e.shouldUpdate(t, n) && e.updated(t, n),
                              (e._prevProps = e.props),
                              (e._prevState = e.state),
                              (e._updating = !1);
                          }),
                          window.Promise ? Promise.resolve().then(t) : setTimeout(t));
                      },
                    },
                    {
                      key: 'props',
                      get: function() {
                        var t = this;
                        return i(this.constructor.props).reduce(function(e, n) {
                          return (e[n] = t[n]), e;
                        }, {});
                      },
                      set: function(t) {
                        var e = this,
                          n = this.constructor.props;
                        i(t).forEach(function(r) {
                          return r in n && (e[r] = t[r]);
                        });
                      },
                    },
                    {
                      key: 'state',
                      get: function() {
                        return this._state;
                      },
                      set: function(t) {
                        (this._state = t), this.triggerUpdate();
                      },
                    },
                  ],
                  [
                    {
                      key: 'observedAttributes',
                      get: function() {
                        return (
                          (function(t) {
                            if (!t.hasOwnProperty('_propsNormalized')) {
                              var e = t.props;
                              i(e).forEach(function(n) {
                                var r = e[n] || e.any;
                                U.has(r) && (r = U.get(r)),
                                  'function' != typeof r && (r = V(r)),
                                  r({ constructor: t }, n);
                              });
                            }
                          })(this),
                          this._observedAttributes.concat(
                            A(
                              e.__proto__ || Object.getPrototypeOf(e),
                              'observedAttributes',
                              this,
                            ) || [],
                          )
                        );
                      },
                    },
                    {
                      key: 'props',
                      get: function() {
                        return this._props;
                      },
                      set: function(t) {
                        this._props = t;
                      },
                    },
                  ],
                ),
                e
              );
            })()),
            (t._attributeToAttributeMap = {}),
            (t._attributeToPropertyMap = {}),
            (t._observedAttributes = []),
            (t._props = {}),
            e),
          );
        },
        W = JSON.parse,
        q = JSON.stringify,
        G = Object.freeze({ source: !0 }),
        $ = function(t) {
          return o(t) ? 0 : Number(t);
        },
        J = V({ attribute: G }),
        X = V({
          attribute: G,
          coerce: function(t) {
            return Array.isArray(t) ? t : o(t) ? null : [t];
          },
          default: Object.freeze([]),
          deserialize: W,
          serialize: q,
        }),
        K = V({
          attribute: G,
          coerce: Boolean,
          default: !1,
          deserialize: function(t) {
            return !o(t);
          },
          serialize: function(t) {
            return t ? '' : null;
          },
        }),
        Z = V({
          attribute: G,
          default: 0,
          coerce: $,
          deserialize: $,
          serialize: function(t) {
            return o(t) ? null : String(Number(t));
          },
        }),
        Y = V({ attribute: G, default: Object.freeze({}), deserialize: W, serialize: q }),
        Q = V({
          attribute: G,
          default: '',
          coerce: String,
          serialize: function(t) {
            return o(t) ? null : String(t);
          },
        });
      U.set(Array, X), U.set(Boolean, K), U.set(Number, Z), U.set(Object, Y), U.set(String, Q);
      var tt = { any: J, array: X, boolean: K, number: Z, object: Y, string: Q },
        et =
          'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
            ? function(t) {
                return typeof t;
              }
            : function(t) {
                return t &&
                  'function' == typeof Symbol &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? 'symbol'
                  : typeof t;
              },
        nt = (function() {
          function t(t, e) {
            for (var n = 0; n < e.length; n++) {
              var r = e[n];
              (r.enumerable = r.enumerable || !1),
                (r.configurable = !0),
                'value' in r && (r.writable = !0),
                Object.defineProperty(t, r.key, r);
            }
          }
          return function(e, n, r) {
            return n && t(e.prototype, n), r && t(e, r), e;
          };
        })(),
        rt = function t(e, n, r) {
          null === e && (e = Function.prototype);
          var o = Object.getOwnPropertyDescriptor(e, n);
          if (void 0 === o) {
            var i = Object.getPrototypeOf(e);
            return null === i ? void 0 : t(i, n, r);
          }
          if ('value' in o) return o.value;
          var a = o.get;
          return void 0 !== a ? a.call(r) : void 0;
        };
      var ot = (function(t) {
          var e =
              t.getPrototypeOf ||
              function(t) {
                return t.__proto__;
              },
            n =
              t.setPrototypeOf ||
              function(t, e) {
                return (t.__proto__ = e), t;
              },
            r =
              'object' === ('undefined' == typeof Reflect ? 'undefined' : et(Reflect))
                ? Reflect.construct
                : function(t, e, r) {
                    var o,
                      i = [null];
                    return i.push.apply(i, e), (o = t.bind.apply(t, i)), n(new o(), r.prototype);
                  };
          return function(t) {
            var o = e(t);
            return n(
              t,
              n(function() {
                return r(o, arguments, e(this).constructor);
              }, o),
            );
          };
        })(Object),
        it = function() {
          var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : HTMLElement;
          return ot(
            (function(e) {
              function n() {
                return (
                  (function(t, e) {
                    if (!(t instanceof e)) throw new TypeError('Cannot call a class as a function');
                  })(this, n),
                  (function(t, e) {
                    if (!t)
                      throw new ReferenceError(
                        "this hasn't been initialised - super() hasn't been called",
                      );
                    return !e || ('object' != typeof e && 'function' != typeof e) ? t : e;
                  })(this, (n.__proto__ || Object.getPrototypeOf(n)).apply(this, arguments))
                );
              }
              return (
                (function(t, e) {
                  if ('function' != typeof e && null !== e)
                    throw new TypeError(
                      'Super expression must either be null or a function, not ' + typeof e,
                    );
                  (t.prototype = Object.create(e && e.prototype, {
                    constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 },
                  })),
                    e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : (t.__proto__ = e));
                })(n, t),
                nt(n, [
                  {
                    key: 'renderer',
                    value: function(t, e) {
                      rt(
                        n.prototype.__proto__ || Object.getPrototypeOf(n.prototype),
                        'renderer',
                        this,
                      )
                        ? rt(
                            n.prototype.__proto__ || Object.getPrototypeOf(n.prototype),
                            'renderer',
                            this,
                          ).call(this, t, e)
                        : (t.innerHTML = e() || '');
                    },
                  },
                  {
                    key: 'updated',
                    value: function(t, e) {
                      var r = this;
                      rt(
                        n.prototype.__proto__ || Object.getPrototypeOf(n.prototype),
                        'updated',
                        this,
                      ) &&
                        rt(
                          n.prototype.__proto__ || Object.getPrototypeOf(n.prototype),
                          'updated',
                          this,
                        ).call(this, t, e),
                        this.rendering && this.rendering(),
                        this.renderer(this.renderRoot, function() {
                          return r.render && r.render(r);
                        }),
                        this.rendered && this.rendered();
                    },
                  },
                  {
                    key: 'renderRoot',
                    get: function() {
                      return (
                        rt(
                          n.prototype.__proto__ || Object.getPrototypeOf(n.prototype),
                          'renderRoot',
                          this,
                        ) || p(this)
                      );
                    },
                  },
                ]),
                n
              );
            })(),
          );
        },
        at = function() {
          var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : HTMLElement;
          return M(E(O(z(it(t || HTMLElement)))));
        };
      n.d(e, !1, function() {
        return s;
      }),
        n.d(e, !1, function() {
          return f;
        }),
        n.d(e, !1, function() {
          return d;
        }),
        n.d(e, !1, function() {
          return l;
        }),
        n.d(e, !1, function() {
          return p;
        }),
        n.d(e, !1, function() {
          return E;
        }),
        n.d(e, !1, function() {
          return O;
        }),
        n.d(e, 'b', function() {
          return at;
        }),
        n.d(e, !1, function() {
          return M;
        }),
        n.d(e, !1, function() {
          return F;
        }),
        n.d(e, !1, function() {
          return B;
        }),
        n.d(e, !1, function() {
          return V;
        }),
        n.d(e, !1, function() {
          return z;
        }),
        n.d(e, 'a', function() {
          return tt;
        }),
        n.d(e, !1, function() {
          return it;
        });
    },
    48: function(t, e, n) {
      'use strict';
      function r(t, e, n, r, o) {
        return {
          sel: t,
          data: e,
          children: n,
          text: r,
          elm: o,
          key: void 0 === e ? void 0 : e.key,
        };
      }
      n.r(e);
      var o = r,
        i = Array.isArray;
      function a(t) {
        return 'string' == typeof t || 'number' == typeof t;
      }
      var l = {
        createElement: function(t) {
          return document.createElement(t);
        },
        createElementNS: function(t, e) {
          return document.createElementNS(t, e);
        },
        createTextNode: function(t) {
          return document.createTextNode(t);
        },
        createComment: function(t) {
          return document.createComment(t);
        },
        insertBefore: function(t, e, n) {
          t.insertBefore(e, n);
        },
        removeChild: function(t, e) {
          t.removeChild(e);
        },
        appendChild: function(t, e) {
          t.appendChild(e);
        },
        parentNode: function(t) {
          return t.parentNode;
        },
        nextSibling: function(t) {
          return t.nextSibling;
        },
        tagName: function(t) {
          return t.tagName;
        },
        setTextContent: function(t, e) {
          t.textContent = e;
        },
        getTextContent: function(t) {
          return t.textContent;
        },
        isElement: function(t) {
          return 1 === t.nodeType;
        },
        isText: function(t) {
          return 3 === t.nodeType;
        },
        isComment: function(t) {
          return 8 === t.nodeType;
        },
      };
      function s(t, e, n) {
        var o,
          l,
          s,
          c = {};
        if (
          (void 0 !== n
            ? ((c = e), i(n) ? (o = n) : a(n) ? (l = n) : n && n.sel && (o = [n]))
            : void 0 !== e && (i(e) ? (o = e) : a(e) ? (l = e) : e && e.sel ? (o = [e]) : (c = e)),
          void 0 !== o)
        )
          for (s = 0; s < o.length; ++s)
            a(o[s]) && (o[s] = r(void 0, void 0, void 0, o[s], void 0));
        return (
          's' !== t[0] ||
            'v' !== t[1] ||
            'g' !== t[2] ||
            (3 !== t.length && '.' !== t[3] && '#' !== t[3]) ||
            (function t(e, n, r) {
              if (((e.ns = 'http://www.w3.org/2000/svg'), 'foreignObject' !== r && void 0 !== n))
                for (var o = 0; o < n.length; ++o) {
                  var i = n[o].data;
                  void 0 !== i && t(i, n[o].children, n[o].sel);
                }
            })(c, o, t),
          r(t, c, o, l, void 0)
        );
      }
      function c(t, e) {
        (e.elm = t.elm),
          (t.data.fn = e.data.fn),
          (t.data.args = e.data.args),
          (e.data = t.data),
          (e.children = t.children),
          (e.text = t.text),
          (e.elm = t.elm);
      }
      function u(t) {
        var e = t.data;
        c(e.fn.apply(void 0, e.args), t);
      }
      function f(t, e) {
        var n,
          r = t.data,
          o = e.data,
          i = r.args,
          a = o.args;
        if (r.fn === o.fn && i.length === a.length) {
          for (n = 0; n < a.length; ++n) if (i[n] !== a[n]) return void c(o.fn.apply(void 0, a), e);
          c(t, e);
        } else c(o.fn.apply(void 0, a), e);
      }
      var d = function(t, e, n, r) {
        return (
          void 0 === r && ((r = n), (n = e), (e = void 0)),
          s(t, { key: e, hook: { init: u, prepatch: f }, fn: n, args: r })
        );
      };
      function p(t) {
        return void 0 === t;
      }
      function h(t) {
        return void 0 !== t;
      }
      n.d(e, 'init', function() {
        return b;
      }),
        n.d(e, 'h', function() {
          return s;
        }),
        n.d(e, 'thunk', function() {
          return d;
        });
      var v = o('', {}, [], void 0, void 0);
      function m(t, e) {
        return t.key === e.key && t.sel === e.sel;
      }
      function y(t, e, n) {
        var r,
          o,
          i,
          a = {};
        for (r = e; r <= n; ++r) null != (i = t[r]) && void 0 !== (o = i.key) && (a[o] = r);
        return a;
      }
      var g = ['create', 'update', 'remove', 'destroy', 'pre', 'post'];
      function b(t, e) {
        var n,
          r,
          s = {},
          c = void 0 !== e ? e : l;
        for (n = 0; n < g.length; ++n)
          for (s[g[n]] = [], r = 0; r < t.length; ++r) {
            var u = t[r][g[n]];
            void 0 !== u && s[g[n]].push(u);
          }
        function f(t, e) {
          return function() {
            if (0 == --e) {
              var n = c.parentNode(t);
              c.removeChild(n, t);
            }
          };
        }
        function d(t, e) {
          var n,
            r = t.data;
          void 0 !== r && h((n = r.hook)) && h((n = n.init)) && (n(t), (r = t.data));
          var o = t.children,
            l = t.sel;
          if ('!' === l) p(t.text) && (t.text = ''), (t.elm = c.createComment(t.text));
          else if (void 0 !== l) {
            var u = l.indexOf('#'),
              f = l.indexOf('.', u),
              m = u > 0 ? u : l.length,
              y = f > 0 ? f : l.length,
              g = -1 !== u || -1 !== f ? l.slice(0, Math.min(m, y)) : l,
              b = (t.elm = h(r) && h((n = r.ns)) ? c.createElementNS(n, g) : c.createElement(g));
            for (
              m < y && b.setAttribute('id', l.slice(m + 1, y)),
                f > 0 && b.setAttribute('class', l.slice(y + 1).replace(/\./g, ' ')),
                n = 0;
              n < s.create.length;
              ++n
            )
              s.create[n](v, t);
            if (i(o))
              for (n = 0; n < o.length; ++n) {
                var w = o[n];
                null != w && c.appendChild(b, d(w, e));
              }
            else a(t.text) && c.appendChild(b, c.createTextNode(t.text));
            h((n = t.data.hook)) && (n.create && n.create(v, t), n.insert && e.push(t));
          } else t.elm = c.createTextNode(t.text);
          return t.elm;
        }
        function b(t, e, n, r, o, i) {
          for (; r <= o; ++r) {
            var a = n[r];
            null != a && c.insertBefore(t, d(a, i), e);
          }
        }
        function w(t) {
          var e,
            n,
            r = t.data;
          if (void 0 !== r) {
            for (h((e = r.hook)) && h((e = e.destroy)) && e(t), e = 0; e < s.destroy.length; ++e)
              s.destroy[e](t);
            if (void 0 !== t.children)
              for (n = 0; n < t.children.length; ++n)
                null != (e = t.children[n]) && 'string' != typeof e && w(e);
          }
        }
        function _(t, e, n, r) {
          for (; n <= r; ++n) {
            var o = void 0,
              i = void 0,
              a = void 0,
              l = e[n];
            if (null != l)
              if (h(l.sel)) {
                for (
                  w(l), i = s.remove.length + 1, a = f(l.elm, i), o = 0;
                  o < s.remove.length;
                  ++o
                )
                  s.remove[o](l, a);
                h((o = l.data)) && h((o = o.hook)) && h((o = o.remove)) ? o(l, a) : a();
              } else c.removeChild(t, l.elm);
          }
        }
        function E(t, e, n) {
          var r, o;
          h((r = e.data)) && h((o = r.hook)) && h((r = o.prepatch)) && r(t, e);
          var i = (e.elm = t.elm),
            a = t.children,
            l = e.children;
          if (t !== e) {
            if (void 0 !== e.data) {
              for (r = 0; r < s.update.length; ++r) s.update[r](t, e);
              h((r = e.data.hook)) && h((r = r.update)) && r(t, e);
            }
            p(e.text)
              ? h(a) && h(l)
                ? a !== l &&
                  (function(t, e, n, r) {
                    for (
                      var o,
                        i,
                        a,
                        l = 0,
                        s = 0,
                        u = e.length - 1,
                        f = e[0],
                        h = e[u],
                        v = n.length - 1,
                        g = n[0],
                        w = n[v];
                      l <= u && s <= v;

                    )
                      null == f
                        ? (f = e[++l])
                        : null == h
                        ? (h = e[--u])
                        : null == g
                        ? (g = n[++s])
                        : null == w
                        ? (w = n[--v])
                        : m(f, g)
                        ? (E(f, g, r), (f = e[++l]), (g = n[++s]))
                        : m(h, w)
                        ? (E(h, w, r), (h = e[--u]), (w = n[--v]))
                        : m(f, w)
                        ? (E(f, w, r),
                          c.insertBefore(t, f.elm, c.nextSibling(h.elm)),
                          (f = e[++l]),
                          (w = n[--v]))
                        : m(h, g)
                        ? (E(h, g, r), c.insertBefore(t, h.elm, f.elm), (h = e[--u]), (g = n[++s]))
                        : (void 0 === o && (o = y(e, l, u)),
                          p((i = o[g.key]))
                            ? (c.insertBefore(t, d(g, r), f.elm), (g = n[++s]))
                            : ((a = e[i]).sel !== g.sel
                                ? c.insertBefore(t, d(g, r), f.elm)
                                : (E(a, g, r), (e[i] = void 0), c.insertBefore(t, a.elm, f.elm)),
                              (g = n[++s])));
                    (l <= u || s <= v) &&
                      (l > u
                        ? b(t, null == n[v + 1] ? null : n[v + 1].elm, n, s, v, r)
                        : _(t, e, l, u));
                  })(i, a, l, n)
                : h(l)
                ? (h(t.text) && c.setTextContent(i, ''), b(i, null, l, 0, l.length - 1, n))
                : h(a)
                ? _(i, a, 0, a.length - 1)
                : h(t.text) && c.setTextContent(i, '')
              : t.text !== e.text && c.setTextContent(i, e.text),
              h(o) && h((r = o.postpatch)) && r(t, e);
          }
        }
        return function(t, e) {
          var n,
            r,
            i,
            a = [];
          for (n = 0; n < s.pre.length; ++n) s.pre[n]();
          for (
            (function(t) {
              return void 0 !== t.sel;
            })(t) ||
              (t = (function(t) {
                var e = t.id ? '#' + t.id : '',
                  n = t.className ? '.' + t.className.split(' ').join('.') : '';
                return o(c.tagName(t).toLowerCase() + e + n, {}, [], void 0, t);
              })(t)),
              m(t, e)
                ? E(t, e, a)
                : ((r = t.elm),
                  (i = c.parentNode(r)),
                  d(e, a),
                  null !== i && (c.insertBefore(i, e.elm, c.nextSibling(r)), _(i, [t], 0, 0))),
              n = 0;
            n < a.length;
            ++n
          )
            a[n].data.hook.insert(a[n]);
          for (n = 0; n < s.post.length; ++n) s.post[n]();
          return e;
        };
      }
    },
    52: function(t, e, n) {
      'use strict';
      Object.defineProperty(e, '__esModule', { value: !0 });
      var r = /[A-Z]/g;
      function o(t, e) {
        var n,
          o = e.elm,
          i = t.data.dataset,
          a = e.data.dataset;
        if ((i || a) && i !== a) {
          (i = i || {}), (a = a || {});
          var l = o.dataset;
          for (n in i)
            a[n] ||
              (l
                ? n in l && delete l[n]
                : o.removeAttribute('data-' + n.replace(r, '-$&').toLowerCase()));
          for (n in a)
            i[n] !== a[n] &&
              (l
                ? (l[n] = a[n])
                : o.setAttribute('data-' + n.replace(r, '-$&').toLowerCase(), a[n]));
        }
      }
      (e.datasetModule = { create: o, update: o }), (e.default = e.datasetModule);
    },
    53: function(t, e, n) {
      'use strict';
      Object.defineProperty(e, '__esModule', { value: !0 });
      var r = ('undefined' != typeof window && window.requestAnimationFrame) || setTimeout,
        o = function(t) {
          r(function() {
            r(t);
          });
        },
        i = !1;
      function a(t, e, n) {
        o(function() {
          t[e] = n;
        });
      }
      function l(t, e) {
        var n,
          r,
          o = e.elm,
          i = t.data.style,
          l = e.data.style;
        if ((i || l) && i !== l) {
          (i = i || {}), (l = l || {});
          var s = 'delayed' in i;
          for (r in i)
            l[r] || ('-' === r[0] && '-' === r[1] ? o.style.removeProperty(r) : (o.style[r] = ''));
          for (r in l)
            if (((n = l[r]), 'delayed' === r && l.delayed))
              for (var c in l.delayed)
                (n = l.delayed[c]), (s && n === i.delayed[c]) || a(o.style, c, n);
            else
              'remove' !== r &&
                n !== i[r] &&
                ('-' === r[0] && '-' === r[1] ? o.style.setProperty(r, n) : (o.style[r] = n));
        }
      }
      (e.styleModule = {
        pre: function() {
          i = !1;
        },
        create: l,
        update: l,
        destroy: function(t) {
          var e,
            n,
            r = t.elm,
            o = t.data.style;
          if (o && (e = o.destroy)) for (n in e) r.style[n] = e[n];
        },
        remove: function(t, e) {
          var n = t.data.style;
          if (n && n.remove) {
            i || (getComputedStyle(document.body).transform, (i = !0));
            var r,
              o = t.elm,
              a = 0,
              l = n.remove,
              s = 0,
              c = [];
            for (r in l) c.push(r), (o.style[r] = l[r]);
            for (var u = getComputedStyle(o)['transition-property'].split(', '); a < u.length; ++a)
              -1 !== c.indexOf(u[a]) && s++;
            o.addEventListener('transitionend', function(t) {
              t.target === o && --s, 0 === s && e();
            });
          } else e();
        },
      }),
        (e.default = e.styleModule);
    },
    54: function(t, e, n) {
      'use strict';
      function r(t, e) {
        var n,
          r,
          o = e.elm,
          i = t.data.props,
          a = e.data.props;
        if ((i || a) && i !== a) {
          for (n in ((i = i || {}), (a = a || {}), i)) a[n] || delete o[n];
          for (n in a) (r = a[n]), i[n] === r || ('value' === n && o[n] === r) || (o[n] = r);
        }
      }
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.propsModule = { create: r, update: r }),
        (e.default = e.propsModule);
    },
    55: function(t, e, n) {
      'use strict';
      function r(t, e) {
        var n,
          r,
          o = e.elm,
          i = t.data.class,
          a = e.data.class;
        if ((i || a) && i !== a) {
          for (r in ((i = i || {}), (a = a || {}), i)) a[r] || o.classList.remove(r);
          for (r in a) (n = a[r]) !== i[r] && o.classList[n ? 'add' : 'remove'](r);
        }
      }
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.classModule = { create: r, update: r }),
        (e.default = e.classModule);
    },
    56: function(t, e, n) {
      'use strict';
      function r(t, e) {
        var n = t.type,
          r = e.data.on;
        r &&
          r[n] &&
          (function t(e, n, r) {
            if ('function' == typeof e) e.call(n, r, n);
            else if ('object' == typeof e)
              if ('function' == typeof e[0])
                if (2 === e.length) e[0].call(n, e[1], r, n);
                else {
                  var o = e.slice(1);
                  o.push(r), o.push(n), e[0].apply(n, o);
                }
              else for (var i = 0; i < e.length; i++) t(e[i]);
          })(r[n], e, t);
      }
      function o(t, e) {
        var n,
          o = t.data.on,
          i = t.listener,
          a = t.elm,
          l = e && e.data.on,
          s = e && e.elm;
        if (o !== l) {
          if (o && i)
            if (l) for (n in o) l[n] || a.removeEventListener(n, i, !1);
            else for (n in o) a.removeEventListener(n, i, !1);
          if (l) {
            var c = (e.listener =
              t.listener ||
              function t(e) {
                r(e, t.vnode);
              });
            if (((c.vnode = e), o)) for (n in l) o[n] || s.addEventListener(n, c, !1);
            else for (n in l) s.addEventListener(n, c, !1);
          }
        }
      }
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.eventListenersModule = { create: o, update: o, destroy: o }),
        (e.default = e.eventListenersModule);
    },
    57: function(t, e, n) {
      'use strict';
      Object.defineProperty(e, '__esModule', { value: !0 });
      var r = 'http://www.w3.org/1999/xlink',
        o = 'http://www.w3.org/XML/1998/namespace',
        i = 58,
        a = 120;
      function l(t, e) {
        var n,
          l = e.elm,
          s = t.data.attrs,
          c = e.data.attrs;
        if ((s || c) && s !== c) {
          for (n in ((s = s || {}), (c = c || {}))) {
            var u = c[n];
            s[n] !== u &&
              (!0 === u
                ? l.setAttribute(n, '')
                : !1 === u
                ? l.removeAttribute(n)
                : n.charCodeAt(0) !== a
                ? l.setAttribute(n, u)
                : n.charCodeAt(3) === i
                ? l.setAttributeNS(o, n, u)
                : n.charCodeAt(5) === i
                ? l.setAttributeNS(r, n, u)
                : l.setAttribute(n, u));
          }
          for (n in s) n in c || l.removeAttribute(n);
        }
      }
      (e.attributesModule = { create: l, update: l }), (e.default = e.attributesModule);
    },
    58: function(t, e, n) {
      'use strict';
      function r(t, e, n, r, o) {
        return {
          sel: t,
          data: e,
          children: n,
          text: r,
          elm: o,
          key: void 0 === e ? void 0 : e.key,
        };
      }
      Object.defineProperty(e, '__esModule', { value: !0 }), (e.vnode = r), (e.default = r);
    },
    59: function(t, e, n) {
      var r = n(48).init,
        o = n(58).default;
      t.exports = function(t) {
        var e = r(t);
        return function(t, n) {
          var r,
            i = this.thisAsState ? this : n,
            a = t.call(this, i);
          if (
            (this.outerRender
              ? (r = a.sel)
              : ((r = this.tagName), (a = o(r, {}, Array.isArray(a) ? a : [a], void 0, this.el))),
            this.elTree)
          )
            e(this.elTree, a);
          else {
            var l = o(r, {}, [], void 0, this.el);
            e(l, a),
              this.on('destroy', () => {
                e(this.elTree, o(r, {}, [], void 0, this.el));
              });
          }
          this.elTree = a;
        };
      };
    },
    61: function(t, e) {
      /**
@license @nocompile
Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
      !(function() {
        'use strict';
        !(function() {
          if (
            void 0 === window.Reflect ||
            void 0 === window.customElements ||
            window.customElements.hasOwnProperty('polyfillWrapFlushCallback')
          )
            return;
          const t = HTMLElement;
          (window.HTMLElement = function() {
            return Reflect.construct(t, [], this.constructor);
          }),
            (HTMLElement.prototype = t.prototype),
            (HTMLElement.prototype.constructor = HTMLElement),
            Object.setPrototypeOf(HTMLElement, t);
        })();
      })();
    },
    62: function(t, e, n) {
      (function(t) {
        /**
@license @nocompile
Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
        (function() {
          'use strict';
          var e,
            n =
              'function' == typeof Object.defineProperties
                ? Object.defineProperty
                : function(t, e, n) {
                    t != Array.prototype && t != Object.prototype && (t[e] = n.value);
                  },
            r =
              'undefined' != typeof window && window === this
                ? this
                : void 0 !== t && null != t
                ? t
                : this;
          function o() {
            (o = function() {}), r.Symbol || (r.Symbol = a);
          }
          var i,
            a = ((i = 0),
            function(t) {
              return 'jscomp_symbol_' + (t || '') + i++;
            });
          function l() {
            o();
            var t = r.Symbol.iterator;
            t || (t = r.Symbol.iterator = r.Symbol('iterator')),
              'function' != typeof Array.prototype[t] &&
                n(Array.prototype, t, {
                  configurable: !0,
                  writable: !0,
                  value: function() {
                    return s(this);
                  },
                }),
              (l = function() {});
          }
          function s(t) {
            var e = 0;
            return (function(t) {
              return (
                l(),
                ((t = { next: t })[r.Symbol.iterator] = function() {
                  return this;
                }),
                t
              );
            })(function() {
              return e < t.length ? { done: !1, value: t[e++] } : { done: !0 };
            });
          }
          function c(t) {
            l(), o(), l();
            var e = t[Symbol.iterator];
            return e ? e.call(t) : s(t);
          }
          function u() {
            (this.ea = this.root = null),
              (this.P = !1),
              (this.w = this.M = this.X = this.assignedSlot = this.assignedNodes = this.D = null),
              (this.childNodes = this.nextSibling = this.previousSibling = this.lastChild = this.firstChild = this.parentNode = this.H = void 0),
              (this.ja = this.aa = !1),
              (this.L = {});
          }
          function f(t) {
            return t.__shady || (t.__shady = new u()), t.__shady;
          }
          function d(t) {
            return t && t.__shady;
          }
          u.prototype.toJSON = function() {
            return {};
          };
          var p = window.ShadyDOM || {};
          p.ua = !(!Element.prototype.attachShadow || !Node.prototype.getRootNode);
          var h = Object.getOwnPropertyDescriptor(Node.prototype, 'firstChild');
          (p.s = !!(h && h.configurable && h.get)), (p.Y = p.force || !p.ua);
          var v = navigator.userAgent.match('Trident'),
            m = navigator.userAgent.match('Edge');
          function y(t) {
            return (t = d(t)) && void 0 !== t.firstChild;
          }
          function g(t) {
            return 'ShadyRoot' === t.oa;
          }
          function b(t) {
            if (g((t = t.getRootNode()))) return t;
          }
          void 0 === p.ga && (p.ga = p.s && (v || m));
          var w = Element.prototype,
            _ =
              w.matches ||
              w.matchesSelector ||
              w.mozMatchesSelector ||
              w.msMatchesSelector ||
              w.oMatchesSelector ||
              w.webkitMatchesSelector;
          function E(t, e) {
            if (t && e)
              for (
                var n = Object.getOwnPropertyNames(e), r = 0, o = void 0;
                r < n.length && (o = n[r]);
                r++
              ) {
                var i = o,
                  a = t,
                  l = Object.getOwnPropertyDescriptor(e, i);
                l && Object.defineProperty(a, i, l);
              }
          }
          function N(t, e) {
            for (var n = [], r = 1; r < arguments.length; ++r) n[r - 1] = arguments[r];
            for (r = 0; r < n.length; r++) E(t, n[r]);
            return t;
          }
          var C = document.createTextNode(''),
            S = 0,
            O = [];
          function T(t) {
            O.push(t), (C.textContent = S++);
          }
          new MutationObserver(function() {
            for (; O.length; )
              try {
                O.shift()();
              } catch (t) {
                throw ((C.textContent = S++), t);
              }
          }).observe(C, { characterData: !0 });
          var x = !!document.contains;
          function j(t, e) {
            for (; e; ) {
              if (e == t) return !0;
              e = e.parentNode;
            }
            return !1;
          }
          function D(t) {
            for (var e = t.length - 1; 0 <= e; e--) {
              var n = t[e],
                r = n.getAttribute('id') || n.getAttribute('name');
              r && 'length' !== r && isNaN(r) && (t[r] = n);
            }
            return (
              (t.item = function(e) {
                return t[e];
              }),
              (t.namedItem = function(e) {
                if ('length' !== e && isNaN(e) && t[e]) return t[e];
                for (var n = c(t), r = n.next(); !r.done; r = n.next())
                  if (((r = r.value).getAttribute('id') || r.getAttribute('name')) == e) return r;
                return null;
              }),
              t
            );
          }
          var M,
            P = [];
          function A(t) {
            M || ((M = !0), T(k)), P.push(t);
          }
          function k() {
            M = !1;
            for (var t = !!P.length; P.length; ) P.shift()();
            return t;
          }
          function L() {
            (this.a = !1), (this.addedNodes = []), (this.removedNodes = []), (this.O = new Set());
          }
          (k.list = P),
            (L.prototype.flush = function() {
              if (this.a) {
                this.a = !1;
                var t = this.takeRecords();
                t.length &&
                  this.O.forEach(function(e) {
                    e(t);
                  });
              }
            }),
            (L.prototype.takeRecords = function() {
              if (this.addedNodes.length || this.removedNodes.length) {
                var t = [{ addedNodes: this.addedNodes, removedNodes: this.removedNodes }];
                return (this.addedNodes = []), (this.removedNodes = []), t;
              }
              return [];
            });
          var R = Element.prototype.insertBefore,
            H = Element.prototype.replaceChild,
            F = Element.prototype.removeChild,
            I = Element.prototype.setAttribute,
            B = Element.prototype.removeAttribute,
            U = Element.prototype.cloneNode,
            V = Document.prototype.importNode,
            z = Element.prototype.addEventListener,
            W = Element.prototype.removeEventListener,
            q = Window.prototype.addEventListener,
            G = Window.prototype.removeEventListener,
            $ = Element.prototype.dispatchEvent,
            J = Node.prototype.contains || HTMLElement.prototype.contains,
            X = Document.prototype.getElementById,
            K = Element.prototype.querySelector,
            Z = DocumentFragment.prototype.querySelector,
            Y = Document.prototype.querySelector,
            Q = Element.prototype.querySelectorAll,
            tt = DocumentFragment.prototype.querySelectorAll,
            et = Document.prototype.querySelectorAll,
            nt = {};
          (nt.appendChild = Element.prototype.appendChild),
            (nt.insertBefore = R),
            (nt.replaceChild = H),
            (nt.removeChild = F),
            (nt.setAttribute = I),
            (nt.removeAttribute = B),
            (nt.cloneNode = U),
            (nt.importNode = V),
            (nt.addEventListener = z),
            (nt.removeEventListener = W),
            (nt.Ga = q),
            (nt.Ha = G),
            (nt.dispatchEvent = $),
            (nt.contains = J),
            (nt.getElementById = X),
            (nt.Na = K),
            (nt.Qa = Z),
            (nt.La = Y),
            (nt.querySelector = function(t) {
              switch (this.nodeType) {
                case Node.ELEMENT_NODE:
                  return K.call(this, t);
                case Node.DOCUMENT_NODE:
                  return Y.call(this, t);
                default:
                  return Z.call(this, t);
              }
            }),
            (nt.Oa = Q),
            (nt.Ra = tt),
            (nt.Ma = et),
            (nt.querySelectorAll = function(t) {
              switch (this.nodeType) {
                case Node.ELEMENT_NODE:
                  return Q.call(this, t);
                case Node.DOCUMENT_NODE:
                  return et.call(this, t);
                default:
                  return tt.call(this, t);
              }
            });
          var rt = /[&\u00A0"]/g,
            ot = /[&\u00A0<>]/g;
          function it(t) {
            switch (t) {
              case '&':
                return '&amp;';
              case '<':
                return '&lt;';
              case '>':
                return '&gt;';
              case '"':
                return '&quot;';
              case ' ':
                return '&nbsp;';
            }
          }
          function at(t) {
            for (var e = {}, n = 0; n < t.length; n++) e[t[n]] = !0;
            return e;
          }
          var lt = at(
              'area base br col command embed hr img input keygen link meta param source track wbr'.split(
                ' ',
              ),
            ),
            st = at('style script xmp iframe noembed noframes plaintext noscript'.split(' '));
          function ct(t, e) {
            'template' === t.localName && (t = t.content);
            for (
              var n = '', r = e ? e(t) : t.childNodes, o = 0, i = r.length, a = void 0;
              o < i && (a = r[o]);
              o++
            ) {
              t: {
                var l = a,
                  s = t,
                  c = e;
                switch (l.nodeType) {
                  case Node.ELEMENT_NODE:
                    for (
                      var u, f = '<' + (s = l.localName), d = l.attributes, p = 0;
                      (u = d[p]);
                      p++
                    )
                      f += ' ' + u.name + '="' + u.value.replace(rt, it) + '"';
                    (f += '>'), (l = lt[s] ? f : f + ct(l, c) + '</' + s + '>');
                    break t;
                  case Node.TEXT_NODE:
                    (l = l.data), (l = s && st[s.localName] ? l : l.replace(ot, it));
                    break t;
                  case Node.COMMENT_NODE:
                    l = '\x3c!--' + l.data + '--\x3e';
                    break t;
                  default:
                    throw (window.console.error(l), Error('not implemented'));
                }
              }
              n += l;
            }
            return n;
          }
          var ut = document.createTreeWalker(document, NodeFilter.SHOW_ALL, null, !1),
            ft = document.createTreeWalker(document, NodeFilter.SHOW_ELEMENT, null, !1);
          function dt(t) {
            var e = [];
            for (ut.currentNode = t, t = ut.firstChild(); t; ) e.push(t), (t = ut.nextSibling());
            return e;
          }
          var pt = {
            parentNode: function(t) {
              return (ut.currentNode = t), ut.parentNode();
            },
            firstChild: function(t) {
              return (ut.currentNode = t), ut.firstChild();
            },
            lastChild: function(t) {
              return (ut.currentNode = t), ut.lastChild();
            },
            previousSibling: function(t) {
              return (ut.currentNode = t), ut.previousSibling();
            },
            nextSibling: function(t) {
              return (ut.currentNode = t), ut.nextSibling();
            },
          };
          (pt.childNodes = dt),
            (pt.parentElement = function(t) {
              return (ft.currentNode = t), ft.parentNode();
            }),
            (pt.firstElementChild = function(t) {
              return (ft.currentNode = t), ft.firstChild();
            }),
            (pt.lastElementChild = function(t) {
              return (ft.currentNode = t), ft.lastChild();
            }),
            (pt.previousElementSibling = function(t) {
              return (ft.currentNode = t), ft.previousSibling();
            }),
            (pt.nextElementSibling = function(t) {
              return (ft.currentNode = t), ft.nextSibling();
            }),
            (pt.children = function(t) {
              var e = [];
              for (ft.currentNode = t, t = ft.firstChild(); t; ) e.push(t), (t = ft.nextSibling());
              return D(e);
            }),
            (pt.innerHTML = function(t) {
              return ct(t, function(t) {
                return dt(t);
              });
            }),
            (pt.textContent = function(t) {
              switch (t.nodeType) {
                case Node.ELEMENT_NODE:
                case Node.DOCUMENT_FRAGMENT_NODE:
                  t = document.createTreeWalker(t, NodeFilter.SHOW_TEXT, null, !1);
                  for (var e, n = ''; (e = t.nextNode()); ) n += e.nodeValue;
                  return n;
                default:
                  return t.nodeValue;
              }
            });
          var ht = p.s,
            vt = [Node.prototype, Element.prototype, HTMLElement.prototype];
          function mt(t) {
            var e;
            t: {
              for (e = 0; e < vt.length; e++) {
                var n = vt[e];
                if (n.hasOwnProperty(t)) {
                  e = n;
                  break t;
                }
              }
              e = void 0;
            }
            if (!e) throw Error('Could not find descriptor for ' + t);
            return Object.getOwnPropertyDescriptor(e, t);
          }
          var yt = ht
              ? {
                  parentNode: mt('parentNode'),
                  firstChild: mt('firstChild'),
                  lastChild: mt('lastChild'),
                  previousSibling: mt('previousSibling'),
                  nextSibling: mt('nextSibling'),
                  childNodes: mt('childNodes'),
                  parentElement: mt('parentElement'),
                  previousElementSibling: mt('previousElementSibling'),
                  nextElementSibling: mt('nextElementSibling'),
                  innerHTML: mt('innerHTML'),
                  textContent: mt('textContent'),
                  firstElementChild: mt('firstElementChild'),
                  lastElementChild: mt('lastElementChild'),
                  children: mt('children'),
                }
              : {},
            gt = ht
              ? {
                  firstElementChild: Object.getOwnPropertyDescriptor(
                    DocumentFragment.prototype,
                    'firstElementChild',
                  ),
                  lastElementChild: Object.getOwnPropertyDescriptor(
                    DocumentFragment.prototype,
                    'lastElementChild',
                  ),
                  children: Object.getOwnPropertyDescriptor(DocumentFragment.prototype, 'children'),
                }
              : {},
            bt = ht
              ? {
                  firstElementChild: Object.getOwnPropertyDescriptor(
                    Document.prototype,
                    'firstElementChild',
                  ),
                  lastElementChild: Object.getOwnPropertyDescriptor(
                    Document.prototype,
                    'lastElementChild',
                  ),
                  children: Object.getOwnPropertyDescriptor(Document.prototype, 'children'),
                }
              : {},
            wt = {
              da: yt,
              Pa: gt,
              Ka: bt,
              parentNode: function(t) {
                return yt.parentNode.get.call(t);
              },
              firstChild: function(t) {
                return yt.firstChild.get.call(t);
              },
              lastChild: function(t) {
                return yt.lastChild.get.call(t);
              },
              previousSibling: function(t) {
                return yt.previousSibling.get.call(t);
              },
              nextSibling: function(t) {
                return yt.nextSibling.get.call(t);
              },
              childNodes: function(t) {
                return Array.prototype.slice.call(yt.childNodes.get.call(t));
              },
              parentElement: function(t) {
                return yt.parentElement.get.call(t);
              },
              previousElementSibling: function(t) {
                return yt.previousElementSibling.get.call(t);
              },
              nextElementSibling: function(t) {
                return yt.nextElementSibling.get.call(t);
              },
              innerHTML: function(t) {
                return yt.innerHTML.get.call(t);
              },
              textContent: function(t) {
                return yt.textContent.get.call(t);
              },
              children: function(t) {
                switch (t.nodeType) {
                  case Node.DOCUMENT_FRAGMENT_NODE:
                    return gt.children.get.call(t);
                  case Node.DOCUMENT_NODE:
                    return bt.children.get.call(t);
                  default:
                    return yt.children.get.call(t);
                }
              },
              firstElementChild: function(t) {
                switch (t.nodeType) {
                  case Node.DOCUMENT_FRAGMENT_NODE:
                    return gt.firstElementChild.get.call(t);
                  case Node.DOCUMENT_NODE:
                    return bt.firstElementChild.get.call(t);
                  default:
                    return yt.firstElementChild.get.call(t);
                }
              },
              lastElementChild: function(t) {
                switch (t.nodeType) {
                  case Node.DOCUMENT_FRAGMENT_NODE:
                    return gt.lastElementChild.get.call(t);
                  case Node.DOCUMENT_NODE:
                    return bt.lastElementChild.get.call(t);
                  default:
                    return yt.lastElementChild.get.call(t);
                }
              },
            },
            _t = p.ga ? wt : pt;
          function Et(t) {
            for (; t.firstChild; ) t.removeChild(t.firstChild);
          }
          var Nt = p.s,
            Ct = document.implementation.createHTMLDocument('inert'),
            St = Object.getOwnPropertyDescriptor(Node.prototype, 'isConnected'),
            Ot = St && St.get,
            Tt = Object.getOwnPropertyDescriptor(Document.prototype, 'activeElement'),
            xt = {
              parentElement: {
                get: function() {
                  var t = d(this);
                  return (
                    (t = t && t.parentNode) && t.nodeType !== Node.ELEMENT_NODE && (t = null),
                    void 0 !== t ? t : _t.parentElement(this)
                  );
                },
                configurable: !0,
              },
              parentNode: {
                get: function() {
                  var t = d(this);
                  return void 0 !== (t = t && t.parentNode) ? t : _t.parentNode(this);
                },
                configurable: !0,
              },
              nextSibling: {
                get: function() {
                  var t = d(this);
                  return void 0 !== (t = t && t.nextSibling) ? t : _t.nextSibling(this);
                },
                configurable: !0,
              },
              previousSibling: {
                get: function() {
                  var t = d(this);
                  return void 0 !== (t = t && t.previousSibling) ? t : _t.previousSibling(this);
                },
                configurable: !0,
              },
              nextElementSibling: {
                get: function() {
                  var t = d(this);
                  if (t && void 0 !== t.nextSibling) {
                    for (t = this.nextSibling; t && t.nodeType !== Node.ELEMENT_NODE; )
                      t = t.nextSibling;
                    return t;
                  }
                  return _t.nextElementSibling(this);
                },
                configurable: !0,
              },
              previousElementSibling: {
                get: function() {
                  var t = d(this);
                  if (t && void 0 !== t.previousSibling) {
                    for (t = this.previousSibling; t && t.nodeType !== Node.ELEMENT_NODE; )
                      t = t.previousSibling;
                    return t;
                  }
                  return _t.previousElementSibling(this);
                },
                configurable: !0,
              },
            },
            jt = {
              className: {
                get: function() {
                  return this.getAttribute('class') || '';
                },
                set: function(t) {
                  this.setAttribute('class', t);
                },
                configurable: !0,
              },
            },
            Dt = {
              childNodes: {
                get: function() {
                  if (y(this)) {
                    var t = d(this);
                    if (!t.childNodes) {
                      t.childNodes = [];
                      for (var e = this.firstChild; e; e = e.nextSibling) t.childNodes.push(e);
                    }
                    var n = t.childNodes;
                  } else n = _t.childNodes(this);
                  return (
                    (n.item = function(t) {
                      return n[t];
                    }),
                    n
                  );
                },
                configurable: !0,
              },
              childElementCount: {
                get: function() {
                  return this.children.length;
                },
                configurable: !0,
              },
              firstChild: {
                get: function() {
                  var t = d(this);
                  return void 0 !== (t = t && t.firstChild) ? t : _t.firstChild(this);
                },
                configurable: !0,
              },
              lastChild: {
                get: function() {
                  var t = d(this);
                  return void 0 !== (t = t && t.lastChild) ? t : _t.lastChild(this);
                },
                configurable: !0,
              },
              textContent: {
                get: function() {
                  if (y(this)) {
                    for (var t, e = [], n = 0, r = this.childNodes; (t = r[n]); n++)
                      t.nodeType !== Node.COMMENT_NODE && e.push(t.textContent);
                    return e.join('');
                  }
                  return _t.textContent(this);
                },
                set: function(t) {
                  switch (((void 0 !== t && null !== t) || (t = ''), this.nodeType)) {
                    case Node.ELEMENT_NODE:
                    case Node.DOCUMENT_FRAGMENT_NODE:
                      if (!y(this) && Nt) {
                        var e = this.firstChild;
                        (e != this.lastChild || (e && e.nodeType != Node.TEXT_NODE)) && Et(this),
                          wt.da.textContent.set.call(this, t);
                      } else
                        Et(this),
                          (0 < t.length || this.nodeType === Node.ELEMENT_NODE) &&
                            this.appendChild(document.createTextNode(t));
                      break;
                    default:
                      this.nodeValue = t;
                  }
                },
                configurable: !0,
              },
              firstElementChild: {
                get: function() {
                  var t = d(this);
                  if (t && void 0 !== t.firstChild) {
                    for (t = this.firstChild; t && t.nodeType !== Node.ELEMENT_NODE; )
                      t = t.nextSibling;
                    return t;
                  }
                  return _t.firstElementChild(this);
                },
                configurable: !0,
              },
              lastElementChild: {
                get: function() {
                  var t = d(this);
                  if (t && void 0 !== t.lastChild) {
                    for (t = this.lastChild; t && t.nodeType !== Node.ELEMENT_NODE; )
                      t = t.previousSibling;
                    return t;
                  }
                  return _t.lastElementChild(this);
                },
                configurable: !0,
              },
              children: {
                get: function() {
                  return y(this)
                    ? D(
                        Array.prototype.filter.call(this.childNodes, function(t) {
                          return t.nodeType === Node.ELEMENT_NODE;
                        }),
                      )
                    : _t.children(this);
                },
                configurable: !0,
              },
              innerHTML: {
                get: function() {
                  return y(this)
                    ? ct('template' === this.localName ? this.content : this)
                    : _t.innerHTML(this);
                },
                set: function(t) {
                  var e = 'template' === this.localName ? this.content : this;
                  Et(e);
                  var n = this.localName || 'div';
                  for (
                    n =
                      this.namespaceURI && this.namespaceURI !== Ct.namespaceURI
                        ? Ct.createElementNS(this.namespaceURI, n)
                        : Ct.createElement(n),
                      Nt ? wt.da.innerHTML.set.call(n, t) : (n.innerHTML = t),
                      t = 'template' === this.localName ? n.content : n;
                    t.firstChild;

                  )
                    e.appendChild(t.firstChild);
                },
                configurable: !0,
              },
            },
            Mt = {
              shadowRoot: {
                get: function() {
                  var t = d(this);
                  return (t && t.ea) || null;
                },
                configurable: !0,
              },
            },
            Pt = {
              activeElement: {
                get: function() {
                  var t =
                    Tt && Tt.get ? Tt.get.call(document) : p.s ? void 0 : document.activeElement;
                  if (t && t.nodeType) {
                    var e = !!g(this);
                    if (
                      this === document ||
                      (e && this.host !== t && nt.contains.call(this.host, t))
                    ) {
                      for (e = b(t); e && e !== this; ) e = b((t = e.host));
                      t = this === document ? (e ? null : t) : e === this ? t : null;
                    } else t = null;
                  } else t = null;
                  return t;
                },
                set: function() {},
                configurable: !0,
              },
            };
          function At(t, e, n) {
            for (var r in e) {
              var o = Object.getOwnPropertyDescriptor(t, r);
              (o && o.configurable) || (!o && n)
                ? Object.defineProperty(t, r, e[r])
                : n && console.warn('Could not define', r, 'on', t);
            }
          }
          function kt(t) {
            At(t, xt), At(t, jt), At(t, Dt), At(t, Pt);
          }
          var Lt = p.s
              ? function() {}
              : function(t) {
                  var e = f(t);
                  e.aa || ((e.aa = !0), At(t, xt, !0), At(t, jt, !0));
                },
            Rt = p.s
              ? function() {}
              : function(t) {
                  f(t).ja || (At(t, Dt, !0), At(t, Mt, !0));
                },
            Ht = _t.childNodes;
          function Ft(t, e, n) {
            Lt(t), (n = n || null);
            var r = f(t),
              o = f(e),
              i = n ? f(n) : null;
            (r.previousSibling = n ? i.previousSibling : e.lastChild),
              (i = d(r.previousSibling)) && (i.nextSibling = t),
              (i = d((r.nextSibling = n))) && (i.previousSibling = t),
              (r.parentNode = e),
              n
                ? n === o.firstChild && (o.firstChild = t)
                : ((o.lastChild = t), o.firstChild || (o.firstChild = t)),
              (o.childNodes = null);
          }
          function It(t, e) {
            var n = f(t);
            if (void 0 === n.firstChild)
              for (
                n.childNodes = null,
                  e = e || Ht(t),
                  n.firstChild = e[0] || null,
                  n.lastChild = e[e.length - 1] || null,
                  Rt(t),
                  n = 0;
                n < e.length;
                n++
              ) {
                var r = e[n],
                  o = f(r);
                (o.parentNode = t),
                  (o.nextSibling = e[n + 1] || null),
                  (o.previousSibling = e[n - 1] || null),
                  Lt(r);
              }
          }
          var Bt = _t.parentNode,
            Ut = window.document,
            Vt = p.Ta;
          function zt(t, e, n) {
            if (t.ownerDocument !== Ut && e.ownerDocument !== Ut)
              return nt.insertBefore.call(t, e, n);
            if (e === t)
              throw Error(
                "Failed to execute 'appendChild' on 'Node': The new child element contains the parent.",
              );
            if (n) {
              var r = d(n);
              if ((void 0 !== (r = r && r.parentNode) && r !== t) || (void 0 === r && Bt(n) !== t))
                throw Error(
                  "Failed to execute 'insertBefore' on 'Node': The node before which the new node is to be inserted is not a child of this node.",
                );
            }
            if (n === e) return e;
            var o,
              i = [],
              a = Yt,
              l = b(t);
            if (((o = l ? l.host.localName : te(t)), e.parentNode)) {
              var s = te(e);
              Wt(e.parentNode, e, !(!l && e.getRootNode() instanceof ShadowRoot)),
                (a = function(t, e) {
                  Kt() && (Qt(t, s), Yt(t, e));
                });
            }
            r = !0;
            var u = !(
              (Vt && void 0 !== e.__noInsertionPoint) ||
              (function t(e, n) {
                var r = Kt();
                if (!r) return !0;
                if (e.nodeType === Node.DOCUMENT_FRAGMENT_NODE) {
                  r = !0;
                  for (var o = 0; r && o < e.childNodes.length; o++) r = r && t(e.childNodes[o], n);
                  return r;
                }
                return e.nodeType !== Node.ELEMENT_NODE || r.currentScopeForNode(e) === n;
              })(e, o)
            );
            if (l)
              (e.__noInsertionPoint && !u) ||
                ee(e, function(t) {
                  'slot' === t.localName && i.push(t), u && a(t, o);
                });
            else if (u) {
              var p = te(e);
              ee(e, function(t) {
                var e = o;
                Kt() && (Qt(t, p), Yt(t, e));
              });
            }
            return (
              i.length &&
                (function(t, e) {
                  (t.a = t.a || []),
                    (t.g = t.g || []),
                    (t.h = t.h || {}),
                    t.a.push.apply(
                      t.a,
                      e instanceof Array
                        ? e
                        : (function(t) {
                            for (var e, n = []; !(e = t.next()).done; ) n.push(e.value);
                            return n;
                          })(c(e)),
                    );
                })(l, i),
              ('slot' === t.localName || i.length) && l && Me(l),
              y(t) &&
                ((function(t, e, n) {
                  Rt(e);
                  var r = f(e);
                  if (
                    (void 0 !== r.firstChild && (r.childNodes = null),
                    t.nodeType === Node.DOCUMENT_FRAGMENT_NODE)
                  ) {
                    r = t.childNodes;
                    for (var o = 0; o < r.length; o++) Ft(r[o], e, n);
                    (e = void 0 !== (t = f(t)).firstChild ? null : void 0),
                      (t.firstChild = t.lastChild = e),
                      (t.childNodes = e);
                  } else Ft(t, e, n);
                })(e, t, n),
                (l = d(t)),
                qt(t) ? (Me(l.root), (r = !1)) : l.root && (r = !1)),
              r
                ? ((r = g(t) ? t.host : t),
                  n
                    ? ((n = (function t(e) {
                        var n = e;
                        e &&
                          'slot' === e.localName &&
                          (n = (n = (n = d(e)) && n.w) && n.length ? n[0] : t(e.nextSibling));
                        return n;
                      })(n)),
                      nt.insertBefore.call(r, e, n))
                    : nt.appendChild.call(r, e))
                : e.ownerDocument !== t.ownerDocument && t.ownerDocument.adoptNode(e),
              $t(t, e),
              e
            );
          }
          function Wt(t, e, n) {
            if (((n = void 0 !== n && n), t.ownerDocument !== Ut)) return nt.removeChild.call(t, e);
            if (e.parentNode !== t)
              throw Error('The node to be removed is not a child of this node: ' + e);
            var r = b(e),
              o = d(t);
            if (
              y(t) &&
              ((function(t, e) {
                var n = f(t);
                t === (e = f(e)).firstChild && (e.firstChild = n.nextSibling),
                  t === e.lastChild && (e.lastChild = n.previousSibling),
                  (t = n.previousSibling);
                var r = n.nextSibling;
                t && (f(t).nextSibling = r),
                  r && (f(r).previousSibling = t),
                  (n.parentNode = n.previousSibling = n.nextSibling = void 0),
                  void 0 !== e.childNodes && (e.childNodes = null);
              })(e, t),
              qt(t))
            ) {
              Me(o.root);
              var i = !0;
            }
            if (Kt() && !n && r) {
              var a = te(e);
              ee(e, function(t) {
                Qt(t, a);
              });
            }
            if (
              ((function t(e) {
                var n = d(e);
                if (n && void 0 !== n.H)
                  for (
                    var r = 0, o = (n = e.childNodes).length, i = void 0;
                    r < o && (i = n[r]);
                    r++
                  )
                    t(i);
                (e = d(e)) && (e.H = void 0);
              })(e),
              r)
            ) {
              var l = t && 'slot' === t.localName;
              l && (i = !0),
                ((n = (function(t, e) {
                  if (t.g) {
                    Re(t);
                    var n,
                      r = t.h;
                    for (n in r)
                      for (var o = r[n], i = 0; i < o.length; i++) {
                        var a = o[i];
                        if (j(e, a)) {
                          o.splice(i, 1);
                          var l = t.g.indexOf(a);
                          if ((0 <= l && t.g.splice(l, 1), i--, (a = d(a)), (l = a.w)))
                            for (var s = 0; s < l.length; s++) {
                              var c = l[s],
                                u = Se(c);
                              u && nt.removeChild.call(u, c);
                            }
                          (a.w = []), (a.assignedNodes = []), (l = !0);
                        }
                      }
                    return l;
                  }
                })(r, e)) ||
                  l) &&
                  Me(r);
            }
            return (
              i ||
                ((i = g(t) ? t.host : t),
                ((!o.root && 'slot' !== e.localName) || i === Bt(e)) && nt.removeChild.call(i, e)),
              $t(t, null, e),
              e
            );
          }
          function qt(t) {
            return (t = (t = d(t)) && t.root) && Ie(t);
          }
          function Gt(t, e) {
            if ('slot' === e) qt((t = t.parentNode)) && Me(d(t).root);
            else if ('slot' === t.localName && 'name' === e && (e = b(t))) {
              if (e.g) {
                Re(e);
                var n = t.ma,
                  r = He(t);
                if (r !== n) {
                  var o = (n = e.h[n]).indexOf(t);
                  0 <= o && n.splice(o, 1),
                    (n = e.h[r] || (e.h[r] = [])).push(t),
                    1 < n.length && (e.h[r] = Fe(n));
                }
              }
              Me(e);
            }
          }
          function $t(t, e, n) {
            (t = (t = d(t)) && t.D) &&
              (e && t.addedNodes.push(e),
              n && t.removedNodes.push(n),
              (function(t) {
                t.a ||
                  ((t.a = !0),
                  T(function() {
                    t.flush();
                  }));
              })(t));
          }
          function Jt(t, e, n) {
            var r = [];
            return (
              (function t(e, n, r, o) {
                for (var i = 0, a = e.length, l = void 0; i < a && (l = e[i]); i++) {
                  var s;
                  if ((s = l.nodeType === Node.ELEMENT_NODE)) {
                    var c = n,
                      u = r,
                      f = o,
                      d = c((s = l));
                    d && f.push(s), u && u(d) ? (s = d) : (t(s.childNodes, c, u, f), (s = void 0));
                  }
                  if (s) break;
                }
              })(t.childNodes, e, n, r),
              r
            );
          }
          var Xt = null;
          function Kt() {
            return Xt || (Xt = window.ShadyCSS && window.ShadyCSS.ScopingShim), Xt || null;
          }
          function Zt(t, e, n) {
            if (t.ownerDocument !== Ut) nt.setAttribute.call(t, e, n);
            else {
              var r = Kt();
              r && 'class' === e
                ? r.setElementClass(t, n)
                : (nt.setAttribute.call(t, e, n), Gt(t, e));
            }
          }
          function Yt(t, e) {
            var n = Kt();
            n && n.scopeNode(t, e);
          }
          function Qt(t, e) {
            var n = Kt();
            n && n.unscopeNode(t, e);
          }
          function te(t) {
            if (t.nodeType !== Node.ELEMENT_NODE) return '';
            var e = Kt();
            return e ? e.currentScopeForNode(t) : '';
          }
          function ee(t, e) {
            if (t) {
              t.nodeType === Node.ELEMENT_NODE && e(t);
              for (var n, r = 0; r < t.childNodes.length; r++)
                (n = t.childNodes[r]).nodeType === Node.ELEMENT_NODE && ee(n, e);
            }
          }
          var ne = '__eventWrappers' + Date.now(),
            re = (function() {
              var t = Object.getOwnPropertyDescriptor(Event.prototype, 'composed');
              return t
                ? function(e) {
                    return t.get.call(e);
                  }
                : null;
            })(),
            oe = {
              blur: !0,
              focus: !0,
              focusin: !0,
              focusout: !0,
              click: !0,
              dblclick: !0,
              mousedown: !0,
              mouseenter: !0,
              mouseleave: !0,
              mousemove: !0,
              mouseout: !0,
              mouseover: !0,
              mouseup: !0,
              wheel: !0,
              beforeinput: !0,
              input: !0,
              keydown: !0,
              keyup: !0,
              compositionstart: !0,
              compositionupdate: !0,
              compositionend: !0,
              touchstart: !0,
              touchend: !0,
              touchmove: !0,
              touchcancel: !0,
              pointerover: !0,
              pointerenter: !0,
              pointerdown: !0,
              pointermove: !0,
              pointerup: !0,
              pointercancel: !0,
              pointerout: !0,
              pointerleave: !0,
              gotpointercapture: !0,
              lostpointercapture: !0,
              dragstart: !0,
              drag: !0,
              dragenter: !0,
              dragleave: !0,
              dragover: !0,
              drop: !0,
              dragend: !0,
              DOMActivate: !0,
              DOMFocusIn: !0,
              DOMFocusOut: !0,
              keypress: !0,
            },
            ie = {
              DOMAttrModified: !0,
              DOMAttributeNameChanged: !0,
              DOMCharacterDataModified: !0,
              DOMElementNameChanged: !0,
              DOMNodeInserted: !0,
              DOMNodeInsertedIntoDocument: !0,
              DOMNodeRemoved: !0,
              DOMNodeRemovedFromDocument: !0,
              DOMSubtreeModified: !0,
            };
          function ae(t, e) {
            var n = [],
              r = t;
            for (t = t === window ? window : t.getRootNode(); r; )
              n.push(r),
                (r = r.assignedSlot
                  ? r.assignedSlot
                  : r.nodeType === Node.DOCUMENT_FRAGMENT_NODE && r.host && (e || r !== t)
                  ? r.host
                  : r.parentNode);
            return n[n.length - 1] === document && n.push(window), n;
          }
          function le(t, e) {
            if (!g) return t;
            t = ae(t, !0);
            for (var n, r, o = 0, i = void 0, a = void 0; o < e.length; o++)
              if (
                ((r = (n = e[o]) === window ? window : n.getRootNode()) !== i &&
                  ((a = t.indexOf(r)), (i = r)),
                !g(r) || -1 < a)
              )
                return n;
          }
          var se = {
            get composed() {
              return (
                void 0 === this.K &&
                  (re
                    ? (this.K = 'focusin' === this.type || 'focusout' === this.type || re(this))
                    : !1 !== this.isTrusted && (this.K = oe[this.type])),
                this.K || !1
              );
            },
            composedPath: function() {
              return this.$ || (this.$ = ae(this.__target, this.composed)), this.$;
            },
            get target() {
              return le(this.currentTarget || this.__previousCurrentTarget, this.composedPath());
            },
            get relatedTarget() {
              return this.V
                ? (this.ba || (this.ba = ae(this.V, !0)),
                  le(this.currentTarget || this.__previousCurrentTarget, this.ba))
                : null;
            },
            stopPropagation: function() {
              Event.prototype.stopPropagation.call(this), (this.U = !0);
            },
            stopImmediatePropagation: function() {
              Event.prototype.stopImmediatePropagation.call(this), (this.U = this.ia = !0);
            },
          };
          function ce(t) {
            function e(e, n) {
              return ((e = new t(e, n)).K = n && !!n.composed), e;
            }
            return (
              (function(t, e) {
                for (var n in e) t[n] = e[n];
              })(e, t),
              (e.prototype = t.prototype),
              e
            );
          }
          var ue = { focus: !0, blur: !0 };
          function fe(t) {
            return t.__target !== t.target || t.V !== t.relatedTarget;
          }
          function de(t, e, n) {
            if ((n = e.__handlers && e.__handlers[t.type] && e.__handlers[t.type][n]))
              for (
                var r, o = 0;
                (r = n[o]) && (!fe(t) || t.target !== t.relatedTarget) && (r.call(e, t), !t.ia);
                o++
              );
          }
          function pe(t) {
            var e,
              n = t.composedPath();
            Object.defineProperty(t, 'currentTarget', {
              get: function() {
                return o;
              },
              configurable: !0,
            });
            for (var r = n.length - 1; 0 <= r; r--) {
              var o = n[r];
              if ((de(t, o, 'capture'), t.U)) return;
            }
            for (
              Object.defineProperty(t, 'eventPhase', {
                get: function() {
                  return Event.AT_TARGET;
                },
              }),
                r = 0;
              r < n.length;
              r++
            ) {
              var i = d((o = n[r]));
              if (
                ((i = i && i.root),
                (0 === r || (i && i === e)) &&
                  (de(t, o, 'bubble'), o !== window && (e = o.getRootNode()), t.U))
              )
                break;
            }
          }
          function he(t, e, n, r, o, i) {
            for (var a = 0; a < t.length; a++) {
              var l = t[a],
                s = l.type,
                c = l.capture,
                u = l.once,
                f = l.passive;
              if (e === l.node && n === s && r === c && o === u && i === f) return a;
            }
            return -1;
          }
          function ve(t, e, n) {
            if (e) {
              var r = typeof e;
              if (
                ('function' === r || 'object' === r) &&
                ('object' !== r || (e.handleEvent && 'function' == typeof e.handleEvent))
              ) {
                var o = this instanceof Window ? nt.Ga : nt.addEventListener;
                if (ie[t]) return o.call(this, t, e, n);
                if (n && 'object' == typeof n)
                  var i = !!n.capture,
                    a = !!n.once,
                    l = !!n.passive;
                else (i = !!n), (l = a = !1);
                var s = (n && n.W) || this,
                  c = e[ne];
                if (c) {
                  if (-1 < he(c, s, t, i, a, l)) return;
                } else e[ne] = [];
                (c = function(o) {
                  if ((a && this.removeEventListener(t, e, n), o.__target || ye(o), s !== this)) {
                    var i = Object.getOwnPropertyDescriptor(o, 'currentTarget');
                    Object.defineProperty(o, 'currentTarget', {
                      get: function() {
                        return s;
                      },
                      configurable: !0,
                    });
                  }
                  if (
                    ((o.__previousCurrentTarget = o.currentTarget),
                    (!g(s) || -1 != o.composedPath().indexOf(s)) &&
                      (o.composed || -1 < o.composedPath().indexOf(s)))
                  )
                    if (fe(o) && o.target === o.relatedTarget)
                      o.eventPhase === Event.BUBBLING_PHASE && o.stopImmediatePropagation();
                    else if (
                      o.eventPhase === Event.CAPTURING_PHASE ||
                      o.bubbles ||
                      o.target === s ||
                      s instanceof Window
                    ) {
                      var l = 'function' === r ? e.call(s, o) : e.handleEvent && e.handleEvent(o);
                      return (
                        s !== this &&
                          (i
                            ? (Object.defineProperty(o, 'currentTarget', i), (i = null))
                            : delete o.currentTarget),
                        l
                      );
                    }
                }),
                  e[ne].push({ node: s, type: t, capture: i, once: a, passive: l, Ia: c }),
                  ue[t]
                    ? ((this.__handlers = this.__handlers || {}),
                      (this.__handlers[t] = this.__handlers[t] || { capture: [], bubble: [] }),
                      this.__handlers[t][i ? 'capture' : 'bubble'].push(c))
                    : o.call(this, t, c, n);
              }
            }
          }
          function me(t, e, n) {
            if (e) {
              var r = this instanceof Window ? nt.Ha : nt.removeEventListener;
              if (ie[t]) return r.call(this, t, e, n);
              if (n && 'object' == typeof n)
                var o = !!n.capture,
                  i = !!n.once,
                  a = !!n.passive;
              else (o = !!n), (a = i = !1);
              var l = (n && n.W) || this,
                s = void 0,
                c = null;
              try {
                c = e[ne];
              } catch (t) {}
              c &&
                (-1 < (i = he(c, l, t, o, i, a)) &&
                  ((s = c.splice(i, 1)[0].Ia), c.length || (e[ne] = void 0))),
                r.call(this, t, s || e, n),
                s &&
                  ue[t] &&
                  this.__handlers &&
                  this.__handlers[t] &&
                  (-1 < (s = (t = this.__handlers[t][o ? 'capture' : 'bubble']).indexOf(s)) &&
                    t.splice(s, 1));
            }
          }
          function ye(t) {
            if (((t.__target = t.target), (t.V = t.relatedTarget), p.s)) {
              var e = Object.getPrototypeOf(t);
              if (!e.hasOwnProperty('__patchProto')) {
                var n = Object.create(e);
                (n.Ja = e), E(n, se), (e.__patchProto = n);
              }
              t.__proto__ = e.__patchProto;
            } else E(t, se);
          }
          var ge = ce(window.Event),
            be = ce(window.CustomEvent),
            we = ce(window.MouseEvent);
          function _e(t, e) {
            return { index: t, I: [], N: e };
          }
          function Ee(t, e, n, r) {
            var o = 0,
              i = 0,
              a = 0,
              l = 0,
              s = Math.min(e - o, r - i);
            if (0 == o && 0 == i)
              t: {
                for (a = 0; a < s; a++) if (t[a] !== n[a]) break t;
                a = s;
              }
            if (e == t.length && r == n.length) {
              l = t.length;
              for (var c = n.length, u = 0; u < s - a && Ne(t[--l], n[--c]); ) u++;
              l = u;
            }
            if (((i += a), (r -= l), 0 == (e -= l) - (o += a) && 0 == r - i)) return [];
            if (o == e) {
              for (e = _e(o, 0); i < r; ) e.I.push(n[i++]);
              return [e];
            }
            if (i == r) return [_e(o, e - o)];
            for (r = r - (a = i) + 1, l = e - (s = o) + 1, e = Array(r), c = 0; c < r; c++)
              (e[c] = Array(l)), (e[c][0] = c);
            for (c = 0; c < l; c++) e[0][c] = c;
            for (c = 1; c < r; c++)
              for (u = 1; u < l; u++)
                if (t[s + u - 1] === n[a + c - 1]) e[c][u] = e[c - 1][u - 1];
                else {
                  var f = e[c - 1][u] + 1,
                    d = e[c][u - 1] + 1;
                  e[c][u] = f < d ? f : d;
                }
            for (s = e.length - 1, a = e[0].length - 1, r = e[s][a], t = []; 0 < s || 0 < a; )
              0 == s
                ? (t.push(2), a--)
                : 0 == a
                ? (t.push(3), s--)
                : ((l = e[s - 1][a - 1]),
                  (f = (c = e[s - 1][a]) < (u = e[s][a - 1]) ? (c < l ? c : l) : u < l ? u : l) == l
                    ? (l == r ? t.push(0) : (t.push(1), (r = l)), s--, a--)
                    : f == c
                    ? (t.push(3), s--, (r = c))
                    : (t.push(2), a--, (r = u)));
            for (t.reverse(), e = void 0, s = [], a = 0; a < t.length; a++)
              switch (t[a]) {
                case 0:
                  e && (s.push(e), (e = void 0)), o++, i++;
                  break;
                case 1:
                  e || (e = _e(o, 0)), e.N++, o++, e.I.push(n[i]), i++;
                  break;
                case 2:
                  e || (e = _e(o, 0)), e.N++, o++;
                  break;
                case 3:
                  e || (e = _e(o, 0)), e.I.push(n[i]), i++;
              }
            return e && s.push(e), s;
          }
          function Ne(t, e) {
            return t === e;
          }
          var Ce,
            Se = _t.parentNode,
            Oe = _t.childNodes,
            Te = {},
            xe = p.deferConnectionCallbacks && 'loading' === document.readyState;
          function je(t) {
            var e = [];
            do {
              e.unshift(t);
            } while ((t = t.parentNode));
            return e;
          }
          function De(t, e, n) {
            if (t !== Te) throw new TypeError('Illegal constructor');
            if (
              ((this.oa = 'ShadyRoot'),
              (this.host = e),
              (this.c = n && n.mode),
              It(e, (t = Oe(e))),
              ((n = f(e)).root = this),
              (n.ea = 'closed' !== this.c ? this : null),
              ((n = f(
                this,
              )).firstChild = n.lastChild = n.parentNode = n.nextSibling = n.previousSibling = null),
              (n.childNodes = []),
              (this.b = this.G = !1),
              (this.a = this.h = this.g = null),
              p.preferPerformance)
            ) {
              n = 0;
              for (var r = t.length; n < r; n++) nt.removeChild.call(e, t[n]);
            } else Me(this);
          }
          function Me(t) {
            t.G ||
              ((t.G = !0),
              A(function() {
                return Pe(t);
              }));
          }
          function Pe(t) {
            for (var e; t; ) {
              t.G && (e = t);
              t: {
                var n = t;
                if (g((t = n.host.getRootNode())))
                  for (var r = n.host.childNodes, o = 0; o < r.length; o++)
                    if ('slot' == (n = r[o]).localName) break t;
                t = void 0;
              }
            }
            e && e._renderRoot();
          }
          function Ae(t, e, n) {
            var r = f(e),
              o = r.M;
            (r.M = null),
              n || (n = (t = t.h[e.slot || '__catchall']) && t[0]),
              n ? (f(n).assignedNodes.push(e), (r.assignedSlot = n)) : (r.assignedSlot = void 0),
              o !== r.assignedSlot && r.assignedSlot && (f(r.assignedSlot).P = !0);
          }
          function ke(t, e, n) {
            for (var r = 0, o = void 0; r < n.length && (o = n[r]); r++)
              if ('slot' == o.localName) {
                var i = d(o).assignedNodes;
                i && i.length && ke(t, e, i);
              } else e.push(n[r]);
          }
          function Le(t, e) {
            nt.dispatchEvent.call(e, new Event('slotchange')),
              (e = d(e)).assignedSlot && Le(t, e.assignedSlot);
          }
          function Re(t) {
            if (t.a && t.a.length) {
              for (var e, n = t.a, r = 0; r < n.length; r++) {
                var o = n[r];
                It(o), It(o.parentNode);
                var i = He(o);
                t.h[i] ? (((e = e || {})[i] = !0), t.h[i].push(o)) : (t.h[i] = [o]), t.g.push(o);
              }
              if (e) for (var a in e) t.h[a] = Fe(t.h[a]);
              t.a = [];
            }
          }
          function He(t) {
            var e = t.name || t.getAttribute('name') || '__catchall';
            return (t.ma = e);
          }
          function Fe(t) {
            return t.sort(function(t, e) {
              t = je(t);
              for (var n = je(e), r = 0; r < t.length; r++) {
                e = t[r];
                var o = n[r];
                if (e !== o)
                  return (t = Array.from(e.parentNode.childNodes)).indexOf(e) - t.indexOf(o);
              }
            });
          }
          function Ie(t) {
            return Re(t), !(!t.g || !t.g.length);
          }
          if (
            ((De.prototype._renderRoot = function() {
              var t = xe;
              if (((xe = !0), (this.G = !1), this.g)) {
                Re(this);
                for (var e, n = 0; n < this.g.length; n++) {
                  var r = d((e = this.g[n])),
                    o = r.assignedNodes;
                  if (((r.assignedNodes = []), (r.w = []), (r.X = o)))
                    for (r = 0; r < o.length; r++) {
                      var i = d(o[r]);
                      (i.M = i.assignedSlot), i.assignedSlot === e && (i.assignedSlot = null);
                    }
                }
                for (n = this.host.firstChild; n; n = n.nextSibling) Ae(this, n);
                for (n = 0; n < this.g.length; n++) {
                  if (!(o = d((e = this.g[n]))).assignedNodes.length)
                    for (r = e.firstChild; r; r = r.nextSibling) Ae(this, r, e);
                  if (
                    ((r = (r = d(e.parentNode)) && r.root) && (Ie(r) || r.G) && r._renderRoot(),
                    ke(this, o.w, o.assignedNodes),
                    (r = o.X))
                  ) {
                    for (i = 0; i < r.length; i++) d(r[i]).M = null;
                    (o.X = null), r.length > o.assignedNodes.length && (o.P = !0);
                  }
                  o.P && ((o.P = !1), Le(this, e));
                }
                for (e = this.g, n = [], o = 0; o < e.length; o++)
                  ((i = d((r = e[o].parentNode))) && i.root) || !(0 > n.indexOf(r)) || n.push(r);
                for (e = 0; e < n.length; e++) {
                  (o = (i = n[e]) === this ? this.host : i), (r = []), (i = i.childNodes);
                  for (var a = 0; a < i.length; a++) {
                    var l = i[a];
                    if ('slot' == l.localName) {
                      l = d(l).w;
                      for (var s = 0; s < l.length; s++) r.push(l[s]);
                    } else r.push(l);
                  }
                  (i = Oe(o)), (a = Ee(r, r.length, i, i.length)), (s = l = 0);
                  for (var c = void 0; l < a.length && (c = a[l]); l++) {
                    for (var u = 0, f = void 0; u < c.I.length && (f = c.I[u]); u++)
                      Se(f) === o && nt.removeChild.call(o, f), i.splice(c.index + s, 1);
                    s -= c.N;
                  }
                  for (s = 0, c = void 0; s < a.length && (c = a[s]); s++)
                    for (l = i[c.index], u = c.index; u < c.index + c.N; u++)
                      (f = r[u]), nt.insertBefore.call(o, f, l), i.splice(u, 0, f);
                }
              }
              if (!p.preferPerformance && !this.b)
                for (e = 0, o = (n = this.host.childNodes).length; e < o; e++)
                  (i = d((r = n[e]))),
                    Se(r) !== this.host ||
                      ('slot' !== r.localName && i.assignedSlot) ||
                      nt.removeChild.call(this.host, r);
              (this.b = !0), (xe = t), Ce && Ce();
            }),
            window.customElements && p.Y && !p.preferPerformance)
          ) {
            var Be = new Map();
            (Ce = function() {
              var t = Array.from(Be);
              Be.clear();
              for (var e = (t = c(t)).next(); !e.done; e = t.next()) {
                var n = (e = c(e.value)).next().value;
                e.next().value ? n.ka() : n.la();
              }
            }),
              xe &&
                document.addEventListener(
                  'readystatechange',
                  function() {
                    (xe = !1), Ce();
                  },
                  { once: !0 },
                );
            var Ue = window.customElements.define;
            Object.defineProperty(window.CustomElementRegistry.prototype, 'define', {
              value: function(t, e) {
                var n = e.prototype.connectedCallback,
                  r = e.prototype.disconnectedCallback;
                Ue.call(
                  window.customElements,
                  t,
                  (function(t, e, n) {
                    var r = 0,
                      o = '__isConnected' + r++;
                    return (
                      (e || n) &&
                        ((t.prototype.connectedCallback = t.prototype.ka = function() {
                          xe ? Be.set(this, !0) : this[o] || ((this[o] = !0), e && e.call(this));
                        }),
                        (t.prototype.disconnectedCallback = t.prototype.la = function() {
                          xe
                            ? this.isConnected || Be.set(this, !1)
                            : this[o] && ((this[o] = !1), n && n.call(this));
                        })),
                      t
                    );
                  })(e, n, r),
                ),
                  (e.prototype.connectedCallback = n),
                  (e.prototype.disconnectedCallback = r);
              },
            });
          }
          function Ve(t) {
            var e = t.getRootNode();
            return g(e) && Pe(e), ((t = d(t)) && t.assignedSlot) || null;
          }
          var ze = { addEventListener: ve.bind(window), removeEventListener: me.bind(window) },
            We = {
              addEventListener: ve,
              removeEventListener: me,
              appendChild: function(t) {
                return zt(this, t);
              },
              insertBefore: function(t, e) {
                return zt(this, t, e);
              },
              removeChild: function(t) {
                return Wt(this, t);
              },
              replaceChild: function(t, e) {
                return zt(this, t, e), Wt(this, e), t;
              },
              cloneNode: function(t) {
                if ('template' == this.localName) var e = nt.cloneNode.call(this, t);
                else if (
                  ((e = nt.cloneNode.call(this, !1)), t && e.nodeType !== Node.ATTRIBUTE_NODE)
                ) {
                  t = this.childNodes;
                  for (var n, r = 0; r < t.length; r++) (n = t[r].cloneNode(!0)), e.appendChild(n);
                }
                return e;
              },
              getRootNode: function() {
                return (function t(e) {
                  if (e && e.nodeType) {
                    var n = f(e),
                      r = n.H;
                    return (
                      void 0 === r &&
                        (g(e)
                          ? ((r = e), (n.H = r))
                          : ((r = (r = e.parentNode) ? t(r) : e),
                            nt.contains.call(document.documentElement, e) && (n.H = r))),
                      r
                    );
                  }
                })(this);
              },
              contains: function(t) {
                return j(this, t);
              },
              dispatchEvent: function(t) {
                return k(), nt.dispatchEvent.call(this, t);
              },
            };
          Object.defineProperties(We, {
            isConnected: {
              get: function() {
                if (Ot && Ot.call(this)) return !0;
                if (this.nodeType == Node.DOCUMENT_FRAGMENT_NODE) return !1;
                var t = this.ownerDocument;
                if (x) {
                  if (nt.contains.call(t, this)) return !0;
                } else if (t.documentElement && nt.contains.call(t.documentElement, this))
                  return !0;
                for (t = this; t && !(t instanceof Document); )
                  t = t.parentNode || (g(t) ? t.host : void 0);
                return !!(t && t instanceof Document);
              },
              configurable: !0,
            },
          });
          var qe = {
              get assignedSlot() {
                return Ve(this);
              },
            },
            Ge = {
              querySelector: function(t) {
                return (
                  Jt(
                    this,
                    function(e) {
                      return _.call(e, t);
                    },
                    function(t) {
                      return !!t;
                    },
                  )[0] || null
                );
              },
              querySelectorAll: function(t, e) {
                if (e) {
                  e = Array.prototype.slice.call(nt.querySelectorAll.call(this, t));
                  var n = this.getRootNode();
                  return e.filter(function(t) {
                    return t.getRootNode() == n;
                  });
                }
                return Jt(this, function(e) {
                  return _.call(e, t);
                });
              },
            },
            $e = {},
            Je = {
              assignedNodes: function(t) {
                if ('slot' === this.localName) {
                  var e = this.getRootNode();
                  return (
                    g(e) && Pe(e), ((e = d(this)) && (t && t.flatten ? e.w : e.assignedNodes)) || []
                  );
                }
              },
            },
            Xe = N(
              {
                setAttribute: function(t, e) {
                  Zt(this, t, e);
                },
                removeAttribute: function(t) {
                  nt.removeAttribute.call(this, t), Gt(this, t);
                },
                attachShadow: function(t) {
                  if (!this) throw 'Must provide a host.';
                  if (!t) throw 'Not enough arguments.';
                  return new De(Te, this, t);
                },
                get slot() {
                  return this.getAttribute('slot');
                },
                set slot(t) {
                  Zt(this, 'slot', t);
                },
                get assignedSlot() {
                  return Ve(this);
                },
              },
              Ge,
              Je,
            );
          Object.defineProperties(Xe, Mt);
          var Ke = {
            importNode: function(t, e) {
              return (function t(e, n) {
                if (e.ownerDocument !== document || 'template' === e.localName)
                  return nt.importNode.call(document, e, n);
                var r = nt.importNode.call(document, e, !1);
                if (n) {
                  (e = e.childNodes), (n = 0);
                  for (var o; n < e.length; n++) (o = t(e[n], !0)), r.appendChild(o);
                }
                return r;
              })(t, e);
            },
            getElementById: function(t) {
              return (
                Jt(
                  this,
                  function(e) {
                    return e.id == t;
                  },
                  function(t) {
                    return !!t;
                  },
                )[0] || null
              );
            },
          };
          Object.defineProperties(Ke, { _activeElement: Pt.activeElement });
          for (
            var Ze = HTMLElement.prototype.blur,
              Ye = {
                blur: function() {
                  var t = d(this);
                  (t = (t = t && t.root) && t.activeElement) ? t.blur() : Ze.call(this);
                },
              },
              Qe = {},
              tn = c(Object.getOwnPropertyNames(Document.prototype)),
              en = tn.next();
            !en.done;
            Qe = { m: Qe.m }, en = tn.next()
          )
            (Qe.m = en.value),
              'on' === Qe.m.substring(0, 2) &&
                Object.defineProperty(Ye, Qe.m, {
                  set: (function(t) {
                    return function(e) {
                      var n = f(this),
                        r = t.m.substring(2);
                      n.L[t.m] && this.removeEventListener(r, n.L[t.m]),
                        this.addEventListener(r, e, {}),
                        (n.L[t.m] = e);
                    };
                  })(Qe),
                  get: (function(t) {
                    return function() {
                      var e = d(this);
                      return e && e.L[t.m];
                    };
                  })(Qe),
                  configurable: !0,
                });
          var nn = N(
            {
              addEventListener: function(t, e, n) {
                'object' != typeof n && (n = { capture: !!n }),
                  (n.W = this),
                  this.host.addEventListener(t, e, n);
              },
              removeEventListener: function(t, e, n) {
                'object' != typeof n && (n = { capture: !!n }),
                  (n.W = this),
                  this.host.removeEventListener(t, e, n);
              },
              getElementById: function(t) {
                return (
                  Jt(
                    this,
                    function(e) {
                      return e.id == t;
                    },
                    function(t) {
                      return !!t;
                    },
                  )[0] || null
                );
              },
            },
            Ge,
          );
          function rn(t, e) {
            for (var n = Object.getOwnPropertyNames(e), r = 0; r < n.length; r++) {
              var o = n[r],
                i = Object.getOwnPropertyDescriptor(e, o);
              i.value ? (t[o] = i.value) : Object.defineProperty(t, o, i);
            }
          }
          if ((p.preferPerformance || (N(Ke, Ge), N($e, Ge)), p.Y)) {
            var on = {
              inUse: p.Y,
              patch: function(t) {
                return Rt(t), Lt(t), t;
              },
              isShadyRoot: g,
              enqueue: A,
              flush: k,
              settings: p,
              filterMutations: function(t, e) {
                var n = e.getRootNode();
                return t
                  .map(function(t) {
                    var e = n === t.target.getRootNode();
                    if (e && t.addedNodes) {
                      if (
                        (e = Array.from(t.addedNodes).filter(function(t) {
                          return n === t.getRootNode();
                        })).length
                      )
                        return (
                          (t = Object.create(t)),
                          Object.defineProperty(t, 'addedNodes', { value: e, configurable: !0 }),
                          t
                        );
                    } else if (e) return t;
                  })
                  .filter(function(t) {
                    return t;
                  });
              },
              observeChildren: function(t, e) {
                var n = f(t);
                n.D || (n.D = new L()), n.D.O.add(e);
                var r = n.D;
                return {
                  na: e,
                  B: r,
                  pa: t,
                  takeRecords: function() {
                    return r.takeRecords();
                  },
                };
              },
              unobserveChildren: function(t) {
                var e = t && t.B;
                e && (e.O.delete(t.na), e.O.size || (f(t.pa).D = null));
              },
              nativeMethods: nt,
              nativeTree: _t,
              deferConnectionCallbacks: p.deferConnectionCallbacks,
              preferPerformance: p.preferPerformance,
              handlesDynamicScoping: !0,
            };
            (window.ShadyDOM = on),
              (function() {
                if (
                  ((window.Event = ge),
                  (window.CustomEvent = be),
                  (window.MouseEvent = we),
                  (function() {
                    for (var t in ue)
                      window.addEventListener(
                        t,
                        function(t) {
                          t.__target || (ye(t), pe(t));
                        },
                        !0,
                      );
                  })(),
                  !re && Object.getOwnPropertyDescriptor(Event.prototype, 'isTrusted'))
                ) {
                  var t = function() {
                    var t = new MouseEvent('click', { bubbles: !0, cancelable: !0, composed: !0 });
                    this.dispatchEvent(t);
                  };
                  Element.prototype.click
                    ? (Element.prototype.click = t)
                    : HTMLElement.prototype.click && (HTMLElement.prototype.click = t);
                }
              })();
            var an =
              (window.customElements && window.customElements.nativeHTMLElement) || HTMLElement;
            rn(De.prototype, nn),
              rn(window.Node.prototype, We),
              rn(window.Window.prototype, ze),
              rn(window.Text.prototype, qe),
              rn(window.Element.prototype, Xe),
              rn(window.DocumentFragment.prototype, $e),
              rn(window.Document.prototype, Ke),
              window.HTMLSlotElement && rn(window.HTMLSlotElement.prototype, Je),
              rn(an.prototype, Ye),
              p.s &&
                (kt(window.Node.prototype),
                kt(window.Text.prototype),
                kt(window.DocumentFragment.prototype),
                kt(window.Element.prototype),
                kt(an.prototype),
                kt(window.Document.prototype),
                window.HTMLSlotElement && kt(window.HTMLSlotElement.prototype)),
              (function() {
                var t = De.prototype;
                (t.__proto__ = DocumentFragment.prototype),
                  At(t, xt, !0),
                  At(t, Dt, !0),
                  At(t, Pt, !0),
                  Object.defineProperties(t, {
                    nodeType: { value: Node.DOCUMENT_FRAGMENT_NODE, configurable: !0 },
                    nodeName: { value: '#document-fragment', configurable: !0 },
                    nodeValue: { value: null, configurable: !0 },
                  }),
                  ['localName', 'namespaceURI', 'prefix'].forEach(function(e) {
                    Object.defineProperty(t, e, { value: void 0, configurable: !0 });
                  }),
                  ['ownerDocument', 'baseURI', 'isConnected'].forEach(function(e) {
                    Object.defineProperty(t, e, {
                      get: function() {
                        return this.host[e];
                      },
                      configurable: !0,
                    });
                  });
              })(),
              (window.ShadowRoot = De);
          }
          var ln = new Set(
            'annotation-xml color-profile font-face font-face-src font-face-uri font-face-format font-face-name missing-glyph'.split(
              ' ',
            ),
          );
          function sn(t) {
            var e = ln.has(t);
            return (t = /^[a-z][.0-9_a-z]*-[\-.0-9_a-z]*$/.test(t)), !e && t;
          }
          function cn(t) {
            var e = t.isConnected;
            if (void 0 !== e) return e;
            for (; t && !(t.__CE_isImportDocument || t instanceof Document); )
              t = t.parentNode || (window.ShadowRoot && t instanceof ShadowRoot ? t.host : void 0);
            return !(!t || !(t.__CE_isImportDocument || t instanceof Document));
          }
          function un(t, e) {
            for (; e && e !== t && !e.nextSibling; ) e = e.parentNode;
            return e && e !== t ? e.nextSibling : null;
          }
          function fn(t, e, n) {
            n = void 0 === n ? new Set() : n;
            for (var r = t; r; ) {
              if (r.nodeType === Node.ELEMENT_NODE) {
                var o = r;
                e(o);
                var i = o.localName;
                if ('link' === i && 'import' === o.getAttribute('rel')) {
                  if ((r = o.import) instanceof Node && !n.has(r))
                    for (n.add(r), r = r.firstChild; r; r = r.nextSibling) fn(r, e, n);
                  r = un(t, o);
                  continue;
                }
                if ('template' === i) {
                  r = un(t, o);
                  continue;
                }
                if ((o = o.__CE_shadowRoot))
                  for (o = o.firstChild; o; o = o.nextSibling) fn(o, e, n);
              }
              r = r.firstChild ? r.firstChild : un(t, r);
            }
          }
          function dn(t, e, n) {
            t[e] = n;
          }
          function pn() {
            (this.a = new Map()), (this.l = new Map()), (this.f = []), (this.c = !1);
          }
          function hn(t, e) {
            (t.c = !0), t.f.push(e);
          }
          function vn(t, e) {
            t.c &&
              fn(e, function(e) {
                return t.b(e);
              });
          }
          function mn(t, e) {
            var n = [];
            for (
              fn(e, function(t) {
                return n.push(t);
              }),
                e = 0;
              e < n.length;
              e++
            ) {
              var r = n[e];
              1 === r.__CE_state ? t.connectedCallback(r) : bn(t, r);
            }
          }
          function yn(t, e) {
            var n = [];
            for (
              fn(e, function(t) {
                return n.push(t);
              }),
                e = 0;
              e < n.length;
              e++
            ) {
              var r = n[e];
              1 === r.__CE_state && t.disconnectedCallback(r);
            }
          }
          function gn(t, e, n) {
            var r = (n = void 0 === n ? {} : n).Fa || new Set(),
              o =
                n.T ||
                function(e) {
                  return bn(t, e);
                },
              i = [];
            if (
              (fn(
                e,
                function(e) {
                  if ('link' === e.localName && 'import' === e.getAttribute('rel')) {
                    var n = e.import;
                    n instanceof Node &&
                      ((n.__CE_isImportDocument = !0), (n.__CE_hasRegistry = !0)),
                      n && 'complete' === n.readyState
                        ? (n.__CE_documentLoadHandled = !0)
                        : e.addEventListener('load', function() {
                            var n = e.import;
                            if (!n.__CE_documentLoadHandled) {
                              n.__CE_documentLoadHandled = !0;
                              var i = new Set(r);
                              i.delete(n), gn(t, n, { Fa: i, T: o });
                            }
                          });
                  } else i.push(e);
                },
                r,
              ),
              t.c)
            )
              for (e = 0; e < i.length; e++) t.b(i[e]);
            for (e = 0; e < i.length; e++) o(i[e]);
          }
          function bn(t, e) {
            if (void 0 === e.__CE_state) {
              var n = e.ownerDocument;
              if (
                (n.defaultView || (n.__CE_isImportDocument && n.__CE_hasRegistry)) &&
                (n = t.a.get(e.localName))
              ) {
                n.constructionStack.push(e);
                var r = n.constructorFunction;
                try {
                  try {
                    if (new r() !== e)
                      throw Error(
                        'The custom element constructor did not produce the element being upgraded.',
                      );
                  } finally {
                    n.constructionStack.pop();
                  }
                } catch (t) {
                  throw ((e.__CE_state = 2), t);
                }
                if (((e.__CE_state = 1), (e.__CE_definition = n), n.attributeChangedCallback))
                  for (n = n.observedAttributes, r = 0; r < n.length; r++) {
                    var o = n[r],
                      i = e.getAttribute(o);
                    null !== i && t.attributeChangedCallback(e, o, null, i, null);
                  }
                cn(e) && t.connectedCallback(e);
              }
            }
          }
          function wn(t) {
            var e = document;
            (this.b = t),
              (this.a = e),
              (this.B = void 0),
              gn(this.b, this.a),
              'loading' === this.a.readyState &&
                ((this.B = new MutationObserver(this.c.bind(this))),
                this.B.observe(this.a, { childList: !0, subtree: !0 }));
          }
          function _n(t) {
            t.B && t.B.disconnect();
          }
          function En(t) {
            if (t.a) throw Error('Already resolved.');
            (t.a = void 0), t.b && t.b(void 0);
          }
          function Nn(t) {
            (this.c = !1),
              (this.a = t),
              (this.C = new Map()),
              (this.f = function(t) {
                return t();
              }),
              (this.b = !1),
              (this.l = []),
              (this.wa = new wn(t));
          }
          (pn.prototype.b = function(t) {
            if (this.c && !t.__CE_patched) {
              t.__CE_patched = !0;
              for (var e = 0; e < this.f.length; e++) this.f[e](t);
            }
          }),
            (pn.prototype.connectedCallback = function(t) {
              var e = t.__CE_definition;
              e.connectedCallback && e.connectedCallback.call(t);
            }),
            (pn.prototype.disconnectedCallback = function(t) {
              var e = t.__CE_definition;
              e.disconnectedCallback && e.disconnectedCallback.call(t);
            }),
            (pn.prototype.attributeChangedCallback = function(t, e, n, r, o) {
              var i = t.__CE_definition;
              i.attributeChangedCallback &&
                -1 < i.observedAttributes.indexOf(e) &&
                i.attributeChangedCallback.call(t, e, n, r, o);
            }),
            (wn.prototype.c = function(t) {
              var e = this.a.readyState;
              for (('interactive' !== e && 'complete' !== e) || _n(this), e = 0; e < t.length; e++)
                for (var n = t[e].addedNodes, r = 0; r < n.length; r++) gn(this.b, n[r]);
            }),
            ((e = Nn.prototype).define = function(t, e) {
              var n = this;
              if (!(e instanceof Function))
                throw new TypeError('Custom element constructors must be functions.');
              if (!sn(t)) throw new SyntaxError("The element name '" + t + "' is not valid.");
              if (this.a.a.get(t))
                throw Error("A custom element with name '" + t + "' has already been defined.");
              if (this.c) throw Error('A custom element is already being defined.');
              this.c = !0;
              try {
                var r = function(t) {
                    var e = o[t];
                    if (void 0 !== e && !(e instanceof Function))
                      throw Error("The '" + t + "' callback must be a function.");
                    return e;
                  },
                  o = e.prototype;
                if (!(o instanceof Object))
                  throw new TypeError(
                    "The custom element constructor's prototype is not an object.",
                  );
                var i = r('connectedCallback'),
                  a = r('disconnectedCallback'),
                  l = r('adoptedCallback'),
                  s = r('attributeChangedCallback'),
                  c = e.observedAttributes || [];
              } catch (t) {
                return;
              } finally {
                this.c = !1;
              }
              (e = {
                localName: t,
                constructorFunction: e,
                connectedCallback: i,
                disconnectedCallback: a,
                adoptedCallback: l,
                attributeChangedCallback: s,
                observedAttributes: c,
                constructionStack: [],
              }),
                (function(t, e, n) {
                  t.a.set(e, n), t.l.set(n.constructorFunction, n);
                })(this.a, t, e),
                this.l.push(e),
                this.b ||
                  ((this.b = !0),
                  this.f(function() {
                    return (function(t) {
                      if (!1 !== t.b) {
                        t.b = !1;
                        for (var e = t.l, n = [], r = new Map(), o = 0; o < e.length; o++)
                          r.set(e[o].localName, []);
                        for (
                          gn(t.a, document, {
                            T: function(e) {
                              if (void 0 === e.__CE_state) {
                                var o = e.localName,
                                  i = r.get(o);
                                i ? i.push(e) : t.a.a.get(o) && n.push(e);
                              }
                            },
                          }),
                            o = 0;
                          o < n.length;
                          o++
                        )
                          bn(t.a, n[o]);
                        for (; 0 < e.length; ) {
                          var i = e.shift();
                          (o = i.localName), (i = r.get(i.localName));
                          for (var a = 0; a < i.length; a++) bn(t.a, i[a]);
                          (o = t.C.get(o)) && En(o);
                        }
                      }
                    })(n);
                  }));
            }),
            (e.T = function(t) {
              gn(this.a, t);
            }),
            (e.get = function(t) {
              if ((t = this.a.a.get(t))) return t.constructorFunction;
            }),
            (e.ha = function(t) {
              if (!sn(t))
                return Promise.reject(
                  new SyntaxError("'" + t + "' is not a valid custom element name."),
                );
              var e = this.C.get(t);
              return e
                ? e.c
                : ((e = new (function() {
                    var t = this;
                    (this.b = this.a = void 0),
                      (this.c = new Promise(function(e) {
                        (t.b = e), t.a && e(t.a);
                      }));
                  })()),
                  this.C.set(t, e),
                  this.a.a.get(t) &&
                    !this.l.some(function(e) {
                      return e.localName === t;
                    }) &&
                    En(e),
                  e.c);
            }),
            (e.ya = function(t) {
              _n(this.wa);
              var e = this.f;
              this.f = function(n) {
                return t(function() {
                  return e(n);
                });
              };
            }),
            (window.CustomElementRegistry = Nn),
            (Nn.prototype.define = Nn.prototype.define),
            (Nn.prototype.upgrade = Nn.prototype.T),
            (Nn.prototype.get = Nn.prototype.get),
            (Nn.prototype.whenDefined = Nn.prototype.ha),
            (Nn.prototype.polyfillWrapFlushCallback = Nn.prototype.ya);
          var Cn = window.Document.prototype.createElement,
            Sn = window.Document.prototype.createElementNS,
            On = window.Document.prototype.importNode,
            Tn = window.Document.prototype.prepend,
            xn = window.Document.prototype.append,
            jn = window.DocumentFragment.prototype.prepend,
            Dn = window.DocumentFragment.prototype.append,
            Mn = window.Node.prototype.cloneNode,
            Pn = window.Node.prototype.appendChild,
            An = window.Node.prototype.insertBefore,
            kn = window.Node.prototype.removeChild,
            Ln = window.Node.prototype.replaceChild,
            Rn = Object.getOwnPropertyDescriptor(window.Node.prototype, 'textContent'),
            Hn = window.Element.prototype.attachShadow,
            Fn = Object.getOwnPropertyDescriptor(window.Element.prototype, 'innerHTML'),
            In = window.Element.prototype.getAttribute,
            Bn = window.Element.prototype.setAttribute,
            Un = window.Element.prototype.removeAttribute,
            Vn = window.Element.prototype.getAttributeNS,
            zn = window.Element.prototype.setAttributeNS,
            Wn = window.Element.prototype.removeAttributeNS,
            qn = window.Element.prototype.insertAdjacentElement,
            Gn = window.Element.prototype.insertAdjacentHTML,
            $n = window.Element.prototype.prepend,
            Jn = window.Element.prototype.append,
            Xn = window.Element.prototype.before,
            Kn = window.Element.prototype.after,
            Zn = window.Element.prototype.replaceWith,
            Yn = window.Element.prototype.remove,
            Qn = window.HTMLElement,
            tr = Object.getOwnPropertyDescriptor(window.HTMLElement.prototype, 'innerHTML'),
            er = window.HTMLElement.prototype.insertAdjacentElement,
            nr = window.HTMLElement.prototype.insertAdjacentHTML,
            rr = new (function() {})();
          function or(t, e, n) {
            function r(e) {
              return function(n) {
                for (var r = [], o = 0; o < arguments.length; ++o) r[o] = arguments[o];
                o = [];
                for (var i = [], a = 0; a < r.length; a++) {
                  var l = r[a];
                  if ((l instanceof Element && cn(l) && i.push(l), l instanceof DocumentFragment))
                    for (l = l.firstChild; l; l = l.nextSibling) o.push(l);
                  else o.push(l);
                }
                for (e.apply(this, r), r = 0; r < i.length; r++) yn(t, i[r]);
                if (cn(this))
                  for (r = 0; r < o.length; r++) (i = o[r]) instanceof Element && mn(t, i);
              };
            }
            void 0 !== n.S && (e.prepend = r(n.S)), void 0 !== n.append && (e.append = r(n.append));
          }
          var ir = window.customElements;
          if (
            !ir ||
            ir.forcePolyfill ||
            'function' != typeof ir.define ||
            'function' != typeof ir.get
          ) {
            var ar = new pn();
            !(function() {
              var t = ar;
              window.HTMLElement = (function() {
                function e() {
                  var e = this.constructor,
                    n = t.l.get(e);
                  if (!n)
                    throw Error(
                      'The custom element being constructed was not registered with `customElements`.',
                    );
                  var r = n.constructionStack;
                  if (0 === r.length)
                    return (
                      (r = Cn.call(document, n.localName)),
                      Object.setPrototypeOf(r, e.prototype),
                      (r.__CE_state = 1),
                      (r.__CE_definition = n),
                      t.b(r),
                      r
                    );
                  var o = r[(n = r.length - 1)];
                  if (o === rr)
                    throw Error(
                      'The HTMLElement constructor was either called reentrantly for this constructor or called multiple times.',
                    );
                  return (r[n] = rr), Object.setPrototypeOf(o, e.prototype), t.b(o), o;
                }
                return (
                  (e.prototype = Qn.prototype),
                  Object.defineProperty(e.prototype, 'constructor', {
                    writable: !0,
                    configurable: !0,
                    enumerable: !1,
                    value: e,
                  }),
                  e
                );
              })();
            })(),
              (function() {
                var t = ar;
                dn(Document.prototype, 'createElement', function(e) {
                  if (this.__CE_hasRegistry) {
                    var n = t.a.get(e);
                    if (n) return new n.constructorFunction();
                  }
                  return (e = Cn.call(this, e)), t.b(e), e;
                }),
                  dn(Document.prototype, 'importNode', function(e, n) {
                    return (
                      (e = On.call(this, e, !!n)), this.__CE_hasRegistry ? gn(t, e) : vn(t, e), e
                    );
                  }),
                  dn(Document.prototype, 'createElementNS', function(e, n) {
                    if (
                      this.__CE_hasRegistry &&
                      (null === e || 'http://www.w3.org/1999/xhtml' === e)
                    ) {
                      var r = t.a.get(n);
                      if (r) return new r.constructorFunction();
                    }
                    return (e = Sn.call(this, e, n)), t.b(e), e;
                  }),
                  or(t, Document.prototype, { S: Tn, append: xn });
              })(),
              or(ar, DocumentFragment.prototype, { S: jn, append: Dn }),
              (function() {
                function t(t, n) {
                  Object.defineProperty(t, 'textContent', {
                    enumerable: n.enumerable,
                    configurable: !0,
                    get: n.get,
                    set: function(t) {
                      if (this.nodeType === Node.TEXT_NODE) n.set.call(this, t);
                      else {
                        var r = void 0;
                        if (this.firstChild) {
                          var o = this.childNodes,
                            i = o.length;
                          if (0 < i && cn(this)) {
                            r = Array(i);
                            for (var a = 0; a < i; a++) r[a] = o[a];
                          }
                        }
                        if ((n.set.call(this, t), r)) for (t = 0; t < r.length; t++) yn(e, r[t]);
                      }
                    },
                  });
                }
                var e = ar;
                dn(Node.prototype, 'insertBefore', function(t, n) {
                  if (t instanceof DocumentFragment) {
                    var r = Array.prototype.slice.apply(t.childNodes);
                    if (((t = An.call(this, t, n)), cn(this)))
                      for (n = 0; n < r.length; n++) mn(e, r[n]);
                    return t;
                  }
                  return (
                    (r = cn(t)), (n = An.call(this, t, n)), r && yn(e, t), cn(this) && mn(e, t), n
                  );
                }),
                  dn(Node.prototype, 'appendChild', function(t) {
                    if (t instanceof DocumentFragment) {
                      var n = Array.prototype.slice.apply(t.childNodes);
                      if (((t = Pn.call(this, t)), cn(this)))
                        for (var r = 0; r < n.length; r++) mn(e, n[r]);
                      return t;
                    }
                    return (
                      (n = cn(t)), (r = Pn.call(this, t)), n && yn(e, t), cn(this) && mn(e, t), r
                    );
                  }),
                  dn(Node.prototype, 'cloneNode', function(t) {
                    return (
                      (t = Mn.call(this, !!t)),
                      this.ownerDocument.__CE_hasRegistry ? gn(e, t) : vn(e, t),
                      t
                    );
                  }),
                  dn(Node.prototype, 'removeChild', function(t) {
                    var n = cn(t),
                      r = kn.call(this, t);
                    return n && yn(e, t), r;
                  }),
                  dn(Node.prototype, 'replaceChild', function(t, n) {
                    if (t instanceof DocumentFragment) {
                      var r = Array.prototype.slice.apply(t.childNodes);
                      if (((t = Ln.call(this, t, n)), cn(this)))
                        for (yn(e, n), n = 0; n < r.length; n++) mn(e, r[n]);
                      return t;
                    }
                    r = cn(t);
                    var o = Ln.call(this, t, n),
                      i = cn(this);
                    return i && yn(e, n), r && yn(e, t), i && mn(e, t), o;
                  }),
                  Rn && Rn.get
                    ? t(Node.prototype, Rn)
                    : hn(e, function(e) {
                        t(e, {
                          enumerable: !0,
                          configurable: !0,
                          get: function() {
                            for (var t = [], e = 0; e < this.childNodes.length; e++)
                              t.push(this.childNodes[e].textContent);
                            return t.join('');
                          },
                          set: function(t) {
                            for (; this.firstChild; ) kn.call(this, this.firstChild);
                            Pn.call(this, document.createTextNode(t));
                          },
                        });
                      });
              })(),
              (function() {
                function t(t, e) {
                  Object.defineProperty(t, 'innerHTML', {
                    enumerable: e.enumerable,
                    configurable: !0,
                    get: e.get,
                    set: function(t) {
                      var n = this,
                        o = void 0;
                      if (
                        (cn(this) &&
                          ((o = []),
                          fn(this, function(t) {
                            t !== n && o.push(t);
                          })),
                        e.set.call(this, t),
                        o)
                      )
                        for (var i = 0; i < o.length; i++) {
                          var a = o[i];
                          1 === a.__CE_state && r.disconnectedCallback(a);
                        }
                      return this.ownerDocument.__CE_hasRegistry ? gn(r, this) : vn(r, this), t;
                    },
                  });
                }
                function e(t, e) {
                  dn(t, 'insertAdjacentElement', function(t, n) {
                    var o = cn(n);
                    return (t = e.call(this, t, n)), o && yn(r, n), cn(t) && mn(r, n), t;
                  });
                }
                function n(t, e) {
                  function n(t, e) {
                    for (var n = []; t !== e; t = t.nextSibling) n.push(t);
                    for (e = 0; e < n.length; e++) gn(r, n[e]);
                  }
                  dn(t, 'insertAdjacentHTML', function(t, r) {
                    if ('beforebegin' === (t = t.toLowerCase())) {
                      var o = this.previousSibling;
                      e.call(this, t, r), n(o || this.parentNode.firstChild, this);
                    } else if ('afterbegin' === t)
                      (o = this.firstChild), e.call(this, t, r), n(this.firstChild, o);
                    else if ('beforeend' === t)
                      (o = this.lastChild), e.call(this, t, r), n(o || this.firstChild, null);
                    else {
                      if ('afterend' !== t)
                        throw new SyntaxError(
                          'The value provided (' +
                            String(t) +
                            ") is not one of 'beforebegin', 'afterbegin', 'beforeend', or 'afterend'.",
                        );
                      (o = this.nextSibling), e.call(this, t, r), n(this.nextSibling, o);
                    }
                  });
                }
                var r = ar;
                Hn &&
                  dn(Element.prototype, 'attachShadow', function(t) {
                    return (this.__CE_shadowRoot = Hn.call(this, t));
                  }),
                  Fn && Fn.get
                    ? t(Element.prototype, Fn)
                    : tr && tr.get
                    ? t(HTMLElement.prototype, tr)
                    : hn(r, function(e) {
                        t(e, {
                          enumerable: !0,
                          configurable: !0,
                          get: function() {
                            return Mn.call(this, !0).innerHTML;
                          },
                          set: function(t) {
                            var e = 'template' === this.localName,
                              n = e ? this.content : this,
                              r = Sn.call(document, this.namespaceURI, this.localName);
                            for (r.innerHTML = t; 0 < n.childNodes.length; )
                              kn.call(n, n.childNodes[0]);
                            for (t = e ? r.content : r; 0 < t.childNodes.length; )
                              Pn.call(n, t.childNodes[0]);
                          },
                        });
                      }),
                  dn(Element.prototype, 'setAttribute', function(t, e) {
                    if (1 !== this.__CE_state) return Bn.call(this, t, e);
                    var n = In.call(this, t);
                    Bn.call(this, t, e),
                      (e = In.call(this, t)),
                      r.attributeChangedCallback(this, t, n, e, null);
                  }),
                  dn(Element.prototype, 'setAttributeNS', function(t, e, n) {
                    if (1 !== this.__CE_state) return zn.call(this, t, e, n);
                    var o = Vn.call(this, t, e);
                    zn.call(this, t, e, n),
                      (n = Vn.call(this, t, e)),
                      r.attributeChangedCallback(this, e, o, n, t);
                  }),
                  dn(Element.prototype, 'removeAttribute', function(t) {
                    if (1 !== this.__CE_state) return Un.call(this, t);
                    var e = In.call(this, t);
                    Un.call(this, t),
                      null !== e && r.attributeChangedCallback(this, t, e, null, null);
                  }),
                  dn(Element.prototype, 'removeAttributeNS', function(t, e) {
                    if (1 !== this.__CE_state) return Wn.call(this, t, e);
                    var n = Vn.call(this, t, e);
                    Wn.call(this, t, e);
                    var o = Vn.call(this, t, e);
                    n !== o && r.attributeChangedCallback(this, e, n, o, t);
                  }),
                  er
                    ? e(HTMLElement.prototype, er)
                    : qn
                    ? e(Element.prototype, qn)
                    : console.warn(
                        'Custom Elements: `Element#insertAdjacentElement` was not patched.',
                      ),
                  nr
                    ? n(HTMLElement.prototype, nr)
                    : Gn
                    ? n(Element.prototype, Gn)
                    : console.warn(
                        'Custom Elements: `Element#insertAdjacentHTML` was not patched.',
                      ),
                  or(r, Element.prototype, { S: $n, append: Jn }),
                  (function(t) {
                    function e(e) {
                      return function(n) {
                        for (var r = [], o = 0; o < arguments.length; ++o) r[o] = arguments[o];
                        o = [];
                        for (var i = [], a = 0; a < r.length; a++) {
                          var l = r[a];
                          if (
                            (l instanceof Element && cn(l) && i.push(l),
                            l instanceof DocumentFragment)
                          )
                            for (l = l.firstChild; l; l = l.nextSibling) o.push(l);
                          else o.push(l);
                        }
                        for (e.apply(this, r), r = 0; r < i.length; r++) yn(t, i[r]);
                        if (cn(this))
                          for (r = 0; r < o.length; r++) (i = o[r]) instanceof Element && mn(t, i);
                      };
                    }
                    var n = Element.prototype;
                    void 0 !== Xn && (n.before = e(Xn)),
                      void 0 !== Xn && (n.after = e(Kn)),
                      void 0 !== Zn &&
                        dn(n, 'replaceWith', function(e) {
                          for (var n = [], r = 0; r < arguments.length; ++r) n[r] = arguments[r];
                          r = [];
                          for (var o = [], i = 0; i < n.length; i++) {
                            var a = n[i];
                            if (
                              (a instanceof Element && cn(a) && o.push(a),
                              a instanceof DocumentFragment)
                            )
                              for (a = a.firstChild; a; a = a.nextSibling) r.push(a);
                            else r.push(a);
                          }
                          for (i = cn(this), Zn.apply(this, n), n = 0; n < o.length; n++)
                            yn(t, o[n]);
                          if (i)
                            for (yn(t, this), n = 0; n < r.length; n++)
                              (o = r[n]) instanceof Element && mn(t, o);
                        }),
                      void 0 !== Yn &&
                        dn(n, 'remove', function() {
                          var e = cn(this);
                          Yn.call(this), e && yn(t, this);
                        });
                  })(r);
              })(),
              (document.__CE_hasRegistry = !0);
            var lr = new Nn(ar);
            Object.defineProperty(window, 'customElements', {
              configurable: !0,
              enumerable: !0,
              value: lr,
            });
          }
          function sr() {
            (this.end = this.start = 0),
              (this.rules = this.parent = this.previous = null),
              (this.cssText = this.parsedCssText = ''),
              (this.atRule = !1),
              (this.type = 0),
              (this.parsedSelector = this.selector = this.keyframesName = '');
          }
          function cr(t) {
            var e = ur,
              n = (t = t.replace(yr, '').replace(gr, '')),
              r = new sr();
            (r.start = 0), (r.end = n.length);
            for (var o = r, i = 0, a = n.length; i < a; i++)
              if ('{' === n[i]) {
                o.rules || (o.rules = []);
                var l = o,
                  s = l.rules[l.rules.length - 1] || null;
                ((o = new sr()).start = i + 1), (o.parent = l), (o.previous = s), l.rules.push(o);
              } else '}' === n[i] && ((o.end = i + 1), (o = o.parent || r));
            return e(r, t);
          }
          function ur(t, e) {
            var n = e.substring(t.start, t.end - 1);
            if (
              ((t.parsedCssText = t.cssText = n.trim()),
              t.parent &&
                ((n = (n = (n = (function(t) {
                  return t.replace(/\\([0-9a-f]{1,6})\s/gi, function(t, e) {
                    for (e = 6 - (t = e).length; e--; ) t = '0' + t;
                    return '\\' + t;
                  });
                })(
                  (n = e.substring(t.previous ? t.previous.end : t.parent.start, t.start - 1)),
                )).replace(Cr, ' ')).substring(n.lastIndexOf(';') + 1)),
                (n = t.parsedSelector = t.selector = n.trim()),
                (t.atRule = 0 === n.indexOf('@')),
                t.atRule
                  ? 0 === n.indexOf('@media')
                    ? (t.type = vr)
                    : n.match(Nr) && ((t.type = hr), (t.keyframesName = t.selector.split(Cr).pop()))
                  : (t.type = 0 === n.indexOf('--') ? mr : pr)),
              (n = t.rules))
            )
              for (var r = 0, o = n.length, i = void 0; r < o && (i = n[r]); r++) ur(i, e);
            return t;
          }
          var fr,
            dr,
            pr = 1,
            hr = 7,
            vr = 4,
            mr = 1e3,
            yr = /\/\*[^*]*\*+([^/*][^*]*\*+)*\//gim,
            gr = /@import[^;]*;/gim,
            br = /(?:^[^;\-\s}]+)?--[^;{}]*?:[^{};]*?(?:[;\n]|$)/gim,
            wr = /(?:^[^;\-\s}]+)?--[^;{}]*?:[^{};]*?{[^}]*?}(?:[;\n]|$)?/gim,
            _r = /@apply\s*\(?[^);]*\)?\s*(?:[;\n]|$)?/gim,
            Er = /[^;:]*?:[^;]*?var\([^;]*\)(?:[;\n]|$)?/gim,
            Nr = /^@[^\s]*keyframes/,
            Cr = /\s+/g,
            Sr = !(window.ShadyDOM && window.ShadyDOM.inUse);
          function Or(t) {
            fr =
              (!t || !t.shimcssproperties) &&
              (Sr ||
                !(
                  navigator.userAgent.match(/AppleWebKit\/601|Edge\/15/) ||
                  !window.CSS ||
                  !CSS.supports ||
                  !CSS.supports('box-shadow', '0 0 0 var(--foo)')
                ));
          }
          window.ShadyCSS && void 0 !== window.ShadyCSS.cssBuild && (dr = window.ShadyCSS.cssBuild),
            window.ShadyCSS && void 0 !== window.ShadyCSS.nativeCss
              ? (fr = window.ShadyCSS.nativeCss)
              : window.ShadyCSS
              ? (Or(window.ShadyCSS), (window.ShadyCSS = void 0))
              : Or(window.WebComponents && window.WebComponents.flags);
          var Tr = fr,
            xr = dr,
            jr = /(?:^|[;\s{]\s*)(--[\w-]*?)\s*:\s*(?:((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};{])+)|\{([^}]*)\}(?:(?=[;\s}])|$))/gi,
            Dr = /(?:^|\W+)@apply\s*\(?([^);\n]*)\)?/gi,
            Mr = /(--[\w-]+)\s*([:,;)]|$)/gi,
            Pr = /(animation\s*:)|(animation-name\s*:)/,
            Ar = /@media\s(.*)/,
            kr = /\{[^}]*\}/g,
            Lr = new Set();
          function Rr(t, e) {
            return t
              ? ('string' == typeof t && (t = cr(t)),
                e && Ir(t, e),
                (function t(e, n, r) {
                  r = void 0 === r ? '' : r;
                  var o = '';
                  if (e.cssText || e.rules) {
                    var i,
                      a = e.rules;
                    if (
                      ((i = a) &&
                        (i = !((i = a[0]) && i.selector && 0 === i.selector.indexOf('--'))),
                      i)
                    ) {
                      i = 0;
                      for (var l = a.length, s = void 0; i < l && (s = a[i]); i++) o = t(s, n, o);
                    } else
                      (n = n
                        ? e.cssText
                        : (n = (n = e.cssText).replace(br, '').replace(wr, ''))
                            .replace(_r, '')
                            .replace(Er, '')),
                        (o = n.trim()) && (o = '  ' + o + '\n');
                  }
                  return (
                    o &&
                      (e.selector && (r += e.selector + ' {\n'),
                      (r += o),
                      e.selector && (r += '}\n\n')),
                    r
                  );
                })(t, Tr))
              : '';
          }
          function Hr(t) {
            return (
              !t.__cssRules && t.textContent && (t.__cssRules = cr(t.textContent)),
              t.__cssRules || null
            );
          }
          function Fr(t) {
            return !!t.parent && t.parent.type === hr;
          }
          function Ir(t, e, n, r) {
            if (t) {
              var o = !1,
                i = t.type;
              if (r && i === vr) {
                var a = t.selector.match(Ar);
                a && (window.matchMedia(a[1]).matches || (o = !0));
              }
              if (
                (i === pr ? e(t) : n && i === hr ? n(t) : i === mr && (o = !0), (t = t.rules) && !o)
              )
                for (o = 0, i = t.length, a = void 0; o < i && (a = t[o]); o++) Ir(a, e, n, r);
            }
          }
          function Br(t, e, n, r) {
            var o = document.createElement('style');
            return e && o.setAttribute('scope', e), (o.textContent = t), zr(o, n, r), o;
          }
          var Ur = null;
          function Vr(t) {
            t = document.createComment(' Shady DOM styles for ' + t + ' ');
            var e = document.head;
            return e.insertBefore(t, (Ur ? Ur.nextSibling : null) || e.firstChild), (Ur = t);
          }
          function zr(t, e, n) {
            (e = e || document.head).insertBefore(t, (n && n.nextSibling) || e.firstChild),
              Ur
                ? t.compareDocumentPosition(Ur) === Node.DOCUMENT_POSITION_PRECEDING && (Ur = t)
                : (Ur = t);
          }
          function Wr(t, e) {
            for (var n = 0, r = t.length; e < r; e++)
              if ('(' === t[e]) n++;
              else if (')' === t[e] && 0 == --n) return e;
            return -1;
          }
          function qr(t, e) {
            Sr
              ? t.setAttribute('class', e)
              : window.ShadyDOM.nativeMethods.setAttribute.call(t, 'class', e);
          }
          function Gr(t) {
            var e = t.localName,
              n = '';
            return (
              e
                ? -1 < e.indexOf('-') ||
                  ((n = e), (e = (t.getAttribute && t.getAttribute('is')) || ''))
                : ((e = t.is), (n = t.extends)),
              { is: e, J: n }
            );
          }
          function $r(t) {
            for (var e = [], n = '', r = 0; 0 <= r && r < t.length; r++)
              if ('(' === t[r]) {
                var o = Wr(t, r);
                (n += t.slice(r, o + 1)), (r = o);
              } else ',' === t[r] ? (e.push(n), (n = '')) : (n += t[r]);
            return n && e.push(n), e;
          }
          function Jr(t) {
            if (void 0 !== xr) return xr;
            if (void 0 === t.__cssBuild) {
              var e = t.getAttribute('css-build');
              if (e) t.__cssBuild = e;
              else {
                if (
                  '' !==
                  (e =
                    (e =
                      'template' === t.localName ? t.content.firstChild : t.firstChild) instanceof
                      Comment && 'css-build' === (e = e.textContent.trim().split(':'))[0]
                      ? e[1]
                      : '')
                ) {
                  var n = 'template' === t.localName ? t.content.firstChild : t.firstChild;
                  n.parentNode.removeChild(n);
                }
                t.__cssBuild = e;
              }
            }
            return t.__cssBuild || '';
          }
          function Xr(t) {
            return (
              !('' === (t = void 0 === t ? '' : t) || !Tr) && (Sr ? 'shadow' === t : 'shady' === t)
            );
          }
          function Kr() {}
          function Zr(t, e, n) {
            var r;
            if (
              (e.nodeType === Node.ELEMENT_NODE && n(e),
              (r =
                'template' === e.localName
                  ? (e.content || e._content || e).childNodes
                  : e.children || e.childNodes))
            )
              for (e = 0; e < r.length; e++) Zr(t, r[e], n);
          }
          function Yr(t, e, n) {
            if (e)
              if (t.classList)
                n
                  ? (t.classList.remove('style-scope'), t.classList.remove(e))
                  : (t.classList.add('style-scope'), t.classList.add(e));
              else if (t.getAttribute) {
                var r = t.getAttribute('class');
                n
                  ? r && qr(t, (e = r.replace('style-scope', '').replace(e, '')))
                  : qr(t, (r ? r + ' ' : '') + 'style-scope ' + e);
              }
          }
          function Qr(t, e, n) {
            Zr(mo, t, function(t) {
              Yr(t, e, !0), Yr(t, n);
            });
          }
          function to(t, e) {
            Zr(mo, t, function(t) {
              Yr(t, e || '', !0);
            });
          }
          function eo(t, e, n, r, o) {
            var i = mo;
            return (
              '' === (o = void 0 === o ? '' : o) &&
                (Sr || 'shady' === (void 0 === r ? '' : r)
                  ? (o = Rr(e, n))
                  : (o =
                      (function(t, e, n, r, o) {
                        var i = no(n, r);
                        return (
                          (n = n ? '.' + n : ''),
                          Rr(e, function(e) {
                            e.c || ((e.selector = e.j = ro(t, e, t.b, n, i)), (e.c = !0)),
                              o && o(e, n, i);
                          })
                        );
                      })(i, e, (t = Gr(t)).is, t.J, n) + '\n\n')),
              o.trim()
            );
          }
          function no(t, e) {
            return e ? '[is=' + t + ']' : t;
          }
          function ro(t, e, n, r, o) {
            var i = $r(e.selector);
            if (!Fr(e)) {
              e = 0;
              for (var a = i.length, l = void 0; e < a && (l = i[e]); e++)
                i[e] = n.call(t, l, r, o);
            }
            return i
              .filter(function(t) {
                return !!t;
              })
              .join(',');
          }
          function oo(t) {
            return t.replace(lo, function(t, e, n) {
              return (
                -1 < n.indexOf('+')
                  ? (n = n.replace(/\+/g, '___'))
                  : -1 < n.indexOf('___') && (n = n.replace(/___/g, '+')),
                ':' + e + '(' + n + ')'
              );
            });
          }
          function io(t, e) {
            t = t.split(/(\[.+?\])/);
            for (var n = [], r = 0; r < t.length; r++)
              if (1 == r % 2) n.push(t[r]);
              else {
                var o = t[r];
                ('' === o && r === t.length - 1) ||
                  (((o = o.split(':'))[0] += e), n.push(o.join(':')));
              }
            return n.join('');
          }
          function ao(t) {
            ':root' === t.selector && (t.selector = 'html');
          }
          (Kr.prototype.b = function(t, e, n) {
            var r = !1;
            t = t.trim();
            var o = lo.test(t);
            o &&
              (t = oo(
                (t = t.replace(lo, function(t, e, n) {
                  return ':' + e + '(' + n.replace(/\s/g, '') + ')';
                })),
              ));
            var i = vo.test(t);
            if (i) {
              var a = (function(t) {
                for (var e, n = []; (e = t.match(vo)); ) {
                  var r = e.index,
                    o = Wr(t, r);
                  if (-1 === o) throw Error(e.input + " selector missing ')'");
                  (e = t.slice(r, o + 1)), (t = t.replace(e, '')), n.push(e);
                }
                return { Z: t, matches: n };
              })(t);
              (t = a.Z), (a = a.matches);
            }
            return (
              (t = (t = t.replace(uo, ':host $1')).replace(so, function(t, o, i) {
                return (
                  r ||
                    ((t = (function(t, e, n, r) {
                      var o = t.indexOf('::slotted');
                      if (
                        (0 <= t.indexOf(':host')
                          ? (t = (function(t, e) {
                              var n = t.match(fo);
                              return (n = (n && n[2].trim()) || '')
                                ? n[0].match(co)
                                  ? t.replace(fo, function(t, n, r) {
                                      return e + r;
                                    })
                                  : n.split(co)[0] === e
                                  ? n
                                  : 'should_not_match'
                                : t.replace(':host', e);
                            })(t, r))
                          : 0 !== o && (t = n ? io(t, n) : t),
                        (n = !1),
                        0 <= o && ((e = ''), (n = !0)),
                        n)
                      ) {
                        var i = !0;
                        n &&
                          (t = t.replace(po, function(t, e) {
                            return ' > ' + e;
                          }));
                      }
                      return {
                        value: (t = t.replace(ho, function(t, e, n) {
                          return '[dir="' + n + '"] ' + e + ', ' + e + '[dir="' + n + '"]';
                        })),
                        ra: e,
                        stop: i,
                      };
                    })(i, o, e, n)),
                    (r = r || t.stop),
                    (o = t.ra),
                    (i = t.value)),
                  o + i
                );
              })),
              i &&
                (t = (function(t, e) {
                  var n = t.split('');
                  return e.reduce(function(t, e, r) {
                    return t + e + n[r + 1];
                  }, n[0]);
                })(t, a)),
              o && (t = oo(t)),
              t
            );
          }),
            (Kr.prototype.c = function(t) {
              return t.match(':host')
                ? ''
                : t.match('::slotted')
                ? this.b(t, ':not(.style-scope)')
                : io(t.trim(), ':not(.style-scope)');
            }),
            r.Object.defineProperties(Kr.prototype, {
              a: {
                configurable: !0,
                enumerable: !0,
                get: function() {
                  return 'style-scope';
                },
              },
            });
          var lo = /:(nth[-\w]+)\(([^)]+)\)/,
            so = /(^|[\s>+~]+)((?:\[.+?\]|[^\s>+~=[])+)/g,
            co = /[[.:#*]/,
            uo = /^(::slotted)/,
            fo = /(:host)(?:\(((?:\([^)(]*\)|[^)(]*)+?)\))/,
            po = /(?:::slotted)(?:\(((?:\([^)(]*\)|[^)(]*)+?)\))/,
            ho = /(.*):dir\((?:(ltr|rtl))\)/,
            vo = /:(?:matches|any|-(?:webkit|moz)-any)/,
            mo = new Kr();
          function yo(t, e, n, r, o) {
            (this.v = t || null),
              (this.b = e || null),
              (this.c = n || []),
              (this.F = null),
              (this.cssBuild = o || ''),
              (this.J = r || ''),
              (this.a = this.o = this.A = null);
          }
          function go(t) {
            return t ? t.__styleInfo : null;
          }
          function bo(t, e) {
            return (t.__styleInfo = e);
          }
          function wo(t) {
            var e =
              this.matches ||
              this.matchesSelector ||
              this.mozMatchesSelector ||
              this.msMatchesSelector ||
              this.oMatchesSelector ||
              this.webkitMatchesSelector;
            return e && e.call(this, t);
          }
          (yo.prototype.f = function() {
            return this.v;
          }),
            (yo.prototype._getStyleRules = yo.prototype.f);
          var _o = navigator.userAgent.match('Trident');
          function Eo() {}
          function No(t) {
            if (!t.i) {
              var e = {},
                n = {};
              Co(t, n) && ((e.u = n), (t.rules = null)),
                (e.cssText = t.parsedCssText.replace(kr, '').replace(jr, '')),
                (t.i = e);
            }
          }
          function Co(t, e) {
            var n = t.i;
            if (!n) {
              n = t.parsedCssText;
              for (var r; (t = jr.exec(n)); )
                ('inherit' === (r = (t[2] || t[3]).trim()) && 'unset' === r) ||
                  (e[t[1].trim()] = r),
                  (r = !0);
              return r;
            }
            if (n.u) return Object.assign(e, n.u), !0;
          }
          function So(t, e, n) {
            return (
              e &&
                (e =
                  0 <= e.indexOf(';')
                    ? Oo(t, e, n)
                    : (function t(e, n) {
                        var r = e.indexOf('var(');
                        if (-1 === r) return n(e, '', '', '');
                        var o = Wr(e, r + 3),
                          i = e.substring(r + 4, o);
                        return (
                          (r = e.substring(0, r)),
                          (e = t(e.substring(o + 1), n)),
                          -1 === (o = i.indexOf(','))
                            ? n(r, i.trim(), '', e)
                            : n(r, i.substring(0, o).trim(), i.substring(o + 1).trim(), e)
                        );
                      })(e, function(e, r, o, i) {
                        return r
                          ? ((r = So(t, n[r], n)) && 'initial' !== r
                              ? 'apply-shim-inherit' === r && (r = 'inherit')
                              : (r = So(t, n[o] || o, n) || o),
                            e + (r || '') + i)
                          : e + i;
                      })),
              (e && e.trim()) || ''
            );
          }
          function Oo(t, e, n) {
            e = e.split(';');
            for (var r, o, i = 0; i < e.length; i++)
              if ((r = e[i])) {
                if (((Dr.lastIndex = 0), (o = Dr.exec(r)))) r = So(t, n[o[1]], n);
                else if (-1 !== (o = r.indexOf(':'))) {
                  var a = r.substring(o);
                  (a = So(t, (a = a.trim()), n) || a), (r = r.substring(0, o) + a);
                }
                e[i] = r && r.lastIndexOf(';') === r.length - 1 ? r.slice(0, -1) : r || '';
              }
            return e.join(';');
          }
          function To(t, e, n) {
            var r = {},
              o = {};
            return (
              Ir(
                e,
                function(e) {
                  !(function(t, e, n, r) {
                    if ((e.i || No(e), e.i.u)) {
                      var o = Gr(t);
                      (t = o.is), (o = o.J), (o = t ? no(t, o) : 'html');
                      var i = e.parsedSelector,
                        a = ':host > *' === i || 'html' === i,
                        l = 0 === i.indexOf(':host') && !a;
                      'shady' === n &&
                        (l =
                          !(a = i === o + ' > *.' + o || -1 !== i.indexOf('html')) &&
                          0 === i.indexOf(o)),
                        (a || l) &&
                          ((n = o),
                          l &&
                            (e.j || (e.j = ro(mo, e, mo.b, t ? '.' + t : '', o)), (n = e.j || o)),
                          r({ Z: n, xa: l, Sa: a }));
                    }
                  })(t, e, n, function(n) {
                    wo.call(t._element || t, n.Z) && (n.xa ? Co(e, r) : Co(e, o));
                  });
                },
                null,
                !0,
              ),
              { za: o, va: r }
            );
          }
          function xo(t, e, n, r) {
            var o = Gr(e),
              i = no(o.is, o.J),
              a = new RegExp(
                '(?:^|[^.#[:])' +
                  (e.extends ? '\\' + i.slice(0, -1) + '\\]' : i) +
                  '($|[.:[\\s>+~])',
              ),
              l = go(e);
            (o = l.v), (l = l.cssBuild);
            var s = (function(t, e) {
              t = t.b;
              var n = {};
              if (!Sr && t)
                for (var r = 0, o = t[r]; r < t.length; o = t[++r]) {
                  var i = o,
                    a = e;
                  (i.f = new RegExp('\\b' + i.keyframesName + '(?!\\B|-)', 'g')),
                    (i.a = i.keyframesName + '-' + a),
                    (i.j = i.j || i.selector),
                    (i.selector = i.j.replace(i.keyframesName, i.a)),
                    (n[o.keyframesName] = jo(o));
                }
              return n;
            })(o, r);
            return eo(
              e,
              o,
              function(e) {
                var o = '';
                if (
                  (e.i || No(e),
                  e.i.cssText && (o = Oo(t, e.i.cssText, n)),
                  (e.cssText = o),
                  !Sr && !Fr(e) && e.cssText)
                ) {
                  var l = (o = e.cssText);
                  if ((null == e.ca && (e.ca = Pr.test(o)), e.ca))
                    if (null == e.R)
                      for (var c in ((e.R = []), s))
                        o !== (l = (l = s[c])(o)) && ((o = l), e.R.push(c));
                    else {
                      for (c = 0; c < e.R.length; ++c) o = (l = s[e.R[c]])(o);
                      l = o;
                    }
                  (e.cssText = l), (e.j = e.j || e.selector), (o = '.' + r), (l = 0);
                  for (var u = (c = $r(e.j)).length, f = void 0; l < u && (f = c[l]); l++)
                    c[l] = f.match(a) ? f.replace(i, o) : o + ' ' + f;
                  e.selector = c.join(',');
                }
              },
              l,
            );
          }
          function jo(t) {
            return function(e) {
              return e.replace(t.f, t.a);
            };
          }
          function Do(t, e) {
            var n = Mo,
              r = Hr(t);
            t.textContent = Rr(r, function(t) {
              var r = (t.cssText = t.parsedCssText);
              t.i &&
                t.i.cssText &&
                ((r = r.replace(br, '').replace(wr, '')), (t.cssText = Oo(n, r, e)));
            });
          }
          r.Object.defineProperties(Eo.prototype, {
            a: {
              configurable: !0,
              enumerable: !0,
              get: function() {
                return 'x-scope';
              },
            },
          });
          var Mo = new Eo(),
            Po = {},
            Ao = window.customElements;
          if (Ao && !Sr) {
            var ko = Ao.define;
            Ao.define = function(t, e, n) {
              Po[t] || (Po[t] = Vr(t)), ko.call(Ao, t, e, n);
            };
          }
          function Lo() {
            this.cache = {};
          }
          function Ro() {}
          (Lo.prototype.store = function(t, e, n, r) {
            var o = this.cache[t] || [];
            o.push({ u: e, styleElement: n, o: r }),
              100 < o.length && o.shift(),
              (this.cache[t] = o);
          }),
            (Lo.prototype.fetch = function(t, e, n) {
              if ((t = this.cache[t]))
                for (var r = t.length - 1; 0 <= r; r--) {
                  var o,
                    i = t[r];
                  t: {
                    for (o = 0; o < n.length; o++) {
                      var a = n[o];
                      if (i.u[a] !== e[a]) {
                        o = !1;
                        break t;
                      }
                    }
                    o = !0;
                  }
                  if (o) return i;
                }
            });
          var Ho = new RegExp(mo.a + '\\s*([^\\s]*)');
          function Fo(t) {
            return (t = (t.classList && t.classList.value
              ? t.classList.value
              : t.getAttribute('class') || ''
            ).match(Ho))
              ? t[1]
              : '';
          }
          function Io(t) {
            var e = t.getRootNode();
            return e === t || e === t.ownerDocument ? '' : (t = e.host) ? Gr(t).is : '';
          }
          function Bo(t) {
            for (var e = 0; e < t.length; e++) {
              var n = t[e];
              if (n.target !== document.documentElement && n.target !== document.head)
                for (var r = 0; r < n.addedNodes.length; r++) {
                  var o = n.addedNodes[r];
                  if (o.nodeType === Node.ELEMENT_NODE) {
                    var i = o.getRootNode(),
                      a = Fo(o);
                    if (
                      a &&
                      i === o.ownerDocument &&
                      (('style' !== o.localName && 'template' !== o.localName) || '' === Jr(o))
                    )
                      to(o, a);
                    else if (i instanceof ShadowRoot)
                      for (
                        (i = Io(o)) !== a && Qr(o, a, i),
                          o = window.ShadyDOM.nativeMethods.querySelectorAll.call(
                            o,
                            ':not(.' + mo.a + ')',
                          ),
                          a = 0;
                        a < o.length;
                        a++
                      ) {
                        var l = Io((i = o[a]));
                        l && Yr(i, l);
                      }
                  }
                }
            }
          }
          if (!(Sr || (window.ShadyDOM && window.ShadyDOM.handlesDynamicScoping))) {
            var Uo = new MutationObserver(Bo),
              Vo = function(t) {
                Uo.observe(t, { childList: !0, subtree: !0 });
              };
            if (window.customElements && !window.customElements.polyfillWrapFlushCallback)
              Vo(document);
            else {
              var zo = function() {
                Vo(document.body);
              };
              window.HTMLImports
                ? window.HTMLImports.whenReady(zo)
                : requestAnimationFrame(function() {
                    if ('loading' === document.readyState) {
                      var t = function() {
                        zo(), document.removeEventListener('readystatechange', t);
                      };
                      document.addEventListener('readystatechange', t);
                    } else zo();
                  });
            }
            Ro = function() {
              Bo(Uo.takeRecords());
            };
          }
          var Wo = Ro,
            qo = {},
            Go = Promise.resolve();
          function $o(t) {
            (t = qo[t]) &&
              ((t._applyShimCurrentVersion = t._applyShimCurrentVersion || 0),
              (t._applyShimValidatingVersion = t._applyShimValidatingVersion || 0),
              (t._applyShimNextVersion = (t._applyShimNextVersion || 0) + 1));
          }
          function Jo(t) {
            return t._applyShimCurrentVersion === t._applyShimNextVersion;
          }
          var Xo = new Lo();
          function Ko() {
            (this.C = {}), (this.c = document.documentElement);
            var t = new sr();
            (t.rules = []),
              (this.f = bo(this.c, new yo(t))),
              (this.l = !1),
              (this.b = this.a = null);
          }
          function Zo(t) {
            !t.a &&
              window.ShadyCSS &&
              window.ShadyCSS.ApplyShim &&
              ((t.a = window.ShadyCSS.ApplyShim), (t.a.invalidCallback = $o)),
              (function(t) {
                !t.b &&
                  window.ShadyCSS &&
                  window.ShadyCSS.CustomStyleInterface &&
                  ((t.b = window.ShadyCSS.CustomStyleInterface),
                  (t.b.transformCallback = function(e) {
                    t.fa(e);
                  }),
                  (t.b.validateCallback = function() {
                    requestAnimationFrame(function() {
                      (t.b.enqueued || t.l) && t.flushCustomStyles();
                    });
                  }));
              })(t);
          }
          function Yo(t, e) {
            return (e = e.getRootNode().host) ? (go(e) ? e : Yo(t, e)) : t.c;
          }
          function Qo(t, e, n) {
            var r = go((t = Yo(t, e)));
            t = Object.create(r.A || null);
            var o = To(e, n.v, n.cssBuild);
            for (var i in ((e = (function(t, e) {
              var n = {},
                r = [];
              return (
                Ir(
                  t,
                  function(t) {
                    t.i || No(t);
                    var o = t.j || t.parsedSelector;
                    e &&
                      t.i.u &&
                      o &&
                      wo.call(e, o) &&
                      (Co(t, n),
                      (t = t.index),
                      (o = parseInt(t / 32, 10)),
                      (r[o] = (r[o] || 0) | (1 << t % 32)));
                  },
                  null,
                  !0,
                ),
                { u: n, key: r }
              );
            })(r.v, e).u),
            Object.assign(t, o.va, e, o.za),
            (e = n.F)))
              ((o = e[i]) || 0 === o) && (t[i] = o);
            for (i = Mo, e = Object.getOwnPropertyNames(t), o = 0; o < e.length; o++)
              t[(r = e[o])] = So(i, t[r], t);
            n.A = t;
          }
          ((e = Ko.prototype).flush = function() {
            Wo();
          }),
            (e.ta = function(t) {
              return Hr(t);
            }),
            (e.Da = function(t) {
              return Rr(t);
            }),
            (e.prepareTemplate = function(t, e, n) {
              this.prepareTemplateDom(t, e), this.prepareTemplateStyles(t, e, n);
            }),
            (e.prepareTemplateStyles = function(t, e, n) {
              if (!t._prepared) {
                Sr || Po[e] || (Po[e] = Vr(e)),
                  (t._prepared = !0),
                  (t.name = e),
                  (t.extends = n),
                  (qo[e] = t);
                var r = Jr(t),
                  o = Xr(r);
                n = { is: e, extends: n };
                for (
                  var i = [], a = t.content.querySelectorAll('style'), l = 0;
                  l < a.length;
                  l++
                ) {
                  var s = a[l];
                  if (s.hasAttribute('shady-unscoped')) {
                    if (!Sr) {
                      var c = s.textContent;
                      Lr.has(c) || (Lr.add(c), (c = s.cloneNode(!0)), document.head.appendChild(c)),
                        s.parentNode.removeChild(s);
                    }
                  } else i.push(s.textContent), s.parentNode.removeChild(s);
                }
                (i = i.join('').trim()),
                  Zo(this),
                  o ||
                    ((a = !r) &&
                      ((a = Dr.test(i) || jr.test(i)), (Dr.lastIndex = 0), (jr.lastIndex = 0)),
                    (l = cr(i)),
                    a && Tr && this.a && this.a.transformRules(l, e),
                    (t._styleAst = l)),
                  (a = []),
                  Tr ||
                    (a = (function(t) {
                      var e = {},
                        n = [],
                        r = 0;
                      for (var o in (Ir(
                        t,
                        function(t) {
                          No(t), (t.index = r++), (t = t.i.cssText);
                          for (var n; (n = Mr.exec(t)); ) {
                            var o = n[1];
                            ':' !== n[2] && (e[o] = !0);
                          }
                        },
                        function(t) {
                          n.push(t);
                        },
                      ),
                      (t.b = n),
                      (t = []),
                      e))
                        t.push(o);
                      return t;
                    })(t._styleAst)),
                  (a.length && !Tr) ||
                    ((l = Sr ? t.content : null),
                    (e = Po[e] || null),
                    (r = (r = eo(n, t._styleAst, null, r, o ? i : '')).length
                      ? Br(r, n.is, l, e)
                      : null),
                    (t._style = r)),
                  (t.a = a);
              }
            }),
            (e.prepareTemplateDom = function(t, e) {
              var n = Jr(t);
              Sr ||
                'shady' === n ||
                t._domPrepared ||
                ((t._domPrepared = !0),
                (function(t, e) {
                  Zr(mo, t, function(t) {
                    Yr(t, e || '');
                  });
                })(t.content, e));
            }),
            (e.flushCustomStyles = function() {
              if ((Zo(this), this.b)) {
                var t = this.b.processStyles();
                if (this.b.enqueued && !Xr(this.f.cssBuild)) {
                  if (Tr) {
                    if (!this.f.cssBuild)
                      for (var e = 0; e < t.length; e++) {
                        var n = this.b.getStyleForCustomStyle(t[e]);
                        if (n && Tr && this.a) {
                          var r = Hr(n);
                          Zo(this), this.a.transformRules(r), (n.textContent = Rr(r));
                        }
                      }
                  } else {
                    for (Qo(this, this.c, this.f), e = 0; e < t.length; e++)
                      (n = this.b.getStyleForCustomStyle(t[e])) && Do(n, this.f.A);
                    this.l && this.styleDocument();
                  }
                  this.b.enqueued = !1;
                }
              }
            }),
            (e.styleElement = function(t, e) {
              var n = go(t);
              if (!n) {
                var r = Gr(t);
                (n = r.is), (r = r.J);
                var o = Po[n] || null;
                if ((n = qo[n]))
                  var i = n._styleAst,
                    a = n.a,
                    l = Jr(n);
                (i = new yo(i, o, a, r, l)), n && bo(t, i), (n = i);
              }
              if (
                (t !== this.c && (this.l = !0), e && ((n.F = n.F || {}), Object.assign(n.F, e)), Tr)
              ) {
                if (((e = n), (i = Gr(t).is), e.F))
                  for (var s in (a = e.F))
                    null === s ? t.style.removeProperty(s) : t.style.setProperty(s, a[s]);
                (!(s = qo[i]) && t !== this.c) ||
                  (s && '' !== Jr(s)) ||
                  !s ||
                  !s._style ||
                  Jo(s) ||
                  ((Jo(s) || s._applyShimValidatingVersion !== s._applyShimNextVersion) &&
                    (Zo(this),
                    this.a && this.a.transformRules(s._styleAst, i),
                    (s._style.textContent = eo(t, e.v)),
                    (function(t) {
                      (t._applyShimValidatingVersion = t._applyShimNextVersion),
                        t._validating ||
                          ((t._validating = !0),
                          Go.then(function() {
                            (t._applyShimCurrentVersion = t._applyShimNextVersion),
                              (t._validating = !1);
                          }));
                    })(s)),
                  Sr &&
                    (i = t.shadowRoot) &&
                    (i = i.querySelector('style')) &&
                    (i.textContent = eo(t, e.v)),
                  (e.v = s._styleAst));
              } else if (((s = n), this.flush(), Qo(this, t, s), s.c && s.c.length)) {
                (e = Gr(t).is),
                  (n = (i = Xo.fetch(e, s.A, s.c)) ? i.styleElement : null),
                  (a = s.o),
                  (l = i && i.o) || (l = e + '-' + (l = this.C[e] = (this.C[e] || 0) + 1)),
                  (s.o = l),
                  (l = s.o),
                  (r = Mo),
                  (r = n ? n.textContent || '' : xo(r, t, s.A, l));
                var c = (o = go(t)).a;
                c &&
                  !Sr &&
                  c !== n &&
                  (c._useCount--, 0 >= c._useCount && c.parentNode && c.parentNode.removeChild(c)),
                  Sr
                    ? o.a
                      ? ((o.a.textContent = r), (n = o.a))
                      : r && (n = Br(r, l, t.shadowRoot, o.b))
                    : n
                    ? n.parentNode ||
                      (_o && -1 < r.indexOf('@media') && (n.textContent = r), zr(n, null, o.b))
                    : r && (n = Br(r, l, null, o.b)),
                  n && ((n._useCount = n._useCount || 0), o.a != n && n._useCount++, (o.a = n)),
                  (l = n),
                  Sr ||
                    ((n = s.o),
                    (o = r = t.getAttribute('class') || ''),
                    a && (o = r.replace(new RegExp('\\s*x-scope\\s*' + a + '\\s*', 'g'), ' ')),
                    r !== (o += (o ? ' ' : '') + 'x-scope ' + n) && qr(t, o)),
                  i || Xo.store(e, s.A, l, s.o);
              }
            }),
            (e.styleDocument = function(t) {
              this.styleSubtree(this.c, t);
            }),
            (e.styleSubtree = function(t, e) {
              var n = t.shadowRoot;
              if (
                ((n || t === this.c) && this.styleElement(t, e),
                (e = n && (n.children || n.childNodes)))
              )
                for (t = 0; t < e.length; t++) this.styleSubtree(e[t]);
              else if ((t = t.children || t.childNodes))
                for (e = 0; e < t.length; e++) this.styleSubtree(t[e]);
            }),
            (e.fa = function(t) {
              var e = this,
                n = Jr(t);
              if ((n !== this.f.cssBuild && (this.f.cssBuild = n), !Xr(n))) {
                var r = Hr(t);
                Ir(r, function(t) {
                  if (Sr) ao(t);
                  else {
                    var r = mo;
                    (t.selector = t.parsedSelector),
                      ao(t),
                      (t.selector = t.j = ro(r, t, r.c, void 0, void 0));
                  }
                  Tr && '' === n && (Zo(e), e.a && e.a.transformRule(t));
                }),
                  Tr ? (t.textContent = Rr(r)) : this.f.v.rules.push(r);
              }
            }),
            (e.getComputedStyleValue = function(t, e) {
              var n;
              return (
                Tr || (n = (go(t) || go(Yo(this, t))).A[e]),
                (n = n || window.getComputedStyle(t).getPropertyValue(e)) ? n.trim() : ''
              );
            }),
            (e.Ca = function(t, e) {
              var n = t.getRootNode();
              if (((e = e ? e.split(/\s/) : []), !(n = n.host && n.host.localName))) {
                var r = t.getAttribute('class');
                if (r) {
                  r = r.split(/\s/);
                  for (var o = 0; o < r.length; o++)
                    if (r[o] === mo.a) {
                      n = r[o + 1];
                      break;
                    }
                }
              }
              n && e.push(mo.a, n),
                Tr || ((n = go(t)) && n.o && e.push(Mo.a, n.o)),
                qr(t, e.join(' '));
            }),
            (e.qa = function(t) {
              return go(t);
            }),
            (e.Ba = function(t, e) {
              Yr(t, e);
            }),
            (e.Ea = function(t, e) {
              Yr(t, e, !0);
            }),
            (e.Aa = function(t) {
              return Io(t);
            }),
            (e.sa = function(t) {
              return Fo(t);
            }),
            (Ko.prototype.flush = Ko.prototype.flush),
            (Ko.prototype.prepareTemplate = Ko.prototype.prepareTemplate),
            (Ko.prototype.styleElement = Ko.prototype.styleElement),
            (Ko.prototype.styleDocument = Ko.prototype.styleDocument),
            (Ko.prototype.styleSubtree = Ko.prototype.styleSubtree),
            (Ko.prototype.getComputedStyleValue = Ko.prototype.getComputedStyleValue),
            (Ko.prototype.setElementClass = Ko.prototype.Ca),
            (Ko.prototype._styleInfoForNode = Ko.prototype.qa),
            (Ko.prototype.transformCustomStyleForDocument = Ko.prototype.fa),
            (Ko.prototype.getStyleAst = Ko.prototype.ta),
            (Ko.prototype.styleAstToString = Ko.prototype.Da),
            (Ko.prototype.flushCustomStyles = Ko.prototype.flushCustomStyles),
            (Ko.prototype.scopeNode = Ko.prototype.Ba),
            (Ko.prototype.unscopeNode = Ko.prototype.Ea),
            (Ko.prototype.scopeForNode = Ko.prototype.Aa),
            (Ko.prototype.currentScopeForNode = Ko.prototype.sa),
            Object.defineProperties(Ko.prototype, {
              nativeShadow: {
                get: function() {
                  return Sr;
                },
              },
              nativeCss: {
                get: function() {
                  return Tr;
                },
              },
            });
          var ti,
            ei,
            ni = new Ko();
          window.ShadyCSS &&
            ((ti = window.ShadyCSS.ApplyShim), (ei = window.ShadyCSS.CustomStyleInterface)),
            (window.ShadyCSS = {
              ScopingShim: ni,
              prepareTemplate: function(t, e, n) {
                ni.flushCustomStyles(), ni.prepareTemplate(t, e, n);
              },
              prepareTemplateDom: function(t, e) {
                ni.prepareTemplateDom(t, e);
              },
              prepareTemplateStyles: function(t, e, n) {
                ni.flushCustomStyles(), ni.prepareTemplateStyles(t, e, n);
              },
              styleSubtree: function(t, e) {
                ni.flushCustomStyles(), ni.styleSubtree(t, e);
              },
              styleElement: function(t) {
                ni.flushCustomStyles(), ni.styleElement(t);
              },
              styleDocument: function(t) {
                ni.flushCustomStyles(), ni.styleDocument(t);
              },
              flushCustomStyles: function() {
                ni.flushCustomStyles();
              },
              getComputedStyleValue: function(t, e) {
                return ni.getComputedStyleValue(t, e);
              },
              nativeCss: Tr,
              nativeShadow: Sr,
              cssBuild: xr,
            }),
            ti && (window.ShadyCSS.ApplyShim = ti),
            ei && (window.ShadyCSS.CustomStyleInterface = ei);
        }.call(this));
      }.call(this, n(11)));
    },
    63: function(t, e, n) {
      'use strict';
      n.d(e, 'a', function() {
        return p;
      });
      var r = function(t) {
          return 'string' == typeof t;
        },
        o = function(t) {
          return (
            r(t) ||
            (function(t) {
              return 'number' == typeof t;
            })(t)
          );
        },
        i = Array.isArray,
        a = function(t) {
          return 'object' == typeof t && null !== t;
        },
        l = Object.assign,
        s = function(t, e, n) {
          for (var r = n, o = 0; o < t.length; o++) {
            var a = t[o];
            r = i(a) ? s(a, e, r) : e(r, a);
          }
          return r;
        },
        c = function(t) {
          var e = t.data,
            n = e.props;
          return (
            e.attrs || (e.attrs = {}),
            n &&
              (n.className && ((n.class = n.className), delete n.className),
              l(n, e.attrs),
              l(e.attrs, n),
              delete e.props),
            (e.ns = 'http://www.w3.org/2000/svg'),
            t.children && t.children.forEach(c),
            t
          );
        },
        u = {
          dataset: 'dataset',
          props: 'props',
          attrs: 'attrs',
          style: 'style',
          class: 'class',
          hook: 'hook',
          on: 'on',
        },
        f = { for: 'attrs', role: 'attrs', tabindex: 'attrs', colspan: 'attrs', rowspan: 'attrs' },
        d = function(t) {
          return s(
            t,
            function(t, e) {
              var n,
                r,
                i =
                  a((r = e)) && 'sel' in r && 'data' in r
                    ? e
                    : o((n = e))
                    ? {
                        text: n,
                        sel: void 0,
                        data: void 0,
                        children: void 0,
                        elm: void 0,
                        key: void 0,
                      }
                    : void 0;
              return t.push(i), t;
            },
            [],
          );
        },
        p = function(t, e) {
          for (var n = [], r = arguments.length - 2; r-- > 0; ) n[r] = arguments[r + 2];
          if ('function' == typeof t) return t(e || {}, n);
          var i = (function(t) {
              return t.length > 1 || !o(t[0]) ? void 0 : t[0];
            })(n),
            s = {
              sel: t,
              data: e
                ? (function(t) {
                    var e,
                      n,
                      r,
                      o,
                      i,
                      s,
                      c,
                      d = {};
                    for (var p in t)
                      'key' !== p &&
                        ((o = t[p]),
                        (i = a(o)),
                        (s = p.indexOf('-')) > -1
                          ? ((c = p.slice(0, s)),
                            (e = u[c])
                              ? (n = p.slice(s + 1))
                              : ((e = 'data' === c || 'aria' === c ? 'attrs' : 'props'), (n = p)))
                          : 'class' !== p || i
                          ? ((e = u[p] || f[p] || 'props'), (n = p))
                          : ((e = 'props'), (n = 'className')),
                        (r = d[e] || (d[e] = {})),
                        i && p in u ? l(r, o) : (r[n] = o));
                    return d;
                  })(e)
                : {},
              children: i ? void 0 : d(n),
              text: i,
              elm: void 0,
              key: e ? e.key : void 0,
            };
          return 'svg' === t && c(s), s;
        };
    },
  },
]);
//# sourceMappingURL=0.bundle.js.map
