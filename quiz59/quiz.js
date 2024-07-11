// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "In his __________ to catch the train, he forgot his wallet on the kitchen counter.",
        chinese_question: "在他赶火车的 __________ 中，他把钱包忘在了厨房的柜台上。",
        answers: [
            { option: "A", answer: "leisure", chinese_answer: "闲暇", chinese_romanization: "xiánxiá" },
            { option: "B", answer: "patience", chinese_answer: "耐心", chinese_romanization: "nàixīn" },
            { option: "C", answer: "haste", chinese_answer: "匆忙", chinese_romanization: "cōngmáng" },
            { option: "D", answer: "calm", chinese_answer: "平静", chinese_romanization: "píngjìng" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'haste' means excessive speed or urgency of movement or action; hurry." +
            "<br><br>" +
            "(A) 'leisure' means free time." +
            "<br><br>" +
            "(B) 'patience' means the capacity to accept or tolerate delay, trouble, or suffering without getting angry or upset." +
            "<br><br>" +
            "(D) 'calm' means not showing or feeling nervousness, anger, or other strong emotions.",
        chinese_explanation: "(C) '匆忙' 意味着动作或行动的过快或紧急；急忙。" +
            "<br><br>" +
            "(A) '闲暇' 意味着空闲时间。" +
            "<br><br>" +
            "(B) '耐心' 意味着接受或容忍延误、麻烦或痛苦而不生气或不心烦的能力。" +
            "<br><br>" +
            "(D) '平静' 意味着不表现或感觉紧张、愤怒或其他强烈的情绪。"
    },
    {
        id: 2,
        question: "The artist’s __________ of dark and light colors created a striking contrast that drew viewers' attention immediately.",
        chinese_question: "这位艺术家将深色和浅色 __________ 在一起，创造了引人注目的对比，立即吸引了观众的注意。",
        answers: [
            { option: "A", answer: "separation", chinese_answer: "分离", chinese_romanization: "fēnlí" },
            { option: "B", answer: "isolation", chinese_answer: "隔离", chinese_romanization: "gélí" },
            { option: "C", answer: "juxtaposition", chinese_answer: "并置", chinese_romanization: "bìngzhì" },
            { option: "D", answer: "division", chinese_answer: "分割", chinese_romanization: "fēngē" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'juxtaposition' means the fact of two things being seen or placed close together with contrasting effect." +
            "<br><br>" +
            "(A) 'separation' means the action or state of moving or being moved apart." +
            "<br><br>" +
            "(B) 'isolation' means the process or fact of isolating or being isolated." +
            "<br><br>" +
            "(D) 'division' means the action of separating something into parts or the process of being separated.",
        chinese_explanation: "(C) '并置' 意味着将两件事物放在一起或并列以产生对比效果。" +
            "<br><br>" +
            "(A) '分离' 意味着移动或被移动开来的行为或状态。" +
            "<br><br>" +
            "(B) '隔离' 意味着隔离或被隔离的过程或事实。" +
            "<br><br>" +
            "(D) '分割' 意味着将某物分成部分的行为或被分开的过程。"
    },
    {
        id: 3,
        question: "The prosecutor presented clear __________ that linked the suspect to the crime, leaving no room for doubt.",
        chinese_question: "检察官提供了将嫌疑人与犯罪联系起来的明确 __________，毫无疑问。",
        answers: [
            { option: "A", answer: "opinion", chinese_answer: "意见", chinese_romanization: "yìjiàn" },
            { option: "B", answer: "assumption", chinese_answer: "假设", chinese_romanization: "jiǎshè" },
            { option: "C", answer: "evidence", chinese_answer: "证据", chinese_romanization: "zhèngjù" },
            { option: "D", answer: "hypothesis", chinese_answer: "假说", chinese_romanization: "jiǎshuō" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'evidence' means the available body of facts or information indicating whether a belief or proposition is true or valid." +
            "<br><br>" +
            "(A) 'opinion' means a view or judgment formed about something, not necessarily based on fact or knowledge." +
            "<br><br>" +
            "(B) 'assumption' means a thing that is accepted as true or as certain to happen, without proof." +
            "<br><br>" +
            "(D) 'hypothesis' means a supposition or proposed explanation made on the basis of limited evidence as a starting point for further investigation.",
        chinese_explanation: "(C) '证据' 一词意味着表明信仰或命题是否真实或有效的事实或信息的现有体。" +
            "<br><br>" +
            "(A) '意见' 意味着对某事形成的看法或判断，不一定基于事实或知识。" +
            "<br><br>" +
            "(B) '假设' 意味着没有证据接受的事物或认为必然发生的事物。" +
            "<br><br>" +
            "(D) '假说' 意味着基于有限证据提出的假设或建议解释，作为进一步调查的起点。"
    },
    {
        id: 4,
        question: "The teacher encouraged the students to consider different __________ when analyzing the historical event.",
        chinese_question: "老师鼓励学生在分析历史事件时考虑不同的 __________。",
        answers: [
            { option: "A", answer: "biases", chinese_answer: "偏见", chinese_romanization: "piānjiàn" },
            { option: "B", answer: "opinions", chinese_answer: "意见", chinese_romanization: "yìjiàn" },
            { option: "C", answer: "perspectives", chinese_answer: "观点", chinese_romanization: "guāndiǎn" },
            { option: "D", answer: "prejudices", chinese_answer: "成见", chinese_romanization: "chéngjiàn" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'perspectives' means a particular attitude toward or way of regarding something; a point of view." +
            "<br><br>" +
            "(A) 'biases' means inclinations or prejudices for or against one person or group, especially in a way considered to be unfair." +
            "<br><br>" +
            "(B) 'opinions' means views or judgments formed about something, not necessarily based on fact or knowledge." +
            "<br><br>" +
            "(D) 'prejudices' means preconceived opinions that are not based on reason or actual experience.",
        chinese_explanation: "(C) '观点' 一词意味着对某事的特定态度或看法；观点。" +
            "<br><br>" +
            "(A) '偏见' 意味着对一个人或群体的偏爱或偏见，尤其是被认为是不公平的方式。" +
            "<br><br>" +
            "(B) '意见' 意味着对某事形成的看法或判断，不一定基于事实或知识。" +
            "<br><br>" +
            "(D) '成见' 意味着没有基于理性或实际经验的先入之见。"
    },
    {
        id: 5,
        question: "The nation's __________ was evident in its booming economy, high employment rates, and overall standard of living.",
        chinese_question: "这个国家的 __________ 显而易见，其经济繁荣，高就业率和总体生活水平都很高。",
        answers: [
            { option: "A", answer: "poverty", chinese_answer: "贫穷", chinese_romanization: "pínqióng" },
            { option: "B", answer: "decline", chinese_answer: "衰退", chinese_romanization: "shuāituì" },
            { option: "C", answer: "prosperity", chinese_answer: "繁荣", chinese_romanization: "fánróng" },
            { option: "D", answer: "recession", chinese_answer: "经济衰退", chinese_romanization: "jīngjì shuāituì" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'prosperity' means the state of being prosperous." +
            "<br><br>" +
            "(A) 'poverty' means the state of being extremely poor." +
            "<br><br>" +
            "(B) 'decline' means a gradual and continuous loss of strength, numbers, quality, or value." +
            "<br><br>" +
            "(D) 'recession' means a period of temporary economic decline during which trade and industrial activity are reduced.",
        chinese_explanation: "(C) '繁荣' 一词意味着繁荣的状态。" +
            "<br><br>" +
            "(A) '贫穷' 意味着极度贫困的状态。" +
            "<br><br>" +
            "(B) '衰退' 意味着力量、数量、质量或价值的逐渐和持续损失。" +
            "<br><br>" +
            "(D) '经济衰退' 意味着贸易和工业活动减少的暂时经济衰退时期。"
    },
    {
        id: 6,
        question: "The scientist proposed a new __________ to explain the unusual chemical reactions observed in the experiment.",
        chinese_question: "科学家提出了一个新的 __________ 来解释实验中观察到的不寻常的化学反应。",
        answers: [
            { option: "A", answer: "fact", chinese_answer: "事实", chinese_romanization: "shìshí" },
            { option: "B", answer: "hypothesis", chinese_answer: "假设", chinese_romanization: "jiǎshè" },
            { option: "C", answer: "law", chinese_answer: "定律", chinese_romanization: "dìnglǜ" },
            { option: "D", answer: "certainty", chinese_answer: "确定性", chinese_romanization: "quèdìng xìng" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'hypothesis' means a supposition or proposed explanation made on the basis of limited evidence as a starting point for further investigation." +
            "<br><br>" +
            "(A) 'fact' means a thing that is known or proved to be true." +
            "<br><br>" +
            "(C) 'law' means a statement based on repeated experimental observations that describes some aspect of the world." +
            "<br><br>" +
            "(D) 'certainty' means firm conviction that something is the case.",
        chinese_explanation: "(B) '假设' 一词意味着在有限证据的基础上提出的假设或解释，作为进一步调查的起点。" +
            "<br><br>" +
            "(A) '事实' 意味着已知或被证明是真实的事物。" +
            "<br><br>" +
            "(C) '定律' 意味着基于重复实验观察的描述世界某些方面的陈述。" +
            "<br><br>" +
            "(D) '确定性' 意味着对某事的坚定信念。"
    },
    {
        id: 7,
        question: "The talented __________ worked tirelessly to bring the beloved characters to life for the new animated film.",
        chinese_question: "这位才华横溢的 __________ 不懈努力，为新动画电影赋予了深受喜爱的角色以生命。",
        answers: [
            { option: "A", answer: "writer", chinese_answer: "作家", chinese_romanization: "zuòjiā" },
            { option: "B", answer: "director", chinese_answer: "导演", chinese_romanization: "dǎoyǎn" },
            { option: "C", answer: "animator", chinese_answer: "动画师", chinese_romanization: "dònghuà shī" },
            { option: "D", answer: "producer", chinese_answer: "制片人", chinese_romanization: "zhìpiàn rén" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'animator' means a person who creates animated movies and cartoons." +
            "<br><br>" +
            "(A) 'writer' means a person who writes books, stories, or articles as a job or regular occupation." +
            "<br><br>" +
            "(B) 'director' means a person who is in charge of an activity, department, or organization." +
            "<br><br>" +
            "(D) 'producer' means a person responsible for the financial and managerial aspects of making of a movie or broadcast or for staging a play, opera, etc.",
        chinese_explanation: "(C) '动画师' 一词意味着创造动画电影和卡通的人。" +
            "<br><br>" +
            "(A) '作家' 意味着写书、故事或文章作为工作或经常职业的人。" +
            "<br><br>" +
            "(B) '导演' 意味着负责某项活动、部门或组织的人。" +
            "<br><br>" +
            "(D) '制片人' 意味着负责电影或广播的财务和管理方面或上演戏剧、歌剧等的人。"
    },
    {
        id: 8,
        question: "During the war, the two countries became __________ to fight against a common enemy and support each other militarily.",
        chinese_question: "在战争期间，这两个国家成为 __________，共同对抗共同的敌人，并在军事上互相支持。",
        answers: [
            { option: "A", answer: "enemies", chinese_answer: "敌人", chinese_romanization: "dírén" },
            { option: "B", answer: "competitors", chinese_answer: "竞争对手", chinese_romanization: "jìngzhēng duìshǒu" },
            { option: "C", answer: "allies", chinese_answer: "盟友", chinese_romanization: "méngyǒu" },
            { option: "D", answer: "opponents", chinese_answer: "对手", chinese_romanization: "duìshǒu" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'allies' means a state formally cooperating with another for a military or other purpose." +
            "<br><br>" +
            "(A) 'enemies' means a person who is actively opposed or hostile to someone or something." +
            "<br><br>" +
            "(B) 'competitors' means a person or organization that competes against others." +
            "<br><br>" +
            "(D) 'opponents' means someone who competes against or fights another in a contest, game, or argument.",
        chinese_explanation: "(C) '盟友' 一词意味着正式与另一国合作进行军事或其他目的的国家。" +
            "<br><br>" +
            "(A) '敌人' 意味着积极反对或敌视某人或某事的人。" +
            "<br><br>" +
            "(B) '竞争对手' 意味着与他人竞争的人或组织。" +
            "<br><br>" +
            "(D) '对手' 意味着在比赛、游戏或争论中与他人竞争或战斗的人。"
    },
    {
        id: 9,
        question: "The charity event aimed to raise funds for a __________ close to the community's heart, supporting local families in need.",
        chinese_question: "慈善活动旨在为社区关心的 __________ 筹集资金，支持有需要的当地家庭。",
        answers: [
            { option: "A", answer: "diversion", chinese_answer: "转移", chinese_romanization: "zhuǎnyí" },
            { option: "B", answer: "effect", chinese_answer: "结果", chinese_romanization: "jiéguǒ" },
            { option: "C", answer: "cause", chinese_answer: "事业", chinese_romanization: "shìyè" },
            { option: "D", answer: "consequence", chinese_answer: "后果", chinese_romanization: "hòuguǒ" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'cause' means a principle, aim, or movement to which one is committed and which one is prepared to defend or advocate." +
            "<br><br>" +
            "(A) 'diversion' means an instance of turning something aside from its course." +
            "<br><br>" +
            "(B) 'effect' means a change that is a result or consequence of an action or other cause." +
            "<br><br>" +
            "(D) 'consequence' means a result or effect, typically one that is unwelcome or unpleasant.",
        chinese_explanation: "(C) '事业' 一词意味着一个人致力于并准备捍卫或倡导的原则、目标或运动。" +
            "<br><br>" +
            "(A) '转移' 意味着将某事从其路线中转移的实例。" +
            "<br><br>" +
            "(B) '结果' 意味着行动或其他原因的结果或后果。" +
            "<br><br>" +
            "(D) '后果' 意味着通常是不受欢迎或不愉快的结果或效果。"
    },
    {
        id: 10,
        question: "As the __________ of the local bookstore, she took pride in curating a diverse selection of books for the community.",
        chinese_question: "作为当地书店的 __________，她以为社区策划多样化的书籍选择为荣。",
        answers: [
            { option: "A", answer: "employee", chinese_answer: "雇员", chinese_romanization: "gùyuán" },
            { option: "B", answer: "visitor", chinese_answer: "访客", chinese_romanization: "fǎngkè" },
            { option: "C", answer: "proprietor", chinese_answer: "店主", chinese_romanization: "diànzhǔ" },
            { option: "D", answer: "tenant", chinese_answer: "租户", chinese_romanization: "zūhù" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'proprietor' means the owner of a business or a holder of property." +
            "<br><br>" +
            "(A) 'employee' means a person employed for wages or salary, especially at nonexecutive level." +
            "<br><br>" +
            "(B) 'visitor' means a person visiting a person or place, especially socially or as a tourist." +
            "<br><br>" +
            "(D) 'tenant' means a person who occupies land or property rented from a landlord.",
        chinese_explanation: "(C) '店主' 意味着企业的所有者或财产持有人。" +
            "<br><br>" +
            "(A) '雇员' 意味着以工资或薪金受雇的人，特别是非行政级别。" +
            "<br><br>" +
            "(B) '访客' 意味着访问某人或某地的人，特别是社交或旅游者。" +
            "<br><br>" +
            "(D) '租户' 意味着租用房东土地或财产的人。"
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
