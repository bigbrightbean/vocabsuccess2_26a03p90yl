// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "They stayed in a __________ hotel with a private beach and five-star amenities.",
        chinese_question: "他们住在一家带有私人海滩和五星级设施的 __________ 酒店。",
        answers: [
            { option: "A", answer: "modest", chinese_answer: "适中的", chinese_romanization: "shìzhōng de" },
            { option: "B", answer: "simple", chinese_answer: "简单的", chinese_romanization: "jiǎndān de" },
            { option: "C", answer: "luxurious", chinese_answer: "奢华的", chinese_romanization: "shēhuá de" },
            { option: "D", answer: "basic", chinese_answer: "基本的", chinese_romanization: "jīběn de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'luxurious' means extremely comfortable, elegant, or enjoyable, especially in a way that involves great expense." +
            "<br><br>" +
            "(A) 'modest' means unassuming or moderate in the estimation of one's abilities or achievements." +
            "<br><br>" +
            "(B) 'simple' means easily understood or done; presenting no difficulty." +
            "<br><br>" +
            "(D) 'basic' means forming an essential foundation or starting point; fundamental.",
        chinese_explanation: "(C) '奢华的' 一词意味着极其舒适、优雅或愉快，尤其是以花费巨大为特征。" +
            "<br><br>" +
            "(A) '适中的' 意味着对自己能力或成就的评价谦虚或适度。" +
            "<br><br>" +
            "(B) '简单的' 意味着容易理解或完成；没有难度的。" +
            "<br><br>" +
            "(D) '基本的' 意味着构成必要的基础或起点的；基本的。"
    },
    {
        id: 2,
        question: "After days of sleepless nights, he appeared __________ and exhausted.",
        chinese_question: "经过几天的不眠之夜，他看起来 __________ 和筋疲力尽。",
        answers: [
            { option: "A", answer: "refreshed", chinese_answer: "精神焕发的", chinese_romanization: "jīngshén huànfā de" },
            { option: "B", answer: "haggard", chinese_answer: "憔悴的", chinese_romanization: "qiáocuì de" },
            { option: "C", answer: "energized", chinese_answer: "精力充沛的", chinese_romanization: "jīnglì chōngpèi de" },
            { option: "D", answer: "lively", chinese_answer: "活泼的", chinese_romanization: "huópō de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'haggard' means looking exhausted and unwell, especially from fatigue, worry, or suffering." +
            "<br><br>" +
            "(A) 'refreshed' means having regained strength or energy." +
            "<br><br>" +
            "(C) 'energized' means give vitality and enthusiasm to." +
            "<br><br>" +
            "(D) 'lively' means full of life and energy; active and outgoing.",
        chinese_explanation: "(B) '憔悴的' 一词意味着看起来疲惫不堪和不健康的，特别是由于疲劳、担忧或痛苦。" +
            "<br><br>" +
            "(A) '精神焕发的' 意味着恢复了力量或精力的。" +
            "<br><br>" +
            "(C) '精力充沛的' 意味着赋予活力和热情。" +
            "<br><br>" +
            "(D) '活泼的' 意味着充满生命力和能量的；活跃和外向的。"
    },
    {
        id: 3,
        question: "Her __________ speech convinced many undecided voters to support her campaign.",
        chinese_question: "她 __________ 的演讲说服了许多犹豫不决的选民支持她的竞选活动。",
        answers: [
            { option: "A", answer: "unconvincing", chinese_answer: "无法说服", chinese_romanization: "wúfǎ shuōfú" },
            { option: "B", answer: "persuasive", chinese_answer: "有说服力", chinese_romanization: "yǒu shuōfú lì" },
            { option: "C", answer: "ambiguous", chinese_answer: "模棱两可", chinese_romanization: "móléng liǎng kě" },
            { option: "D", answer: "indifferent", chinese_answer: "漠不关心", chinese_romanization: "mòbù guānxīn" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'persuasive' means good at persuading someone to do or believe something." +
            "<br><br>" +
            "(A) 'unconvincing' means failing to make someone believe that something is true or valid." +
            "<br><br>" +
            "(C) 'ambiguous' means open to more than one interpretation." +
            "<br><br>" +
            "(D) 'indifferent' means having no particular interest or sympathy.",
        chinese_explanation: "(B) '有说服力' 一词意味着擅长说服某人做或相信某事。" +
            "<br><br>" +
            "(A) '无法说服' 意味着未能让某人相信某事是真实或有效的。" +
            "<br><br>" +
            "(C) '模棱两可' 意味着可以有不止一种解释。" +
            "<br><br>" +
            "(D) '漠不关心' 意味着没有特别的兴趣或同情。"
    },
    {
        id: 4,
        question: "She was __________ of strangers, always keeping a safe distance and avoiding unnecessary conversations.",
        chinese_question: "她对陌生人很 __________，总是保持安全距离，避免不必要的对话。",
        answers: [
            { option: "A", answer: "trusting", chinese_answer: "信任的", chinese_romanization: "xìnrèn de" },
            { option: "B", answer: "reckless", chinese_answer: "鲁莽的", chinese_romanization: "lǔmǎng de" },
            { option: "C", answer: "wary", chinese_answer: "警惕的", chinese_romanization: "jǐngtì de" },
            { option: "D", answer: "indifferent", chinese_answer: "冷漠的", chinese_romanization: "lěngmò de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'wary' means feeling or showing caution about possible dangers or problems." +
            "<br><br>" +
            "(A) 'trusting' means showing or tending to have a belief in a person's honesty or sincerity; not suspicious." +
            "<br><br>" +
            "(B) 'reckless' means without thinking or caring about the consequences of an action." +
            "<br><br>" +
            "(D) 'indifferent' means having no particular interest or sympathy; unconcerned.",
        chinese_explanation: "(C) '警惕的' 意味着对可能的危险或问题感到或表现出谨慎的。" +
            "<br><br>" +
            "(A) '信任的' 意味着表现出或倾向于相信一个人的诚实或真诚；不怀疑的。" +
            "<br><br>" +
            "(B) '鲁莽的' 意味着不考虑行动后果的。" +
            "<br><br>" +
            "(D) '冷漠的' 意味着没有特别的兴趣或同情；不关心的。"
    },
    {
        id: 5,
        question: "The instructions must be __________ to ensure that everyone follows the procedure correctly and safely.",
        chinese_question: "说明必须 __________，以确保每个人都能正确、安全地遵循程序。",
        answers: [
            { option: "A", answer: "vague", chinese_answer: "模糊的", chinese_romanization: "móhú de" },
            { option: "B", answer: "ambiguous", chinese_answer: "含糊的", chinese_romanization: "hánhú de" },
            { option: "C", answer: "precise", chinese_answer: "精确的", chinese_romanization: "jīngquè de" },
            { option: "D", answer: "approximate", chinese_answer: "大概的", chinese_romanization: "dàgài de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'precise' means marked by exactness and accuracy of expression or detail." +
            "<br><br>" +
            "(A) 'vague' means of uncertain, indefinite, or unclear character or meaning." +
            "<br><br>" +
            "(B) 'ambiguous' means open to more than one interpretation; having a double meaning." +
            "<br><br>" +
            "(D) 'approximate' means close to the actual, but not completely accurate or exact.",
        chinese_explanation: "(C) '精确的' 一词意味着表达或细节的准确性和精确性。" +
            "<br><br>" +
            "(A) '模糊的' 意味着性质或意义不确定、不明确或不清楚。" +
            "<br><br>" +
            "(B) '含糊的' 意味着有多种解释的；有双重意义的。" +
            "<br><br>" +
            "(D) '大概的' 意味着接近实际，但不完全准确或精确。"
    },
    {
        id: 6,
        question: "The team conducted a thorough analysis to determine if the proposed plan was __________ and could be successfully implemented.",
        chinese_question: "团队进行了全面分析，以确定所提议的计划是否 __________ 并能成功实施。",
        answers: [
            { option: "A", answer: "impractical", chinese_answer: "不切实际的", chinese_romanization: "bù qiè shíjì de" },
            { option: "B", answer: "feasible", chinese_answer: "可行的", chinese_romanization: "kěxíng de" },
            { option: "C", answer: "unrealistic", chinese_answer: "不现实的", chinese_romanization: "bù xiànshí de" },
            { option: "D", answer: "improbable", chinese_answer: "不大可能的", chinese_romanization: "bù dà kěnéng de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'feasible' means possible to do easily or conveniently." +
            "<br><br>" +
            "(A) 'impractical' means not adapted for use or action; not sensible or realistic." +
            "<br><br>" +
            "(C) 'unrealistic' means not having or showing a sensible and practical idea of what can be achieved or expected." +
            "<br><br>" +
            "(D) 'improbable' means not likely to be true or to happen.",
        chinese_explanation: "(B) '可行的' 一词意味着容易或方便地做到的。" +
            "<br><br>" +
            "(A) '不切实际的' 意味着不适合使用或行动；不明智或不现实的。" +
            "<br><br>" +
            "(C) '不现实的' 意味着没有或没有显示出对可以实现或期望的事情的明智和实际的想法。" +
            "<br><br>" +
            "(D) '不大可能的' 意味着不可能是真的或发生的。"
    },
    {
        id: 7,
        question: "Her __________ observations during the meeting helped identify potential problems before they escalated.",
        chinese_question: "她在会议上的 __________ 观察帮助识别了潜在问题，防止它们升级。",
        answers: [
            { option: "A", answer: "careless", chinese_answer: "粗心的", chinese_romanization: "cūxīn de" },
            { option: "B", answer: "astute", chinese_answer: "精明的", chinese_romanization: "jīngmíng de" },
            { option: "C", answer: "oblivious", chinese_answer: "浑然不觉的", chinese_romanization: "húnrán bù jué de" },
            { option: "D", answer: "naive", chinese_answer: "天真的", chinese_romanization: "tiānzhēn de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'astute' means having or showing an ability to accurately assess situations or people and turn this to one's advantage." +
            "<br><br>" +
            "(A) 'careless' means not giving sufficient attention or thought to avoiding harm or errors." +
            "<br><br>" +
            "(C) 'oblivious' means not aware of or not concerned about what is happening around one." +
            "<br><br>" +
            "(D) 'naive' means showing a lack of experience, wisdom, or judgment.",
        chinese_explanation: "(B) '精明的' 一词意味着具有或表现出准确评估情况或人物的能力，并将其转为自己的优势。" +
            "<br><br>" +
            "(A) '粗心的' 意味着未给予充分的注意或考虑以避免伤害或错误的。" +
            "<br><br>" +
            "(C) '浑然不觉的' 意味着没有意识到或不关心周围发生的事情。" +
            "<br><br>" +
            "(D) '天真的' 意味着缺乏经验、智慧或判断力。"
    },
    {
        id: 8,
        question: "Her __________ disregard for the rules shocked everyone at the formal event.",
        chinese_question: "她对规则的 __________ 无视让所有在正式活动中的人都感到震惊。",
        answers: [
            { option: "A", answer: "modest", chinese_answer: "谦虚的", chinese_romanization: "qiānxū de" },
            { option: "B", answer: "cautious", chinese_answer: "谨慎的", chinese_romanization: "jǐnshèn de" },
            { option: "C", answer: "brazen", chinese_answer: "厚颜无耻的", chinese_romanization: "hòuyán wúchǐ de" },
            { option: "D", answer: "timid", chinese_answer: "胆小的", chinese_romanization: "dǎnxiǎo de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'brazen' means bold and without shame." +
            "<br><br>" +
            "(A) 'modest' means unassuming in the estimation of one's abilities or achievements." +
            "<br><br>" +
            "(B) 'cautious' means careful to avoid potential problems or dangers." +
            "<br><br>" +
            "(D) 'timid' means showing a lack of courage or confidence; easily frightened.",
        chinese_explanation: "(C) '厚颜无耻的' 一词意味着大胆且无羞耻的。" +
            "<br><br>" +
            "(A) '谦虚的' 意味着对自己的能力或成就不过分自信的。" +
            "<br><br>" +
            "(B) '谨慎的' 意味着小心避免潜在问题或危险的。" +
            "<br><br>" +
            "(D) '胆小的' 意味着缺乏勇气或信心；容易受惊的。"
    },
    {
        id: 9,
        question: "The stray dog was __________, with ribs showing and a look of exhaustion in its eyes.",
        chinese_question: "流浪狗很 __________，肋骨突出，眼中流露出疲惫。",
        answers: [
            { option: "A", answer: "healthy", chinese_answer: "健康的", chinese_romanization: "jiànkāng de" },
            { option: "B", answer: "plump", chinese_answer: "丰满的", chinese_romanization: "fēngmǎn de" },
            { option: "C", answer: "gaunt", chinese_answer: "憔悴的", chinese_romanization: "qiáocuì de" },
            { option: "D", answer: "robust", chinese_answer: "强壮的", chinese_romanization: "qiángzhuàng de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'gaunt' means lean and haggard, especially because of suffering, hunger, or age." +
            "<br><br>" +
            "(A) 'healthy' means in good health." +
            "<br><br>" +
            "(B) 'plump' means having a full rounded shape." +
            "<br><br>" +
            "(D) 'robust' means strong and healthy.",
        chinese_explanation: "(C) '憔悴的' 一词意味着瘦且憔悴的，尤其是因为痛苦、饥饿或年龄。" +
            "<br><br>" +
            "(A) '健康的' 意味着身体健康。" +
            "<br><br>" +
            "(B) '丰满的' 意味着有一个丰满的圆形。" +
            "<br><br>" +
            "(D) '强壮的' 意味着强壮和健康的。"
    },
    {
        id: 10,
        question: "Having connections in the industry is __________ when trying to secure a job.",
        chinese_question: "在试图获得工作时，在行业内有关系是 __________ 的。",
        answers: [
            { option: "A", answer: "advantageous", chinese_answer: "有利", chinese_romanization: "yǒulì" },
            { option: "B", answer: "detrimental", chinese_answer: "有害", chinese_romanization: "yǒuhài" },
            { option: "C", answer: "negligible", chinese_answer: "微不足道", chinese_romanization: "wēibùzúdào" },
            { option: "D", answer: "trivial", chinese_answer: "不重要", chinese_romanization: "bù zhòngyào" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'advantageous' means beneficial or giving an advantage." +
            "<br><br>" +
            "(B) 'detrimental' means harmful." +
            "<br><br>" +
            "(C) 'negligible' means insignificant." +
            "<br><br>" +
            "(D) 'trivial' means unimportant.",
        chinese_explanation: "(A) '有利' 意味着有益或带来优势。" +
            "<br><br>" +
            "(B) '有害' 意味着有害。" +
            "<br><br>" +
            "(C) '微不足道' 意味着不重要。" +
            "<br><br>" +
            "(D) '不重要' 意味着无关紧要。"
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
