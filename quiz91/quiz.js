// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "He would __________ about the house on weekends, not wanting to do anything productive.",
        chinese_question: "他周末会在家里懒洋洋地 __________，不想做任何有成效的事。",
        answers: [
            { option: "A", answer: "loll", chinese_answer: "懒散", chinese_romanization: "lǎnsǎn" },
            { option: "B", answer: "work", chinese_answer: "工作", chinese_romanization: "gōngzuò" },
            { option: "C", answer: "hustle", chinese_answer: "忙碌", chinese_romanization: "mánglù" },
            { option: "D", answer: "strive", chinese_answer: "努力", chinese_romanization: "nǔlì" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'loll' metaphorically means to be lazy or idle." +
            "<br><br>" +
            "(B) 'work' means to be engaged in physical or mental activity in order to achieve a purpose or result, especially in one's job." +
            "<br><br>" +
            "(C) 'hustle' means force (someone) to move hurriedly or unceremoniously in a specified direction." +
            "<br><br>" +
            "(D) 'strive' means make great efforts to achieve or obtain something.",
        chinese_explanation: "(A) '懒散' 比喻懒惰或闲散。" +
            "<br><br>" +
            "(B) '工作' 意味着为了实现某个目的或结果而从事体力或脑力活动，特别是在工作中。" +
            "<br><br>" +
            "(C) '忙碌' 意味着迫使（某人）匆忙或不客气地朝指定方向移动。" +
            "<br><br>" +
            "(D) '努力' 意味着尽力实现或获得某物。"
    },
    {
        id: 2,
        question: "The plant began to __________ without enough sunlight, its leaves turning yellow and limp.",
        chinese_question: "缺乏足够阳光的植物开始 __________，叶子变黄并变得柔软。",
        answers: [
            { option: "A", answer: "languish", chinese_answer: "枯萎", chinese_romanization: "kūwěi" },
            { option: "B", answer: "thrive", chinese_answer: "繁茂", chinese_romanization: "fánmào" },
            { option: "C", answer: "flourish", chinese_answer: "兴盛", chinese_romanization: "xīngshèng" },
            { option: "D", answer: "prosper", chinese_answer: "繁荣", chinese_romanization: "fánróng" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'languish' means to lose or lack vitality; grow weak or feeble." +
            "<br><br>" +
            "(B) 'thrive' means to grow or develop well or vigorously." +
            "<br><br>" +
            "(C) 'flourish' means to grow or develop in a healthy or vigorous way." +
            "<br><br>" +
            "(D) 'prosper' means to succeed in material terms; be financially successful.",
        chinese_explanation: "(A) '枯萎' 意味着失去或缺乏活力；变得虚弱或无力。" +
            "<br><br>" +
            "(B) '繁茂' 意味着生长或发展良好或旺盛。" +
            "<br><br>" +
            "(C) '兴盛' 意味着健康或旺盛地生长或发展。" +
            "<br><br>" +
            "(D) '繁荣' 意味着在物质方面取得成功；经济上成功。"
    },
    {
        id: 3,
        question: "The school decided to __________ new policies to improve student behavior and academic performance.",
        chinese_question: "学校决定__________新政策，以改善学生行为和学术表现。",
        answers: [
            { option: "A", answer: "abolish", chinese_answer: "废除", chinese_romanization: "fèichú" },
            { option: "B", answer: "abandon", chinese_answer: "放弃", chinese_romanization: "fàngqì" },
            { option: "C", answer: "institute", chinese_answer: "制定", chinese_romanization: "zhìdìng" },
            { option: "D", answer: "eliminate", chinese_answer: "消除", chinese_romanization: "xiāochú" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'institute' means to set in motion or establish something, especially a program, system, or inquiry." +
            "<br><br>" +
            "(A) 'abolish' means to formally put an end to a system, practice, or institution." +
            "<br><br>" +
            "(B) 'abandon' means to give up completely." +
            "<br><br>" +
            "(D) 'eliminate' means to completely remove or get rid of something.",
        chinese_explanation: "(C) '制定' 一词意味着开始或建立某物，尤其是计划、系统或调查。" +
            "<br><br>" +
            "(A) '废除' 意味着正式结束一个制度、做法或机构。" +
            "<br><br>" +
            "(B) '放弃' 意味着完全放弃。" +
            "<br><br>" +
            "(D) '消除' 意味着完全移除或摆脱某物。"
    },
    {
        id: 4,
        question: "The coach's motivational speeches were meant to __________ a sense of determination in the athletes.",
        chinese_question: "教练的激励演讲旨在__________运动员的决心。",
        answers: [
            { option: "A", answer: "remove", chinese_answer: "移除", chinese_romanization: "yíchú" },
            { option: "B", answer: "instill", chinese_answer: "灌输", chinese_romanization: "guànshū" },
            { option: "C", answer: "eradicate", chinese_answer: "根除", chinese_romanization: "gēnchú" },
            { option: "D", answer: "discourage", chinese_answer: "劝阻", chinese_romanization: "quànzǔ" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'instill' means to gradually but firmly establish an idea or attitude in a person's mind. Figuratively, it can mean to impart or introduce a quality or feeling into someone." +
            "<br><br>" +
            "(A) 'remove' means to take something away or off from the position occupied." +
            "<br><br>" +
            "(C) 'eradicate' means to destroy completely or put an end to." +
            "<br><br>" +
            "(D) 'discourage' means to cause someone to lose confidence or enthusiasm.",
        chinese_explanation: "(B) '灌输'一词意味着逐渐但坚定地在某人的头脑中建立一种想法或态度。比喻地，它可以表示将某种品质或感觉传递或引入某人。" +
            "<br><br>" +
            "(A) '移除' 意味着从占据的位置上拿走某物。" +
            "<br><br>" +
            "(C) '根除' 意味着彻底摧毁或结束。" +
            "<br><br>" +
            "(D) '劝阻' 意味着使某人失去信心或热情。"
    },
    {
        id: 5,
        question: "The constant delays and excuses from the contractor __________ the homeowners.",
        chinese_question: "承包商的不断拖延和借口__________了房主。",
        answers: [
            { option: "A", answer: "pleased", chinese_answer: "高兴", chinese_romanization: "gāoxìng" },
            { option: "B", answer: "calmed", chinese_answer: "平静", chinese_romanization: "píngjìng" },
            { option: "C", answer: "baffled", chinese_answer: "困惑", chinese_romanization: "kùnhuò" },
            { option: "D", answer: "incensed", chinese_answer: "激怒", chinese_romanization: "jīnù" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'incensed' means to make very angry. Figuratively, it can mean causing strong irritation or anger." +
            "<br><br>" +
            "(A) 'pleased' means to cause to feel happy and satisfied." +
            "<br><br>" +
            "(B) 'calmed' means made someone tranquil and quiet; soothed." +
            "<br><br>" +
            "(C) 'baffled' means totally bewildered or perplexed.",
        chinese_explanation: "(D) '激怒'一词意味着使非常生气。比喻地，它可以表示引起强烈的恼怒或愤怒。" +
            "<br><br>" +
            "(A) '高兴' 意味着使感到高兴和满意。" +
            "<br><br>" +
            "(B) '平静' 意味着使某人平静和安静；抚慰。" +
            "<br><br>" +
            "(C) '困惑' 意味着完全迷惑或困惑。"
    },
    {
        id: 6,
        question: "She promised to __________ the necessary documents as soon as possible.",
        chinese_question: "她承诺尽快__________必要的文件。",
        answers: [
            { option: "A", answer: "recall", chinese_answer: "召回", chinese_romanization: "zhàohuí" },
            { option: "B", answer: "dismiss", chinese_answer: "解雇", chinese_romanization: "jiěgù" },
            { option: "C", answer: "dispatch", chinese_answer: "派遣", chinese_romanization: "pàiqiǎn" },
            { option: "D", answer: "avoid", chinese_answer: "避免", chinese_romanization: "bìmiǎn" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'dispatch' means to send off to a destination or for a purpose. Figuratively, it can mean to send something quickly or efficiently." +
            "<br><br>" +
            "(A) 'recall' means to bring (a fact, event, or situation) back into one's mind." +
            "<br><br>" +
            "(B) 'dismiss' means to order or allow to leave; send away." +
            "<br><br>" +
            "(D) 'avoid' means to keep away from or stop oneself from doing something.",
        chinese_explanation: "(C) '派遣'一词意味着派往某个目的地或目的。比喻地，它可以表示快速或高效地发送某物。" +
            "<br><br>" +
            "(A) '召回' 意味着将（事实、事件或情况）带回一个人的脑海。" +
            "<br><br>" +
            "(B) '解雇' 意味着命令或允许离开；送走。" +
            "<br><br>" +
            "(D) '避免' 意味着远离或阻止自己做某事。"
    },
    {
        id: 7,
        question: "With careful observation, she was able to __________ the subtle differences between the original painting and the forgery.",
        chinese_question: "通过仔细观察，她能够__________原画和赝品之间的细微差别。",
        answers: [
            { option: "A", answer: "discern", chinese_answer: "识别", chinese_romanization: "shìbié" },
            { option: "B", answer: "obscure", chinese_answer: "隐藏", chinese_romanization: "yǐncáng" },
            { option: "C", answer: "confuse", chinese_answer: "混淆", chinese_romanization: "hùnxiáo" },
            { option: "D", answer: "overlook", chinese_answer: "忽略", chinese_romanization: "hūlüè" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'discern' means to perceive or recognize something." +
            "<br><br>" +
            "(B) 'obscure' means to keep from being seen; conceal." +
            "<br><br>" +
            "(C) 'confuse' means to make someone unable to think clearly." +
            "<br><br>" +
            "(D) 'overlook' means to fail to notice something.",
        chinese_explanation: "(A) '识别' 一词意味着感知或识别某物。" +
            "<br><br>" +
            "(B) '隐藏' 意味着不让被看到；隐藏。" +
            "<br><br>" +
            "(C) '混淆' 意味着使某人无法清晰思考。" +
            "<br><br>" +
            "(D) '忽略' 意味着未能注意到某事。"
    },
    {
        id: 8,
        question: "The community __________ the lack of support for the homeless shelter and called for more action.",
        chinese_question: "社区__________对无家可归者收容所缺乏支持，并呼吁采取更多行动。",
        answers: [
            { option: "A", answer: "celebrated", chinese_answer: "庆祝", chinese_romanization: "qìngzhù" },
            { option: "B", answer: "supported", chinese_answer: "支持", chinese_romanization: "zhīchí" },
            { option: "C", answer: "deplored", chinese_answer: "谴责", chinese_romanization: "qiǎnzé" },
            { option: "D", answer: "appreciated", chinese_answer: "感激", chinese_romanization: "gǎnjī" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'deplored' means to feel or express strong disapproval of something." +
            "<br><br>" +
            "(A) 'celebrated' means acknowledged a significant or happy day or event with a social gathering or enjoyable activity." +
            "<br><br>" +
            "(B) 'supported' means to agree with and give encouragement to someone or something because you want them to succeed." +
            "<br><br>" +
            "(D) 'appreciated' means recognized the full worth of.",
        chinese_explanation: "(C) '谴责'一词意味着对某事强烈不赞成或表示不满。" +
            "<br><br>" +
            "(A) '庆祝' 意味着通过社交聚会或愉快的活动来承认重要或快乐的一天或事件。" +
            "<br><br>" +
            "(B) '支持' 意味着同意并鼓励某人或某事，因为你希望他们成功。" +
            "<br><br>" +
            "(D) '感激' 意味着认识到全部价值。"
    },
    {
        id: 9,
        question: "The team had to __________ the game because they didn't have enough players.",
        chinese_question: "因为没有足够的球员，球队不得不 __________ 比赛。",
        answers: [
            { option: "A", answer: "forfeit", chinese_answer: "放弃", chinese_romanization: "fàngqì" },
            { option: "B", answer: "win", chinese_answer: "赢", chinese_romanization: "yíng" },
            { option: "C", answer: "complete", chinese_answer: "完成", chinese_romanization: "wánchéng" },
            { option: "D", answer: "commence", chinese_answer: "开始", chinese_romanization: "kāishǐ" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'forfeit' means to lose or be deprived of (property or a right or privilege) as a penalty for wrongdoing." +
            "<br><br>" +
            "(B) 'win' means to be successful or victorious in (a contest or conflict)." +
            "<br><br>" +
            "(C) 'complete' means to finish making or doing." +
            "<br><br>" +
            "(D) 'commence' means to begin.",
        chinese_explanation: "(A) '放弃' 意味着由于犯错而失去或被剥夺（财产或权利或特权）。" +
            "<br><br>" +
            "(B) '赢' 意味着在（竞赛或冲突中）成功或胜利。" +
            "<br><br>" +
            "(C) '完成' 意味着完成制作或做某事。" +
            "<br><br>" +
            "(D) '开始' 意味着开始。"
    },
    {
        id: 10,
        question: "She managed to __________ out the truth after hours of questioning.",
        chinese_question: "经过几个小时的询问，她设法 __________ 出真相。",
        answers: [
            { option: "A", answer: "ferret", chinese_answer: "查出", chinese_romanization: "chá chū" },
            { option: "B", answer: "conceal", chinese_answer: "隐藏", chinese_romanization: "yǐncáng" },
            { option: "C", answer: "bury", chinese_answer: "埋葬", chinese_romanization: "máizàng" },
            { option: "D", answer: "hide", chinese_answer: "躲藏", chinese_romanization: "duǒcáng" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'ferret' means to search tenaciously for and find something." +
            "<br><br>" +
            "(B) 'conceal' means to keep from sight; hide." +
            "<br><br>" +
            "(C) 'bury' means to put or keep out of sight; cover up." +
            "<br><br>" +
            "(D) 'hide' means to put or keep out of sight; conceal from the view or notice of others.",
        chinese_explanation: "(A) '查出' 意味着顽强地搜索并找到某物。" +
            "<br><br>" +
            "(B) '隐藏' 意味着使看不见；隐藏。" +
            "<br><br>" +
            "(C) '埋葬' 意味着使看不见；掩盖。" +
            "<br><br>" +
            "(D) '躲藏' 意味着使看不见；隐藏在他人的视野或注意之外。"
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
