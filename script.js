function changeVideo(videoSrc, thumbnailSrc) {
    var videoPlayer = document.getElementById('video-player');
    videoPlayer.src = videoSrc;
    videoPlayer.parentElement.load(); // Reload the video player
    videoPlayer.play(); // Auto-play the video after changing
  }
  