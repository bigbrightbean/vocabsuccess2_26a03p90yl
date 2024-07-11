// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "Her bright red coat made her __________ in the crowd, easily noticeable from a distance.",
        chinese_question: "她那件鲜红色的大衣使她在人群中显得 __________，从远处就能轻松看到。",
        answers: [
            { option: "A", answer: "conspicuous", chinese_answer: "显眼的", chinese_romanization: "xiǎnyǎn de" },
            { option: "B", answer: "hidden", chinese_answer: "隐藏的", chinese_romanization: "yǐncáng de" },
            { option: "C", answer: "subtle", chinese_answer: "微妙的", chinese_romanization: "wéimiào de" },
            { option: "D", answer: "invisible", chinese_answer: "隐形的", chinese_romanization: "yǐnxíng de" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'conspicuous' means standing out so as to be clearly visible." +
            "<br><br>" +
            "(B) 'hidden' means kept out of sight; concealed." +
            "<br><br>" +
            "(C) 'subtle' means so delicate or precise as to be difficult to analyze or describe." +
            "<br><br>" +
            "(D) 'invisible' means unable to be seen.",
        chinese_explanation: "(A) '显眼的' 意味着突出的，以至于清晰可见的。" +
            "<br><br>" +
            "(B) '隐藏的' 意味着隐藏的；看不见的。" +
            "<br><br>" +
            "(C) '微妙的' 意味着如此精细或精确，以至于难以分析或描述的。" +
            "<br><br>" +
            "(D) '隐形的' 意味着无法看到的。"
    },
    {
        id: 2,
        question: "Her singing was __________, making the audience cover their ears in pain.",
        chinese_question: "她的歌声 __________，让观众捂住耳朵，痛苦不堪。",
        answers: [
            { option: "A", answer: "awful", chinese_answer: "糟糕的", chinese_romanization: "zāogāo de" },
            { option: "B", answer: "beautiful", chinese_answer: "美丽的", chinese_romanization: "měilì de" },
            { option: "C", answer: "pleasant", chinese_answer: "愉快的", chinese_romanization: "yúkuài de" },
            { option: "D", answer: "inspiring", chinese_answer: "激励人心的", chinese_romanization: "jīlì rén xīn de" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'awful' means very bad or unpleasant." +
            "<br><br>" +
            "(B) 'beautiful' means pleasing the senses or mind aesthetically." +
            "<br><br>" +
            "(C) 'pleasant' means enjoyable or nice." +
            "<br><br>" +
            "(D) 'inspiring' means giving someone the desire to do or create something.",
        chinese_explanation: "(A) '糟糕的' 意味着非常糟糕或不愉快。" +
            "<br><br>" +
            "(B) '美丽的' 意味着美学上愉悦感官或心灵的。" +
            "<br><br>" +
            "(C) '愉快的' 意味着令人愉快或美好的。" +
            "<br><br>" +
            "(D) '激励人心的' 意味着给予某人想要做或创造某物的愿望。"
    },
    {
        id: 3,
        question: "In order to meet the deadline, the company took the __________ step of outsourcing some of its work, despite concerns about quality.",
        chinese_question: "为了赶上最后期限，公司采取了 __________ 的步骤，将部分工作外包，尽管存在质量问题的担忧。",
        answers: [
            { option: "A", answer: "inefficient", chinese_answer: "低效的", chinese_romanization: "dīxiào de" },
            { option: "B", answer: "unnecessary", chinese_answer: "不必要的", chinese_romanization: "bù bìyào de" },
            { option: "C", answer: "ideal", chinese_answer: "理想的", chinese_romanization: "lǐxiǎng de" },
            { option: "D", answer: "expedient", chinese_answer: "权宜的", chinese_romanization: "quányí de" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'expedient' means suitable for achieving a particular end in a given circumstance." +
            "<br><br>" +
            "(A) 'inefficient' means not achieving maximum productivity; wasting or failing to make the best use of time or resources." +
            "<br><br>" +
            "(B) 'unnecessary' means not needed." +
            "<br><br>" +
            "(C) 'ideal' means most suitable.",
        chinese_explanation: "(D) '权宜的' 意味着适合在给定情况下实现特定目的的。" +
            "<br><br>" +
            "(A) '低效的' 意味着没有达到最大生产力；浪费或未能充分利用时间或资源。" +
            "<br><br>" +
            "(B) '不必要的' 意味着不需要的。" +
            "<br><br>" +
            "(C) '理想的' 意味着最合适的。"
    },
    {
        id: 4,
        question: "The __________ traveler missed his flight, lost his luggage, and was pickpocketed all in the same day.",
        chinese_question: "这位 __________ 的旅行者同一天错过了航班，丢了行李，还被扒手偷了。",
        answers: [
            { option: "A", answer: "fortunate", chinese_answer: "幸运的", chinese_romanization: "xìngyùn de" },
            { option: "B", answer: "careful", chinese_answer: "小心的", chinese_romanization: "xiǎoxīn de" },
            { option: "C", answer: "cautious", chinese_answer: "谨慎的", chinese_romanization: "jǐnshèn de" },
            { option: "D", answer: "hapless", chinese_answer: "不幸的", chinese_romanization: "bùxìng de" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'hapless' means unfortunate or unlucky." +
            "<br><br>" +
            "(A) 'fortunate' means favored by or involving good luck or fortune." +
            "<br><br>" +
            "(B) 'careful' means making sure of avoiding potential danger, mishap, or harm; cautious." +
            "<br><br>" +
            "(C) 'cautious' means (of a person) careful to avoid potential problems or dangers.",
        chinese_explanation: "(D) '不幸的' 意味着不幸或倒霉的。" +
            "<br><br>" +
            "(A) '幸运的' 意味着受好运或幸运眷顾的。" +
            "<br><br>" +
            "(B) '小心的' 意味着确保避免潜在危险、意外或伤害的；谨慎的。" +
            "<br><br>" +
            "(C) '谨慎的' 意味着（人）小心避免潜在问题或危险的。"
    },
    {
        id: 5,
        question: "There are __________ reasons why she decided to move to a new city, including the pursuit of better career opportunities and a desire for a fresh start in life.",
        chinese_question: "有 __________ 原因促使她决定搬到一个新城市，包括追求更好的职业机会和渴望在生活中有一个新的开始。",
        answers: [
            { option: "A", answer: "few", chinese_answer: "很少的", chinese_romanization: "hěn shǎo de" },
            { option: "B", answer: "numerous", chinese_answer: "众多的", chinese_romanization: "zhòngduō de" },
            { option: "C", answer: "rare", chinese_answer: "稀有的", chinese_romanization: "xīyǒu de" },
            { option: "D", answer: "limited", chinese_answer: "有限的", chinese_romanization: "yǒuxiàn de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'numerous' means great in number; many." +
            "<br><br>" +
            "(A) 'few' means a small number of." +
            "<br><br>" +
            "(C) 'rare' means not occurring very often." +
            "<br><br>" +
            "(D) 'limited' means restricted in size, amount, or extent.",
        chinese_explanation: "(B) '众多的' 意味着数量很多的；许多的。" +
            "<br><br>" +
            "(A) '很少的' 意味着数量很少的。" +
            "<br><br>" +
            "(C) '稀有的' 意味着不经常发生的。" +
            "<br><br>" +
            "(D) '有限的' 意味着在大小、数量或程度上有限的。"
    },
    {
        id: 6,
        question: "Her __________ remarks during the debate won her a lot of supporters.",
        chinese_question: "她在辩论中的 __________ 言辞为她赢得了许多支持者。",
        answers: [
            { option: "A", answer: "clever", chinese_answer: "聪明的", chinese_romanization: "cōngmíng de" },
            { option: "B", answer: "vague", chinese_answer: "模糊的", chinese_romanization: "móhú de" },
            { option: "C", answer: "unclear", chinese_answer: "不清楚的", chinese_romanization: "bù qīngchǔ de" },
            { option: "D", answer: "uninformed", chinese_answer: "无知的", chinese_romanization: "wúzhī de" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'clever' metaphorically means showing skill and creativity in problem-solving or expressing ideas." +
            "<br><br>" +
            "(B) 'vague' means of uncertain, indefinite, or unclear character or meaning." +
            "<br><br>" +
            "(C) 'unclear' means not easy to see, hear, or understand." +
            "<br><br>" +
            "(D) 'uninformed' means not having or showing awareness or understanding of the facts.",
        chinese_explanation: "(A) '聪明的' 比喻在解决问题或表达想法时表现出技巧和创造力。" +
            "<br><br>" +
            "(B) '模糊的' 意味着不确定、不明确或含糊不清的特性或含义。" +
            "<br><br>" +
            "(C) '不清楚的' 意味着不容易看到、听到或理解的。" +
            "<br><br>" +
            "(D) '无知的' 意味着没有或没有显示出对事实的认识或理解。"
    },
    {
        id: 7,
        question: "He always felt a sense of __________ when he pondered the mysteries of the universe.",
        chinese_question: "每当他思考宇宙的奥秘时，总是感到一种__________。",
        answers: [
            { option: "A", answer: "indifference", chinese_answer: "冷漠", chinese_romanization: "lěngmò" },
            { option: "B", answer: "wonder", chinese_answer: "惊叹", chinese_romanization: "jīngtàn" },
            { option: "C", answer: "boredom", chinese_answer: "无聊", chinese_romanization: "wúliáo" },
            { option: "D", answer: "contempt", chinese_answer: "轻视", chinese_romanization: "qīngshì" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'wonder' means a feeling of amazement and admiration, caused by something beautiful, remarkable, or unfamiliar. Figuratively, it can mean a deep sense of curiosity and amazement." +
            "<br><br>" +
            "(A) 'indifference' means lack of interest, concern, or sympathy." +
            "<br><br>" +
            "(C) 'boredom' means the state of feeling bored." +
            "<br><br>" +
            "(D) 'contempt' means the feeling that a person or a thing is beneath consideration, worthless, or deserving scorn.",
        chinese_explanation: "(B) '惊叹'一词意味着因某物的美丽、非凡或陌生而产生的惊讶和钦佩的感觉。比喻地，它可以表示深深的好奇心和惊奇。" +
            "<br><br>" +
            "(A) '冷漠' 意味着缺乏兴趣、关心或同情。" +
            "<br><br>" +
            "(C) '无聊' 意味着感到无聊的状态。" +
            "<br><br>" +
            "(D) '轻视' 意味着认为一个人或一件事不值得考虑、无价值或值得鄙视的感觉。"
    },
    {
        id: 8,
        question: "To solve this issue, we need to come up with a __________ plan that can be executed effectively.",
        chinese_question: "为了解决这个问题，我们需要制定一个__________的计划，以便有效地执行。",
        answers: [
            { option: "A", answer: "unrealistic", chinese_answer: "不切实际的", chinese_romanization: "bùqiè shíjì de" },
            { option: "B", answer: "fantastical", chinese_answer: "幻想的", chinese_romanization: "huànxiǎng de" },
            { option: "C", answer: "realistic", chinese_answer: "现实的", chinese_romanization: "xiànshí de" },
            { option: "D", answer: "imaginative", chinese_answer: "富有想象力的", chinese_romanization: "fùyǒu xiǎngxiàng lì de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'realistic' means having or showing a sensible and practical idea of what can be achieved or expected. Figuratively, it can mean creating a plan that is achievable and practical." +
            "<br><br>" +
            "(A) 'unrealistic' means not having a sensible or practical idea of what is achievable." +
            "<br><br>" +
            "(B) 'fantastical' means conceived by unrestrained fancy; not real." +
            "<br><br>" +
            "(D) 'imaginative' means having or showing creativity or inventiveness.",
        chinese_explanation: "(C) '现实的'一词意味着对能够实现或预期的事情有合理和实用的想法。比喻地，它可以表示创建一个可实现和实用的计划。" +
            "<br><br>" +
            "(A) '不切实际的' 意味着没有合理或实际的想法。" +
            "<br><br>" +
            "(B) '幻想的' 意味着由不受限制的幻想构思的；不真实的。" +
            "<br><br>" +
            "(D) '富有想象力的' 意味着有创造力或创造力的表现。"
    },
    {
        id: 9,
        question: "Her performance in the play was __________, earning her a standing ovation.",
        chinese_question: "她在戏剧中的表演 __________，赢得了全场起立鼓掌。",
        answers: [
            { option: "A", answer: "exceptional", chinese_answer: "杰出的", chinese_romanization: "jiéchū de" },
            { option: "B", answer: "mediocre", chinese_answer: "平庸的", chinese_romanization: "píngyōng de" },
            { option: "C", answer: "average", chinese_answer: "普通的", chinese_romanization: "pǔtōng de" },
            { option: "D", answer: "ordinary", chinese_answer: "平凡的", chinese_romanization: "píngfán de" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'exceptional' means unusually good; outstanding." +
            "<br><br>" +
            "(B) 'mediocre' means of only average quality; not very good." +
            "<br><br>" +
            "(C) 'average' means of the usual or ordinary standard, level, or quantity." +
            "<br><br>" +
            "(D) 'ordinary' means with no special or distinctive features; normal.",
        chinese_explanation: "(A) '杰出的' 意味着异常好的；出色的。" +
            "<br><br>" +
            "(B) '平庸的' 意味着质量一般；不太好。" +
            "<br><br>" +
            "(C) '普通的' 意味着通常或普通的标准、水平或数量。" +
            "<br><br>" +
            "(D) '平凡的' 意味着没有特别或独特的特征；正常的。"
    },
    {
        id: 10,
        question: "Her __________ attention to detail ensured that every aspect of the project was executed flawlessly.",
        chinese_question: "她对细节的 __________ 关注确保了项目的每个方面都被无瑕疵地执行。",
        answers: [
            { option: "A", answer: "careless", chinese_answer: "粗心的", chinese_romanization: "cūxīn de" },
            { option: "B", answer: "sloppy", chinese_answer: "草率的", chinese_romanization: "cǎoshuài de" },
            { option: "C", answer: "meticulous", chinese_answer: "一丝不苟的", chinese_romanization: "yīsī bùgǒu de" },
            { option: "D", answer: "hasty", chinese_answer: "匆忙的", chinese_romanization: "cōngmáng de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'meticulous' means showing great attention to detail; very careful and precise." +
            "<br><br>" +
            "(A) 'careless' means not giving sufficient attention or thought to avoiding harm or errors." +
            "<br><br>" +
            "(B) 'sloppy' means carelessly done or arranged." +
            "<br><br>" +
            "(D) 'hasty' means done or acting with excessive speed or urgency; hurried.",
        chinese_explanation: "(C) '一丝不苟的' 意味着非常注重细节；非常仔细和精确。" +
            "<br><br>" +
            "(A) '粗心的' 意味着没有给予足够的注意或考虑以避免伤害或错误。" +
            "<br><br>" +
            "(B) '草率的' 意味着随意完成或安排。" +
            "<br><br>" +
            "(D) '匆忙的' 意味着以过快或紧急的速度或紧迫感完成或行动。"
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
