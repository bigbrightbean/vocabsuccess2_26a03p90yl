// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "The __________ memories of her childhood adventures remained with her throughout her life, never fading.",
        chinese_question: "她童年冒险的 __________ 记忆一直伴随着她，永不消退。",
        answers: [
            { option: "A", answer: "indelible", chinese_answer: "难忘的", chinese_romanization: "nánwàng de" },
            { option: "B", answer: "fleeting", chinese_answer: "短暂的", chinese_romanization: "duǎnzàn de" },
            { option: "C", answer: "temporary", chinese_answer: "暂时的", chinese_romanization: "zànshí de" },
            { option: "D", answer: "erasable", chinese_answer: "可抹去的", chinese_romanization: "kě mǒqù de" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'indelible' means making marks that cannot be removed or forgotten." +
            "<br><br>" +
            "(B) 'fleeting' means lasting for a very short time." +
            "<br><br>" +
            "(C) 'temporary' means lasting for only a limited period of time." +
            "<br><br>" +
            "(D) 'erasable' means able to be erased or removed.",
        chinese_explanation: "(A) '难忘的' 意味着留下无法消除或遗忘的痕迹。" +
            "<br><br>" +
            "(B) '短暂的' 意味着持续时间很短的。" +
            "<br><br>" +
            "(C) '暂时的' 意味着仅持续有限时间的。" +
            "<br><br>" +
            "(D) '可抹去的' 意味着能够被擦除或移除的。"
    },
    {
        id: 2,
        question: "Her __________ move to quit her job and start her own business inspired many of her colleagues.",
        chinese_question: "她 __________ 地辞掉工作并创业的举动激励了许多同事。",
        answers: [
            { option: "A", answer: "bold", chinese_answer: "大胆的", chinese_romanization: "dàdǎn de" },
            { option: "B", answer: "fearful", chinese_answer: "恐惧的", chinese_romanization: "kǒngjù de" },
            { option: "C", answer: "hesitant", chinese_answer: "犹豫的", chinese_romanization: "yóuyù de" },
            { option: "D", answer: "insecure", chinese_answer: "不安的", chinese_romanization: "bù'ān de" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'bold' means showing a willingness to take risks; confident and courageous." +
            "<br><br>" +
            "(B) 'fearful' means feeling afraid or anxious." +
            "<br><br>" +
            "(C) 'hesitant' means tentative, unsure, or slow in acting or speaking." +
            "<br><br>" +
            "(D) 'insecure' means not confident or assured; uncertain and anxious.",
        chinese_explanation: "(A) '大胆的' 意味着表现出愿意冒险的精神；自信和勇敢的。" +
            "<br><br>" +
            "(B) '恐惧的' 意味着感到害怕或焦虑的。" +
            "<br><br>" +
            "(C) '犹豫的' 意味着犹豫不决、不确定或行动或说话缓慢的。" +
            "<br><br>" +
            "(D) '不安的' 意味着不自信或不确定的；不安和焦虑的。"
    },
    {
        id: 3,
        question: "Her __________ performance at work made it difficult for her manager to rely on her for important tasks.",
        chinese_question: "她在工作中的 __________ 表现让她的经理难以依赖她完成重要任务。",
        answers: [
            { option: "A", answer: "dependable", chinese_answer: "可信赖的", chinese_romanization: "kě xìnlài de" },
            { option: "B", answer: "reliable", chinese_answer: "可靠的", chinese_romanization: "kěkào de" },
            { option: "C", answer: "steady", chinese_answer: "稳定的", chinese_romanization: "wěndìng de" },
            { option: "D", answer: "inconsistent", chinese_answer: "不一致的", chinese_romanization: "bù yīzhì de" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'inconsistent' means not staying the same throughout." +
            "<br><br>" +
            "(A) 'dependable' means trustworthy and reliable." +
            "<br><br>" +
            "(B) 'reliable' means consistently good in quality or performance; able to be trusted." +
            "<br><br>" +
            "(C) 'steady' means firmly fixed, supported, or balanced; not shaking or moving.",
        chinese_explanation: "(D) '不一致的' 意味着始终不一样的。" +
            "<br><br>" +
            "(A) '可信赖的' 意味着值得信赖的。" +
            "<br><br>" +
            "(B) '可靠的' 意味着在质量或性能上始终如一的；值得信赖的。" +
            "<br><br>" +
            "(C) '稳定的' 意味着牢固固定的、支持的或平衡的；不摇晃或移动的。"
    },
    {
        id: 4,
        question: "The writer's __________ career spanned over five decades, earning her numerous awards and worldwide recognition.",
        chinese_question: "这位作家的 __________ 职业生涯跨越了五十多年，赢得了无数奖项和全球认可。",
        answers: [
            { option: "A", answer: "illustrious", chinese_answer: "杰出的", chinese_romanization: "jiéchū de" },
            { option: "B", answer: "obscure", chinese_answer: "默默无闻的", chinese_romanization: "mòmòwúwén de" },
            { option: "C", answer: "unremarkable", chinese_answer: "平凡的", chinese_romanization: "píngfán de" },
            { option: "D", answer: "unknown", chinese_answer: "未知的", chinese_romanization: "wèizhī de" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'illustrious' means well known, respected, and admired for past achievements." +
            "<br><br>" +
            "(B) 'obscure' means not well known; not easily understood." +
            "<br><br>" +
            "(C) 'unremarkable' means not particularly interesting or surprising." +
            "<br><br>" +
            "(D) 'unknown' means not known or familiar.",
        chinese_explanation: "(A) '杰出的' 意味着因过去的成就而著名、受人尊敬和钦佩的。" +
            "<br><br>" +
            "(B) '默默无闻的' 意味着不知名的；不容易理解的。" +
            "<br><br>" +
            "(C) '平凡的' 意味着不特别有趣或令人惊讶的。" +
            "<br><br>" +
            "(D) '未知的' 意味着不为人知或不熟悉的。"
    },
    {
        id: 5,
        question: "The hospital maintained __________ conditions to ensure the health and safety of its patients.",
        chinese_question: "医院保持__________的条件，以确保患者的健康和安全。",
        answers: [
            { option: "A", answer: "dirty", chinese_answer: "肮脏的", chinese_romanization: "āngzāng de" },
            { option: "B", answer: "unhygienic", chinese_answer: "不卫生的", chinese_romanization: "bù wèishēng de" },
            { option: "C", answer: "hygienic", chinese_answer: "卫生的", chinese_romanization: "wèishēng de" },
            { option: "D", answer: "filthy", chinese_answer: "污秽的", chinese_romanization: "wūhuì de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'hygienic' means conducive to maintaining health and preventing disease, especially by being clean." +
            "<br><br>" +
            "(A) 'dirty' means covered or marked with an unclean substance." +
            "<br><br>" +
            "(B) 'unhygienic' means not clean or sanitary." +
            "<br><br>" +
            "(D) 'filthy' means disgustingly dirty.",
        chinese_explanation: "(C) '卫生的'一词意味着有助于保持健康和预防疾病，尤其是通过保持清洁。" +
            "<br><br>" +
            "(A) '肮脏的' 意味着覆盖或标记着不干净的物质。" +
            "<br><br>" +
            "(B) '不卫生的' 意味着不干净或不卫生的。" +
            "<br><br>" +
            "(D) '污秽的' 意味着肮脏的。"
    },
    {
        id: 6,
        question: "Her __________ taste in fashion was evident from her perfectly coordinated outfits.",
        chinese_question: "她对时尚的 __________ 品味从她完美搭配的服装中可见一斑。",
        answers: [
            { option: "A", answer: "flawed", chinese_answer: "有缺陷", chinese_romanization: "yǒu quēxiàn" },
            { option: "B", answer: "impeccable", chinese_answer: "无可挑剔", chinese_romanization: "wú kě tiāotì" },
            { option: "C", answer: "imperfect", chinese_answer: "不完美", chinese_romanization: "bù wánměi" },
            { option: "D", answer: "defective", chinese_answer: "有缺陷", chinese_romanization: "yǒu quēxiàn" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'impeccable' means in accordance with the highest standards; faultless." +
            "<br><br>" +
            "(A) 'flawed' means blemished, damaged, or imperfect in some way." +
            "<br><br>" +
            "(C) 'imperfect' means not perfect; faulty or incomplete." +
            "<br><br>" +
            "(D) 'defective' means imperfect or faulty.",
        chinese_explanation: "(B) '无可挑剔' 意味着符合最高标准；无可挑剔的。" +
            "<br><br>" +
            "(A) '有缺陷' 意味着在某种程度上有瑕疵、损坏或不完美。" +
            "<br><br>" +
            "(C) '不完美' 意味着不完美；有缺陷或不完整。" +
            "<br><br>" +
            "(D) '有缺陷' 意味着不完美或有缺陷的。"
    },
    {
        id: 7,
        question: "The team's victory was so __________ that even their most loyal fans were stunned when they won the championship.",
        chinese_question: "球队的胜利是如此 __________，甚至他们最忠实的球迷在他们赢得冠军时也感到震惊。",
        answers: [
            { option: "A", answer: "improbable", chinese_answer: "不太可能的", chinese_romanization: "bùtài kěnéng de" },
            { option: "B", answer: "predictable", chinese_answer: "可预测的", chinese_romanization: "kě yùcè de" },
            { option: "C", answer: "assured", chinese_answer: "确定的", chinese_romanization: "quèdìng de" },
            { option: "D", answer: "guaranteed", chinese_answer: "有保障的", chinese_romanization: "yǒu bǎozhàng de" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'improbable' means not likely to be true or to happen." +
            "<br><br>" +
            "(B) 'predictable' means able to be predicted." +
            "<br><br>" +
            "(C) 'assured' means certain to happen; guaranteed." +
            "<br><br>" +
            "(D) 'guaranteed' means certain to happen or be achieved.",
        chinese_explanation: "(A) '不太可能的' 意味着不太可能是真的或发生的。" +
            "<br><br>" +
            "(B) '可预测的' 意味着能够被预测的。" +
            "<br><br>" +
            "(C) '确定的' 意味着一定会发生的；有保障的。" +
            "<br><br>" +
            "(D) '有保障的' 意味着一定会发生或实现的。"
    },
    {
        id: 8,

        question: "Despite the economic downturn, she remained __________, always optimistic about the future.",
        chinese_question: "尽管经济衰退，她仍然 __________，总是对未来充满乐观。",
        answers: [
            { option: "A", answer: "pessimistic", chinese_answer: "悲观", chinese_romanization: "bēiguān" },
            { option: "B", answer: "buoyant", chinese_answer: "乐观", chinese_romanization: "lèguān" },
            { option: "C", answer: "discouraged", chinese_answer: "灰心", chinese_romanization: "huīxīn" },
            { option: "D", answer: "gloomy", chinese_answer: "阴暗", chinese_romanization: "yīn'àn" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'buoyant' means cheerful and optimistic." +
            "<br><br>" +
            "(A) 'pessimistic' means tending to see the worst aspect of things or believe that the worst will happen." +
            "<br><br>" +
            "(C) 'discouraged' means having lost confidence or enthusiasm." +
            "<br><br>" +
            "(D) 'gloomy' means dark or poorly lit, especially so as to appear depressing or frightening.",
        chinese_explanation: "(B) '乐观' 意味着充满欢欣和乐观。" +
            "<br><br>" +
            "(A) '悲观' 意味着倾向于看到事物的最坏方面或相信最坏的情况将会发生。" +
            "<br><br>" +
            "(C) '灰心' 意味着失去信心或热情。" +
            "<br><br>" +
            "(D) '阴暗' 意味着黑暗或光线不足，尤其是显得令人沮丧或害怕。"
    },
    {
        id: 9,
        question: "The __________ organization provided food, shelter, and medical care to those in need, showing compassion and generosity.",
        chinese_question: "这个 __________ 的组织为有需要的人提供食物、住所和医疗护理，表现出同情和慷慨。",
        answers: [
            { option: "A", answer: "charitable", chinese_answer: "慈善的", chinese_romanization: "císhàn de" },
            { option: "B", answer: "selfish", chinese_answer: "自私的", chinese_romanization: "zìsī de" },
            { option: "C", answer: "indifferent", chinese_answer: "冷漠的", chinese_romanization: "lěngmò de" },
            { option: "D", answer: "stingy", chinese_answer: "吝啬的", chinese_romanization: "lìnsè de" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'charitable' means relating to the assistance of those in need." +
            "<br><br>" +
            "(B) 'selfish' means lacking consideration for others; concerned chiefly with one's own personal profit or pleasure." +
            "<br><br>" +
            "(C) 'indifferent' means having no particular interest or sympathy; unconcerned." +
            "<br><br>" +
            "(D) 'stingy' means unwilling to give or spend; ungenerous.",
        chinese_explanation: "(A) '慈善的' 意味着与帮助有需要的人有关的。" +
            "<br><br>" +
            "(B) '自私的' 意味着缺乏对他人的考虑；主要关心自己的个人利益或快乐。" +
            "<br><br>" +
            "(C) '冷漠的' 意味着没有特别的兴趣或同情；不关心的。" +
            "<br><br>" +
            "(D) '吝啬的' 意味着不愿给予或花费；小气的。"
    },
    {
        id: 10,
        question: "The __________ event included formal speeches, elaborate decorations, and a strict dress code.",
        chinese_question: "这个 __________ 的活动包括正式演讲、精美装饰和严格的着装要求。",
        answers: [
            { option: "A", answer: "ceremonious", chinese_answer: "隆重的", chinese_romanization: "lóngzhòng de" },
            { option: "B", answer: "casual", chinese_answer: "随意的", chinese_romanization: "suíyì de" },
            { option: "C", answer: "informal", chinese_answer: "非正式的", chinese_romanization: "fēi zhèngshì de" },
            { option: "D", answer: "simple", chinese_answer: "简单的", chinese_romanization: "jiǎndān de" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'ceremonious' means relating or appropriate to grand and formal occasions." +
            "<br><br>" +
            "(B) 'casual' means relaxed and unconcerned." +
            "<br><br>" +
            "(C) 'informal' means having a relaxed, friendly, or unofficial style, manner, or nature." +
            "<br><br>" +
            "(D) 'simple' means easily understood or done; presenting no difficulty.",
        chinese_explanation: "(A) '隆重的' 意味着与盛大和正式场合有关或适合的。" +
            "<br><br>" +
            "(B) '随意的' 意味着放松和不拘礼节的。" +
            "<br><br>" +
            "(C) '非正式的' 意味着具有放松、友好或非正式的风格、方式或性质的。" +
            "<br><br>" +
            "(D) '简单的' 意味着容易理解或完成的；没有难度的。"
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
