function oauthLogin() {
    const url = `https://accounts.google.com/o/oauth2/v2/auth?scope=https%3A//www.googleapis.com/auth/drive.metadata.readonly&include_granted_scopes=true&response_type=token&redirect_uri=https%3A//oauth2.example.com/code&client_id=641211419819-v9hv2kcs7c7r619ufcrprps4gu2dsk3i.apps.googleusercontent.com`
    chrome.identity.launchWebAuthFlow({
        interactive: true,
        url: url,
    }, function() {})
}


chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse){
        oauthLogin();
    });
