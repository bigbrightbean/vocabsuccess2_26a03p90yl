// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "The situation was __________, requiring immediate attention and action.",
        chinese_question: "情况非常__________，需要立即关注和行动。",
        answers: [
            { option: "A", answer: "cheerful", chinese_answer: "高兴的", chinese_romanization: "gāoxìng de" },
            { option: "B", answer: "lighthearted", chinese_answer: "无忧无虑的", chinese_romanization: "wúyōuwúlǜ de" },
            { option: "C", answer: "grave", chinese_answer: "严肃的", chinese_romanization: "yánsù de" },
            { option: "D", answer: "jovial", chinese_answer: "愉快的", chinese_romanization: "yúkuài de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'grave' means giving cause for alarm; serious. Figuratively, it can mean very important and urgent." +
            "<br><br>" +
            "(A) 'cheerful' means noticeably happy and optimistic." +
            "<br><br>" +
            "(B) 'lighthearted' means cheerful and carefree." +
            "<br><br>" +
            "(D) 'jovial' means cheerful and friendly.",
        chinese_explanation: "(C) '严肃的'一词意味着引起警觉的；严重的。比喻地，它可以表示非常重要和紧迫的。" +
            "<br><br>" +
            "(A) '高兴的' 意味着显著地快乐和乐观的。" +
            "<br><br>" +
            "(B) '无忧无虑的' 意味着快乐和无忧无虑的。" +
            "<br><br>" +
            "(D) '愉快的' 意味着快乐和友好的。"
    },
    {
        id: 2,
        question: "The designer's __________ ideas included dresses made of flowers and shoes that could change color with the weather.",
        chinese_question: "设计师的 __________ 想法包括用花做的裙子和能随天气变化颜色的鞋子。",
        answers: [
            { option: "A", answer: "fanciful", chinese_answer: "幻想的", chinese_romanization: "huànxiǎng de" },
            { option: "B", answer: "conventional", chinese_answer: "传统的", chinese_romanization: "chuántǒng de" },
            { option: "C", answer: "practical", chinese_answer: "实用的", chinese_romanization: "shíyòng de" },
            { option: "D", answer: "realistic", chinese_answer: "现实的", chinese_romanization: "xiànshí de" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'fanciful' means over-imaginative and unrealistic." +
            "<br><br>" +
            "(B) 'conventional' means based on or in accordance with what is generally done or believed." +
            "<br><br>" +
            "(C) 'practical' means concerned with the actual doing or use of something rather than with theory and ideas." +
            "<br><br>" +
            "(D) 'realistic' means having or showing a sensible and practical idea of what can be achieved or expected.",
        chinese_explanation: "(A) '幻想的' 意味着过度想象和不现实的。" +
            "<br><br>" +
            "(B) '传统的' 意味着基于或符合一般做法或信念的。" +
            "<br><br>" +
            "(C) '实用的' 意味着关心实际操作或使用某物的，而不是理论和想法的。" +
            "<br><br>" +
            "(D) '现实的' 意味着对可以实现或期望的事情有明智和实际的想法的。"
    },
    {
        id: 3,
        question: "The artist was __________ to her vision, ensuring that every detail was perfect and true to her original concept.",
        chinese_question: "这位艺术家对自己的愿景非常 __________，确保每一个细节都完美无缺，忠实于她的原始概念。",
        answers: [
            { option: "A", answer: "faithful", chinese_answer: "忠实的", chinese_romanization: "zhōngshí de" },
            { option: "B", answer: "inconsistent", chinese_answer: "不一致的", chinese_romanization: "bù yīzhì de" },
            { option: "C", answer: "disloyal", chinese_answer: "不忠的", chinese_romanization: "bù zhōng de" },
            { option: "D", answer: "negligent", chinese_answer: "疏忽的", chinese_romanization: "shūhū de" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'faithful' means loyal, constant, and steadfast." +
            "<br><br>" +
            "(B) 'inconsistent' means not staying the same throughout." +
            "<br><br>" +
            "(C) 'disloyal' means not loyal or faithful to one's obligations or allegiances." +
            "<br><br>" +
            "(D) 'negligent' means failing to take proper care in doing something.",
        chinese_explanation: "(A) '忠实的' 意味着忠实、始终如一、坚定不移的。" +
            "<br><br>" +
            "(B) '不一致的' 意味着始终不一样的。" +
            "<br><br>" +
            "(C) '不忠的' 意味着对自己的义务或效忠不忠实的。" +
            "<br><br>" +
            "(D) '疏忽的' 意味着在做某事时未能采取适当的照顾的。"
    },
    {
        id: 4,
        question: "Her __________ speech at the wedding brought tears to everyone's eyes, as she spoke from the heart without any preparation.",
        chinese_question: "她在婚礼上的 __________ 演讲让所有人都流下了眼泪，因为她没有任何准备地发自内心地讲话。",
        answers: [
            { option: "A", answer: "calculated", chinese_answer: "精心策划的", chinese_romanization: "jīngxīn cèhuà de" },
            { option: "B", answer: "scripted", chinese_answer: "脚本化的", chinese_romanization: "jiǎoběn huà de" },
            { option: "C", answer: "deliberate", chinese_answer: "深思熟虑的", chinese_romanization: "shēnsī shúlǜ de" },
            { option: "D", answer: "impromptu", chinese_answer: "即兴的", chinese_romanization: "jíxìng de" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'impromptu' means done without being planned, organized, or rehearsed." +
            "<br><br>" +
            "(A) 'calculated' means done with full awareness of the likely consequences." +
            "<br><br>" +
            "(B) 'scripted' means written beforehand; planned." +
            "<br><br>" +
            "(C) 'deliberate' means done consciously and intentionally.",
        chinese_explanation: "(D) '即兴的' 意味着未经计划、组织或排练而完成的。" +
            "<br><br>" +
            "(A) '精心策划的' 意味着完全意识到可能的后果而做的。" +
            "<br><br>" +
            "(B) '脚本化的' 意味着事先写好的；计划好的。" +
            "<br><br>" +
            "(C) '深思熟虑的' 意味着有意识地和故意地做的。"
    },
    {
        id: 5,
        question: "The senator was known for being highly __________, able to sway public opinion and pass important legislation.",
        chinese_question: "这位参议员因极具 __________ 而闻名，能够左右公众舆论并通过重要立法。",
        answers: [
            { option: "A", answer: "influential", chinese_answer: "有影响力的", chinese_romanization: "yǒu yǐngxiǎng lì de" },
            { option: "B", answer: "insignificant", chinese_answer: "微不足道的", chinese_romanization: "wēibùzúdào de" },
            { option: "C", answer: "powerless", chinese_answer: "无力的", chinese_romanization: "wúlì de" },
            { option: "D", answer: "obscure", chinese_answer: "默默无闻的", chinese_romanization: "mòmòwúwén de" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'influential' means having great influence on someone or something." +
            "<br><br>" +
            "(B) 'insignificant' means too small or unimportant to be worth consideration." +
            "<br><br>" +
            "(C) 'powerless' means without power to do something or prevent something from happening." +
            "<br><br>" +
            "(D) 'obscure' means not discovered or known about; uncertain.",
        chinese_explanation: "(A) '有影响力的' 意味着对某人或某事有巨大影响的。" +
            "<br><br>" +
            "(B) '微不足道的' 意味着太小或不重要以至于不值得考虑的。" +
            "<br><br>" +
            "(C) '无力的' 意味着没有能力做某事或阻止某事发生的。" +
            "<br><br>" +
            "(D) '默默无闻的' 意味着未被发现或未知的；不确定的。"
    },
    {
        id: 6,
        question: "The project was a __________ undertaking that required the efforts of the entire team.",
        chinese_question: "这个项目是一个__________的任务，需要整个团队的努力。",
        answers: [
            { option: "A", answer: "tiny", chinese_answer: "微小的", chinese_romanization: "wēixiǎo de" },
            { option: "B", answer: "small", chinese_answer: "小的", chinese_romanization: "xiǎo de" },
            { option: "C", answer: "gigantic", chinese_answer: "巨大的", chinese_romanization: "jùdà de" },
            { option: "D", answer: "little", chinese_answer: "小的", chinese_romanization: "xiǎo de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'gigantic' means of very great size or extent; huge or enormous. Figuratively, it can mean a very large or significant effort or task." +
            "<br><br>" +
            "(A) 'tiny' means very small." +
            "<br><br>" +
            "(B) 'small' means of a size that is less than normal or usual." +
            "<br><br>" +
            "(D) 'little' means small in size, amount, or degree.",
        chinese_explanation: "(C) '巨大的'一词意味着非常大的尺寸或范围；巨大或庞大。比喻地，它可以表示一个非常大或重要的努力或任务。" +
            "<br><br>" +
            "(A) '微小的' 意味着非常小。" +
            "<br><br>" +
            "(B) '小的' 意味着比正常或通常的尺寸小。" +
            "<br><br>" +
            "(D) '小的' 意味着尺寸、数量或程度小。"
    },
    {
        id: 7,
        question: "Her garden is filled with __________ plants that thrive in warm, humid conditions.",
        chinese_question: "她的花园里满是适合温暖、潮湿条件生长的 __________ 植物。",
        answers: [
            { option: "A", answer: "tropical", chinese_answer: "热带的", chinese_romanization: "rèdài de" },
            { option: "B", answer: "arid", chinese_answer: "干旱的", chinese_romanization: "gānhàn de" },
            { option: "C", answer: "alpine", chinese_answer: "高山的", chinese_romanization: "gāoshān de" },
            { option: "D", answer: "tundra", chinese_answer: "苔原的", chinese_romanization: "táiyuán de" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'tropical' metaphorically means characteristic of or suitable to the tropics." +
            "<br><br>" +
            "(B) 'arid' means having little or no rain; too dry or barren to support vegetation." +
            "<br><br>" +
            "(C) 'alpine' means relating to high mountains." +
            "<br><br>" +
            "(D) 'tundra' means a vast, flat, treeless Arctic region of Europe, Asia, and North America in which the subsoil is permanently frozen.",
        chinese_explanation: "(A) '热带的' 比喻适合热带地区的特点或适合热带地区的。" +
            "<br><br>" +
            "(B) '干旱的' 意味着几乎没有或没有降雨；过于干燥或贫瘠以至于无法支持植被。" +
            "<br><br>" +
            "(C) '高山的' 意味着与高山有关的。" +
            "<br><br>" +
            "(D) '苔原的' 意味着欧洲、亚洲和北美的广大、平坦、无树的北极地区，地下土壤永久冻结。"
    },
    {
        id: 8,
        question: "The team was __________ about the upcoming match, knowing it was crucial for their standings.",
        chinese_question: "团队对即将到来的比赛感到__________，因为这对他们的排名至关重要。",
        answers: [
            { option: "A", answer: "relaxed", chinese_answer: "放松的", chinese_romanization: "fàngsōng de" },
            { option: "B", answer: "confident", chinese_answer: "自信的", chinese_romanization: "zìxìn de" },
            { option: "C", answer: "anxious", chinese_answer: "焦虑的", chinese_romanization: "jiāolǜ de" },
            { option: "D", answer: "calm", chinese_answer: "平静的", chinese_romanization: "píngjìng de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'anxious' means experiencing worry, unease, or nervousness, typically about an imminent event or something with an uncertain outcome. Figuratively, it can mean feeling nervous about an important or uncertain situation." +
            "<br><br>" +
            "(A) 'relaxed' means free from tension and anxiety." +
            "<br><br>" +
            "(B) 'confident' means feeling or showing confidence in oneself; self-assured." +
            "<br><br>" +
            "(D) 'calm' means not showing or feeling nervousness, anger, or other strong emotions.",
        chinese_explanation: "(C) '焦虑的'一词意味着对即将发生的事件或不确定结果的担忧、不安或紧张。比喻地，它可以表示对重要或不确定的情况感到紧张。" +
            "<br><br>" +
            "(A) '放松的' 意味着没有紧张和焦虑。" +
            "<br><br>" +
            "(B) '自信的' 意味着对自己有信心的；自信的。" +
            "<br><br>" +
            "(D) '平静的' 意味着不表现或感到紧张、愤怒或其他强烈情绪。"
    },
    {
        id: 9,
        question: "It is __________ that we submit the project by the deadline, as any delay could result in significant penalties.",
        chinese_question: "我们必须在截止日期前提交项目，这一点 __________，因为任何延误都可能导致重大处罚。",
        answers: [
            { option: "A", answer: "crucial", chinese_answer: "关键的", chinese_romanization: "guānjiàn de" },
            { option: "B", answer: "trivial", chinese_answer: "琐碎的", chinese_romanization: "suǒsuì de" },
            { option: "C", answer: "optional", chinese_answer: "可选的", chinese_romanization: "kěxuǎn de" },
            { option: "D", answer: "irrelevant", chinese_answer: "无关的", chinese_romanization: "wúguān de" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'crucial' means of great importance." +
            "<br><br>" +
            "(B) 'trivial' means of little value or importance." +
            "<br><br>" +
            "(C) 'optional' means available to be chosen but not obligatory." +
            "<br><br>" +
            "(D) 'irrelevant' means not connected with or relevant to something.",
        chinese_explanation: "(A) '关键的' 意味着非常重要的。" +
            "<br><br>" +
            "(B) '琐碎的' 意味着价值或重要性很小的。" +
            "<br><br>" +
            "(C) '可选的' 意味着可选择但不是强制的。" +
            "<br><br>" +
            "(D) '无关的' 意味着与某事无关的。"
    },
    {
        id: 10,
        question: "The scientist was __________ about the results of the experiment, as they contradicted established theories.",
        chinese_question: "这位科学家对实验结果感到 __________，因为它们与既定理论相矛盾。",
        answers: [
            { option: "A", answer: "dubious", chinese_answer: "怀疑的", chinese_romanization: "huáiyí de" },
            { option: "B", answer: "certain", chinese_answer: "确定的", chinese_romanization: "quèdìng de" },
            { option: "C", answer: "confident", chinese_answer: "自信的", chinese_romanization: "zìxìn de" },
            { option: "D", answer: "convinced", chinese_answer: "坚信的", chinese_romanization: "jiānxìn de" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'dubious' means hesitating or doubting." +
            "<br><br>" +
            "(B) 'certain' means sure of something." +
            "<br><br>" +
            "(C) 'confident' means feeling or showing confidence in oneself; self-assured." +
            "<br><br>" +
            "(D) 'convinced' means completely certain about something.",
        chinese_explanation: "(A) '怀疑的' 意味着犹豫或怀疑的。" +
            "<br><br>" +
            "(B) '确定的' 意味着对某事有把握的。" +
            "<br><br>" +
            "(C) '自信的' 意味着对自己感到自信的；自信的。" +
            "<br><br>" +
            "(D) '坚信的' 意味着对某事完全确定的。"
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
