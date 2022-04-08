var arrKategorien = ["Frage", "Kontaktfreudigkeit", "Organisationstalent", "Fitness", "Analytisches Denken"];

var arrReihenfolge = [0, 1, 2, 3];
var arrPunkte = [0, 0, 0, 0];

var Blue100 = "#426DA9";
var Blue55 = "#97AFD0";

var Teal100 = "#00857D";
var Teal55 = "#73BCB7";

var DarkGreen100 = "#173F35";
var DarkGreen55 = "#7F9590";

var Green100 = "#76881D";
var Green55 = "#B4BE83";

var Plum100 = "#910048";
var Plum55 = "#C2739A";

var Sienna100 = "#C67D30";
var Sienna55 = "#E0B78D";

var arrFarbkombinationen = [["blue100","darkgreen100"],
                            ["blue100","plum100"],
                            ["blue100","teal100"],
                            ["green100","plum100"],
                            ["sienna100","teal100"],
                            ["sienna100","plum100"],
                            ["sienna100","darkgreen100"],
                            ["sienna100","blue100"],
                            ["teal100","blue100"],
                            ["teal100","plum100"],
                            ["teal100","darkgreen100"],
                            ["plum100","blue100"],
                            ["plum100","teal100"],
                            ["plum100","darkgreen100"]];

