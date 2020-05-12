// select all elements
const start = document.getElementById("start");
const quiz = document.getElementById("quiz");
const question = document.getElementById("question");
const qImg = document.getElementById("qImg");
const choiceA = document.getElementById("A");
const choiceB = document.getElementById("B");
const choiceC = document.getElementById("C");
const choiceD = document.getElementById("D");
const choiceE = document.getElementById("E");
const respostac = document.getElementById("resposta");
const counter = document.getElementById("counter");
const timeGauge = document.getElementById("timeGauge");
const progress = document.getElementById("progress");
const scoreDiv = document.getElementById("scoreContainer");

// create our questions
let questions = [
    {
        question : "Quina marca és aquesta?",
        imgSrc : "../img/Mit.png",
        choiceA : "Mitsubishi",
        choiceB : "Mybach",
        choiceC : "Ram",
        choiceD : "Subaru",
        choiceE : "La resposta corrcte és Mitsubishi",
        correct : "A",
		resposta : "Molt bé!!"
    },{
        question : "Quin és el logo de la marca Rover?",
        imgSrc : "../img/blanc3.png",
        choiceA : "<img src=../img/pontiac.png>",
        choiceB : "<img src=../img/land2.png>",
        choiceC : "<img src=../img/rover.png>",
        choiceD : "<img src=../img/rolls.png>",
        choiceE : "El logo  de Rover és el tercer C",
        correct : "C",
		resposta : "Molt bé!!"
    },{
        question : "Quina marca és aquesta?",
        imgSrc : "../img/Acura.png",
        choiceA : "Ariel",
        choiceB : "Morgan",
        choiceC : "American Cars",
        choiceD : "Acura",
        choiceE : "La resposta correcte és Acura",
        correct : "D",
		resposta : "Molt bé!!"
    },{
        question : "Quin és el logo de la marca Toyota?",
	    imgSrc : "../img/blanc3.png",
        choiceA : "<img src=../img/toyota.png>",
        choiceB : "<img src=../img/tata.png>",
        choiceC : "<img src=../img/honda2.png>",
        choiceD : "<img src=../img/daewoo.png>",
        choiceE : "El logo  de Toyota és el primer A",
        correct : "A",
		resposta : "Molt bé!!"
    },{
        question : "Quin cotxe és aquest?",
        imgSrc : "../img/BMW3.png",
        choiceA : "BMW x4",
        choiceB : "Audi A4 sedán",
        choiceC : "BMW serie 3",
        choiceD : "Audi Q7",
        choiceE : "Aquest cotxe és un BMW serie 3",
        correct : "C",
		resposta : "Molt bé!!"
    },{
        question : "Quin cotxe és aquest?",
        imgSrc : "../img/lambo.png",
        choiceA : "Ferrari LaFerrari",
        choiceB : "Pagani Zonda",
        choiceC : "Ferrari 488",
        choiceD : "Lamborghini Huracan",
        choiceE : "És un Lamborghini Huracan",
        correct : "D",
		resposta : "Molt bé!!"
    },{
        question : "Quin d´aquests cotxes té més de 500cv",
        imgSrc : "../img/blanc3.png",
        choiceA : "<img src=../img/amg.png>",
        choiceB : "<img src=../img/mustang.png>",
        choiceC : "<img src=../img/supra.png>",
        choiceD : "<img src=../img/cayman.png>",
        choiceE : "El primer té més de 500 cv",
        correct : "A",
		resposta : "Molt bé!!"
    },{
        question : "Quin fracment de cotxe  pertany a un Ferrari F40?",
        imgSrc : "../img/logof40.png",
 		choiceA : "<img src=../img/f50.png>",
        choiceB : "<img src=../img/gto.png>",
        choiceC : "<img src=../img/f40.png>",
        choiceD : "<img src=../img/evo.png>",
        choiceE : "El tercer és un Ferrari F40",
        correct : "C",
		resposta : "Correcte!!"
    },{
        question : "Quin és el model exacte del cotxe de la imatge?",
        imgSrc : "../img/GT.png",
        choiceA : "Chevrolet Camaro",
        choiceB : "Chevrolet Corvette",
        choiceC : "Ford Henessey",
        choiceD : "Ford GT",
        choiceE : "El model excte és Ford GT ,tercer",
        correct : "D",	
		resposta : "Molt bé!!"

    },{
        question : "Quin cotxe té la velocitat punta més alta?",
        imgSrc : "../img/blanc3.png",
        choiceA : "<img src=../img/veiron.png>",
        choiceB : "<img src=../img/venom.png>",
        choiceC : "<img src=../img/agera.png>",
        choiceD : "<img src=../img/laferrari.png>",
        choiceE : "La velocitat punta més alta la té el Hennessey Venom F5  , el segon",
        correct : "B",
		resposta : "Molt bé!!"

    },{
        question : "Quina d´aquestes ''inicials'' de Audi és més esportiva?",
        imgSrc : "../img/logoaudi.png",
        choiceA : "<img src=../img/tsilogo.png>",
        choiceB : "<img src=../img/rslogopng.png>",
        choiceC : "<img src=../img/tdilogo.png>",
        choiceD : "<img src=../img/slogo.png>",
        choiceE : "Les inicials més esportives de Audi són RS",
        correct : "B",
		resposta : "Molt bé!!"

    },{
        question : "Que volen dir les ''inicials'' RS?",
        imgSrc : "../img/rslogopng.png",
        choiceA : "Ràpid, Sigilós",
        choiceB : "Ràpid, Superesportiu",
        choiceC : "Racing, Sport",
        choiceD : "Racing, Sprint",
        choiceE : "Les inicials RS volen dir Racing Sport , tercer",
        correct : "C",
		resposta : "Molt bé!!"

    },{
        question: "Endevina el cotxe",
        imgSrc : "../img/totoya.png",
        choiceA : "Porsche Panamera Turbo",
        choiceB : "Infiniti QX80",
        choiceC : "Toyota Sequoia AWD",
        choiceD : "Infiniti QX60",
        choiceE : "És un Toyota Sequoia AWD , tercer",
        correct : "C",
		resposta : "Correcte!!"

    },{
        question : "Endevina el cotxe",
        imgSrc : "../img/pontiacgto.png",
        choiceA : "Chevy Nova",
        choiceB : "Hyundai Sonata Turbo",
        choiceC : "TVR Cervera Speed",
        choiceD : "Pontiac GTO The Judge",
        choiceE : "És un Pontiac GTO The Judge",
        correct : "D",
		resposta : "Correcte!!"
    },{
        question : "Endevina el model del cotxe",
        imgSrc : "../img/m2X.png",
        choiceA : "Tahoe AT",
        choiceB : "M2 Competition",
        choiceC : "GTO V8",
        choiceD : "RS 3 Sedán",
        choiceE : "És un BMW M2 Competition",
        correct : "B",
		resposta : "Correcte!!"

    },{
        question : "Quin any va ser el començament de la producció del Mercedes-AMG GLC 63 S",
        imgSrc : "../img/glc63.png",
        choiceA : "2017",
        choiceB : "2019",
        choiceC : "2020",
        choiceD : "2012",
        choiceE : "El començament de la producció va ser al 2019",
        correct : "B",
		resposta : "Correcte!!"

    },{
        question : "Aproximadament quants CV creus que té?",
        imgSrc : "../img/focusrs-2.png",
        choiceA : "260 CV",
        choiceB : "400 CV",
        choiceC : "315 CV",
        choiceD : "350 CV",
        choiceE : "El Ford Focus RS té 351 CV",
        correct : "D",
		resposta : "Correcte!!"

    },{
        question : "Aproximadament quants CV creus que té?",
        imgSrc : "../img/wrcyaris.png",
        choiceA : "600 CV",
        choiceB : "400 CV",
        choiceC : "420 CV",
        choiceD : "380 CV",
        choiceE : "El Toyota Yaris WRC té 380 CV , però amb 1.190Kg!!",
        correct : "D",
		resposta : "Correcte!!"
    },{
        question : "Qui té el rècord de victòries en mundials de rallys? ",
        imgSrc : "../img/logowrc.png",
        choiceA : "Tommi Mäkinen",
        choiceB : "Juha Kankkunen",
        choiceC : "Colin McRae",
        choiceD : "Sébastien Loeb",
        choiceE : "Sébastien Loeb és qui té el record",
        correct : "D",
		resposta : "Correcte!!"

    },{
        question : "Quants mundials consecotius ha guanyat Sébastien Loeb?",
        imgSrc : "../img/logowrc.png",
        choiceA : "7 Mundials",
        choiceB : "9 Mundials",
        choiceC : "3 Mundials",
        choiceD : "11 Mundials",
        choiceE : "Sébastien Loeb ha guanyat 9 mundials consecotius",
        correct : "B",
		resposta : "Correcte!!"
    },{
        question : "Qui té el rècord de victòries en mundials de Formula 1? ",
        imgSrc : "../img/f1.png",
        choiceA : "Michael Schumacher",
        choiceB : "Ayrton Senna",
        choiceC : "Juan Manuel Fangio",
        choiceD : "Lewis Hamilton",
        choiceE : "Michael Schumacher és qui té el record",
        correct : "A",
		resposta : "Correcte!!"
    },{
        question : "Quants mundials ha guanyat Michael Schumacher?",
        imgSrc : "../img/f1.png",
        choiceA : "7 Mundials",
        choiceB : "9 Mundials",
        choiceC : "3 Mundials",
        choiceD : "5 Mundials",
        choiceE : "Michael Schumacher ha guanyat 7 mundials",
        correct : "A",
		resposta : "Correcte!!"
    },{
        question : "Quin cotxe pasaria més ràpid per Nürburgring Nordschleife?",
        imgSrc : "../img/logonu.png",
        choiceA : "<img src=../img/shelby.png>",
        choiceB : "<img src=../img/aven.png>",
        choiceC : "<img src=../img/488gtb.png>",
        choiceD : "<img src=../img/rr.png>",
        choiceE : "El que passaria més ràpid seria el Ferrari 488 GTB , tercer",
        correct : "C",
		resposta : "Correcte!!"
    },{
        question : "Quin cotxe pasaria més ràpid per Nürburgring Nordschleife?",
        imgSrc : "../img/logonu.png",
        choiceA : "<img src=../img/camaro.png>",
        choiceB : "<img src=../img/rr.png>",
        choiceC : "<img src=../img/911.png>",
        choiceD : "<img src=../img/gts.png>",
        choiceE : "El que passaria més ràpid seria el Honda Civic Type R , segon",
        correct : "B",
		resposta : "Correcte!!"
    },{
        question : "Quin cotxe és aquest?",
        imgSrc : "../img/civic.png",
        choiceA : "Skoda Superb",
        choiceB : "Hummer H1 4",
        choiceC : "Honda Legend",
        choiceD : "Honda Civic Type R 2009",
        choiceE : "És un Honda Civic Type R 2009",
        correct : "D",
		resposta : "Correcte!!"
	},{
        question : "Quin cotxe accelera de 0-100 Km/h més ràpid?",
        imgSrc : "../img/0100.png",
        choiceA : "<img src=../img/xkrs.png>",
        choiceB : "<img src=../img/syy.png>",
        choiceC : "<img src=../img/512.png>",
        choiceD : "<img src=../img/m5.png>",
        choiceE : "El Jaguar XK RS és el que accelera de 0-100 km/h més ràpid , segon",
        correct : "A",
		resposta : "Correcte!!"
    }
];

