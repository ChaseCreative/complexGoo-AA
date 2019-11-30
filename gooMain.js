//get function for getElementByID - x is a parameter for arguments
function get(x){
  return document.getElementById(x);
}


	var startButton = get("startButton");
    var answerOne = get("answerOne");
    var answerTwo = get("answerTwo");
    var answeThree = get("answerThree");
    var answerFour = get("answerFour");
    var responseButton = get("responseButton");
    var responseNext = get("responseNext");

  //CHANGE THE NAMES OF THE GAMES HERE
    var game1Title = get("answerOne").innerHTML = "We Must Do It!";
    var game2Title = get("answerTwo").innerHTML = "Let's Flex Your Abs!";
    var game3Title = get("answerThree").innerHTML = "I'm All Mixed Up!";
    var game4Title = get("answerFour").innerHTML = "";


//This sets up the name of the app and four seoparate games
function appName() {get("boxTwo").innerHTML = "GOO";}

function gameTitle() {get("startButton").innerHTML = "Let's Get Complex!";}

function gameOneTitle() {return game1Title;}

function gameTwoTitle() {return game2Title;}

function gameThreeTitle(){return game3Title;}

function gameFourTitle(){return game4Title;}

//This loads the names of the games

    appName();
    gameTitle();
    gameOneTitle();
    gameTwoTitle();
    gameThreeTitle();
    gameFourTitle();

    var nomPE1 = "a";
    var genPE1 = "ae";
    var datPE1 = "ae";
    var accPE1 = "am";
    var ablPE1 = "ā";
    var vocPE1 = "a";

    var nomPE1Pl = "ae";
    var genPE1Pl = "ārum";
    var datPE1Pl = "īs";
    var accPE1Pl = "ās";
    var ablPE1Pl = "īs";
    var vocPE1Pl = "ae";

    var nomPE2 = "us";
    var genPE2 = "ī";
    var datPE2 = "ō";
    var accPE2 = "um";
    var ablPE2 = "ō";
    var vocPE2 = "e";

    var nomPE2Pl = "ī";
    var genPE2Pl = "ōrum";
    var datPE2Pl = "īs";
    var accPE2Pl = "ōs";
    var ablP2Pl = "īs";
    var vocPE2Pl = "ī";

    var nomPE3 = "is";
    var genPE3 = "is";
    var datPE3 = "ī";
    var accPE3 = "em";
    var ablPE3 = "e";
    var vocPE3 = "is";

    var nomPE3Pl = "ēs";
    var genPE3Pl = "ium";
    var datPE3Pl = "ibus";
    var accPE3Pl = "ēs";
    var ablPE3Pl = "ibus";
    var vocPE3Pl = "ēs";



    		var pres1stSing = "ō";
    		var pres2ndSing = "ās";
    		var pres3rdSing = "at";
    		var pres1stPl = "āmus";
    		var pres2ndPl = "ātis";
    		var pres3rdPl = "ant";

        var pres1stSing2 = "eō";
    		var pres2ndSing2 = "ēs";
    		var pres3rdSing2 = "et";
    		var pres1stPl2 = "ēmus";
    		var pres2ndPl2 = "ētis";
    		var pres3rdPl2 = "ent";

        var pres1stSing3 = "ō";
    		var pres2ndSing3 = "is";
    		var pres3rdSing3 = "it";
    		var pres1stPl3 = "imus";
    		var pres2ndPl3 = "itis";
    		var pres3rdPl3 = "unt";

        var pres1stSing3iO = "iō";
    		var pres2ndSing3iO = "is";
    		var pres3rdSing3iO = "it";
    		var pres1stPl3iO = "imus";
    		var pres2ndPl3iO = "itis";
    		var pres3rdPl3iO = "iunt";

        var pres1stSing4 = "iō";
    		var pres2ndSing4 = "īs";
    		var pres3rdSing4 = "it";
    		var pres1stPl4 = "īmus";
    		var pres2ndPl4 = "ītis";
    		var pres3rdPl4 = "iunt";

    		var imp3rdSing = "ābat";
    		var imp3rdPl = "ābant";

    		var fut3rdSing = "ābit";
    		var fut3rdPl = "ābunt";

        var per3rdSing = "āvit";
    		var per3rdPl = "āvērunt";

        var perfect1stSing = "ī";
        var perfect2ndSing = "isti";
    		var perfect3rdSing = "it";
        var perfect1stPl = "imus";
        var perfect2ndPl = "istis";
    		var perfect3rdPl = "ērunt";

    		var pluPer3rdSing = "āverat";
    		var pluPer3rdPl = "āverant";

    		var futPer3rdSing = "āverit";
    		var futPer3rdPl = "āverint";




var answers = ["answerOne", "answerTwo", "answerThree", "answerFour"];

var masculineSubject = [["Mercator", "The merchant"],["Pater","The father"],["Agricola", "The farmer"],["Filius", "The son"],["Nauta","The sailor"],["Senex", "The old man"], ["Servus","The servant"]];

var feminineSubject = [["Mater", "The mother"],["soror","The sister"],["Femina", "The woman"],["Ancilla", "The maid servant"],["Puella","The girl"],["Regina", "The queen"]];

var neuterSubject = [["Agmen", "The procession"],["Donum","The gift"],["Vinum", "The wine"],["Cubiculum", "The bedroom"],["Atrium","The main hall"],["Tablinum", "The study"], []["Bellum", "The war"]];

var masculineSubjectPlural = [["Mercatorēs", "The merchants"],["patrēs","The fathers"],["Agricolae", "The farmers"],["Filiī", "The sons"],["Nautae","The sailors"],["Senēs", "The old men"]];

var feminineSubjectPlural = [["Matrēs", "The mothers"],["Sororēs","The sisters"],["Feminae", "The women"],["Ancillae", "The maid servants"],["Puellae","The girls"],["Reginae", "The queens"]];

var neuterSubjectPlural = [["Agmina", "The processions"],["Dona","The gifts"],["Vina", "The wines"],["Cubicula", "The bedrooms"],["Triclinia","The dinging rooms"],["Tablina", "The studies"]];

var relativeSubject = [["QUI", "WHO"], ["QUAE", "WHO"], ["QUOD", "WHICH"],["QUEM", "WHOM"], ["QUAM", "WHOM"], ["QUOD", "WHICH"]];


var relativePronounsPlural = [["QUI", "WHO"], ["QUAE", "WHO"], ["QUAE", "WHICH"],["QUOS", "WHOM"], ["QUAS", "WHOM"], ["QUAE", "WHICH"]];

var moreTransitiveVerbs = [["ego video", "I see"], ["tu vidēs", "you see"], ["nos vidēmus", "we see"], ["vidētis", "ya'll see"], ["ego amo", "I like"], ["tu amas", "you like"], ["vidēre nolo","I do not want to see"],["amābamus","we used to like"]];

var thirdPersonTransitiveVerbs = [["inspicit", "inspects"], ["inspiciebat", "was inspecting"], ["inspexit", "inspected"], ["tenet", "holds"], ["tenēbat", "was holding"], ["tenuit", "held"], ["tangēbat","was touching"],["spectavit","watched"]];

var thirdPersonIntransitiveVerbs = [["stat", "is standing"], ["navigabat", "was sailing"], ["ambulat", "is walking"], ["cantat", "is singing"], ["currit", "is running"], ["scribit", "is writing"], ["legebat","was reading"],["dormit","is sleeping"]];

var thirdPersonTransitiveVerbsPlural = [["inspiciunt", "inspect"], ["inspiciebant", "were inspecting"], ["inspexērunt", "inspected"], ["tenent", "hold"], ["tenēbant", "were holding"], ["tenuērunt", "held"], ["tangēbant","were touching"],["spectavērunt","watched"]];

var thirdPersonIntransitiveVerbsPlural = [["stant", "are standing"], ["navigabant", "were sailing"], ["ambulant", "are walking"], ["cantant", "are singing"], ["currunt", "are running"], ["scribunt", "are writing"], ["legebant","were reading"],["dormiunt","are sleeping"]];

var linkingVerbs = [["est", "is"], ["erat", "was"], ["erit", "will be"]];

var linkingVerbsPlural = [["sunt", "are"], ["erant", "were"], ["erunt", "will be"]];

var directObjects = [["flammas", "the flames"],["vinum","the wine"],["Mensam", "the table"],["equos", "the horses"],["cenam","the dinner"],["pecuniam", "The money"]];

var predicateSizeAdjectives = [["magnus", "magna", "magnum", "big"], ["parvus", "parva", "parvum", "small"], ["maximus", "maxima", "maximum", "the biggest"]];

var predicateSizeAdjectivesPlural = [["magni", "magnae", "magna", "big"], ["parvi", "parvae", "parva", "small"], ["maximi", "maximae", "maxima", "the biggest"]];

var predicateAdjectives = [["fidelis", "fideli", "fidele", "fidelem", "fidelēs", "fidelia", "FAITHFUL"],["gravis", "gravi", "grave", "gravem", "gravēs", "gravia", "SERIOUS"],["fortis", "forti", "forte", "fortem", "fortēs", "fortia", "STRONG"],["laetus", "laeta", "laetum", "laeti", "laetae", "laeta","HAPPY"], ["pulcher", "pulchra", "pulchrum", "pulchri", "pulchrae", "pulchra","BEAUTIFUL"],["parvus", "parva", "parvum", "parvi", "parvae", "parva","SMALL"],["magnus", "magna", "magnum", "magni", "magnae", "magna","BIG"], ["optimus", "optima", "optimum", "optimi", "optimae", "optima","THE BEST"], ["malus", "mala", "malum", "mali", "malae", "mala","EVIL"], ["miser", "misera", "miserum", "miseri", "miserae", "misera","WRETCHED"]];

var predicateAdjectivesFem = [["fidele", "fidelis", "fideli", "fidelem", "fidelēs", "fidelia", "FAITHFUL"],["grave", "gravis", "gravi", "gravem", "gravēs", "gravia", "SERIOUS"],["forte", "fortis", "forti", "fortem", "fortēs", "fortia", "STRONG"],["laetus", "laeta", "laetum", "laeti", "laetae", "laeta","HAPPY"], ["pulcher", "pulchra", "pulchrum", "pulchri", "pulchrae", "pulchra","BEAUTIFUL"],["parvus", "parva", "parvum", "parvi", "parvae", "parva","SMALL"],["magnus", "magna", "magnum", "magni", "magnae", "magna","BIG"], ["optimus", "optima", "optimum", "optimi", "optimae", "optima","THE BEST"], ["malus", "mala", "malum", "mali", "malae", "mala","EVIL"], ["miser", "misera", "miserum", "miseri", "miserae", "misera","WRETCHED"]];


var predicateAdjectivesPlural = [["fidelēs", "fidelis", "fidele", "fidelī", "fidelium", "fidelibus", "FAITHFUL"],["gravēs", "gravis", "grave", "gravī", "gravium", "gravibus", "SERIOUS"],["fortēs", "fortis", "forte", "fortī", "fortium", "fortibus", "STRONG"],["laeti", "laetae", "laeta", "laetos", "laetas", "laeta", "HAPPY"], ["optimi", "optimae", "optima", "optimos", "optimas", "optima", "THE BEST"], ["mali", "malae", "mala", "malos", "malas", "mala", "EVIL"], ["miseri", "miserae", "misera", "miseros", "miseras", "misera", "WRETCHED"]];

var predicateAdjectivesPluralFem = [["fidelis", "fidelēs", "fidele", "fidelī", "fidelium", "fidelibus", "FAITHFUL"],["gravis", "gravēs", "grave", "gravī", "gravium", "gravibus", "SERIOUS"],["fortis", "fortēs", "forte", "fortī", "fortium", "fortibus", "STRONG"],["laeti", "laetae", "laeta", "laetos", "laetas", "laeta", "HAPPY"], ["optimi", "optimae", "optima", "optimos", "optimas", "optima", "THE BEST"], ["mali", "malae", "mala", "malos", "malas", "mala", "EVIL"], ["miseri", "miserae", "misera", "miseros", "miseras", "misera", "WRETCHED"]];

var predicateAdjectivesPluralNeut = [["fidelis", "fidelēs", "fidelia", "fidele", "fidelium", "fidelibus", "FAITHFUL"],["gravis", "gravēs", "gravia", "grave", "gravium", "gravibus", "SERIOUS"],["fortis", "fortēs", "fortia", "forte", "fortium", "fortibus", "STRONG"],["laeti", "laetae", "laeta", "laetos", "laetas", "laeta", "HAPPY"], ["optimi", "optimae", "optima", "optimos", "optimas", "optima", "THE BEST"], ["mali", "malae", "mala", "malos", "malas", "mala", "EVIL"], ["miseri", "miserae", "misera", "miseros", "miseras", "misera", "WRETCHED"]];




var num = Math.floor(Math.random() * 4);

function resetNum(){

  num = Math.floor(Math.random() * 4);
}



//Random index for Shuffle
	 var randomIndex = 0;



function gameOverAudio(){
       var gameOverAudio = document.getElementById("gameOverAudio");
       gameOverAudio.play();
                 }

  function correctAnswerAudio(){
       var correctAnswerAudio = document.getElementById("correctAnswerAudio");
       correctAnswerAudio.play();
                 }

function wrongAnswerAudio(){
       var wrongAnswerAudio = document.getElementById("wrongAnswerAudio");
       wrongAnswerAudio.play();
                 }



//Score Variables

	var correctAnswer = "";

    var points = 0;

    var pointsPerCorrectAnswer = 10;

    //var gameOneChosen = false;


    function addPoints(){
    	points += pointsPerCorrectAnswer;
		document.getElementById("boxThree").innerHTML = points;

    }


    function subtractPoints(){
    	points -= pointsPerCorrectAnswer/2;
		document.getElementById("boxThree").innerHTML = points;

    }

//Counter variable for number of questions

var num_questions = 5;
var count = 11;

function decrementCount(){
	count--;
}


//Timer variables
var timeleft = 25;
var countdown = setInterval(x,1000);


function countDownTimer(){

		document.getElementById("boxOne").innerHTML = timeleft;
  		timeleft -= 1;
  			if(timeleft <= 0)  {
    			clearInterval(countdown);
    			document.getElementById("boxOne").innerHTML = "Timer";
    			disableButtons();
    			startButton.disabled = false;
    			startButton.innerHTML = "Next Question!";
    			responseButton.innerHTML = "Tempus Fugit!"
    			resetAnswerColors();
    			answerOne.innerHTML = "";
				answerTwo.innerHTML = "";
				answerThree.innerHTML = "";
				answerFour.innerHTML = "";

  }

}





function stopTimer() {


	clearInterval(countdown);


}



//This randomizes an array. The parameter array takes as its argument the questions.


function shuffle(array){
	var currentIndex = array.length;
	var temporaryValue;
	//var randIndex;

	while (currentIndex > 0){
		randomIndex = Math.floor(Math.random() * currentIndex);
		currentIndex --;

		temporaryValue = array[currentIndex];
		array[currentIndex] = array[randomIndex];
		array[randomIndex] = temporaryValue;
	}
		return array;
}



function answerSetup(){
		answerOne.innerHTML = "";
		answerTwo.innerHTML = "";
		answerThree.innerHTML = "";
		answerFour.innerHTML = "";
		responseButton.innerHTML = "";
		answerOne.onclick = function(){clickedAnswerOne()};
		answerTwo.onclick = function(){clickedAnswerTwo()};
		answerThree.onclick = function(){clickedAnswerThree()};
		answerFour.onclick = function(){clickedAnswerFour()};
}



 function selectGame1(){

 	startButton.disabled = false;
 	startButton.onclick = function(){gOO()};
  //responseButton.onclick = function(){hint()};
	startButton.innerHTML = "Click to Start " + game1Title;
    answerSetup();
    gameOverAudio();
 	return true;


}


function selectGame2(){

	startButton.disabled = false;
 	startButton.onclick = function(){ablativeAbsolute()};
 	startButton.innerHTML = "Click to Start " + game2Title;
    answerSetup();
    gameOverAudio();
    return true;
}

function selectGame3(){

	startButton.disabled = false;
 	startButton.onclick = function(){complexMixup()};
 	startButton.innerHTML = "Click to Start " + game3Title;
    answerSetup();
    gameOverAudio();
    return true;
}

function selectGame4(){

	startButton.disabled = false;
 	startButton.onclick = function(){testIndirectStatement()};
 	startButton.innerHTML = "Click to Start " + game4Title;
    answerSetup();
    gameOverAudio();
 }




 var pE1 = [pres1stSing,pres2ndSing,pres3rdSing,pres1stPl,pres2ndPl,pres3rdPl];
 var pE2 = [pres1stSing2,pres2ndSing2,pres3rdSing2,pres1stPl2,pres2ndPl2,pres3rdPl2];
 var pE3 = [pres1stSing3,pres2ndSing3,pres3rdSing3,pres1stPl3,pres2ndPl3,pres3rdPl3];
 var pE4 = [pres1stSing4,pres2ndSing4,pres3rdSing4,pres1stPl4,pres2ndPl4,pres3rdPl4];

 var pT = [perfect1stSing,perfect2ndSing,perfect3rdSing,perfect1stPl,perfect2ndPl,perfect3rdPl];

 var pEIndex = Math.floor(Math.random() * 6);

 var headyVerb = [["say","said", "dīc" + pE3[pEIndex], "dīx" + pT[pEIndex]],["think","thought", "put" + pE1[pEIndex], "putav" + pT[pEIndex]], ["see","saw", "vid" + pE2[pEIndex], "vīd" + pT[pEIndex]], ["feel","felt", "sent" + pE4[pEIndex], "sens" + pT[pEIndex]],["hear","heard", "aud" + pE4[pEIndex], "audiv" + pT[pEIndex]],["know","knew", "sc" + pE4[pEIndex], "scīv" + pT[pEIndex]]];

var hVIndex = Math.floor(Math.random() * headyVerb.length);

 var pronounHe = ["I","You","He does","We","You all", "They"];
 var pronounShe = ["I","You","She","We","You all", "They"];

 var subjectAccusativeMas = [["mercatorem", "the merchant"],["patrem","the father"],["agricolam", "the farmer"],["filium", "the son"],["nautam","the sailor"],["senem", "the old man"], ["servum","the servant"]];
var sAMasIndex = Math.floor(Math.random() * subjectAccusativeMas.length);

var subjectAccusativeFem = [["uxorem", "the wife"],["sororem","the sister"],["ancilam", "the maid servant"],["filiam", "the daughter"],["matrem", "the mother"],["feminam", "the woman"]];
var sAFemIndex = Math.floor(Math.random() * subjectAccusativeFem.length);

var verbInfinitive = [["is finding","has found","will find", "is found", "has been found","invenīre", "invenisse", "inventurum esse", "inveni", "inventum esse"],["is saving","has saved","will save", "is saved", "has been saved","servāre", "servavisse", "servaturum esse", "servari", "servatum esse"],["captures","captured","will capture", "is captured", "was captured","capere", "cēpisse", "capturum esse", "capi", "captum esse"],["loves","loved","will love", "is loved", "was loved","amāre", "amavisse", "amaturum esse", "amāri", "amatum esse"],["wounds","wounded","will wound", "is wounded", "was wounded","vulnerāre", "vulneravisse", "vulneraturum esse", "vulnerāri", "vulneratum esse"]];

var verbInfinitiveEng = [["is finding","has found","will find", "is found", "has been found","is finding","has found","will find", "is found", "has been found"],["is saving","has saved","will save", "is saved", "has been saved","is saving","has saved","will save", "is saved", "has been saved"],["captures","captured","will capture", "is captured", "was captured","captures","captured","will capture", "is captured", "was captured"],["loves","loved","will love", "is loved", "was loved","loves","loved","will love", "is loved", "was loved"],["wounds","wounded","will wound", "is wounded", "was wounded","wounds","wounded","will wound", "is wounded", "was wounded"]];



var verbInfinitivePast = [["was finding","had found","would find", "was being found", "had been found","invenīre", "invenisse", "inventurum esse", "inveni", "inventum esse"],["was saving","had saved","would save", "was being saved", "had been saved","servāre", "servavisse", "servaturum esse", "servari", "servatum esse"],["was capturing","had captured","would capture", "was being captured", "had been captured","capere", "cēpisse", "capturum esse", "capi", "captum esse"],["was loving","had loved","would love", "was being loved", "had been loved","amāre", "amavisse", "amaturum esse", "amāri", "amatum esse"],["was wounding","had wounded","would wound", "was being wounded", "had been wounded","vulnerāre", "vulneravisse", "vulneraturum esse", "vulnerāri", "vulneratum esse"]];
var verbInfinitiveEngPast = [["was finding","had found","would find", "was being found", "had been found","was finding","had found","would find", "was being found", "had been found"],["was saving","had saved","would save", "was being saved", "had been saved","was saving","had saved","would save", "was being saved", "had been saved"],["was capturing","had captured","would capture", "was being captured", "was capturing","had captured","would capture", "was being captured", "had been captured"],["was loving","had loved","would love", "was being loved", "had been loved","was loving","had loved","would love", "was being loved", "had been loved"],["was wounding","had wounded","would wound", "was being wounded", "had been wounded","was wounding","had wounded","would wound", "was being wounded", "had been wounded"]];

//var verbInfinitiveEng = [["loves","loved","will love", "is loved", "was loved"],["wounds","wounded","will wound", "is wounded", "was wounded"]];
//var verbInfinitiveLat = [["amāre", "amavisse", "amaturum esse", "amāri", "amatum esse"],["vulnerāre", "vulneravisse", "vulneraturum esse", "vulnerāri", "vulneratum esse"]];


//var tenseIndex = [0.1,2,3,4,]
var verbInfIndex = Math.floor(Math.random() * verbInfinitive.length);

