import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  FlatList,
  Pressable,
  Image,
} from 'react-native';
import React, {FC, useEffect} from 'react';
import {useStyles} from 'react-native-unistyles';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

import stylesheet from './styles';
import {Header, ThemeButton} from '../../components';
import {SearchIcon} from '../../config/svgs';
import {RootStackParamList} from '../../navigation/types';
import {Sport} from '../../types';
import {useAppDispatch, useAppSelector} from '../../redux/hooks';
import {getSportsAPI, getSportsList} from '../../redux/commonSlice/commonSlice';

const SelectSports: FC<
  NativeStackScreenProps<RootStackParamList, 'SelectSports'>
> = ({navigation}) => {
  const {styles, theme} = useStyles(stylesheet);
  const sports = useAppSelector(getSportsList);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getSportsAPI());
    return () => {};
  }, [dispatch]);

  const renderSport = ({item, index}: {item: Sport; index: number}) => {
    const isLeft = index % 2 === 0;

    return (
      <Pressable style={styles.sportCard(isLeft)}>
        <Image style={styles.sportIcon} source={{uri: item.image}} />
        <Text style={styles.sportName}>{item.name}</Text>
      </Pressable>
    );
  };

  const onSubmitPress = () => {
    navigation.navigate('Home');
  };

  return (
    <SafeAreaView style={styles.safearea}>
      <View style={styles.container}>
        <Header title="What Do You Wanna Play?" showBack={false} />
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
            data={sports}
            renderItem={renderSport}
            contentContainerStyle={styles.listStyle}
            numColumns={2}
            showsVerticalScrollIndicator={false}
          />
        </View>
        <View style={styles.bottomView}>
          <ThemeButton title="Make My Debute" onPress={onSubmitPress} />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default SelectSports;
