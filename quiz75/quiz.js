// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "The boardroom discussions were marked by a thinly veiled __________, with each member pushing their own agenda under the guise of collaboration.",
        chinese_question: "会议室的讨论充满了掩饰不住的 __________，每个成员都以合作的名义推进自己的议程。",
        answers: [
            { option: "A", answer: "friendship", chinese_answer: "友谊", chinese_romanization: "yǒuyì" },
            { option: "B", answer: "cooperation", chinese_answer: "合作", chinese_romanization: "hézuò" },
            { option: "C", answer: "hostility", chinese_answer: "敌意", chinese_romanization: "dúyì" },
            { option: "D", answer: "alliance", chinese_answer: "联盟", chinese_romanization: "liánméng" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'hostility' refers to unfriendly or antagonistic behavior." +
            "<br><br>" +
            "(A) 'friendship' refers to a state of mutual trust and support between individuals." +
            "<br><br>" +
            "(B) 'cooperation' refers to the process of working together to the same end." +
            "<br><br>" +
            "(D) 'alliance' refers to a union formed for mutual benefit, especially between countries or organizations.",
        chinese_explanation: "(C) '敌意' 指的是不友好或对抗的行为。" +
            "<br><br>" +
            "(A) '友谊' 指的是个人之间相互信任和支持的状态。" +
            "<br><br>" +
            "(B) '合作' 指的是为同一目标共同努力的过程。" +
            "<br><br>" +
            "(D) '联盟' 指的是为了共同利益而组成的联盟，尤其是国家或组织之间的联盟。"
    },
    {
        id: 2,
        question: "The sudden resignation of the company's CEO sounded the death __________ for the already struggling organization.",
        chinese_question: "公司首席执行官的突然辞职对已经在挣扎中的组织敲响了死亡 __________。",
        answers: [
            { option: "A", answer: "ring", chinese_answer: "铃声", chinese_romanization: "língshēng" },
            { option: "B", answer: "knell", chinese_answer: "丧钟", chinese_romanization: "sàngzhōng" },
            { option: "C", answer: "toll", chinese_answer: "钟声", chinese_romanization: "zhōngshēng" },
            { option: "D", answer: "chime", chinese_answer: "报时", chinese_romanization: "bàoshí" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'knell' refers to the sound of a bell, especially when rung solemnly for a death or funeral." +
            "<br><br>" +
            "(A) 'ring' refers to a clear resonant sound, typically of a bell." +
            "<br><br>" +
            "(C) 'toll' refers to the sound of a large bell being rung slowly and repeatedly." +
            "<br><br>" +
            "(D) 'chime' refers to a melodious ringing sound, often of bells.",
        chinese_explanation: "(B) '丧钟' 指的是钟声，特别是在为死亡或葬礼而严肃地敲响时。" +
            "<br><br>" +
            "(A) '铃声' 指的是清晰的共鸣声，通常是钟声。" +
            "<br><br>" +
            "(C) '钟声' 指的是大钟慢慢地反复敲响的声音。" +
            "<br><br>" +
            "(D) '报时' 指的是一种悦耳的铃声，通常是钟声。"
    },
    {
        id: 3,
        question: "The medieval manuscript is rich with __________, depicting various saints and biblical scenes.",
        chinese_question: "这本中世纪手稿富含 __________，描绘了各种圣徒和圣经场景。",
        answers: [
            { option: "A", answer: "poetry", chinese_answer: "诗歌", chinese_romanization: "shīgē" },
            { option: "B", answer: "prose", chinese_answer: "散文", chinese_romanization: "sǎnwén" },
            { option: "C", answer: "drama", chinese_answer: "戏剧", chinese_romanization: "xìjù" },
            { option: "D", answer: "iconography", chinese_answer: "图像学", chinese_romanization: "túxiàng xué" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'iconography' refers to the visual images and symbols used in a work of art or the study or interpretation of these." +
            "<br><br>" +
            "(A) 'poetry' refers to literary work in which the expression of feelings and ideas is given intensity by the use of distinctive style and rhythm." +
            "<br><br>" +
            "(B) 'prose' refers to written or spoken language in its ordinary form, without metrical structure." +
            "<br><br>" +
            "(C) 'drama' refers to a composition in prose or verse presenting in dialogue a story involving conflict or contrast of character.",
        chinese_explanation: "(D) '图像学' 指的是艺术作品中使用的视觉图像和符号，或对这些的研究或解释。" +
            "<br><br>" +
            "(A) '诗歌' 指的是以独特的风格和节奏表达情感和思想的文学作品。" +
            "<br><br>" +
            "(B) '散文' 指的是以普通形式书写或口述的语言，没有韵律结构。" +
            "<br><br>" +
            "(C) '戏剧' 指的是以对话形式呈现故事，涉及人物冲突或对比的散文或诗歌作品。"
    },
    {
        id: 4,
        question: "His __________, representing a mix of different cultures and nationalities, highlighted his diverse family heritage.",
        chinese_question: "他的祖先代表了不同文化和民族的混合，突显了他多样的家庭遗产。",
        answers: [
            { option: "A", answer: "personality", chinese_answer: "个性", chinese_romanization: "gèxìng" },
            { option: "B", answer: "ancestry", chinese_answer: "祖先", chinese_romanization: "zǔxiān" },
            { option: "C", answer: "occupation", chinese_answer: "职业", chinese_romanization: "zhíyè" },
            { option: "D", answer: "education", chinese_answer: "教育", chinese_romanization: "jiàoyù" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'ancestry' means one's family or ethnic descent." +
            "<br><br>" +
            "(A) 'personality' means the combination of characteristics or qualities that form an individual's distinctive character." +
            "<br><br>" +
            "(C) 'occupation' means a job or profession." +
            "<br><br>" +
            "(D) 'education' means the process of receiving or giving systematic instruction, especially at a school or university.",
        chinese_explanation: "(B) '祖先' 一词意味着一个人的家庭或种族血统。" +
            "<br><br>" +
            "(A) '个性' 意味着构成一个人独特性格的特征或品质的组合。" +
            "<br><br>" +
            "(C) '职业' 意味着工作或职业。" +
            "<br><br>" +
            "(D) '教育' 意味着接受或给予系统性指导的过程，尤其是在学校或大学。"
    },
    {
        id: 5,
        question: "His constant __________ of difficult conversations prevented any real progress in resolving their issues.",
        chinese_question: "他对困难对话的不断__________ 阻止了解决问题的任何实质性进展。",
        answers: [
            { option: "A", answer: "engagement", chinese_answer: "参与", chinese_romanization: "cānyù" },
            { option: "B", answer: "avoidance", chinese_answer: "回避", chinese_romanization: "huíbì" },
            { option: "C", answer: "confrontation", chinese_answer: "对抗", chinese_romanization: "duìkàng" },
            { option: "D", answer: "acceptance", chinese_answer: "接受", chinese_romanization: "jiēshòu" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'avoidance' means the action of keeping away from or not doing something." +
            "<br><br>" +
            "(A) 'engagement' means the act of being involved or participating in something." +
            "<br><br>" +
            "(C) 'confrontation' means a hostile or argumentative meeting or situation between opposing parties." +
            "<br><br>" +
            "(D) 'acceptance' means the action of consenting to receive or undertake something offered.",
        chinese_explanation: "(B) '回避' 意味着远离或不做某事的行为。" +
            "<br><br>" +
            "(A) '参与' 意味着参与或参与某事的行为。" +
            "<br><br>" +
            "(C) '对抗' 意味着敌对或争论的会议或对立双方之间的情况。" +
            "<br><br>" +
            "(D) '接受' 意味着同意接受或承担所提供的东西的行为。"
    },
    {
        id: 6,
        question: "The proposal received widespread __________ from the board, signaling strong support for the new initiative.",
        chinese_question: "这个提案得到了董事会的广泛 __________，表明对新举措的强烈支持。",
        answers: [
            { option: "A", answer: "criticism", chinese_answer: "批评", chinese_romanization: "pīpíng" },
            { option: "B", answer: "indifference", chinese_answer: "冷漠", chinese_romanization: "lěngmò" },
            { option: "C", answer: "opposition", chinese_answer: "反对", chinese_romanization: "fǎnduì" },
            { option: "D", answer: "approbation", chinese_answer: "赞许", chinese_romanization: "zànxǔ" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'approbation' means approval or praise." +
            "<br><br>" +
            "(A) 'criticism' means the expression of disapproval of someone or something based on perceived faults or mistakes." +
            "<br><br>" +
            "(B) 'indifference' means lack of interest, concern, or sympathy." +
            "<br><br>" +
            "(C) 'opposition' means resistance or dissent, expressed in action or argument.",
        chinese_explanation: "(D) '赞许' 意味着批准或称赞。" +
            "<br><br>" +
            "(A) '批评' 意味着基于感知的缺点或错误对某人或某事表示不赞成。" +
            "<br><br>" +
            "(B) '冷漠' 意味着缺乏兴趣、关心或同情。" +
            "<br><br>" +
            "(C) '反对' 意味着在行动或争论中表达的抵制或异议。"
    },
    {
        id: 7,
        question: "The intern's __________ in taking on additional responsibilities impressed the management team.",
        chinese_question: "实习生在承担额外责任时表现出的 __________ 给管理团队留下了深刻印象。",
        answers: [
            { option: "A", answer: "hesitation", chinese_answer: "犹豫", chinese_romanization: "yóuyù" },
            { option: "B", answer: "reluctance", chinese_answer: "不情愿", chinese_romanization: "bù qíngyuàn" },
            { option: "C", answer: "alacrity", chinese_answer: "敏捷", chinese_romanization: "mǐnjié" },
            { option: "D", answer: "apathy", chinese_answer: "冷漠", chinese_romanization: "lěngmò" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'alacrity' means brisk and cheerful readiness." +
            "<br><br>" +
            "(A) 'hesitation' means the action of pausing before saying or doing something, often due to uncertainty." +
            "<br><br>" +
            "(B) 'reluctance' means unwillingness or disinclination to do something." +
            "<br><br>" +
            "(D) 'apathy' means lack of interest, enthusiasm, or concern.",
        chinese_explanation: "(C) '敏捷' 意味着轻快而愉快的准备。" +
            "<br><br>" +
            "(A) '犹豫' 意味着在说或做某事之前暂停的行为，通常是由于不确定。" +
            "<br><br>" +
            "(B) '不情愿' 意味着不愿意或不愿意做某事。" +
            "<br><br>" +
            "(D) '冷漠' 意味着缺乏兴趣、热情或关心。"
    },
    {
        id: 8,
        question: "The __________ advocated for sweeping reforms to address social inequality and promote sustainable practices.",
        chinese_question: "这位 __________ 主张进行全面改革，以解决社会不平等问题并促进可持续发展。",
        answers: [
            { option: "A", answer: "traditionalist", chinese_answer: "传统主义者", chinese_romanization: "chuántǒng zhǔyì zhě" },
            { option: "B", answer: "reactionary", chinese_answer: "反动派", chinese_romanization: "fǎndòng pài" },
            { option: "C", answer: "conservative", chinese_answer: "保守派", chinese_romanization: "bǎoshǒu pài" },
            { option: "D", answer: "progressive", chinese_answer: "进步人士", chinese_romanization: "jìnbù rénshì" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'progressive' means a person who advocates for social reform and new, liberal ideas." +
            "<br><br>" +
            "(A) 'traditionalist' means a person who believes in maintaining traditional views, practices, and values." +
            "<br><br>" +
            "(B) 'reactionary' means a person who opposes political or social progress or reform." +
            "<br><br>" +
            "(C) 'conservative' means a person who is averse to change and holds traditional values.",
        chinese_explanation: "(D) '进步人士' 指的是倡导社会改革和新自由主义思想的人。" +
            "<br><br>" +
            "(A) '传统主义者' 指的是相信保持传统观点、实践和价值观的人。" +
            "<br><br>" +
            "(B) '反动派' 指的是反对政治或社会进步或改革的人。" +
            "<br><br>" +
            "(C) '保守派' 指的是反对变革并持有传统价值观的人。"
    },
    {
        id: 9,
        question: "The persistent back pain was the __________ of his existence, affecting his ability to enjoy daily activities.",
        chinese_question: "持续的背痛是他生活中的 __________，影响了他享受日常活动的能力。",
        answers: [
            { option: "A", answer: "joy", chinese_answer: "快乐", chinese_romanization: "kuàilè" },
            { option: "B", answer: "relief", chinese_answer: "缓解", chinese_romanization: "huǎnjiě" },
            { option: "C", answer: "bane", chinese_answer: "祸根", chinese_romanization: "huògēn" },
            { option: "D", answer: "comfort", chinese_answer: "舒适", chinese_romanization: "shūshì" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'bane' means a cause of great distress or annoyance." +
            "<br><br>" +
            "(A) 'joy' means a feeling of great pleasure and happiness." +
            "<br><br>" +
            "(B) 'relief' means a feeling of reassurance and relaxation following release from anxiety or distress." +
            "<br><br>" +
            "(D) 'comfort' means a state of physical ease and freedom from pain or constraint.",
        chinese_explanation: "(C) '祸根' 意味着极大痛苦或烦恼的原因。" +
            "<br><br>" +
            "(A) '快乐' 意味着极大的愉快和幸福。" +
            "<br><br>" +
            "(B) '缓解' 意味着焦虑或痛苦解除后的安心和放松感。" +
            "<br><br>" +
            "(D) '舒适' 意味着身体上的舒适和无痛或无约束的状态。"
    },
    {
        id: 10,
        question: "The ancient empire was a __________ of unparalleled might, exerting its influence across vast territories and diverse cultures.",
        chinese_question: "这个古老的帝国是一个无与伦比的 __________，在广阔的领土和多样的文化中发挥影响力。",
        answers: [
            { option: "A", answer: "village", chinese_answer: "村庄", chinese_romanization: "cūnzhuāng" },
            { option: "B", answer: "behemoth", chinese_answer: "巨兽", chinese_romanization: "jùshòu" },
            { option: "C", answer: "tribe", chinese_answer: "部落", chinese_romanization: "bùluò" },
            { option: "D", answer: "settlement", chinese_answer: "定居点", chinese_romanization: "dìngjūdiǎn" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'behemoth' means something enormous, especially a large and powerful organization or entity." +
            "<br><br>" +
            "(A) 'village' means a small community or group of houses in a rural area." +
            "<br><br>" +
            "(C) 'tribe' means a social division in a traditional society consisting of families or communities linked by social, economic, religious, or blood ties." +
            "<br><br>" +
            "(D) 'settlement' means a place, typically one that has hitherto been uninhabited, where people establish a community.",
        chinese_explanation: "(B) '巨兽' 意味着非常庞大的东西，尤其是一个强大而有影响力的组织或实体。" +
            "<br><br>" +
            "(A) '村庄' 意味着农村地区的一个小社区或房屋群。" +
            "<br><br>" +
            "(C) '部落' 意味着传统社会中的一个社会分支，由家庭或社区组成，通过社会、经济、宗教或血缘联系在一起。" +
            "<br><br>" +
            "(D) '定居点' 意味着一个地方，通常是一个以前无人居住的地方，人们在那里建立一个社区。"
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
