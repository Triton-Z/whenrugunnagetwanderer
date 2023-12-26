let width = window.innerWidth;
let height = window.innerHeight;

let images = [
"https://upload-os-bbs.hoyolab.com/upload/2023/01/08/186039421/2b94c966b2c08ff5a845e1291e5adad7_720073000411325597.jpg?x-oss-process=image%2Fresize%2Cs_1000%2Fauto-orient%2C0%2Finterlace%2C1%2Fformat%2Cwebp%2Fquality%2Cq_80",
"https://upload-os-bbs.hoyolab.com/upload/2023/03/02/108688321/520b47ea5fb54186b0d10739957e81e6_4980914806712338140.png?x-oss-process=image%2Fresize%2Cs_1000%2Fauto-orient%2C0%2Finterlace%2C1%2Fformat%2Cwebp%2Fquality%2Cq_80",
"https://i.pinimg.com/736x/ef/7a/72/ef7a72f20167f03cbd123885d78a7395.jpg",
"https://i.redd.it/ur5frfuf7uwa1.png",
"https://i.ytimg.com/vi/1vXVkGS0qUE/maxresdefault.jpg",
"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9RRR9TAu1IhZVhQaL-lHJRc2hodqk3qfcDQ&usqp=CAU",
"https://media.tenor.com/7Lyji8L08XMAAAAM/wanderer.gif",
"https://i.ytimg.com/vi/QUVj9YTw4Do/maxresdefault.jpg",
"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvF0XaXHjvu4kFl2pAsjTzcwyBxhYMkc4BYQ&usqp=CAU",
"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkIFGZ1WkoRsIhO_GbMAVW9dyAzSGjZjE69yHXNR6t6SrTAeB3fznN6jT9TCi6S_24Vfo&usqp=CAU",
"https://ih1.redbubble.net/image.4220487846.5514/clk3q,white,white,1000x-c,115,0,675,900.jpg",
"https://media.tenor.com/8w3F9LT3PIsAAAAM/scaramouche-wanderer.gif",
"https://media.tenor.com/epv8LcAMOlQAAAAe/cat-scaramouche.png",
"https://media.tenor.com/YkLGwi0Am70AAAAj/scaramouche-wanderer.gif",
"https://ih1.redbubble.net/image.4594714067.6503/flat,750x,075,f-pad,750x1000,f8f8f8.jpg",
"https://64.media.tumblr.com/06d067c2e479a5771ca7962b7a2bf7a2/c0e58598071c584b-7c/s1280x1920/437609c1c3bdbd0cfd5572cca8ab2830b1828368.png",
"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRt-25VLkK2Dfb2n8YiYwXV-3n2O4Sa3kqNqA&usqp=CAU",
"https://i.pinimg.com/736x/b7/9f/fc/b79ffce3621a4139c1c6d1cb48456ad4.jpg"
];

function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function loop () {
    const image = document.createElement("img");
    const scale = 1 + Math.random();
    
    let currentDegree = 0;

    image.src = images[randomNumber(0, images.length)];
    image.style.position = "absolute";
    image.style.left = `${randomNumber(0, width)}px`;
    image.style.top = `${randomNumber(0, height)}px`;
    image.style.transform = `rotate(0deg) scale(${scale})`;

	document.body.appendChild(image);

    function spin () {
        image.style.transform = `rotate(${currentDegree}deg) scale(${scale})`;
        currentDegree++;

        if (currentDegree > 360) {
            return;
        } else {
            setTimeout(spin, 0);
        }
    }

    spin();

    setTimeout(loop, 1000);
}


window.addEventListener("resize", () => {
    width = window.innerWidth;
    height = window.innerHeight;
})

window.onload = loop;
