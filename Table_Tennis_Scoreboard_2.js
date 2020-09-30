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
const addScoreOne = document.querySelector(".addpointone");
const addScoreTwo = document.querySelector(".addpointtwo");
const backScoreTwo = document.querySelector(".backpointone");
const backScoreOne = document.querySelector(".backpointtwo");
const oneGames = document.querySelector(".playeronegames");
const twoGames = document.querySelector(".playertwogames");

let playerOneScore = 0;
let playerTwoScore = 0;

let playerOneWins = 0;
let playerTwoWins = 0;

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
    if (playerOneScore >= 11 && playerOneScore - playerTwoScore >= 2) {
        playerOneWins += 1;
        playerOneScore = 0;
        playerTwoScore = 0;
        oneScore.innerHTML = playerOneScore;
        twoScore.innerHTML = playerTwoScore;
        oneGames.innerHTML = playerOneWins;
        console.log(form.bestof.value);
        if (form.bestof.value === "one" && playerOneWins >= 1) {
            alert ("The winner of this game is " + form.onename.value + "! Well done!");
            addScoreOne.disabled = true;
            addScoreTwo.disabled = true;
            backScoreOne.disabled = true;
            backScoreTwo.disabled = true;
            addScoreOne.style.cursor = "not-allowed";
            addScoreTwo.style.cursor = "not-allowed";
            backScoreOne.style.cursor = "not-allowed";
            backScoreTwo.style.cursor = "not-allowed";
            setTimeout(() => {location.reload()}, 5000);
        }
        else if (form.bestof.value === "three" && playerOneWins === 2) {
            alert ("The winner of these games is " + form.onename.value + "! Well done!");
            addScoreOne.disabled = true;
            addScoreTwo.disabled = true;
            backScoreOne.disabled = true;
            backScoreTwo.disabled = true;
            addScoreOne.style.cursor = "not-allowed";
            addScoreTwo.style.cursor = "not-allowed";
            backScoreOne.style.cursor = "not-allowed";
            backScoreTwo.style.cursor = "not-allowed";
            setTimeout(() => {location.reload()}, 5000);
        }
        else if (form.bestof.value === "five" && playerOneWins === 3) {
            alert ("The winner of these games is " + form.onename.value + "! Well done!");
            addScoreOne.disabled = true;
            addScoreTwo.disabled = true;
            backScoreOne.disabled = true;
            backScoreTwo.disabled = true;
            addScoreOne.style.cursor = "not-allowed";
            addScoreTwo.style.cursor = "not-allowed";
            backScoreOne.style.cursor = "not-allowed";
            backScoreTwo.style.cursor = "not-allowed";
            setTimeout(() => {location.reload()}, 5000);
        }
        else if (form.bestof.value === "seven" && playerOneWins === 4) {
            alert ("The winner of these games is " + form.onename.value + "! Well done!");
            addScoreOne.disabled = true;
            addScoreTwo.disabled = true;
            backScoreOne.disabled = true;
            backScoreTwo.disabled = true;
            addScoreOne.style.cursor = "not-allowed";
            addScoreTwo.style.cursor = "not-allowed";
            backScoreOne.style.cursor = "not-allowed";
            backScoreTwo.style.cursor = "not-allowed";
            setTimeout(() => {location.reload()}, 5000);
        }
    }
    if (playerTwoScore >= 11 && playerTwoScore - playerOneScore >= 2) {
        playerTwoWins += 1;
        playerOneScore = 0;
        playerTwoScore = 0;
        oneScore.innerHTML = playerOneScore;
        twoScore.innerHTML = playerTwoScore;
        twoGames.innerHTML = playerTwoWins;
        if (form.bestof.value === "one" && playerTwoWins >= 1) {
            alert ("The winner of this game is " + form.twoname.value + "! Well done!");
            addScoreOne.disabled = true;
            addScoreTwo.disabled = true;
            backScoreOne.disabled = true;
            backScoreTwo.disabled = true;
            addScoreOne.style.cursor = "not-allowed";
            addScoreTwo.style.cursor = "not-allowed";
            backScoreOne.style.cursor = "not-allowed";
            backScoreTwo.style.cursor = "not-allowed";
            setTimeout(() => {location.reload()}, 5000);
        }
        else if (form.bestof.value === "three" && playerTwoWins === 2) {
            alert ("The winner of these games is " + form.twoname.value + "! Well done!");
            addScoreOne.disabled = true;
            addScoreTwo.disabled = true;
            backScoreOne.disabled = true;
            backScoreTwo.disabled = true;
            addScoreOne.style.cursor = "not-allowed";
            addScoreTwo.style.cursor = "not-allowed";
            backScoreOne.style.cursor = "not-allowed";
            backScoreTwo.style.cursor = "not-allowed";
            setTimeout(() => {location.reload()}, 5000);
        }
        else if (form.bestof.value === "five" && playerTwoWins === 3) {
            alert ("The winner of these games is " + form.twoname.value + "! Well done!");
            addScoreOne.disabled = true;
            addScoreTwo.disabled = true;
            backScoreOne.disabled = true;
            backScoreTwo.disabled = true;
            addScoreOne.style.cursor = "not-allowed";
            addScoreTwo.style.cursor = "not-allowed";
            backScoreOne.style.cursor = "not-allowed";
            backScoreTwo.style.cursor = "not-allowed";
            setTimeout(() => {location.reload()}, 5000);
        }
        else if (form.bestof.value === "seven" && playerTwoWins === 4) {
            alert ("The winner of these games is " + form.twoname.value + "! Well done!");
            addScoreOne.disabled = true;
            addScoreTwo.disabled = true;
            backScoreOne.disabled = true;
            backScoreTwo.disabled = true;
            addScoreOne.style.cursor = "not-allowed";
            addScoreTwo.style.cursor = "not-allowed";
            backScoreOne.style.cursor = "not-allowed";
            backScoreTwo.style.cursor = "not-allowed";
            setTimeout(() => {location.reload()}, 5000);
        }
    }
    if (playerOneScore === 10 && playerTwoScore === 10) {
        alert("Tiebreaker active!");
        let serverCheck = (playerOneScore + playerTwoScore - 1) % 2;
        if (serverCheck === 0) {
            if (serverOne.innerHTML === "•") {
                serverOne.innerHTML = "";
                serverTwo.innerHTML = "•";
            }
            else {
                serverTwo.innerHTML = "";
                serverOne.innerHTML = "•";
            }
            if (playerOneScore - playerTwoScore <= 1 || playerTwoScore - playerOneScore <= 1) {
                alert("Game over!");
            }
        }
    }
    let serverCheck = (playerOneScore + playerTwoScore - 1) % 2;
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

const subtractPoint = player => {
    if (player === "one" && playerOneScore !== 0) {
        playerOneScore -= 1;
        oneScore.innerHTML = playerOneScore;
    }
    else if (player === "two" && playerTwoScore !== 0) {
        playerTwoScore -= 1;
        twoScore.innerHTML = playerTwoScore; 
    }
};

form.addEventListener("submit", e => {
    e.preventDefault();

    const playerOneName = form.onename.value;
    const playerTwoName = form.twoname.value;

    const playerOneColour = form.onecolour.value;
    const playerTwoColour = form.twocolour.value;

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

    oneScore.style.color = playerOneColour;
    addScoreOne.style.background = playerOneColour;
    if (playerOneColour === "yellow" || playerOneColour === "cyan" || playerOneColour === "pink") {
        addScoreOne.style.color = "black";
    }
    twoScore.style.color = playerTwoColour;
    addScoreTwo.style.background = playerTwoColour;
    if (playerTwoColour === "yellow" || playerTwoColour === "cyan" || playerTwoColour === "pink") {
        addScoreTwo.style.color = "black";
    }
});
