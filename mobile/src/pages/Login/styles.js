import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    BtnShowLan:{
        position: "absolute",
        bottom: 0,
        alignSelf: 'center',
        marginBottom: 10,
    },
    container: {
        flex:1,
        backgroundColor:'#f5f5f5',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 30
    },
    input: {
        height:46,
        alignSelf: 'stretch',
        borderRadius: 4,
        borderWidth: 1,
        marginTop:10,
        borderColor: '#ddd',
        paddingHorizontal: 15,        
    },
    createAccountText:{
        margin:10,
    },
    createAccountLink:{
        color:'#005999'
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
    matchContainer:{
        ... StyleSheet.absoluteFillObject,
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        justifyContent: 'center',
        alignItems: 'center'
    },
    lanContainer:{
        ... StyleSheet.absoluteFillObject,
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        justifyContent: 'center',
        alignItems: 'center'
    },
    matchCloseBtn: {
        alignSelf:'center',
        color:'#fff',
    },
    closeMatch: {
        fontSize: 16,      
        color:'rgba(255, 255, 255, 0.8)',
        marginTop: 30,
        textAlign: 'center',
        fontWeight:'bold'
    },
    btnToggleNetwork: {
        fontSize: 16,      
        color: 'rgba(0, 0, 0, 0.8)',
        marginTop: 30,
        textAlign: 'center',
        fontWeight:'bold'
    },
    matchImage: {
        height: 60,
        resizeMode: 'contain'
    }
  });
  