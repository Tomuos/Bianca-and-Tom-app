import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import ButtonComp from './components/Button';
import TextComp from './components/TextInput';

export default function App() {
  return (
    <View style={styles.container}>
     
      <StatusBar style="auto" />
      <TextComp
        style={styles.input}
        placeholder="Enter your name"
        onChangeText={(text) => console.log(text)}
      />
      <ButtonComp/>
      
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
