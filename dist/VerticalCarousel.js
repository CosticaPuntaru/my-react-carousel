"use strict";
var e,
  n = require("react"),
  t = (e = n) && "object" == typeof e && "default" in e ? e.default : e,
  r = function() {
    return (r =
      Object.assign ||
      function(e) {
        for (var n, t = 1, r = arguments.length; t < r; t++)
          for (var i in (n = arguments[t]))
            Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i]);
        return e;
      }).apply(this, arguments);
  };
function i(e, n, t) {
  if (t || 2 === arguments.length)
    for (var r, i = 0, o = n.length; i < o; i++)
      (!r && i in n) ||
        (r || (r = Array.prototype.slice.call(n, 0, i)), (r[i] = n[i]));
  return e.concat(r || Array.prototype.slice.call(n));
}
var o = t.forwardRef(function(e, o) {
  var u = e.slidesToShow,
    l = void 0 === u ? 3 : u,
    s = e.infinite,
    a = void 0 === s || s,
    c = e.transitionDuration,
    f = void 0 === c ? 300 : c,
    d = e.render,
    h =
      void 0 === d
        ? function(e) {
            return e.slides;
          }
        : d,
    p = e.onCurrentSlideChanged,
    v = (function(e, n) {
      var r = n.infinite,
        o = n.slidesToShow,
        u = n.mode,
        l = void 0 === u ? "flex" : u;
      return t.useMemo(
        function() {
          var n = t.Children.toArray(e),
            u = n.length,
            s = r ? n.slice(u - (o + 2)) : [],
            a = r ? n.slice(0, o + 2) : [];
          return "flex" === l
            ? {
                slides: i(i(i([], s, !0), n, !0), a, !0).map(function(e, n) {
                  return t.cloneElement(e, {
                    style: { flex: "0 0 ".concat(100 / o, "%") },
                    key: n
                  });
                }),
                slideCount: u,
                preSlidesCount: s.length
              }
            : {
                slides: i(i(i([], s, !0), n, !0), a, !0).map(function(e, n) {
                  return t.cloneElement(e, { key: n });
                }),
                slideCount: u,
                preSlidesCount: s.length
              };
        },
        [e, r, o]
      );
    })(e.children, { infinite: a, slidesToShow: l, mode: "flex" }),
    m = v.slides,
    S = v.slideCount,
    g = v.preSlidesCount,
    w = (function(e) {
      var n = e.infinite,
        r = e.slidesToShow,
        i = e.slideCount,
        o = t.useState(0),
        u = o[0],
        l = o[1];
      return {
        previous: t.useCallback(
          function() {
            return l(function(e) {
              return n || e - 1 >= 0 ? e - 1 : 0;
            });
          },
          [n]
        ),
        next: t.useCallback(
          function() {
            return l(function(e) {
              return n || e + 1 < i - r ? e + 1 : i - r;
            });
          },
          [n, i, r]
        ),
        hasNext: !!n || u + r < i,
        hasPrevious: !!n || u > 0,
        currentIndex: u,
        currentStep: u >= i ? u - i : u < 0 ? u + i : u,
        totalSteps: n ? i : 1 + i - r,
        goToStep: l
      };
    })({ infinite: a, slidesToShow: l, slideCount: S }),
    x = w.previous,
    y = w.next,
    C = w.goToStep,
    T = w.currentIndex;
  n.useEffect(
    function() {
      "function" == typeof p && p(T);
    },
    [T]
  ),
    t.useImperativeHandle(
      o,
      function() {
        return { previous: x, next: y, goToStep: C };
      },
      [x, y]
    );
  var E = t.useRef(null),
    b = t.useState(0),
    k = b[0],
    A = b[1],
    q = t.useState(!1),
    R = q[0],
    j = q[1];
  !(function(e) {
    var n = e.wrapper,
      r = e.callback,
      i = e.measure,
      o = e.slidesToShow,
      u = e.mode,
      l = void 0 === u ? "flex" : u,
      s = t.useCallback(
        function() {
          return requestAnimationFrame(function() {
            if (n.current)
              if ("flex" === l) {
                var e = n.current.getBoundingClientRect();
                r(Math.round(e[i] / o));
              } else if ("fixed" === l) {
                var t = n.current.children[0];
                t.children.length > 0 &&
                  ((e = t.children[0].getBoundingClientRect()), r(e[i]));
              }
          });
        },
        [o, r]
      );
    t.useLayoutEffect(function() {
      return (
        s(),
        window.addEventListener("resize", s),
        function() {
          return window.removeEventListener("resize", s);
        }
      );
    });
  })({
    wrapper: E,
    callback: function(e) {
      k !== e && (j(!0), A(e));
    },
    slidesToShow: l,
    measure: "height",
    mode: "flex"
  }),
    t.useEffect(
      function() {
        R
          ? T < 0 || T >= S
            ? requestAnimationFrame(function() {
                return w.goToStep(function(e) {
                  return e < 0 ? (a ? S + e : 0) : e - S;
                });
              })
            : requestAnimationFrame(function() {
                return j(!1);
              })
          : (T >= S || T < 0) &&
            setTimeout(function() {
              return j(!0);
            }, f);
      },
      [R, T, S, f]
    );
  var D = (100 / l) * -(T + g),
    F = R || f;
  return h(
    r(r({}, w), {
      slides: t.createElement(
        "div",
        {
          style: { width: "auto", height: "100%", overflow: "hidden" },
          ref: E
        },
        t.createElement(
          "div",
          {
            style: {
              display: "flex",
              flexDirection: "column",
              height: "100%",
              transform: "translateY(".concat(D, "%)"),
              transition: "transform ".concat(F, "ms ease")
            }
          },
          m
        )
      ),
      slidesToShow: l,
      infinite: a,
      transitionDuration: f
    })
  );
});
module.exports = o;
