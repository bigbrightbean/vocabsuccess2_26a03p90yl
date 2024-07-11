// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "Her __________ skills were evident as she excelled in multiple areas such as painting, cooking, and playing musical instruments.",
        chinese_question: "她的 __________ 技能显而易见，因为她在绘画、烹饪和演奏乐器等多个领域都表现出色。",
        answers: [
            { option: "A", answer: "limited", chinese_answer: "有限的", chinese_romanization: "yǒuxiàn de" },
            { option: "B", answer: "specialized", chinese_answer: "专业的", chinese_romanization: "zhuānyè de" },
            { option: "C", answer: "narrow", chinese_answer: "狭窄的", chinese_romanization: "xiázhǎi de" },
            { option: "D", answer: "versatile", chinese_answer: "多才多艺的", chinese_romanization: "duōcáiduōyì de" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'versatile' means able to adapt or be adapted to many different functions or activities." +
            "<br><br>" +
            "(A) 'limited' means restricted in size, amount, or extent." +
            "<br><br>" +
            "(B) 'specialized' means requiring or involving detailed and specific knowledge or training." +
            "<br><br>" +
            "(C) 'narrow' means limited in extent, amount, or scope.",
        chinese_explanation: "(D) '多才多艺的' 意味着能够适应或被适应于许多不同的功能或活动。" +
            "<br><br>" +
            "(A) '有限的' 意味着在大小、数量或范围上受到限制。" +
            "<br><br>" +
            "(B) '专业的' 意味着需要或涉及详细和具体的知识或培训。" +
            "<br><br>" +
            "(C) '狭窄的' 意味着在程度、数量或范围上有限。"
    },
    {
        id: 2,
        question: "His speech was __________ due to his nervousness, making it difficult to understand.",
        chinese_question: "由于紧张，他的讲话 __________，很难理解。",
        answers: [
            { option: "A", answer: "clear", chinese_answer: "清楚的", chinese_romanization: "qīngchǔ de" },
            { option: "B", answer: "fluent", chinese_answer: "流利的", chinese_romanization: "liúlì de" },
            { option: "C", answer: "incoherent", chinese_answer: "不连贯的", chinese_romanization: "bù liánguàn de" },
            { option: "D", answer: "articulate", chinese_answer: "表达清晰的", chinese_romanization: "biǎodá qīngxī de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'incoherent' means (of spoken or written language) expressed in an incomprehensible or confusing way; unclear." +
            "<br><br>" +
            "(A) 'clear' means easy to perceive, understand, or interpret." +
            "<br><br>" +
            "(B) 'fluent' means able to express oneself easily and articulately." +
            "<br><br>" +
            "(D) 'articulate' means having or showing the ability to speak fluently and coherently.",
        chinese_explanation: "(C) '不连贯的' 一词意味着（口头或书面语言）以难以理解或困惑的方式表达；不清楚。" +
            "<br><br>" +
            "(A) '清楚的' 意味着容易理解或解释。" +
            "<br><br>" +
            "(B) '流利的' 意味着能够轻松和清楚地表达自己。" +
            "<br><br>" +
            "(D) '表达清晰的' 意味着具有或表现出流利和连贯地说话的能力。"
    },
    {
        id: 3,
        question: "Her __________ spending on unnecessary luxury items quickly depleted her savings, leaving her in debt.",
        chinese_question: "她对不必要的奢侈品的 __________ 消费很快耗尽了她的积蓄，使她负债累累。",
        answers: [
            { option: "A", answer: "prudent", chinese_answer: "谨慎的", chinese_romanization: "jǐnshèn de" },
            { option: "B", answer: "frivolous", chinese_answer: "轻浮的", chinese_romanization: "qīngfú de" },
            { option: "C", answer: "necessary", chinese_answer: "必要的", chinese_romanization: "bìyào de" },
            { option: "D", answer: "essential", chinese_answer: "必需的", chinese_romanization: "bìxū de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'frivolous' means not having any serious purpose or value." +
            "<br><br>" +
            "(A) 'prudent' means acting with or showing care and thought for the future." +
            "<br><br>" +
            "(C) 'necessary' means required to be done, achieved, or present; needed." +
            "<br><br>" +
            "(D) 'essential' means absolutely necessary; extremely important.",
        chinese_explanation: "(B) '轻浮的' 一词意味着没有任何严肃的目的或价值的。" +
            "<br><br>" +
            "(A) '谨慎的' 意味着小心和考虑未来的行动。" +
            "<br><br>" +
            "(C) '必要的' 意味着需要完成、实现或存在的；需要的。" +
            "<br><br>" +
            "(D) '必需的' 意味着绝对必要的；极其重要的。"
    },
    {
        id: 4,
        question: "The city was __________ for its high crime rate, which deterred many potential tourists from visiting.",
        chinese_question: "这座城市因其高犯罪率而 __________，使许多潜在游客望而却步。",
        answers: [
            { option: "A", answer: "famous", chinese_answer: "著名的", chinese_romanization: "zhùmíng de" },
            { option: "B", answer: "reputable", chinese_answer: "声誉好的", chinese_romanization: "shēngyù hǎo de" },
            { option: "C", answer: "notorious", chinese_answer: "声名狼藉的", chinese_romanization: "shēngmíng lángjí de" },
            { option: "D", answer: "unknown", chinese_answer: "未知的", chinese_romanization: "wèizhī de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'notorious' means famous or well known, typically for some bad quality or deed." +
            "<br><br>" +
            "(A) 'famous' means known about by many people." +
            "<br><br>" +
            "(B) 'reputable' means having a good reputation." +
            "<br><br>" +
            "(D) 'unknown' means not known or familiar.",
        chinese_explanation: "(C) '声名狼藉的' 意味着因某种不好的品质或行为而著名或广为人知的。" +
            "<br><br>" +
            "(A) '著名的' 意味着被许多人知道的。" +
            "<br><br>" +
            "(B) '声誉好的' 意味着有良好声誉的。" +
            "<br><br>" +
            "(D) '未知的' 意味着不为人知的或不熟悉的。"
    },
    {
        id: 5,
        question: "The workers stood __________ during the power outage, unable to continue their tasks until electricity was restored.",
        chinese_question: "停电期间，工人们 __________ 地站着，直到电力恢复才能继续他们的任务。",
        answers: [
            { option: "A", answer: "idle", chinese_answer: "闲置的", chinese_romanization: "xiánzhì de" },
            { option: "B", answer: "busy", chinese_answer: "忙碌的", chinese_romanization: "mánglù de" },
            { option: "C", answer: "active", chinese_answer: "活跃的", chinese_romanization: "huóyuè de" },
            { option: "D", answer: "productive", chinese_answer: "高效的", chinese_romanization: "gāoxiào de" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'idle' means not active or in use; without purpose or effect; pointless." +
            "<br><br>" +
            "(B) 'busy' means having a great deal to do." +
            "<br><br>" +
            "(C) 'active' means engaging or ready to engage in physically energetic pursuits." +
            "<br><br>" +
            "(D) 'productive' means producing or able to produce large amounts of goods, crops, or other commodities.",
        chinese_explanation: "(A) '闲置的' 意味着不活动或不使用的；没有目的或效果的；无意义的。" +
            "<br><br>" +
            "(B) '忙碌的' 意味着有很多事情要做的。" +
            "<br><br>" +
            "(C) '活跃的' 意味着从事或准备从事体力活动的。" +
            "<br><br>" +
            "(D) '高效的' 意味着生产或能够生产大量商品、农作物或其他商品的。"
    },
    {
        id: 6,
        question: "The __________ woman often helped her neighbors with their groceries and always had a warm smile.",
        chinese_question: "这位 __________ 的女士经常帮助邻居提购物，总是带着温暖的微笑。",
        answers: [
            { option: "A", answer: "cruel", chinese_answer: "残忍", chinese_romanization: "cánrěn" },
            { option: "B", answer: "harsh", chinese_answer: "严厉", chinese_romanization: "yánlì" },
            { option: "C", answer: "kindhearted", chinese_answer: "善良", chinese_romanization: "shànliáng" },
            { option: "D", answer: "mean", chinese_answer: "刻薄", chinese_romanization: "kèbó" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'kindhearted' means having a kind and sympathetic nature." +
            "<br><br>" +
            "(A) 'cruel' means willfully causing pain or suffering to others, or feeling no concern about it." +
            "<br><br>" +
            "(B) 'harsh' means unpleasantly rough or jarring to the senses." +
            "<br><br>" +
            "(D) 'mean' means unkind, spiteful, or unfair.",
        chinese_explanation: "(C) '善良' 意味着具有善良和同情心的性格。" +
            "<br><br>" +
            "(A) '残忍' 意味着故意造成他人痛苦或苦难，或对此毫不关心。" +
            "<br><br>" +
            "(B) '严厉' 意味着对感官不愉快地粗糙或刺耳。" +
            "<br><br>" +
            "(D) '刻薄' 意味着不友善、恶毒或不公平。"
    },
    {
        id: 7,
        question: "The clear skies and mild weather made it an __________ day for a picnic in the park.",
        chinese_question: "晴朗的天空和温和的天气使今天成为在公园野餐的 __________ 日子。",
        answers: [
            { option: "A", answer: "unlucky", chinese_answer: "不幸", chinese_romanization: "bùxìng" },
            { option: "B", answer: "gloomy", chinese_answer: "阴沉", chinese_romanization: "yīnchén" },
            { option: "C", answer: "auspicious", chinese_answer: "吉利", chinese_romanization: "jílì" },
            { option: "D", answer: "unfavorable", chinese_answer: "不利", chinese_romanization: "bùlì" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'auspicious' means conducive to success; favorable." +
            "<br><br>" +
            "(A) 'unlucky' means having, bringing, or resulting from bad luck." +
            "<br><br>" +
            "(B) 'gloomy' means dark or poorly lit, especially so as to appear depressing or frightening." +
            "<br><br>" +
            "(D) 'unfavorable' means expressing or showing a lack of approval or support.",
        chinese_explanation: "(C) '吉利' 一词意味着有助于成功；有利的。" +
            "<br><br>" +
            "(A) '不幸' 意味着有、带来或导致厄运。" +
            "<br><br>" +
            "(B) '阴沉' 意味着黑暗或照明不足，特别是显得压抑或令人害怕。" +
            "<br><br>" +
            "(D) '不利' 意味着表示或显示不赞成或不支持。"
    },
    {
        id: 8,
        question: "The garden provided __________ space for the children to run and play freely.",
        chinese_question: "花园提供了 __________ 的空间让孩子们自由奔跑和玩耍。",
        answers: [
            { option: "A", answer: "limited", chinese_answer: "有限的", chinese_romanization: "yǒuxiàn de" },
            { option: "B", answer: "cramped", chinese_answer: "狭窄的", chinese_romanization: "xiázhǎi de" },
            { option: "C", answer: "ample", chinese_answer: "充足的", chinese_romanization: "chōngzú de" },
            { option: "D", answer: "narrow", chinese_answer: "狭长的", chinese_romanization: "xiácháng de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'ample' means enough or more than enough; plentiful." +
            "<br><br>" +
            "(A) 'limited' means restricted in size, amount, or extent." +
            "<br><br>" +
            "(B) 'cramped' means feeling or causing someone to feel uncomfortably confined or hemmed in." +
            "<br><br>" +
            "(D) 'narrow' means of small width in relation to length.",
        chinese_explanation: "(C) '充足的' 一词意味着足够或超过足够的；丰富的。" +
            "<br><br>" +
            "(A) '有限的' 意味着大小、数量或程度受到限制的。" +
            "<br><br>" +
            "(B) '狭窄的' 意味着感觉或使某人感到不舒服的局促或受限的。" +
            "<br><br>" +
            "(D) '狭长的' 意味着相对于长度来说宽度很小的。"
    },
    {
        id: 9,
        question: "Her silence during the meeting suggested that something was __________ with the proposed plan.",
        chinese_question: "她在会议上的沉默表明提议的计划有些__________。",
        answers: [
            { option: "A", answer: "right", chinese_answer: "正确的", chinese_romanization: "zhèngquè de" },
            { option: "B", answer: "amiss", chinese_answer: "不对劲的", chinese_romanization: "bù duì jìn de" },
            { option: "C", answer: "perfect", chinese_answer: "完美的", chinese_romanization: "wánměi de" },
            { option: "D", answer: "expected", chinese_answer: "预料中的", chinese_romanization: "yùliào zhōng de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'amiss' means not quite right; inappropriate or out of place. Figuratively, it can mean that something is wrong or off in a situation." +
            "<br><br>" +
            "(A) 'right' means morally good, justified, or acceptable." +
            "<br><br>" +
            "(C) 'perfect' means having all the required or desirable elements, qualities, or characteristics; as good as it is possible to be." +
            "<br><br>" +
            "(D) 'expected' means regarded as likely to happen.",
        chinese_explanation: "(B) '不对劲的'一词意味着不完全正确的；不合适的或不合时宜的。比喻地，它可以表示在某种情况下有些不对或不妥。" +
            "<br><br>" +
            "(A) '正确的' 意味着道德上好的、合理的或可接受的。" +
            "<br><br>" +
            "(C) '完美的' 意味着拥有所有所需或理想的元素、品质或特征；尽可能好的。" +
            "<br><br>" +
            "(D) '预料中的' 意味着被认为可能会发生的。"
    },
    {
        id: 10,
        question: "The king hired a __________ army to protect his kingdom from invaders.",
        chinese_question: "国王雇佣了一支 __________ 军队来保护他的王国免受入侵者的侵害。",
        answers: [
            { option: "A", answer: "mercenary", chinese_answer: "雇佣的", chinese_romanization: "gùyōng de" },
            { option: "B", answer: "loyal", chinese_answer: "忠诚的", chinese_romanization: "zhōngchéng de" },
            { option: "C", answer: "voluntary", chinese_answer: "自愿的", chinese_romanization: "zìyuàn de" },
            { option: "D", answer: "patriotic", chinese_answer: "爱国的", chinese_romanization: "àiguó de" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'mercenary' means (of a person or their behavior) primarily concerned with making money at the expense of ethics." +
            "<br><br>" +
            "(B) 'loyal' means giving or showing firm and constant support or allegiance to a person or institution." +
            "<br><br>" +
            "(C) 'voluntary' means done, given, or acting of one's own free will." +
            "<br><br>" +
            "(D) 'patriotic' means having or expressing devotion to and vigorous support for one's country.",
        chinese_explanation: "(A) '雇佣的' 意味着（某人或其行为）主要关心赚钱而不顾道德。" +
            "<br><br>" +
            "(B) '忠诚的' 意味着给予或表现出对某人或机构的坚定和持续的支持或效忠。" +
            "<br><br>" +
            "(C) '自愿的' 意味着出于自愿的；自愿的。" +
            "<br><br>" +
            "(D) '爱国的' 意味着具有或表现出对国家的忠诚和热情的支持。"
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
