// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "The __________ of the vehicle increased as the driver pressed harder on the gas pedal, quickly reaching top speed.",
        chinese_question: "随着驾驶员加大油门，车辆的 __________ 增加，很快达到了最高速度。",
        answers: [
            { option: "A", answer: "deceleration", chinese_answer: "减速", chinese_romanization: "jiǎnsù" },
            { option: "B", answer: "slowdown", chinese_answer: "放慢", chinese_romanization: "fàngmàn" },
            { option: "C", answer: "acceleration", chinese_answer: "加速", chinese_romanization: "jiāsù" },
            { option: "D", answer: "braking", chinese_answer: "刹车", chinese_romanization: "shāchē" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'acceleration' means an increase in the rate or speed of something." +
            "<br><br>" +
            "(A) 'deceleration' means reduction in speed or rate." +
            "<br><br>" +
            "(B) 'slowdown' means a reduction in speed or activity." +
            "<br><br>" +
            "(D) 'braking' means the action of stopping or slowing down a vehicle.",
        chinese_explanation: "(C) '加速' 一词意味着增加某物的速度或速率。" +
            "<br><br>" +
            "(A) '减速' 意味着速度或速率的减少。" +
            "<br><br>" +
            "(B) '放慢' 意味着速度或活动的减少。" +
            "<br><br>" +
            "(D) '刹车' 意味着停止或减速车辆的动作。"
    },
    {
        id: 2,
        question: "In the __________ of the hurricane, the community came together to rebuild and support those affected by the disaster.",
        chinese_question: "在飓风的 __________ 中，社区团结起来重建并支持受灾的人们。",
        answers: [
            { option: "A", answer: "beginning", chinese_answer: "开始", chinese_romanization: "kāishǐ" },
            { option: "B", answer: "peak", chinese_answer: "高峰", chinese_romanization: "gāofēng" },
            { option: "C", answer: "aftermath", chinese_answer: "余波", chinese_romanization: "yúbō" },
            { option: "D", answer: "prelude", chinese_answer: "序幕", chinese_romanization: "xùmù" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'aftermath' means the consequences or aftereffects of a significant unpleasant event." +
            "<br><br>" +
            "(A) 'beginning' means the point in time or space at which something starts." +
            "<br><br>" +
            "(B) 'peak' means the highest point or greatest degree." +
            "<br><br>" +
            "(D) 'prelude' means an action or event serving as an introduction to something more important.",
        chinese_explanation: "(C) '余波' 一词意味着重大不愉快事件的后果或后果。" +
            "<br><br>" +
            "(A) '开始' 意味着某事开始的时间或空间点。" +
            "<br><br>" +
            "(B) '高峰' 意味着最高点或最大程度。" +
            "<br><br>" +
            "(D) '序幕' 意味着作为更重要的介绍的行为或事件。"
    },
    {
        id: 3,
        question: "The cozy __________ by the window was her favorite spot to read and relax.",
        chinese_question: "窗边舒适的 __________ 是她最喜欢的阅读和放松的地方。",
        answers: [
            { option: "A", answer: "hallway", chinese_answer: "走廊", chinese_romanization: "zǒuláng" },
            { option: "B", answer: "kitchen", chinese_answer: "厨房", chinese_romanization: "chúfáng" },
            { option: "C", answer: "alcove", chinese_answer: "凹室", chinese_romanization: "āoshì" },
            { option: "D", answer: "basement", chinese_answer: "地下室", chinese_romanization: "dìxiàshì" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'alcove' means a recess in the wall of a room or garden." +
            "<br><br>" +
            "(A) 'hallway' means a corridor or passageway in a building." +
            "<br><br>" +
            "(B) 'kitchen' means a room or area where food is prepared and cooked." +
            "<br><br>" +
            "(D) 'basement' means the floor of a building partly or entirely below ground level.",
        chinese_explanation: "(C) '凹室' 一词意味着房间或花园墙壁上的凹处。" +
            "<br><br>" +
            "(A) '走廊' 意味着建筑物中的走廊或通道。" +
            "<br><br>" +
            "(B) '厨房' 意味着准备和烹饪食物的房间或区域。" +
            "<br><br>" +
            "(D) '地下室' 意味着部分或完全在地面以下的建筑楼层。"
    },
    {
        id: 4,
        question: "After hours of negotiation, both parties were willing to make a __________ to reach an agreement.",
        chinese_question: "经过几个小时的谈判，双方愿意做出 __________ 以达成协议。",
        answers: [
            { option: "A", answer: "demand", chinese_answer: "要求", chinese_romanization: "yāoqiú" },
            { option: "B", answer: "refusal", chinese_answer: "拒绝", chinese_romanization: "jùjué" },
            { option: "C", answer: "compromise", chinese_answer: "妥协", chinese_romanization: "tuǒxié" },
            { option: "D", answer: "confrontation", chinese_answer: "对抗", chinese_romanization: "duìkàng" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'compromise' means an agreement or settlement of a dispute that is reached by each side making concessions." +
            "<br><br>" +
            "(A) 'demand' means an insistent and peremptory request, made as if by right." +
            "<br><br>" +
            "(B) 'refusal' means an act or an instance of refusing; the state of being refused." +
            "<br><br>" +
            "(D) 'confrontation' means a hostile or argumentative meeting or situation between opposing parties.",
        chinese_explanation: "(C) '妥协' 一词意味着通过双方做出让步达成的协议或解决方案。" +
            "<br><br>" +
            "(A) '要求' 意味着一种坚持的和专横的请求，就像是权利一样。" +
            "<br><br>" +
            "(B) '拒绝' 意味着拒绝的行为或实例；被拒绝的状态。" +
            "<br><br>" +
            "(D) '对抗' 意味着对立双方之间的敌对或争论的会面或情况。"
    },
    {
        id: 5,
        question: "The heavy rain was a significant __________ to the construction work, causing delays and safety concerns.",
        chinese_question: "大雨对施工是一个重大 __________，导致了延误和安全问题。",
        answers: [
            { option: "A", answer: "aid", chinese_answer: "帮助", chinese_romanization: "bāngzhù" },
            { option: "B", answer: "hindrance", chinese_answer: "障碍", chinese_romanization: "zhàng'ài" },
            { option: "C", answer: "benefit", chinese_answer: "利益", chinese_romanization: "lìyì" },
            { option: "D", answer: "help", chinese_answer: "协助", chinese_romanization: "xiézhù" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'hindrance' means a thing that provides resistance, delay, or obstruction to something or someone." +
            "<br><br>" +
            "(A) 'aid' means help, typically of a practical nature." +
            "<br><br>" +
            "(C) 'benefit' means an advantage or profit gained from something." +
            "<br><br>" +
            "(D) 'help' means make it easier for (someone) to do something by offering one's services or resources.",
        chinese_explanation: "(B) '障碍' 一词意味着对某事或某人提供阻力、延误或妨碍的事物。" +
            "<br><br>" +
            "(A) '帮助' 意味着通常是实质性的帮助。" +
            "<br><br>" +
            "(C) '利益' 意味着从某事中获得的优势或利润。" +
            "<br><br>" +
            "(D) '协助' 意味着通过提供服务或资源使某人更容易做某事。"
    },
    {
        id: 6,
        question: "His argument was based on several __________ that were not supported by evidence.",
        chinese_question: "他的论点基于几个没有证据支持的 __________。",
        answers: [
            { option: "A", answer: "facts", chinese_answer: "事实", chinese_romanization: "shìshí" },
            { option: "B", answer: "assumptions", chinese_answer: "假设", chinese_romanization: "jiǎshè" },
            { option: "C", answer: "truths", chinese_answer: "真理", chinese_romanization: "zhēnlǐ" },
            { option: "D", answer: "realities", chinese_answer: "现实", chinese_romanization: "xiànshí" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'assumptions' means things that are accepted as true or as certain to happen, without proof." +
            "<br><br>" +
            "(A) 'facts' means things that are known or proved to be true." +
            "<br><br>" +
            "(C) 'truths' means the quality or state of being true." +
            "<br><br>" +
            "(D) 'realities' means the state of things as they actually exist.",
        chinese_explanation: "(B) '假设' 一词意味着没有证据而被认为是真实或必然发生的事情。" +
            "<br><br>" +
            "(A) '事实' 意味着已知或被证明是真实的事情。" +
            "<br><br>" +
            "(C) '真理' 意味着真实的质量或状态。" +
            "<br><br>" +
            "(D) '现实' 意味着事物的实际存在状态。"
    },
    {
        id: 7,
        question: "After reading the lengthy report, she was able to summarize the __________ of it in a few sentences.",
        chinese_question: "读完冗长的报告后，她能用几句话概述其 __________。",
        answers: [
            { option: "A", answer: "details", chinese_answer: "细节", chinese_romanization: "xìjié" },
            { option: "B", answer: "gist", chinese_answer: "要点", chinese_romanization: "yàodiǎn" },
            { option: "C", answer: "introduction", chinese_answer: "介绍", chinese_romanization: "jièshào" },
            { option: "D", answer: "conclusion", chinese_answer: "结论", chinese_romanization: "jiélùn" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'gist' means the substance or essence of a speech or text." +
            "<br><br>" +
            "(A) 'details' means an individual feature, fact, or item." +
            "<br><br>" +
            "(C) 'introduction' means the action of introducing something." +
            "<br><br>" +
            "(D) 'conclusion' means the end or finish of an event, process, or text.",
        chinese_explanation: "(B) '要点' 一词意味着演讲或文本的实质或精华。" +
            "<br><br>" +
            "(A) '细节' 意味着单个特征、事实或项目。" +
            "<br><br>" +
            "(C) '介绍' 意味着介绍某事的行为。" +
            "<br><br>" +
            "(D) '结论' 意味着事件、过程或文本的结束或结束。"
    },
    {
        id: 8,
        question: "As a __________ in the kitchen, she often asked her more experienced roommates for cooking tips and advice.",
        chinese_question: "作为厨房里的 __________，她经常向更有经验的室友请教烹饪技巧和建议。",
        answers: [
            { option: "A", answer: "expert", chinese_answer: "专家", chinese_romanization: "zhuānjiā" },
            { option: "B", answer: "veteran", chinese_answer: "老手", chinese_romanization: "lǎoshǒu" },
            { option: "C", answer: "novice", chinese_answer: "新手", chinese_romanization: "xīnshǒu" },
            { option: "D", answer: "professional", chinese_answer: "专业人士", chinese_romanization: "zhuānyè rénshì" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'novice' means a person new to or inexperienced in a field or situation." +
            "<br><br>" +
            "(A) 'expert' means a person who has a comprehensive and authoritative knowledge of or skill in a particular area." +
            "<br><br>" +
            "(B) 'veteran' means a person who has had long experience in a particular field." +
            "<br><br>" +
            "(D) 'professional' means a person engaged or qualified in a profession.",
        chinese_explanation: "(C) '新手' 一词意味着在某个领域或情况下的新手或无经验的人。" +
            "<br><br>" +
            "(A) '专家' 意味着在某一特定领域具有全面和权威知识或技能的人。" +
            "<br><br>" +
            "(B) '老手' 意味着在某一特定领域有长期经验的人。" +
            "<br><br>" +
            "(D) '专业人士' 意味着从事或有资格从事某一职业的人。"
    },
    {
        id: 9,
        question: "The nurse's __________ towards her patients made her beloved by everyone in the hospital.",
        chinese_question: "护士对病人的 __________ 使她成为医院里人人喜爱的人。",
        answers: [
            { option: "A", answer: "condescension", chinese_answer: "高傲", chinese_romanization: "gāo'ào" },
            { option: "B", answer: "compassion", chinese_answer: "同情", chinese_romanization: "tóngqíng" },
            { option: "C", answer: "conformity", chinese_answer: "遵守", chinese_romanization: "zūnshǒu" },
            { option: "D", answer: "clairvoyance", chinese_answer: "有预见力", chinese_romanization: "yǒu yùjiàn lì" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'compassion' means sympathetic pity and concern for the sufferings of others." +
            "<br><br>" +
            "(A) 'condescension' means an attitude of patronizing superiority." +
            "<br><br>" +
            "(C) 'conformity' means compliance with standards, rules, or laws." +
            "<br><br>" +
            "(D) 'clairvoyance' means the supposed ability to perceive future events.",
        chinese_explanation: "(B) '同情' 意味着对他人痛苦的同情和关心。" +
            "<br><br>" +
            "(A) '高傲' 意味着居高临下的优越感。" +
            "<br><br>" +
            "(C) '遵守' 意味着遵守标准、规则或法律。" +
            "<br><br>" +
            "(D) '有预见力' 意味着感知未来事件的能力。"
    },
    {
        id: 10,
        question: "In the story, the main __________ plotted against the hero, creating numerous obstacles for him to overcome.",
        chinese_question: "在故事中，主要的 __________ 密谋反对英雄，制造了许多障碍让他克服。",
        answers: [
            { option: "A", answer: "protagonist", chinese_answer: "主角", chinese_romanization: "zhǔjiǎo" },
            { option: "B", answer: "antagonist", chinese_answer: "反派", chinese_romanization: "fǎnpài" },
            { option: "C", answer: "ally", chinese_answer: "盟友", chinese_romanization: "méngyǒu" },
            { option: "D", answer: "supporter", chinese_answer: "支持者", chinese_romanization: "zhīchí zhě" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'antagonist' means a person who actively opposes or is hostile to someone or something; an adversary." +
            "<br><br>" +
            "(A) 'protagonist' means the leading character or one of the major characters in a drama, movie, novel, or other fictional text." +
            "<br><br>" +
            "(C) 'ally' means a state formally cooperating with another for a military or other purpose." +
            "<br><br>" +
            "(D) 'supporter' means a person who approves of and encourages someone or something.",
        chinese_explanation: "(B) '反派' 一词意味着积极反对或敌视某人或某事的人；对手。" +
            "<br><br>" +
            "(A) '主角' 意味着戏剧、电影、小说或其他虚构文本中的主要角色之一。" +
            "<br><br>" +
            "(C) '盟友' 意味着为军事或其他目的正式合作的国家。" +
            "<br><br>" +
            "(D) '支持者' 意味着赞成和鼓励某人或某事的人。"
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
