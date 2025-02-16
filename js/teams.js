
// BY HAIDY
function allSelected()
{

    document.getElementById('pubg').style.display='flex';
    document.getElementById('cod').style.display='flex';
    document.getElementById('fort').style.display='flex';
    document.getElementById('fort2').style.display='flex';
    document.getElementById('lol').style.display='flex';
    document.getElementById('lol2').style.display='flex';
}
function pubgSelected()
{
 
  document.getElementById('pubg').style.display='flex';
  document.getElementById('cod').style.display='none';
  document.getElementById('fort').style.display='none';
  document.getElementById('fort2').style.display='none';
  document.getElementById('lol').style.display='none';
  document.getElementById('lol2').style.display='none';
  console.log("noo");
}
function lolSelected()
{  
    document.getElementById('lol').style.display='flex';
    document.getElementById('lol2').style.display='flex';
    document.getElementById('cod').style.display='none';
    document.getElementById('fort').style.display='none';
    document.getElementById('fort2').style.display='none';
    document.getElementById('pubg').style.display='none';
}
function fortSelected()
{
    document.getElementById('fort').style.display='flex';
    document.getElementById('fort2').style.display='flex';
    document.getElementById('cod').style.display='none';
    document.getElementById('pubg').style.display='none';
    document.getElementById('lol').style.display='none';
    document.getElementById('lol2').style.display='none';
}
function codSelected()
{
    document.getElementById('cod').style.display='flex';
    document.getElementById('fort').style.display='none';
    document.getElementById('pubg').style.display='none';
    document.getElementById('lol').style.display='none';
    document.getElementById('lol2').style.display='none';
    document.getElementById('fort2').style.display='none';
    console.log(navPos);

}

// nav

let open=0;

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

$('body').keypress(function(e){
    console.log(String.fromCharCode( e.which ));
    console.log(e.which)
    if(e.which==097)
    {
     
        window.location.href = "../html/drNehal.html";
    }
 });
  $('body').keyup(function(e){
        console.log(String.fromCharCode( e.which ));
  });