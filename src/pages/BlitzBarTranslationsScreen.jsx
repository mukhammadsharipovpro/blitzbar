import React from 'react';
import {
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {COLORS, FONTS, height, width} from '../helpers/colors';
import BlitzBarHeader from '../components/BlitzBarHeader';
import BackgroundImage from '../assets/background.png';

export default function () {
  const renderBroadcast = (league, time, teams) => (
    <View style={styles.broadcast}>
      <View style={styles.leagueContainer}>
        <Text style={styles.league}>{league}</Text>
        <Text style={styles.matchTime}>{time}</Text>
      </View>
      <View style={styles.teamsContainer}>
        <Text style={styles.teams}>{teams}</Text>
      </View>
    </View>
  );

  return (
    <ImageBackground source={BackgroundImage} style={styles.container}>
      <BlitzBarHeader />

      <Text style={styles.title}>Трансляции</Text>

      <ScrollView
        style={{flex: 1}}
        contentContainerStyle={{paddingBottom: 100, marginTop: 15}}>
        {renderBroadcast(
          'Diamond League',
          '03.01 16:00',
          '100m Final \n' + 'Men’s',
        )}
        {renderBroadcast(
          'IAAF World',
          '05.01 17:15',
          'Marathon \n' + 'Women’s',
        )}
        {renderBroadcast(
          'European Athletics',
          '07.01 18:30',
          '400m Hurdles \n' + 'Men’s',
        )}
        {renderBroadcast(
          'World Indoor',
          '09.01 19:45',
          'Pole Vault \n' + 'Final',
        )}
        {renderBroadcast(
          'Olympic Games',
          '11.01 21:00',
          'Decathlon \n' + 'Day 2',
        )}
        {renderBroadcast(
          'Pan American',
          '13.01 16:45',
          '800m Final \n' + 'Women’s',
        )}
        {renderBroadcast(
          'Asian Games',
          '15.01 20:00',
          'High Jump \n' + 'Final',
        )}
        {renderBroadcast(
          'Commonwealth',
          '17.01 19:15',
          'Long Jump \n' + 'Men’s',
        )}
        {renderBroadcast('Universiade', '19.01 18:30', 'Shot Put \n' + 'Final')}
        {renderBroadcast(
          'Continental Tour',
          '21.01 19:00',
          'Triple Jump \n' + 'Women’s',
        )}
      </ScrollView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height,
    width,
    backgroundColor: COLORS.white,
  },
  broadcast: {
    width: width * 0.9,
    alignSelf: 'center',
    marginTop: 20,
    backgroundColor: COLORS.main,
    paddingLeft: 20,
  },
  league: {
    fontSize: 22,
    fontFamily: FONTS.black,
    color: COLORS.white,
    paddingVertical: 8,
  },
  leagueContainer: {
    width: '100%',
    borderRadius: 15,
    alignItems: 'center',
    flexDirection: 'row',
  },
  teamsContainer: {
    width: '100%',
    paddingBottom: 10,
  },
  matchTime: {
    fontSize: 14,
    fontFamily: FONTS.bold,
    color: COLORS.white,
    width: '60%',
    marginLeft: 15,
    opacity: 0.8,
  },
  teams: {
    textAlign: 'right',
    fontFamily: FONTS.bold,
    fontSize: 20,
    color: COLORS.white,
    marginTop: 5,
    marginRight: 15,
  },
  title: {
    fontSize: 30,
    fontFamily: FONTS.bold,
    color: COLORS.white,
    margin: 20,
    textAlign: 'center',
  },
});
