document.getElementById('submit-button').addEventListener('click', function() 
{
    const form = document.querySelector(".access-form")
    const name = document.getElementById("name").value 
    const number = document.getElementById('phone-number').value
    if (name != '' && number != '') 
    {
        const result = document.createElement('p')
        result.textContent = `Congratulations ${name}, you have won an Xbox Series X!!!`
        form.appendChild(result)
    }
    else 
    {
        alert("Please enter a name and a phone number")
    }
})