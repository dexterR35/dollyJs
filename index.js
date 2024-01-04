(function () {
  "use strict";

  function init() {
    /* INIT DOLLY */

    let dolly = new Dolly(document.getElementById("dolly-container"), {
      ease: 0.1, // animation ease
      perspective: 3000, // container perspective
      distance: 5000, // distance between layers
      fullpage: true, // enable one scroll to move throgh layers
      delay: 1000, // if lockScroll its true - set delay betwen each scroll (deafult 1500 ms)
      duration: 800, // animation duration - for anchors and full page transitions (default 800 ms)
      bodyClass: true, // when layer is active add to body a class with the layer's id - ex. 'on-layer1'
      activeMenu: true, // add class "active-anchor" to anchor
      onlyAnchors: false, // only anchors navigation
      bodyClass: true, // when layer is active add to body a class with the layer's id value - ex. 'on-layer1'
      threshold: 30, // change index with N° pixel in advance
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

    // stopDolly();
    // startDolly();

    // blockScroll(boolean);

    // getIndex();
    // getScroll();
    // moveToIndex(index, duration);
  }

  document.addEventListener("DOMContentLoaded", function (event) {
    init();
  });
})();

$(".testt").mousemove(function (e) {
  var moveinX = (e.pageX * -1) / 100;
  var moveinY = (e.pageY * -1) / 100;
  $(this).css("background-position", moveinX + "px " + moveinY + "px ");
});

// var currentX = "";
// var currentY = "";
// var movementConstant = 0.025;

// $(document).mousemove(function (e) {
//   if (currentX == "") currentX = e.pageX;
//   var xdiff = e.pageX - currentX;
//   currentX = e.pageX;
//   if (currentY == "") currentY = e.pageY;
//   var ydiff = e.pageY - currentY;
//   currentY = e.pageY;

//   $(".parallax div").each(function (i, el) {
//     var movement = (i + 1) * (xdiff * movementConstant);
//     var movementy = (i + 1) * (ydiff * movementConstant);
//     var newX = $(el).position().left + movement;
//     var newY = $(el).position().top + movementy;
//     var cssObj = {
//       left: newX + "px",
//       top: newY + "px",
//     };

//     // $(el).css('left', newX + 'px');
//     // $(el).css('top', newY + 'px');
//     $(el).css({
//       transform: "translate(" + newX + "px," + newY + "px)",
//     });
//   });
// });
