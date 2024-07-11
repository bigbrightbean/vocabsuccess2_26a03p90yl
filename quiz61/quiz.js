// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "The town was not prepared for the __________ of tourists that arrived during the holiday season.",
        chinese_question: "小镇没有为节假日期间到来的游客__________做好准备。",
        answers: [
            { option: "A", answer: "trickle", chinese_answer: "涓涓细流", chinese_romanization: "juānjuān xìliú" },
            { option: "B", answer: "onslaught", chinese_answer: "猛攻", chinese_romanization: "měnggōng" },
            { option: "C", answer: "drizzle", chinese_answer: "毛毛雨", chinese_romanization: "máomáoyǔ" },
            { option: "D", answer: "delay", chinese_answer: "延迟", chinese_romanization: "yánchí" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'onslaught' means a fierce or destructive attack." +
            "<br><br>" +
            "(A) 'trickle' means a small flow of liquid." +
            "<br><br>" +
            "(C) 'drizzle' means light rain falling in very fine drops." +
            "<br><br>" +
            "(D) 'delay' means a period of time by which something is late or postponed.",
        chinese_explanation: "(B) '猛攻'一词意味着激烈或破坏性的攻击。" +
            "<br><br>" +
            "(A) '涓涓细流' 意味着少量液体的流动。" +
            "<br><br>" +
            "(C) '毛毛雨' 意味着非常细的小雨。" +
            "<br><br>" +
            "(D) '延迟' 意味着某物迟到或推迟的时间段。"
    },
    {
        id: 2,
        question: "He made a __________ during his speech, confusing the audience.",
        chinese_question: "他在演讲时犯了一个 __________，让观众感到困惑。",
        answers: [
            { option: "A", answer: "blunder", chinese_answer: "错误", chinese_romanization: "cuòwù" },
            { option: "B", answer: "success", chinese_answer: "成功", chinese_romanization: "chénggōng" },
            { option: "C", answer: "victory", chinese_answer: "胜利", chinese_romanization: "shènglì" },
            { option: "D", answer: "masterpiece", chinese_answer: "杰作", chinese_romanization: "jiézuò" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'blunder' means a stupid or careless mistake." + 
            "<br><br>" +
            "(B) 'success' means the accomplishment of an aim or purpose." + 
            "<br><br>" +
            "(C) 'victory' means an act of defeating an enemy or opponent in a battle, game, or other competition." + 
            "<br><br>" +
            "(D) 'masterpiece' means a work of outstanding artistry, skill, or workmanship.",
        chinese_explanation: "(A) '错误' 意味着愚蠢或粗心的错误。" + 
            "<br><br>" +
            "(B) '成功' 意味着实现目标或目的。" + 
            "<br><br>" +
            "(C) '胜利' 意味着在战斗、比赛或其他竞争中击败敌人或对手的行为。" + 
            "<br><br>" +
            "(D) '杰作' 意味着杰出的艺术、技巧或工艺作品。"
    },
    {
        id: 3,
        question: "His __________ knew no bounds; he aimed to lead the company one day.",
        chinese_question: "他的__________无边无际；他立志有一天要领导公司。",
        answers: [
            { option: "A", answer: "laziness", chinese_answer: "懒惰", chinese_romanization: "lǎnduò" },
            { option: "B", answer: "fear", chinese_answer: "恐惧", chinese_romanization: "kǒngjù" },
            { option: "C", answer: "ambition", chinese_answer: "野心", chinese_romanization: "yěxīn" },
            { option: "D", answer: "doubt", chinese_answer: "怀疑", chinese_romanization: "huáiyí" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'ambition' means a strong desire to do or achieve something, typically requiring determination and hard work. Figuratively, it can mean having high aspirations or goals." + 
            "<br><br>" +
            "(A) 'laziness' means the quality of being unwilling to work or use energy." + 
            "<br><br>" +
            "(B) 'fear' means an unpleasant emotion caused by the belief that someone or something is dangerous, likely to cause pain, or a threat." + 
            "<br><br>" +
            "(D) 'doubt' means a feeling of uncertainty or lack of conviction.",
        chinese_explanation: "(C) '野心' 一词意味着强烈的愿望去做或实现某事，通常需要决心和努力工作。比喻地，它可以表示有高远的抱负或目标。" + 
            "<br><br>" +
            "(A) '懒惰' 意味着不愿工作或使用精力的特质。" + 
            "<br><br>" +
            "(B) '恐惧' 意味着由相信某人或某物是危险的、可能会导致痛苦或威胁引起的不愉快情绪。" + 
            "<br><br>" +
            "(D) '怀疑' 意味着不确定或缺乏信心的感觉。"
    },
    {
        id: 4,
        question: "The __________ of the tale is that kindness always wins in the end.",
        chinese_question: "这个故事的 __________ 是，善良最终总是获胜。",
        answers: [
            { option: "A", answer: "moral", chinese_answer: "道德", chinese_romanization: "dàodé" },
            { option: "B", answer: "mistake", chinese_answer: "错误", chinese_romanization: "cuòwù" },
            { option: "C", answer: "trick", chinese_answer: "诡计", chinese_romanization: "guǐjì" },
            { option: "D", answer: "challenge", chinese_answer: "挑战", chinese_romanization: "tiǎozhàn" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'moral' metaphorically means a lesson or principle contained in or taught by a story or event." + 
            "<br><br>" +
            "(B) 'mistake' means an action or judgment that is misguided or wrong." + 
            "<br><br>" +
            "(C) 'trick' means a cunning or skillful act or scheme intended to deceive or outwit someone." + 
            "<br><br>" +
            "(D) 'challenge' means a call to take part in a contest or competition, especially a duel.",
        chinese_explanation: "(A) '道德' 比喻故事或事件中包含的或教导的教训或原则。" + 
            "<br><br>" +
            "(B) '错误' 意味着误导或错误的行为或判断。" + 
            "<br><br>" +
            "(C) '诡计' 意味着旨在欺骗或智胜某人的狡猾或巧妙的行为或计划。" + 
            "<br><br>" +
            "(D) '挑战' 意味着呼吁参加比赛或竞争，特别是决斗。"
    },
    {
        id: 5,
        question: "The project followed its natural __________, leading to a successful conclusion.",
        chinese_question: "项目按其自然 __________ 进行，最终取得成功。",
        answers: [
            { option: "A", answer: "course", chinese_answer: "进程", chinese_romanization: "jìnchéng" },
            { option: "B", answer: "halt", chinese_answer: "停止", chinese_romanization: "tíngzhǐ" },
            { option: "C", answer: "diversion", chinese_answer: "转向", chinese_romanization: "zhuǎnxiàng" },
            { option: "D", answer: "failure", chinese_answer: "失败", chinese_romanization: "shībài" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'course' metaphorically means the progression or development of something." + 
            "<br><br>" +
            "(B) 'halt' means to bring or come to an abrupt stop." + 
            "<br><br>" +
            "(C) 'diversion' means an instance of turning something aside from its course." + 
            "<br><br>" +
            "(D) 'failure' means lack of success.",
        chinese_explanation: "(A) '进程' 比喻某物的进展或发展。" + 
            "<br><br>" +
            "(B) '停止' 意味着突然停止。" + 
            "<br><br>" +
            "(C) '转向' 意味着将某物转离其进程的实例。" + 
            "<br><br>" +
            "(D) '失败' 意味着缺乏成功。"
    },
    {
        id: 6,
        question: "The __________ of living in poverty is something he never wants to experience again.",
        chinese_question: "生活在贫困中的__________是他永远不想再经历的。",
        answers: [
            { option: "A", answer: "joy", chinese_answer: "喜悦", chinese_romanization: "xǐyuè" },
            { option: "B", answer: "happiness", chinese_answer: "幸福", chinese_romanization: "xìngfú" },
            { option: "C", answer: "misery", chinese_answer: "痛苦", chinese_romanization: "tòngkǔ" },
            { option: "D", answer: "delight", chinese_answer: "高兴", chinese_romanization: "gāoxìng" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'misery' means a state or feeling of great physical or mental distress or discomfort. Figuratively, it can mean extreme suffering or hardship." + 
            "<br><br>" +
            "(A) 'joy' means a feeling of great pleasure and happiness." + 
            "<br><br>" +
            "(B) 'happiness' means the state of being happy." + 
            "<br><br>" +
            "(D) 'delight' means great pleasure.",
        chinese_explanation: "(C) '痛苦' 一词意味着身体或精神上的极大痛苦或不适。比喻地，它可以表示极大的痛苦或困境。" + 
            "<br><br>" +
            "(A) '喜悦' 意味着极大的快乐和幸福感。" + 
            "<br><br>" +
            "(B) '幸福' 意味着幸福的状态。" + 
            "<br><br>" +
            "(D) '高兴' 意味着极大的快乐。"
    },
    {
        id: 7,
        question: "He handled the criticism with __________ and didn't get upset.",
        chinese_question: "他 __________ 地处理了批评，并没有生气。",
        answers: [
            { option: "A", answer: "grace", chinese_answer: "优雅", chinese_romanization: "yōuyǎ" },
            { option: "B", answer: "anger", chinese_answer: "愤怒", chinese_romanization: "fènnù" },
            { option: "C", answer: "frustration", chinese_answer: "挫折", chinese_romanization: "cuòzhé" },
            { option: "D", answer: "impatience", chinese_answer: "不耐烦", chinese_romanization: "bù nàifán" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'grace' metaphorically means courteous goodwill." + 
            "<br><br>" +
            "(B) 'anger' means a strong feeling of annoyance, displeasure, or hostility." + 
            "<br><br>" +
            "(C) 'frustration' means the feeling of being upset or annoyed, especially because of inability to change or achieve something." + 
            "<br><br>" +
            "(D) 'impatience' means the tendency to be quickly irritated or provoked.",
        chinese_explanation: "(A) '优雅' 比喻礼貌的善意。" + 
            "<br><br>" +
            "(B) '愤怒' 意味着强烈的恼怒、不满或敌意。" + 
            "<br><br>" +
            "(C) '挫折' 意味着感到沮丧，尤其是因为无法改变或实现某事。" + 
            "<br><br>" +
            "(D) '不耐烦' 意味着迅速被激怒或激怒的倾向。"
    },
    {
        id: 8,
        question: "His words sent a __________ down her spine, making her feel uneasy.",
        chinese_question: "他的话让她脊背发 __________，使她感到不安。",
        answers: [
            { option: "A", answer: "chill", chinese_answer: "寒", chinese_romanization: "hán" },
            { option: "B", answer: "thrill", chinese_answer: "激动", chinese_romanization: "jīdòng" },
            { option: "C", answer: "comfort", chinese_answer: "舒适", chinese_romanization: "shūshì" },
            { option: "D", answer: "relief", chinese_answer: "放松", chinese_romanization: "fàngsōng" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'chill' metaphorically means a sudden and intense feeling of fear or anxiety." + 
            "<br><br>" +
            "(B) 'thrill' means a sudden feeling of excitement and pleasure." + 
            "<br><br>" +
            "(C) 'comfort' means a state of physical ease and freedom from pain or constraint." + 
            "<br><br>" +
            "(D) 'relief' means a feeling of reassurance and relaxation following release from anxiety or distress.",
        chinese_explanation: "(A) '寒' 比喻突然和强烈的恐惧或焦虑感。" + 
            "<br><br>" +
            "(B) '激动' 意味着突然的兴奋和快乐感。" + 
            "<br><br>" +
            "(C) '舒适' 意味着身体轻松和没有疼痛或约束的状态。" + 
            "<br><br>" +
            "(D) '放松' 意味着从焦虑或痛苦中解脱后的放心和放松感。"
    },
    {
        id: 9,
        question: "The idea that he could fly was just a __________ of his overactive imagination.",
        chinese_question: "他能飞的想法只是他过度活跃的想象力的__________。",
        answers: [
            { option: "A", answer: "reality", chinese_answer: "现实", chinese_romanization: "xiànshí" },
            { option: "B", answer: "fact", chinese_answer: "事实", chinese_romanization: "shìshí" },
            { option: "C", answer: "figment", chinese_answer: "幻想", chinese_romanization: "huànxiǎng" },
            { option: "D", answer: "truth", chinese_answer: "真相", chinese_romanization: "zhēnxiàng" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'figment' means a thing that someone believes to be real but that exists only in their imagination." +
            "<br><br>" +
            "(A) 'reality' means the world or the state of things as they actually exist." +
            "<br><br>" +
            "(B) 'fact' means a thing that is known or proved to be true." +
            "<br><br>" +
            "(D) 'truth' means the quality or state of being true.",
        chinese_explanation: "(C) '幻想'一词意味着某人相信是真实的东西，但实际上只存在于他们的想象中。" +
            "<br><br>" +
            "(A) '现实' 意味着世界或事物的实际存在状态。" +
            "<br><br>" +
            "(B) '事实' 意味着已知或证明为真的事情。" +
            "<br><br>" +
            "(D) '真相' 意味着真实的质量或状态。"
    },
    {
        id: 10,
        question: "Her emotional __________ through the past year has been tough but rewarding.",
        chinese_question: "她在过去一年的情感 __________ 很艰难，但很有成效。",
        answers: [
            { option: "A", answer: "journey", chinese_answer: "旅程", chinese_romanization: "lǚchéng" },
            { option: "B", answer: "stop", chinese_answer: "停止", chinese_romanization: "tíngzhǐ" },
            { option: "C", answer: "halt", chinese_answer: "中止", chinese_romanization: "zhōngzhǐ" },
            { option: "D", answer: "standstill", chinese_answer: "停滞", chinese_romanization: "tíngzhì" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'journey' metaphorically means a long and often difficult process of personal change and development." +
            "<br><br>" +
            "(B) 'stop' means a cessation of movement or operation." +
            "<br><br>" +
            "(C) 'halt' means bring or come to an abrupt stop." +
            "<br><br>" +
            "(D) 'standstill' means a situation or condition in which there is no movement or activity at all.",
        chinese_explanation: "(A) '旅程' 比喻个人变化和发展的漫长而常常困难的过程。" +
            "<br><br>" +
            "(B) '停止' 意味着运动或操作的停止。" +
            "<br><br>" +
            "(C) '中止' 意味着突然停止。" +
            "<br><br>" +
            "(D) '停滞' 意味着完全没有运动或活动的情况或条件。"
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
