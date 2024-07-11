// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "The __________ neighborhood was known for its luxurious homes and well-maintained gardens.",
        chinese_question: "这个 __________ 的社区以其豪华的住宅和维护良好的花园而闻名。",
        answers: [
            { option: "A", answer: "poor", chinese_answer: "贫穷", chinese_romanization: "pínqióng" },
            { option: "B", answer: "affluent", chinese_answer: "富裕", chinese_romanization: "fùyù" },
            { option: "C", answer: "destitute", chinese_answer: "贫困", chinese_romanization: "pínkùn" },
            { option: "D", answer: "underprivileged", chinese_answer: "弱势", chinese_romanization: "ruòshì" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'affluent' means having a great deal of money; wealthy." +
            "<br><br>" +
            "(A) 'poor' means lacking sufficient money to live at a standard considered comfortable or normal in a society." +
            "<br><br>" +
            "(C) 'destitute' means without the basic necessities of life." +
            "<br><br>" +
            "(D) 'underprivileged' means not enjoying the same standard of living or rights as the majority of people in a society.",
        chinese_explanation: "(B) '富裕' 意味着拥有大量的钱；富有。" +
            "<br><br>" +
            "(A) '贫穷' 意味着缺乏足够的钱来过上社会上认为舒适或正常的生活。" +
            "<br><br>" +
            "(C) '贫困' 意味着没有生活的基本必需品。" +
            "<br><br>" +
            "(D) '弱势' 意味着没有享受与社会大多数人相同的生活水平或权利。"
    },
    {
        id: 2,
        question: "The child's __________ behavior at the dinner table, including talking back to adults and making rude gestures, earned him a stern reprimand.",
        chinese_question: "孩子在餐桌上的 __________ 行为，包括顶撞成年人和做粗鲁的手势，使他受到严厉的训斥。",
        answers: [
            { option: "A", answer: "impudent", chinese_answer: "无礼的", chinese_romanization: "wúlǐ de" },
            { option: "B", answer: "respectful", chinese_answer: "尊重的", chinese_romanization: "zūnzhòng de" },
            { option: "C", answer: "humble", chinese_answer: "谦逊的", chinese_romanization: "qiānxùn de" },
            { option: "D", answer: "obedient", chinese_answer: "顺从的", chinese_romanization: "shùncóng de" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'impudent' means not showing due respect for another person; impertinent." +
            "<br><br>" +
            "(B) 'respectful' means feeling or showing deference and respect." +
            "<br><br>" +
            "(C) 'humble' means having or showing a modest or low estimate of one's own importance." +
            "<br><br>" +
            "(D) 'obedient' means complying or willing to comply with orders or requests; submissive to another's will.",
        chinese_explanation: "(A) '无礼的' 意味着没有对他人表现出应有的尊重；无礼的。" +
            "<br><br>" +
            "(B) '尊重的' 意味着感到或表现出敬意的。" +
            "<br><br>" +
            "(C) '谦逊的' 意味着对自己的重要性有或表现出谦虚或低估的态度。" +
            "<br><br>" +
            "(D) '顺从的' 意味着遵从或愿意遵从命令或要求；服从他人意愿的。"
    },
    {
        id: 3,
        question: "The professor's lecture was __________, jumping from one topic to another without clear connections, leaving the students confused.",
        chinese_question: "教授的讲座 __________，从一个话题跳到另一个话题，没有清晰的联系，让学生们感到困惑。",
        answers: [
            { option: "A", answer: "focused", chinese_answer: "集中的", chinese_romanization: "jízhōng de" },
            { option: "B", answer: "concise", chinese_answer: "简洁的", chinese_romanization: "jiǎnjié de" },
            { option: "C", answer: "organized", chinese_answer: "有组织的", chinese_romanization: "yǒu zǔzhī de" },
            { option: "D", answer: "discursive", chinese_answer: "离题的", chinese_romanization: "lítí de" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'discursive' means digressing from subject to subject." +
            "<br><br>" +
            "(A) 'focused' means concentrated on a particular topic or task." +
            "<br><br>" +
            "(B) 'concise' means giving a lot of information clearly and in a few words." +
            "<br><br>" +
            "(C) 'organized' means arranged in a systematic way.",
        chinese_explanation: "(D) '离题的' 意味着从一个主题转到另一个主题。" +
            "<br><br>" +
            "(A) '集中的' 意味着集中在特定主题或任务上。" +
            "<br><br>" +
            "(B) '简洁的' 意味着用少量词清晰地提供大量信息。" +
            "<br><br>" +
            "(C) '有组织的' 意味着以系统的方式安排的。"
    },
    {
        id: 4,
        question: "Despite the exciting news, she remained __________ and showed no interest at all.",
        chinese_question: "尽管有令人兴奋的消息，她仍然__________，完全没有表现出兴趣。",
        answers: [
            { option: "A", answer: "enthusiastic", chinese_answer: "热情", chinese_romanization: "rèqíng" },
            { option: "B", answer: "indifferent", chinese_answer: "冷漠", chinese_romanization: "lěngmò" },
            { option: "C", answer: "curious", chinese_answer: "好奇", chinese_romanization: "hàoqí" },
            { option: "D", answer: "involved", chinese_answer: "参与", chinese_romanization: "cānyù" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'indifferent' means having no particular interest or sympathy; unconcerned." +
            "<br><br>" +
            "(A) 'enthusiastic' means having or showing intense and eager enjoyment, interest, or approval." +
            "<br><br>" +
            "(C) 'curious' means eager to know or learn something." +
            "<br><br>" +
            "(D) 'involved' means connected or concerned with someone or something, typically on an emotional or personal level.",
        chinese_explanation: "(B) '冷漠'一词意味着没有特别的兴趣或同情；不关心的。" +
            "<br><br>" +
            "(A) '热情' 意味着有或表现出强烈和急切的享受、兴趣或赞同。" +
            "<br><br>" +
            "(C) '好奇' 意味着渴望知道或学习某事。" +
            "<br><br>" +
            "(D) '参与' 意味着与某人或某事有关或关心，通常是在情感或个人层面上。"
    },
    {
        id: 5,
        question: "His __________ decision to invest all his savings in a single, unproven startup resulted in significant financial loss.",
        chinese_question: "他把所有积蓄都投资在一个未经过验证的新创企业的 __________ 决定导致了巨大的财务损失。",
        answers: [
            { option: "A", answer: "wise", chinese_answer: "明智的", chinese_romanization: "míngzhì de" },
            { option: "B", answer: "prudent", chinese_answer: "谨慎的", chinese_romanization: "jǐnshèn de" },
            { option: "C", answer: "sensible", chinese_answer: "明智的", chinese_romanization: "míngzhì de" },
            { option: "D", answer: "fatuous", chinese_answer: "愚蠢的", chinese_romanization: "yúchǔn de" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'fatuous' means silly and pointless." +
            "<br><br>" +
            "(A) 'wise' means having or showing experience, knowledge, and good judgment." +
            "<br><br>" +
            "(B) 'prudent' means acting with or showing care and thought for the future." +
            "<br><br>" +
            "(C) 'sensible' means chosen in accordance with wisdom or prudence; likely to be of benefit.",
        chinese_explanation: "(D) '愚蠢的' 意味着愚蠢而无意义的。" +
            "<br><br>" +
            "(A) '明智的' 意味着拥有或显示出经验、知识和良好判断力的。" +
            "<br><br>" +
            "(B) '谨慎的' 意味着采取或表现出对未来的关心和考虑。" +
            "<br><br>" +
            "(C) '明智的' 意味着根据智慧或审慎选择的；可能有利的。"
    },
    {
        id: 6,
        question: "Working in the chemical plant can be __________ if proper safety measures are not followed.",
        chinese_question: "如果不遵循适当的安全措施，在化工厂工作可能是 __________ 的。",
        answers: [
            { option: "A", answer: "safe", chinese_answer: "安全的", chinese_romanization: "ānquán de" },
            { option: "B", answer: "enjoyable", chinese_answer: "愉快的", chinese_romanization: "yúkuài de" },
            { option: "C", answer: "hazardous", chinese_answer: "危险的", chinese_romanization: "wēixiǎn de" },
            { option: "D", answer: "routine", chinese_answer: "常规的", chinese_romanization: "chángguī de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'hazardous' means risky; dangerous." +
            "<br><br>" +
            "(A) 'safe' means protected from or not exposed to danger or risk; not likely to be harmed or lost." +
            "<br><br>" +
            "(B) 'enjoyable' means giving delight or pleasure." +
            "<br><br>" +
            "(D) 'routine' means a sequence of actions regularly followed; a fixed program.",
        chinese_explanation: "(C) '危险的' 一词意味着有风险的；危险的。" +
            "<br><br>" +
            "(A) '安全的' 意味着受到保护或不暴露于危险或风险中；不太可能受到伤害或损失。" +
            "<br><br>" +
            "(B) '愉快的' 意味着带来愉悦或快乐的。" +
            "<br><br>" +
            "(D) '常规的' 意味着定期遵循的一系列行动；固定程序。"
    },
    {
        id: 7,
        question: "His __________ comments about his coworkers caused tension and hurt feelings in the office.",
        chinese_question: "他对同事的 __________ 评论在办公室里引起了紧张和伤感。",
        answers: [
            { option: "A", answer: "complimentary", chinese_answer: "赞美的", chinese_romanization: "zànměi de" },
            { option: "B", answer: "supportive", chinese_answer: "支持的", chinese_romanization: "zhīchí de" },
            { option: "C", answer: "derogatory", chinese_answer: "贬低的", chinese_romanization: "biǎndī de" },
            { option: "D", answer: "encouraging", chinese_answer: "鼓励的", chinese_romanization: "gǔlì de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'derogatory' means showing a critical or disrespectful attitude." +
            "<br><br>" +
            "(A) 'complimentary' means expressing a compliment; praising or approving." +
            "<br><br>" +
            "(B) 'supportive' means providing encouragement or emotional help." +
            "<br><br>" +
            "(D) 'encouraging' means giving someone support or confidence; supportive.",
        chinese_explanation: "(C) '贬低的' 一词意味着表现出批评或不尊重的态度。" +
            "<br><br>" +
            "(A) '赞美的' 意味着表达赞美；赞扬或批准的。" +
            "<br><br>" +
            "(B) '支持的' 意味着提供鼓励或情感上的帮助的。" +
            "<br><br>" +
            "(D) '鼓励的' 意味着给予某人支持或信心；支持的。"
    },
    {
        id: 8,
        question: "The detective was horrified by the __________ details of the crime scene, which were more brutal than anything he had ever encountered.",
        chinese_question: "侦探被犯罪现场的 __________ 细节吓到了，这比他以前遇到的任何事情都要残酷。",
        answers: [
            { option: "A", answer: "pleasant", chinese_answer: "愉快的", chinese_romanization: "yúkuài de" },
            { option: "B", answer: "amusing", chinese_answer: "有趣的", chinese_romanization: "yǒuqù de" },
            { option: "C", answer: "gruesome", chinese_answer: "可怕的", chinese_romanization: "kěpà de" },
            { option: "D", answer: "ordinary", chinese_answer: "普通的", chinese_romanization: "pǔtōng de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'gruesome' means causing repulsion or horror; grisly." +
            "<br><br>" +
            "(A) 'pleasant' means giving a sense of happy satisfaction or enjoyment." +
            "<br><br>" +
            "(B) 'amusing' means causing laughter and providing entertainment." +
            "<br><br>" +
            "(D) 'ordinary' means with no special or distinctive features; normal.",
        chinese_explanation: "(C) '可怕的' 一词意味着引起反感或恐惧的；可怕的。" +
            "<br><br>" +
            "(A) '愉快的' 意味着给予愉快的满足或享受。" +
            "<br><br>" +
            "(B) '有趣的' 意味着引起笑声并提供娱乐。" +
            "<br><br>" +
            "(D) '普通的' 意味着没有特别或独特的特征；正常的。"
    },
    {
        id: 9,
        question: "Her portrayal of the character was so __________ that it brought the story to life.",
        chinese_question: "她对角色的刻画如此 __________，让故事栩栩如生。",
        answers: [
            { option: "A", answer: "accurate", chinese_answer: "精确的", chinese_romanization: "jīngquè de" },
            { option: "B", answer: "exaggerated", chinese_answer: "夸张的", chinese_romanization: "kuāzhāng de" },
            { option: "C", answer: "flawed", chinese_answer: "有缺陷的", chinese_romanization: "yǒu quēxiàn de" },
            { option: "D", answer: "inconsistent", chinese_answer: "不一致的", chinese_romanization: "bù yīzhì de" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'accurate' metaphorically means representing the truth or reality precisely." +
            "<br><br>" +
            "(B) 'exaggerated' means represented as greater than is true or reasonable." +
            "<br><br>" +
            "(C) 'flawed' means blemished, damaged, or imperfect in some way." +
            "<br><br>" +
            "(D) 'inconsistent' means not staying the same throughout.",
        chinese_explanation: "(A) '精确的' 比喻准确地代表真实或现实。" +
            "<br><br>" +
            "(B) '夸张的' 意味着表现得比实际更大或更不合理。" +
            "<br><br>" +
            "(C) '有缺陷的' 意味着某种方式上有瑕疵、损坏或不完美。" +
            "<br><br>" +
            "(D) '不一致的' 意味着不保持始终如一的。"
    },
    {
        id: 10,
        question: "Despite the criticism, she remained __________ in her decision to pursue a career in music.",
        chinese_question: "尽管受到批评，她在追求音乐事业的决定上依然 __________。",
        answers: [
            { option: "A", answer: "flexible", chinese_answer: "灵活", chinese_romanization: "línghuó" },
            { option: "B", answer: "unsure", chinese_answer: "不确定", chinese_romanization: "bù quèdìng" },
            { option: "C", answer: "adamant", chinese_answer: "坚定", chinese_romanization: "jiāndìng" },
            { option: "D", answer: "hesitant", chinese_answer: "犹豫", chinese_romanization: "yóuyù" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'adamant' means refusing to be persuaded or to change one's mind." +
            "<br><br>" +
            "(A) 'flexible' means capable of bending easily without breaking." +
            "<br><br>" +
            "(B) 'unsure' means not certain or confident." +
            "<br><br>" +
            "(D) 'hesitant' means tentative, unsure, or slow in acting or speaking.",
        chinese_explanation: "(C) '坚定' 意味着拒绝被说服或改变主意。" +
            "<br><br>" +
            "(A) '灵活' 意味着能够轻松弯曲而不断裂。" +
            "<br><br>" +
            "(B) '不确定' 意味着不确定或没有信心。" +
            "<br><br>" +
            "(D) '犹豫' 意味着试探性、不确定或行动或说话缓慢。"
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
