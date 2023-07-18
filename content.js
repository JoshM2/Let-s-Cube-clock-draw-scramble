function drawScramble(scramble, element) {
    try {
        // checks if scramble-display script is loaded, if not it loads it
        if (!document.querySelector("script[src='https://cdn.cubing.net/js/scramble-display']")) {
            const scriptElement = document.createElement("script");
            scriptElement.src = "https://cdn.cubing.net/js/scramble-display";
            scriptElement.type = "module";
            document.head.appendChild(scriptElement);
        }
        // checks if scramble-display element is loaded, if it is it sets the scramble to the current scramble
        let drawElement = document.querySelector("scramble-display");
        if (drawElement) {
            drawElement.style.display = "block";
            // hides the draw scramle if the event isn't clock
            if (document.querySelector("#change-event-select").innerHTML != "Clock") {
                drawElement.style.display = "none";

            }
            // makes sure that the scramble has loaded
            else if (scramble.includes("y2")){
                drawElement.setAttribute("scramble", scramble);
            }
        }
        // if the scramble display element isn't loaded, it is created and inserted after the scramble
        else if (document.querySelector("#change-event-select").innerHTML == "Clock") {
            drawElement = document.createElement("scramble-display");
            drawElement.setAttribute("event", "clock");
            drawElement.setAttribute("scramble", scramble);
            element.parentNode.insertBefore(drawElement, element.nextSibling);
        }
    }
    catch (e) {

    }
}

let newScramble = "";
let oldScramble = "";
let scrambleElement = "";
// repeats to check if there is a new scramble
var interval = setInterval(function() {
    try {
        let scrambleElement = document.querySelector(".MuiTypography-root.undefined.MuiTypography-h6")
        newScramble = scrambleElement.innerHTML;
        if (newScramble != oldScramble) {
            drawScramble(newScramble, scrambleElement);
            oldScramble = newScramble;
        }
    }
    catch (e) {

    }
}, 100);
