import {
  View,
  SafeAreaView,
  FlatList,
  Pressable,
  Image,
  Text,
} from 'react-native';
import React from 'react';
import {useStyles} from 'react-native-unistyles';

import stylesheet from './styles';
import {GameBasicCard, Header} from '../../components';
import {Chip} from '../../components/Chip';
import {ChevronRightIcon} from '../../config/svgs';

const AllPlayers = () => {
  const {styles, theme} = useStyles(stylesheet);
  const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 12, 3];

  const getPlayer = ({index}) => {
    const isLastCell = index === data.length - 1;
    return (
      <Pressable style={styles.userCell(isLastCell)}>
        <Image style={styles.avarar} />
        <View style={styles.details}>
          <Text style={styles.userName}>Devon Miles</Text>
          <View style={styles.row}>
            <Text style={styles.greyText}>Host</Text>
            <Chip title="Intermidiate" color={theme.colors.background1} />
          </View>
        </View>
        <ChevronRightIcon />
      </Pressable>
    );
  };

  const getHeader = () => {
    return (
      <View style={styles.header}>
        <GameBasicCard />
        <View style={styles.totalWrap}>
          <Text style={styles.totalText}>{data.length} Players</Text>
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.safearea}>
      <Header title="All Players" />
      <View style={styles.container}>
        <FlatList
          data={data}
          renderItem={getPlayer}
          contentContainerStyle={styles.list}
          ListHeaderComponent={getHeader}
        />
      </View>
    </SafeAreaView>
  );
};

export default AllPlayers;
