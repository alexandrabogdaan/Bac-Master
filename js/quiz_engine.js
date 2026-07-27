
// 1. Baza de date cu întrebările de Subiectul I
const databaseSubiecte = {
    "2025_iunie": [
        {
            enunt: "1. Indicați expresia C/C++ cu aceeaşi valoare ca a expresiei alăturate: <code>2025%2019+6</code>",
            optiuni: [
                "2025/2020+5", 
                "2025/2021+8", 
                "2025%2020+5", 
                "2025%2021+8"
            ],
            corect: 3, // Varianta d (Corectat!)
            explicatie: "Expresia din enunț este: 2025 % 2019 + 6 = 6 + 6 = 12.<br>Să le calculăm pe fiecare:<br>a. 2025 / 2020 + 5 = 1 + 5 = 6<br>b. 2025 / 2021 + 8 = 0 + 8 = 8<br>c. 2025 % 2020 + 5 = 5 + 5 = 10<br>d. 2025 % 2021 + 8 = 4 + 8 = 12. Prin urmare, varianta D oferă exact aceeași valoare."
        },
        {
            enunt: "2. Subprogramul f este definit mai jos. Indicați ce se afișează în urma apelului: <code>f(3);</code><pre>void f(int n)\n{\n  int i;\n  for(i=1;i&lt;=n;i++)\n    if(i%2==0) {\n      cout&lt;&lt;i;\n      f(i-1);\n    }\n    else {\n      f(i-1);\n      cout&lt;&lt;i;\n    }\n}</pre>",
            optiuni: [
                "1211213", 
                "123121", 
                "123", 
                "01201012013"
            ],
            corect: 0, // Varianta a
            explicatie: "Urmărim arborele apelurilor pentru f(3):<br>- i=1 (impar): se apelează f(0) (nu face nimic), apoi se afișează 1.<br>- i=2 (par): se afișează 2, apoi se apelează f(1). Din f(1) se execută bucla pentru i=1, generând afișarea lui 1. Până acum avem pe ecran: 121.<br>- i=3 (impar): se apelează f(2). f(2) execută din nou logica pentru i=1 și i=2, adăugând în istoric textul 121. La sfârșit se tipărește i-ul curent (care este 3).<br>Concatenând toate valorile rezultă: 121 + 121 + 3 = 1211213."
        },
        {
            enunt: "3. Indicați o declarare a unui tablou bidimensional m, care poate memora maximum 100 de numere reale.",
            optiuni: [
                "float m[2,50];", 
                "float m[4][25];", 
                "float m[10] x float m[10];", 
                "int m[100];"
            ],
            corect: 1, // Varianta b
            explicatie: "În C++, matricile se declară folosinf sintaxa: tip nume[linii][coloane]. Varianta b definește o matrice de tip float (numere reale) cu 4 linii și 25 de coloane, ocupând exact 4 * 25 = 100 de spații de memorie. Varianta d alocă tot 100 de valori, dar este un vector simplu de tip int (întregi)."
        },
        {
            enunt: "4. Utilizând metoda backtracking, s-au generat codurile de câte 6 cifre distincte, unde primele trei cifre sunt impare și ultimele trei sunt pare. Primele coduri: 135024, 135026... Indicați penultimul cod generat.",
            optiuni: [
                "957862", 
                "957846", 
                "975862", 
                "975846"
            ],
            corect: 2, // Varianta c
            explicatie: "Ultimele coduri generate vor începe obligatoriu cu cele mai mari cifre impare posibile plasate în ordine strict descrescătoare pe primele 3 poziții: 9, 7, 5. Codul va avea forma 975xxx.<br>Pentru ultimele 3 poziții (cifre pare distincte), cele mai mari valori rămase în ordine lexicografică sunt:<br>...975860<br>...975862 (Penultimul generat)<br>...975864 (Ultimul cod din șir)"
        },
        {
            enunt: "5. Un graf orientat fără circuite are 10 vârfuri. Indicați numărul maxim de arce ale grafului.",
            optiuni: [
                "10", 
                "45", 
                "50", 
                "90"
            ],
            corect: 1, // Varianta b
            explicatie: "Un graf orientat este fără circuite și are număr maxim de arce dacă este un graf turneu orientat (există arc între oricare două vârfuri, însă orientat exclusiv de la nodul mai mic la cel mai mare pentru a preveni circuitele). Numărul maxim de arce posibile se calculează prin formula combinărilor de n luate câte 2: 10 * 9 / 2 = 45."
        }
    ],
    "2025_toamna": [
        {
            enunt: "1. Indicați intervalul căruia îi aparține valoarea memorată în variabila întreagă x, dacă și numai dacă expresia C/C++ alăturată are valoarea 1:<br><code>!(x&lt;=2020) &amp;&amp; !(x&gt;2025)</code>",
            optiuni: [
                "(2020,2025]", 
                "(2020,2025)", 
                "[2020,2025]", 
                "(2021,2025)"
            ],
            corect: 0, // Varianta a
            explicatie: "Evaluăm condițiile:<br>1. <code>!(x &lt;= 2020)</code> devine <code>x &gt; 2020</code> (interval deschis la stânga: (2020, +&infin;))<br>2. <code>!(x &gt; 2025)</code> devine <code>x &lt;= 2025</code> (interval închis la dreapta: (-&infin;, 2025])<br>Intersectând cele două intervale obținem x &isin; (2020, 2025]."
        },
        {
            enunt: "2. Variabila k este de tip întreg, iar variabila s permite memorarea unui șir de maximum 20 de caractere. Indicați valoarea variabilei k în urma executării secvenței alăturate:<pre>strcpy(s,\"calculator\");\nk=strchr(s,s[1])-strchr(s,s[3]);</pre>",
            optiuni: [
                "9", 
                "3", 
                "2", 
                "1"
            ],
            corect: 3, // Varianta d
            explicatie: "În șirul <code>\"calculator\"</code> (indexat de la 0):<br>- <code>s[1]</code> este 'a', iar prima sa apariție în șir se află la adresa <code>s + 1</code>.<br>- <code>s[3]</code> este 'c', iar prima sa apariție se află chiar la începutul șirului, la adresa <code>s + 0</code> (indexul 0).<br>Scăzând pointerii: <code>(s + 1) - (s + 0) = 1</code>."
        },
        {
            enunt: "3. La o probă de dans a unui concurs s-au calificat 6 perechi, notate cu litere distincte din mulțimea ordonată {A, B, C, D, E, F}, fiecare pereche prezentând câte un dans. Utilizând metoda backtracking, se generează toate posibilitățile de a stabili ordinea susținerii probei, astfel încât perechea A să prezinte prima, iar perechea F să prezinte ultima. Primele trei soluții generate sunt (A, B, C, D, E, F), (A, B, C, E, D, F), (A, B, D, C, E, F). Indicați ultima soluție generată.",
            optiuni: [
                "(A, D, B, C, E, F)", 
                "(A, E, D, B, C, F)", 
                "(A, E, D, C, B, F)", 
                "(A, F, E, D, C, B)"
            ],
            corect: 2, // Varianta c
            explicatie: "Deoarece prima poziție este mereu fixată cu A și ultima cu F, algoritmul generează permutările elementelor din mijloc: {B, C, D, E}. Ultima soluție în ordine lexicografică va avea aceste elemente din mijloc sortate în ordine descrescătoare (invers lexicografică): E, D, C, B. Soluția finală completă este (A, E, D, C, B, F)."
        },
        {
            enunt: "4. Un graf orientat cu 6 vârfuri, numerotate de la 1 la 6, are arcele (3,1), (4,1), (4,2), (4,3), (5,6), (6,4). Indicați numărul vârfurilor pentru care gradul exterior este egal cu gradul interior.",
            optiuni: [
                "1", 
                "2", 
                "3", 
                "4"
            ],
            corect: 1, // Varianta b
            explicatie: "Calculăm gradul exterior (arce care pleacă, d+) și interior (arce care intră, d-) pentru fiecare nod:<br>- Nodul 1: d+=0, d-=2 (d+ &ne; d-)<br>- Nodul 2: d+=0, d-=1 (d+ &ne; d-)<br>- Nodul 3: d+=1, d-=1 (d+ = d- = 1) -> <strong>Egal!</strong><br>- Nodul 4: d+=3, d-=1 (d+ &ne; d-)<br>- Nodul 5: d+=1, d-=0 (d+ &ne; d-)<br>- Nodul 6: d+=1, d-=1 (d+ = d- = 1) -> <strong>Egal!</strong><br>Vârfurile cu d+ = d- sunt 3 și 6, adică 2 vârfuri."
        },
        {
            enunt: "5. Într-un arbore cu 50 de noduri, numerotate de la 1 la 50, rădăcina este nodul numerotat cu 1, iar tatăl oricărui alt nod i al său este nodul numerotat cu [i/2]. Indicați lungimea lanțului elementar cu o extremitate în nodul 32 și cealaltă extremitate în nodul 23.",
            optiuni: [
                "5", 
                "7", 
                "9", 
                "11"
            ],
            corect: 1, // Varianta b
            explicatie: "Urcăm spre rădăcină prin împărțiri repetate la 2 (luând partea întreagă):<br>- Drumul lui 32: 32 &rarr; 16 &rarr; 8 &rarr; 4 &rarr; 2 &rarr; 1<br>- Drumul lui 23: 23 &rarr; 11 &rarr; 5 &rarr; 2 &rarr; 1<br>Primul strămoș comun al nodurilor 32 și 23 este nodul 2.<br>Lanțul elementar complet este: 32 - 16 - 8 - 4 - 2 - 5 - 11 - 23.<br>Numărul de muchii din acest lanț este exact 7."
        }
    ], 
    "2024_iunie": [
        {
            enunt: "1. Indicați expresia C/C++ care are valoarea 1 dacă și numai dacă numerele memorate în variabilele întregi x și y sunt pare.",
            optiuni: [
                "x%2==0 && (y+1)%2!=0", 
                "(x-y)%2==0", 
                "(x+y)%2==0", 
                "x%2==y%2"
            ],
            corect: 0, // Varianta a
            explicatie: "Pentru ca ambele numere să fie pare:<br>1. <code>x % 2 == 0</code> verifică dacă x este par.<br>2. Dacă y este par, atunci <code>y + 1</code> este impar, deci restul împărțirii la 2 a lui <code>(y+1)</code> este diferit de 0 (<code>(y+1)%2!=0</code>).<br>Ambele condiții sunt adevărate simultan doar în varianta a."
        },
        {
            enunt: "2. Subprogramul f este definit mai jos. Indicați ce se afișează în urma apelului: <code>f(2020,0);</code><pre>void f(int x, int y)\n{\n  if (x&lt;10) cout&lt;&lt;x;\n  else\n  {\n    f(x/10,y+1);\n    cout&lt;&lt;x%10;\n  }\n  cout&lt;&lt;y;\n}</pre>",
            optiuni: [
                "23020", 
                "2022100", 
                "02023210", 
                "23022100"
            ],
            corect: 3, // Varianta d
            explicatie: "Urmărim auto-apelurile recursivității:<br>- <code>f(2020, 0)</code> apelează <code>f(202, 1)</code> și la întoarcere va afișa cifra unităților <code>x%10</code> (0) urmată de y (0).<br>- <code>f(202, 1)</code> apelează <code>f(20, 2)</code> -> la întoarcere afișează 2 și apoi 1.<br>- <code>f(20, 2)</code> apelează <code>f(2, 3)</code> -> la întoarcere afișează 0 și apoi 2.<br>- <code>f(2, 3)</code> are x < 10, deci se oprește recursivitatea, afișează direct x (2), apoi afișează y (3).<br>Urmărind ordinea afișărilor pe ecran de la cel mai adânc apel înapoi spre primul: 2 (din f(2)), 3 (din f(2)), 0 (din f(20)), 2 (din f(20)), 2 (din f(202)), 1 (din f(202)), 0 (din f(2020)), 0 (din f(2020)). Rezultatul final este: 23022100."
        },
        {
            enunt: `3. Utilizând metoda backtracking se generează toate permutările elementelor mulțimii ordonate {1, 2, 3, 4, 5, 6} astfel încât pe primele trei poziții sunt doar valori pare, iar pe ultimele trei poziții sunt doar valori impare. Primele șase sunt: (2,4,6,1,3,5), (2,4,6,1,5,3), (2,4,6,3,1,5), (2,4,6,3,5,1), (2,4,6,5,1,3), (2,4,6,5,3,1). Indicați a șaptea permutare generată.`,
            optiuni: [
                "(4,2,6,1,5,3)", 
                "(4,2,6,1,3,5)", 
                "(2,6,4,1,3,5)", 
                "(2,4,6,5,3,2)"
            ],
            corect: 2, // Varianta c 
            explicatie: `Generarea se face în ordine lexicografică. Problema ne împarte permutarea în două bucăți:<br>1. <b>Primele 3 poziții (cifre pare):</b> {2, 4, 6}<br>2. <b>Ultimele 3 poziții (cifre impare):</b> {1, 3, 5}<br><br>Permutările cifrelor pare sunt ordonate crescător așa:<br>- 1. 2, 4, 6 (cea mai mică valoare numerică: 246)<br>- 2. 2, 6, 4 (următoarea valoare numerică: 264)<br>- 3. 4, 2, 6... etc.<br><br>Pentru primul prefix par (2, 4, 6) se generează toate cele 6 permutări ale cifrelor impare (acestea sunt primele 6 soluții oferite în enunț).<br>Când acestea se epuizează, algoritmul trece la următorul prefix par în ordine lexicografică, adică <b>2, 6, 4</b>, și o ia de la capăt cu prima permutare a celor impare, adică <b>1, 3, 5</b>.<br>Așadar, a 7-a soluție generată este: <b>(2, 6, 4, 1, 3, 5)</b> (Varianta C).`
        },
        {
            enunt: "4. Variabila x memorează date pentru 20 de sortimente de ciocolată: tipul (char) și prețul (float). Indicați o expresie a cărei valoare este egală cu tipul celui de al 11-lea sortiment.<pre>struct ciocolata\n{\n  char tip;\n  float pret;\n} x[20];</pre>",
            optiuni: [
                "x.ciocolata[10].tip", 
                "x.tip[10]", 
                "x[10].ciocolata.tip", 
                "x[10].tip"
            ],
            corect: 3, // Varianta d
            explicatie: "Variabila <code>x</code> este un vector de structuri de tip <code>ciocolata</code> indexat de la 0 la 19. Al 11-lea element se află la indexul 10, adică <code>x[10]</code>. Câmpul structurii care conține tipul este <code>tip</code>. Accesul se face prin operatorul punct: <code>x[10].tip</code>."
        },
        {
            enunt: "5. Într-un graf neorientat, cu 10 muchii, două noduri au gradul 0, șase noduri au grade impare, iar celelalte noduri au grade pare, nenule. Indicați numărul maxim de noduri ale grafului.",
            optiuni: [
                "17", 
                "15", 
                "12", 
                "10"
            ],
            corect: 1, // Varianta b
            explicatie: "Știm că suma gradelor tuturor nodurilor dintr-un graf neorientat este egală cu de două ori numărul de muchii: &sum;d(v) = 2 * M = 2 * 10 = 20.<br>- 2 noduri au gradul 0 (contribuție sumă = 0).<br>- 6 noduri au grade impare. Pentru ca suma lor să fie minimă (obținând astfel loc pentru cât mai multe alte noduri), alegem gradul minim impar nenul, adică 1. Contribuție sumă = 6 * 1 = 6.<br>- Suma rămasă pentru nodurile cu grade pare nenule este: 20 - 6 = 14.<br>- Pentru a maximiza numărul total de noduri cu grad par nenul, le atribuim cel mai mic grad par nenul posibil, adică 2. Numărul maxim de astfel de noduri este 14 / 2 = 7 noduri.<br>Numărul maxim total de noduri este: 2 (grade 0) + 6 (grade impare) + 7 (grade pare) = 15 noduri."
        }
    ],
"2024_toamna": [
    {
      tip: "grila",
      enunt: "1. Variabilele x și y memorează câte un număr natural (x≤y). Indicați expresia C/C++ cu valoarea 1 dacă și numai dacă intervalul [x,y] NU conține niciun număr de două cifre.",
      optiuni: ["<code>!(x&gt;=10 || y&gt;99)</code>", "<code>!(x&lt;=99 &amp;&amp; y&gt;=10)</code>", "<code>x&gt;=10 || y&lt;=99</code>", "<code>x&gt;99 &amp;&amp; y&lt;10</code>"],
      corect: 1,
      explicatie: "Intervalul [x,y] conține un număr de două cifre dacă se suprapune cu [10,99], adică dacă <code>x&lt;=99 &amp;&amp; y&gt;=10</code>. Pentru a verifica contrariul (NU conține niciun număr de două cifre), negăm această condiție: <code>!(x&lt;=99 &amp;&amp; y&gt;=10)</code>."
    },
    {
      tip: "grila",
      enunt: "2. Subprogramul f este definit alăturat. Indicați un apel în urma căruia se afișează pe ecran secvența <code>13579</code>:<br><pre><code>void f(int x,int y,int z)\n{\n  if(z&lt;x)\n  {\n    cout&lt;&lt;y;\n    f(x,y+2,z+1);\n  }\n}</code></pre>",
      optiuni: ["<code>f(5,0,0);</code>", "<code>f(5,1,1);</code>", "<code>f(6,1,6);</code>", "<code>f(6,1,1);</code>"],
      corect: 3,
      explicatie: "Sunt afișate 5 numere impare consecutive începând de la 1. Apelul <code>f(6,1,1)</code> face 5 pași (pentru z = 1, 2, 3, 4, 5 &lt; 6) și afișează succesiv y = 1, 3, 5, 7, 9."
    },
    {
      tip: "grila",
      enunt: "3. Variabilele s, x și y permit memorarea câte unui șir de cel mult 15 caractere. Indicați șirul accesat prin variabila s în urma executării secvenței alăturate:<br><pre><code>strcpy(x,\"soare\");\nstrcpy(y,\"ploaie\");\nif (strcmp(x,y)&gt;0) strcpy(s,x+1);\nelse strcpy(s,y+2);</code></pre>",
      optiuni: ["oare", "oaie", "ploaie", "soare"],
      corect: 0,
      explicatie: "Alfabetic, \"soare\" este mai mare decât \"ploaie\" (s &gt; p), deci <code>strcmp(x,y) &gt; 0</code> este adevărat. Se execută <code>strcpy(s, x+1)</code>, unde <code>x+1</code> pointează spre subșirul ce începe la pozitia 1 din \"soare\", adică \"oare\"."
    },
    {
      tip: "grila",
      enunt: "4. Un arbore cu 14 noduri, numerotate de la 1 la 14, este reprezentat prin vectorul de \"tați\" <code>(13,3,0,6,13,3,3,7,6,2,13,2,6,13)</code>. Indicați nodul care este rădăcina arborelui.",
      optiuni: ["1", "3", "7", "13"],
      corect: 1,
      explicatie: "Rădăcina unui arbore reprezentat prin vector de tați este singurul nod care are tatăl egal cu 0. În vector, valoarea 0 se află pe poziția a 3-a (pentru nodul 3)."
    },
    {
      tip: "grila",
      enunt: "5. Indicați numărul maxim de vârfuri izolate pe care le poate avea un graf orientat cu 24 de vârfuri și 24 de arce poziționate adecvat.",
      optiuni: ["5", "6", "18", "21"],
      corect: 2,
      explicatie: "Pentru a maximiza numărul de noduri izolate, concentrăm cele 24 de arce pe un număr minim de noduri neizolate. Într-un graf orientat fără bucle, k noduri pot forma maxim k*(k-1) arce. Pentru k = 5 noduri, numărul maxim de arce este 5*4 = 20 (insuficiente pentru cele 24). Pentru k = 6 noduri, numărul maxim de arce este 6*5 = 30 &gt;= 24. Deci 6 noduri pot absorbi toate cele 24 de arce, iar restul de 24 - 6 = 18 noduri rămân izolate."
    }
    ],
    "2023_iunie": [
    {
      "tip": "grila",
      "enunt": "1. Indicați expresia C/C++ care are cea mai mare valoare, comparativ cu celelalte trei expresii.",
      "optiuni": ["<code>20*23/(2*2)</code>", "<code>20/2*23/2</code>", "<code>(20*23)/2</code>", "<code>(20*23)/2*2</code>"],
      "corect": 3,
      "explicatie": "Se evaluează fiecare expresie utilizând împărțirea întreagă:<br>a. <code>20*23/4</code> = <code>460/4</code> = 115<br>b. <code>20/2*23/2</code> = <code>10*23/2</code> = <code>230/2</code> = 115<br>c. <code>(20*23)/2</code> = <code>460/2</code> = 230<br>d. <code>(20*23)/2*2</code> = <code>230*2</code> = 460. Cea mai mare valoare este 460."
    },
    {
      "tip": "grila",
      "enunt": "2. Subprogramul f este definit alăturat. Indicați ce se afișează în urma apelului <code>f(23);</code><br><pre><code>void f (int n)\n{\n  if(n!=0) f(n/2);\n  cout&lt;&lt;n%2;\n}</code></pre>",
      "optiuni": ["100111", "111010", "010111", "01251123"],
      "corect": 2,
      "explicatie": "Apelurile recursive stivuiesc valorile lui <code>n</code>: 23, 11, 5, 2, 1, 0. Când <code>n=0</code>, condiția <code>if(0!=0)</code> este falsă, astfel că <code>f(0)</code> nu mai apelează nimic și trece direct la afișarea lui <code>0%2 = 0</code>. La revenirea din recursivitate, se afișează resturile împarțirii la 2 ale valorilor anterioare (1, 2, 5, 11, 23), rezultând secvența <code>010111</code>."
    },
    {
      "tip": "grila",
      "enunt": "3. Variabila k este de tip întreg, iar variabila s permite memorarea unui șir de maximum 50 de caractere. Indicați valoarea variabilei k în urma executării secvenței alăturate:<br><pre><code>strcpy(s,\"bac2023\");\ns[s[2]-'a']='\\0';\nk=strlen(s);</code></pre>",
      "optiuni": ["7", "6", "2", "1"],
      "corect": 2,
      "explicatie": "În șirul <code>\"bac2023\"</code>, caracterul de la poziția 2 este <code>'c'</code> (indexat de la 0: s[0]='b', s[1]='a', s[2]='c'). Diferența <code>'c'-'a'</code> are valoarea 2. Instrucțiunea devine <code>s[2] = '\\0'</code>, ceea ce plasează terminatorul de șir pe poziția 2. Șirul devine <code>\"ba\"</code>, iar <code>strlen(s)</code> returnează 2."
    },
    {
     "tip": "grila",
  "enunt": "4. Indicați un vector de „tați” corespunzător unui arbore cu 7 noduri, în care cel puțin unul dintre noduri are trei ascendenți.",
  "optiuni": ["0,1,2,1,1,1,2", "3,0,2,1,3,2,1", "4,3,0,3,4,4,3", "5,4,3,0,2,3,4"],
  "corect": 1,
  "explicatie": "În varianta b <code>(3,0,2,1,3,2,1)</code>, rădăcina este nodul 2 (are tatăl 0). Urmărind lanțul de ascendenți pentru nodul 4: tatăl lui 4 este nodul 1, tatăl lui 1 este nodul 3, iar tatăl lui 3 este nodul 2 (rădăcina). Drumul de la nodul 4 la rădăcină este 4 &rarr; 1 &rarr; 3 &rarr; 2, deci nodul 4 are exact 3 ascendenți (1, 3 și 2)."
    },
    {
      "tip": "grila",
      "enunt": "5. O companie de colectare a fructelor are 6 depozite (1,3,5 - mere; 2,4 - pere; 6 - piersici) și 4 benzi: (1,5), (5,2), (5,4) și (6,1). Indicați numărul minim de benzi de transport care pot fi adăugate astfel încât graful obținut să aibă trei componente tare conexe, fiecare având vârfuri care corespund depozitelor cu același tip de fructe.",
      "optiuni": ["4", "3", "2", "1"],
      "corect": 0,
      "explicatie": "Componentele tare conexe trebuie să fie formate strict din nodurile de același tip: C1={1,3,5}, C2={2,4}, C3={6}.<br>• Pentru C1: avem deja arcul (1,5). Pentru a închide un circuit între 1, 3 și 5, avem nevoie de minim 2 arce noi (de ex. 5&rarr;3 și 3&rarr;1).<br>• Pentru C2: nu există niciun arc între 2 și 4. Pentru a le face tare conexe, trebuie adăugate 2 arce (2&rarr;4 și 4&rarr;2).<br>• Pentru C3: conține un singur nod (6), deci este deja tare conexă (0 arce necesare).<br>În total sunt necesare minim 2 + 2 = 4 arce noi."
    }
  ],
    "2023_toamna": [
    {
      "tip": "grila",
      "enunt": "1. Indicați numerele pe care le pot memora variabilele întregi x și y, astfel încât valoarea expresiei C/C++ alăturate să fie 1:<br><code>y%x - (x/y)*3 != 0</code>",
      "optiuni": ["x=25 și y=75", "x=25 și y=15", "x=15 și y=0", "x=10 și y=30"],
      "corect": 1,
      "explicatie": "Răspuns corect: <b>b (x=25 și y=15)</b>.<br>Evaluăm opțiunea b: <code>15%25 - (25/15)*3</code> = <code>15 - 1*3</code> = 12 → <code>12 != 0</code> evaluează la 1 (adevărat)."
    },
    {
      "tip": "grila",
      "enunt": "2. Subprogramul f este definit alăturat. Indicați valoarea <code>f(3,2)</code>.<br><pre><code>int f(int x, int y)\n{\n  int z;\n  if (y==0) return 1;\n  z=f(x,y/2);\n  if (y%2!=0) return z*z*x;\n  return z*z;\n}</code></pre>",
      "optiuni": ["1", "2", "9", "18"],
      "corect": 2,
      "explicatie": "Răspuns corect: <b>c (9)</b>.<br>• <code>f(3,2)</code> apelează <code>z = f(3,1)</code>.<br>• <code>f(3,1)</code> apelează <code>z = f(3,0)</code>, care returnează 1.<br>• În <code>f(3,1)</code>: <code>z=1</code>, <code>1%2!=0</code> → returnează <code>1*1*3 = 3</code>.<br>• În <code>f(3,2)</code>: <code>z=3</code>, <code>2%2!=0</code> este fals → returnează <code>3*3 = 9</code>."
    },
    {
      "tip": "grila",
      "enunt": "3. Variabila s poate accesa un șir cu cel mult 20 de caractere. Indicați șirul accesat prin s în urma executării secvenței alăturate:<br><pre><code>strcpy(s,\"2019\");\nstrcpy(s+3,\"23\");</code></pre>",
      "optiuni": ["20123", "201923", "202223", "2023"],
      "corect": 0,
      "explicatie": "Răspuns corect: <b>a (20123)</b>.<br>Inițial <code>s = \"2019\"</code>. Instrucțiunea <code>strcpy(s+3, \"23\")</code> copiază <code>\"23\"</code> începând de la poziția cu indicele 3, suprascriind caracterul '9' și adăugând terminatorul de șir. Rezultatul este <code>\"20123\"</code>."
    },
    {
      "tip": "grila",
      "enunt": "4. Utilizând metoda backtracking, se generează toate parfumurile formate prin amestecarea a câte 3 esențe distincte din mulțimea {bergamotă, cireș, iris, lămâie, salcâm}. Două parfumuri sunt distincte dacă diferă prin cel puțin o esență. Primele patru soluții obținute sunt, în această ordine: (bergamotă, cireș, iris), (bergamotă, cireș, lămâie), (bergamotă, cireș, salcâm) și (bergamotă, iris, lămâie). Indicați penultima soluție generată.",
      "optiuni": ["(cireș, iris, salcâm)", "(cireș, lămâie, salcâm)", "(lămâie, iris, salcâm)", "(iris, lămâie, salcâm)"],
      "corect": 1,
      "explicatie": "Răspuns corect: <b>b ((cireș, lămâie, salcâm))</b>.<br>Elementele sunt ordonate alfabetic: 1. bergamotă, 2. cireș, 3. iris, 4. lămâie, 5. salcâm.<br>Ultima soluție generată este (iris, lămâie, salcâm) – indicii (3, 4, 5).<br>Penultima soluție generată este cea anterioară ei lexicografic, adică (cireș, lămâie, salcâm) – indicii (2, 4, 5)."
    },
    {
      "tip": "grila",
      "enunt": "5. Un graf neorientat are 5 noduri, numerotate de la 1 la 5, cu gradele figurate în tabel (1: 2, 2: x, 3: 3, 4: 3, 5: y). Indicați o pereche de valori posibile pentru x și y.",
      "optiuni": ["0 și 4", "1 și 5", "2 și 3", "3 și 3"],
      "corect": 3,
      "explicatie": "Răspuns corect: <b>d (3 și 3)</b>.<br>Suma gradelor trebuie să fie pară: 2 + 3 + 3 + 3 + 3 = 14 (pară), iar gradul maxim al oricărui nod este ≤ 4. Secvența de grade 2, 3, 3, 3, 3 este realizabilă într-un graf neorientat cu 5 noduri."
    }
  ],
    "2022_iunie": [
    {
      "tip": "grila",
      "enunt": "1. Indicați valoarea expresiei C/C++ alăturate: <code>22/20*20/2</code>",
      "optiuni": ["0", "0.55", "10", "55"],
      "corect": 2,
      "explicatie": "Operatorii <code>/</code> și <code>*</code> au aceeași prioritate și se evaluează de la stânga la dreapta folosind împărțirea întreagă:<br>• <code>22 / 20 = 1</code><br>• <code>1 * 20 = 20</code><br>• <code>20 / 2 = 10</code>"
    },
    {
      "tip": "grila",
      "enunt": "2. Variabilele x și valoare sunt declarate alăturat. Indicați o instrucțiune de atribuire corectă din punctul de vedere sintactic.<br><pre><code>struct produs\n{\n  char denumire[50];\n  float cantitate, pret;\n}x;\nfloat valoare;</code></pre>",
      "optiuni": [
        "<code>x=(\"apa minerala\",10,2.5);</code>",
        "<code>x.produs.pret=2.5;</code>",
        "<code>x.denumire[5]= \"Borsec\";</code>",
        "<code>valoare=2*x.cantitate*x.pret;</code>"
      ],
      "corect": 3,
      "explicatie": "a. Atribuirea directă a unei liste de valori între paranteze nu este permisă în C++.<br>b. Numele structurii (<code>produs</code>) nu se folosește ca membru al variabilei.<br>c. <code>x.denumire[5]</code> este un singur caracter (de tip <code>char</code>), căruia nu i se poate atribui un șir de caractere.<br>d. Se accesează corect câmpurile numerice <code>cantitate</code> și <code>pret</code> ale structurii <code>x</code> pentru a calcula o valoare reală."
    },
    {
      "tip": "grila",
      "enunt": "3. La o sală de sport se organizează antrenamente pentru sporturi din mulțimea {tenis, fotbal, volei, handbal, baschet}, astfel încât o persoană poate opta pentru un pachet de două sau trei sporturi, dar nu poate alege fotbal și baschet în același pachet. Utilizând backtracking se generează toate posibilitățile. Primele cinci soluții generate sunt: {tenis, fotbal}, {tenis, fotbal, volei}, {tenis, fotbal, handbal}, {tenis, volei}, {tenis, volei, handbal}. Indicați soluția generată imediat după {fotbal, handbal}.",
      "optiuni": [
        "{volei, handbal}",
        "{fotbal, handbal, baschet}",
        "{handbal, baschet}",
        "{volei, handbal, baschet}"
      ],
      "corect": 0,
      "explicatie": "Elementele din mulțime sunt considerate în ordinea specificată: 1. tenis, 2. fotbal, 3. volei, 4. handbal, 5. baschet.<br>După soluția <code>{fotbal, handbal}</code>, adăugarea elementului <code>baschet</code> ar crea pachetul <code>{fotbal, handbal, baschet}</code>, care este invalid (conține fotbal și baschet).<br>Prin urmare, algoritmul face pasul înapoi (backtrack) și epuizează toate combinările ce conțin <code>fotbal</code> pe prima poziție. Următorul primul element disponibil este <code>volei</code>, iar prima submulțime validă de cel puțin două elemente ce începe cu volei este <code>{volei, handbal}</code>."
    },
    {
      "tip": "grila",
      "enunt": "4. Un graf neorientat cu 6 noduri, numerotate de la 1 la 6, are muchiile [1,2], [1,3], [2,3], [4,6]. Indicați numărul de componente conexe ale acestuia.",
      "optiuni": ["1", "3", "5", "6"],
      "corect": 1,
      "explicatie": "Componentele conexe ale grafului sunt subgrafurile formate din nodurile legate între ele:<br>1. Componenta 1: nodurile {1, 2, 3}<br>2. Componenta 2: nodurile {4, 6}<br>3. Componenta 3: nodul izolat {5}<br>În total sunt 3 componente conexe."
    },
    {
      "tip": "grila",
      "enunt": "5. Un arbore cu rădăcină are 12 noduri și este reprezentat prin vectorul de „tați” <code>(2,4,2,0,4,4,x,6,x,x,y,y)</code>. Indicați un set de valori pe care le pot avea x și y, știind că pe ultimul nivel există cinci noduri frunză și că un singur nod este numerotat cu o valoare egală cu numărul său de descendenți direcți („fii”) de tip „frunză”.",
      "optiuni": ["x=11 y=12", "x=8 y=3", "x=3 y=8", "x=3 y=3"],
      "corect": 2,
      "explicatie": "Rădăcina este nodul 4 (tatăl=0, nivelul 0).<br>• Fiie lui 4: 2, 5, 6 (nivelul 1).<br>• Fiii lui 2: 1, 3 (nivelul 2). Fiii lui 6: 8 (nivelul 2).<br>Pentru <code>x=3</code> și <code>y=8</code>:<br>• Fiii lui 3 sunt nodurile 7, 9, 10 (nivelul 3). Toate 3 sunt frunze.<br>• Fiii lui 8 sunt nodurile 11, 12 (nivelul 3). Ambele sunt frunze.<br>Pe ultimul nivel (nivelul 3) avem 5 noduri frunză (7, 9, 10, 11, 12).<br>Nodul 3 are exact 3 descendenți direcți de tip frunză (nodurile 7, 9, 10), deci valoarea nodului (3) este egală cu numărul de fii frunză. Este singurul nod cu această proprietate."
    }
  ], 
    "2022_toamna": [
    {
      "tip": "grila",
      "enunt": "1. Variabila x este de tip întreg. Indicați o expresie care are valoarea 1 dacă și numai dacă expresia C/C++ alăturată are valoarea 1:<br><code>x&gt;=3 &amp;&amp; x&lt;10</code>",
      "optiuni": ["<code>!(x&lt;3 &amp;&amp; x&gt;=10)</code>", "<code>!(x&lt;3 || x&gt;=10)</code>", "<code>x&lt;3 &amp;&amp; !(x&gt;=10)</code>", "<code>!(x&lt;3) || x&gt;=10</code>"],
      "corect": 1,
      "explicatie": "Aplicând legile lui De Morgan, negarea expresiei <code>(A &amp;&amp; B)</code> este <code>!(A) || !(B)</code>.<br>Negarea condiției <code>x&gt;=3</code> este <code>x&lt;3</code>, iar negarea condiției <code>x&lt;10</code> este <code>x&gt;=10</code>.<br>Prin urmare, <code>x&gt;=3 &amp;&amp; x&lt;10</code> este echivalentă cu <code>!(x&lt;3 || x&gt;=10)</code>."
    },
    {
      "tip": "grila",
      "enunt": "2. Subprogramul f este definit incomplet, alăturat. Indicați o expresie cu care pot fi înlocuite punctele de suspensie pentru ca <code>f(n,3)</code> să aibă valoarea 1 pentru orice număr prim n (n ∈ [2,10000]) și valoarea 0 în caz contrar.<br><pre><code>int f(int x, int y)\n{\n  if(x!=2 &amp;&amp; x%2==0) return 0;\n  if(y*y&gt;x) return 1;\n  if(x%y==0) return 0;\n  return f(x,.........);\n}</code></pre>",
      "optiuni": ["y+2", "y-2", "y*2", "y/2"],
      "corect": 0,
      "explicatie": "Paritatea numărului <code>x</code> este deja verificată în prima linie. Deoarece apelul inițial este <code>f(n, 3)</code>, divizorul de test <code>y</code> începe de la 3 (impar). Pentru eficientizare, verificarea divizibilității trebuie să continue doar cu următorul număr impar, adică <code>y+2</code>."
    },
    {
      "tip": "grila",
      "enunt": "3. Utilizând metoda backtracking, se generează toate posibilitățile de a forma platouri de câte trei fructe distincte din mulţimea {măr, gutuie, prună, caisă, piersică}, astfel încât pe același platou NU se află o gutuie și o piersică simultan. Primele patru soluţii sunt: (măr, gutuie, prună), (măr, gutuie, caisă), (măr, prună, caisă), (măr, prună, piersică). Indicați soluţia generată imediat după (gutuie, prună, caisă).",
      "optiuni": ["(caisă, piersică, măr)", "(gutuie, prună, piersică)", "(măr, caisă, piersică)", "(prună, caisă, piersică)"],
      "corect": 3,
      "explicatie": "Ordinea elementelor din mulțime este: 1. măr, 2. gutuie, 3. prună, 4. caisă, 5. piersică.<br>După <code>(gutuie, prună, caisă)</code>, încercarea de adăugare a ultimului element disponibil pe a treia poziție ar fi <code>piersică</code>, rezultând pachetul <code>(gutuie, prună, piersică)</code>. Această combinație este însă invalidă deoarece conține simultan gutuie și piersică.<br>Epuizând soluțiile ce încep cu <code>gutuie</code>, algoritmul trece la următorul element de pe prima poziție, adică <code>prună</code>. Prima soluție validă ce începe cu prună este <code>(prună, caisă, piersică)</code>."
    },
    {
      "tip": "grila",
      "enunt": "4. Variabila j este de tip întreg, iar variabila A memorează un tablou bidimensional cu 100 de linii și 100 de coloane (numerotate de la 0 la 99). Indicați valoarea variabilei j, dacă elementul <code>A[20][j]</code> se află pe diagonala secundară a tabloului.",
      "optiuni": ["20", "49", "79", "80"],
      "corect": 2,
      "explicatie": "Pentru o matrice pătratică de ordinul N indexată de la 0 la N-1, un element A[i][j] se află pe diagonala secundară dacă i + j = N - 1.<br>În acest caz N = 100, deci 20 + j = 99 → j = 99 - 20 = 79."
    },
    {
      "tip": "grila",
  "enunt": "5. Un graf neorientat are 7 noduri (1 la 7) și 8 muchii, dintre care șase sunt: [1,2], [2,4], [2,7], [3,4], [4,5], [4,6]. Știind că unul dintre lanțurile elementare de lungime maximă este 1, 2, 7, 5, 4, 6, indicați care ar putea fi celelalte două muchii ale grafului.",
  "optiuni": ["[1,4] și [4,7]", "[1,4] și [5,7]", "[2,5] și [4,7]", "[3,6] și [5,7]"],
  "corect": 1,
  "explicatie": "Răspuns corect: <b>b ([1,4] și [5,7])</b>.<br>• Muchia [5,7] este obligatorie pentru ca lanțul 1 → 2 → 7 → 5 → 4 → 6 (de lungime 5) să existe în graf.<br>• În varianta b, adăugarea muchiei [1,4] păstrează lungimea maximă de 5 a lanțului.<br>• În varianta d, adăugarea muchiei [3,6] ar crea un lanț mai lung: 1 → 2 → 7 → 5 → 4 → 3 → 6 (de lungime 6), ceea ce ar contrazice faptul că lanțul din enunț are lungime maximă."
    }
  ],
    "2021_iunie": [
    {
      "tip": "grila",
      "enunt": "1. Indicați o expresie C/C++ care are valoarea 1 dacă și numai dacă valorile variabilelor întregi x și y sunt numere pare.",
      "optiuni": [
        "<code>x%2==0 &amp;&amp; (y+1)%2!=0</code>",
        "<code>(x-y)/2==0</code>",
        "<code>(x+y)%2==0 &amp;&amp; (x-y)%2==0</code>",
        "<code>x%2==y%2</code>"
      ],
      "corect": 0,
      "explicatie": "Răspuns corect: <b>a (<code>x%2==0 &amp;&amp; (y+1)%2!=0</code>)</b>.<br>• <code>x%2==0</code> verifică dacă x este par.<br>• <code>(y+1)%2!=0</code> înseamnă că y+1 este impar, adică y este par.<br>Expresia este 1 dacă și numai dacă ambele numere sunt pare."
    },
    {
      "tip": "grila",
      "enunt": "2. Subprogramul f este definit alăturat. Indicați valorile pe care le pot avea parametrii n și c, astfel încât, în urma apelului, <code>f(n,c)</code> să aibă valoarea 2021.<br><pre><code>int f(int n,int c)\n{\n  if(n==0) return 0;\n  else\n  if(n%10==c) return f(n/10,c);\n  else return n%10+10*f(n/10,c);\n}</code></pre>",
      "optiuni": [
        "n=2021 și c=0",
        "n=200211 și c=2",
        "n=312032 și c=3",
        "n=720721 și c=7"
      ],
      "corect": 3,
      "explicatie": "Răspuns corect: <b>d (n=720721 și c=7)</b>.<br>Subprogramul elimină din numărul n toate cifrele egale cu c. Pentru n=720721 și c=7, eliminând cifrele de 7 obținem exact numărul 2021."
    },
    {
      "tip": "grila",
      "enunt": "3. Variabila m memorează elementele unui tablou bidimensional cu 100 de linii și 100 de coloane (numerotate de la 0 la 99). Indicați expresia C/C++ prin care poate fi accesat un element aflat pe diagonala secundară a tabloului.",
      "optiuni": [
        "<code>m[42/42]</code>",
        "<code>m[42|42]</code>",
        "<code>m[42]:[57]</code>",
        "<code>m[42][57]</code>"
      ],
      "corect": 3,
      "explicatie": "Răspuns corect: <b>d (<code>m[42][57]</code>)</b>.<br>Un element m[i][j] dintr-o matrice cu N=100 (indexată de la 0 la 99) se află pe diagonala secundară dacă i + j = N - 1 = 99. Pentru linia 42 și coloana 57 avem 42 + 57 = 99."
    },
    {
      "tip": "grila",
      "enunt": "4. Un graf neorientat are 6 noduri, numerotate de la 1 la 6, și muchiile [1,2], [1,3], [2,3], [3,4], [3,5], [4,5], [5,6]. Indicați un ciclu elementar al acestui graf.",
      "optiuni": [
        "1,2,3",
        "1,2,3,1",
        "1,2,3,4,5,3,1",
        "1,2,3,4,5,6,1"
      ],
      "corect": 1,
      "explicatie": "Răspuns corect: <b>b (1,2,3,1)</b>.<br>Un ciclu este elementar dacă se închide în primul nod fără a repeta alte noduri intermediare. Secvența 1,2,3,1 folosește muchiile [1,2], [2,3] și [3,1] și este un ciclu elementar."
    },
    {
      "tip": "grila",
      "enunt": "5. Într-un arbore cu rădăcină (nivelul 0 = rădăcina), toate nodurile de pe același nivel au un număr egal de „fii” și NU există două niveluri diferite cu același număr de noduri. Indicați numărul minim de noduri de pe nivelul 3.",
      "optiuni": ["12", "9", "8", "5"],
      "corect": 2,
      "explicatie": "Răspuns corect: <b>c (8)</b>.<br>Notăm cu k<sub>i</sub> numărul de fii ai fiecărui nod de pe nivelul i (k<sub>i</sub> ≥ 2):<br>• Nivelul 0: 1 nod<br>• Nivelul 1: k<sub>0</sub> = 2 noduri (pt. k<sub>0</sub>=2)<br>• Nivelul 2: k<sub>0</sub> · k<sub>1</sub> = 2 · 2 = 4 noduri (pt. k<sub>1</sub>=2)<br>• Nivelul 3: k<sub>0</sub> · k<sub>1</sub> · k<sub>2</sub> = 4 · 2 = 8 noduri (pt. k<sub>2</sub>=2).<br>Numerele de noduri (1, 2, 4, 8) sunt toate distincte, iar minimul de pe nivelul 3 este 8."
    }
  ],
    "2021_toamna": [
    {
      "tip": "grila",
      "enunt": "1. Variabilele x și y sunt de tip real (x ≠ -2). Indicați o expresie C/C++ corespunzătoare expresiei aritmetice ((x+y)/5 + (x-y)/2) / (x+2).",
      "optiuni": [
        "<code>(x+y/5+x-y/2)/x+2</code>",
        "<code>(x+y)/5+(x-y)/2/(x+2)</code>",
        "<code>((x+y)/5+(x-y)/2)/x+2</code>",
        "<code>((x+y)/5+(x-y)/2)/(x+2)</code>"
      ],
      "corect": 3,
      "explicatie": "Membrii numărătorului complex se parantezează individual: <code>(x+y)/5</code> și <code>(x-y)/2</code>. Întreg numărătorul este pus într-o paranteză mare <code>((x+y)/5+(x-y)/2)</code>, iar numitorul <code>(x+2)</code> este parantezat separat la numitor pentru a păstra ordinea corectă a operațiilor."
    },
    {
      "tip": "grila",
      "enunt": "2. Subprogramul f este definit alăturat. Indicați valoarea <code>f(1234)</code>.<br><pre><code>int f(int n)\n{\n  if (n!=0)\n    return (n%2)*(n%10)+f(n/10);\n  return 0;\n}</code></pre>",
      "optiuni": ["0", "4", "6", "10"],
      "corect": 1,
      "explicatie": "Termenul <code>(n%2)*(n%10)</code> adaugă cifra doar dacă <code>n</code> este impar (pentru numere pare <code>n%2 == 0</code>, deci termenul devine 0).<br>• <code>f(1234)</code>: n=1234 (par) → 0 + f(123)<br>• <code>f(123)</code>: n=123 (impar) → 1 · 3 + f(12) = 3 + f(12)<br>• <code>f(12)</code>: n=12 (par) → 0 + f(1)<br>• <code>f(1)</code>: n=1 (impar) → 1 · 1 + f(0) = 1 + 0 = 1<br>Suma returnată este 3 + 1 = 4."
    },
    {
      "tip": "grila",
      "enunt": "3. Utilizând metoda backtracking se generează toate numerele formate din cifre distincte, cifre a căror sumă este 6. Primele patru soluții generate sunt: 1023, 1032, 105 și 1203. Indicați cea de a șasea soluție generată.",
      "optiuni": ["1230", "132", "123", "15"],
      "corect": 0,
      "explicatie": "Soluțiile se generează în ordine crescătoare a valorii numerice:<br>1. 1023<br>2. 1032<br>3. 105<br>4. 1203<br>5. 123 (1+2+3=6)<br>6. 1230 (1+2+3+0=6)<br>Cea de-a șasea soluție generată este 1230."
    },
    {
      "tip": "grila",
      "enunt": "4. Unui arbore cu 10 noduri i se adaugă o muchie cu extremitățile în două dintre nodurile sale. Indicați numărul ciclurilor elementare pe care le conține graful obținut.",
      "optiuni": ["0", "1", "9", "10"],
      "corect": 1,
      "explicatie": "Un arbore este un graf conex și fără cicluri, în care între oricare două noduri există un singur drum elementar. Adăugarea unei singure muchii între două noduri nevecine va conecta capetele acelui drum unic, creând exact un singur ciclu elementar."
    },
    {
      "tip": "grila",
      "enunt": "5. Un graf neorientat are 21 de noduri, numerotate de la 1 la 21; pentru oricare două noduri i și j există muchia [i,j] dacă și numai dacă ultima cifră a lui i este egală cu ultima cifră a lui j. Indicați numărul valorilor nule din matricea de adiacență a grafului.",
      "optiuni": ["2 · 21 - 10²", "21² - 11", "21² - 2 · 12", "2 · 21² - 13"],
      "corect": 2,
      "explicatie": "Matricea de adiacență are dimensiunea 21 × 21 = 21² elemente.<br>Există muchie (valoarea 1) între noduri distincte din aceeași clasă de resturi modulo 10:<br>• Clasele pentru cifrele 2, 3, 4, 5, 6, 7, 8, 9, 0 conțin câte 2 noduri fiecare (ex: 2 și 12, 3 și 13 etc.). Fiecare pereche generează 2 de 1 în matrice (9 × 2 = 18).<br>• Clasa pentru cifra 1 conține 3 noduri (1, 11, 21), formând 3 muchii, adică 3 × 2 = 6 de 1 în matrice.<br>Total elemente egale cu 1: 18 + 6 = 24 = 2 · 12.<br>Numărul de valori nule (0) este 21² - 24 = 21² - 2 · 12."
    }
  ],
    "2020_iunie": [
    {
      "tip": "grila",
      "enunt": "1. Indicați valoarea expresiei C/C++ alăturate: <code>3+5.0/2+2</code>",
      "optiuni": ["2", "5", "6", "7.5"],
      "corect": 3,
      "explicatie": "Datorită constantei reale <code>5.0</code>, operația de împărțire <code>5.0/2</code> este o împărțire reală cu rezultat <code>2.5</code>. Evaluarea se face de la stânga la dreapta: <code>3 + 2.5 + 2 = 7.5</code>."
    },
    {
      "tip": "grila",
      "enunt": "2. Variabila v memorează un tablou unidimensional cu 4 elemente (numerotate de la 0). Subprogramul f este definit alăturat. Indicați setul de elemente pe care le poate avea tabloul memorat în v, în ordinea în care apar în acesta, astfel încât în urma apelului <code>f(0,v);</code> să se afișeze pe ecran <code>2020</code>.<br><pre><code>void f(int i, int v[4])\n{\n  if(i&gt;=3) v[i]=v[i]+1;\n  else f(i+1,v);\n  cout&lt;&lt;v[i];\n}</code></pre>",
      "optiuni": ["-1,1,0,2", "0,2,0,1", "1,-1,0,1", "2,0,1,0"],
      "corect": 1,
      "explicatie": "Subprogramul coboară recursiv până la <code>i=3</code>. Când ajunge la <code>i=3</code>, modifică <code>v[3] = v[3] + 1</code> și afișează <code>v[3]</code>. La revenirea din recursivitate afișează în ordine <code>v[2]</code>, <code>v[1]</code> și <code>v[0]</code>.<br>Pentru a afișa <code>2020</code> trebuie ca:<br>• <code>v[3] + 1 = 2</code> &rarr; <code>v[3] = 1</code><br>• <code>v[2] = 0</code><br>• <code>v[1] = 2</code><br>• <code>v[0] = 0</code><br>Prin urmare, tabloul inițial este <code>0, 2, 0, 1</code>."
    },
    {
      "tip": "grila",
      "enunt": "3. Utilizând metoda backtracking se generează toate variantele prin care patru persoane pot plăti o consumație totală de 200 de lei în condițiile: fiecare plătește o sumă nenulă, divizibilă cu 10; primul plătește mai mult decât al doilea, al doilea mai mult decât al treilea, iar acesta mai mult decât al patrulea. Primele patru soluții sunt: (70, 60, 40, 30), (70, 60, 50, 20), (80, 50, 40, 30), (80, 60, 40, 20). Indicați cea de a șasea soluție, în ordinea generării acestora.",
      "optiuni": ["(80,60,45,15)", "(80,60,50,10)", "(80,70,30,20)", "(80,70,40,10)"],
      "corect": 2,
      "explicatie": "Generarea soluțiilor continuă ordonat:<br>1. (70, 60, 40, 30)<br>2. (70, 60, 50, 20)<br>3. (80, 50, 40, 30)<br>4. (80, 60, 40, 20)<br>5. (80, 60, 50, 10)<br>6. (80, 70, 30, 20)<br>Prin urmare, a șasea soluție generată este <code>(80, 70, 30, 20)</code>."
    },
    {
      "tip": "grila",
      "enunt": "4. Un arbore cu 10 noduri, numerotate de la 1 la 10, este reprezentat prin vectorul de „tați” <code>(7,5,6,5,7,0,6,3,3,8)</code>. Indicați numărul de noduri „frunză” ale acestui arbore.",
      "optiuni": ["2", "3", "5", "6"],
      "corect": 2,
      "explicatie": "Nodurile frunză sunt cele care NU apar deloc în vectorul de tați (nu au niciun descendent direct).<br>Valori prezente în vectorul de tați (care sunt tați): <code>{3, 5, 6, 7, 8}</code> (și 0 indică rădăcina).<br>Nodurile care nu apar sunt: <code>{1, 2, 4, 9, 10}</code>, adică un total de 5 noduri frunză."
    },
    {
      "tip": "grila",
      "enunt": "5. Un graf neorientat cu 5 noduri are matricea de adiacență dată (muchiile sunt [1,2], [1,4], [1,5], [2,3], [3,4]). Indicați numărul grafurilor parțiale conexe ale acestuia care sunt diferite de graful dat.",
      "optiuni": ["4", "6", "8", "30"],
      "corect": 0,
      "explicatie": "Un graf conex cu 5 noduri are nevoie de cel puțin 4 muchii. Graful inițial are 5 muchii.<br>Grafurile parțiale se obțin eliminând muchii:<br>• Daca eliminăm [1,5], nodul 5 devine izolat (graful devine neconex).<br>• Daca eliminăm oricare din celelalte 4 muchii ([1,2], [1,4], [2,3] sau [3,4]), graful rămâne conex.<br>Deci există exact 4 grafuri parțiale conexe diferite de graful dat."
    }
  ],
    "2020_toamna": [
    {
      "tip": "grila",
      "enunt": "1. Variabila x este de tip întreg și poate memora un număr natural din intervalul [0,10^9). Indicați valoarea maximă pe care o poate avea expresia C/C++ alăturată: <code>x%2020</code>",
      "optiuni": ["20.2", "2019", "2020", "495049"],
      "corect": 1,
      "explicatie": "Restul împărțirii oricărui număr întreg la 2020 (operația <code>x%2020</code>) ia valori în mulțimea {0, 1, 2, ..., 2019}. Valoarea maximă posibilă este 2019."
    },
    {
      "tip": "grila",
      "enunt": "2. Subprogramul f este definit alăturat. Indicați apelul în urma căruia simbolul * se afișează de trei ori.<br><pre><code>void f(int x)\n{\n  cout&lt;&lt;\"*\";\n  if(x&gt;5) f((x+1)/2);\n}</code></pre>",
      "optiuni": ["<code>f(30);</code>", "<code>f(21);</code>", "<code>f(17);</code>", "<code>f(8);</code>"],
      "corect": 2,
      "explicatie": "Pentru <code>f(17)</code>:<br>• Afișează * (1) → 17 &gt; 5 este adevărat → apelează <code>f((17+1)/2) = f(9)</code><br>• Afișează * (2) → 9 &gt; 5 este adevărat → apelează <code>f((9+1)/2) = f(5)</code><br>• Afișează * (3) → 5 &gt; 5 este fals → se oprește.<br>În total, simbolul * este afișat de exact 3 ori."
    },
    {
      "tip": "grila",
      "enunt": "3. Utilizând metoda backtracking se generează toate modalitățile de a prepara o băutură din câte 3 sau 4 tipuri de fructe distincte din mulțimea {căpșune, mere, pepene, pere, portocale}. Primele patru soluții generate sunt: (căpșune, mere, pepene), (căpșune, mere, pepene, pere), (căpșune, mere, pepene, portocale), (căpșune, mere, pere). Indicați cea de a șasea soluție generată.",
      "optiuni": [
        "(pepene, pere, portocale)",
        "(mere, pepene, pere, portocale)",
        "(căpșune, mere, portocale)",
        "(căpșune, mere, pere, pepene)"
      ],
      "corect": 2,
      "explicatie": "Elementele din mulțime sunt considerate în ordinea: 1. căpșune, 2. mere, 3. pepene, 4. pere, 5. portocale.<br>Generarea submulțimilor de 3 și 4 elemente în ordine lexicografică este:<br>1. (căpșune, mere, pepene)<br>2. (căpșune, mere, pepene, pere)<br>3. (căpșune, mere, pepene, portocale)<br>4. (căpșune, mere, pere)<br>5. (căpșune, mere, pere, portocale)<br>6. (căpșune, mere, portocale)<br>A șasea soluție este (căpșune, mere, portocale)."
    },
    {
      "tip": "grila",
      "enunt": "4. Un arbore cu 9 noduri, numerotate de la 1 la 9, este reprezentat prin vectorul de „tați” <code>(8,6,4,2,3,0,4,2,7)</code>. Indicați un „frate” al nodului 4.",
      "optiuni": ["1", "2", "7", "8"],
      "corect": 3,
      "explicatie": "Nodul 4 se află pe poziția a 4-a din vector și are tatăl egal cu 2. Căutăm un alt nod care îl are ca tată tot pe nodul 2. În vectorul de tați, valoarea 2 apare pe poziția 4 și pe poziția 8. Prin urmare, nodul 8 are același tată (2) ca și nodul 4, fiind fratele acestuia."
    },
    {
      "tip": "grila",
      "enunt": "5. Un graf neorientat eulerian cu 5 noduri are un nod cu gradul 4. Indicați numărul minim de muchii ale grafului.",
      "optiuni": ["4", "6", "8", "10"],
      "corect": 1,
      "explicatie": "Un graf este eulerian dacă este conex și toate nodurile sale au grade pare non-nule.<br>Graful are 5 noduri și un nod de grad 4. Pentru a minimiza numărul total de muchii, celelalte 4 noduri trebuie să aibă cel mai mic grad par posibil, adică gradul 2.<br>Suma gradelor din graf va fi 4 + 2 + 2 + 2 + 2 = 12.<br>Conform teoremei fundamentale a grafurilor, numărul de muchii este egal cu jumătatea sumei gradelor: 12 / 2 = 6 muchii."
    }
  ],
      "2019_toamna": [
    {
      tip: "grila",
      enunt: "1. O expresie C/C++ care are valoarea 0 este:",
      optiuni: ["<code>'m'&lt;'n'</code>", "<code>'m'=='M'</code>", "<code>'M'=='m'+'N'-'n'</code>", "<code>'N'=='M'+1</code>"],
      corect: 1,
      explicatie: "Codurile ASCII: <code>'m'=109</code>, <code>'n'=110</code>, <code>'M'=77</code>, <code>'N'=78</code>.<br>a. 109&lt;110 → adevărat (1).<br>b. 109==77 → fals (0). <b>Soluția.</b><br>c. 109+78-110=77='M' → adevărat (1).<br>d. 78==78 → adevărat (1)."
    },
    {
      tip: "grila",
      enunt: "2. Ce se afișează în urma apelului <code>f(75,30)</code>?<br><pre><code>void f(int i, int j)\n{ cout&lt;&lt;i&lt;&lt;\" \";\n  if(i!=j)\n  { if(i&lt;j){ i=i+j; j=i-j; i=i-j; }\n    f(i-j,j);\n  }\n}</code></pre>",
      optiuni: ["75 30 45", "75 45 15", "75 45 15 15", "75 30 45 15"],
      corect: 2,
      explicatie: "<code>f(75,30)</code>→45→15 (interschimbare la 15&lt;30) →15. Rezultat: <code>75 45 15 15</code>."
    },
    {
      tip: "grila",
      enunt: "3. Backtracking — torturi din 3 straturi distincte din {caramel, ciocolată, frișcă, nuci, vanilie}, ultimul strat frișcă sau vanilie. Primele patru: (caramel,ciocolată,frișcă), (caramel,ciocolată,vanilie), (caramel,nuci,frișcă), (caramel,nuci,vanilie). Care e a cincea soluție?",
      optiuni: ["(ciocolată, caramel, frișcă)", "(ciocolată, nuci, frișcă)", "(nuci, caramel, vanilie)", "(nuci, ciocolată, vanilie)"],
      corect: 0,
      explicatie: "După epuizarea lui 'caramel' pe prima poziție, se trece la 'ciocolată'; al doilea strat ia prima valoare validă 'caramel'; al treilea prima valoare validă 'frișcă'."
    },
    {
      tip: "grila",
      enunt: "4. Numărul de noduri ale unui arbore cu 4 muchii este:",
      optiuni: ["2", "3", "4", "5"],
      corect: 3,
      explicatie: "Într-un arbore, noduri = muchii + 1 = 5."
    },
    {
      tip: "grila",
      enunt: "5. Care șir de valori poate reprezenta gradele nodurilor unui graf neorientat cu 6 noduri?",
      optiuni: ["1,0,0,2,2,2", "2,2,3,4,0,3", "2,2,5,5,0,1", "6,5,4,3,2,1"],
      corect: 1,
      explicatie: "Suma gradelor trebuie să fie pară (a: 7, c: 15 — impare, respinse). La d, gradul maxim posibil cu 6 noduri e 5, nu 6. Rămâne b (sumă 14, secvență realizabilă)."
    }
  ],

  // ================= 2019 — IUNIE (Varianta 4) =================
  "2019_iunie": [
    {
      tip: "grila",
      enunt: "1. Pentru ce valori x,y expresia <code>x/2+x%y-x/y==0</code> are valoarea 1?",
      optiuni: ["x=4 și y=2", "x=6 și y=3", "x=8 și y=4", "x=10 și y=0"],
      corect: 0,
      explicatie: "a. <code>4/2+4%2-4/2</code> = 2+0-2 = 0 → adevărat. b,c dau valori ≠0. d → împărțire la zero."
    },
    {
      tip: "grila",
      enunt: "2. Care este valoarea lui <code>f(6)</code>?<br><pre><code>int f(int n)\n{ if (n&lt;=2) return n;\n  if (n%2==1) return f(n-2)-f(n-1);\n  return f(n-1)-f(n-2);\n}</code></pre>",
      optiuni: ["6", "5", "2", "1"],
      corect: 1,
      explicatie: "f(1)=1, f(2)=2, f(3)=-1, f(4)=-3, f(5)=2, f(6)=f(5)-f(4)=2-(-3)=5."
    },
    {
      tip: "grila",
      enunt: "3. x e de tip char, o literă mică. Ce expresie e nenulă dacă și numai dacă x e vocală (a,e,i,o,u)?",
      optiuni: ["<code>strcmp(x,\"aeiou\")==0</code>", "<code>strchr(\"aeiou\",x)</code>", "<code>'a'&lt;=x && x&lt;='u'</code>", "<code>x==a || x==e || x==i || x==o || x==u</code>"],
      corect: 1,
      explicatie: "b. <code>strchr</code> caută x în șir, returnează pointer nenul doar dacă x e vocală. a. tip greșit. c. include și consoane. d. identificatori nedeclarați."
    },
    {
      tip: "grila",
      enunt: "4. Backtracking descrescător — numere de 4 cifre distincte din {0,1,2,3,4,5}. Primele șase: 5432,5431,5430,5423,5421,5420. Care e al șaptelea?",
      optiuni: ["5415", "5413", "5342", "5340"],
      corect: 1,
      explicatie: "După epuizarea cifrei 2 pe poziția a treia, se trece la 1; cea mai mare cifră rămasă pentru a patra poziție e 3 → 5413."
    },
    {
      tip: "grila",
      enunt: "5. Graf neorientat cu 20 noduri și 10 muchii. Numărul maxim de componente conexe este:",
      optiuni: ["5", "10", "16", "20"],
      corect: 2,
      explicatie: "Cu 5 noduri se poate forma un graf complet cu exact C(5,2)=10 muchii; restul de 15 noduri rămân izolate → 1+15=16 componente."
    }
  ],

  // ================= 2018 — TOAMNĂ (Varianta 1) =================
  "2018_toamna": [
    {
      tip: "grila",
      enunt: "1. x,y,z întregi pozitive. Dacă <code>z&lt;x && 2*z==3*y</code> e adevărată, care e șirul crescător al valorilor?",
      optiuni: ["x, y, z", "y, z, x", "z, x, y", "z, y, x"],
      corect: 1,
      explicatie: "Din <code>2z=3y</code> → z=1.5y → z&gt;y. Din <code>z&lt;x</code> → x cel mai mare. Ordine: y &lt; z &lt; x."
    },
    {
      tip: "grila",
      enunt: "2.a) Algoritm pseudocod:<br><pre><code>citește n\nm←0; p←1; x←0\ndacă n&lt;0 atunci n←-n\nrepetă\n  c←n%10\n  n←[n/10]\n  dacă c&gt;m atunci m←c\n  x←m*p+x\n  p←p*10\npână când n=0\nscrie x</code></pre>Ce se afișează dacă se citeşte <code>10523</code>? (6p.)",
      optiuni: ["55533", "53553", "35553", "55353"],
      corect: 0,
      explicatie: "Cifre procesate din dreapta: 3→m=3,x=3 | 2→m=3,x=33 | 5→m=5,x=533 | 0→m=5,x=5533 | 1→m=5,x=55533."
    },
    {
      tip: "grila",
      enunt: "2.b) Care set de patru numere, citite pentru algoritmul de mai sus, face să se afișeze <code>722</code>? (4p.)",
      optiuni: ["702, 712, 722, -702", "720, 721, 722, -722", "270, 271, 272, -270", "700, 710, 720, -700"],
      corect: 0,
      explicatie: "722 înseamnă (din dreapta) cifra unităților=2, zecilor≤2, sutelor=7 → n de forma 70_2/71_2/72_2. Setul corect: 702, 712, 722, -702."
    },
    {
      tip: "grila",
      enunt: "2.c) Care variantă rescrie corect algoritmul folosind o structură cu test inițial (<code>cât timp</code>) în locul lui <code>repetă...până când</code>? (6p.)",
      optiuni: [
        "<pre><code>citește n\nm←0; p←1; x←0\ndacă n&lt;0 atunci n←-n\nc←n%10; n←[n/10]; dacă c&gt;m atunci m←c; x←m*p+x; p←p*10\ncât timp n≠0 execută\n  c←n%10; n←[n/10]; dacă c&gt;m atunci m←c; x←m*p+x; p←p*10\nscrie x</code></pre>",
        "<pre><code>citește n\nm←0; p←1; x←0\ndacă n&lt;0 atunci n←-n\ncât timp n=0 execută\n  c←n%10; n←[n/10]; dacă c&gt;m atunci m←c; x←m*p+x; p←p*10\nscrie x</code></pre>",
        "<pre><code>citește n\nm←0; p←1; x←0\ndacă n&lt;0 atunci n←-n\nc←n%10; n←[n/10]; dacă c&gt;m atunci m←c; x←m*p+x\ncât timp n≠0 execută\n  c←n%10; n←[n/10]; dacă c&gt;m atunci m←c; x←m*p+x\nscrie x</code></pre>",
        "<pre><code>citește n\nm←0; p←1; x←0\ndacă n&lt;0 atunci n←-n\nc←n%10; n←[n/10]; dacă c&lt;m atunci m←c; x←m*p+x; p←p*10\ncât timp n≠0 execută\n  c←n%10; n←[n/10]; dacă c&lt;m atunci m←c; x←m*p+x; p←p*10\nscrie x</code></pre>"
      ],
      corect: 0,
      explicatie: "Structura cu test inițial cere executarea o dată \"manual\" a corpului înainte de buclă (pentru echivalență cu repetă). Varianta b) are condiția inversată (bucla nu se execută); c) omite actualizarea lui p; d) inversează comparația (c&lt;m în loc de c&gt;m)."
    },
    {
      tip: "grila",
      enunt: "2.d) Care este programul C/C++ corect corespunzător algoritmului? (10p.)",
      optiuni: [
        "<pre><code>#include &lt;iostream&gt;\nusing namespace std;\nint main(){\n    int n,m=0,p=1,x=0,c;\n    cin&gt;&gt;n;\n    if(n&lt;0) n=-n;\n    do{\n        c=n%10;\n        n=n/10;\n        if(c&gt;m) m=c;\n        x=m*p+x;\n        p=p*10;\n    }while(n!=0);\n    cout&lt;&lt;x;\n}</code></pre>",
        "<pre><code>#include &lt;iostream&gt;\nusing namespace std;\nint main(){\n    int n,m=0,p=1,x=0,c;\n    cin&gt;&gt;n;\n    if(n&lt;0) n=-n;\n    do{\n        c=n%10;\n        n=n/10;\n        if(c&gt;m) m=c;\n        x=m*p+x;\n    }while(n!=0);\n    cout&lt;&lt;x;\n}</code></pre>",
        "<pre><code>#include &lt;iostream&gt;\nusing namespace std;\nint main(){\n    int n,m=9,p=1,x=0,c;\n    cin&gt;&gt;n;\n    if(n&lt;0) n=-n;\n    do{\n        c=n%10;\n        n=n/10;\n        if(c&lt;m) m=c;\n        x=m*p+x;\n        p=p*10;\n    }while(n!=0);\n    cout&lt;&lt;x;\n}</code></pre>",
        "<pre><code>#include &lt;iostream&gt;\nusing namespace std;\nint main(){\n    int n,m=0,p=1,x=0,c;\n    cin&gt;&gt;n;\n    if(n&lt;0) n=-n;\n    do{\n        n=n/10;\n        c=n%10;\n        if(c&gt;m) m=c;\n        x=m*p+x;\n        p=p*10;\n    }while(n!=0);\n    cout&lt;&lt;x;\n}</code></pre>"
      ],
      corect: 0,
      explicatie: "b) omite <code>p=p*10</code>; c) calculează minimul cifrelor, nu maximul; d) inversează ordinea <code>n=n/10</code> și <code>c=n%10</code>, citind cifra greșită."
    }
  ],

  // ================= 2018 — IUNIE (Varianta 2) =================
  "2018_iunie": [
    {
      tip: "grila",
      enunt: "1. O expresie echivalentă cu <code>!(x%y!=0 || y&lt;2)</code> (x,y naturale nenule) este:",
      optiuni: ["<code>x%y==y%x && y&gt;1</code>", "<code>(x+y)%y==0 || y&gt;=1</code>", "<code>(x/y)*y==x && y&gt;=2</code>", "<code>x%y==0 || y&gt;2</code>"],
      corect: 2,
      explicatie: "<code>!(x%y!=0 || y&lt;2) = (x%y==0) && (y&gt;=2)</code>. <code>(x/y)*y==x</code> ⇔ <code>x%y==0</code>, combinată cu <code>y&gt;=2</code> → varianta c."
    },
    {
      tip: "grila",
      enunt: "2.a) Algoritm pseudocod:<br><pre><code>citește n\ndacă n&lt;0 atunci n←-n\ns←0\nrepetă\n  x←n%10\n  pentru i←1,x execută\n    s←s+x\n  n←[n/10]\npână când n=0\nscrie s</code></pre>Ce se afişează dacă se citește <code>2018</code>? (6p.)",
      optiuni: ["69", "61", "65", "70"],
      corect: 0,
      explicatie: "s = suma pătratelor cifrelor: 8²+1²+0²+2² = 64+1+0+4 = 69."
    },
    {
      tip: "grila",
      enunt: "2.b) Care set de patru numere din <code>[10,1000]</code> face ca algoritmul de mai sus să afișeze <code>100</code>? (4p.)",
      optiuni: ["68, 86, 608, 680", "64, 46, 604, 640", "75, 57, 705, 750", "82, 28, 802, 820"],
      corect: 0,
      explicatie: "Se caută cifre cu pătrate însumate 100: 6²+8²=36+64=100. Numere: 68, 86, 608, 680. (Celelalte variante nu ating suma 100: 6²+4²=52, 7²+5²=74, 8²+2²=68.)"
    },
    {
      tip: "grila",
      enunt: "2.c) Care variantă înlocuiește corect structura <code>pentru...execută</code> cu o atribuire echivalentă? (6p.)",
      optiuni: [
        "<pre><code>citește n\ndacă n&lt;0 atunci n←-n\ns←0\nrepetă\n  x←n%10\n  s←s+x*x\n  n←[n/10]\npână când n=0\nscrie s</code></pre>",
        "<pre><code>citește n\ndacă n&lt;0 atunci n←-n\ns←0\nrepetă\n  x←n%10\n  s←s+x\n  n←[n/10]\npână când n=0\nscrie s</code></pre>",
        "<pre><code>citește n\ndacă n&lt;0 atunci n←-n\ns←0\nrepetă\n  n←[n/10]\n  x←n%10\n  s←s+x*x\npână când n=0\nscrie s</code></pre>",
        "<pre><code>citește n\ndacă n&lt;0 atunci n←-n\ns←0\nrepetă\n  x←n%10\n  s←s*x*x\n  n←[n/10]\npână când n=0\nscrie s</code></pre>"
      ],
      corect: 0,
      explicatie: "Bucla \"pentru i←1,x execută s←s+x\" adaugă x de x ori, adică echivalent cu <code>s←s+x*x</code>. b) uită înmulțirea (adaugă doar x); c) inversează ordinea, citind cifra greșită; d) folosește înmulțire în loc de adunare."
    },
    {
      tip: "grila",
      enunt: "2.d) Care este programul C/C++ corect corespunzător algoritmului? (10p.)",
      optiuni: [
        "<pre><code>#include &lt;iostream&gt;\nusing namespace std;\nint main(){\n    int n,s=0,x;\n    cin&gt;&gt;n;\n    if(n&lt;0) n=-n;\n    do{\n        x=n%10;\n        s=s+x*x;\n        n=n/10;\n    }while(n!=0);\n    cout&lt;&lt;s;\n}</code></pre>",
        "<pre><code>#include &lt;iostream&gt;\nusing namespace std;\nint main(){\n    int n,s=0,x;\n    cin&gt;&gt;n;\n    if(n&lt;0) n=-n;\n    do{\n        x=n%10;\n        s=s+x*x;\n    }while(n!=0);\n    cout&lt;&lt;s;\n}</code></pre>",
        "<pre><code>#include &lt;iostream&gt;\nusing namespace std;\nint main(){\n    int n,s=0,x;\n    cin&gt;&gt;n;\n    if(n&lt;0) n=-n;\n    do{\n        x=n%10;\n        s=s+x;\n        n=n/10;\n    }while(n!=0);\n    cout&lt;&lt;s;\n}</code></pre>",
        "<pre><code>#include &lt;iostream&gt;\nusing namespace std;\nint main(){\n    int n,s=0,x;\n    cin&gt;&gt;n;\n    if(n&lt;0) n=-n;\n    do{\n        x=n%10;\n        s=s+x*x;\n        n=n/10;\n    }while(n==0);\n    cout&lt;&lt;s;\n}</code></pre>"
      ],
      corect: 0,
      explicatie: "b) omite <code>n=n/10</code> → buclă infinită; c) adună x în loc de x*x; d) condiția <code>while(n==0)</code> oprește bucla imediat."
    }
  ],

  // ================= 2017 — TOAMNĂ (Varianta 7) =================
  "2017_toamna": [
    {
      tip: "grila",
      enunt: "1. Expresia C/C++ <code>3+7/4+3</code> are valoarea:",
      optiuni: ["1", "5.5", "7", "7.75"],
      corect: 2,
      explicatie: "Toate valorile sunt întregi → <code>7/4=1</code> (împărțire întreagă). Rezultă <code>3+1+3=7</code>."
    },
    {
      tip: "grila",
      enunt: "2.a) Algoritm pseudocod:<br><pre><code>citește n\nk←0; i←1\ncât timp i≤n execută\n  citește x\n  y←2\n  cât timp x&gt;1 și x%y≠0 execută y←y+1\n  dacă k&lt;[x/y] atunci k←[x/y]\n  i←i+1\nscrie k</code></pre>Ce se afişează dacă se citesc, în ordine, <code>4, 5, 24, 3, 45</code>? (6p.)",
      optiuni: ["15", "12", "24", "5"],
      corect: 0,
      explicatie: "y = cel mai mic factor prim al lui x. x=5→[5/5]=1; x=24→[24/2]=12; x=3→[3/3]=1; x=45→[45/3]=15. Maxim = 15."
    },
    {
      tip: "grila",
      enunt: "2.b) Primul număr citit este <code>3</code> (n=3). Care set de 3 numere, citite în continuare, face să se afișeze <code>1</code>? (4p.)",
      optiuni: ["2, 3, 5", "4, 6, 8", "1, 2, 4", "9, 15, 21"],
      corect: 0,
      explicatie: "Pentru orice x prim, y=x și [x/y]=1. Numerele compuse (4,6,8 sau 9,15,21) dau valori [x/y]&gt;1."
    },
    {
      tip: "grila",
      enunt: "2.c) Care variantă înlocuiește corect prima structură <code>cât timp</code> cu <code>pentru...execută</code>? (6p.)",
      optiuni: [
        "<pre><code>citește n\nk←0\npentru i←1,n execută\n  citește x\n  y←2\n  cât timp x&gt;1 și x%y≠0 execută y←y+1\n  dacă k&lt;[x/y] atunci k←[x/y]\nscrie k</code></pre>",
        "<pre><code>citește n\nk←0\ny←2\npentru i←1,n execută\n  citește x\n  cât timp x&gt;1 și x%y≠0 execută y←y+1\n  dacă k&lt;[x/y] atunci k←[x/y]\nscrie k</code></pre>",
        "<pre><code>citește n\nk←0\npentru i←1,n execută\n  citește x\n  y←2\n  cât timp x&gt;1 și x%y≠0 execută y←y+1\n  dacă k&gt;[x/y] atunci k←[x/y]\nscrie k</code></pre>",
        "<pre><code>citește n\nk←0\npentru i←1,n execută\n  citește x\n  y←2\n  cât timp x&gt;1 și x%y≠0 execută y←y+1\n  dacă k&lt;[x/y] atunci k←[x/y]\n  scrie k</code></pre>"
      ],
      corect: 0,
      explicatie: "b) uită să reinițializeze y←2 la fiecare i; c) inversează comparația (calculează minimul); d) afișează k de n ori, în interiorul buclei, nu doar rezultatul final."
    },
    {
      tip: "grila",
      enunt: "2.d) Care este programul C/C++ corect corespunzător algoritmului? (10p.)",
      optiuni: [
        "<pre><code>#include &lt;iostream&gt;\nusing namespace std;\nint main(){\n    int n,k=0,i,x,y;\n    cin&gt;&gt;n;\n    for(i=1;i&lt;=n;i++){\n        cin&gt;&gt;x;\n        y=2;\n        while(x&gt;1 && x%y!=0) y++;\n        if(k&lt;x/y) k=x/y;\n    }\n    cout&lt;&lt;k;\n}</code></pre>",
        "<pre><code>#include &lt;iostream&gt;\nusing namespace std;\nint main(){\n    int n,k=0,i,x,y=2;\n    cin&gt;&gt;n;\n    for(i=1;i&lt;=n;i++){\n        cin&gt;&gt;x;\n        while(x&gt;1 && x%y!=0) y++;\n        if(k&lt;x/y) k=x/y;\n    }\n    cout&lt;&lt;k;\n}</code></pre>",
        "<pre><code>#include &lt;iostream&gt;\nusing namespace std;\nint main(){\n    int n,k=0,i,x,y;\n    cin&gt;&gt;n;\n    for(i=1;i&lt;=n;i++){\n        cin&gt;&gt;x;\n        y=2;\n        while(x&gt;1 && x%y!=0) y++;\n        if(k&gt;x/y) k=x/y;\n    }\n    cout&lt;&lt;k;\n}</code></pre>",
        "<pre><code>#include &lt;iostream&gt;\nusing namespace std;\nint main(){\n    int n,k=0,i,x,y;\n    cin&gt;&gt;n;\n    for(i=1;i&lt;=n;i++){\n        cin&gt;&gt;x;\n        y=2;\n        while(x&gt;1 && x%y!=0) y++;\n        if(k&lt;x/y) k=x/y;\n        cout&lt;&lt;k;\n    }\n}</code></pre>"
      ],
      corect: 0,
      explicatie: "b) nu resetează <code>y=2</code> la fiecare iterație; c) inversează comparația; d) afișează <code>k</code> de n ori (în buclă), nu o singură dată la final."
    }
  ],

  // ================= 2017 — IUNIE (Varianta 4) =================
  "2017_iunie": [
    {
      tip: "grila",
      enunt: "1. Expresie C/C++ adevărată dacă și numai dacă x (natural) are exact o cifră:",
      optiuni: ["<code>x%10==x</code>", "<code>x/10==x</code>", "<code>x%10==x/10</code>", "<code>(x%10)/10==x</code>"],
      corect: 0,
      explicatie: "Pentru x cu o singură cifră, <code>x%10==x</code> e mereu adevărat; pentru x cu mai multe cifre e fals. Celelalte variante nu funcționează corect pentru toate cifrele 1-9."
    },
    {
      tip: "grila",
      enunt: "2.a) Algoritm pseudocod:<br><pre><code>citește n\npentru i←1,n execută\n  pentru j←1,n execută\n    dacă i=j sau i+j=n+1 atunci scrie '#'\n    altfel scrie j</code></pre>Ce se afișează dacă se citește <code>3</code>? (6p.)",
      optiuni: ["#2#1#3#2#", "#1#2#3#1#", "1#2#3#2##", "#2#3#1#2#"],
      corect: 0,
      explicatie: "'#' apare pe diagonala principală (i=j) și pe cea secundară (i+j=4). Rând cu rând: i=1→#2#, i=2→1#3, i=3→#2#. Rezultat: <code>#2#1#3#2#</code>."
    },
    {
      tip: "grila",
      enunt: "2.b) Ce valoare a lui n face ca numărul de simboluri <code>#</code> afișate să fie <code>100</code>? (4p.)",
      optiuni: ["50", "51", "100", "25"],
      corect: 0,
      explicatie: "Numărul de '#' este 2n (n par) sau 2n-1 (n impar). Pentru 100 (par): <code>2n=100 → n=50</code>."
    },
    {
      tip: "grila",
      enunt: "2.c) Care variantă înlocuiește corect prima structură <code>pentru...execută</code> cu una cu test inițial (<code>cât timp</code>)? (6p.)",
      optiuni: [
        "<pre><code>citește n\ni←1\ncât timp i≤n execută\n  pentru j←1,n execută\n    dacă i=j sau i+j=n+1 atunci scrie '#' altfel scrie j\n  i←i+1</code></pre>",
        "<pre><code>citește n\ni←1\ncât timp i≤n execută\n  pentru j←1,n execută\n    dacă i=j sau i+j=n+1 atunci scrie '#' altfel scrie j</code></pre>",
        "<pre><code>citește n\ni←1\ncât timp i≥n execută\n  pentru j←1,n execută\n    dacă i=j sau i+j=n+1 atunci scrie '#' altfel scrie j\n  i←i+1</code></pre>",
        "<pre><code>citește n\ni←1\ncât timp i≤n execută\n  i←i+1\n  pentru j←1,n execută\n    dacă i=j sau i+j=n+1 atunci scrie '#' altfel scrie j</code></pre>"
      ],
      corect: 0,
      explicatie: "b) omite <code>i←i+1</code> → buclă infinită; c) inversează condiția (bucla nu se execută); d) incrementează i înainte de a folosi valoarea corectă, decalând rezultatul."
    },
    {
      tip: "grila",
      enunt: "2.d) Care este programul C/C++ corect corespunzător algoritmului? (10p.)",
      optiuni: [
        "<pre><code>#include &lt;iostream&gt;\nusing namespace std;\nint main(){\n    int n,i,j;\n    cin&gt;&gt;n;\n    for(i=1;i&lt;=n;i++)\n        for(j=1;j&lt;=n;j++)\n            if(i==j || i+j==n+1) cout&lt;&lt;'#';\n            else cout&lt;&lt;j;\n}</code></pre>",
        "<pre><code>#include &lt;iostream&gt;\nusing namespace std;\nint main(){\n    int n,i,j;\n    cin&gt;&gt;n;\n    for(i=1;i&lt;=n;i++)\n        for(j=1;j&lt;=n;j++)\n            if(j==i || j+i==n+1) cout&lt;&lt;'#';\n            else cout&lt;&lt;i;\n}</code></pre>",
        "<pre><code>#include &lt;iostream&gt;\nusing namespace std;\nint main(){\n    int n,i,j;\n    cin&gt;&gt;n;\n    for(i=1;i&lt;=n;i++)\n        for(j=1;j&lt;=n;j++)\n            if(i==j && i+j==n+1) cout&lt;&lt;'#';\n            else cout&lt;&lt;j;\n}</code></pre>",
        "<pre><code>#include &lt;iostream&gt;\nusing namespace std;\nint main(){\n    int n,i,j;\n    cin&gt;&gt;n;\n    for(i=1;i&lt;=n;i++)\n        for(j=1;j&lt;n;j++)\n            if(i==j || i+j==n+1) cout&lt;&lt;'#';\n            else cout&lt;&lt;j;\n}</code></pre>"
      ],
      corect: 0,
      explicatie: "b) afișează <code>i</code> în loc de <code>j</code> pe ramura altfel; c) folosește <code>&&</code> în loc de <code>||</code>, ratând multe celule cu #; d) bucla interioară se oprește la <code>j&lt;n</code> (lipsește ultima coloană)."
    }
  ],

  // ================= 2016 — IUNIE (Varianta 10) =================
  "2016_iunie": [
    {
      tip: "grila",
      enunt: "1. Expresie C/C++ adevărată dacă și numai dacă x are exact trei cifre:",
      optiuni: ["<code>x%1000==0 || x%100!=0</code>", "<code>x/1000==0 || x/100!=0</code>", "<code>x%1000==0 && x%100!=0</code>", "<code>x/1000==0 && x/100!=0</code>"],
      corect: 3,
      explicatie: "100≤x≤999 ⇔ <code>x/1000==0</code> (x&lt;1000) ȘI <code>x/100!=0</code> (x≥100) → varianta d."
    },
    {
      tip: "grila",
      enunt: "2.a) Algoritm pseudocod:<br><pre><code>citește m,n,x\np←0\ncât timp m&lt;n și p=0 execută\n  dacă m%x=0 și n%x=0 atunci p←x\n  altfel\n    dacă m%x=0 atunci n←n-1\n    altfel m←m+1\nscrie m,n</code></pre>Ce se afişează dacă se citesc, în ordine, <code>11, 30, 7</code>? (6p.)",
      optiuni: ["14 28", "13 29", "14 29", "15 28"],
      corect: 0,
      explicatie: "m crește (11→14, unde 14%7=0), apoi n scade (30→28, unde 28%7=0). La m=14,n=28 ambele divizibile cu 7 → algoritmul se oprește."
    },
    {
      tip: "grila",
      enunt: "2.b) Ce set de valori m, n, x face ca algoritmul de mai sus să afișeze două numere egale? (4p.)",
      optiuni: ["m=1, n=3, x=4", "m=2, n=10, x=2", "m=3, n=9, x=3", "m=4, n=8, x=2"],
      corect: 0,
      explicatie: "Cu x=4, m crește (1→2→3) fără ca x să dividă niciun n intermediar, ajungând m=n=3 → afișează \"3 3\". În celelalte variante, m și n sunt ambele divizibile cu x chiar de la început, deci p se setează imediat, iar m,n rămân diferite."
    },
    {
      tip: "grila",
      enunt: "2.c) Care variantă înlocuiește corect structura <code>cât timp</code> cu o structură repetitivă de alt tip? (6p.)",
      optiuni: [
        "<pre><code>citește m,n,x\np←0\nrepetă\n  dacă m%x=0 și n%x=0 atunci p←x\n  altfel\n    dacă m%x=0 atunci n←n-1\n    altfel m←m+1\npână când m≥n sau p≠0\nscrie m,n</code></pre>",
        "<pre><code>citește m,n,x\np←0\nrepetă\n  dacă m%x=0 și n%x=0 atunci p←x\n  altfel\n    dacă m%x=0 atunci n←n-1\n    altfel m←m+1\npână când m≥n și p≠0\nscrie m,n</code></pre>",
        "<pre><code>citește m,n,x\np←0\nrepetă\n  dacă m%x=0 atunci n←n-1\n  altfel\n    dacă n%x=0 atunci p←x\n    altfel m←m+1\npână când m≥n sau p≠0\nscrie m,n</code></pre>",
        "<pre><code>citește m,n,x\np←0\npentru i←1,n execută\n  dacă m%x=0 și n%x=0 atunci p←x\n  altfel\n    dacă m%x=0 atunci n←n-1\n    altfel m←m+1\nscrie m,n</code></pre>"
      ],
      corect: 0,
      explicatie: "b) folosește <code>și</code> în loc de <code>sau</code> în condiția de oprire, prelungind incorect bucla; c) alterează ordinea verificărilor, schimbând logica; d) folosește o structură <code>pentru</code> cu număr fix de pași, care nu se potrivește naturii dinamice a algoritmului."
    },
    {
      tip: "grila",
      enunt: "2.d) Care este programul C/C++ corect corespunzător algoritmului? (10p.)",
      optiuni: [
        "<pre><code>#include &lt;iostream&gt;\nusing namespace std;\nint main(){\n    int m,n,x,p=0;\n    cin&gt;&gt;m&gt;&gt;n&gt;&gt;x;\n    while(m&lt;n && p==0){\n        if(m%x==0 && n%x==0) p=x;\n        else{\n            if(m%x==0) n=n-1;\n            else m=m+1;\n        }\n    }\n    cout&lt;&lt;m&lt;&lt;\" \"&lt;&lt;n;\n}</code></pre>",
        "<pre><code>#include &lt;iostream&gt;\nusing namespace std;\nint main(){\n    int m,n,x,p=0;\n    cin&gt;&gt;m&gt;&gt;n&gt;&gt;x;\n    while(m&lt;n && p==0){\n        if(m%x==0 || n%x==0) p=x;\n        else{\n            if(m%x==0) n=n-1;\n            else m=m+1;\n        }\n    }\n    cout&lt;&lt;m&lt;&lt;\" \"&lt;&lt;n;\n}</code></pre>",
        "<pre><code>#include &lt;iostream&gt;\nusing namespace std;\nint main(){\n    int m,n,x,p=0;\n    cin&gt;&gt;m&gt;&gt;n&gt;&gt;x;\n    while(m&lt;n && p==0){\n        if(m%x==0 && n%x==0) p=x;\n        else{\n            if(n%x==0) m=m+1;\n            else n=n-1;\n        }\n    }\n    cout&lt;&lt;m&lt;&lt;\" \"&lt;&lt;n;\n}</code></pre>",
        "<pre><code>#include &lt;iostream&gt;\nusing namespace std;\nint main(){\n    int m,n,x,p=0;\n    cin&gt;&gt;m&gt;&gt;n&gt;&gt;x;\n    while(m&lt;n || p==0){\n        if(m%x==0 && n%x==0) p=x;\n        else{\n            if(m%x==0) n=n-1;\n            else m=m+1;\n        }\n    }\n    cout&lt;&lt;m&lt;&lt;\" \"&lt;&lt;n;\n}</code></pre>"
      ],
      corect: 0,
      explicatie: "b) folosește <code>||</code> în loc de <code>&&</code> în prima condiție; c) inversează ramurile (m++ și n-- sunt schimbate între ele); d) folosește <code>||</code> în condiția buclei while, ceea ce o face să nu se mai oprească normal."
    }
  ],

  // ================= 2016 — TOAMNĂ (Varianta 9) =================
  "2016_toamna": [
    {
      tip: "grila",
      enunt: "1. Expresia C/C++ <code>!(x&gt;0 && y&gt;0)</code> (x,y reale) este echivalentă cu:",
      optiuni: ["<code>x&lt;=0 || y&lt;=0</code>", "<code>x&lt;=0 && y&lt;=0</code>", "<code>x&gt;0 || y&gt;0</code>", "<code>!(x&gt;0) && !(y&gt;0)</code>"],
      corect: 0,
      explicatie: "Legea lui De Morgan: <code>!(A && B) = !A || !B</code>. Deci <code>!(x&gt;0 && y&gt;0) = (x&lt;=0) || (y&lt;=0)</code>."
    },
    {
      tip: "grila",
      enunt: "2.a) Algoritm pseudocod:<br><pre><code>citește n\np←0\npentru i←1,n execută\n  m←i\n  cât timp m%2=0 execută m←[m/2]\n  dacă m=1 atunci p←i\nscrie p</code></pre>Ce se afişează dacă se citeşte <code>12</code>? (6p.)",
      optiuni: ["8", "4", "16", "12"],
      corect: 0,
      explicatie: "p reține ultimul i≤n care e putere a lui 2. Puterile lui 2 ≤12 sunt 1,2,4,8. p=8."
    },
    {
      tip: "grila",
      enunt: "2.b) Care sunt cel mai mic și cel mai mare număr pentru care algoritmul de mai sus afișează <code>16</code>? (4p.)",
      optiuni: ["16 și 31", "16 și 32", "17 și 31", "15 și 31"],
      corect: 0,
      explicatie: "p=16 înseamnă că 16 e cea mai mare putere a lui 2 ≤n, iar 32 nu e ≤n. Deci n∈[16,31]."
    },
    {
      tip: "grila",
      enunt: "2.c) Care variantă înlocuiește corect <code>pentru...execută</code> cu o structură repetitivă cu test final (<code>repetă</code>)? (6p.)",
      optiuni: [
        "<pre><code>citește n\np←0; i←1\nrepetă\n  m←i\n  cât timp m%2=0 execută m←[m/2]\n  dacă m=1 atunci p←i\n  i←i+1\npână când i&gt;n\nscrie p</code></pre>",
        "<pre><code>citește n\np←0; i←1\nrepetă\n  m←i\n  cât timp m%2=0 execută m←[m/2]\n  dacă m=1 atunci p←i\npână când i&gt;n\nscrie p</code></pre>",
        "<pre><code>citește n\np←0; i←1\nrepetă\n  m←i\n  cât timp m%2=0 execută m←[m/2]\n  dacă m=1 atunci p←i\n  i←i+1\npână când i≥n\nscrie p</code></pre>",
        "<pre><code>citește n\np←0; i←1\nrepetă\n  m←i\n  cât timp m%2=0 execută m←[m/2]\n  dacă m=0 atunci p←i\n  i←i+1\npână când i&gt;n\nscrie p</code></pre>"
      ],
      corect: 0,
      explicatie: "b) omite <code>i←i+1</code> → buclă infinită; c) condiția <code>i≥n</code> oprește bucla cu o iterație mai devreme, omițând i=n; d) verifică <code>m=0</code> în loc de <code>m=1</code>, condiție care nu se îndeplinește niciodată corect."
    },
    {
      tip: "grila",
      enunt: "2.d) Care este programul C/C++ corect corespunzător algoritmului? (10p.)",
      optiuni: [
        "<pre><code>#include &lt;iostream&gt;\nusing namespace std;\nint main(){\n    int n,p=0,i,m;\n    cin&gt;&gt;n;\n    for(i=1;i&lt;=n;i++){\n        m=i;\n        while(m%2==0) m=m/2;\n        if(m==1) p=i;\n    }\n    cout&lt;&lt;p;\n}</code></pre>",
        "<pre><code>#include &lt;iostream&gt;\nusing namespace std;\nint main(){\n    int n,p=0,i,m;\n    cin&gt;&gt;n;\n    for(i=1;i&lt;=n;i++){\n        m=i;\n        while(m%2==1) m=m/2;\n        if(m==1) p=i;\n    }\n    cout&lt;&lt;p;\n}</code></pre>",
        "<pre><code>#include &lt;iostream&gt;\nusing namespace std;\nint main(){\n    int n,p=0,i,m;\n    cin&gt;&gt;n;\n    for(i=1;i&lt;=n;i++){\n        m=i;\n        while(m%2==0) m=m/2;\n        if(m==0) p=i;\n    }\n    cout&lt;&lt;p;\n}</code></pre>",
        "<pre><code>#include &lt;iostream&gt;\nusing namespace std;\nint main(){\n    int n,p=0,i,m;\n    cin&gt;&gt;n;\n    for(i=1;i&lt;n;i++){\n        m=i;\n        while(m%2==0) m=m/2;\n        if(m==1) p=i;\n    }\n    cout&lt;&lt;p;\n}</code></pre>"
      ],
      corect: 0,
      explicatie: "b) condiția buclei interioare e inversată (<code>m%2==1</code>); c) verifică <code>m==0</code>, imposibil de atins; d) bucla exterioară se oprește la <code>i&lt;n</code>, omițând i=n."
    }
  ],

  // ================= 2015 — TOAMNĂ (Varianta 2) =================
  "2015_toamna": [
    {
      tip: "grila",
      enunt: "1. Expresie C/C++ adevărată dacă și numai dacă n e divizibil cu 2, dar NU și cu 5:",
      optiuni: ["<code>!((n%2==1) || (n%5==0))</code>", "<code>(n%2==0) && (n%5==0)</code>", "<code>(n%10==0) || (n%5!=0)</code>", "<code>(n%10==0) && (n%2==0)</code>"],
      corect: 0,
      explicatie: "<code>!((n%2==1)||(n%5==0)) = (n%2==0) && (n%5!=0)</code> — exact 'divizibil cu 2, nu și cu 5'."
    },
    {
      tip: "grila",
      enunt: "2.a) Algoritm pseudocod:<br><pre><code>citește n,k\ncât timp n≥1 execută\n  dacă n&gt;k atunci i←k altfel i←n\n  n←n-i\n  t←k\n  cât timp i≥1 execută\n    scrie t\n    i←i-1\n    t←t-1</code></pre>Ce se afişează dacă se citesc, în ordine, <code>7</code> și <code>3</code>? (6p.)",
      optiuni: ["3 2 1 3 2 1 3", "3 2 1 3 2 1", "2 1 3 2 1 3", "3 3 2 1 3 2 1"],
      corect: 0,
      explicatie: "n=7,k=3: se afișează 3 2 1 (n=4). Apoi 3 2 1 (n=1). Apoi doar 3 (n=0). Rezultat total: 3 2 1 3 2 1 3."
    },
    {
      tip: "grila",
      enunt: "2.b) Pentru k=11, care sunt cel mai mic și cel mai mare n din [1,99] astfel încât ultima valoare afișată să fie <code>7</code>? (4p.)",
      optiuni: ["5 și 93", "6 și 94", "5 și 94", "4 și 93"],
      corect: 0,
      explicatie: "Ultima valoare = k-i+1, unde i e restul n mod k. Pentru k=11 și valoare finală 7, i=5, deci n≡5 (mod 11): cel mai mic 5, cel mai mare 93."
    },
    {
      tip: "grila",
      enunt: "2.c) Care variantă înlocuiește corect a doua structură <code>cât timp</code> cu o structură repetitivă de alt tip? (6p.)",
      optiuni: [
        "<pre><code>citește n,k\ncât timp n≥1 execută\n  dacă n&gt;k atunci i←k altfel i←n\n  n←n-i\n  t←k\n  pentru j←1,i execută\n    scrie t-j+1</code></pre>",
        "<pre><code>citește n,k\ncât timp n≥1 execută\n  dacă n&gt;k atunci i←k altfel i←n\n  n←n-i\n  t←k\n  pentru j←1,i-1 execută\n    scrie t-j+1</code></pre>",
        "<pre><code>citește n,k\ncât timp n≥1 execută\n  dacă n&gt;k atunci i←k altfel i←n\n  n←n-i\n  t←k\n  pentru j←1,i execută\n    scrie t-j</code></pre>",
        "<pre><code>citește n,k\ncât timp n≥1 execută\n  dacă n&gt;k atunci i←n altfel i←k\n  n←n-i\n  t←k\n  pentru j←1,i execută\n    scrie t-j+1</code></pre>"
      ],
      corect: 0,
      explicatie: "b) se oprește cu o valoare mai devreme (<code>i-1</code>); c) formula <code>t-j</code> decalează valorile cu 1; d) inversează ramurile lui <code>dacă n&gt;k</code>, calculând greșit pe i."
    },
    {
      tip: "grila",
      enunt: "2.d) Care este programul C/C++ corect corespunzător algoritmului? (10p.)",
      optiuni: [
        "<pre><code>#include &lt;iostream&gt;\nusing namespace std;\nint main(){\n    int n,k,i,t;\n    cin&gt;&gt;n&gt;&gt;k;\n    while(n&gt;=1){\n        if(n&gt;k) i=k; else i=n;\n        n=n-i;\n        t=k;\n        while(i&gt;=1){\n            cout&lt;&lt;t&lt;&lt;' ';\n            i--;\n            t--;\n        }\n    }\n}</code></pre>",
        "<pre><code>#include &lt;iostream&gt;\nusing namespace std;\nint main(){\n    int n,k,i,t;\n    cin&gt;&gt;n&gt;&gt;k;\n    while(n&gt;=1){\n        if(n&gt;k) i=k; else i=n;\n        n=n-i;\n        t=k;\n        while(i&gt;=1){\n            cout&lt;&lt;t&lt;&lt;' ';\n            t--;\n        }\n    }\n}</code></pre>",
        "<pre><code>#include &lt;iostream&gt;\nusing namespace std;\nint main(){\n    int n,k,i,t;\n    cin&gt;&gt;n&gt;&gt;k;\n    while(n&gt;=1){\n        if(n&gt;k) i=n; else i=k;\n        n=n-i;\n        t=k;\n        while(i&gt;=1){\n            cout&lt;&lt;t&lt;&lt;' ';\n            i--;\n            t--;\n        }\n    }\n}</code></pre>",
        "<pre><code>#include &lt;iostream&gt;\nusing namespace std;\nint main(){\n    int n,k,i,t;\n    cin&gt;&gt;n&gt;&gt;k;\n    while(n&gt;=1){\n        if(n&gt;k) i=k; else i=n;\n        t=n;\n        n=n-i;\n        while(i&gt;=1){\n            cout&lt;&lt;t&lt;&lt;' ';\n            i--;\n            t--;\n        }\n    }\n}</code></pre>"
      ],
      corect: 0,
      explicatie: "b) omite <code>i--</code> → buclă infinită; c) inversează ramurile lui <code>if(n&gt;k)</code>; d) inițializează <code>t=n</code> în loc de <code>t=k</code>."
    }
  ],

  // ================= 2015 — IUNIE (Varianta 9) =================
  "2015_iunie": [
    {
      tip: "grila",
      enunt: "1. x memorează un număr natural cu ≥4 cifre nenule distincte. Expresia egală cu cifra sutelor este:",
      optiuni: ["<code>x/100</code>", "<code>x%100</code>", "<code>(x/10)%10</code>", "<code>(x/100)%10</code>"],
      corect: 3,
      explicatie: "Cifra sutelor: se împarte x la 100 (elimină unitățile și zecile), apoi restul la 10 (elimină miile și restul): <code>(x/100)%10</code>."
    },
    {
      tip: "grila",
      enunt: "2.a) Algoritm pseudocod:<br><pre><code>citește n,k\npm←0\npentru i←1,n execută\n  x←i\n  p←0\n  cât timp x%k=0 execută\n    x←[x/k]\n    p←p+1\n  dacă p&gt;pm atunci pm←p\nscrie pm</code></pre>Ce se afişează dacă se citesc, în ordine, <code>7</code> și <code>2</code>? (6p.)",
      optiuni: ["2", "1", "3", "4"],
      corect: 0,
      explicatie: "pm = cel mai mare exponent p astfel încât kᵖ≤n. Pentru k=2 și n=7: 4=2² (p=2) e maximul (8=2³ ar depăși 7). pm=2."
    },
    {
      tip: "grila",
      enunt: "2.b) Pentru k=5, care sunt cel mai mic și cel mai mare n astfel încât algoritmul de mai sus afișează <code>3</code>? (4p.)",
      optiuni: ["125 și 624", "125 și 625", "100 și 624", "120 și 624"],
      corect: 0,
      explicatie: "pm=3 înseamnă 5³=125≤n, dar 5⁴=625&gt;n. Deci n∈[125,624]."
    },
    {
      tip: "grila",
      enunt: "2.c) Care variantă înlocuiește corect prima structură <code>cât timp</code> cu <code>pentru...execută</code>? (6p.)",
      optiuni: [
        "<pre><code>citește n,k\npm←0\npentru i←1,n execută\n  x←i; p←0\n  cât timp x%k=0 execută {x←[x/k]; p←p+1}\n  dacă p&gt;pm atunci pm←p\nscrie pm</code></pre>",
        "<pre><code>citește n,k\npm←0; p←0\npentru i←1,n execută\n  x←i\n  cât timp x%k=0 execută {x←[x/k]; p←p+1}\n  dacă p&gt;pm atunci pm←p\nscrie pm</code></pre>",
        "<pre><code>citește n,k\npm←0\npentru i←1,n execută\n  x←i; p←0\n  cât timp x%k=0 execută {x←[x/k]; p←p+1}\n  dacă pm&gt;p atunci pm←p\nscrie pm</code></pre>",
        "<pre><code>citește n,k\npm←0\npentru i←1,n execută\n  x←i; p←0\n  cât timp x%k≠0 execută {x←[x/k]; p←p+1}\n  dacă p&gt;pm atunci pm←p\nscrie pm</code></pre>"
      ],
      corect: 0,
      explicatie: "b) nu resetează p←0 la fiecare i, valorile se acumulează greșit; c) inversează comparația (calculează minimul); d) inversează condiția buclei interioare (<code>≠</code> în loc de <code>=</code>)."
    },
    {
      tip: "grila",
      enunt: "2.d) Care este programul C/C++ corect corespunzător algoritmului? (10p.)",
      optiuni: [
        "<pre><code>#include &lt;iostream&gt;\nusing namespace std;\nint main(){\n    int n,k,pm=0,i,x,p;\n    cin&gt;&gt;n&gt;&gt;k;\n    for(i=1;i&lt;=n;i++){\n        x=i; p=0;\n        while(x%k==0){ x=x/k; p++; }\n        if(p&gt;pm) pm=p;\n    }\n    cout&lt;&lt;pm;\n}</code></pre>",
        "<pre><code>#include &lt;iostream&gt;\nusing namespace std;\nint main(){\n    int n,k,pm=0,i,x,p=0;\n    cin&gt;&gt;n&gt;&gt;k;\n    for(i=1;i&lt;=n;i++){\n        x=i;\n        while(x%k==0){ x=x/k; p++; }\n        if(p&gt;pm) pm=p;\n    }\n    cout&lt;&lt;pm;\n}</code></pre>",
        "<pre><code>#include &lt;iostream&gt;\nusing namespace std;\nint main(){\n    int n,k,pm=0,i,x,p;\n    cin&gt;&gt;n&gt;&gt;k;\n    for(i=1;i&lt;=n;i++){\n        x=i; p=0;\n        while(x%k==0){ x=x/k; p++; }\n        if(pm&gt;p) pm=p;\n    }\n    cout&lt;&lt;pm;\n}</code></pre>",
        "<pre><code>#include &lt;iostream&gt;\nusing namespace std;\nint main(){\n    int n,k,pm=0,i,x,p;\n    cin&gt;&gt;n&gt;&gt;k;\n    for(i=1;i&lt;=n;i++){\n        x=i; p=0;\n        while(x%k!=0){ x=x/k; p++; }\n        if(p&gt;pm) pm=p;\n    }\n    cout&lt;&lt;pm;\n}</code></pre>"
      ],
      corect: 0,
      explicatie: "b) declară <code>p=0</code> o singură dată, în afara buclei, deci p nu se resetează la fiecare i; c) inversează comparația (calculează minimul); d) inversează condiția buclei interioare (<code>!=</code> în loc de <code>==</code>)."
    }
  ]

    
};

