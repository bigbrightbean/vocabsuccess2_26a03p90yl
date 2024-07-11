// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "The research findings were __________, offering new insights into the treatment of the disease.",
        chinese_question: "研究结果非常__________，为疾病的治疗提供了新的见解。",
        answers: [
            { option: "A", answer: "insignificant", chinese_answer: "无关紧要的", chinese_romanization: "wúguān jǐn yào de" },
            { option: "B", answer: "irrelevant", chinese_answer: "无关的", chinese_romanization: "wúguān de" },
            { option: "C", answer: "significant", chinese_answer: "重要的", chinese_romanization: "zhòngyào de" },
            { option: "D", answer: "trivial", chinese_answer: "微不足道的", chinese_romanization: "wēibùzúdào de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'significant' means sufficiently great or important to be worthy of attention." +
            "<br><br>" +
            "(A) 'insignificant' means too small or unimportant to be worth consideration." +
            "<br><br>" +
            "(B) 'irrelevant' means not connected with something." +
            "<br><br>" +
            "(D) 'trivial' means of little value or importance.",
        chinese_explanation: "(C) '重要的'一词意味着足够大或重要，值得关注。" +
            "<br><br>" +
            "(A) '无关紧要的' 意味着太小或不重要，不值得考虑。" +
            "<br><br>" +
            "(B) '无关的' 意味着与某事无关。" +
            "<br><br>" +
            "(D) '微不足道的' 意味着价值或重要性很小。"
    },
    {
        id: 2,
        question: "The birds' __________ songs filled the morning air, creating a peaceful atmosphere in the garden.",
        chinese_question: "鸟儿们 __________ 的歌声充满了早晨的空气，在花园里营造了宁静的氛围。",
        answers: [
            { option: "A", answer: "discordant", chinese_answer: "不和谐的", chinese_romanization: "bù héxié de" },
            { option: "B", answer: "harsh", chinese_answer: "刺耳的", chinese_romanization: "cì'ěr de" },
            { option: "C", answer: "melodious", chinese_answer: "悦耳的", chinese_romanization: "yuè'ěr de" },
            { option: "D", answer: "noisy", chinese_answer: "吵闹的", chinese_romanization: "chǎonào de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'melodious' means having a pleasant melody." +
            "<br><br>" +
            "(A) 'discordant' means disagreeing or incongruous." +
            "<br><br>" +
            "(B) 'harsh' means unpleasantly rough or jarring to the senses." +
            "<br><br>" +
            "(D) 'noisy' means making or given to making a lot of noise.",
        chinese_explanation: "(C) '悦耳的' 一词意味着具有愉悦的旋律。" +
            "<br><br>" +
            "(A) '不和谐的' 意味着不一致的或不协调的。" +
            "<br><br>" +
            "(B) '刺耳的' 意味着对感官不愉快地粗糙或刺耳的。" +
            "<br><br>" +
            "(D) '吵闹的' 意味着发出很多噪音的。"
    },
    {
        id: 3,
        question: "He was so __________ about cleanliness that he would spend hours scrubbing every corner of the house.",
        chinese_question: "他对清洁非常 __________，会花几个小时擦洗房子的每个角落。",
        answers: [
            { option: "A", answer: "careless", chinese_answer: "粗心的", chinese_romanization: "cūxīn de" },
            { option: "B", answer: "fastidious", chinese_answer: "挑剔的", chinese_romanization: "tiāotì de" },
            { option: "C", answer: "indifferent", chinese_answer: "漠不关心的", chinese_romanization: "mòbù guānxīn de" },
            { option: "D", answer: "negligent", chinese_answer: "疏忽的", chinese_romanization: "shūhū de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'fastidious' means very attentive to and concerned about accuracy and detail." +
            "<br><br>" +
            "(A) 'careless' means not giving sufficient attention or thought to avoiding harm or errors." +
            "<br><br>" +
            "(C) 'indifferent' means having no particular interest or sympathy; unconcerned." +
            "<br><br>" +
            "(D) 'negligent' means failing to take proper care in doing something.",
        chinese_explanation: "(B) '挑剔的' 一词意味着对准确性和细节非常关注。" +
            "<br><br>" +
            "(A) '粗心的' 意味着没有给予足够的关注或考虑以避免伤害或错误。" +
            "<br><br>" +
            "(C) '漠不关心的' 意味着没有特别的兴趣或同情；不关心的。" +
            "<br><br>" +
            "(D) '疏忽的' 意味着在做某事时未能采取适当的照顾。"
    },
    {
        id: 4,
        question: "He was arrested for attempting to pass off a __________ painting as an original masterpiece.",
        chinese_question: "他因试图将一幅 __________ 画作冒充为原作杰作而被逮捕。",
        answers: [
            { option: "A", answer: "genuine", chinese_answer: "真正的", chinese_romanization: "zhēnzhèng de" },
            { option: "B", answer: "authentic", chinese_answer: "真实的", chinese_romanization: "zhēnshí de" },
            { option: "C", answer: "forged", chinese_answer: "伪造的", chinese_romanization: "wěizào de" },
            { option: "D", answer: "replica", chinese_answer: "复制品", chinese_romanization: "fùzhì pǐn" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'forged' means the action of forging or producing a copy of a document, signature, banknote, or work of art." +
            "<br><br>" +
            "(A) 'genuine' means truly what something is said to be; authentic." +
            "<br><br>" +
            "(B) 'authentic' means of undisputed origin and not a copy; genuine." +
            "<br><br>" +
            "(D) 'replica' means an exact copy or model of something, especially one on a smaller scale.",
        chinese_explanation: "(C) '伪造的' 一词意味着伪造或制作文档、签名、钞票或艺术品副本的行为。" +
            "<br><br>" +
            "(A) '真正的' 意味着真正是所说的东西；真实的。" +
            "<br><br>" +
            "(B) '真实的' 意味着起源无可争议的而不是复制的；真正的。" +
            "<br><br>" +
            "(D) '复制品' 意味着某物的精确副本或模型，尤其是小规模的一个。"
    },
    {
        id: 5,
         question: "When he found out about the betrayal, he went __________, breaking everything in sight.",
        chinese_question: "当他发现被背叛时，他 __________，摧毁了眼前的一切。",
        answers: [
            { option: "A", answer: "calm", chinese_answer: "冷静的", chinese_romanization: "lěngjìng de" },
            { option: "B", answer: "serene", chinese_answer: "平静的", chinese_romanization: "píngjìng de" },
            { option: "C", answer: "berserk", chinese_answer: "狂暴的", chinese_romanization: "kuángbào de" },
            { option: "D", answer: "peaceful", chinese_answer: "安宁的", chinese_romanization: "ānníng de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'berserk' means out of control with anger or excitement; wild or frenzied." +
            "<br><br>" +
            "(A) 'calm' means not showing or feeling nervousness, anger, or other emotions." +
            "<br><br>" +
            "(B) 'serene' means calm, peaceful, and untroubled." +
            "<br><br>" +
            "(D) 'peaceful' means free from disturbance; tranquil.",
        chinese_explanation: "(C) '狂暴的' 一词意味着愤怒或兴奋失控的；疯狂或狂热的。" +
            "<br><br>" +
            "(A) '冷静的' 意味着不表现或感到紧张、愤怒或其他情绪的。" +
            "<br><br>" +
            "(B) '平静的' 意味着冷静、平和和无忧无虑的。" +
            "<br><br>" +
            "(D) '安宁的' 意味着没有干扰的；宁静的。"
    },
    {
        id: 6,
        question: "Their __________ arguments began to take a toll on their relationship, causing tension and misunderstandings.",
        chinese_question: "他们__________的争论开始对他们的关系产生影响，引起紧张和误解。",
        answers: [
            { option: "A", answer: "rare", chinese_answer: "罕见的", chinese_romanization: "hǎnjiàn de" },
            { option: "B", answer: "occasional", chinese_answer: "偶尔的", chinese_romanization: "ǒu'ěr de" },
            { option: "C", answer: "temporary", chinese_answer: "临时的", chinese_romanization: "línshí de" },
            { option: "D", answer: "frequent", chinese_answer: "频繁的", chinese_romanization: "pínfán de" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'frequent' means occurring or done on many occasions, in many cases, or in quick succession." +
            "<br><br>" +
            "(A) 'rare' means not occurring very often." +
            "<br><br>" +
            "(B) 'occasional' means occurring or appearing at irregular or infrequent intervals." +
            "<br><br>" +
            "(C) 'temporary' means lasting for only a limited period of time.",
        chinese_explanation: "(D) '频繁的'一词意味着在许多场合、许多情况下或快速连续地发生或进行。" +
            "<br><br>" +
            "(A) '罕见的' 意味着不经常发生的。" +
            "<br><br>" +
            "(B) '偶尔的' 意味着在不规则或不频繁的间隔出现或发生的。" +
            "<br><br>" +
            "(C) '临时的' 意味着仅持续有限的时间。"
    },
    {
        id: 7,
        question: "After traveling the world for years, she had a __________ attitude toward visiting new places.",
        chinese_question: "在环游世界多年后，她对参观新地方表现出一种 __________ 的态度。",
        answers: [
            { option: "A", answer: "blasé", chinese_answer: "漠不关心的", chinese_romanization: "mò bù guānxīn de" },
            { option: "B", answer: "enthusiastic", chinese_answer: "热情的", chinese_romanization: "rèqíng de" },
            { option: "C", answer: "curious", chinese_answer: "好奇的", chinese_romanization: "hàoqí de" },
            { option: "D", answer: "excited", chinese_answer: "兴奋的", chinese_romanization: "xīngfèn de" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'blasé' means unimpressed or indifferent to something because one has experienced or seen it so often before." +
            "<br><br>" +
            "(B) 'enthusiastic' means having or showing intense and eager enjoyment, interest, or approval." +
            "<br><br>" +
            "(C) 'curious' means eager to know or learn something." +
            "<br><br>" +
            "(D) 'excited' means very enthusiastic and eager.",
        chinese_explanation: "(A) '漠不关心的' 意味着对某事不感兴趣或无动于衷，因为以前经常体验或看到。" +
            "<br><br>" +
            "(B) '热情的' 意味着表现出强烈和热切的享受、兴趣或赞同。" +
            "<br><br>" +
            "(C) '好奇的' 意味着渴望知道或学习某事。" +
            "<br><br>" +
            "(D) '兴奋的' 意味着非常热情和渴望的。"
    },
    {
        id: 8,
        question: "He was honored to receive an invitation to speak at the __________ university, known for its academic excellence.",
        chinese_question: "他很荣幸收到邀请，在以学术卓越著称的 __________ 大学演讲。",
        answers: [
            { option: "A", answer: "obscure", chinese_answer: "默默无闻的", chinese_romanization: "mòmòwúwén de" },
            { option: "B", answer: "small", chinese_answer: "小的", chinese_romanization: "xiǎo de" },
            { option: "C", answer: "prestigious", chinese_answer: "有声望的", chinese_romanization: "yǒu shēngwàng de" },
            { option: "D", answer: "ordinary", chinese_answer: "普通的", chinese_romanization: "pǔtōng de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'prestigious' means inspiring respect and admiration; having high status." +
            "<br><br>" +
            "(A) 'obscure' means not discovered or known about; uncertain." +
            "<br><br>" +
            "(B) 'small' means of a size that is less than normal or usual." +
            "<br><br>" +
            "(D) 'ordinary' means with no special or distinctive features; normal.",
        chinese_explanation: "(C) '有声望的' 一词意味着激发尊重和钦佩的；具有高地位的。" +
            "<br><br>" +
            "(A) '默默无闻的' 意味着未被发现或未知的；不确定的。" +
            "<br><br>" +
            "(B) '小的' 意味着小于正常或通常的大小。" +
            "<br><br>" +
            "(D) '普通的' 意味着没有特殊或独特特征的；正常的。"
    },
    {
        id: 9,
        question: "The discovery of the ancient ruins was __________, leaving the archaeologists speechless.",
        chinese_question: "古代遗址的发现是 __________ 的，让考古学家们目瞪口呆。",
        answers: [
            { option: "A", answer: "ordinary", chinese_answer: "普通的", chinese_romanization: "pǔtōng de" },
            { option: "B", answer: "astounding", chinese_answer: "令人震惊的", chinese_romanization: "lìng rén zhènjīng de" },
            { option: "C", answer: "unremarkable", chinese_answer: "不显著的", chinese_romanization: "bù xiǎnzhù de" },
            { option: "D", answer: "common", chinese_answer: "常见的", chinese_romanization: "chángjiàn de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'astounding' means surprisingly impressive or notable." +
            "<br><br>" +
            "(A) 'ordinary' means with no special or distinctive features; normal." +
            "<br><br>" +
            "(C) 'unremarkable' means not particularly interesting or surprising." +
            "<br><br>" +
            "(D) 'common' means occurring, found, or done often; prevalent.",
        chinese_explanation: "(B) '令人震惊的' 一词意味着令人惊讶的印象深刻或显著的。" +
            "<br><br>" +
            "(A) '普通的' 意味着没有特别或独特的特征；正常的。" +
            "<br><br>" +
            "(C) '不显著的' 意味着不特别有趣或令人惊讶的。" +
            "<br><br>" +
            "(D) '常见的' 意味着经常发生、发现或完成的；普遍的。"
    },
    {
        id: 10,
        question: "The seeds lay __________ in the soil throughout the winter, waiting for the warmth of spring to begin germination.",
        chinese_question: "种子在整个冬天 __________ 在土壤中，等待春天的温暖开始发芽。",
        answers: [
            { option: "A", answer: "active", chinese_answer: "活跃的", chinese_romanization: "huóyuè de" },
            { option: "B", answer: "dormant", chinese_answer: "休眠的", chinese_romanization: "xiūmián de" },
            { option: "C", answer: "thriving", chinese_answer: "繁荣的", chinese_romanization: "fánróng de" },
            { option: "D", answer: "blooming", chinese_answer: "开花的", chinese_romanization: "kāihuā de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'dormant' means having normal physical functions suspended or slowed down for a period of time; in or as if in a deep sleep." +
            "<br><br>" +
            "(A) 'active' means engaging or ready to engage in physically energetic pursuits." +
            "<br><br>" +
            "(C) 'thriving' means prospering or flourishing." +
            "<br><br>" +
            "(D) 'blooming' means having flowers; flowering.",
        chinese_explanation: "(B) '休眠的' 一词意味着正常的生理功能暂停或减慢一段时间；处于或好像处于深度睡眠中。" +
            "<br><br>" +
            "(A) '活跃的' 意味着从事或准备从事体力活动。" +
            "<br><br>" +
            "(C) '繁荣的' 意味着繁荣或兴旺。" +
            "<br><br>" +
            "(D) '开花的' 意味着有花；开花。"
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
