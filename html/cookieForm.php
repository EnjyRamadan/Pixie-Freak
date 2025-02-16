<?php
session_start(); // Start session

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    if (isset($_POST['login']) && $_POST['login'] == "Login") {
        
        // Step 1: Get user input safely
        $email = filter_var($_POST['email'], FILTER_SANITIZE_EMAIL);
        $password = $_POST['password']; // Do not sanitize passwords
        
        // Step 2: Connect to database
        include_once 'php/databaseConfig.php';
        global $link;
        $conn = $link;

        // Step 3: Use prepared statement (prevents SQL injection)
        $sql = "SELECT id, email, password FROM users WHERE email = ?";
        $stmt = $conn->prepare($sql);
        $stmt->bind_param("s", $email);
        $stmt->execute();
        $result = $stmt->get_result();

        // Step 4: Check if user exists
        if ($result->num_rows > 0) {
            $user = $result->fetch_assoc();
            
            // Step 5: Verify hashed password
            if (password_verify($password, $user['password'])) {
                
                // Step 6: Store session (Secure alternative to cookies)
                $_SESSION['user_id'] = $user['id'];
                $_SESSION['email'] = $user['email'];
                
                echo '<script>alert("Login successful!"); location.href="home.php";</script>';
            } else {
                echo '<script>alert("Incorrect password!"); location.href="index.html";</script>';
            }
        } else {
            echo '<script>alert("User not found!"); location.href="index.html";</script>';
        }

        // Close statement & connection
        $stmt->close();
        $conn->close();
    }
}
?>
