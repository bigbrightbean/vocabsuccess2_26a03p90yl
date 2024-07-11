// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "The community leaders were quick to __________ the act of vandalism, calling it a disgrace to their neighborhood.",
        chinese_question: "社区领导人迅速 __________ 这一破坏行为，称其为对他们社区的耻辱。",
        answers: [
            { option: "A", answer: "praise", chinese_answer: "赞扬", chinese_romanization: "zànyáng" },
            { option: "B", answer: "overlook", chinese_answer: "忽视", chinese_romanization: "hūshì" },
            { option: "C", answer: "commend", chinese_answer: "表扬", chinese_romanization: "biǎoyáng" },
            { option: "D", answer: "condemn", chinese_answer: "谴责", chinese_romanization: "qiǎnzé" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'condemn' means express complete disapproval of, typically in public; censure." +
            "<br><br>" +
            "(A) 'praise' means express warm approval or admiration of." +
            "<br><br>" +
            "(B) 'overlook' means fail to notice (something)." +
            "<br><br>" +
            "(C) 'commend' means express approval or praise.",
        chinese_explanation: "(D) '谴责' 意味着通常在公开场合表示完全不赞成；责难。" +
            "<br><br>" +
            "(A) '赞扬' 意味着表达热情的认可或钦佩。" +
            "<br><br>" +
            "(B) '忽视' 意味着未能注意到（某事）。" +
            "<br><br>" +
            "(C) '表扬' 意味着表达认可或称赞。"
    },
    {
        id: 2,
        question: "Before making any big decisions, it's wise to __________ with an expert to get professional advice.",
        chinese_question: "在做出重大决定之前，明智的做法是 __________ 专家以获得专业建议。",
        answers: [
            { option: "A", answer: "disregard", chinese_answer: "无视", chinese_romanization: "wúshì" },
            { option: "B", answer: "consult", chinese_answer: "咨询", chinese_romanization: "zīxún" },
            { option: "C", answer: "assume", chinese_answer: "假设", chinese_romanization: "jiǎshè" },
            { option: "D", answer: "neglect", chinese_answer: "忽略", chinese_romanization: "hūlüè" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'consult' means to seek information or advice from someone with expertise in a particular area." +
            "<br><br>" +
            "(A) 'disregard' means to pay no attention to; ignore." +
            "<br><br>" +
            "(C) 'assume' means to suppose to be the case, without proof." +
            "<br><br>" +
            "(D) 'neglect' means to fail to care for properly.",
        chinese_explanation: "(B) '咨询' 一词意味着向某个在特定领域有专长的人寻求信息或建议。" +
            "<br><br>" +
            "(A) '无视' 意味着不注意；忽视。" +
            "<br><br>" +
            "(C) '假设' 意味着在没有证据的情况下假定为事实。" +
            "<br><br>" +
            "(D) '忽略' 意味着未能妥善照顾。"
    },
    {
        id: 3,
        question: "The teacher used a highlighter to __________ the important points in the textbook for the students.",
        chinese_question: "老师用荧光笔 __________ 教科书中的重点，方便学生学习。",
        answers: [
            { option: "A", answer: "obscure", chinese_answer: "掩盖", chinese_romanization: "yǎngài" },
            { option: "B", answer: "emphasize", chinese_answer: "强调", chinese_romanization: "qiángdiào" },
            { option: "C", answer: "downplay", chinese_answer: "淡化", chinese_romanization: "dànhuà" },
            { option: "D", answer: "minimize", chinese_answer: "最小化", chinese_romanization: "zuìxiǎo huà" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'emphasize' means to give special importance or prominence to something in speaking or writing." +
            "<br><br>" +
            "(A) 'obscure' means to keep from being seen; conceal." +
            "<br><br>" +
            "(C) 'downplay' means to make something appear less important than it really is." +
            "<br><br>" +
            "(D) 'minimize' means to reduce something to the smallest possible amount or degree.",
        chinese_explanation: "(B) '强调' 一词意味着在讲话或写作中特别重视或突出某事。" +
            "<br><br>" +
            "(A) '掩盖' 意味着使不被看到；隐藏。" +
            "<br><br>" +
            "(C) '淡化' 意味着使某事显得不如实际重要。" +
            "<br><br>" +
            "(D) '最小化' 意味着将某物减少到尽可能小的数量或程度。"
    },
    {
        id: 4,
        question: "The complex instructions left the students __________, not knowing where to start with their project.",
        chinese_question: "复杂的指示让学生们 __________，不知道从哪里开始他们的项目。",
        answers: [
            { option: "A", answer: "clear", chinese_answer: "清楚", chinese_romanization: "qīngchǔ" },
            { option: "B", answer: "confident", chinese_answer: "自信", chinese_romanization: "zìxìn" },
            { option: "C", answer: "enlightened", chinese_answer: "开明", chinese_romanization: "kāimíng" },
            { option: "D", answer: "bewildered", chinese_answer: "困惑", chinese_romanization: "kùnhuò" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'bewildered' means perplexed and confused." +
            "<br><br>" +
            "(A) 'clear' means easy to perceive, understand, or interpret." +
            "<br><br>" +
            "(B) 'confident' means feeling or showing confidence in oneself." +
            "<br><br>" +
            "(C) 'enlightened' means having or showing a rational, modern, and well-informed outlook.",
        chinese_explanation: "(D) '困惑' 一词意味着困惑和迷茫。" +
            "<br><br>" +
            "(A) '清楚' 意味着容易察觉、理解或解释。" +
            "<br><br>" +
            "(B) '自信' 意味着对自己感到或表现出信心。" +
            "<br><br>" +
            "(C) '开明' 意味着具有或表现出理性、现代和知识渊博的观点。"
    },
    {
        id: 5,
        question: "She paused to __________ the applause from the audience before continuing her speech.",
        chinese_question: "她停下来 __________ 观众的掌声，然后继续她的演讲。",
        answers: [
            { option: "A", answer: "disregard", chinese_answer: "忽视", chinese_romanization: "hūshì" },
            { option: "B", answer: "reject", chinese_answer: "拒绝", chinese_romanization: "jùjué" },
            { option: "C", answer: "acknowledge", chinese_answer: "承认", chinese_romanization: "chéngrèn" },
            { option: "D", answer: "overlook", chinese_answer: "忽略", chinese_romanization: "hūlüè" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'acknowledge' means to accept or admit the existence or truth of." +
            "<br><br>" +
            "(A) 'disregard' means to pay no attention to; ignore." +
            "<br><br>" +
            "(B) 'reject' means to refuse to accept, consider, or submit to." +
            "<br><br>" +
            "(D) 'overlook' means to fail to notice something.",
        chinese_explanation: "(C) '承认' 一词意味着接受或承认...的存在或真实性。" +
            "<br><br>" +
            "(A) '忽视' 意味着不注意；无视。" +
            "<br><br>" +
            "(B) '拒绝' 意味着不接受、不考虑或不提交。" +
            "<br><br>" +
            "(D) '忽略' 意味着未能注意到某事。"
    },
    {
        id: 6,
        question: "Despite the complexity of the topic, she managed to __________ her ideas in a way that everyone could understand.",
        chinese_question: "尽管主题复杂，她仍设法以大家都能理解的方式 __________ 她的想法。",
        answers: [
            { option: "A", answer: "mumble", chinese_answer: "含糊地说", chinese_romanization: "hánhú de shuō" },
            { option: "B", answer: "articulate", chinese_answer: "清楚地表达", chinese_romanization: "qīngchǔ de biǎodá" },
            { option: "C", answer: "stammer", chinese_answer: "结巴", chinese_romanization: "jiēbā" },
            { option: "D", answer: "whisper", chinese_answer: "低声说", chinese_romanization: "dīshēng shuō" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'articulate' means having or showing the ability to speak fluently and coherently." +
            "<br><br>" +
            "(A) 'mumble' means say something indistinctly and quietly, making it difficult for others to hear." +
            "<br><br>" +
            "(C) 'stammer' means speak with sudden involuntary pauses and a tendency to repeat the initial letters of words." +
            "<br><br>" +
            "(D) 'whisper' means speak very softly using one's breath rather than one's throat.",
        chinese_explanation: "(B) '清楚地表达' 一词意味着展示或表现出流利和连贯地说话的能力。" +
            "<br><br>" +
            "(A) '含糊地说' 意味着含糊和安静地说某事，使他人难以听到。" +
            "<br><br>" +
            "(C) '结巴' 意味着说话时突然不由自主地停顿，并倾向于重复单词的开头字母。" +
            "<br><br>" +
            "(D) '低声说' 意味着用气而不是喉咙非常轻声地说话。"
    },
    {
        id: 7,
        question: "The constant noise from the construction site began to __________ the residents, who were desperate for some peace and quiet.",
        chinese_question: "建筑工地的持续噪音开始 __________ 居民，他们急需一些宁静。",
        answers: [
            { option: "A", answer: "delight", chinese_answer: "高兴", chinese_romanization: "gāoxìng" },
            { option: "B", answer: "calm", chinese_answer: "平静", chinese_romanization: "píngjìng" },
            { option: "C", answer: "soothe", chinese_answer: "安抚", chinese_romanization: "ānfǔ" },
            { option: "D", answer: "exasperate", chinese_answer: "恼怒", chinese_romanization: "nǎonù" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'exasperate' means to irritate intensely; infuriate." +
            "<br><br>" +
            "(A) 'delight' means please someone greatly." +
            "<br><br>" +
            "(B) 'calm' means make someone tranquil and quiet; soothe." +
            "<br><br>" +
            "(C) 'soothe' means gently calm a person or their feelings.",
        chinese_explanation: "(D) '恼怒' 一词意味着强烈激怒；激怒。" +
            "<br><br>" +
            "(A) '高兴' 意味着极大地取悦某人。" +
            "<br><br>" +
            "(B) '平静' 意味着使某人安静和平静；安抚。" +
            "<br><br>" +
            "(C) '安抚' 意味着轻轻地使某人或他们的情感平静。"
    },
    {
        id: 8,
        question: "He tended to __________ his money on unnecessary gadgets, leaving little for savings.",
        chinese_question: "他倾向于将钱 __________ 在不必要的小玩意上，留下的存款很少。",
        answers: [
            { option: "A", answer: "save", chinese_answer: "储蓄", chinese_romanization: "chǔxù" },
            { option: "B", answer: "invest", chinese_answer: "投资", chinese_romanization: "tóuzī" },
            { option: "C", answer: "squander", chinese_answer: "浪费", chinese_romanization: "làngfèi" },
            { option: "D", answer: "accumulate", chinese_answer: "积累", chinese_romanization: "jīlěi" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'squander' means to waste something, especially money or time, in a reckless and foolish manner." +
            "<br><br>" +
            "(A) 'save' means keep and store up something, especially money, for future use." +
            "<br><br>" +
            "(B) 'invest' means expend money with the expectation of achieving a profit or material result by putting it into financial schemes, shares, or property, or by using it to develop a commercial venture." +
            "<br><br>" +
            "(D) 'accumulate' means gather together or acquire an increasing number or quantity of.",
        chinese_explanation: "(C) '浪费' 一词意味着以鲁莽和愚蠢的方式浪费某物，尤其是金钱或时间。" +
            "<br><br>" +
            "(A) '储蓄' 意味着保留和储存某物，尤其是金钱，以备将来使用。" +
            "<br><br>" +
            "(B) '投资' 意味着花费金钱，期望通过将其投入金融计划、股票或财产或用于开发商业项目来实现利润或物质结果。" +
            "<br><br>" +
            "(D) '积累' 意味着聚集或获得越来越多的数量。"
    },
    {
        id: 9,
        question: "They __________ their grandparents, looking up to them with great respect and admiration.",
        chinese_question: "他们 __________ 他们的祖父母，对他们怀有极大的尊敬和钦佩。",
        answers: [
            { option: "A", answer: "despise", chinese_answer: "鄙视", chinese_romanization: "bǐshì" },
            { option: "B", answer: "revere", chinese_answer: "敬仰", chinese_romanization: "jìngyǎng" },
            { option: "C", answer: "disdain", chinese_answer: "轻视", chinese_romanization: "qīngshì" },
            { option: "D", answer: "mock", chinese_answer: "嘲笑", chinese_romanization: "cháoxiào" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'revere' means feel deep respect or admiration for something." +
            "<br><br>" +
            "(A) 'despise' means feel contempt or a deep repugnance for." +
            "<br><br>" +
            "(C) 'disdain' means feel that someone or something is unworthy of one's consideration or respect." +
            "<br><br>" +
            "(D) 'mock' means tease or laugh at in a scornful or contemptuous manner.",
        chinese_explanation: "(B) '敬仰' 一词意味着对某事感到深深的尊敬或钦佩。" +
            "<br><br>" +
            "(A) '鄙视' 意味着感到蔑视或深深的厌恶。" +
            "<br><br>" +
            "(C) '轻视' 意味着认为某人或某事不值得考虑或尊重。" +
            "<br><br>" +
            "(D) '嘲笑' 意味着以轻蔑或蔑视的方式取笑或嘲笑。"
    },
    {
        id: 10,
        question: "The aroma of the freshly baked bread __________ her appetite, making her eager for a taste.",
        chinese_question: "新鲜烤面包的香气 __________ 她的食欲，让她迫不及待地想尝一尝。",
        answers: [
            { option: "A", answer: "dampened", chinese_answer: "减弱", chinese_romanization: "jiǎnruò" },
            { option: "B", answer: "satiated", chinese_answer: "满足", chinese_romanization: "mǎnzú" },
            { option: "C", answer: "whetted", chinese_answer: "刺激", chinese_romanization: "cìjī" },
            { option: "D", answer: "suppressed", chinese_answer: "压制", chinese_romanization: "yāzhì" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'whetted' means to stimulate or excite (the appetite or desire)." +
            "<br><br>" +
            "(A) 'dampened' means to make less strong or intense." +
            "<br><br>" +
            "(B) 'satiated' means satisfied to the full." +
            "<br><br>" +
            "(D) 'suppressed' means forcibly put an end to.",
        chinese_explanation: "(C) '刺激' 一词意味着刺激或激发（食欲或欲望）。" +
            "<br><br>" +
            "(A) '减弱' 意味着使不那么强烈或不那么强烈。" +
            "<br><br>" +
            "(B) '满足' 意味着完全满足。" +
            "<br><br>" +
            "(D) '压制' 意味着强行终止。"
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
