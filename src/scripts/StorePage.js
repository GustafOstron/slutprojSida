
function getStorePage() {
    return `
        <div class="w3-row-padding" id="storpage-conatiner">
            <div class="w3-container w3-margin-bottom">
                <input class="w3-input w3-border w3-quarter" type="text" placeholder="Search games..." />
                <select class="w3-select w3-border w3-quarter w3-margin-left">
                    <option value="" disabled selected>Sort by</option>
                    <option value="1">Price: Low to High</option>
                    <option value="2">Price: High to Low</option>
                    <option value="3">Name: A to Z</option>
                    <option value="4">Release Date</option>
                </select>
            </div>
        </div>
        <div class="w3-center w3-padding-32">
            <div class="w3-bar">
                <a href="#" class="w3-bar-item w3-button w3-hover-dark-grey">«</a>
                <a href="#" class="w3-bar-item w3-button w3-dark-grey">1</a>
                <a href="#" class="w3-bar-item w3-button w3-hover-dark-grey">2</a>
                <a href="#" class="w3-bar-item w3-button w3-hover-dark-grey">3</a>
                <a href="#" class="w3-bar-item w3-button w3-hover-dark-grey">4</a>
                <a href="#" class="w3-bar-item w3-button w3-hover-dark-grey">»</a>
            </div>
        </div>
    `;
}




