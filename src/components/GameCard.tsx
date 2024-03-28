import {StyleProp, Text, View, ViewStyle} from 'react-native';
import React from 'react';
import {createStyleSheet, useStyles} from 'react-native-unistyles';
import {Chip} from './Chip';
import AvatarList from './AvatarList';
import {LocationPinIcon} from '../config/svgs';
import {ThemeButton} from '.';

type Props = {
  containerStyle?: StyleProp<ViewStyle>;
};

export const GameCard = ({containerStyle}: Props) => {
  const {styles, theme} = useStyles(stylessheet);
  return (
    <View style={[styles.container, containerStyle]}>
      <View style={styles.row}>
        <Text style={styles.gameText}>GameCard</Text>
        <Chip title="Intermediate" color={theme.colors.background1} />
        <Chip
          title="Only 1 Slot"
          color={theme.colors.lightOprange}
          borderColor={theme.colors.orangeBorder}
        />
        <Chip title="INR 80" color={theme.colors.lightGreen} />
      </View>
      <Text style={styles.greyText}>
        Host ~ Ankita Singh | 2.25K Karma | On Fire
      </Text>
      <AvatarList data={[1, 2, 3, 4, 5]} />
      <View style={[styles.row, styles.bottomView]}>
        <View style={styles.bottomTextContainer}>
          <Text style={styles.dateTime}>Tomorrow, 5:00 PM</Text>
          <View style={[styles.row, styles.location]}>
            <LocationPinIcon />
            <Text style={styles.locationText}>
              2972 Westheimer Rd. Santa Ana
            </Text>
          </View>
        </View>
        <ThemeButton
          title="Booked"
          style={styles.button}
          titleStyle={styles.buttonTitle}
        />
      </View>
    </View>
  );
};

const stylessheet = createStyleSheet(({colors, fonts, margins, paddings}) => ({
  container: {
    backgroundColor: colors.background,
    padding: paddings.lg,
    borderRadius: 8,
  },
  row: {
    flexDirection: 'row',
    gap: 8,
  },
  gameText: {
    flex: 1,
    fontSize: 15,
    lineHeight: 22,
    fontFamily: fonts.semiBold,
    color: colors.typography,
  },
  greyText: {
    fontSize: 11,
    lineHeight: 16.5,
    fontFamily: fonts.regular,
    color: colors.grey3,
    marginTop: margins.sm,
    marginBottom: margins.md,
  },
  dateTime: {
    fontSize: 13,
    fontFamily: fonts.medium,
    lineHeight: 19.5,
    marginBottom: margins.sm,
  },
  bottomView: {
    marginTop: margins.md,
    alignItems: 'center',
  },
  location: {
    gap: 4,
    marginRight: margins.md,
  },
  locationText: {
    fontSize: 11,
    lineHeight: 16.5,
    fontFamily: fonts.regular,
    color: colors.grey3,
  },
  button: {
    height: 30,
    borderRadius: 4,
  },
  buttonTitle: {
    fontSize: 13,
  },
  bottomTextContainer: {
    flex: 1,
    marginRight: margins.md,
  },
}));
