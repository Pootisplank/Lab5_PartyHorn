// main.js

// Get elements
const volume_slider = document.getElementById("volume-slider");
const volume_number = document.getElementById("volume-number");
const audio = document.getElementById("horn-sound");

function initializeVolume() {
  function changeSlider() {
    audio.volume = volume_slider.value / 100;
    volume_number.value = Math.round(audio.volume * 100);
  }

  function changeNumber() {
    audio.volume = volume_number.value / 100;
    volume_slider.value = volume_number.value;
  }

  volume_slider.addEventListener("change", changeSlider);
  volume_number.addEventListener("change", changeNumber);
}

window.addEventListener("load", initializeVolume);
