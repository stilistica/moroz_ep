let img = document.querySelector('.arrow');
let direction = 1;
let speed = 1;
let range = 25; // діапазон руху в пікселях
let initialTop = img.style.top ? parseInt(img.style.top) : 214;

function animate() {
    let y = img.style.top ? parseInt(img.style.top) : 214;

    if (y >= initialTop + range) {
        direction = -1;
    } else if (y <= initialTop) {
        direction = 1;
    }

    img.style.top = (y + direction * speed) + 'px';

    requestAnimationFrame(animate);
}

animate();