// create some variables

const lastQuestion = questions.length - 1;
let runningQuestion = 0;
let count = 0;
const questionTime = 25; // 10s
const gaugeWidth = 150; // 150px
const gaugeUnit = gaugeWidth / questionTime;
let TIMER;
let score = 0;

// render a question
function renderQuestion(){
    let q = questions[runningQuestion];
    
    question.innerHTML = "<p>"+ q.question +"</p>";
    qImg.innerHTML = "<img src="+ q.imgSrc +">";
    choiceA.innerHTML = q.choiceA;
    choiceB.innerHTML = q.choiceB;
    choiceC.innerHTML = q.choiceC;
    choiceD.innerHTML = q.choiceD;
    choiceE.innerHTML = q.choiceE;
    respostac.innerHTML = q.resposta;
}

start.addEventListener("click",startQuiz);

// start quiz
function startQuiz(){
    start.style.display = "none";
    renderQuestion();
    quiz.style.display = "block";
    renderProgress();
    renderCounter();
    TIMER = setInterval(renderCounter,1000); // 1000ms = 1s
}

// render progress
function renderProgress(){
    for(let qIndex = 0; qIndex <= lastQuestion; qIndex++){
        progress.innerHTML += "<div class='prog' id="+ qIndex +"></div>";
    }
}