//var tenseIndex = ["0","1", "2", "3","4"]
var tenseIndex = Math.floor(Math.random() * 5);


 var sentence = headyVerb[hVIndex][2] + " " + subjectAccusativeMas[sAMasIndex][0] + " " + verbInfinitive[verbInfIndex][tenseIndex + 5];
 var correctAnswer = pronounHe[pEIndex] + " " + headyVerb[hVIndex][0] + " that " + subjectAccusativeMas[sAMasIndex][1] + " " + verbInfinitiveEng[verbInfIndex][tenseIndex];
 var wrongAnswer1 = pronounHe[pEIndex] + " " + headyVerb[hVIndex][0] + " WR1 " + subjectAccusativeMas[sAMasIndex][1] + " " + verbInfinitiveEng[verbInfIndex][tenseIndex + 1];
 var wrongAnswer2 = pronounHe[pEIndex] + " " + headyVerb[hVIndex][0] + " WR2 " + subjectAccusativeMas[sAMasIndex][1] + " " + verbInfinitiveEng[verbInfIndex][tenseIndex + 2];
 var wrongAnswer3 = pronounHe[pEIndex] + " " + headyVerb[hVIndex][0] + " WR3 " + subjectAccusativeMas[sAMasIndex][1] + " " + verbInfinitiveEng[verbInfIndex][tenseIndex + 3];


 var sentencePast = headyVerb[hVIndex][3] + " " + subjectAccusativeMas[sAMasIndex][0] + " " + verbInfinitivePast[verbInfIndex][tenseIndex + 5];
 var correctAnswerPast = pronounShe[pEIndex] + " " + headyVerb[hVIndex][1] + " that " + subjectAccusativeMas[sAMasIndex][1] + " " + verbInfinitiveEngPast[verbInfIndex][tenseIndex];
 var wrongAnswer1Past = pronounShe[pEIndex] + " " + headyVerb[hVIndex][1] + " WR1 " + subjectAccusativeMas[sAMasIndex][1] + " " + verbInfinitiveEngPast[verbInfIndex][tenseIndex + 1];
 var wrongAnswer2Past = pronounShe[pEIndex] + " " + headyVerb[hVIndex][1] + " WR2 " + subjectAccusativeMas[sAMasIndex][1] + " " + verbInfinitiveEngPast[verbInfIndex][tenseIndex + 2];
 var wrongAnswer3Past = pronounShe[pEIndex] + " " + headyVerb[hVIndex][1] + " WR3 " + subjectAccusativeMas[sAMasIndex][1] + " " + verbInfinitiveEngPast[verbInfIndex][tenseIndex + 3];


