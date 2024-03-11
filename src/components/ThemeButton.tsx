import {
  GestureResponderEvent,
  Pressable,
  StyleProp,
  Text,
  TextStyle,
  ViewStyle,
} from 'react-native';
import React, {FC} from 'react';
import {createStyleSheet, useStyles} from 'react-native-unistyles';

type Props = {
  title: string;
  mode?: 'default' | 'clear';
  style?: StyleProp<ViewStyle>;
  titleStyle?: StyleProp<TextStyle>;
  onPress?: null | ((event: GestureResponderEvent) => void) | undefined;
};

export const ThemeButton: FC<Props> = ({
  title,
  mode = 'default',
  style,
  titleStyle,
  onPress,
}) => {
  const {styles} = useStyles(styleSheet);
  if (mode === 'clear') {
    return (
      <Pressable style={[styles.clearButtonContainer, style]} onPress={onPress}>
        <Text style={[styles.clearButtonTitle, titleStyle]}>{title}</Text>
      </Pressable>
    );
  }
  return (
    <Pressable style={[styles.container, style]} onPress={onPress}>
      <Text style={[styles.title, titleStyle]}>{title}</Text>
    </Pressable>
  );
};

const styleSheet = createStyleSheet(theme => ({
  container: {
    height: 48,
    backgroundColor: theme.colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: theme.margins.lg,
    borderRadius: 8,
  },
  title: {
    fontSize: 16,
    fontFamily: theme.fonts.bold,
    color: theme.colors.white,
  },
  clearButtonContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  clearButtonTitle: {
    fontSize: 15,
    lineHeight: 22.5,
    fontFamily: theme.fonts.regular,
    color: theme.colors.typography2,
  },
}));
