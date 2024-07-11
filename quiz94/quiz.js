// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "He tried to __________ that she was responsible for the mistake without directly accusing her.",
        chinese_question: "他试图__________她要为这个错误负责，而不是直接指责她。",
        answers: [
            { option: "A", answer: "declare", chinese_answer: "宣布", chinese_romanization: "xuānbù" },
            { option: "B", answer: "announce", chinese_answer: "发表", chinese_romanization: "fābiǎo" },
            { option: "C", answer: "insinuate", chinese_answer: "暗示", chinese_romanization: "ànshì" },
            { option: "D", answer: "confess", chinese_answer: "承认", chinese_romanization: "chéngrèn" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'insinuate' means to suggest or hint (something bad or reprehensible) in an indirect and unpleasant way." +
            "<br><br>" +
            "(A) 'declare' means say something in a solemn and emphatic manner." +
            "<br><br>" +
            "(B) 'announce' means make a formal public statement about a fact, occurrence, or intention." +
            "<br><br>" +
            "(D) 'confess' means admit or state that one has committed a crime or is at fault in some way.",
        chinese_explanation: "(C) '暗示'一词意味着以间接和不愉快的方式暗示（某些坏的或不应受谴责的事情）。" +
            "<br><br>" +
            "(A) '宣布' 意味着以庄重和强调的方式说某事。" +
            "<br><br>" +
            "(B) '发表' 意味着就事实、事件或意图作正式公开声明。" +
            "<br><br>" +
            "(D) '承认' 意味着承认或声明自己犯了罪或某种方式有过错。"
    },
    {
        id: 2,
        question: "She looked at him with tear-filled eyes and __________ him not to leave her.",
        chinese_question: "她含泪看着他，__________他不要离开她。",
        answers: [
            { option: "A", answer: "demanded", chinese_answer: "要求", chinese_romanization: "yāoqiú" },
            { option: "B", answer: "implored", chinese_answer: "恳求", chinese_romanization: "kěnqiú" },
            { option: "C", answer: "rebuked", chinese_answer: "指责", chinese_romanization: "zhǐzé" },
            { option: "D", answer: "ordered", chinese_answer: "命令", chinese_romanization: "mìnglìng" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'implored' means to beg someone earnestly or desperately to do something." +
            "<br><br>" +
            "(A) 'demanded' means to ask for something authoritatively or brusquely." +
            "<br><br>" +
            "(C) 'rebuked' means to express sharp disapproval or criticism of someone because of their behavior or actions." +
            "<br><br>" +
            "(D) 'ordered' means to give an authoritative direction or instruction to do something.",
        chinese_explanation: "(B) '恳求'一词意味着恳切或绝望地请求某人做某事。" +
            "<br><br>" +
            "(A) '要求' 意味着权威地或粗鲁地要求某事。" +
            "<br><br>" +
            "(C) '指责' 意味着因某人的行为或行动而表示强烈的不满或批评。" +
            "<br><br>" +
            "(D) '命令' 意味着给出一个权威的指示或指令去做某事。"
    },
    {
        id: 3,
        question: "Heavy traffic will __________ our ability to get to the meeting on time.",
        chinese_question: "繁忙的交通将__________我们准时到达会议。",
        answers: [
            { option: "A", answer: "facilitate", chinese_answer: "促进", chinese_romanization: "cùjìn" },
            { option: "B", answer: "help", chinese_answer: "帮助", chinese_romanization: "bāngzhù" },
            { option: "C", answer: "impede", chinese_answer: "阻碍", chinese_romanization: "zǔ'ài" },
            { option: "D", answer: "expedite", chinese_answer: "加速", chinese_romanization: "jiāsù" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'impede' means to delay or prevent (someone or something) by obstructing them; hinder." +
            "<br><br>" +
            "(A) 'facilitate' means to make (an action or process) easy or easier." +
            "<br><br>" +
            "(B) 'help' means to make it easier for (someone) to do something by offering one's services or resources." +
            "<br><br>" +
            "(D) 'expedite' means to make (an action or process) happen sooner or be accomplished more quickly.",
        chinese_explanation: "(C) '阻碍'一词意味着通过阻挡延迟或阻止（某人或某事）；妨碍。" +
            "<br><br>" +
            "(A) '促进' 意味着使（一个行动或过程）变得容易或更容易。" +
            "<br><br>" +
            "(B) '帮助' 意味着通过提供服务或资源使（某人）更容易做某事。" +
            "<br><br>" +
            "(D) '加速' 意味着使（一个行动或过程）更快发生或更快完成。"
    },
    {
        id: 4,
        question: "The continuous failures did not __________ her; instead, she kept trying harder.",
        chinese_question: "连续的失败并没有让她 __________；相反，她更加努力地尝试。",
        answers: [
            { option: "A", answer: "dishearten", chinese_answer: "使沮丧", chinese_romanization: "shǐ jǔsàng" },
            { option: "B", answer: "encourage", chinese_answer: "鼓励", chinese_romanization: "gǔlì" },
            { option: "C", answer: "motivate", chinese_answer: "激励", chinese_romanization: "jīlì" },
            { option: "D", answer: "inspire", chinese_answer: "启发", chinese_romanization: "qǐfā" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'dishearten' means cause (someone) to lose determination or confidence." +
            "<br><br>" +
            "(B) 'encourage' means give support, confidence, or hope to (someone)." +
            "<br><br>" +
            "(C) 'motivate' means provide (someone) with a motive for doing something." +
            "<br><br>" +
            "(D) 'inspire' means fill (someone) with the urge or ability to do or feel something, especially to do something creative.",
        chinese_explanation: "(A) '使沮丧' 意味着使（某人）失去决心或信心。" +
            "<br><br>" +
            "(B) '鼓励' 意味着给（某人）支持、信心或希望。" +
            "<br><br>" +
            "(C) '激励' 意味着为（某人）提供做某事的动机。" +
            "<br><br>" +
            "(D) '启发' 意味着填充（某人）以做某事的冲动或能力，尤其是做某事创意。"
    },
    {
        id: 5,
        question: "He couldn't help but __________ the success of his more fortunate colleagues.",
        chinese_question: "他不禁__________那些更幸运同事的成功。",
        answers: [
            { option: "A", answer: "reject", chinese_answer: "拒绝", chinese_romanization: "jùjué" },
            { option: "B", answer: "covet", chinese_answer: "垂涎", chinese_romanization: "chuíxián" },
            { option: "C", answer: "disregard", chinese_answer: "漠视", chinese_romanization: "mòshì" },
            { option: "D", answer: "despise", chinese_answer: "鄙视", chinese_romanization: "bǐshì" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'covet' means to yearn to possess or have (something). Figuratively, it can mean to intensely desire something that belongs to another." +
            "<br><br>" +
            "(A) 'reject' means dismiss as inadequate, inappropriate, or not to one's taste." +
            "<br><br>" +
            "(C) 'disregard' means refuse to take notice of or acknowledge." +
            "<br><br>" +
            "(D) 'despise' means feel contempt or a deep repugnance for.",
        chinese_explanation: "(B) '垂涎'一词意味着渴望拥有或拥有（某物）。比喻地，它可以表示强烈地渴望别人的东西。" +
            "<br><br>" +
            "(A) '拒绝' 意味着认为不够好、不适当或不合口味而不接受。" +
            "<br><br>" +
            "(C) '漠视' 意味着拒绝注意或承认。" +
            "<br><br>" +
            "(D) '鄙视' 意味着对某物感到轻蔑或深深的厌恶。"
    },
    {
        id: 6,
        question: "She was able to __________ a solution to the problem when no one else could think of one.",
        chinese_question: "当其他人都想不出办法时，她能__________出解决问题的方案。",
        answers: [
            { option: "A", answer: "hide", chinese_answer: "隐藏", chinese_romanization: "yǐncáng" },
            { option: "B", answer: "destroy", chinese_answer: "破坏", chinese_romanization: "pòhuài" },
            { option: "C", answer: "conceal", chinese_answer: "隐蔽", chinese_romanization: "yǐnbì" },
            { option: "D", answer: "conjure", chinese_answer: "变出", chinese_romanization: "biàn chū" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'conjure' means to make (something) appear unexpectedly or seemingly from nowhere as if by magic. Figuratively, it can mean to think up or create something quickly or unexpectedly." +
            "<br><br>" +
            "(A) 'hide' means put or keep out of sight; conceal from the view or notice of others." +
            "<br><br>" +
            "(B) 'destroy' means to end the existence of something by damaging or attacking it." +
            "<br><br>" +
            "(C) 'conceal' means keep from sight; hide.",
        chinese_explanation: "(D) '变出'一词意味着让（某物）出人意料地或似乎从无处出现，仿佛通过魔法。比喻地，它可以表示快速或意外地想出或创造某物。" +
            "<br><br>" +
            "(A) '隐藏' 意味着把某物或某人隐藏起来，不被别人看见。" +
            "<br><br>" +
            "(B) '破坏' 意味着通过损坏或攻击来结束某物的存在。" +
            "<br><br>" +
            "(C) '隐蔽' 意味着不让看见；隐藏。"
    },
    {
        id: 7,
        question: "Her constant criticism began to __________ his self-confidence.",
        chinese_question: "她不断的批评开始 __________ 他的自信心。",
        answers: [
            { option: "A", answer: "erode", chinese_answer: "侵蚀", chinese_romanization: "qīnshí" },
            { option: "B", answer: "strengthen", chinese_answer: "增强", chinese_romanization: "zēngqiáng" },
            { option: "C", answer: "bolster", chinese_answer: "支持", chinese_romanization: "zhīchí" },
            { option: "D", answer: "enhance", chinese_answer: "提高", chinese_romanization: "tígāo" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'erode' metaphorically means gradually destroy or be gradually destroyed." +
            "<br><br>" +
            "(B) 'strengthen' means make or become stronger." +
            "<br><br>" +
            "(C) 'bolster' means support or strengthen; prop up." +
            "<br><br>" +
            "(D) 'enhance' means intensify, increase, or further improve the quality, value, or extent of.",
        chinese_explanation: "(A) '侵蚀' 比喻逐渐破坏或逐渐被破坏。" +
            "<br><br>" +
            "(B) '增强' 意味着使或变得更强。" +
            "<br><br>" +
            "(C) '支持' 意味着支持或加强；支撑。" +
            "<br><br>" +
            "(D) '提高' 意味着加强、增加或进一步提高质量、价值或程度。"
    },
    {
        id: 8,
        question: "The magician's performance was so mesmerizing that it __________ the entire audience.",
        chinese_question: "魔术师的表演如此迷人，以至于 __________ 了整个观众。",
        answers: [
            { option: "A", answer: "enthralled", chinese_answer: "迷住", chinese_romanization: "mí zhù" },
            { option: "B", answer: "bored", chinese_answer: "无聊", chinese_romanization: "wúliáo" },
            { option: "C", answer: "repelled", chinese_answer: "排斥", chinese_romanization: "páichì" },
            { option: "D", answer: "confused", chinese_answer: "困惑", chinese_romanization: "kùnhuò" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'enthralled' means capture the fascinated attention of." +
            "<br><br>" +
            "(B) 'bored' means feeling weary and impatient because one is unoccupied or lacks interest in one's current activity." +
            "<br><br>" +
            "(C) 'repelled' means drive or force (an attack or attacker) back or away." +
            "<br><br>" +
            "(D) 'confused' means unable to think clearly; bewildered.",
        chinese_explanation: "(A) '迷住' 意味着吸引住迷人的注意力。" +
            "<br><br>" +
            "(B) '无聊' 意味着感到厌倦和不耐烦，因为一个人没有被占用或对当前的活动缺乏兴趣。" +
            "<br><br>" +
            "(C) '排斥' 意味着驱逐或逼退（攻击或攻击者）。" +
            "<br><br>" +
            "(D) '困惑' 意味着无法清楚地思考；困惑的。"
    },
    {
        id: 9,
        question: "All the experts __________ that the new policy would benefit the economy in the long run, noting the potential for increased investment and job creation.",
        chinese_question: "所有专家都__________，新政策从长远来看将有利于经济，并指出有可能增加投资和创造就业机会。",
        answers: [
            { option: "A", answer: "disagreed", chinese_answer: "不同意", chinese_romanization: "bù tóngyì" },
            { option: "B", answer: "concurred", chinese_answer: "同意", chinese_romanization: "tóngyì" },
            { option: "C", answer: "disputed", chinese_answer: "争执", chinese_romanization: "zhēngzhí" },
            { option: "D", answer: "rebutted", chinese_answer: "反驳", chinese_romanization: "fǎnbó" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'concurred' means to be of the same opinion; agree." +
            "<br><br>" +
            "(A) 'disagreed' means have or express a different opinion." +
            "<br><br>" +
            "(C) 'disputed' means argue about something; question the validity of." +
            "<br><br>" +
            "(D) 'rebutted' means claim or prove that (evidence or an accusation) is false.",
        chinese_explanation: "(B) '同意'一词意味着持相同意见；同意。" +
            "<br><br>" +
            "(A) '不同意' 意味着持有或表达不同意见。" +
            "<br><br>" +
            "(C) '争执' 意味着就某事争论；质疑其有效性。" +
            "<br><br>" +
            "(D) '反驳' 意味着声称或证明（证据或指控）是错误的。"
    },
    {
        id: 10,
        question: "In order to move forward, both parties had to __________ on some of their demands.",
        chinese_question: "为了向前推进，双方不得不在一些要求上__________。",
        answers: [
            { option: "A", answer: "argue", chinese_answer: "争论", chinese_romanization: "zhēnglùn" },
            { option: "B", answer: "compromise", chinese_answer: "妥协", chinese_romanization: "tuǒxié" },
            { option: "C", answer: "conflict", chinese_answer: "冲突", chinese_romanization: "chōngtú" },
            { option: "D", answer: "stalemate", chinese_answer: "僵局", chinese_romanization: "jiāngjú" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'compromise' means finding a middle ground or making concessions in a disagreement." +
            "<br><br>" +
            "(A) 'argue' means exchange diverging or opposite views, typically in a heated or angry way." +
            "<br><br>" +
            "(C) 'conflict' means a serious disagreement or argument, typically a protracted one." +
            "<br><br>" +
            "(D) 'stalemate' means a situation in which no progress can be made or no advancement is possible.",
        chinese_explanation: "(B) '妥协' 意味着表示在分歧中找到中间立场或做出让步。" +
            "<br><br>" +
            "(A) '争论' 意味着交换不同或相反的观点，通常是激烈或愤怒地进行的。" +
            "<br><br>" +
            "(C) '冲突' 意味着严重的分歧或争论，通常是长期的。" +
            "<br><br>" +
            "(D) '僵局' 意味着无法取得进展或无法推进的情况。"
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
