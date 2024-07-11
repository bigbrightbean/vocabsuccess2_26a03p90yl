// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "Despite their past disagreements, their meeting was __________, marked by warm and friendly conversation.",
        chinese_question: "尽管过去有分歧，他们的会面仍然 __________，充满了温暖和友好的对话。",
        answers: [
            { option: "A", answer: "hostile", chinese_answer: "敌对的", chinese_romanization: "díduì de" },
            { option: "B", answer: "indifferent", chinese_answer: "冷漠的", chinese_romanization: "lěngmò de" },
            { option: "C", answer: "cordial", chinese_answer: "亲切的", chinese_romanization: "qīnqiè de" },
            { option: "D", answer: "cold", chinese_answer: "冷淡的", chinese_romanization: "lěngdàn de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'cordial' means warm and friendly." +
            "<br><br>" +
            "(A) 'hostile' means unfriendly; antagonistic." +
            "<br><br>" +
            "(B) 'indifferent' means having no particular interest or sympathy; unconcerned." +
            "<br><br>" +
            "(D) 'cold' means lacking affection or warmth of feeling; unemotional.",
        chinese_explanation: "(C) '亲切的' 一词意味着温暖和友好的。" +
            "<br><br>" +
            "(A) '敌对的' 意味着不友好的；对抗的。" +
            "<br><br>" +
            "(B) '冷漠的' 意味着没有特别的兴趣或同情；不关心的。" +
            "<br><br>" +
            "(D) '冷淡的' 意味着缺乏感情或温暖的感觉；无情的。"
    },
    {
        id: 2,
        question: "The student received an award for her __________ performance, setting a high standard for her peers.",
        chinese_question: "这位学生因其 __________ 的表现而获奖，为同学们树立了高标准。",
        answers: [
            { option: "A", answer: "exemplary", chinese_answer: "模范的", chinese_romanization: "mófàn de" },
            { option: "B", answer: "mediocre", chinese_answer: "平庸的", chinese_romanization: "píngyōng de" },
            { option: "C", answer: "flawed", chinese_answer: "有缺陷的", chinese_romanization: "yǒu quēxiàn de" },
            { option: "D", answer: "poor", chinese_answer: "糟糕的", chinese_romanization: "zāogāo de" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'exemplary' means serving as a desirable model; very good." +
            "<br><br>" +
            "(B) 'mediocre' means of only average quality; not very good." +
            "<br><br>" +
            "(C) 'flawed' means having or characterized by a fundamental weakness or imperfection." +
            "<br><br>" +
            "(D) 'poor' means lacking sufficient money to live at a standard considered comfortable or normal in a society.",
        chinese_explanation: "(A) '模范的' 一词意味着作为理想榜样的；非常好的。" +
            "<br><br>" +
            "(B) '平庸的' 意味着质量一般；不太好。" +
            "<br><br>" +
            "(C) '有缺陷的' 意味着具有或表现出根本缺陷或缺陷的。" +
            "<br><br>" +
            "(D) '糟糕的' 意味着缺乏足够的钱以过上被认为舒适或正常的生活标准。"
    },
    {
        id: 3,
        question: "The holiday party was __________, with everyone enjoying themselves and having a good time.",
        chinese_question: "节日聚会非常__________，每个人都在享受并度过了愉快的时光。",
        answers: [
            { option: "A", answer: "serious", chinese_answer: "严肃的", chinese_romanization: "yánsù de" },
            { option: "B", answer: "gloomy", chinese_answer: "忧郁的", chinese_romanization: "yōuyù de" },
            { option: "C", answer: "jolly", chinese_answer: "快乐的", chinese_romanization: "kuàilè de" },
            { option: "D", answer: "somber", chinese_answer: "阴沉的", chinese_romanization: "yīnchén de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'jolly' means happy and cheerful. Figuratively, it can mean being lively and festive." +
            "<br><br>" +
            "(A) 'serious' means demanding careful consideration or application." +
            "<br><br>" +
            "(B) 'gloomy' means dark or poorly lit, especially so as to appear depressing or frightening." +
            "<br><br>" +
            "(D) 'somber' means dark or dull in color or tone; gloomy.",
        chinese_explanation: "(C) '快乐的'一词意味着快乐和愉快的。比喻地，它可以表示活泼和节日气氛的。" +
            "<br><br>" +
            "(A) '严肃的' 意味着需要认真考虑或应用的。" +
            "<br><br>" +
            "(B) '忧郁的' 意味着黑暗或光线不足，尤其是显得压抑或令人害怕的。" +
            "<br><br>" +
            "(D) '阴沉的' 意味着颜色或色调暗淡的；阴郁的。"
    },
    {
        id: 4,
        question: "The apartment complex had several __________ spaces, including a shared kitchen, laundry room, and garden, where residents could interact and build a sense of community.",
        chinese_question: "这栋公寓楼有几个 __________ 空间，包括一个共享厨房、洗衣房和花园，居民们可以在这里互动并建立社区感。",
        answers: [
            { option: "A", answer: "private", chinese_answer: "私人的", chinese_romanization: "sīrén de" },
            { option: "B", answer: "individual", chinese_answer: "个人的", chinese_romanization: "gèrén de" },
            { option: "C", answer: "exclusive", chinese_answer: "独有的", chinese_romanization: "dúyǒu de" },
            { option: "D", answer: "communal", chinese_answer: "公共的", chinese_romanization: "gōnggòng de" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'communal' means shared by all members of a community; for common use." +
            "<br><br>" +
            "(A) 'private' means belonging to or for the use of one particular person or group of people only." +
            "<br><br>" +
            "(B) 'individual' means single; separate." +
            "<br><br>" +
            "(C) 'exclusive' means restricted or limited to the person, group, or area concerned.",
        chinese_explanation: "(D) '公共的' 意味着由社区所有成员共享；供公共使用的。" +
            "<br><br>" +
            "(A) '私人的' 意味着仅属于或供某一特定人或人群使用的。" +
            "<br><br>" +
            "(B) '个人的' 意味着单个的；分开的。" +
            "<br><br>" +
            "(C) '独有的' 意味着限制或仅限于相关的人、群体或区域。"
    },
    {
        id: 5,
        question: "The party was filled with __________ decorations and lavish food, making it an unforgettable evening.",
        chinese_question: "派对上布满了 __________ 的装饰和奢华的食物，使这成为一个难忘的夜晚。",
        answers: [
            { option: "A", answer: "modest", chinese_answer: "朴素", chinese_romanization: "pǔsù" },
            { option: "B", answer: "austere", chinese_answer: "严厉", chinese_romanization: "yánlì" },
            { option: "C", answer: "decadent", chinese_answer: "堕落", chinese_romanization: "duòluò" },
            { option: "D", answer: "simple", chinese_answer: "简单", chinese_romanization: "jiǎndān" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'decadent' means characterized by or reflecting a state of moral or cultural decline, often with excessive indulgence." +
            "<br><br>" +
            "(A) 'modest' means unassuming in the estimation of one's abilities or achievements." +
            "<br><br>" +
            "(B) 'austere' means severe or strict in manner, attitude, or appearance." +
            "<br><br>" +
            "(D) 'simple' means easily understood or done; presenting no difficulty.",
        chinese_explanation: "(C) '堕落' 意味着以道德或文化衰落为特征或反映，通常伴有过度的放纵。" +
            "<br><br>" +
            "(A) '朴素' 意味着对自己能力或成就的评价谦虚。" +
            "<br><br>" +
            "(B) '严厉' 意味着在态度或外表上严格或严肃。" +
            "<br><br>" +
            "(D) '简单' 意味着容易理解或完成；没有困难。"
    },
    {
        id: 6,
        question: "The scientist's conclusions were based on __________ evidence gathered from numerous experiments and observations over several years.",
        chinese_question: "科学家的结论基于 __________ 证据，这些证据是通过多年的无数实验和观察收集的。",
        answers: [
            { option: "A", answer: "theoretical", chinese_answer: "理论的", chinese_romanization: "lǐlùn de" },
            { option: "B", answer: "anecdotal", chinese_answer: "轶事的", chinese_romanization: "yìshì de" },
            { option: "C", answer: "speculative", chinese_answer: "推测的", chinese_romanization: "tuīcè de" },
            { option: "D", answer: "empirical", chinese_answer: "实证的", chinese_romanization: "shízhèng de" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'empirical' means based on observation or experience rather than theory or pure logic." +
            "<br><br>" +
            "(A) 'theoretical' means based on or using theory rather than practical applications." +
            "<br><br>" +
            "(B) 'anecdotal' means based on personal accounts rather than facts or research." +
            "<br><br>" +
            "(C) 'speculative' means based on conjecture rather than knowledge.",
        chinese_explanation: "(D) '实证的' 意味着基于观察或经验而不是理论或纯粹逻辑。" +
            "<br><br>" +
            "(A) '理论的' 意味着基于或使用理论而不是实际应用。" +
            "<br><br>" +
            "(B) '轶事的' 意味着基于个人经历而不是事实或研究。" +
            "<br><br>" +
            "(C) '推测的' 意味着基于猜测而不是知识。"
    },
    {
        id: 7,
        question: "She felt an __________ sense of relief after hearing the good news.",
        chinese_question: "听到好消息后，她感到__________的宽慰。",
        answers: [
            { option: "A", answer: "small", chinese_answer: "小的", chinese_romanization: "xiǎo de" },
            { option: "B", answer: "tiny", chinese_answer: "微小的", chinese_romanization: "wéixiǎo de" },
            { option: "C", answer: "immense", chinese_answer: "巨大的", chinese_romanization: "jùdà de" },
            { option: "D", answer: "minute", chinese_answer: "极小的", chinese_romanization: "jíxiǎo de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'immense' means extremely large or great, especially in scale or degree. Figuratively, it can mean feeling something very strongly." +
            "<br><br>" +
            "(A) 'small' means of a size that is less than normal or usual." +
            "<br><br>" +
            "(B) 'tiny' means very small." +
            "<br><br>" +
            "(D) 'minute' means extremely small.",
        chinese_explanation: "(C) '巨大的'一词意味着非常大或伟大，特别是在规模或程度上。比喻地，它可以表示感觉非常强烈。" +
            "<br><br>" +
            "(A) '小的' 意味着比正常或通常的尺寸小。" +
            "<br><br>" +
            "(B) '微小的' 意味着非常小。" +
            "<br><br>" +
            "(D) '极小的' 意味着非常小。"
    },
    {
        id: 8,
        question: "The shelter's __________ treatment of animals ensured that all were well cared for and loved.",
        chinese_question: "收容所对动物 __________ 的对待确保所有动物都得到了良好的照顾和关爱。",
        answers: [
            { option: "A", answer: "humane", chinese_answer: "人道的", chinese_romanization: "réndào de" },
            { option: "B", answer: "cruel", chinese_answer: "残忍的", chinese_romanization: "cánrěn de" },
            { option: "C", answer: "indifferent", chinese_answer: "冷漠的", chinese_romanization: "lěngmò de" },
            { option: "D", answer: "harsh", chinese_answer: "严厉的", chinese_romanization: "yánlì de" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'humane' means having or showing compassion or benevolence." +
            "<br><br>" +
            "(B) 'cruel' means willfully causing pain or suffering to others, or feeling no concern about it." +
            "<br><br>" +
            "(C) 'indifferent' means having no particular interest or sympathy; unconcerned." +
            "<br><br>" +
            "(D) 'harsh' means unpleasantly rough or jarring to the senses.",
        chinese_explanation: "(A) '人道的' 意味着有或表现出同情或仁慈的。" +
            "<br><br>" +
            "(B) '残忍的' 意味着故意对他人造成痛苦或痛苦，或对其毫不关心。" +
           "<br><br>" +
            "(C) '冷漠的' 意味着没有特别的兴趣或同情心；不关心的。" +
            "<br><br>" +
            "(D) '严厉的' 意味着对感官不愉快的粗糙或刺耳的。"
    },
    {
        id: 9,
        question: "The marker left an __________ stain on the carpet that could not be removed, no matter how hard they scrubbed.",
        chinese_question: "这个记号笔在地毯上留下了一个__________的污渍，无论他们怎么擦都擦不掉。",
        answers: [
            { option: "A", answer: "temporary", chinese_answer: "临时的", chinese_romanization: "línshí de" },
            { option: "B", answer: "faint", chinese_answer: "模糊的", chinese_romanization: "móhu de" },
            { option: "C", answer: "indelible", chinese_answer: "难以磨灭的", chinese_romanization: "nányǐ mómiè de" },
            { option: "D", answer: "invisible", chinese_answer: "无形的", chinese_romanization: "wúxíng de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'indelible' means making marks that cannot be removed." +
            "<br><br>" +
            "(A) 'temporary' means lasting for only a limited period of time." +
            "<br><br>" +
            "(B) 'faint' means barely perceptible." +
            "<br><br>" +
            "(D) 'invisible' means unable to be seen.",
        chinese_explanation: "(C) '难以磨灭的'一词意味着留下无法去除的痕迹。" +
            "<br><br>" +
            "(A) '临时的' 意味着只持续有限的一段时间。" +
            "<br><br>" +
            "(B) '模糊的' 意味着几乎察觉不到。" +
            "<br><br>" +
            "(D) '无形的' 意味着看不见的。"
    },
    {
        id: 10,
        question: "Her __________ storytelling always made family gatherings lively and fun.",
        chinese_question: "她__________的讲故事总是让家庭聚会变得热闹有趣。",
        answers: [
            { option: "A", answer: "boring", chinese_answer: "无聊的", chinese_romanization: "wúliáo de" },
            { option: "B", answer: "serious", chinese_answer: "严肃的", chinese_romanization: "yánsù de" },
            { option: "C", answer: "hilarious", chinese_answer: "滑稽的", chinese_romanization: "huájī de" },
            { option: "D", answer: "tragic", chinese_answer: "悲惨的", chinese_romanization: "bēicǎn de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'hilarious' means extremely amusing." +
            "<br><br>" +
            "(A) 'boring' means not interesting." +
            "<br><br>" +
            "(B) 'serious' means demanding careful consideration or application." +
            "<br><br>" +
            "(D) 'tragic' means causing or characterized by extreme distress or sorrow.",
        chinese_explanation: "(C) '滑稽的'一词意味着非常有趣的。" +
            "<br><br>" +
            "(A) '无聊的' 意味着不有趣的。" +
            "<br><br>" +
            "(B) '严肃的' 意味着需要仔细考虑或应用的。" +
            "<br><br>" +
            "(D) '悲惨的' 意味着造成或以极度痛苦或悲伤为特征的。"
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
