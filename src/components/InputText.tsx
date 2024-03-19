import {
  StyleProp,
  Text,
  TextInput,
  TextInputProps,
  TextStyle,
  View,
  ViewStyle,
} from 'react-native';
import React, {forwardRef} from 'react';
import {createStyleSheet, useStyles} from 'react-native-unistyles';

type Props = {
  label: string;
  containerStyles?: StyleProp<ViewStyle>;
  labelStyle?: StyleProp<TextStyle>;
  inputStyle?: StyleProp<TextStyle>;
  editable?: boolean;
} & Omit<TextInputProps, 'style'>;

export const InputText = forwardRef<TextInput, Props>(
  (
    {label, containerStyles, labelStyle, inputStyle, editable = true, ...props},
    ref,
  ) => {
    const {styles, theme} = useStyles(stylesheet);
    const disabledStyle: StyleProp<TextStyle> = !editable
      ? {color: theme.colors.typography2, opacity: 0.8}
      : {};
    return (
      <View style={[styles.container, containerStyles]}>
        <Text style={[styles.label, labelStyle]}>{label}</Text>
        <TextInput
          selectionColor={theme.colors.primary}
          editable={editable}
          {...props}
          style={[styles.inputStyle, disabledStyle, inputStyle]}
          ref={ref}
        />
      </View>
    );
  },
);

const stylesheet = createStyleSheet(theme => ({
  container: {
    gap: 4,
  },
  label: {
    fontSize: 13,
    fontFamily: theme.fonts.regular,
    color: theme.colors.typography2,
  },
  inputStyle: {
    height: 48,
    backgroundColor: theme.colors.lightBlue,
    color: theme.colors.typography,
    fontSize: 15,
    fontFamily: theme.fonts.medium,
    borderRadius: 8,
    padding: theme.margins.xl,
  },
}));
