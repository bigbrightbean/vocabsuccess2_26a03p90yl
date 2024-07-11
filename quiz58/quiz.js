// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "The earthquake was a __________ that left the entire city in ruins and many people homeless.",
        chinese_question: "地震是一场 __________，使整个城市变成废墟，许多人无家可归。",
        answers: [
            { option: "A", answer: "success", chinese_answer: "成功", chinese_romanization: "chénggōng" },
            { option: "B", answer: "miracle", chinese_answer: "奇迹", chinese_romanization: "qíjī" },
            { option: "C", answer: "catastrophe", chinese_answer: "灾难", chinese_romanization: "zāinàn" },
            { option: "D", answer: "triumph", chinese_answer: "胜利", chinese_romanization: "shènglì" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'catastrophe' means an event causing great and often sudden damage or suffering; a disaster." +
            "<br><br>" +
            "(A) 'success' means the accomplishment of an aim or purpose." +
            "<br><br>" +
            "(B) 'miracle' means an extraordinary event that is not explicable by natural or scientific laws." +
            "<br><br>" +
            "(D) 'triumph' means a great victory or achievement.",
        chinese_explanation: "(C) '灾难' 一词意味着造成巨大且通常是突然的破坏或痛苦的事件；灾害。" +
            "<br><br>" +
            "(A) '成功' 意味着实现目标或目的。" +
            "<br><br>" +
            "(B) '奇迹' 意味着无法用自然或科学规律解释的非凡事件。" +
            "<br><br>" +
            "(D) '胜利' 意味着伟大的胜利或成就。"
    },
    {
        id: 2,
        question: "The company's high rate of __________ has led to decreased productivity and increased costs.",
        chinese_question: "公司高 __________ 率导致生产力下降和成本增加。",
        answers: [
            { option: "A", answer: "attendance", chinese_answer: "出勤", chinese_romanization: "chūqín" },
            { option: "B", answer: "absenteeism", chinese_answer: "旷工", chinese_romanization: "kuànggōng" },
            { option: "C", answer: "efficiency", chinese_answer: "效率", chinese_romanization: "xiàolǜ" },
            { option: "D", answer: "presence", chinese_answer: "出席", chinese_romanization: "chūxí" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'absenteeism' means the practice of regularly staying away from work or school without good reason." +
            "<br><br>" +
            "(A) 'attendance' means the action or state of going regularly to or being present at a place or event." +
            "<br><br>" +
            "(C) 'efficiency' means the state or quality of being efficient." +
            "<br><br>" +
            "(D) 'presence' means the state or fact of existing, occurring, or being present in a place or thing.",
        chinese_explanation: "(B) '旷工' 一词意味着没有正当理由而经常缺勤。" +
            "<br><br>" +
            "(A) '出勤' 意味着定期去或出席某个地方或事件的行为或状态。" +
            "<br><br>" +
            "(C) '效率' 意味着高效的状态或质量。" +
            "<br><br>" +
            "(D) '出席' 意味着存在、发生或出现在某个地方或事物中的状态或事实。"
    },
    {
        id: 3,
        question: "The high school was known for its exclusive __________, which often excluded new students from social activities.",
        chinese_question: "这所高中以其排外的 __________ 而闻名，往往将新生排除在社交活动之外。",
        answers: [
            { option: "A", answer: "community", chinese_answer: "社区", chinese_romanization: "shèqū" },
            { option: "B", answer: "clique", chinese_answer: "小团体", chinese_romanization: "xiǎo tuántǐ" },
            { option: "C", answer: "club", chinese_answer: "俱乐部", chinese_romanization: "jùlèbù" },
            { option: "D", answer: "team", chinese_answer: "团队", chinese_romanization: "tuánduì" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'clique' means a small group of people, with shared interests or other features in common, who spend time together and do not readily allow others to join them." +
            "<br><br>" +
            "(A) 'community' means a group of people living in the same place or having a particular characteristic in common." +
            "<br><br>" +
            "(C) 'club' means an association dedicated to a particular interest or activity." +
            "<br><br>" +
            "(D) 'team' means a group of players forming one side in a competitive game or sport.",
        chinese_explanation: "(B) '小团体' 一词意味着一小群人，他们有共同的兴趣或其他共同特征，彼此相处，不容易让其他人加入他们。" +
            "<br><br>" +
            "(A) '社区' 意味着居住在同一地方或有共同特征的一群人。" +
            "<br><br>" +
            "(C) '俱乐部' 意味着致力于特定兴趣或活动的协会。" +
            "<br><br>" +
            "(D) '团队' 意味着在竞争性游戏或运动中组成一方的一组球员。"
    },
    {
        id: 4,
        question: "Winning the lottery brought him a sense of __________ he had never felt before.",
        chinese_question: "中奖给他带来了前所未有的 __________ 感。",
        answers: [
            { option: "A", answer: "sadness", chinese_answer: "悲伤", chinese_romanization: "bēishāng" },
            { option: "B", answer: "euphoria", chinese_answer: "兴奋", chinese_romanization: "xīngfèn" },
            { option: "C", answer: "anxiety", chinese_answer: "焦虑", chinese_romanization: "jiāolǜ" },
            { option: "D", answer: "fear", chinese_answer: "恐惧", chinese_romanization: "kǒngjù" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'euphoria' means a feeling or state of intense excitement and happiness." +
            "<br><br>" +
            "(A) 'sadness' means the condition or quality of being sad." +
            "<br><br>" +
            "(C) 'anxiety' means a feeling of worry, nervousness, or unease." +
            "<br><br>" +
            "(D) 'fear' means an unpleasant emotion caused by the belief that someone or something is dangerous, likely to cause pain, or a threat.",
        chinese_explanation: "(B) '兴奋' 一词意味着一种强烈的兴奋和幸福的感觉或状态。" +
            "<br><br>" +
            "(A) '悲伤' 意味着悲伤的状态或质量。" +
            "<br><br>" +
            "(C) '焦虑' 意味着担心、紧张或不安的感觉。" +
            "<br><br>" +
            "(D) '恐惧' 意味着由相信某人或某事危险、可能引起疼痛或构成威胁引起的不愉快情绪。"
    },
    {
        id: 5,
        question: "The poet used __________ to give human qualities to the wind, describing it as whispering secrets to the trees.",
        chinese_question: "诗人使用 __________ 把风赋予了人类的品质，描述它在向树木低语秘密。",
        answers: [
            { option: "A", answer: "metaphor", chinese_answer: "隐喻", chinese_romanization: "yǐnyù" },
            { option: "B", answer: "simile", chinese_answer: "明喻", chinese_romanization: "míngyù" },
            { option: "C", answer: "personification", chinese_answer: "拟人", chinese_romanization: "nǐrén" },
            { option: "D", answer: "hyperbole", chinese_answer: "夸张", chinese_romanization: "kuāzhāng" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'personification' means the attribution of a personal nature or human characteristics to something non-human." +
            "<br><br>" +
            "(A) 'metaphor' means a figure of speech in which a word or phrase is applied to an object or action to which it is not literally applicable." +
            "<br><br>" +
            "(B) 'simile' means a figure of speech involving the comparison of one thing with another thing of a different kind." +
            "<br><br>" +
            "(D) 'hyperbole' means exaggerated statements or claims not meant to be taken literally.",
        chinese_explanation: "(C) '拟人' 一词意味着将人类的性质或特征赋予非人类事物。" +
            "<br><br>" +
            "(A) '隐喻' 意味着将一个词或短语应用于不是字面上适用的对象或行动的比喻。" +
            "<br><br>" +
            "(B) '明喻' 意味着涉及将一种事物与另一种不同种类的事物进行比较的比喻。" +
            "<br><br>" +
            "(D) '夸张' 意味着不打算字面理解的夸大陈述或说法。"
    },
    {
        id: 6,
        question: "Every time she heard the old song, she was filled with a sense of __________, recalling her childhood memories.",
        chinese_question: "每当她听到那首老歌，她就充满了 __________，回忆起她的童年。",
        answers: [
            { option: "A", answer: "indifference", chinese_answer: "无动于衷", chinese_romanization: "wúdòngyúzhōng" },
            { option: "B", answer: "frustration", chinese_answer: "挫折感", chinese_romanization: "cuòzhé gǎn" },
            { option: "C", answer: "nostalgia", chinese_answer: "怀旧", chinese_romanization: "huáijiù" },
            { option: "D", answer: "excitement", chinese_answer: "兴奋", chinese_romanization: "xīngfèn" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'nostalgia' means a sentimental longing or wistful affection for the past." +
            "<br><br>" +
            "(A) 'indifference' means lack of interest, concern, or sympathy." +
            "<br><br>" +
            "(B) 'frustration' means the feeling of being upset or annoyed, especially because of inability to change or achieve something." +
            "<br><br>" +
            "(D) 'excitement' means a feeling of great enthusiasm and eagerness.",
        chinese_explanation: "(C) '怀旧' 一词意味着对过去的怀念或恋慕。" +
            "<br><br>" +
            "(A) '无动于衷' 意味着缺乏兴趣、关心或同情。" +
            "<br><br>" +
            "(B) '挫折感' 意味着因无法改变或实现某事而感到沮丧或恼怒。" +
            "<br><br>" +
            "(D) '兴奋' 意味着极大的热情和热切的感觉。"
    },
    {
        id: 7,
        question: "She gave him a __________ that clearly showed her disapproval of his actions.",
        chinese_question: "她给了他一个__________，明显表明她对他的行为不满。",
        answers: [
            { option: "A", answer: "smile", chinese_answer: "微笑", chinese_romanization: "wēixiào" },
            { option: "B", answer: "glare", chinese_answer: "怒视", chinese_romanization: "nùshì" },
            { option: "C", answer: "nod", chinese_answer: "点头", chinese_romanization: "diǎntóu" },
            { option: "D", answer: "wink", chinese_answer: "眨眼", chinese_romanization: "zhǎyǎn" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'glare' means a very bright and unpleasant light. Figuratively, it can mean an angry or fierce look." +
            "<br><br>" +
            "(A) 'smile' means a pleased, kind, or amused expression." +
            "<br><br>" +
            "(C) 'nod' means to lower and raise one's head slightly and briefly, especially in greeting, assent, or understanding." +
            "<br><br>" +
            "(D) 'wink' means to close and open one eye quickly, typically as a signal.",
        chinese_explanation: "(B) '怒视'一词意味着非常明亮和不愉快的光。比喻地，它可以表示愤怒或激烈的表情。" +
            "<br><br>" +
            "(A) '微笑' 意味着愉快、友好或愉悦的表情。" +
            "<br><br>" +
            "(C) '点头' 意味着轻微而短暂地低下和抬起头，尤其是在问候、同意或理解时。" +
            "<br><br>" +
            "(D) '眨眼' 意味着快速闭合和打开一只眼睛，通常作为信号。"
    },
    {
        id: 8,
        question: "In __________, she realized that the decision she made years ago was actually the best one.",
        chinese_question: "回想起来，她意识到她多年前做的决定实际上是最好的。",
        answers: [
            { option: "A", answer: "anticipation", chinese_answer: "期待", chinese_romanization: "qídài" },
            { option: "B", answer: "retrospect", chinese_answer: "回顾", chinese_romanization: "huígù" },
            { option: "C", answer: "foresight", chinese_answer: "预见", chinese_romanization: "yùjiàn" },
            { option: "D", answer: "expectation", chinese_answer: "预期", chinese_romanization: "yùqī" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'retrospect' means a survey or review of a past course of events or period of time." +
            "<br><br>" +
            "(A) 'anticipation' means the action of anticipating something; expectation or prediction." +
            "<br><br>" +
            "(C) 'foresight' means the ability to predict or the action of predicting what will happen or be needed in the future." +
            "<br><br>" +
            "(D) 'expectation' means a strong belief that something will happen or be the case in the future.",
        chinese_explanation: "(B) '回顾' 一词意味着对过去事件或时期的回顾或审查。" +
            "<br><br>" +
            "(A) '期待' 意味着预期某事的行动；预期或预测。" +
            "<br><br>" +
            "(C) '预见' 意味着预测或预测未来将会发生什么或需要什么的能力。" +
            "<br><br>" +
            "(D) '预期' 意味着强烈相信将来会发生某事或成为现实。"
    },
    {
        id: 9,
        question: "The economic policies were designed to ensure the nation's __________, aiming for sustainable growth and stability.",
        chinese_question: "经济政策旨在确保国家的 __________，以实现可持续增长和稳定。",
        answers: [
            { option: "A", answer: "decline", chinese_answer: "衰退", chinese_romanization: "shuāituì" },
            { option: "B", answer: "poverty", chinese_answer: "贫困", chinese_romanization: "pínkùn" },
            { option: "C", answer: "prosperity", chinese_answer: "繁荣", chinese_romanization: "fánróng" },
            { option: "D", answer: "stagnation", chinese_answer: "停滞", chinese_romanization: "tíngzhì" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'prosperity' means the state of being prosperous." +
            "<br><br>" +
            "(A) 'decline' means a gradual and continuous loss of strength, numbers, quality, or value." +
            "<br><br>" +
            "(B) 'poverty' means the state of being extremely poor." +
            "<br><br>" +
            "(D) 'stagnation' means the state of not flowing or moving.",
        chinese_explanation: "(C) '繁荣' 一词意味着繁荣的状态。" +
            "<br><br>" +
            "(A) '衰退' 意味着逐渐和持续的力量、数量、质量或价值的丧失。" +
            "<br><br>" +
            "(B) '贫困' 意味着极度贫穷的状态。" +
            "<br><br>" +
            "(D) '停滞' 意味着不流动或不移动的状态。"
    },
    {
        id: 10,
        question: "After hours of continuous work, a wave of __________ washed over him, making it hard to stay focused.",
        chinese_question: "连续工作数小时后，一阵 __________ 向他袭来，使他难以保持专注。",
        answers: [
            { option: "A", answer: "energy", chinese_answer: "精力", chinese_romanization: "jīnglì" },
            { option: "B", answer: "alertness", chinese_answer: "警觉", chinese_romanization: "jǐngjué" },
            { option: "C", answer: "fatigue", chinese_answer: "疲劳", chinese_romanization: "píláo" },
            { option: "D", answer: "enthusiasm", chinese_answer: "热情", chinese_romanization: "rèqíng" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'fatigue' means extreme tiredness resulting from mental or physical exertion or illness." +
            "<br><br>" +
            "(A) 'energy' means the strength and vitality required for sustained physical or mental activity." +
            "<br><br>" +
            "(B) 'alertness' means the quality of being alert." +
            "<br><br>" +
            "(D) 'enthusiasm' means intense and eager enjoyment, interest, or approval.",
        chinese_explanation: "(C) '疲劳' 意味着由于精神或身体劳累或疾病而导致的极度疲倦。" +
            "<br><br>" +
            "(A) '精力' 意味着持续身体或精神活动所需的力量和活力。" +
            "<br><br>" +
            "(B) '警觉' 意味着警觉的质量。" +
            "<br><br>" +
            "(D) '热情' 意味着强烈和热切的愉悦、兴趣或认可。"
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
