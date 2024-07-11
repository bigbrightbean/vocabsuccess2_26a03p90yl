// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "The __________ of the new business plan was questioned due to the lack of funding and market research.",
        chinese_question: "由于缺乏资金和市场研究，新商业计划的 __________ 受到质疑。",
        answers: [
            { option: "A", answer: "success", chinese_answer: "成功", chinese_romanization: "chénggōng" },
            { option: "B", answer: "popularity", chinese_answer: "受欢迎", chinese_romanization: "shòu huānyíng" },
            { option: "C", answer: "complexity", chinese_answer: "复杂性", chinese_romanization: "fùzáxìng" },
            { option: "D", answer: "viability", chinese_answer: "可行性", chinese_romanization: "kěxíngxìng" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'viability' means the ability to work successfully." +
            "<br><br>" +
            "(A) 'success' means the accomplishment of an aim or purpose." +
            "<br><br>" +
            "(B) 'popularity' means the state of being liked, admired, or supported by many people." +
            "<br><br>" +
            "(C) 'complexity' means the state or quality of being intricate or complicated.",
        chinese_explanation: "(D) '可行性' 意思是成功运作的能力。" +
            "<br><br>" +
            "(A) '成功' 意思是实现目标或目的。" +
            "<br><br>" +
            "(B) '受欢迎' 意思是被很多人喜欢、钦佩或支持的状态。" +
            "<br><br>" +
            "(C) '复杂性' 意思是复杂或错综的状态或质量。"
    },
    {
        id: 2,
        question: "The library became her __________, a place where she could escape into the world of books.",
        chinese_question: "图书馆成了她的 __________，一个她可以逃入书籍世界的地方。",
        answers: [
            { option: "A", answer: "haven", chinese_answer: "避风港", chinese_romanization: "bìfēnggǎng" },
            { option: "B", answer: "prison", chinese_answer: "监狱", chinese_romanization: "jiānyù" },
            { option: "C", answer: "obstacle", chinese_answer: "障碍", chinese_romanization: "zhàng'ài" },
            { option: "D", answer: "burden", chinese_answer: "负担", chinese_romanization: "fùdān" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'haven' metaphorically means a place of safety or refuge." +
            "<br><br>" +
            "(B) 'prison' means a building in which people are legally held as a punishment for crimes they have committed or while awaiting trial." +
            "<br><br>" +
            "(C) 'obstacle' means a thing that blocks one's way or prevents or hinders progress." +
            "<br><br>" +
            "(D) 'burden' means a load, typically a heavy one.",
        chinese_explanation: "(A) '避风港' 比喻一个安全或避难的地方。" +
            "<br><br>" +
            "(B) '监狱' 意味着合法拘留人们以惩罚他们犯下的罪行或等待审判的建筑物。" +
            "<br><br>" +
            "(C) '障碍' 意味着阻挡某人前进或阻碍进步的事物。" +
            "<br><br>" +
            "(D) '负担' 意味着通常是沉重的负荷。"
    },
    {
        id: 3,
        question: "Despite her __________, she always maintained a positive attitude and inspired those around her.",
        chinese_question: "尽管有 __________，她总是保持积极的态度，激励着周围的人。",
        answers: [
            { option: "A", answer: "affliction", chinese_answer: "痛苦", chinese_romanization: "tòngkǔ" },
            { option: "B", answer: "happiness", chinese_answer: "幸福", chinese_romanization: "xìngfú" },
            { option: "C", answer: "joy", chinese_answer: "快乐", chinese_romanization: "kuàilè" },
            { option: "D", answer: "comfort", chinese_answer: "舒适", chinese_romanization: "shūshì" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'affliction' means something that causes pain or suffering." +
            "<br><br>" +
            "(B) 'happiness' means the state of being happy." +
            "<br><br>" +
            "(C) 'joy' means a feeling of great pleasure and happiness." +
            "<br><br>" +
            "(D) 'comfort' means a state of physical ease and freedom from pain or constraint.",
        chinese_explanation: "(A) '痛苦' 意味着引起痛苦或痛苦的事情。" +
            "<br><br>" +
            "(B) '幸福' 意味着幸福的状态。" +
            "<br><br>" +
            "(C) '快乐' 意味着极大的愉快和幸福感。" +
            "<br><br>" +
            "(D) '舒适' 意味着身体舒适的状态，没有痛苦或约束。"
    },
    {
        id: 4,
        question: "The company's technological __________ enabled it to stay ahead of its competitors and lead the market.",
        chinese_question: "公司的技术 __________ 使其能够领先于竞争对手并领导市场。",
        answers: [
            { option: "A", answer: "retreat", chinese_answer: "撤退", chinese_romanization: "chètuì" },
            { option: "B", answer: "stagnation", chinese_answer: "停滞", chinese_romanization: "tíngzhì" },
            { option: "C", answer: "decline", chinese_answer: "衰退", chinese_romanization: "shuāituì" },
            { option: "D", answer: "advancements", chinese_answer: "进步", chinese_romanization: "jìnbù" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'advancements' means a forward or onward movement." + 
            "<br><br>" +
            "(A) 'retreat' means an act of moving back or withdrawing." + 
            "<br><br>" +
            "(B) 'stagnation' means the state of not flowing or moving." + 
            "<br><br>" +
            "(C) 'decline' means a gradual and continuous loss of strength, numbers, quality, or value.",
        chinese_explanation: "(D) '进步' 一词意味着向前或向上的运动。" + 
            "<br><br>" +
            "(A) '撤退' 意味着后退或撤退的行为。" + 
            "<br><br>" +
            "(B) '停滞' 意味着不流动或不移动的状态。" + 
            "<br><br>" +
            "(C) '衰退' 意味着力量、数量、质量或价值的逐渐和持续的损失。"
    },
    {
        id: 5,
        question: "The look of __________ on her face revealed the depth of her grief.",
        chinese_question: "她脸上的__________表情揭示了她内心深处的悲伤。",
        answers: [
            { option: "A", answer: "joy", chinese_answer: "快乐", chinese_romanization: "kuàilè" },
            { option: "B", answer: "comfort", chinese_answer: "舒适", chinese_romanization: "shūshì" },
            { option: "C", answer: "anguish", chinese_answer: "痛苦", chinese_romanization: "tòngkǔ" },
            { option: "D", answer: "pleasure", chinese_answer: "快乐", chinese_romanization: "kuàilè" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'anguish' means severe mental or physical pain or suffering." + 
            "<br><br>" +
            "(A) 'joy' means a feeling of great pleasure and happiness." + 
            "<br><br>" +
            "(B) 'comfort' means a state of physical ease and freedom from pain or constraint." + 
            "<br><br>" +
            "(D) 'pleasure' means a feeling of happy satisfaction and enjoyment.",
        chinese_explanation: "(C) '痛苦' 一词意味着严重的心理或身体痛苦。" + 
            "<br><br>" +
            "(A) '快乐' 意味着一种极大的愉悦和幸福感。" + 
            "<br><br>" +
            "(B) '舒适' 意味着一种身体上的舒适和没有痛苦或约束的状态。" + 
            "<br><br>" +
            "(D) '快乐' 意味着一种愉快的满足和享受感。"
    },
    {
        id: 6,
        question: "In times of trouble, he always turned to his closest __________ for support.",
        chinese_question: "在困难时期，他总是向最亲近的 __________ 寻求支持。",
        answers: [
            { option: "A", answer: "kin", chinese_answer: "亲人", chinese_romanization: "qīnrén" },
            { option: "B", answer: "friends", chinese_answer: "朋友", chinese_romanization: "péngyǒu" },
            { option: "C", answer: "neighbors", chinese_answer: "邻居", chinese_romanization: "línjū" },
            { option: "D", answer: "coworkers", chinese_answer: "同事", chinese_romanization: "tóngshì" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'kin' metaphorically means people who are closely related by blood." + 
            "<br><br>" +
            "(B) 'friends' means people with whom one has a bond of mutual affection, typically one exclusive of sexual or family relations." + 
            "<br><br>" +
            "(C) 'neighbors' means people living near or next door to the speaker or person referred to." + 
            "<br><br>" +
            "(D) 'coworkers' means people with whom one works.",
        chinese_explanation: "(A) '亲人' 比喻血缘关系密切的人。" + 
            "<br><br>" +
            "(B) '朋友' 意味着一个人有相互感情联系的人，通常排除性关系或家庭关系。" + 
            "<br><br>" +
            "(C) '邻居' 意味着住在附近或隔壁的人。" + 
            "<br><br>" +
            "(D) '同事' 意味着一个人一起工作的人。"
    },
    {
        id: 7,
        question: "Her __________ for dealing with stress involves meditation and exercise.",
        chinese_question: "她处理压力的__________包括冥想和锻炼。",
        answers: [
            { option: "A", answer: "method", chinese_answer: "方法", chinese_romanization: "fāngfǎ" },
            { option: "B", answer: "guess", chinese_answer: "猜测", chinese_romanization: "cāicè" },
            { option: "C", answer: "mistake", chinese_answer: "错误", chinese_romanization: "cuòwù" },
            { option: "D", answer: "error", chinese_answer: "失误", chinese_romanization: "shīwù" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'method' means a particular form of procedure for accomplishing or approaching something, especially a systematic or established one. Figuratively, it can mean a personal strategy or way of handling a situation." + 
            "<br><br>" +
            "(B) 'guess' means an estimate or supposition without sufficient information to be sure of being correct." + 
            "<br><br>" +
            "(C) 'mistake' means an action or judgment that is misguided or wrong." + 
            "<br><br>" +
            "(D) 'error' means a mistake.",
        chinese_explanation: "(A) '方法' 一词意味着完成或接近某事的特定程序形式，尤其是系统的或既定的程序形式。比喻地，它可以表示个人处理某种情况的策略或方式。" + 
            "<br><br>" +
            "(B) '猜测' 意味着在没有足够信息来确定正确性的情况下进行估计或假设。" + 
            "<br><br>" +
            "(C) '错误' 意味着误导或错误的行动或判断。" + 
            "<br><br>" +
            "(D) '失误' 意味着错误。"
    },
    {
        id: 8,
        question: "Her refined palate made her a __________ of gourmet cuisine.",
        chinese_question: "她的精细味觉使她成为美食的 __________。",
        answers: [
            { option: "A", answer: "connoisseur", chinese_answer: "鉴赏家", chinese_romanization: "jiànshǎngjiā" },
            { option: "B", answer: "observer", chinese_answer: "观察者", chinese_romanization: "guāncházhě" },
            { option: "C", answer: "skeptic", chinese_answer: "怀疑者", chinese_romanization: "huáiyí zhě" },
            { option: "D", answer: "layman", chinese_answer: "外行", chinese_romanization: "wàiháng" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'connoisseur' metaphorically means someone with expert knowledge or training, especially in the fine arts." +
            "<br><br>" +
            "(B) 'observer' means a person who watches or notices something." +
            "<br><br>" +
            "(C) 'skeptic' means a person inclined to question or doubt accepted opinions." +
            "<br><br>" +
            "(D) 'layman' means a person without professional or specialized knowledge in a particular subject.",
        chinese_explanation: "(A) '鉴赏家' 比喻在某一领域有专家知识或训练的人，特别是在美术方面。" +
            "<br><br>" +
            "(B) '观察者' 意味着观察或注意某事的人。" +
            "<br><br>" +
            "(C) '怀疑者' 意味着倾向于质疑或怀疑被接受意见的人。" +
            "<br><br>" +
            "(D) '外行' 意味着在某一特定学科没有专业知识或专门知识的人。"
    },
    {
        id: 9,
        question: "We apologize for the __________ caused by the delayed flight and appreciate your patience.",
        chinese_question: "我们为航班延误带来的 __________ 深表歉意，并感谢您的耐心。",
        answers: [
            { option: "A", answer: "convenience", chinese_answer: "便利", chinese_romanization: "biànlì" },
            { option: "B", answer: "comfort", chinese_answer: "舒适", chinese_romanization: "shūshì" },
            { option: "C", answer: "inconvenience", chinese_answer: "不便", chinese_romanization: "bùbiàn" },
            { option: "D", answer: "satisfaction", chinese_answer: "满意", chinese_romanization: "mǎnyì" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'inconvenience' means trouble or difficulty caused to one's personal requirements or comfort." +
            "<br><br>" +
            "(A) 'convenience' means the state of being able to proceed with something with little effort or difficulty." +
            "<br><br>" +
            "(B) 'comfort' means a state of physical ease and freedom from pain or constraint." +
            "<br><br>" +
            "(D) 'satisfaction' means fulfillment of one's wishes, expectations, or needs.",
        chinese_explanation: "(C) '不便' 一词意味着给个人要求或舒适带来的麻烦或困难。" +
            "<br><br>" +
            "(A) '便利' 意味着能够以很少的努力或困难进行某事的状态。" +
            "<br><br>" +
            "(B) '舒适' 意味着身体舒适和没有痛苦或约束的状态。" +
            "<br><br>" +
            "(D) '满意' 意味着实现一个人的愿望、期望或需求。"
    },
    {
        id: 10,
        question: "She launched a __________ to improve literacy rates in the community.",
        chinese_question: "她发起了一场提高社区识字率的 __________。",
        answers: [
            { option: "A", answer: "crusade", chinese_answer: "运动", chinese_romanization: "yùndòng" },
            { option: "B", answer: "retreat", chinese_answer: "撤退", chinese_romanization: "chètuì" },
            { option: "C", answer: "decline", chinese_answer: "下降", chinese_romanization: "xiàjiàng" },
            { option: "D", answer: "vacation", chinese_answer: "假期", chinese_romanization: "jiàqī" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'crusade' means a vigorous campaign for political, social, or religious change." +
            "<br><br>" +
            "(B) 'retreat' means an act of moving back or withdrawing." +
            "<br><br>" +
            "(C) 'decline' means a gradual and continuous loss of strength, numbers, quality, or value." +
            "<br><br>" +
            "(D) 'vacation' means an extended period of leisure and recreation, especially one spent away from home or traveling.",
        chinese_explanation: "(A) '运动' 意味着为政治、社会或宗教变革而进行的有力运动。" +
            "<br><br>" +
            "(B) '撤退' 意味着向后移动或撤退的行为。" +
            "<br><br>" +
            "(C) '下降' 意味着力量、数量、质量或价值的逐渐和持续损失。" +
            "<br><br>" +
            "(D) '假期' 意味着特别是在外度过的长时间休闲和娱乐。"
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
