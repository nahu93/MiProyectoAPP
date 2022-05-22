/*import React, {useState , useReducer, useCallback} from "react";
import { 
    KeyboardAvoidingView,
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    TextInput,
    Button,
    Alert
          } from "react-native";
import { useDispatch } from "react-redux";
import { COLORS } from "../constants/colors";
import { signup } from "../store/action/auth.action";
import Input from "../components/Input";



const FORM_INPUT_UPDATE = 'FORM_INPUT_UPDATE';

const formReducer = (state,action) => {
    if (action.type === FORM_INPUT_UPDATE){
        const updateValues = {
            ...state.inputValues,
            [action.input]: action.value,
        };
        const updatedValidities = {
            ...state.inputValidities,
            [action.input]: action.isValid,
        };
        let updatedFormIsValid= true;
        for (const key in updatedValidities) {
            updatedFormIsValid = updatedFormIsValid && updatedValidities
        }
        return {
            FormIsValid: updatedFormIsValid,
            inputValidities: updatedValidities,
            inputValues: updateValues,
        };
    } 
    return state;
}

const AuthScreen = () => {
    const [pass,setPass] = useState ('');
    const [mail,setMail] = useState ('');
    const title = 'REGISTRO',
          message = 'ya tienes cuenta?',
          messageAction= 'Ingresar',
          messageTarget= 'Login';

    const dispatch = useDispatch ();
    const [formState,formDispatch] = useReducer (formReducer, {
        inputValue:{
            email: '',
            password: ''
        },
        inputValidities: {
            email:false,
            password: false,
        },
        FormIsValid:false
    })

    const handleSignIn = () => {
        dispatch (signup(mail,pass))
    }

    const onInputChangeHandler = useCallback (
        (inputIdentifier,inputValue,InputValidity) => {
            let valor = 0
            valor++;
            console.log(valor);
            formDispatch({
                type:FORM_INPUT_UPDATE,
                value:inputValue,
                isValid:InputValidity,
                input: inputIdentifier,
            });
        },
        [formDispatch]

    );


    return (
        <KeyboardAvoidingView
        behavior='height'
        style= {styles.screen}
        >
         <View  style= {styles.container}>
             <Text  style= {styles.title}>{title}</Text>
             <Input
             id= "email"
             lable="Email"
             KeyboardType="email-address"
             required
             email
             autoCapitalize="none"
             errorText="por favor un email valido"
             oninputChange={onInputChangeHandler} 
             initialValue=""
             />
             <Input
            id= "password"
            lable="Clave"
            KeyboardType="default"
            secureTextEntry
            required
            minLenght={6}
            autoCapitalize="none"
            errorText="por favor ingrese un password"
            oninputChange={onInputChangeHandler} 
            initialValue=""

             />
             <View style={styles.button}>
                 <Button
                 title="REGISTRARME"
                 color={COLORS.primary}
                 onPress= {handleSignIn}
                 />

             </View>
             <View style={styles.prompt}>
                 <Text style={styles.promptMessage} >{message}</Text>
                 <TouchableOpacity onPress={() => console.log ("Registrar")}>
                     <Text style={styles.promptButton} > {messageAction}</Text>
                 </TouchableOpacity>
             </View>
        </View>   
         </KeyboardAvoidingView>
    )

}

const styles = StyleSheet.create ({
   
    screen: {
        flex:1,
        justifyContent:'center',
        alignItems:'center',
    },
    title:{
        fontSize:24,
        fontFamily: 'Courgette',
        marginBottom:18,
        textAlign: 'center',
    },
    container:{
        width:'80%',
        maxWidth:400,
        padding:12,
        margin:12,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 10,
        backgroundColor: 'white',
    },
    prompt:{
        alignItems:'center',
    },
    promptMessage:{
        fontSize:16,
        fontFamily:'Courgette',
        color:'#333'
    },
    promptButton:{
        fontSize:16,
        fontFamily:'Courgette',
        color:'#333'
    },
    button:{
        backgroundColor:'#333',
        marginVertical:20,
    },
});

export default AuthScreen */