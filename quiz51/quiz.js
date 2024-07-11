// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "The events in the story were presented in __________ order, starting from the earliest incident to the most recent.",
        chinese_question: "故事中的事件是按 __________ 顺序呈现的，从最早的事件到最近的事件。",
        answers: [
            { option: "A", answer: "random", chinese_answer: "随机", chinese_romanization: "suíjī" },
            { option: "B", answer: "alphabetical", chinese_answer: "字母", chinese_romanization: "zìmǔ" },
            { option: "C", answer: "chronological", chinese_answer: "时间", chinese_romanization: "shíjiān" },
            { option: "D", answer: "hierarchical", chinese_answer: "等级", chinese_romanization: "děngjí" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'chronological' means starting with the earliest and following the order in which they occurred." +
            "<br><br>" +
            "(A) 'random' means made, done, or happening without method or conscious decision." +
            "<br><br>" +
            "(B) 'alphabetical' means arranged in the order of the letters of the alphabet." +
            "<br><br>" +
            "(D) 'hierarchical' means arranged in order of rank.",
        chinese_explanation: "(C) '时间' 一词意味着从最早开始，按照事件发生的顺序进行。" +
            "<br><br>" +
            "(A) '随机' 意味着没有方法或有意识决定地进行、完成或发生。" +
            "<br><br>" +
            "(B) '字母' 意味着按字母顺序排列。" +
            "<br><br>" +
            "(D) '等级' 意味着按等级顺序排列。"
    },
    {
        id: 2,
        question: "She was __________ to new ideas, always willing to listen and consider different perspectives.",
        chinese_question: "她对新想法 __________，总是愿意倾听和考虑不同的观点。",
        answers: [
            { option: "A", answer: "closed", chinese_answer: "封闭的", chinese_romanization: "fēngbì de" },
            { option: "B", answer: "resistant", chinese_answer: "抵抗的", chinese_romanization: "dǐkàng de" },
            { option: "C", answer: "receptive", chinese_answer: "乐于接受的", chinese_romanization: "lèyú jiēshòu de" },
            { option: "D", answer: "indifferent", chinese_answer: "冷漠的", chinese_romanization: "lěngmò de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'receptive' means willing to consider or accept new suggestions and ideas." +
            "<br><br>" +
            "(A) 'closed' means not open." +
            "<br><br>" +
            "(B) 'resistant' means offering resistance to something or someone." +
            "<br><br>" +
            "(D) 'indifferent' means having no particular interest or sympathy; unconcerned.",
        chinese_explanation: "(C) '乐于接受的' 意味着愿意考虑或接受新的建议和想法。" +
            "<br><br>" +
            "(A) '封闭的' 意味着不开放的。" +
            "<br><br>" +
            "(B) '抵抗的' 意味着对某事或某人提供抵抗。" +
            "<br><br>" +
            "(D) '冷漠的' 意味着没有特别的兴趣或同情；不关心的。"
    },
    {
        id: 3,
        question: "The first meeting was a success, and the __________ sessions continued to build on that momentum.",
        chinese_question: "第一次会议取得了成功，__________ 的几次会议继续在这种势头上发展。",
        answers: [
            { option: "A", answer: "initial", chinese_answer: "最初的", chinese_romanization: "zuìchū de" },
            { option: "B", answer: "previous", chinese_answer: "之前的", chinese_romanization: "zhīqián de" },
            { option: "C", answer: "subsequent", chinese_answer: "随后的", chinese_romanization: "suíhòu de" },
            { option: "D", answer: "preceding", chinese_answer: "前面的", chinese_romanization: "qiánmiàn de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'subsequent' means coming after something in time; following." +
            "<br><br>" +
            "(A) 'initial' means existing or occurring at the beginning." +
            "<br><br>" +
            "(B) 'previous' means existing or occurring before in time or order." +
            "<br><br>" +
            "(D) 'preceding' means coming before something in order, position, or time.",
        chinese_explanation: "(C) '随后的' 意味着在时间上跟随某事之后。" +
            "<br><br>" +
            "(A) '最初的' 意味着在开始时存在或发生的。" +
            "<br><br>" +
            "(B) '之前的' 意味着在时间或顺序上存在或发生的。" +
            "<br><br>" +
            "(D) '前面的' 意味着在顺序、位置或时间上在某物之前。"
    },
    {
        id: 4,
        question: "He was __________ to leave his hometown, but the job opportunity in the city was too good to pass up.",
        chinese_question: "他 __________ 离开家乡，但城市的工作机会太好，不能错过。",
        answers: [
            { option: "A", answer: "eager", chinese_answer: "渴望的", chinese_romanization: "kěwàng de" },
            { option: "B", answer: "reluctant", chinese_answer: "不情愿的", chinese_romanization: "bù qíngyuàn de" },
            { option: "C", answer: "willing", chinese_answer: "愿意的", chinese_romanization: "yuànyì de" },
            { option: "D", answer: "enthusiastic", chinese_answer: "热情的", chinese_romanization: "rèqíng de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'reluctant' means unwilling and hesitant; disinclined." +
            "<br><br>" +
            "(A) 'eager' means (of a person) wanting to do or have something very much." +
            "<br><br>" +
            "(C) 'willing' means ready, eager, or prepared to do something." +
            "<br><br>" +
            "(D) 'enthusiastic' means having or showing intense and eager enjoyment, interest, or approval.",
        chinese_explanation: "(B) '不情愿的' 意味着不愿意和犹豫的；不情愿的。" +
            "<br><br>" +
            "(A) '渴望的' 意味着（人）非常想做或拥有某物。" +
            "<br><br>" +
            "(C) '愿意的' 意味着准备好、渴望或准备做某事。" +
            "<br><br>" +
            "(D) '热情的' 意味着表现出或拥有强烈和热切的愉悦、兴趣或认可。"
    },
    {
        id: 5,
        question: "The police had to __________ in the fight to prevent anyone from getting seriously injured.",
        chinese_question: "警察不得不__________打斗，以防止有人严重受伤。",
        answers: [
            { option: "A", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" },
            { option: "B", answer: "intervene", chinese_answer: "干预", chinese_romanization: "gānyù" },
            { option: "C", answer: "observe", chinese_answer: "观察", chinese_romanization: "guānchá" },
            { option: "D", answer: "instigate", chinese_answer: "煽动", chinese_romanization: "shāndòng" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'intervene' means to come between so as to prevent or alter a result or course of events." +
            "<br><br>" +
            "(A) 'ignore' means to refuse to take notice of." +
            "<br><br>" +
            "(C) 'observe' means to notice or perceive something and register it as being significant." +
            "<br><br>" +
            "(D) 'instigate' means to bring about or initiate an action or event.",
        chinese_explanation: "(B) '干预'一词意味着介入以防止或改变结果或事件的过程。" +
            "<br><br>" +
            "(A) '忽视' 意味着拒绝注意。" +
            "<br><br>" +
            "(C) '观察' 意味着注意到或察觉到某事并将其登记为重要的。" +
            "<br><br>" +
            "(D) '煽动' 意味着引起或开始一项行动或事件。"
    },
    {
        id: 6,
        question: "The employee was fired for being __________ in his duties, consistently failing to meet deadlines.",
        chinese_question: "这名员工因在工作中 __________，屡次未能按时完成任务而被解雇。",
        answers: [
            { option: "A", answer: "diligent", chinese_answer: "勤勉", chinese_romanization: "qínmiǎn" },
            { option: "B", answer: "responsible", chinese_answer: "负责", chinese_romanization: "fùzé" },
            { option: "C", answer: "negligent", chinese_answer: "疏忽", chinese_romanization: "shūhū" },
            { option: "D", answer: "attentive", chinese_answer: "细心", chinese_romanization: "xìxīn" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'negligent' means failing to take proper care in doing something." +
            "<br><br>" +
            "(A) 'diligent' means having or showing care and conscientiousness in one's work or duties." +
            "<br><br>" +
            "(B) 'responsible' means having an obligation to do something, or having control over or care for someone." +
            "<br><br>" +
            "(D) 'attentive' means paying close attention to something.",
        chinese_explanation: "(C) '疏忽' 一词意味着未能妥善照顾某事。" +
            "<br><br>" +
            "(A) '勤勉' 意味着在工作或职责上表现出细心和认真的态度。" +
            "<br><br>" +
            "(B) '负责' 意味着有义务做某事，或对某人有控制或关怀。" +
            "<br><br>" +
            "(D) '细心' 意味着对某事密切关注。"
    },
    {
        id: 7,
        question: "After winning three __________ games, the team was confident about their chances in the playoffs.",
        chinese_question: "连续赢得三场比赛后，球队对进入季后赛充满信心。",
        answers: [
            { option: "A", answer: "random", chinese_answer: "随机", chinese_romanization: "suíjī" },
            { option: "B", answer: "consecutive", chinese_answer: "连续", chinese_romanization: "liánxù" },
            { option: "C", answer: "sporadic", chinese_answer: "零星", chinese_romanization: "língxīng" },
            { option: "D", answer: "occasional", chinese_answer: "偶尔", chinese_romanization: "ǒu'ěr" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'consecutive' means following continuously; in unbroken or logical sequence." +
            "<br><br>" +
            "(A) 'random' means made, done, or happening without method or conscious decision." +
            "<br><br>" +
            "(C) 'sporadic' means occurring at irregular intervals or only in a few places; scattered or isolated." +
            "<br><br>" +
            "(D) 'occasional' means occurring, appearing, or done infrequently and irregularly.",
        chinese_explanation: "(B) '连续' 一词意味着连续不断地；在不间断或逻辑顺序中。" +
            "<br><br>" +
            "(A) '随机' 意味着没有方法或有意识决定地进行、完成或发生。" +
            "<br><br>" +
            "(C) '零星' 意味着在不规则的间隔发生或只有在少数地方；分散的或孤立的。" +
            "<br><br>" +
            "(D) '偶尔' 意味着不频繁和不规则地发生、出现或完成。"
    },
    {
        id: 8,
        question: "After hours in the sun, they were __________ and desperately in need of water.",
        chinese_question: "在阳光下呆了几个小时后，他们 __________，急需水。",
        answers: [
            { option: "A", answer: "hydrated", chinese_answer: "补水", chinese_romanization: "bǔshuǐ" },
            { option: "B", answer: "drenched", chinese_answer: "湿透", chinese_romanization: "shītòu" },
            { option: "C", answer: "parched", chinese_answer: "干渴", chinese_romanization: "gānkě" },
            { option: "D", answer: "moist", chinese_answer: "潮湿", chinese_romanization: "cháoshī" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'parched' means dried out with heat; extremely thirsty." +
            "<br><br>" +
            "(A) 'hydrated' means having absorbed water; full of water." +
            "<br><br>" +
            "(B) 'drenched' means wet thoroughly; soak." +
            "<br><br>" +
            "(D) 'moist' means slightly wet; damp or humid.",
        chinese_explanation: "(C) '干渴' 一词意味着因热而干燥；极度口渴。" +
            "<br><br>" +
            "(A) '补水' 意味着吸收了水；充满水。" +
            "<br><br>" +
            "(B) '湿透' 意味着彻底湿透；浸湿。" +
            "<br><br>" +
            "(D) '潮湿' 意味着稍微湿润；潮湿或湿润。"
    },
    {
        id: 9,
        question: "His __________ charm made it hard for anyone to see his true intentions.",
        chinese_question: "他 __________ 的魅力让人很难看出他的真正意图。",
        answers: [
            { option: "A", answer: "honest", chinese_answer: "诚实的", chinese_romanization: "chéngshí de" },
            { option: "B", answer: "deceptive", chinese_answer: "具有欺骗性的", chinese_romanization: "jùyǒu qīpiàn xìng de" },
            { option: "C", answer: "clear", chinese_answer: "清晰的", chinese_romanization: "qīngxī de" },
            { option: "D", answer: "obvious", chinese_answer: "明显的", chinese_romanization: "míngxiǎn de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'deceptive' means giving an appearance or impression different from the true one; misleading. Figuratively, it can mean appearing good or true but actually being false or misleading." +
            "<br><br>" +
            "(A) 'honest' means free of deceit; truthful and sincere." +
            "<br><br>" +
            "(C) 'clear' means easy to perceive, understand, or interpret." +
            "<br><br>" +
            "(D) 'obvious' means easily perceived or understood; clear, self-evident, or apparent.",
        chinese_explanation: "(B) '具有欺骗性'一词意味着外表或印象与实际情况不同；误导人。比喻地，它可以表示看似美好或真实但实际上是虚假或误导的。" +
            "<br><br>" +
            "(A) '诚实的' 意味着没有欺骗；真诚的和诚实的。" +
            "<br><br>" +
            "(C) '清晰的' 意味着易于理解、理解或解释。" +
            "<br><br>" +
            "(D) '明显的' 意味着容易察觉或理解；清晰、自我显现或明显的。"
    },
    {
        id: 10,
        question: "Her __________ expression made it clear she was not in the mood for jokes.",
        chinese_question: "她 __________ 的表情表明她没有心情开玩笑。",
        answers: [
            { option: "A", answer: "severe", chinese_answer: "严肃的", chinese_romanization: "yánsù de" },
            { option: "B", answer: "cheerful", chinese_answer: "高兴的", chinese_romanization: "gāoxìng de" },
            { option: "C", answer: "relaxed", chinese_answer: "放松的", chinese_romanization: "fàngsōng de" },
            { option: "D", answer: "indifferent", chinese_answer: "冷漠的", chinese_romanization: "lěngmò de" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'severe' metaphorically means strict or stern in manner or appearance." +
            "<br><br>" +
            "(B) 'cheerful' means noticeably happy and optimistic." +
            "<br><br>" +
            "(C) 'relaxed' means free from tension and anxiety; at ease." +
            "<br><br>" +
            "(D) 'indifferent' means having no particular interest or sympathy.",
        chinese_explanation: "(A) '严肃的' 比喻态度或外表严格或严厉的。" +
            "<br><br>" +
            "(B) '高兴的' 意味着显著的快乐和乐观。" +
            "<br><br>" +
            "(C) '放松的' 意味着没有紧张和焦虑的；自在的。" +
            "<br><br>" +
            "(D) '冷漠的' 意味着没有特别的兴趣或同情心。"
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
