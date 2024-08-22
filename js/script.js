
$(document).ready(function(){
    $('.portAni').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 2000,
        dots: true,
        infinite: true,
        speed: 500,
        cssEase: 'ease-out',
        arrows:true,
        dotsClass:'slick-dots', 
        customPaging: function(slide, i) {
            return '<img src="img/slick/i'+(i+1)+'.png" alt="">'
        }
    });

    var c=[
        $("#aboutme").offset().top,
        $("#skill").offset().top,
        $("#portfolio").offset().top,
        $("#process").offset().top,
        $("#contact").offset().top
    ]; 
    console.log(c[0]);
    var n;
    $("header div.wrap ul.gnb li").click(function(){
     n =  $(this).index();
      $("html,body").animate({scrollTop:c[n]},500);  
        return false; 
    });
    $(".rMenu li").click(function(){
     r =  $(this).index();
      $("html,body").animate({scrollTop:c[r]},500);  
        return false; 
    });
    $("footer div.wrap ul.fnb li").click(function(){
        f =$(this).index();
        $("html,body").animate({scrollTop:c[f]},500);
        return false; 
    });
    $("header ul.ham-m li").click(function(){
        f =$(this).index();
        $("html,body").animate({scrollTop:c[f]},500);
        return false; 
    });
    


    //사이드 바
   
    // $('header').after('<div class="rMenu"></div>');
    // $('.rMenu').append('<ul></ul>');
    // var n =0;
    // var rmenu=['About Me','Skill&Tools','Portfolio','Learning Archive','Contact'];
    // for(let i=0;i<5;i++){
    //     $('.rMenu ul').append('<li></li>');
    //     $('.rMenu ul li').eq(n).text(rmenu[n]);
    //     n++;
    // };
    // $(".rMenu").hide();
    // var wc;
    // var titleH = $("#title div.wrap").offset().top;
    // $(window).on("scroll",function(){
    //     wc=$(window).scrollTop();
     
    //     if(wc < titleH){
    //         $(".rMenu").show();
    //         $(".rMenu").addClass("slideR");
    //     }
    //     if(wc > titleH){
    //         $(".rMenu").removeClass("slideR");
    //     }
    // });




});
// 스크롤시 히든메뉴 보이기
$(function(){
    var st = $(window).scrollTop();
    var menuT = $("#container").offset().top;
    console.log(menuT)
    $(window).scroll(function(){
        var st = $(window).scrollTop();
        if(st>menuT){
            $(".rMenu").stop().animate({"right":"0px"},500);
        }
        else
        {$(".rMenu").stop().animate({"right":"-180px"},500);}
    });



    //모바일 메뉴 나오게
    $(".close").hide();
    $("header button.ham").click(function(){
        $("header .menu-m").fadeIn(100);
        $(".close").fadeIn();
        return false;
    });
    $(".close").click(function(){
        $("header .menu-m").fadeOut(100);
        $(".close").fadeOut();
        return false;
    })


});
