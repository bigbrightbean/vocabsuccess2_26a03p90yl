// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "She was an __________ supporter of the local animal shelter, volunteering every weekend.",
        chinese_question: "她是当地动物收容所的 __________ 支持者，每个周末都去做义工。",
        answers: [
            { option: "A", answer: "indifferent", chinese_answer: "冷漠的", chinese_romanization: "lěngmò de" },
            { option: "B", answer: "reluctant", chinese_answer: "勉强的", chinese_romanization: "miǎnqiáng de" },
            { option: "C", answer: "apathetic", chinese_answer: "无动于衷的", chinese_romanization: "wúdòngyúzhōng de" },
            { option: "D", answer: "ardent", chinese_answer: "热心的", chinese_romanization: "rèxīn de" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'ardent' means enthusiastic or passionate." +
            "<br><br>" +
            "(A) 'indifferent' means having no particular interest or sympathy." +
            "<br><br>" +
            "(B) 'reluctant' means unwilling and hesitant." +
            "<br><br>" +
            "(C) 'apathetic' means showing or feeling no interest, enthusiasm, or concern.",
        chinese_explanation: "(D) '热心的' 意味着热情或充满激情的。" +
            "<br><br>" +
            "(A) '冷漠的' 意味着没有特别的兴趣或同情心。" +
            "<br><br>" +
            "(B) '勉强的' 意味着不情愿和犹豫的。" +
            "<br><br>" +
            "(C) '无动于衷的' 意味着表现或感到没有兴趣、热情或关心的。"
    },
    {
        id: 2,
        question: "He experienced __________ pain after breaking his leg in the accident.",
        chinese_question: "事故中他腿骨折后经历了 __________ 的疼痛。",
        answers: [
            { option: "A", answer: "excruciating", chinese_answer: "极度的", chinese_romanization: "jídù de" },
            { option: "B", answer: "mild", chinese_answer: "轻微的", chinese_romanization: "qīngwēi de" },
            { option: "C", answer: "tolerable", chinese_answer: "可忍受的", chinese_romanization: "kě rěnshòu de" },
            { option: "D", answer: "slight", chinese_answer: "轻微的", chinese_romanization: "qīngwēi de" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'excruciating' means intensely painful." +
            "<br><br>" +
            "(B) 'mild' means not severe, serious, or harsh." +
            "<br><br>" +
            "(C) 'tolerable' means able to be endured." +
            "<br><br>" +
            "(D) 'slight' means small in degree; inconsiderable.",
        chinese_explanation: "(A) '极度的' 意味着剧烈的疼痛。" +
            "<br><br>" +
            "(B) '轻微的' 意味着不严重、严厉或苛刻的。" +
            "<br><br>" +
            "(C) '可忍受的' 意味着能够忍受的。" +
            "<br><br>" +
            "(D) '轻微的' 意味着程度小的；微不足道的。"
    },
    {
        id: 3,
        question: "The __________ of the diamond was unmatched, catching everyone's eye as it sparkled under the light.",
        chinese_question: "钻石的 __________ 无与伦比，在光线下闪烁，吸引了所有人的目光。",
        answers: [
            { option: "A", answer: "dullness", chinese_answer: "暗淡", chinese_romanization: "àndàn" },
            { option: "B", answer: "brilliance", chinese_answer: "光辉", chinese_romanization: "guānghuī" },
            { option: "C", answer: "mediocrity", chinese_answer: "平庸", chinese_romanization: "píngyōng" },
            { option: "D", answer: "darkness", chinese_answer: "黑暗", chinese_romanization: "hēi'àn" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'brilliance' means intense brightness of light or exceptional talent or intelligence." +
            "<br><br>" +
            "(A) 'dullness' means lacking brightness, vividness, or sheen." +
            "<br><br>" +
            "(C) 'mediocrity' means the quality of being average or ordinary." +
            "<br><br>" +
            "(D) 'darkness' means the partial or total absence of light.",
        chinese_explanation: "(B) '光辉' 一词意味着光的强烈亮度或非凡的才华或智力。" +
            "<br><br>" +
            "(A) '暗淡' 意味着缺乏亮度、鲜艳度或光泽。" +
            "<br><br>" +
            "(C) '平庸' 意味着普通或平凡的质量。" +
            "<br><br>" +
            "(D) '黑暗' 意味着部分或完全缺乏光线。"
    },
    {
        id: 4,
        question: "The __________ aristocrat looked down on the villagers, believing himself to be superior.",
        chinese_question: "那位 __________ 的贵族看不起村民，认为自己高人一等。",
        answers: [
            { option: "A", answer: "humble", chinese_answer: "谦虚的", chinese_romanization: "qiānxū de" },
            { option: "B", answer: "haughty", chinese_answer: "傲慢的", chinese_romanization: "àomàn de" },
            { option: "C", answer: "modest", chinese_answer: "谦逊的", chinese_romanization: "qiānxùn de" },
            { option: "D", answer: "respectful", chinese_answer: "尊敬的", chinese_romanization: "zūnjìng de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'haughty' means arrogantly superior and disdainful." +
            "<br><br>" +
            "(A) 'humble' means having or showing a modest or low estimate of one's importance." +
            "<br><br>" +
            "(C) 'modest' means unassuming in the estimation of one's abilities or achievements." +
            "<br><br>" +
            "(D) 'respectful' means feeling or showing deference and respect.",
        chinese_explanation: "(B) '傲慢的' 一词意味着傲慢地认为自己优越且轻蔑的。" +
            "<br><br>" +
            "(A) '谦虚的' 意味着对自己重要性的适度或低估的表现。" +
            "<br><br>" +
            "(C) '谦逊的' 意味着对自己能力或成就的评价不高。" +
            "<br><br>" +
            "(D) '尊敬的' 意味着感到或表现出敬意。"
    },
    {
        id: 5,
        question: "It is __________ to address the issue before it escalates.",
        chinese_question: "在问题升级之前解决它是 __________ 的。",
        answers: [
            { option: "A", answer: "critical", chinese_answer: "关键的", chinese_romanization: "guānjiàn de" },
            { option: "B", answer: "trivial", chinese_answer: "微不足道的", chinese_romanization: "wēi bù zú dào de" },
            { option: "C", answer: "optional", chinese_answer: "可选择的", chinese_romanization: "kě xuǎnzé de" },
            { option: "D", answer: "irrelevant", chinese_answer: "不相关的", chinese_romanization: "bù xiāngguān de" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'critical' means of decisive importance with regard to the outcome of a situation." +
            "<br><br>" +
            "(B) 'trivial' means of little value or importance." +
            "<br><br>" +
            "(C) 'optional' means available to be chosen but not obligatory." +
            "<br><br>" +
            "(D) 'irrelevant' means not connected with or relevant to something.",
        chinese_explanation: "(A) '关键的' 意味着对情况结果至关重要的。" +
            "<br><br>" +
            "(B) '微不足道的' 意味着价值或重要性很小的。" +
            "<br><br>" +
            "(C) '可选择的' 意味着可以选择但不是强制性的。" +
            "<br><br>" +
            "(D) '不相关的' 意味着与某事无关的。"
    },
    {
        id: 6,
        question: "The need to socialize is __________ in human nature, as people naturally seek out connections with others.",
        chinese_question: "社交的需求是人类天性中 __________ 的，因为人们自然会寻求与他人的联系。",
        answers: [
            { option: "A", answer: "learned", chinese_answer: "学到的", chinese_romanization: "xué dào de" },
            { option: "B", answer: "inherent", chinese_answer: "固有的", chinese_romanization: "gùyǒu de" },
            { option: "C", answer: "acquired", chinese_answer: "获得的", chinese_romanization: "huòdé de" },
            { option: "D", answer: "unnatural", chinese_answer: "不自然的", chinese_romanization: "bù zìrán de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'inherent' means existing in something as a permanent, essential, or characteristic attribute." +
            "<br><br>" +
            "(A) 'learned' means acquired knowledge or skills through study or experience." +
            "<br><br>" +
            "(C) 'acquired' means developed or obtained for oneself, often after a specific process." +
            "<br><br>" +
            "(D) 'unnatural' means contrary to the ordinary course of nature; abnormal.",
        chinese_explanation: "(B) '固有的' 一词意味着作为某物的永久性、本质性或特征属性存在的。" +
            "<br><br>" +
            "(A) '学到的' 意味着通过学习或经验获得的知识或技能。" +
            "<br><br>" +
            "(C) '获得的' 意味着为自己开发或获得的，通常经过特定过程后。" +
            "<br><br>" +
            "(D) '不自然的' 意味着与自然的普通过程相反的；反常的。"
    },
    {
        id: 7,
        question: "The experiment was designed to test a __________ scenario, providing insights into what could happen under certain conditions.",
        chinese_question: "这个实验旨在测试一个 __________ 情景，提供关于在某些条件下可能发生的事情的见解。",
        answers: [
            { option: "A", answer: "actual", chinese_answer: "实际的", chinese_romanization: "shíjì de" },
            { option: "B", answer: "historical", chinese_answer: "历史的", chinese_romanization: "lìshǐ de" },
            { option: "C", answer: "hypothetical", chinese_answer: "假设的", chinese_romanization: "jiǎshè de" },
            { option: "D", answer: "factual", chinese_answer: "事实的", chinese_romanization: "shìshí de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'hypothetical' means involving or based on a suggested idea or theory; imagined as a possibility." +
            "<br><br>" +
            "(A) 'actual' means existing in fact; real." +
            "<br><br>" +
            "(B) 'historical' means of or concerning history or past events." +
            "<br><br>" +
            "(D) 'factual' means concerned with what is actually the case.",
        chinese_explanation: "(C) '假设的' 一词意味着涉及或基于建议的想法或理论；想象的可能性。" +
            "<br><br>" +
            "(A) '实际的' 意味着存在于事实中；真实的。" +
            "<br><br>" +
            "(B) '历史的' 意味着关于历史或过去事件的。" +
            "<br><br>" +
            "(D) '事实的' 意味着与实际情况有关。"
    },
    {
        id: 8,
        question: "The host's __________ greeting made everyone feel instantly welcome and at ease.",
        chinese_question: "主人的 __________ 问候让每个人都感到立刻受到欢迎和自在。",
        answers: [
            { option: "A", answer: "hostile", chinese_answer: "敌对的", chinese_romanization: "díduì de" },
            { option: "B", answer: "cordial", chinese_answer: "热情的", chinese_romanization: "rèqíng de" },
            { option: "C", answer: "indifferent", chinese_answer: "冷漠的", chinese_romanization: "lěngmò de" },
            { option: "D", answer: "aloof", chinese_answer: "疏远的", chinese_romanization: "shūyuǎn de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'cordial' means warm and friendly." +
            "<br><br>" +
            "(A) 'hostile' means unfriendly; antagonistic." +
            "<br><br>" +
            "(C) 'indifferent' means having no particular interest or sympathy; unconcerned." +
            "<br><br>" +
            "(D) 'aloof' means not friendly or forthcoming; cool and distant.",
        chinese_explanation: "(B) '热情的' 一词意味着温暖和友好的。" +
            "<br><br>" +
            "(A) '敌对的' 意味着不友好的；敌对的。" +
            "<br><br>" +
            "(C) '冷漠的' 意味着没有特别的兴趣或同情；不关心的。" +
            "<br><br>" +
            "(D) '疏远的' 意味着不友好或不乐于接近的；冷漠的。"
    },
    {
        id: 9,
        question: "His __________ behavior made it difficult to trust him; he often told lies to get what he wanted.",
        chinese_question: "他的 __________ 行为使人难以信任他；他经常撒谎以获得自己想要的东西。",
        answers: [
            { option: "A", answer: "honest", chinese_answer: "诚实", chinese_romanization: "chéngshí" },
            { option: "B", answer: "deceitful", chinese_answer: "欺骗", chinese_romanization: "qīpiàn" },
            { option: "C", answer: "reliable", chinese_answer: "可靠", chinese_romanization: "kěkào" },
            { option: "D", answer: "sincere", chinese_answer: "真诚", chinese_romanization: "zhēnchéng" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'deceitful' means guilty of or involving deceit; deceiving or misleading others." +
            "<br><br>" +
            "(A) 'honest' means free of deceit; truthful and sincere." +
            "<br><br>" +
            "(C) 'reliable' means consistently good in quality or performance; able to be trusted." +
            "<br><br>" +
            "(D) 'sincere' means free from pretense or deceit; proceeding from genuine feelings.",
        chinese_explanation: "(B) '欺骗' 一词意味着有罪或涉及欺骗；欺骗或误导他人。" +
            "<br><br>" +
            "(A) '诚实' 意味着没有欺骗；真实和真诚。" +
            "<br><br>" +
            "(C) '可靠' 意味着质量或表现始终如一；值得信赖。" +
            "<br><br>" +
            "(D) '真诚' 意味着没有虚伪或欺骗；出于真实的感情。"
    },
    {
        id: 10,
        question: "The doctor stressed that it was __________ to seek medical attention immediately to avoid serious complications.",
        chinese_question: "医生强调，立即寻求医疗帮助是 __________ 的，以避免严重的并发症。",
        answers: [
            { option: "A", answer: "optional", chinese_answer: "可选", chinese_romanization: "kěxuǎn" },
            { option: "B", answer: "trivial", chinese_answer: "琐碎", chinese_romanization: "suǒsuì" },
            { option: "C", answer: "urgent", chinese_answer: "紧急", chinese_romanization: "jǐnjí" },
            { option: "D", answer: "inconsequential", chinese_answer: "无关紧要", chinese_romanization: "wúguān jǐnyào" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'urgent' means requiring immediate action or attention." +
            "<br><br>" +
            "(A) 'optional' means available to be chosen but not obligatory." +
            "<br><br>" +
            "(B) 'trivial' means of little value or importance." +
            "<br><br>" +
            "(D) 'inconsequential' means not important or significant.",
        chinese_explanation: "(C) '紧急' 一词意味着需要立即行动或注意。" +
            "<br><br>" +
            "(A) '可选' 意味着可选择但不强制的。" +
            "<br><br>" +
            "(B) '琐碎' 意味着价值或重要性很小。" +
            "<br><br>" +
            "(D) '无关紧要' 意味着不重要或不显著。"
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
