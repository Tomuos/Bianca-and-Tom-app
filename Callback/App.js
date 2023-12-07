import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import ButtonComp from './components/Button';
import TextComp from './components/TextInput';
import { Speak, StopSpeech } from './components/Speech';
import { useState, useEffect } from 'react';
import { Picker } from '@react-native-picker/picker';
import * as Speech from 'expo-speech';
import { useFonts, Roboto_400Regular } from '@expo-google-fonts/roboto';
import  StopButton from './components/StopButton';


export default function App() {
  const [inputText, setInputText] = useState();
  const [selectedVoice, setSelectedVoice] = useState();
  const [voices, setVoices] = useState();

  useEffect(() => {
    Speech.getAvailableVoicesAsync()
    .then(voiceData => setVoices(voiceData))
    
  }, []);

  let fontsLoaded = useFonts({
    Roboto_400Regular,
  });



  if (!fontsLoaded) {
    console.log('Fonts not loaded');
    return null;
  }

  return (
      <View style={styles.container}>
    
          <View style={styles.box}>
     
                <StatusBar style="auto" />
      
              <View style={styles.innerContainer}>
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
                
            <StopButton  
                    handleStopPress={() => StopSpeech()}     
            />
              </View>
          </View>
          
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    alignItems: 'column',
    justifyContent: 'center',
  
  },

  
  box: {
    
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'aquamarine',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    width: '90%',
    height: '30',
    margin: 'auto',
    borderRadius: 10,
  },

  innerContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    width: '100%',
    height: '100%',
  },

  picker: {
    width: '80%',
    color: 'white',
    backgroundColor: '#333',
    marginBottom: 20,
    fontFamily: "Roboto_400Regular",
    fontSize: 15,
  
  },
});

