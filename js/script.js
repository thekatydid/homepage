const Webtoon = {
    name: "<a href='webtoonWorld.html'>웹툰</a>",
    list: ["세계관", "캐릭터", "시놉시스", "컨셉아트", "웹툰보기"],
    linkList: ["<a href='webtoonWorld.html'>세계관</a>",
        "<a href='webtoonCharacter.html'>캐릭터</a>",
        "<a href='webtoonSynopsis.html'>시놉시스</a>",
        "<a href='webtoonConceptArt.html'>컨셉아트</a>",
        "<a href='webtoon1.html'>웹툰보기</a>"
    ]
}
const GameMaking = {
    name: "<a href='webtoonWorld.html'>게임 제작</a>",
    list: ["세계관", "캐릭터", "시놉시스", "컨셉아트"],
    linkList: ["<a href='webtoonWorld.html'>아이디어</a>",
        "<a href='webtoonCharacter.html'>유니티</a>",
        "<a href='webtoonSynopsis.html'>시놉시스</a>",
        "<a href='webtoonConceptArt.html'>컨셉아트</a>",]
}
const Coding = {
    name: "<a href='coding_HCJ.html'>코딩</a>",
    list: ["세계관", "캐릭터", "시놉시스", "컨셉아트"],
    linkList: ["<a href='webtoonWorld.html'>C/C#/C++</a>",
        "<a href='coding_HCJ.html'>HTML/CSS/JS</a>",
        "<a href='webtoonSynopsis.html'>java/python</a>",
        "<a href='webtoonConceptArt.html'>swift</a>",]
}
const Modelling = {
    name: "<a href='webtoonWorld.html'>모델링</a>",
    list: ["블렌더", "캐릭터", "시놉시스", "컨셉아트"],
    linkList: ["<a href='webtoonWorld.html'>캐릭터</a>",
        "<a href='webtoonCharacter.html'>소품</a>",
        "<a href='webtoonSynopsis.html'>배경</a>",
        "<a href='webtoonConceptArt.html'>애니메이션</a>",]
}

const Art = {
    name: "<a href='art_AnalogDrawing.html'>아트</a>",
    list: ["세계관", "캐릭터", "시놉시스", "컨셉아트"],
    linkList: ["<a href='art_AnalogDrawing.html'>드로잉</a>",
        "<a href='webtoonCharacter.html'>디지털일러스트</a>",
        "<a href='webtoonSynopsis.html'>영상</a>",
        "<a href='art_Fashionshow.html'>패션쇼</a>",]
}


const Fashion = {
    name: "<a href='fashion_Fashionshow.html'>패션</a>",
    list: ["세계관", "캐릭터", "시놉시스", "컨셉아트"],
    linkList: ["<a href='fashion_Fashionshow copy.html'>패션일러스트</a>",
        "<a href='webtoonCharacter.html'>패션머천다이징</a>",
        "<a href='webtoonSynopsis.html'>패션과컬러</a>",
        "<a href='fashion_FashionShow.html'>패션쇼</a>",]
}
const Etc = {
    name: "<a href='webtoonWorld.html'>기타</a>",
    list: ["세계관", "캐릭터", "시놉시스", "컨셉아트"],
    linkList: ["<a href='webtoonWorld.html'>드로잉</a>",
        "<a href='webtoonCharacter.html'>디지털일러스트</a>",
        "<a href='webtoonSynopsis.html'>영상</a>",
        "<a href='art_Fashionshow.html'>패션쇼</a>",]
}

let Webtoons = [];
    Webtoons.push(Webtoon.name);
    for(i=0; i<Webtoon.linkList.length; i++){Webtoons.push(Webtoon.linkList[i])};
    


let GameMakings = [
    GameMaking.name,
    GameMaking.linkList[0],
    GameMaking.linkList[1],
    GameMaking.linkList[2],
    GameMaking.linkList[3],
]
let Codings = [
    Coding.name,
    Coding.linkList[0],
    Coding.linkList[1],
    Coding.linkList[2],
    Coding.linkList[3]
]
let Modellings = [];
Modellings.push(Modelling.name);
for(i=0; i<Modelling.linkList.length; i++){Modellings.push(Modelling.linkList[i])};

let Arts = [];
Arts.push(Art.name);
for(i=0; i<Art.linkList.length; i++){Arts.push(Art.linkList[i])};

let Etcs = [];
Etcs.push(Etc.name);
for(i=0; i<Modelling.linkList.length; i++){Etcs.push(Modelling.linkList[i])};

let Fashions = [];
Fashions.push(Fashion.name);
for(i=0; i<Fashion.linkList.length; i++){Fashions.push(Fashion.linkList[i])};
var NavT = [Webtoons, GameMakings, Codings, Modellings, Arts, Fashions, Etcs];