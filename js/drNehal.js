let i=0;
$("#no").hover(function()
{  $("#no").css('position','absolute');
  if (i==0) {
    $("#no").css({"left":"120%","top": "550%"});
     i++;
  }
  else if(i==1)
  {
    $("#no").css({"right":"40%","top": "45%"});
     i++;
  }
  else if(i==2)
  {
    $("#no").css({"left":"40%","top": "90%"});
     i++;
  }
  else if(i==3)
  {
    $("#no").css({"left":"-80%","top": "80%"});
     i++;
  }
  else if(i==4)
  {
    $("#no").css({"right":"0%","top": "110%"});
     i++;
  }
  else if(i==4)
  {
    $("#no").css({"right":"-75%","top": "-45%"});
     i++;
  }
  else if(i==5)
  {
    $("#no").css({"left":"-10%","bottom": "60%"});
     i++;
  }
  else if(i==6)
  {
    $("#no").css({"right":"10%","bottom": "5%"});
     i++;
  }
  else if(i==7)
  {
    $("#no").css({"left":"-50%","bottom": "5%"});
     i=0;
  }
});

$("#yes").click(function()
{   audPlay();
    $("#container").hide(1);
    $("#alert").hide(1);
    $("#gif").show(1);
    
});

$("#btn").click(function(){
    $("#alert").slideDown("slow");
})



var aud = document.getElementById("aud");

function audPlay() {
    aud.play();
}

function audPause() {
    aud.pause();
}