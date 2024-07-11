// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "Her __________ voice could be heard above the noise of the crowd, drawing everyone's attention to her urgent message.",
        chinese_question: "她的 __________ 声音在嘈杂的人群中依然清晰可闻，吸引了所有人对她紧急信息的注意。",
        answers: [
            { option: "A", answer: "soft", chinese_answer: "柔和的", chinese_romanization: "róuhé de" },
            { option: "B", answer: "deep", chinese_answer: "低沉的", chinese_romanization: "dīchén de" },
            { option: "C", answer: "shrill", chinese_answer: "尖锐的", chinese_romanization: "jiānruì de" },
            { option: "D", answer: "mellow", chinese_answer: "圆润的", chinese_romanization: "yuánrùn de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'shrill' means high-pitched and piercing." +
            "<br><br>" +
            "(A) 'soft' means easy to mold, cut, compress, or fold; not hard or firm to the touch." +
            "<br><br>" +
            "(B) 'deep' means extending far down from the top or surface." +
            "<br><br>" +
            "(D) 'mellow' means (especially of sound, taste, and color) pleasantly smooth or soft; free from harshness.",
        chinese_explanation: "(C) '尖锐的' 意味着高音调和刺耳的。" +
            "<br><br>" +
            "(A) '柔和的' 意味着容易塑造、切割、压缩或折叠的；触感不硬或不坚固的。" +
            "<br><br>" +
            "(B) '低沉的' 意味着从顶部或表面向下延伸很远的。" +
            "<br><br>" +
            "(D) '圆润的' 意味着（尤其是声音、味道和颜色）令人愉悦的平滑或柔和；没有刺耳的感觉。"
    },
    {
        id: 2,
        question: "The report contained so much __________ information that it was difficult to find the essential details.",
        chinese_question: "报告中包含了太多的 __________ 信息，以至于很难找到关键细节。",
        answers: [
            { option: "A", answer: "necessary", chinese_answer: "必需的", chinese_romanization: "bìxū de" },
            { option: "B", answer: "concise", chinese_answer: "简明的", chinese_romanization: "jiǎnmíng de" },
            { option: "C", answer: "superfluous", chinese_answer: "多余的", chinese_romanization: "duōyú de" },
            { option: "D", answer: "relevant", chinese_answer: "相关的", chinese_romanization: "xiāngguān de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'superfluous' means unnecessary, especially through being more than enough." +
            "<br><br>" +
            "(A) 'necessary' means required to be done, achieved, or present; needed." +
            "<br><br>" +
            "(B) 'concise' means giving a lot of information clearly and in a few words; brief but comprehensive." +
            "<br><br>" +
            "(D) 'relevant' means closely connected or appropriate to what is being done or considered.",
        chinese_explanation: "(C) '多余的' 意味着不必要的，尤其是过多的。" +
            "<br><br>" +
            "(A) '必需的' 意味着需要做的、实现的或存在的；需要的。" +
            "<br><br>" +
            "(B) '简明的' 意味着清楚而简短地提供大量信息；简洁但全面的。" +
            "<br><br>" +
            "(D) '相关的' 意味着与正在做或考虑的事情密切相关或适当的。"
    },
    {
        id: 3,
        question: "After losing his job, he felt __________ and unsure of what to do next.",
        chinese_question: "失去工作后，他感到 __________，不知道接下来该怎么办。",
        answers: [
            { option: "A", answer: "hopeful", chinese_answer: "有希望的", chinese_romanization: "yǒu xīwàng de" },
            { option: "B", answer: "elated", chinese_answer: "兴高采烈的", chinese_romanization: "xìng gāo cǎi liè de" },
            { option: "C", answer: "confident", chinese_answer: "自信的", chinese_romanization: "zìxìn de" },
            { option: "D", answer: "despondent", chinese_answer: "沮丧的", chinese_romanization: "jǔsàng de" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'despondent' means in low spirits from loss of hope or courage." +
            "<br><br>" +
            "(A) 'hopeful' means feeling or inspiring optimism about a future event." +
            "<br><br>" +
            "(B) 'elated' means make (someone) ecstatically happy." +
            "<br><br>" +
            "(C) 'confident' means feeling or showing confidence in oneself; self-assured.",
        chinese_explanation: "(D) '沮丧的' 一词意味着因失去希望或勇气而情绪低落的。" +
            "<br><br>" +
            "(A) '有希望的' 意味着对未来事件感到或激发乐观的。" +
            "<br><br>" +
            "(B) '兴高采烈的' 意味着使（某人）欣喜若狂的。" +
            "<br><br>" +
            "(C) '自信的' 意味着感到或表现出自信的；自信的。"
    },
    {
        id: 4,
        question: "The family's __________ income made it difficult for them to afford basic necessities, let alone any luxuries.",
        chinese_question: "家庭的 __________ 收入使他们难以负担基本生活必需品，更不用说任何奢侈品了。",
        answers: [
            { option: "A", answer: "abundant", chinese_answer: "丰富的", chinese_romanization: "fēngfù de" },
            { option: "B", answer: "sufficient", chinese_answer: "足够的", chinese_romanization: "zúgòu de" },
            { option: "C", answer: "meager", chinese_answer: "微薄的", chinese_romanization: "wēibó de" },
            { option: "D", answer: "ample", chinese_answer: "充足的", chinese_romanization: "chōngzú de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'meager' means lacking in quantity or quality." +
            "<br><br>" +
            "(A) 'abundant' means existing or available in large quantities; plentiful." +
            "<br><br>" +
            "(B) 'sufficient' means enough; adequate." +
            "<br><br>" +
            "(D) 'ample' means enough or more than enough; plentiful.",
        chinese_explanation: "(C) '微薄的' 一词意味着数量或质量不足的。" +
            "<br><br>" +
            "(A) '丰富的' 意味着大量存在或可用的；丰富的。" +
            "<br><br>" +
            "(B) '足够的' 意味着足够的；充足的。" +
            "<br><br>" +
            "(D) '充足的' 意味着足够的或超过足够的；充裕的。"
    },
    {
        id: 5,
        question: "Her __________ understanding of people's emotions made her an excellent counselor, as she could easily sense their needs.",
        chinese_question: "她对人们情感的 __________ 理解使她成为一名出色的咨询师，因为她能轻松感知他们的需求。",
        answers: [
            { option: "A", answer: "logical", chinese_answer: "逻辑的", chinese_romanization: "luójí de" },
            { option: "B", answer: "analytical", chinese_answer: "分析的", chinese_romanization: "fēnxī de" },
            { option: "C", answer: "intuitive", chinese_answer: "直觉的", chinese_romanization: "zhíjué de" },
            { option: "D", answer: "methodical", chinese_answer: "系统的", chinese_romanization: "xìtǒng de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'intuitive' means using or based on what one feels to be true even without conscious reasoning; instinctive." +
            "<br><br>" +
            "(A) 'logical' means of or according to the rules of logic or formal argument." +
            "<br><br>" +
            "(B) 'analytical' means relating to or using analysis or logical reasoning." +
            "<br><br>" +
            "(D) 'methodical' means done according to a systematic or established form of procedure.",
        chinese_explanation: "(C) '直觉的' 一词意味着基于或使用感觉为真实的，即使没有有意识的推理；本能的。" +
            "<br><br>" +
            "(A) '逻辑的' 意味着按照逻辑或正式论证的规则。" +
            "<br><br>" +
            "(B) '分析的' 意味着与分析或逻辑推理有关的。" +
            "<br><br>" +
            "(D) '系统的' 意味着按照系统或既定程序完成的。"
    },
    {
        id: 6,
        question: "The company's __________ handling of hazardous materials resulted in a significant environmental disaster.",
        chinese_question: "公司对危险材料的 __________ 处理导致了一场重大的环境灾难。",
        answers: [
            { option: "A", answer: "careful", chinese_answer: "仔细的", chinese_romanization: "zǐxì de" },
            { option: "B", answer: "negligent", chinese_answer: "疏忽的", chinese_romanization: "shūhū de" },
            { option: "C", answer: "diligent", chinese_answer: "勤勉的", chinese_romanization: "qínmiǎn de" },
            { option: "D", answer: "attentive", chinese_answer: "注意的", chinese_romanization: "zhùyì de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'negligent' means failing to take proper care in doing something." +
            "<br><br>" +
            "(A) 'careful' means making sure of avoiding potential danger, mishap, or harm; cautious." +
            "<br><br>" +
            "(C) 'diligent' means having or showing care and conscientiousness in one's work or duties." +
            "<br><br>" +
            "(D) 'attentive' means paying close attention to something.",
        chinese_explanation: "(B) '疏忽的' 一词意味着在做某事时未能采取适当的照顾。" +
            "<br><br>" +
            "(A) '仔细的' 意味着确保避免潜在的危险、意外或伤害；谨慎的。" +
            "<br><br>" +
            "(C) '勤勉的' 意味着在工作或职责上表现出关心和认真的。" +
            "<br><br>" +
            "(D) '注意的' 意味着密切注意某事的。"
    },
    {
        id: 7,
        question: "The band's performance was __________, failing to excite the audience as they had hoped.",
        chinese_question: "乐队的表演 __________，没有像他们期望的那样激发观众的热情。",
        answers: [
            { option: "A", answer: "vibrant", chinese_answer: "充满活力", chinese_romanization: "chōngmǎn huólì" },
            { option: "B", answer: "energetic", chinese_answer: "精力充沛", chinese_romanization: "jīnglì chōngpèi" },
            { option: "C", answer: "lackluster", chinese_answer: "平淡无奇", chinese_romanization: "píngdàn wúqí" },
            { option: "D", answer: "thrilling", chinese_answer: "激动人心", chinese_romanization: "jīdòng rén xīn" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'lackluster' means lacking in vitality, force, or conviction; uninspired or uninspiring." +
            "<br><br>" +
            "(A) 'vibrant' means full of energy and enthusiasm." +
            "<br><br>" +
            "(B) 'energetic' means showing or involving great activity or vitality." +
            "<br><br>" +
            "(D) 'thrilling' means causing excitement and pleasure; exhilarating.",
        chinese_explanation: "(C) '平淡无奇' 意味着缺乏活力、力量或信念；毫无灵感或感染力。" +
            "<br><br>" +
            "(A) '充满活力' 意味着充满能量和热情。" +
            "<br><br>" +
            "(B) '精力充沛' 意味着表现出或涉及极大的活动性或活力。" +
            "<br><br>" +
            "(D) '激动人心' 意味着引起兴奋和愉快；令人振奋的。"
    },
    {
        id: 8,
        question: "The once-thriving town was now __________, with abandoned buildings and empty streets.",
        chinese_question: "曾经繁荣的小镇现在 __________，到处是废弃的建筑和空荡荡的街道。",
        answers: [
            { option: "A", answer: "bustling", chinese_answer: "繁忙的", chinese_romanization: "fánmáng de" },
            { option: "B", answer: "desolate", chinese_answer: "荒凉的", chinese_romanization: "huāngliáng de" },
            { option: "C", answer: "vibrant", chinese_answer: "充满活力的", chinese_romanization: "chōngmǎn huólì de" },
            { option: "D", answer: "crowded", chinese_answer: "拥挤的", chinese_romanization: "yǒngjǐ de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'desolate' means deserted of people and in a state of bleak and dismal emptiness." +
            "<br><br>" +
            "(A) 'bustling' means full of activity." +
            "<br><br>" +
            "(C) 'vibrant' means full of energy and life." +
            "<br><br>" +
            "(D) 'crowded' means full of people, leaving little or no room for movement; packed.",
        chinese_explanation: "(B) '荒凉的' 一词意味着没有人，处于荒凉和阴沉的空虚状态。" +
            "<br><br>" +
            "(A) '繁忙的' 意味着充满活动的。" +
            "<br><br>" +
            "(C) '充满活力的' 意味着充满能量和生命力的。" +
            "<br><br>" +
            "(D) '拥挤的' 意味着充满人的，几乎没有或没有活动空间的；挤满的。"
    },
    {
        id: 9,
        question: "She felt __________ with the neighborhood after living there for several years.",
        chinese_question: "在那个社区住了几年后，她感到很 __________。",
        answers: [
            { option: "A", answer: "familiar", chinese_answer: "熟悉的", chinese_romanization: "shúxī de" },
            { option: "B", answer: "strange", chinese_answer: "陌生的", chinese_romanization: "mòshēng de" },
            { option: "C", answer: "indifferent", chinese_answer: "漠不关心的", chinese_romanization: "mò bù guānxīn de" },
            { option: "D", answer: "unaware", chinese_answer: "无知的", chinese_romanization: "wúzhī de" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'familiar' means well known from long or close association." +
            "<br><br>" +
            "(B) 'strange' means unusual or surprising in a way that is unsettling or hard to understand." +
            "<br><br>" +
            "(C) 'indifferent' means having no particular interest or sympathy." +
            "<br><br>" +
            "(D) 'unaware' means having no knowledge of a situation or fact.",
        chinese_explanation: "(A) '熟悉的' 意味着因长期或密切接触而熟悉的。" +
            "<br><br>" +
            "(B) '陌生的' 意味着不寻常或令人惊讶的，以一种让人不安或难以理解的方式。" +
            "<br><br>" +
            "(C) '漠不关心的' 意味着没有特别的兴趣或同情心。" +
            "<br><br>" +
            "(D) '无知的' 意味着对某一情况或事实没有了解。"
    },
    {
        id: 10,
        question: "As a manager, she was __________ of the challenges her team faced, frequently checking in with them and offering support where needed.",
        chinese_question: "作为经理，她非常 __________ 团队面临的挑战，经常与他们沟通，并在需要时提供支持。",
        answers: [
            { option: "A", answer: "ignorant", chinese_answer: "无知的", chinese_romanization: "wúzhī de" },
            { option: "B", answer: "oblivious", chinese_answer: "不注意的", chinese_romanization: "bù zhùyì de" },
            { option: "C", answer: "unaware", chinese_answer: "不知道的", chinese_romanization: "bù zhīdào de" },
            { option: "D", answer: "cognizant", chinese_answer: "意识到的", chinese_romanization: "yìshí dào de" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'cognizant' means having knowledge or being aware of." +
            "<br><br>" +
            "(A) 'ignorant' means lacking knowledge or awareness in general." +
            "<br><br>" +
            "(B) 'oblivious' means not aware of or not concerned about what is happening around one." +
            "<br><br>" +
            "(C) 'unaware' means having no knowledge of a situation or fact.",
        chinese_explanation: "(D) '意识到的' 意味着拥有知识或意识到。" +
            "<br><br>" +
            "(A) '无知的' 意味着普遍缺乏知识或意识。" +
            "<br><br>" +
            "(B) '不注意的' 意味着没有意识到或不关心周围发生的事情。" +
            "<br><br>" +
            "(C) '不知道的' 意味着没有情况或事实的知识。"
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
