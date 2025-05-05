import React, { useState } from 'react';
import { Text, View, StyleSheet, Image, ImageBackground, TextInput, TouchableOpacity, Alert} from 'react-native';


export default function Signin({navigation}) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = () => {
    if(username === 'Admin' && password === 'Password') {
      console.log('success')
      navigation.navigate('Profile')
    }
    else if(username === 'Reizo' && password === '12345') {
      console.log('success')
      navigation.navigate('Reizo')
    }
    else {
      Alert.alert('Error', 'Invalid username or password');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <ImageBackground source={require('../assets/Worldtree.png')} resizeMode="cover" style={styles.image}/> 
        <View style={styles.imageTitle}>
           <Image source={require('../assets/title.png')}  />
        </View>
      </View>
      <View style={styles.boxView}>
        <Image source={require('../assets/box.png')} />
      </View>
      <View style={styles.textLogIn}>
        <Text style={styles.textLogInText}>Log In</Text>
      </View>
      <View style={styles.textLogIn}>
        <Text style={styles.wordUsername}>Username:</Text>
      </View>
      <View style={styles.textLogIn}>
        <Text style={styles.wordPassword}>Password:</Text>
      </View>
      <View style={styles.buttons}>
        <View style={styles.confirmBox}>
          <TouchableOpacity style={styles.confirm} onPress={handleSignIn}>
            <Image source={require('../assets/confirm.png')}/>
          </TouchableOpacity>
        </View>
        <View style={styles.cancelBox}>
          <TouchableOpacity style={styles.cancel} onPress={ () => navigation.navigate('Home')} >
            <Image source={require('../assets/cancel.png')}/>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.textLogIn}>
        <TextInput style={styles.inputPassword}placeholder='Password' placeholderTextColor='black' value={password} onChangeText={text => setPassword(text)}/>
      </View>
      <View style={styles.textLogIn}>
        <TextInput style={styles.inputUsername}placeholder='Email' placeholderTextColor='black' value={username} onChangeText={text => setUsername(text)}/>
      </View>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  image: {
    flex: 1
  },
  imageContainer: {
    flex: 1,
    justifyContent: 'center'
  },
  boxView: {
    flex: 1,
    justifyContent: 'center',
    position: 'absolute',
    alignSelf: 'center',
    top: '30%',
  },
  textLogIn: {
    position: 'absolute',
  },
  textLogInText: {
    fontSize: 32,
    paddingTop: 240,
    paddingLeft: 150,
    fontWeight: 'bold',
    fontFamily: 'Alatsi'
  },
  wordUsername: {
    fontSize: 24,
    paddingLeft: 30,
    paddingTop: 330,
    fontWeight: 'bold'
  },
  inputUsername: {
    marginLeft: '10%',
    backgroundColor: 'white',
    justifyContent: 'center',
    width: 320,
    marginTop: 370,
    height: 30,
    borderRadius: 5
  },
  inputPassword: {
    marginLeft: '10%',
    backgroundColor: 'white',
    justifyContent: 'center',
    width: 320,
    marginTop: 470,
    height: 30,
    borderRadius: 5
  },
  wordPassword: {
    fontSize: 24,
    paddingLeft: 30,
    paddingTop: 430,
    fontWeight: 'bold'
  },
  buttons: {
    justifyContent: 'space between',
    flexDirection: 'row',
    alignItems: 'center',
    position: 'absolute',
    paddingTop: 540
  },
  confirm: {
    width: 50,
    height: 50,
    paddingLeft: 0,
    backgroundColor: 'green',
    borderRadius: 200
  },
  cancel: {
    width: 50,
    height: 50,
    paddingLeft: 0,
    backgroundColor: 'pink',
    borderRadius: 200
  },
  confirmBox: {
    paddingLeft: 80,
    paddingBottom: 40
  },
  cancelBox: {
    paddingLeft: 120,
    paddingBottom: 40
  },
  imageTitle: {
    height: 100,
    width: 100,
    paddingBottom: 720,
    position: 'absolute',
    paddingLeft: 50
  }
});