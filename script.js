const btn = document.querySelector('.input');
const content = document.querySelector('.content');

function speak(text) {
    const text_speak = new SpeechSynthesisUtterance(text);

    text_speak.rate = 1;
    text_speak.volume = 1;
    text_speak.pitch = 1;

    window.speechSynthesis.speak(text_speak);
}

function wishMe() {
    var day = new Date();
    var hour = day.getHours();

    if (hour >= 0 && hour < 12) {
        speak("Hello Good Morning Boss...");
    } else if (hour >= 12 && hour < 17) {
        speak("Hello Good Afternoon Guru ji...");
    } else {
        speak("Hello Good Evening Sir...");
    }
}

window.addEventListener('load', () => {
    speak("Initializing EchoBot...");
    wishMe();
});

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

recognition.onresult = (event) => {
    const currentIndex = event.resultIndex;
    const transcript = event.results[currentIndex][0].transcript;
    content.textContent = transcript;
    takeCommand(transcript.toLowerCase());
};

btn.addEventListener('click', () => {
    content.textContent = "Listening...";
    recognition.start();
});

function takeCommand(message) {
    if (message.includes("hi") || message.includes("hello")) {
        wishMe();
        speak( "How May I Help You?");

    } else if (message.includes("goodbye") || message.includes("bye")) {
        speak("Goodbye Boss, Have a Nice Day");
    
    } else if (message.includes("what are you doing") || message.includes("What are you doing now")){
        speak("Sir, I'm just talking you now");

    } else if (message.includes('what is your name') || message.includes("aapka naam kya hai")|| message.includes("tum kaun ho")){
        speak("I'm your Virtual Assistant EchoBot");

    } else if (message.includes("open google") || message.includes("hello open google")) {
        window.open("https://google.com", "_blank");
        speak("Opening Google...");
    } else if (message.includes("open youtube")) {
        window.open("https://youtube.com", "_blank");
        speak("Opening Youtube...");
    } else if (message.includes("open facebook")) {
        window.open("https://facebook.com", "_blank");
        speak("Opening Facebook...");
    } else if (message.includes("open telegram")) {
        window.open("https://telegram.org/", "_blank");
        speak("Opening Telegram...");

    } else if (message.includes("open instagram")) {
        window.open("https://www.instagram.com/", "_blank");
        speak("Opening Instagram...");
    } else if (message.includes("open whatsapp")) {
        window.open("https://www.whatsapp.com/", "_blank");
        speak("Opening Whatsapp...");
    } else if (message.includes("open snapchat")) {
        window.open("https://www.snapchat.com/", "_blank");
        speak("Opening Snapchat...");
    } else if (message.includes("open netflix")) {
        window.open("https://netflix.com", "_blank");
        speak("Opening Netflix...");

    } else if (message.includes('what is') || message.includes('who is') || message.includes('what are')) {
        window.open(`https://www.google.com/search?q=${message.replace(" ", "+")}`, "_blank");
        const finalText = "This is what I found on the internet regarding " + message;
        speak(finalText);
    } else if (message.includes('wikipedia')) {
        window.open(`https://en.wikipedia.org/wiki/${message.replace("wikipedia", "").trim()}`, "_blank");
        const finalText = "This is what I found on Wikipedia regarding " + message;
        speak(finalText);
    } else if (message.includes('time')) {
        const time = new Date().toLocaleString(undefined, { hour: "numeric", minute: "numeric" });
        const finalText = "The current time is " + time;
        speak(finalText);
    } else if (message.includes('date')) {
        const date = new Date().toLocaleString(undefined, { month: "short", day: "numeric" });
        const finalText = "Today's date is " + date;
        speak(finalText);
    } else if (message.includes('calculator')) {
        window.open('Calculator:///');
        const finalText = "Opening Calculator";
        speak(finalText);
    } else {
        window.open(`https://www.google.com/search?q=${message.replace(" ", "+")}`, "_blank");
        const finalText = "I found some information for " + message + " on Google";
        speak(finalText);
    }
}