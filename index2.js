!(function () {
  "use strict";
  let n = {
    touchClick:
      "ontouchstart" in window ||
      (window.DocumentTouch && document instanceof DocumentTouch)
        ? "touchstart"
        : "click",
    addClass: function (t, e) {
      if (Array.isArray(t)) for (let s = 0; s < t.length; s++) i(t[s], e);
      else i(t, e);
      function i(t, e) {
        t.classList
          ? t.classList.add(e)
          : n.hasClass(t, e) || (t.className += " " + e);
      }
    },
    removeClass: function (t, e) {
      if (Array.isArray(t)) for (let s = 0; s < t.length; s++) i(t[s], e);
      else i(t, e);
      function i(t, e) {
        let s;
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
      let e = window.innerHeight,
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
    let t;

    (t = "click" == n.touchClick ? 0 : 0.08),
      (n.dolly = new Dolly(document.getElementById("dolly"), {
        ease: t,
        perspective: 2400,
        distance: 2000,
        // distance: 3000,
        fullpage: false,
        delay: 1000,
        duration: 800,
        onlyAnchors: !1,
        bodyClass: !0,
        threshold: 10,
        activeMenu: !0,
      })),
      window.addEventListener("resize", s),
      s();
  }
  // document.addEventListener("scroll", function () {
  //   try {
  //     // Get the scroll position
  //     var scrollPosition = window.scrollY;

  //     // Set the background size based on the scroll position
  //     var newSize = 100 + scrollPosition / 5; // You can adjust the division factor to control the speed of the effect
  //     document.body.style.backgroundSize = newSize + "%";

  //     console.log("Scroll Position: ", scrollPosition);
  //     console.log("New Background Size: ", newSize + "%");
  //   } catch (error) {
  //     console.error("Error:", error);
  //   }
  // });
  function s() {
    if (window.innerWidth < 991)
      for (let t = 0; t < n.mobileBtn.length; t++)
        n.mobileBtn[t].addEventListener(n.touchClick, i);
    else
      for (let t = 0; t < n.mobileBtn.length; t++)
        n.mobileBtn[t].removeEventListener(n.touchClick, i);
  }
  // function i() {
  //   n.hasClass(document.body, "on-menu")
  //     ? (n.dolly.blockScroll(!1), n.removeClass(document.body, "on-menu"))
  //     : (n.dolly.blockScroll(!0), n.addClass(document.body, "on-menu"));
  // }
  document.addEventListener("DOMContentLoaded", function (t) {
    e();
  });
})();

// $("body").mousemove(function (e) {
//   var moveinX = (e.pageX * -1) / 100;
//   var moveinY = (e.pageY * -1) / 100;
//   $(this).css("background-position", moveinX + "px " + moveinY + "px ");
// });
