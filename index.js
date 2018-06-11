$(document).ready(function(){

    console.log("test");
    var timer = 1000;
    $("#top-title").hide();
    $("#top-text").hide();
    $(".down-button").hide();
    $("#nav-bar").hide();
    setTimeout(function(){
        $("#top-title").fadeIn("slow");
    },0);
    setTimeout(function(){
        $("#top-title").fadeOut("slow");
    }, 1.5 * timer);
    setTimeout(function(){
        $("#top-title").text("designer");
        $("#top-title").fadeIn("slow");
    },3 * timer);
    setTimeout(function(){
        $("#top-title").fadeOut("slow");
    }, 4 * timer);
    setTimeout(function(){
        $("#top-title").text("developer");
        $("#top-title").fadeIn("slow");
    },5 * timer);
    setTimeout(function(){
        $("#top-title").fadeOut("slow");
    }, 6 * timer);
    setTimeout(function(){
        $("#top-title").text("entrepreneur");
        $("#top-title").fadeIn("slow");
    },7 * timer);
    setTimeout(function(){
        $("#top-title").fadeOut("slow");
    }, 8 * timer);
    setTimeout(function(){
        $("#top-title").text("aka kulphongpotato");
        $("#top-title").fadeIn("slow");
    },9.5 * timer);
    setTimeout(function(){
        $("#top-title").fadeOut("slow");
    }, 10.5 * timer);
    setTimeout(function(){
        $("#top-title").text("zkulphong");
        $("#top-text").fadeIn("slow");
        $("#top-title").fadeIn("slow");
    }, 11.5 * timer);
    setTimeout(function(){
        $(".down-button").fadeIn("slow");
        $("#nav-bar").fadeIn("slow");
    }, 12.5 * timer);


    $(window).on('wheel', function(e) {

    	var delta = e.originalEvent.deltaY;

    	if (delta > 0){

            $("#nav-bar").fadeOut("slow");
        }
    	else {



            $("#nav-bar").fadeIn("slow");

        }
    });

    $(".down-button").on('click', function(event){
        var viewHeight = $('#MainContainer').height();
        var position = '+=' + viewHeight + 'px'
        console.log(position);
        $('#MainContainer').animate({scrollTop: position}, 800);
    });

    $("#home-nav").on('click', function(event){
        var viewHeight = $('#MainContainer').height();
        $('#MainContainer').animate({scrollTop: 0}, 800);
    });

    $("#about-nav").on('click', function(event){
        var viewHeight = $('#MainContainer').height();
        $('#MainContainer').animate({scrollTop: viewHeight * 1}, 800);
    });

    $("#skills-nav").on('click', function(event){
        var viewHeight = $('#MainContainer').height();
        $('#MainContainer').animate({scrollTop: viewHeight * 2}, 800);
    });

    $("#projects-nav").on('click', function(event){
        var viewHeight = $('#MainContainer').height();
        $('#MainContainer').animate({scrollTop: viewHeight * 3}, 800);
    });

    $("#contact-nav").on('click', function(event){
        var viewHeight = $('#MainContainer').height();
        $('#MainContainer').animate({scrollTop: viewHeight * 12}, 800);
    });

    var x = window.matchMedia("(max-width: 900px)")
    mediaQuery(x);
    x.addListener(mediaQuery);
});


function mediaQuery(x) {
    if (x.matches) { // If media query matches
        //document.body.style.backgroundColor = "yellow";
    } else {
        //document.body.style.backgroundColor = "pink";
    }
}
