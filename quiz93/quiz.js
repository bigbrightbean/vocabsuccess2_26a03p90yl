// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "He decided to __________ through the job listings to see if there were any interesting opportunities.",
        chinese_question: "他决定__________工作列表，看看有没有有趣的机会。",
        answers: [
            { option: "A", answer: "purchase", chinese_answer: "购买", chinese_romanization: "gòumǎi" },
            { option: "B", answer: "scrutinize", chinese_answer: "仔细检查", chinese_romanization: "zǐxì jiǎnchá" },
            { option: "C", answer: "browse", chinese_answer: "浏览", chinese_romanization: "liúlǎn" },
            { option: "D", answer: "avoid", chinese_answer: "避免", chinese_romanization: "bìmiǎn" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'browse' means to look through or glance at casually. Figuratively, it can mean to casually look for or explore options." +
            "<br><br>" +
            "(A) 'purchase' means acquire (something) by paying for it; buy." +
            "<br><br>" +
            "(B) 'scrutinize' means examine or inspect closely and thoroughly." +
            "<br><br>" +
            "(D) 'avoid' means keep away from or stop oneself from doing (something).",
        chinese_explanation: "(C) '浏览'一词意味着随意地看或浏览。比喻地，它可以表示随意寻找或探索选择。" +
            "<br><br>" +
            "(A) '购买' 意味着通过支付购买（某物）。" +
            "<br><br>" +
            "(B) '仔细检查' 意味着仔细和彻底地检查或检查。" +
            "<br><br>" +
            "(D) '避免' 意味着远离或阻止自己做某事。"
    },
    {
        id: 2,
        question: "The university decided to __________ an honorary degree on the famous scientist for her groundbreaking work.",
        chinese_question: "大学决定__________一位著名科学家荣誉学位，以表彰她的开创性工作。",
        answers: [
            { option: "A", answer: "withhold", chinese_answer: "扣留", chinese_romanization: "kòuliú" },
            { option: "B", answer: "bestow", chinese_answer: "授予", chinese_romanization: "shòuyǔ" },
            { option: "C", answer: "deny", chinese_answer: "否认", chinese_romanization: "fǒurèn" },
            { option: "D", answer: "retract", chinese_answer: "撤回", chinese_romanization: "chèhuí" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'bestow' means to confer or present (an honor, right, or gift)." +
            "<br><br>" +
            "(A) 'withhold' means to refuse to give (something that is due to or is desired by another)." +
            "<br><br>" +
            "(C) 'deny' means to state that one refuses to admit the truth or existence of." +
            "<br><br>" +
            "(D) 'retract' means to draw back or withdraw (a statement or accusation) as untrue or unjustified.",
        chinese_explanation: "(B) '授予'一词意味着授予或呈现（荣誉、权利或礼物）。" +
            "<br><br>" +
            "(A) '扣留' 意味着拒绝给予（应归属于或希望得到的东西）。" +
            "<br><br>" +
            "(C) '否认' 意味着声明拒绝承认真实性或存在性。" +
            "<br><br>" +
            "(D) '撤回' 意味着撤回或撤销（声明或指控）为不真实或不公正的。"
    },
    {
        id: 3,
        question: "The children __________ their parents to take them to the amusement park over the weekend, pleading with wide eyes and promising to behave.",
        chinese_question: "孩子们__________父母在周末带他们去游乐园，睁大眼睛恳求并保证会表现好。",
        answers: [
            { option: "A", answer: "commanded", chinese_answer: "命令", chinese_romanization: "mìnglìng" },
            { option: "B", answer: "dismissed", chinese_answer: "不理会", chinese_romanization: "bù lǐhuì" },
            { option: "C", answer: "demanded", chinese_answer: "要求", chinese_romanization: "yāoqiú" },
            { option: "D", answer: "beseeched", chinese_answer: "恳求", chinese_romanization: "kěnqiú" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'beseeched' means to ask someone urgently and fervently to do something; implore; entreat." +
            "<br><br>" +
            "(A) 'commanded' means to give an authoritative order." +
            "<br><br>" +
            "(B) 'dismissed' means to treat as unworthy of serious consideration." +
            "<br><br>" +
            "(C) 'demanded' means to ask for authoritatively or brusquely.",
        chinese_explanation: "(D) '恳求' 一词意味着急切而热切地请求某人做某事；恳求；祈求。" +
            "<br><br>" +
            "(A) '命令' 意味着发布权威命令。" +
            "<br><br>" +
            "(B) '不理会' 意味着认为不值得认真考虑。" +
            "<br><br>" +
            "(C) '要求' 意味着以权威或粗鲁的方式要求。"
    },
    {
        id: 4,
        question: "He __________ in frustration when he realized he had locked his keys inside the car.",
        chinese_question: "当他意识到自己把钥匙锁在车里时，他__________着表达了他的沮丧。",
        answers: [
            { option: "A", answer: "whispered", chinese_answer: "低语", chinese_romanization: "dī yǔ" },
            { option: "B", answer: "bellowed", chinese_answer: "吼叫", chinese_romanization: "hǒujiào" },
            { option: "C", answer: "articulated", chinese_answer: "清晰表达", chinese_romanization: "qīngxī biǎodá" },
            { option: "D", answer: "contemplated", chinese_answer: "深思", chinese_romanization: "shēnsī" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'bellowed' means to shout something with a deep loud roar. Figuratively, it can mean expressing frustration or anger loudly." +
            "<br><br>" +
            "(A) 'whispered' means to speak very softly using one's breath without one's vocal cords, especially for the sake of secrecy." +
            "<br><br>" +
            "(C) 'articulated' means express (an idea or feeling) fluently and coherently." +
            "<br><br>" +
            "(D) 'contemplated' means think profoundly and at length; meditate.",
        chinese_explanation: "(B) '吼叫'一词意味着用深沉响亮的声音喊叫某事。比喻地，它可以表示大声表达沮丧或愤怒。" +
            "<br><br>" +
            "(A) '低语' 意味着用气息轻声说话而不发声，尤其是为了保密。" +
            "<br><br>" +
            "(C) '清晰表达' 意味着流利和连贯地表达（一个想法或感情）。" +
            "<br><br>" +
            "(D) '深思' 意味着深刻而长时间地思考；冥想。"
    },
    {
        id: 5,
        question: "She could easily __________ a future where technology played a central role in daily life, making tasks simpler and more efficient.",
        chinese_question: "她可以轻松地 __________ 一个技术在日常生活中发挥核心作用，使任务变得更简单和更高效的未来。",
        answers: [
            { option: "A", answer: "envisage", chinese_answer: "想象", chinese_romanization: "xiǎngxiàng" },
            { option: "B", answer: "dismiss", chinese_answer: "解散", chinese_romanization: "jiěsàn" },
            { option: "C", answer: "disregard", chinese_answer: "漠视", chinese_romanization: "mòshì" },
            { option: "D", answer: "forget", chinese_answer: "忘记", chinese_romanization: "wàngjì" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'envisage' means contemplate or conceive of as a possibility or a desirable future event." +
            "<br><br>" +
            "(B) 'dismiss' means order or allow to leave; send away." +
            "<br><br>" +
            "(C) 'disregard' means refuse to take notice of or acknowledge; disregard intentionally." +
            "<br><br>" +
            "(D) 'forget' means fail to remember.",
        chinese_explanation: "(A) '想象' 意味着将...视为可能或期望的未来事件。" +
            "<br><br>" +
            "(B) '解散' 意味着命令或允许离开；送走。" +
            "<br><br>" +
            "(C) '漠视' 意味着拒绝注意或承认；故意忽视。" +
            "<br><br>" +
            "(D) '忘记' 意味着未能记住。"
    },
    {
        id: 6,
        question: "His rude remarks managed to __________ almost everyone in the meeting.",
        chinese_question: "他粗鲁的言论设法 __________ 了会议上的几乎每个人。",
        answers: [
            { option: "A", answer: "antagonize", chinese_answer: "激怒", chinese_romanization: "jīnù" },
            { option: "B", answer: "please", chinese_answer: "取悦", chinese_romanization: "qǔyuè" },
            { option: "C", answer: "pacify", chinese_answer: "安抚", chinese_romanization: "ānfǔ" },
            { option: "D", answer: "calm", chinese_answer: "平静", chinese_romanization: "píngjìng" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'antagonize' means cause (someone) to become hostile." +
            "<br><br>" +
            "(B) 'please' means cause to feel happy and satisfied." +
            "<br><br>" +
            "(C) 'pacify' means quell the anger, agitation, or excitement of." +
            "<br><br>" +
            "(D) 'calm' means make (someone) tranquil and quiet; soothe.",
        chinese_explanation: "(A) '激怒' 意味着使（某人）变得敌对。" +
            "<br><br>" +
            "(B) '取悦' 意味着使感到高兴和满意。" +
            "<br><br>" +
            "(C) '安抚' 意味着平息愤怒、激动或兴奋。" +
            "<br><br>" +
            "(D) '平静' 意味着使（某人）安静和镇定；安慰。"
    },
    {
        id: 7,
        question: "The powerful earthquake had the potential to __________ entire villages.",
        chinese_question: "强烈的地震有可能 __________ 整个村庄。",
        answers: [
            { option: "A", answer: "support", chinese_answer: "支持", chinese_romanization: "zhīchí" },
            { option: "B", answer: "construct", chinese_answer: "建造", chinese_romanization: "jiànzào" },
            { option: "C", answer: "annihilate", chinese_answer: "毁灭", chinese_romanization: "huǐmiè" },
            { option: "D", answer: "preserve", chinese_answer: "保存", chinese_romanization: "bǎocún" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'annihilate' means destroy utterly; obliterate." +
            "<br><br>" +
            "(A) 'support' means bear all or part of the weight of; hold up." +
            "<br><br>" +
            "(B) 'construct' means build or erect (something, typically a building, road, or machine)." +
            "<br><br>" +
            "(D) 'preserve' means maintain (something) in its original or existing state.",
        chinese_explanation: "(C) '毁灭' 意味着彻底摧毁；消灭。" +
            "<br><br>" +
            "(A) '支持' 意味着承担全部或部分重量；支撑。" +
            "<br><br>" +
            "(B) '建造' 意味着建造或竖立（某物，通常是建筑物、道路或机器）。" +
            "<br><br>" +
            "(D) '保存' 意味着保持（某物）在其原始或现有状态。"
    },
    {
        id: 8,
        question: "The reporter __________ that the company had been involved in illegal activities.",
        chinese_question: "记者 __________ 公司涉嫌非法活动。",
        answers: [
            { option: "A", answer: "alleged", chinese_answer: "声称", chinese_romanization: "shēngchēng" },
            { option: "B", answer: "exonerated", chinese_answer: "证明无罪", chinese_romanization: "zhèngmíng wúzuì" },
            { option: "C", answer: "denied", chinese_answer: "否认", chinese_romanization: "fǒurèn" },
            { option: "D", answer: "supported", chinese_answer: "支持", chinese_romanization: "zhīchí" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'alleged' means claim or assert that someone has done something illegal or wrong, typically without proof." +
            "<br><br>" +
            "(B) 'exonerated' means to absolve someone from blame for a fault or wrongdoing, especially after due consideration of the case." +
            "<br><br>" +
            "(C) 'denied' means state that one refuses to admit the truth or existence of." +
            "<br><br>" +
            "(D) 'supported' means bear all or part of the weight of; hold up.",
        chinese_explanation: "(A) '声称' 意味着声称或断言某人做了非法或错误的事情，通常没有证据。" +
            "<br><br>" +
            "(B) '证明无罪' 意味着在充分考虑案件后解除某人的过错或不当行为的责任。" +
            "<br><br>" +
            "(C) '否认' 意味着声明拒绝承认真相或存在。" +
            "<br><br>" +
            "(D) '支持' 意味着承担全部或部分重量；支撑。"
    },
    {
        id: 9,
        question: "The politician's speech seemed to __________ the crowd, causing unrest and commotion.",
        chinese_question: "政客的演讲似乎 __________ 了人群，引起了不安和骚动。",
        answers: [
            { option: "A", answer: "calm", chinese_answer: "平静", chinese_romanization: "píngjìng" },
            { option: "B", answer: "relax", chinese_answer: "放松", chinese_romanization: "fàngsōng" },
            { option: "C", answer: "agitate", chinese_answer: "煽动", chinese_romanization: "shāndòng" },
            { option: "D", answer: "soothe", chinese_answer: "抚慰", chinese_romanization: "fǔwèi" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'agitate' means to make (someone) troubled or nervous." +
            "<br><br>" +
            "(A) 'calm' means make (someone) tranquil and quiet; soothe." +
            "<br><br>" +
            "(B) 'relax' means make or become less tense or anxious." +
            "<br><br>" +
            "(D) 'soothe' means gently calm (a person or their feelings).",
        chinese_explanation: "(C) '煽动' 意味着使（某人）烦恼或紧张。" +
            "<br><br>" +
            "(A) '平静' 意味着使（某人）安静和镇定；安慰。" +
            "<br><br>" +
            "(B) '放松' 意味着使或变得不那么紧张或焦虑。" +
            "<br><br>" +
            "(D) '抚慰' 意味着温和地安抚（一个人或他们的感情）。"
    },
    {
        id: 10,
        question: "Many young athletes __________ to compete in the Olympics one day.",
        chinese_question: "许多年轻运动员都__________有一天能参加奥运会。",
        answers: [
            { option: "A", answer: "hesitate", chinese_answer: "犹豫", chinese_romanization: "yóuyù" },
            { option: "B", answer: "aspire", chinese_answer: "渴望", chinese_romanization: "kěwàng" },
            { option: "C", answer: "dread", chinese_answer: "害怕", chinese_romanization: "hàipà" },
            { option: "D", answer: "avoid", chinese_answer: "避免", chinese_romanization: "bìmiǎn" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'aspire' means to direct one's hopes or ambitions toward achieving something. Figuratively, it can mean having a strong desire to achieve a particular goal." +
            "<br><br>" +
            "(A) 'hesitate' means pause before saying or doing something, especially through uncertainty." +
            "<br><br>" +
            "(C) 'dread' means anticipate with great apprehension or fear." +
            "<br><br>" +
            "(D) 'avoid' means keep away from or stop oneself from doing (something).",
        chinese_explanation: "(B) '渴望'一词意味着将希望或抱负指向实现某事。比喻地，它可以表示强烈的愿望实现特定目标。" +
            "<br><br>" +
            "(A) '犹豫' 意味着在说话或做事前犹豫不决，尤其是不确定。" +
            "<br><br>" +
            "(C) '害怕' 意味着怀着极大的恐惧或忧虑预期。" +
            "<br><br>" +
            "(D) '避免' 意味着远离或阻止自己做某事。"
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
