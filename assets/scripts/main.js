// main.js

// Get elements
const volume_slider = document.getElementById("volume-slider");
const volume_number = document.getElementById("volume-number");
const audio = document.getElementById("horn-sound");
const audio_img = document.getElementById("volume-image");

function initializeVolume() {
  function changeSlider() {
    audio.volume = volume_slider.value / 100;
    volume_number.value = Math.round(audio.volume * 100);
    updateAudioImg();
  }

  function changeNumber() {
    audio.volume = volume_number.value / 100;
    volume_slider.value = volume_number.value;
    updateAudioImg();
  }

  function updateAudioImg() {
    if (audio.volume == 0) {
      audio_img.src = "./assets/media/icons/volume-level-0.svg";
    } else if (audio.volume <= 0.33) {
      audio_img.src = "./assets/media/icons/volume-level-1.svg";
    } else if (audio.volume <= 0.66) {
      audio_img.src = "./assets/media/icons/volume-level-2.svg";
    } else {
      audio_img.src = "./assets/media/icons/volume-level-3.svg";
    }
  }
  volume_number.addEventListener("submit", (event) => {
    event.preventDefault;
    return false;
  });
  volume_slider.addEventListener("change", changeSlider);
  volume_number.addEventListener("change", changeNumber);
}

window.addEventListener("load", initializeVolume);
