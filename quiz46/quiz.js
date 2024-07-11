// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "The marathon was a __________ experience, pushing runners to their physical and mental limits.",
        chinese_question: "马拉松是一项 __________ 的经历，将跑步者推到了身体和精神的极限。",
        answers: [
            { option: "A", answer: "grueling", chinese_answer: "艰苦的", chinese_romanization: "jiānkǔ de" },
            { option: "B", answer: "easy", chinese_answer: "容易的", chinese_romanization: "róngyì de" },
            { option: "C", answer: "relaxing", chinese_answer: "放松的", chinese_romanization: "fàngsōng de" },
            { option: "D", answer: "leisurely", chinese_answer: "悠闲的", chinese_romanization: "yōuxián de" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'grueling' means extremely tiring and demanding." +
            "<br><br>" +
            "(B) 'easy' means achieved without great effort; presenting few difficulties." +
            "<br><br>" +
            "(C) 'relaxing' means making you feel relaxed." +
            "<br><br>" +
            "(D) 'leisurely' means acting or done at leisure; unhurried or relaxed.",
        chinese_explanation: "(A) '艰苦的' 意味着极其累人和要求严格的。" +
            "<br><br>" +
            "(B) '容易的' 意味着不费力就能完成的；难度很小的。" +
            "<br><br>" +
            "(C) '放松的' 意味着让你感到放松的。" +
            "<br><br>" +
            "(D) '悠闲的' 意味着在闲暇时进行的；不紧不慢的。"
    },
    {
        id: 2,
        question: "The atmosphere in the room became __________ as the two rivals argued heatedly.",
        chinese_question: "随着两位对手激烈争论，房间里的气氛变得 __________。",
        answers: [
            { option: "A", answer: "friendly", chinese_answer: "友好", chinese_romanization: "yǒuhǎo" },
            { option: "B", answer: "welcoming", chinese_answer: "欢迎", chinese_romanization: "huānyíng" },
            { option: "C", answer: "hostile", chinese_answer: "敌对", chinese_romanization: "díduì" },
            { option: "D", answer: "pleasant", chinese_answer: "愉快", chinese_romanization: "yúkuài" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'hostile' means unfriendly; antagonistic." +
            "<br><br>" +
            "(A) 'friendly' means kind and pleasant." +
            "<br><br>" +
            "(B) 'welcoming' means behaving in a polite or friendly way to a guest or new arrival." +
            "<br><br>" +
            "(D) 'pleasant' means giving a sense of happy satisfaction or enjoyment.",
        chinese_explanation: "(C) '敌对' 意味着不友好；对抗性。" +
            "<br><br>" +
            "(A) '友好' 意味着亲切和愉快的。" +
            "<br><br>" +
            "(B) '欢迎' 意味着对客人或新来者以礼貌或友好的方式行事。" +
            "<br><br>" +
            "(D) '愉快' 意味着带来愉悦感或享受。"
    },
    {
        id: 3,
        question: "The teacher's __________ approach made the students feel comfortable asking questions.",
        chinese_question: "老师的 __________ 方法让学生感到舒适，可以自由提问。",
        answers: [
            { option: "A", answer: "formal", chinese_answer: "正式", chinese_romanization: "zhèngshì" },
            { option: "B", answer: "strict", chinese_answer: "严格", chinese_romanization: "yángé" },
            { option: "C", answer: "informal", chinese_answer: "非正式", chinese_romanization: "fēi zhèngshì" },
            { option: "D", answer: "authoritarian", chinese_answer: "专制", chinese_romanization: "zhuānzhì" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'informal' means having a relaxed, friendly, or unofficial style, manner, or nature." +
            "<br><br>" +
            "(A) 'formal' means done in accordance with rules of convention or etiquette." +
            "<br><br>" +
            "(B) 'strict' means demanding that rules concerning behavior are obeyed and observed." +
            "<br><br>" +
            "(D) 'authoritarian' means favoring or enforcing strict obedience to authority, especially that of the government, at the expense of personal freedom.",
        chinese_explanation: "(C) '非正式' 意味着有一种放松、友好或非官方的风格、方式或性质。" +
            "<br><br>" +
            "(A) '正式' 意味着按照惯例或礼节的规则进行。" +
            "<br><br>" +
            "(B) '严格' 意味着要求遵守和遵守有关行为的规则。" +
            "<br><br>" +
            "(D) '专制' 意味着支持或强制严格服从权威，尤其是政府的权威，以牺牲个人自由为代价。"
    },
    {
        id: 4,
        question: "There was an __________ understanding among the team members that everyone would work extra hours to meet the project deadline.",
        chinese_question: "团队成员之间有一种 __________ 的共识，即每个人都将加班以赶上项目的最后期限。",
        answers: [
            { option: "A", answer: "implicit", chinese_answer: "暗示的", chinese_romanization: "ànshì de" },
            { option: "B", answer: "explicit", chinese_answer: "明确的", chinese_romanization: "míngquè de" },
            { option: "C", answer: "clear", chinese_answer: "清晰的", chinese_romanization: "qīngxī de" },
            { option: "D", answer: "direct", chinese_answer: "直接的", chinese_romanization: "zhíjiē de" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'implicit' means implied though not plainly expressed." +
            "<br><br>" +
            "(B) 'explicit' means stated clearly and in detail, leaving no room for confusion or doubt." +
            "<br><br>" +
            "(C) 'clear' means easy to perceive, understand, or interpret." +
            "<br><br>" +
            "(D) 'direct' means straightforward and without ambiguity.",
        chinese_explanation: "(A) '暗示的' 意味着虽然没有明说但已被暗示的。" +
            "<br><br>" +
            "(B) '明确的' 意味着清楚而详细地陈述的，没有混淆或怀疑的余地。" +
            "<br><br>" +
            "(C) '清晰的' 意味着容易感知、理解或解释的。" +
            "<br><br>" +
            "(D) '直接的' 意味着直截了当的，没有歧义的。"
    },
    {
        id: 5,
        question: "The workers were exposed to __________ chemicals without proper safety gear, risking their health.",
        chinese_question: "工人们在没有适当安全装备的情况下暴露在 __________ 化学品中，危及他们的健康。",
        answers: [
            { option: "A", answer: "hazardous", chinese_answer: "危险的", chinese_romanization: "wēixiǎn de" },
            { option: "B", answer: "harmless", chinese_answer: "无害的", chinese_romanization: "wúhài de" },
            { option: "C", answer: "safe", chinese_answer: "安全的", chinese_romanization: "ānquán de" },
            { option: "D", answer: "beneficial", chinese_answer: "有益的", chinese_romanization: "yǒuyì de" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'hazardous' means risky or dangerous." +
            "<br><br>" +
            "(B) 'harmless' means not able or likely to cause harm." +
            "<br><br>" +
            "(C) 'safe' means protected from or not exposed to danger or risk." +
            "<br><br>" +
            "(D) 'beneficial' means resulting in good; favorable or advantageous.",
        chinese_explanation: "(A) '危险的' 意味着有风险或危险的。" +
            "<br><br>" +
            "(B) '无害的' 意味着不会或不太可能造成伤害的。" +
            "<br><br>" +
            "(C) '安全的' 意味着受到保护或没有暴露在危险或风险中的。" +
            "<br><br>" +
            "(D) '有益的' 意味着导致好的；有利的或有利的。"
    },
    {
        id: 6,
        question: "The student's __________ remark about the earth being flat made the entire class laugh and shake their heads in disbelief.",
        chinese_question: "学生关于地球是平的 __________ 言论让全班同学都笑了，并不敢相信地摇头。",
        answers: [
            { option: "A", answer: "intelligent", chinese_answer: "聪明的", chinese_romanization: "cōngmíng de" },
            { option: "B", answer: "thoughtful", chinese_answer: "深思的", chinese_romanization: "shēnsī de" },
            { option: "C", answer: "insightful", chinese_answer: "有见解的", chinese_romanization: "yǒu jiànjiě de" },
            { option: "D", answer: "fatuous", chinese_answer: "愚蠢的", chinese_romanization: "yúchǔn de" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'fatuous' means silly and pointless." +
            "<br><br>" +
            "(A) 'intelligent' means having or showing intelligence, especially of a high level." +
            "<br><br>" +
            "(B) 'thoughtful' means showing consideration for the needs of other people." +
            "<br><br>" +
            "(C) 'insightful' means having or showing an accurate and deep understanding.",
        chinese_explanation: "(D) '愚蠢的' 意味着愚蠢而无意义的。" +
            "<br><br>" +
            "(A) '聪明的' 意味着拥有或显示出特别高水平的智慧。" +
            "<br><br>" +
            "(B) '深思的' 意味着对他人的需求表现出关心。" +
            "<br><br>" +
            "(C) '有见解的' 意味着拥有或显示出准确而深入的理解。"
    },
    {
        id: 7,
        question: "The comedian's __________ jokes had the entire audience in stitches, laughing uncontrollably.",
        chinese_question: "这位喜剧演员的 __________ 笑话让整个观众捧腹大笑，无法控制地笑个不停。",
        answers: [
            { option: "A", answer: "boring", chinese_answer: "无聊", chinese_romanization: "wúliáo" },
            { option: "B", answer: "serious", chinese_answer: "严肃", chinese_romanization: "yánsù" },
            { option: "C", answer: "hilarious", chinese_answer: "滑稽", chinese_romanization: "huájī" },
            { option: "D", answer: "dull", chinese_answer: "枯燥", chinese_romanization: "kūzào" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'hilarious' means extremely funny." +
            "<br><br>" +
            "(A) 'boring' means not interesting; tedious." +
            "<br><br>" +
            "(B) 'serious' means solemn or thoughtful in character or manner." +
            "<br><br>" +
            "(D) 'dull' means lacking interest or excitement.",
        chinese_explanation: "(C) '滑稽' 意味着极其有趣。" +
            "<br><br>" +
            "(A) '无聊' 意味着没有趣味；乏味。" +
            "<br><br>" +
            "(B) '严肃' 意味着性格或举止庄重或深思。" +
            "<br><br>" +
            "(D) '枯燥' 意味着缺乏兴趣或兴奋。"
    },
    {
        id: 8,
        question: "His argument was __________, based on incorrect assumptions and misleading information.",
        chinese_question: "他的论点是__________的，基于错误的假设和误导性的信息。",
        answers: [
            { option: "A", answer: "valid", chinese_answer: "合理的", chinese_romanization: "hélǐ de" },
            { option: "B", answer: "logical", chinese_answer: "逻辑的", chinese_romanization: "luójí de" },
            { option: "C", answer: "fallacious", chinese_answer: "谬误的", chinese_romanization: "miùwù de" },
            { option: "D", answer: "sound", chinese_answer: "正确的", chinese_romanization: "zhèngquè de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'fallacious' means based on a mistaken belief." +
            "<br><br>" +
            "(A) 'valid' means having a sound basis in logic or fact; reasonable." +
            "<br><br>" +
            "(B) 'logical' means of or according to the rules of logic or formal argument." +
            "<br><br>" +
            "(D) 'sound' means based on valid reason or good judgment.",
        chinese_explanation: "(C) '谬误的'一词意味着基于错误的信念。" +
            "<br><br>" +
            "(A) '合理的' 意味着在逻辑或事实上有合理依据的。" +
            "<br><br>" +
            "(B) '逻辑的' 意味着符合逻辑规则或形式论证的。" +
            "<br><br>" +
            "(D) '正确的' 意味着基于合理理由或良好判断的。"
    },
    {
        id: 9,
        question: "After the team lost the championship, the mood in the locker room was __________, with players sitting silently in despair.",
        chinese_question: "在球队失去冠军后，休息室里的气氛 __________，球员们默默地坐在绝望中。",
        answers: [
            { option: "A", answer: "desolate", chinese_answer: "凄凉的", chinese_romanization: "qīliáng de" },
            { option: "B", answer: "cheerful", chinese_answer: "快乐的", chinese_romanization: "kuàilè de" },
            { option: "C", answer: "hopeful", chinese_answer: "有希望的", chinese_romanization: "yǒu xīwàng de" },
            { option: "D", answer: "excited", chinese_answer: "激动的", chinese_romanization: "jīdòng de" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'desolate' means feeling or showing great unhappiness or loneliness." +
            "<br><br>" +
            "(B) 'cheerful' means noticeably happy and optimistic." +
            "<br><br>" +
            "(C) 'hopeful' means feeling or inspiring optimism about a future event." +
            "<br><br>" +
            "(D) 'excited' means very enthusiastic and eager.",
        chinese_explanation: "(A) '凄凉的' 意味着感到或表现出极度的不幸福或孤独。" +
            "<br><br>" +
            "(B) '快乐的' 意味着明显地快乐和乐观的。" +
            "<br><br>" +
            "(C) '有希望的' 意味着对未来事件感到或激发乐观的。" +
            "<br><br>" +
            "(D) '激动的' 意味着非常热情和渴望的。"
    },
    {
        id: 10,
        question: "His __________ choice of words during the negotiation helped to avoid any misunderstandings and kept the discussion on track.",
        chinese_question: "他在谈判中 __________ 地选择用词，帮助避免了任何误解，并使讨论保持在正轨上。",
        answers: [
            { option: "A", answer: "deliberate", chinese_answer: "深思熟虑的", chinese_romanization: "shēnsī shúlǜ de" },
            { option: "B", answer: "hasty", chinese_answer: "匆忙的", chinese_romanization: "cōngmáng de" },
            { option: "C", answer: "spontaneous", chinese_answer: "自发的", chinese_romanization: "zìfā de" },
            { option: "D", answer: "careless", chinese_answer: "粗心的", chinese_romanization: "cūxīn de" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'deliberate' means done consciously and intentionally." +
            "<br><br>" +
            "(B) 'hasty' means done with excessive speed or urgency; hurried." +
            "<br><br>" +
            "(C) 'spontaneous' means performed or occurring as a result of a sudden inner impulse or inclination and without premeditation." +
            "<br><br>" +
            "(D) 'careless' means not giving sufficient attention or thought to avoiding harm or errors.",
        chinese_explanation: "(A) '深思熟虑的' 意味着有意识地和有意地做的。" +
            "<br><br>" +
            "(B) '匆忙的' 意味着以过快或紧急的方式完成的；匆忙的。" +
            "<br><br>" +
            "(C) '自发的' 意味着作为突然的内在冲动或倾向的结果执行或发生的；未经预谋的。" +
            "<br><br>" +
            "(D) '粗心的' 意味着没有给予足够的注意或思考以避免伤害或错误的。"
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
