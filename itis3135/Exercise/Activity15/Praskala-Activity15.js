$(document).ready(function(){
    if ($("#faculty").length > 0) 
    {
        $.getJSON('facultyList.json', function(data, text) 
        {
            if (text !== 'success') 
            {
                alert('facultyList.json was not found.');
                return;
            }
            else 
            {
                $("#faculty").html("");
                $.each(data, function() 
                {
                    $.each(this, function(key, value) 
                    {
                        $("#faculty").append(
                            `<img src=${value.image} alt=faculty_member>
                            <h2>${value.full_name}</h2>
                            <h3>${value.department}</h3>
                            <p>${value.bio}</p>`
                        );
                    })
                })
            }
        })
    }
    else 
    {
        alert('Faculty id was not found. Please create one.');
    }
});
