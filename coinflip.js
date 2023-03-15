function darkMode() {
    document.querySelector("body").style.backgroundColor = "#2D2727";
    document.querySelector(".darkmode").style.visibility = "hidden";
    document.querySelector("body").style.color = "white";
    document.querySelector(".lightmode").style.visibility = "visible";

}

function lightMode() {
    document.querySelector("body").style.backgroundColor = "white";
    document.querySelector(".lightmode").style.visibility = "hidden";
    document.querySelector(".darkmode").style.visibility = "visible";
    document.querySelector("body").style.color = "black";

}


function loading() {
    document.querySelector("#displayheads").style.visibility = "hidden";
    document.querySelector("#displaytails").style.visibility = "hidden";
    document.querySelector(".prompt").style.visibility = "hidden";
    document.querySelector(".subtitle").style.visibility = "hidden";
    document.querySelector(".result").style.visibility = "hidden";
    document.querySelector(".headsbutton").style.visibility = "hidden";
    document.querySelector(".tailsbutton").style.visibility = "hidden";
    document.querySelector(".flipping").style.visibility = "visible";
    document.querySelector(".flippingbar").style.visibility = "visible";
    document.querySelector(".flipmessage").style.visibility = "visible";


}
function flip() {

    setTimeout(() => {

        document.querySelector("#displayheads").style.visibility = "hidden";
        document.querySelector("#displaytails").style.visibility = "hidden";
        document.querySelector(".result").style.visibility = "visible";
        document.querySelector(".flipping").style.visibility = "hidden";
        document.querySelector(".flippingbar").style.visibility = "hidden";
        document.querySelector(".flipmessage").style.visibility = "hidden";
        document.querySelector(".prompt").style.visibility = "visible";
        document.querySelector(".headsbutton").style.visibility = "visible";
        document.querySelector(".tailsbutton").style.visibility = "visible";
        document.querySelector(".subtitle").style.visibility = "visible";
        document.querySelector(".subtitle").textContent = "TRY AGAIN?";


        const flipResult = Math.floor((Math.random() * 2) + 1);

        if (flipResult === 1) {
            document.querySelector(".result").setAttribute("src", "https://media.tenor.com/XHkc2umHa8AAAAAi/degen-games-games.gif");
            document.querySelector(".prompt").textContent = "HEADS";

        }
        else if (flipResult === 2) {
            document.querySelector(".result").setAttribute("src", "https://media.tenor.com/4WvOvFrOA6cAAAAi/coin-coi.gif");
            document.querySelector(".prompt").textContent = "TAILS";
            ;
        }




    }

        , 5000);


}
