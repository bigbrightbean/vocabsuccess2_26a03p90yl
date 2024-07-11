// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "Her __________ in overcoming numerous obstacles to achieve her dream of becoming a doctor was truly inspiring.",
        chinese_question: "她在克服重重障碍实现成为医生梦想中的 __________ 真是令人鼓舞。",
        answers: [
            { option: "A", answer: "impatience", chinese_answer: "不耐烦", chinese_romanization: "bù nàifán" },
            { option: "B", answer: "perseverance", chinese_answer: "坚持不懈", chinese_romanization: "jiānchí bù xiè" },
            { option: "C", answer: "hesitation", chinese_answer: "犹豫", chinese_romanization: "yóuyù" },
            { option: "D", answer: "indifference", chinese_answer: "漠不关心", chinese_romanization: "mòbù guānxīn" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'perseverance' means persistence in doing something despite difficulty or delay in achieving success." +
            "<br><br>" +
            "(A) 'impatience' means the tendency to be quickly irritated or provoked." +
            "<br><br>" +
            "(C) 'hesitation' means the action of pausing or hesitating before saying or doing something." +
            "<br><br>" +
            "(D) 'indifference' means lack of interest, concern, or sympathy.",
        chinese_explanation: "(B) '坚持不懈' 一词意味着在实现成功的过程中尽管困难或延迟仍然坚持不懈。" +
            "<br><br>" +
            "(A) '不耐烦' 意味着容易被激怒或挑衅的倾向。" +
            "<br><br>" +
            "(C) '犹豫' 意味着在说或做某事前暂停或犹豫的行为。" +
            "<br><br>" +
            "(D) '漠不关心' 意味着缺乏兴趣、关心或同情。"
    },
    {
        id: 2,
        question: "In a __________ about which college to attend, she made a list of pros and cons for each option.",
        chinese_question: "在选择上哪所大学的 __________ 中，她为每个选项列出了利弊清单。",
        answers: [
            { option: "A", answer: "certainty", chinese_answer: "确定性", chinese_romanization: "quèdìngxìng" },
            { option: "B", answer: "solution", chinese_answer: "解决方案", chinese_romanization: "jiějué fāng'àn" },
            { option: "C", answer: "quandary", chinese_answer: "困惑", chinese_romanization: "kùnhuò" },
            { option: "D", answer: "clarity", chinese_answer: "清晰", chinese_romanization: "qīngxī" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'quandary' means a state of perplexity or uncertainty over what to do in a difficult situation." +
            "<br><br>" +
            "(A) 'certainty' means firm conviction that something is the case." +
            "<br><br>" +
            "(B) 'solution' means a means of solving a problem or dealing with a difficult situation." +
            "<br><br>" +
            "(D) 'clarity' means the quality of being coherent and intelligible.",
        chinese_explanation: "(C) '困惑' 意味着在困难情况下不知该怎么办的困惑或不确定状态。" +
            "<br><br>" +
            "(A) '确定性' 意味着坚信某事是真实的。" +
            "<br><br>" +
            "(B) '解决方案' 意味着解决问题或应对困难情况的手段。" +
            "<br><br>" +
            "(D) '清晰' 意味着连贯和可理解的品质。"
    },
    {
        id: 3,
        question: "The athlete suffered a severe __________ during the game, causing significant swelling and bruising on his leg.",
        chinese_question: "这名运动员在比赛中遭受了严重的 __________，导致腿部肿胀和淤青。",
        answers: [
            { option: "A", answer: "fracture", chinese_answer: "骨折", chinese_romanization: "gǔzhé" },
            { option: "B", answer: "contusion", chinese_answer: "挫伤", chinese_romanization: "cuòshāng" },
            { option: "C", answer: "laceration", chinese_answer: "撕裂伤", chinese_romanization: "sīliè shāng" },
            { option: "D", answer: "abrasion", chinese_answer: "擦伤", chinese_romanization: "cāshāng" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'contusion' means a region of injured tissue or skin in which blood capillaries have been ruptured; a bruise." +
            "<br><br>" +
            "(A) 'fracture' means the cracking or breaking of a hard object or material, typically a bone." +
            "<br><br>" +
            "(C) 'laceration' means a deep cut or tear in skin or flesh." +
            "<br><br>" +
            "(D) 'abrasion' means an area damaged by scraping or wearing away.",
        chinese_explanation: "(B) '挫伤' 意味着组织或皮肤受损，毛细血管破裂的区域；瘀伤。" +
            "<br><br>" +
            "(A) '骨折' 意味着坚硬物体或材料，通常是骨头的裂缝或断裂。" +
            "<br><br>" +
            "(C) '撕裂伤' 意味着皮肤或肉体的深切口或撕裂。" +
            "<br><br>" +
            "(D) '擦伤' 意味着被刮擦或磨损的区域。"
    },
    {
        id: 4,
        question: "The employee filed a __________ with the HR department regarding unfair treatment.",
        chinese_question: "员工向人力资源部提交了一份关于不公平待遇的 __________。",
        answers: [
            { option: "A", answer: "grievance", chinese_answer: "抱怨", chinese_romanization: "bàoyuàn" },
            { option: "B", answer: "compliment", chinese_answer: "称赞", chinese_romanization: "chēngzàn" },
            { option: "C", answer: "suggestion", chinese_answer: "建议", chinese_romanization: "jiànyì" },
            { option: "D", answer: "report", chinese_answer: "报告", chinese_romanization: "bàogào" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'grievance' means a real or imagined cause for complaint, especially unfair treatment." +
            "<br><br>" +
            "(B) 'compliment' means a polite expression of praise or admiration." +
            "<br><br>" +
            "(C) 'suggestion' means an idea or plan put forward for consideration." +
            "<br><br>" +
            "(D) 'report' means a spoken or written account of something that one has observed, heard, done, or investigated.",
        chinese_explanation: "(A) '抱怨' 意味着真实或想象中的抱怨原因，特别是不公平待遇。" +
            "<br><br>" +
            "(B) '称赞' 意味着礼貌的赞美或钦佩的表达。" +
            "<br><br>" +
            "(C) '建议' 意味着提出供考虑的想法或计划。" +
            "<br><br>" +
            "(D) '报告' 意味着对观察、听到、做过或调查的事情的口头或书面描述。"
    },
    {
        id: 5,
        question: "When the problem couldn't be solved internally, they had to seek __________ through legal channels.",
        chinese_question: "当问题无法在内部解决时，他们不得不通过法律渠道寻求 __________。",
        answers: [
            { option: "A", answer: "recourse", chinese_answer: "求助", chinese_romanization: "qiúzhù" },
            { option: "B", answer: "avoidance", chinese_answer: "回避", chinese_romanization: "huíbì" },
            { option: "C", answer: "hesitation", chinese_answer: "犹豫", chinese_romanization: "yóuyù" },
            { option: "D", answer: "ignorance", chinese_answer: "无知", chinese_romanization: "wúzhī" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'recourse' means a source of help in a difficult situation." +
            "<br><br>" +
            "(B) 'avoidance' means the action of keeping away from or not doing something." +
            "<br><br>" +
            "(C) 'hesitation' means the action of pausing or hesitating before saying or doing something." +
            "<br><br>" +
            "(D) 'ignorance' means lack of knowledge or information.",
        chinese_explanation: "(A) '求助' 意味着在困难情况下的帮助来源。" +
            "<br><br>" +
            "(B) '回避' 意味着远离或不做某事的行为。" +
            "<br><br>" +
            "(C) '犹豫' 意味着在说或做某事之前暂停的行为。" +
            "<br><br>" +
            "(D) '无知' 意味着缺乏知识或信息。"
    },
    {
        id: 6,
            question: "The employee's __________ about the company's new policy was reflected in her comments, praising some aspects while criticizing others.",
            chinese_question: "员工对公司新政策的 __________ 反映在她的评论中，一方面称赞一些方面，另一方面批评其他方面。",
            answers: [
                { option: "A", answer: "approval", chinese_answer: "赞同", chinese_romanization: "zàntóng" },
                { option: "B", answer: "agreement", chinese_answer: "同意", chinese_romanization: "tóngyì" },
                { option: "C", answer: "certainty", chinese_answer: "确定性", chinese_romanization: "quèdìngxìng" },
                { option: "D", answer: "ambivalence", chinese_answer: "矛盾心理", chinese_romanization: "máodùn xīnlǐ" }
            ],
            correctAnswer: "D",
            explanation: "(D) 'ambivalence' means having mixed feelings or contradictory ideas about something or someone." +
                "<br><br>" +
                "(A) 'approval' means the belief that someone or something is good or acceptable." +
                "<br><br>" +
                "(B) 'agreement' means harmony or accordance in opinion or feeling." +
                "<br><br>" +
                "(C) 'certainty' means being sure about something.",
            chinese_explanation: "(D) '矛盾心理' 意思是对某事或某人有混合的感情或矛盾的想法。" +
                "<br><br>" +
                "(A) '赞同' 意思是认为某人或某事是好的或可以接受的。" +
                "<br><br>" +
                "(B) '同意' 意思是意见或感情上的和谐或一致。" +
                "<br><br>" +
                "(C) '确定性' 意思是对某事确定。"
    },
    {
        id: 7,
        question: "As a __________ in the political debate, he preferred to observe rather than participate.",
        chinese_question: "作为政治辩论中的__________，他更喜欢观察而不是参与。",
        answers: [
            { option: "A", answer: "participant", chinese_answer: "参与者", chinese_romanization: "cānyù zhě" },
            { option: "B", answer: "bystander", chinese_answer: "旁观者", chinese_romanization: "pángguān zhě" },
            { option: "C", answer: "culprit", chinese_answer: "罪犯", chinese_romanization: "zuìfàn" },
            { option: "D", answer: "hero", chinese_answer: "英雄", chinese_romanization: "yīngxióng" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'bystander' means a person who is present at an event or incident but does not take part. Figuratively, it can mean someone who observes an event or situation without getting involved." +
            "<br><br>" +
            "(A) 'participant' means a person who takes part in something." +
            "<br><br>" +
            "(C) 'culprit' means a person who is responsible for a crime or other misdeed." +
            "<br><br>" +
            "(D) 'hero' means a person who is admired for their courage, outstanding achievements, or noble qualities.",
        chinese_explanation: "(B) '旁观者'一词意味着在事件或事故现场但不参与的人。比喻地，它可以表示观察事件或情况而不参与的人。" +
            "<br><br>" +
            "(A) '参与者' 意味着参与某事的人。" +
            "<br><br>" +
            "(C) '罪犯' 意味着对犯罪或其他不当行为负责的人。" +
            "<br><br>" +
            "(D) '英雄' 意味着因其勇气、卓越成就或高尚品质而受人钦佩的人。"
    },
    {
        id: 8,
        question: "The lighthouse served as a __________ for ships navigating the dangerous waters.",
        chinese_question: "灯塔作为船只航行在危险水域的 __________。",
        answers: [
            { option: "A", answer: "beacon", chinese_answer: "灯塔", chinese_romanization: "dēngtǎ" },
            { option: "B", answer: "obstacle", chinese_answer: "障碍", chinese_romanization: "zhàng'ài" },
            { option: "C", answer: "threat", chinese_answer: "威胁", chinese_romanization: "wēixié" },
            { option: "D", answer: "mystery", chinese_answer: "谜", chinese_romanization: "mí" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'beacon' means a light or other visible object serving as a signal, warning, or guide, especially at sea or on an airfield." + 
            "<br><br>" +
            "(B) 'obstacle' means a thing that blocks one's way or prevents or hinders progress." + 
            "<br><br>" +
            "(C) 'threat' means a person or thing likely to cause damage or danger." + 
            "<br><br>" +
            "(D) 'mystery' means something that is difficult or impossible to understand or explain.",
        chinese_explanation: "(A) '灯塔' 意味着作为信号、警告或引导的光或其他可见物，特别是在海上或机场上。" + 
            "<br><br>" +
            "(B) '障碍' 意味着阻挡某人道路或阻止或妨碍进展的事物。" + 
            "<br><br>" +
            "(C) '威胁' 意味着可能造成损害或危险的人或事物。" + 
            "<br><br>" +
            "(D) '谜' 意味着难以或不可能理解或解释的事物。"
    },
    {
        id: 9,
        question: "The company's latest __________ has revolutionized the way we use smartphones.",
        chinese_question: "公司的最新 __________ 革命性地改变了我们使用智能手机的方式。",
        answers: [
            { option: "A", answer: "tradition", chinese_answer: "传统", chinese_romanization: "chuántǒng" },
            { option: "B", answer: "innovation", chinese_answer: "创新", chinese_romanization: "chuàngxīn" },
            { option: "C", answer: "stagnation", chinese_answer: "停滞", chinese_romanization: "tíngzhì" },
            { option: "D", answer: "imitation", chinese_answer: "模仿", chinese_romanization: "mófǎng" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'innovation' means a new method, idea, product, etc." + 
            "<br><br>" +
            "(A) 'tradition' means the transmission of customs or beliefs from generation to generation, or the fact of being passed on in this way." + 
            "<br><br>" +
            "(C) 'stagnation' means the state of not flowing or moving." + 
            "<br><br>" +
            "(D) 'imitation' means the action of using someone or something as a model.",
        chinese_explanation: "(B) '创新' 一词意味着一种新的方法、想法、产品等。" + 
            "<br><br>" +
            "(A) '传统' 意味着代代相传的习俗或信仰，或者以这种方式传递的事实。" + 
            "<br><br>" +
            "(C) '停滞' 意味着不流动或移动的状态。" + 
            "<br><br>" +
            "(D) '模仿' 意味着以某人或某事为模型的行为。"
    },
    {
        id: 10,
        question: "With great __________, she approached the stage to deliver her first public speech.",
        chinese_question: "她怀着巨大的 __________ 走向舞台，发表她的第一次公开演讲。",
        answers: [
            { option: "A", answer: "trepidation", chinese_answer: "恐惧", chinese_romanization: "kǒngjù" },
            { option: "B", answer: "confidence", chinese_answer: "自信", chinese_romanization: "zìxìn" },
            { option: "C", answer: "excitement", chinese_answer: "兴奋", chinese_romanization: "xīngfèn" },
            { option: "D", answer: "calmness", chinese_answer: "冷静", chinese_romanization: "lěngjìng" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'trepidation' means a feeling of fear or agitation about something that may happen." +
            "<br><br>" +
            "(B) 'confidence' means the feeling or belief that one can rely on someone or something; firm trust." +
            "<br><br>" +
            "(C) 'excitement' means a feeling of great enthusiasm and eagerness." +
            "<br><br>" +
            "(D) 'calmness' means the state or quality of being free from agitation or strong emotion.",
        chinese_explanation: "(A) '恐惧' 意味着对可能发生的事情的恐惧或不安的感觉。" +
            "<br><br>" +
            "(B) '自信' 意味着相信某人或某事；坚定的信任。" +
            "<br><br>" +
            "(C) '兴奋' 意味着极大的热情和渴望的感觉。" +
            "<br><br>" +
            "(D) '冷静' 意味着没有激动或强烈情感的状态或质量。"
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
