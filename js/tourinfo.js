
$('#card1').click(function(){
    $(this).toggleClass('flipped');
  });

  $('#card2').click(function(){
    $(this).toggleClass('flipped');
  });

  $('#card3').click(function(){
    $(this).toggleClass('flipped');
  });

  $('#card4').click(function(){
    $(this).toggleClass('flipped');
  });

  $('#card5').click(function(){
    $(this).toggleClass('flipped');
  });

  $('#card6').click(function(){
    $(this).toggleClass('flipped');
  });


$('#sDot').click(
    function()
    {
     
            $('.first').css(
                {
                    transform:'translateX(-100%)'
                }
            )
            $('.second').css(
                {
                    transform:'translateX(-100%)'
                }
            )
           
         
            $('#sDot').css({
                transform:'scale(1.2)',
                opacity:'1',
            })
            $('#fDot').css({
                transform:'scale(1)',
                opacity:'0.7',
            })
    }
  );


  $('#fDot').click(
    function()
    {
     
            $('.second').css(
                {
                    transform:'translateX(10%)'
                }
            )
            $('.first').css(
                {
                    transform:'translateX(2%)'
                }
            )
            $('#fDot').css({
                transform:'scale(1.2)',
                opacity:'1',
            })
            $('#sDot').css({
                transform:'scale(1)',
                opacity:'0.7',
            })
          
    }
  );


var click=0;
$('#reg').click(function(){
 
if (click==0) {
  $("#r1").hide();
  $("#r2").show();
  click=1;
}
else{
  $("#r2").hide();
  $("#r1").show();
  click=0;
}

 
  
  
});
