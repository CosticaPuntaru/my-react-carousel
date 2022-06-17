"use strict";
Object.defineProperty(exports, "__esModule", { value: !0 });
var e,
  n = require("react"),
  t = (e = n) && "object" == typeof e && "default" in e ? e.default : e,
  o = function() {
    return (o =
      Object.assign ||
      function(e) {
        for (var n, t = 1, o = arguments.length; t < o; t++)
          for (var r in (n = arguments[t]))
            Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
        return e;
      }).apply(this, arguments);
  };
function r(e, n, t) {
  if (t || 2 === arguments.length)
    for (var o, r = 0, i = n.length; r < i; r++)
      (!o && r in n) ||
        (o || (o = Array.prototype.slice.call(n, 0, r)), (o[r] = n[r]));
  return e.concat(o || Array.prototype.slice.call(n));
}
var i =
    "undefined" != typeof window &&
    window.navigator &&
    window.navigator.platform &&
    /iP(ad|hone|od)/.test(window.navigator.platform),
  u = t.forwardRef(function(e, u) {
    var c = e.slidesToShow,
      a = void 0 === c ? 3 : c,
      s = e.infinite,
      l = void 0 === s || s,
      f = e.transitionDuration,
      d = void 0 === f ? 300 : f,
      h = e.centerCurrentSlide,
      v = void 0 !== h && h,
      p = e.render,
      g =
        void 0 === p
          ? function(e) {
              return e.slides;
            }
          : p,
      T = e.onCurrentSlideChanged,
      m = (function(e, n) {
        var o = n.infinite,
          i = n.slidesToShow,
          u = n.mode,
          c = void 0 === u ? "flex" : u;
        return t.useMemo(
          function() {
            var n = t.Children.toArray(e),
              u = n.length,
              a = o ? n.slice(u - (i + 2)) : [],
              s = o ? n.slice(0, i + 2) : [];
            return "flex" === c
              ? {
                  slides: r(r(r([], a, !0), n, !0), s, !0).map(function(e, n) {
                    return t.cloneElement(e, {
                      style: { flex: "0 0 ".concat(100 / i, "%") },
                      key: n
                    });
                  }),
                  slideCount: u,
                  preSlidesCount: a.length
                }
              : {
                  slides: r(r(r([], a, !0), n, !0), s, !0).map(function(e, n) {
                    return t.cloneElement(e, { key: n });
                  }),
                  slideCount: u,
                  preSlidesCount: a.length
                };
          },
          [e, o, i]
        );
      })(e.children, { infinite: l, slidesToShow: a, mode: "flex" }),
      w = m.slides,
      S = m.slideCount,
      C = m.preSlidesCount,
      x = (function(e) {
        var n = e.infinite,
          o = e.slidesToShow,
          r = e.slideCount,
          i = t.useState(0),
          u = i[0],
          c = i[1];
        return {
          previous: t.useCallback(
            function() {
              return c(function(e) {
                return n || e - 1 >= 0 ? e - 1 : 0;
              });
            },
            [n]
          ),
          next: t.useCallback(
            function() {
              return c(function(e) {
                return n || e + 1 < r - o ? e + 1 : r - o;
              });
            },
            [n, r, o]
          ),
          hasNext: !!n || u + o < r,
          hasPrevious: !!n || u > 0,
          currentIndex: u,
          currentStep: u >= r ? u - r : u < 0 ? u + r : u,
          totalSteps: n ? r : 1 + r - o,
          goToStep: c
        };
      })({ infinite: l, slidesToShow: a, slideCount: S }),
      y = x.previous,
      b = x.next,
      M = x.goToStep,
      k = x.currentIndex;
    n.useEffect(
      function() {
        "function" == typeof T && T(k);
      },
      [k]
    ),
      t.useImperativeHandle(
        u,
        function() {
          return { previous: y, next: b, goToStep: M };
        },
        [y, b]
      );
    var E = t.useRef(null),
      A = t.useState(0),
      R = A[0],
      P = A[1],
      D = t.useState(!1),
      L = D[0],
      O = D[1];
    !(function(e) {
      var n = e.wrapper,
        o = e.callback,
        r = e.measure,
        i = e.slidesToShow,
        u = e.mode,
        c = void 0 === u ? "flex" : u,
        a = t.useCallback(
          function() {
            return requestAnimationFrame(function() {
              if (n.current)
                if ("flex" === c) {
                  var e = n.current.getBoundingClientRect();
                  o(Math.round(e[r] / i));
                } else if ("fixed" === c) {
                  var t = n.current.children[0];
                  t.children.length > 0 &&
                    ((e = t.children[0].getBoundingClientRect()), o(e[r]));
                }
            });
          },
          [i, o]
        );
      t.useLayoutEffect(function() {
        return (
          a(),
          window.addEventListener("resize", a),
          function() {
            return window.removeEventListener("resize", a);
          }
        );
      });
    })({
      wrapper: E,
      callback: function(e) {
        R !== e && (O(!0), P(e));
      },
      slidesToShow: a,
      measure: "width",
      mode: "flex"
    }),
      t.useEffect(
        function() {
          L
            ? k < 0 || k >= S
              ? requestAnimationFrame(function() {
                  return x.goToStep(function(e) {
                    return e < 0 ? (l ? S + e : 0) : e - S;
                  });
                })
              : requestAnimationFrame(function() {
                  return O(!1);
                })
            : (k >= S || k < 0) &&
              setTimeout(function() {
                return O(!0);
              }, d);
        },
        [L, k, S, d]
      );
    var X = (function(e) {
        var n = t.useRef(!1),
          o = t.useRef(null),
          r = t.useRef(null),
          u = t.useState(0),
          c = u[0],
          a = u[1],
          s = function() {
            setTimeout(function() {
              return a(0);
            }, 0),
              (o.current = null),
              (r.current = null),
              (n.current = !1);
          };
        t.useEffect(function() {
          if (i) {
            var e = function(e) {
              1 === e.touches.length &&
                n.current &&
                (e.cancelable ? e.preventDefault() : s());
            };
            return (
              document.addEventListener("touchmove", e, { passive: !1 }),
              function() {
                document.removeEventListener("touchmove", e);
              }
            );
          }
        }, []);
        var l = t.useCallback(function(e) {
            if (e.changedTouches && e.changedTouches.length > 1) return null;
            var n = e.changedTouches ? e.changedTouches[0].clientY : e.clientY;
            (o.current = e.changedTouches
              ? e.changedTouches[0].clientX
              : e.clientX),
              (r.current = n);
          }, []),
          f = t.useCallback(
            function(e) {
              if (null !== o.current) {
                e.changedTouches && e.changedTouches.length > 1 && s();
                var t =
                    (e.changedTouches
                      ? e.changedTouches[0].clientX
                      : e.clientX) - o.current,
                  u =
                    (e.changedTouches
                      ? e.changedTouches[0].clientY
                      : e.clientY) - r.current;
                a(t),
                  i && n.current && e.stopPropagation(),
                  n.current ||
                    (Math.abs(u) > 10 * window.devicePixelRatio
                      ? s()
                      : Math.abs(t) > 5 * window.devicePixelRatio &&
                        (n.current = !0));
              }
            },
            [o]
          ),
          d = t.useCallback(
            function() {
              e(c), s();
            },
            [c, e]
          ),
          h = t.useCallback(
            function(e) {
              Math.abs(c) > 5 && (e.preventDefault(), e.stopPropagation());
            },
            [c]
          );
        return {
          isTouching: null !== o.current,
          touchOffset: c,
          onTouchStart: l,
          onTouchMove: f,
          onTouchEnd: d,
          onClickCapture: h
        };
      })(
        t.useCallback(
          function(e) {
            var n = Math.round((e > 0 ? e + 0.3 * R : e - 0.3 * R) / R);
            if (l)
              x.goToStep(function(e) {
                return e - n;
              });
            else {
              if (0 === n) return;
              x.goToStep(function(e) {
                return e - n > S - a ? S - a : e - n < 0 ? 0 : e - n;
              });
            }
          },
          [R, S, a, x.goToStep]
        )
      ),
      j = X.onTouchStart,
      q = X.onTouchMove,
      Y = X.onTouchEnd,
      z = X.onClickCapture,
      F = X.touchOffset - (k + C) * R + (v ? (a / 2 - 0.5) * R : 0),
      I = L || X.isTouching ? 0 : d,
      B = (100 / a) * -(k + C) + (v ? (100 / a) * (a / 2 - 0.5) : 0);
    return g(
      o(o({}, x), {
        slides: t.createElement(
          "div",
          { style: { width: "100%", overflow: "hidden" }, ref: E },
          t.createElement(
            "div",
            {
              onTouchStart: j,
              onTouchMove: q,
              onTouchEnd: Y,
              onMouseDown: j,
              onMouseMove: q,
              onMouseUp: Y,
              onMouseLeave: Y,
              onClickCapture: z,
              style: {
                display: "flex",
                flexDirection: "row",
                transform: "translateX(".concat(
                  R ? "".concat(F, "px") : "".concat(B, "%"),
                  ")"
                ),
                transition: "transform ".concat(I, "ms ease"),
                touchAction: "pan-y pinch-zoom"
              }
            },
            w
          )
        ),
        slidesToShow: a,
        infinite: l,
        transitionDuration: d,
        centerCurrentSlide: v
      })
    );
  });
(exports.default = u),
  (exports.generateDots = function(e) {
    return function(n) {
      var t = n.currentStep,
        r = n.totalSteps,
        i = n.goToStep,
        u = n.infinite,
        c = Array.from(Array(r)).map(function(e, n) {
          return {
            index: n,
            onClick: function() {
              return i(
                u
                  ? ((e = t),
                    (a = (o = n) + (c = r)),
                    (s = o - c),
                    (l = Math.abs(a - e)),
                    (f = Math.abs(e - s)),
                    l < (d = Math.abs(o - e)) ? a : f < d ? s : o)
                  : n
              );
              var e, o, c, a, s, l, f, d;
            },
            isActive: n === t
          };
        });
      return e(o({ dots: c }, n));
    };
  });
