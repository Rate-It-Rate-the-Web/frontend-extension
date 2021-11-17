chrome.storage.sync.get("loggedIn", async (loggedIn) => {
  console.log(typeof loggedIn);
  if (typeof loggedIn == "object") {
    $("body").html(buildLoginHtml());
    $("#googleLogin").click(function () {
      chrome.runtime.sendMessage({ msg: "login" });
      console.log("login");
    });
    console.log("ffdad");
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

const currentUrl = chrome.tabs.query(
  { active: true, lastFocusedWindow: true },
  (tabs) => {
    let url = tabs[0].url;
  }
);
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

async function getAndFillLikes() {
  likes = await getLikeCount();
  fillLikeCount();
}
async function getAndFillDislikes() {
  dislikes = await getDislikeCount();
  fillDislikeCount();
}
getAndFillDislikes();
getAndFillLikes();
