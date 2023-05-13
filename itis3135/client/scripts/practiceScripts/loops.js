$(function() 
{
    if ($('main').length == 1 && $('#loopForm').length == 1 && $('#input').length == 1 && $('#loopSubmit').length == 1 && $('#loopResult').length == 1) 
    {
        $('#loopSubmit').click(function(event) 
        {
            event.preventDefault();
            const input = $('#input').val();

            if (input == 9) 
            {
                $('#loopResult').html('Correct');
            }
            else 
            {
                $('#loopResult').html('Incorrect. The correct answer was 9.');
            }
        })
    }
    else 
    {
        alert('Loop question not properly setup.');
    }
})