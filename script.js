const hour= document.querySelector("#hour");
const min= document.querySelector("#min");
const sec= document.querySelector("#sec");

function setDate() {
    const now = new Date();

    const seconds = now.getSeconds();
    const secondsDegrees = ((seconds / 60) * 360) + 90;
    sec.style.transform = `rotate(${secondsDegrees}deg)`;

    const mins = now.getMinutes();
    const minsDegrees = ((mins / 60) * 360) + ((seconds/60)*6) + 90;
    min.style.transform = `rotate(${minsDegrees}deg)`;

    const houra = now.getHours();
    const hourDegrees = ((houra / 12) * 360) + ((mins/60)*30) + 90;
    hour.style.transform = `rotate(${hourDegrees}deg)`;
}

setInterval(setDate, 1000);

setDate();

const hel = document.querySelector(".lol");
function change() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            hel.classList.remove("lol");
            hel.classList.add("playing");
            resolve();
        }, 3000);
    });
}

function remove() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            hel.classList.toggle("playing");
            resolve();
        }, 3000);
    });
}

async function color() {
    while (true) {
        await remove();
    }
}
color();