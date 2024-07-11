// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "He looked at the messy room with __________, unable to hide his contempt for untidiness.",
        chinese_question: "他带着__________看着乱糟糟的房间，无法掩饰他对杂乱的轻视。",
        answers: [
            { option: "A", answer: "admiration", chinese_answer: "钦佩", chinese_romanization: "qīnpèi" },
            { option: "B", answer: "disdain", chinese_answer: "轻视", chinese_romanization: "qīngshì" },
            { option: "C", answer: "joy", chinese_answer: "喜悦", chinese_romanization: "xǐyuè" },
            { option: "D", answer: "interest", chinese_answer: "兴趣", chinese_romanization: "xìngqù" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'disdain' means the feeling that someone or something is unworthy of one's consideration or respect." +
            "<br><br>" +
            "(A) 'admiration' means respect and warm approval." +
            "<br><br>" +
            "(C) 'joy' means a feeling of great pleasure and happiness." +
            "<br><br>" +
            "(D) 'interest' means the feeling of wanting to know or learn about something or someone.",
        chinese_explanation: "(B) '轻视'一词意味着认为某人或某事不值得考虑或尊重的感觉。" +
            "<br><br>" +
            "(A) '钦佩' 意味着尊重和热烈的赞同。" +
            "<br><br>" +
            "(C) '喜悦' 意味着极大的快乐和幸福。" +
            "<br><br>" +
            "(D) '兴趣' 意味着想知道或了解某事或某人的感觉。"
    },
    {
        id: 2,
        question: "The soldiers were running low on __________ and needed to resupply before continuing their mission.",
        chinese_question: "士兵们的 __________ 快要用完了，需要补给才能继续执行任务。",
        answers: [
            { option: "A", answer: "food", chinese_answer: "食物", chinese_romanization: "shíwù" },
            { option: "B", answer: "clothing", chinese_answer: "衣服", chinese_romanization: "yīfú" },
            { option: "C", answer: "ammunition", chinese_answer: "弹药", chinese_romanization: "dànyào" },
            { option: "D", answer: "water", chinese_answer: "水", chinese_romanization: "shuǐ" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'ammunition' means a supply or quantity of bullets and shells." +
            "<br><br>" +
            "(A) 'food' means any nutritious substance that people or animals eat or drink or that plants absorb in order to maintain life and growth." +
            "<br><br>" +
            "(B) 'clothing' means items worn to cover the body." +
            "<br><br>" +
            "(D) 'water' means a colorless, transparent, odorless liquid that forms the seas, lakes, rivers, and rain and is the basis of the fluids of living organisms.",
        chinese_explanation: "(C) '弹药' 一词意味着子弹和炮弹的供应或数量。" +
            "<br><br>" +
            "(A) '食物' 意味着人类或动物吃或喝的任何有营养的物质，或植物吸收以维持生命和生长。" +
            "<br><br>" +
            "(B) '衣服' 意味着覆盖身体的物品。" +
            "<br><br>" +
            "(D) '水' 意味着一种无色、透明、无嗅的液体，形成海洋、湖泊、河流和雨水，是生物体液体的基础。"
    },
    {
        id: 3,
        question: "During the meeting, she shared a humourous __________ about her first day on the job, which lightened the mood.",
        chinese_question: "在会议期间，她分享了一个关于她第一天上班的幽默 __________，使气氛变得轻松。",
        answers: [
            { option: "A", answer: "lecture", chinese_answer: "演讲", chinese_romanization: "yǎnjiǎng" },
            { option: "B", answer: "argument", chinese_answer: "争论", chinese_romanization: "zhēnglùn" },
            { option: "C", answer: "anecdote", chinese_answer: "轶事", chinese_romanization: "yìshì" },
            { option: "D", answer: "complaint", chinese_answer: "抱怨", chinese_romanization: "bàoyuàn" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'anecdote' means a short and amusing or interesting story about a real incident or person." +
            "<br><br>" +
            "(A) 'lecture' means an educational talk to an audience, especially to students in a university or college." +
            "<br><br>" +
            "(B) 'argument' means an exchange of diverging or opposite views, typically a heated or angry one." +
            "<br><br>" +
            "(D) 'complaint' means a statement that something is unsatisfactory or unacceptable.",
        chinese_explanation: "(C) '轶事' 一词意味着关于真实事件或人物的简短有趣或有趣的故事。" +
            "<br><br>" +
            "(A) '演讲' 意味着向观众，特别是大学或学院的学生进行的教育性讲座。" +
            "<br><br>" +
            "(B) '争论' 意味着相反或对立观点的交流，通常是激烈或愤怒的交流。" +
            "<br><br>" +
            "(D) '抱怨' 意味着认为某事不令人满意或不可接受的声明。"
    },
    {
        id: 4,
        question: "Despite facing numerous challenges and __________, she remained determined to achieve her goals.",
        chinese_question: "尽管面临众多挑战和 __________，她仍然决心实现自己的目标。",
        answers: [
            { option: "A", answer: "prosperity", chinese_answer: "繁荣", chinese_romanization: "fánróng" },
            { option: "B", answer: "comfort", chinese_answer: "舒适", chinese_romanization: "shūshì" },
            { option: "C", answer: "adversity", chinese_answer: "逆境", chinese_romanization: "nìjìng" },
            { option: "D", answer: "ease", chinese_answer: "轻松", chinese_romanization: "qīngsōng" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'adversity' means difficulties; misfortune." +
            "<br><br>" +
            "(A) 'prosperity' means the state of being prosperous." +
            "<br><br>" +
            "(B) 'comfort' means a state of physical ease and freedom from pain or constraint." +
            "<br><br>" +
            "(D) 'ease' means absence of difficulty or effort.",
        chinese_explanation: "(C) '逆境' 一词意味着困难；不幸。" +
            "<br><br>" +
            "(A) '繁荣' 意味着繁荣的状态。" +
            "<br><br>" +
            "(B) '舒适' 意味着身体舒适和没有痛苦或约束的状态。" +
            "<br><br>" +
            "(D) '轻松' 意味着没有困难或努力。"
    },
    {
        id: 5,
        question: "The museum displayed an ancient __________ from the Mayan civilization, showcasing the advanced craftsmanship of the time.",
        chinese_question: "博物馆展出了来自玛雅文明的一件古老的 __________，展示了当时的先进工艺。",
        answers: [
            { option: "A", answer: "relic", chinese_answer: "文物", chinese_romanization: "wénwù" },
            { option: "B", answer: "manuscript", chinese_answer: "手稿", chinese_romanization: "shǒugǎo" },
            { option: "C", answer: "artifact", chinese_answer: "人工制品", chinese_romanization: "réngōng zhìpǐn" },
            { option: "D", answer: "painting", chinese_answer: "绘画", chinese_romanization: "huìhuà" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'artifact' means an object made by a human being, typically an item of cultural or historical interest." +
            "<br><br>" +
            "(A) 'relic' means an object surviving from an earlier time, especially one of historical or sentimental interest." +
            "<br><br>" +
            "(B) 'manuscript' means a book, document, or piece of music written by hand rather than typed or printed." +
            "<br><br>" +
            "(D) 'painting' means a picture made with paint.",
        chinese_explanation: "(C) '人工制品' 一词意味着人类制造的物体，通常是具有文化或历史意义的物品。" +
            "<br><br>" +
            "(A) '文物' 意味着从早期时期存留下来的物体，特别是具有历史或情感意义的物体。" +
            "<br><br>" +
            "(B) '手稿' 意味着手写而不是打字或印刷的书、文件或音乐作品。" +
            "<br><br>" +
            "(D) '绘画' 意味着用颜料制作的图画。"
    },
    {
        id: 6,
        question: "With a sense of __________, she opened the letter from the university, uncertain of the results of her application.",
        chinese_question: "带着一丝 __________ 的感觉，她打开了大学的信封，不确定申请结果如何。",
        answers: [
            { option: "A", answer: "confidence", chinese_answer: "自信", chinese_romanization: "zìxìn" },
            { option: "B", answer: "excitement", chinese_answer: "兴奋", chinese_romanization: "xīngfèn" },
            { option: "C", answer: "trepidation", chinese_answer: "恐惧", chinese_romanization: "kǒngjù" },
            { option: "D", answer: "certainty", chinese_answer: "确定性", chinese_romanization: "quèdìngxìng" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'trepidation' means a feeling of fear or agitation about something that may happen." +
            "<br><br>" +
            "(A) 'confidence' means the feeling or belief that one can rely on someone or something; firm trust." +
            "<br><br>" +
            "(B) 'excitement' means a feeling of great enthusiasm and eagerness." +
            "<br><br>" +
            "(D) 'certainty' means firm conviction that something is the case.",
        chinese_explanation: "(C) '恐惧' 意味着对可能发生的事情感到害怕或不安。" +
            "<br><br>" +
            "(A) '自信' 意味着相信自己可以依赖某人或某事；坚定的信任。" +
            "<br><br>" +
            "(B) '兴奋' 意味着极大的热情和渴望的感觉。" +
            "<br><br>" +
            "(D) '确定性' 意味着坚定地相信某事是真实的。"
    },
    {
        id: 7,
        question: "At the party, she ran into an old __________ from her university days whom she hadn't seen in years.",
        chinese_question: "在聚会上，她遇到了一个大学时的老 __________，已经多年没见了。",
        answers: [
            { option: "A", answer: "stranger", chinese_answer: "陌生人", chinese_romanization: "mòshēngrén" },
            { option: "B", answer: "acquaintance", chinese_answer: "熟人", chinese_romanization: "shúrén" },
            { option: "C", answer: "enemy", chinese_answer: "敌人", chinese_romanization: "dírén" },
            { option: "D", answer: "friend", chinese_answer: "朋友", chinese_romanization: "péngyǒu" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'acquaintance' means a person one knows slightly, but who is not a close friend." +
            "<br><br>" +
            "(A) 'stranger' means a person whom one does not know or with whom one is not familiar." +
            "<br><br>" +
            "(C) 'enemy' means a person who is actively opposed or hostile to someone or something." +
            "<br><br>" +
            "(D) 'friend' means a person with whom one has a bond of mutual affection.",
        chinese_explanation: "(B) '熟人' 一词意味着一个人稍微认识，但不是亲密的朋友。" +
            "<br><br>" +
            "(A) '陌生人' 意味着一个人不认识或不熟悉的人。" +
            "<br><br>" +
            "(C) '敌人' 意味着一个积极反对或敌对某人或某事的人。" +
            "<br><br>" +
            "(D) '朋友' 意味着一个与自己有相互情感联系的人。"
    },
    {
        id: 8,
        question: "The crowd erupted in __________ when their team won the championship.",
        chinese_question: "当他们的队伍赢得冠军时，人群爆发出 __________。",
        answers: [
            { option: "A", answer: "jubilation", chinese_answer: "欢腾", chinese_romanization: "huānténg" },
            { option: "B", answer: "sorrow", chinese_answer: "悲伤", chinese_romanization: "bēishāng" },
            { option: "C", answer: "apathy", chinese_answer: "冷漠", chinese_romanization: "lěngmò" },
            { option: "D", answer: "silence", chinese_answer: "沉默", chinese_romanization: "chénmò" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'jubilation' means a feeling of great happiness and triumph." + 
            "<br><br>" +
            "(B) 'sorrow' means a feeling of deep distress caused by loss, disappointment, or other misfortune suffered by oneself or others." + 
            "<br><br>" +
            "(C) 'apathy' means lack of interest, enthusiasm, or concern." + 
            "<br><br>" +
            "(D) 'silence' means complete absence of sound.",
        chinese_explanation: "(A) '欢腾' 意味着极大的幸福和胜利感。" + 
            "<br><br>" +
            "(B) '悲伤' 意味着因自己或他人遭受的损失、失望或其他不幸而引起的深切痛苦感。" + 
            "<br><br>" +
            "(C) '冷漠' 意味着缺乏兴趣、热情或关心。" + 
            "<br><br>" +
            "(D) '沉默' 意味着完全没有声音。"
    },
    {
        id: 9,
        question: "As the __________ of her own life, she decided to make some drastic changes.",
        chinese_question: "作为自己生活的 __________，她决定做出一些重大改变。",
        answers: [
            { option: "A", answer: "narrator", chinese_answer: "叙述者", chinese_romanization: "xùshù zhě" },
            { option: "B", answer: "follower", chinese_answer: "追随者", chinese_romanization: "zhuīsuí zhě" },
            { option: "C", answer: "bystander", chinese_answer: "旁观者", chinese_romanization: "pángguān zhě" },
            { option: "D", answer: "spectator", chinese_answer: "观众", chinese_romanization: "guānzhòng" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'narrator' metaphorically means someone who controls or directs the course of events." + 
            "<br><br>" +
            "(B) 'follower' means a person who supports and admires a particular person or set of ideas." + 
            "<br><br>" +
            "(C) 'bystander' means a person who is present at an event or incident but does not take part." + 
            "<br><br>" +
            "(D) 'spectator' means a person who watches at a show, game, or other event.",
        chinese_explanation: "(A) '叙述者' 比喻控制或引导事件进程的人。" + 
            "<br><br>" +
            "(B) '追随者' 意味着支持和钦佩特定人或一套想法的人。" + 
            "<br><br>" +
            "(C) '旁观者' 意味着在事件或事故中在场但不参与的人。" + 
            "<br><br>" +
            "(D) '观众' 意味着在表演、比赛或其他活动中观看的人。"
    },
    {
        id: 10,
        question: "She emerged from the __________ of the surgery stronger and more determined.",
        chinese_question: "她从手术的 __________ 中走出来，更加坚强和坚定。",
        answers: [
            { option: "A", answer: "ordeal", chinese_answer: "考验", chinese_romanization: "kǎoyàn" },
            { option: "B", answer: "success", chinese_answer: "成功", chinese_romanization: "chénggōng" },
            { option: "C", answer: "triumph", chinese_answer: "胜利", chinese_romanization: "shènglì" },
            { option: "D", answer: "pleasure", chinese_answer: "愉悦", chinese_romanization: "yúyuè" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'ordeal' metaphorically means a severe trial or experience." +
            "<br><br>" +
            "(B) 'success' means the accomplishment of an aim or purpose." +
            "<br><br>" +
            "(C) 'triumph' means a great victory or achievement." +
            "<br><br>" +
            "(D) 'pleasure' means a feeling of happy satisfaction and enjoyment.",
        chinese_explanation: "(A) '考验' 比喻严酷的试炼或经历。" +
            "<br><br>" +
            "'成功' 意味着实现一个目标或目的。" +
            "<br><br>" +
            "'胜利' 意味着伟大的胜利或成就。" +
            "<br><br>" +
            "'愉悦' 意味着幸福的满足和享受的感觉。"
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
