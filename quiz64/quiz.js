// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "The __________ of the new policy aimed to streamline operations and improve overall efficiency within the company.",
        chinese_question: "新政策的 __________ 旨在简化操作并提高公司的整体效率。",
        answers: [
            { option: "A", answer: "implementation", chinese_answer: "执行", chinese_romanization: "zhíxíng" },
            { option: "B", answer: "dismissal", chinese_answer: "解雇", chinese_romanization: "jiěgù" },
            { option: "C", answer: "neglect", chinese_answer: "忽视", chinese_romanization: "hūshì" },
            { option: "D", answer: "abandonment", chinese_answer: "放弃", chinese_romanization: "fàngqì" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'implementation' means the process of putting a decision or plan into effect; execution." +
            "<br><br>" +
            "(B) 'dismissal' means the act of ordering or allowing someone to leave." +
            "<br><br>" +
            "(C) 'neglect' means failure to take proper care in doing something." +
            "<br><br>" +
            "(D) 'abandonment' means the action or fact of abandoning or being abandoned.",
        chinese_explanation: "(A) '执行' 一词意味着将决策或计划付诸实施的过程；执行。" +
            "<br><br>" +
            "(B) '解雇' 意味着命令或允许某人离开的行为。" +
            "<br><br>" +
            "(C) '忽视' 意味着未能妥善照顾做某事。" +
            "<br><br>" +
            "(D) '放弃' 意味着放弃或被放弃的行为或事实。"
    },
    {
        id: 2,
        question: "In the final match, the chess champion faced his strongest __________, who had also been undefeated throughout the tournament.",
        chinese_question: "在最后一场比赛中，国际象棋冠军面对他最强的 __________，这名对手在整个比赛过程中也未尝败绩。",
        answers: [
            { option: "A", answer: "ally", chinese_answer: "盟友", chinese_romanization: "méngyǒu" },
            { option: "B", answer: "adversary", chinese_answer: "对手", chinese_romanization: "duìshǒu" },
            { option: "C", answer: "supporter", chinese_answer: "支持者", chinese_romanization: "zhīchízhě" },
            { option: "D", answer: "advocate", chinese_answer: "倡导者", chinese_romanization: "chàngdǎozhě" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'adversary' means one's opponent in a contest, conflict, or dispute." +
            "<br><br>" +
            "(A) 'ally' means a state formally cooperating with another for a military or other purpose." +
            "<br><br>" +
            "(C) 'supporter' means a person who approves of and encourages someone or something." +
            "<br><br>" +
            "(D) 'advocate' means a person who publicly supports or recommends a particular cause or policy.",
        chinese_explanation: "(B) '对手' 一词意味着在比赛、冲突或争端中的对手。" +
            "<br><br>" +
            "(A) '盟友' 意味着为军事或其他目的与另一国家正式合作的国家。" +
            "<br><br>" +
            "(C) '支持者' 意味着赞成并鼓励某人或某事的人。" +
            "<br><br>" +
            "(D) '倡导者' 意味着公开支持或推荐某个事业或政策的人。"
    },
    {
        id: 3,
        question: "The __________ for admission to the university include a high GPA and excellent standardized test scores.",
        chinese_question: "大学入学的 __________ 包括高GPA和优秀的标准化考试成绩。",
        answers: [
            { option: "A", answer: "criteria", chinese_answer: "标准", chinese_romanization: "biāozhǔn" },
            { option: "B", answer: "exceptions", chinese_answer: "例外", chinese_romanization: "lìwài" },
            { option: "C", answer: "results", chinese_answer: "结果", chinese_romanization: "jiéguǒ" },
            { option: "D", answer: "outcomes", chinese_answer: "后果", chinese_romanization: "hòuguǒ" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'criteria' means a principle or standard by which something may be judged or decided." +
            "<br><br>" +
            "(B) 'exceptions' means a person or thing that is excluded from a general statement or does not follow a rule." +
            "<br><br>" +
            "(C) 'results' means a consequence, effect, or outcome of something." +
            "<br><br>" +
            "(D) 'outcomes' means the way a thing turns out; a consequence.",
        chinese_explanation: "(A) '标准' 一词意味着可以根据某物进行判断或决定的原则或标准。" +
            "<br><br>" +
            "(B) '例外' 意味着从一般陈述中排除的人或事物或不遵循规则的人或事物。" +
            "<br><br>" +
            "(C) '结果' 意味着某事的结果、影响或结局。" +
            "<br><br>" +
            "(D) '后果' 意味着事物的结果；后果。"
    },
    {
        id: 4,
        question: "The tailor made an __________ to the dress to ensure it fit perfectly for the event.",
        chinese_question: "裁缝对这件衣服进行了 __________，确保它在活动中完美合身。",
        answers: [
            { option: "A", answer: "improvement", chinese_answer: "改进", chinese_romanization: "gǎijìn" },
            { option: "B", answer: "alteration", chinese_answer: "修改", chinese_romanization: "xiūgǎi" },
            { option: "C", answer: "destruction", chinese_answer: "破坏", chinese_romanization: "pòhuài" },
            { option: "D", answer: "imitation", chinese_answer: "模仿", chinese_romanization: "mófǎng" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'alteration' means the action or process of altering or being altered." +
            "<br><br>" +
            "(A) 'improvement' means an example or instance of improving or being improved." +
            "<br><br>" +
            "(C) 'destruction' means the action or process of causing so much damage to something that it no longer exists or cannot be repaired." +
            "<br><br>" +
            "(D) 'imitation' means the action of using someone or something as a model.",
        chinese_explanation: "(B) '修改' 一词意味着更改或被更改的动作或过程。" +
            "<br><br>" +
            "(A) '改进' 意味着改善或被改善的实例或例子。" +
            "<br><br>" +
            "(C) '破坏' 意味着对某物造成如此大的损害，使其不再存在或无法修复的行为或过程。" +
            "<br><br>" +
            "(D) '模仿' 意味着以某人或某物为模型的行为。"
    },
    {
        id: 5,
        question: "The dense fog reduced the __________ on the road, making it difficult for drivers to see.",
        chinese_question: "浓雾降低了道路上的 __________，使驾驶员难以看清。",
        answers: [
            { option: "A", answer: "invisibility", chinese_answer: "隐形", chinese_romanization: "yǐnxíng" },
            { option: "B", answer: "brightness", chinese_answer: "亮度", chinese_romanization: "liàngdù" },
            { option: "C", answer: "visibility", chinese_answer: "能见度", chinese_romanization: "néngjiàndù" },
            { option: "D", answer: "clarity", chinese_answer: "清晰度", chinese_romanization: "qīngxīdù" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'visibility' means the state of being able to see or be seen." +
            "<br><br>" +
            "(A) 'invisibility' means the state of not being able to be seen." +
            "<br><br>" +
            "(B) 'brightness' means the quality of being bright." +
            "<br><br>" +
            "(D) 'clarity' means the quality of being clear.",
        chinese_explanation: "(C) '能见度' 一词意味着能够看到或被看到的状态。" +
            "<br><br>" +
            "(A) '隐形' 意味着不能被看到的状态。" +
            "<br><br>" +
            "(B) '亮度' 意味着明亮的质量。" +
            "<br><br>" +
            "(D) '清晰度' 意味着清晰的质量。"
    },
    {
        id: 6,
        question: "After the accident, he suffered from partial __________ in his legs, making it difficult to walk.",
        chinese_question: "事故后，他的双腿部分 __________，行走困难。",
        answers: [
            { option: "A", answer: "movement", chinese_answer: "运动", chinese_romanization: "yùndòng" },
            { option: "B", answer: "strength", chinese_answer: "力量", chinese_romanization: "lìliàng" },
            { option: "C", answer: "paralysis", chinese_answer: "瘫痪", chinese_romanization: "tānhuàn" },
            { option: "D", answer: "recovery", chinese_answer: "恢复", chinese_romanization: "huīfù" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'paralysis' means the loss of the ability to move (and sometimes to feel anything) in part or most of the body." +
            "<br><br>" +
            "(A) 'movement' means the act of changing physical location or position." +
            "<br><br>" +
            "(B) 'strength' means the quality or state of being physically strong." +
            "<br><br>" +
            "(D) 'recovery' means a return to a normal state of health, mind, or strength.",
        chinese_explanation: "(C) '瘫痪' 一词意味着部分或大部分身体失去活动能力（有时也失去感觉）。" +
            "<br><br>" +
            "(A) '运动' 意味着改变物理位置或姿势的行为。" +
            "<br><br>" +
            "(B) '力量' 意味着身体强壮的品质或状态。" +
            "<br><br>" +
            "(D) '恢复' 意味着恢复到正常的健康、心态或力量状态。"
    },
    {
        id: 7,
        question: "The dark clouds and howling wind gave a sense of __________ to the villagers.",
        chinese_question: "乌云和呼啸的风给村民带来了一种 __________ 的感觉。",
        answers: [
            { option: "A", answer: "foreboding", chinese_answer: "不祥的预感", chinese_romanization: "bùxiáng de yùgǎn" },
            { option: "B", answer: "relief", chinese_answer: "放松", chinese_romanization: "fàngsōng" },
            { option: "C", answer: "happiness", chinese_answer: "快乐", chinese_romanization: "kuàilè" },
            { option: "D", answer: "excitement", chinese_answer: "兴奋", chinese_romanization: "xīngfèn" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'foreboding' means fearful apprehension; a feeling that something bad will happen." +
            "<br><br>" +
            "(B) 'relief' means a feeling of reassurance and relaxation following release from anxiety or distress." +
            "<br><br>" +
            "(C) 'happiness' means the state of being happy." +
            "<br><br>" +
            "(D) 'excitement' means a feeling of great enthusiasm and eagerness.",
        chinese_explanation: "(A) '不祥的预感' 意味着恐惧的预感；一种觉得会发生不好的事情的感觉。" +
            "<br><br>" +
            "(B) '放松' 意味着在解除焦虑或痛苦后获得的安心和放松的感觉。" +
            "<br><br>" +
            "(C) '快乐' 意味着快乐的状态。" +
            "<br><br>" +
            "(D) '兴奋' 意味着极大的热情和渴望。"
    },
    {
        id: 8,
        question: "Her ideas received a warm __________ from the committee, who appreciated her innovative approach.",
        chinese_question: "她的想法受到了委员会的热烈 __________，他们欣赏她的创新方法。",
        answers: [
            { option: "A", answer: "reception", chinese_answer: "接待", chinese_romanization: "jiēdài" },
            { option: "B", answer: "rejection", chinese_answer: "拒绝", chinese_romanization: "jùjué" },
            { option: "C", answer: "critique", chinese_answer: "批评", chinese_romanization: "pīpíng" },
            { option: "D", answer: "dismissal", chinese_answer: "解雇", chinese_romanization: "jiěgù" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'reception' metaphorically means the way in which a person or group of people reacts to someone or something." +
            "<br><br>" +
            "(B) 'rejection' means the dismissing or refusing of a proposal, idea, etc." +
            "<br><br>" +
            "(C) 'critique' means a detailed analysis and assessment of something, especially a literary, philosophical, or political theory." +
            "<br><br>" +
            "(D) 'dismissal' means the act of ordering or allowing someone to leave.",
        chinese_explanation: "(A) '接待' 比喻某人或一群人对某人或某事的反应方式。" +
            "<br><br>" +
            "(B) '拒绝' 意味着拒绝提议、想法等。" +
            "<br><br>" +
            "(C) '批评' 意味着对某事进行详细分析和评估，特别是文学、哲学或政治理论。" +
            "<br><br>" +
            "(D) '解雇' 意味着命令或允许某人离开的行为。"
    },
    {
        id: 9,
        question: "The startup journey felt like venturing into the __________, full of unknown challenges.",
        chinese_question: "创业旅程感觉像是进入 __________，充满了未知的挑战。",
        answers: [
            { option: "A", answer: "wilderness", chinese_answer: "荒野", chinese_romanization: "huāngyě" },
            { option: "B", answer: "comfort zone", chinese_answer: "舒适区", chinese_romanization: "shūshì qū" },
            { option: "C", answer: "routine", chinese_answer: "常规", chinese_romanization: "chángguī" },
            { option: "D", answer: "tradition", chinese_answer: "传统", chinese_romanization: "chuántǒng" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'wilderness' metaphorically means a situation that is uncultivated, unorganized, or unregulated." + 
            "<br><br>" +
            "(B) 'comfort zone' means a situation where one feels safe or at ease." + 
            "<br><br>" +
            "(C) 'routine' means a sequence of actions regularly followed; a fixed program." + 
            "<br><br>" +
            "(D) 'tradition' means the transmission of customs or beliefs from generation to generation.",
        chinese_explanation: "(A) '荒野' 比喻未开垦、未组织或未规范的情况。" + 
            "<br><br>" +
            "(B) '舒适区' 意味着一个人感到安全或舒适的情况。" + 
            "<br><br>" +
            "(C) '常规' 意味着定期遵循的一系列行动；固定程序。" + 
            "<br><br>" +
            "(D) '传统' 意味着从一代传给下一代的习俗或信仰的传递。"
    },
    {
        id: 10,
        question: "Her mentor was a constant __________ of inspiration and guidance throughout her career.",
        chinese_question: "她的导师在她的职业生涯中一直是灵感和指导的__________。",
        answers: [
            { option: "A", answer: "destination", chinese_answer: "目的地", chinese_romanization: "mùdì dì" },
            { option: "B", answer: "source", chinese_answer: "来源", chinese_romanization: "láiyuán" },
            { option: "C", answer: "route", chinese_answer: "路线", chinese_romanization: "lùxiàn" },
            { option: "D", answer: "barrier", chinese_answer: "障碍", chinese_romanization: "zhàng'ài" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'source' means a place, person, or thing from which something originates." +
            "<br><br>" +
            "(A) 'destination' means the place to which someone or something is going." +
            "<br><br>" +
            "(C) 'route' means a way or course taken in getting from a starting point to a destination." +
            "<br><br>" +
            "(D) 'barrier' means a fence or other obstacle that prevents movement or access.",
        chinese_explanation: "(B) '来源'一词意味着某物起源的地方、人物或事物。" +
            "<br><br>" +
            "(A) '目的地' 意味着某人或某物要去的地方。" +
            "<br><br>" +
            "(C) '路线' 意味着从起点到目的地的路线或路线。" +
            "<br><br>" +
            "(D) '障碍' 意味着防止移动或进入的围栏或其他障碍物。"
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
