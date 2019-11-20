import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    box:{
        alignSelf: 'stretch',
        backgroundColor:'#fff',
        padding: 20,
    },
    form: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        textAlignVertical: 'center',
        alignItems: 'center'
    },
    input: {
        width:150,
        height:46,
        alignSelf: 'stretch',
        borderRadius: 4,
        borderWidth: 1,
        marginTop:10,
        borderColor: '#ddd',
        paddingHorizontal: 15,        
    },
    button: {
        height:46,
        alignSelf: 'stretch',
        backgroundColor: '#4CBC4C',
        borderRadius: 4,
        marginTop: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonText: {
        color: '#FFF',
        fontWeight: 'bold',
        fontSize: 16,
    },
    buttonError: {
        marginTop: 15,
        color:'#999',
        fontWeight: 'bold',
        fontSize: 16
    },
  });
  