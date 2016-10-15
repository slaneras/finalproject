$(document).ready(function() {
    var timer;
    $(".carousel > div:gt(0)").hide();

    $(".carousel").mouseenter(function() {
            if (timer) {
                clearInterval(timer)
            }
        })
        .mouseleave(function() {
            timer = setInterval(function() {
                $('.carousel > div:first')
                    .fadeOut(3000, function() {
                        $(this).next()
                            .fadeIn(3000)
                        $(this).appendTo('.carousel');
                    })
                    // .end()
            }, 3000);
            // timer = setInterval(function() {
            //     var visibleDiv = $('.carousel > div:visible')
            //     var nextDiv = visibleDiv.next().length ? visibleDiv.next() : $('.carousel > div:first')
            //     visibleDiv.fadeOut(3000, function () {
            //       nextDiv.fadeIn(3000)
            //     })
            // }, 4000);
        })
        .mouseleave();
});
