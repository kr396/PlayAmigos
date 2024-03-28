import {View, Text, SafeAreaView, FlatList, Image} from 'react-native';
import React from 'react';
import {useStyles} from 'react-native-unistyles';

import stylesheet from './styles';
import {GameBasicCard, Header} from '../../components';

const AllQueries = () => {
  const {styles} = useStyles(stylesheet);
  const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

  const renderQA = () => {
    return (
      <View style={styles.row}>
        <Text style={styles.question}>Q.</Text>
        <View style={styles.qaContainer}>
          <Text style={styles.question}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </Text>
          <View style={[styles.row, styles.center]}>
            <Image style={styles.avatar} />
            <Text style={styles.locationText}>John doe, 3 hours ago</Text>
          </View>
        </View>
      </View>
    );
  };

  const getHeader = () => (
    <View>
      <GameBasicCard />
    </View>
  );

  return (
    <SafeAreaView style={styles.safeArea}>
      <Header title="All Queries" />
      <View style={styles.container}>
        <FlatList
          data={data}
          renderItem={renderQA}
          ListHeaderComponent={getHeader}
        />
      </View>
    </SafeAreaView>
  );
};

export default AllQueries;
