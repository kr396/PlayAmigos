import {createStyleSheet} from 'react-native-unistyles';

const stylesheet = createStyleSheet(({colors, fonts, margins, paddings}) => ({
  safearea: {
    flex: 1,
    backgroundColor: colors.background,
  },
  container: {
    flex: 1,
    backgroundColor: colors.background1,
  },
  list: {
    padding: 16,
    flexGrow: 1,
  },
  userCell: (isLastCell: boolean) => ({
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.background,
    paddingVertical: paddings.md,
    paddingHorizontal: paddings.lg,
    borderBottomLeftRadius: isLastCell ? 8 : 0,
    borderBottomRightRadius: isLastCell ? 8 : 0,
  }),
  header: {backgroundColor: colors.background1},
  avarar: {
    height: 50,
    width: 50,
    borderRadius: 25,
    backgroundColor: colors.typography2,
  },
  details: {
    flex: 1,
    marginHorizontal: margins.lg,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: margins.sm,
  },
  greyText: {
    color: colors.typography2,
    fontFamily: fonts.regular,
    fontSize: 11,
    marginRight: margins.sm,
  },
  userName: {
    color: colors.typography,
    fontFamily: fonts.medium,
    fontSize: 13,
  },
  totalWrap: {
    backgroundColor: colors.background,
    marginTop: margins.xl,
    paddingBottom: paddings.md,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
  totalText: {
    fontSize: 17,
    fontFamily: fonts.semiBold,
    color: colors.typography,
    marginTop: margins.lg,
    marginHorizontal: margins.lg,
  },
}));

export default stylesheet;
