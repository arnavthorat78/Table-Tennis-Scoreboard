// Tooltip.

class Tooltip {
    constructor(element) {
        this.element = element;
        this.message = element.getAttribute("data-message");
    }
    init() {
        const tip = document.createElement("div");
        tip.classList.add("tip");
        tip.textContent = this.message;
        this.element.appendChild(tip);

        this.element.addEventListener("mouseenter", () => {
            tip.classList.add("active");
        });

        this.element.addEventListener("mouseleave", () => {
            tip.classList.remove("active");
        });
    }
}

const tooltip = new Tooltip(document.querySelector(".tooltip"));

tooltip.init();

// Getting form information.

const form = document.querySelector(".setupform");
const startForm = document.querySelector(".starter");

const game = document.querySelector(".game");
const oneScore = document.querySelector(".playeronescore");
const twoScore = document.querySelector(".playertwoscore");
const oneName = document.querySelector(".playeronename");
const twoName = document.querySelector(".playertwoname");
const serverOne = document.querySelector(".serverOne");
const serverTwo = document.querySelector(".serverTwo");

let playerOneScore = 0;
let playerTwoScore = 0;

const addPoint = player => {
    if (player === "one") {
        playerOneScore += 1;
        oneScore.innerHTML = playerOneScore;
    }
    else if (player === "two") {
        playerTwoScore += 1;
        twoScore.innerHTML = playerTwoScore;
    }  
    
    if (serverOne.innerHTML === "•") {
        serverOne.innerHTML = "";
        serverTwo.innerHTML = "•";
    }
    else {
        serverTwo.innerHTML = "";
        serverOne.innerHTML = "•";
    }
    let serverCheck = (playerOneScore + playerTwoScore - 1) % 2; // 0 + 0 - 1 % 2
    if (serverCheck === 0) {
        if (serverOne.innerHTML === "•") {
            serverOne.innerHTML = "";
            serverTwo.innerHTML = "•";
        }
        else {
            serverTwo.innerHTML = "";
            serverOne.innerHTML = "•";
        }
    }
};

form.addEventListener("submit", e => {
    e.preventDefault();

    const playerOneName = form.onename.value;
    const playerTwoName = form.twoname.value;

    const bestOf = form.bestof.value;
    const server = form.service.value;

    startForm.style.visibility = "hidden";
    game.style.visibility = "visible";

    oneName.innerHTML = playerOneName;
    twoName.innerHTML = playerTwoName;

    if (server === "playerone") {
        serverOne.innerHTML = "•";
    }
    else {
        serverTwo.innerHTML = "•";
    }
});
