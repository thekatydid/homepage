//리스트 뽑기
const header = $("#contents>.container");
var headermsg = ""; 
for(i=0; i<NavT.length; i++){
    headermsg += `<div class="item">${NavT[i][0]}</a><ul>`
    for(j=0; j<NavT[i].length-1; j++){
        headermsg += `<li>${NavT[i][j+1]}</li>`
    }
    headermsg += `</ul></div>`
}
header.html(headermsg);


//클릭이벤트
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
