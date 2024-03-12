import {View, Text, Image} from 'react-native';
import React, {FC, useState} from 'react';
import {useStyles} from 'react-native-unistyles';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import Toast from 'react-native-toast-message';

import stylesheet from './styles';
import {InputText, ThemeButton} from '../../components';
import {RootStackParamList} from '../../navigation/types';
import api from '../../api';
import {endpoints} from '../../api/endpoints';
import {HttpStatusCode} from 'axios';
import {images, strings} from '../../config';
import {isValidEmail} from '../../utils/helpers';
import {useAppSelector} from '../../redux/hooks';
import {getAppLoading} from '../../redux/commonSlice/appSlice';

const ForgotPassword: FC<
  NativeStackScreenProps<RootStackParamList, 'ForgotPassword'>
> = ({navigation}) => {
  const {styles} = useStyles(stylesheet);
  const [email, setEmail] = useState('');
  const loading = useAppSelector(getAppLoading);

  const onSendLinkPress = async () => {
    try {
      if (!email) {
        Toast.show({
          type: 'error',
          text1: strings.validationError,
          text2: 'Please enter email',
        });
        return;
      }
      if (!isValidEmail(email)) {
        Toast.show({
          type: 'error',
          text1: strings.validationError,
          text2: 'Please enter valid email',
        });
        return;
      }
      const response = await api.post(endpoints.forgotPassword, {email});
      if (response.status === HttpStatusCode.Ok) {
        if (response.data?.meta?.status === 1) {
          Toast.show({
            type: 'success',
            text1: strings.success,
            text2: response.data?.meta?.message,
          });
          navigation.goBack();
        } else {
          Toast.show({
            type: 'error',
            text1: strings.error,
            text2: response.data?.meta?.message,
          });
        }
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
          loading={loading}
        />
        <ThemeButton title="Back" mode={'clear'} onPress={navigation.goBack} />
      </View>
    </View>
  );
};

export default ForgotPassword;
