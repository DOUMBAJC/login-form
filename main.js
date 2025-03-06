const img = document.querySelector('.image-container img');
const imagesSrc = [
    'african-american-baby-girl-names-c-6746f3.jpeg', 
    'african-american-father-reading-to-daughter-6713a5.jpeg',
    'african-american-mother-and-baby-girl-6716e0.jpeg',
    'african-girl-names-starting-with-a-abena-673dba.jpeg',
    'african-mother-and-child-under-starry-sky-670a7d.jpeg',
    'ddfb1026143fc13b2c4bc9143d97fe70.jpg',
    'ethiopian-women-traditional-clothing-66fe9f.webp',
    'south-african-girl-names-celebration-672849.webp',
];

function changeImage() {
    img.style.opacity = '0';
    
    setTimeout(() => {
        const randomImage = `images/${imagesSrc[Math.floor(Math.random() * imagesSrc.length)]}`;
        img.src = randomImage;
        img.style.opacity = '1';
    }, 500);
}

// Première image au chargement
changeImage();

// Changement d'image toutes les 5 secondes
setInterval(changeImage, 5000);