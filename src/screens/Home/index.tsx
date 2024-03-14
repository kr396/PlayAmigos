import {View, Text, Button} from 'react-native';
import React from 'react';
import {useStyles} from 'react-native-unistyles';
import stylesheet from './styles';
import {useAppDispatch} from '../../redux/hooks';

const Home = ({navigation}) => {
  const {styles} = useStyles(stylesheet);
  const dispatch = useAppDispatch();

  const onLogoutPress = () => {
    dispatch({type: 'USER_LOGOUT'});
  };

  return (
    <View style={styles.container}>
      <Text>Home</Text>
      <Button title="Logout" onPress={onLogoutPress} />
      <Button
        title="Select Sports"
        onPress={() => navigation.navigate('SelectSports')}
      />
    </View>
  );
};

export default Home;
