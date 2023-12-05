import { Button , View, StyleSheet } from "react-native";

export default function ButtonComp() {
    return(
      <View>
         <Button
        onPress={() => {
          alert('You tapped the button!');
        }}
        title="Learn More"
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
