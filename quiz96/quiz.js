// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "She had to __________ through a difficult period in her life, finding ways to cope and move forward.",
        chinese_question: "她必须 __________ 度过她生活中的艰难时期，寻找应对和前进的方法。",
        answers: [
            { option: "A", answer: "navigate", chinese_answer: "应对", chinese_romanization: "yìngduì" },
            { option: "B", answer: "surrender", chinese_answer: "投降", chinese_romanization: "tóuxiáng" },
            { option: "C", answer: "abandon", chinese_answer: "放弃", chinese_romanization: "fàngqì" },
            { option: "D", answer: "disregard", chinese_answer: "忽视", chinese_romanization: "hūshì" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'navigate' metaphorically means to find one's way through a difficult situation." + 
            "<br><br>" +
            "(B) 'surrender' means cease resistance to an enemy or opponent and submit to their authority." + 
            "<br><br>" +
            "(C) 'abandon' means give up completely (a course of action, a practice, or a way of thinking)." + 
            "<br><br>" +
            "(D) 'disregard' means pay no attention to; ignore.",
        chinese_explanation: "(A) '应对' 比喻找到通过困难情况的方法。" + 
            "<br><br>" +
            "(B) '投降' 意味着停止对敌人或对手的抵抗，并服从他们的权威。" + 
            "<br><br>" +
            "(C) '放弃' 意味着完全放弃（某个行动、做法或思维方式）。" + 
            "<br><br>" +
            "(D) '忽视' 意味着不注意；忽略。"
    },
    {
        id: 2,
        question: "As she stood on the stage, she could hardly __________ the thrill of the audience's applause after her breathtaking performance.",
        chinese_question: "当她站在舞台上时，她几乎无法__________观众为她惊艳表演而鼓掌的兴奋。",
        answers: [
            { option: "A", answer: "doubt", chinese_answer: "怀疑", chinese_romanization: "huáiyí" },
            { option: "B", answer: "anticipate", chinese_answer: "期待", chinese_romanization: "qīdài" },
            { option: "C", answer: "dread", chinese_answer: "害怕", chinese_romanization: "hàipà" },
            { option: "D", answer: "dismiss", chinese_answer: "解雇", chinese_romanization: "jiěgù" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'anticipate' means regard as probable; expect or predict." + 
            "<br><br>" +
            "(A) 'doubt' means feel uncertain about." + 
            "<br><br>" +
            "(C) 'dread' means anticipate with great apprehension or fear." + 
            "<br><br>" +
            "(D) 'dismiss' means order or allow to leave; send away.",
        chinese_explanation: "(B) '期待' 一词意味着认为可能发生；预期或预测。" + 
            "<br><br>" +
            "(A) '怀疑' 意味着对某事感到不确定。" + 
            "<br><br>" +
            "(C) '害怕' 意味着怀着极大的恐惧预期。" + 
            "<br><br>" +
            "(D) '解雇' 意味着命令或允许离开；遣散。"
    },
    {
        id: 3,
        question: "After the temporary changes, the company decided to __________ to its original policies.",
        chinese_question: "在临时变更之后，公司决定__________原来的政策。",
        answers: [
            { option: "A", answer: "maintain", chinese_answer: "保持", chinese_romanization: "bǎochí" },
            { option: "B", answer: "revert", chinese_answer: "恢复", chinese_romanization: "huīfù" },
            { option: "C", answer: "alter", chinese_answer: "改变", chinese_romanization: "gǎibiàn" },
            { option: "D", answer: "continue", chinese_answer: "继续", chinese_romanization: "jìxù" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'revert' means return to (a previous state, practice, topic, etc.)." + 
            "<br><br>" +
            "(A) 'maintain' means keep (something) at the same level or rate." + 
            "<br><br>" +
            "(C) 'alter' means change or cause to change in character or composition." + 
            "<br><br>" +
            "(D) 'continue' means persist in an activity or process.",
        chinese_explanation: "(B) '恢复' 一词意味着返回到（以前的状态、做法、主题等）。" + 
            "<br><br>" +
            "(A) '保持' 意味着保持（某物）在同一水平或速度。" + 
            "<br><br>" +
            "(C) '改变' 意味着改变或导致在特征或组成上的变化。" + 
            "<br><br>" +
            "(D) '继续' 意味着继续某项活动或进程。"
    },
    {
        id: 4,
        question: "It's important to __________ good employees by offering competitive salaries and benefits.",
        chinese_question: "通过提供有竞争力的薪水和福利来__________优秀员工很重要。",
        answers: [
            { option: "A", answer: "release", chinese_answer: "释放", chinese_romanization: "shìfàng" },
            { option: "B", answer: "expel", chinese_answer: "驱逐", chinese_romanization: "qūzhú" },
            { option: "C", answer: "retain", chinese_answer: "保留", chinese_romanization: "bǎoliú" },
            { option: "D", answer: "discard", chinese_answer: "丢弃", chinese_romanization: "diūqì" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'retain' means continue to have (something); keep possession of." + 
            "<br><br>" +
            "(A) 'release' means allow or enable to escape from confinement; set free." + 
            "<br><br>" +
            "(B) 'expel' means deprive (someone) of membership of or involvement in a school or other organization." + 
            "<br><br>" +
            "(D) 'discard' means get rid of (someone or something) as no longer useful or desirable.",
        chinese_explanation: "(C) '保留' 一词意味着继续拥有（某物）；保留。" + 
            "<br><br>" +
            "(A) '释放' 意味着允许或使其逃离监禁；释放。" + 
            "<br><br>" +
            "(B) '驱逐' 意味着剥夺（某人）在学校或其他组织中的成员资格或参与。" + 
            "<br><br>" +
            "(D) '丢弃' 意味着丢弃（某人或某物）作为不再有用或不受欢迎的东西。"
    },
    {
        id: 5,
        question: "Her leadership style, with its emphasis on collaboration and empathy, closely __________ that of her mentor.",
        chinese_question: "她的领导风格，强调合作和同理心，__________她的导师。",
        answers: [
            { option: "A", answer: "differ", chinese_answer: "不同", chinese_romanization: "bùtóng" },
            { option: "B", answer: "oppose", chinese_answer: "反对", chinese_romanization: "fǎnduì" },
            { option: "C", answer: "contrast", chinese_answer: "对比", chinese_romanization: "duìbǐ" },
            { option: "D", answer: "resemble", chinese_answer: "相似", chinese_romanization: "xiāngsì" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'resemble' means have qualities or features, especially those of appearance, in common with (someone or something); look or seem like. Figuratively, it can mean having similar characteristics or qualities." + 
            "<br><br>" +
            "(A) 'differ' means be unlike or dissimilar." + 
            "<br><br>" +
            "(B) 'oppose' means disapprove of and attempt to prevent, especially by argument." + 
            "<br><br>" +
            "(C) 'contrast' means differ strikingly.",
        chinese_explanation: "(D) '相似' 一词意味着具有共同的特征或特征，尤其是外貌上的；看起来或看起来像。比喻地，它可以表示具有相似的特征或品质。" + 
            "<br><br>" +
            "(A) '不同' 意味着不同或不相似。" + 
            "<br><br>" +
            "(B) '反对' 意味着不赞成并试图阻止，尤其是通过争论。" + 
            "<br><br>" +
            "(C) '对比' 意味着显著不同。"
    },
    {
        id: 6,
        question: "The project will __________ significant effort and dedication to succeed.",
        chinese_question: "这个项目将__________大量的努力和奉献才能成功。",
        answers: [
            { option: "A", answer: "forbid", chinese_answer: "禁止", chinese_romanization: "jìnzhǐ" },
            { option: "B", answer: "reject", chinese_answer: "拒绝", chinese_romanization: "jùjué" },
            { option: "C", answer: "require", chinese_answer: "需要", chinese_romanization: "xūyào" },
            { option: "D", answer: "dismiss", chinese_answer: "解雇", chinese_romanization: "jiěgù" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'require' means need for a particular purpose. Figuratively, it can mean something that necessitates effort or dedication." + 
            "<br><br>" +
            "(A) 'forbid' means refuse to allow (something)." + 
            "<br><br>" +
            "(B) 'reject' means dismiss as inadequate, unacceptable, or faulty." + 
            "<br><br>" +
            "(D) 'dismiss' means order or allow to leave; send away.",
        chinese_explanation: "(C) '需要' 一词意味着为特定目的所需。比喻地，它可以表示某事需要努力或奉献。" + 
            "<br><br>" +
            "(A) '禁止' 意味着不允许（某事）。" + 
            "<br><br>" +
            "(B) '拒绝' 意味着视为不合格、不接受或有缺陷的。" + 
            "<br><br>" +
            "(D) '解雇' 意味着命令或允许离开；遣散。"
    },
    {
        id: 7,
        question: "She needed to __________ her friend that everything would be okay after the bad news.",
        chinese_question: "她需要__________朋友，一切都会好起来的，坏消息后。",
        answers: [
            { option: "A", answer: "frighten", chinese_answer: "恐吓", chinese_romanization: "kǒnghè" },
            { option: "B", answer: "reassure", chinese_answer: "安慰", chinese_romanization: "ānwèi" },
            { option: "C", answer: "confuse", chinese_answer: "使困惑", chinese_romanization: "shǐ kùnhuò" },
            { option: "D", answer: "alarm", chinese_answer: "使惊恐", chinese_romanization: "shǐ jīngkǒng" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'reassure' means say or do something to remove the doubts and fears of someone. Figuratively, it can mean comforting someone in a difficult situation." + 
            "<br><br>" +
            "(A) 'frighten' means make someone afraid or anxious." + 
            "<br><br>" +
            "(C) 'confuse' means make (someone) bewildered or perplexed." + 
            "<br><br>" +
            "(D) 'alarm' means cause (someone) to feel frightened, disturbed, or in danger.",
        chinese_explanation: "(B) '安慰' 一词意味着说或做某事以消除某人的疑虑和恐惧。比喻地，它可以表示在困难的情况下安慰某人。" + 
            "<br><br>" +
            "(A) '恐吓' 意味着使某人害怕或担心。" + 
            "<br><br>" +
            "(C) '使困惑' 意味着使（某人）困惑或迷惑。" + 
            "<br><br>" +
            "(D) '使惊恐' 意味着使（某人）感到害怕、不安或处于危险中。"
    },
    {
        id: 8,
        question: "The mentor's guidance can __________ valuable insight for young entrepreneurs.",
        chinese_question: "导师的指导可以 __________ 年轻企业家宝贵的见解。",
        answers: [
            { option: "A", answer: "provide", chinese_answer: "提供", chinese_romanization: "tígōng" },
            { option: "B", answer: "conceal", chinese_answer: "隐藏", chinese_romanization: "yǐncáng" },
            { option: "C", answer: "hinder", chinese_answer: "阻碍", chinese_romanization: "zǔ'ài" },
            { option: "D", answer: "obscure", chinese_answer: "掩盖", chinese_romanization: "yǎngài" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'provide' metaphorically means to make something available or supply it." + 
            "<br><br>" +
            "(B) 'conceal' means keep from sight; hide." + 
            "<br><br>" +
            "(C) 'hinder' means create difficulties for (someone or something), resulting in delay or obstruction." + 
            "<br><br>" +
            "(D) 'obscure' means keep from being seen; conceal.",
        chinese_explanation: "(A) '提供' 比喻使某物可用或供应它。" + 
            "<br><br>" +
            "(B) '隐藏' 意味着使不被看见；隐藏。" + 
            "<br><br>" +
            "(C) '阻碍' 意味着为（某人或某事）制造困难，导致延迟或阻碍。" + 
            "<br><br>" +
            "(D) '掩盖' 意味着使看不见；隐藏。"
    },
    {
        id: 9,
        question: "The horror movie's terrifying scenes were enough to __________ the audience.",
        chinese_question: "恐怖电影中令人恐惧的场景足以使观众 __________。",
        answers: [
            { option: "A", answer: "petrify", chinese_answer: "惊恐不已", chinese_romanization: "jīngkǒng bùyǐ" },
            { option: "B", answer: "bore", chinese_answer: "使厌烦", chinese_romanization: "shǐ yànfán" },
            { option: "C", answer: "calm", chinese_answer: "使平静", chinese_romanization: "shǐ píngjìng" },
            { option: "D", answer: "delight", chinese_answer: "高兴", chinese_romanization: "gāoxìng" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'petrify' metaphorically means to make someone very frightened." +
            "<br><br>" +
            "(B) 'bore' means cause (someone) to feel weary and uninterested by dull talk or behavior." +
            "<br><br>" +
            "(C) 'calm' means make (someone) tranquil and quiet; soothe." +
            "<br><br>" +
            "(D) 'delight' means please (someone) greatly.",
        chinese_explanation: "(A) '惊恐不已' 意味着使某人非常害怕。" +
            "<br><br>" +
            "(B) '使厌烦' 意味着通过乏味的谈话或行为使（某人）感到厌倦和无趣。" +
            "<br><br>" +
            "(C) '使平静' 意味着使（某人）平静和安静；抚慰。" +
            "<br><br>" +
            "(D) '高兴' 意味着极大地取悦（某人）。"
    },
    {
        id: 10,
        question: "She found it challenging to __________ to the new work environment but managed eventually.",
        chinese_question: "她发现适应新的工作环境很有挑战性，但最终还是__________了。",
        answers: [
            { option: "A", answer: "resist", chinese_answer: "抵抗", chinese_romanization: "dǐkàng" },
            { option: "B", answer: "adapt", chinese_answer: "适应", chinese_romanization: "shìyìng" },
            { option: "C", answer: "oppose", chinese_answer: "反对", chinese_romanization: "fǎnduì" },
            { option: "D", answer: "reject", chinese_answer: "拒绝", chinese_romanization: "jùjué" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'adapt' means make (something) suitable for a new use or purpose; modify. Figuratively, it can mean adjusting to new conditions or environments." + 
            "<br><br>" +
            "(A) 'resist' means withstand the action or effect of." + 
            "<br><br>" +
            "(C) 'oppose' means disapprove of and attempt to prevent, especially by argument." + 
            "<br><br>" +
            "(D) 'reject' means dismiss as inadequate, unacceptable, or faulty.",
        chinese_explanation: "(B) '适应' 一词意味着使（某物）适合新的用途或目的；修改。比喻地，它可以表示适应新的条件或环境。" + 
            "<br><br>" +
            "(A) '抵抗' 意味着承受（某事物）的作用或影响。" + 
            "<br><br>" +
            "(C) '反对' 意味着不赞成并试图阻止，尤其是通过争论。" + 
            "<br><br>" +
            "(D) '拒绝' 意味着视为不合格、不接受或有缺陷的。"
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
