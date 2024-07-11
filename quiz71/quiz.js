// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "International organizations provided __________ to the region after the devastating earthquake, helping with recovery and rebuilding efforts.",
        chinese_question: "在毁灭性的地震之后，国际组织向该地区提供了 __________，帮助恢复和重建工作。",
        answers: [
            { option: "A", answer: "hindrance", chinese_answer: "阻碍", chinese_romanization: "zǔ'ài" },
            { option: "B", answer: "aid", chinese_answer: "援助", chinese_romanization: "yuánzhù" },
            { option: "C", answer: "opposition", chinese_answer: "反对", chinese_romanization: "fǎnduì" },
            { option: "D", answer: "obstruction", chinese_answer: "障碍", chinese_romanization: "zhàng'ài" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'aid' means help, typically of a practical nature." +
            "<br><br>" +
            "(A) 'hindrance' means a thing that provides resistance, delay, or obstruction to something or someone." +
            "<br><br>" +
            "(C) 'opposition' means resistance or dissent, expressed in action or argument." +
            "<br><br>" +
            "(D) 'obstruction' means a thing that impedes or prevents passage or progress; an obstacle or blockage.",
        chinese_explanation: "(B) '援助' 一词意味着通常是实际性质的帮助。" +
            "<br><br>" +
            "(A) '阻碍' 意味着提供阻力、延迟或阻碍某事或某人的事物。" +
            "<br><br>" +
            "(C) '反对' 意味着以行动或争论表达的抵抗或异议。" +
            "<br><br>" +
            "(D) '障碍' 意味着阻碍或阻止通行或进展的事物；障碍或堵塞。"
    },
    {
        id: 2,
        question: "As a manager, it is important to listen to your __________ and consider their feedback.",
        chinese_question: "作为经理，倾听你的 __________ 并考虑他们的反馈意见是很重要的。",
        answers: [
            { option: "A", answer: "superior", chinese_answer: "上级", chinese_romanization: "shàngjí" },
            { option: "B", answer: "colleague", chinese_answer: "同事", chinese_romanization: "tóngshì" },
            { option: "C", answer: "subordinate", chinese_answer: "下属", chinese_romanization: "xiàshǔ" },
            { option: "D", answer: "partner", chinese_answer: "伙伴", chinese_romanization: "huǒbàn" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'subordinate' means a person under the authority or control of another within an organization." +
            "<br><br>" +
            "(A) 'superior' means a person higher in rank, status, or quality." +
            "<br><br>" +
            "(B) 'colleague' means a person with whom one works in a profession or business." +
            "<br><br>" +
            "(D) 'partner' means either of a pair of people engaged together in the same activity.",
        chinese_explanation: "(C) '下属' 一词意味着在组织中受他人权威或控制的人。" +
            "<br><br>" +
            "(A) '上级' 意味着在等级、地位或质量上较高的人。" +
            "<br><br>" +
            "(B) '同事' 意味着与某人在专业或业务中共事的人。" +
            "<br><br>" +
            "(D) '伙伴' 意味着从事同一活动的两人中的任何一方。"
    },
    {
        id: 3,
        question: "His __________ in handling complex situations earned him great respect.",
        chinese_question: "他在处理复杂情况中的 __________ 为他赢得了很高的尊重。",
        answers: [
            { option: "A", answer: "wisdom", chinese_answer: "智慧", chinese_romanization: "zhìhuì" },
            { option: "B", answer: "recklessness", chinese_answer: "鲁莽", chinese_romanization: "lǔmǎng" },
            { option: "C", answer: "ignorance", chinese_answer: "无知", chinese_romanization: "wúzhī" },
            { option: "D", answer: "hesitation", chinese_answer: "犹豫", chinese_romanization: "yóuyù" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'wisdom' metaphorically means the ability to make sensible decisions and give good advice based on experience." +
            "<br><br>" +
            "(B) 'recklessness' means lack of regard for the danger or consequences of one's actions." +
            "<br><br>" +
            "(C) 'ignorance' means lack of knowledge or information." +
            "<br><br>" +
            "(D) 'hesitation' means the action of pausing or hesitating before saying or doing something.",
        chinese_explanation: "(A) '智慧' 比喻根据经验做出明智决策和提供良好建议的能力。" +
            "<br><br>" +
            "(B) '鲁莽' 意味着对自己行为的危险或后果缺乏考虑。" +
            "<br><br>" +
            "(C) '无知' 意味着缺乏知识或信息。" +
            "<br><br>" +
            "(D) '犹豫' 意味着在说或做某事前暂停或犹豫的行为。"
    },
    {
        id: 4,
        question: "After explaining the instructions for the third time, the teacher's __________ was evident as she sighed deeply.",
        chinese_question: "在第三次解释完指示后，老师的 __________ 显而易见，她深深地叹了口气。",
        answers: [
            { option: "A", answer: "patience", chinese_answer: "耐心", chinese_romanization: "nàixīn" },
            { option: "B", answer: "exasperation", chinese_answer: "恼怒", chinese_romanization: "nǎonù" },
            { option: "C", answer: "tranquility", chinese_answer: "平静", chinese_romanization: "píngjìng" },
            { option: "D", answer: "joy", chinese_answer: "快乐", chinese_romanization: "kuàilè" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'exasperation' means a feeling of intense irritation or annoyance." +
            "<br><br>" +
            "(A) 'patience' means the capacity to accept or tolerate delay, trouble, or suffering without getting angry or upset." +
            "<br><br>" +
            "(C) 'tranquility' means the quality or state of being calm." +
            "<br><br>" +
            "(D) 'joy' means a feeling of great pleasure and happiness.",
        chinese_explanation: "(B) '恼怒' 一词意味着强烈的恼怒或烦躁感。" +
            "<br><br>" +
            "(A) '耐心' 意味着接受或容忍延误、麻烦或痛苦而不生气或不烦恼的能力。" +
            "<br><br>" +
            "(C) '平静' 意味着平静的状态。" +
            "<br><br>" +
            "(D) '快乐' 意味着极大的快乐和幸福的感觉。"
    },
    {
        id: 5,
        question: "Her smile hinted at a bit of __________ after pulling off the surprise.",
        chinese_question: "她的微笑暗示着完成惊喜后有一点 __________。",
        answers: [
            { option: "A", answer: "mischief", chinese_answer: "恶作剧", chinese_romanization: "èzuòjù" },
            { option: "B", answer: "guilt", chinese_answer: "内疚", chinese_romanization: "nèijiù" },
            { option: "C", answer: "regret", chinese_answer: "后悔", chinese_romanization: "hòuhuǐ" },
            { option: "D", answer: "remorse", chinese_answer: "懊悔", chinese_romanization: "àohuǐ" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'mischief' metaphorically means a sense of playful troublemaking." + 
            "<br><br>" +
            "(B) 'guilt' means the fact of having committed a specified or implied offense or crime." + 
            "<br><br>" +
            "(C) 'regret' means feel sad, repentant, or disappointed over (something that has happened or been done, especially a loss or missed opportunity)." + 
            "<br><br>" +
            "(D) 'remorse' means deep regret or guilt for a wrong committed.",
        chinese_explanation: "(A) '恶作剧' 比喻一种顽皮的捣乱感。" + 
            "<br><br>" +
            "(B) '内疚' 意味着犯有特定或暗示的罪行或罪行的事实。" + 
            "<br><br>" +
            "(C) '后悔' 意味着对（已经发生或做过的事，尤其是损失或错过的机会）感到难过、悔恨或失望。" + 
            "<br><br>" +
            "(D) '懊悔' 意味着对所犯错误深感悔恨或内疚。"
    },
    {
        id: 6,
        question: "She trusted her __________ when making important decisions, believing that her gut feelings would guide her correctly.",
        chinese_question: "在做重要决定时，她相信自己的 __________，相信自己的直觉会正确引导她。",
        answers: [
            { option: "A", answer: "logic", chinese_answer: "逻辑", chinese_romanization: "luójí" },
            { option: "B", answer: "intuition", chinese_answer: "直觉", chinese_romanization: "zhíjué" },
            { option: "C", answer: "analysis", chinese_answer: "分析", chinese_romanization: "fēnxī" },
            { option: "D", answer: "calculation", chinese_answer: "计算", chinese_romanization: "jìsuàn" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'intuition' means the ability to understand something immediately, without the need for conscious reasoning." +
            "<br><br>" +
            "(A) 'logic' means reasoning conducted or assessed according to strict principles of validity." +
            "<br><br>" +
            "(C) 'analysis' means detailed examination of the elements or structure of something." +
            "<br><br>" +
            "(D) 'calculation' means the process of using mathematics; careful planning.",
        chinese_explanation: "(B) '直觉' 意味着立即理解某事的能力，无需有意识的推理。" +
            "<br><br>" +
            "(A) '逻辑' 意味着根据严格的有效性原则进行或评估的推理。" +
            "<br><br>" +
            "(C) '分析' 意味着对某事物的元素或结构进行详细检查。" +
            "<br><br>" +
            "(D) '计算' 意味着使用数学的过程；仔细计划。"
    },
    {
        id: 7,
        question: "The company's reputation for __________ ensured that all their transactions were conducted with the highest level of integrity.",
        chinese_question: "公司以 __________ 的声誉确保所有交易都以最高的诚信水平进行。",
        answers: [
            { option: "A", answer: "dishonesty", chinese_answer: "不诚实", chinese_romanization: "bù chéngshí" },
            { option: "B", answer: "fraud", chinese_answer: "欺诈", chinese_romanization: "qīzhà" },
            { option: "C", answer: "malfeasance", chinese_answer: "渎职", chinese_romanization: "dúzhí" },
            { option: "D", answer: "probity", chinese_answer: "廉正", chinese_romanization: "liánzhèng" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'probity' means the quality of having strong moral principles; honesty and decency." +
            "<br><br>" +
            "(A) 'dishonesty' means deceitfulness shown in someone's character or behavior." +
            "<br><br>" +
            "(B) 'fraud' means wrongful or criminal deception intended to result in financial or personal gain." +
            "<br><br>" +
            "(C) 'malfeasance' means wrongdoing, especially by a public official.",
        chinese_explanation: "(D) '廉正' 意思是具有强烈道德原则的品质；诚实和正直。" +
            "<br><br>" +
            "(A) '不诚实' 意思是某人性格或行为中表现出的欺骗性。" +
            "<br><br>" +
            "(B) '欺诈' 意思是旨在导致财务或个人利益的错误或犯罪欺骗。" +
            "<br><br>" +
            "(C) '渎职' 意思是特别是公职人员的违法行为。"
    },
    {
        id: 8,
        question: "The surgeon administered __________ to the patient to ensure a painless procedure during the operation.",
        chinese_question: "外科医生对患者施用了 __________，以确保手术过程中无痛。",
        answers: [
            { option: "A", answer: "analgesia", chinese_answer: "镇痛", chinese_romanization: "zhèntòng" },
            { option: "B", answer: "anesthesia", chinese_answer: "麻醉", chinese_romanization: "mázuì" },
            { option: "C", answer: "sedation", chinese_answer: "镇静", chinese_romanization: "zhènjìng" },
            { option: "D", answer: "numbness", chinese_answer: "麻木", chinese_romanization: "mámù" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'anesthesia' means insensitivity to pain, especially as artificially induced by the administration of gases or the injection of drugs before surgical operations." +
            "<br><br>" +
            "(A) 'analgesia' means the inability to feel pain." +
            "<br><br>" +
            "(C) 'sedation' means the administering of a sedative drug to produce a state of calm or sleep." +
            "<br><br>" +
            "(D) 'numbness' means the state of being deprived of physical sensation or the ability to move.",
        chinese_explanation: "(B) '麻醉' 一词意味着对疼痛的失去感觉，特别是通过手术前的气体施用或药物注射而人为诱导的。" +
            "<br><br>" +
            "(A) '镇痛' 意味着无法感受疼痛。" +
            "<br><br>" +
            "(C) '镇静' 意味着施用镇静药物以产生平静或睡眠状态。" +
            "<br><br>" +
            "(D) '麻木' 意味着失去身体感觉或移动能力的状态。"
    },
    {
        id: 9,
        question: "The idea that you need to work nonstop to be successful is a __________.",
        chinese_question: "你需要不间断地工作才能成功的想法是一个 __________。",
        answers: [
            { option: "A", answer: "myth", chinese_answer: "神话", chinese_romanization: "shénhuà" },
            { option: "B", answer: "truth", chinese_answer: "真理", chinese_romanization: "zhēnlǐ" },
            { option: "C", answer: "reality", chinese_answer: "现实", chinese_romanization: "xiànshí" },
            { option: "D", answer: "certainty", chinese_answer: "确定性", chinese_romanization: "quèdìngxìng" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'myth' metaphorically means a widely held but false belief or idea." + 
            "<br><br>" +
            "(B) 'truth' means that which is true or in accordance with fact or reality." + 
            "<br><br>" +
            "(C) 'reality' means the world or the state of things as they actually exist, as opposed to an idealistic or notional idea of them." + 
            "<br><br>" +
            "(D) 'certainty' means firm conviction that something is the case.",
        chinese_explanation: "(A) '神话' 比喻广泛持有但错误的信念或想法。" + 
            "<br><br>" +
            "(B) '真理' 意味着与事实或现实相符的事物。" + 
            "<br><br>" +
            "(C) '现实' 意味着事物实际上存在的世界或状态，与其理想主义或概念化的想法相对。" + 
            "<br><br>" +
            "(D) '确定性' 意味着对某事是这样的一种坚定信念。"
    },
    {
        id: 10,
        question: "The American ambassador met with his Canadian __________ to discuss trade agreements between the two nations.",
        chinese_question: "美国大使与他的加拿大 __________ 会面，讨论两国之间的贸易协定。",
        answers: [
            { option: "A", answer: "opponent", chinese_answer: "对手", chinese_romanization: "duìshǒu" },
            { option: "B", answer: "assistant", chinese_answer: "助手", chinese_romanization: "zhùshǒu" },
            { option: "C", answer: "counterpart", chinese_answer: "对应者", chinese_romanization: "duìyìng zhě" },
            { option: "D", answer: "rival", chinese_answer: "竞争者", chinese_romanization: "jìngzhēng zhě" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'counterpart' means a person or thing holding a position or performing a function that corresponds to that of another person or thing in another place." +
            "<br><br>" +
            "(A) 'opponent' means someone who competes against or fights another in a contest, game, or argument." +
            "<br><br>" +
            "(B) 'assistant' means a person who ranks below a senior person." +
            "<br><br>" +
            "(D) 'rival' means a person or thing competing with another for the same objective or for superiority in the same field.",
        chinese_explanation: "(C) '对应者' 一词意味着在另一个地方担任类似职位或执行类似功能的人或事物。" +
            "<br><br>" +
            "(A) '对手' 意味着在比赛、游戏或争论中与另一方竞争或战斗的人。" +
            "<br><br>" +
            "(B) '助手' 意味着职位低于高级人员的人。" +
            "<br><br>" +
            "(D) '竞争者' 意味着为相同目标或在相同领域争夺优势的人或事物。"
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
