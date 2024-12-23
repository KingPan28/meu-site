window.onload = function() {
    // Link do YouTube para testar (vídeo público)
    const videoLink = "https://www.youtube.com/watch?v=nGGxZe3I2DE"; // Link de exemplo, pode ser substituído
    embedVideo(videoLink);
};

// Função para incorporar o vídeo do YouTube
function embedVideo(youtubeLink) {
    const videoId = getVideoIdFromUrl(youtubeLink);
    
    if (videoId) {
        const iframe = document.createElement("iframe");
        iframe.src = "https://www.youtube.com/embed/${videoId}?autoplay=1";  // Aqui forçamos a reprodução automática
        iframe.frameborder = "0";
        iframe.allowfullscreen = true;

        // Adiciona o iframe ao container
        const videoContainer = document.getElementById("videoContainer");
        videoContainer.innerHTML = "";  // Limpa conteúdo anterior
        videoContainer.appendChild(iframe);  // Adiciona o vídeo
    } 
    else {
        alert("O link do YouTube não é válido.");
    }
}

// Função para extrair o ID do vídeo do YouTube
function getVideoIdFromUrl(url) {
    const regex = /(?:youtube\.com(?:\/[^\/\n\s]+\/\S+\/|\/(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
    const match = url.match(regex);
    return match ? match[1] : null;
}