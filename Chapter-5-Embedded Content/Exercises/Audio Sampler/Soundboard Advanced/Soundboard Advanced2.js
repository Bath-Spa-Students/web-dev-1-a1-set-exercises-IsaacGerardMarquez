// I created an array that contains all the "id" I created that stores each of their audio elements.
const sounds = ['Mud-squelch-sound-effect', 'Bye-bye-sound-effect', 'Blinking-sound-effect', 'Funny-duck-call-sound-effect', 'Hip-hip-hooray-sound-effect', 'Oh-my-god-sound-effect', 'Thwip-sound-effect', 'Pig-toy-funny-sound', 'Cartoon-slime-squelch-sound-effect'];

// To iterate over each ID in the array I created.
sounds.forEach(sound => {
    
   // I created a button for each audio clip.
    const btn = document.createElement('button');

    // I created a class to named "Soundboard-button" to style it in CSS.
    btn.classList.add('Soundboard-button');

    // To add the corresponding texts inside each button.
    btn.innerText = sound;
    

// The following lines is to display the length of the sample in seconds underneath the sample title.
// To retrieve the audio elements by their IDs.
const sampleaudio = document.getElementById(sound);

// This line triggers a function that would be executed once the metadata is available.
sampleaudio.onloadedmetadata = function() {

// I created this line to calculate the length of the samples in seconds and rounding them off.    
const samplelength = Math.round(sampleaudio.duration);
      
    // I created this line to create a span element that would hold the length of the samples.
    const lengthofsample = document.createElement('span');

    // This line sets the text content with duration
    lengthofsample.innerText = `(${samplelength} second/s)`;
      
    // The following lines is to place the length of the samples underneath the button text.
    // This is used to add a line break. 
    btn.appendChild(document.createElement('br'));

    // This line is to append the lengthofsample.
    btn.appendChild(lengthofsample);
  };


    // I used an event listener on the button to handle any instances where the user clicks it.
    btn.addEventListener('click', () => {

        // So that when the user clicks the button, the corresponding audio clip would play.
        document.getElementById(sound).play();
    })

    // I appended the button to the to a div named 'Play-button' in the HTML.
    document.getElementById('Play-button').appendChild(btn);
})


// Text to Speech Feature
function textToAudio() {

    // This would get the user's text input that would be converted to speech.
    let texttospeech = document.getElementById("text-to-speech").value;

    // I created a new SpeechSynthesisUtterance object.
    let speech = new SpeechSynthesisUtterance();
    
    // I set the language of the speech to English.
    speech.lang = "en-US";

    // I set the text to be spoken.
    speech.text = texttospeech;

    // I set the volume of the speech to 1.
    speech.volume = 1;

    // I set the rate of the speech to 1.
    speech.rate = 1;

    // I set the pitch of the speech to 1, which is the normal pitch.
    speech.pitch = 1;

    // This line is used to initiate the speech synthesis.
    window.speechSynthesis.speak(speech);}