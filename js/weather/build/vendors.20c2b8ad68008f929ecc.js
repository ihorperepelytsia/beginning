(window.webpackJsonp = window.webpackJsonp || []).push([
  [2],
  {
    '+5TE': function (t, e, n) {
      'use strict';
      n('Muwe');
      var i = n('WGD3'),
        r = n('DB1m'),
        o = n('hVpg'),
        s = n('+iL7'),
        a = n('GHf2'),
        c = n('nHIk'),
        l = a('species'),
        h = RegExp.prototype;
      t.exports = function (t, e, n, u) {
        var f = a(t),
          d = !s(function () {
            var e = {};
            return (
              (e[f] = function () {
                return 7;
              }),
              7 != ''[t](e)
            );
          }),
          p =
            d &&
            !s(function () {
              var e = !1,
                n = /a/;
              return (
                'split' === t &&
                  (((n = {}).constructor = {}),
                  (n.constructor[l] = function () {
                    return n;
                  }),
                  (n.flags = ''),
                  (n[f] = /./[f])),
                (n.exec = function () {
                  return (e = !0), null;
                }),
                n[f](''),
                !e
              );
            });
        if (!d || !p || n) {
          var g = i(/./[f]),
            m = e(f, ''[t], function (t, e, n, r, s) {
              var a = i(t),
                c = e.exec;
              return c === o || c === h.exec
                ? d && !s
                  ? { done: !0, value: g(e, n, r) }
                  : { done: !0, value: a(n, e, r) }
                : { done: !1 };
            });
          r(String.prototype, t, m[0]), r(h, f, m[1]);
        }
        u && c(h[f], 'sham', !0);
      };
    },
    '+iL7': function (t, e) {
      t.exports = function (t) {
        try {
          return !!t();
        } catch (t) {
          return !0;
        }
      };
    },
    '+n59': function (t, e, n) {
      var i = n('WGD3');
      t.exports = i({}.isPrototypeOf);
    },
    '/YDJ': function (t, e, n) {
      'use strict';
      (e.__esModule = !0),
        (e.registerDefaultDecorators = function (t) {
          o.default(t);
        });
      var i,
        r = n('hGk8'),
        o = (i = r) && i.__esModule ? i : { default: i };
    },
    '/dUa': function (t, e, n) {
      var i = n('WGD3'),
        r = n('PGFG'),
        o = n('MoOl'),
        s = i(Function.toString);
      r(o.inspectSource) ||
        (o.inspectSource = function (t) {
          return s(t);
        }),
        (t.exports = o.inspectSource);
    },
    '0X/5': function (t, e, n) {
      'use strict';
      var i = n('JRM0'),
        r = n('OzTt'),
        o = n('sK41'),
        s = n('N1hr'),
        a = n('gmtn'),
        c = n('maYj');
      i(
        { target: 'Promise', stat: !0, forced: n('AWPm') },
        {
          race: function (t) {
            var e = this,
              n = s.f(e),
              i = n.reject,
              l = a(function () {
                var s = o(e.resolve);
                c(t, function (t) {
                  r(s, e, t).then(n.resolve, i);
                });
              });
            return l.error && i(l.value), n.promise;
          },
        },
      );
    },
    '11ZY': function (t, e, n) {
      var i = n('Hvpk'),
        r = n('G9Va'),
        o = n('nRc6'),
        s = n('gDYM'),
        a = n('M/tt'),
        c = n('ujzH');
      e.f =
        i && !r
          ? Object.defineProperties
          : function (t, e) {
              s(t);
              for (var n, i = a(e), r = c(e), l = r.length, h = 0; l > h; )
                o.f(t, (n = r[h++]), i[n]);
              return t;
            };
    },
    '1tiZ': function (t, e, n) {
      var i = n('nRc6').f,
        r = n('jP2f'),
        o = n('GHf2')('toStringTag');
      t.exports = function (t, e, n) {
        t && !n && (t = t.prototype),
          t && !r(t, o) && i(t, o, { configurable: !0, value: e });
      };
    },
    '20JI': function (t, e, n) {
      'use strict';
      (function (i) {
        e.__esModule = !0;
        var r,
          o = n('82EY'),
          s = n('AIJh'),
          a = (r = s) && r.__esModule ? r : { default: r };
        (e.default = function (t) {
          t.registerHelper('each', function (t, e) {
            if (!e) throw new a.default('Must pass iterator to #each');
            var n,
              r = e.fn,
              s = e.inverse,
              c = 0,
              l = '',
              h = void 0,
              u = void 0;
            function f(e, n, i) {
              h &&
                ((h.key = e),
                (h.index = n),
                (h.first = 0 === n),
                (h.last = !!i),
                u && (h.contextPath = u + e)),
                (l += r(t[e], {
                  data: h,
                  blockParams: o.blockParams([t[e], e], [u + e, null]),
                }));
            }
            if (
              (e.data &&
                e.ids &&
                (u = o.appendContextPath(e.data.contextPath, e.ids[0]) + '.'),
              o.isFunction(t) && (t = t.call(this)),
              e.data && (h = o.createFrame(e.data)),
              t && 'object' == typeof t)
            )
              if (o.isArray(t))
                for (var d = t.length; c < d; c++)
                  c in t && f(c, c, c === t.length - 1);
              else if (i.Symbol && t[i.Symbol.iterator]) {
                for (
                  var p = [], g = t[i.Symbol.iterator](), m = g.next();
                  !m.done;
                  m = g.next()
                )
                  p.push(m.value);
                for (d = (t = p).length; c < d; c++)
                  f(c, c, c === t.length - 1);
              } else
                (n = void 0),
                  Object.keys(t).forEach(function (t) {
                    void 0 !== n && f(n, c - 1), (n = t), c++;
                  }),
                  void 0 !== n && f(n, c - 1, !0);
            return 0 === c && (l = s(this)), l;
          });
        }),
          (t.exports = e.default);
      }.call(this, n('pCvA')));
    },
    '37w6': function (t, e, n) {
      'use strict';
      (function (e) {
        var i = n('ovh1');
        t.exports = function (t, n) {
          n = n || new FormData();
          var r = [];
          function o(t) {
            return null === t
              ? ''
              : i.isDate(t)
              ? t.toISOString()
              : i.isArrayBuffer(t) || i.isTypedArray(t)
              ? 'function' == typeof Blob
                ? new Blob([t])
                : e.from(t)
              : t;
          }
          return (
            (function t(e, s) {
              if (i.isPlainObject(e) || i.isArray(e)) {
                if (-1 !== r.indexOf(e))
                  throw Error('Circular reference detected in ' + s);
                r.push(e),
                  i.forEach(e, function (e, r) {
                    if (!i.isUndefined(e)) {
                      var a,
                        c = s ? s + '.' + r : r;
                      if (e && !s && 'object' == typeof e)
                        if (i.endsWith(r, '{}')) e = JSON.stringify(e);
                        else if (i.endsWith(r, '[]') && (a = i.toArray(e)))
                          return void a.forEach(function (t) {
                            !i.isUndefined(t) && n.append(c, o(t));
                          });
                      t(e, c);
                    }
                  }),
                  r.pop();
              } else n.append(s, o(e));
            })(t),
            n
          );
        };
      }.call(this, n('zkTx').Buffer));
    },
    '3PYW': function (t, e, n) {
      'use strict';
      var i = n('5q7I').forEach,
        r = n('fK/z')('forEach');
      t.exports = r
        ? [].forEach
        : function (t) {
            return i(this, t, arguments.length > 1 ? arguments[1] : void 0);
          };
    },
    '3dw1': function (t, e, n) {
      var i = n('nEaP'),
        r = n('tPpl'),
        o = n('L91r'),
        s = n('3PYW'),
        a = n('nHIk'),
        c = function (t) {
          if (t && t.forEach !== s)
            try {
              a(t, 'forEach', s);
            } catch (e) {
              t.forEach = s;
            }
        };
      for (var l in r) r[l] && c(i[l] && i[l].prototype);
      c(o);
    },
    '3pC9': function (t, e, n) {
      var i = n('gIo2'),
        r = n('nrda'),
        o = i('keys');
      t.exports = function (t) {
        return o[t] || (o[t] = r(t));
      };
    },
    '41Zj': function (t, e, n) {
      'use strict';
      var i = {}.propertyIsEnumerable,
        r = Object.getOwnPropertyDescriptor,
        o = r && !i.call({ 1: 2 }, 1);
      e.f = o
        ? function (t) {
            var e = r(this, t);
            return !!e && e.enumerable;
          }
        : i;
    },
    '4M91': function (t, e, n) {
      var i = n('nEaP'),
        r = n('h/Mk'),
        o = n('iGMQ'),
        s = n('fT8P'),
        a = n('GHf2')('species'),
        c = i.Array;
      t.exports = function (t) {
        var e;
        return (
          r(t) &&
            ((e = t.constructor),
            ((o(e) && (e === c || r(e.prototype))) ||
              (s(e) && null === (e = e[a]))) &&
              (e = void 0)),
          void 0 === e ? c : e
        );
      };
    },
    '4OlW': function (t, e, n) {
      'use strict';
      var i = n('ovh1'),
        r = n('nGo5');
      t.exports = function (t, e, n) {
        var o = this || r;
        return (
          i.forEach(n, function (n) {
            t = n.call(o, t, e);
          }),
          t
        );
      };
    },
    '4jJt': function (t, e) {
      t.exports = { version: '0.27.2' };
    },
    '4ssk': function (t, e, n) {
      var i,
        r,
        o,
        s,
        a = n('nEaP'),
        c = n('R/cv'),
        l = n('a72Q'),
        h = n('PGFG'),
        u = n('jP2f'),
        f = n('+iL7'),
        d = n('R1TW'),
        p = n('i6bU'),
        g = n('HRgQ'),
        m = n('7DHN'),
        v = n('s06e'),
        y = n('YxGO'),
        x = a.setImmediate,
        b = a.clearImmediate,
        _ = a.process,
        w = a.Dispatch,
        k = a.Function,
        M = a.MessageChannel,
        P = a.String,
        O = 0,
        E = {};
      try {
        i = a.location;
      } catch (t) {}
      var S = function (t) {
          if (u(E, t)) {
            var e = E[t];
            delete E[t], e();
          }
        },
        T = function (t) {
          return function () {
            S(t);
          };
        },
        A = function (t) {
          S(t.data);
        },
        C = function (t) {
          a.postMessage(P(t), i.protocol + '//' + i.host);
        };
      (x && b) ||
        ((x = function (t) {
          m(arguments.length, 1);
          var e = h(t) ? t : k(t),
            n = p(arguments, 1);
          return (
            (E[++O] = function () {
              c(e, void 0, n);
            }),
            r(O),
            O
          );
        }),
        (b = function (t) {
          delete E[t];
        }),
        y
          ? (r = function (t) {
              _.nextTick(T(t));
            })
          : w && w.now
          ? (r = function (t) {
              w.now(T(t));
            })
          : M && !v
          ? ((s = (o = new M()).port2),
            (o.port1.onmessage = A),
            (r = l(s.postMessage, s)))
          : a.addEventListener &&
            h(a.postMessage) &&
            !a.importScripts &&
            i &&
            'file:' !== i.protocol &&
            !f(C)
          ? ((r = C), a.addEventListener('message', A, !1))
          : (r =
              'onreadystatechange' in g('script')
                ? function (t) {
                    d.appendChild(g('script')).onreadystatechange =
                      function () {
                        d.removeChild(this), S(t);
                      };
                  }
                : function (t) {
                    setTimeout(T(t), 0);
                  })),
        (t.exports = { set: x, clear: b });
    },
    '4wZq': function (t, e, n) {
      'use strict';
      (e.__esModule = !0),
        (e.createProtoAccessControl = function (t) {
          var e = Object.create(null);
          (e.constructor = !1),
            (e.__defineGetter__ = !1),
            (e.__defineSetter__ = !1),
            (e.__lookupGetter__ = !1);
          var n = Object.create(null);
          return (
            (n.__proto__ = !1),
            {
              properties: {
                whitelist: i.createNewLookupObject(n, t.allowedProtoProperties),
                defaultValue: t.allowProtoPropertiesByDefault,
              },
              methods: {
                whitelist: i.createNewLookupObject(e, t.allowedProtoMethods),
                defaultValue: t.allowProtoMethodsByDefault,
              },
            }
          );
        }),
        (e.resultIsAllowed = function (t, e, n) {
          return s('function' == typeof t ? e.methods : e.properties, n);
        }),
        (e.resetLoggedProperties = function () {
          Object.keys(o).forEach(function (t) {
            delete o[t];
          });
        });
      var i = n('ptwD'),
        r = (function (t) {
          if (t && t.__esModule) return t;
          var e = {};
          if (null != t)
            for (var n in t)
              Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
          return (e.default = t), e;
        })(n('jYw0')),
        o = Object.create(null);
      function s(t, e) {
        return void 0 !== t.whitelist[e]
          ? !0 === t.whitelist[e]
          : void 0 !== t.defaultValue
          ? t.defaultValue
          : ((function (t) {
              !0 !== o[t] &&
                ((o[t] = !0),
                r.log(
                  'error',
                  'Handlebars: Access has been denied to resolve the property "' +
                    t +
                    '" because it is not an "own property" of its parent.\nYou can add a runtime option to disable the check or this warning:\nSee https://handlebarsjs.com/api-reference/runtime-options.html#options-to-control-prototype-access for details',
                ));
            })(e),
            !1);
      }
    },
    '5IsQ': function (t, e) {
      var n,
        i,
        r = (t.exports = {});
      function o() {
        throw new Error('setTimeout has not been defined');
      }
      function s() {
        throw new Error('clearTimeout has not been defined');
      }
      function a(t) {
        if (n === setTimeout) return setTimeout(t, 0);
        if ((n === o || !n) && setTimeout)
          return (n = setTimeout), setTimeout(t, 0);
        try {
          return n(t, 0);
        } catch (e) {
          try {
            return n.call(null, t, 0);
          } catch (e) {
            return n.call(this, t, 0);
          }
        }
      }
      !(function () {
        try {
          n = 'function' == typeof setTimeout ? setTimeout : o;
        } catch (t) {
          n = o;
        }
        try {
          i = 'function' == typeof clearTimeout ? clearTimeout : s;
        } catch (t) {
          i = s;
        }
      })();
      var c,
        l = [],
        h = !1,
        u = -1;
      function f() {
        h &&
          c &&
          ((h = !1), c.length ? (l = c.concat(l)) : (u = -1), l.length && d());
      }
      function d() {
        if (!h) {
          var t = a(f);
          h = !0;
          for (var e = l.length; e; ) {
            for (c = l, l = []; ++u < e; ) c && c[u].run();
            (u = -1), (e = l.length);
          }
          (c = null),
            (h = !1),
            (function (t) {
              if (i === clearTimeout) return clearTimeout(t);
              if ((i === s || !i) && clearTimeout)
                return (i = clearTimeout), clearTimeout(t);
              try {
                i(t);
              } catch (e) {
                try {
                  return i.call(null, t);
                } catch (e) {
                  return i.call(this, t);
                }
              }
            })(t);
        }
      }
      function p(t, e) {
        (this.fun = t), (this.array = e);
      }
      function g() {}
      (r.nextTick = function (t) {
        var e = new Array(arguments.length - 1);
        if (arguments.length > 1)
          for (var n = 1; n < arguments.length; n++) e[n - 1] = arguments[n];
        l.push(new p(t, e)), 1 !== l.length || h || a(d);
      }),
        (p.prototype.run = function () {
          this.fun.apply(null, this.array);
        }),
        (r.title = 'browser'),
        (r.browser = !0),
        (r.env = {}),
        (r.argv = []),
        (r.version = ''),
        (r.versions = {}),
        (r.on = g),
        (r.addListener = g),
        (r.once = g),
        (r.off = g),
        (r.removeListener = g),
        (r.removeAllListeners = g),
        (r.emit = g),
        (r.prependListener = g),
        (r.prependOnceListener = g),
        (r.listeners = function (t) {
          return [];
        }),
        (r.binding = function (t) {
          throw new Error('process.binding is not supported');
        }),
        (r.cwd = function () {
          return '/';
        }),
        (r.chdir = function (t) {
          throw new Error('process.chdir is not supported');
        }),
        (r.umask = function () {
          return 0;
        });
    },
    '5QbJ': function (t, e, n) {
      'use strict';
      t.exports = function (t, e) {
        return function () {
          for (var n = new Array(arguments.length), i = 0; i < n.length; i++)
            n[i] = arguments[i];
          return t.apply(e, n);
        };
      };
    },
    '5q7I': function (t, e, n) {
      var i = n('a72Q'),
        r = n('WGD3'),
        o = n('DJGK'),
        s = n('9pAD'),
        a = n('fr05'),
        c = n('iSxr'),
        l = r([].push),
        h = function (t) {
          var e = 1 == t,
            n = 2 == t,
            r = 3 == t,
            h = 4 == t,
            u = 6 == t,
            f = 7 == t,
            d = 5 == t || u;
          return function (p, g, m, v) {
            for (
              var y,
                x,
                b = s(p),
                _ = o(b),
                w = i(g, m),
                k = a(_),
                M = 0,
                P = v || c,
                O = e ? P(p, k) : n || f ? P(p, 0) : void 0;
              k > M;
              M++
            )
              if ((d || M in _) && ((x = w((y = _[M]), M, b)), t))
                if (e) O[M] = x;
                else if (x)
                  switch (t) {
                    case 3:
                      return !0;
                    case 5:
                      return y;
                    case 6:
                      return M;
                    case 2:
                      l(O, y);
                  }
                else
                  switch (t) {
                    case 4:
                      return !1;
                    case 7:
                      l(O, y);
                  }
            return u ? -1 : r || h ? h : O;
          };
        };
      t.exports = {
        forEach: h(0),
        map: h(1),
        filter: h(2),
        some: h(3),
        every: h(4),
        find: h(5),
        findIndex: h(6),
        filterReject: h(7),
      };
    },
    '6+Qq': function (t, e, n) {
      'use strict';
      (function (n) {
        (e.__esModule = !0),
          (e.default = function (t) {
            var e = void 0 !== n ? n : window,
              i = e.Handlebars;
            t.noConflict = function () {
              return e.Handlebars === t && (e.Handlebars = i), t;
            };
          }),
          (t.exports = e.default);
      }.call(this, n('pCvA')));
    },
    '6+ef': function (t, e, n) {
      var i = n('GHf2'),
        r = n('q/gS'),
        o = i('iterator'),
        s = Array.prototype;
      t.exports = function (t) {
        return void 0 !== t && (r.Array === t || s[o] === t);
      };
    },
    '6ka5': function (t, e, n) {
      var i = n('gDYM'),
        r = n('lEJZ'),
        o = n('GHf2')('species');
      t.exports = function (t, e) {
        var n,
          s = i(t).constructor;
        return void 0 === s || null == (n = i(s)[o]) ? e : r(n);
      };
    },
    '6s8r': function (t, e, n) {
      'use strict';
      t.exports = function (t) {
        return function (e) {
          return t.apply(null, e);
        };
      };
    },
    '71kK': function (t, e, n) {
      'use strict';
      var i = n('ovh1');
      t.exports = function (t, e) {
        i.forEach(t, function (n, i) {
          i !== e &&
            i.toUpperCase() === e.toUpperCase() &&
            ((t[e] = n), delete t[i]);
        });
      };
    },
    '7Bi7': function (t, e) {
      t.exports = null;
    },
    '7DHN': function (t, e, n) {
      var i = n('nEaP').TypeError;
      t.exports = function (t, e) {
        if (t < e) throw i('Not enough arguments');
        return t;
      };
    },
    '7P5K': function (t, e, n) {
      var i = n('nEaP'),
        r = n('PGFG'),
        o = i.String,
        s = i.TypeError;
      t.exports = function (t) {
        if ('object' == typeof t || r(t)) return t;
        throw s("Can't set " + o(t) + ' as a prototype');
      };
    },
    '7UkH': function (t, e, n) {
      'use strict';
      e.__esModule = !0;
      var i,
        r = n('82EY'),
        o = n('AIJh'),
        s = (i = o) && i.__esModule ? i : { default: i };
      (e.default = function (t) {
        t.registerHelper('if', function (t, e) {
          if (2 != arguments.length)
            throw new s.default('#if requires exactly one argument');
          return (
            r.isFunction(t) && (t = t.call(this)),
            (!e.hash.includeZero && !t) || r.isEmpty(t)
              ? e.inverse(this)
              : e.fn(this)
          );
        }),
          t.registerHelper('unless', function (e, n) {
            if (2 != arguments.length)
              throw new s.default('#unless requires exactly one argument');
            return t.helpers.if.call(this, e, {
              fn: n.inverse,
              inverse: n.fn,
              hash: n.hash,
            });
          });
      }),
        (t.exports = e.default);
    },
    '82EY': function (t, e, n) {
      'use strict';
      (e.__esModule = !0),
        (e.extend = a),
        (e.indexOf = function (t, e) {
          for (var n = 0, i = t.length; n < i; n++) if (t[n] === e) return n;
          return -1;
        }),
        (e.escapeExpression = function (t) {
          if ('string' != typeof t) {
            if (t && t.toHTML) return t.toHTML();
            if (null == t) return '';
            if (!t) return t + '';
            t = '' + t;
          }
          if (!o.test(t)) return t;
          return t.replace(r, s);
        }),
        (e.isEmpty = function (t) {
          return (!t && 0 !== t) || !(!h(t) || 0 !== t.length);
        }),
        (e.createFrame = function (t) {
          var e = a({}, t);
          return (e._parent = t), e;
        }),
        (e.blockParams = function (t, e) {
          return (t.path = e), t;
        }),
        (e.appendContextPath = function (t, e) {
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
            Object.prototype.hasOwnProperty.call(arguments[e], n) &&
              (t[n] = arguments[e][n]);
        return t;
      }
      var c = Object.prototype.toString;
      e.toString = c;
      var l = function (t) {
        return 'function' == typeof t;
      };
      l(/x/) &&
        (e.isFunction = l =
          function (t) {
            return 'function' == typeof t && '[object Function]' === c.call(t);
          }),
        (e.isFunction = l);
      var h =
        Array.isArray ||
        function (t) {
          return (
            !(!t || 'object' != typeof t) && '[object Array]' === c.call(t)
          );
        };
      e.isArray = h;
    },
    '8OJN': function (t, e, n) {
      var i = n('WGD3'),
        r = n('jP2f'),
        o = n('M/tt'),
        s = n('kMPr').indexOf,
        a = n('s3NK'),
        c = i([].push);
      t.exports = function (t, e) {
        var n,
          i = o(t),
          l = 0,
          h = [];
        for (n in i) !r(a, n) && r(i, n) && c(h, n);
        for (; e.length > l; ) r(i, (n = e[l++])) && (~s(h, n) || c(h, n));
        return h;
      };
    },
    '9FbL': function (t, e, n) {
      'use strict';
      t.exports = {
        silentJSONParsing: !0,
        forcedJSONParsing: !0,
        clarifyTimeoutError: !1,
      };
    },
    '9nX2': function (t, e, n) {
      var i = n('+iL7'),
        r = n('PGFG'),
        o = /#|\.prototype\./,
        s = function (t, e) {
          var n = c[a(t)];
          return n == h || (n != l && (r(e) ? i(e) : !!e));
        },
        a = (s.normalize = function (t) {
          return String(t).replace(o, '.').toLowerCase();
        }),
        c = (s.data = {}),
        l = (s.NATIVE = 'N'),
        h = (s.POLYFILL = 'P');
      t.exports = s;
    },
    '9pAD': function (t, e, n) {
      var i = n('nEaP'),
        r = n('Qean'),
        o = i.Object;
      t.exports = function (t) {
        return o(r(t));
      };
    },
    AIJh: function (t, e, n) {
      'use strict';
      e.__esModule = !0;
      var i = [
        'description',
        'fileName',
        'lineNumber',
        'endLineNumber',
        'message',
        'name',
        'number',
        'stack',
      ];
      function r(t, e) {
        var n = e && e.loc,
          o = void 0,
          s = void 0,
          a = void 0,
          c = void 0;
        n &&
          ((o = n.start.line),
          (s = n.end.line),
          (a = n.start.column),
          (c = n.end.column),
          (t += ' - ' + o + ':' + a));
        for (
          var l = Error.prototype.constructor.call(this, t), h = 0;
          h < i.length;
          h++
        )
          this[i[h]] = l[i[h]];
        Error.captureStackTrace && Error.captureStackTrace(this, r);
        try {
          n &&
            ((this.lineNumber = o),
            (this.endLineNumber = s),
            Object.defineProperty
              ? (Object.defineProperty(this, 'column', {
                  value: a,
                  enumerable: !0,
                }),
                Object.defineProperty(this, 'endColumn', {
                  value: c,
                  enumerable: !0,
                }))
              : ((this.column = a), (this.endColumn = c)));
        } catch (t) {}
      }
      (r.prototype = new Error()), (e.default = r), (t.exports = e.default);
    },
    AWPm: function (t, e, n) {
      var i = n('de3D'),
        r = n('Ncbx'),
        o = n('QP1B').CONSTRUCTOR;
      t.exports =
        o ||
        !r(function (t) {
          i.all(t).then(void 0, function () {});
        });
    },
    AvGt: function (t, e, n) {
      var i = n('nEaP'),
        r = n('fshm'),
        o = i.String;
      t.exports = function (t) {
        if ('Symbol' === r(t))
          throw TypeError('Cannot convert a Symbol value to a string');
        return o(t);
      };
    },
    'B/3V': function (t, e, n) {
      var i = n('clxC');
      t.exports = i && !Symbol.sham && 'symbol' == typeof Symbol.iterator;
    },
    BnTm: function (t, e, n) {
      'use strict';
      var i = n('nEaP'),
        r = n('ZK/t'),
        o = n('AvGt'),
        s = n('Qean'),
        a = i.RangeError;
      t.exports = function (t) {
        var e = o(s(this)),
          n = '',
          i = r(t);
        if (i < 0 || i == 1 / 0) throw a('Wrong number of repetitions');
        for (; i > 0; (i >>>= 1) && (e += e)) 1 & i && (n += e);
        return n;
      };
    },
    BqYr: function (t, e, n) {
      var i = n('+iL7'),
        r = n('nEaP').RegExp,
        o = i(function () {
          var t = r('a', 'y');
          return (t.lastIndex = 2), null != t.exec('abcd');
        }),
        s =
          o ||
          i(function () {
            return !r('a', 'y').sticky;
          }),
        a =
          o ||
          i(function () {
            var t = r('^r', 'gy');
            return (t.lastIndex = 2), null != t.exec('str');
          });
      t.exports = { BROKEN_CARET: a, MISSED_STICKY: s, UNSUPPORTED_Y: o };
    },
    C4nn: function (t, e, n) {
      var i = n('JRM0'),
        r = n('rken'),
        o = n('d5e9');
      i({ target: 'Array', proto: !0 }, { fill: r }), o('fill');
    },
    CVD7: function (t, e, n) {
      var i = n('nEaP'),
        r = n('OzTt'),
        o = n('PGFG'),
        s = n('fT8P'),
        a = i.TypeError;
      t.exports = function (t, e) {
        var n, i;
        if ('string' === e && o((n = t.toString)) && !s((i = r(n, t))))
          return i;
        if (o((n = t.valueOf)) && !s((i = r(n, t)))) return i;
        if ('string' !== e && o((n = t.toString)) && !s((i = r(n, t))))
          return i;
        throw a("Can't convert object to primitive value");
      };
    },
    'D/wG': function (t, e, n) {
      var i = n('Hvpk'),
        r = n('wLFK').EXISTS,
        o = n('WGD3'),
        s = n('nRc6').f,
        a = Function.prototype,
        c = o(a.toString),
        l = /function\b(?:\s|\/\*[\S\s]*?\*\/|\/\/[^\n\r]*[\n\r]+)*([^\s(/]*)/,
        h = o(l.exec);
      i &&
        !r &&
        s(a, 'name', {
          configurable: !0,
          get: function () {
            try {
              return h(l, c(this))[1];
            } catch (t) {
              return '';
            }
          },
        });
    },
    DB1m: function (t, e, n) {
      var i = n('nEaP'),
        r = n('PGFG'),
        o = n('nHIk'),
        s = n('UMUd'),
        a = n('Ya6V');
      t.exports = function (t, e, n, c) {
        var l = !!c && !!c.unsafe,
          h = !!c && !!c.enumerable,
          u = !!c && !!c.noTargetGet,
          f = c && void 0 !== c.name ? c.name : e;
        return (
          r(n) && s(n, f, c),
          t === i
            ? (h ? (t[e] = n) : a(e, n), t)
            : (l ? !u && t[e] && (h = !0) : delete t[e],
              h ? (t[e] = n) : o(t, e, n),
              t)
        );
      };
    },
    DJGK: function (t, e, n) {
      var i = n('nEaP'),
        r = n('WGD3'),
        o = n('+iL7'),
        s = n('fSIz'),
        a = i.Object,
        c = r(''.split);
      t.exports = o(function () {
        return !a('z').propertyIsEnumerable(0);
      })
        ? function (t) {
            return 'String' == s(t) ? c(t, '') : a(t);
          }
        : a;
    },
    FaXh: function (t, e) {
      /*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */
      (e.read = function (t, e, n, i, r) {
        var o,
          s,
          a = 8 * r - i - 1,
          c = (1 << a) - 1,
          l = c >> 1,
          h = -7,
          u = n ? r - 1 : 0,
          f = n ? -1 : 1,
          d = t[e + u];
        for (
          u += f, o = d & ((1 << -h) - 1), d >>= -h, h += a;
          h > 0;
          o = 256 * o + t[e + u], u += f, h -= 8
        );
        for (
          s = o & ((1 << -h) - 1), o >>= -h, h += i;
          h > 0;
          s = 256 * s + t[e + u], u += f, h -= 8
        );
        if (0 === o) o = 1 - l;
        else {
          if (o === c) return s ? NaN : (1 / 0) * (d ? -1 : 1);
          (s += Math.pow(2, i)), (o -= l);
        }
        return (d ? -1 : 1) * s * Math.pow(2, o - i);
      }),
        (e.write = function (t, e, n, i, r, o) {
          var s,
            a,
            c,
            l = 8 * o - r - 1,
            h = (1 << l) - 1,
            u = h >> 1,
            f = 23 === r ? Math.pow(2, -24) - Math.pow(2, -77) : 0,
            d = i ? 0 : o - 1,
            p = i ? 1 : -1,
            g = e < 0 || (0 === e && 1 / e < 0) ? 1 : 0;
          for (
            e = Math.abs(e),
              isNaN(e) || e === 1 / 0
                ? ((a = isNaN(e) ? 1 : 0), (s = h))
                : ((s = Math.floor(Math.log(e) / Math.LN2)),
                  e * (c = Math.pow(2, -s)) < 1 && (s--, (c *= 2)),
                  (e += s + u >= 1 ? f / c : f * Math.pow(2, 1 - u)) * c >= 2 &&
                    (s++, (c /= 2)),
                  s + u >= h
                    ? ((a = 0), (s = h))
                    : s + u >= 1
                    ? ((a = (e * c - 1) * Math.pow(2, r)), (s += u))
                    : ((a = e * Math.pow(2, u - 1) * Math.pow(2, r)), (s = 0)));
            r >= 8;
            t[n + d] = 255 & a, d += p, a /= 256, r -= 8
          );
          for (
            s = (s << r) | a, l += r;
            l > 0;
            t[n + d] = 255 & s, d += p, s /= 256, l -= 8
          );
          t[n + d - p] |= 128 * g;
        });
    },
    FdtR: function (t, e, n) {
      n('q7PB'), n('aXzG'), n('O/1Y'), n('0X/5'), n('uXC8'), n('XSxi');
    },
    FkYI: function (t, e, n) {},
    Fup7: function (t, e, n) {
      var i = n('Hvpk'),
        r = n('OzTt'),
        o = n('41Zj'),
        s = n('VSW8'),
        a = n('M/tt'),
        c = n('b3pM'),
        l = n('jP2f'),
        h = n('xwiM'),
        u = Object.getOwnPropertyDescriptor;
      e.f = i
        ? u
        : function (t, e) {
            if (((t = a(t)), (e = c(e)), h))
              try {
                return u(t, e);
              } catch (t) {}
            if (l(t, e)) return s(!r(o.f, t, e), t[e]);
          };
    },
    G5hJ: function (t, e, n) {
      var i,
        r,
        o = n('nEaP'),
        s = n('rxbk'),
        a = o.process,
        c = o.Deno,
        l = (a && a.versions) || (c && c.version),
        h = l && l.v8;
      h && (r = (i = h.split('.'))[0] > 0 && i[0] < 4 ? 1 : +(i[0] + i[1])),
        !r &&
          s &&
          (!(i = s.match(/Edge\/(\d+)/)) || i[1] >= 74) &&
          (i = s.match(/Chrome\/(\d+)/)) &&
          (r = +i[1]),
        (t.exports = r);
    },
    G9Va: function (t, e, n) {
      var i = n('Hvpk'),
        r = n('+iL7');
      t.exports =
        i &&
        r(function () {
          return (
            42 !=
            Object.defineProperty(function () {}, 'prototype', {
              value: 42,
              writable: !1,
            }).prototype
          );
        });
    },
    GHf2: function (t, e, n) {
      var i = n('nEaP'),
        r = n('gIo2'),
        o = n('jP2f'),
        s = n('nrda'),
        a = n('clxC'),
        c = n('B/3V'),
        l = r('wks'),
        h = i.Symbol,
        u = h && h.for,
        f = c ? h : (h && h.withoutSetter) || s;
      t.exports = function (t) {
        if (!o(l, t) || (!a && 'string' != typeof l[t])) {
          var e = 'Symbol.' + t;
          a && o(h, t) ? (l[t] = h[t]) : (l[t] = c && u ? u(e) : f(e));
        }
        return l[t];
      };
    },
    GrtF: function (t, e, n) {
      var i = n('fT8P'),
        r = n('fSIz'),
        o = n('GHf2')('match');
      t.exports = function (t) {
        var e;
        return i(t) && (void 0 !== (e = t[o]) ? !!e : 'RegExp' == r(t));
      };
    },
    HRgQ: function (t, e, n) {
      var i = n('nEaP'),
        r = n('fT8P'),
        o = i.document,
        s = r(o) && r(o.createElement);
      t.exports = function (t) {
        return s ? o.createElement(t) : {};
      };
    },
    Hvpk: function (t, e, n) {
      var i = n('+iL7');
      t.exports = !i(function () {
        return (
          7 !=
          Object.defineProperty({}, 1, {
            get: function () {
              return 7;
            },
          })[1]
        );
      });
    },
    IVfQ: function (t, e, n) {
      'use strict';
      (e.__esModule = !0),
        (e.default = function (t) {
          t.registerHelper('log', function () {
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
    JBxO: function (t, e, n) {
      var i = n('k2M3'),
        r = n('DB1m'),
        o = n('UpYF');
      i || r(Object.prototype, 'toString', o, { unsafe: !0 });
    },
    JRM0: function (t, e, n) {
      var i = n('nEaP'),
        r = n('Fup7').f,
        o = n('nHIk'),
        s = n('DB1m'),
        a = n('Ya6V'),
        c = n('v0JE'),
        l = n('9nX2');
      t.exports = function (t, e) {
        var n,
          h,
          u,
          f,
          d,
          p = t.target,
          g = t.global,
          m = t.stat;
        if ((n = g ? i : m ? i[p] || a(p, {}) : (i[p] || {}).prototype))
          for (h in e) {
            if (
              ((f = e[h]),
              (u = t.noTargetGet ? (d = r(n, h)) && d.value : n[h]),
              !l(g ? h : p + (m ? '.' : '#') + h, t.forced) && void 0 !== u)
            ) {
              if (typeof f == typeof u) continue;
              c(f, u);
            }
            (t.sham || (u && u.sham)) && o(f, 'sham', !0), s(n, h, f, t);
          }
      };
    },
    Jikt: function (t, e, n) {
      'use strict';
      function i(t) {
        return t && t.__esModule ? t : { default: t };
      }
      function r(t) {
        if (t && t.__esModule) return t;
        var e = {};
        if (null != t)
          for (var n in t)
            Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
        return (e.default = t), e;
      }
      e.__esModule = !0;
      var o = r(n('dJlP')),
        s = i(n('l3gt')),
        a = i(n('AIJh')),
        c = r(n('82EY')),
        l = r(n('co8E')),
        h = i(n('6+Qq'));
      function u() {
        var t = new o.HandlebarsEnvironment();
        return (
          c.extend(t, o),
          (t.SafeString = s.default),
          (t.Exception = a.default),
          (t.Utils = c),
          (t.escapeExpression = c.escapeExpression),
          (t.VM = l),
          (t.template = function (e) {
            return l.template(e, t);
          }),
          t
        );
      }
      var f = u();
      (f.create = u),
        h.default(f),
        (f.default = f),
        (e.default = f),
        (t.exports = e.default);
    },
    JtDR: function (t, e, n) {
      'use strict';
      var i = n('z+V7').charAt;
      t.exports = function (t, e, n) {
        return e + (n ? i(t, e).length : 1);
      };
    },
    KlUR: function (t, e, n) {
      'use strict';
      (e.byteLength = function (t) {
        var e = l(t),
          n = e[0],
          i = e[1];
        return (3 * (n + i)) / 4 - i;
      }),
        (e.toByteArray = function (t) {
          var e,
            n,
            i = l(t),
            s = i[0],
            a = i[1],
            c = new o(
              (function (t, e, n) {
                return (3 * (e + n)) / 4 - n;
              })(0, s, a),
            ),
            h = 0,
            u = a > 0 ? s - 4 : s;
          for (n = 0; n < u; n += 4)
            (e =
              (r[t.charCodeAt(n)] << 18) |
              (r[t.charCodeAt(n + 1)] << 12) |
              (r[t.charCodeAt(n + 2)] << 6) |
              r[t.charCodeAt(n + 3)]),
              (c[h++] = (e >> 16) & 255),
              (c[h++] = (e >> 8) & 255),
              (c[h++] = 255 & e);
          2 === a &&
            ((e = (r[t.charCodeAt(n)] << 2) | (r[t.charCodeAt(n + 1)] >> 4)),
            (c[h++] = 255 & e));
          1 === a &&
            ((e =
              (r[t.charCodeAt(n)] << 10) |
              (r[t.charCodeAt(n + 1)] << 4) |
              (r[t.charCodeAt(n + 2)] >> 2)),
            (c[h++] = (e >> 8) & 255),
            (c[h++] = 255 & e));
          return c;
        }),
        (e.fromByteArray = function (t) {
          for (
            var e, n = t.length, r = n % 3, o = [], s = 0, a = n - r;
            s < a;
            s += 16383
          )
            o.push(h(t, s, s + 16383 > a ? a : s + 16383));
          1 === r
            ? ((e = t[n - 1]), o.push(i[e >> 2] + i[(e << 4) & 63] + '=='))
            : 2 === r &&
              ((e = (t[n - 2] << 8) + t[n - 1]),
              o.push(i[e >> 10] + i[(e >> 4) & 63] + i[(e << 2) & 63] + '='));
          return o.join('');
        });
      for (
        var i = [],
          r = [],
          o = 'undefined' != typeof Uint8Array ? Uint8Array : Array,
          s =
            'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/',
          a = 0,
          c = s.length;
        a < c;
        ++a
      )
        (i[a] = s[a]), (r[s.charCodeAt(a)] = a);
      function l(t) {
        var e = t.length;
        if (e % 4 > 0)
          throw new Error('Invalid string. Length must be a multiple of 4');
        var n = t.indexOf('=');
        return -1 === n && (n = e), [n, n === e ? 0 : 4 - (n % 4)];
      }
      function h(t, e, n) {
        for (var r, o, s = [], a = e; a < n; a += 3)
          (r =
            ((t[a] << 16) & 16711680) +
            ((t[a + 1] << 8) & 65280) +
            (255 & t[a + 2])),
            s.push(
              i[((o = r) >> 18) & 63] +
                i[(o >> 12) & 63] +
                i[(o >> 6) & 63] +
                i[63 & o],
            );
        return s.join('');
      }
      (r['-'.charCodeAt(0)] = 62), (r['_'.charCodeAt(0)] = 63);
    },
    Krfs: function (t, e, n) {
      var i = n('sK41');
      t.exports = function (t, e) {
        var n = t[e];
        return null == n ? void 0 : i(n);
      };
    },
    L91r: function (t, e, n) {
      var i = n('HRgQ')('span').classList,
        r = i && i.constructor && i.constructor.prototype;
      t.exports = r === Object.prototype ? void 0 : r;
    },
    LMdw: function (t, e, n) {
      var i = n('UVdV'),
        r = n('WGD3'),
        o = n('OVha'),
        s = n('rk7W'),
        a = n('gDYM'),
        c = r([].concat);
      t.exports =
        i('Reflect', 'ownKeys') ||
        function (t) {
          var e = o.f(a(t)),
            n = s.f;
          return n ? c(e, n(t)) : e;
        };
    },
    'M/tt': function (t, e, n) {
      var i = n('DJGK'),
        r = n('Qean');
      t.exports = function (t) {
        return i(r(t));
      };
    },
    MoOl: function (t, e, n) {
      var i = n('nEaP'),
        r = n('Ya6V'),
        o = i['__core-js_shared__'] || r('__core-js_shared__', {});
      t.exports = o;
    },
    Muwe: function (t, e, n) {
      'use strict';
      var i = n('JRM0'),
        r = n('hVpg');
      i({ target: 'RegExp', proto: !0, forced: /./.exec !== r }, { exec: r });
    },
    N1hr: function (t, e, n) {
      'use strict';
      var i = n('sK41'),
        r = function (t) {
          var e, n;
          (this.promise = new t(function (t, i) {
            if (void 0 !== e || void 0 !== n)
              throw TypeError('Bad Promise constructor');
            (e = t), (n = i);
          })),
            (this.resolve = i(e)),
            (this.reject = i(n));
        };
      t.exports.f = function (t) {
        return new r(t);
      };
    },
    Ncbx: function (t, e, n) {
      var i = n('GHf2')('iterator'),
        r = !1;
      try {
        var o = 0,
          s = {
            next: function () {
              return { done: !!o++ };
            },
            return: function () {
              r = !0;
            },
          };
        (s[i] = function () {
          return this;
        }),
          Array.from(s, function () {
            throw 2;
          });
      } catch (t) {}
      t.exports = function (t, e) {
        if (!e && !r) return !1;
        var n = !1;
        try {
          var o = {};
          (o[i] = function () {
            return {
              next: function () {
                return { done: (n = !0) };
              },
            };
          }),
            t(o);
        } catch (t) {}
        return n;
      };
    },
    'O/1Y': function (t, e, n) {
      'use strict';
      var i = n('JRM0'),
        r = n('PCqT'),
        o = n('QP1B').CONSTRUCTOR,
        s = n('de3D'),
        a = n('UVdV'),
        c = n('PGFG'),
        l = n('DB1m'),
        h = s && s.prototype;
      if (
        (i(
          { target: 'Promise', proto: !0, forced: o, real: !0 },
          {
            catch: function (t) {
              return this.then(void 0, t);
            },
          },
        ),
        !r && c(s))
      ) {
        var u = a('Promise').prototype.catch;
        h.catch !== u && l(h, 'catch', u, { unsafe: !0 });
      }
    },
    O2Ja: function (t, e, n) {
      'use strict';
      var i = n('gDYM');
      t.exports = function () {
        var t = i(this),
          e = '';
        return (
          t.hasIndices && (e += 'd'),
          t.global && (e += 'g'),
          t.ignoreCase && (e += 'i'),
          t.multiline && (e += 'm'),
          t.dotAll && (e += 's'),
          t.unicode && (e += 'u'),
          t.sticky && (e += 'y'),
          e
        );
      };
    },
    OBDY: function (t, e, n) {
      'use strict';
      var i = n('ovh1');
      t.exports = function (t) {
        return i.isObject(t) && !0 === t.isAxiosError;
      };
    },
    OHXD: function (t, e, n) {
      'use strict';
      var i = n('pvzg');
      function r(t) {
        if ('function' != typeof t)
          throw new TypeError('executor must be a function.');
        var e;
        this.promise = new Promise(function (t) {
          e = t;
        });
        var n = this;
        this.promise.then(function (t) {
          if (n._listeners) {
            var e,
              i = n._listeners.length;
            for (e = 0; e < i; e++) n._listeners[e](t);
            n._listeners = null;
          }
        }),
          (this.promise.then = function (t) {
            var e,
              i = new Promise(function (t) {
                n.subscribe(t), (e = t);
              }).then(t);
            return (
              (i.cancel = function () {
                n.unsubscribe(e);
              }),
              i
            );
          }),
          t(function (t) {
            n.reason || ((n.reason = new i(t)), e(n.reason));
          });
      }
      (r.prototype.throwIfRequested = function () {
        if (this.reason) throw this.reason;
      }),
        (r.prototype.subscribe = function (t) {
          this.reason
            ? t(this.reason)
            : this._listeners
            ? this._listeners.push(t)
            : (this._listeners = [t]);
        }),
        (r.prototype.unsubscribe = function (t) {
          if (this._listeners) {
            var e = this._listeners.indexOf(t);
            -1 !== e && this._listeners.splice(e, 1);
          }
        }),
        (r.source = function () {
          var t;
          return {
            token: new r(function (e) {
              t = e;
            }),
            cancel: t,
          };
        }),
        (t.exports = r);
    },
    OTtX: function (t, e, n) {
      var i = n('nEaP');
      t.exports = function (t, e) {
        var n = i.console;
        n && n.error && (1 == arguments.length ? n.error(t) : n.error(t, e));
      };
    },
    OVha: function (t, e, n) {
      var i = n('8OJN'),
        r = n('ek/P').concat('length', 'prototype');
      e.f =
        Object.getOwnPropertyNames ||
        function (t) {
          return i(t, r);
        };
    },
    OzTt: function (t, e, n) {
      var i = n('tlZM'),
        r = Function.prototype.call;
      t.exports = i
        ? r.bind(r)
        : function () {
            return r.apply(r, arguments);
          };
    },
    P2u4: function (t, e, n) {
      var i = n('nEaP'),
        r = n('PGFG'),
        o = n('/dUa'),
        s = i.WeakMap;
      t.exports = r(s) && /native code/.test(o(s));
    },
    PCqT: function (t, e) {
      t.exports = !1;
    },
    PGFG: function (t, e) {
      t.exports = function (t) {
        return 'function' == typeof t;
      };
    },
    QJ3N: function (t, e, n) {
      (function (t) {
        !(function (e) {
          'use strict';
          function n(t) {
            return (n =
              'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
                ? function (t) {
                    return typeof t;
                  }
                : function (t) {
                    return t &&
                      'function' == typeof Symbol &&
                      t.constructor === Symbol &&
                      t !== Symbol.prototype
                      ? 'symbol'
                      : typeof t;
                  })(t);
          }
          function i(t, e) {
            if (!(t instanceof e))
              throw new TypeError('Cannot call a class as a function');
          }
          function r(t, e) {
            for (var n = 0; n < e.length; n++) {
              var i = e[n];
              (i.enumerable = i.enumerable || !1),
                (i.configurable = !0),
                'value' in i && (i.writable = !0),
                Object.defineProperty(t, i.key, i);
            }
          }
          function o(t, e, n) {
            return e && r(t.prototype, e), n && r(t, n), t;
          }
          function s(t, e, n) {
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
          function a(t, e) {
            var n = Object.keys(t);
            if (Object.getOwnPropertySymbols) {
              var i = Object.getOwnPropertySymbols(t);
              e &&
                (i = i.filter(function (e) {
                  return Object.getOwnPropertyDescriptor(t, e).enumerable;
                })),
                n.push.apply(n, i);
            }
            return n;
          }
          function c(t) {
            for (var e = 1; e < arguments.length; e++) {
              var n = null != arguments[e] ? arguments[e] : {};
              e % 2
                ? a(Object(n), !0).forEach(function (e) {
                    s(t, e, n[e]);
                  })
                : Object.getOwnPropertyDescriptors
                ? Object.defineProperties(
                    t,
                    Object.getOwnPropertyDescriptors(n),
                  )
                : a(Object(n)).forEach(function (e) {
                    Object.defineProperty(
                      t,
                      e,
                      Object.getOwnPropertyDescriptor(n, e),
                    );
                  });
            }
            return t;
          }
          function l(t) {
            return (l = Object.setPrototypeOf
              ? Object.getPrototypeOf
              : function (t) {
                  return t.__proto__ || Object.getPrototypeOf(t);
                })(t);
          }
          function h(t, e) {
            return (h =
              Object.setPrototypeOf ||
              function (t, e) {
                return (t.__proto__ = e), t;
              })(t, e);
          }
          function u() {
            if ('undefined' == typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ('function' == typeof Proxy) return !0;
            try {
              return (
                Date.prototype.toString.call(
                  Reflect.construct(Date, [], function () {}),
                ),
                !0
              );
            } catch (t) {
              return !1;
            }
          }
          function f(t, e, n) {
            return (f = u()
              ? Reflect.construct
              : function (t, e, n) {
                  var i = [null];
                  i.push.apply(i, e);
                  var r = new (Function.bind.apply(t, i))();
                  return n && h(r, n.prototype), r;
                }).apply(null, arguments);
          }
          function d(t) {
            if (void 0 === t)
              throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called",
              );
            return t;
          }
          function p(t, e) {
            return !e || ('object' != typeof e && 'function' != typeof e)
              ? d(t)
              : e;
          }
          function g(t, e) {
            return (
              (function (t) {
                if (Array.isArray(t)) return t;
              })(t) ||
              (function (t, e) {
                if (
                  'undefined' != typeof Symbol &&
                  Symbol.iterator in Object(t)
                ) {
                  var n = [],
                    i = !0,
                    r = !1,
                    o = void 0;
                  try {
                    for (
                      var s, a = t[Symbol.iterator]();
                      !(i = (s = a.next()).done) &&
                      (n.push(s.value), !e || n.length !== e);
                      i = !0
                    );
                  } catch (t) {
                    (r = !0), (o = t);
                  } finally {
                    try {
                      i || null == a.return || a.return();
                    } finally {
                      if (r) throw o;
                    }
                  }
                  return n;
                }
              })(t, e) ||
              v(t, e) ||
              (function () {
                throw new TypeError(
                  'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
                );
              })()
            );
          }
          function m(t) {
            return (
              (function (t) {
                if (Array.isArray(t)) return y(t);
              })(t) ||
              (function (t) {
                if (
                  'undefined' != typeof Symbol &&
                  Symbol.iterator in Object(t)
                )
                  return Array.from(t);
              })(t) ||
              v(t) ||
              (function () {
                throw new TypeError(
                  'Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
                );
              })()
            );
          }
          function v(t, e) {
            if (t) {
              if ('string' == typeof t) return y(t, e);
              var n = Object.prototype.toString.call(t).slice(8, -1);
              return (
                'Object' === n && t.constructor && (n = t.constructor.name),
                'Map' === n || 'Set' === n
                  ? Array.from(t)
                  : 'Arguments' === n ||
                    /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                  ? y(t, e)
                  : void 0
              );
            }
          }
          function y(t, e) {
            (null == e || e > t.length) && (e = t.length);
            for (var n = 0, i = new Array(e); n < e; n++) i[n] = t[n];
            return i;
          }
          function x() {}
          function b(t, e) {
            for (var n in e) t[n] = e[n];
            return t;
          }
          function _(t) {
            return t();
          }
          function w() {
            return Object.create(null);
          }
          function k(t) {
            t.forEach(_);
          }
          function M(t) {
            return 'function' == typeof t;
          }
          function P(t, e) {
            return t != t
              ? e == e
              : t !== e || (t && 'object' === n(t)) || 'function' == typeof t;
          }
          function O(t, e) {
            t.appendChild(e);
          }
          function E(t, e, n) {
            t.insertBefore(e, n || null);
          }
          function S(t) {
            t.parentNode.removeChild(t);
          }
          function T(t) {
            return document.createElement(t);
          }
          function A(t) {
            return document.createTextNode(t);
          }
          function C() {
            return A(' ');
          }
          function R() {
            return A('');
          }
          function D(t, e, n, i) {
            return (
              t.addEventListener(e, n, i),
              function () {
                return t.removeEventListener(e, n, i);
              }
            );
          }
          function L(t, e, n) {
            null == n
              ? t.removeAttribute(e)
              : t.getAttribute(e) !== n && t.setAttribute(e, n);
          }
          function I(t) {
            return Array.from(t.childNodes);
          }
          function j(t, e) {
            (e = '' + e), t.wholeText !== e && (t.data = e);
          }
          var $,
            N = (function () {
              function t() {
                var e =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : null;
                i(this, t), (this.a = e), (this.e = this.n = null);
              }
              return (
                o(t, [
                  {
                    key: 'm',
                    value: function (t, e) {
                      var n =
                        arguments.length > 2 && void 0 !== arguments[2]
                          ? arguments[2]
                          : null;
                      this.e ||
                        ((this.e = T(e.nodeName)), (this.t = e), this.h(t)),
                        this.i(n);
                    },
                  },
                  {
                    key: 'h',
                    value: function (t) {
                      (this.e.innerHTML = t),
                        (this.n = Array.from(this.e.childNodes));
                    },
                  },
                  {
                    key: 'i',
                    value: function (t) {
                      for (var e = 0; e < this.n.length; e += 1)
                        E(this.t, this.n[e], t);
                    },
                  },
                  {
                    key: 'p',
                    value: function (t) {
                      this.d(), this.h(t), this.i(this.a);
                    },
                  },
                  {
                    key: 'd',
                    value: function () {
                      this.n.forEach(S);
                    },
                  },
                ]),
                t
              );
            })();
          function F(t) {
            $ = t;
          }
          function B() {
            if (!$)
              throw new Error(
                'Function called outside component initialization',
              );
            return $;
          }
          function z(t, e) {
            var n = t.$$.callbacks[e.type];
            n &&
              n.slice().forEach(function (t) {
                return t(e);
              });
          }
          var H = [],
            V = [],
            W = [],
            U = [],
            Y = Promise.resolve(),
            G = !1;
          function q() {
            G || ((G = !0), Y.then(Z));
          }
          function J() {
            return q(), Y;
          }
          function X(t) {
            W.push(t);
          }
          var K = !1,
            Q = new Set();
          function Z() {
            if (!K) {
              K = !0;
              do {
                for (var t = 0; t < H.length; t += 1) {
                  var e = H[t];
                  F(e), tt(e.$$);
                }
                for (F(null), H.length = 0; V.length; ) V.pop()();
                for (var n = 0; n < W.length; n += 1) {
                  var i = W[n];
                  Q.has(i) || (Q.add(i), i());
                }
                W.length = 0;
              } while (H.length);
              for (; U.length; ) U.pop()();
              (G = !1), (K = !1), Q.clear();
            }
          }
          function tt(t) {
            if (null !== t.fragment) {
              t.update(), k(t.before_update);
              var e = t.dirty;
              (t.dirty = [-1]),
                t.fragment && t.fragment.p(t.ctx, e),
                t.after_update.forEach(X);
            }
          }
          var et,
            nt = new Set();
          function it() {
            et = { r: 0, c: [], p: et };
          }
          function rt() {
            et.r || k(et.c), (et = et.p);
          }
          function ot(t, e) {
            t && t.i && (nt.delete(t), t.i(e));
          }
          function st(t, e, n, i) {
            if (t && t.o) {
              if (nt.has(t)) return;
              nt.add(t),
                et.c.push(function () {
                  nt.delete(t), i && (n && t.d(1), i());
                }),
                t.o(e);
            }
          }
          var at =
            'undefined' != typeof window
              ? window
              : 'undefined' != typeof globalThis
              ? globalThis
              : t;
          function ct(t, e) {
            st(t, 1, 1, function () {
              e.delete(t.key);
            });
          }
          function lt(t, e, n, i, r, o, s, a, c, l, h, u) {
            for (var f = t.length, d = o.length, p = f, g = {}; p--; )
              g[t[p].key] = p;
            var m = [],
              v = new Map(),
              y = new Map();
            for (p = d; p--; ) {
              var x = u(r, o, p),
                b = n(x),
                _ = s.get(b);
              _ ? i && _.p(x, e) : (_ = l(b, x)).c(),
                v.set(b, (m[p] = _)),
                b in g && y.set(b, Math.abs(p - g[b]));
            }
            var w = new Set(),
              k = new Set();
            function M(t) {
              ot(t, 1), t.m(a, h), s.set(t.key, t), (h = t.first), d--;
            }
            for (; f && d; ) {
              var P = m[d - 1],
                O = t[f - 1],
                E = P.key,
                S = O.key;
              P === O
                ? ((h = P.first), f--, d--)
                : v.has(S)
                ? !s.has(E) || w.has(E)
                  ? M(P)
                  : k.has(S)
                  ? f--
                  : y.get(E) > y.get(S)
                  ? (k.add(E), M(P))
                  : (w.add(S), f--)
                : (c(O, s), f--);
            }
            for (; f--; ) {
              var T = t[f];
              v.has(T.key) || c(T, s);
            }
            for (; d; ) M(m[d - 1]);
            return m;
          }
          function ht(t, e) {
            for (var n = {}, i = {}, r = { $$scope: 1 }, o = t.length; o--; ) {
              var s = t[o],
                a = e[o];
              if (a) {
                for (var c in s) c in a || (i[c] = 1);
                for (var l in a) r[l] || ((n[l] = a[l]), (r[l] = 1));
                t[o] = a;
              } else for (var h in s) r[h] = 1;
            }
            for (var u in i) u in n || (n[u] = void 0);
            return n;
          }
          function ut(t) {
            return 'object' === n(t) && null !== t ? t : {};
          }
          function ft(t) {
            t && t.c();
          }
          function dt(t, e, n) {
            var i = t.$$,
              r = i.fragment,
              o = i.on_mount,
              s = i.on_destroy,
              a = i.after_update;
            r && r.m(e, n),
              X(function () {
                var e = o.map(_).filter(M);
                s ? s.push.apply(s, m(e)) : k(e), (t.$$.on_mount = []);
              }),
              a.forEach(X);
          }
          function pt(t, e) {
            var n = t.$$;
            null !== n.fragment &&
              (k(n.on_destroy),
              n.fragment && n.fragment.d(e),
              (n.on_destroy = n.fragment = null),
              (n.ctx = []));
          }
          function gt(t, e) {
            -1 === t.$$.dirty[0] && (H.push(t), q(), t.$$.dirty.fill(0)),
              (t.$$.dirty[(e / 31) | 0] |= 1 << e % 31);
          }
          var mt = (function () {
              function t() {
                i(this, t);
              }
              return (
                o(t, [
                  {
                    key: '$destroy',
                    value: function () {
                      pt(this, 1), (this.$destroy = x);
                    },
                  },
                  {
                    key: '$on',
                    value: function (t, e) {
                      var n =
                        this.$$.callbacks[t] || (this.$$.callbacks[t] = []);
                      return (
                        n.push(e),
                        function () {
                          var t = n.indexOf(e);
                          -1 !== t && n.splice(t, 1);
                        }
                      );
                    },
                  },
                  {
                    key: '$set',
                    value: function (t) {
                      var e;
                      this.$$set &&
                        ((e = t), 0 !== Object.keys(e).length) &&
                        ((this.$$.skip_bound = !0),
                        this.$$set(t),
                        (this.$$.skip_bound = !1));
                    },
                  },
                ]),
                t
              );
            })(),
            vt = (function () {
              function t(e) {
                if (
                  (i(this, t),
                  Object.assign(
                    this,
                    {
                      dir1: null,
                      dir2: null,
                      firstpos1: null,
                      firstpos2: null,
                      spacing1: 25,
                      spacing2: 25,
                      push: 'bottom',
                      maxOpen: 1,
                      maxStrategy: 'wait',
                      maxClosureCausesWait: !0,
                      modal: 'ish',
                      modalishFlash: !0,
                      overlayClose: !0,
                      overlayClosesPinned: !1,
                      positioned: !0,
                      context: (window && document.body) || null,
                    },
                    e,
                  ),
                  'ish' === this.modal && 1 !== this.maxOpen)
                )
                  throw new Error(
                    'A modalish stack must have a maxOpen value of 1.',
                  );
                if ('ish' === this.modal && !this.dir1)
                  throw new Error('A modalish stack must have a direction.');
                if (
                  'top' === this.push &&
                  'ish' === this.modal &&
                  'close' !== this.maxStrategy
                )
                  throw new Error(
                    'A modalish stack that pushes to the top must use the close maxStrategy.',
                  );
                (this._noticeHead = { notice: null, prev: null, next: null }),
                  (this._noticeTail = {
                    notice: null,
                    prev: this._noticeHead,
                    next: null,
                  }),
                  (this._noticeHead.next = this._noticeTail),
                  (this._noticeMap = new WeakMap()),
                  (this._length = 0),
                  (this._addpos2 = 0),
                  (this._animation = !0),
                  (this._posTimer = null),
                  (this._openNotices = 0),
                  (this._listener = null),
                  (this._overlayOpen = !1),
                  (this._overlayInserted = !1),
                  (this._collapsingModalState = !1),
                  (this._leader = null),
                  (this._leaderOff = null),
                  (this._masking = null),
                  (this._maskingOff = null),
                  (this._swapping = !1),
                  (this._callbacks = {});
              }
              return (
                o(t, [
                  {
                    key: 'forEach',
                    value: function (t) {
                      var e,
                        n =
                          arguments.length > 1 && void 0 !== arguments[1]
                            ? arguments[1]
                            : {},
                        i = n.start,
                        r = void 0 === i ? 'oldest' : i,
                        o = n.dir,
                        s = void 0 === o ? 'newer' : o,
                        a = n.skipModuleHandled,
                        c = void 0 !== a && a;
                      if (
                        'head' === r ||
                        ('newest' === r && 'top' === this.push) ||
                        ('oldest' === r && 'bottom' === this.push)
                      )
                        e = this._noticeHead.next;
                      else if (
                        'tail' === r ||
                        ('newest' === r && 'bottom' === this.push) ||
                        ('oldest' === r && 'top' === this.push)
                      )
                        e = this._noticeTail.prev;
                      else {
                        if (!this._noticeMap.has(r))
                          throw new Error('Invalid start param.');
                        e = this._noticeMap.get(r);
                      }
                      for (; e.notice; ) {
                        var l = e.notice;
                        if (
                          'prev' === s ||
                          ('top' === this.push && 'newer' === s) ||
                          ('bottom' === this.push && 'older' === s)
                        )
                          e = e.prev;
                        else {
                          if (
                            !(
                              'next' === s ||
                              ('top' === this.push && 'older' === s) ||
                              ('bottom' === this.push && 'newer' === s)
                            )
                          )
                            throw new Error('Invalid dir param.');
                          e = e.next;
                        }
                        if (!((c && l.getModuleHandled()) || !1 !== t(l)))
                          break;
                      }
                    },
                  },
                  {
                    key: 'close',
                    value: function (t) {
                      this.forEach(function (e) {
                        return e.close(t, !1, !1);
                      });
                    },
                  },
                  {
                    key: 'open',
                    value: function (t) {
                      this.forEach(function (e) {
                        return e.open(t);
                      });
                    },
                  },
                  {
                    key: 'openLast',
                    value: function () {
                      this.forEach(
                        function (t) {
                          if (
                            -1 ===
                            ['opening', 'open', 'waiting'].indexOf(t.getState())
                          )
                            return t.open(), !1;
                        },
                        { start: 'newest', dir: 'older' },
                      );
                    },
                  },
                  {
                    key: 'swap',
                    value: function (t, e) {
                      var n = this,
                        i =
                          arguments.length > 2 &&
                          void 0 !== arguments[2] &&
                          arguments[2],
                        r =
                          arguments.length > 3 &&
                          void 0 !== arguments[3] &&
                          arguments[3];
                      return -1 ===
                        ['open', 'opening', 'closing'].indexOf(t.getState())
                        ? Promise.reject()
                        : ((this._swapping = e),
                          t
                            .close(i, !1, r)
                            .then(function () {
                              return e.open(i);
                            })
                            .finally(function () {
                              n._swapping = !1;
                            }));
                    },
                  },
                  {
                    key: 'on',
                    value: function (t, e) {
                      var n = this;
                      return (
                        t in this._callbacks || (this._callbacks[t] = []),
                        this._callbacks[t].push(e),
                        function () {
                          n._callbacks[t].splice(n._callbacks[t].indexOf(e), 1);
                        }
                      );
                    },
                  },
                  {
                    key: 'fire',
                    value: function (t) {
                      var e =
                        arguments.length > 1 && void 0 !== arguments[1]
                          ? arguments[1]
                          : {};
                      (e.stack = this),
                        t in this._callbacks &&
                          this._callbacks[t].forEach(function (t) {
                            return t(e);
                          });
                    },
                  },
                  {
                    key: 'position',
                    value: function () {
                      var t = this;
                      this.positioned && this._length > 0
                        ? (this.fire('beforePosition'),
                          this._resetPositionData(),
                          this.forEach(
                            function (e) {
                              t._positionNotice(e);
                            },
                            {
                              start: 'head',
                              dir: 'next',
                              skipModuleHandled: !0,
                            },
                          ),
                          this.fire('afterPosition'))
                        : (delete this._nextpos1, delete this._nextpos2);
                    },
                  },
                  {
                    key: 'queuePosition',
                    value: function () {
                      var t = this,
                        e =
                          arguments.length > 0 && void 0 !== arguments[0]
                            ? arguments[0]
                            : 10;
                      this._posTimer && clearTimeout(this._posTimer),
                        (this._posTimer = setTimeout(function () {
                          return t.position();
                        }, e));
                    },
                  },
                  {
                    key: '_resetPositionData',
                    value: function () {
                      (this._nextpos1 = this.firstpos1),
                        (this._nextpos2 = this.firstpos2),
                        (this._addpos2 = 0);
                    },
                  },
                  {
                    key: '_positionNotice',
                    value: function (t) {
                      var e =
                        arguments.length > 1 && void 0 !== arguments[1]
                          ? arguments[1]
                          : t === this._masking;
                      if (this.positioned) {
                        var n = t.refs.elem;
                        if (
                          n &&
                          (n.classList.contains('pnotify-in') ||
                            n.classList.contains('pnotify-initial') ||
                            e)
                        ) {
                          var i = [
                              this.firstpos1,
                              this.firstpos2,
                              this._nextpos1,
                              this._nextpos2,
                              this._addpos2,
                            ],
                            r = i[0],
                            o = i[1],
                            s = i[2],
                            a = i[3],
                            c = i[4];
                          n.getBoundingClientRect(),
                            !this._animation || e || this._collapsingModalState
                              ? t._setMoveClass('')
                              : t._setMoveClass('pnotify-move');
                          var l,
                            h =
                              this.context === document.body
                                ? window.innerHeight
                                : this.context.scrollHeight,
                            u =
                              this.context === document.body
                                ? window.innerWidth
                                : this.context.scrollWidth;
                          if (this.dir1) {
                            var f;
                            switch (
                              ((l = {
                                down: 'top',
                                up: 'bottom',
                                left: 'right',
                                right: 'left',
                              }[this.dir1]),
                              this.dir1)
                            ) {
                              case 'down':
                                f = n.offsetTop;
                                break;
                              case 'up':
                                f = h - n.scrollHeight - n.offsetTop;
                                break;
                              case 'left':
                                f = u - n.scrollWidth - n.offsetLeft;
                                break;
                              case 'right':
                                f = n.offsetLeft;
                            }
                            null == r && (s = r = f);
                          }
                          if (this.dir1 && this.dir2) {
                            var d,
                              p = {
                                down: 'top',
                                up: 'bottom',
                                left: 'right',
                                right: 'left',
                              }[this.dir2];
                            switch (this.dir2) {
                              case 'down':
                                d = n.offsetTop;
                                break;
                              case 'up':
                                d = h - n.scrollHeight - n.offsetTop;
                                break;
                              case 'left':
                                d = u - n.scrollWidth - n.offsetLeft;
                                break;
                              case 'right':
                                d = n.offsetLeft;
                            }
                            if ((null == o && (a = o = d), !e)) {
                              var g = s + n.offsetHeight + this.spacing1,
                                m = s + n.offsetWidth + this.spacing1;
                              ((('down' === this.dir1 || 'up' === this.dir1) &&
                                g > h) ||
                                (('left' === this.dir1 ||
                                  'right' === this.dir1) &&
                                  m > u)) &&
                                ((s = r), (a += c + this.spacing2), (c = 0));
                            }
                            switch (
                              (null != a &&
                                ((n.style[p] = ''.concat(a, 'px')),
                                this._animation || n.style[p]),
                              this.dir2)
                            ) {
                              case 'down':
                              case 'up':
                                n.offsetHeight +
                                  (parseFloat(n.style.marginTop, 10) || 0) +
                                  (parseFloat(n.style.marginBottom, 10) || 0) >
                                  c && (c = n.offsetHeight);
                                break;
                              case 'left':
                              case 'right':
                                n.offsetWidth +
                                  (parseFloat(n.style.marginLeft, 10) || 0) +
                                  (parseFloat(n.style.marginRight, 10) || 0) >
                                  c && (c = n.offsetWidth);
                            }
                          } else if (this.dir1) {
                            var v, y;
                            switch (this.dir1) {
                              case 'down':
                              case 'up':
                                (y = ['left', 'right']),
                                  (v =
                                    this.context.scrollWidth / 2 -
                                    n.offsetWidth / 2);
                                break;
                              case 'left':
                              case 'right':
                                (y = ['top', 'bottom']),
                                  (v = h / 2 - n.offsetHeight / 2);
                            }
                            (n.style[y[0]] = ''.concat(v, 'px')),
                              (n.style[y[1]] = 'auto'),
                              this._animation || n.style[y[0]];
                          }
                          if (this.dir1)
                            switch (
                              (null != s &&
                                ((n.style[l] = ''.concat(s, 'px')),
                                this._animation || n.style[l]),
                              this.dir1)
                            ) {
                              case 'down':
                              case 'up':
                                s += n.offsetHeight + this.spacing1;
                                break;
                              case 'left':
                              case 'right':
                                s += n.offsetWidth + this.spacing1;
                            }
                          else {
                            var x = u / 2 - n.offsetWidth / 2,
                              b = h / 2 - n.offsetHeight / 2;
                            (n.style.left = ''.concat(x, 'px')),
                              (n.style.top = ''.concat(b, 'px')),
                              this._animation || n.style.left;
                          }
                          e ||
                            ((this.firstpos1 = r),
                            (this.firstpos2 = o),
                            (this._nextpos1 = s),
                            (this._nextpos2 = a),
                            (this._addpos2 = c));
                        }
                      }
                    },
                  },
                  {
                    key: '_addNotice',
                    value: function (t) {
                      var e = this;
                      this.fire('beforeAddNotice', { notice: t });
                      var n = function () {
                          if (
                            (e.fire('beforeOpenNotice', { notice: t }),
                            t.getModuleHandled())
                          )
                            e.fire('afterOpenNotice', { notice: t });
                          else {
                            if (
                              (e._openNotices++,
                              ('ish' !== e.modal || !e._overlayOpen) &&
                                e.maxOpen !== 1 / 0 &&
                                e._openNotices > e.maxOpen &&
                                'close' === e.maxStrategy)
                            ) {
                              var n = e._openNotices - e.maxOpen;
                              e.forEach(function (t) {
                                if (
                                  -1 !==
                                  ['opening', 'open'].indexOf(t.getState())
                                )
                                  return (
                                    t.close(!1, !1, e.maxClosureCausesWait),
                                    t === e._leader && e._setLeader(null),
                                    !!--n
                                  );
                              });
                            }
                            !0 === e.modal && e._insertOverlay(),
                              'ish' !== e.modal ||
                                (e._leader &&
                                  -1 !==
                                    ['opening', 'open', 'closing'].indexOf(
                                      e._leader.getState(),
                                    )) ||
                                e._setLeader(t),
                              'ish' === e.modal &&
                                e._overlayOpen &&
                                t._preventTimerClose(!0),
                              e.fire('afterOpenNotice', { notice: t });
                          }
                        },
                        i = {
                          notice: t,
                          prev: null,
                          next: null,
                          beforeOpenOff: t.on('pnotify:beforeOpen', n),
                          afterCloseOff: t.on(
                            'pnotify:afterClose',
                            function () {
                              if (
                                (e.fire('beforeCloseNotice', { notice: t }),
                                t.getModuleHandled())
                              )
                                e.fire('afterCloseNotice', { notice: t });
                              else {
                                if (
                                  (e._openNotices--,
                                  'ish' === e.modal &&
                                    t === e._leader &&
                                    (e._setLeader(null),
                                    e._masking && e._setMasking(null)),
                                  !e._swapping &&
                                    e.maxOpen !== 1 / 0 &&
                                    e._openNotices < e.maxOpen)
                                ) {
                                  var n = !1,
                                    i = function (i) {
                                      if (
                                        i !== t &&
                                        'waiting' === i.getState() &&
                                        (i.open().catch(function () {}),
                                        e._openNotices >= e.maxOpen)
                                      )
                                        return (n = !0), !1;
                                    };
                                  'wait' === e.maxStrategy
                                    ? (e.forEach(i, { start: t, dir: 'next' }),
                                      n ||
                                        e.forEach(i, { start: t, dir: 'prev' }))
                                    : 'close' === e.maxStrategy &&
                                      e.maxClosureCausesWait &&
                                      (e.forEach(i, { start: t, dir: 'older' }),
                                      n ||
                                        e.forEach(i, {
                                          start: t,
                                          dir: 'newer',
                                        }));
                                }
                                e._openNotices <= 0
                                  ? ((e._openNotices = 0),
                                    e._resetPositionData(),
                                    e._overlayOpen &&
                                      !e._swapping &&
                                      e._removeOverlay())
                                  : e._collapsingModalState ||
                                    e.queuePosition(0),
                                  e.fire('afterCloseNotice', { notice: t });
                              }
                            },
                          ),
                        };
                      if (
                        ('top' === this.push
                          ? ((i.next = this._noticeHead.next),
                            (i.prev = this._noticeHead),
                            (i.next.prev = i),
                            (i.prev.next = i))
                          : ((i.prev = this._noticeTail.prev),
                            (i.next = this._noticeTail),
                            (i.prev.next = i),
                            (i.next.prev = i)),
                        this._noticeMap.set(t, i),
                        this._length++,
                        this._listener ||
                          ((this._listener = function () {
                            return e.position();
                          }),
                          this.context.addEventListener(
                            'pnotify:position',
                            this._listener,
                          )),
                        -1 !==
                          ['open', 'opening', 'closing'].indexOf(t.getState()))
                      )
                        n();
                      else if (
                        'ish' === this.modal &&
                        this.modalishFlash &&
                        this._shouldNoticeWait(t)
                      )
                        var r = t.on('pnotify:mount', function () {
                          r(),
                            t._setMasking(!0, !1, function () {
                              t._setMasking(!1);
                            }),
                            e._resetPositionData(),
                            e._positionNotice(e._leader),
                            window.requestAnimationFrame(function () {
                              e._positionNotice(t, !0);
                            });
                        });
                      this.fire('afterAddNotice', { notice: t });
                    },
                  },
                  {
                    key: '_removeNotice',
                    value: function (t) {
                      if (this._noticeMap.has(t)) {
                        this.fire('beforeRemoveNotice', { notice: t });
                        var e = this._noticeMap.get(t);
                        this._leader === t && this._setLeader(null),
                          this._masking === t && this._setMasking(null),
                          (e.prev.next = e.next),
                          (e.next.prev = e.prev),
                          (e.prev = null),
                          (e.next = null),
                          e.beforeOpenOff(),
                          (e.beforeOpenOff = null),
                          e.afterCloseOff(),
                          (e.afterCloseOff = null),
                          this._noticeMap.delete(t),
                          this._length--,
                          !this._length &&
                            this._listener &&
                            (this.context.removeEventListener(
                              'pnotify:position',
                              this._listener,
                            ),
                            (this._listener = null)),
                          !this._length &&
                            this._overlayOpen &&
                            this._removeOverlay(),
                          -1 !==
                            ['open', 'opening', 'closing'].indexOf(
                              t.getState(),
                            ) && this._handleNoticeClosed(t),
                          this.fire('afterRemoveNotice', { notice: t });
                      }
                    },
                  },
                  {
                    key: '_setLeader',
                    value: function (t) {
                      var e = this;
                      if (
                        (this.fire('beforeSetLeader', { leader: t }),
                        this._leaderOff &&
                          (this._leaderOff(), (this._leaderOff = null)),
                        (this._leader = t),
                        this._leader)
                      ) {
                        var n,
                          i = function () {
                            var t = null;
                            e._overlayOpen &&
                              ((e._collapsingModalState = !0),
                              e.forEach(
                                function (n) {
                                  n._preventTimerClose(!1),
                                    n !== e._leader &&
                                      -1 !==
                                        ['opening', 'open'].indexOf(
                                          n.getState(),
                                        ) &&
                                      (t || (t = n), n.close(n === t, !1, !0));
                                },
                                {
                                  start: e._leader,
                                  dir: 'next',
                                  skipModuleHandled: !0,
                                },
                              ),
                              e._removeOverlay()),
                              r && (clearTimeout(r), (r = null)),
                              e.forEach(
                                function (n) {
                                  if (n !== e._leader)
                                    return 'waiting' === n.getState() || n === t
                                      ? (e._setMasking(n, !!t), !1)
                                      : void 0;
                                },
                                {
                                  start: e._leader,
                                  dir: 'next',
                                  skipModuleHandled: !0,
                                },
                              );
                          },
                          r = null,
                          o = function () {
                            r && (clearTimeout(r), (r = null)),
                              (r = setTimeout(function () {
                                (r = null), e._setMasking(null);
                              }, 750));
                          };
                        (this._leaderOff =
                          ((n = [
                            this._leader.on('mouseenter', i),
                            this._leader.on('focusin', i),
                            this._leader.on('mouseleave', o),
                            this._leader.on('focusout', o),
                          ]),
                          function () {
                            return n.map(function (t) {
                              return t();
                            });
                          })),
                          this.fire('afterSetLeader', { leader: t });
                      } else this.fire('afterSetLeader', { leader: t });
                    },
                  },
                  {
                    key: '_setMasking',
                    value: function (t, e) {
                      var n = this;
                      if (this._masking) {
                        if (this._masking === t) return;
                        this._masking._setMasking(!1, e);
                      }
                      if (
                        (this._maskingOff &&
                          (this._maskingOff(), (this._maskingOff = null)),
                        (this._masking = t),
                        this._masking)
                      ) {
                        this._resetPositionData(),
                          this._leader && this._positionNotice(this._leader),
                          this._masking._setMasking(!0, e),
                          window.requestAnimationFrame(function () {
                            n._masking && n._positionNotice(n._masking);
                          });
                        var i,
                          r = function () {
                            'ish' === n.modal &&
                              (n._insertOverlay(),
                              n._setMasking(null, !0),
                              n.forEach(
                                function (t) {
                                  t._preventTimerClose(!0),
                                    'waiting' === t.getState() && t.open();
                                },
                                {
                                  start: n._leader,
                                  dir: 'next',
                                  skipModuleHandled: !0,
                                },
                              ));
                          };
                        this._maskingOff =
                          ((i = [
                            this._masking.on('mouseenter', r),
                            this._masking.on('focusin', r),
                          ]),
                          function () {
                            return i.map(function (t) {
                              return t();
                            });
                          });
                      }
                    },
                  },
                  {
                    key: '_shouldNoticeWait',
                    value: function (t) {
                      return (
                        this._swapping !== t &&
                        !('ish' === this.modal && this._overlayOpen) &&
                        this.maxOpen !== 1 / 0 &&
                        this._openNotices >= this.maxOpen &&
                        'wait' === this.maxStrategy
                      );
                    },
                  },
                  {
                    key: '_insertOverlay',
                    value: function () {
                      var t = this;
                      this._overlay ||
                        ((this._overlay = document.createElement('div')),
                        this._overlay.classList.add('pnotify-modal-overlay'),
                        this.dir1 &&
                          this._overlay.classList.add(
                            'pnotify-modal-overlay-'.concat(this.dir1),
                          ),
                        this.overlayClose &&
                          this._overlay.classList.add(
                            'pnotify-modal-overlay-closes',
                          ),
                        this.context !== document.body &&
                          ((this._overlay.style.height = ''.concat(
                            this.context.scrollHeight,
                            'px',
                          )),
                          (this._overlay.style.width = ''.concat(
                            this.context.scrollWidth,
                            'px',
                          ))),
                        this._overlay.addEventListener('click', function (e) {
                          if (t.overlayClose) {
                            if (
                              (t.fire('overlayClose', { clickEvent: e }),
                              e.defaultPrevented)
                            )
                              return;
                            t._leader && t._setLeader(null),
                              t.forEach(
                                function (e) {
                                  -1 ===
                                    ['closed', 'closing', 'waiting'].indexOf(
                                      e.getState(),
                                    ) &&
                                    (e.hide || t.overlayClosesPinned
                                      ? e.close()
                                      : e.hide ||
                                        'ish' !== t.modal ||
                                        (t._leader
                                          ? e.close(!1, !1, !0)
                                          : t._setLeader(e)));
                                },
                                { skipModuleHandled: !0 },
                              ),
                              t._overlayOpen && t._removeOverlay();
                          }
                        })),
                        this._overlay.parentNode !== this.context &&
                          (this.fire('beforeAddOverlay'),
                          this._overlay.classList.remove(
                            'pnotify-modal-overlay-in',
                          ),
                          (this._overlay = this.context.insertBefore(
                            this._overlay,
                            this.context.firstChild,
                          )),
                          (this._overlayOpen = !0),
                          (this._overlayInserted = !0),
                          window.requestAnimationFrame(function () {
                            t._overlay.classList.add(
                              'pnotify-modal-overlay-in',
                            ),
                              t.fire('afterAddOverlay');
                          })),
                        (this._collapsingModalState = !1);
                    },
                  },
                  {
                    key: '_removeOverlay',
                    value: function () {
                      var t = this;
                      this._overlay.parentNode &&
                        (this.fire('beforeRemoveOverlay'),
                        this._overlay.classList.remove(
                          'pnotify-modal-overlay-in',
                        ),
                        (this._overlayOpen = !1),
                        setTimeout(function () {
                          (t._overlayInserted = !1),
                            t._overlay.parentNode &&
                              (t._overlay.parentNode.removeChild(t._overlay),
                              t.fire('afterRemoveOverlay'));
                        }, 250),
                        setTimeout(function () {
                          t._collapsingModalState = !1;
                        }, 400));
                    },
                  },
                  {
                    key: 'notices',
                    get: function () {
                      var t = [];
                      return (
                        this.forEach(function (e) {
                          return t.push(e);
                        }),
                        t
                      );
                    },
                  },
                  {
                    key: 'length',
                    get: function () {
                      return this._length;
                    },
                  },
                  {
                    key: 'leader',
                    get: function () {
                      return this._leader;
                    },
                  },
                ]),
                t
              );
            })(),
            yt = function () {
              for (
                var t = arguments.length, e = new Array(t), n = 0;
                n < t;
                n++
              )
                e[n] = arguments[n];
              return f(Gt, e);
            },
            xt = at.Map;
          function bt(t, e, n) {
            var i = t.slice();
            return (i[109] = e[n][0]), (i[110] = e[n][1]), i;
          }
          function _t(t, e, n) {
            var i = t.slice();
            return (i[109] = e[n][0]), (i[110] = e[n][1]), i;
          }
          function wt(t, e, n) {
            var i = t.slice();
            return (i[109] = e[n][0]), (i[110] = e[n][1]), i;
          }
          function kt(t, e, n) {
            var i = t.slice();
            return (i[109] = e[n][0]), (i[110] = e[n][1]), i;
          }
          function Mt(t, e) {
            var n,
              i,
              r,
              o,
              s = [{ self: e[42] }, e[110]],
              a = e[109].default;
            function c(t) {
              for (var e = {}, n = 0; n < s.length; n += 1) e = b(e, s[n]);
              return { props: e };
            }
            return (
              a && (i = new a(c())),
              {
                key: t,
                first: null,
                c: function () {
                  (n = R()),
                    i && ft(i.$$.fragment),
                    (r = R()),
                    (this.first = n);
                },
                m: function (t, e) {
                  E(t, n, e), i && dt(i, t, e), E(t, r, e), (o = !0);
                },
                p: function (t, e) {
                  var n =
                    2176 & e[1]
                      ? ht(s, [
                          2048 & e[1] && { self: t[42] },
                          128 & e[1] && ut(t[110]),
                        ])
                      : {};
                  if (a !== (a = t[109].default)) {
                    if (i) {
                      it();
                      var o = i;
                      st(o.$$.fragment, 1, 0, function () {
                        pt(o, 1);
                      }),
                        rt();
                    }
                    a
                      ? (ft((i = new a(c())).$$.fragment),
                        ot(i.$$.fragment, 1),
                        dt(i, r.parentNode, r))
                      : (i = null);
                  } else a && i.$set(n);
                },
                i: function (t) {
                  o || (i && ot(i.$$.fragment, t), (o = !0));
                },
                o: function (t) {
                  i && st(i.$$.fragment, t), (o = !1);
                },
                d: function (t) {
                  t && S(n), t && S(r), i && pt(i, t);
                },
              }
            );
          }
          function Pt(t) {
            var e, n, i, r, o, s;
            return {
              c: function () {
                (e = T('div')),
                  L((n = T('span')), 'class', t[22]('closer')),
                  L(
                    e,
                    'class',
                    (i = 'pnotify-closer '
                      .concat(t[21]('closer'), ' ')
                      .concat(
                        (t[17] && !t[26]) || t[28] ? 'pnotify-hidden' : '',
                      )),
                  ),
                  L(e, 'role', 'button'),
                  L(e, 'tabindex', '0'),
                  L(e, 'title', (r = t[20].close));
              },
              m: function (i, r) {
                E(i, e, r),
                  O(e, n),
                  o || ((s = D(e, 'click', t[81])), (o = !0));
              },
              p: function (t, n) {
                335675392 & n[0] &&
                  i !==
                    (i = 'pnotify-closer '
                      .concat(t[21]('closer'), ' ')
                      .concat(
                        (t[17] && !t[26]) || t[28] ? 'pnotify-hidden' : '',
                      )) &&
                  L(e, 'class', i),
                  1048576 & n[0] && r !== (r = t[20].close) && L(e, 'title', r);
              },
              d: function (t) {
                t && S(e), (o = !1), s();
              },
            };
          }
          function Ot(t) {
            var e, n, i, r, o, s, a, c;
            return {
              c: function () {
                (e = T('div')),
                  L(
                    (n = T('span')),
                    'class',
                    (i = ''
                      .concat(t[22]('sticker'), ' ')
                      .concat(t[3] ? t[22]('unstuck') : t[22]('stuck'))),
                  ),
                  L(
                    e,
                    'class',
                    (r = 'pnotify-sticker '
                      .concat(t[21]('sticker'), ' ')
                      .concat(
                        (t[19] && !t[26]) || t[28] ? 'pnotify-hidden' : '',
                      )),
                  ),
                  L(e, 'role', 'button'),
                  L(e, 'aria-pressed', (o = !t[3])),
                  L(e, 'tabindex', '0'),
                  L(e, 'title', (s = t[3] ? t[20].stick : t[20].unstick));
              },
              m: function (i, r) {
                E(i, e, r),
                  O(e, n),
                  a || ((c = D(e, 'click', t[82])), (a = !0));
              },
              p: function (t, a) {
                8 & a[0] &&
                  i !==
                    (i = ''
                      .concat(t[22]('sticker'), ' ')
                      .concat(t[3] ? t[22]('unstuck') : t[22]('stuck'))) &&
                  L(n, 'class', i),
                  336068608 & a[0] &&
                    r !==
                      (r = 'pnotify-sticker '
                        .concat(t[21]('sticker'), ' ')
                        .concat(
                          (t[19] && !t[26]) || t[28] ? 'pnotify-hidden' : '',
                        )) &&
                    L(e, 'class', r),
                  8 & a[0] && o !== (o = !t[3]) && L(e, 'aria-pressed', o),
                  1048584 & a[0] &&
                    s !== (s = t[3] ? t[20].stick : t[20].unstick) &&
                    L(e, 'title', s);
              },
              d: function (t) {
                t && S(e), (a = !1), c();
              },
            };
          }
          function Et(t) {
            var e, n, i;
            return {
              c: function () {
                (e = T('div')),
                  L(
                    (n = T('span')),
                    'class',
                    (i = !0 === t[13] ? t[22](t[4]) : t[13]),
                  ),
                  L(e, 'class', 'pnotify-icon '.concat(t[21]('icon')));
              },
              m: function (i, r) {
                E(i, e, r), O(e, n), t[83](e);
              },
              p: function (t, e) {
                8208 & e[0] &&
                  i !== (i = !0 === t[13] ? t[22](t[4]) : t[13]) &&
                  L(n, 'class', i);
              },
              d: function (n) {
                n && S(e), t[83](null);
              },
            };
          }
          function St(t, e) {
            var n,
              i,
              r,
              o,
              s = [{ self: e[42] }, e[110]],
              a = e[109].default;
            function c(t) {
              for (var e = {}, n = 0; n < s.length; n += 1) e = b(e, s[n]);
              return { props: e };
            }
            return (
              a && (i = new a(c())),
              {
                key: t,
                first: null,
                c: function () {
                  (n = R()),
                    i && ft(i.$$.fragment),
                    (r = R()),
                    (this.first = n);
                },
                m: function (t, e) {
                  E(t, n, e), i && dt(i, t, e), E(t, r, e), (o = !0);
                },
                p: function (t, e) {
                  var n =
                    2304 & e[1]
                      ? ht(s, [
                          2048 & e[1] && { self: t[42] },
                          256 & e[1] && ut(t[110]),
                        ])
                      : {};
                  if (a !== (a = t[109].default)) {
                    if (i) {
                      it();
                      var o = i;
                      st(o.$$.fragment, 1, 0, function () {
                        pt(o, 1);
                      }),
                        rt();
                    }
                    a
                      ? (ft((i = new a(c())).$$.fragment),
                        ot(i.$$.fragment, 1),
                        dt(i, r.parentNode, r))
                      : (i = null);
                  } else a && i.$set(n);
                },
                i: function (t) {
                  o || (i && ot(i.$$.fragment, t), (o = !0));
                },
                o: function (t) {
                  i && st(i.$$.fragment, t), (o = !1);
                },
                d: function (t) {
                  t && S(n), t && S(r), i && pt(i, t);
                },
              }
            );
          }
          function Tt(t) {
            var e,
              n = !t[34] && At(t);
            return {
              c: function () {
                (e = T('div')),
                  n && n.c(),
                  L(e, 'class', 'pnotify-title '.concat(t[21]('title')));
              },
              m: function (i, r) {
                E(i, e, r), n && n.m(e, null), t[84](e);
              },
              p: function (t, i) {
                t[34]
                  ? n && (n.d(1), (n = null))
                  : n
                  ? n.p(t, i)
                  : ((n = At(t)).c(), n.m(e, null));
              },
              d: function (i) {
                i && S(e), n && n.d(), t[84](null);
              },
            };
          }
          function At(t) {
            var e;
            function n(t, e) {
              return t[6] ? Rt : Ct;
            }
            var i = n(t),
              r = i(t);
            return {
              c: function () {
                r.c(), (e = R());
              },
              m: function (t, n) {
                r.m(t, n), E(t, e, n);
              },
              p: function (t, o) {
                i === (i = n(t)) && r
                  ? r.p(t, o)
                  : (r.d(1), (r = i(t)) && (r.c(), r.m(e.parentNode, e)));
              },
              d: function (t) {
                r.d(t), t && S(e);
              },
            };
          }
          function Ct(t) {
            var e, n;
            return {
              c: function () {
                (e = T('span')),
                  (n = A(t[5])),
                  L(e, 'class', 'pnotify-pre-line');
              },
              m: function (t, i) {
                E(t, e, i), O(e, n);
              },
              p: function (t, e) {
                32 & e[0] && j(n, t[5]);
              },
              d: function (t) {
                t && S(e);
              },
            };
          }
          function Rt(t) {
            var e, n;
            return {
              c: function () {
                (n = R()), (e = new N(n));
              },
              m: function (i, r) {
                e.m(t[5], i, r), E(i, n, r);
              },
              p: function (t, n) {
                32 & n[0] && e.p(t[5]);
              },
              d: function (t) {
                t && S(n), t && e.d();
              },
            };
          }
          function Dt(t) {
            var e,
              n,
              i = !t[35] && Lt(t);
            return {
              c: function () {
                (e = T('div')),
                  i && i.c(),
                  L(
                    e,
                    'class',
                    (n = 'pnotify-text '
                      .concat(t[21]('text'), ' ')
                      .concat(
                        '' === t[33] ? '' : 'pnotify-text-with-max-height',
                      )),
                  ),
                  L(e, 'style', t[33]),
                  L(e, 'role', 'alert');
              },
              m: function (n, r) {
                E(n, e, r), i && i.m(e, null), t[85](e);
              },
              p: function (t, r) {
                t[35]
                  ? i && (i.d(1), (i = null))
                  : i
                  ? i.p(t, r)
                  : ((i = Lt(t)).c(), i.m(e, null)),
                  4 & r[1] &&
                    n !==
                      (n = 'pnotify-text '
                        .concat(t[21]('text'), ' ')
                        .concat(
                          '' === t[33] ? '' : 'pnotify-text-with-max-height',
                        )) &&
                    L(e, 'class', n),
                  4 & r[1] && L(e, 'style', t[33]);
              },
              d: function (n) {
                n && S(e), i && i.d(), t[85](null);
              },
            };
          }
          function Lt(t) {
            var e;
            function n(t, e) {
              return t[8] ? jt : It;
            }
            var i = n(t),
              r = i(t);
            return {
              c: function () {
                r.c(), (e = R());
              },
              m: function (t, n) {
                r.m(t, n), E(t, e, n);
              },
              p: function (t, o) {
                i === (i = n(t)) && r
                  ? r.p(t, o)
                  : (r.d(1), (r = i(t)) && (r.c(), r.m(e.parentNode, e)));
              },
              d: function (t) {
                r.d(t), t && S(e);
              },
            };
          }
          function It(t) {
            var e, n;
            return {
              c: function () {
                (e = T('span')),
                  (n = A(t[7])),
                  L(e, 'class', 'pnotify-pre-line');
              },
              m: function (t, i) {
                E(t, e, i), O(e, n);
              },
              p: function (t, e) {
                128 & e[0] && j(n, t[7]);
              },
              d: function (t) {
                t && S(e);
              },
            };
          }
          function jt(t) {
            var e, n;
            return {
              c: function () {
                (n = R()), (e = new N(n));
              },
              m: function (i, r) {
                e.m(t[7], i, r), E(i, n, r);
              },
              p: function (t, n) {
                128 & n[0] && e.p(t[7]);
              },
              d: function (t) {
                t && S(n), t && e.d();
              },
            };
          }
          function $t(t, e) {
            var n,
              i,
              r,
              o,
              s = [{ self: e[42] }, e[110]],
              a = e[109].default;
            function c(t) {
              for (var e = {}, n = 0; n < s.length; n += 1) e = b(e, s[n]);
              return { props: e };
            }
            return (
              a && (i = new a(c())),
              {
                key: t,
                first: null,
                c: function () {
                  (n = R()),
                    i && ft(i.$$.fragment),
                    (r = R()),
                    (this.first = n);
                },
                m: function (t, e) {
                  E(t, n, e), i && dt(i, t, e), E(t, r, e), (o = !0);
                },
                p: function (t, e) {
                  var n =
                    2560 & e[1]
                      ? ht(s, [
                          2048 & e[1] && { self: t[42] },
                          512 & e[1] && ut(t[110]),
                        ])
                      : {};
                  if (a !== (a = t[109].default)) {
                    if (i) {
                      it();
                      var o = i;
                      st(o.$$.fragment, 1, 0, function () {
                        pt(o, 1);
                      }),
                        rt();
                    }
                    a
                      ? (ft((i = new a(c())).$$.fragment),
                        ot(i.$$.fragment, 1),
                        dt(i, r.parentNode, r))
                      : (i = null);
                  } else a && i.$set(n);
                },
                i: function (t) {
                  o || (i && ot(i.$$.fragment, t), (o = !0));
                },
                o: function (t) {
                  i && st(i.$$.fragment, t), (o = !1);
                },
                d: function (t) {
                  t && S(n), t && S(r), i && pt(i, t);
                },
              }
            );
          }
          function Nt(t, e) {
            var n,
              i,
              r,
              o,
              s = [{ self: e[42] }, e[110]],
              a = e[109].default;
            function c(t) {
              for (var e = {}, n = 0; n < s.length; n += 1) e = b(e, s[n]);
              return { props: e };
            }
            return (
              a && (i = new a(c())),
              {
                key: t,
                first: null,
                c: function () {
                  (n = R()),
                    i && ft(i.$$.fragment),
                    (r = R()),
                    (this.first = n);
                },
                m: function (t, e) {
                  E(t, n, e), i && dt(i, t, e), E(t, r, e), (o = !0);
                },
                p: function (t, e) {
                  var n =
                    3072 & e[1]
                      ? ht(s, [
                          2048 & e[1] && { self: t[42] },
                          1024 & e[1] && ut(t[110]),
                        ])
                      : {};
                  if (a !== (a = t[109].default)) {
                    if (i) {
                      it();
                      var o = i;
                      st(o.$$.fragment, 1, 0, function () {
                        pt(o, 1);
                      }),
                        rt();
                    }
                    a
                      ? (ft((i = new a(c())).$$.fragment),
                        ot(i.$$.fragment, 1),
                        dt(i, r.parentNode, r))
                      : (i = null);
                  } else a && i.$set(n);
                },
                i: function (t) {
                  o || (i && ot(i.$$.fragment, t), (o = !0));
                },
                o: function (t) {
                  i && st(i.$$.fragment, t), (o = !1);
                },
                d: function (t) {
                  t && S(n), t && S(r), i && pt(i, t);
                },
              }
            );
          }
          function Ft(t) {
            for (
              var e,
                n,
                i,
                r,
                o,
                s,
                a,
                c,
                l,
                h,
                u,
                f,
                d,
                p,
                g,
                m,
                v,
                y = [],
                b = new xt(),
                _ = [],
                w = new xt(),
                P = [],
                A = new xt(),
                R = [],
                I = new xt(),
                j = t[38],
                $ = function (t) {
                  return t[109];
                },
                N = 0;
              N < j.length;
              N += 1
            ) {
              var F = kt(t, j, N),
                B = $(F);
              b.set(B, (y[N] = Mt(B, F)));
            }
            for (
              var z = t[16] && !t[36] && Pt(t),
                H = t[18] && !t[36] && Ot(t),
                V = !1 !== t[13] && Et(t),
                W = t[39],
                U = function (t) {
                  return t[109];
                },
                Y = 0;
              Y < W.length;
              Y += 1
            ) {
              var G = wt(t, W, Y),
                q = U(G);
              w.set(q, (_[Y] = St(q, G)));
            }
            for (
              var J = !1 !== t[5] && Tt(t),
                X = !1 !== t[7] && Dt(t),
                K = t[40],
                Q = function (t) {
                  return t[109];
                },
                Z = 0;
              Z < K.length;
              Z += 1
            ) {
              var tt = _t(t, K, Z),
                et = Q(tt);
              A.set(et, (P[Z] = $t(et, tt)));
            }
            for (
              var nt = t[41],
                at = function (t) {
                  return t[109];
                },
                ht = 0;
              ht < nt.length;
              ht += 1
            ) {
              var ut = bt(t, nt, ht),
                ft = at(ut);
              I.set(ft, (R[ht] = Nt(ft, ut)));
            }
            return {
              c: function () {
                (e = T('div')), (n = T('div'));
                for (var g = 0; g < y.length; g += 1) y[g].c();
                (i = C()),
                  z && z.c(),
                  (r = C()),
                  H && H.c(),
                  (o = C()),
                  V && V.c(),
                  (s = C()),
                  (a = T('div'));
                for (var m = 0; m < _.length; m += 1) _[m].c();
                (c = C()), J && J.c(), (l = C()), X && X.c(), (h = C());
                for (var v = 0; v < P.length; v += 1) P[v].c();
                u = C();
                for (var x = 0; x < R.length; x += 1) R[x].c();
                L(a, 'class', 'pnotify-content '.concat(t[21]('content'))),
                  L(
                    n,
                    'class',
                    (f = 'pnotify-container '
                      .concat(t[21]('container'), ' ')
                      .concat(t[21](t[4]), ' ')
                      .concat(t[15] ? 'pnotify-shadow' : '', ' ')
                      .concat(t[27].container.join(' '))),
                  ),
                  L(n, 'style', (d = ''.concat(t[31], ' ').concat(t[32]))),
                  L(n, 'role', 'alert'),
                  L(e, 'data-pnotify', ''),
                  L(
                    e,
                    'class',
                    (p = 'pnotify '
                      .concat(
                        !t[0] || t[0].positioned ? 'pnotify-positioned' : '',
                        ' ',
                      )
                      .concat(!1 !== t[13] ? 'pnotify-with-icon' : '', ' ')
                      .concat(t[21]('elem'), ' pnotify-mode-')
                      .concat(t[9], ' ')
                      .concat(t[10], ' ')
                      .concat(t[24], ' ')
                      .concat(t[25], ' ')
                      .concat(t[37], ' ')
                      .concat(
                        'fade' === t[2] ? 'pnotify-fade-'.concat(t[14]) : '',
                        ' ',
                      )
                      .concat(
                        t[30] ? 'pnotify-modal '.concat(t[11]) : t[12],
                        ' ',
                      )
                      .concat(t[28] ? 'pnotify-masking' : '', ' ')
                      .concat(t[29] ? 'pnotify-masking-in' : '', ' ')
                      .concat(t[27].elem.join(' '))),
                  ),
                  L(e, 'aria-live', 'assertive'),
                  L(e, 'role', 'alertdialog');
              },
              m: function (f, d) {
                E(f, e, d), O(e, n);
                for (var p = 0; p < y.length; p += 1) y[p].m(n, null);
                O(n, i),
                  z && z.m(n, null),
                  O(n, r),
                  H && H.m(n, null),
                  O(n, o),
                  V && V.m(n, null),
                  O(n, s),
                  O(n, a);
                for (var b = 0; b < _.length; b += 1) _[b].m(a, null);
                O(a, c), J && J.m(a, null), O(a, l), X && X.m(a, null), O(a, h);
                for (var w = 0; w < P.length; w += 1) P[w].m(a, null);
                t[86](a), O(n, u);
                for (var k = 0; k < R.length; k += 1) R[k].m(n, null);
                var S;
                t[87](n),
                  t[88](e),
                  (g = !0),
                  m ||
                    ((v = [
                      ((S = t[43].call(null, e)),
                      S && M(S.destroy) ? S.destroy : x),
                      D(e, 'mouseenter', t[44]),
                      D(e, 'mouseleave', t[45]),
                      D(e, 'focusin', t[44]),
                      D(e, 'focusout', t[45]),
                    ]),
                    (m = !0));
              },
              p: function (t, u) {
                if (2176 & u[1]) {
                  var m = t[38];
                  it(), (y = lt(y, u, $, 1, t, m, b, n, ct, Mt, i, kt)), rt();
                }
                if (
                  (t[16] && !t[36]
                    ? z
                      ? z.p(t, u)
                      : ((z = Pt(t)).c(), z.m(n, r))
                    : z && (z.d(1), (z = null)),
                  t[18] && !t[36]
                    ? H
                      ? H.p(t, u)
                      : ((H = Ot(t)).c(), H.m(n, o))
                    : H && (H.d(1), (H = null)),
                  !1 !== t[13]
                    ? V
                      ? V.p(t, u)
                      : ((V = Et(t)).c(), V.m(n, s))
                    : V && (V.d(1), (V = null)),
                  2304 & u[1])
                ) {
                  var v = t[39];
                  it(), (_ = lt(_, u, U, 1, t, v, w, a, ct, St, c, wt)), rt();
                }
                if (
                  (!1 !== t[5]
                    ? J
                      ? J.p(t, u)
                      : ((J = Tt(t)).c(), J.m(a, l))
                    : J && (J.d(1), (J = null)),
                  !1 !== t[7]
                    ? X
                      ? X.p(t, u)
                      : ((X = Dt(t)).c(), X.m(a, h))
                    : X && (X.d(1), (X = null)),
                  2560 & u[1])
                ) {
                  var x = t[40];
                  it(),
                    (P = lt(P, u, Q, 1, t, x, A, a, ct, $t, null, _t)),
                    rt();
                }
                if (3072 & u[1]) {
                  var k = t[41];
                  it(),
                    (R = lt(R, u, at, 1, t, k, I, n, ct, Nt, null, bt)),
                    rt();
                }
                (!g ||
                  (134250512 & u[0] &&
                    f !==
                      (f = 'pnotify-container '
                        .concat(t[21]('container'), ' ')
                        .concat(t[21](t[4]), ' ')
                        .concat(t[15] ? 'pnotify-shadow' : '', ' ')
                        .concat(t[27].container.join(' '))))) &&
                  L(n, 'class', f),
                  (!g ||
                    (3 & u[1] &&
                      d !== (d = ''.concat(t[31], ' ').concat(t[32])))) &&
                    L(n, 'style', d),
                  (!g ||
                    ((2063629829 & u[0]) | (64 & u[1]) &&
                      p !==
                        (p = 'pnotify '
                          .concat(
                            !t[0] || t[0].positioned
                              ? 'pnotify-positioned'
                              : '',
                            ' ',
                          )
                          .concat(!1 !== t[13] ? 'pnotify-with-icon' : '', ' ')
                          .concat(t[21]('elem'), ' pnotify-mode-')
                          .concat(t[9], ' ')
                          .concat(t[10], ' ')
                          .concat(t[24], ' ')
                          .concat(t[25], ' ')
                          .concat(t[37], ' ')
                          .concat(
                            'fade' === t[2]
                              ? 'pnotify-fade-'.concat(t[14])
                              : '',
                            ' ',
                          )
                          .concat(
                            t[30] ? 'pnotify-modal '.concat(t[11]) : t[12],
                            ' ',
                          )
                          .concat(t[28] ? 'pnotify-masking' : '', ' ')
                          .concat(t[29] ? 'pnotify-masking-in' : '', ' ')
                          .concat(t[27].elem.join(' '))))) &&
                    L(e, 'class', p);
              },
              i: function (t) {
                if (!g) {
                  for (var e = 0; e < j.length; e += 1) ot(y[e]);
                  for (var n = 0; n < W.length; n += 1) ot(_[n]);
                  for (var i = 0; i < K.length; i += 1) ot(P[i]);
                  for (var r = 0; r < nt.length; r += 1) ot(R[r]);
                  g = !0;
                }
              },
              o: function (t) {
                for (var e = 0; e < y.length; e += 1) st(y[e]);
                for (var n = 0; n < _.length; n += 1) st(_[n]);
                for (var i = 0; i < P.length; i += 1) st(P[i]);
                for (var r = 0; r < R.length; r += 1) st(R[r]);
                g = !1;
              },
              d: function (n) {
                n && S(e);
                for (var i = 0; i < y.length; i += 1) y[i].d();
                z && z.d(), H && H.d(), V && V.d();
                for (var r = 0; r < _.length; r += 1) _[r].d();
                J && J.d(), X && X.d();
                for (var o = 0; o < P.length; o += 1) P[o].d();
                t[86](null);
                for (var s = 0; s < R.length; s += 1) R[s].d();
                t[87](null), t[88](null), (m = !1), k(v);
              },
            };
          }
          function Bt(t, e) {
            'object' !== n(t) && (t = { text: t }), e && (t.type = e);
            var i = document.body;
            return (
              'stack' in t &&
                t.stack &&
                t.stack.context &&
                (i = t.stack.context),
              { target: i, props: t }
            );
          }
          var zt,
            Ht = new vt({
              dir1: 'down',
              dir2: 'left',
              firstpos1: 25,
              firstpos2: 25,
              spacing1: 36,
              spacing2: 36,
              push: 'bottom',
            }),
            Vt = new Map(),
            Wt = {
              type: 'notice',
              title: !1,
              titleTrusted: !1,
              text: !1,
              textTrusted: !1,
              styling: 'brighttheme',
              icons: 'brighttheme',
              mode: 'no-preference',
              addClass: '',
              addModalClass: '',
              addModelessClass: '',
              autoOpen: !0,
              width: '360px',
              minHeight: '16px',
              maxTextHeight: '200px',
              icon: !0,
              animation: 'fade',
              animateSpeed: 'normal',
              shadow: !0,
              hide: !0,
              delay: 8e3,
              mouseReset: !0,
              closer: !0,
              closerHover: !0,
              sticker: !0,
              stickerHover: !0,
              labels: { close: 'Close', stick: 'Pin', unstick: 'Unpin' },
              remove: !0,
              destroy: !0,
              stack: Ht,
              modules: Vt,
            };
          function Ut() {
            Ht.context || (Ht.context = document.body),
              window.addEventListener('resize', function () {
                zt && clearTimeout(zt),
                  (zt = setTimeout(function () {
                    var t = new Event('pnotify:position');
                    document.body.dispatchEvent(t), (zt = null);
                  }, 10));
              });
          }
          function Yt(t, e, n) {
            var i = B(),
              r = (function () {
                var t = B();
                return function (e, n) {
                  var i = t.$$.callbacks[e];
                  if (i) {
                    var r = (function (t, e) {
                      var n = document.createEvent('CustomEvent');
                      return n.initCustomEvent(t, !1, !1, e), n;
                    })(e, n);
                    i.slice().forEach(function (e) {
                      e.call(t, r);
                    });
                  }
                };
              })(),
              o = (function (t) {
                var e =
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : [],
                  n = [
                    'focus',
                    'blur',
                    'fullscreenchange',
                    'fullscreenerror',
                    'scroll',
                    'cut',
                    'copy',
                    'paste',
                    'keydown',
                    'keypress',
                    'keyup',
                    'auxclick',
                    'click',
                    'contextmenu',
                    'dblclick',
                    'mousedown',
                    'mouseenter',
                    'mouseleave',
                    'mousemove',
                    'mouseover',
                    'mouseout',
                    'mouseup',
                    'pointerlockchange',
                    'pointerlockerror',
                    'select',
                    'wheel',
                    'drag',
                    'dragend',
                    'dragenter',
                    'dragstart',
                    'dragleave',
                    'dragover',
                    'drop',
                    'touchcancel',
                    'touchend',
                    'touchmove',
                    'touchstart',
                    'pointerover',
                    'pointerenter',
                    'pointerdown',
                    'pointermove',
                    'pointerup',
                    'pointercancel',
                    'pointerout',
                    'pointerleave',
                    'gotpointercapture',
                    'lostpointercapture',
                  ].concat(m(e));
                function i(e) {
                  z(t, e);
                }
                return function (t) {
                  for (var e = [], r = 0; r < n.length; r++)
                    e.push(D(t, n[r], i));
                  return {
                    destroy: function () {
                      for (var t = 0; t < e.length; t++) e[t]();
                    },
                  };
                };
              })(i, [
                'pnotify:init',
                'pnotify:mount',
                'pnotify:update',
                'pnotify:beforeOpen',
                'pnotify:afterOpen',
                'pnotify:enterModal',
                'pnotify:leaveModal',
                'pnotify:beforeClose',
                'pnotify:afterClose',
                'pnotify:beforeDestroy',
                'pnotify:afterDestroy',
                'focusin',
                'focusout',
                'animationend',
                'transitionend',
              ]),
              s = e.modules,
              a = void 0 === s ? new Map(Wt.modules) : s,
              l = e.stack,
              h = void 0 === l ? Wt.stack : l,
              u = {
                elem: null,
                container: null,
                content: null,
                iconContainer: null,
                titleContainer: null,
                textContainer: null,
              },
              f = c({}, Wt);
            qt('init', { notice: i, defaults: f });
            var d,
              p = e.type,
              v = void 0 === p ? f.type : p,
              y = e.title,
              x = void 0 === y ? f.title : y,
              b = e.titleTrusted,
              _ = void 0 === b ? f.titleTrusted : b,
              w = e.text,
              k = void 0 === w ? f.text : w,
              M = e.textTrusted,
              P = void 0 === M ? f.textTrusted : M,
              O = e.styling,
              E = void 0 === O ? f.styling : O,
              S = e.icons,
              T = void 0 === S ? f.icons : S,
              A = e.mode,
              C = void 0 === A ? f.mode : A,
              R = e.addClass,
              L = void 0 === R ? f.addClass : R,
              I = e.addModalClass,
              j = void 0 === I ? f.addModalClass : I,
              $ = e.addModelessClass,
              N = void 0 === $ ? f.addModelessClass : $,
              F = e.autoOpen,
              H = void 0 === F ? f.autoOpen : F,
              W = e.width,
              U = void 0 === W ? f.width : W,
              Y = e.minHeight,
              G = void 0 === Y ? f.minHeight : Y,
              q = e.maxTextHeight,
              X = void 0 === q ? f.maxTextHeight : q,
              K = e.icon,
              Q = void 0 === K ? f.icon : K,
              Z = e.animation,
              tt = void 0 === Z ? f.animation : Z,
              et = e.animateSpeed,
              nt = void 0 === et ? f.animateSpeed : et,
              it = e.shadow,
              rt = void 0 === it ? f.shadow : it,
              ot = e.hide,
              st = void 0 === ot ? f.hide : ot,
              at = e.delay,
              ct = void 0 === at ? f.delay : at,
              lt = e.mouseReset,
              ht = void 0 === lt ? f.mouseReset : lt,
              ut = e.closer,
              ft = void 0 === ut ? f.closer : ut,
              dt = e.closerHover,
              pt = void 0 === dt ? f.closerHover : dt,
              gt = e.sticker,
              mt = void 0 === gt ? f.sticker : gt,
              vt = e.stickerHover,
              yt = void 0 === vt ? f.stickerHover : vt,
              xt = e.labels,
              bt = void 0 === xt ? f.labels : xt,
              _t = e.remove,
              wt = void 0 === _t ? f.remove : _t,
              kt = e.destroy,
              Mt = void 0 === kt ? f.destroy : kt,
              Pt = 'closed',
              Ot = null,
              Et = null,
              St = null,
              Tt = !1,
              At = '',
              Ct = '',
              Rt = !1,
              Dt = !1,
              Lt = { elem: [], container: [] },
              It = !1,
              jt = !1,
              $t = !1,
              Nt = !1,
              Ft = null,
              Bt = st,
              zt = null,
              Ht = null,
              Vt =
                h &&
                (!0 === h.modal || ('ish' === h.modal && 'prevented' === Ot)),
              Ut = NaN,
              Yt = null,
              Gt = null;
            function qt(t) {
              var e =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : {},
                n = c({ notice: i }, e);
              'init' === t &&
                Array.from(a).forEach(function (t) {
                  var e = g(t, 2),
                    i = e[0];
                  return e[1], 'init' in i && i.init(n);
                });
              var o = u.elem || (h && h.context) || document.body;
              if (!o) return r('pnotify:'.concat(t), n), !0;
              var s = new Event('pnotify:'.concat(t), {
                bubbles: 'init' === t || 'mount' === t,
                cancelable: t.startsWith('before'),
              });
              return (s.detail = n), o.dispatchEvent(s), !s.defaultPrevented;
            }
            function Jt() {
              var t = (h && h.context) || document.body;
              if (!t) throw new Error('No context to insert this notice into.');
              if (!u.elem)
                throw new Error(
                  'Trying to insert notice before element is available.',
                );
              u.elem.parentNode !== t && t.appendChild(u.elem);
            }
            function Xt() {
              u.elem && u.elem.parentNode.removeChild(u.elem);
            }
            (d = function () {
              qt('mount'), H && le().catch(function () {});
            }),
              B().$$.on_mount.push(d),
              B().$$.before_update.push(function () {
                qt('update'),
                  'closed' !== Pt &&
                    'waiting' !== Pt &&
                    st !== Bt &&
                    (st ? Bt || ve() : me()),
                  'closed' !== Pt &&
                    'closing' !== Pt &&
                    h &&
                    !h._collapsingModalState &&
                    h.queuePosition(),
                  (Bt = st);
              });
            var Kt,
              Qt,
              Zt,
              te,
              ee,
              ne,
              ie,
              re,
              oe,
              se,
              ae,
              ce = e.open,
              le =
                void 0 === ce
                  ? function (t) {
                      if ('opening' === Pt) return zt;
                      if ('open' === Pt) return st && ve(), Promise.resolve();
                      if (!It && h && h._shouldNoticeWait(i))
                        return (Pt = 'waiting'), Promise.reject();
                      if (!qt('beforeOpen', { immediate: t }))
                        return Promise.reject();
                      var e, r;
                      (Pt = 'opening'),
                        n(28, ($t = !1)),
                        n(24, (At = 'pnotify-initial pnotify-hidden'));
                      var o = new Promise(function (t, n) {
                        (e = t), (r = n);
                      });
                      zt = o;
                      var s = function () {
                        st && ve(),
                          (Pt = 'open'),
                          qt('afterOpen', { immediate: t }),
                          (zt = null),
                          e();
                      };
                      return jt
                        ? (s(), Promise.resolve())
                        : (Jt(),
                          window.requestAnimationFrame(function () {
                            if ('opening' !== Pt) return r(), void (zt = null);
                            h &&
                              (n(0, (h._animation = !1), h),
                              'top' === h.push && h._resetPositionData(),
                              h._positionNotice(i),
                              h.queuePosition(0),
                              n(0, (h._animation = !0), h)),
                              de(s, t);
                          }),
                          o);
                    }
                  : ce,
              he = e.close,
              ue =
                void 0 === he
                  ? function (t, e, r) {
                      if ('closing' === Pt) return Ht;
                      if ('closed' === Pt) return Promise.resolve();
                      var o,
                        s = function () {
                          qt('beforeDestroy') &&
                            (h && h._removeNotice(i),
                            i.$destroy(),
                            qt('afterDestroy'));
                        };
                      if ('waiting' === Pt)
                        return (
                          r || ((Pt = 'closed'), Mt && !r && s()),
                          Promise.resolve()
                        );
                      if (
                        !qt('beforeClose', {
                          immediate: t,
                          timerHide: e,
                          waitAfterward: r,
                        })
                      )
                        return Promise.reject();
                      (Pt = 'closing'),
                        (Rt = !!e),
                        Ot &&
                          'prevented' !== Ot &&
                          clearTimeout &&
                          clearTimeout(Ot),
                        (Ot = null);
                      var a = new Promise(function (t, e) {
                        o = t;
                      });
                      return (
                        (Ht = a),
                        ge(function () {
                          n(26, (Dt = !1)),
                            (Rt = !1),
                            (Pt = r ? 'waiting' : 'closed'),
                            qt('afterClose', {
                              immediate: t,
                              timerHide: e,
                              waitAfterward: r,
                            }),
                            (Ht = null),
                            o(),
                            r || (Mt ? s() : wt && Xt());
                        }, t),
                        a
                      );
                    }
                  : he,
              fe = e.animateIn,
              de =
                void 0 === fe
                  ? function (t, e) {
                      Tt = 'in';
                      var i = function e(n) {
                        if (
                          !(
                            (n && u.elem && n.target !== u.elem) ||
                            (u.elem &&
                              u.elem.removeEventListener('transitionend', e),
                            Et && clearTimeout(Et),
                            'in' !== Tt)
                          )
                        ) {
                          var i = jt;
                          if (!i && u.elem) {
                            var r = u.elem.getBoundingClientRect();
                            for (var o in r)
                              if (r[o] > 0) {
                                i = !0;
                                break;
                              }
                          }
                          i
                            ? (t && t.call(), (Tt = !1))
                            : (Et = setTimeout(e, 40));
                        }
                      };
                      if ('fade' !== tt || e) {
                        var r = tt;
                        n(2, (tt = 'none')),
                          n(
                            24,
                            (At = 'pnotify-in '.concat(
                              'fade' === r ? 'pnotify-fade-in' : '',
                            )),
                          ),
                          J().then(function () {
                            n(2, (tt = r)), i();
                          });
                      } else
                        u.elem && u.elem.addEventListener('transitionend', i),
                          n(24, (At = 'pnotify-in')),
                          J().then(function () {
                            n(24, (At = 'pnotify-in pnotify-fade-in')),
                              (Et = setTimeout(i, 650));
                          });
                    }
                  : fe,
              pe = e.animateOut,
              ge =
                void 0 === pe
                  ? function (t, e) {
                      Tt = 'out';
                      var i = function e(i) {
                        if (
                          !(
                            (i && u.elem && i.target !== u.elem) ||
                            (u.elem &&
                              u.elem.removeEventListener('transitionend', e),
                            St && clearTimeout(St),
                            'out' !== Tt)
                          )
                        ) {
                          var r = jt;
                          if (!r && u.elem) {
                            var o = u.elem.getBoundingClientRect();
                            for (var s in o)
                              if (o[s] > 0) {
                                r = !0;
                                break;
                              }
                          }
                          u.elem &&
                          u.elem.style.opacity &&
                          '0' !== u.elem.style.opacity &&
                          r
                            ? (St = setTimeout(e, 40))
                            : (n(24, (At = '')), t && t.call(), (Tt = !1));
                        }
                      };
                      'fade' !== tt || e
                        ? (n(24, (At = '')),
                          J().then(function () {
                            i();
                          }))
                        : (u.elem &&
                            u.elem.addEventListener('transitionend', i),
                          n(24, (At = 'pnotify-in')),
                          (St = setTimeout(i, 650)));
                    }
                  : pe;
            function me() {
              Ot && 'prevented' !== Ot && (clearTimeout(Ot), (Ot = null)),
                St && clearTimeout(St),
                'closing' === Pt &&
                  ((Pt = 'open'),
                  (Tt = !1),
                  n(
                    24,
                    (At =
                      'fade' === tt
                        ? 'pnotify-in pnotify-fade-in'
                        : 'pnotify-in'),
                  ));
            }
            function ve() {
              'prevented' !== Ot &&
                (me(),
                ct !== 1 / 0 &&
                  (Ot = setTimeout(
                    function () {
                      return ue(!1, !0);
                    },
                    isNaN(ct) ? 0 : ct,
                  )));
            }
            return (
              (t.$$set = function (t) {
                'modules' in t && n(46, (a = t.modules)),
                  'stack' in t && n(0, (h = t.stack)),
                  'type' in t && n(4, (v = t.type)),
                  'title' in t && n(5, (x = t.title)),
                  'titleTrusted' in t && n(6, (_ = t.titleTrusted)),
                  'text' in t && n(7, (k = t.text)),
                  'textTrusted' in t && n(8, (P = t.textTrusted)),
                  'styling' in t && n(47, (E = t.styling)),
                  'icons' in t && n(48, (T = t.icons)),
                  'mode' in t && n(9, (C = t.mode)),
                  'addClass' in t && n(10, (L = t.addClass)),
                  'addModalClass' in t && n(11, (j = t.addModalClass)),
                  'addModelessClass' in t && n(12, (N = t.addModelessClass)),
                  'autoOpen' in t && n(49, (H = t.autoOpen)),
                  'width' in t && n(50, (U = t.width)),
                  'minHeight' in t && n(51, (G = t.minHeight)),
                  'maxTextHeight' in t && n(52, (X = t.maxTextHeight)),
                  'icon' in t && n(13, (Q = t.icon)),
                  'animation' in t && n(2, (tt = t.animation)),
                  'animateSpeed' in t && n(14, (nt = t.animateSpeed)),
                  'shadow' in t && n(15, (rt = t.shadow)),
                  'hide' in t && n(3, (st = t.hide)),
                  'delay' in t && n(53, (ct = t.delay)),
                  'mouseReset' in t && n(54, (ht = t.mouseReset)),
                  'closer' in t && n(16, (ft = t.closer)),
                  'closerHover' in t && n(17, (pt = t.closerHover)),
                  'sticker' in t && n(18, (mt = t.sticker)),
                  'stickerHover' in t && n(19, (yt = t.stickerHover)),
                  'labels' in t && n(20, (bt = t.labels)),
                  'remove' in t && n(55, (wt = t.remove)),
                  'destroy' in t && n(56, (Mt = t.destroy)),
                  'open' in t && n(59, (le = t.open)),
                  'close' in t && n(23, (ue = t.close)),
                  'animateIn' in t && n(60, (de = t.animateIn)),
                  'animateOut' in t && n(61, (ge = t.animateOut));
              }),
              (t.$$.update = function () {
                524288 & t.$$.dirty[1] &&
                  n(
                    31,
                    (Kt = 'string' == typeof U ? 'width: '.concat(U, ';') : ''),
                  ),
                  1048576 & t.$$.dirty[1] &&
                    n(
                      32,
                      (Qt =
                        'string' == typeof G
                          ? 'min-height: '.concat(G, ';')
                          : ''),
                    ),
                  2097152 & t.$$.dirty[1] &&
                    n(
                      33,
                      (Zt =
                        'string' == typeof X
                          ? 'max-height: '.concat(X, ';')
                          : ''),
                    ),
                  32 & t.$$.dirty[0] && n(34, (te = x instanceof HTMLElement)),
                  128 & t.$$.dirty[0] && n(35, (ee = k instanceof HTMLElement)),
                  (1 & t.$$.dirty[0]) | (1792 & t.$$.dirty[3]) &&
                    Ut !== h &&
                    (Ut && (Ut._removeNotice(i), n(30, (Vt = !1)), Yt(), Gt()),
                    h &&
                      (h._addNotice(i),
                      n(
                        102,
                        (Yt = h.on('beforeAddOverlay', function () {
                          n(30, (Vt = !0)), qt('enterModal');
                        })),
                      ),
                      n(
                        103,
                        (Gt = h.on('afterRemoveOverlay', function () {
                          n(30, (Vt = !1)), qt('leaveModal');
                        })),
                      )),
                    n(101, (Ut = h))),
                  1073748992 & t.$$.dirty[0] &&
                    n(
                      36,
                      (ne =
                        L.match(/\bnonblock\b/) ||
                        (j.match(/\bnonblock\b/) && Vt) ||
                        (N.match(/\bnonblock\b/) && !Vt)),
                    ),
                  1 & t.$$.dirty[0] &&
                    n(
                      37,
                      (ie = h && h.dir1 ? 'pnotify-stack-'.concat(h.dir1) : ''),
                    ),
                  32768 & t.$$.dirty[1] &&
                    n(
                      38,
                      (re = Array.from(a).filter(function (t) {
                        var e = g(t, 2),
                          n = e[0];
                        return e[1], 'PrependContainer' === n.position;
                      })),
                    ),
                  32768 & t.$$.dirty[1] &&
                    n(
                      39,
                      (oe = Array.from(a).filter(function (t) {
                        var e = g(t, 2),
                          n = e[0];
                        return e[1], 'PrependContent' === n.position;
                      })),
                    ),
                  32768 & t.$$.dirty[1] &&
                    n(
                      40,
                      (se = Array.from(a).filter(function (t) {
                        var e = g(t, 2),
                          n = e[0];
                        return e[1], 'AppendContent' === n.position;
                      })),
                    ),
                  32768 & t.$$.dirty[1] &&
                    n(
                      41,
                      (ae = Array.from(a).filter(function (t) {
                        var e = g(t, 2),
                          n = e[0];
                        return e[1], 'AppendContainer' === n.position;
                      })),
                    ),
                  (34 & t.$$.dirty[0]) | (8 & t.$$.dirty[1]) &&
                    te &&
                    u.titleContainer &&
                    u.titleContainer.appendChild(x),
                  (130 & t.$$.dirty[0]) | (16 & t.$$.dirty[1]) &&
                    ee &&
                    u.textContainer &&
                    u.textContainer.appendChild(k);
              }),
              [
                h,
                u,
                tt,
                st,
                v,
                x,
                _,
                k,
                P,
                C,
                L,
                j,
                N,
                Q,
                nt,
                rt,
                ft,
                pt,
                mt,
                yt,
                bt,
                function (t) {
                  return 'string' == typeof E
                    ? ''.concat(E, '-').concat(t)
                    : t in E
                    ? E[t]
                    : ''.concat(E.prefix, '-').concat(t);
                },
                function (t) {
                  return 'string' == typeof T
                    ? ''.concat(T, '-icon-').concat(t)
                    : t in T
                    ? T[t]
                    : ''.concat(T.prefix, '-icon-').concat(t);
                },
                ue,
                At,
                Ct,
                Dt,
                Lt,
                $t,
                Nt,
                Vt,
                Kt,
                Qt,
                Zt,
                te,
                ee,
                ne,
                ie,
                re,
                oe,
                se,
                ae,
                i,
                o,
                function (t) {
                  if ((n(26, (Dt = !0)), ht && 'closing' === Pt)) {
                    if (!Rt) return;
                    me();
                  }
                  st && ht && me();
                },
                function (t) {
                  n(26, (Dt = !1)),
                    st &&
                      ht &&
                      'out' !== Tt &&
                      -1 !== ['open', 'opening'].indexOf(Pt) &&
                      ve();
                },
                a,
                E,
                T,
                H,
                U,
                G,
                X,
                ct,
                ht,
                wt,
                Mt,
                function () {
                  return Pt;
                },
                function () {
                  return Ot;
                },
                le,
                de,
                ge,
                me,
                ve,
                function (t) {
                  t
                    ? (me(), (Ot = 'prevented'))
                    : 'prevented' === Ot &&
                      ((Ot = null), 'open' === Pt && st && ve());
                },
                function () {
                  return i.$on.apply(i, arguments);
                },
                function () {
                  return i.$set.apply(i, arguments);
                },
                function (t, e) {
                  r(t, e);
                },
                function (t) {
                  for (
                    var e = 0;
                    e < (arguments.length <= 1 ? 0 : arguments.length - 1);
                    e++
                  ) {
                    var i =
                      e + 1 < 1 || arguments.length <= e + 1
                        ? void 0
                        : arguments[e + 1];
                    -1 === Lt[t].indexOf(i) && Lt[t].push(i);
                  }
                  n(27, Lt);
                },
                function (t) {
                  for (
                    var e = 0;
                    e < (arguments.length <= 1 ? 0 : arguments.length - 1);
                    e++
                  ) {
                    var i =
                        e + 1 < 1 || arguments.length <= e + 1
                          ? void 0
                          : arguments[e + 1],
                      r = Lt[t].indexOf(i);
                    -1 !== r && Lt[t].splice(r, 1);
                  }
                  n(27, Lt);
                },
                function (t) {
                  for (
                    var e = 0;
                    e < (arguments.length <= 1 ? 0 : arguments.length - 1);
                    e++
                  ) {
                    var n =
                      e + 1 < 1 || arguments.length <= e + 1
                        ? void 0
                        : arguments[e + 1];
                    if (-1 === Lt[t].indexOf(n)) return !1;
                  }
                  return !0;
                },
                function () {
                  return It;
                },
                function (t) {
                  return (It = t);
                },
                function () {
                  return jt;
                },
                function (t) {
                  return (jt = t);
                },
                function (t) {
                  return (Tt = t);
                },
                function () {
                  return At;
                },
                function (t) {
                  return n(24, (At = t));
                },
                function () {
                  return Ct;
                },
                function (t) {
                  return n(25, (Ct = t));
                },
                function (t, e, i) {
                  if ((Ft && clearTimeout(Ft), $t !== t))
                    if (t)
                      n(28, ($t = !0)),
                        n(29, (Nt = !!e)),
                        Jt(),
                        J().then(function () {
                          window.requestAnimationFrame(function () {
                            if ($t)
                              if (e && i) i();
                              else {
                                n(29, (Nt = !0));
                                var t = function t() {
                                  u.elem &&
                                    u.elem.removeEventListener(
                                      'transitionend',
                                      t,
                                    ),
                                    Ft && clearTimeout(Ft),
                                    Nt && i && i();
                                };
                                u.elem &&
                                  u.elem.addEventListener('transitionend', t),
                                  (Ft = setTimeout(t, 650));
                              }
                          });
                        });
                    else if (e)
                      n(28, ($t = !1)),
                        n(29, (Nt = !1)),
                        wt &&
                          -1 === ['open', 'opening', 'closing'].indexOf(Pt) &&
                          Xt(),
                        i && i();
                    else {
                      var r = function t() {
                        u.elem &&
                          u.elem.removeEventListener('transitionend', t),
                          Ft && clearTimeout(Ft),
                          Nt ||
                            (n(28, ($t = !1)),
                            wt &&
                              -1 ===
                                ['open', 'opening', 'closing'].indexOf(Pt) &&
                              Xt(),
                            i && i());
                      };
                      n(29, (Nt = !1)),
                        u.elem && u.elem.addEventListener('transitionend', r),
                        u.elem && u.elem.style.opacity,
                        (Ft = setTimeout(r, 650));
                    }
                },
                function () {
                  return ue(!1);
                },
                function () {
                  return n(3, (st = !st));
                },
                function (t) {
                  V[t ? 'unshift' : 'push'](function () {
                    (u.iconContainer = t), n(1, u);
                  });
                },
                function (t) {
                  V[t ? 'unshift' : 'push'](function () {
                    (u.titleContainer = t), n(1, u);
                  });
                },
                function (t) {
                  V[t ? 'unshift' : 'push'](function () {
                    (u.textContainer = t), n(1, u);
                  });
                },
                function (t) {
                  V[t ? 'unshift' : 'push'](function () {
                    (u.content = t), n(1, u);
                  });
                },
                function (t) {
                  V[t ? 'unshift' : 'push'](function () {
                    (u.container = t), n(1, u);
                  });
                },
                function (t) {
                  V[t ? 'unshift' : 'push'](function () {
                    (u.elem = t), n(1, u);
                  });
                },
              ]
            );
          }
          window && document.body
            ? Ut()
            : document.addEventListener('DOMContentLoaded', Ut);
          var Gt = (function (t) {
            !(function (t, e) {
              if ('function' != typeof e && null !== e)
                throw new TypeError(
                  'Super expression must either be null or a function',
                );
              (t.prototype = Object.create(e && e.prototype, {
                constructor: { value: t, writable: !0, configurable: !0 },
              })),
                e && h(t, e);
            })(s, t);
            var e,
              n,
              r =
                ((e = s),
                (n = u()),
                function () {
                  var t,
                    i = l(e);
                  if (n) {
                    var r = l(this).constructor;
                    t = Reflect.construct(i, arguments, r);
                  } else t = i.apply(this, arguments);
                  return p(this, t);
                });
            function s(t) {
              var e;
              return (
                i(this, s),
                (function (t, e, n, i, r, o) {
                  var s =
                      arguments.length > 6 && void 0 !== arguments[6]
                        ? arguments[6]
                        : [-1],
                    a = $;
                  F(t);
                  var c = e.props || {},
                    l = (t.$$ = {
                      fragment: null,
                      ctx: null,
                      props: o,
                      update: x,
                      not_equal: r,
                      bound: w(),
                      on_mount: [],
                      on_destroy: [],
                      before_update: [],
                      after_update: [],
                      context: new Map(a ? a.$$.context : []),
                      callbacks: w(),
                      dirty: s,
                      skip_bound: !1,
                    }),
                    h = !1;
                  if (
                    ((l.ctx = n
                      ? n(t, c, function (e, n) {
                          var i =
                            !(arguments.length <= 2) && arguments.length - 2
                              ? arguments.length <= 2
                                ? void 0
                                : arguments[2]
                              : n;
                          return (
                            l.ctx &&
                              r(l.ctx[e], (l.ctx[e] = i)) &&
                              (!l.skip_bound && l.bound[e] && l.bound[e](i),
                              h && gt(t, e)),
                            n
                          );
                        })
                      : []),
                    l.update(),
                    (h = !0),
                    k(l.before_update),
                    (l.fragment = !!i && i(l.ctx)),
                    e.target)
                  ) {
                    if (e.hydrate) {
                      var u = I(e.target);
                      l.fragment && l.fragment.l(u), u.forEach(S);
                    } else l.fragment && l.fragment.c();
                    e.intro && ot(t.$$.fragment),
                      dt(t, e.target, e.anchor),
                      Z();
                  }
                  F(a);
                })(
                  d((e = r.call(this))),
                  t,
                  Yt,
                  Ft,
                  P,
                  {
                    modules: 46,
                    stack: 0,
                    refs: 1,
                    type: 4,
                    title: 5,
                    titleTrusted: 6,
                    text: 7,
                    textTrusted: 8,
                    styling: 47,
                    icons: 48,
                    mode: 9,
                    addClass: 10,
                    addModalClass: 11,
                    addModelessClass: 12,
                    autoOpen: 49,
                    width: 50,
                    minHeight: 51,
                    maxTextHeight: 52,
                    icon: 13,
                    animation: 2,
                    animateSpeed: 14,
                    shadow: 15,
                    hide: 3,
                    delay: 53,
                    mouseReset: 54,
                    closer: 16,
                    closerHover: 17,
                    sticker: 18,
                    stickerHover: 19,
                    labels: 20,
                    remove: 55,
                    destroy: 56,
                    getState: 57,
                    getTimer: 58,
                    getStyle: 21,
                    getIcon: 22,
                    open: 59,
                    close: 23,
                    animateIn: 60,
                    animateOut: 61,
                    cancelClose: 62,
                    queueClose: 63,
                    _preventTimerClose: 64,
                    on: 65,
                    update: 66,
                    fire: 67,
                    addModuleClass: 68,
                    removeModuleClass: 69,
                    hasModuleClass: 70,
                    getModuleHandled: 71,
                    setModuleHandled: 72,
                    getModuleOpen: 73,
                    setModuleOpen: 74,
                    setAnimating: 75,
                    getAnimatingClass: 76,
                    setAnimatingClass: 77,
                    _getMoveClass: 78,
                    _setMoveClass: 79,
                    _setMasking: 80,
                  },
                  [-1, -1, -1, -1],
                ),
                e
              );
            }
            return (
              o(s, [
                {
                  key: 'modules',
                  get: function () {
                    return this.$$.ctx[46];
                  },
                  set: function (t) {
                    this.$set({ modules: t }), Z();
                  },
                },
                {
                  key: 'stack',
                  get: function () {
                    return this.$$.ctx[0];
                  },
                  set: function (t) {
                    this.$set({ stack: t }), Z();
                  },
                },
                {
                  key: 'refs',
                  get: function () {
                    return this.$$.ctx[1];
                  },
                },
                {
                  key: 'type',
                  get: function () {
                    return this.$$.ctx[4];
                  },
                  set: function (t) {
                    this.$set({ type: t }), Z();
                  },
                },
                {
                  key: 'title',
                  get: function () {
                    return this.$$.ctx[5];
                  },
                  set: function (t) {
                    this.$set({ title: t }), Z();
                  },
                },
                {
                  key: 'titleTrusted',
                  get: function () {
                    return this.$$.ctx[6];
                  },
                  set: function (t) {
                    this.$set({ titleTrusted: t }), Z();
                  },
                },
                {
                  key: 'text',
                  get: function () {
                    return this.$$.ctx[7];
                  },
                  set: function (t) {
                    this.$set({ text: t }), Z();
                  },
                },
                {
                  key: 'textTrusted',
                  get: function () {
                    return this.$$.ctx[8];
                  },
                  set: function (t) {
                    this.$set({ textTrusted: t }), Z();
                  },
                },
                {
                  key: 'styling',
                  get: function () {
                    return this.$$.ctx[47];
                  },
                  set: function (t) {
                    this.$set({ styling: t }), Z();
                  },
                },
                {
                  key: 'icons',
                  get: function () {
                    return this.$$.ctx[48];
                  },
                  set: function (t) {
                    this.$set({ icons: t }), Z();
                  },
                },
                {
                  key: 'mode',
                  get: function () {
                    return this.$$.ctx[9];
                  },
                  set: function (t) {
                    this.$set({ mode: t }), Z();
                  },
                },
                {
                  key: 'addClass',
                  get: function () {
                    return this.$$.ctx[10];
                  },
                  set: function (t) {
                    this.$set({ addClass: t }), Z();
                  },
                },
                {
                  key: 'addModalClass',
                  get: function () {
                    return this.$$.ctx[11];
                  },
                  set: function (t) {
                    this.$set({ addModalClass: t }), Z();
                  },
                },
                {
                  key: 'addModelessClass',
                  get: function () {
                    return this.$$.ctx[12];
                  },
                  set: function (t) {
                    this.$set({ addModelessClass: t }), Z();
                  },
                },
                {
                  key: 'autoOpen',
                  get: function () {
                    return this.$$.ctx[49];
                  },
                  set: function (t) {
                    this.$set({ autoOpen: t }), Z();
                  },
                },
                {
                  key: 'width',
                  get: function () {
                    return this.$$.ctx[50];
                  },
                  set: function (t) {
                    this.$set({ width: t }), Z();
                  },
                },
                {
                  key: 'minHeight',
                  get: function () {
                    return this.$$.ctx[51];
                  },
                  set: function (t) {
                    this.$set({ minHeight: t }), Z();
                  },
                },
                {
                  key: 'maxTextHeight',
                  get: function () {
                    return this.$$.ctx[52];
                  },
                  set: function (t) {
                    this.$set({ maxTextHeight: t }), Z();
                  },
                },
                {
                  key: 'icon',
                  get: function () {
                    return this.$$.ctx[13];
                  },
                  set: function (t) {
                    this.$set({ icon: t }), Z();
                  },
                },
                {
                  key: 'animation',
                  get: function () {
                    return this.$$.ctx[2];
                  },
                  set: function (t) {
                    this.$set({ animation: t }), Z();
                  },
                },
                {
                  key: 'animateSpeed',
                  get: function () {
                    return this.$$.ctx[14];
                  },
                  set: function (t) {
                    this.$set({ animateSpeed: t }), Z();
                  },
                },
                {
                  key: 'shadow',
                  get: function () {
                    return this.$$.ctx[15];
                  },
                  set: function (t) {
                    this.$set({ shadow: t }), Z();
                  },
                },
                {
                  key: 'hide',
                  get: function () {
                    return this.$$.ctx[3];
                  },
                  set: function (t) {
                    this.$set({ hide: t }), Z();
                  },
                },
                {
                  key: 'delay',
                  get: function () {
                    return this.$$.ctx[53];
                  },
                  set: function (t) {
                    this.$set({ delay: t }), Z();
                  },
                },
                {
                  key: 'mouseReset',
                  get: function () {
                    return this.$$.ctx[54];
                  },
                  set: function (t) {
                    this.$set({ mouseReset: t }), Z();
                  },
                },
                {
                  key: 'closer',
                  get: function () {
                    return this.$$.ctx[16];
                  },
                  set: function (t) {
                    this.$set({ closer: t }), Z();
                  },
                },
                {
                  key: 'closerHover',
                  get: function () {
                    return this.$$.ctx[17];
                  },
                  set: function (t) {
                    this.$set({ closerHover: t }), Z();
                  },
                },
                {
                  key: 'sticker',
                  get: function () {
                    return this.$$.ctx[18];
                  },
                  set: function (t) {
                    this.$set({ sticker: t }), Z();
                  },
                },
                {
                  key: 'stickerHover',
                  get: function () {
                    return this.$$.ctx[19];
                  },
                  set: function (t) {
                    this.$set({ stickerHover: t }), Z();
                  },
                },
                {
                  key: 'labels',
                  get: function () {
                    return this.$$.ctx[20];
                  },
                  set: function (t) {
                    this.$set({ labels: t }), Z();
                  },
                },
                {
                  key: 'remove',
                  get: function () {
                    return this.$$.ctx[55];
                  },
                  set: function (t) {
                    this.$set({ remove: t }), Z();
                  },
                },
                {
                  key: 'destroy',
                  get: function () {
                    return this.$$.ctx[56];
                  },
                  set: function (t) {
                    this.$set({ destroy: t }), Z();
                  },
                },
                {
                  key: 'getState',
                  get: function () {
                    return this.$$.ctx[57];
                  },
                },
                {
                  key: 'getTimer',
                  get: function () {
                    return this.$$.ctx[58];
                  },
                },
                {
                  key: 'getStyle',
                  get: function () {
                    return this.$$.ctx[21];
                  },
                },
                {
                  key: 'getIcon',
                  get: function () {
                    return this.$$.ctx[22];
                  },
                },
                {
                  key: 'open',
                  get: function () {
                    return this.$$.ctx[59];
                  },
                  set: function (t) {
                    this.$set({ open: t }), Z();
                  },
                },
                {
                  key: 'close',
                  get: function () {
                    return this.$$.ctx[23];
                  },
                  set: function (t) {
                    this.$set({ close: t }), Z();
                  },
                },
                {
                  key: 'animateIn',
                  get: function () {
                    return this.$$.ctx[60];
                  },
                  set: function (t) {
                    this.$set({ animateIn: t }), Z();
                  },
                },
                {
                  key: 'animateOut',
                  get: function () {
                    return this.$$.ctx[61];
                  },
                  set: function (t) {
                    this.$set({ animateOut: t }), Z();
                  },
                },
                {
                  key: 'cancelClose',
                  get: function () {
                    return this.$$.ctx[62];
                  },
                },
                {
                  key: 'queueClose',
                  get: function () {
                    return this.$$.ctx[63];
                  },
                },
                {
                  key: '_preventTimerClose',
                  get: function () {
                    return this.$$.ctx[64];
                  },
                },
                {
                  key: 'on',
                  get: function () {
                    return this.$$.ctx[65];
                  },
                },
                {
                  key: 'update',
                  get: function () {
                    return this.$$.ctx[66];
                  },
                },
                {
                  key: 'fire',
                  get: function () {
                    return this.$$.ctx[67];
                  },
                },
                {
                  key: 'addModuleClass',
                  get: function () {
                    return this.$$.ctx[68];
                  },
                },
                {
                  key: 'removeModuleClass',
                  get: function () {
                    return this.$$.ctx[69];
                  },
                },
                {
                  key: 'hasModuleClass',
                  get: function () {
                    return this.$$.ctx[70];
                  },
                },
                {
                  key: 'getModuleHandled',
                  get: function () {
                    return this.$$.ctx[71];
                  },
                },
                {
                  key: 'setModuleHandled',
                  get: function () {
                    return this.$$.ctx[72];
                  },
                },
                {
                  key: 'getModuleOpen',
                  get: function () {
                    return this.$$.ctx[73];
                  },
                },
                {
                  key: 'setModuleOpen',
                  get: function () {
                    return this.$$.ctx[74];
                  },
                },
                {
                  key: 'setAnimating',
                  get: function () {
                    return this.$$.ctx[75];
                  },
                },
                {
                  key: 'getAnimatingClass',
                  get: function () {
                    return this.$$.ctx[76];
                  },
                },
                {
                  key: 'setAnimatingClass',
                  get: function () {
                    return this.$$.ctx[77];
                  },
                },
                {
                  key: '_getMoveClass',
                  get: function () {
                    return this.$$.ctx[78];
                  },
                },
                {
                  key: '_setMoveClass',
                  get: function () {
                    return this.$$.ctx[79];
                  },
                },
                {
                  key: '_setMasking',
                  get: function () {
                    return this.$$.ctx[80];
                  },
                },
              ]),
              s
            );
          })(mt);
          (e.Stack = vt),
            (e.alert = function (t) {
              return yt(Bt(t));
            }),
            (e.default = Gt),
            (e.defaultModules = Vt),
            (e.defaultStack = Ht),
            (e.defaults = Wt),
            (e.error = function (t) {
              return yt(Bt(t, 'error'));
            }),
            (e.info = function (t) {
              return yt(Bt(t, 'info'));
            }),
            (e.notice = function (t) {
              return yt(Bt(t, 'notice'));
            }),
            (e.success = function (t) {
              return yt(Bt(t, 'success'));
            }),
            Object.defineProperty(e, '__esModule', { value: !0 });
        })(e);
      }.call(this, n('pCvA')));
    },
    QP1B: function (t, e, n) {
      var i = n('nEaP'),
        r = n('de3D'),
        o = n('PGFG'),
        s = n('9nX2'),
        a = n('/dUa'),
        c = n('GHf2'),
        l = n('VuJW'),
        h = n('PCqT'),
        u = n('G5hJ'),
        f = r && r.prototype,
        d = c('species'),
        p = !1,
        g = o(i.PromiseRejectionEvent),
        m = s('Promise', function () {
          var t = a(r),
            e = t !== String(r);
          if (!e && 66 === u) return !0;
          if (h && (!f.catch || !f.finally)) return !0;
          if (u >= 51 && /native code/.test(t)) return !1;
          var n = new r(function (t) {
              t(1);
            }),
            i = function (t) {
              t(
                function () {},
                function () {},
              );
            };
          return (
            ((n.constructor = {})[d] = i),
            !(p = n.then(function () {}) instanceof i) || (!e && l && !g)
          );
        });
      t.exports = { CONSTRUCTOR: m, REJECTION_EVENT: g, SUBCLASSING: p };
    },
    QYi2: function (t, e, n) {
      var i = n('fshm'),
        r = n('Krfs'),
        o = n('q/gS'),
        s = n('GHf2')('iterator');
      t.exports = function (t) {
        if (null != t) return r(t, s) || r(t, '@@iterator') || o[i(t)];
      };
    },
    Qean: function (t, e, n) {
      var i = n('nEaP').TypeError;
      t.exports = function (t) {
        if (null == t) throw i("Can't call method on " + t);
        return t;
      };
    },
    Qtiq: function (t, e, n) {
      var i = n('WGD3');
      t.exports = i((1).valueOf);
    },
    'R/cv': function (t, e, n) {
      var i = n('tlZM'),
        r = Function.prototype,
        o = r.apply,
        s = r.call;
      t.exports =
        ('object' == typeof Reflect && Reflect.apply) ||
        (i
          ? s.bind(o)
          : function () {
              return s.apply(o, arguments);
            });
    },
    R1TW: function (t, e, n) {
      var i = n('UVdV');
      t.exports = i('document', 'documentElement');
    },
    Rzld: function (t, e, n) {
      'use strict';
      t.exports = function (t) {
        return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(t);
      };
    },
    SkE4: function (t, e, n) {
      var i,
        r,
        o,
        s = n('P2u4'),
        a = n('nEaP'),
        c = n('WGD3'),
        l = n('fT8P'),
        h = n('nHIk'),
        u = n('jP2f'),
        f = n('MoOl'),
        d = n('3pC9'),
        p = n('s3NK'),
        g = a.TypeError,
        m = a.WeakMap;
      if (s || f.state) {
        var v = f.state || (f.state = new m()),
          y = c(v.get),
          x = c(v.has),
          b = c(v.set);
        (i = function (t, e) {
          if (x(v, t)) throw new g('Object already initialized');
          return (e.facade = t), b(v, t, e), e;
        }),
          (r = function (t) {
            return y(v, t) || {};
          }),
          (o = function (t) {
            return x(v, t);
          });
      } else {
        var _ = d('state');
        (p[_] = !0),
          (i = function (t, e) {
            if (u(t, _)) throw new g('Object already initialized');
            return (e.facade = t), h(t, _, e), e;
          }),
          (r = function (t) {
            return u(t, _) ? t[_] : {};
          }),
          (o = function (t) {
            return u(t, _);
          });
      }
      t.exports = {
        set: i,
        get: r,
        has: o,
        enforce: function (t) {
          return o(t) ? r(t) : i(t, {});
        },
        getterFor: function (t) {
          return function (e) {
            var n;
            if (!l(e) || (n = r(e)).type !== t)
              throw g('Incompatible receiver, ' + t + ' required');
            return n;
          };
        },
      };
    },
    TDIH: function (t, e, n) {
      'use strict';
      var i = n('ovh1'),
        r = n('5QbJ'),
        o = n('uahg'),
        s = n('Zrjs');
      var a = (function t(e) {
        var n = new o(e),
          a = r(o.prototype.request, n);
        return (
          i.extend(a, o.prototype, n),
          i.extend(a, n),
          (a.create = function (n) {
            return t(s(e, n));
          }),
          a
        );
      })(n('nGo5'));
      (a.Axios = o),
        (a.CanceledError = n('pvzg')),
        (a.CancelToken = n('OHXD')),
        (a.isCancel = n('e5jZ')),
        (a.VERSION = n('4jJt').version),
        (a.toFormData = n('37w6')),
        (a.AxiosError = n('tqms')),
        (a.Cancel = a.CanceledError),
        (a.all = function (t) {
          return Promise.all(t);
        }),
        (a.spread = n('6s8r')),
        (a.isAxiosError = n('OBDY')),
        (t.exports = a),
        (t.exports.default = a);
    },
    UMUd: function (t, e, n) {
      var i = n('+iL7'),
        r = n('PGFG'),
        o = n('jP2f'),
        s = n('nRc6').f,
        a = n('wLFK').CONFIGURABLE,
        c = n('/dUa'),
        l = n('SkE4'),
        h = l.enforce,
        u = l.get,
        f = !i(function () {
          return 8 !== s(function () {}, 'length', { value: 8 }).length;
        }),
        d = String(String).split('String'),
        p = (t.exports = function (t, e, n) {
          'Symbol(' === String(e).slice(0, 7) &&
            (e = '[' + String(e).replace(/^Symbol\(([^)]*)\)/, '$1') + ']'),
            n && n.getter && (e = 'get ' + e),
            n && n.setter && (e = 'set ' + e),
            (!o(t, 'name') || (a && t.name !== e)) &&
              s(t, 'name', { value: e, configurable: !0 }),
            f &&
              n &&
              o(n, 'arity') &&
              t.length !== n.arity &&
              s(t, 'length', { value: n.arity });
          var i = h(t);
          return (
            o(i, 'source') ||
              (i.source = d.join('string' == typeof e ? e : '')),
            t
          );
        });
      Function.prototype.toString = p(function () {
        return (r(this) && u(this).source) || c(this);
      }, 'toString');
    },
    UVdV: function (t, e, n) {
      var i = n('nEaP'),
        r = n('PGFG'),
        o = function (t) {
          return r(t) ? t : void 0;
        };
      t.exports = function (t, e) {
        return arguments.length < 2 ? o(i[t]) : i[t] && i[t][e];
      };
    },
    UpYF: function (t, e, n) {
      'use strict';
      var i = n('k2M3'),
        r = n('fshm');
      t.exports = i
        ? {}.toString
        : function () {
            return '[object ' + r(this) + ']';
          };
    },
    V2sW: function (t, e, n) {
      'use strict';
      var i = n('UVdV'),
        r = n('nRc6'),
        o = n('GHf2'),
        s = n('Hvpk'),
        a = o('species');
      t.exports = function (t) {
        var e = i(t),
          n = r.f;
        s &&
          e &&
          !e[a] &&
          n(e, a, {
            configurable: !0,
            get: function () {
              return this;
            },
          });
      };
    },
    VSW8: function (t, e) {
      t.exports = function (t, e) {
        return {
          enumerable: !(1 & t),
          configurable: !(2 & t),
          writable: !(4 & t),
          value: e,
        };
      };
    },
    VuJW: function (t, e) {
      t.exports = 'object' == typeof window && 'object' != typeof Deno;
    },
    W2UA: function (t, e, n) {
      var i = n('gDYM'),
        r = n('fT8P'),
        o = n('N1hr');
      t.exports = function (t, e) {
        if ((i(t), r(e) && e.constructor === t)) return e;
        var n = o.f(t);
        return (0, n.resolve)(e), n.promise;
      };
    },
    W9fh: function (t, e, n) {
      var i = n('nEaP'),
        r = n('OzTt'),
        o = n('fT8P'),
        s = n('u5rE'),
        a = n('Krfs'),
        c = n('CVD7'),
        l = n('GHf2'),
        h = i.TypeError,
        u = l('toPrimitive');
      t.exports = function (t, e) {
        if (!o(t) || s(t)) return t;
        var n,
          i = a(t, u);
        if (i) {
          if (
            (void 0 === e && (e = 'default'), (n = r(i, t, e)), !o(n) || s(n))
          )
            return n;
          throw h("Can't convert object to primitive value");
        }
        return void 0 === e && (e = 'number'), c(t, e);
      };
    },
    WB5j: function (t, e, n) {
      'use strict';
      var i = n('JRM0'),
        r = n('nEaP'),
        o = n('h/Mk'),
        s = n('iGMQ'),
        a = n('fT8P'),
        c = n('glsI'),
        l = n('fr05'),
        h = n('M/tt'),
        u = n('ztTQ'),
        f = n('GHf2'),
        d = n('WCig'),
        p = n('i6bU'),
        g = d('slice'),
        m = f('species'),
        v = r.Array,
        y = Math.max;
      i(
        { target: 'Array', proto: !0, forced: !g },
        {
          slice: function (t, e) {
            var n,
              i,
              r,
              f = h(this),
              d = l(f),
              g = c(t, d),
              x = c(void 0 === e ? d : e, d);
            if (
              o(f) &&
              ((n = f.constructor),
              ((s(n) && (n === v || o(n.prototype))) ||
                (a(n) && null === (n = n[m]))) &&
                (n = void 0),
              n === v || void 0 === n)
            )
              return p(f, g, x);
            for (
              i = new (void 0 === n ? v : n)(y(x - g, 0)), r = 0;
              g < x;
              g++, r++
            )
              g in f && u(i, r, f[g]);
            return (i.length = r), i;
          },
        },
      );
    },
    WCig: function (t, e, n) {
      var i = n('+iL7'),
        r = n('GHf2'),
        o = n('G5hJ'),
        s = r('species');
      t.exports = function (t) {
        return (
          o >= 51 ||
          !i(function () {
            var e = [];
            return (
              ((e.constructor = {})[s] = function () {
                return { foo: 1 };
              }),
              1 !== e[t](Boolean).foo
            );
          })
        );
      };
    },
    WGD3: function (t, e, n) {
      var i = n('tlZM'),
        r = Function.prototype,
        o = r.bind,
        s = r.call,
        a = i && o.bind(s, s);
      t.exports = i
        ? function (t) {
            return t && a(t);
          }
        : function (t) {
            return (
              t &&
              function () {
                return s.apply(t, arguments);
              }
            );
          };
    },
    XSxi: function (t, e, n) {
      'use strict';
      var i = n('JRM0'),
        r = n('UVdV'),
        o = n('PCqT'),
        s = n('de3D'),
        a = n('QP1B').CONSTRUCTOR,
        c = n('W2UA'),
        l = r('Promise'),
        h = o && !a;
      i(
        { target: 'Promise', stat: !0, forced: o || a },
        {
          resolve: function (t) {
            return c(h && this === l ? s : this, t);
          },
        },
      );
    },
    Xki7: function (t, e, n) {
      var i = n('nEaP').String;
      t.exports = function (t) {
        try {
          return i(t);
        } catch (t) {
          return 'Object';
        }
      };
    },
    'Xlt+': function (t, e, n) {
      'use strict';
      var i = n('JRM0'),
        r = n('nEaP'),
        o = n('glsI'),
        s = n('ZK/t'),
        a = n('fr05'),
        c = n('9pAD'),
        l = n('iSxr'),
        h = n('ztTQ'),
        u = n('WCig')('splice'),
        f = r.TypeError,
        d = Math.max,
        p = Math.min;
      i(
        { target: 'Array', proto: !0, forced: !u },
        {
          splice: function (t, e) {
            var n,
              i,
              r,
              u,
              g,
              m,
              v = c(this),
              y = a(v),
              x = o(t, y),
              b = arguments.length;
            if (
              (0 === b
                ? (n = i = 0)
                : 1 === b
                ? ((n = 0), (i = y - x))
                : ((n = b - 2), (i = p(d(s(e), 0), y - x))),
              y + n - i > 9007199254740991)
            )
              throw f('Maximum allowed length exceeded');
            for (r = l(v, i), u = 0; u < i; u++)
              (g = x + u) in v && h(r, u, v[g]);
            if (((r.length = i), n < i)) {
              for (u = x; u < y - i; u++)
                (m = u + n), (g = u + i) in v ? (v[m] = v[g]) : delete v[m];
              for (u = y; u > y - i + n; u--) delete v[u - 1];
            } else if (n > i)
              for (u = y - i; u > x; u--)
                (m = u + n - 1),
                  (g = u + i - 1) in v ? (v[m] = v[g]) : delete v[m];
            for (u = 0; u < n; u++) v[u + x] = arguments[u + 2];
            return (v.length = y - i + n), r;
          },
        },
      );
    },
    'Y++z': function (t, e, n) {
      'use strict';
      /*!
       * Chart.js v3.8.0
       * https://www.chartjs.org
       * (c) 2022 Chart.js Contributors
       * Released under the MIT License
       */ const i =
        'undefined' == typeof window
          ? function (t) {
              return t();
            }
          : window.requestAnimationFrame;
      function r(t, e, n) {
        const r = n || (t => Array.prototype.slice.call(t));
        let o = !1,
          s = [];
        return function (...n) {
          (s = r(n)),
            o ||
              ((o = !0),
              i.call(window, () => {
                (o = !1), t.apply(e, s);
              }));
        };
      }
      const o = t =>
          'start' === t ? 'left' : 'end' === t ? 'right' : 'center',
        s = (t, e, n) => ('start' === t ? e : 'end' === t ? n : (e + n) / 2);
      function a() {}
      const c = (function () {
        let t = 0;
        return function () {
          return t++;
        };
      })();
      function l(t) {
        return null == t;
      }
      function h(t) {
        if (Array.isArray && Array.isArray(t)) return !0;
        const e = Object.prototype.toString.call(t);
        return '[object' === e.slice(0, 7) && 'Array]' === e.slice(-6);
      }
      function u(t) {
        return (
          null !== t && '[object Object]' === Object.prototype.toString.call(t)
        );
      }
      const f = t =>
        ('number' == typeof t || t instanceof Number) && isFinite(+t);
      function d(t, e) {
        return f(t) ? t : e;
      }
      function p(t, e) {
        return void 0 === t ? e : t;
      }
      const g = (t, e) =>
        'string' == typeof t && t.endsWith('%')
          ? (parseFloat(t) / 100) * e
          : +t;
      function m(t, e, n) {
        if (t && 'function' == typeof t.call) return t.apply(n, e);
      }
      function v(t, e, n, i) {
        let r, o, s;
        if (h(t))
          if (((o = t.length), i))
            for (r = o - 1; r >= 0; r--) e.call(n, t[r], r);
          else for (r = 0; r < o; r++) e.call(n, t[r], r);
        else if (u(t))
          for (s = Object.keys(t), o = s.length, r = 0; r < o; r++)
            e.call(n, t[s[r]], s[r]);
      }
      function y(t, e) {
        let n, i, r, o;
        if (!t || !e || t.length !== e.length) return !1;
        for (n = 0, i = t.length; n < i; ++n)
          if (
            ((r = t[n]),
            (o = e[n]),
            r.datasetIndex !== o.datasetIndex || r.index !== o.index)
          )
            return !1;
        return !0;
      }
      function x(t) {
        if (h(t)) return t.map(x);
        if (u(t)) {
          const e = Object.create(null),
            n = Object.keys(t),
            i = n.length;
          let r = 0;
          for (; r < i; ++r) e[n[r]] = x(t[n[r]]);
          return e;
        }
        return t;
      }
      function b(t) {
        return -1 === ['__proto__', 'prototype', 'constructor'].indexOf(t);
      }
      function _(t, e, n, i) {
        if (!b(t)) return;
        const r = e[t],
          o = n[t];
        u(r) && u(o) ? w(r, o, i) : (e[t] = x(o));
      }
      function w(t, e, n) {
        const i = h(e) ? e : [e],
          r = i.length;
        if (!u(t)) return t;
        const o = (n = n || {}).merger || _;
        for (let s = 0; s < r; ++s) {
          if (!u((e = i[s]))) continue;
          const r = Object.keys(e);
          for (let i = 0, s = r.length; i < s; ++i) o(r[i], t, e, n);
        }
        return t;
      }
      function k(t, e) {
        return w(t, e, { merger: M });
      }
      function M(t, e, n) {
        if (!b(t)) return;
        const i = e[t],
          r = n[t];
        u(i) && u(r)
          ? k(i, r)
          : Object.prototype.hasOwnProperty.call(e, t) || (e[t] = x(r));
      }
      function P(t, e) {
        const n = t.indexOf('.', e);
        return -1 === n ? t.length : n;
      }
      function O(t, e) {
        if ('' === e) return t;
        let n = 0,
          i = P(e, n);
        for (; t && i > n; ) (t = t[e.slice(n, i)]), (n = i + 1), (i = P(e, n));
        return t;
      }
      function E(t) {
        return t.charAt(0).toUpperCase() + t.slice(1);
      }
      const S = t => void 0 !== t,
        T = t => 'function' == typeof t,
        A = (t, e) => {
          if (t.size !== e.size) return !1;
          for (const n of t) if (!e.has(n)) return !1;
          return !0;
        };
      const C = Math.PI,
        R = 2 * C,
        D = R + C,
        L = Number.POSITIVE_INFINITY,
        I = C / 180,
        j = C / 2,
        $ = C / 4,
        N = (2 * C) / 3,
        F = Math.log10,
        B = Math.sign;
      function z(t) {
        const e = Math.round(t);
        t = V(t, e, t / 1e3) ? e : t;
        const n = Math.pow(10, Math.floor(F(t))),
          i = t / n;
        return (i <= 1 ? 1 : i <= 2 ? 2 : i <= 5 ? 5 : 10) * n;
      }
      function H(t) {
        return !isNaN(parseFloat(t)) && isFinite(t);
      }
      function V(t, e, n) {
        return Math.abs(t - e) < n;
      }
      function W(t, e, n) {
        let i, r, o;
        for (i = 0, r = t.length; i < r; i++)
          (o = t[i][n]),
            isNaN(o) ||
              ((e.min = Math.min(e.min, o)), (e.max = Math.max(e.max, o)));
      }
      function U(t) {
        return t * (C / 180);
      }
      function Y(t) {
        return t * (180 / C);
      }
      function G(t) {
        if (!f(t)) return;
        let e = 1,
          n = 0;
        for (; Math.round(t * e) / e !== t; ) (e *= 10), n++;
        return n;
      }
      function q(t, e) {
        const n = e.x - t.x,
          i = e.y - t.y,
          r = Math.sqrt(n * n + i * i);
        let o = Math.atan2(i, n);
        return o < -0.5 * C && (o += R), { angle: o, distance: r };
      }
      function J(t, e) {
        return Math.sqrt(Math.pow(e.x - t.x, 2) + Math.pow(e.y - t.y, 2));
      }
      function X(t, e) {
        return ((t - e + D) % R) - C;
      }
      function K(t) {
        return ((t % R) + R) % R;
      }
      function Q(t, e, n, i) {
        const r = K(t),
          o = K(e),
          s = K(n),
          a = K(o - r),
          c = K(s - r),
          l = K(r - o),
          h = K(r - s);
        return r === o || r === s || (i && o === s) || (a > c && l < h);
      }
      function Z(t, e, n) {
        return Math.max(e, Math.min(n, t));
      }
      function tt(t, e, n, i = 1e-6) {
        return t >= Math.min(e, n) - i && t <= Math.max(e, n) + i;
      }
      const et = t => 0 === t || 1 === t,
        nt = (t, e, n) =>
          -Math.pow(2, 10 * (t -= 1)) * Math.sin(((t - e) * R) / n),
        it = (t, e, n) =>
          Math.pow(2, -10 * t) * Math.sin(((t - e) * R) / n) + 1,
        rt = {
          linear: t => t,
          easeInQuad: t => t * t,
          easeOutQuad: t => -t * (t - 2),
          easeInOutQuad: t =>
            (t /= 0.5) < 1 ? 0.5 * t * t : -0.5 * (--t * (t - 2) - 1),
          easeInCubic: t => t * t * t,
          easeOutCubic: t => (t -= 1) * t * t + 1,
          easeInOutCubic: t =>
            (t /= 0.5) < 1 ? 0.5 * t * t * t : 0.5 * ((t -= 2) * t * t + 2),
          easeInQuart: t => t * t * t * t,
          easeOutQuart: t => -((t -= 1) * t * t * t - 1),
          easeInOutQuart: t =>
            (t /= 0.5) < 1
              ? 0.5 * t * t * t * t
              : -0.5 * ((t -= 2) * t * t * t - 2),
          easeInQuint: t => t * t * t * t * t,
          easeOutQuint: t => (t -= 1) * t * t * t * t + 1,
          easeInOutQuint: t =>
            (t /= 0.5) < 1
              ? 0.5 * t * t * t * t * t
              : 0.5 * ((t -= 2) * t * t * t * t + 2),
          easeInSine: t => 1 - Math.cos(t * j),
          easeOutSine: t => Math.sin(t * j),
          easeInOutSine: t => -0.5 * (Math.cos(C * t) - 1),
          easeInExpo: t => (0 === t ? 0 : Math.pow(2, 10 * (t - 1))),
          easeOutExpo: t => (1 === t ? 1 : 1 - Math.pow(2, -10 * t)),
          easeInOutExpo: t =>
            et(t)
              ? t
              : t < 0.5
              ? 0.5 * Math.pow(2, 10 * (2 * t - 1))
              : 0.5 * (2 - Math.pow(2, -10 * (2 * t - 1))),
          easeInCirc: t => (t >= 1 ? t : -(Math.sqrt(1 - t * t) - 1)),
          easeOutCirc: t => Math.sqrt(1 - (t -= 1) * t),
          easeInOutCirc: t =>
            (t /= 0.5) < 1
              ? -0.5 * (Math.sqrt(1 - t * t) - 1)
              : 0.5 * (Math.sqrt(1 - (t -= 2) * t) + 1),
          easeInElastic: t => (et(t) ? t : nt(t, 0.075, 0.3)),
          easeOutElastic: t => (et(t) ? t : it(t, 0.075, 0.3)),
          easeInOutElastic(t) {
            const e = 0.1125;
            return et(t)
              ? t
              : t < 0.5
              ? 0.5 * nt(2 * t, e, 0.45)
              : 0.5 + 0.5 * it(2 * t - 1, e, 0.45);
          },
          easeInBack(t) {
            const e = 1.70158;
            return t * t * ((e + 1) * t - e);
          },
          easeOutBack(t) {
            const e = 1.70158;
            return (t -= 1) * t * ((e + 1) * t + e) + 1;
          },
          easeInOutBack(t) {
            let e = 1.70158;
            return (t /= 0.5) < 1
              ? t * t * ((1 + (e *= 1.525)) * t - e) * 0.5
              : 0.5 * ((t -= 2) * t * ((1 + (e *= 1.525)) * t + e) + 2);
          },
          easeInBounce: t => 1 - rt.easeOutBounce(1 - t),
          easeOutBounce(t) {
            const e = 7.5625,
              n = 2.75;
            return t < 1 / n
              ? e * t * t
              : t < 2 / n
              ? e * (t -= 1.5 / n) * t + 0.75
              : t < 2.5 / n
              ? e * (t -= 2.25 / n) * t + 0.9375
              : e * (t -= 2.625 / n) * t + 0.984375;
          },
          easeInOutBounce: t =>
            t < 0.5
              ? 0.5 * rt.easeInBounce(2 * t)
              : 0.5 * rt.easeOutBounce(2 * t - 1) + 0.5,
        };
      /*!
       * @kurkle/color v0.2.1
       * https://github.com/kurkle/color#readme
       * (c) 2022 Jukka Kurkela
       * Released under the MIT License
       */
      function ot(t) {
        return (t + 0.5) | 0;
      }
      const st = (t, e, n) => Math.max(Math.min(t, n), e);
      function at(t) {
        return st(ot(2.55 * t), 0, 255);
      }
      function ct(t) {
        return st(ot(255 * t), 0, 255);
      }
      function lt(t) {
        return st(ot(t / 2.55) / 100, 0, 1);
      }
      function ht(t) {
        return st(ot(100 * t), 0, 100);
      }
      const ut = {
          0: 0,
          1: 1,
          2: 2,
          3: 3,
          4: 4,
          5: 5,
          6: 6,
          7: 7,
          8: 8,
          9: 9,
          A: 10,
          B: 11,
          C: 12,
          D: 13,
          E: 14,
          F: 15,
          a: 10,
          b: 11,
          c: 12,
          d: 13,
          e: 14,
          f: 15,
        },
        ft = [...'0123456789ABCDEF'],
        dt = t => ft[15 & t],
        pt = t => ft[(240 & t) >> 4] + ft[15 & t],
        gt = t => (240 & t) >> 4 == (15 & t);
      function mt(t) {
        var e = (t => gt(t.r) && gt(t.g) && gt(t.b) && gt(t.a))(t) ? dt : pt;
        return t
          ? '#' +
              e(t.r) +
              e(t.g) +
              e(t.b) +
              ((t, e) => (t < 255 ? e(t) : ''))(t.a, e)
          : void 0;
      }
      const vt =
        /^(hsla?|hwb|hsv)\(\s*([-+.e\d]+)(?:deg)?[\s,]+([-+.e\d]+)%[\s,]+([-+.e\d]+)%(?:[\s,]+([-+.e\d]+)(%)?)?\s*\)$/;
      function yt(t, e, n) {
        const i = e * Math.min(n, 1 - n),
          r = (e, r = (e + t / 30) % 12) =>
            n - i * Math.max(Math.min(r - 3, 9 - r, 1), -1);
        return [r(0), r(8), r(4)];
      }
      function xt(t, e, n) {
        const i = (i, r = (i + t / 60) % 6) =>
          n - n * e * Math.max(Math.min(r, 4 - r, 1), 0);
        return [i(5), i(3), i(1)];
      }
      function bt(t, e, n) {
        const i = yt(t, 1, 0.5);
        let r;
        for (
          e + n > 1 && ((r = 1 / (e + n)), (e *= r), (n *= r)), r = 0;
          r < 3;
          r++
        )
          (i[r] *= 1 - e - n), (i[r] += e);
        return i;
      }
      function _t(t) {
        const e = t.r / 255,
          n = t.g / 255,
          i = t.b / 255,
          r = Math.max(e, n, i),
          o = Math.min(e, n, i),
          s = (r + o) / 2;
        let a, c, l;
        return (
          r !== o &&
            ((l = r - o),
            (c = s > 0.5 ? l / (2 - r - o) : l / (r + o)),
            (a = (function (t, e, n, i, r) {
              return t === r
                ? (e - n) / i + (e < n ? 6 : 0)
                : e === r
                ? (n - t) / i + 2
                : (t - e) / i + 4;
            })(e, n, i, l, r)),
            (a = 60 * a + 0.5)),
          [0 | a, c || 0, s]
        );
      }
      function wt(t, e, n, i) {
        return (Array.isArray(e) ? t(e[0], e[1], e[2]) : t(e, n, i)).map(ct);
      }
      function kt(t, e, n) {
        return wt(yt, t, e, n);
      }
      function Mt(t) {
        return ((t % 360) + 360) % 360;
      }
      function Pt(t) {
        const e = vt.exec(t);
        let n,
          i = 255;
        if (!e) return;
        e[5] !== n && (i = e[6] ? at(+e[5]) : ct(+e[5]));
        const r = Mt(+e[2]),
          o = +e[3] / 100,
          s = +e[4] / 100;
        return (
          (n =
            'hwb' === e[1]
              ? (function (t, e, n) {
                  return wt(bt, t, e, n);
                })(r, o, s)
              : 'hsv' === e[1]
              ? (function (t, e, n) {
                  return wt(xt, t, e, n);
                })(r, o, s)
              : kt(r, o, s)),
          { r: n[0], g: n[1], b: n[2], a: i }
        );
      }
      const Ot = {
          x: 'dark',
          Z: 'light',
          Y: 're',
          X: 'blu',
          W: 'gr',
          V: 'medium',
          U: 'slate',
          A: 'ee',
          T: 'ol',
          S: 'or',
          B: 'ra',
          C: 'lateg',
          D: 'ights',
          R: 'in',
          Q: 'turquois',
          E: 'hi',
          P: 'ro',
          O: 'al',
          N: 'le',
          M: 'de',
          L: 'yello',
          F: 'en',
          K: 'ch',
          G: 'arks',
          H: 'ea',
          I: 'ightg',
          J: 'wh',
        },
        Et = {
          OiceXe: 'f0f8ff',
          antiquewEte: 'faebd7',
          aqua: 'ffff',
          aquamarRe: '7fffd4',
          azuY: 'f0ffff',
          beige: 'f5f5dc',
          bisque: 'ffe4c4',
          black: '0',
          blanKedOmond: 'ffebcd',
          Xe: 'ff',
          XeviTet: '8a2be2',
          bPwn: 'a52a2a',
          burlywood: 'deb887',
          caMtXe: '5f9ea0',
          KartYuse: '7fff00',
          KocTate: 'd2691e',
          cSO: 'ff7f50',
          cSnflowerXe: '6495ed',
          cSnsilk: 'fff8dc',
          crimson: 'dc143c',
          cyan: 'ffff',
          xXe: '8b',
          xcyan: '8b8b',
          xgTMnPd: 'b8860b',
          xWay: 'a9a9a9',
          xgYF: '6400',
          xgYy: 'a9a9a9',
          xkhaki: 'bdb76b',
          xmagFta: '8b008b',
          xTivegYF: '556b2f',
          xSange: 'ff8c00',
          xScEd: '9932cc',
          xYd: '8b0000',
          xsOmon: 'e9967a',
          xsHgYF: '8fbc8f',
          xUXe: '483d8b',
          xUWay: '2f4f4f',
          xUgYy: '2f4f4f',
          xQe: 'ced1',
          xviTet: '9400d3',
          dAppRk: 'ff1493',
          dApskyXe: 'bfff',
          dimWay: '696969',
          dimgYy: '696969',
          dodgerXe: '1e90ff',
          fiYbrick: 'b22222',
          flSOwEte: 'fffaf0',
          foYstWAn: '228b22',
          fuKsia: 'ff00ff',
          gaRsbSo: 'dcdcdc',
          ghostwEte: 'f8f8ff',
          gTd: 'ffd700',
          gTMnPd: 'daa520',
          Way: '808080',
          gYF: '8000',
          gYFLw: 'adff2f',
          gYy: '808080',
          honeyMw: 'f0fff0',
          hotpRk: 'ff69b4',
          RdianYd: 'cd5c5c',
          Rdigo: '4b0082',
          ivSy: 'fffff0',
          khaki: 'f0e68c',
          lavFMr: 'e6e6fa',
          lavFMrXsh: 'fff0f5',
          lawngYF: '7cfc00',
          NmoncEffon: 'fffacd',
          ZXe: 'add8e6',
          ZcSO: 'f08080',
          Zcyan: 'e0ffff',
          ZgTMnPdLw: 'fafad2',
          ZWay: 'd3d3d3',
          ZgYF: '90ee90',
          ZgYy: 'd3d3d3',
          ZpRk: 'ffb6c1',
          ZsOmon: 'ffa07a',
          ZsHgYF: '20b2aa',
          ZskyXe: '87cefa',
          ZUWay: '778899',
          ZUgYy: '778899',
          ZstAlXe: 'b0c4de',
          ZLw: 'ffffe0',
          lime: 'ff00',
          limegYF: '32cd32',
          lRF: 'faf0e6',
          magFta: 'ff00ff',
          maPon: '800000',
          VaquamarRe: '66cdaa',
          VXe: 'cd',
          VScEd: 'ba55d3',
          VpurpN: '9370db',
          VsHgYF: '3cb371',
          VUXe: '7b68ee',
          VsprRggYF: 'fa9a',
          VQe: '48d1cc',
          VviTetYd: 'c71585',
          midnightXe: '191970',
          mRtcYam: 'f5fffa',
          mistyPse: 'ffe4e1',
          moccasR: 'ffe4b5',
          navajowEte: 'ffdead',
          navy: '80',
          Tdlace: 'fdf5e6',
          Tive: '808000',
          TivedBb: '6b8e23',
          Sange: 'ffa500',
          SangeYd: 'ff4500',
          ScEd: 'da70d6',
          pOegTMnPd: 'eee8aa',
          pOegYF: '98fb98',
          pOeQe: 'afeeee',
          pOeviTetYd: 'db7093',
          papayawEp: 'ffefd5',
          pHKpuff: 'ffdab9',
          peru: 'cd853f',
          pRk: 'ffc0cb',
          plum: 'dda0dd',
          powMrXe: 'b0e0e6',
          purpN: '800080',
          YbeccapurpN: '663399',
          Yd: 'ff0000',
          Psybrown: 'bc8f8f',
          PyOXe: '4169e1',
          saddNbPwn: '8b4513',
          sOmon: 'fa8072',
          sandybPwn: 'f4a460',
          sHgYF: '2e8b57',
          sHshell: 'fff5ee',
          siFna: 'a0522d',
          silver: 'c0c0c0',
          skyXe: '87ceeb',
          UXe: '6a5acd',
          UWay: '708090',
          UgYy: '708090',
          snow: 'fffafa',
          sprRggYF: 'ff7f',
          stAlXe: '4682b4',
          tan: 'd2b48c',
          teO: '8080',
          tEstN: 'd8bfd8',
          tomato: 'ff6347',
          Qe: '40e0d0',
          viTet: 'ee82ee',
          JHt: 'f5deb3',
          wEte: 'ffffff',
          wEtesmoke: 'f5f5f5',
          Lw: 'ffff00',
          LwgYF: '9acd32',
        };
      let St;
      function Tt(t) {
        St ||
          ((St = (function () {
            const t = {},
              e = Object.keys(Et),
              n = Object.keys(Ot);
            let i, r, o, s, a;
            for (i = 0; i < e.length; i++) {
              for (s = a = e[i], r = 0; r < n.length; r++)
                (o = n[r]), (a = a.replace(o, Ot[o]));
              (o = parseInt(Et[s], 16)),
                (t[a] = [(o >> 16) & 255, (o >> 8) & 255, 255 & o]);
            }
            return t;
          })()),
          (St.transparent = [0, 0, 0, 0]));
        const e = St[t.toLowerCase()];
        return (
          e && { r: e[0], g: e[1], b: e[2], a: 4 === e.length ? e[3] : 255 }
        );
      }
      const At =
        /^rgba?\(\s*([-+.\d]+)(%)?[\s,]+([-+.e\d]+)(%)?[\s,]+([-+.e\d]+)(%)?(?:[\s,/]+([-+.e\d]+)(%)?)?\s*\)$/;
      const Ct = t =>
          t <= 0.0031308 ? 12.92 * t : 1.055 * Math.pow(t, 1 / 2.4) - 0.055,
        Rt = t =>
          t <= 0.04045 ? t / 12.92 : Math.pow((t + 0.055) / 1.055, 2.4);
      function Dt(t, e, n) {
        if (t) {
          let i = _t(t);
          (i[e] = Math.max(0, Math.min(i[e] + i[e] * n, 0 === e ? 360 : 1))),
            (i = kt(i)),
            (t.r = i[0]),
            (t.g = i[1]),
            (t.b = i[2]);
        }
      }
      function Lt(t, e) {
        return t ? Object.assign(e || {}, t) : t;
      }
      function It(t) {
        var e = { r: 0, g: 0, b: 0, a: 255 };
        return (
          Array.isArray(t)
            ? t.length >= 3 &&
              ((e = { r: t[0], g: t[1], b: t[2], a: 255 }),
              t.length > 3 && (e.a = ct(t[3])))
            : ((e = Lt(t, { r: 0, g: 0, b: 0, a: 1 })).a = ct(e.a)),
          e
        );
      }
      function jt(t) {
        return 'r' === t.charAt(0)
          ? (function (t) {
              const e = At.exec(t);
              let n,
                i,
                r,
                o = 255;
              if (e) {
                if (e[7] !== n) {
                  const t = +e[7];
                  o = e[8] ? at(t) : st(255 * t, 0, 255);
                }
                return (
                  (n = +e[1]),
                  (i = +e[3]),
                  (r = +e[5]),
                  (n = 255 & (e[2] ? at(n) : st(n, 0, 255))),
                  (i = 255 & (e[4] ? at(i) : st(i, 0, 255))),
                  (r = 255 & (e[6] ? at(r) : st(r, 0, 255))),
                  { r: n, g: i, b: r, a: o }
                );
              }
            })(t)
          : Pt(t);
      }
      class $t {
        constructor(t) {
          if (t instanceof $t) return t;
          const e = typeof t;
          let n;
          var i, r, o;
          'object' === e
            ? (n = It(t))
            : 'string' === e &&
              ((o = (i = t).length),
              '#' === i[0] &&
                (4 === o || 5 === o
                  ? (r = {
                      r: 255 & (17 * ut[i[1]]),
                      g: 255 & (17 * ut[i[2]]),
                      b: 255 & (17 * ut[i[3]]),
                      a: 5 === o ? 17 * ut[i[4]] : 255,
                    })
                  : (7 !== o && 9 !== o) ||
                    (r = {
                      r: (ut[i[1]] << 4) | ut[i[2]],
                      g: (ut[i[3]] << 4) | ut[i[4]],
                      b: (ut[i[5]] << 4) | ut[i[6]],
                      a: 9 === o ? (ut[i[7]] << 4) | ut[i[8]] : 255,
                    })),
              (n = r || Tt(t) || jt(t))),
            (this._rgb = n),
            (this._valid = !!n);
        }
        get valid() {
          return this._valid;
        }
        get rgb() {
          var t = Lt(this._rgb);
          return t && (t.a = lt(t.a)), t;
        }
        set rgb(t) {
          this._rgb = It(t);
        }
        rgbString() {
          return this._valid
            ? (t = this._rgb) &&
                (t.a < 255
                  ? `rgba(${t.r}, ${t.g}, ${t.b}, ${lt(t.a)})`
                  : `rgb(${t.r}, ${t.g}, ${t.b})`)
            : void 0;
          var t;
        }
        hexString() {
          return this._valid ? mt(this._rgb) : void 0;
        }
        hslString() {
          return this._valid
            ? (function (t) {
                if (!t) return;
                const e = _t(t),
                  n = e[0],
                  i = ht(e[1]),
                  r = ht(e[2]);
                return t.a < 255
                  ? `hsla(${n}, ${i}%, ${r}%, ${lt(t.a)})`
                  : `hsl(${n}, ${i}%, ${r}%)`;
              })(this._rgb)
            : void 0;
        }
        mix(t, e) {
          if (t) {
            const n = this.rgb,
              i = t.rgb;
            let r;
            const o = e === r ? 0.5 : e,
              s = 2 * o - 1,
              a = n.a - i.a,
              c = ((s * a == -1 ? s : (s + a) / (1 + s * a)) + 1) / 2;
            (r = 1 - c),
              (n.r = 255 & (c * n.r + r * i.r + 0.5)),
              (n.g = 255 & (c * n.g + r * i.g + 0.5)),
              (n.b = 255 & (c * n.b + r * i.b + 0.5)),
              (n.a = o * n.a + (1 - o) * i.a),
              (this.rgb = n);
          }
          return this;
        }
        interpolate(t, e) {
          return (
            t &&
              (this._rgb = (function (t, e, n) {
                const i = Rt(lt(t.r)),
                  r = Rt(lt(t.g)),
                  o = Rt(lt(t.b));
                return {
                  r: ct(Ct(i + n * (Rt(lt(e.r)) - i))),
                  g: ct(Ct(r + n * (Rt(lt(e.g)) - r))),
                  b: ct(Ct(o + n * (Rt(lt(e.b)) - o))),
                  a: t.a + n * (e.a - t.a),
                };
              })(this._rgb, t._rgb, e)),
            this
          );
        }
        clone() {
          return new $t(this.rgb);
        }
        alpha(t) {
          return (this._rgb.a = ct(t)), this;
        }
        clearer(t) {
          return (this._rgb.a *= 1 - t), this;
        }
        greyscale() {
          const t = this._rgb,
            e = ot(0.3 * t.r + 0.59 * t.g + 0.11 * t.b);
          return (t.r = t.g = t.b = e), this;
        }
        opaquer(t) {
          return (this._rgb.a *= 1 + t), this;
        }
        negate() {
          const t = this._rgb;
          return (t.r = 255 - t.r), (t.g = 255 - t.g), (t.b = 255 - t.b), this;
        }
        lighten(t) {
          return Dt(this._rgb, 2, t), this;
        }
        darken(t) {
          return Dt(this._rgb, 2, -t), this;
        }
        saturate(t) {
          return Dt(this._rgb, 1, t), this;
        }
        desaturate(t) {
          return Dt(this._rgb, 1, -t), this;
        }
        rotate(t) {
          return (
            (function (t, e) {
              var n = _t(t);
              (n[0] = Mt(n[0] + e)),
                (n = kt(n)),
                (t.r = n[0]),
                (t.g = n[1]),
                (t.b = n[2]);
            })(this._rgb, t),
            this
          );
        }
      }
      function Nt(t) {
        return new $t(t);
      }
      function Ft(t) {
        if (t && 'object' == typeof t) {
          const e = t.toString();
          return (
            '[object CanvasPattern]' === e || '[object CanvasGradient]' === e
          );
        }
        return !1;
      }
      function Bt(t) {
        return Ft(t) ? t : Nt(t);
      }
      function zt(t) {
        return Ft(t) ? t : Nt(t).saturate(0.5).darken(0.1).hexString();
      }
      const Ht = Object.create(null),
        Vt = Object.create(null);
      function Wt(t, e) {
        if (!e) return t;
        const n = e.split('.');
        for (let e = 0, i = n.length; e < i; ++e) {
          const i = n[e];
          t = t[i] || (t[i] = Object.create(null));
        }
        return t;
      }
      function Ut(t, e, n) {
        return 'string' == typeof e ? w(Wt(t, e), n) : w(Wt(t, ''), e);
      }
      var Yt = new (class {
        constructor(t) {
          (this.animation = void 0),
            (this.backgroundColor = 'rgba(0,0,0,0.1)'),
            (this.borderColor = 'rgba(0,0,0,0.1)'),
            (this.color = '#666'),
            (this.datasets = {}),
            (this.devicePixelRatio = t =>
              t.chart.platform.getDevicePixelRatio()),
            (this.elements = {}),
            (this.events = [
              'mousemove',
              'mouseout',
              'click',
              'touchstart',
              'touchmove',
            ]),
            (this.font = {
              family: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
              size: 12,
              style: 'normal',
              lineHeight: 1.2,
              weight: null,
            }),
            (this.hover = {}),
            (this.hoverBackgroundColor = (t, e) => zt(e.backgroundColor)),
            (this.hoverBorderColor = (t, e) => zt(e.borderColor)),
            (this.hoverColor = (t, e) => zt(e.color)),
            (this.indexAxis = 'x'),
            (this.interaction = {
              mode: 'nearest',
              intersect: !0,
              includeInvisible: !1,
            }),
            (this.maintainAspectRatio = !0),
            (this.onHover = null),
            (this.onClick = null),
            (this.parsing = !0),
            (this.plugins = {}),
            (this.responsive = !0),
            (this.scale = void 0),
            (this.scales = {}),
            (this.showLine = !0),
            (this.drawActiveElementsOnTop = !0),
            this.describe(t);
        }
        set(t, e) {
          return Ut(this, t, e);
        }
        get(t) {
          return Wt(this, t);
        }
        describe(t, e) {
          return Ut(Vt, t, e);
        }
        override(t, e) {
          return Ut(Ht, t, e);
        }
        route(t, e, n, i) {
          const r = Wt(this, t),
            o = Wt(this, n),
            s = '_' + e;
          Object.defineProperties(r, {
            [s]: { value: r[e], writable: !0 },
            [e]: {
              enumerable: !0,
              get() {
                const t = this[s],
                  e = o[i];
                return u(t) ? Object.assign({}, e, t) : p(t, e);
              },
              set(t) {
                this[s] = t;
              },
            },
          });
        }
      })({
        _scriptable: t => !t.startsWith('on'),
        _indexable: t => 'events' !== t,
        hover: { _fallback: 'interaction' },
        interaction: { _scriptable: !1, _indexable: !1 },
      });
      function Gt(t, e, n, i, r) {
        let o = e[r];
        return (
          o || ((o = e[r] = t.measureText(r).width), n.push(r)),
          o > i && (i = o),
          i
        );
      }
      function qt(t, e, n, i) {
        let r = ((i = i || {}).data = i.data || {}),
          o = (i.garbageCollect = i.garbageCollect || []);
        i.font !== e &&
          ((r = i.data = {}), (o = i.garbageCollect = []), (i.font = e)),
          t.save(),
          (t.font = e);
        let s = 0;
        const a = n.length;
        let c, l, u, f, d;
        for (c = 0; c < a; c++)
          if (((f = n[c]), null != f && !0 !== h(f))) s = Gt(t, r, o, s, f);
          else if (h(f))
            for (l = 0, u = f.length; l < u; l++)
              (d = f[l]), null == d || h(d) || (s = Gt(t, r, o, s, d));
        t.restore();
        const p = o.length / 2;
        if (p > n.length) {
          for (c = 0; c < p; c++) delete r[o[c]];
          o.splice(0, p);
        }
        return s;
      }
      function Jt(t, e, n) {
        const i = t.currentDevicePixelRatio,
          r = 0 !== n ? Math.max(n / 2, 0.5) : 0;
        return Math.round((e - r) * i) / i + r;
      }
      function Xt(t, e) {
        (e = e || t.getContext('2d')).save(),
          e.resetTransform(),
          e.clearRect(0, 0, t.width, t.height),
          e.restore();
      }
      function Kt(t, e, n, i) {
        let r, o, s, a, c;
        const l = e.pointStyle,
          h = e.rotation,
          u = e.radius;
        let f = (h || 0) * I;
        if (
          l &&
          'object' == typeof l &&
          ((r = l.toString()),
          '[object HTMLImageElement]' === r ||
            '[object HTMLCanvasElement]' === r)
        )
          return (
            t.save(),
            t.translate(n, i),
            t.rotate(f),
            t.drawImage(l, -l.width / 2, -l.height / 2, l.width, l.height),
            void t.restore()
          );
        if (!(isNaN(u) || u <= 0)) {
          switch ((t.beginPath(), l)) {
            default:
              t.arc(n, i, u, 0, R), t.closePath();
              break;
            case 'triangle':
              t.moveTo(n + Math.sin(f) * u, i - Math.cos(f) * u),
                (f += N),
                t.lineTo(n + Math.sin(f) * u, i - Math.cos(f) * u),
                (f += N),
                t.lineTo(n + Math.sin(f) * u, i - Math.cos(f) * u),
                t.closePath();
              break;
            case 'rectRounded':
              (c = 0.516 * u),
                (a = u - c),
                (o = Math.cos(f + $) * a),
                (s = Math.sin(f + $) * a),
                t.arc(n - o, i - s, c, f - C, f - j),
                t.arc(n + s, i - o, c, f - j, f),
                t.arc(n + o, i + s, c, f, f + j),
                t.arc(n - s, i + o, c, f + j, f + C),
                t.closePath();
              break;
            case 'rect':
              if (!h) {
                (a = Math.SQRT1_2 * u), t.rect(n - a, i - a, 2 * a, 2 * a);
                break;
              }
              f += $;
            case 'rectRot':
              (o = Math.cos(f) * u),
                (s = Math.sin(f) * u),
                t.moveTo(n - o, i - s),
                t.lineTo(n + s, i - o),
                t.lineTo(n + o, i + s),
                t.lineTo(n - s, i + o),
                t.closePath();
              break;
            case 'crossRot':
              f += $;
            case 'cross':
              (o = Math.cos(f) * u),
                (s = Math.sin(f) * u),
                t.moveTo(n - o, i - s),
                t.lineTo(n + o, i + s),
                t.moveTo(n + s, i - o),
                t.lineTo(n - s, i + o);
              break;
            case 'star':
              (o = Math.cos(f) * u),
                (s = Math.sin(f) * u),
                t.moveTo(n - o, i - s),
                t.lineTo(n + o, i + s),
                t.moveTo(n + s, i - o),
                t.lineTo(n - s, i + o),
                (f += $),
                (o = Math.cos(f) * u),
                (s = Math.sin(f) * u),
                t.moveTo(n - o, i - s),
                t.lineTo(n + o, i + s),
                t.moveTo(n + s, i - o),
                t.lineTo(n - s, i + o);
              break;
            case 'line':
              (o = Math.cos(f) * u),
                (s = Math.sin(f) * u),
                t.moveTo(n - o, i - s),
                t.lineTo(n + o, i + s);
              break;
            case 'dash':
              t.moveTo(n, i),
                t.lineTo(n + Math.cos(f) * u, i + Math.sin(f) * u);
          }
          t.fill(), e.borderWidth > 0 && t.stroke();
        }
      }
      function Qt(t, e, n) {
        return (
          (n = n || 0.5),
          !e ||
            (t &&
              t.x > e.left - n &&
              t.x < e.right + n &&
              t.y > e.top - n &&
              t.y < e.bottom + n)
        );
      }
      function Zt(t, e) {
        t.save(),
          t.beginPath(),
          t.rect(e.left, e.top, e.right - e.left, e.bottom - e.top),
          t.clip();
      }
      function te(t) {
        t.restore();
      }
      function ee(t, e, n, i, r) {
        if (!e) return t.lineTo(n.x, n.y);
        if ('middle' === r) {
          const i = (e.x + n.x) / 2;
          t.lineTo(i, e.y), t.lineTo(i, n.y);
        } else ('after' === r) != !!i ? t.lineTo(e.x, n.y) : t.lineTo(n.x, e.y);
        t.lineTo(n.x, n.y);
      }
      function ne(t, e, n, i) {
        if (!e) return t.lineTo(n.x, n.y);
        t.bezierCurveTo(
          i ? e.cp1x : e.cp2x,
          i ? e.cp1y : e.cp2y,
          i ? n.cp2x : n.cp1x,
          i ? n.cp2y : n.cp1y,
          n.x,
          n.y,
        );
      }
      function ie(t, e, n, i, r, o = {}) {
        const s = h(e) ? e : [e],
          a = o.strokeWidth > 0 && '' !== o.strokeColor;
        let c, u;
        for (
          t.save(),
            t.font = r.string,
            (function (t, e) {
              e.translation && t.translate(e.translation[0], e.translation[1]);
              l(e.rotation) || t.rotate(e.rotation);
              e.color && (t.fillStyle = e.color);
              e.textAlign && (t.textAlign = e.textAlign);
              e.textBaseline && (t.textBaseline = e.textBaseline);
            })(t, o),
            c = 0;
          c < s.length;
          ++c
        )
          (u = s[c]),
            a &&
              (o.strokeColor && (t.strokeStyle = o.strokeColor),
              l(o.strokeWidth) || (t.lineWidth = o.strokeWidth),
              t.strokeText(u, n, i, o.maxWidth)),
            t.fillText(u, n, i, o.maxWidth),
            re(t, n, i, u, o),
            (i += r.lineHeight);
        t.restore();
      }
      function re(t, e, n, i, r) {
        if (r.strikethrough || r.underline) {
          const o = t.measureText(i),
            s = e - o.actualBoundingBoxLeft,
            a = e + o.actualBoundingBoxRight,
            c = n - o.actualBoundingBoxAscent,
            l = n + o.actualBoundingBoxDescent,
            h = r.strikethrough ? (c + l) / 2 : l;
          (t.strokeStyle = t.fillStyle),
            t.beginPath(),
            (t.lineWidth = r.decorationWidth || 2),
            t.moveTo(s, h),
            t.lineTo(a, h),
            t.stroke();
        }
      }
      function oe(t, e) {
        const { x: n, y: i, w: r, h: o, radius: s } = e;
        t.arc(n + s.topLeft, i + s.topLeft, s.topLeft, -j, C, !0),
          t.lineTo(n, i + o - s.bottomLeft),
          t.arc(n + s.bottomLeft, i + o - s.bottomLeft, s.bottomLeft, C, j, !0),
          t.lineTo(n + r - s.bottomRight, i + o),
          t.arc(
            n + r - s.bottomRight,
            i + o - s.bottomRight,
            s.bottomRight,
            j,
            0,
            !0,
          ),
          t.lineTo(n + r, i + s.topRight),
          t.arc(n + r - s.topRight, i + s.topRight, s.topRight, 0, -j, !0),
          t.lineTo(n + s.topLeft, i);
      }
      const se = new RegExp(/^(normal|(\d+(?:\.\d+)?)(px|em|%)?)$/),
        ae = new RegExp(
          /^(normal|italic|initial|inherit|unset|(oblique( -?[0-9]?[0-9]deg)?))$/,
        );
      function ce(t, e) {
        const n = ('' + t).match(se);
        if (!n || 'normal' === n[1]) return 1.2 * e;
        switch (((t = +n[2]), n[3])) {
          case 'px':
            return t;
          case '%':
            t /= 100;
        }
        return e * t;
      }
      function le(t, e) {
        const n = {},
          i = u(e),
          r = i ? Object.keys(e) : e,
          o = u(t) ? (i ? n => p(t[n], t[e[n]]) : e => t[e]) : () => t;
        for (const t of r) n[t] = +o(t) || 0;
        return n;
      }
      function he(t) {
        return le(t, { top: 'y', right: 'x', bottom: 'y', left: 'x' });
      }
      function ue(t) {
        return le(t, ['topLeft', 'topRight', 'bottomLeft', 'bottomRight']);
      }
      function fe(t) {
        const e = he(t);
        return (e.width = e.left + e.right), (e.height = e.top + e.bottom), e;
      }
      function de(t, e) {
        (t = t || {}), (e = e || Yt.font);
        let n = p(t.size, e.size);
        'string' == typeof n && (n = parseInt(n, 10));
        let i = p(t.style, e.style);
        i &&
          !('' + i).match(ae) &&
          (console.warn('Invalid font style specified: "' + i + '"'), (i = ''));
        const r = {
          family: p(t.family, e.family),
          lineHeight: ce(p(t.lineHeight, e.lineHeight), n),
          size: n,
          style: i,
          weight: p(t.weight, e.weight),
          string: '',
        };
        return (
          (r.string = (function (t) {
            return !t || l(t.size) || l(t.family)
              ? null
              : (t.style ? t.style + ' ' : '') +
                  (t.weight ? t.weight + ' ' : '') +
                  t.size +
                  'px ' +
                  t.family;
          })(r)),
          r
        );
      }
      function pe(t, e, n, i) {
        let r,
          o,
          s,
          a = !0;
        for (r = 0, o = t.length; r < o; ++r)
          if (
            ((s = t[r]),
            void 0 !== s &&
              (void 0 !== e && 'function' == typeof s && ((s = s(e)), (a = !1)),
              void 0 !== n && h(s) && ((s = s[n % s.length]), (a = !1)),
              void 0 !== s))
          )
            return i && !a && (i.cacheable = !1), s;
      }
      function ge(t, e) {
        return Object.assign(Object.create(t), e);
      }
      function me(t, e, n) {
        n = n || (n => t[n] < e);
        let i,
          r = t.length - 1,
          o = 0;
        for (; r - o > 1; ) (i = (o + r) >> 1), n(i) ? (o = i) : (r = i);
        return { lo: o, hi: r };
      }
      const ve = (t, e, n) => me(t, n, i => t[i][e] < n),
        ye = (t, e, n) => me(t, n, i => t[i][e] >= n);
      const xe = ['push', 'pop', 'shift', 'splice', 'unshift'];
      function be(t, e) {
        const n = t._chartjs;
        if (!n) return;
        const i = n.listeners,
          r = i.indexOf(e);
        -1 !== r && i.splice(r, 1),
          i.length > 0 ||
            (xe.forEach(e => {
              delete t[e];
            }),
            delete t._chartjs);
      }
      function _e(t) {
        const e = new Set();
        let n, i;
        for (n = 0, i = t.length; n < i; ++n) e.add(t[n]);
        return e.size === i ? t : Array.from(e);
      }
      function we(t, e = [''], n = t, i, r = () => t[0]) {
        S(i) || (i = De('_fallback', t));
        const o = {
          [Symbol.toStringTag]: 'Object',
          _cacheable: !0,
          _scopes: t,
          _rootScopes: n,
          _fallback: i,
          _getTarget: r,
          override: r => we([r, ...t], e, n, i),
        };
        return new Proxy(o, {
          deleteProperty: (e, n) => (
            delete e[n], delete e._keys, delete t[0][n], !0
          ),
          get: (n, i) =>
            Ee(n, i, () =>
              (function (t, e, n, i) {
                let r;
                for (const o of e)
                  if (((r = De(Pe(o, t), n)), S(r)))
                    return Oe(t, r) ? Ce(n, i, t, r) : r;
              })(i, e, t, n),
            ),
          getOwnPropertyDescriptor: (t, e) =>
            Reflect.getOwnPropertyDescriptor(t._scopes[0], e),
          getPrototypeOf: () => Reflect.getPrototypeOf(t[0]),
          has: (t, e) => Le(t).includes(e),
          ownKeys: t => Le(t),
          set(t, e, n) {
            const i = t._storage || (t._storage = r());
            return (t[e] = i[e] = n), delete t._keys, !0;
          },
        });
      }
      function ke(t, e, n, i) {
        const r = {
          _cacheable: !1,
          _proxy: t,
          _context: e,
          _subProxy: n,
          _stack: new Set(),
          _descriptors: Me(t, i),
          setContext: e => ke(t, e, n, i),
          override: r => ke(t.override(r), e, n, i),
        };
        return new Proxy(r, {
          deleteProperty: (e, n) => (delete e[n], delete t[n], !0),
          get: (t, e, n) =>
            Ee(t, e, () =>
              (function (t, e, n) {
                const {
                  _proxy: i,
                  _context: r,
                  _subProxy: o,
                  _descriptors: s,
                } = t;
                let a = i[e];
                T(a) &&
                  s.isScriptable(e) &&
                  (a = (function (t, e, n, i) {
                    const {
                      _proxy: r,
                      _context: o,
                      _subProxy: s,
                      _stack: a,
                    } = n;
                    if (a.has(t))
                      throw new Error(
                        'Recursion detected: ' +
                          Array.from(a).join('->') +
                          '->' +
                          t,
                      );
                    a.add(t),
                      (e = e(o, s || i)),
                      a.delete(t),
                      Oe(t, e) && (e = Ce(r._scopes, r, t, e));
                    return e;
                  })(e, a, t, n));
                h(a) &&
                  a.length &&
                  (a = (function (t, e, n, i) {
                    const {
                      _proxy: r,
                      _context: o,
                      _subProxy: s,
                      _descriptors: a,
                    } = n;
                    if (S(o.index) && i(t)) e = e[o.index % e.length];
                    else if (u(e[0])) {
                      const n = e,
                        i = r._scopes.filter(t => t !== n);
                      e = [];
                      for (const c of n) {
                        const n = Ce(i, r, t, c);
                        e.push(ke(n, o, s && s[t], a));
                      }
                    }
                    return e;
                  })(e, a, t, s.isIndexable));
                Oe(e, a) && (a = ke(a, r, o && o[e], s));
                return a;
              })(t, e, n),
            ),
          getOwnPropertyDescriptor: (e, n) =>
            e._descriptors.allKeys
              ? Reflect.has(t, n)
                ? { enumerable: !0, configurable: !0 }
                : void 0
              : Reflect.getOwnPropertyDescriptor(t, n),
          getPrototypeOf: () => Reflect.getPrototypeOf(t),
          has: (e, n) => Reflect.has(t, n),
          ownKeys: () => Reflect.ownKeys(t),
          set: (e, n, i) => ((t[n] = i), delete e[n], !0),
        });
      }
      function Me(t, e = { scriptable: !0, indexable: !0 }) {
        const {
          _scriptable: n = e.scriptable,
          _indexable: i = e.indexable,
          _allKeys: r = e.allKeys,
        } = t;
        return {
          allKeys: r,
          scriptable: n,
          indexable: i,
          isScriptable: T(n) ? n : () => n,
          isIndexable: T(i) ? i : () => i,
        };
      }
      const Pe = (t, e) => (t ? t + E(e) : e),
        Oe = (t, e) =>
          u(e) &&
          'adapters' !== t &&
          (null === Object.getPrototypeOf(e) || e.constructor === Object);
      function Ee(t, e, n) {
        if (Object.prototype.hasOwnProperty.call(t, e)) return t[e];
        const i = n();
        return (t[e] = i), i;
      }
      function Se(t, e, n) {
        return T(t) ? t(e, n) : t;
      }
      const Te = (t, e) =>
        !0 === t ? e : 'string' == typeof t ? O(e, t) : void 0;
      function Ae(t, e, n, i, r) {
        for (const o of e) {
          const e = Te(n, o);
          if (e) {
            t.add(e);
            const o = Se(e._fallback, n, r);
            if (S(o) && o !== n && o !== i) return o;
          } else if (!1 === e && S(i) && n !== i) return null;
        }
        return !1;
      }
      function Ce(t, e, n, i) {
        const r = e._rootScopes,
          o = Se(e._fallback, n, i),
          s = [...t, ...r],
          a = new Set();
        a.add(i);
        let c = Re(a, s, n, o || n, i);
        return (
          null !== c &&
          (!S(o) || o === n || ((c = Re(a, s, o, c, i)), null !== c)) &&
          we(Array.from(a), [''], r, o, () =>
            (function (t, e, n) {
              const i = t._getTarget();
              e in i || (i[e] = {});
              const r = i[e];
              if (h(r) && u(n)) return n;
              return r;
            })(e, n, i),
          )
        );
      }
      function Re(t, e, n, i, r) {
        for (; n; ) n = Ae(t, e, n, i, r);
        return n;
      }
      function De(t, e) {
        for (const n of e) {
          if (!n) continue;
          const e = n[t];
          if (S(e)) return e;
        }
      }
      function Le(t) {
        let e = t._keys;
        return (
          e ||
            (e = t._keys =
              (function (t) {
                const e = new Set();
                for (const n of t)
                  for (const t of Object.keys(n).filter(
                    t => !t.startsWith('_'),
                  ))
                    e.add(t);
                return Array.from(e);
              })(t._scopes)),
          e
        );
      }
      function Ie(t, e, n, i) {
        const { iScale: r } = t,
          { key: o = 'r' } = this._parsing,
          s = new Array(i);
        let a, c, l, h;
        for (a = 0, c = i; a < c; ++a)
          (l = a + n), (h = e[l]), (s[a] = { r: r.parse(O(h, o), l) });
        return s;
      }
      const je = Number.EPSILON || 1e-14,
        $e = (t, e) => e < t.length && !t[e].skip && t[e],
        Ne = t => ('x' === t ? 'y' : 'x');
      function Fe(t, e, n, i) {
        const r = t.skip ? e : t,
          o = e,
          s = n.skip ? e : n,
          a = J(o, r),
          c = J(s, o);
        let l = a / (a + c),
          h = c / (a + c);
        (l = isNaN(l) ? 0 : l), (h = isNaN(h) ? 0 : h);
        const u = i * l,
          f = i * h;
        return {
          previous: { x: o.x - u * (s.x - r.x), y: o.y - u * (s.y - r.y) },
          next: { x: o.x + f * (s.x - r.x), y: o.y + f * (s.y - r.y) },
        };
      }
      function Be(t, e = 'x') {
        const n = Ne(e),
          i = t.length,
          r = Array(i).fill(0),
          o = Array(i);
        let s,
          a,
          c,
          l = $e(t, 0);
        for (s = 0; s < i; ++s)
          if (((a = c), (c = l), (l = $e(t, s + 1)), c)) {
            if (l) {
              const t = l[e] - c[e];
              r[s] = 0 !== t ? (l[n] - c[n]) / t : 0;
            }
            o[s] = a
              ? l
                ? B(r[s - 1]) !== B(r[s])
                  ? 0
                  : (r[s - 1] + r[s]) / 2
                : r[s - 1]
              : r[s];
          }
        !(function (t, e, n) {
          const i = t.length;
          let r,
            o,
            s,
            a,
            c,
            l = $e(t, 0);
          for (let h = 0; h < i - 1; ++h)
            (c = l),
              (l = $e(t, h + 1)),
              c &&
                l &&
                (V(e[h], 0, je)
                  ? (n[h] = n[h + 1] = 0)
                  : ((r = n[h] / e[h]),
                    (o = n[h + 1] / e[h]),
                    (a = Math.pow(r, 2) + Math.pow(o, 2)),
                    a <= 9 ||
                      ((s = 3 / Math.sqrt(a)),
                      (n[h] = r * s * e[h]),
                      (n[h + 1] = o * s * e[h]))));
        })(t, r, o),
          (function (t, e, n = 'x') {
            const i = Ne(n),
              r = t.length;
            let o,
              s,
              a,
              c = $e(t, 0);
            for (let l = 0; l < r; ++l) {
              if (((s = a), (a = c), (c = $e(t, l + 1)), !a)) continue;
              const r = a[n],
                h = a[i];
              s &&
                ((o = (r - s[n]) / 3),
                (a['cp1' + n] = r - o),
                (a['cp1' + i] = h - o * e[l])),
                c &&
                  ((o = (c[n] - r) / 3),
                  (a['cp2' + n] = r + o),
                  (a['cp2' + i] = h + o * e[l]));
            }
          })(t, o, e);
      }
      function ze(t, e, n) {
        return Math.max(Math.min(t, n), e);
      }
      function He(t, e, n, i, r) {
        let o, s, a, c;
        if (
          (e.spanGaps && (t = t.filter(t => !t.skip)),
          'monotone' === e.cubicInterpolationMode)
        )
          Be(t, r);
        else {
          let n = i ? t[t.length - 1] : t[0];
          for (o = 0, s = t.length; o < s; ++o)
            (a = t[o]),
              (c = Fe(
                n,
                a,
                t[Math.min(o + 1, s - (i ? 0 : 1)) % s],
                e.tension,
              )),
              (a.cp1x = c.previous.x),
              (a.cp1y = c.previous.y),
              (a.cp2x = c.next.x),
              (a.cp2y = c.next.y),
              (n = a);
        }
        e.capBezierPoints &&
          (function (t, e) {
            let n,
              i,
              r,
              o,
              s,
              a = Qt(t[0], e);
            for (n = 0, i = t.length; n < i; ++n)
              (s = o),
                (o = a),
                (a = n < i - 1 && Qt(t[n + 1], e)),
                o &&
                  ((r = t[n]),
                  s &&
                    ((r.cp1x = ze(r.cp1x, e.left, e.right)),
                    (r.cp1y = ze(r.cp1y, e.top, e.bottom))),
                  a &&
                    ((r.cp2x = ze(r.cp2x, e.left, e.right)),
                    (r.cp2y = ze(r.cp2y, e.top, e.bottom))));
          })(t, n);
      }
      function Ve() {
        return 'undefined' != typeof window && 'undefined' != typeof document;
      }
      function We(t) {
        let e = t.parentNode;
        return e && '[object ShadowRoot]' === e.toString() && (e = e.host), e;
      }
      function Ue(t, e, n) {
        let i;
        return (
          'string' == typeof t
            ? ((i = parseInt(t, 10)),
              -1 !== t.indexOf('%') && (i = (i / 100) * e.parentNode[n]))
            : (i = t),
          i
        );
      }
      const Ye = t => window.getComputedStyle(t, null);
      const Ge = ['top', 'right', 'bottom', 'left'];
      function qe(t, e, n) {
        const i = {};
        n = n ? '-' + n : '';
        for (let r = 0; r < 4; r++) {
          const o = Ge[r];
          i[o] = parseFloat(t[e + '-' + o + n]) || 0;
        }
        return (i.width = i.left + i.right), (i.height = i.top + i.bottom), i;
      }
      function Je(t, e) {
        if ('native' in t) return t;
        const { canvas: n, currentDevicePixelRatio: i } = e,
          r = Ye(n),
          o = 'border-box' === r.boxSizing,
          s = qe(r, 'padding'),
          a = qe(r, 'border', 'width'),
          {
            x: c,
            y: l,
            box: h,
          } = (function (t, e) {
            const n = t.touches,
              i = n && n.length ? n[0] : t,
              { offsetX: r, offsetY: o } = i;
            let s,
              a,
              c = !1;
            if (
              ((t, e, n) => (t > 0 || e > 0) && (!n || !n.shadowRoot))(
                r,
                o,
                t.target,
              )
            )
              (s = r), (a = o);
            else {
              const t = e.getBoundingClientRect();
              (s = i.clientX - t.left), (a = i.clientY - t.top), (c = !0);
            }
            return { x: s, y: a, box: c };
          })(t, n),
          u = s.left + (h && a.left),
          f = s.top + (h && a.top);
        let { width: d, height: p } = e;
        return (
          o && ((d -= s.width + a.width), (p -= s.height + a.height)),
          {
            x: Math.round((((c - u) / d) * n.width) / i),
            y: Math.round((((l - f) / p) * n.height) / i),
          }
        );
      }
      const Xe = t => Math.round(10 * t) / 10;
      function Ke(t, e, n, i) {
        const r = Ye(t),
          o = qe(r, 'margin'),
          s = Ue(r.maxWidth, t, 'clientWidth') || L,
          a = Ue(r.maxHeight, t, 'clientHeight') || L,
          c = (function (t, e, n) {
            let i, r;
            if (void 0 === e || void 0 === n) {
              const o = We(t);
              if (o) {
                const t = o.getBoundingClientRect(),
                  s = Ye(o),
                  a = qe(s, 'border', 'width'),
                  c = qe(s, 'padding');
                (e = t.width - c.width - a.width),
                  (n = t.height - c.height - a.height),
                  (i = Ue(s.maxWidth, o, 'clientWidth')),
                  (r = Ue(s.maxHeight, o, 'clientHeight'));
              } else (e = t.clientWidth), (n = t.clientHeight);
            }
            return { width: e, height: n, maxWidth: i || L, maxHeight: r || L };
          })(t, e, n);
        let { width: l, height: h } = c;
        if ('content-box' === r.boxSizing) {
          const t = qe(r, 'border', 'width'),
            e = qe(r, 'padding');
          (l -= e.width + t.width), (h -= e.height + t.height);
        }
        return (
          (l = Math.max(0, l - o.width)),
          (h = Math.max(0, i ? Math.floor(l / i) : h - o.height)),
          (l = Xe(Math.min(l, s, c.maxWidth))),
          (h = Xe(Math.min(h, a, c.maxHeight))),
          l && !h && (h = Xe(l / 2)),
          { width: l, height: h }
        );
      }
      function Qe(t, e, n) {
        const i = e || 1,
          r = Math.floor(t.height * i),
          o = Math.floor(t.width * i);
        (t.height = r / i), (t.width = o / i);
        const s = t.canvas;
        return (
          s.style &&
            (n || (!s.style.height && !s.style.width)) &&
            ((s.style.height = t.height + 'px'),
            (s.style.width = t.width + 'px')),
          (t.currentDevicePixelRatio !== i ||
            s.height !== r ||
            s.width !== o) &&
            ((t.currentDevicePixelRatio = i),
            (s.height = r),
            (s.width = o),
            t.ctx.setTransform(i, 0, 0, i, 0, 0),
            !0)
        );
      }
      const Ze = (function () {
        let t = !1;
        try {
          const e = {
            get passive() {
              return (t = !0), !1;
            },
          };
          window.addEventListener('test', null, e),
            window.removeEventListener('test', null, e);
        } catch (t) {}
        return t;
      })();
      function tn(t, e) {
        const n = (function (t, e) {
            return Ye(t).getPropertyValue(e);
          })(t, e),
          i = n && n.match(/^(\d+)(\.\d+)?px$/);
        return i ? +i[1] : void 0;
      }
      function en(t, e, n, i) {
        return { x: t.x + n * (e.x - t.x), y: t.y + n * (e.y - t.y) };
      }
      function nn(t, e, n, i) {
        return {
          x: t.x + n * (e.x - t.x),
          y:
            'middle' === i
              ? n < 0.5
                ? t.y
                : e.y
              : 'after' === i
              ? n < 1
                ? t.y
                : e.y
              : n > 0
              ? e.y
              : t.y,
        };
      }
      function rn(t, e, n, i) {
        const r = { x: t.cp2x, y: t.cp2y },
          o = { x: e.cp1x, y: e.cp1y },
          s = en(t, r, n),
          a = en(r, o, n),
          c = en(o, e, n),
          l = en(s, a, n),
          h = en(a, c, n);
        return en(l, h, n);
      }
      const on = new Map();
      function sn(t, e, n) {
        return (function (t, e) {
          e = e || {};
          const n = t + JSON.stringify(e);
          let i = on.get(n);
          return i || ((i = new Intl.NumberFormat(t, e)), on.set(n, i)), i;
        })(e, n).format(t);
      }
      function an(t, e, n) {
        return t
          ? (function (t, e) {
              return {
                x: n => t + t + e - n,
                setWidth(t) {
                  e = t;
                },
                textAlign: t =>
                  'center' === t ? t : 'right' === t ? 'left' : 'right',
                xPlus: (t, e) => t - e,
                leftForLtr: (t, e) => t - e,
              };
            })(e, n)
          : {
              x: t => t,
              setWidth(t) {},
              textAlign: t => t,
              xPlus: (t, e) => t + e,
              leftForLtr: (t, e) => t,
            };
      }
      function cn(t, e) {
        let n, i;
        ('ltr' !== e && 'rtl' !== e) ||
          ((n = t.canvas.style),
          (i = [
            n.getPropertyValue('direction'),
            n.getPropertyPriority('direction'),
          ]),
          n.setProperty('direction', e, 'important'),
          (t.prevTextDirection = i));
      }
      function ln(t, e) {
        void 0 !== e &&
          (delete t.prevTextDirection,
          t.canvas.style.setProperty('direction', e[0], e[1]));
      }
      function hn(t) {
        return 'angle' === t
          ? { between: Q, compare: X, normalize: K }
          : { between: tt, compare: (t, e) => t - e, normalize: t => t };
      }
      function un({ start: t, end: e, count: n, loop: i, style: r }) {
        return {
          start: t % n,
          end: e % n,
          loop: i && (e - t + 1) % n == 0,
          style: r,
        };
      }
      function fn(t, e, n) {
        if (!n) return [t];
        const { property: i, start: r, end: o } = n,
          s = e.length,
          { compare: a, between: c, normalize: l } = hn(i),
          {
            start: h,
            end: u,
            loop: f,
            style: d,
          } = (function (t, e, n) {
            const { property: i, start: r, end: o } = n,
              { between: s, normalize: a } = hn(i),
              c = e.length;
            let l,
              h,
              { start: u, end: f, loop: d } = t;
            if (d) {
              for (
                u += c, f += c, l = 0, h = c;
                l < h && s(a(e[u % c][i]), r, o);
                ++l
              )
                u--, f--;
              (u %= c), (f %= c);
            }
            return (
              f < u && (f += c), { start: u, end: f, loop: d, style: t.style }
            );
          })(t, e, n),
          p = [];
        let g,
          m,
          v,
          y = !1,
          x = null;
        const b = () => y || (c(r, v, g) && 0 !== a(r, v)),
          _ = () => !y || 0 === a(o, g) || c(o, v, g);
        for (let t = h, n = h; t <= u; ++t)
          (m = e[t % s]),
            m.skip ||
              ((g = l(m[i])),
              g !== v &&
                ((y = c(g, r, o)),
                null === x && b() && (x = 0 === a(g, r) ? t : n),
                null !== x &&
                  _() &&
                  (p.push(
                    un({ start: x, end: t, loop: f, count: s, style: d }),
                  ),
                  (x = null)),
                (n = t),
                (v = g)));
        return (
          null !== x &&
            p.push(un({ start: x, end: u, loop: f, count: s, style: d })),
          p
        );
      }
      function dn(t, e) {
        const n = [],
          i = t.segments;
        for (let r = 0; r < i.length; r++) {
          const o = fn(i[r], t.points, e);
          o.length && n.push(...o);
        }
        return n;
      }
      function pn(t, e, n, i) {
        return i && i.setContext && n
          ? (function (t, e, n, i) {
              const r = t._chart.getContext(),
                o = gn(t.options),
                {
                  _datasetIndex: s,
                  options: { spanGaps: a },
                } = t,
                c = n.length,
                l = [];
              let h = o,
                u = e[0].start,
                f = u;
              function d(t, e, i, r) {
                const o = a ? -1 : 1;
                if (t !== e) {
                  for (t += c; n[t % c].skip; ) t -= o;
                  for (; n[e % c].skip; ) e += o;
                  t % c != e % c &&
                    (l.push({ start: t % c, end: e % c, loop: i, style: r }),
                    (h = r),
                    (u = e % c));
                }
              }
              for (const t of e) {
                u = a ? u : t.start;
                let e,
                  o = n[u % c];
                for (f = u + 1; f <= t.end; f++) {
                  const a = n[f % c];
                  (e = gn(
                    i.setContext(
                      ge(r, {
                        type: 'segment',
                        p0: o,
                        p1: a,
                        p0DataIndex: (f - 1) % c,
                        p1DataIndex: f % c,
                        datasetIndex: s,
                      }),
                    ),
                  )),
                    mn(e, h) && d(u, f - 1, t.loop, h),
                    (o = a),
                    (h = e);
                }
                u < f - 1 && d(u, f - 1, t.loop, h);
              }
              return l;
            })(t, e, n, i)
          : e;
      }
      function gn(t) {
        return {
          backgroundColor: t.backgroundColor,
          borderCapStyle: t.borderCapStyle,
          borderDash: t.borderDash,
          borderDashOffset: t.borderDashOffset,
          borderJoinStyle: t.borderJoinStyle,
          borderWidth: t.borderWidth,
          borderColor: t.borderColor,
        };
      }
      function mn(t, e) {
        return e && JSON.stringify(t) !== JSON.stringify(e);
      }
      /*!
       * Chart.js v3.8.0
       * https://www.chartjs.org
       * (c) 2022 Chart.js Contributors
       * Released under the MIT License
       */ var vn = new (class {
        constructor() {
          (this._request = null),
            (this._charts = new Map()),
            (this._running = !1),
            (this._lastDate = void 0);
        }
        _notify(t, e, n, i) {
          const r = e.listeners[i],
            o = e.duration;
          r.forEach(i =>
            i({
              chart: t,
              initial: e.initial,
              numSteps: o,
              currentStep: Math.min(n - e.start, o),
            }),
          );
        }
        _refresh() {
          this._request ||
            ((this._running = !0),
            (this._request = i.call(window, () => {
              this._update(),
                (this._request = null),
                this._running && this._refresh();
            })));
        }
        _update(t = Date.now()) {
          let e = 0;
          this._charts.forEach((n, i) => {
            if (!n.running || !n.items.length) return;
            const r = n.items;
            let o,
              s = r.length - 1,
              a = !1;
            for (; s >= 0; --s)
              (o = r[s]),
                o._active
                  ? (o._total > n.duration && (n.duration = o._total),
                    o.tick(t),
                    (a = !0))
                  : ((r[s] = r[r.length - 1]), r.pop());
            a && (i.draw(), this._notify(i, n, t, 'progress')),
              r.length ||
                ((n.running = !1),
                this._notify(i, n, t, 'complete'),
                (n.initial = !1)),
              (e += r.length);
          }),
            (this._lastDate = t),
            0 === e && (this._running = !1);
        }
        _getAnims(t) {
          const e = this._charts;
          let n = e.get(t);
          return (
            n ||
              ((n = {
                running: !1,
                initial: !0,
                items: [],
                listeners: { complete: [], progress: [] },
              }),
              e.set(t, n)),
            n
          );
        }
        listen(t, e, n) {
          this._getAnims(t).listeners[e].push(n);
        }
        add(t, e) {
          e && e.length && this._getAnims(t).items.push(...e);
        }
        has(t) {
          return this._getAnims(t).items.length > 0;
        }
        start(t) {
          const e = this._charts.get(t);
          e &&
            ((e.running = !0),
            (e.start = Date.now()),
            (e.duration = e.items.reduce(
              (t, e) => Math.max(t, e._duration),
              0,
            )),
            this._refresh());
        }
        running(t) {
          if (!this._running) return !1;
          const e = this._charts.get(t);
          return !!(e && e.running && e.items.length);
        }
        stop(t) {
          const e = this._charts.get(t);
          if (!e || !e.items.length) return;
          const n = e.items;
          let i = n.length - 1;
          for (; i >= 0; --i) n[i].cancel();
          (e.items = []), this._notify(t, e, Date.now(), 'complete');
        }
        remove(t) {
          return this._charts.delete(t);
        }
      })();
      const yn = {
        boolean: (t, e, n) => (n > 0.5 ? e : t),
        color(t, e, n) {
          const i = Bt(t || 'transparent'),
            r = i.valid && Bt(e || 'transparent');
          return r && r.valid ? r.mix(i, n).hexString() : e;
        },
        number: (t, e, n) => t + (e - t) * n,
      };
      class xn {
        constructor(t, e, n, i) {
          const r = e[n];
          i = pe([t.to, i, r, t.from]);
          const o = pe([t.from, r, i]);
          (this._active = !0),
            (this._fn = t.fn || yn[t.type || typeof o]),
            (this._easing = rt[t.easing] || rt.linear),
            (this._start = Math.floor(Date.now() + (t.delay || 0))),
            (this._duration = this._total = Math.floor(t.duration)),
            (this._loop = !!t.loop),
            (this._target = e),
            (this._prop = n),
            (this._from = o),
            (this._to = i),
            (this._promises = void 0);
        }
        active() {
          return this._active;
        }
        update(t, e, n) {
          if (this._active) {
            this._notify(!1);
            const i = this._target[this._prop],
              r = n - this._start,
              o = this._duration - r;
            (this._start = n),
              (this._duration = Math.floor(Math.max(o, t.duration))),
              (this._total += r),
              (this._loop = !!t.loop),
              (this._to = pe([t.to, e, i, t.from])),
              (this._from = pe([t.from, i, e]));
          }
        }
        cancel() {
          this._active &&
            (this.tick(Date.now()), (this._active = !1), this._notify(!1));
        }
        tick(t) {
          const e = t - this._start,
            n = this._duration,
            i = this._prop,
            r = this._from,
            o = this._loop,
            s = this._to;
          let a;
          if (((this._active = r !== s && (o || e < n)), !this._active))
            return (this._target[i] = s), void this._notify(!0);
          e < 0
            ? (this._target[i] = r)
            : ((a = (e / n) % 2),
              (a = o && a > 1 ? 2 - a : a),
              (a = this._easing(Math.min(1, Math.max(0, a)))),
              (this._target[i] = this._fn(r, s, a)));
        }
        wait() {
          const t = this._promises || (this._promises = []);
          return new Promise((e, n) => {
            t.push({ res: e, rej: n });
          });
        }
        _notify(t) {
          const e = t ? 'res' : 'rej',
            n = this._promises || [];
          for (let t = 0; t < n.length; t++) n[t][e]();
        }
      }
      Yt.set('animation', {
        delay: void 0,
        duration: 1e3,
        easing: 'easeOutQuart',
        fn: void 0,
        from: void 0,
        loop: void 0,
        to: void 0,
        type: void 0,
      });
      const bn = Object.keys(Yt.animation);
      Yt.describe('animation', {
        _fallback: !1,
        _indexable: !1,
        _scriptable: t =>
          'onProgress' !== t && 'onComplete' !== t && 'fn' !== t,
      }),
        Yt.set('animations', {
          colors: {
            type: 'color',
            properties: ['color', 'borderColor', 'backgroundColor'],
          },
          numbers: {
            type: 'number',
            properties: ['x', 'y', 'borderWidth', 'radius', 'tension'],
          },
        }),
        Yt.describe('animations', { _fallback: 'animation' }),
        Yt.set('transitions', {
          active: { animation: { duration: 400 } },
          resize: { animation: { duration: 0 } },
          show: {
            animations: {
              colors: { from: 'transparent' },
              visible: { type: 'boolean', duration: 0 },
            },
          },
          hide: {
            animations: {
              colors: { to: 'transparent' },
              visible: { type: 'boolean', easing: 'linear', fn: t => 0 | t },
            },
          },
        });
      class _n {
        constructor(t, e) {
          (this._chart = t), (this._properties = new Map()), this.configure(e);
        }
        configure(t) {
          if (!u(t)) return;
          const e = this._properties;
          Object.getOwnPropertyNames(t).forEach(n => {
            const i = t[n];
            if (!u(i)) return;
            const r = {};
            for (const t of bn) r[t] = i[t];
            ((h(i.properties) && i.properties) || [n]).forEach(t => {
              (t !== n && e.has(t)) || e.set(t, r);
            });
          });
        }
        _animateOptions(t, e) {
          const n = e.options,
            i = (function (t, e) {
              if (!e) return;
              let n = t.options;
              if (!n) return void (t.options = e);
              n.$shared &&
                (t.options = n =
                  Object.assign({}, n, { $shared: !1, $animations: {} }));
              return n;
            })(t, n);
          if (!i) return [];
          const r = this._createAnimations(i, n);
          return (
            n.$shared &&
              (function (t, e) {
                const n = [],
                  i = Object.keys(e);
                for (let e = 0; e < i.length; e++) {
                  const r = t[i[e]];
                  r && r.active() && n.push(r.wait());
                }
                return Promise.all(n);
              })(t.options.$animations, n).then(
                () => {
                  t.options = n;
                },
                () => {},
              ),
            r
          );
        }
        _createAnimations(t, e) {
          const n = this._properties,
            i = [],
            r = t.$animations || (t.$animations = {}),
            o = Object.keys(e),
            s = Date.now();
          let a;
          for (a = o.length - 1; a >= 0; --a) {
            const c = o[a];
            if ('$' === c.charAt(0)) continue;
            if ('options' === c) {
              i.push(...this._animateOptions(t, e));
              continue;
            }
            const l = e[c];
            let h = r[c];
            const u = n.get(c);
            if (h) {
              if (u && h.active()) {
                h.update(u, l, s);
                continue;
              }
              h.cancel();
            }
            u && u.duration
              ? ((r[c] = h = new xn(u, t, c, l)), i.push(h))
              : (t[c] = l);
          }
          return i;
        }
        update(t, e) {
          if (0 === this._properties.size) return void Object.assign(t, e);
          const n = this._createAnimations(t, e);
          return n.length ? (vn.add(this._chart, n), !0) : void 0;
        }
      }
      function wn(t, e) {
        const n = (t && t.options) || {},
          i = n.reverse,
          r = void 0 === n.min ? e : 0,
          o = void 0 === n.max ? e : 0;
        return { start: i ? o : r, end: i ? r : o };
      }
      function kn(t, e) {
        const n = [],
          i = t._getSortedDatasetMetas(e);
        let r, o;
        for (r = 0, o = i.length; r < o; ++r) n.push(i[r].index);
        return n;
      }
      function Mn(t, e, n, i = {}) {
        const r = t.keys,
          o = 'single' === i.mode;
        let s, a, c, l;
        if (null !== e) {
          for (s = 0, a = r.length; s < a; ++s) {
            if (((c = +r[s]), c === n)) {
              if (i.all) continue;
              break;
            }
            (l = t.values[c]),
              f(l) && (o || 0 === e || B(e) === B(l)) && (e += l);
          }
          return e;
        }
      }
      function Pn(t, e) {
        const n = t && t.options.stacked;
        return n || (void 0 === n && void 0 !== e.stack);
      }
      function On(t, e, n) {
        const i = t[e] || (t[e] = {});
        return i[n] || (i[n] = {});
      }
      function En(t, e, n, i) {
        for (const r of e.getMatchingVisibleMetas(i).reverse()) {
          const e = t[r.index];
          if ((n && e > 0) || (!n && e < 0)) return r.index;
        }
        return null;
      }
      function Sn(t, e) {
        const { chart: n, _cachedMeta: i } = t,
          r = n._stacks || (n._stacks = {}),
          { iScale: o, vScale: s, index: a } = i,
          c = o.axis,
          l = s.axis,
          h = (function (t, e, n) {
            return `${t.id}.${e.id}.${n.stack || n.type}`;
          })(o, s, i),
          u = e.length;
        let f;
        for (let t = 0; t < u; ++t) {
          const n = e[t],
            { [c]: o, [l]: u } = n;
          (f = (n._stacks || (n._stacks = {}))[l] = On(r, h, o)),
            (f[a] = u),
            (f._top = En(f, s, !0, i.type)),
            (f._bottom = En(f, s, !1, i.type));
        }
      }
      function Tn(t, e) {
        const n = t.scales;
        return Object.keys(n)
          .filter(t => n[t].axis === e)
          .shift();
      }
      function An(t, e) {
        const n = t.controller.index,
          i = t.vScale && t.vScale.axis;
        if (i) {
          e = e || t._parsed;
          for (const t of e) {
            const e = t._stacks;
            if (!e || void 0 === e[i] || void 0 === e[i][n]) return;
            delete e[i][n];
          }
        }
      }
      const Cn = t => 'reset' === t || 'none' === t,
        Rn = (t, e) => (e ? t : Object.assign({}, t));
      class Dn {
        constructor(t, e) {
          (this.chart = t),
            (this._ctx = t.ctx),
            (this.index = e),
            (this._cachedDataOpts = {}),
            (this._cachedMeta = this.getMeta()),
            (this._type = this._cachedMeta.type),
            (this.options = void 0),
            (this._parsing = !1),
            (this._data = void 0),
            (this._objectData = void 0),
            (this._sharedOptions = void 0),
            (this._drawStart = void 0),
            (this._drawCount = void 0),
            (this.enableOptionSharing = !1),
            (this.supportsDecimation = !1),
            (this.$context = void 0),
            (this._syncList = []),
            this.initialize();
        }
        initialize() {
          const t = this._cachedMeta;
          this.configure(),
            this.linkScales(),
            (t._stacked = Pn(t.vScale, t)),
            this.addElements();
        }
        updateIndex(t) {
          this.index !== t && An(this._cachedMeta), (this.index = t);
        }
        linkScales() {
          const t = this.chart,
            e = this._cachedMeta,
            n = this.getDataset(),
            i = (t, e, n, i) => ('x' === t ? e : 'r' === t ? i : n),
            r = (e.xAxisID = p(n.xAxisID, Tn(t, 'x'))),
            o = (e.yAxisID = p(n.yAxisID, Tn(t, 'y'))),
            s = (e.rAxisID = p(n.rAxisID, Tn(t, 'r'))),
            a = e.indexAxis,
            c = (e.iAxisID = i(a, r, o, s)),
            l = (e.vAxisID = i(a, o, r, s));
          (e.xScale = this.getScaleForId(r)),
            (e.yScale = this.getScaleForId(o)),
            (e.rScale = this.getScaleForId(s)),
            (e.iScale = this.getScaleForId(c)),
            (e.vScale = this.getScaleForId(l));
        }
        getDataset() {
          return this.chart.data.datasets[this.index];
        }
        getMeta() {
          return this.chart.getDatasetMeta(this.index);
        }
        getScaleForId(t) {
          return this.chart.scales[t];
        }
        _getOtherScale(t) {
          const e = this._cachedMeta;
          return t === e.iScale ? e.vScale : e.iScale;
        }
        reset() {
          this._update('reset');
        }
        _destroy() {
          const t = this._cachedMeta;
          this._data && be(this._data, this), t._stacked && An(t);
        }
        _dataCheck() {
          const t = this.getDataset(),
            e = t.data || (t.data = []),
            n = this._data;
          if (u(e))
            this._data = (function (t) {
              const e = Object.keys(t),
                n = new Array(e.length);
              let i, r, o;
              for (i = 0, r = e.length; i < r; ++i)
                (o = e[i]), (n[i] = { x: o, y: t[o] });
              return n;
            })(e);
          else if (n !== e) {
            if (n) {
              be(n, this);
              const t = this._cachedMeta;
              An(t), (t._parsed = []);
            }
            e &&
              Object.isExtensible(e) &&
              ((r = this),
              (i = e)._chartjs
                ? i._chartjs.listeners.push(r)
                : (Object.defineProperty(i, '_chartjs', {
                    configurable: !0,
                    enumerable: !1,
                    value: { listeners: [r] },
                  }),
                  xe.forEach(t => {
                    const e = '_onData' + E(t),
                      n = i[t];
                    Object.defineProperty(i, t, {
                      configurable: !0,
                      enumerable: !1,
                      value(...t) {
                        const r = n.apply(this, t);
                        return (
                          i._chartjs.listeners.forEach(n => {
                            'function' == typeof n[e] && n[e](...t);
                          }),
                          r
                        );
                      },
                    });
                  }))),
              (this._syncList = []),
              (this._data = e);
          }
          var i, r;
        }
        addElements() {
          const t = this._cachedMeta;
          this._dataCheck(),
            this.datasetElementType &&
              (t.dataset = new this.datasetElementType());
        }
        buildOrUpdateElements(t) {
          const e = this._cachedMeta,
            n = this.getDataset();
          let i = !1;
          this._dataCheck();
          const r = e._stacked;
          (e._stacked = Pn(e.vScale, e)),
            e.stack !== n.stack && ((i = !0), An(e), (e.stack = n.stack)),
            this._resyncElements(t),
            (i || r !== e._stacked) && Sn(this, e._parsed);
        }
        configure() {
          const t = this.chart.config,
            e = t.datasetScopeKeys(this._type),
            n = t.getOptionScopes(this.getDataset(), e, !0);
          (this.options = t.createResolver(n, this.getContext())),
            (this._parsing = this.options.parsing),
            (this._cachedDataOpts = {});
        }
        parse(t, e) {
          const { _cachedMeta: n, _data: i } = this,
            { iScale: r, _stacked: o } = n,
            s = r.axis;
          let a,
            c,
            l,
            f = (0 === t && e === i.length) || n._sorted,
            d = t > 0 && n._parsed[t - 1];
          if (!1 === this._parsing) (n._parsed = i), (n._sorted = !0), (l = i);
          else {
            l = h(i[t])
              ? this.parseArrayData(n, i, t, e)
              : u(i[t])
              ? this.parseObjectData(n, i, t, e)
              : this.parsePrimitiveData(n, i, t, e);
            const r = () => null === c[s] || (d && c[s] < d[s]);
            for (a = 0; a < e; ++a)
              (n._parsed[a + t] = c = l[a]), f && (r() && (f = !1), (d = c));
            n._sorted = f;
          }
          o && Sn(this, l);
        }
        parsePrimitiveData(t, e, n, i) {
          const { iScale: r, vScale: o } = t,
            s = r.axis,
            a = o.axis,
            c = r.getLabels(),
            l = r === o,
            h = new Array(i);
          let u, f, d;
          for (u = 0, f = i; u < f; ++u)
            (d = u + n),
              (h[u] = { [s]: l || r.parse(c[d], d), [a]: o.parse(e[d], d) });
          return h;
        }
        parseArrayData(t, e, n, i) {
          const { xScale: r, yScale: o } = t,
            s = new Array(i);
          let a, c, l, h;
          for (a = 0, c = i; a < c; ++a)
            (l = a + n),
              (h = e[l]),
              (s[a] = { x: r.parse(h[0], l), y: o.parse(h[1], l) });
          return s;
        }
        parseObjectData(t, e, n, i) {
          const { xScale: r, yScale: o } = t,
            { xAxisKey: s = 'x', yAxisKey: a = 'y' } = this._parsing,
            c = new Array(i);
          let l, h, u, f;
          for (l = 0, h = i; l < h; ++l)
            (u = l + n),
              (f = e[u]),
              (c[l] = { x: r.parse(O(f, s), u), y: o.parse(O(f, a), u) });
          return c;
        }
        getParsed(t) {
          return this._cachedMeta._parsed[t];
        }
        getDataElement(t) {
          return this._cachedMeta.data[t];
        }
        applyStack(t, e, n) {
          const i = this.chart,
            r = this._cachedMeta,
            o = e[t.axis];
          return Mn(
            { keys: kn(i, !0), values: e._stacks[t.axis] },
            o,
            r.index,
            { mode: n },
          );
        }
        updateRangeFromParsed(t, e, n, i) {
          const r = n[e.axis];
          let o = null === r ? NaN : r;
          const s = i && n._stacks[e.axis];
          i && s && ((i.values = s), (o = Mn(i, r, this._cachedMeta.index))),
            (t.min = Math.min(t.min, o)),
            (t.max = Math.max(t.max, o));
        }
        getMinMax(t, e) {
          const n = this._cachedMeta,
            i = n._parsed,
            r = n._sorted && t === n.iScale,
            o = i.length,
            s = this._getOtherScale(t),
            a = ((t, e, n) =>
              t &&
              !e.hidden &&
              e._stacked && { keys: kn(n, !0), values: null })(
              e,
              n,
              this.chart,
            ),
            c = {
              min: Number.POSITIVE_INFINITY,
              max: Number.NEGATIVE_INFINITY,
            },
            { min: l, max: h } = (function (t) {
              const {
                min: e,
                max: n,
                minDefined: i,
                maxDefined: r,
              } = t.getUserBounds();
              return {
                min: i ? e : Number.NEGATIVE_INFINITY,
                max: r ? n : Number.POSITIVE_INFINITY,
              };
            })(s);
          let u, d;
          function p() {
            d = i[u];
            const e = d[s.axis];
            return !f(d[t.axis]) || l > e || h < e;
          }
          for (
            u = 0;
            u < o && (p() || (this.updateRangeFromParsed(c, t, d, a), !r));
            ++u
          );
          if (r)
            for (u = o - 1; u >= 0; --u)
              if (!p()) {
                this.updateRangeFromParsed(c, t, d, a);
                break;
              }
          return c;
        }
        getAllParsedValues(t) {
          const e = this._cachedMeta._parsed,
            n = [];
          let i, r, o;
          for (i = 0, r = e.length; i < r; ++i)
            (o = e[i][t.axis]), f(o) && n.push(o);
          return n;
        }
        getMaxOverflow() {
          return !1;
        }
        getLabelAndValue(t) {
          const e = this._cachedMeta,
            n = e.iScale,
            i = e.vScale,
            r = this.getParsed(t);
          return {
            label: n ? '' + n.getLabelForValue(r[n.axis]) : '',
            value: i ? '' + i.getLabelForValue(r[i.axis]) : '',
          };
        }
        _update(t) {
          const e = this._cachedMeta;
          this.update(t || 'default'),
            (e._clip = (function (t) {
              let e, n, i, r;
              return (
                u(t)
                  ? ((e = t.top), (n = t.right), (i = t.bottom), (r = t.left))
                  : (e = n = i = r = t),
                { top: e, right: n, bottom: i, left: r, disabled: !1 === t }
              );
            })(
              p(
                this.options.clip,
                (function (t, e, n) {
                  if (!1 === n) return !1;
                  const i = wn(t, n),
                    r = wn(e, n);
                  return {
                    top: r.end,
                    right: i.end,
                    bottom: r.start,
                    left: i.start,
                  };
                })(e.xScale, e.yScale, this.getMaxOverflow()),
              ),
            ));
        }
        update(t) {}
        draw() {
          const t = this._ctx,
            e = this.chart,
            n = this._cachedMeta,
            i = n.data || [],
            r = e.chartArea,
            o = [],
            s = this._drawStart || 0,
            a = this._drawCount || i.length - s,
            c = this.options.drawActiveElementsOnTop;
          let l;
          for (n.dataset && n.dataset.draw(t, r, s, a), l = s; l < s + a; ++l) {
            const e = i[l];
            e.hidden || (e.active && c ? o.push(e) : e.draw(t, r));
          }
          for (l = 0; l < o.length; ++l) o[l].draw(t, r);
        }
        getStyle(t, e) {
          const n = e ? 'active' : 'default';
          return void 0 === t && this._cachedMeta.dataset
            ? this.resolveDatasetElementOptions(n)
            : this.resolveDataElementOptions(t || 0, n);
        }
        getContext(t, e, n) {
          const i = this.getDataset();
          let r;
          if (t >= 0 && t < this._cachedMeta.data.length) {
            const e = this._cachedMeta.data[t];
            (r =
              e.$context ||
              (e.$context = (function (t, e, n) {
                return ge(t, {
                  active: !1,
                  dataIndex: e,
                  parsed: void 0,
                  raw: void 0,
                  element: n,
                  index: e,
                  mode: 'default',
                  type: 'data',
                });
              })(this.getContext(), t, e))),
              (r.parsed = this.getParsed(t)),
              (r.raw = i.data[t]),
              (r.index = r.dataIndex = t);
          } else
            (r =
              this.$context ||
              (this.$context = (function (t, e) {
                return ge(t, {
                  active: !1,
                  dataset: void 0,
                  datasetIndex: e,
                  index: e,
                  mode: 'default',
                  type: 'dataset',
                });
              })(this.chart.getContext(), this.index))),
              (r.dataset = i),
              (r.index = r.datasetIndex = this.index);
          return (r.active = !!e), (r.mode = n), r;
        }
        resolveDatasetElementOptions(t) {
          return this._resolveElementOptions(this.datasetElementType.id, t);
        }
        resolveDataElementOptions(t, e) {
          return this._resolveElementOptions(this.dataElementType.id, e, t);
        }
        _resolveElementOptions(t, e = 'default', n) {
          const i = 'active' === e,
            r = this._cachedDataOpts,
            o = t + '-' + e,
            s = r[o],
            a = this.enableOptionSharing && S(n);
          if (s) return Rn(s, a);
          const c = this.chart.config,
            l = c.datasetElementScopeKeys(this._type, t),
            h = i ? [t + 'Hover', 'hover', t, ''] : [t, ''],
            u = c.getOptionScopes(this.getDataset(), l),
            f = Object.keys(Yt.elements[t]),
            d = c.resolveNamedOptions(u, f, () => this.getContext(n, i), h);
          return (
            d.$shared && ((d.$shared = a), (r[o] = Object.freeze(Rn(d, a)))), d
          );
        }
        _resolveAnimations(t, e, n) {
          const i = this.chart,
            r = this._cachedDataOpts,
            o = 'animation-' + e,
            s = r[o];
          if (s) return s;
          let a;
          if (!1 !== i.options.animation) {
            const i = this.chart.config,
              r = i.datasetAnimationScopeKeys(this._type, e),
              o = i.getOptionScopes(this.getDataset(), r);
            a = i.createResolver(o, this.getContext(t, n, e));
          }
          const c = new _n(i, a && a.animations);
          return a && a._cacheable && (r[o] = Object.freeze(c)), c;
        }
        getSharedOptions(t) {
          if (t.$shared)
            return (
              this._sharedOptions ||
              (this._sharedOptions = Object.assign({}, t))
            );
        }
        includeOptions(t, e) {
          return !e || Cn(t) || this.chart._animationsDisabled;
        }
        updateElement(t, e, n, i) {
          Cn(i)
            ? Object.assign(t, n)
            : this._resolveAnimations(e, i).update(t, n);
        }
        updateSharedOptions(t, e, n) {
          t && !Cn(e) && this._resolveAnimations(void 0, e).update(t, n);
        }
        _setStyle(t, e, n, i) {
          t.active = i;
          const r = this.getStyle(e, i);
          this._resolveAnimations(e, n, i).update(t, {
            options: (!i && this.getSharedOptions(r)) || r,
          });
        }
        removeHoverStyle(t, e, n) {
          this._setStyle(t, n, 'active', !1);
        }
        setHoverStyle(t, e, n) {
          this._setStyle(t, n, 'active', !0);
        }
        _removeDatasetHoverStyle() {
          const t = this._cachedMeta.dataset;
          t && this._setStyle(t, void 0, 'active', !1);
        }
        _setDatasetHoverStyle() {
          const t = this._cachedMeta.dataset;
          t && this._setStyle(t, void 0, 'active', !0);
        }
        _resyncElements(t) {
          const e = this._data,
            n = this._cachedMeta.data;
          for (const [t, e, n] of this._syncList) this[t](e, n);
          this._syncList = [];
          const i = n.length,
            r = e.length,
            o = Math.min(r, i);
          o && this.parse(0, o),
            r > i
              ? this._insertElements(i, r - i, t)
              : r < i && this._removeElements(r, i - r);
        }
        _insertElements(t, e, n = !0) {
          const i = this._cachedMeta,
            r = i.data,
            o = t + e;
          let s;
          const a = t => {
            for (t.length += e, s = t.length - 1; s >= o; s--) t[s] = t[s - e];
          };
          for (a(r), s = t; s < o; ++s) r[s] = new this.dataElementType();
          this._parsing && a(i._parsed),
            this.parse(t, e),
            n && this.updateElements(r, t, e, 'reset');
        }
        updateElements(t, e, n, i) {}
        _removeElements(t, e) {
          const n = this._cachedMeta;
          if (this._parsing) {
            const i = n._parsed.splice(t, e);
            n._stacked && An(n, i);
          }
          n.data.splice(t, e);
        }
        _sync(t) {
          if (this._parsing) this._syncList.push(t);
          else {
            const [e, n, i] = t;
            this[e](n, i);
          }
          this.chart._dataChanges.push([this.index, ...t]);
        }
        _onDataPush() {
          const t = arguments.length;
          this._sync(['_insertElements', this.getDataset().data.length - t, t]);
        }
        _onDataPop() {
          this._sync(['_removeElements', this._cachedMeta.data.length - 1, 1]);
        }
        _onDataShift() {
          this._sync(['_removeElements', 0, 1]);
        }
        _onDataSplice(t, e) {
          e && this._sync(['_removeElements', t, e]);
          const n = arguments.length - 2;
          n && this._sync(['_insertElements', t, n]);
        }
        _onDataUnshift() {
          this._sync(['_insertElements', 0, arguments.length]);
        }
      }
      function Ln(t) {
        const e = t.iScale,
          n = (function (t, e) {
            if (!t._cache.$bar) {
              const n = t.getMatchingVisibleMetas(e);
              let i = [];
              for (let e = 0, r = n.length; e < r; e++)
                i = i.concat(n[e].controller.getAllParsedValues(t));
              t._cache.$bar = _e(i.sort((t, e) => t - e));
            }
            return t._cache.$bar;
          })(e, t.type);
        let i,
          r,
          o,
          s,
          a = e._length;
        const c = () => {
          32767 !== o &&
            -32768 !== o &&
            (S(s) && (a = Math.min(a, Math.abs(o - s) || a)), (s = o));
        };
        for (i = 0, r = n.length; i < r; ++i)
          (o = e.getPixelForValue(n[i])), c();
        for (s = void 0, i = 0, r = e.ticks.length; i < r; ++i)
          (o = e.getPixelForTick(i)), c();
        return a;
      }
      function In(t, e, n, i) {
        return (
          h(t)
            ? (function (t, e, n, i) {
                const r = n.parse(t[0], i),
                  o = n.parse(t[1], i),
                  s = Math.min(r, o),
                  a = Math.max(r, o);
                let c = s,
                  l = a;
                Math.abs(s) > Math.abs(a) && ((c = a), (l = s)),
                  (e[n.axis] = l),
                  (e._custom = {
                    barStart: c,
                    barEnd: l,
                    start: r,
                    end: o,
                    min: s,
                    max: a,
                  });
              })(t, e, n, i)
            : (e[n.axis] = n.parse(t, i)),
          e
        );
      }
      function jn(t, e, n, i) {
        const r = t.iScale,
          o = t.vScale,
          s = r.getLabels(),
          a = r === o,
          c = [];
        let l, h, u, f;
        for (l = n, h = n + i; l < h; ++l)
          (f = e[l]),
            (u = {}),
            (u[r.axis] = a || r.parse(s[l], l)),
            c.push(In(f, u, o, l));
        return c;
      }
      function $n(t) {
        return t && void 0 !== t.barStart && void 0 !== t.barEnd;
      }
      function Nn(t, e, n, i) {
        let r = e.borderSkipped;
        const o = {};
        if (!r) return void (t.borderSkipped = o);
        const {
          start: s,
          end: a,
          reverse: c,
          top: l,
          bottom: h,
        } = (function (t) {
          let e, n, i, r, o;
          return (
            t.horizontal
              ? ((e = t.base > t.x), (n = 'left'), (i = 'right'))
              : ((e = t.base < t.y), (n = 'bottom'), (i = 'top')),
            e ? ((r = 'end'), (o = 'start')) : ((r = 'start'), (o = 'end')),
            { start: n, end: i, reverse: e, top: r, bottom: o }
          );
        })(t);
        'middle' === r &&
          n &&
          ((t.enableBorderRadius = !0),
          (n._top || 0) === i
            ? (r = l)
            : (n._bottom || 0) === i
            ? (r = h)
            : ((o[Fn(h, s, a, c)] = !0), (r = l))),
          (o[Fn(r, s, a, c)] = !0),
          (t.borderSkipped = o);
      }
      function Fn(t, e, n, i) {
        var r, o, s;
        return (
          i
            ? ((s = n),
              (t = Bn((t = (r = t) === (o = e) ? s : r === s ? o : r), n, e)))
            : (t = Bn(t, e, n)),
          t
        );
      }
      function Bn(t, e, n) {
        return 'start' === t ? e : 'end' === t ? n : t;
      }
      function zn(t, { inflateAmount: e }, n) {
        t.inflateAmount = 'auto' === e ? (1 === n ? 0.33 : 0) : e;
      }
      (Dn.defaults = {}),
        (Dn.prototype.datasetElementType = null),
        (Dn.prototype.dataElementType = null);
      class Hn extends Dn {
        parsePrimitiveData(t, e, n, i) {
          return jn(t, e, n, i);
        }
        parseArrayData(t, e, n, i) {
          return jn(t, e, n, i);
        }
        parseObjectData(t, e, n, i) {
          const { iScale: r, vScale: o } = t,
            { xAxisKey: s = 'x', yAxisKey: a = 'y' } = this._parsing,
            c = 'x' === r.axis ? s : a,
            l = 'x' === o.axis ? s : a,
            h = [];
          let u, f, d, p;
          for (u = n, f = n + i; u < f; ++u)
            (p = e[u]),
              (d = {}),
              (d[r.axis] = r.parse(O(p, c), u)),
              h.push(In(O(p, l), d, o, u));
          return h;
        }
        updateRangeFromParsed(t, e, n, i) {
          super.updateRangeFromParsed(t, e, n, i);
          const r = n._custom;
          r &&
            e === this._cachedMeta.vScale &&
            ((t.min = Math.min(t.min, r.min)),
            (t.max = Math.max(t.max, r.max)));
        }
        getMaxOverflow() {
          return 0;
        }
        getLabelAndValue(t) {
          const e = this._cachedMeta,
            { iScale: n, vScale: i } = e,
            r = this.getParsed(t),
            o = r._custom,
            s = $n(o)
              ? '[' + o.start + ', ' + o.end + ']'
              : '' + i.getLabelForValue(r[i.axis]);
          return { label: '' + n.getLabelForValue(r[n.axis]), value: s };
        }
        initialize() {
          (this.enableOptionSharing = !0), super.initialize();
          this._cachedMeta.stack = this.getDataset().stack;
        }
        update(t) {
          const e = this._cachedMeta;
          this.updateElements(e.data, 0, e.data.length, t);
        }
        updateElements(t, e, n, i) {
          const r = 'reset' === i,
            {
              index: o,
              _cachedMeta: { vScale: s },
            } = this,
            a = s.getBasePixel(),
            c = s.isHorizontal(),
            h = this._getRuler(),
            u = this.resolveDataElementOptions(e, i),
            f = this.getSharedOptions(u),
            d = this.includeOptions(i, f);
          this.updateSharedOptions(f, i, u);
          for (let u = e; u < e + n; u++) {
            const e = this.getParsed(u),
              n =
                r || l(e[s.axis])
                  ? { base: a, head: a }
                  : this._calculateBarValuePixels(u),
              p = this._calculateBarIndexPixels(u, h),
              g = (e._stacks || {})[s.axis],
              m = {
                horizontal: c,
                base: n.base,
                enableBorderRadius:
                  !g || $n(e._custom) || o === g._top || o === g._bottom,
                x: c ? n.head : p.center,
                y: c ? p.center : n.head,
                height: c ? p.size : Math.abs(n.size),
                width: c ? Math.abs(n.size) : p.size,
              };
            d &&
              (m.options =
                f ||
                this.resolveDataElementOptions(u, t[u].active ? 'active' : i));
            const v = m.options || t[u].options;
            Nn(m, v, g, o),
              zn(m, v, h.ratio),
              this.updateElement(t[u], u, m, i);
          }
        }
        _getStacks(t, e) {
          const n = this._cachedMeta.iScale,
            i = n.getMatchingVisibleMetas(this._type),
            r = n.options.stacked,
            o = i.length,
            s = [];
          let a, c;
          for (a = 0; a < o; ++a)
            if (((c = i[a]), c.controller.options.grouped)) {
              if (void 0 !== e) {
                const t =
                  c.controller.getParsed(e)[
                    c.controller._cachedMeta.vScale.axis
                  ];
                if (l(t) || isNaN(t)) continue;
              }
              if (
                ((!1 === r ||
                  -1 === s.indexOf(c.stack) ||
                  (void 0 === r && void 0 === c.stack)) &&
                  s.push(c.stack),
                c.index === t)
              )
                break;
            }
          return s.length || s.push(void 0), s;
        }
        _getStackCount(t) {
          return this._getStacks(void 0, t).length;
        }
        _getStackIndex(t, e, n) {
          const i = this._getStacks(t, n),
            r = void 0 !== e ? i.indexOf(e) : -1;
          return -1 === r ? i.length - 1 : r;
        }
        _getRuler() {
          const t = this.options,
            e = this._cachedMeta,
            n = e.iScale,
            i = [];
          let r, o;
          for (r = 0, o = e.data.length; r < o; ++r)
            i.push(n.getPixelForValue(this.getParsed(r)[n.axis], r));
          const s = t.barThickness;
          return {
            min: s || Ln(e),
            pixels: i,
            start: n._startPixel,
            end: n._endPixel,
            stackCount: this._getStackCount(),
            scale: n,
            grouped: t.grouped,
            ratio: s ? 1 : t.categoryPercentage * t.barPercentage,
          };
        }
        _calculateBarValuePixels(t) {
          const {
              _cachedMeta: { vScale: e, _stacked: n },
              options: { base: i, minBarLength: r },
            } = this,
            o = i || 0,
            s = this.getParsed(t),
            a = s._custom,
            c = $n(a);
          let h,
            u,
            f = s[e.axis],
            d = 0,
            p = n ? this.applyStack(e, s, n) : f;
          p !== f && ((d = p - f), (p = f)),
            c &&
              ((f = a.barStart),
              (p = a.barEnd - a.barStart),
              0 !== f && B(f) !== B(a.barEnd) && (d = 0),
              (d += f));
          const g = l(i) || c ? d : i;
          let m = e.getPixelForValue(g);
          if (
            ((h = this.chart.getDataVisibility(t)
              ? e.getPixelForValue(d + p)
              : m),
            (u = h - m),
            Math.abs(u) < r)
          ) {
            (u =
              (function (t, e, n) {
                return 0 !== t
                  ? B(t)
                  : (e.isHorizontal() ? 1 : -1) * (e.min >= n ? 1 : -1);
              })(u, e, o) * r),
              f === o && (m -= u / 2);
            const t = e.getPixelForDecimal(0),
              n = e.getPixelForDecimal(1),
              i = Math.min(t, n),
              s = Math.max(t, n);
            (m = Math.max(Math.min(m, s), i)), (h = m + u);
          }
          if (m === e.getPixelForValue(o)) {
            const t = (B(u) * e.getLineWidthForValue(o)) / 2;
            (m += t), (u -= t);
          }
          return { size: u, base: m, head: h, center: h + u / 2 };
        }
        _calculateBarIndexPixels(t, e) {
          const n = e.scale,
            i = this.options,
            r = i.skipNull,
            o = p(i.maxBarThickness, 1 / 0);
          let s, a;
          if (e.grouped) {
            const n = r ? this._getStackCount(t) : e.stackCount,
              c =
                'flex' === i.barThickness
                  ? (function (t, e, n, i) {
                      const r = e.pixels,
                        o = r[t];
                      let s = t > 0 ? r[t - 1] : null,
                        a = t < r.length - 1 ? r[t + 1] : null;
                      const c = n.categoryPercentage;
                      null === s &&
                        (s = o - (null === a ? e.end - e.start : a - o)),
                        null === a && (a = o + o - s);
                      const l = o - ((o - Math.min(s, a)) / 2) * c;
                      return {
                        chunk: ((Math.abs(a - s) / 2) * c) / i,
                        ratio: n.barPercentage,
                        start: l,
                      };
                    })(t, e, i, n)
                  : (function (t, e, n, i) {
                      const r = n.barThickness;
                      let o, s;
                      return (
                        l(r)
                          ? ((o = e.min * n.categoryPercentage),
                            (s = n.barPercentage))
                          : ((o = r * i), (s = 1)),
                        { chunk: o / i, ratio: s, start: e.pixels[t] - o / 2 }
                      );
                    })(t, e, i, n),
              h = this._getStackIndex(
                this.index,
                this._cachedMeta.stack,
                r ? t : void 0,
              );
            (s = c.start + c.chunk * h + c.chunk / 2),
              (a = Math.min(o, c.chunk * c.ratio));
          } else
            (s = n.getPixelForValue(this.getParsed(t)[n.axis], t)),
              (a = Math.min(o, e.min * e.ratio));
          return { base: s - a / 2, head: s + a / 2, center: s, size: a };
        }
        draw() {
          const t = this._cachedMeta,
            e = t.vScale,
            n = t.data,
            i = n.length;
          let r = 0;
          for (; r < i; ++r)
            null !== this.getParsed(r)[e.axis] && n[r].draw(this._ctx);
        }
      }
      (Hn.id = 'bar'),
        (Hn.defaults = {
          datasetElementType: !1,
          dataElementType: 'bar',
          categoryPercentage: 0.8,
          barPercentage: 0.9,
          grouped: !0,
          animations: {
            numbers: {
              type: 'number',
              properties: ['x', 'y', 'base', 'width', 'height'],
            },
          },
        }),
        (Hn.overrides = {
          scales: {
            _index_: { type: 'category', offset: !0, grid: { offset: !0 } },
            _value_: { type: 'linear', beginAtZero: !0 },
          },
        });
      class Vn extends Dn {
        initialize() {
          (this.enableOptionSharing = !0), super.initialize();
        }
        parsePrimitiveData(t, e, n, i) {
          const r = super.parsePrimitiveData(t, e, n, i);
          for (let t = 0; t < r.length; t++)
            r[t]._custom = this.resolveDataElementOptions(t + n).radius;
          return r;
        }
        parseArrayData(t, e, n, i) {
          const r = super.parseArrayData(t, e, n, i);
          for (let t = 0; t < r.length; t++) {
            const i = e[n + t];
            r[t]._custom = p(
              i[2],
              this.resolveDataElementOptions(t + n).radius,
            );
          }
          return r;
        }
        parseObjectData(t, e, n, i) {
          const r = super.parseObjectData(t, e, n, i);
          for (let t = 0; t < r.length; t++) {
            const i = e[n + t];
            r[t]._custom = p(
              i && i.r && +i.r,
              this.resolveDataElementOptions(t + n).radius,
            );
          }
          return r;
        }
        getMaxOverflow() {
          const t = this._cachedMeta.data;
          let e = 0;
          for (let n = t.length - 1; n >= 0; --n)
            e = Math.max(e, t[n].size(this.resolveDataElementOptions(n)) / 2);
          return e > 0 && e;
        }
        getLabelAndValue(t) {
          const e = this._cachedMeta,
            { xScale: n, yScale: i } = e,
            r = this.getParsed(t),
            o = n.getLabelForValue(r.x),
            s = i.getLabelForValue(r.y),
            a = r._custom;
          return {
            label: e.label,
            value: '(' + o + ', ' + s + (a ? ', ' + a : '') + ')',
          };
        }
        update(t) {
          const e = this._cachedMeta.data;
          this.updateElements(e, 0, e.length, t);
        }
        updateElements(t, e, n, i) {
          const r = 'reset' === i,
            { iScale: o, vScale: s } = this._cachedMeta,
            a = this.resolveDataElementOptions(e, i),
            c = this.getSharedOptions(a),
            l = this.includeOptions(i, c),
            h = o.axis,
            u = s.axis;
          for (let a = e; a < e + n; a++) {
            const e = t[a],
              n = !r && this.getParsed(a),
              c = {},
              f = (c[h] = r
                ? o.getPixelForDecimal(0.5)
                : o.getPixelForValue(n[h])),
              d = (c[u] = r ? s.getBasePixel() : s.getPixelForValue(n[u]));
            (c.skip = isNaN(f) || isNaN(d)),
              l &&
                ((c.options = this.resolveDataElementOptions(
                  a,
                  e.active ? 'active' : i,
                )),
                r && (c.options.radius = 0)),
              this.updateElement(e, a, c, i);
          }
          this.updateSharedOptions(c, i, a);
        }
        resolveDataElementOptions(t, e) {
          const n = this.getParsed(t);
          let i = super.resolveDataElementOptions(t, e);
          i.$shared && (i = Object.assign({}, i, { $shared: !1 }));
          const r = i.radius;
          return (
            'active' !== e && (i.radius = 0),
            (i.radius += p(n && n._custom, r)),
            i
          );
        }
      }
      (Vn.id = 'bubble'),
        (Vn.defaults = {
          datasetElementType: !1,
          dataElementType: 'point',
          animations: {
            numbers: {
              type: 'number',
              properties: ['x', 'y', 'borderWidth', 'radius'],
            },
          },
        }),
        (Vn.overrides = {
          scales: { x: { type: 'linear' }, y: { type: 'linear' } },
          plugins: { tooltip: { callbacks: { title: () => '' } } },
        });
      class Wn extends Dn {
        constructor(t, e) {
          super(t, e),
            (this.enableOptionSharing = !0),
            (this.innerRadius = void 0),
            (this.outerRadius = void 0),
            (this.offsetX = void 0),
            (this.offsetY = void 0);
        }
        linkScales() {}
        parse(t, e) {
          const n = this.getDataset().data,
            i = this._cachedMeta;
          if (!1 === this._parsing) i._parsed = n;
          else {
            let r,
              o,
              s = t => +n[t];
            if (u(n[t])) {
              const { key: t = 'value' } = this._parsing;
              s = e => +O(n[e], t);
            }
            for (r = t, o = t + e; r < o; ++r) i._parsed[r] = s(r);
          }
        }
        _getRotation() {
          return U(this.options.rotation - 90);
        }
        _getCircumference() {
          return U(this.options.circumference);
        }
        _getRotationExtents() {
          let t = R,
            e = -R;
          for (let n = 0; n < this.chart.data.datasets.length; ++n)
            if (this.chart.isDatasetVisible(n)) {
              const i = this.chart.getDatasetMeta(n).controller,
                r = i._getRotation(),
                o = i._getCircumference();
              (t = Math.min(t, r)), (e = Math.max(e, r + o));
            }
          return { rotation: t, circumference: e - t };
        }
        update(t) {
          const e = this.chart,
            { chartArea: n } = e,
            i = this._cachedMeta,
            r = i.data,
            o =
              this.getMaxBorderWidth() +
              this.getMaxOffset(r) +
              this.options.spacing,
            s = Math.max((Math.min(n.width, n.height) - o) / 2, 0),
            a = Math.min(
              ((c = this.options.cutout),
              (l = s),
              'string' == typeof c && c.endsWith('%')
                ? parseFloat(c) / 100
                : c / l),
              1,
            );
          var c, l;
          const h = this._getRingWeight(this.index),
            { circumference: u, rotation: f } = this._getRotationExtents(),
            {
              ratioX: d,
              ratioY: p,
              offsetX: m,
              offsetY: v,
            } = (function (t, e, n) {
              let i = 1,
                r = 1,
                o = 0,
                s = 0;
              if (e < R) {
                const a = t,
                  c = a + e,
                  l = Math.cos(a),
                  h = Math.sin(a),
                  u = Math.cos(c),
                  f = Math.sin(c),
                  d = (t, e, i) =>
                    Q(t, a, c, !0) ? 1 : Math.max(e, e * n, i, i * n),
                  p = (t, e, i) =>
                    Q(t, a, c, !0) ? -1 : Math.min(e, e * n, i, i * n),
                  g = d(0, l, u),
                  m = d(j, h, f),
                  v = p(C, l, u),
                  y = p(C + j, h, f);
                (i = (g - v) / 2),
                  (r = (m - y) / 2),
                  (o = -(g + v) / 2),
                  (s = -(m + y) / 2);
              }
              return { ratioX: i, ratioY: r, offsetX: o, offsetY: s };
            })(f, u, a),
            y = (n.width - o) / d,
            x = (n.height - o) / p,
            b = Math.max(Math.min(y, x) / 2, 0),
            _ = g(this.options.radius, b),
            w = (_ - Math.max(_ * a, 0)) / this._getVisibleDatasetWeightTotal();
          (this.offsetX = m * _),
            (this.offsetY = v * _),
            (i.total = this.calculateTotal()),
            (this.outerRadius = _ - w * this._getRingWeightOffset(this.index)),
            (this.innerRadius = Math.max(this.outerRadius - w * h, 0)),
            this.updateElements(r, 0, r.length, t);
        }
        _circumference(t, e) {
          const n = this.options,
            i = this._cachedMeta,
            r = this._getCircumference();
          return (e && n.animation.animateRotate) ||
            !this.chart.getDataVisibility(t) ||
            null === i._parsed[t] ||
            i.data[t].hidden
            ? 0
            : this.calculateCircumference((i._parsed[t] * r) / R);
        }
        updateElements(t, e, n, i) {
          const r = 'reset' === i,
            o = this.chart,
            s = o.chartArea,
            a = o.options.animation,
            c = (s.left + s.right) / 2,
            l = (s.top + s.bottom) / 2,
            h = r && a.animateScale,
            u = h ? 0 : this.innerRadius,
            f = h ? 0 : this.outerRadius,
            d = this.resolveDataElementOptions(e, i),
            p = this.getSharedOptions(d),
            g = this.includeOptions(i, p);
          let m,
            v = this._getRotation();
          for (m = 0; m < e; ++m) v += this._circumference(m, r);
          for (m = e; m < e + n; ++m) {
            const e = this._circumference(m, r),
              n = t[m],
              o = {
                x: c + this.offsetX,
                y: l + this.offsetY,
                startAngle: v,
                endAngle: v + e,
                circumference: e,
                outerRadius: f,
                innerRadius: u,
              };
            g &&
              (o.options =
                p ||
                this.resolveDataElementOptions(m, n.active ? 'active' : i)),
              (v += e),
              this.updateElement(n, m, o, i);
          }
          this.updateSharedOptions(p, i, d);
        }
        calculateTotal() {
          const t = this._cachedMeta,
            e = t.data;
          let n,
            i = 0;
          for (n = 0; n < e.length; n++) {
            const r = t._parsed[n];
            null === r ||
              isNaN(r) ||
              !this.chart.getDataVisibility(n) ||
              e[n].hidden ||
              (i += Math.abs(r));
          }
          return i;
        }
        calculateCircumference(t) {
          const e = this._cachedMeta.total;
          return e > 0 && !isNaN(t) ? R * (Math.abs(t) / e) : 0;
        }
        getLabelAndValue(t) {
          const e = this._cachedMeta,
            n = this.chart,
            i = n.data.labels || [],
            r = sn(e._parsed[t], n.options.locale);
          return { label: i[t] || '', value: r };
        }
        getMaxBorderWidth(t) {
          let e = 0;
          const n = this.chart;
          let i, r, o, s, a;
          if (!t)
            for (i = 0, r = n.data.datasets.length; i < r; ++i)
              if (n.isDatasetVisible(i)) {
                (o = n.getDatasetMeta(i)), (t = o.data), (s = o.controller);
                break;
              }
          if (!t) return 0;
          for (i = 0, r = t.length; i < r; ++i)
            (a = s.resolveDataElementOptions(i)),
              'inner' !== a.borderAlign &&
                (e = Math.max(e, a.borderWidth || 0, a.hoverBorderWidth || 0));
          return e;
        }
        getMaxOffset(t) {
          let e = 0;
          for (let n = 0, i = t.length; n < i; ++n) {
            const t = this.resolveDataElementOptions(n);
            e = Math.max(e, t.offset || 0, t.hoverOffset || 0);
          }
          return e;
        }
        _getRingWeightOffset(t) {
          let e = 0;
          for (let n = 0; n < t; ++n)
            this.chart.isDatasetVisible(n) && (e += this._getRingWeight(n));
          return e;
        }
        _getRingWeight(t) {
          return Math.max(p(this.chart.data.datasets[t].weight, 1), 0);
        }
        _getVisibleDatasetWeightTotal() {
          return (
            this._getRingWeightOffset(this.chart.data.datasets.length) || 1
          );
        }
      }
      (Wn.id = 'doughnut'),
        (Wn.defaults = {
          datasetElementType: !1,
          dataElementType: 'arc',
          animation: { animateRotate: !0, animateScale: !1 },
          animations: {
            numbers: {
              type: 'number',
              properties: [
                'circumference',
                'endAngle',
                'innerRadius',
                'outerRadius',
                'startAngle',
                'x',
                'y',
                'offset',
                'borderWidth',
                'spacing',
              ],
            },
          },
          cutout: '50%',
          rotation: 0,
          circumference: 360,
          radius: '100%',
          spacing: 0,
          indexAxis: 'r',
        }),
        (Wn.descriptors = {
          _scriptable: t => 'spacing' !== t,
          _indexable: t => 'spacing' !== t,
        }),
        (Wn.overrides = {
          aspectRatio: 1,
          plugins: {
            legend: {
              labels: {
                generateLabels(t) {
                  const e = t.data;
                  if (e.labels.length && e.datasets.length) {
                    const {
                      labels: { pointStyle: n },
                    } = t.legend.options;
                    return e.labels.map((e, i) => {
                      const r = t.getDatasetMeta(0).controller.getStyle(i);
                      return {
                        text: e,
                        fillStyle: r.backgroundColor,
                        strokeStyle: r.borderColor,
                        lineWidth: r.borderWidth,
                        pointStyle: n,
                        hidden: !t.getDataVisibility(i),
                        index: i,
                      };
                    });
                  }
                  return [];
                },
              },
              onClick(t, e, n) {
                n.chart.toggleDataVisibility(e.index), n.chart.update();
              },
            },
            tooltip: {
              callbacks: {
                title: () => '',
                label(t) {
                  let e = t.label;
                  const n = ': ' + t.formattedValue;
                  return h(e) ? ((e = e.slice()), (e[0] += n)) : (e += n), e;
                },
              },
            },
          },
        });
      class Un extends Dn {
        initialize() {
          (this.enableOptionSharing = !0),
            (this.supportsDecimation = !0),
            super.initialize();
        }
        update(t) {
          const e = this._cachedMeta,
            { dataset: n, data: i = [], _dataset: r } = e,
            o = this.chart._animationsDisabled;
          let { start: s, count: a } = (function (t, e, n) {
            const i = e.length;
            let r = 0,
              o = i;
            if (t._sorted) {
              const { iScale: s, _parsed: a } = t,
                c = s.axis,
                {
                  min: l,
                  max: h,
                  minDefined: u,
                  maxDefined: f,
                } = s.getUserBounds();
              u &&
                (r = Z(
                  Math.min(
                    ve(a, s.axis, l).lo,
                    n ? i : ve(e, c, s.getPixelForValue(l)).lo,
                  ),
                  0,
                  i - 1,
                )),
                (o = f
                  ? Z(
                      Math.max(
                        ve(a, s.axis, h).hi + 1,
                        n ? 0 : ve(e, c, s.getPixelForValue(h)).hi + 1,
                      ),
                      r,
                      i,
                    ) - r
                  : i - r);
            }
            return { start: r, count: o };
          })(e, i, o);
          (this._drawStart = s),
            (this._drawCount = a),
            (function (t) {
              const { xScale: e, yScale: n, _scaleRanges: i } = t,
                r = { xmin: e.min, xmax: e.max, ymin: n.min, ymax: n.max };
              if (!i) return (t._scaleRanges = r), !0;
              const o =
                i.xmin !== e.min ||
                i.xmax !== e.max ||
                i.ymin !== n.min ||
                i.ymax !== n.max;
              return Object.assign(i, r), o;
            })(e) && ((s = 0), (a = i.length)),
            (n._chart = this.chart),
            (n._datasetIndex = this.index),
            (n._decimated = !!r._decimated),
            (n.points = i);
          const c = this.resolveDatasetElementOptions(t);
          this.options.showLine || (c.borderWidth = 0),
            (c.segment = this.options.segment),
            this.updateElement(n, void 0, { animated: !o, options: c }, t),
            this.updateElements(i, s, a, t);
        }
        updateElements(t, e, n, i) {
          const r = 'reset' === i,
            {
              iScale: o,
              vScale: s,
              _stacked: a,
              _dataset: c,
            } = this._cachedMeta,
            h = this.resolveDataElementOptions(e, i),
            u = this.getSharedOptions(h),
            f = this.includeOptions(i, u),
            d = o.axis,
            p = s.axis,
            { spanGaps: g, segment: m } = this.options,
            v = H(g) ? g : Number.POSITIVE_INFINITY,
            y = this.chart._animationsDisabled || r || 'none' === i;
          let x = e > 0 && this.getParsed(e - 1);
          for (let h = e; h < e + n; ++h) {
            const e = t[h],
              n = this.getParsed(h),
              g = y ? e : {},
              b = l(n[p]),
              _ = (g[d] = o.getPixelForValue(n[d], h)),
              w = (g[p] =
                r || b
                  ? s.getBasePixel()
                  : s.getPixelForValue(a ? this.applyStack(s, n, a) : n[p], h));
            (g.skip = isNaN(_) || isNaN(w) || b),
              (g.stop = h > 0 && Math.abs(n[d] - x[d]) > v),
              m && ((g.parsed = n), (g.raw = c.data[h])),
              f &&
                (g.options =
                  u ||
                  this.resolveDataElementOptions(h, e.active ? 'active' : i)),
              y || this.updateElement(e, h, g, i),
              (x = n);
          }
          this.updateSharedOptions(u, i, h);
        }
        getMaxOverflow() {
          const t = this._cachedMeta,
            e = t.dataset,
            n = (e.options && e.options.borderWidth) || 0,
            i = t.data || [];
          if (!i.length) return n;
          const r = i[0].size(this.resolveDataElementOptions(0)),
            o = i[i.length - 1].size(
              this.resolveDataElementOptions(i.length - 1),
            );
          return Math.max(n, r, o) / 2;
        }
        draw() {
          const t = this._cachedMeta;
          t.dataset.updateControlPoints(this.chart.chartArea, t.iScale.axis),
            super.draw();
        }
      }
      (Un.id = 'line'),
        (Un.defaults = {
          datasetElementType: 'line',
          dataElementType: 'point',
          showLine: !0,
          spanGaps: !1,
        }),
        (Un.overrides = {
          scales: {
            _index_: { type: 'category' },
            _value_: { type: 'linear' },
          },
        });
      class Yn extends Dn {
        constructor(t, e) {
          super(t, e), (this.innerRadius = void 0), (this.outerRadius = void 0);
        }
        getLabelAndValue(t) {
          const e = this._cachedMeta,
            n = this.chart,
            i = n.data.labels || [],
            r = sn(e._parsed[t].r, n.options.locale);
          return { label: i[t] || '', value: r };
        }
        parseObjectData(t, e, n, i) {
          return Ie.bind(this)(t, e, n, i);
        }
        update(t) {
          const e = this._cachedMeta.data;
          this._updateRadius(), this.updateElements(e, 0, e.length, t);
        }
        getMinMax() {
          const t = this._cachedMeta,
            e = {
              min: Number.POSITIVE_INFINITY,
              max: Number.NEGATIVE_INFINITY,
            };
          return (
            t.data.forEach((t, n) => {
              const i = this.getParsed(n).r;
              !isNaN(i) &&
                this.chart.getDataVisibility(n) &&
                (i < e.min && (e.min = i), i > e.max && (e.max = i));
            }),
            e
          );
        }
        _updateRadius() {
          const t = this.chart,
            e = t.chartArea,
            n = t.options,
            i = Math.min(e.right - e.left, e.bottom - e.top),
            r = Math.max(i / 2, 0),
            o =
              (r -
                Math.max(
                  n.cutoutPercentage ? (r / 100) * n.cutoutPercentage : 1,
                  0,
                )) /
              t.getVisibleDatasetCount();
          (this.outerRadius = r - o * this.index),
            (this.innerRadius = this.outerRadius - o);
        }
        updateElements(t, e, n, i) {
          const r = 'reset' === i,
            o = this.chart,
            s = o.options.animation,
            a = this._cachedMeta.rScale,
            c = a.xCenter,
            l = a.yCenter,
            h = a.getIndexAngle(0) - 0.5 * C;
          let u,
            f = h;
          const d = 360 / this.countVisibleElements();
          for (u = 0; u < e; ++u) f += this._computeAngle(u, i, d);
          for (u = e; u < e + n; u++) {
            const e = t[u];
            let n = f,
              p = f + this._computeAngle(u, i, d),
              g = o.getDataVisibility(u)
                ? a.getDistanceFromCenterForValue(this.getParsed(u).r)
                : 0;
            (f = p),
              r && (s.animateScale && (g = 0), s.animateRotate && (n = p = h));
            const m = {
              x: c,
              y: l,
              innerRadius: 0,
              outerRadius: g,
              startAngle: n,
              endAngle: p,
              options: this.resolveDataElementOptions(
                u,
                e.active ? 'active' : i,
              ),
            };
            this.updateElement(e, u, m, i);
          }
        }
        countVisibleElements() {
          const t = this._cachedMeta;
          let e = 0;
          return (
            t.data.forEach((t, n) => {
              !isNaN(this.getParsed(n).r) &&
                this.chart.getDataVisibility(n) &&
                e++;
            }),
            e
          );
        }
        _computeAngle(t, e, n) {
          return this.chart.getDataVisibility(t)
            ? U(this.resolveDataElementOptions(t, e).angle || n)
            : 0;
        }
      }
      (Yn.id = 'polarArea'),
        (Yn.defaults = {
          dataElementType: 'arc',
          animation: { animateRotate: !0, animateScale: !0 },
          animations: {
            numbers: {
              type: 'number',
              properties: [
                'x',
                'y',
                'startAngle',
                'endAngle',
                'innerRadius',
                'outerRadius',
              ],
            },
          },
          indexAxis: 'r',
          startAngle: 0,
        }),
        (Yn.overrides = {
          aspectRatio: 1,
          plugins: {
            legend: {
              labels: {
                generateLabels(t) {
                  const e = t.data;
                  if (e.labels.length && e.datasets.length) {
                    const {
                      labels: { pointStyle: n },
                    } = t.legend.options;
                    return e.labels.map((e, i) => {
                      const r = t.getDatasetMeta(0).controller.getStyle(i);
                      return {
                        text: e,
                        fillStyle: r.backgroundColor,
                        strokeStyle: r.borderColor,
                        lineWidth: r.borderWidth,
                        pointStyle: n,
                        hidden: !t.getDataVisibility(i),
                        index: i,
                      };
                    });
                  }
                  return [];
                },
              },
              onClick(t, e, n) {
                n.chart.toggleDataVisibility(e.index), n.chart.update();
              },
            },
            tooltip: {
              callbacks: {
                title: () => '',
                label: t =>
                  t.chart.data.labels[t.dataIndex] + ': ' + t.formattedValue,
              },
            },
          },
          scales: {
            r: {
              type: 'radialLinear',
              angleLines: { display: !1 },
              beginAtZero: !0,
              grid: { circular: !0 },
              pointLabels: { display: !1 },
              startAngle: 0,
            },
          },
        });
      class Gn extends Wn {}
      (Gn.id = 'pie'),
        (Gn.defaults = {
          cutout: 0,
          rotation: 0,
          circumference: 360,
          radius: '100%',
        });
      class qn extends Dn {
        getLabelAndValue(t) {
          const e = this._cachedMeta.vScale,
            n = this.getParsed(t);
          return {
            label: e.getLabels()[t],
            value: '' + e.getLabelForValue(n[e.axis]),
          };
        }
        parseObjectData(t, e, n, i) {
          return Ie.bind(this)(t, e, n, i);
        }
        update(t) {
          const e = this._cachedMeta,
            n = e.dataset,
            i = e.data || [],
            r = e.iScale.getLabels();
          if (((n.points = i), 'resize' !== t)) {
            const e = this.resolveDatasetElementOptions(t);
            this.options.showLine || (e.borderWidth = 0);
            const o = {
              _loop: !0,
              _fullLoop: r.length === i.length,
              options: e,
            };
            this.updateElement(n, void 0, o, t);
          }
          this.updateElements(i, 0, i.length, t);
        }
        updateElements(t, e, n, i) {
          const r = this._cachedMeta.rScale,
            o = 'reset' === i;
          for (let s = e; s < e + n; s++) {
            const e = t[s],
              n = this.resolveDataElementOptions(s, e.active ? 'active' : i),
              a = r.getPointPositionForValue(s, this.getParsed(s).r),
              c = o ? r.xCenter : a.x,
              l = o ? r.yCenter : a.y,
              h = {
                x: c,
                y: l,
                angle: a.angle,
                skip: isNaN(c) || isNaN(l),
                options: n,
              };
            this.updateElement(e, s, h, i);
          }
        }
      }
      (qn.id = 'radar'),
        (qn.defaults = {
          datasetElementType: 'line',
          dataElementType: 'point',
          indexAxis: 'r',
          showLine: !0,
          elements: { line: { fill: 'start' } },
        }),
        (qn.overrides = {
          aspectRatio: 1,
          scales: { r: { type: 'radialLinear' } },
        });
      class Jn extends Un {}
      (Jn.id = 'scatter'),
        (Jn.defaults = { showLine: !1, fill: !1 }),
        (Jn.overrides = {
          interaction: { mode: 'point' },
          plugins: {
            tooltip: {
              callbacks: {
                title: () => '',
                label: t => '(' + t.label + ', ' + t.formattedValue + ')',
              },
            },
          },
          scales: { x: { type: 'linear' }, y: { type: 'linear' } },
        });
      var Xn = Object.freeze({
        __proto__: null,
        BarController: Hn,
        BubbleController: Vn,
        DoughnutController: Wn,
        LineController: Un,
        PolarAreaController: Yn,
        PieController: Gn,
        RadarController: qn,
        ScatterController: Jn,
      });
      function Kn() {
        throw new Error(
          'This method is not implemented: Check that a complete date adapter is provided.',
        );
      }
      class Qn {
        constructor(t) {
          this.options = t || {};
        }
        formats() {
          return Kn();
        }
        parse(t, e) {
          return Kn();
        }
        format(t, e) {
          return Kn();
        }
        add(t, e, n) {
          return Kn();
        }
        diff(t, e, n) {
          return Kn();
        }
        startOf(t, e, n) {
          return Kn();
        }
        endOf(t, e) {
          return Kn();
        }
      }
      Qn.override = function (t) {
        Object.assign(Qn.prototype, t);
      };
      var Zn = { _date: Qn };
      function ti(t, e, n, i) {
        const { controller: r, data: o, _sorted: s } = t,
          a = r._cachedMeta.iScale;
        if (a && e === a.axis && 'r' !== e && s && o.length) {
          const t = a._reversePixels ? ye : ve;
          if (!i) return t(o, e, n);
          if (r._sharedOptions) {
            const i = o[0],
              r = 'function' == typeof i.getRange && i.getRange(e);
            if (r) {
              const i = t(o, e, n - r),
                s = t(o, e, n + r);
              return { lo: i.lo, hi: s.hi };
            }
          }
        }
        return { lo: 0, hi: o.length - 1 };
      }
      function ei(t, e, n, i, r) {
        const o = t.getSortedVisibleDatasetMetas(),
          s = n[e];
        for (let t = 0, n = o.length; t < n; ++t) {
          const { index: n, data: a } = o[t],
            { lo: c, hi: l } = ti(o[t], e, s, r);
          for (let t = c; t <= l; ++t) {
            const e = a[t];
            e.skip || i(e, n, t);
          }
        }
      }
      function ni(t, e, n, i, r) {
        const o = [];
        if (!r && !t.isPointInArea(e)) return o;
        return (
          ei(
            t,
            n,
            e,
            function (n, s, a) {
              (r || Qt(n, t.chartArea, 0)) &&
                n.inRange(e.x, e.y, i) &&
                o.push({ element: n, datasetIndex: s, index: a });
            },
            !0,
          ),
          o
        );
      }
      function ii(t, e, n, i, r, o) {
        let s = [];
        const a = (function (t) {
          const e = -1 !== t.indexOf('x'),
            n = -1 !== t.indexOf('y');
          return function (t, i) {
            const r = e ? Math.abs(t.x - i.x) : 0,
              o = n ? Math.abs(t.y - i.y) : 0;
            return Math.sqrt(Math.pow(r, 2) + Math.pow(o, 2));
          };
        })(n);
        let c = Number.POSITIVE_INFINITY;
        return (
          ei(t, n, e, function (n, l, h) {
            const u = n.inRange(e.x, e.y, r);
            if (i && !u) return;
            const f = n.getCenterPoint(r);
            if (!(!!o || t.isPointInArea(f)) && !u) return;
            const d = a(e, f);
            d < c
              ? ((s = [{ element: n, datasetIndex: l, index: h }]), (c = d))
              : d === c && s.push({ element: n, datasetIndex: l, index: h });
          }),
          s
        );
      }
      function ri(t, e, n, i, r, o) {
        return o || t.isPointInArea(e)
          ? 'r' !== n || i
            ? ii(t, e, n, i, r, o)
            : (function (t, e, n, i) {
                let r = [];
                return (
                  ei(t, n, e, function (t, n, o) {
                    const { startAngle: s, endAngle: a } = t.getProps(
                        ['startAngle', 'endAngle'],
                        i,
                      ),
                      { angle: c } = q(t, { x: e.x, y: e.y });
                    Q(c, s, a) &&
                      r.push({ element: t, datasetIndex: n, index: o });
                  }),
                  r
                );
              })(t, e, n, r)
          : [];
      }
      function oi(t, e, n, i, r) {
        const o = [],
          s = 'x' === n ? 'inXRange' : 'inYRange';
        let a = !1;
        return (
          ei(t, n, e, (t, i, c) => {
            t[s](e[n], r) &&
              (o.push({ element: t, datasetIndex: i, index: c }),
              (a = a || t.inRange(e.x, e.y, r)));
          }),
          i && !a ? [] : o
        );
      }
      var si = {
        evaluateInteractionItems: ei,
        modes: {
          index(t, e, n, i) {
            const r = Je(e, t),
              o = n.axis || 'x',
              s = n.includeInvisible || !1,
              a = n.intersect ? ni(t, r, o, i, s) : ri(t, r, o, !1, i, s),
              c = [];
            return a.length
              ? (t.getSortedVisibleDatasetMetas().forEach(t => {
                  const e = a[0].index,
                    n = t.data[e];
                  n &&
                    !n.skip &&
                    c.push({ element: n, datasetIndex: t.index, index: e });
                }),
                c)
              : [];
          },
          dataset(t, e, n, i) {
            const r = Je(e, t),
              o = n.axis || 'xy',
              s = n.includeInvisible || !1;
            let a = n.intersect ? ni(t, r, o, i, s) : ri(t, r, o, !1, i, s);
            if (a.length > 0) {
              const e = a[0].datasetIndex,
                n = t.getDatasetMeta(e).data;
              a = [];
              for (let t = 0; t < n.length; ++t)
                a.push({ element: n[t], datasetIndex: e, index: t });
            }
            return a;
          },
          point: (t, e, n, i) =>
            ni(t, Je(e, t), n.axis || 'xy', i, n.includeInvisible || !1),
          nearest(t, e, n, i) {
            const r = Je(e, t),
              o = n.axis || 'xy',
              s = n.includeInvisible || !1;
            return ri(t, r, o, n.intersect, i, s);
          },
          x: (t, e, n, i) => oi(t, Je(e, t), 'x', n.intersect, i),
          y: (t, e, n, i) => oi(t, Je(e, t), 'y', n.intersect, i),
        },
      };
      const ai = ['left', 'top', 'right', 'bottom'];
      function ci(t, e) {
        return t.filter(t => t.pos === e);
      }
      function li(t, e) {
        return t.filter(t => -1 === ai.indexOf(t.pos) && t.box.axis === e);
      }
      function hi(t, e) {
        return t.sort((t, n) => {
          const i = e ? n : t,
            r = e ? t : n;
          return i.weight === r.weight
            ? i.index - r.index
            : i.weight - r.weight;
        });
      }
      function ui(t, e) {
        const n = (function (t) {
            const e = {};
            for (const n of t) {
              const { stack: t, pos: i, stackWeight: r } = n;
              if (!t || !ai.includes(i)) continue;
              const o =
                e[t] || (e[t] = { count: 0, placed: 0, weight: 0, size: 0 });
              o.count++, (o.weight += r);
            }
            return e;
          })(t),
          { vBoxMaxWidth: i, hBoxMaxHeight: r } = e;
        let o, s, a;
        for (o = 0, s = t.length; o < s; ++o) {
          a = t[o];
          const { fullSize: s } = a.box,
            c = n[a.stack],
            l = c && a.stackWeight / c.weight;
          a.horizontal
            ? ((a.width = l ? l * i : s && e.availableWidth), (a.height = r))
            : ((a.width = i), (a.height = l ? l * r : s && e.availableHeight));
        }
        return n;
      }
      function fi(t, e, n, i) {
        return Math.max(t[n], e[n]) + Math.max(t[i], e[i]);
      }
      function di(t, e) {
        (t.top = Math.max(t.top, e.top)),
          (t.left = Math.max(t.left, e.left)),
          (t.bottom = Math.max(t.bottom, e.bottom)),
          (t.right = Math.max(t.right, e.right));
      }
      function pi(t, e, n, i) {
        const { pos: r, box: o } = n,
          s = t.maxPadding;
        if (!u(r)) {
          n.size && (t[r] -= n.size);
          const e = i[n.stack] || { size: 0, count: 1 };
          (e.size = Math.max(e.size, n.horizontal ? o.height : o.width)),
            (n.size = e.size / e.count),
            (t[r] += n.size);
        }
        o.getPadding && di(s, o.getPadding());
        const a = Math.max(0, e.outerWidth - fi(s, t, 'left', 'right')),
          c = Math.max(0, e.outerHeight - fi(s, t, 'top', 'bottom')),
          l = a !== t.w,
          h = c !== t.h;
        return (
          (t.w = a),
          (t.h = c),
          n.horizontal ? { same: l, other: h } : { same: h, other: l }
        );
      }
      function gi(t, e) {
        const n = e.maxPadding;
        function i(t) {
          const i = { left: 0, top: 0, right: 0, bottom: 0 };
          return (
            t.forEach(t => {
              i[t] = Math.max(e[t], n[t]);
            }),
            i
          );
        }
        return i(t ? ['left', 'right'] : ['top', 'bottom']);
      }
      function mi(t, e, n, i) {
        const r = [];
        let o, s, a, c, l, h;
        for (o = 0, s = t.length, l = 0; o < s; ++o) {
          (a = t[o]),
            (c = a.box),
            c.update(a.width || e.w, a.height || e.h, gi(a.horizontal, e));
          const { same: s, other: u } = pi(e, n, a, i);
          (l |= s && r.length), (h = h || u), c.fullSize || r.push(a);
        }
        return (l && mi(r, e, n, i)) || h;
      }
      function vi(t, e, n, i, r) {
        (t.top = n),
          (t.left = e),
          (t.right = e + i),
          (t.bottom = n + r),
          (t.width = i),
          (t.height = r);
      }
      function yi(t, e, n, i) {
        const r = n.padding;
        let { x: o, y: s } = e;
        for (const a of t) {
          const t = a.box,
            c = i[a.stack] || { count: 1, placed: 0, weight: 1 },
            l = a.stackWeight / c.weight || 1;
          if (a.horizontal) {
            const i = e.w * l,
              o = c.size || t.height;
            S(c.start) && (s = c.start),
              t.fullSize
                ? vi(t, r.left, s, n.outerWidth - r.right - r.left, o)
                : vi(t, e.left + c.placed, s, i, o),
              (c.start = s),
              (c.placed += i),
              (s = t.bottom);
          } else {
            const i = e.h * l,
              s = c.size || t.width;
            S(c.start) && (o = c.start),
              t.fullSize
                ? vi(t, o, r.top, s, n.outerHeight - r.bottom - r.top)
                : vi(t, o, e.top + c.placed, s, i),
              (c.start = o),
              (c.placed += i),
              (o = t.right);
          }
        }
        (e.x = o), (e.y = s);
      }
      Yt.set('layout', {
        autoPadding: !0,
        padding: { top: 0, right: 0, bottom: 0, left: 0 },
      });
      var xi = {
        addBox(t, e) {
          t.boxes || (t.boxes = []),
            (e.fullSize = e.fullSize || !1),
            (e.position = e.position || 'top'),
            (e.weight = e.weight || 0),
            (e._layers =
              e._layers ||
              function () {
                return [
                  {
                    z: 0,
                    draw(t) {
                      e.draw(t);
                    },
                  },
                ];
              }),
            t.boxes.push(e);
        },
        removeBox(t, e) {
          const n = t.boxes ? t.boxes.indexOf(e) : -1;
          -1 !== n && t.boxes.splice(n, 1);
        },
        configure(t, e, n) {
          (e.fullSize = n.fullSize),
            (e.position = n.position),
            (e.weight = n.weight);
        },
        update(t, e, n, i) {
          if (!t) return;
          const r = fe(t.options.layout.padding),
            o = Math.max(e - r.width, 0),
            s = Math.max(n - r.height, 0),
            a = (function (t) {
              const e = (function (t) {
                  const e = [];
                  let n, i, r, o, s, a;
                  for (n = 0, i = (t || []).length; n < i; ++n)
                    (r = t[n]),
                      ({
                        position: o,
                        options: { stack: s, stackWeight: a = 1 },
                      } = r),
                      e.push({
                        index: n,
                        box: r,
                        pos: o,
                        horizontal: r.isHorizontal(),
                        weight: r.weight,
                        stack: s && o + s,
                        stackWeight: a,
                      });
                  return e;
                })(t),
                n = hi(
                  e.filter(t => t.box.fullSize),
                  !0,
                ),
                i = hi(ci(e, 'left'), !0),
                r = hi(ci(e, 'right')),
                o = hi(ci(e, 'top'), !0),
                s = hi(ci(e, 'bottom')),
                a = li(e, 'x'),
                c = li(e, 'y');
              return {
                fullSize: n,
                leftAndTop: i.concat(o),
                rightAndBottom: r.concat(c).concat(s).concat(a),
                chartArea: ci(e, 'chartArea'),
                vertical: i.concat(r).concat(c),
                horizontal: o.concat(s).concat(a),
              };
            })(t.boxes),
            c = a.vertical,
            l = a.horizontal;
          v(t.boxes, t => {
            'function' == typeof t.beforeLayout && t.beforeLayout();
          });
          const h =
              c.reduce(
                (t, e) =>
                  e.box.options && !1 === e.box.options.display ? t : t + 1,
                0,
              ) || 1,
            u = Object.freeze({
              outerWidth: e,
              outerHeight: n,
              padding: r,
              availableWidth: o,
              availableHeight: s,
              vBoxMaxWidth: o / 2 / h,
              hBoxMaxHeight: s / 2,
            }),
            f = Object.assign({}, r);
          di(f, fe(i));
          const d = Object.assign(
              { maxPadding: f, w: o, h: s, x: r.left, y: r.top },
              r,
            ),
            p = ui(c.concat(l), u);
          mi(a.fullSize, d, u, p),
            mi(c, d, u, p),
            mi(l, d, u, p) && mi(c, d, u, p),
            (function (t) {
              const e = t.maxPadding;
              function n(n) {
                const i = Math.max(e[n] - t[n], 0);
                return (t[n] += i), i;
              }
              (t.y += n('top')), (t.x += n('left')), n('right'), n('bottom');
            })(d),
            yi(a.leftAndTop, d, u, p),
            (d.x += d.w),
            (d.y += d.h),
            yi(a.rightAndBottom, d, u, p),
            (t.chartArea = {
              left: d.left,
              top: d.top,
              right: d.left + d.w,
              bottom: d.top + d.h,
              height: d.h,
              width: d.w,
            }),
            v(a.chartArea, e => {
              const n = e.box;
              Object.assign(n, t.chartArea),
                n.update(d.w, d.h, { left: 0, top: 0, right: 0, bottom: 0 });
            });
        },
      };
      class bi {
        acquireContext(t, e) {}
        releaseContext(t) {
          return !1;
        }
        addEventListener(t, e, n) {}
        removeEventListener(t, e, n) {}
        getDevicePixelRatio() {
          return 1;
        }
        getMaximumSize(t, e, n, i) {
          return (
            (e = Math.max(0, e || t.width)),
            (n = n || t.height),
            { width: e, height: Math.max(0, i ? Math.floor(e / i) : n) }
          );
        }
        isAttached(t) {
          return !0;
        }
        updateConfig(t) {}
      }
      class _i extends bi {
        acquireContext(t) {
          return (t && t.getContext && t.getContext('2d')) || null;
        }
        updateConfig(t) {
          t.options.animation = !1;
        }
      }
      const wi = {
          touchstart: 'mousedown',
          touchmove: 'mousemove',
          touchend: 'mouseup',
          pointerenter: 'mouseenter',
          pointerdown: 'mousedown',
          pointermove: 'mousemove',
          pointerup: 'mouseup',
          pointerleave: 'mouseout',
          pointerout: 'mouseout',
        },
        ki = t => null === t || '' === t;
      const Mi = !!Ze && { passive: !0 };
      function Pi(t, e, n) {
        t.canvas.removeEventListener(e, n, Mi);
      }
      function Oi(t, e) {
        for (const n of t) if (n === e || n.contains(e)) return !0;
      }
      function Ei(t, e, n) {
        const i = t.canvas,
          r = new MutationObserver(t => {
            let e = !1;
            for (const n of t)
              (e = e || Oi(n.addedNodes, i)), (e = e && !Oi(n.removedNodes, i));
            e && n();
          });
        return r.observe(document, { childList: !0, subtree: !0 }), r;
      }
      function Si(t, e, n) {
        const i = t.canvas,
          r = new MutationObserver(t => {
            let e = !1;
            for (const n of t)
              (e = e || Oi(n.removedNodes, i)), (e = e && !Oi(n.addedNodes, i));
            e && n();
          });
        return r.observe(document, { childList: !0, subtree: !0 }), r;
      }
      const Ti = new Map();
      let Ai = 0;
      function Ci() {
        const t = window.devicePixelRatio;
        t !== Ai &&
          ((Ai = t),
          Ti.forEach((e, n) => {
            n.currentDevicePixelRatio !== t && e();
          }));
      }
      function Ri(t, e, n) {
        const i = t.canvas,
          o = i && We(i);
        if (!o) return;
        const s = r((t, e) => {
            const i = o.clientWidth;
            n(t, e), i < o.clientWidth && n();
          }, window),
          a = new ResizeObserver(t => {
            const e = t[0],
              n = e.contentRect.width,
              i = e.contentRect.height;
            (0 === n && 0 === i) || s(n, i);
          });
        return (
          a.observe(o),
          (function (t, e) {
            Ti.size || window.addEventListener('resize', Ci), Ti.set(t, e);
          })(t, s),
          a
        );
      }
      function Di(t, e, n) {
        n && n.disconnect(),
          'resize' === e &&
            (function (t) {
              Ti.delete(t), Ti.size || window.removeEventListener('resize', Ci);
            })(t);
      }
      function Li(t, e, n) {
        const i = t.canvas,
          o = r(
            e => {
              null !== t.ctx &&
                n(
                  (function (t, e) {
                    const n = wi[t.type] || t.type,
                      { x: i, y: r } = Je(t, e);
                    return {
                      type: n,
                      chart: e,
                      native: t,
                      x: void 0 !== i ? i : null,
                      y: void 0 !== r ? r : null,
                    };
                  })(e, t),
                );
            },
            t,
            t => {
              const e = t[0];
              return [e, e.offsetX, e.offsetY];
            },
          );
        return (
          (function (t, e, n) {
            t.addEventListener(e, n, Mi);
          })(i, e, o),
          o
        );
      }
      class Ii extends bi {
        acquireContext(t, e) {
          const n = t && t.getContext && t.getContext('2d');
          return n && n.canvas === t
            ? ((function (t, e) {
                const n = t.style,
                  i = t.getAttribute('height'),
                  r = t.getAttribute('width');
                if (
                  ((t.$chartjs = {
                    initial: {
                      height: i,
                      width: r,
                      style: {
                        display: n.display,
                        height: n.height,
                        width: n.width,
                      },
                    },
                  }),
                  (n.display = n.display || 'block'),
                  (n.boxSizing = n.boxSizing || 'border-box'),
                  ki(r))
                ) {
                  const e = tn(t, 'width');
                  void 0 !== e && (t.width = e);
                }
                if (ki(i))
                  if ('' === t.style.height) t.height = t.width / (e || 2);
                  else {
                    const e = tn(t, 'height');
                    void 0 !== e && (t.height = e);
                  }
              })(t, e),
              n)
            : null;
        }
        releaseContext(t) {
          const e = t.canvas;
          if (!e.$chartjs) return !1;
          const n = e.$chartjs.initial;
          ['height', 'width'].forEach(t => {
            const i = n[t];
            l(i) ? e.removeAttribute(t) : e.setAttribute(t, i);
          });
          const i = n.style || {};
          return (
            Object.keys(i).forEach(t => {
              e.style[t] = i[t];
            }),
            (e.width = e.width),
            delete e.$chartjs,
            !0
          );
        }
        addEventListener(t, e, n) {
          this.removeEventListener(t, e);
          const i = t.$proxies || (t.$proxies = {}),
            r = { attach: Ei, detach: Si, resize: Ri }[e] || Li;
          i[e] = r(t, e, n);
        }
        removeEventListener(t, e) {
          const n = t.$proxies || (t.$proxies = {}),
            i = n[e];
          if (!i) return;
          (({ attach: Di, detach: Di, resize: Di }[e] || Pi)(t, e, i),
            (n[e] = void 0));
        }
        getDevicePixelRatio() {
          return window.devicePixelRatio;
        }
        getMaximumSize(t, e, n, i) {
          return Ke(t, e, n, i);
        }
        isAttached(t) {
          const e = We(t);
          return !(!e || !e.isConnected);
        }
      }
      class ji {
        constructor() {
          (this.x = void 0),
            (this.y = void 0),
            (this.active = !1),
            (this.options = void 0),
            (this.$animations = void 0);
        }
        tooltipPosition(t) {
          const { x: e, y: n } = this.getProps(['x', 'y'], t);
          return { x: e, y: n };
        }
        hasValue() {
          return H(this.x) && H(this.y);
        }
        getProps(t, e) {
          const n = this.$animations;
          if (!e || !n) return this;
          const i = {};
          return (
            t.forEach(t => {
              i[t] = n[t] && n[t].active() ? n[t]._to : this[t];
            }),
            i
          );
        }
      }
      (ji.defaults = {}), (ji.defaultRoutes = void 0);
      const $i = {
        values: t => (h(t) ? t : '' + t),
        numeric(t, e, n) {
          if (0 === t) return '0';
          const i = this.chart.options.locale;
          let r,
            o = t;
          if (n.length > 1) {
            const e = Math.max(
              Math.abs(n[0].value),
              Math.abs(n[n.length - 1].value),
            );
            (e < 1e-4 || e > 1e15) && (r = 'scientific'),
              (o = (function (t, e) {
                let n =
                  e.length > 3
                    ? e[2].value - e[1].value
                    : e[1].value - e[0].value;
                Math.abs(n) >= 1 &&
                  t !== Math.floor(t) &&
                  (n = t - Math.floor(t));
                return n;
              })(t, n));
          }
          const s = F(Math.abs(o)),
            a = Math.max(Math.min(-1 * Math.floor(s), 20), 0),
            c = {
              notation: r,
              minimumFractionDigits: a,
              maximumFractionDigits: a,
            };
          return Object.assign(c, this.options.ticks.format), sn(t, i, c);
        },
        logarithmic(t, e, n) {
          if (0 === t) return '0';
          const i = t / Math.pow(10, Math.floor(F(t)));
          return 1 === i || 2 === i || 5 === i
            ? $i.numeric.call(this, t, e, n)
            : '';
        },
      };
      var Ni = { formatters: $i };
      function Fi(t, e) {
        const n = t.options.ticks,
          i =
            n.maxTicksLimit ||
            (function (t) {
              const e = t.options.offset,
                n = t._tickSize(),
                i = t._length / n + (e ? 0 : 1),
                r = t._maxLength / n;
              return Math.floor(Math.min(i, r));
            })(t),
          r = n.major.enabled
            ? (function (t) {
                const e = [];
                let n, i;
                for (n = 0, i = t.length; n < i; n++) t[n].major && e.push(n);
                return e;
              })(e)
            : [],
          o = r.length,
          s = r[0],
          a = r[o - 1],
          c = [];
        if (o > i)
          return (
            (function (t, e, n, i) {
              let r,
                o = 0,
                s = n[0];
              for (i = Math.ceil(i), r = 0; r < t.length; r++)
                r === s && (e.push(t[r]), o++, (s = n[o * i]));
            })(e, c, r, o / i),
            c
          );
        const h = (function (t, e, n) {
          const i = (function (t) {
              const e = t.length;
              let n, i;
              if (e < 2) return !1;
              for (i = t[0], n = 1; n < e; ++n)
                if (t[n] - t[n - 1] !== i) return !1;
              return i;
            })(t),
            r = e.length / n;
          if (!i) return Math.max(r, 1);
          const o = (function (t) {
            const e = [],
              n = Math.sqrt(t);
            let i;
            for (i = 1; i < n; i++) t % i == 0 && (e.push(i), e.push(t / i));
            return n === (0 | n) && e.push(n), e.sort((t, e) => t - e).pop(), e;
          })(i);
          for (let t = 0, e = o.length - 1; t < e; t++) {
            const e = o[t];
            if (e > r) return e;
          }
          return Math.max(r, 1);
        })(r, e, i);
        if (o > 0) {
          let t, n;
          const i = o > 1 ? Math.round((a - s) / (o - 1)) : null;
          for (Bi(e, c, h, l(i) ? 0 : s - i, s), t = 0, n = o - 1; t < n; t++)
            Bi(e, c, h, r[t], r[t + 1]);
          return Bi(e, c, h, a, l(i) ? e.length : a + i), c;
        }
        return Bi(e, c, h), c;
      }
      function Bi(t, e, n, i, r) {
        const o = p(i, 0),
          s = Math.min(p(r, t.length), t.length);
        let a,
          c,
          l,
          h = 0;
        for (
          n = Math.ceil(n),
            r && ((a = r - i), (n = a / Math.floor(a / n))),
            l = o;
          l < 0;

        )
          h++, (l = Math.round(o + h * n));
        for (c = Math.max(o, 0); c < s; c++)
          c === l && (e.push(t[c]), h++, (l = Math.round(o + h * n)));
      }
      Yt.set('scale', {
        display: !0,
        offset: !1,
        reverse: !1,
        beginAtZero: !1,
        bounds: 'ticks',
        grace: 0,
        grid: {
          display: !0,
          lineWidth: 1,
          drawBorder: !0,
          drawOnChartArea: !0,
          drawTicks: !0,
          tickLength: 8,
          tickWidth: (t, e) => e.lineWidth,
          tickColor: (t, e) => e.color,
          offset: !1,
          borderDash: [],
          borderDashOffset: 0,
          borderWidth: 1,
        },
        title: { display: !1, text: '', padding: { top: 4, bottom: 4 } },
        ticks: {
          minRotation: 0,
          maxRotation: 50,
          mirror: !1,
          textStrokeWidth: 0,
          textStrokeColor: '',
          padding: 3,
          display: !0,
          autoSkip: !0,
          autoSkipPadding: 3,
          labelOffset: 0,
          callback: Ni.formatters.values,
          minor: {},
          major: {},
          align: 'center',
          crossAlign: 'near',
          showLabelBackdrop: !1,
          backdropColor: 'rgba(255, 255, 255, 0.75)',
          backdropPadding: 2,
        },
      }),
        Yt.route('scale.ticks', 'color', '', 'color'),
        Yt.route('scale.grid', 'color', '', 'borderColor'),
        Yt.route('scale.grid', 'borderColor', '', 'borderColor'),
        Yt.route('scale.title', 'color', '', 'color'),
        Yt.describe('scale', {
          _fallback: !1,
          _scriptable: t =>
            !t.startsWith('before') &&
            !t.startsWith('after') &&
            'callback' !== t &&
            'parser' !== t,
          _indexable: t => 'borderDash' !== t && 'tickBorderDash' !== t,
        }),
        Yt.describe('scales', { _fallback: 'scale' }),
        Yt.describe('scale.ticks', {
          _scriptable: t => 'backdropPadding' !== t && 'callback' !== t,
          _indexable: t => 'backdropPadding' !== t,
        });
      const zi = (t, e, n) =>
        'top' === e || 'left' === e ? t[e] + n : t[e] - n;
      function Hi(t, e) {
        const n = [],
          i = t.length / e,
          r = t.length;
        let o = 0;
        for (; o < r; o += i) n.push(t[Math.floor(o)]);
        return n;
      }
      function Vi(t, e, n) {
        const i = t.ticks.length,
          r = Math.min(e, i - 1),
          o = t._startPixel,
          s = t._endPixel;
        let a,
          c = t.getPixelForTick(r);
        if (
          !(
            n &&
            ((a =
              1 === i
                ? Math.max(c - o, s - c)
                : 0 === e
                ? (t.getPixelForTick(1) - c) / 2
                : (c - t.getPixelForTick(r - 1)) / 2),
            (c += r < e ? a : -a),
            c < o - 1e-6 || c > s + 1e-6)
          )
        )
          return c;
      }
      function Wi(t) {
        return t.drawTicks ? t.tickLength : 0;
      }
      function Ui(t, e) {
        if (!t.display) return 0;
        const n = de(t.font, e),
          i = fe(t.padding);
        return (h(t.text) ? t.text.length : 1) * n.lineHeight + i.height;
      }
      function Yi(t, e, n) {
        let i = o(t);
        return (
          ((n && 'right' !== e) || (!n && 'right' === e)) &&
            (i = (t => ('left' === t ? 'right' : 'right' === t ? 'left' : t))(
              i,
            )),
          i
        );
      }
      class Gi extends ji {
        constructor(t) {
          super(),
            (this.id = t.id),
            (this.type = t.type),
            (this.options = void 0),
            (this.ctx = t.ctx),
            (this.chart = t.chart),
            (this.top = void 0),
            (this.bottom = void 0),
            (this.left = void 0),
            (this.right = void 0),
            (this.width = void 0),
            (this.height = void 0),
            (this._margins = { left: 0, right: 0, top: 0, bottom: 0 }),
            (this.maxWidth = void 0),
            (this.maxHeight = void 0),
            (this.paddingTop = void 0),
            (this.paddingBottom = void 0),
            (this.paddingLeft = void 0),
            (this.paddingRight = void 0),
            (this.axis = void 0),
            (this.labelRotation = void 0),
            (this.min = void 0),
            (this.max = void 0),
            (this._range = void 0),
            (this.ticks = []),
            (this._gridLineItems = null),
            (this._labelItems = null),
            (this._labelSizes = null),
            (this._length = 0),
            (this._maxLength = 0),
            (this._longestTextCache = {}),
            (this._startPixel = void 0),
            (this._endPixel = void 0),
            (this._reversePixels = !1),
            (this._userMax = void 0),
            (this._userMin = void 0),
            (this._suggestedMax = void 0),
            (this._suggestedMin = void 0),
            (this._ticksLength = 0),
            (this._borderValue = 0),
            (this._cache = {}),
            (this._dataLimitsCached = !1),
            (this.$context = void 0);
        }
        init(t) {
          (this.options = t.setContext(this.getContext())),
            (this.axis = t.axis),
            (this._userMin = this.parse(t.min)),
            (this._userMax = this.parse(t.max)),
            (this._suggestedMin = this.parse(t.suggestedMin)),
            (this._suggestedMax = this.parse(t.suggestedMax));
        }
        parse(t, e) {
          return t;
        }
        getUserBounds() {
          let {
            _userMin: t,
            _userMax: e,
            _suggestedMin: n,
            _suggestedMax: i,
          } = this;
          return (
            (t = d(t, Number.POSITIVE_INFINITY)),
            (e = d(e, Number.NEGATIVE_INFINITY)),
            (n = d(n, Number.POSITIVE_INFINITY)),
            (i = d(i, Number.NEGATIVE_INFINITY)),
            { min: d(t, n), max: d(e, i), minDefined: f(t), maxDefined: f(e) }
          );
        }
        getMinMax(t) {
          let e,
            {
              min: n,
              max: i,
              minDefined: r,
              maxDefined: o,
            } = this.getUserBounds();
          if (r && o) return { min: n, max: i };
          const s = this.getMatchingVisibleMetas();
          for (let a = 0, c = s.length; a < c; ++a)
            (e = s[a].controller.getMinMax(this, t)),
              r || (n = Math.min(n, e.min)),
              o || (i = Math.max(i, e.max));
          return (
            (n = o && n > i ? i : n),
            (i = r && n > i ? n : i),
            { min: d(n, d(i, n)), max: d(i, d(n, i)) }
          );
        }
        getPadding() {
          return {
            left: this.paddingLeft || 0,
            top: this.paddingTop || 0,
            right: this.paddingRight || 0,
            bottom: this.paddingBottom || 0,
          };
        }
        getTicks() {
          return this.ticks;
        }
        getLabels() {
          const t = this.chart.data;
          return (
            this.options.labels ||
            (this.isHorizontal() ? t.xLabels : t.yLabels) ||
            t.labels ||
            []
          );
        }
        beforeLayout() {
          (this._cache = {}), (this._dataLimitsCached = !1);
        }
        beforeUpdate() {
          m(this.options.beforeUpdate, [this]);
        }
        update(t, e, n) {
          const { beginAtZero: i, grace: r, ticks: o } = this.options,
            s = o.sampleSize;
          this.beforeUpdate(),
            (this.maxWidth = t),
            (this.maxHeight = e),
            (this._margins = n =
              Object.assign({ left: 0, right: 0, top: 0, bottom: 0 }, n)),
            (this.ticks = null),
            (this._labelSizes = null),
            (this._gridLineItems = null),
            (this._labelItems = null),
            this.beforeSetDimensions(),
            this.setDimensions(),
            this.afterSetDimensions(),
            (this._maxLength = this.isHorizontal()
              ? this.width + n.left + n.right
              : this.height + n.top + n.bottom),
            this._dataLimitsCached ||
              (this.beforeDataLimits(),
              this.determineDataLimits(),
              this.afterDataLimits(),
              (this._range = (function (t, e, n) {
                const { min: i, max: r } = t,
                  o = g(e, (r - i) / 2),
                  s = (t, e) => (n && 0 === t ? 0 : t + e);
                return { min: s(i, -Math.abs(o)), max: s(r, o) };
              })(this, r, i)),
              (this._dataLimitsCached = !0)),
            this.beforeBuildTicks(),
            (this.ticks = this.buildTicks() || []),
            this.afterBuildTicks();
          const a = s < this.ticks.length;
          this._convertTicksToLabels(a ? Hi(this.ticks, s) : this.ticks),
            this.configure(),
            this.beforeCalculateLabelRotation(),
            this.calculateLabelRotation(),
            this.afterCalculateLabelRotation(),
            o.display &&
              (o.autoSkip || 'auto' === o.source) &&
              ((this.ticks = Fi(this, this.ticks)),
              (this._labelSizes = null),
              this.afterAutoSkip()),
            a && this._convertTicksToLabels(this.ticks),
            this.beforeFit(),
            this.fit(),
            this.afterFit(),
            this.afterUpdate();
        }
        configure() {
          let t,
            e,
            n = this.options.reverse;
          this.isHorizontal()
            ? ((t = this.left), (e = this.right))
            : ((t = this.top), (e = this.bottom), (n = !n)),
            (this._startPixel = t),
            (this._endPixel = e),
            (this._reversePixels = n),
            (this._length = e - t),
            (this._alignToPixels = this.options.alignToPixels);
        }
        afterUpdate() {
          m(this.options.afterUpdate, [this]);
        }
        beforeSetDimensions() {
          m(this.options.beforeSetDimensions, [this]);
        }
        setDimensions() {
          this.isHorizontal()
            ? ((this.width = this.maxWidth),
              (this.left = 0),
              (this.right = this.width))
            : ((this.height = this.maxHeight),
              (this.top = 0),
              (this.bottom = this.height)),
            (this.paddingLeft = 0),
            (this.paddingTop = 0),
            (this.paddingRight = 0),
            (this.paddingBottom = 0);
        }
        afterSetDimensions() {
          m(this.options.afterSetDimensions, [this]);
        }
        _callHooks(t) {
          this.chart.notifyPlugins(t, this.getContext()),
            m(this.options[t], [this]);
        }
        beforeDataLimits() {
          this._callHooks('beforeDataLimits');
        }
        determineDataLimits() {}
        afterDataLimits() {
          this._callHooks('afterDataLimits');
        }
        beforeBuildTicks() {
          this._callHooks('beforeBuildTicks');
        }
        buildTicks() {
          return [];
        }
        afterBuildTicks() {
          this._callHooks('afterBuildTicks');
        }
        beforeTickToLabelConversion() {
          m(this.options.beforeTickToLabelConversion, [this]);
        }
        generateTickLabels(t) {
          const e = this.options.ticks;
          let n, i, r;
          for (n = 0, i = t.length; n < i; n++)
            (r = t[n]), (r.label = m(e.callback, [r.value, n, t], this));
        }
        afterTickToLabelConversion() {
          m(this.options.afterTickToLabelConversion, [this]);
        }
        beforeCalculateLabelRotation() {
          m(this.options.beforeCalculateLabelRotation, [this]);
        }
        calculateLabelRotation() {
          const t = this.options,
            e = t.ticks,
            n = this.ticks.length,
            i = e.minRotation || 0,
            r = e.maxRotation;
          let o,
            s,
            a,
            c = i;
          if (
            !this._isVisible() ||
            !e.display ||
            i >= r ||
            n <= 1 ||
            !this.isHorizontal()
          )
            return void (this.labelRotation = i);
          const l = this._getLabelSizes(),
            h = l.widest.width,
            u = l.highest.height,
            f = Z(this.chart.width - h, 0, this.maxWidth);
          (o = t.offset ? this.maxWidth / n : f / (n - 1)),
            h + 6 > o &&
              ((o = f / (n - (t.offset ? 0.5 : 1))),
              (s =
                this.maxHeight -
                Wi(t.grid) -
                e.padding -
                Ui(t.title, this.chart.options.font)),
              (a = Math.sqrt(h * h + u * u)),
              (c = Y(
                Math.min(
                  Math.asin(Z((l.highest.height + 6) / o, -1, 1)),
                  Math.asin(Z(s / a, -1, 1)) - Math.asin(Z(u / a, -1, 1)),
                ),
              )),
              (c = Math.max(i, Math.min(r, c)))),
            (this.labelRotation = c);
        }
        afterCalculateLabelRotation() {
          m(this.options.afterCalculateLabelRotation, [this]);
        }
        afterAutoSkip() {}
        beforeFit() {
          m(this.options.beforeFit, [this]);
        }
        fit() {
          const t = { width: 0, height: 0 },
            {
              chart: e,
              options: { ticks: n, title: i, grid: r },
            } = this,
            o = this._isVisible(),
            s = this.isHorizontal();
          if (o) {
            const o = Ui(i, e.options.font);
            if (
              (s
                ? ((t.width = this.maxWidth), (t.height = Wi(r) + o))
                : ((t.height = this.maxHeight), (t.width = Wi(r) + o)),
              n.display && this.ticks.length)
            ) {
              const {
                  first: e,
                  last: i,
                  widest: r,
                  highest: o,
                } = this._getLabelSizes(),
                a = 2 * n.padding,
                c = U(this.labelRotation),
                l = Math.cos(c),
                h = Math.sin(c);
              if (s) {
                const e = n.mirror ? 0 : h * r.width + l * o.height;
                t.height = Math.min(this.maxHeight, t.height + e + a);
              } else {
                const e = n.mirror ? 0 : l * r.width + h * o.height;
                t.width = Math.min(this.maxWidth, t.width + e + a);
              }
              this._calculatePadding(e, i, h, l);
            }
          }
          this._handleMargins(),
            s
              ? ((this.width = this._length =
                  e.width - this._margins.left - this._margins.right),
                (this.height = t.height))
              : ((this.width = t.width),
                (this.height = this._length =
                  e.height - this._margins.top - this._margins.bottom));
        }
        _calculatePadding(t, e, n, i) {
          const {
              ticks: { align: r, padding: o },
              position: s,
            } = this.options,
            a = 0 !== this.labelRotation,
            c = 'top' !== s && 'x' === this.axis;
          if (this.isHorizontal()) {
            const s = this.getPixelForTick(0) - this.left,
              l = this.right - this.getPixelForTick(this.ticks.length - 1);
            let h = 0,
              u = 0;
            a
              ? c
                ? ((h = i * t.width), (u = n * e.height))
                : ((h = n * t.height), (u = i * e.width))
              : 'start' === r
              ? (u = e.width)
              : 'end' === r
              ? (h = t.width)
              : 'inner' !== r && ((h = t.width / 2), (u = e.width / 2)),
              (this.paddingLeft = Math.max(
                ((h - s + o) * this.width) / (this.width - s),
                0,
              )),
              (this.paddingRight = Math.max(
                ((u - l + o) * this.width) / (this.width - l),
                0,
              ));
          } else {
            let n = e.height / 2,
              i = t.height / 2;
            'start' === r
              ? ((n = 0), (i = t.height))
              : 'end' === r && ((n = e.height), (i = 0)),
              (this.paddingTop = n + o),
              (this.paddingBottom = i + o);
          }
        }
        _handleMargins() {
          this._margins &&
            ((this._margins.left = Math.max(
              this.paddingLeft,
              this._margins.left,
            )),
            (this._margins.top = Math.max(this.paddingTop, this._margins.top)),
            (this._margins.right = Math.max(
              this.paddingRight,
              this._margins.right,
            )),
            (this._margins.bottom = Math.max(
              this.paddingBottom,
              this._margins.bottom,
            )));
        }
        afterFit() {
          m(this.options.afterFit, [this]);
        }
        isHorizontal() {
          const { axis: t, position: e } = this.options;
          return 'top' === e || 'bottom' === e || 'x' === t;
        }
        isFullSize() {
          return this.options.fullSize;
        }
        _convertTicksToLabels(t) {
          let e, n;
          for (
            this.beforeTickToLabelConversion(),
              this.generateTickLabels(t),
              e = 0,
              n = t.length;
            e < n;
            e++
          )
            l(t[e].label) && (t.splice(e, 1), n--, e--);
          this.afterTickToLabelConversion();
        }
        _getLabelSizes() {
          let t = this._labelSizes;
          if (!t) {
            const e = this.options.ticks.sampleSize;
            let n = this.ticks;
            e < n.length && (n = Hi(n, e)),
              (this._labelSizes = t = this._computeLabelSizes(n, n.length));
          }
          return t;
        }
        _computeLabelSizes(t, e) {
          const { ctx: n, _longestTextCache: i } = this,
            r = [],
            o = [];
          let s,
            a,
            c,
            u,
            f,
            d,
            p,
            g,
            m,
            y,
            x,
            b = 0,
            _ = 0;
          for (s = 0; s < e; ++s) {
            if (
              ((u = t[s].label),
              (f = this._resolveTickFontOptions(s)),
              (n.font = d = f.string),
              (p = i[d] = i[d] || { data: {}, gc: [] }),
              (g = f.lineHeight),
              (m = y = 0),
              l(u) || h(u))
            ) {
              if (h(u))
                for (a = 0, c = u.length; a < c; ++a)
                  (x = u[a]),
                    l(x) || h(x) || ((m = Gt(n, p.data, p.gc, m, x)), (y += g));
            } else (m = Gt(n, p.data, p.gc, m, u)), (y = g);
            r.push(m), o.push(y), (b = Math.max(m, b)), (_ = Math.max(y, _));
          }
          !(function (t, e) {
            v(t, t => {
              const n = t.gc,
                i = n.length / 2;
              let r;
              if (i > e) {
                for (r = 0; r < i; ++r) delete t.data[n[r]];
                n.splice(0, i);
              }
            });
          })(i, e);
          const w = r.indexOf(b),
            k = o.indexOf(_),
            M = t => ({ width: r[t] || 0, height: o[t] || 0 });
          return {
            first: M(0),
            last: M(e - 1),
            widest: M(w),
            highest: M(k),
            widths: r,
            heights: o,
          };
        }
        getLabelForValue(t) {
          return t;
        }
        getPixelForValue(t, e) {
          return NaN;
        }
        getValueForPixel(t) {}
        getPixelForTick(t) {
          const e = this.ticks;
          return t < 0 || t > e.length - 1
            ? null
            : this.getPixelForValue(e[t].value);
        }
        getPixelForDecimal(t) {
          this._reversePixels && (t = 1 - t);
          const e = this._startPixel + t * this._length;
          return Z(
            this._alignToPixels ? Jt(this.chart, e, 0) : e,
            -32768,
            32767,
          );
        }
        getDecimalForPixel(t) {
          const e = (t - this._startPixel) / this._length;
          return this._reversePixels ? 1 - e : e;
        }
        getBasePixel() {
          return this.getPixelForValue(this.getBaseValue());
        }
        getBaseValue() {
          const { min: t, max: e } = this;
          return t < 0 && e < 0 ? e : t > 0 && e > 0 ? t : 0;
        }
        getContext(t) {
          const e = this.ticks || [];
          if (t >= 0 && t < e.length) {
            const n = e[t];
            return (
              n.$context ||
              (n.$context = (function (t, e, n) {
                return ge(t, { tick: n, index: e, type: 'tick' });
              })(this.getContext(), t, n))
            );
          }
          return (
            this.$context ||
            (this.$context = ge(this.chart.getContext(), {
              scale: this,
              type: 'scale',
            }))
          );
        }
        _tickSize() {
          const t = this.options.ticks,
            e = U(this.labelRotation),
            n = Math.abs(Math.cos(e)),
            i = Math.abs(Math.sin(e)),
            r = this._getLabelSizes(),
            o = t.autoSkipPadding || 0,
            s = r ? r.widest.width + o : 0,
            a = r ? r.highest.height + o : 0;
          return this.isHorizontal()
            ? a * n > s * i
              ? s / n
              : a / i
            : a * i < s * n
            ? a / n
            : s / i;
        }
        _isVisible() {
          const t = this.options.display;
          return 'auto' !== t ? !!t : this.getMatchingVisibleMetas().length > 0;
        }
        _computeGridLineItems(t) {
          const e = this.axis,
            n = this.chart,
            i = this.options,
            { grid: r, position: o } = i,
            s = r.offset,
            a = this.isHorizontal(),
            c = this.ticks.length + (s ? 1 : 0),
            l = Wi(r),
            h = [],
            f = r.setContext(this.getContext()),
            d = f.drawBorder ? f.borderWidth : 0,
            g = d / 2,
            m = function (t) {
              return Jt(n, t, d);
            };
          let v, y, x, b, _, w, k, M, P, O, E, S;
          if ('top' === o)
            (v = m(this.bottom)),
              (w = this.bottom - l),
              (M = v - g),
              (O = m(t.top) + g),
              (S = t.bottom);
          else if ('bottom' === o)
            (v = m(this.top)),
              (O = t.top),
              (S = m(t.bottom) - g),
              (w = v + g),
              (M = this.top + l);
          else if ('left' === o)
            (v = m(this.right)),
              (_ = this.right - l),
              (k = v - g),
              (P = m(t.left) + g),
              (E = t.right);
          else if ('right' === o)
            (v = m(this.left)),
              (P = t.left),
              (E = m(t.right) - g),
              (_ = v + g),
              (k = this.left + l);
          else if ('x' === e) {
            if ('center' === o) v = m((t.top + t.bottom) / 2 + 0.5);
            else if (u(o)) {
              const t = Object.keys(o)[0],
                e = o[t];
              v = m(this.chart.scales[t].getPixelForValue(e));
            }
            (O = t.top), (S = t.bottom), (w = v + g), (M = w + l);
          } else if ('y' === e) {
            if ('center' === o) v = m((t.left + t.right) / 2);
            else if (u(o)) {
              const t = Object.keys(o)[0],
                e = o[t];
              v = m(this.chart.scales[t].getPixelForValue(e));
            }
            (_ = v - g), (k = _ - l), (P = t.left), (E = t.right);
          }
          const T = p(i.ticks.maxTicksLimit, c),
            A = Math.max(1, Math.ceil(c / T));
          for (y = 0; y < c; y += A) {
            const t = r.setContext(this.getContext(y)),
              e = t.lineWidth,
              i = t.color,
              o = r.borderDash || [],
              c = t.borderDashOffset,
              l = t.tickWidth,
              u = t.tickColor,
              f = t.tickBorderDash || [],
              d = t.tickBorderDashOffset;
            (x = Vi(this, y, s)),
              void 0 !== x &&
                ((b = Jt(n, x, e)),
                a ? (_ = k = P = E = b) : (w = M = O = S = b),
                h.push({
                  tx1: _,
                  ty1: w,
                  tx2: k,
                  ty2: M,
                  x1: P,
                  y1: O,
                  x2: E,
                  y2: S,
                  width: e,
                  color: i,
                  borderDash: o,
                  borderDashOffset: c,
                  tickWidth: l,
                  tickColor: u,
                  tickBorderDash: f,
                  tickBorderDashOffset: d,
                }));
          }
          return (this._ticksLength = c), (this._borderValue = v), h;
        }
        _computeLabelItems(t) {
          const e = this.axis,
            n = this.options,
            { position: i, ticks: r } = n,
            o = this.isHorizontal(),
            s = this.ticks,
            { align: a, crossAlign: c, padding: l, mirror: f } = r,
            d = Wi(n.grid),
            p = d + l,
            g = f ? -l : p,
            m = -U(this.labelRotation),
            v = [];
          let y,
            x,
            b,
            _,
            w,
            k,
            M,
            P,
            O,
            E,
            S,
            T,
            A = 'middle';
          if ('top' === i)
            (k = this.bottom - g), (M = this._getXAxisLabelAlignment());
          else if ('bottom' === i)
            (k = this.top + g), (M = this._getXAxisLabelAlignment());
          else if ('left' === i) {
            const t = this._getYAxisLabelAlignment(d);
            (M = t.textAlign), (w = t.x);
          } else if ('right' === i) {
            const t = this._getYAxisLabelAlignment(d);
            (M = t.textAlign), (w = t.x);
          } else if ('x' === e) {
            if ('center' === i) k = (t.top + t.bottom) / 2 + p;
            else if (u(i)) {
              const t = Object.keys(i)[0],
                e = i[t];
              k = this.chart.scales[t].getPixelForValue(e) + p;
            }
            M = this._getXAxisLabelAlignment();
          } else if ('y' === e) {
            if ('center' === i) w = (t.left + t.right) / 2 - p;
            else if (u(i)) {
              const t = Object.keys(i)[0],
                e = i[t];
              w = this.chart.scales[t].getPixelForValue(e);
            }
            M = this._getYAxisLabelAlignment(d).textAlign;
          }
          'y' === e &&
            ('start' === a ? (A = 'top') : 'end' === a && (A = 'bottom'));
          const C = this._getLabelSizes();
          for (y = 0, x = s.length; y < x; ++y) {
            (b = s[y]), (_ = b.label);
            const t = r.setContext(this.getContext(y));
            (P = this.getPixelForTick(y) + r.labelOffset),
              (O = this._resolveTickFontOptions(y)),
              (E = O.lineHeight),
              (S = h(_) ? _.length : 1);
            const e = S / 2,
              n = t.color,
              a = t.textStrokeColor,
              l = t.textStrokeWidth;
            let u,
              d = M;
            if (
              (o
                ? ((w = P),
                  'inner' === M &&
                    (d =
                      y === x - 1
                        ? this.options.reverse
                          ? 'left'
                          : 'right'
                        : 0 === y
                        ? this.options.reverse
                          ? 'right'
                          : 'left'
                        : 'center'),
                  (T =
                    'top' === i
                      ? 'near' === c || 0 !== m
                        ? -S * E + E / 2
                        : 'center' === c
                        ? -C.highest.height / 2 - e * E + E
                        : -C.highest.height + E / 2
                      : 'near' === c || 0 !== m
                      ? E / 2
                      : 'center' === c
                      ? C.highest.height / 2 - e * E
                      : C.highest.height - S * E),
                  f && (T *= -1))
                : ((k = P), (T = ((1 - S) * E) / 2)),
              t.showLabelBackdrop)
            ) {
              const e = fe(t.backdropPadding),
                n = C.heights[y],
                i = C.widths[y];
              let r = k + T - e.top,
                o = w - e.left;
              switch (A) {
                case 'middle':
                  r -= n / 2;
                  break;
                case 'bottom':
                  r -= n;
              }
              switch (M) {
                case 'center':
                  o -= i / 2;
                  break;
                case 'right':
                  o -= i;
              }
              u = {
                left: o,
                top: r,
                width: i + e.width,
                height: n + e.height,
                color: t.backdropColor,
              };
            }
            v.push({
              rotation: m,
              label: _,
              font: O,
              color: n,
              strokeColor: a,
              strokeWidth: l,
              textOffset: T,
              textAlign: d,
              textBaseline: A,
              translation: [w, k],
              backdrop: u,
            });
          }
          return v;
        }
        _getXAxisLabelAlignment() {
          const { position: t, ticks: e } = this.options;
          if (-U(this.labelRotation)) return 'top' === t ? 'left' : 'right';
          let n = 'center';
          return (
            'start' === e.align
              ? (n = 'left')
              : 'end' === e.align
              ? (n = 'right')
              : 'inner' === e.align && (n = 'inner'),
            n
          );
        }
        _getYAxisLabelAlignment(t) {
          const {
              position: e,
              ticks: { crossAlign: n, mirror: i, padding: r },
            } = this.options,
            o = t + r,
            s = this._getLabelSizes().widest.width;
          let a, c;
          return (
            'left' === e
              ? i
                ? ((c = this.right + r),
                  'near' === n
                    ? (a = 'left')
                    : 'center' === n
                    ? ((a = 'center'), (c += s / 2))
                    : ((a = 'right'), (c += s)))
                : ((c = this.right - o),
                  'near' === n
                    ? (a = 'right')
                    : 'center' === n
                    ? ((a = 'center'), (c -= s / 2))
                    : ((a = 'left'), (c = this.left)))
              : 'right' === e
              ? i
                ? ((c = this.left + r),
                  'near' === n
                    ? (a = 'right')
                    : 'center' === n
                    ? ((a = 'center'), (c -= s / 2))
                    : ((a = 'left'), (c -= s)))
                : ((c = this.left + o),
                  'near' === n
                    ? (a = 'left')
                    : 'center' === n
                    ? ((a = 'center'), (c += s / 2))
                    : ((a = 'right'), (c = this.right)))
              : (a = 'right'),
            { textAlign: a, x: c }
          );
        }
        _computeLabelArea() {
          if (this.options.ticks.mirror) return;
          const t = this.chart,
            e = this.options.position;
          return 'left' === e || 'right' === e
            ? { top: 0, left: this.left, bottom: t.height, right: this.right }
            : 'top' === e || 'bottom' === e
            ? { top: this.top, left: 0, bottom: this.bottom, right: t.width }
            : void 0;
        }
        drawBackground() {
          const {
            ctx: t,
            options: { backgroundColor: e },
            left: n,
            top: i,
            width: r,
            height: o,
          } = this;
          e &&
            (t.save(), (t.fillStyle = e), t.fillRect(n, i, r, o), t.restore());
        }
        getLineWidthForValue(t) {
          const e = this.options.grid;
          if (!this._isVisible() || !e.display) return 0;
          const n = this.ticks.findIndex(e => e.value === t);
          if (n >= 0) {
            return e.setContext(this.getContext(n)).lineWidth;
          }
          return 0;
        }
        drawGrid(t) {
          const e = this.options.grid,
            n = this.ctx,
            i =
              this._gridLineItems ||
              (this._gridLineItems = this._computeGridLineItems(t));
          let r, o;
          const s = (t, e, i) => {
            i.width &&
              i.color &&
              (n.save(),
              (n.lineWidth = i.width),
              (n.strokeStyle = i.color),
              n.setLineDash(i.borderDash || []),
              (n.lineDashOffset = i.borderDashOffset),
              n.beginPath(),
              n.moveTo(t.x, t.y),
              n.lineTo(e.x, e.y),
              n.stroke(),
              n.restore());
          };
          if (e.display)
            for (r = 0, o = i.length; r < o; ++r) {
              const t = i[r];
              e.drawOnChartArea &&
                s({ x: t.x1, y: t.y1 }, { x: t.x2, y: t.y2 }, t),
                e.drawTicks &&
                  s(
                    { x: t.tx1, y: t.ty1 },
                    { x: t.tx2, y: t.ty2 },
                    {
                      color: t.tickColor,
                      width: t.tickWidth,
                      borderDash: t.tickBorderDash,
                      borderDashOffset: t.tickBorderDashOffset,
                    },
                  );
            }
        }
        drawBorder() {
          const {
              chart: t,
              ctx: e,
              options: { grid: n },
            } = this,
            i = n.setContext(this.getContext()),
            r = n.drawBorder ? i.borderWidth : 0;
          if (!r) return;
          const o = n.setContext(this.getContext(0)).lineWidth,
            s = this._borderValue;
          let a, c, l, h;
          this.isHorizontal()
            ? ((a = Jt(t, this.left, r) - r / 2),
              (c = Jt(t, this.right, o) + o / 2),
              (l = h = s))
            : ((l = Jt(t, this.top, r) - r / 2),
              (h = Jt(t, this.bottom, o) + o / 2),
              (a = c = s)),
            e.save(),
            (e.lineWidth = i.borderWidth),
            (e.strokeStyle = i.borderColor),
            e.beginPath(),
            e.moveTo(a, l),
            e.lineTo(c, h),
            e.stroke(),
            e.restore();
        }
        drawLabels(t) {
          if (!this.options.ticks.display) return;
          const e = this.ctx,
            n = this._computeLabelArea();
          n && Zt(e, n);
          const i =
            this._labelItems || (this._labelItems = this._computeLabelItems(t));
          let r, o;
          for (r = 0, o = i.length; r < o; ++r) {
            const t = i[r],
              n = t.font,
              o = t.label;
            t.backdrop &&
              ((e.fillStyle = t.backdrop.color),
              e.fillRect(
                t.backdrop.left,
                t.backdrop.top,
                t.backdrop.width,
                t.backdrop.height,
              )),
              ie(e, o, 0, t.textOffset, n, t);
          }
          n && te(e);
        }
        drawTitle() {
          const {
            ctx: t,
            options: { position: e, title: n, reverse: i },
          } = this;
          if (!n.display) return;
          const r = de(n.font),
            o = fe(n.padding),
            a = n.align;
          let c = r.lineHeight / 2;
          'bottom' === e || 'center' === e || u(e)
            ? ((c += o.bottom),
              h(n.text) && (c += r.lineHeight * (n.text.length - 1)))
            : (c += o.top);
          const {
            titleX: l,
            titleY: f,
            maxWidth: d,
            rotation: p,
          } = (function (t, e, n, i) {
            const { top: r, left: o, bottom: a, right: c, chart: l } = t,
              { chartArea: h, scales: f } = l;
            let d,
              p,
              g,
              m = 0;
            const v = a - r,
              y = c - o;
            if (t.isHorizontal()) {
              if (((p = s(i, o, c)), u(n))) {
                const t = Object.keys(n)[0],
                  i = n[t];
                g = f[t].getPixelForValue(i) + v - e;
              } else
                g =
                  'center' === n ? (h.bottom + h.top) / 2 + v - e : zi(t, n, e);
              d = c - o;
            } else {
              if (u(n)) {
                const t = Object.keys(n)[0],
                  i = n[t];
                p = f[t].getPixelForValue(i) - y + e;
              } else
                p =
                  'center' === n ? (h.left + h.right) / 2 - y + e : zi(t, n, e);
              (g = s(i, a, r)), (m = 'left' === n ? -j : j);
            }
            return { titleX: p, titleY: g, maxWidth: d, rotation: m };
          })(this, c, e, a);
          ie(t, n.text, 0, 0, r, {
            color: n.color,
            maxWidth: d,
            rotation: p,
            textAlign: Yi(a, e, i),
            textBaseline: 'middle',
            translation: [l, f],
          });
        }
        draw(t) {
          this._isVisible() &&
            (this.drawBackground(),
            this.drawGrid(t),
            this.drawBorder(),
            this.drawTitle(),
            this.drawLabels(t));
        }
        _layers() {
          const t = this.options,
            e = (t.ticks && t.ticks.z) || 0,
            n = p(t.grid && t.grid.z, -1);
          return this._isVisible() && this.draw === Gi.prototype.draw
            ? [
                {
                  z: n,
                  draw: t => {
                    this.drawBackground(), this.drawGrid(t), this.drawTitle();
                  },
                },
                {
                  z: n + 1,
                  draw: () => {
                    this.drawBorder();
                  },
                },
                {
                  z: e,
                  draw: t => {
                    this.drawLabels(t);
                  },
                },
              ]
            : [
                {
                  z: e,
                  draw: t => {
                    this.draw(t);
                  },
                },
              ];
        }
        getMatchingVisibleMetas(t) {
          const e = this.chart.getSortedVisibleDatasetMetas(),
            n = this.axis + 'AxisID',
            i = [];
          let r, o;
          for (r = 0, o = e.length; r < o; ++r) {
            const o = e[r];
            o[n] !== this.id || (t && o.type !== t) || i.push(o);
          }
          return i;
        }
        _resolveTickFontOptions(t) {
          return de(this.options.ticks.setContext(this.getContext(t)).font);
        }
        _maxDigits() {
          const t = this._resolveTickFontOptions(0).lineHeight;
          return (this.isHorizontal() ? this.width : this.height) / t;
        }
      }
      class qi {
        constructor(t, e, n) {
          (this.type = t),
            (this.scope = e),
            (this.override = n),
            (this.items = Object.create(null));
        }
        isForType(t) {
          return Object.prototype.isPrototypeOf.call(
            this.type.prototype,
            t.prototype,
          );
        }
        register(t) {
          const e = Object.getPrototypeOf(t);
          let n;
          (function (t) {
            return 'id' in t && 'defaults' in t;
          })(e) && (n = this.register(e));
          const i = this.items,
            r = t.id,
            o = this.scope + '.' + r;
          if (!r) throw new Error('class does not have id: ' + t);
          return (
            r in i ||
              ((i[r] = t),
              (function (t, e, n) {
                const i = w(Object.create(null), [
                  n ? Yt.get(n) : {},
                  Yt.get(e),
                  t.defaults,
                ]);
                Yt.set(e, i),
                  t.defaultRoutes &&
                    (function (t, e) {
                      Object.keys(e).forEach(n => {
                        const i = n.split('.'),
                          r = i.pop(),
                          o = [t].concat(i).join('.'),
                          s = e[n].split('.'),
                          a = s.pop(),
                          c = s.join('.');
                        Yt.route(o, r, c, a);
                      });
                    })(e, t.defaultRoutes);
                t.descriptors && Yt.describe(e, t.descriptors);
              })(t, o, n),
              this.override && Yt.override(t.id, t.overrides)),
            o
          );
        }
        get(t) {
          return this.items[t];
        }
        unregister(t) {
          const e = this.items,
            n = t.id,
            i = this.scope;
          n in e && delete e[n],
            i && n in Yt[i] && (delete Yt[i][n], this.override && delete Ht[n]);
        }
      }
      var Ji = new (class {
        constructor() {
          (this.controllers = new qi(Dn, 'datasets', !0)),
            (this.elements = new qi(ji, 'elements')),
            (this.plugins = new qi(Object, 'plugins')),
            (this.scales = new qi(Gi, 'scales')),
            (this._typedRegistries = [
              this.controllers,
              this.scales,
              this.elements,
            ]);
        }
        add(...t) {
          this._each('register', t);
        }
        remove(...t) {
          this._each('unregister', t);
        }
        addControllers(...t) {
          this._each('register', t, this.controllers);
        }
        addElements(...t) {
          this._each('register', t, this.elements);
        }
        addPlugins(...t) {
          this._each('register', t, this.plugins);
        }
        addScales(...t) {
          this._each('register', t, this.scales);
        }
        getController(t) {
          return this._get(t, this.controllers, 'controller');
        }
        getElement(t) {
          return this._get(t, this.elements, 'element');
        }
        getPlugin(t) {
          return this._get(t, this.plugins, 'plugin');
        }
        getScale(t) {
          return this._get(t, this.scales, 'scale');
        }
        removeControllers(...t) {
          this._each('unregister', t, this.controllers);
        }
        removeElements(...t) {
          this._each('unregister', t, this.elements);
        }
        removePlugins(...t) {
          this._each('unregister', t, this.plugins);
        }
        removeScales(...t) {
          this._each('unregister', t, this.scales);
        }
        _each(t, e, n) {
          [...e].forEach(e => {
            const i = n || this._getRegistryForType(e);
            n || i.isForType(e) || (i === this.plugins && e.id)
              ? this._exec(t, i, e)
              : v(e, e => {
                  const i = n || this._getRegistryForType(e);
                  this._exec(t, i, e);
                });
          });
        }
        _exec(t, e, n) {
          const i = E(t);
          m(n['before' + i], [], n), e[t](n), m(n['after' + i], [], n);
        }
        _getRegistryForType(t) {
          for (let e = 0; e < this._typedRegistries.length; e++) {
            const n = this._typedRegistries[e];
            if (n.isForType(t)) return n;
          }
          return this.plugins;
        }
        _get(t, e, n) {
          const i = e.get(t);
          if (void 0 === i)
            throw new Error('"' + t + '" is not a registered ' + n + '.');
          return i;
        }
      })();
      class Xi {
        constructor() {
          this._init = [];
        }
        notify(t, e, n, i) {
          'beforeInit' === e &&
            ((this._init = this._createDescriptors(t, !0)),
            this._notify(this._init, t, 'install'));
          const r = i ? this._descriptors(t).filter(i) : this._descriptors(t),
            o = this._notify(r, t, e, n);
          return (
            'afterDestroy' === e &&
              (this._notify(r, t, 'stop'),
              this._notify(this._init, t, 'uninstall')),
            o
          );
        }
        _notify(t, e, n, i) {
          i = i || {};
          for (const r of t) {
            const t = r.plugin;
            if (!1 === m(t[n], [e, i, r.options], t) && i.cancelable) return !1;
          }
          return !0;
        }
        invalidate() {
          l(this._cache) ||
            ((this._oldCache = this._cache), (this._cache = void 0));
        }
        _descriptors(t) {
          if (this._cache) return this._cache;
          const e = (this._cache = this._createDescriptors(t));
          return this._notifyStateChanges(t), e;
        }
        _createDescriptors(t, e) {
          const n = t && t.config,
            i = p(n.options && n.options.plugins, {}),
            r = (function (t) {
              const e = [],
                n = Object.keys(Ji.plugins.items);
              for (let t = 0; t < n.length; t++) e.push(Ji.getPlugin(n[t]));
              const i = t.plugins || [];
              for (let t = 0; t < i.length; t++) {
                const n = i[t];
                -1 === e.indexOf(n) && e.push(n);
              }
              return e;
            })(n);
          return !1 !== i || e
            ? (function (t, e, n, i) {
                const r = [],
                  o = t.getContext();
                for (let s = 0; s < e.length; s++) {
                  const a = e[s],
                    c = a.id,
                    l = Ki(n[c], i);
                  null !== l &&
                    r.push({ plugin: a, options: Qi(t.config, a, l, o) });
                }
                return r;
              })(t, r, i, e)
            : [];
        }
        _notifyStateChanges(t) {
          const e = this._oldCache || [],
            n = this._cache,
            i = (t, e) =>
              t.filter(t => !e.some(e => t.plugin.id === e.plugin.id));
          this._notify(i(e, n), t, 'stop'), this._notify(i(n, e), t, 'start');
        }
      }
      function Ki(t, e) {
        return e || !1 !== t ? (!0 === t ? {} : t) : null;
      }
      function Qi(t, e, n, i) {
        const r = t.pluginScopeKeys(e),
          o = t.getOptionScopes(n, r);
        return t.createResolver(o, i, [''], {
          scriptable: !1,
          indexable: !1,
          allKeys: !0,
        });
      }
      function Zi(t, e) {
        const n = Yt.datasets[t] || {};
        return (
          ((e.datasets || {})[t] || {}).indexAxis ||
          e.indexAxis ||
          n.indexAxis ||
          'x'
        );
      }
      function tr(t, e) {
        return 'x' === t || 'y' === t
          ? t
          : e.axis ||
              ('top' === (n = e.position) || 'bottom' === n
                ? 'x'
                : 'left' === n || 'right' === n
                ? 'y'
                : void 0) ||
              t.charAt(0).toLowerCase();
        var n;
      }
      function er(t) {
        const e = t.options || (t.options = {});
        (e.plugins = p(e.plugins, {})),
          (e.scales = (function (t, e) {
            const n = Ht[t.type] || { scales: {} },
              i = e.scales || {},
              r = Zi(t.type, e),
              o = Object.create(null),
              s = Object.create(null);
            return (
              Object.keys(i).forEach(t => {
                const e = i[t];
                if (!u(e))
                  return console.error(
                    'Invalid scale configuration for scale: ' + t,
                  );
                if (e._proxy)
                  return console.warn(
                    'Ignoring resolver passed as options for scale: ' + t,
                  );
                const a = tr(t, e),
                  c = (function (t, e) {
                    return t === e ? '_index_' : '_value_';
                  })(a, r),
                  l = n.scales || {};
                (o[a] = o[a] || t),
                  (s[t] = k(Object.create(null), [{ axis: a }, e, l[a], l[c]]));
              }),
              t.data.datasets.forEach(n => {
                const r = n.type || t.type,
                  a = n.indexAxis || Zi(r, e),
                  c = (Ht[r] || {}).scales || {};
                Object.keys(c).forEach(t => {
                  const e = (function (t, e) {
                      let n = t;
                      return (
                        '_index_' === t
                          ? (n = e)
                          : '_value_' === t && (n = 'x' === e ? 'y' : 'x'),
                        n
                      );
                    })(t, a),
                    r = n[e + 'AxisID'] || o[e] || e;
                  (s[r] = s[r] || Object.create(null)),
                    k(s[r], [{ axis: e }, i[r], c[t]]);
                });
              }),
              Object.keys(s).forEach(t => {
                const e = s[t];
                k(e, [Yt.scales[e.type], Yt.scale]);
              }),
              s
            );
          })(t, e));
      }
      function nr(t) {
        return (
          ((t = t || {}).datasets = t.datasets || []),
          (t.labels = t.labels || []),
          t
        );
      }
      const ir = new Map(),
        rr = new Set();
      function or(t, e) {
        let n = ir.get(t);
        return n || ((n = e()), ir.set(t, n), rr.add(n)), n;
      }
      const sr = (t, e, n) => {
        const i = O(e, n);
        void 0 !== i && t.add(i);
      };
      class ar {
        constructor(t) {
          (this._config = (function (t) {
            return ((t = t || {}).data = nr(t.data)), er(t), t;
          })(t)),
            (this._scopeCache = new Map()),
            (this._resolverCache = new Map());
        }
        get platform() {
          return this._config.platform;
        }
        get type() {
          return this._config.type;
        }
        set type(t) {
          this._config.type = t;
        }
        get data() {
          return this._config.data;
        }
        set data(t) {
          this._config.data = nr(t);
        }
        get options() {
          return this._config.options;
        }
        set options(t) {
          this._config.options = t;
        }
        get plugins() {
          return this._config.plugins;
        }
        update() {
          const t = this._config;
          this.clearCache(), er(t);
        }
        clearCache() {
          this._scopeCache.clear(), this._resolverCache.clear();
        }
        datasetScopeKeys(t) {
          return or(t, () => [['datasets.' + t, '']]);
        }
        datasetAnimationScopeKeys(t, e) {
          return or(`${t}.transition.${e}`, () => [
            [`datasets.${t}.transitions.${e}`, 'transitions.' + e],
            ['datasets.' + t, ''],
          ]);
        }
        datasetElementScopeKeys(t, e) {
          return or(`${t}-${e}`, () => [
            [
              `datasets.${t}.elements.${e}`,
              'datasets.' + t,
              'elements.' + e,
              '',
            ],
          ]);
        }
        pluginScopeKeys(t) {
          const e = t.id;
          return or(`${this.type}-plugin-${e}`, () => [
            ['plugins.' + e, ...(t.additionalOptionScopes || [])],
          ]);
        }
        _cachedScopes(t, e) {
          const n = this._scopeCache;
          let i = n.get(t);
          return (i && !e) || ((i = new Map()), n.set(t, i)), i;
        }
        getOptionScopes(t, e, n) {
          const { options: i, type: r } = this,
            o = this._cachedScopes(t, n),
            s = o.get(e);
          if (s) return s;
          const a = new Set();
          e.forEach(e => {
            t && (a.add(t), e.forEach(e => sr(a, t, e))),
              e.forEach(t => sr(a, i, t)),
              e.forEach(t => sr(a, Ht[r] || {}, t)),
              e.forEach(t => sr(a, Yt, t)),
              e.forEach(t => sr(a, Vt, t));
          });
          const c = Array.from(a);
          return (
            0 === c.length && c.push(Object.create(null)),
            rr.has(e) && o.set(e, c),
            c
          );
        }
        chartOptionScopes() {
          const { options: t, type: e } = this;
          return [t, Ht[e] || {}, Yt.datasets[e] || {}, { type: e }, Yt, Vt];
        }
        resolveNamedOptions(t, e, n, i = ['']) {
          const r = { $shared: !0 },
            { resolver: o, subPrefixes: s } = cr(this._resolverCache, t, i);
          let a = o;
          if (
            (function (t, e) {
              const { isScriptable: n, isIndexable: i } = Me(t);
              for (const r of e) {
                const e = n(r),
                  o = i(r),
                  s = (o || e) && t[r];
                if ((e && (T(s) || lr(s))) || (o && h(s))) return !0;
              }
              return !1;
            })(o, e)
          ) {
            r.$shared = !1;
            a = ke(o, (n = T(n) ? n() : n), this.createResolver(t, n, s));
          }
          for (const t of e) r[t] = a[t];
          return r;
        }
        createResolver(t, e, n = [''], i) {
          const { resolver: r } = cr(this._resolverCache, t, n);
          return u(e) ? ke(r, e, void 0, i) : r;
        }
      }
      function cr(t, e, n) {
        let i = t.get(e);
        i || ((i = new Map()), t.set(e, i));
        const r = n.join();
        let o = i.get(r);
        if (!o) {
          (o = {
            resolver: we(e, n),
            subPrefixes: n.filter(t => !t.toLowerCase().includes('hover')),
          }),
            i.set(r, o);
        }
        return o;
      }
      const lr = t =>
        u(t) &&
        Object.getOwnPropertyNames(t).reduce((e, n) => e || T(t[n]), !1);
      const hr = ['top', 'bottom', 'left', 'right', 'chartArea'];
      function ur(t, e) {
        return (
          'top' === t || 'bottom' === t || (-1 === hr.indexOf(t) && 'x' === e)
        );
      }
      function fr(t, e) {
        return function (n, i) {
          return n[t] === i[t] ? n[e] - i[e] : n[t] - i[t];
        };
      }
      function dr(t) {
        const e = t.chart,
          n = e.options.animation;
        e.notifyPlugins('afterRender'), m(n && n.onComplete, [t], e);
      }
      function pr(t) {
        const e = t.chart,
          n = e.options.animation;
        m(n && n.onProgress, [t], e);
      }
      function gr(t) {
        return (
          Ve() && 'string' == typeof t
            ? (t = document.getElementById(t))
            : t && t.length && (t = t[0]),
          t && t.canvas && (t = t.canvas),
          t
        );
      }
      const mr = {},
        vr = t => {
          const e = gr(t);
          return Object.values(mr)
            .filter(t => t.canvas === e)
            .pop();
        };
      function yr(t, e, n) {
        const i = Object.keys(t);
        for (const r of i) {
          const i = +r;
          if (i >= e) {
            const o = t[r];
            delete t[r], (n > 0 || i > e) && (t[i + n] = o);
          }
        }
      }
      class xr {
        constructor(t, e) {
          const n = (this.config = new ar(e)),
            i = gr(t),
            r = vr(i);
          if (r)
            throw new Error(
              "Canvas is already in use. Chart with ID '" +
                r.id +
                "' must be destroyed before the canvas can be reused.",
            );
          const o = n.createResolver(n.chartOptionScopes(), this.getContext());
          (this.platform = new (n.platform ||
            (function (t) {
              return !Ve() ||
                ('undefined' != typeof OffscreenCanvas &&
                  t instanceof OffscreenCanvas)
                ? _i
                : Ii;
            })(i))()),
            this.platform.updateConfig(n);
          const s = this.platform.acquireContext(i, o.aspectRatio),
            a = s && s.canvas,
            l = a && a.height,
            h = a && a.width;
          (this.id = c()),
            (this.ctx = s),
            (this.canvas = a),
            (this.width = h),
            (this.height = l),
            (this._options = o),
            (this._aspectRatio = this.aspectRatio),
            (this._layers = []),
            (this._metasets = []),
            (this._stacks = void 0),
            (this.boxes = []),
            (this.currentDevicePixelRatio = void 0),
            (this.chartArea = void 0),
            (this._active = []),
            (this._lastEvent = void 0),
            (this._listeners = {}),
            (this._responsiveListeners = void 0),
            (this._sortedMetasets = []),
            (this.scales = {}),
            (this._plugins = new Xi()),
            (this.$proxies = {}),
            (this._hiddenIndices = {}),
            (this.attached = !1),
            (this._animationsDisabled = void 0),
            (this.$context = void 0),
            (this._doResize = (function (t, e) {
              let n;
              return function (...i) {
                return (
                  e
                    ? (clearTimeout(n), (n = setTimeout(t, e, i)))
                    : t.apply(this, i),
                  e
                );
              };
            })(t => this.update(t), o.resizeDelay || 0)),
            (this._dataChanges = []),
            (mr[this.id] = this),
            s && a
              ? (vn.listen(this, 'complete', dr),
                vn.listen(this, 'progress', pr),
                this._initialize(),
                this.attached && this.update())
              : console.error(
                  "Failed to create chart: can't acquire context from the given item",
                );
        }
        get aspectRatio() {
          const {
            options: { aspectRatio: t, maintainAspectRatio: e },
            width: n,
            height: i,
            _aspectRatio: r,
          } = this;
          return l(t) ? (e && r ? r : i ? n / i : null) : t;
        }
        get data() {
          return this.config.data;
        }
        set data(t) {
          this.config.data = t;
        }
        get options() {
          return this._options;
        }
        set options(t) {
          this.config.options = t;
        }
        _initialize() {
          return (
            this.notifyPlugins('beforeInit'),
            this.options.responsive
              ? this.resize()
              : Qe(this, this.options.devicePixelRatio),
            this.bindEvents(),
            this.notifyPlugins('afterInit'),
            this
          );
        }
        clear() {
          return Xt(this.canvas, this.ctx), this;
        }
        stop() {
          return vn.stop(this), this;
        }
        resize(t, e) {
          vn.running(this)
            ? (this._resizeBeforeDraw = { width: t, height: e })
            : this._resize(t, e);
        }
        _resize(t, e) {
          const n = this.options,
            i = this.canvas,
            r = n.maintainAspectRatio && this.aspectRatio,
            o = this.platform.getMaximumSize(i, t, e, r),
            s = n.devicePixelRatio || this.platform.getDevicePixelRatio(),
            a = this.width ? 'resize' : 'attach';
          (this.width = o.width),
            (this.height = o.height),
            (this._aspectRatio = this.aspectRatio),
            Qe(this, s, !0) &&
              (this.notifyPlugins('resize', { size: o }),
              m(n.onResize, [this, o], this),
              this.attached && this._doResize(a) && this.render());
        }
        ensureScalesHaveIDs() {
          v(this.options.scales || {}, (t, e) => {
            t.id = e;
          });
        }
        buildOrUpdateScales() {
          const t = this.options,
            e = t.scales,
            n = this.scales,
            i = Object.keys(n).reduce((t, e) => ((t[e] = !1), t), {});
          let r = [];
          e &&
            (r = r.concat(
              Object.keys(e).map(t => {
                const n = e[t],
                  i = tr(t, n),
                  r = 'r' === i,
                  o = 'x' === i;
                return {
                  options: n,
                  dposition: r ? 'chartArea' : o ? 'bottom' : 'left',
                  dtype: r ? 'radialLinear' : o ? 'category' : 'linear',
                };
              }),
            )),
            v(r, e => {
              const r = e.options,
                o = r.id,
                s = tr(o, r),
                a = p(r.type, e.dtype);
              (void 0 !== r.position &&
                ur(r.position, s) === ur(e.dposition)) ||
                (r.position = e.dposition),
                (i[o] = !0);
              let c = null;
              if (o in n && n[o].type === a) c = n[o];
              else {
                (c = new (Ji.getScale(a))({
                  id: o,
                  type: a,
                  ctx: this.ctx,
                  chart: this,
                })),
                  (n[c.id] = c);
              }
              c.init(r, t);
            }),
            v(i, (t, e) => {
              t || delete n[e];
            }),
            v(n, t => {
              xi.configure(this, t, t.options), xi.addBox(this, t);
            });
        }
        _updateMetasets() {
          const t = this._metasets,
            e = this.data.datasets.length,
            n = t.length;
          if ((t.sort((t, e) => t.index - e.index), n > e)) {
            for (let t = e; t < n; ++t) this._destroyDatasetMeta(t);
            t.splice(e, n - e);
          }
          this._sortedMetasets = t.slice(0).sort(fr('order', 'index'));
        }
        _removeUnreferencedMetasets() {
          const {
            _metasets: t,
            data: { datasets: e },
          } = this;
          t.length > e.length && delete this._stacks,
            t.forEach((t, n) => {
              0 === e.filter(e => e === t._dataset).length &&
                this._destroyDatasetMeta(n);
            });
        }
        buildOrUpdateControllers() {
          const t = [],
            e = this.data.datasets;
          let n, i;
          for (
            this._removeUnreferencedMetasets(), n = 0, i = e.length;
            n < i;
            n++
          ) {
            const i = e[n];
            let r = this.getDatasetMeta(n);
            const o = i.type || this.config.type;
            if (
              (r.type &&
                r.type !== o &&
                (this._destroyDatasetMeta(n), (r = this.getDatasetMeta(n))),
              (r.type = o),
              (r.indexAxis = i.indexAxis || Zi(o, this.options)),
              (r.order = i.order || 0),
              (r.index = n),
              (r.label = '' + i.label),
              (r.visible = this.isDatasetVisible(n)),
              r.controller)
            )
              r.controller.updateIndex(n), r.controller.linkScales();
            else {
              const e = Ji.getController(o),
                { datasetElementType: i, dataElementType: s } = Yt.datasets[o];
              Object.assign(e.prototype, {
                dataElementType: Ji.getElement(s),
                datasetElementType: i && Ji.getElement(i),
              }),
                (r.controller = new e(this, n)),
                t.push(r.controller);
            }
          }
          return this._updateMetasets(), t;
        }
        _resetElements() {
          v(
            this.data.datasets,
            (t, e) => {
              this.getDatasetMeta(e).controller.reset();
            },
            this,
          );
        }
        reset() {
          this._resetElements(), this.notifyPlugins('reset');
        }
        update(t) {
          const e = this.config;
          e.update();
          const n = (this._options = e.createResolver(
              e.chartOptionScopes(),
              this.getContext(),
            )),
            i = (this._animationsDisabled = !n.animation);
          if (
            (this._updateScales(),
            this._checkEventBindings(),
            this._updateHiddenIndices(),
            this._plugins.invalidate(),
            !1 ===
              this.notifyPlugins('beforeUpdate', { mode: t, cancelable: !0 }))
          )
            return;
          const r = this.buildOrUpdateControllers();
          this.notifyPlugins('beforeElementsUpdate');
          let o = 0;
          for (let t = 0, e = this.data.datasets.length; t < e; t++) {
            const { controller: e } = this.getDatasetMeta(t),
              n = !i && -1 === r.indexOf(e);
            e.buildOrUpdateElements(n), (o = Math.max(+e.getMaxOverflow(), o));
          }
          (o = this._minPadding = n.layout.autoPadding ? o : 0),
            this._updateLayout(o),
            i ||
              v(r, t => {
                t.reset();
              }),
            this._updateDatasets(t),
            this.notifyPlugins('afterUpdate', { mode: t }),
            this._layers.sort(fr('z', '_idx'));
          const { _active: s, _lastEvent: a } = this;
          a
            ? this._eventHandler(a, !0)
            : s.length && this._updateHoverStyles(s, s, !0),
            this.render();
        }
        _updateScales() {
          v(this.scales, t => {
            xi.removeBox(this, t);
          }),
            this.ensureScalesHaveIDs(),
            this.buildOrUpdateScales();
        }
        _checkEventBindings() {
          const t = this.options,
            e = new Set(Object.keys(this._listeners)),
            n = new Set(t.events);
          (A(e, n) && !!this._responsiveListeners === t.responsive) ||
            (this.unbindEvents(), this.bindEvents());
        }
        _updateHiddenIndices() {
          const { _hiddenIndices: t } = this,
            e = this._getUniformDataChanges() || [];
          for (const { method: n, start: i, count: r } of e) {
            yr(t, i, '_removeElements' === n ? -r : r);
          }
        }
        _getUniformDataChanges() {
          const t = this._dataChanges;
          if (!t || !t.length) return;
          this._dataChanges = [];
          const e = this.data.datasets.length,
            n = e =>
              new Set(
                t
                  .filter(t => t[0] === e)
                  .map((t, e) => e + ',' + t.splice(1).join(',')),
              ),
            i = n(0);
          for (let t = 1; t < e; t++) if (!A(i, n(t))) return;
          return Array.from(i)
            .map(t => t.split(','))
            .map(t => ({ method: t[1], start: +t[2], count: +t[3] }));
        }
        _updateLayout(t) {
          if (!1 === this.notifyPlugins('beforeLayout', { cancelable: !0 }))
            return;
          xi.update(this, this.width, this.height, t);
          const e = this.chartArea,
            n = e.width <= 0 || e.height <= 0;
          (this._layers = []),
            v(
              this.boxes,
              t => {
                (n && 'chartArea' === t.position) ||
                  (t.configure && t.configure(),
                  this._layers.push(...t._layers()));
              },
              this,
            ),
            this._layers.forEach((t, e) => {
              t._idx = e;
            }),
            this.notifyPlugins('afterLayout');
        }
        _updateDatasets(t) {
          if (
            !1 !==
            this.notifyPlugins('beforeDatasetsUpdate', {
              mode: t,
              cancelable: !0,
            })
          ) {
            for (let t = 0, e = this.data.datasets.length; t < e; ++t)
              this.getDatasetMeta(t).controller.configure();
            for (let e = 0, n = this.data.datasets.length; e < n; ++e)
              this._updateDataset(e, T(t) ? t({ datasetIndex: e }) : t);
            this.notifyPlugins('afterDatasetsUpdate', { mode: t });
          }
        }
        _updateDataset(t, e) {
          const n = this.getDatasetMeta(t),
            i = { meta: n, index: t, mode: e, cancelable: !0 };
          !1 !== this.notifyPlugins('beforeDatasetUpdate', i) &&
            (n.controller._update(e),
            (i.cancelable = !1),
            this.notifyPlugins('afterDatasetUpdate', i));
        }
        render() {
          !1 !== this.notifyPlugins('beforeRender', { cancelable: !0 }) &&
            (vn.has(this)
              ? this.attached && !vn.running(this) && vn.start(this)
              : (this.draw(), dr({ chart: this })));
        }
        draw() {
          let t;
          if (this._resizeBeforeDraw) {
            const { width: t, height: e } = this._resizeBeforeDraw;
            this._resize(t, e), (this._resizeBeforeDraw = null);
          }
          if ((this.clear(), this.width <= 0 || this.height <= 0)) return;
          if (!1 === this.notifyPlugins('beforeDraw', { cancelable: !0 }))
            return;
          const e = this._layers;
          for (t = 0; t < e.length && e[t].z <= 0; ++t)
            e[t].draw(this.chartArea);
          for (this._drawDatasets(); t < e.length; ++t)
            e[t].draw(this.chartArea);
          this.notifyPlugins('afterDraw');
        }
        _getSortedDatasetMetas(t) {
          const e = this._sortedMetasets,
            n = [];
          let i, r;
          for (i = 0, r = e.length; i < r; ++i) {
            const r = e[i];
            (t && !r.visible) || n.push(r);
          }
          return n;
        }
        getSortedVisibleDatasetMetas() {
          return this._getSortedDatasetMetas(!0);
        }
        _drawDatasets() {
          if (
            !1 === this.notifyPlugins('beforeDatasetsDraw', { cancelable: !0 })
          )
            return;
          const t = this.getSortedVisibleDatasetMetas();
          for (let e = t.length - 1; e >= 0; --e) this._drawDataset(t[e]);
          this.notifyPlugins('afterDatasetsDraw');
        }
        _drawDataset(t) {
          const e = this.ctx,
            n = t._clip,
            i = !n.disabled,
            r = this.chartArea,
            o = { meta: t, index: t.index, cancelable: !0 };
          !1 !== this.notifyPlugins('beforeDatasetDraw', o) &&
            (i &&
              Zt(e, {
                left: !1 === n.left ? 0 : r.left - n.left,
                right: !1 === n.right ? this.width : r.right + n.right,
                top: !1 === n.top ? 0 : r.top - n.top,
                bottom: !1 === n.bottom ? this.height : r.bottom + n.bottom,
              }),
            t.controller.draw(),
            i && te(e),
            (o.cancelable = !1),
            this.notifyPlugins('afterDatasetDraw', o));
        }
        isPointInArea(t) {
          return Qt(t, this.chartArea, this._minPadding);
        }
        getElementsAtEventForMode(t, e, n, i) {
          const r = si.modes[e];
          return 'function' == typeof r ? r(this, t, n, i) : [];
        }
        getDatasetMeta(t) {
          const e = this.data.datasets[t],
            n = this._metasets;
          let i = n.filter(t => t && t._dataset === e).pop();
          return (
            i ||
              ((i = {
                type: null,
                data: [],
                dataset: null,
                controller: null,
                hidden: null,
                xAxisID: null,
                yAxisID: null,
                order: (e && e.order) || 0,
                index: t,
                _dataset: e,
                _parsed: [],
                _sorted: !1,
              }),
              n.push(i)),
            i
          );
        }
        getContext() {
          return (
            this.$context ||
            (this.$context = ge(null, { chart: this, type: 'chart' }))
          );
        }
        getVisibleDatasetCount() {
          return this.getSortedVisibleDatasetMetas().length;
        }
        isDatasetVisible(t) {
          const e = this.data.datasets[t];
          if (!e) return !1;
          const n = this.getDatasetMeta(t);
          return 'boolean' == typeof n.hidden ? !n.hidden : !e.hidden;
        }
        setDatasetVisibility(t, e) {
          this.getDatasetMeta(t).hidden = !e;
        }
        toggleDataVisibility(t) {
          this._hiddenIndices[t] = !this._hiddenIndices[t];
        }
        getDataVisibility(t) {
          return !this._hiddenIndices[t];
        }
        _updateVisibility(t, e, n) {
          const i = n ? 'show' : 'hide',
            r = this.getDatasetMeta(t),
            o = r.controller._resolveAnimations(void 0, i);
          S(e)
            ? ((r.data[e].hidden = !n), this.update())
            : (this.setDatasetVisibility(t, n),
              o.update(r, { visible: n }),
              this.update(e => (e.datasetIndex === t ? i : void 0)));
        }
        hide(t, e) {
          this._updateVisibility(t, e, !1);
        }
        show(t, e) {
          this._updateVisibility(t, e, !0);
        }
        _destroyDatasetMeta(t) {
          const e = this._metasets[t];
          e && e.controller && e.controller._destroy(),
            delete this._metasets[t];
        }
        _stop() {
          let t, e;
          for (
            this.stop(), vn.remove(this), t = 0, e = this.data.datasets.length;
            t < e;
            ++t
          )
            this._destroyDatasetMeta(t);
        }
        destroy() {
          this.notifyPlugins('beforeDestroy');
          const { canvas: t, ctx: e } = this;
          this._stop(),
            this.config.clearCache(),
            t &&
              (this.unbindEvents(),
              Xt(t, e),
              this.platform.releaseContext(e),
              (this.canvas = null),
              (this.ctx = null)),
            this.notifyPlugins('destroy'),
            delete mr[this.id],
            this.notifyPlugins('afterDestroy');
        }
        toBase64Image(...t) {
          return this.canvas.toDataURL(...t);
        }
        bindEvents() {
          this.bindUserEvents(),
            this.options.responsive
              ? this.bindResponsiveEvents()
              : (this.attached = !0);
        }
        bindUserEvents() {
          const t = this._listeners,
            e = this.platform,
            n = (n, i) => {
              e.addEventListener(this, n, i), (t[n] = i);
            },
            i = (t, e, n) => {
              (t.offsetX = e), (t.offsetY = n), this._eventHandler(t);
            };
          v(this.options.events, t => n(t, i));
        }
        bindResponsiveEvents() {
          this._responsiveListeners || (this._responsiveListeners = {});
          const t = this._responsiveListeners,
            e = this.platform,
            n = (n, i) => {
              e.addEventListener(this, n, i), (t[n] = i);
            },
            i = (n, i) => {
              t[n] && (e.removeEventListener(this, n, i), delete t[n]);
            },
            r = (t, e) => {
              this.canvas && this.resize(t, e);
            };
          let o;
          const s = () => {
            i('attach', s),
              (this.attached = !0),
              this.resize(),
              n('resize', r),
              n('detach', o);
          };
          (o = () => {
            (this.attached = !1),
              i('resize', r),
              this._stop(),
              this._resize(0, 0),
              n('attach', s);
          }),
            e.isAttached(this.canvas) ? s() : o();
        }
        unbindEvents() {
          v(this._listeners, (t, e) => {
            this.platform.removeEventListener(this, e, t);
          }),
            (this._listeners = {}),
            v(this._responsiveListeners, (t, e) => {
              this.platform.removeEventListener(this, e, t);
            }),
            (this._responsiveListeners = void 0);
        }
        updateHoverStyle(t, e, n) {
          const i = n ? 'set' : 'remove';
          let r, o, s, a;
          for (
            'dataset' === e &&
              ((r = this.getDatasetMeta(t[0].datasetIndex)),
              r.controller['_' + i + 'DatasetHoverStyle']()),
              s = 0,
              a = t.length;
            s < a;
            ++s
          ) {
            o = t[s];
            const e = o && this.getDatasetMeta(o.datasetIndex).controller;
            e && e[i + 'HoverStyle'](o.element, o.datasetIndex, o.index);
          }
        }
        getActiveElements() {
          return this._active || [];
        }
        setActiveElements(t) {
          const e = this._active || [],
            n = t.map(({ datasetIndex: t, index: e }) => {
              const n = this.getDatasetMeta(t);
              if (!n) throw new Error('No dataset found at index ' + t);
              return { datasetIndex: t, element: n.data[e], index: e };
            });
          !y(n, e) &&
            ((this._active = n),
            (this._lastEvent = null),
            this._updateHoverStyles(n, e));
        }
        notifyPlugins(t, e, n) {
          return this._plugins.notify(this, t, e, n);
        }
        _updateHoverStyles(t, e, n) {
          const i = this.options.hover,
            r = (t, e) =>
              t.filter(
                t =>
                  !e.some(
                    e =>
                      t.datasetIndex === e.datasetIndex && t.index === e.index,
                  ),
              ),
            o = r(e, t),
            s = n ? t : r(t, e);
          o.length && this.updateHoverStyle(o, i.mode, !1),
            s.length && i.mode && this.updateHoverStyle(s, i.mode, !0);
        }
        _eventHandler(t, e) {
          const n = {
              event: t,
              replay: e,
              cancelable: !0,
              inChartArea: this.isPointInArea(t),
            },
            i = e =>
              (e.options.events || this.options.events).includes(t.native.type);
          if (!1 === this.notifyPlugins('beforeEvent', n, i)) return;
          const r = this._handleEvent(t, e, n.inChartArea);
          return (
            (n.cancelable = !1),
            this.notifyPlugins('afterEvent', n, i),
            (r || n.changed) && this.render(),
            this
          );
        }
        _handleEvent(t, e, n) {
          const { _active: i = [], options: r } = this,
            o = e,
            s = this._getActiveElements(t, i, n, o),
            a = (function (t) {
              return (
                'mouseup' === t.type ||
                'click' === t.type ||
                'contextmenu' === t.type
              );
            })(t),
            c = (function (t, e, n, i) {
              return n && 'mouseout' !== t.type ? (i ? e : t) : null;
            })(t, this._lastEvent, n, a);
          n &&
            ((this._lastEvent = null),
            m(r.onHover, [t, s, this], this),
            a && m(r.onClick, [t, s, this], this));
          const l = !y(s, i);
          return (
            (l || e) && ((this._active = s), this._updateHoverStyles(s, i, e)),
            (this._lastEvent = c),
            l
          );
        }
        _getActiveElements(t, e, n, i) {
          if ('mouseout' === t.type) return [];
          if (!n) return e;
          const r = this.options.hover;
          return this.getElementsAtEventForMode(t, r.mode, r, i);
        }
      }
      const br = () => v(xr.instances, t => t._plugins.invalidate());
      function _r(t, e, n) {
        const {
          startAngle: i,
          pixelMargin: r,
          x: o,
          y: s,
          outerRadius: a,
          innerRadius: c,
        } = e;
        let l = r / a;
        t.beginPath(),
          t.arc(o, s, a, i - l, n + l),
          c > r
            ? ((l = r / c), t.arc(o, s, c, n + l, i - l, !0))
            : t.arc(o, s, r, n + j, i - j),
          t.closePath(),
          t.clip();
      }
      function wr(t, e, n, i) {
        const r = le(t.options.borderRadius, [
          'outerStart',
          'outerEnd',
          'innerStart',
          'innerEnd',
        ]);
        const o = (n - e) / 2,
          s = Math.min(o, (i * e) / 2),
          a = t => {
            const e = ((n - Math.min(o, t)) * i) / 2;
            return Z(t, 0, Math.min(o, e));
          };
        return {
          outerStart: a(r.outerStart),
          outerEnd: a(r.outerEnd),
          innerStart: Z(r.innerStart, 0, s),
          innerEnd: Z(r.innerEnd, 0, s),
        };
      }
      function kr(t, e, n, i) {
        return { x: n + t * Math.cos(e), y: i + t * Math.sin(e) };
      }
      function Mr(t, e, n, i, r) {
        const { x: o, y: s, startAngle: a, pixelMargin: c, innerRadius: l } = e,
          h = Math.max(e.outerRadius + i + n - c, 0),
          u = l > 0 ? l + i + n + c : 0;
        let f = 0;
        const d = r - a;
        if (i) {
          const t = ((l > 0 ? l - i : 0) + (h > 0 ? h - i : 0)) / 2;
          f = (d - (0 !== t ? (d * t) / (t + i) : d)) / 2;
        }
        const p = (d - Math.max(0.001, d * h - n / C) / h) / 2,
          g = a + p + f,
          m = r - p - f,
          {
            outerStart: v,
            outerEnd: y,
            innerStart: x,
            innerEnd: b,
          } = wr(e, u, h, m - g),
          _ = h - v,
          w = h - y,
          k = g + v / _,
          M = m - y / w,
          P = u + x,
          O = u + b,
          E = g + x / P,
          S = m - b / O;
        if ((t.beginPath(), t.arc(o, s, h, k, M), y > 0)) {
          const e = kr(w, M, o, s);
          t.arc(e.x, e.y, y, M, m + j);
        }
        const T = kr(O, m, o, s);
        if ((t.lineTo(T.x, T.y), b > 0)) {
          const e = kr(O, S, o, s);
          t.arc(e.x, e.y, b, m + j, S + Math.PI);
        }
        if ((t.arc(o, s, u, m - b / u, g + x / u, !0), x > 0)) {
          const e = kr(P, E, o, s);
          t.arc(e.x, e.y, x, E + Math.PI, g - j);
        }
        const A = kr(_, g, o, s);
        if ((t.lineTo(A.x, A.y), v > 0)) {
          const e = kr(_, k, o, s);
          t.arc(e.x, e.y, v, g - j, k);
        }
        t.closePath();
      }
      function Pr(t, e, n, i, r) {
        const { options: o } = e,
          { borderWidth: s, borderJoinStyle: a } = o,
          c = 'inner' === o.borderAlign;
        s &&
          (c
            ? ((t.lineWidth = 2 * s), (t.lineJoin = a || 'round'))
            : ((t.lineWidth = s), (t.lineJoin = a || 'bevel')),
          e.fullCircles &&
            (function (t, e, n) {
              const {
                  x: i,
                  y: r,
                  startAngle: o,
                  pixelMargin: s,
                  fullCircles: a,
                } = e,
                c = Math.max(e.outerRadius - s, 0),
                l = e.innerRadius + s;
              let h;
              for (
                n && _r(t, e, o + R),
                  t.beginPath(),
                  t.arc(i, r, l, o + R, o, !0),
                  h = 0;
                h < a;
                ++h
              )
                t.stroke();
              for (t.beginPath(), t.arc(i, r, c, o, o + R), h = 0; h < a; ++h)
                t.stroke();
            })(t, e, c),
          c && _r(t, e, r),
          Mr(t, e, n, i, r),
          t.stroke());
      }
      Object.defineProperties(xr, {
        defaults: { enumerable: !0, value: Yt },
        instances: { enumerable: !0, value: mr },
        overrides: { enumerable: !0, value: Ht },
        registry: { enumerable: !0, value: Ji },
        version: { enumerable: !0, value: '3.8.0' },
        getChart: { enumerable: !0, value: vr },
        register: {
          enumerable: !0,
          value: (...t) => {
            Ji.add(...t), br();
          },
        },
        unregister: {
          enumerable: !0,
          value: (...t) => {
            Ji.remove(...t), br();
          },
        },
      });
      class Or extends ji {
        constructor(t) {
          super(),
            (this.options = void 0),
            (this.circumference = void 0),
            (this.startAngle = void 0),
            (this.endAngle = void 0),
            (this.innerRadius = void 0),
            (this.outerRadius = void 0),
            (this.pixelMargin = 0),
            (this.fullCircles = 0),
            t && Object.assign(this, t);
        }
        inRange(t, e, n) {
          const i = this.getProps(['x', 'y'], n),
            { angle: r, distance: o } = q(i, { x: t, y: e }),
            {
              startAngle: s,
              endAngle: a,
              innerRadius: c,
              outerRadius: l,
              circumference: h,
            } = this.getProps(
              [
                'startAngle',
                'endAngle',
                'innerRadius',
                'outerRadius',
                'circumference',
              ],
              n,
            ),
            u = this.options.spacing / 2,
            f = p(h, a - s) >= R || Q(r, s, a),
            d = tt(o, c + u, l + u);
          return f && d;
        }
        getCenterPoint(t) {
          const {
              x: e,
              y: n,
              startAngle: i,
              endAngle: r,
              innerRadius: o,
              outerRadius: s,
            } = this.getProps(
              [
                'x',
                'y',
                'startAngle',
                'endAngle',
                'innerRadius',
                'outerRadius',
                'circumference',
              ],
              t,
            ),
            { offset: a, spacing: c } = this.options,
            l = (i + r) / 2,
            h = (o + s + c + a) / 2;
          return { x: e + Math.cos(l) * h, y: n + Math.sin(l) * h };
        }
        tooltipPosition(t) {
          return this.getCenterPoint(t);
        }
        draw(t) {
          const { options: e, circumference: n } = this,
            i = (e.offset || 0) / 2,
            r = (e.spacing || 0) / 2;
          if (
            ((this.pixelMargin = 'inner' === e.borderAlign ? 0.33 : 0),
            (this.fullCircles = n > R ? Math.floor(n / R) : 0),
            0 === n || this.innerRadius < 0 || this.outerRadius < 0)
          )
            return;
          t.save();
          let o = 0;
          if (i) {
            o = i / 2;
            const e = (this.startAngle + this.endAngle) / 2;
            t.translate(Math.cos(e) * o, Math.sin(e) * o),
              this.circumference >= C && (o = i);
          }
          (t.fillStyle = e.backgroundColor), (t.strokeStyle = e.borderColor);
          const s = (function (t, e, n, i) {
            const { fullCircles: r, startAngle: o, circumference: s } = e;
            let a = e.endAngle;
            if (r) {
              Mr(t, e, n, i, o + R);
              for (let e = 0; e < r; ++e) t.fill();
              isNaN(s) || ((a = o + (s % R)), s % R == 0 && (a += R));
            }
            return Mr(t, e, n, i, a), t.fill(), a;
          })(t, this, o, r);
          Pr(t, this, o, r, s), t.restore();
        }
      }
      function Er(t, e, n = e) {
        (t.lineCap = p(n.borderCapStyle, e.borderCapStyle)),
          t.setLineDash(p(n.borderDash, e.borderDash)),
          (t.lineDashOffset = p(n.borderDashOffset, e.borderDashOffset)),
          (t.lineJoin = p(n.borderJoinStyle, e.borderJoinStyle)),
          (t.lineWidth = p(n.borderWidth, e.borderWidth)),
          (t.strokeStyle = p(n.borderColor, e.borderColor));
      }
      function Sr(t, e, n) {
        t.lineTo(n.x, n.y);
      }
      function Tr(t, e, n = {}) {
        const i = t.length,
          { start: r = 0, end: o = i - 1 } = n,
          { start: s, end: a } = e,
          c = Math.max(r, s),
          l = Math.min(o, a),
          h = (r < s && o < s) || (r > a && o > a);
        return {
          count: i,
          start: c,
          loop: e.loop,
          ilen: l < c && !h ? i + l - c : l - c,
        };
      }
      function Ar(t, e, n, i) {
        const { points: r, options: o } = e,
          { count: s, start: a, loop: c, ilen: l } = Tr(r, n, i),
          h = (function (t) {
            return t.stepped
              ? ee
              : t.tension || 'monotone' === t.cubicInterpolationMode
              ? ne
              : Sr;
          })(o);
        let u,
          f,
          d,
          { move: p = !0, reverse: g } = i || {};
        for (u = 0; u <= l; ++u)
          (f = r[(a + (g ? l - u : u)) % s]),
            f.skip ||
              (p ? (t.moveTo(f.x, f.y), (p = !1)) : h(t, d, f, g, o.stepped),
              (d = f));
        return (
          c && ((f = r[(a + (g ? l : 0)) % s]), h(t, d, f, g, o.stepped)), !!c
        );
      }
      function Cr(t, e, n, i) {
        const r = e.points,
          { count: o, start: s, ilen: a } = Tr(r, n, i),
          { move: c = !0, reverse: l } = i || {};
        let h,
          u,
          f,
          d,
          p,
          g,
          m = 0,
          v = 0;
        const y = t => (s + (l ? a - t : t)) % o,
          x = () => {
            d !== p && (t.lineTo(m, p), t.lineTo(m, d), t.lineTo(m, g));
          };
        for (c && ((u = r[y(0)]), t.moveTo(u.x, u.y)), h = 0; h <= a; ++h) {
          if (((u = r[y(h)]), u.skip)) continue;
          const e = u.x,
            n = u.y,
            i = 0 | e;
          i === f
            ? (n < d ? (d = n) : n > p && (p = n), (m = (v * m + e) / ++v))
            : (x(), t.lineTo(e, n), (f = i), (v = 0), (d = p = n)),
            (g = n);
        }
        x();
      }
      function Rr(t) {
        const e = t.options,
          n = e.borderDash && e.borderDash.length;
        return !(
          t._decimated ||
          t._loop ||
          e.tension ||
          'monotone' === e.cubicInterpolationMode ||
          e.stepped ||
          n
        )
          ? Cr
          : Ar;
      }
      (Or.id = 'arc'),
        (Or.defaults = {
          borderAlign: 'center',
          borderColor: '#fff',
          borderJoinStyle: void 0,
          borderRadius: 0,
          borderWidth: 2,
          offset: 0,
          spacing: 0,
          angle: void 0,
        }),
        (Or.defaultRoutes = { backgroundColor: 'backgroundColor' });
      const Dr = 'function' == typeof Path2D;
      function Lr(t, e, n, i) {
        Dr && !e.options.segment
          ? (function (t, e, n, i) {
              let r = e._path;
              r ||
                ((r = e._path = new Path2D()),
                e.path(r, n, i) && r.closePath()),
                Er(t, e.options),
                t.stroke(r);
            })(t, e, n, i)
          : (function (t, e, n, i) {
              const { segments: r, options: o } = e,
                s = Rr(e);
              for (const a of r)
                Er(t, o, a.style),
                  t.beginPath(),
                  s(t, e, a, { start: n, end: n + i - 1 }) && t.closePath(),
                  t.stroke();
            })(t, e, n, i);
      }
      class Ir extends ji {
        constructor(t) {
          super(),
            (this.animated = !0),
            (this.options = void 0),
            (this._chart = void 0),
            (this._loop = void 0),
            (this._fullLoop = void 0),
            (this._path = void 0),
            (this._points = void 0),
            (this._segments = void 0),
            (this._decimated = !1),
            (this._pointsUpdated = !1),
            (this._datasetIndex = void 0),
            t && Object.assign(this, t);
        }
        updateControlPoints(t, e) {
          const n = this.options;
          if (
            (n.tension || 'monotone' === n.cubicInterpolationMode) &&
            !n.stepped &&
            !this._pointsUpdated
          ) {
            const i = n.spanGaps ? this._loop : this._fullLoop;
            He(this._points, n, t, i, e), (this._pointsUpdated = !0);
          }
        }
        set points(t) {
          (this._points = t),
            delete this._segments,
            delete this._path,
            (this._pointsUpdated = !1);
        }
        get points() {
          return this._points;
        }
        get segments() {
          return (
            this._segments ||
            (this._segments = (function (t, e) {
              const n = t.points,
                i = t.options.spanGaps,
                r = n.length;
              if (!r) return [];
              const o = !!t._loop,
                { start: s, end: a } = (function (t, e, n, i) {
                  let r = 0,
                    o = e - 1;
                  if (n && !i) for (; r < e && !t[r].skip; ) r++;
                  for (; r < e && t[r].skip; ) r++;
                  for (r %= e, n && (o += r); o > r && t[o % e].skip; ) o--;
                  return (o %= e), { start: r, end: o };
                })(n, r, o, i);
              return pn(
                t,
                !0 === i
                  ? [{ start: s, end: a, loop: o }]
                  : (function (t, e, n, i) {
                      const r = t.length,
                        o = [];
                      let s,
                        a = e,
                        c = t[e];
                      for (s = e + 1; s <= n; ++s) {
                        const n = t[s % r];
                        n.skip || n.stop
                          ? c.skip ||
                            ((i = !1),
                            o.push({ start: e % r, end: (s - 1) % r, loop: i }),
                            (e = a = n.stop ? s : null))
                          : ((a = s), c.skip && (e = s)),
                          (c = n);
                      }
                      return (
                        null !== a &&
                          o.push({ start: e % r, end: a % r, loop: i }),
                        o
                      );
                    })(
                      n,
                      s,
                      a < s ? a + r : a,
                      !!t._fullLoop && 0 === s && a === r - 1,
                    ),
                n,
                e,
              );
            })(this, this.options.segment))
          );
        }
        first() {
          const t = this.segments,
            e = this.points;
          return t.length && e[t[0].start];
        }
        last() {
          const t = this.segments,
            e = this.points,
            n = t.length;
          return n && e[t[n - 1].end];
        }
        interpolate(t, e) {
          const n = this.options,
            i = t[e],
            r = this.points,
            o = dn(this, { property: e, start: i, end: i });
          if (!o.length) return;
          const s = [],
            a = (function (t) {
              return t.stepped
                ? nn
                : t.tension || 'monotone' === t.cubicInterpolationMode
                ? rn
                : en;
            })(n);
          let c, l;
          for (c = 0, l = o.length; c < l; ++c) {
            const { start: l, end: h } = o[c],
              u = r[l],
              f = r[h];
            if (u === f) {
              s.push(u);
              continue;
            }
            const d = a(u, f, Math.abs((i - u[e]) / (f[e] - u[e])), n.stepped);
            (d[e] = t[e]), s.push(d);
          }
          return 1 === s.length ? s[0] : s;
        }
        pathSegment(t, e, n) {
          return Rr(this)(t, this, e, n);
        }
        path(t, e, n) {
          const i = this.segments,
            r = Rr(this);
          let o = this._loop;
          (e = e || 0), (n = n || this.points.length - e);
          for (const s of i) o &= r(t, this, s, { start: e, end: e + n - 1 });
          return !!o;
        }
        draw(t, e, n, i) {
          const r = this.options || {};
          (this.points || []).length &&
            r.borderWidth &&
            (t.save(), Lr(t, this, n, i), t.restore()),
            this.animated &&
              ((this._pointsUpdated = !1), (this._path = void 0));
        }
      }
      function jr(t, e, n, i) {
        const r = t.options,
          { [n]: o } = t.getProps([n], i);
        return Math.abs(e - o) < r.radius + r.hitRadius;
      }
      (Ir.id = 'line'),
        (Ir.defaults = {
          borderCapStyle: 'butt',
          borderDash: [],
          borderDashOffset: 0,
          borderJoinStyle: 'miter',
          borderWidth: 3,
          capBezierPoints: !0,
          cubicInterpolationMode: 'default',
          fill: !1,
          spanGaps: !1,
          stepped: !1,
          tension: 0,
        }),
        (Ir.defaultRoutes = {
          backgroundColor: 'backgroundColor',
          borderColor: 'borderColor',
        }),
        (Ir.descriptors = {
          _scriptable: !0,
          _indexable: t => 'borderDash' !== t && 'fill' !== t,
        });
      class $r extends ji {
        constructor(t) {
          super(),
            (this.options = void 0),
            (this.parsed = void 0),
            (this.skip = void 0),
            (this.stop = void 0),
            t && Object.assign(this, t);
        }
        inRange(t, e, n) {
          const i = this.options,
            { x: r, y: o } = this.getProps(['x', 'y'], n);
          return (
            Math.pow(t - r, 2) + Math.pow(e - o, 2) <
            Math.pow(i.hitRadius + i.radius, 2)
          );
        }
        inXRange(t, e) {
          return jr(this, t, 'x', e);
        }
        inYRange(t, e) {
          return jr(this, t, 'y', e);
        }
        getCenterPoint(t) {
          const { x: e, y: n } = this.getProps(['x', 'y'], t);
          return { x: e, y: n };
        }
        size(t) {
          let e = (t = t || this.options || {}).radius || 0;
          e = Math.max(e, (e && t.hoverRadius) || 0);
          return 2 * (e + ((e && t.borderWidth) || 0));
        }
        draw(t, e) {
          const n = this.options;
          this.skip ||
            n.radius < 0.1 ||
            !Qt(this, e, this.size(n) / 2) ||
            ((t.strokeStyle = n.borderColor),
            (t.lineWidth = n.borderWidth),
            (t.fillStyle = n.backgroundColor),
            Kt(t, n, this.x, this.y));
        }
        getRange() {
          const t = this.options || {};
          return t.radius + t.hitRadius;
        }
      }
      function Nr(t, e) {
        const {
          x: n,
          y: i,
          base: r,
          width: o,
          height: s,
        } = t.getProps(['x', 'y', 'base', 'width', 'height'], e);
        let a, c, l, h, u;
        return (
          t.horizontal
            ? ((u = s / 2),
              (a = Math.min(n, r)),
              (c = Math.max(n, r)),
              (l = i - u),
              (h = i + u))
            : ((u = o / 2),
              (a = n - u),
              (c = n + u),
              (l = Math.min(i, r)),
              (h = Math.max(i, r))),
          { left: a, top: l, right: c, bottom: h }
        );
      }
      function Fr(t, e, n, i) {
        return t ? 0 : Z(e, n, i);
      }
      function Br(t) {
        const e = Nr(t),
          n = e.right - e.left,
          i = e.bottom - e.top,
          r = (function (t, e, n) {
            const i = t.options.borderWidth,
              r = t.borderSkipped,
              o = he(i);
            return {
              t: Fr(r.top, o.top, 0, n),
              r: Fr(r.right, o.right, 0, e),
              b: Fr(r.bottom, o.bottom, 0, n),
              l: Fr(r.left, o.left, 0, e),
            };
          })(t, n / 2, i / 2),
          o = (function (t, e, n) {
            const { enableBorderRadius: i } = t.getProps([
                'enableBorderRadius',
              ]),
              r = t.options.borderRadius,
              o = ue(r),
              s = Math.min(e, n),
              a = t.borderSkipped,
              c = i || u(r);
            return {
              topLeft: Fr(!c || a.top || a.left, o.topLeft, 0, s),
              topRight: Fr(!c || a.top || a.right, o.topRight, 0, s),
              bottomLeft: Fr(!c || a.bottom || a.left, o.bottomLeft, 0, s),
              bottomRight: Fr(!c || a.bottom || a.right, o.bottomRight, 0, s),
            };
          })(t, n / 2, i / 2);
        return {
          outer: { x: e.left, y: e.top, w: n, h: i, radius: o },
          inner: {
            x: e.left + r.l,
            y: e.top + r.t,
            w: n - r.l - r.r,
            h: i - r.t - r.b,
            radius: {
              topLeft: Math.max(0, o.topLeft - Math.max(r.t, r.l)),
              topRight: Math.max(0, o.topRight - Math.max(r.t, r.r)),
              bottomLeft: Math.max(0, o.bottomLeft - Math.max(r.b, r.l)),
              bottomRight: Math.max(0, o.bottomRight - Math.max(r.b, r.r)),
            },
          },
        };
      }
      function zr(t, e, n, i) {
        const r = null === e,
          o = null === n,
          s = t && !(r && o) && Nr(t, i);
        return (
          s && (r || tt(e, s.left, s.right)) && (o || tt(n, s.top, s.bottom))
        );
      }
      function Hr(t, e) {
        t.rect(e.x, e.y, e.w, e.h);
      }
      function Vr(t, e, n = {}) {
        const i = t.x !== n.x ? -e : 0,
          r = t.y !== n.y ? -e : 0,
          o = (t.x + t.w !== n.x + n.w ? e : 0) - i,
          s = (t.y + t.h !== n.y + n.h ? e : 0) - r;
        return {
          x: t.x + i,
          y: t.y + r,
          w: t.w + o,
          h: t.h + s,
          radius: t.radius,
        };
      }
      ($r.id = 'point'),
        ($r.defaults = {
          borderWidth: 1,
          hitRadius: 1,
          hoverBorderWidth: 1,
          hoverRadius: 4,
          pointStyle: 'circle',
          radius: 3,
          rotation: 0,
        }),
        ($r.defaultRoutes = {
          backgroundColor: 'backgroundColor',
          borderColor: 'borderColor',
        });
      class Wr extends ji {
        constructor(t) {
          super(),
            (this.options = void 0),
            (this.horizontal = void 0),
            (this.base = void 0),
            (this.width = void 0),
            (this.height = void 0),
            (this.inflateAmount = void 0),
            t && Object.assign(this, t);
        }
        draw(t) {
          const {
              inflateAmount: e,
              options: { borderColor: n, backgroundColor: i },
            } = this,
            { inner: r, outer: o } = Br(this),
            s =
              (a = o.radius).topLeft ||
              a.topRight ||
              a.bottomLeft ||
              a.bottomRight
                ? oe
                : Hr;
          var a;
          t.save(),
            (o.w === r.w && o.h === r.h) ||
              (t.beginPath(),
              s(t, Vr(o, e, r)),
              t.clip(),
              s(t, Vr(r, -e, o)),
              (t.fillStyle = n),
              t.fill('evenodd')),
            t.beginPath(),
            s(t, Vr(r, e)),
            (t.fillStyle = i),
            t.fill(),
            t.restore();
        }
        inRange(t, e, n) {
          return zr(this, t, e, n);
        }
        inXRange(t, e) {
          return zr(this, t, null, e);
        }
        inYRange(t, e) {
          return zr(this, null, t, e);
        }
        getCenterPoint(t) {
          const {
            x: e,
            y: n,
            base: i,
            horizontal: r,
          } = this.getProps(['x', 'y', 'base', 'horizontal'], t);
          return { x: r ? (e + i) / 2 : e, y: r ? n : (n + i) / 2 };
        }
        getRange(t) {
          return 'x' === t ? this.width / 2 : this.height / 2;
        }
      }
      (Wr.id = 'bar'),
        (Wr.defaults = {
          borderSkipped: 'start',
          borderWidth: 0,
          borderRadius: 0,
          inflateAmount: 'auto',
          pointStyle: void 0,
        }),
        (Wr.defaultRoutes = {
          backgroundColor: 'backgroundColor',
          borderColor: 'borderColor',
        });
      var Ur = Object.freeze({
        __proto__: null,
        ArcElement: Or,
        LineElement: Ir,
        PointElement: $r,
        BarElement: Wr,
      });
      function Yr(t) {
        if (t._decimated) {
          const e = t._data;
          delete t._decimated,
            delete t._data,
            Object.defineProperty(t, 'data', { value: e });
        }
      }
      function Gr(t) {
        t.data.datasets.forEach(t => {
          Yr(t);
        });
      }
      var qr = {
        id: 'decimation',
        defaults: { algorithm: 'min-max', enabled: !1 },
        beforeElementsUpdate: (t, e, n) => {
          if (!n.enabled) return void Gr(t);
          const i = t.width;
          t.data.datasets.forEach((e, r) => {
            const { _data: o, indexAxis: s } = e,
              a = t.getDatasetMeta(r),
              c = o || e.data;
            if ('y' === pe([s, t.options.indexAxis])) return;
            if (!a.controller.supportsDecimation) return;
            const h = t.scales[a.xAxisID];
            if ('linear' !== h.type && 'time' !== h.type) return;
            if (t.options.parsing) return;
            let { start: u, count: f } = (function (t, e) {
              const n = e.length;
              let i,
                r = 0;
              const { iScale: o } = t,
                {
                  min: s,
                  max: a,
                  minDefined: c,
                  maxDefined: l,
                } = o.getUserBounds();
              return (
                c && (r = Z(ve(e, o.axis, s).lo, 0, n - 1)),
                (i = l ? Z(ve(e, o.axis, a).hi + 1, r, n) - r : n - r),
                { start: r, count: i }
              );
            })(a, c);
            if (f <= (n.threshold || 4 * i)) return void Yr(e);
            let d;
            switch (
              (l(o) &&
                ((e._data = c),
                delete e.data,
                Object.defineProperty(e, 'data', {
                  configurable: !0,
                  enumerable: !0,
                  get: function () {
                    return this._decimated;
                  },
                  set: function (t) {
                    this._data = t;
                  },
                })),
              n.algorithm)
            ) {
              case 'lttb':
                d = (function (t, e, n, i, r) {
                  const o = r.samples || i;
                  if (o >= n) return t.slice(e, e + n);
                  const s = [],
                    a = (n - 2) / (o - 2);
                  let c = 0;
                  const l = e + n - 1;
                  let h,
                    u,
                    f,
                    d,
                    p,
                    g = e;
                  for (s[c++] = t[g], h = 0; h < o - 2; h++) {
                    let i,
                      r = 0,
                      o = 0;
                    const l = Math.floor((h + 1) * a) + 1 + e,
                      m = Math.min(Math.floor((h + 2) * a) + 1, n) + e,
                      v = m - l;
                    for (i = l; i < m; i++) (r += t[i].x), (o += t[i].y);
                    (r /= v), (o /= v);
                    const y = Math.floor(h * a) + 1 + e,
                      x = Math.min(Math.floor((h + 1) * a) + 1, n) + e,
                      { x: b, y: _ } = t[g];
                    for (f = d = -1, i = y; i < x; i++)
                      (d =
                        0.5 *
                        Math.abs(
                          (b - r) * (t[i].y - _) - (b - t[i].x) * (o - _),
                        )),
                        d > f && ((f = d), (u = t[i]), (p = i));
                    (s[c++] = u), (g = p);
                  }
                  return (s[c++] = t[l]), s;
                })(c, u, f, i, n);
                break;
              case 'min-max':
                d = (function (t, e, n, i) {
                  let r,
                    o,
                    s,
                    a,
                    c,
                    h,
                    u,
                    f,
                    d,
                    p,
                    g = 0,
                    m = 0;
                  const v = [],
                    y = e + n - 1,
                    x = t[e].x,
                    b = t[y].x - x;
                  for (r = e; r < e + n; ++r) {
                    (o = t[r]), (s = ((o.x - x) / b) * i), (a = o.y);
                    const e = 0 | s;
                    if (e === c)
                      a < d ? ((d = a), (h = r)) : a > p && ((p = a), (u = r)),
                        (g = (m * g + o.x) / ++m);
                    else {
                      const n = r - 1;
                      if (!l(h) && !l(u)) {
                        const e = Math.min(h, u),
                          i = Math.max(h, u);
                        e !== f && e !== n && v.push({ ...t[e], x: g }),
                          i !== f && i !== n && v.push({ ...t[i], x: g });
                      }
                      r > 0 && n !== f && v.push(t[n]),
                        v.push(o),
                        (c = e),
                        (m = 0),
                        (d = p = a),
                        (h = u = f = r);
                    }
                  }
                  return v;
                })(c, u, f, i);
                break;
              default:
                throw new Error(
                  `Unsupported decimation algorithm '${n.algorithm}'`,
                );
            }
            e._decimated = d;
          });
        },
        destroy(t) {
          Gr(t);
        },
      };
      function Jr(t, e, n, i) {
        if (i) return;
        let r = e[t],
          o = n[t];
        return (
          'angle' === t && ((r = K(r)), (o = K(o))),
          { property: t, start: r, end: o }
        );
      }
      function Xr(t, e, n) {
        for (; e > t; e--) {
          const t = n[e];
          if (!isNaN(t.x) && !isNaN(t.y)) break;
        }
        return e;
      }
      function Kr(t, e, n, i) {
        return t && e ? i(t[n], e[n]) : t ? t[n] : e ? e[n] : 0;
      }
      function Qr(t, e) {
        let n = [],
          i = !1;
        return (
          h(t)
            ? ((i = !0), (n = t))
            : (n = (function (t, e) {
                const { x: n = null, y: i = null } = t || {},
                  r = e.points,
                  o = [];
                return (
                  e.segments.forEach(({ start: t, end: e }) => {
                    e = Xr(t, e, r);
                    const s = r[t],
                      a = r[e];
                    null !== i
                      ? (o.push({ x: s.x, y: i }), o.push({ x: a.x, y: i }))
                      : null !== n &&
                        (o.push({ x: n, y: s.y }), o.push({ x: n, y: a.y }));
                  }),
                  o
                );
              })(t, e)),
          n.length
            ? new Ir({
                points: n,
                options: { tension: 0 },
                _loop: i,
                _fullLoop: i,
              })
            : null
        );
      }
      function Zr(t, e, n) {
        let i = t[e].fill;
        const r = [e];
        let o;
        if (!n) return i;
        for (; !1 !== i && -1 === r.indexOf(i); ) {
          if (!f(i)) return i;
          if (((o = t[i]), !o)) return !1;
          if (o.visible) return i;
          r.push(i), (i = o.fill);
        }
        return !1;
      }
      function to(t, e, n) {
        const i = (function (t) {
          const e = t.options,
            n = e.fill;
          let i = p(n && n.target, n);
          void 0 === i && (i = !!e.backgroundColor);
          if (!1 === i || null === i) return !1;
          if (!0 === i) return 'origin';
          return i;
        })(t);
        if (u(i)) return !isNaN(i.value) && i;
        let r = parseFloat(i);
        return f(r) && Math.floor(r) === r
          ? (function (t, e, n, i) {
              ('-' !== t && '+' !== t) || (n = e + n);
              if (n === e || n < 0 || n >= i) return !1;
              return n;
            })(i[0], e, r, n)
          : ['origin', 'start', 'end', 'stack', 'shape'].indexOf(i) >= 0 && i;
      }
      function eo(t, e, n) {
        const i = [];
        for (let r = 0; r < n.length; r++) {
          const o = n[r],
            { first: s, last: a, point: c } = no(o, e, 'x');
          if (!(!c || (s && a)))
            if (s) i.unshift(c);
            else if ((t.push(c), !a)) break;
        }
        t.push(...i);
      }
      function no(t, e, n) {
        const i = t.interpolate(e, n);
        if (!i) return {};
        const r = i[n],
          o = t.segments,
          s = t.points;
        let a = !1,
          c = !1;
        for (let t = 0; t < o.length; t++) {
          const e = o[t],
            i = s[e.start][n],
            l = s[e.end][n];
          if (tt(r, i, l)) {
            (a = r === i), (c = r === l);
            break;
          }
        }
        return { first: a, last: c, point: i };
      }
      class io {
        constructor(t) {
          (this.x = t.x), (this.y = t.y), (this.radius = t.radius);
        }
        pathSegment(t, e, n) {
          const { x: i, y: r, radius: o } = this;
          return (
            (e = e || { start: 0, end: R }),
            t.arc(i, r, o, e.end, e.start, !0),
            !n.bounds
          );
        }
        interpolate(t) {
          const { x: e, y: n, radius: i } = this,
            r = t.angle;
          return { x: e + Math.cos(r) * i, y: n + Math.sin(r) * i, angle: r };
        }
      }
      function ro(t) {
        const { chart: e, fill: n, line: i } = t;
        if (f(n))
          return (function (t, e) {
            const n = t.getDatasetMeta(e);
            return n && t.isDatasetVisible(e) ? n.dataset : null;
          })(e, n);
        if ('stack' === n)
          return (function (t) {
            const { scale: e, index: n, line: i } = t,
              r = [],
              o = i.segments,
              s = i.points,
              a = (function (t, e) {
                const n = [],
                  i = t.getMatchingVisibleMetas('line');
                for (let t = 0; t < i.length; t++) {
                  const r = i[t];
                  if (r.index === e) break;
                  r.hidden || n.unshift(r.dataset);
                }
                return n;
              })(e, n);
            a.push(Qr({ x: null, y: e.bottom }, i));
            for (let t = 0; t < o.length; t++) {
              const e = o[t];
              for (let t = e.start; t <= e.end; t++) eo(r, s[t], a);
            }
            return new Ir({ points: r, options: {} });
          })(t);
        if ('shape' === n) return !0;
        const r = (function (t) {
          if ((t.scale || {}).getPointPositionForValue)
            return (function (t) {
              const { scale: e, fill: n } = t,
                i = e.options,
                r = e.getLabels().length,
                o = i.reverse ? e.max : e.min,
                s = (function (t, e, n) {
                  let i;
                  return (
                    (i =
                      'start' === t
                        ? n
                        : 'end' === t
                        ? e.options.reverse
                          ? e.min
                          : e.max
                        : u(t)
                        ? t.value
                        : e.getBaseValue()),
                    i
                  );
                })(n, e, o),
                a = [];
              if (i.grid.circular) {
                const t = e.getPointPositionForValue(0, o);
                return new io({
                  x: t.x,
                  y: t.y,
                  radius: e.getDistanceFromCenterForValue(s),
                });
              }
              for (let t = 0; t < r; ++t)
                a.push(e.getPointPositionForValue(t, s));
              return a;
            })(t);
          return (function (t) {
            const { scale: e = {}, fill: n } = t,
              i = (function (t, e) {
                let n = null;
                return (
                  'start' === t
                    ? (n = e.bottom)
                    : 'end' === t
                    ? (n = e.top)
                    : u(t)
                    ? (n = e.getPixelForValue(t.value))
                    : e.getBasePixel && (n = e.getBasePixel()),
                  n
                );
              })(n, e);
            if (f(i)) {
              const t = e.isHorizontal();
              return { x: t ? i : null, y: t ? null : i };
            }
            return null;
          })(t);
        })(t);
        return r instanceof io ? r : Qr(r, i);
      }
      function oo(t, e, n) {
        const i = ro(e),
          { line: r, scale: o, axis: s } = e,
          a = r.options,
          c = a.fill,
          l = a.backgroundColor,
          { above: h = l, below: u = l } = c || {};
        i &&
          r.points.length &&
          (Zt(t, n),
          (function (t, e) {
            const {
                line: n,
                target: i,
                above: r,
                below: o,
                area: s,
                scale: a,
              } = e,
              c = n._loop ? 'angle' : e.axis;
            t.save(),
              'x' === c &&
                o !== r &&
                (so(t, i, s.top),
                ao(t, { line: n, target: i, color: r, scale: a, property: c }),
                t.restore(),
                t.save(),
                so(t, i, s.bottom));
            ao(t, { line: n, target: i, color: o, scale: a, property: c }),
              t.restore();
          })(t, {
            line: r,
            target: i,
            above: h,
            below: u,
            area: n,
            scale: o,
            axis: s,
          }),
          te(t));
      }
      function so(t, e, n) {
        const { segments: i, points: r } = e;
        let o = !0,
          s = !1;
        t.beginPath();
        for (const a of i) {
          const { start: i, end: c } = a,
            l = r[i],
            h = r[Xr(i, c, r)];
          o
            ? (t.moveTo(l.x, l.y), (o = !1))
            : (t.lineTo(l.x, n), t.lineTo(l.x, l.y)),
            (s = !!e.pathSegment(t, a, { move: s })),
            s ? t.closePath() : t.lineTo(h.x, n);
        }
        t.lineTo(e.first().x, n), t.closePath(), t.clip();
      }
      function ao(t, e) {
        const { line: n, target: i, property: r, color: o, scale: s } = e,
          a = (function (t, e, n) {
            const i = t.segments,
              r = t.points,
              o = e.points,
              s = [];
            for (const t of i) {
              let { start: i, end: a } = t;
              a = Xr(i, a, r);
              const c = Jr(n, r[i], r[a], t.loop);
              if (!e.segments) {
                s.push({ source: t, target: c, start: r[i], end: r[a] });
                continue;
              }
              const l = dn(e, c);
              for (const e of l) {
                const i = Jr(n, o[e.start], o[e.end], e.loop),
                  a = fn(t, r, i);
                for (const t of a)
                  s.push({
                    source: t,
                    target: e,
                    start: { [n]: Kr(c, i, 'start', Math.max) },
                    end: { [n]: Kr(c, i, 'end', Math.min) },
                  });
              }
            }
            return s;
          })(n, i, r);
        for (const { source: e, target: c, start: l, end: h } of a) {
          const { style: { backgroundColor: a = o } = {} } = e,
            u = !0 !== i;
          t.save(),
            (t.fillStyle = a),
            co(t, s, u && Jr(r, l, h)),
            t.beginPath();
          const f = !!n.pathSegment(t, e);
          let d;
          if (u) {
            f ? t.closePath() : lo(t, i, h, r);
            const e = !!i.pathSegment(t, c, { move: f, reverse: !0 });
            (d = f && e), d || lo(t, i, l, r);
          }
          t.closePath(), t.fill(d ? 'evenodd' : 'nonzero'), t.restore();
        }
      }
      function co(t, e, n) {
        const { top: i, bottom: r } = e.chart.chartArea,
          { property: o, start: s, end: a } = n || {};
        'x' === o && (t.beginPath(), t.rect(s, i, a - s, r - i), t.clip());
      }
      function lo(t, e, n, i) {
        const r = e.interpolate(n, i);
        r && t.lineTo(r.x, r.y);
      }
      var ho = {
        id: 'filler',
        afterDatasetsUpdate(t, e, n) {
          const i = (t.data.datasets || []).length,
            r = [];
          let o, s, a, c;
          for (s = 0; s < i; ++s)
            (o = t.getDatasetMeta(s)),
              (a = o.dataset),
              (c = null),
              a &&
                a.options &&
                a instanceof Ir &&
                (c = {
                  visible: t.isDatasetVisible(s),
                  index: s,
                  fill: to(a, s, i),
                  chart: t,
                  axis: o.controller.options.indexAxis,
                  scale: o.vScale,
                  line: a,
                }),
              (o.$filler = c),
              r.push(c);
          for (s = 0; s < i; ++s)
            (c = r[s]), c && !1 !== c.fill && (c.fill = Zr(r, s, n.propagate));
        },
        beforeDraw(t, e, n) {
          const i = 'beforeDraw' === n.drawTime,
            r = t.getSortedVisibleDatasetMetas(),
            o = t.chartArea;
          for (let e = r.length - 1; e >= 0; --e) {
            const n = r[e].$filler;
            n && (n.line.updateControlPoints(o, n.axis), i && oo(t.ctx, n, o));
          }
        },
        beforeDatasetsDraw(t, e, n) {
          if ('beforeDatasetsDraw' !== n.drawTime) return;
          const i = t.getSortedVisibleDatasetMetas();
          for (let e = i.length - 1; e >= 0; --e) {
            const n = i[e].$filler;
            n && oo(t.ctx, n, t.chartArea);
          }
        },
        beforeDatasetDraw(t, e, n) {
          const i = e.meta.$filler;
          i &&
            !1 !== i.fill &&
            'beforeDatasetDraw' === n.drawTime &&
            oo(t.ctx, i, t.chartArea);
        },
        defaults: { propagate: !0, drawTime: 'beforeDatasetDraw' },
      };
      const uo = (t, e) => {
        let { boxHeight: n = e, boxWidth: i = e } = t;
        return (
          t.usePointStyle && ((n = Math.min(n, e)), (i = Math.min(i, e))),
          { boxWidth: i, boxHeight: n, itemHeight: Math.max(e, n) }
        );
      };
      class fo extends ji {
        constructor(t) {
          super(),
            (this._added = !1),
            (this.legendHitBoxes = []),
            (this._hoveredItem = null),
            (this.doughnutMode = !1),
            (this.chart = t.chart),
            (this.options = t.options),
            (this.ctx = t.ctx),
            (this.legendItems = void 0),
            (this.columnSizes = void 0),
            (this.lineWidths = void 0),
            (this.maxHeight = void 0),
            (this.maxWidth = void 0),
            (this.top = void 0),
            (this.bottom = void 0),
            (this.left = void 0),
            (this.right = void 0),
            (this.height = void 0),
            (this.width = void 0),
            (this._margins = void 0),
            (this.position = void 0),
            (this.weight = void 0),
            (this.fullSize = void 0);
        }
        update(t, e, n) {
          (this.maxWidth = t),
            (this.maxHeight = e),
            (this._margins = n),
            this.setDimensions(),
            this.buildLabels(),
            this.fit();
        }
        setDimensions() {
          this.isHorizontal()
            ? ((this.width = this.maxWidth),
              (this.left = this._margins.left),
              (this.right = this.width))
            : ((this.height = this.maxHeight),
              (this.top = this._margins.top),
              (this.bottom = this.height));
        }
        buildLabels() {
          const t = this.options.labels || {};
          let e = m(t.generateLabels, [this.chart], this) || [];
          t.filter && (e = e.filter(e => t.filter(e, this.chart.data))),
            t.sort && (e = e.sort((e, n) => t.sort(e, n, this.chart.data))),
            this.options.reverse && e.reverse(),
            (this.legendItems = e);
        }
        fit() {
          const { options: t, ctx: e } = this;
          if (!t.display) return void (this.width = this.height = 0);
          const n = t.labels,
            i = de(n.font),
            r = i.size,
            o = this._computeTitleHeight(),
            { boxWidth: s, itemHeight: a } = uo(n, r);
          let c, l;
          (e.font = i.string),
            this.isHorizontal()
              ? ((c = this.maxWidth), (l = this._fitRows(o, r, s, a) + 10))
              : ((l = this.maxHeight), (c = this._fitCols(o, r, s, a) + 10)),
            (this.width = Math.min(c, t.maxWidth || this.maxWidth)),
            (this.height = Math.min(l, t.maxHeight || this.maxHeight));
        }
        _fitRows(t, e, n, i) {
          const {
              ctx: r,
              maxWidth: o,
              options: {
                labels: { padding: s },
              },
            } = this,
            a = (this.legendHitBoxes = []),
            c = (this.lineWidths = [0]),
            l = i + s;
          let h = t;
          (r.textAlign = 'left'), (r.textBaseline = 'middle');
          let u = -1,
            f = -l;
          return (
            this.legendItems.forEach((t, d) => {
              const p = n + e / 2 + r.measureText(t.text).width;
              (0 === d || c[c.length - 1] + p + 2 * s > o) &&
                ((h += l), (c[c.length - (d > 0 ? 0 : 1)] = 0), (f += l), u++),
                (a[d] = { left: 0, top: f, row: u, width: p, height: i }),
                (c[c.length - 1] += p + s);
            }),
            h
          );
        }
        _fitCols(t, e, n, i) {
          const {
              ctx: r,
              maxHeight: o,
              options: {
                labels: { padding: s },
              },
            } = this,
            a = (this.legendHitBoxes = []),
            c = (this.columnSizes = []),
            l = o - t;
          let h = s,
            u = 0,
            f = 0,
            d = 0,
            p = 0;
          return (
            this.legendItems.forEach((t, o) => {
              const g = n + e / 2 + r.measureText(t.text).width;
              o > 0 &&
                f + i + 2 * s > l &&
                ((h += u + s),
                c.push({ width: u, height: f }),
                (d += u + s),
                p++,
                (u = f = 0)),
                (a[o] = { left: d, top: f, col: p, width: g, height: i }),
                (u = Math.max(u, g)),
                (f += i + s);
            }),
            (h += u),
            c.push({ width: u, height: f }),
            h
          );
        }
        adjustHitBoxes() {
          if (!this.options.display) return;
          const t = this._computeTitleHeight(),
            {
              legendHitBoxes: e,
              options: {
                align: n,
                labels: { padding: i },
                rtl: r,
              },
            } = this,
            o = an(r, this.left, this.width);
          if (this.isHorizontal()) {
            let r = 0,
              a = s(n, this.left + i, this.right - this.lineWidths[r]);
            for (const c of e)
              r !== c.row &&
                ((r = c.row),
                (a = s(n, this.left + i, this.right - this.lineWidths[r]))),
                (c.top += this.top + t + i),
                (c.left = o.leftForLtr(o.x(a), c.width)),
                (a += c.width + i);
          } else {
            let r = 0,
              a = s(
                n,
                this.top + t + i,
                this.bottom - this.columnSizes[r].height,
              );
            for (const c of e)
              c.col !== r &&
                ((r = c.col),
                (a = s(
                  n,
                  this.top + t + i,
                  this.bottom - this.columnSizes[r].height,
                ))),
                (c.top = a),
                (c.left += this.left + i),
                (c.left = o.leftForLtr(o.x(c.left), c.width)),
                (a += c.height + i);
          }
        }
        isHorizontal() {
          return (
            'top' === this.options.position ||
            'bottom' === this.options.position
          );
        }
        draw() {
          if (this.options.display) {
            const t = this.ctx;
            Zt(t, this), this._draw(), te(t);
          }
        }
        _draw() {
          const { options: t, columnSizes: e, lineWidths: n, ctx: i } = this,
            { align: r, labels: o } = t,
            a = Yt.color,
            c = an(t.rtl, this.left, this.width),
            l = de(o.font),
            { color: h, padding: u } = o,
            f = l.size,
            d = f / 2;
          let g;
          this.drawTitle(),
            (i.textAlign = c.textAlign('left')),
            (i.textBaseline = 'middle'),
            (i.lineWidth = 0.5),
            (i.font = l.string);
          const { boxWidth: m, boxHeight: v, itemHeight: y } = uo(o, f),
            x = this.isHorizontal(),
            b = this._computeTitleHeight();
          (g = x
            ? {
                x: s(r, this.left + u, this.right - n[0]),
                y: this.top + u + b,
                line: 0,
              }
            : {
                x: this.left + u,
                y: s(r, this.top + b + u, this.bottom - e[0].height),
                line: 0,
              }),
            cn(this.ctx, t.textDirection);
          const _ = y + u;
          this.legendItems.forEach((w, k) => {
            (i.strokeStyle = w.fontColor || h),
              (i.fillStyle = w.fontColor || h);
            const M = i.measureText(w.text).width,
              P = c.textAlign(w.textAlign || (w.textAlign = o.textAlign)),
              O = m + d + M;
            let E = g.x,
              S = g.y;
            c.setWidth(this.width),
              x
                ? k > 0 &&
                  E + O + u > this.right &&
                  ((S = g.y += _),
                  g.line++,
                  (E = g.x = s(r, this.left + u, this.right - n[g.line])))
                : k > 0 &&
                  S + _ > this.bottom &&
                  ((E = g.x = E + e[g.line].width + u),
                  g.line++,
                  (S = g.y =
                    s(r, this.top + b + u, this.bottom - e[g.line].height)));
            !(function (t, e, n) {
              if (isNaN(m) || m <= 0 || isNaN(v) || v < 0) return;
              i.save();
              const r = p(n.lineWidth, 1);
              if (
                ((i.fillStyle = p(n.fillStyle, a)),
                (i.lineCap = p(n.lineCap, 'butt')),
                (i.lineDashOffset = p(n.lineDashOffset, 0)),
                (i.lineJoin = p(n.lineJoin, 'miter')),
                (i.lineWidth = r),
                (i.strokeStyle = p(n.strokeStyle, a)),
                i.setLineDash(p(n.lineDash, [])),
                o.usePointStyle)
              ) {
                const o = {
                    radius: (m * Math.SQRT2) / 2,
                    pointStyle: n.pointStyle,
                    rotation: n.rotation,
                    borderWidth: r,
                  },
                  s = c.xPlus(t, m / 2);
                Kt(i, o, s, e + d);
              } else {
                const o = e + Math.max((f - v) / 2, 0),
                  s = c.leftForLtr(t, m),
                  a = ue(n.borderRadius);
                i.beginPath(),
                  Object.values(a).some(t => 0 !== t)
                    ? oe(i, { x: s, y: o, w: m, h: v, radius: a })
                    : i.rect(s, o, m, v),
                  i.fill(),
                  0 !== r && i.stroke();
              }
              i.restore();
            })(c.x(E), S, w),
              (E = ((t, e, n, i) =>
                t === (i ? 'left' : 'right')
                  ? n
                  : 'center' === t
                  ? (e + n) / 2
                  : e)(P, E + m + d, x ? E + O : this.right, t.rtl)),
              (function (t, e, n) {
                ie(i, n.text, t, e + y / 2, l, {
                  strikethrough: n.hidden,
                  textAlign: c.textAlign(n.textAlign),
                });
              })(c.x(E), S, w),
              x ? (g.x += O + u) : (g.y += _);
          }),
            ln(this.ctx, t.textDirection);
        }
        drawTitle() {
          const t = this.options,
            e = t.title,
            n = de(e.font),
            i = fe(e.padding);
          if (!e.display) return;
          const r = an(t.rtl, this.left, this.width),
            a = this.ctx,
            c = e.position,
            l = n.size / 2,
            h = i.top + l;
          let u,
            f = this.left,
            d = this.width;
          if (this.isHorizontal())
            (d = Math.max(...this.lineWidths)),
              (u = this.top + h),
              (f = s(t.align, f, this.right - d));
          else {
            const e = this.columnSizes.reduce(
              (t, e) => Math.max(t, e.height),
              0,
            );
            u =
              h +
              s(
                t.align,
                this.top,
                this.bottom - e - t.labels.padding - this._computeTitleHeight(),
              );
          }
          const p = s(c, f, f + d);
          (a.textAlign = r.textAlign(o(c))),
            (a.textBaseline = 'middle'),
            (a.strokeStyle = e.color),
            (a.fillStyle = e.color),
            (a.font = n.string),
            ie(a, e.text, p, u, n);
        }
        _computeTitleHeight() {
          const t = this.options.title,
            e = de(t.font),
            n = fe(t.padding);
          return t.display ? e.lineHeight + n.height : 0;
        }
        _getLegendItemAt(t, e) {
          let n, i, r;
          if (tt(t, this.left, this.right) && tt(e, this.top, this.bottom))
            for (r = this.legendHitBoxes, n = 0; n < r.length; ++n)
              if (
                ((i = r[n]),
                tt(t, i.left, i.left + i.width) &&
                  tt(e, i.top, i.top + i.height))
              )
                return this.legendItems[n];
          return null;
        }
        handleEvent(t) {
          const e = this.options;
          if (
            !(function (t, e) {
              if (
                ('mousemove' === t || 'mouseout' === t) &&
                (e.onHover || e.onLeave)
              )
                return !0;
              if (e.onClick && ('click' === t || 'mouseup' === t)) return !0;
              return !1;
            })(t.type, e)
          )
            return;
          const n = this._getLegendItemAt(t.x, t.y);
          if ('mousemove' === t.type || 'mouseout' === t.type) {
            const o = this._hoveredItem,
              s =
                ((r = n),
                null !== (i = o) &&
                  null !== r &&
                  i.datasetIndex === r.datasetIndex &&
                  i.index === r.index);
            o && !s && m(e.onLeave, [t, o, this], this),
              (this._hoveredItem = n),
              n && !s && m(e.onHover, [t, n, this], this);
          } else n && m(e.onClick, [t, n, this], this);
          var i, r;
        }
      }
      var po = {
        id: 'legend',
        _element: fo,
        start(t, e, n) {
          const i = (t.legend = new fo({ ctx: t.ctx, options: n, chart: t }));
          xi.configure(t, i, n), xi.addBox(t, i);
        },
        stop(t) {
          xi.removeBox(t, t.legend), delete t.legend;
        },
        beforeUpdate(t, e, n) {
          const i = t.legend;
          xi.configure(t, i, n), (i.options = n);
        },
        afterUpdate(t) {
          const e = t.legend;
          e.buildLabels(), e.adjustHitBoxes();
        },
        afterEvent(t, e) {
          e.replay || t.legend.handleEvent(e.event);
        },
        defaults: {
          display: !0,
          position: 'top',
          align: 'center',
          fullSize: !0,
          reverse: !1,
          weight: 1e3,
          onClick(t, e, n) {
            const i = e.datasetIndex,
              r = n.chart;
            r.isDatasetVisible(i)
              ? (r.hide(i), (e.hidden = !0))
              : (r.show(i), (e.hidden = !1));
          },
          onHover: null,
          onLeave: null,
          labels: {
            color: t => t.chart.options.color,
            boxWidth: 40,
            padding: 10,
            generateLabels(t) {
              const e = t.data.datasets,
                {
                  labels: {
                    usePointStyle: n,
                    pointStyle: i,
                    textAlign: r,
                    color: o,
                  },
                } = t.legend.options;
              return t._getSortedDatasetMetas().map(t => {
                const s = t.controller.getStyle(n ? 0 : void 0),
                  a = fe(s.borderWidth);
                return {
                  text: e[t.index].label,
                  fillStyle: s.backgroundColor,
                  fontColor: o,
                  hidden: !t.visible,
                  lineCap: s.borderCapStyle,
                  lineDash: s.borderDash,
                  lineDashOffset: s.borderDashOffset,
                  lineJoin: s.borderJoinStyle,
                  lineWidth: (a.width + a.height) / 4,
                  strokeStyle: s.borderColor,
                  pointStyle: i || s.pointStyle,
                  rotation: s.rotation,
                  textAlign: r || s.textAlign,
                  borderRadius: 0,
                  datasetIndex: t.index,
                };
              }, this);
            },
          },
          title: {
            color: t => t.chart.options.color,
            display: !1,
            position: 'center',
            text: '',
          },
        },
        descriptors: {
          _scriptable: t => !t.startsWith('on'),
          labels: {
            _scriptable: t => !['generateLabels', 'filter', 'sort'].includes(t),
          },
        },
      };
      class go extends ji {
        constructor(t) {
          super(),
            (this.chart = t.chart),
            (this.options = t.options),
            (this.ctx = t.ctx),
            (this._padding = void 0),
            (this.top = void 0),
            (this.bottom = void 0),
            (this.left = void 0),
            (this.right = void 0),
            (this.width = void 0),
            (this.height = void 0),
            (this.position = void 0),
            (this.weight = void 0),
            (this.fullSize = void 0);
        }
        update(t, e) {
          const n = this.options;
          if (((this.left = 0), (this.top = 0), !n.display))
            return void (this.width =
              this.height =
              this.right =
              this.bottom =
                0);
          (this.width = this.right = t), (this.height = this.bottom = e);
          const i = h(n.text) ? n.text.length : 1;
          this._padding = fe(n.padding);
          const r = i * de(n.font).lineHeight + this._padding.height;
          this.isHorizontal() ? (this.height = r) : (this.width = r);
        }
        isHorizontal() {
          const t = this.options.position;
          return 'top' === t || 'bottom' === t;
        }
        _drawArgs(t) {
          const { top: e, left: n, bottom: i, right: r, options: o } = this,
            a = o.align;
          let c,
            l,
            h,
            u = 0;
          return (
            this.isHorizontal()
              ? ((l = s(a, n, r)), (h = e + t), (c = r - n))
              : ('left' === o.position
                  ? ((l = n + t), (h = s(a, i, e)), (u = -0.5 * C))
                  : ((l = r - t), (h = s(a, e, i)), (u = 0.5 * C)),
                (c = i - e)),
            { titleX: l, titleY: h, maxWidth: c, rotation: u }
          );
        }
        draw() {
          const t = this.ctx,
            e = this.options;
          if (!e.display) return;
          const n = de(e.font),
            i = n.lineHeight / 2 + this._padding.top,
            {
              titleX: r,
              titleY: s,
              maxWidth: a,
              rotation: c,
            } = this._drawArgs(i);
          ie(t, e.text, 0, 0, n, {
            color: e.color,
            maxWidth: a,
            rotation: c,
            textAlign: o(e.align),
            textBaseline: 'middle',
            translation: [r, s],
          });
        }
      }
      var mo = {
        id: 'title',
        _element: go,
        start(t, e, n) {
          !(function (t, e) {
            const n = new go({ ctx: t.ctx, options: e, chart: t });
            xi.configure(t, n, e), xi.addBox(t, n), (t.titleBlock = n);
          })(t, n);
        },
        stop(t) {
          const e = t.titleBlock;
          xi.removeBox(t, e), delete t.titleBlock;
        },
        beforeUpdate(t, e, n) {
          const i = t.titleBlock;
          xi.configure(t, i, n), (i.options = n);
        },
        defaults: {
          align: 'center',
          display: !1,
          font: { weight: 'bold' },
          fullSize: !0,
          padding: 10,
          position: 'top',
          text: '',
          weight: 2e3,
        },
        defaultRoutes: { color: 'color' },
        descriptors: { _scriptable: !0, _indexable: !1 },
      };
      const vo = new WeakMap();
      var yo = {
        id: 'subtitle',
        start(t, e, n) {
          const i = new go({ ctx: t.ctx, options: n, chart: t });
          xi.configure(t, i, n), xi.addBox(t, i), vo.set(t, i);
        },
        stop(t) {
          xi.removeBox(t, vo.get(t)), vo.delete(t);
        },
        beforeUpdate(t, e, n) {
          const i = vo.get(t);
          xi.configure(t, i, n), (i.options = n);
        },
        defaults: {
          align: 'center',
          display: !1,
          font: { weight: 'normal' },
          fullSize: !0,
          padding: 0,
          position: 'top',
          text: '',
          weight: 1500,
        },
        defaultRoutes: { color: 'color' },
        descriptors: { _scriptable: !0, _indexable: !1 },
      };
      const xo = {
        average(t) {
          if (!t.length) return !1;
          let e,
            n,
            i = 0,
            r = 0,
            o = 0;
          for (e = 0, n = t.length; e < n; ++e) {
            const n = t[e].element;
            if (n && n.hasValue()) {
              const t = n.tooltipPosition();
              (i += t.x), (r += t.y), ++o;
            }
          }
          return { x: i / o, y: r / o };
        },
        nearest(t, e) {
          if (!t.length) return !1;
          let n,
            i,
            r,
            o = e.x,
            s = e.y,
            a = Number.POSITIVE_INFINITY;
          for (n = 0, i = t.length; n < i; ++n) {
            const i = t[n].element;
            if (i && i.hasValue()) {
              const t = J(e, i.getCenterPoint());
              t < a && ((a = t), (r = i));
            }
          }
          if (r) {
            const t = r.tooltipPosition();
            (o = t.x), (s = t.y);
          }
          return { x: o, y: s };
        },
      };
      function bo(t, e) {
        return e && (h(e) ? Array.prototype.push.apply(t, e) : t.push(e)), t;
      }
      function _o(t) {
        return ('string' == typeof t || t instanceof String) &&
          t.indexOf('\n') > -1
          ? t.split('\n')
          : t;
      }
      function wo(t, e) {
        const { element: n, datasetIndex: i, index: r } = e,
          o = t.getDatasetMeta(i).controller,
          { label: s, value: a } = o.getLabelAndValue(r);
        return {
          chart: t,
          label: s,
          parsed: o.getParsed(r),
          raw: t.data.datasets[i].data[r],
          formattedValue: a,
          dataset: o.getDataset(),
          dataIndex: r,
          datasetIndex: i,
          element: n,
        };
      }
      function ko(t, e) {
        const n = t.chart.ctx,
          { body: i, footer: r, title: o } = t,
          { boxWidth: s, boxHeight: a } = e,
          c = de(e.bodyFont),
          l = de(e.titleFont),
          h = de(e.footerFont),
          u = o.length,
          f = r.length,
          d = i.length,
          p = fe(e.padding);
        let g = p.height,
          m = 0,
          y = i.reduce(
            (t, e) => t + e.before.length + e.lines.length + e.after.length,
            0,
          );
        if (
          ((y += t.beforeBody.length + t.afterBody.length),
          u &&
            (g +=
              u * l.lineHeight +
              (u - 1) * e.titleSpacing +
              e.titleMarginBottom),
          y)
        ) {
          g +=
            d * (e.displayColors ? Math.max(a, c.lineHeight) : c.lineHeight) +
            (y - d) * c.lineHeight +
            (y - 1) * e.bodySpacing;
        }
        f &&
          (g +=
            e.footerMarginTop + f * h.lineHeight + (f - 1) * e.footerSpacing);
        let x = 0;
        const b = function (t) {
          m = Math.max(m, n.measureText(t).width + x);
        };
        return (
          n.save(),
          (n.font = l.string),
          v(t.title, b),
          (n.font = c.string),
          v(t.beforeBody.concat(t.afterBody), b),
          (x = e.displayColors ? s + 2 + e.boxPadding : 0),
          v(i, t => {
            v(t.before, b), v(t.lines, b), v(t.after, b);
          }),
          (x = 0),
          (n.font = h.string),
          v(t.footer, b),
          n.restore(),
          (m += p.width),
          { width: m, height: g }
        );
      }
      function Mo(t, e, n, i) {
        const { x: r, width: o } = n,
          {
            width: s,
            chartArea: { left: a, right: c },
          } = t;
        let l = 'center';
        return (
          'center' === i
            ? (l = r <= (a + c) / 2 ? 'left' : 'right')
            : r <= o / 2
            ? (l = 'left')
            : r >= s - o / 2 && (l = 'right'),
          (function (t, e, n, i) {
            const { x: r, width: o } = i,
              s = n.caretSize + n.caretPadding;
            return (
              ('left' === t && r + o + s > e.width) ||
              ('right' === t && r - o - s < 0) ||
              void 0
            );
          })(l, t, e, n) && (l = 'center'),
          l
        );
      }
      function Po(t, e, n) {
        const i =
          n.yAlign ||
          e.yAlign ||
          (function (t, e) {
            const { y: n, height: i } = e;
            return n < i / 2
              ? 'top'
              : n > t.height - i / 2
              ? 'bottom'
              : 'center';
          })(t, n);
        return { xAlign: n.xAlign || e.xAlign || Mo(t, e, n, i), yAlign: i };
      }
      function Oo(t, e, n, i) {
        const { caretSize: r, caretPadding: o, cornerRadius: s } = t,
          { xAlign: a, yAlign: c } = n,
          l = r + o,
          { topLeft: h, topRight: u, bottomLeft: f, bottomRight: d } = ue(s);
        let p = (function (t, e) {
          let { x: n, width: i } = t;
          return 'right' === e ? (n -= i) : 'center' === e && (n -= i / 2), n;
        })(e, a);
        const g = (function (t, e, n) {
          let { y: i, height: r } = t;
          return (
            'top' === e ? (i += n) : (i -= 'bottom' === e ? r + n : r / 2), i
          );
        })(e, c, l);
        return (
          'center' === c
            ? 'left' === a
              ? (p += l)
              : 'right' === a && (p -= l)
            : 'left' === a
            ? (p -= Math.max(h, f) + r)
            : 'right' === a && (p += Math.max(u, d) + r),
          { x: Z(p, 0, i.width - e.width), y: Z(g, 0, i.height - e.height) }
        );
      }
      function Eo(t, e, n) {
        const i = fe(n.padding);
        return 'center' === e
          ? t.x + t.width / 2
          : 'right' === e
          ? t.x + t.width - i.right
          : t.x + i.left;
      }
      function So(t) {
        return bo([], _o(t));
      }
      function To(t, e) {
        const n =
          e && e.dataset && e.dataset.tooltip && e.dataset.tooltip.callbacks;
        return n ? t.override(n) : t;
      }
      class Ao extends ji {
        constructor(t) {
          super(),
            (this.opacity = 0),
            (this._active = []),
            (this._eventPosition = void 0),
            (this._size = void 0),
            (this._cachedAnimations = void 0),
            (this._tooltipItems = []),
            (this.$animations = void 0),
            (this.$context = void 0),
            (this.chart = t.chart || t._chart),
            (this._chart = this.chart),
            (this.options = t.options),
            (this.dataPoints = void 0),
            (this.title = void 0),
            (this.beforeBody = void 0),
            (this.body = void 0),
            (this.afterBody = void 0),
            (this.footer = void 0),
            (this.xAlign = void 0),
            (this.yAlign = void 0),
            (this.x = void 0),
            (this.y = void 0),
            (this.height = void 0),
            (this.width = void 0),
            (this.caretX = void 0),
            (this.caretY = void 0),
            (this.labelColors = void 0),
            (this.labelPointStyles = void 0),
            (this.labelTextColors = void 0);
        }
        initialize(t) {
          (this.options = t),
            (this._cachedAnimations = void 0),
            (this.$context = void 0);
        }
        _resolveAnimations() {
          const t = this._cachedAnimations;
          if (t) return t;
          const e = this.chart,
            n = this.options.setContext(this.getContext()),
            i = n.enabled && e.options.animation && n.animations,
            r = new _n(this.chart, i);
          return i._cacheable && (this._cachedAnimations = Object.freeze(r)), r;
        }
        getContext() {
          return (
            this.$context ||
            (this.$context =
              ((t = this.chart.getContext()),
              (e = this),
              (n = this._tooltipItems),
              ge(t, { tooltip: e, tooltipItems: n, type: 'tooltip' })))
          );
          var t, e, n;
        }
        getTitle(t, e) {
          const { callbacks: n } = e,
            i = n.beforeTitle.apply(this, [t]),
            r = n.title.apply(this, [t]),
            o = n.afterTitle.apply(this, [t]);
          let s = [];
          return (s = bo(s, _o(i))), (s = bo(s, _o(r))), (s = bo(s, _o(o))), s;
        }
        getBeforeBody(t, e) {
          return So(e.callbacks.beforeBody.apply(this, [t]));
        }
        getBody(t, e) {
          const { callbacks: n } = e,
            i = [];
          return (
            v(t, t => {
              const e = { before: [], lines: [], after: [] },
                r = To(n, t);
              bo(e.before, _o(r.beforeLabel.call(this, t))),
                bo(e.lines, r.label.call(this, t)),
                bo(e.after, _o(r.afterLabel.call(this, t))),
                i.push(e);
            }),
            i
          );
        }
        getAfterBody(t, e) {
          return So(e.callbacks.afterBody.apply(this, [t]));
        }
        getFooter(t, e) {
          const { callbacks: n } = e,
            i = n.beforeFooter.apply(this, [t]),
            r = n.footer.apply(this, [t]),
            o = n.afterFooter.apply(this, [t]);
          let s = [];
          return (s = bo(s, _o(i))), (s = bo(s, _o(r))), (s = bo(s, _o(o))), s;
        }
        _createItems(t) {
          const e = this._active,
            n = this.chart.data,
            i = [],
            r = [],
            o = [];
          let s,
            a,
            c = [];
          for (s = 0, a = e.length; s < a; ++s) c.push(wo(this.chart, e[s]));
          return (
            t.filter && (c = c.filter((e, i, r) => t.filter(e, i, r, n))),
            t.itemSort && (c = c.sort((e, i) => t.itemSort(e, i, n))),
            v(c, e => {
              const n = To(t.callbacks, e);
              i.push(n.labelColor.call(this, e)),
                r.push(n.labelPointStyle.call(this, e)),
                o.push(n.labelTextColor.call(this, e));
            }),
            (this.labelColors = i),
            (this.labelPointStyles = r),
            (this.labelTextColors = o),
            (this.dataPoints = c),
            c
          );
        }
        update(t, e) {
          const n = this.options.setContext(this.getContext()),
            i = this._active;
          let r,
            o = [];
          if (i.length) {
            const t = xo[n.position].call(this, i, this._eventPosition);
            (o = this._createItems(n)),
              (this.title = this.getTitle(o, n)),
              (this.beforeBody = this.getBeforeBody(o, n)),
              (this.body = this.getBody(o, n)),
              (this.afterBody = this.getAfterBody(o, n)),
              (this.footer = this.getFooter(o, n));
            const e = (this._size = ko(this, n)),
              s = Object.assign({}, t, e),
              a = Po(this.chart, n, s),
              c = Oo(n, s, a, this.chart);
            (this.xAlign = a.xAlign),
              (this.yAlign = a.yAlign),
              (r = {
                opacity: 1,
                x: c.x,
                y: c.y,
                width: e.width,
                height: e.height,
                caretX: t.x,
                caretY: t.y,
              });
          } else 0 !== this.opacity && (r = { opacity: 0 });
          (this._tooltipItems = o),
            (this.$context = void 0),
            r && this._resolveAnimations().update(this, r),
            t &&
              n.external &&
              n.external.call(this, {
                chart: this.chart,
                tooltip: this,
                replay: e,
              });
        }
        drawCaret(t, e, n, i) {
          const r = this.getCaretPosition(t, n, i);
          e.lineTo(r.x1, r.y1), e.lineTo(r.x2, r.y2), e.lineTo(r.x3, r.y3);
        }
        getCaretPosition(t, e, n) {
          const { xAlign: i, yAlign: r } = this,
            { caretSize: o, cornerRadius: s } = n,
            { topLeft: a, topRight: c, bottomLeft: l, bottomRight: h } = ue(s),
            { x: u, y: f } = t,
            { width: d, height: p } = e;
          let g, m, v, y, x, b;
          return (
            'center' === r
              ? ((x = f + p / 2),
                'left' === i
                  ? ((g = u), (m = g - o), (y = x + o), (b = x - o))
                  : ((g = u + d), (m = g + o), (y = x - o), (b = x + o)),
                (v = g))
              : ((m =
                  'left' === i
                    ? u + Math.max(a, l) + o
                    : 'right' === i
                    ? u + d - Math.max(c, h) - o
                    : this.caretX),
                'top' === r
                  ? ((y = f), (x = y - o), (g = m - o), (v = m + o))
                  : ((y = f + p), (x = y + o), (g = m + o), (v = m - o)),
                (b = y)),
            { x1: g, x2: m, x3: v, y1: y, y2: x, y3: b }
          );
        }
        drawTitle(t, e, n) {
          const i = this.title,
            r = i.length;
          let o, s, a;
          if (r) {
            const c = an(n.rtl, this.x, this.width);
            for (
              t.x = Eo(this, n.titleAlign, n),
                e.textAlign = c.textAlign(n.titleAlign),
                e.textBaseline = 'middle',
                o = de(n.titleFont),
                s = n.titleSpacing,
                e.fillStyle = n.titleColor,
                e.font = o.string,
                a = 0;
              a < r;
              ++a
            )
              e.fillText(i[a], c.x(t.x), t.y + o.lineHeight / 2),
                (t.y += o.lineHeight + s),
                a + 1 === r && (t.y += n.titleMarginBottom - s);
          }
        }
        _drawColorBox(t, e, n, i, r) {
          const o = this.labelColors[n],
            s = this.labelPointStyles[n],
            { boxHeight: a, boxWidth: c, boxPadding: l } = r,
            h = de(r.bodyFont),
            u = Eo(this, 'left', r),
            f = i.x(u),
            d = a < h.lineHeight ? (h.lineHeight - a) / 2 : 0,
            p = e.y + d;
          if (r.usePointStyle) {
            const e = {
                radius: Math.min(c, a) / 2,
                pointStyle: s.pointStyle,
                rotation: s.rotation,
                borderWidth: 1,
              },
              n = i.leftForLtr(f, c) + c / 2,
              l = p + a / 2;
            (t.strokeStyle = r.multiKeyBackground),
              (t.fillStyle = r.multiKeyBackground),
              Kt(t, e, n, l),
              (t.strokeStyle = o.borderColor),
              (t.fillStyle = o.backgroundColor),
              Kt(t, e, n, l);
          } else {
            (t.lineWidth = o.borderWidth || 1),
              (t.strokeStyle = o.borderColor),
              t.setLineDash(o.borderDash || []),
              (t.lineDashOffset = o.borderDashOffset || 0);
            const e = i.leftForLtr(f, c - l),
              n = i.leftForLtr(i.xPlus(f, 1), c - l - 2),
              s = ue(o.borderRadius);
            Object.values(s).some(t => 0 !== t)
              ? (t.beginPath(),
                (t.fillStyle = r.multiKeyBackground),
                oe(t, { x: e, y: p, w: c, h: a, radius: s }),
                t.fill(),
                t.stroke(),
                (t.fillStyle = o.backgroundColor),
                t.beginPath(),
                oe(t, { x: n, y: p + 1, w: c - 2, h: a - 2, radius: s }),
                t.fill())
              : ((t.fillStyle = r.multiKeyBackground),
                t.fillRect(e, p, c, a),
                t.strokeRect(e, p, c, a),
                (t.fillStyle = o.backgroundColor),
                t.fillRect(n, p + 1, c - 2, a - 2));
          }
          t.fillStyle = this.labelTextColors[n];
        }
        drawBody(t, e, n) {
          const { body: i } = this,
            {
              bodySpacing: r,
              bodyAlign: o,
              displayColors: s,
              boxHeight: a,
              boxWidth: c,
              boxPadding: l,
            } = n,
            h = de(n.bodyFont);
          let u = h.lineHeight,
            f = 0;
          const d = an(n.rtl, this.x, this.width),
            p = function (n) {
              e.fillText(n, d.x(t.x + f), t.y + u / 2), (t.y += u + r);
            },
            g = d.textAlign(o);
          let m, y, x, b, _, w, k;
          for (
            e.textAlign = o,
              e.textBaseline = 'middle',
              e.font = h.string,
              t.x = Eo(this, g, n),
              e.fillStyle = n.bodyColor,
              v(this.beforeBody, p),
              f =
                s && 'right' !== g
                  ? 'center' === o
                    ? c / 2 + l
                    : c + 2 + l
                  : 0,
              b = 0,
              w = i.length;
            b < w;
            ++b
          ) {
            for (
              m = i[b],
                y = this.labelTextColors[b],
                e.fillStyle = y,
                v(m.before, p),
                x = m.lines,
                s &&
                  x.length &&
                  (this._drawColorBox(e, t, b, d, n),
                  (u = Math.max(h.lineHeight, a))),
                _ = 0,
                k = x.length;
              _ < k;
              ++_
            )
              p(x[_]), (u = h.lineHeight);
            v(m.after, p);
          }
          (f = 0), (u = h.lineHeight), v(this.afterBody, p), (t.y -= r);
        }
        drawFooter(t, e, n) {
          const i = this.footer,
            r = i.length;
          let o, s;
          if (r) {
            const a = an(n.rtl, this.x, this.width);
            for (
              t.x = Eo(this, n.footerAlign, n),
                t.y += n.footerMarginTop,
                e.textAlign = a.textAlign(n.footerAlign),
                e.textBaseline = 'middle',
                o = de(n.footerFont),
                e.fillStyle = n.footerColor,
                e.font = o.string,
                s = 0;
              s < r;
              ++s
            )
              e.fillText(i[s], a.x(t.x), t.y + o.lineHeight / 2),
                (t.y += o.lineHeight + n.footerSpacing);
          }
        }
        drawBackground(t, e, n, i) {
          const { xAlign: r, yAlign: o } = this,
            { x: s, y: a } = t,
            { width: c, height: l } = n,
            {
              topLeft: h,
              topRight: u,
              bottomLeft: f,
              bottomRight: d,
            } = ue(i.cornerRadius);
          (e.fillStyle = i.backgroundColor),
            (e.strokeStyle = i.borderColor),
            (e.lineWidth = i.borderWidth),
            e.beginPath(),
            e.moveTo(s + h, a),
            'top' === o && this.drawCaret(t, e, n, i),
            e.lineTo(s + c - u, a),
            e.quadraticCurveTo(s + c, a, s + c, a + u),
            'center' === o && 'right' === r && this.drawCaret(t, e, n, i),
            e.lineTo(s + c, a + l - d),
            e.quadraticCurveTo(s + c, a + l, s + c - d, a + l),
            'bottom' === o && this.drawCaret(t, e, n, i),
            e.lineTo(s + f, a + l),
            e.quadraticCurveTo(s, a + l, s, a + l - f),
            'center' === o && 'left' === r && this.drawCaret(t, e, n, i),
            e.lineTo(s, a + h),
            e.quadraticCurveTo(s, a, s + h, a),
            e.closePath(),
            e.fill(),
            i.borderWidth > 0 && e.stroke();
        }
        _updateAnimationTarget(t) {
          const e = this.chart,
            n = this.$animations,
            i = n && n.x,
            r = n && n.y;
          if (i || r) {
            const n = xo[t.position].call(
              this,
              this._active,
              this._eventPosition,
            );
            if (!n) return;
            const o = (this._size = ko(this, t)),
              s = Object.assign({}, n, this._size),
              a = Po(e, t, s),
              c = Oo(t, s, a, e);
            (i._to === c.x && r._to === c.y) ||
              ((this.xAlign = a.xAlign),
              (this.yAlign = a.yAlign),
              (this.width = o.width),
              (this.height = o.height),
              (this.caretX = n.x),
              (this.caretY = n.y),
              this._resolveAnimations().update(this, c));
          }
        }
        _willRender() {
          return !!this.opacity;
        }
        draw(t) {
          const e = this.options.setContext(this.getContext());
          let n = this.opacity;
          if (!n) return;
          this._updateAnimationTarget(e);
          const i = { width: this.width, height: this.height },
            r = { x: this.x, y: this.y };
          n = Math.abs(n) < 0.001 ? 0 : n;
          const o = fe(e.padding),
            s =
              this.title.length ||
              this.beforeBody.length ||
              this.body.length ||
              this.afterBody.length ||
              this.footer.length;
          e.enabled &&
            s &&
            (t.save(),
            (t.globalAlpha = n),
            this.drawBackground(r, t, i, e),
            cn(t, e.textDirection),
            (r.y += o.top),
            this.drawTitle(r, t, e),
            this.drawBody(r, t, e),
            this.drawFooter(r, t, e),
            ln(t, e.textDirection),
            t.restore());
        }
        getActiveElements() {
          return this._active || [];
        }
        setActiveElements(t, e) {
          const n = this._active,
            i = t.map(({ datasetIndex: t, index: e }) => {
              const n = this.chart.getDatasetMeta(t);
              if (!n) throw new Error('Cannot find a dataset at index ' + t);
              return { datasetIndex: t, element: n.data[e], index: e };
            }),
            r = !y(n, i),
            o = this._positionChanged(i, e);
          (r || o) &&
            ((this._active = i),
            (this._eventPosition = e),
            (this._ignoreReplayEvents = !0),
            this.update(!0));
        }
        handleEvent(t, e, n = !0) {
          if (e && this._ignoreReplayEvents) return !1;
          this._ignoreReplayEvents = !1;
          const i = this.options,
            r = this._active || [],
            o = this._getActiveElements(t, r, e, n),
            s = this._positionChanged(o, t),
            a = e || !y(o, r) || s;
          return (
            a &&
              ((this._active = o),
              (i.enabled || i.external) &&
                ((this._eventPosition = { x: t.x, y: t.y }),
                this.update(!0, e))),
            a
          );
        }
        _getActiveElements(t, e, n, i) {
          const r = this.options;
          if ('mouseout' === t.type) return [];
          if (!i) return e;
          const o = this.chart.getElementsAtEventForMode(t, r.mode, r, n);
          return r.reverse && o.reverse(), o;
        }
        _positionChanged(t, e) {
          const { caretX: n, caretY: i, options: r } = this,
            o = xo[r.position].call(this, t, e);
          return !1 !== o && (n !== o.x || i !== o.y);
        }
      }
      Ao.positioners = xo;
      var Co = {
          id: 'tooltip',
          _element: Ao,
          positioners: xo,
          afterInit(t, e, n) {
            n && (t.tooltip = new Ao({ chart: t, options: n }));
          },
          beforeUpdate(t, e, n) {
            t.tooltip && t.tooltip.initialize(n);
          },
          reset(t, e, n) {
            t.tooltip && t.tooltip.initialize(n);
          },
          afterDraw(t) {
            const e = t.tooltip;
            if (e && e._willRender()) {
              const n = { tooltip: e };
              if (!1 === t.notifyPlugins('beforeTooltipDraw', n)) return;
              e.draw(t.ctx), t.notifyPlugins('afterTooltipDraw', n);
            }
          },
          afterEvent(t, e) {
            if (t.tooltip) {
              const n = e.replay;
              t.tooltip.handleEvent(e.event, n, e.inChartArea) &&
                (e.changed = !0);
            }
          },
          defaults: {
            enabled: !0,
            external: null,
            position: 'average',
            backgroundColor: 'rgba(0,0,0,0.8)',
            titleColor: '#fff',
            titleFont: { weight: 'bold' },
            titleSpacing: 2,
            titleMarginBottom: 6,
            titleAlign: 'left',
            bodyColor: '#fff',
            bodySpacing: 2,
            bodyFont: {},
            bodyAlign: 'left',
            footerColor: '#fff',
            footerSpacing: 2,
            footerMarginTop: 6,
            footerFont: { weight: 'bold' },
            footerAlign: 'left',
            padding: 6,
            caretPadding: 2,
            caretSize: 5,
            cornerRadius: 6,
            boxHeight: (t, e) => e.bodyFont.size,
            boxWidth: (t, e) => e.bodyFont.size,
            multiKeyBackground: '#fff',
            displayColors: !0,
            boxPadding: 0,
            borderColor: 'rgba(0,0,0,0)',
            borderWidth: 0,
            animation: { duration: 400, easing: 'easeOutQuart' },
            animations: {
              numbers: {
                type: 'number',
                properties: ['x', 'y', 'width', 'height', 'caretX', 'caretY'],
              },
              opacity: { easing: 'linear', duration: 200 },
            },
            callbacks: {
              beforeTitle: a,
              title(t) {
                if (t.length > 0) {
                  const e = t[0],
                    n = e.chart.data.labels,
                    i = n ? n.length : 0;
                  if (this && this.options && 'dataset' === this.options.mode)
                    return e.dataset.label || '';
                  if (e.label) return e.label;
                  if (i > 0 && e.dataIndex < i) return n[e.dataIndex];
                }
                return '';
              },
              afterTitle: a,
              beforeBody: a,
              beforeLabel: a,
              label(t) {
                if (this && this.options && 'dataset' === this.options.mode)
                  return t.label + ': ' + t.formattedValue || t.formattedValue;
                let e = t.dataset.label || '';
                e && (e += ': ');
                const n = t.formattedValue;
                return l(n) || (e += n), e;
              },
              labelColor(t) {
                const e = t.chart
                  .getDatasetMeta(t.datasetIndex)
                  .controller.getStyle(t.dataIndex);
                return {
                  borderColor: e.borderColor,
                  backgroundColor: e.backgroundColor,
                  borderWidth: e.borderWidth,
                  borderDash: e.borderDash,
                  borderDashOffset: e.borderDashOffset,
                  borderRadius: 0,
                };
              },
              labelTextColor() {
                return this.options.bodyColor;
              },
              labelPointStyle(t) {
                const e = t.chart
                  .getDatasetMeta(t.datasetIndex)
                  .controller.getStyle(t.dataIndex);
                return { pointStyle: e.pointStyle, rotation: e.rotation };
              },
              afterLabel: a,
              afterBody: a,
              beforeFooter: a,
              footer: a,
              afterFooter: a,
            },
          },
          defaultRoutes: {
            bodyFont: 'font',
            footerFont: 'font',
            titleFont: 'font',
          },
          descriptors: {
            _scriptable: t =>
              'filter' !== t && 'itemSort' !== t && 'external' !== t,
            _indexable: !1,
            callbacks: { _scriptable: !1, _indexable: !1 },
            animation: { _fallback: !1 },
            animations: { _fallback: 'animation' },
          },
          additionalOptionScopes: ['interaction'],
        },
        Ro = Object.freeze({
          __proto__: null,
          Decimation: qr,
          Filler: ho,
          Legend: po,
          SubTitle: yo,
          Title: mo,
          Tooltip: Co,
        });
      function Do(t, e, n, i) {
        const r = t.indexOf(e);
        if (-1 === r)
          return ((t, e, n, i) => (
            'string' == typeof e
              ? ((n = t.push(e) - 1), i.unshift({ index: n, label: e }))
              : isNaN(e) && (n = null),
            n
          ))(t, e, n, i);
        return r !== t.lastIndexOf(e) ? n : r;
      }
      class Lo extends Gi {
        constructor(t) {
          super(t),
            (this._startValue = void 0),
            (this._valueRange = 0),
            (this._addedLabels = []);
        }
        init(t) {
          const e = this._addedLabels;
          if (e.length) {
            const t = this.getLabels();
            for (const { index: n, label: i } of e)
              t[n] === i && t.splice(n, 1);
            this._addedLabels = [];
          }
          super.init(t);
        }
        parse(t, e) {
          if (l(t)) return null;
          const n = this.getLabels();
          return ((t, e) => (null === t ? null : Z(Math.round(t), 0, e)))(
            (e =
              isFinite(e) && n[e] === t
                ? e
                : Do(n, t, p(e, t), this._addedLabels)),
            n.length - 1,
          );
        }
        determineDataLimits() {
          const { minDefined: t, maxDefined: e } = this.getUserBounds();
          let { min: n, max: i } = this.getMinMax(!0);
          'ticks' === this.options.bounds &&
            (t || (n = 0), e || (i = this.getLabels().length - 1)),
            (this.min = n),
            (this.max = i);
        }
        buildTicks() {
          const t = this.min,
            e = this.max,
            n = this.options.offset,
            i = [];
          let r = this.getLabels();
          (r = 0 === t && e === r.length - 1 ? r : r.slice(t, e + 1)),
            (this._valueRange = Math.max(r.length - (n ? 0 : 1), 1)),
            (this._startValue = this.min - (n ? 0.5 : 0));
          for (let n = t; n <= e; n++) i.push({ value: n });
          return i;
        }
        getLabelForValue(t) {
          const e = this.getLabels();
          return t >= 0 && t < e.length ? e[t] : t;
        }
        configure() {
          super.configure(),
            this.isHorizontal() || (this._reversePixels = !this._reversePixels);
        }
        getPixelForValue(t) {
          return (
            'number' != typeof t && (t = this.parse(t)),
            null === t
              ? NaN
              : this.getPixelForDecimal(
                  (t - this._startValue) / this._valueRange,
                )
          );
        }
        getPixelForTick(t) {
          const e = this.ticks;
          return t < 0 || t > e.length - 1
            ? null
            : this.getPixelForValue(e[t].value);
        }
        getValueForPixel(t) {
          return Math.round(
            this._startValue + this.getDecimalForPixel(t) * this._valueRange,
          );
        }
        getBasePixel() {
          return this.bottom;
        }
      }
      function Io(t, e) {
        const n = [],
          {
            bounds: i,
            step: r,
            min: o,
            max: s,
            precision: a,
            count: c,
            maxTicks: h,
            maxDigits: u,
            includeBounds: f,
          } = t,
          d = r || 1,
          p = h - 1,
          { min: g, max: m } = e,
          v = !l(o),
          y = !l(s),
          x = !l(c),
          b = (m - g) / (u + 1);
        let _,
          w,
          k,
          M,
          P = z((m - g) / p / d) * d;
        if (P < 1e-14 && !v && !y) return [{ value: g }, { value: m }];
        (M = Math.ceil(m / P) - Math.floor(g / P)),
          M > p && (P = z((M * P) / p / d) * d),
          l(a) || ((_ = Math.pow(10, a)), (P = Math.ceil(P * _) / _)),
          'ticks' === i
            ? ((w = Math.floor(g / P) * P), (k = Math.ceil(m / P) * P))
            : ((w = g), (k = m)),
          v &&
          y &&
          r &&
          (function (t, e) {
            const n = Math.round(t);
            return n - e <= t && n + e >= t;
          })((s - o) / r, P / 1e3)
            ? ((M = Math.round(Math.min((s - o) / P, h))),
              (P = (s - o) / M),
              (w = o),
              (k = s))
            : x
            ? ((w = v ? o : w), (k = y ? s : k), (M = c - 1), (P = (k - w) / M))
            : ((M = (k - w) / P),
              (M = V(M, Math.round(M), P / 1e3)
                ? Math.round(M)
                : Math.ceil(M)));
        const O = Math.max(G(P), G(w));
        (_ = Math.pow(10, l(a) ? O : a)),
          (w = Math.round(w * _) / _),
          (k = Math.round(k * _) / _);
        let E = 0;
        for (
          v &&
          (f && w !== o
            ? (n.push({ value: o }),
              w < o && E++,
              V(Math.round((w + E * P) * _) / _, o, jo(o, b, t)) && E++)
            : w < o && E++);
          E < M;
          ++E
        )
          n.push({ value: Math.round((w + E * P) * _) / _ });
        return (
          y && f && k !== s
            ? n.length && V(n[n.length - 1].value, s, jo(s, b, t))
              ? (n[n.length - 1].value = s)
              : n.push({ value: s })
            : (y && k !== s) || n.push({ value: k }),
          n
        );
      }
      function jo(t, e, { horizontal: n, minRotation: i }) {
        const r = U(i),
          o = (n ? Math.sin(r) : Math.cos(r)) || 0.001,
          s = 0.75 * e * ('' + t).length;
        return Math.min(e / o, s);
      }
      (Lo.id = 'category'),
        (Lo.defaults = { ticks: { callback: Lo.prototype.getLabelForValue } });
      class $o extends Gi {
        constructor(t) {
          super(t),
            (this.start = void 0),
            (this.end = void 0),
            (this._startValue = void 0),
            (this._endValue = void 0),
            (this._valueRange = 0);
        }
        parse(t, e) {
          return l(t) ||
            (('number' == typeof t || t instanceof Number) && !isFinite(+t))
            ? null
            : +t;
        }
        handleTickRangeOptions() {
          const { beginAtZero: t } = this.options,
            { minDefined: e, maxDefined: n } = this.getUserBounds();
          let { min: i, max: r } = this;
          const o = t => (i = e ? i : t),
            s = t => (r = n ? r : t);
          if (t) {
            const t = B(i),
              e = B(r);
            t < 0 && e < 0 ? s(0) : t > 0 && e > 0 && o(0);
          }
          if (i === r) {
            let e = 1;
            (r >= Number.MAX_SAFE_INTEGER || i <= Number.MIN_SAFE_INTEGER) &&
              (e = Math.abs(0.05 * r)),
              s(r + e),
              t || o(i - e);
          }
          (this.min = i), (this.max = r);
        }
        getTickLimit() {
          const t = this.options.ticks;
          let e,
            { maxTicksLimit: n, stepSize: i } = t;
          return (
            i
              ? ((e = Math.ceil(this.max / i) - Math.floor(this.min / i) + 1),
                e > 1e3 &&
                  (console.warn(
                    `scales.${this.id}.ticks.stepSize: ${i} would result generating up to ${e} ticks. Limiting to 1000.`,
                  ),
                  (e = 1e3)))
              : ((e = this.computeTickLimit()), (n = n || 11)),
            n && (e = Math.min(n, e)),
            e
          );
        }
        computeTickLimit() {
          return Number.POSITIVE_INFINITY;
        }
        buildTicks() {
          const t = this.options,
            e = t.ticks;
          let n = this.getTickLimit();
          n = Math.max(2, n);
          const i = Io(
            {
              maxTicks: n,
              bounds: t.bounds,
              min: t.min,
              max: t.max,
              precision: e.precision,
              step: e.stepSize,
              count: e.count,
              maxDigits: this._maxDigits(),
              horizontal: this.isHorizontal(),
              minRotation: e.minRotation || 0,
              includeBounds: !1 !== e.includeBounds,
            },
            this._range || this,
          );
          return (
            'ticks' === t.bounds && W(i, this, 'value'),
            t.reverse
              ? (i.reverse(), (this.start = this.max), (this.end = this.min))
              : ((this.start = this.min), (this.end = this.max)),
            i
          );
        }
        configure() {
          const t = this.ticks;
          let e = this.min,
            n = this.max;
          if ((super.configure(), this.options.offset && t.length)) {
            const i = (n - e) / Math.max(t.length - 1, 1) / 2;
            (e -= i), (n += i);
          }
          (this._startValue = e),
            (this._endValue = n),
            (this._valueRange = n - e);
        }
        getLabelForValue(t) {
          return sn(t, this.chart.options.locale, this.options.ticks.format);
        }
      }
      class No extends $o {
        determineDataLimits() {
          const { min: t, max: e } = this.getMinMax(!0);
          (this.min = f(t) ? t : 0),
            (this.max = f(e) ? e : 1),
            this.handleTickRangeOptions();
        }
        computeTickLimit() {
          const t = this.isHorizontal(),
            e = t ? this.width : this.height,
            n = U(this.options.ticks.minRotation),
            i = (t ? Math.sin(n) : Math.cos(n)) || 0.001,
            r = this._resolveTickFontOptions(0);
          return Math.ceil(e / Math.min(40, r.lineHeight / i));
        }
        getPixelForValue(t) {
          return null === t
            ? NaN
            : this.getPixelForDecimal(
                (t - this._startValue) / this._valueRange,
              );
        }
        getValueForPixel(t) {
          return (
            this._startValue + this.getDecimalForPixel(t) * this._valueRange
          );
        }
      }
      function Fo(t) {
        return 1 === t / Math.pow(10, Math.floor(F(t)));
      }
      (No.id = 'linear'),
        (No.defaults = { ticks: { callback: Ni.formatters.numeric } });
      class Bo extends Gi {
        constructor(t) {
          super(t),
            (this.start = void 0),
            (this.end = void 0),
            (this._startValue = void 0),
            (this._valueRange = 0);
        }
        parse(t, e) {
          const n = $o.prototype.parse.apply(this, [t, e]);
          if (0 !== n) return f(n) && n > 0 ? n : null;
          this._zero = !0;
        }
        determineDataLimits() {
          const { min: t, max: e } = this.getMinMax(!0);
          (this.min = f(t) ? Math.max(0, t) : null),
            (this.max = f(e) ? Math.max(0, e) : null),
            this.options.beginAtZero && (this._zero = !0),
            this.handleTickRangeOptions();
        }
        handleTickRangeOptions() {
          const { minDefined: t, maxDefined: e } = this.getUserBounds();
          let n = this.min,
            i = this.max;
          const r = e => (n = t ? n : e),
            o = t => (i = e ? i : t),
            s = (t, e) => Math.pow(10, Math.floor(F(t)) + e);
          n === i && (n <= 0 ? (r(1), o(10)) : (r(s(n, -1)), o(s(i, 1)))),
            n <= 0 && r(s(i, -1)),
            i <= 0 && o(s(n, 1)),
            this._zero &&
              this.min !== this._suggestedMin &&
              n === s(this.min, 0) &&
              r(s(n, -1)),
            (this.min = n),
            (this.max = i);
        }
        buildTicks() {
          const t = this.options,
            e = (function (t, e) {
              const n = Math.floor(F(e.max)),
                i = Math.ceil(e.max / Math.pow(10, n)),
                r = [];
              let o = d(t.min, Math.pow(10, Math.floor(F(e.min)))),
                s = Math.floor(F(o)),
                a = Math.floor(o / Math.pow(10, s)),
                c = s < 0 ? Math.pow(10, Math.abs(s)) : 1;
              do {
                r.push({ value: o, major: Fo(o) }),
                  ++a,
                  10 === a && ((a = 1), ++s, (c = s >= 0 ? 1 : c)),
                  (o = Math.round(a * Math.pow(10, s) * c) / c);
              } while (s < n || (s === n && a < i));
              const l = d(t.max, o);
              return r.push({ value: l, major: Fo(o) }), r;
            })({ min: this._userMin, max: this._userMax }, this);
          return (
            'ticks' === t.bounds && W(e, this, 'value'),
            t.reverse
              ? (e.reverse(), (this.start = this.max), (this.end = this.min))
              : ((this.start = this.min), (this.end = this.max)),
            e
          );
        }
        getLabelForValue(t) {
          return void 0 === t
            ? '0'
            : sn(t, this.chart.options.locale, this.options.ticks.format);
        }
        configure() {
          const t = this.min;
          super.configure(),
            (this._startValue = F(t)),
            (this._valueRange = F(this.max) - F(t));
        }
        getPixelForValue(t) {
          return (
            (void 0 !== t && 0 !== t) || (t = this.min),
            null === t || isNaN(t)
              ? NaN
              : this.getPixelForDecimal(
                  t === this.min
                    ? 0
                    : (F(t) - this._startValue) / this._valueRange,
                )
          );
        }
        getValueForPixel(t) {
          const e = this.getDecimalForPixel(t);
          return Math.pow(10, this._startValue + e * this._valueRange);
        }
      }
      function zo(t) {
        const e = t.ticks;
        if (e.display && t.display) {
          const t = fe(e.backdropPadding);
          return p(e.font && e.font.size, Yt.font.size) + t.height;
        }
        return 0;
      }
      function Ho(t, e, n, i, r) {
        return t === i || t === r
          ? { start: e - n / 2, end: e + n / 2 }
          : t < i || t > r
          ? { start: e - n, end: e }
          : { start: e, end: e + n };
      }
      function Vo(t) {
        const e = {
            l: t.left + t._padding.left,
            r: t.right - t._padding.right,
            t: t.top + t._padding.top,
            b: t.bottom - t._padding.bottom,
          },
          n = Object.assign({}, e),
          i = [],
          r = [],
          o = t._pointLabels.length,
          s = t.options.pointLabels,
          a = s.centerPointLabels ? C / o : 0;
        for (let f = 0; f < o; f++) {
          const o = s.setContext(t.getPointLabelContext(f));
          r[f] = o.padding;
          const d = t.getPointPosition(f, t.drawingArea + r[f], a),
            p = de(o.font),
            g =
              ((c = t.ctx),
              (l = p),
              (u = h((u = t._pointLabels[f])) ? u : [u]),
              { w: qt(c, l.string, u), h: u.length * l.lineHeight });
          i[f] = g;
          const m = K(t.getIndexAngle(f) + a),
            v = Math.round(Y(m));
          Wo(n, e, m, Ho(v, d.x, g.w, 0, 180), Ho(v, d.y, g.h, 90, 270));
        }
        var c, l, u;
        t.setCenterPoint(e.l - n.l, n.r - e.r, e.t - n.t, n.b - e.b),
          (t._pointLabelItems = (function (t, e, n) {
            const i = [],
              r = t._pointLabels.length,
              o = t.options,
              s = zo(o) / 2,
              a = t.drawingArea,
              c = o.pointLabels.centerPointLabels ? C / r : 0;
            for (let o = 0; o < r; o++) {
              const r = t.getPointPosition(o, a + s + n[o], c),
                l = Math.round(Y(K(r.angle + j))),
                h = e[o],
                u = Go(r.y, h.h, l),
                f = Uo(l),
                d = Yo(r.x, h.w, f);
              i.push({
                x: r.x,
                y: u,
                textAlign: f,
                left: d,
                top: u,
                right: d + h.w,
                bottom: u + h.h,
              });
            }
            return i;
          })(t, i, r));
      }
      function Wo(t, e, n, i, r) {
        const o = Math.abs(Math.sin(n)),
          s = Math.abs(Math.cos(n));
        let a = 0,
          c = 0;
        i.start < e.l
          ? ((a = (e.l - i.start) / o), (t.l = Math.min(t.l, e.l - a)))
          : i.end > e.r &&
            ((a = (i.end - e.r) / o), (t.r = Math.max(t.r, e.r + a))),
          r.start < e.t
            ? ((c = (e.t - r.start) / s), (t.t = Math.min(t.t, e.t - c)))
            : r.end > e.b &&
              ((c = (r.end - e.b) / s), (t.b = Math.max(t.b, e.b + c)));
      }
      function Uo(t) {
        return 0 === t || 180 === t ? 'center' : t < 180 ? 'left' : 'right';
      }
      function Yo(t, e, n) {
        return 'right' === n ? (t -= e) : 'center' === n && (t -= e / 2), t;
      }
      function Go(t, e, n) {
        return (
          90 === n || 270 === n
            ? (t -= e / 2)
            : (n > 270 || n < 90) && (t -= e),
          t
        );
      }
      function qo(t, e, n, i) {
        const { ctx: r } = t;
        if (n) r.arc(t.xCenter, t.yCenter, e, 0, R);
        else {
          let n = t.getPointPosition(0, e);
          r.moveTo(n.x, n.y);
          for (let o = 1; o < i; o++)
            (n = t.getPointPosition(o, e)), r.lineTo(n.x, n.y);
        }
      }
      (Bo.id = 'logarithmic'),
        (Bo.defaults = {
          ticks: {
            callback: Ni.formatters.logarithmic,
            major: { enabled: !0 },
          },
        });
      class Jo extends $o {
        constructor(t) {
          super(t),
            (this.xCenter = void 0),
            (this.yCenter = void 0),
            (this.drawingArea = void 0),
            (this._pointLabels = []),
            (this._pointLabelItems = []);
        }
        setDimensions() {
          const t = (this._padding = fe(zo(this.options) / 2)),
            e = (this.width = this.maxWidth - t.width),
            n = (this.height = this.maxHeight - t.height);
          (this.xCenter = Math.floor(this.left + e / 2 + t.left)),
            (this.yCenter = Math.floor(this.top + n / 2 + t.top)),
            (this.drawingArea = Math.floor(Math.min(e, n) / 2));
        }
        determineDataLimits() {
          const { min: t, max: e } = this.getMinMax(!1);
          (this.min = f(t) && !isNaN(t) ? t : 0),
            (this.max = f(e) && !isNaN(e) ? e : 0),
            this.handleTickRangeOptions();
        }
        computeTickLimit() {
          return Math.ceil(this.drawingArea / zo(this.options));
        }
        generateTickLabels(t) {
          $o.prototype.generateTickLabels.call(this, t),
            (this._pointLabels = this.getLabels()
              .map((t, e) => {
                const n = m(this.options.pointLabels.callback, [t, e], this);
                return n || 0 === n ? n : '';
              })
              .filter((t, e) => this.chart.getDataVisibility(e)));
        }
        fit() {
          const t = this.options;
          t.display && t.pointLabels.display
            ? Vo(this)
            : this.setCenterPoint(0, 0, 0, 0);
        }
        setCenterPoint(t, e, n, i) {
          (this.xCenter += Math.floor((t - e) / 2)),
            (this.yCenter += Math.floor((n - i) / 2)),
            (this.drawingArea -= Math.min(
              this.drawingArea / 2,
              Math.max(t, e, n, i),
            ));
        }
        getIndexAngle(t) {
          return K(
            t * (R / (this._pointLabels.length || 1)) +
              U(this.options.startAngle || 0),
          );
        }
        getDistanceFromCenterForValue(t) {
          if (l(t)) return NaN;
          const e = this.drawingArea / (this.max - this.min);
          return this.options.reverse ? (this.max - t) * e : (t - this.min) * e;
        }
        getValueForDistanceFromCenter(t) {
          if (l(t)) return NaN;
          const e = t / (this.drawingArea / (this.max - this.min));
          return this.options.reverse ? this.max - e : this.min + e;
        }
        getPointLabelContext(t) {
          const e = this._pointLabels || [];
          if (t >= 0 && t < e.length) {
            const n = e[t];
            return (function (t, e, n) {
              return ge(t, { label: n, index: e, type: 'pointLabel' });
            })(this.getContext(), t, n);
          }
        }
        getPointPosition(t, e, n = 0) {
          const i = this.getIndexAngle(t) - j + n;
          return {
            x: Math.cos(i) * e + this.xCenter,
            y: Math.sin(i) * e + this.yCenter,
            angle: i,
          };
        }
        getPointPositionForValue(t, e) {
          return this.getPointPosition(
            t,
            this.getDistanceFromCenterForValue(e),
          );
        }
        getBasePosition(t) {
          return this.getPointPositionForValue(t || 0, this.getBaseValue());
        }
        getPointLabelPosition(t) {
          const {
            left: e,
            top: n,
            right: i,
            bottom: r,
          } = this._pointLabelItems[t];
          return { left: e, top: n, right: i, bottom: r };
        }
        drawBackground() {
          const {
            backgroundColor: t,
            grid: { circular: e },
          } = this.options;
          if (t) {
            const n = this.ctx;
            n.save(),
              n.beginPath(),
              qo(
                this,
                this.getDistanceFromCenterForValue(this._endValue),
                e,
                this._pointLabels.length,
              ),
              n.closePath(),
              (n.fillStyle = t),
              n.fill(),
              n.restore();
          }
        }
        drawGrid() {
          const t = this.ctx,
            e = this.options,
            { angleLines: n, grid: i } = e,
            r = this._pointLabels.length;
          let o, s, a;
          if (
            (e.pointLabels.display &&
              (function (t, e) {
                const {
                  ctx: n,
                  options: { pointLabels: i },
                } = t;
                for (let r = e - 1; r >= 0; r--) {
                  const e = i.setContext(t.getPointLabelContext(r)),
                    o = de(e.font),
                    {
                      x: s,
                      y: a,
                      textAlign: c,
                      left: h,
                      top: u,
                      right: f,
                      bottom: d,
                    } = t._pointLabelItems[r],
                    { backdropColor: p } = e;
                  if (!l(p)) {
                    const t = ue(e.borderRadius),
                      i = fe(e.backdropPadding);
                    n.fillStyle = p;
                    const r = h - i.left,
                      o = u - i.top,
                      s = f - h + i.width,
                      a = d - u + i.height;
                    Object.values(t).some(t => 0 !== t)
                      ? (n.beginPath(),
                        oe(n, { x: r, y: o, w: s, h: a, radius: t }),
                        n.fill())
                      : n.fillRect(r, o, s, a);
                  }
                  ie(n, t._pointLabels[r], s, a + o.lineHeight / 2, o, {
                    color: e.color,
                    textAlign: c,
                    textBaseline: 'middle',
                  });
                }
              })(this, r),
            i.display &&
              this.ticks.forEach((t, e) => {
                if (0 !== e) {
                  s = this.getDistanceFromCenterForValue(t.value);
                  !(function (t, e, n, i) {
                    const r = t.ctx,
                      o = e.circular,
                      { color: s, lineWidth: a } = e;
                    (!o && !i) ||
                      !s ||
                      !a ||
                      n < 0 ||
                      (r.save(),
                      (r.strokeStyle = s),
                      (r.lineWidth = a),
                      r.setLineDash(e.borderDash),
                      (r.lineDashOffset = e.borderDashOffset),
                      r.beginPath(),
                      qo(t, n, o, i),
                      r.closePath(),
                      r.stroke(),
                      r.restore());
                  })(this, i.setContext(this.getContext(e - 1)), s, r);
                }
              }),
            n.display)
          ) {
            for (t.save(), o = r - 1; o >= 0; o--) {
              const i = n.setContext(this.getPointLabelContext(o)),
                { color: r, lineWidth: c } = i;
              c &&
                r &&
                ((t.lineWidth = c),
                (t.strokeStyle = r),
                t.setLineDash(i.borderDash),
                (t.lineDashOffset = i.borderDashOffset),
                (s = this.getDistanceFromCenterForValue(
                  e.ticks.reverse ? this.min : this.max,
                )),
                (a = this.getPointPosition(o, s)),
                t.beginPath(),
                t.moveTo(this.xCenter, this.yCenter),
                t.lineTo(a.x, a.y),
                t.stroke());
            }
            t.restore();
          }
        }
        drawBorder() {}
        drawLabels() {
          const t = this.ctx,
            e = this.options,
            n = e.ticks;
          if (!n.display) return;
          const i = this.getIndexAngle(0);
          let r, o;
          t.save(),
            t.translate(this.xCenter, this.yCenter),
            t.rotate(i),
            (t.textAlign = 'center'),
            (t.textBaseline = 'middle'),
            this.ticks.forEach((i, s) => {
              if (0 === s && !e.reverse) return;
              const a = n.setContext(this.getContext(s)),
                c = de(a.font);
              if (
                ((r = this.getDistanceFromCenterForValue(this.ticks[s].value)),
                a.showLabelBackdrop)
              ) {
                (t.font = c.string),
                  (o = t.measureText(i.label).width),
                  (t.fillStyle = a.backdropColor);
                const e = fe(a.backdropPadding);
                t.fillRect(
                  -o / 2 - e.left,
                  -r - c.size / 2 - e.top,
                  o + e.width,
                  c.size + e.height,
                );
              }
              ie(t, i.label, 0, -r, c, { color: a.color });
            }),
            t.restore();
        }
        drawTitle() {}
      }
      (Jo.id = 'radialLinear'),
        (Jo.defaults = {
          display: !0,
          animate: !0,
          position: 'chartArea',
          angleLines: {
            display: !0,
            lineWidth: 1,
            borderDash: [],
            borderDashOffset: 0,
          },
          grid: { circular: !1 },
          startAngle: 0,
          ticks: { showLabelBackdrop: !0, callback: Ni.formatters.numeric },
          pointLabels: {
            backdropColor: void 0,
            backdropPadding: 2,
            display: !0,
            font: { size: 10 },
            callback: t => t,
            padding: 5,
            centerPointLabels: !1,
          },
        }),
        (Jo.defaultRoutes = {
          'angleLines.color': 'borderColor',
          'pointLabels.color': 'color',
          'ticks.color': 'color',
        }),
        (Jo.descriptors = { angleLines: { _fallback: 'grid' } });
      const Xo = {
          millisecond: { common: !0, size: 1, steps: 1e3 },
          second: { common: !0, size: 1e3, steps: 60 },
          minute: { common: !0, size: 6e4, steps: 60 },
          hour: { common: !0, size: 36e5, steps: 24 },
          day: { common: !0, size: 864e5, steps: 30 },
          week: { common: !1, size: 6048e5, steps: 4 },
          month: { common: !0, size: 2628e6, steps: 12 },
          quarter: { common: !1, size: 7884e6, steps: 4 },
          year: { common: !0, size: 3154e7 },
        },
        Ko = Object.keys(Xo);
      function Qo(t, e) {
        return t - e;
      }
      function Zo(t, e) {
        if (l(e)) return null;
        const n = t._adapter,
          { parser: i, round: r, isoWeekday: o } = t._parseOpts;
        let s = e;
        return (
          'function' == typeof i && (s = i(s)),
          f(s) || (s = 'string' == typeof i ? n.parse(s, i) : n.parse(s)),
          null === s
            ? null
            : (r &&
                (s =
                  'week' !== r || (!H(o) && !0 !== o)
                    ? n.startOf(s, r)
                    : n.startOf(s, 'isoWeek', o)),
              +s)
        );
      }
      function ts(t, e, n, i) {
        const r = Ko.length;
        for (let o = Ko.indexOf(t); o < r - 1; ++o) {
          const t = Xo[Ko[o]],
            r = t.steps ? t.steps : Number.MAX_SAFE_INTEGER;
          if (t.common && Math.ceil((n - e) / (r * t.size)) <= i) return Ko[o];
        }
        return Ko[r - 1];
      }
      function es(t, e, n) {
        if (n) {
          if (n.length) {
            const { lo: i, hi: r } = me(n, e);
            t[n[i] >= e ? n[i] : n[r]] = !0;
          }
        } else t[e] = !0;
      }
      function ns(t, e, n) {
        const i = [],
          r = {},
          o = e.length;
        let s, a;
        for (s = 0; s < o; ++s)
          (a = e[s]), (r[a] = s), i.push({ value: a, major: !1 });
        return 0 !== o && n
          ? (function (t, e, n, i) {
              const r = t._adapter,
                o = +r.startOf(e[0].value, i),
                s = e[e.length - 1].value;
              let a, c;
              for (a = o; a <= s; a = +r.add(a, 1, i))
                (c = n[a]), c >= 0 && (e[c].major = !0);
              return e;
            })(t, i, r, n)
          : i;
      }
      class is extends Gi {
        constructor(t) {
          super(t),
            (this._cache = { data: [], labels: [], all: [] }),
            (this._unit = 'day'),
            (this._majorUnit = void 0),
            (this._offsets = {}),
            (this._normalized = !1),
            (this._parseOpts = void 0);
        }
        init(t, e) {
          const n = t.time || (t.time = {}),
            i = (this._adapter = new Zn._date(t.adapters.date));
          k(n.displayFormats, i.formats()),
            (this._parseOpts = {
              parser: n.parser,
              round: n.round,
              isoWeekday: n.isoWeekday,
            }),
            super.init(t),
            (this._normalized = e.normalized);
        }
        parse(t, e) {
          return void 0 === t ? null : Zo(this, t);
        }
        beforeLayout() {
          super.beforeLayout(),
            (this._cache = { data: [], labels: [], all: [] });
        }
        determineDataLimits() {
          const t = this.options,
            e = this._adapter,
            n = t.time.unit || 'day';
          let {
            min: i,
            max: r,
            minDefined: o,
            maxDefined: s,
          } = this.getUserBounds();
          function a(t) {
            o || isNaN(t.min) || (i = Math.min(i, t.min)),
              s || isNaN(t.max) || (r = Math.max(r, t.max));
          }
          (o && s) ||
            (a(this._getLabelBounds()),
            ('ticks' === t.bounds && 'labels' === t.ticks.source) ||
              a(this.getMinMax(!1))),
            (i = f(i) && !isNaN(i) ? i : +e.startOf(Date.now(), n)),
            (r = f(r) && !isNaN(r) ? r : +e.endOf(Date.now(), n) + 1),
            (this.min = Math.min(i, r - 1)),
            (this.max = Math.max(i + 1, r));
        }
        _getLabelBounds() {
          const t = this.getLabelTimestamps();
          let e = Number.POSITIVE_INFINITY,
            n = Number.NEGATIVE_INFINITY;
          return (
            t.length && ((e = t[0]), (n = t[t.length - 1])), { min: e, max: n }
          );
        }
        buildTicks() {
          const t = this.options,
            e = t.time,
            n = t.ticks,
            i =
              'labels' === n.source
                ? this.getLabelTimestamps()
                : this._generate();
          'ticks' === t.bounds &&
            i.length &&
            ((this.min = this._userMin || i[0]),
            (this.max = this._userMax || i[i.length - 1]));
          const r = this.min,
            o = (function (t, e, n) {
              let i = 0,
                r = t.length;
              for (; i < r && t[i] < e; ) i++;
              for (; r > i && t[r - 1] > n; ) r--;
              return i > 0 || r < t.length ? t.slice(i, r) : t;
            })(i, r, this.max);
          return (
            (this._unit =
              e.unit ||
              (n.autoSkip
                ? ts(e.minUnit, this.min, this.max, this._getLabelCapacity(r))
                : (function (t, e, n, i, r) {
                    for (let o = Ko.length - 1; o >= Ko.indexOf(n); o--) {
                      const n = Ko[o];
                      if (Xo[n].common && t._adapter.diff(r, i, n) >= e - 1)
                        return n;
                    }
                    return Ko[n ? Ko.indexOf(n) : 0];
                  })(this, o.length, e.minUnit, this.min, this.max))),
            (this._majorUnit =
              n.major.enabled && 'year' !== this._unit
                ? (function (t) {
                    for (let e = Ko.indexOf(t) + 1, n = Ko.length; e < n; ++e)
                      if (Xo[Ko[e]].common) return Ko[e];
                  })(this._unit)
                : void 0),
            this.initOffsets(i),
            t.reverse && o.reverse(),
            ns(this, o, this._majorUnit)
          );
        }
        afterAutoSkip() {
          this.options.offsetAfterAutoskip &&
            this.initOffsets(this.ticks.map(t => +t.value));
        }
        initOffsets(t) {
          let e,
            n,
            i = 0,
            r = 0;
          this.options.offset &&
            t.length &&
            ((e = this.getDecimalForValue(t[0])),
            (i =
              1 === t.length ? 1 - e : (this.getDecimalForValue(t[1]) - e) / 2),
            (n = this.getDecimalForValue(t[t.length - 1])),
            (r =
              1 === t.length
                ? n
                : (n - this.getDecimalForValue(t[t.length - 2])) / 2));
          const o = t.length < 3 ? 0.5 : 0.25;
          (i = Z(i, 0, o)),
            (r = Z(r, 0, o)),
            (this._offsets = { start: i, end: r, factor: 1 / (i + 1 + r) });
        }
        _generate() {
          const t = this._adapter,
            e = this.min,
            n = this.max,
            i = this.options,
            r = i.time,
            o = r.unit || ts(r.minUnit, e, n, this._getLabelCapacity(e)),
            s = p(r.stepSize, 1),
            a = 'week' === o && r.isoWeekday,
            c = H(a) || !0 === a,
            l = {};
          let h,
            u,
            f = e;
          if (
            (c && (f = +t.startOf(f, 'isoWeek', a)),
            (f = +t.startOf(f, c ? 'day' : o)),
            t.diff(n, e, o) > 1e5 * s)
          )
            throw new Error(
              e +
                ' and ' +
                n +
                ' are too far apart with stepSize of ' +
                s +
                ' ' +
                o,
            );
          const d = 'data' === i.ticks.source && this.getDataTimestamps();
          for (h = f, u = 0; h < n; h = +t.add(h, s, o), u++) es(l, h, d);
          return (
            (h !== n && 'ticks' !== i.bounds && 1 !== u) || es(l, h, d),
            Object.keys(l)
              .sort((t, e) => t - e)
              .map(t => +t)
          );
        }
        getLabelForValue(t) {
          const e = this._adapter,
            n = this.options.time;
          return n.tooltipFormat
            ? e.format(t, n.tooltipFormat)
            : e.format(t, n.displayFormats.datetime);
        }
        _tickFormatFunction(t, e, n, i) {
          const r = this.options,
            o = r.time.displayFormats,
            s = this._unit,
            a = this._majorUnit,
            c = s && o[s],
            l = a && o[a],
            h = n[e],
            u = a && l && h && h.major,
            f = this._adapter.format(t, i || (u ? l : c)),
            d = r.ticks.callback;
          return d ? m(d, [f, e, n], this) : f;
        }
        generateTickLabels(t) {
          let e, n, i;
          for (e = 0, n = t.length; e < n; ++e)
            (i = t[e]), (i.label = this._tickFormatFunction(i.value, e, t));
        }
        getDecimalForValue(t) {
          return null === t ? NaN : (t - this.min) / (this.max - this.min);
        }
        getPixelForValue(t) {
          const e = this._offsets,
            n = this.getDecimalForValue(t);
          return this.getPixelForDecimal((e.start + n) * e.factor);
        }
        getValueForPixel(t) {
          const e = this._offsets,
            n = this.getDecimalForPixel(t) / e.factor - e.end;
          return this.min + n * (this.max - this.min);
        }
        _getLabelSize(t) {
          const e = this.options.ticks,
            n = this.ctx.measureText(t).width,
            i = U(this.isHorizontal() ? e.maxRotation : e.minRotation),
            r = Math.cos(i),
            o = Math.sin(i),
            s = this._resolveTickFontOptions(0).size;
          return { w: n * r + s * o, h: n * o + s * r };
        }
        _getLabelCapacity(t) {
          const e = this.options.time,
            n = e.displayFormats,
            i = n[e.unit] || n.millisecond,
            r = this._tickFormatFunction(
              t,
              0,
              ns(this, [t], this._majorUnit),
              i,
            ),
            o = this._getLabelSize(r),
            s =
              Math.floor(
                this.isHorizontal() ? this.width / o.w : this.height / o.h,
              ) - 1;
          return s > 0 ? s : 1;
        }
        getDataTimestamps() {
          let t,
            e,
            n = this._cache.data || [];
          if (n.length) return n;
          const i = this.getMatchingVisibleMetas();
          if (this._normalized && i.length)
            return (this._cache.data =
              i[0].controller.getAllParsedValues(this));
          for (t = 0, e = i.length; t < e; ++t)
            n = n.concat(i[t].controller.getAllParsedValues(this));
          return (this._cache.data = this.normalize(n));
        }
        getLabelTimestamps() {
          const t = this._cache.labels || [];
          let e, n;
          if (t.length) return t;
          const i = this.getLabels();
          for (e = 0, n = i.length; e < n; ++e) t.push(Zo(this, i[e]));
          return (this._cache.labels = this._normalized
            ? t
            : this.normalize(t));
        }
        normalize(t) {
          return _e(t.sort(Qo));
        }
      }
      function rs(t, e, n) {
        let i,
          r,
          o,
          s,
          a = 0,
          c = t.length - 1;
        n
          ? (e >= t[a].pos &&
              e <= t[c].pos &&
              ({ lo: a, hi: c } = ve(t, 'pos', e)),
            ({ pos: i, time: o } = t[a]),
            ({ pos: r, time: s } = t[c]))
          : (e >= t[a].time &&
              e <= t[c].time &&
              ({ lo: a, hi: c } = ve(t, 'time', e)),
            ({ time: i, pos: o } = t[a]),
            ({ time: r, pos: s } = t[c]));
        const l = r - i;
        return l ? o + ((s - o) * (e - i)) / l : o;
      }
      (is.id = 'time'),
        (is.defaults = {
          bounds: 'data',
          adapters: {},
          time: {
            parser: !1,
            unit: !1,
            round: !1,
            isoWeekday: !1,
            minUnit: 'millisecond',
            displayFormats: {},
          },
          ticks: { source: 'auto', major: { enabled: !1 } },
        });
      class os extends is {
        constructor(t) {
          super(t),
            (this._table = []),
            (this._minPos = void 0),
            (this._tableRange = void 0);
        }
        initOffsets() {
          const t = this._getTimestampsForTable(),
            e = (this._table = this.buildLookupTable(t));
          (this._minPos = rs(e, this.min)),
            (this._tableRange = rs(e, this.max) - this._minPos),
            super.initOffsets(t);
        }
        buildLookupTable(t) {
          const { min: e, max: n } = this,
            i = [],
            r = [];
          let o, s, a, c, l;
          for (o = 0, s = t.length; o < s; ++o)
            (c = t[o]), c >= e && c <= n && i.push(c);
          if (i.length < 2)
            return [
              { time: e, pos: 0 },
              { time: n, pos: 1 },
            ];
          for (o = 0, s = i.length; o < s; ++o)
            (l = i[o + 1]),
              (a = i[o - 1]),
              (c = i[o]),
              Math.round((l + a) / 2) !== c &&
                r.push({ time: c, pos: o / (s - 1) });
          return r;
        }
        _getTimestampsForTable() {
          let t = this._cache.all || [];
          if (t.length) return t;
          const e = this.getDataTimestamps(),
            n = this.getLabelTimestamps();
          return (
            (t =
              e.length && n.length
                ? this.normalize(e.concat(n))
                : e.length
                ? e
                : n),
            (t = this._cache.all = t),
            t
          );
        }
        getDecimalForValue(t) {
          return (rs(this._table, t) - this._minPos) / this._tableRange;
        }
        getValueForPixel(t) {
          const e = this._offsets,
            n = this.getDecimalForPixel(t) / e.factor - e.end;
          return rs(this._table, n * this._tableRange + this._minPos, !0);
        }
      }
      (os.id = 'timeseries'), (os.defaults = is.defaults);
      const ss = [
        Xn,
        Ur,
        Ro,
        Object.freeze({
          __proto__: null,
          CategoryScale: Lo,
          LinearScale: No,
          LogarithmicScale: Bo,
          RadialLinearScale: Jo,
          TimeScale: is,
          TimeSeriesScale: os,
        }),
      ];
      xr.register(...ss);
      e.a = xr;
    },
    YURd: function (t, e, n) {
      var i = n('+iL7'),
        r = n('nEaP').RegExp;
      t.exports = i(function () {
        var t = r('(?<a>b)', 'g');
        return 'b' !== t.exec('b').groups.a || 'bc' !== 'b'.replace(t, '$<a>c');
      });
    },
    YZdy: function (t, e, n) {
      var i = n('rxbk');
      t.exports = /web0s(?!.*chrome)/i.test(i);
    },
    Ya6V: function (t, e, n) {
      var i = n('nEaP'),
        r = Object.defineProperty;
      t.exports = function (t, e) {
        try {
          r(i, t, { value: e, configurable: !0, writable: !0 });
        } catch (n) {
          i[t] = e;
        }
        return e;
      };
    },
    YxGO: function (t, e, n) {
      var i = n('fSIz'),
        r = n('nEaP');
      t.exports = 'process' == i(r.process);
    },
    ZEAQ: function (t, e, n) {
      'use strict';
      var i = n('JRM0'),
        r = n('nEaP'),
        o = n('WGD3'),
        s = n('ZK/t'),
        a = n('Qtiq'),
        c = n('BnTm'),
        l = n('+iL7'),
        h = r.RangeError,
        u = r.String,
        f = Math.floor,
        d = o(c),
        p = o(''.slice),
        g = o((1).toFixed),
        m = function (t, e, n) {
          return 0 === e
            ? n
            : e % 2 == 1
            ? m(t, e - 1, n * t)
            : m(t * t, e / 2, n);
        },
        v = function (t, e, n) {
          for (var i = -1, r = n; ++i < 6; )
            (r += e * t[i]), (t[i] = r % 1e7), (r = f(r / 1e7));
        },
        y = function (t, e) {
          for (var n = 6, i = 0; --n >= 0; )
            (i += t[n]), (t[n] = f(i / e)), (i = (i % e) * 1e7);
        },
        x = function (t) {
          for (var e = 6, n = ''; --e >= 0; )
            if ('' !== n || 0 === e || 0 !== t[e]) {
              var i = u(t[e]);
              n = '' === n ? i : n + d('0', 7 - i.length) + i;
            }
          return n;
        };
      i(
        {
          target: 'Number',
          proto: !0,
          forced:
            l(function () {
              return (
                '0.000' !== g(8e-5, 3) ||
                '1' !== g(0.9, 0) ||
                '1.25' !== g(1.255, 2) ||
                '1000000000000000128' !== g(0xde0b6b3a7640080, 0)
              );
            }) ||
            !l(function () {
              g({});
            }),
        },
        {
          toFixed: function (t) {
            var e,
              n,
              i,
              r,
              o = a(this),
              c = s(t),
              l = [0, 0, 0, 0, 0, 0],
              f = '',
              g = '0';
            if (c < 0 || c > 20) throw h('Incorrect fraction digits');
            if (o != o) return 'NaN';
            if (o <= -1e21 || o >= 1e21) return u(o);
            if ((o < 0 && ((f = '-'), (o = -o)), o > 1e-21))
              if (
                ((n =
                  (e =
                    (function (t) {
                      for (var e = 0, n = t; n >= 4096; )
                        (e += 12), (n /= 4096);
                      for (; n >= 2; ) (e += 1), (n /= 2);
                      return e;
                    })(o * m(2, 69, 1)) - 69) < 0
                    ? o * m(2, -e, 1)
                    : o / m(2, e, 1)),
                (n *= 4503599627370496),
                (e = 52 - e) > 0)
              ) {
                for (v(l, 0, n), i = c; i >= 7; ) v(l, 1e7, 0), (i -= 7);
                for (v(l, m(10, i, 1), 0), i = e - 1; i >= 23; )
                  y(l, 1 << 23), (i -= 23);
                y(l, 1 << i), v(l, 1, 1), y(l, 2), (g = x(l));
              } else v(l, 0, n), v(l, 1 << -e, 0), (g = x(l) + d('0', c));
            return (g =
              c > 0
                ? f +
                  ((r = g.length) <= c
                    ? '0.' + d('0', c - r) + g
                    : p(g, 0, r - c) + '.' + p(g, r - c))
                : f + g);
          },
        },
      );
    },
    'ZK/t': function (t, e) {
      var n = Math.ceil,
        i = Math.floor;
      t.exports = function (t) {
        var e = +t;
        return e != e || 0 === e ? 0 : (e > 0 ? i : n)(e);
      };
    },
    Zrjs: function (t, e, n) {
      'use strict';
      var i = n('ovh1');
      t.exports = function (t, e) {
        e = e || {};
        var n = {};
        function r(t, e) {
          return i.isPlainObject(t) && i.isPlainObject(e)
            ? i.merge(t, e)
            : i.isPlainObject(e)
            ? i.merge({}, e)
            : i.isArray(e)
            ? e.slice()
            : e;
        }
        function o(n) {
          return i.isUndefined(e[n])
            ? i.isUndefined(t[n])
              ? void 0
              : r(void 0, t[n])
            : r(t[n], e[n]);
        }
        function s(t) {
          if (!i.isUndefined(e[t])) return r(void 0, e[t]);
        }
        function a(n) {
          return i.isUndefined(e[n])
            ? i.isUndefined(t[n])
              ? void 0
              : r(void 0, t[n])
            : r(void 0, e[n]);
        }
        function c(n) {
          return n in e ? r(t[n], e[n]) : n in t ? r(void 0, t[n]) : void 0;
        }
        var l = {
          url: s,
          method: s,
          data: s,
          baseURL: a,
          transformRequest: a,
          transformResponse: a,
          paramsSerializer: a,
          timeout: a,
          timeoutMessage: a,
          withCredentials: a,
          adapter: a,
          responseType: a,
          xsrfCookieName: a,
          xsrfHeaderName: a,
          onUploadProgress: a,
          onDownloadProgress: a,
          decompress: a,
          maxContentLength: a,
          maxBodyLength: a,
          beforeRedirect: a,
          transport: a,
          httpAgent: a,
          httpsAgent: a,
          cancelToken: a,
          socketPath: a,
          responseEncoding: a,
          validateStatus: c,
        };
        return (
          i.forEach(Object.keys(t).concat(Object.keys(e)), function (t) {
            var e = l[t] || o,
              r = e(t);
            (i.isUndefined(r) && e !== c) || (n[t] = r);
          }),
          n
        );
      };
    },
    ZyKY: function (t, e, n) {
      'use strict';
      e.__esModule = !0;
      var i = n('82EY');
      (e.default = function (t) {
        t.registerHelper('blockHelperMissing', function (e, n) {
          var r = n.inverse,
            o = n.fn;
          if (!0 === e) return o(this);
          if (!1 === e || null == e) return r(this);
          if (i.isArray(e))
            return e.length > 0
              ? (n.ids && (n.ids = [n.name]), t.helpers.each(e, n))
              : r(this);
          if (n.data && n.ids) {
            var s = i.createFrame(n.data);
            (s.contextPath = i.appendContextPath(n.data.contextPath, n.name)),
              (n = { data: s });
          }
          return o(e, n);
        });
      }),
        (t.exports = e.default);
    },
    a59c: function (t, e, n) {
      var i = n('nEaP'),
        r = n('OzTt'),
        o = n('gDYM'),
        s = n('PGFG'),
        a = n('fSIz'),
        c = n('hVpg'),
        l = i.TypeError;
      t.exports = function (t, e) {
        var n = t.exec;
        if (s(n)) {
          var i = r(n, t, e);
          return null !== i && o(i), i;
        }
        if ('RegExp' === a(t)) return r(c, t, e);
        throw l('RegExp#exec called on incompatible receiver');
      };
    },
    a72Q: function (t, e, n) {
      var i = n('WGD3'),
        r = n('sK41'),
        o = n('tlZM'),
        s = i(i.bind);
      t.exports = function (t, e) {
        return (
          r(t),
          void 0 === e
            ? t
            : o
            ? s(t, e)
            : function () {
                return t.apply(e, arguments);
              }
        );
      };
    },
    aECo: function (t, e, n) {
      'use strict';
      var i = n('tqms');
      t.exports = function (t, e, n) {
        var r = n.config.validateStatus;
        n.status && r && !r(n.status)
          ? e(
              new i(
                'Request failed with status code ' + n.status,
                [i.ERR_BAD_REQUEST, i.ERR_BAD_RESPONSE][
                  Math.floor(n.status / 100) - 4
                ],
                n.config,
                n.request,
                n,
              ),
            )
          : t(n);
      };
    },
    aXzG: function (t, e, n) {
      'use strict';
      var i = n('JRM0'),
        r = n('OzTt'),
        o = n('sK41'),
        s = n('N1hr'),
        a = n('gmtn'),
        c = n('maYj');
      i(
        { target: 'Promise', stat: !0, forced: n('AWPm') },
        {
          all: function (t) {
            var e = this,
              n = s.f(e),
              i = n.resolve,
              l = n.reject,
              h = a(function () {
                var n = o(e.resolve),
                  s = [],
                  a = 0,
                  h = 1;
                c(t, function (t) {
                  var o = a++,
                    c = !1;
                  h++,
                    r(n, e, t).then(function (t) {
                      c || ((c = !0), (s[o] = t), --h || i(s));
                    }, l);
                }),
                  --h || i(s);
              });
            return h.error && l(h.value), n.promise;
          },
        },
      );
    },
    aZFp: function (t, e, n) {
      'use strict';
      var i = n('R/cv'),
        r = n('OzTt'),
        o = n('WGD3'),
        s = n('+5TE'),
        a = n('GrtF'),
        c = n('gDYM'),
        l = n('Qean'),
        h = n('6ka5'),
        u = n('JtDR'),
        f = n('zrDt'),
        d = n('AvGt'),
        p = n('Krfs'),
        g = n('bSfA'),
        m = n('a59c'),
        v = n('hVpg'),
        y = n('BqYr'),
        x = n('+iL7'),
        b = y.UNSUPPORTED_Y,
        _ = Math.min,
        w = [].push,
        k = o(/./.exec),
        M = o(w),
        P = o(''.slice);
      s(
        'split',
        function (t, e, n) {
          var o;
          return (
            (o =
              'c' == 'abbc'.split(/(b)*/)[1] ||
              4 != 'test'.split(/(?:)/, -1).length ||
              2 != 'ab'.split(/(?:ab)*/).length ||
              4 != '.'.split(/(.?)(.?)/).length ||
              '.'.split(/()()/).length > 1 ||
              ''.split(/.?/).length
                ? function (t, n) {
                    var o = d(l(this)),
                      s = void 0 === n ? 4294967295 : n >>> 0;
                    if (0 === s) return [];
                    if (void 0 === t) return [o];
                    if (!a(t)) return r(e, o, t, s);
                    for (
                      var c,
                        h,
                        u,
                        f = [],
                        p =
                          (t.ignoreCase ? 'i' : '') +
                          (t.multiline ? 'm' : '') +
                          (t.unicode ? 'u' : '') +
                          (t.sticky ? 'y' : ''),
                        m = 0,
                        y = new RegExp(t.source, p + 'g');
                      (c = r(v, y, o)) &&
                      !(
                        (h = y.lastIndex) > m &&
                        (M(f, P(o, m, c.index)),
                        c.length > 1 && c.index < o.length && i(w, f, g(c, 1)),
                        (u = c[0].length),
                        (m = h),
                        f.length >= s)
                      );

                    )
                      y.lastIndex === c.index && y.lastIndex++;
                    return (
                      m === o.length
                        ? (!u && k(y, '')) || M(f, '')
                        : M(f, P(o, m)),
                      f.length > s ? g(f, 0, s) : f
                    );
                  }
                : '0'.split(void 0, 0).length
                ? function (t, n) {
                    return void 0 === t && 0 === n ? [] : r(e, this, t, n);
                  }
                : e),
            [
              function (e, n) {
                var i = l(this),
                  s = null == e ? void 0 : p(e, t);
                return s ? r(s, e, i, n) : r(o, d(i), e, n);
              },
              function (t, i) {
                var r = c(this),
                  s = d(t),
                  a = n(o, r, s, i, o !== e);
                if (a.done) return a.value;
                var l = h(r, RegExp),
                  p = r.unicode,
                  g =
                    (r.ignoreCase ? 'i' : '') +
                    (r.multiline ? 'm' : '') +
                    (r.unicode ? 'u' : '') +
                    (b ? 'g' : 'y'),
                  v = new l(b ? '^(?:' + r.source + ')' : r, g),
                  y = void 0 === i ? 4294967295 : i >>> 0;
                if (0 === y) return [];
                if (0 === s.length) return null === m(v, s) ? [s] : [];
                for (var x = 0, w = 0, k = []; w < s.length; ) {
                  v.lastIndex = b ? 0 : w;
                  var O,
                    E = m(v, b ? P(s, w) : s);
                  if (
                    null === E ||
                    (O = _(f(v.lastIndex + (b ? w : 0)), s.length)) === x
                  )
                    w = u(s, w, p);
                  else {
                    if ((M(k, P(s, x, w)), k.length === y)) return k;
                    for (var S = 1; S <= E.length - 1; S++)
                      if ((M(k, E[S]), k.length === y)) return k;
                    w = x = O;
                  }
                }
                return M(k, P(s, x)), k;
              },
            ]
          );
        },
        !!x(function () {
          var t = /(?:)/,
            e = t.exec;
          t.exec = function () {
            return e.apply(this, arguments);
          };
          var n = 'ab'.split(t);
          return 2 !== n.length || 'a' !== n[0] || 'b' !== n[1];
        }),
        b,
      );
    },
    b3pM: function (t, e, n) {
      var i = n('W9fh'),
        r = n('u5rE');
      t.exports = function (t) {
        var e = i(t, 'string');
        return r(e) ? e : e + '';
      };
    },
    bSfA: function (t, e, n) {
      var i = n('nEaP'),
        r = n('glsI'),
        o = n('fr05'),
        s = n('ztTQ'),
        a = i.Array,
        c = Math.max;
      t.exports = function (t, e, n) {
        for (
          var i = o(t),
            l = r(e, i),
            h = r(void 0 === n ? i : n, i),
            u = a(c(h - l, 0)),
            f = 0;
          l < h;
          l++, f++
        )
          s(u, f, t[l]);
        return (u.length = f), u;
      };
    },
    bzha: function (t, e, n) {},
    cON5: function (t, e, n) {
      'use strict';
      var i = n('ovh1');
      t.exports = i.isStandardBrowserEnv()
        ? (function () {
            var t,
              e = /(msie|trident)/i.test(navigator.userAgent),
              n = document.createElement('a');
            function r(t) {
              var i = t;
              return (
                e && (n.setAttribute('href', i), (i = n.href)),
                n.setAttribute('href', i),
                {
                  href: n.href,
                  protocol: n.protocol ? n.protocol.replace(/:$/, '') : '',
                  host: n.host,
                  search: n.search ? n.search.replace(/^\?/, '') : '',
                  hash: n.hash ? n.hash.replace(/^#/, '') : '',
                  hostname: n.hostname,
                  port: n.port,
                  pathname:
                    '/' === n.pathname.charAt(0)
                      ? n.pathname
                      : '/' + n.pathname,
                }
              );
            }
            return (
              (t = r(window.location.href)),
              function (e) {
                var n = i.isString(e) ? r(e) : e;
                return n.protocol === t.protocol && n.host === t.host;
              }
            );
          })()
        : function () {
            return !0;
          };
    },
    clxC: function (t, e, n) {
      var i = n('G5hJ'),
        r = n('+iL7');
      t.exports =
        !!Object.getOwnPropertySymbols &&
        !r(function () {
          var t = Symbol();
          return (
            !String(t) ||
            !(Object(t) instanceof Symbol) ||
            (!Symbol.sham && i && i < 41)
          );
        });
    },
    co8E: function (t, e, n) {
      'use strict';
      (e.__esModule = !0),
        (e.checkRevision = function (t) {
          var e = (t && t[0]) || 1,
            n = a.COMPILER_REVISION;
          if (
            e >= a.LAST_COMPATIBLE_COMPILER_REVISION &&
            e <= a.COMPILER_REVISION
          )
            return;
          if (e < a.LAST_COMPATIBLE_COMPILER_REVISION) {
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
        }),
        (e.template = function (t, e) {
          if (!e) throw new s.default('No environment passed to template');
          if (!t || !t.main)
            throw new s.default('Unknown template object: ' + typeof t);
          (t.main.decorator = t.main_d), e.VM.checkRevision(t.compiler);
          var n = t.compiler && 7 === t.compiler[0];
          var i = {
            strict: function (t, e, n) {
              if (!t || !(e in t))
                throw new s.default('"' + e + '" not defined in ' + t, {
                  loc: n,
                });
              return i.lookupProperty(t, e);
            },
            lookupProperty: function (t, e) {
              var n = t[e];
              return null == n ||
                Object.prototype.hasOwnProperty.call(t, e) ||
                h.resultIsAllowed(n, i.protoAccessControl, e)
                ? n
                : void 0;
            },
            lookup: function (t, e) {
              for (var n = t.length, r = 0; r < n; r++) {
                if (null != (t[r] && i.lookupProperty(t[r], e))) return t[r][e];
              }
            },
            lambda: function (t, e) {
              return 'function' == typeof t ? t.call(e) : t;
            },
            escapeExpression: r.escapeExpression,
            invokePartial: function (n, i, o) {
              o.hash &&
                ((i = r.extend({}, i, o.hash)), o.ids && (o.ids[0] = !0)),
                (n = e.VM.resolvePartial.call(this, n, i, o));
              var a = r.extend({}, o, {
                  hooks: this.hooks,
                  protoAccessControl: this.protoAccessControl,
                }),
                c = e.VM.invokePartial.call(this, n, i, a);
              if (
                (null == c &&
                  e.compile &&
                  ((o.partials[o.name] = e.compile(n, t.compilerOptions, e)),
                  (c = o.partials[o.name](i, a))),
                null != c)
              ) {
                if (o.indent) {
                  for (
                    var l = c.split('\n'), h = 0, u = l.length;
                    h < u && (l[h] || h + 1 !== u);
                    h++
                  )
                    l[h] = o.indent + l[h];
                  c = l.join('\n');
                }
                return c;
              }
              throw new s.default(
                'The partial ' +
                  o.name +
                  ' could not be compiled when running in runtime-only mode',
              );
            },
            fn: function (e) {
              var n = t[e];
              return (n.decorator = t[e + '_d']), n;
            },
            programs: [],
            program: function (t, e, n, i, r) {
              var o = this.programs[t],
                s = this.fn(t);
              return (
                e || r || i || n
                  ? (o = u(this, t, s, e, n, i, r))
                  : o || (o = this.programs[t] = u(this, t, s)),
                o
              );
            },
            data: function (t, e) {
              for (; t && e--; ) t = t._parent;
              return t;
            },
            mergeIfNeeded: function (t, e) {
              var n = t || e;
              return t && e && t !== e && (n = r.extend({}, e, t)), n;
            },
            nullContext: Object.seal({}),
            noop: e.VM.noop,
            compilerInfo: t.compiler,
          };
          function o(e) {
            var n =
                arguments.length <= 1 || void 0 === arguments[1]
                  ? {}
                  : arguments[1],
              r = n.data;
            o._setup(n), !n.partial && t.useData && (r = d(e, r));
            var s = void 0,
              a = t.useBlockParams ? [] : void 0;
            function c(e) {
              return '' + t.main(i, e, i.helpers, i.partials, r, a, s);
            }
            return (
              t.useDepths &&
                (s = n.depths
                  ? e != n.depths[0]
                    ? [e].concat(n.depths)
                    : n.depths
                  : [e]),
              (c = p(t.main, c, i, n.depths || [], r, a))(e, n)
            );
          }
          return (
            (o.isTop = !0),
            (o._setup = function (o) {
              if (o.partial)
                (i.protoAccessControl = o.protoAccessControl),
                  (i.helpers = o.helpers),
                  (i.partials = o.partials),
                  (i.decorators = o.decorators),
                  (i.hooks = o.hooks);
              else {
                var s = r.extend({}, e.helpers, o.helpers);
                !(function (t, e) {
                  Object.keys(t).forEach(function (n) {
                    var i = t[n];
                    t[n] = (function (t, e) {
                      var n = e.lookupProperty;
                      return l.wrapHelper(t, function (t) {
                        return r.extend({ lookupProperty: n }, t);
                      });
                    })(i, e);
                  });
                })(s, i),
                  (i.helpers = s),
                  t.usePartial &&
                    (i.partials = i.mergeIfNeeded(o.partials, e.partials)),
                  (t.usePartial || t.useDecorators) &&
                    (i.decorators = r.extend({}, e.decorators, o.decorators)),
                  (i.hooks = {}),
                  (i.protoAccessControl = h.createProtoAccessControl(o));
                var a = o.allowCallsToHelperMissing || n;
                c.moveHelperToHooks(i, 'helperMissing', a),
                  c.moveHelperToHooks(i, 'blockHelperMissing', a);
              }
            }),
            (o._child = function (e, n, r, o) {
              if (t.useBlockParams && !r)
                throw new s.default('must pass block params');
              if (t.useDepths && !o)
                throw new s.default('must pass parent depths');
              return u(i, e, t[e], n, 0, r, o);
            }),
            o
          );
        }),
        (e.wrapProgram = u),
        (e.resolvePartial = function (t, e, n) {
          t
            ? t.call || n.name || ((n.name = t), (t = n.partials[t]))
            : (t =
                '@partial-block' === n.name
                  ? n.data['partial-block']
                  : n.partials[n.name]);
          return t;
        }),
        (e.invokePartial = function (t, e, n) {
          var i = n.data && n.data['partial-block'];
          (n.partial = !0),
            n.ids && (n.data.contextPath = n.ids[0] || n.data.contextPath);
          var o = void 0;
          n.fn &&
            n.fn !== f &&
            (function () {
              n.data = a.createFrame(n.data);
              var t = n.fn;
              (o = n.data['partial-block'] =
                function (e) {
                  var n =
                    arguments.length <= 1 || void 0 === arguments[1]
                      ? {}
                      : arguments[1];
                  return (
                    (n.data = a.createFrame(n.data)),
                    (n.data['partial-block'] = i),
                    t(e, n)
                  );
                }),
                t.partials &&
                  (n.partials = r.extend({}, n.partials, t.partials));
            })();
          void 0 === t && o && (t = o);
          if (void 0 === t)
            throw new s.default(
              'The partial ' + n.name + ' could not be found',
            );
          if (t instanceof Function) return t(e, n);
        }),
        (e.noop = f);
      var i,
        r = (function (t) {
          if (t && t.__esModule) return t;
          var e = {};
          if (null != t)
            for (var n in t)
              Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
          return (e.default = t), e;
        })(n('82EY')),
        o = n('AIJh'),
        s = (i = o) && i.__esModule ? i : { default: i },
        a = n('dJlP'),
        c = n('hSGR'),
        l = n('lLDp'),
        h = n('4wZq');
      function u(t, e, n, i, r, o, s) {
        function a(e) {
          var r =
              arguments.length <= 1 || void 0 === arguments[1]
                ? {}
                : arguments[1],
            a = s;
          return (
            !s ||
              e == s[0] ||
              (e === t.nullContext && null === s[0]) ||
              (a = [e].concat(s)),
            n(
              t,
              e,
              t.helpers,
              t.partials,
              r.data || i,
              o && [r.blockParams].concat(o),
              a,
            )
          );
        }
        return (
          ((a = p(n, a, t, s, i, o)).program = e),
          (a.depth = s ? s.length : 0),
          (a.blockParams = r || 0),
          a
        );
      }
      function f() {
        return '';
      }
      function d(t, e) {
        return (
          (e && 'root' in e) || ((e = e ? a.createFrame(e) : {}).root = t), e
        );
      }
      function p(t, e, n, i, o, s) {
        if (t.decorator) {
          var a = {};
          (e = t.decorator(e, a, n, i && i[0], o, s, i)), r.extend(e, a);
        }
        return e;
      }
    },
    czhI: function (t, e, n) {
      t.exports = n('TDIH');
    },
    d5e9: function (t, e, n) {
      var i = n('GHf2'),
        r = n('w/Ji'),
        o = n('nRc6'),
        s = i('unscopables'),
        a = Array.prototype;
      null == a[s] && o.f(a, s, { configurable: !0, value: r(null) }),
        (t.exports = function (t) {
          a[s][t] = !0;
        });
    },
    dJlP: function (t, e, n) {
      'use strict';
      function i(t) {
        return t && t.__esModule ? t : { default: t };
      }
      (e.__esModule = !0), (e.HandlebarsEnvironment = h);
      var r = n('82EY'),
        o = i(n('AIJh')),
        s = n('hSGR'),
        a = n('/YDJ'),
        c = i(n('jYw0')),
        l = n('4wZq');
      e.VERSION = '4.7.7';
      e.COMPILER_REVISION = 8;
      e.LAST_COMPATIBLE_COMPILER_REVISION = 7;
      e.REVISION_CHANGES = {
        1: '<= 1.0.rc.2',
        2: '== 1.0.0-rc.3',
        3: '== 1.0.0-rc.4',
        4: '== 1.x.x',
        5: '== 2.0.0-alpha.x',
        6: '>= 2.0.0-beta.1',
        7: '>= 4.0.0 <4.3.0',
        8: '>= 4.3.0',
      };
      function h(t, e, n) {
        (this.helpers = t || {}),
          (this.partials = e || {}),
          (this.decorators = n || {}),
          s.registerDefaultHelpers(this),
          a.registerDefaultDecorators(this);
      }
      h.prototype = {
        constructor: h,
        logger: c.default,
        log: c.default.log,
        registerHelper: function (t, e) {
          if ('[object Object]' === r.toString.call(t)) {
            if (e)
              throw new o.default('Arg not supported with multiple helpers');
            r.extend(this.helpers, t);
          } else this.helpers[t] = e;
        },
        unregisterHelper: function (t) {
          delete this.helpers[t];
        },
        registerPartial: function (t, e) {
          if ('[object Object]' === r.toString.call(t))
            r.extend(this.partials, t);
          else {
            if (void 0 === e)
              throw new o.default(
                'Attempting to register a partial called "' +
                  t +
                  '" as undefined',
              );
            this.partials[t] = e;
          }
        },
        unregisterPartial: function (t) {
          delete this.partials[t];
        },
        registerDecorator: function (t, e) {
          if ('[object Object]' === r.toString.call(t)) {
            if (e)
              throw new o.default('Arg not supported with multiple decorators');
            r.extend(this.decorators, t);
          } else this.decorators[t] = e;
        },
        unregisterDecorator: function (t) {
          delete this.decorators[t];
        },
        resetLoggedPropertyAccesses: function () {
          l.resetLoggedProperties();
        },
      };
      var u = c.default.log;
      (e.log = u), (e.createFrame = r.createFrame), (e.logger = c.default);
    },
    dOmT: function (t, e, n) {
      var i = n('+iL7'),
        r = n('nEaP').RegExp;
      t.exports = i(function () {
        var t = r('.', 's');
        return !(t.dotAll && t.exec('\n') && 's' === t.flags);
      });
    },
    de3D: function (t, e, n) {
      var i = n('nEaP');
      t.exports = i.Promise;
    },
    diAC: function (t, e, n) {
      'use strict';
      e.__esModule = !0;
      var i,
        r = n('AIJh'),
        o = (i = r) && i.__esModule ? i : { default: i };
      (e.default = function (t) {
        t.registerHelper('helperMissing', function () {
          if (1 !== arguments.length)
            throw new o.default(
              'Missing helper: "' + arguments[arguments.length - 1].name + '"',
            );
        });
      }),
        (t.exports = e.default);
    },
    e5jZ: function (t, e, n) {
      'use strict';
      t.exports = function (t) {
        return !(!t || !t.__CANCEL__);
      };
    },
    'ek/P': function (t, e) {
      t.exports = [
        'constructor',
        'hasOwnProperty',
        'isPrototypeOf',
        'propertyIsEnumerable',
        'toLocaleString',
        'toString',
        'valueOf',
      ];
    },
    'fK/z': function (t, e, n) {
      'use strict';
      var i = n('+iL7');
      t.exports = function (t, e) {
        var n = [][t];
        return (
          !!n &&
          i(function () {
            n.call(
              null,
              e ||
                function () {
                  return 1;
                },
              1,
            );
          })
        );
      };
    },
    fSIz: function (t, e, n) {
      var i = n('WGD3'),
        r = i({}.toString),
        o = i(''.slice);
      t.exports = function (t) {
        return o(r(t), 8, -1);
      };
    },
    fT8P: function (t, e, n) {
      var i = n('PGFG');
      t.exports = function (t) {
        return 'object' == typeof t ? null !== t : i(t);
      };
    },
    fr05: function (t, e, n) {
      var i = n('zrDt');
      t.exports = function (t) {
        return i(t.length);
      };
    },
    fshm: function (t, e, n) {
      var i = n('nEaP'),
        r = n('k2M3'),
        o = n('PGFG'),
        s = n('fSIz'),
        a = n('GHf2')('toStringTag'),
        c = i.Object,
        l =
          'Arguments' ==
          s(
            (function () {
              return arguments;
            })(),
          );
      t.exports = r
        ? s
        : function (t) {
            var e, n, i;
            return void 0 === t
              ? 'Undefined'
              : null === t
              ? 'Null'
              : 'string' ==
                typeof (n = (function (t, e) {
                  try {
                    return t[e];
                  } catch (t) {}
                })((e = c(t)), a))
              ? n
              : l
              ? s(e)
              : 'Object' == (i = s(e)) && o(e.callee)
              ? 'Arguments'
              : i;
          };
    },
    'fwl+': function (t, e, n) {
      'use strict';
      var i = n('ovh1');
      function r(t) {
        return encodeURIComponent(t)
          .replace(/%3A/gi, ':')
          .replace(/%24/g, '$')
          .replace(/%2C/gi, ',')
          .replace(/%20/g, '+')
          .replace(/%5B/gi, '[')
          .replace(/%5D/gi, ']');
      }
      t.exports = function (t, e, n) {
        if (!e) return t;
        var o;
        if (n) o = n(e);
        else if (i.isURLSearchParams(e)) o = e.toString();
        else {
          var s = [];
          i.forEach(e, function (t, e) {
            null != t &&
              (i.isArray(t) ? (e += '[]') : (t = [t]),
              i.forEach(t, function (t) {
                i.isDate(t)
                  ? (t = t.toISOString())
                  : i.isObject(t) && (t = JSON.stringify(t)),
                  s.push(r(e) + '=' + r(t));
              }));
          }),
            (o = s.join('&'));
        }
        if (o) {
          var a = t.indexOf('#');
          -1 !== a && (t = t.slice(0, a)),
            (t += (-1 === t.indexOf('?') ? '?' : '&') + o);
        }
        return t;
      };
    },
    gDYM: function (t, e, n) {
      var i = n('nEaP'),
        r = n('fT8P'),
        o = i.String,
        s = i.TypeError;
      t.exports = function (t) {
        if (r(t)) return t;
        throw s(o(t) + ' is not an object');
      };
    },
    gIo2: function (t, e, n) {
      var i = n('PCqT'),
        r = n('MoOl');
      (t.exports = function (t, e) {
        return r[t] || (r[t] = void 0 !== e ? e : {});
      })('versions', []).push({
        version: '3.22.4',
        mode: i ? 'pure' : 'global',
        copyright: '© 2014-2022 Denis Pushkarev (zloirock.ru)',
        license: 'https://github.com/zloirock/core-js/blob/v3.22.4/LICENSE',
        source: 'https://github.com/zloirock/core-js',
      });
    },
    glsI: function (t, e, n) {
      var i = n('ZK/t'),
        r = Math.max,
        o = Math.min;
      t.exports = function (t, e) {
        var n = i(t);
        return n < 0 ? r(n + e, 0) : o(n, e);
      };
    },
    gmtn: function (t, e) {
      t.exports = function (t) {
        try {
          return { error: !1, value: t() };
        } catch (t) {
          return { error: !0, value: t };
        }
      };
    },
    guUT: function (t, e, n) {
      'use strict';
      var i = n('ovh1'),
        r = n('4OlW'),
        o = n('e5jZ'),
        s = n('nGo5'),
        a = n('pvzg');
      function c(t) {
        if (
          (t.cancelToken && t.cancelToken.throwIfRequested(),
          t.signal && t.signal.aborted)
        )
          throw new a();
      }
      t.exports = function (t) {
        return (
          c(t),
          (t.headers = t.headers || {}),
          (t.data = r.call(t, t.data, t.headers, t.transformRequest)),
          (t.headers = i.merge(
            t.headers.common || {},
            t.headers[t.method] || {},
            t.headers,
          )),
          i.forEach(
            ['delete', 'get', 'head', 'post', 'put', 'patch', 'common'],
            function (e) {
              delete t.headers[e];
            },
          ),
          (t.adapter || s.adapter)(t).then(
            function (e) {
              return (
                c(t),
                (e.data = r.call(t, e.data, e.headers, t.transformResponse)),
                e
              );
            },
            function (e) {
              return (
                o(e) ||
                  (c(t),
                  e &&
                    e.response &&
                    (e.response.data = r.call(
                      t,
                      e.response.data,
                      e.response.headers,
                      t.transformResponse,
                    ))),
                Promise.reject(e)
              );
            },
          )
        );
      };
    },
    'h/Mk': function (t, e, n) {
      var i = n('fSIz');
      t.exports =
        Array.isArray ||
        function (t) {
          return 'Array' == i(t);
        };
    },
    h1Um: function (t, e, n) {
      'use strict';
      var i = n('Rzld'),
        r = n('hUM7');
      t.exports = function (t, e) {
        return t && !i(e) ? r(t, e) : e;
      };
    },
    hGk8: function (t, e, n) {
      'use strict';
      e.__esModule = !0;
      var i = n('82EY');
      (e.default = function (t) {
        t.registerDecorator('inline', function (t, e, n, r) {
          var o = t;
          return (
            e.partials ||
              ((e.partials = {}),
              (o = function (r, o) {
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
    hQLn: function (t, e, n) {
      var i = n('WGD3'),
        r = n('gDYM'),
        o = n('7P5K');
      t.exports =
        Object.setPrototypeOf ||
        ('__proto__' in {}
          ? (function () {
              var t,
                e = !1,
                n = {};
              try {
                (t = i(
                  Object.getOwnPropertyDescriptor(Object.prototype, '__proto__')
                    .set,
                ))(n, []),
                  (e = n instanceof Array);
              } catch (t) {}
              return function (n, i) {
                return r(n), o(i), e ? t(n, i) : (n.__proto__ = i), n;
              };
            })()
          : void 0);
    },
    hSGR: function (t, e, n) {
      'use strict';
      function i(t) {
        return t && t.__esModule ? t : { default: t };
      }
      (e.__esModule = !0),
        (e.registerDefaultHelpers = function (t) {
          r.default(t),
            o.default(t),
            s.default(t),
            a.default(t),
            c.default(t),
            l.default(t),
            h.default(t);
        }),
        (e.moveHelperToHooks = function (t, e, n) {
          t.helpers[e] &&
            ((t.hooks[e] = t.helpers[e]), n || delete t.helpers[e]);
        });
      var r = i(n('ZyKY')),
        o = i(n('20JI')),
        s = i(n('diAC')),
        a = i(n('7UkH')),
        c = i(n('IVfQ')),
        l = i(n('iRzr')),
        h = i(n('k+yp'));
    },
    hUM7: function (t, e, n) {
      'use strict';
      t.exports = function (t, e) {
        return e ? t.replace(/\/+$/, '') + '/' + e.replace(/^\/+/, '') : t;
      };
    },
    hVpg: function (t, e, n) {
      'use strict';
      var i,
        r,
        o = n('OzTt'),
        s = n('WGD3'),
        a = n('AvGt'),
        c = n('O2Ja'),
        l = n('BqYr'),
        h = n('gIo2'),
        u = n('w/Ji'),
        f = n('SkE4').get,
        d = n('dOmT'),
        p = n('YURd'),
        g = h('native-string-replace', String.prototype.replace),
        m = RegExp.prototype.exec,
        v = m,
        y = s(''.charAt),
        x = s(''.indexOf),
        b = s(''.replace),
        _ = s(''.slice),
        w =
          ((r = /b*/g),
          o(m, (i = /a/), 'a'),
          o(m, r, 'a'),
          0 !== i.lastIndex || 0 !== r.lastIndex),
        k = l.BROKEN_CARET,
        M = void 0 !== /()??/.exec('')[1];
      (w || M || k || d || p) &&
        (v = function (t) {
          var e,
            n,
            i,
            r,
            s,
            l,
            h,
            d = this,
            p = f(d),
            P = a(t),
            O = p.raw;
          if (O)
            return (
              (O.lastIndex = d.lastIndex),
              (e = o(v, O, P)),
              (d.lastIndex = O.lastIndex),
              e
            );
          var E = p.groups,
            S = k && d.sticky,
            T = o(c, d),
            A = d.source,
            C = 0,
            R = P;
          if (
            (S &&
              ((T = b(T, 'y', '')),
              -1 === x(T, 'g') && (T += 'g'),
              (R = _(P, d.lastIndex)),
              d.lastIndex > 0 &&
                (!d.multiline ||
                  (d.multiline && '\n' !== y(P, d.lastIndex - 1))) &&
                ((A = '(?: ' + A + ')'), (R = ' ' + R), C++),
              (n = new RegExp('^(?:' + A + ')', T))),
            M && (n = new RegExp('^' + A + '$(?!\\s)', T)),
            w && (i = d.lastIndex),
            (r = o(m, S ? n : d, R)),
            S
              ? r
                ? ((r.input = _(r.input, C)),
                  (r[0] = _(r[0], C)),
                  (r.index = d.lastIndex),
                  (d.lastIndex += r[0].length))
                : (d.lastIndex = 0)
              : w && r && (d.lastIndex = d.global ? r.index + r[0].length : i),
            M &&
              r &&
              r.length > 1 &&
              o(g, r[0], n, function () {
                for (s = 1; s < arguments.length - 2; s++)
                  void 0 === arguments[s] && (r[s] = void 0);
              }),
            r && E)
          )
            for (r.groups = l = u(null), s = 0; s < E.length; s++)
              l[(h = E[s])[0]] = r[h[1]];
          return r;
        }),
        (t.exports = v);
    },
    hi3g: function (t, e, n) {
      'use strict';
      var i = n('JRM0'),
        r = n('nEaP'),
        o = n('+iL7'),
        s = n('h/Mk'),
        a = n('fT8P'),
        c = n('9pAD'),
        l = n('fr05'),
        h = n('ztTQ'),
        u = n('iSxr'),
        f = n('WCig'),
        d = n('GHf2'),
        p = n('G5hJ'),
        g = d('isConcatSpreadable'),
        m = r.TypeError,
        v =
          p >= 51 ||
          !o(function () {
            var t = [];
            return (t[g] = !1), t.concat()[0] !== t;
          }),
        y = f('concat'),
        x = function (t) {
          if (!a(t)) return !1;
          var e = t[g];
          return void 0 !== e ? !!e : s(t);
        };
      i(
        { target: 'Array', proto: !0, arity: 1, forced: !v || !y },
        {
          concat: function (t) {
            var e,
              n,
              i,
              r,
              o,
              s = c(this),
              a = u(s, 0),
              f = 0;
            for (e = -1, i = arguments.length; e < i; e++)
              if (x((o = -1 === e ? s : arguments[e]))) {
                if (f + (r = l(o)) > 9007199254740991)
                  throw m('Maximum allowed index exceeded');
                for (n = 0; n < r; n++, f++) n in o && h(a, f, o[n]);
              } else {
                if (f >= 9007199254740991)
                  throw m('Maximum allowed index exceeded');
                h(a, f++, o);
              }
            return (a.length = f), a;
          },
        },
      );
    },
    i0F7: function (t, e, n) {
      'use strict';
      var i = n('ovh1');
      function r() {
        this.handlers = [];
      }
      (r.prototype.use = function (t, e, n) {
        return (
          this.handlers.push({
            fulfilled: t,
            rejected: e,
            synchronous: !!n && n.synchronous,
            runWhen: n ? n.runWhen : null,
          }),
          this.handlers.length - 1
        );
      }),
        (r.prototype.eject = function (t) {
          this.handlers[t] && (this.handlers[t] = null);
        }),
        (r.prototype.forEach = function (t) {
          i.forEach(this.handlers, function (e) {
            null !== e && t(e);
          });
        }),
        (t.exports = r);
    },
    i6bU: function (t, e, n) {
      var i = n('WGD3');
      t.exports = i([].slice);
    },
    iBt0: function (t, e, n) {
      var i = n('nEaP'),
        r = n('+n59'),
        o = i.TypeError;
      t.exports = function (t, e) {
        if (r(e, t)) return t;
        throw o('Incorrect invocation');
      };
    },
    iGMQ: function (t, e, n) {
      var i = n('WGD3'),
        r = n('+iL7'),
        o = n('PGFG'),
        s = n('fshm'),
        a = n('UVdV'),
        c = n('/dUa'),
        l = function () {},
        h = [],
        u = a('Reflect', 'construct'),
        f = /^\s*(?:class|function)\b/,
        d = i(f.exec),
        p = !f.exec(l),
        g = function (t) {
          if (!o(t)) return !1;
          try {
            return u(l, h, t), !0;
          } catch (t) {
            return !1;
          }
        },
        m = function (t) {
          if (!o(t)) return !1;
          switch (s(t)) {
            case 'AsyncFunction':
            case 'GeneratorFunction':
            case 'AsyncGeneratorFunction':
              return !1;
          }
          try {
            return p || !!d(f, c(t));
          } catch (t) {
            return !0;
          }
        };
      (m.sham = !0),
        (t.exports =
          !u ||
          r(function () {
            var t;
            return (
              g(g.call) ||
              !g(Object) ||
              !g(function () {
                t = !0;
              }) ||
              t
            );
          })
            ? m
            : g);
    },
    iRzr: function (t, e, n) {
      'use strict';
      (e.__esModule = !0),
        (e.default = function (t) {
          t.registerHelper('lookup', function (t, e, n) {
            return t ? n.lookupProperty(t, e) : t;
          });
        }),
        (t.exports = e.default);
    },
    iSxr: function (t, e, n) {
      var i = n('4M91');
      t.exports = function (t, e) {
        return new (i(t))(0 === e ? 0 : e);
      };
    },
    jKt2: function (t, e) {
      var n = function () {
        (this.head = null), (this.tail = null);
      };
      (n.prototype = {
        add: function (t) {
          var e = { item: t, next: null };
          this.head ? (this.tail.next = e) : (this.head = e), (this.tail = e);
        },
        get: function () {
          var t = this.head;
          if (t)
            return (
              (this.head = t.next),
              this.tail === t && (this.tail = null),
              t.item
            );
        },
      }),
        (t.exports = n);
    },
    jP2f: function (t, e, n) {
      var i = n('WGD3'),
        r = n('9pAD'),
        o = i({}.hasOwnProperty);
      t.exports =
        Object.hasOwn ||
        function (t, e) {
          return o(r(t), e);
        };
    },
    jYw0: function (t, e, n) {
      'use strict';
      e.__esModule = !0;
      var i = n('82EY'),
        r = {
          methodMap: ['debug', 'info', 'warn', 'error'],
          level: 'info',
          lookupLevel: function (t) {
            if ('string' == typeof t) {
              var e = i.indexOf(r.methodMap, t.toLowerCase());
              t = e >= 0 ? e : parseInt(t, 10);
            }
            return t;
          },
          log: function (t) {
            if (
              ((t = r.lookupLevel(t)),
              'undefined' != typeof console && r.lookupLevel(r.level) <= t)
            ) {
              var e = r.methodMap[t];
              console[e] || (e = 'log');
              for (
                var n = arguments.length, i = Array(n > 1 ? n - 1 : 0), o = 1;
                o < n;
                o++
              )
                i[o - 1] = arguments[o];
              console[e].apply(console, i);
            }
          },
        };
      (e.default = r), (t.exports = e.default);
    },
    'k+yp': function (t, e, n) {
      'use strict';
      e.__esModule = !0;
      var i,
        r = n('82EY'),
        o = n('AIJh'),
        s = (i = o) && i.__esModule ? i : { default: i };
      (e.default = function (t) {
        t.registerHelper('with', function (t, e) {
          if (2 != arguments.length)
            throw new s.default('#with requires exactly one argument');
          r.isFunction(t) && (t = t.call(this));
          var n = e.fn;
          if (r.isEmpty(t)) return e.inverse(this);
          var i = e.data;
          return (
            e.data &&
              e.ids &&
              ((i = r.createFrame(e.data)).contextPath = r.appendContextPath(
                e.data.contextPath,
                e.ids[0],
              )),
            n(t, {
              data: i,
              blockParams: r.blockParams([t], [i && i.contextPath]),
            })
          );
        });
      }),
        (t.exports = e.default);
    },
    k2M3: function (t, e, n) {
      var i = {};
      (i[n('GHf2')('toStringTag')] = 'z'),
        (t.exports = '[object z]' === String(i));
    },
    kMPr: function (t, e, n) {
      var i = n('M/tt'),
        r = n('glsI'),
        o = n('fr05'),
        s = function (t) {
          return function (e, n, s) {
            var a,
              c = i(e),
              l = o(c),
              h = r(s, l);
            if (t && n != n) {
              for (; l > h; ) if ((a = c[h++]) != a) return !0;
            } else
              for (; l > h; h++)
                if ((t || h in c) && c[h] === n) return t || h || 0;
            return !t && -1;
          };
        };
      t.exports = { includes: s(!0), indexOf: s(!1) };
    },
    kah5: function (t, e) {
      var n = {}.toString;
      t.exports =
        Array.isArray ||
        function (t) {
          return '[object Array]' == n.call(t);
        };
    },
    keIi: function (t, e, n) {
      'use strict';
      var i = n('4jJt').version,
        r = n('tqms'),
        o = {};
      ['object', 'boolean', 'number', 'function', 'string', 'symbol'].forEach(
        function (t, e) {
          o[t] = function (n) {
            return typeof n === t || 'a' + (e < 1 ? 'n ' : ' ') + t;
          };
        },
      );
      var s = {};
      (o.transitional = function (t, e, n) {
        function o(t, e) {
          return (
            '[Axios v' +
            i +
            "] Transitional option '" +
            t +
            "'" +
            e +
            (n ? '. ' + n : '')
          );
        }
        return function (n, i, a) {
          if (!1 === t)
            throw new r(
              o(i, ' has been removed' + (e ? ' in ' + e : '')),
              r.ERR_DEPRECATED,
            );
          return (
            e &&
              !s[i] &&
              ((s[i] = !0),
              console.warn(
                o(
                  i,
                  ' has been deprecated since v' +
                    e +
                    ' and will be removed in the near future',
                ),
              )),
            !t || t(n, i, a)
          );
        };
      }),
        (t.exports = {
          assertOptions: function (t, e, n) {
            if ('object' != typeof t)
              throw new r('options must be an object', r.ERR_BAD_OPTION_VALUE);
            for (var i = Object.keys(t), o = i.length; o-- > 0; ) {
              var s = i[o],
                a = e[s];
              if (a) {
                var c = t[s],
                  l = void 0 === c || a(c, s, t);
                if (!0 !== l)
                  throw new r(
                    'option ' + s + ' must be ' + l,
                    r.ERR_BAD_OPTION_VALUE,
                  );
              } else if (!0 !== n)
                throw new r('Unknown option ' + s, r.ERR_BAD_OPTION);
            }
          },
          validators: o,
        });
    },
    l3gt: function (t, e, n) {
      'use strict';
      function i(t) {
        this.string = t;
      }
      (e.__esModule = !0),
        (i.prototype.toString = i.prototype.toHTML =
          function () {
            return '' + this.string;
          }),
        (e.default = i),
        (t.exports = e.default);
    },
    l682: function (t, e, n) {
      var i = n('nEaP'),
        r = n('OzTt'),
        o = n('sK41'),
        s = n('gDYM'),
        a = n('Xki7'),
        c = n('QYi2'),
        l = i.TypeError;
      t.exports = function (t, e) {
        var n = arguments.length < 2 ? c(t) : e;
        if (o(n)) return s(r(n, t));
        throw l(a(t) + ' is not iterable');
      };
    },
    lEJZ: function (t, e, n) {
      var i = n('nEaP'),
        r = n('iGMQ'),
        o = n('Xki7'),
        s = i.TypeError;
      t.exports = function (t) {
        if (r(t)) return t;
        throw s(o(t) + ' is not a constructor');
      };
    },
    lLDp: function (t, e, n) {
      'use strict';
      (e.__esModule = !0),
        (e.wrapHelper = function (t, e) {
          if ('function' != typeof t) return t;
          return function () {
            var n = arguments[arguments.length - 1];
            return (
              (arguments[arguments.length - 1] = e(n)), t.apply(this, arguments)
            );
          };
        });
    },
    m1e9: function (t, e, n) {
      var i,
        r,
        o,
        s,
        a,
        c,
        l,
        h,
        u = n('nEaP'),
        f = n('a72Q'),
        d = n('Fup7').f,
        p = n('4ssk').set,
        g = n('s06e'),
        m = n('uHfv'),
        v = n('YZdy'),
        y = n('YxGO'),
        x = u.MutationObserver || u.WebKitMutationObserver,
        b = u.document,
        _ = u.process,
        w = u.Promise,
        k = d(u, 'queueMicrotask'),
        M = k && k.value;
      M ||
        ((i = function () {
          var t, e;
          for (y && (t = _.domain) && t.exit(); r; ) {
            (e = r.fn), (r = r.next);
            try {
              e();
            } catch (t) {
              throw (r ? s() : (o = void 0), t);
            }
          }
          (o = void 0), t && t.enter();
        }),
        g || y || v || !x || !b
          ? !m && w && w.resolve
            ? (((l = w.resolve(void 0)).constructor = w),
              (h = f(l.then, l)),
              (s = function () {
                h(i);
              }))
            : y
            ? (s = function () {
                _.nextTick(i);
              })
            : ((p = f(p, u)),
              (s = function () {
                p(i);
              }))
          : ((a = !0),
            (c = b.createTextNode('')),
            new x(i).observe(c, { characterData: !0 }),
            (s = function () {
              c.data = a = !a;
            }))),
        (t.exports =
          M ||
          function (t) {
            var e = { fn: t, next: void 0 };
            o && (o.next = e), r || ((r = e), s()), (o = e);
          });
    },
    maYj: function (t, e, n) {
      var i = n('nEaP'),
        r = n('a72Q'),
        o = n('OzTt'),
        s = n('gDYM'),
        a = n('Xki7'),
        c = n('6+ef'),
        l = n('fr05'),
        h = n('+n59'),
        u = n('l682'),
        f = n('QYi2'),
        d = n('wnjq'),
        p = i.TypeError,
        g = function (t, e) {
          (this.stopped = t), (this.result = e);
        },
        m = g.prototype;
      t.exports = function (t, e, n) {
        var i,
          v,
          y,
          x,
          b,
          _,
          w,
          k = n && n.that,
          M = !(!n || !n.AS_ENTRIES),
          P = !(!n || !n.IS_ITERATOR),
          O = !(!n || !n.INTERRUPTED),
          E = r(e, k),
          S = function (t) {
            return i && d(i, 'normal', t), new g(!0, t);
          },
          T = function (t) {
            return M
              ? (s(t), O ? E(t[0], t[1], S) : E(t[0], t[1]))
              : O
              ? E(t, S)
              : E(t);
          };
        if (P) i = t;
        else {
          if (!(v = f(t))) throw p(a(t) + ' is not iterable');
          if (c(v)) {
            for (y = 0, x = l(t); x > y; y++)
              if ((b = T(t[y])) && h(m, b)) return b;
            return new g(!1);
          }
          i = u(t, v);
        }
        for (_ = i.next; !(w = o(_, i)).done; ) {
          try {
            b = T(w.value);
          } catch (t) {
            d(i, 'throw', t);
          }
          if ('object' == typeof b && b && h(m, b)) return b;
        }
        return new g(!1);
      };
    },
    mp5j: function (t, e, n) {
      t.exports = n('Jikt').default;
    },
    nEaP: function (t, e, n) {
      (function (e) {
        var n = function (t) {
          return t && t.Math == Math && t;
        };
        t.exports =
          n('object' == typeof globalThis && globalThis) ||
          n('object' == typeof window && window) ||
          n('object' == typeof self && self) ||
          n('object' == typeof e && e) ||
          (function () {
            return this;
          })() ||
          Function('return this')();
      }.call(this, n('pCvA')));
    },
    nGo5: function (t, e, n) {
      'use strict';
      (function (e) {
        var i = n('ovh1'),
          r = n('71kK'),
          o = n('tqms'),
          s = n('9FbL'),
          a = n('37w6'),
          c = { 'Content-Type': 'application/x-www-form-urlencoded' };
        function l(t, e) {
          !i.isUndefined(t) &&
            i.isUndefined(t['Content-Type']) &&
            (t['Content-Type'] = e);
        }
        var h,
          u = {
            transitional: s,
            adapter:
              (('undefined' != typeof XMLHttpRequest ||
                (void 0 !== e &&
                  '[object process]' === Object.prototype.toString.call(e))) &&
                (h = n('zf4f')),
              h),
            transformRequest: [
              function (t, e) {
                if (
                  (r(e, 'Accept'),
                  r(e, 'Content-Type'),
                  i.isFormData(t) ||
                    i.isArrayBuffer(t) ||
                    i.isBuffer(t) ||
                    i.isStream(t) ||
                    i.isFile(t) ||
                    i.isBlob(t))
                )
                  return t;
                if (i.isArrayBufferView(t)) return t.buffer;
                if (i.isURLSearchParams(t))
                  return (
                    l(e, 'application/x-www-form-urlencoded;charset=utf-8'),
                    t.toString()
                  );
                var n,
                  o = i.isObject(t),
                  s = e && e['Content-Type'];
                if (
                  (n = i.isFileList(t)) ||
                  (o && 'multipart/form-data' === s)
                ) {
                  var c = this.env && this.env.FormData;
                  return a(n ? { 'files[]': t } : t, c && new c());
                }
                return o || 'application/json' === s
                  ? (l(e, 'application/json'),
                    (function (t, e, n) {
                      if (i.isString(t))
                        try {
                          return (e || JSON.parse)(t), i.trim(t);
                        } catch (t) {
                          if ('SyntaxError' !== t.name) throw t;
                        }
                      return (n || JSON.stringify)(t);
                    })(t))
                  : t;
              },
            ],
            transformResponse: [
              function (t) {
                var e = this.transitional || u.transitional,
                  n = e && e.silentJSONParsing,
                  r = e && e.forcedJSONParsing,
                  s = !n && 'json' === this.responseType;
                if (s || (r && i.isString(t) && t.length))
                  try {
                    return JSON.parse(t);
                  } catch (t) {
                    if (s) {
                      if ('SyntaxError' === t.name)
                        throw o.from(
                          t,
                          o.ERR_BAD_RESPONSE,
                          this,
                          null,
                          this.response,
                        );
                      throw t;
                    }
                  }
                return t;
              },
            ],
            timeout: 0,
            xsrfCookieName: 'XSRF-TOKEN',
            xsrfHeaderName: 'X-XSRF-TOKEN',
            maxContentLength: -1,
            maxBodyLength: -1,
            env: { FormData: n('7Bi7') },
            validateStatus: function (t) {
              return t >= 200 && t < 300;
            },
            headers: {
              common: { Accept: 'application/json, text/plain, */*' },
            },
          };
        i.forEach(['delete', 'get', 'head'], function (t) {
          u.headers[t] = {};
        }),
          i.forEach(['post', 'put', 'patch'], function (t) {
            u.headers[t] = i.merge(c);
          }),
          (t.exports = u);
      }.call(this, n('5IsQ')));
    },
    nHIk: function (t, e, n) {
      var i = n('Hvpk'),
        r = n('nRc6'),
        o = n('VSW8');
      t.exports = i
        ? function (t, e, n) {
            return r.f(t, e, o(1, n));
          }
        : function (t, e, n) {
            return (t[e] = n), t;
          };
    },
    nRc6: function (t, e, n) {
      var i = n('nEaP'),
        r = n('Hvpk'),
        o = n('xwiM'),
        s = n('G9Va'),
        a = n('gDYM'),
        c = n('b3pM'),
        l = i.TypeError,
        h = Object.defineProperty,
        u = Object.getOwnPropertyDescriptor;
      e.f = r
        ? s
          ? function (t, e, n) {
              if (
                (a(t),
                (e = c(e)),
                a(n),
                'function' == typeof t &&
                  'prototype' === e &&
                  'value' in n &&
                  'writable' in n &&
                  !n.writable)
              ) {
                var i = u(t, e);
                i &&
                  i.writable &&
                  ((t[e] = n.value),
                  (n = {
                    configurable:
                      'configurable' in n ? n.configurable : i.configurable,
                    enumerable: 'enumerable' in n ? n.enumerable : i.enumerable,
                    writable: !1,
                  }));
              }
              return h(t, e, n);
            }
          : h
        : function (t, e, n) {
            if ((a(t), (e = c(e)), a(n), o))
              try {
                return h(t, e, n);
              } catch (t) {}
            if ('get' in n || 'set' in n) throw l('Accessors not supported');
            return 'value' in n && (t[e] = n.value), t;
          };
    },
    nrda: function (t, e, n) {
      var i = n('WGD3'),
        r = 0,
        o = Math.random(),
        s = i((1).toString);
      t.exports = function (t) {
        return 'Symbol(' + (void 0 === t ? '' : t) + ')_' + s(++r + o, 36);
      };
    },
    ovh1: function (t, e, n) {
      'use strict';
      var i,
        r = n('5QbJ'),
        o = Object.prototype.toString,
        s =
          ((i = Object.create(null)),
          function (t) {
            var e = o.call(t);
            return i[e] || (i[e] = e.slice(8, -1).toLowerCase());
          });
      function a(t) {
        return (
          (t = t.toLowerCase()),
          function (e) {
            return s(e) === t;
          }
        );
      }
      function c(t) {
        return Array.isArray(t);
      }
      function l(t) {
        return void 0 === t;
      }
      var h = a('ArrayBuffer');
      function u(t) {
        return null !== t && 'object' == typeof t;
      }
      function f(t) {
        if ('object' !== s(t)) return !1;
        var e = Object.getPrototypeOf(t);
        return null === e || e === Object.prototype;
      }
      var d = a('Date'),
        p = a('File'),
        g = a('Blob'),
        m = a('FileList');
      function v(t) {
        return '[object Function]' === o.call(t);
      }
      var y = a('URLSearchParams');
      function x(t, e) {
        if (null != t)
          if (('object' != typeof t && (t = [t]), c(t)))
            for (var n = 0, i = t.length; n < i; n++) e.call(null, t[n], n, t);
          else
            for (var r in t)
              Object.prototype.hasOwnProperty.call(t, r) &&
                e.call(null, t[r], r, t);
      }
      var b,
        _ =
          ((b =
            'undefined' != typeof Uint8Array &&
            Object.getPrototypeOf(Uint8Array)),
          function (t) {
            return b && t instanceof b;
          });
      t.exports = {
        isArray: c,
        isArrayBuffer: h,
        isBuffer: function (t) {
          return (
            null !== t &&
            !l(t) &&
            null !== t.constructor &&
            !l(t.constructor) &&
            'function' == typeof t.constructor.isBuffer &&
            t.constructor.isBuffer(t)
          );
        },
        isFormData: function (t) {
          return (
            t &&
            (('function' == typeof FormData && t instanceof FormData) ||
              '[object FormData]' === o.call(t) ||
              (v(t.toString) && '[object FormData]' === t.toString()))
          );
        },
        isArrayBufferView: function (t) {
          return 'undefined' != typeof ArrayBuffer && ArrayBuffer.isView
            ? ArrayBuffer.isView(t)
            : t && t.buffer && h(t.buffer);
        },
        isString: function (t) {
          return 'string' == typeof t;
        },
        isNumber: function (t) {
          return 'number' == typeof t;
        },
        isObject: u,
        isPlainObject: f,
        isUndefined: l,
        isDate: d,
        isFile: p,
        isBlob: g,
        isFunction: v,
        isStream: function (t) {
          return u(t) && v(t.pipe);
        },
        isURLSearchParams: y,
        isStandardBrowserEnv: function () {
          return (
            ('undefined' == typeof navigator ||
              ('ReactNative' !== navigator.product &&
                'NativeScript' !== navigator.product &&
                'NS' !== navigator.product)) &&
            'undefined' != typeof window &&
            'undefined' != typeof document
          );
        },
        forEach: x,
        merge: function t() {
          var e = {};
          function n(n, i) {
            f(e[i]) && f(n)
              ? (e[i] = t(e[i], n))
              : f(n)
              ? (e[i] = t({}, n))
              : c(n)
              ? (e[i] = n.slice())
              : (e[i] = n);
          }
          for (var i = 0, r = arguments.length; i < r; i++) x(arguments[i], n);
          return e;
        },
        extend: function (t, e, n) {
          return (
            x(e, function (e, i) {
              t[i] = n && 'function' == typeof e ? r(e, n) : e;
            }),
            t
          );
        },
        trim: function (t) {
          return t.trim ? t.trim() : t.replace(/^\s+|\s+$/g, '');
        },
        stripBOM: function (t) {
          return 65279 === t.charCodeAt(0) && (t = t.slice(1)), t;
        },
        inherits: function (t, e, n, i) {
          (t.prototype = Object.create(e.prototype, i)),
            (t.prototype.constructor = t),
            n && Object.assign(t.prototype, n);
        },
        toFlatObject: function (t, e, n) {
          var i,
            r,
            o,
            s = {};
          e = e || {};
          do {
            for (r = (i = Object.getOwnPropertyNames(t)).length; r-- > 0; )
              s[(o = i[r])] || ((e[o] = t[o]), (s[o] = !0));
            t = Object.getPrototypeOf(t);
          } while (t && (!n || n(t, e)) && t !== Object.prototype);
          return e;
        },
        kindOf: s,
        kindOfTest: a,
        endsWith: function (t, e, n) {
          (t = String(t)),
            (void 0 === n || n > t.length) && (n = t.length),
            (n -= e.length);
          var i = t.indexOf(e, n);
          return -1 !== i && i === n;
        },
        toArray: function (t) {
          if (!t) return null;
          var e = t.length;
          if (l(e)) return null;
          for (var n = new Array(e); e-- > 0; ) n[e] = t[e];
          return n;
        },
        isTypedArray: _,
        isFileList: m,
      };
    },
    pCvA: function (t, e) {
      var n;
      n = (function () {
        return this;
      })();
      try {
        n = n || new Function('return this')();
      } catch (t) {
        'object' == typeof window && (n = window);
      }
      t.exports = n;
    },
    ptwD: function (t, e, n) {
      'use strict';
      (e.__esModule = !0),
        (e.createNewLookupObject = function () {
          for (var t = arguments.length, e = Array(t), n = 0; n < t; n++)
            e[n] = arguments[n];
          return i.extend.apply(void 0, [Object.create(null)].concat(e));
        });
      var i = n('82EY');
    },
    pvzg: function (t, e, n) {
      'use strict';
      var i = n('tqms');
      function r(t) {
        i.call(this, null == t ? 'canceled' : t, i.ERR_CANCELED),
          (this.name = 'CanceledError');
      }
      n('ovh1').inherits(r, i, { __CANCEL__: !0 }), (t.exports = r);
    },
    'q/gS': function (t, e) {
      t.exports = {};
    },
    q7PB: function (t, e, n) {
      'use strict';
      var i,
        r,
        o,
        s = n('JRM0'),
        a = n('PCqT'),
        c = n('YxGO'),
        l = n('nEaP'),
        h = n('OzTt'),
        u = n('DB1m'),
        f = n('hQLn'),
        d = n('1tiZ'),
        p = n('V2sW'),
        g = n('sK41'),
        m = n('PGFG'),
        v = n('fT8P'),
        y = n('iBt0'),
        x = n('6ka5'),
        b = n('4ssk').set,
        _ = n('m1e9'),
        w = n('OTtX'),
        k = n('gmtn'),
        M = n('jKt2'),
        P = n('SkE4'),
        O = n('de3D'),
        E = n('QP1B'),
        S = n('N1hr'),
        T = E.CONSTRUCTOR,
        A = E.REJECTION_EVENT,
        C = E.SUBCLASSING,
        R = P.getterFor('Promise'),
        D = P.set,
        L = O && O.prototype,
        I = O,
        j = L,
        $ = l.TypeError,
        N = l.document,
        F = l.process,
        B = S.f,
        z = B,
        H = !!(N && N.createEvent && l.dispatchEvent),
        V = function (t) {
          var e;
          return !(!v(t) || !m((e = t.then))) && e;
        },
        W = function (t, e) {
          var n,
            i,
            r,
            o = e.value,
            s = 1 == e.state,
            a = s ? t.ok : t.fail,
            c = t.resolve,
            l = t.reject,
            u = t.domain;
          try {
            a
              ? (s || (2 === e.rejection && J(e), (e.rejection = 1)),
                !0 === a
                  ? (n = o)
                  : (u && u.enter(), (n = a(o)), u && (u.exit(), (r = !0))),
                n === t.promise
                  ? l($('Promise-chain cycle'))
                  : (i = V(n))
                  ? h(i, n, c, l)
                  : c(n))
              : l(o);
          } catch (t) {
            u && !r && u.exit(), l(t);
          }
        },
        U = function (t, e) {
          t.notified ||
            ((t.notified = !0),
            _(function () {
              for (var n, i = t.reactions; (n = i.get()); ) W(n, t);
              (t.notified = !1), e && !t.rejection && G(t);
            }));
        },
        Y = function (t, e, n) {
          var i, r;
          H
            ? (((i = N.createEvent('Event')).promise = e),
              (i.reason = n),
              i.initEvent(t, !1, !0),
              l.dispatchEvent(i))
            : (i = { promise: e, reason: n }),
            !A && (r = l['on' + t])
              ? r(i)
              : 'unhandledrejection' === t &&
                w('Unhandled promise rejection', n);
        },
        G = function (t) {
          h(b, l, function () {
            var e,
              n = t.facade,
              i = t.value;
            if (
              q(t) &&
              ((e = k(function () {
                c
                  ? F.emit('unhandledRejection', i, n)
                  : Y('unhandledrejection', n, i);
              })),
              (t.rejection = c || q(t) ? 2 : 1),
              e.error)
            )
              throw e.value;
          });
        },
        q = function (t) {
          return 1 !== t.rejection && !t.parent;
        },
        J = function (t) {
          h(b, l, function () {
            var e = t.facade;
            c
              ? F.emit('rejectionHandled', e)
              : Y('rejectionhandled', e, t.value);
          });
        },
        X = function (t, e, n) {
          return function (i) {
            t(e, i, n);
          };
        },
        K = function (t, e, n) {
          t.done ||
            ((t.done = !0),
            n && (t = n),
            (t.value = e),
            (t.state = 2),
            U(t, !0));
        },
        Q = function (t, e, n) {
          if (!t.done) {
            (t.done = !0), n && (t = n);
            try {
              if (t.facade === e) throw $("Promise can't be resolved itself");
              var i = V(e);
              i
                ? _(function () {
                    var n = { done: !1 };
                    try {
                      h(i, e, X(Q, n, t), X(K, n, t));
                    } catch (e) {
                      K(n, e, t);
                    }
                  })
                : ((t.value = e), (t.state = 1), U(t, !1));
            } catch (e) {
              K({ done: !1 }, e, t);
            }
          }
        };
      if (
        T &&
        ((j = (I = function (t) {
          y(this, j), g(t), h(i, this);
          var e = R(this);
          try {
            t(X(Q, e), X(K, e));
          } catch (t) {
            K(e, t);
          }
        }).prototype),
        ((i = function (t) {
          D(this, {
            type: 'Promise',
            done: !1,
            notified: !1,
            parent: !1,
            reactions: new M(),
            rejection: !1,
            state: 0,
            value: void 0,
          });
        }).prototype = u(j, 'then', function (t, e) {
          var n = R(this),
            i = B(x(this, I));
          return (
            (n.parent = !0),
            (i.ok = !m(t) || t),
            (i.fail = m(e) && e),
            (i.domain = c ? F.domain : void 0),
            0 == n.state
              ? n.reactions.add(i)
              : _(function () {
                  W(i, n);
                }),
            i.promise
          );
        })),
        (r = function () {
          var t = new i(),
            e = R(t);
          (this.promise = t), (this.resolve = X(Q, e)), (this.reject = X(K, e));
        }),
        (S.f = B =
          function (t) {
            return t === I || void 0 === t ? new r(t) : z(t);
          }),
        !a && m(O) && L !== Object.prototype)
      ) {
        (o = L.then),
          C ||
            u(
              L,
              'then',
              function (t, e) {
                var n = this;
                return new I(function (t, e) {
                  h(o, n, t, e);
                }).then(t, e);
              },
              { unsafe: !0 },
            );
        try {
          delete L.constructor;
        } catch (t) {}
        f && f(L, j);
      }
      s({ global: !0, wrap: !0, forced: T }, { Promise: I }),
        d(I, 'Promise', !1, !0),
        p('Promise');
    },
    rk7W: function (t, e) {
      e.f = Object.getOwnPropertySymbols;
    },
    rken: function (t, e, n) {
      'use strict';
      var i = n('9pAD'),
        r = n('glsI'),
        o = n('fr05');
      t.exports = function (t) {
        for (
          var e = i(this),
            n = o(e),
            s = arguments.length,
            a = r(s > 1 ? arguments[1] : void 0, n),
            c = s > 2 ? arguments[2] : void 0,
            l = void 0 === c ? n : r(c, n);
          l > a;

        )
          e[a++] = t;
        return e;
      };
    },
    rxbk: function (t, e, n) {
      var i = n('UVdV');
      t.exports = i('navigator', 'userAgent') || '';
    },
    s06e: function (t, e, n) {
      var i = n('rxbk');
      t.exports = /(?:ipad|iphone|ipod).*applewebkit/i.test(i);
    },
    s3NK: function (t, e) {
      t.exports = {};
    },
    sK41: function (t, e, n) {
      var i = n('nEaP'),
        r = n('PGFG'),
        o = n('Xki7'),
        s = i.TypeError;
      t.exports = function (t) {
        if (r(t)) return t;
        throw s(o(t) + ' is not a function');
      };
    },
    tPpl: function (t, e) {
      t.exports = {
        CSSRuleList: 0,
        CSSStyleDeclaration: 0,
        CSSValueList: 0,
        ClientRectList: 0,
        DOMRectList: 0,
        DOMStringList: 0,
        DOMTokenList: 1,
        DataTransferItemList: 0,
        FileList: 0,
        HTMLAllCollection: 0,
        HTMLCollection: 0,
        HTMLFormElement: 0,
        HTMLSelectElement: 0,
        MediaList: 0,
        MimeTypeArray: 0,
        NamedNodeMap: 0,
        NodeList: 1,
        PaintRequestList: 0,
        Plugin: 0,
        PluginArray: 0,
        SVGLengthList: 0,
        SVGNumberList: 0,
        SVGPathSegList: 0,
        SVGPointList: 0,
        SVGStringList: 0,
        SVGTransformList: 0,
        SourceBufferList: 0,
        StyleSheetList: 0,
        TextTrackCueList: 0,
        TextTrackList: 0,
        TouchList: 0,
      };
    },
    tlZM: function (t, e, n) {
      var i = n('+iL7');
      t.exports = !i(function () {
        var t = function () {}.bind();
        return 'function' != typeof t || t.hasOwnProperty('prototype');
      });
    },
    tqms: function (t, e, n) {
      'use strict';
      var i = n('ovh1');
      function r(t, e, n, i, r) {
        Error.call(this),
          (this.message = t),
          (this.name = 'AxiosError'),
          e && (this.code = e),
          n && (this.config = n),
          i && (this.request = i),
          r && (this.response = r);
      }
      i.inherits(r, Error, {
        toJSON: function () {
          return {
            message: this.message,
            name: this.name,
            description: this.description,
            number: this.number,
            fileName: this.fileName,
            lineNumber: this.lineNumber,
            columnNumber: this.columnNumber,
            stack: this.stack,
            config: this.config,
            code: this.code,
            status:
              this.response && this.response.status
                ? this.response.status
                : null,
          };
        },
      });
      var o = r.prototype,
        s = {};
      [
        'ERR_BAD_OPTION_VALUE',
        'ERR_BAD_OPTION',
        'ECONNABORTED',
        'ETIMEDOUT',
        'ERR_NETWORK',
        'ERR_FR_TOO_MANY_REDIRECTS',
        'ERR_DEPRECATED',
        'ERR_BAD_RESPONSE',
        'ERR_BAD_REQUEST',
        'ERR_CANCELED',
      ].forEach(function (t) {
        s[t] = { value: t };
      }),
        Object.defineProperties(r, s),
        Object.defineProperty(o, 'isAxiosError', { value: !0 }),
        (r.from = function (t, e, n, s, a, c) {
          var l = Object.create(o);
          return (
            i.toFlatObject(t, l, function (t) {
              return t !== Error.prototype;
            }),
            r.call(l, t.message, e, n, s, a),
            (l.name = t.name),
            c && Object.assign(l, c),
            l
          );
        }),
        (t.exports = r);
    },
    u5rE: function (t, e, n) {
      var i = n('nEaP'),
        r = n('UVdV'),
        o = n('PGFG'),
        s = n('+n59'),
        a = n('B/3V'),
        c = i.Object;
      t.exports = a
        ? function (t) {
            return 'symbol' == typeof t;
          }
        : function (t) {
            var e = r('Symbol');
            return o(e) && s(e.prototype, c(t));
          };
    },
    uHfv: function (t, e, n) {
      var i = n('rxbk'),
        r = n('nEaP');
      t.exports = /ipad|iphone|ipod/i.test(i) && void 0 !== r.Pebble;
    },
    uXC8: function (t, e, n) {
      'use strict';
      var i = n('JRM0'),
        r = n('OzTt'),
        o = n('N1hr');
      i(
        { target: 'Promise', stat: !0, forced: n('QP1B').CONSTRUCTOR },
        {
          reject: function (t) {
            var e = o.f(this);
            return r(e.reject, void 0, t), e.promise;
          },
        },
      );
    },
    uahg: function (t, e, n) {
      'use strict';
      var i = n('ovh1'),
        r = n('fwl+'),
        o = n('i0F7'),
        s = n('guUT'),
        a = n('Zrjs'),
        c = n('h1Um'),
        l = n('keIi'),
        h = l.validators;
      function u(t) {
        (this.defaults = t),
          (this.interceptors = { request: new o(), response: new o() });
      }
      (u.prototype.request = function (t, e) {
        'string' == typeof t ? ((e = e || {}).url = t) : (e = t || {}),
          (e = a(this.defaults, e)).method
            ? (e.method = e.method.toLowerCase())
            : this.defaults.method
            ? (e.method = this.defaults.method.toLowerCase())
            : (e.method = 'get');
        var n = e.transitional;
        void 0 !== n &&
          l.assertOptions(
            n,
            {
              silentJSONParsing: h.transitional(h.boolean),
              forcedJSONParsing: h.transitional(h.boolean),
              clarifyTimeoutError: h.transitional(h.boolean),
            },
            !1,
          );
        var i = [],
          r = !0;
        this.interceptors.request.forEach(function (t) {
          ('function' == typeof t.runWhen && !1 === t.runWhen(e)) ||
            ((r = r && t.synchronous), i.unshift(t.fulfilled, t.rejected));
        });
        var o,
          c = [];
        if (
          (this.interceptors.response.forEach(function (t) {
            c.push(t.fulfilled, t.rejected);
          }),
          !r)
        ) {
          var u = [s, void 0];
          for (
            Array.prototype.unshift.apply(u, i),
              u = u.concat(c),
              o = Promise.resolve(e);
            u.length;

          )
            o = o.then(u.shift(), u.shift());
          return o;
        }
        for (var f = e; i.length; ) {
          var d = i.shift(),
            p = i.shift();
          try {
            f = d(f);
          } catch (t) {
            p(t);
            break;
          }
        }
        try {
          o = s(f);
        } catch (t) {
          return Promise.reject(t);
        }
        for (; c.length; ) o = o.then(c.shift(), c.shift());
        return o;
      }),
        (u.prototype.getUri = function (t) {
          t = a(this.defaults, t);
          var e = c(t.baseURL, t.url);
          return r(e, t.params, t.paramsSerializer);
        }),
        i.forEach(['delete', 'get', 'head', 'options'], function (t) {
          u.prototype[t] = function (e, n) {
            return this.request(
              a(n || {}, { method: t, url: e, data: (n || {}).data }),
            );
          };
        }),
        i.forEach(['post', 'put', 'patch'], function (t) {
          function e(e) {
            return function (n, i, r) {
              return this.request(
                a(r || {}, {
                  method: t,
                  headers: e ? { 'Content-Type': 'multipart/form-data' } : {},
                  url: n,
                  data: i,
                }),
              );
            };
          }
          (u.prototype[t] = e()), (u.prototype[t + 'Form'] = e(!0));
        }),
        (t.exports = u);
    },
    ujzH: function (t, e, n) {
      var i = n('8OJN'),
        r = n('ek/P');
      t.exports =
        Object.keys ||
        function (t) {
          return i(t, r);
        };
    },
    v0JE: function (t, e, n) {
      var i = n('jP2f'),
        r = n('LMdw'),
        o = n('Fup7'),
        s = n('nRc6');
      t.exports = function (t, e, n) {
        for (var a = r(e), c = s.f, l = o.f, h = 0; h < a.length; h++) {
          var u = a[h];
          i(t, u) || (n && i(n, u)) || c(t, u, l(e, u));
        }
      };
    },
    vGr9: function (t, e, n) {
      'use strict';
      t.exports = function (t) {
        var e = /^([-+\w]{1,25})(:?\/\/|:)/.exec(t);
        return (e && e[1]) || '';
      };
    },
    vMO2: function (t, e, n) {
      'use strict';
      var i = n('ovh1');
      t.exports = i.isStandardBrowserEnv()
        ? {
            write: function (t, e, n, r, o, s) {
              var a = [];
              a.push(t + '=' + encodeURIComponent(e)),
                i.isNumber(n) && a.push('expires=' + new Date(n).toGMTString()),
                i.isString(r) && a.push('path=' + r),
                i.isString(o) && a.push('domain=' + o),
                !0 === s && a.push('secure'),
                (document.cookie = a.join('; '));
            },
            read: function (t) {
              var e = document.cookie.match(
                new RegExp('(^|;\\s*)(' + t + ')=([^;]*)'),
              );
              return e ? decodeURIComponent(e[3]) : null;
            },
            remove: function (t) {
              this.write(t, '', Date.now() - 864e5);
            },
          }
        : {
            write: function () {},
            read: function () {
              return null;
            },
            remove: function () {},
          };
    },
    'w/Ji': function (t, e, n) {
      var i,
        r = n('gDYM'),
        o = n('11ZY'),
        s = n('ek/P'),
        a = n('s3NK'),
        c = n('R1TW'),
        l = n('HRgQ'),
        h = n('3pC9'),
        u = h('IE_PROTO'),
        f = function () {},
        d = function (t) {
          return '<script>' + t + '</script>';
        },
        p = function (t) {
          t.write(d('')), t.close();
          var e = t.parentWindow.Object;
          return (t = null), e;
        },
        g = function () {
          try {
            i = new ActiveXObject('htmlfile');
          } catch (t) {}
          var t, e;
          g =
            'undefined' != typeof document
              ? document.domain && i
                ? p(i)
                : (((e = l('iframe')).style.display = 'none'),
                  c.appendChild(e),
                  (e.src = String('javascript:')),
                  (t = e.contentWindow.document).open(),
                  t.write(d('document.F=Object')),
                  t.close(),
                  t.F)
              : p(i);
          for (var n = s.length; n--; ) delete g.prototype[s[n]];
          return g();
        };
      (a[u] = !0),
        (t.exports =
          Object.create ||
          function (t, e) {
            var n;
            return (
              null !== t
                ? ((f.prototype = r(t)),
                  (n = new f()),
                  (f.prototype = null),
                  (n[u] = t))
                : (n = g()),
              void 0 === e ? n : o.f(n, e)
            );
          });
    },
    wLFK: function (t, e, n) {
      var i = n('Hvpk'),
        r = n('jP2f'),
        o = Function.prototype,
        s = i && Object.getOwnPropertyDescriptor,
        a = r(o, 'name'),
        c = a && 'something' === function () {}.name,
        l = a && (!i || (i && s(o, 'name').configurable));
      t.exports = { EXISTS: a, PROPER: c, CONFIGURABLE: l };
    },
    wcNg: function (t, e, n) {
      var i = (function (t) {
        'use strict';
        var e = Object.prototype,
          n = e.hasOwnProperty,
          i = 'function' == typeof Symbol ? Symbol : {},
          r = i.iterator || '@@iterator',
          o = i.asyncIterator || '@@asyncIterator',
          s = i.toStringTag || '@@toStringTag';
        function a(t, e, n) {
          return (
            Object.defineProperty(t, e, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            }),
            t[e]
          );
        }
        try {
          a({}, '');
        } catch (t) {
          a = function (t, e, n) {
            return (t[e] = n);
          };
        }
        function c(t, e, n, i) {
          var r = e && e.prototype instanceof u ? e : u,
            o = Object.create(r.prototype),
            s = new k(i || []);
          return (
            (o._invoke = (function (t, e, n) {
              var i = 'suspendedStart';
              return function (r, o) {
                if ('executing' === i)
                  throw new Error('Generator is already running');
                if ('completed' === i) {
                  if ('throw' === r) throw o;
                  return P();
                }
                for (n.method = r, n.arg = o; ; ) {
                  var s = n.delegate;
                  if (s) {
                    var a = b(s, n);
                    if (a) {
                      if (a === h) continue;
                      return a;
                    }
                  }
                  if ('next' === n.method) n.sent = n._sent = n.arg;
                  else if ('throw' === n.method) {
                    if ('suspendedStart' === i)
                      throw ((i = 'completed'), n.arg);
                    n.dispatchException(n.arg);
                  } else 'return' === n.method && n.abrupt('return', n.arg);
                  i = 'executing';
                  var c = l(t, e, n);
                  if ('normal' === c.type) {
                    if (
                      ((i = n.done ? 'completed' : 'suspendedYield'),
                      c.arg === h)
                    )
                      continue;
                    return { value: c.arg, done: n.done };
                  }
                  'throw' === c.type &&
                    ((i = 'completed'), (n.method = 'throw'), (n.arg = c.arg));
                }
              };
            })(t, n, s)),
            o
          );
        }
        function l(t, e, n) {
          try {
            return { type: 'normal', arg: t.call(e, n) };
          } catch (t) {
            return { type: 'throw', arg: t };
          }
        }
        t.wrap = c;
        var h = {};
        function u() {}
        function f() {}
        function d() {}
        var p = {};
        a(p, r, function () {
          return this;
        });
        var g = Object.getPrototypeOf,
          m = g && g(g(M([])));
        m && m !== e && n.call(m, r) && (p = m);
        var v = (d.prototype = u.prototype = Object.create(p));
        function y(t) {
          ['next', 'throw', 'return'].forEach(function (e) {
            a(t, e, function (t) {
              return this._invoke(e, t);
            });
          });
        }
        function x(t, e) {
          var i;
          this._invoke = function (r, o) {
            function s() {
              return new e(function (i, s) {
                !(function i(r, o, s, a) {
                  var c = l(t[r], t, o);
                  if ('throw' !== c.type) {
                    var h = c.arg,
                      u = h.value;
                    return u && 'object' == typeof u && n.call(u, '__await')
                      ? e.resolve(u.__await).then(
                          function (t) {
                            i('next', t, s, a);
                          },
                          function (t) {
                            i('throw', t, s, a);
                          },
                        )
                      : e.resolve(u).then(
                          function (t) {
                            (h.value = t), s(h);
                          },
                          function (t) {
                            return i('throw', t, s, a);
                          },
                        );
                  }
                  a(c.arg);
                })(r, o, i, s);
              });
            }
            return (i = i ? i.then(s, s) : s());
          };
        }
        function b(t, e) {
          var n = t.iterator[e.method];
          if (void 0 === n) {
            if (((e.delegate = null), 'throw' === e.method)) {
              if (
                t.iterator.return &&
                ((e.method = 'return'),
                (e.arg = void 0),
                b(t, e),
                'throw' === e.method)
              )
                return h;
              (e.method = 'throw'),
                (e.arg = new TypeError(
                  "The iterator does not provide a 'throw' method",
                ));
            }
            return h;
          }
          var i = l(n, t.iterator, e.arg);
          if ('throw' === i.type)
            return (
              (e.method = 'throw'), (e.arg = i.arg), (e.delegate = null), h
            );
          var r = i.arg;
          return r
            ? r.done
              ? ((e[t.resultName] = r.value),
                (e.next = t.nextLoc),
                'return' !== e.method &&
                  ((e.method = 'next'), (e.arg = void 0)),
                (e.delegate = null),
                h)
              : r
            : ((e.method = 'throw'),
              (e.arg = new TypeError('iterator result is not an object')),
              (e.delegate = null),
              h);
        }
        function _(t) {
          var e = { tryLoc: t[0] };
          1 in t && (e.catchLoc = t[1]),
            2 in t && ((e.finallyLoc = t[2]), (e.afterLoc = t[3])),
            this.tryEntries.push(e);
        }
        function w(t) {
          var e = t.completion || {};
          (e.type = 'normal'), delete e.arg, (t.completion = e);
        }
        function k(t) {
          (this.tryEntries = [{ tryLoc: 'root' }]),
            t.forEach(_, this),
            this.reset(!0);
        }
        function M(t) {
          if (t) {
            var e = t[r];
            if (e) return e.call(t);
            if ('function' == typeof t.next) return t;
            if (!isNaN(t.length)) {
              var i = -1,
                o = function e() {
                  for (; ++i < t.length; )
                    if (n.call(t, i)) return (e.value = t[i]), (e.done = !1), e;
                  return (e.value = void 0), (e.done = !0), e;
                };
              return (o.next = o);
            }
          }
          return { next: P };
        }
        function P() {
          return { value: void 0, done: !0 };
        }
        return (
          (f.prototype = d),
          a(v, 'constructor', d),
          a(d, 'constructor', f),
          (f.displayName = a(d, s, 'GeneratorFunction')),
          (t.isGeneratorFunction = function (t) {
            var e = 'function' == typeof t && t.constructor;
            return (
              !!e &&
              (e === f || 'GeneratorFunction' === (e.displayName || e.name))
            );
          }),
          (t.mark = function (t) {
            return (
              Object.setPrototypeOf
                ? Object.setPrototypeOf(t, d)
                : ((t.__proto__ = d), a(t, s, 'GeneratorFunction')),
              (t.prototype = Object.create(v)),
              t
            );
          }),
          (t.awrap = function (t) {
            return { __await: t };
          }),
          y(x.prototype),
          a(x.prototype, o, function () {
            return this;
          }),
          (t.AsyncIterator = x),
          (t.async = function (e, n, i, r, o) {
            void 0 === o && (o = Promise);
            var s = new x(c(e, n, i, r), o);
            return t.isGeneratorFunction(n)
              ? s
              : s.next().then(function (t) {
                  return t.done ? t.value : s.next();
                });
          }),
          y(v),
          a(v, s, 'Generator'),
          a(v, r, function () {
            return this;
          }),
          a(v, 'toString', function () {
            return '[object Generator]';
          }),
          (t.keys = function (t) {
            var e = [];
            for (var n in t) e.push(n);
            return (
              e.reverse(),
              function n() {
                for (; e.length; ) {
                  var i = e.pop();
                  if (i in t) return (n.value = i), (n.done = !1), n;
                }
                return (n.done = !0), n;
              }
            );
          }),
          (t.values = M),
          (k.prototype = {
            constructor: k,
            reset: function (t) {
              if (
                ((this.prev = 0),
                (this.next = 0),
                (this.sent = this._sent = void 0),
                (this.done = !1),
                (this.delegate = null),
                (this.method = 'next'),
                (this.arg = void 0),
                this.tryEntries.forEach(w),
                !t)
              )
                for (var e in this)
                  't' === e.charAt(0) &&
                    n.call(this, e) &&
                    !isNaN(+e.slice(1)) &&
                    (this[e] = void 0);
            },
            stop: function () {
              this.done = !0;
              var t = this.tryEntries[0].completion;
              if ('throw' === t.type) throw t.arg;
              return this.rval;
            },
            dispatchException: function (t) {
              if (this.done) throw t;
              var e = this;
              function i(n, i) {
                return (
                  (s.type = 'throw'),
                  (s.arg = t),
                  (e.next = n),
                  i && ((e.method = 'next'), (e.arg = void 0)),
                  !!i
                );
              }
              for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                var o = this.tryEntries[r],
                  s = o.completion;
                if ('root' === o.tryLoc) return i('end');
                if (o.tryLoc <= this.prev) {
                  var a = n.call(o, 'catchLoc'),
                    c = n.call(o, 'finallyLoc');
                  if (a && c) {
                    if (this.prev < o.catchLoc) return i(o.catchLoc, !0);
                    if (this.prev < o.finallyLoc) return i(o.finallyLoc);
                  } else if (a) {
                    if (this.prev < o.catchLoc) return i(o.catchLoc, !0);
                  } else {
                    if (!c)
                      throw new Error('try statement without catch or finally');
                    if (this.prev < o.finallyLoc) return i(o.finallyLoc);
                  }
                }
              }
            },
            abrupt: function (t, e) {
              for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                var r = this.tryEntries[i];
                if (
                  r.tryLoc <= this.prev &&
                  n.call(r, 'finallyLoc') &&
                  this.prev < r.finallyLoc
                ) {
                  var o = r;
                  break;
                }
              }
              o &&
                ('break' === t || 'continue' === t) &&
                o.tryLoc <= e &&
                e <= o.finallyLoc &&
                (o = null);
              var s = o ? o.completion : {};
              return (
                (s.type = t),
                (s.arg = e),
                o
                  ? ((this.method = 'next'), (this.next = o.finallyLoc), h)
                  : this.complete(s)
              );
            },
            complete: function (t, e) {
              if ('throw' === t.type) throw t.arg;
              return (
                'break' === t.type || 'continue' === t.type
                  ? (this.next = t.arg)
                  : 'return' === t.type
                  ? ((this.rval = this.arg = t.arg),
                    (this.method = 'return'),
                    (this.next = 'end'))
                  : 'normal' === t.type && e && (this.next = e),
                h
              );
            },
            finish: function (t) {
              for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                var n = this.tryEntries[e];
                if (n.finallyLoc === t)
                  return this.complete(n.completion, n.afterLoc), w(n), h;
              }
            },
            catch: function (t) {
              for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                var n = this.tryEntries[e];
                if (n.tryLoc === t) {
                  var i = n.completion;
                  if ('throw' === i.type) {
                    var r = i.arg;
                    w(n);
                  }
                  return r;
                }
              }
              throw new Error('illegal catch attempt');
            },
            delegateYield: function (t, e, n) {
              return (
                (this.delegate = { iterator: M(t), resultName: e, nextLoc: n }),
                'next' === this.method && (this.arg = void 0),
                h
              );
            },
          }),
          t
        );
      })(t.exports);
      try {
        regeneratorRuntime = i;
      } catch (t) {
        'object' == typeof globalThis
          ? (globalThis.regeneratorRuntime = i)
          : Function('r', 'regeneratorRuntime = r')(i);
      }
    },
    wnjq: function (t, e, n) {
      var i = n('OzTt'),
        r = n('gDYM'),
        o = n('Krfs');
      t.exports = function (t, e, n) {
        var s, a;
        r(t);
        try {
          if (!(s = o(t, 'return'))) {
            if ('throw' === e) throw n;
            return n;
          }
          s = i(s, t);
        } catch (t) {
          (a = !0), (s = t);
        }
        if ('throw' === e) throw n;
        if (a) throw s;
        return r(s), n;
      };
    },
    xSFS: function (t, e, n) {
      'use strict';
      var i = n('ovh1'),
        r = [
          'age',
          'authorization',
          'content-length',
          'content-type',
          'etag',
          'expires',
          'from',
          'host',
          'if-modified-since',
          'if-unmodified-since',
          'last-modified',
          'location',
          'max-forwards',
          'proxy-authorization',
          'referer',
          'retry-after',
          'user-agent',
        ];
      t.exports = function (t) {
        var e,
          n,
          o,
          s = {};
        return t
          ? (i.forEach(t.split('\n'), function (t) {
              if (
                ((o = t.indexOf(':')),
                (e = i.trim(t.substr(0, o)).toLowerCase()),
                (n = i.trim(t.substr(o + 1))),
                e)
              ) {
                if (s[e] && r.indexOf(e) >= 0) return;
                s[e] =
                  'set-cookie' === e
                    ? (s[e] ? s[e] : []).concat([n])
                    : s[e]
                    ? s[e] + ', ' + n
                    : n;
              }
            }),
            s)
          : s;
      };
    },
    xwiM: function (t, e, n) {
      var i = n('Hvpk'),
        r = n('+iL7'),
        o = n('HRgQ');
      t.exports =
        !i &&
        !r(function () {
          return (
            7 !=
            Object.defineProperty(o('div'), 'a', {
              get: function () {
                return 7;
              },
            }).a
          );
        });
    },
    'z+V7': function (t, e, n) {
      var i = n('WGD3'),
        r = n('ZK/t'),
        o = n('AvGt'),
        s = n('Qean'),
        a = i(''.charAt),
        c = i(''.charCodeAt),
        l = i(''.slice),
        h = function (t) {
          return function (e, n) {
            var i,
              h,
              u = o(s(e)),
              f = r(n),
              d = u.length;
            return f < 0 || f >= d
              ? t
                ? ''
                : void 0
              : (i = c(u, f)) < 55296 ||
                i > 56319 ||
                f + 1 === d ||
                (h = c(u, f + 1)) < 56320 ||
                h > 57343
              ? t
                ? a(u, f)
                : i
              : t
              ? l(u, f, f + 2)
              : h - 56320 + ((i - 55296) << 10) + 65536;
          };
        };
      t.exports = { codeAt: h(!1), charAt: h(!0) };
    },
    zf4f: function (t, e, n) {
      'use strict';
      var i = n('ovh1'),
        r = n('aECo'),
        o = n('vMO2'),
        s = n('fwl+'),
        a = n('h1Um'),
        c = n('xSFS'),
        l = n('cON5'),
        h = n('9FbL'),
        u = n('tqms'),
        f = n('pvzg'),
        d = n('vGr9');
      t.exports = function (t) {
        return new Promise(function (e, n) {
          var p,
            g = t.data,
            m = t.headers,
            v = t.responseType;
          function y() {
            t.cancelToken && t.cancelToken.unsubscribe(p),
              t.signal && t.signal.removeEventListener('abort', p);
          }
          i.isFormData(g) &&
            i.isStandardBrowserEnv() &&
            delete m['Content-Type'];
          var x = new XMLHttpRequest();
          if (t.auth) {
            var b = t.auth.username || '',
              _ = t.auth.password
                ? unescape(encodeURIComponent(t.auth.password))
                : '';
            m.Authorization = 'Basic ' + btoa(b + ':' + _);
          }
          var w = a(t.baseURL, t.url);
          function k() {
            if (x) {
              var i =
                  'getAllResponseHeaders' in x
                    ? c(x.getAllResponseHeaders())
                    : null,
                o = {
                  data:
                    v && 'text' !== v && 'json' !== v
                      ? x.response
                      : x.responseText,
                  status: x.status,
                  statusText: x.statusText,
                  headers: i,
                  config: t,
                  request: x,
                };
              r(
                function (t) {
                  e(t), y();
                },
                function (t) {
                  n(t), y();
                },
                o,
              ),
                (x = null);
            }
          }
          if (
            (x.open(
              t.method.toUpperCase(),
              s(w, t.params, t.paramsSerializer),
              !0,
            ),
            (x.timeout = t.timeout),
            'onloadend' in x
              ? (x.onloadend = k)
              : (x.onreadystatechange = function () {
                  x &&
                    4 === x.readyState &&
                    (0 !== x.status ||
                      (x.responseURL &&
                        0 === x.responseURL.indexOf('file:'))) &&
                    setTimeout(k);
                }),
            (x.onabort = function () {
              x &&
                (n(new u('Request aborted', u.ECONNABORTED, t, x)), (x = null));
            }),
            (x.onerror = function () {
              n(new u('Network Error', u.ERR_NETWORK, t, x, x)), (x = null);
            }),
            (x.ontimeout = function () {
              var e = t.timeout
                  ? 'timeout of ' + t.timeout + 'ms exceeded'
                  : 'timeout exceeded',
                i = t.transitional || h;
              t.timeoutErrorMessage && (e = t.timeoutErrorMessage),
                n(
                  new u(
                    e,
                    i.clarifyTimeoutError ? u.ETIMEDOUT : u.ECONNABORTED,
                    t,
                    x,
                  ),
                ),
                (x = null);
            }),
            i.isStandardBrowserEnv())
          ) {
            var M =
              (t.withCredentials || l(w)) && t.xsrfCookieName
                ? o.read(t.xsrfCookieName)
                : void 0;
            M && (m[t.xsrfHeaderName] = M);
          }
          'setRequestHeader' in x &&
            i.forEach(m, function (t, e) {
              void 0 === g && 'content-type' === e.toLowerCase()
                ? delete m[e]
                : x.setRequestHeader(e, t);
            }),
            i.isUndefined(t.withCredentials) ||
              (x.withCredentials = !!t.withCredentials),
            v && 'json' !== v && (x.responseType = t.responseType),
            'function' == typeof t.onDownloadProgress &&
              x.addEventListener('progress', t.onDownloadProgress),
            'function' == typeof t.onUploadProgress &&
              x.upload &&
              x.upload.addEventListener('progress', t.onUploadProgress),
            (t.cancelToken || t.signal) &&
              ((p = function (t) {
                x &&
                  (n(!t || (t && t.type) ? new f() : t), x.abort(), (x = null));
              }),
              t.cancelToken && t.cancelToken.subscribe(p),
              t.signal &&
                (t.signal.aborted
                  ? p()
                  : t.signal.addEventListener('abort', p))),
            g || (g = null);
          var P = d(w);
          P && -1 === ['http', 'https', 'file'].indexOf(P)
            ? n(new u('Unsupported protocol ' + P + ':', u.ERR_BAD_REQUEST, t))
            : x.send(g);
        });
      };
    },
    zkTx: function (t, e, n) {
      'use strict';
      (function (t) {
        /*!
         * The buffer module from node.js, for the browser.
         *
         * @author   Feross Aboukhadijeh <http://feross.org>
         * @license  MIT
         */
        var i = n('KlUR'),
          r = n('FaXh'),
          o = n('kah5');
        function s() {
          return c.TYPED_ARRAY_SUPPORT ? 2147483647 : 1073741823;
        }
        function a(t, e) {
          if (s() < e) throw new RangeError('Invalid typed array length');
          return (
            c.TYPED_ARRAY_SUPPORT
              ? ((t = new Uint8Array(e)).__proto__ = c.prototype)
              : (null === t && (t = new c(e)), (t.length = e)),
            t
          );
        }
        function c(t, e, n) {
          if (!(c.TYPED_ARRAY_SUPPORT || this instanceof c))
            return new c(t, e, n);
          if ('number' == typeof t) {
            if ('string' == typeof e)
              throw new Error(
                'If encoding is specified then the first argument must be a string',
              );
            return u(this, t);
          }
          return l(this, t, e, n);
        }
        function l(t, e, n, i) {
          if ('number' == typeof e)
            throw new TypeError('"value" argument must not be a number');
          return 'undefined' != typeof ArrayBuffer && e instanceof ArrayBuffer
            ? (function (t, e, n, i) {
                if ((e.byteLength, n < 0 || e.byteLength < n))
                  throw new RangeError("'offset' is out of bounds");
                if (e.byteLength < n + (i || 0))
                  throw new RangeError("'length' is out of bounds");
                e =
                  void 0 === n && void 0 === i
                    ? new Uint8Array(e)
                    : void 0 === i
                    ? new Uint8Array(e, n)
                    : new Uint8Array(e, n, i);
                c.TYPED_ARRAY_SUPPORT
                  ? ((t = e).__proto__ = c.prototype)
                  : (t = f(t, e));
                return t;
              })(t, e, n, i)
            : 'string' == typeof e
            ? (function (t, e, n) {
                ('string' == typeof n && '' !== n) || (n = 'utf8');
                if (!c.isEncoding(n))
                  throw new TypeError(
                    '"encoding" must be a valid string encoding',
                  );
                var i = 0 | p(e, n),
                  r = (t = a(t, i)).write(e, n);
                r !== i && (t = t.slice(0, r));
                return t;
              })(t, e, n)
            : (function (t, e) {
                if (c.isBuffer(e)) {
                  var n = 0 | d(e.length);
                  return 0 === (t = a(t, n)).length || e.copy(t, 0, 0, n), t;
                }
                if (e) {
                  if (
                    ('undefined' != typeof ArrayBuffer &&
                      e.buffer instanceof ArrayBuffer) ||
                    'length' in e
                  )
                    return 'number' != typeof e.length || (i = e.length) != i
                      ? a(t, 0)
                      : f(t, e);
                  if ('Buffer' === e.type && o(e.data)) return f(t, e.data);
                }
                var i;
                throw new TypeError(
                  'First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.',
                );
              })(t, e);
        }
        function h(t) {
          if ('number' != typeof t)
            throw new TypeError('"size" argument must be a number');
          if (t < 0)
            throw new RangeError('"size" argument must not be negative');
        }
        function u(t, e) {
          if ((h(e), (t = a(t, e < 0 ? 0 : 0 | d(e))), !c.TYPED_ARRAY_SUPPORT))
            for (var n = 0; n < e; ++n) t[n] = 0;
          return t;
        }
        function f(t, e) {
          var n = e.length < 0 ? 0 : 0 | d(e.length);
          t = a(t, n);
          for (var i = 0; i < n; i += 1) t[i] = 255 & e[i];
          return t;
        }
        function d(t) {
          if (t >= s())
            throw new RangeError(
              'Attempt to allocate Buffer larger than maximum size: 0x' +
                s().toString(16) +
                ' bytes',
            );
          return 0 | t;
        }
        function p(t, e) {
          if (c.isBuffer(t)) return t.length;
          if (
            'undefined' != typeof ArrayBuffer &&
            'function' == typeof ArrayBuffer.isView &&
            (ArrayBuffer.isView(t) || t instanceof ArrayBuffer)
          )
            return t.byteLength;
          'string' != typeof t && (t = '' + t);
          var n = t.length;
          if (0 === n) return 0;
          for (var i = !1; ; )
            switch (e) {
              case 'ascii':
              case 'latin1':
              case 'binary':
                return n;
              case 'utf8':
              case 'utf-8':
              case void 0:
                return B(t).length;
              case 'ucs2':
              case 'ucs-2':
              case 'utf16le':
              case 'utf-16le':
                return 2 * n;
              case 'hex':
                return n >>> 1;
              case 'base64':
                return z(t).length;
              default:
                if (i) return B(t).length;
                (e = ('' + e).toLowerCase()), (i = !0);
            }
        }
        function g(t, e, n) {
          var i = !1;
          if (((void 0 === e || e < 0) && (e = 0), e > this.length)) return '';
          if (((void 0 === n || n > this.length) && (n = this.length), n <= 0))
            return '';
          if ((n >>>= 0) <= (e >>>= 0)) return '';
          for (t || (t = 'utf8'); ; )
            switch (t) {
              case 'hex':
                return T(this, e, n);
              case 'utf8':
              case 'utf-8':
                return O(this, e, n);
              case 'ascii':
                return E(this, e, n);
              case 'latin1':
              case 'binary':
                return S(this, e, n);
              case 'base64':
                return P(this, e, n);
              case 'ucs2':
              case 'ucs-2':
              case 'utf16le':
              case 'utf-16le':
                return A(this, e, n);
              default:
                if (i) throw new TypeError('Unknown encoding: ' + t);
                (t = (t + '').toLowerCase()), (i = !0);
            }
        }
        function m(t, e, n) {
          var i = t[e];
          (t[e] = t[n]), (t[n] = i);
        }
        function v(t, e, n, i, r) {
          if (0 === t.length) return -1;
          if (
            ('string' == typeof n
              ? ((i = n), (n = 0))
              : n > 2147483647
              ? (n = 2147483647)
              : n < -2147483648 && (n = -2147483648),
            (n = +n),
            isNaN(n) && (n = r ? 0 : t.length - 1),
            n < 0 && (n = t.length + n),
            n >= t.length)
          ) {
            if (r) return -1;
            n = t.length - 1;
          } else if (n < 0) {
            if (!r) return -1;
            n = 0;
          }
          if (('string' == typeof e && (e = c.from(e, i)), c.isBuffer(e)))
            return 0 === e.length ? -1 : y(t, e, n, i, r);
          if ('number' == typeof e)
            return (
              (e &= 255),
              c.TYPED_ARRAY_SUPPORT &&
              'function' == typeof Uint8Array.prototype.indexOf
                ? r
                  ? Uint8Array.prototype.indexOf.call(t, e, n)
                  : Uint8Array.prototype.lastIndexOf.call(t, e, n)
                : y(t, [e], n, i, r)
            );
          throw new TypeError('val must be string, number or Buffer');
        }
        function y(t, e, n, i, r) {
          var o,
            s = 1,
            a = t.length,
            c = e.length;
          if (
            void 0 !== i &&
            ('ucs2' === (i = String(i).toLowerCase()) ||
              'ucs-2' === i ||
              'utf16le' === i ||
              'utf-16le' === i)
          ) {
            if (t.length < 2 || e.length < 2) return -1;
            (s = 2), (a /= 2), (c /= 2), (n /= 2);
          }
          function l(t, e) {
            return 1 === s ? t[e] : t.readUInt16BE(e * s);
          }
          if (r) {
            var h = -1;
            for (o = n; o < a; o++)
              if (l(t, o) === l(e, -1 === h ? 0 : o - h)) {
                if ((-1 === h && (h = o), o - h + 1 === c)) return h * s;
              } else -1 !== h && (o -= o - h), (h = -1);
          } else
            for (n + c > a && (n = a - c), o = n; o >= 0; o--) {
              for (var u = !0, f = 0; f < c; f++)
                if (l(t, o + f) !== l(e, f)) {
                  u = !1;
                  break;
                }
              if (u) return o;
            }
          return -1;
        }
        function x(t, e, n, i) {
          n = Number(n) || 0;
          var r = t.length - n;
          i ? (i = Number(i)) > r && (i = r) : (i = r);
          var o = e.length;
          if (o % 2 != 0) throw new TypeError('Invalid hex string');
          i > o / 2 && (i = o / 2);
          for (var s = 0; s < i; ++s) {
            var a = parseInt(e.substr(2 * s, 2), 16);
            if (isNaN(a)) return s;
            t[n + s] = a;
          }
          return s;
        }
        function b(t, e, n, i) {
          return H(B(e, t.length - n), t, n, i);
        }
        function _(t, e, n, i) {
          return H(
            (function (t) {
              for (var e = [], n = 0; n < t.length; ++n)
                e.push(255 & t.charCodeAt(n));
              return e;
            })(e),
            t,
            n,
            i,
          );
        }
        function w(t, e, n, i) {
          return _(t, e, n, i);
        }
        function k(t, e, n, i) {
          return H(z(e), t, n, i);
        }
        function M(t, e, n, i) {
          return H(
            (function (t, e) {
              for (
                var n, i, r, o = [], s = 0;
                s < t.length && !((e -= 2) < 0);
                ++s
              )
                (n = t.charCodeAt(s)),
                  (i = n >> 8),
                  (r = n % 256),
                  o.push(r),
                  o.push(i);
              return o;
            })(e, t.length - n),
            t,
            n,
            i,
          );
        }
        function P(t, e, n) {
          return 0 === e && n === t.length
            ? i.fromByteArray(t)
            : i.fromByteArray(t.slice(e, n));
        }
        function O(t, e, n) {
          n = Math.min(t.length, n);
          for (var i = [], r = e; r < n; ) {
            var o,
              s,
              a,
              c,
              l = t[r],
              h = null,
              u = l > 239 ? 4 : l > 223 ? 3 : l > 191 ? 2 : 1;
            if (r + u <= n)
              switch (u) {
                case 1:
                  l < 128 && (h = l);
                  break;
                case 2:
                  128 == (192 & (o = t[r + 1])) &&
                    (c = ((31 & l) << 6) | (63 & o)) > 127 &&
                    (h = c);
                  break;
                case 3:
                  (o = t[r + 1]),
                    (s = t[r + 2]),
                    128 == (192 & o) &&
                      128 == (192 & s) &&
                      (c = ((15 & l) << 12) | ((63 & o) << 6) | (63 & s)) >
                        2047 &&
                      (c < 55296 || c > 57343) &&
                      (h = c);
                  break;
                case 4:
                  (o = t[r + 1]),
                    (s = t[r + 2]),
                    (a = t[r + 3]),
                    128 == (192 & o) &&
                      128 == (192 & s) &&
                      128 == (192 & a) &&
                      (c =
                        ((15 & l) << 18) |
                        ((63 & o) << 12) |
                        ((63 & s) << 6) |
                        (63 & a)) > 65535 &&
                      c < 1114112 &&
                      (h = c);
              }
            null === h
              ? ((h = 65533), (u = 1))
              : h > 65535 &&
                ((h -= 65536),
                i.push(((h >>> 10) & 1023) | 55296),
                (h = 56320 | (1023 & h))),
              i.push(h),
              (r += u);
          }
          return (function (t) {
            var e = t.length;
            if (e <= 4096) return String.fromCharCode.apply(String, t);
            var n = '',
              i = 0;
            for (; i < e; )
              n += String.fromCharCode.apply(String, t.slice(i, (i += 4096)));
            return n;
          })(i);
        }
        (e.Buffer = c),
          (e.SlowBuffer = function (t) {
            +t != t && (t = 0);
            return c.alloc(+t);
          }),
          (e.INSPECT_MAX_BYTES = 50),
          (c.TYPED_ARRAY_SUPPORT =
            void 0 !== t.TYPED_ARRAY_SUPPORT
              ? t.TYPED_ARRAY_SUPPORT
              : (function () {
                  try {
                    var t = new Uint8Array(1);
                    return (
                      (t.__proto__ = {
                        __proto__: Uint8Array.prototype,
                        foo: function () {
                          return 42;
                        },
                      }),
                      42 === t.foo() &&
                        'function' == typeof t.subarray &&
                        0 === t.subarray(1, 1).byteLength
                    );
                  } catch (t) {
                    return !1;
                  }
                })()),
          (e.kMaxLength = s()),
          (c.poolSize = 8192),
          (c._augment = function (t) {
            return (t.__proto__ = c.prototype), t;
          }),
          (c.from = function (t, e, n) {
            return l(null, t, e, n);
          }),
          c.TYPED_ARRAY_SUPPORT &&
            ((c.prototype.__proto__ = Uint8Array.prototype),
            (c.__proto__ = Uint8Array),
            'undefined' != typeof Symbol &&
              Symbol.species &&
              c[Symbol.species] === c &&
              Object.defineProperty(c, Symbol.species, {
                value: null,
                configurable: !0,
              })),
          (c.alloc = function (t, e, n) {
            return (function (t, e, n, i) {
              return (
                h(e),
                e <= 0
                  ? a(t, e)
                  : void 0 !== n
                  ? 'string' == typeof i
                    ? a(t, e).fill(n, i)
                    : a(t, e).fill(n)
                  : a(t, e)
              );
            })(null, t, e, n);
          }),
          (c.allocUnsafe = function (t) {
            return u(null, t);
          }),
          (c.allocUnsafeSlow = function (t) {
            return u(null, t);
          }),
          (c.isBuffer = function (t) {
            return !(null == t || !t._isBuffer);
          }),
          (c.compare = function (t, e) {
            if (!c.isBuffer(t) || !c.isBuffer(e))
              throw new TypeError('Arguments must be Buffers');
            if (t === e) return 0;
            for (
              var n = t.length, i = e.length, r = 0, o = Math.min(n, i);
              r < o;
              ++r
            )
              if (t[r] !== e[r]) {
                (n = t[r]), (i = e[r]);
                break;
              }
            return n < i ? -1 : i < n ? 1 : 0;
          }),
          (c.isEncoding = function (t) {
            switch (String(t).toLowerCase()) {
              case 'hex':
              case 'utf8':
              case 'utf-8':
              case 'ascii':
              case 'latin1':
              case 'binary':
              case 'base64':
              case 'ucs2':
              case 'ucs-2':
              case 'utf16le':
              case 'utf-16le':
                return !0;
              default:
                return !1;
            }
          }),
          (c.concat = function (t, e) {
            if (!o(t))
              throw new TypeError(
                '"list" argument must be an Array of Buffers',
              );
            if (0 === t.length) return c.alloc(0);
            var n;
            if (void 0 === e)
              for (e = 0, n = 0; n < t.length; ++n) e += t[n].length;
            var i = c.allocUnsafe(e),
              r = 0;
            for (n = 0; n < t.length; ++n) {
              var s = t[n];
              if (!c.isBuffer(s))
                throw new TypeError(
                  '"list" argument must be an Array of Buffers',
                );
              s.copy(i, r), (r += s.length);
            }
            return i;
          }),
          (c.byteLength = p),
          (c.prototype._isBuffer = !0),
          (c.prototype.swap16 = function () {
            var t = this.length;
            if (t % 2 != 0)
              throw new RangeError('Buffer size must be a multiple of 16-bits');
            for (var e = 0; e < t; e += 2) m(this, e, e + 1);
            return this;
          }),
          (c.prototype.swap32 = function () {
            var t = this.length;
            if (t % 4 != 0)
              throw new RangeError('Buffer size must be a multiple of 32-bits');
            for (var e = 0; e < t; e += 4)
              m(this, e, e + 3), m(this, e + 1, e + 2);
            return this;
          }),
          (c.prototype.swap64 = function () {
            var t = this.length;
            if (t % 8 != 0)
              throw new RangeError('Buffer size must be a multiple of 64-bits');
            for (var e = 0; e < t; e += 8)
              m(this, e, e + 7),
                m(this, e + 1, e + 6),
                m(this, e + 2, e + 5),
                m(this, e + 3, e + 4);
            return this;
          }),
          (c.prototype.toString = function () {
            var t = 0 | this.length;
            return 0 === t
              ? ''
              : 0 === arguments.length
              ? O(this, 0, t)
              : g.apply(this, arguments);
          }),
          (c.prototype.equals = function (t) {
            if (!c.isBuffer(t))
              throw new TypeError('Argument must be a Buffer');
            return this === t || 0 === c.compare(this, t);
          }),
          (c.prototype.inspect = function () {
            var t = '',
              n = e.INSPECT_MAX_BYTES;
            return (
              this.length > 0 &&
                ((t = this.toString('hex', 0, n).match(/.{2}/g).join(' ')),
                this.length > n && (t += ' ... ')),
              '<Buffer ' + t + '>'
            );
          }),
          (c.prototype.compare = function (t, e, n, i, r) {
            if (!c.isBuffer(t))
              throw new TypeError('Argument must be a Buffer');
            if (
              (void 0 === e && (e = 0),
              void 0 === n && (n = t ? t.length : 0),
              void 0 === i && (i = 0),
              void 0 === r && (r = this.length),
              e < 0 || n > t.length || i < 0 || r > this.length)
            )
              throw new RangeError('out of range index');
            if (i >= r && e >= n) return 0;
            if (i >= r) return -1;
            if (e >= n) return 1;
            if (this === t) return 0;
            for (
              var o = (r >>>= 0) - (i >>>= 0),
                s = (n >>>= 0) - (e >>>= 0),
                a = Math.min(o, s),
                l = this.slice(i, r),
                h = t.slice(e, n),
                u = 0;
              u < a;
              ++u
            )
              if (l[u] !== h[u]) {
                (o = l[u]), (s = h[u]);
                break;
              }
            return o < s ? -1 : s < o ? 1 : 0;
          }),
          (c.prototype.includes = function (t, e, n) {
            return -1 !== this.indexOf(t, e, n);
          }),
          (c.prototype.indexOf = function (t, e, n) {
            return v(this, t, e, n, !0);
          }),
          (c.prototype.lastIndexOf = function (t, e, n) {
            return v(this, t, e, n, !1);
          }),
          (c.prototype.write = function (t, e, n, i) {
            if (void 0 === e) (i = 'utf8'), (n = this.length), (e = 0);
            else if (void 0 === n && 'string' == typeof e)
              (i = e), (n = this.length), (e = 0);
            else {
              if (!isFinite(e))
                throw new Error(
                  'Buffer.write(string, encoding, offset[, length]) is no longer supported',
                );
              (e |= 0),
                isFinite(n)
                  ? ((n |= 0), void 0 === i && (i = 'utf8'))
                  : ((i = n), (n = void 0));
            }
            var r = this.length - e;
            if (
              ((void 0 === n || n > r) && (n = r),
              (t.length > 0 && (n < 0 || e < 0)) || e > this.length)
            )
              throw new RangeError('Attempt to write outside buffer bounds');
            i || (i = 'utf8');
            for (var o = !1; ; )
              switch (i) {
                case 'hex':
                  return x(this, t, e, n);
                case 'utf8':
                case 'utf-8':
                  return b(this, t, e, n);
                case 'ascii':
                  return _(this, t, e, n);
                case 'latin1':
                case 'binary':
                  return w(this, t, e, n);
                case 'base64':
                  return k(this, t, e, n);
                case 'ucs2':
                case 'ucs-2':
                case 'utf16le':
                case 'utf-16le':
                  return M(this, t, e, n);
                default:
                  if (o) throw new TypeError('Unknown encoding: ' + i);
                  (i = ('' + i).toLowerCase()), (o = !0);
              }
          }),
          (c.prototype.toJSON = function () {
            return {
              type: 'Buffer',
              data: Array.prototype.slice.call(this._arr || this, 0),
            };
          });
        function E(t, e, n) {
          var i = '';
          n = Math.min(t.length, n);
          for (var r = e; r < n; ++r) i += String.fromCharCode(127 & t[r]);
          return i;
        }
        function S(t, e, n) {
          var i = '';
          n = Math.min(t.length, n);
          for (var r = e; r < n; ++r) i += String.fromCharCode(t[r]);
          return i;
        }
        function T(t, e, n) {
          var i = t.length;
          (!e || e < 0) && (e = 0), (!n || n < 0 || n > i) && (n = i);
          for (var r = '', o = e; o < n; ++o) r += F(t[o]);
          return r;
        }
        function A(t, e, n) {
          for (var i = t.slice(e, n), r = '', o = 0; o < i.length; o += 2)
            r += String.fromCharCode(i[o] + 256 * i[o + 1]);
          return r;
        }
        function C(t, e, n) {
          if (t % 1 != 0 || t < 0) throw new RangeError('offset is not uint');
          if (t + e > n)
            throw new RangeError('Trying to access beyond buffer length');
        }
        function R(t, e, n, i, r, o) {
          if (!c.isBuffer(t))
            throw new TypeError('"buffer" argument must be a Buffer instance');
          if (e > r || e < o)
            throw new RangeError('"value" argument is out of bounds');
          if (n + i > t.length) throw new RangeError('Index out of range');
        }
        function D(t, e, n, i) {
          e < 0 && (e = 65535 + e + 1);
          for (var r = 0, o = Math.min(t.length - n, 2); r < o; ++r)
            t[n + r] =
              (e & (255 << (8 * (i ? r : 1 - r)))) >>> (8 * (i ? r : 1 - r));
        }
        function L(t, e, n, i) {
          e < 0 && (e = 4294967295 + e + 1);
          for (var r = 0, o = Math.min(t.length - n, 4); r < o; ++r)
            t[n + r] = (e >>> (8 * (i ? r : 3 - r))) & 255;
        }
        function I(t, e, n, i, r, o) {
          if (n + i > t.length) throw new RangeError('Index out of range');
          if (n < 0) throw new RangeError('Index out of range');
        }
        function j(t, e, n, i, o) {
          return o || I(t, 0, n, 4), r.write(t, e, n, i, 23, 4), n + 4;
        }
        function $(t, e, n, i, o) {
          return o || I(t, 0, n, 8), r.write(t, e, n, i, 52, 8), n + 8;
        }
        (c.prototype.slice = function (t, e) {
          var n,
            i = this.length;
          if (
            ((t = ~~t) < 0 ? (t += i) < 0 && (t = 0) : t > i && (t = i),
            (e = void 0 === e ? i : ~~e) < 0
              ? (e += i) < 0 && (e = 0)
              : e > i && (e = i),
            e < t && (e = t),
            c.TYPED_ARRAY_SUPPORT)
          )
            (n = this.subarray(t, e)).__proto__ = c.prototype;
          else {
            var r = e - t;
            n = new c(r, void 0);
            for (var o = 0; o < r; ++o) n[o] = this[o + t];
          }
          return n;
        }),
          (c.prototype.readUIntLE = function (t, e, n) {
            (t |= 0), (e |= 0), n || C(t, e, this.length);
            for (var i = this[t], r = 1, o = 0; ++o < e && (r *= 256); )
              i += this[t + o] * r;
            return i;
          }),
          (c.prototype.readUIntBE = function (t, e, n) {
            (t |= 0), (e |= 0), n || C(t, e, this.length);
            for (var i = this[t + --e], r = 1; e > 0 && (r *= 256); )
              i += this[t + --e] * r;
            return i;
          }),
          (c.prototype.readUInt8 = function (t, e) {
            return e || C(t, 1, this.length), this[t];
          }),
          (c.prototype.readUInt16LE = function (t, e) {
            return e || C(t, 2, this.length), this[t] | (this[t + 1] << 8);
          }),
          (c.prototype.readUInt16BE = function (t, e) {
            return e || C(t, 2, this.length), (this[t] << 8) | this[t + 1];
          }),
          (c.prototype.readUInt32LE = function (t, e) {
            return (
              e || C(t, 4, this.length),
              (this[t] | (this[t + 1] << 8) | (this[t + 2] << 16)) +
                16777216 * this[t + 3]
            );
          }),
          (c.prototype.readUInt32BE = function (t, e) {
            return (
              e || C(t, 4, this.length),
              16777216 * this[t] +
                ((this[t + 1] << 16) | (this[t + 2] << 8) | this[t + 3])
            );
          }),
          (c.prototype.readIntLE = function (t, e, n) {
            (t |= 0), (e |= 0), n || C(t, e, this.length);
            for (var i = this[t], r = 1, o = 0; ++o < e && (r *= 256); )
              i += this[t + o] * r;
            return i >= (r *= 128) && (i -= Math.pow(2, 8 * e)), i;
          }),
          (c.prototype.readIntBE = function (t, e, n) {
            (t |= 0), (e |= 0), n || C(t, e, this.length);
            for (var i = e, r = 1, o = this[t + --i]; i > 0 && (r *= 256); )
              o += this[t + --i] * r;
            return o >= (r *= 128) && (o -= Math.pow(2, 8 * e)), o;
          }),
          (c.prototype.readInt8 = function (t, e) {
            return (
              e || C(t, 1, this.length),
              128 & this[t] ? -1 * (255 - this[t] + 1) : this[t]
            );
          }),
          (c.prototype.readInt16LE = function (t, e) {
            e || C(t, 2, this.length);
            var n = this[t] | (this[t + 1] << 8);
            return 32768 & n ? 4294901760 | n : n;
          }),
          (c.prototype.readInt16BE = function (t, e) {
            e || C(t, 2, this.length);
            var n = this[t + 1] | (this[t] << 8);
            return 32768 & n ? 4294901760 | n : n;
          }),
          (c.prototype.readInt32LE = function (t, e) {
            return (
              e || C(t, 4, this.length),
              this[t] |
                (this[t + 1] << 8) |
                (this[t + 2] << 16) |
                (this[t + 3] << 24)
            );
          }),
          (c.prototype.readInt32BE = function (t, e) {
            return (
              e || C(t, 4, this.length),
              (this[t] << 24) |
                (this[t + 1] << 16) |
                (this[t + 2] << 8) |
                this[t + 3]
            );
          }),
          (c.prototype.readFloatLE = function (t, e) {
            return e || C(t, 4, this.length), r.read(this, t, !0, 23, 4);
          }),
          (c.prototype.readFloatBE = function (t, e) {
            return e || C(t, 4, this.length), r.read(this, t, !1, 23, 4);
          }),
          (c.prototype.readDoubleLE = function (t, e) {
            return e || C(t, 8, this.length), r.read(this, t, !0, 52, 8);
          }),
          (c.prototype.readDoubleBE = function (t, e) {
            return e || C(t, 8, this.length), r.read(this, t, !1, 52, 8);
          }),
          (c.prototype.writeUIntLE = function (t, e, n, i) {
            ((t = +t), (e |= 0), (n |= 0), i) ||
              R(this, t, e, n, Math.pow(2, 8 * n) - 1, 0);
            var r = 1,
              o = 0;
            for (this[e] = 255 & t; ++o < n && (r *= 256); )
              this[e + o] = (t / r) & 255;
            return e + n;
          }),
          (c.prototype.writeUIntBE = function (t, e, n, i) {
            ((t = +t), (e |= 0), (n |= 0), i) ||
              R(this, t, e, n, Math.pow(2, 8 * n) - 1, 0);
            var r = n - 1,
              o = 1;
            for (this[e + r] = 255 & t; --r >= 0 && (o *= 256); )
              this[e + r] = (t / o) & 255;
            return e + n;
          }),
          (c.prototype.writeUInt8 = function (t, e, n) {
            return (
              (t = +t),
              (e |= 0),
              n || R(this, t, e, 1, 255, 0),
              c.TYPED_ARRAY_SUPPORT || (t = Math.floor(t)),
              (this[e] = 255 & t),
              e + 1
            );
          }),
          (c.prototype.writeUInt16LE = function (t, e, n) {
            return (
              (t = +t),
              (e |= 0),
              n || R(this, t, e, 2, 65535, 0),
              c.TYPED_ARRAY_SUPPORT
                ? ((this[e] = 255 & t), (this[e + 1] = t >>> 8))
                : D(this, t, e, !0),
              e + 2
            );
          }),
          (c.prototype.writeUInt16BE = function (t, e, n) {
            return (
              (t = +t),
              (e |= 0),
              n || R(this, t, e, 2, 65535, 0),
              c.TYPED_ARRAY_SUPPORT
                ? ((this[e] = t >>> 8), (this[e + 1] = 255 & t))
                : D(this, t, e, !1),
              e + 2
            );
          }),
          (c.prototype.writeUInt32LE = function (t, e, n) {
            return (
              (t = +t),
              (e |= 0),
              n || R(this, t, e, 4, 4294967295, 0),
              c.TYPED_ARRAY_SUPPORT
                ? ((this[e + 3] = t >>> 24),
                  (this[e + 2] = t >>> 16),
                  (this[e + 1] = t >>> 8),
                  (this[e] = 255 & t))
                : L(this, t, e, !0),
              e + 4
            );
          }),
          (c.prototype.writeUInt32BE = function (t, e, n) {
            return (
              (t = +t),
              (e |= 0),
              n || R(this, t, e, 4, 4294967295, 0),
              c.TYPED_ARRAY_SUPPORT
                ? ((this[e] = t >>> 24),
                  (this[e + 1] = t >>> 16),
                  (this[e + 2] = t >>> 8),
                  (this[e + 3] = 255 & t))
                : L(this, t, e, !1),
              e + 4
            );
          }),
          (c.prototype.writeIntLE = function (t, e, n, i) {
            if (((t = +t), (e |= 0), !i)) {
              var r = Math.pow(2, 8 * n - 1);
              R(this, t, e, n, r - 1, -r);
            }
            var o = 0,
              s = 1,
              a = 0;
            for (this[e] = 255 & t; ++o < n && (s *= 256); )
              t < 0 && 0 === a && 0 !== this[e + o - 1] && (a = 1),
                (this[e + o] = (((t / s) >> 0) - a) & 255);
            return e + n;
          }),
          (c.prototype.writeIntBE = function (t, e, n, i) {
            if (((t = +t), (e |= 0), !i)) {
              var r = Math.pow(2, 8 * n - 1);
              R(this, t, e, n, r - 1, -r);
            }
            var o = n - 1,
              s = 1,
              a = 0;
            for (this[e + o] = 255 & t; --o >= 0 && (s *= 256); )
              t < 0 && 0 === a && 0 !== this[e + o + 1] && (a = 1),
                (this[e + o] = (((t / s) >> 0) - a) & 255);
            return e + n;
          }),
          (c.prototype.writeInt8 = function (t, e, n) {
            return (
              (t = +t),
              (e |= 0),
              n || R(this, t, e, 1, 127, -128),
              c.TYPED_ARRAY_SUPPORT || (t = Math.floor(t)),
              t < 0 && (t = 255 + t + 1),
              (this[e] = 255 & t),
              e + 1
            );
          }),
          (c.prototype.writeInt16LE = function (t, e, n) {
            return (
              (t = +t),
              (e |= 0),
              n || R(this, t, e, 2, 32767, -32768),
              c.TYPED_ARRAY_SUPPORT
                ? ((this[e] = 255 & t), (this[e + 1] = t >>> 8))
                : D(this, t, e, !0),
              e + 2
            );
          }),
          (c.prototype.writeInt16BE = function (t, e, n) {
            return (
              (t = +t),
              (e |= 0),
              n || R(this, t, e, 2, 32767, -32768),
              c.TYPED_ARRAY_SUPPORT
                ? ((this[e] = t >>> 8), (this[e + 1] = 255 & t))
                : D(this, t, e, !1),
              e + 2
            );
          }),
          (c.prototype.writeInt32LE = function (t, e, n) {
            return (
              (t = +t),
              (e |= 0),
              n || R(this, t, e, 4, 2147483647, -2147483648),
              c.TYPED_ARRAY_SUPPORT
                ? ((this[e] = 255 & t),
                  (this[e + 1] = t >>> 8),
                  (this[e + 2] = t >>> 16),
                  (this[e + 3] = t >>> 24))
                : L(this, t, e, !0),
              e + 4
            );
          }),
          (c.prototype.writeInt32BE = function (t, e, n) {
            return (
              (t = +t),
              (e |= 0),
              n || R(this, t, e, 4, 2147483647, -2147483648),
              t < 0 && (t = 4294967295 + t + 1),
              c.TYPED_ARRAY_SUPPORT
                ? ((this[e] = t >>> 24),
                  (this[e + 1] = t >>> 16),
                  (this[e + 2] = t >>> 8),
                  (this[e + 3] = 255 & t))
                : L(this, t, e, !1),
              e + 4
            );
          }),
          (c.prototype.writeFloatLE = function (t, e, n) {
            return j(this, t, e, !0, n);
          }),
          (c.prototype.writeFloatBE = function (t, e, n) {
            return j(this, t, e, !1, n);
          }),
          (c.prototype.writeDoubleLE = function (t, e, n) {
            return $(this, t, e, !0, n);
          }),
          (c.prototype.writeDoubleBE = function (t, e, n) {
            return $(this, t, e, !1, n);
          }),
          (c.prototype.copy = function (t, e, n, i) {
            if (
              (n || (n = 0),
              i || 0 === i || (i = this.length),
              e >= t.length && (e = t.length),
              e || (e = 0),
              i > 0 && i < n && (i = n),
              i === n)
            )
              return 0;
            if (0 === t.length || 0 === this.length) return 0;
            if (e < 0) throw new RangeError('targetStart out of bounds');
            if (n < 0 || n >= this.length)
              throw new RangeError('sourceStart out of bounds');
            if (i < 0) throw new RangeError('sourceEnd out of bounds');
            i > this.length && (i = this.length),
              t.length - e < i - n && (i = t.length - e + n);
            var r,
              o = i - n;
            if (this === t && n < e && e < i)
              for (r = o - 1; r >= 0; --r) t[r + e] = this[r + n];
            else if (o < 1e3 || !c.TYPED_ARRAY_SUPPORT)
              for (r = 0; r < o; ++r) t[r + e] = this[r + n];
            else Uint8Array.prototype.set.call(t, this.subarray(n, n + o), e);
            return o;
          }),
          (c.prototype.fill = function (t, e, n, i) {
            if ('string' == typeof t) {
              if (
                ('string' == typeof e
                  ? ((i = e), (e = 0), (n = this.length))
                  : 'string' == typeof n && ((i = n), (n = this.length)),
                1 === t.length)
              ) {
                var r = t.charCodeAt(0);
                r < 256 && (t = r);
              }
              if (void 0 !== i && 'string' != typeof i)
                throw new TypeError('encoding must be a string');
              if ('string' == typeof i && !c.isEncoding(i))
                throw new TypeError('Unknown encoding: ' + i);
            } else 'number' == typeof t && (t &= 255);
            if (e < 0 || this.length < e || this.length < n)
              throw new RangeError('Out of range index');
            if (n <= e) return this;
            var o;
            if (
              ((e >>>= 0),
              (n = void 0 === n ? this.length : n >>> 0),
              t || (t = 0),
              'number' == typeof t)
            )
              for (o = e; o < n; ++o) this[o] = t;
            else {
              var s = c.isBuffer(t) ? t : B(new c(t, i).toString()),
                a = s.length;
              for (o = 0; o < n - e; ++o) this[o + e] = s[o % a];
            }
            return this;
          });
        var N = /[^+\/0-9A-Za-z-_]/g;
        function F(t) {
          return t < 16 ? '0' + t.toString(16) : t.toString(16);
        }
        function B(t, e) {
          var n;
          e = e || 1 / 0;
          for (var i = t.length, r = null, o = [], s = 0; s < i; ++s) {
            if ((n = t.charCodeAt(s)) > 55295 && n < 57344) {
              if (!r) {
                if (n > 56319) {
                  (e -= 3) > -1 && o.push(239, 191, 189);
                  continue;
                }
                if (s + 1 === i) {
                  (e -= 3) > -1 && o.push(239, 191, 189);
                  continue;
                }
                r = n;
                continue;
              }
              if (n < 56320) {
                (e -= 3) > -1 && o.push(239, 191, 189), (r = n);
                continue;
              }
              n = 65536 + (((r - 55296) << 10) | (n - 56320));
            } else r && (e -= 3) > -1 && o.push(239, 191, 189);
            if (((r = null), n < 128)) {
              if ((e -= 1) < 0) break;
              o.push(n);
            } else if (n < 2048) {
              if ((e -= 2) < 0) break;
              o.push((n >> 6) | 192, (63 & n) | 128);
            } else if (n < 65536) {
              if ((e -= 3) < 0) break;
              o.push((n >> 12) | 224, ((n >> 6) & 63) | 128, (63 & n) | 128);
            } else {
              if (!(n < 1114112)) throw new Error('Invalid code point');
              if ((e -= 4) < 0) break;
              o.push(
                (n >> 18) | 240,
                ((n >> 12) & 63) | 128,
                ((n >> 6) & 63) | 128,
                (63 & n) | 128,
              );
            }
          }
          return o;
        }
        function z(t) {
          return i.toByteArray(
            (function (t) {
              if (
                (t = (function (t) {
                  return t.trim ? t.trim() : t.replace(/^\s+|\s+$/g, '');
                })(t).replace(N, '')).length < 2
              )
                return '';
              for (; t.length % 4 != 0; ) t += '=';
              return t;
            })(t),
          );
        }
        function H(t, e, n, i) {
          for (var r = 0; r < i && !(r + n >= e.length || r >= t.length); ++r)
            e[r + n] = t[r];
          return r;
        }
      }.call(this, n('pCvA')));
    },
    zrDt: function (t, e, n) {
      var i = n('ZK/t'),
        r = Math.min;
      t.exports = function (t) {
        return t > 0 ? r(i(t), 9007199254740991) : 0;
      };
    },
    ztTQ: function (t, e, n) {
      'use strict';
      var i = n('b3pM'),
        r = n('nRc6'),
        o = n('VSW8');
      t.exports = function (t, e, n) {
        var s = i(e);
        s in t ? r.f(t, s, o(0, n)) : (t[s] = n);
      };
    },
  },
]);
//# sourceMappingURL=vendors.20c2b8ad68008f929ecc.js.map
