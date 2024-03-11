import {View, Text} from 'react-native';
import React from 'react';
import {useStyles} from 'react-native-unistyles';
import stylesheet from './styles';

type Props = {};

const Home = (props: Props) => {
  const {styles} = useStyles(stylesheet);
  return (
    <View style={styles.container}>
      <Text>Home</Text>
    </View>
  );
};

export default Home;
