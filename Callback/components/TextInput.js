// TextComp.js
import React from 'react';
import { TextInput, View, StyleSheet } from 'react-native';
import { useFonts, Roboto_700Bold } from '@expo-google-fonts/roboto';

export default function TextComp({ placeholder, onChangeText, value }) {

  let fontsLoaded = useFonts({
    Roboto_700Bold,
  });

  if (fontsLoaded) {
    console.log("Fonts loaded");
  }
  else {
    console.log("Fonts not loaded");
    return null;
  }

  return (
    <View style={localStyles.container}>
      <TextInput
        style={localStyles.input}
        placeholder={placeholder}
        placeholderTextColor='white'
        onChangeText={onChangeText}
        value={value}
      />
    </View>
  );
}

const localStyles = StyleSheet.create({ 
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 4,
    borderColor: 'white',
    color: 'white', // Set the input text color to white for visibility on dark background
    backgroundColor: '#5a5a5a',
    fontSize: 20,
    fontFamily: "Roboto_700Bold",
  },
  container: {
    width: '80%', // Set the width of the container to fit within the view
  },
});
