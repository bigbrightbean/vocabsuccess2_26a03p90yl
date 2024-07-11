// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "The company's public __________ helped to restore its image after the scandal.",
        chinese_question: "公司的公开 __________ 有助于在丑闻之后恢复其形象。",
        answers: [
            { option: "A", answer: "accusation", chinese_answer: "指控", chinese_romanization: "zhǐkòng" },
            { option: "B", answer: "apology", chinese_answer: "道歉", chinese_romanization: "dàoqiàn" },
            { option: "C", answer: "celebration", chinese_answer: "庆祝", chinese_romanization: "qìngzhù" },
            { option: "D", answer: "complaint", chinese_answer: "抱怨", chinese_romanization: "bàoyuàn" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'apology' figuratively means an admission of error or discourtesy accompanied by an expression of regret." +
            "<br><br>" +
            "(A) 'accusation' means a charge or claim that someone has done something illegal or wrong." +
            "<br><br>" +
            "(C) 'celebration' means the action of marking one's pleasure at an important event or occasion by engaging in enjoyable, typically social, activity." +
            "<br><br>" +
            "(D) 'complaint' means a statement that something is unsatisfactory or unacceptable.",
        chinese_explanation: "(B) '道歉' 在比喻意义上意味着承认错误或失礼并伴有遗憾的表达。" +
            "<br><br>" +
            "(A) '指控' 意味着指控或声称某人做了非法或错误的事情。" +
            "<br><br>" +
            "(C) '庆祝' 意味着通过从事愉快的、通常是社交的活动来标志对重要事件或场合的愉悦。" +
            "<br><br>" +
            "(D) '抱怨' 意味着表示某事不令人满意或不可接受的声明。"
    },
    {
        id: 2,
        question: "Having a good education is an __________ in the job market.",
        chinese_question: "拥有良好的教育在就业市场上是一种 __________。",
        answers: [
            { option: "A", answer: "advantage", chinese_answer: "优势", chinese_romanization: "yōushì" },
            { option: "B", answer: "disadvantage", chinese_answer: "劣势", chinese_romanization: "lièshì" },
            { option: "C", answer: "obstacle", chinese_answer: "障碍", chinese_romanization: "zhàng'ài" },
            { option: "D", answer: "hindrance", chinese_answer: "阻碍", chinese_romanization: "zǔ'ài" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'advantage' means a condition or circumstance that puts one in a favorable or superior position." + 
            "<br><br>" + 
            "(B) 'disadvantage' means an unfavorable circumstance or condition that reduces the chances of success or effectiveness." + 
            "<br><br>" + 
            "(C) 'obstacle' means a thing that blocks one's way or prevents or hinders progress." + 
            "<br><br>" + 
            "(D) 'hindrance' means a thing that provides resistance, delay, or obstruction to something or someone.",
        chinese_explanation: "(A) '优势' 意味着使人处于有利或优越位置的条件或环境。" + 
            "<br><br>" + 
            "(B) '劣势' 意味着降低成功或有效性机会的不利环境或条件。" + 
            "<br><br>" + 
            "(C) '障碍' 意味着挡住路或阻止或妨碍进展的东西。" + 
            "<br><br>" + 
            "(D) '阻碍' 意味着提供抵抗、延迟或障碍某物或某人的东西。"
    },
    {
        id: 3,
        question: "He felt deep __________ over the loss of his best friend.",
        chinese_question: "失去最好的朋友让他感到深深的__________。",
        answers: [
            { option: "A", answer: "joy", chinese_answer: "快乐", chinese_romanization: "kuàilè" },
            { option: "B", answer: "comfort", chinese_answer: "舒适", chinese_romanization: "shūshì" },
            { option: "C", answer: "anguish", chinese_answer: "痛苦", chinese_romanization: "tòngkǔ" },
            { option: "D", answer: "pleasure", chinese_answer: "快乐", chinese_romanization: "kuàilè" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'anguish' means severe mental or physical pain or suffering. Figuratively, it can mean experiencing intense emotional pain." +
            "<br><br>" +
            "(A) 'joy' means a feeling of great pleasure and happiness." +
            "<br><br>" +
            "(B) 'comfort' means a state of physical ease and freedom from pain or constraint." +
            "<br><br>" +
            "(D) 'pleasure' means a feeling of happy satisfaction and enjoyment.",
        chinese_explanation: "(C) '痛苦'一词意味着严重的心理或身体痛苦。比喻地，它可以表示经历强烈的情感痛苦。" +
            "<br><br>" +
            "(A) '快乐' 意味着一种极大的愉悦和幸福感。" +
            "<br><br>" +
            "(B) '舒适' 意味着一种身体上的舒适和没有痛苦或约束的状态。" +
            "<br><br>" +
            "(D) '快乐' 意味着一种愉快的满足和享受感。"
    },
    {
        id: 4,
        question: "The hotel provided comfortable __________ for the guests, including spacious rooms and excellent service.",
        chinese_question: "酒店为客人提供了舒适的 __________，包括宽敞的房间和优质的服务。",
        answers: [
            { option: "A", answer: "discomfort", chinese_answer: "不适", chinese_romanization: "bùshì" },
            { option: "B", answer: "lodging", chinese_answer: "住宿", chinese_romanization: "zhùsù" },
            { option: "C", answer: "accommodation", chinese_answer: "住宿", chinese_romanization: "zhùsù" },
            { option: "D", answer: "inconvenience", chinese_answer: "不便", chinese_romanization: "búbiàn" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'accommodation' means a room, group of rooms, or building in which someone may live or stay." +
            "<br><br>" +
            "(A) 'discomfort' means slight pain or a feeling of unease." +
            "<br><br>" +
            "(B) 'lodging' means a place in which someone lives or stays temporarily." +
            "<br><br>" +
            "(D) 'inconvenience' means trouble or difficulty caused to one's personal requirements or comfort.",
        chinese_explanation: "(C) '住宿' 一词意味着某人可以居住或留宿的房间、房间组或建筑物。" +
            "<br><br>" +
            "(A) '不适' 意味着轻微的疼痛或不适感。" +
            "<br><br>" +
            "(B) '住宿' 意味着某人暂时居住或停留的地方。" +
            "<br><br>" +
            "(D) '不便' 意味着给个人需求或舒适造成的麻烦或困难。"
    },
    {
        id: 5,
        question: "As a __________ in the art class, she felt a bit intimidated by the more experienced students.",
        chinese_question: "作为艺术课上的 __________，她有点被更有经验的学生吓到。",
        answers: [
            { option: "A", answer: "expert", chinese_answer: "专家", chinese_romanization: "zhuānjiā" },
            { option: "B", answer: "novice", chinese_answer: "新手", chinese_romanization: "xīnshǒu" },
            { option: "C", answer: "veteran", chinese_answer: "老手", chinese_romanization: "lǎoshǒu" },
            { option: "D", answer: "master", chinese_answer: "大师", chinese_romanization: "dàshī" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'novice' means a person new to or inexperienced in a field or situation." +
            "<br><br>" +
            "(A) 'expert' means a person who is very knowledgeable about or skillful in a particular area." +
            "<br><br>" +
            "(C) 'veteran' means a person who has had long experience in a particular field." +
            "<br><br>" +
            "(D) 'master' means a person who has people working for them, especially servants or slaves.",
        chinese_explanation: "(B) '新手' 一词意味着在某个领域或情况下新手或缺乏经验的人。" +
            "<br><br>" +
            "(A) '专家' 意味着在某个特定领域非常知识渊博或技艺高超的人。" +
            "<br><br>" +
            "(C) '老手' 意味着在某个特定领域有长时间经验的人。" +
            "<br><br>" +
            "(D) '大师' 意味着有下属，特别是仆人或奴隶的人。"
    },
    {
        id: 6,
        question: "The kitchen was in __________ after the children finished their baking project, with flour and utensils everywhere.",
        chinese_question: "孩子们完成烘焙项目后，厨房一片 __________，到处都是面粉和器具。",
        answers: [
            { option: "A", answer: "misalignment", chinese_answer: "不对齐", chinese_romanization: "bù duì qí" },
            { option: "B", answer: "alignment", chinese_answer: "对齐", chinese_romanization: "duì qí" },
            { option: "C", answer: "chaos", chinese_answer: "混沌", chinese_romanization: "hùndùn" },
            { option: "D", answer: "disarray", chinese_answer: "混乱", chinese_romanization: "hùnluàn" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'disarray' means a state of disorganization or untidiness." +
            "<br><br>" +
            "(A) 'misalignment' means the incorrect arrangement or positioning of something." +
            "<br><br>" +
            "(B) 'alignment' means arrangement in a straight line or in correct relative positions." +
            "<br><br>" +
            "(C) 'chaos' means complete disorder and confusion.",
        chinese_explanation: "(D) '混乱' 意味着组织不当或杂乱的状态。" +
            "<br><br>" +
            "(A) '不对齐' 意味着某物的排列或定位不正确。" +
            "<br><br>" +
            "(B) '对齐' 意味着排成直线或正确的相对位置。" +
            "<br><br>" +
            "(C) '混沌' 意味着完全的混乱和困惑。"
    },
    {
        id: 7,
        question: "One important __________ in choosing a college is the quality of the academic programs offered.",
        chinese_question: "选择大学的一个重要 __________ 是所提供的学术项目的质量。",
        answers: [
            { option: "A", answer: "distraction", chinese_answer: "分心", chinese_romanization: "fēn xīn" },
            { option: "B", answer: "factor", chinese_answer: "因素", chinese_romanization: "yīnsù" },
            { option: "C", answer: "consequence", chinese_answer: "结果", chinese_romanization: "jiéguǒ" },
            { option: "D", answer: "outcome", chinese_answer: "结果", chinese_romanization: "jiéguǒ" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'factor' means a circumstance, fact, or influence that contributes to a result." +
            "<br><br>" +
            "(A) 'distraction' means a thing that prevents someone from giving full attention to something else." +
            "<br><br>" +
            "(C) 'consequence' means a result or effect of an action or condition." +
            "<br><br>" +
            "(D) 'outcome' means the way a thing turns out; a consequence.",
        chinese_explanation: "(B) '因素' 意味着促成结果的情况、事实或影响。" +
            "<br><br>" +
            "(A) '分心' 意味着阻止某人全神贯注于某事的事情。" +
            "<br><br>" +
            "(C) '结果' 意味着行为或条件的结果或影响。" +
            "<br><br>" +
            "(D) '结果' 意味着事情的结果；一个结果。"
    },
    {
        id: 8,
        question: "The teacher used an __________ to explain the complex concept, comparing it to something more familiar to the students. For instance, she likened the structure of an atom to a solar system, where electrons orbit the nucleus like planets orbit the sun.",
        chinese_question: "老师用一个 __________ 来解释这个复杂的概念，把它比作学生更熟悉的东西。例如，她把原子的结构比作太阳系，电子围绕原子核运行就像行星围绕太阳运行一样。",
        answers: [
            { option: "A", answer: "analysis", chinese_answer: "分析", chinese_romanization: "fēnxī" },
            { option: "B", answer: "analogy", chinese_answer: "类比", chinese_romanization: "lèibǐ" },
            { option: "C", answer: "anecdote", chinese_answer: "轶事", chinese_romanization: "yìshì" },
            { option: "D", answer: "assertion", chinese_answer: "断言", chinese_romanization: "duànyán" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'analogy' means a comparison between two things, typically for the purpose of explanation or clarification." +
            "<br><br>" +
            "(A) 'analysis' means detailed examination of the elements or structure of something." +
            "<br><br>" +
            "(C) 'anecdote' means a short amusing or interesting story about a real incident or person." +
            "<br><br>" +
            "(D) 'assertion' means a confident and forceful statement of fact or belief.",
        chinese_explanation: "(B) '类比' 一词意味着两物之间的比较，通常是为了解释或澄清。" +
            "<br><br>" +
            "(A) '分析' 意味着对某物的元素或结构进行详细检查。" +
            "<br><br>" +
            "(C) '轶事' 意味着关于真实事件或人的简短有趣或有趣的故事。" +
            "<br><br>" +
            "(D) '断言' 意味着自信而有力的事实或信念陈述。"
    },
    {
        id: 9,
        question: "The __________ at the park led to increased security measures to prevent future disturbances.",
        chinese_question: "公园的__________导致了增加安全措施以防止未来的骚乱。",
        answers: [
            { option: "A", answer: "incident", chinese_answer: "事件", chinese_romanization: "shìjiàn" },
            { option: "B", answer: "plan", chinese_answer: "计划", chinese_romanization: "jìhuà" },
            { option: "C", answer: "strategy", chinese_answer: "策略", chinese_romanization: "cèlüè" },
            { option: "D", answer: "agreement", chinese_answer: "协议", chinese_romanization: "xiéyì" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'incident' means an event or occurrence, often one that is unpleasant or unusual." +
            "<br><br>" +
            "(B) 'plan' means a detailed proposal for doing or achieving something." +
            "<br><br>" +
            "(C) 'strategy' means a plan of action designed to achieve a long-term or overall aim." +
            "<br><br>" +
            "(D) 'agreement' means a negotiated and typically legally binding arrangement between parties as to a course of action.",
        chinese_explanation: "(A) '事件'一词意味着一个事件或发生的事情，通常是令人不愉快或不寻常的。" +
            "<br><br>" +
            "'计划' 意味着实现或完成某事的详细提案。" +
            "<br><br>" +
            "'策略' 意味着设计用来实现长期或整体目标的行动计划。" +
            "<br><br>" +
            "'协议' 意味着各方之间就行动方案达成的谈判和通常具有法律约束力的安排。"
    },
    {
        id: 10,
        question: "Despite the challenges, she showed great __________ in her determination to finish the project on time.",
        chinese_question: "尽管面临挑战，她表现出巨大的 __________，决心按时完成项目。",
        answers: [
            { option: "A", answer: "hesitation", chinese_answer: "犹豫", chinese_romanization: "yóuyù" },
            { option: "B", answer: "resolve", chinese_answer: "决心", chinese_romanization: "juéxīn" },
            { option: "C", answer: "uncertainty", chinese_answer: "不确定", chinese_romanization: "bù quèdìng" },
            { option: "D", answer: "doubt", chinese_answer: "怀疑", chinese_romanization: "huáiyí" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'resolve' means firm determination to do something." +
            "<br><br>" +
            "(A) 'hesitation' means the action of pausing before saying or doing something." +
            "<br><br>" +
            "(C) 'uncertainty' means the state of being unsure." +
            "<br><br>" +
            "(D) 'doubt' means a feeling of uncertainty or lack of conviction.",
        chinese_explanation: "(B) '决心' 一词意味着坚定的决心去做某事。" +
            "<br><br>" +
            "(A) '犹豫' 意味着在说或做某事之前暂停的行为。" +
            "<br><br>" +
            "(C) '不确定' 意味着不确定的状态。" +
            "<br><br>" +
            "(D) '怀疑' 意味着不确定或缺乏信心的感觉。"
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
