// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "The detective had to __________ the suspect for several hours to gather all the necessary information about the case.",
        chinese_question: "侦探不得不 __________ 嫌疑人几个小时，以收集有关案件的所有必要信息。",
        answers: [
            { option: "A", answer: "praise", chinese_answer: "表扬", chinese_romanization: "biǎoyáng" },
            { option: "B", answer: "befriend", chinese_answer: "结交", chinese_romanization: "jiéjiāo" },
            { option: "C", answer: "flatter", chinese_answer: "奉承", chinese_romanization: "fèngchéng" },
            { option: "D", answer: "interrogate", chinese_answer: "审问", chinese_romanization: "shěnwèn" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'interrogate' means ask questions of (someone, especially a suspect or a prisoner) closely, aggressively, or formally." +
            "<br><br>" +
            "(A) 'praise' means express warm approval or admiration of." +
            "<br><br>" +
            "(B) 'befriend' means act as a friend to (someone) by offering help or support." +
            "<br><br>" +
            "(C) 'flatter' means lavish insincere praise and compliments upon (someone), especially to further one's own interests.",
        chinese_explanation: "(D) '审问' 一词意味着（特别是对嫌疑人或囚犯）密切、攻击性或正式地提问。" +
            "<br><br>" +
            "(A) '表扬' 意味着表达温暖的赞同或钦佩。" +
            "<br><br>" +
            "(B) '结交' 意味着通过提供帮助或支持与（某人）做朋友。" +
            "<br><br>" +
            "(C) '奉承' 意味着对（某人）给予虚伪的赞美和恭维，特别是为了进一步自己的利益。"
    },
    {
        id: 2,
        question: "It is unethical to __________ someone else's work and present it as your own without proper credit.",
        chinese_question: "未经适当致谢就 __________ 他人的作品并将其作为自己的作品发表是不道德的。",
        answers: [
            { option: "A", answer: "acknowledge", chinese_answer: "承认", chinese_romanization: "chéngrèn" },
            { option: "B", answer: "plagiarize", chinese_answer: "抄袭", chinese_romanization: "chāoxí" },
            { option: "C", answer: "create", chinese_answer: "创作", chinese_romanization: "chuàngzuò" },
            { option: "D", answer: "verify", chinese_answer: "验证", chinese_romanization: "yànzhèng" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'plagiarize' means take (the work or an idea of someone else) and pass it off as one's own." +
            "<br><br>" +
            "(A) 'acknowledge' means accept or admit the existence or truth of." +
            "<br><br>" +
            "(C) 'create' means bring (something) into existence." +
            "<br><br>" +
            "(D) 'verify' means make sure or demonstrate that (something) is true, accurate, or justified.",
        chinese_explanation: "(B) '抄袭' 一词意味着把（他人的作品或想法）作为自己的发表。" +
            "<br><br>" +
            "(A) '承认' 意味着接受或承认...的存在或真实性。" +
            "<br><br>" +
            "(C) '创作' 意味着将（某物）带入存在。" +
            "<br><br>" +
            "(D) '验证' 意味着确保或证明（某事）是真实、准确或正当的。"
    },
    {
        id: 3,
        question: "Without proper shelter and supplies, the explorers were at risk of __________ in the harsh conditions of the wilderness.",
        chinese_question: "没有适当的住所和补给，探险者们在荒野恶劣的条件下有 __________ 的风险。",
        answers: [
            { option: "A", answer: "thriving", chinese_answer: "繁荣", chinese_romanization: "fánróng" },
            { option: "B", answer: "surviving", chinese_answer: "生存", chinese_romanization: "shēngcún" },
            { option: "C", answer: "perishing", chinese_answer: "死亡", chinese_romanization: "sǐwáng" },
            { option: "D", answer: "enduring", chinese_answer: "忍耐", chinese_romanization: "rěnnài" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'perishing' means die, especially in a violent or sudden way." +
            "<br><br>" +
            "(A) 'thriving' means grow or develop well or vigorously." +
            "<br><br>" +
            "(B) 'surviving' means continue to live or exist, especially in spite of danger or hardship." +
            "<br><br>" +
            "(D) 'enduring' means suffer (something painful or difficult) patiently.",
        chinese_explanation: "(C) '死亡' 一词意味着死亡，尤其是以暴力或突然的方式。" +
            "<br><br>" +
            "(A) '繁荣' 意味着生长或发展良好或蓬勃。" +
            "<br><br>" +
            "(B) '生存' 意味着继续生活或存在，尤其是在面对危险或困难时。" +
            "<br><br>" +
            "(D) '忍耐' 意味着耐心地忍受（某些痛苦或困难）。"
    },
    {
        id: 4,
        question: "The author decided to __________ her memoir in a series of podcasts, sharing her life story in her own voice.",
        chinese_question: "作者决定通过一系列播客 __________ 她的回忆录，用她自己的声音讲述她的生活故事。",
        answers: [
            { option: "A", answer: "suppress", chinese_answer: "压制", chinese_romanization: "yāzhì" },
            { option: "B", answer: "simplify", chinese_answer: "简化", chinese_romanization: "jiǎnhuà" },
            { option: "C", answer: "condense", chinese_answer: "浓缩", chinese_romanization: "nóngsuō" },
            { option: "D", answer: "narrate", chinese_answer: "讲述", chinese_romanization: "jiǎngshù" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'narrate' means give a spoken or written account of." +
            "<br><br>" +
            "(A) 'suppress' means forcibly put an end to." +
            "<br><br>" +
            "(B) 'simplify' means make (something) simpler or easier to do or understand." +
            "<br><br>" +
            "(C) 'condense' means make (something) denser or more concentrated.",
        chinese_explanation: "(D) '讲述' 一词意味着给出口头或书面的叙述。" +
            "<br><br>" +
            "(A) '压制' 意味着强行结束。" +
            "<br><br>" +
            "(B) '简化' 意味着使（某事）更简单或更容易做或理解。" +
            "<br><br>" +
            "(C) '浓缩' 意味着使（某物）更浓密或更集中。"
    },
    {
        id: 5,
        question: "Despite their repeated offers, he __________ their help, determined to solve the problem on his own.",
        chinese_question: "尽管他们一再提供帮助，他仍然 __________ 他们的帮助，决心自己解决问题。",
        answers: [
            { option: "A", answer: "accepted", chinese_answer: "接受", chinese_romanization: "jiēshòu" },
            { option: "B", answer: "embraced", chinese_answer: "拥抱", chinese_romanization: "yōngbào" },
            { option: "C", answer: "rebuffed", chinese_answer: "拒绝", chinese_romanization: "jùjué" },
            { option: "D", answer: "welcomed", chinese_answer: "欢迎", chinese_romanization: "huānyíng" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'rebuffed' means reject (someone or something) in an abrupt or ungracious manner." +
            "<br><br>" +
            "(A) 'accepted' means consent to receive (a thing offered)." +
            "<br><br>" +
            "(B) 'embraced' means hold (someone) closely in one's arms, especially as a sign of affection." +
            "<br><br>" +
            "(D) 'welcomed' means greet (someone arriving) in a glad, polite, or friendly way.",
        chinese_explanation: "(C) '拒绝' 一词意味着以突然或无礼的方式拒绝（某人或某事）。" +
            "<br><br>" +
            "(A) '接受' 意味着同意接收（提供的东西）。" +
            "<br><br>" +
            "(B) '拥抱' 意味着紧紧地抱住（某人），尤其是作为爱的表示。" +
            "<br><br>" +
            "(D) '欢迎' 意味着以愉快、礼貌或友好的方式迎接（某人到来）。"
    },
    {
        id: 6,
        question: "The teacher __________ the student for his disrespectful behaviour in class, reminding him of the importance of manners.",
        chinese_question: "老师 __________ 学生在课堂上的不尊重行为，提醒他礼貌的重要性。",
        answers: [
            { option: "A", answer: "praised", chinese_answer: "赞扬", chinese_romanization: "zànyáng" },
            { option: "B", answer: "encouraged", chinese_answer: "鼓励", chinese_romanization: "gǔlì" },
            { option: "C", answer: "rewarded", chinese_answer: "奖励", chinese_romanization: "jiǎnglì" },
            { option: "D", answer: "rebuked", chinese_answer: "训斥", chinese_romanization: "xùnchì" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'rebuked' means express sharp disapproval or criticism of (someone) because of their behavior or actions." +
            "<br><br>" +
            "(A) 'praised' means express warm approval or admiration of." +
            "<br><br>" +
            "(B) 'encouraged' means give support, confidence, or hope to (someone)." +
            "<br><br>" +
            "(C) 'rewarded' means give something to (someone) in recognition of their services, efforts, or achievements.",
        chinese_explanation: "(D) '训斥' 一词意味着因为某人的行为或行动表达尖锐的不赞成或批评。" +
            "<br><br>" +
            "(A) '赞扬' 意味着表达温暖的赞同或钦佩。" +
            "<br><br>" +
            "(B) '鼓励' 意味着给（某人）支持、信心或希望。" +
            "<br><br>" +
            "(C) '奖励' 意味着给予（某人）某物以表彰其服务、努力或成就。"
    },
    {
        id: 7,
        question: "The sound of the explosion __________ through the valley, startling the nearby residents and wildlife.",
        chinese_question: "爆炸声在山谷中 __________，惊动了附近的居民和野生动物。",
        answers: [
            { option: "A", answer: "silenced", chinese_answer: "静音", chinese_romanization: "jìngyīn" },
            { option: "B", answer: "reverberated", chinese_answer: "回响", chinese_romanization: "huíxiǎng" },
            { option: "C", answer: "stopped", chinese_answer: "停止", chinese_romanization: "tíngzhǐ" },
            { option: "D", answer: "muted", chinese_answer: "静音", chinese_romanization: "jìngyīn" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'reverberated' means (of a loud noise) be repeated several times as an echo." +
            "<br><br>" +
            "(A) 'silenced' means make (someone or something) unable to speak, make a noise, or be heard." +
            "<br><br>" +
            "(C) 'stopped' means (of an event, action, or process) come to an end; cease to happen." +
            "<br><br>" +
            "(D) 'muted' means (of a sound or voice) quiet and soft.",
        chinese_explanation: "(B) '回响' 一词意味着（响亮的噪音）作为回声重复几次。" +
            "<br><br>" +
            "(A) '静音' 意味着使（某人或某物）无法说话、发出声音或被听到。" +
            "<br><br>" +
            "(C) '停止' 意味着（事件、行动或过程）结束；停止发生。" +
            "<br><br>" +
            "(D) '静音' 意味着（声音或声音）安静且柔和。"
    },
    {
        id: 8,
        question: "To ensure the accuracy of the data, the researcher had to __________ the results through multiple tests and comparisons.",
        chinese_question: "为了确保数据的准确性，研究人员必须通过多次测试和比较来 __________ 结果。",
        answers: [
            { option: "A", answer: "invalidate", chinese_answer: "使无效", chinese_romanization: "shǐ wúxiào" },
            { option: "B", answer: "validate", chinese_answer: "验证", chinese_romanization: "yànzhèng" },
            { option: "C", answer: "overlook", chinese_answer: "忽略", chinese_romanization: "hūlüè" },
            { option: "D", answer: "dispute", chinese_answer: "争论", chinese_romanization: "zhēnglùn" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'validate' means check or prove the validity or accuracy of." +
            "<br><br>" +
            "(A) 'invalidate' means make (an argument, statement, or theory) unsound or erroneous." +
            "<br><br>" +
            "(C) 'overlook' means fail to notice (something)." +
            "<br><br>" +
            "(D) 'dispute' means argue about (something); discuss heatedly.",
        chinese_explanation: "(B) '验证' 一词意味着检查或证明的有效性或准确性。" +
            "<br><br>" +
            "(A) '使无效' 意味着使（论点、陈述或理论）不成立或错误。" +
            "<br><br>" +
            "(C) '忽略' 意味着未能注意到（某事）。" +
            "<br><br>" +
            "(D) '争论' 意味着争论（某事）；激烈讨论。"
    },
    {
        id: 9,
        question: "The company's ability to __________ has kept it at the forefront of the technology industry.",
        chinese_question: "公司 __________ 的能力使其在科技行业保持领先地位。",
        answers: [
            { option: "A", answer: "innovate", chinese_answer: "创新", chinese_romanization: "chuàngxīn" },
            { option: "B", answer: "copy", chinese_answer: "模仿", chinese_romanization: "mófǎng" },
            { option: "C", answer: "maintain", chinese_answer: "维持", chinese_romanization: "wéichí" },
            { option: "D", answer: "stagnate", chinese_answer: "停滞", chinese_romanization: "tíngzhì" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'innovate' means make changes in something established, especially by introducing new methods, ideas, or products." +
            "<br><br>" +
            "(B) 'copy' means make a similar or identical version of." +
            "<br><br>" +
            "(C) 'maintain' means keep (something) at the same level or rate." +
            "<br><br>" +
            "(D) 'stagnate' means cease to flow or move; become stagnant.",
        chinese_explanation: "(A) '创新' 意味着对现有事物进行变革，特别是通过引入新方法、想法或产品。" +
            "<br><br>" +
            "(B) '模仿' 意味着制作相似或相同的版本。" +
            "<br><br>" +
            "(C) '维持' 意味着保持（某物）在同一水平或速度。" +
            "<br><br>" +
            "(D) '停滞' 意味着停止流动或移动；变得停滞。"
    },
    {
        id: 10,
        question: "The scientist used a powerful flashlight to __________ the dark cave, revealing ancient paintings on the walls.",
        chinese_question: "科学家用强力手电筒 __________ 黑暗的洞穴，显露出墙上的古代壁画。",
        answers: [
            { option: "A", answer: "obscure", chinese_answer: "遮蔽", chinese_romanization: "zhēbì" },
            { option: "B", answer: "darken", chinese_answer: "使变暗", chinese_romanization: "shǐ biàn àn" },
            { option: "C", answer: "illuminate", chinese_answer: "照亮", chinese_romanization: "zhàoliàng" },
            { option: "D", answer: "hide", chinese_answer: "隐藏", chinese_romanization: "yǐncáng" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'illuminate' means light up." +
            "<br><br>" +
            "(A) 'obscure' means keep from being seen; conceal." +
            "<br><br>" +
            "(B) 'darken' means make or become dark or darker." +
            "<br><br>" +
            "(D) 'hide' means put or keep out of sight.",
        chinese_explanation: "(C) '照亮' 意味着点亮。" +
            "<br><br>" +
            "(A) '遮蔽' 意味着不让看到；隐藏。" +
            "<br><br>" +
            "(B) '使变暗' 意味着使变暗或变暗。" +
            "<br><br>" +
            "(D) '隐藏' 意味着把某物藏起来或使看不见。"
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
