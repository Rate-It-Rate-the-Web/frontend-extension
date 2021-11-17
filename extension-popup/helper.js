function sendLike() {
    $.ajax({
        url: "https://httpbin.org/post/like",
        type: "post",
        dataType: "json",
        data: {
            url: currentUrl,
        },
    });
}
function sendDislike() {
    $.ajax({
        url: "https://httpbin.org/post/dislike",
        type: "post",
        dataType: "json",
        data: {
            url: currentUrl,
        },
    });
}
async function getLikeCount() {
    return (await $.ajax({
        url: "https://httpbin.org/get/likes",
        type: "get",
        data: {
            url: currentUrl,
        },
        error: function (xhr) {},
    })).args.likes
}
async function getDislikeCount() {
    return (await $.ajax({
        url: "https://httpbin.org/get/dislikes",
        type: "get",
        data: {
            url: currentUrl,
        },
        error: function (xhr) {},
    })).args.dislikes
}

function onLike() {
    if (liked == false) {
        sendLike();
        liked = true;
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
        $("#like .filledActive").removeClass("filledActive");
        likes--;
        fillLikeCount();
    }
}

function onDislike() {
    if (disliked == false) {
        sendDislike();
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