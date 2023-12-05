import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import ButtonComp from './components/Button';
import TextComp from './components/TextInput';
import { Speak } from './components/Speech';
import { useState } from 'react';

export default function App() {
  const [inputText, setInputText] = useState()
  return (
    <View style={styles.container}>
     
      <StatusBar style="auto" />
      <TextComp
        style={styles.input}
        placeholder="Enter text"
        onChangeText={setInputText}
        value = {inputText}
      />
      <ButtonComp
        title="Speak"
        handleSpeech= {() => Speak(inputText)}
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
});
