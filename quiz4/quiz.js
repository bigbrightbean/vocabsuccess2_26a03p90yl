// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "The student's __________ disregard for the rules resulted in immediate disciplinary action.",
        chinese_question: "学生 __________ 地无视规则导致了立即的纪律处分。",
        answers: [
            { option: "A", answer: "blatant", chinese_answer: "公然的", chinese_romanization: "gōngrán de" },
            { option: "B", answer: "subtle", chinese_answer: "微妙的", chinese_romanization: "wēimiào de" },
            { option: "C", answer: "hidden", chinese_answer: "隐藏的", chinese_romanization: "yǐncáng de" },
            { option: "D", answer: "discreet", chinese_answer: "谨慎的", chinese_romanization: "jǐnshèn de" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'blatant' means done openly and unashamedly." +
            "<br><br>" +
            "(B) 'subtle' means delicate or precise as to be difficult to analyze." +
            "<br><br>" +
            "(C) 'hidden' means kept out of sight." +
            "<br><br>" +
            "(D) 'discreet' means careful and circumspect in one's speech or actions.",
        chinese_explanation: "(A) '公然的' 意味着公开而毫不羞耻地进行的。" +
            "<br><br>" +
            "(B) '微妙的' 意味着精细或精确到难以分析的。" +
            "<br><br>" +
            "(C) '隐藏的' 意味着隐藏起来的。" +
            "<br><br>" +
            "(D) '谨慎的' 意味着在言行上小心谨慎的。"
    },
    {
        id: 2,
        question: "The __________ language spoken in the region is Spanish, though many people also speak Portuguese and indigenous languages.",
        chinese_question: "该地区的 __________ 语言是西班牙语，尽管许多人也讲葡萄牙语和本地语言。",
        answers: [
            { option: "A", answer: "minor", chinese_answer: "次要的", chinese_romanization: "cìyào de" },
            { option: "B", answer: "rare", chinese_answer: "稀有的", chinese_romanization: "xīyǒu de" },
            { option: "C", answer: "secondary", chinese_answer: "次要的", chinese_romanization: "cìyào de" },
            { option: "D", answer: "predominant", chinese_answer: "主要的", chinese_romanization: "zhǔyào de" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'predominant' means the strongest or main element." +
            "<br><br>" +
            "(A) 'minor' means lesser in importance, seriousness, or significance." +
            "<br><br>" +
            "(B) 'rare' means not occurring very often." +
            "<br><br>" +
            "(C) 'secondary' means coming after, less important than, or resulting from someone or something else that is primary.",
        chinese_explanation: "(D) '主要的' 意味着最强或最主要的元素。" +
            "<br><br>" +
            "(A) '次要的' 意味着重要性、严重性或意义较小。" +
            "<br><br>" +
            "(B) '稀有的' 意味着不经常发生。" +
            "<br><br>" +
            "(C) '次要的' 意味着排在首位之后的、不如首要重要的，或由首要的某人或某事产生的。"
    },
    {
        id: 3,
        question: "The supplies were __________ to last the team through the entire expedition, ensuring they had enough food and water for the journey.",
        chinese_question: "这些物资 __________，足以让团队度过整个探险，确保他们在旅途中有足够的食物和水。",
        answers: [
            { option: "A", answer: "insufficient", chinese_answer: "不足的", chinese_romanization: "bùzú de" },
            { option: "B", answer: "inadequate", chinese_answer: "不充分的", chinese_romanization: "bù chōngfèn de" },
            { option: "C", answer: "scarce", chinese_answer: "稀缺的", chinese_romanization: "xīquē de" },
            { option: "D", answer: "sufficient", chinese_answer: "足够的", chinese_romanization: "zúgòu de" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'sufficient' means enough; adequate." +
            "<br><br>" +
            "(A) 'insufficient' means not enough; inadequate." +
            "<br><br>" +
            "(B) 'inadequate' means lacking the quality or quantity required; insufficient for a purpose." +
            "<br><br>" +
            "(C) 'scarce' means insufficient for the demand; not abundant.",
        chinese_explanation: "(D) '足够的' 意味着足够的；充足的。" +
            "<br><br>" +
            "(A) '不足的' 意味着不够的；不充分的。" +
            "<br><br>" +
            "(B) '不充分的' 意味着缺乏所需的质量或数量；不足以满足目的的。" +
            "<br><br>" +
            "(C) '稀缺的' 意味着不足以满足需求的；不丰富的。"
    },
    {
        id: 4,
        question: "She gave him an __________ look when he claimed he could run a mile in under four minutes.",
        chinese_question: "当他说他能在四分钟内跑完一英里时，她给了他一个__________的表情。",
        answers: [
            { option: "A", answer: "believing", chinese_answer: "相信的", chinese_romanization: "xiāngxìn de" },
            { option: "B", answer: "incredulous", chinese_answer: "不相信的", chinese_romanization: "bù xiāngxìn de" },
            { option: "C", answer: "trusting", chinese_answer: "信任的", chinese_romanization: "xìnrèn de" },
            { option: "D", answer: "confident", chinese_answer: "自信的", chinese_romanization: "zìxìn de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'incredulous' means unwilling or unable to believe something." +
            "<br><br>" +
            "(A) 'believing' means accepting (something) as true; feeling sure of the truth of." +
            "<br><br>" +
            "(C) 'trusting' means having or showing trust in someone or something." +
            "<br><br>" +
            "(D) 'confident' means feeling or showing confidence in oneself or one's abilities or qualities.",
        chinese_explanation: "(B) '不相信的'一词意味着不愿意或无法相信某事。" +
            "<br><br>" +
            "(A) '相信的' 意味着接受（某事）为真；确定某事的真实性。" +
            "<br><br>" +
            "(C) '信任的' 意味着对某人或某物有或表现出信任。" +
            "<br><br>" +
            "(D) '自信的' 意味着对自己或自己的能力或品质感到或表现出信心。"
    },
    {
        id: 5,
        question: "Despite being in a room full of people, he remained __________, standing by himself in the corner.",
        chinese_question: "尽管在一个满是人的房间里，他仍然__________，独自站在角落里。",
        answers: [
            { option: "A", answer: "aloof", chinese_answer: "冷淡的", chinese_romanization: "lěngdàn de" },
            { option: "B", answer: "engaged", chinese_answer: "参与的", chinese_romanization: "cānyù de" },
            { option: "C", answer: "talkative", chinese_answer: "健谈的", chinese_romanization: "jiàntán de" },
            { option: "D", answer: "friendly", chinese_answer: "友好的", chinese_romanization: "yǒuhǎo de" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'aloof' means not friendly or forthcoming; cool and distant." +
            "<br><br>" +
            "(B) 'engaged' means busy; occupied." +
            "<br><br>" +
            "(C) 'talkative' means fond of or given to talking." +
            "<br><br>" +
            "(D) 'friendly' means kind and pleasant.",
        chinese_explanation: "(A) '冷淡的'一词意味着不友好或不主动；冷淡和疏远。" +
            "<br><br>" +
            "(B) '参与的' 意味着忙碌的；占据的。" +
            "<br><br>" +
            "(C) '健谈的' 意味着喜欢或爱说话的。" +
            "<br><br>" +
            "(D) '友好的' 意味着友善和愉快的。"
    },
    {
        id: 6,
        question: "The __________ reason for their trip was to attend the conference, although they planned to do some sightseeing as well.",
        chinese_question: "他们旅行的__________原因是参加会议，虽然他们也计划观光。",
        answers: [
            { option: "A", answer: "minor", chinese_answer: "次要的", chinese_romanization: "cìyào de" },
            { option: "B", answer: "primary", chinese_answer: "主要的", chinese_romanization: "zhǔyào de" },
            { option: "C", answer: "secondary", chinese_answer: "次要的", chinese_romanization: "cìyào de" },
            { option: "D", answer: "irrelevant", chinese_answer: "无关的", chinese_romanization: "wúguān de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'primary' means of chief importance; principal." +
            "<br><br>" +
            "(A) 'minor' means lesser in importance." +
            "<br><br>" +
            "(C) 'secondary' means coming after, less important." +
            "<br><br>" +
            "(D) 'irrelevant' means not connected with something.",
        chinese_explanation: "(B) '主要的'一词意味着最重要的；主要的。" +
            "<br><br>" +
            "(A) '次要的' 意味着不太重要。" +
            "<br><br>" +
            "(C) '次要的' 意味着次于、不太重要。" +
            "<br><br>" +
            "(D) '无关的' 意味着与某事无关。"
    },
    {
        id: 7,
        question: "The once small town grew into a __________ city with booming businesses and rising living standards.",
        chinese_question: "这个曾经的小镇发展成了一个 __________ 的城市，商业繁荣，生活水平提高。",
        answers: [
            { option: "A", answer: "impoverished", chinese_answer: "贫困的", chinese_romanization: "pínkùn de" },
            { option: "B", answer: "declining", chinese_answer: "衰退的", chinese_romanization: "shuāituì de" },
            { option: "C", answer: "prosperous", chinese_answer: "繁荣的", chinese_romanization: "fánróng de" },
            { option: "D", answer: "struggling", chinese_answer: "奋斗的", chinese_romanization: "fèndòu de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'prosperous' means successful in material terms; flourishing financially." +
            "<br><br>" +
            "(A) 'impoverished' means made poor." +
            "<br><br>" +
            "(B) 'declining' means becoming smaller, fewer, or less; decreasing." +
            "<br><br>" +
            "(D) 'struggling' means striving to achieve or attain something in the face of difficulty or resistance.",
        chinese_explanation: "(C) '繁荣的' 一词意味着在物质方面成功的；财务上繁荣的。" +
            "<br><br>" +
            "(A) '贫困的' 意味着变得贫穷。" +
            "<br><br>" +
            "(B) '衰退的' 意味着变得更小、更少或减少；减少。" +
            "<br><br>" +
            "(D) '奋斗的' 意味着在困难或阻力面前努力实现或获得某物。"
    },
    {
        id: 8,
        question: "His __________ efforts to improve the community earned him the respect of everyone.",
        chinese_question: "他为改善社区所做的 __________ 努力赢得了所有人的尊重。",
        answers: [
            { option: "A", answer: "genuine", chinese_answer: "真诚", chinese_romanization: "zhēnchéng" },
            { option: "B", answer: "superficial", chinese_answer: "表面的", chinese_romanization: "biǎomiàn de" },
            { option: "C", answer: "reluctant", chinese_answer: "不情愿", chinese_romanization: "bù qíngyuàn" },
            { option: "D", answer: "obligatory", chinese_answer: "义务的", chinese_romanization: "yìwù de" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'genuine' means real and sincere." +
            "<br><br>" +
            "(B) 'superficial' means only on the surface, not deep." +
            "<br><br>" +
            "(C) 'reluctant' means unwilling or hesitant." +
            "<br><br>" +
            "(D) 'obligatory' means required or mandatory.",
        chinese_explanation: "(A) '真诚' 意味着真实和真挚。" +
            "<br><br>" +
            "(B) '表面的' 意味着仅在表面上，不深刻。" +
            "<br><br>" +
            "(C) '不情愿' 意味着不愿意或犹豫。" +
            "<br><br>" +
            "(D) '义务的' 意味着必须的或强制的。"
    },
    {
        id: 9,
        question: "He was __________ with the progress his team made on the project, seeing all their hard work pay off.",
        chinese_question: "看到团队的辛勤工作得到了回报，他对项目的进展感到非常__________。",
        answers: [
            { option: "A", answer: "disappointed", chinese_answer: "失望", chinese_romanization: "shīwàng" },
            { option: "B", answer: "bored", chinese_answer: "无聊", chinese_romanization: "wúliáo" },
            { option: "C", answer: "thrilled", chinese_answer: "激动", chinese_romanization: "jīdòng" },
            { option: "D", answer: "indifferent", chinese_answer: "冷漠", chinese_romanization: "lěngmò" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'thrilled' means extremely excited and pleased. Figuratively, it can mean being very satisfied or delighted with an outcome." +
            "<br><br>" +
            "(A) 'disappointed' means sad or displeased because someone or something has failed to fulfill one's hopes or expectations." +
            "<br><br>" +
            "(B) 'bored' means feeling weary and impatient because one is unoccupied or lacks interest in one's current activity." +
            "<br><br>" +
            "(D) 'indifferent' means having no particular interest or sympathy.",
        chinese_explanation: "(C) '激动'一词意味着极度兴奋和高兴。比喻地，它可以表示对结果非常满意或高兴。" +
            "<br><br>" +
            "(A) '失望' 意味着因为某人或某事未能实现自己的希望或期望而感到难过或不满。" +
            "<br><br>" +
            "(B) '无聊' 意味着因为无事可做或对当前活动缺乏兴趣而感到厌倦和不耐烦。" +
            "<br><br>" +
            "(D) '冷漠' 意味着没有特别的兴趣或同情。"
    },
    {
        id: 10,
        question: "She was __________ about keeping her house clean, insisting that everything be spotless.",
        chinese_question: "她对保持房子的整洁非常 __________，坚持要一尘不染。",
        answers: [
            { option: "A", answer: "fastidious", chinese_answer: "挑剔的", chinese_romanization: "tiāotì de" },
            { option: "B", answer: "careless", chinese_answer: "粗心的", chinese_romanization: "cūxīn de" },
            { option: "C", answer: "indifferent", chinese_answer: "冷漠的", chinese_romanization: "lěngmò de" },
            { option: "D", answer: "untidy", chinese_answer: "不整洁的", chinese_romanization: "bù zhěngjié de" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'fastidious' means very attentive to and concerned about accuracy and detail." +
            "<br><br>" +
            "(B) 'careless' means not giving sufficient attention or thought to avoiding harm or errors." +
            "<br><br>" +
            "(C) 'indifferent' means having no particular interest or sympathy." +
            "<br><br>" +
            "(D) 'untidy' means not arranged neatly and in order.",
        chinese_explanation: "(A) '挑剔的' 意味着对准确性和细节非常关注。" +
            "<br><br>" +
            "(B) '粗心的' 意味着没有给予足够的注意或思考以避免伤害或错误的。" +
            "<br><br>" +
            "(C) '冷漠的' 意味着没有特别的兴趣或同情心。" +
            "<br><br>" +
            "(D) '不整洁的' 意味着没有整齐排列的。"
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
