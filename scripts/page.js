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
    InitQuestion14,
    InitQuestion15,
    InitQuestion16,
    InitQuestion17,
    InitQuestion18,
    InitQuestion19,
    InitQuestion20,
);



$(document).ready(function ()
{
	const questionIndex = 0;
	const questionTime = 0;

	PageLoad(questionIndex, questionTime);

	$('#comment11').keyup(UpdateCount12);$('#comment11').keydown(UpdateCount12);$('#comment11').focus(function() { if (quiz) { quiz.currentQuestionIndex = 11; } });$('#counter11').text(140);
$('#comment12').keyup(UpdateCount13);$('#comment12').keydown(UpdateCount13);$('#comment12').focus(function() { if (quiz) { quiz.currentQuestionIndex = 12; } });$('#counter12').text(140);
$('#comment13').keyup(UpdateCount14);$('#comment13').keydown(UpdateCount14);$('#comment13').focus(function() { if (quiz) { quiz.currentQuestionIndex = 13; } });$('#counter13').text(140);
$('#comment14').keyup(UpdateCount15);$('#comment14').keydown(UpdateCount15);$('#comment14').focus(function() { if (quiz) { quiz.currentQuestionIndex = 14; } });$('#counter14').text(140);
$('#comment15').keyup(UpdateCount16);$('#comment15').keydown(UpdateCount16);$('#comment15').focus(function() { if (quiz) { quiz.currentQuestionIndex = 15; } });$('#counter15').text(140);
$('#comment16').keyup(UpdateCount17);$('#comment16').keydown(UpdateCount17);$('#comment16').focus(function() { if (quiz) { quiz.currentQuestionIndex = 16; } });$('#counter16').text(140);
$('#comment18').keyup(UpdateCount19);$('#comment18').keydown(UpdateCount19);$('#comment18').focus(function() { if (quiz) { quiz.currentQuestionIndex = 18; } });$('#counter18').text(140);
$('#comment19').keyup(UpdateCount20);$('#comment19').keydown(UpdateCount20);$('#comment19').focus(function() { if (quiz) { quiz.currentQuestionIndex = 19; } });$('#counter19').text(140);

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
    var weight = DecodeNumber('K2UP9Juxipk=', 833, 0, 99999);
    var numOfAnswers = 10;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('jNzKoTeZdSg=', 833, -1000, 1000),DecodeDecimal('hfAs5NfkZHc=', 833, -1000, 1000),DecodeDecimal('hfAs5NfkZHc=', 833, -1000, 1000));
    question.num = 1;
    question.answers.length = 0;
    question.shortTextQuestion = "Make your choice.";
    choice = GetBooleanChoice(questionIndex,0);
    noChoice = noChoice || !IsBooleanChoiceSelected(questionIndex, 0);
    valuation = DecodeNumber('A+z+hyA67TI=', 833, -1, 1);
    if (valuation === -2) PrintWrongKeyword(questionIndex);
    var answer0 = new Answer(choice, valuation, 1, 0, '');
    answer0.shortTextAnswer = "The play takes place in the city of Venice. ";
    question.answers.push(answer0);
    choice = GetBooleanChoice(questionIndex,1);
    noChoice = noChoice || !IsBooleanChoiceSelected(questionIndex, 1);
    valuation = DecodeNumber('jNzKoTeZdSg=', 835, -1, 1);
    if (valuation === -2) PrintWrongKeyword(questionIndex);
    var answer1 = new Answer(choice, valuation, 1, 0, '');
    answer1.shortTextAnswer = "The Ghost of King Hamlet tells his son that he died of a snakebite. ";
    question.answers.push(answer1);
    choice = GetBooleanChoice(questionIndex,2);
    noChoice = noChoice || !IsBooleanChoiceSelected(questionIndex, 2);
    valuation = DecodeNumber('+ycYxFgixKo=', 837, -1, 1);
    if (valuation === -2) PrintWrongKeyword(questionIndex);
    var answer2 = new Answer(choice, valuation, 1, 0, '');
    answer2.shortTextAnswer = "Claudius is King Hamlet's brother.";
    question.answers.push(answer2);
    choice = GetBooleanChoice(questionIndex,3);
    noChoice = noChoice || !IsBooleanChoiceSelected(questionIndex, 3);
    valuation = DecodeNumber('+ycYxFgixKo=', 839, -1, 1);
    if (valuation === -2) PrintWrongKeyword(questionIndex);
    var answer3 = new Answer(choice, valuation, 1, 0, '');
    answer3.shortTextAnswer = "Hamlet's famous \"To be, or not to be\" soliloquy is about his desire for military success. ";
    question.answers.push(answer3);
    choice = GetBooleanChoice(questionIndex,4);
    noChoice = noChoice || !IsBooleanChoiceSelected(questionIndex, 4);
    valuation = DecodeNumber('5sidnsXuA+8=', 841, -1, 1);
    if (valuation === -2) PrintWrongKeyword(questionIndex);
    var answer4 = new Answer(choice, valuation, 1, 0, '');
    answer4.shortTextAnswer = "Hamlet pretends to be mad (adopts an \"antic disposition\") to observe his uncle's actions.";
    question.answers.push(answer4);
    choice = GetBooleanChoice(questionIndex,5);
    noChoice = noChoice || !IsBooleanChoiceSelected(questionIndex, 5);
    valuation = DecodeNumber('5sidnsXuA+8=', 843, -1, 1);
    if (valuation === -2) PrintWrongKeyword(questionIndex);
    var answer5 = new Answer(choice, valuation, 1, 0, '');
    answer5.shortTextAnswer = "\"The Mousetrap\" is the name of the duel between Hamlet and Laertes. ";
    question.answers.push(answer5);
    choice = GetBooleanChoice(questionIndex,6);
    noChoice = noChoice || !IsBooleanChoiceSelected(questionIndex, 6);
    valuation = DecodeNumber('RoMiVa+pLPE=', 845, -1, 1);
    if (valuation === -2) PrintWrongKeyword(questionIndex);
    var answer6 = new Answer(choice, valuation, 1, 0, '');
    answer6.shortTextAnswer = "Claudius's reaction to the play-within-a-play confirms his guilt to Hamlet. ";
    question.answers.push(answer6);
    choice = GetBooleanChoice(questionIndex,7);
    noChoice = noChoice || !IsBooleanChoiceSelected(questionIndex, 7);
    valuation = DecodeNumber('i2QOzax7wzo=', 847, -1, 1);
    if (valuation === -2) PrintWrongKeyword(questionIndex);
    var answer7 = new Answer(choice, valuation, 1, 0, '');
    answer7.shortTextAnswer = "Polonius is accidentally killed by Hamlet while hiding behind a tapestry.";
    question.answers.push(answer7);
    choice = GetBooleanChoice(questionIndex,8);
    noChoice = noChoice || !IsBooleanChoiceSelected(questionIndex, 8);
    valuation = DecodeNumber('aGgBWzlRhS4=', 849, -1, 1);
    if (valuation === -2) PrintWrongKeyword(questionIndex);
    var answer8 = new Answer(choice, valuation, 1, 0, '');
    answer8.shortTextAnswer = "Ophelia's brother, Laertes, seeks revenge for the deaths of his father and sister. ";
    question.answers.push(answer8);
    choice = GetBooleanChoice(questionIndex,9);
    noChoice = noChoice || !IsBooleanChoiceSelected(questionIndex, 9);
    valuation = DecodeNumber('Gvig5wu+Jdw=', 851, -1, 1);
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
    var weight = DecodeNumber('ChzenYLF1hY=', 843, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('ChzenYLF1hY=', 843, -1000, 1000),DecodeDecimal('K2UP9Juxipk=', 843, -1000, 1000),DecodeDecimal('K2UP9Juxipk=', 843, -1000, 1000));
    question.answers.length = 0;
    question.num = 2;
    question.isSingleAns = true;
    question.shortTextQuestion = "What is the setting of the play described in the passage? ";
    question.timeToAnswer = 0;
    var choice = GetSingleAnswerChoice(questionIndex);
    if (choice === 0) question.noChoice = true;
    var valuation1 = DecodeNumber('ChzenYLF1hY=', 845, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var answer1 = new Answer((choice == 1 ? 1 : 0), valuation1, 1, 0, '');
    answer1.shortTextAnswer = "The Wittenberg University";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('RoMiVa+pLPE=', 847, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var answer2 = new Answer((choice == 2 ? 1 : 0), valuation2, 1, 0, '');
    answer2.shortTextAnswer = "The kingdom of Norway ";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('aGgBWzlRhS4=', 849, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var answer3 = new Answer((choice == 3 ? 1 : 0), valuation3, 1, 0, '');
    answer3.shortTextAnswer = "The royal court of Elsinore ";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('aGgBWzlRhS4=', 851, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var answer4 = new Answer((choice == 4 ? 1 : 0), valuation4, 1, 0, '');
    answer4.shortTextAnswer = "The city of London ";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion3()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 2;
    var weight = DecodeNumber('tBlERGwYYe4=', 853, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('tBlERGwYYe4=', 853, -1000, 1000),DecodeDecimal('ywY0JkUKyYY=', 853, -1000, 1000),DecodeDecimal('ywY0JkUKyYY=', 853, -1000, 1000));
    question.answers.length = 0;
    question.num = 3;
    question.isSingleAns = true;
    question.shortTextQuestion = "The Ghost charges Hamlet with the duty of: ";
    question.timeToAnswer = 0;
    var choice = GetSingleAnswerChoice(questionIndex);
    if (choice === 0) question.noChoice = true;
    var valuation1 = DecodeNumber('tBlERGwYYe4=', 855, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var answer1 = new Answer((choice == 1 ? 1 : 0), valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Marrying Ophelia immediately";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('ZrEUiOb9WkE=', 857, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var answer2 = new Answer((choice == 2 ? 1 : 0), valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Avenging his father's murder ";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('ZrEUiOb9WkE=', 859, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var answer3 = new Answer((choice == 3 ? 1 : 0), valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Defending Denmark from Fortinbras ";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('1pPK4iC5TKw=', 861, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var answer4 = new Answer((choice == 4 ? 1 : 0), valuation4, 1, 0, '');
    answer4.shortTextAnswer = "Forgiving Claudius and Gertrude ";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion4()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 3;
    var weight = DecodeNumber('h2uaXjQm0Gk=', 863, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('h2uaXjQm0Gk=', 863, -1000, 1000),DecodeDecimal('MlsCn/W7ejM=', 863, -1000, 1000),DecodeDecimal('MlsCn/W7ejM=', 863, -1000, 1000));
    question.answers.length = 0;
    question.num = 4;
    question.isSingleAns = true;
    question.shortTextQuestion = "Which phrase best summarizes the core dilemma explored in the \"To be, or not to be\" soliloquy? ";
    question.timeToAnswer = 0;
    var choice = GetSingleAnswerChoice(questionIndex);
    if (choice === 0) question.noChoice = true;
    var valuation1 = DecodeNumber('JJlRwwNi2rA=', 865, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var answer1 = new Answer((choice == 1 ? 1 : 0), valuation1, 1, 0, '');
    answer1.shortTextAnswer = "The comparison between life's suffering and the uncertainty of death";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('JJlRwwNi2rA=', 867, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var answer2 = new Answer((choice == 2 ? 1 : 0), valuation2, 1, 0, '');
    answer2.shortTextAnswer = "The fear of Claudius's power ";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('rRm9DrDeqrw=', 869, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var answer3 = new Answer((choice == 3 ? 1 : 0), valuation3, 1, 0, '');
    answer3.shortTextAnswer = "The struggle between thought and action ";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('82/Pub/TOks=', 871, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var answer4 = new Answer((choice == 4 ? 1 : 0), valuation4, 1, 0, '');
    answer4.shortTextAnswer = "The cost of war vs. the benefit of peace ";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion5()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 4;
    var weight = DecodeNumber('ruQbJwrtqKc=', 873, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('ruQbJwrtqKc=', 873, -1000, 1000),DecodeDecimal('tyIlT02Wux0=', 873, -1000, 1000),DecodeDecimal('tyIlT02Wux0=', 873, -1000, 1000));
    question.answers.length = 0;
    question.num = 5;
    question.isSingleAns = true;
    question.shortTextQuestion = "What is the central reason Hamlet adopts an \"antic disposition\"? ";
    question.timeToAnswer = 0;
    var choice = GetSingleAnswerChoice(questionIndex);
    if (choice === 0) question.noChoice = true;
    var valuation1 = DecodeNumber('ruQbJwrtqKc=', 875, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var answer1 = new Answer((choice == 1 ? 1 : 0), valuation1, 1, 0, '');
    answer1.shortTextAnswer = "To prove he is unfit to be king.";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('hbxEBXe1azM=', 877, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var answer2 = new Answer((choice == 2 ? 1 : 0), valuation2, 1, 0, '');
    answer2.shortTextAnswer = "To distract Ophelia from his revenge plan. ";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('YZHdPOiP6v4=', 879, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var answer3 = new Answer((choice == 3 ? 1 : 0), valuation3, 1, 0, '');
    answer3.shortTextAnswer = "To mask his intentions and observe Claudius. ";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('YZHdPOiP6v4=', 881, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var answer4 = new Answer((choice == 4 ? 1 : 0), valuation4, 1, 0, '');
    answer4.shortTextAnswer = "He genuinely goes insane from grief. ";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion6()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 5;
    var weight = DecodeNumber('sRlupuygsFg=', 883, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('sRlupuygsFg=', 883, -1000, 1000),DecodeDecimal('GsrcxE5Wmt8=', 883, -1000, 1000),DecodeDecimal('GsrcxE5Wmt8=', 883, -1000, 1000));
    question.answers.length = 0;
    question.num = 6;
    question.isSingleAns = true;
    question.shortTextQuestion = "What is the play-within-a-play known as? ";
    question.timeToAnswer = 0;
    var choice = GetSingleAnswerChoice(questionIndex);
    if (choice === 0) question.noChoice = true;
    var valuation1 = DecodeNumber('sRlupuygsFg=', 885, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var answer1 = new Answer((choice == 1 ? 1 : 0), valuation1, 1, 0, '');
    answer1.shortTextAnswer = "The Revenge of the Prince";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('5fCP3RUCom0=', 887, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var answer2 = new Answer((choice == 2 ? 1 : 0), valuation2, 1, 0, '');
    answer2.shortTextAnswer = "The Mousetrap ";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('5fCP3RUCom0=', 889, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var answer3 = new Answer((choice == 3 ? 1 : 0), valuation3, 1, 0, '');
    answer3.shortTextAnswer = "The Tragedy of Gonzago ";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('6Gy0fNdHKQk=', 891, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var answer4 = new Answer((choice == 4 ? 1 : 0), valuation4, 1, 0, '');
    answer4.shortTextAnswer = "The Regicide's Tale ";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion7()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 6;
    var weight = DecodeNumber('n2UEW+qGPwU=', 893, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('n2UEW+qGPwU=', 893, -1000, 1000),DecodeDecimal('4HqVcJtfCzE=', 893, -1000, 1000),DecodeDecimal('4HqVcJtfCzE=', 893, -1000, 1000));
    question.answers.length = 0;
    question.num = 7;
    question.isSingleAns = true;
    question.shortTextQuestion = "Who does Hamlet accidentally kill during a confrontation with his mother? ";
    question.timeToAnswer = 0;
    var choice = GetSingleAnswerChoice(questionIndex);
    if (choice === 0) question.noChoice = true;
    var valuation1 = DecodeNumber('n2UEW+qGPwU=', 895, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var answer1 = new Answer((choice == 1 ? 1 : 0), valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Fortinbras";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('Xd2AcakzTZw=', 897, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var answer2 = new Answer((choice == 2 ? 1 : 0), valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Polonius ";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('Xd2AcakzTZw=', 899, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var answer3 = new Answer((choice == 3 ? 1 : 0), valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Laertes ";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('JFzasViicgc=', 901, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var answer4 = new Answer((choice == 4 ? 1 : 0), valuation4, 1, 0, '');
    answer4.shortTextAnswer = "Claudius ";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion8()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 7;
    var weight = DecodeNumber('XQHYkZiKJvU=', 903, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('XQHYkZiKJvU=', 903, -1000, 1000),DecodeDecimal('QX41kWCHqkA=', 903, -1000, 1000),DecodeDecimal('QX41kWCHqkA=', 903, -1000, 1000));
    question.answers.length = 0;
    question.num = 8;
    question.isSingleAns = true;
    question.shortTextQuestion = "What ultimately causes Ophelia to go mad and drown?";
    question.timeToAnswer = 0;
    var choice = GetSingleAnswerChoice(questionIndex);
    if (choice === 0) question.noChoice = true;
    var valuation1 = DecodeNumber('XQHYkZiKJvU=', 905, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var answer1 = new Answer((choice == 1 ? 1 : 0), valuation1, 1, 0, '');
    answer1.shortTextAnswer = "A curse placed upon her family";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('wRIOeBDqhvE=', 907, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var answer2 = new Answer((choice == 2 ? 1 : 0), valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Fear of Claudius and Gertrude ";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('5V3XSVhMGTA=', 909, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var answer3 = new Answer((choice == 3 ? 1 : 0), valuation3, 1, 0, '');
    answer3.shortTextAnswer = "The failure of her relationship with Hamlet ";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('IAAbwUgs5uE=', 911, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var answer4 = new Answer((choice == 4 ? 1 : 0), valuation4, 1, 0, '');
    answer4.shortTextAnswer = "Grief over the loss of her father and her love ";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion9()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 8;
    var weight = DecodeNumber('xAijOh25EGo=', 913, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('xAijOh25EGo=', 913, -1000, 1000),DecodeDecimal('j87AOsql4ZQ=', 913, -1000, 1000),DecodeDecimal('j87AOsql4ZQ=', 913, -1000, 1000));
    question.answers.length = 0;
    question.num = 9;
    question.isSingleAns = true;
    question.shortTextQuestion = "What two methods does Claudius plan to use to ensure Hamlet's death in the final duel? ";
    question.timeToAnswer = 0;
    var choice = GetSingleAnswerChoice(questionIndex);
    if (choice === 0) question.noChoice = true;
    var valuation1 = DecodeNumber('xAijOh25EGo=', 915, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var answer1 = new Answer((choice == 1 ? 1 : 0), valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Banishment and starvation";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('RQR0V9vG7cE=', 917, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var answer2 = new Answer((choice == 2 ? 1 : 0), valuation2, 1, 0, '');
    answer2.shortTextAnswer = "An ambush and a falling chandelier ";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('wvFY2MaaLto=', 919, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var answer3 = new Answer((choice == 3 ? 1 : 0), valuation3, 1, 0, '');
    answer3.shortTextAnswer = "A poisoned sword and a poisoned drink ";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('wvFY2MaaLto=', 921, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var answer4 = new Answer((choice == 4 ? 1 : 0), valuation4, 1, 0, '');
    answer4.shortTextAnswer = "A firing squad and a sudden stabbing ";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion10()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 9;
    var weight = DecodeNumber('je54tzrmYWs=', 923, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('je54tzrmYWs=', 923, -1000, 1000),DecodeDecimal('2i9Vjg1svCw=', 923, -1000, 1000),DecodeDecimal('2i9Vjg1svCw=', 923, -1000, 1000));
    question.answers.length = 0;
    question.num = 10;
    question.isSingleAns = true;
    question.shortTextQuestion = "Who mistakenly drinks the poisoned cup in the final scene? ";
    question.timeToAnswer = 0;
    var choice = GetSingleAnswerChoice(questionIndex);
    if (choice === 0) question.noChoice = true;
    var valuation1 = DecodeNumber('je54tzrmYWs=', 925, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var answer1 = new Answer((choice == 1 ? 1 : 0), valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Laertes";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('+9Y2Rwfj4J4=', 927, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var answer2 = new Answer((choice == 2 ? 1 : 0), valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Gertrude ";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('+9Y2Rwfj4J4=', 929, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var answer3 = new Answer((choice == 3 ? 1 : 0), valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Claudius ";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('raPou98p55c=', 931, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var answer4 = new Answer((choice == 4 ? 1 : 0), valuation4, 1, 0, '');
    answer4.shortTextAnswer = "Hamlet ";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion11()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 10;
    var weight = DecodeNumber('i89nb3xxb1g=', 933, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('i89nb3xxb1g=', 933, -1000, 1000),DecodeDecimal('XahwH+dctXI=', 933, -1000, 1000),DecodeDecimal('XahwH+dctXI=', 933, -1000, 1000));
    question.answers.length = 0;
    question.num = 11;
    question.isSingleAns = true;
    question.shortTextQuestion = "The passage states that the play is a powerful examination of the: ";
    question.timeToAnswer = 0;
    var choice = GetSingleAnswerChoice(questionIndex);
    if (choice === 0) question.noChoice = true;
    var valuation1 = DecodeNumber('i89nb3xxb1g=', 935, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var answer1 = new Answer((choice == 1 ? 1 : 0), valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Ease of moral choice";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('bI27pRAUdAM=', 937, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var answer2 = new Answer((choice == 2 ? 1 : 0), valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Paralyzing nature of thought in the face of action ";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('bI27pRAUdAM=', 939, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var answer3 = new Answer((choice == 3 ? 1 : 0), valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Value of quick and decisive action ";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('Wv5S0YO/1oo=', 941, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var answer4 = new Answer((choice == 4 ? 1 : 0), valuation4, 1, 0, '');
    answer4.shortTextAnswer = "Importance of honoring the dead ";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion12()
{
    const type = QMAKE_OPENANS;
    const questionIndex = 11;
    var weight = DecodeNumber('pItJTp8/wRI=', 943, 0, 99999);
    var numOfAnswers = 0;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('AL9Nfe4Wmr4=', 943, -1000, 1000),DecodeDecimal('WGse/vKwHwk=', 943, -1000, 1000),DecodeDecimal('WGse/vKwHwk=', 943, -1000, 1000));
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
    var weight = DecodeNumber('lmXNjFwTMLI=', 953, 0, 99999);
    var numOfAnswers = 0;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('QcMem8XTpUg=', 953, -1000, 1000),DecodeDecimal('mHtrn9ENfBU=', 953, -1000, 1000),DecodeDecimal('mHtrn9ENfBU=', 953, -1000, 1000));
    question.num = 13;
    question.answers.length = 0;
    question.shortTextQuestion = "Discuss the symbolic role of Fortinbras in the context of the play's ending. What does his inheritance of the kingdom suggest about the themes of order and corruption explored throughout the tragedy? Your answer should mention who Fortinbras is, why he arrives, and what the transfer of leadership signifies. (100/120 words)";
    var comment = $('#comment' + questionIndex).val();
    var answer = new Answer(0,0,1,0,comment);
    question.answers.push(answer);
    return question;

}
/* Code generated function */
function InitQuestion14()
{
    const type = QMAKE_OPENANS;
    const questionIndex = 13;
    var weight = DecodeNumber('22XYcYeXcns=', 963, 0, 99999);
    var numOfAnswers = 0;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('QOhAXQ5UQ8M=', 963, -1000, 1000),DecodeDecimal('pItJTp8/wRI=', 963, -1000, 1000),DecodeDecimal('pItJTp8/wRI=', 963, -1000, 1000));
    question.num = 14;
    question.answers.length = 0;
    question.shortTextQuestion = "The Ghost reveals that he was brutally murdered in his sleep by his own brother";
    var comment = $('#comment' + questionIndex).val();
    var answer = new Answer(0,0,1,0,comment);
    question.answers.push(answer);
    return question;

}
/* Code generated function */
function InitQuestion15()
{
    const type = QMAKE_OPENANS;
    const questionIndex = 14;
    var weight = DecodeNumber('2omKTfnsYoc=', 973, 0, 99999);
    var numOfAnswers = 0;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('Yh76kUicovA=', 973, -1000, 1000),DecodeDecimal('lmXNjFwTMLI=', 973, -1000, 1000),DecodeDecimal('lmXNjFwTMLI=', 973, -1000, 1000));
    question.num = 15;
    question.answers.length = 0;
    question.shortTextQuestion = "His famous soliloquy, \"To be, or not to be, that is the question,\" encapsulates his contemplation of suicide as a release from the suffering ";
    var comment = $('#comment' + questionIndex).val();
    var answer = new Answer(0,0,1,0,comment);
    question.answers.push(answer);
    return question;

}
/* Code generated function */
function InitQuestion16()
{
    const type = QMAKE_OPENANS;
    const questionIndex = 15;
    var weight = DecodeNumber('8oXDm4lTJKI=', 983, 0, 99999);
    var numOfAnswers = 0;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('nh6EfzhQuVM=', 983, -1000, 1000),DecodeDecimal('Bzj4e0RmBGY=', 983, -1000, 1000),DecodeDecimal('Bzj4e0RmBGY=', 983, -1000, 1000));
    question.num = 16;
    question.answers.length = 0;
    question.shortTextQuestion = "To buy time and ascertain Claudius's guilt without revealing his hand, Hamlet adopts an \"antic disposition\" ";
    var comment = $('#comment' + questionIndex).val();
    var answer = new Answer(0,0,1,0,comment);
    question.answers.push(answer);
    return question;

}
/* Code generated function */
function InitQuestion17()
{
    const type = QMAKE_OPENANS;
    const questionIndex = 16;
    var weight = DecodeNumber('x0t5d0cc1yI=', 993, 0, 99999);
    var numOfAnswers = 0;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('x0t5d0cc1yI=', 993, -1000, 1000),DecodeDecimal('ZLYOAIYrnXc=', 993, -1000, 1000),DecodeDecimal('ZLYOAIYrnXc=', 993, -1000, 1000));
    question.num = 17;
    question.answers.length = 0;
    question.shortTextQuestion = "What is the tense and aspect of the verb phrase \"has been set\" if you were to change the verb in the first paragraph's second sentence to show a continuing state up to the present: \"It is set in the somber royal court of Elsinore...\"?";
    var comment = $('#comment' + questionIndex).val();
    var answer = new Answer(0,0,1,0,comment);
    question.answers.push(answer);
    return question;

}
/* Code generated function */
function InitQuestion18()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 17;
    var weight = DecodeNumber('zDi6/MsgOeg=', 1003, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('zDi6/MsgOeg=', 1003, -1000, 1000),DecodeDecimal('nBhhM/v9zAU=', 1003, -1000, 1000),DecodeDecimal('nBhhM/v9zAU=', 1003, -1000, 1000));
    question.answers.length = 0;
    question.num = 18;
    question.isSingleAns = true;
    question.shortTextQuestion = "In the phrase, \"listening courtier, Polonius,\" what type of verbal is the bolded word?";
    question.timeToAnswer = 0;
    var choice = GetSingleAnswerChoice(questionIndex);
    if (choice === 0) question.noChoice = true;
    var valuation1 = DecodeNumber('zDi6/MsgOeg=', 1005, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var answer1 = new Answer((choice == 1 ? 1 : 0), valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Past Participle";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('bRDMshUmpdg=', 1007, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var answer2 = new Answer((choice == 2 ? 1 : 0), valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Present Participle";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('bRDMshUmpdg=', 1009, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var answer3 = new Answer((choice == 3 ? 1 : 0), valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Gerund";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('lhFdDLAChtc=', 1011, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var answer4 = new Answer((choice == 4 ? 1 : 0), valuation4, 1, 0, '');
    answer4.shortTextAnswer = "Infinitive";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion19()
{
    const type = QMAKE_OPENANS;
    const questionIndex = 18;
    var weight = DecodeNumber('RVbyGaoJhIY=', 1013, 0, 99999);
    var numOfAnswers = 0;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('RVbyGaoJhIY=', 1013, -1000, 1000),DecodeDecimal('V2sllAwEpO4=', 1013, -1000, 1000),DecodeDecimal('V2sllAwEpO4=', 1013, -1000, 1000));
    question.num = 19;
    question.answers.length = 0;
    question.shortTextQuestion = "In the sentence, \"This behavior isolates him, particularly from Ophelia, the woman he loves, who becomes deeply distressed by his erratic cruelty,\" which word is the antecedent of the relative pronoun \"who\"?";
    var comment = $('#comment' + questionIndex).val();
    var answer = new Answer(0,0,1,0,comment);
    question.answers.push(answer);
    return question;

}
/* Code generated function */
function InitQuestion20()
{
    const type = QMAKE_OPENANS;
    const questionIndex = 19;
    var weight = DecodeNumber('0V2fXAdxkJ4=', 1023, 0, 99999);
    var numOfAnswers = 0;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('V63P72yK5tM=', 1023, -1000, 1000),DecodeDecimal('eroxfrSer0A=', 1023, -1000, 1000),DecodeDecimal('eroxfrSer0A=', 1023, -1000, 1000));
    question.num = 20;
    question.answers.length = 0;
    question.shortTextQuestion = "Laertes uses a poisoned rapier, and Claudius prepares a poisoned drink.";
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
function ClearQuestion14()
{
    const questionIndex = 13;
    ClearOpenAns(questionIndex);

}
/* Code generated function */
function ClearQuestion15()
{
    const questionIndex = 14;
    ClearOpenAns(questionIndex);

}
/* Code generated function */
function ClearQuestion16()
{
    const questionIndex = 15;
    ClearOpenAns(questionIndex);

}
/* Code generated function */
function ClearQuestion17()
{
    const questionIndex = 16;
    ClearOpenAns(questionIndex);

}
/* Code generated function */
function ClearQuestion18()
{
    const questionIndex = 17;
    ClearSingleAnswerChoices(questionIndex);

}
/* Code generated function */
function ClearQuestion19()
{
    const questionIndex = 18;
    ClearOpenAns(questionIndex);

}
/* Code generated function */
function ClearQuestion20()
{
    const questionIndex = 19;
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

/* Code generated function */
function UpdateCount14()
{
    var cs = options.openAnsNumChars - countOnlyCharsInText($(this).val());
    var cSkipped = $(this).val().length - countOnlyCharsInText($(this).val());
    var threshold = Math.round(options.openAnsNumChars / 10);
    var counter = $('#counter13');
    counter.text(cs);
    $('#comment13').attr('maxlength',140+cSkipped);
    if (cs <= threshold) counter.addClass('openAnsWarnCounter'); else counter.removeClass('openAnsWarnCounter');

}

/* Code generated function */
function UpdateCount15()
{
    var cs = options.openAnsNumChars - countOnlyCharsInText($(this).val());
    var cSkipped = $(this).val().length - countOnlyCharsInText($(this).val());
    var threshold = Math.round(options.openAnsNumChars / 10);
    var counter = $('#counter14');
    counter.text(cs);
    $('#comment14').attr('maxlength',140+cSkipped);
    if (cs <= threshold) counter.addClass('openAnsWarnCounter'); else counter.removeClass('openAnsWarnCounter');

}

/* Code generated function */
function UpdateCount16()
{
    var cs = options.openAnsNumChars - countOnlyCharsInText($(this).val());
    var cSkipped = $(this).val().length - countOnlyCharsInText($(this).val());
    var threshold = Math.round(options.openAnsNumChars / 10);
    var counter = $('#counter15');
    counter.text(cs);
    $('#comment15').attr('maxlength',140+cSkipped);
    if (cs <= threshold) counter.addClass('openAnsWarnCounter'); else counter.removeClass('openAnsWarnCounter');

}

/* Code generated function */
function UpdateCount17()
{
    var cs = options.openAnsNumChars - countOnlyCharsInText($(this).val());
    var cSkipped = $(this).val().length - countOnlyCharsInText($(this).val());
    var threshold = Math.round(options.openAnsNumChars / 10);
    var counter = $('#counter16');
    counter.text(cs);
    $('#comment16').attr('maxlength',140+cSkipped);
    if (cs <= threshold) counter.addClass('openAnsWarnCounter'); else counter.removeClass('openAnsWarnCounter');

}

/* Code generated function */
function UpdateCount19()
{
    var cs = options.openAnsNumChars - countOnlyCharsInText($(this).val());
    var cSkipped = $(this).val().length - countOnlyCharsInText($(this).val());
    var threshold = Math.round(options.openAnsNumChars / 10);
    var counter = $('#counter18');
    counter.text(cs);
    $('#comment18').attr('maxlength',140+cSkipped);
    if (cs <= threshold) counter.addClass('openAnsWarnCounter'); else counter.removeClass('openAnsWarnCounter');

}

/* Code generated function */
function UpdateCount20()
{
    var cs = options.openAnsNumChars - countOnlyCharsInText($(this).val());
    var cSkipped = $(this).val().length - countOnlyCharsInText($(this).val());
    var threshold = Math.round(options.openAnsNumChars / 10);
    var counter = $('#counter19');
    counter.text(cs);
    $('#comment19').attr('maxlength',140+cSkipped);
    if (cs <= threshold) counter.addClass('openAnsWarnCounter'); else counter.removeClass('openAnsWarnCounter');

}





