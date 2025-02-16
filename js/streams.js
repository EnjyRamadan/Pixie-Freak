//  BY Haidy
 
let yc,ac,tc;

allClicked();

function allClicked(){
   document.getElementById('all').style.backgroundColor='rgba(180, 3, 3, 0.9)';
   document.getElementById('youtube').style.backgroundColor='rgba(180, 3, 3, 0.5)';
   document.getElementById('twitch').style.backgroundColor='rgba(180, 3, 3, 0.5)';
  

   document.getElementById('Youtube').style.display='flex';
   document.getElementById('Youtube2').style.display='flex';
   document.getElementById('Twitch2').style.display='flex';
   document.getElementById('Twitch1').style.display='flex';
   document.getElementById('Youtube1').style.display='flex';
   document.getElementById('Twitch').style.display='flex';
    
    ac=1;
    tc=0;
    yc=0;
    console.log(document.getElementById('all'));
}
function youtubeClicked(){
   document.getElementById('youtube').style.backgroundColor='rgba(180, 3, 3, 0.9)';
   document.getElementById('all').style.backgroundColor='rgba(180, 3, 3, 0.5)';
   document.getElementById('twitch').style.backgroundColor='rgba(180, 3, 3, 0.5)';

   document.getElementById('Youtube').style.display='flex';
   document.getElementById('Youtube1').style.display='flex';
   document.getElementById('Youtube2').style.display='flex';
   document.getElementById('Twitch').style.display='none';
   document.getElementById('Twitch1').style.display='none';
   document.getElementById('Twitch2').style.display='none';
  
    ac=0;
    yc=1;
    tc=0;
}
function twitchClicked(){
   document.getElementById('twitch').style.backgroundColor='rgba(180, 3, 3, 0.9)';
   document.getElementById('all').style.backgroundColor='rgba(180, 3, 3, 0.5)';
   document.getElementById('youtube').style.backgroundColor='rgba(180, 3, 3, 0.5)';

   document.getElementById('Youtube1').style.display='none';
   document.getElementById('Youtube2').style.display='none';
   document.getElementById('Youtube').style.display='none';
   document.getElementById('Twitch').style.display='flex';
   document.getElementById('Twitch1').style.display='flex';
   document.getElementById('Twitch2').style.display='flex';
    
    ac=0;
    yc=0;
    tc=1;
}

function hoverAll(){
   document.getElementById('all').style.backgroundColor='rgba(180, 3, 3, 0.9)';
   if(yc==0){ document.getElementById('youtube').style.backgroundColor='rgba(180, 3, 3, 0.5)';}
   if(tc==0){    document.getElementById('twitch').style.backgroundColor='rgba(180, 3, 3, 0.5)';}  
}

function hoverYoutube()
{
   document.getElementById('youtube').style.backgroundColor='rgba(180, 3, 3, 0.9)';
   if(ac==0){  document.getElementById('all').style.backgroundColor='rgba(180, 3, 3, 0.5)';}
   if(tc==0){    document.getElementById('twitch').style.backgroundColor='rgba(180, 3, 3, 0.5)';}
}

function hoverTwitch(){
   document.getElementById('twitch').style.backgroundColor='rgba(180, 3, 3, 0.9)';
   if(yc==0){ document.getElementById('youtube').style.backgroundColor='rgba(180, 3, 3, 0.5)';}
   if(ac==0){  document.getElementById('all').style.backgroundColor='rgba(180, 3, 3, 0.5)';}

}

function nohoverAll(){
   
   if(ac==0)
   {
       document.getElementById('all').style.backgroundColor='rgba(180, 3, 3, 0.5)';
   }   
}

function nohoverYoutube(){
   if(yc==0){document.getElementById('youtube').style.backgroundColor='rgba(180, 3, 3, 0.5)';}
}

function nohoverTwitch(){
   if(tc==0){document.getElementById('twitch').style.backgroundColor='rgba(180, 3, 3, 0.5)';}
}

// navv

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