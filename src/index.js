fetch('http://localhost:3000/games')
.then(response => response.json())
.then(gameData => {
    buildNav(gameData);
    setDetail(gameData[0]);
    hookUpSubmit();
});

function buildNav(gameArray) {
    let gameList = document.querySelector(".game-list");
    gameArray.forEach(game => {
        let navItem = document.createElement("h5");
        navItem.textContent += `${game.name} (${game.manufacturer_name})`;
        gameList.appendChild(navItem);
        navItem.addEventListener('click', (event) => {
            setDetail(game);
        });
    });
}

let currentGame;

function setDetail(game) {
    currentGame = game;

    const detailImage = document.querySelector("#detail-image");
    detailImage.src = game.image;

    const detailTitle = document.querySelector("#detail-title");
    detailTitle.textContent = game.name;

    const detailHighScore = document.querySelector("#detail-high-score");
    detailHighScore.textContent = game.high_score;
}

function hookUpSubmit() {
    let form = document.querySelector("#high-score-form");
    form.addEventListener('submit', (event) => {
        event.preventDefault();

        currentGame.high_score = event.target["score-input"].value

        setDetail(currentGame);

    });
}