// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "The judge remained __________ throughout the trial, ensuring that both sides were treated fairly.",
        chinese_question: "法官在整个审判过程中保持 __________，确保双方都受到公平对待。",
        answers: [
            { option: "A", answer: "biased", chinese_answer: "偏见", chinese_romanization: "piānjiàn" },
            { option: "B", answer: "partial", chinese_answer: "偏袒", chinese_romanization: "piāntǎn" },
            { option: "C", answer: "impartial", chinese_answer: "公正", chinese_romanization: "gōngzhèng" },
            { option: "D", answer: "prejudiced", chinese_answer: "成见", chinese_romanization: "chéngjiàn" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'impartial' means treating all rivals or disputants equally; fair and just." +
            "<br><br>" +
            "(A) 'biased' means unfairly prejudiced for or against someone or something." +
            "<br><br>" +
            "(B) 'partial' means favoring one side in a dispute above the other." +
            "<br><br>" +
            "(D) 'prejudiced' means having or showing a dislike or distrust that is derived from prejudice.",
        chinese_explanation: "(C) '公正' 一词意味着平等对待所有竞争者或争论者；公平和公正。" +
            "<br><br>" +
            "(A) '偏见' 意味着对某人或某事有或表现出不公平的偏见。" +
            "<br><br>" +
            "(B) '偏袒' 意味着在争论中偏袒一方。" +
            "<br><br>" +
            "(D) '成见' 意味着由于偏见而产生的或表现出的不喜欢或不信任。"
    },
    {
        id: 2,
        question: "Despite all the excitement around him, he remained __________, uninterested in joining the festivities.",
        chinese_question: "尽管周围充满了兴奋，他仍然 __________，对参加庆祝活动不感兴趣。",
        answers: [
            { option: "A", answer: "enthusiastic", chinese_answer: "热情", chinese_romanization: "rèqíng" },
            { option: "B", answer: "indifferent", chinese_answer: "冷漠", chinese_romanization: "lěngmò" },
            { option: "C", answer: "passionate", chinese_answer: "激情", chinese_romanization: "jīqíng" },
            { option: "D", answer: "eager", chinese_answer: "渴望", chinese_romanization: "kěwàng" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'indifferent' means having no particular interest or sympathy; unconcerned." +
            "<br><br>" +
            "(A) 'enthusiastic' means having or showing intense and eager enjoyment, interest, or approval." +
            "<br><br>" +
            "(C) 'passionate' means showing or caused by strong feelings or a strong belief." +
            "<br><br>" +
            "(D) 'eager' means wanting to do or have something very much.",
        chinese_explanation: "(B) '冷漠' 一词意味着没有特别的兴趣或同情；漠不关心。" +
            "<br><br>" +
            "(A) '热情' 意味着表现出或表现出强烈和热切的享受、兴趣或赞同。" +
            "<br><br>" +
            "(C) '激情' 意味着表现出或由强烈的感情或强烈的信仰引起的。" +
            "<br><br>" +
            "(D) '渴望' 意味着非常想做或拥有某事。"
    },
    {
        id: 3,
        question: "The solution to the problem became __________ after the students received additional guidance from their teacher.",
        chinese_question: "在学生们从老师那里得到额外的指导后，问题的解决方案变得 __________ 了。",
        answers: [
            { option: "A", answer: "obscure", chinese_answer: "模糊", chinese_romanization: "móhú" },
            { option: "B", answer: "apparent", chinese_answer: "明显", chinese_romanization: "míngxiǎn" },
            { option: "C", answer: "intricate", chinese_answer: "复杂", chinese_romanization: "fùzá" },
            { option: "D", answer: "convoluted", chinese_answer: "盘根错节", chinese_romanization: "pángēncuòjié" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'apparent' means clearly visible or understood; obvious." +
            "<br><br>" +
            "(A) 'obscure' means not discovered or known about." +
            "<br><br>" +
            "(C) 'intricate' means very complicated or detailed." +
            "<br><br>" +
            "(D) 'convoluted' means complex and difficult to follow.",
        chinese_explanation: "(B) '明显' 一词意味着清晰可见或理解；显而易见的。" +
            "<br><br>" +
            "(A) '模糊' 意味着未被发现或不为人知的。" +
            "<br><br>" +
            "(C) '复杂' 意味着非常复杂或详细的。" +
            "<br><br>" +
            "(D) '盘根错节' 意味着复杂且难以理解。"
    },
    {
        id: 4,
        question: "After shouting for hours at the concert, his voice became __________, making it difficult for him to speak.",
        chinese_question: "在音乐会上喊叫了几个小时后，他的声音变得 __________，说话变得困难。",
        answers: [
            { option: "A", answer: "clear", chinese_answer: "清晰的", chinese_romanization: "qīngxī de" },
            { option: "B", answer: "melodious", chinese_answer: "悦耳的", chinese_romanization: "yuè'ěr de" },
            { option: "C", answer: "hoarse", chinese_answer: "嘶哑的", chinese_romanization: "sīyǎ de" },
            { option: "D", answer: "soothing", chinese_answer: "舒缓的", chinese_romanization: "shūhuǎn de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'hoarse' means sounding rough and harsh, typically as the result of a sore throat or of shouting." +
            "<br><br>" +
            "(A) 'clear' means easy to perceive, understand, or interpret." +
            "<br><br>" +
            "(B) 'melodious' means of, producing, or having a pleasant tune; tuneful." +
            "<br><br>" +
            "(D) 'soothing' means having a gently calming effect.",
        chinese_explanation: "(C) '嘶哑的' 意味着听起来粗糙和刺耳，通常是由于喉咙痛或喊叫。" +
            "<br><br>" +
            "(A) '清晰的' 意味着容易感知、理解或解释。" +
            "<br><br>" +
            "(B) '悦耳的' 意味着产生或具有愉悦的旋律；悦耳的。" +
            "<br><br>" +
            "(D) '舒缓的' 意味着具有轻柔的镇静效果。"
    },
    {
        id: 5,
        question: "The dark clouds gathering on the horizon gave an __________ feeling, as if a severe storm was about to hit.",
        chinese_question: "地平线上聚集的乌云给人一种 __________ 的感觉，好像一场暴风雨即将来临。",
        answers: [
            { option: "A", answer: "reassuring", chinese_answer: "令人放心的", chinese_romanization: "lìng rén fàngxīn de" },
            { option: "B", answer: "benign", chinese_answer: "和善的", chinese_romanization: "héshàn de" },
            { option: "C", answer: "ominous", chinese_answer: "不祥的", chinese_romanization: "bùxiáng de" },
            { option: "D", answer: "promising", chinese_answer: "有希望的", chinese_romanization: "yǒu xīwàng de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'ominous' means giving the impression that something bad or unpleasant is going to happen; threatening." +
            "<br><br>" +
            "(A) 'reassuring' means serving or intended to remove someone's doubts or fears." +
            "<br><br>" +
            "(B) 'benign' means gentle and kindly." +
            "<br><br>" +
            "(D) 'promising' means showing signs of future success.",
        chinese_explanation: "(C) '不祥的' 意味着给人一种坏事或不愉快的事情即将发生的印象；威胁的。" +
            "<br><br>" +
            "(A) '令人放心的' 意味着服务于或意在消除某人的疑虑或恐惧。" +
            "<br><br>" +
            "(B) '和善的' 意味着温和而友好的。" +
            "<br><br>" +
            "(D) '有希望的' 意味着显示未来成功的迹象。"
    },
    {
        id: 6,
        question: "The criminal was __________, always managing to evade capture despite the police's best efforts.",
        chinese_question: "尽管警方尽了最大努力，但这名罪犯总是 __________，总能逃脱抓捕。",
        answers: [
            { option: "A", answer: "easy", chinese_answer: "容易的", chinese_romanization: "róngyì de" },
            { option: "B", answer: "obvious", chinese_answer: "明显的", chinese_romanization: "míngxiǎn de" },
            { option: "C", answer: "straightforward", chinese_answer: "简单的", chinese_romanization: "jiǎndān de" },
            { option: "D", answer: "elusive", chinese_answer: "难捉摸的", chinese_romanization: "nán zhuōmō de" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'elusive' means difficult to find, catch, or achieve." +
            "<br><br>" +
            "(A) 'easy' means achieved without great effort; presenting few difficulties." +
            "<br><br>" +
            "(B) 'obvious' means easily perceived or understood; clear, self-evident, or apparent." +
            "<br><br>" +
            "(C) 'straightforward' means uncomplicated and easy to do or understand.",
        chinese_explanation: "(D) '难捉摸的' 意味着难以找到、捕捉或实现的。" +
            "<br><br>" +
            "(A) '容易的' 意味着不需要太多努力就能完成的；呈现出少数困难的。" +
            "<br><br>" +
            "(B) '明显的' 意味着容易感知或理解；清晰、自明或显然的。" +
            "<br><br>" +
            "(C) '简单的' 意味着简单而容易做或理解的。"
    },
    {
        id: 7,
        question: "The instructions were so __________ that no one was sure what to do, leading to confusion and mistakes.",
        chinese_question: "这些指示非常 __________，没有人知道该怎么做，导致了混乱和错误。",
        answers: [
            { option: "A", answer: "clear", chinese_answer: "清晰的", chinese_romanization: "qīngxī de" },
            { option: "B", answer: "straightforward", chinese_answer: "直截了当的", chinese_romanization: "zhíjiéle dàng de" },
            { option: "C", answer: "ambiguous", chinese_answer: "模棱两可的", chinese_romanization: "móléng liǎng kě de" },
            { option: "D", answer: "obvious", chinese_answer: "明显的", chinese_romanization: "míngxiǎn de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'ambiguous' means open to more than one interpretation; having a double meaning." +
            "<br><br>" +
            "(A) 'clear' means easy to perceive, understand, or interpret." +
            "<br><br>" +
            "(B) 'straightforward' means uncomplicated and easy to do or understand." +
            "<br><br>" +
            "(D) 'obvious' means easily perceived or understood; clear, self-evident, or apparent.",
        chinese_explanation: "(C) '模棱两可的' 意味着有多种解释的；有双重含义的。" +
            "<br><br>" +
            "(A) '清晰的' 意味着容易理解、感知或解释。" +
            "<br><br>" +
            "(B) '直截了当的' 意味着简单而容易理解或做的。" +
            "<br><br>" +
            "(D) '明显的' 意味着容易感知或理解；清晰、自明或显然的。"
    },
    {
        id: 8,
        question: "She found a __________ job in the tech industry that paid significantly more than her previous position.",
        chinese_question: "她在科技行业找到了一份 __________ 的工作，收入比以前的职位高出很多。",
        answers: [
            { option: "A", answer: "volunteer", chinese_answer: "志愿", chinese_romanization: "zhìyuàn" },
            { option: "B", answer: "mundane", chinese_answer: "平凡", chinese_romanization: "píngfán" },
            { option: "C", answer: "lucrative", chinese_answer: "有利可图", chinese_romanization: "yǒulì kětú" },
            { option: "D", answer: "unprofitable", chinese_answer: "无利可图", chinese_romanization: "wúlì kětú" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'lucrative' means producing a great deal of profit." +
            "<br><br>" +
            "(A) 'volunteer' means a person who freely offers to take part in an enterprise or undertake a task." +
            "<br><br>" +
            "(B) 'mundane' means lacking interest or excitement; dull." +
            "<br><br>" +
            "(D) 'unprofitable' means not yielding profit or financial gain.",
        chinese_explanation: "(C) '有利可图' 一词意味着产生大量利润。" +
            "<br><br>" +
            "(A) '志愿' 意味着自愿参与某项事业或承担任务的人。" +
            "<br><br>" +
            "(B) '平凡' 意味着缺乏兴趣或兴奋；无聊。" +
            "<br><br>" +
            "(D) '无利可图' 意味着不产生利润或经济收益。"
    },
    {
        id: 9,
        question: "Children and the elderly are often more __________ to illnesses during the flu season.",
        chinese_question: "在流感季节，儿童和老年人往往更容易受到疾病的侵害。",
        answers: [
            { option: "A", answer: "immune", chinese_answer: "免疫的", chinese_romanization: "miǎnyì de" },
            { option: "B", answer: "resistant", chinese_answer: "抵抗的", chinese_romanization: "dǐkàng de" },
            { option: "C", answer: "vulnerable", chinese_answer: "易受伤害的", chinese_romanization: "yì shòu shānghài de" },
            { option: "D", answer: "protected", chinese_answer: "受保护的", chinese_romanization: "shòu bǎohù de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'vulnerable' means susceptible to physical or emotional attack or harm." +
            "<br><br>" +
            "(A) 'immune' means resistant to a particular infection or toxin owing to the presence of specific antibodies or sensitized white blood cells." +
            "<br><br>" +
            "(B) 'resistant' means offering resistance to something or someone." +
            "<br><br>" +
            "(D) 'protected' means keep safe from harm or injury.",
        chinese_explanation: "(C) '易受伤害的' 一词意味着易受身体或情感攻击或伤害的。" +
            "<br><br>" +
            "(A) '免疫的' 意味着由于存在特定抗体或敏化的白细胞而对某种感染或毒素具有抵抗力。" +
            "<br><br>" +
            "(B) '抵抗的' 意味着对某物或某人提供抵抗的。" +
            "<br><br>" +
            "(D) '受保护的' 意味着使免受伤害或伤害。"
    },
    {
        id: 10,
        question: "The dark clouds indicated that a storm was __________ and everyone hurried to find shelter.",
        chinese_question: "乌云预示着暴风雨即将 __________，每个人都急忙寻找避难所。",
        answers: [
            { option: "A", answer: "distant", chinese_answer: "遥远的", chinese_romanization: "yáoyuǎn de" },
            { option: "B", answer: "imminent", chinese_answer: "即将来临的", chinese_romanization: "jíjiāng láilín de" },
            { option: "C", answer: "unlikely", chinese_answer: "不可能的", chinese_romanization: "bù kěnéng de" },
            { option: "D", answer: "avoidable", chinese_answer: "可避免的", chinese_romanization: "kě bìmiǎn de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'imminent' means about to happen." +
            "<br><br>" +
            "(A) 'distant' means far away in space or time." +
            "<br><br>" +
            "(C) 'unlikely' means not likely to happen." +
            "<br><br>" +
            "(D) 'avoidable' means able to be avoided or prevented.",
        chinese_explanation: "(B) '即将来临的' 一词意味着即将发生的。" +
            "<br><br>" +
            "(A) '遥远的' 意味着在空间或时间上很远的。" +
            "<br><br>" +
            "(C) '不可能的' 意味着不太可能发生的。" +
            "<br><br>" +
            "(D) '可避免的' 意味着可以避免或防止的。"
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
