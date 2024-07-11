// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "The building's grand __________ hid the crumbling walls and neglected interior within.",
        chinese_question: "建筑物宏伟的 __________ 掩盖了里面破败的墙壁和被忽视的内饰。",
        answers: [
            { option: "A", answer: "roof", chinese_answer: "屋顶", chinese_romanization: "wūdǐng" },
            { option: "B", answer: "facade", chinese_answer: "正面", chinese_romanization: "zhèngmiàn" },
            { option: "C", answer: "basement", chinese_answer: "地下室", chinese_romanization: "dìxiàshì" },
            { option: "D", answer: "entrance", chinese_answer: "入口", chinese_romanization: "rùkǒu" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'facade' means the face of a building, especially the principal front that looks onto a street or open space." +
            "<br><br>" +
            "(A) 'roof' means the structure forming the upper covering of a building or vehicle." +
            "<br><br>" +
            "(C) 'basement' means the floor of a building partly or entirely below ground level." +
            "<br><br>" +
            "(D) 'entrance' means an opening, such as a door, passage, or gate, that allows access to a place.",
        chinese_explanation: "(B) '正面' 一词意味着建筑物的正面，特别是面向街道或开放空间的主要正面。" +
            "<br><br>" +
            "(A) '屋顶' 意味着形成建筑物或车辆上部覆盖物的结构。" +
            "<br><br>" +
            "(C) '地下室' 意味着部分或全部位于地下的建筑物的地板。" +
            "<br><br>" +
            "(D) '入口' 意味着允许进入某地的开口，如门、通道或大门。"
    },
    {
        id: 2,
        question: "The __________ of her personality made her both compassionate and firm.",
        chinese_question: "她性格的 __________ 使她既有同情心又坚定。",
        answers: [
            { option: "A", answer: "duality", chinese_answer: "双重性", chinese_romanization: "shuāngchóng xìng" },
            { option: "B", answer: "simplicity", chinese_answer: "简单", chinese_romanization: "jiǎndān" },
            { option: "C", answer: "singularity", chinese_answer: "单一性", chinese_romanization: "dānyī xìng" },
            { option: "D", answer: "uniformity", chinese_answer: "统一性", chinese_romanization: "tǒngyī xìng" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'duality' means the quality or condition of being dual; an instance of opposition or contrast between two concepts or two aspects of something." + 
            "<br><br>" +
            "(B) 'simplicity' means the quality or condition of being easy to understand or do." + 
            "<br><br>" +
            "(C) 'singularity' means the state, fact, quality, or condition of being singular." + 
            "<br><br>" +
            "(D) 'uniformity' means the quality or state of being uniform.",
        chinese_explanation: "(A) '双重性' 意味着双重的质量或状态；对立或对比的实例。" + 
            "<br><br>" +
            "(B) '简单' 意味着容易理解或做的质量或状态。" + 
            "<br><br>" +
            "(C) '单一性' 意味着单一的状态、事实、质量或状态。" + 
            "<br><br>" +
            "(D) '统一性' 意味着统一的质量或状态。"
    },
    {
        id: 3,
        question: "Her __________ towards social issues made it hard for her to engage in meaningful conversations.",
        chinese_question: "她对社会问题的 __________ 使她难以进行有意义的对话。",
        answers: [
            { option: "A", answer: "curiosity", chinese_answer: "好奇心", chinese_romanization: "hàoqí xīn" },
            { option: "B", answer: "passion", chinese_answer: "热情", chinese_romanization: "rèqíng" },
            { option: "C", answer: "commitment", chinese_answer: "承诺", chinese_romanization: "chéngnuò" },
            { option: "D", answer: "apathy", chinese_answer: "冷漠", chinese_romanization: "lěngmò" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'apathy' metaphorically means indifference or lack of concern." +
            "<br><br>" +
            "(A) 'curiosity' means a strong desire to know or learn something." +
            "<br><br>" +
            "(B) 'passion' means strong and barely controllable emotion." +
            "<br><br>" +
            "(C) 'commitment' means the state or quality of being dedicated to a cause, activity, etc.",
        chinese_explanation: "(D) '冷漠' 比喻无动于衷或缺乏关心。" +
            "<br><br>" +
            "(A) '好奇心' 意味着强烈的求知欲或学习某事的欲望。" +
            "<br><br>" +
            "(B) '热情' 意味着强烈和几乎无法控制的情感。" +
            "<br><br>" +
            "(C) '承诺' 意味着对事业、活动等的奉献状态或质量。"
    },
    {
        id: 4,
        question: "The lawyer served as an __________ in the dispute, helping both parties to reach a fair settlement.",
        chinese_question: "律师在争端中担任 __________ 的角色，帮助双方达成公平的和解。",
        answers: [
                { option: "A", answer: "opponent", chinese_answer: "对手", chinese_romanization: "duìshǒu" },
                { option: "B", answer: "intermediary", chinese_answer: "中间人", chinese_romanization: "zhōngjiānrén" },
                { option: "C", answer: "bystander", chinese_answer: "旁观者", chinese_romanization: "pángguānzhě" },
                { option: "D", answer: "observer", chinese_answer: "观察员", chinese_romanization: "guāncháyuán" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'intermediary' means a person who acts as a link between people in order to try to bring about an agreement." +
            "<br><br>" +
            "(A) 'opponent' means someone who competes against or fights another in a contest, game, or argument." +
            "<br><br>" +
            "(C) 'bystander' means a person who is present at an event or incident but does not take part." +
            "<br><br>" +
            "(D) 'observer' means a person who watches or notices something.",
        chinese_explanation: "(B) '中间人' 意味着充当人们之间联系以促成协议的人。" +
            "<br><br>" +
            "(A) '对手' 意味着在比赛、游戏或争论中与另一方竞争或战斗的人。" +
            "<br><br>" +
            "(C) '旁观者' 意味着在事件或事故发生时在场但不参与的人。" +
            "<br><br>" +
            "(D) '观察员' 意味着观察或注意到某事的人。"
    },
    {
        id: 5,
        question: "The survey results were presented as an __________ of data from various regions, providing a comprehensive overview.",
        chinese_question: "调查结果以各个地区数据的 __________ 形式呈现，提供了全面的概述。",
        answers: [
                { option: "A", answer: "fragment", chinese_answer: "碎片", chinese_romanization: "suìpiàn" },
                { option: "B", answer: "portion", chinese_answer: "部分", chinese_romanization: "bùfen" },
                { option: "C", answer: "aggregate", chinese_answer: "总计", chinese_romanization: "zǒngjì" },
                { option: "D", answer: "division", chinese_answer: "分割", chinese_romanization: "fēngē" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'aggregate' means a whole formed by combining several separate elements." +
            "<br><br>" +
            "(A) 'fragment' means a small part broken off or separated from something." +
            "<br><br>" +
            "(B) 'portion' means a part of a whole." +
            "<br><br>" +
            "(D) 'division' means the action of separating something into parts or the process of being separated.",
        chinese_explanation: "(C) '总计' 意味着通过结合几个独立的元素形成的整体。" +
            "<br><br>" +
            "(A) '碎片' 意味着从某物上分离出来的小部分。" +
            "<br><br>" +
            "(B) '部分' 意味着整体的一部分。" +
            "<br><br>" +
            "(D) '分割' 意味着将某物分成部分或被分成部分的过程。"
    },
    {
        id: 6,
        question: "The veterinarian provided a positive __________ for the injured dog, expecting it to make a full recovery.",
        chinese_question: "兽医对受伤的狗给出了一个积极的 __________，预计它会完全康复。",
        answers: [
                { option: "A", answer: "diagnosis", chinese_answer: "诊断", chinese_romanization: "zhěnduàn" },
                { option: "B", answer: "prognosis", chinese_answer: "预后", chinese_romanization: "yùhòu" },
                { option: "C", answer: "treatment", chinese_answer: "治疗", chinese_romanization: "zhìliáo" },
                { option: "D", answer: "prescription", chinese_answer: "处方", chinese_romanization: "chǔfāng" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'prognosis' means the likely course of a disease or ailment." +
            "<br><br>" +
            "(A) 'diagnosis' means the identification of the nature of an illness or other problem by examination of the symptoms." +
            "<br><br>" +
            "(C) 'treatment' means medical care given to a patient for an illness or injury." +
            "<br><br>" +
            "(D) 'prescription' means an instruction written by a medical practitioner that authorizes a patient to be issued a medicine or treatment.",
        chinese_explanation: "(B) '预后' 意味着疾病或病症的可能病程。" +
            "<br><br>" +
            "(A) '诊断' 意味着通过检查症状确定疾病或其他问题的性质。" +
            "<br><br>" +
            "(C) '治疗' 意味着对患者进行的医疗护理，以治疗疾病或伤害。" +
            "<br><br>" +
            "(D) '处方' 意味着由医疗从业者书写的授权患者使用药物或治疗的指示。"
    },
    {
        id: 7,
        question: "The director's new film received __________ from both audiences and critics, becoming an instant hit.",
        chinese_question: "这位导演的新电影得到了观众和评论家的 __________，瞬间成为热卖片。",
        answers: [
            { option: "A", answer: "criticism", chinese_answer: "批评", chinese_romanization: "pīpíng" },
            { option: "B", answer: "indifference", chinese_answer: "冷漠", chinese_romanization: "lěngmò" },
            { option: "C", answer: "disdain", chinese_answer: "蔑视", chinese_romanization: "mièshì" },
            { option: "D", answer: "plaudit", chinese_answer: "喝彩", chinese_romanization: "hècǎi" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'plaudit' means praise or approval, often used in the context of public recognition." +
            "<br><br>" +
            "(A) 'criticism' means the expression of disapproval of someone or something based on perceived faults or mistakes." +
            "<br><br>" +
            "(B) 'indifference' means lack of interest, concern, or sympathy." +
            "<br><br>" +
            "(C) 'disdain' means the feeling that someone or something is unworthy of one's consideration or respect.",
        chinese_explanation: "(D) '喝彩' 意思是赞美或认可，通常在公开表扬的情况下使用。" +
            "<br><br>" +
            "(A) '批评' 意思是基于感知到的缺点或错误对某人或某事表达不满。" +
            "<br><br>" +
            "(B) '冷漠' 意思是缺乏兴趣、关心或同情。" +
            "<br><br>" +
            "(C) '蔑视' 意思是认为某人或某事不值得考虑或尊重的感觉。"
    },
    {
        id: 8,
        question: "The legal case became a __________ of conflicting testimonies and unclear evidence, making it hard to reach a verdict.",
        chinese_question: "这个法律案件变成了矛盾的证词和不清晰的证据的 __________，使得很难达成判决。",
        answers: [
            { option: "A", answer: "solution", chinese_answer: "解决方案", chinese_romanization: "jiějué fāng'àn" },
            { option: "B", answer: "clarity", chinese_answer: "清晰", chinese_romanization: "qīngxī" },
            { option: "C", answer: "resolution", chinese_answer: "解决", chinese_romanization: "jiějué" },
            { option: "D", answer: "morass", chinese_answer: "困境", chinese_romanization: "kùnjìng" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'morass' means a complicated or confused situation." +
            "<br><br>" +
            "(A) 'solution' means a means of solving a problem or dealing with a difficult situation." +
            "<br><br>" +
            "(B) 'clarity' means the quality of being clear and easy to understand." +
            "<br><br>" +
            "(C) 'resolution' means a firm decision to do or not to do something.",
        chinese_explanation: "(D) '困境' 意思是复杂或混乱的情况。" +
            "<br><br>" +
            "(A) '解决方案' 意思是解决问题或应对困难情况的手段。" +
            "<br><br>" +
            "(B) '清晰' 意思是清晰易懂的品质。" +
            "<br><br>" +
            "(C) '解决' 意思是做某事或不做某事的坚定决定。"
    },
    {
        id: 9,
        question: "The ancient __________ stood tall in the center of the city, a testament to the architectural skills of the bygone era.",
        chinese_question: "这座古老的 __________ 矗立在城市的中心，是古代建筑技艺的见证。",
        answers: [
            { option: "A", answer: "shack", chinese_answer: "棚屋", chinese_romanization: "péngwū" },
            { option: "B", answer: "edifice", chinese_answer: "大厦", chinese_romanization: "dàshà" },
            { option: "C", answer: "hut", chinese_answer: "小屋", chinese_romanization: "xiǎowū" },
            { option: "D", answer: "tent", chinese_answer: "帐篷", chinese_romanization: "zhàngpéng" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'edifice' means a large, imposing building." +
            "<br><br>" +
            "(A) 'shack' means a roughly built hut or cabin." +
            "<br><br>" +
            "(C) 'hut' means a small, simple, single-story house or shelter." +
            "<br><br>" +
            "(D) 'tent' means a portable shelter made of cloth, supported by one or more poles and stretched tight by cords or loops attached to pegs driven into the ground.",
        chinese_explanation: "(B) '大厦' 一词意味着一座大而雄伟的建筑。" +
            "<br><br>" +
            "(A) '棚屋' 意味着一个粗糙建造的小屋或小木屋。" +
            "<br><br>" +
            "(C) '小屋' 意味着一个小而简单的单层房屋或庇护所。" +
            "<br><br>" +
            "(D) '帐篷' 意味着由布制成的便携式庇护所，由一个或多个杆子支撑，并通过连接到插入地面的钉子的绳子或环拉紧。"
    },
    {
        id: 10,
        question: "Despite initial skepticism, the new treatment showed remarkable __________ in improving patients' symptoms.",
        chinese_question: "尽管最初持怀疑态度，但新治疗在改善患者症状方面表现出了显著的 __________。",
        answers: [
            { option: "A", answer: "effectiveness", chinese_answer: "有效性", chinese_romanization: "yǒuxiào xìng" },
            { option: "B", answer: "rejection", chinese_answer: "拒绝", chinese_romanization: "jùjué" },
            { option: "C", answer: "failure", chinese_answer: "失败", chinese_romanization: "shībài" },
            { option: "D", answer: "disapproval", chinese_answer: "不赞成", chinese_romanization: "bù zànchéng" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'effectiveness' means the degree to which something is successful in producing a desired result; success." +
            "<br><br>" +
            "(B) 'rejection' means the dismissing or refusing of a proposal, idea, etc." +
            "<br><br>" +
            "(C) 'failure' means lack of success." +
            "<br><br>" +
            "(D) 'disapproval' means the feeling of having a negative opinion of someone or something.",
        chinese_explanation: "(A) '有效性' 意味着某事在产生预期结果方面成功的程度；成功。" +
            "<br><br>" +
            "(B) '拒绝' 意味着拒绝或拒绝建议、想法等。" +
            "<br><br>" +
            "(C) '失败' 意味着缺乏成功。" +
            "<br><br>" +
            "(D) '不赞成' 意味着对某人或某事持负面看法的感觉。"
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
