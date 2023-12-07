import React from 'react';
import { Button, View, StyleSheet } from 'react-native';

export default function ButtonComp({ handleSpeech, title, selectedVoice }) {
    return (
        <View>
            <Button
                onPress={() => handleSpeech(selectedVoice)} // Pass selectedVoice to handleSpeech
                title={title}
                color={'#841584'}
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
