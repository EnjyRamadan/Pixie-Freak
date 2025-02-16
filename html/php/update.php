<?php

if ($_POST) 
{
    if (isset($_POST['forget']) && $_POST['forget'] == "Forget") 
    {
        
        // step 1 : Get The data from the inputs
        $email = $_POST['email2'];
        $password = $_POST['password1'];
        // step 2 : connect to database
        include_once 'databaseConfig.php';
        global $link;
        $conn = $link;
        // step 3 : send data to database
        // 3.1 create sql query
        $sql = "update users set password='" . $password. "' where email='" . $email . "'";

        // $sql = "select * from users where email='" . $email . "' and password='" . $password. "'";
        // 3.2 execute query
        $res = $conn->query($sql);
        // 3.2 execute query
      
            echo '<script>location.href="../signLoginForm.php";</script>';
       
         
           
        // More on Database : https://www.w3schools.com/php/php_mysql_intro.asp
        // CRUD Operation example : https://www.tutorialrepublic.com/php-tutorial/php-mysql-crud-application.php
        // CRUD Source Code : https://drive.google.com/file/d/1KI2cXr_zibgu6-W8ypKcK5T1kyrF2QnA/view?usp=sharing
    }
} 

