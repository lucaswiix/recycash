import React, { useState, useEffect } from 'react';
import { Linking, AsyncStorage, KeyboardAvoidingView, Platform, Text, TextInput, TouchableOpacity } from 'react-native';

import { styles } from './styles';
import Logo from '../../components/Logo';
import { DismissKeyboard } from '../../components/DismissKeyboard';

export default function Login({ navigation }) {
  const [email, setEmail ] = useState('');
  const [password, setPassword ] = useState('');
  const [error, setError ] = useState('');

  loadInBrowser = () => {
    Linking.openURL('http://10.0.40.25/').catch(err => console.error("Couldn't load page", err));
  };

  async function handleLogin(){
    navigation.navigate('Main');
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

    <TouchableOpacity onPress={handleLogin} style={styles.button}>
        <Text style={styles.buttonText}>Entrar</Text>
    </TouchableOpacity>
    <Text style={styles.createAccountText}>Não tem conta? <Text style={styles.createAccountLink} onPress={loadInBrowser}>Criar agora!</Text></Text>
    <Text style={styles.buttonError}>{error}</Text>
</KeyboardAvoidingView>
</DismissKeyboard>
  );
}
