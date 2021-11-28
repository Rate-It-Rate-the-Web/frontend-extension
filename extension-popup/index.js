

const currentUrl = "https://www.google.com/abc"; /*chrome.tabs.query(
  { active: true, currentWindow: true },
  (tabs) => {
    let url = tabs[0].url;
  }
);*/
console.log(currentUrl);
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
    rating = await getRating(currentUrl);
    likes = rating.likes;
    dislikes = rating.dislikes;
    userRating = rating.userRating;
    if (userRating == 1) {
      liked=true;
      $("#like .filled").addClass("filledActive");
    }
    else if(userRating == -1){
      disliked=true;
      $("#dislike .filled").addClass("filledActive");
    }
    fillLikeCount();
    fillDislikeCount();
}
getAndFillRating();
chrome.storage.sync.get("loggedIn", async (loggedIn) => {
  if (typeof loggedIn.loggedIn == undefined) {
      $("body .wrapper").html(buildLoginHtml());
      $("#googleLogin").click(function () {
          chrome.runtime.sendMessage({ msg: "login" }, function (response) {
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
          chrome.runtime.sendMessage({ msg: "login" }, function (response) {
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
  }
});