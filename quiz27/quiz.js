// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "Her __________ solution to the design problem impressed everyone in the engineering team.",
        chinese_question: "她对设计问题的 __________ 解决方案给工程团队中的每个人都留下了深刻印象。",
        answers: [
            { option: "A", answer: "ordinary", chinese_answer: "普通的", chinese_romanization: "pǔtōng de" },
            { option: "B", answer: "simple", chinese_answer: "简单的", chinese_romanization: "jiǎndān de" },
            { option: "C", answer: "ingenious", chinese_answer: "巧妙的", chinese_romanization: "qiǎomiào de" },
            { option: "D", answer: "routine", chinese_answer: "常规的", chinese_romanization: "chángguī de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'ingenious' means (of a person) clever, original, and inventive." +
            "<br><br>" +
            "(A) 'ordinary' means with no special or distinctive features; normal." +
            "<br><br>" +
            "(B) 'simple' means easily understood or done; presenting no difficulty." +
            "<br><br>" +
            "(D) 'routine' means a sequence of actions regularly followed.",
        chinese_explanation: "(C) '巧妙的' 意味着（指人）聪明、原创和有创意的。" +
            "<br><br>" +
            "(A) '普通的' 意味着没有特殊或独特特征的；正常的。" +
            "<br><br>" +
            "(B) '简单的' 意味着容易理解或完成；没有难度。" +
            "<br><br>" +
            "(D) '常规的' 意味着经常遵循的动作顺序。"
    },
    {
        id: 2,
        question: "After hiking all day, the group was __________ and eagerly looked forward to a hearty meal.",
        chinese_question: "在一整天的徒步旅行后，这群人 __________，急切地期待一顿丰盛的饭菜。",
        answers: [
            { option: "A", answer: "satisfied", chinese_answer: "满意的", chinese_romanization: "mǎnyì de" },
            { option: "B", answer: "famished", chinese_answer: "饥饿的", chinese_romanization: "jī'è de" },
            { option: "C", answer: "exhausted", chinese_answer: "精疲力尽的", chinese_romanization: "jīng pí lì jìn de" },
            { option: "D", answer: "relaxed", chinese_answer: "放松的", chinese_romanization: "fàngsōng de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'famished' means extremely hungry." +
            "<br><br>" +
            "(A) 'satisfied' means contented; pleased." +
            "<br><br>" +
            "(C) 'exhausted' means drained of one's physical or mental resources; very tired." +
            "<br><br>" +
            "(D) 'relaxed' means free from tension and anxiety; at ease.",
        chinese_explanation: "(B) '饥饿的' 一词意味着极度饥饿的。" +
            "<br><br>" +
            "(A) '满意的' 意味着满足的；高兴的。" +
            "<br><br>" +
            "(C) '精疲力尽的' 意味着耗尽身体或精神资源的；非常疲倦的。" +
            "<br><br>" +
            "(D) '放松的' 意味着没有紧张和焦虑的；放松的。"
    },
    {
        id: 3,
        question: "The child's __________ behavior, throwing tantrums over minor issues, was difficult for the parents to manage.",
        chinese_question: "孩子的 __________ 行为，因为小事大发脾气，父母难以应对。",
        answers: [
            { option: "A", answer: "cheerful", chinese_answer: "快乐", chinese_romanization: "kuàilè" },
            { option: "B", answer: "obedient", chinese_answer: "顺从", chinese_romanization: "shùncóng" },
            { option: "C", answer: "petulant", chinese_answer: "暴躁", chinese_romanization: "bàozào" },
            { option: "D", answer: "agreeable", chinese_answer: "愉快", chinese_romanization: "yúkuài" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'petulant' means childishly sulky or bad-tempered." +
            "<br><br>" +
            "(A) 'cheerful' means noticeably happy and optimistic." +
            "<br><br>" +
            "(B) 'obedient' means complying or willing to comply with an order or request; submissive to another's authority." +
            "<br><br>" +
            "(D) 'agreeable' means enjoyable and pleasurable; pleasant.",
        chinese_explanation: "(C) '暴躁' 一词意味着孩子气的生气或坏脾气。" +
            "<br><br>" +
            "(A) '快乐' 意味着显著的快乐和乐观。" +
            "<br><br>" +
            "(B) '顺从' 意味着遵守或愿意遵守命令或请求；服从他人的权威。" +
            "<br><br>" +
            "(D) '愉快' 意味着令人愉快和愉快的；愉快的。"
    },
    {
        id: 4,
        question: "The manager was known for her __________ attitude, often criticizing employees for minor mistakes and constantly pointing out flaws in their work.",
        chinese_question: "这位经理以她 __________ 的态度而闻名，经常因为小错误批评员工，并不断指出他们工作中的缺陷。",
        answers: [
            { option: "A", answer: "supportive", chinese_answer: "支持的", chinese_romanization: "zhīchí de" },
            { option: "B", answer: "lenient", chinese_answer: "宽容的", chinese_romanization: "kuānróng de" },
            { option: "C", answer: "indifferent", chinese_answer: "冷漠的", chinese_romanization: "lěngmò de" },
            { option: "D", answer: "censorious", chinese_answer: "吹毛求疵的", chinese_romanization: "chuīmáoqiúcī de" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'censorious' means severely critical of others." +
            "<br><br>" +
            "(A) 'supportive' means providing encouragement or emotional help." +
            "<br><br>" +
            "(B) 'lenient' means more merciful or tolerant than expected." +
            "<br><br>" +
            "(C) 'indifferent' means having no particular interest or sympathy; unconcerned.",
        chinese_explanation: "(D) '吹毛求疵的' 意味着对他人严厉批评。" +
            "<br><br>" +
            "(A) '支持的' 意味着提供鼓励或情感帮助的。" +
            "<br><br>" +
            "(B) '宽容的' 意味着比预期的更仁慈或宽容。" +
            "<br><br>" +
            "(C) '冷漠的' 意味着没有特别的兴趣或同情；不关心的。"
    },
    {
        id: 5,
        question: "His __________ behavior during the meeting made it difficult for others to take him seriously.",
        chinese_question: "他在会议上的 __________ 行为使得他人难以认真对待他。",
        answers: [
            { option: "A", answer: "mature", chinese_answer: "成熟的", chinese_romanization: "chéngshú de" },
            { option: "B", answer: "professional", chinese_answer: "专业的", chinese_romanization: "zhuānyè de" },
            { option: "C", answer: "responsible", chinese_answer: "负责任的", chinese_romanization: "fù zérèn de" },
            { option: "D", answer: "immature", chinese_answer: "不成熟的", chinese_romanization: "bù chéngshú de" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'immature' means not fully developed." +
            "<br><br>" +
            "(A) 'mature' means fully developed physically; full-grown." +
            "<br><br>" +
            "(B) 'professional' means relating to or connected with a profession." +
            "<br><br>" +
            "(C) 'responsible' means having an obligation to do something as part of a job or role.",
        chinese_explanation: "(D) '不成熟的' 意味着尚未完全发展。" +
            "<br><br>" +
            "(A) '成熟的' 意味着身体完全发育的；成年的。" +
            "<br><br>" +
            "(B) '专业的' 意味着与某个职业有关或与之相关的。" +
            "<br><br>" +
            "(C) '负责任的' 意味着有义务做某事作为工作或角色的一部分。"
    },
    {
        id: 6,
        question: "Despite her strong opinions, she remained __________ in meetings, often agreeing with whatever her boss suggested.",
        chinese_question: "尽管她有强烈的观点，但在会议上她仍然很 __________，常常同意老板的建议。",
        answers: [
            { option: "A", answer: "assertive", chinese_answer: "自信的", chinese_romanization: "zìxìn de" },
            { option: "B", answer: "dominant", chinese_answer: "支配的", chinese_romanization: "zhīpèi de" },
            { option: "C", answer: "submissive", chinese_answer: "顺从的", chinese_romanization: "shùncóng de" },
            { option: "D", answer: "rebellious", chinese_answer: "叛逆的", chinese_romanization: "pànnì de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'submissive' means ready to conform to the authority or will of others; meekly obedient or passive." +
            "<br><br>" +
            "(A) 'assertive' means having or showing a confident and forceful personality." +
            "<br><br>" +
            "(B) 'dominant' means having power and influence over others." +
            "<br><br>" +
            "(D) 'rebellious' means showing a desire to resist authority, control, or convention.",
        chinese_explanation: "(C) '顺从的' 一词意味着准备好服从他人的权威或意愿；温顺地服从或被动的。" +
            "<br><br>" +
            "(A) '自信的' 意味着有或表现出自信和有力的个性。" +
            "<br><br>" +
            "(B) '支配的' 意味着拥有对他人的权力和影响力。" +
            "<br><br>" +
            "(D) '叛逆的' 意味着表现出抵抗权威、控制或惯例的愿望。"
    },
    {
        id: 7,
        question: "Her __________ laughter filled the room, making everyone else smile.",
        chinese_question: "她的 __________ 笑声充满了整个房间，让其他人都笑了起来。",
        answers: [
            { option: "A", answer: "forced", chinese_answer: "强迫的", chinese_romanization: "qiǎngpò de" },
            { option: "B", answer: "planned", chinese_answer: "计划的", chinese_romanization: "jìhuà de" },
            { option: "C", answer: "spontaneous", chinese_answer: "自发的", chinese_romanization: "zìfā de" },
            { option: "D", answer: "rehearsed", chinese_answer: "排练的", chinese_romanization: "páiliàn de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'spontaneous' means performed or occurring as a result of a sudden inner impulse or inclination and without premeditation or external stimulus." +
            "<br><br>" +
            "(A) 'forced' means obtained or imposed by coercion or physical power." +
            "<br><br>" +
            "(B) 'planned' means decided on and arranged in advance." +
            "<br><br>" +
            "(D) 'rehearsed' means practiced for later public performance.",
        chinese_explanation: "(C) '自发的' 一词意味着由于突然的内在冲动或倾向而进行或发生的，没有预谋或外部刺激。" +
            "<br><br>" +
            "(A) '强迫的' 意味着通过强制或物理力量获得或施加的。" +
            "<br><br>" +
            "(B) '计划的' 意味着事先决定和安排的。" +
            "<br><br>" +
            "(D) '排练的' 意味着为以后公开演出而排练的。"
    },
    {
        id: 8,
        question: "The __________ noise from the construction site made it difficult for the residents to get any sleep.",
        chinese_question: "施工现场的 __________ 噪音使居民难以入睡。",
        answers: [
            { option: "A", answer: "occasional", chinese_answer: "偶尔的", chinese_romanization: "ǒu'ěr de" },
            { option: "B", answer: "incessant", chinese_answer: "不间断的", chinese_romanization: "bù jiàn duàn de" },
            { option: "C", answer: "intermittent", chinese_answer: "间歇的", chinese_romanization: "jiànxiē de" },
            { option: "D", answer: "rare", chinese_answer: "罕见的", chinese_romanization: "hǎnjiàn de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'incessant' means continuing without pause or interruption." +
            "<br><br>" +
            "(A) 'occasional' means occurring, appearing, or done infrequently and irregularly." +
            "<br><br>" +
            "(C) 'intermittent' means occurring at irregular intervals; not continuous or steady." +
            "<br><br>" +
            "(D) 'rare' means not occurring very often.",
        chinese_explanation: "(B) '不间断的' 一词意味着持续不断或没有中断的。" +
            "<br><br>" +
            "(A) '偶尔的' 意味着不频繁且不规则地发生、出现或完成的。" +
            "<br><br>" +
            "(C) '间歇的' 意味着不规则间隔发生的；不连续或不稳定的。" +
            "<br><br>" +
            "(D) '罕见的' 意味着不经常发生的。"
    },
    {
        id: 9,
       question: "The museum displayed an __________ artifact from the ancient civilization, verified by experts.",
        chinese_question: "博物馆展出了一件经过专家验证的古代文明的 __________ 文物。",
        answers: [
            { option: "A", answer: "fake", chinese_answer: "假的", chinese_romanization: "jiǎ de" },
            { option: "B", answer: "inauthentic", chinese_answer: "不真实的", chinese_romanization: "bù zhēnshí de" },
            { option: "C", answer: "authentic", chinese_answer: "真实的", chinese_romanization: "zhēnshí de" },
            { option: "D", answer: "counterfeit", chinese_answer: "伪造的", chinese_romanization: "wěizào de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'authentic' means of undisputed origin and not a copy; genuine." +
            "<br><br>" +
            "(A) 'fake' means not genuine; counterfeit." +
            "<br><br>" +
            "(B) 'inauthentic' means not in fact what it is said to be." +
            "<br><br>" +
            "(D) 'counterfeit' means made in exact imitation of something valuable with the intention to deceive or defraud.",
        chinese_explanation: "(C) '真实的' 一词意味着无可争议的起源，而不是复制品；真正的。" +
            "<br><br>" +
            "(A) '假的' 意味着不真实的；伪造的。" +
            "<br><br>" +
            "(B) '不真实的' 意味着实际上不是所说的那样。" +
            "<br><br>" +
            "(D) '伪造的' 意味着完全仿制有价值的东西，意图欺骗或欺诈。"
    },
    {
        id: 10,
        question: "The salesman used __________ tactics to sell his products, often misleading customers about their quality.",
        chinese_question: "销售员使用 __________ 的手段销售产品，经常误导顾客关于产品的质量。",
        answers: [
            { option: "A", answer: "devious", chinese_answer: "狡诈的", chinese_romanization: "jiǎozhà de" },
            { option: "B", answer: "straightforward", chinese_answer: "直率的", chinese_romanization: "zhíshuài de" },
            { option: "C", answer: "honest", chinese_answer: "诚实的", chinese_romanization: "chéngshí de" },
            { option: "D", answer: "direct", chinese_answer: "直接的", chinese_romanization: "zhíjiē de" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'devious' means showing a skillful use of underhanded tactics to achieve goals." +
            "<br><br>" +
            "(B) 'straightforward' means uncomplicated and easy to do or understand." +
            "<br><br>" +
            "(C) 'honest' means free of deceit and untruthfulness; sincere." +
            "<br><br>" +
            "(D) 'direct' means extending or moving from one place to another by the shortest way without changing direction or stopping.",
        chinese_explanation: "(A) '狡诈的' 一词意味着巧妙地使用阴险的手段来实现目标。" +
            "<br><br>" +
            "(B) '直率的' 意味着简单易懂的。" +
            "<br><br>" +
            "(C) '诚实的' 意味着没有欺骗和虚假；真诚的。" +
            "<br><br>" +
            "(D) '直接的' 意味着从一个地方到另一个地方延伸或移动的最短路径，没有改变方向或停止。"
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
