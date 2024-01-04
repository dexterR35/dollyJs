(function () {
  "use strict";

  function init() {
    /* INIT DOLLY */
    let dolly = new Dolly(document.getElementById("dolly-container"), {
      ease: 0.1, // animation ease
      perspective: 3000, // container perspective
      distance: 9000, // distance between layers
      fullpage: true, // enable one scroll to move throgh layers
      delay: 1000, // if lockScroll its true - set delay betwen each scroll (deafult 1500 ms)
      duration: 800, // animation duration - for anchors and full page transitions (default 800 ms)
      bodyClass: true, // when layer is active add to body a class with the layer's id - ex. 'on-layer1'
      activeMenu: true, // add class "active-anchor" to anchor
      onlyAnchors: false, // only anchors navigation
      bodyClass: true, // when layer is active add to body a class with the layer's id value - ex. 'on-layer1'
      threshold: 10, // change index with N° pixel in advance
      //   activeMenu: true // gave class active to menu voices
      onReady: function (index) {
        console.log(index, "onChange");
        /* CALLED WHEN PLUGIN IS READY */
      },
      onScroll: function (index, scroll, direction, limit) {
        console.log(index, "onscroll");
        /* CALLED DURING SCROLL */
      },
      onChange: function (prev, index, scroll) {
        console.log(index, "onChange");
        /* CALLED WHEN INDEX CHANGE */
      },
      onResize: function (prev, index, scroll) {
        console.log(index, "onResize");
        /* CALLED WHEN WINDOW IT'S RESIZED */
      },
    });
  }

  document.addEventListener("DOMContentLoaded", function (event) {
    init();
  });
})();

$("body").mousemove(function (e) {
  var moveinX = (e.pageX * -1) / 100;
  var moveinY = (e.pageY * -1) / 100;
  $(this).css("background-position", moveinX + "px " + moveinY + "px ");
});
