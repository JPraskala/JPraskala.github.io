$(function() 
{
    if ($('footer').length == 1) 
    {
        const file = 'data/externalSites.json';
        const linkSeparator = ' | ';

        if ($('#externalLinks').length == 1) 
        {
            $.getJSON(file, function(data, text) 
            {
                if (text !== 'success') 
                {
                    alert('JSON file was not found!!!');
                    return;
                }
                else 
                {
                    const stringData = JSON.stringify(data);
                    let secondaryLinks = '';

                    if (stringData.trim().length == 0) 
                    {
                        alert('JSON file is empty');
                        return;
                    }
                    else 
                    {
                        $('#externalLinks').html("");
                        
                        $.each(data, function() 
                        {
                            $.each(this, function(key, value) 
                            {
                                secondaryLinks += `<a href=${value.url} target="_blank">${value.text}</a>${linkSeparator}`
                            })

                            secondaryLinks = secondaryLinks.slice(0, -linkSeparator.length);

                            $('#externalLinks').html(secondaryLinks);
                        })
                    }
                }
            })
        }
        else 
        {
            alert('Please create an element with an id of externalLinks. Must be 1 and only 1. Recommend a nav element.');
        }

        if ($('#validation').length == 1) 
        {
            $('#validation').html(
                `<a href="https://jigsaw.w3.org/css-validator/check/referer">
                    <img style="border:0;width:88px;height:31px" src="https://jigsaw.w3.org/css-validator/images/vcss" alt="Valid CSS!">
                </a>
                <a href="https://validator.w3.org/check?uri=referer" id="validation_link_html">
                    <img style="border:0;width:88px;height:31px" src="https://upload.wikimedia.org/wikipedia/commons/b/bb/W3C_HTML5_certified.png" alt="Validate webpage HTML!">
                </a>`
            )
        }
        else 
        {
            console.error('There should be one validation element in the footer element.');
        }

        if ($('#firm-certification').length == 1) 
        {
            $('#firm-certification').html(
                `Designed by
                <a href="https://webpages.charlotte.edu/jpraskal/itis3135/praskalaenterprise.com/">Praskala Enterprise</a>,
                <a href="https://www.freecodecamp.org/certification/JPraskala/responsive-web-design" target="_blank">Certified in HTML and CSS</a>,
                <a href="https://www.freecodecamp.org/certification/JPraskala/javascript-algorithms-and-data-structures" target="_blank">Certified in JS</a>`
            )
        }
        else 
        {
            console.error('A firm-certification element needs to be created in the footer element.');
        }
    }
    else 
    {
        alert('Must be 1 and only 1 footer element');
    }
})