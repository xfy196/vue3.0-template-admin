!(function () {
  function e(e, t, r) {
    return t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = r), e
  }
  System.register(['./vendor-legacy.7b043fe3.js'], function (t) {
    'use strict'
    var r
    return {
      setters: [
        function (e) {
          r = e.W
        }
      ],
      execute: function () {
        var n,
          u = Object.freeze((e((n = { __proto__: null }), Symbol.toStringTag, 'Module'), e(n, 'default', {}), n))
        t('r', r(u))
      }
    }
  })
})()
