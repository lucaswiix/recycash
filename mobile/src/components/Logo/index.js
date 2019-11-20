import React from 'react';
import { View, Text} from 'react-native';

import { styles } from './styles';

export default function Logo() {
    return (
        <View style={styles.box}>
            <Text style={styles.title}>
            Recycash
            </Text>
        </View>
    );
}
