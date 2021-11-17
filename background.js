function oauthLogin() {
  var auth_url = "https://accounts.google.com/o/oauth2/auth?";
  var client_id = "641211419819-v9hv2kcs7c7r619ufcrprps4gu2dsk3i.apps.googleusercontent.com"; // must be Web Application type
  var redirect_url = chrome.identity.getRedirectURL(); // make sure to define Authorised redirect URIs in the Google Console such as https://<-your-extension-ID->.chromiumapp.org/

  var auth_params = {
    client_id: client_id,
    redirect_uri: redirect_url,
    response_type: "token",
    scope: "https://mail.google.com/",
  };

  const url = new URLSearchParams(Object.entries(auth_params));
  url.toString();
  auth_url += url;

  chrome.identity.launchWebAuthFlow(
    {
      interactive: true,
      url: auth_url,
    },
    function () {}
  );
}

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  oauthLogin();
});