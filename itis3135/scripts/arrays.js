let people = []
let salaries = []


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
    const salary = document.getElementById('salary')
    const salary_number = Number(salary.value)

    if (person.value != '' && typeof(salary_number) == 'number' && salary_number > 0) 
    {
        people.push(person.value)
        salaries.push(salary_number)
        person.remove(person.selectedIndex)
        person.focus()
        salary.value = ''
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
    const container = document.getElementsByClassName('container')[0]
    const original_table = document.getElementById('results_table')

    if (original_table != null) 
    {
        container.removeChild(original_table)
    }

    const new_table = document.createElement('table')
    new_table.id = 'results_table'
    container.appendChild(new_table)

    const header_rows = document.createElement('tr')
    header_rows.innerHTML = '<th>Name</th><th>Salary</th>'
    new_table.appendChild(header_rows)

    for (let i = 0; i < people.length; i++) 
    {
        const row = document.createElement('tr')


        const name_cell = document.createElement('td')
        name_cell.innerHTML = people[i]
        row.appendChild(name_cell)

        const salary_cell = document.createElement('td')
        salary_cell.innerHTML = salaries[i]
        row.appendChild(salary_cell)


        new_table.appendChild(row)
    }
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