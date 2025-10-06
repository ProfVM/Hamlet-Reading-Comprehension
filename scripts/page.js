//=========================================
// File name: page_NNNNN.js
//-----------------------------------------
// Project : QuizFaber 4.1.9
// Licence : GNU General Public License v3.0
// Author  : Luca Galli
// Email   : info@quizfaber.com
//-----------------------------------------
// Script for NNNNN-th question
//=========================================

var allInitQuestionFunctions = new Array (
    InitQuestion1,
    InitQuestion2,
    InitQuestion3,
    InitQuestion4,
    InitQuestion5,
    InitQuestion6,
    InitQuestion7,
    InitQuestion8,
    InitQuestion9,
    InitQuestion10,
    InitQuestion11,
    InitQuestion12,
    InitQuestion13,
);



$(document).ready(function ()
{
	const questionIndex = 0;
	const questionTime = 0;

	PageLoad(questionIndex, questionTime);

	$('#comment11').keyup(UpdateCount12);$('#comment11').keydown(UpdateCount12);$('#comment11').focus(function() { if (quiz) { quiz.currentQuestionIndex = 11; } });$('#counter11').text(140);
$('#comment12').keyup(UpdateCount13);$('#comment12').keydown(UpdateCount13);$('#comment12').focus(function() { if (quiz) { quiz.currentQuestionIndex = 12; } });$('#counter12').text(140);

});

$(window).on("beforeunload", function ()
{
	PageUnload();
	window.scrollTo(0, 0);
});

$(window).on("scroll", function ()
{
	PageOnScroll();
});


