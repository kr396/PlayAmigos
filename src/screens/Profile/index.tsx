import {
  View,
  Text,
  FlatList,
  Pressable,
  SafeAreaView,
  Image,
  Alert,
} from 'react-native';
import React from 'react';
import {useStyles} from 'react-native-unistyles';

import {useAppDispatch, useAppSelector} from '../../redux/hooks';
import {getUser} from '../../redux/commonSlice/userSlice';
import stylesheet from './styles';
import {Option} from './types';
import {Header} from '../../components';
import {
  ChevronRightIcon,
  EditIcon,
  GamesIcon,
  PageIcon,
} from '../../config/svgs';

const Profile = ({navigation}) => {
  const {styles} = useStyles(stylesheet);
  const dispatch = useAppDispatch();
  const user = useAppSelector(getUser);

  const onLogoutPress = () => {
    Alert.alert('Are you sure?', 'You want to logout?', [
      {
        text: 'No',
      },
      {
        text: 'Yes',
        onPress: () => dispatch({type: 'USER_LOGOUT'}),
      },
    ]);
  };

  const options: Option[] = [
    {
      id: 'preference',
      label: 'Preference and Privacy',
      onPress: () => {},
    },
    {
      id: 'invite',
      label: 'Invite',
      onPress: () => {},
    },
    {
      id: 'helpsupport',
      label: 'Help & Support',
      onPress: () => {},
    },
    {
      id: 'logout',
      label: 'Logout',
      onPress: onLogoutPress,
    },
  ];

  const onEditPress = () => {
    navigation.navigate('EditProfile');
  };

  const getHeader = () => {
    return (
      <View style={styles.header}>
        <Image style={styles.profileIcon} source={{uri: user?.profilePic}} />
        <View style={styles.headerContent}>
          <View style={styles.row}>
            <Text style={styles.userName}>
              {user?.lastName + ' ' + user?.lastName}
            </Text>
            <Pressable onPress={onEditPress}>
              <EditIcon />
            </Pressable>
          </View>
          <View style={styles.gameContainer}>
            <View style={styles.gameRow}>
              <GamesIcon />
              <Text style={styles.gameText}>Games</Text>
            </View>
            <Text>{user?.sportData.length}</Text>
          </View>
        </View>
      </View>
    );
  };

  const renderOptions = ({item}: {item: Option}) => {
    return (
      <Pressable style={styles.option} onPress={item.onPress}>
        <View style={styles.iconWrap}>
          <PageIcon />
        </View>
        <Text style={styles.optionText}>{item.label}</Text>
        <ChevronRightIcon />
      </Pressable>
    );
  };

  return (
    <SafeAreaView style={styles.safearea}>
      <View style={styles.container}>
        <Header title="Settings" showBack={false} />
        <FlatList
          data={options}
          renderItem={renderOptions}
          ListHeaderComponent={getHeader}
        />
      </View>
    </SafeAreaView>
  );
};

export default Profile;
