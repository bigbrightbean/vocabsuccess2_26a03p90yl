// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "His writing style was so __________ that it was hard to understand his main points.",
        chinese_question: "他的写作风格 __________，很难理解他的主要观点。",
        answers: [
            { option: "A", answer: "clear", chinese_answer: "清晰", chinese_romanization: "qīngxī" },
            { option: "B", answer: "simple", chinese_answer: "简单", chinese_romanization: "jiǎndān" },
            { option: "C", answer: "dense", chinese_answer: "复杂", chinese_romanization: "fùzá" },
            { option: "D", answer: "straightforward", chinese_answer: "直率", chinese_romanization: "zhíshuài" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'dense' means hard to understand because of complexity of ideas." +
            "<br><br>" +
            "(A) 'clear' means easy to perceive, understand, or interpret." +
            "<br><br>" +
            "(B) 'simple' means easily understood or done; presenting no difficulty." +
            "<br><br>" +
            "(D) 'straightforward' means uncomplicated and easy to do or understand.",
        chinese_explanation: "(C) '复杂' 意味着由于思想的复杂性而难以理解。" +
            "<br><br>" +
            "(A) '清晰' 意味着容易察觉、理解或解释。" +
            "<br><br>" +
            "(B) '简单' 意味着容易理解或完成；没有困难。" +
            "<br><br>" +
            "(D) '直率' 意味着简单和容易做或理解。"
    },
    {
        id: 2,
        question: "The __________ reality of the situation hit him hard.",
        chinese_question: "现实的 __________ 让他很难接受。",
        answers: [
            { option: "A", answer: "harsh", chinese_answer: "残酷的", chinese_romanization: "cánkù de" },
            { option: "B", answer: "sweet", chinese_answer: "甜美的", chinese_romanization: "tiánměi de" },
            { option: "C", answer: "pleasant", chinese_answer: "愉快的", chinese_romanization: "yúkuài de" },
            { option: "D", answer: "mild", chinese_answer: "温和的", chinese_romanization: "wēnhé de" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'harsh' metaphorically means cruel or severe." +
            "<br><br>" +
            "(B) 'sweet' means pleasing in general; delightful." +
            "<br><br>" +
            "(C) 'pleasant' means giving a sense of happy satisfaction or enjoyment." +
            "<br><br>" +
            "(D) 'mild' means not severe, serious, or harsh.",
        chinese_explanation: "(A) '残酷的' 比喻残酷或严厉的。" +
            "<br><br>" +
            "(B) '甜美的' 意味着总体上令人愉快的；令人高兴的。" +
            "<br><br>" +
            "(C) '愉快的' 意味着给人快乐的满足感或享受。" +
            "<br><br>" +
            "(D) '温和的' 意味着不严厉、严重或严酷的。"
    },
    {
        id: 3,
        question: "Her performance was __________, captivating the entire audience.",
        chinese_question: "她的表演 __________，吸引了全场观众。",
        answers: [
            { option: "A", answer: "brilliant", chinese_answer: "出色的", chinese_romanization: "chūsè de" },
            { option: "B", answer: "mediocre", chinese_answer: "平庸的", chinese_romanization: "píngyōng de" },
            { option: "C", answer: "uninspiring", chinese_answer: "无聊的", chinese_romanization: "wúliáo de" },
            { option: "D", answer: "average", chinese_answer: "普通的", chinese_romanization: "pǔtōng de" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'brilliant' metaphorically means outstanding or impressive." +
            "<br><br>" +
            "(B) 'mediocre' means of only moderate quality; not very good." +
            "<br><br>" +
            "(C) 'uninspiring' means not producing excitement or interest." +
            "<br><br>" +
            "(D) 'average' means having qualities that are seen as typical of a particular person or thing.",
        chinese_explanation: "(A) '出色的' 比喻杰出或令人印象深刻的。" +
            "<br><br>" +
            "(B) '平庸的' 意味着质量只是中等的；不是很好。" +
            "<br><br>" +
            "(C) '无聊的' 意味着不产生兴奋或兴趣的。" +
            "<br><br>" +
            "(D) '普通的' 意味着具有某人或某物的典型品质。"
    },
    {
        id: 4,
        question: "She was very __________ about her plans, not wanting to draw too much attention until everything was finalized.",
        chinese_question: "她对自己的计划非常 __________，不想在一切都敲定之前引起太多注意。",
        answers: [
            { option: "A", answer: "careless", chinese_answer: "粗心的", chinese_romanization: "cūxīn de" },
            { option: "B", answer: "discreet", chinese_answer: "谨慎的", chinese_romanization: "jǐnshèn de" },
            { option: "C", answer: "blatant", chinese_answer: "公然的", chinese_romanization: "gōngrán de" },
            { option: "D", answer: "reckless", chinese_answer: "鲁莽的", chinese_romanization: "lǔmǎng de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'discreet' means careful and circumspect in one's speech or actions, especially in order to avoid causing offense or to gain an advantage." +
            "<br><br>" +
            "(A) 'careless' means not giving sufficient attention or thought to avoiding harm or errors." +
            "<br><br>" +
            "(C) 'blatant' means done openly and unashamedly." +
            "<br><br>" +
            "(D) 'reckless' means without thinking or caring about the consequences of an action.",
        chinese_explanation: "(B) '谨慎的' 意味着在说话或行动上小心谨慎，尤其是为了避免冒犯或获得优势。" +
            "<br><br>" +
            "(A) '粗心的' 意味着没有给予足够的注意或思考以避免伤害或错误。" +
            "<br><br>" +
            "(C) '公然的' 意味着公开而毫不羞耻地进行的。" +
            "<br><br>" +
            "(D) '鲁莽的' 意味着不考虑或不在乎行动的后果。"
    },
    {
        id: 5,
        question: "The athlete won three __________ gold medals in the annual championships, showcasing her consistent performance.",
        chinese_question: "这位运动员在年度锦标赛中连续赢得了三枚 __________ 的金牌，展示了她的稳定表现。",
        answers: [
            { option: "A", answer: "consecutive", chinese_answer: "连续的", chinese_romanization: "liánxù de" },
            { option: "B", answer: "sporadic", chinese_answer: "零星的", chinese_romanization: "língxīng de" },
            { option: "C", answer: "random", chinese_answer: "随机的", chinese_romanization: "suíjī de" },
            { option: "D", answer: "irregular", chinese_answer: "不规则的", chinese_romanization: "bù guīzé de" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'consecutive' means following continuously in an unbroken or logical sequence." +
            "<br><br>" +
            "(B) 'sporadic' means occurring at irregular intervals or only in a few places; scattered or isolated." +
            "<br><br>" +
            "(C) 'random' means made, done, happening, or chosen without method or conscious decision." +
            "<br><br>" +
            "(D) 'irregular' means not even or balanced in shape or arrangement.",
        chinese_explanation: "(A) '连续的' 意味着连续不断或按逻辑顺序进行的。" +
            "<br><br>" +
            "(B) '零星的' 意味着不定期发生的或仅在少数地方发生的；分散的或孤立的。" +
            "<br><br>" +
            "(C) '随机的' 意味着没有方法或有意识决定的。" +
            "<br><br>" +
            "(D) '不规则的' 意味着形状或排列不均衡的。"
    },
    {
        id: 6,
        question: "Her __________ manipulation of her friends made them think she was trustworthy, while she was actually using them for her own gain.",
        chinese_question: "她对朋友的 __________ 操控让他们以为她是值得信任的，实际上她是在利用他们为自己谋利。",
        answers: [
            { option: "A", answer: "honest", chinese_answer: "诚实的", chinese_romanization: "chéngshí de" },
            { option: "B", answer: "transparent", chinese_answer: "透明的", chinese_romanization: "tòumíng de" },
            { option: "C", answer: "obvious", chinese_answer: "明显的", chinese_romanization: "míngxiǎn de" },
            { option: "D", answer: "insidious", chinese_answer: "隐伏的", chinese_romanization: "yǐnfú de" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'insidious' means proceeding in a gradual, subtle way, but with harmful effects." +
            "<br><br>" +
            "(A) 'honest' means free of deceit; truthful and sincere." +
            "<br><br>" +
            "(B) 'transparent' means easy to perceive or detect." +
            "<br><br>" +
            "(C) 'obvious' means easily perceived or understood; clear, self-evident, or apparent.",
        chinese_explanation: "(D) '隐伏的' 意味着以渐进、微妙的方式进行，但有害的。" +
            "<br><br>" +
            "(A) '诚实的' 意味着没有欺骗的；真实和真诚的。" +
            "<br><br>" +
            "(B) '透明的' 意味着容易察觉或发现的。" +
            "<br><br>" +
            "(C) '明显的' 意味着容易察觉或理解的；清晰、自明或显而易见的。"
    },
    {
        id: 7,
        question: "The __________ march of time ensures that everyone will eventually grow older, regardless of their desires.",
        chinese_question: "时间的 __________ 前进确保每个人最终都会变老，无论他们的愿望如何。",
        answers: [
            { option: "A", answer: "flexible", chinese_answer: "灵活的", chinese_romanization: "línghuó de" },
            { option: "B", answer: "merciful", chinese_answer: "仁慈的", chinese_romanization: "réncí de" },
            { option: "C", answer: "hesitant", chinese_answer: "犹豫的", chinese_romanization: "yóuyù de" },
            { option: "D", answer: "inexorable", chinese_answer: "不可阻挡的", chinese_romanization: "bùkě zǔdǎng de" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'inexorable' means impossible to stop or prevent." +
            "<br><br>" +
            "(A) 'flexible' means capable of bending easily without breaking." +
            "<br><br>" +
            "(B) 'merciful' means showing or exercising mercy." +
            "<br><br>" +
            "(C) 'hesitant' means tentative, unsure, or slow in acting or speaking.",
        chinese_explanation: "(D) '不可阻挡的' 意味着无法停止或防止的。" +
            "<br><br>" +
            "(A) '灵活的' 意味着能够轻松弯曲而不断裂的。" +
            "<br><br>" +
            "(B) '仁慈的' 意味着表现出或施予仁慈的。" +
            "<br><br>" +
            "(C) '犹豫的' 意味着在行动或讲话时犹豫不决、不确定或缓慢的。"
    },
    {
        id: 8,
        question: "The small town had a __________ quality that made visitors feel right at home.",
        chinese_question: "这个小镇具有一种__________的特质，让游客感到宾至如归。",
        answers: [
            { option: "A", answer: "rude", chinese_answer: "粗鲁的", chinese_romanization: "cūlǔ de" },
            { option: "B", answer: "hostile", chinese_answer: "敌对的", chinese_romanization: "díduì de" },
            { option: "C", answer: "charming", chinese_answer: "迷人的", chinese_romanization: "mí rén de" },
            { option: "D", answer: "unpleasant", chinese_answer: "令人不愉快的", chinese_romanization: "lìng rén bù yúkuài de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'charming' means pleasant or attractive. Figuratively, it can mean having an inviting and delightful atmosphere." +
            "<br><br>" +
            "(A) 'rude' means offensively impolite or ill-mannered." +
            "<br><br>" +
            "(B) 'hostile' means unfriendly; antagonistic." +
            "<br><br>" +
            "(D) 'unpleasant' means causing discomfort, unhappiness, or revulsion; disagreeable.",
        chinese_explanation: "(C) '迷人的'一词意味着令人愉快或有吸引力的。比喻地，它可以表示具有吸引人和令人愉快的氛围。" +
            "<br><br>" +
            "(A) '粗鲁的' 意味着冒犯性的不礼貌或没有礼貌的。" +
            "<br><br>" +
            "(B) '敌对的' 意味着不友好；敌对的。" +
            "<br><br>" +
            "(D) '令人不愉快的' 意味着引起不适、痛苦或反感的；令人不快的。"
    },
    {
        id: 9,
        question: "The jury found the defendant __________ of all charges, and he was set free.",
        chinese_question: "陪审团发现被告对所有指控都 __________，于是他被释放了。",
        answers: [
            { option: "A", answer: "guilty", chinese_answer: "有罪", chinese_romanization: "yǒuzuì" },
            { option: "B", answer: "culpable", chinese_answer: "应受责备", chinese_romanization: "yīng shòu zébèi" },
            { option: "C", answer: "innocent", chinese_answer: "无辜", chinese_romanization: "wúgū" },
            { option: "D", answer: "responsible", chinese_answer: "负责", chinese_romanization: "fùzé" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'innocent' means not guilty of a crime or offense." +
            "<br><br>" +
            "(A) 'guilty' means responsible for a specified wrongdoing." +
            "<br><br>" +
            "(B) 'culpable' means deserving blame." +
            "<br><br>" +
            "(D) 'responsible' means having an obligation to do something as part of a job or role.",
        chinese_explanation: "(C) '无辜' 意味着没有犯罪或罪行。" +
            "<br><br>" +
            "(A) '有罪' 意味着对指定的错误行为负责。" +
            "<br><br>" +
            "(B) '应受责备' 意味着应受责备。" +
            "<br><br>" +
            "(D) '负责' 意味着有义务做某事作为工作或角色的一部分。"
    },
    {
        id: 10,
        question: "The __________ actor captivated the audience with his lively performance and boundless enthusiasm on stage.",
        chinese_question: "这位 __________ 的演员以他充满活力的表演和无尽的热情吸引了观众。",
        answers: [
            { option: "A", answer: "apathetic", chinese_answer: "冷漠的", chinese_romanization: "lěngmò de" },
            { option: "B", answer: "lethargic", chinese_answer: "昏昏欲睡的", chinese_romanization: "hūnhūn yùshuì de" },
            { option: "C", answer: "disinterested", chinese_answer: "不感兴趣的", chinese_romanization: "bù gǎn xìngqù de" },
            { option: "D", answer: "ebullient", chinese_answer: "热情洋溢的", chinese_romanization: "rèqíng yángyì de" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'ebullient' means cheerful and full of energy." +
            "<br><br>" +
            "(A) 'apathetic' means showing or feeling no interest, enthusiasm, or concern." +
            "<br><br>" +
            "(B) 'lethargic' means affected by lethargy; sluggish and apathetic." +
            "<br><br>" +
            "(C) 'disinterested' means not influenced by considerations of personal advantage.",
        chinese_explanation: "(D) '热情洋溢的' 意味着充满活力和热情的。" +
            "<br><br>" +
            "(A) '冷漠的' 意味着没有兴趣、热情或关心的。" +
            "<br><br>" +
            "(B) '昏昏欲睡的' 意味着受嗜睡影响的；迟钝和冷漠的。" +
            "<br><br>" +
            "(C) '不感兴趣的' 意味着不受个人利益考虑影响的。"
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
