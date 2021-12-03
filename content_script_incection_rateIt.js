let currentUrl = (
    window.location.protocol +
    "//" +
    window.location.host +
    window.location.pathname +
    window.location.search
).toLowerCase();
const server = "https://rateit.timon-gaertner.ga/";
let liked = false;
let disliked = false;
let htmlLikeSel;
let htmlDislikeSel;
let htmlLikeBtnSel;
let htmlDislikeBtnSel;
let rating;
let dislikeBtnAssigned = false;
let likeBtnAssigned = false;
async function getRating() {
    if (rating == undefined) {
        try {
            rating = await $.ajax({
                url: server + "get/rating",
                type: "get",
                data: {
                    url: currentUrl,
                },
                error: function (xhr) {rating = "error";},
            });
            if (rating == undefined) {
                rating = "error";
            }
        } catch (e) {
            rating = "error";
        }
    }
}
function contentScriptReload() {
    currentUrl = (
        window.location.protocol +
        "//" +
        window.location.host +
        window.location.pathname +
        window.location.search
    ).toLowerCase();
    try {
        removeAssignedDislikeButton();
    } catch (err) {}
    try {
        removeAssignedLikeButton();
    } catch (err) {}
    htmlLikeSel = "";
    htmlDislikeSel = "";
    htmlLikeBtnSel = "";
    htmlDislikeBtnSel = "";
    rating = undefined;
}
function sendRating(rating) {
    chrome.runtime.sendMessage({
        action: "sendRating",
        url: currentUrl,
        rating: rating,
    });
}
async function fillDislikes(htmlDislikeSelector) {
    dislikes = rating.dislikes;

    userRating = rating.userRating;
    if (userRating == 1) {
        liked = true;
    } else if (userRating == -1) {
        disliked = true;
    }
    htmlDislikeSel = htmlDislikeSelector;
    htmlDislikeSelector.text(dislikes);
}
async function fillLikes(htmlLikeSelector) {
    likes = rating.likes;

    userRating = rating.userRating;
    if (userRating == 1) {
        liked = true;
    } else if (userRating == -1) {
        disliked = true;
    }
    htmlLikeSel = htmlLikeSelector;
    htmlLikeSelector.text(likes);
}

function fillLikesHtml() {
    try {
        htmlLikeSel.text(likes);
    } catch (err) {}
}
function fillDislikesHtml() {
    try {
        htmlDislikeSel.text(dislikes);
    } catch (err) {}
}

function assignDislikeButton(htmlLikeSelector) {
    if (!dislikeBtnAssigned) {
        htmlLikeSelector.click(function () {
            if (disliked) {
                sendRating(0);
                disliked = false;
                dislikes--;
                fillDislikesHtml();
            } else {
                if (liked) {
                    likes--;
                    fillLikesHtml();
                    liked = false;
                }
                disliked = true;
                sendRating(-1);
                dislikes++;
                fillDislikesHtml();
            }
        });
        htmlDislikeBtnSel = htmlLikeSelector;
        dislikeBtnAssigned = true;
    }
}
function removeAssignedDislikeButton() {
    disliked = false;
    htmlDislikeBtnSel.unbind("click");
    dislikeBtnAssigned = false;
}
function assignLikeButton(htmlDislikeSelector) {
    if (!likeBtnAssigned) {
        htmlDislikeSelector.click(function () {
            if (liked) {
                sendRating(0);
                liked = false;
                likes--;
                fillLikesHtml();
            } else {
                if (disliked) {
                    dislikes--;
                    fillDislikesHtml();
                    disliked = false;
                }
                liked = true;
                sendRating(1);
                likes++;
                fillLikesHtml();
            }
        });
        htmlLikeBtnSel = htmlDislikeSelector;
        likeBtnAssigned = true;
    }
}
function removeAssignedLikeButton() {
    liked = false;
    htmlLikeBtnSel.unbind("click");
    likeBtnAssigned = false;
}
