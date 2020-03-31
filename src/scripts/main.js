import * as Utils from './utils';
import { Templates } from './templates';
import { Gallery } from './gallery';
import 'bootstrap';
import $ from 'jquery';
import AOS from 'aos';
import 'lightbox2'

Utils.greet();

Templates.load();
Gallery.load();

// configure annimations
AOS.init({
  duration: 700,
  once: true,
  disable: 'mobile'
});

// configure scroll on the navigation
$(document).ready(function () {
  $("a").on('click', function (event) {
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function () {
        window.location.hash = hash;
      });
    }
  });
});
