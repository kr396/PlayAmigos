import {
  ColorValue,
  StyleProp,
  Text,
  TextStyle,
  View,
  ViewStyle,
} from 'react-native';
import React from 'react';
import {createStyleSheet, useStyles} from 'react-native-unistyles';

type Props = {
  title: string;
  color: ColorValue;
  borderColor?: ColorValue;
  style?: StyleProp<ViewStyle>;
  titleStyle?: StyleProp<TextStyle>;
};

export const Chip = ({color, borderColor, title, style, titleStyle}: Props) => {
  const {styles} = useStyles(stylesheet);

  return (
    <View
      style={[
        styles.container,
        style,
        {
          backgroundColor: color,
          borderColor,
        },
      ]}>
      <Text style={[styles.titleStyle, titleStyle]}>{title}</Text>
    </View>
  );
};

const stylesheet = createStyleSheet(({fonts, paddings}) => ({
  container: {
    height: 20,
    justifyContent: 'center',
    alignContent: 'center',
    paddingVertical: paddings.sm / 2,
    paddingHorizontal: paddings.sm,
    borderRadius: 4,
  },
  titleStyle: {
    fontSize: 10,
    lineHeight: 15,
    fontFamily: fonts.regular,
  },
}));
