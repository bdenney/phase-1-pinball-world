// Challenge #1
// Make a request to http://localhost:3000/games 
fetch("http://localhost:3000/games")
.then(response => response.json())
.then(pinballGamesJson => {
    // console.log(pinballGamesJson);
    
    // <nav id="nav-list" class="game-list">
    const navElement = document.getElementById("nav-list");
    // console.log(navElement);

    // The end result should be of the format name (manufacturer).

    // KEYWORD    [VARIABLE OF EACH ITEM]  [KEYWORD]    [JSON ARRAY]
    //  for          (const game             of       pinballGamesJson) {
    for (const game of pinballGamesJson) {
        // console.log(game);

        // gameElement === <h5>name (manufacturer)</h5>
        const gameElement = document.createElement("h5");
        gameElement.textContent = `${game.name} (${game.manufacturer_name})`;
        // console.log(gameElement);

        // Add the names of all the games in the .game-list nav element.
        navElement.appendChild(gameElement);
    }

    // FOR EACH EXAMPLE - EXACT SAME CODE AS ABOVE
    // pinballGamesJson.forEach(game => {
    //     console.log(game);

    //     // gameElement === <h5>name (manufacturer)</h5>
    //     const gameElement = document.createElement("h5");
    //     gameElement.textContent = `${game.name} (${game.manufacturer_name})`;
    //     console.log(gameElement);

    //     // Add the names of all the games in the .game-list nav element.
    //     navElement.appendChild(gameElement);
    // });
});

const formElement = document.getElementById("high-score-form");

formElement.addEventListener('submit', (event) => {
    event.preventDefault();

    console.log("form submitted!");

    const scoreInputElement = document.getElementById("score-input");
    console.log(scoreInputElement);

    const score = scoreInputElement.value;
    console.log(score);


    const highScoreElement = document.getElementById("detail-high-score");
    console.log(highScoreElement)

    highScoreElement.textContent = score;
});