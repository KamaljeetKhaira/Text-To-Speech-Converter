let speech = new SpeechSynthesisUtterance();//this line create a new instance of the  SpeechSynthesisUtterance
//objec, which reresent the text that will be spoken 


let voices = [];//this line initializes an empty array called voices where the available voices will be stored

let voiceSelect = document.querySelector("select");//this line select the select element form html document, presumably 
//used for selecting diferent voices

window.speechSynthesis.onvoiceschanged = () => {//is an event that fires when the list of available voices has been 
    //updated. the assigned arrow function  is a callback that execute when this event occurs



    voices = window.speechSynthesis.getVoices();//get all the voices available on the device using getvices()
    //and assign them to the array
    speech.voice = voices[0];//by default start with first voice

    voices.forEach((voice, i) => (voiceSelect.options[i] = new Option(voice.name, i))); // this loop iterate over
    //voices array and populate the <select> element (vioceSelect) with option representing d/f voices. it create a new
    //option object for each voice and assign the voices name as the option text and index i as the opotion value.
};

voiceSelect.addEventListener("change", () =>{
    speech.voice = voices[voiceSelect.value]; // set the vioce property of the speechSynthesisUtterance object(speech)
    //to the selected voice, allowing the user to choose a specific voice from the dropdown menu.
});

document.querySelector("button").addEventListener("click", () =>{  //select button when we click 
    speech.text = document.querySelector("textarea").value;  //take value from textarea and assign to st
    window.speechSynthesis.speak(speech);  //using speak method we listen our speech 

});

