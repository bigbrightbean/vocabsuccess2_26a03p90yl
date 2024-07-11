// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "He decided to __________ the job offer because it didn't meet his expectations.",
        chinese_question: "他决定 __________ 工作邀请，因为它没有达到他的期望。",
        answers: [
            { option: "A", answer: "decline", chinese_answer: "拒绝", chinese_romanization: "jùjué" },
            { option: "B", answer: "accept", chinese_answer: "接受", chinese_romanization: "jiēshòu" },
            { option: "C", answer: "pursue", chinese_answer: "追求", chinese_romanization: "zhuīqiú" },
            { option: "D", answer: "encourage", chinese_answer: "鼓励", chinese_romanization: "gǔlì" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'decline' means politely refuse (an invitation or offer)." + 
            "<br><br>" +
            "(B) 'accept' means consent to receive (a thing offered)." + 
            "<br><br>" +
            "(C) 'pursue' means follow or chase (someone or something)." + 
            "<br><br>" +
            "(D) 'encourage' means give support, confidence, or hope to (someone).",
        chinese_explanation: "(A) '拒绝' 意味着礼貌地拒绝（邀请或提议）。" + 
            "<br><br>" +
            "(B) '接受' 意味着同意接收（提供的东西）。" + 
            "<br><br>" +
            "(C) '追求' 意味着跟随或追逐（某人或某物）。" + 
            "<br><br>" +
            "(D) '鼓励' 意味着给予（某人）支持、信心或希望。"
    },
    {
        id: 2,
        question: "Her ability to __________ challenges into opportunities made her a great leader.",
        chinese_question: "她将挑战转化为机遇的能力使她成为一位出色的领导者。",
        answers: [
            { option: "A", answer: "convert", chinese_answer: "转化", chinese_romanization: "zhuǎnhuà" },
            { option: "B", answer: "exacerbate", chinese_answer: "加剧", chinese_romanization: "jiājù" },
            { option: "C", answer: "deteriorate", chinese_answer: "恶化", chinese_romanization: "èhuà" },
            { option: "D", answer: "misinterpret", chinese_answer: "误解", chinese_romanization: "wùjiě" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'convert' metaphorically means to change or transform something into a different state or form." + 
            "<br><br>" +
            "(B) 'exacerbate' means to make (a problem, bad situation, or negative feeling) worse." + 
            "<br><br>" +
            "(C) 'deteriorate' means to become progressively worse." + 
            "<br><br>" +
            "(D) 'misinterpret' means to interpret (something or someone) wrongly.",
        chinese_explanation: "(A) '转化' 比喻将某物改变或转变为不同的状态或形式。" + 
            "<br><br>" +
            "(B) '加剧' 意味着使（问题、糟糕的情况或消极情绪）变得更糟。" + 
            "<br><br>" +
            "(C) '恶化' 意味着变得越来越糟。" + 
            "<br><br>" +
            "(D) '误解' 意味着错误地解释（某事或某人）。"
    },
    {
        id: 3,
        question: "She needed to __________ herself before giving the important speech.",
        chinese_question: "在发表重要演讲之前，她需要 __________ 自己。",
        answers: [
            { option: "A", answer: "agitate", chinese_answer: "激动", chinese_romanization: "jīdòng" },
            { option: "B", answer: "confuse", chinese_answer: "困惑", chinese_romanization: "kùnhuò" },
            { option: "C", answer: "excite", chinese_answer: "兴奋", chinese_romanization: "xīngfèn" },
            { option: "D", answer: "compose", chinese_answer: "冷静", chinese_romanization: "lěngjìng" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'compose' metaphorically means to calm or settle (oneself or one's features or thoughts)." + 
            "<br><br>" +
            "(A) 'agitate' means to make (someone) troubled or nervous." + 
            "<br><br>" +
            "(B) 'confuse' means to make (someone) bewildered or perplexed." + 
            "<br><br>" +
            "(C) 'excite' means to cause strong feelings of enthusiasm and eagerness in (someone).",
        chinese_explanation: "(D) '冷静' 比喻冷静或安定（自己或自己的特征或思想）。" + 
            "<br><br>" +
            "(A) '激动' 意味着使（某人）感到困扰或紧张。" + 
            "<br><br>" +
            "(B) '困惑' 意味着使（某人）感到迷惑或困惑。" + 
            "<br><br>" +
            "(C) '兴奋' 意味着在（某人）中引起强烈的热情和渴望。"
    },
    {
        id: 4,
        question: "The team began to __________ after winning the championship, celebrating with cheers and high-fives.",
        chinese_question: "球队赢得冠军后开始欢呼雀跃，并互相击掌__________。",
        answers: [
            { option: "A", answer: "mourn", chinese_answer: "哀悼", chinese_romanization: "āidào" },
            { option: "B", answer: "exult", chinese_answer: "欢欣鼓舞", chinese_romanization: "huānxīn gǔwǔ" },
            { option: "C", answer: "regret", chinese_answer: "后悔", chinese_romanization: "hòuhuǐ" },
            { option: "D", answer: "lament", chinese_answer: "悲叹", chinese_romanization: "bēitàn" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'exult' means show or feel elation or jubilation, especially as the result of a success." + 
            "<br><br>" +
            "(A) 'mourn' means feel or show deep sorrow or regret for (someone or their death), typically by following conventions such as the wearing of black clothes." + 
            "<br><br>" +
            "(C) 'regret' means feel sad, repentant, or disappointed over (something that has happened or been done, especially a loss or missed opportunity)." + 
            "<br><br>" +
            "(D) 'lament' means express passionate grief about.",
        chinese_explanation: "(B) '欢欣鼓舞' 一词意味着展示或感到高兴，尤其是因为成功的结果。" + 
            "<br><br>" +
            "(A) '哀悼' 意味着对（某人或他们的死亡）感到深深的悲伤或后悔，通常通过遵循传统，如穿黑衣。" + 
            "<br><br>" +
            "(C) '后悔' 意味着对（发生或做过的事，尤其是损失或错失机会）感到悲伤、悔恨或失望。" + 
            "<br><br>" +
            "(D) '悲叹' 意味着表达热情的悲伤。"
    },
    {
        id: 5,
        question: "She tends to __________ her talents during group projects, making her a valuable team member.",
        chinese_question: "在团队项目中，她倾向于__________自己的才能，使她成为有价值的团队成员。",
        answers: [
            { option: "A", answer: "hide", chinese_answer: "隐藏", chinese_romanization: "yǐncáng" },
            { option: "B", answer: "suppress", chinese_answer: "压制", chinese_romanization: "yāzhì" },
            { option: "C", answer: "exhibit", chinese_answer: "展示", chinese_romanization: "zhǎnshì" },
            { option: "D", answer: "conceal", chinese_answer: "隐瞒", chinese_romanization: "yǐnmán" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'exhibit' means publicly display (a work of art or item of interest) in an art gallery or museum or at a trade fair. Figuratively, it can mean showing or demonstrating abilities or qualities." + 
            "<br><br>" +
            "(A) 'hide' means put or keep out of sight." + 
            "<br><br>" +
            "(B) 'suppress' means forcibly put an end to or restrain (an action or emotion)." + 
            "<br><br>" +
            "(D) 'conceal' means keep from sight; hide.",
        chinese_explanation: "(C) '展示' 一词意味着在艺术馆、博物馆或贸易展览会上公开展示（艺术品或感兴趣的物品）。比喻地，它可以表示展示或展示能力或品质。" + 
            "<br><br>" +
            "(A) '隐藏' 意味着放置或保持在视线之外。" + 
            "<br><br>" +
            "(B) '压制' 意味着强行结束或抑制（某一行动或情感）。" + 
            "<br><br>" +
            "(D) '隐瞒' 意味着从视线中隐藏；隐藏。"
    },
    {
        id: 6,
        question: "Athletes need to __________ a lot of effort to achieve peak performance.",
        chinese_question: "运动员需要__________大量的努力以达到巅峰表现。",
        answers: [
            { option: "A", answer: "rest", chinese_answer: "休息", chinese_romanization: "xiūxí" },
            { option: "B", answer: "avoid", chinese_answer: "避免", chinese_romanization: "bìmiǎn" },
            { option: "C", answer: "exert", chinese_answer: "施加", chinese_romanization: "shījiā" },
            { option: "D", answer: "withdraw", chinese_answer: "撤回", chinese_romanization: "chèhuí" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'exert' means apply or bring to bear (a force, influence, or quality)." + 
            "<br><br>" +
            "(A) 'rest' means cease work or movement in order to relax, refresh oneself, or recover strength." + 
            "<br><br>" +
            "(B) 'avoid' means keep away from or stop oneself from doing (something)." + 
            "<br><br>" +
            "(D) 'withdraw' means remove or take away (something) from a particular place or position.",
        chinese_explanation: "(C) '施加' 一词意味着应用或施加（力量、影响或品质）。" + 
            "<br><br>" +
            "(A) '休息' 意味着停止工作或运动以放松、恢复精神或恢复力量。" + 
            "<br><br>" +
            "(B) '避免' 意味着避开或阻止自己做（某事）。" + 
            "<br><br>" +
            "(D) '撤回' 意味着从特定地点或位置移除或取走（某物）。"
    },
    {
        id: 7,
        question: "He tried to __________ the question by changing the subject.",
        chinese_question: "他试图通过改变话题来__________这个问题。",
        answers: [
            { option: "A", answer: "confront", chinese_answer: "面对", chinese_romanization: "miànduì" },
            { option: "B", answer: "evade", chinese_answer: "回避", chinese_romanization: "huíbì" },
            { option: "C", answer: "answer", chinese_answer: "回答", chinese_romanization: "huídá" },
            { option: "D", answer: "face", chinese_answer: "面对", chinese_romanization: "miànduì" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'evade' means escape or avoid, especially by cleverness or trickery." + 
            "<br><br>" +
            "(A) 'confront' means face up to and deal with (a problem or difficult situation)." + 
            "<br><br>" +
            "(C) 'answer' means say or write something to deal with or as a reaction to someone or something." + 
            "<br><br>" +
            "(D) 'face' means confront and deal with or accept a difficult or unpleasant task, fact, or situation.",
        chinese_explanation: "(B) '回避' 一词意味着逃避或避免，尤其是通过聪明或诡计。" + 
            "<br><br>" +
            "(A) '面对' 意味着面对并处理（问题或困难情况）。" + 
            "<br><br>" +
            "(C) '回答' 意味着说或写某事以应对或作为对某人或某事的反应。" + 
            "<br><br>" +
            "(D) '面对' 意味着面对并处理或接受困难或不愉快的任务、事实或情况。"
    },
    {
        id: 8,
        question: "Pollution can __________ many species by destroying their natural habitats.",
        chinese_question: "污染会通过破坏自然栖息地__________许多物种。",
        answers: [
            { option: "A", answer: "protect", chinese_answer: "保护", chinese_romanization: "bǎohù" },
            { option: "B", answer: "save", chinese_answer: "拯救", chinese_romanization: "zhěngjiù" },
            { option: "C", answer: "endanger", chinese_answer: "危及", chinese_romanization: "wēijí" },
            { option: "D", answer: "conserve", chinese_answer: "保存", chinese_romanization: "bǎocún" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'endanger' means put (someone or something) at risk or in danger." + 
            "<br><br>" +
            "(A) 'protect' means keep safe from harm or injury." + 
            "<br><br>" +
            "(B) 'save' means keep safe or rescue (someone or something) from harm or danger." + 
            "<br><br>" +
            "(D) 'conserve' means protect (something, especially an environmentally or culturally important place or thing) from harm or destruction.",
        chinese_explanation: "(C) '危及' 一词意味着将（某人或某物）置于风险或危险之中。" + 
            "<br><br>" +
            "(A) '保护' 意味着使免受伤害或损害。" + 
            "<br><br>" +
            "(B) '拯救' 意味着使安全或拯救（某人或某物）免受伤害或危险。" + 
            "<br><br>" +
            "(D) '保存' 意味着保护（某物，尤其是环境或文化重要的地方或事物）免受伤害或破坏。"
    },
    {
        id: 9,
        question: "The boss would __________ the terms of the contract to the employees, outlining every detail clearly and firmly.",
        chinese_question: "老板会详细明确地__________合同条款给员工。",
        answers: [
            { option: "A", answer: "dictate", chinese_answer: "规定", chinese_romanization: "guīdìng" },
            { option: "B", answer: "suggest", chinese_answer: "建议", chinese_romanization: "jiànyì" },
            { option: "C", answer: "request", chinese_answer: "请求", chinese_romanization: "qǐngqiú" },
            { option: "D", answer: "ask", chinese_answer: "问", chinese_romanization: "wèn" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'dictate' means to lay down authoritatively; prescribe." + 
            "<br><br>" +
            "(B) 'suggest' means put forward for consideration." + 
            "<br><br>" +
            "(C) 'request' means politely or formally ask for." + 
            "<br><br>" +
            "(D) 'ask' means say something in order to obtain an answer or some information.",
        chinese_explanation: "(A) '规定' 意味着权威地制定；规定。" + 
            "<br><br>" +
            "(B) '建议' 意味着提出以供考虑。" + 
            "<br><br>" +
            "(C) '请求' 意味着礼貌地或正式地要求。" + 
            "<br><br>" +
            "(D) '问' 意味着说某事以获得答案或一些信息。"
    },
    {
        id: 10,
        question: "The photographer aimed to __________ the essence of city life, capturing vibrant street scenes and bustling marketplaces.",
        chinese_question: "摄影师旨在通过捕捉充满活力的街景和热闹的市场来__________城市生活的精髓。",
        answers: [
            { option: "A", answer: "document", chinese_answer: "记录", chinese_romanization: "jìlù" },
            { option: "B", answer: "overlook", chinese_answer: "忽略", chinese_romanization: "hūlüè" },
            { option: "C", answer: "erase", chinese_answer: "抹去", chinese_romanization: "mǒqù" },
            { option: "D", answer: "distort", chinese_answer: "扭曲", chinese_romanization: "niǔqū" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'document' metaphorically means to capture or record in detail." + 
            "<br><br>" +
            "(B) 'overlook' means fail to notice (something)." + 
            "<br><br>" +
            "(C) 'erase' means remove all traces of; destroy or obliterate." + 
            "<br><br>" +
            "(D) 'distort' means pull or twist out of shape.",
        chinese_explanation: "(A) '记录' 比喻详细捕捉或记录。" + 
            "<br><br>" +
            "(B) '忽略' 意味着未能注意到（某事）。" + 
            "<br><br>" +
            "(C) '抹去' 意味着消除所有痕迹；摧毁或抹去。" + 
            "<br><br>" +
            "(D) '扭曲' 意味着拉或扭出形状。"
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
