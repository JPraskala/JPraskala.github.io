$(function() 
{
    if ($('main').length == 1 && $('#stringForm').length == 1 && $('#true').length == 1 && $('#false').length == 1 && $('#stringSubmit').length == 1 && $('#stringResult').length == 1) 
    {
        $('#stringSubmit').click(function(event) 
        {
            event.preventDefault();

            if ($('#true').prop('checked') == true) 
            {
                $('#stringResult').html('That is incorrect.');
            }
            else if ($('#false').prop('checked') == true) 
            {
                $('#stringResult').html('That is correct!!!');
            }
            else 
            {
                $('#stringResult').html('An answer was not selected. Try again.');
            }
        })
    }
    else 
    {
        alert('stringFunctions file not properly setup.');
    }
})