// 2. Variabile de stare pentru gestionarea quiz-ului

let currentQuestions = [];

let currentQuestionIndex = 0;

let score = 0;

let selectedOptionIndex = null;



// 3. Funcția automată la încărcarea paginii

window.onload = function() {

    const urlParams = new URLSearchParams(window.location.search);

    const an = urlParams.get('an') || "2025";

    const ses = urlParams.get('ses') || "iunie";

    

    const cheie = `${an}_${ses}`;

    

    // Corectat formatul titlului dinamic conform preferinței tale

    const titluElement = document.getElementById("quiz-title");

    if (titluElement) {

        titluElement.innerText = `Antrenament Subiect BAC ${an} ${ses.charAt(0).toUpperCase() + ses.slice(1)}`;

    }



    if (databaseSubiecte[cheie]) {

        currentQuestions = databaseSubiecte[cheie];

        loadQuestion();

    } else {

        document.getElementById("question-container").innerHTML = `

            <p class='question-text' style='text-align:center; padding: 20px;'>

                ⚠️ Întrebările interactive pentru sesiunea <strong>${ses.toUpperCase()} (${an})</strong> nu au fost adăugate încă în fișierul JavaScript.

            </p>

        `;

        document.getElementById("submit-btn").style.display = "none";

    }

};



