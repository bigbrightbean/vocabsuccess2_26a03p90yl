// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "She tried to __________ her excitement when she heard the good news, taking deep breaths and smiling calmly.",
        chinese_question: "听到这个好消息时，她试图通过深呼吸和平静地微笑来__________自己的兴奋。",
        answers: [
            { option: "A", answer: "spill", chinese_answer: "溢出", chinese_romanization: "yìchū" },
            { option: "B", answer: "contain", chinese_answer: "控制", chinese_romanization: "kòngzhì" },
            { option: "C", answer: "exclude", chinese_answer: "排除", chinese_romanization: "páichú" },
            { option: "D", answer: "release", chinese_answer: "释放", chinese_romanization: "shìfàng" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'contain' means to have or hold (someone or something) within. Figuratively, it can mean to control or restrain (emotion or behavior)." + 
            "<br><br>" +
            "(A) 'spill' means to cause or allow (liquid) to flow over the edge of its container, especially unintentionally." + 
            "<br><br>" +
            "(C) 'exclude' means to deny (someone) access to or bar (someone) from a place, group, or privilege." + 
            "<br><br>" +
            "(D) 'release' means to allow or enable to escape from confinement; set free.",
        chinese_explanation: "(B) '控制' 一词意味着将（某人或某物）包含在内。比喻地，它可以表示控制或克制（情绪或行为）。" + 
            "<br><br>" +
            "(A) '溢出' 意味着使（液体）流出其容器的边缘，尤其是无意中。" + 
            "<br><br>" +
            "(C) '排除' 意味着拒绝（某人）进入或禁止（某人）进入某地、群体或特权。" + 
            "<br><br>" +
            "(D) '释放' 意味着允许或使从禁闭中逃脱；释放。"
    },
    {
        id: 2,
        question: "He began to __________ all his options before making a decision, weighing the pros and cons of each.",
        chinese_question: "在做决定之前，他开始权衡每个选项的利弊来__________所有选项。",
        answers: [
            { option: "A", answer: "dismiss", chinese_answer: "解雇", chinese_romanization: "jiěgù" },
            { option: "B", answer: "reject", chinese_answer: "拒绝", chinese_romanization: "jùjué" },
            { option: "C", answer: "consider", chinese_answer: "考虑", chinese_romanization: "kǎolǜ" },
            { option: "D", answer: "overlook", chinese_answer: "忽略", chinese_romanization: "hūlüè" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'consider' means to think carefully about (something), typically before making a decision." + 
            "<br><br>" +
            "(A) 'dismiss' means to order or allow to leave; send away." + 
            "<br><br>" +
            "(B) 'reject' means to dismiss as inadequate, unacceptable, or faulty." + 
            "<br><br>" +
            "(D) 'overlook' means to fail to notice (something).",
        chinese_explanation: "(C) '考虑' 一词意味着仔细思考（某事），通常是在做决定之前。" + 
            "<br><br>" +
            "(A) '解雇' 意味着命令或允许离开；遣散。" + 
            "<br><br>" +
            "(B) '拒绝' 意味着认为不合格、不可接受或有缺陷。" + 
            "<br><br>" +
            "(D) '忽略' 意味着未能注意到（某事）。"
    },
    {
        id: 3,
        question: "Under pressure, he decided to __________ his involvement in the scheme, finally admitting to everything.",
        chinese_question: "在压力下，他决定终于承认自己参与了这个计划__________。",
        answers: [
            { option: "A", answer: "deny", chinese_answer: "否认", chinese_romanization: "fǒurèn" },
            { option: "B", answer: "confess", chinese_answer: "承认", chinese_romanization: "chéngrèn" },
            { option: "C", answer: "conceal", chinese_answer: "隐瞒", chinese_romanization: "yǐnmán" },
            { option: "D", answer: "suppress", chinese_answer: "压制", chinese_romanization: "yāzhì" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'confess' means to admit or state that one has committed a crime or is at fault in some way." +
            "<br><br>" +
            "(A) 'deny' means to state that one refuses to admit the truth or existence of." +
            "<br><br>" +
            "(C) 'conceal' means to keep from sight; hide." +
            "<br><br>" +
            "(D) 'suppress' means to forcibly put an end to or restrain (an action or emotion).",
        chinese_explanation: "(B) '承认' 一词意味着承认或声明自己犯了罪或在某种程度上有过错。" +
            "<br><br>" +
            "(A) '否认' 意味着拒绝承认或存在的声明。" +
            "<br><br>" +
            "(C) '隐瞒' 意味着将某物隐藏起来。" +
            "<br><br>" +
            "(D) '压制' 意味着强行结束或抑制（某一行动或情感）。"
    },
    {
        id: 4,
        question: "After working hard for years, he felt he could now __________ through his career, enjoying the fruits of his labour.",
        chinese_question: "多年辛勤工作后，他觉得现在可以在事业上享受劳动成果__________。",
        answers: [
            { option: "A", answer: "struggle", chinese_answer: "挣扎", chinese_romanization: "zhēngzhá" },
            { option: "B", answer: "fail", chinese_answer: "失败", chinese_romanization: "shībài" },
            { option: "C", answer: "stumble", chinese_answer: "绊倒", chinese_romanization: "bàndǎo" },
            { option: "D", answer: "coast", chinese_answer: "顺利进行", chinese_romanization: "shùnlì jìnxíng" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'coast' means to move easily without using power. Figuratively, it can mean to progress with little effort." + 
            "<br><br>" +
            "(A) 'struggle' means to make forceful or violent efforts to get free of restraint or constriction." + 
            "<br><br>" +
            "(B) 'fail' means to be unsuccessful in achieving one's goal." + 
            "<br><br>" +
            "(C) 'stumble' means to trip or momentarily lose one's balance; almost fall.",
        chinese_explanation: "(D) '顺利进行' 一词意味着轻松地移动而无需使用动力。比喻地，它可以表示以很少的努力进步。" + 
            "<br><br>" +
            "(A) '挣扎' 意味着用力或暴力努力摆脱约束或束缚。" + 
            "<br><br>" +
            "(B) '失败' 意味着未能实现目标。" + 
            "<br><br>" +
            "(C) '绊倒' 意味着绊倒或暂时失去平衡；几乎摔倒。"
    },
    {
        id: 5,
        question: "He managed to __________ through the difficult conversation without any issues.",
        chinese_question: "他设法顺利地 __________ 过这次艰难的对话，没有遇到任何问题。",
        answers: [
            { option: "A", answer: "glide", chinese_answer: "滑行", chinese_romanization: "huáxíng" },
            { option: "B", answer: "struggle", chinese_answer: "挣扎", chinese_romanization: "zhēngzhá" },
            { option: "C", answer: "falter", chinese_answer: "犹豫", chinese_romanization: "yóuyù" },
            { option: "D", answer: "hesitate", chinese_answer: "迟疑", chinese_romanization: "chíyí" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'glide' metaphorically means to proceed or move smoothly without effort." + 
            "<br><br>" +
            "(B) 'struggle' means make forceful or violent efforts to get free of restraint or constriction." + 
            "<br><br>" +
            "(C) 'falter' means start to lose strength or momentum." + 
            "<br><br>" +
            "(D) 'hesitate' means pause before saying or doing something, especially through uncertainty.",
        chinese_explanation: "(A) '滑行' 比喻顺利地进行或移动而不费力。" + 
            "<br><br>" +
            "(B) '挣扎' 意味着做出强烈或剧烈的努力以摆脱束缚或限制。" + 
            "<br><br>" +
            "(C) '犹豫' 意味着开始失去力量或势头。" + 
            "<br><br>" +
            "(D) '迟疑' 意味着在说或做某事前暂停，特别是因为不确定。"
    },
    {
        id: 6,
        question: "The news of the scandal made the audience __________ in shock.",
        chinese_question: "丑闻的消息让观众 __________ 惊讶。",
        answers: [
            { option: "A", answer: "gasp", chinese_answer: "喘息", chinese_romanization: "chuǎnxī" },
            { option: "B", answer: "cheer", chinese_answer: "欢呼", chinese_romanization: "huānhū" },
            { option: "C", answer: "applaud", chinese_answer: "鼓掌", chinese_romanization: "gǔzhǎng" },
            { option: "D", answer: "sing", chinese_answer: "唱歌", chinese_romanization: "chànggē" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'gasp' metaphorically means to react with a sudden, short intake of breath, as if shocked or surprised." + 
            "<br><br>" +
            "(B) 'cheer' means shout for joy or in praise or encouragement." + 
            "<br><br>" +
            "(C) 'applaud' means show approval or praise by clapping." + 
            "<br><br>" +
            "(D) 'sing' means make musical sounds with the voice.",
        chinese_explanation: "(A) '喘息' 比喻用突然的短吸气反应，仿佛受到惊吓或惊讶。" + 
            "<br><br>" +
            "(B) '欢呼' 意味着因高兴或赞美或鼓励而喊叫。" + 
            "<br><br>" +
            "(C) '鼓掌' 意味着通过拍手表示赞同或赞美。" + 
            "<br><br>" +
            "(D) '唱歌' 意味着用声音发出音乐。"
    },
    {
        id: 7,
        question: "The magician's tricks continued to __________ the audience, leaving them wondering how he did it.",
        chinese_question: "魔术师的把戏继续__________观众，让他们想知道他是怎么做到的。",
        answers: [
            { option: "A", answer: "clarify", chinese_answer: "澄清", chinese_romanization: "chéngqīng" },
            { option: "B", answer: "bore", chinese_answer: "使厌烦", chinese_romanization: "shǐ yànfán" },
            { option: "C", answer: "mystify", chinese_answer: "迷惑", chinese_romanization: "míhuò" },
            { option: "D", answer: "explain", chinese_answer: "解释", chinese_romanization: "jiěshì" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'mystify' means utterly bewilder or perplex (someone)." + 
            "<br><br>" +
            "(A) 'clarify' means make (a statement or situation) less confused and more comprehensible." + 
            "<br><br>" +
            "(B) 'bore' means make (someone) feel weary and uninterested by tedious talk or dullness." + 
            "<br><br>" +
            "(D) 'explain' means make (an idea, situation, or problem) clear to someone by describing it in more detail or revealing relevant facts or ideas.",
        chinese_explanation: "(C) '迷惑' 一词意味着完全使（某人）困惑或迷惑。" + 
            "<br><br>" +
            "(A) '澄清' 意味着使（陈述或情况）不那么混乱，更易理解。" + 
            "<br><br>" +
            "(B) '使厌烦' 意味着通过乏味的谈话或无聊使（某人）感到疲倦和无兴趣。" + 
            "<br><br>" +
            "(D) '解释' 意味着通过更详细地描述或揭示相关事实或想法来使（想法、情况或问题）对某人清楚。"
    },
    {
        id: 8,
        question: "The scientist was able to __________ traces of the chemical in the water sample.",
        chinese_question: "科学家能够在水样中 __________ 化学物质的痕迹。",
        answers: [
            { option: "A", answer: "overlook", chinese_answer: "忽略", chinese_romanization: "hūlüè" },
            { option: "B", answer: "detect", chinese_answer: "检测", chinese_romanization: "jiǎncè" },
            { option: "C", answer: "miss", chinese_answer: "错过", chinese_romanization: "cuòguò" },
            { option: "D", answer: "contaminate", chinese_answer: "污染", chinese_romanization: "wūrǎn" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'detect' means discover or identify the presence or existence of." + 
            "<br><br>" +
            "(A) 'overlook' means fail to notice (something)." + 
            "<br><br>" +
            "(C) 'miss' means fail to notice, hear, or understand." + 
            "<br><br>" +
            "(D) 'contaminate' means make (something) impure by exposure to or addition of a poisonous or polluting substance.",
        chinese_explanation: "(B) '检测' 意味着发现或识别的存在或存在。" + 
            "<br><br>" +
            "(A) '忽略' 意味着未能注意到（某事）。" + 
            "<br><br>" +
            "(C) '错过' 意味着未能注意到、听到或理解。" + 
            "<br><br>" +
            "(D) '污染' 意味着通过暴露或加入有毒或污染物质使（某物）变得不纯。"
    },
    {
        id: 9,
        question: "The new law would __________ people of their basic rights, limiting their freedom of speech and movement.",
        chinese_question: "新法律将剥夺人们的言论自由和行动自由__________。",
        answers: [
            { option: "A", answer: "deprive", chinese_answer: "剥夺", chinese_romanization: "bōduó" },
            { option: "B", answer: "grant", chinese_answer: "授予", chinese_romanization: "shòuyǔ" },
            { option: "C", answer: "provide", chinese_answer: "提供", chinese_romanization: "tígōng" },
            { option: "D", answer: "enhance", chinese_answer: "增强", chinese_romanization: "zēngqiáng" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'deprive' means deny (a person or place) the possession or use of something." + 
            "<br><br>" +
            "(B) 'grant' means agree to give or allow (something requested) to." + 
            "<br><br>" +
            "(C) 'provide' means make available for use; supply." + 
            "<br><br>" +
            "(D) 'enhance' means intensify, increase, or further improve the quality, value, or extent of.",
        chinese_explanation: "(A) '剥夺' 意味着否认（某人或某地）拥有或使用某物。" + 
            "<br><br>" +
            "(B) '授予' 意味着同意给予或允许（所请求的东西）。" + 
            "<br><br>" +
            "(C) '提供' 意味着可供使用；供应。" + 
            "<br><br>" +
            "(D) '增强' 意味着加强、增加或进一步提高质量、价值或程度。"
    },
    {
        id: 10,
        question: "He __________ countless hours to perfecting his craft, practicing day and night.",
        chinese_question: "他日夜练习__________无数小时来完善他的技艺。",
        answers: [
            { option: "A", answer: "neglected", chinese_answer: "忽略", chinese_romanization: "hūlüè" },
            { option: "B", answer: "wasted", chinese_answer: "浪费", chinese_romanization: "làngfèi" },
            { option: "C", answer: "dedicated", chinese_answer: "奉献", chinese_romanization: "fèngxiàn" },
            { option: "D", answer: "abandoned", chinese_answer: "放弃", chinese_romanization: "fàngqì" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'dedicated' metaphorically means to devote wholly and earnestly, as to some person or purpose." + 
            "<br><br>" +
            "(A) 'neglected' means fail to care for properly." + 
            "<br><br>" +
            "(B) 'wasted' means use or expend carelessly, extravagantly, or to no purpose." + 
            "<br><br>" +
            "(D) 'abandoned' means give up completely (a course of action, a practice, or a way of thinking).",
        chinese_explanation: "(C) '奉献' 比喻全心全意地奉献给某人或某事。" + 
            "<br><br>" +
            "(A) '忽略' 意味着未能妥善照顾。" + 
            "<br><br>" +
            "(B) '浪费' 意味着不小心地、奢侈地或无目的地使用或消耗。" + 
            "<br><br>" +
            "(D) '放弃' 意味着完全放弃（某个行动、做法或思维方式）。"
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
