// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "The car remained __________ at the traffic light, waiting for the green signal.",
        chinese_question: "汽车在红绿灯处 __________，等待绿灯信号。",
        answers: [
            { option: "A", answer: "moving", chinese_answer: "移动", chinese_romanization: "yídòng" },
            { option: "B", answer: "rotating", chinese_answer: "旋转", chinese_romanization: "xuánzhuǎn" },
            { option: "C", answer: "stationary", chinese_answer: "静止", chinese_romanization: "jìngzhǐ" },
            { option: "D", answer: "accelerating", chinese_answer: "加速", chinese_romanization: "jiāsù" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'stationary' means not moving or not intended to be moved." +
            "<br><br>" +
            "(A) 'moving' means in motion." +
            "<br><br>" +
            "(B) 'rotating' means moving or causing to move in a circle around an axis or center." +
            "<br><br>" +
            "(D) 'accelerating' means increasing in speed or rate.",
        chinese_explanation: "(C) '静止' 一词意味着不动或不打算移动。" +
            "<br><br>" +
            "(A) '移动' 意味着在运动中。" +
            "<br><br>" +
            "(B) '旋转' 意味着围绕轴或中心移动或导致移动。" +
            "<br><br>" +
            "(D) '加速' 意味着增加速度或速度。"
    },
    {
        id: 2,
        question: "The team's performance in the championship was __________, with multiple missed shots and poor defense leading to their defeat.",
        chinese_question: "团队在锦标赛中的表现 __________，多次投篮失误和糟糕的防守导致了他们的失败。",
        answers: [
            { option: "A", answer: "excellent", chinese_answer: "优秀的", chinese_romanization: "yōuxiù de" },
            { option: "B", answer: "outstanding", chinese_answer: "杰出的", chinese_romanization: "jiéchū de" },
            { option: "C", answer: "fantastic", chinese_answer: "极好的", chinese_romanization: "jíhǎo de" },
            { option: "D", answer: "abysmal", chinese_answer: "极其糟糕的", chinese_romanization: "jíqí zāogāo de" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'abysmal' means extremely bad or appalling." +
            "<br><br>" +
            "(A) 'excellent' means extremely good; outstanding." +
            "<br><br>" +
            "(B) 'outstanding' means exceptionally good." +
            "<br><br>" +
            "(C) 'fantastic' means extraordinarily good or attractive.",
        chinese_explanation: "(D) '极其糟糕的' 意味着非常差或令人震惊的糟糕。" +
            "<br><br>" +
            "(A) '优秀的' 意味着非常好；杰出的。" +
            "<br><br>" +
            "(B) '杰出的' 意味着特别好。" +
            "<br><br>" +
            "(C) '极好的' 意味着非常好或有吸引力的。"
    },
    {
        id: 3,
        question: "During the fire alarm, while people were running and shouting in panic, the security guard remained __________, showing no emotion and calmly directing people to safety.",
        chinese_question: "在火警期间，当人们惊慌失措地跑来跑去、喊叫时，保安仍然保持 __________，毫无情绪，冷静地指挥人们到安全的地方。",
        answers: [
            { option: "A", answer: "emotional", chinese_answer: "情绪化的", chinese_romanization: "qíngxù huà de" },
            { option: "B", answer: "anxious", chinese_answer: "焦虑的", chinese_romanization: "jiāolǜ de" },
            { option: "C", answer: "excitable", chinese_answer: "易激动的", chinese_romanization: "yì jīdòng de" },
            { option: "D", answer: "stolid", chinese_answer: "不动声色的", chinese_romanization: "bù dòng shēngsè de" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'stolid' means calm, dependable, and showing little emotion or animation." +
            "<br><br>" +
            "(A) 'emotional' means showing strong feelings." +
            "<br><br>" +
            "(B) 'anxious' means experiencing worry, unease, or nervousness." +
            "<br><br>" +
            "(C) 'excitable' means easily excited.",
        chinese_explanation: "(D) '不动声色的' 意味着冷静、可靠，并且表现出很少的情感或动画。" +
            "<br><br>" +
            "(A) '情绪化的' 意味着表现出强烈的感情。" +
            "<br><br>" +
            "(B) '焦虑的' 意味着经历担忧、不安或紧张。" +
            "<br><br>" +
            "(C) '易激动的' 意味着容易激动。"
    },
    {
        id: 4,
        question: "The __________ customer demanded to speak to the manager after receiving poor service at the restaurant.",
        chinese_question: "那位 __________ 的顾客在餐厅受到糟糕服务后，要求与经理对话。",
        answers: [
            { option: "A", answer: "content", chinese_answer: "满意", chinese_romanization: "mǎnyì" },
            { option: "B", answer: "irate", chinese_answer: "愤怒", chinese_romanization: "fènnù" },
            { option: "C", answer: "satisfied", chinese_answer: "满足", chinese_romanization: "mǎnzú" },
            { option: "D", answer: "delighted", chinese_answer: "高兴", chinese_romanization: "gāoxìng" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'irate' means feeling or characterized by great anger." +
            "<br><br>" +
            "(A) 'content' means in a state of peaceful happiness." +
            "<br><br>" +
            "(C) 'satisfied' means pleased or content with what has been received or experienced." +
            "<br><br>" +
            "(D) 'delighted' means feeling or showing great pleasure.",
        chinese_explanation: "(B) '愤怒' 一词意味着感到或表现出极大的愤怒。" +
            "<br><br>" +
            "(A) '满意' 意味着处于平静幸福的状态。" +
            "<br><br>" +
            "(C) '满足' 意味着对所收到或经历的事情感到高兴或满意。" +
            "<br><br>" +
            "(D) '高兴' 意味着感到或表现出极大的愉快。"
    },
    {
        id: 5,
        question: "The professor emphasized the need to include __________ sources in the research paper to support the argument.",
        chinese_question: "教授强调在研究论文中包含 __________ 的资料以支持论点的必要性。",
        answers: [
            { option: "A", answer: "irrelevant", chinese_answer: "无关的", chinese_romanization: "wúguān de" },
            { option: "B", answer: "outdated", chinese_answer: "过时的", chinese_romanization: "guòshí de" },
            { option: "C", answer: "relevant", chinese_answer: "相关的", chinese_romanization: "xiāngguān de" },
            { option: "D", answer: "vague", chinese_answer: "模糊的", chinese_romanization: "móhú de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'relevant' means closely connected or appropriate to what is being done or considered." +
            "<br><br>" +
            "(A) 'irrelevant' means not connected with or relevant to something." +
            "<br><br>" +
            "(B) 'outdated' means no longer produced or used; out of date." +
            "<br><br>" +
            "(D) 'vague' means of uncertain, indefinite, or unclear character or meaning.",
        chinese_explanation: "(C) '相关的' 一词意味着与正在进行或考虑的事情密切相关或适当。" +
            "<br><br>" +
            "(A) '无关的' 意味着与某事没有联系或不相关。" +
            "<br><br>" +
            "(B) '过时的' 意味着不再生产或使用的；过时的。" +
            "<br><br>" +
            "(D) '模糊的' 意味着不确定、不明确或不清楚的特征或含义。"
    },
    {
        id: 6,
        question: "The restaurant's food was __________, with bland flavours and overcooked vegetables, making it unlikely for customers to return.",
        chinese_question: "餐厅的食物 __________，味道平淡，蔬菜煮得过熟，使得顾客不太可能再光顾。",
        answers: [
            { option: "A", answer: "delicious", chinese_answer: "美味的", chinese_romanization: "měiwèi de" },
            { option: "B", answer: "exceptional", chinese_answer: "卓越的", chinese_romanization: "zhuóyuè de" },
            { option: "C", answer: "outstanding", chinese_answer: "杰出的", chinese_romanization: "jiéchū de" },
            { option: "D", answer: "mediocre", chinese_answer: "平庸的", chinese_romanization: "píngyōng de" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'mediocre' means of only moderate quality; not very good." +
            "<br><br>" +
            "(A) 'delicious' means highly pleasant to the taste." +
            "<br><br>" +
            "(B) 'exceptional' means unusually good; much better than average." +
            "<br><br>" +
            "(C) 'outstanding' means exceptionally good.",
        chinese_explanation: "(D) '平庸的' 意味着只是中等质量；不是很好。" +
            "<br><br>" +
            "(A) '美味的' 意味着味道非常好。" +
            "<br><br>" +
            "(B) '卓越的' 意味着非常好；远远好于平均水平。" +
            "<br><br>" +
            "(C) '杰出的' 意味着特别好。"
    },
    {
        id: 7,
        question: "The accident was so __________ that he had trouble sleeping for weeks.",
        chinese_question: "这次事故是如此 __________ 以至于他几个星期都无法入睡。",
        answers: [
            { option: "A", answer: "pleasant", chinese_answer: "愉快的", chinese_romanization: "yúkuài de" },
            { option: "B", answer: "traumatic", chinese_answer: "创伤的", chinese_romanization: "chuāngshāng de" },
            { option: "C", answer: "relaxing", chinese_answer: "放松的", chinese_romanization: "fàngsōng de" },
            { option: "D", answer: "soothing", chinese_answer: "安抚的", chinese_romanization: "ānfǔ de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'traumatic' means deeply disturbing or distressing." +
            "<br><br>" +
            "(A) 'pleasant' means giving a sense of happy satisfaction or enjoyment." +
            "<br><br>" +
            "(C) 'relaxing' means reducing tension or anxiety." +
            "<br><br>" +
            "(D) 'soothing' means having a gently calming effect.",
        chinese_explanation: "(B) '创伤的' 一词意味着深深的扰乱或痛苦。" +
            "<br><br>" +
            "(A) '愉快的' 意味着给人一种愉快的满足感或享受。" +
            "<br><br>" +
            "(C) '放松的' 意味着减少紧张或焦虑的。" +
            "<br><br>" +
            "(D) '安抚的' 意味着有温和的平静效果的。"
    },
    {
        id: 8,
        question: "She kept her workspace __________, with everything in its place and easy to find.",
        chinese_question: "她的工作空间保持得很__________，所有东西都井井有条且容易找到。",
        answers: [
            { option: "A", answer: "chaotic", chinese_answer: "混乱的", chinese_romanization: "hùnluàn de" },
            { option: "B", answer: "messy", chinese_answer: "凌乱的", chinese_romanization: "língluàn de" },
            { option: "C", answer: "organized", chinese_answer: "有条理的", chinese_romanization: "yǒu tiáolǐ de" },
            { option: "D", answer: "cluttered", chinese_answer: "杂乱的", chinese_romanization: "záluàn de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'organized' means arranged in a systematic way, especially on a large scale." +
            "<br><br>" +
            "(A) 'chaotic' means in a state of complete confusion and disorder." +
            "<br><br>" +
            "(B) 'messy' means untidy or dirty." +
            "<br><br>" +
            "(D) 'cluttered' means crowded and untidy.",
        chinese_explanation: "(C) '有条理的'一词意味着系统地安排，尤其是在大规模上。" +
            "<br><br>" +
            "(A) '混乱的' 意味着处于完全混乱和无序的状态。" +
            "<br><br>" +
            "(B) '凌乱的' 意味着不整洁或肮脏的。" +
            "<br><br>" +
            "(D) '杂乱的' 意味着拥挤和不整洁的。"
    },
    {
        id: 9,
        question: "The __________ donor gave a large sum of money to help build a new community center for the town.",
        chinese_question: "这位 __________ 的捐赠者捐了一大笔钱来帮助建造一个新的社区中心。",
        answers: [
            { option: "A", answer: "selfish", chinese_answer: "自私的", chinese_romanization: "zìsī de" },
            { option: "B", answer: "malicious", chinese_answer: "恶意的", chinese_romanization: "èyì de" },
            { option: "C", answer: "benevolent", chinese_answer: "慈善的", chinese_romanization: "císhàn de" },
            { option: "D", answer: "greedy", chinese_answer: "贪婪的", chinese_romanization: "tānlán de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'benevolent' means well-meaning and kindly." +
            "<br><br>" +
            "(A) 'selfish' means lacking consideration for others; concerned chiefly with one's own personal profit or pleasure." +
            "<br><br>" +
            "(B) 'malicious' means characterized by malice; intending or intended to do harm." +
            "<br><br>" +
            "(D) 'greedy' means having or showing an intense and selfish desire for wealth or power.",
        chinese_explanation: "(C) '慈善的' 意味着有善意和友善的。" +
            "<br><br>" +
            "(A) '自私的' 意味着缺乏对他人的考虑；主要关心自己的个人利益或快乐。" +
            "<br><br>" +
            "(B) '恶意的' 意味着有恶意的；打算或企图做伤害的。" +
            "<br><br>" +
            "(D) '贪婪的' 意味着有或表现出强烈的和自私的对财富或权力的渴望。"
    },
    {
        id: 10,
        question: "To be __________ for the scholarship, students must have a minimum GPA of 3.5 and demonstrate leadership skills.",
        chinese_question: "要获得奖学金的 __________ 资格，学生必须有最低 3.5 的 GPA 并展示领导才能。",
        answers: [
            { option: "A", answer: "ineligible", chinese_answer: "不合格", chinese_romanization: "bù hé gé" },
            { option: "B", answer: "unlikely", chinese_answer: "不太可能", chinese_romanization: "bù tài kěnéng" },
            { option: "C", answer: "eligible", chinese_answer: "有资格", chinese_romanization: "yǒu zīgé" },
            { option: "D", answer: "doubtful", chinese_answer: "怀疑", chinese_romanization: "huáiyí" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'eligible' means having the right to do or obtain something; satisfying the appropriate conditions." +
            "<br><br>" +
            "(A) 'ineligible' means legally or officially unable to be considered for a position or benefit." +
            "<br><br>" +
            "(B) 'unlikely' means not likely to happen, be done, or be true." +
            "<br><br>" +
            "(D) 'doubtful' means feeling uncertain about something.",
        chinese_explanation: "(C) '有资格' 一词意味着有权做某事或获得某物；满足适当条件。" +
            "<br><br>" +
            "(A) '不合格' 意味着在法律上或正式上无法被考虑担任职位或获得福利。" +
            "<br><br>" +
            "(B) '不太可能' 意味着不太可能发生、完成或真实。" +
            "<br><br>" +
            "(D) '怀疑' 意味着对某事感到不确定。"
    }
];


// Function to restart the quiz
function restartQuiz() {
    // Reload the page to restart the quiz
    location.reload();
}

// Variable to keep track of the current question index
var currentQuestionIndex = 0;

// Variable to keep track of the total score
var totalScore = 0;

// Array to store the selected answers for each question
var selectedAnswers = new Array(questions.length).fill(null);

// Variable to track the state of the Chinese translations checkbox
var chineseTranslationsChecked = false;

// Function to toggle Chinese translations
function toggleChineseTranslations() {
    var toggleChineseCheckbox = document.getElementById('toggleChinese');
    chineseTranslationsChecked = !chineseTranslationsChecked; // Toggle checkbox state
    // Call the displayQuestion() function to update the display based on the checkbox state
    displayQuestion(chineseTranslationsChecked);
}



// Function to toggle question shuffling
function toggleQuestionShuffle() {
    var shuffleCheckbox = document.getElementById('shuffleQuestions');
    var shuffleEnabled = shuffleCheckbox.checked;

    // Check if the current question has been answered
    var currentQuestionAnswered = selectedAnswers[currentQuestionIndex] !== null;

    // If the current question has been answered and shuffling is enabled
    if (currentQuestionAnswered && shuffleEnabled) {
        // Move to the next question automatically
        nextQuestion();
    }

    // Call the shuffleQuestions() function to update the questions based on the checkbox state
    shuffleQuestions(shuffleEnabled);
}


// Function to shuffle the remaining unanswered questions
function shuffleQuestions(shuffleEnabled) {
    // Clear the selected answer for the current question
    selectedAnswers[currentQuestionIndex] = null;

    // Copy the questions array
    var remainingQuestions = questions.slice(currentQuestionIndex);

    // Sort the remaining questions based on their IDs
    remainingQuestions.sort((a, b) => a.id - b.id);

    // If shuffling is enabled, shuffle the remaining questions
    if (shuffleEnabled) {
        // Shuffle the remaining questions array using Fisher-Yates algorithm
        for (var i = remainingQuestions.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var temp = remainingQuestions[i];
            remainingQuestions[i] = remainingQuestions[j];
            remainingQuestions[j] = temp;
        }
    }

    // Update the questions array with the shuffled remaining questions
    questions.splice(currentQuestionIndex, remainingQuestions.length, ...remainingQuestions);

    // Clear the selected MCQ option buttons
    var buttons = document.querySelectorAll('.option-btn');
    buttons.forEach(function(btn) {
        btn.classList.remove('option-selected', 'correct', 'wrong');
    });

    // Display the current question after shuffling
    displayQuestion(document.getElementById('toggleChinese').checked);

    // Update the progress bar
    updateProgressBar();
}


// Function to display the current question
function displayQuestion() {
    // Get the current question object
    var currentQuestion = questions[currentQuestionIndex];
    
    // Extract question texts and options
    var questionText = currentQuestion.question;
    var questionTextCN = currentQuestion.chinese_question;
    var options = currentQuestion.answers;

    // Display the question text in English without the question number
    document.getElementById('question').innerHTML = questionText;

    // Display the question text in Chinese if the checkbox is checked or if Chinese translations were manually toggled on
    if (document.getElementById('toggleChinese').checked || chineseTranslationsChecked) {
        document.getElementById('question_cn').innerHTML = questionTextCN;
    } else {
        document.getElementById('question_cn').innerHTML = ""; // Clear Chinese question
    }

    // Display the options as buttons with selected state
    var optionsHTML = "";
    for (var i = 0; i < options.length; i++) {
        var isSelected = selectedAnswers[currentQuestionIndex] === options[i].option;
        var optionClass = "option-btn";
        if (isSelected) {
            optionClass += ' option-selected'; // Add option-selected class if option is selected
            // Add correct or wrong class based on the correctness of the option
            if (options[i].option === currentQuestion.correctAnswer) {
                optionClass += ' correct';
            } else {
                optionClass += ' wrong';
            }
        }
        optionsHTML += '<button class="' + optionClass + '" onclick="selectAnswer(' + i + ')" value="' + options[i].option + '">' + options[i].option + '. ' + options[i].answer;
        
        // Append Chinese translation if the checkbox is checked or if Chinese translations were manually toggled on
        if (document.getElementById('toggleChinese').checked || chineseTranslationsChecked) {
            optionsHTML += ' (' + options[i].chinese_answer + ' ' + options[i].chinese_romanization + ')';
        }
        
        optionsHTML += '</button><br>'; // Modify this line to remove the "-"
    }
    document.getElementById('options').innerHTML = optionsHTML;

    // Update the progress bar
    updateProgressBar();
}




// Function to handle the answer selection
function selectAnswer(optionIndex) {
    // Update the selected answer for the current question
    selectedAnswers[currentQuestionIndex] = questions[currentQuestionIndex].answers[optionIndex].option;

    // Disable all option buttons to prevent further selection
    var buttons = document.querySelectorAll('.option-btn');
    buttons.forEach(function(btn) {
        btn.disabled = true;
    });

    // Check if the selected answer is correct
    var isCorrect = selectedAnswers[currentQuestionIndex] === questions[currentQuestionIndex].correctAnswer;

    // Display the result
    checkAnswer(selectedAnswers[currentQuestionIndex], isCorrect);
}


// Function to check the answer and display the result
function checkAnswer(selectedOption, isCorrect) {
    // Extract correct answer and explanation
    var correctAnswer = questions[currentQuestionIndex].correctAnswer;
    var correctAnswerEN = questions[currentQuestionIndex].answers.find(option => option.option === correctAnswer).answer;
    var correctAnswerCN = questions[currentQuestionIndex].answers.find(option => option.option === correctAnswer).chinese_answer;
    var correctAnswerRomanization = questions[currentQuestionIndex].answers.find(option => option.option === correctAnswer).chinese_romanization; // Add this line to extract the romanization
    var explanation = questions[currentQuestionIndex].explanation;
    var chineseExplanation = questions[currentQuestionIndex].chinese_explanation;

    // Display result and score
    var resultHTML = "";
    if (isCorrect) {
        // Increase the total score
        totalScore++;

        // Play correct sound
        var audio = new Audio('correct.mp3');
        audio.play();

        // Display correct message and explanation
        resultHTML += "<span class='correct-explanation'>Correct</span><br>"; // Added class for correct explanation
    } else {
        // Play incorrect sound
        var audio = new Audio('incorrect.mp3');
        audio.play();

        // Display incorrect message and correct answer
        resultHTML += "<span class='wrong-explanation'>Incorrect</span><br>"; // Added class for wrong explanation
    }

    resultHTML += "The correct answer is: " + correctAnswer + ": " + correctAnswerEN + ", " + correctAnswerCN + " (" + correctAnswerRomanization + ")<br><br>"; // Modify this line to include the romanization
    resultHTML += "Explanation (English):<br>" + explanation + "<br><br>";
    resultHTML += "Explanation (Chinese):<br>" + chineseExplanation + "<br><br>";

    // Display total score
    resultHTML += "Total Score: " + totalScore + "/" + questions.length;
    document.getElementById('result').innerHTML = resultHTML;

    // Apply correct or incorrect styling to the selected MCQ option button
    var selectedOptionButton = document.querySelector('.option-btn[value="' + selectedOption + '"]');
    if (isCorrect) {
        selectedOptionButton.classList.add('correct');
    } else {
        selectedOptionButton.classList.add('wrong');
    }
}



// Function to update the progress bar
function updateProgressBar() {
    // Calculate the progress percentage
    var progress = ((currentQuestionIndex + 1) / questions.length) * 100;
    
    // Update the width of the progress bar
    document.getElementById('progress-bar').style.width = progress + '%';
}


// Function to move to the previous question
function previousQuestion() {
    // Decrease the current question index
    currentQuestionIndex--;

    // Ensure the index does not go below 0
    if (currentQuestionIndex < 0) {
        currentQuestionIndex = 0;
    }

    // Check the state of the checkbox for Chinese translations
    var showChineseTranslations = document.getElementById('toggleChinese').checked;

    // Display the previous question with the appropriate translations
    displayQuestion(showChineseTranslations);

    // Disable all MCQ buttons
    var buttons = document.querySelectorAll('.option-btn');
    buttons.forEach(function(btn) {
        btn.disabled = true;
    });

    // Enable the previously selected MCQ button
    var previousSelectedAnswer = selectedAnswers[currentQuestionIndex];
    buttons.forEach(function(btn) {
        if (btn.value === previousSelectedAnswer) {
            btn.disabled = false;
            // Check if the previously selected answer is correct or wrong and apply the appropriate class
            if (previousSelectedAnswer === questions[currentQuestionIndex].correctAnswer) {
                btn.classList.add('correct');
            } else {
                btn.classList.add('wrong');
            }
        }
    });

    // Show the selected answer and its correctness for the previous question
    var correctAnswer = questions[currentQuestionIndex].correctAnswer;

    // Display the explanation for the previous question
    var explanationHTML = "";
    if (previousSelectedAnswer) {
        var answerColorClass = previousSelectedAnswer === correctAnswer ? 'correct' : 'wrong';
        explanationHTML += "<span class='" + answerColorClass + "-explanation'>Your Answer is: " + (previousSelectedAnswer === correctAnswer ? "Correct" : "Incorrect") + "</span><br>";
    }
    explanationHTML += "The correct answer is: " + correctAnswer + " (" + questions[currentQuestionIndex].answers.find(option => option.option === correctAnswer).answer + ", " + questions[currentQuestionIndex].answers.find(option => option.option === correctAnswer).chinese_answer + ")<br><br>";
    explanationHTML += "Explanation (English):<br>" + questions[currentQuestionIndex].explanation + "<br><br>";
    explanationHTML += "Explanation (Chinese):<br>" + questions[currentQuestionIndex].chinese_explanation + "<br><br>";
    document.getElementById('result').innerHTML = explanationHTML;
}




// Function to end the quiz and display the total score in a popup box
function endQuiz() {
    // Display a popup box with the quiz ended message and total score
    alert("Congratulations! You've reached the end.\n\nYour Total Score: " + totalScore + "/" + questions.length);
}



// Function to move to the next question
// Function to move to the next question
function nextQuestion() {
    // Ensure the "Turn on Chinese translations" checkbox remains unchecked
    chineseTranslationsChecked = false;

    // Check if the player has selected an answer for the current question
    if (selectedAnswers[currentQuestionIndex] === null) {
        // If no answer is selected, display an error message in a popup box
        alert("Please select an answer for Question " + (currentQuestionIndex + 1) + " before moving to the next question.");
        return; // Exit the function to prevent moving to the next question
    }

    // Increase the current question index
    currentQuestionIndex++;

    // Check if all questions have been answered
    if (currentQuestionIndex >= questions.length) {
        // If all questions have been answered, end the quiz
        endQuiz();
        // Reset the current question index to prevent accessing out of bounds
        currentQuestionIndex = questions.length - 1;
    } else {
        // Display the next question with both English and Chinese translations by default
        displayQuestion(chineseTranslationsChecked);

        // Show the selected answer and its correctness for the next question
        var selectedAnswer = selectedAnswers[currentQuestionIndex];
        var correctAnswer = questions[currentQuestionIndex].correctAnswer;

        // Find the button corresponding to the selected answer
        var buttons = document.querySelectorAll('.option-btn');
        buttons.forEach(function(btn) {
            if (btn.value === selectedAnswer) {
                if (selectedAnswer === correctAnswer) {
                    btn.classList.add('correct');
                } else {
                    btn.classList.add('wrong');
                }
            }
        });

        // Display the explanation for the next question
        var explanationHTML = "";
        if (selectedAnswer) {
            var answerColorClass = selectedAnswer === correctAnswer ? 'correct' : 'wrong';
            explanationHTML += "<span class='" + answerColorClass + "-explanation'>Your Answer is: " + (selectedAnswer === correctAnswer ? "Correct" : "Incorrect") + "</span><br>";
            explanationHTML += "The correct answer is: " + correctAnswer + " (" + questions[currentQuestionIndex].answers.find(option => option.option === correctAnswer).answer + ", " + questions[currentQuestionIndex].answers.find(option => option.option === correctAnswer).chinese_answer + ")<br><br>";
            explanationHTML += "Explanation (English):<br>" + questions[currentQuestionIndex].explanation + "<br><br>";
            explanationHTML += "Explanation (Chinese):<br>" + questions[currentQuestionIndex].chinese_explanation + "<br><br>";
        }
        document.getElementById('result').innerHTML = explanationHTML;
    }
}



function startOver() {
    // Reset the current question index to the first question
    currentQuestionIndex = 0;

    // Reset the total score and selected answers
    totalScore = 0;
    selectedAnswers.fill(null);

    // Uncheck the checkbox for Chinese translations
    document.getElementById('toggleChinese').checked = false;

    // Uncheck the checkbox for shuffling questions
    document.getElementById('shuffleQuestions').checked = false;

    // Reset the order of questions to the default state
    // Sort the questions array based on the 'id' property to revert to the original order
    questions.sort((a, b) => a.id - b.id);

    // Display the first question
    // Display only English translations by passing 'false' to the displayQuestion function
    displayQuestion(false);

    // Clear the result section
    document.getElementById('result').innerHTML = "";

    // Reset font size to default
    increaseFontSize = true; // Set the flag to true for increasing font size
    adjustFontSize(); // Adjust font size of all elements
    adjustChineseFontSize(); // Adjust font size of Chinese elements and explanations
}




// Function to adjust font size of all elements
function adjustFontSize() {
    var container = document.querySelector('.container');
    var elements = container.querySelectorAll('*');
    var scaleFactor = increaseFontSize ? 1.1 : 0.9; // Scale factor for increasing or decreasing font size

    elements.forEach(function(element) {
        var currentFontSize = parseInt(window.getComputedStyle(element).fontSize);
        var newFontSize = currentFontSize * scaleFactor;
        element.style.fontSize = newFontSize + 'px';
    });
}

// Function to adjust font size of Chinese elements and explanations
function adjustChineseFontSize() {
    var container = document.querySelector('.container');
    var chineseElements = container.querySelectorAll('[lang="zh"]');
    var explanations = document.querySelectorAll('.explanation');
    var allElements = [...chineseElements, ...explanations];
    var scaleFactor = increaseFontSize ? 1.1 : 0.9; // Use the same scale factor as other elements

    allElements.forEach(function(element) {
        var currentFontSize = parseInt(window.getComputedStyle(element).fontSize);
        var newFontSize = currentFontSize * scaleFactor;
        element.style.fontSize = newFontSize + 'px';
    });
}

// Display the first question when the page loads with both English and Chinese translations by default
window.onload = function() {
    toggleChineseTranslations();
    adjustFontSize(); // Initialize font size
    adjustChineseFontSize(); // Initialize Chinese font size
};


// + button event listener
document.getElementById('increase-font-size').addEventListener('click', function() {
    increaseFontSize = true;
    adjustFontSize();
    adjustChineseFontSize();
});

// - button event listener
document.getElementById('decrease-font-size').addEventListener('click', function() {
    increaseFontSize = false;
    adjustFontSize();
    adjustChineseFontSize();
});

// Chinese translation checkbox event listener
document.getElementById('toggleChinese').addEventListener('click', function() {
    adjustChineseFontSize();
});

// Shuffle checkbox event listener
document.getElementById('shuffleQuestions').addEventListener('click', function() {
    adjustFontSize();
    adjustChineseFontSize();
});


function goToHomePage() {
    // Redirect to the main index page
    window.location.href = "../index.html";
}
