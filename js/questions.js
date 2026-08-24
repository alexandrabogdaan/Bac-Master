const questions = [

    // =====================
    // ALGORITMI
    // =====================

    {
        id: 1,
        category: "algoritmi",
        difficulty: "easy",
        question: "Care structură repetă un bloc de instrucțiuni un număr cunoscut de ori?",
        answers: [
            "if",
            "switch",
            "for",
            "break"
        ],
        correct: 2
    },

    {
        id: 2,
        category: "algoritmi",
        difficulty: "easy",
        question: "Instrucțiunea if este utilizată pentru:",
        answers: [
            "sortare",
            "decizie",
            "citirea datelor",
            "afișarea datelor"
        ],
        correct: 1
    },

    {
        id: 3,
        category: "algoritmi",
        difficulty: "medium",
        question: "Complexitatea unui algoritm de căutare liniară este:",
        answers: [
            "O(1)",
            "O(log n)",
            "O(n)",
            "O(n²)"
        ],
        correct: 2
    },

    // =====================
    // VECTORI
    // =====================

    {
        id: 4,
        category: "vectori",
        difficulty: "easy",
        question: "În C++, primul element al unui vector are indicele:",
        answers: [
            "1",
            "0",
            "-1",
            "depinde de compilator"
        ],
        correct: 1
    },

    {
        id: 5,
        category: "vectori",
        difficulty: "easy",
        question: "Pentru a parcurge toate elementele unui vector folosim cel mai des:",
        answers: [
            "for",
            "goto",
            "switch",
            "typedef"
        ],
        correct: 0
    },

    {
        id: 6,
        category: "vectori",
        difficulty: "medium",
        question: "Câte comparații face în cel mai rău caz căutarea liniară într-un vector cu n elemente?",
        answers: [
            "1",
            "n",
            "log n",
            "n²"
        ],
        correct: 1
    },

    // =====================
    // MATRICE
    // =====================

    {
        id: 7,
        category: "matrice",
        difficulty: "easy",
        question: "O matrice este:",
        answers: [
            "un șir de caractere",
            "o colecție bidimensională de date",
            "o funcție",
            "un tip boolean"
        ],
        correct: 1
    },

    {
        id: 8,
        category: "matrice",
        difficulty: "medium",
        question: "Elementul de pe diagonala principală are proprietatea:",
        answers: [
            "i + j = n",
            "i = j",
            "i > j",
            "i < j"
        ],
        correct: 1
    },

    // =====================
    // SUBPROGRAME
    // =====================

    {
        id: 9,
        category: "subprograme",
        difficulty: "easy",
        question: "O funcție poate returna:",
        answers: [
            "o valoare",
            "mai multe valori simultan",
            "doar caractere",
            "nimic"
        ],
        correct: 0
    },

    {
        id: 10,
        category: "subprograme",
        difficulty: "medium",
        question: "Parametrii unei funcții sunt utilizați pentru:",
        answers: [
            "transmiterea datelor",
            "afișarea rezultatelor",
            "compilare",
            "comentarii"
        ],
        correct: 0
    },

    // =====================
    // RECURSIVITATE
    // =====================

    {
        id: 11,
        category: "recursivitate",
        difficulty: "medium",
        question: "O funcție recursivă este o funcție care:",
        answers: [
            "apelează alt program",
            "apelează ea însăși",
            "nu primește parametri",
            "nu returnează valori"
        ],
        correct: 1
    },

    {
        id: 12,
        category: "recursivitate",
        difficulty: "medium",
        question: "Pentru funcțiile recursive este obligatoriu să existe:",
        answers: [
            "o variabilă globală",
            "o condiție de oprire",
            "un vector",
            "o matrice"
        ],
        correct: 1
    },

    // =====================
    // GRAFURI
    // =====================

    {
        id: 13,
        category: "grafuri",
        difficulty: "easy",
        question: "Un graf complet cu 5 noduri are:",
        answers: [
            "10 muchii",
            "5 muchii",
            "15 muchii",
            "20 muchii"
        ],
        correct: 0
    },

    {
        id: 14,
        category: "grafuri",
        difficulty: "medium",
        question: "Un arbore cu n noduri are:",
        answers: [
            "n muchii",
            "n-1 muchii",
            "n+1 muchii",
            "2n muchii"
        ],
        correct: 1
    },

    // =====================
    // BACKTRACKING
    // =====================

    {
        id: 15,
        category: "backtracking",
        difficulty: "hard",
        question: "Metoda backtracking este utilizată pentru:",
        answers: [
            "căutarea soluțiilor prin încercări succesive",
            "sortare",
            "compresie",
            "criptare"
        ],
        correct: 0
    },

    // =====================
    // BAC STYLE
    // =====================

    {
        id: 16,
        category: "bac",
        difficulty: "easy",
        question: "Operatorul % din C++ returnează:",
        answers: [
            "câtul",
            "restul împărțirii",
            "puterea",
            "valoarea absolută"
        ],
        correct: 1
    },

    {
        id: 17,
        category: "bac",
        difficulty: "easy",
        question: "Ce tip de date este folosit pentru valori adevărat/fals?",
        answers: [
            "char",
            "float",
            "bool",
            "string"
        ],
        correct: 2
    },

    {
        id: 18,
        category: "bac",
        difficulty: "medium",
        question: "Instrucțiunea break are rolul de a:",
        answers: [
            "opri o structură repetitivă",
            "crea o funcție",
            "declara o variabilă",
            "sorta un vector"
        ],
        correct: 0
    },

    {
        id: 19,
        category: "bac",
        difficulty: "medium",
        question: "Care dintre următoarele este o structură repetitivă?",
        answers: [
            "if",
            "for",
            "switch",
            "case"
        ],
        correct: 1
    },

    {
        id: 20,
        category: "bac",
        difficulty: "hard",
        question: "Complexitatea Bubble Sort în cel mai rău caz este:",
        answers: [
            "O(n)",
            "O(log n)",
            "O(n²)",
            "O(1)"
        ],
        correct: 2
    },

    // =====================
    // INTREBARI NOI - ALGORITMI
    // =====================
    {
        id: 21, category: "algoritmi", difficulty: "easy",
        question: "Ce instrucțiune oprește imediat execuția unei bucle?",
        answers: ["continue", "break", "return 0", "switch"], correct: 1
    },
    {
        id: 22, category: "algoritmi", difficulty: "easy",
        question: "Ce instrucțiune sare la iterația următoare a unei bucle?",
        answers: ["continue", "break", "goto", "case"], correct: 0
    },
    {
        id: 23, category: "algoritmi", difficulty: "easy",
        question: "Care este rezultatul expresiei 17 % 5?",
        answers: ["2", "3", "5", "12"], correct: 0
    },
    {
        id: 24, category: "algoritmi", difficulty: "medium",
        question: "Ce valoare are variabila x după executarea x = 3 * 4 + 2?",
        answers: ["14", "18", "20", "24"], correct: 0
    },
    {
        id: 25, category: "algoritmi", difficulty: "medium",
        question: "Algoritmul lui Euclid determină în mod obișnuit:",
        answers: ["cel mai mic multiplu comun", "cel mai mare divizor comun", "suma cifrelor", "numărul de cifre"], correct: 1
    },
    {
        id: 26, category: "algoritmi", difficulty: "easy",
        question: "Ce operator logic reprezintă disjuncția în C++?",
        answers: ["&&", "||", "!", "=="], correct: 1
    },
    {
        id: 27, category: "algoritmi", difficulty: "medium",
        question: "Câte execuții are bucla for(i=0; i<5; i++)?",
        answers: ["4", "5", "6", "depinde de i"], correct: 1
    },
    {
        id: 28, category: "algoritmi", difficulty: "easy",
        question: "Ce structură este potrivită pentru alegerea între cazuri discrete?",
        answers: ["while", "switch", "for", "do-while"], correct: 1
    },
    {
        id: 29, category: "algoritmi", difficulty: "medium",
        question: "Ce proprietate trebuie să aibă un algoritm pentru a se opri?",
        answers: ["finitudine", "aleatorietate", "recursivitate", "sortare"], correct: 0
    },
    {
        id: 30, category: "algoritmi", difficulty: "medium",
        question: "Care este valoarea lui 2 la puterea 5?",
        answers: ["10", "16", "25", "32"], correct: 3
    },

    // =====================
    // INTREBARI NOI - VECTORI
    // =====================
    {
        id: 31, category: "vectori", difficulty: "easy",
        question: "Un vector cu n elemente indexat de la 0 are ultimul indice:",
        answers: ["n", "n-1", "n+1", "0"], correct: 1
    },
    {
        id: 32, category: "vectori", difficulty: "easy",
        question: "Ce algoritm este potrivit pentru găsirea maximului într-un vector nesortat?",
        answers: ["parcurgere liniară", "căutare binară", "interschimbare directă", "recursivitate obligatorie"], correct: 0
    },
    {
        id: 33, category: "vectori", difficulty: "medium",
        question: "Câte elemente are vectorul declarat int v[8]?",
        answers: ["7", "8", "9", "depinde de compilator"], correct: 1
    },
    {
        id: 34, category: "vectori", difficulty: "easy",
        question: "Ce operație interschimbă valorile a două variabile?",
        answers: ["swap", "split", "merge", "append"], correct: 0
    },
    {
        id: 35, category: "vectori", difficulty: "medium",
        question: "Pentru a calcula suma elementelor unui vector folosim de obicei:",
        answers: ["un contor inițializat cu 0", "un contor inițializat cu -1", "doar valoarea maximă", "operatorul modulo"], correct: 0
    },
    {
        id: 36, category: "vectori", difficulty: "medium",
        question: "Un vector este sortat crescător dacă fiecare element este:",
        answers: ["mai mic decât următorul", "mai mare decât următorul", "egal cu primul", "negativ"], correct: 0
    },
    {
        id: 37, category: "vectori", difficulty: "easy",
        question: "Care este valoarea lui v[0] după int v[3]={4,7,2};?",
        answers: ["0", "2", "4", "7"], correct: 2
    },
    {
        id: 38, category: "vectori", difficulty: "medium",
        question: "Căutarea binară se aplică unui vector:",
        answers: ["nesortat", "sortat", "gol obligatoriu", "cu elemente distincte obligatoriu"], correct: 1
    },
    {
        id: 39, category: "vectori", difficulty: "easy",
        question: "Pentru a număra elementele pare verificăm condiția:",
        answers: ["x%2==0", "x/2==0", "x%2==1", "x*2==0"], correct: 0
    },
    {
        id: 40, category: "vectori", difficulty: "medium",
        question: "Inversarea unui vector în aceeași zonă de memorie folosește:",
        answers: ["interschimbări între capete", "doar sortare", "căutare binară", "un al doilea vector obligatoriu"], correct: 0
    },

    // =====================
    // INTREBARI NOI - MATRICE
    // =====================
    {
        id: 41, category: "matrice", difficulty: "easy",
        question: "O matrice cu 3 linii și 4 coloane are câte elemente?",
        answers: ["7", "12", "16", "24"], correct: 1
    },
    {
        id: 42, category: "matrice", difficulty: "easy",
        question: "Într-o matrice, primul indice indică de regulă:",
        answers: ["coloana", "linia", "valoarea", "dimensiunea"], correct: 1
    },
    {
        id: 43, category: "matrice", difficulty: "medium",
        question: "Elementele diagonalei principale au proprietatea:",
        answers: ["i==j", "i+j==n", "i<j", "i>j"], correct: 0
    },
    {
        id: 44, category: "matrice", difficulty: "medium",
        question: "Elementele de sub diagonala principală satisfac condiția:",
        answers: ["i<j", "i==j", "i>j", "i+j==0"], correct: 2
    },
    {
        id: 45, category: "matrice", difficulty: "easy",
        question: "Pentru a parcurge toate elementele unei matrice folosim:",
        answers: ["o singură instrucțiune if", "două bucle imbricate", "doar switch", "o căutare binară"], correct: 1
    },
    {
        id: 46, category: "matrice", difficulty: "medium",
        question: "Suma elementelor de pe fiecare linie se calculează resetând suma:",
        answers: ["la începutul fiecărei linii", "doar la final", "după fiecare element", "niciodată"], correct: 0
    },
    {
        id: 47, category: "matrice", difficulty: "easy",
        question: "O matrice pătratică are:",
        answers: ["număr egal de linii și coloane", "o singură linie", "doar elemente pare", "număr diferit de linii și coloane"], correct: 0
    },
    {
        id: 48, category: "matrice", difficulty: "medium",
        question: "Transpusa unei matrice obține elementul b[i][j] din:",
        answers: ["a[i][j]", "a[j][i]", "a[i+1][j]", "a[i][j+1]"], correct: 1
    },
    {
        id: 49, category: "matrice", difficulty: "medium",
        question: "Diagonala secundară a unei matrice n x n are, indexată de la 0, condiția:",
        answers: ["i==j", "i+j==n-1", "i+j==n", "i<j"], correct: 1
    },
    {
        id: 50, category: "matrice", difficulty: "easy",
        question: "Declarația int a[2][5] rezervă spațiu pentru:",
        answers: ["2 elemente", "5 elemente", "7 elemente", "10 elemente"], correct: 3
    },

    // =====================
    // INTREBARI NOI - SUBPROGRAME
    // =====================
    {
        id: 51, category: "subprograme", difficulty: "easy",
        question: "Un subprogram care returnează o valoare trebuie să conțină:",
        answers: ["return", "break", "continue", "switch"], correct: 0
    },
    {
        id: 52, category: "subprograme", difficulty: "easy",
        question: "Cum se numește subprogramul care nu returnează o valoare?",
        answers: ["void", "null", "empty", "procedure int"], correct: 0
    },
    {
        id: 53, category: "subprograme", difficulty: "medium",
        question: "Variabilele declarate în interiorul unei funcții sunt de regulă:",
        answers: ["locale", "globale", "constante obligatoriu", "publice automat"], correct: 0
    },
    {
        id: 54, category: "subprograme", difficulty: "medium",
        question: "Transmiterea prin valoare modifică direct variabila:",
        answers: ["originală din funcția apelantă", "copiată în funcția apelată", "globală obligatoriu", "din fișier"], correct: 1
    },
    {
        id: 55, category: "subprograme", difficulty: "easy",
        question: "Apelul unei funcții înseamnă:",
        answers: ["executarea corpului ei", "ștergerea ei", "declararea unui vector", "oprirea programului"], correct: 0
    },
    {
        id: 56, category: "subprograme", difficulty: "medium",
        question: "Un parametru formal apare în:",
        answers: ["definiția funcției", "doar în comentarii", "numai în main", "fișierul de ieșire"], correct: 0
    },
    {
        id: 57, category: "subprograme", difficulty: "easy",
        question: "Funcția principală a unui program C++ este:",
        answers: ["start", "main", "run", "begin"], correct: 1
    },
    {
        id: 58, category: "subprograme", difficulty: "medium",
        question: "Supraîncărcarea funcțiilor permite existența mai multor funcții cu același nume, dar:",
        answers: ["parametri diferiți", "același corp obligatoriu", "fără parametri", "doar tip void"], correct: 0
    },
    {
        id: 59, category: "subprograme", difficulty: "easy",
        question: "Un prototip de funcție descrie în principal:",
        answers: ["tipul, numele și parametrii", "doar comentariul", "valoarea unei matrice", "conținutul fișierului"], correct: 0
    },
    {
        id: 60, category: "subprograme", difficulty: "medium",
        question: "O referință în C++ se declară folosind simbolul:",
        answers: ["&", "@", "#", "%"], correct: 0
    },

    // =====================
    // INTREBARI NOI - RECURSIVITATE
    // =====================
    {
        id: 61, category: "recursivitate", difficulty: "easy",
        question: "O funcție recursivă se apelează:",
        answers: ["pe ea însăși", "doar din main", "niciodată", "doar prin pointer"], correct: 0
    },
    {
        id: 62, category: "recursivitate", difficulty: "easy",
        question: "Cazul de bază are rolul de a:",
        answers: ["opri recursivitatea", "crește n", "sorta datele", "declara funcția"], correct: 0
    },
    {
        id: 63, category: "recursivitate", difficulty: "medium",
        question: "Factorialul lui 0 este definit ca fiind:",
        answers: ["0", "1", "-1", "n"], correct: 1
    },
    {
        id: 64, category: "recursivitate", difficulty: "easy",
        question: "factorial(4) are valoarea:",
        answers: ["8", "12", "16", "24"], correct: 3
    },
    {
        id: 65, category: "recursivitate", difficulty: "medium",
        question: "La fiecare apel recursiv, problema trebuie de obicei să devină:",
        answers: ["mai mică", "mai mare", "aleatoare", "neschimbată"], correct: 0
    },
    {
        id: 66, category: "recursivitate", difficulty: "medium",
        question: "Apelurile recursive sunt memorate în:",
        answers: ["stivă", "coadă de imprimare", "fișier", "registru grafic"], correct: 0
    },
    {
        id: 67, category: "recursivitate", difficulty: "easy",
        question: "Fibonacci începe uzual cu valorile:",
        answers: ["0 și 1", "1 și 2", "2 și 3", "0 și 0"], correct: 0
    },
    {
        id: 68, category: "recursivitate", difficulty: "medium",
        question: "Recursivitatea fără caz de bază poate produce:",
        answers: ["apeluri infinite", "sortare automată", "memorie nelimitată disponibilă", "un rezultat constant"], correct: 0
    },
    {
        id: 69, category: "recursivitate", difficulty: "medium",
        question: "Suma primelor n numere naturale poate fi definită recursiv prin:",
        answers: ["s(n)=s(n-1)+n", "s(n)=s(n)+1", "s(n)=n-1", "s(n)=0 pentru orice n"], correct: 0
    },
    {
        id: 70, category: "recursivitate", difficulty: "hard",
        question: "Turnurile din Hanoi cu n discuri au numărul minim de mutări:",
        answers: ["n", "2n", "2^n-1", "n^2"], correct: 2
    },

    // =====================
    // INTREBARI NOI - GRAFURI
    // =====================
    {
        id: 71, category: "grafuri", difficulty: "easy",
        question: "Un graf este format din:",
        answers: ["vârfuri și muchii", "linii și coloane", "funcții și clase", "doar numere"], correct: 0
    },
    {
        id: 72, category: "grafuri", difficulty: "easy",
        question: "O muchie leagă de regulă:",
        answers: ["două vârfuri", "două grafuri obligatoriu", "două matrice", "un fișier și un vector"], correct: 0
    },
    {
        id: 73, category: "grafuri", difficulty: "medium",
        question: "Un graf fără cicluri și conex se numește:",
        answers: ["arbore", "graf complet", "graf nul", "graf orientat"], correct: 0
    },
    {
        id: 74, category: "grafuri", difficulty: "easy",
        question: "Gradul unui vârf este numărul de:",
        answers: ["muchii incidente", "vârfuri totale", "componente", "cicluri obligatorii"], correct: 0
    },
    {
        id: 75, category: "grafuri", difficulty: "medium",
        question: "Un graf complet cu n vârfuri are câte muchii neorientate?",
        answers: ["n", "n-1", "n(n-1)/2", "n^2"], correct: 2
    },
    {
        id: 76, category: "grafuri", difficulty: "easy",
        question: "Într-un graf orientat, muchiile se mai numesc:",
        answers: ["arce", "diagonale", "ramuri", "indici"], correct: 0
    },
    {
        id: 77, category: "grafuri", difficulty: "medium",
        question: "Parcurgerea BFS folosește în principal o:",
        answers: ["coadă", "stivă", "matrice diagonală", "recursivitate obligatorie"], correct: 0
    },
    {
        id: 78, category: "grafuri", difficulty: "medium",
        question: "Parcurgerea DFS folosește în principal o:",
        answers: ["coadă", "stivă", "listă sortată", "structură de fișiere"], correct: 1
    },
    {
        id: 79, category: "grafuri", difficulty: "easy",
        question: "Două vârfuri sunt adiacente dacă:",
        answers: ["sunt unite printr-o muchie", "au același grad", "au aceeași etichetă", "sunt în grafuri diferite"], correct: 0
    },
    {
        id: 80, category: "grafuri", difficulty: "medium",
        question: "Un drum care începe și se termină în același vârf este:",
        answers: ["ciclu", "lanț simplu", "arbore", "componentă"], correct: 0
    },

    // =====================
    // INTREBARI NOI - BACKTRACKING
    // =====================
    {
        id: 81, category: "backtracking", difficulty: "easy",
        question: "Backtracking construiește soluția:",
        answers: ["pas cu pas", "doar la final", "prin sortare", "fără verificări"], correct: 0
    },
    {
        id: 82, category: "backtracking", difficulty: "medium",
        question: "O soluție parțială este abandonată când:",
        answers: ["nu mai poate fi extinsă valid", "este prima găsită", "are un singur element", "este deja sortată"], correct: 0
    },
    {
        id: 83, category: "backtracking", difficulty: "easy",
        question: "Revenirea la nivelul anterior se numește:",
        answers: ["backtrack", "compile", "merge", "hash"], correct: 0
    },
    {
        id: 84, category: "backtracking", difficulty: "medium",
        question: "Pentru permutări, la fiecare poziție alegem de obicei un element:",
        answers: ["nefolosit", "mereu primul", "negativ", "din afara mulțimii"], correct: 0
    },
    {
        id: 85, category: "backtracking", difficulty: "medium",
        question: "Problema reginelor cere plasarea reginelor astfel încât să nu se atace pe:",
        answers: ["linii, coloane și diagonale", "doar linii", "doar coloane", "doar o diagonală"], correct: 0
    },
    {
        id: 86, category: "backtracking", difficulty: "easy",
        question: "Backtracking poate genera toate:",
        answers: ["submulțimile", "doar numerele prime", "doar grafurile", "variabilele globale"], correct: 0
    },
    {
        id: 87, category: "backtracking", difficulty: "medium",
        question: "Verificarea condițiilor în timpul construirii soluției se numește:",
        answers: ["validare", "compilare", "inițializare", "declarare"], correct: 0
    },
    {
        id: 88, category: "backtracking", difficulty: "hard",
        question: "Numărul permutărilor a n elemente distincte este:",
        answers: ["n", "2^n", "n!", "n^2"], correct: 2
    },
    {
        id: 89, category: "backtracking", difficulty: "medium",
        question: "Într-un algoritm de backtracking, vectorul de soluție reține:",
        answers: ["alegerile curente", "doar rezultatul final", "numărul de fișiere", "codul compilat"], correct: 0
    },
    {
        id: 90, category: "backtracking", difficulty: "hard",
        question: "În cazul cel mai defavorabil, backtrackingul poate avea complexitate:",
        answers: ["exponențială", "constantă mereu", "liniară mereu", "zero"], correct: 0
    },

    // =====================
    // INTREBARI NOI - BAC
    // =====================
    {
        id: 91, category: "bac", difficulty: "easy",
        question: "Ce tip memorează un singur caracter?",
        answers: ["char", "int", "bool", "double"], correct: 0
    },
    {
        id: 92, category: "bac", difficulty: "easy",
        question: "Ce operator testează egalitatea în C++?",
        answers: ["=", "==", "!=", "<="], correct: 1
    },
    {
        id: 93, category: "bac", difficulty: "medium",
        question: "Ce valoare are 10 / 3 în împărțire întreagă?",
        answers: ["3", "3.33", "1", "0"], correct: 0
    },
    {
        id: 94, category: "bac", difficulty: "easy",
        question: "Ce bibliotecă oferă cout și cin?",
        answers: ["iostream", "cstring", "cmath", "fstream"], correct: 0
    },
    {
        id: 95, category: "bac", difficulty: "medium",
        question: "Pentru scrierea într-un fișier text folosim clasa:",
        answers: ["ifstream", "ofstream", "iostream", "sstream"], correct: 1
    },
    {
        id: 96, category: "bac", difficulty: "easy",
        question: "Caracterul de sfârșit al unui șir C este:",
        answers: ["'\\0'", "'\\n'", "EOF", "'0'"], correct: 0
    },
    {
        id: 97, category: "bac", difficulty: "medium",
        question: "Funcția strlen returnează:",
        answers: ["numărul de caractere fără terminator", "numărul de octeți al pointerului", "primul caracter", "ultimul indice"], correct: 0
    },
    {
        id: 98, category: "bac", difficulty: "easy",
        question: "Operatorul && este adevărat când:",
        answers: ["cel puțin o condiție este adevărată", "ambele condiții sunt adevărate", "ambele sunt false", "nicio condiție nu există"], correct: 1
    },
    {
        id: 99, category: "bac", difficulty: "medium",
        question: "Ce funcție calculează rădăcina pătrată?",
        answers: ["pow", "sqrt", "abs", "root"], correct: 1
    },
    {
        id: 100, category: "bac", difficulty: "medium",
        question: "Care este complexitatea unei bucle care parcurge n elemente o singură dată?",
        answers: ["O(1)", "O(log n)", "O(n)", "O(n²)"], correct: 2
    }

];