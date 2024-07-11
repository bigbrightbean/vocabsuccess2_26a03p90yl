// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "The constant bickering between the siblings began to __________ their parents, who longed for peace.",
        chinese_question: "兄弟姐妹之间的不断争吵开始 __________ 父母，他们渴望安宁。",
        answers: [
            { option: "A", answer: "delight", chinese_answer: "高兴", chinese_romanization: "gāoxìng" },
            { option: "B", answer: "soothe", chinese_answer: "安抚", chinese_romanization: "ānfǔ" },
            { option: "C", answer: "exasperate", chinese_answer: "恼怒", chinese_romanization: "nǎonù" },
            { option: "D", answer: "calm", chinese_answer: "平静", chinese_romanization: "píngjìng" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'exasperate' means to irritate intensely; infuriate." +
            "<br><br>" +
            "(A) 'delight' means please greatly." +
            "<br><br>" +
            "(B) 'soothe' means gently calm a person or their feelings." +
            "<br><br>" +
            "(D) 'calm' means make someone tranquil and quiet; soothe.",
        chinese_explanation: "(C) '恼怒' 一词意味着强烈激怒；激怒。" +
            "<br><br>" +
            "(A) '高兴' 意味着极大地取悦。" +
            "<br><br>" +
            "(B) '安抚' 意味着轻轻地使某人或他们的情感平静。" +
            "<br><br>" +
            "(D) '平静' 意味着使某人安静和平静。"
    },
    {
        id: 2,
        question: "The morning dew began to __________ as the sun rose higher in the sky, leaving the grass dry.",
        chinese_question: "随着太阳升得更高，晨露开始 __________，草地变干了。",
        answers: [
            { option: "A", answer: "evaporate", chinese_answer: "蒸发", chinese_romanization: "zhēngfā" },
            { option: "B", answer: "condense", chinese_answer: "凝结", chinese_romanization: "níngjié" },
            { option: "C", answer: "solidify", chinese_answer: "固化", chinese_romanization: "gùhuà" },
            { option: "D", answer: "freeze", chinese_answer: "结冰", chinese_romanization: "jiébīng" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'evaporate' means turn from liquid into vapor." +
            "<br><br>" +
            "(B) 'condense' means make (something) denser or more concentrated." +
            "<br><br>" +
            "(C) 'solidify' means make or become hard or solid." +
            "<br><br>" +
            "(D) 'freeze' means (with reference to a liquid) turn or be turned into ice or another solid as a result of extreme cold.",
        chinese_explanation: "(A) '蒸发' 一词意味着从液体变成蒸汽。" +
            "<br><br>" +
            "(B) '凝结' 意味着使（某物）更密集或更浓缩。" +
            "<br><br>" +
            "(C) '固化' 意味着使或变硬或变固。" +
            "<br><br>" +
            "(D) '结冰' 意味着（指液体）因极冷而变成冰或另一种固体。"
    },
    {
        id: 3,
        question: "The tour guide used gestures to __________ important information to the tourists who didn't speak the local language.",
        chinese_question: "导游用手势 __________ 重要信息给不说当地语言的游客。",
        answers: [
            { option: "A", answer: "confuse", chinese_answer: "使困惑", chinese_romanization: "shǐ kùnhuò" },
            { option: "B", answer: "conceal", chinese_answer: "隐藏", chinese_romanization: "yǐncáng" },
            { option: "C", answer: "distort", chinese_answer: "扭曲", chinese_romanization: "niǔqū" },
            { option: "D", answer: "convey", chinese_answer: "传达", chinese_romanization: "chuándá" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'convey' means make (an idea, impression, or feeling) known or understandable to someone." +
            "<br><br>" +
            "(A) 'confuse' means make (someone) bewildered or perplexed." +
            "<br><br>" +
            "(B) 'conceal' means keep from sight; hide." +
            "<br><br>" +
            "(C) 'distort' means pull or twist out of shape.",
        chinese_explanation: "(D) '传达' 一词意味着使（某个想法、印象或感觉）为某人所知或理解。" +
            "<br><br>" +
            "(A) '使困惑' 意味着使（某人）困惑或困惑。" +
            "<br><br>" +
            "(B) '隐藏' 意味着不让看到；隐藏。" +
            "<br><br>" +
            "(C) '扭曲' 意味着拉或扭出形状。"
    },
    {
        id: 4,
        question: "The presence of security cameras in the area helped __________ potential criminals from committing theft.",
        chinese_question: "该区域安装的监控摄像头有助于 __________ 潜在的犯罪分子实施盗窃。",
        answers: [
            { option: "A", answer: "encourage", chinese_answer: "鼓励", chinese_romanization: "gǔlì" },
            { option: "B", answer: "attract", chinese_answer: "吸引", chinese_romanization: "xīyǐn" },
            { option: "C", answer: "deter", chinese_answer: "阻止", chinese_romanization: "zǔzhǐ" },
            { option: "D", answer: "invite", chinese_answer: "邀请", chinese_romanization: "yāoqǐng" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'deter' means discourage (someone) from doing something, typically by instilling doubt or fear of the consequences." +
            "<br><br>" +
            "(A) 'encourage' means give support, confidence, or hope to (someone)." +
            "<br><br>" +
            "(B) 'attract' means cause to come to a place or participate in a venture by offering something of interest or advantage." +
            "<br><br>" +
            "(D) 'invite' means make a polite, formal, or friendly request to (someone) to go somewhere or to do something.",
        chinese_explanation: "(C) '阻止' 一词意味着通过灌输对后果的怀疑或恐惧来阻止（某人）做某事。" +
            "<br><br>" +
            "(A) '鼓励' 意味着给予（某人）支持、信心或希望。" +
            "<br><br>" +
            "(B) '吸引' 意味着通过提供感兴趣或有优势的东西使来到一个地方或参加一个项目。" +
            "<br><br>" +
            "(D) '邀请' 意味着礼貌、正式或友好地请求（某人）去某个地方或做某事。"
    },
    {
        id: 5,
        question: "The magician's trick was designed to __________ the audience's attention while he prepared the next illusion.",
        chinese_question: "魔术师的把戏旨在 __________ 观众的注意力，同时他准备下一个幻术。",
        answers: [
            { option: "A", answer: "attract", chinese_answer: "吸引", chinese_romanization: "xīyǐn" },
            { option: "B", answer: "divert", chinese_answer: "转移", chinese_romanization: "zhuǎnyí" },
            { option: "C", answer: "focus", chinese_answer: "集中", chinese_romanization: "jízhōng" },
            { option: "D", answer: "concentrate", chinese_answer: "集中", chinese_romanization: "jízhōng" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'divert' means cause (someone or something) to change course or turn from one direction to another." +
            "<br><br>" +
            "(A) 'attract' means cause to come to a place or participate in a venture by offering something of interest or advantage." +
            "<br><br>" +
            "(C) 'focus' means pay particular attention to." +
            "<br><br>" +
            "(D) 'concentrate' means focus all one's attention or mental effort on a particular object or activity.",
        chinese_explanation: "(B) '转移' 一词意味着使（某人或某物）改变方向或从一个方向转向另一个方向。" +
            "<br><br>" +
            "(A) '吸引' 意味着通过提供感兴趣或有优势的东西使来到一个地方或参加一个项目。" +
            "<br><br>" +
            "(C) '集中' 意味着特别关注。" +
            "<br><br>" +
            "(D) '集中' 意味着将所有注意力或精神努力集中在特定对象或活动上。"
    },
    {
        id: 6,
        question: "The rapid development of the area threatens to __________ on the natural habitats of several endangered species.",
        chinese_question: "该地区的快速发展威胁到 __________ 几个濒危物种的自然栖息地。",
        answers: [
            { option: "A", answer: "retreat", chinese_answer: "撤退", chinese_romanization: "chètuì" },
            { option: "B", answer: "encroach", chinese_answer: "侵占", chinese_romanization: "qīnzhàn" },
            { option: "C", answer: "preserve", chinese_answer: "保护", chinese_romanization: "bǎohù" },
            { option: "D", answer: "avoid", chinese_answer: "避免", chinese_romanization: "bìmiǎn" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'encroach' means intrude on (a person's territory, rights, etc.)." +
            "<br><br>" +
            "(A) 'retreat' means move back or withdraw." +
            "<br><br>" +
            "(C) 'preserve' means maintain (something) in its original or existing state." +
            "<br><br>" +
            "(D) 'avoid' means keep away from or stop oneself from doing (something).",
        chinese_explanation: "(B) '侵占' 一词意味着侵入（某人的领土、权利等）。" +
            "<br><br>" +
            "(A) '撤退' 意味着后退或撤回。" +
            "<br><br>" +
            "(C) '保护' 意味着保持（某物）的原始或现有状态。" +
            "<br><br>" +
            "(D) '避免' 意味着远离或阻止自己做（某事）。"
    },
    {
        id: 7,
        question: "The pilot had to __________ the plane as it approached the runway to ensure a safe landing.",
        chinese_question: "飞行员在飞机接近跑道时不得不 __________ 飞机，以确保安全着陆。",
        answers: [
            { option: "A", answer: "accelerate", chinese_answer: "加速", chinese_romanization: "jiāsù" },
            { option: "B", answer: "hasten", chinese_answer: "加快", chinese_romanization: "jiākuài" },
            { option: "C", answer: "speed", chinese_answer: "加速", chinese_romanization: "jiāsù" },
            { option: "D", answer: "decelerate", chinese_answer: "减速", chinese_romanization: "jiǎnsù" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'decelerate' means reduce or cause to reduce in speed." +
            "<br><br>" +
            "(A) 'accelerate' means (of a vehicle or other physical object) begin to move more quickly." +
            "<br><br>" +
            "(B) 'hasten' means to be quick to do something." +
            "<br><br>" +
            "(C) 'speed' means to move quickly.",
        chinese_explanation: "(D) '减速' 一词意味着减少或导致速度减少。" +
            "<br><br>" +
            "(A) '加速' 意味着（车辆或其他物体）开始更快地移动。" +
            "<br><br>" +
            "(B) '加快' 意味着快速做某事。" +
            "<br><br>" +
            "(C) '加速' 意味着快速移动。"
    },
    {
        id: 8,
        question: "The animals ventured into the forest to __________ for food, seeking sustenance among the trees and bushes.",
        chinese_question: "动物们冒险进入森林 __________ 寻找食物，在树木和灌木丛中寻找养料。",
        answers: [
            { option: "A", answer: "rest", chinese_answer: "休息", chinese_romanization: "xiūxí" },
            { option: "B", answer: "sleep", chinese_answer: "睡觉", chinese_romanization: "shuìjiào" },
            { option: "C", answer: "play", chinese_answer: "玩耍", chinese_romanization: "wánshuǎ" },
            { option: "D", answer: "forage", chinese_answer: "觅食", chinese_romanization: "mìshí" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'forage' means (of a person or animal) search widely for food or provisions." +
            "<br><br>" +
            "(A) 'rest' means cease work or movement in order to relax, refresh oneself, or recover strength." +
            "<br><br>" +
            "(B) 'sleep' means a condition of body and mind which typically recurs for several hours every night, in which the nervous system is relatively inactive, the eyes closed, the postural muscles relaxed, and consciousness practically suspended." +
            "<br><br>" +
            "(C) 'play' means engage in activity for enjoyment and recreation rather than a serious or practical purpose.",
        chinese_explanation: "(D) '觅食' 一词意味着（人或动物）广泛寻找食物或供应品。" +
            "<br><br>" +
            "(A) '休息' 意味着停止工作或运动以放松、恢复精力或恢复力量。" +
            "<br><br>" +
            "(B) '睡觉' 意味着每晚通常持续数小时的一种身体和精神状态，在这种状态下，神经系统相对不活跃，眼睛闭合，姿势肌肉放松，意识几乎暂停。" +
            "<br><br>" +
            "(C) '玩耍' 意味着为享受和娱乐而进行活动，而不是出于严肃或实际目的。"
    },
    {
        id: 9,
        question: "The coach decided to __________ the players who were not following the training rules, stressing the need for discipline.",
        chinese_question: "教练决定 __________ 不遵守训练规则的球员，强调纪律的必要性。",
        answers: [
            { option: "A", answer: "reward", chinese_answer: "奖励", chinese_romanization: "jiǎnglì" },
            { option: "B", answer: "chastise", chinese_answer: "责罚", chinese_romanization: "zéfá" },
            { option: "C", answer: "praise", chinese_answer: "表扬", chinese_romanization: "biǎoyáng" },
            { option: "D", answer: "commend", chinese_answer: "表扬", chinese_romanization: "biǎoyáng" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'chastise' means to rebuke or reprimand severely." +
            "<br><br>" +
            "(A) 'reward' means give something to (someone) in recognition of their services, efforts, or achievements." +
            "<br><br>" +
            "(C) 'praise' means express warm approval or admiration of." +
            "<br><br>" +
            "(D) 'commend' means express approval or praise.",
        chinese_explanation: "(B) '责罚' 一词意味着严厉地指责或训斥。" +
            "<br><br>" +
            "(A) '奖励' 意味着为了表彰某人的服务、努力或成就而给予某物。" +
            "<br><br>" +
            "(C) '表扬' 意味着表达热情的认可或钦佩。" +
            "<br><br>" +
            "(D) '表扬' 意味着表达认可或称赞。"
    },
    {
        id: 10,
        question: "The river tends to __________ through the valley, taking a winding and leisurely course.",
        chinese_question: "河流倾向于在山谷中 __________，采取蜿蜒而悠闲的路线。",
        answers: [
            { option: "A", answer: "rush", chinese_answer: "冲", chinese_romanization: "chōng" },
            { option: "B", answer: "meander", chinese_answer: "蜿蜒", chinese_romanization: "wānyán" },
            { option: "C", answer: "sprint", chinese_answer: "冲刺", chinese_romanization: "chōngcì" },
            { option: "D", answer: "leap", chinese_answer: "跳跃", chinese_romanization: "tiàoyuè" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'meander' means follow a winding course." +
            "<br><br>" +
            "(A) 'rush' means move with urgent haste." +
            "<br><br>" +
            "(C) 'sprint' means run at full speed over a short distance." +
            "<br><br>" +
            "(D) 'leap' means jump or spring a long way, to a great height, or with great force.",
        chinese_explanation: "(B) '蜿蜒' 一词意味着沿着弯曲的路线。" +
            "<br><br>" +
            "(A) '冲' 意味着急切地移动。" +
            "<br><br>" +
            "(C) '冲刺' 意味着在短距离内全速奔跑。" +
            "<br><br>" +
            "(D) '跳跃' 意味着跳或弹跳很远、很高或用很大力气。"
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
