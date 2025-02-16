// document.getElementById('email0').value=' ';
// document.getElementById('password0').value=' ';

// document.cookie = email + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
// document.cookie = password + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
// function getCookie(cname) {
//   let name = cname + "=";
//   let decodedCookie = decodeURIComponent(document.cookie);
//   let ca = decodedCookie.split(';');
//   for(let i = 0; i <ca.length; i++) {
//     let c = ca[i];
//     while (c.charAt(0) == ' ') {
//       c = c.substring(1);
//     }
//     if (c.indexOf(name) == 0) {
//       return c.substring(name.length, c.length);
//     }
//   }
//   return "";
// }

// function checkCookie() {
//   let email = getCookie("email");
//   let password = getCookie("password");
//   if (email != "") 
//   {
//   document.getElementById('email0').value=email;
//   document.getElementById('password0').value=password;
//   console.log(email);
//   } 
 
// }




$("#big").animate(
  {
    height: "63%",
  }, 1000, function () {


    $("#small").show(1000);

    $("#small").animate(
      {
        width: "50%",

      }, 1000,
      function () {
        $("#txt").show(1000);
        $("#left").show(1000);
        $("#right").show(1000);
      })
  })
$("#btn1").click(function () {
  $(".SIGN-UP").animate({
    left: '50%',
  }, 800);
});

$("#btn2").click(function () {
  $(".SIGN-UP").animate({
    left: '0%',
  }, 800);
});


var valid = 1;
var valid1 = 1;
var valid2 = 1;
var valid3 = 1;
var valid4 = 1;

function submitt() {

  var pass1 = document.getElementById("pass1").value;
  var pass2 = document.getElementById("pass2").value;
  var age = document.getElementById("age").value;

  if (pass1 != pass2) {
    document.getElementById("errorPass").innerHTML = "Those passwords did not match. Try again.";
    valid = 0;
    console.log("55");
  }
  else if (pass1.length != 0) {
    if (pass1.match(/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{8,16}$/)) {
      document.getElementById("errorPass").innerHTML = " ";
      valid = 1;

    }
    else {
      console.log("55");
      document.getElementById("errorPass").innerHTML = "Password is not in the correct format.Try again.";
      valid = 0;

    }
  }


  if (age < 16 || age > 100) {
    if (age.length != 0)
      document.getElementById("errorAge").innerHTML = "Age is not valid";
    console.log("55");
    valid1 = 0;

  }
  else {
    document.getElementById("errorAge").innerHTML = " ";
    valid1 = 1;
  }
  console.log(valid);

  /*if (valid==1) 
  {
   $('#sign').prop('disabled', true);     
     return true; 
  }
  else
  {
   $('#sign').prop('disabled', false);
   return false;
  }*/
}


//  onmousemove = function(e){
//   //meat and potatoes of the snippet
//   var pos = e;
//   var dot;
//   dot = document.createElement('div');
//   dot.className = "dot";
//   dot.style.left = pos.x + "px";
//   dot.style.top = pos.y + "px";
//   document.body.appendChild(dot);


// the above is by Haidy

//below by enjy//
function log() {
  document.getElementById('log').style.opacity = "1";
  document.getElementById('sign').style.opacity = "0";
  document.getElementById('log').style.zIndex = "2";
  document.getElementById('sign').style.zIndex = "1";

}
function sign() {
  document.getElementById('log').style.opacity = "0";
  document.getElementById('sign').style.opacity = "1"
  document.getElementById('log').style.zIndex = "1";
  document.getElementById('sign').style.zIndex = "2";
}
var username = document.forms['myform']['username'];
var phonenumber = document.forms['myform']['phonenumber'];
var email1 = document.forms['myform']['email1'];
var error = document.getElementById('error');
var error2 = document.getElementById('error2');
var error3 = document.getElementById('error3');
var letters = /^[a-zA-Z]*$/;
var num = /^(\+201|01|00201)[0-2,5]{1}[0-9]{8}/;
function validation() {
  if (username.value == '') {
    error.innerHTML = "User Name Must Be Filled...!!";
    error.style.display = "block";
    valid2 = 0;
  }
  else {
    error.innerHTML = " ";
    valid2=1;
  }
  if (!username.value.match(letters)) {
    error.innerHTML = "User name must only contain alphabets!!!"
    error.style.display = "block";
    valid2= 0;
  }
  else {
    error.innerHTML = " ";
    valid2=1;
  }
  if (phonenumber.value == '') {
    error2.innerHTML = "phone number must be filled!!";
    error2.style.display = "block";
    valid3 = 0;
  }
  else {
    error2.innerHTML = " ";
valid3=1;
  }
  if (!phonenumber.value.match(num)) {
    error2.innerHTML = "phone number must 11 digit";
    error2.style.display = "block";
    valid3 = 0;
  }
  else {
    error2.innerHTML = " ";
    valid3=1;
  }
  if (email1.value == '') {
    error3.innerHTML = "email must be filled!!";
    error3.style.display = "block";
    valid4 = 0;
  }
  else {
    error3.innerHTML = " ";
    valid4=1;
  }
  if (!email1.value.match(new RegExp('[a-z0-9]+@[a-z]+\.[a-z]{2,3}'))) {
    error3.innerHTML = "email format is wrong ";
    error3.style.display = "block";
    valid4 = 0;
  }
  else {
    error3.innerHTML = " ";
    valid4=1;
  }
  console.log(valid);
  if (valid1 == 0||valid2==0||valid==0||valid3==0||valid4==0) {
    return false;
  }
  else if(valid1 == 1&&valid2==1&&valid==1&&valid3==1&&valid4==1) {
    return true;
  }

}