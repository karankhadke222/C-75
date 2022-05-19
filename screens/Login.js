import React from "react";
import { View,Text,StyleSheet,Image,TouchableOpacity,TextInput,Alert,KeyboardAvoidingView } from "react-native";
import firebase from "firebase";
const bgImage = require("../assets/background2.png");
const bgImage = require("../assets/appIcon.png");
const bgImage = require("../assets/appName.png");

export default class LoginScreen extends Component{
    constructor(props){
        super(props);
        this.state = {
            email:"",
            password:"",

        }
    }

    handleLogin = (email,password) => {
        firebase.auth()
        .signInWithEmailAndPassword(email,password)
        .then(() => {
            this.props.navigation.navigate("BottomTab")
        })
        .catch(error => {
            Alert.alert(error.message)
        })
    }

    render(){
        const {
            email,password
        } = this.state
        return{
            <View> 
                <Text> LoginScreen </Text>
            </View>
        }
    }






}

const styles= StyleSheet.create({
        container:
        {
           flex:1,
           backgroundColor:"white"
        }
        bgImage:{flex:1,
        resizeMode:"cover",
        justifyContent:"center"
    },
 appIcon:{width:280,height:280,resizeMode:"contain",marginTop:80},

 appName:{
    width:130,
    height:130,
    resizeMode:"contain"
 }
})



