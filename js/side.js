const Btitle = $("#mainPartB>.sideContainer>.item>a");
const Blist = $("#mainPartB>.sideContainer>.item>ul");
const Bbar = $("#mainPartB>.sideContainer>.item>#sideBar1");
const NextBtn = $("#nextbtn");

console.log(Bindex);
Btitle.html(`${NavT[Bindex][0]}`);
console.log(`${NavT[Bindex][0]}`);
var msg = ""
for (i = 0; i < NavT[Bindex].length - 1; i++) {
    msg += `<li>${NavT[Bindex][i + 1]}</li>`
}
Blist.html(msg);
// 다음으로 넘어가는 버튼
function next() {
    //인덱스가 최대를 넘으면 돌아오게
    if (Bindex == NavT.length - 1) { Bindex = -1; }
    Btitle.html(`${NavT[Bindex + 1][0]}`);
    //list 추가
    msg = "";
    for (i = 0; i < NavT[Bindex + 1].length - 1; i++) {
        msg += `<li>${NavT[Bindex + 1][i + 1]}</li>`
    }
    Blist.html(msg);
    //애니메이션
    Btitle.hide();
    Btitle.fadeIn(200);
    Bbar.hide();
    Bbar.show(400);
    Blist.hide();
    Blist.fadeIn(200);
    NextBtn.animate({
        opacity: 0.01,
        marginRight: "0px"
    }, 300, "swing").animate({
        opacity: 1,
        marginRight: "10px"
    }
        , 300, "swing");
    ++Bindex;
}