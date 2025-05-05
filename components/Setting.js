import { Text, View, StyleSheet, Image, ScrollView, TouchableOpacity} from 'react-native';

export default function Setting({navigation}) {
  return (
    <View style={styles.container}>
      <View style={styles.settingScroll}>
        <ScrollView contentContainerStyle={styles.scrollViewContainer}>
          <TouchableOpacity style={styles.views}>
            <Text style={styles.text}>Name</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.views}>
            <Text style={styles.text}>Age</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.views}>
            <Text style={styles.text}>Gender</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.views}>
            <Text style={styles.text}>Email</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.views}>
            <Text style={styles.text}>Profile Pic</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.views}>
            <Text style={styles.text}>Bio</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.views}>
            <Text style={styles.text}>Blocks</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.views}>
            <Text style={styles.text}>Games</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.views}>
            <Text style={styles.text}>Visibility</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.views}>
            <Text style={styles.text}>Mode</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.views}>
            <Text style={styles.text}>Theme</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.views}>
            <Text style={styles.text}>Setting</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.views}>
            <Text style={styles.text}>Sign Out</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
      <View style={styles.overlay}>
        <View style={styles.buttons}>
          <TouchableOpacity style={styles.pressable}>
            <Image source={require('../assets/confirm.png')} style={styles.image}/>
          </TouchableOpacity>
          <TouchableOpacity style={styles.pressable}>
            <Image source={require('../assets/cancel.png')}style={styles.image} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'C3C3C3'
  },
  views: {
    backgroundColor: '#C3C3C3',
    flex: 1,
    margin: 10,
    borderRadius: 10,
    height: 50
  },
  text: {
    fontSize: 35,
    fontWeight: 'bold',
    paddingLeft: 10
  },
  overlay: {
    flex: 1,
    backgroundColor: '#E8E8E8'
  },
  settingScroll: {
    flex: 5,
    backgroundColor: 'D9D9D9'
  },
  buttons: {
    flexDirection: 'row',
    marginTop: 30,
  },
  pressable: {
    width: 80,
    height: 80,
    marginLeft: 80,
    borderRadius: 100
  },
  image: {
    width: 80,
    height: 80
  }
});
