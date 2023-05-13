$(function() 
{
    if ($('main').length == 1 && $('#mathForm').length == 1 && $('#yes').length == 1 && $('#no').length == 1 && $('#mathSubmit').length == 1 && $('#mathResult').length == 1) 
    {
        $('#mathSubmit').click(function(event) 
        {
            event.preventDefault();

            if ($('#yes').prop('checked') == true) 
            {
                $('#mathResult').html('Sorry, that is incorrect.');
            }
            else if ($('#no').prop('checked') == true) 
            {
                $('#mathResult').html('Yes, that is correct!!!');
            }
            else 
            {
                $('#mathResult').html('An answer was not selected. Try again.');
            }
        })
    }
    else 
    {
        alert('mathFunctions file not properly setup.');
    }
})