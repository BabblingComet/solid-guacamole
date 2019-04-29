$(document).ready(function() {
/*
  $("#nav-control").on("click", function() {

    let nav = $('#sidenav');
    if($('#sidenav').attr('data-navstate') == 'full'){
      $('#sidenav').attr('data-navstate','min');
      $(this).blur();
    }else{
      $('#sidenav').attr('data-navstate','full');
      $(this).blur();
    }
  });
*/
  $(".nav-item-link").on("click", function() {
    $('#sidenav').find('.nav-item-link.active').removeClass('active');
    $(this).addClass("active");
  });

  var centerInPortalV = function(el) {
    $(el).css("top", ($(window).height() / 2) - 44);
  };

  centerInPortalV("#nav-control");

  var resizeTimer;

  $(window).on("resize", function(e) {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(function() {
      centerInPortalV("#nav-control");
    }, 250);
  });
});
