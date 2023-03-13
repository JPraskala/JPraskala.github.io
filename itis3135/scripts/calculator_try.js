function display_number(value) 
{
    document.getElementById("output").value += value
}

document.getElementById("answer").addEventListener("click", function() 
{
    let display = document.getElementById("output")
    let equation = display.value
    let result = Number(equation)
    display.value = result
})

document.getElementById("clear").addEventListener('click', function() 
{
    document.getElementById("output").value = ''
})