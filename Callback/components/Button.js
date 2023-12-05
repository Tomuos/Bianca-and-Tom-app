import { Button } from "react-native";

export default function ButtonComp() {
    return(
         <Button
        onPress={() => {
          alert('You tapped the button!');
        }}
        title="Learn More"
        color="#841584"
        // accessibilityLabel="Learn more about this purple button"
      /> 
    )
}

