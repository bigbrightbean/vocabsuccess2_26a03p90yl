// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "Caring for an elderly parent can be a significant __________, but it can also be rewarding.",
        chinese_question: "照顾年迈的父母可能是一个重大的 __________，但也可能是有益的。",
        answers: [
            { option: "A", answer: "burden", chinese_answer: "负担", chinese_romanization: "fùdān" },
            { option: "B", answer: "blessing", chinese_answer: "祝福", chinese_romanization: "zhùfú" },
            { option: "C", answer: "privilege", chinese_answer: "特权", chinese_romanization: "tèquán" },
            { option: "D", answer: "joy", chinese_answer: "快乐", chinese_romanization: "kuàilè" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'burden' means a load, typically a heavy one." + 
            "<br><br>" +
            "(B) 'blessing' means God's favor and protection." + 
            "<br><br>" +
            "(C) 'privilege' means a special right, advantage, or immunity granted or available only to a particular person or group." + 
            "<br><br>" +
            "(D) 'joy' means a feeling of great pleasure and happiness.",
        chinese_explanation: "(A) '负担' 意味着负载，通常是沉重的负担。" + 
            "<br><br>" +
            "(B) '祝福' 意味着上帝的恩宠和保护。" + 
            "<br><br>" +
            "(C) '特权' 意味着仅授予或仅适用于特定人或群体的特别权利、优势或豁免。" + 
            "<br><br>" +
            "(D) '快乐' 意味着极大的愉快和幸福感。"
    },
    {
        id: 2,
        question: "She was grateful for the __________ to quality education provided by the scholarship.",
        chinese_question: "她很感激奖学金提供的__________优质教育的机会。",
        answers: [
            { option: "A", answer: "denial", chinese_answer: "否认", chinese_romanization: "fǒurèn" },
            { option: "B", answer: "restriction", chinese_answer: "限制", chinese_romanization: "xiànzhì" },
            { option: "C", answer: "access", chinese_answer: "机会", chinese_romanization: "jīhuì" },
            { option: "D", answer: "exclusion", chinese_answer: "排除", chinese_romanization: "páichú" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'access' means the means or opportunity to approach or enter a place. Figuratively, it can mean having the opportunity or right to use or benefit from something." + 
            "<br><br>" +
            "(A) 'denial' means the action of declaring something to be untrue." + 
            "<br><br>" +
            "(B) 'restriction' means a limiting condition or measure, especially a legal one." + 
            "<br><br>" +
            "(D) 'exclusion' means the process or state of excluding or being excluded.",
        chinese_explanation: "(C) '机会' 一词意味着接近或进入某个地方的手段或机会。比喻地，它可以表示有机会或权利使用或受益于某事。" + 
            "<br><br>" +
            "(A) '否认' 意味着宣称某事不真实的行为。" + 
            "<br><br>" +
            "(B) '限制' 意味着限制条件或措施，尤其是法律上的。" + 
            "<br><br>" +
            "(D) '排除' 意味着排除或被排除的过程或状态。"
    },
    {
        id: 3,
        question: "She took a different __________ in her career, opting for a creative field instead of finance.",
        chinese_question: "她在职业生涯中选择了一条不同的__________，选择了创意领域而不是金融。",
        answers: [
            { option: "A", answer: "route", chinese_answer: "路线", chinese_romanization: "lùxiàn" },
            { option: "B", answer: "method", chinese_answer: "方法", chinese_romanization: "fāngfǎ" },
            { option: "C", answer: "process", chinese_answer: "过程", chinese_romanization: "guòchéng" },
            { option: "D", answer: "goal", chinese_answer: "目标", chinese_romanization: "mùbiāo" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'route' means a way or course taken in getting from a starting point to a destination. Figuratively, it can mean choosing a different path or approach in life or career." + 
            "<br><br>" +
            "(B) 'method' means a particular form of procedure for accomplishing or approaching something, especially a systematic or established one." + 
            "<br><br>" +
            "(C) 'process' means a series of actions or steps taken to achieve a particular end." + 
            "<br><br>" +
            "(D) 'goal' means the object of a person's ambition or effort; an aim or desired result.",
        chinese_explanation: "(A) '路线' 一词意味着从起点到目的地的方式或路线。比喻地，它可以表示在生活或职业中选择不同的道路或方法。" + 
            "<br><br>" +
            "(B) '方法' 意味着完成或接近某事的特定程序形式，尤其是系统的或既定的程序形式。" + 
            "<br><br>" +
            "(C) '过程' 意味着为达到特定目的而采取的一系列行动或步骤。" + 
            "<br><br>" +
            "(D) '目标' 意味着一个人雄心或努力的对象；目标或期望的结果。"
    },
    {
        id: 4,
        question: "She accepted the invitation to the concert with __________, excited to see her favorite band perform live.",
        chinese_question: "她 __________ 地接受了音乐会的邀请，兴奋地期待看到她最喜欢的乐队现场表演。",
        answers: [
            { option: "A", answer: "hesitation", chinese_answer: "犹豫", chinese_romanization: "yóuyù" },
            { option: "B", answer: "doubt", chinese_answer: "怀疑", chinese_romanization: "huáiyí" },
            { option: "C", answer: "reluctance", chinese_answer: "不情愿", chinese_romanization: "bù qíngyuàn" },
            { option: "D", answer: "alacrity", chinese_answer: "欣然", chinese_romanization: "xīnrán" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'alacrity' means brisk and cheerful readiness." +
            "<br><br>" +
            "(A) 'hesitation' means the action of pausing before saying or doing something." +
            "<br><br>" +
            "(B) 'doubt' means a feeling of uncertainty or lack of conviction." +
            "<br><br>" +
            "(C) 'reluctance' means unwillingness or disinclination to do something.",
        chinese_explanation: "(D) '欣然' 意思是敏捷和愉快的准备。" +
            "<br><br>" +
            "(A) '犹豫' 意思是在说或做某事之前停顿的动作。" +
            "<br><br>" +
            "(B) '怀疑' 意思是缺乏确定性或信念的感觉。" +
            "<br><br>" +
            "(C) '不情愿' 意思是不愿意或不情愿做某事。"
    },
    {
        id: 5,
        question: "The charity made an __________ for donations to help the flood victims.",
        chinese_question: "慈善机构发出__________，请求捐款帮助洪水灾民。",
        answers: [
            { option: "A", answer: "refusal", chinese_answer: "拒绝", chinese_romanization: "jùjué" },
            { option: "B", answer: "appeal", chinese_answer: "呼吁", chinese_romanization: "hūyù" },
            { option: "C", answer: "command", chinese_answer: "命令", chinese_romanization: "mìnglìng" },
            { option: "D", answer: "denial", chinese_answer: "否认", chinese_romanization: "fǒurèn" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'appeal' means a serious or urgent request, typically one made to the public." + 
            "<br><br>" +
            "(A) 'refusal' means an act of refusing to do something." + 
            "<br><br>" +
            "(C) 'command' means an authoritative order." + 
            "<br><br>" +
            "(D) 'denial' means the action of declaring something to be untrue.",
        chinese_explanation: "(B) '呼吁' 一词意味着一个严肃或紧急的请求，通常是向公众发出的。" + 
            "<br><br>" +
            "(A) '拒绝' 意味着拒绝做某事的行为。" + 
            "<br><br>" +
            "(C) '命令' 意味着权威的命令。" + 
            "<br><br>" +
            "(D) '否认' 意味着宣称某事不真实的行为。"
    },
    {
        id: 6,
        question: "She acted as a __________ for her younger siblings, guiding them through difficult times.",
        chinese_question: "她作为弟妹的__________，引导他们度过困难时期。",
        answers: [
            { option: "A", answer: "stranger", chinese_answer: "陌生人", chinese_romanization: "mòshēngrén" },
            { option: "B", answer: "neighbor", chinese_answer: "邻居", chinese_romanization: "línjū" },
            { option: "C", answer: "guardian", chinese_answer: "监护人", chinese_romanization: "jiānhùrén" },
            { option: "D", answer: "teacher", chinese_answer: "老师", chinese_romanization: "lǎoshī" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'guardian' means a person who is legally appointed to manage and take care of a child or property. Figuratively, it can mean someone who provides care and protection." + 
            "<br><br>" +
            "(A) 'stranger' means a person whom one does not know or with whom one is not familiar." + 
            "<br><br>" +
            "(B) 'neighbor' means a person living near or next door to the speaker or person referred to." + 
            "<br><br>" +
            "(D) 'teacher' means a person who teaches, especially in a school.",
        chinese_explanation: "(C) '监护人' 一词意味着被法律任命来管理和照顾孩子或财产的人。比喻地，它可以表示提供关怀和保护的人。" + 
            "<br><br>" +
            "(A) '陌生人' 意味着一个人不认识或不熟悉的人。" + 
            "<br><br>" +
            "(B) '邻居' 意味着住在演讲者或提到的人附近或隔壁的人。" + 
            "<br><br>" +
            "(D) '老师' 意味着教授知识的人，尤其是在学校里。"
    },
    {
        id: 7,
        question: "They had a lively __________ about the merits of the new policy.",
        chinese_question: "他们就新政策的优点进行了热烈的 __________。",
        answers: [
            { option: "A", answer: "debate", chinese_answer: "辩论", chinese_romanization: "biànlùn" },
            { option: "B", answer: "agreement", chinese_answer: "协议", chinese_romanization: "xiéyì" },
            { option: "C", answer: "silence", chinese_answer: "沉默", chinese_romanization: "chénmò" },
            { option: "D", answer: "whisper", chinese_answer: "耳语", chinese_romanization: "ěryǔ" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'debate' means a formal discussion on a particular topic in a public meeting or legislative assembly, in which opposing arguments are put forward." + 
            "<br><br>" +
            "(B) 'agreement' means harmony or accordance in opinion or feeling." + 
            "<br><br>" +
            "(C) 'silence' means complete absence of sound." + 
            "<br><br>" +
            "(D) 'whisper' means speak very softly using one's breath without one's vocal cords, especially for the sake of privacy.",
        chinese_explanation: "(A) '辩论' 意味着在公开会议或立法机构中就特定主题进行的正式讨论，其中提出了相反的论点。" + 
            "<br><br>" +
            "(B) '协议' 意味着意见或感情上的和谐或一致。" + 
            "<br><br>" +
            "(C) '沉默' 意味着完全没有声音。" + 
            "<br><br>" +
            "(D) '耳语' 意味着用呼吸而不用声带非常轻声地说话，特别是为了隐私。"
    },
    {
        id: 8,
        question: "Her __________ to stay calm under pressure is remarkable.",
        chinese_question: "她在压力下保持冷静的 __________ 很了不起。",
        answers: [
            { option: "A", answer: "ability", chinese_answer: "能力", chinese_romanization: "nénglì" },
            { option: "B", answer: "fear", chinese_answer: "恐惧", chinese_romanization: "kǒngjù" },
            { option: "C", answer: "indecisiveness", chinese_answer: "犹豫不决", chinese_romanization: "yóuyù bù jué" },
            { option: "D", answer: "anxiety", chinese_answer: "焦虑", chinese_romanization: "jiāolǜ" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'ability' metaphorically means the skill to do something well." + 
            "<br><br>" +
            "(B) 'fear' means an unpleasant emotion caused by the threat of danger, pain, or harm." + 
            "<br><br>" +
            "(C) 'indecisiveness' means the inability to make decisions quickly and effectively." + 
            "<br><br>" +
            "(D) 'anxiety' means a feeling of worry, nervousness, or unease about something with an uncertain outcome.",
        chinese_explanation: "(A) '能力' 比喻做某事的技能。" + 
            "<br><br>" +
            "(B) '恐惧' 意味着由于危险、疼痛或伤害的威胁而产生的不愉快的情感。" + 
            "<br><br>" +
            "(C) '犹豫不决' 意味着无法快速有效地做出决定。" + 
            "<br><br>" +
            "(D) '焦虑' 意味着对结果不确定的事情感到担忧、紧张或不安的感觉。"
    },
    {
        id: 9,
        question: "The company's __________ increased significantly after the successful launch of their new product.",
        chinese_question: "新产品成功上市后，公司 __________ 显著增加。",
        answers: [
            { option: "A", answer: "revenue", chinese_answer: "收入", chinese_romanization: "shōurù" },
            { option: "B", answer: "expenses", chinese_answer: "支出", chinese_romanization: "zhīchū" },
            { option: "C", answer: "losses", chinese_answer: "损失", chinese_romanization: "sǔnshī" },
            { option: "D", answer: "liabilities", chinese_answer: "负债", chinese_romanization: "fùzhài" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'revenue' means income, especially when of an organization and of a substantial nature." +
            "<br><br>" +
            "(B) 'expenses' means the cost required for something; the money spent on something." +
            "<br><br>" +
            "(C) 'losses' means the fact or process of losing something or someone." +
            "<br><br>" +
            "(D) 'liabilities' means the state of being responsible for something, especially by law.",
        chinese_explanation: "(A) '收入' 意味着收入，特别是当组织和大量收入时。" +
            "<br><br>" +
            "(B) '支出' 意味着某事所需的成本；在某事上的花费。" +
            "<br><br>" +
            "(C) '损失' 意味着失去某物或某人的事实或过程。" +
            "<br><br>" +
            "(D) '负债' 意味着对某事负有责任的状态，尤其是法律上的责任。"
    },
    {
        id: 10,
        question: "Her career __________ has been full of challenges and triumphs.",
        chinese_question: "她的职业 __________ 充满了挑战和胜利。",
        answers: [
            { option: "A", answer: "journey", chinese_answer: "旅程", chinese_romanization: "lǚchéng" },
            { option: "B", answer: "stop", chinese_answer: "停止", chinese_romanization: "tíngzhǐ" },
            { option: "C", answer: "halt", chinese_answer: "中止", chinese_romanization: "zhōngzhǐ" },
            { option: "D", answer: "pause", chinese_answer: "暂停", chinese_romanization: "zàntíng" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'journey' metaphorically means a long and often difficult process of personal change and development." +
            "<br><br>" +
            "(B) 'stop' means a cessation of movement or operation." +
            "<br><br>" +
            "(C) 'halt' means bring or come to an abrupt stop." +
            "<br><br>" +
            "(D) 'pause' means interrupt action or speech briefly.",
        chinese_explanation: "(A) '旅程' 比喻个人变化和发展的漫长而常常困难的过程。" +
            "<br><br>" +
            "(B) '停止' 意味着运动或操作的停止。" +
            "<br><br>" +
            "(C) '中止' 意味着突然停止。" +
            "<br><br>" +
            "(D) '暂停' 意味着暂时中断行动或讲话。"
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
