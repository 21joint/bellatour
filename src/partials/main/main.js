import Masonry from 'masonry-layout/dist/masonry.pkgd.min';
import 'bootstrap/js/src/util';
import 'bootstrap/js/src/scrollspy';
import './main.scss';


jQuery(window).on('load', function () {
  // vanilla JS
  var msnry1 = new Masonry('#masonry1', {
    itemSelector: '.grid-item',
    horizontalOrder: true
  });
  var msnry2 = new Masonry('#masonry2', {
    itemSelector: '.grid-item',
    horizontalOrder: true
  });
});
