!(function(t) {
  function e(e) {
    for (var n, r, o = e[0], s = e[1], a = 0, u = []; a < o.length; a++)
      (r = o[a]), i[r] && u.push(i[r][0]), (i[r] = 0);
    for (n in s) Object.prototype.hasOwnProperty.call(s, n) && (t[n] = s[n]);
    for (l && l(e); u.length; ) u.shift()();
  }
  var n = {},
    i = { 2: 0 };
  function r(e) {
    if (n[e]) return n[e].exports;
    var i = (n[e] = { i: e, l: !1, exports: {} });
    return t[e].call(i.exports, i, i.exports, r), (i.l = !0), i.exports;
  }
  (r.e = function(t) {
    var e = [],
      n = i[t];
    if (0 !== n)
      if (n) e.push(n[2]);
      else {
        var o = new Promise(function(e, r) {
          n = i[t] = [e, r];
        });
        e.push((n[2] = o));
        var s,
          a = document.getElementsByTagName('head')[0],
          l = document.createElement('script');
        (l.charset = 'utf-8'),
          (l.timeout = 120),
          r.nc && l.setAttribute('nonce', r.nc),
          (l.src = (function(t) {
            return r.p + '' + t + '.bundle.js';
          })(t)),
          (s = function(e) {
            (l.onerror = l.onload = null), clearTimeout(u);
            var n = i[t];
            if (0 !== n) {
              if (n) {
                var r = e && ('load' === e.type ? 'missing' : e.type),
                  o = e && e.target && e.target.src,
                  s = new Error('Loading chunk ' + t + ' failed.\n(' + r + ': ' + o + ')');
                (s.type = r), (s.request = o), n[1](s);
              }
              i[t] = void 0;
            }
          });
        var u = setTimeout(function() {
          s({ type: 'timeout', target: l });
        }, 12e4);
        (l.onerror = l.onload = s), a.appendChild(l);
      }
    return Promise.all(e);
  }),
    (r.m = t),
    (r.c = n),
    (r.d = function(t, e, n) {
      r.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: n });
    }),
    (r.r = function(t) {
      'undefined' != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(t, Symbol.toStringTag, { value: 'Module' }),
        Object.defineProperty(t, '__esModule', { value: !0 });
    }),
    (r.t = function(t, e) {
      if ((1 & e && (t = r(t)), 8 & e)) return t;
      if (4 & e && 'object' == typeof t && t && t.__esModule) return t;
      var n = Object.create(null);
      if (
        (r.r(n),
        Object.defineProperty(n, 'default', { enumerable: !0, value: t }),
        2 & e && 'string' != typeof t)
      )
        for (var i in t)
          r.d(
            n,
            i,
            function(e) {
              return t[e];
            }.bind(null, i),
          );
      return n;
    }),
    (r.n = function(t) {
      var e =
        t && t.__esModule
          ? function() {
              return t.default;
            }
          : function() {
              return t;
            };
      return r.d(e, 'a', e), e;
    }),
    (r.o = function(t, e) {
      return Object.prototype.hasOwnProperty.call(t, e);
    }),
    (r.p = ''),
    (r.oe = function(t) {
      throw (console.error(t), t);
    });
  var o = (window.webpackJsonp = window.webpackJsonp || []),
    s = o.push.bind(o);
  (o.push = e), (o = o.slice());
  for (var a = 0; a < o.length; a++) e(o[a]);
  var l = s;
  r((r.s = 25));
})([
  function(t, e, n) {
    var i;
    (function() {
      var n = this,
        r = n._,
        o = Array.prototype,
        s = Object.prototype,
        a = Function.prototype,
        l = o.push,
        u = o.slice,
        c = s.toString,
        h = s.hasOwnProperty,
        f = Array.isArray,
        d = Object.keys,
        p = a.bind,
        g = Object.create,
        m = function() {},
        v = function(t) {
          return t instanceof v ? t : this instanceof v ? void (this._wrapped = t) : new v(t);
        };
      void 0 !== t && t.exports && (e = t.exports = v), (e._ = v), (v.VERSION = '1.8.3');
      var y = function(t, e, n) {
          if (void 0 === e) return t;
          switch (null == n ? 3 : n) {
            case 1:
              return function(n) {
                return t.call(e, n);
              };
            case 2:
              return function(n, i) {
                return t.call(e, n, i);
              };
            case 3:
              return function(n, i, r) {
                return t.call(e, n, i, r);
              };
            case 4:
              return function(n, i, r, o) {
                return t.call(e, n, i, r, o);
              };
          }
          return function() {
            return t.apply(e, arguments);
          };
        },
        _ = function(t, e, n) {
          return null == t
            ? v.identity
            : v.isFunction(t)
            ? y(t, e, n)
            : v.isObject(t)
            ? v.matcher(t)
            : v.property(t);
        };
      v.iteratee = function(t, e) {
        return _(t, e, 1 / 0);
      };
      var b = function(t, e) {
          return function(n) {
            var i = arguments.length;
            if (i < 2 || null == n) return n;
            for (var r = 1; r < i; r++)
              for (var o = arguments[r], s = t(o), a = s.length, l = 0; l < a; l++) {
                var u = s[l];
                (e && void 0 !== n[u]) || (n[u] = o[u]);
              }
            return n;
          };
        },
        w = function(t) {
          if (!v.isObject(t)) return {};
          if (g) return g(t);
          m.prototype = t;
          var e = new m();
          return (m.prototype = null), e;
        },
        E = function(t) {
          return function(e) {
            return null == e ? void 0 : e[t];
          };
        },
        x = Math.pow(2, 53) - 1,
        T = E('length'),
        C = function(t) {
          var e = T(t);
          return 'number' == typeof e && e >= 0 && e <= x;
        };
      function S(t) {
        return function(e, n, i, r) {
          n = y(n, r, 4);
          var o = !C(e) && v.keys(e),
            s = (o || e).length,
            a = t > 0 ? 0 : s - 1;
          return (
            arguments.length < 3 && ((i = e[o ? o[a] : a]), (a += t)),
            (function(e, n, i, r, o, s) {
              for (; o >= 0 && o < s; o += t) {
                var a = r ? r[o] : o;
                i = n(i, e[a], a, e);
              }
              return i;
            })(e, n, i, o, a, s)
          );
        };
      }
      (v.each = v.forEach = function(t, e, n) {
        var i, r;
        if (((e = y(e, n)), C(t))) for (i = 0, r = t.length; i < r; i++) e(t[i], i, t);
        else {
          var o = v.keys(t);
          for (i = 0, r = o.length; i < r; i++) e(t[o[i]], o[i], t);
        }
        return t;
      }),
        (v.map = v.collect = function(t, e, n) {
          e = _(e, n);
          for (var i = !C(t) && v.keys(t), r = (i || t).length, o = Array(r), s = 0; s < r; s++) {
            var a = i ? i[s] : s;
            o[s] = e(t[a], a, t);
          }
          return o;
        }),
        (v.reduce = v.foldl = v.inject = S(1)),
        (v.reduceRight = v.foldr = S(-1)),
        (v.find = v.detect = function(t, e, n) {
          var i;
          if (void 0 !== (i = C(t) ? v.findIndex(t, e, n) : v.findKey(t, e, n)) && -1 !== i)
            return t[i];
        }),
        (v.filter = v.select = function(t, e, n) {
          var i = [];
          return (
            (e = _(e, n)),
            v.each(t, function(t, n, r) {
              e(t, n, r) && i.push(t);
            }),
            i
          );
        }),
        (v.reject = function(t, e, n) {
          return v.filter(t, v.negate(_(e)), n);
        }),
        (v.every = v.all = function(t, e, n) {
          e = _(e, n);
          for (var i = !C(t) && v.keys(t), r = (i || t).length, o = 0; o < r; o++) {
            var s = i ? i[o] : o;
            if (!e(t[s], s, t)) return !1;
          }
          return !0;
        }),
        (v.some = v.any = function(t, e, n) {
          e = _(e, n);
          for (var i = !C(t) && v.keys(t), r = (i || t).length, o = 0; o < r; o++) {
            var s = i ? i[o] : o;
            if (e(t[s], s, t)) return !0;
          }
          return !1;
        }),
        (v.contains = v.includes = v.include = function(t, e, n, i) {
          return (
            C(t) || (t = v.values(t)),
            ('number' != typeof n || i) && (n = 0),
            v.indexOf(t, e, n) >= 0
          );
        }),
        (v.invoke = function(t, e) {
          var n = u.call(arguments, 2),
            i = v.isFunction(e);
          return v.map(t, function(t) {
            var r = i ? e : t[e];
            return null == r ? r : r.apply(t, n);
          });
        }),
        (v.pluck = function(t, e) {
          return v.map(t, v.property(e));
        }),
        (v.where = function(t, e) {
          return v.filter(t, v.matcher(e));
        }),
        (v.findWhere = function(t, e) {
          return v.find(t, v.matcher(e));
        }),
        (v.max = function(t, e, n) {
          var i,
            r,
            o = -1 / 0,
            s = -1 / 0;
          if (null == e && null != t)
            for (var a = 0, l = (t = C(t) ? t : v.values(t)).length; a < l; a++)
              (i = t[a]) > o && (o = i);
          else
            (e = _(e, n)),
              v.each(t, function(t, n, i) {
                ((r = e(t, n, i)) > s || (r === -1 / 0 && o === -1 / 0)) && ((o = t), (s = r));
              });
          return o;
        }),
        (v.min = function(t, e, n) {
          var i,
            r,
            o = 1 / 0,
            s = 1 / 0;
          if (null == e && null != t)
            for (var a = 0, l = (t = C(t) ? t : v.values(t)).length; a < l; a++)
              (i = t[a]) < o && (o = i);
          else
            (e = _(e, n)),
              v.each(t, function(t, n, i) {
                ((r = e(t, n, i)) < s || (r === 1 / 0 && o === 1 / 0)) && ((o = t), (s = r));
              });
          return o;
        }),
        (v.shuffle = function(t) {
          for (var e, n = C(t) ? t : v.values(t), i = n.length, r = Array(i), o = 0; o < i; o++)
            (e = v.random(0, o)) !== o && (r[o] = r[e]), (r[e] = n[o]);
          return r;
        }),
        (v.sample = function(t, e, n) {
          return null == e || n
            ? (C(t) || (t = v.values(t)), t[v.random(t.length - 1)])
            : v.shuffle(t).slice(0, Math.max(0, e));
        }),
        (v.sortBy = function(t, e, n) {
          return (
            (e = _(e, n)),
            v.pluck(
              v
                .map(t, function(t, n, i) {
                  return { value: t, index: n, criteria: e(t, n, i) };
                })
                .sort(function(t, e) {
                  var n = t.criteria,
                    i = e.criteria;
                  if (n !== i) {
                    if (n > i || void 0 === n) return 1;
                    if (n < i || void 0 === i) return -1;
                  }
                  return t.index - e.index;
                }),
              'value',
            )
          );
        });
      var A = function(t) {
        return function(e, n, i) {
          var r = {};
          return (
            (n = _(n, i)),
            v.each(e, function(i, o) {
              var s = n(i, o, e);
              t(r, i, s);
            }),
            r
          );
        };
      };
      (v.groupBy = A(function(t, e, n) {
        v.has(t, n) ? t[n].push(e) : (t[n] = [e]);
      })),
        (v.indexBy = A(function(t, e, n) {
          t[n] = e;
        })),
        (v.countBy = A(function(t, e, n) {
          v.has(t, n) ? t[n]++ : (t[n] = 1);
        })),
        (v.toArray = function(t) {
          return t ? (v.isArray(t) ? u.call(t) : C(t) ? v.map(t, v.identity) : v.values(t)) : [];
        }),
        (v.size = function(t) {
          return null == t ? 0 : C(t) ? t.length : v.keys(t).length;
        }),
        (v.partition = function(t, e, n) {
          e = _(e, n);
          var i = [],
            r = [];
          return (
            v.each(t, function(t, n, o) {
              (e(t, n, o) ? i : r).push(t);
            }),
            [i, r]
          );
        }),
        (v.first = v.head = v.take = function(t, e, n) {
          if (null != t) return null == e || n ? t[0] : v.initial(t, t.length - e);
        }),
        (v.initial = function(t, e, n) {
          return u.call(t, 0, Math.max(0, t.length - (null == e || n ? 1 : e)));
        }),
        (v.last = function(t, e, n) {
          if (null != t)
            return null == e || n ? t[t.length - 1] : v.rest(t, Math.max(0, t.length - e));
        }),
        (v.rest = v.tail = v.drop = function(t, e, n) {
          return u.call(t, null == e || n ? 1 : e);
        }),
        (v.compact = function(t) {
          return v.filter(t, v.identity);
        });
      var O = function(t, e, n, i) {
        for (var r = [], o = 0, s = i || 0, a = T(t); s < a; s++) {
          var l = t[s];
          if (C(l) && (v.isArray(l) || v.isArguments(l))) {
            e || (l = O(l, e, n));
            var u = 0,
              c = l.length;
            for (r.length += c; u < c; ) r[o++] = l[u++];
          } else n || (r[o++] = l);
        }
        return r;
      };
      function D(t) {
        return function(e, n, i) {
          n = _(n, i);
          for (var r = T(e), o = t > 0 ? 0 : r - 1; o >= 0 && o < r; o += t)
            if (n(e[o], o, e)) return o;
          return -1;
        };
      }
      function I(t, e, n) {
        return function(i, r, o) {
          var s = 0,
            a = T(i);
          if ('number' == typeof o)
            t > 0
              ? (s = o >= 0 ? o : Math.max(o + a, s))
              : (a = o >= 0 ? Math.min(o + 1, a) : o + a + 1);
          else if (n && o && a) return i[(o = n(i, r))] === r ? o : -1;
          if (r != r) return (o = e(u.call(i, s, a), v.isNaN)) >= 0 ? o + s : -1;
          for (o = t > 0 ? s : a - 1; o >= 0 && o < a; o += t) if (i[o] === r) return o;
          return -1;
        };
      }
      (v.flatten = function(t, e) {
        return O(t, e, !1);
      }),
        (v.without = function(t) {
          return v.difference(t, u.call(arguments, 1));
        }),
        (v.uniq = v.unique = function(t, e, n, i) {
          v.isBoolean(e) || ((i = n), (n = e), (e = !1)), null != n && (n = _(n, i));
          for (var r = [], o = [], s = 0, a = T(t); s < a; s++) {
            var l = t[s],
              u = n ? n(l, s, t) : l;
            e
              ? ((s && o === u) || r.push(l), (o = u))
              : n
              ? v.contains(o, u) || (o.push(u), r.push(l))
              : v.contains(r, l) || r.push(l);
          }
          return r;
        }),
        (v.union = function() {
          return v.uniq(O(arguments, !0, !0));
        }),
        (v.intersection = function(t) {
          for (var e = [], n = arguments.length, i = 0, r = T(t); i < r; i++) {
            var o = t[i];
            if (!v.contains(e, o)) {
              for (var s = 1; s < n && v.contains(arguments[s], o); s++);
              s === n && e.push(o);
            }
          }
          return e;
        }),
        (v.difference = function(t) {
          var e = O(arguments, !0, !0, 1);
          return v.filter(t, function(t) {
            return !v.contains(e, t);
          });
        }),
        (v.zip = function() {
          return v.unzip(arguments);
        }),
        (v.unzip = function(t) {
          for (var e = (t && v.max(t, T).length) || 0, n = Array(e), i = 0; i < e; i++)
            n[i] = v.pluck(t, i);
          return n;
        }),
        (v.object = function(t, e) {
          for (var n = {}, i = 0, r = T(t); i < r; i++)
            e ? (n[t[i]] = e[i]) : (n[t[i][0]] = t[i][1]);
          return n;
        }),
        (v.findIndex = D(1)),
        (v.findLastIndex = D(-1)),
        (v.sortedIndex = function(t, e, n, i) {
          for (var r = (n = _(n, i, 1))(e), o = 0, s = T(t); o < s; ) {
            var a = Math.floor((o + s) / 2);
            n(t[a]) < r ? (o = a + 1) : (s = a);
          }
          return o;
        }),
        (v.indexOf = I(1, v.findIndex, v.sortedIndex)),
        (v.lastIndexOf = I(-1, v.findLastIndex)),
        (v.range = function(t, e, n) {
          null == e && ((e = t || 0), (t = 0)), (n = n || 1);
          for (var i = Math.max(Math.ceil((e - t) / n), 0), r = Array(i), o = 0; o < i; o++, t += n)
            r[o] = t;
          return r;
        });
      var k = function(t, e, n, i, r) {
        if (!(i instanceof e)) return t.apply(n, r);
        var o = w(t.prototype),
          s = t.apply(o, r);
        return v.isObject(s) ? s : o;
      };
      (v.bind = function(t, e) {
        if (p && t.bind === p) return p.apply(t, u.call(arguments, 1));
        if (!v.isFunction(t)) throw new TypeError('Bind must be called on a function');
        var n = u.call(arguments, 2),
          i = function() {
            return k(t, i, e, this, n.concat(u.call(arguments)));
          };
        return i;
      }),
        (v.partial = function(t) {
          var e = u.call(arguments, 1),
            n = function() {
              for (var i = 0, r = e.length, o = Array(r), s = 0; s < r; s++)
                o[s] = e[s] === v ? arguments[i++] : e[s];
              for (; i < arguments.length; ) o.push(arguments[i++]);
              return k(t, n, this, this, o);
            };
          return n;
        }),
        (v.bindAll = function(t) {
          var e,
            n,
            i = arguments.length;
          if (i <= 1) throw new Error('bindAll must be passed function names');
          for (e = 1; e < i; e++) t[(n = arguments[e])] = v.bind(t[n], t);
          return t;
        }),
        (v.memoize = function(t, e) {
          var n = function(i) {
            var r = n.cache,
              o = '' + (e ? e.apply(this, arguments) : i);
            return v.has(r, o) || (r[o] = t.apply(this, arguments)), r[o];
          };
          return (n.cache = {}), n;
        }),
        (v.delay = function(t, e) {
          var n = u.call(arguments, 2);
          return setTimeout(function() {
            return t.apply(null, n);
          }, e);
        }),
        (v.defer = v.partial(v.delay, v, 1)),
        (v.throttle = function(t, e, n) {
          var i,
            r,
            o,
            s = null,
            a = 0;
          n || (n = {});
          var l = function() {
            (a = !1 === n.leading ? 0 : v.now()),
              (s = null),
              (o = t.apply(i, r)),
              s || (i = r = null);
          };
          return function() {
            var u = v.now();
            a || !1 !== n.leading || (a = u);
            var c = e - (u - a);
            return (
              (i = this),
              (r = arguments),
              c <= 0 || c > e
                ? (s && (clearTimeout(s), (s = null)),
                  (a = u),
                  (o = t.apply(i, r)),
                  s || (i = r = null))
                : s || !1 === n.trailing || (s = setTimeout(l, c)),
              o
            );
          };
        }),
        (v.debounce = function(t, e, n) {
          var i,
            r,
            o,
            s,
            a,
            l = function() {
              var u = v.now() - s;
              u < e && u >= 0
                ? (i = setTimeout(l, e - u))
                : ((i = null), n || ((a = t.apply(o, r)), i || (o = r = null)));
            };
          return function() {
            (o = this), (r = arguments), (s = v.now());
            var u = n && !i;
            return i || (i = setTimeout(l, e)), u && ((a = t.apply(o, r)), (o = r = null)), a;
          };
        }),
        (v.wrap = function(t, e) {
          return v.partial(e, t);
        }),
        (v.negate = function(t) {
          return function() {
            return !t.apply(this, arguments);
          };
        }),
        (v.compose = function() {
          var t = arguments,
            e = t.length - 1;
          return function() {
            for (var n = e, i = t[e].apply(this, arguments); n--; ) i = t[n].call(this, i);
            return i;
          };
        }),
        (v.after = function(t, e) {
          return function() {
            if (--t < 1) return e.apply(this, arguments);
          };
        }),
        (v.before = function(t, e) {
          var n;
          return function() {
            return --t > 0 && (n = e.apply(this, arguments)), t <= 1 && (e = null), n;
          };
        }),
        (v.once = v.partial(v.before, 2));
      var N = !{ toString: null }.propertyIsEnumerable('toString'),
        R = [
          'valueOf',
          'isPrototypeOf',
          'toString',
          'propertyIsEnumerable',
          'hasOwnProperty',
          'toLocaleString',
        ];
      function P(t, e) {
        var n = R.length,
          i = t.constructor,
          r = (v.isFunction(i) && i.prototype) || s,
          o = 'constructor';
        for (v.has(t, o) && !v.contains(e, o) && e.push(o); n--; )
          (o = R[n]) in t && t[o] !== r[o] && !v.contains(e, o) && e.push(o);
      }
      (v.keys = function(t) {
        if (!v.isObject(t)) return [];
        if (d) return d(t);
        var e = [];
        for (var n in t) v.has(t, n) && e.push(n);
        return N && P(t, e), e;
      }),
        (v.allKeys = function(t) {
          if (!v.isObject(t)) return [];
          var e = [];
          for (var n in t) e.push(n);
          return N && P(t, e), e;
        }),
        (v.values = function(t) {
          for (var e = v.keys(t), n = e.length, i = Array(n), r = 0; r < n; r++) i[r] = t[e[r]];
          return i;
        }),
        (v.mapObject = function(t, e, n) {
          e = _(e, n);
          for (var i, r = v.keys(t), o = r.length, s = {}, a = 0; a < o; a++)
            s[(i = r[a])] = e(t[i], i, t);
          return s;
        }),
        (v.pairs = function(t) {
          for (var e = v.keys(t), n = e.length, i = Array(n), r = 0; r < n; r++)
            i[r] = [e[r], t[e[r]]];
          return i;
        }),
        (v.invert = function(t) {
          for (var e = {}, n = v.keys(t), i = 0, r = n.length; i < r; i++) e[t[n[i]]] = n[i];
          return e;
        }),
        (v.functions = v.methods = function(t) {
          var e = [];
          for (var n in t) v.isFunction(t[n]) && e.push(n);
          return e.sort();
        }),
        (v.extend = b(v.allKeys)),
        (v.extendOwn = v.assign = b(v.keys)),
        (v.findKey = function(t, e, n) {
          e = _(e, n);
          for (var i, r = v.keys(t), o = 0, s = r.length; o < s; o++)
            if (e(t[(i = r[o])], i, t)) return i;
        }),
        (v.pick = function(t, e, n) {
          var i,
            r,
            o = {},
            s = t;
          if (null == s) return o;
          v.isFunction(e)
            ? ((r = v.allKeys(s)), (i = y(e, n)))
            : ((r = O(arguments, !1, !1, 1)),
              (i = function(t, e, n) {
                return e in n;
              }),
              (s = Object(s)));
          for (var a = 0, l = r.length; a < l; a++) {
            var u = r[a],
              c = s[u];
            i(c, u, s) && (o[u] = c);
          }
          return o;
        }),
        (v.omit = function(t, e, n) {
          if (v.isFunction(e)) e = v.negate(e);
          else {
            var i = v.map(O(arguments, !1, !1, 1), String);
            e = function(t, e) {
              return !v.contains(i, e);
            };
          }
          return v.pick(t, e, n);
        }),
        (v.defaults = b(v.allKeys, !0)),
        (v.create = function(t, e) {
          var n = w(t);
          return e && v.extendOwn(n, e), n;
        }),
        (v.clone = function(t) {
          return v.isObject(t) ? (v.isArray(t) ? t.slice() : v.extend({}, t)) : t;
        }),
        (v.tap = function(t, e) {
          return e(t), t;
        }),
        (v.isMatch = function(t, e) {
          var n = v.keys(e),
            i = n.length;
          if (null == t) return !i;
          for (var r = Object(t), o = 0; o < i; o++) {
            var s = n[o];
            if (e[s] !== r[s] || !(s in r)) return !1;
          }
          return !0;
        });
      var L = function(t, e, n, i) {
        if (t === e) return 0 !== t || 1 / t == 1 / e;
        if (null == t || null == e) return t === e;
        t instanceof v && (t = t._wrapped), e instanceof v && (e = e._wrapped);
        var r = c.call(t);
        if (r !== c.call(e)) return !1;
        switch (r) {
          case '[object RegExp]':
          case '[object String]':
            return '' + t == '' + e;
          case '[object Number]':
            return +t != +t ? +e != +e : 0 == +t ? 1 / +t == 1 / e : +t == +e;
          case '[object Date]':
          case '[object Boolean]':
            return +t == +e;
        }
        var o = '[object Array]' === r;
        if (!o) {
          if ('object' != typeof t || 'object' != typeof e) return !1;
          var s = t.constructor,
            a = e.constructor;
          if (
            s !== a &&
            !(v.isFunction(s) && s instanceof s && v.isFunction(a) && a instanceof a) &&
            'constructor' in t &&
            'constructor' in e
          )
            return !1;
        }
        (n = n || []), (i = i || []);
        for (var l = n.length; l--; ) if (n[l] === t) return i[l] === e;
        if ((n.push(t), i.push(e), o)) {
          if ((l = t.length) !== e.length) return !1;
          for (; l--; ) if (!L(t[l], e[l], n, i)) return !1;
        } else {
          var u,
            h = v.keys(t);
          if (((l = h.length), v.keys(e).length !== l)) return !1;
          for (; l--; ) if (((u = h[l]), !v.has(e, u) || !L(t[u], e[u], n, i))) return !1;
        }
        return n.pop(), i.pop(), !0;
      };
      (v.isEqual = function(t, e) {
        return L(t, e);
      }),
        (v.isEmpty = function(t) {
          return (
            null == t ||
            (C(t) && (v.isArray(t) || v.isString(t) || v.isArguments(t))
              ? 0 === t.length
              : 0 === v.keys(t).length)
          );
        }),
        (v.isElement = function(t) {
          return !(!t || 1 !== t.nodeType);
        }),
        (v.isArray =
          f ||
          function(t) {
            return '[object Array]' === c.call(t);
          }),
        (v.isObject = function(t) {
          var e = typeof t;
          return 'function' === e || ('object' === e && !!t);
        }),
        v.each(['Arguments', 'Function', 'String', 'Number', 'Date', 'RegExp', 'Error'], function(
          t,
        ) {
          v['is' + t] = function(e) {
            return c.call(e) === '[object ' + t + ']';
          };
        }),
        v.isArguments(arguments) ||
          (v.isArguments = function(t) {
            return v.has(t, 'callee');
          }),
        'function' != typeof /./ &&
          'object' != typeof Int8Array &&
          (v.isFunction = function(t) {
            return 'function' == typeof t || !1;
          }),
        (v.isFinite = function(t) {
          return isFinite(t) && !isNaN(parseFloat(t));
        }),
        (v.isNaN = function(t) {
          return v.isNumber(t) && t !== +t;
        }),
        (v.isBoolean = function(t) {
          return !0 === t || !1 === t || '[object Boolean]' === c.call(t);
        }),
        (v.isNull = function(t) {
          return null === t;
        }),
        (v.isUndefined = function(t) {
          return void 0 === t;
        }),
        (v.has = function(t, e) {
          return null != t && h.call(t, e);
        }),
        (v.noConflict = function() {
          return (n._ = r), this;
        }),
        (v.identity = function(t) {
          return t;
        }),
        (v.constant = function(t) {
          return function() {
            return t;
          };
        }),
        (v.noop = function() {}),
        (v.property = E),
        (v.propertyOf = function(t) {
          return null == t
            ? function() {}
            : function(e) {
                return t[e];
              };
        }),
        (v.matcher = v.matches = function(t) {
          return (
            (t = v.extendOwn({}, t)),
            function(e) {
              return v.isMatch(e, t);
            }
          );
        }),
        (v.times = function(t, e, n) {
          var i = Array(Math.max(0, t));
          e = y(e, n, 1);
          for (var r = 0; r < t; r++) i[r] = e(r);
          return i;
        }),
        (v.random = function(t, e) {
          return null == e && ((e = t), (t = 0)), t + Math.floor(Math.random() * (e - t + 1));
        }),
        (v.now =
          Date.now ||
          function() {
            return new Date().getTime();
          });
      var M = {
          '&': '&amp;',
          '<': '&lt;',
          '>': '&gt;',
          '"': '&quot;',
          "'": '&#x27;',
          '`': '&#x60;',
        },
        V = v.invert(M),
        j = function(t) {
          var e = function(e) {
              return t[e];
            },
            n = '(?:' + v.keys(t).join('|') + ')',
            i = RegExp(n),
            r = RegExp(n, 'g');
          return function(t) {
            return (t = null == t ? '' : '' + t), i.test(t) ? t.replace(r, e) : t;
          };
        };
      (v.escape = j(M)),
        (v.unescape = j(V)),
        (v.result = function(t, e, n) {
          var i = null == t ? void 0 : t[e];
          return void 0 === i && (i = n), v.isFunction(i) ? i.call(t) : i;
        });
      var H = 0;
      (v.uniqueId = function(t) {
        var e = ++H + '';
        return t ? t + e : e;
      }),
        (v.templateSettings = {
          evaluate: /<%([\s\S]+?)%>/g,
          interpolate: /<%=([\s\S]+?)%>/g,
          escape: /<%-([\s\S]+?)%>/g,
        });
      var F = /(.)^/,
        q = { "'": "'", '\\': '\\', '\r': 'r', '\n': 'n', '\u2028': 'u2028', '\u2029': 'u2029' },
        B = /\\|'|\r|\n|\u2028|\u2029/g,
        U = function(t) {
          return '\\' + q[t];
        };
      (v.template = function(t, e, n) {
        !e && n && (e = n), (e = v.defaults({}, e, v.templateSettings));
        var i = RegExp(
            [(e.escape || F).source, (e.interpolate || F).source, (e.evaluate || F).source].join(
              '|',
            ) + '|$',
            'g',
          ),
          r = 0,
          o = "__p+='";
        t.replace(i, function(e, n, i, s, a) {
          return (
            (o += t.slice(r, a).replace(B, U)),
            (r = a + e.length),
            n
              ? (o += "'+\n((__t=(" + n + "))==null?'':_.escape(__t))+\n'")
              : i
              ? (o += "'+\n((__t=(" + i + "))==null?'':__t)+\n'")
              : s && (o += "';\n" + s + "\n__p+='"),
            e
          );
        }),
          (o += "';\n"),
          e.variable || (o = 'with(obj||{}){\n' + o + '}\n'),
          (o =
            "var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n" +
            o +
            'return __p;\n');
        try {
          var s = new Function(e.variable || 'obj', '_', o);
        } catch (t) {
          throw ((t.source = o), t);
        }
        var a = function(t) {
            return s.call(this, t, v);
          },
          l = e.variable || 'obj';
        return (a.source = 'function(' + l + '){\n' + o + '}'), a;
      }),
        (v.chain = function(t) {
          var e = v(t);
          return (e._chain = !0), e;
        });
      var W = function(t, e) {
        return t._chain ? v(e).chain() : e;
      };
      (v.mixin = function(t) {
        v.each(v.functions(t), function(e) {
          var n = (v[e] = t[e]);
          v.prototype[e] = function() {
            var t = [this._wrapped];
            return l.apply(t, arguments), W(this, n.apply(v, t));
          };
        });
      }),
        v.mixin(v),
        v.each(['pop', 'push', 'reverse', 'shift', 'sort', 'splice', 'unshift'], function(t) {
          var e = o[t];
          v.prototype[t] = function() {
            var n = this._wrapped;
            return (
              e.apply(n, arguments),
              ('shift' !== t && 'splice' !== t) || 0 !== n.length || delete n[0],
              W(this, n)
            );
          };
        }),
        v.each(['concat', 'join', 'slice'], function(t) {
          var e = o[t];
          v.prototype[t] = function() {
            return W(this, e.apply(this._wrapped, arguments));
          };
        }),
        (v.prototype.value = function() {
          return this._wrapped;
        }),
        (v.prototype.valueOf = v.prototype.toJSON = v.prototype.value),
        (v.prototype.toString = function() {
          return '' + this._wrapped;
        }),
        void 0 ===
          (i = function() {
            return v;
          }.apply(e, [])) || (t.exports = i);
    }.call(this));
  },
  function(t, e, n) {
    'use strict';
    n.r(e),
      n.d(e, 'bindEvents', function() {
        return kt;
      }),
      n.d(e, 'unbindEvents', function() {
        return Nt;
      }),
      n.d(e, 'bindRequests', function() {
        return Rt;
      }),
      n.d(e, 'unbindRequests', function() {
        return Pt;
      }),
      n.d(e, 'mergeOptions', function() {
        return Lt;
      }),
      n.d(e, 'getOption', function() {
        return Mt;
      }),
      n.d(e, 'normalizeMethods', function() {
        return Vt;
      }),
      n.d(e, 'triggerMethod', function() {
        return jt;
      }),
      n.d(e, 'setDomApi', function() {
        return Ht;
      }),
      n.d(e, 'setRenderer', function() {
        return Ft;
      }),
      n.d(e, 'View', function() {
        return Et;
      }),
      n.d(e, 'CollectionView', function() {
        return St;
      }),
      n.d(e, 'MnObject', function() {
        return K;
      }),
      n.d(e, 'Region', function() {
        return gt;
      }),
      n.d(e, 'Behavior', function() {
        return Ot;
      }),
      n.d(e, 'Application', function() {
        return It;
      }),
      n.d(e, 'isEnabled', function() {
        return nt;
      }),
      n.d(e, 'setEnabled', function() {
        return it;
      }),
      n.d(e, 'monitorViewEvents', function() {
        return M;
      }),
      n.d(e, 'Events', function() {
        return B;
      }),
      n.d(e, 'extend', function() {
        return h;
      }),
      n.d(e, 'DomApi', function() {
        return ct;
      }),
      n.d(e, 'VERSION', function() {
        return u;
      });
    var i = n(2),
      r = n.n(i),
      o = n(0),
      s = n.n(o),
      a = n(4),
      l = n.n(a),
      u = '4.0.0',
      c = function(t) {
        return function(e) {
          for (var n = arguments.length, i = Array(n > 1 ? n - 1 : 0), r = 1; r < n; r++)
            i[r - 1] = arguments[r];
          return t.apply(e, i);
        };
      },
      h = r.a.Model.extend,
      f = function(t) {
        var e = this;
        if (t)
          return s.a.reduce(
            t,
            function(t, n, i) {
              return s.a.isFunction(n) || (n = e[n]), n && (t[i] = n), t;
            },
            {},
          );
      },
      d = ['description', 'fileName', 'lineNumber', 'name', 'message', 'number', 'url'],
      p = h.call(Error, {
        urlRoot: 'http://marionettejs.com/docs/v' + u + '/',
        url: '',
        constructor: function(t) {
          var e = Error.call(this, t.message);
          s.a.extend(this, s.a.pick(e, d), s.a.pick(t, d)),
            Error.captureStackTrace && this.captureStackTrace(),
            (this.url = this.urlRoot + this.url);
        },
        captureStackTrace: function() {
          Error.captureStackTrace(this, p);
        },
        toString: function() {
          return this.name + ': ' + this.message + ' See: ' + this.url;
        },
      });
    function g(t, e) {
      if (!s.a.isObject(e))
        throw new p({ message: 'Bindings must be an object.', url: 'common.html#bindevents' });
      return f.call(t, e);
    }
    function m(t, e) {
      return t && e ? (this.listenTo(t, g(this, e)), this) : this;
    }
    function v(t, e) {
      return t
        ? e
          ? (this.stopListening(t, g(this, e)), this)
          : (this.stopListening(t), this)
        : this;
    }
    function y(t, e) {
      if (!s.a.isObject(e))
        throw new p({ message: 'Bindings must be an object.', url: 'common.html#bindrequests' });
      return f.call(t, e);
    }
    function _(t, e) {
      return t && e ? (t.reply(y(this, e), this), this) : this;
    }
    function b(t, e) {
      return t
        ? e
          ? (t.stopReplying(y(this, e)), this)
          : (t.stopReplying(null, null, this), this)
        : this;
    }
    var w = function(t) {
        if (t) return this.options && void 0 !== this.options[t] ? this.options[t] : this[t];
      },
      E = function(t, e) {
        var n = this;
        t &&
          s.a.each(e, function(e) {
            var i = t[e];
            void 0 !== i && (n[e] = i);
          });
      };
    function x(t, e, n) {
      t._getImmediateChildren &&
        s.a.each(t._getImmediateChildren(), function(t) {
          n(t) && t.triggerMethod(e, t);
        });
    }
    function T(t) {
      return !t._isAttached;
    }
    function C(t) {
      return !!T(t) && ((t._isAttached = !0), !0);
    }
    function S(t) {
      return t._isAttached;
    }
    function A(t) {
      return !!S(t) && ((t._isAttached = !1), !0);
    }
    function O(t) {
      t._isAttached && t._isRendered && t.triggerMethod('dom:refresh', t);
    }
    function D(t) {
      t._isAttached && t._isRendered && t.triggerMethod('dom:remove', t);
    }
    function I() {
      x(this, 'before:attach', T);
    }
    function k() {
      x(this, 'attach', C), O(this);
    }
    function N() {
      x(this, 'before:detach', S), D(this);
    }
    function R() {
      x(this, 'detach', A);
    }
    function P() {
      D(this);
    }
    function L() {
      O(this);
    }
    function M(t) {
      t._areViewEventsMonitored ||
        !1 === t.monitorViewEvents ||
        ((t._areViewEventsMonitored = !0),
        t.on({
          'before:attach': I,
          attach: k,
          'before:detach': N,
          detach: R,
          'before:render': P,
          render: L,
        }));
    }
    var V = /(^|:)(\w)/gi,
      j = {};
    function H(t, e, n) {
      return n.toUpperCase();
    }
    var F = function(t) {
      return j[t] || (j[t] = 'on' + t.replace(V, H)), j[t];
    };
    function q(t) {
      var e = F(t),
        n = w.call(this, e),
        i = void 0;
      return (
        s.a.isFunction(n) && (i = n.apply(this, s.a.drop(arguments))),
        this.trigger.apply(this, arguments),
        i
      );
    }
    var B = { triggerMethod: q },
      U = {
        normalizeMethods: f,
        _setOptions: function(t, e) {
          (this.options = s.a.extend({}, s.a.result(this, 'options'), t)), this.mergeOptions(t, e);
        },
        mergeOptions: E,
        getOption: w,
        bindEvents: m,
        unbindEvents: v,
        bindRequests: _,
        unbindRequests: b,
        triggerMethod: q,
      };
    s.a.extend(U, r.a.Events);
    var W = {
        _isDestroyed: !1,
        isDestroyed: function() {
          return this._isDestroyed;
        },
        destroy: function(t) {
          return this._isDestroyed
            ? this
            : (this.triggerMethod('before:destroy', this, t),
              (this._isDestroyed = !0),
              this.triggerMethod('destroy', this, t),
              this.stopListening(),
              this);
        },
      },
      $ = {
        _initRadio: function() {
          var t = s.a.result(this, 'channelName');
          if (t) {
            if (!l.a)
              throw new p({
                message: 'The dependency "backbone.radio" is missing.',
                url: 'backbone.radio.html#marionette-integration',
              });
            var e = (this._channel = l.a.channel(t)),
              n = s.a.result(this, 'radioEvents');
            this.bindEvents(e, n);
            var i = s.a.result(this, 'radioRequests');
            this.bindRequests(e, i), this.on('destroy', this._destroyRadio);
          }
        },
        _destroyRadio: function() {
          this._channel.stopReplying(null, null, this);
        },
        getChannel: function() {
          return this._channel;
        },
      },
      z = ['channelName', 'radioEvents', 'radioRequests'],
      K = function(t) {
        this._setOptions(t, z),
          (this.cid = s.a.uniqueId(this.cidPrefix)),
          this._initRadio(),
          this.initialize.apply(this, arguments);
      };
    (K.extend = h),
      s.a.extend(K.prototype, U, W, $, { cidPrefix: 'mno', initialize: function() {} });
    var G = s.a.invokeMap || s.a.invoke;
    function Q(t, e, n) {
      return s.a.reduce(
        e,
        function(e, n) {
          var i = (function(t) {
              if (t.behaviorClass) return { BehaviorClass: t.behaviorClass, options: t };
              if (s.a.isFunction(t)) return { BehaviorClass: t, options: {} };
              throw new p({
                message:
                  'Unable to get behavior class. A Behavior constructor should be passed directly or as behaviorClass property of options',
                url: 'marionette.behavior.html#defining-and-attaching-behaviors',
              });
            })(n),
            r = new (0, i.BehaviorClass)(i.options, t);
          return e.push(r), Q(t, s.a.result(r, 'behaviors'), e);
        },
        n,
      );
    }
    var Y = {
        _initBehaviors: function() {
          this._behaviors = Q(this, s.a.result(this, 'behaviors'), []);
        },
        _getBehaviorTriggers: function() {
          var t = G(this._behaviors, '_getTriggers');
          return s.a.reduce(
            t,
            function(t, e) {
              return s.a.extend(t, e);
            },
            {},
          );
        },
        _getBehaviorEvents: function() {
          var t = G(this._behaviors, '_getEvents');
          return s.a.reduce(
            t,
            function(t, e) {
              return s.a.extend(t, e);
            },
            {},
          );
        },
        _proxyBehaviorViewProperties: function() {
          G(this._behaviors, 'proxyViewProperties');
        },
        _delegateBehaviorEntityEvents: function() {
          G(this._behaviors, 'delegateEntityEvents');
        },
        _undelegateBehaviorEntityEvents: function() {
          G(this._behaviors, 'undelegateEntityEvents');
        },
        _destroyBehaviors: function(t) {
          G(this._behaviors, 'destroy', t);
        },
        _removeBehavior: function(t) {
          this._isDestroyed ||
            (this.undelegate('.trig' + t.cid + ' .' + t.cid),
            (this._behaviors = s.a.without(this._behaviors, t)));
        },
        _bindBehaviorUIElements: function() {
          G(this._behaviors, 'bindUIElements');
        },
        _unbindBehaviorUIElements: function() {
          G(this._behaviors, 'unbindUIElements');
        },
        _triggerEventOnBehaviors: function(t, e, n) {
          G(this._behaviors, 'triggerMethod', t, e, n);
        },
      },
      X = {
        _delegateEntityEvents: function(t, e) {
          t &&
            ((this._modelEvents = s.a.result(this, 'modelEvents')),
            this.bindEvents(t, this._modelEvents)),
            e &&
              ((this._collectionEvents = s.a.result(this, 'collectionEvents')),
              this.bindEvents(e, this._collectionEvents));
        },
        _undelegateEntityEvents: function(t, e) {
          this._modelEvents && (this.unbindEvents(t, this._modelEvents), delete this._modelEvents),
            this._collectionEvents &&
              (this.unbindEvents(e, this._collectionEvents), delete this._collectionEvents);
        },
        _deleteEntityEventHandlers: function() {
          delete this._modelEvents, delete this._collectionEvents;
        },
      },
      J = {
        _renderTemplate: function(t) {
          var e = this.mixinTemplateContext(this.serializeData()) || {},
            n = this._renderHtml(t, e);
          void 0 !== n && this.attachElContent(n);
        },
        getTemplate: function() {
          return this.template;
        },
        mixinTemplateContext: function(t) {
          var e = s.a.result(this, 'templateContext');
          return e ? (t ? s.a.extend({}, t, e) : e) : t;
        },
        serializeData: function() {
          return this.model
            ? this.serializeModel()
            : this.collection
            ? { items: this.serializeCollection() }
            : void 0;
        },
        serializeModel: function() {
          return this.model.attributes;
        },
        serializeCollection: function() {
          return s.a.map(this.collection.models, function(t) {
            return t.attributes;
          });
        },
        _renderHtml: function(t, e) {
          return t(e);
        },
        attachElContent: function(t) {
          this.Dom.setContents(this.el, t, this.$el);
        },
      },
      Z = /^(\S+)\s*(.*)$/,
      tt = function(t, e) {
        var n = t.match(Z);
        return n[1] + '.' + e + ' ' + n[2];
      },
      et = {
        childViewEventPrefix: !1,
        triggersStopPropagation: !0,
        triggersPreventDefault: !0,
        DEV_MODE: !1,
      };
    function nt(t) {
      return !!et[t];
    }
    function it(t, e) {
      return (et[t] = e);
    }
    var rt = {
        _getViewTriggers: function(t, e) {
          var n = this;
          return s.a.reduce(
            e,
            function(e, i, r) {
              return (
                (e[(r = tt(r, 'trig' + n.cid))] = (function(t, e) {
                  s.a.isString(e) && (e = { event: e });
                  var n = e.event,
                    i = !!e.preventDefault;
                  nt('triggersPreventDefault') && (i = !1 !== e.preventDefault);
                  var r = !!e.stopPropagation;
                  return (
                    nt('triggersStopPropagation') && (r = !1 !== e.stopPropagation),
                    function(e) {
                      i && e.preventDefault(), r && e.stopPropagation();
                      for (
                        var o = arguments.length, s = Array(o > 1 ? o - 1 : 0), a = 1;
                        a < o;
                        a++
                      )
                        s[a - 1] = arguments[a];
                      t.triggerMethod.apply(t, [n, t, e].concat(s));
                    }
                  );
                })(t, i)),
                e
              );
            },
            {},
          );
        },
      },
      ot = /@ui\.[a-zA-Z-_$0-9]*/g,
      st = function(t, e) {
        return t.replace(ot, function(t) {
          return e[t.slice(4)];
        });
      },
      at = {
        normalizeUIKeys: function(t) {
          return (function(t, e) {
            return s.a.reduce(
              t,
              function(t, n, i) {
                return (t[st(i, e)] = n), t;
              },
              {},
            );
          })(t, this._getUIBindings());
        },
        normalizeUIString: function(t) {
          var e = this._getUIBindings();
          return st(t, e);
        },
        normalizeUIValues: function(t, e) {
          return (function(t, e, n) {
            return (
              s.a.each(t, function(i, r) {
                if (s.a.isString(i)) t[r] = st(i, e);
                else if (i) {
                  var o = i[n];
                  s.a.isString(o) && (i[n] = st(o, e));
                }
              }),
              t
            );
          })(t, this._getUIBindings(), e);
        },
        _getUIBindings: function() {
          return s.a.result(this, '_uiBindings') || s.a.result(this, 'ui');
        },
        _bindUIElements: function() {
          var t = this;
          if (this.ui) {
            this._uiBindings || (this._uiBindings = this.ui);
            var e = s.a.result(this, '_uiBindings');
            (this._ui = {}),
              s.a.each(e, function(e, n) {
                t._ui[n] = t.$(e);
              }),
              (this.ui = this._ui);
          }
        },
        _unbindUIElements: function() {
          var t = this;
          this.ui &&
            this._uiBindings &&
            (s.a.each(this.ui, function(e, n) {
              delete t.ui[n];
            }),
            (this.ui = this._uiBindings),
            delete this._uiBindings,
            delete this._ui);
        },
        _getUI: function(t) {
          return this._ui[t];
        },
      };
    function lt(t) {
      return t instanceof r.a.$ ? t : r.a.$(t);
    }
    function ut(t) {
      return (this.prototype.Dom = s.a.extend({}, this.prototype.Dom, t)), this;
    }
    var ct = {
        createBuffer: function() {
          return document.createDocumentFragment();
        },
        getEl: function(t) {
          return lt(t);
        },
        findEl: function(t, e) {
          return (arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : lt(t)).find(e);
        },
        hasEl: function(t, e) {
          return t.contains(e && e.parentNode);
        },
        detachEl: function(t) {
          (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : lt(t)).detach();
        },
        replaceEl: function(t, e) {
          if (t !== e) {
            var n = e.parentNode;
            n && n.replaceChild(t, e);
          }
        },
        swapEl: function(t, e) {
          if (t !== e) {
            var n = t.parentNode,
              i = e.parentNode;
            if (n && i) {
              var r = t.nextSibling,
                o = e.nextSibling;
              n.insertBefore(e, r), i.insertBefore(t, o);
            }
          }
        },
        setContents: function(t, e) {
          (arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : lt(t)).html(e);
        },
        appendContents: function(t, e) {
          var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
            i = n._$el,
            r = void 0 === i ? lt(t) : i,
            o = n._$contents,
            s = void 0 === o ? lt(e) : o;
          r.append(s);
        },
        hasContents: function(t) {
          return !!t && t.hasChildNodes();
        },
        detachContents: function(t) {
          (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : lt(t))
            .contents()
            .detach();
        },
      },
      ht = {
        Dom: ct,
        supportsRenderLifecycle: !0,
        supportsDestroyLifecycle: !0,
        _isDestroyed: !1,
        isDestroyed: function() {
          return !!this._isDestroyed;
        },
        _isRendered: !1,
        isRendered: function() {
          return !!this._isRendered;
        },
        _isAttached: !1,
        isAttached: function() {
          return !!this._isAttached;
        },
        delegateEvents: function(t) {
          this._proxyBehaviorViewProperties(), this._buildEventProxies();
          var e = s.a.extend(
            {},
            this._getBehaviorEvents(),
            this._getEvents(t),
            this._getBehaviorTriggers(),
            this._getTriggers(),
          );
          return r.a.View.prototype.delegateEvents.call(this, e), this;
        },
        _getEvents: function(t) {
          return t
            ? this.normalizeUIKeys(t)
            : this.events
            ? this.normalizeUIKeys(s.a.result(this, 'events'))
            : void 0;
        },
        _getTriggers: function() {
          if (this.triggers) {
            var t = this.normalizeUIKeys(s.a.result(this, 'triggers'));
            return this._getViewTriggers(this, t);
          }
        },
        delegateEntityEvents: function() {
          return (
            this._delegateEntityEvents(this.model, this.collection),
            this._delegateBehaviorEntityEvents(),
            this
          );
        },
        undelegateEntityEvents: function() {
          return (
            this._undelegateEntityEvents(this.model, this.collection),
            this._undelegateBehaviorEntityEvents(),
            this
          );
        },
        destroy: function(t) {
          if (this._isDestroyed) return this;
          var e = this._isAttached && !this._disableDetachEvents;
          return (
            this.triggerMethod('before:destroy', this, t),
            e && this.triggerMethod('before:detach', this),
            this.unbindUIElements(),
            this._removeElement(),
            e && ((this._isAttached = !1), this.triggerMethod('detach', this)),
            this._removeChildren(),
            (this._isDestroyed = !0),
            (this._isRendered = !1),
            this._destroyBehaviors(t),
            this._deleteEntityEventHandlers(),
            this.triggerMethod('destroy', this, t),
            this._triggerEventOnBehaviors('destroy', this, t),
            this.stopListening(),
            this
          );
        },
        _removeElement: function() {
          this.$el.off().removeData(), this.Dom.detachEl(this.el, this.$el);
        },
        bindUIElements: function() {
          return this._bindUIElements(), this._bindBehaviorUIElements(), this;
        },
        unbindUIElements: function() {
          return this._unbindUIElements(), this._unbindBehaviorUIElements(), this;
        },
        getUI: function(t) {
          return this._getUI(t);
        },
        _buildEventProxies: function() {
          (this._childViewEvents = this.normalizeMethods(s.a.result(this, 'childViewEvents'))),
            (this._childViewTriggers = s.a.result(this, 'childViewTriggers')),
            (this._eventPrefix = this._getEventPrefix());
        },
        _getEventPrefix: function() {
          var t = !!nt('childViewEventPrefix') && 'childview',
            e = s.a.result(this, 'childViewEventPrefix', t);
          return !1 === e ? e : e + ':';
        },
        _proxyChildViewEvents: function(t) {
          (this._childViewEvents || this._childViewTriggers || this._eventPrefix) &&
            this.listenTo(t, 'all', this._childViewEventHandler);
        },
        _childViewEventHandler: function(t) {
          for (
            var e = this._childViewEvents,
              n = arguments.length,
              i = Array(n > 1 ? n - 1 : 0),
              r = 1;
            r < n;
            r++
          )
            i[r - 1] = arguments[r];
          e && e[t] && e[t].apply(this, i);
          var o = this._childViewTriggers;
          o && o[t] && this.triggerMethod.apply(this, [o[t]].concat(i)),
            this._eventPrefix && this.triggerMethod.apply(this, [this._eventPrefix + t].concat(i));
        },
      };
    function ft(t) {
      t._isRendered ||
        (t.supportsRenderLifecycle || t.triggerMethod('before:render', t),
        t.render(),
        (t._isRendered = !0),
        t.supportsRenderLifecycle || t.triggerMethod('render', t));
    }
    function dt(t, e) {
      if (t.destroy) return (t._disableDetachEvents = e), void t.destroy();
      t.supportsDestroyLifecycle || t.triggerMethod('before:destroy', t);
      var n = t._isAttached && !e;
      n && t.triggerMethod('before:detach', t),
        t.remove(),
        n && ((t._isAttached = !1), t.triggerMethod('detach', t)),
        (t._isDestroyed = !0),
        t.supportsDestroyLifecycle || t.triggerMethod('destroy', t);
    }
    s.a.extend(ht, Y, U, X, J, rt, at);
    var pt = ['allowMissingEl', 'parentEl', 'replaceElement'],
      gt = function(t) {
        if (
          (this._setOptions(t, pt),
          (this.cid = s.a.uniqueId(this.cidPrefix)),
          (this._initEl = this.el = this.getOption('el')),
          (this.el = this.el instanceof r.a.$ ? this.el[0] : this.el),
          !this.el)
        )
          throw new p({
            name: 'RegionError',
            message: 'An "el" must be specified for a region.',
            url: 'marionette.region.html#additional-options',
          });
        (this.$el = this.getEl(this.el)), this.initialize.apply(this, arguments);
      };
    (gt.extend = h),
      (gt.setDomApi = ut),
      s.a.extend(gt.prototype, U, {
        Dom: ct,
        cidPrefix: 'mnr',
        replaceElement: !1,
        _isReplaced: !1,
        _isSwappingView: !1,
        initialize: function() {},
        show: function(t, e) {
          if (this._ensureElement(e))
            return (t = this._getView(t, e)) === this.currentView
              ? this
              : ((this._isSwappingView = !!this.currentView),
                this.triggerMethod('before:show', this, t, e),
                t._isAttached || this.empty(e),
                this._setupChildView(t),
                (this.currentView = t),
                ft(t),
                this._attachView(t, e),
                this.triggerMethod('show', this, t, e),
                (this._isSwappingView = !1),
                this);
        },
        _setupChildView: function(t) {
          M(t), this._proxyChildViewEvents(t), t.on('destroy', this._empty, this);
        },
        _proxyChildViewEvents: function(t) {
          var e = this._parentView;
          e && e._proxyChildViewEvents(t);
        },
        _shouldDisableMonitoring: function() {
          return this._parentView && !1 === this._parentView.monitorViewEvents;
        },
        _attachView: function(t) {
          var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            n =
              !t._isAttached &&
              this.Dom.hasEl(document.documentElement, this.el) &&
              !this._shouldDisableMonitoring(),
            i =
              void 0 === e.replaceElement
                ? !!s.a.result(this, 'replaceElement')
                : !!e.replaceElement;
          n && t.triggerMethod('before:attach', t),
            i ? this._replaceEl(t) : this.attachHtml(t),
            n && ((t._isAttached = !0), t.triggerMethod('attach', t));
        },
        _ensureElement: function() {
          var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          if (
            (s.a.isObject(this.el) ||
              ((this.$el = this.getEl(this.el)),
              (this.el = this.$el[0]),
              (this.$el = this.Dom.getEl(this.el))),
            !this.$el || 0 === this.$el.length)
          ) {
            if (
              void 0 === t.allowMissingEl
                ? !!s.a.result(this, 'allowMissingEl')
                : !!t.allowMissingEl
            )
              return !1;
            throw new p({
              name: 'RegionError',
              message: 'An "el" must exist in DOM for this region ' + this.cid,
              url: 'marionette.region.html#additional-options',
            });
          }
          return !0;
        },
        _getView: function(t) {
          if (!t)
            throw new p({
              name: 'RegionError',
              message:
                'The view passed is undefined and therefore invalid. You must pass a view instance to show.',
              url: 'marionette.region.html#showing-a-view',
            });
          if (t._isDestroyed)
            throw new p({
              name: 'RegionError',
              message: 'View (cid: "' + t.cid + '") has already been destroyed and cannot be used.',
              url: 'marionette.region.html#showing-a-view',
            });
          if (t instanceof r.a.View) return t;
          var e = this._getViewOptions(t);
          return new Et(e);
        },
        _getViewOptions: function(t) {
          if (s.a.isFunction(t)) return { template: t };
          if (s.a.isObject(t)) return t;
          return {
            template: function() {
              return t;
            },
          };
        },
        getEl: function(t) {
          var e = s.a.result(this, 'parentEl');
          return e && s.a.isString(t) ? this.Dom.findEl(e, t) : this.Dom.getEl(t);
        },
        _replaceEl: function(t) {
          this._restoreEl(),
            t.on('before:destroy', this._restoreEl, this),
            this.Dom.replaceEl(t.el, this.el),
            (this._isReplaced = !0);
        },
        _restoreEl: function() {
          if (this._isReplaced) {
            var t = this.currentView;
            t && (this._detachView(t), (this._isReplaced = !1));
          }
        },
        isReplaced: function() {
          return !!this._isReplaced;
        },
        isSwappingView: function() {
          return !!this._isSwappingView;
        },
        attachHtml: function(t) {
          this.Dom.appendContents(this.el, t.el, { _$el: this.$el, _$contents: t.$el });
        },
        empty: function() {
          var t =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : { allowMissingEl: !0 },
            e = this.currentView;
          return e
            ? (this._empty(e, !0), this)
            : (this._ensureElement(t) && this.detachHtml(), this);
        },
        _empty: function(t, e) {
          t.off('destroy', this._empty, this),
            this.triggerMethod('before:empty', this, t),
            this._restoreEl(),
            delete this.currentView,
            t._isDestroyed ||
              (e ? this.removeView(t) : this._detachView(t), this._stopChildViewEvents(t)),
            this.triggerMethod('empty', this, t);
        },
        _stopChildViewEvents: function(t) {
          this._parentView && this._parentView.stopListening(t);
        },
        destroyView: function(t) {
          return t._isDestroyed ? t : (dt(t, this._shouldDisableMonitoring()), t);
        },
        removeView: function(t) {
          this.destroyView(t);
        },
        detachView: function() {
          var t = this.currentView;
          if (t) return this._empty(t), t;
        },
        _detachView: function(t) {
          var e = t._isAttached && !this._shouldDisableMonitoring(),
            n = this._isReplaced;
          e && t.triggerMethod('before:detach', t),
            n ? this.Dom.replaceEl(this.el, t.el) : this.detachHtml(),
            e && ((t._isAttached = !1), t.triggerMethod('detach', t));
        },
        detachHtml: function() {
          this.Dom.detachContents(this.el, this.$el);
        },
        hasView: function() {
          return !!this.currentView;
        },
        reset: function(t) {
          return this.empty(t), this.$el && (this.el = this._initEl), delete this.$el, this;
        },
        _isDestroyed: !1,
        isDestroyed: function() {
          return this._isDestroyed;
        },
        destroy: function(t) {
          return this._isDestroyed
            ? this
            : (this.triggerMethod('before:destroy', this, t),
              (this._isDestroyed = !0),
              this.reset(t),
              this._name && this._parentView._removeReferences(this._name),
              delete this._parentView,
              delete this._name,
              this.triggerMethod('destroy', this, t),
              this.stopListening(),
              this);
        },
      });
    var mt = function(t, e) {
      if (t instanceof gt) return t;
      if (s.a.isString(t)) return vt(e, { el: t });
      if (s.a.isFunction(t)) return vt(e, { regionClass: t });
      if (s.a.isObject(t)) return vt(e, t);
      throw new p({
        message: 'Improper region configuration type.',
        url: 'marionette.region.html#defining-regions',
      });
    };
    function vt(t, e) {
      var n = s.a.extend({}, t, e),
        i = n.regionClass;
      return delete n.regionClass, new i(n);
    }
    var yt = {
      regionClass: gt,
      _initRegions: function() {
        (this.regions = this.regions || {}),
          (this._regions = {}),
          this.addRegions(s.a.result(this, 'regions'));
      },
      _reInitRegions: function() {
        G(this._regions, 'reset');
      },
      addRegion: function(t, e) {
        var n = {};
        return (n[t] = e), this.addRegions(n)[t];
      },
      addRegions: function(t) {
        if (!s.a.isEmpty(t))
          return (
            (t = this.normalizeUIValues(t, 'el')),
            (this.regions = s.a.extend({}, this.regions, t)),
            this._addRegions(t)
          );
      },
      _addRegions: function(t) {
        var e = this,
          n = { regionClass: this.regionClass, parentEl: s.a.partial(s.a.result, this, 'el') };
        return s.a.reduce(
          t,
          function(t, i, r) {
            return (t[r] = mt(i, n)), e._addRegion(t[r], r), t;
          },
          {},
        );
      },
      _addRegion: function(t, e) {
        this.triggerMethod('before:add:region', this, e, t),
          (t._parentView = this),
          (t._name = e),
          (this._regions[e] = t),
          this.triggerMethod('add:region', this, e, t);
      },
      removeRegion: function(t) {
        var e = this._regions[t];
        return this._removeRegion(e, t), e;
      },
      removeRegions: function() {
        var t = this._getRegions();
        return s.a.each(this._regions, this._removeRegion.bind(this)), t;
      },
      _removeRegion: function(t, e) {
        this.triggerMethod('before:remove:region', this, e, t),
          t.destroy(),
          this.triggerMethod('remove:region', this, e, t);
      },
      _removeReferences: function(t) {
        delete this.regions[t], delete this._regions[t];
      },
      emptyRegions: function() {
        var t = this.getRegions();
        return G(t, 'empty'), t;
      },
      hasRegion: function(t) {
        return !!this.getRegion(t);
      },
      getRegion: function(t) {
        return this._isRendered || this.render(), this._regions[t];
      },
      _getRegions: function() {
        return s.a.clone(this._regions);
      },
      getRegions: function() {
        return this._isRendered || this.render(), this._getRegions();
      },
      showChildView: function(t, e, n) {
        return this.getRegion(t).show(e, n), e;
      },
      detachChildView: function(t) {
        return this.getRegion(t).detachView();
      },
      getChildView: function(t) {
        return this.getRegion(t).currentView;
      },
    };
    function _t(t) {
      return (this.prototype._renderHtml = t), this;
    }
    var bt = [
      'behaviors',
      'childViewEventPrefix',
      'childViewEvents',
      'childViewTriggers',
      'collectionEvents',
      'events',
      'modelEvents',
      'regionClass',
      'regions',
      'template',
      'templateContext',
      'triggers',
      'ui',
    ];
    function wt(t, e) {
      return e.currentView && t.push(e.currentView), t;
    }
    var Et = r.a.View.extend(
      {
        constructor: function(t) {
          this._setOptions(t, bt),
            M(this),
            this._initBehaviors(),
            this._initRegions(),
            r.a.View.prototype.constructor.apply(this, arguments),
            this.delegateEntityEvents(),
            this._triggerEventOnBehaviors('initialize', this, t);
        },
        setElement: function() {
          return (
            r.a.View.prototype.setElement.apply(this, arguments),
            (this._isRendered = this.Dom.hasContents(this.el)),
            (this._isAttached = this.Dom.hasEl(document.documentElement, this.el)),
            this._isRendered && this.bindUIElements(),
            this
          );
        },
        render: function() {
          var t = this.getTemplate();
          return !1 === t || this._isDestroyed
            ? this
            : (this.triggerMethod('before:render', this),
              this._isRendered && this._reInitRegions(),
              this._renderTemplate(t),
              this.bindUIElements(),
              (this._isRendered = !0),
              this.triggerMethod('render', this),
              this);
        },
        _removeChildren: function() {
          this.removeRegions();
        },
        _getImmediateChildren: function() {
          return s.a.reduce(this._regions, wt, []);
        },
      },
      { setRenderer: _t, setDomApi: ut },
    );
    s.a.extend(Et.prototype, ht, yt);
    var xt = function() {
      this._init();
    };
    function Tt(t, e) {
      return e.model && e.model.get(t);
    }
    s.a.each(
      [
        'forEach',
        'each',
        'map',
        'find',
        'detect',
        'filter',
        'select',
        'reject',
        'every',
        'all',
        'some',
        'any',
        'include',
        'contains',
        'invoke',
        'toArray',
        'first',
        'initial',
        'rest',
        'last',
        'without',
        'isEmpty',
        'pluck',
        'reduce',
        'partition',
      ],
      function(t) {
        xt.prototype[t] = function() {
          for (var e = arguments.length, n = Array(e), i = 0; i < e; i++) n[i] = arguments[i];
          return s.a[t].apply(s.a, [this._views].concat(n));
        };
      },
    ),
      s.a.extend(xt.prototype, {
        _init: function() {
          (this._views = []),
            (this._viewsByCid = {}),
            (this._indexByModel = {}),
            this._updateLength();
        },
        _add: function(t) {
          var e =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this._views.length;
          this._addViewIndexes(t), this._views.splice(e, 0, t), this._updateLength();
        },
        _addViewIndexes: function(t) {
          (this._viewsByCid[t.cid] = t), t.model && (this._indexByModel[t.model.cid] = t);
        },
        _sort: function(t, e) {
          return 'string' == typeof t
            ? ((t = s.a.partial(Tt, t)), this._sortBy(t))
            : 1 === t.length
            ? this._sortBy(t.bind(e))
            : this._views.sort(t.bind(e));
        },
        _sortBy: function(t) {
          var e = s.a.sortBy(this._views, t);
          return this._set(e), e;
        },
        _set: function(t, e) {
          (this._views.length = 0),
            this._views.push.apply(this._views, t.slice(0)),
            e &&
              ((this._viewsByCid = {}),
              (this._indexByModel = {}),
              s.a.each(t, this._addViewIndexes.bind(this)),
              this._updateLength());
        },
        _swap: function(t, e) {
          var n = this.findIndexByView(t),
            i = this.findIndexByView(e);
          if (-1 !== n && -1 !== i) {
            var r = this._views[n];
            (this._views[n] = this._views[i]), (this._views[i] = r);
          }
        },
        findByModel: function(t) {
          return this.findByModelCid(t.cid);
        },
        findByModelCid: function(t) {
          return this._indexByModel[t];
        },
        findByIndex: function(t) {
          return this._views[t];
        },
        findIndexByView: function(t) {
          return this._views.indexOf(t);
        },
        findByCid: function(t) {
          return this._viewsByCid[t];
        },
        hasView: function(t) {
          return !!this.findByCid(t.cid);
        },
        _remove: function(t) {
          if (this._viewsByCid[t.cid]) {
            t.model && delete this._indexByModel[t.model.cid], delete this._viewsByCid[t.cid];
            var e = this.findIndexByView(t);
            this._views.splice(e, 1), this._updateLength();
          }
        },
        _updateLength: function() {
          this.length = this._views.length;
        },
      });
    var Ct = [
        'behaviors',
        'childView',
        'childViewContainer',
        'childViewEventPrefix',
        'childViewEvents',
        'childViewOptions',
        'childViewTriggers',
        'collectionEvents',
        'emptyView',
        'emptyViewOptions',
        'events',
        'modelEvents',
        'sortWithCollection',
        'template',
        'templateContext',
        'triggers',
        'ui',
        'viewComparator',
        'viewFilter',
      ],
      St = r.a.View.extend(
        {
          sortWithCollection: !0,
          constructor: function(t) {
            this._setOptions(t, Ct),
              M(this),
              this._initChildViewStorage(),
              this._initBehaviors(),
              r.a.View.prototype.constructor.apply(this, arguments),
              this.getEmptyRegion(),
              this.delegateEntityEvents(),
              this._triggerEventOnBehaviors('initialize', this, t);
          },
          _initChildViewStorage: function() {
            (this._children = new xt()), (this.children = new xt());
          },
          getEmptyRegion: function() {
            return this._emptyRegion && !this._emptyRegion.isDestroyed()
              ? this._emptyRegion
              : ((this._emptyRegion = new gt({ el: this.el, replaceElement: !1 })),
                (this._emptyRegion._parentView = this),
                this._emptyRegion);
          },
          _initialEvents: function() {
            this._isRendered ||
              this.listenTo(this.collection, {
                sort: this._onCollectionSort,
                reset: this._onCollectionReset,
                update: this._onCollectionUpdate,
              });
          },
          _onCollectionSort: function(t, e) {
            var n = e.add,
              i = e.merge,
              r = e.remove;
            this.sortWithCollection && !1 !== this.viewComparator && (n || r || i || this.sort());
          },
          _onCollectionReset: function() {
            this._destroyChildren(), this._addChildModels(this.collection.models), this.sort();
          },
          _onCollectionUpdate: function(t, e) {
            var n = e.changes,
              i = n.removed.length && this._removeChildModels(n.removed);
            (this._addedViews = n.added.length && this._addChildModels(n.added)),
              this._detachChildren(i),
              this.sort(),
              this._removeChildViews(i);
          },
          _removeChildModels: function(t) {
            var e = this;
            return s.a.reduce(
              t,
              function(t, n) {
                var i = e._removeChildModel(n);
                return i && t.push(i), t;
              },
              [],
            );
          },
          _removeChildModel: function(t) {
            var e = this._children.findByModel(t);
            return e && this._removeChild(e), e;
          },
          _removeChild: function(t) {
            this.triggerMethod('before:remove:child', this, t),
              this.children._remove(t),
              this._children._remove(t),
              this.triggerMethod('remove:child', this, t);
          },
          _addChildModels: function(t) {
            return s.a.map(t, this._addChildModel.bind(this));
          },
          _addChildModel: function(t) {
            var e = this._createChildView(t);
            return this._addChild(e), e;
          },
          _createChildView: function(t) {
            var e = this._getChildView(t),
              n = this._getChildViewOptions(t);
            return this.buildChildView(t, e, n);
          },
          _addChild: function(t, e) {
            this.triggerMethod('before:add:child', this, t),
              this._setupChildView(t),
              this._children._add(t, e),
              this.children._add(t, e),
              this.triggerMethod('add:child', this, t);
          },
          _getChildView: function(t) {
            var e = this.childView;
            if (!e)
              throw new p({
                name: 'CollectionViewError',
                message: 'A "childView" must be specified',
                url: 'marionette.collectionview.html#collectionviews-childview',
              });
            if (!(e = this._getView(e, t)))
              throw new p({
                name: 'CollectionViewError',
                message: '"childView" must be a view class or a function that returns a view class',
                url: 'marionette.collectionview.html#collectionviews-childview',
              });
            return e;
          },
          _getView: function(t, e) {
            return t.prototype instanceof r.a.View || t === r.a.View
              ? t
              : s.a.isFunction(t)
              ? t.call(this, e)
              : void 0;
          },
          _getChildViewOptions: function(t) {
            return s.a.isFunction(this.childViewOptions)
              ? this.childViewOptions(t)
              : this.childViewOptions;
          },
          buildChildView: function(t, e, n) {
            return new e(s.a.extend({ model: t }, n));
          },
          _setupChildView: function(t) {
            M(t), t.on('destroy', this.removeChildView, this), this._proxyChildViewEvents(t);
          },
          _getImmediateChildren: function() {
            return this.children._views;
          },
          setElement: function() {
            return (
              r.a.View.prototype.setElement.apply(this, arguments),
              (this._isAttached = this.Dom.hasEl(document.documentElement, this.el)),
              this
            );
          },
          render: function() {
            if (this._isDestroyed) return this;
            this.triggerMethod('before:render', this),
              this._destroyChildren(),
              this.collection &&
                (this._addChildModels(this.collection.models), this._initialEvents());
            var t = this.getTemplate();
            return (
              t && (this._renderTemplate(t), this.bindUIElements()),
              this._getChildViewContainer(),
              this.sort(),
              (this._isRendered = !0),
              this.triggerMethod('render', this),
              this
            );
          },
          _getChildViewContainer: function() {
            var t = s.a.result(this, 'childViewContainer');
            if (((this.$container = t ? this.$(t) : this.$el), !this.$container.length))
              throw new p({
                name: 'CollectionViewError',
                message: 'The specified "childViewContainer" was not found: ' + t,
                url: 'marionette.collectionview.html#defining-the-childviewcontainer',
              });
          },
          sort: function() {
            return this._sortChildren(), this.filter(), this;
          },
          _sortChildren: function() {
            if (this._children.length) {
              var t = this.getComparator();
              t &&
                (delete this._addedViews,
                this.triggerMethod('before:sort', this),
                this._children._sort(t, this),
                this.triggerMethod('sort', this));
            }
          },
          setComparator: function(t) {
            var e = (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {})
                .preventRender,
              n = this.viewComparator !== t && !e;
            return (this.viewComparator = t), n && this.sort(), this;
          },
          removeComparator: function(t) {
            return this.setComparator(null, t);
          },
          getComparator: function() {
            return this.viewComparator
              ? this.viewComparator
              : !(!this.sortWithCollection || !1 === this.viewComparator || !this.collection) &&
                  this._viewComparator;
          },
          _viewComparator: function(t) {
            return this.collection.indexOf(t.model);
          },
          filter: function() {
            return this._isDestroyed
              ? this
              : (this._filterChildren(), this._renderChildren(), this);
          },
          _filterChildren: function() {
            var t = this;
            if (this._children.length) {
              var e = this._getFilter();
              if (e) {
                delete this._addedViews, this.triggerMethod('before:filter', this);
                var n = [],
                  i = [];
                s.a.each(this._children._views, function(r, o, s) {
                  (e.call(t, r, o, s) ? n : i).push(r);
                }),
                  this._detachChildren(i),
                  this.children._set(n, !0),
                  this.triggerMethod('filter', this, n, i);
              } else {
                var r = this.children.length !== this._children.length;
                this.children._set(this._children._views, r);
              }
            }
          },
          _getFilter: function() {
            var t = this.getFilter();
            if (!t) return !1;
            if (s.a.isFunction(t)) return t;
            if (s.a.isObject(t)) {
              var e = s.a.matches(t);
              return function(t) {
                return e(t.model && t.model.attributes);
              };
            }
            if (s.a.isString(t))
              return function(e) {
                return e.model && e.model.get(t);
              };
            throw new p({
              name: 'CollectionViewError',
              message:
                '"viewFilter" must be a function, predicate object literal, a string indicating a model attribute, or falsy',
              url: 'marionette.collectionview.html#defining-the-viewfilter',
            });
          },
          getFilter: function() {
            return this.viewFilter;
          },
          setFilter: function(t) {
            var e = (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {})
                .preventRender,
              n = this.viewFilter !== t && !e;
            return (this.viewFilter = t), n && this.filter(), this;
          },
          removeFilter: function(t) {
            return this.setFilter(null, t);
          },
          _detachChildren: function(t) {
            s.a.each(t, this._detachChildView.bind(this));
          },
          _detachChildView: function(t) {
            var e = t._isAttached && !1 !== this.monitorViewEvents;
            e && t.triggerMethod('before:detach', t),
              this.detachHtml(t),
              e && ((t._isAttached = !1), t.triggerMethod('detach', t));
          },
          detachHtml: function(t) {
            this.Dom.detachEl(t.el, t.$el);
          },
          _renderChildren: function() {
            var t = this._addedViews || this.children._views;
            if ((this.triggerMethod('before:render:children', this, t), this.isEmpty()))
              this._showEmptyView();
            else {
              this._destroyEmptyView();
              var e = this._getBuffer(t);
              this._attachChildren(e, t);
            }
            delete this._addedViews, this.triggerMethod('render:children', this, t);
          },
          _getBuffer: function(t) {
            var e = this,
              n = this.Dom.createBuffer();
            return (
              s.a.each(t, function(t) {
                ft(t), e.Dom.appendContents(n, t.el, { _$contents: t.$el });
              }),
              n
            );
          },
          _attachChildren: function(t, e) {
            (e = this._isAttached && !1 !== this.monitorViewEvents ? e : []),
              s.a.each(e, function(t) {
                t._isAttached || t.triggerMethod('before:attach', t);
              }),
              this.attachHtml(t, this.$container),
              s.a.each(e, function(t) {
                t._isAttached || ((t._isAttached = !0), t.triggerMethod('attach', t));
              });
          },
          attachHtml: function(t, e) {
            this.Dom.appendContents(e[0], t, { _$el: e });
          },
          isEmpty: function() {
            return !this.children.length;
          },
          _showEmptyView: function() {
            var t = this._getEmptyView();
            if (t) {
              var e = this._getEmptyViewOptions();
              this.getEmptyRegion().show(new t(e));
            }
          },
          _getEmptyView: function() {
            var t = this.emptyView;
            if (t) return this._getView(t);
          },
          _destroyEmptyView: function() {
            var t = this.getEmptyRegion();
            t.hasView() && t.empty();
          },
          _getEmptyViewOptions: function() {
            var t = this.emptyViewOptions || this.childViewOptions;
            return s.a.isFunction(t) ? t.call(this) : t;
          },
          swapChildViews: function(t, e) {
            if (!this._children.hasView(t) || !this._children.hasView(e))
              throw new p({
                name: 'CollectionViewError',
                message: 'Both views must be children of the collection view to swap.',
                url: 'marionette.collectionview.html#swapping-child-views',
              });
            return (
              this._children._swap(t, e),
              this.Dom.swapEl(t.el, e.el),
              this.children.hasView(t) !== this.children.hasView(e)
                ? this.filter()
                : this.children._swap(t, e),
              this
            );
          },
          addChildView: function(t, e) {
            if (!t || t._isDestroyed) return t;
            this._isRendered || this.render();
            var n = void 0 !== e;
            return (
              (!n || e >= this._children.length) && (this._addedViews = [t]),
              this._addChild(t, e),
              n ? this._renderChildren() : this.sort(),
              t
            );
          },
          detachChildView: function(t) {
            return this.removeChildView(t, { shouldDetach: !0 }), t;
          },
          removeChildView: function(t, e) {
            return t
              ? (this._removeChildView(t, e),
                this._removeChild(t),
                this.isEmpty() && this._showEmptyView(),
                t)
              : t;
          },
          _removeChildViews: function(t) {
            s.a.each(t, this._removeChildView.bind(this));
          },
          _removeChildView: function(t) {
            var e = (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {})
              .shouldDetach;
            t.off('destroy', this.removeChildView, this),
              e ? this._detachChildView(t) : this._destroyChildView(t),
              this.stopListening(t);
          },
          _destroyChildView: function(t) {
            t._isDestroyed || dt(t, !1 === this.monitorViewEvents);
          },
          _removeChildren: function() {
            this._destroyChildren(), this.getEmptyRegion().destroy(), delete this._addedViews;
          },
          _destroyChildren: function() {
            this._children.length &&
              (this.triggerMethod('before:destroy:children', this),
              !1 === this.monitorViewEvents && this.Dom.detachContents(this.el, this.$el),
              this._removeChildViews(this._children._views),
              this._children._init(),
              this.children._init(),
              this.triggerMethod('destroy:children', this));
          },
        },
        { setDomApi: ut, setRenderer: _t },
      );
    s.a.extend(St.prototype, ht);
    var At = ['collectionEvents', 'events', 'modelEvents', 'triggers', 'ui'],
      Ot = function(t, e) {
        (this.view = e),
          this._setOptions(t, At),
          (this.cid = s.a.uniqueId(this.cidPrefix)),
          (this.ui = s.a.extend({}, s.a.result(this, 'ui'), s.a.result(e, 'ui'))),
          this.listenTo(e, 'all', this.triggerMethod),
          this.initialize.apply(this, arguments);
      };
    (Ot.extend = h),
      s.a.extend(Ot.prototype, U, X, rt, at, {
        cidPrefix: 'mnb',
        initialize: function() {},
        $: function() {
          return this.view.$.apply(this.view, arguments);
        },
        destroy: function() {
          return (
            this.stopListening(),
            this.view._removeBehavior(this),
            this._deleteEntityEventHandlers(),
            this
          );
        },
        proxyViewProperties: function() {
          return (this.$el = this.view.$el), (this.el = this.view.el), this;
        },
        bindUIElements: function() {
          return this._bindUIElements(), this;
        },
        unbindUIElements: function() {
          return this._unbindUIElements(), this;
        },
        getUI: function(t) {
          return this._getUI(t);
        },
        delegateEntityEvents: function() {
          return this._delegateEntityEvents(this.view.model, this.view.collection), this;
        },
        undelegateEntityEvents: function() {
          return this._undelegateEntityEvents(this.view.model, this.view.collection), this;
        },
        _getEvents: function() {
          var t = this;
          if (this.events) {
            var e = this.normalizeUIKeys(s.a.result(this, 'events'));
            return s.a.reduce(
              e,
              function(e, n, i) {
                return (
                  s.a.isFunction(n) || (n = t[n]), n ? ((e[(i = tt(i, t.cid))] = n.bind(t)), e) : e
                );
              },
              {},
            );
          }
        },
        _getTriggers: function() {
          if (this.triggers) {
            var t = this.normalizeUIKeys(s.a.result(this, 'triggers'));
            return this._getViewTriggers(this.view, t);
          }
        },
      });
    var Dt = ['channelName', 'radioEvents', 'radioRequests', 'region', 'regionClass'],
      It = function(t) {
        this._setOptions(t, Dt),
          (this.cid = s.a.uniqueId(this.cidPrefix)),
          this._initRegion(),
          this._initRadio(),
          this.initialize.apply(this, arguments);
      };
    (It.extend = h),
      s.a.extend(It.prototype, U, W, $, {
        cidPrefix: 'mna',
        initialize: function() {},
        start: function(t) {
          return (
            this.triggerMethod('before:start', this, t), this.triggerMethod('start', this, t), this
          );
        },
        regionClass: gt,
        _initRegion: function() {
          var t = this.region;
          if (t) {
            var e = { regionClass: this.regionClass };
            this._region = mt(t, e);
          }
        },
        getRegion: function() {
          return this._region;
        },
        showView: function(t) {
          for (
            var e = this.getRegion(), n = arguments.length, i = Array(n > 1 ? n - 1 : 0), r = 1;
            r < n;
            r++
          )
            i[r - 1] = arguments[r];
          return e.show.apply(e, [t].concat(i)), t;
        },
        getView: function() {
          return this.getRegion().currentView;
        },
      });
    var kt = c(m),
      Nt = c(v),
      Rt = c(_),
      Pt = c(b),
      Lt = c(E),
      Mt = c(w),
      Vt = c(f),
      jt = c(q),
      Ht = function(t) {
        St.setDomApi(t), gt.setDomApi(t), Et.setDomApi(t);
      },
      Ft = function(t) {
        St.setRenderer(t), Et.setRenderer(t);
      },
      qt = {
        View: Et,
        CollectionView: St,
        MnObject: K,
        Object: K,
        Region: gt,
        Behavior: Ot,
        Application: It,
        isEnabled: nt,
        setEnabled: it,
        monitorViewEvents: M,
        Events: B,
        extend: h,
        DomApi: ct,
        VERSION: u,
      };
    e.default = qt;
  },
  function(t, e, n) {
    (function(i) {
      var r, o, s;
      (s =
        ('object' == typeof self && self.self === self && self) ||
        ('object' == typeof i && i.global === i && i)),
        (r = [n(0), n(5), e]),
        void 0 ===
          (o = function(t, e, n) {
            s.Backbone = (function(t, e, n, i) {
              var r = t.Backbone,
                o = Array.prototype.slice;
              (e.VERSION = '1.3.3'),
                (e.$ = i),
                (e.noConflict = function() {
                  return (t.Backbone = r), this;
                }),
                (e.emulateHTTP = !1),
                (e.emulateJSON = !1);
              var s = function(t, e, i) {
                  n.each(e, function(e, r) {
                    n[r] &&
                      (t.prototype[r] = (function(t, e, i) {
                        switch (t) {
                          case 1:
                            return function() {
                              return n[e](this[i]);
                            };
                          case 2:
                            return function(t) {
                              return n[e](this[i], t);
                            };
                          case 3:
                            return function(t, r) {
                              return n[e](this[i], a(t, this), r);
                            };
                          case 4:
                            return function(t, r, o) {
                              return n[e](this[i], a(t, this), r, o);
                            };
                          default:
                            return function() {
                              var t = o.call(arguments);
                              return t.unshift(this[i]), n[e].apply(n, t);
                            };
                        }
                      })(e, r, i));
                  });
                },
                a = function(t, e) {
                  return n.isFunction(t)
                    ? t
                    : n.isObject(t) && !e._isModel(t)
                    ? l(t)
                    : n.isString(t)
                    ? function(e) {
                        return e.get(t);
                      }
                    : t;
                },
                l = function(t) {
                  var e = n.matches(t);
                  return function(t) {
                    return e(t.attributes);
                  };
                },
                u = (e.Events = {}),
                c = /\s+/,
                h = function(t, e, i, r, o) {
                  var s,
                    a = 0;
                  if (i && 'object' == typeof i) {
                    void 0 !== r && 'context' in o && void 0 === o.context && (o.context = r);
                    for (s = n.keys(i); a < s.length; a++) e = h(t, e, s[a], i[s[a]], o);
                  } else if (i && c.test(i))
                    for (s = i.split(c); a < s.length; a++) e = t(e, s[a], r, o);
                  else e = t(e, i, r, o);
                  return e;
                };
              u.on = function(t, e, n) {
                return f(this, t, e, n);
              };
              var f = function(t, e, n, i, r) {
                if (
                  ((t._events = h(d, t._events || {}, e, n, { context: i, ctx: t, listening: r })),
                  r)
                ) {
                  var o = t._listeners || (t._listeners = {});
                  o[r.id] = r;
                }
                return t;
              };
              u.listenTo = function(t, e, i) {
                if (!t) return this;
                var r = t._listenId || (t._listenId = n.uniqueId('l')),
                  o = this._listeningTo || (this._listeningTo = {}),
                  s = o[r];
                if (!s) {
                  var a = this._listenId || (this._listenId = n.uniqueId('l'));
                  s = o[r] = { obj: t, objId: r, id: a, listeningTo: o, count: 0 };
                }
                return f(t, e, i, this, s), this;
              };
              var d = function(t, e, n, i) {
                if (n) {
                  var r = t[e] || (t[e] = []),
                    o = i.context,
                    s = i.ctx,
                    a = i.listening;
                  a && a.count++, r.push({ callback: n, context: o, ctx: o || s, listening: a });
                }
                return t;
              };
              (u.off = function(t, e, n) {
                return this._events
                  ? ((this._events = h(p, this._events, t, e, {
                      context: n,
                      listeners: this._listeners,
                    })),
                    this)
                  : this;
              }),
                (u.stopListening = function(t, e, i) {
                  var r = this._listeningTo;
                  if (!r) return this;
                  for (var o = t ? [t._listenId] : n.keys(r), s = 0; s < o.length; s++) {
                    var a = r[o[s]];
                    if (!a) break;
                    a.obj.off(e, i, this);
                  }
                  return this;
                });
              var p = function(t, e, i, r) {
                if (t) {
                  var o,
                    s = 0,
                    a = r.context,
                    l = r.listeners;
                  if (e || i || a) {
                    for (var u = e ? [e] : n.keys(t); s < u.length; s++) {
                      e = u[s];
                      var c = t[e];
                      if (!c) break;
                      for (var h = [], f = 0; f < c.length; f++) {
                        var d = c[f];
                        (i && i !== d.callback && i !== d.callback._callback) ||
                        (a && a !== d.context)
                          ? h.push(d)
                          : (o = d.listening) &&
                            0 == --o.count &&
                            (delete l[o.id], delete o.listeningTo[o.objId]);
                      }
                      h.length ? (t[e] = h) : delete t[e];
                    }
                    return t;
                  }
                  for (var p = n.keys(l); s < p.length; s++)
                    (o = l[p[s]]), delete l[o.id], delete o.listeningTo[o.objId];
                }
              };
              (u.once = function(t, e, i) {
                var r = h(g, {}, t, e, n.bind(this.off, this));
                return 'string' == typeof t && null == i && (e = void 0), this.on(r, e, i);
              }),
                (u.listenToOnce = function(t, e, i) {
                  var r = h(g, {}, e, i, n.bind(this.stopListening, this, t));
                  return this.listenTo(t, r);
                });
              var g = function(t, e, i, r) {
                if (i) {
                  var o = (t[e] = n.once(function() {
                    r(e, o), i.apply(this, arguments);
                  }));
                  o._callback = i;
                }
                return t;
              };
              u.trigger = function(t) {
                if (!this._events) return this;
                for (var e = Math.max(0, arguments.length - 1), n = Array(e), i = 0; i < e; i++)
                  n[i] = arguments[i + 1];
                return h(m, this._events, t, void 0, n), this;
              };
              var m = function(t, e, n, i) {
                  if (t) {
                    var r = t[e],
                      o = t.all;
                    r && o && (o = o.slice()), r && v(r, i), o && v(o, [e].concat(i));
                  }
                  return t;
                },
                v = function(t, e) {
                  var n,
                    i = -1,
                    r = t.length,
                    o = e[0],
                    s = e[1],
                    a = e[2];
                  switch (e.length) {
                    case 0:
                      for (; ++i < r; ) (n = t[i]).callback.call(n.ctx);
                      return;
                    case 1:
                      for (; ++i < r; ) (n = t[i]).callback.call(n.ctx, o);
                      return;
                    case 2:
                      for (; ++i < r; ) (n = t[i]).callback.call(n.ctx, o, s);
                      return;
                    case 3:
                      for (; ++i < r; ) (n = t[i]).callback.call(n.ctx, o, s, a);
                      return;
                    default:
                      for (; ++i < r; ) (n = t[i]).callback.apply(n.ctx, e);
                      return;
                  }
                };
              (u.bind = u.on), (u.unbind = u.off), n.extend(e, u);
              var y = (e.Model = function(t, e) {
                var i = t || {};
                e || (e = {}),
                  (this.cid = n.uniqueId(this.cidPrefix)),
                  (this.attributes = {}),
                  e.collection && (this.collection = e.collection),
                  e.parse && (i = this.parse(i, e) || {});
                var r = n.result(this, 'defaults');
                (i = n.defaults(n.extend({}, r, i), r)),
                  this.set(i, e),
                  (this.changed = {}),
                  this.initialize.apply(this, arguments);
              });
              n.extend(y.prototype, u, {
                changed: null,
                validationError: null,
                idAttribute: 'id',
                cidPrefix: 'c',
                initialize: function() {},
                toJSON: function(t) {
                  return n.clone(this.attributes);
                },
                sync: function() {
                  return e.sync.apply(this, arguments);
                },
                get: function(t) {
                  return this.attributes[t];
                },
                escape: function(t) {
                  return n.escape(this.get(t));
                },
                has: function(t) {
                  return null != this.get(t);
                },
                matches: function(t) {
                  return !!n.iteratee(t, this)(this.attributes);
                },
                set: function(t, e, i) {
                  if (null == t) return this;
                  var r;
                  if (
                    ('object' == typeof t ? ((r = t), (i = e)) : ((r = {})[t] = e),
                    i || (i = {}),
                    !this._validate(r, i))
                  )
                    return !1;
                  var o = i.unset,
                    s = i.silent,
                    a = [],
                    l = this._changing;
                  (this._changing = !0),
                    l ||
                      ((this._previousAttributes = n.clone(this.attributes)), (this.changed = {}));
                  var u = this.attributes,
                    c = this.changed,
                    h = this._previousAttributes;
                  for (var f in r)
                    (e = r[f]),
                      n.isEqual(u[f], e) || a.push(f),
                      n.isEqual(h[f], e) ? delete c[f] : (c[f] = e),
                      o ? delete u[f] : (u[f] = e);
                  if ((this.idAttribute in r && (this.id = this.get(this.idAttribute)), !s)) {
                    a.length && (this._pending = i);
                    for (var d = 0; d < a.length; d++)
                      this.trigger('change:' + a[d], this, u[a[d]], i);
                  }
                  if (l) return this;
                  if (!s)
                    for (; this._pending; )
                      (i = this._pending), (this._pending = !1), this.trigger('change', this, i);
                  return (this._pending = !1), (this._changing = !1), this;
                },
                unset: function(t, e) {
                  return this.set(t, void 0, n.extend({}, e, { unset: !0 }));
                },
                clear: function(t) {
                  var e = {};
                  for (var i in this.attributes) e[i] = void 0;
                  return this.set(e, n.extend({}, t, { unset: !0 }));
                },
                hasChanged: function(t) {
                  return null == t ? !n.isEmpty(this.changed) : n.has(this.changed, t);
                },
                changedAttributes: function(t) {
                  if (!t) return !!this.hasChanged() && n.clone(this.changed);
                  var e = this._changing ? this._previousAttributes : this.attributes,
                    i = {};
                  for (var r in t) {
                    var o = t[r];
                    n.isEqual(e[r], o) || (i[r] = o);
                  }
                  return !!n.size(i) && i;
                },
                previous: function(t) {
                  return null != t && this._previousAttributes ? this._previousAttributes[t] : null;
                },
                previousAttributes: function() {
                  return n.clone(this._previousAttributes);
                },
                fetch: function(t) {
                  var e = this,
                    i = (t = n.extend({ parse: !0 }, t)).success;
                  return (
                    (t.success = function(n) {
                      var r = t.parse ? e.parse(n, t) : n;
                      if (!e.set(r, t)) return !1;
                      i && i.call(t.context, e, n, t), e.trigger('sync', e, n, t);
                    }),
                    V(this, t),
                    this.sync('read', this, t)
                  );
                },
                save: function(t, e, i) {
                  var r;
                  null == t || 'object' == typeof t ? ((r = t), (i = e)) : ((r = {})[t] = e);
                  var o = (i = n.extend({ validate: !0, parse: !0 }, i)).wait;
                  if (r && !o) {
                    if (!this.set(r, i)) return !1;
                  } else if (!this._validate(r, i)) return !1;
                  var s = this,
                    a = i.success,
                    l = this.attributes;
                  (i.success = function(t) {
                    s.attributes = l;
                    var e = i.parse ? s.parse(t, i) : t;
                    if ((o && (e = n.extend({}, r, e)), e && !s.set(e, i))) return !1;
                    a && a.call(i.context, s, t, i), s.trigger('sync', s, t, i);
                  }),
                    V(this, i),
                    r && o && (this.attributes = n.extend({}, l, r));
                  var u = this.isNew() ? 'create' : i.patch ? 'patch' : 'update';
                  'patch' !== u || i.attrs || (i.attrs = r);
                  var c = this.sync(u, this, i);
                  return (this.attributes = l), c;
                },
                destroy: function(t) {
                  var e = this,
                    i = (t = t ? n.clone(t) : {}).success,
                    r = t.wait,
                    o = function() {
                      e.stopListening(), e.trigger('destroy', e, e.collection, t);
                    };
                  t.success = function(n) {
                    r && o(),
                      i && i.call(t.context, e, n, t),
                      e.isNew() || e.trigger('sync', e, n, t);
                  };
                  var s = !1;
                  return (
                    this.isNew()
                      ? n.defer(t.success)
                      : (V(this, t), (s = this.sync('delete', this, t))),
                    r || o(),
                    s
                  );
                },
                url: function() {
                  var t = n.result(this, 'urlRoot') || n.result(this.collection, 'url') || M();
                  if (this.isNew()) return t;
                  var e = this.get(this.idAttribute);
                  return t.replace(/[^\/]$/, '$&/') + encodeURIComponent(e);
                },
                parse: function(t, e) {
                  return t;
                },
                clone: function() {
                  return new this.constructor(this.attributes);
                },
                isNew: function() {
                  return !this.has(this.idAttribute);
                },
                isValid: function(t) {
                  return this._validate({}, n.extend({}, t, { validate: !0 }));
                },
                _validate: function(t, e) {
                  if (!e.validate || !this.validate) return !0;
                  t = n.extend({}, this.attributes, t);
                  var i = (this.validationError = this.validate(t, e) || null);
                  return (
                    !i ||
                    (this.trigger('invalid', this, i, n.extend(e, { validationError: i })), !1)
                  );
                },
              }),
                s(
                  y,
                  {
                    keys: 1,
                    values: 1,
                    pairs: 1,
                    invert: 1,
                    pick: 0,
                    omit: 0,
                    chain: 1,
                    isEmpty: 1,
                  },
                  'attributes',
                );
              var _ = (e.Collection = function(t, e) {
                  e || (e = {}),
                    e.model && (this.model = e.model),
                    void 0 !== e.comparator && (this.comparator = e.comparator),
                    this._reset(),
                    this.initialize.apply(this, arguments),
                    t && this.reset(t, n.extend({ silent: !0 }, e));
                }),
                b = { add: !0, remove: !0, merge: !0 },
                w = { add: !0, remove: !1 },
                E = function(t, e, n) {
                  n = Math.min(Math.max(n, 0), t.length);
                  var i,
                    r = Array(t.length - n),
                    o = e.length;
                  for (i = 0; i < r.length; i++) r[i] = t[i + n];
                  for (i = 0; i < o; i++) t[i + n] = e[i];
                  for (i = 0; i < r.length; i++) t[i + o + n] = r[i];
                };
              n.extend(_.prototype, u, {
                model: y,
                initialize: function() {},
                toJSON: function(t) {
                  return this.map(function(e) {
                    return e.toJSON(t);
                  });
                },
                sync: function() {
                  return e.sync.apply(this, arguments);
                },
                add: function(t, e) {
                  return this.set(t, n.extend({ merge: !1 }, e, w));
                },
                remove: function(t, e) {
                  e = n.extend({}, e);
                  var i = !n.isArray(t);
                  t = i ? [t] : t.slice();
                  var r = this._removeModels(t, e);
                  return (
                    !e.silent &&
                      r.length &&
                      ((e.changes = { added: [], merged: [], removed: r }),
                      this.trigger('update', this, e)),
                    i ? r[0] : r
                  );
                },
                set: function(t, e) {
                  if (null != t) {
                    (e = n.extend({}, b, e)).parse &&
                      !this._isModel(t) &&
                      (t = this.parse(t, e) || []);
                    var i = !n.isArray(t);
                    t = i ? [t] : t.slice();
                    var r = e.at;
                    null != r && (r = +r),
                      r > this.length && (r = this.length),
                      r < 0 && (r += this.length + 1);
                    var o,
                      s,
                      a = [],
                      l = [],
                      u = [],
                      c = [],
                      h = {},
                      f = e.add,
                      d = e.merge,
                      p = e.remove,
                      g = !1,
                      m = this.comparator && null == r && !1 !== e.sort,
                      v = n.isString(this.comparator) ? this.comparator : null;
                    for (s = 0; s < t.length; s++) {
                      o = t[s];
                      var y = this.get(o);
                      if (y) {
                        if (d && o !== y) {
                          var _ = this._isModel(o) ? o.attributes : o;
                          e.parse && (_ = y.parse(_, e)),
                            y.set(_, e),
                            u.push(y),
                            m && !g && (g = y.hasChanged(v));
                        }
                        h[y.cid] || ((h[y.cid] = !0), a.push(y)), (t[s] = y);
                      } else
                        f &&
                          (o = t[s] = this._prepareModel(o, e)) &&
                          (l.push(o), this._addReference(o, e), (h[o.cid] = !0), a.push(o));
                    }
                    if (p) {
                      for (s = 0; s < this.length; s++) (o = this.models[s]), h[o.cid] || c.push(o);
                      c.length && this._removeModels(c, e);
                    }
                    var w = !1,
                      x = !m && f && p;
                    if (
                      (a.length && x
                        ? ((w =
                            this.length !== a.length ||
                            n.some(this.models, function(t, e) {
                              return t !== a[e];
                            })),
                          (this.models.length = 0),
                          E(this.models, a, 0),
                          (this.length = this.models.length))
                        : l.length &&
                          (m && (g = !0),
                          E(this.models, l, null == r ? this.length : r),
                          (this.length = this.models.length)),
                      g && this.sort({ silent: !0 }),
                      !e.silent)
                    ) {
                      for (s = 0; s < l.length; s++)
                        null != r && (e.index = r + s), (o = l[s]).trigger('add', o, this, e);
                      (g || w) && this.trigger('sort', this, e),
                        (l.length || c.length || u.length) &&
                          ((e.changes = { added: l, removed: c, merged: u }),
                          this.trigger('update', this, e));
                    }
                    return i ? t[0] : t;
                  }
                },
                reset: function(t, e) {
                  e = e ? n.clone(e) : {};
                  for (var i = 0; i < this.models.length; i++)
                    this._removeReference(this.models[i], e);
                  return (
                    (e.previousModels = this.models),
                    this._reset(),
                    (t = this.add(t, n.extend({ silent: !0 }, e))),
                    e.silent || this.trigger('reset', this, e),
                    t
                  );
                },
                push: function(t, e) {
                  return this.add(t, n.extend({ at: this.length }, e));
                },
                pop: function(t) {
                  var e = this.at(this.length - 1);
                  return this.remove(e, t);
                },
                unshift: function(t, e) {
                  return this.add(t, n.extend({ at: 0 }, e));
                },
                shift: function(t) {
                  var e = this.at(0);
                  return this.remove(e, t);
                },
                slice: function() {
                  return o.apply(this.models, arguments);
                },
                get: function(t) {
                  if (null != t)
                    return (
                      this._byId[t] ||
                      this._byId[this.modelId(t.attributes || t)] ||
                      (t.cid && this._byId[t.cid])
                    );
                },
                has: function(t) {
                  return null != this.get(t);
                },
                at: function(t) {
                  return t < 0 && (t += this.length), this.models[t];
                },
                where: function(t, e) {
                  return this[e ? 'find' : 'filter'](t);
                },
                findWhere: function(t) {
                  return this.where(t, !0);
                },
                sort: function(t) {
                  var e = this.comparator;
                  if (!e) throw new Error('Cannot sort a set without a comparator');
                  t || (t = {});
                  var i = e.length;
                  return (
                    n.isFunction(e) && (e = n.bind(e, this)),
                    1 === i || n.isString(e) ? (this.models = this.sortBy(e)) : this.models.sort(e),
                    t.silent || this.trigger('sort', this, t),
                    this
                  );
                },
                pluck: function(t) {
                  return this.map(t + '');
                },
                fetch: function(t) {
                  var e = (t = n.extend({ parse: !0 }, t)).success,
                    i = this;
                  return (
                    (t.success = function(n) {
                      var r = t.reset ? 'reset' : 'set';
                      i[r](n, t), e && e.call(t.context, i, n, t), i.trigger('sync', i, n, t);
                    }),
                    V(this, t),
                    this.sync('read', this, t)
                  );
                },
                create: function(t, e) {
                  var i = (e = e ? n.clone(e) : {}).wait;
                  if (!(t = this._prepareModel(t, e))) return !1;
                  i || this.add(t, e);
                  var r = this,
                    o = e.success;
                  return (
                    (e.success = function(t, e, n) {
                      i && r.add(t, n), o && o.call(n.context, t, e, n);
                    }),
                    t.save(null, e),
                    t
                  );
                },
                parse: function(t, e) {
                  return t;
                },
                clone: function() {
                  return new this.constructor(this.models, {
                    model: this.model,
                    comparator: this.comparator,
                  });
                },
                modelId: function(t) {
                  return t[this.model.prototype.idAttribute || 'id'];
                },
                _reset: function() {
                  (this.length = 0), (this.models = []), (this._byId = {});
                },
                _prepareModel: function(t, e) {
                  if (this._isModel(t)) return t.collection || (t.collection = this), t;
                  (e = e ? n.clone(e) : {}).collection = this;
                  var i = new this.model(t, e);
                  return i.validationError
                    ? (this.trigger('invalid', this, i.validationError, e), !1)
                    : i;
                },
                _removeModels: function(t, e) {
                  for (var n = [], i = 0; i < t.length; i++) {
                    var r = this.get(t[i]);
                    if (r) {
                      var o = this.indexOf(r);
                      this.models.splice(o, 1), this.length--, delete this._byId[r.cid];
                      var s = this.modelId(r.attributes);
                      null != s && delete this._byId[s],
                        e.silent || ((e.index = o), r.trigger('remove', r, this, e)),
                        n.push(r),
                        this._removeReference(r, e);
                    }
                  }
                  return n;
                },
                _isModel: function(t) {
                  return t instanceof y;
                },
                _addReference: function(t, e) {
                  this._byId[t.cid] = t;
                  var n = this.modelId(t.attributes);
                  null != n && (this._byId[n] = t), t.on('all', this._onModelEvent, this);
                },
                _removeReference: function(t, e) {
                  delete this._byId[t.cid];
                  var n = this.modelId(t.attributes);
                  null != n && delete this._byId[n],
                    this === t.collection && delete t.collection,
                    t.off('all', this._onModelEvent, this);
                },
                _onModelEvent: function(t, e, n, i) {
                  if (e) {
                    if (('add' === t || 'remove' === t) && n !== this) return;
                    if (('destroy' === t && this.remove(e, i), 'change' === t)) {
                      var r = this.modelId(e.previousAttributes()),
                        o = this.modelId(e.attributes);
                      r !== o &&
                        (null != r && delete this._byId[r], null != o && (this._byId[o] = e));
                    }
                  }
                  this.trigger.apply(this, arguments);
                },
              }),
                s(
                  _,
                  {
                    forEach: 3,
                    each: 3,
                    map: 3,
                    collect: 3,
                    reduce: 0,
                    foldl: 0,
                    inject: 0,
                    reduceRight: 0,
                    foldr: 0,
                    find: 3,
                    detect: 3,
                    filter: 3,
                    select: 3,
                    reject: 3,
                    every: 3,
                    all: 3,
                    some: 3,
                    any: 3,
                    include: 3,
                    includes: 3,
                    contains: 3,
                    invoke: 0,
                    max: 3,
                    min: 3,
                    toArray: 1,
                    size: 1,
                    first: 3,
                    head: 3,
                    take: 3,
                    initial: 3,
                    rest: 3,
                    tail: 3,
                    drop: 3,
                    last: 3,
                    without: 0,
                    difference: 0,
                    indexOf: 3,
                    shuffle: 1,
                    lastIndexOf: 3,
                    isEmpty: 1,
                    chain: 1,
                    sample: 3,
                    partition: 3,
                    groupBy: 3,
                    countBy: 3,
                    sortBy: 3,
                    indexBy: 3,
                    findIndex: 3,
                    findLastIndex: 3,
                  },
                  'models',
                );
              var x = (e.View = function(t) {
                  (this.cid = n.uniqueId('view')),
                    n.extend(this, n.pick(t, C)),
                    this._ensureElement(),
                    this.initialize.apply(this, arguments);
                }),
                T = /^(\S+)\s*(.*)$/,
                C = [
                  'model',
                  'collection',
                  'el',
                  'id',
                  'attributes',
                  'className',
                  'tagName',
                  'events',
                ];
              n.extend(x.prototype, u, {
                tagName: 'div',
                $: function(t) {
                  return this.$el.find(t);
                },
                initialize: function() {},
                render: function() {
                  return this;
                },
                remove: function() {
                  return this._removeElement(), this.stopListening(), this;
                },
                _removeElement: function() {
                  this.$el.remove();
                },
                setElement: function(t) {
                  return this.undelegateEvents(), this._setElement(t), this.delegateEvents(), this;
                },
                _setElement: function(t) {
                  (this.$el = t instanceof e.$ ? t : e.$(t)), (this.el = this.$el[0]);
                },
                delegateEvents: function(t) {
                  if ((t || (t = n.result(this, 'events')), !t)) return this;
                  for (var e in (this.undelegateEvents(), t)) {
                    var i = t[e];
                    if ((n.isFunction(i) || (i = this[i]), i)) {
                      var r = e.match(T);
                      this.delegate(r[1], r[2], n.bind(i, this));
                    }
                  }
                  return this;
                },
                delegate: function(t, e, n) {
                  return this.$el.on(t + '.delegateEvents' + this.cid, e, n), this;
                },
                undelegateEvents: function() {
                  return this.$el && this.$el.off('.delegateEvents' + this.cid), this;
                },
                undelegate: function(t, e, n) {
                  return this.$el.off(t + '.delegateEvents' + this.cid, e, n), this;
                },
                _createElement: function(t) {
                  return document.createElement(t);
                },
                _ensureElement: function() {
                  if (this.el) this.setElement(n.result(this, 'el'));
                  else {
                    var t = n.extend({}, n.result(this, 'attributes'));
                    this.id && (t.id = n.result(this, 'id')),
                      this.className && (t.class = n.result(this, 'className')),
                      this.setElement(this._createElement(n.result(this, 'tagName'))),
                      this._setAttributes(t);
                  }
                },
                _setAttributes: function(t) {
                  this.$el.attr(t);
                },
              }),
                (e.sync = function(t, i, r) {
                  var o = S[t];
                  n.defaults(r || (r = {}), {
                    emulateHTTP: e.emulateHTTP,
                    emulateJSON: e.emulateJSON,
                  });
                  var s = { type: o, dataType: 'json' };
                  if (
                    (r.url || (s.url = n.result(i, 'url') || M()),
                    null != r.data ||
                      !i ||
                      ('create' !== t && 'update' !== t && 'patch' !== t) ||
                      ((s.contentType = 'application/json'),
                      (s.data = JSON.stringify(r.attrs || i.toJSON(r)))),
                    r.emulateJSON &&
                      ((s.contentType = 'application/x-www-form-urlencoded'),
                      (s.data = s.data ? { model: s.data } : {})),
                    r.emulateHTTP && ('PUT' === o || 'DELETE' === o || 'PATCH' === o))
                  ) {
                    (s.type = 'POST'), r.emulateJSON && (s.data._method = o);
                    var a = r.beforeSend;
                    r.beforeSend = function(t) {
                      if ((t.setRequestHeader('X-HTTP-Method-Override', o), a))
                        return a.apply(this, arguments);
                    };
                  }
                  'GET' === s.type || r.emulateJSON || (s.processData = !1);
                  var l = r.error;
                  r.error = function(t, e, n) {
                    (r.textStatus = e), (r.errorThrown = n), l && l.call(r.context, t, e, n);
                  };
                  var u = (r.xhr = e.ajax(n.extend(s, r)));
                  return i.trigger('request', i, u, r), u;
                });
              var S = {
                create: 'POST',
                update: 'PUT',
                patch: 'PATCH',
                delete: 'DELETE',
                read: 'GET',
              };
              e.ajax = function() {
                return e.$.ajax.apply(e.$, arguments);
              };
              var A = (e.Router = function(t) {
                  t || (t = {}),
                    t.routes && (this.routes = t.routes),
                    this._bindRoutes(),
                    this.initialize.apply(this, arguments);
                }),
                O = /\((.*?)\)/g,
                D = /(\(\?)?:\w+/g,
                I = /\*\w+/g,
                k = /[\-{}\[\]+?.,\\\^$|#\s]/g;
              n.extend(A.prototype, u, {
                initialize: function() {},
                route: function(t, i, r) {
                  n.isRegExp(t) || (t = this._routeToRegExp(t)),
                    n.isFunction(i) && ((r = i), (i = '')),
                    r || (r = this[i]);
                  var o = this;
                  return (
                    e.history.route(t, function(n) {
                      var s = o._extractParameters(t, n);
                      !1 !== o.execute(r, s, i) &&
                        (o.trigger.apply(o, ['route:' + i].concat(s)),
                        o.trigger('route', i, s),
                        e.history.trigger('route', o, i, s));
                    }),
                    this
                  );
                },
                execute: function(t, e, n) {
                  t && t.apply(this, e);
                },
                navigate: function(t, n) {
                  return e.history.navigate(t, n), this;
                },
                _bindRoutes: function() {
                  if (this.routes) {
                    this.routes = n.result(this, 'routes');
                    for (var t, e = n.keys(this.routes); null != (t = e.pop()); )
                      this.route(t, this.routes[t]);
                  }
                },
                _routeToRegExp: function(t) {
                  return (
                    (t = t
                      .replace(k, '\\$&')
                      .replace(O, '(?:$1)?')
                      .replace(D, function(t, e) {
                        return e ? t : '([^/?]+)';
                      })
                      .replace(I, '([^?]*?)')),
                    new RegExp('^' + t + '(?:\\?([\\s\\S]*))?$')
                  );
                },
                _extractParameters: function(t, e) {
                  var i = t.exec(e).slice(1);
                  return n.map(i, function(t, e) {
                    return e === i.length - 1 ? t || null : t ? decodeURIComponent(t) : null;
                  });
                },
              });
              var N = (e.History = function() {
                  (this.handlers = []),
                    (this.checkUrl = n.bind(this.checkUrl, this)),
                    'undefined' != typeof window &&
                      ((this.location = window.location), (this.history = window.history));
                }),
                R = /^[#\/]|\s+$/g,
                P = /^\/+|\/+$/g,
                L = /#.*$/;
              (N.started = !1),
                n.extend(N.prototype, u, {
                  interval: 50,
                  atRoot: function() {
                    var t = this.location.pathname.replace(/[^\/]$/, '$&/');
                    return t === this.root && !this.getSearch();
                  },
                  matchRoot: function() {
                    var t = this.decodeFragment(this.location.pathname),
                      e = t.slice(0, this.root.length - 1) + '/';
                    return e === this.root;
                  },
                  decodeFragment: function(t) {
                    return decodeURI(t.replace(/%25/g, '%2525'));
                  },
                  getSearch: function() {
                    var t = this.location.href.replace(/#.*/, '').match(/\?.+/);
                    return t ? t[0] : '';
                  },
                  getHash: function(t) {
                    var e = (t || this).location.href.match(/#(.*)$/);
                    return e ? e[1] : '';
                  },
                  getPath: function() {
                    var t = this.decodeFragment(this.location.pathname + this.getSearch()).slice(
                      this.root.length - 1,
                    );
                    return '/' === t.charAt(0) ? t.slice(1) : t;
                  },
                  getFragment: function(t) {
                    return (
                      null == t &&
                        (t =
                          this._usePushState || !this._wantsHashChange
                            ? this.getPath()
                            : this.getHash()),
                      t.replace(R, '')
                    );
                  },
                  start: function(t) {
                    if (N.started) throw new Error('Backbone.history has already been started');
                    if (
                      ((N.started = !0),
                      (this.options = n.extend({ root: '/' }, this.options, t)),
                      (this.root = this.options.root),
                      (this._wantsHashChange = !1 !== this.options.hashChange),
                      (this._hasHashChange =
                        'onhashchange' in window &&
                        (void 0 === document.documentMode || document.documentMode > 7)),
                      (this._useHashChange = this._wantsHashChange && this._hasHashChange),
                      (this._wantsPushState = !!this.options.pushState),
                      (this._hasPushState = !(!this.history || !this.history.pushState)),
                      (this._usePushState = this._wantsPushState && this._hasPushState),
                      (this.fragment = this.getFragment()),
                      (this.root = ('/' + this.root + '/').replace(P, '/')),
                      this._wantsHashChange && this._wantsPushState)
                    ) {
                      if (!this._hasPushState && !this.atRoot()) {
                        var e = this.root.slice(0, -1) || '/';
                        return this.location.replace(e + '#' + this.getPath()), !0;
                      }
                      this._hasPushState &&
                        this.atRoot() &&
                        this.navigate(this.getHash(), { replace: !0 });
                    }
                    if (!this._hasHashChange && this._wantsHashChange && !this._usePushState) {
                      (this.iframe = document.createElement('iframe')),
                        (this.iframe.src = 'javascript:0'),
                        (this.iframe.style.display = 'none'),
                        (this.iframe.tabIndex = -1);
                      var i = document.body,
                        r = i.insertBefore(this.iframe, i.firstChild).contentWindow;
                      r.document.open(),
                        r.document.close(),
                        (r.location.hash = '#' + this.fragment);
                    }
                    var o =
                      window.addEventListener ||
                      function(t, e) {
                        return attachEvent('on' + t, e);
                      };
                    if (
                      (this._usePushState
                        ? o('popstate', this.checkUrl, !1)
                        : this._useHashChange && !this.iframe
                        ? o('hashchange', this.checkUrl, !1)
                        : this._wantsHashChange &&
                          (this._checkUrlInterval = setInterval(this.checkUrl, this.interval)),
                      !this.options.silent)
                    )
                      return this.loadUrl();
                  },
                  stop: function() {
                    var t =
                      window.removeEventListener ||
                      function(t, e) {
                        return detachEvent('on' + t, e);
                      };
                    this._usePushState
                      ? t('popstate', this.checkUrl, !1)
                      : this._useHashChange && !this.iframe && t('hashchange', this.checkUrl, !1),
                      this.iframe && (document.body.removeChild(this.iframe), (this.iframe = null)),
                      this._checkUrlInterval && clearInterval(this._checkUrlInterval),
                      (N.started = !1);
                  },
                  route: function(t, e) {
                    this.handlers.unshift({ route: t, callback: e });
                  },
                  checkUrl: function(t) {
                    var e = this.getFragment();
                    if (
                      (e === this.fragment &&
                        this.iframe &&
                        (e = this.getHash(this.iframe.contentWindow)),
                      e === this.fragment)
                    )
                      return !1;
                    this.iframe && this.navigate(e), this.loadUrl();
                  },
                  loadUrl: function(t) {
                    return (
                      !!this.matchRoot() &&
                      ((t = this.fragment = this.getFragment(t)),
                      n.some(this.handlers, function(e) {
                        if (e.route.test(t)) return e.callback(t), !0;
                      }))
                    );
                  },
                  navigate: function(t, e) {
                    if (!N.started) return !1;
                    (e && !0 !== e) || (e = { trigger: !!e }), (t = this.getFragment(t || ''));
                    var n = this.root;
                    ('' !== t && '?' !== t.charAt(0)) || (n = n.slice(0, -1) || '/');
                    var i = n + t;
                    if (((t = this.decodeFragment(t.replace(L, ''))), this.fragment !== t)) {
                      if (((this.fragment = t), this._usePushState))
                        this.history[e.replace ? 'replaceState' : 'pushState'](
                          {},
                          document.title,
                          i,
                        );
                      else {
                        if (!this._wantsHashChange) return this.location.assign(i);
                        if (
                          (this._updateHash(this.location, t, e.replace),
                          this.iframe && t !== this.getHash(this.iframe.contentWindow))
                        ) {
                          var r = this.iframe.contentWindow;
                          e.replace || (r.document.open(), r.document.close()),
                            this._updateHash(r.location, t, e.replace);
                        }
                      }
                      return e.trigger ? this.loadUrl(t) : void 0;
                    }
                  },
                  _updateHash: function(t, e, n) {
                    if (n) {
                      var i = t.href.replace(/(javascript:|#).*$/, '');
                      t.replace(i + '#' + e);
                    } else t.hash = '#' + e;
                  },
                }),
                (e.history = new N()),
                (y.extend = _.extend = A.extend = x.extend = N.extend = function(t, e) {
                  var i,
                    r = this;
                  return (
                    (i =
                      t && n.has(t, 'constructor')
                        ? t.constructor
                        : function() {
                            return r.apply(this, arguments);
                          }),
                    n.extend(i, r, e),
                    (i.prototype = n.create(r.prototype, t)),
                    (i.prototype.constructor = i),
                    (i.__super__ = r.prototype),
                    i
                  );
                });
              var M = function() {
                  throw new Error('A "url" property or function must be specified');
                },
                V = function(t, e) {
                  var n = e.error;
                  e.error = function(i) {
                    n && n.call(e.context, t, i, e), t.trigger('error', t, i, e);
                  };
                };
              return e;
            })(s, n, t, e);
          }.apply(e, r)) || (t.exports = o);
    }.call(this, n(11)));
  },
  function(t, e, n) {
    'use strict';
    var i = n(4),
      r = n.n(i),
      o = n(23),
      s = n.n(o),
      a = Object.prototype.toString,
      l = Object.keys,
      u = Array.isArray,
      c = function(t) {
        return t ? (u(t) ? t.slice(0) : d({}, t)) : t;
      },
      h = function(t, e) {
        return e.reduce(function(e, n) {
          return void 0 === t[n]
            ? e
            : (function(t, e, n) {
                return (t[e] = n), t;
              })(e, n, t[n]);
        }, {});
      },
      f = function(t, e) {
        var n = l(t);
        return (
          n.length === l(e).length &&
          n.every(function(n) {
            return e[n] === t[n];
          })
        );
      },
      d = function(t) {
        for (var e = arguments.length, n = Array(e > 1 ? e - 1 : 0), i = 1; i < e; i++)
          n[i - 1] = arguments[i];
        return (
          n.forEach(function(e) {
            if (e) for (var n in e) t[n] = e[n];
          }),
          t
        );
      };
    function p(t, e, n, i, r, o, s, a) {
      if (!t) {
        var l = [n, i, r, o, s, a],
          u = 0,
          c = new Error(
            'Invariant Violation: ' +
              e.replace(/%s/g, function() {
                return l[u++];
              }),
          );
        throw ((c.framesToPop = 1), c);
      }
    }
    function g(t) {
      var e = [],
        n = {},
        i = {};
      function r() {
        return n[o()] || [];
      }
      function o() {
        return e.join('.');
      }
      return (
        t(function(t, s, a) {
          var l = void 0;
          if (
            (p(!i[t], 'Route names must be unique, but route "%s" is declared multiple times', t),
            (i[t] = !0),
            1 === arguments.length && (s = {}),
            2 === arguments.length && 'function' == typeof s && ((a = s), (s = {})),
            'string' != typeof s.path)
          ) {
            var u = t.split('.');
            s.path = u[u.length - 1];
          }
          a && ((e = e.concat(t)), a(), (l = r()), e.splice(-1)),
            (function(t) {
              var e = o();
              (n[e] = n[e] || []), n[e].push(t);
            })({ name: t, path: s.path, routes: l || [], options: s, ancestors: c(e) });
        }),
        r()
      );
    }
    var m = /:([a-zA-Z_$][a-zA-Z0-9_$?]*[?+*]?)/g,
      v = /[+*?]$/g,
      y = /\?(.+)/,
      _ = {};
    function b(t) {
      if (!(t in _)) {
        var e = [],
          n = s()(t, e);
        _[t] = {
          matcher: n,
          paramNames: e.map(function(t) {
            return t.name;
          }),
        };
      }
      return _[t];
    }
    function w(t) {
      return t.replace(y, '');
    }
    var E = {
        bind: function(t, e, n) {
          return t.addEventListener(e, n), n;
        },
        unbind: function(t, e, n) {
          return t.removeEventListener(e, n), n;
        },
      },
      x = function() {
        (this.handlers = []),
          (this.checkUrl = this.checkUrl.bind(this)),
          'undefined' != typeof window &&
            ((this.location = window.location), (this.history = window.history));
      },
      T = /^[#\/]|\s+$/g,
      C = /^\/+|\/+$/g,
      S = /\/$/,
      A = /#.*$/;
    function O(t) {
      (this.path = t.path || ''), (this.options = d({ pushState: !1, root: '/' }, t));
      var e = this;
      (this.locationBar = new x()),
        this.locationBar.onChange(function(t) {
          e.handleURL('/' + (t || ''));
        }),
        this.locationBar.start(d({}, t));
    }
    function D(t) {
      this.path = t.path || '';
    }
    d(x.prototype, {
      atRoot: function() {
        return this.location.pathname.replace(/[^\/]$/, '$&/') === this.root;
      },
      getHash: function() {
        var t = this.location.href.match(/#(.*)$/);
        return t ? t[1] : '';
      },
      getFragment: function(t, e) {
        if (null == t)
          if (this._hasPushState || !this._wantsHashChange || e) {
            t = decodeURI(this.location.pathname + this.location.search);
            var n = this.root.replace(S, '');
            t.indexOf(n) || (t = t.slice(n.length));
          } else t = this.getHash();
        return t.replace(T, '');
      },
      start: function(t) {
        (this.started = !0),
          (this.options = d({ root: '/' }, t)),
          (this.location = this.options.location || this.location),
          (this.history = this.options.history || this.history),
          (this.root = this.options.root),
          (this._wantsHashChange = !1 !== this.options.hashChange),
          (this._wantsPushState = !!this.options.pushState),
          (this._hasPushState = !!(
            this.options.pushState &&
            this.history &&
            this.history.pushState
          ));
        var e = this.getFragment();
        (this.root = ('/' + this.root + '/').replace(C, '/')),
          E.bind(window, this._hasPushState ? 'popstate' : 'hashchange', this.checkUrl),
          (this.fragment = e);
        var n = this.location;
        if (this._wantsHashChange && this._wantsPushState) {
          if (!this._hasPushState && !this.atRoot())
            return (
              (this.fragment = this.getFragment(null, !0)),
              this.location.replace(this.root + '#' + this.fragment),
              !0
            );
          this._hasPushState &&
            this.atRoot() &&
            n.hash &&
            ((this.fragment = this.getHash().replace(T, '')),
            this.history.replaceState({}, document.title, this.root + this.fragment));
        }
        if (!this.options.silent) return this.loadUrl();
      },
      stop: function() {
        E.unbind(window, this._hasPushState ? 'popstate' : 'hashchange', this.checkUrl),
          (this.started = !1);
      },
      route: function(t, e) {
        this.handlers.unshift({ route: t, callback: e });
      },
      checkUrl: function() {
        if (this.getFragment() === this.fragment) return !1;
        this.loadUrl();
      },
      loadUrl: function(t) {
        return (
          (t = this.fragment = this.getFragment(t)),
          this.handlers.some(function(e) {
            if (e.route.test(t)) return e.callback(t), !0;
          })
        );
      },
      navigate: function(t, e) {
        if (!this.started) return !1;
        (e && !0 !== e) || (e = { trigger: !!e });
        var n = this.root + (t = this.getFragment(t || ''));
        if (((t = t.replace(A, '')), this.fragment !== t)) {
          if (
            ((this.fragment = t), '' === t && '/' !== n && (n = n.slice(0, -1)), this._hasPushState)
          )
            this.history[e.replace ? 'replaceState' : 'pushState']({}, document.title, n);
          else {
            if (!this._wantsHashChange) return this.location.assign(n);
            this._updateHash(this.location, t, e.replace);
          }
          return e.trigger ? this.loadUrl(t) : void 0;
        }
      },
      _updateHash: function(t, e, n) {
        if (n) {
          var i = t.href.replace(/(javascript:|#).*$/, '');
          t.replace(i + '#' + e);
        } else t.hash = '#' + e;
      },
    }),
      (x.prototype.update = function() {
        this.navigate.apply(this, arguments);
      }),
      (x.prototype.onChange = function(t) {
        this.route(/^(.*?)$/, t);
      }),
      (x.prototype.hasPushState = function() {
        if (!this.started) throw new Error('only available after LocationBar.start()');
        return this._hasPushState;
      }),
      (O.prototype.usesPushState = function() {
        return this.options.pushState && this.locationBar.hasPushState();
      }),
      (O.prototype.getURL = function() {
        return this.path;
      }),
      (O.prototype.setURL = function(t, e) {
        this.path !== t && ((this.path = t), this.locationBar.update(t, d({ trigger: !0 }, e)));
      }),
      (O.prototype.replaceURL = function(t, e) {
        this.path !== t &&
          ((this.path = t), this.locationBar.update(t, d({ trigger: !0, replace: !0 }, e)));
      }),
      (O.prototype.onChange = function(t) {
        this.changeCallback = t;
      }),
      (O.prototype.formatURL = function(t) {
        if (this.locationBar.hasPushState()) {
          var e = this.options.root;
          return '' !== t && (e = e.replace(/\/$/, '')), e + t;
        }
        return '/' === t[0] && (t = t.substr(1)), '#' + t;
      }),
      (O.prototype.removeRoot = function(t) {
        return this.options.pushState && this.options.root && '/' !== this.options.root
          ? t.replace(this.options.root, '')
          : t;
      }),
      (O.prototype.destroy = function() {
        this.locationBar.stop();
      }),
      (O.prototype.handleURL = function(t) {
        (this.path = t), this.changeCallback && this.changeCallback(t);
      }),
      (D.prototype.getURL = function() {
        return this.path;
      }),
      (D.prototype.setURL = function(t, e) {
        this.path !== t && ((this.path = t), this.handleURL(this.getURL(), e));
      }),
      (D.prototype.replaceURL = function(t, e) {
        this.path !== t && this.setURL(t, e);
      }),
      (D.prototype.onChange = function(t) {
        this.changeCallback = t;
      }),
      (D.prototype.handleURL = function(t, e) {
        (this.path = t),
          (e = d({ trigger: !0 }, e)),
          this.changeCallback && e.trigger && this.changeCallback(t);
      }),
      (D.prototype.usesPushState = function() {
        return !1;
      }),
      (D.prototype.removeRoot = function(t) {
        return t;
      }),
      (D.prototype.formatURL = function(t) {
        return t;
      });
    var I = 'TransitionRedirected',
      k = 'TransitionCancelled';
    function N(t, e, n) {
      t.middleware.forEach(function(t) {
        t.error && t.error(e, n);
      });
    }
    function R(t) {
      var e = (t = t || {}).router,
        n = e.log,
        i = e.logError,
        r = t.path,
        o = t.match,
        s = o.routes,
        a = o.params,
        l = o.pathname,
        u = o.query,
        h = t.id,
        f = Date.now();
      n('---'),
        n('Transition #' + h, 'to', r),
        n(
          'Transition #' + h,
          'routes:',
          s.map(function(t) {
            return t.name;
          }),
        ),
        n('Transition #' + h, 'params:', a),
        n('Transition #' + h, 'query:', u);
      var d = void 0,
        g = void 0,
        m = new Promise(function(t, e) {
          (d = t), (g = e);
        });
      m.then(function() {
        n('Transition #' + h, 'completed in', Date.now() - f + 'ms');
      }).catch(function(t) {
        t.type !== I && t.type !== k && (n('Transition #' + h, 'FAILED'), i(t.message || t));
      });
      var v = !1,
        y = {
          id: h,
          prev: {
            routes: c(e.state.routes) || [],
            path: e.state.path || '',
            pathname: e.state.pathname || '',
            params: c(e.state.params) || {},
            query: c(e.state.query) || {},
          },
          routes: c(s),
          path: r,
          pathname: l,
          params: c(a),
          query: c(u),
          redirectTo: function() {
            return e.transitionTo.apply(e, arguments);
          },
          retry: function() {
            return e.transitionTo(r);
          },
          cancel: function(t) {
            e.state.activeTransition === y &&
              (y.isCancelled ||
                ((e.state.activeTransition = null),
                (y.isCancelled = !0),
                (v = !0),
                t || ((t = new Error(k)).type = k),
                t.type === k && n('Transition #' + h, 'cancelled'),
                t.type === I && n('Transition #' + h, 'redirected'),
                e.middleware.forEach(function(e) {
                  e.cancel && e.cancel(y, t);
                }),
                g(t)));
          },
          followRedirects: function() {
            return m.catch(function(t) {
              return e.state.activeTransition
                ? e.state.activeTransition.followRedirects()
                : Promise.reject(t);
            });
          },
          then: m.then.bind(m),
          catch: m.catch.bind(m),
        };
      return (
        t.noop
          ? d()
          : Promise.resolve().then(function() {
              return (function t(i, o) {
                var c = void 0,
                  f = void 0;
                if (!v)
                  if (i < e.middleware.length) {
                    (c = e.middleware[i]),
                      (f = c.name || 'anonymous'),
                      n('Transition #' + h, 'resolving middleware:', f);
                    var m = void 0;
                    try {
                      (m = c.next ? c.next(y, o) : o),
                        p(
                          y !== m,
                          'Middleware %s returned a transition which resulted in a deadlock',
                          f,
                        );
                    } catch (t) {
                      return (e.state.activeTransition = null), N(e, y, t), g(t);
                    }
                    Promise.resolve(m)
                      .then(function(e) {
                        t(i + 1, e);
                      })
                      .catch(function(t) {
                        n('Transition #' + h, 'resolving middleware:', f, 'FAILED'),
                          (e.state.activeTransition = null),
                          N(e, y, t),
                          g(t);
                      });
                  } else
                    (e.state = {
                      activeTransition: null,
                      routes: s,
                      path: r,
                      pathname: l,
                      params: a,
                      query: u,
                    }),
                      e.middleware.forEach(function(t) {
                        t.done && t.done(y);
                      }),
                      d();
              })(0);
            }),
        t.noop && (y.noop = !0),
        y
      );
    }
    function P(t, e) {
      'function' == typeof t && ((e = t), (t = document));
      var n = (function(t, e, n) {
        return E.bind(t, e, function(t) {
          var e = t.target || t.srcElement,
            i = (function(t) {
              t = { parentNode: t };
              var e = document;
              for (; (t = t.parentNode) && t !== document; ) {
                if ('a' === t.tagName.toLowerCase()) return t;
                if (t === e) return;
              }
            })(e);
          i && n(t, i);
        });
      })(t, 'click', function(t, n) {
        (function(t, e) {
          if (
            1 !==
            (function(t) {
              return null === (t = t || window.event).which ? t.button : t.which;
            })(t)
          )
            return;
          if (t.metaKey || t.ctrlKey || t.shiftKey) return;
          if (t.defaultPrevented) return;
          if (e.target) return;
          if (null !== e.getAttribute('data-bypass')) return;
          var n = e.getAttribute('href');
          if (!n || 0 === n.length) return;
          if ('#' === n[0]) return;
          if (0 === n.indexOf('http://') || 0 === n.indexOf('https://')) return;
          if (0 === n.indexOf('mailto:')) return;
          if (0 === n.indexOf('javascript:')) return;
          return !0;
        })(t, n) && e(t, n);
      });
      return function() {
        !(function(t, e, n) {
          E.unbind(t, e, n);
        })(t, 'click', n);
      };
    }
    function L(t, e) {
      if (((e = e || {}), !t)) return function() {};
      if (!0 !== t) return t;
      var n = e.error ? console.error : console.info;
      return function() {
        n.apply(console, arguments);
      };
    }
    var M = {
      parse: function(t) {
        return t.split('&').reduce(function(t, e) {
          var n = e.split('=');
          return (t[n[0]] = decodeURIComponent(n[1])), t;
        }, {});
      },
      stringify: function(t) {
        return Object.keys(t)
          .reduce(function(e, n) {
            return void 0 !== t[n] && e.push(n + '=' + encodeURIComponent(t[n])), e;
          }, [])
          .join('&');
      },
    };
    function V(t) {
      (this.nextId = 1),
        (this.state = {}),
        (this.middleware = []),
        (this.options = d({ location: 'browser', interceptLinks: !0, logError: !0, qs: M }, t)),
        (this.log = L(this.options.log)),
        (this.logError = L(this.options.logError, { error: !0 }));
    }
    (V.prototype.use = function(t) {
      var e = 'function' == typeof t ? { next: t } : t;
      return this.middleware.push(e), this;
    }),
      (V.prototype.map = function(t) {
        this.routes = g(t);
        var e = (this.matchers = []),
          n = {},
          i = {};
        return (
          (function t(e, n, i) {
            e.routes.forEach(function(e) {
              i(n.concat(e)), e.routes.length && t(e, n.concat(e), i);
            });
          })({ routes: this.routes }, [], function(t) {
            var r = t.reduce(function(t, e) {
              return ('/' === e.path[0] ? e.path : t + '/' + e.path).replace(/\/$/, '');
            }, '');
            '' === r && (r = '/');
            var o = t[t.length - 1];
            if (o.options.abstract) i[r] = o.name;
            else {
              if ((e.push({ routes: t, name: o.name, path: r }), n[r]))
                throw new Error(
                  'Routes ' + n[r] + ' and ' + o.name + " have the same url path '" + r + "'",
                );
              n[r] = o.name;
            }
          }),
          Object.keys(i).forEach(function(t) {
            var r = void 0;
            n[t] &&
              (e.some(function(e) {
                if (e.path === t) return (r = e), !0;
              }),
              e.push({ routes: r.routes, name: i[t], path: t }));
          }),
          this
        );
      }),
      (V.prototype.listen = function(t) {
        var e = this,
          n = (this.location = this.createLocation(t || ''));
        return (
          n.onChange(function(t) {
            var n = e.state.path;
            e.dispatch(t).catch(function(t) {
              return t && t.type === k && e.location.replaceURL(n, { trigger: !1 }), t;
            });
          }),
          this.options.interceptLinks && n.usesPushState() && this.interceptLinks(),
          this.dispatch(n.getURL())
        );
      }),
      (V.prototype.transitionTo = function() {
        for (var t = arguments.length, e = Array(t), n = 0; n < t; n++) e[n] = arguments[n];
        return this.state.activeTransition
          ? this.replaceWith.apply(this, e)
          : this.doTransition('setURL', e);
      }),
      (V.prototype.replaceWith = function() {
        for (var t = arguments.length, e = Array(t), n = 0; n < t; n++) e[n] = arguments[n];
        return this.doTransition('replaceURL', e);
      }),
      (V.prototype.generate = function(t, e, n) {
        p(this.location, 'call .listen() before using .generate()');
        var i = void 0;
        if (
          ((n = n || {}),
          this.matchers.forEach(function(e) {
            e.name === t && (i = e);
          }),
          !i)
        )
          throw new Error('No route is named ' + t);
        var r = (function(t, e, n) {
          var i = t.stringify(n, { indices: !1 });
          return i ? w(e) + '?' + i : e;
        })(
          this.options.qs,
          (function(t, e) {
            return (
              (e = e || {}),
              t.replace(m, function(n, i) {
                var r = i.replace(v, ''),
                  o = i.slice(-1);
                if ('?' === o || '*' === o) {
                  if (null == e[r]) return '';
                } else p(null != e[r], "Missing '%s' parameter for path '%s'", r, t);
                var s = encodeURIComponent(e[r]);
                return ('*' !== o && '+' !== o) || (s = s.replace('%2F', '/')), s;
              })
            );
          })(i.path, e),
          n,
        );
        return this.location.formatURL(r);
      }),
      (V.prototype.destroy = function() {
        this.location && this.location.destroy && this.location.destroy(),
          this.disposeIntercept && this.disposeIntercept(),
          this.state.activeTransition && this.state.activeTransition.cancel(),
          (this.state = {});
      }),
      (V.prototype.isActive = function(t, e, n) {
        (e = e || {}), (n = n || {});
        var i = this.state.routes || [],
          r = this.state.params || {},
          o = this.state.query || {},
          s = i.some(function(e) {
            return e.name === t;
          });
        return (s =
          (s =
            s &&
            Object.keys(e).every(function(t) {
              return r[t] === e[t];
            })) &&
          Object.keys(n).every(function(t) {
            return o[t] === n[t];
          }));
      }),
      (V.prototype.doTransition = function(t, e) {
        var n = this,
          i = this.location.getURL(),
          r = e[0];
        '/' !== r[0] && (r = (r = this.generate.apply(this, e)).replace(/^#/, '/')),
          this.options.pushState && (r = this.location.removeRoot(r));
        var o = this.dispatch(r);
        return (
          o.catch(function(t) {
            return t && t.type === k && n.location.replaceURL(i, { trigger: !1 }), t;
          }),
          this.location[t](r, { trigger: !1 }),
          o
        );
      }),
      (V.prototype.match = function(t) {
        var e = void 0,
          n = [],
          i = w((t = (t || '').replace(/\/$/, '') || '/')),
          r = this.options.qs;
        return (
          this.matchers.some(function(t) {
            if (
              (e = (function(t, e) {
                var n = b(t),
                  i = n.matcher,
                  r = n.paramNames,
                  o = e.match(i);
                if (!o) return null;
                var s = {};
                return (
                  r.forEach(function(t, e) {
                    s[t] = o[e + 1] && decodeURIComponent(o[e + 1]);
                  }),
                  s
                );
              })(t.path, i))
            )
              return (n = t.routes), !0;
          }),
          {
            routes: n.map(function(t) {
              return {
                name: t.name,
                path: t.path,
                params: h(e, ((n = t.path), b(n).paramNames)),
                options: c(t.options),
              };
              var n;
            }),
            params: e || {},
            pathname: i,
            query:
              (function(t, e) {
                var n = e.match(y);
                return n && t.parse(n[1]);
              })(r, t) || {},
          }
        );
      }),
      (V.prototype.dispatch = function(t) {
        var e = this.match(t),
          n = e.query,
          i = e.pathname,
          r = this.state.activeTransition;
        if (r && r.pathname === i && f(r.query, n)) return r;
        if (r) {
          var o = new Error(I);
          (o.type = I), (o.nextPath = t), r.cancel(o);
        }
        if (!r && this.state.pathname === i && f(this.state.query, n))
          return R({ id: this.nextId++, path: t, match: e, noop: !0, router: this });
        var s = R({ id: this.nextId++, path: t, match: e, router: this });
        return (this.state.activeTransition = s), s;
      }),
      (V.prototype.createLocation = function(t) {
        var e,
          n = this.options.location;
        if (((e = n), '[object String]' !== a.call(e))) return n;
        if ('browser' === n) return new O(h(this.options, ['pushState', 'root']));
        if ('memory' === n) return new D({ path: t });
        throw new Error('Location can be `browser`, `memory` or a custom implementation');
      }),
      (V.prototype.interceptLinks = function() {
        var t = this,
          e =
            'function' == typeof this.options.interceptLinks
              ? this.options.interceptLinks
              : function(t, e, n) {
                  t.preventDefault(), n.transitionTo(n.location.removeRoot(e.getAttribute('href')));
                };
        this.disposeIntercept = P(function(n, i) {
          return e(n, i, t);
        });
      });
    var j = V,
      H = n(0),
      F = n.n(H),
      q = n(1),
      B = n(5),
      U = n.n(B);
    function W(t, e) {
      var n = t.indexOf(e);
      this.parentRoutes = t.slice(0, n);
    }
    n.d(e, 'a', function() {
      return it;
    }),
      n.d(e, 'c', function() {
        return ut;
      }),
      n.d(e, 'b', function() {
        return G;
      }),
      (W.prototype.trigger = function() {
        for (var t = this.parentRoutes, e = t.length - 1; e >= 0; e--) {
          var n = t[e]._contextChannel;
          n && n.trigger.apply(n, arguments);
        }
      }),
      (W.prototype.request = function(t) {
        for (var e = this.parentRoutes, n = e.length - 1; n >= 0; n--) {
          var i = e[n]._contextChannel;
          if (i && i._requests[t]) return i.request.apply(i, arguments);
        }
      });
    var $ = Object.create(null),
      z = r.a.channel('router'),
      K = void 0;
    function G(t, e) {
      if (K) throw new Error('Instance of router already created');
      j.call(this, t),
        this.middleware.push(nt),
        e &&
          (e instanceof q.Region
            ? (this.rootRegion = e)
            : (this.rootRegion = new q.Region({ el: e }))),
        (K = this);
    }
    function Q(t, e, n) {
      var i = F.a.extend({}, e.routeOptions, F.a.pick(e, ['viewClass', 'viewOptions']));
      if ((!t && i.viewClass && (t = it), t))
        return t.__esModule && (t = t.default), new t(i, K, n);
    }
    function Y(t, e, n) {
      var i = { name: t.name, path: t.path, options: F.a.clone(t.options) },
        r = (function(t, e, n, i) {
          var r = t.routeClass;
          return (
            r ||
              i
                .slice(0, n)
                .reverse()
                .map(function(t) {
                  return $[t.name];
                })
                .some(function(t) {
                  var n = F.a.result(t, 'childRoutes');
                  return (r = n && n[e]);
                }),
            r
          );
        })(t.options, t.name, e, n);
      return !F.a.isFunction(r) || r.prototype instanceof it
        ? Q(r, t.options, i)
        : ((r = r.call(t)),
          Promise.resolve(r).then(function(e) {
            return e && Q(e, t.options, i);
          }));
    }
    function X(t, e, n) {
      (e.length ? e : t.slice(-1))
        .reduce(function(t, e) {
          return (
            e.viewClass &&
              (t.length && !1 === t[t.length - 1].$config.options.outlet && t.pop(), t.push(e)),
            t
          );
        }, [])
        .forEach(function(e) {
          var i = (function(t, e) {
            for (var n = void 0, i = void 0, r = t.indexOf(e) - 1; r >= 0; ) {
              if ((i = t[r]).view && !1 !== i.$config.options.outlet) {
                if ((n = i.getOutlet())) return n;
                throw new Error('No outlet region defined in ' + i.$config.name + ' route');
              }
              r--;
            }
            return K.rootRegion;
          })(t, e);
          e.renderView(i, n);
        });
    }
    (G.prototype = Object.create(j.prototype)),
      (G.prototype.constructor = G),
      (G.prototype.use = function(t) {
        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          n = 'function' == typeof t ? { next: t } : t;
        return (
          e.before
            ? this.middleware.splice(this.middleware.indexOf(nt), 0, n)
            : this.middleware.push(n),
          this
        );
      }),
      (G.prototype.destroy = function() {
        (K = null), ($ = Object.create(null)), j.prototype.destroy.call(this);
      }),
      z.reply('transitionTo', function() {
        return K.transitionTo.apply(K, arguments);
      }),
      z.reply('isActive', function() {
        return K.isActive.apply(K, arguments);
      }),
      z.reply('generate', function() {
        return K.generate.apply(K, arguments);
      }),
      z.reply('goBack', function() {
        history.back();
      });
    var J = Promise.resolve();
    function Z(t, e, n) {
      return e.reduce(function(e, i) {
        return (
          z.trigger('before:' + n, t, i),
          e.then(function() {
            if (!t.isCancelled)
              return Promise.resolve(i[n](t)).then(function() {
                t.isCancelled || z.trigger(n, t, i);
              });
          })
        );
      }, J);
    }
    function tt(t) {
      return this.activating && -1 !== this.activating.indexOf(t);
    }
    function et(t) {
      return this.mnRoutes && this.mnRoutes.indexOf(t) === this.mnRoutes.length - 1;
    }
    var nt = {
        next: function(t) {
          if (
            ((t.isActivating = tt),
            (t.isTarget = et),
            z.trigger('before:transition', t),
            !t.isCancelled)
          ) {
            var e = t.prev.routes,
              n = (function(t, e) {
                var n = void 0,
                  i = void 0,
                  r = void 0,
                  o = Math.max(t.length, e.length);
                for (
                  n = 0;
                  n < o &&
                  ((i = t[n]),
                  (r = e[n]),
                  i && r && i.name === r.name && F.a.isEqual(i.params, r.params));
                  n++
                );
                return n;
              })(e, t.routes),
              i = [],
              r = void 0,
              o = void 0;
            for (r = e.length - 1; r >= n; r--) (o = $[e[r].name]) && i.push(o);
            var s = Z(t, i, 'deactivate'),
              a = (t.mnRoutes = []),
              l = void 0;
            return (
              (s = (s = s.then(function() {
                return t.routes.reduce(function(t, e, n, i) {
                  return t.then(function(t) {
                    var r = $[e.name];
                    return r
                      ? (t.push(r), t)
                      : ((r = Y(e, n, i)),
                        Promise.resolve(r).then(function(n) {
                          if (!n)
                            throw new Error(
                              'Unable to create route ' +
                                e.name +
                                ': routeClass or viewClass must be defined',
                            );
                          return ($[e.name] = n), t.push(n), t;
                        }));
                  });
                }, Promise.resolve(a));
              })).then(function() {
                return (l = t.activating = a.slice(n)), Z(t, l, 'activate');
              })).catch(function() {}),
              s.then(function() {
                if (!t.isCancelled) {
                  var e = a.reduce(function(e, n) {
                    var i = e;
                    return F.a.isFunction(n.load)
                      ? e
                        ? e
                            .then(function() {
                              return Promise.resolve(n.load(t));
                            })
                            .catch(function() {
                              return Promise.resolve(n.load(t));
                            })
                        : Promise.resolve(n.load(t))
                      : i;
                  }, void 0);
                  if (e)
                    return new Promise(function(n) {
                      e.then(function() {
                        X(a, l, t), n();
                      }).catch(function() {
                        X(a, l, t), n();
                      });
                    });
                  X(a, l, t);
                }
              })
            );
          }
        },
        done: function(t) {
          (K.state.mnRoutes = t.mnRoutes), z.trigger('transition', t);
        },
        cancel: function(t, e) {
          'TransitionRedirected' !== e.type && z.trigger('transition:abort', t, e);
        },
        error: function(t, e) {
          z.trigger('transition:abort', t, e), z.trigger('transition:error', t, e);
        },
      },
      it = q.MnObject.extend({
        constructor: function(t, e, n) {
          this.mergeOptions(t, ['viewClass', 'viewOptions']),
            (this.$router = e),
            (this.$config = n),
            q.MnObject.call(this, t),
            this._bindContext();
        },
        cidPrefix: 'rou',
        activate: function() {},
        deactivate: function() {},
        renderView: function(t, e) {
          if (!this.view || !this.updateView(e)) {
            var n = this.viewClass || q.View,
              i = F.a.result(this, 'viewOptions', {});
            n.prototype instanceof q.View ||
              (F.a.isFunction(n) && (n = n.call(this)),
              n.prototype instanceof q.View || ((i = F.a.extend({}, n, i)), (n = q.View)));
            var r = new n(i);
            if (
              (this.listenToOnce(r, 'destroy', function() {
                this.view = void 0;
              }),
              t)
            )
              t.show(r);
            else if (!r.isRendered()) throw new Error('No root outlet region defined');
            (this.view = r),
              z.trigger('route:render', this),
              this.viewEvents && Object(q.bindEvents)(this, r, this.viewEvents);
          }
        },
        updateView: function() {},
        getContext: function() {
          var t = this.$router.state,
            e = (t.activeTransition || t).mnRoutes;
          return (
            e ||
              (e = t.routes.map(function(t) {
                return $[t.name];
              })),
            new W(e, this)
          );
        },
        getOutlet: function() {
          return this.view.getRegion('outlet');
        },
        _bindContext: function() {
          var t,
            e = F.a.result(this, 'contextRequests'),
            n = F.a.result(this, 'contextEvents');
          (e || n) &&
            ((this._contextChannel = t = new r.a.Channel('__routeContext_' + this.cid)),
            this.bindRequests(t, e),
            this.bindEvents(t, n));
        },
      });
    function rt(t, e) {
      t.forEach(function(t) {
        var n = t.attributeName;
        (0 !== n.indexOf('param-') && 0 !== n.indexOf('query-')) || at(t.target, e.link);
      });
    }
    var ot = { attributes: !0 };
    function st(t, e, n) {
      for (var i = t.attributes, r = 0; r < i.length; r++) {
        var o = i[r];
        if (0 === o.name.indexOf(e)) n[o.name.slice(e.length)] = o.value;
      }
      return n;
    }
    function at(t, e) {
      var n = t.getAttribute('route');
      if (n) {
        var i = st(t, 'param-', e.getDefaults(n, 'params', t)),
          r = st(t, 'query-', e.getDefaults(n, 'query', t)),
          o = z.request('generate', n, i, r),
          s = void 0;
        return (
          (s =
            'A' === t.tagName
              ? t
              : U()(t)
                  .find('a')
                  .eq(0)[0]) && s.setAttribute('href', o),
          s
        );
      }
    }
    function lt(t) {
      var e = t.options.rootEl,
        n = e ? e + ' [route]' : '[route]';
      t.view.$(n).each(function() {
        at(this, t) && t.attrObserver && t.attrObserver.observe(this, ot);
      });
    }
    var ut = q.Behavior.extend({
      events: { 'click [route]:not(a)': 'onLinkClick' },
      onInitialize: function(t) {
        this.listenTo(z, 'transition', this.onTransition),
          window.MutationObserver &&
            ((this.attrObserver = new window.MutationObserver(rt)),
            (this.attrObserver.link = this)),
          t.isRendered() && lt(this);
      },
      onTransition: function() {
        var t = this,
          e = t.options.rootEl,
          n = e ? e + ' [route]' : '[route]';
        t.$(n).each(function() {
          var e = U()(this),
            n = e.attr('route');
          if (n) {
            var i = st(this, 'param-', t.getDefaults(n, 'params', this)),
              r = st(this, 'query-', t.getDefaults(n, 'query', this)),
              o = this.hasAttribute('active-class') ? e.attr('active-class') : 'active';
            if (o) {
              var s = z.request('isActive', n, i, r);
              e.toggleClass(o, s);
            }
          }
        });
      },
      onLinkClick: function(t) {
        var e = t.currentTarget;
        if (!this.$(e).find('a').length) {
          var n = e.getAttribute('route');
          if (n) {
            var i = st(e, 'param-', this.getDefaults(n, 'params', e)),
              r = st(e, 'query-', this.getDefaults(n, 'query', e));
            z.request('transitionTo', n, i, r);
          }
        }
      },
      onRender: function() {
        lt(this);
      },
      onDestroy: function() {
        this.stopListening(z);
      },
      getDefaults: function(t, e, n) {
        var i = this.options.defaults;
        F.a.isFunction(i) && (i = i.call(this.view));
        var r = i && i[t],
          o = r && r[e];
        return F.a.isFunction(o) && (o = o.call(this.view, n)), F.a.clone(o) || {};
      },
      attrObserver: void 0,
    });
  },
  function(t, e, n) {
    t.exports = (function(t, e) {
      'use strict';
      (t = 'default' in t ? t.default : t), (e = 'default' in e ? e.default : e);
      var n =
          'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
            ? function(t) {
                return typeof t;
              }
            : function(t) {
                return t && 'function' == typeof Symbol && t.constructor === Symbol
                  ? 'symbol'
                  : typeof t;
              },
        i = e.Radio,
        r = (e.Radio = {});
      (r.VERSION = '2.0.0'),
        (r.noConflict = function() {
          return (e.Radio = i), this;
        }),
        (r.DEBUG = !1),
        (r._debugText = function(t, e, n) {
          return t + (n ? ' on the ' + n + ' channel' : '') + ': "' + e + '"';
        }),
        (r.debugLog = function(t, e, n) {
          r.DEBUG && console && console.warn && console.warn(r._debugText(t, e, n));
        });
      var o = /\s+/;
      function s(t, e, n, i) {
        var r = t[e];
        if (!((n && n !== r.callback && n !== r.callback._callback) || (i && i !== r.context)))
          return delete t[e], !0;
      }
      (r._eventsApi = function(e, i, r, s) {
        if (!r) return !1;
        var a = {};
        if ('object' === (void 0 === r ? 'undefined' : n(r))) {
          for (var l in r) {
            var u = e[i].apply(e, [l, r[l]].concat(s));
            o.test(l) ? t.extend(a, u) : (a[l] = u);
          }
          return a;
        }
        if (o.test(r)) {
          for (var c = r.split(o), h = 0, f = c.length; h < f; h++)
            a[c[h]] = e[i].apply(e, [c[h]].concat(s));
          return a;
        }
        return !1;
      }),
        (r._callHandler = function(t, e, n) {
          var i = n[0],
            r = n[1],
            o = n[2];
          switch (n.length) {
            case 0:
              return t.call(e);
            case 1:
              return t.call(e, i);
            case 2:
              return t.call(e, i, r);
            case 3:
              return t.call(e, i, r, o);
            default:
              return t.apply(e, n);
          }
        });
      var a,
        l,
        u = {};
      function c(e) {
        return u[e] || (u[e] = t.bind(r.log, r, e));
      }
      function h(e) {
        return t.isFunction(e)
          ? e
          : function() {
              return e;
            };
      }
      t.extend(r, {
        log: function(e, n) {
          if ('undefined' != typeof console) {
            var i = t.toArray(arguments).slice(2);
            console.log('[' + e + '] "' + n + '"', i);
          }
        },
        tuneIn: function(t) {
          var e = r.channel(t);
          return (e._tunedIn = !0), e.on('all', c(t)), this;
        },
        tuneOut: function(t) {
          var e = r.channel(t);
          return (e._tunedIn = !1), e.off('all', c(t)), delete u[t], this;
        },
      }),
        (r.Requests = {
          request: function(e) {
            var n = t.toArray(arguments).slice(1),
              i = r._eventsApi(this, 'request', e, n);
            if (i) return i;
            var o = this.channelName,
              s = this._requests;
            if (
              (o && this._tunedIn && r.log.apply(this, [o, e].concat(n)), s && (s[e] || s.default))
            ) {
              var a = s[e] || s.default;
              return (n = s[e] ? n : arguments), r._callHandler(a.callback, a.context, n);
            }
            r.debugLog('An unhandled request was fired', e, o);
          },
          reply: function(t, e, n) {
            return r._eventsApi(this, 'reply', t, [e, n])
              ? this
              : (this._requests || (this._requests = {}),
                this._requests[t] && r.debugLog('A request was overwritten', t, this.channelName),
                (this._requests[t] = { callback: h(e), context: n || this }),
                this);
          },
          replyOnce: function(e, n, i) {
            if (r._eventsApi(this, 'replyOnce', e, [n, i])) return this;
            var o = this,
              s = t.once(function() {
                return o.stopReplying(e), h(n).apply(this, arguments);
              });
            return this.reply(e, s, i);
          },
          stopReplying: function(e, n, i) {
            return r._eventsApi(this, 'stopReplying', e)
              ? this
              : (e || n || i
                  ? (function(e, n, i, r) {
                      e || (e = {});
                      for (var o = n ? [n] : t.keys(e), a = !1, l = 0, u = o.length; l < u; l++)
                        (n = o[l]), e[n] && s(e, n, i, r) && (a = !0);
                      return a;
                    })(this._requests, e, n, i) ||
                    r.debugLog('Attempted to remove the unregistered request', e, this.channelName)
                  : delete this._requests,
                this);
          },
        }),
        (r._channels = {}),
        (r.channel = function(t) {
          if (!t) throw new Error('You must provide a name for the channel.');
          return r._channels[t] ? r._channels[t] : (r._channels[t] = new r.Channel(t));
        }),
        (r.Channel = function(t) {
          this.channelName = t;
        }),
        t.extend(r.Channel.prototype, e.Events, r.Requests, {
          reset: function() {
            return this.off(), this.stopListening(), this.stopReplying(), this;
          },
        });
      var f = [e.Events, r.Requests];
      return (
        t.each(f, function(e) {
          t.each(e, function(e, n) {
            r[n] = function(e) {
              return (l = t.toArray(arguments).slice(1)), (a = this.channel(e))[n].apply(a, l);
            };
          });
        }),
        (r.reset = function(e) {
          var n = e ? [this._channels[e]] : this._channels;
          t.each(n, function(t) {
            t.reset();
          });
        }),
        r
      );
    })(n(0), n(2));
  },
  function(t, e, n) {
    var i;
    /*!
     * jQuery JavaScript Library v3.3.1
     * https://jquery.com/
     *
     * Includes Sizzle.js
     * https://sizzlejs.com/
     *
     * Copyright JS Foundation and other contributors
     * Released under the MIT license
     * https://jquery.org/license
     *
     * Date: 2018-01-20T17:24Z
     */
    /*!
     * jQuery JavaScript Library v3.3.1
     * https://jquery.com/
     *
     * Includes Sizzle.js
     * https://sizzlejs.com/
     *
     * Copyright JS Foundation and other contributors
     * Released under the MIT license
     * https://jquery.org/license
     *
     * Date: 2018-01-20T17:24Z
     */
    !(function(e, n) {
      'use strict';
      'object' == typeof t && 'object' == typeof t.exports
        ? (t.exports = e.document
            ? n(e, !0)
            : function(t) {
                if (!t.document) throw new Error('jQuery requires a window with a document');
                return n(t);
              })
        : n(e);
    })('undefined' != typeof window ? window : this, function(n, r) {
      'use strict';
      var o = [],
        s = n.document,
        a = Object.getPrototypeOf,
        l = o.slice,
        u = o.concat,
        c = o.push,
        h = o.indexOf,
        f = {},
        d = f.toString,
        p = f.hasOwnProperty,
        g = p.toString,
        m = g.call(Object),
        v = {},
        y = function(t) {
          return 'function' == typeof t && 'number' != typeof t.nodeType;
        },
        _ = function(t) {
          return null != t && t === t.window;
        },
        b = { type: !0, src: !0, noModule: !0 };
      function w(t, e, n) {
        var i,
          r = (e = e || s).createElement('script');
        if (((r.text = t), n)) for (i in b) n[i] && (r[i] = n[i]);
        e.head.appendChild(r).parentNode.removeChild(r);
      }
      function E(t) {
        return null == t
          ? t + ''
          : 'object' == typeof t || 'function' == typeof t
          ? f[d.call(t)] || 'object'
          : typeof t;
      }
      var x = function(t, e) {
          return new x.fn.init(t, e);
        },
        T = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
      function C(t) {
        var e = !!t && 'length' in t && t.length,
          n = E(t);
        return (
          !y(t) &&
          !_(t) &&
          ('array' === n || 0 === e || ('number' == typeof e && e > 0 && e - 1 in t))
        );
      }
      (x.fn = x.prototype = {
        jquery: '3.3.1',
        constructor: x,
        length: 0,
        toArray: function() {
          return l.call(this);
        },
        get: function(t) {
          return null == t ? l.call(this) : t < 0 ? this[t + this.length] : this[t];
        },
        pushStack: function(t) {
          var e = x.merge(this.constructor(), t);
          return (e.prevObject = this), e;
        },
        each: function(t) {
          return x.each(this, t);
        },
        map: function(t) {
          return this.pushStack(
            x.map(this, function(e, n) {
              return t.call(e, n, e);
            }),
          );
        },
        slice: function() {
          return this.pushStack(l.apply(this, arguments));
        },
        first: function() {
          return this.eq(0);
        },
        last: function() {
          return this.eq(-1);
        },
        eq: function(t) {
          var e = this.length,
            n = +t + (t < 0 ? e : 0);
          return this.pushStack(n >= 0 && n < e ? [this[n]] : []);
        },
        end: function() {
          return this.prevObject || this.constructor();
        },
        push: c,
        sort: o.sort,
        splice: o.splice,
      }),
        (x.extend = x.fn.extend = function() {
          var t,
            e,
            n,
            i,
            r,
            o,
            s = arguments[0] || {},
            a = 1,
            l = arguments.length,
            u = !1;
          for (
            'boolean' == typeof s && ((u = s), (s = arguments[a] || {}), a++),
              'object' == typeof s || y(s) || (s = {}),
              a === l && ((s = this), a--);
            a < l;
            a++
          )
            if (null != (t = arguments[a]))
              for (e in t)
                (n = s[e]),
                  s !== (i = t[e]) &&
                    (u && i && (x.isPlainObject(i) || (r = Array.isArray(i)))
                      ? (r
                          ? ((r = !1), (o = n && Array.isArray(n) ? n : []))
                          : (o = n && x.isPlainObject(n) ? n : {}),
                        (s[e] = x.extend(u, o, i)))
                      : void 0 !== i && (s[e] = i));
          return s;
        }),
        x.extend({
          expando: 'jQuery' + ('3.3.1' + Math.random()).replace(/\D/g, ''),
          isReady: !0,
          error: function(t) {
            throw new Error(t);
          },
          noop: function() {},
          isPlainObject: function(t) {
            var e, n;
            return (
              !(!t || '[object Object]' !== d.call(t)) &&
              (!(e = a(t)) ||
                ('function' == typeof (n = p.call(e, 'constructor') && e.constructor) &&
                  g.call(n) === m))
            );
          },
          isEmptyObject: function(t) {
            var e;
            for (e in t) return !1;
            return !0;
          },
          globalEval: function(t) {
            w(t);
          },
          each: function(t, e) {
            var n,
              i = 0;
            if (C(t)) for (n = t.length; i < n && !1 !== e.call(t[i], i, t[i]); i++);
            else for (i in t) if (!1 === e.call(t[i], i, t[i])) break;
            return t;
          },
          trim: function(t) {
            return null == t ? '' : (t + '').replace(T, '');
          },
          makeArray: function(t, e) {
            var n = e || [];
            return (
              null != t &&
                (C(Object(t)) ? x.merge(n, 'string' == typeof t ? [t] : t) : c.call(n, t)),
              n
            );
          },
          inArray: function(t, e, n) {
            return null == e ? -1 : h.call(e, t, n);
          },
          merge: function(t, e) {
            for (var n = +e.length, i = 0, r = t.length; i < n; i++) t[r++] = e[i];
            return (t.length = r), t;
          },
          grep: function(t, e, n) {
            for (var i = [], r = 0, o = t.length, s = !n; r < o; r++)
              !e(t[r], r) !== s && i.push(t[r]);
            return i;
          },
          map: function(t, e, n) {
            var i,
              r,
              o = 0,
              s = [];
            if (C(t)) for (i = t.length; o < i; o++) null != (r = e(t[o], o, n)) && s.push(r);
            else for (o in t) null != (r = e(t[o], o, n)) && s.push(r);
            return u.apply([], s);
          },
          guid: 1,
          support: v,
        }),
        'function' == typeof Symbol && (x.fn[Symbol.iterator] = o[Symbol.iterator]),
        x.each(
          'Boolean Number String Function Array Date RegExp Object Error Symbol'.split(' '),
          function(t, e) {
            f['[object ' + e + ']'] = e.toLowerCase();
          },
        );
      var S =
        /*!
         * Sizzle CSS Selector Engine v2.3.3
         * https://sizzlejs.com/
         *
         * Copyright jQuery Foundation and other contributors
         * Released under the MIT license
         * http://jquery.org/license
         *
         * Date: 2016-08-08
         */
        (function(t) {
          var e,
            n,
            i,
            r,
            o,
            s,
            a,
            l,
            u,
            c,
            h,
            f,
            d,
            p,
            g,
            m,
            v,
            y,
            _,
            b = 'sizzle' + 1 * new Date(),
            w = t.document,
            E = 0,
            x = 0,
            T = st(),
            C = st(),
            S = st(),
            A = function(t, e) {
              return t === e && (h = !0), 0;
            },
            O = {}.hasOwnProperty,
            D = [],
            I = D.pop,
            k = D.push,
            N = D.push,
            R = D.slice,
            P = function(t, e) {
              for (var n = 0, i = t.length; n < i; n++) if (t[n] === e) return n;
              return -1;
            },
            L =
              'checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped',
            M = '[\\x20\\t\\r\\n\\f]',
            V = '(?:\\\\.|[\\w-]|[^\0-\\xa0])+',
            j =
              '\\[' +
              M +
              '*(' +
              V +
              ')(?:' +
              M +
              '*([*^$|!~]?=)' +
              M +
              '*(?:\'((?:\\\\.|[^\\\\\'])*)\'|"((?:\\\\.|[^\\\\"])*)"|(' +
              V +
              '))|)' +
              M +
              '*\\]',
            H =
              ':(' +
              V +
              ')(?:\\(((\'((?:\\\\.|[^\\\\\'])*)\'|"((?:\\\\.|[^\\\\"])*)")|((?:\\\\.|[^\\\\()[\\]]|' +
              j +
              ')*)|.*)\\)|)',
            F = new RegExp(M + '+', 'g'),
            q = new RegExp('^' + M + '+|((?:^|[^\\\\])(?:\\\\.)*)' + M + '+$', 'g'),
            B = new RegExp('^' + M + '*,' + M + '*'),
            U = new RegExp('^' + M + '*([>+~]|' + M + ')' + M + '*'),
            W = new RegExp('=' + M + '*([^\\]\'"]*?)' + M + '*\\]', 'g'),
            $ = new RegExp(H),
            z = new RegExp('^' + V + '$'),
            K = {
              ID: new RegExp('^#(' + V + ')'),
              CLASS: new RegExp('^\\.(' + V + ')'),
              TAG: new RegExp('^(' + V + '|[*])'),
              ATTR: new RegExp('^' + j),
              PSEUDO: new RegExp('^' + H),
              CHILD: new RegExp(
                '^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(' +
                  M +
                  '*(even|odd|(([+-]|)(\\d*)n|)' +
                  M +
                  '*(?:([+-]|)' +
                  M +
                  '*(\\d+)|))' +
                  M +
                  '*\\)|)',
                'i',
              ),
              bool: new RegExp('^(?:' + L + ')$', 'i'),
              needsContext: new RegExp(
                '^' +
                  M +
                  '*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(' +
                  M +
                  '*((?:-\\d)?\\d*)' +
                  M +
                  '*\\)|)(?=[^-]|$)',
                'i',
              ),
            },
            G = /^(?:input|select|textarea|button)$/i,
            Q = /^h\d$/i,
            Y = /^[^{]+\{\s*\[native \w/,
            X = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            J = /[+~]/,
            Z = new RegExp('\\\\([\\da-f]{1,6}' + M + '?|(' + M + ')|.)', 'ig'),
            tt = function(t, e, n) {
              var i = '0x' + e - 65536;
              return i != i || n
                ? e
                : i < 0
                ? String.fromCharCode(i + 65536)
                : String.fromCharCode((i >> 10) | 55296, (1023 & i) | 56320);
            },
            et = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
            nt = function(t, e) {
              return e
                ? '\0' === t
                  ? '�'
                  : t.slice(0, -1) + '\\' + t.charCodeAt(t.length - 1).toString(16) + ' '
                : '\\' + t;
            },
            it = function() {
              f();
            },
            rt = yt(
              function(t) {
                return !0 === t.disabled && ('form' in t || 'label' in t);
              },
              { dir: 'parentNode', next: 'legend' },
            );
          try {
            N.apply((D = R.call(w.childNodes)), w.childNodes), D[w.childNodes.length].nodeType;
          } catch (t) {
            N = {
              apply: D.length
                ? function(t, e) {
                    k.apply(t, R.call(e));
                  }
                : function(t, e) {
                    for (var n = t.length, i = 0; (t[n++] = e[i++]); );
                    t.length = n - 1;
                  },
            };
          }
          function ot(t, e, i, r) {
            var o,
              a,
              u,
              c,
              h,
              p,
              v,
              y = e && e.ownerDocument,
              E = e ? e.nodeType : 9;
            if (((i = i || []), 'string' != typeof t || !t || (1 !== E && 9 !== E && 11 !== E)))
              return i;
            if (!r && ((e ? e.ownerDocument || e : w) !== d && f(e), (e = e || d), g)) {
              if (11 !== E && (h = X.exec(t)))
                if ((o = h[1])) {
                  if (9 === E) {
                    if (!(u = e.getElementById(o))) return i;
                    if (u.id === o) return i.push(u), i;
                  } else if (y && (u = y.getElementById(o)) && _(e, u) && u.id === o)
                    return i.push(u), i;
                } else {
                  if (h[2]) return N.apply(i, e.getElementsByTagName(t)), i;
                  if ((o = h[3]) && n.getElementsByClassName && e.getElementsByClassName)
                    return N.apply(i, e.getElementsByClassName(o)), i;
                }
              if (n.qsa && !S[t + ' '] && (!m || !m.test(t))) {
                if (1 !== E) (y = e), (v = t);
                else if ('object' !== e.nodeName.toLowerCase()) {
                  for (
                    (c = e.getAttribute('id'))
                      ? (c = c.replace(et, nt))
                      : e.setAttribute('id', (c = b)),
                      a = (p = s(t)).length;
                    a--;

                  )
                    p[a] = '#' + c + ' ' + vt(p[a]);
                  (v = p.join(',')), (y = (J.test(t) && gt(e.parentNode)) || e);
                }
                if (v)
                  try {
                    return N.apply(i, y.querySelectorAll(v)), i;
                  } catch (t) {
                  } finally {
                    c === b && e.removeAttribute('id');
                  }
              }
            }
            return l(t.replace(q, '$1'), e, i, r);
          }
          function st() {
            var t = [];
            return function e(n, r) {
              return t.push(n + ' ') > i.cacheLength && delete e[t.shift()], (e[n + ' '] = r);
            };
          }
          function at(t) {
            return (t[b] = !0), t;
          }
          function lt(t) {
            var e = d.createElement('fieldset');
            try {
              return !!t(e);
            } catch (t) {
              return !1;
            } finally {
              e.parentNode && e.parentNode.removeChild(e), (e = null);
            }
          }
          function ut(t, e) {
            for (var n = t.split('|'), r = n.length; r--; ) i.attrHandle[n[r]] = e;
          }
          function ct(t, e) {
            var n = e && t,
              i = n && 1 === t.nodeType && 1 === e.nodeType && t.sourceIndex - e.sourceIndex;
            if (i) return i;
            if (n) for (; (n = n.nextSibling); ) if (n === e) return -1;
            return t ? 1 : -1;
          }
          function ht(t) {
            return function(e) {
              return 'input' === e.nodeName.toLowerCase() && e.type === t;
            };
          }
          function ft(t) {
            return function(e) {
              var n = e.nodeName.toLowerCase();
              return ('input' === n || 'button' === n) && e.type === t;
            };
          }
          function dt(t) {
            return function(e) {
              return 'form' in e
                ? e.parentNode && !1 === e.disabled
                  ? 'label' in e
                    ? 'label' in e.parentNode
                      ? e.parentNode.disabled === t
                      : e.disabled === t
                    : e.isDisabled === t || (e.isDisabled !== !t && rt(e) === t)
                  : e.disabled === t
                : 'label' in e && e.disabled === t;
            };
          }
          function pt(t) {
            return at(function(e) {
              return (
                (e = +e),
                at(function(n, i) {
                  for (var r, o = t([], n.length, e), s = o.length; s--; )
                    n[(r = o[s])] && (n[r] = !(i[r] = n[r]));
                })
              );
            });
          }
          function gt(t) {
            return t && void 0 !== t.getElementsByTagName && t;
          }
          for (e in ((n = ot.support = {}),
          (o = ot.isXML = function(t) {
            var e = t && (t.ownerDocument || t).documentElement;
            return !!e && 'HTML' !== e.nodeName;
          }),
          (f = ot.setDocument = function(t) {
            var e,
              r,
              s = t ? t.ownerDocument || t : w;
            return s !== d && 9 === s.nodeType && s.documentElement
              ? ((p = (d = s).documentElement),
                (g = !o(d)),
                w !== d &&
                  (r = d.defaultView) &&
                  r.top !== r &&
                  (r.addEventListener
                    ? r.addEventListener('unload', it, !1)
                    : r.attachEvent && r.attachEvent('onunload', it)),
                (n.attributes = lt(function(t) {
                  return (t.className = 'i'), !t.getAttribute('className');
                })),
                (n.getElementsByTagName = lt(function(t) {
                  return t.appendChild(d.createComment('')), !t.getElementsByTagName('*').length;
                })),
                (n.getElementsByClassName = Y.test(d.getElementsByClassName)),
                (n.getById = lt(function(t) {
                  return (
                    (p.appendChild(t).id = b),
                    !d.getElementsByName || !d.getElementsByName(b).length
                  );
                })),
                n.getById
                  ? ((i.filter.ID = function(t) {
                      var e = t.replace(Z, tt);
                      return function(t) {
                        return t.getAttribute('id') === e;
                      };
                    }),
                    (i.find.ID = function(t, e) {
                      if (void 0 !== e.getElementById && g) {
                        var n = e.getElementById(t);
                        return n ? [n] : [];
                      }
                    }))
                  : ((i.filter.ID = function(t) {
                      var e = t.replace(Z, tt);
                      return function(t) {
                        var n = void 0 !== t.getAttributeNode && t.getAttributeNode('id');
                        return n && n.value === e;
                      };
                    }),
                    (i.find.ID = function(t, e) {
                      if (void 0 !== e.getElementById && g) {
                        var n,
                          i,
                          r,
                          o = e.getElementById(t);
                        if (o) {
                          if ((n = o.getAttributeNode('id')) && n.value === t) return [o];
                          for (r = e.getElementsByName(t), i = 0; (o = r[i++]); )
                            if ((n = o.getAttributeNode('id')) && n.value === t) return [o];
                        }
                        return [];
                      }
                    })),
                (i.find.TAG = n.getElementsByTagName
                  ? function(t, e) {
                      return void 0 !== e.getElementsByTagName
                        ? e.getElementsByTagName(t)
                        : n.qsa
                        ? e.querySelectorAll(t)
                        : void 0;
                    }
                  : function(t, e) {
                      var n,
                        i = [],
                        r = 0,
                        o = e.getElementsByTagName(t);
                      if ('*' === t) {
                        for (; (n = o[r++]); ) 1 === n.nodeType && i.push(n);
                        return i;
                      }
                      return o;
                    }),
                (i.find.CLASS =
                  n.getElementsByClassName &&
                  function(t, e) {
                    if (void 0 !== e.getElementsByClassName && g)
                      return e.getElementsByClassName(t);
                  }),
                (v = []),
                (m = []),
                (n.qsa = Y.test(d.querySelectorAll)) &&
                  (lt(function(t) {
                    (p.appendChild(t).innerHTML =
                      "<a id='" +
                      b +
                      "'></a><select id='" +
                      b +
                      "-\r\\' msallowcapture=''><option selected=''></option></select>"),
                      t.querySelectorAll("[msallowcapture^='']").length &&
                        m.push('[*^$]=' + M + '*(?:\'\'|"")'),
                      t.querySelectorAll('[selected]').length ||
                        m.push('\\[' + M + '*(?:value|' + L + ')'),
                      t.querySelectorAll('[id~=' + b + '-]').length || m.push('~='),
                      t.querySelectorAll(':checked').length || m.push(':checked'),
                      t.querySelectorAll('a#' + b + '+*').length || m.push('.#.+[+~]');
                  }),
                  lt(function(t) {
                    t.innerHTML =
                      "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                    var e = d.createElement('input');
                    e.setAttribute('type', 'hidden'),
                      t.appendChild(e).setAttribute('name', 'D'),
                      t.querySelectorAll('[name=d]').length && m.push('name' + M + '*[*^$|!~]?='),
                      2 !== t.querySelectorAll(':enabled').length &&
                        m.push(':enabled', ':disabled'),
                      (p.appendChild(t).disabled = !0),
                      2 !== t.querySelectorAll(':disabled').length &&
                        m.push(':enabled', ':disabled'),
                      t.querySelectorAll('*,:x'),
                      m.push(',.*:');
                  })),
                (n.matchesSelector = Y.test(
                  (y =
                    p.matches ||
                    p.webkitMatchesSelector ||
                    p.mozMatchesSelector ||
                    p.oMatchesSelector ||
                    p.msMatchesSelector),
                )) &&
                  lt(function(t) {
                    (n.disconnectedMatch = y.call(t, '*')), y.call(t, "[s!='']:x"), v.push('!=', H);
                  }),
                (m = m.length && new RegExp(m.join('|'))),
                (v = v.length && new RegExp(v.join('|'))),
                (e = Y.test(p.compareDocumentPosition)),
                (_ =
                  e || Y.test(p.contains)
                    ? function(t, e) {
                        var n = 9 === t.nodeType ? t.documentElement : t,
                          i = e && e.parentNode;
                        return (
                          t === i ||
                          !(
                            !i ||
                            1 !== i.nodeType ||
                            !(n.contains
                              ? n.contains(i)
                              : t.compareDocumentPosition && 16 & t.compareDocumentPosition(i))
                          )
                        );
                      }
                    : function(t, e) {
                        if (e) for (; (e = e.parentNode); ) if (e === t) return !0;
                        return !1;
                      }),
                (A = e
                  ? function(t, e) {
                      if (t === e) return (h = !0), 0;
                      var i = !t.compareDocumentPosition - !e.compareDocumentPosition;
                      return (
                        i ||
                        (1 &
                          (i =
                            (t.ownerDocument || t) === (e.ownerDocument || e)
                              ? t.compareDocumentPosition(e)
                              : 1) ||
                        (!n.sortDetached && e.compareDocumentPosition(t) === i)
                          ? t === d || (t.ownerDocument === w && _(w, t))
                            ? -1
                            : e === d || (e.ownerDocument === w && _(w, e))
                            ? 1
                            : c
                            ? P(c, t) - P(c, e)
                            : 0
                          : 4 & i
                          ? -1
                          : 1)
                      );
                    }
                  : function(t, e) {
                      if (t === e) return (h = !0), 0;
                      var n,
                        i = 0,
                        r = t.parentNode,
                        o = e.parentNode,
                        s = [t],
                        a = [e];
                      if (!r || !o)
                        return t === d
                          ? -1
                          : e === d
                          ? 1
                          : r
                          ? -1
                          : o
                          ? 1
                          : c
                          ? P(c, t) - P(c, e)
                          : 0;
                      if (r === o) return ct(t, e);
                      for (n = t; (n = n.parentNode); ) s.unshift(n);
                      for (n = e; (n = n.parentNode); ) a.unshift(n);
                      for (; s[i] === a[i]; ) i++;
                      return i ? ct(s[i], a[i]) : s[i] === w ? -1 : a[i] === w ? 1 : 0;
                    }),
                d)
              : d;
          }),
          (ot.matches = function(t, e) {
            return ot(t, null, null, e);
          }),
          (ot.matchesSelector = function(t, e) {
            if (
              ((t.ownerDocument || t) !== d && f(t),
              (e = e.replace(W, "='$1']")),
              n.matchesSelector && g && !S[e + ' '] && (!v || !v.test(e)) && (!m || !m.test(e)))
            )
              try {
                var i = y.call(t, e);
                if (i || n.disconnectedMatch || (t.document && 11 !== t.document.nodeType))
                  return i;
              } catch (t) {}
            return ot(e, d, null, [t]).length > 0;
          }),
          (ot.contains = function(t, e) {
            return (t.ownerDocument || t) !== d && f(t), _(t, e);
          }),
          (ot.attr = function(t, e) {
            (t.ownerDocument || t) !== d && f(t);
            var r = i.attrHandle[e.toLowerCase()],
              o = r && O.call(i.attrHandle, e.toLowerCase()) ? r(t, e, !g) : void 0;
            return void 0 !== o
              ? o
              : n.attributes || !g
              ? t.getAttribute(e)
              : (o = t.getAttributeNode(e)) && o.specified
              ? o.value
              : null;
          }),
          (ot.escape = function(t) {
            return (t + '').replace(et, nt);
          }),
          (ot.error = function(t) {
            throw new Error('Syntax error, unrecognized expression: ' + t);
          }),
          (ot.uniqueSort = function(t) {
            var e,
              i = [],
              r = 0,
              o = 0;
            if (((h = !n.detectDuplicates), (c = !n.sortStable && t.slice(0)), t.sort(A), h)) {
              for (; (e = t[o++]); ) e === t[o] && (r = i.push(o));
              for (; r--; ) t.splice(i[r], 1);
            }
            return (c = null), t;
          }),
          (r = ot.getText = function(t) {
            var e,
              n = '',
              i = 0,
              o = t.nodeType;
            if (o) {
              if (1 === o || 9 === o || 11 === o) {
                if ('string' == typeof t.textContent) return t.textContent;
                for (t = t.firstChild; t; t = t.nextSibling) n += r(t);
              } else if (3 === o || 4 === o) return t.nodeValue;
            } else for (; (e = t[i++]); ) n += r(e);
            return n;
          }),
          ((i = ot.selectors = {
            cacheLength: 50,
            createPseudo: at,
            match: K,
            attrHandle: {},
            find: {},
            relative: {
              '>': { dir: 'parentNode', first: !0 },
              ' ': { dir: 'parentNode' },
              '+': { dir: 'previousSibling', first: !0 },
              '~': { dir: 'previousSibling' },
            },
            preFilter: {
              ATTR: function(t) {
                return (
                  (t[1] = t[1].replace(Z, tt)),
                  (t[3] = (t[3] || t[4] || t[5] || '').replace(Z, tt)),
                  '~=' === t[2] && (t[3] = ' ' + t[3] + ' '),
                  t.slice(0, 4)
                );
              },
              CHILD: function(t) {
                return (
                  (t[1] = t[1].toLowerCase()),
                  'nth' === t[1].slice(0, 3)
                    ? (t[3] || ot.error(t[0]),
                      (t[4] = +(t[4]
                        ? t[5] + (t[6] || 1)
                        : 2 * ('even' === t[3] || 'odd' === t[3]))),
                      (t[5] = +(t[7] + t[8] || 'odd' === t[3])))
                    : t[3] && ot.error(t[0]),
                  t
                );
              },
              PSEUDO: function(t) {
                var e,
                  n = !t[6] && t[2];
                return K.CHILD.test(t[0])
                  ? null
                  : (t[3]
                      ? (t[2] = t[4] || t[5] || '')
                      : n &&
                        $.test(n) &&
                        (e = s(n, !0)) &&
                        (e = n.indexOf(')', n.length - e) - n.length) &&
                        ((t[0] = t[0].slice(0, e)), (t[2] = n.slice(0, e))),
                    t.slice(0, 3));
              },
            },
            filter: {
              TAG: function(t) {
                var e = t.replace(Z, tt).toLowerCase();
                return '*' === t
                  ? function() {
                      return !0;
                    }
                  : function(t) {
                      return t.nodeName && t.nodeName.toLowerCase() === e;
                    };
              },
              CLASS: function(t) {
                var e = T[t + ' '];
                return (
                  e ||
                  ((e = new RegExp('(^|' + M + ')' + t + '(' + M + '|$)')) &&
                    T(t, function(t) {
                      return e.test(
                        ('string' == typeof t.className && t.className) ||
                          (void 0 !== t.getAttribute && t.getAttribute('class')) ||
                          '',
                      );
                    }))
                );
              },
              ATTR: function(t, e, n) {
                return function(i) {
                  var r = ot.attr(i, t);
                  return null == r
                    ? '!=' === e
                    : !e ||
                        ((r += ''),
                        '=' === e
                          ? r === n
                          : '!=' === e
                          ? r !== n
                          : '^=' === e
                          ? n && 0 === r.indexOf(n)
                          : '*=' === e
                          ? n && r.indexOf(n) > -1
                          : '$=' === e
                          ? n && r.slice(-n.length) === n
                          : '~=' === e
                          ? (' ' + r.replace(F, ' ') + ' ').indexOf(n) > -1
                          : '|=' === e && (r === n || r.slice(0, n.length + 1) === n + '-'));
                };
              },
              CHILD: function(t, e, n, i, r) {
                var o = 'nth' !== t.slice(0, 3),
                  s = 'last' !== t.slice(-4),
                  a = 'of-type' === e;
                return 1 === i && 0 === r
                  ? function(t) {
                      return !!t.parentNode;
                    }
                  : function(e, n, l) {
                      var u,
                        c,
                        h,
                        f,
                        d,
                        p,
                        g = o !== s ? 'nextSibling' : 'previousSibling',
                        m = e.parentNode,
                        v = a && e.nodeName.toLowerCase(),
                        y = !l && !a,
                        _ = !1;
                      if (m) {
                        if (o) {
                          for (; g; ) {
                            for (f = e; (f = f[g]); )
                              if (a ? f.nodeName.toLowerCase() === v : 1 === f.nodeType) return !1;
                            p = g = 'only' === t && !p && 'nextSibling';
                          }
                          return !0;
                        }
                        if (((p = [s ? m.firstChild : m.lastChild]), s && y)) {
                          for (
                            _ =
                              (d =
                                (u =
                                  (c =
                                    (h = (f = m)[b] || (f[b] = {}))[f.uniqueID] ||
                                    (h[f.uniqueID] = {}))[t] || [])[0] === E && u[1]) && u[2],
                              f = d && m.childNodes[d];
                            (f = (++d && f && f[g]) || (_ = d = 0) || p.pop());

                          )
                            if (1 === f.nodeType && ++_ && f === e) {
                              c[t] = [E, d, _];
                              break;
                            }
                        } else if (
                          (y &&
                            (_ = d =
                              (u =
                                (c =
                                  (h = (f = e)[b] || (f[b] = {}))[f.uniqueID] ||
                                  (h[f.uniqueID] = {}))[t] || [])[0] === E && u[1]),
                          !1 === _)
                        )
                          for (
                            ;
                            (f = (++d && f && f[g]) || (_ = d = 0) || p.pop()) &&
                            ((a ? f.nodeName.toLowerCase() !== v : 1 !== f.nodeType) ||
                              !++_ ||
                              (y &&
                                ((c =
                                  (h = f[b] || (f[b] = {}))[f.uniqueID] || (h[f.uniqueID] = {}))[
                                  t
                                ] = [E, _]),
                              f !== e));

                          );
                        return (_ -= r) === i || (_ % i == 0 && _ / i >= 0);
                      }
                    };
              },
              PSEUDO: function(t, e) {
                var n,
                  r =
                    i.pseudos[t] ||
                    i.setFilters[t.toLowerCase()] ||
                    ot.error('unsupported pseudo: ' + t);
                return r[b]
                  ? r(e)
                  : r.length > 1
                  ? ((n = [t, t, '', e]),
                    i.setFilters.hasOwnProperty(t.toLowerCase())
                      ? at(function(t, n) {
                          for (var i, o = r(t, e), s = o.length; s--; )
                            t[(i = P(t, o[s]))] = !(n[i] = o[s]);
                        })
                      : function(t) {
                          return r(t, 0, n);
                        })
                  : r;
              },
            },
            pseudos: {
              not: at(function(t) {
                var e = [],
                  n = [],
                  i = a(t.replace(q, '$1'));
                return i[b]
                  ? at(function(t, e, n, r) {
                      for (var o, s = i(t, null, r, []), a = t.length; a--; )
                        (o = s[a]) && (t[a] = !(e[a] = o));
                    })
                  : function(t, r, o) {
                      return (e[0] = t), i(e, null, o, n), (e[0] = null), !n.pop();
                    };
              }),
              has: at(function(t) {
                return function(e) {
                  return ot(t, e).length > 0;
                };
              }),
              contains: at(function(t) {
                return (
                  (t = t.replace(Z, tt)),
                  function(e) {
                    return (e.textContent || e.innerText || r(e)).indexOf(t) > -1;
                  }
                );
              }),
              lang: at(function(t) {
                return (
                  z.test(t || '') || ot.error('unsupported lang: ' + t),
                  (t = t.replace(Z, tt).toLowerCase()),
                  function(e) {
                    var n;
                    do {
                      if ((n = g ? e.lang : e.getAttribute('xml:lang') || e.getAttribute('lang')))
                        return (n = n.toLowerCase()) === t || 0 === n.indexOf(t + '-');
                    } while ((e = e.parentNode) && 1 === e.nodeType);
                    return !1;
                  }
                );
              }),
              target: function(e) {
                var n = t.location && t.location.hash;
                return n && n.slice(1) === e.id;
              },
              root: function(t) {
                return t === p;
              },
              focus: function(t) {
                return (
                  t === d.activeElement &&
                  (!d.hasFocus || d.hasFocus()) &&
                  !!(t.type || t.href || ~t.tabIndex)
                );
              },
              enabled: dt(!1),
              disabled: dt(!0),
              checked: function(t) {
                var e = t.nodeName.toLowerCase();
                return ('input' === e && !!t.checked) || ('option' === e && !!t.selected);
              },
              selected: function(t) {
                return t.parentNode && t.parentNode.selectedIndex, !0 === t.selected;
              },
              empty: function(t) {
                for (t = t.firstChild; t; t = t.nextSibling) if (t.nodeType < 6) return !1;
                return !0;
              },
              parent: function(t) {
                return !i.pseudos.empty(t);
              },
              header: function(t) {
                return Q.test(t.nodeName);
              },
              input: function(t) {
                return G.test(t.nodeName);
              },
              button: function(t) {
                var e = t.nodeName.toLowerCase();
                return ('input' === e && 'button' === t.type) || 'button' === e;
              },
              text: function(t) {
                var e;
                return (
                  'input' === t.nodeName.toLowerCase() &&
                  'text' === t.type &&
                  (null == (e = t.getAttribute('type')) || 'text' === e.toLowerCase())
                );
              },
              first: pt(function() {
                return [0];
              }),
              last: pt(function(t, e) {
                return [e - 1];
              }),
              eq: pt(function(t, e, n) {
                return [n < 0 ? n + e : n];
              }),
              even: pt(function(t, e) {
                for (var n = 0; n < e; n += 2) t.push(n);
                return t;
              }),
              odd: pt(function(t, e) {
                for (var n = 1; n < e; n += 2) t.push(n);
                return t;
              }),
              lt: pt(function(t, e, n) {
                for (var i = n < 0 ? n + e : n; --i >= 0; ) t.push(i);
                return t;
              }),
              gt: pt(function(t, e, n) {
                for (var i = n < 0 ? n + e : n; ++i < e; ) t.push(i);
                return t;
              }),
            },
          }).pseudos.nth = i.pseudos.eq),
          { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }))
            i.pseudos[e] = ht(e);
          for (e in { submit: !0, reset: !0 }) i.pseudos[e] = ft(e);
          function mt() {}
          function vt(t) {
            for (var e = 0, n = t.length, i = ''; e < n; e++) i += t[e].value;
            return i;
          }
          function yt(t, e, n) {
            var i = e.dir,
              r = e.next,
              o = r || i,
              s = n && 'parentNode' === o,
              a = x++;
            return e.first
              ? function(e, n, r) {
                  for (; (e = e[i]); ) if (1 === e.nodeType || s) return t(e, n, r);
                  return !1;
                }
              : function(e, n, l) {
                  var u,
                    c,
                    h,
                    f = [E, a];
                  if (l) {
                    for (; (e = e[i]); ) if ((1 === e.nodeType || s) && t(e, n, l)) return !0;
                  } else
                    for (; (e = e[i]); )
                      if (1 === e.nodeType || s)
                        if (
                          ((c = (h = e[b] || (e[b] = {}))[e.uniqueID] || (h[e.uniqueID] = {})),
                          r && r === e.nodeName.toLowerCase())
                        )
                          e = e[i] || e;
                        else {
                          if ((u = c[o]) && u[0] === E && u[1] === a) return (f[2] = u[2]);
                          if (((c[o] = f), (f[2] = t(e, n, l)))) return !0;
                        }
                  return !1;
                };
          }
          function _t(t) {
            return t.length > 1
              ? function(e, n, i) {
                  for (var r = t.length; r--; ) if (!t[r](e, n, i)) return !1;
                  return !0;
                }
              : t[0];
          }
          function bt(t, e, n, i, r) {
            for (var o, s = [], a = 0, l = t.length, u = null != e; a < l; a++)
              (o = t[a]) && ((n && !n(o, i, r)) || (s.push(o), u && e.push(a)));
            return s;
          }
          function wt(t, e, n, i, r, o) {
            return (
              i && !i[b] && (i = wt(i)),
              r && !r[b] && (r = wt(r, o)),
              at(function(o, s, a, l) {
                var u,
                  c,
                  h,
                  f = [],
                  d = [],
                  p = s.length,
                  g =
                    o ||
                    (function(t, e, n) {
                      for (var i = 0, r = e.length; i < r; i++) ot(t, e[i], n);
                      return n;
                    })(e || '*', a.nodeType ? [a] : a, []),
                  m = !t || (!o && e) ? g : bt(g, f, t, a, l),
                  v = n ? (r || (o ? t : p || i) ? [] : s) : m;
                if ((n && n(m, v, a, l), i))
                  for (u = bt(v, d), i(u, [], a, l), c = u.length; c--; )
                    (h = u[c]) && (v[d[c]] = !(m[d[c]] = h));
                if (o) {
                  if (r || t) {
                    if (r) {
                      for (u = [], c = v.length; c--; ) (h = v[c]) && u.push((m[c] = h));
                      r(null, (v = []), u, l);
                    }
                    for (c = v.length; c--; )
                      (h = v[c]) && (u = r ? P(o, h) : f[c]) > -1 && (o[u] = !(s[u] = h));
                  }
                } else (v = bt(v === s ? v.splice(p, v.length) : v)), r ? r(null, s, v, l) : N.apply(s, v);
              })
            );
          }
          function Et(t) {
            for (
              var e,
                n,
                r,
                o = t.length,
                s = i.relative[t[0].type],
                a = s || i.relative[' '],
                l = s ? 1 : 0,
                c = yt(
                  function(t) {
                    return t === e;
                  },
                  a,
                  !0,
                ),
                h = yt(
                  function(t) {
                    return P(e, t) > -1;
                  },
                  a,
                  !0,
                ),
                f = [
                  function(t, n, i) {
                    var r = (!s && (i || n !== u)) || ((e = n).nodeType ? c(t, n, i) : h(t, n, i));
                    return (e = null), r;
                  },
                ];
              l < o;
              l++
            )
              if ((n = i.relative[t[l].type])) f = [yt(_t(f), n)];
              else {
                if ((n = i.filter[t[l].type].apply(null, t[l].matches))[b]) {
                  for (r = ++l; r < o && !i.relative[t[r].type]; r++);
                  return wt(
                    l > 1 && _t(f),
                    l > 1 &&
                      vt(
                        t.slice(0, l - 1).concat({ value: ' ' === t[l - 2].type ? '*' : '' }),
                      ).replace(q, '$1'),
                    n,
                    l < r && Et(t.slice(l, r)),
                    r < o && Et((t = t.slice(r))),
                    r < o && vt(t),
                  );
                }
                f.push(n);
              }
            return _t(f);
          }
          return (
            (mt.prototype = i.filters = i.pseudos),
            (i.setFilters = new mt()),
            (s = ot.tokenize = function(t, e) {
              var n,
                r,
                o,
                s,
                a,
                l,
                u,
                c = C[t + ' '];
              if (c) return e ? 0 : c.slice(0);
              for (a = t, l = [], u = i.preFilter; a; ) {
                for (s in ((n && !(r = B.exec(a))) ||
                  (r && (a = a.slice(r[0].length) || a), l.push((o = []))),
                (n = !1),
                (r = U.exec(a)) &&
                  ((n = r.shift()),
                  o.push({ value: n, type: r[0].replace(q, ' ') }),
                  (a = a.slice(n.length))),
                i.filter))
                  !(r = K[s].exec(a)) ||
                    (u[s] && !(r = u[s](r))) ||
                    ((n = r.shift()),
                    o.push({ value: n, type: s, matches: r }),
                    (a = a.slice(n.length)));
                if (!n) break;
              }
              return e ? a.length : a ? ot.error(t) : C(t, l).slice(0);
            }),
            (a = ot.compile = function(t, e) {
              var n,
                r = [],
                o = [],
                a = S[t + ' '];
              if (!a) {
                for (e || (e = s(t)), n = e.length; n--; )
                  (a = Et(e[n]))[b] ? r.push(a) : o.push(a);
                (a = S(
                  t,
                  (function(t, e) {
                    var n = e.length > 0,
                      r = t.length > 0,
                      o = function(o, s, a, l, c) {
                        var h,
                          p,
                          m,
                          v = 0,
                          y = '0',
                          _ = o && [],
                          b = [],
                          w = u,
                          x = o || (r && i.find.TAG('*', c)),
                          T = (E += null == w ? 1 : Math.random() || 0.1),
                          C = x.length;
                        for (c && (u = s === d || s || c); y !== C && null != (h = x[y]); y++) {
                          if (r && h) {
                            for (
                              p = 0, s || h.ownerDocument === d || (f(h), (a = !g));
                              (m = t[p++]);

                            )
                              if (m(h, s || d, a)) {
                                l.push(h);
                                break;
                              }
                            c && (E = T);
                          }
                          n && ((h = !m && h) && v--, o && _.push(h));
                        }
                        if (((v += y), n && y !== v)) {
                          for (p = 0; (m = e[p++]); ) m(_, b, s, a);
                          if (o) {
                            if (v > 0) for (; y--; ) _[y] || b[y] || (b[y] = I.call(l));
                            b = bt(b);
                          }
                          N.apply(l, b),
                            c && !o && b.length > 0 && v + e.length > 1 && ot.uniqueSort(l);
                        }
                        return c && ((E = T), (u = w)), _;
                      };
                    return n ? at(o) : o;
                  })(o, r),
                )).selector = t;
              }
              return a;
            }),
            (l = ot.select = function(t, e, n, r) {
              var o,
                l,
                u,
                c,
                h,
                f = 'function' == typeof t && t,
                d = !r && s((t = f.selector || t));
              if (((n = n || []), 1 === d.length)) {
                if (
                  (l = d[0] = d[0].slice(0)).length > 2 &&
                  'ID' === (u = l[0]).type &&
                  9 === e.nodeType &&
                  g &&
                  i.relative[l[1].type]
                ) {
                  if (!(e = (i.find.ID(u.matches[0].replace(Z, tt), e) || [])[0])) return n;
                  f && (e = e.parentNode), (t = t.slice(l.shift().value.length));
                }
                for (
                  o = K.needsContext.test(t) ? 0 : l.length;
                  o-- && ((u = l[o]), !i.relative[(c = u.type)]);

                )
                  if (
                    (h = i.find[c]) &&
                    (r = h(
                      u.matches[0].replace(Z, tt),
                      (J.test(l[0].type) && gt(e.parentNode)) || e,
                    ))
                  ) {
                    if ((l.splice(o, 1), !(t = r.length && vt(l)))) return N.apply(n, r), n;
                    break;
                  }
              }
              return (f || a(t, d))(r, e, !g, n, !e || (J.test(t) && gt(e.parentNode)) || e), n;
            }),
            (n.sortStable =
              b
                .split('')
                .sort(A)
                .join('') === b),
            (n.detectDuplicates = !!h),
            f(),
            (n.sortDetached = lt(function(t) {
              return 1 & t.compareDocumentPosition(d.createElement('fieldset'));
            })),
            lt(function(t) {
              return (t.innerHTML = "<a href='#'></a>"), '#' === t.firstChild.getAttribute('href');
            }) ||
              ut('type|href|height|width', function(t, e, n) {
                if (!n) return t.getAttribute(e, 'type' === e.toLowerCase() ? 1 : 2);
              }),
            (n.attributes &&
              lt(function(t) {
                return (
                  (t.innerHTML = '<input/>'),
                  t.firstChild.setAttribute('value', ''),
                  '' === t.firstChild.getAttribute('value')
                );
              })) ||
              ut('value', function(t, e, n) {
                if (!n && 'input' === t.nodeName.toLowerCase()) return t.defaultValue;
              }),
            lt(function(t) {
              return null == t.getAttribute('disabled');
            }) ||
              ut(L, function(t, e, n) {
                var i;
                if (!n)
                  return !0 === t[e]
                    ? e.toLowerCase()
                    : (i = t.getAttributeNode(e)) && i.specified
                    ? i.value
                    : null;
              }),
            ot
          );
        })(n);
      (x.find = S),
        (x.expr = S.selectors),
        (x.expr[':'] = x.expr.pseudos),
        (x.uniqueSort = x.unique = S.uniqueSort),
        (x.text = S.getText),
        (x.isXMLDoc = S.isXML),
        (x.contains = S.contains),
        (x.escapeSelector = S.escape);
      var A = function(t, e, n) {
          for (var i = [], r = void 0 !== n; (t = t[e]) && 9 !== t.nodeType; )
            if (1 === t.nodeType) {
              if (r && x(t).is(n)) break;
              i.push(t);
            }
          return i;
        },
        O = function(t, e) {
          for (var n = []; t; t = t.nextSibling) 1 === t.nodeType && t !== e && n.push(t);
          return n;
        },
        D = x.expr.match.needsContext;
      function I(t, e) {
        return t.nodeName && t.nodeName.toLowerCase() === e.toLowerCase();
      }
      var k = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
      function N(t, e, n) {
        return y(e)
          ? x.grep(t, function(t, i) {
              return !!e.call(t, i, t) !== n;
            })
          : e.nodeType
          ? x.grep(t, function(t) {
              return (t === e) !== n;
            })
          : 'string' != typeof e
          ? x.grep(t, function(t) {
              return h.call(e, t) > -1 !== n;
            })
          : x.filter(e, t, n);
      }
      (x.filter = function(t, e, n) {
        var i = e[0];
        return (
          n && (t = ':not(' + t + ')'),
          1 === e.length && 1 === i.nodeType
            ? x.find.matchesSelector(i, t)
              ? [i]
              : []
            : x.find.matches(
                t,
                x.grep(e, function(t) {
                  return 1 === t.nodeType;
                }),
              )
        );
      }),
        x.fn.extend({
          find: function(t) {
            var e,
              n,
              i = this.length,
              r = this;
            if ('string' != typeof t)
              return this.pushStack(
                x(t).filter(function() {
                  for (e = 0; e < i; e++) if (x.contains(r[e], this)) return !0;
                }),
              );
            for (n = this.pushStack([]), e = 0; e < i; e++) x.find(t, r[e], n);
            return i > 1 ? x.uniqueSort(n) : n;
          },
          filter: function(t) {
            return this.pushStack(N(this, t || [], !1));
          },
          not: function(t) {
            return this.pushStack(N(this, t || [], !0));
          },
          is: function(t) {
            return !!N(this, 'string' == typeof t && D.test(t) ? x(t) : t || [], !1).length;
          },
        });
      var R,
        P = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
      ((x.fn.init = function(t, e, n) {
        var i, r;
        if (!t) return this;
        if (((n = n || R), 'string' == typeof t)) {
          if (
            !(i =
              '<' === t[0] && '>' === t[t.length - 1] && t.length >= 3
                ? [null, t, null]
                : P.exec(t)) ||
            (!i[1] && e)
          )
            return !e || e.jquery ? (e || n).find(t) : this.constructor(e).find(t);
          if (i[1]) {
            if (
              ((e = e instanceof x ? e[0] : e),
              x.merge(this, x.parseHTML(i[1], e && e.nodeType ? e.ownerDocument || e : s, !0)),
              k.test(i[1]) && x.isPlainObject(e))
            )
              for (i in e) y(this[i]) ? this[i](e[i]) : this.attr(i, e[i]);
            return this;
          }
          return (r = s.getElementById(i[2])) && ((this[0] = r), (this.length = 1)), this;
        }
        return t.nodeType
          ? ((this[0] = t), (this.length = 1), this)
          : y(t)
          ? void 0 !== n.ready
            ? n.ready(t)
            : t(x)
          : x.makeArray(t, this);
      }).prototype = x.fn),
        (R = x(s));
      var L = /^(?:parents|prev(?:Until|All))/,
        M = { children: !0, contents: !0, next: !0, prev: !0 };
      function V(t, e) {
        for (; (t = t[e]) && 1 !== t.nodeType; );
        return t;
      }
      x.fn.extend({
        has: function(t) {
          var e = x(t, this),
            n = e.length;
          return this.filter(function() {
            for (var t = 0; t < n; t++) if (x.contains(this, e[t])) return !0;
          });
        },
        closest: function(t, e) {
          var n,
            i = 0,
            r = this.length,
            o = [],
            s = 'string' != typeof t && x(t);
          if (!D.test(t))
            for (; i < r; i++)
              for (n = this[i]; n && n !== e; n = n.parentNode)
                if (
                  n.nodeType < 11 &&
                  (s ? s.index(n) > -1 : 1 === n.nodeType && x.find.matchesSelector(n, t))
                ) {
                  o.push(n);
                  break;
                }
          return this.pushStack(o.length > 1 ? x.uniqueSort(o) : o);
        },
        index: function(t) {
          return t
            ? 'string' == typeof t
              ? h.call(x(t), this[0])
              : h.call(this, t.jquery ? t[0] : t)
            : this[0] && this[0].parentNode
            ? this.first().prevAll().length
            : -1;
        },
        add: function(t, e) {
          return this.pushStack(x.uniqueSort(x.merge(this.get(), x(t, e))));
        },
        addBack: function(t) {
          return this.add(null == t ? this.prevObject : this.prevObject.filter(t));
        },
      }),
        x.each(
          {
            parent: function(t) {
              var e = t.parentNode;
              return e && 11 !== e.nodeType ? e : null;
            },
            parents: function(t) {
              return A(t, 'parentNode');
            },
            parentsUntil: function(t, e, n) {
              return A(t, 'parentNode', n);
            },
            next: function(t) {
              return V(t, 'nextSibling');
            },
            prev: function(t) {
              return V(t, 'previousSibling');
            },
            nextAll: function(t) {
              return A(t, 'nextSibling');
            },
            prevAll: function(t) {
              return A(t, 'previousSibling');
            },
            nextUntil: function(t, e, n) {
              return A(t, 'nextSibling', n);
            },
            prevUntil: function(t, e, n) {
              return A(t, 'previousSibling', n);
            },
            siblings: function(t) {
              return O((t.parentNode || {}).firstChild, t);
            },
            children: function(t) {
              return O(t.firstChild);
            },
            contents: function(t) {
              return I(t, 'iframe')
                ? t.contentDocument
                : (I(t, 'template') && (t = t.content || t), x.merge([], t.childNodes));
            },
          },
          function(t, e) {
            x.fn[t] = function(n, i) {
              var r = x.map(this, e, n);
              return (
                'Until' !== t.slice(-5) && (i = n),
                i && 'string' == typeof i && (r = x.filter(i, r)),
                this.length > 1 && (M[t] || x.uniqueSort(r), L.test(t) && r.reverse()),
                this.pushStack(r)
              );
            };
          },
        );
      var j = /[^\x20\t\r\n\f]+/g;
      function H(t) {
        return t;
      }
      function F(t) {
        throw t;
      }
      function q(t, e, n, i) {
        var r;
        try {
          t && y((r = t.promise))
            ? r
                .call(t)
                .done(e)
                .fail(n)
            : t && y((r = t.then))
            ? r.call(t, e, n)
            : e.apply(void 0, [t].slice(i));
        } catch (t) {
          n.apply(void 0, [t]);
        }
      }
      (x.Callbacks = function(t) {
        t =
          'string' == typeof t
            ? (function(t) {
                var e = {};
                return (
                  x.each(t.match(j) || [], function(t, n) {
                    e[n] = !0;
                  }),
                  e
                );
              })(t)
            : x.extend({}, t);
        var e,
          n,
          i,
          r,
          o = [],
          s = [],
          a = -1,
          l = function() {
            for (r = r || t.once, i = e = !0; s.length; a = -1)
              for (n = s.shift(); ++a < o.length; )
                !1 === o[a].apply(n[0], n[1]) && t.stopOnFalse && ((a = o.length), (n = !1));
            t.memory || (n = !1), (e = !1), r && (o = n ? [] : '');
          },
          u = {
            add: function() {
              return (
                o &&
                  (n && !e && ((a = o.length - 1), s.push(n)),
                  (function e(n) {
                    x.each(n, function(n, i) {
                      y(i)
                        ? (t.unique && u.has(i)) || o.push(i)
                        : i && i.length && 'string' !== E(i) && e(i);
                    });
                  })(arguments),
                  n && !e && l()),
                this
              );
            },
            remove: function() {
              return (
                x.each(arguments, function(t, e) {
                  for (var n; (n = x.inArray(e, o, n)) > -1; ) o.splice(n, 1), n <= a && a--;
                }),
                this
              );
            },
            has: function(t) {
              return t ? x.inArray(t, o) > -1 : o.length > 0;
            },
            empty: function() {
              return o && (o = []), this;
            },
            disable: function() {
              return (r = s = []), (o = n = ''), this;
            },
            disabled: function() {
              return !o;
            },
            lock: function() {
              return (r = s = []), n || e || (o = n = ''), this;
            },
            locked: function() {
              return !!r;
            },
            fireWith: function(t, n) {
              return (
                r || ((n = [t, (n = n || []).slice ? n.slice() : n]), s.push(n), e || l()), this
              );
            },
            fire: function() {
              return u.fireWith(this, arguments), this;
            },
            fired: function() {
              return !!i;
            },
          };
        return u;
      }),
        x.extend({
          Deferred: function(t) {
            var e = [
                ['notify', 'progress', x.Callbacks('memory'), x.Callbacks('memory'), 2],
                [
                  'resolve',
                  'done',
                  x.Callbacks('once memory'),
                  x.Callbacks('once memory'),
                  0,
                  'resolved',
                ],
                [
                  'reject',
                  'fail',
                  x.Callbacks('once memory'),
                  x.Callbacks('once memory'),
                  1,
                  'rejected',
                ],
              ],
              i = 'pending',
              r = {
                state: function() {
                  return i;
                },
                always: function() {
                  return o.done(arguments).fail(arguments), this;
                },
                catch: function(t) {
                  return r.then(null, t);
                },
                pipe: function() {
                  var t = arguments;
                  return x
                    .Deferred(function(n) {
                      x.each(e, function(e, i) {
                        var r = y(t[i[4]]) && t[i[4]];
                        o[i[1]](function() {
                          var t = r && r.apply(this, arguments);
                          t && y(t.promise)
                            ? t
                                .promise()
                                .progress(n.notify)
                                .done(n.resolve)
                                .fail(n.reject)
                            : n[i[0] + 'With'](this, r ? [t] : arguments);
                        });
                      }),
                        (t = null);
                    })
                    .promise();
                },
                then: function(t, i, r) {
                  var o = 0;
                  function s(t, e, i, r) {
                    return function() {
                      var a = this,
                        l = arguments,
                        u = function() {
                          var n, u;
                          if (!(t < o)) {
                            if ((n = i.apply(a, l)) === e.promise())
                              throw new TypeError('Thenable self-resolution');
                            (u = n && ('object' == typeof n || 'function' == typeof n) && n.then),
                              y(u)
                                ? r
                                  ? u.call(n, s(o, e, H, r), s(o, e, F, r))
                                  : (o++,
                                    u.call(
                                      n,
                                      s(o, e, H, r),
                                      s(o, e, F, r),
                                      s(o, e, H, e.notifyWith),
                                    ))
                                : (i !== H && ((a = void 0), (l = [n])),
                                  (r || e.resolveWith)(a, l));
                          }
                        },
                        c = r
                          ? u
                          : function() {
                              try {
                                u();
                              } catch (n) {
                                x.Deferred.exceptionHook &&
                                  x.Deferred.exceptionHook(n, c.stackTrace),
                                  t + 1 >= o &&
                                    (i !== F && ((a = void 0), (l = [n])), e.rejectWith(a, l));
                              }
                            };
                      t
                        ? c()
                        : (x.Deferred.getStackHook && (c.stackTrace = x.Deferred.getStackHook()),
                          n.setTimeout(c));
                    };
                  }
                  return x
                    .Deferred(function(n) {
                      e[0][3].add(s(0, n, y(r) ? r : H, n.notifyWith)),
                        e[1][3].add(s(0, n, y(t) ? t : H)),
                        e[2][3].add(s(0, n, y(i) ? i : F));
                    })
                    .promise();
                },
                promise: function(t) {
                  return null != t ? x.extend(t, r) : r;
                },
              },
              o = {};
            return (
              x.each(e, function(t, n) {
                var s = n[2],
                  a = n[5];
                (r[n[1]] = s.add),
                  a &&
                    s.add(
                      function() {
                        i = a;
                      },
                      e[3 - t][2].disable,
                      e[3 - t][3].disable,
                      e[0][2].lock,
                      e[0][3].lock,
                    ),
                  s.add(n[3].fire),
                  (o[n[0]] = function() {
                    return o[n[0] + 'With'](this === o ? void 0 : this, arguments), this;
                  }),
                  (o[n[0] + 'With'] = s.fireWith);
              }),
              r.promise(o),
              t && t.call(o, o),
              o
            );
          },
          when: function(t) {
            var e = arguments.length,
              n = e,
              i = Array(n),
              r = l.call(arguments),
              o = x.Deferred(),
              s = function(t) {
                return function(n) {
                  (i[t] = this),
                    (r[t] = arguments.length > 1 ? l.call(arguments) : n),
                    --e || o.resolveWith(i, r);
                };
              };
            if (
              e <= 1 &&
              (q(t, o.done(s(n)).resolve, o.reject, !e),
              'pending' === o.state() || y(r[n] && r[n].then))
            )
              return o.then();
            for (; n--; ) q(r[n], s(n), o.reject);
            return o.promise();
          },
        });
      var B = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
      (x.Deferred.exceptionHook = function(t, e) {
        n.console &&
          n.console.warn &&
          t &&
          B.test(t.name) &&
          n.console.warn('jQuery.Deferred exception: ' + t.message, t.stack, e);
      }),
        (x.readyException = function(t) {
          n.setTimeout(function() {
            throw t;
          });
        });
      var U = x.Deferred();
      function W() {
        s.removeEventListener('DOMContentLoaded', W), n.removeEventListener('load', W), x.ready();
      }
      (x.fn.ready = function(t) {
        return (
          U.then(t).catch(function(t) {
            x.readyException(t);
          }),
          this
        );
      }),
        x.extend({
          isReady: !1,
          readyWait: 1,
          ready: function(t) {
            (!0 === t ? --x.readyWait : x.isReady) ||
              ((x.isReady = !0), (!0 !== t && --x.readyWait > 0) || U.resolveWith(s, [x]));
          },
        }),
        (x.ready.then = U.then),
        'complete' === s.readyState || ('loading' !== s.readyState && !s.documentElement.doScroll)
          ? n.setTimeout(x.ready)
          : (s.addEventListener('DOMContentLoaded', W), n.addEventListener('load', W));
      var $ = function(t, e, n, i, r, o, s) {
          var a = 0,
            l = t.length,
            u = null == n;
          if ('object' === E(n)) for (a in ((r = !0), n)) $(t, e, a, n[a], !0, o, s);
          else if (
            void 0 !== i &&
            ((r = !0),
            y(i) || (s = !0),
            u &&
              (s
                ? (e.call(t, i), (e = null))
                : ((u = e),
                  (e = function(t, e, n) {
                    return u.call(x(t), n);
                  }))),
            e)
          )
            for (; a < l; a++) e(t[a], n, s ? i : i.call(t[a], a, e(t[a], n)));
          return r ? t : u ? e.call(t) : l ? e(t[0], n) : o;
        },
        z = /^-ms-/,
        K = /-([a-z])/g;
      function G(t, e) {
        return e.toUpperCase();
      }
      function Q(t) {
        return t.replace(z, 'ms-').replace(K, G);
      }
      var Y = function(t) {
        return 1 === t.nodeType || 9 === t.nodeType || !+t.nodeType;
      };
      function X() {
        this.expando = x.expando + X.uid++;
      }
      (X.uid = 1),
        (X.prototype = {
          cache: function(t) {
            var e = t[this.expando];
            return (
              e ||
                ((e = {}),
                Y(t) &&
                  (t.nodeType
                    ? (t[this.expando] = e)
                    : Object.defineProperty(t, this.expando, { value: e, configurable: !0 }))),
              e
            );
          },
          set: function(t, e, n) {
            var i,
              r = this.cache(t);
            if ('string' == typeof e) r[Q(e)] = n;
            else for (i in e) r[Q(i)] = e[i];
            return r;
          },
          get: function(t, e) {
            return void 0 === e ? this.cache(t) : t[this.expando] && t[this.expando][Q(e)];
          },
          access: function(t, e, n) {
            return void 0 === e || (e && 'string' == typeof e && void 0 === n)
              ? this.get(t, e)
              : (this.set(t, e, n), void 0 !== n ? n : e);
          },
          remove: function(t, e) {
            var n,
              i = t[this.expando];
            if (void 0 !== i) {
              if (void 0 !== e) {
                n = (e = Array.isArray(e) ? e.map(Q) : (e = Q(e)) in i ? [e] : e.match(j) || [])
                  .length;
                for (; n--; ) delete i[e[n]];
              }
              (void 0 === e || x.isEmptyObject(i)) &&
                (t.nodeType ? (t[this.expando] = void 0) : delete t[this.expando]);
            }
          },
          hasData: function(t) {
            var e = t[this.expando];
            return void 0 !== e && !x.isEmptyObject(e);
          },
        });
      var J = new X(),
        Z = new X(),
        tt = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        et = /[A-Z]/g;
      function nt(t, e, n) {
        var i;
        if (void 0 === n && 1 === t.nodeType)
          if (
            ((i = 'data-' + e.replace(et, '-$&').toLowerCase()),
            'string' == typeof (n = t.getAttribute(i)))
          ) {
            try {
              n = (function(t) {
                return (
                  'true' === t ||
                  ('false' !== t &&
                    ('null' === t ? null : t === +t + '' ? +t : tt.test(t) ? JSON.parse(t) : t))
                );
              })(n);
            } catch (t) {}
            Z.set(t, e, n);
          } else n = void 0;
        return n;
      }
      x.extend({
        hasData: function(t) {
          return Z.hasData(t) || J.hasData(t);
        },
        data: function(t, e, n) {
          return Z.access(t, e, n);
        },
        removeData: function(t, e) {
          Z.remove(t, e);
        },
        _data: function(t, e, n) {
          return J.access(t, e, n);
        },
        _removeData: function(t, e) {
          J.remove(t, e);
        },
      }),
        x.fn.extend({
          data: function(t, e) {
            var n,
              i,
              r,
              o = this[0],
              s = o && o.attributes;
            if (void 0 === t) {
              if (this.length && ((r = Z.get(o)), 1 === o.nodeType && !J.get(o, 'hasDataAttrs'))) {
                for (n = s.length; n--; )
                  s[n] &&
                    0 === (i = s[n].name).indexOf('data-') &&
                    ((i = Q(i.slice(5))), nt(o, i, r[i]));
                J.set(o, 'hasDataAttrs', !0);
              }
              return r;
            }
            return 'object' == typeof t
              ? this.each(function() {
                  Z.set(this, t);
                })
              : $(
                  this,
                  function(e) {
                    var n;
                    if (o && void 0 === e)
                      return void 0 !== (n = Z.get(o, t))
                        ? n
                        : void 0 !== (n = nt(o, t))
                        ? n
                        : void 0;
                    this.each(function() {
                      Z.set(this, t, e);
                    });
                  },
                  null,
                  e,
                  arguments.length > 1,
                  null,
                  !0,
                );
          },
          removeData: function(t) {
            return this.each(function() {
              Z.remove(this, t);
            });
          },
        }),
        x.extend({
          queue: function(t, e, n) {
            var i;
            if (t)
              return (
                (e = (e || 'fx') + 'queue'),
                (i = J.get(t, e)),
                n && (!i || Array.isArray(n) ? (i = J.access(t, e, x.makeArray(n))) : i.push(n)),
                i || []
              );
          },
          dequeue: function(t, e) {
            e = e || 'fx';
            var n = x.queue(t, e),
              i = n.length,
              r = n.shift(),
              o = x._queueHooks(t, e);
            'inprogress' === r && ((r = n.shift()), i--),
              r &&
                ('fx' === e && n.unshift('inprogress'),
                delete o.stop,
                r.call(
                  t,
                  function() {
                    x.dequeue(t, e);
                  },
                  o,
                )),
              !i && o && o.empty.fire();
          },
          _queueHooks: function(t, e) {
            var n = e + 'queueHooks';
            return (
              J.get(t, n) ||
              J.access(t, n, {
                empty: x.Callbacks('once memory').add(function() {
                  J.remove(t, [e + 'queue', n]);
                }),
              })
            );
          },
        }),
        x.fn.extend({
          queue: function(t, e) {
            var n = 2;
            return (
              'string' != typeof t && ((e = t), (t = 'fx'), n--),
              arguments.length < n
                ? x.queue(this[0], t)
                : void 0 === e
                ? this
                : this.each(function() {
                    var n = x.queue(this, t, e);
                    x._queueHooks(this, t),
                      'fx' === t && 'inprogress' !== n[0] && x.dequeue(this, t);
                  })
            );
          },
          dequeue: function(t) {
            return this.each(function() {
              x.dequeue(this, t);
            });
          },
          clearQueue: function(t) {
            return this.queue(t || 'fx', []);
          },
          promise: function(t, e) {
            var n,
              i = 1,
              r = x.Deferred(),
              o = this,
              s = this.length,
              a = function() {
                --i || r.resolveWith(o, [o]);
              };
            for ('string' != typeof t && ((e = t), (t = void 0)), t = t || 'fx'; s--; )
              (n = J.get(o[s], t + 'queueHooks')) && n.empty && (i++, n.empty.add(a));
            return a(), r.promise(e);
          },
        });
      var it = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        rt = new RegExp('^(?:([+-])=|)(' + it + ')([a-z%]*)$', 'i'),
        ot = ['Top', 'Right', 'Bottom', 'Left'],
        st = function(t, e) {
          return (
            'none' === (t = e || t).style.display ||
            ('' === t.style.display &&
              x.contains(t.ownerDocument, t) &&
              'none' === x.css(t, 'display'))
          );
        },
        at = function(t, e, n, i) {
          var r,
            o,
            s = {};
          for (o in e) (s[o] = t.style[o]), (t.style[o] = e[o]);
          for (o in ((r = n.apply(t, i || [])), e)) t.style[o] = s[o];
          return r;
        };
      function lt(t, e, n, i) {
        var r,
          o,
          s = 20,
          a = i
            ? function() {
                return i.cur();
              }
            : function() {
                return x.css(t, e, '');
              },
          l = a(),
          u = (n && n[3]) || (x.cssNumber[e] ? '' : 'px'),
          c = (x.cssNumber[e] || ('px' !== u && +l)) && rt.exec(x.css(t, e));
        if (c && c[3] !== u) {
          for (l /= 2, u = u || c[3], c = +l || 1; s--; )
            x.style(t, e, c + u), (1 - o) * (1 - (o = a() / l || 0.5)) <= 0 && (s = 0), (c /= o);
          (c *= 2), x.style(t, e, c + u), (n = n || []);
        }
        return (
          n &&
            ((c = +c || +l || 0),
            (r = n[1] ? c + (n[1] + 1) * n[2] : +n[2]),
            i && ((i.unit = u), (i.start = c), (i.end = r))),
          r
        );
      }
      var ut = {};
      function ct(t) {
        var e,
          n = t.ownerDocument,
          i = t.nodeName,
          r = ut[i];
        return (
          r ||
          ((e = n.body.appendChild(n.createElement(i))),
          (r = x.css(e, 'display')),
          e.parentNode.removeChild(e),
          'none' === r && (r = 'block'),
          (ut[i] = r),
          r)
        );
      }
      function ht(t, e) {
        for (var n, i, r = [], o = 0, s = t.length; o < s; o++)
          (i = t[o]).style &&
            ((n = i.style.display),
            e
              ? ('none' === n &&
                  ((r[o] = J.get(i, 'display') || null), r[o] || (i.style.display = '')),
                '' === i.style.display && st(i) && (r[o] = ct(i)))
              : 'none' !== n && ((r[o] = 'none'), J.set(i, 'display', n)));
        for (o = 0; o < s; o++) null != r[o] && (t[o].style.display = r[o]);
        return t;
      }
      x.fn.extend({
        show: function() {
          return ht(this, !0);
        },
        hide: function() {
          return ht(this);
        },
        toggle: function(t) {
          return 'boolean' == typeof t
            ? t
              ? this.show()
              : this.hide()
            : this.each(function() {
                st(this) ? x(this).show() : x(this).hide();
              });
        },
      });
      var ft = /^(?:checkbox|radio)$/i,
        dt = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i,
        pt = /^$|^module$|\/(?:java|ecma)script/i,
        gt = {
          option: [1, "<select multiple='multiple'>", '</select>'],
          thead: [1, '<table>', '</table>'],
          col: [2, '<table><colgroup>', '</colgroup></table>'],
          tr: [2, '<table><tbody>', '</tbody></table>'],
          td: [3, '<table><tbody><tr>', '</tr></tbody></table>'],
          _default: [0, '', ''],
        };
      function mt(t, e) {
        var n;
        return (
          (n =
            void 0 !== t.getElementsByTagName
              ? t.getElementsByTagName(e || '*')
              : void 0 !== t.querySelectorAll
              ? t.querySelectorAll(e || '*')
              : []),
          void 0 === e || (e && I(t, e)) ? x.merge([t], n) : n
        );
      }
      function vt(t, e) {
        for (var n = 0, i = t.length; n < i; n++)
          J.set(t[n], 'globalEval', !e || J.get(e[n], 'globalEval'));
      }
      (gt.optgroup = gt.option),
        (gt.tbody = gt.tfoot = gt.colgroup = gt.caption = gt.thead),
        (gt.th = gt.td);
      var yt,
        _t,
        bt = /<|&#?\w+;/;
      function wt(t, e, n, i, r) {
        for (
          var o, s, a, l, u, c, h = e.createDocumentFragment(), f = [], d = 0, p = t.length;
          d < p;
          d++
        )
          if ((o = t[d]) || 0 === o)
            if ('object' === E(o)) x.merge(f, o.nodeType ? [o] : o);
            else if (bt.test(o)) {
              for (
                s = s || h.appendChild(e.createElement('div')),
                  a = (dt.exec(o) || ['', ''])[1].toLowerCase(),
                  l = gt[a] || gt._default,
                  s.innerHTML = l[1] + x.htmlPrefilter(o) + l[2],
                  c = l[0];
                c--;

              )
                s = s.lastChild;
              x.merge(f, s.childNodes), ((s = h.firstChild).textContent = '');
            } else f.push(e.createTextNode(o));
        for (h.textContent = '', d = 0; (o = f[d++]); )
          if (i && x.inArray(o, i) > -1) r && r.push(o);
          else if (
            ((u = x.contains(o.ownerDocument, o)),
            (s = mt(h.appendChild(o), 'script')),
            u && vt(s),
            n)
          )
            for (c = 0; (o = s[c++]); ) pt.test(o.type || '') && n.push(o);
        return h;
      }
      (yt = s.createDocumentFragment().appendChild(s.createElement('div'))),
        (_t = s.createElement('input')).setAttribute('type', 'radio'),
        _t.setAttribute('checked', 'checked'),
        _t.setAttribute('name', 't'),
        yt.appendChild(_t),
        (v.checkClone = yt.cloneNode(!0).cloneNode(!0).lastChild.checked),
        (yt.innerHTML = '<textarea>x</textarea>'),
        (v.noCloneChecked = !!yt.cloneNode(!0).lastChild.defaultValue);
      var Et = s.documentElement,
        xt = /^key/,
        Tt = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
        Ct = /^([^.]*)(?:\.(.+)|)/;
      function St() {
        return !0;
      }
      function At() {
        return !1;
      }
      function Ot() {
        try {
          return s.activeElement;
        } catch (t) {}
      }
      function Dt(t, e, n, i, r, o) {
        var s, a;
        if ('object' == typeof e) {
          for (a in ('string' != typeof n && ((i = i || n), (n = void 0)), e))
            Dt(t, a, n, i, e[a], o);
          return t;
        }
        if (
          (null == i && null == r
            ? ((r = n), (i = n = void 0))
            : null == r &&
              ('string' == typeof n ? ((r = i), (i = void 0)) : ((r = i), (i = n), (n = void 0))),
          !1 === r)
        )
          r = At;
        else if (!r) return t;
        return (
          1 === o &&
            ((s = r),
            ((r = function(t) {
              return x().off(t), s.apply(this, arguments);
            }).guid = s.guid || (s.guid = x.guid++))),
          t.each(function() {
            x.event.add(this, e, r, i, n);
          })
        );
      }
      (x.event = {
        global: {},
        add: function(t, e, n, i, r) {
          var o,
            s,
            a,
            l,
            u,
            c,
            h,
            f,
            d,
            p,
            g,
            m = J.get(t);
          if (m)
            for (
              n.handler && ((n = (o = n).handler), (r = o.selector)),
                r && x.find.matchesSelector(Et, r),
                n.guid || (n.guid = x.guid++),
                (l = m.events) || (l = m.events = {}),
                (s = m.handle) ||
                  (s = m.handle = function(e) {
                    return void 0 !== x && x.event.triggered !== e.type
                      ? x.event.dispatch.apply(t, arguments)
                      : void 0;
                  }),
                u = (e = (e || '').match(j) || ['']).length;
              u--;

            )
              (d = g = (a = Ct.exec(e[u]) || [])[1]),
                (p = (a[2] || '').split('.').sort()),
                d &&
                  ((h = x.event.special[d] || {}),
                  (d = (r ? h.delegateType : h.bindType) || d),
                  (h = x.event.special[d] || {}),
                  (c = x.extend(
                    {
                      type: d,
                      origType: g,
                      data: i,
                      handler: n,
                      guid: n.guid,
                      selector: r,
                      needsContext: r && x.expr.match.needsContext.test(r),
                      namespace: p.join('.'),
                    },
                    o,
                  )),
                  (f = l[d]) ||
                    (((f = l[d] = []).delegateCount = 0),
                    (h.setup && !1 !== h.setup.call(t, i, p, s)) ||
                      (t.addEventListener && t.addEventListener(d, s))),
                  h.add && (h.add.call(t, c), c.handler.guid || (c.handler.guid = n.guid)),
                  r ? f.splice(f.delegateCount++, 0, c) : f.push(c),
                  (x.event.global[d] = !0));
        },
        remove: function(t, e, n, i, r) {
          var o,
            s,
            a,
            l,
            u,
            c,
            h,
            f,
            d,
            p,
            g,
            m = J.hasData(t) && J.get(t);
          if (m && (l = m.events)) {
            for (u = (e = (e || '').match(j) || ['']).length; u--; )
              if (
                ((d = g = (a = Ct.exec(e[u]) || [])[1]), (p = (a[2] || '').split('.').sort()), d)
              ) {
                for (
                  h = x.event.special[d] || {},
                    f = l[(d = (i ? h.delegateType : h.bindType) || d)] || [],
                    a = a[2] && new RegExp('(^|\\.)' + p.join('\\.(?:.*\\.|)') + '(\\.|$)'),
                    s = o = f.length;
                  o--;

                )
                  (c = f[o]),
                    (!r && g !== c.origType) ||
                      (n && n.guid !== c.guid) ||
                      (a && !a.test(c.namespace)) ||
                      (i && i !== c.selector && ('**' !== i || !c.selector)) ||
                      (f.splice(o, 1),
                      c.selector && f.delegateCount--,
                      h.remove && h.remove.call(t, c));
                s &&
                  !f.length &&
                  ((h.teardown && !1 !== h.teardown.call(t, p, m.handle)) ||
                    x.removeEvent(t, d, m.handle),
                  delete l[d]);
              } else for (d in l) x.event.remove(t, d + e[u], n, i, !0);
            x.isEmptyObject(l) && J.remove(t, 'handle events');
          }
        },
        dispatch: function(t) {
          var e,
            n,
            i,
            r,
            o,
            s,
            a = x.event.fix(t),
            l = new Array(arguments.length),
            u = (J.get(this, 'events') || {})[a.type] || [],
            c = x.event.special[a.type] || {};
          for (l[0] = a, e = 1; e < arguments.length; e++) l[e] = arguments[e];
          if (((a.delegateTarget = this), !c.preDispatch || !1 !== c.preDispatch.call(this, a))) {
            for (
              s = x.event.handlers.call(this, a, u), e = 0;
              (r = s[e++]) && !a.isPropagationStopped();

            )
              for (
                a.currentTarget = r.elem, n = 0;
                (o = r.handlers[n++]) && !a.isImmediatePropagationStopped();

              )
                (a.rnamespace && !a.rnamespace.test(o.namespace)) ||
                  ((a.handleObj = o),
                  (a.data = o.data),
                  void 0 !==
                    (i = ((x.event.special[o.origType] || {}).handle || o.handler).apply(
                      r.elem,
                      l,
                    )) &&
                    !1 === (a.result = i) &&
                    (a.preventDefault(), a.stopPropagation()));
            return c.postDispatch && c.postDispatch.call(this, a), a.result;
          }
        },
        handlers: function(t, e) {
          var n,
            i,
            r,
            o,
            s,
            a = [],
            l = e.delegateCount,
            u = t.target;
          if (l && u.nodeType && !('click' === t.type && t.button >= 1))
            for (; u !== this; u = u.parentNode || this)
              if (1 === u.nodeType && ('click' !== t.type || !0 !== u.disabled)) {
                for (o = [], s = {}, n = 0; n < l; n++)
                  void 0 === s[(r = (i = e[n]).selector + ' ')] &&
                    (s[r] = i.needsContext
                      ? x(r, this).index(u) > -1
                      : x.find(r, this, null, [u]).length),
                    s[r] && o.push(i);
                o.length && a.push({ elem: u, handlers: o });
              }
          return (u = this), l < e.length && a.push({ elem: u, handlers: e.slice(l) }), a;
        },
        addProp: function(t, e) {
          Object.defineProperty(x.Event.prototype, t, {
            enumerable: !0,
            configurable: !0,
            get: y(e)
              ? function() {
                  if (this.originalEvent) return e(this.originalEvent);
                }
              : function() {
                  if (this.originalEvent) return this.originalEvent[t];
                },
            set: function(e) {
              Object.defineProperty(this, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: e,
              });
            },
          });
        },
        fix: function(t) {
          return t[x.expando] ? t : new x.Event(t);
        },
        special: {
          load: { noBubble: !0 },
          focus: {
            trigger: function() {
              if (this !== Ot() && this.focus) return this.focus(), !1;
            },
            delegateType: 'focusin',
          },
          blur: {
            trigger: function() {
              if (this === Ot() && this.blur) return this.blur(), !1;
            },
            delegateType: 'focusout',
          },
          click: {
            trigger: function() {
              if ('checkbox' === this.type && this.click && I(this, 'input'))
                return this.click(), !1;
            },
            _default: function(t) {
              return I(t.target, 'a');
            },
          },
          beforeunload: {
            postDispatch: function(t) {
              void 0 !== t.result && t.originalEvent && (t.originalEvent.returnValue = t.result);
            },
          },
        },
      }),
        (x.removeEvent = function(t, e, n) {
          t.removeEventListener && t.removeEventListener(e, n);
        }),
        (x.Event = function(t, e) {
          if (!(this instanceof x.Event)) return new x.Event(t, e);
          t && t.type
            ? ((this.originalEvent = t),
              (this.type = t.type),
              (this.isDefaultPrevented =
                t.defaultPrevented || (void 0 === t.defaultPrevented && !1 === t.returnValue)
                  ? St
                  : At),
              (this.target = t.target && 3 === t.target.nodeType ? t.target.parentNode : t.target),
              (this.currentTarget = t.currentTarget),
              (this.relatedTarget = t.relatedTarget))
            : (this.type = t),
            e && x.extend(this, e),
            (this.timeStamp = (t && t.timeStamp) || Date.now()),
            (this[x.expando] = !0);
        }),
        (x.Event.prototype = {
          constructor: x.Event,
          isDefaultPrevented: At,
          isPropagationStopped: At,
          isImmediatePropagationStopped: At,
          isSimulated: !1,
          preventDefault: function() {
            var t = this.originalEvent;
            (this.isDefaultPrevented = St), t && !this.isSimulated && t.preventDefault();
          },
          stopPropagation: function() {
            var t = this.originalEvent;
            (this.isPropagationStopped = St), t && !this.isSimulated && t.stopPropagation();
          },
          stopImmediatePropagation: function() {
            var t = this.originalEvent;
            (this.isImmediatePropagationStopped = St),
              t && !this.isSimulated && t.stopImmediatePropagation(),
              this.stopPropagation();
          },
        }),
        x.each(
          {
            altKey: !0,
            bubbles: !0,
            cancelable: !0,
            changedTouches: !0,
            ctrlKey: !0,
            detail: !0,
            eventPhase: !0,
            metaKey: !0,
            pageX: !0,
            pageY: !0,
            shiftKey: !0,
            view: !0,
            char: !0,
            charCode: !0,
            key: !0,
            keyCode: !0,
            button: !0,
            buttons: !0,
            clientX: !0,
            clientY: !0,
            offsetX: !0,
            offsetY: !0,
            pointerId: !0,
            pointerType: !0,
            screenX: !0,
            screenY: !0,
            targetTouches: !0,
            toElement: !0,
            touches: !0,
            which: function(t) {
              var e = t.button;
              return null == t.which && xt.test(t.type)
                ? null != t.charCode
                  ? t.charCode
                  : t.keyCode
                : !t.which && void 0 !== e && Tt.test(t.type)
                ? 1 & e
                  ? 1
                  : 2 & e
                  ? 3
                  : 4 & e
                  ? 2
                  : 0
                : t.which;
            },
          },
          x.event.addProp,
        ),
        x.each(
          {
            mouseenter: 'mouseover',
            mouseleave: 'mouseout',
            pointerenter: 'pointerover',
            pointerleave: 'pointerout',
          },
          function(t, e) {
            x.event.special[t] = {
              delegateType: e,
              bindType: e,
              handle: function(t) {
                var n,
                  i = t.relatedTarget,
                  r = t.handleObj;
                return (
                  (i && (i === this || x.contains(this, i))) ||
                    ((t.type = r.origType), (n = r.handler.apply(this, arguments)), (t.type = e)),
                  n
                );
              },
            };
          },
        ),
        x.fn.extend({
          on: function(t, e, n, i) {
            return Dt(this, t, e, n, i);
          },
          one: function(t, e, n, i) {
            return Dt(this, t, e, n, i, 1);
          },
          off: function(t, e, n) {
            var i, r;
            if (t && t.preventDefault && t.handleObj)
              return (
                (i = t.handleObj),
                x(t.delegateTarget).off(
                  i.namespace ? i.origType + '.' + i.namespace : i.origType,
                  i.selector,
                  i.handler,
                ),
                this
              );
            if ('object' == typeof t) {
              for (r in t) this.off(r, e, t[r]);
              return this;
            }
            return (
              (!1 !== e && 'function' != typeof e) || ((n = e), (e = void 0)),
              !1 === n && (n = At),
              this.each(function() {
                x.event.remove(this, t, n, e);
              })
            );
          },
        });
      var It = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
        kt = /<script|<style|<link/i,
        Nt = /checked\s*(?:[^=]|=\s*.checked.)/i,
        Rt = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
      function Pt(t, e) {
        return (
          (I(t, 'table') &&
            I(11 !== e.nodeType ? e : e.firstChild, 'tr') &&
            x(t).children('tbody')[0]) ||
          t
        );
      }
      function Lt(t) {
        return (t.type = (null !== t.getAttribute('type')) + '/' + t.type), t;
      }
      function Mt(t) {
        return (
          'true/' === (t.type || '').slice(0, 5)
            ? (t.type = t.type.slice(5))
            : t.removeAttribute('type'),
          t
        );
      }
      function Vt(t, e) {
        var n, i, r, o, s, a, l, u;
        if (1 === e.nodeType) {
          if (J.hasData(t) && ((o = J.access(t)), (s = J.set(e, o)), (u = o.events)))
            for (r in (delete s.handle, (s.events = {}), u))
              for (n = 0, i = u[r].length; n < i; n++) x.event.add(e, r, u[r][n]);
          Z.hasData(t) && ((a = Z.access(t)), (l = x.extend({}, a)), Z.set(e, l));
        }
      }
      function jt(t, e, n, i) {
        e = u.apply([], e);
        var r,
          o,
          s,
          a,
          l,
          c,
          h = 0,
          f = t.length,
          d = f - 1,
          p = e[0],
          g = y(p);
        if (g || (f > 1 && 'string' == typeof p && !v.checkClone && Nt.test(p)))
          return t.each(function(r) {
            var o = t.eq(r);
            g && (e[0] = p.call(this, r, o.html())), jt(o, e, n, i);
          });
        if (
          f &&
          ((o = (r = wt(e, t[0].ownerDocument, !1, t, i)).firstChild),
          1 === r.childNodes.length && (r = o),
          o || i)
        ) {
          for (a = (s = x.map(mt(r, 'script'), Lt)).length; h < f; h++)
            (l = r),
              h !== d && ((l = x.clone(l, !0, !0)), a && x.merge(s, mt(l, 'script'))),
              n.call(t[h], l, h);
          if (a)
            for (c = s[s.length - 1].ownerDocument, x.map(s, Mt), h = 0; h < a; h++)
              (l = s[h]),
                pt.test(l.type || '') &&
                  !J.access(l, 'globalEval') &&
                  x.contains(c, l) &&
                  (l.src && 'module' !== (l.type || '').toLowerCase()
                    ? x._evalUrl && x._evalUrl(l.src)
                    : w(l.textContent.replace(Rt, ''), c, l));
        }
        return t;
      }
      function Ht(t, e, n) {
        for (var i, r = e ? x.filter(e, t) : t, o = 0; null != (i = r[o]); o++)
          n || 1 !== i.nodeType || x.cleanData(mt(i)),
            i.parentNode &&
              (n && x.contains(i.ownerDocument, i) && vt(mt(i, 'script')),
              i.parentNode.removeChild(i));
        return t;
      }
      x.extend({
        htmlPrefilter: function(t) {
          return t.replace(It, '<$1></$2>');
        },
        clone: function(t, e, n) {
          var i,
            r,
            o,
            s,
            a,
            l,
            u,
            c = t.cloneNode(!0),
            h = x.contains(t.ownerDocument, t);
          if (!(v.noCloneChecked || (1 !== t.nodeType && 11 !== t.nodeType) || x.isXMLDoc(t)))
            for (s = mt(c), i = 0, r = (o = mt(t)).length; i < r; i++)
              (a = o[i]),
                (l = s[i]),
                void 0,
                'input' === (u = l.nodeName.toLowerCase()) && ft.test(a.type)
                  ? (l.checked = a.checked)
                  : ('input' !== u && 'textarea' !== u) || (l.defaultValue = a.defaultValue);
          if (e)
            if (n)
              for (o = o || mt(t), s = s || mt(c), i = 0, r = o.length; i < r; i++) Vt(o[i], s[i]);
            else Vt(t, c);
          return (s = mt(c, 'script')).length > 0 && vt(s, !h && mt(t, 'script')), c;
        },
        cleanData: function(t) {
          for (var e, n, i, r = x.event.special, o = 0; void 0 !== (n = t[o]); o++)
            if (Y(n)) {
              if ((e = n[J.expando])) {
                if (e.events)
                  for (i in e.events) r[i] ? x.event.remove(n, i) : x.removeEvent(n, i, e.handle);
                n[J.expando] = void 0;
              }
              n[Z.expando] && (n[Z.expando] = void 0);
            }
        },
      }),
        x.fn.extend({
          detach: function(t) {
            return Ht(this, t, !0);
          },
          remove: function(t) {
            return Ht(this, t);
          },
          text: function(t) {
            return $(
              this,
              function(t) {
                return void 0 === t
                  ? x.text(this)
                  : this.empty().each(function() {
                      (1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType) ||
                        (this.textContent = t);
                    });
              },
              null,
              t,
              arguments.length,
            );
          },
          append: function() {
            return jt(this, arguments, function(t) {
              (1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType) ||
                Pt(this, t).appendChild(t);
            });
          },
          prepend: function() {
            return jt(this, arguments, function(t) {
              if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                var e = Pt(this, t);
                e.insertBefore(t, e.firstChild);
              }
            });
          },
          before: function() {
            return jt(this, arguments, function(t) {
              this.parentNode && this.parentNode.insertBefore(t, this);
            });
          },
          after: function() {
            return jt(this, arguments, function(t) {
              this.parentNode && this.parentNode.insertBefore(t, this.nextSibling);
            });
          },
          empty: function() {
            for (var t, e = 0; null != (t = this[e]); e++)
              1 === t.nodeType && (x.cleanData(mt(t, !1)), (t.textContent = ''));
            return this;
          },
          clone: function(t, e) {
            return (
              (t = null != t && t),
              (e = null == e ? t : e),
              this.map(function() {
                return x.clone(this, t, e);
              })
            );
          },
          html: function(t) {
            return $(
              this,
              function(t) {
                var e = this[0] || {},
                  n = 0,
                  i = this.length;
                if (void 0 === t && 1 === e.nodeType) return e.innerHTML;
                if (
                  'string' == typeof t &&
                  !kt.test(t) &&
                  !gt[(dt.exec(t) || ['', ''])[1].toLowerCase()]
                ) {
                  t = x.htmlPrefilter(t);
                  try {
                    for (; n < i; n++)
                      1 === (e = this[n] || {}).nodeType &&
                        (x.cleanData(mt(e, !1)), (e.innerHTML = t));
                    e = 0;
                  } catch (t) {}
                }
                e && this.empty().append(t);
              },
              null,
              t,
              arguments.length,
            );
          },
          replaceWith: function() {
            var t = [];
            return jt(
              this,
              arguments,
              function(e) {
                var n = this.parentNode;
                x.inArray(this, t) < 0 && (x.cleanData(mt(this)), n && n.replaceChild(e, this));
              },
              t,
            );
          },
        }),
        x.each(
          {
            appendTo: 'append',
            prependTo: 'prepend',
            insertBefore: 'before',
            insertAfter: 'after',
            replaceAll: 'replaceWith',
          },
          function(t, e) {
            x.fn[t] = function(t) {
              for (var n, i = [], r = x(t), o = r.length - 1, s = 0; s <= o; s++)
                (n = s === o ? this : this.clone(!0)), x(r[s])[e](n), c.apply(i, n.get());
              return this.pushStack(i);
            };
          },
        );
      var Ft = new RegExp('^(' + it + ')(?!px)[a-z%]+$', 'i'),
        qt = function(t) {
          var e = t.ownerDocument.defaultView;
          return (e && e.opener) || (e = n), e.getComputedStyle(t);
        },
        Bt = new RegExp(ot.join('|'), 'i');
      function Ut(t, e, n) {
        var i,
          r,
          o,
          s,
          a = t.style;
        return (
          (n = n || qt(t)) &&
            ('' !== (s = n.getPropertyValue(e) || n[e]) ||
              x.contains(t.ownerDocument, t) ||
              (s = x.style(t, e)),
            !v.pixelBoxStyles() &&
              Ft.test(s) &&
              Bt.test(e) &&
              ((i = a.width),
              (r = a.minWidth),
              (o = a.maxWidth),
              (a.minWidth = a.maxWidth = a.width = s),
              (s = n.width),
              (a.width = i),
              (a.minWidth = r),
              (a.maxWidth = o))),
          void 0 !== s ? s + '' : s
        );
      }
      function Wt(t, e) {
        return {
          get: function() {
            if (!t()) return (this.get = e).apply(this, arguments);
            delete this.get;
          },
        };
      }
      !(function() {
        function t() {
          if (c) {
            (u.style.cssText =
              'position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0'),
              (c.style.cssText =
                'position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%'),
              Et.appendChild(u).appendChild(c);
            var t = n.getComputedStyle(c);
            (i = '1%' !== t.top),
              (l = 12 === e(t.marginLeft)),
              (c.style.right = '60%'),
              (a = 36 === e(t.right)),
              (r = 36 === e(t.width)),
              (c.style.position = 'absolute'),
              (o = 36 === c.offsetWidth || 'absolute'),
              Et.removeChild(u),
              (c = null);
          }
        }
        function e(t) {
          return Math.round(parseFloat(t));
        }
        var i,
          r,
          o,
          a,
          l,
          u = s.createElement('div'),
          c = s.createElement('div');
        c.style &&
          ((c.style.backgroundClip = 'content-box'),
          (c.cloneNode(!0).style.backgroundClip = ''),
          (v.clearCloneStyle = 'content-box' === c.style.backgroundClip),
          x.extend(v, {
            boxSizingReliable: function() {
              return t(), r;
            },
            pixelBoxStyles: function() {
              return t(), a;
            },
            pixelPosition: function() {
              return t(), i;
            },
            reliableMarginLeft: function() {
              return t(), l;
            },
            scrollboxSize: function() {
              return t(), o;
            },
          }));
      })();
      var $t = /^(none|table(?!-c[ea]).+)/,
        zt = /^--/,
        Kt = { position: 'absolute', visibility: 'hidden', display: 'block' },
        Gt = { letterSpacing: '0', fontWeight: '400' },
        Qt = ['Webkit', 'Moz', 'ms'],
        Yt = s.createElement('div').style;
      function Xt(t) {
        var e = x.cssProps[t];
        return (
          e ||
            (e = x.cssProps[t] =
              (function(t) {
                if (t in Yt) return t;
                for (var e = t[0].toUpperCase() + t.slice(1), n = Qt.length; n--; )
                  if ((t = Qt[n] + e) in Yt) return t;
              })(t) || t),
          e
        );
      }
      function Jt(t, e, n) {
        var i = rt.exec(e);
        return i ? Math.max(0, i[2] - (n || 0)) + (i[3] || 'px') : e;
      }
      function Zt(t, e, n, i, r, o) {
        var s = 'width' === e ? 1 : 0,
          a = 0,
          l = 0;
        if (n === (i ? 'border' : 'content')) return 0;
        for (; s < 4; s += 2)
          'margin' === n && (l += x.css(t, n + ot[s], !0, r)),
            i
              ? ('content' === n && (l -= x.css(t, 'padding' + ot[s], !0, r)),
                'margin' !== n && (l -= x.css(t, 'border' + ot[s] + 'Width', !0, r)))
              : ((l += x.css(t, 'padding' + ot[s], !0, r)),
                'padding' !== n
                  ? (l += x.css(t, 'border' + ot[s] + 'Width', !0, r))
                  : (a += x.css(t, 'border' + ot[s] + 'Width', !0, r)));
        return (
          !i &&
            o >= 0 &&
            (l += Math.max(
              0,
              Math.ceil(t['offset' + e[0].toUpperCase() + e.slice(1)] - o - l - a - 0.5),
            )),
          l
        );
      }
      function te(t, e, n) {
        var i = qt(t),
          r = Ut(t, e, i),
          o = 'border-box' === x.css(t, 'boxSizing', !1, i),
          s = o;
        if (Ft.test(r)) {
          if (!n) return r;
          r = 'auto';
        }
        return (
          (s = s && (v.boxSizingReliable() || r === t.style[e])),
          ('auto' === r || (!parseFloat(r) && 'inline' === x.css(t, 'display', !1, i))) &&
            ((r = t['offset' + e[0].toUpperCase() + e.slice(1)]), (s = !0)),
          (r = parseFloat(r) || 0) + Zt(t, e, n || (o ? 'border' : 'content'), s, i, r) + 'px'
        );
      }
      function ee(t, e, n, i, r) {
        return new ee.prototype.init(t, e, n, i, r);
      }
      x.extend({
        cssHooks: {
          opacity: {
            get: function(t, e) {
              if (e) {
                var n = Ut(t, 'opacity');
                return '' === n ? '1' : n;
              }
            },
          },
        },
        cssNumber: {
          animationIterationCount: !0,
          columnCount: !0,
          fillOpacity: !0,
          flexGrow: !0,
          flexShrink: !0,
          fontWeight: !0,
          lineHeight: !0,
          opacity: !0,
          order: !0,
          orphans: !0,
          widows: !0,
          zIndex: !0,
          zoom: !0,
        },
        cssProps: {},
        style: function(t, e, n, i) {
          if (t && 3 !== t.nodeType && 8 !== t.nodeType && t.style) {
            var r,
              o,
              s,
              a = Q(e),
              l = zt.test(e),
              u = t.style;
            if ((l || (e = Xt(a)), (s = x.cssHooks[e] || x.cssHooks[a]), void 0 === n))
              return s && 'get' in s && void 0 !== (r = s.get(t, !1, i)) ? r : u[e];
            'string' === (o = typeof n) &&
              (r = rt.exec(n)) &&
              r[1] &&
              ((n = lt(t, e, r)), (o = 'number')),
              null != n &&
                n == n &&
                ('number' === o && (n += (r && r[3]) || (x.cssNumber[a] ? '' : 'px')),
                v.clearCloneStyle ||
                  '' !== n ||
                  0 !== e.indexOf('background') ||
                  (u[e] = 'inherit'),
                (s && 'set' in s && void 0 === (n = s.set(t, n, i))) ||
                  (l ? u.setProperty(e, n) : (u[e] = n)));
          }
        },
        css: function(t, e, n, i) {
          var r,
            o,
            s,
            a = Q(e);
          return (
            zt.test(e) || (e = Xt(a)),
            (s = x.cssHooks[e] || x.cssHooks[a]) && 'get' in s && (r = s.get(t, !0, n)),
            void 0 === r && (r = Ut(t, e, i)),
            'normal' === r && e in Gt && (r = Gt[e]),
            '' === n || n ? ((o = parseFloat(r)), !0 === n || isFinite(o) ? o || 0 : r) : r
          );
        },
      }),
        x.each(['height', 'width'], function(t, e) {
          x.cssHooks[e] = {
            get: function(t, n, i) {
              if (n)
                return !$t.test(x.css(t, 'display')) ||
                  (t.getClientRects().length && t.getBoundingClientRect().width)
                  ? te(t, e, i)
                  : at(t, Kt, function() {
                      return te(t, e, i);
                    });
            },
            set: function(t, n, i) {
              var r,
                o = qt(t),
                s = 'border-box' === x.css(t, 'boxSizing', !1, o),
                a = i && Zt(t, e, i, s, o);
              return (
                s &&
                  v.scrollboxSize() === o.position &&
                  (a -= Math.ceil(
                    t['offset' + e[0].toUpperCase() + e.slice(1)] -
                      parseFloat(o[e]) -
                      Zt(t, e, 'border', !1, o) -
                      0.5,
                  )),
                a &&
                  (r = rt.exec(n)) &&
                  'px' !== (r[3] || 'px') &&
                  ((t.style[e] = n), (n = x.css(t, e))),
                Jt(0, n, a)
              );
            },
          };
        }),
        (x.cssHooks.marginLeft = Wt(v.reliableMarginLeft, function(t, e) {
          if (e)
            return (
              (parseFloat(Ut(t, 'marginLeft')) ||
                t.getBoundingClientRect().left -
                  at(t, { marginLeft: 0 }, function() {
                    return t.getBoundingClientRect().left;
                  })) + 'px'
            );
        })),
        x.each({ margin: '', padding: '', border: 'Width' }, function(t, e) {
          (x.cssHooks[t + e] = {
            expand: function(n) {
              for (var i = 0, r = {}, o = 'string' == typeof n ? n.split(' ') : [n]; i < 4; i++)
                r[t + ot[i] + e] = o[i] || o[i - 2] || o[0];
              return r;
            },
          }),
            'margin' !== t && (x.cssHooks[t + e].set = Jt);
        }),
        x.fn.extend({
          css: function(t, e) {
            return $(
              this,
              function(t, e, n) {
                var i,
                  r,
                  o = {},
                  s = 0;
                if (Array.isArray(e)) {
                  for (i = qt(t), r = e.length; s < r; s++) o[e[s]] = x.css(t, e[s], !1, i);
                  return o;
                }
                return void 0 !== n ? x.style(t, e, n) : x.css(t, e);
              },
              t,
              e,
              arguments.length > 1,
            );
          },
        }),
        (x.Tween = ee),
        (ee.prototype = {
          constructor: ee,
          init: function(t, e, n, i, r, o) {
            (this.elem = t),
              (this.prop = n),
              (this.easing = r || x.easing._default),
              (this.options = e),
              (this.start = this.now = this.cur()),
              (this.end = i),
              (this.unit = o || (x.cssNumber[n] ? '' : 'px'));
          },
          cur: function() {
            var t = ee.propHooks[this.prop];
            return t && t.get ? t.get(this) : ee.propHooks._default.get(this);
          },
          run: function(t) {
            var e,
              n = ee.propHooks[this.prop];
            return (
              this.options.duration
                ? (this.pos = e = x.easing[this.easing](
                    t,
                    this.options.duration * t,
                    0,
                    1,
                    this.options.duration,
                  ))
                : (this.pos = e = t),
              (this.now = (this.end - this.start) * e + this.start),
              this.options.step && this.options.step.call(this.elem, this.now, this),
              n && n.set ? n.set(this) : ee.propHooks._default.set(this),
              this
            );
          },
        }),
        (ee.prototype.init.prototype = ee.prototype),
        (ee.propHooks = {
          _default: {
            get: function(t) {
              var e;
              return 1 !== t.elem.nodeType ||
                (null != t.elem[t.prop] && null == t.elem.style[t.prop])
                ? t.elem[t.prop]
                : (e = x.css(t.elem, t.prop, '')) && 'auto' !== e
                ? e
                : 0;
            },
            set: function(t) {
              x.fx.step[t.prop]
                ? x.fx.step[t.prop](t)
                : 1 !== t.elem.nodeType ||
                  (null == t.elem.style[x.cssProps[t.prop]] && !x.cssHooks[t.prop])
                ? (t.elem[t.prop] = t.now)
                : x.style(t.elem, t.prop, t.now + t.unit);
            },
          },
        }),
        (ee.propHooks.scrollTop = ee.propHooks.scrollLeft = {
          set: function(t) {
            t.elem.nodeType && t.elem.parentNode && (t.elem[t.prop] = t.now);
          },
        }),
        (x.easing = {
          linear: function(t) {
            return t;
          },
          swing: function(t) {
            return 0.5 - Math.cos(t * Math.PI) / 2;
          },
          _default: 'swing',
        }),
        (x.fx = ee.prototype.init),
        (x.fx.step = {});
      var ne,
        ie,
        re = /^(?:toggle|show|hide)$/,
        oe = /queueHooks$/;
      function se() {
        ie &&
          (!1 === s.hidden && n.requestAnimationFrame
            ? n.requestAnimationFrame(se)
            : n.setTimeout(se, x.fx.interval),
          x.fx.tick());
      }
      function ae() {
        return (
          n.setTimeout(function() {
            ne = void 0;
          }),
          (ne = Date.now())
        );
      }
      function le(t, e) {
        var n,
          i = 0,
          r = { height: t };
        for (e = e ? 1 : 0; i < 4; i += 2 - e) r['margin' + (n = ot[i])] = r['padding' + n] = t;
        return e && (r.opacity = r.width = t), r;
      }
      function ue(t, e, n) {
        for (
          var i, r = (ce.tweeners[e] || []).concat(ce.tweeners['*']), o = 0, s = r.length;
          o < s;
          o++
        )
          if ((i = r[o].call(n, e, t))) return i;
      }
      function ce(t, e, n) {
        var i,
          r,
          o = 0,
          s = ce.prefilters.length,
          a = x.Deferred().always(function() {
            delete l.elem;
          }),
          l = function() {
            if (r) return !1;
            for (
              var e = ne || ae(),
                n = Math.max(0, u.startTime + u.duration - e),
                i = 1 - (n / u.duration || 0),
                o = 0,
                s = u.tweens.length;
              o < s;
              o++
            )
              u.tweens[o].run(i);
            return (
              a.notifyWith(t, [u, i, n]),
              i < 1 && s ? n : (s || a.notifyWith(t, [u, 1, 0]), a.resolveWith(t, [u]), !1)
            );
          },
          u = a.promise({
            elem: t,
            props: x.extend({}, e),
            opts: x.extend(!0, { specialEasing: {}, easing: x.easing._default }, n),
            originalProperties: e,
            originalOptions: n,
            startTime: ne || ae(),
            duration: n.duration,
            tweens: [],
            createTween: function(e, n) {
              var i = x.Tween(t, u.opts, e, n, u.opts.specialEasing[e] || u.opts.easing);
              return u.tweens.push(i), i;
            },
            stop: function(e) {
              var n = 0,
                i = e ? u.tweens.length : 0;
              if (r) return this;
              for (r = !0; n < i; n++) u.tweens[n].run(1);
              return (
                e
                  ? (a.notifyWith(t, [u, 1, 0]), a.resolveWith(t, [u, e]))
                  : a.rejectWith(t, [u, e]),
                this
              );
            },
          }),
          c = u.props;
        for (
          !(function(t, e) {
            var n, i, r, o, s;
            for (n in t)
              if (
                ((r = e[(i = Q(n))]),
                (o = t[n]),
                Array.isArray(o) && ((r = o[1]), (o = t[n] = o[0])),
                n !== i && ((t[i] = o), delete t[n]),
                (s = x.cssHooks[i]) && ('expand' in s))
              )
                for (n in ((o = s.expand(o)), delete t[i], o))
                  (n in t) || ((t[n] = o[n]), (e[n] = r));
              else e[i] = r;
          })(c, u.opts.specialEasing);
          o < s;
          o++
        )
          if ((i = ce.prefilters[o].call(u, t, c, u.opts)))
            return y(i.stop) && (x._queueHooks(u.elem, u.opts.queue).stop = i.stop.bind(i)), i;
        return (
          x.map(c, ue, u),
          y(u.opts.start) && u.opts.start.call(t, u),
          u
            .progress(u.opts.progress)
            .done(u.opts.done, u.opts.complete)
            .fail(u.opts.fail)
            .always(u.opts.always),
          x.fx.timer(x.extend(l, { elem: t, anim: u, queue: u.opts.queue })),
          u
        );
      }
      (x.Animation = x.extend(ce, {
        tweeners: {
          '*': [
            function(t, e) {
              var n = this.createTween(t, e);
              return lt(n.elem, t, rt.exec(e), n), n;
            },
          ],
        },
        tweener: function(t, e) {
          y(t) ? ((e = t), (t = ['*'])) : (t = t.match(j));
          for (var n, i = 0, r = t.length; i < r; i++)
            (n = t[i]), (ce.tweeners[n] = ce.tweeners[n] || []), ce.tweeners[n].unshift(e);
        },
        prefilters: [
          function(t, e, n) {
            var i,
              r,
              o,
              s,
              a,
              l,
              u,
              c,
              h = 'width' in e || 'height' in e,
              f = this,
              d = {},
              p = t.style,
              g = t.nodeType && st(t),
              m = J.get(t, 'fxshow');
            for (i in (n.queue ||
              (null == (s = x._queueHooks(t, 'fx')).unqueued &&
                ((s.unqueued = 0),
                (a = s.empty.fire),
                (s.empty.fire = function() {
                  s.unqueued || a();
                })),
              s.unqueued++,
              f.always(function() {
                f.always(function() {
                  s.unqueued--, x.queue(t, 'fx').length || s.empty.fire();
                });
              })),
            e))
              if (((r = e[i]), re.test(r))) {
                if ((delete e[i], (o = o || 'toggle' === r), r === (g ? 'hide' : 'show'))) {
                  if ('show' !== r || !m || void 0 === m[i]) continue;
                  g = !0;
                }
                d[i] = (m && m[i]) || x.style(t, i);
              }
            if ((l = !x.isEmptyObject(e)) || !x.isEmptyObject(d))
              for (i in (h &&
                1 === t.nodeType &&
                ((n.overflow = [p.overflow, p.overflowX, p.overflowY]),
                null == (u = m && m.display) && (u = J.get(t, 'display')),
                'none' === (c = x.css(t, 'display')) &&
                  (u
                    ? (c = u)
                    : (ht([t], !0),
                      (u = t.style.display || u),
                      (c = x.css(t, 'display')),
                      ht([t]))),
                ('inline' === c || ('inline-block' === c && null != u)) &&
                  'none' === x.css(t, 'float') &&
                  (l ||
                    (f.done(function() {
                      p.display = u;
                    }),
                    null == u && ((c = p.display), (u = 'none' === c ? '' : c))),
                  (p.display = 'inline-block'))),
              n.overflow &&
                ((p.overflow = 'hidden'),
                f.always(function() {
                  (p.overflow = n.overflow[0]),
                    (p.overflowX = n.overflow[1]),
                    (p.overflowY = n.overflow[2]);
                })),
              (l = !1),
              d))
                l ||
                  (m
                    ? 'hidden' in m && (g = m.hidden)
                    : (m = J.access(t, 'fxshow', { display: u })),
                  o && (m.hidden = !g),
                  g && ht([t], !0),
                  f.done(function() {
                    for (i in (g || ht([t]), J.remove(t, 'fxshow'), d)) x.style(t, i, d[i]);
                  })),
                  (l = ue(g ? m[i] : 0, i, f)),
                  i in m || ((m[i] = l.start), g && ((l.end = l.start), (l.start = 0)));
          },
        ],
        prefilter: function(t, e) {
          e ? ce.prefilters.unshift(t) : ce.prefilters.push(t);
        },
      })),
        (x.speed = function(t, e, n) {
          var i =
            t && 'object' == typeof t
              ? x.extend({}, t)
              : {
                  complete: n || (!n && e) || (y(t) && t),
                  duration: t,
                  easing: (n && e) || (e && !y(e) && e),
                };
          return (
            x.fx.off
              ? (i.duration = 0)
              : 'number' != typeof i.duration &&
                (i.duration in x.fx.speeds
                  ? (i.duration = x.fx.speeds[i.duration])
                  : (i.duration = x.fx.speeds._default)),
            (null != i.queue && !0 !== i.queue) || (i.queue = 'fx'),
            (i.old = i.complete),
            (i.complete = function() {
              y(i.old) && i.old.call(this), i.queue && x.dequeue(this, i.queue);
            }),
            i
          );
        }),
        x.fn.extend({
          fadeTo: function(t, e, n, i) {
            return this.filter(st)
              .css('opacity', 0)
              .show()
              .end()
              .animate({ opacity: e }, t, n, i);
          },
          animate: function(t, e, n, i) {
            var r = x.isEmptyObject(t),
              o = x.speed(e, n, i),
              s = function() {
                var e = ce(this, x.extend({}, t), o);
                (r || J.get(this, 'finish')) && e.stop(!0);
              };
            return (s.finish = s), r || !1 === o.queue ? this.each(s) : this.queue(o.queue, s);
          },
          stop: function(t, e, n) {
            var i = function(t) {
              var e = t.stop;
              delete t.stop, e(n);
            };
            return (
              'string' != typeof t && ((n = e), (e = t), (t = void 0)),
              e && !1 !== t && this.queue(t || 'fx', []),
              this.each(function() {
                var e = !0,
                  r = null != t && t + 'queueHooks',
                  o = x.timers,
                  s = J.get(this);
                if (r) s[r] && s[r].stop && i(s[r]);
                else for (r in s) s[r] && s[r].stop && oe.test(r) && i(s[r]);
                for (r = o.length; r--; )
                  o[r].elem !== this ||
                    (null != t && o[r].queue !== t) ||
                    (o[r].anim.stop(n), (e = !1), o.splice(r, 1));
                (!e && n) || x.dequeue(this, t);
              })
            );
          },
          finish: function(t) {
            return (
              !1 !== t && (t = t || 'fx'),
              this.each(function() {
                var e,
                  n = J.get(this),
                  i = n[t + 'queue'],
                  r = n[t + 'queueHooks'],
                  o = x.timers,
                  s = i ? i.length : 0;
                for (
                  n.finish = !0,
                    x.queue(this, t, []),
                    r && r.stop && r.stop.call(this, !0),
                    e = o.length;
                  e--;

                )
                  o[e].elem === this && o[e].queue === t && (o[e].anim.stop(!0), o.splice(e, 1));
                for (e = 0; e < s; e++) i[e] && i[e].finish && i[e].finish.call(this);
                delete n.finish;
              })
            );
          },
        }),
        x.each(['toggle', 'show', 'hide'], function(t, e) {
          var n = x.fn[e];
          x.fn[e] = function(t, i, r) {
            return null == t || 'boolean' == typeof t
              ? n.apply(this, arguments)
              : this.animate(le(e, !0), t, i, r);
          };
        }),
        x.each(
          {
            slideDown: le('show'),
            slideUp: le('hide'),
            slideToggle: le('toggle'),
            fadeIn: { opacity: 'show' },
            fadeOut: { opacity: 'hide' },
            fadeToggle: { opacity: 'toggle' },
          },
          function(t, e) {
            x.fn[t] = function(t, n, i) {
              return this.animate(e, t, n, i);
            };
          },
        ),
        (x.timers = []),
        (x.fx.tick = function() {
          var t,
            e = 0,
            n = x.timers;
          for (ne = Date.now(); e < n.length; e++) (t = n[e])() || n[e] !== t || n.splice(e--, 1);
          n.length || x.fx.stop(), (ne = void 0);
        }),
        (x.fx.timer = function(t) {
          x.timers.push(t), x.fx.start();
        }),
        (x.fx.interval = 13),
        (x.fx.start = function() {
          ie || ((ie = !0), se());
        }),
        (x.fx.stop = function() {
          ie = null;
        }),
        (x.fx.speeds = { slow: 600, fast: 200, _default: 400 }),
        (x.fn.delay = function(t, e) {
          return (
            (t = (x.fx && x.fx.speeds[t]) || t),
            (e = e || 'fx'),
            this.queue(e, function(e, i) {
              var r = n.setTimeout(e, t);
              i.stop = function() {
                n.clearTimeout(r);
              };
            })
          );
        }),
        (function() {
          var t = s.createElement('input'),
            e = s.createElement('select').appendChild(s.createElement('option'));
          (t.type = 'checkbox'),
            (v.checkOn = '' !== t.value),
            (v.optSelected = e.selected),
            ((t = s.createElement('input')).value = 't'),
            (t.type = 'radio'),
            (v.radioValue = 't' === t.value);
        })();
      var he,
        fe = x.expr.attrHandle;
      x.fn.extend({
        attr: function(t, e) {
          return $(this, x.attr, t, e, arguments.length > 1);
        },
        removeAttr: function(t) {
          return this.each(function() {
            x.removeAttr(this, t);
          });
        },
      }),
        x.extend({
          attr: function(t, e, n) {
            var i,
              r,
              o = t.nodeType;
            if (3 !== o && 8 !== o && 2 !== o)
              return void 0 === t.getAttribute
                ? x.prop(t, e, n)
                : ((1 === o && x.isXMLDoc(t)) ||
                    (r = x.attrHooks[e.toLowerCase()] || (x.expr.match.bool.test(e) ? he : void 0)),
                  void 0 !== n
                    ? null === n
                      ? void x.removeAttr(t, e)
                      : r && 'set' in r && void 0 !== (i = r.set(t, n, e))
                      ? i
                      : (t.setAttribute(e, n + ''), n)
                    : r && 'get' in r && null !== (i = r.get(t, e))
                    ? i
                    : null == (i = x.find.attr(t, e))
                    ? void 0
                    : i);
          },
          attrHooks: {
            type: {
              set: function(t, e) {
                if (!v.radioValue && 'radio' === e && I(t, 'input')) {
                  var n = t.value;
                  return t.setAttribute('type', e), n && (t.value = n), e;
                }
              },
            },
          },
          removeAttr: function(t, e) {
            var n,
              i = 0,
              r = e && e.match(j);
            if (r && 1 === t.nodeType) for (; (n = r[i++]); ) t.removeAttribute(n);
          },
        }),
        (he = {
          set: function(t, e, n) {
            return !1 === e ? x.removeAttr(t, n) : t.setAttribute(n, n), n;
          },
        }),
        x.each(x.expr.match.bool.source.match(/\w+/g), function(t, e) {
          var n = fe[e] || x.find.attr;
          fe[e] = function(t, e, i) {
            var r,
              o,
              s = e.toLowerCase();
            return (
              i || ((o = fe[s]), (fe[s] = r), (r = null != n(t, e, i) ? s : null), (fe[s] = o)), r
            );
          };
        });
      var de = /^(?:input|select|textarea|button)$/i,
        pe = /^(?:a|area)$/i;
      function ge(t) {
        return (t.match(j) || []).join(' ');
      }
      function me(t) {
        return (t.getAttribute && t.getAttribute('class')) || '';
      }
      function ve(t) {
        return Array.isArray(t) ? t : ('string' == typeof t && t.match(j)) || [];
      }
      x.fn.extend({
        prop: function(t, e) {
          return $(this, x.prop, t, e, arguments.length > 1);
        },
        removeProp: function(t) {
          return this.each(function() {
            delete this[x.propFix[t] || t];
          });
        },
      }),
        x.extend({
          prop: function(t, e, n) {
            var i,
              r,
              o = t.nodeType;
            if (3 !== o && 8 !== o && 2 !== o)
              return (
                (1 === o && x.isXMLDoc(t)) || ((e = x.propFix[e] || e), (r = x.propHooks[e])),
                void 0 !== n
                  ? r && 'set' in r && void 0 !== (i = r.set(t, n, e))
                    ? i
                    : (t[e] = n)
                  : r && 'get' in r && null !== (i = r.get(t, e))
                  ? i
                  : t[e]
              );
          },
          propHooks: {
            tabIndex: {
              get: function(t) {
                var e = x.find.attr(t, 'tabindex');
                return e
                  ? parseInt(e, 10)
                  : de.test(t.nodeName) || (pe.test(t.nodeName) && t.href)
                  ? 0
                  : -1;
              },
            },
          },
          propFix: { for: 'htmlFor', class: 'className' },
        }),
        v.optSelected ||
          (x.propHooks.selected = {
            get: function(t) {
              var e = t.parentNode;
              return e && e.parentNode && e.parentNode.selectedIndex, null;
            },
            set: function(t) {
              var e = t.parentNode;
              e && (e.selectedIndex, e.parentNode && e.parentNode.selectedIndex);
            },
          }),
        x.each(
          [
            'tabIndex',
            'readOnly',
            'maxLength',
            'cellSpacing',
            'cellPadding',
            'rowSpan',
            'colSpan',
            'useMap',
            'frameBorder',
            'contentEditable',
          ],
          function() {
            x.propFix[this.toLowerCase()] = this;
          },
        ),
        x.fn.extend({
          addClass: function(t) {
            var e,
              n,
              i,
              r,
              o,
              s,
              a,
              l = 0;
            if (y(t))
              return this.each(function(e) {
                x(this).addClass(t.call(this, e, me(this)));
              });
            if ((e = ve(t)).length)
              for (; (n = this[l++]); )
                if (((r = me(n)), (i = 1 === n.nodeType && ' ' + ge(r) + ' '))) {
                  for (s = 0; (o = e[s++]); ) i.indexOf(' ' + o + ' ') < 0 && (i += o + ' ');
                  r !== (a = ge(i)) && n.setAttribute('class', a);
                }
            return this;
          },
          removeClass: function(t) {
            var e,
              n,
              i,
              r,
              o,
              s,
              a,
              l = 0;
            if (y(t))
              return this.each(function(e) {
                x(this).removeClass(t.call(this, e, me(this)));
              });
            if (!arguments.length) return this.attr('class', '');
            if ((e = ve(t)).length)
              for (; (n = this[l++]); )
                if (((r = me(n)), (i = 1 === n.nodeType && ' ' + ge(r) + ' '))) {
                  for (s = 0; (o = e[s++]); )
                    for (; i.indexOf(' ' + o + ' ') > -1; ) i = i.replace(' ' + o + ' ', ' ');
                  r !== (a = ge(i)) && n.setAttribute('class', a);
                }
            return this;
          },
          toggleClass: function(t, e) {
            var n = typeof t,
              i = 'string' === n || Array.isArray(t);
            return 'boolean' == typeof e && i
              ? e
                ? this.addClass(t)
                : this.removeClass(t)
              : y(t)
              ? this.each(function(n) {
                  x(this).toggleClass(t.call(this, n, me(this), e), e);
                })
              : this.each(function() {
                  var e, r, o, s;
                  if (i)
                    for (r = 0, o = x(this), s = ve(t); (e = s[r++]); )
                      o.hasClass(e) ? o.removeClass(e) : o.addClass(e);
                  else
                    (void 0 !== t && 'boolean' !== n) ||
                      ((e = me(this)) && J.set(this, '__className__', e),
                      this.setAttribute &&
                        this.setAttribute(
                          'class',
                          e || !1 === t ? '' : J.get(this, '__className__') || '',
                        ));
                });
          },
          hasClass: function(t) {
            var e,
              n,
              i = 0;
            for (e = ' ' + t + ' '; (n = this[i++]); )
              if (1 === n.nodeType && (' ' + ge(me(n)) + ' ').indexOf(e) > -1) return !0;
            return !1;
          },
        });
      var ye = /\r/g;
      x.fn.extend({
        val: function(t) {
          var e,
            n,
            i,
            r = this[0];
          return arguments.length
            ? ((i = y(t)),
              this.each(function(n) {
                var r;
                1 === this.nodeType &&
                  (null == (r = i ? t.call(this, n, x(this).val()) : t)
                    ? (r = '')
                    : 'number' == typeof r
                    ? (r += '')
                    : Array.isArray(r) &&
                      (r = x.map(r, function(t) {
                        return null == t ? '' : t + '';
                      })),
                  ((e = x.valHooks[this.type] || x.valHooks[this.nodeName.toLowerCase()]) &&
                    'set' in e &&
                    void 0 !== e.set(this, r, 'value')) ||
                    (this.value = r));
              }))
            : r
            ? (e = x.valHooks[r.type] || x.valHooks[r.nodeName.toLowerCase()]) &&
              'get' in e &&
              void 0 !== (n = e.get(r, 'value'))
              ? n
              : 'string' == typeof (n = r.value)
              ? n.replace(ye, '')
              : null == n
              ? ''
              : n
            : void 0;
        },
      }),
        x.extend({
          valHooks: {
            option: {
              get: function(t) {
                var e = x.find.attr(t, 'value');
                return null != e ? e : ge(x.text(t));
              },
            },
            select: {
              get: function(t) {
                var e,
                  n,
                  i,
                  r = t.options,
                  o = t.selectedIndex,
                  s = 'select-one' === t.type,
                  a = s ? null : [],
                  l = s ? o + 1 : r.length;
                for (i = o < 0 ? l : s ? o : 0; i < l; i++)
                  if (
                    ((n = r[i]).selected || i === o) &&
                    !n.disabled &&
                    (!n.parentNode.disabled || !I(n.parentNode, 'optgroup'))
                  ) {
                    if (((e = x(n).val()), s)) return e;
                    a.push(e);
                  }
                return a;
              },
              set: function(t, e) {
                for (var n, i, r = t.options, o = x.makeArray(e), s = r.length; s--; )
                  ((i = r[s]).selected = x.inArray(x.valHooks.option.get(i), o) > -1) && (n = !0);
                return n || (t.selectedIndex = -1), o;
              },
            },
          },
        }),
        x.each(['radio', 'checkbox'], function() {
          (x.valHooks[this] = {
            set: function(t, e) {
              if (Array.isArray(e)) return (t.checked = x.inArray(x(t).val(), e) > -1);
            },
          }),
            v.checkOn ||
              (x.valHooks[this].get = function(t) {
                return null === t.getAttribute('value') ? 'on' : t.value;
              });
        }),
        (v.focusin = 'onfocusin' in n);
      var _e = /^(?:focusinfocus|focusoutblur)$/,
        be = function(t) {
          t.stopPropagation();
        };
      x.extend(x.event, {
        trigger: function(t, e, i, r) {
          var o,
            a,
            l,
            u,
            c,
            h,
            f,
            d,
            g = [i || s],
            m = p.call(t, 'type') ? t.type : t,
            v = p.call(t, 'namespace') ? t.namespace.split('.') : [];
          if (
            ((a = d = l = i = i || s),
            3 !== i.nodeType &&
              8 !== i.nodeType &&
              !_e.test(m + x.event.triggered) &&
              (m.indexOf('.') > -1 && ((m = (v = m.split('.')).shift()), v.sort()),
              (c = m.indexOf(':') < 0 && 'on' + m),
              ((t = t[x.expando] ? t : new x.Event(m, 'object' == typeof t && t)).isTrigger = r
                ? 2
                : 3),
              (t.namespace = v.join('.')),
              (t.rnamespace = t.namespace
                ? new RegExp('(^|\\.)' + v.join('\\.(?:.*\\.|)') + '(\\.|$)')
                : null),
              (t.result = void 0),
              t.target || (t.target = i),
              (e = null == e ? [t] : x.makeArray(e, [t])),
              (f = x.event.special[m] || {}),
              r || !f.trigger || !1 !== f.trigger.apply(i, e)))
          ) {
            if (!r && !f.noBubble && !_(i)) {
              for (
                u = f.delegateType || m, _e.test(u + m) || (a = a.parentNode);
                a;
                a = a.parentNode
              )
                g.push(a), (l = a);
              l === (i.ownerDocument || s) && g.push(l.defaultView || l.parentWindow || n);
            }
            for (o = 0; (a = g[o++]) && !t.isPropagationStopped(); )
              (d = a),
                (t.type = o > 1 ? u : f.bindType || m),
                (h = (J.get(a, 'events') || {})[t.type] && J.get(a, 'handle')) && h.apply(a, e),
                (h = c && a[c]) &&
                  h.apply &&
                  Y(a) &&
                  ((t.result = h.apply(a, e)), !1 === t.result && t.preventDefault());
            return (
              (t.type = m),
              r ||
                t.isDefaultPrevented() ||
                (f._default && !1 !== f._default.apply(g.pop(), e)) ||
                !Y(i) ||
                (c &&
                  y(i[m]) &&
                  !_(i) &&
                  ((l = i[c]) && (i[c] = null),
                  (x.event.triggered = m),
                  t.isPropagationStopped() && d.addEventListener(m, be),
                  i[m](),
                  t.isPropagationStopped() && d.removeEventListener(m, be),
                  (x.event.triggered = void 0),
                  l && (i[c] = l))),
              t.result
            );
          }
        },
        simulate: function(t, e, n) {
          var i = x.extend(new x.Event(), n, { type: t, isSimulated: !0 });
          x.event.trigger(i, null, e);
        },
      }),
        x.fn.extend({
          trigger: function(t, e) {
            return this.each(function() {
              x.event.trigger(t, e, this);
            });
          },
          triggerHandler: function(t, e) {
            var n = this[0];
            if (n) return x.event.trigger(t, e, n, !0);
          },
        }),
        v.focusin ||
          x.each({ focus: 'focusin', blur: 'focusout' }, function(t, e) {
            var n = function(t) {
              x.event.simulate(e, t.target, x.event.fix(t));
            };
            x.event.special[e] = {
              setup: function() {
                var i = this.ownerDocument || this,
                  r = J.access(i, e);
                r || i.addEventListener(t, n, !0), J.access(i, e, (r || 0) + 1);
              },
              teardown: function() {
                var i = this.ownerDocument || this,
                  r = J.access(i, e) - 1;
                r ? J.access(i, e, r) : (i.removeEventListener(t, n, !0), J.remove(i, e));
              },
            };
          });
      var we = n.location,
        Ee = Date.now(),
        xe = /\?/;
      x.parseXML = function(t) {
        var e;
        if (!t || 'string' != typeof t) return null;
        try {
          e = new n.DOMParser().parseFromString(t, 'text/xml');
        } catch (t) {
          e = void 0;
        }
        return (
          (e && !e.getElementsByTagName('parsererror').length) || x.error('Invalid XML: ' + t), e
        );
      };
      var Te = /\[\]$/,
        Ce = /\r?\n/g,
        Se = /^(?:submit|button|image|reset|file)$/i,
        Ae = /^(?:input|select|textarea|keygen)/i;
      function Oe(t, e, n, i) {
        var r;
        if (Array.isArray(e))
          x.each(e, function(e, r) {
            n || Te.test(t)
              ? i(t, r)
              : Oe(t + '[' + ('object' == typeof r && null != r ? e : '') + ']', r, n, i);
          });
        else if (n || 'object' !== E(e)) i(t, e);
        else for (r in e) Oe(t + '[' + r + ']', e[r], n, i);
      }
      (x.param = function(t, e) {
        var n,
          i = [],
          r = function(t, e) {
            var n = y(e) ? e() : e;
            i[i.length] = encodeURIComponent(t) + '=' + encodeURIComponent(null == n ? '' : n);
          };
        if (Array.isArray(t) || (t.jquery && !x.isPlainObject(t)))
          x.each(t, function() {
            r(this.name, this.value);
          });
        else for (n in t) Oe(n, t[n], e, r);
        return i.join('&');
      }),
        x.fn.extend({
          serialize: function() {
            return x.param(this.serializeArray());
          },
          serializeArray: function() {
            return this.map(function() {
              var t = x.prop(this, 'elements');
              return t ? x.makeArray(t) : this;
            })
              .filter(function() {
                var t = this.type;
                return (
                  this.name &&
                  !x(this).is(':disabled') &&
                  Ae.test(this.nodeName) &&
                  !Se.test(t) &&
                  (this.checked || !ft.test(t))
                );
              })
              .map(function(t, e) {
                var n = x(this).val();
                return null == n
                  ? null
                  : Array.isArray(n)
                  ? x.map(n, function(t) {
                      return { name: e.name, value: t.replace(Ce, '\r\n') };
                    })
                  : { name: e.name, value: n.replace(Ce, '\r\n') };
              })
              .get();
          },
        });
      var De = /%20/g,
        Ie = /#.*$/,
        ke = /([?&])_=[^&]*/,
        Ne = /^(.*?):[ \t]*([^\r\n]*)$/gm,
        Re = /^(?:GET|HEAD)$/,
        Pe = /^\/\//,
        Le = {},
        Me = {},
        Ve = '*/'.concat('*'),
        je = s.createElement('a');
      function He(t) {
        return function(e, n) {
          'string' != typeof e && ((n = e), (e = '*'));
          var i,
            r = 0,
            o = e.toLowerCase().match(j) || [];
          if (y(n))
            for (; (i = o[r++]); )
              '+' === i[0]
                ? ((i = i.slice(1) || '*'), (t[i] = t[i] || []).unshift(n))
                : (t[i] = t[i] || []).push(n);
        };
      }
      function Fe(t, e, n, i) {
        var r = {},
          o = t === Me;
        function s(a) {
          var l;
          return (
            (r[a] = !0),
            x.each(t[a] || [], function(t, a) {
              var u = a(e, n, i);
              return 'string' != typeof u || o || r[u]
                ? o
                  ? !(l = u)
                  : void 0
                : (e.dataTypes.unshift(u), s(u), !1);
            }),
            l
          );
        }
        return s(e.dataTypes[0]) || (!r['*'] && s('*'));
      }
      function qe(t, e) {
        var n,
          i,
          r = x.ajaxSettings.flatOptions || {};
        for (n in e) void 0 !== e[n] && ((r[n] ? t : i || (i = {}))[n] = e[n]);
        return i && x.extend(!0, t, i), t;
      }
      (je.href = we.href),
        x.extend({
          active: 0,
          lastModified: {},
          etag: {},
          ajaxSettings: {
            url: we.href,
            type: 'GET',
            isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(we.protocol),
            global: !0,
            processData: !0,
            async: !0,
            contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
            accepts: {
              '*': Ve,
              text: 'text/plain',
              html: 'text/html',
              xml: 'application/xml, text/xml',
              json: 'application/json, text/javascript',
            },
            contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ },
            responseFields: { xml: 'responseXML', text: 'responseText', json: 'responseJSON' },
            converters: {
              '* text': String,
              'text html': !0,
              'text json': JSON.parse,
              'text xml': x.parseXML,
            },
            flatOptions: { url: !0, context: !0 },
          },
          ajaxSetup: function(t, e) {
            return e ? qe(qe(t, x.ajaxSettings), e) : qe(x.ajaxSettings, t);
          },
          ajaxPrefilter: He(Le),
          ajaxTransport: He(Me),
          ajax: function(t, e) {
            'object' == typeof t && ((e = t), (t = void 0)), (e = e || {});
            var i,
              r,
              o,
              a,
              l,
              u,
              c,
              h,
              f,
              d,
              p = x.ajaxSetup({}, e),
              g = p.context || p,
              m = p.context && (g.nodeType || g.jquery) ? x(g) : x.event,
              v = x.Deferred(),
              y = x.Callbacks('once memory'),
              _ = p.statusCode || {},
              b = {},
              w = {},
              E = 'canceled',
              T = {
                readyState: 0,
                getResponseHeader: function(t) {
                  var e;
                  if (c) {
                    if (!a) for (a = {}; (e = Ne.exec(o)); ) a[e[1].toLowerCase()] = e[2];
                    e = a[t.toLowerCase()];
                  }
                  return null == e ? null : e;
                },
                getAllResponseHeaders: function() {
                  return c ? o : null;
                },
                setRequestHeader: function(t, e) {
                  return (
                    null == c && ((t = w[t.toLowerCase()] = w[t.toLowerCase()] || t), (b[t] = e)),
                    this
                  );
                },
                overrideMimeType: function(t) {
                  return null == c && (p.mimeType = t), this;
                },
                statusCode: function(t) {
                  var e;
                  if (t)
                    if (c) T.always(t[T.status]);
                    else for (e in t) _[e] = [_[e], t[e]];
                  return this;
                },
                abort: function(t) {
                  var e = t || E;
                  return i && i.abort(e), C(0, e), this;
                },
              };
            if (
              (v.promise(T),
              (p.url = ((t || p.url || we.href) + '').replace(Pe, we.protocol + '//')),
              (p.type = e.method || e.type || p.method || p.type),
              (p.dataTypes = (p.dataType || '*').toLowerCase().match(j) || ['']),
              null == p.crossDomain)
            ) {
              u = s.createElement('a');
              try {
                (u.href = p.url),
                  (u.href = u.href),
                  (p.crossDomain = je.protocol + '//' + je.host != u.protocol + '//' + u.host);
              } catch (t) {
                p.crossDomain = !0;
              }
            }
            if (
              (p.data &&
                p.processData &&
                'string' != typeof p.data &&
                (p.data = x.param(p.data, p.traditional)),
              Fe(Le, p, e, T),
              c)
            )
              return T;
            for (f in ((h = x.event && p.global) && 0 == x.active++ && x.event.trigger('ajaxStart'),
            (p.type = p.type.toUpperCase()),
            (p.hasContent = !Re.test(p.type)),
            (r = p.url.replace(Ie, '')),
            p.hasContent
              ? p.data &&
                p.processData &&
                0 === (p.contentType || '').indexOf('application/x-www-form-urlencoded') &&
                (p.data = p.data.replace(De, '+'))
              : ((d = p.url.slice(r.length)),
                p.data &&
                  (p.processData || 'string' == typeof p.data) &&
                  ((r += (xe.test(r) ? '&' : '?') + p.data), delete p.data),
                !1 === p.cache &&
                  ((r = r.replace(ke, '$1')), (d = (xe.test(r) ? '&' : '?') + '_=' + Ee++ + d)),
                (p.url = r + d)),
            p.ifModified &&
              (x.lastModified[r] && T.setRequestHeader('If-Modified-Since', x.lastModified[r]),
              x.etag[r] && T.setRequestHeader('If-None-Match', x.etag[r])),
            ((p.data && p.hasContent && !1 !== p.contentType) || e.contentType) &&
              T.setRequestHeader('Content-Type', p.contentType),
            T.setRequestHeader(
              'Accept',
              p.dataTypes[0] && p.accepts[p.dataTypes[0]]
                ? p.accepts[p.dataTypes[0]] + ('*' !== p.dataTypes[0] ? ', ' + Ve + '; q=0.01' : '')
                : p.accepts['*'],
            ),
            p.headers))
              T.setRequestHeader(f, p.headers[f]);
            if (p.beforeSend && (!1 === p.beforeSend.call(g, T, p) || c)) return T.abort();
            if (
              ((E = 'abort'),
              y.add(p.complete),
              T.done(p.success),
              T.fail(p.error),
              (i = Fe(Me, p, e, T)))
            ) {
              if (((T.readyState = 1), h && m.trigger('ajaxSend', [T, p]), c)) return T;
              p.async &&
                p.timeout > 0 &&
                (l = n.setTimeout(function() {
                  T.abort('timeout');
                }, p.timeout));
              try {
                (c = !1), i.send(b, C);
              } catch (t) {
                if (c) throw t;
                C(-1, t);
              }
            } else C(-1, 'No Transport');
            function C(t, e, s, a) {
              var u,
                f,
                d,
                b,
                w,
                E = e;
              c ||
                ((c = !0),
                l && n.clearTimeout(l),
                (i = void 0),
                (o = a || ''),
                (T.readyState = t > 0 ? 4 : 0),
                (u = (t >= 200 && t < 300) || 304 === t),
                s &&
                  (b = (function(t, e, n) {
                    for (var i, r, o, s, a = t.contents, l = t.dataTypes; '*' === l[0]; )
                      l.shift(),
                        void 0 === i && (i = t.mimeType || e.getResponseHeader('Content-Type'));
                    if (i)
                      for (r in a)
                        if (a[r] && a[r].test(i)) {
                          l.unshift(r);
                          break;
                        }
                    if (l[0] in n) o = l[0];
                    else {
                      for (r in n) {
                        if (!l[0] || t.converters[r + ' ' + l[0]]) {
                          o = r;
                          break;
                        }
                        s || (s = r);
                      }
                      o = o || s;
                    }
                    if (o) return o !== l[0] && l.unshift(o), n[o];
                  })(p, T, s)),
                (b = (function(t, e, n, i) {
                  var r,
                    o,
                    s,
                    a,
                    l,
                    u = {},
                    c = t.dataTypes.slice();
                  if (c[1]) for (s in t.converters) u[s.toLowerCase()] = t.converters[s];
                  for (o = c.shift(); o; )
                    if (
                      (t.responseFields[o] && (n[t.responseFields[o]] = e),
                      !l && i && t.dataFilter && (e = t.dataFilter(e, t.dataType)),
                      (l = o),
                      (o = c.shift()))
                    )
                      if ('*' === o) o = l;
                      else if ('*' !== l && l !== o) {
                        if (!(s = u[l + ' ' + o] || u['* ' + o]))
                          for (r in u)
                            if (
                              (a = r.split(' '))[1] === o &&
                              (s = u[l + ' ' + a[0]] || u['* ' + a[0]])
                            ) {
                              !0 === s ? (s = u[r]) : !0 !== u[r] && ((o = a[0]), c.unshift(a[1]));
                              break;
                            }
                        if (!0 !== s)
                          if (s && t.throws) e = s(e);
                          else
                            try {
                              e = s(e);
                            } catch (t) {
                              return {
                                state: 'parsererror',
                                error: s ? t : 'No conversion from ' + l + ' to ' + o,
                              };
                            }
                      }
                  return { state: 'success', data: e };
                })(p, b, T, u)),
                u
                  ? (p.ifModified &&
                      ((w = T.getResponseHeader('Last-Modified')) && (x.lastModified[r] = w),
                      (w = T.getResponseHeader('etag')) && (x.etag[r] = w)),
                    204 === t || 'HEAD' === p.type
                      ? (E = 'nocontent')
                      : 304 === t
                      ? (E = 'notmodified')
                      : ((E = b.state), (f = b.data), (u = !(d = b.error))))
                  : ((d = E), (!t && E) || ((E = 'error'), t < 0 && (t = 0))),
                (T.status = t),
                (T.statusText = (e || E) + ''),
                u ? v.resolveWith(g, [f, E, T]) : v.rejectWith(g, [T, E, d]),
                T.statusCode(_),
                (_ = void 0),
                h && m.trigger(u ? 'ajaxSuccess' : 'ajaxError', [T, p, u ? f : d]),
                y.fireWith(g, [T, E]),
                h &&
                  (m.trigger('ajaxComplete', [T, p]), --x.active || x.event.trigger('ajaxStop')));
            }
            return T;
          },
          getJSON: function(t, e, n) {
            return x.get(t, e, n, 'json');
          },
          getScript: function(t, e) {
            return x.get(t, void 0, e, 'script');
          },
        }),
        x.each(['get', 'post'], function(t, e) {
          x[e] = function(t, n, i, r) {
            return (
              y(n) && ((r = r || i), (i = n), (n = void 0)),
              x.ajax(
                x.extend(
                  { url: t, type: e, dataType: r, data: n, success: i },
                  x.isPlainObject(t) && t,
                ),
              )
            );
          };
        }),
        (x._evalUrl = function(t) {
          return x.ajax({
            url: t,
            type: 'GET',
            dataType: 'script',
            cache: !0,
            async: !1,
            global: !1,
            throws: !0,
          });
        }),
        x.fn.extend({
          wrapAll: function(t) {
            var e;
            return (
              this[0] &&
                (y(t) && (t = t.call(this[0])),
                (e = x(t, this[0].ownerDocument)
                  .eq(0)
                  .clone(!0)),
                this[0].parentNode && e.insertBefore(this[0]),
                e
                  .map(function() {
                    for (var t = this; t.firstElementChild; ) t = t.firstElementChild;
                    return t;
                  })
                  .append(this)),
              this
            );
          },
          wrapInner: function(t) {
            return y(t)
              ? this.each(function(e) {
                  x(this).wrapInner(t.call(this, e));
                })
              : this.each(function() {
                  var e = x(this),
                    n = e.contents();
                  n.length ? n.wrapAll(t) : e.append(t);
                });
          },
          wrap: function(t) {
            var e = y(t);
            return this.each(function(n) {
              x(this).wrapAll(e ? t.call(this, n) : t);
            });
          },
          unwrap: function(t) {
            return (
              this.parent(t)
                .not('body')
                .each(function() {
                  x(this).replaceWith(this.childNodes);
                }),
              this
            );
          },
        }),
        (x.expr.pseudos.hidden = function(t) {
          return !x.expr.pseudos.visible(t);
        }),
        (x.expr.pseudos.visible = function(t) {
          return !!(t.offsetWidth || t.offsetHeight || t.getClientRects().length);
        }),
        (x.ajaxSettings.xhr = function() {
          try {
            return new n.XMLHttpRequest();
          } catch (t) {}
        });
      var Be = { 0: 200, 1223: 204 },
        Ue = x.ajaxSettings.xhr();
      (v.cors = !!Ue && 'withCredentials' in Ue),
        (v.ajax = Ue = !!Ue),
        x.ajaxTransport(function(t) {
          var e, i;
          if (v.cors || (Ue && !t.crossDomain))
            return {
              send: function(r, o) {
                var s,
                  a = t.xhr();
                if ((a.open(t.type, t.url, t.async, t.username, t.password), t.xhrFields))
                  for (s in t.xhrFields) a[s] = t.xhrFields[s];
                for (s in (t.mimeType && a.overrideMimeType && a.overrideMimeType(t.mimeType),
                t.crossDomain ||
                  r['X-Requested-With'] ||
                  (r['X-Requested-With'] = 'XMLHttpRequest'),
                r))
                  a.setRequestHeader(s, r[s]);
                (e = function(t) {
                  return function() {
                    e &&
                      ((e = i = a.onload = a.onerror = a.onabort = a.ontimeout = a.onreadystatechange = null),
                      'abort' === t
                        ? a.abort()
                        : 'error' === t
                        ? 'number' != typeof a.status
                          ? o(0, 'error')
                          : o(a.status, a.statusText)
                        : o(
                            Be[a.status] || a.status,
                            a.statusText,
                            'text' !== (a.responseType || 'text') ||
                              'string' != typeof a.responseText
                              ? { binary: a.response }
                              : { text: a.responseText },
                            a.getAllResponseHeaders(),
                          ));
                  };
                }),
                  (a.onload = e()),
                  (i = a.onerror = a.ontimeout = e('error')),
                  void 0 !== a.onabort
                    ? (a.onabort = i)
                    : (a.onreadystatechange = function() {
                        4 === a.readyState &&
                          n.setTimeout(function() {
                            e && i();
                          });
                      }),
                  (e = e('abort'));
                try {
                  a.send((t.hasContent && t.data) || null);
                } catch (t) {
                  if (e) throw t;
                }
              },
              abort: function() {
                e && e();
              },
            };
        }),
        x.ajaxPrefilter(function(t) {
          t.crossDomain && (t.contents.script = !1);
        }),
        x.ajaxSetup({
          accepts: {
            script:
              'text/javascript, application/javascript, application/ecmascript, application/x-ecmascript',
          },
          contents: { script: /\b(?:java|ecma)script\b/ },
          converters: {
            'text script': function(t) {
              return x.globalEval(t), t;
            },
          },
        }),
        x.ajaxPrefilter('script', function(t) {
          void 0 === t.cache && (t.cache = !1), t.crossDomain && (t.type = 'GET');
        }),
        x.ajaxTransport('script', function(t) {
          var e, n;
          if (t.crossDomain)
            return {
              send: function(i, r) {
                (e = x('<script>')
                  .prop({ charset: t.scriptCharset, src: t.url })
                  .on(
                    'load error',
                    (n = function(t) {
                      e.remove(), (n = null), t && r('error' === t.type ? 404 : 200, t.type);
                    }),
                  )),
                  s.head.appendChild(e[0]);
              },
              abort: function() {
                n && n();
              },
            };
        });
      var We,
        $e = [],
        ze = /(=)\?(?=&|$)|\?\?/;
      x.ajaxSetup({
        jsonp: 'callback',
        jsonpCallback: function() {
          var t = $e.pop() || x.expando + '_' + Ee++;
          return (this[t] = !0), t;
        },
      }),
        x.ajaxPrefilter('json jsonp', function(t, e, i) {
          var r,
            o,
            s,
            a =
              !1 !== t.jsonp &&
              (ze.test(t.url)
                ? 'url'
                : 'string' == typeof t.data &&
                  0 === (t.contentType || '').indexOf('application/x-www-form-urlencoded') &&
                  ze.test(t.data) &&
                  'data');
          if (a || 'jsonp' === t.dataTypes[0])
            return (
              (r = t.jsonpCallback = y(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback),
              a
                ? (t[a] = t[a].replace(ze, '$1' + r))
                : !1 !== t.jsonp && (t.url += (xe.test(t.url) ? '&' : '?') + t.jsonp + '=' + r),
              (t.converters['script json'] = function() {
                return s || x.error(r + ' was not called'), s[0];
              }),
              (t.dataTypes[0] = 'json'),
              (o = n[r]),
              (n[r] = function() {
                s = arguments;
              }),
              i.always(function() {
                void 0 === o ? x(n).removeProp(r) : (n[r] = o),
                  t[r] && ((t.jsonpCallback = e.jsonpCallback), $e.push(r)),
                  s && y(o) && o(s[0]),
                  (s = o = void 0);
              }),
              'script'
            );
        }),
        (v.createHTMLDocument = (((We = s.implementation.createHTMLDocument('').body).innerHTML =
          '<form></form><form></form>'),
        2 === We.childNodes.length)),
        (x.parseHTML = function(t, e, n) {
          return 'string' != typeof t
            ? []
            : ('boolean' == typeof e && ((n = e), (e = !1)),
              e ||
                (v.createHTMLDocument
                  ? (((i = (e = s.implementation.createHTMLDocument('')).createElement(
                      'base',
                    )).href = s.location.href),
                    e.head.appendChild(i))
                  : (e = s)),
              (r = k.exec(t)),
              (o = !n && []),
              r
                ? [e.createElement(r[1])]
                : ((r = wt([t], e, o)), o && o.length && x(o).remove(), x.merge([], r.childNodes)));
          var i, r, o;
        }),
        (x.fn.load = function(t, e, n) {
          var i,
            r,
            o,
            s = this,
            a = t.indexOf(' ');
          return (
            a > -1 && ((i = ge(t.slice(a))), (t = t.slice(0, a))),
            y(e) ? ((n = e), (e = void 0)) : e && 'object' == typeof e && (r = 'POST'),
            s.length > 0 &&
              x
                .ajax({ url: t, type: r || 'GET', dataType: 'html', data: e })
                .done(function(t) {
                  (o = arguments),
                    s.html(
                      i
                        ? x('<div>')
                            .append(x.parseHTML(t))
                            .find(i)
                        : t,
                    );
                })
                .always(
                  n &&
                    function(t, e) {
                      s.each(function() {
                        n.apply(this, o || [t.responseText, e, t]);
                      });
                    },
                ),
            this
          );
        }),
        x.each(
          ['ajaxStart', 'ajaxStop', 'ajaxComplete', 'ajaxError', 'ajaxSuccess', 'ajaxSend'],
          function(t, e) {
            x.fn[e] = function(t) {
              return this.on(e, t);
            };
          },
        ),
        (x.expr.pseudos.animated = function(t) {
          return x.grep(x.timers, function(e) {
            return t === e.elem;
          }).length;
        }),
        (x.offset = {
          setOffset: function(t, e, n) {
            var i,
              r,
              o,
              s,
              a,
              l,
              u = x.css(t, 'position'),
              c = x(t),
              h = {};
            'static' === u && (t.style.position = 'relative'),
              (a = c.offset()),
              (o = x.css(t, 'top')),
              (l = x.css(t, 'left')),
              ('absolute' === u || 'fixed' === u) && (o + l).indexOf('auto') > -1
                ? ((s = (i = c.position()).top), (r = i.left))
                : ((s = parseFloat(o) || 0), (r = parseFloat(l) || 0)),
              y(e) && (e = e.call(t, n, x.extend({}, a))),
              null != e.top && (h.top = e.top - a.top + s),
              null != e.left && (h.left = e.left - a.left + r),
              'using' in e ? e.using.call(t, h) : c.css(h);
          },
        }),
        x.fn.extend({
          offset: function(t) {
            if (arguments.length)
              return void 0 === t
                ? this
                : this.each(function(e) {
                    x.offset.setOffset(this, t, e);
                  });
            var e,
              n,
              i = this[0];
            return i
              ? i.getClientRects().length
                ? ((e = i.getBoundingClientRect()),
                  (n = i.ownerDocument.defaultView),
                  { top: e.top + n.pageYOffset, left: e.left + n.pageXOffset })
                : { top: 0, left: 0 }
              : void 0;
          },
          position: function() {
            if (this[0]) {
              var t,
                e,
                n,
                i = this[0],
                r = { top: 0, left: 0 };
              if ('fixed' === x.css(i, 'position')) e = i.getBoundingClientRect();
              else {
                for (
                  e = this.offset(), n = i.ownerDocument, t = i.offsetParent || n.documentElement;
                  t &&
                  (t === n.body || t === n.documentElement) &&
                  'static' === x.css(t, 'position');

                )
                  t = t.parentNode;
                t &&
                  t !== i &&
                  1 === t.nodeType &&
                  (((r = x(t).offset()).top += x.css(t, 'borderTopWidth', !0)),
                  (r.left += x.css(t, 'borderLeftWidth', !0)));
              }
              return {
                top: e.top - r.top - x.css(i, 'marginTop', !0),
                left: e.left - r.left - x.css(i, 'marginLeft', !0),
              };
            }
          },
          offsetParent: function() {
            return this.map(function() {
              for (var t = this.offsetParent; t && 'static' === x.css(t, 'position'); )
                t = t.offsetParent;
              return t || Et;
            });
          },
        }),
        x.each({ scrollLeft: 'pageXOffset', scrollTop: 'pageYOffset' }, function(t, e) {
          var n = 'pageYOffset' === e;
          x.fn[t] = function(i) {
            return $(
              this,
              function(t, i, r) {
                var o;
                if ((_(t) ? (o = t) : 9 === t.nodeType && (o = t.defaultView), void 0 === r))
                  return o ? o[e] : t[i];
                o ? o.scrollTo(n ? o.pageXOffset : r, n ? r : o.pageYOffset) : (t[i] = r);
              },
              t,
              i,
              arguments.length,
            );
          };
        }),
        x.each(['top', 'left'], function(t, e) {
          x.cssHooks[e] = Wt(v.pixelPosition, function(t, n) {
            if (n) return (n = Ut(t, e)), Ft.test(n) ? x(t).position()[e] + 'px' : n;
          });
        }),
        x.each({ Height: 'height', Width: 'width' }, function(t, e) {
          x.each({ padding: 'inner' + t, content: e, '': 'outer' + t }, function(n, i) {
            x.fn[i] = function(r, o) {
              var s = arguments.length && (n || 'boolean' != typeof r),
                a = n || (!0 === r || !0 === o ? 'margin' : 'border');
              return $(
                this,
                function(e, n, r) {
                  var o;
                  return _(e)
                    ? 0 === i.indexOf('outer')
                      ? e['inner' + t]
                      : e.document.documentElement['client' + t]
                    : 9 === e.nodeType
                    ? ((o = e.documentElement),
                      Math.max(
                        e.body['scroll' + t],
                        o['scroll' + t],
                        e.body['offset' + t],
                        o['offset' + t],
                        o['client' + t],
                      ))
                    : void 0 === r
                    ? x.css(e, n, a)
                    : x.style(e, n, r, a);
                },
                e,
                s ? r : void 0,
                s,
              );
            };
          });
        }),
        x.each(
          'blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu'.split(
            ' ',
          ),
          function(t, e) {
            x.fn[e] = function(t, n) {
              return arguments.length > 0 ? this.on(e, null, t, n) : this.trigger(e);
            };
          },
        ),
        x.fn.extend({
          hover: function(t, e) {
            return this.mouseenter(t).mouseleave(e || t);
          },
        }),
        x.fn.extend({
          bind: function(t, e, n) {
            return this.on(t, null, e, n);
          },
          unbind: function(t, e) {
            return this.off(t, null, e);
          },
          delegate: function(t, e, n, i) {
            return this.on(e, t, n, i);
          },
          undelegate: function(t, e, n) {
            return 1 === arguments.length ? this.off(t, '**') : this.off(e, t || '**', n);
          },
        }),
        (x.proxy = function(t, e) {
          var n, i, r;
          if (('string' == typeof e && ((n = t[e]), (e = t), (t = n)), y(t)))
            return (
              (i = l.call(arguments, 2)),
              ((r = function() {
                return t.apply(e || this, i.concat(l.call(arguments)));
              }).guid = t.guid = t.guid || x.guid++),
              r
            );
        }),
        (x.holdReady = function(t) {
          t ? x.readyWait++ : x.ready(!0);
        }),
        (x.isArray = Array.isArray),
        (x.parseJSON = JSON.parse),
        (x.nodeName = I),
        (x.isFunction = y),
        (x.isWindow = _),
        (x.camelCase = Q),
        (x.type = E),
        (x.now = Date.now),
        (x.isNumeric = function(t) {
          var e = x.type(t);
          return ('number' === e || 'string' === e) && !isNaN(t - parseFloat(t));
        }),
        void 0 ===
          (i = function() {
            return x;
          }.apply(e, [])) || (t.exports = i);
      var Ke = n.jQuery,
        Ge = n.$;
      return (
        (x.noConflict = function(t) {
          return n.$ === x && (n.$ = Ge), t && n.jQuery === x && (n.jQuery = Ke), x;
        }),
        r || (n.jQuery = n.$ = x),
        x
      );
    });
  },
  function(t, e, n) {
    'use strict';
    (e.__esModule = !0),
      (e.extend = a),
      (e.indexOf = function(t, e) {
        for (var n = 0, i = t.length; n < i; n++) if (t[n] === e) return n;
        return -1;
      }),
      (e.escapeExpression = function(t) {
        if ('string' != typeof t) {
          if (t && t.toHTML) return t.toHTML();
          if (null == t) return '';
          if (!t) return t + '';
          t = '' + t;
        }
        if (!o.test(t)) return t;
        return t.replace(r, s);
      }),
      (e.isEmpty = function(t) {
        return (!t && 0 !== t) || !(!c(t) || 0 !== t.length);
      }),
      (e.createFrame = function(t) {
        var e = a({}, t);
        return (e._parent = t), e;
      }),
      (e.blockParams = function(t, e) {
        return (t.path = e), t;
      }),
      (e.appendContextPath = function(t, e) {
        return (t ? t + '.' : '') + e;
      });
    var i = {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#x27;',
        '`': '&#x60;',
        '=': '&#x3D;',
      },
      r = /[&<>"'`=]/g,
      o = /[&<>"'`=]/;
    function s(t) {
      return i[t];
    }
    function a(t) {
      for (var e = 1; e < arguments.length; e++)
        for (var n in arguments[e])
          Object.prototype.hasOwnProperty.call(arguments[e], n) && (t[n] = arguments[e][n]);
      return t;
    }
    var l = Object.prototype.toString;
    e.toString = l;
    var u = function(t) {
      return 'function' == typeof t;
    };
    u(/x/) &&
      (e.isFunction = u = function(t) {
        return 'function' == typeof t && '[object Function]' === l.call(t);
      }),
      (e.isFunction = u);
    var c =
      Array.isArray ||
      function(t) {
        return !(!t || 'object' != typeof t) && '[object Array]' === l.call(t);
      };
    e.isArray = c;
  },
  function(t, e, n) {
    t.exports = n(43).default;
  },
  function(t, e, n) {
    'use strict';
    var i = n(4),
      r = n.n(i),
      o = n(2),
      s = n(0),
      a = n.n(s),
      l = Promise.resolve(),
      u = o.Model.extend,
      c = u.call(r.a.Channel, {
        constructor: function() {
          var t = this,
            e = a.a.once(function() {
              return l.then(function() {
                return t.start();
              });
            }),
            n = a.a.result(this, 'requests');
          a.a.each(n, function(n, i) {
            t.reply(i, function() {
              for (var i = arguments.length, r = Array(i), o = 0; o < i; o++) r[o] = arguments[o];
              var s = e().then(function() {
                return t[n].apply(t, r);
              });
              return (
                s.catch(function(e) {
                  t.onError(e);
                }),
                s
              );
            });
          }),
            r.a.Channel.prototype.constructor.apply(this, arguments);
        },
        setup: function() {},
        start: function() {},
        onError: function() {},
      });
    (c.extend = u), (e.a = c);
  },
  function(t, e, n) {
    'use strict';
    e.__esModule = !0;
    var i = ['description', 'fileName', 'lineNumber', 'message', 'name', 'number', 'stack'];
    function r(t, e) {
      var n = e && e.loc,
        o = void 0,
        s = void 0;
      n && (t += ' - ' + (o = n.start.line) + ':' + (s = n.start.column));
      for (var a = Error.prototype.constructor.call(this, t), l = 0; l < i.length; l++)
        this[i[l]] = a[i[l]];
      Error.captureStackTrace && Error.captureStackTrace(this, r);
      try {
        n &&
          ((this.lineNumber = o),
          Object.defineProperty
            ? Object.defineProperty(this, 'column', { value: s, enumerable: !0 })
            : (this.column = s));
      } catch (t) {}
    }
    (r.prototype = new Error()), (e.default = r), (t.exports = e.default);
  },
  function(t, e, n) {
    var i, r;
    /* NProgress, (c) 2013, 2014 Rico Sta. Cruz - http://ricostacruz.com/nprogress
     * @license MIT */ void 0 ===
      (r =
        'function' ==
        typeof (i = function() {
          var t,
            e,
            n = { version: '0.2.0' },
            i = (n.settings = {
              minimum: 0.08,
              easing: 'ease',
              positionUsing: '',
              speed: 200,
              trickle: !0,
              trickleRate: 0.02,
              trickleSpeed: 800,
              showSpinner: !0,
              barSelector: '[role="bar"]',
              spinnerSelector: '[role="spinner"]',
              parent: 'body',
              template:
                '<div class="bar" role="bar"><div class="peg"></div></div><div class="spinner" role="spinner"><div class="spinner-icon"></div></div>',
            });
          function r(t, e, n) {
            return t < e ? e : t > n ? n : t;
          }
          function o(t) {
            return 100 * (-1 + t);
          }
          (n.configure = function(t) {
            var e, n;
            for (e in t) void 0 !== (n = t[e]) && t.hasOwnProperty(e) && (i[e] = n);
            return this;
          }),
            (n.status = null),
            (n.set = function(t) {
              var e = n.isStarted();
              (t = r(t, i.minimum, 1)), (n.status = 1 === t ? null : t);
              var l = n.render(!e),
                u = l.querySelector(i.barSelector),
                c = i.speed,
                h = i.easing;
              return (
                l.offsetWidth,
                s(function(e) {
                  '' === i.positionUsing && (i.positionUsing = n.getPositioningCSS()),
                    a(
                      u,
                      (function(t, e, n) {
                        var r;
                        return (
                          ((r =
                            'translate3d' === i.positionUsing
                              ? { transform: 'translate3d(' + o(t) + '%,0,0)' }
                              : 'translate' === i.positionUsing
                              ? { transform: 'translate(' + o(t) + '%,0)' }
                              : { 'margin-left': o(t) + '%' }).transition = 'all ' + e + 'ms ' + n),
                          r
                        );
                      })(t, c, h),
                    ),
                    1 === t
                      ? (a(l, { transition: 'none', opacity: 1 }),
                        l.offsetWidth,
                        setTimeout(function() {
                          a(l, { transition: 'all ' + c + 'ms linear', opacity: 0 }),
                            setTimeout(function() {
                              n.remove(), e();
                            }, c);
                        }, c))
                      : setTimeout(e, c);
                }),
                this
              );
            }),
            (n.isStarted = function() {
              return 'number' == typeof n.status;
            }),
            (n.start = function() {
              n.status || n.set(0);
              var t = function() {
                setTimeout(function() {
                  n.status && (n.trickle(), t());
                }, i.trickleSpeed);
              };
              return i.trickle && t(), this;
            }),
            (n.done = function(t) {
              return t || n.status ? n.inc(0.3 + 0.5 * Math.random()).set(1) : this;
            }),
            (n.inc = function(t) {
              var e = n.status;
              return e
                ? ('number' != typeof t && (t = (1 - e) * r(Math.random() * e, 0.1, 0.95)),
                  (e = r(e + t, 0, 0.994)),
                  n.set(e))
                : n.start();
            }),
            (n.trickle = function() {
              return n.inc(Math.random() * i.trickleRate);
            }),
            (t = 0),
            (e = 0),
            (n.promise = function(i) {
              return i && 'resolved' !== i.state()
                ? (0 === e && n.start(),
                  t++,
                  e++,
                  i.always(function() {
                    0 == --e ? ((t = 0), n.done()) : n.set((t - e) / t);
                  }),
                  this)
                : this;
            }),
            (n.render = function(t) {
              if (n.isRendered()) return document.getElementById('nprogress');
              u(document.documentElement, 'nprogress-busy');
              var e = document.createElement('div');
              (e.id = 'nprogress'), (e.innerHTML = i.template);
              var r,
                s = e.querySelector(i.barSelector),
                l = t ? '-100' : o(n.status || 0),
                c = document.querySelector(i.parent);
              return (
                a(s, { transition: 'all 0 linear', transform: 'translate3d(' + l + '%,0,0)' }),
                i.showSpinner || ((r = e.querySelector(i.spinnerSelector)) && f(r)),
                c != document.body && u(c, 'nprogress-custom-parent'),
                c.appendChild(e),
                e
              );
            }),
            (n.remove = function() {
              c(document.documentElement, 'nprogress-busy'),
                c(document.querySelector(i.parent), 'nprogress-custom-parent');
              var t = document.getElementById('nprogress');
              t && f(t);
            }),
            (n.isRendered = function() {
              return !!document.getElementById('nprogress');
            }),
            (n.getPositioningCSS = function() {
              var t = document.body.style,
                e =
                  'WebkitTransform' in t
                    ? 'Webkit'
                    : 'MozTransform' in t
                    ? 'Moz'
                    : 'msTransform' in t
                    ? 'ms'
                    : 'OTransform' in t
                    ? 'O'
                    : '';
              return e + 'Perspective' in t
                ? 'translate3d'
                : e + 'Transform' in t
                ? 'translate'
                : 'margin';
            });
          var s = (function() {
              var t = [];
              function e() {
                var n = t.shift();
                n && n(e);
              }
              return function(n) {
                t.push(n), 1 == t.length && e();
              };
            })(),
            a = (function() {
              var t = ['Webkit', 'O', 'Moz', 'ms'],
                e = {};
              function n(n) {
                return (
                  (n = n.replace(/^-ms-/, 'ms-').replace(/-([\da-z])/gi, function(t, e) {
                    return e.toUpperCase();
                  })),
                  e[n] ||
                    (e[n] = (function(e) {
                      var n = document.body.style;
                      if (e in n) return e;
                      for (var i, r = t.length, o = e.charAt(0).toUpperCase() + e.slice(1); r--; )
                        if ((i = t[r] + o) in n) return i;
                      return e;
                    })(n))
                );
              }
              function i(t, e, i) {
                (e = n(e)), (t.style[e] = i);
              }
              return function(t, e) {
                var n,
                  r,
                  o = arguments;
                if (2 == o.length)
                  for (n in e) void 0 !== (r = e[n]) && e.hasOwnProperty(n) && i(t, n, r);
                else i(t, o[1], o[2]);
              };
            })();
          function l(t, e) {
            var n = 'string' == typeof t ? t : h(t);
            return n.indexOf(' ' + e + ' ') >= 0;
          }
          function u(t, e) {
            var n = h(t),
              i = n + e;
            l(n, e) || (t.className = i.substring(1));
          }
          function c(t, e) {
            var n,
              i = h(t);
            l(t, e) &&
              ((n = i.replace(' ' + e + ' ', ' ')), (t.className = n.substring(1, n.length - 1)));
          }
          function h(t) {
            return (' ' + (t.className || '') + ' ').replace(/\s+/gi, ' ');
          }
          function f(t) {
            t && t.parentNode && t.parentNode.removeChild(t);
          }
          return n;
        })
          ? i.call(e, n, e, t)
          : i) || (t.exports = r);
  },
  function(t, e) {
    var n;
    n = (function() {
      return this;
    })();
    try {
      n = n || Function('return this')() || (0, eval)('this');
    } catch (t) {
      'object' == typeof window && (n = window);
    }
    t.exports = n;
  },
  function(t, e, n) {
    'use strict';
    var i = n(8),
      r = n(2),
      o = r.Model.extend({
        defaults: { timeout: !1, dismissible: !0, clearOnRoute: !0 },
        initialize: function() {
          !1 !== this.get('timeout') && this._setTimeout(),
            this.on('destroy', this._clearTimeout),
            this.get('clearOnRoute') && this.listenTo(r.history, 'route', this.destroy);
        },
        _setTimeout: function() {
          var t = this;
          this._timeout = setTimeout(function() {
            return t.destroy();
          }, this.get('timeout'));
        },
        _clearTimeout: function() {
          this._timeout && (clearTimeout(this._timeout), delete this._timeout);
        },
      }),
      s = r.Collection.extend({ model: o }),
      a = n(1),
      l = n(21),
      u = n.n(l),
      c = a.View.extend({
        template: u.a,
        className: function() {
          return 'flashes__alert alert alert-' + this.model.get('type');
        },
        attributes: { role: 'alert' },
        events: { 'click button.close': 'dismiss' },
        dismiss: function() {
          this.model.destroy();
        },
      }),
      h = a.CollectionView.extend({ childView: c, className: 'container' }),
      f = i.a.extend({
        setup: function() {
          var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          (this.container = t.container),
            this.container || (this.container = new a.Region({ el: t.el }));
        },
        start: function() {
          (this.collection = new s()),
            (this.view = new h({ collection: this.collection })),
            this.container.show(this.view);
        },
        requests: { add: 'add', remove: 'remove' },
        add: function(t) {
          this.collection.add(t);
        },
        remove: function(t) {
          var e = this.collection.findWhere(t);
          e && e.destroy();
        },
      });
    e.a = new f();
  },
  function(t, e, n) {
    'use strict';
    var i = n(8),
      r = n(0),
      o = n.n(r),
      s = n(2),
      a = n(1),
      l = i.a.extend({
        requests: function() {
          return {
            open: 'open',
            close: 'close',
            alert: 'alert',
            confirm: 'confirm',
            prompt: 'prompt',
            dialog: 'dialog',
          };
        },
        constructor: function() {
          (this.views = []), i.a.prototype.constructor.apply(this, arguments);
        },
        open: function(t, e) {
          var n = this,
            i = void 0;
          return Promise.resolve()
            .then(function() {
              return (
                n.trigger('before:open', t, e),
                (n._isOpen = !0),
                (i = o.a.last(n.views)),
                n.views.push(t),
                n.render(t, e)
              );
            })
            .then(function() {
              return i ? n.animateSwap(i, t, e) : n.animateIn(t, e);
            })
            .then(function() {
              n.trigger('open', t, e);
            });
        },
        close: function(t, e) {
          var n = this,
            i = void 0,
            r = void 0;
          return Promise.resolve()
            .then(function() {
              return (
                t
                  ? n.trigger('before:close', t, e)
                  : o.a.map(n.views, function(t) {
                      return n.trigger('before:close', t, e);
                    }),
                (n._isOpen = !1),
                t ? (r = n.views = o.a.without(n.views, t)) : ((r = n.views), (n.views = [])),
                (i = o.a.last(r)),
                t && i
                  ? n.animateSwap(t, i, e)
                  : t
                  ? n.animateOut(t, e)
                  : i
                  ? n.animateOut(i, e)
                  : void 0
              );
            })
            .then(function() {
              return t
                ? n.remove(t, e)
                : Promise.all(
                    o.a.map(r, function(t) {
                      return n.remove(t, e);
                    }),
                  );
            })
            .then(function() {
              t
                ? n.trigger('close', t, e)
                : o.a.map(r, function(t) {
                    return n.trigger('close', t, e);
                  });
            });
        },
        alert: function(t) {
          var e = this;
          return new Promise(function(n, i) {
            var r = new e.AlertView(t),
              o = e.open(r, t);
            e.trigger('before:alert', r, t),
              r.on('confirm cancel', function() {
                o.then(function() {
                  return e.close(r, t);
                })
                  .then(function() {
                    return e.trigger('alert', null, r, t);
                  })
                  .then(function() {
                    return n();
                  }, i);
              });
          });
        },
        confirm: function(t) {
          var e = this;
          return new Promise(function(n, i) {
            var r = new e.ConfirmView(t),
              o = e.open(r, t);
            e.trigger('before:confirm', r, t);
            var s = function(s) {
              o.then(function() {
                return e.close(r, t);
              })
                .then(function() {
                  return e.trigger('confirm', s, r, t);
                })
                .then(function() {
                  return n(s);
                }, i);
            };
            r.on({
              confirm: function() {
                return s(!0);
              },
              cancel: function() {
                return s(!1);
              },
            });
          });
        },
        prompt: function(t) {
          var e = this;
          return new Promise(function(n, i) {
            var r = new e.PromptView(t),
              o = e.open(r, t);
            e.trigger('before:prompt', r, t);
            var s = function(s) {
              o.then(function() {
                return e.close(r, t);
              })
                .then(function() {
                  return e.trigger('prompt', s, r, t);
                })
                .then(function() {
                  return n(s);
                }, i);
            };
            r.on({
              submit: function(t) {
                return s(t);
              },
              cancel: function() {
                return s();
              },
            });
          });
        },
        dialog: function(t, e) {
          var n = this;
          if (!t) throw new Error('ModalService: no view option passed to dialog');
          return new Promise(function(i, r) {
            var o = n.open(t, e);
            n.trigger('before:dialog', t, e);
            var s = function(s) {
              o.then(function() {
                return n.close(t, e);
              })
                .then(function() {
                  return n.trigger('dialog', s, t, e);
                })
                .then(function() {
                  return i(s);
                }, r);
            };
            t.on({
              submit: function(t) {
                return s(t);
              },
              cancel: function() {
                return s();
              },
            });
          });
        },
        isOpen: function() {
          return !!this._isOpen;
        },
        render: function() {},
        remove: function() {},
        animateIn: function() {},
        animateSwap: function() {},
        animateOut: function() {},
      }),
      u = { ok: 'OK', cancel: 'Cancel', yes: 'Yes', no: 'No' },
      c = a.View.extend({
        initialize: function() {
          var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          this.model = new s.Model(t);
        },
        triggers: {
          'click .btn-primary': { event: 'confirm', preventDefault: !1, stopPropagation: !1 },
          'click .btn-secondary': 'cancel',
          'click .close': 'cancel',
        },
        events: { submit: 'submit' },
        submit: function(t) {
          t.preventDefault();
          var e = this.$('input').val();
          this.trigger('submit', e);
        },
      }),
      h = function(t, e) {
        return t(e);
      },
      f = c
        .extend({
          className: 'modal fade',
          attributes: { tabindex: -1, role: 'dialog' },
          template: function() {
            return '\n    <div class="modal-dialog">\n      <div class="modal-content"></div>\n    </div>\n    ';
          },
        })
        .setRenderer(h),
      d = c
        .extend({
          template: function(t) {
            return (
              '\n    <div class="modal-header">\n      <h5 class="modal-title">' +
              t.title +
              '</h5>\n      <button type="button" class="close" aria-hidden="true">&times;</button>      \n    </div>\n\n    <div class="modal-body">\n      <p>' +
              t.text +
              '</p>\n    </div>\n\n    <div class="modal-footer">\n      <button type="button" class="btn btn-primary">' +
              (t.ok || u.ok) +
              '</button>\n    </div>\n    '
            );
          },
        })
        .setRenderer(h),
      p = c
        .extend({
          tagName: 'form',
          template: function(t) {
            return (
              '\n    <div class="modal-header">\n      <h5 class="modal-title">' +
              t.title +
              '</h5>\n      <button type="button" class="close" aria-hidden="true">&times;</button>      \n    </div>\n\n    <div class="modal-body">\n      <div class="form-group">\n        <label for="modal__input--prompt">' +
              t.text +
              '</label>\n        <input id="modal__input--prompt" class="form-control" type="text" value="' +
              (t.value || '') +
              '">\n      </div>\n    </div>\n\n    <div class="modal-footer">\n      <button type="button" class="btn btn-secondary">' +
              (t.cancel || u.cancel) +
              '</button>\n      <button type="submit" class="btn btn-primary">' +
              (t.ok || u.ok) +
              '</button>\n    </div>\n    '
            );
          },
        })
        .setRenderer(h),
      g = c
        .extend({
          template: function(t) {
            return (
              '\n    <div class="modal-header">\n      <h5 class="modal-title">' +
              t.title +
              '</h5>\n      <button type="button" class="close" aria-hidden="true">&times;</button>      \n    </div>\n    \n    <div class="modal-body">\n      <p>' +
              t.text +
              '</p>\n    </div>\n    \n    <div class="modal-footer">\n      <button type="button" class="btn btn-secondary">' +
              (t.no || u.no) +
              '</button>\n      <button type="button" class="btn btn-primary">' +
              (t.yes || u.yes) +
              '</button>\n    </div>      \n    '
            );
          },
        })
        .setRenderer(h),
      m = ['LayoutView', 'AlertView', 'PromptView', 'ConfirmView'],
      v = l.extend(
        {
          LayoutView: f,
          AlertView: d,
          PromptView: p,
          ConfirmView: g,
          _prepareViewClasses: function() {
            var t = this;
            m.forEach(function(e) {
              var n = t[e];
              if ('function' != typeof n)
                throw new Error(
                  'ModalService: expected ' + e + ' to be a template function or View class',
                );
              n.prototype instanceof a.View || ((n = c.extend({ template: n })), (t[e] = n));
            });
          },
          setup: function() {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            Object(a.mergeOptions)(this, t, m.concat(['el', 'container'])),
              this._prepareViewClasses();
          },
          start: function() {
            var t = this,
              e = (this.layout = new this.LayoutView());
            if (!this.container) {
              if (!this.el)
                throw new Error('ModalService: container or el options must be defined');
              this.container = new a.Region({ el: this.el });
            }
            this.container.show(e),
              e.$el.modal({ show: !1, backdrop: 'static' }),
              e.$el.on({
                'shown.bs.modal': function(e) {
                  return t.trigger('modal:show', e);
                },
                'hidden.bs.modal': function(e) {
                  return t.trigger('modal:hide', e);
                },
              }),
              (this.contentRegion = new a.Region({ el: e.$('.modal-content') }));
          },
          render: function(t) {
            this.contentRegion.show(t);
          },
          remove: function() {
            this.contentRegion.empty();
          },
          animateIn: function() {
            var t = this;
            return new Promise(function(e) {
              t.once('modal:show', e), t.layout.$el.modal('show');
            });
          },
          animateOut: function() {
            var t = this;
            return new Promise(function(e) {
              t.once('modal:hide', e), t.layout.$el.modal('hide');
            });
          },
        },
        {
          setCaptions: function() {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            Object.assign(u, t);
          },
        },
      );
    e.a = new v();
  },
  function(t, e, n) {
    t.exports = (function(t, e) {
      'use strict';
      return (t.Storage = e.Class.extend({
        model: t.Model,
        collection: t.Collection,
        constructor: function() {
          var t = this;
          (this.records = new this.collection()),
            this.listenToOnce(this.records, 'sync', function() {
              t._hasSynced = !0;
            }),
            this._super.apply(this, arguments);
        },
        find: function(t) {
          var e = this,
            n = void 0 !== arguments[1] && arguments[1],
            i = this.records.get(t);
          return i && !n
            ? Promise.resolve(i)
            : ((t = this._ensureModel(t)),
              Promise.resolve(t.fetch()).then(function() {
                return e.insert(t);
              }));
        },
        findAll: function() {
          var t = this,
            e = void 0 === arguments[0] ? {} : arguments[0],
            n = void 0 !== arguments[1] && arguments[1];
          return this._hasSynced && !n
            ? Promise.resolve(this.records)
            : Promise.resolve(this.records.fetch(e)).then(function() {
                return t.records;
              });
        },
        save: function(t) {
          var e = this,
            n = this.records.get(t);
          return (
            (t = n || this._ensureModel(t)),
            Promise.resolve(t.save()).then(function() {
              return n || e.insert(t), t;
            })
          );
        },
        insert: function(t) {
          return (t = this.records.add(t, { merge: !0 })), Promise.resolve(t);
        },
        _ensureModel: function(t) {
          return t instanceof this.model
            ? t
            : 'object' == typeof t
            ? new this.model(t)
            : new this.model({ id: t });
        },
      }));
    })(n(2), n(28));
  },
  function(t, e, n) {
    'use strict';
    function i(t) {
      return t && t.__esModule ? t : { default: t };
    }
    (e.__esModule = !0), (e.HandlebarsEnvironment = u);
    var r = n(6),
      o = i(n(9)),
      s = n(42),
      a = n(34),
      l = i(n(32));
    e.VERSION = '4.0.11';
    e.COMPILER_REVISION = 7;
    e.REVISION_CHANGES = {
      1: '<= 1.0.rc.2',
      2: '== 1.0.0-rc.3',
      3: '== 1.0.0-rc.4',
      4: '== 1.x.x',
      5: '== 2.0.0-alpha.x',
      6: '>= 2.0.0-beta.1',
      7: '>= 4.0.0',
    };
    function u(t, e, n) {
      (this.helpers = t || {}),
        (this.partials = e || {}),
        (this.decorators = n || {}),
        s.registerDefaultHelpers(this),
        a.registerDefaultDecorators(this);
    }
    u.prototype = {
      constructor: u,
      logger: l.default,
      log: l.default.log,
      registerHelper: function(t, e) {
        if ('[object Object]' === r.toString.call(t)) {
          if (e) throw new o.default('Arg not supported with multiple helpers');
          r.extend(this.helpers, t);
        } else this.helpers[t] = e;
      },
      unregisterHelper: function(t) {
        delete this.helpers[t];
      },
      registerPartial: function(t, e) {
        if ('[object Object]' === r.toString.call(t)) r.extend(this.partials, t);
        else {
          if (void 0 === e)
            throw new o.default('Attempting to register a partial called "' + t + '" as undefined');
          this.partials[t] = e;
        }
      },
      unregisterPartial: function(t) {
        delete this.partials[t];
      },
      registerDecorator: function(t, e) {
        if ('[object Object]' === r.toString.call(t)) {
          if (e) throw new o.default('Arg not supported with multiple decorators');
          r.extend(this.decorators, t);
        } else this.decorators[t] = e;
      },
      unregisterDecorator: function(t) {
        delete this.decorators[t];
      },
    };
    var c = l.default.log;
    (e.log = c), (e.createFrame = r.createFrame), (e.logger = l.default);
  },
  function(t, e, n) {
    var i = n(7);
    t.exports = (i.default || i).template({
      compiler: [7, '>= 4.0.0'],
      main: function(t, e, n, i, r) {
        var o,
          s = null != e ? e : t.nullContext || {},
          a = n.helperMissing,
          l = 'function',
          u = t.escapeExpression;
        return (
          '<div class="books__title">\r\n  <h1>' +
          u(
            typeof (o = null != (o = n.title || (null != e ? e.title : e)) ? o : a) === l
              ? o.call(s, { name: 'title', hash: {}, data: r })
              : o,
          ) +
          ' <small>(' +
          u(
            typeof (o = null != (o = n.year || (null != e ? e.year : e)) ? o : a) === l
              ? o.call(s, { name: 'year', hash: {}, data: r })
              : o,
          ) +
          ')</small></h1>\r\n  <p class="lead">' +
          u(
            typeof (o = null != (o = n.author || (null != e ? e.author : e)) ? o : a) === l
              ? o.call(s, { name: 'author', hash: {}, data: r })
              : o,
          ) +
          '</p>\r\n</div>\r\n\r\n<div class="books__image">\r\n  <img class="img-thumbnail" src="' +
          u(
            typeof (o = null != (o = n.img || (null != e ? e.img : e)) ? o : a) === l
              ? o.call(s, { name: 'img', hash: {}, data: r })
              : o,
          ) +
          '" alt="' +
          u(
            typeof (o = null != (o = n.title || (null != e ? e.title : e)) ? o : a) === l
              ? o.call(s, { name: 'title', hash: {}, data: r })
              : o,
          ) +
          ' (' +
          u(
            typeof (o = null != (o = n.year || (null != e ? e.year : e)) ? o : a) === l
              ? o.call(s, { name: 'year', hash: {}, data: r })
              : o,
          ) +
          ') by ' +
          u(
            typeof (o = null != (o = n.author || (null != e ? e.author : e)) ? o : a) === l
              ? o.call(s, { name: 'author', hash: {}, data: r })
              : o,
          ) +
          '">\r\n</div>\r\n<div class="books__content">\r\n  <p>' +
          u(
            typeof (o = null != (o = n.description || (null != e ? e.description : e)) ? o : a) ===
              l
              ? o.call(s, { name: 'description', hash: {}, data: r })
              : o,
          ) +
          '</p>\r\n</div>\r\n\r\n<hr class="hidden-md hidden-lg">\r\n'
        );
      },
      useData: !0,
    });
  },
  function(t, e, n) {
    var i = n(7);
    t.exports = (i.default || i).template({
      compiler: [7, '>= 4.0.0'],
      main: function(t, e, n, i, r) {
        return '<h2>Select a book</h2>';
      },
      useData: !0,
    });
  },
  function(t, e, n) {
    var i = n(7);
    t.exports = (i.default || i).template({
      compiler: [7, '>= 4.0.0'],
      main: function(t, e, n, i, r) {
        var o,
          s = null != e ? e : t.nullContext || {},
          a = n.helperMissing,
          l = t.escapeExpression;
        return (
          '<h5 class="mb-1">' +
          l(
            'function' == typeof (o = null != (o = n.title || (null != e ? e.title : e)) ? o : a)
              ? o.call(s, { name: 'title', hash: {}, data: r })
              : o,
          ) +
          ' <small>(' +
          l(
            'function' == typeof (o = null != (o = n.year || (null != e ? e.year : e)) ? o : a)
              ? o.call(s, { name: 'year', hash: {}, data: r })
              : o,
          ) +
          ')</small></h5>\r\n<p class="mb-1">' +
          l(
            'function' == typeof (o = null != (o = n.author || (null != e ? e.author : e)) ? o : a)
              ? o.call(s, { name: 'author', hash: {}, data: r })
              : o,
          ) +
          '</p>\r\n'
        );
      },
      useData: !0,
    });
  },
  function(t, e, n) {
    var i = n(7);
    t.exports = (i.default || i).template({
      compiler: [7, '>= 4.0.0'],
      main: function(t, e, n, i, r) {
        return '<div class="container">\r\n  <div class="page-header">\r\n    <h1>Books</h1>\r\n  </div>\r\n\r\n  <div class="row">\r\n    <div class="flip-scene col-md-9 order-1 order-md-2">\r\n      <div class="books__viewer flip-card"></div>\r\n    </div>\r\n    <div class="books__library col-md-3 order-2 order-md-1"></div>\r\n  </div>\r\n</div>\r\n';
      },
      useData: !0,
    });
  },
  function(t, e, n) {
    var i = n(7);
    t.exports = (i.default || i).template({
      compiler: [7, '>= 4.0.0'],
      main: function(t, e, n, i, r) {
        return '<div class="index__billboard d-none">\r\n  <h1>Marionette <span>Wires</span> Revisited</h1>\r\n  <p>An opinionated starter application built with <a href="http://marionettejs.com/">Marionette.js</a>.</p>\r\n  <p>Source code at <a href="https://github.com/blikblum/marionette-wires-revisited">GitHub</a>, scaffold a new project with <a href="https://github.com/blikblum/generator-mn">generator-mn</a>.</p>  \r\n</div>\r\n';
      },
      useData: !0,
    });
  },
  function(t, e, n) {
    var i = n(7);
    t.exports = (i.default || i).template({
      1: function(t, e, n, i, r) {
        return '  <button type="button" class="close" data-dismiss="alert">\r\n    <span aria-hidden="true">&times;</span><span class="sr-only">Close</span>\r\n  </button>\r\n';
      },
      compiler: [7, '>= 4.0.0'],
      main: function(t, e, n, i, r) {
        var o,
          s,
          a = null != e ? e : t.nullContext || {},
          l = n.helperMissing,
          u = t.escapeExpression;
        return (
          (null !=
          (o = n.if.call(a, null != e ? e.dismissible : e, {
            name: 'if',
            hash: {},
            fn: t.program(1, r, 0),
            inverse: t.noop,
            data: r,
          }))
            ? o
            : '') +
          '<strong>' +
          u(
            'function' == typeof (s = null != (s = n.title || (null != e ? e.title : e)) ? s : l)
              ? s.call(a, { name: 'title', hash: {}, data: r })
              : s,
          ) +
          '</strong> ' +
          u(
            'function' == typeof (s = null != (s = n.body || (null != e ? e.body : e)) ? s : l)
              ? s.call(a, { name: 'body', hash: {}, data: r })
              : s,
          ) +
          '\r\n'
        );
      },
      useData: !0,
    });
  },
  function(t, e, n) {
    var i = n(7);
    t.exports = (i.default || i).template({
      1: function(t, e, n, i, r) {
        var o,
          s = null != e ? e : t.nullContext || {},
          a = n.helperMissing,
          l = t.escapeExpression;
        return (
          '        <li class="nav-item" route="' +
          l(
            'function' == typeof (o = null != (o = n.path || (null != e ? e.path : e)) ? o : a)
              ? o.call(s, { name: 'path', hash: {}, data: r })
              : o,
          ) +
          '"><a class="nav-link">' +
          l(
            'function' == typeof (o = null != (o = n.name || (null != e ? e.name : e)) ? o : a)
              ? o.call(s, { name: 'name', hash: {}, data: r })
              : o,
          ) +
          '</a></li>\r\n'
        );
      },
      compiler: [7, '>= 4.0.0'],
      main: function(t, e, n, i, r) {
        var o,
          s = null != e ? e : t.nullContext || {};
        return (
          '\r\n  <a class="navbar-brand" href="#">Marionette <span>Wires</span></a>\r\n  <button type="button" class="navbar-toggler" data-toggle="collapse" data-target="#navbar-collapse">\r\n      <span class="navbar-toggler-icon"></span>\r\n  </button>\r\n\r\n  <div class="collapse navbar-collapse" id="navbar-collapse">\r\n    <ul class="nav navbar-nav mr-auto">\r\n' +
          (null !=
          (o = n.each.call(s, null != e ? e.primaryItems : e, {
            name: 'each',
            hash: {},
            fn: t.program(1, r, 0),
            inverse: t.noop,
            data: r,
          }))
            ? o
            : '') +
          '    </ul>\r\n\r\n    <ul class="nav navbar-nav navbar-right">\r\n' +
          (null !=
          (o = n.each.call(s, null != e ? e.secondaryItems : e, {
            name: 'each',
            hash: {},
            fn: t.program(1, r, 0),
            inverse: t.noop,
            data: r,
          }))
            ? o
            : '') +
          '    </ul>\r\n  </div>\r\n\r\n'
        );
      },
      useData: !0,
    });
  },
  function(t, e) {
    (t.exports = h),
      (t.exports.parse = o),
      (t.exports.compile = function(t, e) {
        return s(o(t, e));
      }),
      (t.exports.tokensToFunction = s),
      (t.exports.tokensToRegExp = c);
    var n = '/',
      i = './',
      r = new RegExp(
        [
          '(\\\\.)',
          '(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?',
        ].join('|'),
        'g',
      );
    function o(t, e) {
      for (
        var o,
          s = [],
          u = 0,
          c = 0,
          h = '',
          f = (e && e.delimiter) || n,
          d = (e && e.delimiters) || i,
          p = !1;
        null !== (o = r.exec(t));

      ) {
        var g = o[0],
          m = o[1],
          v = o.index;
        if (((h += t.slice(c, v)), (c = v + g.length), m)) (h += m[1]), (p = !0);
        else {
          var y = '',
            _ = t[c],
            b = o[2],
            w = o[3],
            E = o[4],
            x = o[5];
          if (!p && h.length) {
            var T = h.length - 1;
            d.indexOf(h[T]) > -1 && ((y = h[T]), (h = h.slice(0, T)));
          }
          h && (s.push(h), (h = ''), (p = !1));
          var C = '' !== y && void 0 !== _ && _ !== y,
            S = '+' === x || '*' === x,
            A = '?' === x || '*' === x,
            O = y || f,
            D = w || E;
          s.push({
            name: b || u++,
            prefix: y,
            delimiter: O,
            optional: A,
            repeat: S,
            partial: C,
            pattern: D ? l(D) : '[^' + a(O) + ']+?',
          });
        }
      }
      return (h || c < t.length) && s.push(h + t.substr(c)), s;
    }
    function s(t) {
      for (var e = new Array(t.length), n = 0; n < t.length; n++)
        'object' == typeof t[n] && (e[n] = new RegExp('^(?:' + t[n].pattern + ')$'));
      return function(n, i) {
        for (var r = '', o = (i && i.encode) || encodeURIComponent, s = 0; s < t.length; s++) {
          var a = t[s];
          if ('string' != typeof a) {
            var l,
              u = n ? n[a.name] : void 0;
            if (Array.isArray(u)) {
              if (!a.repeat)
                throw new TypeError('Expected "' + a.name + '" to not repeat, but got array');
              if (0 === u.length) {
                if (a.optional) continue;
                throw new TypeError('Expected "' + a.name + '" to not be empty');
              }
              for (var c = 0; c < u.length; c++) {
                if (((l = o(u[c], a)), !e[s].test(l)))
                  throw new TypeError('Expected all "' + a.name + '" to match "' + a.pattern + '"');
                r += (0 === c ? a.prefix : a.delimiter) + l;
              }
            } else if ('string' != typeof u && 'number' != typeof u && 'boolean' != typeof u) {
              if (!a.optional)
                throw new TypeError(
                  'Expected "' + a.name + '" to be ' + (a.repeat ? 'an array' : 'a string'),
                );
              a.partial && (r += a.prefix);
            } else {
              if (((l = o(String(u), a)), !e[s].test(l)))
                throw new TypeError(
                  'Expected "' + a.name + '" to match "' + a.pattern + '", but got "' + l + '"',
                );
              r += a.prefix + l;
            }
          } else r += a;
        }
        return r;
      };
    }
    function a(t) {
      return t.replace(/([.+*?=^!:${}()[\]|/\\])/g, '\\$1');
    }
    function l(t) {
      return t.replace(/([=!:$/()])/g, '\\$1');
    }
    function u(t) {
      return t && t.sensitive ? '' : 'i';
    }
    function c(t, e, r) {
      for (
        var o = (r = r || {}).strict,
          s = !1 !== r.end,
          l = a(r.delimiter || n),
          c = r.delimiters || i,
          h = []
            .concat(r.endsWith || [])
            .map(a)
            .concat('$')
            .join('|'),
          f = '',
          d = 0 === t.length,
          p = 0;
        p < t.length;
        p++
      ) {
        var g = t[p];
        if ('string' == typeof g)
          (f += a(g)), (d = p === t.length - 1 && c.indexOf(g[g.length - 1]) > -1);
        else {
          var m = a(g.prefix),
            v = g.repeat ? '(?:' + g.pattern + ')(?:' + m + '(?:' + g.pattern + '))*' : g.pattern;
          e && e.push(g),
            g.optional
              ? g.partial
                ? (f += m + '(' + v + ')?')
                : (f += '(?:' + m + '(' + v + '))?')
              : (f += m + '(' + v + ')');
        }
      }
      return (
        s
          ? (o || (f += '(?:' + l + ')?'), (f += '$' === h ? '$' : '(?=' + h + ')'))
          : (o || (f += '(?:' + l + '(?=' + h + '))?'), d || (f += '(?=' + l + '|' + h + ')')),
        new RegExp('^' + f, u(r))
      );
    }
    function h(t, e, n) {
      return t instanceof RegExp
        ? (function(t, e) {
            if (!e) return t;
            var n = t.source.match(/\((?!\?)/g);
            if (n)
              for (var i = 0; i < n.length; i++)
                e.push({
                  name: i,
                  prefix: null,
                  delimiter: null,
                  optional: !1,
                  repeat: !1,
                  partial: !1,
                  pattern: null,
                });
            return t;
          })(t, e)
        : Array.isArray(t)
        ? (function(t, e, n) {
            for (var i = [], r = 0; r < t.length; r++) i.push(h(t[r], e, n).source);
            return new RegExp('(?:' + i.join('|') + ')', u(n));
          })(t, e, n)
        : (function(t, e, n) {
            return c(o(t, n), e, n);
          })(t, e, n);
    }
  },
  function(t, e, n) {
    var i, r;
    (i = [n(0), n(2), n(5)]),
      void 0 ===
        (r = function(t, e, n) {
          return (function(t, e, n) {
            'use strict';
            var i = e.Syphon,
              r = (e.Syphon = {});
            (r.VERSION = '1.0.0'),
              (r.noConflict = function() {
                return (e.Syphon = i), this;
              }),
              (r.ignoredTypes = ['button', 'submit', 'reset', 'fieldset']),
              (r.serialize = function(e, i) {
                var r = {},
                  a = l(i),
                  c = o(e, a);
                return (
                  t.each(c, function(t) {
                    var e = n(t),
                      i = s(e),
                      o = a.keyExtractors.get(i),
                      l = o(e),
                      c = a.inputReaders.get(i),
                      h = c(e),
                      f = a.keyAssignmentValidators.get(i);
                    if (f(e, l, h)) {
                      var d = a.keySplitter(l);
                      r = u(r, d, h);
                    }
                  }),
                  r
                );
              }),
              (r.deserialize = function(e, i, r) {
                var a = l(r),
                  u = o(e, a),
                  h = c(a, i);
                t.each(u, function(t) {
                  var e = n(t),
                    i = s(e),
                    r = a.keyExtractors.get(i),
                    o = r(e),
                    l = a.inputWriters.get(i),
                    u = h[o];
                  l(e, u);
                });
              });
            var o = function(e, i) {
                var r = a(e);
                return (r = t.reject(r, function(e) {
                  var r = s(e),
                    o = i.keyExtractors.get(r),
                    a = o(n(e)),
                    l = t.find(i.ignoredTypes, function(t) {
                      return t === r || n(e).is(t);
                    }),
                    u = t.includes(i.include, a),
                    c = t.includes(i.exclude, a);
                  return !u && (!!i.include || c || l);
                }));
              },
              s = function(t) {
                var e,
                  i = n(t),
                  r = i[0].tagName,
                  o = r;
                return (
                  'input' === r.toLowerCase() && ((e = i.attr('type')), (o = e || 'text')),
                  o.toLowerCase()
                );
              },
              a = function(e) {
                return t.isUndefined(e.$el) ? n(e).find(':input') : e.$(':input');
              },
              l = function(e) {
                var n = t.clone(e) || {};
                return (
                  (n.ignoredTypes = t.clone(r.ignoredTypes)),
                  (n.inputReaders = n.inputReaders || r.InputReaders),
                  (n.inputWriters = n.inputWriters || r.InputWriters),
                  (n.keyExtractors = n.keyExtractors || r.KeyExtractors),
                  (n.keySplitter = n.keySplitter || r.KeySplitter),
                  (n.keyJoiner = n.keyJoiner || r.KeyJoiner),
                  (n.keyAssignmentValidators =
                    n.keyAssignmentValidators || r.KeyAssignmentValidators),
                  n
                );
              },
              u = function(e, n, i) {
                if (!n) return e;
                var r = n.shift();
                return (
                  e[r] || (e[r] = t.isArray(r) ? [] : {}),
                  0 === n.length && (t.isArray(e[r]) ? e[r].push(i) : (e[r] = i)),
                  n.length > 0 && u(e[r], n, i),
                  e
                );
              },
              c = function(e, n, i) {
                var r = {};
                return (
                  t.each(n, function(n, o) {
                    var s = {};
                    i && (o = e.keyJoiner(i, o)),
                      t.isArray(n)
                        ? (s[(o += '[]')] = n)
                        : t.isObject(n)
                        ? (s = c(e, n, o))
                        : (s[o] = n),
                      t.extend(r, s);
                  }),
                  r
                );
              },
              h = (r.TypeRegistry = function() {
                this.registeredTypes = {};
              });
            (h.extend = e.Model.extend),
              t.extend(h.prototype, {
                get: function(e) {
                  return t.has(this.registeredTypes, e)
                    ? this.registeredTypes[e]
                    : this.registeredTypes.default;
                },
                register: function(t, e) {
                  this.registeredTypes[t] = e;
                },
                registerDefault: function(t) {
                  this.registeredTypes.default = t;
                },
                unregister: function(e) {
                  t.has(this.registeredTypes, e) && delete this.registeredTypes[e];
                },
              });
            var f = (r.KeyExtractorSet = h.extend());
            (r.KeyExtractors = new f()).registerDefault(function(t) {
              return t.prop('name') || '';
            });
            var d = (r.InputReaderSet = h.extend()),
              p = (r.InputReaders = new d());
            p.registerDefault(function(t) {
              return t.val();
            }),
              p.register('checkbox', function(t) {
                return t.prop('indeterminate') ? null : t.prop('checked');
              });
            var g = (r.InputWriterSet = h.extend()),
              m = (r.InputWriters = new g());
            m.registerDefault(function(t, e) {
              t.val(e);
            }),
              m.register('checkbox', function(t, e) {
                null === e ? t.prop('indeterminate', !0) : t.prop('checked', e);
              }),
              m.register('radio', function(t, e) {
                t.prop('checked', t.val() === e.toString());
              });
            var v = (r.KeyAssignmentValidatorSet = h.extend()),
              y = (r.KeyAssignmentValidators = new v());
            return (
              y.registerDefault(function() {
                return !0;
              }),
              y.register('radio', function(t, e, n) {
                return t.prop('checked');
              }),
              (r.KeySplitter = function(t) {
                var e,
                  n = t.match(/[^\[\]]+/g);
                return (
                  t.length > 1 && t.indexOf('[]') === t.length - 2 && ((e = n.pop()), n.push([e])),
                  n
                );
              }),
              (r.KeyJoiner = function(t, e) {
                return t + '[' + e + ']';
              }),
              e.Syphon
            );
          })(t, e, n);
        }.apply(e, i)) || (t.exports = r);
  },
  function(t, e, n) {
    'use strict';
    n.r(e);
    var i = n(2),
      r = n.n(i),
      o = n(5),
      s = n.n(o),
      a = n(1);
    n(46), n(24), n(44);
    (r.a.$ = s.a), window.__agent && window.__agent.start(r.a, a);
    var l = n(4),
      u = n.n(l),
      c = n(3),
      h = n(0),
      f = n.n(h),
      d = n(10),
      p = n.n(d),
      g = u.a.channel('router');
    p.a.configure({ showSpinner: !1 });
    var m = a.Application.extend({
        initialize: function() {
          (this.$body = s()(document.body)),
            this.listenTo(g, {
              'before:transition': this.onBeforeTransition,
              transition: this.onTransition,
              'transition:abort': this.onTransitionAbort,
            });
        },
        onBeforeTransition: function() {
          var t = this;
          (this.transitioning = !0),
            f.a.delay(function() {
              t.transitioning && p.a.start();
            }, 50);
        },
        onTransition: function() {
          (this.transitioning = !1), this.$body.scrollTop(0), p.a.done();
        },
        onTransitionAbort: function() {
          (this.transitioning = !1), p.a.done(!0);
        },
      }),
      v = (function() {
        function t(t, e) {
          for (var n = 0; n < e.length; n++) {
            var i = e[n];
            (i.enumerable = i.enumerable || !1),
              (i.configurable = !0),
              'value' in i && (i.writable = !0),
              Object.defineProperty(t, i.key, i);
          }
        }
        return function(e, n, i) {
          return n && t(e.prototype, n), i && t(e, i), e;
        };
      })();
    var y = (function(t) {
        function e() {
          return (
            (function(t, e) {
              if (!(t instanceof e)) throw new TypeError('Cannot call a class as a function');
            })(this, e),
            (function(t, e) {
              if (!t)
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called",
                );
              return !e || ('object' != typeof e && 'function' != typeof e) ? t : e;
            })(this, (e.__proto__ || Object.getPrototypeOf(e)).apply(this, arguments))
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
          })(e, a['Region']),
          v(e, [
            {
              key: 'initialize',
              value: function(t) {
                this.animation = t.animation;
              },
            },
            {
              key: 'attachHtml',
              value: function(t) {
                var e = this,
                  n = !!this.animation && !!this.animation.inClass;
                this.$el.append(t.el),
                  t.$el.addClass('pt-page pt-page-current'),
                  n && this.isSwappingView()
                    ? (this.$el.css('overflow', 'hidden'),
                      t.$el.addClass(this.animation.inClass).one('animationend', function() {
                        e.$el.css('overflow', ''),
                          t.$el.removeClass(e.animation.inClass),
                          t.triggerMethod('page:transition:end');
                      }))
                    : t.triggerMethod('page:transition:end');
              },
            },
            {
              key: 'removeView',
              value: function(t) {
                var e = this;
                !!this.animation && !!this.animation.outClass && this.isSwappingView()
                  ? (this.$el.css('overflow', 'hidden'),
                    t.$el.addClass(this.animation.outClass).one('animationend', function() {
                      e.$el.css('overflow', ''), t.destroy();
                    }))
                  : t.destroy();
              },
            },
          ]),
          e
        );
      })(),
      _ = a.View.extend({
        el: '.application',
        template: !1,
        regions: {
          content: {
            el: '.application__content',
            regionClass: y,
            animation: { inClass: 'pt-page-moveFromLeft', outClass: 'pt-page-moveToRight' },
          },
        },
      }),
      b = n(8),
      w = n(22),
      E = n.n(w),
      x = a.View.extend({
        template: E.a,
        tagName: 'nav',
        className: 'header navbar navbar-expand-md navbar-light bg-light fixed-top',
        behaviors: [c.c],
        attributes: { role: 'navigation' },
        collectionEvents: { all: 'render' },
        templateContext: function() {
          return {
            primaryItems: this.serializeWhere({ type: 'primary' }),
            secondaryItems: this.serializeWhere({ type: 'secondary' }),
          };
        },
        serializeWhere: function(t) {
          return f.a.invoke(this.collection.where(t), 'toJSON');
        },
        ui: { collapse: '#navbar-collapse' },
        events: { 'show.bs.collapse #navbar-collapse': 'onCollapseShow' },
        onCollapseShow: function() {
          var t = this;
          this.listenToOnce(i.history, 'route', function() {
            t.ui.collapse.collapse('hide');
          });
        },
      }),
      T = new (b.a.extend({
        setup: function() {
          var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          (this.container = t.container),
            this.container || (this.container = new a.Region({ el: t.el }));
        },
        start: function() {
          (this.collection = new i.Collection()),
            (this.view = new x({ collection: this.collection })),
            this.container.show(this.view);
        },
        requests: { add: 'add', remove: 'remove', activate: 'activate', getItems: 'getItems' },
        add: function(t) {
          this.collection.add(t);
        },
        remove: function(t) {
          (t = this.collection.findWhere(t)), this.collection.remove(t);
        },
        activate: function(t) {
          this.collection.invoke('set', 'active', !1),
            (t = this.collection.findWhere(t)) && t.set('active', !0);
        },
        getItems: function() {
          return this.collection;
        },
      }))();
    function C(t) {
      var e = void 0,
        n = void 0;
      return t.length
        ? -1 === (n = (e = t[t.length - 1]).name.indexOf('.'))
          ? e.name
          : e.name.slice(0, n)
        : '';
    }
    var S = c.a.extend({
        viewClass: _,
        activate: function() {
          var t = this;
          return T.request('getItems').then(function(e) {
            t.headerItems = e;
          });
        },
        getOutlet: function() {
          var t = void 0,
            e = void 0,
            n = this.$router.state.activeTransition,
            i = C(n.routes),
            r = C(n.prev.routes);
          i === r
            ? n.routes.length > n.prev.routes.length
              ? ((e = 'pt-page-scaleDown'), (t = 'pt-page-moveFromBottom pt-page-ontop'))
              : ((e = 'pt-page-moveToBottom pt-page-ontop'), (t = 'pt-page-scaleUp'))
            : this.headerItems.findIndex(function(t) {
                return t.get('path') === i;
              }) -
                this.headerItems.findIndex(function(t) {
                  return t.get('path') === r;
                }) <
              0
            ? ((e = 'pt-page-moveToRight'), (t = 'pt-page-moveFromLeft'))
            : ((e = 'pt-page-moveToLeft'), (t = 'pt-page-moveFromRight'));
          var o = this.view.getRegion('content');
          return (o.animation.inClass = t), (o.animation.outClass = e), o;
        },
      }),
      A = n(13),
      O = n(12),
      D = n(20),
      I = n.n(D),
      k = a.View.extend({
        template: I.a,
        className: 'index',
        onPageTransitionEnd: function() {
          this.$('.index__billboard')
            .removeClass('d-none')
            .children()
            .addClass('shown');
        },
      }),
      N = c.a.extend({
        viewClass: k,
        activate: function() {
          T.request('activate', { path: '' });
        },
      }),
      R = n(14),
      P = n.n(R),
      L = i.Model.extend({
        urlRoot: '/api/books',
        isActive: function() {
          return this.collection.active === this;
        },
      }),
      M = r.a.Collection.extend({
        url: '../api/books/fixture.json',
        localStorage: new r.a.LocalStorage('books'),
        model: L,
      }),
      V = new (P.a.extend({ model: L, collection: M }))(),
      j = n(19),
      H = n.n(j),
      F = n(18),
      q = n.n(F),
      B = a.View.extend({
        template: q.a,
        tagName: 'a',
        attributes: function() {
          return {
            class: 'list-group-item list-group-item-action flex-column',
            route: 'books.show',
            'param-bookid': '' + this.model.get('id'),
          };
        },
      }),
      U = a.CollectionView.extend({ className: 'list-group', childView: B, behaviors: [c.c] }),
      W = a.Region.extend({
        attachHtml: function(t) {
          if ((t.$el.addClass('flip-card__face').appendTo(this.$el), this.isSwappingView())) {
            var e = this.$el.hasClass('is-flipped');
            t.$el.addClass('flip-card__face--' + (e ? 'front' : 'back')),
              this.$el.toggleClass('is-flipped');
          }
        },
        removeView: function(t) {
          this.isSwappingView()
            ? this.$el.one('transitionend', function() {
                t.destroy();
              })
            : t.destroy();
        },
      }),
      $ = a.View.extend({
        template: H.a,
        regions: { library: '.books__library', outlet: { el: '.books__viewer', regionClass: W } },
        onRender: function() {
          this.showChildView('library', new U({ collection: this.collection }));
        },
      }),
      z = c.a.extend({
        activate: function(t) {
          var e = this;
          return this.previousRoute
            ? (t.redirectTo(
                this.previousRoute.name,
                this.previousRoute.params,
                this.previousRoute.query,
              ),
              void (this.previousRoute = null))
            : V.findAll({ ajaxSync: !0 }).then(function(t) {
                e.collection = t;
              });
        },
        deactivate: function(t) {
          var e = t.prev.routes;
          this.previousRoute = e[e.length - 1];
        },
        viewClass: $,
        viewOptions: function() {
          return { collection: this.collection };
        },
      }),
      K = n(17),
      G = n.n(K),
      Q = a.View.extend({ template: G.a }),
      Y = n(16),
      X = n.n(Y),
      J = a.View.extend({ template: X.a, modelEvents: { all: 'render' } }),
      Z = c.a.extend({
        activate: function(t) {
          var e = this;
          return V.findAll({ ajaxSync: !0 }).then(function(n) {
            (e.collection = n),
              (e.model = e.collection.get(+t.params.bookid)),
              (e.collection.active = e.model);
          });
        },
        viewClass: J,
        viewOptions: function() {
          return { model: this.model };
        },
      }),
      tt = (n(27), new m());
    A.a.setup({ el: '.application__overlay' }),
      T.setup({ el: '.application__header' }),
      O.a.setup({ el: '.application__flashes' }),
      s()(document).ajaxError(function() {
        O.a.request('add', { type: 'danger', title: 'Server Error' });
      });
    var et = new c.b({ log: !0, logError: !0 });
    function nt() {
      return Promise.all([n.e(0), n.e(1)]).then(n.bind(null, 64));
    }
    et.map(function(t) {
      t('app', { path: '/', routeClass: S, abstract: !0 }, function() {
        t('index', { path: '', routeClass: N }),
          t('colors', { path: 'colors', routeClass: nt, abstract: !0 }, function() {
            t('colors.index', { path: '' }),
              t('colors.create', { path: 'new' }),
              t('colors.show', { path: ':colorid', outlet: !1 }, function() {
                t('colors.edit', { path: 'edit' });
              });
          }),
          t('books', { path: 'books', routeClass: z, abstract: !0 }, function() {
            t('books.index', { path: '', viewClass: Q }),
              t('books.show', { path: ':bookid', routeClass: Z });
          });
      });
    }),
      T.request('add', { name: 'Colors', path: 'colors', type: 'primary' }),
      T.request('add', { name: 'Books', path: 'books', type: 'primary' }),
      u.a.channel('router').on('route:render', function(t) {
        t instanceof S && window.__agent && (tt.layout = t.view);
      }),
      et.listen();
  },
  ,
  function(t, e, n) {},
  function(t, e, n) {
    t.exports = (function(t, e) {
      'use strict';
      var n = (e.Metal = {});
      function i(t, e) {
        return function() {
          var n = this._super;
          this._super = e;
          var i = t.apply(this, arguments);
          return (this._super = n), i;
        };
      }
      var r = /xyz/.test(new Function('xyz')) ? /\b_super\b/ : /.*/;
      function o(e, n) {
        var o,
          s,
          a,
          l,
          u = t.keys(n),
          c = u.length;
        for (o = 0; o < c; o++)
          (s = u[o]),
            (a = n[s]),
            (l = e[s]),
            r.test(a) && t.isFunction(a) && t.isFunction(l) ? (e[s] = i(a, l)) : (e[s] = a);
      }
      var s = (n.Class = function() {
        var t;
        (t = this).initialize.apply(t, arguments);
      });
      (s.prototype.initialize = t.noop),
        t.extend(s, {
          extend: function(e, n) {
            var s,
              a = this;
            (s =
              e && t.has(e, 'constructor')
                ? r.test(e.constructor)
                  ? i(e.constructor, a.prototype.constructor)
                  : e.constructor
                : function() {
                    a.apply(this, arguments);
                  }),
              t.extend(s, a),
              n && o(s, n);
            var l = function() {
              this.constructor = s;
            };
            return (
              (l.prototype = a.prototype),
              (s.prototype = new l()),
              e && o(s.prototype, e),
              (s.superclass = a),
              (s.__super__ = a.prototype),
              s
            );
          },
          mixin: function(t) {
            return o(this.prototype, t), this;
          },
          include: function(t) {
            return o(this, t), this;
          },
          isClass: function(t) {
            return !!t && (t instanceof s || t.prototype instanceof s || t === s);
          },
        });
      var a = (n.Mixin = function(e) {
        t.extend(this, e);
      });
      a.isMixin = function(t) {
        return !!t && t instanceof a;
      };
      var l = ['description', 'fileName', 'lineNumber', 'name', 'message', 'number'],
        u = (n.Error = s.extend.call(
          Error,
          {
            constructor: function(e) {
              var n = void 0 === arguments[1] ? {} : arguments[1];
              t.isObject(e) && (e = (n = e).message);
              var i = Error.call(this, e);
              t.extend(this, t.pick(i, l), t.pick(n, l)), u.captureStackTrace(this, u);
            },
            toString: function() {
              return this.name + ': ' + this.message;
            },
          },
          {
            captureStackTrace: function(t, e) {
              Error.captureStackTrace && Error.captureStackTrace(t, e);
            },
          },
        ));
      t.extend(u, s);
      var c = (n.deprecate = function(e, n) {
        (void 0 !== n && n) ||
          (t.isObject(e) && (e = c._format(e.prev, e.next)),
          (e = e && e.toString()),
          c._cache[e] || (c._warn('Deprecation warning: ' + e), (c._cache[e] = !0)));
      });
      (c._format = function(t, e) {
        return t + ' is going to be removed in the future. Please use ' + e + ' instead.';
      }),
        (c._warn = ('undefined' != typeof console && (console.warn || console.log)) || t.noop),
        (c._cache = {});
      var h = (n.Events = new a(e.Events));
      return s.mixin(h), n;
    })(n(0), n(2));
  },
  function(t, e, n) {
    'use strict';
    (function(n) {
      (e.__esModule = !0),
        (e.default = function(t) {
          var e = void 0 !== n ? n : window,
            i = e.Handlebars;
          t.noConflict = function() {
            return e.Handlebars === t && (e.Handlebars = i), t;
          };
        }),
        (t.exports = e.default);
    }.call(this, n(11)));
  },
  function(t, e, n) {
    'use strict';
    (e.__esModule = !0),
      (e.checkRevision = function(t) {
        var e = (t && t[0]) || 1,
          n = a.COMPILER_REVISION;
        if (e !== n) {
          if (e < n) {
            var i = a.REVISION_CHANGES[n],
              r = a.REVISION_CHANGES[e];
            throw new s.default(
              'Template was precompiled with an older version of Handlebars than the current runtime. Please update your precompiler to a newer version (' +
                i +
                ') or downgrade your runtime to an older version (' +
                r +
                ').',
            );
          }
          throw new s.default(
            'Template was precompiled with a newer version of Handlebars than the current runtime. Please update your runtime to a newer version (' +
              t[1] +
              ').',
          );
        }
      }),
      (e.template = function(t, e) {
        if (!e) throw new s.default('No environment passed to template');
        if (!t || !t.main) throw new s.default('Unknown template object: ' + typeof t);
        (t.main.decorator = t.main_d), e.VM.checkRevision(t.compiler);
        var n = {
          strict: function(t, e) {
            if (!(e in t)) throw new s.default('"' + e + '" not defined in ' + t);
            return t[e];
          },
          lookup: function(t, e) {
            for (var n = t.length, i = 0; i < n; i++) if (t[i] && null != t[i][e]) return t[i][e];
          },
          lambda: function(t, e) {
            return 'function' == typeof t ? t.call(e) : t;
          },
          escapeExpression: r.escapeExpression,
          invokePartial: function(n, i, o) {
            o.hash && ((i = r.extend({}, i, o.hash)), o.ids && (o.ids[0] = !0));
            n = e.VM.resolvePartial.call(this, n, i, o);
            var a = e.VM.invokePartial.call(this, n, i, o);
            null == a &&
              e.compile &&
              ((o.partials[o.name] = e.compile(n, t.compilerOptions, e)),
              (a = o.partials[o.name](i, o)));
            if (null != a) {
              if (o.indent) {
                for (
                  var l = a.split('\n'), u = 0, c = l.length;
                  u < c && (l[u] || u + 1 !== c);
                  u++
                )
                  l[u] = o.indent + l[u];
                a = l.join('\n');
              }
              return a;
            }
            throw new s.default(
              'The partial ' + o.name + ' could not be compiled when running in runtime-only mode',
            );
          },
          fn: function(e) {
            var n = t[e];
            return (n.decorator = t[e + '_d']), n;
          },
          programs: [],
          program: function(t, e, n, i, r) {
            var o = this.programs[t],
              s = this.fn(t);
            return (
              e || r || i || n
                ? (o = l(this, t, s, e, n, i, r))
                : o || (o = this.programs[t] = l(this, t, s)),
              o
            );
          },
          data: function(t, e) {
            for (; t && e--; ) t = t._parent;
            return t;
          },
          merge: function(t, e) {
            var n = t || e;
            return t && e && t !== e && (n = r.extend({}, e, t)), n;
          },
          nullContext: Object.seal({}),
          noop: e.VM.noop,
          compilerInfo: t.compiler,
        };
        function i(e) {
          var r = arguments.length <= 1 || void 0 === arguments[1] ? {} : arguments[1],
            o = r.data;
          i._setup(r),
            !r.partial &&
              t.useData &&
              (o = (function(t, e) {
                (e && 'root' in e) || ((e = e ? a.createFrame(e) : {}).root = t);
                return e;
              })(e, o));
          var s = void 0,
            l = t.useBlockParams ? [] : void 0;
          function u(e) {
            return '' + t.main(n, e, n.helpers, n.partials, o, l, s);
          }
          return (
            t.useDepths &&
              (s = r.depths ? (e != r.depths[0] ? [e].concat(r.depths) : r.depths) : [e]),
            (u = c(t.main, u, n, r.depths || [], o, l))(e, r)
          );
        }
        return (
          (i.isTop = !0),
          (i._setup = function(i) {
            i.partial
              ? ((n.helpers = i.helpers), (n.partials = i.partials), (n.decorators = i.decorators))
              : ((n.helpers = n.merge(i.helpers, e.helpers)),
                t.usePartial && (n.partials = n.merge(i.partials, e.partials)),
                (t.usePartial || t.useDecorators) &&
                  (n.decorators = n.merge(i.decorators, e.decorators)));
          }),
          (i._child = function(e, i, r, o) {
            if (t.useBlockParams && !r) throw new s.default('must pass block params');
            if (t.useDepths && !o) throw new s.default('must pass parent depths');
            return l(n, e, t[e], i, 0, r, o);
          }),
          i
        );
      }),
      (e.wrapProgram = l),
      (e.resolvePartial = function(t, e, n) {
        t
          ? t.call || n.name || ((n.name = t), (t = n.partials[t]))
          : (t = '@partial-block' === n.name ? n.data['partial-block'] : n.partials[n.name]);
        return t;
      }),
      (e.invokePartial = function(t, e, n) {
        var i = n.data && n.data['partial-block'];
        (n.partial = !0), n.ids && (n.data.contextPath = n.ids[0] || n.data.contextPath);
        var o = void 0;
        n.fn &&
          n.fn !== u &&
          (function() {
            n.data = a.createFrame(n.data);
            var t = n.fn;
            (o = n.data['partial-block'] = function(e) {
              var n = arguments.length <= 1 || void 0 === arguments[1] ? {} : arguments[1];
              return (n.data = a.createFrame(n.data)), (n.data['partial-block'] = i), t(e, n);
            }),
              t.partials && (n.partials = r.extend({}, n.partials, t.partials));
          })();
        void 0 === t && o && (t = o);
        if (void 0 === t) throw new s.default('The partial ' + n.name + ' could not be found');
        if (t instanceof Function) return t(e, n);
      }),
      (e.noop = u);
    var i,
      r = (function(t) {
        if (t && t.__esModule) return t;
        var e = {};
        if (null != t) for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
        return (e.default = t), e;
      })(n(6)),
      o = n(9),
      s = (i = o) && i.__esModule ? i : { default: i },
      a = n(15);
    function l(t, e, n, i, r, o, s) {
      function a(e) {
        var r = arguments.length <= 1 || void 0 === arguments[1] ? {} : arguments[1],
          a = s;
        return (
          !s || e == s[0] || (e === t.nullContext && null === s[0]) || (a = [e].concat(s)),
          n(t, e, t.helpers, t.partials, r.data || i, o && [r.blockParams].concat(o), a)
        );
      }
      return (
        ((a = c(n, a, t, s, i, o)).program = e),
        (a.depth = s ? s.length : 0),
        (a.blockParams = r || 0),
        a
      );
    }
    function u() {
      return '';
    }
    function c(t, e, n, i, o, s) {
      if (t.decorator) {
        var a = {};
        (e = t.decorator(e, a, n, i && i[0], o, s, i)), r.extend(e, a);
      }
      return e;
    }
  },
  function(t, e, n) {
    'use strict';
    function i(t) {
      this.string = t;
    }
    (e.__esModule = !0),
      (i.prototype.toString = i.prototype.toHTML = function() {
        return '' + this.string;
      }),
      (e.default = i),
      (t.exports = e.default);
  },
  function(t, e, n) {
    'use strict';
    e.__esModule = !0;
    var i = n(6),
      r = {
        methodMap: ['debug', 'info', 'warn', 'error'],
        level: 'info',
        lookupLevel: function(t) {
          if ('string' == typeof t) {
            var e = i.indexOf(r.methodMap, t.toLowerCase());
            t = e >= 0 ? e : parseInt(t, 10);
          }
          return t;
        },
        log: function(t) {
          if (
            ((t = r.lookupLevel(t)), 'undefined' != typeof console && r.lookupLevel(r.level) <= t)
          ) {
            var e = r.methodMap[t];
            console[e] || (e = 'log');
            for (var n = arguments.length, i = Array(n > 1 ? n - 1 : 0), o = 1; o < n; o++)
              i[o - 1] = arguments[o];
            console[e].apply(console, i);
          }
        },
      };
    (e.default = r), (t.exports = e.default);
  },
  function(t, e, n) {
    'use strict';
    e.__esModule = !0;
    var i = n(6);
    (e.default = function(t) {
      t.registerDecorator('inline', function(t, e, n, r) {
        var o = t;
        return (
          e.partials ||
            ((e.partials = {}),
            (o = function(r, o) {
              var s = n.partials;
              n.partials = i.extend({}, s, e.partials);
              var a = t(r, o);
              return (n.partials = s), a;
            })),
          (e.partials[r.args[0]] = r.fn),
          o
        );
      });
    }),
      (t.exports = e.default);
  },
  function(t, e, n) {
    'use strict';
    (e.__esModule = !0),
      (e.registerDefaultDecorators = function(t) {
        o.default(t);
      });
    var i,
      r = n(33),
      o = (i = r) && i.__esModule ? i : { default: i };
  },
  function(t, e, n) {
    'use strict';
    e.__esModule = !0;
    var i = n(6);
    (e.default = function(t) {
      t.registerHelper('with', function(t, e) {
        i.isFunction(t) && (t = t.call(this));
        var n = e.fn;
        if (i.isEmpty(t)) return e.inverse(this);
        var r = e.data;
        return (
          e.data &&
            e.ids &&
            ((r = i.createFrame(e.data)).contextPath = i.appendContextPath(
              e.data.contextPath,
              e.ids[0],
            )),
          n(t, { data: r, blockParams: i.blockParams([t], [r && r.contextPath]) })
        );
      });
    }),
      (t.exports = e.default);
  },
  function(t, e, n) {
    'use strict';
    (e.__esModule = !0),
      (e.default = function(t) {
        t.registerHelper('lookup', function(t, e) {
          return t && t[e];
        });
      }),
      (t.exports = e.default);
  },
  function(t, e, n) {
    'use strict';
    (e.__esModule = !0),
      (e.default = function(t) {
        t.registerHelper('log', function() {
          for (
            var e = [void 0], n = arguments[arguments.length - 1], i = 0;
            i < arguments.length - 1;
            i++
          )
            e.push(arguments[i]);
          var r = 1;
          null != n.hash.level
            ? (r = n.hash.level)
            : n.data && null != n.data.level && (r = n.data.level),
            (e[0] = r),
            t.log.apply(t, e);
        });
      }),
      (t.exports = e.default);
  },
  function(t, e, n) {
    'use strict';
    e.__esModule = !0;
    var i = n(6);
    (e.default = function(t) {
      t.registerHelper('if', function(t, e) {
        return (
          i.isFunction(t) && (t = t.call(this)),
          (!e.hash.includeZero && !t) || i.isEmpty(t) ? e.inverse(this) : e.fn(this)
        );
      }),
        t.registerHelper('unless', function(e, n) {
          return t.helpers.if.call(this, e, { fn: n.inverse, inverse: n.fn, hash: n.hash });
        });
    }),
      (t.exports = e.default);
  },
  function(t, e, n) {
    'use strict';
    e.__esModule = !0;
    var i,
      r = n(9),
      o = (i = r) && i.__esModule ? i : { default: i };
    (e.default = function(t) {
      t.registerHelper('helperMissing', function() {
        if (1 !== arguments.length)
          throw new o.default('Missing helper: "' + arguments[arguments.length - 1].name + '"');
      });
    }),
      (t.exports = e.default);
  },
  function(t, e, n) {
    'use strict';
    e.__esModule = !0;
    var i,
      r = n(6),
      o = n(9),
      s = (i = o) && i.__esModule ? i : { default: i };
    (e.default = function(t) {
      t.registerHelper('each', function(t, e) {
        if (!e) throw new s.default('Must pass iterator to #each');
        var n = e.fn,
          i = e.inverse,
          o = 0,
          a = '',
          l = void 0,
          u = void 0;
        function c(e, i, o) {
          l &&
            ((l.key = e),
            (l.index = i),
            (l.first = 0 === i),
            (l.last = !!o),
            u && (l.contextPath = u + e)),
            (a += n(t[e], { data: l, blockParams: r.blockParams([t[e], e], [u + e, null]) }));
        }
        if (
          (e.data && e.ids && (u = r.appendContextPath(e.data.contextPath, e.ids[0]) + '.'),
          r.isFunction(t) && (t = t.call(this)),
          e.data && (l = r.createFrame(e.data)),
          t && 'object' == typeof t)
        )
          if (r.isArray(t))
            for (var h = t.length; o < h; o++) o in t && c(o, o, o === t.length - 1);
          else {
            var f = void 0;
            for (var d in t) t.hasOwnProperty(d) && (void 0 !== f && c(f, o - 1), (f = d), o++);
            void 0 !== f && c(f, o - 1, !0);
          }
        return 0 === o && (a = i(this)), a;
      });
    }),
      (t.exports = e.default);
  },
  function(t, e, n) {
    'use strict';
    e.__esModule = !0;
    var i = n(6);
    (e.default = function(t) {
      t.registerHelper('blockHelperMissing', function(e, n) {
        var r = n.inverse,
          o = n.fn;
        if (!0 === e) return o(this);
        if (!1 === e || null == e) return r(this);
        if (i.isArray(e))
          return e.length > 0 ? (n.ids && (n.ids = [n.name]), t.helpers.each(e, n)) : r(this);
        if (n.data && n.ids) {
          var s = i.createFrame(n.data);
          (s.contextPath = i.appendContextPath(n.data.contextPath, n.name)), (n = { data: s });
        }
        return o(e, n);
      });
    }),
      (t.exports = e.default);
  },
  function(t, e, n) {
    'use strict';
    function i(t) {
      return t && t.__esModule ? t : { default: t };
    }
    (e.__esModule = !0),
      (e.registerDefaultHelpers = function(t) {
        r.default(t),
          o.default(t),
          s.default(t),
          a.default(t),
          l.default(t),
          u.default(t),
          c.default(t);
      });
    var r = i(n(41)),
      o = i(n(40)),
      s = i(n(39)),
      a = i(n(38)),
      l = i(n(37)),
      u = i(n(36)),
      c = i(n(35));
  },
  function(t, e, n) {
    'use strict';
    function i(t) {
      return t && t.__esModule ? t : { default: t };
    }
    function r(t) {
      if (t && t.__esModule) return t;
      var e = {};
      if (null != t) for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
      return (e.default = t), e;
    }
    e.__esModule = !0;
    var o = r(n(15)),
      s = i(n(31)),
      a = i(n(9)),
      l = r(n(6)),
      u = r(n(30)),
      c = i(n(29));
    function h() {
      var t = new o.HandlebarsEnvironment();
      return (
        l.extend(t, o),
        (t.SafeString = s.default),
        (t.Exception = a.default),
        (t.Utils = l),
        (t.escapeExpression = l.escapeExpression),
        (t.VM = u),
        (t.template = function(e) {
          return u.template(e, t);
        }),
        t
      );
    }
    var f = h();
    (f.create = h), c.default(f), (f.default = f), (e.default = f), (t.exports = e.default);
  },
  function(t, e, n) {
    t.exports = (function(t) {
      function e() {
        return ((65536 * (1 + Math.random())) | 0).toString(16).substring(1);
      }
      function n(t, e) {
        if (null != t) {
          var n = t[e];
          return 'function' == typeof n ? t[e]() : n;
        }
      }
      return (
        (t.LocalStorage = window.Store = function(t, e) {
          if (!this.localStorage)
            throw 'Backbone.localStorage: Environment does not support localStorage.';
          (this.name = t),
            (this.serializer = e || {
              serialize: function(t) {
                return (function(t) {
                  return t === Object(t);
                })(t)
                  ? JSON.stringify(t)
                  : t;
              },
              deserialize: function(t) {
                return t && JSON.parse(t);
              },
            });
          var n = this.localStorage().getItem(this.name);
          this.records = (n && n.split(',')) || [];
        }),
        (function(t, e) {
          for (var n in e) t[n] = e[n];
        })(t.LocalStorage.prototype, {
          save: function() {
            this.localStorage().setItem(this.name, this.records.join(','));
          },
          create: function(t) {
            return (
              t.id ||
                0 === t.id ||
                ((t.id = e() + e() + '-' + e() + '-' + e() + '-' + e() + '-' + e() + e() + e()),
                t.set(t.idAttribute, t.id)),
              this.localStorage().setItem(this._itemName(t.id), this.serializer.serialize(t)),
              this.records.push(t.id.toString()),
              this.save(),
              this.find(t)
            );
          },
          update: function(t) {
            this.localStorage().setItem(this._itemName(t.id), this.serializer.serialize(t));
            var e = t.id.toString();
            return (
              (function(t, e) {
                for (var n = t.length; n--; ) if (t[n] === e) return !0;
                return !1;
              })(this.records, e) || (this.records.push(e), this.save()),
              this.find(t)
            );
          },
          find: function(t) {
            return this.serializer.deserialize(this.localStorage().getItem(this._itemName(t.id)));
          },
          findAll: function() {
            for (var t, e, n = [], i = 0; i < this.records.length; i++)
              (t = this.records[i]),
                null !=
                  (e = this.serializer.deserialize(
                    this.localStorage().getItem(this._itemName(t)),
                  )) && n.push(e);
            return n;
          },
          destroy: function(t) {
            this.localStorage().removeItem(this._itemName(t.id));
            for (var e = t.id.toString(), n = 0; n < this.records.length; n++)
              this.records[n] === e && this.records.splice(n, 1);
            return this.save(), t;
          },
          localStorage: function() {
            return localStorage;
          },
          _clear: function() {
            var t = this.localStorage(),
              e = new RegExp('^' + this.name + '-');
            for (var n in (t.removeItem(this.name), t)) e.test(n) && t.removeItem(n);
            this.records.length = 0;
          },
          _storageSize: function() {
            return this.localStorage().length;
          },
          _itemName: function(t) {
            return this.name + '-' + t;
          },
        }),
        (t.LocalStorage.sync = window.Store.sync = t.localSync = function(e, i, r) {
          var o,
            s,
            a = n(i, 'localStorage') || n(i.collection, 'localStorage'),
            l = t.$ ? t.$.Deferred && t.$.Deferred() : t.Deferred && t.Deferred();
          try {
            switch (e) {
              case 'read':
                o = void 0 != i.id ? a.find(i) : a.findAll();
                break;
              case 'create':
                o = a.create(i);
                break;
              case 'update':
                o = a.update(i);
                break;
              case 'delete':
                o = a.destroy(i);
            }
          } catch (t) {
            s =
              22 === t.code && 0 === a._storageSize()
                ? 'Private browsing is unsupported'
                : t.message;
          }
          return (
            o
              ? (r && r.success && ('0.9.10' === t.VERSION ? r.success(i, o, r) : r.success(o)),
                l && l.resolve(o))
              : ((s = s || 'Record Not Found'),
                r && r.error && ('0.9.10' === t.VERSION ? r.error(i, s, r) : r.error(s)),
                l && l.reject(s)),
            r && r.complete && r.complete(o),
            l && l.promise()
          );
        }),
        (t.ajaxSync = t.sync),
        (t.getSyncMethod = function(e, i) {
          return (i && i.ajaxSync) || (!n(e, 'localStorage') && !n(e.collection, 'localStorage'))
            ? t.ajaxSync
            : t.localSync;
        }),
        (t.sync = function(e, n, i) {
          return t.getSyncMethod(n, i).apply(this, [e, n, i]);
        }),
        t.LocalStorage
      );
    })(n(2));
  },
  function(t, e, n) {
    'use strict';
    n.r(e),
      function(t) {
        for (
          /**!
           * @fileOverview Kickass library to create and place poppers near their reference elements.
           * @version 1.14.6
           * @license
           * Copyright (c) 2016 Federico Zivolo and contributors
           *
           * Permission is hereby granted, free of charge, to any person obtaining a copy
           * of this software and associated documentation files (the "Software"), to deal
           * in the Software without restriction, including without limitation the rights
           * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
           * copies of the Software, and to permit persons to whom the Software is
           * furnished to do so, subject to the following conditions:
           *
           * The above copyright notice and this permission notice shall be included in all
           * copies or substantial portions of the Software.
           *
           * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
           * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
           * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
           * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
           * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
           * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
           * SOFTWARE.
           */
          var n = 'undefined' != typeof window && 'undefined' != typeof document,
            i = ['Edge', 'Trident', 'Firefox'],
            r = 0,
            o = 0;
          o < i.length;
          o += 1
        )
          if (n && navigator.userAgent.indexOf(i[o]) >= 0) {
            r = 1;
            break;
          }
        var s =
          n && window.Promise
            ? function(t) {
                var e = !1;
                return function() {
                  e ||
                    ((e = !0),
                    window.Promise.resolve().then(function() {
                      (e = !1), t();
                    }));
                };
              }
            : function(t) {
                var e = !1;
                return function() {
                  e ||
                    ((e = !0),
                    setTimeout(function() {
                      (e = !1), t();
                    }, r));
                };
              };
        function a(t) {
          return t && '[object Function]' === {}.toString.call(t);
        }
        function l(t, e) {
          if (1 !== t.nodeType) return [];
          var n = t.ownerDocument.defaultView.getComputedStyle(t, null);
          return e ? n[e] : n;
        }
        function u(t) {
          return 'HTML' === t.nodeName ? t : t.parentNode || t.host;
        }
        function c(t) {
          if (!t) return document.body;
          switch (t.nodeName) {
            case 'HTML':
            case 'BODY':
              return t.ownerDocument.body;
            case '#document':
              return t.body;
          }
          var e = l(t),
            n = e.overflow,
            i = e.overflowX,
            r = e.overflowY;
          return /(auto|scroll|overlay)/.test(n + r + i) ? t : c(u(t));
        }
        var h = n && !(!window.MSInputMethodContext || !document.documentMode),
          f = n && /MSIE 10/.test(navigator.userAgent);
        function d(t) {
          return 11 === t ? h : 10 === t ? f : h || f;
        }
        function p(t) {
          if (!t) return document.documentElement;
          for (
            var e = d(10) ? document.body : null, n = t.offsetParent || null;
            n === e && t.nextElementSibling;

          )
            n = (t = t.nextElementSibling).offsetParent;
          var i = n && n.nodeName;
          return i && 'BODY' !== i && 'HTML' !== i
            ? -1 !== ['TH', 'TD', 'TABLE'].indexOf(n.nodeName) && 'static' === l(n, 'position')
              ? p(n)
              : n
            : t
            ? t.ownerDocument.documentElement
            : document.documentElement;
        }
        function g(t) {
          return null !== t.parentNode ? g(t.parentNode) : t;
        }
        function m(t, e) {
          if (!(t && t.nodeType && e && e.nodeType)) return document.documentElement;
          var n = t.compareDocumentPosition(e) & Node.DOCUMENT_POSITION_FOLLOWING,
            i = n ? t : e,
            r = n ? e : t,
            o = document.createRange();
          o.setStart(i, 0), o.setEnd(r, 0);
          var s,
            a,
            l = o.commonAncestorContainer;
          if ((t !== l && e !== l) || i.contains(r))
            return 'BODY' === (a = (s = l).nodeName) ||
              ('HTML' !== a && p(s.firstElementChild) !== s)
              ? p(l)
              : l;
          var u = g(t);
          return u.host ? m(u.host, e) : m(t, g(e).host);
        }
        function v(t) {
          var e =
              'top' === (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 'top')
                ? 'scrollTop'
                : 'scrollLeft',
            n = t.nodeName;
          if ('BODY' === n || 'HTML' === n) {
            var i = t.ownerDocument.documentElement;
            return (t.ownerDocument.scrollingElement || i)[e];
          }
          return t[e];
        }
        function y(t, e) {
          var n = 'x' === e ? 'Left' : 'Top',
            i = 'Left' === n ? 'Right' : 'Bottom';
          return (
            parseFloat(t['border' + n + 'Width'], 10) + parseFloat(t['border' + i + 'Width'], 10)
          );
        }
        function _(t, e, n, i) {
          return Math.max(
            e['offset' + t],
            e['scroll' + t],
            n['client' + t],
            n['offset' + t],
            n['scroll' + t],
            d(10)
              ? parseInt(n['offset' + t]) +
                  parseInt(i['margin' + ('Height' === t ? 'Top' : 'Left')]) +
                  parseInt(i['margin' + ('Height' === t ? 'Bottom' : 'Right')])
              : 0,
          );
        }
        function b(t) {
          var e = t.body,
            n = t.documentElement,
            i = d(10) && getComputedStyle(n);
          return { height: _('Height', e, n, i), width: _('Width', e, n, i) };
        }
        var w = function(t, e) {
            if (!(t instanceof e)) throw new TypeError('Cannot call a class as a function');
          },
          E = (function() {
            function t(t, e) {
              for (var n = 0; n < e.length; n++) {
                var i = e[n];
                (i.enumerable = i.enumerable || !1),
                  (i.configurable = !0),
                  'value' in i && (i.writable = !0),
                  Object.defineProperty(t, i.key, i);
              }
            }
            return function(e, n, i) {
              return n && t(e.prototype, n), i && t(e, i), e;
            };
          })(),
          x = function(t, e, n) {
            return (
              e in t
                ? Object.defineProperty(t, e, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                  })
                : (t[e] = n),
              t
            );
          },
          T =
            Object.assign ||
            function(t) {
              for (var e = 1; e < arguments.length; e++) {
                var n = arguments[e];
                for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i]);
              }
              return t;
            };
        function C(t) {
          return T({}, t, { right: t.left + t.width, bottom: t.top + t.height });
        }
        function S(t) {
          var e = {};
          try {
            if (d(10)) {
              e = t.getBoundingClientRect();
              var n = v(t, 'top'),
                i = v(t, 'left');
              (e.top += n), (e.left += i), (e.bottom += n), (e.right += i);
            } else e = t.getBoundingClientRect();
          } catch (t) {}
          var r = { left: e.left, top: e.top, width: e.right - e.left, height: e.bottom - e.top },
            o = 'HTML' === t.nodeName ? b(t.ownerDocument) : {},
            s = o.width || t.clientWidth || r.right - r.left,
            a = o.height || t.clientHeight || r.bottom - r.top,
            u = t.offsetWidth - s,
            c = t.offsetHeight - a;
          if (u || c) {
            var h = l(t);
            (u -= y(h, 'x')), (c -= y(h, 'y')), (r.width -= u), (r.height -= c);
          }
          return C(r);
        }
        function A(t, e) {
          var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
            i = d(10),
            r = 'HTML' === e.nodeName,
            o = S(t),
            s = S(e),
            a = c(t),
            u = l(e),
            h = parseFloat(u.borderTopWidth, 10),
            f = parseFloat(u.borderLeftWidth, 10);
          n && r && ((s.top = Math.max(s.top, 0)), (s.left = Math.max(s.left, 0)));
          var p = C({
            top: o.top - s.top - h,
            left: o.left - s.left - f,
            width: o.width,
            height: o.height,
          });
          if (((p.marginTop = 0), (p.marginLeft = 0), !i && r)) {
            var g = parseFloat(u.marginTop, 10),
              m = parseFloat(u.marginLeft, 10);
            (p.top -= h - g),
              (p.bottom -= h - g),
              (p.left -= f - m),
              (p.right -= f - m),
              (p.marginTop = g),
              (p.marginLeft = m);
          }
          return (
            (i && !n ? e.contains(a) : e === a && 'BODY' !== a.nodeName) &&
              (p = (function(t, e) {
                var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                  i = v(e, 'top'),
                  r = v(e, 'left'),
                  o = n ? -1 : 1;
                return (
                  (t.top += i * o), (t.bottom += i * o), (t.left += r * o), (t.right += r * o), t
                );
              })(p, e)),
            p
          );
        }
        function O(t) {
          if (!t || !t.parentElement || d()) return document.documentElement;
          for (var e = t.parentElement; e && 'none' === l(e, 'transform'); ) e = e.parentElement;
          return e || document.documentElement;
        }
        function D(t, e, n, i) {
          var r = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
            o = { top: 0, left: 0 },
            s = r ? O(t) : m(t, e);
          if ('viewport' === i)
            o = (function(t) {
              var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                n = t.ownerDocument.documentElement,
                i = A(t, n),
                r = Math.max(n.clientWidth, window.innerWidth || 0),
                o = Math.max(n.clientHeight, window.innerHeight || 0),
                s = e ? 0 : v(n),
                a = e ? 0 : v(n, 'left');
              return C({
                top: s - i.top + i.marginTop,
                left: a - i.left + i.marginLeft,
                width: r,
                height: o,
              });
            })(s, r);
          else {
            var a = void 0;
            'scrollParent' === i
              ? 'BODY' === (a = c(u(e))).nodeName && (a = t.ownerDocument.documentElement)
              : (a = 'window' === i ? t.ownerDocument.documentElement : i);
            var h = A(a, s, r);
            if (
              'HTML' !== a.nodeName ||
              (function t(e) {
                var n = e.nodeName;
                return 'BODY' !== n && 'HTML' !== n && ('fixed' === l(e, 'position') || t(u(e)));
              })(s)
            )
              o = h;
            else {
              var f = b(t.ownerDocument),
                d = f.height,
                p = f.width;
              (o.top += h.top - h.marginTop),
                (o.bottom = d + h.top),
                (o.left += h.left - h.marginLeft),
                (o.right = p + h.left);
            }
          }
          var g = 'number' == typeof (n = n || 0);
          return (
            (o.left += g ? n : n.left || 0),
            (o.top += g ? n : n.top || 0),
            (o.right -= g ? n : n.right || 0),
            (o.bottom -= g ? n : n.bottom || 0),
            o
          );
        }
        function I(t, e, n, i, r) {
          var o = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0;
          if (-1 === t.indexOf('auto')) return t;
          var s = D(n, i, o, r),
            a = {
              top: { width: s.width, height: e.top - s.top },
              right: { width: s.right - e.right, height: s.height },
              bottom: { width: s.width, height: s.bottom - e.bottom },
              left: { width: e.left - s.left, height: s.height },
            },
            l = Object.keys(a)
              .map(function(t) {
                return T({ key: t }, a[t], { area: ((e = a[t]), e.width * e.height) });
                var e;
              })
              .sort(function(t, e) {
                return e.area - t.area;
              }),
            u = l.filter(function(t) {
              var e = t.width,
                i = t.height;
              return e >= n.clientWidth && i >= n.clientHeight;
            }),
            c = u.length > 0 ? u[0].key : l[0].key,
            h = t.split('-')[1];
          return c + (h ? '-' + h : '');
        }
        function k(t, e, n) {
          var i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
          return A(n, i ? O(e) : m(e, n), i);
        }
        function N(t) {
          var e = t.ownerDocument.defaultView.getComputedStyle(t),
            n = parseFloat(e.marginTop || 0) + parseFloat(e.marginBottom || 0),
            i = parseFloat(e.marginLeft || 0) + parseFloat(e.marginRight || 0);
          return { width: t.offsetWidth + i, height: t.offsetHeight + n };
        }
        function R(t) {
          var e = { left: 'right', right: 'left', bottom: 'top', top: 'bottom' };
          return t.replace(/left|right|bottom|top/g, function(t) {
            return e[t];
          });
        }
        function P(t, e, n) {
          n = n.split('-')[0];
          var i = N(t),
            r = { width: i.width, height: i.height },
            o = -1 !== ['right', 'left'].indexOf(n),
            s = o ? 'top' : 'left',
            a = o ? 'left' : 'top',
            l = o ? 'height' : 'width',
            u = o ? 'width' : 'height';
          return (r[s] = e[s] + e[l] / 2 - i[l] / 2), (r[a] = n === a ? e[a] - i[u] : e[R(a)]), r;
        }
        function L(t, e) {
          return Array.prototype.find ? t.find(e) : t.filter(e)[0];
        }
        function M(t, e, n) {
          return (
            (void 0 === n
              ? t
              : t.slice(
                  0,
                  (function(t, e, n) {
                    if (Array.prototype.findIndex)
                      return t.findIndex(function(t) {
                        return t[e] === n;
                      });
                    var i = L(t, function(t) {
                      return t[e] === n;
                    });
                    return t.indexOf(i);
                  })(t, 'name', n),
                )
            ).forEach(function(t) {
              t.function && console.warn('`modifier.function` is deprecated, use `modifier.fn`!');
              var n = t.function || t.fn;
              t.enabled &&
                a(n) &&
                ((e.offsets.popper = C(e.offsets.popper)),
                (e.offsets.reference = C(e.offsets.reference)),
                (e = n(e, t)));
            }),
            e
          );
        }
        function V(t, e) {
          return t.some(function(t) {
            var n = t.name;
            return t.enabled && n === e;
          });
        }
        function j(t) {
          for (
            var e = [!1, 'ms', 'Webkit', 'Moz', 'O'],
              n = t.charAt(0).toUpperCase() + t.slice(1),
              i = 0;
            i < e.length;
            i++
          ) {
            var r = e[i],
              o = r ? '' + r + n : t;
            if (void 0 !== document.body.style[o]) return o;
          }
          return null;
        }
        function H(t) {
          var e = t.ownerDocument;
          return e ? e.defaultView : window;
        }
        function F(t, e, n, i) {
          (n.updateBound = i), H(t).addEventListener('resize', n.updateBound, { passive: !0 });
          var r = c(t);
          return (
            (function t(e, n, i, r) {
              var o = 'BODY' === e.nodeName,
                s = o ? e.ownerDocument.defaultView : e;
              s.addEventListener(n, i, { passive: !0 }),
                o || t(c(s.parentNode), n, i, r),
                r.push(s);
            })(r, 'scroll', n.updateBound, n.scrollParents),
            (n.scrollElement = r),
            (n.eventsEnabled = !0),
            n
          );
        }
        function q() {
          var t, e;
          this.state.eventsEnabled &&
            (cancelAnimationFrame(this.scheduleUpdate),
            (this.state = ((t = this.reference),
            (e = this.state),
            H(t).removeEventListener('resize', e.updateBound),
            e.scrollParents.forEach(function(t) {
              t.removeEventListener('scroll', e.updateBound);
            }),
            (e.updateBound = null),
            (e.scrollParents = []),
            (e.scrollElement = null),
            (e.eventsEnabled = !1),
            e)));
        }
        function B(t) {
          return '' !== t && !isNaN(parseFloat(t)) && isFinite(t);
        }
        function U(t, e) {
          Object.keys(e).forEach(function(n) {
            var i = '';
            -1 !== ['width', 'height', 'top', 'right', 'bottom', 'left'].indexOf(n) &&
              B(e[n]) &&
              (i = 'px'),
              (t.style[n] = e[n] + i);
          });
        }
        var W = n && /Firefox/i.test(navigator.userAgent);
        function $(t, e, n) {
          var i = L(t, function(t) {
              return t.name === e;
            }),
            r =
              !!i &&
              t.some(function(t) {
                return t.name === n && t.enabled && t.order < i.order;
              });
          if (!r) {
            var o = '`' + e + '`',
              s = '`' + n + '`';
            console.warn(
              s +
                ' modifier is required by ' +
                o +
                ' modifier in order to work, be sure to include it before ' +
                o +
                '!',
            );
          }
          return r;
        }
        var z = [
            'auto-start',
            'auto',
            'auto-end',
            'top-start',
            'top',
            'top-end',
            'right-start',
            'right',
            'right-end',
            'bottom-end',
            'bottom',
            'bottom-start',
            'left-end',
            'left',
            'left-start',
          ],
          K = z.slice(3);
        function G(t) {
          var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            n = K.indexOf(t),
            i = K.slice(n + 1).concat(K.slice(0, n));
          return e ? i.reverse() : i;
        }
        var Q = { FLIP: 'flip', CLOCKWISE: 'clockwise', COUNTERCLOCKWISE: 'counterclockwise' };
        function Y(t, e, n, i) {
          var r = [0, 0],
            o = -1 !== ['right', 'left'].indexOf(i),
            s = t.split(/(\+|\-)/).map(function(t) {
              return t.trim();
            }),
            a = s.indexOf(
              L(s, function(t) {
                return -1 !== t.search(/,|\s/);
              }),
            );
          s[a] &&
            -1 === s[a].indexOf(',') &&
            console.warn(
              'Offsets separated by white space(s) are deprecated, use a comma (,) instead.',
            );
          var l = /\s*,\s*|\s+/,
            u =
              -1 !== a
                ? [
                    s.slice(0, a).concat([s[a].split(l)[0]]),
                    [s[a].split(l)[1]].concat(s.slice(a + 1)),
                  ]
                : [s];
          return (
            (u = u.map(function(t, i) {
              var r = (1 === i ? !o : o) ? 'height' : 'width',
                s = !1;
              return t
                .reduce(function(t, e) {
                  return '' === t[t.length - 1] && -1 !== ['+', '-'].indexOf(e)
                    ? ((t[t.length - 1] = e), (s = !0), t)
                    : s
                    ? ((t[t.length - 1] += e), (s = !1), t)
                    : t.concat(e);
                }, [])
                .map(function(t) {
                  return (function(t, e, n, i) {
                    var r = t.match(/((?:\-|\+)?\d*\.?\d*)(.*)/),
                      o = +r[1],
                      s = r[2];
                    if (!o) return t;
                    if (0 === s.indexOf('%')) {
                      var a = void 0;
                      switch (s) {
                        case '%p':
                          a = n;
                          break;
                        case '%':
                        case '%r':
                        default:
                          a = i;
                      }
                      return (C(a)[e] / 100) * o;
                    }
                    if ('vh' === s || 'vw' === s)
                      return (
                        (('vh' === s
                          ? Math.max(document.documentElement.clientHeight, window.innerHeight || 0)
                          : Math.max(
                              document.documentElement.clientWidth,
                              window.innerWidth || 0,
                            )) /
                          100) *
                        o
                      );
                    return o;
                  })(t, r, e, n);
                });
            })).forEach(function(t, e) {
              t.forEach(function(n, i) {
                B(n) && (r[e] += n * ('-' === t[i - 1] ? -1 : 1));
              });
            }),
            r
          );
        }
        var X = {
            placement: 'bottom',
            positionFixed: !1,
            eventsEnabled: !0,
            removeOnDestroy: !1,
            onCreate: function() {},
            onUpdate: function() {},
            modifiers: {
              shift: {
                order: 100,
                enabled: !0,
                fn: function(t) {
                  var e = t.placement,
                    n = e.split('-')[0],
                    i = e.split('-')[1];
                  if (i) {
                    var r = t.offsets,
                      o = r.reference,
                      s = r.popper,
                      a = -1 !== ['bottom', 'top'].indexOf(n),
                      l = a ? 'left' : 'top',
                      u = a ? 'width' : 'height',
                      c = { start: x({}, l, o[l]), end: x({}, l, o[l] + o[u] - s[u]) };
                    t.offsets.popper = T({}, s, c[i]);
                  }
                  return t;
                },
              },
              offset: {
                order: 200,
                enabled: !0,
                fn: function(t, e) {
                  var n = e.offset,
                    i = t.placement,
                    r = t.offsets,
                    o = r.popper,
                    s = r.reference,
                    a = i.split('-')[0],
                    l = void 0;
                  return (
                    (l = B(+n) ? [+n, 0] : Y(n, o, s, a)),
                    'left' === a
                      ? ((o.top += l[0]), (o.left -= l[1]))
                      : 'right' === a
                      ? ((o.top += l[0]), (o.left += l[1]))
                      : 'top' === a
                      ? ((o.left += l[0]), (o.top -= l[1]))
                      : 'bottom' === a && ((o.left += l[0]), (o.top += l[1])),
                    (t.popper = o),
                    t
                  );
                },
                offset: 0,
              },
              preventOverflow: {
                order: 300,
                enabled: !0,
                fn: function(t, e) {
                  var n = e.boundariesElement || p(t.instance.popper);
                  t.instance.reference === n && (n = p(n));
                  var i = j('transform'),
                    r = t.instance.popper.style,
                    o = r.top,
                    s = r.left,
                    a = r[i];
                  (r.top = ''), (r.left = ''), (r[i] = '');
                  var l = D(t.instance.popper, t.instance.reference, e.padding, n, t.positionFixed);
                  (r.top = o), (r.left = s), (r[i] = a), (e.boundaries = l);
                  var u = e.priority,
                    c = t.offsets.popper,
                    h = {
                      primary: function(t) {
                        var n = c[t];
                        return (
                          c[t] < l[t] && !e.escapeWithReference && (n = Math.max(c[t], l[t])),
                          x({}, t, n)
                        );
                      },
                      secondary: function(t) {
                        var n = 'right' === t ? 'left' : 'top',
                          i = c[n];
                        return (
                          c[t] > l[t] &&
                            !e.escapeWithReference &&
                            (i = Math.min(c[n], l[t] - ('right' === t ? c.width : c.height))),
                          x({}, n, i)
                        );
                      },
                    };
                  return (
                    u.forEach(function(t) {
                      var e = -1 !== ['left', 'top'].indexOf(t) ? 'primary' : 'secondary';
                      c = T({}, c, h[e](t));
                    }),
                    (t.offsets.popper = c),
                    t
                  );
                },
                priority: ['left', 'right', 'top', 'bottom'],
                padding: 5,
                boundariesElement: 'scrollParent',
              },
              keepTogether: {
                order: 400,
                enabled: !0,
                fn: function(t) {
                  var e = t.offsets,
                    n = e.popper,
                    i = e.reference,
                    r = t.placement.split('-')[0],
                    o = Math.floor,
                    s = -1 !== ['top', 'bottom'].indexOf(r),
                    a = s ? 'right' : 'bottom',
                    l = s ? 'left' : 'top',
                    u = s ? 'width' : 'height';
                  return (
                    n[a] < o(i[l]) && (t.offsets.popper[l] = o(i[l]) - n[u]),
                    n[l] > o(i[a]) && (t.offsets.popper[l] = o(i[a])),
                    t
                  );
                },
              },
              arrow: {
                order: 500,
                enabled: !0,
                fn: function(t, e) {
                  var n;
                  if (!$(t.instance.modifiers, 'arrow', 'keepTogether')) return t;
                  var i = e.element;
                  if ('string' == typeof i) {
                    if (!(i = t.instance.popper.querySelector(i))) return t;
                  } else if (!t.instance.popper.contains(i))
                    return (
                      console.warn('WARNING: `arrow.element` must be child of its popper element!'),
                      t
                    );
                  var r = t.placement.split('-')[0],
                    o = t.offsets,
                    s = o.popper,
                    a = o.reference,
                    u = -1 !== ['left', 'right'].indexOf(r),
                    c = u ? 'height' : 'width',
                    h = u ? 'Top' : 'Left',
                    f = h.toLowerCase(),
                    d = u ? 'left' : 'top',
                    p = u ? 'bottom' : 'right',
                    g = N(i)[c];
                  a[p] - g < s[f] && (t.offsets.popper[f] -= s[f] - (a[p] - g)),
                    a[f] + g > s[p] && (t.offsets.popper[f] += a[f] + g - s[p]),
                    (t.offsets.popper = C(t.offsets.popper));
                  var m = a[f] + a[c] / 2 - g / 2,
                    v = l(t.instance.popper),
                    y = parseFloat(v['margin' + h], 10),
                    _ = parseFloat(v['border' + h + 'Width'], 10),
                    b = m - t.offsets.popper[f] - y - _;
                  return (
                    (b = Math.max(Math.min(s[c] - g, b), 0)),
                    (t.arrowElement = i),
                    (t.offsets.arrow = (x((n = {}), f, Math.round(b)), x(n, d, ''), n)),
                    t
                  );
                },
                element: '[x-arrow]',
              },
              flip: {
                order: 600,
                enabled: !0,
                fn: function(t, e) {
                  if (V(t.instance.modifiers, 'inner')) return t;
                  if (t.flipped && t.placement === t.originalPlacement) return t;
                  var n = D(
                      t.instance.popper,
                      t.instance.reference,
                      e.padding,
                      e.boundariesElement,
                      t.positionFixed,
                    ),
                    i = t.placement.split('-')[0],
                    r = R(i),
                    o = t.placement.split('-')[1] || '',
                    s = [];
                  switch (e.behavior) {
                    case Q.FLIP:
                      s = [i, r];
                      break;
                    case Q.CLOCKWISE:
                      s = G(i);
                      break;
                    case Q.COUNTERCLOCKWISE:
                      s = G(i, !0);
                      break;
                    default:
                      s = e.behavior;
                  }
                  return (
                    s.forEach(function(a, l) {
                      if (i !== a || s.length === l + 1) return t;
                      (i = t.placement.split('-')[0]), (r = R(i));
                      var u = t.offsets.popper,
                        c = t.offsets.reference,
                        h = Math.floor,
                        f =
                          ('left' === i && h(u.right) > h(c.left)) ||
                          ('right' === i && h(u.left) < h(c.right)) ||
                          ('top' === i && h(u.bottom) > h(c.top)) ||
                          ('bottom' === i && h(u.top) < h(c.bottom)),
                        d = h(u.left) < h(n.left),
                        p = h(u.right) > h(n.right),
                        g = h(u.top) < h(n.top),
                        m = h(u.bottom) > h(n.bottom),
                        v =
                          ('left' === i && d) ||
                          ('right' === i && p) ||
                          ('top' === i && g) ||
                          ('bottom' === i && m),
                        y = -1 !== ['top', 'bottom'].indexOf(i),
                        _ =
                          !!e.flipVariations &&
                          ((y && 'start' === o && d) ||
                            (y && 'end' === o && p) ||
                            (!y && 'start' === o && g) ||
                            (!y && 'end' === o && m));
                      (f || v || _) &&
                        ((t.flipped = !0),
                        (f || v) && (i = s[l + 1]),
                        _ &&
                          (o = (function(t) {
                            return 'end' === t ? 'start' : 'start' === t ? 'end' : t;
                          })(o)),
                        (t.placement = i + (o ? '-' + o : '')),
                        (t.offsets.popper = T(
                          {},
                          t.offsets.popper,
                          P(t.instance.popper, t.offsets.reference, t.placement),
                        )),
                        (t = M(t.instance.modifiers, t, 'flip')));
                    }),
                    t
                  );
                },
                behavior: 'flip',
                padding: 5,
                boundariesElement: 'viewport',
              },
              inner: {
                order: 700,
                enabled: !1,
                fn: function(t) {
                  var e = t.placement,
                    n = e.split('-')[0],
                    i = t.offsets,
                    r = i.popper,
                    o = i.reference,
                    s = -1 !== ['left', 'right'].indexOf(n),
                    a = -1 === ['top', 'left'].indexOf(n);
                  return (
                    (r[s ? 'left' : 'top'] = o[n] - (a ? r[s ? 'width' : 'height'] : 0)),
                    (t.placement = R(e)),
                    (t.offsets.popper = C(r)),
                    t
                  );
                },
              },
              hide: {
                order: 800,
                enabled: !0,
                fn: function(t) {
                  if (!$(t.instance.modifiers, 'hide', 'preventOverflow')) return t;
                  var e = t.offsets.reference,
                    n = L(t.instance.modifiers, function(t) {
                      return 'preventOverflow' === t.name;
                    }).boundaries;
                  if (
                    e.bottom < n.top ||
                    e.left > n.right ||
                    e.top > n.bottom ||
                    e.right < n.left
                  ) {
                    if (!0 === t.hide) return t;
                    (t.hide = !0), (t.attributes['x-out-of-boundaries'] = '');
                  } else {
                    if (!1 === t.hide) return t;
                    (t.hide = !1), (t.attributes['x-out-of-boundaries'] = !1);
                  }
                  return t;
                },
              },
              computeStyle: {
                order: 850,
                enabled: !0,
                fn: function(t, e) {
                  var n = e.x,
                    i = e.y,
                    r = t.offsets.popper,
                    o = L(t.instance.modifiers, function(t) {
                      return 'applyStyle' === t.name;
                    }).gpuAcceleration;
                  void 0 !== o &&
                    console.warn(
                      'WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!',
                    );
                  var s = void 0 !== o ? o : e.gpuAcceleration,
                    a = p(t.instance.popper),
                    l = S(a),
                    u = { position: r.position },
                    c = (function(t, e) {
                      var n = t.offsets,
                        i = n.popper,
                        r = n.reference,
                        o = -1 !== ['left', 'right'].indexOf(t.placement),
                        s = -1 !== t.placement.indexOf('-'),
                        a = r.width % 2 == i.width % 2,
                        l = r.width % 2 == 1 && i.width % 2 == 1,
                        u = function(t) {
                          return t;
                        },
                        c = e ? (o || s || a ? Math.round : Math.floor) : u,
                        h = e ? Math.round : u;
                      return {
                        left: c(l && !s && e ? i.left - 1 : i.left),
                        top: h(i.top),
                        bottom: h(i.bottom),
                        right: c(i.right),
                      };
                    })(t, window.devicePixelRatio < 2 || !W),
                    h = 'bottom' === n ? 'top' : 'bottom',
                    f = 'right' === i ? 'left' : 'right',
                    d = j('transform'),
                    g = void 0,
                    m = void 0;
                  if (
                    ((m =
                      'bottom' === h
                        ? 'HTML' === a.nodeName
                          ? -a.clientHeight + c.bottom
                          : -l.height + c.bottom
                        : c.top),
                    (g =
                      'right' === f
                        ? 'HTML' === a.nodeName
                          ? -a.clientWidth + c.right
                          : -l.width + c.right
                        : c.left),
                    s && d)
                  )
                    (u[d] = 'translate3d(' + g + 'px, ' + m + 'px, 0)'),
                      (u[h] = 0),
                      (u[f] = 0),
                      (u.willChange = 'transform');
                  else {
                    var v = 'bottom' === h ? -1 : 1,
                      y = 'right' === f ? -1 : 1;
                    (u[h] = m * v), (u[f] = g * y), (u.willChange = h + ', ' + f);
                  }
                  var _ = { 'x-placement': t.placement };
                  return (
                    (t.attributes = T({}, _, t.attributes)),
                    (t.styles = T({}, u, t.styles)),
                    (t.arrowStyles = T({}, t.offsets.arrow, t.arrowStyles)),
                    t
                  );
                },
                gpuAcceleration: !0,
                x: 'bottom',
                y: 'right',
              },
              applyStyle: {
                order: 900,
                enabled: !0,
                fn: function(t) {
                  var e, n;
                  return (
                    U(t.instance.popper, t.styles),
                    (e = t.instance.popper),
                    (n = t.attributes),
                    Object.keys(n).forEach(function(t) {
                      !1 !== n[t] ? e.setAttribute(t, n[t]) : e.removeAttribute(t);
                    }),
                    t.arrowElement &&
                      Object.keys(t.arrowStyles).length &&
                      U(t.arrowElement, t.arrowStyles),
                    t
                  );
                },
                onLoad: function(t, e, n, i, r) {
                  var o = k(r, e, t, n.positionFixed),
                    s = I(
                      n.placement,
                      o,
                      e,
                      t,
                      n.modifiers.flip.boundariesElement,
                      n.modifiers.flip.padding,
                    );
                  return (
                    e.setAttribute('x-placement', s),
                    U(e, { position: n.positionFixed ? 'fixed' : 'absolute' }),
                    n
                  );
                },
                gpuAcceleration: void 0,
              },
            },
          },
          J = (function() {
            function t(e, n) {
              var i = this,
                r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
              w(this, t),
                (this.scheduleUpdate = function() {
                  return requestAnimationFrame(i.update);
                }),
                (this.update = s(this.update.bind(this))),
                (this.options = T({}, t.Defaults, r)),
                (this.state = { isDestroyed: !1, isCreated: !1, scrollParents: [] }),
                (this.reference = e && e.jquery ? e[0] : e),
                (this.popper = n && n.jquery ? n[0] : n),
                (this.options.modifiers = {}),
                Object.keys(T({}, t.Defaults.modifiers, r.modifiers)).forEach(function(e) {
                  i.options.modifiers[e] = T(
                    {},
                    t.Defaults.modifiers[e] || {},
                    r.modifiers ? r.modifiers[e] : {},
                  );
                }),
                (this.modifiers = Object.keys(this.options.modifiers)
                  .map(function(t) {
                    return T({ name: t }, i.options.modifiers[t]);
                  })
                  .sort(function(t, e) {
                    return t.order - e.order;
                  })),
                this.modifiers.forEach(function(t) {
                  t.enabled &&
                    a(t.onLoad) &&
                    t.onLoad(i.reference, i.popper, i.options, t, i.state);
                }),
                this.update();
              var o = this.options.eventsEnabled;
              o && this.enableEventListeners(), (this.state.eventsEnabled = o);
            }
            return (
              E(t, [
                {
                  key: 'update',
                  value: function() {
                    return function() {
                      if (!this.state.isDestroyed) {
                        var t = {
                          instance: this,
                          styles: {},
                          arrowStyles: {},
                          attributes: {},
                          flipped: !1,
                          offsets: {},
                        };
                        (t.offsets.reference = k(
                          this.state,
                          this.popper,
                          this.reference,
                          this.options.positionFixed,
                        )),
                          (t.placement = I(
                            this.options.placement,
                            t.offsets.reference,
                            this.popper,
                            this.reference,
                            this.options.modifiers.flip.boundariesElement,
                            this.options.modifiers.flip.padding,
                          )),
                          (t.originalPlacement = t.placement),
                          (t.positionFixed = this.options.positionFixed),
                          (t.offsets.popper = P(this.popper, t.offsets.reference, t.placement)),
                          (t.offsets.popper.position = this.options.positionFixed
                            ? 'fixed'
                            : 'absolute'),
                          (t = M(this.modifiers, t)),
                          this.state.isCreated
                            ? this.options.onUpdate(t)
                            : ((this.state.isCreated = !0), this.options.onCreate(t));
                      }
                    }.call(this);
                  },
                },
                {
                  key: 'destroy',
                  value: function() {
                    return function() {
                      return (
                        (this.state.isDestroyed = !0),
                        V(this.modifiers, 'applyStyle') &&
                          (this.popper.removeAttribute('x-placement'),
                          (this.popper.style.position = ''),
                          (this.popper.style.top = ''),
                          (this.popper.style.left = ''),
                          (this.popper.style.right = ''),
                          (this.popper.style.bottom = ''),
                          (this.popper.style.willChange = ''),
                          (this.popper.style[j('transform')] = '')),
                        this.disableEventListeners(),
                        this.options.removeOnDestroy &&
                          this.popper.parentNode.removeChild(this.popper),
                        this
                      );
                    }.call(this);
                  },
                },
                {
                  key: 'enableEventListeners',
                  value: function() {
                    return function() {
                      this.state.eventsEnabled ||
                        (this.state = F(
                          this.reference,
                          this.options,
                          this.state,
                          this.scheduleUpdate,
                        ));
                    }.call(this);
                  },
                },
                {
                  key: 'disableEventListeners',
                  value: function() {
                    return q.call(this);
                  },
                },
              ]),
              t
            );
          })();
        (J.Utils = ('undefined' != typeof window ? window : t).PopperUtils),
          (J.placements = z),
          (J.Defaults = X),
          (e.default = J);
      }.call(this, n(11));
  },
  function(t, e, n) {
    /*!
     * Bootstrap v4.1.3 (https://getbootstrap.com/)
     * Copyright 2011-2018 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
     * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
     */
    !(function(t, e, n) {
      'use strict';
      function i(t, e) {
        for (var n = 0; n < e.length; n++) {
          var i = e[n];
          (i.enumerable = i.enumerable || !1),
            (i.configurable = !0),
            'value' in i && (i.writable = !0),
            Object.defineProperty(t, i.key, i);
        }
      }
      function r(t, e, n) {
        return e && i(t.prototype, e), n && i(t, n), t;
      }
      function o(t, e, n) {
        return (
          e in t
            ? Object.defineProperty(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[e] = n),
          t
        );
      }
      function s(t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = null != arguments[e] ? arguments[e] : {},
            i = Object.keys(n);
          'function' == typeof Object.getOwnPropertySymbols &&
            (i = i.concat(
              Object.getOwnPropertySymbols(n).filter(function(t) {
                return Object.getOwnPropertyDescriptor(n, t).enumerable;
              }),
            )),
            i.forEach(function(e) {
              o(t, e, n[e]);
            });
        }
        return t;
      }
      (e = e && e.hasOwnProperty('default') ? e.default : e),
        (n = n && n.hasOwnProperty('default') ? n.default : n);
      var a = (function(t) {
          var e = 'transitionend';
          function n(e) {
            var n = this,
              r = !1;
            return (
              t(this).one(i.TRANSITION_END, function() {
                r = !0;
              }),
              setTimeout(function() {
                r || i.triggerTransitionEnd(n);
              }, e),
              this
            );
          }
          var i = {
            TRANSITION_END: 'bsTransitionEnd',
            getUID: function(t) {
              do {
                t += ~~(1e6 * Math.random());
              } while (document.getElementById(t));
              return t;
            },
            getSelectorFromElement: function(t) {
              var e = t.getAttribute('data-target');
              (e && '#' !== e) || (e = t.getAttribute('href') || '');
              try {
                return document.querySelector(e) ? e : null;
              } catch (t) {
                return null;
              }
            },
            getTransitionDurationFromElement: function(e) {
              if (!e) return 0;
              var n = t(e).css('transition-duration'),
                i = parseFloat(n);
              return i ? ((n = n.split(',')[0]), 1e3 * parseFloat(n)) : 0;
            },
            reflow: function(t) {
              return t.offsetHeight;
            },
            triggerTransitionEnd: function(n) {
              t(n).trigger(e);
            },
            supportsTransitionEnd: function() {
              return Boolean(e);
            },
            isElement: function(t) {
              return (t[0] || t).nodeType;
            },
            typeCheckConfig: function(t, e, n) {
              for (var r in n)
                if (Object.prototype.hasOwnProperty.call(n, r)) {
                  var o = n[r],
                    s = e[r],
                    a =
                      s && i.isElement(s)
                        ? 'element'
                        : ((l = s),
                          {}.toString
                            .call(l)
                            .match(/\s([a-z]+)/i)[1]
                            .toLowerCase());
                  if (!new RegExp(o).test(a))
                    throw new Error(
                      t.toUpperCase() +
                        ': Option "' +
                        r +
                        '" provided type "' +
                        a +
                        '" but expected type "' +
                        o +
                        '".',
                    );
                }
              var l;
            },
          };
          return (
            (t.fn.emulateTransitionEnd = n),
            (t.event.special[i.TRANSITION_END] = {
              bindType: e,
              delegateType: e,
              handle: function(e) {
                if (t(e.target).is(this)) return e.handleObj.handler.apply(this, arguments);
              },
            }),
            i
          );
        })(e),
        l = (function(t) {
          var e = t.fn.alert,
            n = {
              CLOSE: 'close.bs.alert',
              CLOSED: 'closed.bs.alert',
              CLICK_DATA_API: 'click.bs.alert.data-api',
            },
            i = { ALERT: 'alert', FADE: 'fade', SHOW: 'show' },
            o = (function() {
              function e(t) {
                this._element = t;
              }
              var o = e.prototype;
              return (
                (o.close = function(t) {
                  var e = this._element;
                  t && (e = this._getRootElement(t));
                  var n = this._triggerCloseEvent(e);
                  n.isDefaultPrevented() || this._removeElement(e);
                }),
                (o.dispose = function() {
                  t.removeData(this._element, 'bs.alert'), (this._element = null);
                }),
                (o._getRootElement = function(e) {
                  var n = a.getSelectorFromElement(e),
                    r = !1;
                  return (
                    n && (r = document.querySelector(n)),
                    r || (r = t(e).closest('.' + i.ALERT)[0]),
                    r
                  );
                }),
                (o._triggerCloseEvent = function(e) {
                  var i = t.Event(n.CLOSE);
                  return t(e).trigger(i), i;
                }),
                (o._removeElement = function(e) {
                  var n = this;
                  if ((t(e).removeClass(i.SHOW), t(e).hasClass(i.FADE))) {
                    var r = a.getTransitionDurationFromElement(e);
                    t(e)
                      .one(a.TRANSITION_END, function(t) {
                        return n._destroyElement(e, t);
                      })
                      .emulateTransitionEnd(r);
                  } else this._destroyElement(e);
                }),
                (o._destroyElement = function(e) {
                  t(e)
                    .detach()
                    .trigger(n.CLOSED)
                    .remove();
                }),
                (e._jQueryInterface = function(n) {
                  return this.each(function() {
                    var i = t(this),
                      r = i.data('bs.alert');
                    r || ((r = new e(this)), i.data('bs.alert', r)), 'close' === n && r[n](this);
                  });
                }),
                (e._handleDismiss = function(t) {
                  return function(e) {
                    e && e.preventDefault(), t.close(this);
                  };
                }),
                r(e, null, [
                  {
                    key: 'VERSION',
                    get: function() {
                      return '4.1.3';
                    },
                  },
                ]),
                e
              );
            })();
          return (
            t(document).on(n.CLICK_DATA_API, '[data-dismiss="alert"]', o._handleDismiss(new o())),
            (t.fn.alert = o._jQueryInterface),
            (t.fn.alert.Constructor = o),
            (t.fn.alert.noConflict = function() {
              return (t.fn.alert = e), o._jQueryInterface;
            }),
            o
          );
        })(e),
        u = (function(t) {
          var e = 'button',
            n = t.fn[e],
            i = { ACTIVE: 'active', BUTTON: 'btn', FOCUS: 'focus' },
            o = {
              DATA_TOGGLE_CARROT: '[data-toggle^="button"]',
              DATA_TOGGLE: '[data-toggle="buttons"]',
              INPUT: 'input',
              ACTIVE: '.active',
              BUTTON: '.btn',
            },
            s = {
              CLICK_DATA_API: 'click.bs.button.data-api',
              FOCUS_BLUR_DATA_API: 'focus.bs.button.data-api blur.bs.button.data-api',
            },
            a = (function() {
              function e(t) {
                this._element = t;
              }
              var n = e.prototype;
              return (
                (n.toggle = function() {
                  var e = !0,
                    n = !0,
                    r = t(this._element).closest(o.DATA_TOGGLE)[0];
                  if (r) {
                    var s = this._element.querySelector(o.INPUT);
                    if (s) {
                      if ('radio' === s.type)
                        if (s.checked && this._element.classList.contains(i.ACTIVE)) e = !1;
                        else {
                          var a = r.querySelector(o.ACTIVE);
                          a && t(a).removeClass(i.ACTIVE);
                        }
                      if (e) {
                        if (
                          s.hasAttribute('disabled') ||
                          r.hasAttribute('disabled') ||
                          s.classList.contains('disabled') ||
                          r.classList.contains('disabled')
                        )
                          return;
                        (s.checked = !this._element.classList.contains(i.ACTIVE)),
                          t(s).trigger('change');
                      }
                      s.focus(), (n = !1);
                    }
                  }
                  n &&
                    this._element.setAttribute(
                      'aria-pressed',
                      !this._element.classList.contains(i.ACTIVE),
                    ),
                    e && t(this._element).toggleClass(i.ACTIVE);
                }),
                (n.dispose = function() {
                  t.removeData(this._element, 'bs.button'), (this._element = null);
                }),
                (e._jQueryInterface = function(n) {
                  return this.each(function() {
                    var i = t(this).data('bs.button');
                    i || ((i = new e(this)), t(this).data('bs.button', i)),
                      'toggle' === n && i[n]();
                  });
                }),
                r(e, null, [
                  {
                    key: 'VERSION',
                    get: function() {
                      return '4.1.3';
                    },
                  },
                ]),
                e
              );
            })();
          return (
            t(document)
              .on(s.CLICK_DATA_API, o.DATA_TOGGLE_CARROT, function(e) {
                e.preventDefault();
                var n = e.target;
                t(n).hasClass(i.BUTTON) || (n = t(n).closest(o.BUTTON)),
                  a._jQueryInterface.call(t(n), 'toggle');
              })
              .on(s.FOCUS_BLUR_DATA_API, o.DATA_TOGGLE_CARROT, function(e) {
                var n = t(e.target).closest(o.BUTTON)[0];
                t(n).toggleClass(i.FOCUS, /^focus(in)?$/.test(e.type));
              }),
            (t.fn[e] = a._jQueryInterface),
            (t.fn[e].Constructor = a),
            (t.fn[e].noConflict = function() {
              return (t.fn[e] = n), a._jQueryInterface;
            }),
            a
          );
        })(e),
        c = (function(t) {
          var e = 'carousel',
            n = 'bs.carousel',
            i = '.' + n,
            o = t.fn[e],
            l = { interval: 5e3, keyboard: !0, slide: !1, pause: 'hover', wrap: !0 },
            u = {
              interval: '(number|boolean)',
              keyboard: 'boolean',
              slide: '(boolean|string)',
              pause: '(string|boolean)',
              wrap: 'boolean',
            },
            c = { NEXT: 'next', PREV: 'prev', LEFT: 'left', RIGHT: 'right' },
            h = {
              SLIDE: 'slide' + i,
              SLID: 'slid' + i,
              KEYDOWN: 'keydown' + i,
              MOUSEENTER: 'mouseenter' + i,
              MOUSELEAVE: 'mouseleave' + i,
              TOUCHEND: 'touchend' + i,
              LOAD_DATA_API: 'load.bs.carousel.data-api',
              CLICK_DATA_API: 'click.bs.carousel.data-api',
            },
            f = {
              CAROUSEL: 'carousel',
              ACTIVE: 'active',
              SLIDE: 'slide',
              RIGHT: 'carousel-item-right',
              LEFT: 'carousel-item-left',
              NEXT: 'carousel-item-next',
              PREV: 'carousel-item-prev',
              ITEM: 'carousel-item',
            },
            d = {
              ACTIVE: '.active',
              ACTIVE_ITEM: '.active.carousel-item',
              ITEM: '.carousel-item',
              NEXT_PREV: '.carousel-item-next, .carousel-item-prev',
              INDICATORS: '.carousel-indicators',
              DATA_SLIDE: '[data-slide], [data-slide-to]',
              DATA_RIDE: '[data-ride="carousel"]',
            },
            p = (function() {
              function o(e, n) {
                (this._items = null),
                  (this._interval = null),
                  (this._activeElement = null),
                  (this._isPaused = !1),
                  (this._isSliding = !1),
                  (this.touchTimeout = null),
                  (this._config = this._getConfig(n)),
                  (this._element = t(e)[0]),
                  (this._indicatorsElement = this._element.querySelector(d.INDICATORS)),
                  this._addEventListeners();
              }
              var p = o.prototype;
              return (
                (p.next = function() {
                  this._isSliding || this._slide(c.NEXT);
                }),
                (p.nextWhenVisible = function() {
                  !document.hidden &&
                    t(this._element).is(':visible') &&
                    'hidden' !== t(this._element).css('visibility') &&
                    this.next();
                }),
                (p.prev = function() {
                  this._isSliding || this._slide(c.PREV);
                }),
                (p.pause = function(t) {
                  t || (this._isPaused = !0),
                    this._element.querySelector(d.NEXT_PREV) &&
                      (a.triggerTransitionEnd(this._element), this.cycle(!0)),
                    clearInterval(this._interval),
                    (this._interval = null);
                }),
                (p.cycle = function(t) {
                  t || (this._isPaused = !1),
                    this._interval && (clearInterval(this._interval), (this._interval = null)),
                    this._config.interval &&
                      !this._isPaused &&
                      (this._interval = setInterval(
                        (document.visibilityState ? this.nextWhenVisible : this.next).bind(this),
                        this._config.interval,
                      ));
                }),
                (p.to = function(e) {
                  var n = this;
                  this._activeElement = this._element.querySelector(d.ACTIVE_ITEM);
                  var i = this._getItemIndex(this._activeElement);
                  if (!(e > this._items.length - 1 || e < 0))
                    if (this._isSliding)
                      t(this._element).one(h.SLID, function() {
                        return n.to(e);
                      });
                    else {
                      if (i === e) return this.pause(), void this.cycle();
                      var r = e > i ? c.NEXT : c.PREV;
                      this._slide(r, this._items[e]);
                    }
                }),
                (p.dispose = function() {
                  t(this._element).off(i),
                    t.removeData(this._element, n),
                    (this._items = null),
                    (this._config = null),
                    (this._element = null),
                    (this._interval = null),
                    (this._isPaused = null),
                    (this._isSliding = null),
                    (this._activeElement = null),
                    (this._indicatorsElement = null);
                }),
                (p._getConfig = function(t) {
                  return (t = s({}, l, t)), a.typeCheckConfig(e, t, u), t;
                }),
                (p._addEventListeners = function() {
                  var e = this;
                  this._config.keyboard &&
                    t(this._element).on(h.KEYDOWN, function(t) {
                      return e._keydown(t);
                    }),
                    'hover' === this._config.pause &&
                      (t(this._element)
                        .on(h.MOUSEENTER, function(t) {
                          return e.pause(t);
                        })
                        .on(h.MOUSELEAVE, function(t) {
                          return e.cycle(t);
                        }),
                      'ontouchstart' in document.documentElement &&
                        t(this._element).on(h.TOUCHEND, function() {
                          e.pause(),
                            e.touchTimeout && clearTimeout(e.touchTimeout),
                            (e.touchTimeout = setTimeout(function(t) {
                              return e.cycle(t);
                            }, 500 + e._config.interval));
                        }));
                }),
                (p._keydown = function(t) {
                  if (!/input|textarea/i.test(t.target.tagName))
                    switch (t.which) {
                      case 37:
                        t.preventDefault(), this.prev();
                        break;
                      case 39:
                        t.preventDefault(), this.next();
                    }
                }),
                (p._getItemIndex = function(t) {
                  return (
                    (this._items =
                      t && t.parentNode
                        ? [].slice.call(t.parentNode.querySelectorAll(d.ITEM))
                        : []),
                    this._items.indexOf(t)
                  );
                }),
                (p._getItemByDirection = function(t, e) {
                  var n = t === c.NEXT,
                    i = t === c.PREV,
                    r = this._getItemIndex(e),
                    o = this._items.length - 1,
                    s = (i && 0 === r) || (n && r === o);
                  if (s && !this._config.wrap) return e;
                  var a = t === c.PREV ? -1 : 1,
                    l = (r + a) % this._items.length;
                  return -1 === l ? this._items[this._items.length - 1] : this._items[l];
                }),
                (p._triggerSlideEvent = function(e, n) {
                  var i = this._getItemIndex(e),
                    r = this._getItemIndex(this._element.querySelector(d.ACTIVE_ITEM)),
                    o = t.Event(h.SLIDE, { relatedTarget: e, direction: n, from: r, to: i });
                  return t(this._element).trigger(o), o;
                }),
                (p._setActiveIndicatorElement = function(e) {
                  if (this._indicatorsElement) {
                    var n = [].slice.call(this._indicatorsElement.querySelectorAll(d.ACTIVE));
                    t(n).removeClass(f.ACTIVE);
                    var i = this._indicatorsElement.children[this._getItemIndex(e)];
                    i && t(i).addClass(f.ACTIVE);
                  }
                }),
                (p._slide = function(e, n) {
                  var i,
                    r,
                    o,
                    s = this,
                    l = this._element.querySelector(d.ACTIVE_ITEM),
                    u = this._getItemIndex(l),
                    p = n || (l && this._getItemByDirection(e, l)),
                    g = this._getItemIndex(p),
                    m = Boolean(this._interval);
                  if (
                    (e === c.NEXT
                      ? ((i = f.LEFT), (r = f.NEXT), (o = c.LEFT))
                      : ((i = f.RIGHT), (r = f.PREV), (o = c.RIGHT)),
                    p && t(p).hasClass(f.ACTIVE))
                  )
                    this._isSliding = !1;
                  else {
                    var v = this._triggerSlideEvent(p, o);
                    if (!v.isDefaultPrevented() && l && p) {
                      (this._isSliding = !0), m && this.pause(), this._setActiveIndicatorElement(p);
                      var y = t.Event(h.SLID, { relatedTarget: p, direction: o, from: u, to: g });
                      if (t(this._element).hasClass(f.SLIDE)) {
                        t(p).addClass(r), a.reflow(p), t(l).addClass(i), t(p).addClass(i);
                        var _ = a.getTransitionDurationFromElement(l);
                        t(l)
                          .one(a.TRANSITION_END, function() {
                            t(p)
                              .removeClass(i + ' ' + r)
                              .addClass(f.ACTIVE),
                              t(l).removeClass(f.ACTIVE + ' ' + r + ' ' + i),
                              (s._isSliding = !1),
                              setTimeout(function() {
                                return t(s._element).trigger(y);
                              }, 0);
                          })
                          .emulateTransitionEnd(_);
                      } else
                        t(l).removeClass(f.ACTIVE),
                          t(p).addClass(f.ACTIVE),
                          (this._isSliding = !1),
                          t(this._element).trigger(y);
                      m && this.cycle();
                    }
                  }
                }),
                (o._jQueryInterface = function(e) {
                  return this.each(function() {
                    var i = t(this).data(n),
                      r = s({}, l, t(this).data());
                    'object' == typeof e && (r = s({}, r, e));
                    var a = 'string' == typeof e ? e : r.slide;
                    if ((i || ((i = new o(this, r)), t(this).data(n, i)), 'number' == typeof e))
                      i.to(e);
                    else if ('string' == typeof a) {
                      if (void 0 === i[a]) throw new TypeError('No method named "' + a + '"');
                      i[a]();
                    } else r.interval && (i.pause(), i.cycle());
                  });
                }),
                (o._dataApiClickHandler = function(e) {
                  var i = a.getSelectorFromElement(this);
                  if (i) {
                    var r = t(i)[0];
                    if (r && t(r).hasClass(f.CAROUSEL)) {
                      var l = s({}, t(r).data(), t(this).data()),
                        u = this.getAttribute('data-slide-to');
                      u && (l.interval = !1),
                        o._jQueryInterface.call(t(r), l),
                        u &&
                          t(r)
                            .data(n)
                            .to(u),
                        e.preventDefault();
                    }
                  }
                }),
                r(o, null, [
                  {
                    key: 'VERSION',
                    get: function() {
                      return '4.1.3';
                    },
                  },
                  {
                    key: 'Default',
                    get: function() {
                      return l;
                    },
                  },
                ]),
                o
              );
            })();
          return (
            t(document).on(h.CLICK_DATA_API, d.DATA_SLIDE, p._dataApiClickHandler),
            t(window).on(h.LOAD_DATA_API, function() {
              for (
                var e = [].slice.call(document.querySelectorAll(d.DATA_RIDE)), n = 0, i = e.length;
                n < i;
                n++
              ) {
                var r = t(e[n]);
                p._jQueryInterface.call(r, r.data());
              }
            }),
            (t.fn[e] = p._jQueryInterface),
            (t.fn[e].Constructor = p),
            (t.fn[e].noConflict = function() {
              return (t.fn[e] = o), p._jQueryInterface;
            }),
            p
          );
        })(e),
        h = (function(t) {
          var e = 'collapse',
            n = 'bs.collapse',
            i = t.fn[e],
            o = { toggle: !0, parent: '' },
            l = { toggle: 'boolean', parent: '(string|element)' },
            u = {
              SHOW: 'show.bs.collapse',
              SHOWN: 'shown.bs.collapse',
              HIDE: 'hide.bs.collapse',
              HIDDEN: 'hidden.bs.collapse',
              CLICK_DATA_API: 'click.bs.collapse.data-api',
            },
            c = {
              SHOW: 'show',
              COLLAPSE: 'collapse',
              COLLAPSING: 'collapsing',
              COLLAPSED: 'collapsed',
            },
            h = { WIDTH: 'width', HEIGHT: 'height' },
            f = { ACTIVES: '.show, .collapsing', DATA_TOGGLE: '[data-toggle="collapse"]' },
            d = (function() {
              function i(e, n) {
                (this._isTransitioning = !1),
                  (this._element = e),
                  (this._config = this._getConfig(n)),
                  (this._triggerArray = t.makeArray(
                    document.querySelectorAll(
                      '[data-toggle="collapse"][href="#' +
                        e.id +
                        '"],[data-toggle="collapse"][data-target="#' +
                        e.id +
                        '"]',
                    ),
                  ));
                for (
                  var i = [].slice.call(document.querySelectorAll(f.DATA_TOGGLE)),
                    r = 0,
                    o = i.length;
                  r < o;
                  r++
                ) {
                  var s = i[r],
                    l = a.getSelectorFromElement(s),
                    u = [].slice.call(document.querySelectorAll(l)).filter(function(t) {
                      return t === e;
                    });
                  null !== l && u.length > 0 && ((this._selector = l), this._triggerArray.push(s));
                }
                (this._parent = this._config.parent ? this._getParent() : null),
                  this._config.parent ||
                    this._addAriaAndCollapsedClass(this._element, this._triggerArray),
                  this._config.toggle && this.toggle();
              }
              var d = i.prototype;
              return (
                (d.toggle = function() {
                  t(this._element).hasClass(c.SHOW) ? this.hide() : this.show();
                }),
                (d.show = function() {
                  var e,
                    r,
                    o = this;
                  if (
                    !(
                      this._isTransitioning ||
                      t(this._element).hasClass(c.SHOW) ||
                      (this._parent &&
                        0 ===
                          (e = [].slice
                            .call(this._parent.querySelectorAll(f.ACTIVES))
                            .filter(function(t) {
                              return t.getAttribute('data-parent') === o._config.parent;
                            })).length &&
                        (e = null),
                      e &&
                        (r = t(e)
                          .not(this._selector)
                          .data(n)) &&
                        r._isTransitioning)
                    )
                  ) {
                    var s = t.Event(u.SHOW);
                    if ((t(this._element).trigger(s), !s.isDefaultPrevented())) {
                      e &&
                        (i._jQueryInterface.call(t(e).not(this._selector), 'hide'),
                        r || t(e).data(n, null));
                      var l = this._getDimension();
                      t(this._element)
                        .removeClass(c.COLLAPSE)
                        .addClass(c.COLLAPSING),
                        (this._element.style[l] = 0),
                        this._triggerArray.length &&
                          t(this._triggerArray)
                            .removeClass(c.COLLAPSED)
                            .attr('aria-expanded', !0),
                        this.setTransitioning(!0);
                      var h = l[0].toUpperCase() + l.slice(1),
                        d = 'scroll' + h,
                        p = a.getTransitionDurationFromElement(this._element);
                      t(this._element)
                        .one(a.TRANSITION_END, function() {
                          t(o._element)
                            .removeClass(c.COLLAPSING)
                            .addClass(c.COLLAPSE)
                            .addClass(c.SHOW),
                            (o._element.style[l] = ''),
                            o.setTransitioning(!1),
                            t(o._element).trigger(u.SHOWN);
                        })
                        .emulateTransitionEnd(p),
                        (this._element.style[l] = this._element[d] + 'px');
                    }
                  }
                }),
                (d.hide = function() {
                  var e = this;
                  if (!this._isTransitioning && t(this._element).hasClass(c.SHOW)) {
                    var n = t.Event(u.HIDE);
                    if ((t(this._element).trigger(n), !n.isDefaultPrevented())) {
                      var i = this._getDimension();
                      (this._element.style[i] = this._element.getBoundingClientRect()[i] + 'px'),
                        a.reflow(this._element),
                        t(this._element)
                          .addClass(c.COLLAPSING)
                          .removeClass(c.COLLAPSE)
                          .removeClass(c.SHOW);
                      var r = this._triggerArray.length;
                      if (r > 0)
                        for (var o = 0; o < r; o++) {
                          var s = this._triggerArray[o],
                            l = a.getSelectorFromElement(s);
                          if (null !== l) {
                            var h = t([].slice.call(document.querySelectorAll(l)));
                            h.hasClass(c.SHOW) ||
                              t(s)
                                .addClass(c.COLLAPSED)
                                .attr('aria-expanded', !1);
                          }
                        }
                      this.setTransitioning(!0), (this._element.style[i] = '');
                      var f = a.getTransitionDurationFromElement(this._element);
                      t(this._element)
                        .one(a.TRANSITION_END, function() {
                          e.setTransitioning(!1),
                            t(e._element)
                              .removeClass(c.COLLAPSING)
                              .addClass(c.COLLAPSE)
                              .trigger(u.HIDDEN);
                        })
                        .emulateTransitionEnd(f);
                    }
                  }
                }),
                (d.setTransitioning = function(t) {
                  this._isTransitioning = t;
                }),
                (d.dispose = function() {
                  t.removeData(this._element, n),
                    (this._config = null),
                    (this._parent = null),
                    (this._element = null),
                    (this._triggerArray = null),
                    (this._isTransitioning = null);
                }),
                (d._getConfig = function(t) {
                  return (
                    ((t = s({}, o, t)).toggle = Boolean(t.toggle)), a.typeCheckConfig(e, t, l), t
                  );
                }),
                (d._getDimension = function() {
                  var e = t(this._element).hasClass(h.WIDTH);
                  return e ? h.WIDTH : h.HEIGHT;
                }),
                (d._getParent = function() {
                  var e = this,
                    n = null;
                  a.isElement(this._config.parent)
                    ? ((n = this._config.parent),
                      void 0 !== this._config.parent.jquery && (n = this._config.parent[0]))
                    : (n = document.querySelector(this._config.parent));
                  var r = '[data-toggle="collapse"][data-parent="' + this._config.parent + '"]',
                    o = [].slice.call(n.querySelectorAll(r));
                  return (
                    t(o).each(function(t, n) {
                      e._addAriaAndCollapsedClass(i._getTargetFromElement(n), [n]);
                    }),
                    n
                  );
                }),
                (d._addAriaAndCollapsedClass = function(e, n) {
                  if (e) {
                    var i = t(e).hasClass(c.SHOW);
                    n.length &&
                      t(n)
                        .toggleClass(c.COLLAPSED, !i)
                        .attr('aria-expanded', i);
                  }
                }),
                (i._getTargetFromElement = function(t) {
                  var e = a.getSelectorFromElement(t);
                  return e ? document.querySelector(e) : null;
                }),
                (i._jQueryInterface = function(e) {
                  return this.each(function() {
                    var r = t(this),
                      a = r.data(n),
                      l = s({}, o, r.data(), 'object' == typeof e && e ? e : {});
                    if (
                      (!a && l.toggle && /show|hide/.test(e) && (l.toggle = !1),
                      a || ((a = new i(this, l)), r.data(n, a)),
                      'string' == typeof e)
                    ) {
                      if (void 0 === a[e]) throw new TypeError('No method named "' + e + '"');
                      a[e]();
                    }
                  });
                }),
                r(i, null, [
                  {
                    key: 'VERSION',
                    get: function() {
                      return '4.1.3';
                    },
                  },
                  {
                    key: 'Default',
                    get: function() {
                      return o;
                    },
                  },
                ]),
                i
              );
            })();
          return (
            t(document).on(u.CLICK_DATA_API, f.DATA_TOGGLE, function(e) {
              'A' === e.currentTarget.tagName && e.preventDefault();
              var i = t(this),
                r = a.getSelectorFromElement(this),
                o = [].slice.call(document.querySelectorAll(r));
              t(o).each(function() {
                var e = t(this),
                  r = e.data(n),
                  o = r ? 'toggle' : i.data();
                d._jQueryInterface.call(e, o);
              });
            }),
            (t.fn[e] = d._jQueryInterface),
            (t.fn[e].Constructor = d),
            (t.fn[e].noConflict = function() {
              return (t.fn[e] = i), d._jQueryInterface;
            }),
            d
          );
        })(e),
        f = (function(t) {
          var e = 'dropdown',
            i = 'bs.dropdown',
            o = '.' + i,
            l = t.fn[e],
            u = new RegExp('38|40|27'),
            c = {
              HIDE: 'hide' + o,
              HIDDEN: 'hidden' + o,
              SHOW: 'show' + o,
              SHOWN: 'shown' + o,
              CLICK: 'click' + o,
              CLICK_DATA_API: 'click.bs.dropdown.data-api',
              KEYDOWN_DATA_API: 'keydown.bs.dropdown.data-api',
              KEYUP_DATA_API: 'keyup.bs.dropdown.data-api',
            },
            h = {
              DISABLED: 'disabled',
              SHOW: 'show',
              DROPUP: 'dropup',
              DROPRIGHT: 'dropright',
              DROPLEFT: 'dropleft',
              MENURIGHT: 'dropdown-menu-right',
              MENULEFT: 'dropdown-menu-left',
              POSITION_STATIC: 'position-static',
            },
            f = {
              DATA_TOGGLE: '[data-toggle="dropdown"]',
              FORM_CHILD: '.dropdown form',
              MENU: '.dropdown-menu',
              NAVBAR_NAV: '.navbar-nav',
              VISIBLE_ITEMS: '.dropdown-menu .dropdown-item:not(.disabled):not(:disabled)',
            },
            d = {
              TOP: 'top-start',
              TOPEND: 'top-end',
              BOTTOM: 'bottom-start',
              BOTTOMEND: 'bottom-end',
              RIGHT: 'right-start',
              RIGHTEND: 'right-end',
              LEFT: 'left-start',
              LEFTEND: 'left-end',
            },
            p = {
              offset: 0,
              flip: !0,
              boundary: 'scrollParent',
              reference: 'toggle',
              display: 'dynamic',
            },
            g = {
              offset: '(number|string|function)',
              flip: 'boolean',
              boundary: '(string|element)',
              reference: '(string|element)',
              display: 'string',
            },
            m = (function() {
              function l(t, e) {
                (this._element = t),
                  (this._popper = null),
                  (this._config = this._getConfig(e)),
                  (this._menu = this._getMenuElement()),
                  (this._inNavbar = this._detectNavbar()),
                  this._addEventListeners();
              }
              var m = l.prototype;
              return (
                (m.toggle = function() {
                  if (!this._element.disabled && !t(this._element).hasClass(h.DISABLED)) {
                    var e = l._getParentFromElement(this._element),
                      i = t(this._menu).hasClass(h.SHOW);
                    if ((l._clearMenus(), !i)) {
                      var r = { relatedTarget: this._element },
                        o = t.Event(c.SHOW, r);
                      if ((t(e).trigger(o), !o.isDefaultPrevented())) {
                        if (!this._inNavbar) {
                          if (void 0 === n)
                            throw new TypeError(
                              'Bootstrap dropdown require Popper.js (https://popper.js.org)',
                            );
                          var s = this._element;
                          'parent' === this._config.reference
                            ? (s = e)
                            : a.isElement(this._config.reference) &&
                              ((s = this._config.reference),
                              void 0 !== this._config.reference.jquery &&
                                (s = this._config.reference[0])),
                            'scrollParent' !== this._config.boundary &&
                              t(e).addClass(h.POSITION_STATIC),
                            (this._popper = new n(s, this._menu, this._getPopperConfig()));
                        }
                        'ontouchstart' in document.documentElement &&
                          0 === t(e).closest(f.NAVBAR_NAV).length &&
                          t(document.body)
                            .children()
                            .on('mouseover', null, t.noop),
                          this._element.focus(),
                          this._element.setAttribute('aria-expanded', !0),
                          t(this._menu).toggleClass(h.SHOW),
                          t(e)
                            .toggleClass(h.SHOW)
                            .trigger(t.Event(c.SHOWN, r));
                      }
                    }
                  }
                }),
                (m.dispose = function() {
                  t.removeData(this._element, i),
                    t(this._element).off(o),
                    (this._element = null),
                    (this._menu = null),
                    null !== this._popper && (this._popper.destroy(), (this._popper = null));
                }),
                (m.update = function() {
                  (this._inNavbar = this._detectNavbar()),
                    null !== this._popper && this._popper.scheduleUpdate();
                }),
                (m._addEventListeners = function() {
                  var e = this;
                  t(this._element).on(c.CLICK, function(t) {
                    t.preventDefault(), t.stopPropagation(), e.toggle();
                  });
                }),
                (m._getConfig = function(n) {
                  return (
                    (n = s({}, this.constructor.Default, t(this._element).data(), n)),
                    a.typeCheckConfig(e, n, this.constructor.DefaultType),
                    n
                  );
                }),
                (m._getMenuElement = function() {
                  if (!this._menu) {
                    var t = l._getParentFromElement(this._element);
                    t && (this._menu = t.querySelector(f.MENU));
                  }
                  return this._menu;
                }),
                (m._getPlacement = function() {
                  var e = t(this._element.parentNode),
                    n = d.BOTTOM;
                  return (
                    e.hasClass(h.DROPUP)
                      ? ((n = d.TOP), t(this._menu).hasClass(h.MENURIGHT) && (n = d.TOPEND))
                      : e.hasClass(h.DROPRIGHT)
                      ? (n = d.RIGHT)
                      : e.hasClass(h.DROPLEFT)
                      ? (n = d.LEFT)
                      : t(this._menu).hasClass(h.MENURIGHT) && (n = d.BOTTOMEND),
                    n
                  );
                }),
                (m._detectNavbar = function() {
                  return t(this._element).closest('.navbar').length > 0;
                }),
                (m._getPopperConfig = function() {
                  var t = this,
                    e = {};
                  'function' == typeof this._config.offset
                    ? (e.fn = function(e) {
                        return (e.offsets = s({}, e.offsets, t._config.offset(e.offsets) || {})), e;
                      })
                    : (e.offset = this._config.offset);
                  var n = {
                    placement: this._getPlacement(),
                    modifiers: {
                      offset: e,
                      flip: { enabled: this._config.flip },
                      preventOverflow: { boundariesElement: this._config.boundary },
                    },
                  };
                  return (
                    'static' === this._config.display && (n.modifiers.applyStyle = { enabled: !1 }),
                    n
                  );
                }),
                (l._jQueryInterface = function(e) {
                  return this.each(function() {
                    var n = t(this).data(i),
                      r = 'object' == typeof e ? e : null;
                    if ((n || ((n = new l(this, r)), t(this).data(i, n)), 'string' == typeof e)) {
                      if (void 0 === n[e]) throw new TypeError('No method named "' + e + '"');
                      n[e]();
                    }
                  });
                }),
                (l._clearMenus = function(e) {
                  if (!e || (3 !== e.which && ('keyup' !== e.type || 9 === e.which)))
                    for (
                      var n = [].slice.call(document.querySelectorAll(f.DATA_TOGGLE)),
                        r = 0,
                        o = n.length;
                      r < o;
                      r++
                    ) {
                      var s = l._getParentFromElement(n[r]),
                        a = t(n[r]).data(i),
                        u = { relatedTarget: n[r] };
                      if ((e && 'click' === e.type && (u.clickEvent = e), a)) {
                        var d = a._menu;
                        if (
                          t(s).hasClass(h.SHOW) &&
                          !(
                            e &&
                            (('click' === e.type && /input|textarea/i.test(e.target.tagName)) ||
                              ('keyup' === e.type && 9 === e.which)) &&
                            t.contains(s, e.target)
                          )
                        ) {
                          var p = t.Event(c.HIDE, u);
                          t(s).trigger(p),
                            p.isDefaultPrevented() ||
                              ('ontouchstart' in document.documentElement &&
                                t(document.body)
                                  .children()
                                  .off('mouseover', null, t.noop),
                              n[r].setAttribute('aria-expanded', 'false'),
                              t(d).removeClass(h.SHOW),
                              t(s)
                                .removeClass(h.SHOW)
                                .trigger(t.Event(c.HIDDEN, u)));
                        }
                      }
                    }
                }),
                (l._getParentFromElement = function(t) {
                  var e,
                    n = a.getSelectorFromElement(t);
                  return n && (e = document.querySelector(n)), e || t.parentNode;
                }),
                (l._dataApiKeydownHandler = function(e) {
                  if (
                    (/input|textarea/i.test(e.target.tagName)
                      ? !(
                          32 === e.which ||
                          (27 !== e.which &&
                            ((40 !== e.which && 38 !== e.which) ||
                              t(e.target).closest(f.MENU).length))
                        )
                      : u.test(e.which)) &&
                    (e.preventDefault(),
                    e.stopPropagation(),
                    !this.disabled && !t(this).hasClass(h.DISABLED))
                  ) {
                    var n = l._getParentFromElement(this),
                      i = t(n).hasClass(h.SHOW);
                    if (
                      (i || (27 === e.which && 32 === e.which)) &&
                      (!i || (27 !== e.which && 32 !== e.which))
                    ) {
                      var r = [].slice.call(n.querySelectorAll(f.VISIBLE_ITEMS));
                      if (0 !== r.length) {
                        var o = r.indexOf(e.target);
                        38 === e.which && o > 0 && o--,
                          40 === e.which && o < r.length - 1 && o++,
                          o < 0 && (o = 0),
                          r[o].focus();
                      }
                    } else {
                      if (27 === e.which) {
                        var s = n.querySelector(f.DATA_TOGGLE);
                        t(s).trigger('focus');
                      }
                      t(this).trigger('click');
                    }
                  }
                }),
                r(l, null, [
                  {
                    key: 'VERSION',
                    get: function() {
                      return '4.1.3';
                    },
                  },
                  {
                    key: 'Default',
                    get: function() {
                      return p;
                    },
                  },
                  {
                    key: 'DefaultType',
                    get: function() {
                      return g;
                    },
                  },
                ]),
                l
              );
            })();
          return (
            t(document)
              .on(c.KEYDOWN_DATA_API, f.DATA_TOGGLE, m._dataApiKeydownHandler)
              .on(c.KEYDOWN_DATA_API, f.MENU, m._dataApiKeydownHandler)
              .on(c.CLICK_DATA_API + ' ' + c.KEYUP_DATA_API, m._clearMenus)
              .on(c.CLICK_DATA_API, f.DATA_TOGGLE, function(e) {
                e.preventDefault(), e.stopPropagation(), m._jQueryInterface.call(t(this), 'toggle');
              })
              .on(c.CLICK_DATA_API, f.FORM_CHILD, function(t) {
                t.stopPropagation();
              }),
            (t.fn[e] = m._jQueryInterface),
            (t.fn[e].Constructor = m),
            (t.fn[e].noConflict = function() {
              return (t.fn[e] = l), m._jQueryInterface;
            }),
            m
          );
        })(e),
        d = (function(t) {
          var e = 'modal',
            n = '.bs.modal',
            i = t.fn.modal,
            o = { backdrop: !0, keyboard: !0, focus: !0, show: !0 },
            l = {
              backdrop: '(boolean|string)',
              keyboard: 'boolean',
              focus: 'boolean',
              show: 'boolean',
            },
            u = {
              HIDE: 'hide.bs.modal',
              HIDDEN: 'hidden.bs.modal',
              SHOW: 'show.bs.modal',
              SHOWN: 'shown.bs.modal',
              FOCUSIN: 'focusin.bs.modal',
              RESIZE: 'resize.bs.modal',
              CLICK_DISMISS: 'click.dismiss.bs.modal',
              KEYDOWN_DISMISS: 'keydown.dismiss.bs.modal',
              MOUSEUP_DISMISS: 'mouseup.dismiss.bs.modal',
              MOUSEDOWN_DISMISS: 'mousedown.dismiss.bs.modal',
              CLICK_DATA_API: 'click.bs.modal.data-api',
            },
            c = {
              SCROLLBAR_MEASURER: 'modal-scrollbar-measure',
              BACKDROP: 'modal-backdrop',
              OPEN: 'modal-open',
              FADE: 'fade',
              SHOW: 'show',
            },
            h = {
              DIALOG: '.modal-dialog',
              DATA_TOGGLE: '[data-toggle="modal"]',
              DATA_DISMISS: '[data-dismiss="modal"]',
              FIXED_CONTENT: '.fixed-top, .fixed-bottom, .is-fixed, .sticky-top',
              STICKY_CONTENT: '.sticky-top',
            },
            f = (function() {
              function i(t, e) {
                (this._config = this._getConfig(e)),
                  (this._element = t),
                  (this._dialog = t.querySelector(h.DIALOG)),
                  (this._backdrop = null),
                  (this._isShown = !1),
                  (this._isBodyOverflowing = !1),
                  (this._ignoreBackdropClick = !1),
                  (this._scrollbarWidth = 0);
              }
              var f = i.prototype;
              return (
                (f.toggle = function(t) {
                  return this._isShown ? this.hide() : this.show(t);
                }),
                (f.show = function(e) {
                  var n = this;
                  if (!this._isTransitioning && !this._isShown) {
                    t(this._element).hasClass(c.FADE) && (this._isTransitioning = !0);
                    var i = t.Event(u.SHOW, { relatedTarget: e });
                    t(this._element).trigger(i),
                      this._isShown ||
                        i.isDefaultPrevented() ||
                        ((this._isShown = !0),
                        this._checkScrollbar(),
                        this._setScrollbar(),
                        this._adjustDialog(),
                        t(document.body).addClass(c.OPEN),
                        this._setEscapeEvent(),
                        this._setResizeEvent(),
                        t(this._element).on(u.CLICK_DISMISS, h.DATA_DISMISS, function(t) {
                          return n.hide(t);
                        }),
                        t(this._dialog).on(u.MOUSEDOWN_DISMISS, function() {
                          t(n._element).one(u.MOUSEUP_DISMISS, function(e) {
                            t(e.target).is(n._element) && (n._ignoreBackdropClick = !0);
                          });
                        }),
                        this._showBackdrop(function() {
                          return n._showElement(e);
                        }));
                  }
                }),
                (f.hide = function(e) {
                  var n = this;
                  if ((e && e.preventDefault(), !this._isTransitioning && this._isShown)) {
                    var i = t.Event(u.HIDE);
                    if ((t(this._element).trigger(i), this._isShown && !i.isDefaultPrevented())) {
                      this._isShown = !1;
                      var r = t(this._element).hasClass(c.FADE);
                      if (
                        (r && (this._isTransitioning = !0),
                        this._setEscapeEvent(),
                        this._setResizeEvent(),
                        t(document).off(u.FOCUSIN),
                        t(this._element).removeClass(c.SHOW),
                        t(this._element).off(u.CLICK_DISMISS),
                        t(this._dialog).off(u.MOUSEDOWN_DISMISS),
                        r)
                      ) {
                        var o = a.getTransitionDurationFromElement(this._element);
                        t(this._element)
                          .one(a.TRANSITION_END, function(t) {
                            return n._hideModal(t);
                          })
                          .emulateTransitionEnd(o);
                      } else this._hideModal();
                    }
                  }
                }),
                (f.dispose = function() {
                  t.removeData(this._element, 'bs.modal'),
                    t(window, document, this._element, this._backdrop).off(n),
                    (this._config = null),
                    (this._element = null),
                    (this._dialog = null),
                    (this._backdrop = null),
                    (this._isShown = null),
                    (this._isBodyOverflowing = null),
                    (this._ignoreBackdropClick = null),
                    (this._scrollbarWidth = null);
                }),
                (f.handleUpdate = function() {
                  this._adjustDialog();
                }),
                (f._getConfig = function(t) {
                  return (t = s({}, o, t)), a.typeCheckConfig(e, t, l), t;
                }),
                (f._showElement = function(e) {
                  var n = this,
                    i = t(this._element).hasClass(c.FADE);
                  (this._element.parentNode &&
                    this._element.parentNode.nodeType === Node.ELEMENT_NODE) ||
                    document.body.appendChild(this._element),
                    (this._element.style.display = 'block'),
                    this._element.removeAttribute('aria-hidden'),
                    (this._element.scrollTop = 0),
                    i && a.reflow(this._element),
                    t(this._element).addClass(c.SHOW),
                    this._config.focus && this._enforceFocus();
                  var r = t.Event(u.SHOWN, { relatedTarget: e }),
                    o = function() {
                      n._config.focus && n._element.focus(),
                        (n._isTransitioning = !1),
                        t(n._element).trigger(r);
                    };
                  if (i) {
                    var s = a.getTransitionDurationFromElement(this._element);
                    t(this._dialog)
                      .one(a.TRANSITION_END, o)
                      .emulateTransitionEnd(s);
                  } else o();
                }),
                (f._enforceFocus = function() {
                  var e = this;
                  t(document)
                    .off(u.FOCUSIN)
                    .on(u.FOCUSIN, function(n) {
                      document !== n.target &&
                        e._element !== n.target &&
                        0 === t(e._element).has(n.target).length &&
                        e._element.focus();
                    });
                }),
                (f._setEscapeEvent = function() {
                  var e = this;
                  this._isShown && this._config.keyboard
                    ? t(this._element).on(u.KEYDOWN_DISMISS, function(t) {
                        27 === t.which && (t.preventDefault(), e.hide());
                      })
                    : this._isShown || t(this._element).off(u.KEYDOWN_DISMISS);
                }),
                (f._setResizeEvent = function() {
                  var e = this;
                  this._isShown
                    ? t(window).on(u.RESIZE, function(t) {
                        return e.handleUpdate(t);
                      })
                    : t(window).off(u.RESIZE);
                }),
                (f._hideModal = function() {
                  var e = this;
                  (this._element.style.display = 'none'),
                    this._element.setAttribute('aria-hidden', !0),
                    (this._isTransitioning = !1),
                    this._showBackdrop(function() {
                      t(document.body).removeClass(c.OPEN),
                        e._resetAdjustments(),
                        e._resetScrollbar(),
                        t(e._element).trigger(u.HIDDEN);
                    });
                }),
                (f._removeBackdrop = function() {
                  this._backdrop && (t(this._backdrop).remove(), (this._backdrop = null));
                }),
                (f._showBackdrop = function(e) {
                  var n = this,
                    i = t(this._element).hasClass(c.FADE) ? c.FADE : '';
                  if (this._isShown && this._config.backdrop) {
                    if (
                      ((this._backdrop = document.createElement('div')),
                      (this._backdrop.className = c.BACKDROP),
                      i && this._backdrop.classList.add(i),
                      t(this._backdrop).appendTo(document.body),
                      t(this._element).on(u.CLICK_DISMISS, function(t) {
                        n._ignoreBackdropClick
                          ? (n._ignoreBackdropClick = !1)
                          : t.target === t.currentTarget &&
                            ('static' === n._config.backdrop ? n._element.focus() : n.hide());
                      }),
                      i && a.reflow(this._backdrop),
                      t(this._backdrop).addClass(c.SHOW),
                      !e)
                    )
                      return;
                    if (!i) return void e();
                    var r = a.getTransitionDurationFromElement(this._backdrop);
                    t(this._backdrop)
                      .one(a.TRANSITION_END, e)
                      .emulateTransitionEnd(r);
                  } else if (!this._isShown && this._backdrop) {
                    t(this._backdrop).removeClass(c.SHOW);
                    var o = function() {
                      n._removeBackdrop(), e && e();
                    };
                    if (t(this._element).hasClass(c.FADE)) {
                      var s = a.getTransitionDurationFromElement(this._backdrop);
                      t(this._backdrop)
                        .one(a.TRANSITION_END, o)
                        .emulateTransitionEnd(s);
                    } else o();
                  } else e && e();
                }),
                (f._adjustDialog = function() {
                  var t = this._element.scrollHeight > document.documentElement.clientHeight;
                  !this._isBodyOverflowing &&
                    t &&
                    (this._element.style.paddingLeft = this._scrollbarWidth + 'px'),
                    this._isBodyOverflowing &&
                      !t &&
                      (this._element.style.paddingRight = this._scrollbarWidth + 'px');
                }),
                (f._resetAdjustments = function() {
                  (this._element.style.paddingLeft = ''), (this._element.style.paddingRight = '');
                }),
                (f._checkScrollbar = function() {
                  var t = document.body.getBoundingClientRect();
                  (this._isBodyOverflowing = t.left + t.right < window.innerWidth),
                    (this._scrollbarWidth = this._getScrollbarWidth());
                }),
                (f._setScrollbar = function() {
                  var e = this;
                  if (this._isBodyOverflowing) {
                    var n = [].slice.call(document.querySelectorAll(h.FIXED_CONTENT)),
                      i = [].slice.call(document.querySelectorAll(h.STICKY_CONTENT));
                    t(n).each(function(n, i) {
                      var r = i.style.paddingRight,
                        o = t(i).css('padding-right');
                      t(i)
                        .data('padding-right', r)
                        .css('padding-right', parseFloat(o) + e._scrollbarWidth + 'px');
                    }),
                      t(i).each(function(n, i) {
                        var r = i.style.marginRight,
                          o = t(i).css('margin-right');
                        t(i)
                          .data('margin-right', r)
                          .css('margin-right', parseFloat(o) - e._scrollbarWidth + 'px');
                      });
                    var r = document.body.style.paddingRight,
                      o = t(document.body).css('padding-right');
                    t(document.body)
                      .data('padding-right', r)
                      .css('padding-right', parseFloat(o) + this._scrollbarWidth + 'px');
                  }
                }),
                (f._resetScrollbar = function() {
                  var e = [].slice.call(document.querySelectorAll(h.FIXED_CONTENT));
                  t(e).each(function(e, n) {
                    var i = t(n).data('padding-right');
                    t(n).removeData('padding-right'), (n.style.paddingRight = i || '');
                  });
                  var n = [].slice.call(document.querySelectorAll('' + h.STICKY_CONTENT));
                  t(n).each(function(e, n) {
                    var i = t(n).data('margin-right');
                    void 0 !== i &&
                      t(n)
                        .css('margin-right', i)
                        .removeData('margin-right');
                  });
                  var i = t(document.body).data('padding-right');
                  t(document.body).removeData('padding-right'),
                    (document.body.style.paddingRight = i || '');
                }),
                (f._getScrollbarWidth = function() {
                  var t = document.createElement('div');
                  (t.className = c.SCROLLBAR_MEASURER), document.body.appendChild(t);
                  var e = t.getBoundingClientRect().width - t.clientWidth;
                  return document.body.removeChild(t), e;
                }),
                (i._jQueryInterface = function(e, n) {
                  return this.each(function() {
                    var r = t(this).data('bs.modal'),
                      a = s({}, o, t(this).data(), 'object' == typeof e && e ? e : {});
                    if (
                      (r || ((r = new i(this, a)), t(this).data('bs.modal', r)),
                      'string' == typeof e)
                    ) {
                      if (void 0 === r[e]) throw new TypeError('No method named "' + e + '"');
                      r[e](n);
                    } else a.show && r.show(n);
                  });
                }),
                r(i, null, [
                  {
                    key: 'VERSION',
                    get: function() {
                      return '4.1.3';
                    },
                  },
                  {
                    key: 'Default',
                    get: function() {
                      return o;
                    },
                  },
                ]),
                i
              );
            })();
          return (
            t(document).on(u.CLICK_DATA_API, h.DATA_TOGGLE, function(e) {
              var n,
                i = this,
                r = a.getSelectorFromElement(this);
              r && (n = document.querySelector(r));
              var o = t(n).data('bs.modal') ? 'toggle' : s({}, t(n).data(), t(this).data());
              ('A' !== this.tagName && 'AREA' !== this.tagName) || e.preventDefault();
              var l = t(n).one(u.SHOW, function(e) {
                e.isDefaultPrevented() ||
                  l.one(u.HIDDEN, function() {
                    t(i).is(':visible') && i.focus();
                  });
              });
              f._jQueryInterface.call(t(n), o, this);
            }),
            (t.fn.modal = f._jQueryInterface),
            (t.fn.modal.Constructor = f),
            (t.fn.modal.noConflict = function() {
              return (t.fn.modal = i), f._jQueryInterface;
            }),
            f
          );
        })(e),
        p = (function(t) {
          var e = 'tooltip',
            i = '.bs.tooltip',
            o = t.fn[e],
            l = new RegExp('(^|\\s)bs-tooltip\\S+', 'g'),
            u = {
              animation: 'boolean',
              template: 'string',
              title: '(string|element|function)',
              trigger: 'string',
              delay: '(number|object)',
              html: 'boolean',
              selector: '(string|boolean)',
              placement: '(string|function)',
              offset: '(number|string)',
              container: '(string|element|boolean)',
              fallbackPlacement: '(string|array)',
              boundary: '(string|element)',
            },
            c = { AUTO: 'auto', TOP: 'top', RIGHT: 'right', BOTTOM: 'bottom', LEFT: 'left' },
            h = {
              animation: !0,
              template:
                '<div class="tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>',
              trigger: 'hover focus',
              title: '',
              delay: 0,
              html: !1,
              selector: !1,
              placement: 'top',
              offset: 0,
              container: !1,
              fallbackPlacement: 'flip',
              boundary: 'scrollParent',
            },
            f = { SHOW: 'show', OUT: 'out' },
            d = {
              HIDE: 'hide' + i,
              HIDDEN: 'hidden' + i,
              SHOW: 'show' + i,
              SHOWN: 'shown' + i,
              INSERTED: 'inserted' + i,
              CLICK: 'click' + i,
              FOCUSIN: 'focusin' + i,
              FOCUSOUT: 'focusout' + i,
              MOUSEENTER: 'mouseenter' + i,
              MOUSELEAVE: 'mouseleave' + i,
            },
            p = { FADE: 'fade', SHOW: 'show' },
            g = { TOOLTIP: '.tooltip', TOOLTIP_INNER: '.tooltip-inner', ARROW: '.arrow' },
            m = { HOVER: 'hover', FOCUS: 'focus', CLICK: 'click', MANUAL: 'manual' },
            v = (function() {
              function o(t, e) {
                if (void 0 === n)
                  throw new TypeError(
                    'Bootstrap tooltips require Popper.js (https://popper.js.org)',
                  );
                (this._isEnabled = !0),
                  (this._timeout = 0),
                  (this._hoverState = ''),
                  (this._activeTrigger = {}),
                  (this._popper = null),
                  (this.element = t),
                  (this.config = this._getConfig(e)),
                  (this.tip = null),
                  this._setListeners();
              }
              var v = o.prototype;
              return (
                (v.enable = function() {
                  this._isEnabled = !0;
                }),
                (v.disable = function() {
                  this._isEnabled = !1;
                }),
                (v.toggleEnabled = function() {
                  this._isEnabled = !this._isEnabled;
                }),
                (v.toggle = function(e) {
                  if (this._isEnabled)
                    if (e) {
                      var n = this.constructor.DATA_KEY,
                        i = t(e.currentTarget).data(n);
                      i ||
                        ((i = new this.constructor(e.currentTarget, this._getDelegateConfig())),
                        t(e.currentTarget).data(n, i)),
                        (i._activeTrigger.click = !i._activeTrigger.click),
                        i._isWithActiveTrigger() ? i._enter(null, i) : i._leave(null, i);
                    } else {
                      if (t(this.getTipElement()).hasClass(p.SHOW))
                        return void this._leave(null, this);
                      this._enter(null, this);
                    }
                }),
                (v.dispose = function() {
                  clearTimeout(this._timeout),
                    t.removeData(this.element, this.constructor.DATA_KEY),
                    t(this.element).off(this.constructor.EVENT_KEY),
                    t(this.element)
                      .closest('.modal')
                      .off('hide.bs.modal'),
                    this.tip && t(this.tip).remove(),
                    (this._isEnabled = null),
                    (this._timeout = null),
                    (this._hoverState = null),
                    (this._activeTrigger = null),
                    null !== this._popper && this._popper.destroy(),
                    (this._popper = null),
                    (this.element = null),
                    (this.config = null),
                    (this.tip = null);
                }),
                (v.show = function() {
                  var e = this;
                  if ('none' === t(this.element).css('display'))
                    throw new Error('Please use show on visible elements');
                  var i = t.Event(this.constructor.Event.SHOW);
                  if (this.isWithContent() && this._isEnabled) {
                    t(this.element).trigger(i);
                    var r = t.contains(this.element.ownerDocument.documentElement, this.element);
                    if (i.isDefaultPrevented() || !r) return;
                    var o = this.getTipElement(),
                      s = a.getUID(this.constructor.NAME);
                    o.setAttribute('id', s),
                      this.element.setAttribute('aria-describedby', s),
                      this.setContent(),
                      this.config.animation && t(o).addClass(p.FADE);
                    var l =
                        'function' == typeof this.config.placement
                          ? this.config.placement.call(this, o, this.element)
                          : this.config.placement,
                      u = this._getAttachment(l);
                    this.addAttachmentClass(u);
                    var c =
                      !1 === this.config.container
                        ? document.body
                        : t(document).find(this.config.container);
                    t(o).data(this.constructor.DATA_KEY, this),
                      t.contains(this.element.ownerDocument.documentElement, this.tip) ||
                        t(o).appendTo(c),
                      t(this.element).trigger(this.constructor.Event.INSERTED),
                      (this._popper = new n(this.element, o, {
                        placement: u,
                        modifiers: {
                          offset: { offset: this.config.offset },
                          flip: { behavior: this.config.fallbackPlacement },
                          arrow: { element: g.ARROW },
                          preventOverflow: { boundariesElement: this.config.boundary },
                        },
                        onCreate: function(t) {
                          t.originalPlacement !== t.placement && e._handlePopperPlacementChange(t);
                        },
                        onUpdate: function(t) {
                          e._handlePopperPlacementChange(t);
                        },
                      })),
                      t(o).addClass(p.SHOW),
                      'ontouchstart' in document.documentElement &&
                        t(document.body)
                          .children()
                          .on('mouseover', null, t.noop);
                    var h = function() {
                      e.config.animation && e._fixTransition();
                      var n = e._hoverState;
                      (e._hoverState = null),
                        t(e.element).trigger(e.constructor.Event.SHOWN),
                        n === f.OUT && e._leave(null, e);
                    };
                    if (t(this.tip).hasClass(p.FADE)) {
                      var d = a.getTransitionDurationFromElement(this.tip);
                      t(this.tip)
                        .one(a.TRANSITION_END, h)
                        .emulateTransitionEnd(d);
                    } else h();
                  }
                }),
                (v.hide = function(e) {
                  var n = this,
                    i = this.getTipElement(),
                    r = t.Event(this.constructor.Event.HIDE),
                    o = function() {
                      n._hoverState !== f.SHOW && i.parentNode && i.parentNode.removeChild(i),
                        n._cleanTipClass(),
                        n.element.removeAttribute('aria-describedby'),
                        t(n.element).trigger(n.constructor.Event.HIDDEN),
                        null !== n._popper && n._popper.destroy(),
                        e && e();
                    };
                  if ((t(this.element).trigger(r), !r.isDefaultPrevented())) {
                    if (
                      (t(i).removeClass(p.SHOW),
                      'ontouchstart' in document.documentElement &&
                        t(document.body)
                          .children()
                          .off('mouseover', null, t.noop),
                      (this._activeTrigger[m.CLICK] = !1),
                      (this._activeTrigger[m.FOCUS] = !1),
                      (this._activeTrigger[m.HOVER] = !1),
                      t(this.tip).hasClass(p.FADE))
                    ) {
                      var s = a.getTransitionDurationFromElement(i);
                      t(i)
                        .one(a.TRANSITION_END, o)
                        .emulateTransitionEnd(s);
                    } else o();
                    this._hoverState = '';
                  }
                }),
                (v.update = function() {
                  null !== this._popper && this._popper.scheduleUpdate();
                }),
                (v.isWithContent = function() {
                  return Boolean(this.getTitle());
                }),
                (v.addAttachmentClass = function(e) {
                  t(this.getTipElement()).addClass('bs-tooltip-' + e);
                }),
                (v.getTipElement = function() {
                  return (this.tip = this.tip || t(this.config.template)[0]), this.tip;
                }),
                (v.setContent = function() {
                  var e = this.getTipElement();
                  this.setElementContent(t(e.querySelectorAll(g.TOOLTIP_INNER)), this.getTitle()),
                    t(e).removeClass(p.FADE + ' ' + p.SHOW);
                }),
                (v.setElementContent = function(e, n) {
                  var i = this.config.html;
                  'object' == typeof n && (n.nodeType || n.jquery)
                    ? i
                      ? t(n)
                          .parent()
                          .is(e) || e.empty().append(n)
                      : e.text(t(n).text())
                    : e[i ? 'html' : 'text'](n);
                }),
                (v.getTitle = function() {
                  var t = this.element.getAttribute('data-original-title');
                  return (
                    t ||
                      (t =
                        'function' == typeof this.config.title
                          ? this.config.title.call(this.element)
                          : this.config.title),
                    t
                  );
                }),
                (v._getAttachment = function(t) {
                  return c[t.toUpperCase()];
                }),
                (v._setListeners = function() {
                  var e = this,
                    n = this.config.trigger.split(' ');
                  n.forEach(function(n) {
                    if ('click' === n)
                      t(e.element).on(e.constructor.Event.CLICK, e.config.selector, function(t) {
                        return e.toggle(t);
                      });
                    else if (n !== m.MANUAL) {
                      var i =
                          n === m.HOVER
                            ? e.constructor.Event.MOUSEENTER
                            : e.constructor.Event.FOCUSIN,
                        r =
                          n === m.HOVER
                            ? e.constructor.Event.MOUSELEAVE
                            : e.constructor.Event.FOCUSOUT;
                      t(e.element)
                        .on(i, e.config.selector, function(t) {
                          return e._enter(t);
                        })
                        .on(r, e.config.selector, function(t) {
                          return e._leave(t);
                        });
                    }
                    t(e.element)
                      .closest('.modal')
                      .on('hide.bs.modal', function() {
                        return e.hide();
                      });
                  }),
                    this.config.selector
                      ? (this.config = s({}, this.config, { trigger: 'manual', selector: '' }))
                      : this._fixTitle();
                }),
                (v._fixTitle = function() {
                  var t = typeof this.element.getAttribute('data-original-title');
                  (this.element.getAttribute('title') || 'string' !== t) &&
                    (this.element.setAttribute(
                      'data-original-title',
                      this.element.getAttribute('title') || '',
                    ),
                    this.element.setAttribute('title', ''));
                }),
                (v._enter = function(e, n) {
                  var i = this.constructor.DATA_KEY;
                  (n = n || t(e.currentTarget).data(i)) ||
                    ((n = new this.constructor(e.currentTarget, this._getDelegateConfig())),
                    t(e.currentTarget).data(i, n)),
                    e && (n._activeTrigger['focusin' === e.type ? m.FOCUS : m.HOVER] = !0),
                    t(n.getTipElement()).hasClass(p.SHOW) || n._hoverState === f.SHOW
                      ? (n._hoverState = f.SHOW)
                      : (clearTimeout(n._timeout),
                        (n._hoverState = f.SHOW),
                        n.config.delay && n.config.delay.show
                          ? (n._timeout = setTimeout(function() {
                              n._hoverState === f.SHOW && n.show();
                            }, n.config.delay.show))
                          : n.show());
                }),
                (v._leave = function(e, n) {
                  var i = this.constructor.DATA_KEY;
                  (n = n || t(e.currentTarget).data(i)) ||
                    ((n = new this.constructor(e.currentTarget, this._getDelegateConfig())),
                    t(e.currentTarget).data(i, n)),
                    e && (n._activeTrigger['focusout' === e.type ? m.FOCUS : m.HOVER] = !1),
                    n._isWithActiveTrigger() ||
                      (clearTimeout(n._timeout),
                      (n._hoverState = f.OUT),
                      n.config.delay && n.config.delay.hide
                        ? (n._timeout = setTimeout(function() {
                            n._hoverState === f.OUT && n.hide();
                          }, n.config.delay.hide))
                        : n.hide());
                }),
                (v._isWithActiveTrigger = function() {
                  for (var t in this._activeTrigger) if (this._activeTrigger[t]) return !0;
                  return !1;
                }),
                (v._getConfig = function(n) {
                  return (
                    'number' ==
                      typeof (n = s(
                        {},
                        this.constructor.Default,
                        t(this.element).data(),
                        'object' == typeof n && n ? n : {},
                      )).delay && (n.delay = { show: n.delay, hide: n.delay }),
                    'number' == typeof n.title && (n.title = n.title.toString()),
                    'number' == typeof n.content && (n.content = n.content.toString()),
                    a.typeCheckConfig(e, n, this.constructor.DefaultType),
                    n
                  );
                }),
                (v._getDelegateConfig = function() {
                  var t = {};
                  if (this.config)
                    for (var e in this.config)
                      this.constructor.Default[e] !== this.config[e] && (t[e] = this.config[e]);
                  return t;
                }),
                (v._cleanTipClass = function() {
                  var e = t(this.getTipElement()),
                    n = e.attr('class').match(l);
                  null !== n && n.length && e.removeClass(n.join(''));
                }),
                (v._handlePopperPlacementChange = function(t) {
                  var e = t.instance;
                  (this.tip = e.popper),
                    this._cleanTipClass(),
                    this.addAttachmentClass(this._getAttachment(t.placement));
                }),
                (v._fixTransition = function() {
                  var e = this.getTipElement(),
                    n = this.config.animation;
                  null === e.getAttribute('x-placement') &&
                    (t(e).removeClass(p.FADE),
                    (this.config.animation = !1),
                    this.hide(),
                    this.show(),
                    (this.config.animation = n));
                }),
                (o._jQueryInterface = function(e) {
                  return this.each(function() {
                    var n = t(this).data('bs.tooltip'),
                      i = 'object' == typeof e && e;
                    if (
                      (n || !/dispose|hide/.test(e)) &&
                      (n || ((n = new o(this, i)), t(this).data('bs.tooltip', n)),
                      'string' == typeof e)
                    ) {
                      if (void 0 === n[e]) throw new TypeError('No method named "' + e + '"');
                      n[e]();
                    }
                  });
                }),
                r(o, null, [
                  {
                    key: 'VERSION',
                    get: function() {
                      return '4.1.3';
                    },
                  },
                  {
                    key: 'Default',
                    get: function() {
                      return h;
                    },
                  },
                  {
                    key: 'NAME',
                    get: function() {
                      return e;
                    },
                  },
                  {
                    key: 'DATA_KEY',
                    get: function() {
                      return 'bs.tooltip';
                    },
                  },
                  {
                    key: 'Event',
                    get: function() {
                      return d;
                    },
                  },
                  {
                    key: 'EVENT_KEY',
                    get: function() {
                      return i;
                    },
                  },
                  {
                    key: 'DefaultType',
                    get: function() {
                      return u;
                    },
                  },
                ]),
                o
              );
            })();
          return (
            (t.fn[e] = v._jQueryInterface),
            (t.fn[e].Constructor = v),
            (t.fn[e].noConflict = function() {
              return (t.fn[e] = o), v._jQueryInterface;
            }),
            v
          );
        })(e),
        g = (function(t) {
          var e = 'popover',
            n = '.bs.popover',
            i = t.fn[e],
            o = new RegExp('(^|\\s)bs-popover\\S+', 'g'),
            a = s({}, p.Default, {
              placement: 'right',
              trigger: 'click',
              content: '',
              template:
                '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>',
            }),
            l = s({}, p.DefaultType, { content: '(string|element|function)' }),
            u = { FADE: 'fade', SHOW: 'show' },
            c = { TITLE: '.popover-header', CONTENT: '.popover-body' },
            h = {
              HIDE: 'hide' + n,
              HIDDEN: 'hidden' + n,
              SHOW: 'show' + n,
              SHOWN: 'shown' + n,
              INSERTED: 'inserted' + n,
              CLICK: 'click' + n,
              FOCUSIN: 'focusin' + n,
              FOCUSOUT: 'focusout' + n,
              MOUSEENTER: 'mouseenter' + n,
              MOUSELEAVE: 'mouseleave' + n,
            },
            f = (function(i) {
              var s, f;
              function d() {
                return i.apply(this, arguments) || this;
              }
              (f = i),
                ((s = d).prototype = Object.create(f.prototype)),
                (s.prototype.constructor = s),
                (s.__proto__ = f);
              var p = d.prototype;
              return (
                (p.isWithContent = function() {
                  return this.getTitle() || this._getContent();
                }),
                (p.addAttachmentClass = function(e) {
                  t(this.getTipElement()).addClass('bs-popover-' + e);
                }),
                (p.getTipElement = function() {
                  return (this.tip = this.tip || t(this.config.template)[0]), this.tip;
                }),
                (p.setContent = function() {
                  var e = t(this.getTipElement());
                  this.setElementContent(e.find(c.TITLE), this.getTitle());
                  var n = this._getContent();
                  'function' == typeof n && (n = n.call(this.element)),
                    this.setElementContent(e.find(c.CONTENT), n),
                    e.removeClass(u.FADE + ' ' + u.SHOW);
                }),
                (p._getContent = function() {
                  return this.element.getAttribute('data-content') || this.config.content;
                }),
                (p._cleanTipClass = function() {
                  var e = t(this.getTipElement()),
                    n = e.attr('class').match(o);
                  null !== n && n.length > 0 && e.removeClass(n.join(''));
                }),
                (d._jQueryInterface = function(e) {
                  return this.each(function() {
                    var n = t(this).data('bs.popover'),
                      i = 'object' == typeof e ? e : null;
                    if (
                      (n || !/destroy|hide/.test(e)) &&
                      (n || ((n = new d(this, i)), t(this).data('bs.popover', n)),
                      'string' == typeof e)
                    ) {
                      if (void 0 === n[e]) throw new TypeError('No method named "' + e + '"');
                      n[e]();
                    }
                  });
                }),
                r(d, null, [
                  {
                    key: 'VERSION',
                    get: function() {
                      return '4.1.3';
                    },
                  },
                  {
                    key: 'Default',
                    get: function() {
                      return a;
                    },
                  },
                  {
                    key: 'NAME',
                    get: function() {
                      return e;
                    },
                  },
                  {
                    key: 'DATA_KEY',
                    get: function() {
                      return 'bs.popover';
                    },
                  },
                  {
                    key: 'Event',
                    get: function() {
                      return h;
                    },
                  },
                  {
                    key: 'EVENT_KEY',
                    get: function() {
                      return n;
                    },
                  },
                  {
                    key: 'DefaultType',
                    get: function() {
                      return l;
                    },
                  },
                ]),
                d
              );
            })(p);
          return (
            (t.fn[e] = f._jQueryInterface),
            (t.fn[e].Constructor = f),
            (t.fn[e].noConflict = function() {
              return (t.fn[e] = i), f._jQueryInterface;
            }),
            f
          );
        })(e),
        m = (function(t) {
          var e = 'scrollspy',
            n = t.fn[e],
            i = { offset: 10, method: 'auto', target: '' },
            o = { offset: 'number', method: 'string', target: '(string|element)' },
            l = {
              ACTIVATE: 'activate.bs.scrollspy',
              SCROLL: 'scroll.bs.scrollspy',
              LOAD_DATA_API: 'load.bs.scrollspy.data-api',
            },
            u = {
              DROPDOWN_ITEM: 'dropdown-item',
              DROPDOWN_MENU: 'dropdown-menu',
              ACTIVE: 'active',
            },
            c = {
              DATA_SPY: '[data-spy="scroll"]',
              ACTIVE: '.active',
              NAV_LIST_GROUP: '.nav, .list-group',
              NAV_LINKS: '.nav-link',
              NAV_ITEMS: '.nav-item',
              LIST_ITEMS: '.list-group-item',
              DROPDOWN: '.dropdown',
              DROPDOWN_ITEMS: '.dropdown-item',
              DROPDOWN_TOGGLE: '.dropdown-toggle',
            },
            h = { OFFSET: 'offset', POSITION: 'position' },
            f = (function() {
              function n(e, n) {
                var i = this;
                (this._element = e),
                  (this._scrollElement = 'BODY' === e.tagName ? window : e),
                  (this._config = this._getConfig(n)),
                  (this._selector =
                    this._config.target +
                    ' ' +
                    c.NAV_LINKS +
                    ',' +
                    this._config.target +
                    ' ' +
                    c.LIST_ITEMS +
                    ',' +
                    this._config.target +
                    ' ' +
                    c.DROPDOWN_ITEMS),
                  (this._offsets = []),
                  (this._targets = []),
                  (this._activeTarget = null),
                  (this._scrollHeight = 0),
                  t(this._scrollElement).on(l.SCROLL, function(t) {
                    return i._process(t);
                  }),
                  this.refresh(),
                  this._process();
              }
              var f = n.prototype;
              return (
                (f.refresh = function() {
                  var e = this,
                    n = this._scrollElement === this._scrollElement.window ? h.OFFSET : h.POSITION,
                    i = 'auto' === this._config.method ? n : this._config.method,
                    r = i === h.POSITION ? this._getScrollTop() : 0;
                  (this._offsets = []),
                    (this._targets = []),
                    (this._scrollHeight = this._getScrollHeight());
                  var o = [].slice.call(document.querySelectorAll(this._selector));
                  o.map(function(e) {
                    var n,
                      o = a.getSelectorFromElement(e);
                    if ((o && (n = document.querySelector(o)), n)) {
                      var s = n.getBoundingClientRect();
                      if (s.width || s.height) return [t(n)[i]().top + r, o];
                    }
                    return null;
                  })
                    .filter(function(t) {
                      return t;
                    })
                    .sort(function(t, e) {
                      return t[0] - e[0];
                    })
                    .forEach(function(t) {
                      e._offsets.push(t[0]), e._targets.push(t[1]);
                    });
                }),
                (f.dispose = function() {
                  t.removeData(this._element, 'bs.scrollspy'),
                    t(this._scrollElement).off('.bs.scrollspy'),
                    (this._element = null),
                    (this._scrollElement = null),
                    (this._config = null),
                    (this._selector = null),
                    (this._offsets = null),
                    (this._targets = null),
                    (this._activeTarget = null),
                    (this._scrollHeight = null);
                }),
                (f._getConfig = function(n) {
                  if (
                    'string' != typeof (n = s({}, i, 'object' == typeof n && n ? n : {})).target
                  ) {
                    var r = t(n.target).attr('id');
                    r || ((r = a.getUID(e)), t(n.target).attr('id', r)), (n.target = '#' + r);
                  }
                  return a.typeCheckConfig(e, n, o), n;
                }),
                (f._getScrollTop = function() {
                  return this._scrollElement === window
                    ? this._scrollElement.pageYOffset
                    : this._scrollElement.scrollTop;
                }),
                (f._getScrollHeight = function() {
                  return (
                    this._scrollElement.scrollHeight ||
                    Math.max(document.body.scrollHeight, document.documentElement.scrollHeight)
                  );
                }),
                (f._getOffsetHeight = function() {
                  return this._scrollElement === window
                    ? window.innerHeight
                    : this._scrollElement.getBoundingClientRect().height;
                }),
                (f._process = function() {
                  var t = this._getScrollTop() + this._config.offset,
                    e = this._getScrollHeight(),
                    n = this._config.offset + e - this._getOffsetHeight();
                  if ((this._scrollHeight !== e && this.refresh(), t >= n)) {
                    var i = this._targets[this._targets.length - 1];
                    this._activeTarget !== i && this._activate(i);
                  } else {
                    if (this._activeTarget && t < this._offsets[0] && this._offsets[0] > 0)
                      return (this._activeTarget = null), void this._clear();
                    for (var r = this._offsets.length, o = r; o--; ) {
                      var s =
                        this._activeTarget !== this._targets[o] &&
                        t >= this._offsets[o] &&
                        (void 0 === this._offsets[o + 1] || t < this._offsets[o + 1]);
                      s && this._activate(this._targets[o]);
                    }
                  }
                }),
                (f._activate = function(e) {
                  (this._activeTarget = e), this._clear();
                  var n = this._selector.split(',');
                  n = n.map(function(t) {
                    return t + '[data-target="' + e + '"],' + t + '[href="' + e + '"]';
                  });
                  var i = t([].slice.call(document.querySelectorAll(n.join(','))));
                  i.hasClass(u.DROPDOWN_ITEM)
                    ? (i
                        .closest(c.DROPDOWN)
                        .find(c.DROPDOWN_TOGGLE)
                        .addClass(u.ACTIVE),
                      i.addClass(u.ACTIVE))
                    : (i.addClass(u.ACTIVE),
                      i
                        .parents(c.NAV_LIST_GROUP)
                        .prev(c.NAV_LINKS + ', ' + c.LIST_ITEMS)
                        .addClass(u.ACTIVE),
                      i
                        .parents(c.NAV_LIST_GROUP)
                        .prev(c.NAV_ITEMS)
                        .children(c.NAV_LINKS)
                        .addClass(u.ACTIVE)),
                    t(this._scrollElement).trigger(l.ACTIVATE, { relatedTarget: e });
                }),
                (f._clear = function() {
                  var e = [].slice.call(document.querySelectorAll(this._selector));
                  t(e)
                    .filter(c.ACTIVE)
                    .removeClass(u.ACTIVE);
                }),
                (n._jQueryInterface = function(e) {
                  return this.each(function() {
                    var i = t(this).data('bs.scrollspy'),
                      r = 'object' == typeof e && e;
                    if (
                      (i || ((i = new n(this, r)), t(this).data('bs.scrollspy', i)),
                      'string' == typeof e)
                    ) {
                      if (void 0 === i[e]) throw new TypeError('No method named "' + e + '"');
                      i[e]();
                    }
                  });
                }),
                r(n, null, [
                  {
                    key: 'VERSION',
                    get: function() {
                      return '4.1.3';
                    },
                  },
                  {
                    key: 'Default',
                    get: function() {
                      return i;
                    },
                  },
                ]),
                n
              );
            })();
          return (
            t(window).on(l.LOAD_DATA_API, function() {
              for (
                var e = [].slice.call(document.querySelectorAll(c.DATA_SPY)), n = e.length, i = n;
                i--;

              ) {
                var r = t(e[i]);
                f._jQueryInterface.call(r, r.data());
              }
            }),
            (t.fn[e] = f._jQueryInterface),
            (t.fn[e].Constructor = f),
            (t.fn[e].noConflict = function() {
              return (t.fn[e] = n), f._jQueryInterface;
            }),
            f
          );
        })(e),
        v = (function(t) {
          var e = t.fn.tab,
            n = {
              HIDE: 'hide.bs.tab',
              HIDDEN: 'hidden.bs.tab',
              SHOW: 'show.bs.tab',
              SHOWN: 'shown.bs.tab',
              CLICK_DATA_API: 'click.bs.tab.data-api',
            },
            i = {
              DROPDOWN_MENU: 'dropdown-menu',
              ACTIVE: 'active',
              DISABLED: 'disabled',
              FADE: 'fade',
              SHOW: 'show',
            },
            o = {
              DROPDOWN: '.dropdown',
              NAV_LIST_GROUP: '.nav, .list-group',
              ACTIVE: '.active',
              ACTIVE_UL: '> li > .active',
              DATA_TOGGLE: '[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]',
              DROPDOWN_TOGGLE: '.dropdown-toggle',
              DROPDOWN_ACTIVE_CHILD: '> .dropdown-menu .active',
            },
            s = (function() {
              function e(t) {
                this._element = t;
              }
              var s = e.prototype;
              return (
                (s.show = function() {
                  var e = this;
                  if (
                    !(
                      (this._element.parentNode &&
                        this._element.parentNode.nodeType === Node.ELEMENT_NODE &&
                        t(this._element).hasClass(i.ACTIVE)) ||
                      t(this._element).hasClass(i.DISABLED)
                    )
                  ) {
                    var r,
                      s,
                      l = t(this._element).closest(o.NAV_LIST_GROUP)[0],
                      u = a.getSelectorFromElement(this._element);
                    if (l) {
                      var c = 'UL' === l.nodeName ? o.ACTIVE_UL : o.ACTIVE;
                      s = (s = t.makeArray(t(l).find(c)))[s.length - 1];
                    }
                    var h = t.Event(n.HIDE, { relatedTarget: this._element }),
                      f = t.Event(n.SHOW, { relatedTarget: s });
                    if (
                      (s && t(s).trigger(h),
                      t(this._element).trigger(f),
                      !f.isDefaultPrevented() && !h.isDefaultPrevented())
                    ) {
                      u && (r = document.querySelector(u)), this._activate(this._element, l);
                      var d = function() {
                        var i = t.Event(n.HIDDEN, { relatedTarget: e._element }),
                          r = t.Event(n.SHOWN, { relatedTarget: s });
                        t(s).trigger(i), t(e._element).trigger(r);
                      };
                      r ? this._activate(r, r.parentNode, d) : d();
                    }
                  }
                }),
                (s.dispose = function() {
                  t.removeData(this._element, 'bs.tab'), (this._element = null);
                }),
                (s._activate = function(e, n, r) {
                  var s = this,
                    l = ('UL' === n.nodeName ? t(n).find(o.ACTIVE_UL) : t(n).children(o.ACTIVE))[0],
                    u = r && l && t(l).hasClass(i.FADE),
                    c = function() {
                      return s._transitionComplete(e, l, r);
                    };
                  if (l && u) {
                    var h = a.getTransitionDurationFromElement(l);
                    t(l)
                      .one(a.TRANSITION_END, c)
                      .emulateTransitionEnd(h);
                  } else c();
                }),
                (s._transitionComplete = function(e, n, r) {
                  if (n) {
                    t(n).removeClass(i.SHOW + ' ' + i.ACTIVE);
                    var s = t(n.parentNode).find(o.DROPDOWN_ACTIVE_CHILD)[0];
                    s && t(s).removeClass(i.ACTIVE),
                      'tab' === n.getAttribute('role') && n.setAttribute('aria-selected', !1);
                  }
                  if (
                    (t(e).addClass(i.ACTIVE),
                    'tab' === e.getAttribute('role') && e.setAttribute('aria-selected', !0),
                    a.reflow(e),
                    t(e).addClass(i.SHOW),
                    e.parentNode && t(e.parentNode).hasClass(i.DROPDOWN_MENU))
                  ) {
                    var l = t(e).closest(o.DROPDOWN)[0];
                    if (l) {
                      var u = [].slice.call(l.querySelectorAll(o.DROPDOWN_TOGGLE));
                      t(u).addClass(i.ACTIVE);
                    }
                    e.setAttribute('aria-expanded', !0);
                  }
                  r && r();
                }),
                (e._jQueryInterface = function(n) {
                  return this.each(function() {
                    var i = t(this),
                      r = i.data('bs.tab');
                    if ((r || ((r = new e(this)), i.data('bs.tab', r)), 'string' == typeof n)) {
                      if (void 0 === r[n]) throw new TypeError('No method named "' + n + '"');
                      r[n]();
                    }
                  });
                }),
                r(e, null, [
                  {
                    key: 'VERSION',
                    get: function() {
                      return '4.1.3';
                    },
                  },
                ]),
                e
              );
            })();
          return (
            t(document).on(n.CLICK_DATA_API, o.DATA_TOGGLE, function(e) {
              e.preventDefault(), s._jQueryInterface.call(t(this), 'show');
            }),
            (t.fn.tab = s._jQueryInterface),
            (t.fn.tab.Constructor = s),
            (t.fn.tab.noConflict = function() {
              return (t.fn.tab = e), s._jQueryInterface;
            }),
            s
          );
        })(e);
      (function(t) {
        if (void 0 === t)
          throw new TypeError(
            "Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript.",
          );
        var e = t.fn.jquery.split(' ')[0].split('.');
        if ((e[0] < 2 && e[1] < 9) || (1 === e[0] && 9 === e[1] && e[2] < 1) || e[0] >= 4)
          throw new Error(
            "Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0",
          );
      })(e),
        (t.Util = a),
        (t.Alert = l),
        (t.Button = u),
        (t.Carousel = c),
        (t.Collapse = h),
        (t.Dropdown = f),
        (t.Modal = d),
        (t.Popover = g),
        (t.Scrollspy = m),
        (t.Tab = v),
        (t.Tooltip = p),
        Object.defineProperty(t, '__esModule', { value: !0 });
    })(e, n(5), n(45));
  },
]);
//# sourceMappingURL=bundle.js.map
