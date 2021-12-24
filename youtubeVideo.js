async function setupYoutubeVideo() {
    getRatingFromBackground(); //comment out, if you want to get the rating from foreground (in firefox this would be possible)
    //getRating();
    if (!ratingGotFromBack){return false} //comment out, if you want to get the rating from foreground (in firefox this would be possible)
    if (
        !(
            $("ytd-toggle-button-renderer a yt-formatted-string")
                .eq(1)
                .text() == "" ||
            $("ytd-toggle-button-renderer a yt-formatted-string")
                .eq(1)
                .text() == undefined
        )
    ) {
        await fillDislikes(
            $("ytd-toggle-button-renderer a yt-formatted-string").eq(1)
        );
    } else {
        return false;
    }
    likes = $("ytd-toggle-button-renderer a yt-formatted-string").eq(0);
    if (!(likes.text() == "" || likes.text() == undefined)) {
        if (!/\d/.test(likes.text())) {
            await fillLikes(likes);
        }
    } else {
        return false;
    }
    clearInterval(interval);
    youtubeLiked = $(
        "#top-level-buttons-computed ytd-toggle-button-renderer a yt-icon-button"
    )
        .eq(0)
        .hasClass("style-default-active");
    youtubeDisliked = $(
        "#top-level-buttons-computed ytd-toggle-button-renderer a yt-icon-button"
    )
        .eq(1)
        .hasClass("style-default-active");
    if (liked && youtubeLiked == false) {
        $("#top-level-buttons-computed ytd-toggle-button-renderer")
            .eq(0)
            .click();
    }
    if (disliked && youtubeDisliked == false) {
        $("#top-level-buttons-computed ytd-toggle-button-renderer")
            .eq(1)
            .click();
    }
    if (youtubeLiked && liked == false) {
        liked = true;
        sendRating(1);
    }
    if (youtubeDisliked && disliked == false) {
        disliked = true;
        sendRating(-1);
    }

    assignDislikeButton(
        $("#top-level-buttons-computed ytd-toggle-button-renderer").eq(1)
    );
    assignLikeButton(
        $("#top-level-buttons-computed ytd-toggle-button-renderer").eq(0)
    );
}
interval = undefined
const setup = () => interval = setInterval(setupYoutubeVideo, 300);

function checkWatchUrl() {
        if (location.pathname.startsWith("/watch")) {
            setup();
        }
}

const pageLoad = () => {contentScriptReload(); checkWatchUrl()};
// checks if user loads new page (needed bc youtube changes sites with replacing history state )
//document.addEventListener("yt-navigate-start", pageLoad);
document.addEventListener('yt-navigate-finish', pageLoad);
