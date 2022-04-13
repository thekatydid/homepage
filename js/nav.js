let navs = [$("#contents>.container>.item:nth-child(1)"),
$("#contents>.container>.item:nth-child(2)"),
$("#contents>.container>.item:nth-child(3)"),
$("#contents>.container>.item:nth-child(4)"),
$("#contents>.container>.item:nth-child(5)"),
$("#contents>.container>.item:nth-child(6)"),];

$("#contents>.container>.item>ul").hide();

function navsMove(i){
    navs[i].hover(function(){
        $(`#contents>.container>.item:nth-child(${i+1})>ul`).show(300);
    },function(){
        $(this).css("color","gray");
        $(`#contents>.container>.item:nth-child(${i+1})>ul`).hide(300);

    })
}
//웹페이지에서...
if($(window).width()> 481){
    for(i=0; i<navs.length;  i++)
    {
        navsMove(i);
    }
};

