// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "She needed some time to __________ the news before responding.",
        chinese_question: "她需要一些时间来 __________ 这些消息，然后再作出回应。",
        answers: [
            { option: "A", answer: "digest", chinese_answer: "理解", chinese_romanization: "lǐjiě" },
            { option: "B", answer: "reject", chinese_answer: "拒绝", chinese_romanization: "jùjué" },
            { option: "C", answer: "forget", chinese_answer: "忘记", chinese_romanization: "wàngjì" },
            { option: "D", answer: "overlook", chinese_answer: "忽略", chinese_romanization: "hūlüè" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'digest' metaphorically means to think over and mentally process information." +
            "<br><br>" +
            "(B) 'reject' means refuse to accept, consider, or submit to." +
            "<br><br>" +
            "(C) 'forget' means fail to remember." +
            "<br><br>" +
            "(D) 'overlook' means fail to notice something.",
        chinese_explanation: "(A) '理解' 比喻思考并处理信息。" +
            "<br><br>" +
            "(B) '拒绝' 意味着拒绝接受、考虑或提交。" +
            "<br><br>" +
            "(C) '忘记' 意味着未能记住。" +
            "<br><br>" +
            "(D) '忽略' 意味着未能注意到某事。"
    },
    {
        id: 2,
        question: "He was determined to __________ his title in the upcoming championship.",
        chinese_question: "他决心在即将到来的锦标赛中 __________ 他的头衔。",
        answers: [
            { option: "A", answer: "defend", chinese_answer: "捍卫", chinese_romanization: "hànwèi" },
            { option: "B", answer: "surrender", chinese_answer: "投降", chinese_romanization: "tóuxiáng" },
            { option: "C", answer: "abandon", chinese_answer: "放弃", chinese_romanization: "fàngqì" },
            { option: "D", answer: "relinquish", chinese_answer: "放弃", chinese_romanization: "fàngqì" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'defend' means resist an attack made on (someone or something); protect from harm or danger." +
            "<br><br>" +
            "(B) 'surrender' means stop resisting an enemy or opponent and submit to their authority." +
            "<br><br>" +
            "(C) 'abandon' means give up completely (a course of action, a practice, or a way of thinking)." +
            "<br><br>" +
            "(D) 'relinquish' means voluntarily cease to keep or claim; give up.",
        chinese_explanation: "(A) '捍卫' 意味着抵抗对（某人或某物）的攻击；保护免受伤害或危险。" +
            "<br><br>" +
            "(B) '投降' 意味着停止抵抗敌人或对手并服从他们的权威。" +
            "<br><br>" +
            "(C) '放弃' 意味着完全放弃（行动、做法或思维方式）。" +
            "<br><br>" +
            "(D) '放弃' 意味着自愿停止保留或声称；放弃。"
    },
    {
        id: 3,
        question: "He always tried to __________ conflict by staying neutral in arguments.",
        chinese_question: "他总是试图通过保持中立来__________冲突。",
        answers: [
            { option: "A", answer: "seek", chinese_answer: "寻找", chinese_romanization: "xúnzhǎo" },
            { option: "B", answer: "avoid", chinese_answer: "避免", chinese_romanization: "bìmiǎn" },
            { option: "C", answer: "enter", chinese_answer: "进入", chinese_romanization: "jìnrù" },
            { option: "D", answer: "embrace", chinese_answer: "拥抱", chinese_romanization: "yōngbào" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'avoid' means to keep away from or stop oneself from doing (something). Figuratively, it can mean to steer clear of trouble or difficult situations." +
            "<br><br>" +
            "(A) 'seek' means to attempt to find (something)." +
            "<br><br>" +
            "(C) 'enter' means to come or go into (a place)." +
            "<br><br>" +
            "(D) 'embrace' means to hold (someone) closely in one's arms, especially as a sign of affection.",
        chinese_explanation: "(B) '避免'一词意味着避开或阻止自己做（某事）。比喻地，它可以表示避免麻烦或困难的情况。" +
            "<br><br>" +
            "(A) '寻找' 意味着试图找到（某物）。" +
            "<br><br>" +
            "(C) '进入' 意味着进入（某地）。" +
            "<br><br>" +
            "(D) '拥抱' 意味着亲密地抱住（某人），尤其是作为爱意的标志。"
    },
    {
        id: 4,
        question: "Her positive energy seemed to __________ everyone around her, drawing them in with her enthusiasm and warmth.",
        chinese_question: "她的积极能量和热情温暖似乎__________了周围的每个人。",
        answers: [
            { option: "A", answer: "avoid", chinese_answer: "避免", chinese_romanization: "bìmiǎn" },
            { option: "B", answer: "deter", chinese_answer: "阻止", chinese_romanization: "zǔzhǐ" },
            { option: "C", answer: "attract", chinese_answer: "吸引", chinese_romanization: "xīyǐn" },
            { option: "D", answer: "repel", chinese_answer: "排斥", chinese_romanization: "páichì" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'attract' means to cause to come to a place or participate in a venture by offering something of interest or advantage. Figuratively, it can mean to draw or pull someone towards oneself emotionally or mentally." +
            "<br><br>" +
            "(A) 'avoid' means to keep away from or stop oneself from doing (something)." +
            "<br><br>" +
            "(B) 'deter' means to discourage (someone) from doing something by instilling doubt or fear of the consequences." +
            "<br><br>" +
            "(D) 'repel' means to drive or force (an attack or attacker) back or away.",
        chinese_explanation: "(C) '吸引'一词意味着通过提供有趣或有利的事物使其来到某地或参与某项事业。比喻地，它可以表示情感上或心理上吸引某人。" +
            "<br><br>" +
            "(A) '避免' 意味着避开或阻止自己做（某事）。" +
            "<br><br>" +
            "(B) '阻止' 意味着通过灌输对后果的怀疑或恐惧来阻止（某人）做某事。" +
            "<br><br>" +
            "(D) '排斥' 意味着驱赶或逼退（攻击或攻击者）。"
    },
    {
        id: 5,
        question: "She tried to __________ her manager with her concerns about the project.",
        chinese_question: "她试图__________她的经理，表达她对项目的担忧。",
        answers: [
            { option: "A", answer: "avoid", chinese_answer: "避免", chinese_romanization: "bìmiǎn" },
            { option: "B", answer: "approach", chinese_answer: "接触", chinese_romanization: "jiēchù" },
            { option: "C", answer: "withdraw", chinese_answer: "撤回", chinese_romanization: "chèhuí" },
            { option: "D", answer: "dismiss", chinese_answer: "解雇", chinese_romanization: "jiěgù" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'approach' means to come near or nearer to (someone or something) in distance or time. Figuratively, it can mean to address or speak to someone about something." +
            "<br><br>" +
            "(A) 'avoid' means to keep away from or stop oneself from doing (something)." +
            "<br><br>" +
            "(C) 'withdraw' means to remove or take away something from a particular place or position." +
            "<br><br>" +
            "(D) 'dismiss' means to order or allow to leave; send away.",
        chinese_explanation: "(B) '接触'一词意味着在距离或时间上接近或接近（某人或某物）。比喻地，它可以表示与某人谈论某事。" +
            "<br><br>" +
            "(A) '避免' 意味着避开或阻止自己做（某事）。" +
            "<br><br>" +
            "(C) '撤回' 意味着从特定位置移除或拿走某物。" +
            "<br><br>" +
            "(D) '解雇' 意味着命令或允许离开；遣散。"
    },
    {
        id: 6,
        question: "Despite the challenges, she continued to __________ to her dreams, refusing to let go even in difficult times.",
        chinese_question: "尽管有挑战，她仍然在困难时期坚持不懈__________自己的梦想。",
        answers: [
            { option: "A", answer: "cling", chinese_answer: "坚持", chinese_romanization: "jiānchí" },
            { option: "B", answer: "abandon", chinese_answer: "放弃", chinese_romanization: "fàngqì" },
            { option: "C", answer: "doubt", chinese_answer: "怀疑", chinese_romanization: "huáiyí" },
            { option: "D", answer: "dismiss", chinese_answer: "忽视", chinese_romanization: "hūshì" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'cling' metaphorically means to remain persistently attached to something." +
            "<br><br>" +
            "(B) 'abandon' means give up completely (a course of action, a practice, or a way of thinking)." +
            "<br><br>" +
            "(C) 'doubt' means feel uncertain about." +
            "<br><br>" +
            "(D) 'dismiss' means decide that something or someone is not important and not worth considering.",
        chinese_explanation: "(A) '坚持' 比喻持续执着于某事。" +
            "<br><br>" +
            "(B) '放弃' 意味着完全放弃（一种行动、一种做法或一种思维方式）。" +
            "<br><br>" +
            "(C) '怀疑' 意味着对某事感到不确定。" +
            "<br><br>" +
            "(D) '忽视' 意味着认为某事或某人不重要且不值得考虑。"
    },
    {
        id: 7,
        question: "The book's vivid descriptions __________ the reader's imagination, painting pictures in their minds with every word.",
        chinese_question: "这本书生动的描述通过每个词在读者的脑海中描绘出画面__________了读者的想象力。",
        answers: [
            { option: "A", answer: "free", chinese_answer: "解放", chinese_romanization: "jiěfàng" },
            { option: "B", answer: "stifle", chinese_answer: "压制", chinese_romanization: "yāzhì" },
            { option: "C", answer: "capture", chinese_answer: "吸引", chinese_romanization: "xīyǐn" },
            { option: "D", answer: "release", chinese_answer: "释放", chinese_romanization: "shìfàng" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'capture' metaphorically means to attract and hold the interest and attention of." + 
            "<br><br>" +
            "(A) 'free' means not under the control or in the power of another; able to act or be done as one wishes." + 
            "<br><br>" +
            "(B) 'stifle' means make (someone) unable to breathe properly; suffocate, or figuratively, to suppress or restrain." + 
            "<br><br>" +
            "(D) 'release' means allow or enable to escape from confinement; set free.",
        chinese_explanation: "(C) '吸引' 比喻吸引并保持兴趣和注意力。" + 
            "<br><br>" +
            "(A) '解放' 意味着不受他人控制或权力控制；能够按照自己的意愿行事或被完成。" + 
            "<br><br>" +
            "(B) '压制' 意味着使（某人）无法正常呼吸；窒息，或比喻为压制或限制。" + 
            "<br><br>" +
            "(D) '释放' 意味着允许或使从拘禁中逃脱；释放。"
    },
    {
        id: 8,
        question: "She needs time to __________ all the information she received during the seminar, by going over her notes carefully.",
        chinese_question: "她需要时间来仔细查看笔记__________在研讨会上获得的所有信息。",
        answers: [
            { option: "A", answer: "absorb", chinese_answer: "吸收", chinese_romanization: "xīshōu" },
            { option: "B", answer: "reject", chinese_answer: "拒绝", chinese_romanization: "jùjué" },
            { option: "C", answer: "forget", chinese_answer: "忘记", chinese_romanization: "wàngjì" },
            { option: "D", answer: "dismiss", chinese_answer: "忽视", chinese_romanization: "hūshì" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'absorb' metaphorically means to take in and fully understand information." + 
            "<br><br>" +
            "(B) 'reject' means dismiss as inadequate, unacceptable, or faulty." + 
            "<br><br>" +
            "(C) 'forget' means fail to remember." + 
            "<br><br>" +
            "(D) 'dismiss' means decide that something or someone is not important and not worth considering.",
        chinese_explanation: "(A) '吸收' 比喻完全理解信息。" + 
            "<br><br>" +
            "(B) '拒绝' 意味着认为不合适、不接受或有缺陷而予以驳回。" + 
            "<br><br>" +
            "(C) '忘记' 意味着未能记住。" + 
            "<br><br>" +
            "(D) '忽视' 意味着认为某事或某人不重要且不值得考虑。"
    },
    {
        id: 9,
        question: "Her ideas often __________ on the unconventional, pushing the limits of traditional thinking.",
        chinese_question: "她的想法常常 __________ 于非常规，推动了传统思维的极限。",
        answers: [
            { option: "A", answer: "conform", chinese_answer: "符合", chinese_romanization: "fúhé" },
            { option: "B", answer: "remain", chinese_answer: "保持", chinese_romanization: "bǎochí" },
            { option: "C", answer: "adhere", chinese_answer: "坚持", chinese_romanization: "jiānchí" },
            { option: "D", answer: "border", chinese_answer: "接近", chinese_romanization: "jiējìn" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'border' metaphorically means to be close to or on the verge of something." +
            "<br><br>" +
            "(A) 'conform' means comply with rules, standards, or laws." +
            "<br><br>" +
            "(B) 'remain' means continue to exist, especially after other similar or related people or things have ceased to exist." +
            "<br><br>" +
            "(C) 'adhere' means stick fast to (a surface or substance) or believe in and follow the practices of.",
        chinese_explanation: "(D) '接近' 比喻靠近或濒临某事物。" +
            "<br><br>" +
            "(A) '符合' 意味着遵守规则、标准或法律。" +
            "<br><br>" +
            "(B) '保持' 意味着继续存在，特别是在其他类似或相关的人或事物已不再存在之后。" +
            "<br><br>" +
            "(C) '坚持' 意味着紧贴（表面或物质）或相信并遵循做法。"
    },
    {
        id: 10,
        question: "His passion for the project was enough to __________ even the most skeptical team members.",
        chinese_question: "他对项目的热情足以__________即使是最怀疑的团队成员。",
        answers: [
            { option: "A", answer: "discourage", chinese_answer: "劝阻", chinese_romanization: "quànzǔ" },
            { option: "B", answer: "convince", chinese_answer: "说服", chinese_romanization: "shuōfú" },
            { option: "C", answer: "confuse", chinese_answer: "使困惑", chinese_romanization: "shǐ kùnhuò" },
            { option: "D", answer: "dissuade", chinese_answer: "劝阻", chinese_romanization: "quànzǔ" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'convince' means to cause (someone) to believe firmly in the truth of something. Figuratively, it can mean to win over or persuade others." + 
            "<br><br>" +
            "(A) 'discourage' means cause (someone) to lose confidence or enthusiasm." + 
            "<br><br>" +
            "(C) 'confuse' means make (someone) bewildered or perplexed." + 
            "<br><br>" +
            "(D) 'dissuade' means persuade (someone) not to take a particular course of action.",
        chinese_explanation: "(B) '说服' 一词意味着使（某人）坚信某事的真实性。比喻地，它可以表示赢得或说服他人。" + 
            "<br><br>" +
            "(A) '劝阻' 意味着使（某人）失去信心或热情。" + 
            "<br><br>" +
            "(C) '使困惑' 意味着使（某人）困惑或迷惑。" + 
            "<br><br>" +
            "(D) '劝阻' 意味着劝阻（某人）不采取特定行动。"
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
