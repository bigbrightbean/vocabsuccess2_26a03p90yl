// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "Her __________ efforts to improve her skills led to significant progress over time.",
        chinese_question: "她__________地努力提高自己的技能，随着时间的推移取得了显著的进步。",
        answers: [
            { option: "A", answer: "intermittent", chinese_answer: "间歇的", chinese_romanization: "jiànxiē de" },
            { option: "B", answer: "sporadic", chinese_answer: "零星的", chinese_romanization: "língxīng de" },
            { option: "C", answer: "continuous", chinese_answer: "持续的", chinese_romanization: "chíxù de" },
            { option: "D", answer: "occasional", chinese_answer: "偶尔的", chinese_romanization: "ǒu'ěr de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'continuous' means forming an unbroken whole; without interruption. Figuratively, it can mean making constant and sustained efforts." +
            "<br><br>" +
            "(A) 'intermittent' means occurring at irregular intervals; not continuous or steady." +
            "<br><br>" +
            "(B) 'sporadic' means occurring at irregular intervals or only in a few places; scattered or isolated." +
            "<br><br>" +
            "(D) 'occasional' means occurring, appearing, or done infrequently and irregularly.",
        chinese_explanation: "(C) '持续的'一词意味着形成一个不间断的整体；没有中断。比喻地，它可以表示不断和持续的努力。" +
            "<br><br>" +
            "(A) '间歇的' 意味着不定期发生的；不连续或稳定的。" +
            "<br><br>" +
            "(B) '零星的' 意味着不定期或仅在少数地方发生的；分散的。" +
            "<br><br>" +
            "(D) '偶尔的' 意味着不经常和不规则地发生、出现或完成的。"
    },
    {
        id: 2,
        question: "His recovery from the illness was __________, improving bit by bit each day.",
        chinese_question: "他从疾病中的 __________ 康复，每天一点点改善。",
        answers: [
            { option: "A", answer: "gradual", chinese_answer: "逐渐的", chinese_romanization: "zhújiàn de" },
            { option: "B", answer: "rapid", chinese_answer: "快速的", chinese_romanization: "kuàisù de" },
            { option: "C", answer: "instant", chinese_answer: "即时的", chinese_romanization: "jíshí de" },
            { option: "D", answer: "quick", chinese_answer: "迅速的", chinese_romanization: "xùnsù de" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'gradual' metaphorically means happening or changing slowly over a long period of time." +
            "<br><br>" +
            "(B) 'rapid' means happening in a short time or at a great rate." +
            "<br><br>" +
            "(C) 'instant' means happening or coming immediately." +
            "<br><br>" +
            "(D) 'quick' means moving fast or doing something in a short time.",
        chinese_explanation: "(A) '逐渐的' 比喻在很长一段时间内缓慢发生或变化。" +
            "<br><br>" +
            "(B) '快速的' 意味着在短时间内或以很快的速度发生。" +
            "<br><br>" +
            "(C) '即时的' 意味着立即发生或来的。" +
            "<br><br>" +
            "(D) '迅速的' 意味着移动快速或在短时间内完成某事。"
    },
    {
        id: 3,
        question: "The __________ smell of burning rubber filled the air after the accident.",
        chinese_question: "事故后，空气中弥漫着__________的烧焦橡胶气味。",
        answers: [
            { option: "A", answer: "pleasant", chinese_answer: "愉快的", chinese_romanization: "yúkuài de" },
            { option: "B", answer: "acrid", chinese_answer: "刺鼻的", chinese_romanization: "cìbí de" },
            { option: "C", answer: "fragrant", chinese_answer: "芳香的", chinese_romanization: "fāngxiāng de" },
            { option: "D", answer: "soothing", chinese_answer: "舒缓的", chinese_romanization: "shūhuǎn de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'acrid' means having an irritatingly strong and unpleasant taste or smell." +
            "<br><br>" +
            "(A) 'pleasant' means giving a sense of happy satisfaction or enjoyment." +
            "<br><br>" +
            "(C) 'fragrant' means having a pleasant or sweet smell." +
            "<br><br>" +
            "(D) 'soothing' means having a gently calming effect.",
        chinese_explanation: "(B) '刺鼻的'一词意味着有刺激性强且令人不快的味道或气味。" +
            "<br><br>" +
            "(A) '愉快的' 意味着给予愉快的满足感或享受。" +
            "<br><br>" +
            "(C) '芳香的' 意味着有愉快或甜美的气味。" +
            "<br><br>" +
            "(D) '舒缓的' 意味着有温和的镇静效果。"
    },
    {
        id: 4,
        question: "The athlete's __________ foul was so obvious that the referee had no choice but to eject him from the game.",
        chinese_question: "运动员的__________犯规如此明显，裁判别无选择，只能将他罚出场。",
        answers: [
            { option: "A", answer: "minor", chinese_answer: "轻微", chinese_romanization: "qīngwēi" },
            { option: "B", answer: "accidental", chinese_answer: "偶然", chinese_romanization: "ǒurán" },
            { option: "C", answer: "flagrant", chinese_answer: "公然", chinese_romanization: "gōngrán" },
            { option: "D", answer: "unnoticed", chinese_answer: "未被注意", chinese_romanization: "wèi bèi zhùyì" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'flagrant' means conspicuously or obviously offensive." +
            "<br><br>" +
            "(A) 'minor' means lesser in importance, seriousness, or significance." +
            "<br><br>" +
            "(B) 'accidental' means happening by chance or unexpectedly." +
            "<br><br>" +
            "(D) 'unnoticed' means not noticed or observed.",
        chinese_explanation: "(C) '公然'一词意味着显眼或明显冒犯的。" +
            "<br><br>" +
            "(A) '轻微' 意味着重要性、严重性或意义较小。" +
            "<br><br>" +
            "(B) '偶然' 意味着偶然或意外发生。" +
            "<br><br>" +
            "(D) '未被注意' 意味着没有被注意或观察到。"
    },
    {
        id: 5,
        question: "She was __________ with the service at the restaurant and decided to leave a complaint.",
        chinese_question: "她对餐馆的服务感到__________，决定留下投诉。",
        answers: [
            { option: "A", answer: "pleased", chinese_answer: "高兴的", chinese_romanization: "gāoxìng de" },
            { option: "B", answer: "satisfied", chinese_answer: "满意的", chinese_romanization: "mǎnyì de" },
            { option: "C", answer: "dissatisfied", chinese_answer: "不满意的", chinese_romanization: "bù mǎnyì de" },
            { option: "D", answer: "content", chinese_answer: "满足的", chinese_romanization: "mǎnzú de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'dissatisfied' means not content or happy with something." +
            "<br><br>" +
            "(A) 'pleased' means feeling or showing pleasure and satisfaction." +
            "<br><br>" +
            "(B) 'satisfied' means contented; pleased." +
            "<br><br>" +
            "(D) 'content' means in a state of peaceful happiness.",
        chinese_explanation: "(C) '不满意的'一词意味着对某事不满意或不高兴。" +
            "<br><br>" +
            "(A) '高兴的' 意味着感到或表现出快乐和满足。" +
            "<br><br>" +
            "(B) '满意的' 意味着满意的；高兴的。" +
            "<br><br>" +
            "(D) '满足的' 意味着处于和平的幸福状态。"
    },
    {
        id: 6,
        question: "The actress wore a __________ gown that sparkled under the lights, drawing everyone's attention.",
        chinese_question: "女演员穿着一件 __________ 的礼服，在灯光下闪闪发光，吸引了所有人的注意。",
        answers: [
            { option: "A", answer: "plain", chinese_answer: "朴素的", chinese_romanization: "pǔsù de" },
            { option: "B", answer: "dull", chinese_answer: "无趣的", chinese_romanization: "wúqù de" },
            { option: "C", answer: "glamourous", chinese_answer: "迷人的", chinese_romanization: "mírén de" },
            { option: "D", answer: "simple", chinese_answer: "简单的", chinese_romanization: "jiǎndān de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'glamourous' means having glamour; charmingly or fascinatingly attractive, especially in a mysterious or magical way." +
            "<br><br>" +
            "(A) 'plain' means not decorated or elaborate; simple or ordinary in character." +
            "<br><br>" +
            "(B) 'dull' means lacking interest or excitement." +
            "<br><br>" +
            "(D) 'simple' means easily understood or done; presenting no difficulty.",
        chinese_explanation: "(C) '迷人的' 一词意味着具有魅力的；迷人或迷人地吸引人，尤其是以神秘或魔法般的方式。" +
            "<br><br>" +
            "(A) '朴素的' 意味着没有装饰或精心设计；性格简单或普通。" +
            "<br><br>" +
            "(B) '无趣的' 意味着缺乏兴趣或兴奋。" +
            "<br><br>" +
            "(D) '简单的' 意味着容易理解或完成；没有难度。"
},

    {
        id: 7,
        question: "The __________ rain showers made it difficult to plan an outdoor event, as they occurred unpredictably throughout the day.",
        chinese_question: "__________ 的阵雨使得计划户外活动变得困难，因为它们在一天中不定时地发生。",
        answers: [
            { option: "A", answer: "constant", chinese_answer: "持续的", chinese_romanization: "chíxù de" },
            { option: "B", answer: "intermittent", chinese_answer: "间歇的", chinese_romanization: "jiànxiē de" },
            { option: "C", answer: "continuous", chinese_answer: "连续的", chinese_romanization: "liánxù de" },
            { option: "D", answer: "steady", chinese_answer: "稳定的", chinese_romanization: "wěndìng de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'intermittent' means occurring at irregular intervals; not continuous or steady." +
            "<br><br>" +
            "(A) 'constant' means occurring continuously over a period of time." +
            "<br><br>" +
            "(C) 'continuous' means forming an unbroken whole; without interruption." +
            "<br><br>" +
            "(D) 'steady' means firmly fixed, supported, or balanced; not shaking or moving.",
        chinese_explanation: "(B) '间歇的' 一词意味着不定期发生的；不连续或稳定的。" +
            "<br><br>" +
            "(A) '持续的' 意味着在一段时间内持续发生的。" +
            "<br><br>" +
            "(C) '连续的' 意味着形成一个完整的整体；没有中断。" +
            "<br><br>" +
            "(D) '稳定的' 意味着牢固固定、支撑或平衡的；不晃动或移动。"
    },
    
    {
        id: 8,
        question: "The garden produced a __________ harvest this year, providing more than enough vegetables for the entire neighborhood.",
        chinese_question: "今年花园里有 __________ 的收成，为整个社区提供了足够的蔬菜。",
        answers: [
            { option: "A", answer: "meager", chinese_answer: "微薄的", chinese_romanization: "wéibó de" },
            { option: "B", answer: "bountiful", chinese_answer: "丰富的", chinese_romanization: "fēngfù de" },
            { option: "C", answer: "insufficient", chinese_answer: "不足的", chinese_romanization: "bùzú de" },
            { option: "D", answer: "scarce", chinese_answer: "稀少的", chinese_romanization: "xīshǎo de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'bountiful' means large in quantity; abundant." +
            "<br><br>" +
            "(A) 'meager' means lacking in quantity or quality." +
            "<br><br>" +
            "(C) 'insufficient' means not enough; inadequate." +
            "<br><br>" +
            "(D) 'scarce' means insufficient for the demand.",
        chinese_explanation: "(B) '丰富的' 一词意味着数量多的；丰富的。" +
            "<br><br>" +
            "(A) '微薄的' 意味着数量或质量不足的。" +
            "<br><br>" +
            "(C) '不足的' 意味着不够的；不充足的。" +
            "<br><br>" +
            "(D) '稀少的' 意味着需求不足。"
    },
    {
        id: 9,
        question: "After the sudden passing of his wife, he felt completely __________, struggling to find joy or purpose in his daily life.",
        chinese_question: "妻子突然去世后，他感到完全 __________，在日常生活中挣扎着寻找快乐或目标。",
        answers: [
            { option: "A", answer: "joyful", chinese_answer: "快乐的", chinese_romanization: "kuàilè de" },
            { option: "B", answer: "content", chinese_answer: "满足的", chinese_romanization: "mǎnzú de" },
            { option: "C", answer: "hopeful", chinese_answer: "充满希望的", chinese_romanization: "chōngmǎn xīwàng de" },
            { option: "D", answer: "bereft", chinese_answer: "失去的", chinese_romanization: "shīqù de" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'bereft' means deprived of or lacking something, especially a non-material asset." +
            "<br><br>" +
            "(A) 'joyful' means feeling, expressing, or causing great pleasure and happiness." +
            "<br><br>" +
            "(B) 'content' means in a state of peaceful happiness." +
            "<br><br>" +
            "(C) 'hopeful' means feeling or inspiring optimism about a future event.",
        chinese_explanation: "(D) '失去的' 意味着被剥夺或缺少某种东西，特别是非物质资产。" +
            "<br><br>" +
            "(A) '快乐的' 意味着感到、表达或引起极大的愉快和幸福。" +
            "<br><br>" +
            "(B) '满足的' 意味着处于和平幸福的状态。" +
            "<br><br>" +
            "(C) '充满希望的' 意味着对未来事件感到乐观或激发乐观。"
    },
    {
        id: 10,
        question: "Her __________ efforts to improve her grades finally paid off when she achieved the highest score in the class.",
        chinese_question: "她 __________ 提高成绩的努力终于得到了回报，当她取得了班上最高分时。",
        answers: [
            { option: "A", answer: "occasional", chinese_answer: "偶尔的", chinese_romanization: "ǒu'ěr de" },
            { option: "B", answer: "persistent", chinese_answer: "坚持的", chinese_romanization: "jiānchí de" },
            { option: "C", answer: "sporadic", chinese_answer: "零星的", chinese_romanization: "língxīng de" },
            { option: "D", answer: "intermittent", chinese_answer: "间歇的", chinese_romanization: "jiànxiē de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'persistent' means continuing firmly or obstinately in a course of action in spite of difficulty or opposition." +
            "<br><br>" +
            "(A) 'occasional' means at infrequent or irregular intervals; now and then." +
            "<br><br>" +
            "(C) 'sporadic' means occurring at irregular intervals or only in a few places; scattered or isolated." +
            "<br><br>" +
            "(D) 'intermittent' means occurring at irregular intervals; not continuous or steady.",
        chinese_explanation: "(B) '坚持的' 意味着尽管有困难或反对，仍然坚定地或顽固地继续采取行动。" +
            "<br><br>" +
            "(A) '偶尔的' 意味着在不频繁或不规则的间隔；时不时。" +
            "<br><br>" +
            "(C) '零星的' 意味着在不规则的间隔发生或只有在少数地方；分散的或孤立的。" +
            "<br><br>" +
            "(D) '间歇的' 意味着在不规则的间隔发生的；不连续或不稳定的。"
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
