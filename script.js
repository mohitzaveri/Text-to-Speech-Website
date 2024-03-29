let speech = new SpeechSynthesisUtterance();

let voices = [];
let voiceSelect = document.querySelector("select");

window.speechSynthesis.onvoiceschanged = () =>{
    voices = window.speechSynthesis.getVoices();
    speech.voice = voices[0];

for (let i = 0; i < voices.length; i++) {
    let voice = voices[i];
    let option = document.createElement("option");
    option.textContent = voice.name; 
    voiceSelect.appendChild(option);
}

};

voiceSelect.addEventListener("change", ()=>{
    speech.voice = voices[voiceSelect.selectedIndex];
})

document.querySelector("button").addEventListener("click", ()=> {
    speech.text = document.querySelector("textarea").value;
    window.speechSynthesis.speak(speech);
})

