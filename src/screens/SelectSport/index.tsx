import React, {useState, useEffect, useMemo} from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Image,
  Dimensions,
} from 'react-native';
import {useStyles} from 'react-native-unistyles';
import {Header, ThemeButton} from '../../components';
import {SearchIcon} from '../../config/svgs';
import {InputText} from '../../components/InputText';
import stylesheet from './styles';
import {useAppDispatch, useAppSelector} from '../../redux/hooks';
import {getSportsAPI, getSportsList} from '../../redux/commonSlice/commonSlice';
import {ScrollView} from 'react-native-gesture-handler';

const SelectSport = () => {
  const {styles} = useStyles(stylesheet);
  const dispatch = useAppDispatch();
  const sports = useAppSelector(getSportsList);
  const [searchText, setSearchText] = useState('');
  const [numColumns, setNumColumns] = useState(3);

  useEffect(() => {
    dispatch(getSportsAPI());
  }, [dispatch]);

  const data = [
    {id: 'selectsport', label: 'Popular Sports'},
    {id: 'area', label: 'Team Sports'},
    {id: 'date', label: 'Racquet Sports'},
    {id: 'time', label: 'Fitness'},
    {id: 'settings', label: 'Recreation'},
  ];

  const itemWidth = Dimensions.get('window').width / numColumns;

  const renderSportsItem = ({item}) => (
    <View key={item.id} style={[styles.itemContainer, {width: itemWidth}]}>
      <Image source={{uri: item.image}} style={styles.image} />
      <Text style={styles.sportsContent}>{item.name}</Text>
    </View>
  );

  const renderItem = ({item}) => (
    <View style={styles.parent}>
      <Text style={styles.content}>{item.label}</Text>

      {item.label === 'Popular Sports' || item.label === 'Team Sports' ? (
        <>
          <View style={styles.sportsContainer}>
            <FlatList
              key={`${numColumns}`}
              data={sports}
              renderItem={renderSportsItem}
              keyExtractor={item => item.id.toString()}
              contentContainerStyle={styles.container}
              numColumns={numColumns}
            />
          </View>
        </>
      ) : null}
    </View>
  );

  return (
    <>
      <Header title="SelectSport" />
      <View style={styles.containerStyles}>
        <View style={styles.searchIcon}>
          <SearchIcon />
        </View>
        <View style={styles.inputTextParent}>
          <InputText
            inputStyle={styles.inputText}
            placeholder="Search by sports name..."
            onChangeText={setSearchText}
          />
        </View>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={item => item.id.toString()}
          contentContainerStyle={styles.container}
        />
      </ScrollView>
      <ThemeButton title={'Select Sport'} style={styles.button} />
    </>
  );
};

export default SelectSport;
