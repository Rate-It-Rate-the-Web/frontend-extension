let currentUrl = (window.location.protocol + "//" + window.location.host + window.location.pathname + window.location.search).toLowerCase();
const server = "https://rateit.timon-gaertner.ga/"
let liked = false;
let disliked = false;

function sendRating(rating) {
    browser.runtime.sendMessage({action: "sendRating", url: currentUrl, rating: rating});
}
async function fillDislikes(htmlDislikeSelector) {
    rating = await $.ajax({
        url: server+"get/rating",
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
    } else if (userRating == -1) {
        disliked = true;
    }
    htmlDislikeSelector.text(dislikes);
}
async function fillLikes(htmlLikeSelector) {
    rating = await $.ajax({
        url: server+"get/rating",
        type: "get",
        data: {
            url: currentUrl,
        },
        error: function (xhr) {},
    })
    likes = rating.likes

    userRating = rating.userRating;
    if (userRating == 1) {
        liked = true;
    } else if (userRating == -1) {
        disliked = true;
    }
    htmlLikeSelector.text(likes);
}







function assignDislikeButton(htmlLikeSelector) {
    htmlLikeSelector.click(function () {
        if (disliked) {sendRating(0); liked=false;}
        else{
        disliked=true;
        sendRating(-1);
    }
})}
function assignLikeButton(htmlDislikeSelector) {
    htmlDislikeSelector.click(function () {
        if (liked) {sendRating(0); liked=false;}
        else{
        liked=true;
        sendRating(1);
    }
})}
