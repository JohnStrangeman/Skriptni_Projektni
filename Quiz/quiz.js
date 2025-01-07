let userName = "";
        let currentQuestion = 1;
        let score = 0;

        const answers = {
            1: "4",
            2: "Deuce",
            3: "3",
            4: "The partner of the player who served first in the first game",
            5: "The player loses the point"
        };

        function startQuiz() {
            // Ask for the user's name
            userName = window.prompt("What is your name?");
            if (!userName) {
                userName = "Player";
            }

            // Update the score display
            const scoreElement = document.getElementById("score");
            scoreElement.innerHTML = `${userName}, your quiz score is ${score}/5.`;

            // Hide the start button and show the quiz container
            document.getElementById("startButton").style.display = "none";
            document.getElementById("quiz-container").style.display = "block";
        }

        function submitAnswer(questionNumber, selectedAnswer) {
            // Check if the answer is correct
            if (selectedAnswer === answers[questionNumber]) {
                score++;
                window.alert("Correct!");
            } else {
                window.alert("Incorrect!");
            }

            // Update the score display
            const scoreElement = document.getElementById("score");
            scoreElement.innerHTML = `${userName}, your quiz score is ${score}/5.`;

            // Hide the current question and show the next one
            document.getElementById(`question${questionNumber}`).style.display = "none";
            if (questionNumber < 5) {
                document.getElementById(`question${questionNumber + 1}`).style.display = "block";
            } else {
                window.alert(`Quiz completed! Your final score is ${score}/5.`);
                document.getElementById("br").style.display="block";
                document.getElementById("pp").style.display="block";
            }
        }
        function bravo(){
            window.alert("bravo");
        }
        function PokusajPonovo(){
            score = 0;
            currentQuestion = 1;
            document.getElementById("score").innerHTML = "";

            // Hide the quiz container and reset question visibility
            document.getElementById("quiz-container").style.display = "none";
            document.getElementById("startButton").style.display = "inline-block";
            document.getElementById("pp").style.display = "none";
            document.getElementById("br").style.display = "none";

            // Reset all questions
            for (let i = 1; i <= 5; i++) {
                document.getElementById(`question${i}`).style.display = "none";
            }
        }

function back(){
    window.history.back();
}
function forward(){
     window.history.forward();
}