const pianoKeys = document.querySelectorAll(".piano-keys .key");
const volumeSlider = document.querySelector(".volume-slider input");
const keysCheckbox = document.querySelector(".keys-checkbox input");

let allKeys = [],
  audio = new Audio("tunes/a.wav"); // by default, audio src is 'a' tune

const playTune = (key) => {
  //passing audio src based on key pressed
  audio.src = `tunes/${key}.wav`;
  audio.play(); // playing audio

  //getting clicked key element
  const clickedKey = document.querySelector(`[data-key="${key}"]`);
  //adding active class to the clicked key element
  clickedKey.classList.add("active");
  //removing active class after 150 ms from the clicked key element
  setTimeout(() => {
    clickedKey.classList.remove("active");
  }, 150);
};

pianoKeys.forEach((key) => {
  //adding data-key value to the allKeys array
  allKeys.push(key.dataset.key);
  // calling playTune function with passing data-key value as an argument
  key.addEventListener("click", () => playTune(key.dataset.key));
});

const pressedKey = (e) => {
  //if the pressed key is in the allKeys array, only call playTune function
  if (allKeys.includes(e.key)) playTune(e.key);
};

const handleVolume = (e) => {
  //passing the range slider value as an audio volume
  audio.volume = e.target.value;
};

const showHideKeys = () => {
  // toggling hide class from each key on the checkbox click
  pianoKeys.forEach((key) => key.classList.toggle("hide"));
};

document.addEventListener("keydown", pressedKey);
volumeSlider.addEventListener("input", handleVolume);
keysCheckbox.addEventListener("input", showHideKeys);
