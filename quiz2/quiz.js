// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "Her __________ comments were meant to undermine his confidence and make him feel inferior.",
        chinese_question: "她的 __________ 评论旨在削弱他的信心，让他感到自卑。",
        answers: [
            { option: "A", answer: "kind", chinese_answer: "友好的", chinese_romanization: "yǒuhǎo de" },
            { option: "B", answer: "malicious", chinese_answer: "恶意的", chinese_romanization: "èyì de" },
            { option: "C", answer: "supportive", chinese_answer: "支持的", chinese_romanization: "zhīchí de" },
            { option: "D", answer: "neutral", chinese_answer: "中立的", chinese_romanization: "zhōnglì de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'malicious' figuratively means showing spite and the desire to cause harm." +
            "<br><br>" +
            "(A) 'kind' means having or showing a friendly, generous, and considerate nature." +
            "<br><br>" +
            "(C) 'supportive' means providing encouragement or emotional help." +
            "<br><br>" +
            "(D) 'neutral' means not supporting or helping either side in a conflict or disagreement.",
        chinese_explanation: "(B) '恶意的' 在比喻意义上意味着表现出恶意和造成伤害的愿望。" +
            "<br><br>" +
            "(A) '友好的' 意味着具有或表现出友好、慷慨和体贴的性质。" +
            "<br><br>" +
            "(C) '支持的' 意味着提供鼓励或情感帮助的。" +
            "<br><br>" +
            "(D) '中立的' 意味着在冲突或分歧中不支持或帮助任何一方的。"
    },
    {
        id: 2,
        question: "Her work was always __________, earning her a reputation for reliability.",
        chinese_question: "她的工作总是 __________ 的，因此获得了可靠的声誉。",
        answers: [
            { option: "A", answer: "consistent", chinese_answer: "一致的", chinese_romanization: "yīzhì de" },
            { option: "B", answer: "erratic", chinese_answer: "不稳定的", chinese_romanization: "bù wěndìng de" },
            { option: "C", answer: "sporadic", chinese_answer: "零星的", chinese_romanization: "língxīng de" },
            { option: "D", answer: "unpredictable", chinese_answer: "不可预测的", chinese_romanization: "bùkě yùcè de" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'consistent' means acting or done in the same way over time, especially so as to be fair or accurate." +
            "<br><br>" +
            "(B) 'erratic' means not even or regular in pattern or movement." +
            "<br><br>" +
            "(C) 'sporadic' means occurring at irregular intervals or only in a few places." +
            "<br><br>" +
            "(D) 'unpredictable' means not able to be predicted.",
        chinese_explanation: "(A) '一致的' 意味着以相同的方式行动或完成，尤其是为了公平或准确。" +
            "<br><br>" +
            "(B) '不稳定的' 意味着模式或运动不均匀或不规则。" +
            "<br><br>" +
            "(C) '零星的' 意味着在不规则的时间间隔或仅在少数地方发生。" +
            "<br><br>" +
            "(D) '不可预测的' 意味着无法预测的。"
    },
    {
        id: 3,
        question: "The __________ athletes were selected to represent their country in the international competition.",
        chinese_question: "这些 __________ 运动员被选中代表国家参加国际比赛。",
        answers: [
            { option: "A", answer: "average", chinese_answer: "平均的", chinese_romanization: "píngjūn de" },
            { option: "B", answer: "mediocre", chinese_answer: "普通的", chinese_romanization: "pǔtōng de" },
            { option: "C", answer: "elite", chinese_answer: "精英的", chinese_romanization: "jīngyīng de" },
            { option: "D", answer: "ordinary", chinese_answer: "普通的", chinese_romanization: "pǔtōng de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'elite' means a select group that is superior in terms of ability or qualities to the rest of a group or society." +
            "<br><br>" +
            "(A) 'average' means having qualities that are seen as typical; normal." +
            "<br><br>" +
            "(B) 'mediocre' means of only moderate quality; not very good." +
            "<br><br>" +
            "(D) 'ordinary' means with no special or distinctive features; normal.",
        chinese_explanation: "(C) '精英的' 一词意味着在能力或素质方面优于群体或社会其他成员的一组选定的人。" +
            "<br><br>" +
            "(A) '平均的' 意味着具有典型的品质；正常的。" +
            "<br><br>" +
            "(B) '普通的' 意味着质量一般的；不是很好。" +
            "<br><br>" +
            "(D) '普通的' 意味着没有特别或独特的特征；正常的。"
    },
    {
        id: 4,
        question: "With a __________ smile, he apologized for his mistake, rubbing the back of his neck and avoiding eye contact, clearly regretting his actions.",
        chinese_question: "他带着 __________ 的微笑为自己的错误道歉，搓着脖子后面，避免眼神接触，显然对自己的行为感到后悔。",
        answers: [
            { option: "A", answer: "cheerful", chinese_answer: "愉快的", chinese_romanization: "yúkuài de" },
            { option: "B", answer: "indifferent", chinese_answer: "冷漠的", chinese_romanization: "lěngmò de" },
            { option: "C", answer: "enthusiastic", chinese_answer: "热情的", chinese_romanization: "rèqíng de" },
            { option: "D", answer: "rueful", chinese_answer: "后悔的", chinese_romanization: "hòuhuǐ de" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'rueful' means expressing sorrow or regret, especially in a slightly humorous way." +
            "<br><br>" +
            "(A) 'cheerful' means noticeably happy and optimistic." +
            "<br><br>" +
            "(B) 'indifferent' means having no particular interest or sympathy; unconcerned." +
            "<br><br>" +
            "(C) 'enthusiastic' means having or showing intense and eager enjoyment, interest, or approval.",
        chinese_explanation: "(D) '后悔的' 意味着表达悲伤或遗憾，尤其是略带幽默的方式。" +
            "<br><br>" +
            "(A) '愉快的' 意味着明显的快乐和乐观。" +
            "<br><br>" +
            "(B) '冷漠的' 意味着没有特别的兴趣或同情；不关心的。" +
            "<br><br>" +
            "(C) '热情的' 意味着拥有或表现出强烈和热切的享受、兴趣或赞同。"
    },
    {
        id: 5,
        question: "Her dress was so __________ that it drew everyone's attention the moment she walked into the room.",
        chinese_question: "她的裙子如此 __________，她一走进房间就吸引了所有人的注意。",
        answers: [
            { option: "A", answer: "modest", chinese_answer: "朴素", chinese_romanization: "pǔsù" },
            { option: "B", answer: "simple", chinese_answer: "简单", chinese_romanization: "jiǎndān" },
            { option: "C", answer: "ostentatious", chinese_answer: "炫耀", chinese_romanization: "xuànyào" },
            { option: "D", answer: "understated", chinese_answer: "低调", chinese_romanization: "dīdiào" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'ostentatious' means characterized by vulgar or pretentious display; designed to impress or attract notice." +
            "<br><br>" +
            "(A) 'modest' means unassuming in the estimation of one's abilities or achievements." +
            "<br><br>" +
            "(B) 'simple' means easily understood or done; presenting no difficulty." +
            "<br><br>" +
            "(D) 'understated' means presented or expressed in a subtle and effective way.",
        chinese_explanation: "(C) '炫耀' 一词意味着以粗俗或自命不凡的展示为特征；设计来打动或吸引注意。" +
            "<br><br>" +
            "(A) '朴素' 意味着对自己的能力或成就评价不高。" +
            "<br><br>" +
            "(B) '简单' 意味着容易理解或做；没有困难。" +
            "<br><br>" +
            "(D) '低调' 意味着以微妙而有效的方式呈现或表达。"
    },
    {
        id: 6,
        question: "The cleaner used an __________ scrub to remove the stubborn stains from the kitchen floor.",
        chinese_question: "清洁工使用 __________ 的刷子来清除厨房地板上的顽固污渍。",
        answers: [
            { option: "A", answer: "gentle", chinese_answer: "温和", chinese_romanization: "wēnhé" },
            { option: "B", answer: "abrasive", chinese_answer: "粗糙", chinese_romanization: "cūcāo" },
            { option: "C", answer: "smooth", chinese_answer: "光滑", chinese_romanization: "guānghuá" },
            { option: "D", answer: "soft", chinese_answer: "柔软", chinese_romanization: "róuruǎn" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'abrasive' means capable of polishing or cleaning a hard surface by rubbing or grinding." +
            "<br><br>" +
            "(A) 'gentle' means mild in temperament or behavior; kind or tender." +
            "<br><br>" +
            "(C) 'smooth' means having an even and regular surface." +
            "<br><br>" +
            "(D) 'soft' means easy to mold, cut, compress, or fold; not hard or firm to the touch.",
        chinese_explanation: "(B) '粗糙' 一词意味着通过摩擦或研磨可以抛光或清洁硬表面。" +
            "<br><br>" +
            "(A) '温和' 意味着性情温和或行为温柔；亲切或温柔。" +
            "<br><br>" +
            "(C) '光滑' 意味着表面平整和规则。" +
            "<br><br>" +
            "(D) '柔软' 意味着容易塑造、切割、压缩或折叠；触感不硬或坚固。"
    },
    {
        id: 7,
        question: "She proved herself to be a __________ lawyer, successfully handling complex cases with ease.",
        chinese_question: "她证明自己是一名 __________ 的律师，轻松地处理复杂案件。",
        answers: [
            { option: "A", answer: "incompetent", chinese_answer: "无能", chinese_romanization: "wúnéng" },
            { option: "B", answer: "naive", chinese_answer: "天真", chinese_romanization: "tiānzhēn" },
            { option: "C", answer: "competent", chinese_answer: "有能力", chinese_romanization: "yǒu nénglì" },
            { option: "D", answer: "inexperienced", chinese_answer: "无经验", chinese_romanization: "wú jīngyàn" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'competent' means having the necessary ability, knowledge, or skill to do something successfully." +
            "<br><br>" +
            "(A) 'incompetent' means not having or showing the necessary skills to do something successfully." +
            "<br><br>" +
            "(B) 'naive' means showing a lack of experience, wisdom, or judgment." +
            "<br><br>" +
            "(D) 'inexperienced' means lacking experience.",
        chinese_explanation: "(C) '有能力' 一词意味着具备成功完成某事所需的能力、知识或技能。" +
            "<br><br>" +
            "(A) '无能' 意味着没有或没有表现出成功完成某事所需的技能。" +
            "<br><br>" +
            "(B) '天真' 意味着表现出缺乏经验、智慧或判断。" +
            "<br><br>" +
            "(D) '无经验' 意味着缺乏经验。"
    },
    {
        id: 8,
        question: "His __________ plan to get promoted involved sabotaging his colleagues and spreading false rumors.",
        chinese_question: "他为升职而制定的 __________ 计划涉及破坏同事和散布虚假谣言。",
        answers: [
            { option: "A", answer: "honest", chinese_answer: "诚实", chinese_romanization: "chéngshí" },
            { option: "B", answer: "straightforward", chinese_answer: "直率", chinese_romanization: "zhíshuài" },
            { option: "C", answer: "devious", chinese_answer: "狡猾", chinese_romanization: "jiǎohuá" },
            { option: "D", answer: "sincere", chinese_answer: "真诚", chinese_romanization: "zhēnchéng" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'devious' means showing a skillful use of underhanded tactics to achieve goals." +
            "<br><br>" +
            "(A) 'honest' means free of deceit and untruthfulness; sincere." +
            "<br><br>" +
            "(B) 'straightforward' means uncomplicated and easy to do or understand." +
            "<br><br>" +
            "(D) 'sincere' means free from pretense or deceit; genuine.",
        chinese_explanation: "(C) '狡猾' 一词意味着巧妙地使用不正当的手段来达到目标。" +
            "<br><br>" +
            "(A) '诚实' 意味着没有欺骗和虚假；真诚。" +
            "<br><br>" +
            "(B) '直率' 意味着简单易做或易懂。" +
            "<br><br>" +
            "(D) '真诚' 意味着没有虚伪或欺骗；真实。"
    },
    {
        id: 9,
        question: "Completing the marathon was an __________ task, requiring months of training and incredible endurance.",
        chinese_question: "完成马拉松是一项 __________ 的任务，需要数月的训练和惊人的耐力。",
        answers: [
            { option: "A", answer: "easy", chinese_answer: "容易的", chinese_romanization: "róngyì de" },
            { option: "B", answer: "light", chinese_answer: "轻松的", chinese_romanization: "qīngsōng de" },
            { option: "C", answer: "arduous", chinese_answer: "艰难的", chinese_romanization: "jiānnán de" },
            { option: "D", answer: "simple", chinese_answer: "简单的", chinese_romanization: "jiǎndān de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'arduous' means involving or requiring strenuous effort; difficult and tiring." +
            "<br><br>" +
            "(A) 'easy' means achieved without great effort; presenting few difficulties." +
            "<br><br>" +
            "(B) 'light' means of little weight; not heavy." +
            "<br><br>" +
            "(D) 'simple' means easily understood or done; presenting no difficulty.",
        chinese_explanation: "(C) '艰难的' 一词意味着需要费力的；困难和累人的。" +
            "<br><br>" +
            "(A) '容易的' 意味着无需费力地完成的；呈现出很少困难的。" +
            "<br><br>" +
            "(B) '轻松的' 意味着重量很轻；不重的。" +
            "<br><br>" +
            "(D) '简单的' 意味着容易理解或完成的；没有难度的。"
    },
    {
        id: 10,
        question: "The artist's latest installation was so __________ that it left many viewers puzzled and intrigued by its unusual design.",
        chinese_question: "这位艺术家的最新装置作品如此 __________，以至于让许多观众感到困惑和好奇它那不寻常的设计。",
        answers: [
            { option: "A", answer: "ordinary", chinese_answer: "普通的", chinese_romanization: "pǔtōng de" },
            { option: "B", answer: "bizarre", chinese_answer: "奇异的", chinese_romanization: "qíyì de" },
            { option: "C", answer: "typical", chinese_answer: "典型的", chinese_romanization: "diǎnxíng de" },
            { option: "D", answer: "common", chinese_answer: "常见的", chinese_romanization: "chángjiàn de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'bizarre' means very strange or unusual, especially so as to cause interest or amusement." +
            "<br><br>" +
            "(A) 'ordinary' means with no special or distinctive features; normal." +
            "<br><br>" +
            "(C) 'typical' means having the distinctive qualities of a particular type of person or thing." +
            "<br><br>" +
            "(D) 'common' means occurring, found, or done often; prevalent.",
        chinese_explanation: "(B) '奇异的' 一词意味着非常奇怪或不寻常，特别是引起兴趣或娱乐的。" +
            "<br><br>" +
            "(A) '普通的' 意味着没有特别或独特的特征；正常的。" +
            "<br><br>" +
            "(C) '典型的' 意味着具有某种类型的人或事物的独特品质。" +
            "<br><br>" +
            "(D) '常见的' 意味着经常发生、发现或完成的；普遍的。"
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
