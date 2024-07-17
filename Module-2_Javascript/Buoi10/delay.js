var  phut = 10;
var giay = 0;
var cd = setInterval(delayAlert, 1000);
function delayAlert() {
    if (giay < 10)
        console.log(phut + " : 0" + giay);
    else
        console.log(phut + " : " + giay);
    giay--;
    if (giay < 0) {
        giay = 59;
        phut--;
    }
    if (phut < 0) {
        clearInterval(cd);
    }
}


