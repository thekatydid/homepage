var Clicked = false;
if($(window).width()< 481){$("#contents>.container").hide();}
$("#menuIcon").click(function(){
    if(Clicked == false){
        $("#contents>.container").show(300);
        // $("#contents>.container").css("visibility","visible");
        // $("#contents>.container").css("height","auto");

        Clicked = true;
    }else{
        $("#contents>.container").hide(300);
        $("#contents>.container").css("height","0px");
        Clicked = false;
    }
  
})
