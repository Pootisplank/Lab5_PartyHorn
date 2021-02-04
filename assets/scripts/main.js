// main.js

// Get audio elements
const volume_slider = document.getElementById("volume-slider");
const volume_number = document.getElementById("volume-number");
const audio = document.getElementById("horn-sound");
const audio_img = document.getElementById("volume-image");

// Get
const radio_air_horn = document.getElementById("radio-air-horn");
const radio_car_horn = document.getElementById("radio-car-horn");
const radio_party_horn = document.getElementById("radio-party-horn");
const sound_img = document.getElementById("sound-image");

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

function initializeSoundSelect() {
  radio_air_horn.addEventListener("change", () => {
    audio.src = "./assets/media/audio/air-horn.mp3";
    sound_img.src = "./assets/media/images/air-horn.svg";
  });
  radio_car_horn.addEventListener("change", () => {
    audio.src = "./assets/media/audio/car-horn.mp3";
    sound_img.src = "./assets/media/images/car.svg";
  });
  radio_party_horn.addEventListener("change", () => {
    audio.src = "./assets/media/audio/party-horn.mp3";
    sound_img.src = "./assets/media/images/party-horn.svg";
  });
}

window.addEventListener("load", initializeVolume);
window.addEventListener("load", initializeSoundSelect);
