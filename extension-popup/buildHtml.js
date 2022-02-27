function buildLoginHtml() {
    return `
    <div class="login-screen">
    <h1>Login via Google</h1>
    <button id="googleLogin">
    <img src="./images/btn_google_signin_dark_normal_web@2x.png" alt="Google Logo" style="width: 250px;">
    </button>
    <h2>With Loggin in you accept the <a target="_blank" href="../privacy.html">Privacy Policy</a> and <a target="_blank" href="../terms.html">Terms of Service</a></h2>
    </div>

   

    `;
}

function buildIndexHtml() {
    return `
    <div class="rate">
            <div class="rating" id="like">
                <div class="innerWrapper">
                    <button id="likeButton">
                        <!-- prettier-ignore -->
                        <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_2_36)"><path d="M29.7197 12.8467L28.4087 19.59C28.1327 20.9667 28.5007 22.39 29.3747 23.4633C30.2487 24.5367 31.5367 25.1667 32.9167 25.1667H45.5667V27.6867L39.6557 41.5H21.0487C20.8432 41.4941 20.6476 41.4087 20.5022 41.2611C20.3568 41.1136 20.2725 40.9152 20.2667 40.7067V22.4133L29.7197 12.8467ZM31.7667 4.16667L17.0237 19.1233C16.1497 20.01 15.6667 21.2 15.6667 22.4367V40.7067C15.6667 43.7167 18.0817 46.1667 21.0487 46.1667H39.6787C41.3117 46.1667 42.8067 45.3033 43.6347 43.9033L49.7757 29.5533C50.0287 28.97 50.1667 28.34 50.1667 27.6867V25.1667C50.1667 22.6 48.0967 20.5 45.5667 20.5H32.9167L35.0327 9.65C35.1477 9.13667 35.0787 8.57667 34.8487 8.11C34.3257 7.05909 33.6427 6.09841 32.8247 5.26333L31.7667 4.16667ZM8.76675 20.5H4.16675V46.1667H8.76675C10.0317 46.1667 11.0667 45.1167 11.0667 43.8333V22.8333C11.0667 21.55 10.0317 20.5 8.76675 20.5Z" fill="#F8F8F8"/></g><defs><clipPath id="clip0_2_36"><rect width="50" height="50" fill="white"/></clipPath></defs></svg>
                        <!-- prettier-ignore -->
                        <svg class="filled" width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.08325 44.0833H10.4469V18.8833H2.08325V44.0833ZM48.0833 20.9833C48.0833 18.6733 46.2014 16.7833 43.9014 16.7833H30.7078L32.6942 7.18634L32.7569 6.51434C32.7569 5.65334 32.4014 4.85534 31.8369 4.28834L29.6205 2.08334L15.8623 15.9223C15.0887 16.6783 14.6287 17.7283 14.6287 18.8833V39.8833C14.6287 42.1933 16.5105 44.0833 18.8105 44.0833H37.6287C39.3642 44.0833 40.8487 43.0333 41.476 41.5213L47.7905 26.7163C47.9787 26.2333 48.0833 25.7293 48.0833 25.1833V20.9833Z" fill="#F8F8F8"/></svg>
                    </button>
                    <p class="count"></p>
                </div>
            </div>
            <div class="rating">
                <div class="innerWrapper" id="dislike">
                    <button id="dislikeButton">
                        <!-- prettier-ignore -->
                        <svg width="52" height="53" viewBox="0 0 52 53" fill="none" xmlns="http://www.w3.org/2000/svg" > <path d="M24.7803 42.1533L26.0913 35.41C26.3673 34.0333 25.9993 32.61 25.1253 31.5367C24.2513 30.4633 22.9633 29.8333 21.5833 29.8333H8.93325V27.3133L14.8443 13.5H33.4513C33.8653 13.5 34.2333 13.8733 34.2333 14.2933V32.5867L24.7803 42.1533ZM22.7333 50.8333L37.4762 35.8767C38.3503 34.99 38.8333 33.8 38.8333 32.5633V14.2933C38.8333 11.2833 36.4183 8.83334 33.4513 8.83334H14.8213C13.1883 8.83334 11.6933 9.69667 10.8653 11.0967L4.72425 25.4467C4.47125 26.03 4.33325 26.66 4.33325 27.3133V29.8333C4.33325 32.4 6.40325 34.5 8.93325 34.5H21.5833L19.4673 45.35C19.3523 45.8633 19.4213 46.4233 19.6513 46.89C20.1803 47.94 20.8473 48.8967 21.6753 49.7367L22.7333 50.8333ZM45.7332 34.5H50.3333V8.83334H45.7332C44.4683 8.83334 43.4333 9.88334 43.4333 11.1667V32.1667C43.4333 33.45 44.4683 34.5 45.7332 34.5Z" fill="#F8F8F8" /> </svg>
                        <!-- prettier-ignore -->
                        <svg class="filled" width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M31.356 6.25H12.5378C10.8023 6.25 9.3178 7.3 8.69052 8.812L2.37598 23.617C2.1878 24.1 2.08325 24.604 2.08325 25.15V29.35C2.08325 31.66 3.96507 33.55 6.26507 33.55H19.4587L17.4723 43.147L17.4096 43.819C17.4096 44.68 17.7651 45.478 18.3296 46.045L20.546 48.25L34.3251 34.411C35.0778 33.655 35.5378 32.605 35.5378 31.45V10.45C35.5378 8.14 33.656 6.25 31.356 6.25ZM39.7196 6.25V31.45H48.0833V6.25H39.7196Z" fill="#F8F8F8"/></svg>
                    </button>
                    <p class="count"></p>
                </div>
            </div>
        </div>
        `;
}

function buildAnswerHtml(answer) {
    if (answer == undefined) {
        return;
    }
    return `
    <div id="${answer.id}" class="answer">
        <h3 class="username">${answer.username}</h3>
        <p class="commentText">
            ${answer.comment}
        </p>
    </div>`;
}
function buildCommentHtml(comment) {
    return `
    <div id="${comment.id}" class="comment">
                        <h3 class="username">${comment.username}</h3>
                        <p class="commentText">
                            ${comment.content}
                        </p>
                        ${
                            comment.answer!=undefined && comment.answers.length > 0
                                ? `
                        <button class="openAnswers">
                            Answers <img src="images/arrowDown.svg" alt="" />
                        </button>
                        `
                                : ``
                        }
                        <div class="answers">
                            ${
                                comment.answer!=undefined && comment.answers.length > 0
                                    ? comment.answers
                                          .map((answer) =>
                                              buildAnswerHtml(answer)
                                          )
                                          .join("")
                                    : ``
                            }
                            
                        </div>
                    </div>`;
}
