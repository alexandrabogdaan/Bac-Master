<?php
// 1. Conexiunea la baza de date din XAMPP
$servername = "localhost";
$username_db = "root"; // Utilizatorul default din XAMPP
$password_db = "";     // Parola default este goală
$dbname = "platforma_elevi";

$conn = new mysqli($servername, $username_db, $password_db, $dbname);

// Verificăm dacă există erori de conexiune
if ($conn->connect_error) {
    die("Conexiune eșuată: " . $conn->connect_error);
}

// 2. Verificăm dacă datele au fost trimise prin POST
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $user = trim($_POST['username']);
    $pass = $_POST['password'];
    $action = $_POST['action']; // "login" sau "register" din valoarea butonului submit

    if (empty($user) || empty($pass)) {
        die("Te rog completează toate câmpurile.");
    }

    // --- LOGICA DE ÎNREGISTRARE ---
    if ($action === "register") {
        $confirm_pass = $_POST['confirmPassword'];

        if ($pass !== $confirm_pass) {
            die("Parolele nu se potrivesc.");
        }

        // Securizăm parola prin hashing înainte de salvare
        $hashed_password = password_hash($pass, PASSWORD_BCRYPT);

        // Pregătim query-ul pentru a evita SQL Injection
        $stmt = $conn->prepare("INSERT INTO utilizatori (username, password) VALUES (?, ?)");
        $stmt->bind_param("ss", $user, $hashed_password);

        if ($stmt->execute()) {
            echo "<script>alert('Cont creat cu succes!'); window.location.href='index.html';</script>";
        } else {
            if ($conn->errno == 1062) { // Eroare de tip Duplicate Entry (username deja existent)
                echo "<script>alert('Acest nume de utilizator este deja luat.'); window.history.back();</script>";
            } else {
                echo "Eroare: " . $stmt->error;
            }
        }
        $stmt->close();
    } 
    
    // --- LOGICA DE AUTENTIFICARE (LOGIN) ---
    elseif ($action === "login") {
        $stmt = $conn->prepare("SELECT id, password FROM utilizatori WHERE username = ?");
        $stmt->bind_param("s", $user);
        $stmt->execute();
        $stmt->store_result();

        if ($stmt->num_rows > 0) {
            $stmt->bind_result($id, $hashed_password);
            $stmt->fetch();

            // Verificăm dacă parola introdusă corespunde cu cea criptată din DB
            if (password_verify($pass, $hashed_password)) {
                // Pornim sesiunea utilizatorului
                session_start();
                $_SESSION['user_id'] = $id;
                $_SESSION['username'] = $user;

                echo "<script>alert('Logare reușită! Bine ai venit, $user.'); window.location.href='../index.html';</script>";
            } else {
                echo "<script>alert('Parolă incorectă.'); window.history.back();</script>";
            }
        } else {
            echo "<script>alert('Utilizatorul nu există.'); window.history.back();</script>";
        }
        $stmt->close();
    }
}

$conn->close();
?>