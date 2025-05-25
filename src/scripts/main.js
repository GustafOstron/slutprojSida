



let mainElement

function showDefualt(){
    mainElement = document.getElementById('main-content-container')
    showStorePage()
    setupAccountButtons()
    updateCartCount()
}

function showStorePage(){
    mainElement.innerHTML = getStorePage()
    parseGameCards('storpage-conatiner')
}

function showShoppingCartPage(){
    mainElement.innerHTML = getShoppingCartHtml()
}

function showLibraryPage() {
    mainElement.innerHTML = getLibraryPage();
}

function setupAccountButtons() {
    const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));
    const navbar = document.getElementById('navbar-container');

    navbar.innerHTML = `
        <a class="w3-bar-item w3-large w3-padding-16">
            <img src="../../public/images/sadGamesLogo.png" alt="GameStore" style="height: 28px;">
        </a>
        <div class="w3-bar-item w3-right">
            Cart: <span id="cart-count">0</span>
        </div>

    `;

    if (loggedInUser) {
        // User is logged in - show username and logout button
        navbar.innerHTML += `
            <button class="w3-bar-item w3-button w3-right w3-large w3-padding-16 w3-red" onclick="logout()">
                Logout
            </button>
            <button class="w3-bar-item w3-button w3-right w3-large w3-padding-16">
                ${loggedInUser.username}
            </button>
        `;
    } else {
        // User is not logged in - show login and signup buttons
        navbar.innerHTML += `
            <a href="SignupPage.html" class="w3-bar-item w3-button w3-right w3-large w3-padding-16">
                Sign up
            </a>
            <a href="LoginPage.html" class="w3-bar-item w3-button w3-right w3-large w3-padding-16">
                Login
            </a>
        `;
    }

}

function w3_open() {
    document.getElementById("mySidebar").style.display = "block";
}

function w3_close() {
    document.getElementById("mySidebar").style.display = "none";
}
