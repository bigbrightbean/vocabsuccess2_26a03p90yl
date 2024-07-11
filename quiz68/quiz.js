// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "The __________ between the characters in the play was so engaging that the audience was captivated throughout the performance.",
        chinese_question: "剧中人物之间的 __________ 如此引人入胜，观众在整个表演过程中都被吸引住了。",
        answers: [
            { option: "A", answer: "monologue", chinese_answer: "独白", chinese_romanization: "dúbái" },
            { option: "B", answer: "silence", chinese_answer: "沉默", chinese_romanization: "chénmò" },
            { option: "C", answer: "dialogue", chinese_answer: "对话", chinese_romanization: "duìhuà" },
            { option: "D", answer: "soliloquy", chinese_answer: "独语", chinese_romanization: "dúyǔ" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'dialogue' means a conversation between two or more people as a feature of a book, play, or movie." +
            "<br><br>" +
            "(A) 'monologue' means a long speech by one actor in a play or movie." +
            "<br><br>" +
            "(B) 'silence' means complete absence of sound." +
            "<br><br>" +
            "(D) 'soliloquy' means an act of speaking one's thoughts aloud when by oneself or regardless of any hearers, especially by a character in a play.",
        chinese_explanation: "(C) '对话' 一词意味着书籍、戏剧或电影中的两个或更多人之间的对话。" +
            "<br><br>" +
            "(A) '独白' 意味着戏剧或电影中一个演员的长篇演讲。" +
            "<br><br>" +
            "(B) '沉默' 意味着完全没有声音。" +
            "<br><br>" +
            "(D) '独语' 意味着独自或不顾任何听众说出自己的想法，特别是戏剧中的人物。"
    },
    {
        id: 2,
        question: "The persistent phone calls from telemarketers became a daily __________, interrupting her work constantly.",
        chinese_question: "推销员的持续电话成为了每天的__________，不断打断她的工作。",
        answers: [
            { option: "A", answer: "delight", chinese_answer: "乐趣", chinese_romanization: "lèqù" },
            { option: "B", answer: "nuisance", chinese_answer: "麻烦", chinese_romanization: "máfan" },
            { option: "C", answer: "treasure", chinese_answer: "珍宝", chinese_romanization: "zhēnbǎo" },
            { option: "D", answer: "pleasure", chinese_answer: "快乐", chinese_romanization: "kuàilè" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'nuisance' means a person, thing, or circumstance causing inconvenience or annoyance." +
            "<br><br>" +
            "(A) 'delight' means great pleasure." +
            "<br><br>" +
            "(C) 'treasure' means something very valuable." +
            "<br><br>" +
            "(D) 'pleasure' means a feeling of happy satisfaction and enjoyment.",
        chinese_explanation: "(B) '麻烦' 一词意味着引起不便或烦恼的人、事物或情况。" +
            "<br><br>" +
            "(A) '乐趣' 意味着巨大的快乐。" +
            "<br><br>" +
            "(C) '珍宝' 意味着非常有价值的东西。" +
            "<br><br>" +
            "(D) '快乐' 意味着幸福的满足和享受的感觉。"
    },
    {
        id: 3,
        question: "The actor received widespread __________ for his outstanding performance in the film.",
        chinese_question: "这位演员因在电影中的出色表演而广受__________。",
        answers: [
            { option: "A", answer: "criticism", chinese_answer: "批评", chinese_romanization: "pīpíng" },
            { option: "B", answer: "acclaim", chinese_answer: "赞誉", chinese_romanization: "zànyù" },
            { option: "C", answer: "disapproval", chinese_answer: "不赞成", chinese_romanization: "bù zànchéng" },
            { option: "D", answer: "neglect", chinese_answer: "忽视", chinese_romanization: "hūshì" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'acclaim' means enthusiastic and public praise." +
            "<br><br>" +
            "(A) 'criticism' means the expression of disapproval of someone or something based on perceived faults or mistakes." +
            "<br><br>" +
            "(C) 'disapproval' means possession or expression of an unfavorable opinion." +
            "<br><br>" +
            "(D) 'neglect' means fail to care for properly.",
        chinese_explanation: "(B) '赞誉'一词意味着热情的和公开的赞扬。" +
            "<br><br>" +
            "(A) '批评' 意味着基于所感知的缺点或错误对某人或某事的不赞成表达。" +
            "<br><br>" +
            "(C) '不赞成' 意味着持有或表达不好的意见。" +
            "<br><br>" +
            "(D) '忽视' 意味着未能妥善照顾。"
    },
    {
        id: 4,
        question: "The __________ in his statement left everyone confused about his true intentions.",
        chinese_question: "他陈述中的 __________ 让所有人对他的真实意图感到困惑。",
        answers: [
            { option: "A", answer: "clarity", chinese_answer: "清晰", chinese_romanization: "qīngxī" },
            { option: "B", answer: "precision", chinese_answer: "精确", chinese_romanization: "jīngquè" },
            { option: "C", answer: "ambiguity", chinese_answer: "模糊", chinese_romanization: "móhu" },
            { option: "D", answer: "certainty", chinese_answer: "确信", chinese_romanization: "quèxìn" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'ambiguity' means the quality of being open to more than one interpretation; inexactness." + 
            "<br><br>" +
            "(A) 'clarity' means the quality of being coherent and intelligible." + 
            "<br><br>" +
            "(B) 'precision' means the quality, condition, or fact of being exact and accurate." + 
            "<br><br>" +
            "(D) 'certainty' means firm conviction that something is the case.",
        chinese_explanation: "(C) '模糊' 一词意味着开放于多种解释的质量；不精确。" + 
            "<br><br>" +
            "(A) '清晰' 意味着连贯和易懂的质量。" + 
            "<br><br>" +
            "(B) '精确' 意味着准确和精确的质量、条件或事实。" + 
            "<br><br>" +
            "(D) '确信' 意味着对某事的坚定信念。"
    },
    {
        id: 5,
        question: "She was in __________ after losing her beloved pet in a tragic accident.",
        chinese_question: "她在一场悲剧性事故中失去了心爱的宠物后，__________ 不堪。",
        answers: [
            { option: "A", answer: "joy", chinese_answer: "快乐", chinese_romanization: "kuàilè" },
            { option: "B", answer: "comfort", chinese_answer: "舒适", chinese_romanization: "shūshì" },
            { option: "C", answer: "agony", chinese_answer: "痛苦", chinese_romanization: "tòngkǔ" },
            { option: "D", answer: "pleasure", chinese_answer: "快乐", chinese_romanization: "kuàilè" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'agony' means extreme physical or mental suffering." + 
            "<br><br>" +
            "(A) 'joy' means a feeling of great pleasure and happiness." + 
            "<br><br>" +
            "(B) 'comfort' means a state of physical ease and freedom from pain or constraint." + 
            "<br><br>" +
            "(D) 'pleasure' means a feeling of happy satisfaction and enjoyment.",
        chinese_explanation: "(C) '痛苦' 一词意味着极度的身体或精神痛苦。" + 
            "<br><br>" +
            "(A) '快乐' 意味着一种极大的愉悦和幸福感。" + 
            "<br><br>" +
            "(B) '舒适' 意味着一种身体上的舒适和没有痛苦或约束的状态。" + 
            "<br><br>" +
            "(D) '快乐' 意味着一种愉快的满足和享受感。"
    },
    {
        id: 6,
        question: "His influence spread across the __________, reaching people in many countries.",
        chinese_question: "他的影响力遍布 __________，达到了许多国家的人。",
        answers: [
            { option: "A", answer: "globe", chinese_answer: "全球", chinese_romanization: "quánqiú" },
            { option: "B", answer: "city", chinese_answer: "城市", chinese_romanization: "chéngshì" },
            { option: "C", answer: "state", chinese_answer: "州", chinese_romanization: "zhōu" },
            { option: "D", answer: "neighboUrhood", chinese_answer: "邻里", chinese_romanization: "línlǐ" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'globe' metaphorically means the earth." + 
            "<br><br>" +
            "(B) 'city' means a large town." + 
            "<br><br>" +
            "(C) 'state' means a nation or territory considered as an organized political community under one government." + 
            "<br><br>" +
            "(D) 'neighboUrhood' means a district or community within a town or city.",
        chinese_explanation: "(A) '全球' 比喻地球。" + 
            "<br><br>" +
            "(B) '城市' 意味着一个大城镇。" + 
            "<br><br>" +
            "(C) '州' 意味着一个国家或领土，被认为是一个统一政府下的有组织的政治共同体。" + 
            "<br><br>" +
            "(D) '邻里' 意味着城镇或城市中的一个地区或社区。"
    },
    {
        id: 7,
        question: "He demonstrated great __________ in navigating the complex negotiations.",
        chinese_question: "他在处理复杂的谈判时展示了极大的 __________。",
        answers: [
            { option: "A", answer: "skill", chinese_answer: "技巧", chinese_romanization: "jìqiǎo" },
            { option: "B", answer: "confusion", chinese_answer: "困惑", chinese_romanization: "kùnhuò" },
            { option: "C", answer: "indecision", chinese_answer: "优柔寡断", chinese_romanization: "yōuróuguǎduàn" },
            { option: "D", answer: "blunder", chinese_answer: "失误", chinese_romanization: "shīwù" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'skill' metaphorically means expertise in managing or handling a situation." +
            "<br><br>" +
            "(B) 'confusion' means lack of understanding; uncertainty." +
            "<br><br>" +
            "(C) 'indecision' means inability to decide." +
            "<br><br>" +
            "(D) 'blunder' means a stupid or careless mistake.",
        chinese_explanation: "(A) '技巧' 比喻在管理或处理情况方面的专业知识。" +
            "<br><br>" +
            "'困惑' 意味着缺乏理解；不确定性。" +
            "<br><br>" +
            "'优柔寡断' 意味着无法决定。" +
            "<br><br>" +
            "'失误' 意味着愚蠢或粗心的错误。"
    },
    {
        id: 8,
        question: "She received a lot of emotional __________ from her family during the tough times.",
        chinese_question: "在困难时期，她得到了家人很多情感上的 __________。",
        answers: [
            { option: "A", answer: "support", chinese_answer: "支持", chinese_romanization: "zhīchí" },
            { option: "B", answer: "neglect", chinese_answer: "忽视", chinese_romanization: "hūshì" },
            { option: "C", answer: "indifference", chinese_answer: "冷漠", chinese_romanization: "lěngmò" },
            { option: "D", answer: "resistance", chinese_answer: "抵抗", chinese_romanization: "dǐkàng" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'support' metaphorically means providing assistance or encouragement." +
            "<br><br>" +
            "(B) 'neglect' means fail to care for properly." +
            "<br><br>" +
            "(C) 'indifference' means lack of interest, concern, or sympathy." +
            "<br><br>" +
            "(D) 'resistance' means the refusal to accept or comply with something; the attempt to prevent something by action or argument.",
        chinese_explanation: "(A) '支持' 比喻提供帮助或鼓励。" +
            "<br><br>" +
            "'忽视' 意味着未能适当照顾。" +
            "<br><br>" +
            "'冷漠' 意味着缺乏兴趣、关注或同情。" +
            "<br><br>" +
            "'抵抗' 意味着拒绝接受或遵守某事；通过行动或争论试图阻止某事。"
    },
    {
        id: 9,
        question: "Understanding the __________ of the problem is the first step to solving it.",
        chinese_question: "理解问题的 __________ 是解决问题的第一步。",
        answers: [
            { option: "A", answer: "origin", chinese_answer: "根源", chinese_romanization: "gēnyuán" },
            { option: "B", answer: "consequence", chinese_answer: "结果", chinese_romanization: "jiéguǒ" },
            { option: "C", answer: "symptom", chinese_answer: "症状", chinese_romanization: "zhèngzhuàng" },
            { option: "D", answer: "outcome", chinese_answer: "结局", chinese_romanization: "jiéjú" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'origin' metaphorically means the cause or basis of something." +
            "<br><br>" +
            "(B) 'consequence' means a result or effect of an action or condition." +
            "<br><br>" +
            "(C) 'symptom' means a physical or mental feature that is regarded as indicating a condition of disease." +
            "<br><br>" +
            "(D) 'outcome' means the way a thing turns out; a consequence.",
        chinese_explanation: "(A) '根源' 比喻某事的原因或基础。" +
            "<br><br>" +
            "'结果' 意味着某个行动或条件的结果或影响。" +
            "<br><br>" +
            "'症状' 意味着被认为表明疾病状况的身体或精神特征。" +
            "<br><br>" +
            "'结局' 意味着事情的结果；后果。"
    },
    {
        id: 10,
        question: "Her __________ for the victims of the disaster motivated her to volunteer and provide assistance.",
        chinese_question: "她对灾难受害者的 __________ 激励她去做志愿者并提供帮助。",
        answers: [
            { option: "A", answer: "apathy", chinese_answer: "冷漠", chinese_romanization: "lěngmò" },
            { option: "B", answer: "empathy", chinese_answer: "同情", chinese_romanization: "tóngqíng" },
            { option: "C", answer: "indifference", chinese_answer: "漠不关心", chinese_romanization: "mò bù guānxīn" },
            { option: "D", answer: "disdain", chinese_answer: "鄙视", chinese_romanization: "bǐshì" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'empathy' means the ability to understand and share the feelings of another." +
            "<br><br>" +
            "(A) 'apathy' means lack of interest, enthusiasm, or concern." +
            "<br><br>" +
            "(C) 'indifference' means lack of interest, concern, or sympathy." +
            "<br><br>" +
            "(D) 'disdain' means the feeling that someone or something is unworthy of one's consideration or respect; contempt.",
        chinese_explanation: "(B) '同情' 一词意味着理解和分享他人感受的能力。" +
            "<br><br>" +
            "(A) '冷漠' 意味着缺乏兴趣、热情或关注。" +
            "<br><br>" +
            "(C) '漠不关心' 意味着缺乏兴趣、关心或同情。" +
            "<br><br>" +
            "(D) '鄙视' 意味着认为某人或某物不值得考虑或尊重的感觉；蔑视。"
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
