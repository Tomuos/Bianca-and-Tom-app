import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import ButtonComp from './components/Button';
import TextComp from './components/TextInput';
import { Speak } from './components/Speech';
import { useState, useEffect } from 'react';
import { Picker } from '@react-native-picker/picker';
import * as Speech from 'expo-speech';


export default function App() {
  const [inputText, setInputText] = useState();
  const [selectedVoice, setSelectedVoice] = useState();
  const [voices, setVoices] = useState();

  useEffect(() => {
    Speech.getAvailableVoicesAsync()
    .then(voiceData => setVoices(voiceData))
    
  }, []);

  return (
    <View style={styles.container}>
     
      <StatusBar style="auto" />
      <TextComp
        style={styles.input}
        placeholder="Enter text"
        onChangeText={setInputText}
        value = {inputText}
      />
     <Picker
        selectedValue={selectedVoice}
        onValueChange={(itemValue, itemIndex) => setSelectedVoice(itemValue)}
        style={styles.picker}
      >
        {voices && voices.map((voice, index) => (
          <Picker.Item key={index} label={voice.name} value={voice.identifier} />
        ))}
      </Picker>

      <ButtonComp
    title="Speak"
    handleSpeech={(selectedVoice) => Speak(inputText, selectedVoice)} // Pass selectedVoice here
    selectedVoice={selectedVoice} // Pass selectedVoice as a prop
/>

      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    alignItems: 'center',
    justifyContent: 'center',
  },
  picker: {
    width: '80%',
    color: 'white',
    backgroundColor: '#333',
    marginBottom: 20,
  },
});

