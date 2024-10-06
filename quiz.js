// Function to check the user's answer
function checkAnswer() {
    // The correct answer
    const correctAnswer = "4";
    
    // Get the user's selected answer
    const userAnswer = document.querySelector('input[name="quiz"]:checked');
    
    // Get the feedback element
    const feedback = document.getElementById('feedback');
    
    // Check if an answer is selected
    if (userAnswer) {
        // Compare user answer with the correct answer
        if (userAnswer.value === correctAnswer) {
            feedback.textContent = "Correct! Well done.";
            feedback.style.color = "green"; // Optional: To give a visual cue
        } else {
            feedback.textContent = "That's incorrect. Try again!";
            feedback.style.color = "red"; // Optional: To give a visual cue
        }
    } else {
        feedback.textContent = "Please select an answer!";
        feedback.style.color = "orange";
    }
}

// Add event listener to the submit button
document.getElementById('submit-answer').addEventListener('click', checkAnswer);
