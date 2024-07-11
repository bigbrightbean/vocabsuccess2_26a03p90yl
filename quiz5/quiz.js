// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "He faced __________ consequences if he failed to meet the project's deadline.",
        chinese_question: "如果他未能按时完成项目，他将面临__________的后果。",
        answers: [
            { option: "A", answer: "optimistic", chinese_answer: "乐观的", chinese_romanization: "lèguān de" },
            { option: "B", answer: "cheerful", chinese_answer: "愉快的", chinese_romanization: "yúkuài de" },
            { option: "C", answer: "dire", chinese_answer: "严重的", chinese_romanization: "yánzhòng de" },
            { option: "D", answer: "mild", chinese_answer: "温和的", chinese_romanization: "wēnhé de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'dire' means extremely serious or urgent. Figuratively, it can mean having very severe or negative outcomes." +
            "<br><br>" +
            "(A) 'optimistic' means hopeful and confident about the future." +
            "<br><br>" +
            "(B) 'cheerful' means noticeably happy and optimistic." +
            "<br><br>" +
            "(D) 'mild' means gentle and not harsh or severe.",
        chinese_explanation: "(C) '严重的'一词意味着非常严重或紧急。比喻地，它可以表示具有非常严重或负面结果。" +
            "<br><br>" +
            "(A) '乐观的' 意味着对未来充满希望和信心。" +
            "<br><br>" +
            "(B) '愉快的' 意味着明显地快乐和乐观。" +
            "<br><br>" +
            "(D) '温和的' 意味着温柔且不严厉或不苛刻的。"
    },
    {
        id: 2,
        question: "Her election to the highest office was a __________ moment for the entire nation.",
        chinese_question: "她当选最高职位是整个国家的__________时刻。",
        answers: [
            { option: "A", answer: "modern", chinese_answer: "现代的", chinese_romanization: "xiàndài de" },
            { option: "B", answer: "historic", chinese_answer: "历史的", chinese_romanization: "lìshǐ de" },
            { option: "C", answer: "new", chinese_answer: "新的", chinese_romanization: "xīn de" },
            { option: "D", answer: "futuristic", chinese_answer: "未来的", chinese_romanization: "wèilái de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'historic' means famous or important in history." +
            "<br><br>" +
            "(A) 'modern' means relating to the present or recent times." +
            "<br><br>" +
            "(C) 'new' means not existing before." +
            "<br><br>" +
            "(D) 'futuristic' means having or involving very modern technology or design.",
        chinese_explanation: "(B) '历史的'一词意味着在历史上著名或重要的。" +
            "<br><br>" +
            "(A) '现代的' 意味着与现在或最近的时代有关的。" +
            "<br><br>" +
            "(C) '新的' 意味着以前不存在的。" +
            "<br><br>" +
            "(D) '未来的' 意味着具有或涉及非常现代的技术或设计的。"
    },
    {
        id: 3,
        question: "Living in a __________ area offers many cultural and social opportunities, but also comes with a higher cost of living.",
        chinese_question: "生活在 __________ 地区提供了许多文化和社交机会，但也伴随着更高的生活成本。",
        answers: [
            { option: "A", answer: "rural", chinese_answer: "乡村的", chinese_romanization: "xiāngcūn de" },
            { option: "B", answer: "suburban", chinese_answer: "郊区的", chinese_romanization: "jiāoqū de" },
            { option: "C", answer: "metropolitan", chinese_answer: "大城市的", chinese_romanization: "dà chéngshì de" },
            { option: "D", answer: "remote", chinese_answer: "偏远的", chinese_romanization: "piānyuǎn de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'metropolitan' means relating to a large city." +
            "<br><br>" +
            "(A) 'rural' means in, relating to, or characteristic of the countryside rather than the town." +
            "<br><br>" +
            "(B) 'suburban' means of or characteristic of a suburb." +
            "<br><br>" +
            "(D) 'remote' means situated far from the main centers of population; distant.",
        chinese_explanation: "(C) '大城市的' 一词意味着与大城市有关。" +
            "<br><br>" +
            "(A) '乡村的' 意味着与乡村而不是城镇相关的。" +
            "<br><br>" +
            "(B) '郊区的' 意味着郊区的或具有郊区特征的。" +
            "<br><br>" +
            "(D) '偏远的' 意味着远离人口中心的；遥远的。"
    },
    {
        id: 4,
        question: "The hikers had to turn back when they encountered an __________ path that was blocked by fallen trees.",
        chinese_question: "当徒步旅行者遇到被倒下的树木挡住的 __________ 小路时，他们不得不折返。",
        answers: [
            { option: "A", answer: "easy", chinese_answer: "容易的", chinese_romanization: "róngyì de" },
            { option: "B", answer: "impassable", chinese_answer: "不可通行的", chinese_romanization: "bùkě tōngxíng de" },
            { option: "C", answer: "navigable", chinese_answer: "可航行的", chinese_romanization: "kě hángxíng de" },
            { option: "D", answer: "clear", chinese_answer: "清晰的", chinese_romanization: "qīngxī de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'impassable' means impossible to travel along or over." +
            "<br><br>" +
            "(A) 'easy' means achieved without great effort; presenting few difficulties." +
            "<br><br>" +
            "(C) 'navigable' means (of a waterway or sea) able to be sailed on by ships or boats." +
            "<br><br>" +
            "(D) 'clear' means easy to perceive, understand, or interpret.",
        chinese_explanation: "(B) '不可通行的' 一词意味着无法沿着或穿过旅行的。" +
            "<br><br>" +
            "(A) '容易的' 意味着无需巨大努力就能实现的；呈现很少困难的。" +
            "<br><br>" +
            "(C) '可航行的' 意味着（水道或海洋）能够由船只或船航行的。" +
            "<br><br>" +
            "(D) '清晰的' 意味着容易感知、理解或解释的。"
    },
    {
        id: 5,
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
        id: 6,
        question: "His __________ behavior, often acting on impulse without considering the consequences, caused many problems.",
        chinese_question: "他的 __________ 行为，经常不考虑后果地冲动行事，导致了许多问题。",
        answers: [
            { option: "A", answer: "cautious", chinese_answer: "谨慎", chinese_romanization: "jǐnshèn" },
            { option: "B", answer: "thoughtful", chinese_answer: "周到", chinese_romanization: "zhōudào" },
            { option: "C", answer: "impetuous", chinese_answer: "冲动", chinese_romanization: "chōngdòng" },
            { option: "D", answer: "calculated", chinese_answer: "计算", chinese_romanization: "jìsuàn" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'impetuous' means acting or done quickly and without thought or care." +
            "<br><br>" +
            "(A) 'cautious' means careful to avoid potential problems or dangers." +
            "<br><br>" +
            "(B) 'thoughtful' means showing consideration for the needs of other people." +
            "<br><br>" +
            "(D) 'calculated' means done with full awareness of the likely consequences.",
        chinese_explanation: "(C) '冲动' 一词意味着快速且不经思考或关心地行动或完成。" +
            "<br><br>" +
            "(A) '谨慎' 意味着小心避免潜在的问题或危险。" +
            "<br><br>" +
            "(B) '周到' 意味着考虑到他人的需求。" +
            "<br><br>" +
            "(D) '计算' 意味着充分意识到可能的后果。"
    },
    {
        id: 7,
     question: "Their plans for the weekend were __________, as they were unsure about the weather and kept options open.",
        chinese_question: "他们的周末计划是 __________ 的，因为他们不确定天气情况，保持了开放的选择。",
        answers: [
            { option: "A", answer: "certain", chinese_answer: "确定", chinese_romanization: "quèdìng" },
            { option: "B", answer: "tentative", chinese_answer: "暂定", chinese_romanization: "zàndìng" },
            { option: "C", answer: "fixed", chinese_answer: "固定", chinese_romanization: "gùdìng" },
            { option: "D", answer: "definite", chinese_answer: "明确", chinese_romanization: "míngquè" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'tentative' means not certain or fixed; provisional." +
            "<br><br>" +
            "(A) 'certain' means known for sure; established beyond doubt." +
            "<br><br>" +
            "(C) 'fixed' means fastened securely in position." +
            "<br><br>" +
            "(D) 'definite' means clearly stated or decided; not vague or doubtful.",
        chinese_explanation: "(B) '暂定' 一词意味着不确定或固定；临时的。" +
            "<br><br>" +
            "(A) '确定' 意味着确定无疑；超越怀疑。" +
            "<br><br>" +
            "(C) '固定' 意味着牢固地固定在位置上。" +
            "<br><br>" +
            "(D) '明确' 意味着清晰陈述或决定；不含糊或怀疑。"
    },
    {
        id: 8,
        question: "The problem was not just a one-time issue but a __________ challenge that required constant attention.",
        chinese_question: "这个问题不仅仅是一次性的问题，而是一个需要不断关注的 __________ 挑战。",
        answers: [
            { option: "A", answer: "unique", chinese_answer: "独特", chinese_romanization: "dútè" },
            { option: "B", answer: "temporary", chinese_answer: "临时", chinese_romanization: "línshí" },
            { option: "C", answer: "recurring", chinese_answer: "反复出现", chinese_romanization: "fǎnfù chūxiàn" },
            { option: "D", answer: "sporadic", chinese_answer: "零星", chinese_romanization: "língxīng" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'recurring' means occurring again periodically or repeatedly." +
            "<br><br>" +
            "(A) 'unique' means being the only one of its kind." +
            "<br><br>" +
            "(B) 'temporary' means lasting for a limited period of time." +
            "<br><br>" +
            "(D) 'sporadic' means occurring at irregular intervals.",
        chinese_explanation: "(C) '反复出现' 一词意味着周期性或重复发生的。" +
            "<br><br>" +
            "(A) '独特' 意味着独一无二的。" +
            "<br><br>" +
            "(B) '临时' 意味着持续时间有限的。" +
            "<br><br>" +
            "(D) '零星' 意味着不规则发生的。"
    },
    {
        id: 9,
        question: "She looked __________ when she found out the lottery results, struggling to accept that she had actually won such a huge prize.",
        chinese_question: "当她得知彩票结果时，她看起来很 __________，难以接受她竟然赢得了如此巨大的奖品。",
        answers: [
            { option: "A", answer: "incredulous", chinese_answer: "怀疑的", chinese_romanization: "huáiyí de" },
            { option: "B", answer: "convinced", chinese_answer: "确信的", chinese_romanization: "quèxìn de" },
            { option: "C", answer: "trusting", chinese_answer: "信任的", chinese_romanization: "xìnrèn de" },
            { option: "D", answer: "certain", chinese_answer: "确定的", chinese_romanization: "quédìng de" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'incredulous' means unwilling or unable to believe something." +
            "<br><br>" +
            "(B) 'convinced' means completely certain about something." +
            "<br><br>" +
            "(C) 'trusting' means having a tendency to believe that people are honest or sincere." +
            "<br><br>" +
            "(D) 'certain' means known for sure; established beyond doubt.",
        chinese_explanation: "(A) '怀疑的' 意味着不愿意或无法相信某事。" +
            "<br><br>" +
            "(B) '确信的' 意味着对某事完全确定的。" +
            "<br><br>" +
            "(C) '信任的' 意味着倾向于相信人是诚实或真诚的。" +
            "<br><br>" +
            "(D) '确定的' 意味着确定无疑的。"
    },
    {
        id: 10,
        question: "His __________ behavior at the party annoyed everyone, as he kept interrupting conversations and making loud jokes.",
        chinese_question: "他在聚会上的 __________ 行为惹恼了所有人，因为他不断打断对话和大声开玩笑。",
        answers: [
            { option: "A", answer: "pleasant", chinese_answer: "愉快", chinese_romanization: "yúkuài" },
            { option: "B", answer: "courteous", chinese_answer: "有礼貌", chinese_romanization: "yǒu lǐmào" },
            { option: "C", answer: "obnoxious", chinese_answer: "讨厌", chinese_romanization: "tǎoyàn" },
            { option: "D", answer: "charming", chinese_answer: "迷人", chinese_romanization: "mírén" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'obnoxious' means extremely unpleasant." +
            "<br><br>" +
            "(A) 'pleasant' means giving a sense of happy satisfaction or enjoyment." +
            "<br><br>" +
            "(B) 'courteous' means polite, respectful, or considerate in manner." +
            "<br><br>" +
            "(D) 'charming' means very pleasant or attractive.",
        chinese_explanation: "(C) '讨厌' 一词意味着极其不愉快。" +
            "<br><br>" +
            "(A) '愉快' 意味着给人一种快乐的满足感或享受感。" +
            "<br><br>" +
            "(B) '有礼貌' 意味着礼貌、尊重或体贴的方式。" +
            "<br><br>" +
            "(D) '迷人' 意味着非常愉快或有吸引力。"
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
