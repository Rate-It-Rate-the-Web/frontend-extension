async function setupYoutubeVideo() {
    while (
        $("ytd-toggle-button-renderer a yt-formatted-string").eq(1).text() ==
            "" ||
        $("ytd-toggle-button-renderer a yt-formatted-string").eq(1).text() ==
            undefined
    ) {}

    await fillDislikes($("ytd-toggle-button-renderer a yt-formatted-string").eq(1));
    while (
        $("ytd-toggle-button-renderer a yt-formatted-string").eq(0).text() ==
            "" ||
        $("ytd-toggle-button-renderer a yt-formatted-string").eq(0).text() ==
            undefined
    ) {}
    likes = $("ytd-toggle-button-renderer a yt-formatted-string").eq(0);
    if (!/\d/.test(likes.text())) {
        await fillLikes(likes);
    }

    youtubeLiked = $("#top-level-buttons-computed ytd-toggle-button-renderer a yt-icon-button").eq(0).hasClass("style-default-active")
    youtubeDisliked = $("#top-level-buttons-computed ytd-toggle-button-renderer a yt-icon-button").eq(1).hasClass("style-default-active")
    if (liked && youtubeLiked == false) {
        $("#top-level-buttons-computed ytd-toggle-button-renderer").eq(0).click();
    }
    if (disliked && youtubeDisliked == false) {
        $("#top-level-buttons-computed ytd-toggle-button-renderer").eq(1).click();
    }
    if (youtubeLiked && liked==false) {
        liked=true;
        sendRating(1);
    }
    if (youtubeDisliked && disliked==false) {
        disliked=true;
        sendRating(-1);
    }
    


    
    assignDislikeButton(
        $("#top-level-buttons-computed ytd-toggle-button-renderer").eq(1)
    );
    assignLikeButton($("#top-level-buttons-computed ytd-toggle-button-renderer").eq(0));
}
setupYoutubeVideo();
