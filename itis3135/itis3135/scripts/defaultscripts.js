function submitButton() {
    let name = document.getElementById("name").value
    let mood = document.getElementById("feeling").value
    if ((name.trim().length > 0) && (mood.trim().length > 0)) {
        document.getElementById("information").textContent = `We at Praskala Enterprise welcome you, ${name}! 
        We're glad you are doing ${mood}.`
    } else {
        
    }
}

window.onload = date()
function date() {
    
}

document.getElementById("secret").addEventListener("click", function () {
    window.open("Introduction.html")
})

document.getElementById("penguins").addEventListener("click", function () {
    window.open("https://www.antarctica.gov.au/about-antarctica/animals/penguins/")
})

// Source for image: https://www.pexels.com/photo/close-up-photography-of-penguin-on-snow-86405/
function image() {

}

function random_penguin() {
    // Where I got this from: https://www.penguinsinternational.org/penguin-species/?gclid=EAIaIQobChMIxKu2qbaH_QIVMRTUAR3rsQCwEAAYASAAEgJUjfD_BwE
    const penguins = ['Adelie', 'African', 'Chinstrap', 'Emperor', 'Erect-Crested', 'Fiordland', 'Galapagos', 'Gentoo', 'Humbolt', 'King', 'Little', 'Macaroni',
        'Magellanic', 'Northern Rockhopper', 'Royal', 'Southern Rockhopper', 'Yellow-eyed']

    let randomPenguin = penguins[Math.floor(Math.random() * penguins.length)]

    document.getElementById("random-result").textContent = `You are a/an ${randomPenguin} Penguin.`
}

document.getElementById("age-result").addEventListener("click", function () {

})