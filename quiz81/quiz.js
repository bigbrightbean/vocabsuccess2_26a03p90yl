// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "The two paths began to __________ sharply, leading hikers in completely different directions.",
        chinese_question: "两条小路开始 __________，把徒步者引向完全不同的方向。",
        answers: [
            { option: "A", answer: "converge", chinese_answer: "汇合", chinese_romanization: "huìhé" },
            { option: "B", answer: "unite", chinese_answer: "联合", chinese_romanization: "liánhé" },
            { option: "C", answer: "diverge", chinese_answer: "分岔", chinese_romanization: "fēnchà" },
            { option: "D", answer: "merge", chinese_answer: "合并", chinese_romanization: "hébìng" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'diverge' means (of a road, route, or line) separate from another route and go in a different direction." +
            "<br><br>" +
            "(A) 'converge' means (of lines) tend to meet at a point." +
            "<br><br>" +
            "(B) 'unite' means come or bring together for a common purpose or action." +
            "<br><br>" +
            "(D) 'merge' means combine or cause to combine to form a single entity.",
        chinese_explanation: "(C) '分岔' 意味着（道路、路线或线条）从另一条路线分离并朝不同方向行进。" +
            "<br><br>" +
            "(A) '汇合' 意味着（线条）趋向于在一点相遇。" +
            "<br><br>" +
            "(B) '联合' 意味着为了共同的目的或行动走到一起或使走到一起。" +
            "<br><br>" +
            "(D) '合并' 意味着结合或促使结合以形成单一实体。"
    },
    {
        id: 2,
        question: "Despite numerous setbacks, she decided to __________ in her efforts to complete the marathon.",
        chinese_question: "尽管遇到许多挫折，她还是决定 __________ 努力完成马拉松。",
        answers: [
            { option: "A", answer: "quit", chinese_answer: "放弃", chinese_romanization: "fàngqì" },
            { option: "B", answer: "surrender", chinese_answer: "投降", chinese_romanization: "tóuxiáng" },
            { option: "C", answer: "falter", chinese_answer: "踌躇", chinese_romanization: "chóuchú" },
            { option: "D", answer: "persevere", chinese_answer: "坚持", chinese_romanization: "jiānchí" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'persevere' means continue in a course of action even in the face of difficulty or with little or no prospect of success." +
            "<br><br>" +
            "(A) 'quit' means leave (a place), usually permanently." +
            "<br><br>" +
            "(B) 'surrender' means cease resistance to an enemy or opponent and submit to their authority." +
            "<br><br>" +
            "(C) 'falter' means start to lose strength or momentum.",
        chinese_explanation: "(D) '坚持' 意味着即使面对困难或几乎没有成功的希望，也要继续采取行动。" +
            "<br><br>" +
            "(A) '放弃' 意味着（通常是永久地）离开（一个地方）。" +
            "<br><br>" +
            "(B) '投降' 意味着停止对敌人或对手的抵抗并服从他们的权威。" +
            "<br><br>" +
            "(C) '踌躇' 意味着开始失去力量或势头。"
    },
    {
        id: 3,
        question: "She began to __________ the long, cold winters, dreaming of moving to a warmer climate.",
        chinese_question: "她开始 __________ 漫长、寒冷的冬天，梦想着搬到温暖的气候中去。",
        answers: [
            { option: "A", answer: "enjoy", chinese_answer: "享受", chinese_romanization: "xiǎngshòu" },
            { option: "B", answer: "tolerate", chinese_answer: "容忍", chinese_romanization: "róngrěn" },
            { option: "C", answer: "embrace", chinese_answer: "拥抱", chinese_romanization: "yǒngbào" },
            { option: "D", answer: "loathe", chinese_answer: "厌恶", chinese_romanization: "yànwù" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'loathe' means feel intense dislike or disgust for." +
            "<br><br>" +
            "(A) 'enjoy' means take delight or pleasure in (an activity or occasion)." +
            "<br><br>" +
            "(B) 'tolerate' means allow the existence, occurrence, or practice of (something that one does not necessarily like or agree with) without interference." +
            "<br><br>" +
            "(C) 'embrace' means accept or support (a belief, theory, or change) willingly and enthusiastically.",
        chinese_explanation: "(D) '厌恶' 意味着感到强烈的不喜欢或厌恶。" +
            "<br><br>" +
            "(A) '享受' 意味着在（活动或场合）中获得乐趣或愉快。" +
            "<br><br>" +
            "(B) '容忍' 意味着在不干扰的情况下允许（某事）的存在、发生或实践（某事物）。" +
            "<br><br>" +
            "(C) '拥抱' 意味着接受或支持（想法、建议、提议等）。"
    },
    {
        id: 4,
        question: "As summer came to an end, the long, sunny days began to __________, giving way to the shorter, cooler days of autumn.",
        chinese_question: "随着夏天的结束，漫长的晴天开始 __________，让位于秋天较短、较凉的日子。",
        answers: [
            { option: "A", answer: "wax", chinese_answer: "增加", chinese_romanization: "zēngjiā" },
            { option: "B", answer: "wane", chinese_answer: "减少", chinese_romanization: "jiǎnshǎo" },
            { option: "C", answer: "increase", chinese_answer: "增长", chinese_romanization: "zēngzhǎng" },
            { option: "D", answer: "grow", chinese_answer: "增强", chinese_romanization: "zēngqiáng" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'wane' means (of a state or feeling) decrease in vigor, power, or extent; become weaker." +
            "<br><br>" +
            "(A) 'wax' means (of the moon between new and full) have a progressively larger part of its visible surface illuminated, increasing its apparent size." +
            "<br><br>" +
            "(C) 'increase' means become or make greater in size, amount, intensity, or degree." +
            "<br><br>" +
            "(D) 'grow' means undergo natural development by increasing in size and changing physically.",
        chinese_explanation: "(B) '减少' 意味着（状态或感觉）在活力、力量或程度上减少；变弱。" +
            "<br><br>" +
            "(A) '增加' 意味着在新月和满月之间越来越多的可见表面被照亮，增加其明显的大小。" +
            "<br><br>" +
            "(C) '增长' 意味着在大小、数量、强度或程度上变大或使变大。" +
            "<br><br>" +
            "(D) '增强' 意味着通过增加大小和物理变化自然发展。"
    },
    {
        id: 5,
        question: "After hours of debate, he finally decided to __________ to the demands of his colleagues to keep the peace.",
        chinese_question: "经过几个小时的争论，他终于决定 __________ 同事的要求以保持和平。",
        answers: [
            { option: "A", answer: "yield", chinese_answer: "让步", chinese_romanization: "ràngbù" },
            { option: "B", answer: "resist", chinese_answer: "抵抗", chinese_romanization: "dǐkàng" },
            { option: "C", answer: "defy", chinese_answer: "违抗", chinese_romanization: "wéikàng" },
            { option: "D", answer: "confront", chinese_answer: "面对", chinese_romanization: "miànduì" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'yield' means give way to arguments, demands, or pressure." +
            "<br><br>" +
            "(B) 'resist' means withstand the action or effect of." +
            "<br><br>" +
            "(C) 'defy' means openly resist or refuse to obey." +
            "<br><br>" +
            "(D) 'confront' means meet (someone) face to face with hostile or argumentative intent.",
        chinese_explanation: "(A) '让步' 意味着让步于争论、要求或压力。" +
            "<br><br>" +
            "(B) '抵抗' 意味着经受住……的作用或影响。" +
            "<br><br>" +
            "(C) '违抗' 意味着公然反抗或拒绝服从。" +
            "<br><br>" +
            "(D) '面对' 意味着以敌对或争论的意图面对（某人）。"
    },
    {
        id: 6,
        question: "To improve his health, he decided to __________ from eating junk food and drinking sugary beverages.",
        chinese_question: "为了改善健康，他决定 __________ 吃垃圾食品和喝含糖饮料。",
        answers: [
            { option: "A", answer: "indulge", chinese_answer: "沉迷", chinese_romanization: "chénmí" },
            { option: "B", answer: "abstain", chinese_answer: "戒除", chinese_romanization: "jièchú" },
            { option: "C", answer: "consume", chinese_answer: "消费", chinese_romanization: "xiāofèi" },
            { option: "D", answer: "devour", chinese_answer: "狼吞虎咽", chinese_romanization: "lángtūnhǔyàn" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'abstain' means restrain oneself from doing or enjoying something." +
            "<br><br>" +
            "(A) 'indulge' means allow oneself to enjoy the pleasure of." +
            "<br><br>" +
            "(C) 'consume' means eat, drink, or ingest (food or drink)." +
            "<br><br>" +
            "(D) 'devour' means eat (food or prey) hungrily or quickly.",
        chinese_explanation: "(B) '戒除' 意味着克制自己不做或不享受某事。" +
            "<br><br>" +
            "(A) '沉迷' 意味着允许自己享受……的乐趣。" +
            "<br><br>" +
            "(C) '消费' 意味着吃、喝或摄取（食物或饮料）。" +
            "<br><br>" +
            "(D) '狼吞虎咽' 意味着饥饿地或迅速地吃（食物或猎物）。"
    },
    {
        id: 7,
        question: "The kidnappers tried to __________ the businessman into paying a ransom by threatening his family.",
        chinese_question: "绑架者试图通过威胁他的家人来 __________ 商人支付赎金。",
        answers: [
            { option: "A", answer: "persuade", chinese_answer: "说服", chinese_romanization: "shuōfú" },
            { option: "B", answer: "request", chinese_answer: "请求", chinese_romanization: "qǐngqiú" },
            { option: "C", answer: "invite", chinese_answer: "邀请", chinese_romanization: "yāoqǐng" },
            { option: "D", answer: "coerce", chinese_answer: "强迫", chinese_romanization: "qiǎngpò" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'coerce' means persuade (an unwilling person) to do something by using force or threats." +
            "<br><br>" +
            "(A) 'persuade' means cause (someone) to do something through reasoning or argument." +
            "<br><br>" +
            "(B) 'request' means politely or formally ask for." +
            "<br><br>" +
            "(C) 'invite' means make a polite, formal, or friendly request to (someone) to go somewhere or to do something.",
        chinese_explanation: "(D) '强迫' 意味着通过使用武力或威胁来劝说（不愿意的人）做某事。" +
            "<br><br>" +
            "(A) '说服' 意味着通过推理或争论使（某人）做某事。" +
            "<br><br>" +
            "(B) '请求' 意味着礼貌地或正式地请求。" +
            "<br><br>" +
            "(C) '邀请' 意味着礼貌地、正式地或友好地请求（某人）去某地或做某事。"
    },
    {
        id: 8,
        question: "She would often __________ the loss of her childhood home, recalling the happy memories with a sense of sorrow.",
        chinese_question: "她经常 __________ 失去童年时的家，回忆起那些幸福的记忆时带着一丝悲伤。",
        answers: [
            { option: "A", answer: "celebrate", chinese_answer: "庆祝", chinese_romanization: "qìngzhù" },
            { option: "B", answer: "cherish", chinese_answer: "珍惜", chinese_romanization: "zhēnxī" },
            { option: "C", answer: "lament", chinese_answer: "哀叹", chinese_romanization: "āitàn" },
            { option: "D", answer: "rejoice", chinese_answer: "欢喜", chinese_romanization: "huānxǐ" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'lament' means express passionate grief about." +
            "<br><br>" +
            "(A) 'celebrate' means acknowledge (a significant or happy day or event) with a social gathering or enjoyable activity." +
            "<br><br>" +
            "(B) 'cherish' means protect and care for (someone) lovingly." +
            "<br><br>" +
            "(D) 'rejoice' means feel or show great joy or delight.",
        chinese_explanation: "(C) '哀叹' 意味着表达强烈的悲伤。" +
            "<br><br>" +
            "(A) '庆祝' 意味着通过社交聚会或愉快的活动来承认（重要或快乐的日子或事件）。" +
            "<br><br>" +
            "(B) '珍惜' 意味着珍爱地保护和照顾（某人）。" +
            "<br><br>" +
            "(D) '欢喜' 意味着感到或表现出极大的快乐或喜悦。"
    },
    {
        id: 9,
        question: "The mentor aimed to __________ wisdom and experience to his apprentice, hoping to prepare him for the challenges ahead.",
        chinese_question: "导师希望 __________ 智慧和经验给他的学徒，希望为他即将面临的挑战做好准备。",
        answers: [
            { option: "A", answer: "withhold", chinese_answer: "隐瞒", chinese_romanization: "yǐnmán" },
            { option: "B", answer: "impart", chinese_answer: "传授", chinese_romanization: "chuánshòu" },
            { option: "C", answer: "conceal", chinese_answer: "隐藏", chinese_romanization: "yǐncáng" },
            { option: "D", answer: "remove", chinese_answer: "移除", chinese_romanization: "yíchú" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'impart' means make (information) known; communicate." +
            "<br><br>" +
            "(A) 'withhold' means refuse to give (something that is due to or is desired by another)." +
            "<br><br>" +
            "(C) 'conceal' means keep from sight; hide." +
            "<br><br>" +
            "(D) 'remove' means take (something) away or off from the position occupied.",
        chinese_explanation: "(B) '传授' 意味着使（信息）为人所知；沟通。" +
            "<br><br>" +
            "(A) '隐瞒' 意味着拒绝给予（应由或希望得到的东西）。" +
            "<br><br>" +
            "(C) '隐藏' 意味着使看不见；隐藏。" +
            "<br><br>" +
            "(D) '移除' 意味着从占据的位置上拿走或移开。"
    },
    {
        id: 10,
        question: "The inspirational talk served to __________ a new sense of purpose in the audience, motivating them to take action.",
        chinese_question: "励志演讲 __________ 了听众新的目标感，激励他们采取行动。",
        answers: [
            { option: "A", answer: "extinguish", chinese_answer: "熄灭", chinese_romanization: "xīmiè" },
            { option: "B", answer: "kindle", chinese_answer: "点燃", chinese_romanization: "diǎnrán" },
            { option: "C", answer: "suppress", chinese_answer: "抑制", chinese_romanization: "yìzhì" },
            { option: "D", answer: "dampen", chinese_answer: "减弱", chinese_romanization: "jiǎnruò" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'kindle' means light or set on fire; arouse or inspire (an emotion or feeling)." +
            "<br><br>" +
            "(A) 'extinguish' means cause (a fire or light) to cease to burn or shine." +
            "<br><br>" +
            "(C) 'suppress' means forcibly put an end to." +
            "<br><br>" +
            "(D) 'dampen' means make less strong or intense.",
        chinese_explanation: "(B) '点燃' 意味着点火或点燃；唤起或激发（情感或感觉）。" +
            "<br><br>" +
            "(A) '熄灭' 意味着使（火或光）停止燃烧或发光。" +
            "<br><br>" +
            "(C) '抑制' 意味着强行结束。" +
            "<br><br>" +
            "(D) '减弱' 意味着使强度或强度减弱。"
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
