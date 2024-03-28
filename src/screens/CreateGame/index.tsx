import React, {useState} from 'react';
import {View, Text, FlatList, TouchableOpacity} from 'react-native';
import {useStyles} from 'react-native-unistyles';
import stylesheet from './styles';
import {Header, ThemeButton} from '../../components';
import {
  ChevronRightIcon,
  GamesIcon,
  Location,
  Settings,
  Date,
  Time,
  Public,
  PrivateOnly,
} from '../../config/svgs';
import SegmentedControl from '../../components/CustomSegment/CustomSegmentedControl';

const CreateGame = ({navigation}) => {
  const {styles} = useStyles(stylesheet);
  const [selectedSegment, setSelectedSegment] = useState('one');

  const onSelectSport = () => {
    navigation.navigate('SelectSport');
  };

  const data = [
    {
      id: 'selectsport',
      title: 'Select Sport',
      icon: <GamesIcon />,
      onPress: onSelectSport,
    },
    {id: 'area', title: 'Area', icon: <Location />},
    {id: 'date', title: 'Date', icon: <Date />},
    {id: 'time', title: 'Time', icon: <Time />},
    {
      id: 'segmentedControl',
      title: 'Segmented Control',
      component: (
        <SegmentedControl
          segments={[
            {icon: <Public />, label: 'Public'},
            {icon: <PrivateOnly />, label: 'Private Only'},
          ]}
          currentIndex={selectedSegment === 'one' ? 0 : 1}
          onChange={index => {
            setSelectedSegment(index === 0 ? 'one' : 'two');
          }}
          containerMargin={16}
        />
      ),
    },
    {id: 'settings', title: 'Advance Settings', icon: <Settings />},
  ];

  const renderItem = ({item}) => (
    <TouchableOpacity onPress={item.onPress}>
      <View style={styles.parent}>
        {item.icon}
        <Text style={styles.content}>{item.title}</Text>
        <View style={styles.iconsParent}>
          <ChevronRightIcon />
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Header title="Create Game" />
      <FlatList
        data={data}
        renderItem={({item}) =>
          item.component ? item.component : renderItem({item})
        }
        keyExtractor={item => item.id}
      />
      <ThemeButton title={'Create Game'} style={styles.button} />
    </View>
  );
};

export default CreateGame;
