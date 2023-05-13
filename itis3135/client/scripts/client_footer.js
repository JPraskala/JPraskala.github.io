$(function()
{
    const pathname = String(location.pathname.split("/").splice(-1));
    if ($('footer').length == 1) 
    {
        if ($('#client-validation').length == 1) 
        {
            $('#client-validation').html(
                `<a href="https://jigsaw.w3.org/css-validator/check/referer" id="validation_link_css">
                    <img style="border:0;width:88px;height:31px" src="https://jigsaw.w3.org/css-validator/images/vcss" alt="Valid CSS!">
                </a>
                <a href="https://validator.w3.org/check?uri=referer" id="validation_link_html">
                    <img style="border:0;width:88px;height:31px" src="https://upload.wikimedia.org/wikipedia/commons/b/bb/W3C_HTML5_certified.png" alt="Validate webpage HTML!">
                </a>
                `
            );
        }
        else 
        {
            alert('Must be 1 and only 1 element with an id of client-validation.');
        }

        if ($('#firm-certification-client').length == 1) 
        {
            $('#firm-certification-client').html(
                `Designed by
                <a href="https://webpages.charlotte.edu/jpraskal/itis3135/praskalaenterprise.com/">Praskala Enterprise</a>,
                <a href="https://www.freecodecamp.org/certification/JPraskala/responsive-web-design" target="_blank">Certified in HTML and CSS</a>,
                <a href="https://www.freecodecamp.org/certification/JPraskala/javascript-algorithms-and-data-structures" target="_blank">Certified in JS</a>`
            );
        }
        else 
        {
            alert('Must be 1 and only 1 element with an id of firm-certification-client');
        }

        if ($('#practice').length == 1 && (pathname == 'about.html' || pathname == 'index.html')) 
        {
            $('#practice').html(
                "<a href='practice/dataTypes.html'>Click here to start practicing.</a>"
            );
        }
        

        if ($('#mainPage').length == 1) 
        {
            $('#mainPage').html("<a href='/client/index.html'>Click to go back to the home page.</a>");
        }
    }
    else 
    {
        alert('Must be 1 and only 1 footer element');
    }
})