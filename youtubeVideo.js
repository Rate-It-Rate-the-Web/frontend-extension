async function setupYoutubeVideo() {
    while (
        $("ytd-toggle-button-renderer a yt-formatted-string").eq(1).text() ==
            "" ||
        $("ytd-toggle-button-renderer a yt-formatted-string").eq(1).text() ==
            undefined
    ) {}

    fillDislikes($("ytd-toggle-button-renderer a yt-formatted-string").eq(1));
    while (
        $("ytd-toggle-button-renderer a yt-formatted-string").eq(0).text() ==
            "" ||
        $("ytd-toggle-button-renderer a yt-formatted-string").eq(0).text() ==
            undefined
    ) {}

    likes = $("ytd-toggle-button-renderer a yt-formatted-string").eq(0);
    if (!/\d/.test(likes.text())) {
        fillLikes(likes);
    }
    assignDislikeButton(
        $("ytd-toggle-button-renderer .yt-simple-endpoint").eq(1)
    );
    assignLikeButton($("ytd-toggle-button-renderer .yt-simple-endpoint").eq(0));
}
setupYoutubeVideo();
