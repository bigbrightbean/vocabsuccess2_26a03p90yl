// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "The veterinarian specialized in __________ care, ensuring dogs received the best treatment.",
        chinese_question: "兽医专门从事 __________ 护理，确保狗狗得到最好的治疗。",
        answers: [
            { option: "A", answer: "canine", chinese_answer: "犬科", chinese_romanization: "quǎnkē" },
            { option: "B", answer: "feline", chinese_answer: "猫科", chinese_romanization: "māo kē" },
            { option: "C", answer: "avian", chinese_answer: "鸟类", chinese_romanization: "niǎo lèi" },
            { option: "D", answer: "reptilian", chinese_answer: "爬行动物", chinese_romanization: "páxíng dòngwù" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'canine' means relating to or resembling a dog or dogs." +
            "<br><br>" +
            "(B) 'feline' means relating to or affecting cats or other members of the cat family." +
            "<br><br>" +
            "(C) 'avian' means relating to birds." +
            "<br><br>" +
            "(D) 'reptilian' means relating to or characteristic of reptiles.",
        chinese_explanation: "(A) '犬科' 意味着与狗或狗类有关的。" +
            "<br><br>" +
            "(B) '猫科' 意味着与猫或猫科其他成员有关的。" +
            "<br><br>" +
            "(C) '鸟类' 意味着与鸟类有关的。" +
            "<br><br>" +
            "(D) '爬行动物' 意味着与爬行动物有关的或具有爬行动物特征的。"
    },
    {
        id: 2,
        question: "Her __________ advice helped guide the company through difficult times.",
        chinese_question: "她的__________建议帮助公司度过了难关。",
        answers: [
            { option: "A", answer: "foolish", chinese_answer: "愚蠢的", chinese_romanization: "yúchǔn de" },
            { option: "B", answer: "novice", chinese_answer: "新手的", chinese_romanization: "xīnshǒu de" },
            { option: "C", answer: "sage", chinese_answer: "智者的", chinese_romanization: "zhìzhě de" },
            { option: "D", answer: "tyrannical", chinese_answer: "专制的", chinese_romanization: "zhuānzhì de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'sage' means a profoundly wise person. Figuratively, it can mean very wise and prudent advice." +
            "<br><br>" +
            "(A) 'foolish' means lacking good sense or judgment." +
            "<br><br>" +
            "(B) 'novice' means a person new to or inexperienced in a field or situation." +
            "<br><br>" +
            "(D) 'tyrannical' means exercising power in a cruel or arbitrary way.",
        chinese_explanation: "(C) '智者的'一词意味着一个非常有智慧的人。比喻地，它可以表示非常明智和谨慎的建议。" +
            "<br><br>" +
            "(A) '愚蠢的' 意味着缺乏良好的判断力或判断力。" +
            "<br><br>" +
            "(B) '新手的' 意味着在某个领域或情况下新来或缺乏经验的人。" +
            "<br><br>" +
            "(D) '专制的' 意味着以残忍或任意方式行使权力的。"
    },
    {
        id: 3,
        question: "Her generosity was as __________ as the fields of wheat in the countryside.",
        chinese_question: "她的慷慨如乡村的麦田般 __________。",
        answers: [
            { option: "A", answer: "bountiful", chinese_answer: "丰富的", chinese_romanization: "fēngfù de" },
            { option: "B", answer: "sparse", chinese_answer: "稀疏的", chinese_romanization: "xīshū de" },
            { option: "C", answer: "minimal", chinese_answer: "最少的", chinese_romanization: "zuìshǎo de" },
            { option: "D", answer: "negligible", chinese_answer: "微不足道的", chinese_romanization: "wēi bù zú dào de" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'bountiful' metaphorically means generous and plentiful." +
            "<br><br>" +
            "(B) 'sparse' means thinly dispersed or scattered." +
            "<br><br>" +
            "(C) 'minimal' means of a minimum amount, quantity, or degree." +
            "<br><br>" +
            "(D) 'negligible' means so small or unimportant as to be not worth considering.",
        chinese_explanation: "(A) '丰富的' 比喻慷慨和充足的。" +
            "<br><br>" +
            "(B) '稀疏的' 意味着稀疏分布或散布的。" +
            "<br><br>" +
            "(C) '最少的' 意味着最少量、数量或程度的。" +
            "<br><br>" +
            "(D) '微不足道的' 意味着小到或不重要以至于不值得考虑的。"
    },
    {
        id: 4,
        question: "The speech left an __________ impression on everyone in the audience.",
        chinese_question: "演讲给所有观众留下了 __________ 的印象。",
        answers: [
            { option: "A", answer: "indelible", chinese_answer: "难忘的", chinese_romanization: "nánwàng de" },
            { option: "B", answer: "fleeting", chinese_answer: "短暂的", chinese_romanization: "duǎnzàn de" },
            { option: "C", answer: "vague", chinese_answer: "模糊的", chinese_romanization: "móhú de" },
            { option: "D", answer: "forgettable", chinese_answer: "容易忘记的", chinese_romanization: "róngyì wàngjì de" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'indelible' metaphorically means unforgettable or lasting." +
            "<br><br>" +
            "(B) 'fleeting' means lasting for a very short time." +
            "<br><br>" +
            "(C) 'vague' means of uncertain, indefinite, or unclear character or meaning." +
            "<br><br>" +
            "(D) 'forgettable' means easily forgotten, especially through being uninteresting or dull.",
        chinese_explanation: "(A) '难忘的' 比喻令人难忘或持久的。" +
            "<br><br>" +
            "(B) '短暂的' 意味着持续时间非常短。" +
            "<br><br>" +
            "(C) '模糊的' 意味着不确定、不明确或含糊的。" +
            "<br><br>" +
            "(D) '容易忘记的' 意味着容易被遗忘的，特别是因为无趣或乏味。"
    },
    {
        id: 5,
        question: "She was very __________ in community service and often volunteered her time.",
        chinese_question: "她非常 __________ 于社区服务，经常自愿贡献她的时间。",
        answers: [
            { option: "A", answer: "active", chinese_answer: "积极的", chinese_romanization: "jījí de" },
            { option: "B", answer: "passive", chinese_answer: "被动的", chinese_romanization: "bèidòng de" },
            { option: "C", answer: "lethargic", chinese_answer: "昏睡的", chinese_romanization: "hūnshuì de" },
            { option: "D", answer: "indifferent", chinese_answer: "冷漠的", chinese_romanization: "lěngmò de" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'active' means engaging or ready to engage in physically energetic pursuits." +
            "<br><br>" +
            "(B) 'passive' means accepting or allowing what happens or what others do, without active response or resistance." +
            "<br><br>" +
            "(C) 'lethargic' means affected by lethargy; sluggish and apathetic." +
            "<br><br>" +
            "(D) 'indifferent' means having no particular interest or sympathy.",
        chinese_explanation: "(A) '积极的' 意味着参与或准备参与充满活力的追求。" +
            "<br><br>" +
            "(B) '被动的' 意味着接受或允许发生的事情或他人所做的事情，而没有积极的回应或抵抗。" +
            "<br><br>" +
            "(C) '昏睡的' 意味着受昏睡影响的；懒散和冷漠的。" +
            "<br><br>" +
            "(D) '冷漠的' 意味着没有特别的兴趣或同情心。"
    },
    {
        id: 6,
        question: "Her __________ behavior at the meeting raised concerns among her colleagues.",
        chinese_question: "她在会议上的__________行为引起了同事们的担忧。",
        answers: [
            { option: "A", answer: "normal", chinese_answer: "正常的", chinese_romanization: "zhèngcháng de" },
            { option: "B", answer: "abnormal", chinese_answer: "异常的", chinese_romanization: "yìcháng de" },
            { option: "C", answer: "regular", chinese_answer: "规律的", chinese_romanization: "guīlǜ de" },
            { option: "D", answer: "standard", chinese_answer: "标准的", chinese_romanization: "biāozhǔn de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'abnormal' means deviating from what is normal or usual. Figuratively, it can mean unusual or unexpected behavior." +
            "<br><br>" +
            "(A) 'normal' means conforming to a standard; usual, typical, or expected." +
            "<br><br>" +
            "(C) 'regular' means arranged in or constituting a constant or definite pattern, especially with the same space between individual instances." +
            "<br><br>" +
            "(D) 'standard' means a level of quality or attainment.",
        chinese_explanation: "(B) '异常的'一词意味着偏离正常或通常情况的。比喻地，它可以表示不寻常或意外的行为。" +
            "<br><br>" +
            "(A) '正常的' 意味着符合标准的；通常的、典型的或预期的。" +
            "<br><br>" +
            "(C) '规律的' 意味着排列成或构成一个恒定或确定的模式，特别是在个体实例之间有相同的空间。" +
            "<br><br>" +
            "(D) '标准的' 意味着质量或成就的水平。"
    },
    {
        id: 7,
        question: "Their vacation turned out to be quite __________, filled with unexpected adventures.",
        chinese_question: "他们的假期变得非常 __________，充满了意想不到的冒险。",
        answers: [
            { option: "A", answer: "eventful", chinese_answer: "多事的", chinese_romanization: "duōshì de" },
            { option: "B", answer: "boring", chinese_answer: "无聊的", chinese_romanization: "wúliáo de" },
            { option: "C", answer: "uneventful", chinese_answer: "平淡的", chinese_romanization: "píngdàn de" },
            { option: "D", answer: "tranquil", chinese_answer: "宁静的", chinese_romanization: "níngjìng de" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'eventful' means marked by interesting or exciting events." +
            "<br><br>" +
            "(B) 'boring' means not interesting; tedious." +
            "<br><br>" +
            "(C) 'uneventful' means not marked by interesting or exciting events." +
            "<br><br>" +
            "(D) 'tranquil' means free from disturbance; calm.",
        chinese_explanation: "(A) '多事的' 意味着以有趣或激动人心的事件为标志的。" +
            "<br><br>" +
            "(B) '无聊的' 意味着不有趣的；乏味的。" +
            "<br><br>" +
            "(C) '平淡的' 意味着没有有趣或激动人心的事件。" +
            "<br><br>" +
            "(D) '宁静的' 意味着没有干扰的；平静的。"
    },
    {
        id: 8,
        question: "The job counselor's __________ advice left the clients confused, as he gave non-committal and ambiguous suggestions about their career paths.",
        chinese_question: "职业顾问的 __________ 建议让客户感到困惑，因为他对他们的职业道路给出了不明确和模糊的建议。",
        answers: [
            { option: "A", answer: "clear", chinese_answer: "清楚的", chinese_romanization: "qīngchǔ de" },
            { option: "B", answer: "definite", chinese_answer: "明确的", chinese_romanization: "míngquè de" },
            { option: "C", answer: "specific", chinese_answer: "具体的", chinese_romanization: "jùtǐ de" },
            { option: "D", answer: "equivocal", chinese_answer: "模棱两可的", chinese_romanization: "móléng liǎng kě de" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'equivocal' means open to more than one interpretation; ambiguous." +
            "<br><br>" +
            "(A) 'clear' means easy to perceive, understand, or interpret." +
            "<br><br>" +
            "(B) 'definite' means clearly stated or decided; not vague or doubtful." +
            "<br><br>" +
            "(C) 'specific' means clearly defined or identified.",
        chinese_explanation: "(D) '模棱两可的' 意味着可以有多种解释的；模糊的。" +
            "<br><br>" +
            "(A) '清楚的' 意味着容易感知、理解或解释的。" +
            "<br><br>" +
            "(B) '明确的' 意味着清晰陈述或决定的；不模糊或怀疑的。" +
            "<br><br>" +
            "(C) '具体的' 意味着清晰定义或识别的。"
    },
    {
        id: 9,
        question: "The doctor assured us that the tumor was __________ and not a cause for concern.",
        chinese_question: "医生向我们保证，肿瘤是 __________ 的，不必担心。",
        answers: [
            { option: "A", answer: "benign", chinese_answer: "良性的", chinese_romanization: "liángxìng de" },
            { option: "B", answer: "malignant", chinese_answer: "恶性的", chinese_romanization: "èxìng de" },
            { option: "C", answer: "severe", chinese_answer: "严重的", chinese_romanization: "yánzhòng de" },
            { option: "D", answer: "painful", chinese_answer: "疼痛的", chinese_romanization: "téngtòng de" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'benign' means gentle and not harmful in effect." +
            "<br><br>" +
            "(B) 'malignant' means very virulent or infectious." +
            "<br><br>" +
            "(C) 'severe' means (of something bad or undesirable) very great; intense." +
            "<br><br>" +
            "(D) 'painful' means (of a part of the body) affected with pain.",
        chinese_explanation: "(A) '良性的' 意味着温和且无害的。" +
            "<br><br>" +
            "(B) '恶性的' 意味着非常有害或传染的。" +
            "<br><br>" +
            "(C) '严重的' 意味着（不好的或不想要的事物）非常大的；强烈的。" +
            "<br><br>" +
            "(D) '疼痛的' 意味着（身体的某一部分）受痛苦的影响。"
    },
    {
        id: 10,
        question: "The teacher's __________ enthusiasm for her subject was clear, as she brought energy and excitement to every lesson, making learning enjoyable for her students.",
        chinese_question: "老师对她所教科目的 __________ 热情显而易见，她为每节课带来了活力和兴奋，使学习变得愉快。",
        answers: [
            { option: "A", answer: "subdued", chinese_answer: "压抑的", chinese_romanization: "yāyì de" },
            { option: "B", answer: "indifferent", chinese_answer: "冷漠的", chinese_romanization: "lěngmò de" },
            { option: "C", answer: "reluctant", chinese_answer: "不情愿的", chinese_romanization: "bù qíngyuàn de" },
            { option: "D", answer: "irrepressible", chinese_answer: "压抑不住的", chinese_romanization: "yāyì bù zhù de" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'irrepressible' means not able to be controlled or restrained." +
            "<br><br>" +
            "(A) 'subdued' means quiet and rather reflective or depressed." +
            "<br><br>" +
            "(B) 'indifferent' means having no particular interest or sympathy; unconcerned." +
            "<br><br>" +
            "(C) 'reluctant' means unwilling and hesitant.",
        chinese_explanation: "(D) '压抑不住的' 意味着无法控制或抑制的。" +
            "<br><br>" +
            "(A) '压抑的' 意味着安静且相当深思或沮丧的。" +
            "<br><br>" +
            "(B) '冷漠的' 意味着没有特别的兴趣或同情；不关心的。" +
            "<br><br>" +
            "(C) '不情愿的' 意味着不愿意和犹豫的。"
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
