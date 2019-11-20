import React, { useState, useEffect } from 'react';
import { Keyboard, AsyncStorage, ActivityIndicator, Alert, KeyboardAvoidingView, View, Platform, Text, TextInput, TouchableOpacity } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { styles } from './styles';
import { DismissKeyboard } from '../../components/DismissKeyboard';

export default function Recycle({ navigation }) {
    const [code, setCode] = useState('');
    const [error, setError] = useState('');
    const [loadingRecycle, setLoadingRecycle] = useState(false);
    const recyclages = useSelector(state => state.recyclage.data);
    const dispatch = useDispatch();

    function cleanCode(msg){
        setError(msg);
        setLoadingRecycle(false);
        Keyboard.dismiss();
        setCode('');
    }


    async function handleRecycle() {
      setLoadingRecycle(true);

      let rec = recyclages.find(recyclage => recyclage.code == code);
      if(!rec) {        
        return cleanCode('Codigo invalido.')
      }
      let userStorage = await AsyncStorage.getItem('user');
      let user = JSON.parse(userStorage);
      if(user.history){
        let alreadyUsed = user.history.find(rec => rec.code == code)
        if(alreadyUsed)
          return cleanCode('Este codigo ja foi utilizado.')
      }

      user.balance += rec.price;
      if(!user.history)
        user.history = [];
      user.history.push(rec);

      let totalSize = user.history.reduce((acc, curr) => acc + curr.size, 0);
      if(totalSize > 50){
        let kgSize = user.achievements.find(arch => arch.id == 1);
        kgSize.isDone = true;
      }

      await AsyncStorage.setItem('user', JSON.stringify(user));
      Alert.alert(
        'O seu codigo foi validado.',
        'O meio ambiente agradece!',
        );
      navigation.navigate('Default', { userNavigation: user });
      setLoadingRecycle(false);
      
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
    keyboardType={'numeric'}
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
