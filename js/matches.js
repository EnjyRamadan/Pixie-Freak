
$('#all').click(
    function()
    {
        $('#all').css(
            {
                backgroundColor:'#1a1a20',
                Animation:" glitch 0.3s infinite",
            }
        )
        $('#res').css(
            {
                backgroundColor:'rgba(180, 3, 3, 1)',
                Animation:"none",
            }
        )
        $('#up').css(
            {
                backgroundColor:'rgba(180, 3, 3, 1)',
                Animation:"none",
            }
        )
       
        $('.result').show()
        $('.upcoming').show()
        $('.result').attr("data-aos","fade-up");
        $('.upcoming').attr("data-aos","fade-up");
    
    }
)

$('#up').click(
    function()
    {
        $('#up').css(
            {
                backgroundColor:'#1a1a20',
                Animation:" glitch 0.3s infinite",
            }
        )
        $('#res').css(
            {
                backgroundColor:'rgba(180, 3, 3, 1)',
                Animation:"none",
            }
        )
        $('#all').css(
            {
                backgroundColor:'rgba(180, 3, 3, 1)',
                Animation:"none",
                
            }
        )
      
        $('.upcoming').show()
        $('.result').hide()
        $('.upcoming').removeAttr("data-aos");
    }
)

$('#res').click(
    function()
    {
        $('#res').css(
            {
                backgroundColor:'#1a1a20',
                Animation:" glitch 0.3s infinite",
                
            }
        )
        $('#all').css(
            {
                backgroundColor:'rgba(180, 3, 3, 1)',
                Animation:"none",
            }
        )
        $('#up').css(
            {
                backgroundColor:'rgba(180, 3, 3, 1)',
                Animation:"none",
            }
        )
        $('.result').show()
        $('.upcoming').hide()
        $('.result').removeAttr("data-aos");

      
    }
)

