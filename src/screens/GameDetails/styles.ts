import {createStyleSheet} from 'react-native-unistyles';

const stylesheet = createStyleSheet(({colors, margins, paddings, fonts}) => ({
  safeArea: {
    flex: 1,
    backgroundColor: colors.background,
  },
  container: {
    flex: 1,
    backgroundColor: colors.background1,
  },
  scrollview: {
    paddingHorizontal: paddings.xl,
    paddingVertical: paddings.xl,
    gap: 16,
  },
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
  hostImage: {
    height: 50,
    width: 50,
    borderRadius: 25,
    backgroundColor: colors.typography2,
    marginRight: margins.lg,
  },
  hostDetails: {
    flexDirection: 'row',
    marginTop: margins.lg,
  },
  divider: {
    height: 1,
    backgroundColor: colors.grey4,
    marginVertical: margins.lg,
  },
  clearButtonTitle: {
    color: colors.primary,
    fontSize: 13,
    alignSelf: 'flex-end',
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
  bottomView: {
    flexDirection: 'row',
    justifyContent: 'center',
    padding: paddings.xl,
    gap: 16,
  },
  spaceBetween: {
    justifyContent: 'space-between',
  },
}));

export default stylesheet;
