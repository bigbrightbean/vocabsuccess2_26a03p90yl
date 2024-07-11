// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "Despite the challenges, they considered themselves __________ to have each other.",
        chinese_question: "尽管有挑战，他们仍认为自己很 __________ 有彼此。",
        answers: [
            { option: "A", answer: "fortunate", chinese_answer: "幸运的", chinese_romanization: "xìngyùn de" },
            { option: "B", answer: "troubled", chinese_answer: "困扰的", chinese_romanization: "kùnrǎo de" },
            { option: "C", answer: "cursed", chinese_answer: "被诅咒的", chinese_romanization: "bèi zǔzhòu de" },
            { option: "D", answer: "burdened", chinese_answer: "负担的", chinese_romanization: "fùdān de" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'fortunate' metaphorically means having good fortune or luck in a more abstract sense." +
            "<br><br>" +
            "(B) 'troubled' means beset by problems or difficulties." +
            "<br><br>" +
            "(C) 'cursed' means affected by something harmful or undesirable." +
            "<br><br>" +
            "(D) 'burdened' means having a heavy load or responsibility.",
        chinese_explanation: "(A) '幸运的' 比喻在更抽象的意义上拥有好运或幸运。" +
            "<br><br>" +
            "(B) '困扰的' 意味着被问题或困难困扰。" +
            "<br><br>" +
            "(C) '被诅咒的' 意味着受到有害或不受欢迎的事物影响。" +
            "<br><br>" +
            "(D) '负担的' 意味着承受重负或责任的。"
    },
    {
        id: 2,
        question: "His __________ demeanor made it difficult for people to get close to him.",
        chinese_question: "他的__________态度让人难以接近。",
        answers: [
            { option: "A", answer: "tropical", chinese_answer: "热带的", chinese_romanization: "rèdài de" },
            { option: "B", answer: "arctic", chinese_answer: "冷淡的", chinese_romanization: "lěngdàn de" },
            { option: "C", answer: "desert", chinese_answer: "沙漠的", chinese_romanization: "shāmò de" },
            { option: "D", answer: "forest", chinese_answer: "森林的", chinese_romanization: "sēnlín de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'arctic' means relating to the regions around the North Pole. Figuratively, it can mean extremely cold or unfriendly." +
            "<br><br>" +
            "(A) 'tropical' means relating to the region of the Earth near the equator, where the climate is typically warm." +
            "<br><br>" +
            "(C) 'desert' means a barren area of landscape where little precipitation occurs." +
            "<br><br>" +
            "(D) 'forest' means a large area covered chiefly with trees and undergrowth.",
        chinese_explanation: "(B) '冷淡的'一词意味着与北极地区有关的。比喻地，它可以表示极其冷淡或不友好。" +
            "<br><br>" +
            "(A) '热带的' 意味着与赤道附近的地球区域有关，那里的气候通常是温暖的。" +
            "<br><br>" +
            "(C) '沙漠的' 意味着降水很少的不毛之地。" +
            "<br><br>" +
            "(D) '森林的' 意味着主要由树木和灌木覆盖的大面积土地。"
    },
    {
        id: 3,
        question: "The dictator was __________ for his brutal regime and countless human rights abuses.",
        chinese_question: "这位独裁者因其残暴的政权和无数的人权侵犯而__________。",
        answers: [
            { option: "A", answer: "famous", chinese_answer: "著名的", chinese_romanization: "zhùmíng de" },
            { option: "B", answer: "renowned", chinese_answer: "闻名的", chinese_romanization: "wénmíng de" },
            { option: "C", answer: "infamous", chinese_answer: "臭名昭著的", chinese_romanization: "chòumíngzhāozhù de" },
            { option: "D", answer: "celebrated", chinese_answer: "受赞扬的", chinese_romanization: "shòu zànyáng de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'infamous' means well known for some bad quality or deed." +
            "<br><br>" +
            "(A) 'famous' means known about by many people." +
            "<br><br>" +
            "(B) 'renowned' means known or talked about by many people; famous." +
            "<br><br>" +
            "(D) 'celebrated' means greatly admired; renowned.",
        chinese_explanation: "(C) '臭名昭著的'一词意味着以某些不好的品质或行为而闻名。" +
            "<br><br>" +
            "(A) '著名的' 意味着为许多人所知。" +
            "<br><br>" +
            "(B) '闻名的' 意味着为许多人所知或谈论的；著名的。" +
            "<br><br>" +
            "(D) '受赞扬的' 意味着非常受人钦佩；闻名的。"
    },
    {
        id: 4,
        question: "The employees were __________ about the new policy changes that reduced their benefits.",
        chinese_question: "员工们对削减福利的新政策感到__________。",
        answers: [
            { option: "A", answer: "satisfied", chinese_answer: "满意", chinese_romanization: "mǎnyì" },
            { option: "B", answer: "disgruntled", chinese_answer: "不满", chinese_romanization: "bùmǎn" },
            { option: "C", answer: "delighted", chinese_answer: "高兴", chinese_romanization: "gāoxìng" },
            { option: "D", answer: "content", chinese_answer: "满足", chinese_romanization: "mǎnzú" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'disgruntled' means angry or dissatisfied." +
            "<br><br>" +
            "(A) 'satisfied' means contented; pleased." +
            "<br><br>" +
            "(C) 'delighted' means feeling or showing great pleasure." +
            "<br><br>" +
            "(D) 'content' means in a state of peaceful happiness.",
        chinese_explanation: "(B) '不满'一词意味着愤怒或不满意。" +
            "<br><br>" +
            "(A) '满意' 意味着满足；高兴。" +
            "<br><br>" +
            "(C) '高兴' 意味着感到或表现出极大的快乐。" +
            "<br><br>" +
            "(D) '满足' 意味着处于和平幸福的状态。"
    },
    {
        id: 5,
        question: "His __________ behavior at the party left everyone talking about it for days.",
        chinese_question: "他在派对上的 __________ 行为让大家议论了好几天。",
        answers: [
            { option: "A", answer: "bizarre", chinese_answer: "奇怪的", chinese_romanization: "qíguài de" },
            { option: "B", answer: "predictable", chinese_answer: "可预测的", chinese_romanization: "kě yùcè de" },
            { option: "C", answer: "dull", chinese_answer: "无聊的", chinese_romanization: "wúliáo de" },
            { option: "D", answer: "familiar", chinese_answer: "熟悉的", chinese_romanization: "shúxī de" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'bizarre' metaphorically means strikingly out of the ordinary." +
            "<br><br>" +
            "(B) 'predictable' means able to be predicted." +
            "<br><br>" +
            "(C) 'dull' means lacking interest or excitement." +
            "<br><br>" +
            "(D) 'familiar' means well known from long or close association.",
        chinese_explanation: "(A) '奇怪的' 比喻显著不寻常的。" +
            "<br><br>" +
            "(B) '可预测的' 意味着可以预测的。" +
            "<br><br>" +
            "(C) '无聊的' 意味着缺乏兴趣或兴奋的。" +
            "<br><br>" +
            "(D) '熟悉的' 意味着因长时间或亲密关系而熟知的。"
    },
    {
        id: 6,
        question: "She gave her __________ effort to ensure the project was completed on time.",
        chinese_question: "她尽了__________努力确保项目按时完成。",
        answers: [
            { option: "A", answer: "minimum", chinese_answer: "最小值", chinese_romanization: "zuìxiǎo zhí" },
            { option: "B", answer: "average", chinese_answer: "平均", chinese_romanization: "píngjūn" },
            { option: "C", answer: "maximum", chinese_answer: "最大值", chinese_romanization: "zuìdà zhí" },
            { option: "D", answer: "typical", chinese_answer: "典型的", chinese_romanization: "diǎnxíng de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'maximum' means as great, high, or intense as possible or permitted." +
            "<br><br>" +
            "(A) 'minimum' means the least or smallest amount or quantity possible, attainable, or required." +
            "<br><br>" +
            "(B) 'average' means the result obtained by adding several quantities together and then dividing this total by the number of quantities." +
            "<br><br>" +
            "(D) 'typical' means having the distinctive qualities of a particular type of person or thing.",
        chinese_explanation: "(C) '最大值'一词意味着尽可能大、高或强烈的或被允许的。" +
            "<br><br>" +
            "(A) '最小值' 意味着可能的、可以达到的或需要的最小或最小数量。" +
            "<br><br>" +
            "(B) '平均' 意味着通过将几种数量加在一起然后将这个总数除以数量的数量来获得的结果。" +
            "<br><br>" +
            "(D) '典型的' 意味着具有某种类型的人或事物的独特品质。"
    },
    {
        id: 7,
        question: "The artist's latest work featured __________ figures that were both fascinating and disturbing.",
        chinese_question: "艺术家的最新作品展示了 __________ 的人物，既引人入胜又令人不安。",
        answers: [
            { option: "A", answer: "beautiful", chinese_answer: "美丽的", chinese_romanization: "měilì de" },
            { option: "B", answer: "grotesque", chinese_answer: "怪诞的", chinese_romanization: "guàidàn de" },
            { option: "C", answer: "elegant", chinese_answer: "优雅的", chinese_romanization: "yōuyǎ de" },
            { option: "D", answer: "charming", chinese_answer: "迷人的", chinese_romanization: "mírén de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'grotesque' means comically or repulsively ugly or distorted." +
            "<br><br>" +
            "(A) 'beautiful' means pleasing the senses or mind aesthetically." +
            "<br><br>" +
            "(C) 'elegant' means pleasingly graceful and stylish in appearance or manner." +
            "<br><br>" +
            "(D) 'charming' means very pleasant or attractive.",
        chinese_explanation: "(B) '怪诞的' 一词意味着滑稽地或令人厌恶地丑陋或扭曲。" +
            "<br><br>" +
            "(A) '美丽的' 意味着在美学上愉悦感官或心灵的。" +
            "<br><br>" +
            "(C) '优雅的' 意味着在外观或举止上令人愉快地优雅和时尚的。" +
            "<br><br>" +
            "(D) '迷人的' 意味着非常愉快或吸引人的。"
    },
    {
        id: 8,
        question: "Her patience seemed __________, as she never got frustrated with her students.",
        chinese_question: "她的耐心似乎__________，因为她从不对学生感到沮丧。",
        answers: [
            { option: "A", answer: "limited", chinese_answer: "有限的", chinese_romanization: "yǒuxiàn de" },
            { option: "B", answer: "finite", chinese_answer: "有限的", chinese_romanization: "yǒuxiàn de" },
            { option: "C", answer: "infinite", chinese_answer: "无限的", chinese_romanization: "wúxiàn de" },
            { option: "D", answer: "small", chinese_answer: "小的", chinese_romanization: "xiǎo de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'infinite' means limitless or endless in space, extent, or size; impossible to measure or calculate. Figuratively, it can mean having an unlimited capacity or amount." +
            "<br><br>" +
            "(A) 'limited' means restricted in size, amount, or extent." +
            "<br><br>" +
            "(B) 'finite' means having limits or bounds." +
            "<br><br>" +
            "(D) 'small' means of a size that is less than normal or usual.",
        chinese_explanation: "(C) '无限的'一词意味着在空间、范围或大小上无穷无尽的；无法测量或计算的。比喻地，它可以表示具有无限的能力或数量。" +
            "<br><br>" +
            "(A) '有限的' 意味着在大小、数量或范围上受到限制的。" +
            "<br><br>" +
            "(B) '有限的' 意味着有界限或范围的。" +
            "<br><br>" +
            "(D) '小的' 意味着尺寸小于正常或通常大小的。"

    },
    {
        id: 9,
        question: "The weather forecast was so __________ that it ruined their plans for a weekend picnic.",
        chinese_question: "天气预报如此 __________，以至于破坏了他们周末野餐的计划。",
        answers: [
            { option: "A", answer: "bright", chinese_answer: "明亮的", chinese_romanization: "míngliàng de" },
            { option: "B", answer: "cheerful", chinese_answer: "开心的", chinese_romanization: "kāixīn de" },
            { option: "C", answer: "dismal", chinese_answer: "阴沉的", chinese_romanization: "yīnchén de" },
            { option: "D", answer: "sunny", chinese_answer: "晴朗的", chinese_romanization: "qínglǎng de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'dismal' means depressing; dreary." +
            "<br><br>" +
            "(A) 'bright' means giving out or reflecting a lot of light; shining." +
            "<br><br>" +
            "(B) 'cheerful' means noticeably happy and optimistic." +
            "<br><br>" +
            "(D) 'sunny' means bright with sunlight.",
        chinese_explanation: "(C) '阴沉的' 一词意味着令人沮丧的；阴郁的。" +
            "<br><br>" +
            "(A) '明亮的' 意味着发出或反射大量光线；闪耀的。" +
            "<br><br>" +
            "(B) '开心的' 意味着明显的快乐和乐观。" +
            "<br><br>" +
            "(D) '晴朗的' 意味着阳光明媚的。"
    },
    {
        id: 10,
        question: "The cheap imitation was __________ in quality to the original designer handbag.",
        chinese_question: "这款廉价仿制品在质量上 __________ 于原版设计师手袋。",
        answers: [
            { option: "A", answer: "superior", chinese_answer: "优越", chinese_romanization: "yōuyuè" },
            { option: "B", answer: "equivalent", chinese_answer: "等同", chinese_romanization: "děngtóng" },
            { option: "C", answer: "inferior", chinese_answer: "劣质", chinese_romanization: "lièzhì" },
            { option: "D", answer: "identical", chinese_answer: "相同", chinese_romanization: "xiāngtóng" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'inferior' means lower in quality." +
            "<br><br>" +
            "(A) 'superior' means higher in quality." +
            "<br><br>" +
            "(B) 'equivalent' means equal in value, amount, function, meaning, etc." +
            "<br><br>" +
            "(D) 'identical' means exactly the same.",
        chinese_explanation: "(C) '劣质' 一词意味着质量较低。" +
            "<br><br>" +
            "(A) '优越' 意味着质量较高。" +
            "<br><br>" +
            "(B) '等同' 意味着在价值、数量、功能、意义等方面相等。" +
            "<br><br>" +
            "(D) '相同' 意味着完全相同。"
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
