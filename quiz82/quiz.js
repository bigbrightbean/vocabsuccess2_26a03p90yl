// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "When you __________ critical information from your presentation, it can lead to misunderstandings and confusion.",
        chinese_question: "当你在演示中 __________ 关键信息时，可能会导致误解和混乱。",
        answers: [
            { option: "A", answer: "include", chinese_answer: "包含", chinese_romanization: "bāohán" },
            { option: "B", answer: "emphasize", chinese_answer: "强调", chinese_romanization: "qiángdiào" },
            { option: "C", answer: "omit", chinese_answer: "省略", chinese_romanization: "shěnglüè" },
            { option: "D", answer: "elaborate", chinese_answer: "详细说明", chinese_romanization: "xiángxì shuōmíng" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'omit' means to leave out or exclude." +
            "<br><br>" +
            "(A) 'include' means to contain as part of a whole." +
            "<br><br>" +
            "(B) 'emphasize' means to give special importance or prominence to something in speaking or writing." +
            "<br><br>" +
            "(D) 'elaborate' means to develop or present a theory, policy, or system in detail.",
        chinese_explanation: "(C) '省略' 一词意味着省去或排除。" +
            "<br><br>" +
            "(A) '包含' 意味着作为整体的一部分。" +
            "<br><br>" +
            "(B) '强调' 意味着在讲话或写作中对某事给予特别重要或突出的位置。" +
            "<br><br>" +
            "(D) '详细说明' 意味着详细发展或提出理论、政策或系统。"
    },
    {
        id: 2,
        question: "His careless remarks about her work __________ her, and she couldn't hold back her anger.",
        chinese_question: "他对她工作的随意评论让她 __________，她无法抑制自己的愤怒。",
        answers: [
            { option: "A", answer: "calmed", chinese_answer: "平静", chinese_romanization: "píngjìng" },
            { option: "B", answer: "infuriated", chinese_answer: "激怒", chinese_romanization: "jīnù" },
            { option: "C", answer: "pleased", chinese_answer: "高兴", chinese_romanization: "gāoxìng" },
            { option: "D", answer: "soothed", chinese_answer: "安抚", chinese_romanization: "ānfǔ" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'infuriated' means to make someone extremely angry and impatient." +
            "<br><br>" +
            "(A) 'calmed' means to make someone peaceful and quiet." +
            "<br><br>" +
            "(C) 'pleased' means to cause someone to feel happy and satisfied." +
            "<br><br>" +
            "(D) 'soothed' means to gently calm someone or something.",
        chinese_explanation: "(B) '激怒' 一词意味着使某人极度愤怒和不耐烦。" +
            "<br><br>" +
            "(A) '平静' 意味着使某人平静和安静。" +
            "<br><br>" +
            "(C) '高兴' 意味着使某人感到高兴和满意。" +
            "<br><br>" +
            "(D) '安抚' 意味着轻柔地安抚某人或某物。"
    },
    {
        id: 3,
        question: "The bully tried to __________ the smaller kids, making them feel scared and powerless.",
        chinese_question: "那个恶霸试图 __________ 较小的孩子们，使他们感到害怕和无力。",
        answers: [
            { option: "A", answer: "support", chinese_answer: "支持", chinese_romanization: "zhīchí" },
            { option: "B", answer: "encourage", chinese_answer: "鼓励", chinese_romanization: "gǔlì" },
            { option: "C", answer: "reassure", chinese_answer: "安抚", chinese_romanization: "ānfǔ" },
            { option: "D", answer: "intimidate", chinese_answer: "恐吓", chinese_romanization: "kǒnghè" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'intimidate' means to frighten or overawe someone, especially in order to make them do what one wants." +
            "<br><br>" +
            "(A) 'support' means to give assistance to." +
            "<br><br>" +
            "(B) 'encourage' means to give support, confidence, or hope to someone." +
            "<br><br>" +
            "(C) 'reassure' means to say or do something to remove the doubts and fears of someone.",
        chinese_explanation: "(D) '恐吓' 一词意味着吓唬或压倒某人，尤其是为了让他们做自己想要的事情。" +
            "<br><br>" +
            "(A) '支持' 意味着给予帮助。" +
            "<br><br>" +
            "(B) '鼓励' 意味着给予某人支持、信心或希望。" +
            "<br><br>" +
            "(C) '安抚' 意味着说或做某事以消除某人的疑虑和恐惧。"
    },
    {
        id: 4,
        question: "The regime continued to __________ the people, denying them basic human rights and freedoms.",
        chinese_question: "该政权继续 __________ 人民，剥夺他们的基本人权和自由。",
        answers: [
            { option: "A", answer: "oppress", chinese_answer: "压迫", chinese_romanization: "yāpò" },
            { option: "B", answer: "liberate", chinese_answer: "解放", chinese_romanization: "jiěfàng" },
            { option: "C", answer: "uplift", chinese_answer: "提升", chinese_romanization: "tíshēng" },
            { option: "D", answer: "encourage", chinese_answer: "鼓励", chinese_romanization: "gǔlì" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'oppress' means to keep someone in subjection and hardship, especially by the unjust exercise of authority." +
            "<br><br>" +
            "(B) 'liberate' means to set someone free from a situation." +
            "<br><br>" +
            "(C) 'uplift' means to raise the level of." +
            "<br><br>" +
            "(D) 'encourage' means to give support, confidence, or hope to someone.",
        chinese_explanation: "(A) '压迫' 一词意味着通过不公正的权力行使使某人处于压制和困苦中。" +
            "<br><br>" +
            "(B) '解放' 意味着使某人从一种情况中解脱出来。" +
            "<br><br>" +
            "(C) '提升' 意味着提高...的水平。" +
            "<br><br>" +
            "(D) '鼓励' 意味着给予某人支持、信心或希望。"
    },
    {
        id: 5,
        question: "The sheer volume of work began to __________ him, leading to long hours and mounting stress.",
        chinese_question: "大量的工作开始 __________ 他，导致长时间工作和压力不断增加。",
        answers: [
            { option: "A", answer: "relax", chinese_answer: "放松", chinese_romanization: "fàngsōng" },
            { option: "B", answer: "overwhelm", chinese_answer: "压垮", chinese_romanization: "yākuǎ" },
            { option: "C", answer: "reassure", chinese_answer: "安慰", chinese_romanization: "ānwèi" },
            { option: "D", answer: "comfort", chinese_answer: "舒适", chinese_romanization: "shūshì" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'overwhelm' means to bury or drown beneath a huge mass." +
            "<br><br>" +
            "(A) 'relax' means to make or become less tense or anxious." +
            "<br><br>" +
            "(C) 'reassure' means to say or do something to remove doubts and fears." +
            "<br><br>" +
            "(D) 'comfort' means to ease the grief or distress of.",
        chinese_explanation: "(B) '压垮' 一词意味着被大量的东西埋或淹没。" +
            "<br><br>" +
            "(A) '放松' 意味着使或变得不那么紧张或焦虑。" +
            "<br><br>" +
            "(C) '安慰' 意味着说或做某事以消除怀疑和恐惧。" +
            "<br><br>" +
            "(D) '舒适' 意味着缓解悲伤或痛苦。"
    },
    {
        id: 6,
        question: "She sat by the window to __________ the decision she had to make, weighing all possible outcomes.",
        chinese_question: "她坐在窗边 __________ 自己必须做出的决定，权衡所有可能的结果。",
        answers: [
            { option: "A", answer: "neglect", chinese_answer: "忽视", chinese_romanization: "hūshì" },
            { option: "B", answer: "rush", chinese_answer: "匆忙", chinese_romanization: "cōngmáng" },
            { option: "C", answer: "contemplate", chinese_answer: "沉思", chinese_romanization: "chénsī" },
            { option: "D", answer: "avoid", chinese_answer: "避免", chinese_romanization: "bìmiǎn" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'contemplate' means look thoughtfully for a long time at; think about." +
            "<br><br>" +
            "(A) 'neglect' means fail to care for properly." +
            "<br><br>" +
            "(B) 'rush' means move with urgent haste." +
            "<br><br>" +
            "(D) 'avoid' means keep away from or stop oneself from doing (something).",
        chinese_explanation: "(C) '沉思' 意味着长时间深思熟虑；思考。" +
            "<br><br>" +
            "(A) '忽视' 意味着未能适当照顾。" +
            "<br><br>" +
            "(B) '匆忙' 意味着急切地移动。" +
            "<br><br>" +
            "(D) '避免' 意味着远离或阻止自己做（某事）。"
    },
    {
        id: 7,
        question: "The workers were accused of trying to __________ the company's operations by intentionally damaging the machinery.",
        chinese_question: "工人们被指控试图通过故意破坏机器来 __________ 公司的运作。",
        answers: [
            { option: "A", answer: "aid", chinese_answer: "帮助", chinese_romanization: "bāngzhù" },
            { option: "B", answer: "assist", chinese_answer: "协助", chinese_romanization: "xiézhù" },
            { option: "C", answer: "repair", chinese_answer: "修理", chinese_romanization: "xiūlǐ" },
            { option: "D", answer: "sabotage", chinese_answer: "破坏", chinese_romanization: "pòhuài" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'sabotage' means deliberately destroy, damage, or obstruct (something), especially for political or military advantage." +
            "<br><br>" +
            "(A) 'aid' means help, assist, or support (someone or something) in the achievement of something." +
            "<br><br>" +
            "(B) 'assist' means help (someone), typically by doing a share of the work." +
            "<br><br>" +
            "(C) 'repair' means restore (something damaged, faulty, or worn) to a good condition.",
        chinese_explanation: "(D) '破坏' 意味着故意破坏、损坏或妨碍（某物），尤其是为了政治或军事利益。" +
            "<br><br>" +
            "(A) '帮助' 意味着帮助、协助或支持（某人或某事）实现某事。" +
            "<br><br>" +
            "(B) '协助' 意味着帮助（某人），通常是通过分担工作。" +
            "<br><br>" +
            "(C) '修理' 意味着将（损坏、故障或磨损的东西）恢复到良好状态。"
    },
    {
        id: 8,
        question: "Despite the difficulties, she never __________ in her resolve to finish her education and build a better future.",
        chinese_question: "尽管困难重重，她从未 __________ 完成学业并创造更美好未来的决心。",
        answers: [
            { option: "A", answer: "wavered", chinese_answer: "动摇", chinese_romanization: "dòngyáo" },
            { option: "B", answer: "remained", chinese_answer: "保持", chinese_romanization: "bǎochí" },
            { option: "C", answer: "steadied", chinese_answer: "稳定", chinese_romanization: "wěndìng" },
            { option: "D", answer: "persisted", chinese_answer: "坚持", chinese_romanization: "jiānchí" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'wavered' means shake with a quivering motion; become unsteady or unreliable." +
            "<br><br>" +
            "(B) 'remained' means continue to exist, especially after other similar or related people or things have ceased to do so." +
            "<br><br>" +
            "(C) 'steadied' means firmly fixed, supported, or balanced; not shaking or moving." +
            "<br><br>" +
            "(D) 'persisted' means continue firmly or obstinately in an opinion or a course of action in spite of difficulty, opposition, or failure.",
        chinese_explanation: "(A) '动摇' 意味着以颤抖的动作摇动；变得不稳定或不可靠。" +
            "<br><br>" +
            "(B) '保持' 意味着继续存在，特别是在其他类似或相关的人或事物停止存在之后。" +
            "<br><br>" +
            "(C) '稳定' 意味着牢固地固定、支撑或平衡；不摇晃或移动。" +
            "<br><br>" +
            "(D) '坚持' 意味着不顾困难、反对或失败，继续坚定地或顽固地坚持某种意见或行动方针。"
    },
    {
        id: 9,
        question: "In response to unfair labor practices, the workers decided to __________ the company, refusing to buy its products.",
        chinese_question: "为了应对不公平的劳动行为，工人们决定 __________ 公司，拒绝购买其产品。",
        answers: [
            { option: "A", answer: "support", chinese_answer: "支持", chinese_romanization: "zhīchí" },
            { option: "B", answer: "endorse", chinese_answer: "赞同", chinese_romanization: "zàntóng" },
            { option: "C", answer: "promote", chinese_answer: "推广", chinese_romanization: "tuīguǎng" },
            { option: "D", answer: "boycott", chinese_answer: "抵制", chinese_romanization: "dǐzhì" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'boycott' means withdraw from commercial or social relations with (a country, organization, or person) as a punishment or protest." +
            "<br><br>" +
            "(A) 'support' means bear all or part of the weight of; hold up." +
            "<br><br>" +
            "(B) 'endorse' means declare one's public approval or support of." +
            "<br><br>" +
            "(C) 'promote' means further the progress of (something, especially a cause, venture, or aim); support or actively encourage.",
        chinese_explanation: "(D) '抵制' 意味着作为惩罚或抗议而退出与（国家、组织或个人）的商业或社会关系。" +
            "<br><br>" +
            "(A) '支持' 意味着承担全部或部分重量；支撑。" +
            "<br><br>" +
            "(B) '赞同' 意味着公开表示支持或赞同。" +
            "<br><br>" +
            "(C) '推广' 意味着促进（某事物，尤其是事业、冒险或目标）的进展；支持或积极鼓励。"
    },
    {
        id: 10,
        question: "Without regular maintenance, the condition of the building began to __________ rapidly, leading to safety concerns.",
        chinese_question: "如果没有定期维护，建筑物的状况开始迅速 __________，导致安全问题。",
        answers: [
            { option: "A", answer: "improve", chinese_answer: "改善", chinese_romanization: "gǎishàn" },
            { option: "B", answer: "stabilize", chinese_answer: "稳定", chinese_romanization: "wěndìng" },
            { option: "C", answer: "deteriorate", chinese_answer: "恶化", chinese_romanization: "èhuà" },
            { option: "D", answer: "enhance", chinese_answer: "增强", chinese_romanization: "zēngqiáng" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'deteriorate' means become progressively worse." +
            "<br><br>" +
            "(A) 'improve' means make or become better." +
            "<br><br>" +
            "(B) 'stabilize' means make or become unlikely to change, fail, or decline." +
            "<br><br>" +
            "(D) 'enhance' means intensify, increase, or further improve the quality, value, or extent of.",
        chinese_explanation: "(C) '恶化' 意味着逐渐变得更糟。" +
            "<br><br>" +
            "(A) '改善' 意味着使变得更好。" +
            "<br><br>" +
            "(B) '稳定' 意味着使或变得不太可能改变、失败或下降。" +
            "<br><br>" +
            "(D) '增强' 意味着加强、增加或进一步提高质量、价值或范围。"
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
