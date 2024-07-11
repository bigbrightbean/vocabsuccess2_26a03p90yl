// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "Despite her efforts to stay healthy, she __________ to the flu.",
        chinese_question: "尽管她努力保持健康，但她还是 __________ 了流感。",
        answers: [
            { option: "A", answer: "resisted", chinese_answer: "抵抗", chinese_romanization: "dǐkàng" },
            { option: "B", answer: "overcame", chinese_answer: "克服", chinese_romanization: "kèfú" },
            { option: "C", answer: "battled", chinese_answer: "奋斗", chinese_romanization: "fèndòu" },
            { option: "D", answer: "succumbed", chinese_answer: "屈服", chinese_romanization: "qūfú" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'succumbed' means fail to resist pressure, temptation, or some other negative force." +
            "<br><br>" +
            "(A) 'resisted' means withstand the action or effect of." +
            "<br><br>" +
            "(B) 'overcame' means succeed in dealing with (a problem or difficulty)." +
            "<br><br>" +
            "(C) 'battled' means to fight or struggle tenaciously to achieve or resist something.",
        chinese_explanation: "(D) '屈服' 意味着未能抵抗压力、诱惑或其他负面力量。" +
            "<br><br>" +
            "(A) '抵抗' 意味着抵挡...的行动或效果。" +
            "<br><br>" +
            "(B) '克服' 意味着成功地应对（问题或困难）。" +
            "<br><br>" +
            "(C) '奋斗' 意味着为实现或抵抗某事而顽强地斗争或抗争。"
    },
    {
        id: 2,
        question: "Her performance in the exam __________ all expectations, earning her the top spot in the class.",
        chinese_question: "她在考试中的表现 __________ 了所有人的期望，获得了班级第一名。",
        answers: [
            { option: "A", answer: "surpassed", chinese_answer: "超越", chinese_romanization: "chāoyuè" },
            { option: "B", answer: "met", chinese_answer: "达到", chinese_romanization: "dádào" },
            { option: "C", answer: "failed", chinese_answer: "失败", chinese_romanization: "shībài" },
            { option: "D", answer: "aligned", chinese_answer: "排列", chinese_romanization: "páiliè" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'surpassed' means to exceed; be greater than." +
            "<br><br>" +
            "(B) 'met' means to fulfill or satisfy (a need, requirement, or condition)." +
            "<br><br>" +
            "(C) 'failed' means to be unsuccessful in achieving one's goal." +
            "<br><br>" +
            "(D) 'aligned' means to place or arrange (things) in a straight line.",
        chinese_explanation: "(A) '超越' 意味着超过；比...更大。" +
            "<br><br>" +
            "(B) '达到' 意味着满足或符合（需求、要求或条件）。" +
            "<br><br>" +
            "(C) '失败' 意味着未能实现目标。" +
            "<br><br>" +
            "(D) '排列' 意味着将（物品）排成一条直线。"
    },
    {
        id: 3,
        question: "Over the years, she managed to __________ a wealth of knowledge through her travels and studies.",
        chinese_question: "多年来，她通过旅行和学习设法__________了丰富的知识。",
        answers: [
            { option: "A", answer: "lose", chinese_answer: "失去", chinese_romanization: "shīqù" },
            { option: "B", answer: "acquire", chinese_answer: "获得", chinese_romanization: "huòdé" },
            { option: "C", answer: "discard", chinese_answer: "丢弃", chinese_romanization: "diūqì" },
            { option: "D", answer: "abandon", chinese_answer: "放弃", chinese_romanization: "fàngqì" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'acquire' means to buy or obtain (an asset or object) for oneself." +
            "<br><br>" +
            "(A) 'lose' means be deprived of or cease to have or retain (something)." +
            "<br><br>" +
            "(C) 'discard' means get rid of (someone or something) as no longer useful or desirable." +
            "<br><br>" +
            "(D) 'abandon' means cease to support or look after (someone); desert.",
        chinese_explanation: "(B) '获得'一词意味着为自己购买或获得（资产或物品）。" +
            "<br><br>" +
            "(A) '失去' 意味着被剥夺或停止拥有或保留（某物）。" +
            "<br><br>" +
            "(C) '丢弃' 意味着摆脱（某人或某物），因为不再有用或不想要。" +
            "<br><br>" +
            "(D) '放弃' 意味着停止支持或照顾（某人）；抛弃。"
    },
    {
        id: 4,
        question: "The company had to __________ its mistake and apologize to the customers.",
        chinese_question: "公司不得不__________自己的错误并向客户道歉。",
        answers: [
            { option: "A", answer: "conceal", chinese_answer: "隐藏", chinese_romanization: "yǐncáng" },
            { option: "B", answer: "refute", chinese_answer: "反驳", chinese_romanization: "fǎnbó" },
            { option: "C", answer: "acknowledge", chinese_answer: "承认", chinese_romanization: "chéngrèn" },
            { option: "D", answer: "deny", chinese_answer: "否认", chinese_romanization: "fǒurèn" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'acknowledge' means accept or admit the existence or truth of. Figuratively, it can mean taking responsibility for an error or issue." +
            "<br><br>" +
            "(A) 'conceal' means to keep from sight; hide." +
            "<br><br>" +
            "(B) 'refute' means prove (a statement or theory) to be wrong or false." +
            "<br><br>" +
            "(D) 'deny' means state that one refuses to admit the truth or existence of.",
        chinese_explanation: "(C) '承认'一词意味着接受或承认存在或真实性。比喻地，它可以表示为错误或问题承担责任。" +
            "<br><br>" +
            "(A) '隐藏' 意味着不让看见；隐藏。" +
            "<br><br>" +
            "(B) '反驳' 意味着证明（某一陈述或理论）是错误的。" +
            "<br><br>" +
            "(D) '否认' 意味着声明拒绝承认真实性或存在性。"
    },
    {
        id: 5,
        question: "The politician's opponents tried to __________ him with false accusations.",
        chinese_question: "政敌们试图通过虚假指控 __________ 他。",
        answers: [
            { option: "A", answer: "vilify", chinese_answer: "诋毁", chinese_romanization: "dǐhuǐ" },
            { option: "B", answer: "praise", chinese_answer: "赞美", chinese_romanization: "zànměi" },
            { option: "C", answer: "honour", chinese_answer: "尊敬", chinese_romanization: "zūnjìng" },
            { option: "D", answer: "support", chinese_answer: "支持", chinese_romanization: "zhīchí" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'vilify' means speak or write about in an abusively disparaging manner." +
            "<br><br>" +
            "(B) 'praise' means express warm approval or admiration of." +
            "<br><br>" +
            "(C) 'honour' means regard with great respect." +
            "<br><br>" +
            "(D) 'support' means bear all or part of the weight of; hold up.",
        chinese_explanation: "(A) '诋毁' 意味着以辱骂性贬低的方式说或写。" +
            "<br><br>" +
            "(B) '赞美' 意味着表达热烈的赞同或钦佩。" +
            "<br><br>" +
            "(C) '尊敬' 意味着给予极大的尊敬。" +
            "<br><br>" +
            "(D) '支持' 意味着承担全部或部分重量；支撑。"
    },
    {
        id: 6,
        question: "The artists __________ for the opportunity to display their work in the prestigious gallery.",
        chinese_question: "艺术家们 __________ 在著名画廊展示作品的机会。",
        answers: [
            { option: "A", answer: "vied", chinese_answer: "争夺", chinese_romanization: "zhēngduó" },
            { option: "B", answer: "avoided", chinese_answer: "避免", chinese_romanization: "bìmiǎn" },
            { option: "C", answer: "neglected", chinese_answer: "忽视", chinese_romanization: "hūshì" },
            { option: "D", answer: "dismissed", chinese_answer: "解散", chinese_romanization: "jiěsàn" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'vied' metaphorically means to strive for superiority or victory." +
            "<br><br>" +
            "(B) 'avoided' means keep away from or stop oneself from doing (something)." +
            "<br><br>" +
            "(C) 'neglected' means fail to care for properly." +
            "<br><br>" +
            "(D) 'dismissed' means order or allow to leave; send away.",
        chinese_explanation: "(A) '争夺' 比喻争取优越或胜利。" +
            "<br><br>" +
            "(B) '避免' 意味着远离或阻止自己做（某事）。" +
            "<br><br>" +
            "(C) '忽视' 意味着未能正确照顾。" +
            "<br><br>" +
            "(D) '解散' 意味着命令或允许离开；送走。"
    },
    {
        id: 7,
        question: "He would __________ the day he decided to drop out of college, realizing it was a mistake.",
        chinese_question: "他会 __________ 他决定退学的那一天，意识到那是一个错误。",
        answers: [
            { option: "A", answer: "rejoice", chinese_answer: "高兴", chinese_romanization: "gāoxìng" },
            { option: "B", answer: "laud", chinese_answer: "赞美", chinese_romanization: "zànměi" },
            { option: "C", answer: "rue", chinese_answer: "后悔", chinese_romanization: "hòuhuǐ" },
            { option: "D", answer: "cherish", chinese_answer: "珍惜", chinese_romanization: "zhēnxī" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'rue' means to bitterly regret (something one has done or allowed to happen)." +
            "<br><br>" +
            "(A) 'rejoice' means to feel or show great joy or delight." +
            "<br><br>" +
            "(B) 'laud' means to praise (a person or their achievements) highly, especially in a public context." +
            "<br><br>" +
            "(D) 'cherish' means to protect and care for (someone) lovingly.",
        chinese_explanation: "(C) '后悔' 意味着痛苦地后悔（某人做过或允许发生的事情）。" +
            "<br><br>" +
            "(A) '高兴' 意味着感到或表现出极大的喜悦或快乐。" +
            "<br><br>" +
            "(B) '赞美' 意味着高度赞扬（一个人或他们的成就），尤其是在公共场合。" +
            "<br><br>" +
            "(D) '珍惜' 意味着保护和爱护（某人）。"
    },
    {
        id: 8,
        question: "His anger began to __________ after he had time to calm down.",
        chinese_question: "在有时间冷静下来后，他的愤怒开始 __________。",
        answers: [
            { option: "A", answer: "subside", chinese_answer: "消退", chinese_romanization: "xiāotuì" },
            { option: "B", answer: "flare", chinese_answer: "爆发", chinese_romanization: "bàofā" },
            { option: "C", answer: "grow", chinese_answer: "增长", chinese_romanization: "zēngzhǎng" },
            { option: "D", answer: "expand", chinese_answer: "扩大", chinese_romanization: "kuòdà" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'subside' metaphorically means to become less intense or severe." +
            "<br><br>" +
            "(B) 'flare' means to burn with a sudden intensity." +
            "<br><br>" +
            "(C) 'grow' means to undergo natural development by increasing in size and changing physically." +
            "<br><br>" +
            "(D) 'expand' means become or make larger or more extensive.",
        chinese_explanation: "(A) '消退' 比喻变得不那么强烈或严重。" +
            "<br><br>" +
            "(B) '爆发' 意味着突然猛烈地燃烧。" +
            "<br><br>" +
            "(C) '增长' 意味着通过增加体积和物理变化自然发展。" +
            "<br><br>" +
            "(D) '扩大' 意味着变大或变得更广泛。"
    },
    {
        id: 9,
        question: "The unfair comment from her colleague continued to __________ in her mind, causing her great distress.",
        chinese_question: "同事的不公平评论继续在她心中 __________，让她非常痛苦。",
        answers: [
            { option: "A", answer: "rankle", chinese_answer: "惹恼", chinese_romanization: "rěnǎo" },
            { option: "B", answer: "soothe", chinese_answer: "抚慰", chinese_romanization: "fǔwèi" },
            { option: "C", answer: "heal", chinese_answer: "治愈", chinese_romanization: "zhìyù" },
            { option: "D", answer: "please", chinese_answer: "取悦", chinese_romanization: "qǔyuè" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'rankle' means to cause persistent annoyance or resentment." +
            "<br><br>" +
            "(B) 'soothe' means to gently calm (a person or their feelings)." +
            "<br><br>" +
            "(C) 'heal' means to become sound or healthy again." +
            "<br><br>" +
            "(D) 'please' means to cause to feel happy and satisfied.",
        chinese_explanation: "(A) '惹恼' 意味着引起持续的烦恼或怨恨。" +
            "<br><br>" +
            "(B) '抚慰' 意味着温和地安抚（一个人或他们的感情）。" +
            "<br><br>" +
            "(C) '治愈' 意味着再次健康或康复。" +
            "<br><br>" +
            "(D) '取悦' 意味着使感到高兴和满意。"
    },
    {
        id: 10,
        question: "She decided to __________ her approach to the problem after receiving feedback, incorporating new ideas and making adjustments to her original plan.",
        chinese_question: "在收到反馈后，她决定 __________ 自己解决问题的方法，融入新的想法并调整她的原计划。",
        answers: [
            { option: "A", answer: "preserve", chinese_answer: "保持", chinese_romanization: "bǎochí" },
            { option: "B", answer: "abandon", chinese_answer: "放弃", chinese_romanization: "fàngqì" },
            { option: "C", answer: "modify", chinese_answer: "修改", chinese_romanization: "xiūgǎi" },
            { option: "D", answer: "replicate", chinese_answer: "复制", chinese_romanization: "fùzhì" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'modify' metaphorically means to change or alter (something) slightly in order to improve it." +
            "<br><br>" +
            "(A) 'preserve' means maintain (something) in its original or existing state." +
            "<br><br>" +
            "(B) 'abandon' means give up completely (a course of action, a practice, or a way of thinking)." +
            "<br><br>" +
            "(D) 'replicate' means make an exact copy of; reproduce.",
        chinese_explanation: "(C) '修改' 比喻对（某物）进行轻微更改以改进。" +
            "<br><br>" +
            "(A) '保持' 意味着将（某物）维持在其原始或现有状态。" +
            "<br><br>" +
            "(B) '放弃' 意味着完全放弃（一个行动方案、一种做法或一种思维方式）。" +
            "<br><br>" +
            "(D) '复制' 意味着制作一个完全相同的副本；复制。"
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
