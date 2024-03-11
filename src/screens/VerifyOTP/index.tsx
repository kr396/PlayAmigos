import {Image, Text, View} from 'react-native';
import React, {FC, useState} from 'react';
import {useStyles} from 'react-native-unistyles';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

import stylesheet from './styles';
import {InputText, ThemeButton} from '../../components';
import {RootStackParamList} from '../../navigation/types';
import {images} from '../../config';

const VerifyOTP: FC<
  NativeStackScreenProps<RootStackParamList, 'VerifyOTP'>
> = ({navigation}) => {
  const {styles} = useStyles(stylesheet);
  const [otp, setOTP] = useState('');

  const onVerifyPress = () => {
    // TODO:
  };

  return (
    <View style={styles.container}>
      <Image style={styles.image} source={images.verifyOtpBg} />
      <View style={styles.main}>
        <Text style={styles.title}>You’re Almost there</Text>
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
