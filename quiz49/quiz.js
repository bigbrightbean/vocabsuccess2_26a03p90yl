// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "The concert was __________, with the band playing out of tune and the sound system failing multiple times.",
        chinese_question: "音乐会 __________，乐队跑调，音响系统多次故障。",
        answers: [
            { option: "A", answer: "remarkable", chinese_answer: "卓越的", chinese_romanization: "zhuóyuè de" },
            { option: "B", answer: "satisfactory", chinese_answer: "令人满意的", chinese_romanization: "lìngrén mǎnyì de" },
            { option: "C", answer: "enjoyable", chinese_answer: "愉快的", chinese_romanization: "yúkuài de" },
            { option: "D", answer: "execrable", chinese_answer: "极坏的", chinese_romanization: "jí huài de" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'execrable' means extremely bad or unpleasant." +
            "<br><br>" +
            "(A) 'remarkable' means worthy of attention; striking." +
            "<br><br>" +
            "(B) 'satisfactory' means fulfilling expectations or needs; acceptable." +
            "<br><br>" +
            "(C) 'enjoyable' means giving delight or pleasure.",
        chinese_explanation: "(D) '极坏的' 意味着非常糟糕或不愉快的。" +
            "<br><br>" +
            "(A) '卓越的' 意味着值得注意的；引人注目的。" +
            "<br><br>" +
            "(B) '令人满意的' 意味着满足期望或需要；可以接受的。" +
            "<br><br>" +
            "(C) '愉快的' 意味着给予愉悦或快乐的。"
    },
    {
        id: 2,
        question: "Her __________ participation in the community projects made a significant impact on the neighborhood.",
        chinese_question: "她 __________ 参与社区项目，对社区产生了重大影响。",
        answers: [
            { option: "A", answer: "passive", chinese_answer: "被动", chinese_romanization: "bèidòng" },
            { option: "B", answer: "inactive", chinese_answer: "不活跃", chinese_romanization: "bù huóyuè" },
            { option: "C", answer: "active", chinese_answer: "积极", chinese_romanization: "jījí" },
            { option: "D", answer: "indifferent", chinese_answer: "冷漠", chinese_romanization: "lěngmò" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'active' means engaging or ready to engage in physically energetic pursuits." +
            "<br><br>" +
            "(A) 'passive' means accepting or allowing what happens or what others do, without active response or resistance." +
            "<br><br>" +
            "(B) 'inactive' means not engaging in or involving any or much physical activity." +
            "<br><br>" +
            "(D) 'indifferent' means having no particular interest or sympathy; unconcerned.",
        chinese_explanation: "(C) '积极' 一词意味着从事或准备从事身体活跃的追求。" +
            "<br><br>" +
            "(A) '被动' 意味着接受或允许发生的事情或他人所做的事情，而没有积极的反应或抵抗。" +
            "<br><br>" +
            "(B) '不活跃' 意味着不从事或不涉及任何或很多体力活动。" +
            "<br><br>" +
            "(D) '冷漠' 意味着没有特别的兴趣或同情；不关心的。"
    },
    {
        id: 3,
        question: "The __________ view of the city from the helicopter revealed a complex network of streets and buildings.",
        chinese_question: "从直升机上看到的城市 __________ 景观揭示了复杂的街道和建筑网络。",
        answers: [
            { option: "A", answer: "ground", chinese_answer: "地面", chinese_romanization: "dìmiàn" },
            { option: "B", answer: "subterranean", chinese_answer: "地下", chinese_romanization: "dìxià" },
            { option: "C", answer: "lateral", chinese_answer: "侧面", chinese_romanization: "cèmiàn" },
            { option: "D", answer: "aerial", chinese_answer: "空中", chinese_romanization: "kōngzhōng" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'aerial' means existing, happening, or operating in the air." +
            "<br><br>" +
            "(A) 'ground' means the solid surface of the earth." +
            "<br><br>" +
            "(B) 'subterranean' means existing, occurring, or done under the earth's surface." +
            "<br><br>" +
            "(C) 'lateral' means of, at, toward, or from the side or sides.",
        chinese_explanation: "(D) '空中' 一词意味着存在、发生或在空中操作。" +
            "<br><br>" +
            "(A) '地面' 意味着地球的固体表面。" +
            "<br><br>" +
            "(B) '地下' 意味着存在、发生或在地球表面以下完成。" +
            "<br><br>" +
            "(C) '侧面' 意味着从侧面或两侧。"
    },
    {
        id: 4,
        question: "If you are not happy with the proposed plan, we can discuss an __________ solution that might work better for everyone.",
        chinese_question: "如果您对提议的计划不满意，我们可以讨论一个可能对每个人都更合适的 __________ 解决方案。",
        answers: [
            { option: "A", answer: "identical", chinese_answer: "相同", chinese_romanization: "xiāngtóng" },
            { option: "B", answer: "primary", chinese_answer: "主要", chinese_romanization: "zhǔyào" },
            { option: "C", answer: "alternative", chinese_answer: "替代", chinese_romanization: "tìdài" },
            { option: "D", answer: "similar", chinese_answer: "类似", chinese_romanization: "lèisì" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'alternative' means available as another possibility or choice." +
            "<br><br>" +
            "(A) 'identical' means similar in every detail; exactly alike." +
            "<br><br>" +
            "(B) 'primary' means of chief importance; principal." +
            "<br><br>" +
            "(D) 'similar' means resembling without being identical.",
        chinese_explanation: "(C) '替代' 一词意味着作为另一种可能性或选择可用。" +
            "<br><br>" +
            "(A) '相同' 意味着在每个细节上都相似；完全一样。" +
            "<br><br>" +
            "(B) '主要' 意味着最重要的；主要的。" +
            "<br><br>" +
            "(D) '类似' 意味着相似但不完全相同。"
    },
    {
        id: 5,
        question: "Her __________ efforts to support the community during the crisis were widely recognized and appreciated.",
        chinese_question: "在危机期间，她__________努力支持社区，得到了广泛认可和赞赏。",
        answers: [
            { option: "A", answer: "cowardly", chinese_answer: "懦弱的", chinese_romanization: "nuòruò de" },
            { option: "B", answer: "heroic", chinese_answer: "英勇的", chinese_romanization: "yīngyǒng de" },
            { option: "C", answer: "ordinary", chinese_answer: "普通的", chinese_romanization: "pǔtōng de" },
            { option: "D", answer: "routine", chinese_answer: "常规的", chinese_romanization: "chángguī de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'heroic' means having the characteristics of a hero or heroine; very brave." +
            "<br><br>" +
            "(A) 'cowardly' means lacking courage." +
            "<br><br>" +
            "(C) 'ordinary' means with no special or distinctive features." +
            "<br><br>" +
            "(D) 'routine' means performed as part of a regular procedure.",
        chinese_explanation: "(B) '英勇的'一词意味着具有英雄或女英雄的特征；非常勇敢的。" +
            "<br><br>" +
            "(A) '懦弱的' 意味着缺乏勇气。" +
            "<br><br>" +
            "(C) '普通的' 意味着没有特别或独特的特征。" +
            "<br><br>" +
            "(D) '常规的' 意味着作为常规程序的一部分进行的。"
    },
    {
        id: 6,
        question: "They chose a __________ wedding ceremony, following all the traditional customs.",
        chinese_question: "他们选择了一场 __________ 的婚礼仪式，遵循所有传统习俗。",
        answers: [
            { option: "A", answer: "conventional", chinese_answer: "传统的", chinese_romanization: "chuántǒng de" },
            { option: "B", answer: "unique", chinese_answer: "独特的", chinese_romanization: "dútè de" },
            { option: "C", answer: "unusual", chinese_answer: "不寻常的", chinese_romanization: "bù xúncháng de" },
            { option: "D", answer: "modern", chinese_answer: "现代的", chinese_romanization: "xiàndài de" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'conventional' means based on or in accordance with what is generally done or believed." +
            "<br><br>" +
            "(B) 'unique' means being the only one of its kind; unlike anything else." +
            "<br><br>" +
            "(C) 'unusual' means not habitually or commonly occurring or done." +
            "<br><br>" +
            "(D) 'modern' means relating to the present or recent times as opposed to the remote past.",
        chinese_explanation: "(A) '传统的' 意味着基于或符合普遍做法或信念的。" +
            "<br><br>" +
            "(B) '独特的' 意味着独一无二的；不像其他任何事物。" +
            "<br><br>" +
            "(C) '不寻常的' 意味着不习惯性或不常见的。" +
            "<br><br>" +
            "(D) '现代的' 意味着与现在或最近的时间有关的，而不是与遥远的过去有关的。"
    },
    {
        id: 7,
        question: "We need to find an __________ route to avoid the heavy traffic on the main road.",
        chinese_question: "我们需要找到一条 __________ 路线以避开主干道上的交通拥堵。",
        answers: [
            { option: "A", answer: "usual", chinese_answer: "习惯的", chinese_romanization: "xíguàn de" },
            { option: "B", answer: "alternative", chinese_answer: "替代的", chinese_romanization: "tìdài de" },
            { option: "C", answer: "conventional", chinese_answer: "传统的", chinese_romanization: "chuántǒng de" },
            { option: "D", answer: "standard", chinese_answer: "标准的", chinese_romanization: "biāozhǔn de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'alternative' means (of one or more things) available as another possibility." +
            "<br><br>" +
            "(A) 'usual' means habitual or customary." +
            "<br><br>" +
            "(C) 'conventional' means based on or in accordance with what is generally done or believed." +
            "<br><br>" +
            "(D) 'standard' means used or accepted as normal or average.",
        chinese_explanation: "(B) '替代的' 一词意味着（一个或多个事物）可作为另一种可能性。" +
            "<br><br>" +
            "(A) '习惯的' 意味着习惯的或习惯性的。" +
            "<br><br>" +
            "(C) '传统的' 意味着基于或符合一般做法或信仰的。" +
            "<br><br>" +
            "(D) '标准的' 意味着用作或接受为正常或平均的。"
    },
    {
        id: 8,
        question: "The soil in this area is __________ in nutrients, making it difficult to grow crops.",
        chinese_question: "该地区的土壤缺乏营养物质，使得作物难以生长。",
        answers: [
            { option: "A", answer: "rich", chinese_answer: "富含的", chinese_romanization: "fùhán de" },
            { option: "B", answer: "deficient", chinese_answer: "缺乏的", chinese_romanization: "quēfá de" },
            { option: "C", answer: "abundant", chinese_answer: "丰富的", chinese_romanization: "fēngfù de" },
            { option: "D", answer: "plentiful", chinese_answer: "充足的", chinese_romanization: "chōngzú de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'deficient' means not having enough of a specified quality or ingredient." +
            "<br><br>" +
            "(A) 'rich' means having a lot of something." +
            "<br><br>" +
            "(C) 'abundant' means existing or available in large quantities; plentiful." +
            "<br><br>" +
            "(D) 'plentiful' means existing in or yielding great quantities; abundant.",
        chinese_explanation: "(B) '缺乏的' 一词意味着没有足够的特定质量或成分。" +
            "<br><br>" +
            "(A) '富含的' 意味着有很多某物的。" +
            "<br><br>" +
            "(C) '丰富的' 意味着存在或可获得大量的；充足的。" +
            "<br><br>" +
            "(D) '充足的' 意味着存在或产生大量的；丰富的。"
    },
    {
        id: 9,
        question: "The climber's foothold was __________, and any slight movement could cause him to fall.",
        chinese_question: "攀登者的立足点很 __________，任何轻微的移动都可能导致他跌落。",
        answers: [
            { option: "A", answer: "secure", chinese_answer: "安全的", chinese_romanization: "ānquán de" },
            { option: "B", answer: "stable", chinese_answer: "稳定的", chinese_romanization: "wěndìng de" },
            { option: "C", answer: "precarious", chinese_answer: "不稳定的", chinese_romanization: "bù wěndìng de" },
            { option: "D", answer: "steady", chinese_answer: "稳固的", chinese_romanization: "wěngù de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'precarious' means not securely held or in position; dangerously likely to fall or collapse." +
            "<br><br>" +
            "(A) 'secure' means fixed or fastened so as not to give way, become loose, or be lost." +
            "<br><br>" +
            "(B) 'stable' means not likely to give way or overturn; firmly fixed." +
            "<br><br>" +
            "(D) 'steady' means firmly fixed, supported, or balanced; not shaking or moving.",
        chinese_explanation: "(C) '不稳定的' 一词意味着没有牢固固定或定位的；极有可能跌倒或倒塌的。" +
            "<br><br>" +
            "(A) '安全的' 意味着固定或牢固固定，以至于不会让步、松动或丢失。" +
            "<br><br>" +
            "(B) '稳定的' 意味着不太可能让步或翻倒的；牢固固定的。" +
            "<br><br>" +
            "(D) '稳固的' 意味着牢固固定、支撑或平衡的；不摇晃或移动的。"
    },
    {
        id: 10,
        question: "The fire alarm triggered an __________ situation, requiring immediate evacuation and swift action from the emergency responders.",
        chinese_question: "火警触发了一个 __________ 的情况，需要紧急疏散和紧急响应人员迅速行动。",
        answers: [
            { option: "A", answer: "calm", chinese_answer: "平静的", chinese_romanization: "píngjìng de" },
            { option: "B", answer: "relaxed", chinese_answer: "放松的", chinese_romanization: "fàngsōng de" },
            { option: "C", answer: "routine", chinese_answer: "常规的", chinese_romanization: "chángguī de" },
            { option: "D", answer: "exigent", chinese_answer: "紧急的", chinese_romanization: "jǐnjí de" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'exigent' means requiring immediate attention or action; urgent." +
            "<br><br>" +
            "(A) 'calm' means not showing or feeling nervousness, anger, or other strong emotions." +
            "<br><br>" +
            "(B) 'relaxed' means free from tension and anxiety." +
            "<br><br>" +
            "(C) 'routine' means performed as part of a regular procedure rather than for a special reason.",
        chinese_explanation: "(D) '紧急的' 意味着需要立即关注或行动的；紧迫的。" +
            "<br><br>" +
            "(A) '平静的' 意味着不显示或感到紧张、愤怒或其他强烈情绪的。" +
            "<br><br>" +
            "(B) '放松的' 意味着没有紧张和焦虑的。" +
            "<br><br>" +
            "(C) '常规的' 意味着作为常规程序的一部分执行，而不是出于特殊原因。"
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
