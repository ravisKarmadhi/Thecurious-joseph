import $ from 'jquery';
import '@popperjs/core';
import 'bootstrap/dist/js/bootstrap';
import 'select2/dist/js/select2.min.js';
import 'jquery-ui';
import 'jquery-ui/ui/widgets/datepicker.js';

import { App } from './parts/app.js'
import { Plugins } from './parts/plugins.js'
import { Parts } from './parts/parts.js'


// export for others scripts to use
window.$ = $;
window.jQuery = jQuery;

$(function () {

  window.windowWidth = $(window).width();
  window.windowHeight = $(window).height();

  window.isiPhone = navigator.userAgent.toLowerCase().indexOf('iphone');
  window.isiPad = navigator.userAgent.toLowerCase().indexOf('ipad');
  window.isiPod = navigator.userAgent.toLowerCase().indexOf('ipod');

  //Functions List Below

  window.app = new App();
  window.app.init();

  window.plugins = new Plugins();
  window.plugins.init();

  window.parts = new Parts();
  window.parts.init();

});

// ===========================================================================

// $(window).scroll(function () {
//   var sticky = $("header"),
//     scroll = $(window).scrollTop();
//   if (scroll >= 50) {
//     sticky.addClass("header-fixed");
//   }
//   else {
//     sticky.removeClass("header-fixed");
//   }
// });


$(document).ready(function () {
  $(".filter-button").click(function () {
    var value = $(this).attr('data-filter');
    if (value == "all") {
      $('.filter').show('500');
    }
    else {
      $(".filter").not('.' + value).hide('1000');
      $('.filter').filter('.' + value).show('1000');
    }
  });
  // color toggle
  $(".filter-button").click(function () {
    $(this).toggleClass("highlight").siblings().removeClass("highlight");
  });
});

$(document).ready(function () {
  $(".filter-staff-btn").click(function () {
    var value = $(this).attr('data-filter');
    if (value == "all") {
      $('.filter-staff').show('500');
    }
    else {
      $(".filter-staff").not('.' + value).hide('1000');
      $('.filter-staff').filter('.' + value).show('1000');
    }
  });
  // color toggle
  $(".filter-staff-btn").click(function () {
    $(this).toggleClass("highlight").siblings().removeClass("highlight");
  });
});

$('#open-mobile-menu').click(function () {
  $('.header-link').addClass("animate-slider");
  $("html").addClass("overflow-hidden");
});


$('.read-more-btn').click(function () {
  $('.read-more-content').removeClass("text-truncate text-truncate3");
  $('.read-less-btn').removeClass('d-none');
  $('.read-more-btn').addClass('d-none');
});

$('.read-less-btn').click(function () {
  $('.read-more-content').addClass("text-truncate text-truncate3");
  $('.read-less-btn').addClass('d-none');
  $('.read-more-btn').removeClass('d-none');
});


$(document).ready(function () {
  $(".policies-btn").click(function () {
    var value = $(this).attr('data-filter');
    if (value == "all") {
      $('.policies-filter').show('500');
    }
    else {
      $(".policies-filter").not('.' + value).hide('1000');
      $('.policies-filter').filter('.' + value).show('1000');
    }
  });
  // color toggle
  $(".policies-btn").click(function () {
    $(this).toggleClass("highlight").siblings().removeClass("highlight");
  });
});

$(document).ready(function () {
  $(".usefull-btn").click(function () {
    var value = $(this).attr('data-filter');
    if (value == "all") {
      $('.usefull-filter').show('500');
    }
    else {
      $(".usefull-filter").not('.' + value).hide('1000');
      $('.usefull-filter').filter('.' + value).show('1000');
    }
  });
  // color toggle
  $(".usefull-btn").click(function () {
    $(this).toggleClass("highlight").siblings().removeClass("highlight");
  });
});