$(function () {
    if ($('main').length == 1 && $('#ifelseForm').length == 1 && $('#ifelseSubmit').length == 1 && $('#ifelseResult').length == 1) 
    {
        $('#ifelseForm').submit(function(event) 
        {
            event.preventDefault();
            const input = $('input[name=ifelse]:checked').attr('id');

            if (input == 'secondElif') 
            {
                $('#ifelseResult').text('Correct');
            }
            else 
            {
                $('#ifelseResult').text('Incorrect');
            }

            return false;
        })
    }
    else 
    {
        alert('ifelse form not setup.');
    }
  });