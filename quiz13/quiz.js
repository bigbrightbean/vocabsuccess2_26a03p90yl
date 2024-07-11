// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "The teacher's __________ explanation made a difficult concept easy to understand for all the students.",
        chinese_question: "老师的 __________ 解释让所有学生都能轻松理解一个难懂的概念。",
        answers: [
            { option: "A", answer: "convoluted", chinese_answer: "复杂难懂", chinese_romanization: "fùzá nándǒng" },
            { option: "B", answer: "opaque", chinese_answer: "不透明", chinese_romanization: "bù tòumíng" },
            { option: "C", answer: "lucid", chinese_answer: "清晰", chinese_romanization: "qīngxī" },
            { option: "D", answer: "abstruse", chinese_answer: "深奥", chinese_romanization: "shēn'ào" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'lucid' means clear and easy to understand." +
            "<br><br>" +
            "(A) 'convoluted' means complex and difficult to follow." +
            "<br><br>" +
            "(B) 'opaque' means not able to be seen through; not transparent." +
            "<br><br>" +
            "(D) 'abstruse' means difficult to understand.",
        chinese_explanation: "(C) '清晰' 一词意味着清楚易懂。" +
            "<br><br>" +
            "(A) '复杂难懂' 意味着复杂且难以理解。" +
            "<br><br>" +
            "(B) '不透明' 意味着不能透过看；不透明。" +
           "<br><br>" +
            "(D) '深奥' 意味着难以理解。"
    },
    {
        id: 2,
        question: "She looked at the old photographs with a __________ expression, reminiscing about the good times.",
        chinese_question: "她带着 __________ 的表情看着那些老照片，回忆着美好的时光。",
        answers: [
            { option: "A", answer: "joyful", chinese_answer: "快乐的", chinese_romanization: "kuàilè de" },
            { option: "B", answer: "carefree", chinese_answer: "无忧无虑的", chinese_romanization: "wú yōu wúlǜ de" },
            { option: "C", answer: "wistful", chinese_answer: "惆怅的", chinese_romanization: "chóuchàng de" },
            { option: "D", answer: "indifferent", chinese_answer: "冷漠的", chinese_romanization: "lěngmò de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'wistful' means having or showing a feeling of vague or regretful longing." +
            "<br><br>" +
            "(A) 'joyful' means feeling, expressing, or causing great pleasure and happiness." +
            "<br><br>" +
            "(B) 'carefree' means free from anxiety or responsibility." +
            "<br><br>" +
            "(D) 'indifferent' means having no particular interest or sympathy; unconcerned.",
        chinese_explanation: "(C) '惆怅的' 意味着有或表现出模糊或遗憾的渴望的感觉。" +
            "<br><br>" +
            "(A) '快乐的' 意味着感到、表达或引起极大的愉悦和幸福。" +
            "<br><br>" +
            "(B) '无忧无虑的' 意味着没有焦虑或责任的。" +
            "<br><br>" +
            "(D) '冷漠的' 意味着没有特别的兴趣或同情；不关心的。"
    },
    {
        id: 3,
        question: "The scientist is a __________ figure in the field of genetics, known for his groundbreaking research.",
        chinese_question: "这位科学家在遗传学领域是一个 __________ 的人物，以其开创性的研究而闻名。",
        answers: [
            { option: "A", answer: "obscure", chinese_answer: "默默无闻", chinese_romanization: "mòmòwúwén" },
            { option: "B", answer: "prominent", chinese_answer: "杰出", chinese_romanization: "jiéchū" },
            { option: "C", answer: "insignificant", chinese_answer: "微不足道", chinese_romanization: "wēibùzúdào" },
            { option: "D", answer: "unknown", chinese_answer: "未知", chinese_romanization: "wèizhī" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'prominent' means important and well-known." +
            "<br><br>" +
            "(A) 'obscure' means not discovered or known about; uncertain." +
            "<br><br>" +
            "(C) 'insignificant' means too small or unimportant to be worth consideration." +
            "<br><br>" +
            "(D) 'unknown' means not known or familiar.",
        chinese_explanation: "(B) '杰出' 一词意味着重要且知名的。" +
            "<br><br>" +
            "(A) '默默无闻' 意味着未被发现或不为人知的；不确定的。" +
            "<br><br>" +
            "(C) '微不足道' 意味着太小或不重要，不值得考虑。" +
            "<br><br>" +
            "(D) '未知' 意味着不为人知或不熟悉。"
    },
    {
        id: 4,
        question: "During the drought, water became extremely __________, leading to strict conservation measures.",
        chinese_question: "在干旱期间，水变得非常__________，导致严格的节约措施。",
        answers: [
            { option: "A", answer: "plentiful", chinese_answer: "丰富的", chinese_romanization: "fēngfù de" },
            { option: "B", answer: "abundant", chinese_answer: "大量的", chinese_romanization: "dàliàng de" },
            { option: "C", answer: "scarce", chinese_answer: "稀缺的", chinese_romanization: "xīquē de" },
            { option: "D", answer: "sufficient", chinese_answer: "足够的", chinese_romanization: "zúgòu de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'scarce' means insufficient for the demand." +
            "<br><br>" +
            "(A) 'plentiful' means existing in or yielding great quantities." +
            "<br><br>" +
            "(B) 'abundant' means existing or available in large quantities." +
            "<br><br>" +
            "(D) 'sufficient' means enough; adequate.",
        chinese_explanation: "(C) '稀缺的'一词意味着不足以满足需求的。" +
            "<br><br>" +
            "(A) '丰富的' 意味着存在或产生大量的。" +
            "<br><br>" +
            "(B) '大量的' 意味着存在或可获得的大量的。" +
            "<br><br>" +
            "(D) '足够的' 意味着足够的；适当的。"
    },
    {
        id: 5,
        question: "In mythology, Zeus is often depicted as an __________ being with control over the entire universe.",
        chinese_question: "在神话中，宙斯通常被描绘成一个 __________ 的存在，掌控整个宇宙。",
        answers: [
            { option: "A", answer: "powerless", chinese_answer: "无力的", chinese_romanization: "wúlì de" },
            { option: "B", answer: "omnipotent", chinese_answer: "全能的", chinese_romanization: "quánnéng de" },
            { option: "C", answer: "insignificant", chinese_answer: "微不足道的", chinese_romanization: "wēibùzúdào de" },
            { option: "D", answer: "weak", chinese_answer: "虚弱的", chinese_romanization: "xūruò de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'omnipotent' means having unlimited power; able to do anything." +
            "<br><br>" +
            "(A) 'powerless' means without power or influence." +
            "<br><br>" +
            "(C) 'insignificant' means too small or unimportant to be worth consideration." +
            "<br><br>" +
            "(D) 'weak' means lacking the power to perform physically demanding tasks.",
        chinese_explanation: "(B) '全能的' 一词意味着拥有无限的力量；能够做任何事情。" +
            "<br><br>" +
            "(A) '无力的' 意味着没有权力或影响力的。" +
            "<br><br>" +
            "(C) '微不足道的' 意味着太小或不重要，不值得考虑的。" +
            "<br><br>" +
            "(D) '虚弱的' 意味着缺乏执行体力任务的能力的。"
    },
    {
        id: 6,
        question: "The fans' __________ excitement at the concert created an electrifying atmosphere that lasted all night.",
        chinese_question: "音乐会上的粉丝们的 __________ 兴奋创造了一个持续整个晚上的电光火石的氛围。",
        answers: [
            { option: "A", answer: "calm", chinese_answer: "平静的", chinese_romanization: "píngjìng de" },
            { option: "B", answer: "frenzied", chinese_answer: "狂热的", chinese_romanization: "kuángrè de" },
            { option: "C", answer: "subdued", chinese_answer: "压抑的", chinese_romanization: "yāyì de" },
            { option: "D", answer: "controlled", chinese_answer: "控制的", chinese_romanization: "kòngzhì de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'frenzied' means wildly excited or uncontrolled." +
            "<br><br>" +
            "(A) 'calm' means not showing or feeling nervousness, anger, or other strong emotions." +
            "<br><br>" +
            "(C) 'subdued' means quiet and rather reflective or depressed." +
            "<br><br>" +
            "(D) 'controlled' means having one's emotions, actions, etc., under control.",
        chinese_explanation: "(B) '狂热的' 一词意味着狂热的或失控的。" +
            "<br><br>" +
            "(A) '平静的' 意味着不表现或感到紧张、愤怒或其他强烈情感的。" +
            "<br><br>" +
            "(C) '压抑的' 意味着安静且相当反思或沮丧的。" +
            "<br><br>" +
            "(D) '控制的' 意味着控制自己的情绪、行为等。"
    },
    {
        id: 7,
        question: "With the advent of digital technology, many traditional printing methods have become __________.",
        chinese_question: "随着数字技术的出现，许多传统的印刷方法已变得 __________。",
        answers: [
            { option: "A", answer: "advanced", chinese_answer: "先进的", chinese_romanization: "xiānjìn de" },
            { option: "B", answer: "modern", chinese_answer: "现代的", chinese_romanization: "xiàndài de" },
            { option: "C", answer: "obsolete", chinese_answer: "过时的", chinese_romanization: "guòshí de" },
            { option: "D", answer: "innovative", chinese_answer: "创新的", chinese_romanization: "chuàngxīn de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'obsolete' means no longer produced or used; out of date." +
            "<br><br>" +
            "(A) 'advanced' means far on or ahead in development or progress." +
            "<br><br>" +
            "(B) 'modern' means relating to the present or recent times as opposed to the remote past." +
            "<br><br>" +
            "(D) 'innovative' means featuring new methods; advanced and original.",
        chinese_explanation: "(C) '过时的' 一词意味着不再生产或使用；过时的。" +
            "<br><br>" +
            "(A) '先进的' 意味着在发展或进步上走在前列的。" +
            "<br><br>" +
            "(B) '现代的' 意味着与现在或最近的时间相关的，而不是遥远的过去。" +
            "<br><br>" +
            "(D) '创新的' 意味着具有新方法的；先进的和原创的。"
    },
    {
        id: 8,
        question: "The __________ rain lasted for days, causing floods in the area.",
        chinese_question: "__________ 的雨持续了几天，导致该地区发生洪水。",
        answers: [
            { option: "A", answer: "continuous", chinese_answer: "持续", chinese_romanization: "chíxù" },
            { option: "B", answer: "sporadic", chinese_answer: "零星", chinese_romanization: "língxīng" },
            { option: "C", answer: "intermittent", chinese_answer: "间歇", chinese_romanization: "jiànxiē" },
            { option: "D", answer: "occasional", chinese_answer: "偶尔", chinese_romanization: "ǒu'ěr" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'continuous' means without interruption." +
            "<br><br>" +
            "(B) 'sporadic' means occurring at irregular intervals." +
            "<br><br>" +
            "(C) 'intermittent' means occurring at intervals." +
            "<br><br>" +
            "(D) 'occasional' means happening from time to time.",
        chinese_explanation: "(A) '持续' 意味着没有中断。" +
            "<br><br>" +
            "(B) '零星' 意味着不定期发生。" +
            "<br><br>" +
            "(C) '间歇' 意味着间隔发生。" +
            "<br><br>" +
            "(D) '偶尔' 意味着时不时发生。"
    },
    {
        id: 9,
        question: "Despite the challenges ahead, she remained __________ about the future, believing that everything would work out in the end.",
        chinese_question: "尽管前方有挑战，她仍然对未来保持 __________，相信一切最终会好起来。",
        answers: [
            { option: "A", answer: "pessimistic", chinese_answer: "悲观的", chinese_romanization: "bēiguān de" },
            { option: "B", answer: "doubtful", chinese_answer: "怀疑的", chinese_romanization: "huáiyí de" },
            { option: "C", answer: "optimistic", chinese_answer: "乐观的", chinese_romanization: "lèguān de" },
            { option: "D", answer: "uncertain", chinese_answer: "不确定的", chinese_romanization: "bù quèdìng de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'optimistic' means hopeful and confident about the future." +
            "<br><br>" +
            "(A) 'pessimistic' means tending to see the worst aspect of things or believe that the worst will happen." +
            "<br><br>" +
            "(B) 'doubtful' means feeling uncertain about something." +
            "<br><br>" +
            "(D) 'uncertain' means not able to be relied on; not known or definite.",
        chinese_explanation: "(C) '乐观的' 意味着对未来充满希望和信心。" +
            "<br><br>" +
            "(A) '悲观的' 意味着倾向于看到事情的最坏方面或相信最坏的事情会发生。" +
            "<br><br>" +
            "(B) '怀疑的' 意味着对某事感到不确定。" +
            "<br><br>" +
            "(D) '不确定的' 意味着不能依赖的；未知或不确定的。"
    },
    {
        id: 10,
        question: "Writing in her journal every night proved to be a __________ experience, helping her to release pent-up emotions and find peace.",
        chinese_question: "每晚写日记被证明是一种 __________ 的体验，帮助她释放积压的情感并找到内心的平静。",
        answers: [
            { option: "A", answer: "stressful", chinese_answer: "压力大的", chinese_romanization: "yālì dà de" },
            { option: "B", answer: "tedious", chinese_answer: "乏味的", chinese_romanization: "fáwèi de" },
            { option: "C", answer: "trivial", chinese_answer: "琐碎的", chinese_romanization: "suǒsuì de" },
            { option: "D", answer: "cathartic", chinese_answer: "宣泄的", chinese_romanization: "xuānxiè de" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'cathartic' means providing psychological relief through the open expression of strong emotions." +
            "<br><br>" +
            "(A) 'stressful' means causing mental or emotional stress." +
            "<br><br>" +
            "(B) 'tedious' means too long, slow, or dull; tiresome or monotonous." +
            "<br><br>" +
            "(C) 'trivial' means of little value or importance.",
        chinese_explanation: "(D) '宣泄的' 意味着通过公开表达强烈的情感来提供心理缓解。" +
            "<br><br>" +
            "(A) '压力大的' 意味着引起心理或情绪压力的。" +
            "<br><br>" +
            "(B) '乏味的' 意味着太长、太慢或太无聊；令人厌烦或单调。" +
            "<br><br>" +
            "(C) '琐碎的' 意味着价值或重要性很小。"
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
