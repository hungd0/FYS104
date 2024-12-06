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
        correctAnswer: 'Clearly and willingly agreeing to engage in sexual activity',
        explanations: {
            'Agreeing to a date': 'Agreeing to a date does not imply consent for sexual activity.',
            'Clearly and willingly agreeing to engage in sexual activity': 'This is the correct definition of consent.',
            'Saying "yes" once and it applies to all future activities': 'Consent must be obtained for each specific activity.',
            'Assuming consent based on previous relationships': 'Past consent does not imply future consent.'
        }
    },
    {
        topic: 'Consent',
        question:  "Which of the following statements are not true about consent?",
        possibleAnswers: [
            'Consent requires understanding', 
            'Consent is valid if one person is intoxicated', 
            'Consent should be obtained every time despite relationship status', 
            'Consent can be revoked at anytime'
        ],
        correctAnswer: 'Consent is valid if one person is intoxicated',
        explanations: {
            'Consent requires understanding': 'This statement is true; consent must be informed.',
            'Consent is valid if one person is intoxicated': 'This statement is false; intoxication can impair the ability to give consent.',
            'Consent should be obtained every time despite relationship status': 'This statement is true; consent must be ongoing.',
            'Consent can be revoked at anytime': 'This statement is true; consent can be withdrawn at any time.'
        }
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
        correctAnswer: 'Unwanted touching of a sexual nature',
        explanations: {
            'Unwanted touching of a sexual nature':'This is considered sexual assault as it involves physical contact without consent.', 
            'A consensual kiss':'It is not sexual assault if both parties agreed to the kiss.', 
            'Flirting with someone at a bar':'Flirting is generally not sexual assault unless it involves unwanted physical contact or advances.', 
            'A friendly hug between friends':'It is not sexual assault if both individuals consent to the hug.'
        },
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
        correctAnswer: 'All of the above',
        explanations: {
            'Most sexual assaults are committed by someone the victim knows':'Almost had it! Many sexual assaults occur within familiar relationships, such as acquaintances, friends, or intimate partners.', 
            'Victims often blame themselves for the assault':'Almost had it! Many victims may internalize guilt or shame, leading them to feel responsible.', 
            'Sexual assault can happen to anyone, regardless of gender':'Almost had it! Sexual assault can affect any individual regardless of gender, age, or background.', 
            'All of the above':'All the previous statements are common truths about sexual assault.'
        }
    },
    {
        topic: 'Campus Resources and Support Programs',
        question:  "Which of the following resources is available on UMBC for students affected by sexual assault?",
        possibleAnswers: [
            "Academic advising", 
            "The Women's Center", 
            "The campus bookstore", 
            "True Grit's"
        ],
        correctAnswer: "The Women's Center",
        explanations: {
            "Academic advising":'While it is an important resource, this resource is specifically designed to help students navigate their academic progress.',
            "The Women's Center": 'This center provides crucial support and resources for students affected by sexual assault, including counseling, advocacy, and educational programs.',
            "The campus bookstore": 'The bookstore sells textbooks and supplies, but it does not provide academic advising or support.',
            "True Grit's": "True Grit's is a dining or social space, which does not focus on support for students affected by sexual assault."
        }
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
        correctAnswer: 'To center the experiences of survivors of sexual violence and facilitate the healing process',
        explanations: {
            'To discuss academic achievements': "This option focuses on educational topics, which is not the main purpose of the 'We Believe You' discussion group.",
            'To plan campus events': "While event planning may occur, the primary aim of the group is not centered around organizing events.",
            'To center the experiences of survivors of sexual violence and facilitate the healing process': "The 'We Believe You' discussion group aims to provide a supportive space for survivors to share their experiences and promote healing.",
            'To promote sports activities': "This option relates to athletic programs, which is not the main purpose of the 'We Believe You' discussion group."
        }
    },
    {
        topic: 'Prevention',
        question: "What is the primary goal of bystander intervention training?",
        possibleAnswers: [
            'To enhance understanding of the legal implications of intervention',
            'To empower individuals to take action when witnessing potentially harmful situations',
            'To foster a culture of silence around sexually vulnerable topics',
            'To provide strategies for conflict resolution in non-violent situations'
        ],
        correctAnswer: 'To empower individuals to take action when witnessing potentially harmful situations',
        explanations: {
            'To enhance understanding of the legal implications of intervention': 'While legal impications may be discussed, it is not the primary goal of bystander intervention training.',
            'To empower individuals to take action when witnessing potentially harmful situations': 'Bystander intervention training is about encouraging and empowering individuals to intervene safely and effectively in potentially harmful situations.',
            'To foster a culture of silence around sexually vulnerable topics': 'Bystander intervention training aims to break the culture of silence and encourage individuals to speak up against inappropriate behavior.',
            'To provide strategies for conflict resolution in non-violent situations': 'While conflict resolution may be discussed, it is not the primary goal of bystander intervention training.'
        }
    },
    {
        topic: 'Prevention',
        question: "What is one of the most effective ways to prevent sexual violence on campus?",
        possibleAnswers: [
            'Impose a curfew for students on campus', 
            'Promoting open discussions about consent and respect', 
            'Increasing campus security personnel', 
            'Enforcing strict dress codes'
        ],
        correctAnswer: 'Promoting open discussions about consent and respect',
        explanations: {
            'Impose a curfew for students on campus': "While a curfew may limit opportunities for incidents to occur, it does not address the underlying issues.",
            'Promoting open discussions about consent and respect': "This approach is effective as it fosters a culture of understanding and accountability through empowering individuals to recognize and prevent sexual violence.",
            'Increasing campus security personnel': "While increased security can provide a sense of safety, it does not directly educate or change attitudes.",
            'Enforcing strict dress codes': "This option shifts the responsibility onto individuals based on their attire and can perpetuate victim-blaming."
        }
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

    // shuffle answers if it's not the 4th question (index 3)
    if (index !== 3) {
        shuffleArray(answersToDisplay);
    }

    // display answers
    answersToDisplay.forEach((answer) => {
        answerContainer.innerHTML += `<button>${answer}</button>`;
    });

    let answers = document.querySelectorAll("button");
    answers.forEach((answer) => {
        answer.addEventListener("click", (e) => {
            // show whether the answer is correct or wrong
            if (e.target.textContent === questions[index].correctAnswer) {
                console.log("correct! ");
                correctAnswersCount++;
                answerContainer.innerHTML += `<p style="color: lime; text-align: center;">Correct! The answer is: ${questions[index].correctAnswer}</p>`;
                answerContainer.innerHTML += `<p style="color: #eaca5b; text-align: center;">Explanation: ${questions[index].explanations[e.target.textContent]}</p>`;
            } else {
                console.log("wrong");
                answerContainer.innerHTML += `<p style="color: red; text-align: center;">Wrong! The correct answer is: ${questions[index].correctAnswer}</p>`;
                answerContainer.innerHTML += `<p style="color: #eaca5b; text-align: center;">Explanation: ${questions[index].explanations[e.target.textContent]}</p>`;
            }

            // disable all answer buttons after an answer is selected
            answers.forEach((btn) => btn.disabled = true);

            // add "Next Question" button
            answerContainer.innerHTML += `<button id="nextButton">Next</button>`;
            let nextButton = document.getElementById("nextButton");
            nextButton.addEventListener("click", () => {
                if (currentQuestionIndex === questions.length - 1) {
                    displayResults(); // show results
                } else {
                    currentQuestionIndex++;
                    handleQuestion(currentQuestionIndex);
                }
            });
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