var arrFragenUndAntworten = [["Wo würdest du <span class='serif-kursiv'>am liebsten</span> arbeiten?", "Im Büro", "Überall ein bisschen", "An der frischen Luft", "In der Werkstatt", "Aber Hauptsache, <span class='serif-kursiv'>Kaffee</span> ist lecker &#9749; &#58388;"],
                            ["Was <span class='serif-kursiv'>hilft dir</span> bei der Arbeit?", "Zuhören und Reden", "Präsentieren", "Klare Anweisungen", "Stille", "Danke, dass du das <span class='serif-kursiv'>beantwortet</span> hast."],
                            ["Welches Wort würdest du gerne in einer <span class='serif-kursiv'>Beurteilung deiner Arbeitsweise</span> lesen? &#128220;", "Zielorientiert", "Durchsetzungsfähig", "Belastbar", "Zuverlässig", "Du bist <span class='serif-kursiv'>ein Gewinn</span> für uns alle &#127942;"],
                            ["Welche Arbeitsweise <span class='serif-kursiv'>liegt dir?</span>", "Abwechslungreiche Aufgaben", "Multitasking", "Feste, geregelte Aufgaben", "Konkrete Probleme lösen", "<span class='serif-kursiv'>Weitermachen!</span>"],
                            ["Mit wem würdest du dich <span class='serif-kursiv'>gerne mal unterhalten?</span> &#128483;", "Barbara Schöneberger", "Stefan Raab", "Matthias Opdenhövel", "Markus Lanz", "Sind sie nicht alle <span class='serif-kursiv'>zum Knutschen?</span> &#128525;"],
                            ["Was würdest du mit auf eine <span class='serif-kursiv'>einsame Insel</span> nehmen? &#127965;", "Smartphone", "Schweizer Taschenmesser", "Grill", "Tagebuch", "Wo immer du auch bist, sei mit <span class='serif-kursiv'>allen Sinnen</span> dort! &#128524;"],
                            ["Was erfüllt dich mit <span class='serif-kursiv'>Hoffnung?</span> &#128330;", "Die Menschheit", "Die Kunst", "Die Natur", "Die Wissenschaft", "<span class='serif-kursiv'>Isso!</span>"],
                            ["Wen <span class='serif-kursiv'>abonnierst du</span> auf YouTube?", "Freshtorge", "BibisBeautyPalace", "Pamela Reif", "Rezo", "Und nicht vergessen: <span class='serif-kursiv'>Glocke</span> aktivieren! &#128276;"],
                            ["Wähle eine <span class='serif-kursiv'>Sportart</span> &#127941;", "Hockey", "Fußball", "Fitnessstudio", "Schach", "<span class='serif-kursiv'>Gute</span> Wahl &#128522;"],
                            ["Wähle eine <span class='serif-kursiv'>Filmreihe</span> &#127902;", "Ich &ndash; Einfach unverbesserlich", "Mission: Impossible", "Terminator", "Matrix", "Einfach zurücklehnen und <span class='serif-kursiv'>genießen.</span>"],
                            ["Welche <span class='serif-kursiv'>Webseite</span> steuerst du an? &#128187;", "web.de", "spiegel.de", "fitforfun.de", "tagesschau.de", "Da hat es einfach <span class='serif-kursiv'>Klick</span> gemacht! &#128433;"],
                            ["Wähle ein <span class='serif-kursiv'>soziales Netzwerk</span>", "Instagram", "Twitter", "TikTok", "Reddit", "<span class='serif-kursiv'>I like</span> &#128077;"],
                            ["In <span class='serif-kursiv'>meinem Beruf</span> möchte ich… &#10084;", "Mit Menschen arbeiten", "Den Ton angeben", "Mit meinen Händen arbeiten", "Tüfteln", "<span class='serif-kursiv'>Gute</span> Antwort &#128527;"],
                            ["In <span class='serif-kursiv'>meinem Beruf</span> möchte ich auf keinen Fall… &#128148;", "Körperlich anstrengend arbeiten", "Aufgaben einfach nur abarbeiten", "Überwiegend im Büro sitzen", "Vor einer großen Gruppe Menschen sprechen", "Kann das nicht <span class='serif-kursiv'>jemand anders</span> machen? &#128553;"],
                            ["Was ist dir bei einem Job <span class='serif-kursiv'>wichtig?</span>", "Begeisterung", "Herausforderungen", "Jobsicherheit", "Liebe zum Detail", "Bei UPS bekommst du <span class='serif-kursiv'>das alles</span> &#129312;"],
                            ["Wähle ein <span class='serif-kursiv'>Genre</span>", "Komödie", "Dokumentation", "Western", "Science-Fiction", "Ein <span class='serif-kursiv'>herrliches</span> Genre!"],
                            ["Was war dein <span class='serif-kursiv'>Lieblingsfach</span> in der Schule? &#127890;", "Deutsch", "Sozialkunde", "Sport", "Mathe", "He, she, it – das 's' muss <span class='serif-kursiv'>mit!</span>"],
                            ["Was gibt's bei dir zum <span class='serif-kursiv'>Frühstück?</span>", "Coffee-to-go", "Overnight Oats", "Eier", "Belegtes Brötchen", "Piep, piep, piep! <span class='serif-kursiv'>Guten Appetit!</span>"],
                            ["Was ist deine <span class='serif-kursiv'>größte Stärke?</span> &#128170;", "Empathie", "Pläne in die Tat umsetzen", "Durchsetzungsvermögen", "Einfallsreichtum", "<span class='serif-kursiv'>Läuft</span> bei dir &#128175;"],
                            ["Wovon <span class='serif-kursiv'>hast</span> du am meisten? &#128202;", "Verständnis", "Führungsqualität", "Kraft", "Spürsinn", "Davon kann man <span class='serif-kursiv'>gar nicht genug</span> haben."],
                            ["Wähle ein <span class='serif-kursiv'>Arbeitsmittel</span>", "Telefon", "Notizblock", "Werkzeugkasten", "Computer", "Damit lässt sich <span class='serif-kursiv'>arbeiten!</span>"],
                            ["Wie startest du <span class='serif-kursiv'>in den Tag?</span> &#127774;", "Einem netten Gespräch mit den Eltern / Mitbewohnern", "To-do-Liste erstellen", "Morgensport", "Podcast", "<span class='serif-kursiv'>Ja Moin!</span>"],
                            ["Bei welcher <span class='serif-kursiv'>Sendung</span> kannst du einfach nicht abschalten?", "Die Höhle der Löwen", "Weltspiegel", "Ninja Warrior Germany", "Galileo", "Abschalten kannst du <span class='serif-kursiv'>woanders.</span>"],
                            ["Für welche der folgenden Tätigkeiten <span class='serif-kursiv'>interessierst</span> du dich? &#129488;", "Geschäftsbeziehungen managen und mit anderen verhandeln", "Andere führen und leiten", "Körperlich und im Freien tätig sein", "Funktionsfehler finden und beheben", "Es gibt <span class='serif-kursiv'>nur einen</span> Weg, der richtig für dich ist: deinen eigenen!"],
                            ["Was <span class='serif-kursiv'>beschreibt</span> dich am besten?", "Leidenschaftlich", "Aufmerksam", "Loyal", "Entschlossen", "Selbstfindung ist eine <span class='serif-kursiv'>spannende</span> Reise, die nie aufhört."],
                            ["Mir <span class='serif-kursiv'>liegt</span> es…", "Mit Unbekannten eine Unterhaltung zu starten", "Einen Plan zu machen und in die Tat umzusetzen", "Meine Ziele zu erreichen", "Technische Lösungen zu finden", "So jemanden wie dich <span class='serif-kursiv'>brauchen</span> wir hier bei UPS!"],
                            ["Ich will einen <span class='serif-kursiv'>Job</span> zum…", "Netzwerken", "Managen", "Anpacken", "Schrauben", "Arbeit <span class='serif-kursiv'>nach Maß</span> also."],
                            ["In welcher <span class='serif-kursiv'>Arbeitskleidung</span> fühlst du dich am wohlsten?", "Bluse / Hemd", "Multifunktionsjacke", "Eine coole Uniform", "Overall", "Steht dir <span class='serif-kursiv'>ausgezeichnet!</span> &#128522;"],
                            ["Welchen Song singst du beim <span class='serif-kursiv'>Karaoke?</span> &#127908; &#128515;", "Call Me Maybe", "thank u, next", "Eye of the Tiger", "Shape of You", "Sei nicht scheu! Bleib dem <span class='serif-kursiv'>Singen</span> treu!"],
                            ["Welches <span class='serif-kursiv'>Accessoire</span> hast du immer dabei?", "Eine aparte Handykette", "Eine geile Handtasche / Gürteltasche", "Ein elegantes Schweißband", "Eine freche Armbanduhr", "Es darf <span class='serif-kursiv'>mutig kombiniert</span> werden."],
                            ["Was würdest du am <span class='serif-kursiv'>liebsten</span> hiervon essen? &#127869;", "Suppe", "Auflauf", "Shake", "Burger", "<span class='serif-kursiv'>Legga</span> &#128523;"],
                            ["Wie <span class='serif-kursiv'>beschreiben</span> dich andere?", "Ehrgeizig", "Immer verschieden", "Aufgedreht", "Still, aber besonders", "Freunde sind die, die alles von einem wissen, einen aber <span class='serif-kursiv'>trotzdem lieben.</span>"],
                            ["Welche App darf <span class='serif-kursiv'>auf deinem Handy</span> nicht fehlen? &#128241;", "WhatsApp", "Google Maps", "Nike Training Club", "Bosch Toolbox", "Eine praktische Erweiterung, mit der du dein Smartphone in ein <span class='serif-kursiv'>ganz individuelles</span> Gerät verwandelst."],
                            ["Mit <span class='serif-kursiv'>welchem Tier</span> kannst du dich identifizieren?", "Hund", "Eichhörnchen", "Känguru", "Fuchs", "<span class='serif-kursiv'>Süß! </span> &#129392;"],
                            ["Dein <span class='serif-kursiv'>Lieblings-Fernsehsender?</span> &#128250;", "VOX", "ARD", "Sport1", "DMAX", "Auch bekannt als <span class='serif-kursiv'>der gute</span> Sender."],
                            ["Wie kommst du <span class='serif-kursiv'>von A</span> nach B?", "Fahrgemeinschaft", "Öffis", "Fahrrad", "Auto", "<span class='serif-kursiv'>Stabil.</span>"],
                            ["Wie <span class='serif-kursiv'>gestaltest du</span> deine Pausen?", "Kaffeeklatsch", "Einkauf machen", "Spazieren gehen", "Smartphone checken", "Arbeit ist eigentlich <span class='serif-kursiv'>gar nicht so schlimm,</span> nur die vielen Stunden zwischen den Pausen sind übertrieben."],
                            ["Ich will <span class='serif-kursiv'>einen Beruf</span> mit…", "Plauschen", "Verantwortung", "Flexibilität", "Kniffligen Aufgaben", "Arbeit ist schön! Deshalb immer etwas <span class='serif-kursiv'>für morgen</span> aufheben!"],
                            ["<span class='serif-kursiv'>Arbeit</span> sollte sein wie…", "Eine gute Diskussion", "Eine Reise", "Ein Workout", "Sudoku", "Die Work-Life-Balance muss <span class='serif-kursiv'>einfach stimmen</span> &#9878;"],
                            ["Wähle ein Projekt <span class='serif-kursiv'>für deine Freizeit</span>", "YouTube-Kanal erstellen", "Familienfeier planen", "Bodyshaping", "Entwicklung eines Roboter-Butlers", "Frohes <span class='serif-kursiv'>Schaffen!</span>"],
                            ["Bei <span class='serif-kursiv'>Logistik</span> denke ich an…", "Internationalen Handel", "Lieferketten", "Paketzustellung", "Gütertransport per Lkw", "<span class='serif-kursiv'>Na log(ist)isch!</span> &#128230;"],
                            ["Was <span class='serif-kursiv'>motiviert</span> dich?", "Anerkennung und Zuspruch", "Wenn ein Plan funktioniert", "Das Beste aus mir rauszuholen", "Sichtbare Ergebnisse", "Erfolg hat <span class='serif-kursiv'>drei</span> Buchstaben: TUN!"],
                            ["Wie arbeitest du <span class='serif-kursiv'>am liebsten?</span>", "Mit vielen unterschiedlichen Personen", "An der Spitze eines Teams ", "Im Team", "Alleine", "<span class='serif-kursiv'>#SquadGoals</span>"],
                            ["Womit hast du <span class='serif-kursiv'>als Kind</span> gespielt? &#129490;", "Kuscheltiere", "LEGO", "Springseil", "Modellautos", "Wor dat nich ne <span class='serif-kursiv'>jeile</span> Zick!?"],
                            ["Was ist <span class='serif-kursiv'>eine Schwäche</span> von dir?", "Ich rede zu viel", "Ich bin zu perfektionistisch", "Ich kann nicht still sitzen", "Ich bin nicht spontan", "<span class='serif-kursiv'>Danke</span> für deine auf&shy;richtige Antwort &#128578;"],
                            ["Was machst du am <span class='serif-kursiv'>Wochenende?</span>", "Party mit Freunden", "Wohnung umdekorieren", "Ins Gym gehen", "Gaming", "Nächstes Wochenende <span class='serif-kursiv'>ist wieder</span> Wochenende! Juhuuuu! &#127881;"]];


