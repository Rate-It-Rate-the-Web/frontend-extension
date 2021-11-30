function verify(token) {
    $.ajax({
        url: server + "verify",
        type: "post",
        contentType: "application/json; charset=utf-8",
        data: JSON.stringify({ token: token }),
    });
}
function login(token) {
    $.ajax({
        url: server + "login",
        type: "post",
        contentType: "application/json; charset=utf-8",
        data: JSON.stringify({ token: token }),
    });
}
function sendRating(rating) {
    $.ajax({
        url: server + "post/rating",
        type: "post",
        contentType: "application/json; charset=utf-8",
        data: JSON.stringify({ url: currentUrl, rating: rating }),
        error: function (xhr) {
            chrome.storage.sync.remove("loggedIn");
            $("body .wrapper").html(buildLoginHtml());
            $("#googleLogin").click(function () {
                browser.runtime.sendMessage(
                    { msg: "login" },
                    function (response) {
                        if (response == "success") {
                            $("body .wrapper").html(buildIndexHtml());
                            getAndFillRating();
                            $("#likeButton").click(function () {
                                onLike();
                            });

                            $("#dislikeButton").click(function () {
                                onDislike();
                            });
                        }
                    }
                );
                console.log("login");
            });
        },
    });
}
async function getRating(url) {
    return await $.ajax({
        url: server + "get/rating",
        type: "get",
        data: {
            url: url,
        },
        error: function (xhr) {},
    });
}

function onLike() {
    if (liked == false) {
        liked = true;
        sendRating(1);
        if (disliked == true) {
            disliked = false;
            $("#dislike .filledActive").removeClass("filledActive");
            dislikes--;
            fillDislikeCount();
        }
        $("#like .filled").addClass("filledActive");
        likes++;
        fillLikeCount();
    } else {
        liked = false;
        sendRating(0);
        $("#like .filledActive").removeClass("filledActive");
        likes--;
        fillLikeCount();
    }
}

function onDislike() {
    if (disliked == false) {
        sendRating(-1);
        disliked = true;
        if (liked == true) {
            liked = false;
            $("#like .filledActive").removeClass("filledActive");
            likes--;
            fillLikeCount();
        }
        $("#dislike .filled").addClass("filledActive");
        dislikes++;
        fillDislikeCount();
    } else {
        disliked = false;
        sendRating(0);
        $("#dislike .filledActive").removeClass("filledActive");
        dislikes--;
        fillDislikeCount();
    }
}

function fillLikeCount() {
    $("#like p").html(likes);
}
function fillDislikeCount() {
    $("#dislike p").html(dislikes);
}

// $.getScript("https://www.google.com/recaptcha/api.js?render=6LfiEDIdAAAAANbWrDUDkv6BWBJuGqotcAKTZzDJ")
