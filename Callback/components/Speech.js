import * as Speech from "expo-speech";

export async function GetAvailableVoices() {
    const voices = await Speech.getAvailableVoicesAsync();
    return voices;
}


export function Speak(text, selectedVoice) {
    let options = {};
    if (selectedVoice) {
        options.voice = selectedVoice;
    }
    Speech.speak(text, options);
}
