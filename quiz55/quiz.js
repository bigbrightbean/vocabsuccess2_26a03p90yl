// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "The teacher emphasized the importance of __________ in learning a new language, encouraging students to practice daily.",
        chinese_question: "老师强调 __________ 在学习新语言中的重要性，鼓励学生每天练习。",
        answers: [
            { option: "A", answer: "variety", chinese_answer: "多样性", chinese_romanization: "duōyàng xìng" },
            { option: "B", answer: "repetition", chinese_answer: "重复", chinese_romanization: "chóngfù" },
            { option: "C", answer: "innovation", chinese_answer: "创新", chinese_romanization: "chuàngxīn" },
            { option: "D", answer: "spontaneity", chinese_answer: "自发性", chinese_romanization: "zìfā xìng" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'repetition' means the action of repeating something that has already been said or written." +
            "<br><br>" +
            "(A) 'variety' means the quality or state of being different or diverse; the absence of uniformity or monotony." +
            "<br><br>" +
            "(C) 'innovation' means the action or process of innovating." +
            "<br><br>" +
            "(D) 'spontaneity' means the condition of being spontaneous; spontaneous behavior or action.",
        chinese_explanation: "(B) '重复' 意味着重复已经说过或写过的东西的行为。" +
            "<br><br>" +
            "(A) '多样性' 意味着不同或多样的质量或状态；无均匀性或单调。" +
            "<br><br>" +
            "(C) '创新' 意味着创新的行为或过程。" +
            "<br><br>" +
            "(D) '自发性' 意味着自发的条件；自发的行为或行动。"
    },
    {
        id: 2,
        question: "Her __________ in starting the community garden project was praised by local officials and residents alike.",
        chinese_question: "她在启动社区花园项目上的 __________ 受到了当地官员和居民的一致好评。",
        answers: [
            { option: "A", answer: "hesitation", chinese_answer: "犹豫", chinese_romanization: "yóuyù" },
            { option: "B", answer: "reluctance", chinese_answer: "勉强", chinese_romanization: "miǎnqiǎng" },
            { option: "C", answer: "initiative", chinese_answer: "主动性", chinese_romanization: "zhǔdòng xìng" },
            { option: "D", answer: "avoidance", chinese_answer: "避免", chinese_romanization: "bìmiǎn" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'initiative' means the ability to assess and initiate things independently." +
            "<br><br>" +
            "(A) 'hesitation' means the action of pausing or hesitating before saying or doing something." +
            "<br><br>" +
            "(B) 'reluctance' means unwillingness or disinclination to do something." +
            "<br><br>" +
            "(D) 'avoidance' means the action of keeping away from or not doing something.",
        chinese_explanation: "(C) '主动性' 意味着独立评估和发起事情的能力。" +
            "<br><br>" +
            "(A) '犹豫' 意味着在说话或做事前暂停或犹豫的行为。" +
            "<br><br>" +
            "(B) '勉强' 意味着不愿意或不情愿做某事。" +
            "<br><br>" +
            "(D) '避免' 意味着保持远离或不做某事的行为。"
    },
    {
        id: 3,
        question: "The office was in complete __________ after the surprise inspection revealed numerous issues.",
        chinese_question: "突击检查揭示了许多问题后，办公室陷入了完全的 __________。",
        answers: [
            { option: "A", answer: "order", chinese_answer: "秩序", chinese_romanization: "zhìxù" },
            { option: "B", answer: "disarray", chinese_answer: "混乱", chinese_romanization: "hùnluàn" },
            { option: "C", answer: "harmony", chinese_answer: "和谐", chinese_romanization: "héxié" },
            { option: "D", answer: "unity", chinese_answer: "团结", chinese_romanization: "tuánjié" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'disarray' means a state of disorganization or untidiness." +
            "<br><br>" +
            "(A) 'order' means the arrangement or disposition of people or things in relation to each other according to a particular sequence, pattern, or method." +
            "<br><br>" +
            "(C) 'harmony' means the combination of simultaneously sounded musical notes to produce chords and chord progressions having a pleasing effect." +
            "<br><br>" +
            "(D) 'unity' means the state of being united or joined as a whole.",
        chinese_explanation: "(B) '混乱' 一词意味着混乱或不整洁的状态。" +
            "<br><br>" +
            "(A) '秩序' 意味着根据特定顺序、模式或方法对人或事物进行安排或布置。" +
            "<br><br>" +
            "(C) '和谐' 意味着同时发出的音乐音符的组合，产生和弦和和弦进行，具有令人愉悦的效果。" +
            "<br><br>" +
            "(D) '团结' 意味着作为一个整体团结或联合的状态。"
    },
    {
        id: 4,
        question: "Even amidst her hectic schedule, she always found a moment of __________ to recharge and relax.",
        chinese_question: "即使在繁忙的日程中，她总能找到片刻的 __________ 来充电和放松。",
        answers: [
            { option: "A", answer: "turmoil", chinese_answer: "混乱", chinese_romanization: "hùnluàn" },
            { option: "B", answer: "chaos", chinese_answer: "动荡", chinese_romanization: "dòngdàng" },
            { option: "C", answer: "leisure", chinese_answer: "闲暇", chinese_romanization: "xiánxiá" },
            { option: "D", answer: "stress", chinese_answer: "压力", chinese_romanization: "yālì" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'leisure' figuratively means a period of rest and relaxation." +
            "<br><br>" +
            "(A) 'turmoil' means a state of great disturbance, confusion, or uncertainty." +
            "<br><br>" +
            "(B) 'chaos' means complete disorder and confusion." +
            "<br><br>" +
            "(D) 'stress' means a state of mental or emotional strain or tension resulting from adverse or very demanding circumstances.",
        chinese_explanation: "(C) '闲暇' 在比喻意义上意味着休息和放松的时期。" +
            "<br><br>" +
            "(A) '混乱' 意味着极大的骚动、困惑或不确定的状态。" +
            "<br><br>" +
            "(B) '动荡' 意味着完全的混乱和困惑。" +
            "<br><br>" +
            "(D) '压力' 意味着由于不利或非常苛刻的环境而导致的心理或情绪紧张状态。"
    },
    {
        id: 5,
        question: "The author's new book received both praise and __________ from the reviewers, sparking lively debates.",
        chinese_question: "作者的新书得到了评论家的赞扬和 __________，引发了热烈的讨论。",
        answers: [
            { option: "A", answer: "admiration", chinese_answer: "钦佩", chinese_romanization: "qīnpèi" },
            { option: "B", answer: "indifference", chinese_answer: "无动于衷", chinese_romanization: "wúdòngyúzhōng" },
            { option: "C", answer: "criticism", chinese_answer: "批评", chinese_romanization: "pīpíng" },
            { option: "D", answer: "silence", chinese_answer: "沉默", chinese_romanization: "chénmò" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'criticism' means the expression of disapproval of someone or something based on perceived faults or mistakes." +
            "<br><br>" +
            "(A) 'admiration' means respect and warm approval." +
            "<br><br>" +
            "(B) 'indifference' means lack of interest, concern, or sympathy." +
            "<br><br>" +
            "(D) 'silence' means complete absence of sound.",
        chinese_explanation: "(C) '批评' 一词意味着基于感知到的缺点或错误对某人或某事的反对。" +
            "<br><br>" +
            "(A) '钦佩' 意味着尊敬和热情的赞同。" +
            "<br><br>" +
            "(B) '无动于衷' 意味着缺乏兴趣、关心或同情。" +
            "<br><br>" +
            "(D) '沉默' 意味着完全没有声音。"
    },
    {
        id: 6,
        question: "The rapid spread of the flu created an __________ that overwhelmed local hospitals.",
        chinese_question: "流感的迅速传播造成了 __________，使当地医院不堪重负。",
        answers: [
            { option: "A", answer: "cure", chinese_answer: "治愈", chinese_romanization: "zhìyù" },
            { option: "B", answer: "epidemic", chinese_answer: "流行病", chinese_romanization: "liúxíng bìng" },
            { option: "C", answer: "recovery", chinese_answer: "恢复", chinese_romanization: "huīfù" },
            { option: "D", answer: "prevention", chinese_answer: "预防", chinese_romanization: "yùfáng" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'epidemic' means a widespread occurrence of an infectious disease in a community at a particular time." +
            "<br><br>" +
            "(A) 'cure' means to relieve (a person or animal) of the symptoms of a disease or condition." +
            "<br><br>" +
            "(C) 'recovery' means a return to a normal state of health, mind, or strength." +
            "<br><br>" +
            "(D) 'prevention' means the action of stopping something from happening or arising.",
        chinese_explanation: "(B) '流行病' 一词意味着在特定时间内社区中传染病的广泛发生。" +
            "<br><br>" +
            "(A) '治愈' 意味着减轻（人或动物）的疾病或状况的症状。" +
            "<br><br>" +
            "(C) '恢复' 意味着恢复到健康、心理或力量的正常状态。" +
            "<br><br>" +
            "(D) '预防' 意味着阻止某事发生或出现的行为。"
    },
    {
        id: 7,
        question: "Being a member of the exclusive club came with many __________, including access to private events.",
        chinese_question: "成为这个专属俱乐部的成员带来了许多 __________，包括参加私人活动的机会。",
        answers: [
            { option: "A", answer: "disadvantages", chinese_answer: "不利条件", chinese_romanization: "bùlì tiáojiàn" },
            { option: "B", answer: "hardships", chinese_answer: "困难", chinese_romanization: "kùnnán" },
            { option: "C", answer: "privileges", chinese_answer: "特权", chinese_romanization: "tèquán" },
            { option: "D", answer: "restrictions", chinese_answer: "限制", chinese_romanization: "xiànzhì" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'privileges' means special rights, advantages, or immunities granted or available only to a particular person or group." +
            "<br><br>" +
            "(A) 'disadvantages' means unfavorable conditions or circumstances that reduce the chances of success or effectiveness." +
            "<br><br>" +
            "(B) 'hardships' means severe suffering or privation." +
            "<br><br>" +
            "(D) 'restrictions' means limitations or controls on something.",
        chinese_explanation: "(C) '特权' 一词意味着仅授予或仅某个特定人或群体享有的特别权利、优势或豁免。" +
            "<br><br>" +
            "(A) '不利条件' 意味着减少成功或有效性机会的不利条件或环境。" +
            "<br><br>" +
            "(B) '困难' 意味着严重的痛苦或困苦。" +
            "<br><br>" +
            "(D) '限制' 意味着对某事的限制或控制。"
    },
    {
        id: 8,
        question: "Her speech had a significant __________ on the audience, inspiring many to take action.",
        chinese_question: "她的演讲对观众产生了重大 __________，激励了许多人采取行动。",
        answers: [
            { option: "A", answer: "influence", chinese_answer: "影响", chinese_romanization: "yǐngxiǎng" },
            { option: "B", answer: "failure", chinese_answer: "失败", chinese_romanization: "shībài" },
            { option: "C", answer: "avoidance", chinese_answer: "回避", chinese_romanization: "huíbì" },
            { option: "D", answer: "consequence", chinese_answer: "结果", chinese_romanization: "jiéguǒ" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'influence' means the capacity to have an effect on the character, development, or behavior of someone or something." +
            "<br><br>" +
            "(B) 'failure' means lack of success." +
            "<br><br>" +
            "(C) 'avoidance' means the action of keeping away from or not doing something." +
            "<br><br>" +
            "(D) 'consequence' means a result or effect of an action or condition.",
        chinese_explanation: "(A) '影响' 意味着对某人或某事的性格、发展或行为产生影响的能力。" +
            "<br><br>" +
            "(B) '失败' 意味着缺乏成功。" +
            "<br><br>" +
            "(C) '回避' 意味着避免或不做某事的行为。" +
            "<br><br>" +
            "(D) '结果' 意味着某一行为或情况的结果或影响。"
    },
    {
        id: 9,
        question: "Her unique perspective made a significant __________ in the outcome of the discussion.",
        chinese_question: "她独特的观点对讨论的结果产生了显著的__________。",
        answers: [
            { option: "A", answer: "similarity", chinese_answer: "相似", chinese_romanization: "xiāngsì" },
            { option: "B", answer: "indifference", chinese_answer: "冷漠", chinese_romanization: "lěngmò" },
            { option: "C", answer: "difference", chinese_answer: "差异", chinese_romanization: "chāyì" },
            { option: "D", answer: "agreement", chinese_answer: "一致", chinese_romanization: "yīzhì" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'difference' means a point or way in which people or things are dissimilar. Figuratively, it can mean an impact or influence." +
            "<br><br>" +
            "(A) 'similarity' means the state or fact of being similar." +
            "<br><br>" +
            "(B) 'indifference' means lack of interest, concern, or sympathy." +
            "<br><br>" +
            "(D) 'agreement' means harmony or accordance in opinion or feeling.",
        chinese_explanation: "(C) '差异'一词意味着人或事物不同的一个点或方式。比喻地，它可以表示影响或影响。" +
            "<br><br>" +
            "(A) '相似' 意味着相似的状态或事实。" +
            "<br><br>" +
            "(B) '冷漠' 意味着缺乏兴趣、关心或同情。" +
            "<br><br>" +
            "(D) '一致' 意味着意见或感情上的和谐或一致。"
    },
    {
        id: 10,
        question: "The museum's exhibit highlighted the __________ committed during the war.",
        chinese_question: "博物馆的展览突出了战争期间犯下的 __________。",
        answers: [
            { option: "A", answer: "atrocities", chinese_answer: "暴行", chinese_romanization: "bàoxíng" },
            { option: "B", answer: "triumphs", chinese_answer: "胜利", chinese_romanization: "shènglì" },
            { option: "C", answer: "advancements", chinese_answer: "进步", chinese_romanization: "jìnbù" },
            { option: "D", answer: "discoveries", chinese_answer: "发现", chinese_romanization: "fāxiàn" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'atrocities' means extremely wicked or cruel acts, typically involving physical violence or injury." +
            "<br><br>" +
            "(B) 'triumphs' means great victories or achievements." +
            "<br><br>" +
            "(C) 'advancements' means the process of promoting a cause or plan." +
            "<br><br>" +
            "(D) 'discoveries' means the action or process of finding or learning something for the first time.",
        chinese_explanation: "(A) '暴行' 意味着极其邪恶或残忍的行为，通常涉及身体暴力或伤害。" +
            "<br><br>" +
            "(B) '胜利' 意味着伟大的胜利或成就。" +
            "<br><br>" +
            "(C) '进步' 意味着推动某个事业或计划的过程。" +
            "<br><br>" +
            "(D) '发现' 意味着首次找到或学习某事的行动或过程。"
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