// 4. Funcția de randare/afișare a întrebării curente

function loadQuestion() {

    const q = currentQuestions[currentQuestionIndex];

    

    document.getElementById("question-counter").innerText = `Exercițiul ${currentQuestionIndex + 1} din ${currentQuestions.length}`;

    document.getElementById("question-text").innerHTML = q.enunt;

    document.getElementById("feedback-box").style.display = "none";

    document.getElementById("next-btn").style.display = "none";

    document.getElementById("submit-btn").style.display = "block";

    selectedOptionIndex = null;



    const listHtml = document.getElementById("options-list");

    listHtml.innerHTML = "";

    

    q.optiuni.forEach((text, index) => {

        const item = document.createElement("div");

        item.className = "option-item";

        item.id = `option-${index}`;

        item.innerHTML = `<input type="radio" name="quiz-opt" value="${index}"> <span>${text}</span>`;

        

        item.onclick = function() {

            document.querySelectorAll(".option-item").forEach(el => el.classList.remove("selected"));

            item.classList.add("selected");

            item.querySelector("input").checked = true;

            selectedOptionIndex = index;

        };

        

        listHtml.appendChild(item);

    });

}



// 5. Verificarea răspunsului ales

function checkAnswer() {

    if (selectedOptionIndex === null) {

        alert("Te rugăm să selectezi o variantă de răspuns înainte de a trimite!");

        return;

    }



    const q = currentQuestions[currentQuestionIndex];

    const feedbackBox = document.getElementById("feedback-box");

    const feedbackText = document.getElementById("feedback-text");

    const explanationText = document.getElementById("explanation-text");



    document.querySelectorAll(".option-item").forEach(el => el.style.pointerEvents = "none");



    if (selectedOptionIndex === q.corect) {

        feedbackBox.className = "feedback-box feedback-success";

        feedbackText.innerHTML = "🎉 Corect! Ai obținut 4 puncte.";

        score += 4;

        document.getElementById("score-counter").innerText = `Scor: ${score} p`;

    } else {

        feedbackBox.className = "feedback-box feedback-error";

        const litereRăspuns = ["a", "b", "c", "d"];

        feedbackText.innerHTML = `❌ Greșit! Răspunsul corect era varianta <strong>${litereRăspuns[q.corect].toUpperCase()}</strong>.`;

        

        document.getElementById(`option-${q.corect}`).style.borderColor = "#48bb78";

        document.getElementById(`option-${q.corect}`).style.backgroundColor = "#c6f6d5";

    }



    explanationText.innerHTML = q.explicatie;

    feedbackBox.style.display = "block";

    

    document.getElementById("submit-btn").style.display = "none";

    document.getElementById("next-btn").style.display = "block";

}



// 6. Trecerea la următorul exercițiu

function nextQuestion() {

    currentQuestionIndex++;

    

    if (currentQuestionIndex < currentQuestions.length) {

        loadQuestion();

    } else {

        document.getElementById("question-container").innerHTML = `

            <div style="text-align: center; padding: 30px 10px;">

                <h3 style="color: #2b6cb0; font-size: 1.6rem; margin-bottom: 10px;">🎉 Felicitări! Ai finalizat testul.</h3>

                <p style="font-size: 1.2rem; color: #4a5568;">Scorul tău final este de <strong>${score} puncte</strong> dintr-un maxim de ${currentQuestions.length * 4} puncte alocate acestor grile.</p>

                <a href="subiecte.html" class="btn-primary" style="display:inline-block; margin-top: 20px; text-decoration:none; padding:10px 20px; background:#3182ce; color:white; border-radius:6px; font-weight:600;">Înapoi la arhivă</a>

            </div>

        `;

        document.getElementById("next-btn").style.display = "none";

        document.getElementById("submit-btn").style.display = "none";

        document.getElementById("feedback-box").style.display = "none";

    }

} 
