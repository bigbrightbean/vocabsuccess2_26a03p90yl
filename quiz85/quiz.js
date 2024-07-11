// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "The magician's incredible tricks continued to __________ the audience throughout the evening, leaving them in awe and amazement.",
        chinese_question: "魔术师令人难以置信的魔术在整个晚上不断 __________ 观众，让他们惊叹不已。",
        answers: [
            { option: "A", answer: "bore", chinese_answer: "使厌倦", chinese_romanization: "shǐ yànjuàn" },
            { option: "B", answer: "confuse", chinese_answer: "使困惑", chinese_romanization: "shǐ kùnhuò" },
            { option: "C", answer: "disappoint", chinese_answer: "使失望", chinese_romanization: "shǐ shīwàng" },
            { option: "D", answer: "astonish", chinese_answer: "使惊讶", chinese_romanization: "shǐ jīngyà" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'astonish' means surprise or impress (someone) greatly." +
            "<br><br>" +
            "(A) 'bore' means make (someone) feel weary and uninterested by tedious talk or dullness." +
            "<br><br>" +
            "(B) 'confuse' means make (someone) bewildered or perplexed." +
            "<br><br>" +
            "(C) 'disappoint' means fail to fulfill the hopes or expectations of.",
        chinese_explanation: "(D) '使惊讶' 一词意味着极大地使（某人）感到惊讶或印象深刻。" +
            "<br><br>" +
            "(A) '使厌倦' 意味着通过乏味的谈话或无聊使（某人）感到疲倦和不感兴趣。" +
            "<br><br>" +
            "(B) '使困惑' 意味着使（某人）困惑或迷惑。" +
            "<br><br>" +
            "(C) '使失望' 意味着未能实现（某人的）期望或期望。"
    },
    {
        id: 2,
        question: "The community leaders decided to __________ the construction of the new highway due to environmental concerns.",
        chinese_question: "由于环境问题，社区领袖决定 __________ 新高速公路的建设。",
        answers: [
            { option: "A", answer: "oppose", chinese_answer: "反对", chinese_romanization: "fǎnduì" },
            { option: "B", answer: "support", chinese_answer: "支持", chinese_romanization: "zhīchí" },
            { option: "C", answer: "approve", chinese_answer: "批准", chinese_romanization: "pīzhǔn" },
            { option: "D", answer: "endorse", chinese_answer: "认可", chinese_romanization: "rènkě" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'oppose' means to disapprove of and attempt to prevent, especially by argument." +
            "<br><br>" +
            "(B) 'support' means bear all or part of the weight of; hold up." +
            "<br><br>" +
            "(C) 'approve' means officially agree to or accept as satisfactory." +
            "<br><br>" +
            "(D) 'endorse' means declare one's public approval or support of.",
        chinese_explanation: "(A) '反对' 一词意味着不赞成并试图阻止，特别是通过辩论。" +
            "<br><br>" +
            "(B) '支持' 意味着承担全部或部分重量；支撑。" +
            "<br><br>" +
            "(C) '批准' 意味着正式同意或接受为满意。" +
            "<br><br>" +
            "(D) '认可' 意味着公开声明赞同或支持。"
    },
    {
        id: 3,
        question: "The street was completely __________ by the heavy fog, making it hard for drivers to see.",
        chinese_question: "街道完全被浓雾 __________，使司机很难看清。",
        answers: [
            { option: "A", answer: "illuminated", chinese_answer: "照亮的", chinese_romanization: "zhàoliàng de" },
            { option: "B", answer: "cleared", chinese_answer: "清除的", chinese_romanization: "qīngchú de" },
            { option: "C", answer: "obscured", chinese_answer: "遮蔽的", chinese_romanization: "zhēbì de" },
            { option: "D", answer: "enhanced", chinese_answer: "增强的", chinese_romanization: "zēngqiáng de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'obscured' means kept from being seen; concealed." +
            "<br><br>" +
            "(A) 'illuminated' means light up." +
            "<br><br>" +
            "(B) 'cleared' means remove an obstruction or unwanted item or items from." +
            "<br><br>" +
            "(D) 'enhanced' means intensify, increase, or further improve the quality, value, or extent of.",
        chinese_explanation: "(C) '遮蔽的' 一词意味着被隐藏；掩盖。" +
            "<br><br>" +
            "(A) '照亮的' 意味着照亮。" +
            "<br><br>" +
            "(B) '清除的' 意味着清除障碍物或不需要的物品。" +
            "<br><br>" +
            "(D) '增强的' 意味着加强、增加或进一步改善质量、价值或范围。"
    },
    {
        id: 4,
        question: "He couldn't hide how much he __________ the taste of broccoli, even though he knew it was healthy.",
        chinese_question: "尽管他知道西兰花很健康，但他还是无法掩饰自己多么 __________ 它的味道。",
        answers: [
            { option: "A", answer: "enjoyed", chinese_answer: "享受", chinese_romanization: "xiǎngshòu" },
            { option: "B", answer: "tolerated", chinese_answer: "容忍", chinese_romanization: "róngrěn" },
            { option: "C", answer: "detested", chinese_answer: "厌恶", chinese_romanization: "yànwù" },
            { option: "D", answer: "accepted", chinese_answer: "接受", chinese_romanization: "jiēshòu" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'detested' means dislike intensely." +
            "<br><br>" +
            "(A) 'enjoyed' means take delight or pleasure in (an activity or occasion)." +
            "<br><br>" +
            "(B) 'tolerated' means allow the existence, occurrence, or practice of (something that one does not necessarily like or agree with) without interference." +
            "<br><br>" +
            "(D) 'accepted' means consent to receive (a thing offered).",
        chinese_explanation: "(C) '厌恶' 一词意味着强烈地不喜欢。" +
            "<br><br>" +
            "(A) '享受' 意味着从（活动或场合）中获得乐趣或愉悦。" +
            "<br><br>" +
            "(B) '容忍' 意味着允许（某事的存在、发生或实践），即使不一定喜欢或同意，也不干涉。" +
            "<br><br>" +
            "(D) '接受' 意味着同意接收（提供的东西）。"
    },
    {
        id: 5,
        question: "Employees must __________ with the company's safety regulations to ensure a safe working environment.",
        chinese_question: "员工必须 __________ 公司的安全规定，以确保安全的工作环境。",
        answers: [
            { option: "A", answer: "comply", chinese_answer: "遵守", chinese_romanization: "zūnshǒu" },
            { option: "B", answer: "defy", chinese_answer: "违抗", chinese_romanization: "wéikàng" },
            { option: "C", answer: "reject", chinese_answer: "拒绝", chinese_romanization: "jùjué" },
            { option: "D", answer: "violate", chinese_answer: "违反", chinese_romanization: "wéifǎn" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'comply' means act in accordance with a wish or command." +
            "<br><br>" +
            "(B) 'defy' means openly resist or refuse to obey." +
            "<br><br>" +
            "(C) 'reject' means dismiss as inadequate, unacceptable, or faulty." +
            "<br><br>" +
            "(D) 'violate' means break or fail to comply with (a rule or formal agreement).",
        chinese_explanation: "(A) '遵守' 一词意味着按照愿望或命令行事。" +
            "<br><br>" +
            "(B) '违抗' 意味着公开抵抗或拒绝服从。" +
            "<br><br>" +
            "(C) '拒绝' 意味着认为不合格、不接受或有缺陷而予以驳回。" +
            "<br><br>" +
            "(D) '违反' 意味着违反或未能遵守（规则或正式协议）。"
    },
    {
        id: 6,
        question: "She couldn't help but __________ in pain when she accidentally touched the hot stove.",
        chinese_question: "当她不小心碰到热炉子时，不禁 __________ 起痛苦的表情。",
        answers: [
            { option: "A", answer: "smile", chinese_answer: "微笑", chinese_romanization: "wéixiào" },
            { option: "B", answer: "laugh", chinese_answer: "笑", chinese_romanization: "xiào" },
            { option: "C", answer: "frown", chinese_answer: "皱眉", chinese_romanization: "zhòuméi" },
            { option: "D", answer: "grimace", chinese_answer: "扮鬼脸", chinese_romanization: "bàn guǐliǎn" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'grimace' means make a twisted facial expression, typically expressing disgust, pain, or wry amusement." +
            "<br><br>" +
            "(A) 'smile' means form one's features into a pleased, kind, or amused expression." +
            "<br><br>" +
            "(B) 'laugh' means make the spontaneous sounds and movements of the face and body that are the instinctive expressions of lively amusement." +
            "<br><br>" +
            "(C) 'frown' means furrow one's brows in an expression indicating disapproval, displeasure, or concentration.",
        chinese_explanation: "(D) '扮鬼脸' 一词意味着做出扭曲的面部表情，通常表示厌恶、痛苦或无奈的欢乐。" +
            "<br><br>" +
            "(A) '微笑' 意味着将自己的特征变成愉快、友善或有趣的表情。" +
            "<br><br>" +
            "(B) '笑' 意味着发出自发的声音和面部及身体的动作，这些动作是充满欢乐的本能表达。" +
            "<br><br>" +
            "(C) '皱眉' 意味着皱眉表示不赞成、不满或集中注意力。"
    },
    {
        id: 7,
        question: "He tends to __________ his success to hard work and determination rather than luck.",
        chinese_question: "他倾向于将自己的成功 __________ 于努力工作和决心，而不是运气。",
        answers: [
            { option: "A", answer: "discredit", chinese_answer: "使不可信", chinese_romanization: "shǐ bù kě xìn" },
            { option: "B", answer: "attribute", chinese_answer: "归因于", chinese_romanization: "guīyīn yú" },
            { option: "C", answer: "deny", chinese_answer: "否认", chinese_romanization: "fǒurèn" },
            { option: "D", answer: "diminish", chinese_answer: "减少", chinese_romanization: "jiǎnshǎo" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'attribute' means regard something as being caused by (someone or something)." +
            "<br><br>" +
            "(A) 'discredit' means harm the good reputation of (someone or something)." +
            "<br><br>" +
            "(C) 'deny' means state that one refuses to admit the truth or existence of." +
            "<br><br>" +
            "(D) 'diminish' means make or become less.",
        chinese_explanation: "(B) '归因于' 一词意味着认为某事是由（某人或某事）引起的。" +
            "<br><br>" +
            "(A) '使不可信' 意味着损害（某人或某事）的良好声誉。" +
            "<br><br>" +
            "(C) '否认' 意味着声明拒绝承认真相或存在。" +
            "<br><br>" +
            "(D) '减少' 意味着使减少或变少。"
    },
    {
        id: 8,
        question: "The police managed to __________ the suspect after a long chase through the city.",
        chinese_question: "经过在城市的长时间追逐，警察终于设法 __________ 嫌疑人。",
        answers: [
            { option: "A", answer: "release", chinese_answer: "释放", chinese_romanization: "shìfàng" },
            { option: "B", answer: "apprehend", chinese_answer: "逮捕", chinese_romanization: "dàibǔ" },
            { option: "C", answer: "aid", chinese_answer: "帮助", chinese_romanization: "bāngzhù" },
            { option: "D", answer: "free", chinese_answer: "解放", chinese_romanization: "jiěfàng" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'apprehend' means arrest (someone) for a crime." +
            "<br><br>" +
            "(A) 'release' means allow or enable to escape from confinement; set free." +
            "<br><br>" +
            "(C) 'aid' means help or support (someone or something) in achieving a goal." +
            "<br><br>" +
            "(D) 'free' means not under the control or in the power of another; able to act or be done as one wishes.",
        chinese_explanation: "(B) '逮捕' 一词意味着因犯罪而逮捕（某人）。" +
            "<br><br>" +
            "(A) '释放' 意味着允许或使逃脱监禁；释放。" +
            "<br><br>" +
            "(C) '帮助' 意味着帮助或支持（某人或某事）实现目标。" +
            "<br><br>" +
            "(D) '解放' 意味着不受他人控制或力量的控制；能够按自己希望的方式行动或完成。"
    },
    {
        id: 9,
        question: "The military plans to __________ additional troops to the conflict zone by the end of the week.",
        chinese_question: "军方计划在本周末前将额外的部队 __________ 到冲突地区。",
        answers: [
            { option: "A", answer: "deploy", chinese_answer: "部署", chinese_romanization: "bùshǔ" },
            { option: "B", answer: "withdraw", chinese_answer: "撤回", chinese_romanization: "chèhuí" },
            { option: "C", answer: "recall", chinese_answer: "召回", chinese_romanization: "zhàohuí" },
            { option: "D", answer: "retire", chinese_answer: "退休", chinese_romanization: "tuìxiū" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'deploy' means move (troops or equipment) into position for military action." +
            "<br><br>" +
            "(B) 'withdraw' means remove or take away (something) from a particular place or position." +
            "<br><br>" +
            "(C) 'recall' means bring (a fact, event, or situation) back into one's mind; remember." +
            "<br><br>" +
            "(D) 'retire' means leave one's job and cease to work, typically upon reaching the normal age for leaving employment.",
        chinese_explanation: "(A) '部署' 一词意味着将（部队或装备）移动到军事行动的位置。" +
            "<br><br>" +
            "(B) '撤回' 意味着从特定地点或位置移除或带走（某物）。" +
            "<br><br>" +
            "(C) '召回' 意味着将（事实、事件或情况）重新带回到脑海中；记住。" +
            "<br><br>" +
            "(D) '退休' 意味着离开工作岗位并停止工作，通常是在达到正常退休年龄时。"
    },
    {
        id: 10,
        question: "They decided to __________ their defenses by building a high wall around the town.",
        chinese_question: "他们决定通过在城镇周围建造高墙来 __________ 他们的防御。",
        answers: [
            { option: "A", answer: "weaken", chinese_answer: "削弱", chinese_romanization: "xuēruò" },
            { option: "B", answer: "fortify", chinese_answer: "强化", chinese_romanization: "qiánghuà" },
            { option: "C", answer: "dismantle", chinese_answer: "拆除", chinese_romanization: "chāichú" },
            { option: "D", answer: "expose", chinese_answer: "暴露", chinese_romanization: "bàolu" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'fortify' means strengthen (a place) with defensive works so as to protect it against attack." +
            "<br><br>" +
            "(A) 'weaken' means make or become weaker in power, resolve, or physical strength." +
            "<br><br>" +
            "(C) 'dismantle' means take (a machine or structure) to pieces." +
            "<br><br>" +
            "(D) 'expose' means make (something) visible by uncovering it.",
        chinese_explanation: "(B) '强化' 一词意味着用防御工事加强（某地），以保护其免受攻击。" +
            "<br><br>" +
            "(A) '削弱' 意味着在力量、决心或体力上变弱或使变弱。" +
            "<br><br>" +
            "(C) '拆除' 意味着将（机器或结构）拆成零件。" +
            "<br><br>" +
            "(D) '暴露' 意味着通过揭开使（某物）显现。"
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
