// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "The negotiations ended in __________, with neither side willing to compromise.",
        chinese_question: "谈判在__________中结束，双方都不愿意妥协。",
        answers: [
            { option: "A", answer: "metaphor", chinese_answer: "隐喻", chinese_romanization: "yǐnyù" },
            { option: "B", answer: "synecdoche", chinese_answer: "提喻", chinese_romanization: "tí yù" },
            { option: "C", answer: "simile", chinese_answer: "明喻", chinese_romanization: "míng yù" },
            { option: "D", answer: "acrimony", chinese_answer: "尖刻", chinese_romanization: "jiānkè" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'acrimony' means bitterness or ill feeling." +
            "<br><br>" +
            "(A) 'metaphor' means a figure of speech in which a word or phrase is applied to an object or action to which it is not literally applicable." +
            "<br><br>" +
            "(B) 'synecdoche' means a figure of speech in which a part is made to represent the whole or vice versa." +
            "<br><br>" +
            "(C) 'simile' means a figure of speech involving the comparison of one thing with another thing of a different kind.",
        chinese_explanation: "(D) '尖刻' 意味着苦涩或恶意。" +
            "<br><br>" +
            "(A) '隐喻' 意味着将一个词或短语应用于一个对象或动作，而不是字面上适用的修辞手法。" +
            "<br><br>" +
            "(B) '提喻' 意味着一种修辞手法，其中部分代表整体或整体代表部分。" +
            "<br><br>" +
            "(C) '明喻' 意味着涉及将一种事物与另一种不同种类的事物进行比较的修辞手法。"
    },
    {
        id: 2,
        question: "Her __________ at the disruptive student silenced the entire class immediately.",
        chinese_question: "她对捣乱学生的__________立刻让整个班级安静下来。",
        answers: [
            { option: "A", answer: "shadow", chinese_answer: "阴影", chinese_romanization: "yīnyǐng" },
            { option: "B", answer: "glare", chinese_answer: "耀光", chinese_romanization: "yàoguāng" },
            { option: "C", answer: "reflection", chinese_answer: "反射", chinese_romanization: "fǎnshè" },
            { option: "D", answer: "breeze", chinese_answer: "微风", chinese_romanization: "wēifēng" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'glare' means a very bright and unpleasant light." +
            "<br><br>" +
            "(A) 'shadow' means a dark area or shape produced by a body coming between rays of light and a surface." +
            "<br><br>" +
            "(C) 'reflection' means the throwing back by a body or surface of light, heat, or sound without absorbing it." +
            "<br><br>" +
            "(D) 'breeze' means a gentle wind.",
        chinese_explanation: "(B) '耀光' 一词意味着非常明亮和不愉快的光。" +
            "<br><br>" +
            "(A) '阴影' 意味着一个物体在光线与表面之间产生的黑暗区域或形状。" +
            "<br><br>" +
            "(C) '反射' 意味着物体或表面不吸收而是反射光、热或声音。" +
            "<br><br>" +
            "(D) '微风' 意味着轻风。"
    },
    {
        id: 3,
        question: "As a __________ of classical music, she could easily identify the composer of any symphony she heard.",
        chinese_question: "作为古典音乐的 __________，她可以轻松识别她听到的任何交响曲的作曲家。",
        answers: [
            { option: "A", answer: "connoisseur", chinese_answer: "鉴赏家", chinese_romanization: "jiànshǎngjiā" },
            { option: "B", answer: "novice", chinese_answer: "新手", chinese_romanization: "xīnshǒu" },
            { option: "C", answer: "amateur", chinese_answer: "业余爱好者", chinese_romanization: "yèyú àihào zhě" },
            { option: "D", answer: "misjudge", chinese_answer: "误判", chinese_romanization: "wùpàn" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'connoisseur' means an expert judge in matters of taste." +
            "<br><br>" +
            "(B) 'novice' means a person new to and inexperienced in a job or situation." +
            "<br><br>" +
            "(C) 'amateur' means a person who engages in a pursuit, especially a sport, on an unpaid rather than a professional basis." +
            "<br><br>" +
            "(D) 'misjudge' means to form an incorrect opinion or conclusion about something.",
        chinese_explanation: "(A) '鉴赏家' 意味着品味方面的专家。" +
            "<br><br>" +
            "(B) '新手' 意味着在工作或情况下新手或没有经验的人。" +
            "<br><br>" +
            "(C) '业余爱好者' 意味着以非专业身份从事某项追求（尤其是运动）的人。" +
            "<br><br>" +
            "(D) '误判' 意味着对某事形成错误的意见或结论。"
    },
    {
        id: 4,
        question: "Grandpa always said, 'You can’t judge a book by its cover,' a __________ repeated by many.",
        chinese_question: "爷爷总是说“人不可貌相”，这是一个被许多人重复的__________。",
        answers: [
            { option: "A", answer: "innovation", chinese_answer: "创新", chinese_romanization: "chuàngxīn" },
            { option: "B", answer: "cliche", chinese_answer: "陈词滥调", chinese_romanization: "chéncí làndiào" },
            { option: "C", answer: "novelty", chinese_answer: "新奇", chinese_romanization: "xīnqí" },
            { option: "D", answer: "invention", chinese_answer: "发明", chinese_romanization: "fāmíng" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'cliche' means a phrase or opinion that is overused and betrays a lack of original thought." +
            "<br><br>" +
            "(A) 'innovation' means a new method, idea, product, etc." +
            "<br><br>" +
            "(C) 'novelty' means the quality of being new, original, or unusual." +
            "<br><br>" +
            "(D) 'invention' means the action of inventing something, typically a process or device.",
        chinese_explanation: "(B) '陈词滥调' 一词意味着被过度使用并表现出缺乏原创思想的短语或观点。" +
            "<br><br>" +
            "(A) '创新' 意味着一种新的方法、想法、产品等。" +
            "<br><br>" +
            "(C) '新奇' 意味着新的、原创的或不寻常的品质。" +
            "<br><br>" +
            "(D) '发明' 意味着发明某物的行为，通常是一个过程或设备。"
    },
    {
        id: 5,
        question: "The artist's vision was realized in its __________, with every element perfectly in place.",
        chinese_question: "艺术家的愿景在__________中得以实现，每个元素都完美到位。",
        answers: [
            { option: "A", answer: "part", chinese_answer: "部分", chinese_romanization: "bùfen" },
            { option: "B", answer: "section", chinese_answer: "部门", chinese_romanization: "bùmén" },
            { option: "C", answer: "entirety", chinese_answer: "全部", chinese_romanization: "quánbù" },
            { option: "D", answer: "portion", chinese_answer: "份", chinese_romanization: "fèn" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'entirety' means the whole of something." +
            "<br><br>" +
            "(A) 'part' means a piece or segment of something." +
            "<br><br>" +
            "(B) 'section' means a distinct part or subdivision of something." +
            "<br><br>" +
            "(D) 'portion' means a part of a whole.",
        chinese_explanation: "(C) '全部' 一词意味着某物的整体。" +
            "<br><br>" +
            "(A) '部分' 意味着某物的一部分或片段。" +
            "<br><br>" +
            "(B) '部门' 意味着某物的一个不同部分或分区。" +
            "<br><br>" +
            "(D) '份' 意味着一个整体的一部分。"
    },
    {
        id: 6,
        question: "The government implemented widespread __________ measures to track potential threats and maintain national security.",
        chinese_question: "政府实施了广泛的 __________ 措施，以追踪潜在威胁并维护国家安全。",
        answers: [
            { option: "A", answer: "decoration", chinese_answer: "装饰", chinese_romanization: "zhuāngshì" },
            { option: "B", answer: "art", chinese_answer: "艺术", chinese_romanization: "yìshù" },
            { option: "C", answer: "surveillance", chinese_answer: "监控", chinese_romanization: "jiānkòng" },
            { option: "D", answer: "display", chinese_answer: "展示", chinese_romanization: "zhǎnshì" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'surveillance' means close observation, especially of a suspected spy or criminal." +
            "<br><br>" +
            "(A) 'decoration' means things that serve as ornaments or adornments." +
            "<br><br>" +
            "(B) 'art' means the expression or application of human creative skill and imagination." +
            "<br><br>" +
            "(D) 'display' means to make a prominent exhibition of something in a place where it can be easily seen.",
        chinese_explanation: "(C) '监控' 一词意味着密切观察，特别是对疑似间谍或罪犯的密切观察。" +
            "<br><br>" +
            "(A) '装饰' 意味着作为装饰品或装饰的东西。" +
            "<br><br>" +
            "(B) '艺术' 意味着人类创造技能和想象力的表达或应用。" +
            "<br><br>" +
            "(D) '展示' 意味着在可以轻松看到的地方突出展示某物。"
    },
    {
        id: 7,
        question: "At the office, he was part of a small __________ of colleagues who often went out for lunch together.",
        chinese_question: "在办公室，他是一个经常一起出去吃午饭的小__________同事的一员。",
        answers: [
            { option: "A", answer: "crowd", chinese_answer: "人群", chinese_romanization: "rénqún" },
            { option: "B", answer: "clique", chinese_answer: "小团体", chinese_romanization: "xiǎo tuántǐ" },
            { option: "C", answer: "individual", chinese_answer: "个体", chinese_romanization: "gètǐ" },
            { option: "D", answer: "class", chinese_answer: "班级", chinese_romanization: "bānjí" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'clique' means a small group of people, with shared interests or other features in common, who spend time together and do not readily allow others to join them." +
            "<br><br>" +
            "(A) 'crowd' means a large number of people gathered together, typically in a disorganized or unruly way." +
            "<br><br>" +
            "(C) 'individual' means a single human being as distinct from a group." +
            "<br><br>" +
            "(D) 'class' means a set or category of things having some property or attribute in common and differentiated from others by kind, type, or quality.",
        chinese_explanation: "(B) '小团体' 一词意味着一小群人，有共同的兴趣或其他共同点，他们在一起度过时间，不轻易允许其他人加入他们。" +
            "<br><br>" +
            "(A) '人群' 意味着大量人群，通常是无组织或不守规矩的聚集。" +
            "<br><br>" +
            "(C) '个体' 意味着与群体不同的单个人。" +
            "<br><br>" +
            "(D) '班级' 意味着具有某种共同属性或特征的一组或类别，并根据种类、类型或质量与其他类别区分开。"
    },
    {
        id: 8,
        question: "After amassing great wealth, he chose to live in a humble __________ far from the bustling city.",
        chinese_question: "积累了大量财富后，他选择住在远离喧嚣城市的谦逊__________。",
        answers: [
            { option: "A", answer: "journey", chinese_answer: "旅程", chinese_romanization: "lǚchéng" },
            { option: "B", answer: "voyage", chinese_answer: "航行", chinese_romanization: "hángxíng" },
            { option: "C", answer: "abode", chinese_answer: "住所", chinese_romanization: "zhùsuǒ" },
            { option: "D", answer: "exploration", chinese_answer: "探索", chinese_romanization: "tànsuǒ" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'abode' means a place of residence; a house or home." +
            "<br><br>" +
            "(A) 'journey' means an act of traveling from one place to another." +
            "<br><br>" +
            "(B) 'voyage' means a long journey involving travel by sea or in space." +
            "<br><br>" +
            "(D) 'exploration' means the action of traveling in or through an unfamiliar area in order to learn about it.",
        chinese_explanation: "(C) '住所' 一词意味着居住的地方；房子或家。" +
            "<br><br>" +
            "(A) '旅程' 意味着从一个地方到另一个地方的旅行行为。" +
            "<br><br>" +
            "(B) '航行' 意味着涉及海上或太空旅行的长途旅行。" +
            "<br><br>" +
            "(D) '探索' 意味着为了了解而穿越不熟悉的区域的行动。"
    },
    {
        id: 9,
        question: "The teacher used a clever __________ to help students remember the order of the planets in our solar system, such as 'My Very Educated Mother Just Served Us Noodles' for Mercury, Venus, Earth, Mars, Jupiter, Saturn, Uranus, and Neptune.",
        chinese_question: "老师使用了一个巧妙的 __________ 来帮助学生记住太阳系中行星的顺序，例如'我的非常有学问的妈妈刚刚给我们端上面条'对应水星、金星、地球、火星、木星、土星、天王星和海王星。",
        answers: [
            { option: "A", answer: "theory", chinese_answer: "理论", chinese_romanization: "lǐlùn" },
            { option: "B", answer: "mnemonic", chinese_answer: "记忆法", chinese_romanization: "jìyì fǎ" },
            { option: "C", answer: "formula", chinese_answer: "公式", chinese_romanization: "gōngshì" },
            { option: "D", answer: "equation", chinese_answer: "方程", chinese_romanization: "fāngchéng" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'mnemonic' means a device such as a pattern of letters, ideas, or associations that assists in remembering something." +
            "<br><br>" +
            "(A) 'theory' means a supposition or a system of ideas intended to explain something." +
            "<br><br>" +
            "(C) 'formula' means a mathematical relationship or rule expressed in symbols." +
            "<br><br>" +
            "(D) 'equation' means a statement that the values of two mathematical expressions are equal.",
        chinese_explanation: "(B) '记忆法' 一词意味着一种帮助记住某事的设备，如字母、想法或联想的模式。" +
            "<br><br>" +
            "(A) '理论' 意味着一种假设或旨在解释某事的系统思想。" +
            "<br><br>" +
            "(C) '公式' 意味着用符号表达的数学关系或规则。" +
            "<br><br>" +
            "(D) '方程' 意味着两个数学表达式的值相等的声明。"
    },
    {
        id: 10,
        question: "The __________ of the new building were carefully considered to ensure it blended harmoniously with its surroundings.",
        chinese_question: "新建筑的 __________ 被仔细考虑，以确保它与周围环境和谐融合。",
        answers: [
            { option: "A", answer: "functionality", chinese_answer: "功能", chinese_romanization: "gōngnéng" },
            { option: "B", answer: "aesthetics", chinese_answer: "美学", chinese_romanization: "měixué" },
            { option: "C", answer: "utility", chinese_answer: "实用性", chinese_romanization: "shíyòng xìng" },
            { option: "D", answer: "durability", chinese_answer: "耐久性", chinese_romanization: "nàijiǔ xìng" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'aesthetics' means a set of principles concerned with the nature and appreciation of beauty." +
            "<br><br>" +
            "(A) 'functionality' means the quality of being suited to serve a purpose well; practicality." +
            "<br><br>" +
            "(C) 'utility' means the state of being useful, profitable, or beneficial." +
            "<br><br>" +
            "(D) 'durability' means the ability to withstand wear, pressure, or damage.",
        chinese_explanation: "(B) '美学' 一词意味着与美的性质和欣赏有关的一套原则。" +
            "<br><br>" +
            "(A) '功能' 意味着适合很好地服务于一个目的的质量；实用性。" +
            "<br><br>" +
            "(C) '实用性' 意味着有用、盈利或有益的状态。" +
            "<br><br>" +
            "(D) '耐久性' 意味着承受磨损、压力或损坏的能力。"
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
