// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "Over the years, she managed to __________ a significant amount of savings by being diligent and disciplined with her finances.",
        chinese_question: "多年以后，她通过勤奋和自律地管理财务设法__________了一笔可观的储蓄。",
        answers: [
            { option: "A", answer: "spend", chinese_answer: "花费", chinese_romanization: "huāfèi" },
            { option: "B", answer: "waste", chinese_answer: "浪费", chinese_romanization: "làngfèi" },
            { option: "C", answer: "accumulate", chinese_answer: "积累", chinese_romanization: "jīlěi" },
            { option: "D", answer: "lose", chinese_answer: "失去", chinese_romanization: "shīqù" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'accumulate' means gather together or acquire an increasing number or quantity of." + 
            "<br><br>" +
            "(A) 'spend' means pay out (money) in buying or hiring goods or services." + 
            "<br><br>" +
            "(B) 'waste' means use or expend carelessly, extravagantly, or to no purpose." + 
            "<br><br>" +
            "(D) 'lose' means be deprived of or cease to have or retain (something).",
        chinese_explanation: "(C) '积累' 一词意味着聚集或获得越来越多的数量。" + 
            "<br><br>" +
            "(A) '花费' 意味着花费（金钱）购买或雇佣商品或服务。" + 
            "<br><br>" +
            "(B) '浪费' 意味着不加节制地、奢侈地或无目的地使用或消耗。" + 
            "<br><br>" +
            "(D) '失去' 意味着被剥夺或不再拥有或保留（某物）。"
    },
    {
        id: 2,
        question: "He tried to __________ out of taking responsibility for the mistake.",
        chinese_question: "他试图__________逃避承担错误的责任。",
        answers: [
            { option: "A", answer: "fly", chinese_answer: "飞", chinese_romanization: "fēi" },
            { option: "B", answer: "jump", chinese_answer: "跳", chinese_romanization: "tiào" },
            { option: "C", answer: "slither", chinese_answer: "滑行", chinese_romanization: "huáxíng" },
            { option: "D", answer: "walk", chinese_answer: "走", chinese_romanization: "zǒu" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'slither' means move smoothly over a surface with a twisting or oscillating motion. Figuratively, it can mean trying to avoid or escape responsibility." + 
            "<br><br>" +
            "(A) 'fly' means move through the air using wings." + 
            "<br><br>" +
            "(B) 'jump' means push oneself off a surface and into the air by using the muscles in one's legs and feet." + 
            "<br><br>" +
            "(D) 'walk' means move at a regular pace by lifting and setting down each foot in turn, never having both feet off the ground at once.",
        chinese_explanation: "(C) '滑行' 一词意味着以扭动或振动的动作平滑地移动在表面上。比喻地，它可以表示试图逃避或躲避责任。" + 
            "<br><br>" +
            "(A) '飞' 意味着使用翅膀通过空气移动。" + 
            "<br><br>" +
            "(B) '跳' 意味着使用腿和脚的肌肉将自己从表面推离并进入空中。" + 
            "<br><br>" +
            "(D) '走' 意味着以规则的步伐移动，通过依次抬起和放下每只脚，双脚从不同时离地。"
    },
    {
        id: 3,
        question: "He decided to __________ all ties with his former business partner after the betrayal.",
        chinese_question: "在背叛之后，他决定__________与前商业伙伴的所有关系。",
        answers: [
            { option: "A", answer: "attach", chinese_answer: "连接", chinese_romanization: "liánjiē" },
            { option: "B", answer: "sever", chinese_answer: "切断", chinese_romanization: "qiēduàn" },
            { option: "C", answer: "mend", chinese_answer: "修补", chinese_romanization: "xiūbǔ" },
            { option: "D", answer: "fix", chinese_answer: "修理", chinese_romanization: "xiūlǐ" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'sever' means divide by cutting or slicing, especially suddenly and forcibly. Figuratively, it can mean ending a relationship or connection." + 
            "<br><br>" +
            "(A) 'attach' means join or fasten (something) to something else." + 
            "<br><br>" +
            "(C) 'mend' means repair (something that is broken or damaged)." + 
            "<br><br>" +
            "(D) 'fix' means fasten (something) securely in a particular place or position.",
        chinese_explanation: "(B) '切断' 一词意味着通过切割或切片分开，尤其是突然和用力地。比喻地，它可以表示结束一段关系或联系。" + 
            "<br><br>" +
            "(A) '连接' 意味着将（某物）连接或固定在其他东西上。" + 
            "<br><br>" +
            "(C) '修补' 意味着修理（破损或损坏的东西）。" + 
            "<br><br>" +
            "(D) '修理' 意味着将（某物）牢固地固定在特定位置。"
    },
    {
        id: 4,
        question: "His friends would often __________ him for his unusual hobbies, but he didn't mind.",
        chinese_question: "他的朋友们经常因为他不寻常的爱好而 __________ 他，但他并不介意。",
        answers: [
            { option: "A", answer: "taunt", chinese_answer: "嘲笑", chinese_romanization: "cháoxiào" },
            { option: "B", answer: "admire", chinese_answer: "欣赏", chinese_romanization: "xīnshǎng" },
            { option: "C", answer: "patronize", chinese_answer: "以恩人自居", chinese_romanization: "yǐ ēnrén zìjū" },
            { option: "D", answer: "cherish", chinese_answer: "珍惜", chinese_romanization: "zhēnxī" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'taunt' metaphorically means to tease or mock someone." + 
            "<br><br>" +
            "(B) 'admire' means regard with respect or warm approval." + 
            "<br><br>" +
            "(C) 'patronize' means treat with an apparent kindness that betrays a feeling of superiority." + 
            "<br><br>" +
            "(D) 'cherish' means protect and care for (someone) lovingly.",
        chinese_explanation: "(A) '嘲笑' 比喻戏弄或嘲笑某人。" + 
            "<br><br>" +
            "(B) '欣赏' 意味着尊重或热情地赞同。" + 
            "<br><br>" +
            "(C) '以恩人自居' 意味着以表面上的善意对待，实际上是居高临下。" + 
            "<br><br>" +
            "(D) '珍惜' 意味着爱护和关心（某人）。"
    },
    {
        id: 5,
        question: "She decided to __________ her plans of studying abroad due to unforeseen circumstances.",
        chinese_question: "由于不可预见的情况，她决定__________出国留学的计划。",
        answers: [
            { option: "A", answer: "repair", chinese_answer: "修理", chinese_romanization: "xiūlǐ" },
            { option: "B", answer: "abandon", chinese_answer: "放弃", chinese_romanization: "fàngqì" },
            { option: "C", answer: "protect", chinese_answer: "保护", chinese_romanization: "bǎohù" },
            { option: "D", answer: "renovate", chinese_answer: "翻新", chinese_romanization: "fānxīn" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'abandon' means leave (a place or vehicle, typically something that is needed) permanently. Figuratively, it can mean giving up on an idea or plan." + 
            "<br><br>" +
            "(A) 'repair' means fix or mend (a thing suffering from damage or a fault)." + 
            "<br><br>" +
            "(C) 'protect' means keep safe from harm or injury." + 
            "<br><br>" +
            "(D) 'renovate' means restore (something old, especially a building) to a good state of repair.",
        chinese_explanation: "(B) '放弃' 一词意味着永久地离开（一个地方或车辆，通常是需要的东西）。比喻地，它可以表示放弃一个想法或计划。" + 
            "<br><br>" +
            "(A) '修理' 意味着修复或修补（受损或有故障的东西）。" + 
            "<br><br>" +
            "(C) '保护' 意味着使免受伤害或损害。" + 
            "<br><br>" +
            "(D) '翻新' 意味着恢复（旧物，尤其是建筑物）到良好的状态。"
    },
    {
        id: 6,
        question: "The government decided to __________ the development of renewable energy sources with financial incentives and grants to promote sustainability.",
        chinese_question: "政府决定通过财政激励和补助， __________可再生能源的开发，以促进可持续性。",
        answers: [
            { option: "A", answer: "tax", chinese_answer: "征税", chinese_romanization: "zhēngshuì" },
            { option: "B", answer: "penalize", chinese_answer: "处罚", chinese_romanization: "chǔfá" },
            { option: "C", answer: "deplete", chinese_answer: "耗尽", chinese_romanization: "hàojìn" },
            { option: "D", answer: "subsidize", chinese_answer: "资助", chinese_romanization: "zīzhù" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'subsidize' means support (an organization or activity) financially." + 
            "<br><br>" +
            "(A) 'tax' means impose a tax on (someone or something)." + 
            "<br><br>" +
            "(B) 'penalize' means subject to a penalty or punishment." + 
            "<br><br>" +
            "(C) 'deplete' means use up the supply or resources of.",
        chinese_explanation: "(D) '资助' 一词意味着在财务上支持（一个组织或活动）。" + 
            "<br><br>" +
            "(A) '征税' 意味着对（某人或某物）征税。" + 
            "<br><br>" +
            "(B) '处罚' 意味着使某人受到处罚或惩罚。" + 
            "<br><br>" +
            "(C) '耗尽' 意味着用尽供应或资源。"
    },
    {
        id: 7,
        question: "From the look on her face, I __________ she wasn't happy with the decision, even though she didn't say anything.",
        chinese_question: "从她的表情上，我 __________ 她对这个决定不满意，尽管她什么也没说。",
        answers: [
            { option: "A", answer: "surmised", chinese_answer: "推测", chinese_romanization: "tuīcè" },
            { option: "B", answer: "dismissed", chinese_answer: "不理会", chinese_romanization: "bù lǐhuì" },
            { option: "C", answer: "misunderstood", chinese_answer: "误解", chinese_romanization: "wùjiě" },
            { option: "D", answer: "doubted", chinese_answer: "怀疑", chinese_romanization: "huáiyí" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'surmised' means suppose that something is true without having evidence to confirm it." +
            "<br><br>" +
            "(B) 'dismissed' means to treat as unworthy of serious consideration." +
            "<br><br>" +
            "(C) 'misunderstood' means to fail to understand correctly." +
            "<br><br>" +
            "(D) 'doubted' means feel uncertain about.",
        chinese_explanation: "(A) '推测' 意味着假设某事是真实的而没有证据证实。" +
            "<br><br>" +
            "(B) '不理会' 意味着认为不值得认真考虑。" +
            "<br><br>" +
            "(C) '误解' 意味着未能正确理解。" +
            "<br><br>" +
            "(D) '怀疑' 意味着感到不确定。"
    },
    {
        id: 8,
        question: "The students were asked to __________ the complex sentence to understand its structure.",
        chinese_question: "学生们被要求 __________ 这复杂的句子，以理解其结构。",
        answers: [
            { option: "A", answer: "parse", chinese_answer: "解析", chinese_romanization: "jiěxī" },
            { option: "B", answer: "diagram", chinese_answer: "图解", chinese_romanization: "tújiě" },
            { option: "C", answer: "combine", chinese_answer: "结合", chinese_romanization: "jiéhé" },
            { option: "D", answer: "confuse", chinese_answer: "混淆", chinese_romanization: "hùnxiáo" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'parse' means to analyze (a sentence) into its parts and describe their syntactic roles." + 
            "<br><br>" +
            "(B) 'diagram' means represent (something) in graphic form." + 
            "<br><br>" +
            "(C) 'combine' means unite; merge." + 
            "<br><br>" +
            "(D) 'confuse' means cause (someone) to become bewildered or perplexed.",
        chinese_explanation: "(A) '解析' 意味着将（句子）分解成其部分并描述其句法角色。" + 
            "<br><br>" +
            "(B) '图解' 意味着以图形形式表示（某事物）。" + 
            "<br><br>" +
            "(C) '结合' 意味着结合；合并。" + 
            "<br><br>" +
            "(D) '混淆' 意味着使（某人）困惑或困惑。"
    },
    {
        id: 9,
        question: "The company was __________ with complaints after the faulty product was released.",
        chinese_question: "故障产品发布后，公司被投诉__________。",
        answers: [
            { option: "A", answer: "drained", chinese_answer: "排水", chinese_romanization: "páishuǐ" },
            { option: "B", answer: "irrigated", chinese_answer: "灌溉", chinese_romanization: "guàngài" },
            { option: "C", answer: "inundated", chinese_answer: "淹没", chinese_romanization: "yānmò" },
            { option: "D", answer: "evaporated", chinese_answer: "蒸发", chinese_romanization: "zhēngfā" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'inundated' means to flood. Figuratively, it can mean to overwhelm with things or people to be dealt with." + 
            "<br><br>" +
            "(A) 'drained' means cause the water or other liquid in (something) to run out, leaving it empty, dry, or drier." + 
            "<br><br>" +
            "(B) 'irrigated' means supply water to (land or crops) to help growth, typically by means of channels." + 
            "<br><br>" +
            "(D) 'evaporated' means turn from liquid into vapor.",
        chinese_explanation: "(C) '淹没' 一词意味着洪水泛滥。比喻地，它可以表示因要处理的事情或人而不堪重负。" + 
            "<br><br>" +
            "(A) '排水' 意味着使（水或其他液体）从（某物）流出，使其空、干或更干。" + 
            "<br><br>" +
            "(B) '灌溉' 意味着通过渠道向（土地或作物）供水以帮助生长。" + 
            "<br><br>" +
            "(D) '蒸发' 意味着从液体变为蒸汽。"
    },
    {
        id: 10,
        question: "The storm __________ in strength, causing widespread damage and power outages.",
        chinese_question: "风暴__________了力量，造成了广泛的破坏和停电。",
        answers: [
            { option: "A", answer: "weakened", chinese_answer: "减弱", chinese_romanization: "jiǎnruò" },
            { option: "B", answer: "diminished", chinese_answer: "减少", chinese_romanization: "jiǎnshǎo" },
            { option: "C", answer: "intensified", chinese_answer: "加剧", chinese_romanization: "jiājù" },
            { option: "D", answer: "subsided", chinese_answer: "减退", chinese_romanization: "jiǎntuì" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'intensified' means to become or make more intense." + 
            "<br><br>" +
            "(A) 'weakened' means make or become weaker in power, resolve, or physical strength." + 
            "<br><br>" +
            "(B) 'diminished' means make or become less." + 
            "<br><br>" +
            "(D) 'subsided' means become less intense, violent, or severe.",
        chinese_explanation: "(C) '加剧' 一词意味着变得或使变得更加激烈。" + 
            "<br><br>" +
            "(A) '减弱' 意味着使或变得在力量、决心或体力上减弱。" + 
            "<br><br>" +
            "(B) '减少' 意味着使或变得较少。" + 
            "<br><br>" +
            "(D) '减退' 意味着变得不那么激烈、暴力或严重。"
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
