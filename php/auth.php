<?php
// Sesiunea trebuie pornită înaintea oricărui output, ca să funcționeze
// pe orice ramură (login reușit, login eșuat, register etc.)
session_start();

// 1. Conexiunea la baza de date din XAMPP
$servername = "127.0.0.1:3307";
$username_db = "root"; // Utilizatorul default din XAMPP
$password_db = "";     // Parola default este goală
$dbname = "utilizatori";

$conn = new mysqli($servername, $username_db, $password_db, $dbname, 3307);

// Verificăm dacă există erori de conexiune
if ($conn->connect_error) {
    die("Conexiune eșuată: " . $conn->connect_error);
}

// 2. Verificăm dacă datele au fost trimise prin POST
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $user   = isset($_POST['username']) ? trim($_POST['username']) : '';
    $pass   = isset($_POST['password']) ? $_POST['password'] : '';
    $action = isset($_POST['action']) ? $_POST['action'] : '';

    if (trim($user) === '' || trim($pass) === '') {
        die("Te rog completează toate câmpurile.");
    }

    // --- LOGICA DE ÎNREGISTRARE ---
    if ($action === "register") {
        $confirm_pass = isset($_POST['confirmPassword']) ? $_POST['confirmPassword'] : '';

        if ($pass !== $confirm_pass) {
            header("Location: ../pages/creare-cont.html?eroare=match");
            exit;
        }

        // Verificăm ÎNAINTE de INSERT dacă username-ul e deja folosit
        $checkStmt = $conn->prepare("SELECT id FROM ut_db WHERE username = ?");
        $checkStmt->bind_param("s", $user);
        $checkStmt->execute();
        $checkStmt->store_result();

        if ($checkStmt->num_rows > 0) {
            $checkStmt->close();
            header("Location: ../pages/creare-cont.html?eroare=user_exists");
            exit;
        }
        $checkStmt->close();

        // Securizăm parola prin hashing înainte de salvare
        // (password_hash produce un șir de caractere, nu un număr -
        //  coloana password_hash din baza de date trebuie să fie VARCHAR(255), nu INT!)
        $hashed_password = password_hash($pass, PASSWORD_DEFAULT);

        // Pregătim query-ul pentru a evita SQL Injection
        $stmt = $conn->prepare("INSERT INTO ut_db (username, password_hash) VALUES (?, ?)");
        $stmt->bind_param("ss", $user, $hashed_password);

        if ($stmt->execute()) {
            // Logăm automat utilizatorul nou creat și ținem minte sesiunea
            session_regenerate_id(true);
            $_SESSION['user_id']  = $stmt->insert_id;
            $_SESSION['username'] = $user;
            // Setez cookie cu username pentru JavaScript
            setcookie('username', $user, time() + (30 * 24 * 60 * 60), '/'); // 30 zile

            header("Location: ../index.html");
            exit;
        } else {
            // Fallback în caz de condiție de cursă (două request-uri simultane) -
            // dacă adaugi și un index UNIQUE pe username (recomandat), MySQL va arunca eroarea 1062 aici.
            if ($conn->errno == 1062) {
                header("Location: ../pages/creare-cont.html?eroare=user_exists");
            } else {
                die("Eroare: " . $stmt->error);
            }
            $stmt->close();
            exit;
        }
    }

    // --- LOGICA DE AUTENTIFICARE (LOGIN) ---
    elseif ($action === "login") {
        $stmt = $conn->prepare("SELECT id, password_hash FROM ut_db WHERE username = ? ORDER BY id DESC LIMIT 1");
        $stmt->bind_param("s", $user);
        $stmt->execute();
        $stmt->store_result();

        if ($stmt->num_rows > 0) {
            $stmt->bind_result($id, $hashed_password);
            $stmt->fetch();

            // Verificăm dacă parola introdusă corespunde cu cea criptată din DB
            if (password_verify($pass, $hashed_password)) {
                // Pornim / populăm sesiunea utilizatorului - site-ul va ține minte
                // că e logat până la logout sau până expiră sesiunea din PHP.
                session_regenerate_id(true);
                $_SESSION['user_id']  = $id;
                $_SESSION['username'] = $user;
                // Setez cookie cu username pentru JavaScript
                setcookie('username', $user, time() + (30 * 24 * 60 * 60), '/'); // 30 zile

                header("Location: ../index.html");
                exit;
            } else {
                header("Location: ../pages/login.html?eroare=1");
                exit;
            }
        } else {
            header("Location: ../pages/login.html?eroare=1");
            exit;
        }
        $stmt->close();
    }
}

$conn->close();
