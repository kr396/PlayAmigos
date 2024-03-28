import {createStyleSheet} from 'react-native-unistyles';

const stylesheet = createStyleSheet(({colors, margins, fonts}) => ({
  safeArea: {
    flex: 1,
    backgroundColor: colors.background,
  },
  container: {
    flex: 1,
    backgroundColor: colors.background1,
  },
  row: {
    flexDirection: 'row',
    backgroundColor: colors.background,
  },

  qaContainer: {
    marginLeft: margins.md,
  },
  avatar: {
    height: 24,
    width: 24,
    borderRadius: 12,
    marginRight: margins.sm,
    backgroundColor: colors.typography2,
  },
  question: {
    fontSize: 12,
    fontFamily: fonts.medium,
    color: colors.typography,
    lineHeight: 20,
    marginBottom: margins.sm,
  },
  qaList: {
    gap: 4,
  },
  center: {
    alignItems: 'center',
  },
  locationText: {
    fontSize: 11,
    lineHeight: 16.5,
    fontFamily: fonts.regular,
    color: colors.grey3,
  },
}));

export default stylesheet;
