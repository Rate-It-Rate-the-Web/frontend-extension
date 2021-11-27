chrome.storage.sync.get("loggedIn", async (loggedIn) => {
  if (typeof loggedIn == "object") {
    $("body").html(buildLoginHtml());
    $("#googleLogin").click(function () {
      chrome.runtime.sendMessage({ msg: "login" });
      console.log("login");
    });
  } else {
    if (loggedIn == false) {
      $("body").html(buildLoginHtml());
      $("#googleLogin").click(function () {
        chrome.runtime.sendMessage({ msg: "login" });
        console.log("login");
      });
    }
  }
});

const currentUrl = "https://www.google.com/1234"/*chrome.tabs.query(
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
  fillLikeCount();
  fillDislikeCount();
}
getAndFillRating();
