// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "The __________ hike up the mountain left the group exhausted, but the breathtaking view at the top made it all worth it.",
        chinese_question: "这次 __________ 的山顶徒步旅行让团队筋疲力尽，但顶峰的壮丽景色让一切都值得。",
        answers: [
            { option: "A", answer: "easy", chinese_answer: "容易的", chinese_romanization: "róngyì de" },
            { option: "B", answer: "relaxing", chinese_answer: "放松的", chinese_romanization: "fàngsōng de" },
            { option: "C", answer: "grueling", chinese_answer: "使人筋疲力尽的", chinese_romanization: "shǐ rén jīnpílìjìn de" },
            { option: "D", answer: "light", chinese_answer: "轻松的", chinese_romanization: "qīngsōng de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'grueling' means extremely tiring and demanding." +
            "<br><br>" +
            "(A) 'easy' means achieved without great effort; presenting few difficulties." +
            "<br><br>" +
            "(B) 'relaxing' means reducing tension or anxiety." +
            "<br><br>" +
            "(D) 'light' means not heavy; easy to bear or endure.",
        chinese_explanation: "(C) '使人筋疲力尽的' 一词意味着极其累人和要求高的。" +
            "<br><br>" +
            "(A) '容易的' 意味着无需很大努力就能完成的；呈现出很少困难的。" +
            "<br><br>" +
            "(B) '放松的' 意味着减轻紧张或焦虑的。" +
            "<br><br>" +
            "(D) '轻松的' 意味着不重的；容易忍受的。"
    },
    {
        id: 2,
        question: "The two major events were __________, making it difficult for people to attend both.",
        chinese_question: "这两大事件是 __________ 的，使得人们很难同时参加。",
        answers: [
            { option: "A", answer: "sequential", chinese_answer: "连续的", chinese_romanization: "liánxù de" },
            { option: "B", answer: "concurrent", chinese_answer: "同时的", chinese_romanization: "tóngshí de" },
            { option: "C", answer: "successive", chinese_answer: "接连的", chinese_romanization: "jiēlián de" },
            { option: "D", answer: "alternate", chinese_answer: "交替的", chinese_romanization: "jiāotì de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'concurrent' means existing, happening, or done at the same time." +
            "<br><br>" +
            "(A) 'sequential' means forming or following in a logical order or sequence." +
            "<br><br>" +
            "(C) 'successive' means following one another or following others." +
            "<br><br>" +
            "(D) 'alternate' means occurring or succeeding by turns.",
        chinese_explanation: "(B) '同时的' 一词意味着在同一时间存在、发生或完成的。" +
            "<br><br>" +
            "(A) '连续的' 意味着形成或遵循逻辑顺序或顺序的。" +
            "<br><br>" +
            "(C) '接连的' 意味着一个接一个地或接着其他人。" +
            "<br><br>" +
            "(D) '交替的' 意味着轮流发生或接续的。"
    },
    {
        id: 3,
        question: "His __________ nature meant that plans could change at a moment's notice, keeping everyone on their toes.",
        chinese_question: "他 __________ 的性格意味着计划可能随时改变，让每个人都保持警觉。",
        answers: [
                { option: "A", answer: "capricious", chinese_answer: "反复无常的", chinese_romanization: "fǎnfù wúcháng de" },
                { option: "B", answer: "quixotic", chinese_answer: "异想天开的", chinese_romanization: "yìxiǎng tiānkāi de" },
                { option: "C", answer: "scheduled", chinese_answer: "安排好的", chinese_romanization: "ānpái hǎo de" },
                { option: "D", answer: "calculated", chinese_answer: "计算好的", chinese_romanization: "jìsuàn hǎo de" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'capricious' means given to sudden and unaccountable changes of mood or behavior." +
            "<br><br>" +
            "(B) 'quixotic' means exceedingly idealistic; unrealistic and impractical." +
            "<br><br>" +
            "(C) 'scheduled' means included in or planned according to a schedule." +
            "<br><br>" +
            "(D) 'calculated' means done with full awareness of the likely consequences.",
        chinese_explanation: "(A) '反复无常的' 意味着情绪或行为突然且无法解释的变化。" +
            "<br><br>" +
            "(B) '异想天开的' 意味着极其理想化；不切实际和不实用。" +
            "<br><br>" +
            "(C) '安排好的' 意味着按时间表计划或安排的。" +
            "<br><br>" +
            "(D) '计算好的' 意味着充分意识到可能的后果而做的。"
    },
    {
        id: 4,
        question: "The __________ explorers ventured into the uncharted jungle, undeterred by the potential dangers that lay ahead.",
        chinese_question: "__________ 的探险者进入了未知的丛林，没有被潜在的危险吓倒。",
        answers: [
            { option: "A", answer: "intrepid", chinese_answer: "勇敢的", chinese_romanization: "yǒnggǎn de" },
            { option: "B", answer: "cautious", chinese_answer: "谨慎的", chinese_romanization: "jǐnshèn de" },
            { option: "C", answer: "timid", chinese_answer: "胆小的", chinese_romanization: "dǎnxiǎo de" },
            { option: "D", answer: "fearful", chinese_answer: "恐惧的", chinese_romanization: "kǒngjù de" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'intrepid' means fearless; adventurous (often used for rhetorical or humorous effect)." +
            "<br><br>" +
            "(B) 'cautious' means (of a person) careful to avoid potential problems or dangers." +
            "<br><br>" +
            "(C) 'timid' means showing a lack of courage or confidence; easily frightened." +
            "<br><br>" +
            "(D) 'fearful' means feeling or showing fear or anxiety.",
        chinese_explanation: "(A) '勇敢的' 一词意味着无畏的；冒险的（常用于修辞或幽默效果）。" +
            "<br><br>" +
            "(B) '谨慎的' 意味着（人）小心避免潜在问题或危险的。" +
            "<br><br>" +
            "(C) '胆小的' 意味着表现出缺乏勇气或信心；容易受惊的。" +
            "<br><br>" +
            "(D) '恐惧的' 意味着感到或表现出恐惧或焦虑的。"
    },
    {
        id: 5,
        question: "It was purely __________ that they met at the café, as neither of them had planned to be there.",
        chinese_question: "他们在咖啡馆相遇纯属 __________，因为他们都没有计划在那里。",
        answers: [
            { option: "A", answer: "intentional", chinese_answer: "有意的", chinese_romanization: "yǒuyì de" },
            { option: "B", answer: "fortuitous", chinese_answer: "偶然的", chinese_romanization: "ǒurán de" },
            { option: "C", answer: "deliberate", chinese_answer: "故意的", chinese_romanization: "gùyì de" },
            { option: "D", answer: "planned", chinese_answer: "计划的", chinese_romanization: "jìhuà de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'fortuitous' means happening by a lucky chance; fortunate." +
            "<br><br>" +
            "(A) 'intentional' means done on purpose; deliberate." +
            "<br><br>" +
            "(C) 'deliberate' means done consciously and intentionally." +
            "<br><br>" +
            "(D) 'planned' means decided on and arranged in advance.",
        chinese_explanation: "(B) '偶然的' 一词意味着通过幸运的机会发生的；幸运的。" +
            "<br><br>" +
            "(A) '有意的' 意味着故意做的；故意的。" +
            "<br><br>" +
            "(C) '故意的' 意味着有意识和有意地做的。" +
            "<br><br>" +
            "(D) '计划的' 意味着预先决定和安排的。"
    },
    {
        id: 6,
        question: "Her __________ conduct during the crisis earned her the admiration and respect of her colleagues.",
        chinese_question: "她在危机中的 __________ 表现赢得了同事们的钦佩和尊重。",
        answers: [
            { option: "A", answer: "exemplary", chinese_answer: "模范的", chinese_romanization: "mófàn de" },
            { option: "B", answer: "poor", chinese_answer: "糟糕的", chinese_romanization: "zāogāo de" },
            { option: "C", answer: "average", chinese_answer: "一般的", chinese_romanization: "yībān de" },
            { option: "D", answer: "mediocre", chinese_answer: "平庸的", chinese_romanization: "píngyōng de" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'exemplary' means serving as a desirable model; very good." +
            "<br><br>" +
            "(B) 'poor' means lacking sufficient money to live at a standard considered comfortable or normal in a society." +
            "<br><br>" +
            "(C) 'average' means constituting the result obtained by adding together several amounts and then dividing this total by the number of amounts." +
            "<br><br>" +
            "(D) 'mediocre' means of only moderate quality; not very good.",
        chinese_explanation: "(A) '模范的' 一词意味着作为一个理想的模型；非常好的。" +
            "<br><br>" +
            "(B) '糟糕的' 意味着缺乏足够的钱以过上在社会中被认为舒适或正常的生活标准。" +
            "<br><br>" +
            "(C) '一般的' 意味着通过将几个数量加在一起然后除以这些数量的总数得出的结果。" +
            "<br><br>" +
            "(D) '平庸的' 意味着质量中等的；不太好的。"
    },
    {
        id: 7,
        question: "His writing was filled with __________ language, making it rich and expressive.",
        chinese_question: "他的写作充满了__________语言，使其丰富而富有表现力。",
        answers: [
            { option: "A", answer: "literal", chinese_answer: "字面的", chinese_romanization: "zìmiàn de" },
            { option: "B", answer: "straightforward", chinese_answer: "直接的", chinese_romanization: "zhíjiē de" },
            { option: "C", answer: "idiomatic", chinese_answer: "成语的", chinese_romanization: "chéngyǔ de" },
            { option: "D", answer: "plain", chinese_answer: "简单的", chinese_romanization: "jiǎndān de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'idiomatic' means using, containing, or denoting expressions that are natural to a native speaker. Figuratively, it can mean being very natural and fluent in language use." +
            "<br><br>" +
            "(A) 'literal' means taking words in their usual or most basic sense without metaphor or allegory." +
            "<br><br>" +
            "(B) 'straightforward' means uncomplicated and easy to do or understand." +
            "<br><br>" +
            "(D) 'plain' means not decorated or elaborate; simple or ordinary in character.",
        chinese_explanation: "(C) '成语的'一词意味着使用、包含或表示对母语者来说自然的表达。比喻地，它可以表示在语言使用上非常自然和流利的。" +
            "<br><br>" +
            "(A) '字面的' 意味着按字面意思理解单词而不是比喻或寓言的。" +
            "<br><br>" +
            "(B) '直接的' 意味着不复杂和容易做或理解的。" +
            "<br><br>" +
            "(D) '简单的' 意味着不装饰或复杂的；简单或普通的。"
    },
    {
        id: 8,
        question: "The hiker carefully navigated the __________ rocks on the mountain trail, mindful of their sharp edges.",
        chinese_question: "徒步旅行者小心翼翼地穿过山路上的 __________ 岩石，注意它们锋利的边缘。",
        answers: [
            { option: "A", answer: "jagged", chinese_answer: "锯齿状的", chinese_romanization: "jùchǐ zhuàng de" },
            { option: "B", answer: "smooth", chinese_answer: "光滑的", chinese_romanization: "guānghuá de" },
            { option: "C", answer: "polished", chinese_answer: "磨光的", chinese_romanization: "móguāng de" },
            { option: "D", answer: "even", chinese_answer: "平整的", chinese_romanization: "píngzhěng de" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'jagged' means having rough, sharp points protruding." +
            "<br><br>" +
            "(B) 'smooth' means having an even and regular surface; free from perceptible projections, lumps, or indentations." +
            "<br><br>" +
            "(C) 'polished' means made smooth and shiny by being rubbed." +
            "<br><br>" +
            "(D) 'even' means flat and smooth.",
        chinese_explanation: "(A) '锯齿状的' 意味着有粗糙、锋利的突起点。" +
            "<br><br>" +
            "(B) '光滑的' 意味着具有平整和规则的表面；没有可察觉的突起、肿块或凹痕。" +
            "<br><br>" +
            "(C) '磨光的' 意味着通过摩擦变得光滑和闪亮的。" +
            "<br><br>" +
            "(D) '平整的' 意味着平坦和光滑的。"
    },
    {
        id: 9,
        question: "His actions were __________, carefully planned to achieve a specific outcome.",
        chinese_question: "他的行为是__________的，经过仔细计划以达到特定的结果。",
        answers: [
            { option: "A", answer: "accidental", chinese_answer: "偶然的", chinese_romanization: "ǒurán de" },
            { option: "B", answer: "random", chinese_answer: "随机的", chinese_romanization: "suíjī de" },
            { option: "C", answer: "intentional", chinese_answer: "故意的", chinese_romanization: "gùyì de" },
            { option: "D", answer: "spontaneous", chinese_answer: "自发的", chinese_romanization: "zìfā de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'intentional' means done on purpose; deliberate." +
            "<br><br>" +
            "(A) 'accidental' means happening by chance, unintentionally, or unexpectedly." +
            "<br><br>" +
            "(B) 'random' means made, done, happening, or chosen without method or conscious decision." +
            "<br><br>" +
            "(D) 'spontaneous' means performed or occurring as a result of a sudden impulse or inclination and without premeditation or external stimulus.",
        chinese_explanation: "(C) '故意的'一词意味着有目的地做的；故意的。" +
            "<br><br>" +
            "(A) '偶然的' 意味着偶然发生的，无意或意外的。" +
            "<br><br>" +
            "(B) '随机的' 意味着没有方法或有意识决定的。" +
            "<br><br>" +
            "(D) '自发的' 意味着由于突然的冲动或倾向而发生或进行的，没有预谋或外部刺激的。"
    },
    {
        id: 10,
        question: "The movie was so __________ that several people left the theater before it ended.",
        chinese_question: "电影如此 __________，以至于几个人在结束前就离开了电影院。",
        answers: [
            { option: "A", answer: "exciting", chinese_answer: "激动人心", chinese_romanization: "jīdòng rén xīn" },
            { option: "B", answer: "riveting", chinese_answer: "引人入胜", chinese_romanization: "yǐnrénrùshèng" },
            { option: "C", answer: "insipid", chinese_answer: "枯燥乏味", chinese_romanization: "kūzào fáwèi" },
            { option: "D", answer: "captivating", chinese_answer: "迷人", chinese_romanization: "mírén" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'insipid' means lacking vigor or interest." +
            "<br><br>" +
            "(A) 'exciting' means causing great enthusiasm and eagerness." +
            "<br><br>" +
            "(B) 'riveting' means completely engrossing; compelling." +
            "<br><br>" +
            "(D) 'captivating' means capable of attracting and holding interest; charming.",
        chinese_explanation: "(C) '枯燥乏味' 意味着缺乏活力或兴趣。" +
            "<br><br>" +
            "(A) '激动人心' 意味着引起极大热情和渴望。" +
            "<br><br>" +
            "(B) '引人入胜' 意味着完全吸引人；引人入胜的。" +
            "<br><br>" +
            "(D) '迷人' 意味着能够吸引和保持兴趣的；迷人的。"
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
