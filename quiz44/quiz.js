// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "Her __________ personality made her a natural leader in any group.",
        chinese_question: "她的__________性格使她在任何团体中都是天生的领导者。",
        answers: [
            { option: "A", answer: "weak", chinese_answer: "虚弱的", chinese_romanization: "xūruò de" },
            { option: "B", answer: "subordinate", chinese_answer: "从属的", chinese_romanization: "cóngshǔ de" },
            { option: "C", answer: "dominant", chinese_answer: "占优势的", chinese_romanization: "zhàn yōushì de" },
            { option: "D", answer: "passive", chinese_answer: "被动的", chinese_romanization: "bèidòng de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'dominant' means most important, powerful, or influential. Figuratively, it can mean having a commanding and influential presence." +
            "<br><br>" +
            "(A) 'weak' means lacking the power to perform physically demanding tasks; lacking physical strength and energy." +
            "<br><br>" +
            "(B) 'subordinate' means lower in rank or position." +
            "<br><br>" +
            "(D) 'passive' means accepting or allowing what happens or what others do, without active response or resistance.",
        chinese_explanation: "(C) '占优势的'一词意味着最重要的、最强大的或最有影响力的。比喻地，它可以表示具有指挥和有影响力的存在。" +
            "<br><br>" +
            "(A) '虚弱的' 意味着缺乏执行体力任务的能力；缺乏体力和精力。" +
            "<br><br>" +
            "(B) '从属的' 意味着在等级或职位上较低的。" +
            "<br><br>" +
            "(D) '被动的' 意味着接受或允许发生的事情或他人所做的事情，而没有积极的回应或抵抗。"
    },
    {
        id: 2,
        question: "The scientist presented __________ evidence that convinced the panel of experts.",
        chinese_question: "这位科学家提出了__________的证据，令专家小组信服。",
        answers: [
            { option: "A", answer: "dubious", chinese_answer: "可疑的", chinese_romanization: "kěyí de" },
            { option: "B", answer: "unreliable", chinese_answer: "不可靠的", chinese_romanization: "bù kěkào de" },
            { option: "C", answer: "credible", chinese_answer: "可信的", chinese_romanization: "kěxìn de" },
            { option: "D", answer: "implausible", chinese_answer: "不合理的", chinese_romanization: "bù hélǐ de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'credible' means able to be believed; convincing." +
            "<br><br>" +
            "(A) 'dubious' means hesitating or doubting." +
            "<br><br>" +
            "(B) 'unreliable' means not able to be relied upon." +
            "<br><br>" +
            "(D) 'implausible' means not seeming reasonable or probable; failing to convince.",
        chinese_explanation: "(C) '可信的'一词意味着能够被相信的；令人信服的。" +
            "<br><br>" +
            "(A) '可疑的' 意味着犹豫或怀疑的。" +
            "<br><br>" +
            "(B) '不可靠的' 意味着不能依靠的。" +
            "<br><br>" +
            "(D) '不合理的' 意味着看起来不合理或不可能的；没有说服力的。"
    },
    {
        id: 3,
        question: "The company's customers remained __________ even after the price increase.",
        chinese_question: "即使在价格上涨后，公司的客户仍然保持 __________。",
        answers: [
            { option: "A", answer: "loyal", chinese_answer: "忠诚", chinese_romanization: "zhōngchéng" },
            { option: "B", answer: "upset", chinese_answer: "不安", chinese_romanization: "bù'ān" },
            { option: "C", answer: "disinterested", chinese_answer: "无兴趣", chinese_romanization: "wú xìngqù" },
            { option: "D", answer: "unfaithful", chinese_answer: "不忠", chinese_romanization: "bù zhōng" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'loyal' metaphorically means showing strong support or allegiance despite challenges." +
            "<br><br>" +
            "(B) 'upset' means make (someone) unhappy, disappointed, or worried." +
            "<br><br>" +
            "(C) 'disinterested' means having or feeling no interest in something." +
            "<br><br>" +
            "(D) 'unfaithful' means not loyal or trustworthy.",
        chinese_explanation: "(A) '忠诚' 比喻尽管有挑战仍表现出强烈的支持或忠诚。" +
            "<br><br>" +
            "(B) '不安' 意味着使（某人）不高兴、失望或担忧。" +
            "<br><br>" +
            "(C) '无兴趣' 意味着对某事没有兴趣或感觉。" +
            "<br><br>" +
            "(D) '不忠' 意味着不忠诚或不可信。"
    },
    {
        id: 4,
        question: "Her dreams of becoming a star seemed __________ and unreachable.",
        chinese_question: "她成为明星的梦想似乎 __________ 且难以实现。",
        answers: [
            { option: "A", answer: "distant", chinese_answer: "遥远的", chinese_romanization: "yáoyuǎn de" },
            { option: "B", answer: "imminent", chinese_answer: "即将发生的", chinese_romanization: "jíjiāng fāshēng de" },
            { option: "C", answer: "certain", chinese_answer: "确定的", chinese_romanization: "quèdìng de" },
            { option: "D", answer: "guaranteed", chinese_answer: "有保证的", chinese_romanization: "yǒu bǎozhèng de" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'distant' metaphorically means far removed in relevance or likelihood." +
            "<br><br>" +
            "(B) 'imminent' means about to happen." +
            "<br><br>" +
            "(C) 'certain' means known for sure; established beyond doubt." +
            "<br><br>" +
            "(D) 'guaranteed' means certain to happen; sure.",
        chinese_explanation: "(A) '遥远的' 比喻在相关性或可能性上远离的。" +
            "<br><br>" +
            "(B) '即将发生的' 意味着即将发生。" +
            "<br><br>" +
            "(C) '确定的' 意味着确定无疑的；确立的。" +
            "<br><br>" +
            "(D) '有保证的' 意味着肯定会发生的；确定的。"
    },
    {
        id: 5,
        question: "Love and happiness are __________ concepts that cannot be measured or touched, yet they profoundly impact our lives.",
        chinese_question: "爱和幸福是 __________ 的概念，无法衡量或触摸，但它们深刻地影响着我们的生活。",
        answers: [
            { option: "A", answer: "tangible", chinese_answer: "有形的", chinese_romanization: "yǒuxíng de" },
            { option: "B", answer: "measurable", chinese_answer: "可衡量的", chinese_romanization: "kě héngliàng de" },
            { option: "C", answer: "intangible", chinese_answer: "无形的", chinese_romanization: "wúxíng de" },
            { option: "D", answer: "physical", chinese_answer: "物理的", chinese_romanization: "wùlǐ de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'intangible' means unable to be touched or grasped; not having a physical presence." +
            "<br><br>" +
            "(A) 'tangible' means perceptible by touch." +
            "<br><br>" +
            "(B) 'measurable' means able to be measured." +
            "<br><br>" +
            "(D) 'physical' means relating to the body as opposed to the mind.",
        chinese_explanation: "(C) '无形的' 一词意味着无法触摸或抓住的；没有物理存在的。" +
            "<br><br>" +
            "(A) '有形的' 意味着可以触摸到的。" +
            "<br><br>" +
            "(B) '可衡量的' 意味着可以测量的。" +
            "<br><br>" +
            "(D) '物理的' 意味着与身体有关的，与心灵相对。"
    },
    {
        id: 6,
        question: "After the long hike, they were __________, barely able to keep their eyes open.",
        chinese_question: "长途徒步后，他们感到 __________，几乎睁不开眼睛。",
        answers: [
            { option: "A", answer: "refreshed", chinese_answer: "精神焕发", chinese_romanization: "jīngshén huànfā" },
            { option: "B", answer: "revitalized", chinese_answer: "恢复活力", chinese_romanization: "huīfù huólì" },
            { option: "C", answer: "invigorated", chinese_answer: "振奋", chinese_romanization: "zhènfèn" },
            { option: "D", answer: "languid", chinese_answer: "无力", chinese_romanization: "wúlì" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'languid' means weak or faint from illness or fatigue." +
            "<br><br>" +
            "(A) 'refreshed' means having regained strength or energy." +
            "<br><br>" +
            "(B) 'revitalized' means imbued with new life and vitality." +
            "<br><br>" +
            "(C) 'invigorated' means given strength or energy to.",
        chinese_explanation: "(D) '无力' 意味着因疾病或疲劳而虚弱或昏厥。" +
            "<br><br>" +
            "(A) '精神焕发' 意味着恢复了力量或能量。" +
            "<br><br>" +
            "(B) '恢复活力' 意味着注入新的生命和活力。" +
            "<br><br>" +
            "(C) '振奋' 意味着给予力量或能量。"
    },
    {
        id: 7,
        question: "His __________ decision-making often led him to successful outcomes even when he lacked all the information.",
        chinese_question: "他的__________决策常常让他在缺乏所有信息的情况下取得成功。",
        answers: [
            { option: "A", answer: "logical", chinese_answer: "合乎逻辑的", chinese_romanization: "héhū luójí de" },
            { option: "B", answer: "analytical", chinese_answer: "分析的", chinese_romanization: "fēnxī de" },
            { option: "C", answer: "intuitive", chinese_answer: "直觉的", chinese_romanization: "zhíjué de" },
            { option: "D", answer: "calculated", chinese_answer: "经过计算的", chinese_romanization: "jīngguò jìsuàn de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'intuitive' means using or based on what one feels to be true even without conscious reasoning; instinctive. Figuratively, it can mean being perceptive and quick to understand." +
            "<br><br>" +
            "(A) 'logical' means of or according to the rules of logic or formal argument." +
            "<br><br>" +
            "(B) 'analytical' means relating to or using analysis or logical reasoning." +
            "<br><br>" +
            "(D) 'calculated' means (of an action) done with full awareness of the likely consequences.",
        chinese_explanation: "(C) '直觉的'一词意味着基于感觉的，甚至没有有意识的推理；本能的。比喻地，它可以表示有洞察力和快速理解的。" +
            "<br><br>" +
            "(A) '合乎逻辑的' 意味着符合逻辑规则或正式论证的。" +
            "<br><br>" +
            "(B) '分析的' 意味着与分析或逻辑推理有关的。" +
            "<br><br>" +
            "(D) '经过计算的' 意味着（行为）在充分意识到可能后果的情况下进行的。"
    },
    {
        id: 8,
        question: "The news of the election results spread in an __________, thanks to social media and live broadcasting.",
        chinese_question: "选举结果的消息通过社交媒体和现场直播在 __________ 之间传播开来。",
        answers: [
            { option: "A", answer: "instant", chinese_answer: "瞬间", chinese_romanization: "shùnjiān" },
            { option: "B", answer: "delayed", chinese_answer: "延迟", chinese_romanization: "yánchí" },
            { option: "C", answer: "gradual", chinese_answer: "逐渐", chinese_romanization: "zhújiàn" },
            { option: "D", answer: "slow", chinese_answer: "缓慢", chinese_romanization: "huǎnmàn" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'instant' means happening or coming immediately." +
            "<br><br>" +
            "(B) 'delayed' means postponed or slowed down." +
            "<br><br>" +
            "(C) 'gradual' means taking place or progressing slowly or by degrees." +
            "<br><br>" +
            "(D) 'slow' means moving or operating, or designed to do so, only at a low speed; not quick or fast.",
        chinese_explanation: "(A) '瞬间' 意味着立即发生或到来的。" +
            "<br><br>" +
            "(B) '延迟' 意味着推迟或放慢的。" +
            "<br><br>" +
            "(C) '逐渐' 意味着缓慢地或逐步发生或发展的。" +
            "<br><br>" +
            "(D) '缓慢' 意味着移动或操作，或设计成以低速运行；不快或不迅速。"
    },
    {
        id: 9,
        question: "His __________ nature led him to explore new places and ideas constantly.",
        chinese_question: "他 __________ 的性格使他不断探索新的地方和想法。",
        answers: [
            { option: "A", answer: "apathetic", chinese_answer: "冷漠", chinese_romanization: "lěngmò" },
            { option: "B", answer: "indifferent", chinese_answer: "无动于衷", chinese_romanization: "wúdòng yú zhōng" },
            { option: "C", answer: "inquisitive", chinese_answer: "好奇", chinese_romanization: "hàoqí" },
            { option: "D", answer: "passive", chinese_answer: "被动", chinese_romanization: "bèidòng" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'inquisitive' means curious or inquiring." +
            "<br><br>" +
            "(A) 'apathetic' means showing or feeling no interest, enthusiasm, or concern." +
            "<br><br>" +
            "(B) 'indifferent' means having no particular interest or sympathy; unconcerned." +
            "<br><br>" +
            "(D) 'passive' means accepting or allowing what happens or what others do, without active response or resistance.",
        chinese_explanation: "(C) '好奇' 意味着好奇或询问。" +
            "<br><br>" +
            "(A) '冷漠' 意味着没有特别的兴趣、热情或关心。" +
            "<br><br>" +
            "(B) '无动于衷' 意味着没有特别的兴趣或同情；不关心。" +
            "<br><br>" +
            "(D) '被动' 意味着接受或允许发生的事情或他人所做的事情，没有积极回应或抵抗。"
    },
    {
        id: 10,
        question: "The __________ bees worked tirelessly to build their hive, showcasing the importance of teamwork and effort.",
        chinese_question: "__________ 的蜜蜂不知疲倦地筑巢，展示了团队合作和努力的重要性。",
        answers: [
            { option: "A", answer: "industrious", chinese_answer: "勤劳的", chinese_romanization: "qínláo de" },
            { option: "B", answer: "sluggish", chinese_answer: "迟缓的", chinese_romanization: "chíhuǎn de" },
            { option: "C", answer: "indifferent", chinese_answer: "冷漠的", chinese_romanization: "lěngmò de" },
            { option: "D", answer: "unmotivated", chinese_answer: "没有动力的", chinese_romanization: "méiyǒu dònglì de" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'industrious' means diligent and hardworking." +
            "<br><br>" +
            "(B) 'sluggish' means slow-moving or inactive." +
            "<br><br>" +
            "(C) 'indifferent' means having no particular interest or sympathy; unconcerned." +
            "<br><br>" +
            "(D) 'unmotivated' means lacking enthusiasm or interest.",
        chinese_explanation: "(A) '勤劳的' 意味着勤勉和努力工作的。" +
            "<br><br>" +
            "(B) '迟缓的' 意味着行动迟缓或不活跃的。" +
            "<br><br>" +
            "(C) '冷漠的' 意味着没有特别的兴趣或同情的；不关心的。" +
            "<br><br>" +
            "(D) '没有动力的' 意味着缺乏热情或兴趣的。"
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
