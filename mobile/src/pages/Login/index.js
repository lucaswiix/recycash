import React, { useState, useEffect } from 'react';
import { Keyboard, Linking, AsyncStorage, KeyboardAvoidingView, Platform, Text, TextInput, TouchableOpacity } from 'react-native';

import { useDispatch, useSelector } from 'react-redux';
import * as userActions from '../../actions/user';

import { styles } from './styles';
import Logo from '../../components/Logo';
import { DismissKeyboard } from '../../components/DismissKeyboard';

export default function Login({ navigation }) {
  const [email, setEmail ] = useState('');
  const [password, setPassword ] = useState('');
  const [error, setError ] = useState('');
  const users = useSelector(state => state.user.data);
  const dispatch = useDispatch();
  
  loadInBrowser = () => {
    Linking.openURL('http://10.0.40.25/').catch(err => console.error("Couldn't load page", err));
  };

  async function hasUser(){
    let userStorage = await AsyncStorage.getItem('user');
    if(userStorage) navigation.navigate('Main');    
  }
  useEffect(()=>{
    hasUser()
  }, []);
  
  async function handleLogin(){
    let user = users.find(user => user.email == email && user.password == password);
    if(!user){
      setEmail('')
      setPassword('')
      setError('Email ou senha invalidos.');
      Keyboard.dismiss();
      return;
    }
    try {
      user.history = [];
      await AsyncStorage.setItem('user', JSON.stringify(user));
      navigation.navigate('Main');
    } catch (error) {
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
    value={email}
    onChangeText={setEmail}
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

    <TouchableOpacity disabled={email.length < 7 || password.length < 6} onPress={handleLogin} style={styles.button}>
        <Text style={styles.buttonText}>Entrar</Text>
    </TouchableOpacity>
    <Text style={styles.createAccountText}>Não tem conta? <Text style={styles.createAccountLink} onPress={()=> navigation.navigate('Signup')}>Criar agora!</Text></Text>
    <Text style={styles.buttonError}>{error}</Text>
</KeyboardAvoidingView>
</DismissKeyboard>
  );
}
