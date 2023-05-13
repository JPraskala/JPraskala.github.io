$(function() 
{
    if ($('main').length == 1 && $('#functionForm').length == 1 && $('#answer').length == 1 && $('#functionSubmit').length == 1 && $('#functionResult').length == 1) 
    {
        $('#functionSubmit').click(function(event) 
        {
            event.preventDefault();
            const answer = $('#answer').val();

            if (answer == 'return a + b' || answer == 'return b + a') 
            {
                $('#functionResult').html('Correct');
            }
            else 
            {
                $('#functionResult').html(
                    'Incorrect. The answer should be return a + b or return b + a.'
                );
            }
        })
    }
    else
    {
       alert('functions file not properly setup.'); 
    }
})