// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "Her hard work and dedication influenced the positive __________ of the project.",
        chinese_question: "她的努力工作和奉献精神影响了项目的积极 __________。",
        answers: [
            { option: "A", answer: "outcome", chinese_answer: "结果", chinese_romanization: "jiéguǒ" },
            { option: "B", answer: "effort", chinese_answer: "努力", chinese_romanization: "nǔlì" },
            { option: "C", answer: "attempt", chinese_answer: "尝试", chinese_romanization: "chángshì" },
            { option: "D", answer: "trial", chinese_answer: "试验", chinese_romanization: "shìyàn" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'outcome' metaphorically means the final product or result of an action or process." +
            "<br><br>" +
            "(B) 'effort' means a vigorous or determined attempt." +
            "<br><br>" +
            "(C) 'attempt' means make an effort to achieve or complete (something, typically a difficult task or action)." +
            "<br><br>" +
            "(D) 'trial' means a test of the performance, qualities, or suitability of someone or something.",
        chinese_explanation: "(A) '结果' 比喻行动或过程的最终产品或结果。" +
            "<br><br>" +
            "(B) '努力' 意味着有力或坚定的尝试。" +
            "<br><br>" +
            "(C) '尝试' 意味着努力实现或完成（某事，通常是困难的任务或行动）。" +
            "<br><br>" +
            "(D) '试验' 意味着对某人或某物的表现、品质或适用性的测试。"
    },
    {
        id: 2,
        question: "Receiving the prestigious award was a significant __________ for her hard work and dedication to her craft.",
        chinese_question: "获得这个享有盛誉的奖项是对她辛勤工作和献身于她的技艺的重大 __________。",
        answers: [
            { option: "A", answer: "criticism", chinese_answer: "批评", chinese_romanization: "pīpíng" },
            { option: "B", answer: "accolade", chinese_answer: "荣誉", chinese_romanization: "róngyù" },
            { option: "C", answer: "insult", chinese_answer: "侮辱", chinese_romanization: "wǔrǔ" },
            { option: "D", answer: "rejection", chinese_answer: "拒绝", chinese_romanization: "jùjué" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'accolade' means an award or privilege granted as a special honor or as an acknowledgment of merit." +
            "<br><br>" +
            "(A) 'criticism' means the expression of disapproval of someone or something based on perceived faults or mistakes." +
            "<br><br>" +
            "(C) 'insult' means a disrespectful or scornfully abusive remark or action." +
            "<br><br>" +
            "(D) 'rejection' means the dismissing or refusing of a proposal, idea, etc.",
        chinese_explanation: "(B) '荣誉' 一词意味着作为特别荣誉或对功绩的承认而授予的奖项或特权。" +
            "<br><br>" +
            "(A) '批评' 意味着根据感知的缺点或错误对某人或某事的批评。" +
            "<br><br>" +
            "(C) '侮辱' 意味着不尊重或轻蔑的辱骂或行为。" +
            "<br><br>" +
            "(D) '拒绝' 意味着驳回或拒绝提议、想法等。"
    },
    {
        id: 3,
        question: "The protagonist swore to seek __________ for the wrongs done to his family, no matter the cost.",
        chinese_question: "主角发誓要为家人所受的不公寻求 __________，无论代价如何。",
        answers: [
            { option: "A", answer: "forgiveness", chinese_answer: "宽恕", chinese_romanization: "kuānshù" },
            { option: "B", answer: "reconciliation", chinese_answer: "和解", chinese_romanization: "héjiě" },
            { option: "C", answer: "vengeance", chinese_answer: "复仇", chinese_romanization: "fùchóu" },
            { option: "D", answer: "peace", chinese_answer: "和平", chinese_romanization: "hépíng" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'vengeance' means punishment inflicted or retribution exacted for an injury or wrong." +
            "<br><br>" +
            "(A) 'forgiveness' means the action or process of forgiving or being forgiven." +
            "<br><br>" +
            "(B) 'reconciliation' means the restoration of friendly relations." +
            "<br><br>" +
            "(D) 'peace' means freedom from disturbance; tranquility.",
        chinese_explanation: "(C) '复仇' 一词意味着为受伤或不公而施加的惩罚或报应。" +
            "<br><br>" +
            "(A) '宽恕' 意味着宽恕或被宽恕的行为或过程。" +
            "<br><br>" +
            "(B) '和解' 意味着恢复友好关系。" +
            "<br><br>" +
            "(D) '和平' 意味着没有干扰的自由；宁静。"
    },
    {
        id: 4,
        question: "She kept a __________ of cherished memories in her heart, revisiting them during tough times.",
        chinese_question: "她在心中保留了一些珍贵的__________，在艰难时刻重温它们。",
        answers: [
            { option: "A", answer: "waste", chinese_answer: "废物", chinese_romanization: "fèiwù" },
            { option: "B", answer: "cache", chinese_answer: "储藏", chinese_romanization: "chǔcáng" },
            { option: "C", answer: "trash", chinese_answer: "垃圾", chinese_romanization: "lājī" },
            { option: "D", answer: "clutter", chinese_answer: "杂乱", chinese_romanization: "záluàn" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'cache' means a collection of items of the same type stored in a hidden or inaccessible place. Figuratively, it can mean a collection of treasured or important memories." +
            "<br><br>" +
            "(A) 'waste' means unwanted or unusable materials." +
            "<br><br>" +
            "(C) 'trash' means discarded material or refuse." +
            "<br><br>" +
            "(D) 'clutter' means a collection of things lying about in an untidy mass.",
        chinese_explanation: "(B) '储藏' 一词意味着存放在隐藏或无法到达的地方的同类物品的集合。比喻地，它可以表示珍贵或重要记忆的集合。" +
            "<br><br>" +
            "(A) '废物' 意味着不需要的或无法使用的材料。" +
            "<br><br>" +
            "(C) '垃圾' 意味着被丢弃的材料或废物。" +
            "<br><br>" +
            "(D) '杂乱' 意味着凌乱地放着的一堆东西。"
    },
    {
        id: 5,
        question: "The CEO's __________ transformed the small startup into a global leader.",
        chinese_question: "CEO的 __________ 将这个小型初创公司转变成全球领导者。",
        answers: [
            { option: "A", answer: "vision", chinese_answer: "远见", chinese_romanization: "yuǎnjiàn" },
            { option: "B", answer: "negligence", chinese_answer: "疏忽", chinese_romanization: "shūhū" },
            { option: "C", answer: "doubt", chinese_answer: "怀疑", chinese_romanization: "huáiyí" },
            { option: "D", answer: "hesitation", chinese_answer: "犹豫", chinese_romanization: "yóuyù" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'vision' metaphorically means the ability to think about or plan the future with imagination or wisdom." +
            "<br><br>" +
            "(B) 'negligence' means failure to take proper care in doing something." +
            "<br><br>" +
            "(C) 'doubt' means a feeling of uncertainty or lack of conviction." +
            "<br><br>" +
            "(D) 'hesitation' means the action of pausing or hesitating before saying or doing something.",
        chinese_explanation: "(A) '远见' 比喻用想象力或智慧思考或计划未来的能力。" +
            "<br><br>" +
            "(B) '疏忽' 意味着未能妥善照顾某事。" +
            "<br><br>" +
            "(C) '怀疑' 意味着一种不确定或缺乏信心的感觉。" +
            "<br><br>" +
            "(D) '犹豫' 意味着在说或做某事前暂停或犹豫的行为。"
    },
    {
        id: 6,
        question: "Her kindness provided an emotional __________ for those in need.",
        chinese_question: "她的善良为需要帮助的人提供了情感上的 __________。",
        answers: [
            { option: "A", answer: "shelter", chinese_answer: "庇护", chinese_romanization: "bìhù" },
            { option: "B", answer: "barrier", chinese_answer: "障碍", chinese_romanization: "zhàng'ài" },
            { option: "C", answer: "challenge", chinese_answer: "挑战", chinese_romanization: "tiǎozhàn" },
            { option: "D", answer: "threat", chinese_answer: "威胁", chinese_romanization: "wēixié" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'shelter' metaphorically means a source of protection or comfort." +
            "<br><br>" +
            "(B) 'barrier' means a fence or other obstacle that prevents movement or access." +
            "<br><br>" +
            "(C) 'challenge' means a call to take part in a contest or competition, especially a duel." +
            "<br><br>" +
            "(D) 'threat' means a person or thing likely to cause damage or danger.",
        chinese_explanation: "(A) '庇护' 比喻保护或安慰的来源。" +
            "<br><br>" +
            "(B) '障碍' 意味着防止移动或访问的围栏或其他障碍物。" +
            "<br><br>" +
            "(C) '挑战' 意味着要求参加比赛或竞争，尤其是决斗。" +
            "<br><br>" +
            "(D) '威胁' 意味着可能造成伤害或危险的人或事物。"
    },
    {
        id: 7,
        question: "The __________ boy struggled with finding his identity and place among his peers during high school.",
        chinese_question: "这名 __________ 男孩在高中期间努力寻找自己的身份和在同龄人中的位置。",
        answers: [
            { option: "A", answer: "toddler", chinese_answer: "幼儿", chinese_romanization: "yòu'ér" },
            { option: "B", answer: "child", chinese_answer: "孩子", chinese_romanization: "háizi" },
            { option: "C", answer: "adolescent", chinese_answer: "青少年", chinese_romanization: "qīngshàonián" },
            { option: "D", answer: "adult", chinese_answer: "成人", chinese_romanization: "chéngrén" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'adolescent' means a young person in the process of developing from a child into an adult." +
            "<br><br>" +
            "(A) 'toddler' means a young child who is just beginning to walk." +
            "<br><br>" +
            "(B) 'child' means a young human being below the age of puberty or below the legal age of majority." +
            "<br><br>" +
            "(D) 'adult' means a person who is fully grown or developed.",
        chinese_explanation: "(C) '青少年' 一词意味着从儿童发展到成人过程中的年轻人。" +
            "<br><br>" +
            "(A) '幼儿' 意味着刚刚开始走路的幼儿。" +
            "<br><br>" +
            "(B) '孩子' 意味着青春期以下或未满法定年龄的年轻人。" +
            "<br><br>" +
            "(D) '成人' 意味着完全长大或发育成熟的人。"
    },
    {
        id: 8,
        question: "She felt a sense of __________ as she waited for the results of her medical tests, fearing the worst.",
        chinese_question: "她在等待医疗检查结果时感到一种 __________，担心最糟糕的情况。",
        answers: [
            { option: "A", answer: "confidence", chinese_answer: "自信", chinese_romanization: "zìxìn" },
            { option: "B", answer: "certainty", chinese_answer: "确定性", chinese_romanization: "quèdìng xìng" },
            { option: "C", answer: "apprehension", chinese_answer: "担忧", chinese_romanization: "dānyōu" },
            { option: "D", answer: "enthusiasm", chinese_answer: "热情", chinese_romanization: "rèqíng" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'apprehension' means anxiety or fear that something bad or unpleasant will happen." +
            "<br><br>" +
            "(A) 'confidence' means the feeling or belief that one can rely on someone or something; firm trust." +
            "<br><br>" +
            "(B) 'certainty' means firm conviction that something is the case." +
            "<br><br>" +
            "(D) 'enthusiasm' means intense and eager enjoyment, interest, or approval.",
        chinese_explanation: "(C) '担忧' 一词意味着对某事不好的或不愉快的事情会发生的焦虑或恐惧。" +
            "<br><br>" +
            "(A) '自信' 意味着相信某人或某事可以依靠的感觉或信念；坚定的信任。" +
            "<br><br>" +
            "(B) '确定性' 意味着对某事的坚定信念。" +
            "<br><br>" +
            "(D) '热情' 意味着强烈和热切的享受、兴趣或赞同。"
    },
    {
        id: 9,
        question: "The __________ of the renovated building were greatly improved, with modern design elements and a sleek finish.",
        chinese_question: "翻新后的建筑的 __________ 得到了极大的改善，现代的设计元素和光滑的表面。",
        answers: [
            { option: "A", answer: "functionality", chinese_answer: "功能", chinese_romanization: "gōngnéng" },
            { option: "B", answer: "efficiency", chinese_answer: "效率", chinese_romanization: "xiàolǜ" },
            { option: "C", answer: "aesthetics", chinese_answer: "美学", chinese_romanization: "měixué" },
            { option: "D", answer: "durability", chinese_answer: "耐用性", chinese_romanization: "nàiyòng xìng" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'aesthetics' means a set of principles concerned with the nature and appreciation of beauty." +
            "<br><br>" +
            "(A) 'functionality' means the quality of being suited to serve a purpose well; practicality." +
            "<br><br>" +
            "(B) 'efficiency' means the state or quality of being efficient." +
            "<br><br>" +
            "(D) 'durability' means the ability to withstand wear, pressure, or damage.",
        chinese_explanation: "(C) '美学' 一词意味着一套与美的性质和欣赏有关的原则。" +
            "<br><br>" +
            "(A) '功能' 意味着能够很好地为一个目的服务的质量；实用性。" +
            "<br><br>" +
            "(B) '效率' 意味着高效的状态或质量。" +
            "<br><br>" +
            "(D) '耐用性' 意味着承受磨损、压力或损坏的能力。"
    },
    {
        id: 10,
        question: "Believing that you can catch a cold from going out in the rain is a common __________.",
        chinese_question: "认为你可以在雨中感冒是一种常见的 __________。",
        answers: [
            { option: "A", answer: "fallacy", chinese_answer: "谬论", chinese_romanization: "miùlùn" },
            { option: "B", answer: "fact", chinese_answer: "事实", chinese_romanization: "shìshí" },
            { option: "C", answer: "truth", chinese_answer: "真相", chinese_romanization: "zhēnxiàng" },
            { option: "D", answer: "certainty", chinese_answer: "确定性", chinese_romanization: "quèdìng xìng" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'fallacy' means a mistaken belief, especially one based on unsound argument." +
            "<br><br>" +
            "(B) 'fact' means a thing that is known or proved to be true." +
            "<br><br>" +
            "(C) 'truth' means the quality or state of being true." +
            "<br><br>" +
            "(D) 'certainty' means firm conviction that something is the case.",
        chinese_explanation: "(A) '谬论' 意味着一种错误的信念，尤其是基于不可靠的论据。" +
            "<br><br>" +
            "(B) '事实' 意味着被知道或证明是真的事物。" +
            "<br><br>" +
            "(C) '真相' 意味着真实的状态或性质。" +
            "<br><br>" +
            "(D) '确定性' 意味着对某事的坚定信念。"
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
