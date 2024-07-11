// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "Her writing is __________ by vivid descriptions and complex characters, making her novels highly engaging.",
        chinese_question: "她的写作 __________ 了生动的描述和复杂的人物，使她的小说极具吸引力。",
        answers: [
            { option: "A", answer: "marred", chinese_answer: "破坏", chinese_romanization: "pòhuài" },
            { option: "B", answer: "characterized", chinese_answer: "特点是", chinese_romanization: "tèdiǎn shì" },
            { option: "C", answer: "obscured", chinese_answer: "掩盖", chinese_romanization: "yǎngài" },
            { option: "D", answer: "simplified", chinese_answer: "简化", chinese_romanization: "jiǎnhuà" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'characterized' means describe the distinctive nature or features of." +
            "<br><br>" +
            "(A) 'marred' means impair the appearance of; disfigure." +
            "<br><br>" +
            "(C) 'obscured' means keep from being seen; conceal." +
            "<br><br>" +
            "(D) 'simplified' means make (something) simpler or easier to do or understand.",
        chinese_explanation: "(B) '特点是' 一词意味着描述事物的独特性质或特征。" +
            "<br><br>" +
            "(A) '破坏' 意味着损害外观；毁损。" +
            "<br><br>" +
            "(C) '掩盖' 意味着使不被看到；隐藏。" +
            "<br><br>" +
            "(D) '简化' 意味着使（某事）更简单或更容易做或理解。"
    },
    {
        id: 2,
        question: "The urgent need for medical supplies __________ the organization to launch an emergency relief fund.",
        chinese_question: "对医疗用品的迫切需求 __________ 该组织启动紧急救援基金。",
        answers: [
            { option: "A", answer: "discouraged", chinese_answer: "劝阻", chinese_romanization: "quànzǔ" },
            { option: "B", answer: "relaxed", chinese_answer: "放松", chinese_romanization: "fàngsōng" },
            { option: "C", answer: "dissuaded", chinese_answer: "劝阻", chinese_romanization: "quànzǔ" },
            { option: "D", answer: "compelled", chinese_answer: "强迫", chinese_romanization: "qiǎngpò" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'compelled' means force or oblige (someone) to do something." +
            "<br><br>" +
            "(A) 'discouraged' means cause (someone) to lose confidence or enthusiasm." +
            "<br><br>" +
            "(B) 'relaxed' means make or become less tense or anxious." +
            "<br><br>" +
            "(C) 'dissuaded' means persuade (someone) not to take a particular course of action.",
        chinese_explanation: "(D) '强迫' 一词意味着强迫或迫使（某人）做某事。" +
            "<br><br>" +
            "(A) '劝阻' 意味着使（某人）失去信心或热情。" +
            "<br><br>" +
            "(B) '放松' 意味着使或变得不那么紧张或焦虑。" +
            "<br><br>" +
            "(C) '劝阻' 意味着说服（某人）不要采取某种行动。"
    },
    {
        id: 3,
        question: "After reviewing all the evidence, the detective was able to __________ that the suspect was innocent.",
        chinese_question: "在审查了所有证据后，侦探能够 __________ 嫌疑人是无辜的。",
        answers: [
            { option: "A", answer: "begin", chinese_answer: "开始", chinese_romanization: "kāishǐ" },
            { option: "B", answer: "dispute", chinese_answer: "争论", chinese_romanization: "zhēnglùn" },
            { option: "C", answer: "conclude", chinese_answer: "得出结论", chinese_romanization: "dé chū jiélùn" },
            { option: "D", answer: "hesitate", chinese_answer: "犹豫", chinese_romanization: "yóuyù" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'conclude' means bring (something) to an end." +
            "<br><br>" +
            "(A) 'begin' means start." +
            "<br><br>" +
            "(B) 'dispute' means argue about (something); discuss heatedly." +
            "<br><br>" +
            "(D) 'hesitate' means pause before saying or doing something, especially through uncertainty.",
        chinese_explanation: "(C) '得出结论' 一词意味着结束（某事）。" +
            "<br><br>" +
            "(A) '开始' 意味着开始。" +
            "<br><br>" +
            "(B) '争论' 意味着争论（某事）；激烈讨论。" +
            "<br><br>" +
            "(D) '犹豫' 意味着在说或做某事之前暂停，尤其是由于不确定性。"
    },
    {
        id: 4,
        question: "The artist used bright colors to __________ with the dark background, creating a striking effect.",
        chinese_question: "艺术家使用亮色与深色背景形成 __________，创造出引人注目的效果。",
        answers: [
            { option: "A", answer: "blend", chinese_answer: "混合", chinese_romanization: "hùnhé" },
            { option: "B", answer: "match", chinese_answer: "匹配", chinese_romanization: "pǐpèi" },
            { option: "C", answer: "contrast", chinese_answer: "对比", chinese_romanization: "duìbǐ" },
            { option: "D", answer: "harmonize", chinese_answer: "和谐", chinese_romanization: "héxié" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'contrast' means differ strikingly." +
            "<br><br>" +
            "(A) 'blend' means mix (a substance) with another substance so that they combine together as a mass." +
            "<br><br>" +
            "(B) 'match' means correspond or cause to correspond in some essential respect; make or be harmonious." +
            "<br><br>" +
            "(D) 'harmonize' means add notes to (a melody) to produce harmony.",
        chinese_explanation: "(C) '对比' 一词意味着显著地不同。" +
            "<br><br>" +
            "(A) '混合' 意味着将（一种物质）与另一种物质混合，使它们结合在一起形成一团。" +
            "<br><br>" +
            "(B) '匹配' 意味着在某些重要方面对应或使其对应；使和谐。" +
            "<br><br>" +
            "(D) '和谐' 意味着为（旋律）添加音符以产生和声。"
    },
    {
        id: 5,
        question: "The touching speech __________ a strong emotional response from the audience, leaving many in tears.",
        chinese_question: "感人的演讲 __________ 观众强烈的情感反应，许多人泪流满面。",
        answers: [
            { option: "A", answer: "suppressed", chinese_answer: "压制", chinese_romanization: "yāzhì" },
            { option: "B", answer: "diminished", chinese_answer: "减少", chinese_romanization: "jiǎnshǎo" },
            { option: "C", answer: "stifled", chinese_answer: "压抑", chinese_romanization: "yāyì" },
            { option: "D", answer: "evoked", chinese_answer: "唤起", chinese_romanization: "huànqǐ" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'evoked' means bring or recall to the conscious mind." +
            "<br><br>" +
            "(A) 'suppressed' means forcibly put an end to." +
            "<br><br>" +
            "(B) 'diminished' means make or become less." +
            "<br><br>" +
            "(C) 'stifled' means restrain (a reaction) or stop oneself acting on (an emotion).",
        chinese_explanation: "(D) '唤起' 一词意味着带来或唤起到意识中。" +
            "<br><br>" +
            "(A) '压制' 意味着强行结束。" +
            "<br><br>" +
            "(B) '减少' 意味着使变少或变少。" +
            "<br><br>" +
            "(C) '压抑' 意味着抑制（反应）或阻止自己表现（情绪）。"
    },
    {
        id: 6,
        question: "Despite numerous challenges, they continued to __________ to find a solution to the problem, showing determination and resilience.",
        chinese_question: "尽管面临许多挑战，他们继续 __________ 解决问题，表现出决心和韧性。",
        answers: [
            { option: "A", answer: "abandon", chinese_answer: "放弃", chinese_romanization: "fàngqì" },
            { option: "B", answer: "cease", chinese_answer: "停止", chinese_romanization: "tíngzhǐ" },
            { option: "C", answer: "endeavour", chinese_answer: "努力", chinese_romanization: "nǔlì" },
            { option: "D", answer: "neglect", chinese_answer: "忽视", chinese_romanization: "hūshì" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'endeavour' means try hard to do or achieve something." +
            "<br><br>" +
            "(A) 'abandon' means give up completely (a course of action, a practice, or a way of thinking)." +
            "<br><br>" +
            "(B) 'cease' means bring or come to an end." +
            "<br><br>" +
            "(D) 'neglect' means fail to care for properly.",
        chinese_explanation: "(C) '努力' 一词意味着努力做或实现某事。" +
            "<br><br>" +
            "(A) '放弃' 意味着完全放弃（行动、实践或思维方式）。" +
            "<br><br>" +
            "(B) '停止' 意味着结束或结束。" +
            "<br><br>" +
            "(D) '忽视' 意味着未能适当照顾。"
    },
    {
        id: 7,
        question: "Several hours had __________ before the hikers realized they were lost and decided to head back.",
        chinese_question: "几个小时 __________，徒步旅行者才意识到他们迷路了，决定返回。",
        answers: [
            { option: "A", answer: "frozen", chinese_answer: "冻结", chinese_romanization: "dòngjié" },
            { option: "B", answer: "elapsed", chinese_answer: "过去", chinese_romanization: "guòqù" },
            { option: "C", answer: "paused", chinese_answer: "暂停", chinese_romanization: "zàntíng" },
            { option: "D", answer: "halted", chinese_answer: "停止", chinese_romanization: "tíngzhǐ" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'elapsed' means (of time) pass or go by." +
            "<br><br>" +
            "(A) 'frozen' means turned into ice or another solid as a result of extreme cold." +
            "<br><br>" +
            "(C) 'paused' means interrupted action or speech briefly." +
            "<br><br>" +
            "(D) 'halted' means brought or came to an abrupt stop.",
        chinese_explanation: "(B) '过去' 一词意味着（时间）过去或经过。" +
            "<br><br>" +
            "(A) '冻结' 意味着因极冷而变成冰或另一种固体。" +
            "<br><br>" +
            "(C) '暂停' 意味着暂时中断动作或讲话。" +
            "<br><br>" +
            "(D) '停止' 意味着突然停止或停止。"
    },
    {
        id: 8,
        question: "The word 'democracy' is __________ from the Greek words 'demos' and 'kratos', meaning 'people' and 'power'.",
        chinese_question: "“民主”一词 __________ 于希腊词“demos”和“kratos”，意思是“人民”和“权力”。",
        answers: [
            { option: "A", answer: "invented", chinese_answer: "发明", chinese_romanization: "fāmíng" },
            { option: "B", answer: "unrelated", chinese_answer: "无关", chinese_romanization: "wúguān" },
            { option: "C", answer: "opposed", chinese_answer: "反对", chinese_romanization: "fǎnduì" },
            { option: "D", answer: "derived", chinese_answer: "来源", chinese_romanization: "láiyuán" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'derived' means obtain something from (a specified source)." +
            "<br><br>" +
            "(A) 'invented' means create or design (something that has not existed before); be the originator of." +
            "<br><br>" +
            "(B) 'unrelated' means not connected or related." +
            "<br><br>" +
            "(C) 'opposed' means eager to prevent or put an end to; disapproving of or disagreeing with.",
        chinese_explanation: "(D) '来源' 一词意味着从（指定来源）获得某物。" +
            "<br><br>" +
            "(A) '发明' 意味着创造或设计（以前不存在的东西）；成为...的发明者。" +
            "<br><br>" +
            "(B) '无关' 意味着没有连接或关系。" +
            "<br><br>" +
            "(C) '反对' 意味着渴望阻止或结束；不赞成或不同意。"
    },
    {
        id: 9,
        question: "The two companies decided to __________ their resources to form a stronger and more competitive entity.",
        chinese_question: "两家公司决定 __________ 他们的资源，以形成一个更强大、更具竞争力的实体。",
        answers: [
            { option: "A", answer: "divide", chinese_answer: "分开", chinese_romanization: "fēnkāi" },
            { option: "B", answer: "separate", chinese_answer: "分离", chinese_romanization: "fēnlí" },
            { option: "C", answer: "merge", chinese_answer: "合并", chinese_romanization: "hébìng" },
            { option: "D", answer: "dissolve", chinese_answer: "解散", chinese_romanization: "jiěsàn" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'merge' means combine or cause to combine to form a single entity." +
            "<br><br>" +
            "(A) 'divide' means separate or be separated into parts." +
            "<br><br>" +
            "(B) 'separate' means cause to move or be apart." +
            "<br><br>" +
            "(D) 'dissolve' means close down or dismiss (an assembly or official body).",
        chinese_explanation: "(C) '合并' 一词意味着结合或使结合以形成一个单一实体。" +
            "<br><br>" +
            "(A) '分开' 意味着分开或被分开成部分。" +
            "<br><br>" +
            "(B) '分离' 意味着使移动或分开。" +
            "<br><br>" +
            "(D) '解散' 意味着关闭或解散（一个集会或官方机构）。"
    },
    {
        id: 10,
        question: "To meet the new regulations, the engineers had to __________ the blueprint to ensure compliance and safety.",
        chinese_question: "为了符合新的规定，工程师们不得不 __________ 蓝图以确保合规和安全。",
        answers: [
            { option: "A", answer: "preserve", chinese_answer: "保持", chinese_romanization: "bǎochí" },
            { option: "B", answer: "modify", chinese_answer: "修改", chinese_romanization: "xiūgǎi" },
            { option: "C", answer: "maintain", chinese_answer: "维持", chinese_romanization: "wéichí" },
            { option: "D", answer: "abandon", chinese_answer: "放弃", chinese_romanization: "fàngqì" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'modify' means make partial or minor changes to (something), typically so as to improve it or to make it less extreme." +
            "<br><br>" +
            "(A) 'preserve' means maintain (something) in its original or existing state." +
            "<br><br>" +
            "(C) 'maintain' means cause or enable (a condition or state of affairs) to continue." +
            "<br><br>" +
            "(D) 'abandon' means give up completely (a course of action, a practice, or a way of thinking).",
        chinese_explanation: "(B) '修改' 一词意味着对（某物）进行部分或小的改动，通常是为了改善或使其不那么极端。" +
            "<br><br>" +
            "(A) '保持' 意味着保持（某物）的原始或现有状态。" +
            "<br><br>" +
            "(C) '维持' 意味着使（某种情况或事态）继续下去。" +
            "<br><br>" +
            "(D) '放弃' 意味着完全放弃（行动、实践或思维方式）。"
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
