const server = "https://rateit.timon-gaertner.ga/";
let currentUrl = "";
chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
  currentUrl = tabs[0].url;
});
let likes = 0;
let dislikes = 0;
let liked = false;
let disliked = false;

$("#likeButton").click(function () {
    onLike();
});

$("#dislikeButton").click(function () {
    onDislike();
});

async function getAndFillRating() {
    currentUrl = await chrome.tabs.query(
        { active: true, currentWindow: true }
    );
    currentUrl = currentUrl[0].url;
    rating = await getRating(currentUrl);
    likes = rating.likes;
    dislikes = rating.dislikes;
    userRating = rating.userRating;
    if (userRating == 1) {
        liked = true;
        $("#like .filled").addClass("filledActive");
    } else if (userRating == -1) {
        disliked = true;
        $("#dislike .filled").addClass("filledActive");
    }
    fillLikeCount();
    fillDislikeCount();
}
getAndFillRating();
chrome.storage.sync.get("loggedIn", async (loggedIn) => {
    if (loggedIn.loggedIn == undefined) {
        $("body .wrapper").html(buildLoginHtml());
        $("#googleLogin").click(function () {
            chrome.runtime.sendMessage({ action: "oauthLogin" }, function (response) {
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
            });
            console.log("login");
        });
    } else if (loggedIn.loggedIn == false) {
        $("body .wrapper").html(buildLoginHtml());
        $("#googleLogin").click(function () {
            chrome.runtime.sendMessage({ action: "oauthLogin" }, function (response) {
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
            });
            console.log("login");
        });
    } else if (loggedIn.loggedIn == "inProgress") {
        chrome.runtime.sendMessage({ action: "oauthLogin" }, function (response) {
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
        });
    }
});
