$(function() 
{
    if ($('header').length == 1) 
    {
        const pathname = String(location.pathname.split('/').splice(-1))
        switch (pathname) 
        {
            case "index.html":
                $('h1').html("Jacob's PyLearn")
                break
            case 'about.html':
                $('h1').html("About Jacob's PyLearn")
                break
            case 'FAQ.html':
                $('h1').html('FAQ')
                break
            case 'contact_us.html':
                $('h1').html('Submit your Question')
                break
            case 'additionalPractice.html':
                $('h1').html('Additional Resources');
                break;
            default:
                alert('h1 not created or blank for this page.')
                break
        }

        const pages = {
            "1": {
                "url": "index.html",
                "text": 'Home',
                "alt": "Home"
            },
            "2": {
                "url": "about.html",
                "text": "About Us",
                "alit": "About Us"
            },
            "3": {
                "url": "FAQ.html",
                "text": "FAQ",
                "alt": "FAQ"
            },
            "4": {
                "url": "contact_us.html",
                "text": "Contact Us",
                "alt": "Contact Us"
            },
            "5": {
                "url": "additionalPractice.html",
                "text": "Extra Resources",
                "alt": "Extra Resources"
            }
        }

        const linkSeparator = ' | '
        let htmlString = ''

        for (let id in pages) 
        {
            if (pathname === pages[id]['url']) 
            {
                htmlString += pages[id]["text"]
            }
            else 
            {
                htmlString += `<a href="${pages[id]['url']}"> ${pages[id]['text']}</a>`
            }

            if (Number(id) < Object.keys(pages).length) 
            {
                htmlString += linkSeparator
            }

            
        }

        $("#pages").html(htmlString)
    }
    else 
    {
        alert('Must be 1 and only 1 header element')
    }
})