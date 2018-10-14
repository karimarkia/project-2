
/* Show and hide navbar */
$(document).ready(function() {
   
    'use strick';
    
    $(window).scroll(function(){
       
        'use strick';
        
        if($(window).scrollTop() < 80){
            
            $('.navbar').css({
               'margin-top':'-100px',
                'opasity':'0'
            });
            $('.navbar-default').css({
               'backgroundColor':'rgba(59,59,59, 0)' 
            });
            
        } else{ 
            $('.navbar').css({
               'margin-top':'0px',
                'opasity': ' 1 '
            });
            
            $('.navbar-default').css({
               'backgroundColor':'rgba(59,59,59, 0.7)' ,
                'border-color': '#444'
            });
            
            $('.navbar-brand img').css({
               'height':'35px',
                'padding-top': '0px'
            });
            
            $('.navbar-nav > li > a').css({
               'padding-top': '15px'
            });
        }
    });
});


/* smooth scrolling */
$(document).ready(function() {
   
    'use strick';

    $('.nav-item , #scroll-top').click(function(){
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')&& location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {     
        $('html, body').animate({scrollTop: target.offset().top}, 1000); 
            return false;
          }
    }
    });
});

/* active navbar */
$(document).ready(function() {
    
     'use strick';
    
$('.navbar-nav li a').click(function(){
    'use strick';
   $('.navbar-nav li a').parent().removeClass("active");
   $(this).parent().addClass("active");
    });
});

/* active the navbar at each section */
$(document).ready(function() {
    'use strick';
    
    $(window).scroll(function(){
        'use strick';
        
        $("section").each(function(){
            'use strick';
            
            var bb=$(this).attr("id");
            var hei=$(this).outerHeight();
            var grttop=$(this).offset().top-70;
            
            if($(window).scrollTop() > grttop && $(window).scrollTop() < grttop + hei){
                $(".navbar-nav li a[href='#" + bb + "']").parent().addClass("active");
            } else {
                $(".navbar-nav li a[href='#" + bb + "']").parent().removeClass("active");
            }
            
        });
        
    });
    
});


/* bx screen slider */ 
$(document).ready(function(){
    $('.bxslider').bxSlider({
        slideWidth: 292.5,
        auto:true,
        minSlides:1,
        maxSlides:2,
        slideMargin:50
    });
});


/* counterUp */
$(document).ready(function(){
    'use strick';
    $('.counter-num').counterUp({
    delay: 10,
    time: 2000
    });
});


/* animate */ 
$(document).ready(function(){
    'use strick';
   new WOW().init(); 
});


/* smooth scrolling for download btn*/
$(document).ready(function(){
$('.btn-download').click(function() {
    $('html,body').animate({
        scrollTop: $('.download-now').offset().top},
        'slow');
    });
});