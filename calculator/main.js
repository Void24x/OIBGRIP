const scrnOn = document.getElementById("on");
let scrnStatus = scrnOn.value;
console.log(scrnStatus);


let scrn = document.getElementById("screen");
buttons = document.querySelectorAll('button');
let scrnVal = '';
for (item of buttons) {
    item.addEventListener('click', (e) => {
        btntxt = e.target.innerText;

        if (btntxt.toLowerCase() == "on") {
            scrnOn.value = "on";
            scrnStatus = scrnOn.value;
            scrn.style.backgroundColor = "white";
            scrn.removeAttribute("placeholder");
        }

        console.log(btntxt);
        if (scrnStatus == "on") {

            if (btntxt == 'x') {
                btntxt = '*';
                scrnVal += btntxt;
                scrn.value = scrnVal;
            }
            else if (btntxt == 'cls') {
                scrnVal = "";
                scrn.value = scrnVal;
            }
            else if (btntxt == '=') {
                scrn.value = eval(scrnVal);
                scrnVal = scrn.value;
            }
            else if (btntxt == 'sqrt') {
                scrn.value = Math.sqrt(Number(scrnVal))
            }
            else if (btntxt == 'del') {
                scrnVal = scrnVal.slice(0, scrnVal.length - 1);
                scrn.value = scrnVal;
            }
            else if (btntxt.toLowerCase() == "off") {
                scrnVal = "";
                scrn.value = scrnVal;
                scrnOn.value = "off";
                scrnStatus = "off";
                scrn.style.backgroundColor = "grey";
                scrn.setAttribute("placeholder" , "Press ON to turn on the screen");
            }
            else if(btntxt == '%') {
                scrnVal = Number(scrnVal)/100;
                scrnVal = scrnVal + "*";
                scrn.value = scrnVal;
            }
            else {
                if (btntxt.toLowerCase() == "on") {
                    scrnVal = "";
                    scrn.value = scrnVal;
                } else {
                    scrnVal += btntxt;
                    scrn.value = scrnVal;
                }
            }

        }

    })
}











