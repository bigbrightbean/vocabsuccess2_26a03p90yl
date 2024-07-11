// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "His __________ language during the speech shocked the audience and offended many.",
        chinese_question: "他在演讲中的 __________ 语言震惊了观众，并冒犯了许多人。",
        answers: [
            { option: "A", answer: "polite", chinese_answer: "礼貌", chinese_romanization: "lǐmào" },
            { option: "B", answer: "refined", chinese_answer: "优雅", chinese_romanization: "yōuyǎ" },
            { option: "C", answer: "vulgar", chinese_answer: "粗俗", chinese_romanization: "cūsú" },
            { option: "D", answer: "eloquent", chinese_answer: "雄辩", chinese_romanization: "xióngbiàn" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'vulgar' means lacking sophistication or good taste; unrefined." +
            "<br><br>" +
            "(A) 'polite' means having or showing behavior that is respectful and considerate of other people." +
            "<br><br>" +
            "(B) 'refined' means with impurities or unwanted elements having been removed by processing." +
            "<br><br>" +
            "(D) 'eloquent' means fluent or persuasive in speaking or writing.",
        chinese_explanation: "(C) '粗俗' 一词意味着缺乏品味或优雅；未提炼的。" +
            "<br><br>" +
            "(A) '礼貌' 意味着有或表现出尊重和体贴他人的行为。" +
            "<br><br>" +
            "(B) '优雅' 意味着通过加工去除杂质或不需要的元素。" +
            "<br><br>" +
            "(D) '雄辩' 意味着在说话或写作中流利或有说服力。"
    },
    {
        id: 2,
        question: "The teacher found it challenging to manage the __________ student who refused to follow any rules.",
        chinese_question: "老师发现管理那个 __________ 的学生很有挑战性，因为他拒绝遵守任何规则。",
        answers: [
            { option: "A", answer: "obedient", chinese_answer: "顺从", chinese_romanization: "shùncóng" },
            { option: "B", answer: "compliant", chinese_answer: "服从", chinese_romanization: "fúcóng" },
            { option: "C", answer: "recalcitrant", chinese_answer: "顽固", chinese_romanization: "wángù" },
            { option: "D", answer: "cooperative", chinese_answer: "合作", chinese_romanization: "hézuò" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'recalcitrant' means having an obstinately uncooperative attitude toward authority or discipline." +
            "<br><br>" +
            "(A) 'obedient' means complying or willing to comply with orders or requests; submissive to another's will." +
            "<br><br>" +
            "(B) 'compliant' means inclined to agree with others or obey rules, especially to an excessive degree." +
            "<br><br>" +
            "(D) 'cooperative' means involving mutual assistance in working toward a common goal.",
        chinese_explanation: "(C) '顽固' 一词意味着对权威或纪律固执地不合作的态度。" +
            "<br><br>" +
            "(A) '顺从' 意味着遵守或愿意遵守命令或要求；顺从他人的意愿。" +
            "<br><br>" +
            "(B) '服从' 意味着倾向于同意他人或遵守规则，尤其是过度程度。" +
            "<br><br>" +
            "(D) '合作' 意味着在朝着共同目标努力中相互帮助。"
    },
    {
        id: 3,
        question: "The __________ living room was perfect for hosting large gatherings and events.",
        chinese_question: "这间 __________ 的客厅非常适合举办大型聚会和活动。",
        answers: [
            { option: "A", answer: "dingy", chinese_answer: "昏暗", chinese_romanization: "hūn'àn" },
            { option: "B", answer: "spacious", chinese_answer: "宽敞", chinese_romanization: "kuānchǎng" },
            { option: "C", answer: "cramped", chinese_answer: "狭窄", chinese_romanization: "xiázhǎi" },
            { option: "D", answer: "narrow", chinese_answer: "窄", chinese_romanization: "zhǎi" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'spacious' means having ample space." +
            "<br><br>" +
            "(A) 'dingy' means gloomy and drab." +
            "<br><br>" +
            "(C) 'cramped' means feeling or causing someone to feel uncomfortably confined or hemmed in." +
            "<br><br>" +
            "(D) 'narrow' means of small width in relation to length.",
        chinese_explanation: "(B) '宽敞' 一词意味着有足够的空间。" +
            "<br><br>" +
            "(A) '昏暗' 意味着阴暗和单调。" +
            "<br><br>" +
            "(C) '狭窄' 意味着感觉或导致某人感觉不舒服地被限制或围住。" +
            "<br><br>" +
            "(D) '窄' 意味着相对于长度来说宽度很小。"
    },
    {
        id: 4,
        question: "Her __________ nature made her a favorite among her peers, as she always showed understanding and compassion.",
        chinese_question: "她 __________ 的性格使她在同龄人中很受欢迎，因为她总是表现出理解和同情。",
        answers: [
            { option: "A", answer: "indifferent", chinese_answer: "冷漠", chinese_romanization: "lěngmò" },
            { option: "B", answer: "arrogant", chinese_answer: "傲慢", chinese_romanization: "àomàn" },
            { option: "C", answer: "sympathetic", chinese_answer: "富有同情心", chinese_romanization: "fùyǒu tóngqíng xīn" },
            { option: "D", answer: "apathetic", chinese_answer: "漠不关心", chinese_romanization: "mòbùguānxīn" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'sympathetic' means showing feelings of pity and sorrow for someone else's misfortune." +
            "<br><br>" +
            "(A) 'indifferent' means having no particular interest or sympathy." +
            "<br><br>" +
            "(B) 'arrogant' means having an exaggerated sense of one's own importance or abilities." +
            "<br><br>" +
            "(D) 'apathetic' means showing no interest or enthusiasm.",
        chinese_explanation: "(C) '富有同情心' 一词意味着对他人的不幸表现出怜悯和悲伤。" +
            "<br><br>" +
            "(A) '冷漠' 意味着没有特别的兴趣或同情。" +
            "<br><br>" +
            "(B) '傲慢' 意味着对自己重要性或能力的夸大感。" +
            "<br><br>" +
            "(D) '漠不关心' 意味着没有兴趣或热情。"
    },
    {
        id: 5,
        question: "He was so engrossed in his book that he was __________ to the commotion around him in the busy café.",
        chinese_question: "他沉浸在书中，对繁忙咖啡馆周围的喧嚣 __________。",
        answers: [
            { option: "A", answer: "conscious", chinese_answer: "有知觉的", chinese_romanization: "yǒu zhījué de" },
            { option: "B", answer: "oblivious", chinese_answer: "不知情的", chinese_romanization: "bù zhīqíng de" },
            { option: "C", answer: "mindful", chinese_answer: "留心的", chinese_romanization: "liúxīn de" },
            { option: "D", answer: "aware", chinese_answer: "意识到的", chinese_romanization: "yìshí dào de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'oblivious' means not aware of or not concerned about what is happening around one." +
            "<br><br>" +
            "(A) 'conscious' means aware of and responding to one's surroundings." +
            "<br><br>" +
            "(C) 'mindful' means conscious or aware of something." +
            "<br><br>" +
            "(D) 'aware' means having knowledge or perception of a situation or fact.",
        chinese_explanation: "(B) '不知情的' 意味着没有意识到或不关心周围发生的事情。" +
            "<br><br>" +
            "(A) '有知觉的' 意味着意识到并回应周围环境。" +
            "<br><br>" +
            "(C) '留心的' 意味着对某事有意识或意识到。" +
            "<br><br>" +
            "(D) '意识到的' 意味着对某种情况或事实有知识或感知。"
    },
    {
        id: 6,
        question: "Her ability to solve complex problems seemed __________, impressing everyone around her.",
        chinese_question: "她解决复杂问题的能力显得__________，让周围的人都印象深刻。",
        answers: [
            { option: "A", answer: "clumsy", chinese_answer: "笨拙的", chinese_romanization: "bènzhuō de" },
            { option: "B", answer: "difficult", chinese_answer: "困难的", chinese_romanization: "kùnnán de" },
            { option: "C", answer: "effortless", chinese_answer: "轻松的", chinese_romanization: "qīngsōng de" },
            { option: "D", answer: "laborious", chinese_answer: "费力的", chinese_romanization: "fèilì de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'effortless' means requiring no physical or mental exertion." +
            "<br><br>" +
            "(A) 'clumsy' means awkward in movement or in handling things." +
            "<br><br>" +
            "(B) 'difficult' means needing much effort or skill to accomplish." +
            "<br><br>" +
            "(D) 'laborious' means requiring considerable time and effort.",
        chinese_explanation: "(C) '轻松的'一词意味着不需要身体或精神上的努力。" +
            "<br><br>" +
            "(A) '笨拙的' 意味着动作或处理事物的笨拙。" +
            "<br><br>" +
            "(B) '困难的' 意味着需要大量的努力或技能才能完成。" +
            "<br><br>" +
            "(D) '费力的' 意味着需要相当多的时间和努力。"
    },
    {
        id: 7,
        question: "The professor provided __________ notes and resources for the students to prepare for the final exam.",
        chinese_question: "教授为学生准备期末考试提供了 __________ 的笔记和资源。",
        answers: [
            { option: "A", answer: "sparse", chinese_answer: "稀疏", chinese_romanization: "xīshū" },
            { option: "B", answer: "limited", chinese_answer: "有限", chinese_romanization: "yǒuxiàn" },
            { option: "C", answer: "copious", chinese_answer: "丰富", chinese_romanization: "fēngfù" },
            { option: "D", answer: "scarce", chinese_answer: "缺乏", chinese_romanization: "quēfá" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'copious' means abundant in supply or quantity." +
            "<br><br>" +
            "(A) 'sparse' means thinly dispersed or scattered." +
            "<br><br>" +
            "(B) 'limited' means restricted in size, amount, or extent." +
            "<br><br>" +
            "(D) 'scarce' means insufficient for the demand.",
        chinese_explanation: "(C) '丰富' 一词意味着供应或数量丰富。" +
            "<br><br>" +
            "(A) '稀疏' 意味着稀少地分散或散布。" +
            "<br><br>" +
            "(B) '有限' 意味着在规模、数量或程度上受到限制。" +
            "<br><br>" +
            "(D) '缺乏' 意味着不足以满足需求。"
    },
    {
        id: 8,
        question: "The workshop contained several __________ substances, including paint thinner and propane, which required careful handling to prevent fires.",
        chinese_question: "工作间内有几种 __________ 物质，包括稀释剂和丙烷，需要小心处理以防止火灾。",
        answers: [
            { option: "A", answer: "noncombustible", chinese_answer: "不燃的", chinese_romanization: "bù rán de" },
            { option: "B", answer: "fireproof", chinese_answer: "防火的", chinese_romanization: "fánghuǒ de" },
            { option: "C", answer: "incombustible", chinese_answer: "不易燃的", chinese_romanization: "bù yìrán de" },
            { option: "D", answer: "flammable", chinese_answer: "易燃的", chinese_romanization: "yìrán de" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'flammable' means easily set on fire." +
            "<br><br>" +
            "(A) 'noncombustible' means not able to catch fire and burn." +
            "<br><br>" +
            "(B) 'fireproof' means resistant to fire; not easily burned." +
            "<br><br>" +
            "(C) 'incombustible' means not flammable; cannot catch fire.",
        chinese_explanation: "(D) '易燃的' 意味着容易着火。" +
            "<br><br>" +
            "(A) '不燃的' 意味着不能着火和燃烧。" +
            "<br><br>" +
            "(B) '防火的' 意味着耐火；不容易燃烧。" +
            "<br><br>" +
            "(C) '不易燃的' 意味着不易燃；不能着火。"
    },
    {
        id: 9,
        question: "He kept his emotions __________ during the heated debate, choosing to respond calmly and thoughtfully.",
        chinese_question: "在激烈的辩论中，他保持 __________，选择冷静而深思地回应。",
        answers: [
            { option: "A", answer: "exaggerated", chinese_answer: "夸张的", chinese_romanization: "kuāzhāng de" },
            { option: "B", answer: "flamboyant", chinese_answer: "艳丽的", chinese_romanization: "yànlì de" },
            { option: "C", answer: "restrained", chinese_answer: "克制的", chinese_romanization: "kèzhì de" },
            { option: "D", answer: "unbridled", chinese_answer: "无约束的", chinese_romanization: "wú yuēshù de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'restrained' means characterized by reserve or moderation; unemotional or dispassionate." +
            "<br><br>" +
            "(A) 'exaggerated' means regarded or represented as larger, better, or worse than in reality." +
            "<br><br>" +
            "(B) 'flamboyant' means tending to attract attention because of their exuberance, confidence, and stylishness." +
            "<br><br>" +
            "(D) 'unbridled' means uncontrolled; unconstrained.",
        chinese_explanation: "(C) '克制的' 一词意味着以保留或适度为特征的；无感情的或不热情的。" +
            "<br><br>" +
            "(A) '夸张的' 意味着被认为或表现得比现实中更大、更好或更糟。" +
            "<br><br>" +
            "(B) '艳丽的' 意味着由于其热情、自信和时尚而倾向于吸引注意力的。" +
            "<br><br>" +
            "(D) '无约束的' 意味着不受控制的；不受约束的。"
    },
    {
        id: 10,
        question: "The artist's __________ style was evident in her paintings, which featured floating castles and dancing animals, captivating everyone with their playful and imaginative scenes.",
        chinese_question: "艺术家的 __________ 风格在她的画作中显而易见，这些画作中有漂浮的城堡和跳舞的动物，用其充满玩趣和想象力的场景吸引了所有人。",
        answers: [
            { option: "A", answer: "serious", chinese_answer: "严肃的", chinese_romanization: "yánsù de" },
            { option: "B", answer: "ordinary", chinese_answer: "普通的", chinese_romanization: "pǔtōng de" },
            { option: "C", answer: "predictable", chinese_answer: "可预测的", chinese_romanization: "kě yùcè de" },
            { option: "D", answer: "whimsical", chinese_answer: "异想天开的", chinese_romanization: "yìxiǎngtiānkāi de" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'whimsical' means playfully quaint or fanciful, especially in an appealing and amusing way." +
            "<br><br>" +
            "(A) 'serious' means solemn or thoughtful in character or manner." +
            "<br><br>" +
            "(B) 'ordinary' means with no special or distinctive features; normal." +
            "<br><br>" +
            "(C) 'predictable' means able to be predicted; expected.",
        chinese_explanation: "(D) '异想天开的' 意味着玩趣而古怪的，尤其是以一种有趣和吸引人的方式。" +
            "<br><br>" +
            "(A) '严肃的' 意味着性格或态度严肃或深思的。" +
            "<br><br>" +
            "(B) '普通的' 意味着没有特别或独特的特点；正常的。" +
            "<br><br>" +
            "(C) '可预测的' 意味着能够被预测；预期的。"
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
