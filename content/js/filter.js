var slide_wrp = ".side-filtrar-wrapper"; 
var open_button = ".filtrar-open";
var close_button = ".filtrar-close"; 
var overlay = ".filtrar-overlay"; 

var slide_wrp2 = ".side-ordenar-wrapper"; 
var open_button2 = ".ordenar-open";
var close_button2 = ".ordenar-close"; 
var overlay2 = ".ordenar-overlay"; 
var buttonaplicar = ".aplicar"; 

$(slide_wrp)
  .hide()
  .css({ right: -$(slide_wrp).outerWidth() + "px" })
  .delay(50)
  .queue(function () {
    $(slide_wrp).show();
  });

$(open_button).click(function (e) {
  e.preventDefault();
  $(slide_wrp).css({ right: "0" });
  setTimeout(function () {
    $(slide_wrp).addClass("active");
  }, 50);
  $(overlay).css({ opacity: "1", width: "100%" });
});

$(close_button).click(function (e) {
  e.preventDefault();
  $(slide_wrp).css({ right: -$(slide_wrp).outerWidth() + "px" });
  setTimeout(function () {
    $(slide_wrp).removeClass("active");
  }, 50);
  $(overlay).css({ opacity: "0", width: "0" });
});

$(document).on("click", function (e) {
  if (!e.target.closest(slide_wrp) && $(slide_wrp).hasClass("active")) {
    $(slide_wrp)
      .css({ right: -$(slide_wrp).outerWidth() + "px" })
      .removeClass("active");
    $(overlay).css({ opacity: "0", width: "0" });
  }
});




$(slide_wrp2)
  .hide()
  .css({ right: -$(slide_wrp2).outerWidth() + "px" })
  .delay(50)
  .queue(function () {
    $(slide_wrp2).show();
  });

$(open_button2).click(function (e) {
  e.preventDefault();
  $(slide_wrp2).css({ right: "0px" });
  setTimeout(function () {
    $(slide_wrp2).addClass("active");
  }, 50);
  $(overlay2).css({ opacity: "1", width: "100%" });
  $("body").addClass("overflow-hidden");
});

$(close_button2).click(function (e) {
  e.preventDefault();
  $(slide_wrp2).css({ right: -$(slide_wrp2).outerWidth() + "px" });
  setTimeout(function () {
    $(slide_wrp2).removeClass("active");
  }, 50);
  $(overlay2).css({ opacity: "0", width: "0" });
  $("body").removeClass("overflow-hidden");
});

$(buttonaplicar).click(function (e) {
  e.preventDefault();
  $(slide_wrp2).css({ right: -$(slide_wrp2).outerWidth() + "px" });
  setTimeout(function () {
    $(slide_wrp2).removeClass("active");
  }, 50);
  $(overlay2).css({ opacity: "0", width: "0" });
  $("body").removeClass("overflow-hidden");
});

$(document).on("click", function (e) {
  if (!e.target.closest(slide_wrp2) && $(slide_wrp2).hasClass("active")) {
    $(slide_wrp2)
      .css({ right: -$(slide_wrp2).outerWidth() + "px" })
      .removeClass("active");
    $(overlay2).css({ opacity: "0", width: "0" });
  }
  
});