// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "The __________ demand for electric cars has led to more charging stations being built across the country.",
        chinese_question: "对电动汽车__________的需求导致全国各地建造了更多的充电站。",
        answers: [
            { option: "A", answer: "decreasing", chinese_answer: "减少的", chinese_romanization: "jiǎnshǎo de" },
            { option: "B", answer: "stable", chinese_answer: "稳定的", chinese_romanization: "wěndìng de" },
            { option: "C", answer: "increasing", chinese_answer: "增加的", chinese_romanization: "zēngjiā de" },
            { option: "D", answer: "insignificant", chinese_answer: "无关紧要的", chinese_romanization: "wúguān jǐn yào de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'increasing' means becoming greater in size, amount, or degree." +
            "<br><br>" +
            "(A) 'decreasing' means becoming smaller or fewer in size, amount, intensity, or degree." +
            "<br><br>" +
            "(B) 'stable' means not likely to change or fail; firmly established." +
            "<br><br>" +
            "(D) 'insignificant' means too small or unimportant to be worth consideration.",
        chinese_explanation: "(C) '增加的'一词意味着在大小、数量或程度上变得更大的。" +
            "<br><br>" +
            "(A) '减少的' 意味着在大小、数量、强度或程度上变得更小或更少的。" +
            "<br><br>" +
            "(B) '稳定的' 意味着不太可能变化或失败；稳固建立的。" +
            "<br><br>" +
            "(D) '无关紧要的' 意味着太小或不重要，不值得考虑的。"
    },
    {
        id: 2,
        question: "The meeting became __________ when the topic of budget cuts was introduced, with heated arguments and strong opinions from all sides.",
        chinese_question: "当引入预算削减这一话题时，会议变得 __________，各方都有激烈的争论和强烈的意见。",
        answers: [
            { option: "A", answer: "peaceful", chinese_answer: "和平的", chinese_romanization: "hépíng de" },
            { option: "B", answer: "harmonious", chinese_answer: "和谐的", chinese_romanization: "héxié de" },
            { option: "C", answer: "calm", chinese_answer: "平静的", chinese_romanization: "píngjìng de" },
            { option: "D", answer: "contentious", chinese_answer: "有争议的", chinese_romanization: "yǒu zhēngyì de" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'contentious' means causing or likely to cause an argument; controversial." +
            "<br><br>" +
            "(A) 'peaceful' means free from disturbance; tranquil." +
            "<br><br>" +
            "(B) 'harmonious' means forming a pleasing or consistent whole." +
            "<br><br>" +
            "(C) 'calm' means not showing or feeling nervousness, anger, or other strong emotions.",
        chinese_explanation: "(D) '有争议的' 意味着引起或可能引起争论的；有争议的。" +
            "<br><br>" +
            "(A) '和平的' 意味着没有干扰的；宁静的。" +
            "<br><br>" +
            "(B) '和谐的' 意味着形成一个令人愉快或一致的整体。" +
            "<br><br>" +
            "(C) '平静的' 意味着不表现或感到紧张、愤怒或其他强烈情绪的。"
    },
    {
        id: 3,
        question: "The sudden rainstorm came at an __________ moment, providing much-needed relief to the drought-stricken region.",
        chinese_question: "突然的暴雨来得正是 __________ 时刻，为干旱地区提供了急需的缓解。",
        answers: [
            { option: "A", answer: "inconvenient", chinese_answer: "不方便的", chinese_romanization: "bù fāngbiàn de" },
            { option: "B", answer: "inopportune", chinese_answer: "不合时宜的", chinese_romanization: "bù hé shíyí de" },
            { option: "C", answer: "opportune", chinese_answer: "适时的", chinese_romanization: "shìshí de" },
            { option: "D", answer: "untimely", chinese_answer: "不合时宜的", chinese_romanization: "bù hé shíyí de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'opportune' means (of a time) well-chosen or particularly favorable or appropriate." +
            "<br><br>" +
            "(A) 'inconvenient' means causing trouble, difficulties, or discomfort." +
            "<br><br>" +
            "(B) 'inopportune' means occurring at an inconvenient or inappropriate time." +
            "<br><br>" +
            "(D) 'untimely' means happening or done at an unsuitable time.",
        chinese_explanation: "(C) '适时的' 一词意味着（时间）选择得好或特别有利或适当的。" +
            "<br><br>" +
            "(A) '不方便的' 意味着造成麻烦、困难或不适的。" +
            "<br><br>" +
            "(B) '不合时宜的' 意味着在不方便或不适当的时间发生的。" +
            "<br><br>" +
            "(D) '不合时宜的' 意味着在不适当的时间发生或完成的。"
    },
    {
        id: 4,
        question: "Her remarks were __________ of the cultural sensitivities of her audience, leading to unintentional offense.",
        chinese_question: "她的言论 __________ 地忽视了听众的文化敏感性，导致了无意的冒犯。",
        answers: [
            { option: "A", answer: "ignorant", chinese_answer: "无知的", chinese_romanization: "wúzhī de" },
            { option: "B", answer: "considerate", chinese_answer: "体贴的", chinese_romanization: "tǐtiē de" },
            { option: "C", answer: "sensitive", chinese_answer: "敏感的", chinese_romanization: "mǐngǎn de" },
            { option: "D", answer: "respectful", chinese_answer: "尊重的", chinese_romanization: "zūnzhòng de" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'ignorant' means lacking knowledge or awareness in general; uneducated or unsophisticated." +
            "<br><br>" +
            "(B) 'considerate' means careful not to cause inconvenience or hurt to others." +
            "<br><br>" +
            "(C) 'sensitive' means quick to detect or respond to slight changes, signals, or influences." +
            "<br><br>" +
            "(D) 'respectful' means feeling or showing deference and respect.",
        chinese_explanation: "(A) '无知的' 意味着缺乏一般的知识或意识；未受教育或不成熟的。" +
            "<br><br>" +
            "(B) '体贴的' 意味着小心不引起不便或伤害他人的。" +
            "<br><br>" +
            "(C) '敏感的' 意味着迅速检测或响应轻微变化、信号或影响的。" +
            "<br><br>" +
            "(D) '尊重的' 意味着感到或表现出敬意的。"
    },
    {
        id: 5,
        question: "The doctor's handwriting was so __________ that the pharmacist had to call for clarification.",
        chinese_question: "医生的字迹太 __________，药剂师不得不打电话确认。",
        answers: [
            { option: "A", answer: "illegible", chinese_answer: "难以辨认的", chinese_romanization: "nányǐ biànrèn de" },
            { option: "B", answer: "clear", chinese_answer: "清晰的", chinese_romanization: "qīngxī de" },
            { option: "C", answer: "neat", chinese_answer: "整洁的", chinese_romanization: "zhěngjié de" },
            { option: "D", answer: "readable", chinese_answer: "可读的", chinese_romanization: "kě dú de" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'illegible' means not clear enough to be read." +
            "<br><br>" +
            "(B) 'clear' means easy to perceive, understand, or interpret." +
            "<br><br>" +
            "(C) 'neat' means arranged in an orderly, tidy way." +
            "<br><br>" +
            "(D) 'readable' means able to be read or deciphered.",
        chinese_explanation: "(A) '难以辨认的' 意味着不够清晰，无法阅读。" +
            "<br><br>" +
            "(B) '清晰的' 意味着容易感知、理解或解释。" +
            "<br><br>" +
            "(C) '整洁的' 意味着按有序、整齐的方式排列。" +
            "<br><br>" +
            "(D) '可读的' 意味着可以被阅读或破译。"
    },
    {
        id: 6,
        question: "The once-popular social media platform is now __________, with its servers shut down and no active users remaining.",
        chinese_question: "曾经流行的社交媒体平台现在已经 __________，服务器关闭，没有活跃用户。",
        answers: [
            { option: "A", answer: "active", chinese_answer: "活跃的", chinese_romanization: "huóyuè de" },
            { option: "B", answer: "thriving", chinese_answer: "繁荣的", chinese_romanization: "fánróng de" },
            { option: "C", answer: "growing", chinese_answer: "增长的", chinese_romanization: "zēngzhǎng de" },
            { option: "D", answer: "defunct", chinese_answer: "不再存在的", chinese_romanization: "bùzài cúnzài de" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'defunct' means no longer existing or functioning." +
            "<br><br>" +
            "(A) 'active' means engaging or ready to engage in physically energetic pursuits." +
            "<br><br>" +
            "(B) 'thriving' means prosperous and growing; flourishing." +
            "<br><br>" +
            "(C) 'growing' means increasing in size, amount, or degree.",
        chinese_explanation: "(D) '不再存在的' 意味着不再存在或不再运作。" +
            "<br><br>" +
            "(A) '活跃的' 意味着从事或准备从事体力活动的。" +
            "<br><br>" +
            "(B) '繁荣的' 意味着繁荣和成长；兴旺的。" +
            "<br><br>" +
            "(C) '增长的' 意味着在大小、数量或程度上增加。"
    },
    {
        id: 7,
        question: "Since childhood, the two friends have been __________, always seen together no matter where they go.",
        chinese_question: "从小到大，这两位朋友一直__________，无论走到哪里，总是形影不离。",
        answers: [
            { option: "A", answer: "distant", chinese_answer: "遥远的", chinese_romanization: "yáoyuǎn de" },
            { option: "B", answer: "inseparable", chinese_answer: "分不开的", chinese_romanization: "fēnbùkāi de" },
            { option: "C", answer: "indifferent", chinese_answer: "冷漠的", chinese_romanization: "lěngmò de" },
            { option: "D", answer: "detached", chinese_answer: "分离的", chinese_romanization: "fēnlí de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'inseparable' means unable to be separated or treated separately." +
            "<br><br>" +
            "(A) 'distant' means far away in space or time." +
            "<br><br>" +
            "(C) 'indifferent' means having no particular interest or sympathy." +
            "<br><br>" +
            "(D) 'detached' means disengaged or removed.",
        chinese_explanation: "(B) '分不开的'一词意味着无法分离或单独对待。" +
            "<br><br>" +
            "(A) '遥远的' 意味着在空间或时间上遥远的。" +
            "<br><br>" +
            "(C) '冷漠的' 意味着没有特别的兴趣或同情。" +
            "<br><br>" +
            "(D) '分离的' 意味着脱离或移开。"
    },
    {
        id: 8,
        question: "The team's poor performance left the coach feeling deeply __________.",
        chinese_question: "球队的糟糕表现让教练感到深深的__________。",
        answers: [
            { option: "A", answer: "pleased", chinese_answer: "高兴的", chinese_romanization: "gāoxìng de" },
            { option: "B", answer: "excited", chinese_answer: "兴奋的", chinese_romanization: "xīngfèn de" },
            { option: "C", answer: "disappointed", chinese_answer: "失望的", chinese_romanization: "shīwàng de" },
            { option: "D", answer: "indifferent", chinese_answer: "漠不关心的", chinese_romanization: "mòbùguānxīn de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'disappointed' means sad or displeased because someone or something has failed to fulfill one's hopes or expectations." +
            "<br><br>" +
            "(A) 'pleased' means feeling or showing pleasure and satisfaction." +
            "<br><br>" +
            "(B) 'excited' means very enthusiastic and eager." +
            "<br><br>" +
            "(D) 'indifferent' means having no particular interest or sympathy.",
        chinese_explanation: "(C) '失望的'一词意味着因为某人或某事未能实现自己的希望或期望而感到难过或不满。" +
            "<br><br>" +
            "(A) '高兴的' 意味着感到或表现出快乐和满足。" +
            "<br><br>" +
            "(B) '兴奋的' 意味着非常热情和渴望。" +
            "<br><br>" +
            "(D) '漠不关心的' 意味着没有特别的兴趣或同情。"
    },
    {
        id: 9,
        question: "The weather in the mountains is __________, changing from sunny to stormy within minutes.",
        chinese_question: "山中的天气是 __________ 的，从晴朗到暴风雨仅需几分钟。",
        answers: [
            { option: "A", answer: "predictable", chinese_answer: "可预测的", chinese_romanization: "kě yùcè de" },
            { option: "B", answer: "steady", chinese_answer: "稳定的", chinese_romanization: "wěndìng de" },
            { option: "C", answer: "unpredictable", chinese_answer: "不可预测的", chinese_romanization: "bù kě yùcè de" },
            { option: "D", answer: "calm", chinese_answer: "平静的", chinese_romanization: "píngjìng de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'unpredictable' means not able to be predicted; changeable." +
            "<br><br>" +
            "(A) 'predictable' means able to be predicted." +
            "<br><br>" +
            "(B) 'steady' means firmly fixed, supported, or balanced; not shaking or moving." +
            "<br><br>" +
            "(D) 'calm' means not showing or feeling nervousness, anger, or other strong emotions.",
        chinese_explanation: "(C) '不可预测的' 一词意味着无法预测的；多变的。" +
            "<br><br>" +
            "(A) '可预测的' 意味着可以预测的。" +
            "<br><br>" +
            "(B) '稳定的' 意味着牢固固定、支持或平衡的；不摇晃或移动的。" +
            "<br><br>" +
            "(D) '平静的' 意味着不表现或感到紧张、愤怒或其他强烈情感的。"
    },
    {
        id: 10,
        question: "Her presentation was very __________, using charts and images to explain the data.",
        chinese_question: "她的演示非常 __________，使用图表和图像来解释数据。",
        answers: [
            { option: "A", answer: "visual", chinese_answer: "视觉的", chinese_romanization: "shìjué de" },
            { option: "B", answer: "verbal", chinese_answer: "口头的", chinese_romanization: "kǒutóu de" },
            { option: "C", answer: "abstract", chinese_answer: "抽象的", chinese_romanization: "chōuxiàng de" },
            { option: "D", answer: "conceptual", chinese_answer: "概念的", chinese_romanization: "gàiniàn de" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'visual' metaphorically means involving sight or visual elements." +
            "<br><br>" +
            "(B) 'verbal' means relating to or in the form of words." +
            "<br><br>" +
            "(C) 'abstract' means existing in thought or as an idea but not having a physical or concrete existence." +
            "<br><br>" +
            "(D) 'conceptual' means relating to or based on mental concepts.",
        chinese_explanation: "(A) '视觉的' 比喻涉及视力或视觉元素的。" +
            "<br><br>" +
            "(B) '口头的' 意味着与词语有关的或以词语形式的。" +
            "<br><br>" +
            "(C) '抽象的' 意味着存在于思想或作为一个想法但没有物理或具体存在的。" +
            "<br><br>" +
            "(D) '概念的' 意味着与心理概念有关的或基于心理概念的。"
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
