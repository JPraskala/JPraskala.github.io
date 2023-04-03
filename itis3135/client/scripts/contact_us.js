document.getElementById('submit').addEventListener('click', function() 
{
    const name = document.getElementById('name')
    const email = document.getElementById('email')
    const number = document.getElementById('number')
    const description = document.getElementById('description')
    const checkNumber = /^\d{3}\d{3}\d{4}|^\d{3}[-]\d{3}[-]\d{4}/

    if (name.value != '' && email.value != '' && description.value != '' && (checkNumber.test(number.value) || number.value == '')) 
    {
        document.getElementById('result').textContent = `Thank you for your question ${name.value}, we will get back to you shortly.`
        document.getElementById('submit').disabled = true
    }
    else 
    {
        alert("Something went wrong")
    }
})