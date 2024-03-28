import {View, Text, SafeAreaView, ScrollView, Image} from 'react-native';
import React from 'react';
import {useStyles} from 'react-native-unistyles';
import stylesheet from './styles';
import {GameBasicCard, Header, ThemeButton} from '../../components';
import AvatarList from '../../components/AvatarList';

const GameDetails = ({navigation}) => {
  const {styles} = useStyles(stylesheet);

  const onAllPlayersPress = () => {
    navigation.navigate('AllPlayers');
  };

  const onAllQueriesPress = () => {
    navigation.navigate('AllQueries');
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <Header title="Game Details" />
      <View style={styles.container}>
        <ScrollView
          contentContainerStyle={styles.scrollview}
          showsVerticalScrollIndicator={false}>
          <GameBasicCard />
          <View style={styles.card}>
            <Text style={styles.cardTitle}>Players</Text>
            <View style={styles.hostDetails}>
              <Image style={styles.hostImage} />
              <View>
                <Text style={styles.dateTime}>Ankita Singh</Text>
                <Text style={styles.locationText}>
                  Host | 2.25K Karma | On Fire
                </Text>
              </View>
            </View>
            <View style={styles.divider} />
            <View style={[styles.row, styles.spaceBetween]}>
              <AvatarList data={[1, 2, 3, 4, 5, 6, 7]} />
              <ThemeButton
                mode="clear"
                title="View All Players"
                titleStyle={styles.clearButtonTitle}
                onPress={onAllPlayersPress}
              />
            </View>
          </View>
          <View style={styles.card}>
            <Text style={styles.cardTitle}>10 Queries</Text>
            <View style={styles.divider} />
            <View style={styles.qaList}>
              {[1, 2].map(_item => (
                <View style={styles.row}>
                  <Text style={styles.question}>Q.</Text>
                  <View style={styles.qaContainer}>
                    <Text style={styles.question}>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry.
                    </Text>
                    <View style={[styles.row, styles.center]}>
                      <Image style={styles.avatar} />
                      <Text style={styles.locationText}>
                        John doe, 3 hours ago
                      </Text>
                    </View>
                  </View>
                </View>
              ))}
            </View>
            <View style={styles.divider} />
            <ThemeButton
              mode="clear"
              title="View All Queries"
              titleStyle={styles.clearButtonTitle}
              onPress={onAllQueriesPress}
            />
          </View>
        </ScrollView>
        <View style={styles.bottomView}>
          <ThemeButton mode="outline" title="Send Query" />
          <ThemeButton title="Join Game" />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default GameDetails;
