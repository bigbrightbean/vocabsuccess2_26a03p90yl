// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "The donation was made by an __________ benefactor who wished to remain unknown.",
        chinese_question: "捐款是由一位希望保持匿名的 __________ 捐助者提供的。",
        answers: [
            { option: "A", answer: "famous", chinese_answer: "著名的", chinese_romanization: "zhùmíng de" },
            { option: "B", answer: "known", chinese_answer: "已知的", chinese_romanization: "yǐzhī de" },
            { option: "C", answer: "anonymous", chinese_answer: "匿名的", chinese_romanization: "nìmíng de" },
            { option: "D", answer: "identified", chinese_answer: "确认的", chinese_romanization: "quèrèn de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'anonymous' means (of a person) not identified by name; of unknown name." +
            "<br><br>" +
            "(A) 'famous' means known about by many people." +
            "<br><br>" +
            "(B) 'known' means recognized, familiar, or within the scope of knowledge." +
            "<br><br>" +
            "(D) 'identified' means having established or indicated who or what (someone or something) is.",
        chinese_explanation: "(C) '匿名的' 一词意味着（人）未被姓名识别的；姓名不详的。" +
            "<br><br>" +
            "(A) '著名的' 意味着被许多人知道的。" +
            "<br><br>" +
            "(B) '已知的' 意味着被识别、熟悉或在知识范围内的。" +
            "<br><br>" +
            "(D) '确认的' 意味着已经确定或表明（某人或某物）是什么或是谁。"
    },
    {
        id: 2,
        question: "With the advent of digital cameras, film photography has become somewhat __________, though some enthusiasts still practice it.",
        chinese_question: "随着数码相机的问世，胶片摄影已经变得有些 __________，尽管一些爱好者仍在实践。",
        answers: [
            { option: "A", answer: "modern", chinese_answer: "现代的", chinese_romanization: "xiàndài de" },
            { option: "B", answer: "obsolete", chinese_answer: "过时的", chinese_romanization: "guòshí de" },
            { option: "C", answer: "common", chinese_answer: "常见的", chinese_romanization: "chángjiàn de" },
            { option: "D", answer: "popular", chinese_answer: "流行的", chinese_romanization: "liúxíng de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'obsolete' means no longer produced or used; out of date." +
            "<br><br>" +
            "(A) 'modern' means relating to the present or recent times as opposed to the remote past." +
            "<br><br>" +
            "(C) 'common' means occurring, found, or done often; prevalent." +
            "<br><br>" +
            "(D) 'popular' means liked or admired by many people or by a particular person or group.",
        chinese_explanation: "(B) '过时的' 一词意味着不再生产或使用；过时的。" +
            "<br><br>" +
            "(A) '现代的' 意味着与现在或最近的时间有关，而不是遥远的过去。" +
            "<br><br>" +
            "(C) '常见的' 意味着经常发生、发现或完成的；普遍的。" +
            "<br><br>" +
            "(D) '流行的' 意味着被许多人或特定人群喜欢或钦佩的。"
    },
    {
        id: 3,
        question: "She is __________ in several languages, making her an excellent candidate for the international position.",
        chinese_question: "她在几种语言方面都很 __________，使她成为国际职位的优秀候选人。",
        answers: [
            { option: "A", answer: "unskilled", chinese_answer: "无技能的", chinese_romanization: "wú jìnéng de" },
            { option: "B", answer: "proficient", chinese_answer: "熟练的", chinese_romanization: "shúliàn de" },
            { option: "C", answer: "incompetent", chinese_answer: "无能的", chinese_romanization: "wúnéng de" },
            { option: "D", answer: "novice", chinese_answer: "新手", chinese_romanization: "xīnshǒu" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'proficient' means competent or skilled in doing or using something." +
            "<br><br>" +
            "(A) 'unskilled' means not having or requiring special skill or training." +
            "<br><br>" +
            "(C) 'incompetent' means not having or showing the necessary skills to do something successfully." +
            "<br><br>" +
            "(D) 'novice' means a person new to or inexperienced in a field or situation.",
        chinese_explanation: "(B) '熟练的' 一词意味着在做某事或使用某物方面有能力或有技能的。" +
            "<br><br>" +
            "(A) '无技能的' 意味着没有或不需要特殊技能或培训的。" +
            "<br><br>" +
            "(C) '无能的' 意味着没有或不表现出成功完成某事所需的技能的。" +
            "<br><br>" +
            "(D) '新手' 意味着在某个领域或情况下新来或缺乏经验的人。"
    },
    {
        id: 4,
        question: "Despite her exciting job as a travel writer, she still had to deal with __________ tasks like paperwork and emails.",
        chinese_question: "尽管她有着令人兴奋的旅行作家工作，但她仍然不得不处理 __________ 的任务，如文书工作和电子邮件。",
        answers: [
            { option: "A", answer: "extraordinary", chinese_answer: "非凡的", chinese_romanization: "fēifán de" },
            { option: "B", answer: "thrilling", chinese_answer: "激动人心的", chinese_romanization: "jīdòng rén xīn de" },
            { option: "C", answer: "mundane", chinese_answer: "平凡的", chinese_romanization: "píngfán de" },
            { option: "D", answer: "unusual", chinese_answer: "不寻常的", chinese_romanization: "bù xúncháng de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'mundane' means lacking interest or excitement; dull." +
            "<br><br>" +
            "(A) 'extraordinary' means very unusual or remarkable." +
            "<br><br>" +
            "(B) 'thrilling' means causing excitement and pleasure; exhilarating." +
            "<br><br>" +
            "(D) 'unusual' means not habitually or commonly occurring or done.",
        chinese_explanation: "(C) '平凡的' 一词意味着缺乏兴趣或兴奋；乏味的。" +
            "<br><br>" +
            "(A) '非凡的' 意味着非常不寻常或显著的。" +
            "<br><br>" +
            "(B) '激动人心的' 意味着引起兴奋和愉悦的；令人振奋的。" +
            "<br><br>" +
            "(D) '不寻常的' 意味着不习惯或不常见的或完成的。"
    },
    {
        id: 5,
        question: "The new CEO faced a __________ challenge in turning around the failing company.",
        chinese_question: "新任首席执行官面临着将濒临失败的公司扭转过来的 __________ 挑战。",
        answers: [
            { option: "A", answer: "trivial", chinese_answer: "琐碎", chinese_romanization: "suǒsuì" },
            { option: "B", answer: "formidable", chinese_answer: "强大", chinese_romanization: "qiángdà" },
            { option: "C", answer: "insignificant", chinese_answer: "微不足道", chinese_romanization: "wēibùzúdào" },
            { option: "D", answer: "easy", chinese_answer: "简单", chinese_romanization: "jiǎndān" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'formidable' means inspiring fear or respect through being impressively large, powerful, intense, or capable." +
            "<br><br>" +
            "(A) 'trivial' means of little value or importance." +
            "<br><br>" +
            "(C) 'insignificant' means too small or unimportant to be worth consideration." +
            "<br><br>" +
            "(D) 'easy' means achieved without great effort; presenting few difficulties.",
        chinese_explanation: "(B) '强大' 一词意味着通过令人印象深刻的大、强、强烈或有能力来激起恐惧或尊敬。" +
            "<br><br>" +
            "(A) '琐碎' 意味着价值或重要性不大。" +
            "<br><br>" +
            "(C) '微不足道' 意味着太小或不重要，不值得考虑。" +
            "<br><br>" +
            "(D) '简单' 意味着无需努力即可实现；呈现很少困难。"
    },
    {
        id: 6,
        question: "The rapid growth of the city led to a __________ increase in pollution and traffic congestion, making daily commutes more challenging for residents.",
        chinese_question: "城市的快速增长导致污染和交通拥堵的 __________ 增加，使居民的日常通勤更加困难。",
        answers: [
            { option: "A", answer: "unrelated", chinese_answer: "无关的", chinese_romanization: "wúguān de" },
            { option: "B", answer: "minimal", chinese_answer: "最小的", chinese_romanization: "zuìxiǎo de" },
            { option: "C", answer: "unexpected", chinese_answer: "意外的", chinese_romanization: "yìwài de" },
            { option: "D", answer: "concomitant", chinese_answer: "伴随的", chinese_romanization: "bànsuí de" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'concomitant' means naturally accompanying or associated with something." +
            "<br><br>" +
            "(A) 'unrelated' means not connected or related to something." +
            "<br><br>" +
            "(B) 'minimal' means of a minimum amount, quantity, or degree; negligible." +
            "<br><br>" +
            "(C) 'unexpected' means not expected or regarded as likely to happen.",
        chinese_explanation: "(D) '伴随的' 意味着自然伴随或与某事物相关的。" +
            "<br><br>" +
            "(A) '无关的' 意味着与某事无关或不相关。" +
            "<br><br>" +
            "(B) '最小的' 意味着最小的数量、数量或程度；可以忽略不计的。" +
            "<br><br>" +
            "(C) '意外的' 意味着没有预料到或认为不太可能发生的。"
    },
    {
        id: 7,
        question: "Her __________ sense of smell allowed her to detect the faintest scents in the room.",
        chinese_question: "她 __________ 的嗅觉使她能在房间里闻到最微弱的气味。",
        answers: [
            { option: "A", answer: "dull", chinese_answer: "迟钝", chinese_romanization: "chídùn" },
            { option: "B", answer: "indifferent", chinese_answer: "漠不关心", chinese_romanization: "mò bù guān xīn" },
            { option: "C", answer: "keen", chinese_answer: "敏锐", chinese_romanization: "mǐnruì" },
            { option: "D", answer: "weak", chinese_answer: "虚弱", chinese_romanization: "xūruò" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'keen' means highly developed or sharp." +
            "<br><br>" +
            "(A) 'dull' means lacking interest or excitement or lacking sharpness." +
            "<br><br>" +
            "(B) 'indifferent' means having no particular interest or sympathy; unconcerned." +
            "<br><br>" +
            "(D) 'weak' means lacking the power to perform physically demanding tasks; lacking physical strength and energy.",
        chinese_explanation: "(C) '敏锐' 意味着高度发达或敏锐的。" +
            "<br><br>" +
            "(A) '迟钝' 意味着缺乏兴趣或兴奋或缺乏锐利。" +
            "<br><br>" +
            "(B) '漠不关心' 意味着没有特别的兴趣或同情；不关心。" +
            "<br><br>" +
            "(D) '虚弱' 意味着缺乏进行体力劳动的能力；缺乏体力和精力。"
    },
    {
        id: 8,
        question: "Her __________ appetite for knowledge kept her reading books late into the night, never satisfied with what she had learned.",
        chinese_question: "她对知识的 __________ 渴求使她熬夜读书，从未对自己学到的东西感到满足。",
        answers: [
            { option: "A", answer: "insatiable", chinese_answer: "无法满足的", chinese_romanization: "wúfǎ mǎnzú de" },
            { option: "B", answer: "limited", chinese_answer: "有限的", chinese_romanization: "yǒuxiàn de" },
            { option: "C", answer: "satisfied", chinese_answer: "满意的", chinese_romanization: "mǎnyì de" },
            { option: "D", answer: "restrained", chinese_answer: "克制的", chinese_romanization: "kèzhì de" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'insatiable' means impossible to satisfy." +
            "<br><br>" +
            "(B) 'limited' means restricted in size, amount, or extent." +
            "<br><br>" +
            "(C) 'satisfied' means contented; pleased." +
            "<br><br>" +
            "(D) 'restrained' means characterized by reserve or moderation.",
        chinese_explanation: "(A) '无法满足的' 意味着无法满足的。" +
            "<br><br>" +
            "(B) '有限的' 意味着在大小、数量或程度上受限的。" +
            "<br><br>" +
            "(C) '满意的' 意味着满足的；高兴的。" +
            "<br><br>" +
            "(D) '克制的' 意味着表现出克制或节制的。"
    },
    {
        id: 9,
        question: "The food supply was __________ to meet the needs of the growing population.",
        chinese_question: "食物供应 __________，无法满足不断增长的人口需求。",
        answers: [
            { option: "A", answer: "ample", chinese_answer: "充足的", chinese_romanization: "chōngzú de" },
            { option: "B", answer: "abundant", chinese_answer: "丰富的", chinese_romanization: "fēngfù de" },
            { option: "C", answer: "insufficient", chinese_answer: "不足的", chinese_romanization: "bùzú de" },
            { option: "D", answer: "plentiful", chinese_answer: "大量的", chinese_romanization: "dàliàng de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'insufficient' means not enough; inadequate." +
            "<br><br>" +
            "(A) 'ample' means enough or more than enough; plentiful." +
            "<br><br>" +
            "(B) 'abundant' means existing or available in large quantities; plentiful." +
            "<br><br>" +
            "(D) 'plentiful' means existing in or yielding great quantities; abundant.",
        chinese_explanation: "(C) '不足的' 一词意味着不够的；不充足的。" +
            "<br><br>" +
            "(A) '充足的' 意味着足够的或多于足够的；丰富的。" +
            "<br><br>" +
            "(B) '丰富的' 意味着以大数量存在或可获得的；丰富的。" +
            "<br><br>" +
            "(D) '大量的' 意味着存在或产生大量的；丰富的。"
    },
    {
        id: 10,
        question: "Even an __________ day can become memorable with the right attitude.",
        chinese_question: "即使是 __________ 的一天，怀着正确的态度也能变得难忘。",
        answers: [
            { option: "A", answer: "ordinary", chinese_answer: "普通的", chinese_romanization: "pǔtōng de" },
            { option: "B", answer: "exceptional", chinese_answer: "杰出的", chinese_romanization: "jiéchū de" },
            { option: "C", answer: "extraordinary", chinese_answer: "非凡的", chinese_romanization: "fēifán de" },
            { option: "D", answer: "rare", chinese_answer: "罕见的", chinese_romanization: "hǎnjiàn de" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'ordinary' metaphorically means routine or not special." +
            "<br><br>" +
            "(B) 'exceptional' means unusually good; outstanding." +
            "<br><br>" +
            "(C) 'extraordinary' means very unusual or remarkable." +
            "<br><br>" +
            "(D) 'rare' means not occurring very often.",
        chinese_explanation: "(A) '普通的' 比喻例行的或不特别的。" +
            "<br><br>" +
            "(B) '杰出的' 意味着异常好的；出色的。" +
            "<br><br>" +
            "(C) '非凡的' 意味着非常不寻常或卓越的。" +
            "<br><br>" +
            "(D) '罕见的' 意味着不常发生的。"
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