var runde = 0;
var maxrunden = 8;
var numberQuestionmark = 1;

var game;

var containertitle;
var containerstart;
var containerstarttop;
var containerstartbottom;
var containerintro;
var containerquestions;
var containerresponse;
var containerend;
var containerresult;
var containerstatusbar;
var containertextcounter;
var containersubmenue;
var containerexit;

var buttonstart;
var buttonintro;
var button0;
var button1;
var button2;
var button3;
var buttonresponse;
var buttonresponse2;
var buttonneustart;
var buttonneustart2;
var buttonend;
var buttonexit;
var buttonjobs;

var textquestion;
var textresponse;
var textresponse2;
var textresult;

var transporter;
var paketdienst;
var sortierer;
var plain;
var truck;

var statusbar0;
var statusbar1;
var statusbar2;
var statusbar3;

var statusbarbox0;
var statusbarbox1;
var statusbarbox2;
var statusbarbox3;



function initFitfinder() {
    console.log("hi");
    game = document.getElementById("game");

    containertitle = document.getElementById("container-title");
    containerstart = document.getElementById("container-start");
    containerstarttop = document.getElementById("container-start-top");
    containerstartbottom = document.getElementById("container-start-bottom");
    containerintro = document.getElementById("container-intro");
    containerquestions = document.getElementById("container-questions");
    containerresponse = document.getElementById("container-response");
    containerresponse2 = document.getElementById("container-response2");
    containerend = document.getElementById("container-end");
    containerresult = document.getElementById("container-result");
    containerstatusbar = document.getElementById("container-statusbar");
    containertextcounter = document.getElementById("container-textcounter");
    containersubmenue = document.getElementById("container-submenue");
    containerexit = document.getElementById("container-exit");

    buttonstart = document.getElementById("buttonstart");
    buttonintro = document.getElementById("buttonintro");
    button0 = document.getElementById("button0");
    button1 = document.getElementById("button1");
    button2 = document.getElementById("button2");
    button3 = document.getElementById("button3");
    buttonresponse = document.getElementById("buttonresponse");
    buttonresponse2 = document.getElementById("buttonresponse2");
    buttonresult = document.getElementById("buttonresult");
    buttonend = document.getElementById("buttonend");
    buttonneustart = document.getElementById("buttonneustart");
    buttonneustart2 = document.getElementById("buttonneustart2");
    buttonexit = document.getElementById("buttonexit");
    buttonjobs = document.getElementById("buttonjobs");

    textquestion = document.getElementById("textquestion");
    textresponse = document.getElementById("textresponse");
    textresponse2 = document.getElementById("textresponse2");
    textresult = document.getElementById("textresult");
    textcounter = document.getElementById("textcounter");

    transporter = document.getElementById("transporter");
    paketdienst = document.getElementById("paketdienst");
    sortierer = document.getElementById("sortierer");
    plain = document.getElementById("plain");
    truck = document.getElementById("truck");

    statusbar0 = document.getElementById("statusbar-bar-0");
    statusbar1 = document.getElementById("statusbar-bar-1");
    statusbar2 = document.getElementById("statusbar-bar-2");
    statusbar3 = document.getElementById("statusbar-bar-3");

    statusbarbox0 = document.getElementById("statusbar-box-0");
    statusbarbox1 = document.getElementById("statusbar-box-1");
    statusbarbox2 = document.getElementById("statusbar-box-2");
    statusbarbox3 = document.getElementById("statusbar-box-3");

    buttonstart.addEventListener("mouseup", geklickt);
    buttonintro.addEventListener("mouseup", geklickt);
    button0.addEventListener("mouseup", geklickt);
    button1.addEventListener("mouseup", geklickt);
    button2.addEventListener("mouseup", geklickt);
    button3.addEventListener("mouseup", geklickt);
    buttonresponse.addEventListener("mouseup", geklickt);
    buttonresponse2.addEventListener("mouseup", geklickt);
    buttonend.addEventListener("mouseup", geklickt);
    buttonneustart.addEventListener("mouseup", geklickt);
    buttonneustart2.addEventListener("mouseup", geklickt);
    buttonexit.addEventListener("mouseup", geklickt);
    buttonjobs.addEventListener("mouseup", geklickt);

    startgame();
}

