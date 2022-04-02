
// Header fixed on scroll.
window.onscroll = function() {
    myFunction()
};
var body = document.getElementsByTagName("body")[0];
var sticky = body.offsetTop + 50;

function myFunction() {
    if (window.pageYOffset > sticky) {
        body.classList.add("fixed");
    } else {
        body.classList.remove("fixed");
    }
}

var $ = jQuery.noConflict();

jQuery(document).ready(function($){

  $('.toggler-button').click(function(){
        $('body').toggleClass('show-menu');
    })



/*==========================*/  
/*card-block-slider */  
/*==========================*/ 
if($('.card-block-slider').length > 0){
jQuery('.card-block-slider').slick({
  slidesToShow:3,
  slidesToScroll: 1,
  dots: false,
  arrows: false, 
  infinite: true, 
  centerMode: false, 
  responsive: [
    {
      breakpoint: 991,
      settings: {
       
        slidesToShow: 2,
       
      
        adaptiveHeight: false
      }
    },
    {
      breakpoint: 575,
      settings: {
        arrows: false,
        slidesToShow: 1,

        adaptiveHeight: false
      }
    }
  ]
});
}
 
/*==========================*/  
/* Mobile Slider */  
/*==========================*/ 
if($('.services-slider').length > 0){
jQuery('.services-slider').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  dots: false,
  arrows: false, 
  infinite: true, 
  centerMode: false, 
  adaptiveHeight: true,
  responsive: [
    {
      breakpoint: 5000,
      settings: "unslick"
    },
    {
      breakpoint: 991,
      settings: {
        arrows: false,
        slidesToShow:3,
        adaptiveHeight: true
      },

    },
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        slidesToShow:2,
      },

    },
    {
      breakpoint: 578,
      settings: {
        arrows: false,
        slidesToShow:1,
      },

    },

  ]
});
}
 

 
/*==========================*/  
/* Mobile Slider */  
/*==========================*/ 
if($('.member-slider').length > 0){
jQuery('.member-slider').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  dots: false,
  arrows: false, 
  infinite:false, 
  centerMode: false, 
  responsive: [
    {
      breakpoint: 5000,
      settings: "unslick"
    },
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        slidesToShow:2,
      },

    },
    {
      breakpoint: 578,
      settings: {
        arrows: false,
        slidesToShow:1,
      },

    },

  ]
});
}


$("#tab1").click(function(){
        console.log('click')
  $('.member-slider').slick('refresh');
                });
$("#tab2").click(function(){
        console.log('click')
  $('.member-slider').slick('refresh');
                });
$("#tab3").click(function(){
        console.log('click')
  $('.member-slider').slick('refresh');
                });
$("#tab4").click(function(){
        console.log('click')
  $('.member-slider').slick('refresh');
                });
$("#tab5").click(function(){
        console.log('click')
  $('.member-slider').slick('refresh');
                });
$("#tab6").click(function(){
        console.log('click')
  $('.member-slider').slick('refresh');
                });
$("#tab7").click(function(){
        console.log('click')
  $('.member-slider').slick('refresh');
                });
$("#tab8").click(function(){
        console.log('click')
  $('.member-slider').slick('refresh');
                });
/*==========================*/  
/* Scroll on animate */  
/*==========================*/
function onScrollInit( items, trigger ) {
  items.each( function() {
    var osElement = $(this),
        osAnimationClass = osElement.attr('data-os-animation'),
        osAnimationDelay = osElement.attr('data-os-animation-delay');
        osElement.css({
          '-webkit-animation-delay':  osAnimationDelay,
          '-moz-animation-delay':     osAnimationDelay,
          'animation-delay':          osAnimationDelay
        });
        var osTrigger = ( trigger ) ? trigger : osElement;
        osTrigger.waypoint(function() {
          osElement.addClass('animated').addClass(osAnimationClass);
          },{
              triggerOnce: true,
              offset: '95%',
        });
// osElement.removeClass('fadeInUp');
  });
}
onScrollInit( $('.os-animation') );
onScrollInit( $('.staggered-animation'), $('.staggered-animation-container'));


/*==========================*/
/* Header fix */
/*==========================*/
var scroll = $(window).scrollTop();
if (scroll >= 10) {
    $("body").addClass("fixed");
} else {
    $("body").removeClass("fixed");
}


});


$(window).scroll(function() {
    var scroll = $(window).scrollTop();
    if (scroll >= 10) {
        $("body").addClass("fixed");
    } else {
        $("body").removeClass("fixed");
    }
});

/*==========================*/  
/* Range slider*/  
/*==========================*/

    
    var $range1 = $(".js-range-slider");
        $range1.ionRangeSlider({
          type: "double",
          min: 0,
          max: 300000,
          from: 10000,
          to:250000
        });
        $range1.on("change", function () {
          var $inp = $(this);
          var v = $inp.prop("value");     // input value in format FROM;TO
          var from = $inp.data("from");   // input data-from attribute
          var to = $inp.data("to");       // input data-to attribute
          $('.filter-range #minValue').val(from);
          $('.filter-range #maxValue').val(to);
    });
