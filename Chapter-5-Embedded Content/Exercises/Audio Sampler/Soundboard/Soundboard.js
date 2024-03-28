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
    
    // I used an event listener on the button to handle any instances where the user clicks it.
    btn.addEventListener('click', () => {

        // So that when the user clicks the button, the corresponding audio clip would play.
        document.getElementById(sound).play();
    })

    // I appended the button to the to a div named 'Play-button' in the HTML.
    document.getElementById('Play-button').appendChild(btn);
})
