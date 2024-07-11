// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "His sudden outburst was __________ to stress at work.",
        chinese_question: "他突然的爆发被__________工作压力。",
        answers: [
            { option: "A", answer: "attributed", chinese_answer: "归因于", chinese_romanization: "guīyīn yú" },
            { option: "B", answer: "forgotten", chinese_answer: "忘记", chinese_romanization: "wàngjì" },
            { option: "C", answer: "denied", chinese_answer: "否认", chinese_romanization: "fǒurèn" },
            { option: "D", answer: "celebrated", chinese_answer: "庆祝", chinese_romanization: "qìngzhù" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'attributed' metaphorically means regarded as caused by something." +
            "<br><br>" +
            "(B) 'forgotten' means to fail to remember." +
            "<br><br>" +
            "(C) 'denied' means to state that one refuses to admit the truth or existence of." +
            "<br><br>" +
            "(D) 'celebrated' means acknowledged with a social gathering or enjoyable activity.",
        chinese_explanation: "(A) '归因于' 比喻被认为是由某事引起的。" +
            "<br><br>" +
            "(B) '忘记' 意味着未能记住。" +
            "<br><br>" +
            "(C) '否认' 意味着声明拒绝承认真相或存在。" +
            "<br><br>" +
            "(D) '庆祝' 意味着通过社交聚会或愉快的活动来承认。"
    },
    {
        id: 2,
        question: "She tried to __________ the new information as quickly as possible, reviewing her notes and discussing the material with classmates.",
        chinese_question: "她尽可能快地 __________ 新信息，复习笔记并与同学讨论材料。",
        answers: [
            { option: "A", answer: "assimilate", chinese_answer: "吸收", chinese_romanization: "xīshōu" },
            { option: "B", answer: "disregard", chinese_answer: "忽视", chinese_romanization: "hūshì" },
            { option: "C", answer: "forget", chinese_answer: "忘记", chinese_romanization: "wàngjì" },
            { option: "D", answer: "confuse", chinese_answer: "混淆", chinese_romanization: "hùnxiáo" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'assimilate' metaphorically means to absorb and integrate into one's knowledge or understanding." +
            "<br><br>" +
            "(B) 'disregard' means to pay no attention to; ignore." +
            "<br><br>" +
            "(C) 'forget' means to fail to remember." +
            "<br><br>" +
            "(D) 'confuse' means to make (someone) bewildered or perplexed.",
        chinese_explanation: "(A) '吸收' 比喻吸收和融入自己的知识或理解。" +
            "<br><br>" +
            "(B) '忽视' 意味着不注意；忽略。" +
            "<br><br>" +
            "(C) '忘记' 意味着未能记住。" +
            "<br><br>" +
            "(D) '混淆' 意味着使（某人）困惑或迷惑。"
    },
    {
        id: 3,
        question: "The reporters __________ the politician with questions after the scandal broke.",
        chinese_question: "丑闻曝光后，记者们 __________ 政治家提出问题。",
        answers: [
            { option: "A", answer: "ignored", chinese_answer: "忽视", chinese_romanization: "hūshì" },
            { option: "B", answer: "praised", chinese_answer: "赞扬", chinese_romanization: "zànyáng" },
            { option: "C", answer: "admonished", chinese_answer: "警告", chinese_romanization: "jǐnggào" },
            { option: "D", answer: "assailed", chinese_answer: "攻击", chinese_romanization: "gōngjí" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'assailed' means to attack vigorously or violently; assault." +
            "<br><br>" +
            "(A) 'ignored' means to refuse to take notice of or acknowledge." +
            "<br><br>" +
            "(B) 'praised' means expressed approval or admiration of." +
            "<br><br>" +
            "(C) 'admonished' means warned or reprimanded someone firmly.",
        chinese_explanation: "(D) '攻击' 意味着猛烈或暴力地攻击；袭击。" +
            "<br><br>" +
            "(A) '忽视' 意味着拒绝注意或承认。" +
            "<br><br>" +
            "(B) '赞扬' 意味着表达对某事的赞同或钦佩。" +
            "<br><br>" +
            "(C) '警告' 意味着严厉地警告或责备某人。"
    },
    {
        id: 4,
        question: "In life, it's important to __________ time for both work and relaxation to maintain a healthy balance.",
        chinese_question: "在生活中，重要的是__________时间用于工作和放松，以保持健康的平衡。",
        answers: [
            { option: "A", answer: "take", chinese_answer: "拿", chinese_romanization: "ná" },
            { option: "B", answer: "waste", chinese_answer: "浪费", chinese_romanization: "làngfèi" },
            { option: "C", answer: "allot", chinese_answer: "分配", chinese_romanization: "fēnpèi" },
            { option: "D", answer: "extend", chinese_answer: "延长", chinese_romanization: "yáncháng" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'allot' means to give or apportion something to someone as a share or task. Figuratively, it can mean to set aside time or resources for specific purposes." +
            "<br><br>" +
            "(A) 'take' means to lay hold of something with one's hands." +
            "<br><br>" +
            "(B) 'waste' means to use or expend carelessly, extravagantly, or to no purpose." +
            "<br><br>" +
            "(D) 'extend' means to cause to cover a larger area; make longer or wider.",
        chinese_explanation: "(C) '分配'一词意味着将某物分配或分派给某人作为份额或任务。比喻地，它可以表示为特定目的预留时间或资源。" +
            "<br><br>" +
            "(A) '拿' 意味着用手抓住某物。" +
            "<br><br>" +
            "(B) '浪费' 意味着不小心地、奢侈地或无目的地使用或消耗。" +
            "<br><br>" +
            "(D) '延长' 意味着使覆盖更大的面积；变长或变宽。"
    },
    {
        id: 5,
        question: "The senator was strongly __________ to the proposed new law, arguing passionately against it in every debate.",
        chinese_question: "参议员强烈 __________ 新提出的法律，在每次辩论中都充满激情地反对。",
        answers: [
            { option: "A", answer: "opposed", chinese_answer: "反对", chinese_romanization: "fǎnduì" },
            { option: "B", answer: "supportive", chinese_answer: "支持", chinese_romanization: "zhīchí" },
            { option: "C", answer: "indifferent", chinese_answer: "漠不关心", chinese_romanization: "mò bù guānxīn" },
            { option: "D", answer: "compliant", chinese_answer: "顺从", chinese_romanization: "shùncóng" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'opposed' means to disagree with and attempt to prevent, especially by argument." +
            "<br><br>" +
            "(B) 'supportive' means providing encouragement or emotional help." +
            "<br><br>" +
            "(C) 'indifferent' means having no particular interest or sympathy." +
            "<br><br>" +
            "(D) 'compliant' means inclined to agree with others or obey rules, especially to an excessive degree.",
        chinese_explanation: "(A) '反对' 意味着不同意并试图阻止，尤其是通过争论。" +
            "<br><br>" +
            "(B) '支持' 意味着提供鼓励或情感帮助。" +
            "<br><br>" +
            "(C) '漠不关心' 意味着没有特别的兴趣或同情心。" +
            "<br><br>" +
            "(D) '顺从' 意味着倾向于同意他人或遵守规则，尤其是过度。"
    },
    {
        id: 6,
        question: "She __________ her passion for painting after attending a weekend art class.",
        chinese_question: "参加了一个周末艺术班后，她__________了对绘画的热情。",
        answers: [
            { option: "A", answer: "destroyed", chinese_answer: "破坏", chinese_romanization: "pòhuài" },
            { option: "B", answer: "forgot", chinese_answer: "忘记", chinese_romanization: "wàngjì" },
            { option: "C", answer: "neglected", chinese_answer: "忽略", chinese_romanization: "hūlüè" },
            { option: "D", answer: "discovered", chinese_answer: "发现", chinese_romanization: "fāxiàn" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'discovered' means found unexpectedly or during a search. Figuratively, it can mean realizing or coming to know something for the first time." +
            "<br><br>" +
            "(A) 'destroyed' means put an end to the existence of something by damaging or attacking it." +
            "<br><br>" +
            "(B) 'forgot' means fail to remember." +
            "<br><br>" +
            "(C) 'neglected' means failed to care for properly." +
            "<br><br>" +
            "(D) 'discovered' means found unexpectedly or during a search.",
        chinese_explanation: "(D) '发现'一词意味着意外地或在搜索过程中找到。比喻地，它可以表示第一次意识到或了解某事。" +
            "<br><br>" +
            "(A) '破坏' 意味着通过损坏或攻击结束某物的存在。" +
            "<br><br>" +
            "(B) '忘记' 意味着未能记住。" +
            "<br><br>" +
            "(C) '忽略' 意味着未能妥善照顾。" +
            "<br><br>" +
            "(D) '发现' 意味着意外地或在搜索过程中找到。"
    },
    {
        id: 7,
        question: "When he heard the ridiculous excuse, he __________ in disbelief and turned away.",
        chinese_question: "听到那个荒谬的借口时，他__________一声，表示不相信，然后转身离开。",
        answers: [
            { option: "A", answer: "whispered", chinese_answer: "低语", chinese_romanization: "dīyǔ" },
            { option: "B", answer: "shouted", chinese_answer: "呼喊", chinese_romanization: "hūhǎn" },
            { option: "C", answer: "snorted", chinese_answer: "哼哼", chinese_romanization: "hēnghēng" },
            { option: "D", answer: "giggled", chinese_answer: "傻笑", chinese_romanization: "shǎxiào" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'snorted' means made a sudden sound through the nose, especially to express impatience, irritation, or amusement. Figuratively, it can mean to show contempt or disbelief." +
            "<br><br>" +
            "(A) 'whispered' means spoke very softly using one's breath without vocal cords." +
            "<br><br>" +
            "(B) 'shouted' means uttered a loud call or cry." +
            "<br><br>" +
            "(D) 'giggled' means laughed lightly in a nervous, affected, or silly manner.",
        chinese_explanation: "(C) '哼哼'一词意味着通过鼻子发出突然的声音，特别是表示不耐烦、恼怒或愉悦。比喻地，它可以表示轻蔑或不相信。" +
            "<br><br>" +
            "(A) '低语' 意味着用呼吸而不用声带非常轻声地说话。" +
            "<br><br>" +
            "(B) '呼喊' 意味着发出大声的呼叫或喊声。" +
            "<br><br>" +
            "(D) '傻笑' 意味着以紧张、做作或愚蠢的方式轻笑。"
    },
    {
        id: 8,
        question: "He __________ from the spotlight after decades of being a famous actor, preferring a quiet life.",
        chinese_question: "在成为著名演员几十年后，他__________，更喜欢过安静的生活。",
        answers: [
            { option: "A", answer: "resigned", chinese_answer: "辞职", chinese_romanization: "cízhí" },
            { option: "B", answer: "retired", chinese_answer: "退休", chinese_romanization: "tuìxiū" },
            { option: "C", answer: "promoted", chinese_answer: "晋升", chinese_romanization: "jìnshēng" },
            { option: "D", answer: "transferred", chinese_answer: "调动", chinese_romanization: "diàodòng" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'retired' means having left one's job and ceased to work. Figuratively, it can mean withdrawing from public life." +
            "<br><br>" +
            "(A) 'resigned' means having voluntarily left a job or office." +
            "<br><br>" +
            "(C) 'promoted' means raised to a higher position or rank." +
            "<br><br>" +
            "(D) 'transferred' means moved from one place to another.",
        chinese_explanation: "(B) '退休'一词意味着离开工作岗位并停止工作。比喻地，它可以表示退出公共生活。" +
            "<br><br>" +
            "(A) '辞职' 意味着自愿离开工作或职务。" +
            "<br><br>" +
            "(C) '晋升' 意味着提升到更高的职位或级别。" +
            "<br><br>" +
            "(D) '调动' 意味着从一个地方转移到另一个地方。"
    },
    {
        id: 9,
        question: "She was __________ by the beauty of the sunset, unable to look away.",
        chinese_question: "她被日落的美丽 __________，无法移开视线。",
        answers: [
            { option: "A", answer: "transfixed", chinese_answer: "吸引", chinese_romanization: "xīyǐn" },
            { option: "B", answer: "unimpressed", chinese_answer: "不感兴趣", chinese_romanization: "bù gǎn xìngqù" },
            { option: "C", answer: "disinterested", chinese_answer: "无私", chinese_romanization: "wúsī" },
            { option: "D", answer: "uninterested", chinese_answer: "不感兴趣", chinese_romanization: "bù gǎn xìngqù" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'transfixed' metaphorically means captivated or entranced." +
            "<br><br>" +
            "(B) 'unimpressed' means feeling no admiration, interest, or respect." +
            "<br><br>" +
            "(C) 'disinterested' means not influenced by considerations of personal advantage." +
            "<br><br>" +
            "(D) 'uninterested' means not interested in or concerned about something or someone.",
        chinese_explanation: "(A) '吸引' 比喻被吸引或陶醉。" +
            "<br><br>" +
            "(B) '不感兴趣' 意味着没有钦佩、兴趣或尊重的感觉。" +
            "<br><br>" +
            "(C) '无私' 意味着不受个人利益考虑影响。" +
            "<br><br>" +
            "(D) '不感兴趣' 意味着对某事或某人不感兴趣或不关心。"
    },
    {
        id: 10,
        question: "Her eyes were __________ with excitement as she opened the gift.",
        chinese_question: "当她打开礼物时，她的眼睛 __________ 着兴奋的光芒。",
        answers: [
            { option: "A", answer: "gleaming", chinese_answer: "闪闪发光", chinese_romanization: "shǎnshǎn fāguāng" },
            { option: "B", answer: "clouded", chinese_answer: "模糊", chinese_romanization: "móhú" },
            { option: "C", answer: "dull", chinese_answer: "呆滞", chinese_romanization: "dāizhì" },
            { option: "D", answer: "lifeless", chinese_answer: "无生气", chinese_romanization: "wú shēngqì" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'gleaming' metaphorically means full of a bright or joyous expression." +
            "<br><br>" +
            "(B) 'clouded' means made obscure or less clear." +
            "<br><br>" +
            "(C) 'dull' means lacking interest or excitement." +
            "<br><br>" +
            "(D) 'lifeless' means lacking vitality or animation.",
        chinese_explanation: "(A) '闪闪发光' 比喻充满明亮或喜悦的表情。" +
            "<br><br>" +
            "(B) '模糊' 意味着变得模糊或不清晰。" +
            "<br><br>" +
            "(C) '呆滞' 意味着缺乏兴趣或兴奋。" +
            "<br><br>" +
            "(D) '无生气' 意味着缺乏活力或生机。"
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
