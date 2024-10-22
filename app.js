const images = document.querySelectorAll('.image');

images.forEach(image => {
    image.addEventListener('click', () => {
        
        images.forEach(img => {
            img.classList.remove('big'); 
        });
        image.classList.add('big'); 
    });
});
