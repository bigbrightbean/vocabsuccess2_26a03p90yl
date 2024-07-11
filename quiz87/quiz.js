// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "It's hard to __________ the joy he felt when he heard the good news.",
        chinese_question: "当他听到这个好消息时，很难__________他感受到的喜悦。",
        answers: [
            { option: "A", answer: "obfuscate", chinese_answer: "使模糊", chinese_romanization: "shǐ móhú" },
            { option: "B", answer: "describe", chinese_answer: "描述", chinese_romanization: "miáoshù" },
            { option: "C", answer: "belittle", chinese_answer: "贬低", chinese_romanization: "biǎndī" },
            { option: "D", answer: "simplify", chinese_answer: "简化", chinese_romanization: "jiǎnhuà" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'describe' means to give an account in words of someone or something, including all the relevant characteristics, qualities, or events. Figuratively, it can mean to express or convey feelings or experiences." +
            "<br><br>" +
            "(A) 'obfuscate' means to render obscure, unclear, or unintelligible." +
            "<br><br>" +
            "(C) 'belittle' means make someone or something seem less impressive or important." +
            "<br><br>" +
            "(D) 'simplify' means to make something simpler or easier to do or understand.",
        chinese_explanation: "(B) '描述'一词意味着用语言描述某人或某物，包括所有相关的特征、品质或事件。比喻地，它可以表示表达或传达感受或经历。" +
            "<br><br>" +
            "(A) '使模糊' 意味着使模糊不清、难以理解。" +
            "<br><br>" +
            "(C) '贬低' 意味着让某人或某物显得不那么令人印象深刻或重要。" +
            "<br><br>" +
            "(D) '简化' 意味着使某事更简单或更容易做或理解。"
    },
    {
        id: 2,
        question: "The scientist used a model to __________ the principles of physics to the audience.",
        chinese_question: "科学家用一个模型向观众 __________ 了物理学的原理。",
        answers: [
            { option: "A", answer: "confuse", chinese_answer: "使困惑", chinese_romanization: "shǐ kùnhuò" },
            { option: "B", answer: "demonstrate", chinese_answer: "演示", chinese_romanization: "yǎnshì" },
            { option: "C", answer: "obscure", chinese_answer: "掩盖", chinese_romanization: "yǎngài" },
            { option: "D", answer: "simplify", chinese_answer: "简化", chinese_romanization: "jiǎnhuà" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'demonstrate' means clearly show the existence or truth of (something) by giving proof or evidence." +
            "<br><br>" +
            "(A) 'confuse' means cause (someone) to become bewildered or perplexed." +
            "<br><br>" +
            "(C) 'obscure' means keep from being seen; conceal." +
            "<br><br>" +
            "(D) 'simplify' means make (something) simpler or easier to do or understand.",
        chinese_explanation: "(B) '演示' 一词意味着通过提供证据或证明清楚地显示（某事）的存在或真实性。" +
            "<br><br>" +
            "(A) '使困惑' 意味着使（某人）变得迷惑或困惑。" +
            "<br><br>" +
            "(C) '掩盖' 意味着使不被看到；隐藏。" +
            "<br><br>" +
            "(D) '简化' 意味着使（某物）更简单或更容易做或理解。"
    },
    {
        id: 3,
        question: "He tends to __________ solitude over social gatherings.",
        chinese_question: "他倾向于 __________ 孤独而不是社交聚会。",
        answers: [
            { option: "A", answer: "prefer", chinese_answer: "更喜欢", chinese_romanization: "gèng xǐhuān" },
            { option: "B", answer: "endure", chinese_answer: "忍受", chinese_romanization: "rěnshòu" },
            { option: "C", answer: "despise", chinese_answer: "鄙视", chinese_romanization: "bǐshì" },
            { option: "D", answer: "tolerate", chinese_answer: "容忍", chinese_romanization: "róngrěn" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'prefer' metaphorically means to favor one condition or situation over another." +
            "<br><br>" +
            "(B) 'endure' means to suffer (something painful or difficult) patiently." +
            "<br><br>" +
            "(C) 'despise' means to feel contempt or a deep repugnance for." +
            "<br><br>" +
            "(D) 'tolerate' means to allow the existence, occurrence, or practice of (something that one does not necessarily like or agree with) without interference.",
        chinese_explanation: "(A) '更喜欢' 比喻偏爱一种情况或状态胜过另一种。" +
            "<br><br>" +
            "(B) '忍受' 意味着耐心地忍受（某些痛苦或困难的事情）。" +
            "<br><br>" +
            "(C) '鄙视' 意味着对某物感到轻视或强烈反感。" +
            "<br><br>" +
            "(D) '容忍' 意味着在不干涉的情况下允许（某些自己不一定喜欢或同意的事情）的存在、发生或实践。"
    },
    {
        id: 4,
        question: "From the evidence presented, we can __________ that the suspect was present at the crime scene.",
        chinese_question: "根据提供的证据，我们可以__________嫌疑人出现在犯罪现场。",
        answers: [
            { option: "A", answer: "misinterpret", chinese_answer: "误解", chinese_romanization: "wùjiě" },
            { option: "B", answer: "deny", chinese_answer: "否认", chinese_romanization: "fǒurèn" },
            { option: "C", answer: "infer", chinese_answer: "推断", chinese_romanization: "tuīduàn" },
            { option: "D", answer: "overlook", chinese_answer: "忽略", chinese_romanization: "hūlüè" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'infer' means to deduce or conclude information from evidence and reasoning rather than from explicit statements." +
            "<br><br>" +
            "(A) 'misinterpret' means to understand or explain something incorrectly." +
            "<br><br>" +
            "(B) 'deny' means to state that one refuses to admit the truth or existence of something." +
            "<br><br>" +
            "(D) 'overlook' means to fail to notice something.",
        chinese_explanation: "(C) '推断' 一词意味着从证据和推理中推测或得出信息，而不是从明确的陈述中得出。" +
            "<br><br>" +
            "(A) '误解' 意味着错误地理解或解释某事。" +
            "<br><br>" +
            "(B) '否认' 意味着声明拒绝承认某事的真实性或存在。" +
            "<br><br>" +
            "(D) '忽略' 意味着未能注意到某事。"
    },
    {
        id: 5,
        question: "He continued to __________ that he was innocent despite the evidence against him.",
        chinese_question: "尽管有证据对他不利，他仍然 __________ 自己是无辜的。",
        answers: [
            { option: "A", answer: "claim", chinese_answer: "坚持", chinese_romanization: "jiānchí" },
            { option: "B", answer: "deny", chinese_answer: "否认", chinese_romanization: "fǒurèn" },
            { option: "C", answer: "doubt", chinese_answer: "怀疑", chinese_romanization: "huáiyí" },
            { option: "D", answer: "forget", chinese_answer: "忘记", chinese_romanization: "wàngjì" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'claim' metaphorically means to assert something as true." +
            "<br><br>" +
            "(B) 'deny' means to state that one refuses to admit the truth or existence of." +
            "<br><br>" +
            "(C) 'doubt' means to feel uncertain about." +
            "<br><br>" +
            "(D) 'forget' means to fail to remember.",
        chinese_explanation: "(A) '坚持' 比喻断言某事是真的。" +
            "<br><br>" +
            "(B) '否认' 意味着表示拒绝承认事实或存在。" +
            "<br><br>" +
            "(C) '怀疑' 意味着对某事感到不确定。" +
            "<br><br>" +
            "(D) '忘记' 意味着未能记住。"
    },
    {
        id: 6,
        question: "The tall skyscraper __________ the city skyline, making it the most prominent structure.",
        chinese_question: "高耸的摩天大楼__________城市的天际线，成为最显眼的建筑。",
        answers: [
            { option: "A", answer: "blended", chinese_answer: "融合", chinese_romanization: "rónghé" },
            { option: "B", answer: "followed", chinese_answer: "跟随", chinese_romanization: "gēnsuí" },
            { option: "C", answer: "complemented", chinese_answer: "补充", chinese_romanization: "bǔchōng" },
            { option: "D", answer: "dominated", chinese_answer: "支配", chinese_romanization: "zhīpèi" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'dominated' means to have control over or to be the most noticeable." +
            "<br><br>" +
            "(A) 'blended' means to mix with another substance so that they combine together." +
            "<br><br>" +
            "(B) 'followed' means to come after in time or order." +
            "<br><br>" +
            "(C) 'complemented' means to add to something in a way that enhances or improves it.",
        chinese_explanation: "(D) '支配'一词意味着控制或最显眼的。" +
            "<br><br>" +
            "(A) '融合' 意味着与另一种物质混合，使它们结合在一起。" +
            "<br><br>" +
            "(B) '跟随' 意味着按时间或顺序在后面。" +
            "<br><br>" +
            "(C) '补充' 意味着以增加或改善它的方式添加到某事物中。"
    },
    {
        id: 7,
        question: "To __________ great things, one must be willing to take risks.",
        chinese_question: "要 __________ 伟大的事情，一个人必须愿意冒险。",
        answers: [
            { option: "A", answer: "accomplish", chinese_answer: "实现", chinese_romanization: "shíxiàn" },
            { option: "B", answer: "abandon", chinese_answer: "放弃", chinese_romanization: "fàngqì" },
            { option: "C", answer: "neglect", chinese_answer: "忽略", chinese_romanization: "hūlüè" },
            { option: "D", answer: "reject", chinese_answer: "拒绝", chinese_romanization: "jùjué" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'accomplish' metaphorically means to achieve something noteworthy." +
            "<br><br>" +
            "(B) 'abandon' means to give up completely." +
            "<br><br>" +
            "(C) 'neglect' means to fail to care for or attend to properly." +
            "<br><br>" +
            "(D) 'reject' means to refuse to accept.",
        chinese_explanation: "(A) '实现' 比喻成就某些值得注意的事情。" +
            "<br><br>" +
            "(B) '放弃' 意味着完全放弃。" +
            "<br><br>" +
            "(C) '忽略' 意味着未能妥善照顾或处理。" +
            "<br><br>" +
            "(D) '拒绝' 意味着拒绝接受。"
    },
    {
        id: 8,
        question: "She began to __________ when asked if she would take on the new project, unsure if she had the time and resources.",
        chinese_question: "当被问及是否会承担新项目时，她开始__________，不确定自己是否有时间和资源。",
        answers: [
            { option: "A", answer: "agree", chinese_answer: "同意", chinese_romanization: "tóngyì" },
            { option: "B", answer: "proceed", chinese_answer: "进行", chinese_romanization: "jìnxíng" },
            { option: "C", answer: "decide", chinese_answer: "决定", chinese_romanization: "juédìng" },
            { option: "D", answer: "hesitate", chinese_answer: "犹豫", chinese_romanization: "yóuyù" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'hesitate' means pause before saying or doing something, especially through uncertainty." +
            "<br><br>" +
            "(A) 'agree' means to have the same opinion about something." +
            "<br><br>" +
            "(B) 'proceed' means to begin or continue a course of action." +
            "<br><br>" +
            "(C) 'decide' means to come to a resolution in the mind.",
        chinese_explanation: "(D) '犹豫'一词意味着在说或做某事之前犹豫，尤其是通过不确定性。" +
            "<br><br>" +
            "(A) '同意' 意味着对某事持有相同的意见。" +
            "<br><br>" +
            "(B) '进行' 意味着开始或继续一个行动。" +
            "<br><br>" +
            "(C) '决定' 意味着在心中做出决议。"
    },
    {
        id: 9,
        question: "She wanted to __________ a helping hand to those in need.",
        chinese_question: "她想要向需要帮助的人 __________ 援助之手。",
        answers: [
            { option: "A", answer: "extend", chinese_answer: "提供", chinese_romanization: "tígōng" },
            { option: "B", answer: "retract", chinese_answer: "撤回", chinese_romanization: "chèhuí" },
            { option: "C", answer: "withhold", chinese_answer: "保留", chinese_romanization: "bǎoliú" },
            { option: "D", answer: "abandon", chinese_answer: "放弃", chinese_romanization: "fàngqì" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'extend' metaphorically means to offer or provide." +
            "<br><br>" +
            "(B) 'retract' means to draw back or withdraw." +
            "<br><br>" +
            "(C) 'withhold' means to refuse to give something that is due or desired." +
            "<br><br>" +
            "(D) 'abandon' means to give up completely.",
        chinese_explanation: "(A) '提供' 比喻提供或给予。" +
            "<br><br>" +
            "(B) '撤回' 意味着收回或撤退。" +
            "<br><br>" +
            "(C) '保留' 意味着拒绝给予应有或期望的东西。" +
            "<br><br>" +
            "(D) '放弃' 意味着完全放弃。"
    },
    {
        id: 10,
        question: "Her artwork was a way to __________ her innermost thoughts.",
        chinese_question: "她的艺术作品是一种 __________ 她内心深处思想的方式。",
        answers: [
            { option: "A", answer: "confine", chinese_answer: "限制", chinese_romanization: "xiànzhì" },
            { option: "B", answer: "obscure", chinese_answer: "隐藏", chinese_romanization: "yǐncáng" },
            { option: "C", answer: "dismiss", chinese_answer: "忽视", chinese_romanization: "hūshì" },
            { option: "D", answer: "express", chinese_answer: "表达", chinese_romanization: "biǎodá" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'express' metaphorically means to convey or communicate." +
            "<br><br>" +
            "(A) 'confine' means to keep or restrict someone or something within certain limits." +
            "<br><br>" +
            "(B) 'obscure' means to keep from being seen; conceal." +
            "<br><br>" +
            "(C) 'dismiss' means to treat as unworthy of serious consideration.",
        chinese_explanation: "(D) '表达' 比喻传达或沟通。" +
            "<br><br>" +
            "(A) '限制' 意味着在某些限度内保持或限制某人或某物。" +
            "<br><br>" +
            "(B) '隐藏' 意味着从视线中隐藏；隐藏。" +
            "<br><br>" +
            "(C) '忽视' 意味着认为不值得认真考虑。"
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
