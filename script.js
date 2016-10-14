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
                    .fadeOut(3000)
                    .next()
                    .fadeIn(3000)
                    .end()
                    .appendTo('.carousel');
            }, 6000);
        })
        .mouseleave();
});
