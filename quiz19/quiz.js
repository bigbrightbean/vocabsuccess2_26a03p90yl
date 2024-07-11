// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "The __________ portions of food left the guests hungry and unsatisfied after the meal.",
        chinese_question: "食物的 __________ 份量让客人们在餐后感到饥饿和不满意。",
        answers: [
            { option: "A", answer: "generous", chinese_answer: "慷慨的", chinese_romanization: "kāngkǎi de" },
            { option: "B", answer: "abundant", chinese_answer: "丰富的", chinese_romanization: "fēngfù de" },
            { option: "C", answer: "meager", chinese_answer: "稀少的", chinese_romanization: "xīshǎo de" },
            { option: "D", answer: "plentiful", chinese_answer: "充足的", chinese_romanization: "chōngzú de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'meager' means lacking in quantity or quality." +
            "<br><br>" +
            "(A) 'generous' means showing a readiness to give more of something than is strictly necessary or expected." +
            "<br><br>" +
            "(B) 'abundant' means existing or available in large quantities; plentiful." +
            "<br><br>" +
            "(D) 'plentiful' means existing in or yielding great quantities; abundant.",
        chinese_explanation: "(C) '稀少的' 一词意味着数量或质量不足的。" +
            "<br><br>" +
            "(A) '慷慨的' 意味着表现出愿意给予比严格必要或预期更多的东西。" +
            "<br><br>" +
            "(B) '丰富的' 意味着存在或可用的大量的；丰富的。" +
            "<br><br>" +
            "(D) '充足的' 意味着存在或产生大量的；丰富的。"
    },
    {
        id: 2,
        question: "Despite numerous pleas from her friends, she remained __________ about not attending the party, firmly stating that she had other commitments.",
        chinese_question: "尽管朋友们多次恳求，她仍然 __________ 地拒绝参加聚会，坚决表示她有其他的承诺。",
        answers: [
            { option: "A", answer: "uncertain", chinese_answer: "不确定的", chinese_romanization: "bù quèdìng de" },
            { option: "B", answer: "hesitant", chinese_answer: "犹豫的", chinese_romanization: "yóuyù de" },
            { option: "C", answer: "flexible", chinese_answer: "灵活的", chinese_romanization: "línghuó de" },
            { option: "D", answer: "adamant", chinese_answer: "坚定的", chinese_romanization: "jiāndìng de" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'adamant' means refusing to be persuaded or to change one's mind." +
            "<br><br>" +
            "(A) 'uncertain' means not able to be relied on; not known or definite." +
            "<br><br>" +
            "(B) 'hesitant' means tentative, unsure, or slow in acting or speaking." +
            "<br><br>" +
            "(C) 'flexible' means capable of bending easily without breaking; able to be easily modified to respond to altered circumstances.",
        chinese_explanation: "(D) '坚定的' 意味着拒绝被说服或改变主意。" +
            "<br><br>" +
            "(A) '不确定的' 意味着不能依赖的；不确定的或明确的。" +
            "<br><br>" +
            "(B) '犹豫的' 意味着试探性的、不确定的或行动或说话缓慢的。" +
            "<br><br>" +
            "(C) '灵活的' 意味着能够轻松弯曲而不断裂；能够轻松修改以应对改变的情况。"
    },
    {
        id: 3,
        question: "Known for his __________ nature, he was always the life of the party, enjoying the company of friends and strangers alike.",
        chinese_question: "他以 __________ 的性格著称，总是派对的灵魂，享受朋友和陌生人的陪伴。",
        answers: [
            { option: "A", answer: "shy", chinese_answer: "害羞的", chinese_romanization: "hàixiū de" },
            { option: "B", answer: "gregarious", chinese_answer: "群居的", chinese_romanization: "qúnjū de" },
            { option: "C", answer: "introverted", chinese_answer: "内向的", chinese_romanization: "nèixiàng de" },
            { option: "D", answer: "reserved", chinese_answer: "矜持的", chinese_romanization: "jīnchí de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'gregarious' means (of a person) fond of company; sociable." +
            "<br><br>" +
            "(A) 'shy' means being reserved or having or showing nervousness or timidity in the company of other people." +
            "<br><br>" +
            "(C) 'introverted' means of, denoting, or typical of an introvert." +
            "<br><br>" +
            "(D) 'reserved' means slow to reveal emotion or opinions.",
        chinese_explanation: "(B) '群居的' 意味着（指人）喜欢陪伴；社交的。" +
            "<br><br>" +
            "(A) '害羞的' 意味着在别人面前表现出拘谨或紧张的。" +
            "<br><br>" +
            "(C) '内向的' 意味着内向者的、表示内向者的或典型的。" +
            "<br><br>" +
            "(D) '矜持的' 意味着慢于表现情感或意见的。"
    },
    {
        id: 4,
        question: "Flu outbreaks are more __________ during the winter months when people spend more time indoors.",
        chinese_question: "在冬季，流感暴发更为 __________，因为人们花更多时间在室内。",
        answers: [
            { option: "A", answer: "rare", chinese_answer: "罕见的", chinese_romanization: "hǎnjiàn de" },
            { option: "B", answer: "uncommon", chinese_answer: "不常见的", chinese_romanization: "bù chángjiàn de" },
            { option: "C", answer: "prevalent", chinese_answer: "普遍的", chinese_romanization: "pǔbiàn de" },
            { option: "D", answer: "unusual", chinese_answer: "不寻常的", chinese_romanization: "bù xúncháng de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'prevalent' means widespread in a particular area or at a particular time." +
            "<br><br>" +
            "(A) 'rare' means (of an event, situation, or condition) not occurring very often." +
            "<br><br>" +
            "(B) 'uncommon' means out of the ordinary; unusual." +
            "<br><br>" +
            "(D) 'unusual' means not habitually or commonly occurring or done.",
        chinese_explanation: "(C) '普遍的' 一词意味着在特定区域或时间内广泛传播的。" +
            "<br><br>" +
            "(A) '罕见的' 意味着（事件、情况或条件）不经常发生的。" +
            "<br><br>" +
            "(B) '不常见的' 意味着不同寻常的；不常见的。" +
            "<br><br>" +
            "(D) '不寻常的' 意味着不习惯或不常发生或做的。"
    },
    {
        id: 5,
        question: "Seasonal allergies are __________ in this region, with many people suffering from symptoms like sneezing and itchy eyes during spring.",
        chinese_question: "季节性过敏在这个地区非常 __________，很多人在春季会出现打喷嚏和眼睛发痒等症状。",
        answers: [
            { option: "A", answer: "rare", chinese_answer: "稀有的", chinese_romanization: "xīyǒu de" },
            { option: "B", answer: "uncommon", chinese_answer: "不常见的", chinese_romanization: "bù chángjiàn de" },
            { option: "C", answer: "isolated", chinese_answer: "孤立的", chinese_romanization: "gūlì de" },
            { option: "D", answer: "prevalent", chinese_answer: "普遍的", chinese_romanization: "pǔbiàn de" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'prevalent' means widespread in a particular area or at a particular time." +
            "<br><br>" +
            "(A) 'rare' means not occurring very often." +
            "<br><br>" +
            "(B) 'uncommon' means out of the ordinary; unusual." +
            "<br><br>" +
            "(C) 'isolated' means far away from other places, buildings, or people; remote.",
        chinese_explanation: "(D) '普遍的' 意味着在特定地区或特定时间广泛存在的。" +
            "<br><br>" +
            "(A) '稀有的' 意味着不经常发生的。" +
            "<br><br>" +
            "(B) '不常见的' 意味着不同寻常的；不常见的。" +
            "<br><br>" +
            "(C) '孤立的' 意味着远离其他地方、建筑物或人的；偏远的。"
    },
    {
        id: 6,
        question: "She was __________ when she tripped and fell in front of her colleagues during the meeting.",
        chinese_question: "她在会议上当着同事的面绊倒了，感到非常 __________。",
        answers: [
            { option: "A", answer: "delighted", chinese_answer: "高兴的", chinese_romanization: "gāoxìng de" },
            { option: "B", answer: "elated", chinese_answer: "兴奋的", chinese_romanization: "xīngfèn de" },
            { option: "C", answer: "mortified", chinese_answer: "尴尬的", chinese_romanization: "gāngà de" },
            { option: "D", answer: "thrilled", chinese_answer: "激动的", chinese_romanization: "jīdòng de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'mortified' means cause (someone) to feel embarrassed, ashamed, or humiliated." +
            "<br><br>" +
            "(A) 'delighted' means feeling or showing great pleasure." +
            "<br><br>" +
            "(B) 'elated' means make (someone) ecstatically happy." +
            "<br><br>" +
            "(D) 'thrilled' means cause (someone) to have a sudden feeling of excitement and pleasure.",
        chinese_explanation: "(C) '尴尬的' 一词意味着使（某人）感到尴尬、羞愧或羞辱。" +
            "<br><br>" +
            "(A) '高兴的' 意味着感到或表现出极大的愉快。" +
            "<br><br>" +
            "(B) '兴奋的' 意味着使（某人）欣喜若狂。" +
            "<br><br>" +
            "(D) '激动的' 意味着使（某人）有突然的兴奋和愉悦的感觉。"
    },
    {
        id: 7,
        question: "The crime was so __________ that it shocked the entire community, leaving everyone in disbelief.",
        chinese_question: "这个罪行是如此 __________，整个社区都感到震惊，所有人都不敢相信。",
        answers: [
            { option: "A", answer: "minor", chinese_answer: "轻微的", chinese_romanization: "qīngwēi de" },
            { option: "B", answer: "trivial", chinese_answer: "微不足道的", chinese_romanization: "wēibùzúdào de" },
            { option: "C", answer: "heinous", chinese_answer: "恶毒的", chinese_romanization: "èdú de" },
            { option: "D", answer: "forgivable", chinese_answer: "可原谅的", chinese_romanization: "kě yuánliàng de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'heinous' means utterly odious or wicked." +
            "<br><br>" +
            "(A) 'minor' means lesser in importance, seriousness, or significance." +
            "<br><br>" +
            "(B) 'trivial' means of little value or importance." +
            "<br><br>" +
            "(D) 'forgivable' means able to be forgiven or excused.",
        chinese_explanation: "(C) '恶毒的' 一词意味着极其可憎的或邪恶的。" +
            "<br><br>" +
            "(A) '轻微的' 意味着在重要性、严重性或意义上较小的。" +
            "<br><br>" +
            "(B) '微不足道的' 意味着价值或重要性很小的。" +
            "<br><br>" +
            "(D) '可原谅的' 意味着可以被原谅或宽恕的。"
    },
    {
        id: 8,
        question: "The debate became __________ as both sides passionately defended their viewpoints, refusing to back down.",
        chinese_question: "辩论变得 __________，因为双方都热情地捍卫自己的观点，拒绝退让。",
        answers: [
            { option: "A", answer: "intense", chinese_answer: "激烈的", chinese_romanization: "jīliè de" },
            { option: "B", answer: "casual", chinese_answer: "随意的", chinese_romanization: "suíyì de" },
            { option: "C", answer: "relaxed", chinese_answer: "放松的", chinese_romanization: "fàngsōng de" },
            { option: "D", answer: "indifferent", chinese_answer: "漠不关心的", chinese_romanization: "mò bù guānxīn de" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'intense' means of extreme force, degree, or strength." +
            "<br><br>" +
            "(B) 'casual' means relaxed and unconcerned." +
            "<br><br>" +
            "(C) 'relaxed' means free from tension and anxiety." +
            "<br><br>" +
            "(D) 'indifferent' means having no particular interest or sympathy; unconcerned.",
        chinese_explanation: "(A) '激烈的' 意味着力量、程度或强度极大的。" +
            "<br><br>" +
            "(B) '随意的' 意味着放松和不关心的。" +
            "<br><br>" +
            "(C) '放松的' 意味着没有紧张和焦虑的。" +
            "<br><br>" +
            "(D) '漠不关心的' 意味着没有特别的兴趣或同情；不关心的。"
    },
    {
        id: 9,
        question: "The professor's __________ expression made it difficult for students to tell if their answers were correct.",
        chinese_question: "教授的 __________ 表情让学生们很难判断他们的答案是否正确。",
        answers: [
            { option: "A", answer: "inscrutable", chinese_answer: "高深莫测的", chinese_romanization: "gāoshēn mòcè de" },
            { option: "B", answer: "transparent", chinese_answer: "透明的", chinese_romanization: "tòumíng de" },
            { option: "C", answer: "obvious", chinese_answer: "明显的", chinese_romanization: "míngxiǎn de" },
            { option: "D", answer: "clear", chinese_answer: "清晰的", chinese_romanization: "qīngxī de" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'inscrutable' means impossible to understand or interpret." +
            "<br><br>" +
            "(B) 'transparent' means easy to perceive or detect." +
            "<br><br>" +
            "(C) 'obvious' means easily perceived or understood; clear." +
            "<br><br>" +
            "(D) 'clear' means easy to perceive, understand, or interpret.",
        chinese_explanation: "(A) '高深莫测的' 意味着难以理解或解释的。" +
            "<br><br>" +
            "(B) '透明的' 意味着容易察觉或检测的。" +
            "<br><br>" +
            "(C) '明显的' 意味着容易察觉或理解的；清楚的。" +
            "<br><br>" +
            "(D) '清晰的' 意味着容易察觉、理解或解释的。"
    },
    {
        id: 10,
        question: "The __________ heat wave caused many residents to stay indoors to avoid the extreme temperatures.",
        chinese_question: "__________ 的热浪使许多居民留在室内以避免极端温度。",
        answers: [
            { option: "A", answer: "mild", chinese_answer: "温和的", chinese_romanization: "wēnhé de" },
            { option: "B", answer: "moderate", chinese_answer: "适度的", chinese_romanization: "shìdù de" },
            { option: "C", answer: "excessive", chinese_answer: "过度的", chinese_romanization: "guòdù de" },
            { option: "D", answer: "pleasant", chinese_answer: "愉快的", chinese_romanization: "yúkuài de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'excessive' means more than is necessary, normal, or desirable; immoderate." +
            "<br><br>" +
            "(A) 'mild' means not severe, serious, or harsh." +
            "<br><br>" +
            "(B) 'moderate' means average in amount, intensity, quality, or degree." +
            "<br><br>" +
            "(D) 'pleasant' means giving a sense of happy satisfaction or enjoyment.",
        chinese_explanation: "(C) '过度的' 一词意味着超过必要、正常或理想的；不适度的。" +
            "<br><br>" +
            "(A) '温和的' 意味着不严厉、严重或苛刻的。" +
            "<br><br>" +
            "(B) '适度的' 意味着在数量、强度、质量或程度上平均的。" +
            "<br><br>" +
            "(D) '愉快的' 意味着带来幸福满意或享受的感觉。"
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
