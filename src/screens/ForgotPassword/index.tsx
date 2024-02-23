import {View, Text} from 'react-native';
import React, {FC, useState} from 'react';
import {useStyles} from 'react-native-unistyles';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

import stylesheet from './styles';
import {InputText, ThemeButton} from '../../components';
import {RootStackParamList} from '../../navigation/types';

const ForgotPassword: FC<
  NativeStackScreenProps<RootStackParamList, 'ForgotPassword'>
> = ({navigation}) => {
  const {styles} = useStyles(stylesheet);
  const [email, setEmail] = useState('');

  const onSendLinkPress = () => {
    // TODO:
  };

  return (
    <View style={styles.container}>
      <View style={styles.image}></View>
      <View style={styles.main}>
        <Text style={styles.title}>Forgot Password</Text>
        <InputText
          label="Email"
          value={email}
          onChangeText={setEmail}
          returnKeyType="next"
          containerStyles={styles.input}
        />
        <ThemeButton
          title="Send Link"
          style={styles.sendLink}
          onPress={onSendLinkPress}
        />
        <ThemeButton title="Back" mode={'clear'} onPress={navigation.goBack} />
      </View>
    </View>
  );
};

export default ForgotPassword;
