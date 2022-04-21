let Bindex = 0 //웹툰 페이지에 해당
const WebtoonCont = $(".webtoonDiv");
const WtBackBtn = $("#WtBackBtn");
var Wtclicked = false;

WtBackBtn.hide();
WebtoonCont.click(function(){
    if(Wtclicked == false){WtBackBtn.show(300);Wtclicked=true;}
    else{WtBackBtn.hide(300);Wtclicked=false;}
})