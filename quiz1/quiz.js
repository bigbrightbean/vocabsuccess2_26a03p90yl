// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "He has proven himself to be a __________ leader, guiding the team through difficult times with confidence and skill.",
        chinese_question: "他已经证明自己是一个 __________ 的领导者，以信心和技能引导团队度过困难时期。",
        answers: [
            { option: "A", answer: "capable", chinese_answer: "能干的", chinese_romanization: "nénggàn de" },
            { option: "B", answer: "ineffective", chinese_answer: "无效的", chinese_romanization: "wúxiào de" },
            { option: "C", answer: "hesitant", chinese_answer: "犹豫的", chinese_romanization: "yóuyù de" },
            { option: "D", answer: "unqualified", chinese_answer: "不合格的", chinese_romanization: "bù hégé de" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'capable' means having the ability, fitness, or quality necessary to do or achieve a specified thing." +
            "<br><br>" +
            "(B) 'ineffective' means not producing any significant or desired effect." +
            "<br><br>" +
            "(C) 'hesitant' means tentative, unsure, or slow in acting or speaking." +
            "<br><br>" +
            "(D) 'unqualified' means not officially recognized as a practitioner of a particular profession or activity.",
        chinese_explanation: "(A) '能干的' 意味着具有做或实现某个特定事情所需的能力、素质或品质。" +
            "<br><br>" +
            "(B) '无效的' 意味着没有产生任何显著或期望效果的。" +
            "<br><br>" +
            "(C) '犹豫的' 意味着犹豫不决的，不确定的，行动或说话缓慢的。" +
            "<br><br>" +
            "(D) '不合格的' 意味着没有正式认可为某一特定职业或活动的从业者。"
    },
    {
        id: 2,
        question: "The bakery's window display of freshly baked pastries was so __________ that it drew customers in from the street.",
        chinese_question: "面包店橱窗里新鲜出炉的糕点 __________，吸引了街上的顾客进来。",
        answers: [
            { option: "A", answer: "repellent", chinese_answer: "令人厌恶的", chinese_romanization: "lìngrén yànwù de" },
            { option: "B", answer: "dull", chinese_answer: "无聊的", chinese_romanization: "wúliáo de" },
            { option: "C", answer: "unappealing", chinese_answer: "不吸引人的", chinese_romanization: "bù xīyǐn rén de" },
            { option: "D", answer: "enticing", chinese_answer: "诱人的", chinese_romanization: "yòurén de" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'enticing' means attractive or tempting; alluring." +
            "<br><br>" +
            "(A) 'repellent' means causing disgust or distaste." +
            "<br><br>" +
            "(B) 'dull' means lacking interest or excitement." +
            "<br><br>" +
            "(C) 'unappealing' means not inviting or attractive.",
        chinese_explanation: "(D) '诱人的' 意味着有吸引力或诱惑力的。" +
            "<br><br>" +
            "(A) '令人厌恶的' 意味着引起厌恶或反感的。" +
            "<br><br>" +
            "(B) '无聊的' 意味着缺乏兴趣或兴奋的。" +
            "<br><br>" +
            "(C) '不吸引人的' 意味着不吸引人的。"
    },
    {
        id: 3,
        question: "After hearing the disappointing news, his previously cheerful demeanor became __________, and he spoke in a much quieter tone.",
        chinese_question: "听到令人失望的消息后，他之前愉快的举止变得 __________，说话的语气也安静了许多。",
        answers: [
            { option: "A", answer: "excited", chinese_answer: "兴奋的", chinese_romanization: "xīngfèn de" },
            { option: "B", answer: "energetic", chinese_answer: "精力充沛的", chinese_romanization: "jīnglì chōngpèi de" },
            { option: "C", answer: "boisterous", chinese_answer: "喧闹的", chinese_romanization: "xuānnào de" },
            { option: "D", answer: "subdued", chinese_answer: "压抑的", chinese_romanization: "yāyì de" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'subdued' means quiet and rather reflective or depressed." +
            "<br><br>" +
            "(A) 'excited' means very enthusiastic and eager." +
            "<br><br>" +
            "(B) 'energetic' means showing or involving great activity or vitality." +
            "<br><br>" +
            "(C) 'boisterous' means noisy, energetic, and cheerful; rowdy.",
        chinese_explanation: "(D) '压抑的' 意味着安静且相当反思或沮丧的。" +
            "<br><br>" +
            "(A) '兴奋的' 意味着非常热情和渴望的。" +
            "<br><br>" +
            "(B) '精力充沛的' 意味着表现出或涉及大量活动或活力。" +
            "<br><br>" +
            "(C) '喧闹的' 意味着吵闹、充满活力和愉快的；喧闹的。"
    },
    {
        id: 4,
        question: "The meeting came to an __________ end when the fire alarm went off unexpectedly.",
        chinese_question: "当火警意外响起时，会议__________地结束了。",
        answers: [
            { option: "A", answer: "gradual", chinese_answer: "逐渐的", chinese_romanization: "zhújiàn de" },
            { option: "B", answer: "prolonged", chinese_answer: "延长的", chinese_romanization: "yáncháng de" },
            { option: "C", answer: "abrupt", chinese_answer: "突然的", chinese_romanization: "tūrán de" },
            { option: "D", answer: "extended", chinese_answer: "扩展的", chinese_romanization: "kuòzhǎn de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'abrupt' means sudden and unexpected." +
            "<br><br>" +
            "(A) 'gradual' means taking place or progressing slowly or by degrees." +
            "<br><br>" +
            "(B) 'prolonged' means continuing for a long time or longer than usual; lengthy." +
            "<br><br>" +
            "(D) 'extended' means made larger; enlarged.",
        chinese_explanation: "(C) '突然的'一词意味着突然和意外的。" +
            "<br><br>" +
            "(A) '逐渐的' 意味着缓慢地或逐步发生或进展的。" +
            "<br><br>" +
            "(B) '延长的' 意味着持续很长时间或比平常更长时间的。" +
            "<br><br>" +
            "(D) '扩展的' 意味着变大的；扩大的。"
    },
    {
        id: 5,
        question: "The flight was delayed due to __________ weather conditions that made it unsafe to travel.",
        chinese_question: "由于 __________ 的天气状况，航班延误，因为旅行不安全。",
        answers: [
            { option: "A", answer: "calm", chinese_answer: "平静", chinese_romanization: "píngjìng" },
            { option: "B", answer: "serene", chinese_answer: "宁静", chinese_romanization: "níngjìng" },
            { option: "C", answer: "turbulent", chinese_answer: "动荡", chinese_romanization: "dòngdàng" },
            { option: "D", answer: "tranquil", chinese_answer: "安静", chinese_romanization: "ānjìng" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'turbulent' means characterized by conflict, disorder, or confusion; not stable or calm." +
            "<br><br>" +
            "(A) 'calm' means peaceful, quiet, and without worry." +
            "<br><br>" +
            "(B) 'serene' means calm, peaceful, and untroubled." +
            "<br><br>" +
            "(D) 'tranquil' means free from disturbance; calm.",
        chinese_explanation: "(C) '动荡' 一词意味着以冲突、混乱或混乱为特征；不稳定或不平静。" +
            "<br><br>" +
            "(A) '平静' 意味着平和、安静和没有忧虑。" +
            "<br><br>" +
            "(B) '宁静' 意味着平静、安宁和无忧无虑。" +
            "<br><br>" +
            "(D) '安静' 意味着没有干扰；平静。"
    },
    {
        id: 6,
        question: "The company's __________ attempt to monopolize the market led to a government investigation.",
        chinese_question: "该公司__________的垄断市场的企图导致了政府的调查。",
        answers: [
            { option: "A", answer: "hidden", chinese_answer: "隐藏的", chinese_romanization: "yǐncáng de" },
            { option: "B", answer: "subtle", chinese_answer: "微妙的", chinese_romanization: "wēimiào de" },
            { option: "C", answer: "covert", chinese_answer: "隐蔽的", chinese_romanization: "yǐnbì de" },
            { option: "D", answer: "overt", chinese_answer: "公开的", chinese_romanization: "gōngkāi de" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'overt' means done or shown openly; plainly apparent." +
            "<br><br>" +
            "(A) 'hidden' means kept out of sight; concealed." +
            "<br><br>" +
            "(B) 'subtle' means so delicate or precise as to be difficult to analyze or describe." +
            "<br><br>" +
            "(C) 'covert' means not openly acknowledged or displayed.",
        chinese_explanation: "(D) '公开的'一词意味着公开进行或显示；显而易见的。" +
            "<br><br>" +
            "(A) '隐藏的' 意味着不让看见的；隐藏的。" +
            "<br><br>" +
            "(B) '微妙的' 意味着如此精致或准确，以至于难以分析或描述的。" +
            "<br><br>" +
            "(C) '隐蔽的' 意味着不公开承认或显示的。"
    },
    {
        id: 7,
        question: "His excuse for being late was __________, but his boss remained skeptical.",
        chinese_question: "他迟到的借口是__________的，但他的老板仍然持怀疑态度。",
        answers: [
            { option: "A", answer: "implausible", chinese_answer: "不可信的", chinese_romanization: "bù kěxìn de" },
            { option: "B", answer: "far-fetched", chinese_answer: "牵强的", chinese_romanization: "qiānqiǎng de" },
            { option: "C", answer: "plausible", chinese_answer: "合理的", chinese_romanization: "hélǐ de" },
            { option: "D", answer: "absurd", chinese_answer: "荒谬的", chinese_romanization: "huāngmiù de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'plausible' means seeming reasonable or probable." +
            "<br><br>" +
            "(A) 'implausible' means not seeming reasonable or probable." +
            "<br><br>" +
            "(B) 'far-fetched' means unlikely and unconvincing; implausible." +
            "<br><br>" +
            "(D) 'absurd' means wildly unreasonable, illogical, or inappropriate.",
        chinese_explanation: "(C) '合理的' 意味着看起来合理或可能的。" +
            "<br><br>" +
            "(A) '不可信的' 意味着看起来不合理或不可能的。" +
            "<br><br>" +
            "(B) '牵强的' 意味着不太可能和不可信的；不合情理的。" +
            "<br><br>" +
            "(D) '荒谬的' 意味着极不合理、不合逻辑或不恰当的。"
    },
    {
        id: 8,
        question: "His calm and collected approach was __________ in resolving the conflict peacefully.",
        chinese_question: "他冷静和镇定的态度在和平解决冲突方面非常__________。",
        answers: [
            { option: "A", answer: "ineffective", chinese_answer: "无效的", chinese_romanization: "wúxiào de" },
            { option: "B", answer: "unnecessary", chinese_answer: "不必要的", chinese_romanization: "bù bìyào de" },
            { option: "C", answer: "effective", chinese_answer: "有效的", chinese_romanization: "yǒuxiào de" },
            { option: "D", answer: "redundant", chinese_answer: "多余的", chinese_romanization: "duōyú de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'effective' means successful in producing a desired or intended result." +
            "<br><br>" +
            "(A) 'ineffective' means not producing any significant or desired effect." +
            "<br><br>" +
            "(B) 'unnecessary' means not needed." +
            "<br><br>" +
            "(D) 'redundant' means no longer needed or useful.",
        chinese_explanation: "(C) '有效的'一词意味着成功地产生预期或预期的结果。" +
            "<br><br>" +
            "(A) '无效的' 意味着未能产生任何显著或预期效果。" +
            "<br><br>" +
            "(B) '不必要的' 意味着不需要的。" +
            "<br><br>" +
            "(D) '多余的' 意味着不再需要或有用的。"
    },
    {
        id: 9,
        question: "Water is __________ for all forms of life to survive.",
        chinese_question: "水对所有形式的生命来说都是 __________ 的。",
        answers: [
            { option: "A", answer: "essential", chinese_answer: "必不可少的", chinese_romanization: "bì bù kě shǎo de" },
            { option: "B", answer: "optional", chinese_answer: "可选择的", chinese_romanization: "kě xuǎnzé de" },
            { option: "C", answer: "irrelevant", chinese_answer: "不相关的", chinese_romanization: "bù xiāngguān de" },
            { option: "D", answer: "dispensable", chinese_answer: "可有可无的", chinese_romanization: "kě yǒu kě wú de" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'essential' means absolutely necessary; extremely important." +
            "<br><br>" +
            "(B) 'optional' means available to be chosen but not obligatory." +
            "<br><br>" +
            "(C) 'irrelevant' means not connected with or relevant to something." +
            "<br><br>" +
            "(D) 'dispensable' means able to be replaced or done without.",
        chinese_explanation: "(A) '必不可少的' 意味着绝对必要的；极其重要的。" +
            "<br><br>" +
            "(B) '可选择的' 意味着可以选择但不是强制性的。" +
            "<br><br>" +
            "(C) '不相关的' 意味着与某事无关的。" +
            "<br><br>" +
            "(D) '可有可无的' 意味着可以被替换或不需要的。"
    },
    {
        id: 10,
        question: "The dark clouds and thunder were __________ signs of an approaching storm.",
        chinese_question: "乌云和雷声是暴风雨来临的 __________ 征兆。",
        answers: [
            { option: "A", answer: "pleasant", chinese_answer: "令人愉快的", chinese_romanization: "lìng rén yúkuài de" },
            { option: "B", answer: "ominous", chinese_answer: "不祥的", chinese_romanization: "bùxiáng de" },
            { option: "C", answer: "promising", chinese_answer: "有希望的", chinese_romanization: "yǒu xīwàng de" },
            { option: "D", answer: "clear", chinese_answer: "晴朗的", chinese_romanization: "qínglǎng de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'ominous' means giving the impression that something bad or unpleasant is going to happen; threatening; inauspicious." +
            "<br><br>" +
            "(A) 'pleasant' means giving a sense of happy satisfaction or enjoyment." +
            "<br><br>" +
            "(C) 'promising' means showing signs of future success." +
            "<br><br>" +
            "(D) 'clear' means easy to perceive, understand, or interpret.",
        chinese_explanation: "(B) '不祥的' 一词意味着给人留下坏事或不愉快的事情即将发生的印象；威胁的；不吉利的。" +
            "<br><br>" +
            "(A) '令人愉快的' 意味着给予幸福满足或享受感的。" +
            "<br><br>" +
            "(C) '有希望的' 意味着显示未来成功的迹象。" +
            "<br><br>" +
            "(D) '晴朗的' 意味着容易感知、理解或解释的。"
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
