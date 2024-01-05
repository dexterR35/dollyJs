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
        perspective: 2000,
        distance: 2000,
        fullpage: true,
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

$("body").mousemove(function (e) {
  var moveinX = (e.pageX * -1) / 100;
  var moveinY = (e.pageY * -1) / 100;
  $(this).css("background-position", moveinX + "px " + moveinY + "px ");
  $(this).css("background-attachment", "fixed");
});

// function toggleCustomDiv() {
//   if ($("body").hasClass("on-examples")) {
//     $(".last-div").addClass("visible");
//   } else {
//     $(".last-div").removeClass("visible");
//   }
// }

// // Create a new MutationObserver
// var observer = new MutationObserver(function (mutations) {
//   mutations.forEach(function (mutation) {
//     if (mutation.attributeName === "class") {
//       toggleCustomDiv();
//     }
//     console.log(mutation.attributeName === "class");
//   });
// });

// // Start observing the body for attribute changes
// observer.observe(document.body, {
//   attributes: true, //configure it to listen to attribute changes
// });

// toggleCustomDiv();
// $(".symbol").mousemove(function (e) {
//   // Calculate the movement based on the mouse position
//   var moveinX = (e.pageX * -1) / 100;
//   var moveinY = (e.pageY * -1) / 100;

//   // Apply the CSS transform property to move the image
//   $(this).css("transform", "translate(" + moveinX + "px, " + moveinY + "px)");
// });
