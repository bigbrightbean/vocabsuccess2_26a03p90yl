// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "The insensitive remark was enough to __________ a fight between the two rival groups.",
        chinese_question: "这一无礼的言论足以 __________ 两个对立团体之间的斗争。",
        answers: [
                { option: "A", answer: "prevent", chinese_answer: "防止", chinese_romanization: "fángzhǐ" },
                { option: "B", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" },
                { option: "C", answer: "control", chinese_answer: "控制", chinese_romanization: "kòngzhì" },
                { option: "D", answer: "trigger", chinese_answer: "引发", chinese_romanization: "yǐnfā" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'trigger' means to cause (an event or situation) to happen or exist." +
            "<br><br>" +
            "(A) 'prevent' means to stop (something) from happening or existing." +
            "<br><br>" +
            "(B) 'ignore' means to refuse to take notice of or acknowledge." +
            "<br><br>" +
            "(C) 'control' means to determine the behavior or supervise the running of.",
        chinese_explanation: "(D) '引发' 意味着引起（事件或情况）发生或存在。" +
            "<br><br>" +
            "(A) '防止' 意味着阻止（某事）发生或存在。" +
            "<br><br>" +
            "(B) '忽视' 意味着拒绝注意或承认。" +
            "<br><br>" +
            "(C) '控制' 意味着决定行为或监督运行。"
    },
    {
        id: 2,
        question: "Rumors about the celebrity's secret wedding quickly __________ through social media.",
        chinese_question: "关于这位名人秘密婚礼的谣言迅速在社交媒体上 __________。",
        answers: [
                { option: "A", answer: "disappeared", chinese_answer: "消失", chinese_romanization: "xiāoshī" },
                { option: "B", answer: "stopped", chinese_answer: "停止", chinese_romanization: "tíngzhǐ" },
                { option: "C", answer: "started", chinese_answer: "开始", chinese_romanization: "kāishǐ" },
                { option: "D", answer: "circulated", chinese_answer: "传播", chinese_romanization: "chuánbō" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'circulated' means to move or cause to move continuously or freely through a closed system or area." +
            "<br><br>" +
            "(A) 'disappeared' means to cease to be visible." +
            "<br><br>" +
            "(B) 'stopped' means to cause (an action, process, or event) to come to an end." +
            "<br><br>" +
            "(C) 'started' means to begin or cause to begin an action, process, or event.",
        chinese_explanation: "(D) '传播' 意味着在封闭系统或区域内连续或自由地移动或使之移动。" +
            "<br><br>" +
            "(A) '消失' 意味着不再可见。" +
            "<br><br>" +
            "(B) '停止' 意味着使（一个行动、过程或事件）结束。" +
            "<br><br>" +
            "(C) '开始' 意味着开始或导致一个行动、过程或事件开始。"
    },
    {
        id: 3,
        question: "The sound of the waves began to __________ as the tide went out, leaving the beach quiet and serene.",
        chinese_question: "随着潮水退去，海浪的声音开始 __________，沙滩变得安静祥和。",
        answers: [
                { option: "A", answer: "recede", chinese_answer: "退去", chinese_romanization: "tuìqù" },
                { option: "B", answer: "rise", chinese_answer: "上升", chinese_romanization: "shàngshēng" },
                { option: "C", answer: "gather", chinese_answer: "聚集", chinese_romanization: "jùjí" },
                { option: "D", answer: "spread", chinese_answer: "传播", chinese_romanization: "chuánbō" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'recede' means to go or move back or further away from a previous position." +
            "<br><br>" +
            "(B) 'rise' means to move from a lower position to a higher one." +
            "<br><br>" +
            "(C) 'gather' means to come together; assemble or accumulate." +
            "<br><br>" +
            "(D) 'spread' means to open out something so as to extend its surface area, width, or length.",
        chinese_explanation: "(A) '退去' 意味着从先前的位置返回或进一步远离。" +
            "<br><br>" +
            "(B) '上升' 意味着从较低的位置移动到较高的位置。" +
            "<br><br>" +
            "(C) '聚集' 意味着聚集在一起；集合或积累。" +
            "<br><br>" +
            "(D) '传播' 意味着展开某物以扩大其表面积、宽度或长度。"
    },
    {
        id: 4,
        question: "The old play was __________ and performed to a new audience with great success.",
        chinese_question: "这出旧戏被__________，并成功地为新观众演出。",
        answers: [
            { option: "A", answer: "buried", chinese_answer: "埋葬", chinese_romanization: "máizàng" },
            { option: "B", answer: "discarded", chinese_answer: "丢弃", chinese_romanization: "diūqì" },
            { option: "C", answer: "revived", chinese_answer: "复活", chinese_romanization: "fùhuó" },
            { option: "D", answer: "abandoned", chinese_answer: "放弃", chinese_romanization: "fàngqì" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'revived' means restored to life or consciousness." +
            "<br><br>" +
            "(A) 'buried' means put or hide underground; metaphorically, it can mean forgotten or neglected." +
            "<br><br>" +
            "(B) 'discarded' means gotten rid of as no longer useful or desirable." +
            "<br><br>" +
            "(D) 'abandoned' means having been deserted or left.",
        chinese_explanation: "(C) '复活' 意味着恢复生命或意识。" +
            "<br><br>" +
            "'埋葬' 意味着埋藏在地下；比喻遗忘或忽视。" +
            "<br><br>" +
            "'丢弃' 意味着不再有用或不再需要而被丢弃。" +
            "<br><br>" +
            "'放弃' 意味着被遗弃或离开的。"
    },
    {
        id: 5,
        question: "Her thoughts began to __________, making it hard to concentrate on the task.",
        chinese_question: "她的思绪开始 __________，使她难以专注于任务。",
        answers: [
            { option: "A", answer: "wander", chinese_answer: "漫游", chinese_romanization: "mànyóu" },
            { option: "B", answer: "focus", chinese_answer: "专注", chinese_romanization: "zhuānzhù" },
            { option: "C", answer: "sharpen", chinese_answer: "锐化", chinese_romanization: "ruì huà" },
            { option: "D", answer: "align", chinese_answer: "对齐", chinese_romanization: "duì qí" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'wander' metaphorically means to move or travel aimlessly or without fixed course." +
            "<br><br>" +
            "(B) 'focus' means pay particular attention to." +
            "<br><br>" +
            "(C) 'sharpen' means make or become sharp or sharper." +
            "<br><br>" +
            "(D) 'align' means place or arrange (things) in a straight line.",
        chinese_explanation: "(A) '漫游' 比喻无目的地移动或旅行。" +
            "<br><br>" +
            "'专注' 意味着特别注意。" +
            "<br><br>" +
            "'锐化' 意味着使或变得锋利或更锋利。" +
            "<br><br>" +
            "'对齐' 意味着将（事物）排列成直线。"
    },
    {
        id: 6,
        question: "To understand the problem fully, we need to __________ every aspect of the situation.",
        chinese_question: "要完全理解这个问题，我们需要 __________ 情况的每一个方面。",
        answers: [
            { option: "A", answer: "analyze", chinese_answer: "分析", chinese_romanization: "fēnxī" },
            { option: "B", answer: "overlook", chinese_answer: "忽视", chinese_romanization: "hūshì" },
            { option: "C", answer: "dismiss", chinese_answer: "驳回", chinese_romanization: "bóhuí" },
            { option: "D", answer: "simplify", chinese_answer: "简化", chinese_romanization: "jiǎnhuà" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'analyze' metaphorically means to examine in detail in order to understand or explain something." +
            "<br><br>" +
            "(B) 'overlook' means fail to notice (something)." +
            "<br><br>" +
            "(C) 'dismiss' means decide that something or someone is not important and not worth considering." +
            "<br><br>" +
            "(D) 'simplify' means make (something) simpler or easier to do or understand.",
        chinese_explanation: "(A) '分析' 比喻详细检查以便理解或解释某事。" +
            "<br><br>" +
            "(B) '忽视' 意味着未能注意到（某事）。" +
            "<br><br>" +
            "(C) '驳回' 意味着决定某事或某人不重要且不值得考虑。" +
            "<br><br>" +
            "(D) '简化' 意味着使（某事）更简单或更容易做或理解。"
    },
    {
        id: 7,
        question: "We cannot __________ to make any mistakes in this critical phase of the project, as it could jeopardize everything.",
        chinese_question: "在项目的这个关键阶段，我们不能承受犯任何错误，否则可能会危及一切__________。",
        answers: [
            { option: "A", answer: "afford", chinese_answer: "承受", chinese_romanization: "chéngshòu" },
            { option: "B", answer: "allow", chinese_answer: "允许", chinese_romanization: "yǔnxǔ" },
            { option: "C", answer: "encourage", chinese_answer: "鼓励", chinese_romanization: "gǔlì" },
            { option: "D", answer: "promote", chinese_answer: "促进", chinese_romanization: "cùjìn" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'afford' metaphorically means to be able to do something without risk or adverse consequences." +
            "<br><br>" +
            "(B) 'allow' means give (someone) permission to do something." +
            "<br><br>" +
            "(C) 'encourage' means give support, confidence, or hope to (someone)." +
            "<br><br>" +
            "(D) 'promote' means further the progress of (something, especially a cause, venture, or aim); support or actively encourage.",
        chinese_explanation: "(A) '承受' 比喻能够做某事而不冒风险或产生不利后果。" +
            "<br><br>" +
            "(B) '允许' 意味着给予（某人）做某事的许可。" +
            "<br><br>" +
            "(C) '鼓励' 意味着给予（某人）支持、信心或希望。" +
            "<br><br>" +
            "(D) '促进' 意味着进一步发展（某事，尤其是事业、企业或目标）；支持或积极鼓励。"
    },
    {
        id: 8,
        question: "The company needs to __________ the issues with their customer service, ensuring all complaints are resolved promptly.",
        chinese_question: "公司需要确保所有投诉都能及时解决__________他们的客户服务问题。",
        answers: [
            { option: "A", answer: "neglect", chinese_answer: "忽视", chinese_romanization: "hūshì" },
            { option: "B", answer: "worsen", chinese_answer: "恶化", chinese_romanization: "èhuà" },
            { option: "C", answer: "hide", chinese_answer: "隐藏", chinese_romanization: "yǐncáng" },
            { option: "D", answer: "address", chinese_answer: "解决", chinese_romanization: "jiějué" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'address' metaphorically means to think about and begin to deal with (an issue or problem)." +
            "<br><br>" +
            "(A) 'neglect' means fail to care for properly." +
            "<br><br>" +
            "(B) 'worsen' means make or become worse." +
            "<br><br>" +
            "(C) 'hide' means keep out of sight; conceal.",
        chinese_explanation: "(D) '解决' 比喻思考并开始处理（问题或难题）。" +
            "<br><br>" +
            "(A) '忽视' 意味着未能妥善照顾。" +
            "<br><br>" +
            "(B) '恶化' 意味着使变得更糟。" +
            "<br><br>" +
            "(C) '隐藏' 意味着使不被看到；隐藏。"
    },
    {
        id: 9,
        question: "He was there to __________ the traditions and customs of the local people.",
        chinese_question: "他在那里 __________ 当地人的传统和习俗。",
        answers: [
            { option: "A", answer: "observe", chinese_answer: "观察", chinese_romanization: "guānchá" },
            { option: "B", answer: "violate", chinese_answer: "违反", chinese_romanization: "wéifǎn" },
            { option: "C", answer: "disrupt", chinese_answer: "打扰", chinese_romanization: "dǎrǎo" },
            { option: "D", answer: "alter", chinese_answer: "改变", chinese_romanization: "gǎibiàn" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'observe' metaphorically means to notice or perceive something and register it as being significant." +
            "<br><br>" +
            "(B) 'violate' means break or fail to comply with (a rule or formal agreement)." +
            "<br><br>" +
            "(C) 'disrupt' means interrupt (an event, activity, or process) by causing a disturbance or problem." +
            "<br><br>" +
            "(D) 'alter' means change or cause to change in character or composition, typically in a comparatively small but significant way.",
        chinese_explanation: "(A) '观察' 比喻注意或感知某事并将其记录为重要的。" +
            "<br><br>" +
            "(B) '违反' 意味着违反或不遵守（规则或正式协议）。" +
            "<br><br>" +
            "(C) '打扰' 意味着通过引起干扰或问题中断（事件、活动或过程）。" +
            "<br><br>" +
            "(D) '改变' 意味着改变或导致改变特征或组成，通常是在相对较小但显著的方式。"
    },
    {
        id: 10,
        question: "She was asked to __________ her duties with the utmost professionalism, ensuring all tasks were completed to a high standard.",
        chinese_question: "她被要求以最专业的方式 __________ 她的职责，确保所有任务都达到高标准。",
        answers: [
            { option: "A", answer: "perform", chinese_answer: "履行", chinese_romanization: "lǚxíng" },
            { option: "B", answer: "neglect", chinese_answer: "忽视", chinese_romanization: "hūshì" },
            { option: "C", answer: "postpone", chinese_answer: "推迟", chinese_romanization: "tuīchí" },
            { option: "D", answer: "disrupt", chinese_answer: "打扰", chinese_romanization: "dǎrǎo" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'perform' metaphorically means to carry out an action or task." +
            "<br><br>" +
            "(B) 'neglect' means fail to care for properly." +
            "<br><br>" +
            "(C) 'postpone' means cause or arrange for (something) to take place at a time later than that first scheduled." +
            "<br><br>" +
            "(D) 'disrupt' means interrupt (an event, activity, or process) by causing a disturbance or problem.",
        chinese_explanation: "(A) '履行' 比喻执行某个行动或任务。" +
            "<br><br>" +
            "(B) '忽视' 意味着未能妥善照顾。" +
            "<br><br>" +
            "(C) '推迟' 意味着安排或安排某事在最初计划的时间之后进行。" +
            "<br><br>" +
            "(D) '打扰' 意味着通过引起干扰或问题中断（事件、活动或过程）。"
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
