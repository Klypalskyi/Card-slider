document.addEventListener("DOMContentLoaded", function() {
  var elems = document.querySelectorAll(".carousel");
  var instances = M.Carousel.init(elems, options);
});

// Or with jQuery

$(document).ready(function() {
  $(".carousel").carousel({
    dist: -180,
    numVisible: 7,
    padding: -200
  });
});

const form = document.querySelector(".value");
const input = document.querySelector(".value-input");

form.addEventListener("submit", submitForm);

function submitForm(e) {}

$(function() {
  $("#test").swipe({
    //Generic swipe handler for all directions
    swipe: function(
      event,
      direction,
      distance,
      duration,
      fingerCount,
      fingerData
    ) {
      if (direction === "down") {
        let summ = input.value;

        if (summ !== '') {
          alert(`Сумма ${summ} успішно переведена`);
          form.reset();
        }
      } else return;
    }
  });
  $("#container").swipe({
    //Generic swipe handler for all directions
    swipe: function(
      event,
      direction,
      distance,
      duration,
      fingerCount,
      fingerData
    ) {
      if (direction === "down") {
        let summ = input.value;

        if (summ !== '') {
          alert(`Сумма ${summ} успішно переведена`);
          form.reset();
        }
      } else return;
    }
  });
  $("#crl-tp").swipe({
    //Generic swipe handler for all directions
    swipe: function(
      event,
      direction,
      distance,
      duration,
      fingerCount,
      fingerData
    ) {
      if (direction === "down") {
        let summ = input.value;

        if (summ !== '') {
          alert(`Сумма ${summ} успішно переведена`);
          form.reset();
        }
      } else return;
    }
  });
  $("#form").swipe({
    //Generic swipe handler for all directions
    swipe: function(
      event,
      direction,
      distance,
      duration,
      fingerCount,
      fingerData
    ) {
      if (direction === "down") {
        let summ = input.value;

        if (summ !== '') {
          alert(`Сумма ${summ} успішно переведена`);
          form.reset();
        }
      } else return;
    }
  });
  $("#crl-bt").swipe({
    //Generic swipe handler for all directions
    swipe: function(
      event,
      direction,
      distance,
      duration,
      fingerCount,
      fingerData
    ) {
      if (direction === "down") {
        let summ = input.value;

        if (summ !== '') {
          alert(`Сумма ${summ} успішно переведена`);
          form.reset();
        }
      } else return;
    }
  });


});
