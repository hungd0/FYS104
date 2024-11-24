// The Retriever Golden Guidelines Quiz
// store questions about sexual assualt and consent
const questions = [
    {
        topic: 'Consent',
        question:  "What does it mean to give sexual consent?",
        possibleAnswers: [
            'Agreeing to a date', 
            'Clearly and willingly agreeing to engage in sexual activity', 
            'Saying "yes" once and it applies to all future activities', 
            'Assuming consent based on previous relationships'
        ],
        correctAnswer: 'Clearly and willingly agreeing to engage in sexual activity'
    },
    {
        topic: 'Consent',
        question:  "Which of the following statements are not true about consent?",
        possibleAnswers: [
            'Consent can be given verbally or non-verbally', 
            'Consent is valid if one person is intoxicated', 
            'Consent should be obtained every time despite relationship status', 
            'Consent can be revoked at anytime'
        ],
        correctAnswer: 'Consent is valid if one person is intoxicated'
    },
    {
        topic: 'Sexual Assault',
        question:  "Which of the following is considered sexual assault?",
        possibleAnswers: [
            'Unwanted touching of a sexual nature', 
            'A consensual kiss', 
            'Flirting with someone at a bar', 
            'A friendly hug between friends'
        ],
        correctAnswer: 'Unwanted touching of a sexual nature'
    },
    {
        topic: 'Sexual Assault',
        question:  "Which is a true statement about sexual assault?",
        possibleAnswers: [
            'Most sexual assaults are committed by someone the victim knows', 
            'Victims often blame themselves for the assault', 
            'Sexual assault can happen to anyone, regardless of gender', 
            'All of the above'
        ],
        correctAnswer: 'All of the above'
    },
    {
        topic: 'Campus Resources and Support Programs',
        question:  "Which of the following resources is available on UMBC for students affected by sexual assault?",
        possibleAnswers: [
            "Academic advising", 
            "The Women's Center", 
            "The campus bookstore", 
            "The dining hall"
        ],
        correctAnswer: "The Women's Center"
    },
    {
        topic: 'Campus Resources and Support Programs',
        question:  "What is the primary focus of the \"We Believe You\" discussion group?",
        possibleAnswers: [
            'To discuss academic achievements', 
            'To plan campus events', 
            'To center the experiences of survivors of sexual violence and facilitate the healing process', 
            'To promote sports activities'
        ],
        correctAnswer: 'To center the experiences of survivors of sexual violence and facilitate the healing process'
    },
    {
        topic: 'Prevention',
        question: "What is the primary goal of bystander intervention training?",
        possibleAnswers: [
            'To increase awareness of campus policies', 
            'To empower individuals to take action when witnessing potentially harmful situations', 
            'To promote social events on campus', 
            'To teach self-defense techniques'
        ],
        correctAnswer: 'To empower individuals to take action when witnessing potentially harmful situations'
    },
    {
        topic: 'Prevention',
        question: "What is one of the most effective ways to prevent sexual violence on campus?",
        possibleAnswers: [
            'Limiting access to campus facilities', 
            'Promoting open discussions about consent and respect', 
            'Increasing security personnel', 
            'Enforcing strict dress codes'
        ],
        correctAnswer: 'Promoting open discussions about consent and respect'
    },
];

const quizProgress = document.getElementById("quizProgress");
const questionContainer = document.getElementById("questionContainer");
const answerContainer = document.getElementById("answerContainer");
let currentQuestionIndex = 0;
let correctAnswersCount = 0;

function handleQuestion(index) {
    // handle quiz progress section
    quizProgress.innerHTML = "";
    questions.forEach((question) => {
        quizProgress.innerHTML += "<span></span>";
    });
    let spans = document.querySelectorAll("span");
    for (let i = 0; i <= index; i++) {
        spans[i].classList.add("seen");
    }

    // topic/question
    questionContainer.innerHTML = `<p>${questions[index].topic}</p>
    <p>${questions[index].question}</p>
    `;

    // answers
    answerContainer.innerHTML = "";
    let answersToDisplay = [...questions[index].possibleAnswers]; // Copy the answers array

    // Shuffle answers if it's not the 4th question (index 3)
    if (index !== 3) {
        shuffleArray(answersToDisplay);
    }

    // Display answers
    answersToDisplay.forEach((answer) => {
        answerContainer.innerHTML += `<button>${answer}</button>`;
    });

    let answers = document.querySelectorAll("button");
    answers.forEach((answer) => {
        answer.addEventListener("click", (e) => {
        if (e.target.textContent === questions[index].correctAnswer) {
            console.log("correct! ");
            correctAnswersCount++;
        } else {
            console.log("wrong");
        }
        if (currentQuestionIndex === questions.length - 1) {
            displayResults(); // show restults
        } else {
            currentQuestionIndex++;
            handleQuestion(currentQuestionIndex);
        }
        });
    });
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]]; // Swap elements
    }
}

function displayTitle() {
    titleContainer.innerHTML = `<p>The Retriever Golden Guidelines Quiz</p>`;
    answerContainer.innerHTML += `<button id="startButton">Start Quiz</button>`; // Add restart button
    // Add event listener to start button
    let startButton = document.getElementById("startButton");
    startButton.addEventListener("click", () => {
        currentQuestionIndex = 0;
        correctAnswersCount = 0;
        titleContainer.innerHTML = "";
        handleQuestion(currentQuestionIndex);
    });
}

function displayResults() {
    questionContainer.innerHTML = `<p>Quiz Finished!</p>`;
    answerContainer.innerHTML = `<p style="color: #eaca5b">You got ${correctAnswersCount} out of ${questions.length} correct!</p>`;
    answerContainer.innerHTML += `<button id="restartButton">Restart Quiz</button>`; // Add restart button
    // Add event listener to restart button
    let restartButton = document.getElementById("restartButton");
    restartButton.addEventListener("click", restartQuiz);
}

function restartQuiz() {
    // Clear the question and answer containers
    quizProgress.innerHTML = "";
    questionContainer.innerHTML = "";
    answerContainer.innerHTML = "";
    
    // Reset current question index and correct answers count
    currentQuestionIndex = 0;
    correctAnswersCount = 0;
    
    // Display the title of the quiz again
    displayTitle();
}

function main(){
    displayTitle();
}

main();
