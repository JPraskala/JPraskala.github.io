document.getElementById('submit-button').addEventListener('click', function() 
{
    const form = document.querySelector(".access-form")
    const name = document.getElementById("name")
    const number = document.getElementById('phone-number')
    const numberExpression = /^\d{3}\d{3}\d{4}|^\d{3}[-]\d{3}[-]\d{4}/
    if (name.value != '' && number.value.match(numberExpression)) 
    {
        if (document.getElementById('message') == null) 
        {
            const result = document.createElement('p')
            result.setAttribute('id', 'message')
            result.style.color = 'orange'
            result.textContent = `Congratulations ${name.value}, you have won an Xbox Series X 2023 edition!!!`
            form.insertAdjacentElement('afterend', result)
        }
    }
    else 
    {
        alert("Error 400 bad request. Please try again.")
    }
})