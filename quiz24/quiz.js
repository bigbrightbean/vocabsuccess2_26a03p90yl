// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "The witness provided a __________ account of the events that helped solve the case.",
        chinese_question: "证人提供了一个 __________ 的事件描述，帮助解决了案件。",
        answers: [
            { option: "A", answer: "dubious", chinese_answer: "可疑的", chinese_romanization: "kěyí de" },
            { option: "B", answer: "unreliable", chinese_answer: "不可靠的", chinese_romanization: "bù kěkào de" },
            { option: "C", answer: "credible", chinese_answer: "可信的", chinese_romanization: "kěxìn de" },
            { option: "D", answer: "false", chinese_answer: "错误的", chinese_romanization: "cuòwù de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'credible' means able to be believed; convincing." +
            "<br><br>" +
            "(A) 'dubious' means hesitating or doubting." +
            "<br><br>" +
            "(B) 'unreliable' means not able to be relied upon." +
            "<br><br>" +
            "(D) 'false' means not according with truth or fact; incorrect.",
        chinese_explanation: "(C) '可信的' 一词意味着可以相信的；令人信服的。" +
            "<br><br>" +
            "(A) '可疑的' 意味着犹豫或怀疑的。" +
            "<br><br>" +
            "(B) '不可靠的' 意味着不能依赖的。" +
            "<br><br>" +
            "(D) '错误的' 意味着不符合事实或真相的；不正确的。"
    },
    {
        id: 2,
        question: "The project was completed in a __________ manner, with no clear plan or organization, leading to many mistakes.",
        chinese_question: "这个项目是在 __________ 的情况下完成的，没有明确的计划或组织，导致了许多错误。",
        answers: [
            { option: "A", answer: "systematic", chinese_answer: "系统的", chinese_romanization: "xìtǒng de" },
            { option: "B", answer: "organized", chinese_answer: "有组织的", chinese_romanization: "yǒu zǔzhī de" },
            { option: "C", answer: "meticulous", chinese_answer: "一丝不苟的", chinese_romanization: "yīsī bùgǒu de" },
            { option: "D", answer: "haphazard", chinese_answer: "杂乱的", chinese_romanization: "záluàn de" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'haphazard' means lacking any obvious principle of organization." +
            "<br><br>" +
            "(A) 'systematic' means done or acting according to a fixed plan or system; methodical." +
            "<br><br>" +
            "(B) 'organized' means arranged in a systematic way, especially on a large scale." +
            "<br><br>" +
            "(C) 'meticulous' means showing great attention to detail; very careful and precise.",
        chinese_explanation: "(D) '杂乱的' 一词意味着缺乏任何明显的组织原则的。" +
            "<br><br>" +
            "(A) '系统的' 意味着按照固定的计划或系统进行的；有条理的。" +
            "<br><br>" +
            "(B) '有组织的' 意味着以系统的方式安排，尤其是大规模的。" +
            "<br><br>" +
            "(C) '一丝不苟的' 意味着非常注意细节的；非常小心和精确的。"
    },
    {
        id: 3,
        question: "She was __________ when she couldn't find her lost dog, fearing the worst had happened.",
        chinese_question: "当她找不到丢失的狗时，她非常 __________，担心最坏的情况发生了。",
        answers: [
            { option: "A", answer: "calm", chinese_answer: "冷静的", chinese_romanization: "lěngjìng de" },
            { option: "B", answer: "tranquil", chinese_answer: "平静的", chinese_romanization: "píngjìng de" },
            { option: "C", answer: "distraught", chinese_answer: "心烦意乱的", chinese_romanization: "xīnfán yìluàn de" },
            { option: "D", answer: "composed", chinese_answer: "镇定的", chinese_romanization: "zhèndìng de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'distraught' means deeply upset and agitated." +
            "<br><br>" +
            "(A) 'calm' means not showing or feeling nervousness, anger, or other strong emotions." +
            "<br><br>" +
            "(B) 'tranquil' means free from disturbance; calm." +
            "<br><br>" +
            "(D) 'composed' means having one's feelings and expression under control; calm.",
        chinese_explanation: "(C) '心烦意乱的' 一词意味着深深的不安和激动。" +
            "<br><br>" +
            "(A) '冷静的' 意味着不表现或感到紧张、愤怒或其他强烈情绪。" +
            "<br><br>" +
            "(B) '平静的' 意味着没有干扰；平静的。" +
            "<br><br>" +
            "(D) '镇定的' 意味着控制住自己的情绪和表达；冷静的。"
    },
    {
        id: 4,
        question: "Her acceptance to the program was __________ upon her passing the entrance exam.",
        chinese_question: "她对该计划的接受是 __________ 在通过入学考试的基础上。",
        answers: [
            { option: "A", answer: "guaranteed", chinese_answer: "保证的", chinese_romanization: "bǎozhèng de" },
            { option: "B", answer: "unconditional", chinese_answer: "无条件的", chinese_romanization: "wú tiáojiàn de" },
            { option: "C", answer: "conditional", chinese_answer: "有条件的", chinese_romanization: "yǒu tiáojiàn de" },
            { option: "D", answer: "mandatory", chinese_answer: "强制的", chinese_romanization: "qiángzhì de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'conditional' means subject to one or more conditions or requirements being met; made or granted on certain terms." +
            "<br><br>" +
            "(A) 'guaranteed' means provide a formal assurance or promise, especially that certain conditions shall be fulfilled." +
            "<br><br>" +
            "(B) 'unconditional' means not subject to any conditions." +
            "<br><br>" +
            "(D) 'mandatory' means required by law or mandate; compulsory.",
        chinese_explanation: "(C) '有条件的' 一词意味着需要满足一个或多个条件或要求；在某些条件下做出或授予。" +
            "<br><br>" +
            "(A) '保证的' 意味着提供正式的保证或承诺，特别是某些条件将得到满足。" +
            "<br><br>" +
            "(B) '无条件的' 意味着不受任何条件限制的。" +
            "<br><br>" +
            "(D) '强制的' 意味着法律或命令规定的；强制性的。"
    },
    {
        id: 5,
        question: "The boss's __________ attitude created a positive and welcoming work environment.",
        chinese_question: "老板的__________态度营造了一个积极和欢迎的工作环境。",
        answers: [
            { option: "A", answer: "morose", chinese_answer: "忧郁的", chinese_romanization: "yōuyù de" },
            { option: "B", answer: "melancholic", chinese_answer: "忧伤的", chinese_romanization: "yōushāng de" },
            { option: "C", answer: "sullen", chinese_answer: "阴沉的", chinese_romanization: "yīnchén de" },
            { option: "D", answer: "jovial", chinese_answer: "快乐的", chinese_romanization: "kuàilè de" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'jovial' means cheerful and friendly. Figuratively, it can mean being warm and pleasant." +
            "<br><br>" +
            "(A) 'morose' means sullen and ill-tempered." +
            "<br><br>" +
            "(B) 'melancholic' means feeling or expressing pensive sadness." +
            "<br><br>" +
            "(C) 'sullen' means bad-tempered and sulky; gloomy.",
        chinese_explanation: "(D) '快乐的' 一词意味着快乐和友好的。比喻地，它可以表示温暖和愉快的。" +
            "<br><br>" +
            "(A) '忧郁的' 意味着阴沉和脾气暴躁的。" +
            "<br><br>" +
            "(B) '忧伤的' 意味着感到或表达沉思的悲伤的。" +
            "<br><br>" +
            "(C) '阴沉的' 意味着脾气暴躁和闷闷不乐的；阴郁的。"
    },
    {
        id: 6,
        question: "The student's __________ attitude towards the teacher earned him a detention, as his rude and disrespectful behavior was unacceptable.",
        chinese_question: "学生对老师的 __________ 态度让他被罚留堂，因为他的粗鲁和不尊重行为是不可接受的。",
        answers: [
            { option: "A", answer: "insolent", chinese_answer: "无礼的", chinese_romanization: "wúlǐ de" },
            { option: "B", answer: "polite", chinese_answer: "有礼貌的", chinese_romanization: "yǒu lǐmào de" },
            { option: "C", answer: "respectful", chinese_answer: "尊重的", chinese_romanization: "zūnzhòng de" },
            { option: "D", answer: "humble", chinese_answer: "谦逊的", chinese_romanization: "qiānxùn de" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'insolent' means showing a rude and arrogant lack of respect." +
            "<br><br>" +
            "(B) 'polite' means having or showing behavior that is respectful and considerate of other people." +
            "<br><br>" +
            "(C) 'respectful' means feeling or showing deference and respect." +
            "<br><br>" +
            "(D) 'humble' means having or showing a modest or low estimate of one's own importance.",
        chinese_explanation: "(A) '无礼的' 意味着表现出粗鲁和傲慢的缺乏尊重。" +
            "<br><br>" +
            "(B) '有礼貌的' 意味着表现出尊重和体贴他人的行为。" +
            "<br><br>" +
            "(C) '尊重的' 意味着感到或表现出敬意。" +
            "<br><br>" +
            "(D) '谦逊的' 意味着对自己的重要性有或表现出谦虚或低估的态度。"
    },
    {
        id: 7,
        question: "The desire for freedom is __________ in all human beings, regardless of culture or background.",
        chinese_question: "对自由的渴望是所有人类 __________ 的，不论文化或背景。",
        answers: [
            { option: "A", answer: "acquired", chinese_answer: "后天", chinese_romanization: "hòutiān" },
            { option: "B", answer: "inherent", chinese_answer: "内在", chinese_romanization: "nèizài" },
            { option: "C", answer: "learned", chinese_answer: "学习", chinese_romanization: "xuéxí" },
            { option: "D", answer: "external", chinese_answer: "外在", chinese_romanization: "wàizài" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'inherent' means existing in something as a permanent, essential, or characteristic attribute." +
            "<br><br>" +
            "(A) 'acquired' means learned or developed." +
            "<br><br>" +
            "(C) 'learned' means acquired by learning." +
            "<br><br>" +
            "(D) 'external' means belonging to or forming the outer surface or structure of something.",
        chinese_explanation: "(B) '内在' 意味着作为永久的、基本的或特征的属性存在于某物中。" +
            "<br><br>" +
            "(A) '后天' 意味着学习或发展。" +
            "<br><br>" +
            "(C) '学习' 意味着通过学习获得。" +
            "<br><br>" +
            "(D) '外在' 意味着属于或形成某物的外表面或结构的。"
    },
    {
        id: 8,
        question: "Despite numerous challenges, her __________ spirit kept her pushing forward.",
        chinese_question: "尽管面临诸多挑战，她那__________的精神让她不断前进。",
        answers: [
            { option: "A", answer: "weak", chinese_answer: "虚弱的", chinese_romanization: "xūruò de" },
            { option: "B", answer: "timid", chinese_answer: "胆小的", chinese_romanization: "dǎnxiǎo de" },
            { option: "C", answer: "indomitable", chinese_answer: "不屈不挠的", chinese_romanization: "bù qū bù náo de" },
            { option: "D", answer: "fragile", chinese_answer: "脆弱的", chinese_romanization: "cuìruò de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'indomitable' means impossible to subdue or defeat." +
            "<br><br>" +
            "(A) 'weak' means lacking the power to perform physically demanding tasks; lacking physical strength and energy." +
            "<br><br>" +
            "(B) 'timid' means showing a lack of courage or confidence; easily frightened." +
            "<br><br>"+
            "(D) 'fragile' means easily broken or damaged.",
        chinese_explanation: "(C) '不屈不挠的'一词意味着无法征服或打败的。" +
            "<br><br>" +
            "(A) '虚弱的' 意味着缺乏执行体力活的能力；缺乏体力和能量的。" +
            "<br><br>" +
            "(B) '胆小的' 意味着缺乏勇气或信心的；容易受惊的。" +
            "<br><br>" +
            "(D) '脆弱的' 意味着容易破碎或损坏的。"
    },
    {
        id: 9,
        question: "In his autobiography, he was remarkably __________ about the challenges he faced and the mistakes he made.",
        chinese_question: "在自传中，他对所面临的挑战和所犯的错误表现出惊人的 __________。",
        answers: [
            { option: "A", answer: "secretive", chinese_answer: "隐秘", chinese_romanization: "yǐnmì" },
            { option: "B", answer: "candid", chinese_answer: "直率", chinese_romanization: "zhíshuài" },
            { option: "C", answer: "reserved", chinese_answer: "保守", chinese_romanization: "bǎoshǒu" },
            { option: "D", answer: "indirect", chinese_answer: "间接", chinese_romanization: "jiànjiē" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'candid' means truthful and straightforward; frank." +
            "<br><br>" +
            "(A) 'secretive' means inclined to conceal feelings and intentions or not to disclose information." +
            "<br><br>" +
            "(C) 'reserved' means slow to reveal emotion or opinions." +
            "<br><br>" +
            "(D) 'indirect' means not directly caused by or resulting from something.",
        chinese_explanation: "(B) '直率' 意味着诚实和直截了当；坦率的。" +
            "<br><br>" +
            "(A) '隐秘' 意味着倾向于隐藏感情和意图或不披露信息。" +
            "<br><br>" +
            "(C) '保守' 意味着慢于透露情感或意见。" +
            "<br><br>" +
            "(D) '间接' 意味着不直接由某事引起或导致的。"
    },
    {
        id: 10,
        question: "Her __________ solutions to problems always impressed her colleagues.",
        chinese_question: "她对问题的__________解决方案总是给同事们留下深刻印象。",
        answers: [
            { option: "A", answer: "dull", chinese_answer: "枯燥的", chinese_romanization: "kūzào de" },
            { option: "B", answer: "conventional", chinese_answer: "传统的", chinese_romanization: "chuántǒng de" },
            { option: "C", answer: "creative", chinese_answer: "创造性的", chinese_romanization: "chuàngzàoxìng de" },
            { option: "D", answer: "boring", chinese_answer: "无聊的", chinese_romanization: "wúliáo de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'creative' means relating to or involving the use of the imagination or original ideas to create something. Figuratively, it can mean being innovative and resourceful in thinking." +
            "<br><br>" +
            "(A) 'dull' means lacking interest or excitement." +
            "<br><br>" +
            "(B) 'conventional' means based on or in accordance with what is generally done or believed." +
            "<br><br>" +
            "(D) 'boring' means not interesting; tedious.",
        chinese_explanation: "(C) '创造性的'一词意味着涉及使用想象力或原创想法来创造某物。比喻地，它可以表示在思维中具有创新性和资源丰富的。" +
            "<br><br>" +
            "(A) '枯燥的' 意味着缺乏兴趣或兴奋的。" +
            "<br><br>" +
            "(B) '传统的' 意味着基于或符合通常的做法或信念的。" +
            "<br><br>" +
            "(D) '无聊的' 意味着不有趣的；乏味的。"
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
