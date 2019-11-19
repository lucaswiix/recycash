import React from 'react';
import { FontAwesome5 } from '@expo/vector-icons';

// import { Container } from './styles';

export default function RecycleBtn({navigation}) {
  return ( 
      <FontAwesome5 name="recycle" size={24} onPress={navigation.navigate('newRecycling')} color="white" style={{
        padding:10
      }} />
  );
}
