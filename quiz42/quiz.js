// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "The __________ employee was blamed for the project’s failure even though the issues were beyond his control.",
        chinese_question: "这位 __________ 的员工虽然问题超出了他的控制范围，但仍被责怪项目失败。",
        answers: [
            { option: "A", answer: "lucky", chinese_answer: "幸运的", chinese_romanization: "xìngyùn de" },
            { option: "B", answer: "competent", chinese_answer: "有能力的", chinese_romanization: "yǒu nénglì de" },
            { option: "C", answer: "successful", chinese_answer: "成功的", chinese_romanization: "chénggōng de" },
            { option: "D", answer: "hapless", chinese_answer: "不幸的", chinese_romanization: "bùxìng de" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'hapless' means unfortunate or unlucky." +
            "<br><br>" +
            "(A) 'lucky' means having, bringing, or resulting from good luck." +
            "<br><br>" +
            "(B) 'competent' means having the necessary ability, knowledge, or skill to do something successfully." +
            "<br><br>" +
            "(C) 'successful' means accomplishing an aim or purpose.",
        chinese_explanation: "(D) '不幸的' 意味着不幸或倒霉的。" +
            "<br><br>" +
            "(A) '幸运的' 意味着有好运、带来好运或因好运而产生的。" +
            "<br><br>" +
            "(B) '有能力的' 意味着具有必要的能力、知识或技能成功地做某事。" +
            "<br><br>" +
            "(C) '成功的' 意味着完成一个目标或目的。"
    },
    {
        id: 2,
        question: "Her performance in the championship was absolutely __________, breaking several records and earning her a gold medal.",
        chinese_question: "她在锦标赛中的表现绝对 __________，打破了多项记录，并获得了金牌。",
        answers: [
            { option: "A", answer: "mediocre", chinese_answer: "平庸", chinese_romanization: "píngyōng" },
            { option: "B", answer: "phenomenal", chinese_answer: "非凡", chinese_romanization: "fēifán" },
            { option: "C", answer: "ordinary", chinese_answer: "普通", chinese_romanization: "pǔtōng" },
            { option: "D", answer: "average", chinese_answer: "平均", chinese_romanization: "píngjūn" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'phenomenal' means very remarkable; extraordinary." +
            "<br><br>" +
            "(A) 'mediocre' means of only average quality; not very good." +
            "<br><br>" +
            "(C) 'ordinary' means with no special or distinctive features; normal." +
            "<br><br>" +
            "(D) 'average' means having qualities that are seen as typical.",
        chinese_explanation: "(B) '非凡' 一词意味着非常显著；非同寻常。" +
            "<br><br>" +
            "(A) '平庸' 意味着质量一般；不太好。" +
            "<br><br>" +
            "(C) '普通' 意味着没有特殊或独特的特征；正常。" +
            "<br><br>" +
            "(D) '平均' 意味着被视为典型的品质。"
    },
    {
        id: 3,
        question: "His memories of the childhood event were __________, lacking clarity.",
        chinese_question: "他对童年事件的记忆很__________，缺乏清晰度。",
        answers: [
            { option: "A", answer: "clear", chinese_answer: "清晰的", chinese_romanization: "qīngxī de" },
            { option: "B", answer: "sharp", chinese_answer: "锋利的", chinese_romanization: "fēnglì de" },
            { option: "C", answer: "vivid", chinese_answer: "生动的", chinese_romanization: "shēngdòng de" },
            { option: "D", answer: "hazy", chinese_answer: "朦胧的", chinese_romanization: "ménglóng de" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'hazy' means covered by a haze; unclear or cloudy. Figuratively, it can mean memories or thoughts that are unclear or not well-defined." +
            "<br><br>" +
            "(A) 'clear' means easy to perceive, understand, or interpret." +
            "<br><br>" +
            "(B) 'sharp' means having an edge or point that is able to cut or pierce something." +
            "<br><br>" +
            "(C) 'vivid' means producing powerful feelings or strong, clear images in the mind.",
        chinese_explanation: "(D) '朦胧的'一词意味着被薄雾覆盖的；不清楚或模糊的。比喻地，它可以表示记忆或想法不清楚或不明确。" +
            "<br><br>" +
            "(A) '清晰的' 意味着容易感知、理解或解释。" +
            "<br><br>" +
            "(B) '锋利的' 意味着有一个能够切割或刺穿某物的边缘或尖点。" +
            "<br><br>" +
            "(C) '生动的' 意味着在脑海中产生强烈感觉或清晰、强烈的图像。"
    },
    {
        id: 4,
        question: "Her voice had a __________ quality that captivated everyone in the room.",
        chinese_question: "她的声音具有__________的特质，吸引了房间里的每一个人。",
        answers: [
            { option: "A", answer: "terrestrial", chinese_answer: "地球的", chinese_romanization: "dìqiú de" },
            { option: "B", answer: "mundane", chinese_answer: "平凡的", chinese_romanization: "píngfán de" },
            { option: "C", answer: "celestial", chinese_answer: "天上的", chinese_romanization: "tiānshàng de" },
            { option: "D", answer: "ordinary", chinese_answer: "普通的", chinese_romanization: "pǔtōng de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'celestial' means positioned in or relating to the sky, or outer space as observed in astronomy. Figuratively, it can mean exceptionally beautiful or otherworldly." +
            "<br><br>" +
            "(A) 'terrestrial' means relating to the earth or land." +
            "<br><br>" +
            "(B) 'mundane' means lacking interest or excitement; dull." +
            "<br><br>" +
            "(D) 'ordinary' means with no special or distinctive features; normal.",
        chinese_explanation: "(C) '天上的'一词意味着位于或与天空有关，或在天文学中观察到的外太空。比喻地，它可以表示异常美丽或超凡脱俗。" +
            "<br><br>" +
            "(A) '地球的' 意味着与地球或土地有关。" +
            "<br><br>" +
            "(B) '平凡的' 意味着缺乏兴趣或兴奋；无聊的。" +
            "<br><br>" +
            "(D) '普通的' 意味着没有特殊或独特的特征；正常的。"
    },
    {
        id: 5,
        question: "Despite the company's declining sales, the CEO remained __________, believing that no significant changes were necessary.",
        chinese_question: "尽管公司的销售额在下降，首席执行官仍然 __________，认为不需要进行重大变革。",
        answers: [
            { option: "A", answer: "complacent", chinese_answer: "自满的", chinese_romanization: "zìmǎn de" },
            { option: "B", answer: "proactive", chinese_answer: "积极主动的", chinese_romanization: "jījí zhǔdòng de" },
            { option: "C", answer: "concerned", chinese_answer: "担忧的", chinese_romanization: "dānyōu de" },
            { option: "D", answer: "vigilant", chinese_answer: "警惕的", chinese_romanization: "jǐngtì de" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'complacent' means showing smug or uncritical satisfaction with oneself or one's achievements." +
            "<br><br>" +
            "(B) 'proactive' means creating or controlling a situation rather than just responding to it after it has happened." +
            "<br><br>" +
            "(C) 'concerned' means worried, troubled, or anxious." +
            "<br><br>" +
            "(D) 'vigilant' means keeping careful watch for possible danger or difficulties.",
        chinese_explanation: "(A) '自满的' 意味着对自己或自己的成就表现出自鸣得意或不加批判的满意。" +
            "<br><br>" +
            "(B) '积极主动的' 意味着创造或控制一个情况，而不是在它发生后做出反应。" +
            "<br><br>" +
            "(C) '担忧的' 意味着担心、烦恼或焦虑的。" +
            "<br><br>" +
            "(D) '警惕的' 意味着密切注意可能的危险或困难的。"
    },
    {
        id: 6,
        question: "He had a __________ nature, always willing to listen and follow advice.",
        chinese_question: "他性格__________，总是愿意倾听和遵循建议。",
        answers: [
            { option: "A", answer: "aggressive", chinese_answer: "好斗的", chinese_romanization: "hàodòu de" },
            { option: "B", answer: "stubborn", chinese_answer: "固执的", chinese_romanization: "gùzhí de" },
            { option: "C", answer: "docile", chinese_answer: "温顺的", chinese_romanization: "wēnshùn de" },
            { option: "D", answer: "wild", chinese_answer: "野生的", chinese_romanization: "yěshēng de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'docile' means ready to accept control or instruction; submissive. Figuratively, it can mean being easygoing and cooperative." +
            "<br><br>" +
            "(A) 'aggressive' means ready or likely to attack or confront; characterized by or resulting from aggression." +
            "<br><br>" +
            "(B) 'stubborn' means having or showing dogged determination not to change one's attitude or position on something, especially in spite of good arguments or reasons to do so." +
            "<br><br>" +
            "(D) 'wild' means living or growing in the natural environment; not domesticated or cultivated.",
        chinese_explanation: "(C) '温顺的'一词意味着准备接受控制或指示；顺从的。比喻地，它可以表示性格随和和合作。" +
            "<br><br>" +
            "(A) '好斗的' 意味着准备或可能攻击或对抗的；由攻击引起的或导致的。" +
            "<br><br>" +
            "(B) '固执的' 意味着顽强地决定不改变某人的态度或立场，尤其是在有充分理由这样做的情况下。" +
            "<br><br>" +
            "(D) '野生的' 意味着生活或生长在自然环境中；未驯养或未培养的。"
    },
    {
        id: 7,
        question: "The professor's __________ lecture covered all aspects of the topic, leaving no question unanswered.",
        chinese_question: "教授的 __________ 讲座涵盖了该主题的所有方面，没有留下任何未解的问题。",
        answers: [
            { option: "A", answer: "comprehensive", chinese_answer: "全面的", chinese_romanization: "quánmiàn de" },
            { option: "B", answer: "superficial", chinese_answer: "表面的", chinese_romanization: "biǎomiàn de" },
            { option: "C", answer: "partial", chinese_answer: "部分的", chinese_romanization: "bùfèn de" },
            { option: "D", answer: "fragmented", chinese_answer: "支离破碎的", chinese_romanization: "zhīlí pòsuì de" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'comprehensive' means complete and including everything that is necessary." +
            "<br><br>" +
            "(B) 'superficial' means existing or occurring at or on the surface." +
            "<br><br>" +
            "(C) 'partial' means existing only in part; incomplete." +
            "<br><br>" +
            "(D) 'fragmented' means broken into small parts or pieces.",
        chinese_explanation: "(A) '全面的' 意味着完整的，包括所有必要的内容。" +
            "<br><br>" +
            "(B) '表面的' 意味着存在于或发生在表面上的。" +
            "<br><br>" +
            "(C) '部分的' 意味着仅存在部分的；不完整的。" +
            "<br><br>" +
            "(D) '支离破碎的' 意味着被分成小部分或碎片。"
    },
    {
        id: 8,
        question: "She proved to be a __________ leader, handling the crisis with skill and confidence.",
        chinese_question: "她证明自己是一位 __________ 的领导者，以技能和信心处理了危机。",
        answers: [
            { option: "A", answer: "ineffective", chinese_answer: "无效", chinese_romanization: "wúxiào" },
            { option: "B", answer: "competent", chinese_answer: "能干", chinese_romanization: "nénggàn" },
            { option: "C", answer: "incapable", chinese_answer: "无能", chinese_romanization: "wúnéng" },
            { option: "D", answer: "unfit", chinese_answer: "不适合", chinese_romanization: "bù shìhé" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'competent' means having the necessary ability, knowledge, or skill to do something successfully." +
            "<br><br>" +
            "(A) 'ineffective' means not producing any significant or desired effect." +
            "<br><br>" +
            "(C) 'incapable' means unable to do or achieve (something)." +
            "<br><br>" +
            "(D) 'unfit' means not of the necessary quality or standard to meet a particular purpose.",
        chinese_explanation: "(B) '能干' 意味着拥有成功完成某事所需的能力、知识或技能。" +
            "<br><br>" +
            "(A) '无效' 意味着没有产生任何显著或预期效果。" +
            "<br><br>" +
            "(C) '无能' 意味着不能做或实现（某事）。" +
            "<br><br>" +
            "(D) '不适合' 意味着没有必要的质量或标准来满足特定目的的。"
    },
    {
        id: 9,
        question: "The __________ bond between the brothers was evident in the way they supported each other through thick and thin.",
        chinese_question: "兄弟之间的 __________ 纽带在他们无论顺境逆境都相互支持的方式中显而易见。",
        answers: [
            { option: "A", answer: "fraternal", chinese_answer: "兄弟般的", chinese_romanization: "xiōngdì bān de" },
            { option: "B", answer: "distant", chinese_answer: "疏远的", chinese_romanization: "shūyuǎn de" },
            { option: "C", answer: "indifferent", chinese_answer: "冷漠的", chinese_romanization: "lěngmò de" },
            { option: "D", answer: "hostile", chinese_answer: "敌对的", chinese_romanization: "díduì de" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'fraternal' means relating to brothers; brotherly." +
            "<br><br>" +
            "(B) 'distant' means far away in space or time." +
            "<br><br>" +
            "(C) 'indifferent' means having no particular interest or sympathy; unconcerned." +
            "<br><br>" +
            "(D) 'hostile' means unfriendly; antagonistic.",
        chinese_explanation: "(A) '兄弟般的' 意味着与兄弟有关的；兄弟般的。" +
            "<br><br>" +
            "(B) '疏远的' 意味着在空间或时间上遥远的。" +
            "<br><br>" +
            "(C) '冷漠的' 意味着没有特别的兴趣或同情；不关心的。" +
            "<br><br>" +
            "(D) '敌对的' 意味着不友好的；对抗的。"
    },
    {
        id: 10,
        question: "To avoid a lengthy legal battle, they decided it was more __________ to settle the dispute out of court.",
        chinese_question: "为了避免漫长的法律纠纷，他们决定庭外和解更为 __________。",
        answers: [
            { option: "A", answer: "impractical", chinese_answer: "不切实际的", chinese_romanization: "bù qiè shíjì de" },
            { option: "B", answer: "costly", chinese_answer: "昂贵的", chinese_romanization: "ángguì de" },
            { option: "C", answer: "idealistic", chinese_answer: "理想主义的", chinese_romanization: "lǐxiǎng zhǔyì de" },
            { option: "D", answer: "expedient", chinese_answer: "权宜的", chinese_romanization: "quányí de" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'expedient' means suitable for achieving a particular end in a given circumstance." +
            "<br><br>" +
            "(A) 'impractical' means not adapted for use or action; not sensible or realistic." +
            "<br><br>" +
            "(B) 'costly' means costing a lot; expensive." +
            "<br><br>" +
            "(C) 'idealistic' means unrealistically aiming for perfection.",
        chinese_explanation: "(D) '权宜的' 意味着适合在给定情况下实现特定目的的。" +
            "<br><br>" +
            "(A) '不切实际的' 意味着不适合使用或行动的；不明智或不现实的。" +
            "<br><br>" +
            "(B) '昂贵的' 意味着花费很多；昂贵的。" +
            "<br><br>" +
            "(C) '理想主义的' 意味着不切实际地追求完美的。"
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
