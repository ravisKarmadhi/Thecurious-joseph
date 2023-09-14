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

$(window).scroll(function () {
  var sticky = $("header"),
    scroll = $(window).scrollTop();
  if (scroll >= 50) {
    sticky.addClass("header-fixed");
  }
  else {
    sticky.removeClass("header-fixed");
  }
});



$(document).ready(function () {
  var prevScrollPos = window.pageYOffset;

  $(window).scroll(function () {
    var currentScrollPos = window.pageYOffset;

    if (prevScrollPos > currentScrollPos) {
      $("header").removeClass("hidden");
    } else {
      $("header").addClass("hidden");
    }

    prevScrollPos = currentScrollPos;
  });
});

$(document).ready(function () {
  var prevScrollPosScoll = window.pageYOffset;

  $(window).scroll(function () {
    var currentScrollPosScroll = window.pageYOffset;

    if (prevScrollPosScoll > currentScrollPosScroll) {
      $(".scroll-fixed").removeClass("d-none");
    } else {
      $(".scroll-fixed").addClass("d-none");
    }

    prevScrollPosScoll = currentScrollPosScroll;
  });
});

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

// Function to add or remove class based on window width
function checkWindowWidth() {
  if ($(window).width() < 992) {
    $('#enquiry-elements').addClass('modal-fullscreen');
    $('#enquiry-body').addClass('rounded-0');
  } else {
    $('#enquiry-elements').removeClass('modal-fullscreen');
    $('#enquiry-body').removeClass('rounded-0');
  }
}

// Initial check when the page loads
$(document).ready(function () {
  checkWindowWidth();
});

// Check on window resize
$(window).resize(function () {
  checkWindowWidth();
});

$(function () {
  $("#datepicker").datepicker({
    dateFormat: 'dd/mm/yy'
  });
});

$(document).ready(function () {
  const $searchInput = $('#search-input');
  const $suggestionsContainer = $('#suggestions-container');

  // Sample suggestion data (you can replace this with your data)
  const suggestions = [
    'Early Years Curriculum',
    'Pre - Preparatory Curriculum',
    'Preparatory Curriculum',
  ];

  $searchInput.on('input', function () {
    const inputValue = $(this).val().toLowerCase();
    $suggestionsContainer.empty();

    if (inputValue.length === 0) {
      $suggestionsContainer.hide();
      return;
    }

    const matchingSuggestions = suggestions.filter(suggestion => suggestion.toLowerCase().includes(inputValue));

    if (matchingSuggestions.length > 0) {
      matchingSuggestions.forEach(suggestion => {
        const $suggestionItem = $('<div class="suggestion-item"></div>');
        const suggestionHtml = suggestion.replace(new RegExp(inputValue, 'gi'), (match) => `<span class="highlight">${match}</span>`);
        $suggestionItem.html(suggestionHtml);
        $suggestionItem.on('click', function () {
          $searchInput.val(suggestion);
          $suggestionsContainer.hide();
        });
        $suggestionsContainer.append($suggestionItem);
      });

      $suggestionsContainer.show();
    } else {
      $suggestionsContainer.hide();
    }
  });

  // Handle clicks outside the input to close the suggestions
  $(document).on('click', function (event) {
    if (!$(event.target).closest('#search-input, #suggestions-container').length) {
      $suggestionsContainer.hide();
    }
  });
});

$(document).ready(function () {


  function checkInputLength() {
    var inputElement = $("#search-input");
    var inputValue = inputElement.val();
    var windowWidth = $(window).width();


    if (inputValue.length <= 1) {
      if (windowWidth < 992) {
        $('#mobile-menu').removeClass("d-none");
        $('#mobile-login').removeClass("d-none");
      }
    } else {
      if (windowWidth < 992) {
        $('#mobile-menu').addClass("d-none");
        $('#mobile-login').addClass("d-none");
      }
    }
  }

  $(document).ready(checkInputLength);
  $("#search-input").on('input', checkInputLength);

});


$('#menu-btn').click(function () {
  $('#header-open').addClass("bgdanger vh-100");
  $('#open-text').addClass("d-none");
  $('#close-text').removeClass("d-none");
  $('#menu-btn').addClass("d-none");
  $('#close-btn').removeClass("d-none");
  $('#open-menu').removeClass("d-none");
  $('#open-menu').addClass("d-lg-flex");
  $("html").addClass("overflow-hidden");
  $("header").addClass("overflow-y-auto");
  $(".scroll-fixed").addClass("d-none");
  $(".black-logo-js").addClass("d-none");
  $(".black-logo-js").removeClass("black-logo");
  $(".white-logo-js").removeClass("white-logo");
});


$('#close-btn').click(function () {
  $('#header-open').removeClass("bgdanger vh-100");
  $('#open-text').removeClass("d-none");
  $('#close-text').addClass("d-none");
  $('#menu-btn').removeClass("d-none");
  $('#close-btn').addClass("d-none");
  $('#open-menu').addClass("d-none");
  $('#open-menu').removeClass("d-lg-flex");
  $("html").removeClass("overflow-hidden");
  $("header").removeClass("overflow-y-auto");
  $(".scroll-fixed").removeClass("d-none");
  $(".black-logo-js").removeClass("d-none");
  $(".black-logo-js").addClass("black-logo");
  $(".white-logo-js").addClass("white-logo");
});


$('#close-lable').click(function () {
  $('#academic-year').addClass("d-none");
});