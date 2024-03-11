import {Image, Text, View} from 'react-native';
import React, {FC, useState} from 'react';
import {useStyles} from 'react-native-unistyles';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

import stylesheet from './styles';
import {InputText, ThemeButton} from '../../components';
import {RootStackParamList} from '../../navigation/types';
import {images, strings} from '../../config';
import Toast from 'react-native-toast-message';
import api from '../../api';
import {endpoints} from '../../api/endpoints';
import {VerifyUserRespose} from './types';
import {useAppDispatch} from '../../redux/hooks';
import {setAuthToken, setUserDetails} from '../../redux/commonSlice/userSlice';

const VerifyOTP: FC<
  NativeStackScreenProps<RootStackParamList, 'VerifyOTP'>
> = ({navigation, route}) => {
  const email = route.params.email;
  const {styles} = useStyles(stylesheet);
  const [otp, setOTP] = useState('');
  const dispatch = useAppDispatch();

  const onVerifyPress = async () => {
    if (!otp.trim()) {
      Toast.show({
        type: 'error',
        text1: strings.validationError,
        text2: 'Please enter otp',
      });
      return;
    }
    try {
      const response = await api.post<VerifyUserRespose>(endpoints.verifyUser, {
        email,
        otp: Number(otp),
      });
      if (response.data.meta.status === 1) {
        dispatch(setUserDetails(response.data.data));
        dispatch(setAuthToken(response.data.meta.tokenData));
        if (!response.data.data.isSportAdded) {
          navigation.reset({
            index: 0,
            routes: [{name: 'SelectSports'}],
          });
        } else {
          navigation.reset({
            index: 0,
            routes: [{name: 'Home'}],
          });
        }
      } else {
        Toast.show({
          type: 'error',
          text1: strings.error,
          text2: response.data.meta?.message,
        });
      }
    } catch (error) {}
  };

  return (
    <View style={styles.container}>
      <Image style={styles.image} source={images.verifyOtpBg} />
      <View style={styles.main}>
        <Text style={styles.title}>You’re Almost there</Text>
        <Text style={styles.grayText}>We have sent a code to your email</Text>
        <Text>{email}</Text>
        <InputText
          label="Enter OTP"
          value={otp}
          onChangeText={setOTP}
          returnKeyType="next"
          containerStyles={styles.input}
        />
        <ThemeButton
          title="Verify"
          style={styles.sendLink}
          onPress={onVerifyPress}
        />
        <ThemeButton title="Back" mode={'clear'} onPress={navigation.goBack} />
      </View>
    </View>
  );
};

export default VerifyOTP;
