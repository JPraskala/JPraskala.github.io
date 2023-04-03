const path = String(location.pathname.split("/").splice(-1));
if (path == "firstscripts.html") 
{
    
    // Activity 5

    setInterval(function() {
        let date = new Date()
        let currentMonth = date.toLocaleString('en-US', {month: 'long'})
        let currentDayName = date.toLocaleString('en-US', {weekday: "long"})
        let dayOfMonth = date.getDate()
        let currentTime = date.toLocaleTimeString('en-US', {hour: 'numeric', minute: '2-digit', hour12: true, timeZone: 'EST'})
        let currentYear = date.getFullYear()

        document.getElementById("correct-date").textContent = `Today is ${currentTime} on ${currentDayName}, ${dayOfMonth} ${currentMonth}, ${currentYear}`

        // Source that helped: https://stackoverflow.com/questions/69147089/how-do-i-use-tolocaletimestring-without-displaying-am-pm
        // Another source: https://stackoverflow.com/questions/47645018/updating-time-without-refreshing-the-page-with-javascript
    })

    function submitButton() {
        // First Form
        let name = document.getElementById("name").value
        let mood = document.getElementById("feeling").value
        if ((name.trim().length > 0) && (mood.trim().length > 0)) {
            document.getElementById("information").innerText = `We at Praskala Enterprise welcome you, ${name}! 
            We're glad you are doing ${mood}.`
    
            document.getElementById("Submit").disabled = true
            document.getElementById("name").disabled = true
            document.getElementById("feeling").disabled = true
        } else {
            document.getElementById("information").innerText = "Please enter information into both fields."
        }
    
        // Second Form
        if (document.getElementById("yes").checked) {
            document.getElementById("answer").innerText = ':)'
        } else if (document.getElementById("no").checked) {
            document.getElementById("answer").innerText = ':('
        } else {
            document.getElementById("answer").innerText = 'Please select an option.'
        }
    
        document.getElementById("Submit-two").disabled = true
        document.getElementById("yes").disabled = true
        document.getElementById("no").disabled = true
    }

    document.getElementById("reset").addEventListener("click", function() {
        document.getElementById("information").innerText = ""
        document.getElementById("Submit").disabled = false
        document.getElementById("name").disabled = false
        document.getElementById("feeling").disabled = false
    })

    document.getElementById("reset-two").addEventListener('click', function() {
        document.getElementById("answer").innerText = ''
        document.getElementById("Submit-two").disabled = false
        document.getElementById("yes").disabled = false
        document.getElementById("no").disabled = false
    })

    document.getElementById("secret").addEventListener("click", () => {
        //window.open("Introduction.html", "_self")
        document.body.style.backgroundColor = "red"
    })

    document.getElementById("penguins").addEventListener("click", function () {
        window.open("https://www.antarctica.gov.au/about-antarctica/animals/penguins/")
    })

    let toggle = 0
// Source for image: https://www.pexels.com/photo/close-up-photography-of-penguin-on-snow-86405/
function image() {
    let backgroundStatus = document.getElementById("first-scripts")
    switch (toggle) {
        case 0:
            toggle = 1
            backgroundStatus.style.background = "url('images/penguin.jpg')"
            break
        case 1:
            toggle = 0
            backgroundStatus.style.background = "#718F94"
            break
        default:
            break
    }

    // Source I used to help me with this: https://stackoverflow.com/questions/56408596/toggle-back-and-forth-between-styles-onclick-switch-case
}

function random_penguin() {
    // Where I got this from: https://www.penguinsinternational.org/penguin-species/?gclid=EAIaIQobChMIxKu2qbaH_QIVMRTUAR3rsQCwEAAYASAAEgJUjfD_BwE
    const penguins = ['Adelie', 'African', 'Chinstrap', 'Emperor', 'Erect-Crested', 'Fiordland', 'Galapagos', 'Gentoo', 'Humbolt', 'King', 'Little', 'Macaroni',
        'Magellanic', 'Northern Rockhopper', 'Royal', 'Southern Rockhopper', 'Yellow-eyed']

    let randomPenguin = penguins[Math.floor(Math.random() * penguins.length)]

    document.getElementById("random-result").textContent = `${randomPenguin} Penguin.`
}
// End of Activity 5

}


$(function() 
{
    $('h1').replaceWith("<h1> ITIS 3135 | Jacob Praskala's Joyful Penguin </h1>")
})

$(function() {
    console.log(location.pathname);
    console.log(location.pathname.split("/").splice(-1));
    const pathname = String(location.pathname.split("/").splice(-1));
    const links = {
        "1": {
            "url": "index.html",
            "text": "Home",
            "alt": "Example Homepage"
        },
        "2": {
            "url": "introduction.html",
            "text": "Introduction",
            "alt": "Example Homepage"
        },
        "3": {
            "url": "contract.html",
            "text": "Contract",
            "alt": "Contract Page"
        },
        "4": {
            "url": "tables.html",
            "text": "Tables",
            "alt": "Simple and Complex Table Demonstration"
        },
        "5": {
            "url": "forms.html",
            "text": "Forms",
            "alt": "Form"
        },
        "6": {
            "url": "website_evaluations.html",
            "text": "Website Evaluations",
            "alt": "Website Evaluations"
        },
        "7": {
            "url": "firstscripts.html",
            "text": "First Scripts",
            "alt": "First Scripts Assignment"
        },
        "8": {
            "url": "polygons.html",
            "text": "Polygons",
            "alt": "Polygons Assignment"
        },
        "9": {
            "url": "calculator_try.html",
            "text": "Calculator Try",
            "alt": "Part 1 of Activity 7"
        },
        "10": {
            "url": "calculator_fcc.html",
            "text": "Calculator FCC",
            "alt": "Calculator freeCodeCamp"
        },
        "11": {
            "url": "arrays.html",
            "text": "Arrays",
            "alt": "Arrays"
        },
        "12": {
            "url": "slideshow.html",
            "text": "Slideshow",
            "alt": "Slideshow"
        },
        "13": {
            "url": "project_1.html",
            "text": "Project One",
            "alt": "Project One"
        }
    };
    
    const linkSeparator = " | ";
    let htmlString = "";

    for (var id in links) {
        if (pathname === links[id]['url']) {
            htmlString += links[id]['text'];
        } else {
            htmlString += '<a href=" ' + links[id]['url'] + ' ">' + links[id]['text'] + '</a>';
        }
        if (Number(id) < Object.keys(links).length) {
            htmlString += linkSeparator;
        }
    }

    $('#siteLinks').html(htmlString);
});