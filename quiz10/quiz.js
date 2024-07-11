// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "His __________ remarks made everyone in the room feel belittled and unappreciated.",
        chinese_question: "他的 __________ 言论让房间里的每个人都感到被轻视和不被重视。",
        answers: [
            { option: "A", answer: "supportive", chinese_answer: "支持", chinese_romanization: "zhīchí" },
            { option: "B", answer: "humble", chinese_answer: "谦逊", chinese_romanization: "qiānxùn" },
            { option: "C", answer: "condescending", chinese_answer: "高傲", chinese_romanization: "gāo'ào" },
            { option: "D", answer: "respectful", chinese_answer: "尊重", chinese_romanization: "zūnzhòng" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'condescending' means having or showing a feeling of patronizing superiority." +
            "<br><br>" +
            "(A) 'supportive' means providing encouragement or emotional help." +
            "<br><br>" +
            "(B) 'humble' means having or showing a modest or low estimate of one's own importance." +
            "<br><br>" +
            "(D) 'respectful' means feeling or showing deference and respect.",
        chinese_explanation: "(C) '高傲' 意味着有或表现出一种居高临下的优越感。" +
            "<br><br>" +
            "(A) '支持' 意味着提供鼓励或情感帮助。" +
            "<br><br>" +
            "(B) '谦逊' 意味着对自己的重要性有或表现出谦虚或低估。" +
            "<br><br>" +
            "(D) '尊重' 意味着感到或表现出敬意和尊重。"
    },
    {
        id: 2,
        question: "The thief made a __________ attempt to steal the car in broad daylight, showing no concern for being caught.",
        chinese_question: "小偷在光天化日之下 __________ 地试图偷车，完全不担心被抓到。",
        answers: [
            { option: "A", answer: "brazen", chinese_answer: "厚颜无耻的", chinese_romanization: "hòuyánwúchǐ de" },
            { option: "B", answer: "timid", chinese_answer: "胆小的", chinese_romanization: "dǎnxiǎo de" },
            { option: "C", answer: "cautious", chinese_answer: "谨慎的", chinese_romanization: "jǐnshèn de" },
            { option: "D", answer: "discreet", chinese_answer: "谨慎的", chinese_romanization: "jǐnshèn de" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'brazen' means bold and without shame." +
            "<br><br>" +
            "(B) 'timid' means showing a lack of courage or confidence; easily frightened." +
            "<br><br>" +
            "(C) 'cautious' means careful to avoid potential problems or dangers." +
            "<br><br>" +
            "(D) 'discreet' means careful and circumspect in one's speech or actions.",
        chinese_explanation: "(A) '厚颜无耻的' 意味着大胆而不知羞耻的。" +
            "<br><br>" +
            "(B) '胆小的' 意味着表现出缺乏勇气或信心；容易受惊的。" +
            "<br><br>" +
            "(C) '谨慎的' 意味着小心避免潜在问题或危险的。" +
            "<br><br>" +
            "(D) '谨慎的' 意味着在言语或行动上小心谨慎的。"
    },
    {
        id: 3,
        question: "Her __________ support was crucial to his recovery.",
        chinese_question: "她的__________支持对他的康复至关重要。",
        answers: [
            { option: "A", answer: "occasional", chinese_answer: "偶尔的", chinese_romanization: "ǒu'ěr de" },
            { option: "B", answer: "rare", chinese_answer: "罕见的", chinese_romanization: "hǎnjiàn de" },
            { option: "C", answer: "constant", chinese_answer: "持续的", chinese_romanization: "chíxù de" },
            { option: "D", answer: "intermittent", chinese_answer: "间歇的", chinese_romanization: "jiànxiē de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'constant' means occurring continuously over a period of time. Figuratively, it can mean unwavering and steady." +
            "<br><br>" +
            "(A) 'occasional' means occurring, appearing, or done infrequently and irregularly." +
            "<br><br>" +
            "(B) 'rare' means not occurring very often." +
            "<br><br>" +
            "(D) 'intermittent' means occurring at irregular intervals; not continuous or steady.",
        chinese_explanation: "(C) '持续的'一词意味着在一段时间内不断发生的。比喻地，它可以表示坚定和稳定的。" +
            "<br><br>" +
            "(A) '偶尔的' 意味着不经常和不规则地发生、出现或完成的。" +
            "<br><br>" +
            "(B) '罕见的' 意味着不经常发生的。" +
            "<br><br>" +
            "(D) '间歇的' 意味着不定期发生的；不连续或稳定的。"
    },
    {
        id: 4,
        question: "She became __________ when she found out her son was safe after the accident, laughing and crying at the same time.",
        chinese_question: "当她发现儿子在事故后安全时，她变得__________，一边笑一边哭。",
        answers: [
            { option: "A", answer: "calm", chinese_answer: "平静的", chinese_romanization: "píngjìng de" },
            { option: "B", answer: "composed", chinese_answer: "镇静的", chinese_romanization: "zhènjìng de" },
            { option: "C", answer: "hysterical", chinese_answer: "歇斯底里的", chinese_romanization: "xiēsīdǐlǐ de" },
            { option: "D", answer: "tranquil", chinese_answer: "安静的", chinese_romanization: "ānjìng de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'hysterical' means deriving from or affected by uncontrolled extreme emotion." +
            "<br><br>" +
            "(A) 'calm' means not showing or feeling nervousness, anger, or other strong emotions." +
            "<br><br>" +
            "(B) 'composed' means having one's feelings and expression under control." +
            "<br><br>" +
            "(D) 'tranquil' means free from disturbance; calm.",
        chinese_explanation: "(C) '歇斯底里的'一词意味着由或受无法控制的极端情绪影响的。" +
            "<br><br>" +
            "(A) '平静的' 意味着不表现或感觉紧张、愤怒或其他强烈情绪的。" +
            "<br><br>" +
            "(B) '镇静的' 意味着情绪和表情在控制之下的。" +
            "<br><br>" +
            "(D) '安静的' 意味着没有干扰的；平静的。"
    },
    {
        id: 5,
        question: "The team's __________ collaboration led to the successful completion of the project ahead of schedule.",
        chinese_question: "团队的 __________ 合作使项目提前成功完成。",
        answers: [
            { option: "A", answer: "harmonious", chinese_answer: "和谐的", chinese_romanization: "héxié de" },
            { option: "B", answer: "contentious", chinese_answer: "有争议的", chinese_romanization: "yǒu zhēngyì de" },
            { option: "C", answer: "discordant", chinese_answer: "不一致的", chinese_romanization: "bù yīzhì de" },
            { option: "D", answer: "chaotic", chinese_answer: "混乱的", chinese_romanization: "hǔnluàn de" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'harmonious' means free from disagreement or dissent." +
            "<br><br>" +
            "(B) 'contentious' means causing or likely to cause an argument; controversial." +
            "<br><br>" +
            "(C) 'discordant' means disagreeing or incongruous." +
            "<br><br>" +
            "(D) 'chaotic' means in a state of complete confusion and disorder.",
        chinese_explanation: "(A) '和谐的' 意味着没有分歧或异议的。" +
            "<br><br>" +
            "(B) '有争议的' 意味着引起或可能引起争论的；有争议的。" +
            "<br><br>" +
            "(C) '不一致的' 意味着不同意或不协调的。" +
            "<br><br>" +
            "(D) '混乱的' 意味着完全混乱和无序的状态。"
    },
    {
        id: 6,
    question: "The __________ intern meticulously reviewed every document, ensuring that there were no errors.",
    chinese_question: "这位 __________ 的实习生仔细审核了每一份文件，确保没有任何错误。",
    answers: [
        { option: "A", answer: "conscientious", chinese_answer: "认真负责的", chinese_romanization: "rènzhēn fùzé de" },
        { option: "B", answer: "careless", chinese_answer: "粗心的", chinese_romanization: "cūxīn de" },
        { option: "C", answer: "indifferent", chinese_answer: "冷漠的", chinese_romanization: "lěngmò de" },
        { option: "D", answer: "hasty", chinese_answer: "匆忙的", chinese_romanization: "cōngmáng de" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'conscientious' means wishing to do one's work or duty well and thoroughly." +
        "<br><br>" +
        "(B) 'careless' means not giving sufficient attention or thought to avoiding harm or errors." +
        "<br><br>" +
        "(C) 'indifferent' means having no particular interest or sympathy; unconcerned." +
        "<br><br>" +
        "(D) 'hasty' means done with excessive speed or urgency; hurried.",
    chinese_explanation: "(A) '认真负责的' 意味着希望把工作或职责做好并彻底完成的。" +
        "<br><br>" +
        "(B) '粗心的' 意味着没有给予足够的注意或思考以避免伤害或错误的。" +
        "<br><br>" +
        "(C) '冷漠的' 意味着没有特别的兴趣或同情；不关心的。" +
        "<br><br>" +
        "(D) '匆忙的' 意味着以过快或紧急的方式完成的；匆忙的。"
    },
    {
        id: 7,
        question: "Living in a remote village with no access to news, she remained in __________ ignorance of the global issues that were causing widespread concern.",
        chinese_question: "住在一个没有新闻访问的偏远村庄，她在对全球问题的 __________ 无知中保持了平静，这些问题引起了广泛的关注。",
        answers: [
            { option: "A", answer: "aware", chinese_answer: "意识到的", chinese_romanization: "yìshídào de" },
            { option: "B", answer: "concerned", chinese_answer: "关心的", chinese_romanization: "guānxīn de" },
            { option: "C", answer: "informed", chinese_answer: "知情的", chinese_romanization: "zhīqíng de" },
            { option: "D", answer: "blissful", chinese_answer: "幸福的", chinese_romanization: "xìngfú de" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'blissful' means extremely happy; full of joy, often used to describe a state of ignorant happiness." +
            "<br><br>" +
            "(A) 'aware' means having knowledge or perception of a situation or fact." +
            "<br><br>" +
            "(B) 'concerned' means worried, troubled, or anxious." +
            "<br><br>" +
            "(C) 'informed' means having or showing knowledge of a particular subject or situation.",
        chinese_explanation: "(D) '幸福的' 意味着极度快乐；充满喜悦，通常用来描述一种无知的幸福状态。" +
            "<br><br>" +
            "(A) '意识到的' 意味着对某种情况或事实有知识或感知。" +
            "<br><br>" +
            "(B) '关心的' 意味着担心、烦恼或焦虑的。" +
            "<br><br>" +
            "(C) '知情的' 意味着拥有或显示对特定主题或情况的知识。"
    },
    {
        id: 8,
        question: "Her __________ choice of investments resulted in steady growth, showing her ability to make wise decisions.",
        chinese_question: "她 __________ 的投资选择带来了稳定的增长，显示了她做出明智决策的能力。",
        answers: [
            { option: "A", answer: "judicious", chinese_answer: "明智的", chinese_romanization: "míngzhì de" },
            { option: "B", answer: "reckless", chinese_answer: "鲁莽的", chinese_romanization: "lǔmǎng de" },
            { option: "C", answer: "impulsive", chinese_answer: "冲动的", chinese_romanization: "chōngdòng de" },
            { option: "D", answer: "careless", chinese_answer: "粗心的", chinese_romanization: "cūxīn de" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'judicious' means having, showing, or done with good judgment or sense." +
            "<br><br>" +
            "(B) 'reckless' means without thinking or caring about the consequences of an action." +
            "<br><br>" +
            "(C) 'impulsive' means acting or done without forethought." +
            "<br><br>" +
            "(D) 'careless' means not giving sufficient attention or thought to avoiding harm or errors.",
        chinese_explanation: "(A) '明智的' 意味着具有、表现出或做出良好的判断或见识。" +
            "<br><br>" +
            "(B) '鲁莽的' 意味着不考虑或不在意行动后果的。" +
            "<br><br>" +
            "(C) '冲动的' 意味着在没有深思熟虑的情况下行动或完成的。" +
            "<br><br>" +
            "(D) '粗心的' 意味着没有给予足够的注意或思考以避免伤害或错误的。"
    },
    {
        id: 9,
        question: "Honesty is __________ to building a trusting relationship.",
        chinese_question: "诚信对建立信任关系是 __________ 的。",
        answers: [
            { option: "A", answer: "irrelevant", chinese_answer: "无关", chinese_romanization: "wúguān" },
            { option: "B", answer: "integral", chinese_answer: "必不可少", chinese_romanization: "bì bù kě shǎo" },
            { option: "C", answer: "peripheral", chinese_answer: "外围", chinese_romanization: "wàiwéi" },
            { option: "D", answer: "trivial", chinese_answer: "琐碎", chinese_romanization: "suǒsuì" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'integral' means necessary to make a whole complete; essential or fundamental." +
            "<br><br>" +
            "(A) 'irrelevant' means not connected with or relevant to something." +
            "<br><br>" +
            "(C) 'peripheral' means relating to or situated on the edge or periphery of something." +
            "<br><br>" +
            "(D) 'trivial' means of little value or importance.",
        chinese_explanation: "(B) '必不可少' 意味着使整体完整所必需的；基本的或根本的。" +
            "<br><br>" +
            "(A) '无关' 意味着与某事无关或不相关。" +
            "<br><br>" +
            "(C) '外围' 意味着与某物的边缘或外围有关或位于边缘。" +
            "<br><br>" +
            "(D) '琐碎' 意味着价值或重要性很小。"
    },
    {
        id: 10,
        question: "The journalist's __________ knowledge on various topics made her a valuable asset to the news team.",
        chinese_question: "这位记者在各种话题上的 __________ 知识使她成为新闻团队的重要资产。",
        answers: [
            { option: "A", answer: "broad", chinese_answer: "广泛的", chinese_romanization: "guǎngfàn de" },
            { option: "B", answer: "narrow", chinese_answer: "狭窄的", chinese_romanization: "xiázhǎi de" },
            { option: "C", answer: "limited", chinese_answer: "有限的", chinese_romanization: "yǒuxiàn de" },
            { option: "D", answer: "specific", chinese_answer: "具体的", chinese_romanization: "jùtǐ de" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'broad' means having a wide range or extent." +
            "<br><br>" +
            "(B) 'narrow' means limited in extent, amount, or scope." +
            "<br><br>" +
            "(C) 'limited' means restricted in size, amount, or extent." +
            "<br><br>" +
            "(D) 'specific' means clearly defined or identified.",
        chinese_explanation: "(A) '广泛的' 意味着范围或广度很大的。" +
            "<br><br>" +
            "(B) '狭窄的' 意味着范围、数量或范围有限的。" +
            "<br><br>" +
            "(C) '有限的' 意味着在大小、数量或范围上受限的。" +
            "<br><br>" +
            "(D) '具体的' 意味着明确定义或标识的。"
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
