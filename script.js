$(window).on("load", function () {
    console.log('loading...');
    $(".loader-wrapper").fadeOut("slow");
});
$(document).ready(function () {
    // CUSTOM BAR ICON FOR MOBILE SCREEN
    let bar = $("#bar");
    let closed = $("#closed");
    let nav = $('#navbar');
    // CUSTOME SHOW PRODUCT ITEM
    let mainImage = $('#main-img')
    let listImageJquerry = $('.small-img')

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

    // SHOW PRODUCT IN SPRODUCT IN SPRODUCT
    listImageJquerry.each(
        function (index, element) {
            element.onclick = function () {
                mainImage[0].src = element.src
            }

        }
    )
    // SURRIVAL PRODUCT LIST IN SHOP
    let pro = $('.pro');
    pro.each(function (index, element) {
        $(`.${element.className}`).click(function () {
            return window.location.href = 'sproduct.html'
        }
        )
    })
});     
