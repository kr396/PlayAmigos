import {View, SafeAreaView, Image, Pressable} from 'react-native';
import React, {useState} from 'react';
import {useStyles} from 'react-native-unistyles';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {useActionSheet} from '@expo/react-native-action-sheet';
import ImageCropPicker from 'react-native-image-crop-picker';

import stylesheet from './styles';
import {Header, InputText, ThemeButton} from '../../components';
import {CameraIcon} from '../../config/svgs';
import {useAppSelector} from '../../redux/hooks';
import {getUser} from '../../redux/commonSlice/userSlice';
import CustomDropDown from '../../components/CustomDropDown';

const EditProfile = () => {
  const {styles} = useStyles(stylesheet);
  const user = useAppSelector(getUser);
  const [profilePic, setProfilePic] = useState(user?.profilePic);
  const [firstName, setFirstName] = useState(user?.firstName);
  const [lastName, setLastName] = useState(user?.lastName);
  const [emailAddress, setEmailAddress] = useState(user?.email);
  const [phone, setPhone] = useState(user?.phone);
  const [bio, setBio] = useState(user?.bio);
  const [gender, setGender] = useState({value: user?.gender});
  const {showActionSheetWithOptions} = useActionSheet();
  const genderData = [
    {
      label: 'Male',
      value: 'M',
    },
    {
      label: 'Female',
      value: 'F',
    },
    {
      label: 'Other',
      value: 'O',
    },
  ];

  const onChangePhotoPress = () => {
    const options = ['Camera', 'Photos', 'Cancel'];
    const cancelButtonIndex = 2;

    showActionSheetWithOptions(
      {
        options,
        cancelButtonIndex,
      },
      selectedIndex => {
        switch (selectedIndex) {
          case 0:
            // Camera
            ImageCropPicker.openCamera({
              width: 300,
              height: 400,
              cropping: true,
            }).then(image => {
              console.log(image);
            });
            break;

          case 1:
            // Photos
            ImageCropPicker.openPicker({
              width: 300,
              height: 400,
              cropping: true,
            }).then(image => {
              console.log(image);
              setProfilePic(image.path);
            });
            break;

          // Canceled
          default:
            break;
        }
      },
    );
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <Header title="Edit Profile" />
      <View style={styles.container}>
        <KeyboardAwareScrollView>
          <View style={styles.inputContainer}>
            <View style={styles.profilePhotoContainer}>
              <Image style={styles.profilePhoto} source={{uri: profilePic}} />
              <Pressable
                style={styles.cameraButton}
                onPress={onChangePhotoPress}>
                <CameraIcon />
              </Pressable>
            </View>
            <InputText
              label="First Name"
              value={firstName}
              onChangeText={setFirstName}
            />
            <InputText
              label="Last Name"
              value={lastName}
              onChangeText={setLastName}
            />
          </View>
          <View style={styles.inputContainer}>
            <InputText
              label="Email Address"
              value={emailAddress}
              onChangeText={setEmailAddress}
              editable={false}
            />
            <InputText label="Phone" value={phone} onChangeText={setPhone} />
          </View>
          <View style={styles.inputContainer}>
            {/* <InputText label="Gender" /> */}
            <CustomDropDown
              data={genderData}
              title="Gender"
              value={gender}
              labelField={'label'}
              valueField={'value'}
              onChange={setGender}
              placeholder="Select Gender"
            />
            <InputText label="Bio" value={bio} onChangeText={setBio} />
          </View>
          <ThemeButton title="Update" style={styles.updateButton} />
        </KeyboardAwareScrollView>
      </View>
    </SafeAreaView>
  );
};

export default EditProfile;
