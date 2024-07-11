// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "Her __________ determination to finish the marathon, despite the pain, inspired everyone around her.",
        chinese_question: "尽管疼痛，她完成马拉松的 __________ 决心激励了周围的每个人。",
        answers: [
            { option: "A", answer: "weak", chinese_answer: "虚弱的", chinese_romanization: "xūruò de" },
            { option: "B", answer: "fleeting", chinese_answer: "短暂的", chinese_romanization: "duǎnzàn de" },
            { option: "C", answer: "tenacious", chinese_answer: "坚韧的", chinese_romanization: "jiānrèn de" },
            { option: "D", answer: "indifferent", chinese_answer: "冷漠的", chinese_romanization: "lěngmò de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'tenacious' means tending to keep a firm hold of something; clinging or adhering closely." +
            "<br><br>" +
            "(A) 'weak' means lacking the power to perform physically demanding tasks; lacking physical strength and energy." +
            "<br><br>" +
            "(B) 'fleeting' means lasting for a very short time." +
            "<br><br>" +
            "(D) 'indifferent' means having no particular interest or sympathy; unconcerned.",
        chinese_explanation: "(C) '坚韧的' 一词意味着倾向于紧紧抓住某物；紧紧依附。" +
            "<br><br>" +
            "(A) '虚弱的' 意味着缺乏执行体力任务的力量；缺乏体力和精力。" +
            "<br><br>" +
            "(B) '短暂的' 意味着持续时间非常短。" +
            "<br><br>" +
            "(D) '冷漠的' 意味着没有特别的兴趣或同情；不关心的。"
    },
    {
        id: 2,
        question: "She proved to be a __________ leader by effectively managing her team and delivering successful projects on time.",
        chinese_question: "她证明自己是一个 __________ 的领导者，通过有效管理团队并按时交付成功的项目。",
        answers: [
            { option: "A", answer: "incapable", chinese_answer: "无能力的", chinese_romanization: "wú nénglì de" },
            { option: "B", answer: "capable", chinese_answer: "有能力的", chinese_romanization: "yǒu nénglì de" },
            { option: "C", answer: "inefficient", chinese_answer: "无效率的", chinese_romanization: "wú xiàolǜ de" },
            { option: "D", answer: "unskilled", chinese_answer: "无技能的", chinese_romanization: "wú jìnéng de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'capable' means having the ability, fitness, or quality necessary to do or achieve a specified thing." +
            "<br><br>" +
            "(A) 'incapable' means unable to do or achieve (something)." +
            "<br><br>" +
            "(C) 'inefficient' means not achieving maximum productivity; wasting or failing to make the best use of time or resources." +
            "<br><br>" +
            "(D) 'unskilled' means not having or requiring special skill or training.",
        chinese_explanation: "(B) '有能力的' 一词意味着具有完成或实现特定事情的能力、适应性或品质。" +
            "<br><br>" +
            "(A) '无能力的' 意味着不能完成或实现（某事）。" +
            "<br><br>" +
            "(C) '无效率的' 意味着未能达到最大生产力；浪费或未能充分利用时间或资源。" +
            "<br><br>" +
            "(D) '无技能的' 意味着没有或不需要特殊技能或培训。"
    },
    {
        id: 3,
        question: "He felt __________ about taking the new job, unsure if it was the right move for his career.",
        chinese_question: "他对是否接受新工作感到__________，不确定这是否是他职业生涯的正确举动。",
        answers: [
            { option: "A", answer: "confident", chinese_answer: "自信的", chinese_romanization: "zìxìn de" },
            { option: "B", answer: "assertive", chinese_answer: "坚定的", chinese_romanization: "jiàndìng de" },
            { option: "C", answer: "hesitant", chinese_answer: "犹豫的", chinese_romanization: "yóuyù de" },
            { option: "D", answer: "decisive", chinese_answer: "果断的", chinese_romanization: "guǒduàn de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'hesitant' means tentative, unsure, or slow in acting or speaking. Figuratively, it can mean being uncertain and indecisive." +
            "<br><br>" +
            "(A) 'confident' means feeling or showing confidence in oneself; self-assured." +
            "<br><br>" +
            "(B) 'assertive' means having or showing a confident and forceful personality." +
            "<br><br>" +
            "(D) 'decisive' means settling an issue; producing a definite result.",
        chinese_explanation: "(C) '犹豫的'一词意味着在行动或说话时犹豫、不确定或缓慢的。比喻地，它可以表示不确定和优柔寡断的。" +
            "<br><br>" +
            "(A) '自信的' 意味着对自己有信心的；自信的。" +
            "<br><br>" +
            "(B) '坚定的' 意味着拥有或表现出自信和强势个性的。" +
            "<br><br>" +
            "(D) '果断的' 意味着解决一个问题；产生明确结果的。"
    },
    {
        id: 4,
        question: "It is __________ to save some money for emergencies, ensuring financial stability during unexpected situations.",
        chinese_question: "存一些钱以备紧急情况是 __________ 的，确保在意外情况下的财务稳定。",
        answers: [
            { option: "A", answer: "reckless", chinese_answer: "鲁莽的", chinese_romanization: "lǔmǎng de" },
            { option: "B", answer: "imprudent", chinese_answer: "不谨慎的", chinese_romanization: "bù jǐnshèn de" },
            { option: "C", answer: "prudent", chinese_answer: "谨慎的", chinese_romanization: "jǐnshèn de" },
            { option: "D", answer: "careless", chinese_answer: "粗心的", chinese_romanization: "cūxīn de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'prudent' means acting with or showing care and thought for the future." +
            "<br><br>" +
            "(A) 'reckless' means without thinking or caring about the consequences of an action." +
            "<br><br>" +
            "(B) 'imprudent' means not showing care for the consequences of an action; rash." +
            "<br><br>" +
            "(D) 'careless' means not giving sufficient attention or thought to avoiding harm or errors.",
        chinese_explanation: "(C) '谨慎的' 一词意味着对未来表现出或表现出关心和思考。" +
            "<br><br>" +
            "(A) '鲁莽的' 意味着不考虑或不关心行动的后果。" +
            "<br><br>" +
            "(B) '不谨慎的' 意味着不关心行动的后果；草率的。" +
            "<br><br>" +
            "(D) '粗心的' 意味着没有给予足够的注意或考虑以避免伤害或错误。"
    },
    {
        id: 5,
        question: "His __________ remarks about the homeless demonstrated a lack of empathy and understanding.",
        chinese_question: "他对无家可归者的 __________ 言论显示出缺乏同情心和理解。",
        answers: [
            { option: "A", answer: "callous", chinese_answer: "无情的", chinese_romanization: "wúqíng de" },
            { option: "B", answer: "sensitive", chinese_answer: "敏感的", chinese_romanization: "mǐngǎn de" },
            { option: "C", answer: "compassionate", chinese_answer: "有同情心的", chinese_romanization: "yǒu tóngqíng xīn de" },
            { option: "D", answer: "kind", chinese_answer: "善良的", chinese_romanization: "shànliáng de" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'callous' means showing or having an insensitive and cruel disregard for others." +
            "<br><br>" +
            "(B) 'sensitive' means having or displaying a quick and delicate appreciation of others' feelings." +
            "<br><br>" +
            "(C) 'compassionate' means feeling or showing sympathy and concern for others." +
            "<br><br>" +
            "(D) 'kind' means having or showing a friendly, generous, and considerate nature.",
        chinese_explanation: "(A) '无情的' 一词意味着显示或具有对他人的冷漠和残酷的忽视。" +
            "<br><br>" +
            "(B) '敏感的' 意味着对他人的感情有快速和细腻的欣赏。" +
            "<br><br>" +
            "(C) '有同情心的' 意味着对他人表示同情和关心。" +
            "<br><br>" +
            "(D) '善良的' 意味着具有或表现出友好、慷慨和体贴的性格。"
    },
    {
        id: 6,
        question: "The team worked together in a __________ manner, ensuring that every member was on the same page.",
        chinese_question: "团队以 __________ 的方式一起工作，确保每个成员都在同一页面上。",
        answers: [
            { option: "A", answer: "fragmented", chinese_answer: "破碎的", chinese_romanization: "pòsuì de" },
            { option: "B", answer: "divisive", chinese_answer: "分裂的", chinese_romanization: "fēnliè de" },
            { option: "C", answer: "cohesive", chinese_answer: "有凝聚力的", chinese_romanization: "yǒu níngjù lì de" },
            { option: "D", answer: "disjointed", chinese_answer: "脱节的", chinese_romanization: "tuōjié de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'cohesive' means characterized by or causing cohesion." +
            "<br><br>" +
            "(A) 'fragmented' means broken into small parts or pieces." +
            "<br><br>" +
            "(B) 'divisive' means tending to cause disagreement or hostility between people." +
            "<br><br>" +
            "(D) 'disjointed' means lacking a coherent sequence or connection.",
        chinese_explanation: "(C) '有凝聚力的' 一词意味着具有或导致凝聚力的。" +
            "<br><br>" +
            "(A) '破碎的' 意味着分成小部分或碎片的。" +
            "<br><br>" +
            "(B) '分裂的' 意味着倾向于在人与人之间引起分歧或敌意的。" +
            "<br><br>" +
            "(D) '脱节的' 意味着缺乏连贯的顺序或联系。"
    },
    {
        id: 7,
        question: "His __________ attitude towards traditional customs often shocked his conservative family.",
        chinese_question: "他对传统习俗的 __________ 态度经常让他保守的家人感到震惊。",
        answers: [
            { option: "A", answer: "respectful", chinese_answer: "尊重", chinese_romanization: "zūnzhòng" },
            { option: "B", answer: "irreverent", chinese_answer: "不敬", chinese_romanization: "bùjìng" },
            { option: "C", answer: "reverent", chinese_answer: "敬畏", chinese_romanization: "jìngwèi" },
            { option: "D", answer: "deferential", chinese_answer: "恭敬", chinese_romanization: "gōngjìng" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'irreverent' means showing a lack of respect for people or things that are generally taken seriously." +
            "<br><br>" +
            "(A) 'respectful' means feeling or showing deference and respect." +
            "<br><br>" +
            "(C) 'reverent' means feeling or showing deep and solemn respect." +
            "<br><br>" +
            "(D) 'deferential' means showing deference; respectful.",
        chinese_explanation: "(B) '不敬' 意味着对一般被认真对待的人或事物表现出缺乏尊重。" +
            "<br><br>" +
            "(A) '尊重' 意味着感到或表现出敬意和尊重。" +
            "<br><br>" +
            "(C) '敬畏' 意味着感到或表现出深切和庄重的敬意。" +
            "<br><br>" +
            "(D) '恭敬' 意味着表现出敬意；尊重的。"
    },
    {
        id: 8,
        question: "The __________ task of sorting through thousands of old documents took the team several weeks to complete.",
        chinese_question: "整理成千上万份旧文件的 __________ 任务花了团队几个星期才完成。",
        answers: [
            { option: "A", answer: "easy", chinese_answer: "容易", chinese_romanization: "róngyì" },
            { option: "B", answer: "simple", chinese_answer: "简单", chinese_romanization: "jiǎndān" },
            { option: "C", answer: "laborious", chinese_answer: "费力", chinese_romanization: "fèilì" },
            { option: "D", answer: "effortless", chinese_answer: "毫不费力", chinese_romanization: "háo bù fèilì" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'laborious' means requiring considerable time and effort." +
            "<br><br>" +
            "(A) 'easy' means achieved without great effort; presenting few difficulties." +
            "<br><br>" +
            "(B) 'simple' means easily understood or done; presenting no difficulty." +
            "<br><br>" +
            "(D) 'effortless' means requiring no physical or mental exertion.",
        chinese_explanation: "(C) '费力' 意味着需要相当多的时间和精力。" +
            "<br><br>" +
            "(A) '容易' 意味着无需很大努力就能实现；几乎没有困难。" +
            "<br><br>" +
            "(B) '简单' 意味着容易理解或完成；没有困难。" +
            "<br><br>" +
            "(D) '毫不费力' 意味着不需要体力或脑力。"
    },
    {
        id: 9,
        question: "She was __________ at playing the piano, able to perform complex pieces with ease and grace.",
        chinese_question: "她在弹钢琴方面非常 __________，能够轻松优雅地演奏复杂的曲目。",
        answers: [
            { option: "A", answer: "inept", chinese_answer: "无能的", chinese_romanization: "wúnéng de" },
            { option: "B", answer: "amateur", chinese_answer: "业余的", chinese_romanization: "yèyú de" },
            { option: "C", answer: "adept", chinese_answer: "熟练的", chinese_romanization: "shúliàn de" },
            { option: "D", answer: "novice", chinese_answer: "新手", chinese_romanization: "xīnshǒu" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'adept' means very skilled or proficient at something." +
            "<br><br>" +
            "(A) 'inept' means having or showing no skill; clumsy." +
            "<br><br>" +
            "(B) 'amateur' means a person who engages in a pursuit, especially a sport, on an unpaid basis." +
            "<br><br>" +
            "(D) 'novice' means a person new to or inexperienced in a field or situation.",
        chinese_explanation: "(C) '熟练的' 意味着在某事上非常熟练或精通的。" +
            "<br><br>" +
            "(A) '无能的' 意味着没有表现出技能；笨拙的。" +
            "<br><br>" +
            "(B) '业余的' 意味着一个人从事某项追求，尤其是体育运动，而不以此为生。" +
            "<br><br>" +
            "(D) '新手' 意味着在某个领域或情况下新来或缺乏经验的人。"
    },
    {
        id: 10,
        question: "The company's customer service team was highly __________, addressing inquiries and complaints promptly and efficiently.",
        chinese_question: "公司的客户服务团队非常 __________，迅速高效地处理查询和投诉。",
        answers: [
            { option: "A", answer: "indifferent", chinese_answer: "漠不关心的", chinese_romanization: "mòbù guānxīn de" },
            { option: "B", answer: "responsive", chinese_answer: "反应迅速的", chinese_romanization: "fǎnyìng xùnsù de" },
            { option: "C", answer: "slow", chinese_answer: "缓慢的", chinese_romanization: "huǎnmàn de" },
            { option: "D", answer: "unhelpful", chinese_answer: "无助的", chinese_romanization: "wúzhù de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'responsive' means reacting quickly and positively." +
            "<br><br>" +
            "(A) 'indifferent' means having no particular interest or sympathy; unconcerned." +
            "<br><br>" +
            "(C) 'slow' means moving or operating, or designed to do so, only at a low speed; not quick or fast." +
            "<br><br>" +
            "(D) 'unhelpful' means not helpful.",
        chinese_explanation: "(B) '反应迅速的' 一词意味着快速和积极地反应。" +
            "<br><br>" +
            "(A) '漠不关心的' 意味着没有特别的兴趣或同情；不关心的。" +
            "<br><br>" +
            "(C) '缓慢的' 意味着移动或操作，或设计成仅以低速运行；不快或快速。" +
            "<br><br>" +
            "(D) '无助的' 意味着不帮助的。"
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
