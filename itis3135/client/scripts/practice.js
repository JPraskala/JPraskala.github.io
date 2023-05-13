$(function() 
{
    if ($('header').length == 1 && $('h1').length == 1 && $('#practice-pages').length == 1)  
    {
        const pathname = String(location.pathname.split('/').splice(-1));
        
        switch (pathname) 
        {
            case 'dataTypes.html':
                $('h1').html('DataTypes in Python.');
                break;
            case 'ifelse.html':
                $('h1').html('If/Else statements in Python.');
                break;
            case 'loops.html':
                $('h1').html('Loops in Python.');
                break;
            case 'mathFunctions.html':
                $('h1').html('Math Functions in Python.');
                break;
            case 'stringFunctions.html':
                $('h1').html('String functions in Python.');
                break;
            case 'functions.html':
                $('h1').html('Python functions.');
                break;
            default:
                alert('Practice page not found.');
                break;
        }

        const file = '/client/data/practiceLinks.json';
        const linkSeparator = ' | ';

        $.getJSON(file, function(data, text) 
        {
            if (text !== 'success') 
            {
                alert('Practice Links JSON file was not found.');
                return;
            }
            else 
            {
                const stringData = JSON.stringify(data);
                let practiceLinks = '';

                if (stringData.trim().length == 0) 
                {
                    alert('JSON file is empty.');
                    return;
                }
                else 
                {
                    $('#practice-pages').html("");

                    $.each(data, function() 
                    {
                        $.each(this, function(key, value) 
                        {
                            practiceLinks += `<a href=${value.url} target=_self>${value.text}</a>${linkSeparator}`
                        })

                        practiceLinks = practiceLinks.slice(0, -linkSeparator.length);

                        $('#practice-pages').html(practiceLinks);
                    })
                }
            }
        })
    }
    else 
    {
        alert('Practice page does not have a header, an h1, and a nav element with id practice-pages.');
    }
})