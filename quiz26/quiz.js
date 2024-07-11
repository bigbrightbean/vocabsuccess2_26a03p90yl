// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "His __________ approach to his work often inspired his colleagues to put in their best effort as well.",
        chinese_question: "他对工作的 __________ 态度常常激励同事们也付出最大的努力。",
        answers: [
            { option: "A", answer: "apathetic", chinese_answer: "冷漠的", chinese_romanization: "lěngmò de" },
            { option: "B", answer: "indifferent", chinese_answer: "漠不关心的", chinese_romanization: "mò bù guānxīn de" },
            { option: "C", answer: "zealous", chinese_answer: "热情的", chinese_romanization: "rèqíng de" },
            { option: "D", answer: "lethargic", chinese_answer: "昏昏欲睡的", chinese_romanization: "hūnhūn yù shuì de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'zealous' means having or showing zeal; fervent." +
            "<br><br>" +
            "(A) 'apathetic' means showing or feeling no interest, enthusiasm, or concern." +
            "<br><br>" +
            "(B) 'indifferent' means having no particular interest or sympathy; unconcerned." +
            "<br><br>" +
            "(D) 'lethargic' means affected by lethargy; sluggish and apathetic.",
        chinese_explanation: "(C) '热情的' 意味着具有或表现出热情；热心的。" +
            "<br><br>" +
            "(A) '冷漠的' 意味着没有兴趣、热情或关心。" +
            "<br><br>" +
            "(B) '漠不关心的' 意味着没有特别的兴趣或同情；不关心的。" +
            "<br><br>" +
            "(D) '昏昏欲睡的' 意味着受嗜睡影响的；迟钝和冷漠的。"
    },
    {
        id: 2,
        question: "He had __________ views on education, favoring traditional teaching methods over modern innovations.",
        chinese_question: "他对教育持有 __________ 的看法，倾向于传统的教学方法而非现代创新。",
        answers: [
            { option: "A", answer: "conservative", chinese_answer: "保守的", chinese_romanization: "bǎoshǒu de" },
            { option: "B", answer: "radical", chinese_answer: "激进的", chinese_romanization: "jījìn de" },
            { option: "C", answer: "liberal", chinese_answer: "自由的", chinese_romanization: "zìyóu de" },
            { option: "D", answer: "progressive", chinese_answer: "进步的", chinese_romanization: "jìnbù de" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'conservative' means holding to traditional attitudes and values and cautious about change or innovation." +
            "<br><br>" +
            "(B) 'radical' means relating to or affecting the fundamental nature of something; far-reaching or thorough." +
            "<br><br>" +
            "(C) 'liberal' means open to new behavior or opinions and willing to discard traditional values." +
            "<br><br>" +
            "(D) 'progressive' means happening or developing gradually or in stages.",
        chinese_explanation: "(A) '保守的' 意味着持有传统态度和价值观，并对变革或创新持谨慎态度。" +
            "<br><br>" +
            "(B) '激进的' 意味着涉及或影响某物的基本性质；深远或彻底。" +
            "<br><br>" +
            "(C) '自由的' 意味着对新的行为或意见持开放态度，并愿意抛弃传统价值观。" +
            "<br><br>" +
            "(D) '进步的' 意味着逐渐或分阶段发生或发展的。"
    },
    {
        id: 3,
        question: "The security guard remained __________ throughout the night, ensuring that no one entered the premises without permission.",
        chinese_question: "保安整夜保持 __________，确保没有人未经允许进入场地。",
        answers: [
            { option: "A", answer: "relaxed", chinese_answer: "放松的", chinese_romanization: "fàngsōng de" },
            { option: "B", answer: "inattentive", chinese_answer: "不注意的", chinese_romanization: "bù zhùyì de" },
            { option: "C", answer: "vigilant", chinese_answer: "警惕的", chinese_romanization: "jǐngtì de" },
            { option: "D", answer: "careless", chinese_answer: "粗心的", chinese_romanization: "cūxīn de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'vigilant' means keeping careful watch for possible danger or difficulties." +
            "<br><br>" +
            "(A) 'relaxed' means free from tension and anxiety." +
            "<br><br>" +
            "(B) 'inattentive' means not paying attention to something." +
            "<br><br>" +
            "(D) 'careless' means not giving sufficient attention or thought to avoiding harm or errors.",
        chinese_explanation: "(C) '警惕的' 一词意味着仔细观察可能的危险或困难。" +
            "<br><br>" +
            "(A) '放松的' 意味着没有紧张和焦虑的。" +
            "<br><br>" +
            "(B) '不注意的' 意味着没有注意到某事。" +
            "<br><br>" +
            "(D) '粗心的' 意味着没有充分注意或考虑避免伤害或错误。"
    },
    {
        id: 4,
        question: "The __________ employee always adhered to company policies without question.",
        chinese_question: "那个 __________ 的员工总是毫无疑问地遵守公司政策。",
        answers: [
            { option: "A", answer: "obedient", chinese_answer: "听话", chinese_romanization: "tīnghuà" },
            { option: "B", answer: "rebellious", chinese_answer: "叛逆", chinese_romanization: "pànnì" },
            { option: "C", answer: "independent", chinese_answer: "独立", chinese_romanization: "dúlì" },
            { option: "D", answer: "stubborn", chinese_answer: "顽固", chinese_romanization: "wángù" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'obedient' metaphorically means compliant and submissive." +
            "<br><br>" +
            "(B) 'rebellious' means resisting authority or control." +
            "<br><br>" +
            "(C) 'independent' means free from outside control." +
            "<br><br>" +
            "(D) 'stubborn' means refusing to change one's mind.",
        chinese_explanation: "(A) '听话' 比喻顺从和服从。" +
            "<br><br>" +
            "(B) '叛逆' 意味着反抗权威或控制。" +
            "<br><br>" +
            "(C) '独立' 意味着不受外界控制。" +
            "<br><br>" +
            "(D) '顽固' 意味着拒绝改变主意。"
    },
    {
        id: 5,
        question: "The intern's presentation was so __________, filled with grandiose claims and exaggerated statements, that it was difficult to take the actual content seriously.",
        chinese_question: "实习生的演讲如此 __________，充满了夸大的言辞和夸张的陈述，以至于很难认真对待实际内容。",
        answers: [
            { option: "A", answer: "concise", chinese_answer: "简洁的", chinese_romanization: "jiǎnjié de" },
            { option: "B", answer: "modest", chinese_answer: "谦虚的", chinese_romanization: "qiānxū de" },
            { option: "C", answer: "plain", chinese_answer: "朴素的", chinese_romanization: "pǔsù de" },
            { option: "D", answer: "bombastic", chinese_answer: "夸大的", chinese_romanization: "kuādà de" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'bombastic' means high-sounding but with little meaning; inflated." +
            "<br><br>" +
            "(A) 'concise' means giving a lot of information clearly and in a few words; brief but comprehensive." +
            "<br><br>" +
            "(B) 'modest' means unassuming or moderate in the estimation of one's abilities or achievements." +
            "<br><br>" +
            "(C) 'plain' means simple or basic in character.",
        chinese_explanation: "(D) '夸大的' 意味着听起来很高调但意义不大；夸张的。" +
            "<br><br>" +
            "(A) '简洁的' 意味着用少量的词清楚地提供大量信息；简短但全面。" +
            "<br><br>" +
            "(B) '谦虚的' 意味着对自己的能力或成就的评估不过高或适中。" +
            "<br><br>" +
            "(C) '朴素的' 意味着性格简单或基本。"
    },
    {
        id: 6,
        question: "The nurse was known for her __________ attention to her patients, frequently checking their vital signs and ensuring they were comfortable at all times.",
        chinese_question: "这位护士因对病人 __________ 的关注而闻名，经常检查他们的生命体征，并确保他们随时都感到舒适。",
        answers: [
            { option: "A", answer: "negligent", chinese_answer: "疏忽的", chinese_romanization: "shūhū de" },
            { option: "B", answer: "indifferent", chinese_answer: "冷漠的", chinese_romanization: "lěngmò de" },
            { option: "C", answer: "careless", chinese_answer: "粗心的", chinese_romanization: "cūxīn de" },
            { option: "D", answer: "assiduous", chinese_answer: "勤勉的", chinese_romanization: "qínmiǎn de" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'assiduous' means showing great care, attention, and effort." +
            "<br><br>" +
            "(A) 'negligent' means failing to take proper care in doing something." +
            "<br><br>" +
            "(B) 'indifferent' means having no particular interest or sympathy; unconcerned." +
            "<br><br>" +
            "(C) 'careless' means not giving sufficient attention or thought to avoiding harm or errors.",
        chinese_explanation: "(D) '勤勉的' 意味着表现出极大的关心、注意和努力。" +
            "<br><br>" +
            "(A) '疏忽的' 意味着没有在做某事时采取适当的照顾。" +
            "<br><br>" +
            "(B) '冷漠的' 意味着没有特别的兴趣或同情；不关心的。" +
            "<br><br>" +
            "(C) '粗心的' 意味着没有给予足够的关注或考虑来避免伤害或错误。"
    },
    {
        id: 7,
        question: "The __________ reader devoured book after book, always eager for more stories and knowledge.",
        chinese_question: "这位 __________ 的读者一口气读完了一本又一本书，总是渴望更多的故事和知识。",
        answers: [
            { option: "A", answer: "disinterested", chinese_answer: "不感兴趣的", chinese_romanization: "bù gǎn xìngqù de" },
            { option: "B", answer: "indifferent", chinese_answer: "漠不关心的", chinese_romanization: "mòbù guānxīn de" },
            { option: "C", answer: "voracious", chinese_answer: "贪婪的", chinese_romanization: "tānlán de" },
            { option: "D", answer: "uninterested", chinese_answer: "无兴趣的", chinese_romanization: "wú xìngqù de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'voracious' means having a very eager approach to an activity, especially reading." +
            "<br><br>" +
            "(A) 'disinterested' means not influenced by considerations of personal advantage." +
            "<br><br>" +
            "(B) 'indifferent' means having no particular interest or sympathy; unconcerned." +
            "<br><br>" +
            "(D) 'uninterested' means not interested in or concerned about something or someone.",
        chinese_explanation: "(C) '贪婪的' 一词意味着对某种活动（尤其是阅读）有非常热切的态度。" +
            "<br><br>" +
            "(A) '不感兴趣的' 意味着不受个人利益的考虑所影响。" +
            "<br><br>" +
            "(B) '漠不关心的' 意味着没有特别的兴趣或同情；不关心的。" +
            "<br><br>" +
            "(D) '无兴趣的' 意味着对某事或某人不感兴趣或不关心的。"
    },
    {
        id: 8,
        question: "The marathon was __________, pushing runners to their limits with its challenging terrain and long distance.",
        chinese_question: "这场马拉松非常 __________，以其具有挑战性的地形和长距离将跑步者推到极限。",
        answers: [
            { option: "A", answer: "easy", chinese_answer: "简单的", chinese_romanization: "jiǎndān de" },
            { option: "B", answer: "grueling", chinese_answer: "艰苦的", chinese_romanization: "jiānkǔ de" },
            { option: "C", answer: "relaxing", chinese_answer: "放松的", chinese_romanization: "fàngsōng de" },
            { option: "D", answer: "enjoyable", chinese_answer: "令人愉快的", chinese_romanization: "lìng rén yúkuài de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'grueling' means extremely tiring and demanding." +
            "<br><br>" +
            "(A) 'easy' means achieved without great effort; presenting few difficulties." +
            "<br><br>" +
            "(C) 'relaxing' means reducing tension or anxiety." +
            "<br><br>" +
            "(D) 'enjoyable' means giving delight or pleasure.",
        chinese_explanation: "(B) '艰苦的' 一词意味着极度累人和要求高的。" +
            "<br><br>" +
            "(A) '简单的' 意味着无需很大努力就能完成的；呈现出少数困难的。" +
            "<br><br>" +
            "(C) '放松的' 意味着减少紧张或焦虑的。" +
            "<br><br>" +
            "(D) '令人愉快的' 意味着带来快乐或愉悦的。"
    },
    {
        id: 9,
        question: "She was too __________ to admit her mistakes and learn from them.",
        chinese_question: "她太 __________ 以至于无法承认自己的错误并从中学习。",
        answers: [
            { option: "A", answer: "arrogant", chinese_answer: "傲慢的", chinese_romanization: "àomàn de" },
            { option: "B", answer: "repentant", chinese_answer: "忏悔的", chinese_romanization: "chànhuǐ de" },
            { option: "C", answer: "considerate", chinese_answer: "体贴的", chinese_romanization: "tǐtiē de" },
            { option: "D", answer: "humble", chinese_answer: "谦逊的", chinese_romanization: "qiānxùn de" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'arrogant' metaphorically means too proud and overbearing." +
            "<br><br>" +
            "(B) 'repentant' means expressing or feeling sincere regret and remorse; remorseful." +
            "<br><br>" +
            "(C) 'considerate' means careful not to cause inconvenience or hurt to others." +
            "<br><br>" +
            "(D) 'humble' means having or showing a modest or low estimate of one's own importance.",
        chinese_explanation: "(A) '傲慢的' 比喻太自大和自负的。" +
            "<br><br>" +
            "(B) '忏悔的' 意味着表达或感到真诚的遗憾和悔恨的。" +
            "<br><br>" +
            "(C) '体贴的' 意味着小心不引起不便或伤害他人的。" +
            "<br><br>" +
            "(D) '谦逊的' 意味着对自己的重要性有或显示出适度或低估的。"
    },
    {
        id: 10,
        question: "The author was incredibly __________, publishing numerous books and articles each year.",
        chinese_question: "这位作者非常 __________，每年都出版许多书籍和文章。",
        answers: [
            { option: "A", answer: "unproductive", chinese_answer: "不生产的", chinese_romanization: "bù shēngchǎn de" },
            { option: "B", answer: "prolific", chinese_answer: "多产的", chinese_romanization: "duōchǎn de" },
            { option: "C", answer: "dormant", chinese_answer: "休眠的", chinese_romanization: "xiūmián de" },
            { option: "D", answer: "stagnant", chinese_answer: "停滞的", chinese_romanization: "tíngzhì de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'prolific' means producing much fruit or foliage or many offspring; present in large numbers or quantities; plentiful." +
            "<br><br>" +
            "(A) 'unproductive' means not producing or able to produce large amounts of goods, crops, or other commodities." +
            "<br><br>" +
            "(C) 'dormant' means having normal physical functions suspended or slowed down for a period of time; in or as if in a deep sleep." +
            "<br><br>" +
            "(D) 'stagnant' means having no current or flow and often having an unpleasant smell as a consequence.",
        chinese_explanation: "(B) '多产的' 意味着产生大量的水果或叶子或许多后代；数量众多或大量存在的。" +
            "<br><br>" +
            "(A) '不生产的' 意味着不生产或无法生产大量商品、作物或其他商品。" +
            "<br><br>" +
            "(C) '休眠的' 意味着正常的身体功能暂停或减慢一段时间；处于或仿佛处于深度睡眠中。" +
            "<br><br>" +
            "(D) '停滞的' 意味着没有流动或流动，并且通常因此而有不愉快的气味。"
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
