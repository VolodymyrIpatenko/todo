(() => {
  'use strict';
  var e = {
      424: (e, n, t) => {
        t.d(n, { Z: () => c });
        var r = t(81),
          o = t.n(r),
          a = t(645),
          i = t.n(a)()(o());
        i.push([
          e.id,
          "body {\n  font-size: 16px;\n  font-family: Arial, Helvetica, sans-serif;\n  margin: 0;\n}\n\n.page {\n  display: flex;\n  height: 100vh;\n  justify-content: center;\n  align-items: center;\n  background: url('https://gromcode.s3.eu-central-1.amazonaws.com/front-end/tools/lesson6/task1/background.jpg');\n}\n",
          '',
        ]);
        const c = i;
      },
      846: (e, n, t) => {
        t.d(n, { Z: () => c });
        var r = t(81),
          o = t.n(r),
          a = t(645),
          i = t.n(a)()(o());
        i.push([
          e.id,
          '.profile {\n  padding: 8px;\n  border-radius: 8px;\n  border: 3px solid #ccc;\n  background-color: #fff;\n\n  &__name {\n    font-size: 18px;\n    font-weight: 700;\n  }\n\n  &__location {\n    opacity: 0.7;\n  }\n}\n',
          '',
        ]);
        const c = i;
      },
      645: e => {
        e.exports = function (e) {
          var n = [];
          return (
            (n.toString = function () {
              return this.map(function (n) {
                var t = '',
                  r = void 0 !== n[5];
                return (
                  n[4] && (t += '@supports ('.concat(n[4], ') {')),
                  n[2] && (t += '@media '.concat(n[2], ' {')),
                  r &&
                    (t += '@layer'.concat(
                      n[5].length > 0 ? ' '.concat(n[5]) : '',
                      ' {',
                    )),
                  (t += e(n)),
                  r && (t += '}'),
                  n[2] && (t += '}'),
                  n[4] && (t += '}'),
                  t
                );
              }).join('');
            }),
            (n.i = function (e, t, r, o, a) {
              'string' == typeof e && (e = [[null, e, void 0]]);
              var i = {};
              if (r)
                for (var c = 0; c < this.length; c++) {
                  var s = this[c][0];
                  null != s && (i[s] = !0);
                }
              for (var l = 0; l < e.length; l++) {
                var u = [].concat(e[l]);
                (r && i[u[0]]) ||
                  (void 0 !== a &&
                    (void 0 === u[5] ||
                      (u[1] = '@layer'
                        .concat(u[5].length > 0 ? ' '.concat(u[5]) : '', ' {')
                        .concat(u[1], '}')),
                    (u[5] = a)),
                  t &&
                    (u[2]
                      ? ((u[1] = '@media '
                          .concat(u[2], ' {')
                          .concat(u[1], '}')),
                        (u[2] = t))
                      : (u[2] = t)),
                  o &&
                    (u[4]
                      ? ((u[1] = '@supports ('
                          .concat(u[4], ') {')
                          .concat(u[1], '}')),
                        (u[4] = o))
                      : (u[4] = ''.concat(o))),
                  n.push(u));
              }
            }),
            n
          );
        };
      },
      81: e => {
        e.exports = function (e) {
          return e[1];
        };
      },
      379: e => {
        var n = [];
        function t(e) {
          for (var t = -1, r = 0; r < n.length; r++)
            if (n[r].identifier === e) {
              t = r;
              break;
            }
          return t;
        }
        function r(e, r) {
          for (var a = {}, i = [], c = 0; c < e.length; c++) {
            var s = e[c],
              l = r.base ? s[0] + r.base : s[0],
              u = a[l] || 0,
              d = ''.concat(l, ' ').concat(u);
            a[l] = u + 1;
            var p = t(d),
              f = {
                css: s[1],
                media: s[2],
                sourceMap: s[3],
                supports: s[4],
                layer: s[5],
              };
            if (-1 !== p) n[p].references++, n[p].updater(f);
            else {
              var v = o(f, r);
              (r.byIndex = c),
                n.splice(c, 0, { identifier: d, updater: v, references: 1 });
            }
            i.push(d);
          }
          return i;
        }
        function o(e, n) {
          var t = n.domAPI(n);
          return (
            t.update(e),
            function (n) {
              if (n) {
                if (
                  n.css === e.css &&
                  n.media === e.media &&
                  n.sourceMap === e.sourceMap &&
                  n.supports === e.supports &&
                  n.layer === e.layer
                )
                  return;
                t.update((e = n));
              } else t.remove();
            }
          );
        }
        e.exports = function (e, o) {
          var a = r((e = e || []), (o = o || {}));
          return function (e) {
            e = e || [];
            for (var i = 0; i < a.length; i++) {
              var c = t(a[i]);
              n[c].references--;
            }
            for (var s = r(e, o), l = 0; l < a.length; l++) {
              var u = t(a[l]);
              0 === n[u].references && (n[u].updater(), n.splice(u, 1));
            }
            a = s;
          };
        };
      },
      569: e => {
        var n = {};
        e.exports = function (e, t) {
          var r = (function (e) {
            if (void 0 === n[e]) {
              var t = document.querySelector(e);
              if (
                window.HTMLIFrameElement &&
                t instanceof window.HTMLIFrameElement
              )
                try {
                  t = t.contentDocument.head;
                } catch (e) {
                  t = null;
                }
              n[e] = t;
            }
            return n[e];
          })(e);
          if (!r)
            throw new Error(
              "Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.",
            );
          r.appendChild(t);
        };
      },
      216: e => {
        e.exports = function (e) {
          var n = document.createElement('style');
          return e.setAttributes(n, e.attributes), e.insert(n, e.options), n;
        };
      },
      565: (e, n, t) => {
        e.exports = function (e) {
          var n = t.nc;
          n && e.setAttribute('nonce', n);
        };
      },
      795: e => {
        e.exports = function (e) {
          var n = e.insertStyleElement(e);
          return {
            update: function (t) {
              !(function (e, n, t) {
                var r = '';
                t.supports && (r += '@supports ('.concat(t.supports, ') {')),
                  t.media && (r += '@media '.concat(t.media, ' {'));
                var o = void 0 !== t.layer;
                o &&
                  (r += '@layer'.concat(
                    t.layer.length > 0 ? ' '.concat(t.layer) : '',
                    ' {',
                  )),
                  (r += t.css),
                  o && (r += '}'),
                  t.media && (r += '}'),
                  t.supports && (r += '}');
                var a = t.sourceMap;
                a &&
                  'undefined' != typeof btoa &&
                  (r +=
                    '\n/*# sourceMappingURL=data:application/json;base64,'.concat(
                      btoa(unescape(encodeURIComponent(JSON.stringify(a)))),
                      ' */',
                    )),
                  n.styleTagTransform(r, e, n.options);
              })(n, e, t);
            },
            remove: function () {
              !(function (e) {
                if (null === e.parentNode) return !1;
                e.parentNode.removeChild(e);
              })(n);
            },
          };
        };
      },
      589: e => {
        e.exports = function (e, n) {
          if (n.styleSheet) n.styleSheet.cssText = e;
          else {
            for (; n.firstChild; ) n.removeChild(n.firstChild);
            n.appendChild(document.createTextNode(e));
          }
        };
      },
    },
    n = {};
  function t(r) {
    var o = n[r];
    if (void 0 !== o) return o.exports;
    var a = (n[r] = { id: r, exports: {} });
    return e[r](a, a.exports, t), a.exports;
  }
  (t.n = e => {
    var n = e && e.__esModule ? () => e.default : () => e;
    return t.d(n, { a: n }), n;
  }),
    (t.d = (e, n) => {
      for (var r in n)
        t.o(n, r) &&
          !t.o(e, r) &&
          Object.defineProperty(e, r, { enumerable: !0, get: n[r] });
    }),
    (t.o = (e, n) => Object.prototype.hasOwnProperty.call(e, n)),
    (t.nc = void 0),
    (() => {
      var e = t(379),
        n = t.n(e),
        r = t(795),
        o = t.n(r),
        a = t(569),
        i = t.n(a),
        c = t(565),
        s = t.n(c),
        l = t(216),
        u = t.n(l),
        d = t(589),
        p = t.n(d),
        f = t(846),
        v = {};
      (v.styleTagTransform = p()),
        (v.setAttributes = s()),
        (v.insert = i().bind(null, 'head')),
        (v.domAPI = o()),
        (v.insertStyleElement = u()),
        n()(f.Z, v),
        f.Z && f.Z.locals && f.Z.locals;
      var m = t(424),
        h = {};
      (h.styleTagTransform = p()),
        (h.setAttributes = s()),
        (h.insert = i().bind(null, 'head')),
        (h.domAPI = o()),
        (h.insertStyleElement = u()),
        n()(m.Z, h),
        m.Z && m.Z.locals && m.Z.locals,
        (({ name: e, location: n }) => {
          const t = document.querySelector('.profile__name'),
            r = document.querySelector('.profile__location');
          (t.textContent = e), (r.textContent = `from ${n}`);
        })({ name: 'Tom', location: 'The World' });
    })();
})();
