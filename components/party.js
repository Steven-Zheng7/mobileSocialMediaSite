import { Text, View, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';

export default function party({navigation}) {
  return (
    <View style={styles.container}>
      <View style={styles.settingScroll}>
        <ScrollView contentContainerStyle={styles.scrollViewContainer}>
          <View style={styles.activeParty}>
            <Image source={require('../assets/activePt.png')}/>
            <Text style={styles.activeText}>Active Party</Text>
            <View style={styles.infoCont}>
              <View style={styles.leader}>
                <Image source={require('../assets/pic2.png')} style={styles.pic2} />
                <Text style={styles.leaderText}>Leader</Text>
              </View>
              <View style={styles.info}>
                <Image source={require('../assets/peopleIcon.png')} />
                <Text style={styles.num}>5</Text>
              </View>
            </View>
            <TouchableOpacity style={styles.viewBtn}>
              <Text style={styles.viewText}>View</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.activeParty}>
            <Image source={require('../assets/activePt.png')}/>
            <Text style={styles.activeText}>Party Invite</Text>
            <View style={styles.infoCont}>
              <View style={styles.leader}>
                <Image source={require('../assets/pic3.png')} style={styles.pic3} />
              </View>
              <View style={styles.info2}>
                <Text style={styles.num}>Charmander</Text>
              </View>
            </View>
            <View style={styles.decision}>
              <TouchableOpacity style={styles.viewBtnCon}>
                <Image source={require('../assets/confirm.png')} />
              </TouchableOpacity>
              <TouchableOpacity style={styles.viewBtnCan}>
                <Image source={require('../assets/cancel.png')} />
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#C3C3C3'
  },
  activeParty: {
    alignSelf: 'center',
    margin: 20,
  },
  activeText: {
    position: 'absolute',
    fontSize: 25,
    fontWeight: 'bold',
    alignSelf: 'center',
  },
  leader: {
    width: 130,
    margin: 20,
    top: 20
  },
  pic2: {
    alignSelf: 'center',
    borderRadius: 100
  },
  pic3: {
    alignSelf: 'center',
    borderRadius: 100,
    marginTop: 25
  },
  leaderText: {
    alignSelf: 'center',
    fontWeight: 'bold',
    fontSize: 20,
    color: '#404040'
  },
  info: {
    alignSelf: 'center',
    left: 25,
    flexDirection: 'row'
  },
  info2: {
    alignSelf: 'center',
    flexDirection: 'row'
  },
  infoCont: {
    position: 'absolute',
    flexDirection: 'row'
  },
  num: {
    fontSize: 24,
    color: '#404040',
    left: 10,
    fontWeight: 'bold'
  },
  viewBtnCon: {
    position: 'absolute',
    width: 50,
    height: 50,
    borderRadius: 20,
    marginTop: 140,
    marginLeft: 160
  },
  viewBtnCan: {
    position: 'absolute',
    width: 50,
    height: 50,
    borderRadius: 20,
    marginTop: 140,
    marginLeft: 270
  },
  viewBtn: {
    position: 'absolute',
    backgroundColor: 'black',
    width: 160,
    height: 46,
    borderRadius: 20,
    marginTop: 150,
    marginLeft: 160
  },
  viewText: {
    alignSelf: 'center',
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    paddingTop: 5
  },
  decision: {
    position: 'absolute',
    flexDirection: 'row'
  }
});