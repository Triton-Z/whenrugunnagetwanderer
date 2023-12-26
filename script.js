let width = window.innerWidth;
let height = window.innerHeight;

let images = [""];

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