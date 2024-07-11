// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "After skipping breakfast and lunch, he was absolutely __________ by the time dinner was served.",
        chinese_question: "他没吃早餐和午餐，到晚餐时间时已经 __________。",
        answers: [
            { option: "A", answer: "satisfied", chinese_answer: "满意", chinese_romanization: "mǎnyì" },
            { option: "B", answer: "full", chinese_answer: "饱", chinese_romanization: "bǎo" },
            { option: "C", answer: "famished", chinese_answer: "饿极了", chinese_romanization: "è jí le" },
            { option: "D", answer: "content", chinese_answer: "满足", chinese_romanization: "mǎnzú" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'famished' means extremely hungry." +
            "<br><br>" +
            "(A) 'satisfied' means contented; pleased." +
            "<br><br>" +
            "(B) 'full' means containing or holding as much or as many as possible." +
            "<br><br>" +
            "(D) 'content' means in a state of peaceful happiness.",
        chinese_explanation: "(C) '饿极了' 一词意味着极度饥饿。" +
            "<br><br>" +
            "(A) '满意' 意味着满足；高兴。" +
            "<br><br>" +
            "(B) '饱' 意味着尽可能多地装或持有。" +
            "<br><br>" +
            "(D) '满足' 意味着处于平静幸福的状态。"
    },
    {
        id: 2,
        question: "His __________ behavior at the meeting was surprising, given his age and position.",
        chinese_question: "考虑到他的年龄和职位，他在会议上的__________行为令人惊讶。",
        answers: [
            { option: "A", answer: "mature", chinese_answer: "成熟的", chinese_romanization: "chéngshú de" },
            { option: "B", answer: "juvenile", chinese_answer: "幼稚的", chinese_romanization: "yòuzhì de" },
            { option: "C", answer: "adult", chinese_answer: "成人的", chinese_romanization: "chéngrén de" },
            { option: "D", answer: "sophisticated", chinese_answer: "老练的", chinese_romanization: "lǎoliàn de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'juvenile' means for or relating to young people; childish or immature." +
            "<br><br>" +
            "(A) 'mature' means fully developed physically; full-grown." +
            "<br><br>" +
            "(C) 'adult' means fully grown or developed." +
            "<br><br>" +
            "(D) 'sophisticated' means having, revealing, or proceeding from a great deal of worldly experience and knowledge of fashion and culture.",
        chinese_explanation: "(B) '幼稚的'一词意味着与年轻人有关的；幼稚的或不成熟的。" +
            "<br><br>" +
            "(A) '成熟的' 意味着身体上完全发育的；完全成长的。" +
            "<br><br>" +
            "(C) '成人的' 意味着完全成长或发育的。" +
            "<br><br>" +
            "(D) '老练的' 意味着有、透露或来自大量的世俗经验和时尚与文化知识的。"
    },
    {
        id: 3,
        question: "The students were __________ when they learned they had all passed their exams with flying colors.",
        chinese_question: "当学生们得知他们都以优异成绩通过考试时，他们感到__________。",
        answers: [
            { option: "A", answer: "depressed", chinese_answer: "沮丧的", chinese_romanization: "jǔsàng de" },
            { option: "B", answer: "sorrowful", chinese_answer: "悲伤的", chinese_romanization: "bēishāng de" },
            { option: "C", answer: "jubilant", chinese_answer: "欢腾的", chinese_romanization: "huānténg de" },
            { option: "D", answer: "despondent", chinese_answer: "沮丧的", chinese_romanization: "jǔsàng de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'jubilant' means feeling or expressing great happiness and triumph. Figuratively, it can mean being extremely happy and triumphant." +
            "<br><br>" +
            "(A) 'depressed' means in a state of general unhappiness or despondency." +
            "<br><br>" +
            "(B) 'sorrowful' means feeling or showing grief." +
            "<br><br>" +
            "(D) 'despondent' means in low spirits from loss of hope or courage.",
        chinese_explanation: "(C) '欢腾的'一词意味着感到或表达极大的快乐和胜利。比喻地，它可以表示极其高兴和胜利。" +
            "<br><br>" +
            "(A) '沮丧的' 意味着处于普遍不快乐或失望的状态。" +
            "<br><br>" +
            "(B) '悲伤的' 意味着感到或表现出悲伤。" +
            "<br><br>" +
            "(D) '沮丧的' 意味着因失去希望或勇气而情绪低落。"
    },
    {
        id: 4,
        question: "His __________ nature made him beloved by all his friends and family.",
        chinese_question: "他 __________ 的本性使他受到所有朋友和家人的喜爱。",
        answers: [
            { option: "A", answer: "selfish", chinese_answer: "自私", chinese_romanization: "zìsī" },
            { option: "B", answer: "kindhearted", chinese_answer: "善良", chinese_romanization: "shànliáng" },
            { option: "C", answer: "uncaring", chinese_answer: "无情", chinese_romanization: "wúqíng" },
            { option: "D", answer: "insensitive", chinese_answer: "麻木不仁", chinese_romanization: "mámù bù rén" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'kindhearted' means having a kind and sympathetic nature." +
            "<br><br>" +
            "(A) 'selfish' means lacking consideration for others; concerned chiefly with one's own personal profit or pleasure." +
            "<br><br>" +
            "(C) 'uncaring' means not displaying sympathy or concern for others." +
            "<br><br>" +
            "(D) 'insensitive' means showing or feeling no concern for others' feelings.",
        chinese_explanation: "(B) '善良' 意味着具有善良和同情心的性格。" +
            "<br><br>" +
            "(A) '自私' 意味着缺乏对他人的考虑；主要关心个人利益或快乐。" +
            "<br><br>" +
            "(C) '无情' 意味着不表现出同情或关心他人。" +
            "<br><br>" +
            "(D) '麻木不仁' 意味着对他人的感受表现出或感到没有关心。"
    },
    {
        id: 5,
        question: "Her __________ comments during the meeting helped the team identify key issues and develop effective solutions.",
        chinese_question: "她在会议上的 __________ 评论帮助团队识别关键问题并制定有效解决方案。",
        answers: [
            { option: "A", answer: "insightful", chinese_answer: "有见地的", chinese_romanization: "yǒu jiàndì de" },
            { option: "B", answer: "superficial", chinese_answer: "表面的", chinese_romanization: "biǎomiàn de" },
            { option: "C", answer: "irrelevant", chinese_answer: "无关的", chinese_romanization: "wúguān de" },
            { option: "D", answer: "trivial", chinese_answer: "琐碎的", chinese_romanization: "suǒsuì de" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'insightful' means having or showing an accurate and deep understanding." +
            "<br><br>" +
            "(B) 'superficial' means existing or occurring at or on the surface." +
            "<br><br>" +
            "(C) 'irrelevant' means not connected with or relevant to something." +
            "<br><br>" +
            "(D) 'trivial' means of little value or importance.",
        chinese_explanation: "(A) '有见地的' 意味着具有或表现出准确和深刻的理解。" +
            "<br><br>" +
            "(B) '表面的' 意味着存在或发生在表面上的。" +
            "<br><br>" +
            "(C) '无关的' 意味着与某事无关的。" +
            "<br><br>" +
            "(D) '琐碎的' 意味着价值或重要性很小的。"
    },
    {
        id: 6,
        question: "His __________ handling of the situation led to more problems, showing his lack of skill and understanding.",
        chinese_question: "他对局势的 __________ 处理导致了更多的问题，显示出他缺乏技能和理解。",
        answers: [
            { option: "A", answer: "inept", chinese_answer: "无能的", chinese_romanization: "wúnéng de" },
            { option: "B", answer: "competent", chinese_answer: "胜任的", chinese_romanization: "shèngrèn de" },
            { option: "C", answer: "skillful", chinese_answer: "熟练的", chinese_romanization: "shúliàn de" },
            { option: "D", answer: "proficient", chinese_answer: "精通的", chinese_romanization: "jīngtōng de" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'inept' means having or showing no skill; clumsy." +
            "<br><br>" +
            "(B) 'competent' means having the necessary ability, knowledge, or skill to do something successfully." +
            "<br><br>" +
            "(C) 'skillful' means having or showing skill." +
            "<br><br>" +
            "(D) 'proficient' means competent or skilled in doing or using something.",
        chinese_explanation: "(A) '无能的' 意味着没有技能的；笨拙的。" +
            "<br><br>" +
            "(B) '胜任的' 意味着拥有必要的能力、知识或技能成功地完成某事。" +
            "<br><br>" +
            "(C) '熟练的' 意味着拥有或展示技能的。" +
            "<br><br>" +
            "(D) '精通的' 意味着在做某事或使用某物方面有能力或熟练的。"
    },
    {
        id: 7,
        question: "Her expertise in project management made her __________ to the team, as they relied heavily on her guidance and skills.",
        chinese_question: "她在项目管理方面的专业知识使她对团队来说是 __________ 的，因为他们非常依赖她的指导和技能。",
        answers: [
            { option: "A", answer: "optional", chinese_answer: "可选的", chinese_romanization: "kě xuǎn de" },
            { option: "B", answer: "indispensable", chinese_answer: "不可或缺的", chinese_romanization: "bùkě huòquē de" },
            { option: "C", answer: "expendable", chinese_answer: "可有可无的", chinese_romanization: "kěyǒu kěwú de" },
            { option: "D", answer: "unnecessary", chinese_answer: "不必要的", chinese_romanization: "bù bìyào de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'indispensable' means absolutely necessary." +
            "<br><br>" +
            "(A) 'optional' means available to be chosen but not obligatory." +
            "<br><br>" +
            "(C) 'expendable' means of little significance when compared to an overall purpose and therefore able to be abandoned." +
            "<br><br>" +
            "(D) 'unnecessary' means not needed.",
        chinese_explanation: "(B) '不可或缺的' 意味着绝对必要的。" +
            "<br><br>" +
            "(A) '可选的' 意味着可供选择但不是强制的。" +
            "<br><br>" +
            "(C) '可有可无的' 意味着与整体目的相比意义不大，因此可以被放弃的。" +
            "<br><br>" +
            "(D) '不必要的' 意味着不需要的。"
    },
    {
        id: 8,
        question: "The antique dealer assured us that the painting was __________, providing documentation to prove its origin and history.",
        chinese_question: "古董商向我们保证这幅画是 __________ 的，并提供了证明其来源和历史的文件。",
        answers: [
            { option: "A", answer: "fake", chinese_answer: "假的", chinese_romanization: "jiǎ de" },
            { option: "B", answer: "authentic", chinese_answer: "真正的", chinese_romanization: "zhēnzhèng de" },
            { option: "C", answer: "imitation", chinese_answer: "模仿的", chinese_romanization: "mófǎng de" },
            { option: "D", answer: "counterfeit", chinese_answer: "伪造的", chinese_romanization: "wèizào de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'authentic' means of undisputed origin and not a copy; genuine." +
            "<br><br>" +
            "(A) 'fake' means not genuine; counterfeit." +
            "<br><br>" +
            "(C) 'imitation' means a thing intended to simulate or copy something else." +
            "<br><br>" +
            "(D) 'counterfeit' means made in exact imitation of something valuable with the intention to deceive or defraud.",
        chinese_explanation: "(B) '真正的' 意味着来源无可争议且不是复制品；真实的。" +
            "<br><br>" +
            "(A) '假的' 意味着不真实的；伪造的。" +
            "<br><br>" +
            "(C) '模仿的' 意味着模拟或复制其他东西的东西。" +
            "<br><br>" +
            "(D) '伪造的' 意味着为了欺骗或诈骗而进行的精确模仿。"
    },
    {
        id: 9,
        question: "He realized that his savings were __________ to cover the cost of the trip, so he decided to book the tickets.",
        chinese_question: "他意识到自己的积蓄 __________ 以支付旅行费用，于是决定预订机票。",
        answers: [
            { option: "A", answer: "insufficient", chinese_answer: "不足的", chinese_romanization: "bùzú de" },
            { option: "B", answer: "lacking", chinese_answer: "缺乏的", chinese_romanization: "quēfá de" },
            { option: "C", answer: "sufficient", chinese_answer: "足够的", chinese_romanization: "zúgòu de" },
            { option: "D", answer: "inadequate", chinese_answer: "不够的", chinese_romanization: "bùgòu de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'sufficient' means enough; adequate." +
            "<br><br>" +
            "(A) 'insufficient' means not enough; inadequate." +
            "<br><br>" +
            "(B) 'lacking' means not available or in short supply." +
            "<br><br>" +
            "(D) 'inadequate' means lacking the quality or quantity required; insufficient for a purpose.",
        chinese_explanation: "(C) '足够的' 意味着足够的；适当的。" +
            "<br><br>" +
            "(A) '不足的' 意味着不够的；不充分的。" +
            "<br><br>" +
            "(B) '缺乏的' 意味着不可用或供应不足的。" +
            "<br><br>" +
            "(D) '不够的' 意味着缺乏所需的质量或数量；不足以达到目的的。"
    },
    {
        id: 10,
        question: "The writer lived a __________ life in a cabin deep in the woods, rarely seeing anyone.",
        chinese_question: "这位作家过着 __________ 的生活，住在森林深处的小屋里，很少见到任何人。",
        answers: [
            { option: "A", answer: "social", chinese_answer: "社交", chinese_romanization: "shèjiāo" },
            { option: "B", answer: "reclusive", chinese_answer: "隐居", chinese_romanization: "yǐnjū" },
            { option: "C", answer: "outgoing", chinese_answer: "外向", chinese_romanization: "wàixiàng" },
            { option: "D", answer: "gregarious", chinese_answer: "合群", chinese_romanization: "héqún" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'reclusive' means avoiding the company of other people; solitary." +
            "<br><br>" +
            "(A) 'social' means relating to society or its organization." +
            "<br><br>" +
            "(C) 'outgoing' means friendly and socially confident." +
            "<br><br>" +
            "(D) 'gregarious' means fond of company; sociable.",
        chinese_explanation: "(B) '隐居' 一词意味着避开他人的公司；孤独的。" +
            "<br><br>" +
            "(A) '社交' 意味着与社会或其组织有关。" +
            "<br><br>" +
            "(C) '外向' 意味着友好和社交自信。" +
            "<br><br>" +
            "(D) '合群' 意味着喜欢公司；社交的。"
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
