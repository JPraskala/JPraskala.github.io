$(function() 
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
        case 'login.html':
            $('h1').html('Login Here')
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
            "url": "login.html",
            "text": "Login",
            "alt": "Login"
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

    $('footer').append(`<p>Designed by <a href="https://webpages.charlotte.edu/jpraskal/itis3135/praskalaenterprise.com/">Praskala Enterprise</a> &copy; 2023</p>`)
})