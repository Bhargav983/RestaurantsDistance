import React,{useState,useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  Dimensions,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,SafeAreaView
} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
 const Login=({ navigation })=> {

  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [screenHeight,setScreenHeight]=useState(0)
  const [screenWidth,setScreenWidth]=useState(0)
  const checkLogin=async()=>{
   
  if(email!="" && password!="")
  {
    fetch('https://iiiqbets.com/CRM-DEMO/admin/loginapi.php', {
    method:'POST',
    headers:{
      'Accept':'application/json',
      'Content-Type': 'application/json',
    
  },
    body: JSON.stringify({
      email:email,
      password:password,
    }),
  })
    .then((response)=>response.text())
    .then((response)=>{
      var res=JSON.parse(response);
            
    if(res[0].Message.status===0){
      navigation.navigate('ListenRedux');
   }
   else
   alert('Wrong username / password')
    })
    .catch((err)=>{
        console.warn(err);
    })
  ;
 console.log('email =',email,'  Password= ',password);

    }

    else
    {alert('Please fill the fields');}

    }

  
const getScreenDetails=(e)=>{
  Dimensions.addEventListener('change',({window:{width,height}})=>{
    if(width <height)
    console.log('portrait')
    else
    console.log('landscape');
  });
setScreenWidth(Dimensions.get('window').width);
setScreenHeight(Dimensions.get('window').height);
console.log('Screen Size=',screenHeight,screenWidth)
}
  return (
    <ScrollView  contentContainerStyle={{ flexGrow: 1, paddingBottom: 300 }}>
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
    <SafeAreaView style={screenHeight > screenWidth ? styles.ContainerPortrait : styles.ContainerLandscape}  onLayout={getScreenDetails} >
      <View style={styles.container}>
        <View style={styles.bigCircle}></View>
        <View style={styles.smallCircle}></View>
        <View style={styles.centerizedView}>
          <View style={styles.authBox}>
           
            <Text style={styles.loginTitleText}>ManekTech</Text>
            <View style={styles.hr}></View>
            <View style={styles.inputBox}>
              <Text style={styles.inputLabel}>Email</Text>
              <TextInput
                style={styles.input}
                value={email}
                keyboardType='email-address'
                textContentType='emailAddress'
                onChangeText={setEmail}
              />
            </View>
            <View style={styles.inputBox}>
              <Text style={styles.inputLabel}>Password</Text>
              <TextInput
                style={styles.input}
                value={password}
                secureTextEntry={true}
                textContentType='password'
                onChangeText={setPassword}
              />
            </View>
            
            <TouchableOpacity style={styles.loginButton} onPress={() =>checkLogin()}>
              <Text style={styles.loginButtonText}>Login</Text>
            </TouchableOpacity>

            {/* <TouchableOpacity>
              <Text style={styles.registerText}>
                Don't have an account? Register Now
              </Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
            </TouchableOpacity> */}
          </View>
        </View>
      </View>
   </SafeAreaView>
    </TouchableWithoutFeedback>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
  }, ContainerPortrait: {
    flex: 1,
    flexDirection: 'column',
    
    position: 'relative',
  },
  ContainerLandscape: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  bigCircle: {
    width: Dimensions.get('window').height * 0.7,
    height: Dimensions.get('window').height * 0.7,
    backgroundColor: '#3AB0FF',
    borderRadius: 1000,
    position: 'absolute',
    right: Dimensions.get('window').width * 0.25,
    top: -50,
  },
  smallCircle: {
    width: Dimensions.get('window').height * 0.4,
    height: Dimensions.get('window').height * 0.4,
    backgroundColor: '#FF06B7',
    borderRadius: 1000,
    position: 'absolute',
    bottom: Dimensions.get('window').width * -0.2,
    right: Dimensions.get('window').width * -0.3,
  },
  centerizedView: {
    width: '100%',
    top: '15%',
  },
  authBox: {
    width: '80%',
    backgroundColor: '#DAEAF1',
    borderRadius: 20,
    alignSelf: 'center',
    paddingHorizontal: 14,
    paddingBottom: 30,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    borderColor:'red',
    borderWidth:2
  },
  logoBox: {
    width: 100,
    height: 100,
    backgroundColor: '#FF06B7',
    borderRadius: 1000,
    alignSelf: 'center',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    top: -50,
    marginBottom: -50,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
  },
  loginTitleText: {
    fontSize: 26,
    fontWeight: '600',
    marginTop: 20,
    color:'black',
    textAlign:'center'
  },
  hr: {
    width: '100%',
    height: 0.5,
    backgroundColor: '#444',
    marginTop: 6,
  },
  inputBox: {
    marginTop: 10,
  },
  inputLabel: {
    fontSize: 18,
    marginBottom: 6,
    fontWeight:'600',
    color:'black',
    marginTop:6
  },
  input: {
    width: '100%',
    height: 40,
    backgroundColor: '#F2D1D1',
    borderRadius: 4,
    paddingHorizontal: 10,
    color:'black',
    fontWeight:'500',
    fontSize:15
  },
  loginButton: {
    backgroundColor: '#3AB0FF',
    marginTop: 35,
    paddingVertical: 10,
    borderRadius: 4,
    marginBottom:30
  },
  loginButtonText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
  },
  registerText: {
    textAlign: 'center',
    marginTop: 20,
    fontSize: 16,
    color:'black',
    fontWeight:'400'
  },
  forgotPasswordText: {
    textAlign: 'center',
    marginTop: 12,
    fontSize: 16,
    color:'black',
    fontWeight:'400'
  },
});

export default Login;