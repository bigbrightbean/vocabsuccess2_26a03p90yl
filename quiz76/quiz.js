// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "He hoped to __________ his father's success in business by working hard and being dedicated.",
        chinese_question: "他希望通过努力工作和奉献来 __________ 他父亲在商业上的成功。",
        answers: [
            { option: "A", answer: "oppose", chinese_answer: "反对", chinese_romanization: "fǎnduì" },
            { option: "B", answer: "emulate", chinese_answer: "模仿", chinese_romanization: "mófǎng" },
            { option: "C", answer: "reject", chinese_answer: "拒绝", chinese_romanization: "jùjué" },
            { option: "D", answer: "surpass", chinese_answer: "超越", chinese_romanization: "chāoyuè" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'emulate' means match or surpass (a person or achievement), typically by imitation." +
            "<br><br>" +
            "(A) 'oppose' means disapprove of and attempt to prevent, especially by argument." +
            "<br><br>" +
            "(C) 'reject' means dismiss as inadequate, unacceptable, or faulty." +
            "<br><br>" +
            "(D) 'surpass' means exceed; be greater than.",
        chinese_explanation: "(B) '模仿' 一词意味着通过模仿与（某人或成就）匹配或超越。" +
            "<br><br>" +
            "(A) '反对' 意味着不赞成并试图阻止，尤其是通过争论。" +
            "<br><br>" +
            "(C) '拒绝' 意味着将其视为不充分、不接受或有缺陷。" +
            "<br><br>" +
            "(D) '超越' 意味着超出；大于。"
    },
    {
        id: 2,
        question: "The two authors decided to __________ on a new book, combining their unique perspectives and writing styles.",
        chinese_question: "这两位作者决定 __________ 新书，结合他们独特的视角和写作风格。",
        answers: [
            { option: "A", answer: "compete", chinese_answer: "竞争", chinese_romanization: "jìngzhēng" },
            { option: "B", answer: "collaborate", chinese_answer: "合作", chinese_romanization: "hézuò" },
            { option: "C", answer: "hinder", chinese_answer: "阻碍", chinese_romanization: "zǔ'ài" },
            { option: "D", answer: "disagree", chinese_answer: "不同意", chinese_romanization: "bù tóngyì" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'collaborate' means work jointly on an activity or project." +
            "<br><br>" +
            "(A) 'compete' means strive to gain or win something by defeating or establishing superiority over others." +
            "<br><br>" +
            "(C) 'hinder' means create difficulties for (someone or something), resulting in delay or obstruction." +
            "<br><br>" +
            "(D) 'disagree' means have or express a different opinion.",
        chinese_explanation: "(B) '合作' 一词意味着在活动或项目上共同工作。" +
            "<br><br>" +
            "(A) '竞争' 意味着通过击败或确立优越性来争取或赢得某物。" +
            "<br><br>" +
            "(C) '阻碍' 意味着给（某人或某事）制造困难，导致延误或阻碍。" +
            "<br><br>" +
            "(D) '不同意' 意味着有或表达不同意见。"
    },
    {
        id: 3,
        question: "The accountant was asked to __________ the financial records to ensure there were no errors or discrepancies.",
        chinese_question: "会计被要求 __________ 财务记录，以确保没有错误或差异。",
        answers: [
            { option: "A", answer: "glance", chinese_answer: "浏览", chinese_romanization: "liúlǎn" },
            { option: "B", answer: "neglect", chinese_answer: "忽视", chinese_romanization: "hūshì" },
            { option: "C", answer: "scrutinize", chinese_answer: "仔细检查", chinese_romanization: "zǐxì jiǎnchá" },
            { option: "D", answer: "overlook", chinese_answer: "忽略", chinese_romanization: "hūlüè" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'scrutinize' means examine or inspect closely and thoroughly." +
            "<br><br>" +
            "(A) 'glance' means take a brief or hurried look." +
            "<br><br>" +
            "(B) 'neglect' means fail to care for properly." +
            "<br><br>" +
            "(D) 'overlook' means fail to notice (something).",
        chinese_explanation: "(C) '仔细检查' 一词意味着仔细和彻底地检查或检查。" +
            "<br><br>" +
            "(A) '浏览' 意味着快速或匆忙地看。" +
            "<br><br>" +
            "(B) '忽视' 意味着未能妥善照顾。" +
            "<br><br>" +
            "(D) '忽略' 意味着未能注意到（某事）。"
    },
    {
        id: 4,
        question: "The environmentalist continued to __________ for renewable energy sources, believing they are essential for a sustainable future.",
        chinese_question: "环保主义者继续 __________ 可再生能源，认为它们对可持续的未来至关重要。",
        answers: [
            { option: "A", answer: "oppose", chinese_answer: "反对", chinese_romanization: "fǎnduì" },
            { option: "B", answer: "deny", chinese_answer: "否认", chinese_romanization: "fǒurèn" },
            { option: "C", answer: "reject", chinese_answer: "拒绝", chinese_romanization: "jùjué" },
            { option: "D", answer: "advocate", chinese_answer: "提倡", chinese_romanization: "tíchàng" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'advocate' means publicly recommend or support." +
            "<br><br>" +
            "(A) 'oppose' means disapprove of and attempt to prevent, especially by argument." +
            "<br><br>" +
            "(B) 'deny' means state that one refuses to admit the truth or existence of." +
            "<br><br>" +
            "(C) 'reject' means dismiss as inadequate, unacceptable, or faulty.",
        chinese_explanation: "(D) '提倡' 一词意味着公开推荐或支持。" +
            "<br><br>" +
            "(A) '反对' 意味着不赞成并试图阻止，尤其是通过争论。" +
            "<br><br>" +
            "(B) '否认' 意味着表示拒绝承认事实或存在。" +
            "<br><br>" +
            "(C) '拒绝' 意味着认为不合格、不接受或有缺陷。"
    },
    {
        id: 5,
        question: "The teacher had to __________ the students for talking during the lecture, reminding them to pay attention.",
        chinese_question: "老师不得不 __________ 学生在讲课时说话，提醒他们要注意听讲。",
        answers: [
            { option: "A", answer: "praise", chinese_answer: "赞扬", chinese_romanization: "zànyáng" },
            { option: "B", answer: "commend", chinese_answer: "表扬", chinese_romanization: "biǎoyáng" },
            { option: "C", answer: "admonish", chinese_answer: "告诫", chinese_romanization: "gàojiè" },
            { option: "D", answer: "reward", chinese_answer: "奖励", chinese_romanization: "jiǎnglì" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'admonish' means warn or reprimand someone firmly." +
            "<br><br>" +
            "(A) 'praise' means express warm approval or admiration of." +
            "<br><br>" +
            "(B) 'commend' means express approval or praise." +
            "<br><br>" +
            "(D) 'reward' means give something to (someone) in recognition of their services, efforts, or achievements.",
        chinese_explanation: "(C) '告诫' 一词意味着严厉地警告或训斥某人。" +
            "<br><br>" +
            "(A) '赞扬' 意味着表达热情的认可或钦佩。" +
            "<br><br>" +
            "(B) '表扬' 意味着表示认可或称赞。" +
            "<br><br>" +
            "(D) '奖励' 意味着为了表彰某人的服务、努力或成就而给予某物。"
    },
    {
        id: 6,
        question: "To avoid penalties, businesses must __________ with the new environmental regulations set by the government.",
        chinese_question: "为了避免处罚，企业必须 __________ 政府制定的新环境法规。",
        answers: [
            { option: "A", answer: "resist", chinese_answer: "抵抗", chinese_romanization: "dǐkàng" },
            { option: "B", answer: "violate", chinese_answer: "违反", chinese_romanization: "wéifǎn" },
            { option: "C", answer: "defy", chinese_answer: "违抗", chinese_romanization: "wéikàng" },
            { option: "D", answer: "comply", chinese_answer: "遵守", chinese_romanization: "zūnshǒu" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'comply' means act in accordance with a wish or command." +
            "<br><br>" +
            "(A) 'resist' means withstand the action or effect of." +
            "<br><br>" +
            "(B) 'violate' means break or fail to comply with (a rule or formal agreement)." +
            "<br><br>" +
            "(C) 'defy' means openly resist or refuse to obey.",
        chinese_explanation: "(D) '遵守' 一词意味着按照愿望或命令行事。" +
            "<br><br>" +
            "(A) '抵抗' 意味着经受住某物的行动或效果。" +
            "<br><br>" +
            "(B) '违反' 意味着违反或未能遵守（规则或正式协议）。" +
            "<br><br>" +
            "(C) '违抗' 意味着公开抵制或拒绝服从。"
    },
    {
        id: 7,
        question: "The new software is designed to __________ communication between team members, making collaboration easier.",
        chinese_question: "新软件旨在 __________ 团队成员之间的沟通，使协作更容易。",
        answers: [
            { option: "A", answer: "impede", chinese_answer: "阻碍", chinese_romanization: "zǔ'ài" },
            { option: "B", answer: "obstruct", chinese_answer: "阻挡", chinese_romanization: "zǔdǎng" },
            { option: "C", answer: "hinder", chinese_answer: "妨碍", chinese_romanization: "fáng'ài" },
            { option: "D", answer: "facilitate", chinese_answer: "促进", chinese_romanization: "cùjìn" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'facilitate' means make (an action or process) easy or easier." +
            "<br><br>" +
            "(A) 'impede' means delay or prevent (someone or something) by obstructing them; hinder." +
            "<br><br>" +
            "(B) 'obstruct' means block (an opening, path, road, etc.); be or get in the way of." +
            "<br><br>" +
            "(C) 'hinder' means create difficulties for (someone or something), resulting in delay or obstruction.",
        chinese_explanation: "(D) '促进' 一词意味着使（行动或过程）变得容易或更容易。" +
            "<br><br>" +
            "(A) '阻碍' 意味着通过妨碍（某人或某物）来延迟或阻止他们。" +
            "<br><br>" +
            "(B) '阻挡' 意味着阻塞（开口、道路等）；妨碍。" +
            "<br><br>" +
            "(C) '妨碍' 意味着为（某人或某物）制造困难，导致延误或障碍。"
    },
    {
        id: 8,
        question: "Instead of starting his assignment immediately, he chose to __________ until the last minute, resulting in a rushed and incomplete work.",
        chinese_question: "他没有立即开始他的作业，而是选择 __________ 到最后一刻，导致工作仓促且不完整。",
        answers: [
            { option: "A", answer: "hasten", chinese_answer: "加快", chinese_romanization: "jiākuài" },
            { option: "B", answer: "initiate", chinese_answer: "开始", chinese_romanization: "kāishǐ" },
            { option: "C", answer: "procrastinate", chinese_answer: "拖延", chinese_romanization: "tuōyán" },
            { option: "D", answer: "complete", chinese_answer: "完成", chinese_romanization: "wánchéng" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'procrastinate' means delay or postpone action; put off doing something." +
            "<br><br>" +
            "(A) 'hasten' means be quick to do something." +
            "<br><br>" +
            "(B) 'initiate' means cause (a process or action) to begin." +
            "<br><br>" +
            "(D) 'complete' means having all the necessary or appropriate parts.",
        chinese_explanation: "(C) '拖延' 一词意味着延迟或推迟行动；推迟做某事。" +
            "<br><br>" +
            "(A) '加快' 意味着迅速做某事。" +
            "<br><br>" +
            "(B) '开始' 意味着引起（过程或行动）的开始。" +
            "<br><br>" +
            "(D) '完成' 意味着拥有所有必要或适当的部分。"
    },
    {
        id: 9,
        question: "The conference room was designed to __________ large groups, with flexible seating arrangements and advanced AV equipment.",
        chinese_question: "会议室设计为可以 __________ 大型团体，具有灵活的座位安排和先进的视听设备。",
        answers: [
            { option: "A", answer: "reject", chinese_answer: "拒绝", chinese_romanization: "jùjué" },
            { option: "B", answer: "accommodate", chinese_answer: "容纳", chinese_romanization: "róngnà" },
            { option: "C", answer: "inconvenience", chinese_answer: "不便", chinese_romanization: "búbiàn" },
            { option: "D", answer: "exclude", chinese_answer: "排除", chinese_romanization: "páichú" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'accommodate' means provide lodging or sufficient space for." +
            "<br><br>" +
            "(A) 'reject' means dismiss as inadequate, unacceptable, or faulty." +
            "<br><br>" +
            "(C) 'inconvenience' means cause trouble or difficulty to." +
            "<br><br>" +
            "(D) 'exclude' means deny (someone) access to or bar (someone) from a place, group, or privilege.",
        chinese_explanation: "(B) '容纳' 一词意味着提供住宿或足够的空间。" +
            "<br><br>" +
            "(A) '拒绝' 意味着认为不合格、不接受或有缺陷的。" +
            "<br><br>" +
            "(C) '不便' 意味着给（某人）带来麻烦或困难。" +
            "<br><br>" +
            "(D) '排除' 意味着拒绝（某人）进入或禁止（某人）进入某个地方、群体或特权。"
    },
    {
        id: 10,
        question: "The graphic images in the documentary were intended to __________ viewers and raise awareness about the issue.",
        chinese_question: "纪录片中的图像旨在 __________ 观众并提高对这一问题的认识。",
        answers: [
            { option: "A", answer: "comfort", chinese_answer: "安慰", chinese_romanization: "ānwèi" },
            { option: "B", answer: "delight", chinese_answer: "高兴", chinese_romanization: "gāoxìng" },
            { option: "C", answer: "amuse", chinese_answer: "逗乐", chinese_romanization: "dòulè" },
            { option: "D", answer: "appall", chinese_answer: "震惊", chinese_romanization: "zhènjīng" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'appall' means greatly dismay or horrify." +
            "<br><br>" +
            "(A) 'comfort' means ease the grief or distress of; console." +
            "<br><br>" +
            "(B) 'delight' means please (someone) greatly." +
            "<br><br>" +
            "(C) 'amuse' means cause (someone) to find something funny.",
        chinese_explanation: "(D) '震惊' 一词意味着极大地惊恐或震惊。" +
            "<br><br>" +
            "(A) '安慰' 意味着缓解悲伤或痛苦；安慰。" +
            "<br><br>" +
            "(B) '高兴' 意味着使（某人）非常愉快。" +
            "<br><br>" +
            "(C) '逗乐' 意味着使（某人）觉得有趣。"
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
