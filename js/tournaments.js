//  BY Haidy
 
 let pc,ac,lc,fc;

 allClicked();
function pubgClicked(){
    document.getElementById('pubg').style.backgroundColor='rgba(180, 3, 3, 0.9)';
    document.getElementById('all').style.backgroundColor='rgba(180, 3, 3, 0.5)';
    document.getElementById('fort').style.backgroundColor='rgba(180, 3, 3, 0.5)';
    document.getElementById('lol').style.backgroundColor='rgba(180, 3, 3, 0.5)'; 
    console.log(document.getElementById('pubg'));
    document.getElementById('Pubg').style.display='flex';
    document.getElementById('Fort').style.display='none';
    document.getElementById('Fort2').style.display='none';
    document.getElementById('Lol').style.display='none';
     pc=1;
     ac=0;
     lc=0;
     fc=0;
}
function allClicked(){
    document.getElementById('all').style.backgroundColor='rgba(180, 3, 3, 0.9)';
    document.getElementById('pubg').style.backgroundColor='rgba(180, 3, 3, 0.5)';
    document.getElementById('fort').style.backgroundColor='rgba(180, 3, 3, 0.5)';
    document.getElementById('lol').style.backgroundColor='rgba(180, 3, 3, 0.5)';

    document.getElementById('Pubg').style.display='flex';
    document.getElementById('Fort').style.display='flex';
    document.getElementById('Fort2').style.display='flex';
    document.getElementById('Lol').style.display='flex';
     pc=0;
     ac=1;
     lc=0;
     fc=0;
}
function lolClicked(){
    document.getElementById('lol').style.backgroundColor='rgba(180, 3, 3, 0.9)';
    document.getElementById('all').style.backgroundColor='rgba(180, 3, 3, 0.5)';
    document.getElementById('fort').style.backgroundColor='rgba(180, 3, 3, 0.5)';
    document.getElementById('pubg').style.backgroundColor='rgba(180, 3, 3, 0.5)';

    document.getElementById('Lol').style.display='flex';
    document.getElementById('Fort').style.display='none';
    document.getElementById('Fort2').style.display='none';
    document.getElementById('Pubg').style.display='none';
     pc=0;
     ac=0;
     lc=1;
     fc=0;
}
function fortClicked(){
    document.getElementById('fort').style.backgroundColor='rgba(180, 3, 3, 0.9)';
    document.getElementById('all').style.backgroundColor='rgba(180, 3, 3, 0.5)';
    document.getElementById('pubg').style.backgroundColor='rgba(180, 3, 3, 0.5)';
    document.getElementById('lol').style.backgroundColor='rgba(180, 3, 3, 0.5)';

    document.getElementById('Fort').style.display='flex';
    document.getElementById('Fort2').style.display='flex';
    document.getElementById('Pubg').style.display='none';
    document.getElementById('Lol').style.display='none';
     pc=0;
     ac=0;
     lc=0;
     fc=1;
}

function hoverAll(){
    document.getElementById('all').style.backgroundColor='rgba(180, 3, 3, 0.9)';
    if(pc==0){ document.getElementById('pubg').style.backgroundColor='rgba(180, 3, 3, 0.5)';}
    if(fc==0){    document.getElementById('fort').style.backgroundColor='rgba(180, 3, 3, 0.5)';}
    if(lc==0){ document.getElementById('lol').style.backgroundColor='rgba(180, 3, 3, 0.5)';}
   
}

function hoverPubg()
{
    document.getElementById('pubg').style.backgroundColor='rgba(180, 3, 3, 0.9)';
    if(ac==0){  document.getElementById('all').style.backgroundColor='rgba(180, 3, 3, 0.5)';}
    if(fc==0){    document.getElementById('fort').style.backgroundColor='rgba(180, 3, 3, 0.5)';}
    if(lc==0){ document.getElementById('lol').style.backgroundColor='rgba(180, 3, 3, 0.5)';}
}

function hoverLol(){
    document.getElementById('lol').style.backgroundColor='rgba(180, 3, 3, 0.9)';
    if(pc==0){ document.getElementById('pubg').style.backgroundColor='rgba(180, 3, 3, 0.5)';}
    if(ac==0){  document.getElementById('all').style.backgroundColor='rgba(180, 3, 3, 0.5)';}
   if(fc==0){    document.getElementById('fort').style.backgroundColor='rgba(180, 3, 3, 0.5)';}

}

function hoverFort()
{
    document.getElementById('fort').style.backgroundColor='rgba(180, 3, 3, 0.9)';
    if(pc==0){ document.getElementById('pubg').style.backgroundColor='rgba(180, 3, 3, 0.5)';}
    if(ac==0){  document.getElementById('all').style.backgroundColor='rgba(180, 3, 3, 0.5)';}
    if(lc==0){ document.getElementById('lol').style.backgroundColor='rgba(180, 3, 3, 0.5)';}
}

function nohoverAll(){
    
    if(ac==0)
    {
        document.getElementById('all').style.backgroundColor='rgba(180, 3, 3, 0.5)';
        console.log('n');
    }   
}

function nohoverPubg(){
    if(pc==0){document.getElementById('pubg').style.backgroundColor='rgba(180, 3, 3, 0.5)';}
}

function nohoverLol(){
    if(lc==0){document.getElementById('lol').style.backgroundColor='rgba(180, 3, 3, 0.5)';}
}

function nohoverFort(){
    if(fc==0){document.getElementById('fort').style.backgroundColor='rgba(180, 3, 3, 0.5)';}
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