function startgame() {
    //arrPunkte = [1, 2, 2, 5];
    toggleContainer("containerstart");
}

function starteNeu() {
    toggleContainer("containerintro");
    runde = 0;
    //maxrunden = 8;
    arrPunkte = [0, 0, 0, 0];
}

function waehleFrage() {
    return Math.floor(Math.random() * (arrFragenUndAntworten.length - 1)) + 1;
}

function waehleResponseIcon() {
    var iconGewaehlt = Math.ceil(Math.random()*10);

    if(iconGewaehlt == 1 || iconGewaehlt == 6){
        transporter.style.display = "inherit";
        paketdienst.style.display = "none";
        sortierer.style.display = "none";
        plain.style.display = "none";
        truck.style.display = "none";
    }else if(iconGewaehlt == 2 || iconGewaehlt == 7){
        transporter.style.display = "none";
        paketdienst.style.display = "inherit";
        sortierer.style.display = "none";
        plain.style.display = "none";
        truck.style.display = "none";
    }else if(iconGewaehlt == 3 || iconGewaehlt == 8){
        transporter.style.display = "none";
        paketdienst.style.display = "none";
        sortierer.style.display = "inherit";
        plain.style.display = "none";
        truck.style.display = "none";
    }else if(iconGewaehlt == 4 || iconGewaehlt == 9){
        transporter.style.display = "none";
        paketdienst.style.display = "none";
        sortierer.style.display = "none";
        plain.style.display = "inherit";
        truck.style.display = "none";
    }else{
        transporter.style.display = "none";
        paketdienst.style.display = "none";
        sortierer.style.display = "none";
        plain.style.display = "none";
        truck.style.display = "inherit";
    }
}

function waehleFarbkombination() {
    var farbnummer = Math.floor(Math.random()* (arrFarbkombinationen.length));
    game.classList.remove("blue100", "teal100", "darkgreen100", "plum100", "sienna100");
    containerstatusbar.classList.remove("blue100", "teal100", "darkgreen100", "plum100", "sienna100");
    containersubmenue.classList.remove("blue100", "teal100", "darkgreen100", "plum100", "sienna100");

    game.classList.add(arrFarbkombinationen[farbnummer][0]);
    containerstatusbar.classList.add(arrFarbkombinationen[farbnummer][1]);
    containersubmenue.classList.add(arrFarbkombinationen[farbnummer][1]);
}

