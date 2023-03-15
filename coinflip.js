function display() {
    document.querySelector("body").style.backgroundColor = "#2D2727";
    document.querySelector(".displaybutton").textContent = "Light Mode";
}

function flip() {

    document.querySelector("#displayheads").style.visibility = "hidden";
    document.querySelector("#displaytails").style.visibility = "hidden";
    document.querySelector(".result").style.visibility="visible";

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