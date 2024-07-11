// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "The court ruling was seen as a __________ of justice, with many believing it was unfair and biased.",
        chinese_question: "法院的裁决被视为正义的 __________，许多人认为这是不公平和有偏见的。",
        answers: [
            { option: "A", answer: "triumph", chinese_answer: "胜利", chinese_romanization: "shènglì" },
            { option: "B", answer: "victory", chinese_answer: "胜利", chinese_romanization: "shènglì" },
            { option: "C", answer: "decision", chinese_answer: "决定", chinese_romanization: "juédìng" },
            { option: "D", answer: "travesty", chinese_answer: "拙劣的模仿", chinese_romanization: "zhuōliè de mófǎng" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'travesty' means a false, absurd, or distorted representation of something." +
            "<br><br>" +
            "(A) 'triumph' means a great victory or achievement." +
            "<br><br>" +
            "(B) 'victory' means an act of defeating an enemy or opponent in a battle, game, or other competition." +
            "<br><br>" +
            "(C) 'decision' means a conclusion or resolution reached after consideration.",
        chinese_explanation: "(D) '拙劣的模仿' 意思是对某物的错误、荒谬或扭曲的表现。" +
            "<br><br>" +
            "(A) '胜利' 意思是伟大的胜利或成就。" +
            "<br><br>" +
            "(B) '胜利' 意思是在战斗、比赛或其他竞争中击败敌人或对手的行为。" +
            "<br><br>" +
            "(C) '决定' 意思是经过考虑后得出的结论或决议。"
    },
    {
        id: 2,
        question: "The author expressed his __________ to all the people who supported him throughout the writing of the book.",
        chinese_question: "作者对在写书过程中支持他的所有人表示 __________。",
        answers: [
            { option: "A", answer: "disregard", chinese_answer: "忽视", chinese_romanization: "hūshì" },
            { option: "B", answer: "acknowledgment", chinese_answer: "感谢", chinese_romanization: "gǎnxiè" },
            { option: "C", answer: "negligence", chinese_answer: "疏忽", chinese_romanization: "shūhū" },
            { option: "D", answer: "ignorance", chinese_answer: "无知", chinese_romanization: "wúzhī" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'acknowledgment' means acceptance of the truth or existence of something." +
            "<br><br>" +
            "(A) 'disregard' means the action or state of disregarding or ignoring something." +
            "<br><br>" +
            "(C) 'negligence' means failure to take proper care in doing something." +
            "<br><br>" +
            "(D) 'ignorance' means lack of knowledge or information.",
        chinese_explanation: "(B) '感谢' 一词意味着接受某事的真相或存在。" +
            "<br><br>" +
            "(A) '忽视' 意味着忽视或忽视某事的行为或状态。" +
            "<br><br>" +
            "(C) '疏忽' 意味着未能妥善照顾做某事。" +
            "<br><br>" +
            "(D) '无知' 意味着缺乏知识或信息。"
    },
    {
        id: 3,
        question: "Her __________ in planning the weekend trip made it an exciting adventure for everyone involved.",
        chinese_question: "她在计划周末旅行时的 __________ 使这次冒险对所有参与的人来说都充满了兴奋。",
        answers: [
            { option: "A", answer: "spontaneity", chinese_answer: "自发性", chinese_romanization: "zìfā xìng" },
            { option: "B", answer: "rigidity", chinese_answer: "刚性", chinese_romanization: "gāng xìng" },
            { option: "C", answer: "predictability", chinese_answer: "可预测性", chinese_romanization: "kě yùcè xìng" },
            { option: "D", answer: "hesitancy", chinese_answer: "犹豫", chinese_romanization: "yóuyù" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'spontaneity' means the condition of being spontaneous; spontaneous behavior or action." +
            "<br><br>" +
            "(B) 'rigidity' means inability to be changed or adapted." +
            "<br><br>" +
            "(C) 'predictability' means the ability to be predicted." +
            "<br><br>" +
            "(D) 'hesitancy' means the quality or state of being hesitant.",
        chinese_explanation: "(A) '自发性' 一词意味着自发的状态；自发的行为或行动。" +
            "<br><br>" +
            "(B) '刚性' 意味着不能被改变或适应的能力。" +
            "<br><br>" +
            "(C) '可预测性' 意味着能够被预测的能力。" +
            "<br><br>" +
            "(D) '犹豫' 意味着犹豫的质量或状态。"
    },
    {
        id: 4,
        question: "Reaching the __________ of his career, he received numerous awards and recognition for his contributions to the field.",
        chinese_question: "在事业的 __________ 上，他因在该领域的贡献而获得了许多奖项和认可。",
        answers: [
            { option: "A", answer: "base", chinese_answer: "基础", chinese_romanization: "jīchǔ" },
            { option: "B", answer: "beginning", chinese_answer: "开始", chinese_romanization: "kāishǐ" },
            { option: "C", answer: "pinnacle", chinese_answer: "顶点", chinese_romanization: "dǐngdiǎn" },
            { option: "D", answer: "decline", chinese_answer: "下降", chinese_romanization: "xiàjiàng" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'pinnacle' means the most successful point; the culmination." +
            "<br><br>" +
            "(A) 'base' means the lowest part or edge of something, especially the part on which it rests or is supported." +
            "<br><br>" +
            "(B) 'beginning' means the point in time or space at which something starts." +
            "<br><br>" +
            "(D) 'decline' means a gradual and continuous loss of strength, numbers, quality, or value.",
        chinese_explanation: "(C) '顶点' 意味着最成功的点；顶峰。" +
            "<br><br>" +
            "(A) '基础' 意味着某物的最低部分或边缘，尤其是其休息或支撑的部分。" +
            "<br><br>" +
            "(B) '开始' 意味着某事开始的时间点或空间点。" +
            "<br><br>" +
            "(D) '下降' 意味着力量、数量、质量或价值的逐渐和持续损失。"
    },
    {
        id: 5,
        question: "Her family is known for its __________, with many members living well into their nineties.",
        chinese_question: "她的家族以 __________ 著称，许多成员都活到九十多岁。",
        answers: [
            { option: "A", answer: "brevity", chinese_answer: "简短", chinese_romanization: "jiǎnduǎn" },
            { option: "B", answer: "longevity", chinese_answer: "长寿", chinese_romanization: "chángshòu" },
            { option: "C", answer: "shortness", chinese_answer: "短暂", chinese_romanization: "duǎnzàn" },
            { option: "D", answer: "transience", chinese_answer: "短暂", chinese_romanization: "duǎnzàn" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'longevity' means long life." +
            "<br><br>" +
            "(A) 'brevity' means concise and exact use of words in writing or speech." +
            "<br><br>" +
            "(C) 'shortness' means the condition of being short." +
            "<br><br>" +
            "(D) 'transience' means the state or fact of lasting only for a short time.",
        chinese_explanation: "(B) '长寿' 一词意味着长寿。" +
            "<br><br>" +
            "(A) '简短' 意味着在写作或演讲中使用简明准确的语言。" +
            "<br><br>" +
            "(C) '短暂' 意味着短暂的状态或事实。" +
            "<br><br>" +
            "(D) '短暂' 意味着只持续很短时间的状态或事实。"
    },
    {
        id: 6,
        question: "The coach saw great __________ in the young athlete and decided to give him a chance on the varsity team.",
        chinese_question: "教练看到了这名年轻运动员的巨大 __________，决定给他一个进入校队的机会。",
        answers: [
            { option: "A", answer: "doubt", chinese_answer: "怀疑", chinese_romanization: "huáiyí" },
            { option: "B", answer: "potential", chinese_answer: "潜力", chinese_romanization: "qiánlì" },
            { option: "C", answer: "failure", chinese_answer: "失败", chinese_romanization: "shībài" },
            { option: "D", answer: "certainty", chinese_answer: "确定性", chinese_romanization: "quèdìngxìng" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'potential' means having or showing the capacity to develop into something in the future." +
            "<br><br>" +
            "(A) 'doubt' means a feeling of uncertainty or lack of conviction." +
            "<br><br>" +
            "(C) 'failure' means lack of success." +
            "<br><br>" +
            "(D) 'certainty' means firm conviction that something is the case.",
        chinese_explanation: "(B) '潜力' 一词意味着具有或显示出未来发展的能力。" +
            "<br><br>" +
            "(A) '怀疑' 意味着不确定或缺乏信心的感觉。" +
            "<br><br>" +
            "(C) '失败' 意味着缺乏成功。" +
            "<br><br>" +
            "(D) '确定性' 意味着对某事的坚定信念。"
    },
    {
        id: 7,
        question: "His __________ for writing the book was to share his unique life experiences with others.",
        chinese_question: "他写这本书的__________是与他人分享他独特的人生经历。",
        answers: [
            { option: "A", answer: "emotion", chinese_answer: "情感", chinese_romanization: "qínggǎn" },
            { option: "B", answer: "reason", chinese_answer: "原因", chinese_romanization: "yuányīn" },
            { option: "C", answer: "feeling", chinese_answer: "感觉", chinese_romanization: "gǎnjué" },
            { option: "D", answer: "guess", chinese_answer: "猜测", chinese_romanization: "cāicè" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'reason' means a cause, explanation, or justification for an action or event." +
            "<br><br>" +
            "(A) 'emotion' means a natural instinctive state of mind deriving from one's circumstances, mood, or relationships with others." +
            "<br><br>" +
            "(C) 'feeling' means an emotional state or reaction." +
            "<br><br>" +
            "(D) 'guess' means an estimate or supposition without sufficient information to be sure of being correct.",
        chinese_explanation: "(B) '原因'一词意味着行为或事件的原因、解释或理由。" +
            "<br><br>" +
            "(A) '情感' 意味着一种由个人的环境、情绪或与他人的关系产生的自然本能状态。" +
            "<br><br>" +
            "(C) '感觉' 意味着一种情绪状态或反应。" +
            "<br><br>" +
            "(D) '猜测' 意味着在没有足够信息确保正确的情况下做出的估计或假设。"
    },
    {
        id: 8,
        question: "Her cheerful __________ made her popular among her peers.",
        chinese_question: "她开朗的__________让她在同龄人中很受欢迎。",
        answers: [
            { option: "A", answer: "attitude", chinese_answer: "态度", chinese_romanization: "tàidù" },
            { option: "B", answer: "disposition", chinese_answer: "性情", chinese_romanization: "xìngqíng" },
            { option: "C", answer: "outlook", chinese_answer: "观点", chinese_romanization: "guāndiǎn" },
            { option: "D", answer: "temperament", chinese_answer: "气质", chinese_romanization: "qìzhí" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'disposition' means a person's inherent qualities of mind and character." +
            "<br><br>" +
            "(A) 'attitude' means a settled way of thinking or feeling about something." +
            "<br><br>" +
            "(C) 'outlook' means a person's point of view or general attitude to life." +
            "<br><br>" +
            "(D) 'temperament' means a person's or animal's nature, especially as it permanently affects their behavior.",
        chinese_explanation: "(B) '性情'一词意味着一个人固有的思维和性格品质。" +
            "<br><br>" +
            "(A) '态度' 意味着对某事的固定思维方式或感觉方式。" +
            "<br><br>" +
            "(C) '观点' 意味着一个人的观点或对生活的总体态度。" +
            "<br><br>" +
            "(D) '气质' 意味着一个人或动物的本性，尤其是它永久地影响其行为。"
    },
    {
        id: 9,
        question: "The __________ from high school to college can be challenging for many students.",
        chinese_question: "从高中到大学的 __________ 对许多学生来说是具有挑战性的。",
        answers: [
            { option: "A", answer: "transition", chinese_answer: "过渡", chinese_romanization: "guòdù" },
            { option: "B", answer: "stagnation", chinese_answer: "停滞", chinese_romanization: "tíngzhì" },
            { option: "C", answer: "stability", chinese_answer: "稳定", chinese_romanization: "wěndìng" },
            { option: "D", answer: "permanence", chinese_answer: "永久", chinese_romanization: "yǒngjiǔ" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'transition' means the process or a period of changing from one state or condition to another." +
            "<br><br>" +
            "(B) 'stagnation' means the state of not flowing or moving." +
            "<br><br>" +
            "(C) 'stability' means the state of being stable." +
            "<br><br>" +
            "(D) 'permanence' means the state or quality of lasting or remaining unchanged indefinitely.",
        chinese_explanation: "(A) '过渡' 意味着从一种状态或条件转变为另一种状态或条件的过程或时期。" +
            "<br><br>" +
            "(B) '停滞' 意味着不流动或不移动的状态。" +
            "<br><br>" +
            "(C) '稳定' 意味着稳定的状态。" +
            "<br><br>" +
            "(D) '永久' 意味着无限期地持续或保持不变的状态或质量。"
    },
    {
        id: 10,
        question: "She offered a heartfelt __________ for her mistake, hoping to mend their relationship.",
        chinese_question: "她真诚地 __________ 自己的错误，希望修复他们的关系。",
        answers: [
            { option: "A", answer: "argument", chinese_answer: "争论", chinese_romanization: "zhēnglùn" },
            { option: "B", answer: "apology", chinese_answer: "道歉", chinese_romanization: "dàoqiàn" },
            { option: "C", answer: "compliment", chinese_answer: "赞美", chinese_romanization: "zànměi" },
            { option: "D", answer: "denial", chinese_answer: "否认", chinese_romanization: "fǒurèn" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'apology' means a regretful acknowledgment of an offense or failure." +
            "<br><br>" +
            "(A) 'argument' means an exchange of diverging or opposite views, typically a heated or angry one." +
            "<br><br>" +
            "(C) 'compliment' means a polite expression of praise or admiration." +
            "<br><br>" +
            "(D) 'denial' means the action of declaring something to be untrue.",
        chinese_explanation: "(B) '道歉' 一词意味着对冒犯或失败的遗憾承认。" +
            "<br><br>" +
            "(A) '争论' 意味着交换不同或相反的观点，通常是激烈或愤怒的。" +
            "<br><br>" +
            "(C) '赞美' 意味着对某事的礼貌表达或钦佩。" +
            "<br><br>" +
            "(D) '否认' 意味着宣称某事不真实的行为。"
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