function aktualisiereFragen() {
    wuerfleReihenfolge(arrReihenfolge);
    let aktuelleFrage;
    aktuelleFrage = waehleFrage();
    let aktuellerButton;
    let textlaenge;
    //let aktuelleFrage = 2; //23

    textquestion.innerHTML = arrFragenUndAntworten[aktuelleFrage][0];

    for(var i = 0; i < 4; i++){
        textlaenge = arrFragenUndAntworten[aktuelleFrage][arrReihenfolge[i] + 1].length
        aktuellerButton = document.getElementById("button" + i);
        aktuellerButton.innerHTML = arrFragenUndAntworten[aktuelleFrage][arrReihenfolge[i] + 1];// + " " + textlaenge;
        aktuellerButton.value = arrFragenUndAntworten[aktuelleFrage][arrReihenfolge[i] + 1];// + " " + textlaenge;
        aktuellerButton.style.minWidth = berechneButtonbreite(textlaenge) + "%";
    }


    textresponse.innerHTML = arrFragenUndAntworten[aktuelleFrage][5];
    textcounter.textContent = "Frage " + (runde + 1) + " von " + maxrunden;

    arrFragenUndAntworten.splice(aktuelleFrage, 1);
    runde += 1;
}

function aktualisiereBalken() {
    statusbar0.style.width = berechneBalkenlaenge(arrPunkte[0]) + "%";
    statusbar1.style.width = berechneBalkenlaenge(arrPunkte[1]) + "%";
    statusbar2.style.width = berechneBalkenlaenge(arrPunkte[2]) + "%";
    statusbar3.style.width = berechneBalkenlaenge(arrPunkte[3]) + "%";
}

function berechneBalkenlaenge(punkte) {
    return Math.round(100 / maxrunden * punkte);
}

function berechneButtonbreite(_textlaenge) {
    let breite;
    /*
    if(_textlaenge >= 25) {
        breite = Math.floor(Math.random()*10) + 75;
    }else if(_textlaenge >= 20){
        breite = Math.floor(Math.random()*15) + 70;
    }else if(_textlaenge >= 15){
        breite = Math.floor(Math.random()*30) + 55;
    }else if(_textlaenge >= 10){
        breite = Math.floor(Math.random()*35) + 40;
    }else{
        breite = Math.floor(Math.random()*20) + 35;
    }*/

     if(_textlaenge >= 25) {
        breite = Math.floor(Math.random()*10) + 75;
    }else if(_textlaenge >= 20){
        breite = Math.floor(Math.random()*10) + 75;
    }else if(_textlaenge >= 15){
        breite = Math.floor(Math.random()*10) + 75;
    }else if(_textlaenge >= 10){
        breite = Math.floor(Math.random()*10) + 75;
    }else{
        breite = Math.floor(Math.random()*10) + 75;
    }



    return breite;
}

function wuerfleReihenfolge(arrR) {
    let counter = arrR.length;

    // While there are elements in the array
    while (counter > 0) {
        // Pick a random index
        let index = Math.floor(Math.random() * counter);

        // Decrease counter by 1
        counter--;

        // And swap the last element with it
        let temp = arrR[counter];
        arrR[counter] = arrR[index];
        arrR[index] = temp;
    }

    return arrR;
}

function geklickt(evt) {
    var targetId = evt.target.id;

    switch(targetId) {
        case "buttonstart":
            toggleContainer("containerintro");
            break;

        case "buttonintro":
            toggleContainer("containerquestions");
            break;

        case "button0":
            werteAuswahl(arrReihenfolge[0]);
            break;

        case "button1":
            werteAuswahl(arrReihenfolge[1]);
            break;

        case "button2":
            werteAuswahl(arrReihenfolge[2]);
            break;

        case "button3":
            werteAuswahl(arrReihenfolge[3]);
            break;

        case "buttonresponse":
            toggleContainer("containerquestions");
            break;

        case "buttonresponse2":
            toggleContainer("containerresult");
            break;

        case "buttonend":
            toggleContainer("containerresult");
            break;

        case "buttonneustart":
            starteNeu();
            break;

        case "buttonneustart2":
            starteNeu();
            break;

        case "buttonexit":
            toggleContainer("containerexit");
            break;

        case "buttonjobs":
            window.open("https://www.jobs-ups.de");
            break;
    }
}

function werteAuswahl(_auswahl) {

    arrPunkte[_auswahl] = arrPunkte[_auswahl] + 1;

    aktualisiereBalken();
    toggleContainer("containerresponse");
}

function openurlSalesExec() {
    window.open("https://www.jobs-ups.de/berufsfeld/inside-sales-jobs/20476/55150/1");
}

function openurlSalesTrainee() {
    window.open("https://www.jobs-ups.de/berufsfeld/sales-trainee-jobs/20476/66681/1");
}

function openurlAusbildungFachkraft() {
    window.open("https://www.jobs-ups.de/berufsfeld/kep-ausbildung-jobs/20476/58105/1");
}

function openurlAusbildungKaufmann() {
    window.open("https://www.jobs-ups.de/berufsfeld/kaufmannische-ausbildung-jobs/20476/66806/1");
}

function openurlOperationsTrainee() {
    window.open("https://www.jobs-ups.de/berufsfeld/traineeprogramme-im-bereich-operations-jobs/20476/56062/1");
}

function openurlAusbildungKfz() {
    window.open("https://www.jobs-ups.de/berufsfeld/Kfz-Ausbildung-jobs/20476/66678/1");
}

