let helloSwitch = false;
function Hello() {
    var rnd0 = Math.floor(Math.random() * 20);
    var rnd1 = Math.floor(Math.random() * 10) + 45;
    var rnd2 = Math.floor(Math.random() * 3) + 100;

    $("#sayHello div").css({
        "top": rnd0,
        "left": `${rnd1}%` 
        
    })
}
function HelloInterval() {
    if (helloSwitch == false) {
        var Shaking = setInterval(function(){
            if(helloSwitch == false){clearInterval(Shaking);}Hello()}, 100);
        helloSwitch = true;
        }
    else {
        helloSwitch = false; 
    }
}
