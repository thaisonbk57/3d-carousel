$(document).ready(function() {
  const carousel = $("#carousel");
  const itemsCount = 9;
  let step = 360 / itemsCount;
  let photoIndex = 0;

  function spinCarousel() {
    let angle = photoIndex * step;
    carousel.css("transform", `translate(-50%, -50%) rotateY(-${angle}deg)`);
  }

  function next() {
    photoIndex++;
    spinCarousel();
  }

  function prev() {
    photoIndex--;
    spinCarousel();
  }
  $("#next")
    .unbind("click")
    .on("click", function() {
      next();
    });
  $("#prev")
    .unbind("click")
    .on("click", function() {
      prev();
    });
});
