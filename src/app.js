/**
 * Application entry point
 */
import jQuery from 'jquery';
import './index.scss';
import './partials/loader/loader';
import './partials/hero/hero';
import './partials/main/main';


jQuery.extend(jQuery.easing, {
  easeNav(t) {
    return t < 0.5 ? 16 * t * t * t * t * t : 1 + 16 * (--t) * t * t * t * t;
  }
});

jQuery(document).ready(function () {
  jQuery('body').scrollspy({
    target: '#mainNav',
    offset: jQuery('header').innerHeight()
  });
  jQuery('a[href^="#"]').on('click', function (e) {
    jQuery('html,body').animate({
      scrollTop: (jQuery(jQuery(e.target).attr('href')).offset().top + 1) - jQuery('header').innerHeight()
    })
  });
});

jQuery(window)
  .on('resize', function () {
    jQuery('body').scrollspy('refresh');
  })
  .on('scroll', function () {
    var wS = jQuery(window).scrollTop();
    if (wS > 10) {
      jQuery('body').addClass('scrolled');
    }
    else {
      jQuery('body').removeClass('scrolled');
    }
  })
  .on('load', function (e) {
    jQuery('body').delay(1000).queue(function () {
      jQuery(this).removeClass('is-loading');
    });
  });
