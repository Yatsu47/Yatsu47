let currentScene = 0;

const scenes = [
    {
        text: "Welcome aboard my cosmic plane! Ready for an interstellar journey?",
        choices: ["Yes, let's go!", "Tell me more first"]
    },
    {
        text: "Great! We're headed to the rings of Saturn. Hold on tight!",
        choices: ["Look out the window", "Ask about Saturn"]
    }
    // Add more scenes as needed
];

function updateScene() {
    document.getElementById('story-text').innerText = scenes[currentScene].text;
    const choicesDiv = document.getElementById('choices');
    choicesDiv.innerHTML = '';
    scenes[currentScene].choices.forEach((choice, index) => {
        const button = document.createElement('button');
        button.innerText = choice;
        button.onclick = () => {
            currentScene = (currentScene + 1) % scenes.length;
            updateScene();
        };
        choicesDiv.appendChild(button);
    });
}

const audio = new Audio('https://github.com/Yatsu47/FlareJack/blob/14547d60a1df35b684524117687106348a2507a5/Rozdzial1.mp3');
document.getElementById('play-music').addEventListener('click', () => {
    audio.play();

document.getElementById('speak-button').onclick = () => {
    responsiveVoice.speak(scenes[currentScene].text);
};

updateScene();