var  checkAnswers = [[correctAnswer,true],[wrongAnswer1,false],[wrongAnswer2,false],[wrongAnswer3,false]];







  function testIndirectStatement(){

    resetNum();

    countDownTimer();
     timeleft = 25;
     countdown = setInterval(countDownTimer,1000);

     //shuffle(answers);


    startButton.disabled = true;



    //INDIRECT STATEMENT

     pE1 = [pres1stSing,pres2ndSing,pres3rdSing,pres1stPl,pres2ndPl,pres3rdPl];
     pE2 = [pres1stSing2,pres2ndSing2,pres3rdSing2,pres1stPl2,pres2ndPl2,pres3rdPl2];
     pE3 = [pres1stSing3,pres2ndSing3,pres3rdSing3,pres1stPl3,pres2ndPl3,pres3rdPl3];
     pE4 = [pres1stSing4,pres2ndSing4,pres3rdSing4,pres1stPl4,pres2ndPl4,pres3rdPl4];

     pT = [perfect1stSing,perfect2ndSing,perfect3rdSing,perfect1stPl,perfect2ndPl,perfect3rdPl];

     pEIndex = Math.floor(Math.random() * 6);

     headyVerb = [["say","said", "dīc" + pE3[pEIndex], "dīx" + pT[pEIndex]],["think","thought", "put" + pE1[pEIndex], "putav" + pT[pEIndex]], ["see","saw", "vid" + pE2[pEIndex], "vīd" + pT[pEIndex]], ["feel","felt", "sent" + pE4[pEIndex], "sens" + pT[pEIndex]],["hear","heard", "aud" + pE4[pEIndex], "audiv" + pT[pEIndex]],["know","knew", "sc" + pE4[pEIndex], "scīv" + pT[pEIndex]]];

    hVIndex = Math.floor(Math.random() * headyVerb.length);

     pronounHe = ["I","You","He does","We","You all", "They"];
     pronounShe = ["I","You","She","We","You all", "They"];

     subjectAccusativeMas = [["mercatorem", "the merchant"],["patrem","the father"],["agricolam", "the farmer"],["filium", "the son"],["nautam","the sailor"],["senem", "the old man"], ["servum","the servant"]];
    sAMasIndex = Math.floor(Math.random() * subjectAccusativeMas.length);

    subjectAccusativeFem = [["uxorem", "the wife"],["sororem","the sister"],["ancilam", "the maid servant"],["filiam", "the daughter"],["matrem", "the mother"],["feminam", "the woman"]];
    sAFemIndex = Math.floor(Math.random() * subjectAccusativeFem.length);

    verbInfinitive = [["is finding","has found","will find", "is found", "has been found","invenīre", "invenisse", "inventurum esse", "inveni", "inventum esse"],["is saving","has saved","will save", "is saved", "has been saved","servāre", "servavisse", "servaturum esse", "servari", "servatum esse"],["captures","captured","will capture", "is captured", "was captured","capere", "cēpisse", "capturum esse", "capi", "captum esse"],["loves","loved","will love", "is loved", "was loved","amāre", "amavisse", "amaturum esse", "amāri", "amatum esse"],["wounds","wounded","will wound", "is wounded", "was wounded","vulnerāre", "vulneravisse", "vulneraturum esse", "vulnerāri", "vulneratum esse"]];

    verbInfinitiveEng = [["is finding","has found","will find", "is found", "has been found","is finding","has found","will find", "is found", "has been found"],["is saving","has saved","will save", "is saved", "has been saved","is saving","has saved","will save", "is saved", "has been saved"],["captures","captured","will capture", "is captured", "was captured","captures","captured","will capture", "is captured", "was captured"],["loves","loved","will love", "is loved", "was loved","loves","loved","will love", "is loved", "was loved"],["wounds","wounded","will wound", "is wounded", "was wounded","wounds","wounded","will wound", "is wounded", "was wounded"]];



    verbInfinitivePast = [["was finding","had found","would find", "was being found", "had been found","invenīre", "invenisse", "inventurum esse", "inveni", "inventum esse"],["was saving","had saved","would save", "was being saved", "had been saved","servāre", "servavisse", "servaturum esse", "servari", "servatum esse"],["was capturing","had captured","would capture", "was being captured", "had been captured","capere", "cēpisse", "capturum esse", "capi", "captum esse"],["was loving","had loved","would love", "was being loved", "had been loved","amāre", "amavisse", "amaturum esse", "amāri", "amatum esse"],["was wounding","had wounded","would wound", "was being wounded", "had been wounded","vulnerāre", "vulneravisse", "vulneraturum esse", "vulnerāri", "vulneratum esse"]];
    verbInfinitiveEngPast = [["was finding","had found","would find", "was being found", "had been found","was finding","had found","would find", "was being found", "had been found"],["was saving","had saved","would save", "was being saved", "had been saved","was saving","had saved","would save", "was being saved", "had been saved"],["was capturing","had captured","would capture", "was being captured", "was capturing","had captured","would capture", "was being captured", "had been captured"],["was loving","had loved","would love", "was being loved", "had been loved","was loving","had loved","would love", "was being loved", "had been loved"],["was wounding","had wounded","would wound", "was being wounded", "had been wounded","was wounding","had wounded","would wound", "was being wounded", "had been wounded"]];

   //var verbInfinitiveEng = [["loves","loved","will love", "is loved", "was loved"],["wounds","wounded","will wound", "is wounded", "was wounded"]];
   //var verbInfinitiveLat = [["amāre", "amavisse", "amaturum esse", "amāri", "amatum esse"],["vulnerāre", "vulneravisse", "vulneraturum esse", "vulnerāri", "vulneratum esse"]];


   //var tenseIndex = [0.1,2,3,4,]
    verbInfIndex = Math.floor(Math.random() * verbInfinitive.length);

   //var tenseIndex = ["0","1", "2", "3","4"]
    tenseIndex = Math.floor(Math.random() * 5);


     sentence = headyVerb[hVIndex][2] + " " + subjectAccusativeMas[sAMasIndex][0] + " " + verbInfinitive[verbInfIndex][tenseIndex + 5];
     correctAnswer = pronounHe[pEIndex] + " " + headyVerb[hVIndex][0] + " that " + subjectAccusativeMas[sAMasIndex][1] + " " + verbInfinitiveEng[verbInfIndex][tenseIndex];
     wrongAnswer1 = pronounHe[pEIndex] + " " + headyVerb[hVIndex][0] + " WR1 " + subjectAccusativeMas[sAMasIndex][1] + " " + verbInfinitiveEng[verbInfIndex][tenseIndex + 1];
     wrongAnswer2 = pronounHe[pEIndex] + " " + headyVerb[hVIndex][0] + " WR2 " + subjectAccusativeMas[sAMasIndex][1] + " " + verbInfinitiveEng[verbInfIndex][tenseIndex + 2];
     wrongAnswer3 = pronounHe[pEIndex] + " " + headyVerb[hVIndex][0] + " WR3 " + subjectAccusativeMas[sAMasIndex][1] + " " + verbInfinitiveEng[verbInfIndex][tenseIndex + 3];


     sentencePast = headyVerb[hVIndex][3] + " " + subjectAccusativeMas[sAMasIndex][0] + " " + verbInfinitivePast[verbInfIndex][tenseIndex + 5];
     correctAnswerPast = pronounShe[pEIndex] + " " + headyVerb[hVIndex][1] + " that " + subjectAccusativeMas[sAMasIndex][1] + " " + verbInfinitiveEngPast[verbInfIndex][tenseIndex];
     wrongAnswer1Past = pronounShe[pEIndex] + " " + headyVerb[hVIndex][1] + " WR1 " + subjectAccusativeMas[sAMasIndex][1] + " " + verbInfinitiveEngPast[verbInfIndex][tenseIndex + 1];
     wrongAnswer2Past = pronounShe[pEIndex] + " " + headyVerb[hVIndex][1] + " WR2 " + subjectAccusativeMas[sAMasIndex][1] + " " + verbInfinitiveEngPast[verbInfIndex][tenseIndex + 2];
     wrongAnswer3Past = pronounShe[pEIndex] + " " + headyVerb[hVIndex][1] + " WR3 " + subjectAccusativeMas[sAMasIndex][1] + " " + verbInfinitiveEngPast[verbInfIndex][tenseIndex + 3];



     checkAnswers = [[correctAnswer,true],[wrongAnswer1,false],[wrongAnswer2,false],[wrongAnswer3,false]];

    //checkAnswers = [[correctAnswer,true],[wrongAnswer1,false],[wrongAnswer2,false],[wrongAnswer3,false]];

    shuffle(checkAnswers);

  startButton.innerHTML = sentence;

  document.getElementById(answers[0]).innerHTML = checkAnswers[0][0];

  document.getElementById(answers[1]).innerHTML = checkAnswers[1][0];

  document.getElementById(answers[2]).innerHTML =  checkAnswers[2][0];

  document.getElementById(answers[3]).innerHTML = checkAnswers[3][0];








/*

      function indirectStatementPresent(){




        if (num == 0){

       startButton.innerHTML = sentence;

       document.getElementById(answers[0]).innerHTML = correctAnswer;

       document.getElementById(answers[1]).innerHTML = wrongAnswer1;

       document.getElementById(answers[2]).innerHTML =  wrongAnswer2;

       document.getElementById(answers[3]).innerHTML = wrongAnswer3;

       //document.getElementById(answers[3]).innerHTML = predicateAdjectivesPlural[0][0];

       responseButton.innerHTML = "";

       //responseButton.onclick = function(){hint()};

     }  else if (num == 1){

       startButton.innerHTML = sentence1;

       document.getElementById(answers[0]).innerHTML = wrongAnswer3;

       document.getElementById(answers[1]).innerHTML = correctAnswer;

       document.getElementById(answers[2]).innerHTML =  wrongAnswer1;

       document.getElementById(answers[3]).innerHTML = wrongAnswer2;

   //document.getElementById(answers[3]).innerHTML = predicateAdjectivesPlural[0][0];

       responseButton.innerHTML = "";


       //responseButton.onclick = function(){hint()};

    }   else if  (num == 2){

      startButton.innerHTML = sentence1;

      document.getElementById(answers[0]).innerHTML = wrongAnswer2;

      document.getElementById(answers[1]).innerHTML = wrongAnswer3;

      document.getElementById(answers[2]).innerHTML = correctAnswer;

      document.getElementById(answers[3]).innerHTML = wrongAnswer1;

      //document.getElementById(answers[3]).innerHTML = predicateAdjectivesPlural[0][0];

      responseButton.innerHTML = "";

      //responseButton.onclick = function(){hint()};

    } else if  (num == 3){

      startButton.innerHTML = sentence1;

      document.getElementById(answers[0]).innerHTML =   wrongAnswer1;

      document.getElementById(answers[1]).innerHTML = wrongAnswer2;

      document.getElementById(answers[2]).innerHTML =  wrongAnswer3;

      document.getElementById(answers[3]).innerHTML = correctAnswer;


      responseButton.innerHTML = "";

      //responseButton.onclick = function(){hint()};

    }

  }

  indirectStatementPresent();

*/


  //abAbsFem();




  //gerundiveMixup();

    responseButton.disabled = false;










      resetAnswerColors();

      enableButtons();




        decrementCount();






      if (count == 0){

        gameOverAudio();

        startButton.innerHTML = "Select a New Game!";




        answerOne.innerHTML = game1Title;
        answerTwo.innerHTML = game2Title;
        answerThree.innerHTML = game3Title;
        answerFour.innerHTML = game4Title;

        document.getElementById("boxThree").innerHTML = "Score";
        responseButton.innerHTML = "You earned " + points + " points!";
        points = 0;

        stopTimer();
        document.getElementById("boxOne").innerHTML = "Timer";

        answerOne.onclick = function(){selectGame1()};
        answerTwo.onclick = function(){selectGame2()};
        answerThree.onclick = function(){selectGame3()};
        answerFour.onclick = function(){selectGame4()};

        count = 11;


         }




    }















  function indirectStatement(){

    resetNum();

    countDownTimer();
     timeleft = 25;
     countdown = setInterval(countDownTimer,1000);

     //shuffle(answers);


    startButton.disabled = true;



    //INDIRECT STATEMENT

    var pE1 = [pres1stSing,pres2ndSing,pres3rdSing,pres1stPl,pres2ndPl,pres3rdPl];
    var pE2 = [pres1stSing2,pres2ndSing2,pres3rdSing2,pres1stPl2,pres2ndPl2,pres3rdPl2];
    var pE3 = [pres1stSing3,pres2ndSing3,pres3rdSing3,pres1stPl3,pres2ndPl3,pres3rdPl3];
    var pE4 = [pres1stSing4,pres2ndSing4,pres3rdSing4,pres1stPl4,pres2ndPl4,pres3rdPl4];

    var pT = [perfect1stSing,perfect2ndSing,perfect3rdSing,perfect1stPl,perfect2ndPl,perfect3rdPl];

    var pEIndex = Math.floor(Math.random() * 6);

    var headyVerb = [["say","said", "dīc" + pE3[pEIndex], "dīx" + pT[pEIndex]],["think","thought", "put" + pE1[pEIndex], "putav" + pT[pEIndex]], ["see","saw", "vid" + pE2[pEIndex], "vīd" + pT[pEIndex]], ["feel","felt", "sent" + pE4[pEIndex], "sens" + pT[pEIndex]],["hear","heard", "aud" + pE4[pEIndex], "audiv" + pT[pEIndex]],["know","knew", "sc" + pE4[pEIndex], "scīv" + pT[pEIndex]]];

var hVIndex = Math.floor(Math.random() * headyVerb.length);

    var pronounHe = ["I","You","He does","We","You all", "They"];
    var pronounShe = ["I","You","She","We","You all", "They"];

    var subjectAccusativeMas = [["mercatorem", "the merchant"],["patrem","the father"],["agricolam", "the farmer"],["filium", "the son"],["nautam","the sailor"],["senem", "the old man"], ["servum","the servant"]];
var sAMasIndex = Math.floor(Math.random() * subjectAccusativeMas.length);

var subjectAccusativeFem = [["uxorem", "the wife"],["sororem","the sister"],["ancilam", "the maid servant"],["filiam", "the daughter"],["matrem", "the mother"],["feminam", "the woman"]];
var sAFemIndex = Math.floor(Math.random() * subjectAccusativeFem.length);

var verbInfinitive = [["is finding","has found","will find", "is found", "has been found","invenīre", "invenisse", "inventurum esse", "inveni", "inventum esse"],["is saving","has saved","will save", "is saved", "has been saved","servāre", "servavisse", "servaturum esse", "servari", "servatum esse"],["captures","captured","will capture", "is captured", "was captured","capere", "cēpisse", "capturum esse", "capi", "captum esse"],["loves","loved","will love", "is loved", "was loved","amāre", "amavisse", "amaturum esse", "amāri", "amatum esse"],["wounds","wounded","will wound", "is wounded", "was wounded","vulnerāre", "vulneravisse", "vulneraturum esse", "vulnerāri", "vulneratum esse"]];

var verbInfinitiveEng = [["is finding","has found","will find", "is found", "has been found","is finding","has found","will find", "is found", "has been found"],["is saving","has saved","will save", "is saved", "has been saved","is saving","has saved","will save", "is saved", "has been saved"],["captures","captured","will capture", "is captured", "was captured","captures","captured","will capture", "is captured", "was captured"],["loves","loved","will love", "is loved", "was loved","loves","loved","will love", "is loved", "was loved"],["wounds","wounded","will wound", "is wounded", "was wounded","wounds","wounded","will wound", "is wounded", "was wounded"]];



var verbInfinitivePast = [["was finding","had found","would find", "was being found", "had been found","invenīre", "invenisse", "inventurum esse", "inveni", "inventum esse"],["was saving","had saved","would save", "was being saved", "had been saved","servāre", "servavisse", "servaturum esse", "servari", "servatum esse"],["was capturing","had captured","would capture", "was being captured", "had been captured","capere", "cēpisse", "capturum esse", "capi", "captum esse"],["was loving","had loved","would love", "was being loved", "had been loved","amāre", "amavisse", "amaturum esse", "amāri", "amatum esse"],["was wounding","had wounded","would wound", "was being wounded", "had been wounded","vulnerāre", "vulneravisse", "vulneraturum esse", "vulnerāri", "vulneratum esse"]];
var verbInfinitiveEngPast = [["was finding","had found","would find", "was being found", "had been found","was finding","had found","would find", "was being found", "had been found"],["was saving","had saved","would save", "was being saved", "had been saved","was saving","had saved","would save", "was being saved", "had been saved"],["was capturing","had captured","would capture", "was being captured", "was capturing","had captured","would capture", "was being captured", "had been captured"],["was loving","had loved","would love", "was being loved", "had been loved","was loving","had loved","would love", "was being loved", "had been loved"],["was wounding","had wounded","would wound", "was being wounded", "had been wounded","was wounding","had wounded","would wound", "was being wounded", "had been wounded"]];

//var verbInfinitiveEng = [["loves","loved","will love", "is loved", "was loved"],["wounds","wounded","will wound", "is wounded", "was wounded"]];
//var verbInfinitiveLat = [["amāre", "amavisse", "amaturum esse", "amāri", "amatum esse"],["vulnerāre", "vulneravisse", "vulneraturum esse", "vulnerāri", "vulneratum esse"]];


//var tenseIndex = [0.1,2,3,4,]
var verbInfIndex = Math.floor(Math.random() * verbInfinitive.length);

//var tenseIndex = ["0","1", "2", "3","4"]
var tenseIndex = Math.floor(Math.random() * 5);


    var sentence1 = headyVerb[hVIndex][2] + " " + subjectAccusativeMas[sAMasIndex][0] + " " + verbInfinitive[verbInfIndex][tenseIndex + 5];
    var correctAnswer = pronounHe[pEIndex] + " " + headyVerb[hVIndex][0] + " that " + subjectAccusativeMas[sAMasIndex][1] + " " + verbInfinitiveEng[verbInfIndex][tenseIndex];
    var wrongAnswer1 = pronounHe[pEIndex] + " " + headyVerb[hVIndex][0] + " WR1 " + subjectAccusativeMas[sAMasIndex][1] + " " + verbInfinitiveEng[verbInfIndex][tenseIndex + 1];
    var wrongAnswer2 = pronounHe[pEIndex] + " " + headyVerb[hVIndex][0] + " WR2 " + subjectAccusativeMas[sAMasIndex][1] + " " + verbInfinitiveEng[verbInfIndex][tenseIndex + 2];
    var wrongAnswer3 = pronounHe[pEIndex] + " " + headyVerb[hVIndex][0] + " WR3 " + subjectAccusativeMas[sAMasIndex][1] + " " + verbInfinitiveEng[verbInfIndex][tenseIndex + 3];


    var sentencePast = headyVerb[hVIndex][3] + " " + subjectAccusativeMas[sAMasIndex][0] + " " + verbInfinitivePast[verbInfIndex][tenseIndex + 5];
    var correctAnswerPast = pronounShe[pEIndex] + " " + headyVerb[hVIndex][1] + " that " + subjectAccusativeMas[sAMasIndex][1] + " " + verbInfinitiveEngPast[verbInfIndex][tenseIndex];
    var wrongAnswer1Past = pronounShe[pEIndex] + " " + headyVerb[hVIndex][1] + " WR1 " + subjectAccusativeMas[sAMasIndex][1] + " " + verbInfinitiveEngPast[verbInfIndex][tenseIndex + 1];
    var wrongAnswer2Past = pronounShe[pEIndex] + " " + headyVerb[hVIndex][1] + " WR2 " + subjectAccusativeMas[sAMasIndex][1] + " " + verbInfinitiveEngPast[verbInfIndex][tenseIndex + 2];
    var wrongAnswer3Past = pronounShe[pEIndex] + " " + headyVerb[hVIndex][1] + " WR3 " + subjectAccusativeMas[sAMasIndex][1] + " " + verbInfinitiveEngPast[verbInfIndex][tenseIndex + 3];


//var checkAnswers = [[correctAnswer,true],[wrongAnswer1,false],[wrongAnswer2,false],[wrongAnswer3,false];

















      function indirectStatementPresent(){




        if (num == 0){

       startButton.innerHTML = sentencePast;

       document.getElementById(answers[0]).innerHTML = correctAnswerPast;

       document.getElementById(answers[1]).innerHTML = wrongAnswer1Past;

       document.getElementById(answers[2]).innerHTML =  wrongAnswer2Past;

       document.getElementById(answers[3]).innerHTML = wrongAnswer3Past;

       //document.getElementById(answers[3]).innerHTML = predicateAdjectivesPlural[0][0];

       responseButton.innerHTML = "";

       //responseButton.onclick = function(){hint()};

     }  else if (num == 1){

       startButton.innerHTML = sentence1;

       document.getElementById(answers[0]).innerHTML = wrongAnswer3;

       document.getElementById(answers[1]).innerHTML = correctAnswer;

       document.getElementById(answers[2]).innerHTML =  wrongAnswer1;

       document.getElementById(answers[3]).innerHTML = wrongAnswer2;

   //document.getElementById(answers[3]).innerHTML = predicateAdjectivesPlural[0][0];

       responseButton.innerHTML = "";


       //responseButton.onclick = function(){hint()};

    }   else if  (num == 2){

      startButton.innerHTML = sentence1;

      document.getElementById(answers[0]).innerHTML = wrongAnswer2;

      document.getElementById(answers[1]).innerHTML = wrongAnswer3;

      document.getElementById(answers[2]).innerHTML = correctAnswer;

      document.getElementById(answers[3]).innerHTML = wrongAnswer1;

      //document.getElementById(answers[3]).innerHTML = predicateAdjectivesPlural[0][0];

      responseButton.innerHTML = "";

      //responseButton.onclick = function(){hint()};

    } else if  (num == 3){

      startButton.innerHTML = sentence1;

      document.getElementById(answers[0]).innerHTML =   wrongAnswer1;

      document.getElementById(answers[1]).innerHTML = wrongAnswer2;

      document.getElementById(answers[2]).innerHTML =  wrongAnswer3;

      document.getElementById(answers[3]).innerHTML = correctAnswer;


      responseButton.innerHTML = "";

      //responseButton.onclick = function(){hint()};

    }

  }

  indirectStatementPresent();




  //abAbsFem();




  //gerundiveMixup();

    responseButton.disabled = false;










      resetAnswerColors();

      enableButtons();




        decrementCount();






      if (count == 0){

        gameOverAudio();

        startButton.innerHTML = "Select a New Game!";




        answerOne.innerHTML = game1Title;
        answerTwo.innerHTML = game2Title;
        answerThree.innerHTML = game3Title;
        answerFour.innerHTML = game4Title;

        document.getElementById("boxThree").innerHTML = "Score";
        responseButton.innerHTML = "You earned " + points + " points!";
        points = 0;

        stopTimer();
        document.getElementById("boxOne").innerHTML = "Timer";

        answerOne.onclick = function(){selectGame1()};
        answerTwo.onclick = function(){selectGame2()};
        answerThree.onclick = function(){selectGame3()};
        answerFour.onclick = function(){selectGame4()};

        count = 11;


         }




    }


















  function gOO(){

    resetNum();

    countDownTimer();
     timeleft = 25;
     countdown = setInterval(countDownTimer,1000);

     //shuffle(answers);


    startButton.disabled = true;

    class Adjective{

      constructor(adjStem){
        this.adjForm = adjStem;
      }
    }

    var adjArray = [["grav", "serious"],["vil", "cheap"],["util", "useful"],["terribil", "terrible"],["trist", "sad"],["fidel", "faithful"],["lev", "light"],["difficil", "difficult"],["brev", "short"], ["fort", "brave"]];
    var randomAdjIndex = Math.floor(Math.random() * adjArray.length);
    newAdj = new Adjective(adjArray[randomAdjIndex][0]);
    adjective = newAdj.adjForm;



    class Noun{

     constructor(nounStem){
     this.nounForm = nounStem;
     }
    }

    //var randomTenseIndex = Math.floor(Math.random() * 3);

    //This sets the correct subject in serpensA
    var nounArray = [["puell", "girl"], ["regin", "queen"],["pugn", "fight"],["fili", "daughter"],["amic", "girl friend"],["agricol", "farmer"], ["poet", "poet"], ["ancill", "maid servant"], ["naut", "sailor"]];
    var randomNounIndex = Math.floor(Math.random() * nounArray.length);
    newNoun = new Noun(nounArray[randomNounIndex][0]);
    noun = newNoun.nounForm;

    var nounArrayCLC = [["puell", "girl"], ["famili", "family"],["besti", "beast"],["de", "goddess"],["femin", "woman"],["regin", "queen"],["domin", "mistress"],["fili", "daughter"],["amic", "girl friend"],["agricol", "farmer"], ["poet", "poet"], ["ancill", "maid servant"], ["naut", "sailor"]];
    var randomNounCLCIndex = Math.floor(Math.random() * nounArrayCLC.length);
    newNounCLC = new Noun(nounArrayCLC[randomNounCLCIndex][0]);
    nounCLC = newNounCLC.nounForm;

    var nounArrayCLC2nd = [["serv", "slave"], ["domin", "master"],["amic", "friend"],["asin", "donkey"],["cerv", "deer"],["coqu", "cook"],["fili", "son"],["inimic", "enemy"],["lup", "wolf"],["patron", "patron"], ["venalici", "slave overseer"], ["marit", "husband"], ["philsoph", "philosopher"]];
    var randomNounCLC2ndIndex = Math.floor(Math.random() * nounArrayCLC2nd.length);
    newNounCLC2nd = new Noun(nounArrayCLC2nd[randomNounCLC2ndIndex][0]);
    nounCLC2nd = newNounCLC2nd.nounForm;

    var nounArrayCLC3rd = [["homo", "homin", "man"], ["pater", "patr","father"],["uxor", "uxor", "wife"],["senex", "sen", "old man"],["mercator", "mercator", "merchant"],["infans", "infant", "baby"],["iuvenis", "iuven","young man"],["mater", "matr", "mother"],["hospes", "hospit","guest"],["frater", "fatr", "brother"], ["soror", "soror", "sister"], ["civis", "civ","citizen"], ["tonsor", "tonsor","barber"],["testis", "test","witness"],["senator", "senator","senator"],["caupo", "caupon","innkeeper"],["leo", "leon","lion"],["pav", "pavon","peacock"],["canis", "can","dog"],["pestis", "pest","pest"],["fur", "fur","thief"],["gladiator", "gladiat","gladiator"],["cliens", "client","client"]];
    var randomNounCLC3rdIndex = Math.floor(Math.random() * nounArrayCLC3rd.length);
    newNounCLC3rd = new Noun(nounArrayCLC3rd[randomNounCLC3rdIndex][0]);
    nounCLC3rd = newNounCLC3rd.nounForm;
    newNounCLC3rdStem = new Noun(nounArrayCLC3rd[randomNounCLC3rdIndex][1]);
    nounCLC3rdStem = newNounCLC3rdStem.nounForm;

    var dirObjArray = [["puell", "girl"], ["sell", "chair"],["vill", "house"],["vi", "road"],["silv", "forest"],["regin", "queen"],["pugn", "fight"],["port", "gate"],["ir", "anger"],["gale", "helmet"],["fili", "daughter"],["anim", "soul"],["amic", "girl friend"],["agricol", "farmer"], ["poet", "poet"], ["ancill", "maid servant"], ["naut", "sailor"]];
    var randomDirObjIndex = Math.floor(Math.random() * dirObjArray.length);
    newObject = new Noun(dirObjArray[randomDirObjIndex][0]);
    object = newObject.nounForm;

    var dirObjCLCArray = [["puell", "girl"], ["sell", "chair"],["vill", "house"],["vi", "road"],["silv", "forest"],["regin", "queen"],["pugn", "fight"],["port", "gate"],["ir", "anger"],["gale", "helmet"],["fili", "daughter"],["anim", "soul"],["amic", "girl friend"],["agricol", "farmer"], ["poet", "poet"], ["ancill", "maid servant"], ["naut", "sailor"]];
    var randomDirObjCLCIndex = Math.floor(Math.random() * dirObjCLCArray.length);
    newObjectCLC = new Noun(dirObjCLCArray[randomDirObjCLCIndex][0]);
    objectCLC = newObjectCLC.nounForm;


    class Verb{
     constructor(verbStem){
       this.verbForm = verbStem;
     }
    }


    //The sets the correct verb in serpensC
    var verbArray = [["loves","loved", "was loving", "will love", "am"], ["begs","begged", "was begging", "will beg","or"],["observes","observed", "was observing", "will observe", "observ"],["carries","carried", "was carrying", "will carry", "port"],["greets","greeted", "was greeting", "will greet", "salut"],["kills","killed", "was killing", "will kill", "nec"],["fights", "fought", "was fighting", "will fight", "pugn"], ["saves","saved", "was saving", "will save", "serv"], ["looks at", "looked at", "was looking at", "will look at", "spect"], ["calls","called", "was calling", "will call","voc"],["carries","carried", "was carrying", "will carry","port"], ["annoys","annoyed", "was annoying", "will annoy","vex"], ["wounds","wounded", "was wounding", "will wound","vulner"], ["beats","beat", "was beating", "will beat","verber"], ["scolds","scolded", "was scolding", "will scold","vituper"], ["hits","hit", "was hitting", "will hit","puls"], ["frees","freed", "was freeing", "will free","liber"], ["waits for","waited for", "was waiting", "will wait","exspect"], ["avoids","avoided", "was avoiding", "will avoid","vit"], ["hides","hid", "was hiding", "will hide","cel"]];
  var randomVerbIndex = Math.floor(Math.random() * verbArray.length);
    newVerb = new Verb(verbArray[randomVerbIndex][4]);
    verb = newVerb.verbForm;


    var verbTenseArray = [pres3rdSing, per3rdSing, imp3rdSing, fut3rdSing];



    //var num = Math.floor(Math.random() * 4);

    //var num = numberArray[randomNumberArrayIndex];
    //var verbPE = verbTenseArray[randomNumberArrayIndex];

    //shuffle(verbTenseArray);

    var coorConjArr = ["When", "Since", "Because", "Although"];
    var ranCoorConjArrIndex = Math.floor(Math.random() * coorConjArr.length);
    var ranCoorConjArrIndex1 = Math.floor(Math.random() * coorConjArr.length);
    var ranCoorConjArrIndex2 = Math.floor(Math.random() * coorConjArr.length);

    var abSingMasc = [["puerō", "boy"],["fure", "thief"],["mercatore", "merchant"],["servō", "slave"],["milite", "soldier"],["patre", "father"],["fratre", "brother"],["dominō", "master"],["coquō", "cook"],["aprō", "boar"],["maritō", "husband"],["cervō", "deer"],["filiō", "son"],["lupō", "wolf"],["magistrō", "teacher"],["cane", "dog"],["cive", "citizen"], ["caupone", "innkeeper"],["iuvene", "youth"],["cliente", "client"],["consule", "consul"],["animali", "animal"],["sene", "old man"],["homine", "man"],["pede", "foot"],["nautā", "sailor"],["poetā", "given"],["agricolā", "farmer"]];
  var ranAbSingMascIndex = Math.floor(Math.random() * abSingMasc.length);
    var abSingFem = [["puellā", "girl"],["feminā", "woman"],["uxore", "wife"],["ancillā", "slave girl"], ["sorore", "sister"], ["matre", "mother"], ["ave", "bird"],["deā", "goddess"],["nave", "ship"],["bestiā", "beast"],["statuā", "statue"],["stellā", "star"]];
  var ranAbSingFemIndex = Math.floor(Math.random() * abSingFem.length);
    var pPP = [["capt", "captured"],["vis", "seen"],["amat", "loved"],["tent", "held"],["audit", "heard"],["interfect", "killed"],["invent", "found"],["dat", "given"],["delet", "destroyed"],["portat", "carried"],["liberat", "freed"],["vocat", "called"],["vexat", "annoyed"], ["spectat", "looked at"]];
  var ranPartIndex = Math.floor(Math.random() * pPP.length);
    var pAP = [["capiente", "capturing"],["vidente", "seeing"],["amante", "loving"],["tenente", "holding"],["audiente", "hearing"],["interficiente", "killing"],["inveniente", "finding"],["dante", "giving"],["delente", "destroying"],["portante", "carrying"],["liberante", "freeing"],["vocante", "calling"],["vexante", "annoying"], ["spectante", "looking at"]];
  //var ranPAPIndex = Math.floor(Math.random() * pAP.length);
    var fAP = [["captur", "about to capture"],["visur", "about to see"],["amatur", "about to love"],["tentur", "about to hold"],["auditur", "about to hear"],["interfectur", "about to kill"],["inventur", "about to find"],["datur", "about to give"],["deletur", "about to destroy"],["portatur", "about to carry"],["liberatur", "about to free"],["vocatur", "about to call"],["vexatur", "about to annoy"], ["spectatur", "about to look at"]];
  //var ranFAPIndex = Math.floor(Math.random() * fAP.length);

  var ablativeAbsolute0 = abSingMasc[ranAbSingMascIndex][0] + " " + pPP[ranPartIndex][0] + "ō";
  var ablativeAbsolute1 = abSingMasc[ranAbSingMascIndex][0] + " " + pAP[ranPartIndex][0];
  var ablativeAbsolute2 = abSingMasc[ranAbSingMascIndex][0] + " " + pPP[ranPartIndex][0] + "ō";
  var ablativeAbsolute3 = abSingMasc[ranAbSingMascIndex][0] + " " + fAP[ranPartIndex][0] + "ō";

  var ablativeAbsolute4 = abSingFem[ranAbSingFemIndex][0] + " " + pPP[ranPartIndex][0] + "ā";
  var ablativeAbsolute5 = abSingFem[ranAbSingFemIndex][0] + " " + fAP[ranPartIndex][0] + "ā";
  var ablativeAbsolute6 = abSingFem[ranAbSingFemIndex][0] + " " + pPP[ranPartIndex][0] + "ā";
  var ablativeAbsolute7 = abSingFem[ranAbSingFemIndex][0] + " " + pAP[ranPartIndex][0];

var datOfAgent = [["militī","the soldier","by the soldier"],["virō","the man","by the man"],["uxorī","the wife","by the wife"],["patrī","the father","by the father"],["matri","the mother","by the mother"],["puellae","the girl","by the girl"],["puerō","the boy","by the boy"],["servō","the slave","by the slave"],["dominō","the master","by the master"],["sororī","the sister","by the sister"],["fratrī","the brother","by the brother"],["dominae","the mistress","by the mistress"],["coquō","the cook","by the cook"],["amicō","the friend","by the friend"]];
var datOAIndex = Math.floor(Math.random() * datOfAgent.length);

var datOfAgentPronouns = [["mihi","I was","I","me"],["tibi","you were","you","you"],["eī","he was","he","him"],["eī","she was","she","her"],["nobis","we were","we","us"],["vobis","you","you","you"],["eīs","they were","they","them"]];
var datOAPronounIndex = Math.floor(Math.random() * datOfAgentPronouns.length);

var pronouns = ["I","You","He","She","It","We","They"];
var pronounIndex = Math.floor(Math.random() * pronouns.length);

var must2 = ["must","should", "ought to"];
var must2Index = Math.floor(Math.random() * must2.length);




var gerundive = [["capiendum est", "capture","captured"],["videndum est", "see","seen"],["amandum est", "love","loved"],["tenendum est", "hold","held"],["audiendum est", "hear","heard"],["interficiendum est", "kill","killed"],["inveniendum est", "find","found"],["dandum est", "give","given"],["delendum est", "destroy","destroyed"],["portandum est", "carry","carried"], ["liberandum est", "free","freed"],["vocandum est", "call","called"],["vexandum est", "annoy","annoyed"], ["spectandum est", "watch","watched"],["agendum est", "do","done"],["faciendum est", "make","made"]];
var gerundiveIndex = Math.floor(Math.random() * gerundive.length);
var must = ["must"];
var mustIndex = Math.floor(Math.random() * must.length);
var was = ["had been","will have been"];
var wasIndex = Math.floor(Math.random() * was.length);
var when = ["When","Although", "Since", "Because"];
var whenIndex = Math.floor(Math.random() * when.length);
var it = ["It must","He must", "She must", "I must", "You must", "We must", "They must"];
var itIndex = Math.floor(Math.random() * it.length);
var onlyIt = ["It must be","It has to be", "It ought to be"];
var onlyItIndex = Math.floor(Math.random() * onlyIt.length);

var latinGerundive1 = datOfAgent[datOAIndex][0] + " " + gerundive[gerundiveIndex][0];
var latinGerundive2 = datOfAgentPronouns[datOAPronounIndex][0] + " " + gerundive[gerundiveIndex][0];

var correctGerundive1 = datOfAgent[datOAIndex][1] + " " + must[mustIndex] + " " + gerundive[gerundiveIndex][1] + " it";
var correctGerundive2 = onlyIt[onlyItIndex] + " " + gerundive[gerundiveIndex][2] + " " + datOfAgent[datOAIndex][2];

var correctGerundive3 = datOfAgentPronouns[datOAPronounIndex][2] + " " + must2[must2Index] + " " + gerundive[gerundiveIndex][1] + " it";
var correctGerundive4 = onlyIt[onlyItIndex] + " " + gerundive[gerundiveIndex][2] + " by " + datOfAgentPronouns[datOAPronounIndex][3];


var wrongGerundive1 = datOfAgent[datOAIndex][1] + " " + was[wasIndex] + " " + gerundive[gerundiveIndex][2];
var wrongGerundive2 = when[whenIndex] + " " + datOfAgent[datOAIndex][1] + " was " + gerundive[gerundiveIndex][2];
var wrongGerundive3 = it[itIndex] + " " + gerundive[gerundiveIndex][1] + " " + datOfAgent[datOAIndex][1];

var wrongGerundive4 = datOfAgentPronouns[datOAPronounIndex][2] + " " + was[wasIndex] + " " + gerundive[gerundiveIndex][2];
var wrongGerundive5 = when[whenIndex] + " " + datOfAgentPronouns[datOAPronounIndex][1] + " " + gerundive[gerundiveIndex][2];
var wrongGerundive6 = "It must " + gerundive[gerundiveIndex][1] + " " + datOfAgentPronouns[datOAPronounIndex][3];


//var correctGerundive = [correctGerundive1,correctGerundive2, correctGerundive3,correctGerundive4];
//var correctGerundiveIndex = Math.floor(Math.random() * correctGerundive.length);


      function gerundive1(){




        if (num == 0){

       startButton.innerHTML = latinGerundive1;

       document.getElementById(answers[0]).innerHTML = correctGerundive1;

       document.getElementById(answers[1]).innerHTML = wrongGerundive1;

       document.getElementById(answers[2]).innerHTML =  wrongGerundive2;

       document.getElementById(answers[3]).innerHTML = wrongGerundive3;

       //document.getElementById(answers[3]).innerHTML = predicateAdjectivesPlural[0][0];

       responseButton.innerHTML = "";

       //responseButton.onclick = function(){hint()};

     }  else if (num == 1){

       startButton.innerHTML = latinGerundive1;

       document.getElementById(answers[0]).innerHTML = wrongGerundive3;

       document.getElementById(answers[1]).innerHTML = correctGerundive2;

       document.getElementById(answers[2]).innerHTML =  wrongGerundive1;

       document.getElementById(answers[3]).innerHTML = wrongGerundive2;
   //document.getElementById(answers[3]).innerHTML = predicateAdjectivesPlural[0][0];

       responseButton.innerHTML = "";


       //responseButton.onclick = function(){hint()};

    }   else if  (num == 2){

      startButton.innerHTML = latinGerundive2;

      document.getElementById(answers[0]).innerHTML = wrongGerundive5;

      document.getElementById(answers[1]).innerHTML = wrongGerundive4;

      document.getElementById(answers[2]).innerHTML =  correctGerundive3;

      document.getElementById(answers[3]).innerHTML = wrongGerundive6;

      //document.getElementById(answers[3]).innerHTML = predicateAdjectivesPlural[0][0];

      responseButton.innerHTML = "";

      //responseButton.onclick = function(){hint()};

    } else if  (num == 3){

      startButton.innerHTML = latinGerundive2;

      document.getElementById(answers[0]).innerHTML = wrongGerundive6;

      document.getElementById(answers[1]).innerHTML = wrongGerundive5;

      document.getElementById(answers[2]).innerHTML =  wrongGerundive4;

      document.getElementById(answers[3]).innerHTML = correctGerundive4;

      responseButton.innerHTML = "";

      //responseButton.onclick = function(){hint()};

    }

  }

gerundive1();

  function gerundive2(){




    if (num == 0){

   startButton.innerHTML = ablativeAbsolute4;

   document.getElementById(answers[0]).innerHTML = coorConjArr[ranCoorConjArrIndex] + " the " + abSingFem[ranAbSingFemIndex][1] + " was " + pPP[ranPartIndex][1];

   document.getElementById(answers[1]).innerHTML = "While the " + abSingFem[ranAbSingFemIndex][1] + " was " + pAP[ranPartIndex][1];

   document.getElementById(answers[2]).innerHTML =  "After " + pAP[ranPartIndex][1] + " the " + abSingFem[ranAbSingFemIndex][1];

   document.getElementById(answers[3]).innerHTML = coorConjArr[ranCoorConjArrIndex2] + " the " + abSingFem[ranAbSingFemIndex][1] + " was " + fAP[ranPartIndex][1];

   //document.getElementById(answers[3]).innerHTML = predicateAdjectivesPlural[0][0];

   responseButton.innerHTML = "";

   //responseButton.onclick = function(){hint()};

  }  else if (num == 1){

   startButton.innerHTML = ablativeAbsolute5;

   document.getElementById(answers[0]).innerHTML = coorConjArr[ranCoorConjArrIndex] + " the " + abSingFem[ranAbSingFemIndex][1] + " was " + pPP[ranPartIndex][1];

   document.getElementById(answers[1]).innerHTML = coorConjArr[ranCoorConjArrIndex2] + " the " + abSingFem[ranAbSingFemIndex][1] + " was " + fAP[ranPartIndex][1];

   document.getElementById(answers[2]).innerHTML =  "After " + pAP[ranPartIndex][1] + " the " + abSingFem[ranAbSingFemIndex][1];

   document.getElementById(answers[3]).innerHTML = "While the " + abSingFem[ranAbSingFemIndex][1] + " was " + pAP[ranPartIndex][1];


   //document.getElementById(answers[3]).innerHTML = predicateAdjectivesPlural[0][0];

   responseButton.innerHTML = "";


   //responseButton.onclick = function(){hint()};

  }   else if  (num == 2){

  startButton.innerHTML = ablativeAbsolute6;

  document.getElementById(answers[0]).innerHTML = "After " + pAP[ranPartIndex][1] + " the " + abSingFem[ranAbSingFemIndex][1];

  document.getElementById(answers[1]).innerHTML = "While the " + abSingFem[ranAbSingFemIndex][1] + " was " + pAP[ranPartIndex][1];

  document.getElementById(answers[2]).innerHTML =  coorConjArr[ranCoorConjArrIndex] + " the " + abSingFem[ranAbSingFemIndex][1] + " was " + pPP[ranPartIndex][1];

  document.getElementById(answers[3]).innerHTML = coorConjArr[ranCoorConjArrIndex2] + " the " + abSingFem[ranAbSingFemIndex][1] + " was " + fAP[ranPartIndex][1];

  //document.getElementById(answers[3]).innerHTML = predicateAdjectivesPlural[0][0];

  responseButton.innerHTML = "";

  //responseButton.onclick = function(){hint()};

  } else if  (num == 3){

  startButton.innerHTML = ablativeAbsolute7;

  document.getElementById(answers[0]).innerHTML = "After " + pAP[ranPartIndex][1] + " the " + abSingFem[ranAbSingFemIndex][1];

  document.getElementById(answers[1]).innerHTML = coorConjArr[ranCoorConjArrIndex2] + " the " + abSingFem[ranAbSingFemIndex][1] + " was " + fAP[ranPartIndex][1];

  document.getElementById(answers[2]).innerHTML =  coorConjArr[ranCoorConjArrIndex] + " the " + abSingFem[ranAbSingFemIndex][1] + " was " + pPP[ranPartIndex][1];

  document.getElementById(answers[3]).innerHTML = "While the " + abSingFem[ranAbSingFemIndex][1] + " was " + pAP[ranPartIndex][1];

  //document.getElementById(answers[3]).innerHTML = predicateAdjectivesPlural[0][0];

  responseButton.innerHTML = "";

  //responseButton.onclick = function(){hint()};

  }

  }



  //abAbsFem();




  //gerundiveMixup();

    responseButton.disabled = false;










      resetAnswerColors();

      enableButtons();




        decrementCount();






      if (count == 0){

        gameOverAudio();

        startButton.innerHTML = "Select a New Game!";




        answerOne.innerHTML = game1Title;
        answerTwo.innerHTML = game2Title;
        answerThree.innerHTML = game3Title;
        answerFour.innerHTML = game4Title;

        document.getElementById("boxThree").innerHTML = "Score";
        responseButton.innerHTML = "You earned " + points + " points!";
        points = 0;

        stopTimer();
        document.getElementById("boxOne").innerHTML = "Timer";

        answerOne.onclick = function(){selectGame1()};
        answerTwo.onclick = function(){selectGame2()};
        answerThree.onclick = function(){selectGame3()};
        answerFour.onclick = function(){selectGame4()};

        count = 11;


         }




    }















  function ablativeAbsolute(){

    resetNum();

    countDownTimer();
     timeleft = 25;
     countdown = setInterval(countDownTimer,1000);

     //shuffle(answers);


    startButton.disabled = true;

    class Adjective{

      constructor(adjStem){
        this.adjForm = adjStem;
      }
    }

    var adjArray = [["grav", "serious"],["vil", "cheap"],["util", "useful"],["terribil", "terrible"],["trist", "sad"],["fidel", "faithful"],["lev", "light"],["difficil", "difficult"],["brev", "short"], ["fort", "brave"]];
    var randomAdjIndex = Math.floor(Math.random() * adjArray.length);
    newAdj = new Adjective(adjArray[randomAdjIndex][0]);
    adjective = newAdj.adjForm;



    class Noun{

     constructor(nounStem){
     this.nounForm = nounStem;
     }
    }

    //var randomTenseIndex = Math.floor(Math.random() * 3);

    //This sets the correct subject in serpensA
    var nounArray = [["puell", "girl"], ["regin", "queen"],["pugn", "fight"],["fili", "daughter"],["amic", "girl friend"],["agricol", "farmer"], ["poet", "poet"], ["ancill", "maid servant"], ["naut", "sailor"]];
    var randomNounIndex = Math.floor(Math.random() * nounArray.length);
    newNoun = new Noun(nounArray[randomNounIndex][0]);
    noun = newNoun.nounForm;

    var nounArrayCLC = [["puell", "girl"], ["famili", "family"],["besti", "beast"],["de", "goddess"],["femin", "woman"],["regin", "queen"],["domin", "mistress"],["fili", "daughter"],["amic", "girl friend"],["agricol", "farmer"], ["poet", "poet"], ["ancill", "maid servant"], ["naut", "sailor"]];
    var randomNounCLCIndex = Math.floor(Math.random() * nounArrayCLC.length);
    newNounCLC = new Noun(nounArrayCLC[randomNounCLCIndex][0]);
    nounCLC = newNounCLC.nounForm;

    var nounArrayCLC2nd = [["serv", "slave"], ["domin", "master"],["amic", "friend"],["asin", "donkey"],["cerv", "deer"],["coqu", "cook"],["fili", "son"],["inimic", "enemy"],["lup", "wolf"],["patron", "patron"], ["venalici", "slave overseer"], ["marit", "husband"], ["philsoph", "philosopher"]];
    var randomNounCLC2ndIndex = Math.floor(Math.random() * nounArrayCLC2nd.length);
    newNounCLC2nd = new Noun(nounArrayCLC2nd[randomNounCLC2ndIndex][0]);
    nounCLC2nd = newNounCLC2nd.nounForm;

    var nounArrayCLC3rd = [["homo", "homin", "man"], ["pater", "patr","father"],["uxor", "uxor", "wife"],["senex", "sen", "old man"],["mercator", "mercator", "merchant"],["infans", "infant", "baby"],["iuvenis", "iuven","young man"],["mater", "matr", "mother"],["hospes", "hospit","guest"],["frater", "fatr", "brother"], ["soror", "soror", "sister"], ["civis", "civ","citizen"], ["tonsor", "tonsor","barber"],["testis", "test","witness"],["senator", "senator","senator"],["caupo", "caupon","innkeeper"],["leo", "leon","lion"],["pav", "pavon","peacock"],["canis", "can","dog"],["pestis", "pest","pest"],["fur", "fur","thief"],["gladiator", "gladiat","gladiator"],["cliens", "client","client"]];
    var randomNounCLC3rdIndex = Math.floor(Math.random() * nounArrayCLC3rd.length);
    newNounCLC3rd = new Noun(nounArrayCLC3rd[randomNounCLC3rdIndex][0]);
    nounCLC3rd = newNounCLC3rd.nounForm;
    newNounCLC3rdStem = new Noun(nounArrayCLC3rd[randomNounCLC3rdIndex][1]);
    nounCLC3rdStem = newNounCLC3rdStem.nounForm;

    var dirObjArray = [["puell", "girl"], ["sell", "chair"],["vill", "house"],["vi", "road"],["silv", "forest"],["regin", "queen"],["pugn", "fight"],["port", "gate"],["ir", "anger"],["gale", "helmet"],["fili", "daughter"],["anim", "soul"],["amic", "girl friend"],["agricol", "farmer"], ["poet", "poet"], ["ancill", "maid servant"], ["naut", "sailor"]];
    var randomDirObjIndex = Math.floor(Math.random() * dirObjArray.length);
    newObject = new Noun(dirObjArray[randomDirObjIndex][0]);
    object = newObject.nounForm;

    var dirObjCLCArray = [["puell", "girl"], ["sell", "chair"],["vill", "house"],["vi", "road"],["silv", "forest"],["regin", "queen"],["pugn", "fight"],["port", "gate"],["ir", "anger"],["gale", "helmet"],["fili", "daughter"],["anim", "soul"],["amic", "girl friend"],["agricol", "farmer"], ["poet", "poet"], ["ancill", "maid servant"], ["naut", "sailor"]];
    var randomDirObjCLCIndex = Math.floor(Math.random() * dirObjCLCArray.length);
    newObjectCLC = new Noun(dirObjCLCArray[randomDirObjCLCIndex][0]);
    objectCLC = newObjectCLC.nounForm;


    class Verb{
     constructor(verbStem){
       this.verbForm = verbStem;
     }
    }


    //The sets the correct verb in serpensC
    var verbArray = [["loves","loved", "was loving", "will love", "am"], ["begs","begged", "was begging", "will beg","or"],["observes","observed", "was observing", "will observe", "observ"],["carries","carried", "was carrying", "will carry", "port"],["greets","greeted", "was greeting", "will greet", "salut"],["kills","killed", "was killing", "will kill", "nec"],["fights", "fought", "was fighting", "will fight", "pugn"], ["saves","saved", "was saving", "will save", "serv"], ["looks at", "looked at", "was looking at", "will look at", "spect"], ["calls","called", "was calling", "will call","voc"],["carries","carried", "was carrying", "will carry","port"], ["annoys","annoyed", "was annoying", "will annoy","vex"], ["wounds","wounded", "was wounding", "will wound","vulner"], ["beats","beat", "was beating", "will beat","verber"], ["scolds","scolded", "was scolding", "will scold","vituper"], ["hits","hit", "was hitting", "will hit","puls"], ["frees","freed", "was freeing", "will free","liber"], ["waits for","waited for", "was waiting", "will wait","exspect"], ["avoids","avoided", "was avoiding", "will avoid","vit"], ["hides","hid", "was hiding", "will hide","cel"]];
  var randomVerbIndex = Math.floor(Math.random() * verbArray.length);
    newVerb = new Verb(verbArray[randomVerbIndex][4]);
    verb = newVerb.verbForm;


    var verbTenseArray = [pres3rdSing, per3rdSing, imp3rdSing, fut3rdSing];



    //var num = Math.floor(Math.random() * 4);

    //var num = numberArray[randomNumberArrayIndex];
    //var verbPE = verbTenseArray[randomNumberArrayIndex];

    //shuffle(verbTenseArray);

    var coorConjArr = ["When", "Since", "Because", "Although"];
    var ranCoorConjArrIndex = Math.floor(Math.random() * coorConjArr.length);
    var ranCoorConjArrIndex1 = Math.floor(Math.random() * coorConjArr.length);
    var ranCoorConjArrIndex2 = Math.floor(Math.random() * coorConjArr.length);

    var abSingMasc = [["puerō", "boy"],["fure", "thief"],["mercatore", "merchant"],["servō", "slave"],["milite", "soldier"],["patre", "father"],["fratre", "brother"],["dominō", "master"],["coquō", "cook"],["aprō", "boar"],["maritō", "husband"],["cervō", "deer"],["filiō", "son"],["lupō", "wolf"],["magistrō", "teacher"],["cane", "dog"],["cive", "citizen"], ["caupone", "innkeeper"],["iuvene", "youth"],["cliente", "client"],["consule", "consul"],["animali", "animal"],["sene", "old man"],["homine", "man"],["pede", "foot"],["nautā", "sailor"],["poetā", "given"],["agricolā", "farmer"]];
var ranAbSingMascIndex = Math.floor(Math.random() * abSingMasc.length);
    var abSingFem = [["puellā", "girl"],["feminā", "woman"],["uxore", "wife"],["ancillā", "slave girl"], ["sorore", "sister"], ["matre", "mother"], ["ave", "bird"],["deā", "goddess"],["nave", "ship"],["bestiā", "beast"],["statuā", "statue"],["stellā", "star"]];
var ranAbSingFemIndex = Math.floor(Math.random() * abSingFem.length);
    var pPP = [["capt", "captured"],["vis", "seen"],["amat", "loved"],["tent", "held"],["audit", "heard"],["interfect", "killed"],["invent", "found"],["dat", "given"],["delet", "destroyed"],["portat", "carried"],["liberat", "freed"],["vocat", "called"],["vexat", "annoyed"], ["spectat", "looked at"]];
var ranPartIndex = Math.floor(Math.random() * pPP.length);
    var pAP = [["capiente", "capturing"],["vidente", "seeing"],["amante", "loving"],["tenente", "holding"],["audiente", "hearing"],["interficiente", "killing"],["inveniente", "finding"],["dante", "giving"],["delente", "destroying"],["portante", "carrying"],["liberante", "freeing"],["vocante", "calling"],["vexante", "annoying"], ["spectante", "looking at"]];
//var ranPAPIndex = Math.floor(Math.random() * pAP.length);
    var fAP = [["captur", "about to capture"],["visur", "about to see"],["amatur", "about to love"],["tentur", "about to hold"],["auditur", "about to hear"],["interfectur", "about to kill"],["inventur", "about to find"],["datur", "about to give"],["deletur", "about to destroy"],["portatur", "about to carry"],["liberatur", "about to free"],["vocatur", "about to call"],["vexatur", "about to annoy"], ["spectatur", "about to look at"]];
//var ranFAPIndex = Math.floor(Math.random() * fAP.length);

var ablativeAbsolute0 = abSingMasc[ranAbSingMascIndex][0] + " " + pPP[ranPartIndex][0] + "ō";
var ablativeAbsolute1 = abSingMasc[ranAbSingMascIndex][0] + " " + pAP[ranPartIndex][0];
var ablativeAbsolute2 = abSingMasc[ranAbSingMascIndex][0] + " " + pPP[ranPartIndex][0] + "ō";
var ablativeAbsolute3 = abSingMasc[ranAbSingMascIndex][0] + " " + fAP[ranPartIndex][0] + "ō";

var ablativeAbsolute4 = abSingFem[ranAbSingFemIndex][0] + " " + pPP[ranPartIndex][0] + "ā";
var ablativeAbsolute5 = abSingFem[ranAbSingFemIndex][0] + " " + fAP[ranPartIndex][0] + "ā";
var ablativeAbsolute6 = abSingFem[ranAbSingFemIndex][0] + " " + pPP[ranPartIndex][0] + "ā";
var ablativeAbsolute7 = abSingFem[ranAbSingFemIndex][0] + " " + pAP[ranPartIndex][0];




      function abAbsMasc(){




        if (num == 0){

       startButton.innerHTML = ablativeAbsolute0;

       document.getElementById(answers[0]).innerHTML = coorConjArr[ranCoorConjArrIndex] + " the " + abSingMasc[ranAbSingMascIndex][1] + " was " + pPP[ranPartIndex][1];

       document.getElementById(answers[1]).innerHTML = "While the " + abSingMasc[ranAbSingMascIndex][1] + " was " + pAP[ranPartIndex][1];

       document.getElementById(answers[2]).innerHTML =  "After " + pAP[ranPartIndex][1] + " the " + abSingMasc[ranAbSingMascIndex][1];

       document.getElementById(answers[3]).innerHTML = coorConjArr[ranCoorConjArrIndex2] + " the " + abSingMasc[ranAbSingMascIndex][1] + " was " + fAP[ranPartIndex][1];

       //document.getElementById(answers[3]).innerHTML = predicateAdjectivesPlural[0][0];

       responseButton.innerHTML = "";

       //responseButton.onclick = function(){hint()};

     }  else if (num == 1){

       startButton.innerHTML = ablativeAbsolute1;

       document.getElementById(answers[0]).innerHTML = coorConjArr[ranCoorConjArrIndex] + " the " + abSingMasc[ranAbSingMascIndex][1] + " was " + pPP[ranPartIndex][1];

       document.getElementById(answers[1]).innerHTML = "While the " + abSingMasc[ranAbSingMascIndex][1] + " was " + pAP[ranPartIndex][1];

       document.getElementById(answers[2]).innerHTML =  "After " + pAP[ranPartIndex][1] + " the " + abSingMasc[ranAbSingMascIndex][1];

       document.getElementById(answers[3]).innerHTML = coorConjArr[ranCoorConjArrIndex2] + " the " + abSingMasc[ranAbSingMascIndex][1] + " was " + fAP[ranPartIndex][1];

       //document.getElementById(answers[3]).innerHTML = predicateAdjectivesPlural[0][0];

       responseButton.innerHTML = "";


       //responseButton.onclick = function(){hint()};

    }   else if  (num == 2){

      startButton.innerHTML = ablativeAbsolute2;

      document.getElementById(answers[0]).innerHTML = "After " + pAP[ranPartIndex][1] + " the " + abSingMasc[ranAbSingMascIndex][1];

      document.getElementById(answers[1]).innerHTML = "While the " + abSingMasc[ranAbSingMascIndex][1] + " was " + pAP[ranPartIndex][1];

      document.getElementById(answers[2]).innerHTML =  coorConjArr[ranCoorConjArrIndex] + " the " + abSingMasc[ranAbSingMascIndex][1] + " was " + pPP[ranPartIndex][1];

      document.getElementById(answers[3]).innerHTML = coorConjArr[ranCoorConjArrIndex2] + " the " + abSingMasc[ranAbSingMascIndex][1] + " was " + fAP[ranPartIndex][1];

      //document.getElementById(answers[3]).innerHTML = predicateAdjectivesPlural[0][0];

      responseButton.innerHTML = "";

      //responseButton.onclick = function(){hint()};

    } else if  (num == 3){

      startButton.innerHTML = ablativeAbsolute3;

      document.getElementById(answers[0]).innerHTML = "After " + pAP[ranPartIndex][1] + " the " + abSingMasc[ranAbSingMascIndex][1];

      document.getElementById(answers[1]).innerHTML = "While the " + abSingMasc[ranAbSingMascIndex][1] + " was " + pAP[ranPartIndex][1];

      document.getElementById(answers[2]).innerHTML =  coorConjArr[ranCoorConjArrIndex] + " the " + abSingMasc[ranAbSingMascIndex][1] + " was " + pPP[ranPartIndex][1];

      document.getElementById(answers[3]).innerHTML = coorConjArr[ranCoorConjArrIndex2] + " the " + abSingMasc[ranAbSingMascIndex][1] + " was " + fAP[ranPartIndex][1];

      //document.getElementById(answers[3]).innerHTML = predicateAdjectivesPlural[0][0];

      responseButton.innerHTML = "";

      //responseButton.onclick = function(){hint()};

    }

  }



  function abAbsFem(){




    if (num == 0){

   startButton.innerHTML = ablativeAbsolute4;

   document.getElementById(answers[0]).innerHTML = coorConjArr[ranCoorConjArrIndex] + " the " + abSingFem[ranAbSingFemIndex][1] + " was " + pPP[ranPartIndex][1];

   document.getElementById(answers[1]).innerHTML = "While the " + abSingFem[ranAbSingFemIndex][1] + " was " + pAP[ranPartIndex][1];

   document.getElementById(answers[2]).innerHTML =  "After " + pAP[ranPartIndex][1] + " the " + abSingFem[ranAbSingFemIndex][1];

   document.getElementById(answers[3]).innerHTML = coorConjArr[ranCoorConjArrIndex2] + " the " + abSingFem[ranAbSingFemIndex][1] + " was " + fAP[ranPartIndex][1];

   //document.getElementById(answers[3]).innerHTML = predicateAdjectivesPlural[0][0];

   responseButton.innerHTML = "";

   //responseButton.onclick = function(){hint()};

  }  else if (num == 1){

   startButton.innerHTML = ablativeAbsolute5;

   document.getElementById(answers[0]).innerHTML = coorConjArr[ranCoorConjArrIndex] + " the " + abSingFem[ranAbSingFemIndex][1] + " was " + pPP[ranPartIndex][1];

   document.getElementById(answers[1]).innerHTML = coorConjArr[ranCoorConjArrIndex2] + " the " + abSingFem[ranAbSingFemIndex][1] + " was " + fAP[ranPartIndex][1];

   document.getElementById(answers[2]).innerHTML =  "After " + pAP[ranPartIndex][1] + " the " + abSingFem[ranAbSingFemIndex][1];

   document.getElementById(answers[3]).innerHTML = "While the " + abSingFem[ranAbSingFemIndex][1] + " was " + pAP[ranPartIndex][1];


   //document.getElementById(answers[3]).innerHTML = predicateAdjectivesPlural[0][0];

   responseButton.innerHTML = "";


   //responseButton.onclick = function(){hint()};

  }   else if  (num == 2){

  startButton.innerHTML = ablativeAbsolute6;

  document.getElementById(answers[0]).innerHTML = "After " + pAP[ranPartIndex][1] + " the " + abSingFem[ranAbSingFemIndex][1];

  document.getElementById(answers[1]).innerHTML = "While the " + abSingFem[ranAbSingFemIndex][1] + " was " + pAP[ranPartIndex][1];

  document.getElementById(answers[2]).innerHTML =  coorConjArr[ranCoorConjArrIndex] + " the " + abSingFem[ranAbSingFemIndex][1] + " was " + pPP[ranPartIndex][1];

  document.getElementById(answers[3]).innerHTML = coorConjArr[ranCoorConjArrIndex2] + " the " + abSingFem[ranAbSingFemIndex][1] + " was " + fAP[ranPartIndex][1];

  //document.getElementById(answers[3]).innerHTML = predicateAdjectivesPlural[0][0];

  responseButton.innerHTML = "";

  //responseButton.onclick = function(){hint()};

  } else if  (num == 3){

  startButton.innerHTML = ablativeAbsolute7;

  document.getElementById(answers[0]).innerHTML = "After " + pAP[ranPartIndex][1] + " the " + abSingFem[ranAbSingFemIndex][1];

  document.getElementById(answers[1]).innerHTML = coorConjArr[ranCoorConjArrIndex2] + " the " + abSingFem[ranAbSingFemIndex][1] + " was " + fAP[ranPartIndex][1];

  document.getElementById(answers[2]).innerHTML =  coorConjArr[ranCoorConjArrIndex] + " the " + abSingFem[ranAbSingFemIndex][1] + " was " + pPP[ranPartIndex][1];

  document.getElementById(answers[3]).innerHTML = "While the " + abSingFem[ranAbSingFemIndex][1] + " was " + pAP[ranPartIndex][1];

  //document.getElementById(answers[3]).innerHTML = predicateAdjectivesPlural[0][0];

  responseButton.innerHTML = "";

  //responseButton.onclick = function(){hint()};

  }

  }



  //abAbsFem();


  function abAbsMixup(){

    var ranAbAbsMixUpIndex = Math.floor(Math.random() * 2);
     var mixUp = [abAbsMasc,abAbsFem];
     mixUp[ranAbAbsMixUpIndex]();

  }

abAbsMixup();

    responseButton.disabled = false;










      resetAnswerColors();

      enableButtons();




        decrementCount();






      if (count == 0){

        gameOverAudio();

        startButton.innerHTML = "Select a New Game!";




        answerOne.innerHTML = game1Title;
        answerTwo.innerHTML = game2Title;
        answerThree.innerHTML = game3Title;
        answerFour.innerHTML = game4Title;

        document.getElementById("boxThree").innerHTML = "Score";
        responseButton.innerHTML = "You earned " + points + " points!";
        points = 0;

        stopTimer();
        document.getElementById("boxOne").innerHTML = "Timer";

        answerOne.onclick = function(){selectGame1()};
        answerTwo.onclick = function(){selectGame2()};
        answerThree.onclick = function(){selectGame3()};
        answerFour.onclick = function(){selectGame4()};

        count = 11;


         }




    }






    function complexMixup(){

      var complexMixUpIndex = Math.floor(Math.random() * 2);
       var mixUp = [gOO,ablativeAbsolute];
       mixUp[complexMixUpIndex]();

    }








  function cLC1(){

    resetNum();

    countDownTimer();
     timeleft = 25;
     countdown = setInterval(countDownTimer,1000);

     //shuffle(answers);


    startButton.disabled = true;

    class Adjective{

      constructor(adjStem){
        this.adjForm = adjStem;
      }
    }

    var adjArray = [["grav", "serious"],["vil", "cheap"],["util", "useful"],["terribil", "terrible"],["trist", "sad"],["fidel", "faithful"],["lev", "light"],["difficil", "difficult"],["brev", "short"], ["fort", "brave"]];
    var randomAdjIndex = Math.floor(Math.random() * adjArray.length);
    newAdj = new Adjective(adjArray[randomAdjIndex][0]);
    adjective = newAdj.adjForm;



    class Noun{

     constructor(nounStem){
     this.nounForm = nounStem;
     }
    }

    //var randomTenseIndex = Math.floor(Math.random() * 3);

    //This sets the correct subject in serpensA
    var nounArray = [["puell", "girl"], ["regin", "queen"],["pugn", "fight"],["fili", "daughter"],["amic", "girl friend"],["agricol", "farmer"], ["poet", "poet"], ["ancill", "maid servant"], ["naut", "sailor"]];
    var randomNounIndex = Math.floor(Math.random() * nounArray.length);
    newNoun = new Noun(nounArray[randomNounIndex][0]);
    noun = newNoun.nounForm;

    var nounArrayCLC = [["puell", "girl"], ["famili", "family"],["besti", "beast"],["de", "goddess"],["femin", "woman"],["regin", "queen"],["domin", "mistress"],["fili", "daughter"],["amic", "girl friend"],["agricol", "farmer"], ["poet", "poet"], ["ancill", "maid servant"], ["naut", "sailor"]];
    var randomNounCLCIndex = Math.floor(Math.random() * nounArrayCLC.length);
    newNounCLC = new Noun(nounArrayCLC[randomNounCLCIndex][0]);
    nounCLC = newNounCLC.nounForm;

    var nounArrayCLC2nd = [["serv", "slave"], ["domin", "master"],["amic", "friend"],["asin", "donkey"],["cerv", "deer"],["coqu", "cook"],["fili", "son"],["inimic", "enemy"],["lup", "wolf"],["patron", "patron"], ["venalici", "slave overseer"], ["marit", "husband"], ["philsoph", "philosopher"]];
    var randomNounCLC2ndIndex = Math.floor(Math.random() * nounArrayCLC2nd.length);
    newNounCLC2nd = new Noun(nounArrayCLC2nd[randomNounCLC2ndIndex][0]);
    nounCLC2nd = newNounCLC2nd.nounForm;

    var nounArrayCLC3rd = [["homo", "homin", "man"], ["pater", "patr","father"],["uxor", "uxor", "wife"],["senex", "sen", "old man"],["mercator", "mercator", "merchant"],["infans", "infant", "baby"],["iuvenis", "iuven","young man"],["mater", "matr", "mother"],["hospes", "hospit","guest"],["frater", "fatr", "brother"], ["soror", "soror", "sister"], ["civis", "civ","citizen"], ["tonsor", "tonsor","barber"],["testis", "test","witness"],["senator", "senator","senator"],["caupo", "caupon","innkeeper"],["leo", "leon","lion"],["pav", "pavon","peacock"],["canis", "can","dog"],["pestis", "pest","pest"],["fur", "fur","thief"],["gladiator", "gladiat","gladiator"],["cliens", "client","client"]];
    var randomNounCLC3rdIndex = Math.floor(Math.random() * nounArrayCLC3rd.length);
    newNounCLC3rd = new Noun(nounArrayCLC3rd[randomNounCLC3rdIndex][0]);
    nounCLC3rd = newNounCLC3rd.nounForm;
    newNounCLC3rdStem = new Noun(nounArrayCLC3rd[randomNounCLC3rdIndex][1]);
    nounCLC3rdStem = newNounCLC3rdStem.nounForm;

    var dirObjArray = [["puell", "girl"], ["sell", "chair"],["vill", "house"],["vi", "road"],["silv", "forest"],["regin", "queen"],["pugn", "fight"],["port", "gate"],["ir", "anger"],["gale", "helmet"],["fili", "daughter"],["anim", "soul"],["amic", "girl friend"],["agricol", "farmer"], ["poet", "poet"], ["ancill", "maid servant"], ["naut", "sailor"]];
    var randomDirObjIndex = Math.floor(Math.random() * dirObjArray.length);
    newObject = new Noun(dirObjArray[randomDirObjIndex][0]);
    object = newObject.nounForm;

    var dirObjCLCArray = [["puell", "girl"], ["sell", "chair"],["vill", "house"],["vi", "road"],["silv", "forest"],["regin", "queen"],["pugn", "fight"],["port", "gate"],["ir", "anger"],["gale", "helmet"],["fili", "daughter"],["anim", "soul"],["amic", "girl friend"],["agricol", "farmer"], ["poet", "poet"], ["ancill", "maid servant"], ["naut", "sailor"]];
    var randomDirObjCLCIndex = Math.floor(Math.random() * dirObjCLCArray.length);
    newObjectCLC = new Noun(dirObjCLCArray[randomDirObjCLCIndex][0]);
    objectCLC = newObjectCLC.nounForm;


    class Verb{
     constructor(verbStem){
       this.verbForm = verbStem;
     }
    }


    //The sets the correct verb in serpensC
    var verbArray = [["loves","loved", "was loving", "will love", "am"], ["begs","begged", "was begging", "will beg","or"],["observes","observed", "was observing", "will observe", "observ"],["carries","carried", "was carrying", "will carry", "port"],["greets","greeted", "was greeting", "will greet", "salut"],["kills","killed", "was killing", "will kill", "nec"],["fights", "fought", "was fighting", "will fight", "pugn"], ["saves","saved", "was saving", "will save", "serv"], ["looks at", "looked at", "was looking at", "will look at", "spect"], ["calls","called", "was calling", "will call","voc"],["carries","carried", "was carrying", "will carry","port"], ["annoys","annoyed", "was annoying", "will annoy","vex"], ["wounds","wounded", "was wounding", "will wound","vulner"], ["beats","beat", "was beating", "will beat","verber"], ["scolds","scolded", "was scolding", "will scold","vituper"], ["hits","hit", "was hitting", "will hit","puls"], ["frees","freed", "was freeing", "will free","liber"], ["waits for","waited for", "was waiting", "will wait","exspect"], ["avoids","avoided", "was avoiding", "will avoid","vit"], ["hides","hid", "was hiding", "will hide","cel"]];
  var randomVerbIndex = Math.floor(Math.random() * verbArray.length);
    newVerb = new Verb(verbArray[randomVerbIndex][4]);
    verb = newVerb.verbForm;


    var verbTenseArray = [pres3rdSing, per3rdSing, imp3rdSing, fut3rdSing];



    //var num = Math.floor(Math.random() * 4);

    //var num = numberArray[randomNumberArrayIndex];
    //var verbPE = verbTenseArray[randomNumberArrayIndex];

    //shuffle(verbTenseArray);


      function directObject(){




        if (num == 0){

       startButton.innerHTML = "The " + adjArray[randomAdjIndex][1] + " " + nounArray[randomNounIndex][1] + " " + verbArray[randomVerbIndex][num] + " the " + nounArrayCLC3rd[randomNounCLC3rdIndex][2];

       document.getElementById(answers[0]).innerHTML = adjArray[randomAdjIndex][0] + nomPE3 + " " + noun + nomPE1 + " " + nounCLC3rdStem + accPE3 + " " + verb + verbTenseArray[0];

       document.getElementById(answers[1]).innerHTML = adjArray[randomAdjIndex][0] + accPE3 + " " + noun + accPE1 + " " + nounCLC3rdStem + nomPE3 + " " + verb + verbTenseArray[1];

       document.getElementById(answers[2]).innerHTML = adjArray[randomAdjIndex][0] + genPE3Pl + " " + noun + genPE1Pl + " " + nounCLC3rdStem + accPE3 + " " + verb + verbTenseArray[2];

       document.getElementById(answers[3]).innerHTML = noun + nomPE1 + " " + adjArray[randomAdjIndex][0] + accPE3 + " "+ nounCLC3rdStem + accPE3 + " " + verb + verbTenseArray[3];

       //document.getElementById(answers[3]).innerHTML = predicateAdjectivesPlural[0][0];

       responseButton.innerHTML = "";

       //responseButton.onclick = function(){hint()};

     }  else if (num == 1){

       startButton.innerHTML = "The " + nounArray[randomNounIndex][1] + " " + verbArray[randomVerbIndex][num] + " the " + adjArray[randomAdjIndex][1] + " " + dirObjArray[randomDirObjIndex][1];

       document.getElementById(answers[0]).innerHTML = noun + accPE1Pl + " " + adjArray[randomAdjIndex][0] + accPE3Pl + " " + object + nomPE1 + " " + verb + verbTenseArray[0];

       document.getElementById(answers[1]).innerHTML = noun + nomPE1 + " " + adjArray[randomAdjIndex][0] + accPE3 + " " + object + accPE1 + " " + verb + verbTenseArray[1];

       document.getElementById(answers[2]).innerHTML = noun + nomPE1 + " " + adjArray[randomAdjIndex][0] + genPE3Pl + " " + object + genPE1Pl + " " + verb + verbTenseArray[2];

       document.getElementById(answers[3]).innerHTML = noun + nomPE1 + " " + adjArray[randomAdjIndex][0] + genPE3 + " " + object + genPE1 + " " + verb + verbTenseArray[3];

       //document.getElementById(answers[3]).innerHTML = predicateAdjectivesPlural[0][0];

       responseButton.innerHTML = "";

       //responseButton.onclick = function(){hint()};

    }   else if  (num == 2){

      startButton.innerHTML = "The " + adjArray[randomAdjIndex][1] + " " + nounArray[randomNounIndex][1] + " " + verbArray[randomVerbIndex][num] + " the " + dirObjArray[randomDirObjIndex][1];

      document.getElementById(answers[0]).innerHTML = adjArray[randomAdjIndex][0] + nomPE3 + " " + noun + nomPE1 + " " + object + accPE1Pl + " " + verb + verbTenseArray[0];

      document.getElementById(answers[1]).innerHTML = adjArray[randomAdjIndex][0] + accPE3 + " " + noun + accPE1 + " " + object + nomPE1 + " " + verb + verbTenseArray[1];

      document.getElementById(answers[2]).innerHTML = adjArray[randomAdjIndex][0] + nomPE3 + " " + noun + nomPE1 + " " + object + accPE1 + " " + verb + verbTenseArray[2];

      document.getElementById(answers[3]).innerHTML = noun + nomPE1 + " " + adjArray[randomAdjIndex][0] + accPE3 + " "+ object + accPE1 + " " + verb + verbTenseArray[3];

      //document.getElementById(answers[3]).innerHTML = predicateAdjectivesPlural[0][0];

      responseButton.innerHTML = "";

      //responseButton.onclick = function(){hint()};

    } else if  (num == 3){

      startButton.innerHTML = "The " + nounArray[randomNounIndex][1] + " " + verbArray[randomVerbIndex][num] + " the " + adjArray[randomAdjIndex][1] + " " + dirObjArray[randomDirObjIndex][1];

      document.getElementById(answers[0]).innerHTML = noun + accPE1Pl + " " + adjArray[randomAdjIndex][0] + accPE3Pl + " " + object + nomPE1 + " " + verb + verbTenseArray[0];

      document.getElementById(answers[1]).innerHTML = noun + nomPE1 + " " + adjArray[randomAdjIndex][0] + genPE3 + " " + object + genPE1 + " " + verb + verbTenseArray[1];

      document.getElementById(answers[2]).innerHTML = noun + nomPE1 + " " + adjArray[randomAdjIndex][0] + genPE3Pl + " " + object + genPE1Pl + " " + verb + verbTenseArray[2];

      document.getElementById(answers[3]).innerHTML = noun + nomPE1 + " " + adjArray[randomAdjIndex][0] + accPE3 + " " + object + accPE1 + " " + verb + verbTenseArray[3];

      //document.getElementById(answers[3]).innerHTML = predicateAdjectivesPlural[0][0];

      responseButton.innerHTML = "";

      //responseButton.onclick = function(){hint()};

    }

  }




    directObject();



    responseButton.disabled = false;










      resetAnswerColors();

      enableButtons();




        decrementCount();






      if (count == 0){

        gameOverAudio();

        startButton.innerHTML = "Select a New Game!";




        answerOne.innerHTML = game1Title;
        answerTwo.innerHTML = game2Title;
        answerThree.innerHTML = game3Title;
        answerFour.innerHTML = game4Title;

        document.getElementById("boxThree").innerHTML = "Score";
        responseButton.innerHTML = "You earned " + points + " points!";
        points = 0;

        stopTimer();
        document.getElementById("boxOne").innerHTML = "Timer";

        answerOne.onclick = function(){selectGame1()};
        answerTwo.onclick = function(){selectGame2()};
        answerThree.onclick = function(){selectGame3()};
        answerFour.onclick = function(){selectGame4()};

        count = 11;


         }




    }







  function cLC2(){

    resetNum();

    countDownTimer();
     timeleft = 25;
     countdown = setInterval(countDownTimer,1000);

     //shuffle(answers);


    startButton.disabled = true;

    class Adjective{

      constructor(adjStem){
        this.adjForm = adjStem;
      }
    }

    var adjArray = [["grav", "serious"],["vil", "cheap"],["util", "useful"],["terribil", "terrible"],["trist", "sad"],["fidel", "faithful"],["lev", "light"],["difficil", "difficult"],["brev", "short"], ["fort", "brave"]];
    var randomAdjIndex = Math.floor(Math.random() * adjArray.length);
    newAdj = new Adjective(adjArray[randomAdjIndex][0]);
    adjective = newAdj.adjForm;



    class Noun{

     constructor(nounStem){
     this.nounForm = nounStem;
     }
    }

    //var randomTenseIndex = Math.floor(Math.random() * 3);

    //This sets the correct subject in serpensA
    var nounArray = [["puell", "girl"], ["regin", "queen"],["pugn", "fight"],["fili", "daughter"],["amic", "girl friend"],["agricol", "farmer"], ["poet", "poet"], ["ancill", "maid servant"], ["naut", "sailor"]];
    var randomNounIndex = Math.floor(Math.random() * nounArray.length);
    newNoun = new Noun(nounArray[randomNounIndex][0]);
    noun = newNoun.nounForm;

    var nounArrayCLC = [["puell", "girl"], ["famili", "family"],["besti", "beast"],["de", "goddess"],["femin", "woman"],["regin", "queen"],["domin", "mistress"],["fili", "daughter"],["amic", "girl friend"],["agricol", "farmer"], ["poet", "poet"], ["ancill", "maid servant"], ["naut", "sailor"]];
    var randomNounCLCIndex = Math.floor(Math.random() * nounArrayCLC.length);
    newNounCLC = new Noun(nounArrayCLC[randomNounCLCIndex][0]);
    nounCLC = newNounCLC.nounForm;

    var nounArrayCLC2nd = [["serv", "slave"], ["domin", "master"],["amic", "friend"],["asin", "donkey"],["cerv", "deer"],["coqu", "cook"],["fili", "son"],["inimic", "enemy"],["lup", "wolf"],["patron", "patron"], ["venalici", "slave overseer"], ["marit", "husband"], ["philsoph", "philosopher"]];
    var randomNounCLC2ndIndex = Math.floor(Math.random() * nounArrayCLC2nd.length);
    newNounCLC2nd = new Noun(nounArrayCLC2nd[randomNounCLC2ndIndex][0]);
    nounCLC2nd = newNounCLC2nd.nounForm;

    var nounArrayCLC3rd = [["homo", "homin", "man"], ["pater", "patr","father"],["uxor", "uxor", "wife"],["senex", "sen", "old man"],["mercator", "mercator", "merchant"],["infans", "infant", "baby"],["iuvenis", "iuven","young man"],["mater", "matr", "mother"],["hospes", "hospit","guest"],["frater", "fatr", "brother"], ["soror", "soror", "sister"], ["civis", "civ","citizen"], ["tonsor", "tonsor","barber"],["testis", "test","witness"],["senator", "senator","senator"],["caupo", "caupon","innkeeper"],["leo", "leon","lion"],["pav", "pavon","peacock"],["canis", "can","dog"],["pestis", "pest","pest"],["fur", "fur","thief"],["gladiator", "gladiat","gladiator"],["cliens", "client","client"]];
    var randomNounCLC3rdIndex = Math.floor(Math.random() * nounArrayCLC3rd.length);
    newNounCLC3rd = new Noun(nounArrayCLC3rd[randomNounCLC3rdIndex][0]);
    nounCLC3rd = newNounCLC3rd.nounForm;
    newNounCLC3rdStem = new Noun(nounArrayCLC3rd[randomNounCLC3rdIndex][1]);
    nounCLC3rdStem = newNounCLC3rdStem.nounForm;

    var dirObjArray = [["puell", "girl"], ["sell", "chair"],["vill", "house"],["vi", "road"],["silv", "forest"],["regin", "queen"],["pugn", "fight"],["port", "gate"],["ir", "anger"],["gale", "helmet"],["fili", "daughter"],["anim", "soul"],["amic", "girl friend"],["agricol", "farmer"], ["poet", "poet"], ["ancill", "maid servant"], ["naut", "sailor"]];
    var randomDirObjIndex = Math.floor(Math.random() * dirObjArray.length);
    newObject = new Noun(dirObjArray[randomDirObjIndex][0]);
    object = newObject.nounForm;

    var dirObjCLCArray = [["puell", "girl"], ["sell", "chair"],["vill", "house"],["vi", "road"],["silv", "forest"],["regin", "queen"],["pugn", "fight"],["port", "gate"],["ir", "anger"],["gale", "helmet"],["fili", "daughter"],["anim", "soul"],["amic", "girl friend"],["agricol", "farmer"], ["poet", "poet"], ["ancill", "maid servant"], ["naut", "sailor"]];
    var randomDirObjCLCIndex = Math.floor(Math.random() * dirObjCLCArray.length);
    newObjectCLC = new Noun(dirObjCLCArray[randomDirObjCLCIndex][0]);
    objectCLC = newObjectCLC.nounForm;


    class Verb{
     constructor(verbStem){
       this.verbForm = verbStem;
     }
    }


    //The sets the correct verb in serpensC
    var verbArray = [["will love","loves","loved", "was loving",  "am"], ["will beg","begs","begged", "was begging", "or"],["will observe","observes","observed", "was observing",  "observ"],["will carry","carries","carried", "was carrying",  "port"],["will greet","greets","greeted", "was greeting",  "salut"],["will kill","kills","killed", "was killing",  "nec"],["will fight","fights", "fought", "was fighting",  "pugn"], ["will save","saves","saved", "was saving",  "serv"], ["will look at","looks at", "looked at", "was looking at",  "spect"], ["will call","calls","called", "was calling", "voc"], ["will annoy","annoys","annoyed", "was annoying", "vex"], ["will wound","wounds","wounded", "was wounding", "vulner"], ["will beat","beats","beat", "was beating", "verber"], ["will scold","scolds","scolded", "was scolding", "vituper"], ["will hit","hits","hit", "was hitting", "puls"], ["will free","frees","freed", "was freeing", "liber"], ["will wait","waits for","waited for", "was waiting", "exspect"], ["will avoid","avoids","avoided", "was avoiding", "vit"], ["will hide","hides","hid", "was hiding", "cel"]];
  var randomVerbIndex = Math.floor(Math.random() * verbArray.length);
    newVerb = new Verb(verbArray[randomVerbIndex][4]);
    verb = newVerb.verbForm;


    var verbTenseArray = [fut3rdSing,pres3rdSing,per3rdSing,imp3rdSing];



    //var num = Math.floor(Math.random() * 4);

    //var num = numberArray[randomNumberArrayIndex];
    //var verbPE = verbTenseArray[randomNumberArrayIndex];

    //shuffle(verbTenseArray);


      function directObject(){




        if (num == 0){

       startButton.innerHTML = "The " + nounArrayCLC2nd[randomNounCLC2ndIndex][1] + " " + verbArray[randomVerbIndex][num] + " the " + dirObjArray[randomDirObjIndex][1];

       document.getElementById(answers[0]).innerHTML = nounCLC2nd + nomPE2 + " " + object + accPE1 + " " + verb + verbTenseArray[0];

       document.getElementById(answers[1]).innerHTML = nounCLC2nd + accPE2 + " " + object + nomPE1 + " " + verb + verbTenseArray[1];

       document.getElementById(answers[2]).innerHTML = nounCLC2nd + genPE2Pl + " " + object + accPE1 + " " + verb + verbTenseArray[2];

       document.getElementById(answers[3]).innerHTML = nounCLC2nd + nomPE2 + " "  + object + accPE1Pl + " " + verb + verbTenseArray[3];

       //document.getElementById(answers[3]).innerHTML = predicateAdjectivesPlural[0][0];

       responseButton.innerHTML = "";
       //responseButton.innerHTML = "Hint";

       //responseButton.onclick = function(){hint()};

     }  else if (num == 1){

       startButton.innerHTML = "The " + nounArrayCLC3rd[randomNounCLC3rdIndex][2] + " " + verbArray[randomVerbIndex][num] + " the " +  dirObjArray[randomDirObjIndex][1];

       document.getElementById(answers[0]).innerHTML = nounCLC3rd + " " + object + nomPE1 + " " + verb + verbTenseArray[0];

       document.getElementById(answers[1]).innerHTML = nounCLC3rd  + " " + object + accPE1 + " " + verb + verbTenseArray[1];

       document.getElementById(answers[2]).innerHTML = nounCLC3rd  + " " + object + genPE1Pl + " " + verb + verbTenseArray[2];

       document.getElementById(answers[3]).innerHTML = nounCLC3rd  + " " + object + genPE1 + " " + verb + verbTenseArray[3];

       //document.getElementById(answers[3]).innerHTML = predicateAdjectivesPlural[0][0];

responseButton.innerHTML = "";
       //responseButton.innerHTML = "Hint";

       //responseButton.onclick = function(){hint()};

    }   else if  (num == 2){

      startButton.innerHTML = "The " + nounArray[randomNounIndex][1] + " " + verbArray[randomVerbIndex][num] + " the " + nounArrayCLC3rd[randomNounCLC3rdIndex][2];

      document.getElementById(answers[0]).innerHTML = noun + nomPE1 + " " + nounCLC3rdStem + accPE3Pl + " " + verb + verbTenseArray[0];

      document.getElementById(answers[1]).innerHTML = noun + accPE1 + " " + nounCLC3rdStem + nomPE3Pl + " " + verb + verbTenseArray[1];

      document.getElementById(answers[2]).innerHTML = noun + nomPE1 + " " + nounCLC3rdStem + accPE3 + " " + verb + verbTenseArray[2];

      document.getElementById(answers[3]).innerHTML = noun + nomPE1Pl + " " + nounCLC3rdStem + accPE3 + " " + verb + verbTenseArray[3];

      //document.getElementById(answers[3]).innerHTML = predicateAdjectivesPlural[0][0];

responseButton.innerHTML = "";
      //responseButton.innerHTML = "Hint";

      //responseButton.onclick = function(){hint()};

    } else if  (num == 3){

      startButton.innerHTML = "The " + nounArray[randomNounIndex][1] + " " + verbArray[randomVerbIndex][num] + " the " +  dirObjArray[randomDirObjIndex][1];

      document.getElementById(answers[0]).innerHTML = noun + accPE1Pl + " " + object + nomPE1 + " " + verb + verbTenseArray[0];

      document.getElementById(answers[1]).innerHTML = noun + nomPE1 + " " + object + genPE1 + " " + verb + verbTenseArray[1];

      document.getElementById(answers[2]).innerHTML = noun + nomPE1 + " " +  object + genPE1Pl + " " + verb + verbTenseArray[2];

      document.getElementById(answers[3]).innerHTML = noun + nomPE1 + " " + object + accPE1 + " " + verb + verbTenseArray[3];

      //document.getElementById(answers[3]).innerHTML = predicateAdjectivesPlural[0][0];

responseButton.innerHTML = "";
      //responseButton.innerHTML = "Hint";

      //responseButton.onclick = function(){hint()};

    }
  }




    directObject();



    responseButton.disabled = false;










      resetAnswerColors();

      enableButtons();




        decrementCount();






      if (count == 0){

        gameOverAudio();

        startButton.innerHTML = "Select a New Game!";




        answerOne.innerHTML = game1Title;
        answerTwo.innerHTML = game2Title;
        answerThree.innerHTML = game3Title;
        answerFour.innerHTML = game4Title;

        document.getElementById("boxThree").innerHTML = "Score";
        responseButton.innerHTML = "You earned " + points + " points!";
        points = 0;

        stopTimer();
        document.getElementById("boxOne").innerHTML = "Timer";

        answerOne.onclick = function(){selectGame1()};
        answerTwo.onclick = function(){selectGame2()};
        answerThree.onclick = function(){selectGame3()};
        answerFour.onclick = function(){selectGame4()};

        count = 11;


         }




    }











  function cLC(){

    resetNum();

    countDownTimer();
     timeleft = 25;
     countdown = setInterval(countDownTimer,1000);

     //shuffle(answers);


    startButton.disabled = true;

    class Adjective{

      constructor(adjStem){
        this.adjForm = adjStem;
      }
    }

    var adjArray = [["grav", "serious"],["vil", "cheap"],["util", "useful"],["terribil", "terrible"],["trist", "sad"],["fidel", "faithful"],["lev", "light"],["difficil", "difficult"],["brev", "short"], ["fort", "brave"]];
    var randomAdjIndex = Math.floor(Math.random() * adjArray.length);
    newAdj = new Adjective(adjArray[randomAdjIndex][0]);
    adjective = newAdj.adjForm;



    class Noun{

     constructor(nounStem){
     this.nounForm = nounStem;
     }
    }

    //var randomTenseIndex = Math.floor(Math.random() * 3);

    //This sets the correct subject in serpensA
    var nounArray = [["puell", "girl"], ["regin", "queen"],["pugn", "fight"],["fili", "daughter"],["amic", "girl friend"],["agricol", "farmer"], ["poet", "poet"], ["ancill", "maid servant"], ["naut", "sailor"]];
    var randomNounIndex = Math.floor(Math.random() * nounArray.length);
    newNoun = new Noun(nounArray[randomNounIndex][0]);
    noun = newNoun.nounForm;

    var nounArrayCLC = [["puell", "girl"], ["famili", "family"],["besti", "beast"],["de", "goddess"],["femin", "woman"],["regin", "queen"],["domin", "mistress"],["fili", "daughter"],["amic", "girl friend"],["agricol", "farmer"], ["poet", "poet"], ["ancill", "maid servant"], ["naut", "sailor"]];
    var randomNounCLCIndex = Math.floor(Math.random() * nounArrayCLC.length);
    newNounCLC = new Noun(nounArrayCLC[randomNounCLCIndex][0]);
    nounCLC = newNounCLC.nounForm;

    var nounArrayCLC2nd = [["serv", "slave"], ["domin", "master"],["amic", "friend"],["asin", "donkey"],["cerv", "deer"],["coqu", "cook"],["fili", "son"],["inimic", "enemy"],["lup", "wolf"],["patron", "patron"], ["venalici", "slave overseer"], ["marit", "husband"], ["philsoph", "philosopher"]];
    var randomNounCLC2ndIndex = Math.floor(Math.random() * nounArrayCLC2nd.length);
    newNounCLC2nd = new Noun(nounArrayCLC2nd[randomNounCLC2ndIndex][0]);
    nounCLC2nd = newNounCLC2nd.nounForm;

    var dirObjArray = [["puell", "girl"], ["sell", "chair"],["vill", "house"],["vi", "road"],["silv", "forest"],["regin", "queen"],["pugn", "fight"],["port", "gate"],["ir", "anger"],["gale", "helmet"],["fili", "daughter"],["anim", "soul"],["amic", "girl friend"],["agricol", "farmer"], ["poet", "poet"], ["ancill", "maid servant"], ["naut", "sailor"]];
    var randomDirObjIndex = Math.floor(Math.random() * dirObjArray.length);
    newObject = new Noun(dirObjArray[randomDirObjIndex][0]);
    object = newObject.nounForm;

    var dirObjCLCArray = [["puell", "girl"], ["sell", "chair"],["vill", "house"],["vi", "road"],["silv", "forest"],["regin", "queen"],["pugn", "fight"],["port", "gate"],["ir", "anger"],["gale", "helmet"],["fili", "daughter"],["anim", "soul"],["amic", "girl friend"],["agricol", "farmer"], ["poet", "poet"], ["ancill", "maid servant"], ["naut", "sailor"]];
    var randomDirObjCLCIndex = Math.floor(Math.random() * dirObjCLCArray.length);
    newObjectCLC = new Noun(dirObjCLCArray[randomDirObjCLCIndex][0]);
    objectCLC = newObjectCLC.nounForm;


    class Verb{
     constructor(verbStem){
       this.verbForm = verbStem;
     }
    }


    //The sets the correct verb in serpensC
    var verbArray = [["will love","loves","loved", "was loving",  "am"], ["will beg","begs","begged", "was begging", "or"],["will observe","observes","observed", "was observing",  "observ"],["will carry","carries","carried", "was carrying",  "port"],["will greet","greets","greeted", "was greeting",  "salut"],["will kill","kills","killed", "was killing",  "nec"],["will fight","fights", "fought", "was fighting",  "pugn"], ["will save","saves","saved", "was saving",  "serv"], ["will look at","looks at", "looked at", "was looking at",  "spect"], ["will call","calls","called", "was calling", "voc"], ["will annoy","annoys","annoyed", "was annoying", "vex"], ["will wound","wounds","wounded", "was wounding", "vulner"], ["will beat","beats","beat", "was beating", "verber"], ["will scold","scolds","scolded", "was scolding", "vituper"], ["will hit","hits","hit", "was hitting", "puls"], ["will free","frees","freed", "was freeing", "liber"], ["will wait","waits for","waited for", "was waiting", "exspect"], ["will avoid","avoids","avoided", "was avoiding", "vit"], ["will hide","hides","hid", "was hiding", "cel"]];
  var randomVerbIndex = Math.floor(Math.random() * verbArray.length);
    newVerb = new Verb(verbArray[randomVerbIndex][4]);
    verb = newVerb.verbForm;


    var verbTenseArray = [fut3rdSing,pres3rdSing,per3rdSing,imp3rdSing];



    //var num = Math.floor(Math.random() * 4);

    //var num = numberArray[randomNumberArrayIndex];
    //var verbPE = verbTenseArray[randomNumberArrayIndex];

    //shuffle(verbTenseArray);


      function directObject(){




        if (num == 0){

       startButton.innerHTML = "The " + nounArray[randomNounIndex][1] + " " + verbArray[randomVerbIndex][num] + " the " + dirObjArray[randomDirObjIndex][1];

       document.getElementById(answers[0]).innerHTML = noun + nomPE1 + " " + object + accPE1 + " " + verb + verbTenseArray[0];

       document.getElementById(answers[1]).innerHTML = noun + accPE1 + " " + object + nomPE1 + " " + verb + verbTenseArray[1];

       document.getElementById(answers[2]).innerHTML = noun + genPE1Pl + " " + object + accPE1 + " " + verb + verbTenseArray[2];

       document.getElementById(answers[3]).innerHTML = noun + nomPE1 + " "  + object + accPE1Pl + " " + verb + verbTenseArray[3];

       //document.getElementById(answers[3]).innerHTML = predicateAdjectivesPlural[0][0];

       responseButton.innerHTML = "";

       //responseButton.onclick = function(){hint()};

     }  else if (num == 1){

       startButton.innerHTML = "The " + nounArray[randomNounIndex][1] + " " + verbArray[randomVerbIndex][num] + " the " +  dirObjArray[randomDirObjIndex][1];

       document.getElementById(answers[0]).innerHTML = noun + accPE1Pl + " " + object + nomPE1 + " " + verb + verbTenseArray[0];

       document.getElementById(answers[1]).innerHTML = noun + nomPE1 + " " + object + accPE1 + " " + verb + verbTenseArray[1];

       document.getElementById(answers[2]).innerHTML = noun + nomPE1 + " " + object + genPE1Pl + " " + verb + verbTenseArray[2];

       document.getElementById(answers[3]).innerHTML = noun + nomPE1 + " " + object + genPE1 + " " + verb + verbTenseArray[3];

       //document.getElementById(answers[3]).innerHTML = predicateAdjectivesPlural[0][0];

       responseButton.innerHTML = "";

       //responseButton.onclick = function(){hint()};

    }   else if  (num == 2){

      startButton.innerHTML = "The " + nounArray[randomNounIndex][1] + " " + verbArray[randomVerbIndex][num] + " the " + dirObjArray[randomDirObjIndex][1];

      document.getElementById(answers[0]).innerHTML = noun + nomPE1 + " " + object + accPE1Pl + " " + verb + verbTenseArray[0];

      document.getElementById(answers[1]).innerHTML = noun + accPE1 + " " + object + nomPE1Pl + " " + verb + verbTenseArray[1];

      document.getElementById(answers[2]).innerHTML = noun + nomPE1 + " " + object + accPE1 + " " + verb + verbTenseArray[2];

      document.getElementById(answers[3]).innerHTML = noun + nomPE1Pl + " " + object + accPE1 + " " + verb + verbTenseArray[3];

      //document.getElementById(answers[3]).innerHTML = predicateAdjectivesPlural[0][0];

      responseButton.innerHTML = "";

      //responseButton.onclick = function(){hint()};

    } else if  (num == 3){

      startButton.innerHTML = "The " + nounArray[randomNounIndex][1] + " " + verbArray[randomVerbIndex][num] + " the " +  dirObjArray[randomDirObjIndex][1];

      document.getElementById(answers[0]).innerHTML = noun + accPE1Pl + " " + object + nomPE1 + " " + verb + verbTenseArray[0];

      document.getElementById(answers[1]).innerHTML = noun + nomPE1 + " " + object + genPE1 + " " + verb + verbTenseArray[1];

      document.getElementById(answers[2]).innerHTML = noun + nomPE1 + " " +  object + genPE1Pl + " " + verb + verbTenseArray[2];

      document.getElementById(answers[3]).innerHTML = noun + nomPE1 + " " + object + accPE1 + " " + verb + verbTenseArray[3];

      //document.getElementById(answers[3]).innerHTML = predicateAdjectivesPlural[0][0];

      responseButton.innerHTML = "";

      //responseButton.onclick = function(){hint()};

    }
  }




    directObject();



    responseButton.disabled = false;










      resetAnswerColors();

      enableButtons();




        decrementCount();






      if (count == 0){

        gameOverAudio();

        startButton.innerHTML = "Select a New Game!";




        answerOne.innerHTML = game1Title;
        answerTwo.innerHTML = game2Title;
        answerThree.innerHTML = game3Title;
        answerFour.innerHTML = game4Title;

        document.getElementById("boxThree").innerHTML = "Score";
        responseButton.innerHTML = "You earned " + points + " points!";
        points = 0;

        stopTimer();
        document.getElementById("boxOne").innerHTML = "Timer";

        answerOne.onclick = function(){selectGame1()};
        answerTwo.onclick = function(){selectGame2()};
        answerThree.onclick = function(){selectGame3()};
        answerFour.onclick = function(){selectGame4()};

        count = 11;


         }




    }










  function cLC123(){

    resetNum();

    countDownTimer();
     timeleft = 25;
     countdown = setInterval(countDownTimer,1000);

     //shuffle(answers);


    startButton.disabled = true;

    class Adjective{

      constructor(adjStem){
        this.adjForm = adjStem;
      }
    }

    var adjArray = [["grav", "serious"],["vil", "cheap"],["util", "useful"],["terribil", "terrible"],["trist", "sad"],["fidel", "faithful"],["lev", "light"],["difficil", "difficult"],["brev", "short"], ["fort", "brave"]];
    var randomAdjIndex = Math.floor(Math.random() * adjArray.length);
    newAdj = new Adjective(adjArray[randomAdjIndex][0]);
    adjective = newAdj.adjForm;



    class Noun{

     constructor(nounStem){
     this.nounForm = nounStem;
     }
    }

    //var randomTenseIndex = Math.floor(Math.random() * 3);

    //This sets the correct subject in serpensA
    var nounArray = [["puell", "girl"], ["regin", "queen"],["pugn", "fight"],["fili", "daughter"],["amic", "girl friend"],["agricol", "farmer"], ["poet", "poet"], ["ancill", "maid servant"], ["naut", "sailor"]];
    var randomNounIndex = Math.floor(Math.random() * nounArray.length);
    newNoun = new Noun(nounArray[randomNounIndex][0]);
    noun = newNoun.nounForm;

    var nounArrayCLC = [["puell", "girl"], ["famili", "family"],["besti", "beast"],["de", "goddess"],["femin", "woman"],["regin", "queen"],["domin", "mistress"],["fili", "daughter"],["amic", "girl friend"],["agricol", "farmer"], ["poet", "poet"], ["ancill", "maid servant"], ["naut", "sailor"]];
    var randomNounCLCIndex = Math.floor(Math.random() * nounArrayCLC.length);
    newNounCLC = new Noun(nounArrayCLC[randomNounCLCIndex][0]);
    nounCLC = newNounCLC.nounForm;

    var dirObjArray = [["puell", "girl"], ["sell", "chair"],["vill", "house"],["vi", "road"],["silv", "forest"],["regin", "queen"],["pugn", "fight"],["port", "gate"],["ir", "anger"],["gale", "helmet"],["fili", "daughter"],["anim", "soul"],["amic", "girl friend"],["agricol", "farmer"], ["poet", "poet"], ["ancill", "maid servant"], ["naut", "sailor"]];
    var randomDirObjIndex = Math.floor(Math.random() * dirObjArray.length);
    newObject = new Noun(dirObjArray[randomDirObjIndex][0]);
    object = newObject.nounForm;

    var dirObjCLCArray = [["puell", "girl"], ["sell", "chair"],["vill", "house"],["vi", "road"],["silv", "forest"],["regin", "queen"],["pugn", "fight"],["port", "gate"],["ir", "anger"],["gale", "helmet"],["fili", "daughter"],["anim", "soul"],["amic", "girl friend"],["agricol", "farmer"], ["poet", "poet"], ["ancill", "maid servant"], ["naut", "sailor"]];
    var randomDirObjCLCIndex = Math.floor(Math.random() * dirObjCLCArray.length);
    newObjectCLC = new Noun(dirObjCLCArray[randomDirObjCLCIndex][0]);
    objectCLC = newObjectCLC.nounForm;


    class Verb{
     constructor(verbStem){
       this.verbForm = verbStem;
     }
    }


    //The sets the correct verb in serpensC
    var verbArray = [["will love","loves","loved", "was loving",  "am"], ["will beg","begs","begged", "was begging", "or"],["will observe","observes","observed", "was observing",  "observ"],["will carry","carries","carried", "was carrying",  "port"],["will greet","greets","greeted", "was greeting",  "salut"],["will kill","kills","killed", "was killing",  "nec"],["will fight","fights", "fought", "was fighting",  "pugn"], ["will save","saves","saved", "was saving",  "serv"], ["will look at","looks at", "looked at", "was looking at",  "spect"], ["will call","calls","called", "was calling", "voc"], ["will annoy","annoys","annoyed", "was annoying", "vex"], ["will wound","wounds","wounded", "was wounding", "vulner"], ["will beat","beats","beat", "was beating", "verber"], ["will scold","scolds","scolded", "was scolding", "vituper"], ["will hit","hits","hit", "was hitting", "puls"], ["will free","frees","freed", "was freeing", "liber"], ["will wait","waits for","waited for", "was waiting", "exspect"], ["will avoid","avoids","avoided", "was avoiding", "vit"], ["will hide","hides","hid", "was hiding", "cel"]];
  var randomVerbIndex = Math.floor(Math.random() * verbArray.length);
    newVerb = new Verb(verbArray[randomVerbIndex][4]);
    verb = newVerb.verbForm;


    var verbTenseArray = [fut3rdSing,pres3rdSing,per3rdSing,imp3rdSing];



    //var num = Math.floor(Math.random() * 4);

    //var num = numberArray[randomNumberArrayIndex];
    //var verbPE = verbTenseArray[randomNumberArrayIndex];

    //shuffle(verbTenseArray);


      function directObject(){




        if (num == 0){

       startButton.innerHTML = "The " + adjArray[randomAdjIndex][1] + " " + nounArray[randomNounIndex][1] + " " + verbArray[randomVerbIndex][num] + " the " + dirObjArray[randomDirObjIndex][1];

       document.getElementById(answers[0]).innerHTML = adjArray[randomAdjIndex][0] + nomPE3 + " " + noun + nomPE1 + " " + object + accPE1 + " " + verb + verbTenseArray[0];

       document.getElementById(answers[1]).innerHTML = adjArray[randomAdjIndex][0] + accPE3 + " " + noun + accPE1 + " " + object + nomPE1 + " " + verb + verbTenseArray[1];

       document.getElementById(answers[2]).innerHTML = adjArray[randomAdjIndex][0] + genPE3Pl + " " + noun + genPE1Pl + " " + object + accPE1 + " " + verb + verbTenseArray[2];

       document.getElementById(answers[3]).innerHTML = noun + nomPE1 + " " + adjArray[randomAdjIndex][0] + accPE3 + " "+ object + accPE1 + " " + verb + verbTenseArray[3];

       //document.getElementById(answers[3]).innerHTML = predicateAdjectivesPlural[0][0];

       responseButton.innerHTML = "";

       //responseButton.onclick = function(){hint()};

     }  else if (num == 1){

       startButton.innerHTML = "The " + nounArray[randomNounIndex][1] + " " + verbArray[randomVerbIndex][num] + " the " + adjArray[randomAdjIndex][1] + " " + dirObjArray[randomDirObjIndex][1];

       document.getElementById(answers[0]).innerHTML = noun + accPE1Pl + " " + adjArray[randomAdjIndex][0] + accPE3Pl + " " + object + nomPE1 + " " + verb + verbTenseArray[0];

       document.getElementById(answers[1]).innerHTML = noun + nomPE1 + " " + adjArray[randomAdjIndex][0] + accPE3 + " " + object + accPE1 + " " + verb + verbTenseArray[1];

       document.getElementById(answers[2]).innerHTML = noun + nomPE1 + " " + adjArray[randomAdjIndex][0] + genPE3Pl + " " + object + genPE1Pl + " " + verb + verbTenseArray[2];

       document.getElementById(answers[3]).innerHTML = noun + nomPE1 + " " + adjArray[randomAdjIndex][0] + genPE3 + " " + object + genPE1 + " " + verb + verbTenseArray[3];

       //document.getElementById(answers[3]).innerHTML = predicateAdjectivesPlural[0][0];

       responseButton.innerHTML = "";

       //responseButton.onclick = function(){hint()};

    }   else if  (num == 2){

      startButton.innerHTML = "The " + adjArray[randomAdjIndex][1] + " " + nounArray[randomNounIndex][1] + " " + verbArray[randomVerbIndex][num] + " the " + dirObjArray[randomDirObjIndex][1];

      document.getElementById(answers[0]).innerHTML = adjArray[randomAdjIndex][0] + nomPE3 + " " + noun + nomPE1 + " " + object + accPE1Pl + " " + verb + verbTenseArray[0];

      document.getElementById(answers[1]).innerHTML = adjArray[randomAdjIndex][0] + accPE3 + " " + noun + accPE1 + " " + object + nomPE1 + " " + verb + verbTenseArray[1];

      document.getElementById(answers[2]).innerHTML = adjArray[randomAdjIndex][0] + nomPE3 + " " + noun + nomPE1 + " " + object + accPE1 + " " + verb + verbTenseArray[2];

      document.getElementById(answers[3]).innerHTML = noun + nomPE1 + " " + adjArray[randomAdjIndex][0] + accPE3 + " "+ object + accPE1 + " " + verb + verbTenseArray[3];

      //document.getElementById(answers[3]).innerHTML = predicateAdjectivesPlural[0][0];

      responseButton.innerHTML = "";

      //responseButton.onclick = function(){hint()};

    } else if  (num == 3){

      startButton.innerHTML = "The " + nounArray[randomNounIndex][1] + " " + verbArray[randomVerbIndex][num] + " the " + adjArray[randomAdjIndex][1] + " " + dirObjArray[randomDirObjIndex][1];

      document.getElementById(answers[0]).innerHTML = noun + accPE1Pl + " " + adjArray[randomAdjIndex][0] + accPE3Pl + " " + object + nomPE1 + " " + verb + verbTenseArray[0];

      document.getElementById(answers[1]).innerHTML = noun + nomPE1 + " " + adjArray[randomAdjIndex][0] + genPE3 + " " + object + genPE1 + " " + verb + verbTenseArray[1];

      document.getElementById(answers[2]).innerHTML = noun + nomPE1 + " " + adjArray[randomAdjIndex][0] + genPE3Pl + " " + object + genPE1Pl + " " + verb + verbTenseArray[2];

      document.getElementById(answers[3]).innerHTML = noun + nomPE1 + " " + adjArray[randomAdjIndex][0] + accPE3 + " " + object + accPE1 + " " + verb + verbTenseArray[3];

      //document.getElementById(answers[3]).innerHTML = predicateAdjectivesPlural[0][0];

      responseButton.innerHTML = "";

      //responseButton.onclick = function(){hint()};

    }
  }




    directObject();



    responseButton.disabled = false;










      resetAnswerColors();

      enableButtons();




        decrementCount();






      if (count == 0){

        gameOverAudio();

        startButton.innerHTML = "Select a New Game!";




        answerOne.innerHTML = game1Title;
        answerTwo.innerHTML = game2Title;
        answerThree.innerHTML = game3Title;
        answerFour.innerHTML = game4Title;

        document.getElementById("boxThree").innerHTML = "Score";
        responseButton.innerHTML = "You earned " + points + " points!";
        points = 0;

        stopTimer();
        document.getElementById("boxOne").innerHTML = "Timer";

        answerOne.onclick = function(){selectGame1()};
        answerTwo.onclick = function(){selectGame2()};
        answerThree.onclick = function(){selectGame3()};
        answerFour.onclick = function(){selectGame4()};

        count = 11;


         }




    }













  function unusTresDuo(){

    resetNum();

    countDownTimer();
     timeleft = 25;
     countdown = setInterval(countDownTimer,1000);

     //shuffle(answers);


    startButton.disabled = true;

    class Adjective{

      constructor(adjStem){
        this.adjForm = adjStem;
      }
    }

    var adjArray = [["grav", "serious"],["vil", "cheap"],["util", "useful"],["terribil", "terrible"],["trist", "sad"],["fidel", "faithful"],["lev", "light"],["difficil", "difficult"],["brev", "short"], ["fort", "brave"]];
    var randomAdjIndex = Math.floor(Math.random() * adjArray.length);
    newAdj = new Adjective(adjArray[randomAdjIndex][0]);
    adjective = newAdj.adjForm;



    class Noun{

     constructor(nounStem){
     this.nounForm = nounStem;
     }
    }

    //var randomTenseIndex = Math.floor(Math.random() * 3);

    //This sets the correct subject in serpensA
    var nounArray = [["puell", "girl"], ["regin", "queen"],["pugn", "fight"],["fili", "daughter"],["amic", "girl friend"],["agricol", "farmer"], ["poet", "poet"], ["ancill", "maid servant"], ["naut", "sailor"]];
    var randomNounIndex = Math.floor(Math.random() * nounArray.length);
    newNoun = new Noun(nounArray[randomNounIndex][0]);
    noun = newNoun.nounForm;

    var nounArrayCLC = [["puell", "girl"], ["famili", "family"],["besti", "beast"],["de", "goddess"],["femin", "woman"],["regin", "queen"],["domin", "mistress"],["fili", "daughter"],["amic", "girl friend"],["agricol", "farmer"], ["poet", "poet"], ["ancill", "maid servant"], ["naut", "sailor"]];
    var randomNounCLCIndex = Math.floor(Math.random() * nounArrayCLC.length);
    newNounCLC = new Noun(nounArrayCLC[randomNounCLCIndex][0]);
    nounCLC = newNounCLC.nounForm;

    var dirObjArray = [["puell", "girl"], ["sell", "chair"],["vill", "house"],["vi", "road"],["silv", "forest"],["regin", "queen"],["pugn", "fight"],["port", "gate"],["ir", "anger"],["gale", "helmet"],["fili", "daughter"],["anim", "soul"],["amic", "girl friend"],["agricol", "farmer"], ["poet", "poet"], ["ancill", "maid servant"], ["naut", "sailor"]];
    var randomDirObjIndex = Math.floor(Math.random() * dirObjArray.length);
    newObject = new Noun(dirObjArray[randomDirObjIndex][0]);
    object = newObject.nounForm;

    var dirObjCLCArray = [["puell", "girl"], ["sell", "chair"],["vill", "house"],["vi", "road"],["silv", "forest"],["regin", "queen"],["pugn", "fight"],["port", "gate"],["ir", "anger"],["gale", "helmet"],["fili", "daughter"],["anim", "soul"],["amic", "girl friend"],["agricol", "farmer"], ["poet", "poet"], ["ancill", "maid servant"], ["naut", "sailor"]];
    var randomDirObjCLCIndex = Math.floor(Math.random() * dirObjCLCArray.length);
    newObjectCLC = new Noun(dirObjCLCArray[randomDirObjCLCIndex][0]);
    objectCLC = newObjectCLC.nounForm;


    class Verb{
     constructor(verbStem){
    	 this.verbForm = verbStem;
     }
    }


    //The sets the correct verb in serpensC
    var verbArray = [["loves","loved", "was loving", "will love", "am"], ["begs","begged", "was begging", "will beg","or"],["observes","observed", "was observing", "will observe", "observ"],["carries","carried", "was carrying", "will carry", "port"],["greets","greeted", "was greeting", "will greet", "salut"],["kills","killed", "was killing", "will kill", "nec"],["fights", "fought", "was fighting", "will fight", "pugn"], ["saves","saved", "was saving", "will save", "serv"], ["looks at", "looked at", "was looking at", "will look at", "spect"], ["calls","called", "was calling", "will call","voc"],["carries","carried", "was carrying", "will carry","port"], ["annoys","annoyed", "was annoying", "will annoy","vex"], ["wounds","wounded", "was wounding", "will wound","vulner"], ["beats","beat", "was beating", "will beat","verber"], ["scolds","scolded", "was scolding", "will scold","vituper"], ["hits","hit", "was hitting", "will hit","puls"], ["frees","freed", "was freeing", "will free","liber"], ["waits for","waited for", "was waiting", "will wait","exspect"], ["avoids","avoided", "was avoiding", "will avoid","vit"], ["hides","hid", "was hiding", "will hide","cel"]];
  var randomVerbIndex = Math.floor(Math.random() * verbArray.length);
    newVerb = new Verb(verbArray[randomVerbIndex][4]);
    verb = newVerb.verbForm;


    var verbTenseArray = [pres3rdSing, per3rdSing, imp3rdSing, fut3rdSing];



    //var num = Math.floor(Math.random() * 4);

    //var num = numberArray[randomNumberArrayIndex];
    //var verbPE = verbTenseArray[randomNumberArrayIndex];

    //shuffle(verbTenseArray);


      function directObject(){




        if (num == 0){

       startButton.innerHTML = "The " + adjArray[randomAdjIndex][1] + " " + nounArray[randomNounIndex][1] + " " + verbArray[randomVerbIndex][num] + " the " + dirObjArray[randomDirObjIndex][1];

       document.getElementById(answers[0]).innerHTML = adjArray[randomAdjIndex][0] + nomPE3 + " " + noun + nomPE1 + " " + object + accPE1 + " " + verb + verbTenseArray[0];

       document.getElementById(answers[1]).innerHTML = adjArray[randomAdjIndex][0] + accPE3 + " " + noun + accPE1 + " " + object + nomPE1 + " " + verb + verbTenseArray[1];

       document.getElementById(answers[2]).innerHTML = adjArray[randomAdjIndex][0] + genPE3Pl + " " + noun + genPE1Pl + " " + object + accPE1 + " " + verb + verbTenseArray[2];

       document.getElementById(answers[3]).innerHTML = noun + nomPE1 + " " + adjArray[randomAdjIndex][0] + accPE3 + " "+ object + accPE1 + " " + verb + verbTenseArray[3];

       //document.getElementById(answers[3]).innerHTML = predicateAdjectivesPlural[0][0];

       responseButton.innerHTML = "";

       //responseButton.onclick = function(){hint()};

     }  else if (num == 1){

       startButton.innerHTML = "The " + nounArray[randomNounIndex][1] + " " + verbArray[randomVerbIndex][num] + " the " + adjArray[randomAdjIndex][1] + " " + dirObjArray[randomDirObjIndex][1];

       document.getElementById(answers[0]).innerHTML = noun + accPE1Pl + " " + adjArray[randomAdjIndex][0] + accPE3Pl + " " + object + nomPE1 + " " + verb + verbTenseArray[0];

       document.getElementById(answers[1]).innerHTML = noun + nomPE1 + " " + adjArray[randomAdjIndex][0] + accPE3 + " " + object + accPE1 + " " + verb + verbTenseArray[1];

       document.getElementById(answers[2]).innerHTML = noun + nomPE1 + " " + adjArray[randomAdjIndex][0] + genPE3Pl + " " + object + genPE1Pl + " " + verb + verbTenseArray[2];

       document.getElementById(answers[3]).innerHTML = noun + nomPE1 + " " + adjArray[randomAdjIndex][0] + genPE3 + " " + object + genPE1 + " " + verb + verbTenseArray[3];

       //document.getElementById(answers[3]).innerHTML = predicateAdjectivesPlural[0][0];

       responseButton.innerHTML = "";

       //responseButton.onclick = function(){hint()};

    }   else if  (num == 2){

      startButton.innerHTML = "The " + adjArray[randomAdjIndex][1] + " " + nounArray[randomNounIndex][1] + " " + verbArray[randomVerbIndex][num] + " the " + dirObjArray[randomDirObjIndex][1];

      document.getElementById(answers[0]).innerHTML = adjArray[randomAdjIndex][0] + nomPE3 + " " + noun + nomPE1 + " " + object + accPE1Pl + " " + verb + verbTenseArray[0];

      document.getElementById(answers[1]).innerHTML = adjArray[randomAdjIndex][0] + accPE3 + " " + noun + accPE1 + " " + object + nomPE1 + " " + verb + verbTenseArray[1];

      document.getElementById(answers[2]).innerHTML = adjArray[randomAdjIndex][0] + nomPE3 + " " + noun + nomPE1 + " " + object + accPE1 + " " + verb + verbTenseArray[2];

      document.getElementById(answers[3]).innerHTML = noun + nomPE1 + " " + adjArray[randomAdjIndex][0] + accPE3 + " "+ object + accPE1 + " " + verb + verbTenseArray[3];

      //document.getElementById(answers[3]).innerHTML = predicateAdjectivesPlural[0][0];

      responseButton.innerHTML = "";

      //responseButton.onclick = function(){hint()};

    } else if  (num == 3){

      startButton.innerHTML = "The " + nounArray[randomNounIndex][1] + " " + verbArray[randomVerbIndex][num] + " the " + adjArray[randomAdjIndex][1] + " " + dirObjArray[randomDirObjIndex][1];

      document.getElementById(answers[0]).innerHTML = noun + accPE1Pl + " " + adjArray[randomAdjIndex][0] + accPE3Pl + " " + object + nomPE1 + " " + verb + verbTenseArray[0];

      document.getElementById(answers[1]).innerHTML = noun + nomPE1 + " " + adjArray[randomAdjIndex][0] + genPE3 + " " + object + genPE1 + " " + verb + verbTenseArray[1];

      document.getElementById(answers[2]).innerHTML = noun + nomPE1 + " " + adjArray[randomAdjIndex][0] + genPE3Pl + " " + object + genPE1Pl + " " + verb + verbTenseArray[2];

      document.getElementById(answers[3]).innerHTML = noun + nomPE1 + " " + adjArray[randomAdjIndex][0] + accPE3 + " " + object + accPE1 + " " + verb + verbTenseArray[3];

      //document.getElementById(answers[3]).innerHTML = predicateAdjectivesPlural[0][0];

      responseButton.innerHTML = "";

      //responseButton.onclick = function(){hint()};

    }

}




    directObject();



    responseButton.disabled = false;










      resetAnswerColors();

      enableButtons();




        decrementCount();






      if (count == 0){

        gameOverAudio();

        startButton.innerHTML = "Select a New Game!";




        answerOne.innerHTML = game1Title;
        answerTwo.innerHTML = game2Title;
        answerThree.innerHTML = game3Title;
        answerFour.innerHTML = game4Title;

        document.getElementById("boxThree").innerHTML = "Score";
        responseButton.innerHTML = "You earned " + points + " points!";
        points = 0;

        stopTimer();
        document.getElementById("boxOne").innerHTML = "Timer";

        answerOne.onclick = function(){selectGame1()};
        answerTwo.onclick = function(){selectGame2()};
        answerThree.onclick = function(){selectGame3()};
        answerFour.onclick = function(){selectGame4()};

        count = 11;


         }




    }










