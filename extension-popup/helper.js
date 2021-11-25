function verify(token_id){
    $.ajax({
        url: "http://127.0.0.1:5000/verify",
        type: "post",
        dataType: "json",
        data: {
            token_id: token_id,
        },
    });
}

function sendLike() {
    $.ajax({
        url: "http://127.0.0.1:5000/post/rating",
        type: "post",
        dataType: "json",
        data: {
            url: currentUrl,
            rating: 1,
        },
    });
}
function sendDislike() {
    $.ajax({
        url: "http://127.0.0.1:5000/post/rating",
        type: "post",
        dataType: "json",
        data: {
            url: currentUrl,
            rating: -1,
        },
    });
}
async function getRating(url) {
    return (await $.ajax({
        url: "http://127.0.0.1:5000/get/rating",
        type: "get",
        data: {
            url: url,
        },
        error: function (xhr) {},
    }))
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