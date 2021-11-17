function buildLoginHtml() {
    


    return `
    <div>
    <h1>Login via Google</h1>
    <a href="/login/login.html"  target="_blank">
    <img src="./images/btn_google_signin_dark_normal_web@2x.png" alt="Google Logo" style="width: 250px;">
    </a>
    </div>
    <script>

   

    `;
}


chrome.runtime.sendMessage({ msg: "login" });
console.log("login");
