function getShape(sides)
{
    let response = ''
    switch(sides) 
    {
        case 0:
            response = 'Please enter a number with an absolute value between 1 and 10'
            break
        case 1:
            response = 'A Polygon with one side is known as a Henagon'
            break
        case 2:
            response = 'A Polygon with ' + sides + ' sides is called a Digon'
            break
        case 3:
            response = 'A Polygon with ' + sides + ' sides is called a Trigon'
            break
        case 4:
            response = 'A Polygon with ' + sides + ' sides is called a Tetragon'
            break
        case 5:
            response = 'A Polygon with ' + sides + ' sides is called a Pentagon'
            break
        case 6:
            response = 'A Polygon with ' + sides + ' sides is called a Hexagon'
            break
        case 7:
            response = 'A Polygon with ' + sides + ' sides is called a Heptagone'
            break
        case 8:
            response = 'A Polygon with ' + sides + ' sides is called a Octagon'
            break
        case 9:
            response = 'A Polygon with ' + sides + ' sides is called a Nonagon'
            break
        case 10:
            response = 'A Polygon with ' + sides + ' sides is called a Decagon'
            break
    }
    return response
}

function validateEntry(entry) 
{
    let entry_number = Math.floor(Math.abs(Number(entry)))
    if (entry_number >= 1 && entry_number <= 10) 
        return entry_number
    else 
        return 0
}

document.getElementById("start-prompt").addEventListener("click", function()
{
    let polygon = validateEntry(prompt('The Joyful Penguin would like your number'))
    alert(getShape(polygon)) 
})