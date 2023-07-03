$(function(){
    var html_body = $('html,body');
    var backtotop = $('.back2top');
    var navbar = $('.navbar');

    backtotop.on('click',function(){
        html_body.animate({scrollTop:0},1000);
    });


    $(window).on("load",function(){
        $("#loadeer_container").fadeOut(2500);
      
      });

    
    $(window).on('scroll',function(){
        
        var scrolling = $(this).scrollTop();
        
        if(scrolling > 50){
           $('.navbar').addClass("bg");
           }
        else{
            navbar.removeClass('bg');
        }
        
        if(scrolling > 300){
            backtotop.fadeIn();
           }
        else{
            backtotop.fadeOut();
        }
    });
})