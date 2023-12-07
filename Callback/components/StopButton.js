import React from 'react';
import { TouchableOpacity, StyleSheet, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function StopButton({ handleStopPress }) {
    return (
        <View>
                <TouchableOpacity onPress={handleStopPress} sytle={StyleSheet.stopButton} >
                    <Icon name="stop-circle" size={50} color="red" />
                </TouchableOpacity>
        </View>
    )
}


 