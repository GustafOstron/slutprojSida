
function getLibraryPage() {
    const library = JSON.parse(localStorage.getItem('library')) || [];
    const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));

    if (!loggedInUser) {
        return '<p class="w3-center">Please log in to view your library</p>';
    }

    if (library.length === 0) {
        return '<p class="w3-center">Your library is empty</p>';
    }

    return `
        <div class="w3-container">
            <h2 class="w3-text-dark-grey">My Library</h2>
            <div class="w3-row-padding">
                ${library.map(game => `
                    <div class="w3-col l3 m4 s12 w3-margin-bottom">
                        <div class="w3-card">
                            <div class="game-card-image" style="background-image: url('${game.imageUrl}')"></div>
                            <div class="w3-container w3-padding">
                                <h4 class="w3-text-dark-grey">${game.title}</h4>
                                <p class="w3-text-grey">${game.genres.join(', ')}</p>
                                <div class="w3-row">
                                    <div class="w3-col s12">
                                        <button class="w3-button w3-dark-grey w3-round w3-block">Play</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                `).join('')}
            </div>
        </div>
    `;
}
