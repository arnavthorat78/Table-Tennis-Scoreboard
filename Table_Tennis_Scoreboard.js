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

// Getting the starter information.

const form = document.querySelector(".setupform");
const startForm = document.querySelector(".starter");
const feedbackOne = document.querySelector(".feedback-one");
const feedbackTwo = document.querySelector(".feedback-two");

// Getting the game information.

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

// Setting global variables.

let playerOneScore = 0;
let playerTwoScore = 0;

let playerOneWins = 0;
let playerTwoWins = 0;

// Setting an event listener for if the window's width changes, because otherwise the text will look unaligned.

window.addEventListener("resize", changeWidth = event => {
    let w = window.innerWidth;
    let midInt = w / 3;
    let mid = String(midInt + "px");
    game.style.left = mid;
});

// Defining addPoint(), responsible for adding the point.

const addPoint = player => {
    // Adding score.

    if (player === "one") {
        playerOneScore += 1;
        oneScore.innerHTML = playerOneScore;
    }
    else if (player === "two") {
        playerTwoScore += 1;
        twoScore.innerHTML = playerTwoScore;
    }

    // Changing server (1).
    
    if (serverOne.innerHTML === "•") {
        serverOne.innerHTML = "";
        serverTwo.innerHTML = "•";
    }
    else {
        serverTwo.innerHTML = "";
        serverOne.innerHTML = "•";
    }

    // Tiebreaker.

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
            addScoreOne.disabled = true;                // ---
            addScoreTwo.disabled = true;                //    |
            backScoreOne.disabled = true;               //    |
            backScoreTwo.disabled = true;               //    | --- Making the "Add Point" & "Subtract Point"
            addScoreOne.style.cursor = "not-allowed";   //    | --- disabled, and adding styles to it as well.*
            addScoreTwo.style.cursor = "not-allowed";   //    |
            backScoreOne.style.cursor = "not-allowed";  //    |
            backScoreTwo.style.cursor = "not-allowed";  // ---
            setTimeout(() => {location.reload()}, 5000);
        }
        else if (form.bestof.value === "three" && playerOneWins === 2) {
            alert ("The winner of these games is " + form.onename.value + "! Well done!");
            addScoreOne.disabled = true;
            addScoreTwo.disabled = true;
            backScoreOne.disabled = true;
            backScoreTwo.disabled = true;
            addScoreOne.style.cursor = "not-allowed"; // *
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
            addScoreOne.style.cursor = "not-allowed"; // *
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
            addScoreOne.style.cursor = "not-allowed"; // *
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
            addScoreOne.style.cursor = "not-allowed"; // *
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
            addScoreOne.style.cursor = "not-allowed"; // *
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
            addScoreOne.style.cursor = "not-allowed"; // *
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
            addScoreOne.style.cursor = "not-allowed"; // *
            addScoreTwo.style.cursor = "not-allowed";
            backScoreOne.style.cursor = "not-allowed";
            backScoreTwo.style.cursor = "not-allowed";
            setTimeout(() => {location.reload()}, 5000);
        }
    }

    // Server check (2).

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

    // Server check (3).

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
    // Subtract point.

    if (player === "one" && playerOneScore !== 0) {
        playerOneScore -= 1;
        oneScore.innerHTML = playerOneScore;
    }
    else if (player === "two" && playerTwoScore !== 0) {
        playerTwoScore -= 1;
        twoScore.innerHTML = playerTwoScore; 
    }

    // Change server.

    let serverCheck = (playerOneScore + playerTwoScore - 1) % 2;
    if (player === "one" && playerOneScore !== 0) {
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
    }
    if (player === "two" && playerTwoScore !== 0) {
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
    }
};

// Getting form information.

form.addEventListener("submit", e => {
    // Preventing default action (reloading current page).

    e.preventDefault();

    // Getting Player One and Two's names.

    const playerOneName = form.onename.value;
    const playerTwoName = form.twoname.value;

    const playerPattern = /^[A-Za-z0-9/[$-/:-?{-~!"^_`\[\]/]{1,10}$/;
    let playerOnePassed = null;
    let playerTwoPassed = null;

    if (playerPattern.test(playerOneName)) {
        playerOnePassed = true;
    }
    else {
        feedbackOne.innerHTML = "<span>The name(s) must be between 1 and 10 characters long and mustn't contain any spaces.</span><br><i>Hint: If you have spaces, replace them with a dash (-) instead!</i>";
        playerOnePassed = false;
    }
    if (playerPattern.test(playerTwoName)) {
        playerTwoPassed = true;
    }
    else {
        feedbackOne.innerHTML = "<span>The name(s) must be between 1 and 10 characters long and mustn't contain any spaces.</span><br><i>Hint: If you have spaces, replace them with a dash (-) instead!</i>";
        playerTwoPassed = false;
    }

    if (playerOnePassed && playerTwoPassed) {
        // Getting Player One and Two's colours and whatever server they chose.

        const playerOneColour = form.onecolour.value;
        const playerTwoColour = form.twocolour.value;
        const server = form.service.value;

        // Making the form invisible and the game screen visible, plus checking the width of the window.

        startForm.style.visibility = "hidden";

        let w = window.innerWidth;
        let midInt = w / 3;
        let mid = String(midInt + "px");
        game.style.left = mid;

        game.style.visibility = "visible";

        // Getting inner HTML to add Player One and Player Two's names.

        oneName.innerHTML = playerOneName;
        twoName.innerHTML = playerTwoName;

        // setting the server to whoever the user(s) chose.

        if (server === "playerone") {
            serverOne.innerHTML = "•";
        }
        else {
            serverTwo.innerHTML = "•";
        }

        // Change the colour to whatever the user(s) chose.

        oneScore.style.color = playerOneColour;
        addScoreOne.style.background = playerOneColour;
        if (playerOneColour === "yellow" || playerOneColour === "cyan" || playerOneColour === "pink") {
            addScoreOne.style.color = "black"; // Changing text colour if background colour is too bright.*
        }
        twoScore.style.color = playerTwoColour;
        addScoreTwo.style.background = playerTwoColour;
        if (playerTwoColour === "yellow" || playerTwoColour === "cyan" || playerTwoColour === "pink") {
            addScoreTwo.style.color = "black"; // *
        }

        // Listening to key presses for adding points.

        window.addEventListener('keydown', playerAndAdd = e => {
            const key = e.key;

            if (key == 1) {
                addPoint("one");
            }
            else if (key == 2) {
                addPoint("two");
            }
        });
    }
});
