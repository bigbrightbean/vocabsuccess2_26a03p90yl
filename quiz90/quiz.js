// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "She had to __________ for herself after moving to the big city alone.",
        chinese_question: "她独自搬到大城市后，不得不自己 __________。",
        answers: [
            { option: "A", answer: "fend", chinese_answer: "照顾", chinese_romanization: "zhàogù" },
            { option: "B", answer: "depend", chinese_answer: "依赖", chinese_romanization: "yīlài" },
            { option: "C", answer: "falter", chinese_answer: "衰退", chinese_romanization: "shuāituì" },
            { option: "D", answer: "compromise", chinese_answer: "妥协", chinese_romanization: "tuǒxié" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'fend' metaphorically means to take care of and provide for oneself." +
            "<br><br>" +
            "(B) 'depend' means to rely on someone or something." +
            "<br><br>" +
            "(C) 'falter' means to start to lose strength or momentum." +
            "<br><br>" +
            "(D) 'compromise' means to settle a dispute by mutual concession.",
        chinese_explanation: "(A) '照顾' 比喻照顾和供养自己。" +
            "<br><br>" +
            "(B) '依赖' 意味着依靠某人或某物。" +
            "<br><br>" +
            "(C) '衰退' 意味着开始失去力量或势头。" +
            "<br><br>" +
            "(D) '妥协' 意味着通过相互让步解决争端。"
    },
    {
        id: 2,
        question: "Her achievements in science __________ what hard work and determination can accomplish.",
        chinese_question: "她在科学领域的成就 __________ 了努力工作和决心可以实现的成果。",
        answers: [
            { option: "A", answer: "exemplify", chinese_answer: "例证", chinese_romanization: "lìzhèng" },
            { option: "B", answer: "obscure", chinese_answer: "掩盖", chinese_romanization: "yǎngài" },
            { option: "C", answer: "contradict", chinese_answer: "反驳", chinese_romanization: "fǎnbó" },
            { option: "D", answer: "complicate", chinese_answer: "复杂化", chinese_romanization: "fùzá huà" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'exemplify' means to be a typical example of." +
            "<br><br>" +
            "(B) 'obscure' means keep from being seen; conceal." +
            "<br><br>" +
            "(C) 'contradict' means deny the truth of (a statement) by asserting the opposite." +
            "<br><br>" +
            "(D) 'complicate' means make (something) more difficult or confusing by causing it to be more complex.",
        chinese_explanation: "(A) '例证' 意味着成为典型的例子。" +
            "<br><br>" +
            "(B) '掩盖' 意味着使看不见；隐藏。" +
            "<br><br>" +
            "(C) '反驳' 意味着通过断言相反来否认（声明）的真实性。" +
            "<br><br>" +
            "(D) '复杂化' 意味着使（某事）更困难或更混乱，使其变得更加复杂。"
    },
    {
        id: 3,
        question: "Her thinking has __________ over time, becoming more open-minded and inclusive.",
        chinese_question: "随着时间的推移，她的思想 __________，变得更加开明和包容。",
        answers: [
            { option: "A", answer: "stagnated", chinese_answer: "停滞", chinese_romanization: "tíngzhì" },
            { option: "B", answer: "evolved", chinese_answer: "发展", chinese_romanization: "fāzhǎn" },
            { option: "C", answer: "halted", chinese_answer: "停止", chinese_romanization: "tíngzhǐ" },
            { option: "D", answer: "reverted", chinese_answer: "恢复", chinese_romanization: "huīfù" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'evolved' metaphorically means developed or changed gradually." +
            "<br><br>" +
            "(A) 'stagnated' means ceased to develop; become inactive or dull." +
            "<br><br>" +
            "(C) 'halted' means stopped abruptly." +
            "<br><br>" +
            "(D) 'reverted' means returned to a previous state, practice, or belief.",
        chinese_explanation: "(B) '发展' 比喻逐渐发展或改变。" +
            "<br><br>" +
            "(A) '停滞' 意味着停止发展；变得不活跃或乏味。" +
            "<br><br>" +
            "(C) '停止' 意味着突然停止。" +
            "<br><br>" +
            "(D) '恢复' 意味着回到以前的状态、实践或信仰。"
    },
    {
        id: 4,
        question: "Adding spices will __________ the flavour of the dish.",
        chinese_question: "添加香料会 __________ 菜肴的味道。",
        answers: [
            { option: "A", answer: "diminish", chinese_answer: "减少", chinese_romanization: "jiǎnshǎo" },
            { option: "B", answer: "obscure", chinese_answer: "遮掩", chinese_romanization: "zhēyǎn" },
            { option: "C", answer: "suppress", chinese_answer: "压制", chinese_romanization: "yāzhì" },
            { option: "D", answer: "enhance", chinese_answer: "增强", chinese_romanization: "zēngqiáng" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'enhance' means to intensify, increase, or further improve the quality, value, or extent of." +
            "<br><br>" +
            "(A) 'diminish' means to make or become less." +
            "<br><br>" +
            "(B) 'obscure' means keep from being seen; conceal." +
            "<br><br>" +
            "(C) 'suppress' means to forcibly put an end to.",
        chinese_explanation: "(D) '增强' 意味着加强、增加或进一步改善质量、价值或范围。" +
            "<br><br>" +
            "(A) '减少' 意味着使或变得更少。" +
            "<br><br>" +
            "(B) '遮掩' 意味着使某物看不见；隐藏。" +
            "<br><br>" +
            "(C) '压制' 意味着强行结束。"
    },
    {
        id: 5,
        question: "The year-long celebration will __________ in a grand parade through the city center.",
        chinese_question: "为期一年的庆祝活动将以市中心的盛大游行 __________。",
        answers: [
            { option: "A", answer: "decline", chinese_answer: "下降", chinese_romanization: "xiàjiàng" },
            { option: "B", answer: "culminate", chinese_answer: "达到高潮", chinese_romanization: "dádào gāocháo" },
            { option: "C", answer: "wane", chinese_answer: "衰退", chinese_romanization: "shuāituì" },
            { option: "D", answer: "falter", chinese_answer: "衰退", chinese_romanization: "shuāituì" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'culminate' means reach a climax or point of highest development." +
            "<br><br>" +
            "(A) 'decline' means a gradual and continuous loss of strength, numbers, quality, or value." +
            "<br><br>" +
            "(C) 'wane' means to decrease in size, extent, or degree." +
            "<br><br>" +
            "(D) 'falter' means start to lose strength or momentum.",
        chinese_explanation: "(B) '达到高潮' 意味着达到顶点或最高发展的点。" +
            "<br><br>" +
            "(A) '下降' 意味着力量、数量、质量或价值的逐渐和持续损失。" +
            "<br><br>" +
            "(C) '衰退' 意味着在规模、范围或程度上减少。" +
            "<br><br>" +
            "(D) '衰退' 意味着开始失去力量或势头。"
    },
    {
        id: 6,
        question: "Her words were meant to __________ hope and encouragement, providing comfort and strength to those who were feeling down.",
        chinese_question: "她的话意在 __________ 希望和鼓励，为那些感到沮丧的人提供安慰和力量。",
        answers: [
            { option: "A", answer: "convey", chinese_answer: "传达", chinese_romanization: "chuándá" },
            { option: "B", answer: "mislead", chinese_answer: "误导", chinese_romanization: "wùdǎo" },
            { option: "C", answer: "confuse", chinese_answer: "混淆", chinese_romanization: "hùnxiáo" },
            { option: "D", answer: "suppress", chinese_answer: "压制", chinese_romanization: "yāzhì" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'convey' metaphorically means to express or communicate a message or feeling." +
            "<br><br>" +
            "(B) 'mislead' means to cause (someone) to have a wrong idea or impression." +
            "<br><br>" +
            "(C) 'confuse' means to make (someone) bewildered or perplexed." +
            "<br><br>" +
            "(D) 'suppress' means to forcibly put an end to.",
        chinese_explanation: "(A) '传达' 比喻表达或传递信息或感觉。" +
            "<br><br>" +
            "(B) '误导' 意味着使（某人）产生错误的想法或印象。" +
            "<br><br>" +
            "(C) '混淆' 意味着使（某人）困惑或迷惑。" +
            "<br><br>" +
            "(D) '压制' 意味着强行结束。"
    },
    {
        id: 7,
        question: "The government decided to __________ all illicit funds linked to the corruption scandal, similar to how they would seize illegal assets.",
        chinese_question: "政府决定 __________ 所有与腐败丑闻相关的非法资金，就像他们会没收非法资产一样。",
        answers: [
            { option: "A", answer: "confiscate", chinese_answer: "没收", chinese_romanization: "mòshōu" },
            { option: "B", answer: "allocate", chinese_answer: "分配", chinese_romanization: "fēnpèi" },
            { option: "C", answer: "distribute", chinese_answer: "分发", chinese_romanization: "fēnfā" },
            { option: "D", answer: "donate", chinese_answer: "捐赠", chinese_romanization: "juānzèng" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'confiscate' metaphorically means to take possession of by authority." +
            "<br><br>" +
            "(B) 'allocate' means to distribute (resources or duties) for a particular purpose." +
            "<br><br>" +
            "(C) 'distribute' means to give shares of (something); deal out." +
            "<br><br>" +
            "(D) 'donate' means to give (money or goods) for a good cause.",
        chinese_explanation: "(A) '没收' 比喻以权威占有。" +
            "<br><br>" +
            "(B) '分配' 意味着为特定目的分配（资源或职责）。" +
            "<br><br>" +
            "(C) '分发' 意味着分配（某物）的份额；分发。" +
            "<br><br>" +
            "(D) '捐赠' 意味着为了好的原因捐赠（钱或物品）。"
    },
    {
        id: 8,
        question: "His voice would __________ whenever he spoke in front of a large audience.",
        chinese_question: "每当他在大庭广众前讲话时，他的声音就会 __________。",
        answers: [
            { option: "A", answer: "resonate", chinese_answer: "回响", chinese_romanization: "huíxiǎng" },
            { option: "B", answer: "tremble", chinese_answer: "颤抖", chinese_romanization: "chàndǒu" },
            { option: "C", answer: "dominate", chinese_answer: "主导", chinese_romanization: "zhǔdǎo" },
            { option: "D", answer: "vanish", chinese_answer: "消失", chinese_romanization: "xiāoshī" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'tremble' metaphorically means to show nervousness or fear." +
            "<br><br>" +
            "(A) 'resonate' means to produce or be filled with a deep, full, reverberating sound." +
            "<br><br>" +
            "(C) 'dominate' means to have a commanding influence on." +
            "<br><br>" +
            "(D) 'vanish' means to disappear suddenly and completely.",
        chinese_explanation: "(B) '颤抖' 比喻表现出紧张或害怕。" +
            "<br><br>" +
            "(A) '回响' 意味着产生或充满深沉、丰满、回响的声音。" +
            "<br><br>" +
            "(C) '主导' 意味着对某事具有指挥性的影响。" +
            "<br><br>" +
            "(D) '消失' 意味着突然完全消失。"
    },
    {
        id: 9,
        question: "She could hardly __________ his arrogant attitude any longer.",
        chinese_question: "她几乎再也无法 __________ 他的傲慢态度了。",
        answers: [
            { option: "A", answer: "tolerate", chinese_answer: "忍受", chinese_romanization: "rěnshòu" },
            { option: "B", answer: "praise", chinese_answer: "赞美", chinese_romanization: "zànměi" },
            { option: "C", answer: "admire", chinese_answer: "钦佩", chinese_romanization: "qīnpèi" },
            { option: "D", answer: "encourage", chinese_answer: "鼓励", chinese_romanization: "gǔlì" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'tolerate' metaphorically means to endure or put up with something unpleasant." +
            "<br><br>" +
            "(B) 'praise' means to express warm approval or admiration of." +
            "<br><br>" +
            "(C) 'admire' means to regard with respect or warm approval." +
            "<br><br>" +
            "(D) 'encourage' means to give support, confidence, or hope to someone.",
        chinese_explanation: "(A) '忍受' 比喻忍耐或容忍不愉快的事物。" +
            "<br><br>" +
            "(B) '赞美' 意味着表达热烈的赞同或钦佩。" +
            "<br><br>" +
            "(C) '钦佩' 意味着以尊重或热情的赞同来看待。" +
            "<br><br>" +
            "(D) '鼓励' 意味着给予支持、信心或希望。"
    },
    {
        id: 10,
        question: "He worked overtime to __________ his income and support his family, taking on additional projects and extra shifts.",
        chinese_question: "他加班以 __________ 收入并支持他的家庭，承担额外的项目和额外的班次。",
        answers: [
            { option: "A", answer: "augment", chinese_answer: "增加", chinese_romanization: "zēngjiā" },
            { option: "B", answer: "reduce", chinese_answer: "减少", chinese_romanization: "jiǎnshǎo" },
            { option: "C", answer: "diminish", chinese_answer: "减少", chinese_romanization: "jiǎnshǎo" },
            { option: "D", answer: "decrease", chinese_answer: "减少", chinese_romanization: "jiǎnshǎo" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'augment' means to make (something) greater by adding to it; increase." +
            "<br><br>" +
            "(B) 'reduce' means to make smaller or less in amount, degree, or size." +
            "<br><br>" +
            "(C) 'diminish' means to make or become less." +
            "<br><br>" +
            "(D) 'decrease' means to make or become smaller or fewer in size, amount, intensity, or degree.",
        chinese_explanation: "(A) '增加' 意味着通过添加使（某事物）更大；增加。" +
            "<br><br>" +
            "(B) '减少' 意味着使某事物在数量、程度或规模上变小。" +
            "<br><br>" +
            "(C) '减少' 意味着使或变得更少。" +
            "<br><br>" +
            "(D) '减少' 意味着使或变得在大小、数量、强度或程度上减少。"
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