function triaVerba(){

  resetNum();

  countDownTimer();
   timeleft = 25;
   countdown = setInterval(countDownTimer,1000);

   //shuffle(answers);


  startButton.disabled = true;

  class Adjective{

    constructor(adjStem){
      this.adjForm = adjStem;
    }
  }

  var adjArray = [["grav", "serious"],["vil", "cheap"],["util", "useful"],["terribil", "terrible"],["trist", "sad"],["fidel", "faithful"],["lev", "light"],["difficil", "difficult"],["brev", "short"], ["fort", "brave"]];
  var randomAdjIndex = Math.floor(Math.random() * adjArray.length);
  newAdj = new Adjective(adjArray[randomAdjIndex][0]);
  adjective = newAdj.adjForm;



  class Noun{

   constructor(nounStem){
   this.nounForm = nounStem;
   }
  }

  //var randomTenseIndex = Math.floor(Math.random() * 3);

  //This sets the correct subject in serpensA
  var nounArray = [["puell", "girl"], ["sell", "chair"],["vill", "house"],["vi", "road"],["silv", "forest"],["regin", "queen"],["pugn", "fight"],["port", "gate"],["ir", "anger"],["gale", "helmet"],["fili", "daughter"],["anim", "soul"],["amic", "girl friend"],["agricol", "farmer"], ["poet", "poet"], ["ancill", "maid servant"], ["naut", "sailor"]];
  var randomNounIndex = Math.floor(Math.random() * nounArray.length);
  newNoun = new Noun(nounArray[randomNounIndex][0]);
  noun = newNoun.nounForm;

  var dirObjArray = [["puell", "girl"], ["sell", "chair"],["vill", "house"],["vi", "road"],["silv", "forest"],["regin", "queen"],["pugn", "fight"],["port", "gate"],["ir", "anger"],["gale", "helmet"],["fili", "daughter"],["anim", "soul"],["amic", "girl friend"],["agricol", "farmer"], ["poet", "poet"], ["ancill", "maid servant"], ["naut", "sailor"]];
  var randomDirObjIndex = Math.floor(Math.random() * dirObjArray.length);
  newObject = new Noun(dirObjArray[randomDirObjIndex][0]);
  object = newObject.nounForm;


  class Verb{
   constructor(verbStem){
  	 this.verbForm = verbStem;
   }
  }


  //The sets the correct verb in serpensC
  var verbArray = [["was loving", "will love","loves","loved",  "am"], ["was begging", "will beg","begs","begged", "or"],["was observing", "will observe","observes","observed",  "observ"],["was carrying", "will carry","carries","carried",  "port"],["was greeting", "will greet","greets","greeted",  "salut"],["was killing", "will kill","kills","killed",  "nec"],["was fighting", "will fight","fights", "fought",  "pugn"], ["was saving", "will save","saves","saved",  "serv"], ["was watching", "will watch","watches", "watched",  "spect"]];
var randomVerbIndex = Math.floor(Math.random() * verbArray.length);
  newVerb = new Verb(verbArray[randomVerbIndex][4]);
  verb = newVerb.verbForm;


var verbTenseArray = [imp3rdSing, fut3rdSing,pres3rdSing, per3rdSing];

  //var num = Math.floor(Math.random() * 4);

  //var num = numberArray[randomNumberArrayIndex];
  //var verbPE = verbTenseArray[randomNumberArrayIndex];

  //shuffle(verbTenseArray);


    function directObject(){

      if (num == 0){
     startButton.innerHTML = "The " + adjArray[randomAdjIndex][1] + " " + nounArray[randomNounIndex][1] + " " + verbArray[randomVerbIndex][num];

     document.getElementById(answers[0]).innerHTML = adjArray[randomAdjIndex][0] + nomPE3 + " " + noun + nomPE1 + " " + verb + verbTenseArray[0];

     document.getElementById(answers[1]).innerHTML = adjArray[randomAdjIndex][0] + accPE3 + " " + noun + accPE1 + " " + verb + verbTenseArray[1];

     document.getElementById(answers[2]).innerHTML = adjArray[randomAdjIndex][0] + datPE3 + " " + noun + datPE1 + " " + verb + verbTenseArray[2];

     document.getElementById(answers[3]).innerHTML = adjArray[randomAdjIndex][0] + nomPE3 + " " + noun + nomPE1 + " " + verb + verbTenseArray[3];

     //document.getElementById(answers[3]).innerHTML = predicateAdjectivesPlural[0][0];

     responseButton.innerHTML = "";

     //responseButton.onclick = function(){hint()};

   } else if  (num == 1){

  startButton.innerHTML = "She " + verbArray[randomVerbIndex][num] + " the " + adjArray[randomAdjIndex][1] + " " + nounArray[randomNounIndex][1];

  document.getElementById(answers[0]).innerHTML = adjArray[randomAdjIndex][0] + nomPE3 + " " + noun + nomPE1 + " " + verb + verbTenseArray[0];

  document.getElementById(answers[1]).innerHTML = adjArray[randomAdjIndex][0] + accPE3 + " " + noun + accPE1 + " " + verb + verbTenseArray[1];

  document.getElementById(answers[2]).innerHTML = adjArray[randomAdjIndex][0] + datPE3 + " " + noun + datPE1 + " " + verb + verbTenseArray[2];

  document.getElementById(answers[3]).innerHTML = adjArray[randomAdjIndex][0] + nomPE3 + " " + noun + nomPE1 + " " + verb + verbTenseArray[3];

  //document.getElementById(answers[3]).innerHTML = predicateAdjectivesPlural[0][0];

  responseButton.innerHTML = "";

  //responseButton.onclick = function(){hint()};

}  else if  (num == 2){

  startButton.innerHTML = "She " + verbArray[randomVerbIndex][num] + " the " + adjArray[randomAdjIndex][1] + " " + nounArray[randomNounIndex][1] +"s";

  document.getElementById(answers[0]).innerHTML = adjArray[randomAdjIndex][0] + nomPE3 + " " + noun + nomPE1 + " " + verb + verbTenseArray[0];

  document.getElementById(answers[1]).innerHTML = adjArray[randomAdjIndex][0] + accPE3 + " " + noun + accPE1 + " " + verb + verbTenseArray[1];

  document.getElementById(answers[2]).innerHTML = adjArray[randomAdjIndex][0] + accPE3Pl + " " + noun + accPE1Pl + " " + verb + verbTenseArray[2];

  document.getElementById(answers[3]).innerHTML = adjArray[randomAdjIndex][0] + nomPE3 + " " + noun + nomPE1 + " " + verb + verbTenseArray[3];

  //document.getElementById(answers[3]).innerHTML = predicateAdjectivesPlural[0][0];

  responseButton.innerHTML = "";

  //responseButton.onclick = function(){hint()};

} else if  (num == 3){

  startButton.innerHTML = "The " + adjArray[randomAdjIndex][1] + " " + nounArray[randomNounIndex][1] + " " + verbArray[randomVerbIndex][num];

  document.getElementById(answers[0]).innerHTML = adjArray[randomAdjIndex][0] + nomPE3 + " " + noun + nomPE1 + " " + verb + verbTenseArray[0];

  document.getElementById(answers[1]).innerHTML = adjArray[randomAdjIndex][0] + accPE3 + " " + noun + accPE1 + " " + verb + verbTenseArray[1];

  document.getElementById(answers[2]).innerHTML = adjArray[randomAdjIndex][0] + accPE3Pl + " " + noun + accPE1Pl + " " + verb + verbTenseArray[2];

  document.getElementById(answers[3]).innerHTML = adjArray[randomAdjIndex][0] + nomPE3 + " " + noun + nomPE1 + " " + verb + verbTenseArray[3];

  //document.getElementById(answers[3]).innerHTML = predicateAdjectivesPlural[0][0];

  responseButton.innerHTML = "";

  //responseButton.onclick = function(){hint()};
  }





   }

  directObject();



  responseButton.disabled = false;










    resetAnswerColors();

    enableButtons();




      decrementCount();






    if (count == 0){

      gameOverAudio();

      startButton.innerHTML = "Select a New Game!";




      answerOne.innerHTML = game1Title;
      answerTwo.innerHTML = game2Title;
      answerThree.innerHTML = game3Title;
      answerFour.innerHTML = game4Title;

      document.getElementById("boxThree").innerHTML = "Score";
      responseButton.innerHTML = "You earned " + points + " points!";
      points = 0;

      stopTimer();
      document.getElementById("boxOne").innerHTML = "Timer";

      answerOne.onclick = function(){selectGame1()};
      answerTwo.onclick = function(){selectGame2()};
      answerThree.onclick = function(){selectGame3()};
      answerFour.onclick = function(){selectGame4()};

      count = 11;


       }




  }



