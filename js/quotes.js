const quotes = [
    "Succesul este rezultatul pregătirii zilnice.",
    "BAC-ul nu e greu, dacă îl înveți inteligent.",
    "Exercițiul constant bate talentul.",
    "Învață puțin în fiecare zi, nu tot în ultima noapte.",
    "Codul bun este codul înțeles.",
    "Nu memora, înțelege.",
    "Performanța vine din disciplină, nu din noroc.",
    "Greșelile sunt parte din învățare.",
    "Fiecare problemă rezolvată te apropie de 10.",
    "Nu înveți pentru BAC, înveți pentru tine."
];

const quoteElement = document.getElementById("quote");

function setQuote() {
    const today = new Date().getDate();
    const index = today % quotes.length;

    quoteElement.textContent = quotes[index];
}

setQuote();