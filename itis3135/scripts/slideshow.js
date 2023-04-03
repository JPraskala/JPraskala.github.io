$(function() 
{
    $('#right-arrow').click(function() 
    {
        let currentImg = $(".current-image")
        let nextImage = currentImg.next()

        if (nextImage.length) 
        {
            currentImg.removeClass("current-image").css("z-index", -1)
            nextImage.addClass("current-image").css("z-index", 1)
        }
    })

    $('#left-arrow').click(function() 
    {
        let currentImg = $(".current-image")
        let prevImage = currentImg.prev()

        if (prevImage.length) 
        {
            currentImg.removeClass('current-image').css('z-index', -1)
            prevImage.addClass('current-image').css('z-index', 1)
        }
    })
})

/* Sources:
    https://stackoverflow.com/questions/6169666/how-to-resize-an-image-to-fit-in-the-browser-window
    https://api.jquery.com/click/
    https://www.youtube.com/watch?v=J2HLW4A40X8
*/