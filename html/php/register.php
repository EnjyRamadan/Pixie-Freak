<?php

if ($_POST) {
    if (isset($_POST['register']) && $_POST['register'] == "Register") {
        $email = $_POST['email1'];
        $username =$_POST['username'];
        $password = $_POST['registerpassword'];
        $age=$_POST['registerage'];
        $phone=$_POST['phonenumber'];
        include_once 'databaseConfig.php';
          global $link;
          $conn = $link;
          // step 3 : send data to database
          // 3.1 create sql query
          $sql = "INSERT INTO users (username, password, email, age, phone) VALUES ('" . $username. "' , '" . $password. "', '" . $email. "', '" . $age. "', '" . $phone. "' )";

          echo '<br>';
          // 3.2 execute query
          if ($conn->query($sql) === TRUE) {
          //step 4 : return database result
          echo'<script>alert("user registered")</script>';
          echo '<script>location.href="../home.php";</script>';
          } else {
          //step 4 : return database result
          echo "Error: " . $sql . "<br>" . $conn->error;
          } 
        //echo 'controller activated';


        
    }
} 
?>