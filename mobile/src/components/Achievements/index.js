import React from 'react';
import { View, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function Achievement({ title, isDone }) {

    return (
        <View style={{
            flexDirection: 'row',
            justifyContent: 'space-between'

        }}>
            {isDone ?
                <Ionicons name="ios-star" size={20} color="#FFBF00" />
                :
                <Ionicons name="ios-star-outline" size={20} color="#FFBF00" />
            }

            <Text>{title}</Text>
        </View>
    );
}
