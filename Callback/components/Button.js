import { Button , View, StyleSheet } from "react-native";

export default function ButtonComp({handleSpeech, title}) {
    return(
      <View>
         <Button
        onPress={handleSpeech}
        title={title}
        color={'#841584'}
        // accessibilityLabel="Learn more about this purple button"
      /> 
      </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#841584',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
