<?php

if ($_POST) {
    if (isset($_POST['login']) && $_POST['login'] == "Login") {
        

         
        // step 1 : Get The data from the inputs
       
        $email = $_POST['email'];
        $password = $_POST['password'];
  
        
       
            // $email = $_POST['email'];
            // $password = $_POST['password'];
         
          
        // step 2 : connect to database
        include_once 'databaseConfig.php';
        global $link;
        $conn = $link;
        // step 3 : send data to database
        // 3.1 create sql query
        $sql = "select * from users where email='" . $email . "' and password='" . $password. "'";
        // 3.2 execute query
        $res = $conn->query($sql);
        //check if query returned more than 1 row
        if ($res->num_rows > 0) {
          
            echo'<script>alert("user found")</script>';
            // echo '<script>location.href="../home.php";</script>';
        } else {
            echo'<script>alert("error: user not found")</script>';
            // echo '<script>location.href="../index.html";</script>';
        }
        // More on Database : https://www.w3schools.com/php/php_mysql_intro.asp
        // CRUD Operation example : https://www.tutorialrepublic.com/php-tutorial/php-mysql-crud-application.php
        // CRUD Source Code : https://drive.google.com/file/d/1KI2cXr_zibgu6-W8ypKcK5T1kyrF2QnA/view?usp=sharing
    }
} 


