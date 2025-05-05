import { Text, View, StyleSheet, Image, ImageBackground, TextInput, TouchableOpacity} from 'react-native';

export default function create({navigation}) {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <ImageBackground source={require('../assets/Worldtree.png')} resizeMode="cover" style={styles.image}/>    
      </View>
      <View style={styles.boxView}>
        <Image source={require('../assets/box.png')} />
      </View>
      <View style={styles.textLogIn}>
        <Text style={styles.textLogInText}>Create Account</Text>
      </View>
      <View style={styles.textLogIn}>
        <View style={styles.info}>
          <Text style={styles.wordUsername}>Username:</Text>
          <TextInput style={styles.box} placeholder='Username' placeholderTextColor='black' />
          <Text style={styles.wordUsername}>Email Address:</Text>
          <TextInput style={styles.box} placeholder='Email' placeholderTextColor='black' />
          <Text style={styles.wordUsername}>Password:</Text>
          <TextInput style={styles.box} placeholder='Password' placeholderTextColor='black' />
        </View>
      </View>
      <View style={styles.buttons}>
        <TouchableOpacity style={styles.confirm} onPress={ () => navigation.navigate('Profile')}>
          <Image source={require('../assets/confirm.png')}/>
        </TouchableOpacity>
        <TouchableOpacity style={styles.cancel} onPress={ () => navigation.navigate('Home')} >
          <Image source={require('../assets/cancel.png')}/>
        </TouchableOpacity>
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
    paddingLeft: 80,
    fontWeight: 'bold',
    fontFamily: 'Alatsi'
  },
  wordUsername: {
    fontSize: 24,
    paddingLeft: 30,
    fontWeight: 'bold',
  },
  box: {
    width: 325,
    height: 30,
    backgroundColor: 'white',
    marginLeft: 30,
    marginTop: 10
  },
  info: {
    position: 'absolute',
    paddingTop: 300
  },
  buttons: {
    flexDirection: 'row',
    position: 'absolute'
  },
  confirm: {
    backgroundColor: 'pink',
    marginTop: 540,
    marginLeft: 80,
    borderRadius: 100
  },
  cancel: {
    backgroundColor: 'pink',
    marginTop: 540,
    marginLeft: 100,
    borderRadius: 100
  }
});