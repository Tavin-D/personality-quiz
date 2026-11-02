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
    offense: "Offensive Mastermind: You are creative, confident, and always looking for ways to put points on the board. You enjoy taking risks and keeping opponents guessing.",
    defense: "Defensive Strategist: You are patient, prepared, and focused on shutting down the competition. You believe strong defense creates winning teams.",
    players: "Players' Coach: You care about teamwork, trust, and building confidence. You know that motivated players perform better together.",
    discipline: "Hard-Nosed Disciplinarian: You believe preparation, effort, and accountability are the keys to success. You expect your team to work hard and stay focused."
};
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