// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "She felt __________ about the upcoming exam because she hadn't studied enough.",
        chinese_question: "她对即将到来的考试感到 __________，因为她没有足够的时间学习。",
        answers: [
            { option: "A", answer: "apprehensive", chinese_answer: "忧虑的", chinese_romanization: "yōulǜ de" },
            { option: "B", answer: "confident", chinese_answer: "自信的", chinese_romanization: "zìxìn de" },
            { option: "C", answer: "indifferent", chinese_answer: "漠不关心的", chinese_romanization: "mòbù guānxīn de" },
            { option: "D", answer: "relaxed", chinese_answer: "放松的", chinese_romanization: "fàngsōng de" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'apprehensive' means anxious or fearful that something bad or unpleasant will happen." +
            "<br><br>" +
            "(B) 'confident' means feeling or showing confidence in oneself; self-assured." +
            "<br><br>" +
            "(C) 'indifferent' means having no particular interest or sympathy; unconcerned." +
            "<br><br>" +
            "(D) 'relaxed' means free from tension and anxiety; at ease.",
        chinese_explanation: "(A) '忧虑的' 意味着担心或害怕会发生不好的事情。" +
            "<br><br>" +
            "(B) '自信的' 意味着对自己有信心的；自信的。" +
            "<br><br>" +
            "(C) '漠不关心的' 意味着没有特别的兴趣或同情；不关心的。" +
            "<br><br>" +
            "(D) '放松的' 意味着没有紧张和焦虑；放松的。"
    },
    {
        id: 2,
        question: "Her __________ solutions to everyday problems impressed her colleagues and earned her a promotion.",
        chinese_question: "她对日常问题的__________解决方案给同事们留下了深刻印象，并为她赢得了晋升机会。",
        answers: [
            { option: "A", answer: "unoriginal", chinese_answer: "非原创的", chinese_romanization: "fēi yuánchuàng de" },
            { option: "B", answer: "inventive", chinese_answer: "创造性的", chinese_romanization: "chuàngzàoxìng de" },
            { option: "C", answer: "conventional", chinese_answer: "传统的", chinese_romanization: "chuántǒng de" },
            { option: "D", answer: "outdated", chinese_answer: "过时的", chinese_romanization: "guòshí de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'inventive' means having the ability to create or design new things or to think originally." +
            "<br><br>" +
            "(A) 'unoriginal' means not fresh or novel; derived from something else." +
            "<br><br>" +
            "(C) 'conventional' means based on or in accordance with what is generally done or believed." +
            "<br><br>" +
            "(D) 'outdated' means no longer produced or used; out of date.",
        chinese_explanation: "(B) '创造性的'一词意味着具有创造或设计新事物的能力或独创性思维。" +
            "<br><br>" +
            "(A) '非原创的' 意味着不新鲜或新颖；源于其他东西的。" +
            "<br><br>" +
            "(C) '传统的' 意味着基于或符合一般所做或所信的。" +
            "<br><br>" +
            "(D) '过时的' 意味着不再生产或使用；过时的。"
    },
    {
        id: 3,
        question: "He felt __________ during the interview, fumbling with his words and avoiding eye contact.",
        chinese_question: "在面试过程中，他感到 __________，语无伦次并避免眼神接触。",
        answers: [
            { option: "A", answer: "confident", chinese_answer: "自信的", chinese_romanization: "zìxìn de" },
            { option: "B", answer: "graceful", chinese_answer: "优雅的", chinese_romanization: "yōuyǎ de" },
            { option: "C", answer: "awkward", chinese_answer: "尴尬的", chinese_romanization: "gāngà de" },
            { option: "D", answer: "comfortable", chinese_answer: "舒适的", chinese_romanization: "shūshì de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'awkward' means causing or feeling embarrassment or inconvenience." +
            "<br><br>" +
            "(A) 'confident' means feeling or showing confidence in oneself; self-assured." +
            "<br><br>" +
            "(B) 'graceful' means having or showing grace or elegance." +
            "<br><br>" +
            "(D) 'comfortable' means providing physical ease and relaxation.",
        chinese_explanation: "(C) '尴尬的' 一词意味着引起或感到尴尬或不便的。" +
            "<br><br>" +
            "(A) '自信的' 意味着对自己有信心的；自信的。" +
            "<br><br>" +
            "(B) '优雅的' 意味着具有或显示出优雅或高雅。" +
            "<br><br>" +
            "(D) '舒适的' 意味着提供身体上的舒适和放松的。"
    },
    {
        id: 4,
        question: "Her __________ beauty and unique sense of style made her stand out in any crowd.",
        chinese_question: "她 __________ 的美丽和独特的时尚感使她在人群中脱颖而出。",
        answers: [
            { option: "A", answer: "plain", chinese_answer: "平凡", chinese_romanization: "píngfán" },
            { option: "B", answer: "mundane", chinese_answer: "平淡", chinese_romanization: "píngdàn" },
            { option: "C", answer: "exotic", chinese_answer: "异国情调", chinese_romanization: "yìguó qíngdiào" },
            { option: "D", answer: "conventional", chinese_answer: "传统", chinese_romanization: "chuántǒng" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'exotic' means attractive or striking because it is unusual or different." +
            "<br><br>" +
            "(A) 'plain' means not decorated or elaborate; simple or ordinary in character." +
            "<br><br>" +
            "(B) 'mundane' means lacking interest or excitement; dull." +
            "<br><br>" +
            "(D) 'conventional' means based on or in accordance with what is generally done or believed.",
        chinese_explanation: "(C) '异国情调' 意味着因为不寻常或不同而具有吸引力或引人注目。" +
            "<br><br>" +
            "(A) '平凡' 意味着不装饰或不复杂；简单或普通的性格。" +
            "<br><br>" +
            "(B) '平淡' 意味着缺乏兴趣或兴奋；乏味。" +
            "<br><br>" +
            "(D) '传统' 意味着基于或符合通常做的或认为的。"
    },
    {
        id: 5,
        question: "The relief organization focused on providing food and medical care to the __________ children in the affected regions.",
        chinese_question: "救济组织专注于为受影响地区的 __________ 儿童提供食物和医疗护理。",
        answers: [
            { option: "A", answer: "healthy", chinese_answer: "健康的", chinese_romanization: "jiànkāng de" },
            { option: "B", answer: "undernourished", chinese_answer: "营养不良的", chinese_romanization: "yíngyǎng bùliáng de" },
            { option: "C", answer: "well-fed", chinese_answer: "吃得好的", chinese_romanization: "chī dé hǎo de" },
            { option: "D", answer: "nourished", chinese_answer: "营养良好的", chinese_romanization: "yíngyǎng liánghǎo de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'undernourished' means having insufficient food or other substances for good health and condition." +
            "<br><br>" +
            "(A) 'healthy' means in good health." +
            "<br><br>" +
            "(C) 'well-fed' means having plenty of food to eat." +
            "<br><br>" +
            "(D) 'nourished' means provided with the food or other substances necessary for growth, health, and good condition.",
        chinese_explanation: "(B) '营养不良的' 一词意味着没有足够的食物或其他物质以保持良好的健康和状况。" +
            "<br><br>" +
            "(A) '健康的' 意味着身体健康。" +
            "<br><br>" +
            "(C) '吃得好的' 意味着有充足的食物吃。" +
            "<br><br>" +
            "(D) '营养良好的' 意味着提供了生长、健康和良好状态所需的食物或其他物质。"
    },
    {
        id: 6,
        question: "His __________ performance on the piano left the audience in awe, as he played with incredible skill and emotion.",
        chinese_question: "他在钢琴上的 __________ 演奏让观众惊叹不已，他以令人难以置信的技巧和情感演奏。",
        answers: [
            { option: "A", answer: "dazzling", chinese_answer: "耀眼的", chinese_romanization: "yàoyǎn de" },
            { option: "B", answer: "mediocre", chinese_answer: "平庸的", chinese_romanization: "píngyōng de" },
            { option: "C", answer: "average", chinese_answer: "平均的", chinese_romanization: "píngjūn de" },
            { option: "D", answer: "unimpressive", chinese_answer: "不显眼的", chinese_romanization: "bù xiǎnyǎn de" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'dazzling' means extremely impressive or skillful." +
            "<br><br>" +
            "(B) 'mediocre' means of only moderate quality; not very good." +
            "<br><br>" +
            "(C) 'average' means of the usual or ordinary standard." +
            "<br><br>" +
            "(D) 'unimpressive' means not arousing admiration or respect.",
        chinese_explanation: "(A) '耀眼的' 意味着非常令人印象深刻或技巧高超的。" +
            "<br><br>" +
            "(B) '平庸的' 意味着质量一般的；不是很好的。" +
            "<br><br>" +
            "(C) '平均的' 意味着通常或普通标准的。" +
            "<br><br>" +
            "(D) '不显眼的' 意味着没有引起钦佩或尊重的。"
    },
    {
        id: 7,
        question: "Despite their disagreements, they managed to have a __________ conversation, respecting each other's viewpoints.",
        chinese_question: "尽管他们意见不合，他们还是设法进行了 __________ 的对话，尊重彼此的观点。",
        answers: [
            { option: "A", answer: "civil", chinese_answer: "礼貌的", chinese_romanization: "lǐmào de" },
            { option: "B", answer: "hostile", chinese_answer: "敌对的", chinese_romanization: "díduì de" },
            { option: "C", answer: "rude", chinese_answer: "粗鲁的", chinese_romanization: "cūlǔ de" },
            { option: "D", answer: "confrontational", chinese_answer: "对抗的", chinese_romanization: "duìkàng de" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'civil' means courteous and polite." +
            "<br><br>" +
            "(B) 'hostile' means unfriendly; antagonistic." +
            "<br><br>" +
            "(C) 'rude' means offensively impolite or ill-mannered." +
            "<br><br>" +
            "(D) 'confrontational' means tending to deal with situations in an aggressive way.",
        chinese_explanation: "(A) '礼貌的' 意味着有礼貌的和礼貌的。" +
            "<br><br>" +
            "(B) '敌对的' 意味着不友好的；对抗的。" +
            "<br><br>" +
            "(C) '粗鲁的' 意味着冒犯性的不礼貌或没有教养的。" +
            "<br><br>" +
            "(D) '对抗的' 意味着倾向于以攻击性的方式处理情况的。"
    },
    {
        id: 8,
        question: "The company faced __________ conditions in the market, leading to significant financial losses.",
        chinese_question: "公司面临 __________ 的市场条件，导致了严重的财务损失。",
        answers: [
            { option: "A", answer: "favorable", chinese_answer: "有利", chinese_romanization: "yǒulì" },
            { option: "B", answer: "adverse", chinese_answer: "不利", chinese_romanization: "bùlì" },
            { option: "C", answer: "supportive", chinese_answer: "支持", chinese_romanization: "zhīchí" },
            { option: "D", answer: "advantageous", chinese_answer: "有利", chinese_romanization: "yǒulì" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'adverse' means preventing success or development; harmful." +
            "<br><br>" +
            "(A) 'favorable' means expressing approval." +
            "<br><br>" +
            "(C) 'supportive' means providing encouragement or emotional help." +
            "<br><br>" +
            "(D) 'advantageous' means creating favorable circumstances that increase the chances of success.",
        chinese_explanation: "(B) '不利' 意味着阻碍成功或发展；有害的。" +
            "<br><br>" +
            "(A) '有利' 意味着表达赞同。" +
            "<br><br>" +
            "(C) '支持' 意味着提供鼓励或情感帮助。" +
            "<br><br>" +
            "(D) '有利' 意味着创造有利的环境，增加成功的机会。"
    },
    {
        id: 9,
        question: "She has an __________ sense of observation, noticing details that others often miss.",
        chinese_question: "她有 __________ 的观察能力，注意到别人经常忽略的细节。",
        answers: [
            { option: "A", answer: "dull", chinese_answer: "迟钝", chinese_romanization: "chídùn" },
            { option: "B", answer: "weak", chinese_answer: "弱", chinese_romanization: "ruò" },
            { option: "C", answer: "acute", chinese_answer: "敏锐", chinese_romanization: "mǐnruì" },
            { option: "D", answer: "blurred", chinese_answer: "模糊", chinese_romanization: "móhu" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'acute' means having a perceptive understanding or insight." +
            "<br><br>" +
            "(A) 'dull' means lacking interest or excitement." +
            "<br><br>" +
            "(B) 'weak' means lacking the power to perform physically demanding tasks." +
            "<br><br>" +
            "(D) 'blurred' means not clear.",
        chinese_explanation: "(C) '敏锐' 意味着具有敏锐的理解或洞察力。" +
            "<br><br>" +
            "(A) '迟钝' 意味着缺乏兴趣或兴奋。" +
            "<br><br>" +
            "(B) '弱' 意味着缺乏执行体力任务的能力。" +
            "<br><br>" +
            "(D) '模糊' 意味着不清楚。"
    },
    {
        id: 10,
        question: "The villain in the story was portrayed as __________, with no regard for human life or decency.",
        chinese_question: "故事中的反派被描绘成 __________ 的人，完全不顾人命或体面。",
        answers: [
            { option: "A", answer: "noble", chinese_answer: "高尚", chinese_romanization: "gāoshàng" },
            { option: "B", answer: "virtuous", chinese_answer: "有德", chinese_romanization: "yǒu dé" },
            { option: "C", answer: "depraved", chinese_answer: "堕落", chinese_romanization: "duòluò" },
            { option: "D", answer: "honorable", chinese_answer: "荣誉", chinese_romanization: "róngyù" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'depraved' means morally corrupt or wicked." +
            "<br><br>" +
            "(A) 'noble' means having or showing fine personal qualities or high moral principles." +
            "<br><br>" +
            "(B) 'virtuous' means having or showing high moral standards." +
            "<br><br>" +
            "(D) 'honorable' means bringing or worthy of honor.",
        chinese_explanation: "(C) '堕落' 意味着道德腐败或邪恶的。" +
            "<br><br>" +
            "(A) '高尚' 意味着具有或表现出良好个人品质或高尚道德原则。" +
            "<br><br>" +
            "(B) '有德' 意味着具有或显示出高尚的道德标准。" +
            "<br><br>" +
            "(D) '荣誉' 意味着带来或值得尊敬。"
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
