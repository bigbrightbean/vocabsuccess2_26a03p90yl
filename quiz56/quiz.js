// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "The similarity in their ideas was pure __________, as they had not discussed the topic beforehand.",
        chinese_question: "他们想法的相似纯属__________，因为他们事先没有讨论过这个话题。",
        answers: [
            { option: "A", answer: "plan", chinese_answer: "计划", chinese_romanization: "jìhuà" },
            { option: "B", answer: "accident", chinese_answer: "事故", chinese_romanization: "shìgù" },
            { option: "C", answer: "coincidence", chinese_answer: "巧合", chinese_romanization: "qiǎohé" },
            { option: "D", answer: "arrangement", chinese_answer: "安排", chinese_romanization: "ānpái" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'coincidence' means a remarkable concurrence of events or circumstances without apparent causal connection. Figuratively, it can mean any unexpected similarity or occurrence." +
            "<br><br>" +
            "(A) 'plan' means a detailed proposal for doing or achieving something." +
            "<br><br>" +
            "(B) 'accident' means an unfortunate incident that happens unexpectedly and unintentionally." +
            "<br><br>" +
            "(D) 'arrangement' means a plan or preparation for a future event.",
        chinese_explanation: "(C) '巧合'一词意味着事件或情况的显着同时发生，而没有明显的因果关系。比喻地，它可以表示任何意想不到的相似或发生。" +
            "<br><br>" +
            "(A) '计划' 意味着做某事或实现某事的详细提议。" +
            "<br><br>" +
            "(B) '事故' 意味着意外和非故意发生的不幸事件。" +
            "<br><br>" +
            "(D) '安排' 意味着对未来事件的计划或准备。"
    },
    {
        id: 2,
        question: "The project cannot move forward without the manager's __________.",
        chinese_question: "没有经理的 __________，项目不能继续推进。",
        answers: [
            { option: "A", answer: "approval", chinese_answer: "批准", chinese_romanization: "pīzhǔn" },
            { option: "B", answer: "disapproval", chinese_answer: "反对", chinese_romanization: "fǎnduì" },
            { option: "C", answer: "hesitation", chinese_answer: "犹豫", chinese_romanization: "yóuyù" },
            { option: "D", answer: "uncertainty", chinese_answer: "不确定", chinese_romanization: "bù quèdìng" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'approval' means the action of officially agreeing to something or accepting something as satisfactory." +
            "<br><br>" +
            "(B) 'disapproval' means possession or expression of an unfavorable opinion." +
            "<br><br>" +
            "(C) 'hesitation' means the action of pausing before saying or doing something." +
            "<br><br>" +
            "(D) 'uncertainty' means the state of being uncertain.",
        chinese_explanation: "(A) '批准' 意味着正式同意某事或接受某事为令人满意的行为。" +
            "<br><br>" +
            "(B) '反对' 意味着持有或表达不赞成的意见。" +
            "<br><br>" +
            "(C) '犹豫' 意味着在说或做某事之前的停顿。" +
            "<br><br>" +
            "(D) '不确定' 意味着不确定的状态。"
    },
    {
        id: 3,
        question: "His __________ was evident in the way he handled the business deal, always staying honest and fair.",
        chinese_question: "他处理商业交易的方式显示了他的 __________，始终保持诚实和公平。",
        answers: [
            { option: "A", answer: "dishonesty", chinese_answer: "不诚实", chinese_romanization: "bù chéngshí" },
            { option: "B", answer: "integrity", chinese_answer: "正直", chinese_romanization: "zhèngzhí" },
            { option: "C", answer: "corruption", chinese_answer: "腐败", chinese_romanization: "fǔbài" },
            { option: "D", answer: "deceit", chinese_answer: "欺骗", chinese_romanization: "qīpiàn" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'integrity' means the quality of being honest and having strong moral principles." +
            "<br><br>" +
            "(A) 'dishonesty' means deceitfulness shown in someone's character or behavior." +
            "<br><br>" +
            "(C) 'corruption' means dishonest or fraudulent conduct by those in power, typically involving bribery." +
            "<br><br>" +
            "(D) 'deceit' means the action or practice of deceiving someone by concealing or misrepresenting the truth.",
        chinese_explanation: "(B) '正直' 一词意味着诚实和具有强烈道德原则的品质。" +
            "<br><br>" +
            "(A) '不诚实' 意味着在某人性格或行为中表现出的欺骗性。" +
            "<br><br>" +
            "(C) '腐败' 意味着当权者的不诚实或欺诈行为，通常涉及贿赂。" +
            "<br><br>" +
            "(D) '欺骗' 意味着通过隐瞒或歪曲事实来欺骗某人的行为或做法。"
    },
    {
        id: 4,
        question: "The __________ of his speech was that everyone should work together for a better future.",
        chinese_question: "他演讲的__________是每个人都应该为了更好的未来一起努力。",
        answers: [
            { option: "A", answer: "conclusion", chinese_answer: "结论", chinese_romanization: "jiélùn" },
            { option: "B", answer: "detail", chinese_answer: "细节", chinese_romanization: "xìjié" },
            { option: "C", answer: "gist", chinese_answer: "要点", chinese_romanization: "yàodiǎn" },
            { option: "D", answer: "prelude", chinese_answer: "序幕", chinese_romanization: "xùmù" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'gist' means the substance or essence of a speech or text." +
            "<br><br>" +
            "(A) 'conclusion' means the end or finish of an event or process." +
            "<br><br>" +
            "(B) 'detail' means an individual feature, fact, or item." +
            "<br><br>" +
            "(D) 'prelude' means an action or event serving as an introduction to something more important.",
        chinese_explanation: "(C) '要点'一词意味着演讲或文本的实质或精髓。" +
            "<br><br>" +
            "(A) '结论' 意味着事件或过程的结束或终结。" +
            "<br><br>" +
            "(B) '细节' 意味着个别的特征、事实或项目。" +
            "<br><br>" +
            "(D) '序幕' 意味着作为更重要事情介绍的行动或事件。"
    },
    {
        id: 5,
        question: "The __________ of forgetting her lines during the play left a lasting impression on her, making her more diligent in the future.",
        chinese_question: "在戏剧中忘词的__________给她留下了深刻的印象，使她以后更加勤奋。",
        answers: [
            { option: "A", answer: "routine", chinese_answer: "例行公事", chinese_romanization: "lìxíng gōngshì" },
            { option: "B", answer: "incident", chinese_answer: "事件", chinese_romanization: "shìjiàn" },
            { option: "C", answer: "festival", chinese_answer: "节日", chinese_romanization: "jiérì" },
            { option: "D", answer: "performance", chinese_answer: "表演", chinese_romanization: "biǎoyǎn" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'incident' means an event or occurrence, especially one that is unusual or important. Figuratively, it can mean an experience or moment that has a significant impact." +
            "<br><br>" +
            "(A) 'routine' means a sequence of actions regularly followed." +
            "<br><br>" +
            "(C) 'festival' means a day or period of celebration, typically for religious reasons." +
            "<br><br>" +
            "(D) 'performance' means an act of staging or presenting a play, concert, or other form of entertainment.",
        chinese_explanation: "(B) '事件'一词意味着一种事件或情况，特别是异常或重要的。比喻地，它可以表示具有重大影响的经历或时刻。" +
            "<br><br>" +
            "(A) '例行公事' 意味着定期遵循的行动顺序。" +
            "<br><br>" +
            "(C) '节日' 意味着庆祝的一天或一段时间，通常是宗教原因。" +
            "<br><br>" +
            "(D) '表演' 意味着上演或呈现戏剧、音乐会或其他形式的娱乐活动的行为。"
    },
    {
        id: 6,
        question: "His __________ for storytelling made him a popular author.",
        chinese_question: "他讲故事的 __________ 使他成为一名受欢迎的作家。",
        answers: [
            { option: "A", answer: "flair", chinese_answer: "天赋", chinese_romanization: "tiānfù" },
            { option: "B", answer: "weakness", chinese_answer: "弱点", chinese_romanization: "ruòdiǎn" },
            { option: "C", answer: "apathy", chinese_answer: "冷漠", chinese_romanization: "lěngmò" },
            { option: "D", answer: "reluctance", chinese_answer: "不情愿", chinese_romanization: "bù qíngyuàn" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'flair' metaphorically means a natural talent or aptitude." +
            "<br><br>" +
            "(B) 'weakness' means the state or condition of lacking strength." +
            "<br><br>" +
            "(C) 'apathy' means lack of interest, enthusiasm, or concern." +
            "<br><br>" +
            "(D) 'reluctance' means unwillingness or disinclination to do something.",
        chinese_explanation: "(A) '天赋' 比喻自然的才能或本能。" +
            "<br><br>" +
            "(B) '弱点' 意味着缺乏力量的状态或条件。" +
            "<br><br>" +
            "(C) '冷漠' 意味着缺乏兴趣、热情或关心。" +
            "<br><br>" +
            "(D) '不情愿' 意味着不愿意或不倾向于做某事。"
    },
    {
        id: 7,
        question: "His __________ about the election results turned out to be accurate.",
        chinese_question: "他对选举结果的 __________ 被证明是准确的。",
        answers: [
            { option: "A", answer: "prediction", chinese_answer: "预测", chinese_romanization: "yùcè" },
            { option: "B", answer: "guess", chinese_answer: "猜测", chinese_romanization: "cāicè" },
            { option: "C", answer: "assumption", chinese_answer: "假设", chinese_romanization: "jiǎshè" },
            { option: "D", answer: "doubt", chinese_answer: "怀疑", chinese_romanization: "huáiyí" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'prediction' means a thing predicted; a forecast." +
            "<br><br>" +
            "(B) 'guess' means an estimate or conjecture without sufficient information to be sure of being correct." +
            "<br><br>" +
            "(C) 'assumption' means a thing that is accepted as true or as certain to happen, without proof." +
            "<br><br>" +
            "(D) 'doubt' means a feeling of uncertainty or lack of conviction.",
        chinese_explanation: "(A) '预测' 意味着预测的事情；预报。" +
            "<br><br>" +
            "(B) '猜测' 意味着在没有足够信息来确定正确性的情况下进行的估计或猜想。" +
            "<br><br>" +
            "(C) '假设' 意味着接受为真实或确定要发生的事情，没有证明。" +
            "<br><br>" +
            "(D) '怀疑' 意味着不确定或缺乏信心的感觉。"
    },
    {
        id: 8,
        question: "Her primary __________ was for the safety and well-being of her children.",
        chinese_question: "她最主要的 __________ 是她孩子的安全和福祉。",
        answers: [
            { option: "A", answer: "indifference", chinese_answer: "冷漠", chinese_romanization: "lěngmò" },
            { option: "B", answer: "concern", chinese_answer: "关心", chinese_romanization: "guānxīn" },
            { option: "C", answer: "apathy", chinese_answer: "漠不关心", chinese_romanization: "mòbù guānxīn" },
            { option: "D", answer: "disregard", chinese_answer: "忽视", chinese_romanization: "hūshì" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'concern' means a matter of interest or importance to someone." +
            "<br><br>" +
            "(A) 'indifference' means lack of interest, concern, or sympathy." +
            "<br><br>" +
            "(C) 'apathy' means lack of interest, enthusiasm, or concern." +
            "<br><br>" +
            "(D) 'disregard' means the action or state of disregarding or ignoring something.",
        chinese_explanation: "(B) '关心' 一词意味着某人感兴趣或重要的事情。" +
            "<br><br>" +
            "(A) '冷漠' 意味着缺乏兴趣、关心或同情。" +
            "<br><br>" +
            "(C) '漠不关心' 意味着缺乏兴趣、热情或关心。" +
            "<br><br>" +
            "(D) '忽视' 意味着忽视或忽略某事的行为或状态。"
    },
    {
        id: 9,
        question: "The film critic wrote a detailed __________ of the movie, highlighting both its strengths and weaknesses.",
        chinese_question: "影评人写了一篇详细的电影 __________，突出了它的优点和缺点。",
        answers: [
            { option: "A", answer: "summary", chinese_answer: "摘要", chinese_romanization: "zhāiyào" },
            { option: "B", answer: "advertisement", chinese_answer: "广告", chinese_romanization: "guǎnggào" },
            { option: "C", answer: "critique", chinese_answer: "评论", chinese_romanization: "pínglùn" },
            { option: "D", answer: "synopsis", chinese_answer: "概要", chinese_romanization: "gàiyào" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'critique' means a detailed analysis and assessment of something, especially a literary, philosophical, or political theory." +
            "<br><br>" +
            "(A) 'summary' means a brief statement or account of the main points of something." +
            "<br><br>" +
            "(B) 'advertisement' means a notice or announcement in a public medium promoting a product, service, or event or publicizing a job vacancy." +
            "<br><br>" +
            "(D) 'synopsis' means a brief summary or general survey of something.",
        chinese_explanation: "(C) '评论' 一词意味着对某事的详细分析和评估，特别是文学、哲学或政治理论。" +
            "<br><br>" +
            "(A) '摘要' 意味着某事要点的简短陈述或描述。" +
            "<br><br>" +
            "(B) '广告' 意味着在公共媒体中宣传产品、服务或事件或公布职位空缺的通知或公告。" +
            "<br><br>" +
            "(D) '概要' 意味着某事的简短总结或概述。"
    },
    {
        id: 10,
        question: "Access to clean water is a basic __________ for all humans, essential for health and survival.",
        chinese_question: "清洁水的获取是所有人类的基本 __________，对健康和生存至关重要。",
        answers: [
            { option: "A", answer: "luxury", chinese_answer: "奢侈品", chinese_romanization: "shēchǐ pǐn" },
            { option: "B", answer: "convenience", chinese_answer: "方便", chinese_romanization: "fāngbiàn" },
            { option: "C", answer: "necessity", chinese_answer: "必需品", chinese_romanization: "bìxū pǐn" },
            { option: "D", answer: "preference", chinese_answer: "偏好", chinese_romanization: "piānhào" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'necessity' means something that is essential or indispensable." +
            "<br><br>" +
            "(A) 'luxury' means a state of great comfort or elegance." +
            "<br><br>" +
            "(B) 'convenience' means the state of being able to proceed with something without difficulty." +
            "<br><br>" +
            "(D) 'preference' means a greater liking for one alternative over another.",
        chinese_explanation: "(C) '必需品' 一词意味着某物是必不可少的或必不可缺的。" +
            "<br><br>" +
            "(A) '奢侈品' 意味着非常舒适或优雅的状态。" +
            "<br><br>" +
            "(B) '方便' 意味着可以毫不困难地进行某事的状态。" +
            "<br><br>" +
            "(D) '偏好' 意味着对一个替代方案比另一个更喜欢。"
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
