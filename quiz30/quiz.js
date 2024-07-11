// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "The delivery arrived at the most __________ moment, just as they were running out of supplies.",
        chinese_question: "就在他们快要用完物资的时候，送货在最 __________ 的时刻到达。",
        answers: [
            { option: "A", answer: "untimely", chinese_answer: "不合时宜的", chinese_romanization: "bù hé shíyí de" },
            { option: "B", answer: "inconvenient", chinese_answer: "不方便的", chinese_romanization: "bù fāngbiàn de" },
            { option: "C", answer: "opportune", chinese_answer: "适时的", chinese_romanization: "shìshí de" },
            { option: "D", answer: "inappropriate", chinese_answer: "不适当的", chinese_romanization: "bù shìdàng de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'opportune' means (of a time) well-chosen or particularly favorable or appropriate." +
            "<br><br>" +
            "(A) 'untimely' means (of an event or act) happening or done at an unsuitable time." +
            "<br><br>" +
            "(B) 'inconvenient' means causing trouble, difficulties, or discomfort." +
            "<br><br>" +
            "(D) 'inappropriate' means not suitable or proper in the circumstances.",
        chinese_explanation: "(C) '适时的' 一词意味着（时间）选择得当或特别有利或合适的。" +
            "<br><br>" +
            "(A) '不合时宜的' 意味着（事件或行为）发生或在不合适的时间进行。" +
            "<br><br>" +
            "(B) '不方便的' 意味着造成麻烦、困难或不适的。" +
            "<br><br>" +
            "(D) '不适当的' 意味着在这种情况下不合适或不适当的。"
    },
    {
        id: 2,
        question: "She was __________ in her speech, making her an excellent public speaker.",
        chinese_question: "她的演讲 __________，使她成为出色的公共演讲者。",
        answers: [
            { option: "A", answer: "articulate", chinese_answer: "清晰的", chinese_romanization: "qīngxī de" },
            { option: "B", answer: "mumbling", chinese_answer: "喃喃自语的", chinese_romanization: "nánnán zìyǔ de" },
            { option: "C", answer: "incoherent", chinese_answer: "不连贯的", chinese_romanization: "bù liánguàn de" },
            { option: "D", answer: "hesitant", chinese_answer: "犹豫的", chinese_romanization: "yóuyù de" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'articulate' means having or showing the ability to speak fluently and coherently." +
            "<br><br>" +
            "(B) 'mumbling' means speaking in a low, indistinct manner, making it hard to hear." +
            "<br><br>" +
            "(C) 'incoherent' means expressed in an incomprehensible or confusing way; unclear." +
            "<br><br>" +
            "(D) 'hesitant' means tentative, unsure, or slow in acting or speaking.",
        chinese_explanation: "(A) '清晰的' 意味着具有或展示流利和连贯说话的能力。" +
            "<br><br>" +
            "(B) '喃喃自语的' 意味着以低声和不清晰的方式说话，使其难以听到。" +
            "<br><br>" +
            "(C) '不连贯的' 意味着以无法理解或混乱的方式表达；不清晰的。" +
            "<br><br>" +
            "(D) '犹豫的' 意味着在行动或说话中犹豫、不确定或缓慢的。"
    },
    {
        id: 3,
        question: "She could tell something was __________ when she noticed the unusual silence in the usually bustling office.",
        chinese_question: "当她注意到通常繁忙的办公室里异常的安静时，她知道有些 __________。",
        answers: [
            { option: "A", answer: "perfect", chinese_answer: "完美的", chinese_romanization: "wánměi de" },
            { option: "B", answer: "pleasant", chinese_answer: "愉快的", chinese_romanization: "yúkuài de" },
            { option: "C", answer: "amiss", chinese_answer: "不对劲的", chinese_romanization: "bù duì jìn de" },
            { option: "D", answer: "normal", chinese_answer: "正常的", chinese_romanization: "zhèngcháng de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'amiss' means not quite right; inappropriate or out of place." +
            "<br><br>" +
            "(A) 'perfect' means having all the required or desirable elements, qualities, or characteristics." +
            "<br><br>" +
            "(B) 'pleasant' means giving a sense of happy satisfaction or enjoyment." +
            "<br><br>" +
            "(D) 'normal' means conforming to a standard; usual, typical, or expected.",
        chinese_explanation: "(C) '不对劲的' 一词意味着不太对；不合适或不合时宜。" +
            "<br><br>" +
            "(A) '完美的' 意味着具备所有必需或理想的元素、品质或特征。" +
            "<br><br>" +
            "(B) '愉快的' 意味着带来快乐或享受的感觉。" +
            "<br><br>" +
            "(D) '正常的' 意味着符合标准；通常的、典型的或预期的。"
    },
    {
        id: 4,
        question: "They set up a __________ shelter for the flood victims.",
        chinese_question: "他们为洪水受害者设立了一个 __________ 的避难所。",
        answers: [
            { option: "A", answer: "temporary", chinese_answer: "临时的", chinese_romanization: "línshí de" },
            { option: "B", answer: "permanent", chinese_answer: "永久的", chinese_romanization: "yǒngjiǔ de" },
            { option: "C", answer: "luxurious", chinese_answer: "豪华的", chinese_romanization: "háohuá de" },
            { option: "D", answer: "spacious", chinese_answer: "宽敞的", chinese_romanization: "kuānchǎng de" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'temporary' means lasting for only a limited period of time; not permanent." +
            "<br><br>" +
            "(B) 'permanent' means lasting or intended to last or remain unchanged indefinitely." +
            "<br><br>" +
            "(C) 'luxurious' means extremely comfortable, elegant, or enjoyable." +
            "<br><br>" +
            "(D) 'spacious' means having ample space.",
        chinese_explanation: "(A) '临时的' 意味着仅持续有限时间的；非永久的。" +
            "<br><br>" +
            "(B) '永久的' 意味着持续或打算无限期地保持不变。" +
            "<br><br>" +
            "(C) '豪华的' 意味着极其舒适、优雅或愉快的。" +
            "<br><br>" +
            "(D) '宽敞的' 意味着空间充足的。"
    },
    {
        id: 5,
        question: "The new house had a __________ kitchen that could easily accommodate all their appliances and still have room for a dining table.",
        chinese_question: "新房子有一个__________的厨房，可以轻松容纳所有电器，并且还有放餐桌的空间。",
        answers: [
            { option: "A", answer: "tiny", chinese_answer: "很小的", chinese_romanization: "hěn xiǎo de" },
            { option: "B", answer: "cramped", chinese_answer: "狭窄的", chinese_romanization: "xiázhǎi de" },
            { option: "C", answer: "narrow", chinese_answer: "窄的", chinese_romanization: "zhǎi de" },
            { option: "D", answer: "capacious", chinese_answer: "宽敞的", chinese_romanization: "kuānchǎng de" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'capacious' means having a lot of space inside; roomy." +
            "<br><br>" +
            "(A) 'tiny' means very small." +
            "<br><br>" +
            "(B) 'cramped' means feeling or causing someone to feel uncomfortably confined or hemmed in." +
            "<br><br>" +
            "(C) 'narrow' means of small width in relation to length.",
        chinese_explanation: "(D) '宽敞的'一词意味着内部有很多空间；宽敞的。" +
            "<br><br>" +
            "(A) '很小的' 意味着非常小的。" +
            "<br><br>" +
            "(B) '狭窄的' 意味着让人感到不舒服地被限制在一个狭小空间里的。" +
            "<br><br>" +
            "(C) '窄的' 意味着相对于长度来说宽度小。"
    },
    {
        id: 6,
        question: "Her taste in music was quite __________, favoring styles from all over the world.",
        chinese_question: "她的音乐品味非常 __________，喜欢来自世界各地的风格。",
        answers: [
            { option: "A", answer: "exotic", chinese_answer: "异国情调的", chinese_romanization: "yìguó qíngdiào de" },
            { option: "B", answer: "typical", chinese_answer: "典型的", chinese_romanization: "diǎnxíng de" },
            { option: "C", answer: "conventional", chinese_answer: "传统的", chinese_romanization: "chuántǒng de" },
            { option: "D", answer: "mainstream", chinese_answer: "主流的", chinese_romanization: "zhǔliú de" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'exotic' metaphorically means attractively unusual or strikingly different." +
            "<br><br>" +
            "(B) 'typical' means having the distinctive qualities of a particular type of person or thing." +
            "<br><br>" +
            "(C) 'conventional' means based on or in accordance with what is generally done or believed." +
            "<br><br>" +
            "(D) 'mainstream' means the ideas, attitudes, or activities that are regarded as normal or conventional; the dominant trend in opinion, fashion, or the arts.",
        chinese_explanation: "(A) '异国情调的' 比喻吸引人地不寻常或与众不同。" +
            "<br><br>" +
            "(B) '典型的' 意味着具有某种类型的人的独特品质。" +
            "<br><br>" +
            "(C) '传统的' 意味着基于或符合普遍做法或信念的。" +
            "<br><br>" +
            "(D) '主流的' 意味着被认为正常或传统的思想、态度或活动；意见、时尚或艺术中的主导趋势。"
    },
    {
        id: 7,
        question: "The tall, __________ giraffe struggled to maneuver through the dense forest.",
        chinese_question: "高大、 __________ 的长颈鹿在密林中艰难地穿行。",
        answers: [
            { option: "A", answer: "coordinated", chinese_answer: "协调的", chinese_romanization: "xiétiáo de" },
            { option: "B", answer: "graceful", chinese_answer: "优雅的", chinese_romanization: "yōuyǎ de" },
            { option: "C", answer: "agile", chinese_answer: "敏捷的", chinese_romanization: "mǐnjié de" },
            { option: "D", answer: "ungainly", chinese_answer: "笨拙的", chinese_romanization: "bènzhuō de" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'ungainly' means awkward and clumsy." +
            "<br><br>" +
            "(A) 'coordinated' means able to use different parts of the body together smoothly and efficiently." +
            "<br><br>" +
            "(B) 'graceful' means having or showing grace or elegance." +
            "<br><br>" +
            "(C) 'agile' means able to move quickly and easily.",
        chinese_explanation: "(D) '笨拙的' 意味着笨拙和笨拙的。" +
            "<br><br>" +
            "(A) '协调的' 意味着能够顺利和有效地使用身体的不同部位。" +
            "<br><br>" +
            "(B) '优雅的' 意味着具有或表现出优雅或优雅。" +
            "<br><br>" +
            "(C) '敏捷的' 意味着能够快速轻松地移动。"
    },
    {
        id: 8,
        question: "The singer's __________ voice filled the concert hall, leaving the audience in awe.",
        chinese_question: "歌手 __________ 的声音充满了音乐厅，让观众惊叹不已。",
        answers: [
            { option: "A", answer: "resonant", chinese_answer: "共鸣的", chinese_romanization: "gòngmíng de" },
            { option: "B", answer: "weak", chinese_answer: "弱的", chinese_romanization: "ruò de" },
            { option: "C", answer: "silent", chinese_answer: "安静的", chinese_romanization: "ānjìng de" },
            { option: "D", answer: "soft", chinese_answer: "软的", chinese_romanization: "ruǎn de" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'resonant' means deep, clear, and continuing to sound or ring." +
            "<br><br>" +
            "(B) 'weak' means lacking the power to perform physically demanding tasks; lacking physical strength and energy." +
            "<br><br>" +
            "(C) 'silent' means not making or accompanied by any sound." +
            "<br><br>" +
            "(D) 'soft' means easy to mold, cut, compress, or fold; not hard or firm to the touch.",
        chinese_explanation: "(A) '共鸣的' 意味着深沉、清晰且持续响亮。" +
            "<br><br>" +
            "(B) '弱的' 意味着缺乏进行体力任务的力量；缺乏体力和精力。" +
            "<br><br>" +
            "(C) '安静的' 意味着没有声音或伴随任何声音。" +
            "<br><br>" +
            "(D) '软的' 意味着易于模制、切割、压缩或折叠的；不硬或不坚固的。"
    },
    {
        id: 9,
        question: "They stayed at a __________ hotel with all the amenities.",
        chinese_question: "他们住在一个拥有所有设施的 __________ 酒店。",
        answers: [
            { option: "A", answer: "modest", chinese_answer: "朴素的", chinese_romanization: "pǔsù de" },
            { option: "B", answer: "luxurious", chinese_answer: "奢华的", chinese_romanization: "shēhuá de" },
            { option: "C", answer: "simple", chinese_answer: "简单的", chinese_romanization: "jiǎndān de" },
            { option: "D", answer: "basic", chinese_answer: "基本的", chinese_romanization: "jīběn de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'luxurious' means extremely comfortable, elegant, or enjoyable, especially in a way that involves great expense." +
            "<br><br>" +
            "(A) 'modest' means unassuming or moderate in the estimation of one's abilities or achievements." +
            "<br><br>" +
            "(C) 'simple' means easily understood or done; presenting no difficulty." +
            "<br><br>" +
            "(D) 'basic' means forming an essential foundation or starting point; fundamental.",
        chinese_explanation: "(B) '奢华的' 意味着极其舒适、优雅或愉快的，尤其是涉及巨额费用的。" +
            "<br><br>" +
            "(A) '朴素的' 意味着对自己能力或成就的估计不过分。" +
            "<br><br>" +
            "(C) '简单的' 意味着容易理解或完成；没有困难的。" +
            "<br><br>" +
            "(D) '基本的' 意味着构成必要的基础或起点；基础的。"
    },
    {
        id: 10,
        question: "His performance was __________, not particularly remarkable but not bad either.",
        chinese_question: "他的表现是__________，既不特别出色也不差。",
        answers: [
            { option: "A", answer: "excellent", chinese_answer: "优秀的", chinese_romanization: "yōuxiù de" },
            { option: "B", answer: "poor", chinese_answer: "差的", chinese_romanization: "chà de" },
            { option: "C", answer: "average", chinese_answer: "普通的", chinese_romanization: "pǔtōng de" },
            { option: "D", answer: "outstanding", chinese_answer: "杰出的", chinese_romanization: "jiéchū de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'average' means a number expressing the central or typical value in a set of data. Figuratively, it can mean something that is typical or not out of the ordinary." +
            "<br><br>" +
            "(A) 'excellent' means extremely good; outstanding." +
            "<br><br>" +
            "(B) 'poor' means lacking sufficient money to live at a standard considered comfortable or normal in a society." +
            "<br><br>" +
            "(D) 'outstanding' means exceptionally good.",
        chinese_explanation: "(C) '普通的'一词意味着表示一组数据中的中心或典型值的数字。比喻地，它可以表示典型的或不出奇的事物。" +
            "<br><br>" +
            "(A) '优秀的' 意味着非常好；杰出的。" +
            "<br><br>" +
            "(B) '差的' 意味着缺乏足够的钱来维持社会中被认为舒适或正常的标准生活。" +
            "<br><br>" +
            "(D) '杰出的' 意味着非常好。"
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
