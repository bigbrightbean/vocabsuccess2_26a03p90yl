// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "The risks associated with the surgery are __________, and even the most skilled surgeons cannot eliminate them entirely.",
        chinese_question: "手术相关的风险是 __________ 的，即使是最熟练的外科医生也无法完全消除这些风险。",
        answers: [
            { option: "A", answer: "inherent", chinese_answer: "固有的", chinese_romanization: "gùyǒu de" },
            { option: "B", answer: "avoidable", chinese_answer: "可避免的", chinese_romanization: "kě bìmiǎn de" },
            { option: "C", answer: "external", chinese_answer: "外部的", chinese_romanization: "wàibù de" },
            { option: "D", answer: "extrinsic", chinese_answer: "外在的", chinese_romanization: "wàizài de" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'inherent' means existing in something as a permanent, essential, or characteristic attribute." +
            "<br><br>" +
            "(B) 'avoidable' means able to be avoided or prevented." +
            "<br><br>" +
            "(C) 'external' means belonging to or forming the outer surface or structure of something." +
            "<br><br>" +
            "(D) 'extrinsic' means not part of the essential nature of someone or something; coming or operating from outside.",
        chinese_explanation: "(A) '固有的' 意味着作为某物的永久、基本或特征属性存在的。" +
            "<br><br>" +
            "(B) '可避免的' 意味着能够避免或防止的。" +
            "<br><br>" +
            "(C) '外部的' 意味着属于或构成某物的外表面或结构的。" +
            "<br><br>" +
            "(D) '外在的' 意味着不是某人或某物本质的一部分；来自外部或在外部运作的。"
    },
    {
        id: 2,
        question: "Her __________ advice was appreciated by all her friends, as she always listened to both sides of the story before offering her opinion.",
        chinese_question: "她的 __________ 建议得到了所有朋友的赞赏，因为她总是在听取双方意见后才发表自己的看法。",
        answers: [
            { option: "A", answer: "biased", chinese_answer: "有偏见的", chinese_romanization: "yǒu piānjiàn de" },
            { option: "B", answer: "subjective", chinese_answer: "主观的", chinese_romanization: "zhǔguān de" },
            { option: "C", answer: "unfair", chinese_answer: "不公平的", chinese_romanization: "bù gōngpíng de" },
            { option: "D", answer: "impartial", chinese_answer: "公正的", chinese_romanization: "gōngzhèng de" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'impartial' means treating all rivals or disputants equally; fair and just." +
            "<br><br>" +
            "(A) 'biased' means unfairly prejudiced for or against someone or something." +
            "<br><br>" +
            "(B) 'subjective' means based on or influenced by personal feelings, tastes, or opinions." +
            "<br><br>" +
            "(C) 'unfair' means not based on or behaving according to the principles of equality and justice.",
        chinese_explanation: "(D) '公正的' 意味着平等对待所有对手或争执者；公平和公正的。" +
            "<br><br>" +
            "(A) '有偏见的' 意味着对某人或某物不公平的偏见。" +
            "<br><br>" +
            "(B) '主观的' 意味着基于或受个人感情、喜好或意见影响的。" +
            "<br><br>" +
            "(C) '不公平的' 意味着不基于或不按照平等和正义原则行事的。"
    },
    {
        id: 3,
        question: "The __________ village struggled to provide basic necessities for its residents, who faced constant hardships.",
        chinese_question: "这个 __________ 的村庄难以为居民提供基本生活必需品，他们面临着不断的困难。",
        answers: [
            { option: "A", answer: "impoverished", chinese_answer: "贫困的", chinese_romanization: "pínkùn de" },
            { option: "B", answer: "wealthy", chinese_answer: "富有的", chinese_romanization: "fùyǒu de" },
            { option: "C", answer: "affluent", chinese_answer: "富裕的", chinese_romanization: "fùyù de" },
            { option: "D", answer: "prosperous", chinese_answer: "繁荣的", chinese_romanization: "fánróng de" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'impoverished' means reduced to poverty." +
            "<br><br>" +
            "(B) 'wealthy' means having a great deal of money, resources, or assets; rich." +
            "<br><br>" +
            "(C) 'affluent' means having a great deal of money; wealthy." +
            "<br><br>" +
            "(D) 'prosperous' means successful in material terms; flourishing financially.",
        chinese_explanation: "(A) '贫困的' 意味着沦为贫困的。" +
            "<br><br>" +
            "(B) '富有的' 意味着拥有大量金钱、资源或资产的；富有的。" +
            "<br><br>" +
            "(C) '富裕的' 意味着拥有大量金钱的；富有的。" +
            "<br><br>" +
            "(D) '繁荣的' 意味着在物质上成功的；经济上蓬勃发展的。"
    },
    {
        id: 4,
        question: "The company's future remained __________, with many uncertainties and no clear direction.",
        chinese_question: "公司的未来仍然__________，存在许多不确定性，没有明确的方向。",
        answers: [
            { option: "A", answer: "definite", chinese_answer: "明确的", chinese_romanization: "míngquè de" },
            { option: "B", answer: "fixed", chinese_answer: "固定的", chinese_romanization: "gùdìng de" },
            { option: "C", answer: "indefinite", chinese_answer: "不确定的", chinese_romanization: "bù quèdìng de" },
            { option: "D", answer: "specific", chinese_answer: "具体的", chinese_romanization: "jùtǐ de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'indefinite' means lasting for an unknown or unstated length of time." +
            "<br><br>" +
            "(A) 'definite' means clearly stated or decided; not vague or doubtful." +
            "<br><br>" +
            "(B) 'fixed' means fastened securely in position." +
            "<br><br>" +
            "(D) 'specific' means clearly defined or identified.",
        chinese_explanation: "(C) '不确定的' 一词意味着持续时间未知或未说明的。" +
            "<br><br>" +
            "(A) '明确的' 意味着清楚地陈述或决定的；不模糊或不确定的。" +
            "<br><br>" +
            "(B) '固定的' 意味着牢牢固定在位置上的。" +
            "<br><br>" +
            "(D) '具体的' 意味着清楚定义或确定的。"
    },
    {
        id: 5,
        question: "The survivors recounted the __________ conditions in the camp, describing extreme hunger and disease.",
        chinese_question: "幸存者讲述了营地里的 __________ 条件，描述了极度的饥饿和疾病。",
        answers: [
            { option: "A", answer: "horrendous", chinese_answer: "可怕的", chinese_romanization: "kěpà de" },
            { option: "B", answer: "pleasant", chinese_answer: "令人愉快的", chinese_romanization: "lìngrén yúkuài de" },
            { option: "C", answer: "tolerable", chinese_answer: "可忍受的", chinese_romanization: "kě rěnshòu de" },
            { option: "D", answer: "manageable", chinese_answer: "可管理的", chinese_romanization: "kě guǎnlǐ de" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'horrendous' means extremely unpleasant, horrifying, or terrible." +
            "<br><br>" +
            "(B) 'pleasant' means giving a sense of happy satisfaction or enjoyment." +
            "<br><br>" +
            "(C) 'tolerable' means able to be endured." +
            "<br><br>" +
            "(D) 'manageable' means able to be controlled or dealt with without difficulty.",
        chinese_explanation: "(A) '可怕的' 意味着极其不愉快、恐怖或可怕的。" +
            "<br><br>" +
            "(B) '令人愉快的' 意味着带来快乐满足或享受的。" +
            "<br><br>" +
            "(C) '可忍受的' 意味着能够忍受的。" +
            "<br><br>" +
            "(D) '可管理的' 意味着能够被控制或处理而没有困难的。"
    },
    {
        id: 6,
        question: "The scam artist easily took advantage of the __________ victim, convincing him to hand over his life savings.",
        chinese_question: "诈骗犯轻易地利用了这个 __________ 的受害者，说服他交出了毕生的积蓄。",
        answers: [
            { option: "A", answer: "gullible", chinese_answer: "容易上当的", chinese_romanization: "róngyì shàngdàng de" },
            { option: "B", answer: "skeptical", chinese_answer: "怀疑的", chinese_romanization: "huáiyí de" },
            { option: "C", answer: "suspicious", chinese_answer: "多疑的", chinese_romanization: "duōyí de" },
            { option: "D", answer: "shrewd", chinese_answer: "精明的", chinese_romanization: "jīngmíng de" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'gullible' means easily persuaded to believe something; credulous." +
            "<br><br>" +
            "(B) 'skeptical' means not easily convinced; having doubts or reservations." +
            "<br><br>" +
            "(C) 'suspicious' means having or showing a cautious distrust of someone or something." +
            "<br><br>" +
            "(D) 'shrewd' means having or showing sharp powers of judgment; astute.",
        chinese_explanation: "(A) '容易上当的' 意味着容易被说服相信某事；轻信的。" +
            "<br><br>" +
            "(B) '怀疑的' 意味着不容易相信；有怀疑或保留意见的。" +
            "<br><br>" +
            "(C) '多疑的' 意味着对某人或某事表现出谨慎的不信任的。" +
            "<br><br>" +
            "(D) '精明的' 意味着有或表现出敏锐的判断力；精明的。"
    },
    {
        id: 7,
        question: "The company was shut down after it was discovered they were involved in __________ activities, deceiving customers and investors.",
        chinese_question: "公司因被发现涉及 __________ 活动，欺骗客户和投资者而被关闭。",
        answers: [
            { option: "A", answer: "genuine", chinese_answer: "真实的", chinese_romanization: "zhēnshí de" },
            { option: "B", answer: "legitimate", chinese_answer: "合法的", chinese_romanization: "héfǎ de" },
            { option: "C", answer: "honest", chinese_answer: "诚实的", chinese_romanization: "chéngshí de" },
            { option: "D", answer: "fraudulent", chinese_answer: "欺诈的", chinese_romanization: "qīzhà de" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'fraudulent' means obtained, done by, or involving deception, especially criminal deception." +
            "<br><br>" +
            "(A) 'genuine' means truly what something is said to be; authentic." +
            "<br><br>" +
            "(B) 'legitimate' means conforming to the law or to rules." +
            "<br><br>" +
            "(C) 'honest' means free of deceit; truthful and sincere.",
        chinese_explanation: "(D) '欺诈的' 意味着通过欺骗获得的、进行的或涉及的，尤其是刑事欺骗。" +
            "<br><br>" +
            "(A) '真实的' 意味着真正的东西；真实的。" +
            "<br><br>" +
            "(B) '合法的' 意味着符合法律或规则的。" +
            "<br><br>" +
            "(C) '诚实的' 意味着没有欺骗的；诚实和真诚的。"
    },
    {
        id: 8,
        question: "She gave him an __________ look when he claimed he could lift 500 pounds.",
        chinese_question: "当他说他能举起500磅时，她给了他一个__________的表情。",
        answers: [
            { option: "A", answer: "believing", chinese_answer: "相信的", chinese_romanization: "xiāngxìn de" },
            { option: "B", answer: "incredulous", chinese_answer: "怀疑的", chinese_romanization: "huáiyí de" },
            { option: "C", answer: "trusting", chinese_answer: "信任的", chinese_romanization: "xìnrèn de" },
            { option: "D", answer: "convinced", chinese_answer: "确信的", chinese_romanization: "quèxìn de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'incredulous' means unwilling or unable to believe something." +
            "<br><br>" +
            "(A) 'believing' means accepting that something is true, especially without proof." +
            "<br><br>" +
            "(C) 'trusting' means showing or tending to have a belief in a person's honesty or sincerity; not suspicious." +
            "<br><br>" +
            "(D) 'convinced' means completely certain about something.",
        chinese_explanation: "(B) '怀疑的' 一词意味着不愿意或不能相信某事的。" +
            "<br><br>" +
            "(A) '相信的' 意味着接受某事是真实的，尤其是没有证据。" +
            "<br><br>" +
            "(C) '信任的' 意味着表现出或倾向于相信一个人的诚实或真诚；不怀疑的。" +
            "<br><br>" +
            "(D) '确信的' 意味着完全确定某事的。"
    },
    {
        id: 9,
        question: "The fire caused __________ damage to the historic building, leaving it beyond restoration.",
        chinese_question: "火灾对这座历史建筑造成了 __________ 的损害，使其无法修复。",
        answers: [
            { option: "A", answer: "repairable", chinese_answer: "可修复", chinese_romanization: "kě xiūfù" },
            { option: "B", answer: "temporary", chinese_answer: "临时", chinese_romanization: "línshí" },
            { option: "C", answer: "minor", chinese_answer: "轻微", chinese_romanization: "qīngwēi" },
            { option: "D", answer: "irreparable", chinese_answer: "无法修复", chinese_romanization: "wúfǎ xiūfù" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'irreparable' means (of an injury or loss) impossible to rectify or repair." +
            "<br><br>" +
            "(A) 'repairable' means capable of being repaired." +
            "<br><br>" +
            "(B)'temporary' means lasting for only a limited period of time; not permanent." +
            "<br><br>" +
            "(C) 'minor' means lesser in importance, seriousness, or significance.",
        chinese_explanation: "(D) '无法修复' 意味着（指伤害或损失）无法挽回或修复的。" +
            "<br><br>" +
            "(A) '可修复' 意味着能够修复。" +
            "<br><br>" +
            "(B) '临时' 意味着只持续一段有限的时间；不永久的。" +
            "<br><br>" +
            "(C) '轻微' 意味着重要性、严重性或意义较小的。"
    },
    {
        id: 10,
        question: "After days without sleep, he was __________ and began to see and hear things that weren't there.",
        chinese_question: "几天没有睡觉后，他变得 __________，开始看到和听到不存在的东西。",
        answers: [
            { option: "A", answer: "calm", chinese_answer: "冷静", chinese_romanization: "lěngjìng" },
            { option: "B", answer: "rational", chinese_answer: "理性", chinese_romanization: "lǐxìng" },
            { option: "C", answer: "delirious", chinese_answer: "谵妄", chinese_romanization: "zhānwàng" },
            { option: "D", answer: "composed", chinese_answer: "镇定", chinese_romanization: "zhèndìng" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'delirious' means in an acutely disturbed state of mind resulting from illness or intoxication and characterized by restlessness, illusions, and incoherence of thought and speech." +
            "<br><br>" +
            "(A) 'calm' means not showing or feeling nervousness, anger, or other strong emotions." +
            "<br><br>" +
            "(B) 'rational' means based on or in accordance with reason or logic." +
            "<br><br>" +
            "(D) 'composed' means having one's feelings and expression under control.",
        chinese_explanation: "(C) '谵妄' 一词意味着由于疾病或中毒导致的急性精神错乱状态，其特征是躁动、幻觉和思维和言语的不连贯。" +
            "<br><br>" +
            "(A) '冷静' 意味着不显示或感觉紧张、愤怒或其他强烈情感。" +
            "<br><br>" +
            "(B) '理性' 意味着基于或符合理由或逻辑。" +
            "<br><br>" +
            "(D) '镇定' 意味着控制自己的感情和表达。"
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
