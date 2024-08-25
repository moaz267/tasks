const container = document.querySelector(".container");

cards = [
    {
        id: 1,
        title: "Card 1",
        description: "Perfected Strategies for you",
        image: "img.png",
    },
    {
        id: 2,
        title: "Card 2",
        description: "Perfected Strategies for you",
        image: "img.png",
    },
    {
        id: 3,
        title: "Card 3",
        description: "Perfected Strategies for you",
        image: "img.png",
    },

]
for (let i = 0; i <cards.length; i++) {
    container.innerHTML += `        <div class="card">
            <div class="card-img">
                <div class="img-box">
                    <img class="img" src="img.png" alt="">
                </div>
                <div class="box">
                    <img class="adidas" src="adidas.png" alt="">
                </div>
                
            </div>
            <div class="card-des">
                <h1>Perfected Strategies for you</h1>
                <p>Lorem ipsum dolor sit amet consectetur. Id est convallis neque elementum.</p>
            </div>
        </div>`
}


