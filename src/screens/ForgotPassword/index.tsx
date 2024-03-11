import {View, Text, Image} from 'react-native';
import React, {FC, useState} from 'react';
import {useStyles} from 'react-native-unistyles';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

import stylesheet from './styles';
import {InputText, ThemeButton} from '../../components';
import {RootStackParamList} from '../../navigation/types';
import api from '../../api';
import {endpoints} from '../../api/endpoints';
import {HttpStatusCode} from 'axios';
import {images} from '../../config';

const ForgotPassword: FC<
  NativeStackScreenProps<RootStackParamList, 'ForgotPassword'>
> = ({navigation}) => {
  const {styles} = useStyles(stylesheet);
  const [email, setEmail] = useState('');

  const onSendLinkPress = async () => {
    try {
      // TODO: add validation for email
      const response = await api.post(endpoints.forgotPassword, {email});
      if (response.status === HttpStatusCode.Ok) {
        // TODO: Show success toast
        navigation.goBack();
      }
    } catch (error) {
      // TODO: Show error toast
    }
  };

  return (
    <View style={styles.container}>
      <Image style={styles.image} source={images.forgotPassBg} />
      <View style={styles.main}>
        <Text style={styles.title}>Forgot Password</Text>
        <InputText
          label="Email"
          value={email}
          onChangeText={setEmail}
          returnKeyType="next"
          textContentType="emailAddress"
          autoCapitalize="none"
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