function werteErgebnis() {
    //arrPunkte = [0,0,8,0];

    var valKontakt = arrPunkte[0];
    var valOrga = arrPunkte[1];
    var valFitness = arrPunkte[2];
    var valAnalytisch = arrPunkte[3];

    var arrPunkteCopy = arrPunkte.slice().sort();
    var wertDoppelt = (arrPunkteCopy[1] == arrPunkteCopy[2]);

    // Kontaktfreudigkeit = 0, Organisationstalent = 1, Fitness = 2, Analytisches Denken = 3

    if (valKontakt > valFitness &&
        valKontakt > valAnalytisch &&
        valOrga > valFitness &&
        valOrga > valAnalytisch){
        // Kontaktfreudigkeit (0) + Organisationstalent (1)
        textresult.innerHTML =  "<h3 class='game bounce animated'>… und hier sind die Ergebnisse!</h3>" +
                                "<p class='game game-small fadein animated2'>Du bist der kommunikative Typ mit Hang zum Organisationtalent samt Durchblick.<br/>Diese Einstiegsjobs bei UPS könnten zu dir passen:</p>" +

                                "<p class='game game-small fadein animated4'>Für den Direkteinstieg<br/>" +
                                "<button class='button-action button-action-small' onclick='openurlSalesExec()'>Inside Sales Executive</button></p>" +

                                "<p class='game game-small fadein animated5'>Für unser Traineeprogramm<br/>" +
                                "<button class='button-action button-action-small' onclick='openurlSalesTrainee()'>Sales Trainee</button></p>";

    } else if (valKontakt > valOrga &&
               valKontakt > valAnalytisch &&
               valFitness > valOrga &&
               valFitness > valAnalytisch) {
        // Kontaktfreudigkeit (0) + Fitness (2)
        textresult.innerHTML =  "<h3 class='game bounce animated'>… und hier sind die Ergebnisse!</h3>" +
                                "<p class='game fadein animated2'>Du hast eine positive Grundeinstellung, Anpacker-Mentalität und Spaß bei der der Arbeit mit Menschen.</p>" +

                                "<p class='game fadein animated3'>Dieser Einstiegsjob bei UPS könnte zu dir passen:</p>" +
                                "<button class='button-action fadein animated4' onclick='openurlAusbildungFachkraft()'>Ausbildung zur Fachkraft für Kurier-, Express- und Postdienstleistungen</button>";

    } else if (valKontakt > valOrga &&
               valKontakt > valFitness &&
               valAnalytisch > valOrga &&
               valAnalytisch > valFitness) {
        // Kontaktfreudigkeit (0) + Analytisches Denken (3)
        textresult.innerHTML =  "<h3 class='game bounce animated'>… und hier sind die Ergebnisse!</h3>" +
                                "<p class='game fadein animated2'>Du gehst kommunikativ auf Menschen zu und behältst in jeder Situation den Überblick über das „große Ganze“.</p>" +

                                "<p class='game fadein animated3'>Dieser Einstiegsjob bei UPS könnte zu dir passen:</p>" +
                                "<button class='button-action fadein animated4' onclick='openurlAusbildungKaufmann()'>Ausbildung Kaufmann/-frau für Spedition und Logistikdienstleistung</button>";

    } else if(valFitness > valKontakt &&
              valFitness > valAnalytisch &&
              valOrga > valKontakt &&
              valOrga > valAnalytisch) {
        // Fitness (2) + Organisationstalent (1)
        textresult.innerHTML =  "<h3 class='game bounce animated'>… und hier sind die Ergebnisse!</h3>" +
                                "<p class='game fadein animated2'>Du hast jede Menge Durchsetzungsvermögen nebst Führungsambitionen und bist dabei achtsam und wertschätzend; denn du weißt, wo die „Reise“ hingehen soll." +

                                "<p class='game fadein animated3'>Dieser Einstiegsjob bei UPS könnte zu dir passen:</p>" +
                                "<button class='button-action fadein animated4' onclick='openurlOperationsTrainee()'>Operations Trainee</button>";

    } else if(valFitness > valKontakt &&
              valFitness > valOrga &&
              valAnalytisch > valKontakt &&
              valAnalytisch > valOrga) {
        // Fitness (2) + Analytisches Denken (3)
        textresult.innerHTML =  "<h3 class='game bounce animated'>… und hier sind die Ergebnisse!</h3>" +
                                "<p class='game fadein animated2'>Deine körperliche Präsenz wird nur noch von deiner mentalen Stärke übertroffen &ndash; wenn du sprichst, hören alle zu.</p>" +

                                "<p class='game fadein animated3'>Dieser Einstiegsjob bei UPS könnte zu dir passen:</p>" +
                                "<button class='button-action fadein animated4' onclick='openurlOperationsTrainee()'>Operations Trainee</button>";

    } else if(valOrga > valKontakt &&
              valOrga > valFitness &&
              valAnalytisch > valKontakt &&
              valAnalytisch > valFitness) {
        // Organisationstalent (1) + Analytisches Denken (3)
        textresult.innerHTML =  "<h3 class='game bounce animated'>… und hier sind die Ergebnisse!</h3>" +
                                "<p class='game fadein animated2'>Du bist ein waschechtes Technik-Ass mit einer ruhigen Hand und einem Auge fürs Detail.</p>" +

                                "<p class='game fadein animated3'>Dieser Einstiegsjob bei UPS könnte zu dir passen:</p>" +
                                "<button class='button-action fadein animated4' onclick='openurlAusbildungKfz()'>Kfz-Ausbildung</button>";
    } else if(valKontakt == valOrga &&
              valKontakt == valFitness &&
              valKontakt == valAnalytisch) {
        // Kontaktfreudigkeit (0) + Organisationstalent (1) + Fitness (2) + Analytisches Denken (3)
        textresult.innerHTML =  "<h3 class='game bounce animated'>… und hier sind die Ergebnisse!</h3>" +
                                "<p class='game fadein animated2'>Du bist ein multi-taskendes Allroundtalent mit den besten Anlagen, um deine Pläne, Ziele und Wünsche zu verwirklichen.</p>" +

                                "<p class='game fadein animated3'>Dieser Einstiegsjob bei UPS könnte zu dir passen:</p>" +
                                "<button class='button-action fadein animated4' onclick='openurlOperationsTrainee()'>Operations Trainee</button>";
    } else if(valKontakt > valOrga &&
                valKontakt > valFitness &&
                valKontakt > valAnalytisch &&
                wertDoppelt) {
        // Kontaktfreudigkeit (0)
        textresult.innerHTML =  "<h3 class='game bounce animated'>… und hier sind die Ergebnisse!</h3>" +
                                "<p class='game fadein animated2'>Du bist der kommunikative Typ mit Durchblick und Weitblick.</p>" +

                                "<p class='game fadein animated3'>Diese Einstiegsjobs bei UPS könnten zu dir passen:</p>" +
                                "<p class='game game-small fadein animated4'>Für den Direkteinstieg<br/>" +
                                "<button class='button-action button-action-small' onclick='openurlSalesExec()'>Inside Sales Executive</button></p>" +

                                "<p class='game game-small fadein animated5'>Für unser Traineeprogramm<br/>" +
                                "<button class='button-action button-action-small' onclick='openurlSalesTrainee()'>Sales Trainee</button></p>";
    } else if(valFitness > valOrga &&
                valFitness > valKontakt &&
                valFitness > valAnalytisch &&
                wertDoppelt) {
        // valFitness (2)
        textresult.innerHTML =  "<h3 class='game bounce animated'>… und hier sind die Ergebnisse!</h3>" +
                                "<p class='game fadein animated2'>Du hast eine positive Grundeinstellung, Anpacker-Mentalität und Spaß bei der der Arbeit mit Menschen.</p>" +

                                "<p class='game fadein animated3'>Dieser Einstiegsjob bei UPS könnte zu dir passen:</p>" +
                                "<button class='button-action fadein animated4' onclick='openurlAusbildungFachkraft()'>Ausbildung zur Fachkraft für Kurier-, Express- und Postdienstleistungen</button>";
        textresult.innerHTML =  "<h3 class='game bounce animated'>… und hier sind die Ergebnisse!</h3>" +
                                "<p class='game game-small fadein animated2' style='margin-bottom:5px;'>Du hast eine positive Grundeinstellung, Anpacker-Mentalität und Spaß bei der der Arbeit mit Menschen.</p>" +
                                "<p class='game game-small fadein animated2' style='margin-bottom:5px;'>Dieser Einstiegsjob bei UPS könnte zu dir passen:</p>" +
                                "<button class='button-action button-action-small fadein animated4' style='margin-top:0;' onclick='openurlAusbildungFachkraft()'>Ausbildung zur Fachkraft für Kurier-, Express- und Postdienstleistungen</button>" +
                                "<p class='game game-small fadein animated3' style='margin-top:10px;margin-bottom:5px;'>Oder nach Studium respektive Ausbildung:</p>" +
                                "<button class='button-action button-action-small fadein animated4' style='margin-top:0;' onclick='openurlOperationsTrainee()'>Operations Trainee</button>";
    } else if(valOrga > valFitness &&
                valOrga > valKontakt &&
                valOrga > valAnalytisch &&
                wertDoppelt) {
        // valOrga (1)
        textresult.innerHTML =  "<h3 class='game bounce animated'>… und hier sind die Ergebnisse!</h3>" +
                                "<p class='game fadein animated2'>Du hast jede Menge Durchsetzungsvermögen nebst Führungsambitionen und bist dabei achtsam und wertschätzend; denn du weißt, wo die „Reise” hingehen soll.</p>" +

                                "<p class='game fadein animated3'>Dieser Einstiegsjob bei UPS könnte zu dir passen:</p>" +
                                "<button class='button-action fadein animated4' onclick='openurlOperationsTrainee()'>Operations Trainee</button>";
    }  else if(valAnalytisch > valFitness &&
                valAnalytisch > valKontakt &&
                valAnalytisch > valOrga &&
                wertDoppelt) {
        // valAnalytisch (3)
        textresult.innerHTML =  "<h3 class='game bounce animated'>… und hier sind die Ergebnisse!</h3>" +
                                "<p class='game fadein animated2'>Du bist ein waschechtes Technik-Ass mit einer ruhigen Hand und einem Auge fürs Detail.</p>" +

                                "<p class='game fadein animated3'>Dieser Einstiegsjob bei UPS könnte zu dir passen:</p>" +
                                "<button class='button-action fadein animated4' onclick='openurlAusbildungKfz()'>Kfz-Ausbildung</button>";
    } else {
        textresult.innerHTML =  "<h3 class='game fadein animated'>… und hier sind die Ergebnisse!</h3>" +

                                "<p class='game fadein animated3'>Du bist ein waschechtes Technik-Ass mit einer ruhigen Hand und einem Auge fürs Detail.</p>" +
                                "<button class='button-action fadein animated4' onclick='openurlAusbildungKfz()'>Kfz-Ausbildung</button>";
    }

}


