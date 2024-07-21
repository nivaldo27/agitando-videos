const videos = document.querySelectorAll('video');
videos.forEach(video => { // Corrigi o parâmetro 'video' no forEach
    video.addEventListener('mouseover', () => {
        video.play();
    });
    video.addEventListener('mouseleave', () => {
        video.pause();
    });
});