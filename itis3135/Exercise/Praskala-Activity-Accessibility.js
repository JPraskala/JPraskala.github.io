document.getElementById('submit-button').addEventListener('click', function() 
{
    const form = document.querySelector(".access-form")
    const name = document.getElementById("name").value
    const number = document.getElementById('phone-number').value
    const numberExpression = /^\d{3}\d{3}\d{4}|^\d{3}[-]\d{3}[-]\d{4}/
    if (name.trim().length > 0 && numberExpression.test(number)) 
    {
        if (document.getElementById('message') == null) 
        {
            const result = document.createElement('p')
            result.setAttribute('id', 'message')
            result.style.color = 'orange'
            result.textContent = `Congratulations ${name}, you have won an Xbox Series X ${2023} Edition!!!`
            form.insertAdjacentElement('afterend', result)
        }
    }
    else 
    {
        alert("Please enter a name and phone number.")
    }
})