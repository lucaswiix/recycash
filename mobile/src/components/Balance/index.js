import React from 'react';
import { View, Text } from 'react-native';

import { styles } from './styles';

export default function Balance({ data }) {

  return (
    <View style={styles.boxing}>
        <Text style={styles.boxHeaderBalance}>
          Saldo
        </Text>
        <Text style={styles.boxDescBalance}>
          R$ {data.balance ? parseFloat(data.balance).toFixed(2) : 0}
        </Text>
      </View>
  );
}
