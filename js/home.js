
let open=0;
console.log(5);
function menu()
{

  
    if(open==0)
    {  
        document.getElementById('drop').style. animationName="dropAppear";
        document.getElementById('drop').style. opacity="1";
        document.getElementById('drop').style. display="block";
        open=1;
    }
    else
    {    
        document.getElementById('drop').style. animationName="dropHide";    
       open=0;
    }
   
}

// $('body').keypress(function(e){
//     console.log(String.fromCharCode( e.which ));
//     console.log(e.which)
//     if(e.which==097)
//     {
     
//         window.location.href = "../html/drNehal.html";
//     }
//  });
//   $('body').keyup(function(e){
//         console.log(String.fromCharCode( e.which ));
//   });