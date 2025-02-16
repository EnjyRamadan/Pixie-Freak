
function getCookie(cname) {
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(';');
  for(let i = 0; i <ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}


function putCookieValues() {
  let email = getCookie("email");
  let password = getCookie("password");
  if (email != "") 
  {
  document.getElementById('email').value=email;
  document.getElementById('password').value=password;
  } 
 
}


putCookieValues();
