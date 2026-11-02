// Store the answers selected by the user
const answers = {};

// Find all the question blocks
const questions = document.querySelectorAll(".question-block");

// Go through each question
questions.forEach((question, index) => {
    const buttons = question.querySelectorAll(".answer-btn");

    buttons.forEach((button) => {
        button.addEventListener("click", () => {

            // Remove the selected style from other answers
            buttons.forEach((otherButton) => {
                otherButton.classList.remove("selected");
            });

            // Highlight the selected answer
            button.classList.add("selected");

            // Save the answer
            answers[index] = button.dataset.answer;
        });
    });
});
// Calculate and display the quiz result
function displayResult() {
    const scores = {
        offense: 0,
        defense: 0,
        players: 0,
        discipline: 0
    };

    // Count the selected answers
    Object.values(answers).forEach((answer) => {
        if (answer) {
            scores[answer]++;
        }
    });

    // Find the result with the highest score
    const winningResult = Object.keys(scores).reduce((a, b) =>
        scores[a] >= scores[b] ? a : b
    );

    const results = {
        offense: "Offensive Mastermind: You love creative plays and finding ways to score.",
        defense: "Defensive Strategist: You focus on stopping opponents and controlling the game.",
        players: "Players' Coach: You build teamwork, confidence, and strong relationships.",
        discipline: "Hard-Nosed Disciplinarian: You value preparation, discipline, and toughness."
    };

    // Display the result
    document.querySelector("#result-text").textContent = results[winningResult];
    document.querySelector("#result-container").style.display = "block";
}

// Show Results button
document.querySelector("#show-result").addEventListener("click", () => {
    if (Object.keys(answers).length !== questions.length) {
        alert("Please answer every question before viewing your result.");
        return;
    }

    displayResult();
});