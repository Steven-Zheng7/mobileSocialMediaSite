import React, { useEffect, useState } from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity, Button, ScrollView} from 'react-native';
import { fetchOverwatchData } from './api';

export default function main({navigation}) {
  const [overwatchData, setOverwatchData] = useState({playerName: null, rank: null});

  useEffect( () => {
    fetchOverwatchData()
      .then(data => {setOverwatchData(data)})
      .catch(error => console.error('Error fetching Overwatch data:', error))
  }, []);

  const getRankIcon = (rank) => {
    if (!rank) {
      // Return default icon if rank is null or undefined
      return require('../assets/tin.png');
    }

    const rankIcons = {
      'bronze': require('../assets/bronze.png'),
      'silver': require('../assets/silver.png'),
      'gold': require('../assets/owGold.png')
      
    };
    return rankIcons[rank] || require('../assets/owGold.png');
  };


  
  return (
    <View style={styles.container}> 
      <View style={styles.header}>
        <View style={styles.headerView}>
          <TouchableOpacity style={styles.exitButton}>
            <Image source={require('../assets/exit.png')}/>
          </TouchableOpacity>
          <TouchableOpacity onPress={ () => navigation.navigate('Friend List')}>
            <Image source={require('../assets/friend.png')}/>
          </TouchableOpacity>
          <TouchableOpacity onPress={ () => navigation.navigate('Messages')}>
            <Image source={require('../assets/message.png')}/>
          </TouchableOpacity>
          <TouchableOpacity onPress={ () => navigation.navigate('Party')}>
            <Image source={require('../assets/party.png')}/>
          </TouchableOpacity>
          <TouchableOpacity >
            <Image source={require('../assets/post.png')}/>
          </TouchableOpacity>
          <TouchableOpacity onPress={ () => navigation.navigate('Setting')} >
            <Image source={require('../assets/setting.png')}/>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.profile}>
        <View style={styles.picView}>
          <Image style={styles.picture} source={require('../assets/reizo.png')}/>
        </View>
        <View style={styles.nameTitle}>
          <Text style={styles.nameText}> Reizo </Text>
          <Text style={styles.nameTitleText}> [Master Procrastinator] </Text>
          <TouchableOpacity style={styles.linkButton}>
            <Image source={require('../assets/link.png')} style={styles.linkImg}/>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.game}>
        <View style={styles.gameBar}>
          <Image source={require('../assets/gameLogo.png')} style={styles.gameIcon} />
          <Text style={styles.textGame}>Games</Text>
        </View>
          <ScrollView contentContainerStyle={styles.scrollViewContainer} horizontal={true}>
            <View style={styles.gameApi}>
              <View style={styles.gameBox}>
                <Image source={require('../assets/gamebox.png')} />
                <Image source={require('../assets/ow.png')} style={styles.logo}/>
                <Image source={getRankIcon(overwatchData.rank)}  style={styles.rank} />
              </View>
              <View style={styles.gameBox}>
                <Image source={require('../assets/gamebox.png')} />
                <Image source={require('../assets/valorant.png')} style={styles.logo}/>
                <Image source={require('../assets/valorantRank.png')} style={styles.rank} />
              </View>
              <View style={styles.gameBox}>
                <Image source={require('../assets/gamebox.png')} />
                <Image source={require('../assets/lol.png')} style={styles.logo}/>
                <Image source={require('../assets/lolRank.png')} style={styles.rank} />
              </View>
              <View style={styles.gameBox}>
                <Image source={require('../assets/gamebox.png')} />
                <Image source={require('../assets/apex.png')} style={styles.logo}/>
                <Image source={require('../assets/apexSilver.png')} style={styles.rank} />
              </View>
            </View>
          </ScrollView>
      </View>
      <View style={styles.timeline}>
        <View style={styles.gameBar}>
          <TouchableOpacity style={styles.popup}> 
            <Image source={require('../assets/timeIcon.png')} style={styles.gameIcon} />
            <Text style={styles.textGame}>Timeline</Text>
          </TouchableOpacity>
        </View>
        <ScrollView contentContainerStyle={styles.scrollViewContainer}>
            <View style={styles.timelineView}>
              <View style={styles.postBox}>
                <Image source={require('../assets/postBox.png')} />
                <Image source={require('../assets/reizo.png')} style={styles.postPic} />
                <Text style={styles.postBoxText}>120 sq, no bryn.....</Text>
                <Text style={styles.likes}>100</Text>
                <View style={styles.formatComment}>
                  <Text style={styles.comment}>Comments</Text>
                  <Text> </Text>
                  <Text style={styles.numbers}>300</Text>
                </View>
                <View style={styles.replyAndLike}>
                  <TouchableOpacity style={styles.like}>
                    <Image source={require('../assets/likebtm.png')}/>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.reply}>
                    <Image source={require('../assets/replybtm.png')}/>
                  </TouchableOpacity>
                </View>
                <TouchableOpacity style={styles.post} />
              </View>
              <View style={styles.postBox}>
                <Image source={require('../assets/postBox.png')} />
                <Image source={require('../assets/reizo.png')} style={styles.postPic} />
                <Text style={styles.postBoxText}>Procrastinating....</Text>
                <Text style={styles.likes}>50</Text>
                <View style={styles.formatComment}>
                  <Text style={styles.comment}>Comments</Text>
                  <Text> </Text>
                  <Text style={styles.numbers}>400</Text>
                </View>
                <View style={styles.replyAndLike}>
                  <TouchableOpacity style={styles.like}>
                    <Image source={require('../assets/likebtm.png')}/>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.reply}>
                    <Image source={require('../assets/replybtm.png')}/>
                  </TouchableOpacity>
                </View>
                <TouchableOpacity style={styles.post} />
              </View>
              <View style={styles.postBox}>
                <Image source={require('../assets/postBox.png')} />
                <Image source={require('../assets/reizo.png')} style={styles.postPic} />
                <Text style={styles.postBoxText}>So much exam, so little time.</Text>
                <Text style={styles.likes}>1000</Text>
                <View style={styles.formatComment}>
                  <Text style={styles.comment}>Comments</Text>
                  <Text> </Text>
                  <Text style={styles.numbers}>100</Text>
                </View>
                <View style={styles.replyAndLike}>
                  <TouchableOpacity style={styles.like}>
                    <Image source={require('../assets/likebtm.png')}/>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.reply}>
                    <Image source={require('../assets/replybtm.png')}/>
                  </TouchableOpacity>
                </View>
                <TouchableOpacity style={styles.post} />
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
    backgroundColor: '#E8E8E8'
  },
  header: {
    flex: 0.6,
    backgroundColor: '#E8E8E8',
    borderColor: '#C3C3C3',
    borderWidth: 1
  },
  profile: {
    flex: 2,
    backgroundColor: '#E8E8E8',
    flexDirection: 'row'
  },
  game: {
    flex: 3,
    backgroundColor: '#C3C3C3'
  },
  timeline: {
    flex: 4,
    backgroundColor: '#C3C3C3'
  },
  headerView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 5,
  },
  exitButton: {
    
  },
  picture: {
    height: 168,
    width: 157,
    borderColor: '#E8E8E8',
    borderWidth: 12,
  },
  picView: {
    flex: 2,
    borderColor: 'black',
  },
  nameTitle: {
    flex: 4,
    marginLeft: 40,
    justifyContent: 'space-between',
    paddingBottom: 50,
    paddingTop: 30,
  },
  nameText: {
    alignSelf: 'center',
    fontFamily: 'Alatsi',
    fontSize: 30,
    fontWeight: 'bold',
  },
  nameTitleText: {
    alignSelf: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    color: '#8F8F8F',
    paddingTop: 10
  },
  linkButton: {
    alignSelf: 'center',
    backgroundColor: 'yellow',
    width: 102,
    height: 30,
    marginTop: 20
  },
  linkImg: {
    width: 102,
    height: 30
  },
  gameBar: {
    flexDirection: 'row',
    backgroundColor: '#E8E8E8',
    borderColor: '#C3C3C3',
    borderWidth: 1,
    paddingTop: 5,
    paddingBottom: 5,
  },
  textGame: {
    fontSize: 25,
    alignSelf: 'center',
    paddingLeft: 10,
    fontWeight: 'bold'
  },
  gameIcon: {
    marginLeft: 10,
  },
  gameApi: {
    flexDirection: 'row'
  },
  gameBox: {
    backgroundColor: '#E8E8E8',
    height: 120,
    width: 210,
    borderRadius: 10,
    alignSelf: 'center',
    marginLeft: 10,
  },
  logo: {
    position: 'absolute',
    top: 25,
    left: 15,
    width: 73,
    height: 69
  },
  rank: {
    position: 'absolute',
    top: 25,
    left: 120,
    width: 71,
    height: 70
  },
  popup: {
    flexDirection: 'row',
    flex: 1  
  },
  timelineView: {
  },
  postBox: {
    width: 390,
    height: 120,
    marginTop: 10
  },
  post: {
    width: 390,
    height: 95,
    position: 'absolute',
    borderRadius: 20
  },
  postBoxText: {
    position: 'absolute',
    marginTop: 7.5,
    marginLeft:85,
    width: 294,
    height: 59,
    fontSize: 12,
    fontWeight: 'bold'
  },
  postPic: {
    position: 'absolute',
    width: 73,
    height: 73,
    borderRadius: 100,
    top: 25
  },
  likes: {
    position: 'absolute',
    left: 95,
    top: 82,
    color: '#B8B8B8'
  },
  comment: {
    color: '#B8B8B8',
  },
  numbers: {
    color: '#B8B8B8',
    flexDirection: 'row-reverse',
    justifyContent: 'flex-end',
  },
  formatComment: {
    position: 'absolute',
    flexDirection: 'row-reverse',
    justifyContent: 'flex-end',
    marginTop: 80,
    left: 280
  },
  like: {
    width: 72,
    height: 20,
    marginLeft: 10,
    borderRadius: 5
  },
  replyAndLike: {
    position: 'absolute',
    flexDirection: 'row',
    left: 200,
    top: 102
  },
  reply: {
    marginLeft: 20,
    width: 72,
    height: 20,
    borderRadius: 5
  }, 
});

