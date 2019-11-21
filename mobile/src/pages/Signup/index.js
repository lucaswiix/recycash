import React, {useState} from 'react';
import { AsyncStorage, Alert, ScrollView, TouchableOpacity, View, TextInput, Text } from 'react-native';

import { styles } from './styles';

import { useDispatch, useSelector } from 'react-redux';

import * as userActions from '../../actions/user';
import uuid from 'uuid/v4';

import config from '../../config';
import axios from 'axios';

export default function Signup({navigation}) {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [cpass, setCpass] = useState('');

    //conta
    const [bank, setBank] = useState('');
    const [acc, setAcc] = useState('');
    const [agencia, setAgencia] = useState('');
    const [error, setError] = useState('');

    async function handleSignup(){
        setError('');
        if(
            username.length > 4 &&
            email.length > 6 &&
            pass.length > 7 &&
            pass == cpass
            ){

                try {
                    const data = {
                        username,
                        email,
                        password:pass
                    }
                    const response = await axios.post(`${config.API}/auth/register`, data);
                    await AsyncStorage.setItem('token', response.data.token);
                    await AsyncStorage.setItem('username', username);
                    Alert.alert('Cadastro realizado com sucesso!');

                    navigation.navigate('Login');
        
                } catch (error) {
                    setError('Alguma coisa incorreta aconteceu.')
                    console.log(error);
                }
        }else{
            setError('Verifique todos os campos.')
        }
    }

  return (
    <ScrollView style={styles.box}>
        <Text>{error && error}</Text>
        <View style={styles.form}>
            <Text>Username:</Text>
            <TextInput 
                autoCapitalize="none"
                autoCorrect={false}
                placeholder="Fulano da silva" 
                placeholderTextColor="#999"
                style={styles.input}
                value={name}
                onChangeText={setName}
            />
        </View>

        <View style={styles.form}>
            <Text>E-mail:</Text>
            <TextInput 
                autoCapitalize="none"
                autoCorrect={false}
                keyboardType={'email-address'}
                placeholder="fulanosilva@mail.com" 
                placeholderTextColor="#999"
                style={styles.input}
                value={email}
                onChangeText={setEmail}
            />
        </View>

        <View style={styles.form}>
            <Text>Senha:</Text>
            <TextInput 
                autoCapitalize="none"
                autoCorrect={false} 
                secureTextEntry={true}
                placeholderTextColor="#999"
                style={styles.input}
                value={pass}
                onChangeText={setPass}
            />
        </View>

        <View style={styles.form}>
            <Text>Confirmacao:</Text>
            <TextInput 
                autoCapitalize="none"
                autoCorrect={false}
                secureTextEntry={true}
                placeholderTextColor="#999"
                style={styles.input}
                value={cpass}
                onChangeText={setCpass}
            />
        </View>
      
        <TouchableOpacity onPress={handleSignup} style={styles.button}>
        <Text style={styles.buttonText}>Cadastrar</Text>
    </TouchableOpacity>
    </ScrollView>
  );
}
