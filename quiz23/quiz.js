// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "Despite the chaos around him, he remained __________, providing a sense of calm to everyone else.",
        chinese_question: "尽管周围一片混乱，他仍然保持 __________，给其他人带来了一种平静的感觉。",
        answers: [
            { option: "A", answer: "unstable", chinese_answer: "不稳定", chinese_romanization: "bù wěndìng" },
            { option: "B", answer: "erratic", chinese_answer: "不规律", chinese_romanization: "bù guīlǜ" },
            { option: "C", answer: "stable", chinese_answer: "稳定", chinese_romanization: "wěndìng" },
            { option: "D", answer: "volatile", chinese_answer: "易变", chinese_romanization: "yìbiàn" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'stable' means not likely to change or fail; firmly established." +
            "<br><br>" +
            "(A) 'unstable' means prone to change, fail, or give way." +
            "<br><br>" +
            "(B) 'erratic' means not even or regular in pattern or movement." +
            "<br><br>" +
            "(D) 'volatile' means liable to change rapidly and unpredictably.",
        chinese_explanation: "(C) '稳定' 一词意味着不太可能改变或失败；牢固建立的。" +
            "<br><br>" +
            "(A) '不稳定' 意味着容易改变、失败或让步。" +
            "<br><br>" +
            "(B) '不规律' 意味着模式或运动不均匀或不规则。" +
            "<br><br>" +
            "(D) '易变' 意味着容易迅速和不可预测地改变。"
    },
    {
        id: 2,
        question: "The author's __________ novel, filled with rich characters and a gripping plot, quickly became a bestseller.",
        chinese_question: "这位作者 __________ 的小说，充满了丰富的角色和引人入胜的情节，很快成为畅销书。",
        answers: [
            { option: "A", answer: "insipid", chinese_answer: "平淡无味", chinese_romanization: "píngdàn wúwèi" },
            { option: "B", answer: "captivating", chinese_answer: "引人入胜", chinese_romanization: "yǐnrénrùshèng" },
            { option: "C", answer: "ambiguous", chinese_answer: "模棱两可", chinese_romanization: "móléngliǎngkě" },
            { option: "D", answer: "convoluted", chinese_answer: "复杂难懂", chinese_romanization: "fùzá nándǒng" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'captivating' means attracting and holding interest or attention." +
            "<br><br>" +
            "(A) 'insipid' means lacking flavor or interest." +
            "<br><br>" +
            "(C) 'ambiguous' means unclear or having multiple meanings." +
            "<br><br>" +
            "(D) 'convoluted' means complex and difficult to follow.",
        chinese_explanation: "(B) '引人入胜' 一词意味着吸引并保持兴趣或注意力。" +
            "<br><br>" +
            "(A) '平淡无味' 意味着缺乏味道或兴趣。" +
            "<br><br>" +
            "(C) '模棱两可' 意味着不明确或有多重含义。" +
            "<br><br>" +
            "(D) '复杂难懂' 意味着复杂且难以理解。"
    },
    {
        id: 3,
        question: "The team was __________ after their victory, celebrating with cheers and high-fives.",
        chinese_question: "团队在胜利后感到 __________，用欢呼和击掌庆祝。",
        answers: [
            { option: "A", answer: "disappointed", chinese_answer: "失望的", chinese_romanization: "shīwàng de" },
            { option: "B", answer: "jubilant", chinese_answer: "欢腾的", chinese_romanization: "huānténg de" },
            { option: "C", answer: "indifferent", chinese_answer: "冷漠的", chinese_romanization: "lěngmò de" },
            { option: "D", answer: "somber", chinese_answer: "阴沉的", chinese_romanization: "yīnchén de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'jubilant' means feeling or expressing great happiness and triumph." +
            "<br><br>" +
            "(A) 'disappointed' means sad or displeased because someone or something has failed to fulfill one's hopes or expectations." +
            "<br><br>" +
            "(C) 'indifferent' means having no particular interest or sympathy; unconcerned." +
            "<br><br>" +
            "(D) 'somber' means dark or dull in color or tone; gloomy.",
        chinese_explanation: "(B) '欢腾的' 意味着感到或表达极大的快乐和胜利。" +
            "<br><br>" +
            "(A) '失望的' 意味着因为某人或某事未能满足自己的希望或期望而感到难过或不满。" +
            "<br><br>" +
            "(C) '冷漠的' 意味着没有特别的兴趣或同情；不关心的。" +
            "<br><br>" +
            "(D) '阴沉的' 意味着颜色或音调暗淡或沉闷；阴郁的。"
    },
    {
        id: 4,
        question: "The new business venture proved to be __________, generating significant profits within the first year of operation.",
        chinese_question: "这项新商业冒险被证明是 __________ 的，在运营的第一年就产生了可观的利润。",
        answers: [
            { option: "A", answer: "unprofitable", chinese_answer: "无利可图的", chinese_romanization: "wúlì kě tú de" },
            { option: "B", answer: "risky", chinese_answer: "有风险的", chinese_romanization: "yǒu fēngxiǎn de" },
            { option: "C", answer: "lucrative", chinese_answer: "有利可图的", chinese_romanization: "yǒulì kě tú de" },
            { option: "D", answer: "unsustainable", chinese_answer: "不可持续的", chinese_romanization: "bùkě chíxù de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'lucrative' means producing a great deal of profit." +
            "<br><br>" +
            "(A) 'unprofitable' means not yielding profit or financial gain." +
            "<br><br>" +
            "(B) 'risky' means full of the possibility of danger, failure, or loss." +
            "<br><br>" +
            "(D) 'unsustainable' means not able to be maintained at the current rate or level.",
        chinese_explanation: "(C) '有利可图的' 意味着产生大量利润。" +
            "<br><br>" +
            "(A) '无利可图的' 意味着没有产生利润或经济收益。" +
            "<br><br>" +
            "(B) '有风险的' 意味着充满危险、失败或损失的可能性。" +
            "<br><br>" +
            "(D) '不可持续的' 意味着无法维持当前速度或水平的。"
    },
    {
        id: 5,
        question: "The __________ nature of the summer storm meant it was over almost as quickly as it had begun.",
        chinese_question: "夏季暴风雨的 __________ 特性意味着它几乎在刚开始时就结束了。",
        answers: [
            { option: "A", answer: "permanent", chinese_answer: "永久的", chinese_romanization: "yǒngjiǔ de" },
            { option: "B", answer: "endless", chinese_answer: "无尽的", chinese_romanization: "wújìn de" },
            { option: "C", answer: "transient", chinese_answer: "短暂的", chinese_romanization: "duǎnzàn de" },
            { option: "D", answer: "lasting", chinese_answer: "持久的", chinese_romanization: "chíjiǔ de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'transient' means lasting only for a short time; impermanent." +
            "<br><br>" +
            "(A) 'permanent' means lasting or intended to last or remain unchanged indefinitely." +
            "<br><br>" +
            "(B) 'endless' means having or seeming to have no end or limit." +
            "<br><br>" +
            "(D) 'lasting' means enduring or able to endure over a long period of time.",
        chinese_explanation: "(C) '短暂的' 一词意味着仅持续很短时间；不永久的。" +
            "<br><br>" +
            "(A) '永久的' 意味着持续或打算无限期地保持不变的。" +
            "<br><br>" +
            "(B) '无尽的' 意味着没有或似乎没有尽头或限制的。" +
            "<br><br>" +
            "(D) '持久的' 意味着经久不衰或能够在长时间内持续的。"
    },
    {
        id: 6,
        question: "The volcano has been __________ for centuries, but scientists warn that it could erupt again.",
        chinese_question: "这座火山已经 __________ 几个世纪了，但科学家警告说它可能会再次爆发。",
        answers: [
            { option: "A", answer: "active", chinese_answer: "活跃的", chinese_romanization: "huóyuè de" },
            { option: "B", answer: "dormant", chinese_answer: "休眠的", chinese_romanization: "xiūmián de" },
            { option: "C", answer: "lively", chinese_answer: "生机勃勃的", chinese_romanization: "shēngjī bóbó de" },
            { option: "D", answer: "bustling", chinese_answer: "繁忙的", chinese_romanization: "fánmáng de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'dormant' means (of an animal or plant) having normal physical functions suspended or slowed down for a period of time; in or as if in a deep sleep." +
            "<br><br>" +
            "(A) 'active' means engaging or ready to engage in physically energetic pursuits." +
            "<br><br>" +
            "(C) 'lively' means full of life and energy; active and outgoing." +
            "<br><br>" +
            "(D) 'bustling' means (of a place) full of activity.",
        chinese_explanation: "(B) '休眠的' 一词意味着（动物或植物）在一段时间内具有正常的生理功能暂停或减慢；如同处于深睡眠中。" +
            "<br><br>" +
            "(A) '活跃的' 意味着参与或准备参与体力充沛的活动。" +
            "<br><br>" +
            "(C) '生机勃勃的' 意味着充满生命和能量的；活跃的和外向的。" +
            "<br><br>" +
            "(D) '繁忙的' 意味着（一个地方）充满活动。"
    },
    {
        id: 7,
        question: "His __________ tone during the meeting offended many of his colleagues, who felt he was talking down to them.",
        chinese_question: "他在会议上的 __________ 语气冒犯了许多同事，他们觉得他在居高临下地说话。",
        answers: [
            { option: "A", answer: "humble", chinese_answer: "谦逊的", chinese_romanization: "qiānxùn de" },
            { option: "B", answer: "respectful", chinese_answer: "尊敬的", chinese_romanization: "zūnjìng de" },
            { option: "C", answer: "condescending", chinese_answer: "居高临下的", chinese_romanization: "jūgāo língxià de" },
            { option: "D", answer: "polite", chinese_answer: "礼貌的", chinese_romanization: "lǐmào de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'condescending' means having or showing a feeling of patronizing superiority." +
            "<br><br>" +
            "(A) 'humble' means having or showing a modest or low estimate of one's own importance." +
            "<br><br>" +
            "(B) 'respectful' means feeling or showing deference and respect." +
            "<br><br>" +
            "(D) 'polite' means having or showing behavior that is respectful and considerate of other people.",
        chinese_explanation: "(C) '居高临下的' 一词意味着有或显示出一种居高临下的优越感。" +
            "<br><br>" +
            "(A) '谦逊的' 意味着有或显示出对自己重要性的低估或低估。" +
            "<br><br>" +
            "(B) '尊敬的' 意味着感到或表示敬意和尊重。" +
            "<br><br>" +
            "(D) '礼貌的' 意味着有或表现出尊重和考虑他人的行为。"
    },
    {
        id: 8,
        question: "His fear of spiders was __________, as they were harmless and much smaller than him.",
        chinese_question: "他对蜘蛛的恐惧是 __________ 的，因为它们是无害的，而且比他小得多。",
        answers: [
            { option: "A", answer: "logical", chinese_answer: "合理", chinese_romanization: "hélǐ" },
            { option: "B", answer: "sensible", chinese_answer: "明智", chinese_romanization: "míngzhì" },
            { option: "C", answer: "rational", chinese_answer: "理性", chinese_romanization: "lǐxìng" },
            { option: "D", answer: "irrational", chinese_answer: "不合理", chinese_romanization: "bù hélǐ" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'irrational' means not logical or reasonable." +
            "<br><br>" +
            "(A) 'logical' means characterized by or capable of clear, sound reasoning." +
            "<br><br>" +
            "(B) 'sensible' means done or chosen in accordance with wisdom or prudence; likely to be of benefit." +
            "<br><br>" +
            "(C) 'rational' means based on or in accordance with reason or logic.",
        chinese_explanation: "(D) '不合理' 意味着不合逻辑或不合理的。" +
            "<br><br>" +
            "(A) '合理' 意味着具有或能够清晰、合理推理的。" +
            "<br><br>" +
            "(B) '明智' 意味着根据智慧或谨慎选择的；可能有益的。" +
            "<br><br>" +
            "(C) '理性' 意味着基于或符合理性或逻辑。"
    },
    {
        id: 9,
        question: "Given the constant delays, it was __________ that the project would not be completed on time.",
        chinese_question: "鉴于不断的延误，项目无法按时完成是 __________ 的。",
        answers: [
            { option: "A", answer: "improbable", chinese_answer: "不可能", chinese_romanization: "bù kěnéng" },
            { option: "B", answer: "inevitable", chinese_answer: "不可避免", chinese_romanization: "bùkě bìmiǎn" },
            { option: "C", answer: "avoidable", chinese_answer: "可避免", chinese_romanization: "kě bìmiǎn" },
            { option: "D", answer: "uncertain", chinese_answer: "不确定", chinese_romanization: "bù quèdìng" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'inevitable' means certain to happen; unavoidable." +
            "<br><br>" +
            "(A) 'improbable' means not likely to be true or to happen." +
            "<br><br>" +
            "(C) 'avoidable' means able to be avoided or prevented." +
            "<br><br>" +
            "(D) 'uncertain' means not able to be relied on; not known or definite.",
        chinese_explanation: "(B) '不可避免' 一词意味着必然发生的；无法避免的。" +
            "<br><br>" +
            "(A) '不可能' 意味着不太可能是真的或发生的。" +
            "<br><br>" +
            "(C) '可避免' 意味着可以避免或防止的。" +
            "<br><br>" +
            "(D) '不确定' 意味着无法依赖的；不确定的。"
    },
    {
        id: 10,
        question: "The scientist realized that his initial hypothesis was __________ and needed to be revised.",
        chinese_question: "科学家意识到他的初始假设是 __________ 的，需要修正。",
        answers: [
            { option: "A", answer: "accurate", chinese_answer: "准确的", chinese_romanization: "zhǔnquè de" },
            { option: "B", answer: "correct", chinese_answer: "正确的", chinese_romanization: "zhèngquè de" },
            { option: "C", answer: "erroneous", chinese_answer: "错误的", chinese_romanization: "cuòwù de" },
            { option: "D", answer: "precise", chinese_answer: "精确的", chinese_romanization: "jīngquè de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'erroneous' means wrong; incorrect." +
            "<br><br>" +
            "(A) 'accurate' means correct in all details; exact." +
            "<br><br>" +
            "(B) 'correct' means free from error; in accordance with fact or truth." +
            "<br><br>" +
            "(D) 'precise' means marked by exactness and accuracy of expression or detail.",
        chinese_explanation: "(C) '错误的' 一词意味着错误的；不正确的。" +
            "<br><br>" +
            "(A) '准确的' 意味着在所有细节上都是正确的；精确的。" +
            "<br><br>" +
            "(B) '正确的' 意味着没有错误；符合事实或真理的。" +
            "<br><br>" +
            "(D) '精确的' 意味着表达或细节的准确性和精确性的标志。"
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