/* Code generated function */
function InitQuestion1()
{
    const type = QMAKE_BOOLEAN;
    const questionIndex = 0;
    var choice, valuation, noChoice = false;;
    var weight = DecodeNumber('pCSsMGJj/PY=', 292, 0, 99999);
    var numOfAnswers = 10;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('pCSsMGJj/PY=', 292, -1000, 1000),DecodeDecimal('jIj7NkANzVA=', 292, -1000, 1000),DecodeDecimal('jIj7NkANzVA=', 292, -1000, 1000));
    question.num = 1;
    question.answers.length = 0;
    question.shortTextQuestion = "Make your choice.";
    choice = GetBooleanChoice(questionIndex,0);
    noChoice = noChoice || !IsBooleanChoiceSelected(questionIndex, 0);
    valuation = DecodeNumber('xP5fM1dTZUc=', 292, -1, 1);
    if (valuation === -2) PrintWrongKeyword(questionIndex);
    var answer0 = new Answer(choice, valuation, 1, 0, '');
    answer0.shortTextAnswer = "The play takes place in the city of Venice. ";
    question.answers.push(answer0);
    choice = GetBooleanChoice(questionIndex,1);
    noChoice = noChoice || !IsBooleanChoiceSelected(questionIndex, 1);
    valuation = DecodeNumber('pCSsMGJj/PY=', 294, -1, 1);
    if (valuation === -2) PrintWrongKeyword(questionIndex);
    var answer1 = new Answer(choice, valuation, 1, 0, '');
    answer1.shortTextAnswer = "The Ghost of King Hamlet tells his son that he died of a snakebite. ";
    question.answers.push(answer1);
    choice = GetBooleanChoice(questionIndex,2);
    noChoice = noChoice || !IsBooleanChoiceSelected(questionIndex, 2);
    valuation = DecodeNumber('+fHCFgfyIaA=', 296, -1, 1);
    if (valuation === -2) PrintWrongKeyword(questionIndex);
    var answer2 = new Answer(choice, valuation, 1, 0, '');
    answer2.shortTextAnswer = "Claudius is King Hamlet's brother.";
    question.answers.push(answer2);
    choice = GetBooleanChoice(questionIndex,3);
    noChoice = noChoice || !IsBooleanChoiceSelected(questionIndex, 3);
    valuation = DecodeNumber('+fHCFgfyIaA=', 298, -1, 1);
    if (valuation === -2) PrintWrongKeyword(questionIndex);
    var answer3 = new Answer(choice, valuation, 1, 0, '');
    answer3.shortTextAnswer = "Hamlet's famous \"To be, or not to be\" soliloquy is about his desire for military success. ";
    question.answers.push(answer3);
    choice = GetBooleanChoice(questionIndex,4);
    noChoice = noChoice || !IsBooleanChoiceSelected(questionIndex, 4);
    valuation = DecodeNumber('vAKeWIevpwM=', 300, -1, 1);
    if (valuation === -2) PrintWrongKeyword(questionIndex);
    var answer4 = new Answer(choice, valuation, 1, 0, '');
    answer4.shortTextAnswer = "Hamlet pretends to be mad (adopts an \"antic disposition\") to observe his uncle's actions.";
    question.answers.push(answer4);
    choice = GetBooleanChoice(questionIndex,5);
    noChoice = noChoice || !IsBooleanChoiceSelected(questionIndex, 5);
    valuation = DecodeNumber('vAKeWIevpwM=', 302, -1, 1);
    if (valuation === -2) PrintWrongKeyword(questionIndex);
    var answer5 = new Answer(choice, valuation, 1, 0, '');
    answer5.shortTextAnswer = "\"The Mousetrap\" is the name of the duel between Hamlet and Laertes. ";
    question.answers.push(answer5);
    choice = GetBooleanChoice(questionIndex,6);
    noChoice = noChoice || !IsBooleanChoiceSelected(questionIndex, 6);
    valuation = DecodeNumber('U2P13cBcwD0=', 304, -1, 1);
    if (valuation === -2) PrintWrongKeyword(questionIndex);
    var answer6 = new Answer(choice, valuation, 1, 0, '');
    answer6.shortTextAnswer = "Claudius's reaction to the play-within-a-play confirms his guilt to Hamlet. ";
    question.answers.push(answer6);
    choice = GetBooleanChoice(questionIndex,7);
    noChoice = noChoice || !IsBooleanChoiceSelected(questionIndex, 7);
    valuation = DecodeNumber('ncbEBdc6Fsw=', 306, -1, 1);
    if (valuation === -2) PrintWrongKeyword(questionIndex);
    var answer7 = new Answer(choice, valuation, 1, 0, '');
    answer7.shortTextAnswer = "Polonius is accidentally killed by Hamlet while hiding behind a tapestry.";
    question.answers.push(answer7);
    choice = GetBooleanChoice(questionIndex,8);
    noChoice = noChoice || !IsBooleanChoiceSelected(questionIndex, 8);
    valuation = DecodeNumber('ufyakmpqYpY=', 308, -1, 1);
    if (valuation === -2) PrintWrongKeyword(questionIndex);
    var answer8 = new Answer(choice, valuation, 1, 0, '');
    answer8.shortTextAnswer = "Ophelia's brother, Laertes, seeks revenge for the deaths of his father and sister. ";
    question.answers.push(answer8);
    choice = GetBooleanChoice(questionIndex,9);
    noChoice = noChoice || !IsBooleanChoiceSelected(questionIndex, 9);
    valuation = DecodeNumber('wdC1AOTGD0o=', 310, -1, 1);
    if (valuation === -2) PrintWrongKeyword(questionIndex);
    var answer9 = new Answer(choice, valuation, 1, 0, '');
    answer9.shortTextAnswer = "At the end of the play, the kingdom of Denmark is inherited by a foreign ruler named Fortinbras. ";
    question.answers.push(answer9);
    question.noChoice = noChoice;
    return question;

}
/* Code generated function */
function InitQuestion2()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 1;
    var weight = DecodeNumber('T0vbgiHaBFk=', 302, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('T0vbgiHaBFk=', 302, -1000, 1000),DecodeDecimal('fyIMgYvGEYA=', 302, -1000, 1000),DecodeDecimal('fyIMgYvGEYA=', 302, -1000, 1000));
    question.answers.length = 0;
    question.num = 2;
    question.isSingleAns = true;
    question.shortTextQuestion = "What is the setting of the play described in the passage? ";
    question.timeToAnswer = 0;
    var choice = GetSingleAnswerChoice(questionIndex);
    if (choice === 0) question.noChoice = true;
    var valuation1 = DecodeNumber('T0vbgiHaBFk=', 304, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var answer1 = new Answer((choice == 1 ? 1 : 0), valuation1, 1, 0, '');
    answer1.shortTextAnswer = "The city of London ";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('ncbEBdc6Fsw=', 306, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var answer2 = new Answer((choice == 2 ? 1 : 0), valuation2, 1, 0, '');
    answer2.shortTextAnswer = "The royal court of Elsinore ";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('ncbEBdc6Fsw=', 308, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var answer3 = new Answer((choice == 3 ? 1 : 0), valuation3, 1, 0, '');
    answer3.shortTextAnswer = "The Wittenberg University";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('ufyakmpqYpY=', 310, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var answer4 = new Answer((choice == 4 ? 1 : 0), valuation4, 1, 0, '');
    answer4.shortTextAnswer = "The kingdom of Norway ";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion3()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 2;
    var weight = DecodeNumber('Lj4afkxj3x8=', 312, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('Lj4afkxj3x8=', 312, -1000, 1000),DecodeDecimal('zsuJR4NkYF4=', 312, -1000, 1000),DecodeDecimal('zsuJR4NkYF4=', 312, -1000, 1000));
    question.answers.length = 0;
    question.num = 3;
    question.isSingleAns = true;
    question.shortTextQuestion = "The Ghost charges Hamlet with the duty of: ";
    question.timeToAnswer = 0;
    var choice = GetSingleAnswerChoice(questionIndex);
    if (choice === 0) question.noChoice = true;
    var valuation1 = DecodeNumber('Lj4afkxj3x8=', 314, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var answer1 = new Answer((choice == 1 ? 1 : 0), valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Forgiving Claudius and Gertrude ";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('Q+/jbVuRYr4=', 316, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var answer2 = new Answer((choice == 2 ? 1 : 0), valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Defending Denmark from Fortinbras ";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('dzHhFUfJ3q0=', 318, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var answer3 = new Answer((choice == 3 ? 1 : 0), valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Marrying Ophelia immediately";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('wTo3i4rtNUU=', 320, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var answer4 = new Answer((choice == 4 ? 1 : 0), valuation4, 1, 0, '');
    answer4.shortTextAnswer = "Avenging his father's murder ";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion4()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 3;
    var weight = DecodeNumber('dWSeYsussxc=', 322, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('dWSeYsussxc=', 322, -1000, 1000),DecodeDecimal('lKTxwX4Gkn8=', 322, -1000, 1000),DecodeDecimal('lKTxwX4Gkn8=', 322, -1000, 1000));
    question.answers.length = 0;
    question.num = 4;
    question.isSingleAns = true;
    question.shortTextQuestion = "Which phrase best summarizes the core dilemma explored in the \"To be, or not to be\" soliloquy? ";
    question.timeToAnswer = 0;
    var choice = GetSingleAnswerChoice(questionIndex);
    if (choice === 0) question.noChoice = true;
    var valuation1 = DecodeNumber('dWSeYsussxc=', 324, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var answer1 = new Answer((choice == 1 ? 1 : 0), valuation1, 1, 0, '');
    answer1.shortTextAnswer = "The cost of war vs. the benefit of peace ";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('7XQoC4F6F7g=', 326, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var answer2 = new Answer((choice == 2 ? 1 : 0), valuation2, 1, 0, '');
    answer2.shortTextAnswer = "The struggle between thought and action ";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('gCxptck0Hfk=', 328, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var answer3 = new Answer((choice == 3 ? 1 : 0), valuation3, 1, 0, '');
    answer3.shortTextAnswer = "The comparison between life's suffering and the uncertainty of death";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('gCxptck0Hfk=', 330, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var answer4 = new Answer((choice == 4 ? 1 : 0), valuation4, 1, 0, '');
    answer4.shortTextAnswer = "The fear of Claudius's power ";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion5()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 4;
    var weight = DecodeNumber('5IO36TMP54Y=', 332, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('5IO36TMP54Y=', 332, -1000, 1000),DecodeDecimal('CfeqXhDq9rs=', 332, -1000, 1000),DecodeDecimal('CfeqXhDq9rs=', 332, -1000, 1000));
    question.answers.length = 0;
    question.num = 5;
    question.isSingleAns = true;
    question.shortTextQuestion = "What is the central reason Hamlet adopts an \"antic disposition\"? ";
    question.timeToAnswer = 0;
    var choice = GetSingleAnswerChoice(questionIndex);
    if (choice === 0) question.noChoice = true;
    var valuation1 = DecodeNumber('5IO36TMP54Y=', 334, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var answer1 = new Answer((choice == 1 ? 1 : 0), valuation1, 1, 0, '');
    answer1.shortTextAnswer = "He genuinely goes insane from grief. ";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('UpJsF6LVE7s=', 336, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var answer2 = new Answer((choice == 2 ? 1 : 0), valuation2, 1, 0, '');
    answer2.shortTextAnswer = "To mask his intentions and observe Claudius. ";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('UpJsF6LVE7s=', 338, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var answer3 = new Answer((choice == 3 ? 1 : 0), valuation3, 1, 0, '');
    answer3.shortTextAnswer = "To prove he is unfit to be king.";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('la34Ngz7xnc=', 340, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var answer4 = new Answer((choice == 4 ? 1 : 0), valuation4, 1, 0, '');
    answer4.shortTextAnswer = "To distract Ophelia from his revenge plan. ";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion6()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 5;
    var weight = DecodeNumber('31UHpz0MMDY=', 342, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('31UHpz0MMDY=', 342, -1000, 1000),DecodeDecimal('cQT6q5JsRAU=', 342, -1000, 1000),DecodeDecimal('cQT6q5JsRAU=', 342, -1000, 1000));
    question.answers.length = 0;
    question.num = 6;
    question.isSingleAns = true;
    question.shortTextQuestion = "What is the play-within-a-play known as? ";
    question.timeToAnswer = 0;
    var choice = GetSingleAnswerChoice(questionIndex);
    if (choice === 0) question.noChoice = true;
    var valuation1 = DecodeNumber('31UHpz0MMDY=', 344, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var answer1 = new Answer((choice == 1 ? 1 : 0), valuation1, 1, 0, '');
    answer1.shortTextAnswer = "The Regicide's Tale ";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('BIBBstnY+gY=', 346, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var answer2 = new Answer((choice == 2 ? 1 : 0), valuation2, 1, 0, '');
    answer2.shortTextAnswer = "The Tragedy of Gonzago ";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('MMUYvTmfCBY=', 348, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var answer3 = new Answer((choice == 3 ? 1 : 0), valuation3, 1, 0, '');
    answer3.shortTextAnswer = "The Revenge of the Prince";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('r9ij7DXIMvI=', 350, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var answer4 = new Answer((choice == 4 ? 1 : 0), valuation4, 1, 0, '');
    answer4.shortTextAnswer = "The Mousetrap ";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion7()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 6;
    var weight = DecodeNumber('CZ+pjLExRJw=', 352, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('CZ+pjLExRJw=', 352, -1000, 1000),DecodeDecimal('FMSC2AAgbXI=', 352, -1000, 1000),DecodeDecimal('FMSC2AAgbXI=', 352, -1000, 1000));
    question.answers.length = 0;
    question.num = 7;
    question.isSingleAns = true;
    question.shortTextQuestion = "Who does Hamlet accidentally kill during a confrontation with his mother? ";
    question.timeToAnswer = 0;
    var choice = GetSingleAnswerChoice(questionIndex);
    if (choice === 0) question.noChoice = true;
    var valuation1 = DecodeNumber('CZ+pjLExRJw=', 354, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var answer1 = new Answer((choice == 1 ? 1 : 0), valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Claudius ";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('zs7FZEAlBME=', 356, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var answer2 = new Answer((choice == 2 ? 1 : 0), valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Laertes ";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('iNy+U6tpp0U=', 358, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var answer3 = new Answer((choice == 3 ? 1 : 0), valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Fortinbras";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('yL27RGAImaY=', 360, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var answer4 = new Answer((choice == 4 ? 1 : 0), valuation4, 1, 0, '');
    answer4.shortTextAnswer = "Polonius ";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion8()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 7;
    var weight = DecodeNumber('RksdMKt39gQ=', 362, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('RksdMKt39gQ=', 362, -1000, 1000),DecodeDecimal('ab9nY8KqMY0=', 362, -1000, 1000),DecodeDecimal('ab9nY8KqMY0=', 362, -1000, 1000));
    question.answers.length = 0;
    question.num = 8;
    question.isSingleAns = true;
    question.shortTextQuestion = "What ultimately causes Ophelia to go mad and drown?";
    question.timeToAnswer = 0;
    var choice = GetSingleAnswerChoice(questionIndex);
    if (choice === 0) question.noChoice = true;
    var valuation1 = DecodeNumber('BbYeq+LL5bM=', 364, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var answer1 = new Answer((choice == 1 ? 1 : 0), valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Grief over the loss of her father and her love ";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('BbYeq+LL5bM=', 366, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var answer2 = new Answer((choice == 2 ? 1 : 0), valuation2, 1, 0, '');
    answer2.shortTextAnswer = "The failure of her relationship with Hamlet ";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('n+rhc4dXY8k=', 368, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var answer3 = new Answer((choice == 3 ? 1 : 0), valuation3, 1, 0, '');
    answer3.shortTextAnswer = "A curse placed upon her family";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('DOVmXMuxh3g=', 370, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var answer4 = new Answer((choice == 4 ? 1 : 0), valuation4, 1, 0, '');
    answer4.shortTextAnswer = "Fear of Claudius and Gertrude ";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion9()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 8;
    var weight = DecodeNumber('KHlZvtG8Dns=', 372, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('KHlZvtG8Dns=', 372, -1000, 1000),DecodeDecimal('es+WPIYOliA=', 372, -1000, 1000),DecodeDecimal('es+WPIYOliA=', 372, -1000, 1000));
    question.answers.length = 0;
    question.num = 9;
    question.isSingleAns = true;
    question.shortTextQuestion = "What two methods does Claudius plan to use to ensure Hamlet's death in the final duel? ";
    question.timeToAnswer = 0;
    var choice = GetSingleAnswerChoice(questionIndex);
    if (choice === 0) question.noChoice = true;
    var valuation1 = DecodeNumber('KHlZvtG8Dns=', 374, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var answer1 = new Answer((choice == 1 ? 1 : 0), valuation1, 1, 0, '');
    answer1.shortTextAnswer = "A firing squad and a sudden stabbing ";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('GAws6vXSIzc=', 376, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var answer2 = new Answer((choice == 2 ? 1 : 0), valuation2, 1, 0, '');
    answer2.shortTextAnswer = "A poisoned sword and a poisoned drink ";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('GAws6vXSIzc=', 378, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var answer3 = new Answer((choice == 3 ? 1 : 0), valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Banishment and starvation";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('fibSfDmEL8k=', 380, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var answer4 = new Answer((choice == 4 ? 1 : 0), valuation4, 1, 0, '');
    answer4.shortTextAnswer = "An ambush and a falling chandelier ";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion10()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 9;
    var weight = DecodeNumber('piF0dKhRPc0=', 382, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('piF0dKhRPc0=', 382, -1000, 1000),DecodeDecimal('OZXGVat+tog=', 382, -1000, 1000),DecodeDecimal('OZXGVat+tog=', 382, -1000, 1000));
    question.answers.length = 0;
    question.num = 10;
    question.isSingleAns = true;
    question.shortTextQuestion = "Who mistakenly drinks the poisoned cup in the final scene? ";
    question.timeToAnswer = 0;
    var choice = GetSingleAnswerChoice(questionIndex);
    if (choice === 0) question.noChoice = true;
    var valuation1 = DecodeNumber('piF0dKhRPc0=', 384, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var answer1 = new Answer((choice == 1 ? 1 : 0), valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Hamlet ";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('a8cQP0TgLAk=', 386, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var answer2 = new Answer((choice == 2 ? 1 : 0), valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Claudius ";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('I1jm1yeJ83Y=', 388, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var answer3 = new Answer((choice == 3 ? 1 : 0), valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Laertes";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('KZIslf+jvOo=', 390, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var answer4 = new Answer((choice == 4 ? 1 : 0), valuation4, 1, 0, '');
    answer4.shortTextAnswer = "Gertrude ";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion11()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 10;
    var weight = DecodeNumber('B/kn6YWHPhI=', 392, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('B/kn6YWHPhI=', 392, -1000, 1000),DecodeDecimal('q+OChmFOI3A=', 392, -1000, 1000),DecodeDecimal('q+OChmFOI3A=', 392, -1000, 1000));
    question.answers.length = 0;
    question.num = 11;
    question.isSingleAns = true;
    question.shortTextQuestion = "The passage states that the play is a powerful examination of the: ";
    question.timeToAnswer = 0;
    var choice = GetSingleAnswerChoice(questionIndex);
    if (choice === 0) question.noChoice = true;
    var valuation1 = DecodeNumber('B/kn6YWHPhI=', 394, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var answer1 = new Answer((choice == 1 ? 1 : 0), valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Importance of honoring the dead ";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('t0C0jWR1hZA=', 396, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var answer2 = new Answer((choice == 2 ? 1 : 0), valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Value of quick and decisive action ";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('iIwIhxkIOSs=', 398, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var answer3 = new Answer((choice == 3 ? 1 : 0), valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Ease of moral choice";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('N7a55vpIYI8=', 400, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var answer4 = new Answer((choice == 4 ? 1 : 0), valuation4, 1, 0, '');
    answer4.shortTextAnswer = "Paralyzing nature of thought in the face of action ";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion12()
{
    const type = QMAKE_OPENANS;
    const questionIndex = 11;
    var weight = DecodeNumber('2BFbygbaXuk=', 402, 0, 99999);
    var numOfAnswers = 0;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('KdPikbDlFmU=', 402, -1000, 1000),DecodeDecimal('ESS1HBokcHw=', 402, -1000, 1000),DecodeDecimal('ESS1HBokcHw=', 402, -1000, 1000));
    question.num = 12;
    question.answers.length = 0;
    question.shortTextQuestion = "Identify and explain the causal chain of events leading from Claudius's initial crime to the death of Polonius.Your answer should mention the initial crime, the Ghost's command, Hamlet's resulting behavior, and the immediate action that leads to Polonius's death. (100/120 words)";
    var comment = $('#comment' + questionIndex).val();
    var answer = new Answer(0,0,1,0,comment);
    question.answers.push(answer);
    return question;

}
/* Code generated function */
function InitQuestion13()
{
    const type = QMAKE_OPENANS;
    const questionIndex = 12;
    var weight = DecodeNumber('vvGxzqawKws=', 412, 0, 99999);
    var numOfAnswers = 0;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('lX3ndhyZ/Bo=', 412, -1000, 1000),DecodeDecimal('H1NV6tHXGA8=', 412, -1000, 1000),DecodeDecimal('H1NV6tHXGA8=', 412, -1000, 1000));
    question.num = 13;
    question.answers.length = 0;
    question.shortTextQuestion = "Discuss the symbolic role of Fortinbras in the context of the play's ending. What does his inheritance of the kingdom suggest about the themes of order and corruption explored throughout the tragedy? Your answer should mention who Fortinbras is, why he arrives, and what the transfer of leadership signifies. (100/120 words)";
    var comment = $('#comment' + questionIndex).val();
    var answer = new Answer(0,0,1,0,comment);
    question.answers.push(answer);
    return question;

}


/* Code generated function */
function ClearQuestion1()
{
    const questionIndex = 0;
    ClearBooleanChoice(questionIndex,0);
    ClearBooleanChoice(questionIndex,1);
    ClearBooleanChoice(questionIndex,2);
    ClearBooleanChoice(questionIndex,3);
    ClearBooleanChoice(questionIndex,4);
    ClearBooleanChoice(questionIndex,5);
    ClearBooleanChoice(questionIndex,6);
    ClearBooleanChoice(questionIndex,7);
    ClearBooleanChoice(questionIndex,8);
    ClearBooleanChoice(questionIndex,9);

}
/* Code generated function */
function ClearQuestion2()
{
    const questionIndex = 1;
    ClearSingleAnswerChoices(questionIndex);

}
/* Code generated function */
function ClearQuestion3()
{
    const questionIndex = 2;
    ClearSingleAnswerChoices(questionIndex);

}
/* Code generated function */
function ClearQuestion4()
{
    const questionIndex = 3;
    ClearSingleAnswerChoices(questionIndex);

}
/* Code generated function */
function ClearQuestion5()
{
    const questionIndex = 4;
    ClearSingleAnswerChoices(questionIndex);

}
/* Code generated function */
function ClearQuestion6()
{
    const questionIndex = 5;
    ClearSingleAnswerChoices(questionIndex);

}
/* Code generated function */
function ClearQuestion7()
{
    const questionIndex = 6;
    ClearSingleAnswerChoices(questionIndex);

}
/* Code generated function */
function ClearQuestion8()
{
    const questionIndex = 7;
    ClearSingleAnswerChoices(questionIndex);

}
/* Code generated function */
function ClearQuestion9()
{
    const questionIndex = 8;
    ClearSingleAnswerChoices(questionIndex);

}
/* Code generated function */
function ClearQuestion10()
{
    const questionIndex = 9;
    ClearSingleAnswerChoices(questionIndex);

}
/* Code generated function */
function ClearQuestion11()
{
    const questionIndex = 10;
    ClearSingleAnswerChoices(questionIndex);

}
/* Code generated function */
function ClearQuestion12()
{
    const questionIndex = 11;
    ClearOpenAns(questionIndex);

}
/* Code generated function */
function ClearQuestion13()
{
    const questionIndex = 12;
    ClearOpenAns(questionIndex);

}


/* Code generated function */
function UpdateCount12()
{
    var cs = options.openAnsNumChars - countOnlyCharsInText($(this).val());
    var cSkipped = $(this).val().length - countOnlyCharsInText($(this).val());
    var threshold = Math.round(options.openAnsNumChars / 10);
    var counter = $('#counter11');
    counter.text(cs);
    $('#comment11').attr('maxlength',140+cSkipped);
    if (cs <= threshold) counter.addClass('openAnsWarnCounter'); else counter.removeClass('openAnsWarnCounter');

}

/* Code generated function */
function UpdateCount13()
{
    var cs = options.openAnsNumChars - countOnlyCharsInText($(this).val());
    var cSkipped = $(this).val().length - countOnlyCharsInText($(this).val());
    var threshold = Math.round(options.openAnsNumChars / 10);
    var counter = $('#counter12');
    counter.text(cs);
    $('#comment12').attr('maxlength',140+cSkipped);
    if (cs <= threshold) counter.addClass('openAnsWarnCounter'); else counter.removeClass('openAnsWarnCounter');

}





