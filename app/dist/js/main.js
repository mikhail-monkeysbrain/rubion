$(document).ready(function(){
  $(".slide-single").owlCarousel({
    loop:true,
    nav:true,
    margin:10,
    navText: [],
    responsive:{
      0:{
        items:1
      },
      600:{
        items:1
      },
      1000:{
        items:1
      }
    }
  });

  $(".slide-one").owlCarousel({
    loop:true,
    nav:true,
    margin:10,
    navText: [],
    responsive:{
      0:{
        items:1
      },
      600:{
        items:3
      },
      1000:{
        items:4
      }
    }
  });

  $(".slide-two").owlCarousel({
    loop:true,
    nav:true,
    margin:10,
    navText: [],
    responsive:{
      0:{
        items:1
      },
      600:{
        items:1
      },
      1000:{
        items:2
      }
    }
  });

  $(".slide-five").owlCarousel({
    loop:true,
    nav:true,
    margin:10,
    navText: [],
    responsive:{
      0:{
        items:1
      },
      600:{
        items:3
      },
      1000:{
        items:5
      }
    }
  });
});

$(document).ready(function(){
  width = $('.mansonry--item__img').width();
  $('.mansonry--item__semi').height(width);
  $('.mansonry--item').height(width);
  console.log(height);
});


$(function(){
  $(".open").click(function () {
    $(this).toggleClass("menu--on");
    $('.mobile__menu').toggleClass('show')
    $('.mobile__menu a').click(function(){
      $('.mobile__menu').toggleClass('show')
    });
  });
});

$(function(){
  $(".forma").submit(function() {
      $.ajax({
          type: "POST",
          url: "multisend.php",
          data: $(this).serialize()
      }).done(function() {
          $(this).find("input").val("");
          $('#send').show(500);
          console.log("all ok")
          $(".forma").trigger("reset");
      });
      return false;
  });
  $("#send").click(function(){
    $(this).toggle(500);
  });
});
$(function(){
  $(".forma2").submit(function() {
      $.ajax({
          type: "POST",
          url: "multisend2.php",
          data: $(this).serialize()
      }).done(function() {
          $(this).find("input").val("");
          $('#send').show(500);
          console.log("all ok")
          $(".forma2").trigger("reset");
      });
      return false;
  });
});

