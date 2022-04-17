var money = 10000;
document.querySelector("#fruitMoney").innerHTML = money;

function MakeFruit(name,price,eng)
{
    this.name = name;
    this.price = price;
    this.num = 0;
    this.eng = eng;
}
var strawBerry = new MakeFruit("딸기",4000,"strawBerry");
var apple = new MakeFruit("사과",2000,"apple");
var banana = new MakeFruit("바나나",3000,"banana");
var kiwi = new MakeFruit("키위",4000,"kiwi");

var durian = {
    name: "두리안",
    price: 5000,
    num: 0,
    eng: "durian"
}


function fruitClac(sort) {
    Buy = confirm(`${sort.name}는 ${sort.price}원입니다. 구매하시겠습니까?`);
    
    if(Buy == true) {
        if (money < sort.price){alert("돈이 부족해서 구매할 수 없습니다.");return;}
        money -= sort.price;
        document.querySelector("#fruitMoney").innerHTML = money;
        ++sort.num;
        document.querySelector(`#${sort.eng}`).innerHTML = sort.num;

    }
}

