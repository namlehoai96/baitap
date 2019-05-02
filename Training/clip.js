let media = document.getElementById('media');
let btn = document.getElementById('trailerBtn');

let isPlaying = 0;

function playVideo() {
  if(!isPlaying){
    media.classList.add('show');
    isPlaying = 1;
  }else{
    media.classList.remove('show');
    isPlaying = 0;
  }
  
}

btn.addEventListener('click', playVideo);
