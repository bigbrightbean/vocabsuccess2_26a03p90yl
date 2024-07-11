// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "He had to __________ his position as CEO due to health issues, handing over control to his successor.",
        chinese_question: "由于健康问题，他不得不 __________ CEO 的职位，将控制权移交给继任者。",
        answers: [
            { option: "A", answer: "retain", chinese_answer: "保留", chinese_romanization: "bǎoliú" },
            { option: "B", answer: "acquire", chinese_answer: "获得", chinese_romanization: "huòdé" },
            { option: "C", answer: "relinquish", chinese_answer: "放弃", chinese_romanization: "fàngqì" },
            { option: "D", answer: "seize", chinese_answer: "抓住", chinese_romanization: "zhuāzhù" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'relinquish' means voluntarily cease to keep or claim; give up." +
            "<br><br>" +
            "(A) 'retain' means continue to have (something); keep possession of." +
            "<br><br>" +
            "(B) 'acquire' means buy or obtain (an asset or object) for oneself." +
            "<br><br>" +
            "(D) 'seize' means take hold of suddenly and forcibly.",
        chinese_explanation: "(C) '放弃' 一词意味着自愿停止保留或要求；放弃。" +
            "<br><br>" +
            "(A) '保留' 意味着继续拥有（某物）；保留。" +
            "<br><br>" +
            "(B) '获得' 意味着为自己购买或获得（资产或物品）。" +
            "<br><br>" +
            "(D) '抓住' 意味着突然并强行抓住。"
    },
    {
        id: 2,
        question: "The flight instructor used a simulator to __________ different emergency scenarios for the trainees.",
        chinese_question: "飞行教练使用模拟器 __________ 不同的紧急情况让学员进行训练。",
        answers: [
            { option: "A", answer: "disregard", chinese_answer: "无视", chinese_romanization: "wúshì" },
            { option: "B", answer: "simulate", chinese_answer: "模拟", chinese_romanization: "mónǐ" },
            { option: "C", answer: "overlook", chinese_answer: "忽视", chinese_romanization: "hūshì" },
            { option: "D", answer: "neglect", chinese_answer: "忽略", chinese_romanization: "hūlüè" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'simulate' means imitate the appearance or character of." +
            "<br><br>" +
            "(A) 'disregard' means pay no attention to; ignore." +
            "<br><br>" +
            "(C) 'overlook' means fail to notice (something)." +
            "<br><br>" +
            "(D) 'neglect' means fail to care for properly.",
        chinese_explanation: "(B) '模拟' 一词意味着模仿...的外观或特征。" +
            "<br><br>" +
            "(A) '无视' 意味着不注意；忽视。" +
            "<br><br>" +
            "(C) '忽视' 意味着未能注意到（某事）。" +
            "<br><br>" +
            "(D) '忽略' 意味着未能适当照顾。"
    },
    {
        id: 3,
        question: "He regretted __________ his inheritance on frivolous purchases and unnecessary expenses.",
        chinese_question: "他后悔将遗产 __________ 在无谓的购买和不必要的开支上。",
        answers: [
            { option: "A", answer: "saving", chinese_answer: "储蓄", chinese_romanization: "chǔxù" },
            { option: "B", answer: "investing", chinese_answer: "投资", chinese_romanization: "tóuzī" },
            { option: "C", answer: "squandering", chinese_answer: "浪费", chinese_romanization: "làngfèi" },
            { option: "D", answer: "preserving", chinese_answer: "保存", chinese_romanization: "bǎocún" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'squandering' means waste (something, especially money or time) in a reckless and foolish manner." +
            "<br><br>" +
            "(A) 'saving' means keeping and storing up (something, especially money) for future use." +
            "<br><br>" +
            "(B) 'investing' means putting (money) into financial schemes, shares, property, or a commercial venture with the expectation of achieving a profit." +
            "<br><br>" +
            "(D) 'preserving' means maintaining (something) in its original or existing state.",
        chinese_explanation: "(C) '浪费' 一词意味着以鲁莽和愚蠢的方式浪费（某物，尤指金钱或时间）。" +
            "<br><br>" +
            "(A) '储蓄' 意味着为将来使用而保存和储存（某物，尤指金钱）。" +
            "<br><br>" +
            "(B) '投资' 意味着将（金钱）投入金融计划、股票、房地产或商业冒险中，期望获得利润。" +
            "<br><br>" +
            "(D) '保存' 意味着保持（某物）的原始或现有状态。"
    },
    {
        id: 4,
        question: "After a long battle with the illness, he finally __________ to it.",
        chinese_question: "经过与疾病的长期斗争，他终于 __________ 了。",
        answers: [
            { option: "A", answer: "conquered", chinese_answer: "征服", chinese_romanization: "zhēngfú" },
            { option: "B", answer: "avoided", chinese_answer: "避免", chinese_romanization: "bìmiǎn" },
            { option: "C", answer: "overcame", chinese_answer: "克服", chinese_romanization: "kèfú" },
            { option: "D", answer: "succumbed", chinese_answer: "屈服", chinese_romanization: "qūfú" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'succumbed' means fail to resist (pressure, temptation, or some other negative force)." +
            "<br><br>" +
            "(A) 'conquered' means successfully overcome (a problem or weakness)." +
            "<br><br>" +
            "(B) 'avoided' means keep away from or stop oneself from doing (something)." +
            "<br><br>" +
            "(C) 'overcame' means succeed in dealing with (a problem or difficulty).",
        chinese_explanation: "(D) '屈服' 一词意味着未能抵抗（压力、诱惑或其他负面力量）。" +
            "<br><br>" +
            "(A) '征服' 意味着成功地克服（一个问题或弱点）。" +
            "<br><br>" +
            "(B) '避免' 意味着远离或阻止自己做（某事）。" +
            "<br><br>" +
            "(C) '克服' 意味着成功地应对（一个问题或困难）。"
    },
    {
        id: 5,
        question: "To __________ the patient's pain, the doctor prescribed a strong painkiller.",
        chinese_question: "为了 __________ 病人的疼痛，医生开了一种强效止痛药。",
        answers: [
            { option: "A", answer: "worsen", chinese_answer: "加重", chinese_romanization: "jiāzhòng" },
            { option: "B", answer: "intensify", chinese_answer: "加剧", chinese_romanization: "jiājù" },
            { option: "C", answer: "alleviate", chinese_answer: "缓解", chinese_romanization: "huǎnjiě" },
            { option: "D", answer: "aggravate", chinese_answer: "恶化", chinese_romanization: "èhuà" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'alleviate' means make (suffering, deficiency, or a problem) less severe." +
            "<br><br>" +
            "(A) 'worsen' means make or become worse." +
            "<br><br>" +
            "(B) 'intensify' means become or make more intense." +
            "<br><br>" +
            "(D) 'aggravate' means make (a problem, injury, or offense) worse or more serious.",
        chinese_explanation: "(C) '缓解' 一词意味着使（痛苦、缺陷或问题）减轻。" +
            "<br><br>" +
            "(A) '加重' 意味着使变得更糟。" +
            "<br><br>" +
            "(B) '加剧' 意味着变得更加严重或使变得更加严重。" +
            "<br><br>" +
            "(D) '恶化' 意味着使（问题、伤害或罪行）变得更严重或更严重。"
    },
    {
        id: 6,
        question: "The funhouse mirrors __________ the reflections, making people look funny and misshapen.",
        chinese_question: "游乐场的哈哈镜 __________ 了人们的倒影，使人看起来滑稽且畸形。",
        answers: [
            { option: "A", answer: "clarifies", chinese_answer: "澄清", chinese_romanization: "chéngqīng" },
            { option: "B", answer: "distorts", chinese_answer: "扭曲", chinese_romanization: "niǔqū" },
            { option: "C", answer: "focuses", chinese_answer: "聚焦", chinese_romanization: "jùjiāo" },
            { option: "D", answer: "enhances", chinese_answer: "增强", chinese_romanization: "zēngqiáng" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'distorts' means pull or twist out of shape." +
            "<br><br>" +
            "(A) 'clarifies' means make (a statement or situation) less confused and more clearly comprehensible." +
            "<br><br>" +
            "(C) 'focuses' means the center of interest or activity." +
            "<br><br>" +
            "(D) 'enhances' means intensify, increase, or further improve the quality, value, or extent of.",
        chinese_explanation: "(B) '扭曲' 一词意味着拉或扭出形状。" +
            "<br><br>" +
            "(A) '澄清' 意味着使（陈述或情况）不再困惑并更清晰地理解。" +
            "<br><br>" +
            "(C) '聚焦' 意味着兴趣或活动的中心。" +
            "<br><br>" +
            "(D) '增强' 意味着加强、增加或进一步提高质量、价值或范围。"
    },
    {
        id: 7,
        question: "His tone seemed to __________ that he was not happy with the decision.",
        chinese_question: "他的语气似乎 __________ 他对这个决定不满意。",
        answers: [
            { option: "A", answer: "state", chinese_answer: "陈述", chinese_romanization: "chénshù" },
            { option: "B", answer: "declare", chinese_answer: "声明", chinese_romanization: "shēngmíng" },
            { option: "C", answer: "explain", chinese_answer: "解释", chinese_romanization: "jiěshì" },
            { option: "D", answer: "imply", chinese_answer: "暗示", chinese_romanization: "ànshì" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'imply' means strongly suggest the truth or existence of (something not expressly stated)." +
            "<br><br>" +
            "(A) 'state' means express something definitely or clearly in speech or writing." +
            "<br><br>" +
            "(B) 'declare' means say something in a solemn and emphatic manner." +
            "<br><br>" +
            "(C) 'explain' means make (an idea, situation, or problem) clear to someone by describing it in more detail or revealing relevant facts or ideas.",
        chinese_explanation: "(D) '暗示' 一词意味着强烈暗示（未明确说明的事物）的真实性或存在。" +
            "<br><br>" +
            "(A) '陈述' 意味着明确或清楚地表达某事。" +
            "<br><br>" +
            "(B) '声明' 意味着以庄严和强调的方式说某事。" +
            "<br><br>" +
            "(C) '解释' 意味着通过详细描述或揭示相关事实或想法使某人理解某个想法、情况或问题。"
    },
    {
        id: 8,
        question: "Her constant lateness began to __________ her boss, who valued punctuality above all.",
        chinese_question: "她的不断迟到开始 __________ 她的老板，老板最看重准时。",
        answers: [
            { option: "A", answer: "please", chinese_answer: "取悦", chinese_romanization: "qǔyuè" },
            { option: "B", answer: "calm", chinese_answer: "平静", chinese_romanization: "píngjìng" },
            { option: "C", answer: "infuriate", chinese_answer: "激怒", chinese_romanization: "jīnù" },
            { option: "D", answer: "pacify", chinese_answer: "安抚", chinese_romanization: "ānfǔ" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'infuriate' means make (someone) extremely angry and impatient." +
            "<br><br>" +
            "(A) 'please' means cause to feel happy and satisfied." +
            "<br><br>" +
            "(B) 'calm' means make (someone) tranquil and quiet; soothe." +
            "<br><br>" +
            "(D) 'pacify' means quell the anger, agitation, or excitement of.",
        chinese_explanation: "(C) '激怒' 一词意味着使（某人）极度愤怒和不耐烦。" +
            "<br><br>" +
            "(A) '取悦' 意味着使感到高兴和满意。" +
            "<br><br>" +
            "(B) '平静' 意味着使（某人）安静和安静；安抚。" +
            "<br><br>" +
            "(D) '安抚' 意味着平息愤怒、激动或兴奋。"
    },
    {
        id: 9,
        question: "After several months of surveillance, the police were finally able to __________ the notorious criminal.",
        chinese_question: "经过几个月的监视，警方终于能够 __________ 那个臭名昭著的罪犯。",
        answers: [
            { option: "A", answer: "release", chinese_answer: "释放", chinese_romanization: "shìfàng" },
            { option: "B", answer: "apprehend", chinese_answer: "逮捕", chinese_romanization: "dàibǔ" },
            { option: "C", answer: "free", chinese_answer: "释放", chinese_romanization: "shìfàng" },
            { option: "D", answer: "mislead", chinese_answer: "误导", chinese_romanization: "wùdǎo" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'apprehend' means arrest (someone) for a crime." +
            "<br><br>" +
            "(A) 'release' means allow or enable to escape from confinement; set free." +
            "<br><br>" +
            "(C) 'free' means release from captivity, confinement, or slavery." +
            "<br><br>" +
            "(D) 'mislead' means cause (someone) to have a wrong idea or impression about someone or something.",
        chinese_explanation: "(B) '逮捕' 一词意味着因犯罪而逮捕（某人）。" +
            "<br><br>" +
            "(A) '释放' 意味着允许或使逃离禁闭；释放。" +
            "<br><br>" +
            "(C) '释放' 意味着从囚禁、监禁或奴役中释放。" +
            "<br><br>" +
            "(D) '误导' 意味着使（某人）对某人或某事有错误的想法或印象。"
    },
    {
        id: 10,
        question: "His rude comments only __________ the tense atmosphere in the room.",
        chinese_question: "他的粗鲁言论只会 __________ 房间内紧张的气氛。",
        answers: [
            { option: "A", answer: "exacerbated", chinese_answer: "加剧", chinese_romanization: "jiājù" },
            { option: "B", answer: "alleviated", chinese_answer: "缓解", chinese_romanization: "huǎnjiě" },
            { option: "C", answer: "improved", chinese_answer: "改善", chinese_romanization: "gǎishàn" },
            { option: "D", answer: "soothed", chinese_answer: "抚慰", chinese_romanization: "fǔwèi" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'exacerbated' means make (a problem, bad situation, or negative feeling) worse." +
            "<br><br>" +
            "(B) 'alleviated' means make (suffering, deficiency, or a problem) less severe." +
            "<br><br>" +
            "(C) 'improved' means make or become better." +
            "<br><br>" +
            "(D) 'soothed' means gently calm (a person or their feelings).",
        chinese_explanation: "(A) '加剧' 一词意味着使（问题、糟糕的情况或负面情绪）变得更糟。" +
            "<br><br>" +
            "(B) '缓解' 意味着使（痛苦、缺陷或问题）减轻。" +
            "<br><br>" +
            "(C) '改善' 意味着使变得更好或变得更好。" +
            "<br><br>" +
            "(D) '抚慰' 意味着温和地安抚（人或他们的情绪）。"
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
