
$(document).ready(function () {
    // CUSTOM BAR ICON FOR MOBILE SCREEN
    let bar = $("#bar");
    let closed = $("#closed");
    let nav = $('#navbar');

    //SHOW NAVBAR MOBILE
    if (bar) {
        bar.click(function () {
            nav.addClass('active');
        })
    }

    //HIDE NAVBAR MOBILE
    if (closed) {
        closed.click(function () {
            nav.removeClass('active')
        })
    }
}); 
