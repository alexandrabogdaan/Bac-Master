const quotes = [
    "Succesul este rezultatul pregătirii zilnice.",
    "BAC-ul nu e greu, dacă înveți eficient.",
    "Exercițiul constant bate talentul.",
    "Învață puțin în fiecare zi, nu tot în ultima noapte.",
    "Codul bun este codul înțeles.",
    "Nu memora, înțelege.",
    "Performanța vine din disciplină, nu din noroc.",
    "Greșelile sunt parte din învățare.",
    "Fiecare problemă rezolvată te apropie de 10.",
    "Nu înveți pentru BAC, înveți pentru tine.",
    "Logica este puntea dintre o problemă grea și o rezolvare elegantă.",
    "Nu există algoritmi magici, ci doar gândire clară și structurată.",
    "Atunci când înțelegi de ce-ul, cum-ul devine o simplă formalitate.",
    "Stăpânirea bazelor îți oferă libertatea de a rezolva orice problemă complexă.",
    "Gândirea algoritmică se construiește pas cu pas, nu peste noapte.",
    "Consecvența transformă efortul în obișnuință, iar obișnuința în rezultate.",
    "Cea mai bună investiție în viitorul tău este ora pe care o dedici studiului azi.",
    "Motivația te face să începi, dar disciplina te duce la linia de sosire.",
    "Nu aștepta momentul ideal pentru a învăța; creează-l prin acțiune zilnică.",
    "Un pas mic făcut astăzi este mai valoros decât zece pași amânați pentru mâine.",
    "Un test greșit în pregătire este o lecție câștigată pentru examenul real.",
    "BAC-ul la informatică nu se trece cu noroc, ci cu atenție la detalii și rigoare.",
    "Stresul scade atunci când pregătirea crește.",
    "Răbdarea și atenția la detalii transformă un rezultat bun într-unul de nota 10.",
    "În ziua examenului culegi doar ceea ce ai semănat în fiecare zi de pregătire."
];

const quoteElement = document.getElementById("quote");

function setQuote() {
    const today = new Date().getDate();
    const index = today % quotes.length;

    quoteElement.textContent = quotes[index];
}

setQuote();
