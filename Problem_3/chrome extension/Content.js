//array of images
let catsImages = [
 
    "https://media.tenor.com/1iSARWJr-TEAAAAC/among-us-twerk.gif",
    "https://i.kym-cdn.com/photos/images/newsfeed/002/111/401/002.gif",
    "https://media.tenor.com/Ltmwl5HsghwAAAAC/among-us-twerk.gif",
    "https://media2.giphy.com/media/K0ZZjkjYKiD7y/giphy.gif",
    "https://i.pinimg.com/originals/c8/9f/ef/c89fefe41a8c0ebd944cf88ca60381e8.gif",
    "https://c.tenor.com/BrCcrHCNYt8AAAAC/naruto-dancing.gif",
    "https://i.pinimg.com/originals/ac/b0/42/acb042780f88d8059d176da4fe93f46c.gif"
];

//array of colours
let listColors = [
    "blue",
    "green",
    "red",
    "yellow"
]


//adding random images
const imgs = document.getElementsByTagName("img");
for(let i = 0; i < imgs.length; i++) {
    const randomImg = Math.floor(Math.random() * catsImages.length)
    imgs[i].src = catsImages[randomImg]

}
//changes headers
const headers = document.getElementsByTagName("h1");
for (let i = 0; i < headers.length; i++){
    headers[i].innerText = "Gifs are awesome";
}

const p = document.getElementsByTagName("p");
for (let i = 0; i < p.length; i++){
    p[i].innerText = "With great meme power comes great responsibilty";

    //generating random colors
    const randomColur = Math.floor(Math.random() * listColors.length)
    p[i].style.color = listColors[randomColur]

    //chaning fint size
    p[i].style.fontSize = "50px"

    //changing background color
    document.body.style.backgroundColor="green"
}