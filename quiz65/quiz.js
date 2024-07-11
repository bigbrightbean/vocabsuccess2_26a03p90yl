// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "The __________ between the two leaders was palpable, making negotiations difficult.",
        chinese_question: "两位领导人之间的 __________ 显而易见，使谈判变得困难。",
        answers: [
            { option: "A", answer: "tension", chinese_answer: "紧张", chinese_romanization: "jǐnzhāng" },
            { option: "B", answer: "camaraderie", chinese_answer: "友情", chinese_romanization: "yǒuqíng" },
            { option: "C", answer: "indifference", chinese_answer: "漠不关心", chinese_romanization: "mò bù guānxīn" },
            { option: "D", answer: "friendship", chinese_answer: "友谊", chinese_romanization: "yǒuyì" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'tension' metaphorically means a strained relationship between people." +
            "<br><br>" +
            "(B) 'camaraderie' means mutual trust and friendship among people who spend a lot of time together." +
            "<br><br>" +
            "(C) 'indifference' means lack of interest, concern, or sympathy." +
            "<br><br>" +
            "(D) 'friendship' means a relationship of mutual affection between people.",
        chinese_explanation: "(A) '紧张' 比喻人们之间的紧张关系。" +
            "<br><br>" +
            "(B) '友情' 意味着经常在一起的人之间的相互信任和友谊。" +
            "<br><br>" +
            "(C) '漠不关心' 意味着缺乏兴趣、关心或同情。" +
            "<br><br>" +
            "(D) '友谊' 意味着人们之间的相互爱慕关系。"
    },
    {
        id: 2,
        question: "In remote areas, access to clean water is a __________ for survival and health.",
        chinese_question: "在偏远地区，获取干净的水是生存和健康的 __________。",
        answers: [
            { option: "A", answer: "luxury", chinese_answer: "奢侈", chinese_romanization: "shēchǐ" },
            { option: "B", answer: "burden", chinese_answer: "负担", chinese_romanization: "fùdān" },
            { option: "C", answer: "necessity", chinese_answer: "必需品", chinese_romanization: "bìxūpǐn" },
            { option: "D", answer: "hobby", chinese_answer: "爱好", chinese_romanization: "àihào" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'necessity' means the fact of being required or indispensable." +
            "<br><br>" +
            "(A) 'luxury' means a state of great comfort or elegance, especially when involving great expense." +
            "<br><br>" +
            "(B) 'burden' means a load, typically a heavy one." +
            "<br><br>" +
            "(D) 'hobby' means an activity done regularly in one's leisure time for pleasure.",
        chinese_explanation: "(C) '必需品' 一词意味着必需或不可缺少的事实。" +
            "<br><br>" +
            "(A) '奢侈' 意味着特别是涉及巨大开支的舒适或优雅的状态。" +
            "<br><br>" +
            "(B) '负担' 意味着通常是沉重的负担。" +
            "<br><br>" +
            "(D) '爱好' 意味着在闲暇时间定期做的愉快活动。"
    },
    {
        id: 3,
        question: "The student read a short __________ from the novel during the class presentation, highlighting the book's main themes.",
        chinese_question: "学生在课堂展示期间朗读了小说的一个短 __________，突出了书中的主要主题。",
        answers: [
            { option: "A", answer: "book", chinese_answer: "书", chinese_romanization: "shū" },
            { option: "B", answer: "preface", chinese_answer: "前言", chinese_romanization: "qiányán" },
            { option: "C", answer: "excerpt", chinese_answer: "节选", chinese_romanization: "jiéxuǎn" },
            { option: "D", answer: "chapter", chinese_answer: "章节", chinese_romanization: "zhāngjié" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'excerpt' means a short extract from a film, broadcast, or piece of music or writing." +
            "<br><br>" +
            "(A) 'book' means a written or printed work consisting of pages glued or sewn together along one side and bound in covers." +
            "<br><br>" +
            "(B) 'preface' means an introduction to a book, typically stating its subject, scope, or aims." +
            "<br><br>" +
            "(D) 'chapter' means a main division of a book, typically with a number or title.",
        chinese_explanation: "(C) '节选' 一词意味着电影、广播或音乐或写作作品的短摘录。" +
            "<br><br>" +
            "(A) '书' 意味着由一侧粘合或缝合在一起并装订成册的书面或印刷作品。" +
            "<br><br>" +
            "(B) '前言' 意味着书的介绍，通常说明其主题、范围或目的。" +
            "<br><br>" +
            "(D) '章节' 意味着书的主要部分，通常有编号或标题。"
    },
    {
        id: 4,
        question: "From the scattered clues, the detective made an __________ about the suspect's identity, leading to a crucial breakthrough in the case.",
        chinese_question: "根据零散的线索，侦探对嫌疑人的身份做出了 __________，从而在案件中取得了关键突破。",
        answers: [
            { option: "A", answer: "observation", chinese_answer: "观察", chinese_romanization: "guānchá" },
            { option: "B", answer: "assumption", chinese_answer: "假设", chinese_romanization: "jiǎshè" },
            { option: "C", answer: "inference", chinese_answer: "推论", chinese_romanization: "tuīlùn" },
            { option: "D", answer: "fact", chinese_answer: "事实", chinese_romanization: "shìshí" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'inference' means a conclusion reached on the basis of evidence and reasoning." +
            "<br><br>" +
            "(A) 'observation' means the action or process of observing something or someone carefully or in order to gain information." +
            "<br><br>" +
            "(B) 'assumption' means a thing that is accepted as true or as certain to happen, without proof." +
            "<br><br>" +
            "(D) 'fact' means a thing that is known or proved to be true.",
        chinese_explanation: "(C) '推论' 意味着根据证据和推理得出的结论。" +
            "<br><br>" +
            "(A) '观察' 意味着仔细观察某物或某人的行为或过程，以获取信息。" +
            "<br><br>" +
            "(B) '假设' 意味着在没有证据的情况下被接受为真或必然发生的事情。" +
            "<br><br>" +
            "(D) '事实' 意味着被知道或证明为真的事情。"
    },
    {
        id: 5,
        question: "The scientist received an __________ from the Nobel committee for her groundbreaking work in chemistry.",
        chinese_question: "这位科学家因其在化学方面的突破性工作而获得诺贝尔委员会的 __________。",
        answers: [
            { option: "A", answer: "criticism", chinese_answer: "批评", chinese_romanization: "pīpíng" },
            { option: "B", answer: "accolade", chinese_answer: "荣誉", chinese_romanization: "róngyù" },
            { option: "C", answer: "reprimand", chinese_answer: "训斥", chinese_romanization: "xùnchì" },
            { option: "D", answer: "dismissal", chinese_answer: "解雇", chinese_romanization: "jiěgù" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'accolade' means an award or privilege granted as a special honor or as an acknowledgment of merit." +
            "<br><br>" +
            "(A) 'criticism' means the expression of disapproval of someone or something based on perceived faults or mistakes." +
            "<br><br>" +
            "(C) 'reprimand' means a formal expression of disapproval." +
            "<br><br>" +
            "(D) 'dismissal' means the act of ordering or allowing someone to leave.",
        chinese_explanation: "(B) '荣誉' 一词意味着作为特别荣誉或作为对功绩的认可而授予的奖项或特权。" +
            "<br><br>" +
            "(A) '批评' 意味着基于感知的缺点或错误对某人或某事表示不满。" +
            "<br><br>" +
            "(C) '训斥' 意味着正式的批评。" +
            "<br><br>" +
            "(D) '解雇' 意味着命令或允许某人离开。"
    },
    {
        id: 6,
        question: "The students showed great __________ for their teacher, standing quietly as she entered the room.",
        chinese_question: "学生们对老师表现出极大的 __________，她进入房间时他们静静地站着。",
        answers: [
            { option: "A", answer: "disrespect", chinese_answer: "不敬", chinese_romanization: "bùjìng" },
            { option: "B", answer: "irreverence", chinese_answer: "无礼", chinese_romanization: "wúlǐ" },
            { option: "C", answer: "reverence", chinese_answer: "敬意", chinese_romanization: "jìngyì" },
            { option: "D", answer: "disdain", chinese_answer: "鄙视", chinese_romanization: "bǐshì" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'reverence' means deep respect for someone or something." +
            "<br><br>" +
            "(A) 'disrespect' means lack of respect or courtesy." +
            "<br><br>" +
            "(B) 'irreverence' means a lack of respect for people or things that are generally taken seriously." +
            "<br><br>" +
            "(D) 'disdain' means the feeling that someone or something is unworthy of one's consideration or respect; contempt.",
        chinese_explanation: "(C) '敬意' 一词意味着对某人或某事的深深尊敬。" +
            "<br><br>" +
            "(A) '不敬' 意味着缺乏尊重或礼貌。" +
            "<br><br>" +
            "(B) '无礼' 意味着对人或事物缺乏应有的尊重。" +
            "<br><br>" +
            "(D) '鄙视' 意味着认为某人或某事不值得考虑或尊重的感觉；蔑视。"
    },
    {
        id: 7,
        question: "The __________ of the school to her house made it convenient for her to walk there every day.",
        chinese_question: "学校与她家之间的 __________ 使她每天步行上学变得方便。",
        answers: [
            { option: "A", answer: "distance", chinese_answer: "距离", chinese_romanization: "jùlí" },
            { option: "B", answer: "remoteness", chinese_answer: "遥远", chinese_romanization: "yáoyuǎn" },
            { option: "C", answer: "proximity", chinese_answer: "接近", chinese_romanization: "jiējìn" },
            { option: "D", answer: "separation", chinese_answer: "分离", chinese_romanization: "fēnlí" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'proximity' means nearness in space, time, or relationship." +
            "<br><br>" +
            "(A) 'distance' means the amount of space between two points." +
            "<br><br>" +
            "(B) 'remoteness' means the state of being far away from other people, places, or things." +
            "<br><br>" +
            "(D) 'separation' means the action or state of moving or being moved apart.",
        chinese_explanation: "(C) '接近' 一词意味着在空间、时间或关系上的接近。" +
            "<br><br>" +
            "(A) '距离' 意味着两点之间的空间量。" +
            "<br><br>" +
            "(B) '遥远' 意味着远离其他人、地方或事物的状态。" +
            "<br><br>" +
            "(D) '分离' 意味着移动或被移动的动作或状态。"
    },
    {
        id: 8,
        question: "The __________ played a crucial role in negotiating the peace treaty between the two warring nations.",
        chinese_question: "这位 __________ 在谈判两国间的和平条约中发挥了关键作用。",
        answers: [
            { option: "A", answer: "soldier", chinese_answer: "士兵", chinese_romanization: "shìbīng" },
            { option: "B", answer: "journalist", chinese_answer: "记者", chinese_romanization: "jìzhě" },
            { option: "C", answer: "ambassador", chinese_answer: "大使", chinese_romanization: "dàshǐ" },
            { option: "D", answer: "merchant", chinese_answer: "商人", chinese_romanization: "shāngrén" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'ambassador' means an accredited diplomat sent by a country as its official representative to a foreign country." +
            "<br><br>" +
            "(A) 'soldier' means a person who serves in an army." +
            "<br><br>" +
            "(B) 'journalist' means a person who writes for newspapers, magazines, or news websites or prepares news to be broadcast." +
            "<br><br>" +
            "(D) 'merchant' means a person or company involved in wholesale trade, especially one dealing with foreign countries or supplying merchandise to a particular trade.",
        chinese_explanation: "(C) '大使' 一词意味着由一个国家派遣的公认的外交官，作为其在外国的正式代表。" +
            "<br><br>" +
            "(A) '士兵' 意味着在军队中服役的人。" +
            "<br><br>" +
            "(B) '记者' 意味着为报纸、杂志或新闻网站写作或准备广播新闻的人。" +
            "<br><br>" +
            "(D) '商人' 意味着从事批发贸易的人或公司，尤其是与外国打交道或向特定行业供应商品的公司。"
    },
    {
        id: 9,
        question: "The team's strategic planning gave them a significant __________ over their opponents in the competition.",
        chinese_question: "团队的战略规划使他们在竞争中比对手拥有显著的 __________。",
        answers: [
            { option: "A", answer: "disadvantage", chinese_answer: "劣势", chinese_romanization: "lièshì" },
            { option: "B", answer: "setback", chinese_answer: "挫折", chinese_romanization: "cuòzhé" },
            { option: "C", answer: "drawback", chinese_answer: "缺点", chinese_romanization: "quēdiǎn" },
            { option: "D", answer: "advantage", chinese_answer: "优势", chinese_romanization: "yōushì" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'advantage' means a condition or circumstance that puts one in a favorable or superior position." +
            "<br><br>" +
            "(A) 'disadvantage' means an unfavorable circumstance or condition that reduces the chances of success or effectiveness." +
            "<br><br>" +
            "(B) 'setback' means a reversal or check in progress." +
            "<br><br>" +
            "(C) 'drawback' means a feature that renders something less acceptable; a disadvantage or problem.",
        chinese_explanation: "(D) '优势' 一词意味着使某人处于有利或优越位置的条件或环境。" +
            "<br><br>" +
            "(A) '劣势' 意味着减少成功或有效性机会的不利情况或条件。" +
            "<br><br>" +
            "(B) '挫折' 意味着进展中的逆转或检查。" +
            "<br><br>" +
            "(C) '缺点' 意味着使某事物变得不那么可接受的特征；缺点或问题。"
    },
    {
        id: 10,
        question: "The athlete suffered an __________ on his knee after falling on the rough track during the race.",
        chinese_question: "在比赛中摔倒在粗糙的赛道上后，这名运动员的膝盖上出现了 __________。",
        answers: [
            { option: "A", answer: "incision", chinese_answer: "切口", chinese_romanization: "qiēkǒu" },
            { option: "B", answer: "laceration", chinese_answer: "撕裂伤", chinese_romanization: "sīliè shāng" },
            { option: "C", answer: "abrasion", chinese_answer: "擦伤", chinese_romanization: "cáshāng" },
            { option: "D", answer: "puncture", chinese_answer: "刺伤", chinese_romanization: "cìshāng" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'abrasion' means an area damaged by scraping or wearing away." +
            "<br><br>" +
            "(A) 'incision' means a surgical cut made in skin or flesh." +
            "<br><br>" +
            "(B) 'laceration' means a deep cut or tear in skin or flesh." +
            "<br><br>" +
            "(D) 'puncture' means a small hole made by a sharp object.",
        chinese_explanation: "(C) '擦伤' 一词意味着通过刮擦或磨损损坏的区域。" +
            "<br><br>" +
            "(A) '切口' 意味着皮肤或肉体上的外科切口。" +
            "<br><br>" +
            "(B) '撕裂伤' 意味着皮肤或肉体上的深切或撕裂。" +
            "<br><br>" +
            "(D) '刺伤' 意味着由尖锐物体造成的小孔。"
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
