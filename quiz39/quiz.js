// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "Her __________ approach to the project inspired the whole team.",
        chinese_question: "她对项目的 __________ 态度激励了整个团队。",
        answers: [
            { option: "A", answer: "confident", chinese_answer: "自信", chinese_romanization: "zìxìn" },
            { option: "B", answer: "hesitant", chinese_answer: "犹豫", chinese_romanization: "yóuyù" },
            { option: "C", answer: "insecure", chinese_answer: "不安", chinese_romanization: "bù'ān" },
            { option: "D", answer: "timid", chinese_answer: "胆怯", chinese_romanization: "dǎnqiè" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'confident' metaphorically means having strong belief or full assurance." +
            "<br><br>" +
            "(B) 'hesitant' means tentative, unsure, or slow in acting or speaking." +
            "<br><br>" +
            "(C) 'insecure' means not confident or assured; uncertain and anxious." +
            "<br><br>" +
            "(D) 'timid' means showing a lack of courage or confidence; easily frightened.",
        chinese_explanation: "(A) '自信' 比喻有强烈信念或完全保证。" +
            "<br><br>" +
            "(B) '犹豫' 意味着在行动或说话时犹豫、不确定或缓慢。" +
            "<br><br>" +
            "(C) '不安' 意味着不自信或不确定；焦虑不安。" +
            "<br><br>" +
            "(D) '胆怯' 意味着缺乏勇气或信心；容易受惊。"
    },
    {
        id: 2,
        question: "The library is easily __________, with ramps and elevators available for people with disabilities.",
        chinese_question: "图书馆很容易 __________，有坡道和电梯供残疾人使用。",
        answers: [
            { option: "A", answer: "inaccessible", chinese_answer: "不可进入", chinese_romanization: "bùkě jìnrù" },
            { option: "B", answer: "restricted", chinese_answer: "受限", chinese_romanization: "shòuxiàn" },
            { option: "C", answer: "accessible", chinese_answer: "可进入", chinese_romanization: "kě jìnrù" },
            { option: "D", answer: "exclusive", chinese_answer: "独家", chinese_romanization: "dújiā" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'accessible' means able to be reached or entered." +
            "<br><br>" +
            "(A) 'inaccessible' means unable to be reached." +
            "<br><br>" +
            "(B) 'restricted' means limited in extent, number, scope, or action." +
            "<br><br>" +
            "(D) 'exclusive' means excluding or not admitting other things.",
        chinese_explanation: "(C) '可进入' 意味着能够到达或进入。" +
            "<br><br>" +
            "(A) '不可进入' 意味着无法到达。" +
            "<br><br>" +
            "(B) '受限' 意味着在范围、数量、范围或行动上受到限制。" +
            "<br><br>" +
            "(D) '独家' 意味着排除或不承认其他事物。"
    },
    {
        id: 3,
        question: "She had __________ opportunities to advance her career due to her hard work and dedication.",
        chinese_question: "由于她的努力和奉献，她有__________的机会提升自己的职业。",
        answers: [
            { option: "A", answer: "few", chinese_answer: "少量的", chinese_romanization: "shǎoliàng de" },
            { option: "B", answer: "abundant", chinese_answer: "丰富的", chinese_romanization: "fēngfù de" },
            { option: "C", answer: "scarce", chinese_answer: "稀少的", chinese_romanization: "xīshǎo de" },
            { option: "D", answer: "limited", chinese_answer: "有限的", chinese_romanization: "yǒuxiàn de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'abundant' means existing or available in large quantities; plentiful. Figuratively, it can mean having many opportunities or resources." +
            "<br><br>" +
            "(A) 'few' means a small number of." +
            "<br><br>" +
            "(C) 'scarce' means insufficient for the demand." +
            "<br><br>" +
            "(D) 'limited' means restricted in size, amount, or extent; few, small, or short.",
        chinese_explanation: "(B) '丰富的'一词意味着存在或可用的大量；丰富的。比喻地，它可以表示有许多机会或资源。" +
            "<br><br>" +
            "(A) '少量的' 意味着少量的。" +
            "<br><br>" +
            "(C) '稀少的' 意味着不足以满足需求的。" +
            "<br><br>" +
            "(D) '有限的' 意味着在大小、数量或范围上受到限制的；少量的、小的或短的。"
    },
    {
        id: 4,
        question: "The fire alarm triggered an __________ situation, requiring immediate evacuation and swift action from the emergency responders.",
        chinese_question: "火警触发了一个 __________ 的情况，需要紧急疏散和紧急响应人员迅速行动。",
        answers: [
            { option: "A", answer: "calm", chinese_answer: "平静的", chinese_romanization: "píngjìng de" },
            { option: "B", answer: "relaxed", chinese_answer: "放松的", chinese_romanization: "fàngsōng de" },
            { option: "C", answer: "routine", chinese_answer: "常规的", chinese_romanization: "chángguī de" },
            { option: "D", answer: "exigent", chinese_answer: "紧急的", chinese_romanization: "jǐnjí de" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'exigent' means requiring immediate attention or action; urgent." +
            "<br><br>" +
            "(A) 'calm' means not showing or feeling nervousness, anger, or other strong emotions." +
            "<br><br>" +
            "(B) 'relaxed' means free from tension and anxiety." +
            "<br><br>" +
            "(C) 'routine' means performed as part of a regular procedure rather than for a special reason.",
        chinese_explanation: "(D) '紧急的' 意味着需要立即关注或行动的；紧迫的。" +
            "<br><br>" +
            "(A) '平静的' 意味着不显示或感到紧张、愤怒或其他强烈情绪的。" +
            "<br><br>" +
            "(B) '放松的' 意味着没有紧张和焦虑的。" +
            "<br><br>" +
            "(C) '常规的' 意味着作为常规程序的一部分执行，而不是出于特殊原因。"
    },
    {
        id: 5,
        question: "She was known for her __________ ideas that often led to innovative solutions.",
        chinese_question: "她以 __________ 的想法著称，这些想法常常带来创新的解决方案。",
        answers: [
            { option: "A", answer: "bold", chinese_answer: "大胆的", chinese_romanization: "dàdǎn de" },
            { option: "B", answer: "conventional", chinese_answer: "传统的", chinese_romanization: "chuántǒng de" },
            { option: "C", answer: "typical", chinese_answer: "典型的", chinese_romanization: "diǎnxíng de" },
            { option: "D", answer: "ordinary", chinese_answer: "普通的", chinese_romanization: "pǔtōng de" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'bold' metaphorically means imaginative and innovative." +
            "<br><br>" +
            "(B) 'conventional' means based on or in accordance with what is generally done or believed." +
            "<br><br>" +
            "(C) 'typical' means having the distinctive qualities of a particular type of person or thing." +
            "<br><br>" +
            "(D) 'ordinary' means with no special or distinctive features; normal.",
        chinese_explanation: "(A) '大胆的' 比喻富有想象力和创新的。" +
            "<br><br>" +
            "(B) '传统的' 意味着基于或符合通常所做或所信的。" +
            "<br><br>" +
            "(C) '典型的' 意味着具有某种特定类型的人的或物的独特品质。" +
            "<br><br>" +
            "(D) '普通的' 意味着没有特别或独特的特征；正常的。"
    },
    {
        id: 6,
        question: "Her methods of teaching seemed __________ in the modern educational system.",
        chinese_question: "她的教学方法在现代教育系统中显得__________。",
        answers: [
            { option: "A", answer: "modern", chinese_answer: "现代的", chinese_romanization: "xiàndài de" },
            { option: "B", answer: "ancient", chinese_answer: "古老的", chinese_romanization: "gǔlǎo de" },
            { option: "C", answer: "new", chinese_answer: "新的", chinese_romanization: "xīn de" },
            { option: "D", answer: "recent", chinese_answer: "最近的", chinese_romanization: "zuìjìn de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'ancient' means belonging to the very distant past and no longer in existence. Figuratively, it can mean outdated or old-fashioned." +
            "<br><br>" +
            "(A) 'modern' means relating to the present or recent times as opposed to the remote past." +
            "<br><br>" +
            "(C) 'new' means not existing before; made, introduced, or discovered recently or now for the first time." +
            "<br><br>" +
            "(D) 'recent' means having happened, begun, or been done not long ago.",
        chinese_explanation: "(B) '古老的'一词意味着属于非常遥远的过去，不再存在。比喻地，它可以表示过时的或老式的。" +
            "<br><br>" +
            "(A) '现代的' 意味着与现在或最近的时间有关，而不是遥远的过去。" +
            "<br><br>" +
            "(C) '新的' 意味着以前不存在的；最近或现在首次制作、引入或发现的。" +
            "<br><br>" +
            "(D) '最近的' 意味着不久前发生的、开始的或完成的。"
    },
    {
        id: 7,
        question: "His argument was __________ and failed to convince the audience.",
        chinese_question: "他的论点很__________，未能说服观众。",
        answers: [
            { option: "A", answer: "strong", chinese_answer: "强壮", chinese_romanization: "qiángzhuàng" },
            { option: "B", answer: "energetic", chinese_answer: "精力充沛", chinese_romanization: "jīnglì chōngpèi" },
            { option: "C", answer: "weak", chinese_answer: "无力", chinese_romanization: "wúlì" },
            { option: "D", answer: "powerful", chinese_answer: "强大", chinese_romanization: "qiángdà" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'weak' means lacking the power to perform physically demanding tasks; lacking physical strength and energy. Figuratively, it can mean lacking in forcefulness, persuasiveness, or effectiveness." +
            "<br><br>" +
            "(A) 'strong' means having the power to move heavy weights or perform other physically demanding tasks." +
            "<br><br>" +
            "(B) 'energetic' means showing or involving great activity or vitality." +
            "<br><br>" +
            "(D) 'powerful' means having great power or strength.",
        chinese_explanation: "(C) '无力'一词意味着缺乏执行体力要求任务的能力；缺乏体力和精力。比喻地，它可以表示缺乏力度、说服力或有效性。" +
            "<br><br>" +
            "(A) '强壮' 意味着有力量移动重物或执行其他体力要求的任务。" +
            "<br><br>" +
            "(B) '精力充沛' 意味着表现出或涉及巨大的活动或活力。" +
            "<br><br>" +
            "(D) '强大' 意味着拥有巨大的力量或实力。"
    },
    {
        id: 8,
        question: "The soldiers faced __________ conditions in the war, including extreme cold and scarce supplies.",
        chinese_question: "士兵们在战争中面临 __________ 的条件，包括极端寒冷和物资稀缺。",
        answers: [
            { option: "A", answer: "mild", chinese_answer: "温和", chinese_romanization: "wēnhé" },
            { option: "B", answer: "brutal", chinese_answer: "残酷", chinese_romanization: "cánkù" },
            { option: "C", answer: "pleasant", chinese_answer: "愉快", chinese_romanization: "yúkuài" },
            { option: "D", answer: "easy", chinese_answer: "容易", chinese_romanization: "róngyì" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'brutal' means savagely violent or harsh." +
            "<br><br>" +
            "(A) 'mild' means gentle or not severe." +
            "<br><br>" +
            "(C) 'pleasant' means giving a sense of happy satisfaction or enjoyment." +
            "<br><br>" +
            "(D) 'easy' means achieved without great effort.",
        chinese_explanation: "(B) '残酷' 意味着野蛮的暴力或苛刻的。" +
            "<br><br>" +
            "(A) '温和' 意味着温柔或不严重。" +
            "<br><br>" +
            "(C) '愉快' 意味着带来愉快满意或享受。" +
            "<br><br>" +
            "(D) '容易' 意味着不费力气就能实现。"
    },
    {
        id: 9,
        question: "He felt __________ about asking for a raise, worried about what his boss might think.",
        chinese_question: "他对要求加薪感到 __________，担心他的老板会怎么想。",
        answers: [
            { option: "A", answer: "bold", chinese_answer: "大胆", chinese_romanization: "dàdǎn" },
            { option: "B", answer: "assertive", chinese_answer: "自信", chinese_romanization: "zìxìn" },
            { option: "C", answer: "bashful", chinese_answer: "羞怯", chinese_romanization: "xiūqiè" },
            { option: "D", answer: "daring", chinese_answer: "敢于冒险", chinese_romanization: "gǎnyú màoxiǎn" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'bashful' means reluctant to draw attention to oneself; shy." +
            "<br><br>" +
            "(A) 'bold' means showing a willingness to take risks." +
            "<br><br>" +
            "(B) 'assertive' means having or showing a confident and forceful personality." +
            "<br><br>" +
            "(D) 'daring' means adventurous or audaciously bold.",
        chinese_explanation: "(C) '羞怯' 意味着不愿意引起注意；害羞的。" +
            "<br><br>" +
            "(A) '大胆' 意味着表现出愿意冒险。" +
            "<br><br>" +
            "(B) '自信' 意味着具有或表现出自信和有力的个性。" +
            "<br><br>" +
            "(D) '敢于冒险' 意味着冒险或大胆的。"
    },
    {
        id: 10,
        question: "She lived a __________ life, traveling the world without any commitments.",
        chinese_question: "她过着__________的生活，环游世界，没有任何承诺。",
        answers: [
            { option: "A", answer: "cautious", chinese_answer: "谨慎的", chinese_romanization: "jǐnshèn de" },
            { option: "B", answer: "carefree", chinese_answer: "无忧无虑的", chinese_romanization: "wú yōu wú lǜ de" },
            { option: "C", answer: "anxious", chinese_answer: "焦虑的", chinese_romanization: "jiāolǜ de" },
            { option: "D", answer: "nervous", chinese_answer: "紧张的", chinese_romanization: "jǐnzhāng de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'carefree' means free from anxiety or responsibility. Figuratively, it can mean living without any serious worries or obligations." +
            "<br><br>" +
            "(A) 'cautious' means careful to avoid potential problems or dangers." +
            "<br><br>" +
            "(C) 'anxious' means feeling or showing worry, nervousness, or unease." +
            "<br><br>" +
            "(D) 'nervous' means easily agitated or alarmed.",
        chinese_explanation: "(B) '无忧无虑的'一词意味着没有焦虑或责任。比喻地，它可以表示没有任何严重担忧或义务地生活。" +
            "<br><br>" +
            "(A) '谨慎的' 意味着小心避免潜在的问题或危险。" +
            "<br><br>" +
            "(C) '焦虑的' 意味着感到或表现出担忧、紧张或不安。" +
            "<br><br>" +
            "(D) '紧张的' 意味着容易激动或警觉的。"
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
