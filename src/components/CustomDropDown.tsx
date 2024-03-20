import {StyleProp, Text, View, ViewStyle} from 'react-native';
import React from 'react';
import {createStyleSheet, useStyles} from 'react-native-unistyles';
import {Dropdown} from 'react-native-element-dropdown';
import {DropdownProps} from 'react-native-element-dropdown/lib/typescript/components/Dropdown/model';

type Props = {
  title: string;
  dropDownStyle?: StyleProp<ViewStyle>;
} & DropdownProps<any>;

const CustomDropDown = ({title, dropDownStyle, ...props}: Props) => {
  const {styles} = useStyles(stylesheet);
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{title}</Text>
      <Dropdown style={[styles.dropdown, dropDownStyle]} {...props} />
    </View>
  );
};

export default CustomDropDown;

const stylesheet = createStyleSheet(({fonts, colors, paddings}) => ({
  container: {gap: 4},
  label: {
    fontSize: 13,
    fontFamily: fonts.regular,
    color: colors.typography2,
  },
  dropdown: {
    height: 48,
    backgroundColor: colors.lightBlue,
    color: colors.typography,
    fontSize: 15,
    fontFamily: fonts.medium,
    borderRadius: 8,
    padding: paddings.xl,
  },
}));
