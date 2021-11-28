let currentUrl = (window.location.protocol + "//" + window.location.host + window.location.pathname + window.location.search).toLowerCase();

let liked = false;
let disliked = false;

function sendRating(rating) {
    $.ajax({
        url: "http://127.0.0.1:5000/post/rating",
        type: "post",
        contentType: "application/json; charset=utf-8",
        data: JSON.stringify({url: currentUrl, rating: rating})
    });
}

async function fillDislikes() {
    currentUrl = currentUrl[0].url;
    rating = await $.ajax({
        url: "http://127.0.0.1:5000/get/rating",
        type: "get",
        data: {
            url: currentUrl,
        },
        error: function (xhr) {},
    })
    dislikes = rating.dislikes

    userRating = rating.userRating;
    if (userRating == 1) {
        liked = true;
        $("#like .filled").addClass("filledActive");
    } else if (userRating == -1) {
        disliked = true;
        $("#dislike .filled").addClass("filledActive");
    }
    $('ytd-toggle-button-renderer.style-text[is-icon-button] #text.ytd-toggle-button-renderer:nth-of-type(1)').eq(1).text(dislikes);
}
$('ytd-toggle-button-renderer.style-text[is-icon-button] #text.ytd-toggle-button-renderer:nth-of-type(1)').eq(1).click(function () {
    if (disliked) {sendRating(0); liked=false;}
    else{
    sendRating(-1);
    }
});
$('ytd-toggle-button-renderer.style-text[is-icon-button] #text.ytd-toggle-button-renderer:nth-of-type(1)').eq(0).click(function () {
    if (liked) {sendRating(0); liked=false;}
    else{
    sendRating(1);
    }
});
fillDislikes();