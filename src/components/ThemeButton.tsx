import {
  ActivityIndicator,
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
  mode?: 'default' | 'clear' | 'outline';
  style?: StyleProp<ViewStyle>;
  titleStyle?: StyleProp<TextStyle>;
  loading?: boolean;
  onPress?: null | ((event: GestureResponderEvent) => void) | undefined;
};

export const ThemeButton: FC<Props> = ({
  title,
  mode = 'default',
  style,
  titleStyle,
  loading,
  onPress,
}) => {
  const {styles, theme} = useStyles(styleSheet);
  if (mode === 'clear') {
    return (
      <Pressable style={[styles.clearButtonContainer, style]} onPress={onPress}>
        <Text style={[styles.clearButtonTitle, titleStyle]}>{title}</Text>
      </Pressable>
    );
  }
  if (mode === 'outline') {
    return (
      <Pressable
        style={[styles.container, styles.outlinedButtonContainer, style]}
        onPress={onPress}>
        <Text style={[styles.title, styles.outlineButtonTitle, titleStyle]}>
          {title}
        </Text>
      </Pressable>
    );
  }
  return (
    <Pressable style={[styles.container, style]} onPress={onPress}>
      <Text style={[styles.title, titleStyle]}>{title}</Text>
      {loading && (
        <ActivityIndicator
          color={theme.colors.white}
          style={styles.loaderStyle}
        />
      )}
    </Pressable>
  );
};

const styleSheet = createStyleSheet(({colors, margins, fonts}) => ({
  container: {
    height: 48,
    flexDirection: 'row',
    backgroundColor: colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: margins.lg,
    borderRadius: 8,
  },
  title: {
    fontSize: 16,
    fontFamily: fonts.bold,
    color: colors.white,
  },
  clearButtonContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  clearButtonTitle: {
    fontSize: 15,
    lineHeight: 22.5,
    fontFamily: fonts.regular,
    color: colors.typography2,
  },
  loaderStyle: {
    marginLeft: margins.lg,
  },
  outlinedButtonContainer: {
    backgroundColor: colors.transparent,
    borderWidth: 1,
    borderColor: colors.primary,
  },
  outlineButtonTitle: {
    color: colors.primary,
  },
}));