function toggleContainer(_containername) {

    switch(_containername) {

        case "containerstart":
            verwaltelayer("none", "none", "block", "none", "none", "none", "none", "none", "none", "none", "none");

            game.classList.add("blue100");
            break;

        case "containerintro":
            verwaltelayer("block", "none", "none", "block", "none", "none", "none", "none", "none", "none", "none");
            removeQuestionmarks();
            flashGamecontainer();
            break;

        case "containerquestions":
            aktualisiereFragen();
            aktualisiereBalken();
            waehleFarbkombination();

            verwaltelayer("block", "flex", "none", "none", "block", "none", "none", "none", "flex", "flex","none");

            var classes = []

            containerquestions.classList.add("animate46to66");
            containerquestions.classList.add("animated");

            containerstatusbar.classList.remove("animate16to36");
            containerstatusbar.classList.add("animate36to16");
            containerstatusbar.classList.add("animated");

            textquestion.classList.add("bounce2");
            textquestion.classList.add("animated");
            button0.classList.add("fadein");
            button0.classList.add("animated2");
            button1.classList.add("fadein");
            button1.classList.add("animated3");
            button2.classList.add("fadein");
            button2.classList.add("animated4");
            button3.classList.add("fadein");
            button3.classList.add("animated5");

            flashGamecontainer();
            addQuestionmarks();

            break;

        case "containerresponse":
            verwaltelayer("block", "flex", "none", "none", "none", "flex", "none", "none", "flex", "flex","none");

            waehleFarbkombination();
            waehleResponseIcon();

            containerresponse.classList.add("animate66to46");
            containerresponse.classList.add("animated");

            containerstatusbar.classList.remove("animate36to16new");
            containerstatusbar.classList.remove("animate36to16");
            containerstatusbar.classList.add("animate16to36");
            containerstatusbar.classList.add("animated");

            textresponse.classList.add("bounce");
            textresponse.classList.add("animated");

            //buttonresponse.classList.add("fadein");
            //buttonresponse.classList.add("animated2");

            flashGamecontainer();
            removeQuestionmarks();

            if(runde < maxrunden) {
                buttonresponse.style.display = "block";
                textresponse2.style.display = "none";
                buttonresponse2.style.display = "none";
            } else{
                buttonresponse.style.display = "none";
                buttonresponse2.style.display = "block";
                textresponse2.style.display = "block";
            }

            break;

        case "containerend":
            verwaltelayer("block", "flex", "none", "none", "none", "none", "flex", "none", "flex", "flex","none");

            waehleFarbkombination();
            removeQuestionmarks();

            textend.classList.add("bounce");
            textend.classList.add("animated");

            buttonend.classList.add("fadein");
            buttonend.classList.add("animated2");

            break;

        case "containerresult":
            werteErgebnis();


            verwaltelayer("block", "none", "none", "none", "none", "none", "none", "block", "flex", "flex", "none");

            waehleFarbkombination();


            containerstatusbar.classList.remove("animate16to36");
            containerstatusbar.classList.remove("animate36to16");
            containerstatusbar.classList.remove("animated");



            containerresult.classList.add("animate51to71");
            containerresult.classList.add("animated");
            containerstatusbar.classList.add("animate36to16");
            containerstatusbar.classList.add("animated");
            flashGamecontainer();
            break;

        case "containerexit":
            waehleFarbkombination();

            verwaltelayer("block", "none", "none", "none", "none", "none", "none","none", "none", "none", "block");

            break;

    }
}

