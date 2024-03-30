// I created an array that contains all the "id" I created that stores each of their audio elements.
const sounds = ['ah-ha', 'back-of-the-net', 'bangoutoforder', 'dan', 'emailoftheevening', 'hellopartridge', 'iateascotchegg', 'imconfused'];

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
      
    // I created this line to create a span element that would hold the duration texts.
    const lengthofsample = document.createElement('span');

    // This line sets the text content with duration
    lengthofsample.innerText = `(${samplelength} second/s)`;
      
    // The following lines is to place the duration texts underneath the button text.
    // This is used to add a line break. 
    btn.appendChild(document.createElement('br'));

    // This line is to append the durationSpan.
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
