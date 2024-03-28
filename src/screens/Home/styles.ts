import {UnistylesRuntime, createStyleSheet} from 'react-native-unistyles';

const stylesheet = createStyleSheet(theme => ({
  safeArea: {
    flex: 1,
    backgroundColor: theme.colors.background,
  },
  container: {
    flex: 1,
    backgroundColor: theme.colors.background1,
  },
  header: {
    flexDirection: 'row',
    backgroundColor: theme.colors.background,
    padding: theme.margins.xl,
    gap: 12,
  },
  locationText: {
    fontSize: 14,
    lineHeight: 21,
    fontFamily: theme.fonts.regular,
    color: theme.colors.typography,
  },
  createGameContainer: {
    backgroundColor: theme.colors.background,
    marginTop: theme.margins.xl,
    marginHorizontal: theme.margins.xl,
    borderRadius: 8,
  },
  createGameText: {
    fontSize: 17,
    fontFamily: theme.fonts.semiBold,
    color: theme.colors.typography,
  },
  descText: {
    fontSize: 14,
    fontFamily: theme.fonts.regular,
    color: theme.colors.typography2,
    marginTop: theme.margins.sm,
  },
  devider: {
    height: 1,
    backgroundColor: theme.colors.background1,
  },
  themeText: {
    fontFamily: theme.fonts.semiBold,
    color: theme.colors.primary,
    padding: theme.margins.md,
  },
  row: {
    flexDirection: 'row',
    padding: theme.margins.xl,
  },
  textContainer: {
    flex: 1,
  },
  createButton: {
    height: 32,
    borderRadius: 4,
  },
  createBtnText: {
    fontSize: 13,
  },
  cardsConntainer: {
    marginTop: theme.margins.xl,
  },
  cardsHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: theme.margins.xl,
    paddingHorizontal: theme.margins.xl,
  },
  cardTitleText: {
    flex: 1,
    fontFamily: theme.fonts.semiBold,
    fontSize: 17,
  },
  seeAllBtnText: {
    fontSize: 15,
    fontFamily: theme.fonts.medium,
    color: theme.colors.primary,
    textTransform: 'uppercase',
  },
  gameCard: {
    width: UnistylesRuntime.screen.width - 80,
    marginLeft: theme.margins.xl,
  },
  locationPickerWrapper: {flex: 1},
  gameCardsList: {
    overflow: 'visible',
  },
}));

export default stylesheet;
