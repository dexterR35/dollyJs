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

  const scrollHandlers = {
    dolly_first: function (scroll) {
      if (scroll >= 1100) {
        $(".title-s2").css("opacity", "1");
      } else {
        $(".title-s2").css("opacity", "0");
      }
      if (scroll >= 2400) {
        $(".example").css("opacity", "1");
      }
    },
    dolly_second: function (scroll) {
      let cloudsSky = document.querySelector(".cloudsSky");
      let spaceship = document.querySelector(".c_space");
      if (scroll >= 2400) {
        spaceship.style.top = 50 - scroll / 100 + "%";
        $(".second_title").css("opacity", "1");
      } else {
        spaceship.style.top = 50 - scroll / 100 + "%";
        $(".second_title").css("opacity", "0");
      }
      cloudsSky.style.transform = `translateX(${-scroll * 0.1}px)`;
    },
    dolly_third: function (scroll) {
      if (scroll >= 1400) {
        $(".second_title").css("opacity", "1");
      } else {
        $(".second_title").css("opacity", "0");
      }
    },
  };

  function e(dollyId) {
    let t;
    let onScrollHandler = scrollHandlers[dollyId];

    if (!onScrollHandler) {
      console.error("onScroll nu a fost definit pentru " + dollyId);
      return;
    }

    (t = "click" == n.touchClick ? 0.08 : 0.08), console.log(t, "t");
    (n.dolly = new Dolly(document.getElementById(dollyId), {
      ease: t,
      perspective: 1700,
      distance: 1800,
      fullpage: true,
      lockScroll: true,
      delay: 1000,
      duration: 800,
      onlyAnchors: !1,
      bodyClass: true,
      threshold: 10,
      activeMenu: !0,
      onReady: function (index) {
        console.log(index, "onready");
      },
      onScroll: function (index, scroll, direction, limit) {
        onScrollHandler(scroll);
      },
      onChange: function (prev, index, scroll) {
        console.log(
          `Section changed from ${prev} to ${index}. Current scroll position: ${scroll}`
        );
      },
      onResize: function (prev, index, scroll) {},
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

  $("#testClick").on("click", function () {
    $("#dolly_first").fadeOut("slow", function () {
      // $(this).css("transform", "scale(1.8)");
      $(".changeBg").animate({ opacity: 0 }, "slow", function () {
        $(this).css("background-image", "url('./png/scene2/bk-2.jpg')");
        $(this).animate({ opacity: 1 }, "slow");
      });
    });

    setTimeout(function () {
      $("#dolly_first").hide();
      $("#dolly_second").fadeIn("slow", function () {
        $(this).css("transform", "scale(1)");
      });
      e("dolly_second");
    }, 1000);
  });
  $("#testClick2").on("click", function () {
    $("#dolly_second").fadeOut("slow", function () {
      $(".changeBg").animate({ opacity: 0 }, "slow", function () {
        $(this).css("background-image", "url('./png/scene3/bk-3.jpg')");
        $(this).animate({ opacity: 1 }, "slow");
      });
    });
    setTimeout(function () {
      $("#dolly_second").hide();
      $("#dolly_third").fadeIn("slow", function () {
        // $(this).css("transform", "scale(1)");
      });
      e("dolly_third");
    }, 1000);
  });
  function checkImagesLoaded() {
    const images = document.querySelectorAll("img");
    let loadedCount = 0;

    images.forEach((img) => {
      if (img.complete) {
        loadedCount++;
        console.log(loadedCount, "image Ready");
      } else {
        img.onload = () => {
          loadedCount++;
          if (loadedCount === images.length) {
            hideSplashScreen();
          }
        };
      }
    });

    // no images, hide the splash screen
    if (loadedCount === images.length) {
      hideSplashScreen();
    }
  }

  function showSplashScreen() {
    const splashScreen = document.getElementById("splashScreen");
    splashScreen.style.display = "flex";
    setTimeout(() => {
      checkImagesLoaded();
    }, 1500);
  }

  function hideSplashScreen() {
    const splashScreen = document.getElementById("splashScreen");
    splashScreen.style.display = "none";
  }

  showSplashScreen();
  document.addEventListener("DOMContentLoaded", function (t) {
    e("dolly_first");
    var b = document.getElementsByTagName("BODY")[0];

    b.addEventListener("mousemove", function (event) {
      parallaxMovement(event, "parallax", 1);
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
  });
})();

// $("body").mousemove(function (e) {
//   var moveinX = (e.pageX * -1) / 100;
//   var moveinY = (e.pageY * -1) / 100;
//   $(this).css("background-position", moveinX + "px " + moveinY + "px ");
//   // $(this).css("background-attachment", "fixed");
// });
