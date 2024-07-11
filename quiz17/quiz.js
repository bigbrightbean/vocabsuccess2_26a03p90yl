// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "The __________ success of the small startup amazed the industry.",
        chinese_question: "这家小型创业公司的 __________ 成功让整个行业感到惊讶。",
        answers: [
            { option: "A", answer: "unexpected", chinese_answer: "意外的", chinese_romanization: "yìwài de" },
            { option: "B", answer: "gradual", chinese_answer: "逐渐的", chinese_romanization: "zhújiàn de" },
            { option: "C", answer: "foreseen", chinese_answer: "预见的", chinese_romanization: "yùjiàn de" },
            { option: "D", answer: "predicted", chinese_answer: "预测的", chinese_romanization: "yùcè de" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'unexpected' metaphorically means surprising and unforeseen." +
            "<br><br>" +
            "(B) 'gradual' means taking place or progressing slowly or by degrees." +
            "<br><br>" +
            "(C) 'foreseen' means be aware of beforehand; predict." +
            "<br><br>" +
            "(D) 'predicted' means say or estimate that (a specified thing) will happen in the future.",
        chinese_explanation: "(A) '意外的' 比喻令人惊讶和未预见的。" +
            "<br><br>" +
            "(B) '逐渐的' 意味着缓慢或逐步发生或进展的。" +
            "<br><br>" +
            "(C) '预见的' 意味着事先知道的；预测的。" +
            "<br><br>" +
            "(D) '预测的' 意味着说或估计某事将在未来发生。"
    },
    {
        id: 2,
        question: "The construction project required a __________ amount of time and resources to complete.",
        chinese_question: "这个建筑项目需要 __________ 的时间和资源才能完成。",
        answers: [
            { option: "A", answer: "negligible", chinese_answer: "微不足道的", chinese_romanization: "wēibùzúdào de" },
            { option: "B", answer: "minor", chinese_answer: "次要的", chinese_romanization: "cìyào de" },
            { option: "C", answer: "considerable", chinese_answer: "相当大的", chinese_romanization: "xiāngdāng dà de" },
            { option: "D", answer: "trivial", chinese_answer: "琐碎的", chinese_romanization: "suǒsuì de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'considerable' means notably large in size, amount, or extent." +
            "<br><br>" +
            "(A) 'negligible' means so small or unimportant as to be not worth considering; insignificant." +
            "<br><br>" +
            "(B) 'minor' means lesser in importance, seriousness, or significance." +
            "<br><br>" +
            "(D) 'trivial' means of little value or importance.",
        chinese_explanation: "(C) '相当大的' 一词意味着在大小、数量或程度上显著的。" +
            "<br><br>" +
            "(A) '微不足道的' 意味着如此小或不重要而不值得考虑的；无关紧要的。" +
            "<br><br>" +
            "(B) '次要的' 意味着在重要性、严重性或意义上较小的。" +
            "<br><br>" +
            "(D) '琐碎的' 意味着价值或重要性很小。"
    },
    {
        id: 3,
       question: "The new smartphones are made from a more __________ material, ensuring they last longer even with heavy use.",
        chinese_question: "新款智能手机采用更 __________ 的材料制成，即使在频繁使用的情况下也能确保使用寿命更长。",
        answers: [
            { option: "A", answer: "fragile", chinese_answer: "脆弱的", chinese_romanization: "cuìruò de" },
            { option: "B", answer: "delicate", chinese_answer: "精细的", chinese_romanization: "jīngxì de" },
            { option: "C", answer: "durable", chinese_answer: "耐用的", chinese_romanization: "nàiyòng de" },
            { option: "D", answer: "temporary", chinese_answer: "暂时的", chinese_romanization: "zànshí de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'durable' means able to withstand wear, pressure, or damage; hard-wearing." +
            "<br><br>" +
            "(A) 'fragile' means (of an object) easily broken or damaged." +
            "<br><br>" +
            "(B) 'delicate' means very fine in texture or structure; of intricate workmanship or quality." +
            "<br><br>" +
            "(D) 'temporary' means lasting for only a limited period of time; not permanent.",
        chinese_explanation: "(C) '耐用的' 一词意味着能够承受磨损、压力或损坏；耐用的。" +
            "<br><br>" +
            "(A) '脆弱的' 意味着（物体）容易破碎或损坏。" +
            "<br><br>" +
            "(B) '精细的' 意味着质地或结构非常精细；制作精良或质量上乘。" +
            "<br><br>" +
            "(D) '暂时的' 意味着仅持续有限时间的；非永久的。"
    },
    {
        id: 4,
        question: "In a __________ attempt to save his company, he invested all his savings into new projects.",
        chinese_question: "在一次 __________ 的尝试中，他将所有积蓄投资到新项目中以挽救公司。",
        answers: [
            { option: "A", answer: "casual", chinese_answer: "随意", chinese_romanization: "suíyì" },
            { option: "B", answer: "desperate", chinese_answer: "绝望", chinese_romanization: "juéwàng" },
            { option: "C", answer: "confident", chinese_answer: "自信", chinese_romanization: "zìxìn" },
            { option: "D", answer: "leisurely", chinese_answer: "悠闲", chinese_romanization: "yōuxián" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'desperate' means feeling, showing, or involving a hopeless sense that a situation is so bad as to be impossible to deal with." +
            "<br><br>" +
            "(A) 'casual' means relaxed and unconcerned." +
            "<br><br>" +
            "(C) 'confident' means feeling or showing certainty about something." +
            "<br><br>" +
            "(D) 'leisurely' means acting or done at leisure; unhurried or relaxed.",
        chinese_explanation: "(B) '绝望' 一词意味着感觉、表现或涉及到一种无望的感觉，认为情况糟糕到无法处理。" +
            "<br><br>" +
            "(A) '随意' 意味着放松和不关心。" +
            "<br><br>" +
            "(C) '自信' 意味着对某事的确定感或表现。" +
            "<br><br>" +
            "(D) '悠闲' 意味着在闲暇时做的；不慌不忙或放松的。"
    },
    {
        id: 5,
        question: "The __________ workload left the employees feeling exhausted and overwhelmed.",
        chinese_question: " __________ 的工作量让员工感到疲惫和不堪重负。",
        answers: [
            { option: "A", answer: "manageable", chinese_answer: "可管理", chinese_romanization: "kě guǎnlǐ" },
            { option: "B", answer: "easy", chinese_answer: "容易", chinese_romanization: "róngyì" },
            { option: "C", answer: "light", chinese_answer: "轻", chinese_romanization: "qīng" },
            { option: "D", answer: "burdensome", chinese_answer: "繁重", chinese_romanization: "fánzhòng" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'burdensome' means difficult to carry out or fulfill; taxing." +
            "<br><br>" +
            "(A) 'manageable' means able to be managed, controlled, or accomplished without great difficulty." +
            "<br><br>" +
            "(B) 'easy' means achieved without great effort." +
            "<br><br>" +
            "(C) 'light' means of little weight or not heavy.",
        chinese_explanation: "(D) '繁重' 意味着难以完成或实现；费力的。" +
            "<br><br>" +
            "(A) '可管理' 意味着能够在不费力的情况下管理、控制或完成的。" +
            "<br><br>" +
            "(B) '容易' 意味着不费力气就能实现的。" +
            "<br><br>" +
            "(C) '轻' 意味着重量轻或不重。"
    },
    {
        id: 6,
        question: "The weather forecast predicted a __________ day, with heavy clouds and no sunshine.",
        chinese_question: "天气预报预测今天会是一个 __________ 的日子，浓云密布，没有阳光。",
        answers: [
            { option: "A", answer: "bleak", chinese_answer: "阴冷的", chinese_romanization: "yīnlěng de" },
            { option: "B", answer: "sunny", chinese_answer: "晴朗的", chinese_romanization: "qínglǎng de" },
            { option: "C", answer: "bright", chinese_answer: "明亮的", chinese_romanization: "míngliàng de" },
            { option: "D", answer: "cheerful", chinese_answer: "愉快的", chinese_romanization: "yúkuài de" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'bleak' means lacking in warmth, life, or kindliness." +
            "<br><br>" +
            "(B) 'sunny' means bright with sunlight." +
            "<br><br>" +
            "(C) 'bright' means giving out or reflecting much light." +
            "<br><br>" +
            "(D) 'cheerful' means noticeably happy and optimistic.",
        chinese_explanation: "(A) '阴冷的' 意味着缺乏温暖、活力或善意的。" +
            "<br><br>" +
            "(B) '晴朗的' 意味着阳光明媚的。" +
            "<br><br>" +
            "(C) '明亮的' 意味着发出或反射大量光线的。" +
            "<br><br>" +
            "(D) '愉快的' 意味着明显地快乐和乐观的。"
    },
    {
        id: 7,
        question: "His __________ achievements in the field of science earned him numerous awards.",
        chinese_question: "他在科学领域的__________成就为他赢得了无数奖项。",
        answers: [
            { option: "A", answer: "unremarkable", chinese_answer: "平凡的", chinese_romanization: "píngfán de" },
            { option: "B", answer: "ordinary", chinese_answer: "普通的", chinese_romanization: "pǔtōng de" },
            { option: "C", answer: "impressive", chinese_answer: "令人印象深刻的", chinese_romanization: "lìng rén yìnxiàng shēnkè de" },
            { option: "D", answer: "dull", chinese_answer: "无聊的", chinese_romanization: "wúliáo de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'impressive' means evoking admiration through size, quality, or skill; grand, imposing, or awesome. Figuratively, it can mean achieving something noteworthy or exceptional." +
            "<br><br>" +
            "(A) 'unremarkable' means not particularly interesting or surprising." +
            "<br><br>" +
            "(B) 'ordinary' means with no special or distinctive features; normal." +
            "<br><br>" +
            "(D) 'dull' means lacking interest or excitement.",
        chinese_explanation: "(C) '令人印象深刻的'一词意味着通过大小、质量或技能引起钦佩的；宏大的、庄严的或令人敬畏的。比喻地，它可以表示实现某些值得注意或非凡的成就。" +
            "<br><br>" +
            "(A) '平凡的' 意味着不特别有趣或令人惊讶的。" +
            "<br><br>" +
            "(B) '普通的' 意味着没有特别或独特的特征；正常的。" +
            "<br><br>" +
            "(D) '无聊的' 意味着缺乏兴趣或兴奋的。"
    },
    {
        id: 8,
        question: "He provided a __________ explanation for his decision, making it clear and understandable.",
        chinese_question: "他提供了一个 __________ 的解释，使其清晰易懂。",
        answers: [
            { option: "A", answer: "rational", chinese_answer: "理性的", chinese_romanization: "lǐxìng de" },
            { option: "B", answer: "emotional", chinese_answer: "情绪化的", chinese_romanization: "qíngxù huà de" },
            { option: "C", answer: "chaotic", chinese_answer: "混乱的", chinese_romanization: "hùnluàn de" },
            { option: "D", answer: "illogical", chinese_answer: "不合逻辑的", chinese_romanization: "bù hé luójí de" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'rational' means based on or in accordance with reason or logic." +
            "<br><br>" +
            "(B) 'emotional' means relating to a person's emotions." +
            "<br><br>" +
            "(C) 'chaotic' means in a state of complete confusion and disorder." +
            "<br><br>" +
            "(D) 'illogical' means lacking sense or clear, sound reasoning.",
        chinese_explanation: "(A) '理性的' 意味着基于或符合理性或逻辑的。" +
            "<br><br>" +
            "(B) '情绪化的' 意味着与人的情绪有关的。" +
            "<br><br>" +
            "(C) '混乱的' 意味着完全混乱和无序的状态。" +
            "<br><br>" +
            "(D) '不合逻辑的' 意味着缺乏意义或明确、合理的推理。"
    },
    {
        id: 9,
        question: "It was __________ that she found her lost cat after days of searching.",
        chinese_question: "经过几天的寻找，她找到丢失的猫真是 __________。",
        answers: [
            { option: "A", answer: "fortunate", chinese_answer: "幸运的", chinese_romanization: "xìngyùn de" },
            { option: "B", answer: "surprising", chinese_answer: "惊讶的", chinese_romanization: "jīngyà de" },
            { option: "C", answer: "predictable", chinese_answer: "可预测的", chinese_romanization: "kě yùcè de" },
            { option: "D", answer: "insignificant", chinese_answer: "无关紧要的", chinese_romanization: "wúguān jǐnyào de" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'fortunate' metaphorically means having unexpected good fortune." +
            "<br><br>" +
            "(B) 'surprising' means causing surprise; unexpected." +
            "<br><br>" +
            "(C) 'predictable' means able to be predicted." +
            "<br><br>" +
            "(D) 'insignificant' means too small or unimportant to be worth consideration.",
        chinese_explanation: "(A) '幸运的' 比喻拥有意想不到的好运。" +
            "<br><br>" +
            "(B) '惊讶的' 意味着引起惊讶的；意想不到的。" +
            "<br><br>" +
            "(C) '可预测的' 意味着可以预测的。" +
            "<br><br>" +
            "(D) '无关紧要的' 意味着太小或不重要而不值得考虑的。"
    },
    {
        id: 10,
        question: "The refugees lived in __________ poverty, with no access to clean water, food, or shelter.",
        chinese_question: "难民们生活在 __________ 的贫困中，没有清洁的水、食物或住所。",
        answers: [
            { option: "A", answer: "moderate", chinese_answer: "适度的", chinese_romanization: "shìdù de" },
            { option: "B", answer: "temporary", chinese_answer: "临时的", chinese_romanization: "línshí de" },
            { option: "C", answer: "manageable", chinese_answer: "可控的", chinese_romanization: "kěkòng de" },
            { option: "D", answer: "abject", chinese_answer: "悲惨的", chinese_romanization: "bēicǎn de" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'abject' means extremely bad, unpleasant, and degrading." +
            "<br><br>" +
            "(A) 'moderate' means average in amount, intensity, quality, or degree." +
            "<br><br>" +
            "(B) 'temporary' means lasting for only a limited period of time; not permanent." +
            "<br><br>" +
            "(C) 'manageable' means able to be controlled or dealt with without difficulty.",
        chinese_explanation: "(D) '悲惨的' 意味着极其糟糕、不愉快和卑微。" +
            "<br><br>" +
            "(A) '适度的' 意味着在数量、强度、质量或程度上为平均。" +
            "<br><br>" +
            "(B) '临时的' 意味着仅持续有限时间的；非永久的。" +
            "<br><br>" +
            "(C) '可控的' 意味着能够被控制或处理而不困难。"
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
