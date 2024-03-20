import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  FlatList,
  Pressable,
  Image,
} from 'react-native';
import React, {FC, useEffect, useMemo, useState} from 'react';
import {useStyles} from 'react-native-unistyles';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

import stylesheet from './styles';
import {Header, ThemeButton} from '../../components';
import {SearchIcon} from '../../config/svgs';
import {RootStackParamList} from '../../navigation/types';
import {Sport} from '../../types';
import {useAppDispatch, useAppSelector} from '../../redux/hooks';
import {
  getSkillsAPI,
  getSportsAPI,
  getSportsList,
} from '../../redux/commonSlice/commonSlice';
import LevelModal from './components/LevelModal';
import {addSportsAPI} from '../../redux/commonSlice/userSlice';

const SelectSports: FC<
  NativeStackScreenProps<RootStackParamList, 'SelectSports'>
> = ({navigation}) => {
  const {styles, theme} = useStyles(stylesheet);
  const sports = useAppSelector(getSportsList);
  const dispatch = useAppDispatch();
  const [searchText, setSearchText] = useState('');
  const [selectedSports, setSelectedSports] = useState<Sport[]>([]);
  const [showLevelModal, setShowLevelModal] = useState(false);
  const [currentSportItem, setCurrentSportItem] = useState<Sport | null>(null);
  // const buttonDisabled = selectedSports.length < 1;

  useEffect(() => {
    dispatch(getSportsAPI());
    dispatch(getSkillsAPI());
    return () => {};
  }, [dispatch]);

  const filteredSports = useMemo(
    () =>
      sports.filter(sport =>
        sport.name.toLocaleLowerCase().includes(searchText.toLocaleLowerCase()),
      ),
    [searchText, sports],
  );

  const onSubmitPress = async () => {
    const updatedSports = selectedSports.map(selectedSport => ({
      sport_id: selectedSport.id,
      skill_id: selectedSport.skillId,
    }));
    try {
      dispatch(addSportsAPI(updatedSports));
    } catch (error) {}
    navigation.navigate('Home');
  };

  const onSportPress = (item: Sport) => {
    setShowLevelModal(true);
    let updatedSports = [...selectedSports];
    const index = updatedSports.findIndex(sport => sport.id === item.id);
    if (index > -1) {
      setSelectedSports(selectedSports.filter(sport => sport.id !== item.id));
    } else {
      setCurrentSportItem(item);
      setShowLevelModal(true);
      // setSelectedSports([...selectedSports, item]);
    }
  };

  const onSkillSelect = (id: number) => {
    setSelectedSports([...selectedSports, {...currentSportItem, skillId: id}]);
    onModalClose();
  };

  const onModalClose = () => {
    setShowLevelModal(false);
    setCurrentSportItem(null);
  };

  const renderSport = ({item, index}: {item: Sport; index: number}) => {
    const isLeft = index % 2 === 0;
    const isSelected = selectedSports.some(sport => sport.id === item.id);
    return (
      <Pressable
        style={styles.sportCard(isLeft, isSelected)}
        onPress={() => onSportPress(item)}>
        <Image
          style={styles.sportIcon(isSelected)}
          source={{uri: item.image}}
        />
        <Text style={styles.sportName(isSelected)}>{item.name}</Text>
      </Pressable>
    );
  };

  return (
    <SafeAreaView style={styles.safearea}>
      <View style={styles.container}>
        <Header title="What Do You Wanna Play?" showBack={false} />
        <View style={styles.searchContainer}>
          <View style={styles.searchView}>
            <SearchIcon />
            <TextInput
              value={searchText}
              onChangeText={setSearchText}
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
            data={filteredSports}
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
      {showLevelModal && (
        <LevelModal
          visible={showLevelModal}
          onRequestClose={onModalClose}
          onSkillSelect={onSkillSelect}
        />
      )}
    </SafeAreaView>
  );
};

export default SelectSports;
