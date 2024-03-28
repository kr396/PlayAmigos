import {View, Text, ScrollView, SafeAreaView, FlatList} from 'react-native';
import React from 'react';
import {UnistylesRuntime, useStyles} from 'react-native-unistyles';
import stylesheet from './styles';
import {GameCard, ThemeButton} from '../../components';
import {MessageIcon, NotificationIcon} from '../../config/svgs';

const Home = ({navigation}) => {
  const {styles} = useStyles(stylesheet);

  const onCreatePress = () => {
    navigation.navigate('PlayStack', {
      screen: 'CreateGame',
    });
  };

  const onMyCalendarPress = () => {
    // TODO
    navigation.navigate('PlayStack', {screen: 'GameDetails'});
  };

  const renderGame = () => {
    return <GameCard containerStyle={styles.gameCard} />;
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.locationPickerWrapper}>
            <Text style={styles.locationText}>Indiranagar,Bangulur</Text>
          </View>
          <MessageIcon />
          <NotificationIcon />
        </View>
        <ScrollView>
          <View style={styles.createGameContainer}>
            <View style={styles.row}>
              <View style={styles.textContainer}>
                <Text style={styles.createGameText}>Create your Game</Text>
                <Text style={styles.descText}>No games in your calendar</Text>
              </View>
              <ThemeButton
                title="Create"
                style={styles.createButton}
                titleStyle={styles.createBtnText}
                onPress={onCreatePress}
              />
            </View>
            <View style={styles.devider} />
            <ThemeButton
              mode="clear"
              title="View My Calendar"
              titleStyle={styles.themeText}
              onPress={onMyCalendarPress}
            />
          </View>
          <View style={styles.cardsConntainer}>
            <View style={styles.cardsHeader}>
              <Text style={styles.cardTitleText}>Join A Game Nearby</Text>
              <ThemeButton
                mode="clear"
                title="See All"
                titleStyle={styles.seeAllBtnText}
              />
            </View>
            <View
              style={{
                width: UnistylesRuntime.screen.width - 80 + 16,
                // overflow: 'visible',
              }}>
              <FlatList
                data={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]}
                renderItem={renderGame}
                horizontal={true}
                pagingEnabled={true}
                showsHorizontalScrollIndicator={false}
                style={styles.gameCardsList}
              />
            </View>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default Home;
