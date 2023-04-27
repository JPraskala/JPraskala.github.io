$(document).ready(function(){
    if ($("#new_building").length > 0) 
    {
        const flickrFeed = 'https://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?&id=82407828@N07&tags=vectacorpbuilding&format=json';
    
        $.ajax(
            {
                type: "get",
                url: flickrFeed,
                dataType: 'jsonp',
                beforeSend: function() 
                {
                    $("#new_building").html("... Loading");
                },
                timeout: 10000,
                error: function(xhr, status, error) 
                {
                    alert(`Error ${xhr.status} - ${error}.`);
                },
                success: function(data) 
                {
                    $("#new_building").html("");
                    if (data.items.length > 0) 
                    {
                        $.each(data.items, function(index, item) 
                        {
                            const photo = item.media.m;
                            const imgElement = $("<img>").attr("src", photo);
                            $("new_building").append(imgElement);
                        })
                    }
                    else 
                    {
                        $("#new_building").html("No photos found.");
                    }
                }
            })
    }
    else 
    {
        alert('new_building id not found. Please create one.');
    }
});