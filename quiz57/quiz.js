// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "Her calm and professional __________ impressed everyone at the interview, making her a top candidate for the job.",
        chinese_question: "她在面试中冷静而专业的 __________ 给所有人留下了深刻印象，使她成为该职位的最佳候选人。",
        answers: [
            { option: "A", answer: "attire", chinese_answer: "服装", chinese_romanization: "fúzhuāng" },
            { option: "B", answer: "demeanour", chinese_answer: "举止", chinese_romanization: "jǔzhǐ" },
            { option: "C", answer: "appearance", chinese_answer: "外表", chinese_romanization: "wàibiǎo" },
            { option: "D", answer: "attitude", chinese_answer: "态度", chinese_romanization: "tàidu" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'demeanour' means outward behavior or bearing." +
            "<br><br>" +
            "(A) 'attire' means clothes, especially fine or formal ones." +
            "<br><br>" +
            "(C) 'appearance' means the way that someone or something looks." +
            "<br><br>" +
            "(D) 'attitude' means a settled way of thinking or feeling about something.",
        chinese_explanation: "(B) '举止' 一词意味着外在行为或举止。" +
            "<br><br>" +
            "(A) '服装' 意味着衣服，尤其是精美或正式的衣服。" +
            "<br><br>" +
            "(C) '外表' 意味着某人或某物的外观。" +
            "<br><br>" +
            "(D) '态度' 意味着对某事的固定方式或感受。"
    },
    {
        id: 2,
        question: "The Northern Lights are a natural __________ that attracts tourists from around the world to witness their beauty.",
        chinese_question: "极光是一种自然 __________，吸引着来自世界各地的游客前来目睹其美丽。",
        answers: [
            { option: "A", answer: "myth", chinese_answer: "神话", chinese_romanization: "shénhuà" },
            { option: "B", answer: "phenomenon", chinese_answer: "现象", chinese_romanization: "xiànxiàng" },
            { option: "C", answer: "fiction", chinese_answer: "虚构", chinese_romanization: "xūgòu" },
            { option: "D", answer: "illusion", chinese_answer: "幻觉", chinese_romanization: "huànjué" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'phenomenon' means a fact or situation that is observed to exist or happen, especially one whose cause or explanation is in question." +
            "<br><br>" +
            "(A) 'myth' means a traditional story, especially one concerning the early history of a people or explaining a natural or social phenomenon, and typically involving supernatural beings or events." +
            "<br><br>" +
            "(C) 'fiction' means literature in the form of prose, especially short stories and novels, that describes imaginary events and people." +
            "<br><br>" +
            "(D) 'illusion' means a thing that is or is likely to be wrongly perceived or interpreted by the senses.",
        chinese_explanation: "(B) '现象' 意味着被观察到存在或发生的事实或情况，特别是其原因或解释成问题的。" +
            "<br><br>" +
            "(A) '神话' 意味着传统故事，特别是关于人民早期历史或解释自然或社会现象的，通常涉及超自然生物或事件。" +
            "<br><br>" +
            "(C) '虚构' 意味着以散文形式的文学作品，特别是描述虚构事件和人物的短篇小说和小说。" +
            "<br><br>" +
            "(D) '幻觉' 意味着感觉上可能被错误感知或解释的事物。"
    },
    {
        id: 3,
        question: "To understand the situation better, it's important to consider it from different __________, including economic and social viewpoints.",
        chinese_question: "要更好地理解情况，重要的是从不同的 __________ 考虑，包括经济和社会的观点。",
        answers: [
            { option: "A", answer: "facts", chinese_answer: "事实", chinese_romanization: "shìshí" },
            { option: "B", answer: "perspectives", chinese_answer: "观点", chinese_romanization: "guāndiǎn" },
            { option: "C", answer: "prejudices", chinese_answer: "偏见", chinese_romanization: "piānjiàn" },
            { option: "D", answer: "assumptions", chinese_answer: "假设", chinese_romanization: "jiǎshè" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'perspectives' means particular attitudes toward or ways of regarding something; points of view." +
            "<br><br>" +
            "(A) 'facts' means things that are known or proved to be true." +
            "<br><br>" +
            "(C) 'prejudices' means preconceived opinions that are not based on reason or actual experience." +
            "<br><br>" +
            "(D) 'assumptions' means things that are accepted as true or as certain to happen, without proof.",
        chinese_explanation: "(B) '观点' 一词意味着对某事的特定态度或看法；观点。" +
            "<br><br>" +
            "(A) '事实' 意味着已知或被证明是真实的事物。" +
            "<br><br>" +
            "(C) '偏见' 意味着没有根据的预先形成的看法。" +
            "<br><br>" +
            "(D) '假设' 意味着没有证据接受的事物或认为必然发生的事物。"
    },
    {
        id: 4,
        question: "She has a __________ for collecting vintage jewelry, always on the lookout for unique pieces to add to her collection.",
        chinese_question: "她有收集复古珠宝的 __________，总是寻找独特的物件来增加她的收藏。",
        answers: [
            { option: "A", answer: "dislike", chinese_answer: "不喜欢", chinese_romanization: "bù xǐhuān" },
            { option: "B", answer: "aversion", chinese_answer: "厌恶", chinese_romanization: "yànwù" },
            { option: "C", answer: "penchant", chinese_answer: "嗜好", chinese_romanization: "shìhào" },
            { option: "D", answer: "disinterest", chinese_answer: "无兴趣", chinese_romanization: "wú xìngqù" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'penchant' means a strong or habitual liking for something or tendency to do something." +
            "<br><br>" +
            "(A) 'dislike' means a feeling of distaste or hostility." +
            "<br><br>" +
            "(B) 'aversion' means a strong dislike or disinclination." +
            "<br><br>" +
            "(D) 'disinterest' means lack of interest in something.",
        chinese_explanation: "(C) '嗜好' 一词意味着对某事物的强烈或习惯性的喜欢或倾向于做某事。" +
            "<br><br>" +
            "(A) '不喜欢' 意味着厌恶或敌意的感觉。" +
            "<br><br>" +
            "(B) '厌恶' 意味着强烈的厌恶或不愿意。" +
            "<br><br>" +
            "(D) '无兴趣' 意味着对某事缺乏兴趣。"
    },
    {
        id: 5,
        question: "The teacher used an __________ to explain the complex concept, comparing it to something the students were already familiar with.",
        chinese_question: "老师用 __________ 来解释复杂的概念，把它比作学生们已经熟悉的东西。",
        answers: [
            { option: "A", answer: "fact", chinese_answer: "事实", chinese_romanization: "shìshí" },
            { option: "B", answer: "analogy", chinese_answer: "类比", chinese_romanization: "lèibǐ" },
            { option: "C", answer: "argument", chinese_answer: "论点", chinese_romanization: "lùndiǎn" },
            { option: "D", answer: "contradiction", chinese_answer: "矛盾", chinese_romanization: "máodùn" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'analogy' means a comparison between two things, typically for the purpose of explanation or clarification." +
            "<br><br>" +
            "(A) 'fact' means a thing that is known or proved to be true." +
            "<br><br>" +
            "(C) 'argument' means an exchange of diverging or opposite views, typically a heated or angry one." +
            "<br><br>" +
            "(D) 'contradiction' means a combination of statements, ideas, or features which are opposed to one another.",
        chinese_explanation: "(B) '类比' 一词意味着两件事之间的比较，通常是为了解释或澄清。" +
            "<br><br>" +
            "(A) '事实' 意味着已知或证明为真的事物。" +
            "<br><br>" +
            "(C) '论点' 意味着不同或对立观点的交流，通常是激烈或愤怒的。" +
            "<br><br>" +
            "(D) '矛盾' 意味着一组相互对立的陈述、想法或特征。"
    },
    {
        id: 6,
        question: "He displayed great __________ by offering his seat to the elderly lady on the crowded bus.",
        chinese_question: "他在拥挤的公共汽车上主动给那位老年女士让座，表现出极大的 __________。",
        answers: [
            { option: "A", answer: "cowardice", chinese_answer: "怯懦", chinese_romanization: "qiènuò" },
            { option: "B", answer: "chivalry", chinese_answer: "骑士精神", chinese_romanization: "qíshì jīngshén" },
            { option: "C", answer: "rudeness", chinese_answer: "无礼", chinese_romanization: "wúlǐ" },
            { option: "D", answer: "selfishness", chinese_answer: "自私", chinese_romanization: "zìsī" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'chivalry' means the medieval knightly system with its religious, moral, and social code." +
            "<br><br>" +
            "(A) 'cowardice' means lack of bravery." +
            "<br><br>" +
            "(C) 'rudeness' means lack of manners; discourtesy." +
            "<br><br>" +
            "(D) 'selfishness' means the quality or condition of being selfish.",
        chinese_explanation: "(B) '骑士精神' 一词意味着中世纪的骑士制度及其宗教、道德和社会准则。" +
            "<br><br>" +
            "(A) '怯懦' 意味着缺乏勇气。" +
            "<br><br>" +
            "(C) '无礼' 意味着缺乏礼貌；不礼貌。" +
            "<br><br>" +
            "(D) '自私' 意味着自私的品质或条件。"
    },
    {
        id: 7,
        question: "The CEO's __________ in navigating the company through the financial crisis saved numerous jobs and ensured the firm's survival.",
        chinese_question: "CEO在公司应对金融危机时的 __________ 挽救了许多工作岗位，并确保了公司的生存。",
        answers: [
            { option: "A", answer: "indecision", chinese_answer: "优柔寡断", chinese_romanization: "yōuróu guǎduàn" },
            { option: "B", answer: "carelessness", chinese_answer: "粗心", chinese_romanization: "cūxīn" },
            { option: "C", answer: "luck", chinese_answer: "运气", chinese_romanization: "yùnqì" },
            { option: "D", answer: "acumen", chinese_answer: "敏锐", chinese_romanization: "mǐnruì" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'acumen' means the ability to make good judgments and quick decisions, typically in a particular domain." +
            "<br><br>" +
            "(A) 'indecision' means inability to make a decision quickly." +
            "<br><br>" +
            "(B) 'carelessness' means failure to give sufficient attention to avoiding harm or errors." +
            "<br><br>" +
            "(C) 'luck' means success or failure apparently brought by chance rather than through one's own actions.",
        chinese_explanation: "(D) '敏锐' 意思是能够在特定领域做出正确判断和快速决策的能力。" +
            "<br><br>" +
            "(A) '优柔寡断' 意思是不能迅速做出决定。" +
            "<br><br>" +
            "(B) '粗心' 意思是没有足够注意避免伤害或错误。" +
            "<br><br>" +
            "(C) '运气' 意思是成功或失败显然是由偶然带来的，而不是通过自己的行动。"
    },
    {
        id: 8,
        question: "Standing at the edge of the __________, he felt a mix of awe and fear as he looked down at the valley below.",
        chinese_question: "站在 __________ 的边缘，他俯视下方的山谷时感到敬畏和恐惧交织。",
        answers: [
            { option: "A", answer: "forest", chinese_answer: "森林", chinese_romanization: "sēnlín" },
            { option: "B", answer: "lake", chinese_answer: "湖泊", chinese_romanization: "húpō" },
            { option: "C", answer: "precipice", chinese_answer: "悬崖", chinese_romanization: "xuányá" },
            { option: "D", answer: "plain", chinese_answer: "平原", chinese_romanization: "píngyuán" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'precipice' means a very steep rock face or cliff, typically a tall one." +
            "<br><br>" +
            "(A) 'forest' means a large area covered chiefly with trees and undergrowth." +
            "<br><br>" +
            "(B) 'lake' means a large body of water surrounded by land." +
            "<br><br>" +
            "(D) 'plain' means a large area of flat land with few trees.",
        chinese_explanation: "(C) '悬崖' 一词意味着非常陡峭的岩壁或悬崖，通常是高大的。" +
            "<br><br>" +
            "(A) '森林' 意味着主要由树木和下层植物覆盖的大面积。" +
            "<br><br>" +
            "(B) '湖泊' 意味着被陆地环绕的大型水体。" +
            "<br><br>" +
            "(D) '平原' 意味着树木稀少的大面积平坦土地。"
    },
    {
        id: 9,
        question: "A __________ arose in the debate club when two members had opposing views on the topic of climate change.",
        chinese_question: "辩论社中两名成员在气候变化议题上持有相反观点，导致 __________。",
        answers: [
            { option: "A", answer: "conflict", chinese_answer: "冲突", chinese_romanization: "chōngtú" },
            { option: "B", answer: "harmony", chinese_answer: "和谐", chinese_romanization: "héxié" },
            { option: "C", answer: "cooperation", chinese_answer: "合作", chinese_romanization: "hézuò" },
            { option: "D", answer: "agreement", chinese_answer: "一致", chinese_romanization: "yīzhì" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'conflict' means a serious disagreement or argument, typically a protracted one." +
            "<br><br>" +
            "(B) 'harmony' means the combination of simultaneously sounded musical notes to produce a pleasing effect." +
            "<br><br>" +
            "(C) 'cooperation' means the process of working together to the same end." +
            "<br><br>" +
            "(D) 'agreement' means harmony or accordance in opinion or feeling.",
        chinese_explanation: "(A) '冲突' 意味着严重的分歧或争论，通常是长期的。" +
            "<br><br>" +
            "(B) '和谐' 意味着同时发出的音符的结合，产生令人愉悦的效果。" +
            "<br><br>" +
            "(C) '合作' 意味着为同一目标共同努力的过程。" +
            "<br><br>" +
            "(D) '一致' 意味着意见或感情上的和谐或一致。"
    },
    {
        id: 10,
        question: "After the heavy rains, the small town experienced a __________ that flooded streets and homes.",
        chinese_question: "大雨过后，小镇经历了一场 __________，淹没了街道和房屋。",
        answers: [
            { option: "A", answer: "drought", chinese_answer: "干旱", chinese_romanization: "gānhàn" },
            { option: "B", answer: "drizzle", chinese_answer: "细雨", chinese_romanization: "xìyǔ" },
            { option: "C", answer: "deluge", chinese_answer: "洪水", chinese_romanization: "hóngshuǐ" },
            { option: "D", answer: "sprinkle", chinese_answer: "小雨", chinese_romanization: "xiǎoyǔ" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'deluge' means a severe flood." +
            "<br><br>" +
            "(A) 'drought' means a prolonged period of abnormally low rainfall, leading to a shortage of water." +
            "<br><br>" +
            "(B) 'drizzle' means light rain falling in very fine drops." +
            "<br><br>" +
            "(D) 'sprinkle' means scatter or pour small drops or particles of a substance over an object or surface.",
        chinese_explanation: "(C) '洪水' 一词意味着严重的洪水。" +
            "<br><br>" +
            "(A) '干旱' 意味着长时间降雨异常少，导致水资源短缺。" +
            "<br><br>" +
            "(B) '细雨' 意味着以非常细的滴落下的轻微降雨。" +
            "<br><br>" +
            "(D) '小雨' 意味着将少量的液体或颗粒洒在物体或表面上。"
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
