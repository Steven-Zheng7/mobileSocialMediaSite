import { Text, View, StyleSheet, Image , ImageBackground, Button, TouchableOpacity} from 'react-native';

export default function Login( {navigation} ) {
  return (
    <View style={styles.container}>
      <ImageBackground source={require('../assets/Worldtree.png')} resizeMode="cover" style={styles.image}/>
      <View style={styles.logoView}>
        <Image source={require('../assets/title.png')} />
      </View>
      <TouchableOpacity style={styles.signButtonView} onPress={ () => navigation.navigate('Sign In')}>
        <Image source={require('../assets/signIn.png')} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.createButtonView} onPress={ () => navigation.navigate('Create Account')}>
        <Image source={require('../assets/signUp.png')} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: 'center',
  },
  logoView: {
    flex: 1,
    position: 'absolute',
    top: '15%',
    alignSelf: 'center'
  },
  signButtonView: {
    flex: 1,
    alignSelf: 'center',
    top: '55%',
    position: 'absolute'
  },
  createButtonView: {
    flex: 1,
    alignSelf: 'center',
    top: '75%',
    position: 'absolute'
  },
});