function mixUpFun(){

  var randomMixUpIndex = Math.floor(Math.random() * 6);
   var mixUp = [cLC, cLC1, cLC2,cLC123,unusTresDuo,triaVerba];
   mixUp[randomMixUpIndex]();

}







function beAgreeable(){

 countDownTimer();
  timeleft = 15;
  countdown = setInterval(countDownTimer,1000);


 startButton.disabled = true;



 shuffle(masculineSubject);
 shuffle(feminineSubject);
 shuffle(neuterSubject);
 shuffle(thirdPersonIntransitiveVerbs);
 shuffle(linkingVerbs);
 shuffle(predicateAdjectives);
 shuffle(moreTransitiveVerbs);
 shuffle(thirdPersonIntransitiveVerbs);
 shuffle(masculineSubjectPlural);
 shuffle(feminineSubjectPlural);
 shuffle(thirdPersonIntransitiveVerbsPlural);
 shuffle(linkingVerbsPlural);
 shuffle(predicateAdjectivesPlural);



 shuffle(answers);


function beAgreeablePredicateMasculineAdjective(){
 startButton.innerHTML = masculineSubject[0][0]  + " " + linkingVerbs[0][0] + " " + predicateAdjectives[0][6] + ".";

 document.getElementById(answers[0]).innerHTML = predicateAdjectives[0][0];

 document.getElementById(answers[1]).innerHTML = predicateAdjectives[0][1];

 document.getElementById(answers[2]).innerHTML = predicateAdjectives[0][2];

 document.getElementById(answers[3]).innerHTML = predicateAdjectives[0][3];

 //document.getElementById(answers[3]).innerHTML = predicateAdjectivesPlural[0][0];

 responseButton.innerHTML = "Hint";

 responseButton.onclick = function(){hint()};
 }



 function beAgreeablePredicateFeminineAdjective(){
 startButton.innerHTML = feminineSubject[0][0]  + " " + linkingVerbs[0][0] + " " + predicateAdjectivesFem[0][6] + ".";

 document.getElementById(answers[0]).innerHTML = predicateAdjectivesFem[0][1] + " ";

 document.getElementById(answers[1]).innerHTML = predicateAdjectivesFem[0][0] + " ";

 document.getElementById(answers[2]).innerHTML = predicateAdjectivesFem[0][2] + " ";

 document.getElementById(answers[3]).innerHTML = predicateAdjectivesFem[0][4] + " ";

 //document.getElementById(answers[3]).innerHTML = predicateAdjectivesPlural[0][0];

 responseButton.innerHTML = "Hint";

 responseButton.onclick = function(){hint2()};
 }


 function beAgreeablePredicateNeuterAdjective(){
 startButton.innerHTML = neuterSubject[0][0]  + " " + linkingVerbs[0][0] + " " + predicateAdjectives[0][6] + ".";

 document.getElementById(answers[0]).innerHTML = predicateAdjectives[0][2] + "  ";

 document.getElementById(answers[1]).innerHTML = predicateAdjectives[0][0] + "  ";

 document.getElementById(answers[2]).innerHTML = predicateAdjectives[0][1] + "  ";

 document.getElementById(answers[3]).innerHTML = predicateAdjectives[0][3] + "  ";

 //document.getElementById(answers[3]).innerHTML = predicateAdjectivesPlural[0][0];

 responseButton.innerHTML = "Hint";

 responseButton.onclick = function(){hint3()};
 }


 function beAgreeablePredicateMasculineAdjectivePlural(){
 startButton.innerHTML = masculineSubjectPlural[0][0]  + " " + linkingVerbsPlural[0][0] + " " + predicateAdjectivesPlural[0][6] + ".";

 document.getElementById(answers[0]).innerHTML = predicateAdjectivesPlural[0][0] + "   ";

 document.getElementById(answers[1]).innerHTML = predicateAdjectivesPlural[0][1] + "   ";

 document.getElementById(answers[2]).innerHTML = predicateAdjectivesPlural[0][2] + "   ";

 document.getElementById(answers[3]).innerHTML = predicateAdjectivesPlural[0][3] + "   ";

 //document.getElementById(answers[3]).innerHTML = predicateAdjectivesPlural[0][0];

 responseButton.innerHTML = "Hint";

 responseButton.onclick = function(){hint4()};
 }

 function beAgreeablePredicateFeminineAdjectivePlural(){
 startButton.innerHTML = feminineSubjectPlural[0][0]  + " " + linkingVerbsPlural[0][0] + " " + predicateAdjectivesPluralFem[0][6] + ".";

 document.getElementById(answers[0]).innerHTML = predicateAdjectivesPluralFem[0][1] + "    ";

 document.getElementById(answers[1]).innerHTML = predicateAdjectivesPluralFem[0][0] + "    ";

 document.getElementById(answers[2]).innerHTML = predicateAdjectivesPluralFem[0][2] + "    ";

 document.getElementById(answers[3]).innerHTML = predicateAdjectivesPluralFem[0][3] + "    ";

 //document.getElementById(answers[3]).innerHTML = predicateAdjectivesPlural[0][0];

 responseButton.innerHTML = "Hint";

 responseButton.onclick = function(){hint5()};
 }

 function beAgreeablePredicateNeuterAdjectivePlural(){
 startButton.innerHTML = neuterSubjectPlural[0][0]  + " " + linkingVerbsPlural[0][0] + " " + predicateAdjectivesPluralNeut[0][6] + ".";

 document.getElementById(answers[0]).innerHTML = predicateAdjectivesPluralNeut[0][2];

 document.getElementById(answers[1]).innerHTML = predicateAdjectivesPluralNeut[0][0];

 document.getElementById(answers[2]).innerHTML = predicateAdjectivesPluralNeut[0][1];

 document.getElementById(answers[3]).innerHTML = predicateAdjectivesPluralNeut[0][3];

 //document.getElementById(answers[3]).innerHTML = predicateAdjectivesPlural[0][0];

 responseButton.innerHTML = "Hint";

 responseButton.onclick = function(){hint6()};
 }


//beAgreeablePredicateMasculineAdjective();

//beAgreeablePredicateFeminineAdjective();


var randomAdjectiveIndex = Math.floor(Math.random() * 6);
 var mixUp = [beAgreeablePredicateMasculineAdjective,beAgreeablePredicateFeminineAdjective, beAgreeablePredicateNeuterAdjective,beAgreeablePredicateMasculineAdjectivePlural,beAgreeablePredicateFeminineAdjectivePlural, beAgreeablePredicateNeuterAdjectivePlural];

 mixUp[randomAdjectiveIndex]();





responseButton.disabled = false;










  resetAnswerColors();

  enableButtons();




    decrementCount();






  if (count == 0){

    gameOverAudio();

    startButton.innerHTML = "Select a New Game!";




    answerOne.innerHTML = game1Title;
    answerTwo.innerHTML = game2Title;
    answerThree.innerHTML = game3Title;
    answerFour.innerHTML = game4Title;

    document.getElementById("boxThree").innerHTML = "Score";
    responseButton.innerHTML = "You earned " + points + " points!";
    points = 0;

    stopTimer();
    document.getElementById("boxOne").innerHTML = "Timer";

    answerOne.onclick = function(){selectGame1()};
    answerTwo.onclick = function(){selectGame2()};
    answerThree.onclick = function(){selectGame3()};
    answerFour.onclick = function(){selectGame4()};

    count = 11;


     }



 }






































