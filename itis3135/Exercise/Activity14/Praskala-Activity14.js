$(document).ready(function() {
	$("a").click(function() 
    {
        const title = $(this).attr("title")
        const file = `json_files/${title}.json`
        $.getJSON(file, function(data) 
        {
            if ($("main").length > 0) 
            {
                $("main").html("")
                $.each(data, function() 
                {
                    $.each(this, function(key, value) 
                    {
                        $("main").html(
                            `<h1>${value.title}</h1>
                            <h2>${value.month}</h2>
                            <h3>${value.speaker}</h3>
                            <img src=${value.image} alt=${title}_picture>
                            <p>${value.text}</p>`
                        )
                    })
                })
            }
            else 
            {
                alert('Main does not exist')
            }
        })
    })
}); // end ready