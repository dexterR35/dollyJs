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
    let distance = 1800;
    (t = "click" == n.touchClick ? 0.08 : 0.08), console.log(t, "t");
    (n.dolly = new Dolly(document.getElementById("dolly_first"), {
      ease: t,
      perspective: 1700,
      distance: distance,
      fullpage: true,
      lockScroll: true,
      delay: 1000,
      duration: 800,
      onlyAnchors: !1,
      bodyClass: true,
      threshold: 10,
      activeMenu: !0,
      onReady: function () {},
      onScroll: function (index, scroll, direction, limit) {
        console.log(scroll);

        if (scroll >= 1100) {
          $(".title-s2").css("opacity", "1");
        } else {
          $(".title-s2").css("opacity", "0");
        }
        if (scroll >= 2400) {
          $(".example").css("opacity", "1");
        } else {
          $(".example").css("opacity", "0");
        }
        // n.dolly.destroy();
        // let cloudsSky = document.querySelector(".cloudsSky");
        // let scrollPosition = scroll;
        // let newPosition = -scrollPosition * 0.1;
        // cloudsSky.style.transform = `translateX(${newPosition}px)`;
      },
      onChange: function (prev, index, scroll) {},
      onResize: function (prev, index, scroll) {},
    })),
      window.addEventListener("resize", s),
      s();
  }
  document
    .getElementById("switchToSecondButton")
    .addEventListener("click", function () {
      $("#dolly_first").css("display", "none");
      $("#dolly_second").css("display", "block");
    });
  function s() {
    if (window.innerWidth < 991)
      for (let t = 0; t < n.mobileBtn.length; t++)
        n.mobileBtn[t].addEventListener(n.touchClick, i);
    else
      for (let t = 0; t < n.mobileBtn.length; t++)
        n.mobileBtn[t].removeEventListener(n.touchClick, i);
  }
  document.addEventListener("DOMContentLoaded", function (t) {
    e();
  });
})();

// $("body").mousemove(function (e) {
//   var moveinX = (e.pageX * -1) / 100;
//   var moveinY = (e.pageY * -1) / 100;
//   $(this).css("background-position", moveinX + "px " + moveinY + "px ");
//   // $(this).css("background-attachment", "fixed");
// });

var b = document.getElementsByTagName("BODY")[0];

b.addEventListener("mousemove", function (event) {
  parallaxMovement(event, "parallax", 1);
  // parallaxMovement(event, "rev-parallax", -2.3);
});

function parallaxMovement(e, className, directionMultiplier) {
  var amountMovedX = (e.clientX * directionMultiplier) / 30;
  var amountMovedY = (e.clientY * directionMultiplier) / 30;
  var elements = document.getElementsByClassName(className);
  for (var i = 0; i < elements.length; i++) {
    elements[i].style.transform =
      "translate(" + amountMovedX + "px," + amountMovedY + "px)";
  }
}
