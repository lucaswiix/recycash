import React, {useState} from 'react';
import { Alert, ScrollView, TouchableOpacity, View, TextInput, Text } from 'react-native';

import { styles } from './styles';

import { useDispatch, useSelector } from 'react-redux';

import * as userActions from '../../actions/user';
import uuid from 'uuid/v4';

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

    const users = useSelector(state => state.user.data);
    const dispatch = useDispatch();

    async function handleSignup(){
        setError('');
        if(
            name.length > 3 &&
            email.length > 6 &&
            pass.length > 5 &&
            pass == cpass &&
            bank.length > 3 &&
            acc.length > 4 &&
            agencia.length > 3
            ){

                try {
                    dispatch(userActions.addUserAction(
                        {
                            id: uuid(),
                            name: name,
                            email: email,
                            password: pass,
                            balance: 0,
                            bank: {
                                name: bank,
                                account: acc,
                                agency: agencia
                            },
        
                        }
                    ));
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
            <Text>Nome:</Text>
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

        <View style={styles.form}>
            <Text>Banco:</Text>
            <TextInput 
                autoCapitalize="none"
                autoCorrect={false}
                placeholder="Caixa" 
                placeholderTextColor="#999"
                style={styles.input}
                value={bank}
                onChangeText={setBank}
            />
        </View>
        <View style={styles.form}>
            <Text>Conta:</Text>
            <TextInput 
                autoCapitalize="none"
                autoCorrect={false}
                keyboardType={'numeric'}
                placeholderTextColor="#999"
                style={styles.input}
                value={acc}
                onChangeText={setAcc}
            />
        </View>
        <View style={styles.form}>
            <Text>Agencia:</Text>
            <TextInput 
                autoCapitalize="none"
                autoCorrect={false}
                placeholderTextColor="#999"
                style={styles.input}
                value={agencia}
                onChangeText={setAgencia}
            />
        </View>
        <TouchableOpacity onPress={handleSignup} style={styles.button}>
        <Text style={styles.buttonText}>Cadastrar</Text>
    </TouchableOpacity>
    </ScrollView>
  );
}
