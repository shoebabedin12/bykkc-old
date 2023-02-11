$(document).ready(function () {
    // flexisel
    $(window).load(function () {
        $("#flexiselDemo1").flexisel({
          visibleItems: 4,
          animationSpeed: 1000,

          autoPlay: true,
          autoPlaySpeed: 3000,
          pauseOnHover: true,
          enableResponsiveBreakpoints: true,
          responsiveBreakpoints: {
            portrait: {
              changePoint: 480,
              visibleItems: 1,
            },
            landscape: {
              changePoint: 640,
              visibleItems: 2,
            },
            tablet: {
              changePoint: 768,
              visibleItems: 2,
            },
          },
        });
      });

// flexSlider
      $(".flexslider").flexslider({
        animation: "slide",
        start: function (slider) {
          $("body").removeClass("loading");
        },
      });
  // start-smoth-scrolling
  $(".scroll").click(function (event) {
    event.preventDefault();
    $("html,body").animate({ scrollTop: $(this.hash).offset().top }, 1000);
  });

  // here stars scrolling icon
  $().UItoTop({ easingType: "easeOutQuart" });

// sticky nav
$(window).scroll(function(){

  if($(this).scrollTop() > 100){
      $('.navbar').addClass('sticky')
  } else{
      $('.navbar').removeClass('sticky')
  }
});

});



