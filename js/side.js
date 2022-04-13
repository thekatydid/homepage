let Bindex = 0

var Webtoons= ["웹툰","세계관","캐릭터","시놉시스","컨셉아트"];
var GameMakings= ["게임 제작","시나리오","a","b"];
var Codings= ["코딩","C#","C++","html/css/js"];
var Modellings=["블렌더","d","b","b"];
var Drawings=["아날로그","디지털","b","b"];
var Etcs=["기타","아이디어창고","b","b","k"];


var NavT = [Webtoons, GameMakings, Codings, Modellings, Drawings, Etcs];


const Btitle = $("#mainPartB>.sideContainer>.item>a");
const Blist = $("#mainPartB>.sideContainer>.item>ul");
const Bbar = $("#mainPartB>.sideContainer>.item>#sideBar1");



function next() {
    //인덱스가 최대를 넘으면 돌아오게
    if(Bindex==NavT.length-1){Bindex = -1;}
    Btitle.html(`${NavT[Bindex+1][0]}`);
   
    //list 추가
    var msg = "";
    for (i=0; i<NavT[Bindex+1].length-1; i++){
        msg += `<li>${NavT[Bindex+1][i+1]}</li>`
    }
    Blist.html(msg);

    //애니메이션
    Btitle.hide();
    Btitle.fadeIn(200);
    Bbar.hide();
    Bbar.show(400);
    Blist.hide();
    Blist.fadeIn(200);
    ++Bindex;
}
