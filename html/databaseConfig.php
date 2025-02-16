<?php
/* Database credentials */
define('DB_SERVER', 'localhost');    // Your server (localhost for local development)
define('DB_USERNAME', 'root');       // MySQL username
define('DB_PASSWORD', '');           // MySQL password (empty for XAMPP/WAMP default)
define('DB_NAME', 'pixiefreak');     // Your database name

/* Attempt to connect to MySQL database */
$conn = mysqli_connect(DB_SERVER, DB_USERNAME, DB_PASSWORD, DB_NAME);

/* Check connection */
if (!$conn) {
    die("ERROR: Could not connect. " . mysqli_connect_error());
} else {
    echo "Connected successfully!";
}
?>
