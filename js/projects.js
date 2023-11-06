$(document).ready(function(){
    
    $("#menu i.fa-bars").click(function(){

        $("#menu ul").css("left", "0%");
    });

    $("#menu ul li i").click(function(){

        $("#menu ul").css("left", "-100%");
    });



    $("#image").hover(function(){

        $("#image").attr("src", "./img/image_hover.jpg"); 
    }, function() {

        $("#image").attr("src", "./img/image_normal.jpg");
    });
    

    $(window).scroll(function(){

        var scrollTop = $(window).scrollTop();

        var windowHeight = $(window).height();

        var menuHeight = $("#menu").height();

        var maxScroll = windowHeight - menuHeight;

        if(scrollTop >= maxScroll){

        }

        var opacity = scrollTop / maxScroll;

        $("#menu").css("background-color", "rgba(0,0,0, " + opacity + ")")

    })


});