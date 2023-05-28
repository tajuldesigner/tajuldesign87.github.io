$(function(){
  // counterUp js
    $('.counter').counterUp({
        delay: 30,
        time: 3000
    });



    // progressbar js
    $('.5html').rProgressbar({
        percentage: 85,
        fillBackgroundColor:'#420808',
        backgroundColor:'#666666',
        borderRadius:'0px',
        height:'10px',
        width:'80%',
        duration: 2000,

      });
    $('.3css').rProgressbar({
        percentage: 50,
        fillBackgroundColor:'#420808',
        backgroundColor:'#666666',
        borderRadius:'0px',
        height:'10px',
        width:'80%',
        duration: 1800,

      });
    $('.vjs').rProgressbar({
        percentage: 20,
        fillBackgroundColor:'#420808',
        backgroundColor:'#666666',
        borderRadius:'0px',
        height:'10px',
        width:'80%',
        duration: 2100 ,

      });
    $('.jqury').rProgressbar({
        percentage: 30,
        fillBackgroundColor:'#420808',
        backgroundColor:'#666666',
        borderRadius:'0px',
        height:'10px',
        width:'80%',
        duration: 2000,

      });
    $('.wordpress').rProgressbar({
        percentage: 90,
        fillBackgroundColor:'#420808',
        backgroundColor:'#666666',
        borderRadius:'0px',
        height:'10px',
        width:'80%',
        duration: 1800,

      });
    $('.photoshop').rProgressbar({
        percentage: 40,
        fillBackgroundColor:'#420808',
        backgroundColor:'#666666',
        borderRadius:'0px',
        height:'10px',
        width:'80%',
        duration: 2100 ,
      });

  // fixed navbar js
  var navbar = $('.navbar');
  $(window).on('scroll',function(){
        
    var scrolling = $(this).scrollTop();
    
    if(scrolling > 200){
        navbar.addClass("bg");
       }
    else{
        navbar.removeClass('bg');
    }
});

// As A Vanilla JavaScript Plugin
var gallery =new SimpleLightbox('#portfolio .container .gallary_img a img', {


  });


  // cursor
  // $(document).ready(function(){
  //     $('#serialcursor').serialcursor();

  //   });
    

  // slick slider
  $('.testimonials_item').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    dots: true,
    prevArrow: '<span class="prev_arrow"><i class="fa-regular fa-square-caret-left"></i></span>',
    nextArrow: '<span class="next_arrow"><i class="fa-regular fa-square-caret-right"></i></span>',
    
  });

  // loader js
  $(window).on("load",function(){
    $("#loadeer_container").fadeOut(2500);

  });

  
  // toggle switch color js
  $('.swither_button').click(function(){
    $('.colord_switcher').toggleClass('color_togoller');
  });
  
  let themeBtn = document.querySelectorAll('.theme_btns');

themeBtn.forEach(color => {
  color.addEventListener('click',() =>{
    let dataColor = color.getAttribute('data-color');
    document.querySelector(':root').style.setProperty('--main-color',dataColor);
  }); 
});


// back to top js
var backtotop = $('.back2top');
var html_body = $('html,body');

backtotop.on('click',function(){
  html_body.animate({scrollTop:0},300);
});

$(window).on('scroll',function(){
var scrolliness = $(this).scrollTop();

if(scrolliness > 400){
  backtotop.show();
 }
else{
  backtotop.hide();
};
});




// type js
var typed = new Typed('.type', {
  strings: ['A Frontend Designer', 'A Web Developer'],
  smartBackspace: true,
  typeSpeed: 70,
  startDelay: 50,
  loop: true,
  backDelay: 1000,
  
  // Default value
});

// venubox js
new VenoBox({
  selector: '.venobox'
});

});




 