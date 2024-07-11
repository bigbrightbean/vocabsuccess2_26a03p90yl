// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "His __________ view of the world often led him to disappointment, as reality rarely matched his high expectations.",
        chinese_question: "他对世界的 __________ 看法常常让他失望，因为现实很少能达到他高的期望。",
        answers: [
            { option: "A", answer: "idealistic", chinese_answer: "理想主义的", chinese_romanization: "lǐxiǎng zhǔyì de" },
            { option: "B", answer: "realistic", chinese_answer: "现实的", chinese_romanization: "xiànshí de" },
            { option: "C", answer: "cynical", chinese_answer: "愤世嫉俗的", chinese_romanization: "fènshìjísú de" },
            { option: "D", answer: "pragmatic", chinese_answer: "务实的", chinese_romanization: "wùshí de" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'idealistic' means characterized by idealism; unrealistically aiming for perfection." +
            "<br><br>" +
            "(B) 'realistic' means having or showing a sensible and practical idea of what can be achieved or expected." +
            "<br><br>" +
            "(C) 'cynical' means believing that people are motivated purely by self-interest." +
            "<br><br>" +
            "(D) 'pragmatic' means dealing with things sensibly and realistically in a way that is based on practical rather than theoretical considerations.",
        chinese_explanation: "(A) '理想主义的' 意味着以理想主义为特征的；不切实际地追求完美。" +
            "<br><br>" +
            "(B) '现实的' 意味着对可以实现或期望的事情有或表现出明智和实际的想法。" +
            "<br><br>" +
            "(C) '愤世嫉俗的' 意味着相信人们纯粹是出于自利动机的。" +
            "<br><br>" +
            "(D) '务实的' 意味着以明智和实际的方式处理事情，基于实际而非理论考虑。"
    },
    {
        id: 2,
        question: "Her __________ analysis of the complex issue impressed everyone, as she was able to break down the problem clearly and concisely.",
        chinese_question: "她对这个复杂问题的 __________ 分析让每个人都印象深刻，因为她能够清晰简明地解析问题。",
        answers: [
            { option: "A", answer: "incisive", chinese_answer: "深刻的", chinese_romanization: "shēnkè de" },
            { option: "B", answer: "vague", chinese_answer: "模糊的", chinese_romanization: "móhú de" },
            { option: "C", answer: "ambiguous", chinese_answer: "含糊的", chinese_romanization: "hánhú de" },
            { option: "D", answer: "superficial", chinese_answer: "表面的", chinese_romanization: "biǎomiàn de" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'incisive' means intelligently analytical and clear-thinking." +
            "<br><br>" +
            "(B) 'vague' means of uncertain, indefinite, or unclear character or meaning." +
            "<br><br>" +
            "(C) 'ambiguous' means open to more than one interpretation; not having one obvious meaning." +
            "<br><br>" +
            "(D) 'superficial' means existing or occurring at or on the surface.",
        chinese_explanation: "(A) '深刻的' 意味着聪明的分析和清晰的思维。" +
            "<br><br>" +
            "(B) '模糊的' 意味着性质不确定、不明确或不清楚的。" +
            "<br><br>" +
            "(C) '含糊的' 意味着可以有多种解释的；没有一个明显的意义。" +
            "<br><br>" +
            "(D) '表面的' 意味着存在或发生在表面上的。"
    },
    {
        id: 3,
        question: "The house was __________ after the cleaning crew finished, with every surface sparkling.",
        chinese_question: "清洁人员完成后，房子 __________，每个表面都闪闪发光。",
        answers: [
            { option: "A", answer: "filthy", chinese_answer: "肮脏", chinese_romanization: "āngzāng" },
            { option: "B", answer: "dirty", chinese_answer: "脏", chinese_romanization: "zàng" },
            { option: "C", answer: "immaculate", chinese_answer: "一尘不染", chinese_romanization: "yīchén bùrǎn" },
            { option: "D", answer: "messy", chinese_answer: "乱", chinese_romanization: "luàn" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'immaculate' means perfectly clean, neat, or tidy." +
            "<br><br>" +
            "(A) 'filthy' means disgustingly dirty." +
            "<br><br>" +
            "(B) 'dirty' means covered or marked with an unclean substance." +
            "<br><br>" +
            "(D) 'messy' means untidy or dirty.",
        chinese_explanation: "(C) '一尘不染' 意味着完全干净、整洁。" +
            "<br><br>" +
            "(A) '肮脏' 意味着肮脏得令人厌恶。" +
            "<br><br>" +
            "(B) '脏' 意味着被不洁净物质覆盖或标记。" +
            "<br><br>" +
            "(D) '乱' 意味着不整洁或肮脏。"
    },
    {
        id: 4,
        question: "The doctor's __________ approach to medicine considers the patient's physical, emotional, and psychological well-being.",
        chinese_question: "这位医生的 __________ 医疗方法考虑到了患者的身体、情感和心理健康。",
        answers: [
            { option: "A", answer: "holistic", chinese_answer: "整体的", chinese_romanization: "zhěngtǐ de" },
            { option: "B", answer: "narrow", chinese_answer: "狭窄的", chinese_romanization: "xiázhǎi de" },
            { option: "C", answer: "limited", chinese_answer: "有限的", chinese_romanization: "yǒuxiàn de" },
            { option: "D", answer: "partial", chinese_answer: "部分的", chinese_romanization: "bùfèn de" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'holistic' means relating to or concerned with complete systems rather than with individual parts." +
            "<br><br>" +
            "(B) 'narrow' means limited in extent, amount, or scope." +
            "<br><br>" +
            "(C) 'limited' means restricted in size, amount, or extent." +
            "<br><br>" +
            "(D) 'partial' means existing only in part; incomplete.",
        chinese_explanation: "(A) '整体的' 意味着与完整系统有关或关注完整系统的，而不是个别部分的。" +
            "<br><br>" +
            "(B) '狭窄的' 意味着范围、数量或范围有限的。" +
            "<br><br>" +
            "(C) '有限的' 意味着在大小、数量或范围上受限的。" +
            "<br><br>" +
            "(D) '部分的' 意味着仅部分存在的；不完整的。"
    },
    {
        id: 5,
        question: "The bakery's door swung open, releasing the __________ aroma of freshly baked bread into the street.",
        chinese_question: "面包店的门一打开，新鲜烘焙面包的 __________ 香气就飘到了街上。",
        answers: [
            { option: "A", answer: "fragrant", chinese_answer: "芳香的", chinese_romanization: "fāngxiāng de" },
            { option: "B", answer: "odorless", chinese_answer: "无味的", chinese_romanization: "wúwèi de" },
            { option: "C", answer: "stinky", chinese_answer: "臭的", chinese_romanization: "chòu de" },
            { option: "D", answer: "musty", chinese_answer: "发霉的", chinese_romanization: "fāméi de" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'musty' means having a stale, moldy, or damp smell." +
            "<br><br>" +
            "(A) 'fragrant' means having a pleasant or sweet smell." +
            "<br><br>" +
            "(B) 'odorless' means having no smell." +
            "<br><br>" +
            "(C) 'stinky' means having a strong, unpleasant smell.",
        chinese_explanation: "(D) '发霉的' 意味着有陈旧的、发霉的或潮湿的气味。" +
            "<br><br>" +
            "(A) '芳香的' 意味着有愉快或甜美的气味。" +
            "<br><br>" +
            "(B) '无味的' 意味着没有气味的。" +
            "<br><br>" +
            "(C) '臭的' 意味着有强烈、令人不快的气味。"
    },
    {
        id: 6,
        question: "The speaker's __________ delivery made it hard for the audience to stay engaged.",
        chinese_question: "演讲者 __________ 的表达方式使观众难以保持兴趣。",
        answers: [
            { option: "A", answer: "bland", chinese_answer: "平淡的", chinese_romanization: "píngdàn de" },
            { option: "B", answer: "dynamic", chinese_answer: "动态的", chinese_romanization: "dòngtài de" },
            { option: "C", answer: "captivating", chinese_answer: "吸引人的", chinese_romanization: "xīyǐn rén de" },
            { option: "D", answer: "energetic", chinese_answer: "精力充沛的", chinese_romanization: "jīnglì chōngpèi de" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'bland' means lacking strong features or characteristics and therefore uninteresting." +
            "<br><br>" +
            "(B) 'dynamic' means characterized by constant change, activity, or progress." +
            "<br><br>" +
            "(C) 'captivating' means capable of attracting and holding interest." +
            "<br><br>" +
            "(D) 'energetic' means showing or involving great activity or vitality.",
        chinese_explanation: "(A) '平淡的' 意味着缺乏强烈的特征或特点，因此没有吸引力。" +
            "<br><br>" +
            "(B) '动态的' 意味着具有持续变化、活动或进步的特征。" +
            "<br><br>" +
            "(C) '吸引人的' 意味着能够吸引并保持兴趣的。" +
            "<br><br>" +
            "(D) '精力充沛的' 意味着表现出或涉及很大的活动或活力。"
    },
    {
        id: 7,
        question: "His __________ gesture of offering his seat to an elderly woman on the crowded bus was much appreciated.",
        chinese_question: "他在拥挤的公交车上为一位老太太让座的 __________ 举动受到了大家的赞赏。",
        answers: [
            { option: "A", answer: "rude", chinese_answer: "粗鲁", chinese_romanization: "cūlǔ" },
            { option: "B", answer: "chivalrous", chinese_answer: "彬彬有礼", chinese_romanization: "bīnbīn yǒu lǐ" },
            { option: "C", answer: "inconsiderate", chinese_answer: "不体贴", chinese_romanization: "bù tǐtiē" },
            { option: "D", answer: "impolite", chinese_answer: "无礼", chinese_romanization: "wúlǐ" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'chivalrous' means courteous and gallant, especially towards women." +
            "<br><br>" +
            "(A) 'rude' means offensively impolite or ill-mannered." +
            "<br><br>" +
            "(C) 'inconsiderate' means thoughtlessly causing hurt or inconvenience to others." +
            "<br><br>" +
            "(D) 'impolite' means not having or showing good manners.",
        chinese_explanation: "(B) '彬彬有礼' 意味着礼貌和彬彬有礼，特别是对女性。" +
            "<br><br>" +
            "(A) '粗鲁' 意味着冒犯性的不礼貌或无礼。" +
            "<br><br>" +
            "(C) '不体贴' 意味着不考虑他人感受或方便。" +
            "<br><br>" +
            "(D) '无礼' 意味着没有或表现出良好的礼貌。"
    },
    {
        id: 8,
        question: "The charity provided food and shelter to the __________ families who had lost everything in the flood.",
        chinese_question: "慈善机构为在洪水中失去一切的 __________ 家庭提供了食物和住所。",
        answers: [
            { option: "A", answer: "affluent", chinese_answer: "富裕", chinese_romanization: "fùyù" },
            { option: "B", answer: "wealthy", chinese_answer: "富有", chinese_romanization: "fùyǒu" },
            { option: "C", answer: "destitute", chinese_answer: "贫困", chinese_romanization: "pínkùn" },
            { option: "D", answer: "prosperous", chinese_answer: "繁荣", chinese_romanization: "fánróng" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'destitute' means without the basic necessities of life." +
            "<br><br>" +
            "(A) 'affluent' means having a great deal of money; wealthy." +
            "<br><br>" +
            "(B) 'wealthy' means having a great deal of money, resources, or assets; rich." +
            "<br><br>" +
            "(D) 'prosperous' means successful in material terms; flourishing financially.",
        chinese_explanation: "(C) '贫困' 意味着没有生活的基本必需品。" +
            "<br><br>" +
            "(A) '富裕' 意味着拥有大量的钱；富有。" +
            "<br><br>" +
            "(B) '富有' 意味着拥有大量的钱、资源或资产；富有。" +
            "<br><br>" +
            "(D) '繁荣' 意味着物质上的成功；经济上繁荣。"
    },
    {
        id: 9,
        question: "The situation became __________ as the storm intensified, leaving the stranded hikers with little hope of rescue.",
        chinese_question: "随着暴风雨加剧，情况变得 __________，使被困的徒步旅行者几乎没有获救的希望。",
        answers: [
            { option: "A", answer: "dire", chinese_answer: "严重的", chinese_romanization: "yánzhòng de" },
            { option: "B", answer: "hopeful", chinese_answer: "有希望的", chinese_romanization: "yǒu xīwàng de" },
            { option: "C", answer: "trivial", chinese_answer: "微不足道的", chinese_romanization: "wēibùzúdào de" },
            { option: "D", answer: "calm", chinese_answer: "平静的", chinese_romanization: "píngjìng de" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'dire' means extremely serious or urgent." +
            "<br><br>" +
            "(B) 'hopeful' means feeling or inspiring optimism about a future event." +
            "<br><br>" +
            "(C) 'trivial' means of little value or importance." +
            "<br><br>" +
            "(D) 'calm' means not showing or feeling nervousness, anger, or other strong emotions.",
        chinese_explanation: "(A) '严重的' 意味着非常严重或紧急的。" +
            "<br><br>" +
            "(B) '有希望的' 意味着对未来事件感到或激发乐观的。" +
            "<br><br>" +
            "(C) '微不足道的' 意味着价值或重要性很小的。" +
            "<br><br>" +
            "(D) '平静的' 意味着不表现出或感到紧张、愤怒或其他强烈情感的。"
    },
    {
        id: 10,
        question: "Her __________ handling of the conflict between her friends prevented any hard feelings and resolved the issue peacefully.",
        chinese_question: "她 __________ 地处理朋友之间的冲突，避免了任何不快，并和平解决了问题。",
        answers: [
            { option: "A", answer: "diplomatic", chinese_answer: "圆滑的", chinese_romanization: "yuánhuá de" },
            { option: "B", answer: "tactless", chinese_answer: "不圆滑的", chinese_romanization: "bù yuánhuá de" },
            { option: "C", answer: "blunt", chinese_answer: "直率的", chinese_romanization: "zhíshuài de" },
            { option: "D", answer: "abrasive", chinese_answer: "粗暴的", chinese_romanization: "cūbào de" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'diplomatic' means having or showing an ability to deal with people in a sensitive and effective way." +
            "<br><br>" +
            "(B) 'tactless' means having or showing a lack of skill and sensitivity in dealing with others or with difficult issues." +
            "<br><br>" +
            "(C) 'blunt' means uncompromisingly forthright." +
            "<br><br>" +
            "(D) 'abrasive' means showing little concern for the feelings of others; harsh.",
        chinese_explanation: "(A) '圆滑的' 意味着有或表现出以敏感和有效的方式与人打交道的能力。" +
            "<br><br>" +
            "(B) '不圆滑的' 意味着在处理他人或困难问题时缺乏技巧和敏感性。" +
            "<br><br>" +
            "(C) '直率的' 意味着不妥协地直言不讳的。" +
            "<br><br>" +
            "(D) '粗暴的' 意味着对他人的感受不关心的；严厉的。"
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
