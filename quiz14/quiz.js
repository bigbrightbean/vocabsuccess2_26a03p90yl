// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "The once bustling river had become __________, with no movement of water or signs of life.",
        chinese_question: "曾经繁忙的河流已经变得 __________，没有水流或生命的迹象。",
        answers: [
            { option: "A", answer: "flowing", chinese_answer: "流动", chinese_romanization: "liúdòng" },
            { option: "B", answer: "active", chinese_answer: "活跃", chinese_romanization: "huóyuè" },
            { option: "C", answer: "stagnant", chinese_answer: "停滞", chinese_romanization: "tíngzhì" },
            { option: "D", answer: "vibrant", chinese_answer: "充满活力", chinese_romanization: "chōngmǎn huólì" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'stagnant' means having no current or flow and often having an unpleasant smell as a consequence." +
            "<br><br>" +
            "(A) 'flowing' means moving steadily and continuously in a current or stream." +
            "<br><br>" +
            "(B) 'active' means engaging or ready to engage in physically energetic pursuits." +
            "<br><br>" +
            "(D) 'vibrant' means full of energy and life.",
        chinese_explanation: "(C) '停滞' 一词意味着没有水流并且通常因此有不愉快的气味。" +
            "<br><br>" +
            "(A) '流动' 意味着在水流或溪流中稳步持续地移动。" +
            "<br><br>" +
            "(B) '活跃' 意味着从事或准备从事身体上精力充沛的追求。" +
            "<br><br>" +
            "(D) '充满活力' 意味着充满能量和生命。"
    },
    {
        id: 2,
        question: "His __________ actions, including lying and cheating, led to his dismissal from the company.",
        chinese_question: "他的 __________ 行为，包括撒谎和欺骗，导致他被公司解雇。",
        answers: [
            { option: "A", answer: "admirable", chinese_answer: "令人钦佩的", chinese_romanization: "lìng rén qīnpèi de" },
            { option: "B", answer: "despicable", chinese_answer: "卑鄙的", chinese_romanization: "bēibǐ de" },
            { option: "C", answer: "commendable", chinese_answer: "值得表扬的", chinese_romanization: "zhídé biǎoyáng de" },
            { option: "D", answer: "honorable", chinese_answer: "光荣的", chinese_romanization: "guāngróng de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'despicable' means deserving hatred and contempt." +
            "<br><br>" +
            "(A) 'admirable' means arousing or deserving respect and approval." +
            "<br><br>" +
            "(C) 'commendable' means deserving praise." +
            "<br><br>" +
            "(D) 'honorable' means bringing or worthy of honor.",
        chinese_explanation: "(B) '卑鄙的' 一词意味着值得仇恨和蔑视的。" +
            "<br><br>" +
            "(A) '令人钦佩的' 意味着引起或值得尊重和赞许的。" +
            "<br><br>" +
            "(C) '值得表扬的' 意味着值得称赞的。" +
            "<br><br>" +
            "(D) '光荣的' 意味着带来或值得尊重的。"
    },
    {
        id: 3,
        question: "She was so engrossed in her book that she was completely __________ to the noise around her.",
        chinese_question: "她全神贯注于书中，完全 __________ 周围的噪音。",
        answers: [
            { option: "A", answer: "aware", chinese_answer: "意识到的", chinese_romanization: "yìshí dào de" },
            { option: "B", answer: "alert", chinese_answer: "警觉的", chinese_romanization: "jǐngjué de" },
            { option: "C", answer: "oblivious", chinese_answer: "不在意的", chinese_romanization: "bù zàiyì de" },
            { option: "D", answer: "attentive", chinese_answer: "注意的", chinese_romanization: "zhùyì de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'oblivious' means not aware of or not concerned about what is happening around one." +
            "<br><br>" +
            "(A) 'aware' means having knowledge or perception of a situation or fact." +
            "<br><br>" +
            "(B) 'alert' means quick to notice any unusual and potentially dangerous or difficult circumstances; vigilant." +
            "<br><br>" +
            "(D) 'attentive' means paying close attention to something.",
        chinese_explanation: "(C) '不在意的' 一词意味着没有意识到或不关心周围发生的事情。" +
            "<br><br>" +
            "(A) '意识到的' 意味着对情况或事实有知识或感知。" +
            "<br><br>" +
            "(B) '警觉的' 意味着迅速注意到任何不寻常和潜在危险或困难的情况；警惕的。" +
            "<br><br>" +
            "(D) '注意的' 意味着密切注意某事的。"
    },
    {
        id: 4,
        question: "The __________ melody of the violin expressed the deep sorrow of the composer's loss.",
        chinese_question: "小提琴的 __________ 旋律表达了作曲人失落的深深悲痛。",
        answers: [
            { option: "A", answer: "joyful", chinese_answer: "快乐的", chinese_romanization: "kuàilè de" },
            { option: "B", answer: "cheerful", chinese_answer: "愉快的", chinese_romanization: "yúkuài de" },
            { option: "C", answer: "mournful", chinese_answer: "哀伤的", chinese_romanization: "āishāng de" },
            { option: "D", answer: "lively", chinese_answer: "活泼的", chinese_romanization: "huópo de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'mournful' means feeling, expressing, or inducing sadness, regret, or grief." +
            "<br><br>" +
            "(A) 'joyful' means feeling, expressing, or causing great pleasure and happiness." +
            "<br><br>" +
            "(B) 'cheerful' means noticeably happy and optimistic." +
            "<br><br>" +
            "(D) 'lively' means full oflife and energy; active and outgoing.",
        chinese_explanation: "(C) '哀伤的' 意味着感到、表达或引起悲伤、后悔或悲痛的。" +
            "<br><br>" +
            "(A) '快乐的' 意味着感到、表达或引起极大的愉悦和幸福。" +
            "<br><br>" +
            "(B) '愉快的' 意味着明显快乐和乐观的。" +
            "<br><br>" +
            "(D) '活泼的' 意味着充满生命和能量；积极和外向的。"
    },
    {
        id: 5,
        question: "The villain's __________ plan to take over the city involved bribery, extortion, and violence.",
        chinese_question: "反派的 __________ 计划涉及贿赂、敲诈和暴力。",
        answers: [
            { option: "A", answer: "virtuous", chinese_answer: "有德", chinese_romanization: "yǒu dé" },
            { option: "B", answer: "nefarious", chinese_answer: "邪恶", chinese_romanization: "xié'è" },
            { option: "C", answer: "honorable", chinese_answer: "光荣", chinese_romanization: "guāngróng" },
            { option: "D", answer: "righteous", chinese_answer: "正义", chinese_romanization: "zhèngyì" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'nefarious' means wicked or criminal." +
            "<br><br>" +
            "(A) 'virtuous' means having or showing high moral standards." +
            "<br><br>" +
            "(C) 'honorable' means bringing or worthy of honor." +
            "<br><br>" +
            "(D) 'righteous' means morally right or justifiable.",
        chinese_explanation: "(B) '邪恶' 一词意味着邪恶或犯罪。" +
            "<br><br>" +
            "(A) '有德' 意味着有或表现出高道德标准。" +
            "<br><br>" +
            "(C) '光荣' 意味着带来或值得荣耀。" +
            "<br><br>" +
            "(D) '正义' 意味着在道德上正确或正当的。"
    },
    {
        id: 6,
        question: "The radio signal was __________, making it difficult to hear the broadcast clearly.",
        chinese_question: "无线电信号 __________，使得很难清楚地听到广播。",
        answers: [
            { option: "A", answer: "clear", chinese_answer: "清晰的", chinese_romanization: "qīngxī de" },
            { option: "B", answer: "static", chinese_answer: "静电的", chinese_romanization: "jìngdiàn de" },
            { option: "C", answer: "strong", chinese_answer: "强的", chinese_romanization: "qiáng de" },
            { option: "D", answer: "loud", chinese_answer: "大声的", chinese_romanization: "dàshēng de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'static' means crackling or hissing noises on a telephone, radio, or other telecommunications system." +
            "<br><br>" +
            "(A) 'clear' means easy to perceive, understand, or interpret." +
            "<br><br>" +
            "(C) 'strong' means having the power to move heavy weights or perform other physically demanding tasks." +
            "<br><br>" +
            "(D) 'loud' means producing or capable of producing much noise.",
        chinese_explanation: "(B) '静电的' 一词意味着电话、收音机或其他电信系统中的爆裂声或嘶嘶声。" +
            "<br><br>" +
            "(A) '清晰的' 意味着易于感知、理解或解释的。" +
            "<br><br>" +
            "(C) '强的' 意味着有力量移动重物或执行其他体力要求高的任务。" +
            "<br><br>" +
            "(D) '大声的' 意味着产生或能够产生很大噪音的。"
    },
    {
        id: 7,
        question: "During the debate, she remained __________, not siding with either party.",
        chinese_question: "在辩论中，她保持 __________，没有偏袒任何一方。",
        answers: [
            { option: "A", answer: "biased", chinese_answer: "偏见的", chinese_romanization: "piānjiàn de" },
            { option: "B", answer: "neutral", chinese_answer: "中立的", chinese_romanization: "zhōnglì de" },
            { option: "C", answer: "partial", chinese_answer: "偏袒的", chinese_romanization: "piāntǎn de" },
            { option: "D", answer: "opinionated", chinese_answer: "固执己见的", chinese_romanization: "gùzhí jǐ jiàn de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'neutral' means not supporting or helping either side in a conflict, disagreement, etc.; impartial." +
            "<br><br>" +
            "(A) 'biased' means unfairly prejudiced for or against someone or something." +
            "<br><br>" +
            "(C) 'partial' means favoring one side in a dispute above the other; biased." +
            "<br><br>" +
            "(D) 'opinionated' means conceitedly assertive and dogmatic in one's opinions.",
        chinese_explanation: "(B) '中立的' 一词意味着不支持或帮助冲突、分歧等中的任何一方；公正的。" +
            "<br><br>" +
            "(A) '偏见的' 意味着对某人或某事不公平的偏见。" +
            "<br><br>" +
            "(C) '偏袒的' 意味着在争论中偏袒一方；有偏见的。" +
            "<br><br>" +
            "(D) '固执己见的' 意味着自负地坚持自己的意见并独断专行的。"
    },
    {
        id: 8,
        question: "The __________ parents allowed their children to set their own bedtimes and eat whatever they wanted, rarely enforcing strict rules.",
        chinese_question: "这对 __________ 的父母允许孩子们自己决定睡觉时间，并随便吃他们想吃的东西，很少执行严格的规定。",
        answers: [
            { option: "A", answer: "strict", chinese_answer: "严格的", chinese_romanization: "yángé de" },
            { option: "B", answer: "demanding", chinese_answer: "苛求的", chinese_romanization: "kēqiú de" },
            { option: "C", answer: "rigid", chinese_answer: "死板的", chinese_romanization: "sǐbǎn de" },
            { option: "D", answer: "permissive", chinese_answer: "宽容的", chinese_romanization: "kuānróng de" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'permissive' means allowing or characterized by great or excessive freedom of behavior." +
            "<br><br>" +
            "(A) 'strict' means demanding that rules concerning behavior are obeyed and observed." +
            "<br><br>" +
            "(B) 'demanding' means requiring much skill or effort." +
            "<br><br>" +
            "(C) 'rigid' means unable to bend or be forced out of shape; not flexible.",
        chinese_explanation: "(D) '宽容的' 意味着允许或以行为自由过度为特征的。" +
            "<br><br>" +
            "(A) '严格的' 意味着要求遵守和遵守有关行为的规则。" +
            "<br><br>" +
            "(B) '苛求的' 意味着需要很多技巧或努力。" +
            "<br><br>" +
            "(C) '死板的' 意味着无法弯曲或被强行变形；不灵活的。"
    },
    {
        id: 9,
        question: "The new technology allows cars to be __________, requiring no human driver.",
        chinese_question: "新技术使汽车可以 __________，不需要人工驾驶。",
        answers: [
            { option: "A", answer: "manual", chinese_answer: "手动的", chinese_romanization: "shǒudòng de" },
            { option: "B", answer: "autonomous", chinese_answer: "自动的", chinese_romanization: "zìdòng de" },
            { option: "C", answer: "dependent", chinese_answer: "依赖的", chinese_romanization: "yīlài de" },
            { option: "D", answer: "controlled", chinese_answer: "控制的", chinese_romanization: "kòngzhì de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'autonomous' means having the freedom to act independently." +
            "<br><br>" +
            "(A) 'manual' means done with the hands." +
            "<br><br>" +
            "(C) 'dependent' means relying on someone or something else for support." +
            "<br><br>" +
            "(D) 'controlled' means determined or managed by something else.",
        chinese_explanation: "(B) '自动的' 一词意味着具有独立行动的自由。" +
            "<br><br>" +
            "(A) '手动的' 意味着用手完成的。" +
            "<br><br>" +
            "(C) '依赖的' 意味着依靠他人或其他事物的支持。" +
            "<br><br>" +
            "(D) '控制的' 意味着由其他事物决定或管理。"
    },
    {
        id: 10,
        question: "The smell of the spoiled food made her feel __________, and she had to leave the room quickly.",
        chinese_question: "变质食物的气味让她感到 __________，她不得不迅速离开房间。",
        answers: [
            { option: "A", answer: "refreshed", chinese_answer: "神清气爽", chinese_romanization: "shén qīng qì shuǎng" },
            { option: "B", answer: "nauseous", chinese_answer: "恶心", chinese_romanization: "ěxīn" },
            { option: "C", answer: "invigorated", chinese_answer: "精力充沛", chinese_romanization: "jīnglì chōngpèi" },
            { option: "D", answer: "pleasant", chinese_answer: "愉快", chinese_romanization: "yúkuài" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'nauseous' means affected with nausea; feeling inclined to vomit." +
            "<br><br>" +
            "(A) 'refreshed' means having regained strength or energy." +
            "<br><br>" +
            "(C) 'invigorated' means give strength or energy to." +
            "<br><br>" +
            "(D) 'pleasant' means giving a sense of happy satisfaction or enjoyment.",
        chinese_explanation: "(B) '恶心' 一词意味着感觉恶心；感觉想吐。" +
            "<br><br>" +
            "(A) '神清气爽' 意味着重新获得力量或能量。" +
            "<br><br>" +
            "(C) '精力充沛' 意味着给予力量或能量。" +
            "<br><br>" +
            "(D) '愉快' 意味着给人一种快乐满意或享受的感觉。"
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
