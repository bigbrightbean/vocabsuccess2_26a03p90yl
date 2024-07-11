// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "The hurricane __________ the coastal town, leaving it in ruins.",
        chinese_question: "飓风 __________ 了沿海小镇，使其一片废墟。",
        answers: [
            { option: "A", answer: "built", chinese_answer: "建造", chinese_romanization: "jiànzào" },
            { option: "B", answer: "devastated", chinese_answer: "毁灭", chinese_romanization: "huǐmiè" },
            { option: "C", answer: "created", chinese_answer: "创造", chinese_romanization: "chuàngzào" },
            { option: "D", answer: "protected", chinese_answer: "保护", chinese_romanization: "bǎohù" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'devastated' means destroy or ruin (something)." +
            "<br><br>" +
            "(A) 'built' means construct (something) by putting parts or material together." +
            "<br><br>" +
            "(C) 'created' means bring (something) into existence." +
            "<br><br>" +
            "(D) 'protected' means keep safe from harm or injury.",
        chinese_explanation: "(B) '毁灭' 一词意味着破坏或毁坏（某物）。" +
            "<br><br>" +
            "(A) '建造' 意味着通过组合部分或材料来建造（某物）。" +
            "<br><br>" +
            "(C) '创造' 意味着使（某物）存在。" +
            "<br><br>" +
            "(D) '保护' 意味着使免受伤害或伤害。"
    },
    {
        id: 2,
        question: "The small argument quickly __________ into a heated debate.",
        chinese_question: "小争论很快 __________ 成为激烈的辩论。",
        answers: [
            { option: "A", answer: "deescalated", chinese_answer: "缓和", chinese_romanization: "huǎnhé" },
            { option: "B", answer: "minimized", chinese_answer: "最小化", chinese_romanization: "zuìxiǎohuà" },
            { option: "C", answer: "escalated", chinese_answer: "升级", chinese_romanization: "shēngjí" },
            { option: "D", answer: "reduced", chinese_answer: "减少", chinese_romanization: "jiǎnshǎo" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'escalated' means increase rapidly." +
            "<br><br>" +
            "(A) 'deescalated' means reduce the intensity of (a conflict or potentially violent situation)." +
            "<br><br>" +
            "(B) 'minimized' means reduce (something, especially something unwanted or unpleasant) to the smallest possible amount or degree." +
            "<br><br>" +
            "(D) 'reduced' means make smaller or less in amount, degree, or size.",
        chinese_explanation: "(C) '升级' 一词意味着迅速增加。" +
            "<br><br>" +
            "(A) '缓和' 意味着减少（冲突或潜在暴力情况）的强度。" +
            "<br><br>" +
            "(B) '最小化' 意味着将（某事，尤其是不希望的或不愉快的事情）减少到最小的可能数量或程度。" +
            "<br><br>" +
            "(D) '减少' 意味着在数量、程度或大小上使变小或减少。"
    },
    {
        id: 3,
        question: "The criminal managed to __________ capture by hiding in an abandoned building.",
        chinese_question: "罪犯通过躲在废弃建筑物中设法 __________ 被捕。",
        answers: [
            { option: "A", answer: "face", chinese_answer: "面对", chinese_romanization: "miàn duì" },
            { option: "B", answer: "confront", chinese_answer: "对抗", chinese_romanization: "duìkàng" },
            { option: "C", answer: "encounter", chinese_answer: "遇到", chinese_romanization: "yù dào" },
            { option: "D", answer: "elude", chinese_answer: "逃避", chinese_romanization: "táobì" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'elude' means evade or escape from (a danger, enemy, or pursuer), typically in a skillful or cunning way." +
            "<br><br>" +
            "(A) 'face' means confront and deal with or accept." +
            "<br><br>" +
            "(B) 'confront' means face up to and deal with (a problem or difficult situation)." +
            "<br><br>" +
            "(C) 'encounter' means unexpectedly experience or be faced with (something difficult or hostile).",
        chinese_explanation: "(D) '逃避' 一词意味着通常以巧妙或狡猾的方式逃避或躲避（危险、敌人或追捕者）。" +
            "<br><br>" +
            "(A) '面对' 意味着面对和处理或接受。" +
            "<br><br>" +
            "(B) '对抗' 意味着面对和处理（问题或困难情况）。" +
            "<br><br>" +
            "(C) '遇到' 意味着意外经历或面对（困难或敌对的事情）。"
    },
    {
        id: 4,
        question: "She started to __________ when she realized the enormity of the task ahead of her.",
        chinese_question: "当她意识到面前任务的艰巨时，她开始 __________。",
        answers: [
            { option: "A", answer: "succeed", chinese_answer: "成功", chinese_romanization: "chénggōng" },
            { option: "B", answer: "proceed", chinese_answer: "继续", chinese_romanization: "jìxù" },
            { option: "C", answer: "falter", chinese_answer: "衰弱", chinese_romanization: "shuāiruò" },
            { option: "D", answer: "thrive", chinese_answer: "茁壮成长", chinese_romanization: "zhuózhuàng chéngzhǎng" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'falter' means start to lose strength or momentum." +
            "<br><br>" +
            "(A) 'succeed' means achieve the desired aim or result." +
            "<br><br>" +
            "(B) 'proceed' means begin or continue a course of action." +
            "<br><br>" +
            "(D) 'thrive' means (of a child, animal, or plant) grow or develop well or vigorously.",
        chinese_explanation: "(C) '衰弱' 一词意味着开始失去力量或动力。" +
            "<br><br>" +
            "(A) '成功' 意味着实现预期的目标或结果。" +
            "<br><br>" +
            "(B) '继续' 意味着开始或继续进行一项行动。" +
            "<br><br>" +
            "(D) '茁壮成长' 意味着（儿童、动物或植物）生长或发育良好或茁壮。"
    },
    {
        id: 5,
        question: "The bully tried to __________ the younger students by threatening them with violence.",
        chinese_question: "恶霸试图通过暴力威胁 __________ 年幼的学生。",
        answers: [
            { option: "A", answer: "comfort", chinese_answer: "安慰", chinese_romanization: "ānwèi" },
            { option: "B", answer: "intimidate", chinese_answer: "恐吓", chinese_romanization: "kǒnghè" },
            { option: "C", answer: "encourage", chinese_answer: "鼓励", chinese_romanization: "gǔlì" },
            { option: "D", answer: "assist", chinese_answer: "帮助", chinese_romanization: "bāngzhù" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'intimidate' means frighten or overawe (someone), especially in order to make them do what one wants." +
            "<br><br>" +
            "(A) 'comfort' means ease the grief or distress of; console." +
            "<br><br>" +
            "(C) 'encourage' means give support, confidence, or hope to (someone)." +
            "<br><br>" +
            "(D) 'assist' means help (someone), typically by doing a share of the work.",
        chinese_explanation: "(B) '恐吓' 一词意味着吓唬或压倒（某人），尤其是为了让他们做某人想要的事情。" +
            "<br><br>" +
            "(A) '安慰' 意味着缓解悲伤或痛苦；安慰。" +
            "<br><br>" +
            "(C) '鼓励' 意味着给予（某人）支持、信心或希望。" +
            "<br><br>" +
            "(D) '帮助' 意味着帮助（某人），通常是通过分担工作来帮助。"
    },
    {
        id: 6,
        question: "Many people __________ the new policy, arguing that it would be harmful to small businesses.",
        chinese_question: "许多人 __________ 新政策，认为它会对小企业造成伤害。",
        answers: [
            { option: "A", answer: "support", chinese_answer: "支持", chinese_romanization: "zhīchí" },
            { option: "B", answer: "oppose", chinese_answer: "反对", chinese_romanization: "fǎnduì" },
            { option: "C", answer: "endorse", chinese_answer: "赞同", chinese_romanization: "zàntóng" },
            { option: "D", answer: "advocate", chinese_answer: "提倡", chinese_romanization: "tíchàng" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'oppose' means disapprove of and attempt to prevent, especially by argument." +
            "<br><br>" +
            "(A) 'support' means bear all or part of the weight of; hold up." +
            "<br><br>" +
            "(C) 'endorse' means declare one's public approval or support of." +
            "<br><br>" +
            "(D) 'advocate' means publicly recommend or support.",
        chinese_explanation: "(B) '反对' 一词意味着不赞成并试图阻止，尤其是通过争论。" +
            "<br><br>" +
            "(A) '支持' 意味着承受所有或部分重量；支撑。" +
            "<br><br>" +
            "(C) '赞同' 意味着公开宣布某人的认可或支持。" +
            "<br><br>" +
            "(D) '提倡' 意味着公开推荐或支持。"
    },
    {
        id: 7,
        question: "The mother tried to __________ the crying baby by rocking her gently.",
        chinese_question: "母亲试图通过轻轻摇晃来 __________ 哭泣的婴儿。",
        answers: [
            { option: "A", answer: "aggravate", chinese_answer: "加剧", chinese_romanization: "jiājù" },
            { option: "B", answer: "disturb", chinese_answer: "打扰", chinese_romanization: "dǎrǎo" },
            { option: "C", answer: "provoke", chinese_answer: "激怒", chinese_romanization: "jīnù" },
            { option: "D", answer: "pacify", chinese_answer: "安抚", chinese_romanization: "ānfǔ" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'pacify' means quell the anger, agitation, or excitement of." +
            "<br><br>" +
            "(A) 'aggravate' means make (a problem, injury, or offense) worse or more serious." +
            "<br><br>" +
            "(B) 'disturb' means interfere with the normal arrangement or functioning of." +
            "<br><br>" +
            "(C) 'provoke' means stimulate or give rise to (a reaction or emotion, typically a strong or unwelcome one) in someone.",
        chinese_explanation: "(D) '安抚' 一词意味着平息愤怒、激动或兴奋。" +
            "<br><br>" +
            "(A) '加剧' 意味着使（问题、伤害或罪行）更严重或更严重。" +
            "<br><br>" +
            "(B) '打扰' 意味着干扰正常的安排或功能。" +
            "<br><br>" +
            "(C) '激怒' 意味着激发或引起（通常是强烈或不受欢迎的反应或情感）。"
    },
    {
        id: 8,
        question: "The workers were accused of trying to __________ the factory's production by damaging the machinery.",
        chinese_question: "工人们被指控试图通过破坏机器来 __________ 工厂的生产。",
        answers: [
            { option: "A", answer: "assist", chinese_answer: "协助", chinese_romanization: "xiézhù" },
            { option: "B", answer: "enhance", chinese_answer: "增强", chinese_romanization: "zēngqiáng" },
            { option: "C", answer: "sabotage", chinese_answer: "破坏", chinese_romanization: "pòhuài" },
            { option: "D", answer: "support", chinese_answer: "支持", chinese_romanization: "zhīchí" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'sabotage' means deliberately destroy, damage, or obstruct (something), especially for political or military advantage." +
            "<br><br>" +
            "(A) 'assist' means help (someone), typically by doing a share of the work." +
            "<br><br>" +
            "(B) 'enhance' means intensify, increase, or further improve the quality, value, or extent of." +
            "<br><br>" +
            "(D) 'support' means bear all or part of the weight of; hold up.",
        chinese_explanation: "(C) '破坏' 一词意味着故意破坏、损坏或妨碍（某物），尤其是为了政治或军事利益。" +
            "<br><br>" +
            "(A) '协助' 意味着帮助（某人），通常是通过分担工作。" +
            "<br><br>" +
            "(B) '增强' 意味着加强、增加或进一步提高质量、价值或范围。" +
            "<br><br>" +
            "(D) '支持' 意味着承受所有或部分重量；支撑。"
    },
    {
        id: 9,
        question: "When provoked, he tends to __________ rather than try to resolve the conflict peacefully.",
        chinese_question: "在受到挑衅时，他倾向于 __________，而不是试图和平解决冲突。",
        answers: [
            { option: "A", answer: "appease", chinese_answer: "安抚", chinese_romanization: "ānfǔ" },
            { option: "B", answer: "retaliate", chinese_answer: "报复", chinese_romanization: "bàofù" },
            { option: "C", answer: "reconcile", chinese_answer: "和解", chinese_romanization: "héjiě" },
            { option: "D", answer: "prevent", chinese_answer: "预防", chinese_romanization: "yùfáng" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'retaliate' means make an attack or assault in return for a similar attack." +
            "<br><br>" +
            "(A) 'appease' means pacify or placate (someone) by acceding to their demands." +
            "<br><br>" +
            "(C) 'reconcile' means restore friendly relations between." +
            "<br><br>" +
            "(D) 'prevent' means keep (something) from happening or arising.",
        chinese_explanation: "(B) '报复' 一词意味着为了类似的攻击而进行攻击或袭击。" +
            "<br><br>" +
            "(A) '安抚' 意味着通过同意他们的要求来安抚或抚慰（某人）。" +
            "<br><br>" +
            "(C) '和解' 意味着恢复友好关系。" +
            "<br><br>" +
            "(D) '预防' 意味着阻止（某事）发生或出现。"
    },
    {
        id: 10,
        question: "A week at the spa helped to __________ her, leaving her feeling refreshed and revitalized.",
        chinese_question: "在水疗中心度过的一周帮助她 __________，让她感觉焕然一新。",
        answers: [
            { option: "A", answer: "exhaust", chinese_answer: "疲惫", chinese_romanization: "píbèi" },
            { option: "B", answer: "deplete", chinese_answer: "耗尽", chinese_romanization: "hàojìn" },
            { option: "C", answer: "drain", chinese_answer: "排干", chinese_romanization: "páigān" },
            { option: "D", answer: "rejuvenate", chinese_answer: "恢复活力", chinese_romanization: "huīfù huólì" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'rejuvenate' means make (someone or something) look or feel younger, fresher, or more lively." +
            "<br><br>" +
            "(A) 'exhaust' means drain (someone) of their physical or mental resources; tire out." +
            "<br><br>" +
            "(B) 'deplete' means use up the supply or resources of." +
            "<br><br>" +
            "(C) 'drain' means cause the water or other liquid in (something) to run out, leaving it empty, dry, or drier.",
        chinese_explanation: "(D) '恢复活力' 一词意味着使（某人或某物）看起来或感觉更年轻、新鲜或更有活力。" +
            "<br><br>" +
            "(A) '疲惫' 意味着消耗（某人）的身体或精神资源；疲惫不堪。" +
            "<br><br>" +
            "(B) '耗尽' 意味着用尽供应或资源。" +
            "<br><br>" +
            "(C) '排干' 意味着使（水或其他液体）流出，留下空的、干的或更干燥的。"
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
