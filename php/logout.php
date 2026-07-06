<?php
session_start();
$_SESSION = array();

// Șterg cookie-ul cu username
setcookie('username', '', time() - 3600, '/');

session_destroy();
header("Location: ../index.html");
exit;
?>
