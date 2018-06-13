/**
 * Application entry point
 */
import jQuery from 'jquery';
import './index.scss';
import './partials/hero/hero';
import './partials/main/main';

jQuery.extend(jQuery.easing, {
  easeNav(t) {
    return t < 0.5 ? 16 * t * t * t * t * t : 1 + 16 * (--t) * t * t * t * t;
  }
});


jQuery(document).ready(function () {
  $('body').scrollspy({
    target: '#mainNav',
    offset: $('header').innerHeight()
  });
});

jQuery(window).on('resize', function () {
  $('body').scrollspy('refresh');
});

jQuery('a[href^="#"]').on('click', function (e) {
  jQuery('html,body').animate({
    scrollTop: (jQuery(jQuery(e.target).attr('href')).offset().top + 1) - jQuery('header').innerHeight()
  })
});


jQuery(window).on('scroll', function () {
  var wS = $(window).scrollTop();
  if (wS > 10) {
    $('body').addClass('scrolled');
  }
  else {
    $('body').removeClass('scrolled');
  }
});
