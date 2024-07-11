// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "The movie depicted an __________ scenario where natural disasters and chaos brought the world to an end.",
        chinese_question: "这部电影描绘了一种 __________ 的情景，自然灾害和混乱使世界走向毁灭。",
        answers: [
            { option: "A", answer: "utopian", chinese_answer: "乌托邦式", chinese_romanization: "wūtuōbāng shì" },
            { option: "B", answer: "idyllic", chinese_answer: "田园", chinese_romanization: "tiányuán" },
            { option: "C", answer: "apocalyptic", chinese_answer: "世界末日", chinese_romanization: "shìjiè mò rì" },
            { option: "D", answer: "serene", chinese_answer: "宁静", chinese_romanization: "níngjìng" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'apocalyptic' means describing or prophesying the complete destruction of the world." +
            "<br><br>" +
            "(A) 'utopian' means modeled on or aiming for a state in which everything is perfect; idealistic." +
            "<br><br>" +
            "(B) 'idyllic' means extremely happy, peaceful, or picturesque." +
            "<br><br>" +
            "(D) 'serene' means calm, peaceful, and untroubled; tranquil.",
        chinese_explanation: "(C) '世界末日' 一词意味着描述或预言世界的完全毁灭。" +
            "<br><br>" +
            "(A) '乌托邦式' 意味着以一切完美为模型或目标的；理想主义的。" +
            "<br><br>" +
            "(B) '田园' 意味着极其幸福、和平或风景如画的。" +
            "<br><br>" +
            "(D) '宁静' 意味着平静、和平和无忧的；宁静的。"
    },
    {
        id: 2,
        question: "The view from the mountaintop was absolutely __________, leaving us speechless.",
        chinese_question: "山顶的景色绝对 __________，让我们说不出话来。",
        answers: [
            { option: "A", answer: "sublime", chinese_answer: "崇高的", chinese_romanization: "chónggāo de" },
            { option: "B", answer: "ordinary", chinese_answer: "普通的", chinese_romanization: "pǔtōng de" },
            { option: "C", answer: "mundane", chinese_answer: "平凡的", chinese_romanization: "píngfán de" },
            { option: "D", answer: "average", chinese_answer: "一般的", chinese_romanization: "yībān de" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'sublime' means of such excellence, grandeur, or beauty as to inspire great admiration or awe." +
            "<br><br>" +
            "(B) 'ordinary' means with no special or distinctive features; normal." +
            "<br><br>" +
            "(C) 'mundane' means lacking interest or excitement; dull." +
            "<br><br>" +
            "(D) 'average' means achieving or amounting to a standard or level regarded as typical or usual.",
        chinese_explanation: "(A) '崇高的' 意味着如此卓越、宏伟或美丽，以至于引发极大的钦佩或敬畏。" +
            "<br><br>" +
            "(B) '普通的' 意味着没有特别或独特的特征；正常的。" +
            "<br><br>" +
            "(C) '平凡的' 意味着缺乏兴趣或兴奋；乏味的。" +
            "<br><br>" +
            "(D) '一般的' 意味着达到或达到被认为是典型或通常的标准或水平。"
    },
    {
        id: 3,
        question: "The __________ sound of the alarm woke everyone in the building.",
        chinese_question: "警报的 __________ 声音唤醒了建筑中的每个人。",
        answers: [
            { option: "A", answer: "strident", chinese_answer: "刺耳的", chinese_romanization: "cì'ěr de" },
            { option: "B", answer: "soothing", chinese_answer: "抚慰的", chinese_romanization: "fǔwèi de" },
            { option: "C", answer: "gentle", chinese_answer: "温柔的", chinese_romanization: "wēnróu de" },
            { option: "D", answer: "faint", chinese_answer: "微弱的", chinese_romanization: "wēiruò de" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'strident' means loud and harsh; grating." +
            "<br><br>" +
            "(B) 'soothing' means having a gently calming effect." +
            "<br><br>" +
            "(C) 'gentle' means having or showing a mild, kind, or tender temperament or character." +
            "<br><br>" +
            "(D) 'faint' means (of a sight, smell, or sound) barely perceptible.",
        chinese_explanation: "(A) '刺耳的' 意味着响亮而刺耳的；刺耳的。" +
            "<br><br>" +
            "(B) '抚慰的' 意味着具有轻柔的平静效果。" +
            "<br><br>" +
            "(C) '温柔的' 意味着具有或表现出温和、善良或温柔的性格。" +
            "<br><br>" +
            "(D) '微弱的' 意味着（视觉、气味或声音）几乎察觉不到的。"
    },
    {
        id: 4,
        question: "Her __________ taste in music included everything from classical symphonies and jazz to punk rock and electronic dance music.",
        chinese_question: "她的音乐品味 __________，包括从古典交响乐和爵士乐到朋克摇滚和电子舞曲的一切。",
        answers: [
            { option: "A", answer: "narrow", chinese_answer: "狭窄的", chinese_romanization: "xiázhǎi de" },
            { option: "B", answer: "traditional", chinese_answer: "传统的", chinese_romanization: "chuántǒng de" },
            { option: "C", answer: "limited", chinese_answer: "有限的", chinese_romanization: "yǒuxiàn de" },
            { option: "D", answer: "eclectic", chinese_answer: "兼收并蓄的", chinese_romanization: "jiānshōu bìng xù de" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'eclectic' means deriving ideas, style, or taste from a broad and diverse range of sources." +
            "<br><br>" +
            "(A) 'narrow' means limited in extent, amount, or scope." +
            "<br><br>" +
            "(B) 'traditional' means existing in or as part of a tradition; long-established." +
            "<br><br>" +
            "(C) 'limited' means restricted in size, amount, or extent.",
        chinese_explanation: "(D) '兼收并蓄的' 意味着从广泛和多样的来源中汲取想法、风格或品味。" +
            "<br><br>" +
            "(A) '狭窄的' 意味着在程度、数量或范围上有限的。" +
            "<br><br>" +
            "(B) '传统的' 意味着存在于或作为传统的一部分；长期存在的。" +
            "<br><br>" +
            "(C) '有限的' 意味着在大小、数量或程度上受限制的。"
    },
    {
        id: 5,
        question: "The bright red dress she wore made her instantly __________ in the crowded room.",
        chinese_question: "她穿的亮红色连衣裙使她在拥挤的房间里立刻 __________。",
        answers: [
            { option: "A", answer: "invisible", chinese_answer: "看不见的", chinese_romanization: "kàn bùjiàn de" },
            { option: "B", answer: "noticeable", chinese_answer: "引人注目的", chinese_romanization: "yǐnrén zhùmù de" },
            { option: "C", answer: "hidden", chinese_answer: "隐藏的", chinese_romanization: "yǐncáng de" },
            { option: "D", answer: "overlooked", chinese_answer: "被忽视的", chinese_romanization: "bèi hūshì de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'noticeable' means easily seen or noticed; clear or apparent." +
            "<br><br>" +
            "(A) 'invisible' means unable to be seen; not visible to the eye." +
            "<br><br>" +
            "(C) 'hidden' means kept out of sight; concealed." +
            "<br><br>" +
            "(D) 'overlooked' means not noticed or seen.",
        chinese_explanation: "(B) '引人注目的' 一词意味着容易看到或注意到的；明显的。" +
            "<br><br>" +
            "(A) '看不见的' 意味着无法看到的；眼睛看不到的。" +
            "<br><br>" +
            "(C) '隐藏的' 意味着隐藏起来的；隐藏的。" +
            "<br><br>" +
            "(D) '被忽视的' 意味着未被注意到或看到的。"
    },
    {
        id: 6,
        question: "He remained __________ during the meeting, not participating in the discussion or showing any interest.",
        chinese_question: "在会议期间，他保持 __________，没有参与讨论，也没有表现出任何兴趣。",
        answers: [
            { option: "A", answer: "engaged", chinese_answer: "参与的", chinese_romanization: "cānyù de" },
            { option: "B", answer: "involved", chinese_answer: "相关的", chinese_romanization: "xiāngguān de" },
            { option: "C", answer: "aloof", chinese_answer: "冷漠的", chinese_romanization: "lěngmò de" },
            { option: "D", answer: "attentive", chinese_answer: "专心的", chinese_romanization: "zhuānxīn de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'aloof' means not friendly or forthcoming; cool and distant." +
            "<br><br>" +
            "(A) 'engaged' means busy or occupied." +
            "<br><br>" +
            "(B) 'involved' means connected or concerned with someone or something." +
            "<br><br>" +
            "(D) 'attentive' means paying close attention to something.",
        chinese_explanation: "(C) '冷漠的' 一词意味着不友好或不乐于交谈；冷淡的。" +
            "<br><br>" +
            "(A) '参与的' 意味着忙碌或被占用的。" +
            "<br><br>" +
            "(B) '相关的' 意味着与某人或某事有关的。" +
            "<br><br>" +
            "(D) '专心的' 意味着对某事物非常关注的。"
    },
    {
        id: 7,
        question: "The company implemented __________ security measures to protect sensitive information from cyber threats.",
        chinese_question: "公司实施了 __________ 的安全措施，以保护敏感信息免受网络威胁。",
        answers: [
            { option: "A", answer: "lenient", chinese_answer: "宽松的", chinese_romanization: "kuānsōng de" },
            { option: "B", answer: "lax", chinese_answer: "松懈的", chinese_romanization: "sōngxiè de" },
            { option: "C", answer: "stringent", chinese_answer: "严格的", chinese_romanization: "yángé de" },
            { option: "D", answer: "easygoing", chinese_answer: "随和的", chinese_romanization: "suíhé de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'stringent' means strict, precise, and exacting." +
            "<br><br>" +
            "(A) 'lenient' means (of punishment or a person in authority) permissive, merciful, or tolerant." +
            "<br><br>" +
            "(B) 'lax' means not sufficiently strict, severe, or careful." +
            "<br><br>" +
            "(D) 'easygoing' means relaxed and casual in style or manner.",
        chinese_explanation: "(C) '严格的' 一词意味着严格、精确和要求高的。" +
            "<br><br>" +
            "(A) '宽松的' 意味着（惩罚或有权威的人）宽容、仁慈或宽容。" +
            "<br><br>" +
            "(B) '松懈的' 意味着不够严格、严厉或仔细的。" +
            "<br><br>" +
            "(D) '随和的' 意味着风格或方式上放松和随意的。"
    },
    {
        id: 8,
        question: "Her __________ arguments convinced the committee to approve the new policy despite initial reservations.",
        chinese_question: "她的 __________ 论据说服了委员会批准新政策，尽管最初有保留意见。",
        answers: [
            { option: "A", answer: "weak", chinese_answer: "薄弱的", chinese_romanization: "bóruò de" },
            { option: "B", answer: "persuasive", chinese_answer: "有说服力的", chinese_romanization: "yǒu shuōfúlì de" },
            { option: "C", answer: "uncertain", chinese_answer: "不确定的", chinese_romanization: "bù quèdìng de" },
            { option: "D", answer: "ineffective", chinese_answer: "无效的", chinese_romanization: "wúxiào de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'persuasive' means good at persuading someone to do or believe something through reasoning or the use of temptation." +
            "<br><br>" +
            "(A) 'weak' means lacking the power to perform physically demanding tasks; having little physical strength or energy." +
            "<br><br>" +
            "(C) 'uncertain' means not able to be relied on; not known or definite." +
            "<br><br>" +
            "(D) 'ineffective' means not producing any significant or desired effect.",
        chinese_explanation: "(B) '有说服力的' 一词意味着通过推理或诱惑使某人做某事或相信某事的能力。" +
            "<br><br>" +
            "(A) '薄弱的' 意味着缺乏执行体力任务的力量；体力或精力不足。" +
            "<br><br>" +
            "(C) '不确定的' 意味着不能依靠的；不确定或不明确的。" +
            "<br><br>" +
            "(D) '无效的' 意味着没有产生任何显著或预期效果的。"
    },
    {
        id: 9,
        question: "The idea of cheating on the exam was __________ to her, as she valued honesty and integrity above all.",
        chinese_question: "考试作弊的想法对她来说是 __________ 的，因为她重视诚实和正直。",
        answers: [
            { option: "A", answer: "attractive", chinese_answer: "有吸引力的", chinese_romanization: "yǒu xīyǐnlì de" },
            { option: "B", answer: "appealing", chinese_answer: "吸引人的", chinese_romanization: "xīyǐn rén de" },
            { option: "C", answer: "repugnant", chinese_answer: "令人厌恶的", chinese_romanization: "lìng rén yànwù de" },
            { option: "D", answer: "inviting", chinese_answer: "邀请的", chinese_romanization: "yāoqǐng de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'repugnant' means extremely distasteful; unacceptable." +
            "<br><br>" +
            "(A) 'attractive' means pleasing or appealing to the senses." +
            "<br><br>" +
            "(B) 'appealing' means attractive or interesting." +
            "<br><br>" +
            "(D) 'inviting' means offering the promise of an attractive or enjoyable experience.",
        chinese_explanation: "(C) '令人厌恶的' 一词意味着极其令人厌恶的；不可接受的。" +
            "<br><br>" +
            "(A) '有吸引力的' 意味着取悦或吸引感官的。" +
            "<br><br>" +
            "(B) '吸引人的' 意味着有吸引力或有趣的。" +
            "<br><br>" +
            "(D) '邀请的' 意味着提供有吸引力或愉快体验的承诺的。"
    },
    {
        id: 10,
        question: "Despite facing numerous setbacks, she remained __________, always bouncing back stronger and more determined.",
        chinese_question: "尽管面临众多挫折，她依然 __________，总是更坚强和更有决心地反弹。",
        answers: [
            { option: "A", answer: "fragile", chinese_answer: "脆弱的", chinese_romanization: "cuìruò de" },
            { option: "B", answer: "resilient", chinese_answer: "有弹性的", chinese_romanization: "yǒu tánxìng de" },
            { option: "C", answer: "weak", chinese_answer: "虚弱的", chinese_romanization: "xūruò de" },
            { option: "D", answer: "brittle", chinese_answer: "易碎的", chinese_romanization: "yìsuì de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'resilient' means able to withstand or recover quickly from difficult conditions." +
            "<br><br>" +
            "(A) 'fragile' means (of an object) easily broken or damaged." +
            "<br><br>" +
            "(C) 'weak' means lacking the power to perform physically demanding tasks; having little physical strength or energy." +
            "<br><br>" +
            "(D) 'brittle' means hard but liable to break or shatter easily.",
        chinese_explanation: "(B) '有弹性的' 一词意味着能够承受或迅速从困难条件中恢复。" +
            "<br><br>" +
            "(A) '脆弱的' 意味着（物体）容易破碎或损坏。" +
            "<br><br>" +
            "(C) '虚弱的' 意味着缺乏执行体力任务的力量；体力或精力不足。" +
            "<br><br>" +
            "(D) '易碎的' 意味着坚硬但容易破裂或粉碎。"
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
