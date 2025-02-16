<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>SIGN UP/LOGIN</title>
    <link rel="stylesheet" href="../css/signLoginForm.css">
        <!-- GOOGLE FONTS -->
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Cairo:wght@200;300;400;500;600;700;800;900;1000&display=swap"
          rel="stylesheet"/>
          <!-- FONT AWESOME -->
          <script src="https://kit.fontawesome.com/6b11d4a153.js" crossorigin="anonymous"></script>
          <!-- jQuery -->
          <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.1/jquery.min.js"></script>
          <!-- icon tab -->
          <link rel="icon" href="../images/blacklogo.ico">
</head>
<body>
<?php include 'load.php';?>
    <div class="container">
       
        <div class="nav">
            <div class="logo"><img src="../images/logo.png" alt="logo" /></div>
            <div class="nav-main">
              <!-- putting links inside href by Enjy -->
              <!-- html form by Haidy -->
             
              <a href="../html/home.php">HOME</a>
              <a href="../html/news.php">NEWS</a>
              <a href="../html/about.php">ABOUT US</a>
              <a href="../html/tournaments.html">TOURNAMENTS</a>
              <a href="teams.php">TEAMS</a>
              <a href="../html/streams.html">STREAMS</a>
              <a href="../html/matches.php">MATCHES</a>
              <a href="../html/gallery.php">GALLERY</a>
              
              <a class="bars"><i class="fa fa-bars" onclick="menu()" id="bars"></i></a>
  
              <div class="drop" id="drop">
                <ul>
                  <li ><a class="drop-menu" href="../html/sponsers.php">SPONSERS</a></li>
                  <li ><a class="drop-menu" href="../html/contact.php">CONTACT US</a></li>
                  <li ><a class="drop-menu" href="../html/feedback.php">FEEDBACK</a></li>
                  <li ><a class="drop-menu" href="../html/signLoginForm.php">SIGN UP / LOG IN</a></li>
                </ul>
              </div>
    
             
                  <!-- <i class="fa-solid fa-magnifying-glass search"></i> -->
                  <i class="fa-solid fa-user search"></i>
                 
               
            </div>
         </div>
     
         <!-- html by haidyy and enjyy -->
         <video autoplay loop muted class="back-video" style="transform:rotate(270deg) ;">
            <source  src="../images/pinterest.MP4" />
          </video>
  
          <div class="bigBox" id="big">
            <!--  -->
            <div class="left" id="left">
              <h2>Create Account</h2>
              <p>Welcome to the biggest E-Sports website in Egypt to join us you have to create an acccount so HURRY UP! </p>
              <button class="button1" id="btn2" onclick="sign()">SIGN UP</button>
            </div>
      
            <div class="right" id="right">
              <h2>Welcome Back!</h2>
              <p>To keep connected with us please login with your personal information.</p>
              <button class="button1" id="btn1" onclick="log()">LOG IN</button>
            </div>
          
            <div class="smallBox">
             
              <div class="SIGN-UP" id="small">
                <div class="txt" id="txt">
                  <div class="conta">
                    <form action="php/register.php" method="POST" class="form" id="sign" name="myform" onsubmit="return validation()" >
                      <h2 class="title">SIGN UP</h2>
                      <div class="input-field">
                        <i class="fas fa-user"></i>
                        <input type="text" placeholder="Full Name" name="username" required>
                        <div id="error"></div>
                      </div>
                      <div class="input-field">
                        <i class="fas fa-user"></i>
                        <input type="number" placeholder="Age" id="age" required name="registerage">
                        <p id="errorAge"></p>
                      </div>
                      <div class="input-field">
                        <i class="fas fa-phone"></i>
                        <input type="text" placeholder="Phone"  name="phonenumber" required name="phonenumber">
                        <div id="error2"></div>
                      </div>
                      <div class="input-field">
                        <i class="fas fa-envelope"></i>
                        <input type="text" placeholder="Email" name="email1" required>
                        <div id="error3"></div>
                      </div>
                      <div class="input-field">
                        <i class="fas fa-lock"></i>
                        <input type="password" placeholder="password" id="pass1" required name="registerpassword">
                      </div>
                      <div class="input-field">
                        <i class="fas fa-lock"></i>
                        <input type="password" placeholder=" confirm password" id="pass2" required name="registerconfirmpassword">
                      </div>
                      <p id="errorPass"></p>
               
                      <button type="submit" class="button2" id="btn21" onclick="submitt()" name="register" value="Register">SIGN UP</button>
                      <p class="social-text">or SIGN UP with social platform</p>
                      <div class="social-media">
                        <a href="#" class="social-icon">
                          <i class="fa-brands fa-facebook"></i>
                        </a>
                        <a href="#" class="social-icon">
                          <i class="fa-brands fa-google"></i>
                        </a>
                        <a href="#" class="social-icon">
                          <i class="fa-brands fa-twitter"></i>
                        </a>
      
                      </div>
                    </form>
                    <form action="../html/cookieForm.php" class="form" id="log" method="POST" name="form"  >
                      <h2 class="title">LOG IN</h2>
                      <div class="input-field">
                        <i class="fas fa-envelope"></i>
                        <input type="email" placeholder="Email" name="email" id="email">
                      </div>
                      <div class="input-field">
                        <i class="fas fa-lock"></i>
                        <input type="password" placeholder="password" name="password" id="password">
                      </div>
                      <a href="../html/forget.html">Forgot your password?</a>
                      <button type="submit" class="button2" id="btn22" name="login" value="Login">LOG IN </button>
                      <p class="social-text">or LOG IN with social platform</p>
                      <div class="social-media">
                        <a href="#" class="social-icon">
                          <i class="fa-brands fa-facebook"></i>
                        </a>
                        <a href="#" class="social-icon">
                          <i class="fa-brands fa-google"></i>
                        </a>
                        <a href="#" class="social-icon">
                          <i class="fa-brands fa-twitter"></i>
                        </a>
                       
                      </div>
                    </form>
                  </div>
              
               </div>
                  </div>
                </div>
              </div>
            </div>
      
           
    </div>
  
    <script src="../js/cookieForm.js"></script>
   <script src="../js/signLoginForm.js"></script>
    <script src="../js/home.js"></script>
</body>
</html>