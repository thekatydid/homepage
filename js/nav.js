let navs = [$("#contents>.container>.item:nth-child(1)"),
$("#contents>.container>.item:nth-child(2)"),
$("#contents>.container>.item:nth-child(3)"),
$("#contents>.container>.item:nth-child(4)"),
$("#contents>.container>.item:nth-child(5)"),
$("#contents>.container>.item:nth-child(6)"),];
$("#contents>.container>.item>ul").hide();

let headerDelay = 300;
let booleanDelay = false;
// 이 불린 값을 setTimeout에 넣어 show(headerDelay) 동안 hidden이 호출되지 않게해서 반복 버그를 없앤다.
// let judgeDelay = false;
var clicktime;
function navsMove(i){
    const headerlist = $(`#contents>.container>.item:nth-child(${i+1})>ul`);
    navs[i].hover(function(){
        if(booleanDelay == true){return;};
        headerlist.show(headerDelay);
        booleanDelay = true;
        // const date1 = new Date();
        // clicktime = date1.getTime();
    },function(){
        // const date2 = new Date();
        // const elapsedMSec = date2.getTime()- clicktime;
        // console.log(elapsedMSec);
        // if(elapsedMSec<headerDelay){
        //     setTimeout(function(){
        //         headerlist.hide(headerDelay);
        //     },headerDelay-elapsedMSec);
        //     return;}
        headerlist.hide(headerDelay);
        setTimeout(() => {
            booleanDelay = false;
        }, 600);
    })
} 

//웹페이지에서...
if($(window).width()> 481){
    for(i=0; i<navs.length;  i++)
    {
        navsMove(i);
    }
    
};

