function buildLoginHtml(){
    return `
    <div class="login-container">
        <button class="login-button" id="login-button">Verify</button>
        <p>This site does use  Google's reCAPTCHA, Version 3 which runs under the <a href="https://www.google.com/policies/privacy/">Privacy Policy</a> and the <a href="https://www.google.com/policies/terms/">Terms of Service</a></p>
    </div>
    <script src="https://www.google.com/recaptcha/api.js"></script>
    <script>
    $("#dislikeButton").click(function () {
    });
   function onSubmit(token) {
     document.getElementById("demo-form").submit();
   }
 </script>

    `
}
