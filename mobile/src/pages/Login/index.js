import React, { useState, useEffect } from 'react';
import { Keyboard, Linking, AsyncStorage, KeyboardAvoidingView, Platform, Text, TextInput, TouchableOpacity } from 'react-native';

import { useDispatch, useSelector } from 'react-redux';
import * as userActions from '../../actions/user';

import { styles } from './styles';
import Logo from '../../components/Logo';
import { DismissKeyboard } from '../../components/DismissKeyboard';
import config from '../../config';
import axios from 'axios';
export default function Login({ navigation }) {
  const [username, setUsername ] = useState('');
  const [password, setPassword ] = useState('');
  const [error, setError ] = useState('');
  const users = useSelector(state => state.user.data);
  const dispatch = useDispatch();
  
  loadInBrowser = () => {
    Linking.openURL('http://10.0.40.25/').catch(err => console.error("Couldn't load page", err));
  };

  async function hasUser(){
    let userStorage = await AsyncStorage.getItem('token');
    let username = await AsyncStorage.getItem('username');
    if(!userStorage || !username){      
      AsyncStorage.clear();
      return;
    } 
    navigation.navigate('Main');
  }

  useEffect(()=>{
    hasUser()
  }, []);
  
  async function handleLogin(){
    let url;
    try {
      const data = {
        username,
        password
      }
      url = `${config.API}/auth/login`;
      const response = await axios.post(url, data);
      await AsyncStorage.setItem('token', response.data.token);
      await AsyncStorage.setItem('username', username);
      navigation.navigate('Main');
    } catch (error) {
      console.log('uri', url);
      console.log(error);
        setError('Aconteceu algum erro.');
    }
    }

  return (
    <DismissKeyboard>

    
    <KeyboardAvoidingView 
    behavior="padding"
    enabled={Platform.OS == "ios"}
    style={styles.container}
>
    <Logo />
    <TextInput 
    autoCapitalize="none"
    autoCorrect={false}
    placeholder="Digite seu e-mail" 
    placeholderTextColor="#999"
    style={styles.input}
    value={username}
    onChangeText={setUsername}
     />

     <TextInput 
    secureTextEntry={true}
    autoCapitalize="none"
    autoCorrect={false}
    placeholder="Senha" 
    placeholderTextColor="#999"
    style={styles.input}
    value={password}
    onChangeText={setPassword}
     />

    <TouchableOpacity disabled={username.length < 4 || password.length < 8} onPress={handleLogin} style={styles.button}>
        <Text style={styles.buttonText}>Entrar</Text>
    </TouchableOpacity>
    <Text style={styles.createAccountText}>Não tem conta? <Text style={styles.createAccountLink} onPress={()=> navigation.navigate('Signup')}>Criar agora!</Text></Text>
    <Text style={styles.buttonError}>{error}</Text>
</KeyboardAvoidingView>
</DismissKeyboard>
  );
}
