// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "His __________ plan to climb the mountain in winter shocked everyone.",
        chinese_question: "他冬天爬山的 __________ 计划让所有人都震惊。",
        answers: [
            { option: "A", answer: "audacious", chinese_answer: "大胆的", chinese_romanization: "dàdǎn de" },
            { option: "B", answer: "timid", chinese_answer: "胆小的", chinese_romanization: "dǎnxiǎo de" },
            { option: "C", answer: "ordinary", chinese_answer: "普通的", chinese_romanization: "pǔtōng de" },
            { option: "D", answer: "cautious", chinese_answer: "谨慎的", chinese_romanization: "jǐnshèn de" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'audacious' means showing a willingness to take surprisingly bold risks." +
            "<br><br>" +
            "(B) 'timid' means showing a lack of courage or confidence." +
            "<br><br>" +
            "(C) 'ordinary' means with no special or distinctive features; normal." +
            "<br><br>" +
            "(D) 'cautious' means careful to avoid potential problems or dangers.",
        chinese_explanation: "(A) '大胆的' 意味着表现出愿意采取令人惊讶的大胆风险。" +
            "<br><br>" +
            "(B) '胆小的' 意味着缺乏勇气或信心的。" +
            "<br><br>" +
            "(C) '普通的' 意味着没有特别或独特的特征；正常的。" +
            "<br><br>" +
            "(D) '谨慎的' 意味着小心避免潜在问题或危险的。"
    },
    {
        id: 2,
        question: "The movie's plot was so __________, with predictable twists and clichéd dialogue, that many viewers left the theater disappointed.",
        chinese_question: "这部电影的情节非常 __________，充满了可预测的转折和陈词滥调的对话，许多观众因此失望地离开了电影院。",
        answers: [
            { option: "A", answer: "original", chinese_answer: "原创的", chinese_romanization: "yuánchuàng de" },
            { option: "B", answer: "exciting", chinese_answer: "令人兴奋的", chinese_romanization: "lìng rén xīngfèn de" },
            { option: "C", answer: "unpredictable", chinese_answer: "不可预测的", chinese_romanization: "bùkě yùcè de" },
            { option: "D", answer: "banal", chinese_answer: "平庸的", chinese_romanization: "píngyōng de" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'banal' means lacking in originality; obvious and boring." +
            "<br><br>" +
            "(A) 'original' means created directly and personally by a particular artist; not a copy." +
            "<br><br>" +
            "(B) 'exciting' means causing great enthusiasm and eagerness." +
            "<br><br>" +
            "(C) 'unpredictable' means not able to be predicted; changeable.",
        chinese_explanation: "(D) '平庸的' 意味着缺乏原创性；明显且无聊。" +
            "<br><br>" +
            "(A) '原创的' 意味着由特定艺术家直接创作的；不是复制品。" +
            "<br><br>" +
            "(B) '令人兴奋的' 意味着引起极大热情和热切。" +
            "<br><br>" +
            "(C) '不可预测的' 意味着无法预测的；可变的。"
    },
    {
        id: 3,
        question: "The __________ handling of the equipment led to several accidents in the laboratory.",
        chinese_question: "对设备的 __________ 操作导致了实验室的几起事故。",
        answers: [
            { option: "A", answer: "careful", chinese_answer: "小心的", chinese_romanization: "xiǎoxīn de" },
            { option: "B", answer: "negligent", chinese_answer: "疏忽的", chinese_romanization: "shūhū de" },
            { option: "C", answer: "meticulous", chinese_answer: "一丝不苟的", chinese_romanization: "yīsī bùgǒu de" },
            { option: "D", answer: "diligent", chinese_answer: "勤勉的", chinese_romanization: "qínmiǎn de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'negligent' means failing to take proper care in doing something." +
            "<br><br>" +
            "(A) 'careful' means making sure of avoiding potential danger, mishap, or harm; cautious." +
            "<br><br>" +
            "(C) 'meticulous' means showing great attention to detail; very careful and precise." +
            "<br><br>" +
            "(D) 'diligent' means having or showing care and conscientiousness in one's work or duties.",
        chinese_explanation: "(B) '疏忽的' 一词意味着在做某事时未能采取适当的照顾。" +
            "<br><br>" +
            "(A) '小心的' 意味着确保避免潜在危险、意外或伤害的；谨慎的。" +
            "<br><br>" +
            "(C) '一丝不苟的' 意味着对细节给予高度关注的；非常仔细和精确的。" +
            "<br><br>" +
            "(D) '勤勉的' 意味着在工作或职责上表现出关心和认真的。"
    },
    {
        id: 4,
        question: "The instructions were very __________, leaving no room for misunderstanding.",
        chinese_question: "说明书非常 __________，没有留下误解的余地。",
        answers: [
            { option: "A", answer: "vague", chinese_answer: "模糊的", chinese_romanization: "móhú de" },
            { option: "B", answer: "implicit", chinese_answer: "含蓄的", chinese_romanization: "hánxù de" },
            { option: "C", answer: "explicit", chinese_answer: "明确的", chinese_romanization: "míngquè de" },
            { option: "D", answer: "ambiguous", chinese_answer: "模棱两可的", chinese_romanization: "móléngliǎngkě de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'explicit' means stated clearly and in detail, leaving no room for confusion or doubt." +
            "<br><br>" +
            "(A) 'vague' means of uncertain, indefinite, or unclear character or meaning." +
            "<br><br>" +
            "(B) 'implicit' means implied though not plainly expressed." +
            "<br><br>" +
            "(D) 'ambiguous' means open to more than one interpretation; having a double meaning.",
        chinese_explanation: "(C) '明确的' 一词意味着清晰和详细说明，没有留下混淆或怀疑的余地。" +
            "<br><br>" +
            "(A) '模糊的' 意味着不确定、不明确或不清楚的性质或意义。" +
            "<br><br>" +
            "(B) '含蓄的' 意味着虽然没有明确表达，但隐含的。" +
            "<br><br>" +
            "(D) '模棱两可的' 意味着有多种解释；具有双重意义。"
    },
    {
        id: 5,
        question: "The manager was __________ in handling the employee's complaint, addressing the issue without offending anyone.",
        chinese_question: "经理在处理员工投诉时非常 __________，解决了问题而没有冒犯任何人。",
        answers: [
            { option: "A", answer: "tactful", chinese_answer: "圆滑的", chinese_romanization: "yuánhuá de" },
            { option: "B", answer: "insensitive", chinese_answer: "不敏感的", chinese_romanization: "bù mǐngǎn de" },
            { option: "C", answer: "blunt", chinese_answer: "直率的", chinese_romanization: "zhíshuài de" },
            { option: "D", answer: "rude", chinese_answer: "无礼的", chinese_romanization: "wúlǐ de" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'tactful' means having or showing sensitivity in dealing with others or with difficult issues." +
            "<br><br>" +
            "(B) 'insensitive' means showing or feeling no concern for others' feelings." +
            "<br><br>" +
            "(C) 'blunt' means straightforward and brief, often rudely so." +
            "<br><br>" +
            "(D) 'rude' means offensively impolite or ill-mannered.",
        chinese_explanation: "(A) '圆滑的' 一词意味着在处理他人或困难问题时具有或表现出敏感性。" +
            "<br><br>" +
            "(B) '不敏感的' 意味着不关心他人感受。" +
            "<br><br>" +
            "(C) '直率的' 意味着直截了当且简洁，通常是无礼的。" +
            "<br><br>" +
            "(D) '无礼的' 意味着无礼的或粗鲁的。"
    },
    {
        id: 6,
        question: "The __________ mansion featured marble floors, gold-plated fixtures, and a sprawling garden with fountains and statues.",
        chinese_question: "这座 __________ 的豪宅拥有大理石地板、镀金装饰和带有喷泉和雕像的广阔花园。",
        answers: [
            { option: "A", answer: "modest", chinese_answer: "朴素的", chinese_romanization: "pǔsù de" },
            { option: "B", answer: "humble", chinese_answer: "谦逊的", chinese_romanization: "qiānxùn de" },
            { option: "C", answer: "opulent", chinese_answer: "豪华的", chinese_romanization: "háohuá de" },
            { option: "D", answer: "simple", chinese_answer: "简单的", chinese_romanization: "jiǎndān de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'opulent' means ostentatiously rich and luxurious or lavish." +
            "<br><br>" +
            "(A) 'modest' means unassuming or moderate in the estimation of one's abilities or achievements." +
            "<br><br>" +
            "(B) 'humble' means having or showing a modest or low estimate of one's importance." +
            "<br><br>" +
            "(D) 'simple' means easily understood or done; presenting no difficulty.",
        chinese_explanation: "(C) '豪华的' 一词意味着过于奢华和富丽堂皇的。" +
            "<br><br>" +
            "(A) '朴素的' 意味着对自己能力或成就持谦虚或适度估计的。" +
            "<br><br>" +
            "(B) '谦逊的' 意味着对自己重要性的低估或谦虚的表现。" +
            "<br><br>" +
            "(D) '简单的' 意味着容易理解或完成；没有难度的。"
    },
    {
        id: 7,
        question: "The training program was extremely __________, designed to prepare the athletes for the most demanding competitions.",
        chinese_question: "训练计划非常 __________，旨在让运动员为最严苛的比赛做好准备。",
        answers: [
            { option: "A", answer: "lenient", chinese_answer: "宽松的", chinese_romanization: "kuānsōng de" },
            { option: "B", answer: "relaxed", chinese_answer: "放松的", chinese_romanization: "fàngsōng de" },
            { option: "C", answer: "rigorous", chinese_answer: "严格的", chinese_romanization: "yángé de" },
            { option: "D", answer: "easy", chinese_answer: "容易的", chinese_romanization: "róngyì de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'rigorous' means extremely thorough, exhaustive, or accurate." +
            "<br><br>" +
            "(A) 'lenient' means (of punishment or a person in authority) permissive, merciful, or tolerant." +
            "<br><br>" +
            "(B) 'relaxed' means free from tension and anxiety." +
            "<br><br>" +
            "(D) 'easy' means achieved without great effort; presenting few difficulties.",
        chinese_explanation: "(C) '严格的' 一词意味着极其彻底、详尽或准确的。" +
            "<br><br>" +
            "(A) '宽松的' 意味着（处罚或权威人物）宽容、仁慈或容忍的。" +
            "<br><br>" +
            "(B) '放松的' 意味着没有紧张和焦虑的。" +
            "<br><br>" +
            "(D) '容易的' 意味着无需很大努力就能完成的；呈现出很少困难的。"
    },
    {
        id: 8,
        question: "They threw a __________ party to celebrate their success, sparing no expense on decorations and entertainment.",
        chinese_question: "他们举办了一场 __________ 的派对来庆祝他们的成功，在装饰和娱乐上不惜一切费用。",
        answers: [
            { option: "A", answer: "frugal", chinese_answer: "节俭的", chinese_romanization: "jiéjiǎn de" },
            { option: "B", answer: "modest", chinese_answer: "适度的", chinese_romanization: "shìdù de" },
            { option: "C", answer: "lavish", chinese_answer: "奢华的", chinese_romanization: "shēhuá de" },
            { option: "D", answer: "simple", chinese_answer: "简单的", chinese_romanization: "jiǎndān de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'lavish' means sumptuously rich, elaborate, or luxurious." +
            "<br><br>" +
            "(A) 'frugal' means sparing or economical with regard to money or food." +
            "<br><br>" +
            "(B) 'modest' means unassuming in the estimation of one's abilities or achievements." +
            "<br><br>" +
            "(D) 'simple' means easily understood or done; presenting no difficulty.",
        chinese_explanation: "(C) '奢华的' 一词意味着极其丰富、精致或奢侈的。" +
            "<br><br>" +
            "(A) '节俭的' 意味着在钱或食物方面节约的。" +
            "<br><br>" +
            "(B) '适度的' 意味着对自己的能力或成就谦逊的。" +
            "<br><br>" +
            "(D) '简单的' 意味着容易理解或完成的；没有难度的。"
    },
    {
        id: 9,
        question: "His __________ reply to the question left everyone feeling awkward and uncertain about how to proceed.",
        chinese_question: "他对问题的 __________ 回答让所有人感到尴尬，不知道接下来该怎么做。",
        answers: [
            { option: "A", answer: "curt", chinese_answer: "简短的", chinese_romanization: "jiǎnduǎn de" },
            { option: "B", answer: "lengthy", chinese_answer: "冗长的", chinese_romanization: "rǒngcháng de" },
            { option: "C", answer: "polite", chinese_answer: "礼貌的", chinese_romanization: "lǐmào de" },
            { option: "D", answer: "detailed", chinese_answer: "详细的", chinese_romanization: "xiángxì de" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'curt' means rudely brief." +
            "<br><br>" +
            "(B) 'lengthy' means long in time or duration." +
            "<br><br>" +
            "(C) 'polite' means having or showing behavior that is respectful and considerate of other people." +
            "<br><br>" +
            "(D) 'detailed' means having many details or facts.",
        chinese_explanation: "(A) '简短的' 意味着简短而无礼的。" +
            "<br><br>" +
            "(B) '冗长的' 意味着时间或持续时间很长的。" +
            "<br><br>" +
            "(C) '礼貌的' 意味着表现出尊重和体贴他人的行为。" +
            "<br><br>" +
            "(D) '详细的' 意味着包含许多细节或事实的。"
    },
    {
        id: 10,
        question: "He was __________ that everyone follow the new safety procedures exactly.",
        chinese_question: "他__________所有人都严格遵循新的安全程序。",
        answers: [
            { option: "A", answer: "casual", chinese_answer: "随意的", chinese_romanization: "suíyì de" },
            { option: "B", answer: "indifferent", chinese_answer: "冷漠的", chinese_romanization: "lěngmò de" },
            { option: "C", answer: "insistent", chinese_answer: "坚持的", chinese_romanization: "jiānchí de" },
            { option: "D", answer: "unconcerned", chinese_answer: "不关心的", chinese_romanization: "bù guānxīn de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'insistent' means demanding something forcefully, not allowing refusal." +
            "<br><br>" +
            "(A) 'casual' means relaxed and unconcerned." +
            "<br><br>" +
            "(B) 'indifferent' means having no particular interest or sympathy; unconcerned." +
            "<br><br>" +
            "(D) 'unconcerned' means showing a lack of worry or interest, especially when this is surprising or callous.",
        chinese_explanation: "(C) '坚持的'一词意味着强行要求某事，不允许拒绝。" +
            "<br><br>" +
            "(A) '随意的' 意味着放松和不关心的。" +
            "<br><br>" +
            "(B) '冷漠的' 意味着没有特别的兴趣或同情；不关心的。" +
            "<br><br>" +
            "(D) '不关心的' 意味着表现出缺乏担忧或兴趣，尤其是当这种表现令人惊讶或冷漠时。"
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
