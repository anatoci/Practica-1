$(document).ready(function(){
    

    $("#menu i.fa-bars").click(function(){
        
        $("#menu ul").css("left", "0%");
    });


    $("#menu ul li").click(function(){
        
        $("#menu ul").css("left", "-100%");
    });

    $(window).scroll(function() {    
        var scrollTop = $(this).scrollTop();
        console.log(scrollTop);

        var windowHeight = $(window).height();

        var menuHeight = $("#menu").height();

        var maxScroll = windowHeight - menuHeight;
        console.log("max " + maxScroll);

        var opacity = scrollTop / maxScroll;

        $("#menu").css("background-color", "rgba(0, 0, 0, " + opacity + ")");
    });


});