function relativelySpeakingQui(){

 countDownTimer();
 	timeleft = 15;
 	countdown = setInterval(countDownTimer,1000);


 startButton.disabled = true;



 shuffle(masculineSubject);
 shuffle(feminineSubject);
 shuffle(neuterSubject);
 shuffle(thirdPersonIntransitiveVerbs);
 shuffle(linkingVerbs);
 shuffle(predicateAdjectives);
 shuffle(moreTransitiveVerbs);
 shuffle(thirdPersonIntransitiveVerbs);
 shuffle(masculineSubjectPlural);
 shuffle(feminineSubjectPlural);
 shuffle(thirdPersonIntransitiveVerbsPlural);
 shuffle(linkingVerbsPlural);
 shuffle(predicateAdjectivesPlural);



 shuffle(answers);


 function masculineSingularQui(){
 startButton.innerHTML = masculineSubject[0][0] + ", " + relativeSubject[0][1] + " " + thirdPersonIntransitiveVerbs[0][0] + ", " + linkingVerbs[0][0] + " " + predicateAdjectives[0][0] + ".";

 document.getElementById(answers[0]).innerHTML = relativeSubject[0][0];

 document.getElementById(answers[1]).innerHTML = relativeSubject[1][0];

 document.getElementById(answers[2]).innerHTML = relativeSubject[2][0];

 document.getElementById(answers[3]).innerHTML = relativeSubject[3][0];

 responseButton.innerHTML = "Hint";

 responseButton.onclick = function(){hint()};
 }




function feminineSingularQuae(){
 startButton.innerHTML = feminineSubject[0][0] + ", " + relativeSubject[1][1] + " " + thirdPersonIntransitiveVerbs[0][0] + ", " + linkingVerbs[0][0] + " " + predicateAdjectives[0][1] + ".";

 document.getElementById(answers[0]).innerHTML = relativeSubject[1][0] + " ";

 document.getElementById(answers[1]).innerHTML = relativeSubject[0][0] + " ";

 document.getElementById(answers[2]).innerHTML = relativeSubject[2][0] + " ";

 document.getElementById(answers[3]).innerHTML = relativeSubject[4][0] + " ";

 responseButton.innerHTML = "Hint";

 responseButton.onclick = function(){hint2()};
 }


 function neuterSingularQuod(){
 startButton.innerHTML = neuterSubject[0][0] + ", " + relativeSubject[2][1] + " " + moreTransitiveVerbs[0][0] + ", " + linkingVerbs[0][0] + " " + predicateSizeAdjectives[0][2] + ".";

 document.getElementById(answers[0]).innerHTML = relativeSubject[2][0] + "  ";

 document.getElementById(answers[1]).innerHTML = relativeSubject[0][0] + "  ";

 document.getElementById(answers[2]).innerHTML = relativeSubject[1][0] + "  ";

 document.getElementById(answers[3]).innerHTML = relativeSubject[3][0] + "  ";

 responseButton.innerHTML = "Hint";

 responseButton.onclick = function(){hint3()};
 }


function masculineSingularQuem(){
 startButton.innerHTML = masculineSubject[0][0] + ", " + relativeSubject[3][1] + " " + moreTransitiveVerbs[0][0] + ", " + linkingVerbs[0][0] + " " + predicateAdjectives[0][0] + ".";

 document.getElementById(answers[0]).innerHTML = relativeSubject[3][0] + "   ";

 document.getElementById(answers[1]).innerHTML = relativeSubject[4][0] + "   ";

 document.getElementById(answers[2]).innerHTML = relativeSubject[0][0] + "   ";

 document.getElementById(answers[3]).innerHTML = relativeSubject[5][0] + "   ";

 responseButton.innerHTML = "Hint";

 responseButton.onclick = function(){hint4()};
 }


function feminineSingularQuam(){
 startButton.innerHTML = feminineSubject[0][0] + ", " + relativeSubject[4][1] + " " + moreTransitiveVerbs[0][0] + ", " + thirdPersonIntransitiveVerbs[0][0] + ".";

 document.getElementById(answers[0]).innerHTML = relativeSubject[4][0] + "    ";

 document.getElementById(answers[1]).innerHTML = relativeSubject[1][0] + "    ";

 document.getElementById(answers[2]).innerHTML = relativeSubject[2][0] + "    ";

 document.getElementById(answers[3]).innerHTML = relativeSubject[3][0] + "    ";

 responseButton.innerHTML = "Hint";

 responseButton.onclick = function(){hint5()};
 }


function masculinePluralQui(){
 startButton.innerHTML = masculineSubjectPlural[0][0] + ", " + relativePronounsPlural[0][1] + " " + thirdPersonIntransitiveVerbsPlural[0][0] + ", " + linkingVerbsPlural[0][0] + " " + predicateAdjectivesPlural[0][0] + ".";

 document.getElementById(answers[0]).innerHTML = relativePronounsPlural[0][0] + "     ";

 document.getElementById(answers[1]).innerHTML = relativePronounsPlural[1][0] + "     ";

 document.getElementById(answers[2]).innerHTML = relativePronounsPlural[3][0] + "     ";

 document.getElementById(answers[3]).innerHTML = relativePronounsPlural[4][0] + "     ";

 responseButton.innerHTML = "Hint";

 responseButton.onclick = function(){hint6()};
 }


 function femininePluralQuae(){
 startButton.innerHTML = feminineSubjectPlural[0][0] + ", " + relativePronounsPlural[1][1] + " " + thirdPersonIntransitiveVerbsPlural[0][0] + ", " + linkingVerbsPlural[0][0] + " " + predicateAdjectivesPlural[0][1] + ".";

 document.getElementById(answers[0]).innerHTML = relativePronounsPlural[1][0] + "      ";

 document.getElementById(answers[1]).innerHTML = relativePronounsPlural[0][0] + "      ";

 document.getElementById(answers[2]).innerHTML = relativePronounsPlural[3][0] + "      ";

 document.getElementById(answers[3]).innerHTML = relativePronounsPlural[4][0] + "      ";

 responseButton.innerHTML = "Hint";

 responseButton.onclick = function(){hint7()};
 }


function masculinePluralQuos(){
 startButton.innerHTML = masculineSubjectPlural[0][0] + ", " + relativePronounsPlural[3][1] + " " + moreTransitiveVerbs[0][0] + ", " + linkingVerbsPlural[0][0] + " " + predicateAdjectivesPlural[0][0] + ".";

 document.getElementById(answers[0]).innerHTML = relativePronounsPlural[3][0] + "       ";

 document.getElementById(answers[1]).innerHTML = relativePronounsPlural[0][0] + "       ";

 document.getElementById(answers[2]).innerHTML = relativePronounsPlural[1][0] + "       ";

 document.getElementById(answers[3]).innerHTML = relativePronounsPlural[4][0] + "       ";

 responseButton.innerHTML = "Hint";

 responseButton.onclick = function(){hint8()};
 }


 function femininePluralQuas(){
 startButton.innerHTML = feminineSubjectPlural[0][0] + ", " + relativePronounsPlural[4][1] + " " + moreTransitiveVerbs[0][0] + ", " + thirdPersonIntransitiveVerbsPlural[0][0] + ".";

 document.getElementById(answers[0]).innerHTML = relativePronounsPlural[4][0] + "        ";

 document.getElementById(answers[1]).innerHTML = relativePronounsPlural[0][0] + "        ";

 document.getElementById(answers[2]).innerHTML = relativePronounsPlural[1][0] + "        ";

 document.getElementById(answers[3]).innerHTML = relativePronounsPlural[3][0] + "        ";

 responseButton.innerHTML = "Hint";

 responseButton.onclick = function(){hint9()};
 }


var randomImperativeIndex = Math.floor(Math.random() * 9);
 var mixUp = [masculineSingularQui,feminineSingularQuae, neuterSingularQuod, masculineSingularQuem, feminineSingularQuam,masculinePluralQui,femininePluralQuae,masculinePluralQuos,femininePluralQuas]

 mixUp[randomImperativeIndex]();

















responseButton.disabled = false;










 	resetAnswerColors();

  enableButtons();




  	decrementCount();






 	if (count == 0){

 		gameOverAudio();

 		startButton.innerHTML = "Select a New Game!";




 		answerOne.innerHTML = game1Title;
 		answerTwo.innerHTML = game2Title;
 		answerThree.innerHTML = game3Title;
 		answerFour.innerHTML = game4Title;

 		document.getElementById("boxThree").innerHTML = "Score";
 		responseButton.innerHTML = "You earned " + points + " points!";
 		points = 0;

 		stopTimer();
 		document.getElementById("boxOne").innerHTML = "Timer";

 		answerOne.onclick = function(){selectGame1()};
 		answerTwo.onclick = function(){selectGame2()};
 		answerThree.onclick = function(){selectGame3()};
 		answerFour.onclick = function(){selectGame4()};

 		count = 11;


     }



 }







   function resetAnswerColors(){

	A1.style.backgroundColor = "white";
	A2.style.backgroundColor = "white";
	A3.style.backgroundColor = "white";
	A4.style.backgroundColor = "white";

	answerOne.style.backgroundColor = "white";
	answerTwo.style.backgroundColor = "white";
	answerThree.style.backgroundColor = "white";
	answerFour.style.backgroundColor = "white";

	answerOne.style.color = "black";
	answerTwo.style.color = "black";
	answerThree.style.color = "black";
	answerFour.style.color = "black";

}




