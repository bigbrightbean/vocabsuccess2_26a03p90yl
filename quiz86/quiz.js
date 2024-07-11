// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "The coach asked the players to __________ their own performance after the match, carefully considering their strengths and areas for improvement.",
        chinese_question: "比赛结束后，教练让球员们 __________ 自己的表现，仔细考虑他们的优点和需要改进的地方。",
        answers: [
            { option: "A", answer: "evaluate", chinese_answer: "评估", chinese_romanization: "pínggū" },
            { option: "B", answer: "overlook", chinese_answer: "忽略", chinese_romanization: "hūlüè" },
            { option: "C", answer: "complete", chinese_answer: "完成", chinese_romanization: "wánchéng" },
            { option: "D", answer: "avoid", chinese_answer: "避免", chinese_romanization: "bìmiǎn" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'evaluate' means to form an idea of the amount, number, or value of; assess." +
            "<br><br>" +
            "(B) 'overlook' means to fail to notice or consider something." +
            "<br><br>" +
            "(C) 'complete' means to finish making or doing something." +
            "<br><br>" +
            "(D) 'avoid' means to keep away from or stop oneself from doing something.",
        chinese_explanation: "(A) '评估' 意味着形成对数量、数量或价值的想法；评估。" +
            "<br><br>" +
            "(B) '忽略' 意味着未能注意或考虑某事。" +
            "<br><br>" +
            "(C) '完成' 意味着完成制作或做某事。" +
            "<br><br>" +
            "(D) '避免' 意味着远离或阻止自己做某事。"
    },
    {
        id: 2,
        question: "The journalist decided to __________ the corruption allegations, determined to uncover the truth.",
        chinese_question: "记者决定 __________ 腐败指控，决心揭开真相。",
        answers: [
            { option: "A", answer: "conceal", chinese_answer: "隐藏", chinese_romanization: "yǐncáng" },
            { option: "B", answer: "investigate", chinese_answer: "调查", chinese_romanization: "diàochá" },
            { option: "C", answer: "dismiss", chinese_answer: "驳回", chinese_romanization: "bóhuí" },
            { option: "D", answer: "overlook", chinese_answer: "忽略", chinese_romanization: "hūlüè" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'investigate' means carry out a systematic or formal inquiry to discover and examine the facts of (an incident, allegation, etc.) so as to establish the truth." +
            "<br><br>" +
            "(A) 'conceal' means keep from sight; hide." +
            "<br><br>" +
            "(C) 'dismiss' means order or allow to leave; send away." +
            "<br><br>" +
            "(D) 'overlook' means fail to notice (something).",
        chinese_explanation: "(B) '调查' 意味着进行系统或正式的调查，以发现和检查事实（事件、指控等），以确定真相。" +
            "<br><br>" +
            "(A) '隐藏' 意味着不让看到；隐藏。" +
            "<br><br>" +
            "(C) '驳回' 意味着下令或允许离开；遣散。" +
            "<br><br>" +
            "(D) '忽略' 意味着未能注意（某事）。"
    },
    {
        id: 3,
        question: "His eloquent speech managed to __________ the audience to support his cause.",
        chinese_question: "他的雄辩演讲成功地__________观众支持他的事业。",
        answers: [
            { option: "A", answer: "avoid", chinese_answer: "避免", chinese_romanization: "bìmiǎn" },
            { option: "B", answer: "persuade", chinese_answer: "说服", chinese_romanization: "shuōfú" },
            { option: "C", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" },
            { option: "D", answer: "confuse", chinese_answer: "迷惑", chinese_romanization: "míhuò" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'persuade' means to cause someone to do something through reasoning or argument." +
            "<br><br>" +
            "(A) 'avoid' means to keep away from." +
            "<br><br>" +
            "(C) 'ignore' means to refuse to take notice of." +
            "<br><br>" +
            "(D) 'confuse' means to make someone bewildered or perplexed.",
        chinese_explanation: "(B) '说服'一词意味着通过推理或争论使某人做某事。" +
            "<br><br>" +
            "(A) '避免' 意味着远离。" +
            "<br><br>" +
            "(C) '忽视' 意味着拒绝注意。" +
            "<br><br>" +
            "(D) '迷惑' 意味着使某人困惑或迷惑。"
    },
    {
        id: 4,
        question: "The magician's performance was so captivating that it seemed to __________ the entire audience.",
        chinese_question: "魔术师的表演如此吸引人，似乎 __________ 了整个观众。",
        answers: [
            { option: "A", answer: "bore", chinese_answer: "使厌烦", chinese_romanization: "shǐ yànfán" },
            { option: "B", answer: "annoy", chinese_answer: "使恼怒", chinese_romanization: "shǐ nǎonù" },
            { option: "C", answer: "mesmerize", chinese_answer: "迷住", chinese_romanization: "mízhù" },
            { option: "D", answer: "irritate", chinese_answer: "刺激", chinese_romanization: "cìjī" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'mesmerize' means to capture the complete attention of (someone); to transfix." +
            "<br><br>" +
            "(A) 'bore' means to make (someone) feel weary and uninterested by tedious talk or dullness." +
            "<br><br>" +
            "(B) 'annoy' means to make (someone) a little angry; irritate." +
            "<br><br>" +
            "(D) 'irritate' means to make (someone) annoyed, impatient, or angry.",
        chinese_explanation: "(C) '迷住' 一词意味着完全吸引（某人）的注意力；使着迷。" +
            "<br><br>" +
            "(A) '使厌烦' 意味着通过乏味的谈话或无聊使（某人）感到疲倦和不感兴趣。" +
            "<br><br>" +
            "(B) '使恼怒' 意味着使（某人）有点生气；激怒。" +
            "<br><br>" +
            "(D) '刺激' 意味着使（某人）感到恼火、不耐烦或愤怒。"
    },
    {
        id: 5,
        question: "As the fragrance of blooming flowers began to __________ the garden, visitors felt a sense of tranquility.",
        chinese_question: "随着盛开花朵的香气开始 __________ 花园，游客们感到一阵宁静。",
        answers: [
            { option: "A", answer: "block", chinese_answer: "阻挡", chinese_romanization: "zǔdǎng" },
            { option: "B", answer: "isolate", chinese_answer: "隔离", chinese_romanization: "gélí" },
            { option: "C", answer: "escape", chinese_answer: "逃逸", chinese_romanization: "táoyì" },
            { option: "D", answer: "permeate", chinese_answer: "渗透", chinese_romanization: "shèntòu" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'permeate' means to spread throughout (something); pervade." +
            "<br><br>" +
            "(A) 'block' means to make the movement or flow in (a passage, pipe, road, etc.) difficult or impossible." +
            "<br><br>" +
            "(B) 'isolate' means to cause (a person or place) to be or remain alone or apart from others." +
            "<br><br>" +
            "(C) 'escape' means to break free from confinement or control.",
        chinese_explanation: "(D) '渗透' 一词意味着遍布（某物）；弥漫。" +
            "<br><br>" +
            "(A) '阻挡' 意味着使（通道、管道、道路等）中的运动或流动变得困难或不可能。" +
            "<br><br>" +
            "(B) '隔离' 意味着使（人或地方）独处或与他人分开。" +
            "<br><br>" +
            "(C) '逃逸' 意味着摆脱限制或控制。"
    },
    {
        id: 6,
        question: "After fasting all day, he sat down to __________ his meal with great enthusiasm.",
        chinese_question: "禁食了一整天后，他坐下来 __________ 他的一顿饭，热情极高。",
        answers: [
            { option: "A", answer: "nibble", chinese_answer: "啃", chinese_romanization: "kěn" },
            { option: "B", answer: "devour", chinese_answer: "吞食", chinese_romanization: "tūnshí" },
            { option: "C", answer: "skip", chinese_answer: "跳过", chinese_romanization: "tiàoguò" },
            { option: "D", answer: "prepare", chinese_answer: "准备", chinese_romanization: "zhǔnbèi" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'devour' means to eat (food or prey) hungrily or quickly." +
            "<br><br>" +
            "(A) 'nibble' means to take small bites out of." +
            "<br><br>" +
            "(C) 'skip' means to omit or leave out." +
            "<br><br>" +
            "(D) 'prepare' means to make (something) ready for use or consideration.",
        chinese_explanation: "(B) '吞食' 一词意味着饥饿或快速地吃（食物或猎物）。" +
            "<br><br>" +
            "(A) '啃' 意味着小口小口地咬。" +
            "<br><br>" +
            "(C) '跳过' 意味着省略或遗漏。" +
            "<br><br>" +
            "(D) '准备' 意味着使（某物）准备好使用或考虑。"
    },
    {
        id: 7,
        question: "Even in the dark, he could __________ the faint outline of the mountains against the night sky.",
        chinese_question: "即使在黑暗中，他也能 __________ 到夜空下山脉的微弱轮廓。",
        answers: [
            { option: "A", answer: "miss", chinese_answer: "错过", chinese_romanization: "cuòguò" },
            { option: "B", answer: "overlook", chinese_answer: "漏看", chinese_romanization: "lòu kàn" },
            { option: "C", answer: "forget", chinese_answer: "忘记", chinese_romanization: "wàngjì" },
            { option: "D", answer: "perceive", chinese_answer: "感知", chinese_romanization: "gǎnzhī" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'perceive' means become aware or conscious of (something); come to realize or understand." +
            "<br><br>" +
            "(A) 'miss' means fail to notice, hear, or understand." +
            "<br><br>" +
            "(B) 'overlook' means fail to notice (something)." +
            "<br><br>" +
            "(C) 'forget' means fail to remember.",
        chinese_explanation: "(D) '感知' 一词意味着变得意识到或理解（某事）；意识到或理解。" +
            "<br><br>" +
            "(A) '错过' 意味着未能注意到、听到或理解。" +
            "<br><br>" +
            "(B) '漏看' 意味着未能注意到（某事）。" +
            "<br><br>" +
            "(C) '忘记' 意味着未能记住。"
    },
    {
        id: 8,
        question: "The bully tried to __________ the smaller kids into giving him their lunch money.",
        chinese_question: "那个恶霸试图 __________ 年龄较小的孩子，让他们把午餐钱给他。",
        answers: [
            { option: "A", answer: "encourage", chinese_answer: "鼓励", chinese_romanization: "gǔlì" },
            { option: "B", answer: "browbeat", chinese_answer: "恐吓", chinese_romanization: "kǒnghè" },
            { option: "C", answer: "assist", chinese_answer: "帮助", chinese_romanization: "bāngzhù" },
            { option: "D", answer: "support", chinese_answer: "支持", chinese_romanization: "zhīchí" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'browbeat' means intimidate (someone), typically into doing something, with stern or abusive words." +
            "<br><br>" +
            "(A) 'encourage' means give support, confidence, or hope to (someone)." +
            "<br><br>" +
            "(C) 'assist' means help (someone), typically by doing a share of the work." +
            "<br><br>" +
            "(D) 'support' means bear all or part of the weight of; hold up.",
        chinese_explanation: "(B) '恐吓' 一词意味着用严厉或辱骂的言辞威胁（某人），通常是为了让他们做某事。" +
            "<br><br>" +
            "(A) '鼓励' 意味着给予（某人）支持、信心或希望。" +
            "<br><br>" +
            "(C) '帮助' 意味着帮助（某人），通常是通过分担工作。" +
            "<br><br>" +
            "(D) '支持' 意味着承担全部或部分重量；支撑。"
    },
    {
        id: 9,
        question: "A weekend at the spa helped to __________ her spirits, leaving her feeling refreshed and energized.",
        chinese_question: "在水疗中心度过的周末帮助她 __________ 了精神，使她感到焕然一新和充满活力。",
        answers: [
            { option: "A", answer: "exhaust", chinese_answer: "使筋疲力尽", chinese_romanization: "shǐ jīnpílìjìn" },
            { option: "B", answer: "deplete", chinese_answer: "耗尽", chinese_romanization: "hàojìn" },
            { option: "C", answer: "drain", chinese_answer: "排干", chinese_romanization: "páigān" },
            { option: "D", answer: "rejuvenate", chinese_answer: "使恢复活力", chinese_romanization: "shǐ huīfù huólì" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'rejuvenate' means make (someone or something) look or feel younger, fresher, or more lively." +
            "<br><br>" +
            "(A) 'exhaust' means drain (someone) of their physical or mental resources; tire out." +
            "<br><br>" +
            "(B) 'deplete' means use up the supply or resources of." +
            "<br><br>" +
            "(C) 'drain' means cause the water or other liquid in (something) to run out, leaving it empty, dry, or drier.",
        chinese_explanation: "(D) '使恢复活力' 一词意味着使（某人或某物）看起来或感觉更年轻、更清新或更有活力。" +
            "<br><br>" +
            "(A) '使筋疲力尽' 意味着消耗（某人的）体力或精神资源；使疲惫。" +
            "<br><br>" +
            "(B) '耗尽' 意味着用尽供应或资源。" +
            "<br><br>" +
            "(C) '排干' 意味着使（水或其他液体）流出，使其空、干或更干。"
    },
    {
        id: 10,
        question: "Young children are particularly __________ to colds and other common illnesses during the winter months.",
        chinese_question: "在冬季，幼儿特别 __________ 感冒和其他常见疾病。",
        answers: [
            { option: "A", answer: "resistant", chinese_answer: "抵抗的", chinese_romanization: "dǐkàng de" },
            { option: "B", answer: "immune", chinese_answer: "免疫的", chinese_romanization: "miǎnyì de" },
            { option: "C", answer: "susceptible", chinese_answer: "易受影响的", chinese_romanization: "yì shòu yǐngxiǎng de" },
            { option: "D", answer: "protected", chinese_answer: "受保护的", chinese_romanization: "shòu bǎohù de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'susceptible' means likely or liable to be influenced or harmed by a particular thing." +
            "<br><br>" +
            "(A) 'resistant' means able to withstand the action or effect of something." +
            "<br><br>" +
            "(B) 'immune' means resistant to a particular infection or toxin owing to the presence of specific antibodies or sensitized white blood cells." +
            "<br><br>" +
            "(D) 'protected' means kept safe from harm or injury.",
        chinese_explanation: "(C) '易受影响的' 一词意味着容易或可能受到某事物的影响或伤害。" +
            "<br><br>" +
            "(A) '抵抗的' 意味着能够承受某物的作用或影响。" +
            "<br><br>" +
            "(B) '免疫的' 意味着由于存在特定抗体或致敏白细胞而对某种感染或毒素有抵抗力。" +
            "<br><br>" +
            "(D) '受保护的' 意味着免受伤害或损害的保护。"
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
