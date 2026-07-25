
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
