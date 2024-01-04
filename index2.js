!(function () {
  "use strict";
  var n = {
    touchClick:
      "ontouchstart" in window ||
      (window.DocumentTouch && document instanceof DocumentTouch)
        ? "touchstart"
        : "click",
    addClass: function (t, e) {
      if (Array.isArray(t)) for (var s = 0; s < t.length; s++) i(t[s], e);
      else i(t, e);
      function i(t, e) {
        t.classList
          ? t.classList.add(e)
          : n.hasClass(t, e) || (t.className += " " + e);
      }
    },
    removeClass: function (t, e) {
      if (Array.isArray(t)) for (var s = 0; s < t.length; s++) i(t[s], e);
      else i(t, e);
      function i(t, e) {
        var s;
        t.classList
          ? t.classList.remove(e)
          : n.hasClass(t, e) &&
            ((s = new RegExp("(\\s|^)" + e + "(\\s|$)")),
            (t.className = t.className.replace(s, " ")));
      }
    },
    hasClass: function (t, e) {
      return t.classList
        ? t.classList.contains(e)
        : !!t.className.match(new RegExp("(\\s|^)" + e + "(\\s|$)"));
    },
    onScreen: function (t) {
      var e = window.innerHeight,
        s = t.getBoundingClientRect().top,
        i = parseInt(s) < e / 2 && parseInt(s) > -e / 2;
      return i;
    },
    findAncestor: function (t, e) {
      for (
        ;
        (t = t.parentElement) && !(t.matches || t.matchesSelector).call(t, e);

      );
      return t;
    },
    mobileBtn: document.querySelectorAll(".mobile-btn"),
  };
  function e() {
    var t;
    (t = "click" == n.touchClick ? 0 : 0.08),
      (n.dolly = new Dolly(document.getElementById("dolly"), {
        ease: 0.1,
        perspective: 3e3,
        distance: 2e3,
        fullpage: false,
        delay: 1000,
        duration: 800,
        onlyAnchors: !1,
        bodyClass: !0,
        threshold: 30,
        activeMenu: !0,
      })),
      window.addEventListener("resize", s),
      s();
  }
  function s() {
    if (window.innerWidth < 991)
      for (var t = 0; t < n.mobileBtn.length; t++)
        n.mobileBtn[t].addEventListener(n.touchClick, i);
    else
      for (t = 0; t < n.mobileBtn.length; t++)
        n.mobileBtn[t].removeEventListener(n.touchClick, i);
  }
  function i() {
    n.hasClass(document.body, "on-menu")
      ? (n.dolly.blockScroll(!1), n.removeClass(document.body, "on-menu"))
      : (n.dolly.blockScroll(!0), n.addClass(document.body, "on-menu"));
  }
  document.addEventListener("DOMContentLoaded", function (t) {
    e();
  });
})();
