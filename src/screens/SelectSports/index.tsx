import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  FlatList,
  Pressable,
  Image,
} from 'react-native';
import React from 'react';
import {useStyles} from 'react-native-unistyles';
import stylesheet from './styles';
import {Header, ThemeButton} from '../../components';
import {SearchIcon} from '../../config/svgs';

const SelectSports = () => {
  const {styles, theme} = useStyles(stylesheet);
  const data = [
    {
      title: 'Badminton',
    },
    {
      title: 'Basketball',
    },
    {
      title: 'Tennis',
    },
    {
      title: 'Badminton',
    },
    {
      title: 'Basketball',
    },
    {
      title: 'Tennis',
    },
    {
      title: 'Badminton',
    },
    {
      title: 'Basketball',
    },
    {
      title: 'Tennis',
    },
    {
      title: 'Badminton',
    },
    {
      title: 'Basketball',
    },
    {
      title: 'Tennis',
    },
    {
      title: 'Badminton',
    },
    {
      title: 'Basketball',
    },
    {
      title: 'Tennis',
    },
    {
      title: 'Badminton',
    },
    {
      title: 'Basketball',
    },
    {
      title: 'Tennis',
    },
  ];

  const renderSport = ({item, index}) => {
    const isLeft = index % 2 === 0;

    return (
      <Pressable style={styles.sportCard(isLeft)}>
        <Image style={styles.sportIcon} />
        <Text>{item.title}</Text>
      </Pressable>
    );
  };

  return (
    <SafeAreaView style={styles.safearea}>
      <View style={styles.container}>
        <Header title="What Do You Wanna Play?" />
        <View style={styles.searchContainer}>
          <View style={styles.searchView}>
            <SearchIcon />
            <TextInput
              style={styles.searchInput}
              placeholder="Search by sports name..."
              selectionColor={theme.colors.black}
            />
          </View>
        </View>
        <View style={styles.content}>
          <Text style={styles.sportsHeading}>
            Here are Some Sports On Playo
          </Text>
          <FlatList
            data={data}
            renderItem={renderSport}
            contentContainerStyle={styles.listStyle}
            numColumns={2}
            showsVerticalScrollIndicator={false}
          />
        </View>
        <View style={styles.bottomView}>
          <ThemeButton title="Make My Debute" />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default SelectSports;
