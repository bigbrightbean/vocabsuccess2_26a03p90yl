// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "The artist achieved international __________ for her innovative work in modern art.",
        chinese_question: "这位艺术家因其在现代艺术方面的创新作品而获得国际 __________。",
        answers: [
            { option: "A", answer: "renown", chinese_answer: "声誉", chinese_romanization: "shēngyù" },
            { option: "B", answer: "obscurity", chinese_answer: "默默无闻", chinese_romanization: "mòmò wúwén" },
            { option: "C", answer: "anonymity", chinese_answer: "匿名", chinese_romanization: "nìmíng" },
            { option: "D", answer: "insignificance", chinese_answer: "微不足道", chinese_romanization: "wēi bù zú dào" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'renown' means the condition of being known or talked about by many people; fame." +
            "<br><br>" +
            "(B) 'obscurity' means the state of being unknown, inconspicuous, or unimportant." +
            "<br><br>" +
            "(C) 'anonymity' means the condition of being anonymous." +
            "<br><br>" +
            "(D) 'insignificance' means the quality of being too small or unimportant to be worth consideration.",
        chinese_explanation: "(A) '声誉' 意味着被许多人知道或谈论的状态；名声。" +
            "<br><br>" +
            "(B) '默默无闻' 意味着不为人知、不显眼或不重要的状态。" +
            "<br><br>" +
            "(C) '匿名' 意味着匿名的状态。" +
            "<br><br>" +
            "(D) '微不足道' 意味着小到或不重要到不值得考虑的质量。"
    },
    {
        id: 2,
        question: "A __________ of vitamin D can lead to serious health issues such as weak bones and fatigue.",
        chinese_question: "维生素D的 __________ 可能导致严重的健康问题，如骨骼脆弱和疲劳。",
        answers: [
            { option: "A", answer: "deficiency", chinese_answer: "缺乏", chinese_romanization: "quēfá" },
            { option: "B", answer: "surplus", chinese_answer: "过剩", chinese_romanization: "guòshèng" },
            { option: "C", answer: "sufficiency", chinese_answer: "充足", chinese_romanization: "chōngzú" },
            { option: "D", answer: "excess", chinese_answer: "过量", chinese_romanization: "guòliàng" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'deficiency' means a lack or shortage." +
            "<br><br>" +
            "(B) 'surplus' means an excess amount." +
            "<br><br>" +
            "(C) 'sufficiency' means an adequate amount." +
            "<br><br>" +
            "(D) 'excess' means more than necessary.",
        chinese_explanation: "(A) '缺乏' 意味着缺少或短缺。" +
            "<br><br>" +
            "(B) '过剩' 意味着过多的量。" +
            "<br><br>" +
            "(C) '充足' 意味着足够的量。" +
            "<br><br>" +
            "(D) '过量' 意味着超过必要的量。"
    },
    {
        id: 3,
        question: "The term 'jumbo shrimp' is an __________, combining contradictory words to describe something.",
        chinese_question: "术语“巨大的虾”是一个 __________，结合了矛盾的词语来描述某物。",
        answers: [
            { option: "A", answer: "analogy", chinese_answer: "类比", chinese_romanization: "lèibǐ" },
            { option: "B", answer: "oxymoron", chinese_answer: "矛盾修辞", chinese_romanization: "máodùn xiūcí" },
            { option: "C", answer: "euphemism", chinese_answer: "委婉语", chinese_romanization: "wěiwǎnyǔ" },
            { option: "D", answer: "synonym", chinese_answer: "同义词", chinese_romanization: "tóngyìcí" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'oxymoron' means a figure of speech in which apparently contradictory terms appear in conjunction." +
            "<br><br>" +
            "(A) 'analogy' means a comparison between two things, typically for the purpose of explanation or clarification." +
            "<br><br>" +
            "(C) 'euphemism' means a mild or indirect word or expression substituted for one considered to be too harsh or blunt when referring to something unpleasant or embarrassing." +
            "<br><br>" +
            "(D) 'synonym' means a word or phrase that means exactly or nearly the same as another word or phrase in the same language.",
        chinese_explanation: "(B) '矛盾修辞' 一词意味着一种修辞手法，其中明显矛盾的术语一起出现。" +
            "<br><br>" +
            "(A) '类比' 意味着两个事物之间的比较，通常是为了解释或澄清。" +
            "<br><br>" +
            "(C) '委婉语' 意味着一种温和或间接的词或表达，替代那些被认为太过严厉或直率的词语，用于指某些不愉快或尴尬的事情。" +
            "<br><br>" +
            "(D) '同义词' 意味着一个词或短语在同一语言中与另一个词或短语的意思完全相同或几乎相同。"
    },
    {
        id: 4,
        question: "She claimed to be a __________, able to predict future events with startling accuracy.",
        chinese_question: "她声称自己是个 __________，能够惊人地准确预测未来事件。",
        answers: [
            { option: "A", answer: "skeptic", chinese_answer: "怀疑者", chinese_romanization: "huáiyí zhě" },
            { option: "B", answer: "realist", chinese_answer: "现实主义者", chinese_romanization: "xiànshí zhǔyì zhě" },
            { option: "C", answer: "clairvoyant", chinese_answer: "预言家", chinese_romanization: "yùyán jiā" },
            { option: "D", answer: "doubter", chinese_answer: "疑者", chinese_romanization: "yí zhě" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'clairvoyant' means a person who claims to have a supernatural ability to perceive events in the future or beyond normal sensory contact." +
            "<br><br>" +
            "(A) 'skeptic' means a person inclined to question or doubt accepted opinions." +
            "<br><br>" +
            "(B) 'realist' means a person who accepts a situation as it is and is prepared to deal with it accordingly." +
            "<br><br>" +
            "(D) 'doubter' means a person who is uncertain about something or tends to disbelieve others.",
        chinese_explanation: "(C) '预言家' 一词意味着声称具有超自然能力，能够感知未来或超越正常感官接触的人。" +
            "<br><br>" +
            "(A) '怀疑者' 意味着倾向于质疑或怀疑公认观点的人。" +
            "<br><br>" +
            "(B) '现实主义者' 意味着接受现状并准备相应处理的人。" +
            "<br><br>" +
            "(D) '疑者' 意味着对某事不确定或倾向于不相信他人的人。"
    },
    {
        id: 5,
        question: "The library had a __________ of resources on the subject, making it easy for students to find the information they needed.",
        chinese_question: "图书馆在这个主题上有 __________ 的资源，使学生容易找到他们需要的信息。",
        answers: [
            { option: "A", answer: "deficiency", chinese_answer: "缺乏", chinese_romanization: "quēfá" },
            { option: "B", answer: "paucity", chinese_answer: "少量", chinese_romanization: "shǎoliàng" },
            { option: "C", answer: "insufficiency", chinese_answer: "不足", chinese_romanization: "bùzú" },
            { option: "D", answer: "plethora", chinese_answer: "过多", chinese_romanization: "guòduō" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'plethora' means an excess of something." +
            "<br><br>" +
            "(A) 'deficiency' means a lack or shortage." +
            "<br><br>" +
            "(B) 'paucity' means the presence of something in only small or insufficient quantities." +
            "<br><br>" +
            "(C) 'insufficiency' means not having enough of something.",
        chinese_explanation: "(D) '过多' 意思是某物的过剩。" +
            "<br><br>" +
            "(A) '缺乏' 意思是缺乏或短缺。" +
            "<br><br>" +
            "(B) '少量' 意思是只有少量或不足量的存在。" +
            "<br><br>" +
            "(C) '不足' 意思是没有足够的某物。"
    },
    {
        id: 6,
        question: "She faced a __________ when she had to choose between a high-paying job and pursuing her passion for art.",
        chinese_question: "她面对一个 __________，必须在高薪工作和追求艺术激情之间做出选择。",
        answers: [
            { option: "A", answer: "solution", chinese_answer: "解决方案", chinese_romanization: "jiějué fāng'àn" },
            { option: "B", answer: "clarity", chinese_answer: "清晰", chinese_romanization: "qīngxī" },
            { option: "C", answer: "dilemma", chinese_answer: "困境", chinese_romanization: "kùnjìng" },
            { option: "D", answer: "resolution", chinese_answer: "决心", chinese_romanization: "juéxīn" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'dilemma' means a situation in which a difficult choice has to be made between two or more alternatives, especially ones that are equally undesirable." +
            "<br><br>" +
            "(A) 'solution' means a means of solving a problem or dealing with a difficult situation." +
            "<br><br>" +
            "(B) 'clarity' means the quality of being clear, in particular." +
            "<br><br>" +
            "(D) 'resolution' means a firm decision to do or not to do something.",
        chinese_explanation: "(C) '困境' 一词意味着需要在两种或多种选择之间做出艰难选择的情况，尤其是那些同样不理想的选择。" +
            "<br><br>" +
            "(A) '解决方案' 意味着解决问题或处理困难情况的方法。" +
            "<br><br>" +
            "(B) '清晰' 意味着清晰的品质，特别是。" +
            "<br><br>" +
            "(D) '决心' 意味着做出或不做某事的坚定决定。"
    },
    {
        id: 7,
        question: "Reliable __________ are essential for writing a well-researched academic paper, ensuring the information is accurate and credible.",
        chinese_question: "可靠的 __________ 对于撰写经过充分研究的学术论文至关重要，确保信息准确可信。",
        answers: [
            { option: "A", answer: "assumptions", chinese_answer: "假设", chinese_romanization: "jiǎshè" },
            { option: "B", answer: "sources", chinese_answer: "资料来源", chinese_romanization: "zīliào láiyuán" },
            { option: "C", answer: "opinions", chinese_answer: "意见", chinese_romanization: "yìjiàn" },
            { option: "D", answer: "estimates", chinese_answer: "估计", chinese_romanization: "gūjì" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'sources' means places, persons, or things from which something comes or can be obtained." +
            "<br><br>" +
            "(A) 'assumptions' means things that are accepted as true or as certain to happen, without proof." +
            "<br><br>" +
            "(C) 'opinions' means views or judgments formed about something, not necessarily based on fact or knowledge." +
            "<br><br>" +
            "(D) 'estimates' means roughly calculated or judged values, numbers, quantities, or extents.",
        chinese_explanation: "(B) '资料来源' 一词意味着某物来自或可以获得的地方、人物或事物。" +
            "<br><br>" +
            "(A) '假设' 意味着没有证据接受的事物或认为必然发生的事物。" +
            "<br><br>" +
            "(C) '意见' 意味着对某事形成的看法或判断，不一定基于事实或知识。" +
            "<br><br>" +
            "(D) '估计' 意味着大致计算或判断的值、数字、数量或范围。"
    },
    {
        id: 8,
        question: "Despite the chaos around her, she maintained her __________ and handled the situation with calm and grace.",
        chinese_question: "尽管周围一片混乱，她仍然保持 __________，冷静而优雅地处理了局面。",
        answers: [
            { option: "A", answer: "panic", chinese_answer: "恐慌", chinese_romanization: "kǒnghuāng" },
            { option: "B", answer: "anxiety", chinese_answer: "焦虑", chinese_romanization: "jiāolǜ" },
            { option: "C", answer: "composure", chinese_answer: "镇静", chinese_romanization: "zhènjìng" },
            { option: "D", answer: "agitation", chinese_answer: "激动", chinese_romanization: "jīdòng" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'composure' means the state or feeling of being calm and in control of oneself." +
            "<br><br>" +
            "(A) 'panic' means sudden uncontrollable fear or anxiety, often causing wildly unthinking behavior." +
            "<br><br>" +
            "(B) 'anxiety' means a feeling of worry, nervousness, or unease." +
            "<br><br>" +
            "(D) 'agitation' means a state of anxiety or nervous excitement.",
        chinese_explanation: "(C) '镇静' 一词意味着冷静和控制自己的状态或感觉。" +
            "<br><br>" +
            "(A) '恐慌' 意味着突然无法控制的恐惧或焦虑，常导致疯狂的不加思索的行为。" +
            "<br><br>" +
            "(B) '焦虑' 意味着一种担忧、紧张或不安的感觉。" +
            "<br><br>" +
            "(D) '激动' 意味着焦虑或紧张兴奋的状态。"
    },
    {
        id: 9,
        question: "The dog's __________ was a cause for concern, as it frequently growled and snapped at strangers.",
        chinese_question: "这只狗的 __________ 是一个令人担忧的问题，因为它经常对陌生人咆哮和咬人。",
        answers: [
            { option: "A", answer: "passivity", chinese_answer: "被动", chinese_romanization: "bèidòng" },
            { option: "B", answer: "calmness", chinese_answer: "冷静", chinese_romanization: "lěngjìng" },
            { option: "C", answer: "aggression", chinese_answer: "侵略性", chinese_romanization: "qīnlüè xìng" },
            { option: "D", answer: "timidity", chinese_answer: "胆怯", chinese_romanization: "dǎnqiè" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'aggression' means hostile or violent behavior or attitudes toward another; readiness to attack or confront." +
            "<br><br>" +
            "(A) 'passivity' means acceptance of what happens, without active response or resistance." +
            "<br><br>" +
            "(B) 'calmness' means the state or quality of being free from agitation or strong emotion." +
            "<br><br>" +
            "(D) 'timidity' means lack of courage or confidence.",
        chinese_explanation: "(C) '侵略性' 一词意味着对他人的敌对或暴力行为或态度；准备攻击或对抗。" +
            "<br><br>" +
            "(A) '被动' 意味着接受发生的事情，而没有积极回应或抵抗。" +
            "<br><br>" +
            "(B) '冷静' 意味着没有激动或强烈情绪的状态或质量。" +
            "<br><br>" +
            "(D) '胆怯' 意味着缺乏勇气或信心。"
    },
    {
        id: 10,
        question: "The film's __________ of the popular novel stayed true to the original story, pleasing both fans and critics.",
        chinese_question: "这部电影对流行小说的 __________ 保持了原作故事的真实性，让粉丝和评论家都感到满意。",
        answers: [
            { option: "A", answer: "deviation", chinese_answer: "偏离", chinese_romanization: "piānlí" },
            { option: "B", answer: "adaptation", chinese_answer: "改编", chinese_romanization: "gǎibiān" },
            { option: "C", answer: "divergence", chinese_answer: "分歧", chinese_romanization: "fēnqí" },
            { option: "D", answer: "alteration", chinese_answer: "改变", chinese_romanization: "gǎibiàn" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'adaptation' means the action or process of adapting or being adapted." +
            "<br><br>" +
            "(A) 'deviation' means the action of departing from an established course or accepted standard." +
            "<br><br>" +
            "(C) 'divergence' means the process or state of diverging." +
            "<br><br>" +
            "(D) 'alteration' means the action or process of altering or being altered.",
        chinese_explanation: "(B) '改编' 一词意味着适应或被适应的行为或过程。" +
            "<br><br>" +
            "(A) '偏离' 意味着偏离既定路线或公认标准的行为。" +
            "<br><br>" +
            "(C) '分歧' 意味着分歧的过程或状态。" +
            "<br><br>" +
            "(D) '改变' 意味着改变或被改变的行为或过程。"
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
