// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "Her thoughts were __________ by the sudden realization of her mistake.",
        chinese_question: "她的思绪被突然意识到自己的错误所 __________。",
        answers: [
            { option: "A", answer: "interrupted", chinese_answer: "打断", chinese_romanization: "dǎduàn" },
            { option: "B", answer: "focused", chinese_answer: "集中", chinese_romanization: "jízhōng" },
            { option: "C", answer: "clarified", chinese_answer: "澄清", chinese_romanization: "chéngqīng" },
            { option: "D", answer: "solidified", chinese_answer: "固化", chinese_romanization: "gùhuà" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'interrupted' metaphorically means disrupted or broken." +
            "<br><br>" +
            "(B) 'focused' means directed attention or effort at something specific." +
            "<br><br>" +
            "(C) 'clarified' means made clear or understandable." +
            "<br><br>" +
            "(D) 'solidified' means made or became hard or solid.",
        chinese_explanation: "(A) '打断' 比喻被打扰或中断。" +
            "<br><br>" +
            "(B) '集中' 意味着将注意力或努力集中在某个具体的事物上。" +
            "<br><br>" +
            "(C) '澄清' 意味着使清晰或易于理解。" +
            "<br><br>" +
            "(D) '固化' 意味着使变硬或变固。"
    },
    {
        id: 2,
        question: "The lawyer prepared to __________ her client in court.",
        chinese_question: "律师准备在法庭上 __________ 她的客户。",
        answers: [
            { option: "A", answer: "accuse", chinese_answer: "指控", chinese_romanization: "zhǐkòng" },
            { option: "B", answer: "defend", chinese_answer: "辩护", chinese_romanization: "biànhù" },
            { option: "C", answer: "dismiss", chinese_answer: "驳回", chinese_romanization: "bóhuí" },
            { option: "D", answer: "prosecute", chinese_answer: "起诉", chinese_romanization: "qǐsù" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'defend' means to resist an attack made on (someone or something); protect from harm or danger." +
            "<br><br>" +
            "(A) 'accuse' means to charge (someone) with an offense or crime." +
            "<br><br>" +
            "(C) 'dismiss' means to treat as unworthy of serious consideration." +
            "<br><br>" +
            "(D) 'prosecute' means to institute legal proceedings against (a person or organization).",
        chinese_explanation: "(B) '辩护' 意味着抵抗对（某人或某物）的攻击；保护免受伤害或危险。" +
            "<br><br>" +
            "(A) '指控' 意味着指控（某人）犯有某种罪行。" +
            "<br><br>" +
            "(C) '驳回' 意味着认为不值得认真考虑。" +
            "<br><br>" +
            "(D) '起诉' 意味着对（个人或组织）提起法律诉讼。"
    },
    {
        id: 3,
        question: "The email was sent to __________ the appointment for next week.",
        chinese_question: "邮件已发送以 __________ 下周的预约。",
        answers: [
            { option: "A", answer: "confirm", chinese_answer: "确认", chinese_romanization: "quèrèn" },
            { option: "B", answer: "cancel", chinese_answer: "取消", chinese_romanization: "qǔxiāo" },
            { option: "C", answer: "contradict", chinese_answer: "反驳", chinese_romanization: "fǎnbó" },
            { option: "D", answer: "question", chinese_answer: "质疑", chinese_romanization: "zhìyí" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'confirm' means to establish the truth or correctness of (something previously believed, suspected, or feared to be the case)." +
            "<br><br>" +
            "(B) 'cancel' means to decide or announce that a planned event will not take place." +
            "<br><br>" +
            "(C) 'contradict' means to deny the truth of (a statement), especially by asserting the opposite." +
            "<br><br>" +
            "(D) 'question' means to ask questions about something.",
        chinese_explanation: "(A) '确认' 意味着确认（先前认为、怀疑或担心的事情）的真实性或正确性。" +
            "<br><br>" +
            "(B) '取消' 意味着决定或宣布计划的事件不会发生。" +
            "<br><br>" +
            "(C) '反驳' 意味着否认（陈述）的真实性，尤其是通过断言相反。" +
            "<br><br>" +
            "(D) '质疑' 意味着对某事提出问题。"
    },
    {
        id: 4,
        question: "__________ my research, I found that comparing prices before making a purchase is a smart way to save money.",
        chinese_question: "__________我的研究，我发现在购买前比较价格是省钱的聪明办法。",
        answers: [
            { option: "A", answer: "concluding", chinese_answer: "总结", chinese_romanization: "zǒngjié" },
            { option: "B", answer: "avoiding", chinese_answer: "避免", chinese_romanization: "bìmiǎn" },
            { option: "C", answer: "delaying", chinese_answer: "延迟", chinese_romanization: "yánchí" },
            { option: "D", answer: "complicating", chinese_answer: "复杂化", chinese_romanization: "fùzá huà" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'concluding' metaphorically means to finish or complete something." +
            "<br><br>" +
            "(B) 'avoiding' means to keep away from or stop oneself from doing something." +
            "<br><br>" +
            "(C) 'delaying' means to make someone or something late or slow." +
            "<br><br>" +
            "(D) 'complicating' means to make something more difficult or confusing.",
        chinese_explanation: "(A) '总结' 比喻完成或结束某事。" +
            "<br><br>" +
            "(B) '避免' 意味着远离或阻止自己做某事。" +
            "<br><br>" +
            "(C) '延迟' 意味着使某人或某事迟到或变慢。" +
            "<br><br>" +
            "(D) '复杂化' 意味着使某事更困难或混乱。"
    },
    {
        id: 5,
        question: "She couldn't help but __________ her achievements with those of her peers.",
        chinese_question: "她忍不住将自己的成就与同龄人的成就 __________。",
        answers: [
            { option: "A", answer: "diminish", chinese_answer: "贬低", chinese_romanization: "biǎndī" },
            { option: "B", answer: "compare", chinese_answer: "比较", chinese_romanization: "bǐjiào" },
            { option: "C", answer: "forget", chinese_answer: "忘记", chinese_romanization: "wàngjì" },
            { option: "D", answer: "undermine", chinese_answer: "破坏", chinese_romanization: "pòhuài" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'compare' metaphorically means to examine similarities and differences in an evaluative manner." +
            "<br><br>" +
            "(A) 'diminish' means to make or become less." +
            "<br><br>" +
            "(C) 'forget' means to fail to remember." +
            "<br><br>" +
            "(D) 'undermine' means to damage or weaken, especially gradually or insidiously.",
        chinese_explanation: "(B) '比较' 比喻以评估方式检查相似性和差异性。" +
            "<br><br>" +
            "(A) '贬低' 意味着使减少或变少。" +
            "<br><br>" +
            "(C) '忘记' 意味着未能记住。" +
            "<br><br>" +
            "(D) '破坏' 意味着损害或削弱，尤其是逐渐或暗中。"
    },
    {
        id: 6,
        question: "The argument between the two friends began to __________ into a heated confrontation.",
        chinese_question: "两位朋友之间的争论开始__________，变成了一场激烈的对抗。",
        answers: [
            { option: "A", answer: "decrease", chinese_answer: "减少", chinese_romanization: "jiǎnshǎo" },
            { option: "B", answer: "resolve", chinese_answer: "解决", chinese_romanization: "jiějué" },
            { option: "C", answer: "escalate", chinese_answer: "升级", chinese_romanization: "shēngjí" },
            { option: "D", answer: "aggravate", chinese_answer: "加重", chinese_romanization: "jiāzhòng" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'escalate' means to increase rapidly." +
            "<br><br>" +
            "(A) 'decrease' means to make or become smaller or fewer." +
            "<br><br>" +
            "(B) 'resolve' means to settle or find a solution to a problem." +
            "<br><br>" +
            "(D) 'aggravate' means to make a problem, injury, or offense worse or more serious.",
        chinese_explanation: "(C) '升级'一词意味着迅速增加。" +
            "<br><br>" +
            "(A) '减少' 意味着使变小或变少。" +
            "<br><br>" +
            "(B) '解决' 意味着解决或找到问题的解决方案。" +
            "<br><br>" +
            "(D) '加重' 意味着使问题、伤害或冒犯变得更严重。"
    },
    {
        id: 7,
        question: "I highly __________ reading this book; it's both insightful and entertaining.",
        chinese_question: "我强烈__________阅读这本书；它既有见地又有趣。",
        answers: [
            { option: "A", answer: "dismisse", chinese_answer: "驳回", chinese_romanization: "bóhuí" },
            { option: "B", answer: "criticize", chinese_answer: "批评", chinese_romanization: "pīpíng" },
            { option: "C", answer: "recommend", chinese_answer: "推荐", chinese_romanization: "tuījiàn" },
            { option: "D", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'recommend' means to put forward something with approval as being suitable for a particular purpose or role." +
            "<br><br>" +
            "(A) 'dismiss' means to treat as unworthy of serious consideration." +
            "<br><br>" +
            "(B) 'criticiz' means to indicate the faults of someone or something in a disapproving way." +
            "<br><br>" +
            "(D) 'ignore' means to refuse to take notice of.",
        chinese_explanation: "(C) '推荐'一词意味着作为适合特定目的或角色而提出。" +
            "<br><br>" +
            "(A) '驳回' 意味着认为不值得认真考虑。" +
            "<br><br>" +
            "(B) '批评' 意味着以不赞成的方式指出某人或某事的错误。" +
            "<br><br>" +
            "(D) '忽视' 意味着拒绝注意。"
    },
    {
        id: 8,
        question: "The dark clouds __________ to ruin their outdoor picnic.",
        chinese_question: "乌云 __________ 破坏他们的户外野餐。",
        answers: [
            { option: "A", answer: "threatened", chinese_answer: "威胁", chinese_romanization: "wēixié" },
            { option: "B", answer: "promised", chinese_answer: "承诺", chinese_romanization: "chéngnuò" },
            { option: "C", answer: "delighted", chinese_answer: "使高兴", chinese_romanization: "shǐ gāoxìng" },
            { option: "D", answer: "comforted", chinese_answer: "安慰", chinese_romanization: "ānwèi" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'threatened' means to cause (someone or something) to be at risk or in danger." +
            "<br><br>" +
            "(B) 'promised' means to assure someone that one will definitely do, give, or arrange something." +
            "<br><br>" +
            "(C) 'delighted' means to take great pleasure in." +
            "<br><br>" +
            "(D) 'comforted' means to ease the grief or distress of.",
        chinese_explanation: "(A) '威胁' 意味着使（某人或某物）处于危险之中。" +
            "<br><br>" +
            "(B) '承诺' 意味着向某人保证自己一定会做、给或安排某事。" +
            "<br><br>" +
            "(C) '使高兴' 意味着非常愉快。" +
            "<br><br>" +
            "(D) '安慰' 意味着减轻悲伤或痛苦。"
    },
    {
        id: 9,
        question: "They raised funds to __________ the new community center.",
        chinese_question: "他们筹集资金来 __________ 新的社区中心。",
        answers: [
            { option: "A", answer: "criticize", chinese_answer: "批评", chinese_romanization: "pīpíng" },
            { option: "B", answer: "destroy", chinese_answer: "破坏", chinese_romanization: "pòhuài" },
            { option: "C", answer: "undermine", chinese_answer: "削弱", chinese_romanization: "xuēruò" },
            { option: "D", answer: "support", chinese_answer: "支持", chinese_romanization: "zhīchí" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'support' means to bear all or part of the weight of; hold up." +
            "<br><br>" +
            "(A) 'criticize' means to indicate the faults of (someone or something) in a disapproving way." +
            "<br><br>" +
            "(B) 'destroy' means to end the existence of something by damaging or attacking it." +
            "<br><br>" +
            "(C) 'undermine' means to weaken gradually or insidiously.",
        chinese_explanation: "(D) '支持' 意味着承受全部或部分重量；支撑。" +
            "<br><br>" +
            "(A) '批评' 意味着以不赞成的方式指出（某人或某事）的缺点。" +
            "<br><br>" +
            "(B) '破坏' 意味着通过损坏或攻击来结束某物的存在。" +
            "<br><br>" +
            "(C) '削弱' 意味着逐渐或暗中削弱。"
    },
    {
        id: 10,
        question: "The company plans to __________ new software that will improve data security.",
        chinese_question: "公司计划__________新软件，以提高数据安全性。",
        answers: [
            { option: "A", answer: "neglect", chinese_answer: "忽视", chinese_romanization: "hūshì" },
            { option: "B", answer: "dismantle", chinese_answer: "拆除", chinese_romanization: "chāichú" },
            { option: "C", answer: "develop", chinese_answer: "开发", chinese_romanization: "kāifā" },
            { option: "D", answer: "destroy", chinese_answer: "破坏", chinese_romanization: "pòhuài" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'develop' means to grow or cause to grow and become more mature, advanced, or elaborate." +
            "<br><br>" +
            "(A) 'neglect' means to fail to care for properly." +
            "<br><br>" +
            "(B) 'dismantle' means to take something apart." +
            "<br><br>" +
            "(D) 'destroy' means to end the existence of something by damaging or attacking it.",
        chinese_explanation: "(C) '开发'一词意味着成长或导致成长并变得更加成熟、先进或复杂。" +
            "<br><br>" +
            "(A) '忽视' 意味着未能适当照顾。" +
            "<br><br>" +
            "(B) '拆除' 意味着将某物拆开。" +
            "<br><br>" +
            "(D) '破坏' 意味着通过损坏或攻击来结束某物的存在。"
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
