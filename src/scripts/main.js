import {
  greet
} from './utils';
import 'bootstrap';
import $ from 'jquery';
import AOS from 'aos';

greet();

AOS.init({
  duration: 700,
  once: true
});

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
