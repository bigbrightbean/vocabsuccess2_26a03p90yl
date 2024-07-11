// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "She felt __________ after the long journey, barely able to muster the energy to unpack her bags.",
        chinese_question: "长途旅行后，她感到 __________，几乎没有力气打开行李。",
        answers: [
            { option: "A", answer: "energetic", chinese_answer: "精力充沛的", chinese_romanization: "jīnglì chōngpèi de" },
            { option: "B", answer: "listless", chinese_answer: "无精打采的", chinese_romanization: "wújīng dǎcǎi de" },
            { option: "C", answer: "vigorous", chinese_answer: "有活力的", chinese_romanization: "yǒu huólì de" },
            { option: "D", answer: "lively", chinese_answer: "活跃的", chinese_romanization: "huóyuè de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'listless' means lacking energy or enthusiasm." +
            "<br><br>" +
            "(A) 'energetic' means showing or involving great activity or vitality." +
            "<br><br>" +
            "(C) 'vigorous' means strong, healthy, and full of energy." +
            "<br><br>" +
            "(D) 'lively' means full of life and energy; active and outgoing.",
        chinese_explanation: "(B) '无精打采的' 一词意味着缺乏精力或热情的。" +
            "<br><br>" +
            "(A) '精力充沛的' 意味着表现出或涉及大量活动或活力的。" +
            "<br><br>" +
            "(C) '有活力的' 意味着强壮、健康和充满精力的。" +
            "<br><br>" +
            "(D) '活跃的' 意味着充满生气和精力的；活跃的和外向的。"
    },
    {
        id: 2,
        question: "The hotel room was __________, with dirty sheets, broken furniture, and a foul smell throughout the space.",
        chinese_question: "酒店房间 __________，床单脏，家具破，整个空间都有一股难闻的气味。",
        answers: [
            { option: "A", answer: "luxurious", chinese_answer: "豪华的", chinese_romanization: "háohuá de" },
            { option: "B", answer: "decent", chinese_answer: "还不错的", chinese_romanization: "hái búcuò de" },
            { option: "C", answer: "pleasant", chinese_answer: "令人愉快的", chinese_romanization: "lìng rén yúkuài de" },
            { option: "D", answer: "execrable", chinese_answer: "极坏的", chinese_romanization: "jí huài de" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'execrable' means extremely bad or unpleasant." +
            "<br><br>" +
            "(A) 'luxurious' means extremely comfortable, elegant, or enjoyable." +
            "<br><br>" +
            "(B) 'decent' means conforming with generally accepted standards of respectable or moral behavior." +
            "<br><br>" +
            "(C) 'pleasant' means giving a sense of happy satisfaction or enjoyment.",
        chinese_explanation: "(D) '极坏的' 意味着非常糟糕或不愉快的。" +
            "<br><br>" +
            "(A) '豪华的' 意味着非常舒适、优雅或令人愉快的。" +
            "<br><br>" +
            "(B) '还不错的' 意味着符合普遍接受的尊敬或道德行为标准。" +
            "<br><br>" +
            "(C) '令人愉快的' 意味着给予一种快乐的满足或享受。"
    },
    {
        id: 3,
        question: "The critic's __________ review of the play upset the actors.",
        chinese_question: "评论家对这部剧的 __________ 评论让演员们很难过。",
        answers: [
            { option: "A", answer: "harsh", chinese_answer: "严厉的", chinese_romanization: "yánlì de" },
            { option: "B", answer: "gentle", chinese_answer: "温柔的", chinese_romanization: "wēnróu de" },
            { option: "C", answer: "vague", chinese_answer: "模糊的", chinese_romanization: "móhú de" },
            { option: "D", answer: "uncertain", chinese_answer: "不确定的", chinese_romanization: "bù quèdìng de" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'harsh' means unpleasantly rough or jarring to the senses." +
            "<br><br>" +
            "(B) 'gentle' means having or showing a mild, kind, or tender temperament or character." +
            "<br><br>" +
            "(C) 'vague' means of uncertain, indefinite, or unclear character or meaning." +
            "<br><br>" +
            "(D) 'uncertain' means not able to be relied on; not known or definite.",
        chinese_explanation: "(A) '严厉的' 意味着令人不愉快的粗糙或刺耳的感觉。" +
            "<br><br>" +
            "(B) '温柔的' 意味着具有或表现出温和、善良或温柔的性情或特征。" +
            "<br><br>" +
            "(C) '模糊的' 意味着不确定、不明确或含糊不清的特性或含义。" +
            "<br><br>" +
            "(D) '不确定的' 意味着不能依靠的；未知的或不确定的。"
    },
    {
        id: 4,
        question: "Making a __________ decision requires careful consideration of all the factors involved.",
        chinese_question: "做出 __________ 决定需要仔细考虑所有相关因素。",
        answers: [
            { option: "A", answer: "negligible", chinese_answer: "微不足道", chinese_romanization: "wēibùzúdào" },
            { option: "B", answer: "minor", chinese_answer: "次要", chinese_romanization: "cìyào" },
            { option: "C", answer: "insignificant", chinese_answer: "不重要", chinese_romanization: "bù zhòngyào" },
            { option: "D", answer: "major", chinese_answer: "重大", chinese_romanization: "zhòngdà" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'major' metaphorically means very important or significant." +
            "<br><br>" +
            "(A) 'negligible' means so small or unimportant as to be not worth considering; insignificant." +
            "<br><br>" +
            "(B) 'minor' means lesser in importance, seriousness, or significance." +
            "<br><br>" +
            "(C) 'insignificant' means too small or unimportant to be worth consideration.",
        chinese_explanation: "(D) '重大' 比喻非常重要或显著的。" +
            "<br><br>" +
            "(A) '微不足道' 意味着太小或不重要，不值得考虑；不重要。" +
            "<br><br>" +
            "(B) '次要' 意味着在重要性、严肃性或显著性方面较低。" +
            "<br><br>" +
            "(C) '不重要' 意味着太小或不重要，不值得考虑。"
    },
    {
        id: 5,
        question: "The __________ author's work continues to inspire readers around the world.",
        chinese_question: "这位 __________ 作家的作品继续激励着全世界的读者。",
        answers: [
            { option: "A", answer: "deceased", chinese_answer: "已故的", chinese_romanization: "yǐ gù de" },
            { option: "B", answer: "living", chinese_answer: "活着的", chinese_romanization: "huózhe de" },
            { option: "C", answer: "active", chinese_answer: "活跃的", chinese_romanization: "huóyuè de" },
            { option: "D", answer: "present", chinese_answer: "当前的", chinese_romanization: "dāngqián de" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'deceased' means no longer living; dead." +
            "<br><br>" +
            "(B) 'living' means alive." +
            "<br><br>" +
            "(C) 'active' means engaging or ready to engage in physically energetic pursuits." +
            "<br><br>" +
            "(D) 'present' means existing or occurring now.",
        chinese_explanation: "(A) '已故的' 意味着不再活着；死去的。" +
            "<br><br>" +
            "(B) '活着的' 意味着活着的。" +
            "<br><br>" +
            "(C) '活跃的' 意味着参与或准备参与体力充沛的活动。" +
            "<br><br>" +
            "(D) '当前的' 意味着现存的或现在发生的。"
    },
    {
        id: 6,
        question: "The judge's __________ expression conveyed the gravity of the situation as she delivered the verdict.",
        chinese_question: "法官的__________表情传达了形势的严峻性，因为她宣布了判决。",
        answers: [
            { option: "A", answer: "cheerful", chinese_answer: "高兴的", chinese_romanization: "gāoxìng de" },
            { option: "B", answer: "casual", chinese_answer: "随意的", chinese_romanization: "suíyì de" },
            { option: "C", answer: "solemn", chinese_answer: "严肃的", chinese_romanization: "yánsù de" },
            { option: "D", answer: "indifferent", chinese_answer: "漠不关心的", chinese_romanization: "mòbùguānxīn de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'solemn' means formal and dignified; serious." +
            "<br><br>" +
            "(A) 'cheerful' means noticeably happy and optimistic." +
            "<br><br>" +
            "(B) 'casual' means relaxed and unconcerned." +
            "<br><br>" +
            "(D) 'indifferent' means having no particular interest or sympathy.",
        chinese_explanation: "(C) '严肃的'一词意味着正式和庄严的；严肃的。" +
            "<br><br>" +
            "(A) '高兴的' 意味着明显的快乐和乐观。" +
            "<br><br>" +
            "(B) '随意的' 意味着放松和不在意的。" +
            "<br><br>" +
            "(D) '漠不关心的' 意味着没有特别的兴趣或同情。"
    },
    {
        id: 7,
        question: "After winning the championship, the team felt __________, celebrating their hard-earned victory.",
        chinese_question: "赢得冠军后，球队感到 __________，庆祝他们来之不易的胜利。",
        answers: [
            { option: "A", answer: "defeated", chinese_answer: "失败的", chinese_romanization: "shībài de" },
            { option: "B", answer: "exultant", chinese_answer: "欢欣鼓舞的", chinese_romanization: "huānxīn gǔwǔ de" },
            { option: "C", answer: "indifferent", chinese_answer: "漠不关心的", chinese_romanization: "mòbù guānxīn de" },
            { option: "D", answer: "disappointed", chinese_answer: "失望的", chinese_romanization: "shīwàng de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'exultant' means triumphantly happy." +
            "<br><br>" +
            "(A) 'defeated' means having been beaten in a battle or other contest." +
            "<br><br>" +
            "(C) 'indifferent' means having no particular interest or sympathy; unconcerned." +
            "<br><br>" +
            "(D) 'disappointed' means sad or displeased because someone or something has failed to fulfill one's hopes or expectations.",
        chinese_explanation: "(B) '欢欣鼓舞的' 一词意味着胜利地快乐。" +
            "<br><br>" +
            "(A) '失败的' 意味着在战斗或其他比赛中被击败。" +
            "<br><br>" +
            "(C) '漠不关心的' 意味着没有特别的兴趣或同情；不关心的。" +
            "<br><br>" +
            "(D) '失望的' 意味着由于某人或某事未能实现自己的希望或期望而感到悲伤或不快。"
    },
    {
        id: 8,
        question: "She watched in __________ as the fireworks lit up the night sky.",
        chinese_question: "她 __________ 地看着烟花照亮夜空。",
        answers: [
            { option: "A", answer: "awe", chinese_answer: "敬畏", chinese_romanization: "jìngwèi" },
            { option: "B", answer: "confusion", chinese_answer: "困惑", chinese_romanization: "kùnhuò" },
            { option: "C", answer: "disappointment", chinese_answer: "失望", chinese_romanization: "shīwàng" },
            { option: "D", answer: "disdain", chinese_answer: "轻蔑", chinese_romanization: "qīngmiè" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'awe' metaphorically means an overwhelming feeling of admiration and respect." +
            "<br><br>" +
            "(B) 'confusion' means lack of understanding; uncertainty." +
            "<br><br>" +
            "(C) 'disappointment' means sadness or displeasure caused by the non-fulfillment of one's hopes or expectations." +
            "<br><br>" +
            "(D) 'disdain' means the feeling that someone or something is unworthy of one's consideration or respect; contempt.",
        chinese_explanation: "(A) '敬畏' 比喻一种压倒性的钦佩和尊重的感觉。" +
            "<br><br>" +
            "(B) '困惑' 意味着缺乏理解；不确定性。" +
            "<br><br>" +
            "(C) '失望' 意味着由于未能实现某人的希望或期望而引起的悲伤或不满。" +
            "<br><br>" +
            "(D) '轻蔑' 意味着认为某人或某物不值得考虑或尊重的感觉；鄙视。"
    },
    {
        id: 9,
        question: "The school adopted an __________ policy, ensuring that students of all backgrounds felt welcomed and valued.",
        chinese_question: "学校采取了 __________ 的政策，确保所有背景的学生都感到受欢迎和被重视。",
        answers: [
            { option: "A", answer: "inclusive", chinese_answer: "包容的", chinese_romanization: "bāoróng de" },
            { option: "B", answer: "exclusive", chinese_answer: "排外的", chinese_romanization: "páiwài de" },
            { option: "C", answer: "discriminatory", chinese_answer: "歧视的", chinese_romanization: "qíshì de" },
            { option: "D", answer: "selective", chinese_answer: "选择性的", chinese_romanization: "xuǎnzé xìng de" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'inclusive' means including all the services or items normally expected or required." +
            "<br><br>" +
            "(B) 'exclusive' means excluding or not admitting other things." +
            "<br><br>" +
            "(C) 'discriminatory' means making or showing an unfair or prejudicial distinction between different categories of people or things." +
            "<br><br>" +
            "(D) 'selective' means relating to or involving the selection of the most suitable or best qualified.",
        chinese_explanation: "(A) '包容的' 意味着包括所有通常期望或需要的服务或项目。" +
            "<br><br>" +
            "(B) '排外的' 意味着排除或不允许其他事物的。" +
            "<br><br>" +
            "(C) '歧视的' 意味着对不同类别的人或事物做出不公平或有偏见的区分。" +
            "<br><br>" +
            "(D) '选择性的' 意味着涉及或包含选择最合适或最有资格的。"
    },
    {
        id: 10,
        question: "The student's __________ comment during the lecture was both rude and out of place.",
        chinese_question: "学生在讲座期间的 __________ 评论既粗鲁又不合时宜。",
        answers: [
            { option: "A", answer: "respectful", chinese_answer: "尊重", chinese_romanization: "zūnzhòng" },
            { option: "B", answer: "polite", chinese_answer: "礼貌", chinese_romanization: "lǐmào" },
            { option: "C", answer: "impertinent", chinese_answer: "无礼", chinese_romanization: "wúlǐ" },
            { option: "D", answer: "appropriate", chinese_answer: "合适", chinese_romanization: "héshì" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'impertinent' means not showing proper respect; rude." +
            "<br><br>" +
            "(A) 'respectful' means feeling or showing deference and respect." +
            "<br><br>" +
            "(B) 'polite' means having or showing behavior that is respectful and considerate of other people." +
            "<br><br>" +
            "(D) 'appropriate' means suitable or proper in the circumstances.",
        chinese_explanation: "(C) '无礼' 意味着不表现出应有的尊重；粗鲁的。" +
            "<br><br>" +
            "(A) '尊重' 意味着感到或表现出敬意和尊重。" +
            "<br><br>" +
            "(B) '礼貌' 意味着具有或表现出尊重和体贴他人的行为。" +
            "<br><br>" +
            "(D) '合适' 意味着在特定情况下适合或合适的。"
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
