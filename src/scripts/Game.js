

// Game class to structure the game data
class Game {
    constructor(imageUrl, title, genres, price, description) {
        this.imageUrl = imageUrl;
        this.title = title;
        this.genres = Array.isArray(genres) ? genres : [genres]; // Ensure genres is always an array
        this.price = price;
        this.description = description;
        this.id = this.generateId();
    }

    generateId() {
        return this.title.toLowerCase().replace(/\s+/g, '-');
    }

}

// Function to create a game card from a Game object
function createGameCard(game) {
    const gameJson = JSON.stringify(game).replace(/"/g, '&quot;');
    const library = JSON.parse(localStorage.getItem('library')) || [];
    const isOwned = library.some(libraryGame => libraryGame.id === game.id);

    return `
        <div class="w3-col l3 m4 s12 w3-margin-bottom">
            <div class="w3-card game-card">
                <div class="game-image-container">
                    <div class="game-card-image" style="background-image: url('${game.imageUrl}')"></div>
                    <div class="game-description">
                        <p> ${game.description} </p>
                    </div>
                </div>
                <div class="w3-container w3-padding">
                    <h4 class="w3-text-dark-grey">${game.title}</h4>
                    <p class="w3-text-grey">${game.genres.join(', ')}</p>
                    <div class="w3-row">
                        <div class="w3-col s6">
                            <p class="w3-text-dark-grey">${game.price} kr</p>
                        </div>
                        <div class="w3-col s6 w3-right-align">
                            ${isOwned ?
                                `<button class="w3-button w3-green w3-round" disabled>Owned</button>` :
                                `<button onclick="addToCart(${gameJson})" class="w3-button w3-dark-grey w3-round">Add to Cart</button>`
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
}

// Create some example games
const games = [
    new Game(
        'public/images/dark.jpg',
        'Dark Echoes',
        ['Horror', 'Adventure'],
        299,
        'Explore a haunting world filled with psychological horror and mysterious puzzles. Navigate through dark corridors and uncover the truth behind the echoes of the past.'
    ),
    new Game(
        '../public/images/stellar.jpg',
        'Stellar Conquest',
        ['Strategy', 'Sci-Fi'],
        499,
        'Command your fleet across the galaxy in this epic space strategy game. Build alliances, research advanced technologies, and conquer star systems in your quest for dominion.'
    ),
    new Game(
        '../public/images/medival.jpg',
        'Medieval Warriors',
        ['Action', 'RPG'],
        399,
        'Embark on an epic journey through a medieval realm. Master combat skills, forge legendary weapons, and become a legendary warrior in this action-packed RPG.'
    ),
    new Game(
        '../public/images/race.jpg',
        'Racing Evolution',
        ['Racing'],
        249,
        'Experience high-octane racing action with stunning graphics and realistic physics. Compete in championships, customize your vehicles, and become the ultimate racing champion.'
    ),
    new Game(
        '../public/images/pixel.jpg',
        'Pixel Dungeons',
        ['RPG', 'Indie'],
        199,
        'Dive into this charming retro-style dungeon crawler. Each playthrough is unique with procedurally generated levels, challenging monsters, and countless items to discover.'
    ),
    new Game(
        '../public/images/city.jpg',
        'City Architect',
        ['Simulation'],
        349,
        'Design and build your dream city from the ground up. Manage resources, plan infrastructure, and watch your metropolis grow in this detailed city-building simulation.'
    ),
    new Game(
        '../public/images/forest.jpg',
        'Forest Survival',
        ['Survival', 'Adventure'],
        299,
        'Test your survival skills in a vast wilderness. Craft tools, build shelter, hunt for food, and uncover the secrets hidden within the mysterious forest.'
    ),
    new Game(
        '../public/images/cyber.jpg',
        'Cyber Protocol',
        ['Action', 'Sci-Fi'],
        449,
        'Hack your way through a dystopian cyberpunk world. Navigate corporate security systems, upgrade your cyber implants, and expose a global conspiracy.'
    )
];


// Add games to the container
function parseGameCards(elementId){
    const container = document.getElementById(elementId);
    console.log("hel")
    games.forEach(game => {
        container.innerHTML += createGameCard(game);
    });
}