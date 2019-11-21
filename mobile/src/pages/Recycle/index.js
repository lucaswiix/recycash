import React, { useState, useEffect } from 'react';
import { Keyboard, AsyncStorage, ActivityIndicator, Alert, KeyboardAvoidingView, View, Platform, Text, TextInput, TouchableOpacity } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { styles } from './styles';
import { DismissKeyboard } from '../../components/DismissKeyboard';
import config from '../../config';
import axios from 'axios';

export default function Recycle({ navigation }) {
  const [code, setCode] = useState('');
  const [token, setToken] = useState('')
  const [error, setError] = useState('');
  const [loadingRecycle, setLoadingRecycle] = useState(false);
  const recyclages = useSelector(state => state.recyclage.data);
  const dispatch = useDispatch();

  function cleanCode(msg) {
    setError(msg);
    setLoadingRecycle(false);
    Keyboard.dismiss();
    setCode('');
  }


  async function handleRecycle() {

    setLoadingRecycle(true);
    try {

      await axios.post(`${config.API}/user/recycle`, {
        code
      }, {
        headers: {
          "Authorization": " Bearer " + token
        }
      });
      Alert.alert(
        'O seu codigo foi validado.',
        'O meio ambiente agradece!',
      );
      navigation.navigate('Default');
    } catch (error) {
      cleanCode();
      if (error.response && error.response.status == 401) {
        navigation.navigate('Login');
      }
      if(error.response && error.response.status == 400){
        setError(error.response.data.error);
      }

    }
    setLoadingRecycle(false);

  }

  async function getToken() {
    const $token = await AsyncStorage.getItem('token');
    if (!$token) {
      navigation.navigate('Login');
    }
    setToken($token);
  }
  useEffect(() => {
    getToken();
  }, []);

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
          <Text style={{ fontWeight: 'bold' }}>
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