// counter render

function renderCounter(){
    if(count <= questionTime){
        counter.innerHTML = count;
        timeGauge.style.width = count * gaugeUnit + "px";
        count++
    }else{
        count = 0;
        // change progress color to red
        answerIsWrong();
        if(runningQuestion < lastQuestion){
            runningQuestion++;
            renderQuestion();
        }else{
            // end the quiz and show the score
            clearInterval(TIMER);
            scoreRender();
        }
    }
}

// checkAnwer

function checkAnswer(answer){
    if( answer == questions[runningQuestion].correct){
        // answer is correct
        score++;
        // change progress color to green
        answerIsCorrect();
		alert(resposta.innerHTML);
    }else{
        // answer is wrong
        // change progress color to red
        answerIsWrong();
		alert(choiceE.innerHTML);
    }
    count = 0;
    if(runningQuestion < lastQuestion){
        runningQuestion++;
        renderQuestion();
    }else{
        // end the quiz and show the score
        clearInterval(TIMER);
        scoreRender();
    }
}

// answer is correct
function answerIsCorrect(){
    document.getElementById(runningQuestion).style.backgroundColor = "#0f0";
}

// answer is Wrong
function answerIsWrong(){
    document.getElementById(runningQuestion).style.backgroundColor = "#f00";
}

// score render
function scoreRender(){
    scoreDiv.style.display = "block";
    
    // calculate the amount of question percent answered by the user
    const scorePerCent = Math.round(100 * score/questions.length);
    
    // choose the image based on the scorePerCent
    let img = (scorePerCent >= 80) ? "../img/5.png" :
             (scorePerCent >= 60) ? "../img/4.png" :
               (scorePerCent >= 40) ? "../img/3.png" :
              (scorePerCent >= 20) ? "../img/2.png" :
              "../img/1.png";
    
    scoreDiv.innerHTML = "<img src="+ img +">";
    scoreDiv.innerHTML += "<p>"+ scorePerCent +"%</p>";
}