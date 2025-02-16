// $('#btn-send').click(
//     function(){
//         let msg=document.getElementById('txt-msg').value;
//         if (msg!=' ')
//         {
//            var div1=document.createElement('div');
//            div1.className=('txt1');
           
//         }
//     }
// )




$('#light').click(
    function(){
        $('#light').css({
            boxShadow:`inset -2px -2px 6px rgba(255, 255, 255, .7),
                 inset -2px -2px 4px rgba(255, 255, 255, .5),
                inset 2px 2px 2px rgba(255, 255, 255, .075),
                inset 2px 2px 4px rgba(0, 0, 0, .15)`,
        })

        $('#dark').css({
            boxShadow:`-6px -6px 14px rgba(255, 255, 255, .7),
            -6px -6px 10px rgba(255, 255, 255, .5),
            6px 6px 8px rgba(255, 255, 255, .075),
            6px 6px 10px rgba(0, 0, 0, .15)`,
        })
        $('button').css(
            {
                backgroudColor:'#efefef',
            }
        )

        $('#sett').css({
            color:'#333',
        })
    }
)


$('#dark').click(
    function(){
        $('#dark').css({
            boxShadow:`inset -2px -2px 6px rgba(255, 255, 255, .7),
                 inset -2px -2px 4px rgba(255, 255, 255, .5),
                inset 2px 2px 2px rgba(255, 255, 255, .075),
                inset 2px 2px 4px rgba(0, 0, 0, .15)`,


          
        })

        $('#light').css({
            boxShadow:`-6px -6px 14px rgba(255, 255, 255, .7),
            -6px -6px 10px rgba(255, 255, 255, .5),
            6px 6px 8px rgba(255, 255, 255, .075),
            6px 6px 10px rgba(0, 0, 0, .15)`,

        })
       
        $('#sett').css({
            color:'white',
        })
    }
)



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

function setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    let expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
    console.log(document.cookie);
    CookieValues();
  }


  
  function CookieValues() {
    let theme = getCookie("theme");

    if (theme == "dark") 
    {      console.log(5);
           document.getElementById('con').style.backgroundColor='#111';
    }
    else{
        document.getElementById('con').style.backgroundColor='#FFF';
    } 
   
  }
  
  
  CookieValues();

var btn=0;
$(".toggle").hide();

  $(".sett").click(function(){
    
     if(btn==0)
     {
        $(".toggle").show();
        document.getElementById("light").click();
        btn=1;
     }
     else
     {
        $(".toggle").hide();
        btn=0;
     }
  })