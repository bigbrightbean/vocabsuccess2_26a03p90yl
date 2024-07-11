// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "The government launched a new __________ to improve public transportation in the city.",
        chinese_question: "政府启动了一项新的 __________，以改善城市公共交通。",
        answers: [
            { option: "A", answer: "plot", chinese_answer: "阴谋", chinese_romanization: "yīnmóu" },
            { option: "B", answer: "scheme", chinese_answer: "计划", chinese_romanization: "jìhuà" },
            { option: "C", answer: "accident", chinese_answer: "事故", chinese_romanization: "shìgù" },
            { option: "D", answer: "issue", chinese_answer: "问题", chinese_romanization: "wèntí" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'scheme' means a large-scale systematic plan or arrangement for attaining some particular object or putting a particular idea into effect." +
            "<br><br>" +
            "(A) 'plot' means a plan made in secret by a group of people to do something illegal or harmful." +
            "<br><br>" +
            "(C) 'accident' means an unfortunate incident that happens unexpectedly and unintentionally." +
            "<br><br>" +
            "(D) 'issue' means an important topic or problem for debate or discussion.",
        chinese_explanation: "(B) '计划' 一词意味着为达到某个特定目标或实施某个特定想法的大规模系统性计划或安排。" +
            "<br><br>" +
            "(A) '阴谋' 意味着一群人秘密制定的非法或有害的计划。" +
            "<br><br>" +
            "(C) '事故' 意味着意外发生的不幸事件。" +
            "<br><br>" +
            "(D) '问题' 意味着需要讨论或辩论的重要话题或问题。"
    },
    {
        id: 2,
        question: "Her speech made numerous __________ to historical events to support her arguments.",
        chinese_question: "她的演讲多次__________历史事件来支持她的论点。",
        answers: [
            { option: "A", answer: "bibliography", chinese_answer: "参考书目", chinese_romanization: "cānkǎo shūmù" },
            { option: "B", answer: "references", chinese_answer: "参考", chinese_romanization: "cānkǎo" },
            { option: "C", answer: "summary", chinese_answer: "总结", chinese_romanization: "zǒngjié" },
            { option: "D", answer: "introduction", chinese_answer: "引言", chinese_romanization: "yǐnyán" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'references' means the action of mentioning or alluding to something." +
            "<br><br>" +
            "(A) 'bibliography' means a list of the books referred to in a scholarly work." +
            "<br><br>" +
            "(C) 'summary' means a brief statement or account of the main points of something." +
            "<br><br>" +
            "(D) 'introduction' means the beginning section of a book or other piece of writing.",
        chinese_explanation: "(B) '参考'一词意味着提到或暗指某事的行为。" +
            "<br><br>" +
            "(A) '参考书目' 意味着学术作品中提到的书籍列表。" +
            "<br><br>" +
            "(C) '总结' 意味着主要内容的简要陈述或说明。" +
            "<br><br>" +
            "(D) '引言' 意味着书籍或其他作品的开头部分。"
    },
    {
        id: 3,
        question: "The doctor quickly administered the __________ to counteract the effects of the poison.",
        chinese_question: "医生迅速注射了 __________ 以抵消毒药的作用。",
        answers: [
            { option: "A", answer: "poison", chinese_answer: "毒药", chinese_romanization: "dúyào" },
            { option: "B", answer: "virus", chinese_answer: "病毒", chinese_romanization: "bìngdú" },
            { option: "C", answer: "antidote", chinese_answer: "解毒剂", chinese_romanization: "jiědújì" },
            { option: "D", answer: "toxin", chinese_answer: "毒素", chinese_romanization: "dúsù" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'antidote' means a medicine taken or given to counteract a particular poison." +
            "<br><br>" +
            "(A) 'poison' means a substance that is capable of causing the illness or death of a living organism when introduced or absorbed." +
            "<br><br>" +
            "(B) 'virus' means a small infectious agent that replicates only inside the living cells of an organism." +
            "<br><br>" +
            "(D) 'toxin' means a poisonous substance produced within living cells or organisms.",
        chinese_explanation: "(C) '解毒剂' 一词意味着用于对抗特定毒药的药物。" +
            "<br><br>" +
            "(A) '毒药' 意味着一种能够在引入或吸收时引起生物体疾病或死亡的物质。" +
            "<br><br>" +
            "(B) '病毒' 意味着一种只有在生物体活细胞内复制的小型传染性因子。" +
            "<br><br>" +
            "(D) '毒素' 意味着由活细胞或生物体内产生的有毒物质。"
    },
    {
        id: 4,
        question: "Her high __________ for her children often put a lot of pressure on them.",
        chinese_question: "她对孩子的高 __________ 往往给他们带来了很大的压力。",
        answers: [
            { option: "A", answer: "expectations", chinese_answer: "期望", chinese_romanization: "qīwàng" },
            { option: "B", answer: "dismissals", chinese_answer: "忽视", chinese_romanization: "hūshì" },
            { option: "C", answer: "indifferences", chinese_answer: "漠不关心", chinese_romanization: "mò bù guānxīn" },
            { option: "D", answer: "neglects", chinese_answer: "疏忽", chinese_romanization: "shūhū" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'expectations' metaphorically means strong beliefs that someone will achieve something." +
            "<br><br>" +
            "(B) 'dismissals' means the act of treating something as unworthy of serious consideration." +
            "<br><br>" +
            "(C) 'indifferences' means lack of interest, concern, or sympathy." +
            "<br><br>" +
            "(D) 'neglects' means fail to care for properly.",
        chinese_explanation: "(A) '期望' 比喻对某人将实现某事的强烈信念。" +
            "<br><br>" +
            "(B) '忽视' 意味着认为某事不值得认真考虑的行为。" +
            "<br><br>" +
            "(C) '漠不关心' 意味着缺乏兴趣、关心或同情心。" +
            "<br><br>" +
            "(D) '疏忽' 意味着未能适当照顾。"
    },
    {
        id: 5,
        question: "Finding her true __________ in life gave her a sense of fulfillment.",
        chinese_question: "找到她生命中的真正 __________ 给了她一种成就感。",
        answers: [
            { option: "A", answer: "purpose", chinese_answer: "目标", chinese_romanization: "mùbiāo" },
            { option: "B", answer: "doubt", chinese_answer: "怀疑", chinese_romanization: "huáiyí" },
            { option: "C", answer: "regret", chinese_answer: "后悔", chinese_romanization: "hòuhuǐ" },
            { option: "D", answer: "struggle", chinese_answer: "奋斗", chinese_romanization: "fèndòu" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'purpose' metaphorically means a sense of resolve or determination." +
            "<br><br>" +
            "(B) 'doubt' means a feeling of uncertainty or lack of conviction." +
            "<br><br>" +
            "(C) 'regret' means to feel sad, repentant, or disappointed over (something that has happened or been done, especially a loss or missed opportunity)." +
            "<br><br>" +
            "(D) 'struggle' means a forceful or violent effort to get free of restraint or resist attack.",
        chinese_explanation: "(A) '目标' 比喻一种决心或决断感。" +
            "<br><br>" +
            "(B) '怀疑' 意味着不确定或缺乏信心的感觉。" +
            "<br><br>" +
            "(C) '后悔' 意味着对（发生或做过的事情，尤其是损失或错失机会）感到悲伤、悔恨或失望。" +
            "<br><br>" +
            "(D) '奋斗' 意味着强有力或暴力的努力以摆脱束缚或抵抗攻击。"
    },
    {
        id: 6,
        question: "The manager created a detailed __________ to ensure that all tasks were completed on time.",
        chinese_question: "经理制定了详细的 __________，确保所有任务按时完成。",
        answers: [
            { option: "A", answer: "schedule", chinese_answer: "时间表", chinese_romanization: "shíjiānbiǎo" },
            { option: "B", answer: "guess", chinese_answer: "猜测", chinese_romanization: "cāicè" },
            { option: "C", answer: "rumor", chinese_answer: "谣言", chinese_romanization: "yáoyán" },
            { option: "D", answer: "suggestion", chinese_answer: "建议", chinese_romanization: "jiànyì" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'schedule' means a plan for carrying out a process or procedure, giving lists of intended events and times." +
            "<br><br>" +
            "(B) 'guess' means an estimate or supposition." +
            "<br><br>" +
            "(C) 'rumor' means a currently circulating story or report of uncertain or doubtful truth." +
            "<br><br>" +
            "(D) 'suggestion' means an idea or plan put forward for consideration.",
        chinese_explanation: "(A) '时间表' 一词意味着执行过程或程序的计划，列出预定事件和时间的清单。" +
            "<br><br>" +
            "(B) '猜测' 意味着估计或假设。" +
            "<br><br>" +
            "(C) '谣言' 意味着目前流传的故事或报告，其真实性不确定或存疑。" +
            "<br><br>" +
            "(D) '建议' 意味着提出供考虑的想法或计划。"
    },
    {
        id: 7,
        question: "The sudden storm turned the picnic into a __________, with heavy rain and strong winds scattering everything.",
        chinese_question: "突如其来的暴风雨使野餐变成了 __________，大雨和强风将一切吹得四散。",
        answers: [
            { option: "A", answer: "triumph", chinese_answer: "胜利", chinese_romanization: "shènglì" },
            { option: "B", answer: "celebration", chinese_answer: "庆祝", chinese_romanization: "qìngzhù" },
            { option: "C", answer: "calamity", chinese_answer: "灾难", chinese_romanization: "zāinàn" },
            { option: "D", answer: "success", chinese_answer: "成功", chinese_romanization: "chénggōng" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'calamity' means an event causing great and often sudden damage or distress; a disaster." +
            "<br><br>" +
            "(A) 'triumph' means a great victory or achievement." +
            "<br><br>" +
            "(B) 'celebration' means the action of marking one's pleasure at an important event or occasion by engaging in enjoyable, typically social, activity." +
            "<br><br>" +
            "(D) 'success' means the accomplishment of an aim or purpose.",
        chinese_explanation: "(C) '灾难' 一词意味着造成巨大且通常是突然的损害或痛苦的事件；灾害。" +
            "<br><br>" +
            "(A) '胜利' 意味着伟大的胜利或成就。" +
            "<br><br>" +
            "(B) '庆祝' 意味着通过参加令人愉快的、通常是社交的活动来标志重要事件或场合的愉悦行为。" +
            "<br><br>" +
            "(D) '成功' 意味着实现目标或目的。"
    },
    {
        id: 8,
        question: "He offered his __________ to the family of the deceased, expressing his sorrow for their loss.",
        chinese_question: "他向死者的家属表示 __________，表达了对他们失去亲人的哀悼。",
        answers: [
            { option: "A", answer: "congratulations", chinese_answer: "祝贺", chinese_romanization: "zhùhè" },
            { option: "B", answer: "condolences", chinese_answer: "哀悼", chinese_romanization: "āidào" },
            { option: "C", answer: "compliments", chinese_answer: "恭维", chinese_romanization: "gōngwéi" },
            { option: "D", answer: "complaints", chinese_answer: "抱怨", chinese_romanization: "bàoyuàn" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'condolences' means an expression of sympathy, especially on the occasion of a death." +
            "<br><br>" +
            "(A) 'congratulations' means words expressing praise for an achievement or good wishes on a special occasion." +
            "<br><br>" +
            "(C) 'compliments' means a polite expression of praise or admiration." +
            "<br><br>" +
            "(D) 'complaints' means expressions of dissatisfaction or annoyance about something.",
        chinese_explanation: "(B) '哀悼' 一词意味着表示同情，特别是在死亡场合。" +
            "<br><br>" +
            "(A) '祝贺' 意味着对成就的赞扬或在特殊场合的美好祝愿。" +
            "<br><br>" +
            "(C) '恭维' 意味着表示赞美或钦佩的礼貌表达。" +
            "<br><br>" +
            "(D) '抱怨' 意味着对某事表示不满或恼怒的表达。"
    },
    {
        id: 9,
        question: "The heavy traffic proved to be a significant __________ to our progress, causing us to miss the important meeting.",
        chinese_question: "交通拥堵对我们的进展构成了重大 __________，导致我们错过了重要会议。",
        answers: [
            { option: "A", answer: "assistance", chinese_answer: "帮助", chinese_romanization: "bāngzhù" },
            { option: "B", answer: "hindrance", chinese_answer: "障碍", chinese_romanization: "zhàng'ài" },
            { option: "C", answer: "benefit", chinese_answer: "好处", chinese_romanization: "hǎochù" },
            { option: "D", answer: "help", chinese_answer: "协助", chinese_romanization: "xiézhù" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'hindrance' means a thing that provides resistance, delay, or obstruction to something or someone." +
            "<br><br>" +
            "(A) 'assistance' means the action of helping someone by sharing work." +
            "<br><br>" +
            "(C) 'benefit' means an advantage or profit gained from something." +
            "<br><br>" +
            "(D) 'help' means to make it easier for someone to do something by offering one's services or resources.",
        chinese_explanation: "(B) '障碍' 一词意味着对某事或某人的阻力、延迟或障碍。" +
            "<br><br>" +
            "(A) '帮助' 意味着通过分担工作来帮助某人的行为。" +
            "<br><br>" +
            "(C) '好处' 意味着从某事中获得的优势或利益。" +
            "<br><br>" +
            "(D) '协助' 意味着使某人做某事变得更容易，提供服务或资源。"
    },
    {
        id: 10,
        question: "The athlete gained __________ as she sprinted towards the finish line, her speed increasing with every step.",
        chinese_question: "运动员在冲向终点线时获得了 __________，她的速度随着每一步的增加而增加。",
        answers: [
            { option: "A", answer: "hesitation", chinese_answer: "犹豫", chinese_romanization: "yóuyù" },
            { option: "B", answer: "momentum", chinese_answer: "动力", chinese_romanization: "dònglì" },
            { option: "C", answer: "stillness", chinese_answer: "静止", chinese_romanization: "jìngzhǐ" },
            { option: "D", answer: "lethargy", chinese_answer: "昏睡", chinese_romanization: "hūnshuì" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'momentum' means the quantity of motion of a moving body, measured as a product of its mass and velocity." +
            "<br><br>" +
            "(A) 'hesitation' means the action of pausing or hesitating before saying or doing something." +
            "<br><br>" +
            "(C) 'stillness' means the absence of movement or sound." +
            "<br><br>" +
            "(D) 'lethargy' means a lack of energy and enthusiasm.",
        chinese_explanation: "(B) '动力' 意味着移动物体的运动量，测量为其质量和速度的乘积。" +
            "<br><br>" +
            "(A) '犹豫' 意味着在说或做某事之前的停顿或犹豫的行为。" +
            "<br><br>" +
            "(C) '静止' 意味着没有运动或声音。" +
            "<br><br>" +
            "(D) '昏睡' 意味着缺乏能量和热情。"
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