function addQuestionmarks(){
    game.classList.add("questionmark" + numberQuestionmark);

    numberQuestionmark += 1;
    if(numberQuestionmark > 6) {
        numberQuestionmark = 1;
    }
}

function removeQuestionmarks() {
    game.classList.remove("questionmark1");
    game.classList.remove("questionmark2");
    game.classList.remove("questionmark3");
    game.classList.remove("questionmark4");
    game.classList.remove("questionmark5");
    game.classList.remove("questionmark6");
    game.classList.remove("questionmark7");
}

function flashGamecontainer(){
    game.classList.remove("animateOpacity");
    game.classList.remove("animated");
    void game.offsetWidth;
    game.classList.add("animateOpacity");
    game.classList.add("animated");
}


/**
* @param {string} _title        switch container title on and off
* @param {string} _textcounter  switch container textcounter on and off
* @param {string}  _start       switch container start on and off
* @param {string} _intro        switch container intro on and off
* @param {string} _questions    switch container questions on and off
* @param {string} _response     switch container response on and off
* @param {string} _end          switch container end on and off
* @param {string} _result       switch container result on and off
* @param {string} _statusbar    switch container statusbar on and off
* @param {string} _submenue     switch container submenue on and off
* @param {string} _exit         switch container exit on and off
**/

function verwaltelayer(_title, _textcounter, _start, _intro, _questions, _response, _end, _result, _statusbar, _submenue, _exit) {

    containertitle.style.display = _title;
    containertextcounter.style.display = _textcounter;
    containerstart.style.display = _start;
    containerintro.style.display = _intro;
    containerquestions.style.display = _questions;
    containerresponse.style.display = _response;
    containerend.style.display = _end;
    containerresult.style.display = _result;
    containerstatusbar.style.display = _statusbar;
    containersubmenue.style.display = _submenue;
    containerexit.style.display = _exit;
}

function hoechsteZahl(_arr) {
    if (_arr.length === 0) {
        return -1;
    }

    var max = _arr[0];
    var maxIndex = 0;

    for (var i = 1; i < _arr.length; i++) {
        if (_arr[i] > max) {
            maxIndex = i;
            max = _arr[i];
        }
    }

    return maxIndex;
}