function enableButtons(){

	answerOne.disabled = false;
	answerTwo.disabled = false;
	answerThree.disabled = false;
	answerFour.disabled = false;

}

function disableButtons(){
		answerOne.disabled = true;
		answerTwo.disabled = true;
		answerThree.disabled = true;
		answerFour.disabled = true;
}







function clickedAnswerOne(){




	if (
    //checkAnswers[0][1] == true ||
    //checkAnswers[0] == checkAnswers[document.getElementById("answerOne").value] ||
    document.getElementById("answerOne").value == num ||
    document.getElementById("answerOne").innerHTML == predicateAdjectives[0][0]||
    document.getElementById("answerOne").innerHTML ==   predicateAdjectivesFem[0][1] + " "||
    document.getElementById("answerOne").innerHTML ==   predicateAdjectives[0][2] + "  "||
    document.getElementById("answerOne").innerHTML == predicateAdjectivesPlural[0][0] + "   "||
    document.getElementById("answerOne").innerHTML == predicateAdjectivesPluralFem[0][1]+ "    "||
    document.getElementById("answerOne").innerHTML == predicateAdjectivesPluralNeut[0][2]){

		correctAnswerAudio();
		//clickedCorrectAnswerOneAudio ();
		points += pointsPerCorrectAnswer;
		document.getElementById("boxThree").innerHTML = points;
		stopTimer();
		disableButtons();
		responseButton.disabled = true;
		timeleft = 15;
		answerOne.style.backgroundColor = "yellow";
		answerOne.style.border = "yellow";
		document.getElementById("A1").style.backgroundColor = "yellow";

    answerTwo.style.color = "red";
    answerTwo.style.backgroundColor = "black";
    answerTwo.style.border = "black";
    document.getElementById("A2").style.backgroundColor = "black";

    answerThree.style.color = "red";
    answerThree.style.backgroundColor = "black";
    answerThree.style.border = "black";
    document.getElementById("A3").style.backgroundColor = "black";

    answerFour.style.color = "red";
    answerFour.style.backgroundColor = "black";
    answerFour.style.border = "black";
    answerFour.disabled = true;
    document.getElementById("A4").style.backgroundColor = "black";

		responseButton.innerHTML = "Optime!";
		responseButton.style.color = "yellow";
		startButton.innerHTML = "Next Question!";
		startButton.disabled = false;


		unHideResponseNext();




	} else {

		wrongAnswerAudio();
		//clickedWrongAnswerOneAudio();
		points -= pointsPerCorrectAnswer/2;
		document.getElementById("boxThree").innerHTML = points;
		answerOne.style.color = "red";
		answerOne.style.backgroundColor = "black";
		answerOne.style.border = "black";
		answerOne.disabled = true;
		document.getElementById("A1").style.backgroundColor = "black";
		responseButton.style.color = "black";

		responseButton.innerHTML = "Eheu!";

	}

}


