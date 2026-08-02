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
    }

];