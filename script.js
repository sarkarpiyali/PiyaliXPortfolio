
const canvas = document.getElementById('noise');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

function drawNoise() {
    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    const data = imageData.data;
    for (let i = 0; i < data.length; i += 4) {
        const color = Math.random() * 255;
        data[i] = color;
        data[i + 1] = color;
        data[i + 2] = color;
        data[i + 3] = 255;
    }
    ctx.putImageData(imageData, 0, 0);
    requestAnimationFrame(drawNoise);
}

drawNoise();

setTimeout(() => {
    canvas.classList.add('noise-animate');
}, 0);





document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.getElementById('menu-toggle');
    const sidebar = document.querySelector('.sidebar');
    const sidebarLinks = document.querySelectorAll('.sidebar .nav-link');

    menuToggle.addEventListener('change', function () {
        if (menuToggle.checked) {
            sidebar.classList.add('open');
        } else {
            sidebar.classList.remove('open');
        }
    });

    sidebarLinks.forEach(link => {
        link.addEventListener('click', function () {
            sidebar.classList.remove('open');
            menuToggle.checked = false;
        });
    });
});





document.getElementById('contactForm').addEventListener('submit', function (e) {
    e.preventDefault();

    setTimeout(function () {
        const successMessage = document.getElementById('success');
        const errorMessage = document.getElementById('error');

        const success = Math.random() > 0.5; 

        if (success) {
            successMessage.textContent = 'Success';
            successMessage.style.display = 'block';
            errorMessage.style.display = 'none';
        } else {
            errorMessage.textContent = 'Error';
            errorMessage.style.display = 'block';
            successMessage.style.display = 'none';
        }

        document.getElementById('contactForm').reset();
    }, 1000);
});




function downloadFile(event) {
    event.preventDefault();
    const link = event.currentTarget;
    const url = link.href;
    window.open(url, "_blank");
    const tempLink = document.createElement("a");
    tempLink.href = url;
    tempLink.download = "Piyali_Sarkar x Resume.pdf";
    document.body.appendChild(tempLink);
    tempLink.click();
    document.body.removeChild(tempLink);
  }


