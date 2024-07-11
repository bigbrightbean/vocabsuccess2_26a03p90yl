// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "The politician's __________ stance on tax reform made it difficult to reach a consensus, as he refused to consider any alternative proposals.",
        chinese_question: "这位政治家在税改问题上的 __________ 立场使得达成共识变得困难，因为他拒绝考虑任何替代方案。",
        answers: [
            { option: "A", answer: "compromising", chinese_answer: "妥协的", chinese_romanization: "tuǒxié de" },
            { option: "B", answer: "open-minded", chinese_answer: "思想开明的", chinese_romanization: "sīxiǎng kāimíng de" },
            { option: "C", answer: "agreeable", chinese_answer: "令人愉快的", chinese_romanization: "lìng rén yúkuài de" },
            { option: "D", answer: "intransigent", chinese_answer: "不妥协的", chinese_romanization: "bù tuǒxié de" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'intransigent' means unwilling or refusing to change one's views or to agree about something." +
            "<br><br>" +
            "(A) 'compromising' means willing to make concessions." +
            "<br><br>" +
            "(B) 'open-minded' means willing to consider new ideas; unprejudiced." +
            "<br><br>" +
            "(C) 'agreeable' means enjoyable and pleasurable; pleasant.",
        chinese_explanation: "(D) '不妥协的' 意味着不愿意或拒绝改变自己的观点或就某事达成一致。" +
            "<br><br>" +
            "(A) '妥协的' 意味着愿意做出让步的。" +
            "<br><br>" +
            "(B) '思想开明的' 意味着愿意考虑新想法的；无偏见的。" +
            "<br><br>" +
            "(C) '令人愉快的' 意味着愉快和令人高兴的；令人愉快的。"
    },
    {
        id: 2,
        question: "The breathtaking view left her completely __________.",
        chinese_question: "令人叹为观止的景色让她完全 __________。",
        answers: [
            { option: "A", answer: "speechless", chinese_answer: "无言以对", chinese_romanization: "wú yán yǐ duì" },
            { option: "B", answer: "talkative", chinese_answer: "健谈", chinese_romanization: "jiàntán" },
            { option: "C", answer: "indifferent", chinese_answer: "漠不关心", chinese_romanization: "mò bù guānxīn" },
            { option: "D", answer: "bored", chinese_answer: "无聊", chinese_romanization: "wúliáo" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'speechless' means unable to speak, especially as the result of shock or strong emotion." +
            "<br><br>" +
            "(B) 'talkative' means fond of or given to talking." +
            "<br><br>" +
            "(C) 'indifferent' means having no particular interest or sympathy." +
            "<br><br>" +
            "(D) 'bored' means feeling weary and impatient because one is unoccupied or lacks interest in one's current activity.",
        chinese_explanation: "(A) '无言以对' 意味着无法说话，尤其是由于震惊或强烈情感的结果。" +
            "<br><br>" +
            "(B) '健谈' 意味着喜欢或习惯于谈话。" +
            "<br><br>" +
            "(C) '漠不关心' 意味着没有特别的兴趣或同情心。" +
            "<br><br>" +
            "(D) '无聊' 意味着因没有工作或对当前活动缺乏兴趣而感到厌倦和不耐烦。"
    },
    {
        id: 3,
        question: "Her __________ nature made her difficult to work with, as she constantly found faults in her colleagues' work and was never satisfied.",
        chinese_question: "她的 __________ 性格使她很难相处，因为她不断地在同事的工作中挑毛病，永远不满意。",
        answers: [
            { option: "A", answer: "supportive", chinese_answer: "支持的", chinese_romanization: "zhīchí de" },
            { option: "B", answer: "helpful", chinese_answer: "有帮助的", chinese_romanization: "yǒu bāngzhù de" },
            { option: "C", answer: "understanding", chinese_answer: "理解的", chinese_romanization: "lǐjiě de" },
            { option: "D", answer: "censorious", chinese_answer: "挑剔的", chinese_romanization: "tiāotì de" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'censorious' means severely critical of others." +
            "<br><br>" +
            "(A) 'supportive' means providing encouragement or emotional help." +
            "<br><br>" +
            "(B) 'helpful' means giving or ready to give help." +
            "<br><br>" +
            "(C) 'understanding' means sympathetically aware of other people's feelings; tolerant and forgiving.",
        chinese_explanation: "(D) '挑剔的' 意味着对他人严厉批评的。" +
            "<br><br>" +
            "(A) '支持的' 意味着提供鼓励或情感帮助的。" +
            "<br><br>" +
            "(B) '有帮助的' 意味着给予或准备给予帮助的。" +
            "<br><br>" +
            "(C) '理解的' 意味着对他人的感受同情地意识到的；宽容和原谅的。"
    },
    {
        id: 4,
        question: "Entering the construction site without proper safety gear was __________, and violators could be fined or removed from the premises.",
        chinese_question: "未经适当的安全装备进入施工现场是 __________ 的，违反者可能会被罚款或从现场移除。",
        answers: [
            { option: "A", answer: "permitted", chinese_answer: "允许的", chinese_romanization: "yǔnxǔ de" },
            { option: "B", answer: "recommended", chinese_answer: "推荐的", chinese_romanization: "tuījiàn de" },
            { option: "C", answer: "advised", chinese_answer: "建议的", chinese_romanization: "jiànyì de" },
            { option: "D", answer: "forbidden", chinese_answer: "禁止的", chinese_romanization: "jìnzhǐ de" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'forbidden' means not allowed; banned." +
            "<br><br>" +
            "(A) 'permitted' means allowed." +
            "<br><br>" +
            "(B) 'recommended' means suggested as advisable." +
            "<br><br>" +
            "(C) 'advised' means suggested as a good idea.",
        chinese_explanation: "(D) '禁止的' 意味着不允许的；被禁止的。" +
            "<br><br>" +
            "(A) '允许的' 意味着被允许的。" +
            "<br><br>" +
            "(B) '推荐的' 意味着建议的。" +
            "<br><br>" +
            "(C) '建议的' 意味着被认为是好主意的。"
    },
    {
        id: 5,
        question: "He was __________ during the interview, struggling to find the right words.",
        chinese_question: "在面试中他变得 __________，难以找到合适的话语。",
        answers: [
            { option: "A", answer: "flustered", chinese_answer: "慌乱的", chinese_romanization: "huāngluàn de" },
            { option: "B", answer: "confident", chinese_answer: "自信的", chinese_romanization: "zìxìn de" },
            { option: "C", answer: "prepared", chinese_answer: "准备好的", chinese_romanization: "zhǔnbèi hǎo de" },
            { option: "D", answer: "serene", chinese_answer: "宁静的", chinese_romanization: "níngjìng de" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'flustered' metaphorically means confused or agitated, especially in a situation requiring composure." +
            "<br><br>" +
            "(B) 'confident' means feeling or showing confidence in oneself; self-assured." +
            "<br><br>" +
            "(C) 'prepared' means made ready for use." +
            "<br><br>" +
            "(D) 'serene' means calm, peaceful, and untroubled; tranquil.",
        chinese_explanation: "(A) '慌乱的' 比喻在需要镇定的情况下感到困惑或激动。" +
            "<br><br>" +
            "(B) '自信的' 意味着对自己有信心或表现出信心的。" +
            "<br><br>" +
            "(C) '准备好的' 意味着为使用做好准备的。" +
            "<br><br>" +
            "(D) '宁静的' 意味着平静的、和平的和无烦恼的；平静的。"
    },
    {
        id: 6,
        question: "It is __________ that we finish the project by the deadline to avoid penalties.",
        chinese_question: "我们必须在截止日期前完成项目，否则将面临罚款，这是__________的。",
        answers: [
            { option: "A", answer: "optional", chinese_answer: "可选择的", chinese_romanization: "kě xuǎnzé de" },
            { option: "B", answer: "imperative", chinese_answer: "重要的", chinese_romanization: "zhòngyào de" },
            { option: "C", answer: "trivial", chinese_answer: "不重要的", chinese_romanization: "bù zhòngyào de" },
            { option: "D", answer: "unnecessary", chinese_answer: "不必要的", chinese_romanization: "bù bìyào de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'imperative' means of vital importance; crucial." +
            "<br><br>" +
            "(A) 'optional' means available to be chosen but not obligatory." +
            "<br><br>" +
            "(C) 'trivial' means of little value or importance." +
            "<br><br>" +
            "(D) 'unnecessary' means not needed.",
        chinese_explanation: "(B) '重要的'一词意味着至关重要的；关键的。" +
            "<br><br>" +
            "(A) '可选择的' 意味着可选择但不是强制性的。" +
            "<br><br>" +
            "(C) '不重要的' 意味着没有价值或重要性。" +
            "<br><br>" +
            "(D) '不必要的' 意味着不需要的。"
    },
    {
        id: 7,
        question: "Her office is __________ to the CEO's, allowing her frequent access to important meetings.",
        chinese_question: "她的办公室__________CEO的办公室，让她能够经常参加重要会议。",
        answers: [
            { option: "A", answer: "distant", chinese_answer: "遥远的", chinese_romanization: "yáoyuǎn de" },
            { option: "B", answer: "adjacent", chinese_answer: "邻近的", chinese_romanization: "línjìn de" },
            { option: "C", answer: "far", chinese_answer: "远的", chinese_romanization: "yuǎn de" },
            { option: "D", answer: "remote", chinese_answer: "偏远的", chinese_romanization: "piānyuǎn de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'adjacent' means next to or adjoining something else. Figuratively, it can mean being in close proximity to something important or significant." +
            "<br><br>" +
            "(A) 'distant' means far away in space or time." +
            "<br><br>" +
            "(C) 'far' means situated at a great distance in space or time." +
            "<br><br>" +
            "(D) 'remote' means situated far from the main centers of population; distant.",
        chinese_explanation: "(B) '邻近的'一词意味着紧挨着或与其他东西相邻。比喻地，它可以表示在某些重要或有意义的事物的近处。" +
            "<br><br>" +
            "(A) '遥远的' 意味着在空间或时间上距离遥远的。" +
            "<br><br>" +
            "(C) '远的' 意味着在空间或时间上距离遥远的。" +
            "<br><br>" +
            "(D) '偏远的' 意味着远离主要人口中心的；遥远的。"
    },
    {
        id: 8,
        question: "The __________ weather made it impossible to go outside without bundling up.",
        chinese_question: "__________的天气使得不穿厚衣服就无法外出。",
        answers: [
            { option: "A", answer: "warm", chinese_answer: "温暖的", chinese_romanization: "wēnnuǎn de" },
            { option: "B", answer: "mild", chinese_answer: "温和的", chinese_romanization: "wēnhé de" },
            { option: "C", answer: "frigid", chinese_answer: "寒冷的", chinese_romanization: "hánlěng de" },
            { option: "D", answer: "hot", chinese_answer: "炎热的", chinese_romanization: "yánrè de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'frigid' means very cold in temperature." + 
            "<br><br>" +
            "(A) 'warm' means of or at a fairly or comfortably high temperature." + 
            "<br><br>" +
            "(B) 'mild' means not severe, serious, or harsh." + 
            "<br><br>" +
            "(D) 'hot' means having a high degree of heat or a high temperature.",
        chinese_explanation: "(C) '寒冷的' 一词意味着非常冷的温度。" + 
            "<br><br>" +
            "(A) '温暖的' 意味着相当或舒适的高温。" + 
            "<br><br>" +
            "(B) '温和的' 意味着不严厉、严重或苛刻的。" + 
            "<br><br>" +
            "(D) '炎热的' 意味着具有高热度或高温。"
    },
    {
        id: 9,
        question: "His __________ attempts to win the game showed his lack of experience.",
        chinese_question: "他__________地尝试赢得比赛，显示出缺乏经验。",
        answers: [
            { option: "A", answer: "strong", chinese_answer: "强壮的", chinese_romanization: "qiángzhuàng de" },
            { option: "B", answer: "feeble", chinese_answer: "微弱的", chinese_romanization: "wēiruò de" },
            { option: "C", answer: "loud", chinese_answer: "大声的", chinese_romanization: "dàshēng de" },
            { option: "D", answer: "robust", chinese_answer: "健壮的", chinese_romanization: "jiànzhuàng de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'feeble' means lacking physical strength, especially as a result of age or illness. Figuratively, it can mean lacking effectiveness or vigor." + 
            "<br><br>" +
            "(A) 'strong' means having the power to move heavy weights or perform other physically demanding tasks." + 
            "<br><br>" +
            "(C) 'loud' means producing or capable of producing much noise." + 
            "<br><br>" +
            "(D) 'robust' means strong and healthy; vigorous.",
        chinese_explanation: "(B) '微弱的' 一词意味着缺乏体力，尤其是由于年龄或疾病。比喻地，它可以表示缺乏效力或活力。" + 
            "<br><br>" +
            "(A) '强壮的' 意味着有力量移动重物或执行其他需要体力的任务。" + 
            "<br><br>" +
            "(C) '大声的' 意味着产生或能够产生大量噪音的。" + 
            "<br><br>" +
            "(D) '健壮的' 意味着强壮和健康的；精力充沛的。"
    },
    {
        id: 10,
        question: "The teacher was __________ to the students' needs, ensuring everyone understood the lesson.",
        chinese_question: "老师对学生的需求保持 __________，确保每个人都理解这节课。",
        answers: [
            { option: "A", answer: "alert", chinese_answer: "关注", chinese_romanization: "guānzhù" },
            { option: "B", answer: "indifferent", chinese_answer: "冷漠", chinese_romanization: "lěngmò" },
            { option: "C", answer: "inattentive", chinese_answer: "不注意的", chinese_romanization: "bù zhùyì de" },
            { option: "D", answer: "oblivious", chinese_answer: "无视的", chinese_romanization: "wúshì de" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'alert' metaphorically means being aware and responsive to someone's needs or situations." +
            "<br><br>" +
            "(B) 'indifferent' means having no particular interest or sympathy; unconcerned." +
            "<br><br>" +
            "(C) 'inattentive' means not paying attention to something." +
            "<br><br>" +
            "(D) 'oblivious' means not aware of or not concerned about what is happening around one.",
        chinese_explanation: "(A) '关注' 比喻对某人的需求或情况保持警觉和响应。" +
            "<br><br>" +
            "(B) '冷漠' 意味着没有特别的兴趣或同情；不关心。" +
            "<br><br>" +
            "(C) '不注意的' 意味着不注意某事。" +
            "<br><br>" +
            "(D) '无视的' 意味着没有意识到或不关心周围发生的事情。"
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
