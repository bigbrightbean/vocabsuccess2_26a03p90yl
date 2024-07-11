// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "His mind would often __________ to distant places while he worked, imagining adventures in far-off lands.",
        chinese_question: "工作时，他的思绪经常游荡到遥远的地方，想象着在遥远的土地上冒险__________。",
        answers: [
            { option: "A", answer: "travel", chinese_answer: "漫游", chinese_romanization: "mànyóu" },
            { option: "B", answer: "focus", chinese_answer: "集中", chinese_romanization: "jízhōng" },
            { option: "C", answer: "concentrate", chinese_answer: "专注", chinese_romanization: "zhuānzhù" },
            { option: "D", answer: "fix", chinese_answer: "固定", chinese_romanization: "gùdìng" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'travel' metaphorically means to think about or imagine faraway places." +
            "<br><br>" +
            "(B) 'focus' means pay particular attention to." +
            "<br><br>" +
            "(C) 'concentrate' means focus all one's attention on a particular object or activity." +
            "<br><br>" +
            "(D) 'fix' means fasten (something) securely in a particular place or position.",
        chinese_explanation: "(A) '漫游' 比喻思考或想象遥远的地方。" +
            "<br><br>" +
            "(B) '集中' 意味着特别注意。" +
            "<br><br>" +
            "(C) '专注' 意味着将所有注意力集中在特定对象或活动上。" +
            "<br><br>" +
            "(D) '固定' 意味着牢牢固定在特定地方或位置。"
    },
    {
        id: 2,
        question: "She felt __________ from her friends after moving to a new city, feeling lonely and isolated.",
        chinese_question: "搬到新城市后，她感到与朋友们 __________，感到孤独和孤立。",
        answers: [
            { option: "A", answer: "included", chinese_answer: "包括", chinese_romanization: "bāokuò" },
            { option: "B", answer: "connected", chinese_answer: "连接", chinese_romanization: "liánjiē" },
            { option: "C", answer: "stranded", chinese_answer: "孤立", chinese_romanization: "gūlì" },
            { option: "D", answer: "supported", chinese_answer: "支持", chinese_romanization: "zhīchí" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'stranded' metaphorically means feeling isolated or abandoned." +
            "<br><br>" +
            "(A) 'included' means contained as part of a whole being considered." +
            "<br><br>" +
            "(B) 'connected' means joined or linked together." +
            "<br><br>" +
            "(D) 'supported' means bear all or part of the weight of; hold up.",
        chinese_explanation: "(C) '孤立' 比喻感到孤立或被遗弃。" +
            "<br><br>" +
            "(A) '包括' 意味着作为被考虑的整体的一部分。" +
            "<br><br>" +
            "(B) '连接' 意味着连接在一起。" +
            "<br><br>" +
            "(D) '支持' 意味着承受全部或部分重量；支撑。"
    },
    {
        question: "She loved to __________ her ideas and collaborate with her team.",
        chinese_question: "她喜欢 __________ 自己的想法并与团队合作。",
        answers: [
            { option: "A", answer: "withhold", chinese_answer: "扣留", chinese_romanization: "kòuliú" },
            { option: "B", answer: "hoard", chinese_answer: "囤积", chinese_romanization: "túnjī" },
            { option: "C", answer: "conceal", chinese_answer: "隐藏", chinese_romanization: "yǐncáng" },
            { option: "D", answer: "share", chinese_answer: "分享", chinese_romanization: "fēnxiǎng" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'share' metaphorically means to express or communicate ideas, thoughts, or feelings with others." +
            "<br><br>" +
            "(A) 'withhold' means refuse to give (something that is due to or is desired by another)." +
            "<br><br>" +
            "(B) 'hoard' means to accumulate (money or valued objects) and hide or store away." +
            "<br><br>" +
            "(C) 'conceal' means keep from sight; hide.",
        chinese_explanation: "(D) '分享' 比喻与他人表达或交流想法、思维或情感。" +
            "<br><br>" +
            "(A) '扣留' 意味着拒绝给予（应当给予或被他人期望的东西）。" +
            "<br><br>" +
            "(B) '囤积' 意味着积累（钱或有价值的物品）并藏起来或存放起来。" +
            "<br><br>" +
            "(C) '隐藏' 意味着不让被看见；隐藏。"
    },
    {
        id: 4,
        question: "They decided to __________ in a quiet town after years of traveling.",
        chinese_question: "他们决定在多年旅行后 __________ 在一个安静的小镇。",
        answers: [
            { option: "A", answer: "settle", chinese_answer: "定居", chinese_romanization: "dìngjū" },
            { option: "B", answer: "wander", chinese_answer: "漫游", chinese_romanization: "mànyóu" },
            { option: "C", answer: "roam", chinese_answer: "闲逛", chinese_romanization: "xiánguàng" },
            { option: "D", answer: "drift", chinese_answer: "漂流", chinese_romanization: "piāoliú" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'settle' means establish a place to live in; make one's home in." +
            "<br><br>" +
            "(B) 'wander' means walk or move in a leisurely, casual, or aimless way." +
            "<br><br>" +
            "(C) 'roam' means move about or travel aimlessly or unsystematically, especially over a wide area." +
            "<br><br>" +
            "(D) 'drift' means be carried slowly by a current of air or water.",
        chinese_explanation: "(A) '定居' 意味着建立居住地；定居在某地。" +
            "<br><br>" +
            "(B) '漫游' 意味着以悠闲、随意或无目的的方式行走或移动。" +
            "<br><br>" +
            "(C) '闲逛' 意味着无目的或无系统地四处走动或旅行，尤其是在一个大面积上。" +
            "<br><br>" +
            "(D) '漂流' 意味着被空气或水流慢慢带走。"
    },
    {
        id: 5,
        question: "They tried to __________ the source of the problem in the system, examining each component carefully.",
        chinese_question: "他们试图通过仔细检查每个组件来__________系统中的问题源。",
        answers: [
            { option: "A", answer: "overlook", chinese_answer: "忽视", chinese_romanization: "hūshì" },
            { option: "B", answer: "complicate", chinese_answer: "使复杂", chinese_romanization: "shǐ fùzá" },
            { option: "C", answer: "locate", chinese_answer: "找到", chinese_romanization: "zhǎodào" },
            { option: "D", answer: "avoid", chinese_answer: "避免", chinese_romanization: "bìmiǎn" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'locate' metaphorically means to identify or discover the cause or origin of something." +
            "<br><br>" +
            "(A) 'overlook' means fail to notice (something)." +
            "<br><br>" +
            "(B) 'complicate' means make (something) more difficult or confusing by causing it to be more complex." +
            "<br><br>" +
            "(D) 'avoid' means keep away from or stop oneself from doing (something).",
        chinese_explanation: "(C) '找到' 比喻识别或发现某事的原因或起源。" +
            "<br><br>" +
            "(A) '忽视' 意味着未能注意到（某事）。" +
            "<br><br>" +
            "(B) '使复杂' 意味着通过使其更加复杂来使（某事）更加困难或混乱。" +
            "<br><br>" +
            "(D) '避免' 意味着远离或阻止自己做（某事）。"
    },
    {
        id: 6,
        question: "She decided to __________ her spending to save money for the future.",
        chinese_question: "她决定 __________ 开支以存钱为未来做准备。",
        answers: [
            { option: "A", answer: "limit", chinese_answer: "限制", chinese_romanization: "xiànzhì" },
            { option: "B", answer: "increase", chinese_answer: "增加", chinese_romanization: "zēngjiā" },
            { option: "C", answer: "indulge", chinese_answer: "放纵", chinese_romanization: "fàngzòng" },
            { option: "D", answer: "expand", chinese_answer: "扩大", chinese_romanization: "kuòdà" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'limit' metaphorically means to set boundaries or restrictions." +
            "<br><br>" +
            "(B) 'increase' means become or make greater in size, amount, intensity, or degree." +
            "<br><br>" +
            "(C) 'indulge' means allow oneself to enjoy the pleasure of." +
            "<br><br>" +
            "(D) 'expand' means become or make larger or more extensive.",
        chinese_explanation: "(A) '限制' 比喻设定界限或限制。" +
            "<br><br>" +
            "(B) '增加' 意味着变得更大或增加数量、强度或程度。" +
            "<br><br>" +
            "(C) '放纵' 意味着让自己享受乐趣。" +
            "<br><br>" +
            "(D) '扩大' 意味着变大或更广泛。"
    },
    {
        id: 7,
        question: "The charity organization plans to __________ a new campaign to raise awareness.",
        chinese_question: "慈善组织计划 __________ 一项新的活动以提高意识。",
        answers: [
            { option: "A", answer: "launch", chinese_answer: "发起", chinese_romanization: "fāqǐ" },
            { option: "B", answer: "halt", chinese_answer: "停止", chinese_romanization: "tíngzhǐ" },
            { option: "C", answer: "end", chinese_answer: "结束", chinese_romanization: "jiéshù" },
            { option: "D", answer: "neglect", chinese_answer: "忽视", chinese_romanization: "hūshì" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'launch' metaphorically means to start or introduce something new." +
            "<br><br>" +
            "(B) 'halt' means bring or come to an abrupt stop." +
            "<br><br>" +
            "(C) 'end' means bring to an end." +
            "<br><br>" +
            "(D) 'neglect' means fail to care for properly.",
        chinese_explanation: "(A) '发起' 比喻开始或介绍新的事物。" +
            "<br><br>" +
            "(B) '停止' 意味着突然停止。" +
            "<br><br>" +
            "(C) '结束' 意味着终止。" +
            "<br><br>" +
            "(D) '忽视' 意味着未能妥善照顾。"
    },
    {
        id: 8,
        question: "They __________ to make the event a memorable one for everyone.",
        chinese_question: "他们 __________ 使这个活动对每个人都成为难忘的经历。",
        answers: [
            { option: "A", answer: "avoid", chinese_answer: "避免", chinese_romanization: "bìmiǎn" },
            { option: "B", answer: "disregard", chinese_answer: "忽视", chinese_romanization: "hūshì" },
            { option: "C", answer: "dismiss", chinese_answer: "驳回", chinese_romanization: "bóhuí" },
            { option: "D", answer: "intend", chinese_answer: "打算", chinese_romanization: "dǎsuàn" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'intend' metaphorically means to have a purpose or plan in mind." +
            "<br><br>" +
            "(A) 'avoid' means keep away from or stop oneself from doing (something)." +
            "<br><br>" +
            "(B) 'disregard' means to pay no attention to; ignore." +
            "<br><br>" +
            "(C) 'dismiss' means decide that something or someone is not important and not worth considering.",
        chinese_explanation: "(D) '打算' 比喻心中有一个目的或计划。" +
            "<br><br>" +
            "(A) '避免' 意味着远离或阻止自己做（某事）。" +
            "<br><br>" +
            "(B) '忽视' 意味着不注意；忽略。" +
            "<br><br>" +
            "(C) '驳回' 意味着决定某事或某人不重要且不值得考虑。"
    },
    {
        id: 9,
        question: "Artists often __________ the styles of their predecessors to learn new techniques.",
        chinese_question: "艺术家们经常 __________ 前辈的风格来学习新技术。",
        answers: [
            { option: "A", answer: "imitate", chinese_answer: "模仿", chinese_romanization: "mófǎng" },
            { option: "B", answer: "disrupt", chinese_answer: "干扰", chinese_romanization: "gānrǎo" },
            { option: "C", answer: "innovate", chinese_answer: "创新", chinese_romanization: "chuàngxīn" },
            { option: "D", answer: "distort", chinese_answer: "扭曲", chinese_romanization: "niǔqū" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'imitate' metaphorically means to follow or endeavor to follow as a model or example." +
            "<br><br>" +
            "(B) 'disrupt' means interrupt (an event, activity, or process) by causing a disturbance or problem." +
            "<br><br>" +
            "(C) 'innovate' means make changes in something established, especially by introducing new methods, ideas, or products." +
            "<br><br>" +
            "(D) 'distort' means pull or twist out of shape.",
        chinese_explanation: "(A) '模仿' 比喻跟随或努力跟随作为榜样或例子的东西。" +
            "<br><br>" +
            "(B) '干扰' 意味着通过引起干扰或问题中断（事件、活动或过程）。" +
            "<br><br>" +
            "(C) '创新' 意味着对已确立的事物进行变革，尤其是引入新的方法、想法或产品。" +
            "<br><br>" +
            "(D) '扭曲' 意味着拉或扭变形。"
    },
    {
        id: 10,
        question: "His thoughts began to __________ as he daydreamed during the lecture.",
        chinese_question: "在讲座期间，他的思绪开始 __________。",
        answers: [
            { option: "A", answer: "focus", chinese_answer: "集中", chinese_romanization: "jízhōng" },
            { option: "B", answer: "concentrate", chinese_answer: "专注", chinese_romanization: "zhuānzhù" },
            { option: "C", answer: "sharpen", chinese_answer: "锐化", chinese_romanization: "ruìhuà" },
            { option: "D", answer: "drift", chinese_answer: "漂移", chinese_romanization: "piāoyí" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'drift' metaphorically means to wander or stray without a clear direction." +
            "<br><br>" +
            "(A) 'focus' means pay particular attention to." +
            "<br><br>" +
            "(B) 'concentrate' means focus all one's attention on a particular object or activity." +
            "<br><br>" +
            "(C) 'sharpen' means make or become sharp or sharper.",
        chinese_explanation: "(D) '漂移' 比喻没有明确方向地徘徊或偏离。" +
            "<br><br>" +
            "(A) '集中' 意味着特别注意。" +
            "<br><br>" +
            "(B) '专注' 意味着将所有注意力集中在特定对象或活动上。" +
            "<br><br>" +
            "(C) '锐化' 意味着使变得锋利或更锋利。"
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
