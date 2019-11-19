import React, { useState } from 'react';
import { ActivityIndicator, Alert, KeyboardAvoidingView, View, Platform, Text, TextInput, TouchableOpacity } from 'react-native';

import { styles } from './styles';

import { DismissKeyboard } from '../../components/DismissKeyboard';

export default function Recycle({ navigation }) {
    const [code, setCode] = useState('');
    const [error, setError] = useState('');
    const [loadingRecycle, setLoadingRecycle] = useState(false);

    async function handleRecycle() {
      setLoadingRecycle(true)
      setTimeout(()=>{
        Alert.alert(
            'O seu codigo foi validado.',
            'O meio ambiente agradece!',
          );
          navigation.navigate('Default');
      }, 2000);
    }

  return (
    <DismissKeyboard>
    <KeyboardAvoidingView 
    behavior="padding"
    enabled={Platform.OS == "ios"}
>
  <View style={styles.box}> 
    <Text style={styles.boxHeader}>Como fazer?</Text>
    <View style={styles.boxDesc}>
      <Text>
      Para adicionar uma nova reciclagem e necessario levar o lixo para um dos locais 
      de colheta. Apos o despacho use o codigo recebido abaixo para receber a sua recompensa.
      O meio ambiente agradece.
      </Text>
    </View>
    <Text style={{fontWeight: 'bold'}}>
        Codigo: 
    </Text>
<TextInput 
    autoCapitalize="none"
    autoCorrect={false}
    placeholder="Digite seu codigo" 
    placeholderTextColor="#999"
    style={styles.input}
    value={code}
    onChangeText={setCode}
     />
    
    <TouchableOpacity activeOpacity={code.length < 8 ? 0.5 : 1} disabled={code.length < 8 ? true : false} onPress={handleRecycle} style={styles.button}>
    
      {
        loadingRecycle 
        ? 
        <ActivityIndicator size="small" color="#fff" />
        :
        <Text style={styles.buttonText}>Enviar</Text>
      } 
    </TouchableOpacity>
    <Text style={styles.buttonError}>{error}</Text>
  </View>
    </KeyboardAvoidingView>
  </DismissKeyboard>
  );
}
