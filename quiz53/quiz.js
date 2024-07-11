// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "The strong sense of __________ among the team members helped them achieve their goals through mutual support and trust.",
        chinese_question: "团队成员之间的强烈 __________ 感帮助他们通过互相支持和信任实现了他们的目标。",
        answers: [
            { option: "A", answer: "rivalry", chinese_answer: "竞争", chinese_romanization: "jìngzhēng" },
            { option: "B", answer: "camaraderie", chinese_answer: "友情", chinese_romanization: "yǒuqíng" },
            { option: "C", answer: "loneliness", chinese_answer: "孤独", chinese_romanization: "gūdú" },
            { option: "D", answer: "hostility", chinese_answer: "敌意", chinese_romanization: "díyì" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'camaraderie' means mutual trust and friendship among people who spend a lot of time together." +
            "<br><br>" +
            "(A) 'rivalry' means competition for the same objective or for superiority in the same field." +
            "<br><br>" +
            "(C) 'loneliness' means sadness because one has no friends or company." +
            "<br><br>" +
            "(D) 'hostility' means hostile behavior; unfriendliness or opposition.",
        chinese_explanation: "(B) '友情' 一词意味着在一起花费大量时间的人之间的相互信任和友谊。" +
            "<br><br>" +
            "(A) '竞争' 意味着为了相同的目标或在相同领域争取优越性的竞争。" +
            "<br><br>" +
            "(C) '孤独' 意味着因为没有朋友或陪伴而感到的悲伤。" +
            "<br><br>" +
            "(D) '敌意' 意味着敌对行为；不友好或反对。"
    },
    {
        id: 2,
        question: "There was a palpable __________ between the two rival teams, which was evident during the heated match.",
        chinese_question: "两支对立球队之间存在明显的 __________，这在激烈的比赛中显而易见。",
        answers: [
            { option: "A", answer: "friendship", chinese_answer: "友谊", chinese_romanization: "yǒuyì" },
            { option: "B", answer: "animosity", chinese_answer: "敌意", chinese_romanization: "díyì" },
            { option: "C", answer: "cooperation", chinese_answer: "合作", chinese_romanization: "hézuò" },
            { option: "D", answer: "harmony", chinese_answer: "和谐", chinese_romanization: "héxié" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'animosity' means strong hostility." +
            "<br><br>" +
            "(A) 'friendship' means the emotions or conduct of friends; the state of being friends." +
            "<br><br>" +
            "(C) 'cooperation' means the process of working together to the same end." +
            "<br><br>" +
            "(D) 'harmony' means the combination of simultaneously sounded musical notes to produce chords and chord progressions having a pleasing effect.",
        chinese_explanation: "(B) '敌意' 一词意味着强烈的敌意。" +
            "<br><br>" +
            "(A) '友谊' 意味着朋友的情感或行为；友谊状态。" +
            "<br><br>" +
            "(C) '合作' 意味着共同努力实现相同目标的过程。" +
            "<br><br>" +
            "(D) '和谐' 意味着同时发声的音符的组合，产生和弦和和弦进行，具有愉悦的效果。"
    },
    {
        id: 3,
        question: "The luxurious hotel offered a wide range of __________, including a spa, fitness center, and gourmet restaurant.",
        chinese_question: "这家豪华酒店提供了多种 __________，包括水疗中心、健身中心和美食餐厅。",
        answers: [
            { option: "A", answer: "inconveniences", chinese_answer: "不便", chinese_romanization: "bùbiàn" },
            { option: "B", answer: "amenities", chinese_answer: "设施", chinese_romanization: "shèshī" },
            { option: "C", answer: "discomforts", chinese_answer: "不适", chinese_romanization: "bùshì" },
            { option: "D", answer: "hardships", chinese_answer: "艰辛", chinese_romanization: "jiānxīn" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'amenities' means a desirable or useful feature or facility of a building or place." +
            "<br><br>" +
            "(A) 'inconveniences' means troubles or difficulties caused to one's personal requirements or comfort." +
            "<br><br>" +
            "(C) 'discomforts' means slight pain or physical discomfort." +
            "<br><br>" +
            "(D) 'hardships' means severe suffering or privation.",
        chinese_explanation: "(B) '设施' 一词意味着建筑物或地方的理想或有用的功能或设施。" +
            "<br><br>" +
            "(A) '不便' 意味着对个人需求或舒适造成的麻烦或困难。" +
            "<br><br>" +
            "(C) '不适' 意味着轻微的疼痛或身体不适。" +
            "<br><br>" +
            "(D) '艰辛' 意味着严重的痛苦或贫困。"
    },
    {
        id: 4,
        question: "The engineers developed a new __________ that combined strength and lightweight properties, ideal for aerospace applications.",
        chinese_question: "工程师们开发了一种新的 __________，结合了强度和轻质特性，非常适合航空航天应用。",
        answers: [
            { option: "A", answer: "metal", chinese_answer: "金属", chinese_romanization: "jīnshǔ" },
            { option: "B", answer: "alloy", chinese_answer: "合金", chinese_romanization: "héjīn" },
            { option: "C", answer: "plastic", chinese_answer: "塑料", chinese_romanization: "sùliào" },
            { option: "D", answer: "ceramic", chinese_answer: "陶瓷", chinese_romanization: "táocí" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'alloy' means a metal made by combining two or more metallic elements, especially to give greater strength or resistance to corrosion." +
            "<br><br>" +
            "(A) 'metal' means a solid material that is typically hard, shiny, malleable, fusible, and ductile, with good electrical and thermal conductivity." +
            "<br><br>" +
            "(C) 'plastic' means a synthetic material made from a wide range of organic polymers." +
            "<br><br>" +
            "(D) 'ceramic' means a non-metallic solid material comprising an inorganic compound of metal, non-metal, or metalloid atoms primarily held in ionic and covalent bonds.",
        chinese_explanation: "(B) '合金' 一词意味着通过结合两种或更多金属元素制成的金属，特别是为了增加强度或耐腐蚀性。" +
            "<br><br>" +
            "(A) '金属' 意味着一种通常是坚硬、有光泽、可锻造、可熔化和可拉伸的固体材料，具有良好的电导率和热导率。" +
            "<br><br>" +
            "(C) '塑料' 意味着由多种有机聚合物制成的合成材料。" +
            "<br><br>" +
            "(D) '陶瓷' 意味着一种非金属固体材料，主要由金属、非金属或类金属原子组成的无机化合物，通过离子和共价键主要结合。"
    },
    {
        id: 5,
        question: "Her calm and composed __________ during the crisis impressed everyone and helped to maintain order.",
        chinese_question: "在危机期间，她冷静而镇定的 __________ 给大家留下了深刻印象，并帮助保持了秩序。",
        answers: [
            { option: "A", answer: "chaos", chinese_answer: "混乱", chinese_romanization: "hùnluàn" },
            { option: "B", answer: "demeanour", chinese_answer: "行为举止", chinese_romanization: "xíngwéi jǔzhǐ" },
            { option: "C", answer: "disorder", chinese_answer: "无序", chinese_romanization: "wúxù" },
            { option: "D", answer: "turmoil", chinese_answer: "动荡", chinese_romanization: "dòngdàng" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'demeanour' means outward behavior or bearing." +
            "<br><br>" +
            "(A) 'chaos' means complete disorder and confusion." +
            "<br><br>" +
            "(C) 'disorder' means a state of confusion." +
            "<br><br>" +
            "(D) 'turmoil' means a state of great disturbance, confusion, or uncertainty.",
        chinese_explanation: "(B) '行为举止' 意味着外在的行为或举止。" +
            "<br><br>" +
            "(A) '混乱' 意味着完全的混乱和困惑。" +
            "<br><br>" +
            "(C) '无序' 意味着一种困惑的状态。" +
            "<br><br>" +
            "(D) '动荡' 意味着巨大的动荡、困惑或不确定的状态。"
    },
    {
        id: 6,
        question: "The stock market took a sharp __________ after the unexpected economic report was released.",
        chinese_question: "在意外的经济报告发布后，股市急剧 __________。",
        answers: [
            { option: "A", answer: "rise", chinese_answer: "上升", chinese_romanization: "shàngshēng" },
            { option: "B", answer: "drift", chinese_answer: "漂移", chinese_romanization: "piāoyí" },
            { option: "C", answer: "plummet", chinese_answer: "暴跌", chinese_romanization: "bàodiē" },
            { option: "D", answer: "float", chinese_answer: "漂浮", chinese_romanization: "piāofú" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'plummet' means to fall or drop straight down at high speed." +
            "<br><br>" +
            "(A) 'rise' means to move from a lower position to a higher one." +
            "<br><br>" +
            "(B) 'drift' means to be carried slowly by a current of air or water." +
            "<br><br>" +
            "(D) 'float' means to rest or move on or near the surface of a liquid without sinking.",
        chinese_explanation: "(C) '暴跌' 一词意味着高速垂直下落或掉落。" +
            "<br><br>" +
            "(A) '上升' 意味着从低位移动到高位。" +
            "<br><br>" +
            "(B) '漂移' 意味着被空气或水流慢慢带走。" +
            "<br><br>" +
            "(D) '漂浮' 意味着在液体表面上或附近休息或移动而不下沉。"
    },
    {
        id: 7,
        question: "The apartment's __________ to the subway station made it a convenient choice for commuters.",
        chinese_question: "公寓 __________ 地铁站的位置使其成为通勤者的便利选择。",
        answers: [
            { option: "A", answer: "distance", chinese_answer: "距离", chinese_romanization: "jùlí" },
            { option: "B", answer: "proximity", chinese_answer: "接近", chinese_romanization: "jiējìn" },
            { option: "C", answer: "remoteness", chinese_answer: "偏远", chinese_romanization: "piānyuǎn" },
            { option: "D", answer: "separation", chinese_answer: "分离", chinese_romanization: "fēnlí" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'proximity' means nearness in space, time, or relationship." +
            "<br><br>" +
            "(A) 'distance' means the amount of space between two things or people." +
            "<br><br>" +
            "(C) 'remoteness' means the state of being distant from something else, in particular from the main centers of population." +
            "<br><br>" +
            "(D) 'separation' means the action or state of moving or being moved apart.",
        chinese_explanation: "(B) '接近' 一词意味着在空间、时间或关系上的接近。" +
            "<br><br>" +
            "(A) '距离' 意味着两物或两人之间的空间量。" +
            "<br><br>" +
            "(C) '偏远' 意味着远离其他东西的状态，特别是远离人口中心。" +
            "<br><br>" +
            "(D) '分离' 意味着移动或被移动开的动作或状态。"
    },
    {
        id: 8,
        question: "The salesman's pitch was full of __________ meant to grab the attention of potential customers.",
        chinese_question: "推销员的推销充满了 __________，旨在吸引潜在客户的注意。",
        answers: [
            { option: "A", answer: "honesty", chinese_answer: "诚实", chinese_romanization: "chéngshí" },
            { option: "B", answer: "gimmicks", chinese_answer: "花招", chinese_romanization: "huāzhāo" },
            { option: "C", answer: "sincerity", chinese_answer: "真诚", chinese_romanization: "zhēnchéng" },
            { option: "D", answer: "truths", chinese_answer: "真实", chinese_romanization: "zhēnshí" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'gimmicks' means a trick or device intended to attract attention, publicity, or business." +
            "<br><br>" +
            "(A) 'honesty' means the quality of being honest." +
            "<br><br>" +
            "(C) 'sincerity' means the quality of being free from pretense, deceit, or hypocrisy." +
            "<br><br>" +
            "(D) 'truths' means the quality or state of being true.",
        chinese_explanation: "(B) '花招' 一词意味着一种吸引注意、宣传或业务的技巧或装置。" +
            "<br><br>" +
            "(A) '诚实' 意味着诚实的品质。" +
            "<br><br>" +
            "(C) '真诚' 意味着没有虚伪、欺骗或伪善的品质。" +
            "<br><br>" +
            "(D) '真实' 意味着真实的状态或性质。"
    },
    {
        id: 9,
        question: "Failing to study for the exam will result in the __________ of a lower grade.",
        chinese_question: "不复习考试将导致 __________，即成绩降低。",
        answers: [
            { option: "A", answer: "reward", chinese_answer: "奖励", chinese_romanization: "jiǎnglì" },
            { option: "B", answer: "benefit", chinese_answer: "好处", chinese_romanization: "hǎochù" },
            { option: "C", answer: "consequence", chinese_answer: "后果", chinese_romanization: "hòuguǒ" },
            { option: "D", answer: "advantage", chinese_answer: "优势", chinese_romanization: "yōushì" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'consequence' means a result or effect of an action or condition." +
            "<br><br>" +
            "(A) 'reward' means a thing given in recognition of one's service, effort, or achievement." +
            "<br><br>" +
            "(B) 'benefit' means an advantage or profit gained from something." +
            "<br><br>" +
            "(D) 'advantage' means a condition or circumstance that puts one in a favorable or superior position.",
        chinese_explanation: "(C) '后果' 一词意味着某种行为或条件的结果或影响。" +
            "<br><br>" +
            "(A) '奖励' 意味着因某人的服务、努力或成就而给予的事物。" +
            "<br><br>" +
            "(B) '好处' 意味着从某事中获得的优势或利益。" +
            "<br><br>" +
            "(D) '优势' 意味着使一个人处于有利或优越位置的条件或环境。"
    },
    {
        id: 10,
        question: "The wildlife reserve served as a __________ for endangered species, protecting them from harm.",
        chinese_question: "野生动物保护区是濒危物种的 __________，保护它们免受伤害。",
        answers: [
            { option: "A", answer: "trap", chinese_answer: "陷阱", chinese_romanization: "xiànjǐng" },
            { option: "B", answer: "prison", chinese_answer: "监狱", chinese_romanization: "jiānyù" },
            { option: "C", answer: "sanctuary", chinese_answer: "避难所", chinese_romanization: "bìnán suǒ" },
            { option: "D", answer: "battlefield", chinese_answer: "战场", chinese_romanization: "zhànchǎng" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'sanctuary' means a place of refuge or safety." +
            "<br><br>" +
            "(A) 'trap' means a device or enclosure designed to catch and retain animals." +
            "<br><br>" +
            "(B) 'prison' means a building in which people are legally held as a punishment for crimes they have committed." +
            "<br><br>" +
            "(D) 'battlefield' means the piece of ground on which a battle is or was fought.",
        chinese_explanation: "(C) '避难所' 一词意味着避难或安全的地方。" +
            "<br><br>" +
            "(A) '陷阱' 意味着用于捕捉和保留动物的装置或围栏。" +
            "<br><br>" +
            "(B) '监狱' 意味着人们因犯下的罪行被合法关押的建筑。" +
            "<br><br>" +
            "(D) '战场' 意味着战斗正在或曾经进行的那片土地。"
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
