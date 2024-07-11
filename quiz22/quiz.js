// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "The excitement in the room was almost __________, as everyone eagerly awaited the announcement of the winner.",
        chinese_question: "房间里的兴奋几乎是 __________ 的，大家都在急切地等待着获奖者的宣布。",
        answers: [
            { option: "A", answer: "imaginary", chinese_answer: "想象的", chinese_romanization: "xiǎngxiàng de" },
            { option: "B", answer: "vague", chinese_answer: "模糊的", chinese_romanization: "móhú de" },
            { option: "C", answer: "tangible", chinese_answer: "有形的", chinese_romanization: "yǒuxíng de" },
            { option: "D", answer: "invisible", chinese_answer: "看不见的", chinese_romanization: "kàn bù jiàn de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'tangible' means perceptible by touch; clear and definite; real." +
            "<br><br>" +
           "(A) 'imaginary' means existing only in the imagination." +
            "<br><br>" +
            "(B) 'vague' means of uncertain, indefinite, or unclear character or meaning." +
            "<br><br>" +
            "(D) 'invisible' means unable to be seen; not visible to the eye.",
        chinese_explanation: "(C) '有形的' 意味着可触摸的；清晰而确定的；真实的。" +
            "<br><br>" +
            "(A) '想象的' 意味着仅存在于想象中的。" +
            "<br><br>" +
            "(B) '模糊的' 意味着性质不确定、不明确或不清楚。" +
            "<br><br>" +
            "(D) '看不见的' 意味着无法看到；肉眼不可见的。"
    },
    {
        id: 2,
        question: "Despite the team's efforts, their __________ performance led to a disappointing loss in the championship.",
        chinese_question: "尽管团队付出了努力，他们 __________ 的表现导致了在冠军赛中的令人失望的失败。",
        answers: [
            { option: "A", answer: "stellar", chinese_answer: "杰出", chinese_romanization: "jiéchū" },
            { option: "B", answer: "lackluster", chinese_answer: "平淡无奇", chinese_romanization: "píngdànwúqí" },
            { option: "C", answer: "exhilarating", chinese_answer: "令人振奋", chinese_romanization: "lìng rén zhènfèn" },
            { option: "D", answer: "robust", chinese_answer: "强健", chinese_romanization: "qiángjiàn" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'lackluster' means lacking energy and effort." +
            "<br><br>" +
            "(A) 'stellar' means excellent or outstanding." +
            "<br><br>" +
            "(C) 'exhilarating' means very exciting." +
            "<br><br>" +
            "(D) 'robust' means strong and healthy.",
        chinese_explanation: "(B) '平淡无奇' 一词意味着缺乏活力和努力。" +
            "<br><br>" +
            "(A) '杰出' 意味着优秀或杰出。" +
            "<br><br>" +
            "(C) '令人振奋' 意味着非常令人兴奋。" +
            "<br><br>" +
            "(D) '强健' 意味着强壮和健康。"
    },
    {
        id: 3,
        question: "The referee was known for being __________, making fair decisions without favoring either team.",
        chinese_question: "这位裁判以 __________ 著称，做出公正的决定，不偏袒任何一方。",
        answers: [
            { option: "A", answer: "biased", chinese_answer: "有偏见", chinese_romanization: "yǒu piānjiàn" },
            { option: "B", answer: "partial", chinese_answer: "偏袒", chinese_romanization: "piāntǎn" },
            { option: "C", answer: "impartial", chinese_answer: "公正", chinese_romanization: "gōngzhèng" },
            { option: "D", answer: "prejudiced", chinese_answer: "成见", chinese_romanization: "chéngjiàn" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'impartial' means treating all rivals or disputants equally; fair and just." +
            "<br><br>" +
            "(A) 'biased' means unfairly prejudiced for or against someone or something." +
            "<br><br>" +
            "(B) 'partial' means favoring one side in a dispute above the other." +
            "<br><br>" +
            "(D) 'prejudiced' means having or showing a dislike or distrust that is derived from prejudice.",
        chinese_explanation: "(C) '公正' 一词意味着平等对待所有竞争者或争论者；公平和公正。" +
            "<br><br>" +
            "(A) '有偏见' 意味着对某人或某事有不公平的偏见。" +
            "<br><br>" +
            "(B) '偏袒' 意味着在争论中偏袒一方。" +
            "<br><br>" +
            "(D) '成见' 意味着由于偏见而产生的或表现出的不喜欢或不信任。"
    },
    {
        id: 4,
        question: "His illness left him so __________ that he could barely stand, let alone walk across the room.",
        chinese_question: "他的疾病使他如此 __________，他几乎站不起来，更不用说走过房间了。",
        answers: [
            { option: "A", answer: "strong", chinese_answer: "强壮的", chinese_romanization: "qiángzhuàng de" },
            { option: "B", answer: "robust", chinese_answer: "健壮的", chinese_romanization: "jiànzhuàng de" },
            { option: "C", answer: "feeble", chinese_answer: "虚弱的", chinese_romanization: "xūruò de" },
            { option: "D", answer: "healthy", chinese_answer: "健康的", chinese_romanization: "jiànkāng de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'feeble' means lacking physical strength, especially as a result of age or illness." +
            "<br><br>" +
            "(A) 'strong' means having the power to move heavy weights or perform other physically demanding tasks." +
            "<br><br>" +
            "(B) 'robust' means strong and healthy; vigorous." +
            "<br><br>" +
            "(D) 'healthy' means in good health.",
        chinese_explanation: "(C) '虚弱的' 意味着缺乏体力，尤其是由于年老或疾病。" +
            "<br><br>" +
            "(A) '强壮的' 意味着有力量移动重物或执行其他体力劳动的任务。" +
            "<br><br>" +
            "(B) '健壮的' 意味着强壮和健康；有活力的。" +
            "<br><br>" +
            "(D) '健康的' 意味着身体健康。"
    },
    {
        id: 5,
        question: "She sat by the window, __________, lost in thoughts about the future and the decisions she needed to make.",
        chinese_question: "她坐在窗边， __________ 地沉思，思索着未来和需要做出的决定。",
        answers: [
            { option: "A", answer: "cheerful", chinese_answer: "快乐的", chinese_romanization: "kuàilè de" },
            { option: "B", answer: "pensive", chinese_answer: "沉思的", chinese_romanization: "chénsī de" },
            { option: "C", answer: "indifferent", chinese_answer: "漠不关心的", chinese_romanization: "mòbù guānxīn de" },
            { option: "D", answer: "frivolous", chinese_answer: "轻浮的", chinese_romanization: "qīngfú de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'pensive' means engaged in, involving, or reflecting deep or serious thought." +
            "<br><br>" +
            "(A) 'cheerful' means noticeably happy and optimistic." +
            "<br><br>" +
            "(C) 'indifferent' means having no particular interest or sympathy; unconcerned." +
            "<br><br>" +
            "(D) 'frivolous' means not having any serious purpose or value.",
        chinese_explanation: "(B) '沉思的' 意味着从事、涉及或反映深刻或严肃的思考。" +
            "<br><br>" +
            "(A) '快乐的' 意味着显着的快乐和乐观。" +
            "<br><br>" +
            "(C) '漠不关心的' 意味着没有特别的兴趣或同情；不关心的。" +
            "<br><br>" +
            "(D) '轻浮的' 意味着没有任何严肃的目的或价值。"
    },
    {
        id: 6,
        question: "She is a __________ worker, always paying great attention to detail and ensuring everything is done correctly.",
        chinese_question: "她是一个 __________ 的员工，总是非常注重细节，确保所有事情都做得正确。",
        answers: [
            { option: "A", answer: "careless", chinese_answer: "粗心的", chinese_romanization: "cūxīn de" },
            { option: "B", answer: "lazy", chinese_answer: "懒惰的", chinese_romanization: "lǎnduò de" },
            { option: "C", answer: "conscientious", chinese_answer: "认真的", chinese_romanization: "rènzhēn de" },
            { option: "D", answer: "indifferent", chinese_answer: "漠不关心的", chinese_romanization: "mòbùguānxīn de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'conscientious' means wishing to do one's work or duty well and thoroughly." +
            "<br><br>" +
            "(A) 'careless' means not giving sufficient attention or thought to avoiding harm or errors." +
            "<br><br>" +
            "(B) 'lazy' means unwilling to work or use energy." +
            "<br><br>" +
            "(D) 'indifferent' means having no particular interest or sympathy; unconcerned.",
        chinese_explanation: "(C) '认真的' 一词意味着希望把工作或职责做得好且彻底。" +
            "<br><br>" +
            "(A) '粗心的' 意味着没有给予足够的注意或思考以避免伤害或错误。" +
            "<br><br>" +
            "(B) '懒惰的' 意味着不愿意工作或使用精力。" +
            "<br><br>" +
            "(D) '漠不关心的' 意味着没有特别的兴趣或同情；不关心的。"
    },
    {
        id: 7,
        question: "With the advent of smartphones, many traditional cameras have become __________.",
        chinese_question: "随着智能手机的出现，许多传统相机已变得 __________。",
        answers: [
            { option: "A", answer: "modern", chinese_answer: "现代的", chinese_romanization: "xiàndài de" },
            { option: "B", answer: "obsolete", chinese_answer: "过时的", chinese_romanization: "guòshí de" },
            { option: "C", answer: "relevant", chinese_answer: "相关的", chinese_romanization: "xiāngguān de" },
            { option: "D", answer: "popular", chinese_answer: "流行的", chinese_romanization: "liúxíng de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'obsolete' means no longer produced or used; out of date." +
            "<br><br>" +
            "(A) 'modern' means relating to the present or recent times as opposed to the remote past." +
            "<br><br>" +
            "(C) 'relevant' means closely connected or appropriate to what is being done or considered." +
            "<br><br>" +
            "(D) 'popular' means liked or admired by many people or by a particular person or group.",
        chinese_explanation: "(B) '过时的' 一词意味着不再生产或使用的；过时的。" +
            "<br><br>" +
            "(A) '现代的' 意味着与现在或最近的时间有关的，而不是遥远的过去。" +
            "<br><br>" +
            "(C) '相关的' 意味着与正在做或考虑的事情密切相关或适当的。" +
            "<br><br>" +
            "(D) '流行的' 意味着被许多人或某个人或团体喜欢或钦佩的。"
    },
    {
        id: 8,
        question: "The children were __________ after receiving their holiday presents, jumping and shouting with joy.",
        chinese_question: "孩子们收到假日礼物后非常 __________，跳跃和欢呼。",
        answers: [
            { option: "A", answer: "melancholy", chinese_answer: "忧郁", chinese_romanization: "yōuyù" },
            { option: "B", answer: "exuberant", chinese_answer: "兴高采烈", chinese_romanization: "xìnggāocǎiliè" },
            { option: "C", answer: "lethargic", chinese_answer: "昏昏欲睡", chinese_romanization: "hūnhūnyùshuì" },
            { option: "D", answer: "somber", chinese_answer: "阴沉", chinese_romanization: "yīnchén" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'exuberant' means filled with or characterized by a lively energy and excitement." +
            "<br><br>" +
            "(A) 'melancholy' means a feeling of pensive sadness." +
            "<br><br>" +
            "(C) 'lethargic' means sluggish and apathetic." +
            "<br><br>" +
            "(D) 'somber' means dark or dull in color or tone; gloomy.",
        chinese_explanation: "(B) '兴高采烈' 一词意味着充满或表现出活力和兴奋。" +
            "<br><br>" +
            "(A) '忧郁' 意味着一种沉思的悲伤感觉。" +
            "<br><br>" +
            "(C) '昏昏欲睡' 意味着迟钝和无动于衷。" +
            "<br><br>" +
            "(D) '阴沉' 意味着颜色或色调深暗；阴郁。"
    },
    {
        id: 9,
        question: "The instructions were so __________ that no one could understand exactly what was required.",
        chinese_question: "说明是如此 __________，没有人能确切理解需要做什么。",
        answers: [
            { option: "A", answer: "clear", chinese_answer: "清楚的", chinese_romanization: "qīngchǔ de" },
            { option: "B", answer: "explicit", chinese_answer: "明确的", chinese_romanization: "míngquè de" },
            { option: "C", answer: "ambiguous", chinese_answer: "模糊的", chinese_romanization: "móhú de" },
            { option: "D", answer: "straightforward", chinese_answer: "直截了当的", chinese_romanization: "zhíjié liǎodàng de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'ambiguous' means open to more than one interpretation; not having one obvious meaning." +
            "<br><br>" +
            "(A) 'clear' means easy to perceive, understand, or interpret." +
            "<br><br>" +
            "(B) 'explicit' means stated clearly and in detail, leaving no room for confusion or doubt." +
            "<br><br>" +
            "(D) 'straightforward' means uncomplicated and easy to do or understand.",
        chinese_explanation: "(C) '模糊的' 一词意味着可以有多种解释的；没有一个明显的意思。" +
            "<br><br>" +
            "(A) '清楚的' 意味着容易感知、理解或解释的。" +
            "<br><br>" +
            "(B) '明确的' 意味着清晰而详细地陈述，没有混淆或怀疑的余地。" +
            "<br><br>" +
            "(D) '直截了当的' 意味着不复杂且易于做或理解的。"
    },
    {
        id: 10,
         question: "The scientist became a __________ figure in her field, known for her groundbreaking research and discoveries.",
        chinese_question: "这位科学家成为她领域内的 __________ 人物，以其开创性的研究和发现而闻名。",
        answers: [
            { option: "A", answer: "obscure", chinese_answer: "默默无闻的", chinese_romanization: "mòmòwúwén de" },
            { option: "B", answer: "prominent", chinese_answer: "杰出的", chinese_romanization: "jiéchū de" },
            { option: "C", answer: "insignificant", chinese_answer: "微不足道的", chinese_romanization: "wēibùzúdào de" },
            { option: "D", answer: "hidden", chinese_answer: "隐藏的", chinese_romanization: "yǐncáng de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'prominent' means important; famous." +
            "<br><br>" +
            "(A) 'obscure' means not discovered or known about; uncertain." +
            "<br><br>" +
            "(C) 'insignificant' means too small or unimportant to be worth consideration." +
            "<br><br>" +
            "(D) 'hidden' means kept out of sight; concealed.",
        chinese_explanation: "(B) '杰出的' 意味着重要的；著名的。" +
            "<br><br>" +
            "(A) '默默无闻的' 意味着未被发现或未知的；不确定的。" +
            "<br><br>" +
            "(C) '微不足道的' 意味着太小或不重要而不值得考虑的。" +
            "<br><br>" +
            "(D) '隐藏的' 意味着被藏起来的；隐藏的。"
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
