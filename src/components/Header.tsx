import {Pressable, Text, View} from 'react-native';
import React, {FC} from 'react';
import {createStyleSheet, useStyles} from 'react-native-unistyles';
import {ArrowLeftIcon} from '../config/svgs';
import {useNavigation} from '@react-navigation/native';

type Props = {
  title: string;
  onRightButtonPress?: () => void;
};

export const Header: FC<Props> = ({title, onRightButtonPress}) => {
  const {styles} = useStyles(stylesheet);
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Pressable
        style={styles.rightButton}
        onPress={onRightButtonPress || navigation.goBack}>
        <ArrowLeftIcon />
      </Pressable>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

const stylesheet = createStyleSheet(thene => ({
  container: {
    flexDirection: 'row',
    backgroundColor: thene.colors.white,
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  rightButton: {},
  title: {
    marginHorizontal: 20,
    fontSize: 15,
    fontFamily: thene.fonts.semiBold,
  },
}));