function clickedAnswerTwo(){



	if (
    //checkAnswers[1][1] == true  ||
    //checkAnswers[1] == checkAnswers[document.getElementById("answerTwo").value] ||
    document.getElementById("answerTwo").value == num ||
    document.getElementById("answerTwo").innerHTML == predicateAdjectives[0][0]||
    document.getElementById("answerTwo").innerHTML ==   predicateAdjectivesFem[0][1] + " "||
    document.getElementById("answerTwo").innerHTML ==   predicateAdjectives[0][2] + "  "||
    document.getElementById("answerTwo").innerHTML == predicateAdjectivesPlural[0][0] + "   "||
    document.getElementById("answerTwo").innerHTML == predicateAdjectivesPluralFem[0][1] + "    "||
    document.getElementById("answerTwo").innerHTML == predicateAdjectivesPluralNeut[0][2]){

		correctAnswerAudio();
		//clickedCorrectAnswerTwoAudio();
		points += pointsPerCorrectAnswer;
		document.getElementById("boxThree").innerHTML = points;
		stopTimer();
		disableButtons();
		responseButton.disabled = true;
		timeleft = 15;
		answerTwo.style.backgroundColor = "yellow";
		answerTwo.style.border = "yellow";
		document.getElementById("A2").style.backgroundColor = "yellow";

    answerOne.style.color = "red";
    answerOne.style.backgroundColor = "black";
    answerOne.style.border = "black";
    document.getElementById("A1").style.backgroundColor = "black";

    answerThree.style.color = "red";
    answerThree.style.backgroundColor = "black";
    answerThree.style.border = "black";
    document.getElementById("A3").style.backgroundColor = "black";

    answerFour.style.color = "red";
		answerFour.style.backgroundColor = "black";
		answerFour.style.border = "black";
		answerFour.disabled = true;
		document.getElementById("A4").style.backgroundColor = "black";

		responseButton.innerHTML = "Optime!";
		responseButton.style.color = "yellow";
		startButton.innerHTML = "Next Question!";
		startButton.disabled = false;


		unHideResponseNext();



	} else {

		wrongAnswerAudio();
		//clickedWrongAnswerTwoAudio();
		points -= pointsPerCorrectAnswer/2;
		document.getElementById("boxThree").innerHTML = points;
		answerTwo.style.color = "red";
		answerTwo.style.backgroundColor = "black";
		answerTwo.style.border = "black";
		answerTwo.disabled = true;
		document.getElementById("A2").style.backgroundColor = "black";
		responseButton.style.color = "black";

		responseButton.innerHTML = "Eheu!";

	}
}

function clickedAnswerThree(){



	if (
    //checkAnswers[2][1] == true  ||
    document.getElementById("answerThree").value == num ||
    document.getElementById("answerThree").innerHTML == predicateAdjectives[0][0]||
    document.getElementById("answerThree").innerHTML ==   predicateAdjectivesFem[0][1] + " "||
    document.getElementById("answerThree").innerHTML ==   predicateAdjectives[0][2] + "  "||
    document.getElementById("answerThree").innerHTML == predicateAdjectivesPlural[0][0] + "   "||
    document.getElementById("answerThree").innerHTML == predicateAdjectivesPluralFem[0][1] + "    "||
    document.getElementById("answerThree").innerHTML == predicateAdjectivesPluralNeut[0][2]){

		correctAnswerAudio();
		//clickedCorrectAnswerThreeAudio();
		points += pointsPerCorrectAnswer;
		document.getElementById("boxThree").innerHTML = points;
		stopTimer();
		disableButtons();
		responseButton.disabled = true;
		timeleft = 15;
		answerThree.style.backgroundColor = "yellow";
		answerThree.style.border = "yellow";
		document.getElementById("A3").style.backgroundColor = "yellow";

    answerOne.style.color = "red";
    answerOne.style.backgroundColor = "black";
    answerOne.style.border = "black";
    document.getElementById("A1").style.backgroundColor = "black";

    answerTwo.style.color = "red";
    answerTwo.style.backgroundColor = "black";
    answerTwo.style.border = "black";
    document.getElementById("A2").style.backgroundColor = "black";

    answerFour.style.color = "red";
    answerFour.style.backgroundColor = "black";
    answerFour.style.border = "black";
    answerFour.disabled = true;
    document.getElementById("A4").style.backgroundColor = "black";
		responseButton.innerHTML = "Optime!";


		responseButton.style.color = "yellow";
		startButton.innerHTML = "Next Question!";
		startButton.disabled = false;


		unHideResponseNext();



	} else {

		wrongAnswerAudio();
		//clickedWrongAnswerThreeAudio();
		points -= pointsPerCorrectAnswer/2;
		document.getElementById("boxThree").innerHTML = points;
		answerThree.style.color = "red";
		answerThree.style.backgroundColor = "black";
		answerThree.style.border = "black";
		answerThree.disabled = true;
		document.getElementById("A3").style.backgroundColor = "black";
		responseButton.style.color = "black";

		responseButton.innerHTML = "Eheu!";

	}

}



function clickedAnswerFour(){



	if (
    //checkAnswers[3][1] == true  ||
    document.getElementById("answerFour").value == num ||

    document.getElementById("answerFour").innerHTML == predicateAdjectives[0][0]||
    document.getElementById("answerFour").innerHTML ==   predicateAdjectivesFem[0][1] + " "||
    document.getElementById("answerFour").innerHTML ==   predicateAdjectives[0][2] + "  "||
    document.getElementById("answerFour").innerHTML == predicateAdjectivesPlural[0][0] + "   "||
    document.getElementById("answerFour").innerHTML == predicateAdjectivesPluralFem[0][1] + "    "||
    document.getElementById("answerFour").innerHTML == predicateAdjectivesPluralNeut[0][2]){


		correctAnswerAudio();
		//clickedCorrectAnswerFourAudio;
		points += pointsPerCorrectAnswer;
		document.getElementById("boxThree").innerHTML = points;
		stopTimer();
		disableButtons();
		responseButton.disabled = true;
		timeleft = 15;
		answerFour.style.backgroundColor = "yellow";
		answerFour.style.border = "yellow";
		document.getElementById("A4").style.backgroundColor = "yellow";
		responseButton.innerHTML = "Optime!";

    answerOne.style.color = "red";
    answerOne.style.backgroundColor = "black";
    answerOne.style.border = "black";
    document.getElementById("A1").style.backgroundColor = "black";

    answerTwo.style.color = "red";
		answerTwo.style.backgroundColor = "black";
		answerTwo.style.border = "black";
    document.getElementById("A2").style.backgroundColor = "black";

    answerThree.style.color = "red";
    answerThree.style.backgroundColor = "black";
    answerThree.style.border = "black";
    document.getElementById("A3").style.backgroundColor = "black";

		responseButton.style.color = "yellow";
		startButton.innerHTML = "Next Question!";
		startButton.disabled = false;


		unHideResponseNext();



	} else {

		wrongAnswerAudio();
		//clickedWrongAnswerFourAudio();
		points -= pointsPerCorrectAnswer/2;
		document.getElementById("boxThree").innerHTML = points;
		answerFour.style.color = "red";
		answerFour.style.backgroundColor = "black";
		answerFour.style.border = "black";
		answerFour.disabled = true;
		document.getElementById("A4").style.backgroundColor = "black";
		responseButton.style.color = "black";

		responseButton.innerHTML = "Eheu!";

	}


}
