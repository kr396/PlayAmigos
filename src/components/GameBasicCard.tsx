import {View, Text, Image} from 'react-native';
import React from 'react';
import {Chip} from './Chip';
import {LocationPinIcon} from '../config/svgs';
import {createStyleSheet, useStyles} from 'react-native-unistyles';

export const GameBasicCard = () => {
  const {styles, theme} = useStyles(styleSheet);
  return (
    <View style={styles.card}>
      <View style={styles.row}>
        <Image style={styles.sportIcon} />
        <View>
          <Text style={styles.cardTitle}>Badmibnton</Text>
          <View style={[styles.row, styles.chipWrap]}>
            <Chip title="Singles" color={theme.colors.background1} />
            <Chip title="Intermediate" color={theme.colors.background1} />
            <Chip title="Only 1 Slot" color={theme.colors.lightOprange} />
            <Chip title="INR 80" color={theme.colors.lightGreen} />
          </View>
          <View style={styles.dateLocation}>
            <Text style={styles.dateTime}>Tomorrow, 5:00 PM</Text>
            <View style={[styles.row, styles.location]}>
              <LocationPinIcon />
              <Text style={styles.locationText}>
                2972 Westheimer Rd. Santa Ana
              </Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};
const styleSheet = createStyleSheet(({colors, paddings, margins, fonts}) => ({
  card: {
    backgroundColor: colors.white,
    borderRadius: 8,
    padding: paddings.lg,
  },
  row: {
    flexDirection: 'row',
  },
  sportIcon: {
    height: 40,
    width: 40,
    backgroundColor: colors.typography2,
    marginRight: margins.lg,
  },
  cardTitle: {
    fontSize: 17,
    fontFamily: fonts.semiBold,
    color: colors.typography,
  },
  chipWrap: {
    gap: 8,
    marginTop: margins.md,
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
  dateTime: {
    fontSize: 13,
    fontFamily: fonts.medium,
    lineHeight: 19.5,
    marginBottom: margins.sm,
  },
  dateLocation: {
    marginTop: margins.lg,
  },
}));
