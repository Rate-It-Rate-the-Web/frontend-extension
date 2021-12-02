let currentUrl = (window.location.protocol + "//" + window.location.host + window.location.pathname + window.location.search).toLowerCase();
const server = "https://rateit.timon-gaertner.ga/"
let liked = false;
let disliked = false;
let htmlLikeSel;
let htmlDislikeSel;
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
    htmlDislikeSel=htmlDislikeSelector;
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
    htmlLikeSel=htmlLikeSelector;
    htmlLikeSelector.text(likes);
}

function fillLikesHtml(){
    try{htmlLikeSel.text(likes);}
    catch(err){}
}
function fillDislikesHtml(){
    try{htmlDislikeSel.text(dislikes);}
    catch(err){}
}





function assignDislikeButton(htmlLikeSelector) {
    htmlLikeSelector.click(function () {
        if (disliked) {sendRating(0); disliked=false; dislikes--; fillDislikesHtml()}
        else{
        if (liked){
            likes--;
            fillLikesHtml();
        }
        disliked=true;
        sendRating(-1);
        dislikes++
        fillDislikesHtml();
    }
})}
function assignLikeButton(htmlDislikeSelector) {
    htmlDislikeSelector.click(function () {
        if (liked) {sendRating(0); liked=false; likes--; fillLikesHtml()}
        else{
        if (disliked){
            dislikes--;
            fillDislikesHtml
        }
        liked=true;
        sendRating(1);
        likes++
        fillLikesHtml();
    }
})}
