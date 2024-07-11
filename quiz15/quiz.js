// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "The __________ investor quickly noticed the market trends and made profitable decisions before others caught on.",
        chinese_question: "这位 __________ 的投资者迅速察觉到市场趋势，并在其他人意识到之前做出了有利可图的决策。",
        answers: [
            { option: "A", answer: "naive", chinese_answer: "天真的", chinese_romanization: "tiānzhēn de" },
            { option: "B", answer: "clumsy", chinese_answer: "笨拙的", chinese_romanization: "bènzhuō de" },
            { option: "C", answer: "ignorant", chinese_answer: "无知的", chinese_romanization: "wúzhī de" },
            { option: "D", answer: "astute", chinese_answer: "精明的", chinese_romanization: "jīngmíng de" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'astute' means having or showing an ability to accurately assess situations or people and turn this to one's advantage." +
            "<br><br>" +
            "(A) 'naive' means showing a lack of experience, wisdom, or judgment." +
            "<br><br>" +
            "(B) 'clumsy' means awkward in movement or in handling things." +
            "<br><br>" +
            "(C) 'ignorant' means lacking knowledge or awareness in general.",
        chinese_explanation: "(D) '精明的' 意味着具有或表现出能够准确评估情况或人物并将其转化为自己优势的能力。" +
            "<br><br>" +
            "(A) '天真的' 意味着缺乏经验、智慧或判断力。" +
            "<br><br>" +
            "(B) '笨拙的' 意味着在移动或处理事物时很笨拙。" +
            "<br><br>" +
            "(C) '无知的' 意味着缺乏一般的知识或意识。"
    },
    {
        id: 2,
        question: "The architect presented an __________ design for the new museum, featuring intricate details and innovative structures.",
        chinese_question: "建筑师提出了一个 __________ 的新博物馆设计，具有复杂的细节和创新的结构。",
        answers: [
            { option: "A", answer: "simple", chinese_answer: "简单的", chinese_romanization: "jiǎndān de" },
            { option: "B", answer: "crude", chinese_answer: "粗糙的", chinese_romanization: "cūcāo de" },
            { option: "C", answer: "elaborate", chinese_answer: "精心设计的", chinese_romanization: "jīngxīn shèjì de" },
            { option: "D", answer: "basic", chinese_answer: "基本的", chinese_romanization: "jīběn de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'elaborate' means involving many carefully arranged parts or details; detailed and complicated in design and planning." +
            "<br><br>" +
            "(A) 'simple' means easily understood or done; presenting no difficulty." +
            "<br><br>" +
            "(B) 'crude' means in a natural or raw state; not yet processed or refined." +
            "<br><br>" +
            "(D) 'basic' means forming an essential foundation or starting point; fundamental.",
        chinese_explanation: "(C) '精心设计的' 意味着包含许多精心安排的部分或细节；设计和计划上详细和复杂的。" +
            "<br><br>" +
            "(A) '简单的' 意味着容易理解或完成的；没有困难的。" +
            "<br><br>" +
            "(B) '粗糙的' 意味着处于自然或原始状态；尚未加工或精炼的。" +
            "<br><br>" +
            "(D) '基本的' 意味着形成基本基础或起点的；基础的。"
    },
    {
        id: 3,
        question: "The medicine was so __________ that just a small dose was enough to alleviate the patient's pain.",
        chinese_question: "这种药非常 __________，只需少量剂量就足以缓解病人的疼痛。",
        answers: [
            { option: "A", answer: "weak", chinese_answer: "弱的", chinese_romanization: "ruò de" },
            { option: "B", answer: "potent", chinese_answer: "强效的", chinese_romanization: "qiángxiào de" },
            { option: "C", answer: "mild", chinese_answer: "温和的", chinese_romanization: "wēnhé de" },
            { option: "D", answer: "ineffective", chinese_answer: "无效的", chinese_romanization: "wúxiào de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'potent' means having great power, influence, or effect." +
            "<br><br>" +
            "(A) 'weak' means lacking the power to perform physically demanding tasks; having little physical strength or energy." +
            "<br><br>" +
            "(C) 'mild' means not severe, serious, or harsh." +
            "<br><br>" +
            "(D) 'ineffective' means not producing any significant or desired effect.",
        chinese_explanation: "(B) '强效的' 意味着具有强大力量、影响或效果。" +
            "<br><br>" +
            "(A) '弱的' 意味着缺乏执行体力任务的力量；体力或能量很少。" +
            "<br><br>" +
            "(C) '温和的' 意味着不严重、严重或苛刻。" +
            "<br><br>" +
            "(D) '无效的' 意味着没有产生任何显着或预期效果。"
    },
    {
        id: 4,
        question: "Her __________ outlook on life often led her to trust people too easily, sometimes resulting in disappointment.",
        chinese_question: "她对生活的 __________ 态度常常使她过于轻信他人，有时会导致失望。",
        answers: [
            { option: "A", answer: "cynical", chinese_answer: "愤世嫉俗", chinese_romanization: "fènshì jísú" },
            { option: "B", answer: "naive", chinese_answer: "天真", chinese_romanization: "tiānzhēn" },
            { option: "C", answer: "skeptical", chinese_answer: "怀疑", chinese_romanization: "huáiyí" },
            { option: "D", answer: "wary", chinese_answer: "谨慎", chinese_romanization: "jǐnshèn" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'naive' means showing a lack of experience, wisdom, or judgment." +
            "<br><br>" +
            "(A) 'cynical' means believing that people are motivated by self-interest; distrustful of human sincerity or integrity." +
            "<br><br>" +
            "(C) 'skeptical' means not easily convinced; having doubts or reservations." +
            "<br><br>" +
            "(D) 'wary' means feeling or showing caution about possible dangers or problems.",
        chinese_explanation: "(B) '天真' 一词意味着表现出缺乏经验、智慧或判断。" +
            "<br><br>" +
            "(A) '愤世嫉俗' 意味着认为人们都是出于私利动机；不信任人类的真诚或正直。" +
            "<br><br>" +
            "(C) '怀疑' 意味着不容易相信；有怀疑或保留意见。" +
            "<br><br>" +
            "(D) '谨慎' 意味着对可能的危险或问题表现出谨慎。"
    },
    {
        id: 5,
        question: "The smell of the rotten food was __________, making everyone in the room feel nauseous.",
        chinese_question: "腐烂食物的气味令人 __________，让房间里的每个人都感到恶心。",
        answers: [
            { option: "A", answer: "pleasant", chinese_answer: "令人愉快的", chinese_romanization: "lìng rén yúkuài de" },
            { option: "B", answer: "appealing", chinese_answer: "吸引人的", chinese_romanization: "xīyǐn rén de" },
            { option: "C", answer: "fragrant", chinese_answer: "芳香的", chinese_romanization: "fāngxiāng de" },
            { option: "D", answer: "repugnant", chinese_answer: "令人厌恶的", chinese_romanization: "lìng rén yànwù de" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'repugnant' means extremely distasteful; unacceptable." +
            "<br><br>" +
            "(A) 'pleasant' means giving a sense of happy satisfaction or enjoyment." +
            "<br><br>" +
            "(B) 'appealing' means attractive or interesting." +
            "<br><br>" +
            "(C) 'fragrant' means having a pleasant or sweet smell.",
        chinese_explanation: "(D) '令人厌恶的' 一词意味着极其令人反感的；不可接受的。" +
            "<br><br>" +
            "(A) '令人愉快的' 意味着给人一种快乐满足或享受的感觉。" +
            "<br><br>" +
            "(B) '吸引人的' 意味着有吸引力或有趣的。" +
            "<br><br>" +
            "(C) '芳香的' 意味着有令人愉快或甜美的气味。"
    },
    {
        id: 6,
        question: "He was __________ with worry when he heard about the accident involving his family.",
        chinese_question: "当他听说家人卷入事故时，他 __________ 了。",
        answers: [
            { option: "A", answer: "calm", chinese_answer: "冷静的", chinese_romanization: "lěngjìng de" },
            { option: "B", answer: "indifferent", chinese_answer: "漠不关心的", chinese_romanization: "mòbùguānxīn de" },
            { option: "C", answer: "distraught", chinese_answer: "心烦意乱的", chinese_romanization: "xīnfán yì luàn de" },
            { option: "D", answer: "relaxed", chinese_answer: "放松的", chinese_romanization: "fàngsōng de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'distraught' means deeply upset and agitated." +
            "<br><br>" +
            "(A) 'calm' means not showing or feeling nervousness, anger, or other strong emotions." +
            "<br><br>" +
            "(B) 'indifferent' means having no particular interest or sympathy; unconcerned." +
            "<br><br>" +
           "(D) 'relaxed' means free from tension and anxiety.",
        chinese_explanation: "(C) '心烦意乱的' 一词意味着非常沮丧和不安。" +
            "<br><br>" +
            "(A) '冷静的' 意味着不表现或感到紧张、愤怒或其他强烈情绪的。" +
            "<br><br>" +
            "(B) '漠不关心的' 意味着没有特别兴趣或同情的；不关心的。" +
            "<br><br>" +
            "(D) '放松的' 意味着没有紧张和焦虑的。"
    },
    {
        id: 7,
        question: "Despite the clear evidence presented, he remained __________ in his opinion, refusing to change his mind.",
        chinese_question: "尽管有明确的证据摆在眼前，他仍然 __________ 地坚持自己的看法，拒绝改变主意。",
        answers: [
            { option: "A", answer: "flexible", chinese_answer: "灵活的", chinese_romanization: "línghuó de" },
            { option: "B", answer: "obstinate", chinese_answer: "顽固的", chinese_romanization: "wángù de" },
            { option: "C", answer: "compliant", chinese_answer: "顺从的", chinese_romanization: "shùncóng de" },
            { option: "D", answer: "agreeable", chinese_answer: "愉快的", chinese_romanization: "yúkuài de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'obstinate' means stubbornly refusing to change one's opinion or chosen course of action, despite attempts to persuade one to do so." +
            "<br><br>" +
            "(A) 'flexible' means capable of bending easily without breaking." +
            "<br><br>" +
           "(C) 'compliant' means inclined to agree with others or obey rules, especially to an excessive degree; acquiescent." +
            "<br><br>" +
            "(D) 'agreeable' means willing to agree to something.",
        chinese_explanation: "(B) '顽固的' 一词意味着固执地拒绝改变自己的看法或选择的行动，尽管有人试图说服他。" +
            "<br><br>" +
            "(A) '灵活的' 意味着能够轻松弯曲而不断裂。" +
            "<br><br>" +
            "(C) '顺从的' 意味着倾向于同意他人或遵守规则，尤其是过度地；顺从的。" +
            "<br><br>" +
            "(D) '愉快的' 意味着愿意同意某事的。"
    },
    {
        id: 8,
        question: "The old book's pages had become __________ with age, crumbling at the slightest touch.",
        chinese_question: "这本旧书的书页由于年代久远变得 __________，一碰就碎。",
        answers: [
            { option: "A", answer: "flexible", chinese_answer: "柔韧的", chinese_romanization: "róurèn de" },
            { option: "B", answer: "soft", chinese_answer: "柔软的", chinese_romanization: "róuruǎn de" },
            { option: "C", answer: "durable", chinese_answer: "耐用的", chinese_romanization: "nàiyòng de" },
            { option: "D", answer: "brittle", chinese_answer: "脆弱的", chinese_romanization: "cuìruò de" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'brittle' means hard but liable to break or shatter easily." +
            "<br><br>" +
            "(A) 'flexible' means capable of bending easily without breaking." +
            "<br><br>" +
            "(B) 'soft' means easy to mold, cut, compress, or fold." +
            "<br><br>" +
            "(C) 'durable' means able to withstand wear, pressure, or damage; hard-wearing.",
        chinese_explanation: "(D) '脆弱的' 意味着坚硬但容易断裂或破碎。" +
            "<br><br>" +
            "(A) '柔韧的' 意味着能够轻松弯曲而不断裂。" +
            "<br><br>" +
            "(B) '柔软的' 意味着容易塑形、切割、压缩或折叠。" +
            "<br><br>" +
            "(C) '耐用的' 意味着能够承受磨损、压力或损坏；耐磨的。"
    },
    {
        id: 9,
        question: "Bringing an umbrella was __________, as the forecast predicted clear skies all day.",
        chinese_question: "带伞是 __________ 的，因为预报预测全天晴朗。",
        answers: [
            { option: "A", answer: "essential", chinese_answer: "必需的", chinese_romanization: "bìxū de" },
            { option: "B", answer: "unnecessary", chinese_answer: "不必要的", chinese_romanization: "bù bìyào de" },
            { option: "C", answer: "mandatory", chinese_answer: "强制性的", chinese_romanization: "qiángzhì xìng de" },
            { option: "D", answer: "helpful", chinese_answer: "有帮助的", chinese_romanization: "yǒu bāngzhù de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'unnecessary' means not needed." +
            "<br><br>" +
            "(A) 'essential' means absolutely necessary; extremely important." +
            "<br><br>" +
            "(C) 'mandatory' means required by law or mandate; compulsory." +
            "<br><br>" +
            "(D) 'helpful' means giving or ready to give help.",
        chinese_explanation: "(B) '不必要的' 一词意味着不需要的。" +
            "<br><br>" +
            "(A) '必需的' 意味着绝对必要的；非常重要的。" +
            "<br><br>" +
            "(C) '强制性的' 意味着依法或命令要求的；强制性的。" +
            "<br><br>" +
            "(D) '有帮助的' 意味着给予或准备给予帮助的。"
    },
    {
        id: 10,
        question: "The movie received __________ reviews for its groundbreaking special effects and compelling storyline.",
        chinese_question: "这部电影因其开创性的特效和引人入胜的故事情节而获得了 __________ 的评价。",
        answers: [
            { option: "A", answer: "boring", chinese_answer: "无聊的", chinese_romanization: "wúliáo de" },
            { option: "B", answer: "mediocre", chinese_answer: "普通的", chinese_romanization: "pǔtōng de" },
            { option: "C", answer: "sensational", chinese_answer: "轰动的", chinese_romanization: "hōngdòng de" },
            { option: "D", answer: "unremarkable", chinese_answer: "不显眼的", chinese_romanization: "bù xiǎnyǎn de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'sensational' means causing great public interest and excitement." +
            "<br><br>" +
            "(A) 'boring' means not interesting; tedious." +
            "<br><br>" +
            "(B) 'mediocre' means of only moderate quality; not very good." +
            "<br><br>" +
            "(D) 'unremarkable' means not particularly interesting or surprising.",
        chinese_explanation: "(C) '轰动的' 意味着引起公众极大兴趣和兴奋的。" +
            "<br><br>" +
            "(A) '无聊的' 意味着不有趣；乏味的。" +
            "<br><br>" +
            "(B) '普通的' 意味着质量一般的；不太好的。" +
            "<br><br>" +
            "(D) '不显眼的' 意味着不特别有趣或令人惊讶的。"
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
