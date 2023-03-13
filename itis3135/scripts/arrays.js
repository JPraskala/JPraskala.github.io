let people = []
let salaries = []
let salary = 0

document.getElementById('add-salaries').addEventListener('click', addSalary)
document.getElementById('display-results').addEventListener('click', displayResults)
document.getElementById("display-salaries").addEventListener("click", displaySalary)
document.getElementById('reset_page').addEventListener('click', resetPage)

window.onload = function() 
{
    document.getElementById('people').focus()
}

function addSalary() 
{
    const person = document.getElementById('people')
    switch (person.value) 
    {
        case 'Jacob':
            salary = 98000
            break
        case 'Andrew':
            salary = 98500
            break
        case 'Sophia':
            salary = 99000
            break
        case 'John':
            salary = 97000
            break
        case "Amanda":
            salary = 99500
            break
        case "Amy":
            salary = 100000
            break
        case "Jack":
            salary = 100500
            break
        case "Emma":
            salary = 101000
            break
        default:
            salary = 0
            break
    }

    if (person.value != '' && typeof(salary) == 'number' && salary > 0) 
    {
        people.push(person.value)
        salaries.push(salary)
        person.remove(person.selectedIndex)
        person.focus()
    }
    else 
    {
        alert('Please select a person')
    }
}

function displayResults() 
{
    const div = document.querySelector('.results-div')
    if (document.getElementById('div-header') == null) 
    {   
        const results_header = document.createElement('h2')
        results_header.textContent = 'Average and Highest Salaries'
        results_header.setAttribute('id', 'div-header')
        results_header.style.marginLeft = "300px"
        results_header.style.marginRight = "auto"
        div.insertAdjacentElement('beforebegin', results_header)
    }
    const average = salaries.reduce((j, p) => j + p) / salaries.length  
    const max = salaries.reduce((j, p) => Math.max(j, p), -Infinity) 
    document.getElementById('results').innerHTML = `Average: ${average} <br><br> Max: ${max}`
}


function displaySalary() 
{
    const table = document.getElementById('results_table')
    const header_rows = document.createElement('tr')
    header_rows.insertCell(0).innerHTML = '<th>Name</th>'
    header_rows.insertCell(1).innerHTML = "<th>Salary</th>"
    table.appendChild(header_rows)

    const body_rows = document.createElement("tr")
    const name_rows = body_rows.insertCell(0)
    const salary_rows = body_rows.insertCell(1)

    for (let i = 0; i < people.length; i++) 
    {
        const names = table.insertRow()
        names.innerHTML = `<td>${people[i]}</td>`
        name_rows.appendChild(names)
        table.appendChild(name_rows)
    }

    for (let i = 0; i < salaries.length; i++) 
    {
        const money = table.insertRow()
        money.innerHTML = `<td>${salaries[i]}</td>`
        salary_rows.appendChild(money)
        table.appendChild(salary_rows)
    }

    disabledContent()
}

function disabledContent() 
{   
    document.getElementById('add-salaries').disabled = true
    document.getElementById('display-results').disabled = true
    document.getElementById("display-salaries").disabled = true
    document.getElementById('people').disabled = true
    
}

function resetPage() 
{
    window.location.reload()
}

// Source: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce
// Source: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/max
// Source: https://stackoverflow.com/questions/44281441/populating-html-table-from-multiple-arrays
// Source: https://developer.mozilla.org/en-US/docs/Web/API/Element/insertAdjacentHTML
// Possible Source: https://github.com/Fighter178/FakeCursor/