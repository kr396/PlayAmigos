import {createStyleSheet} from 'react-native-unistyles';

const stylesheet = createStyleSheet(theme => ({
  safearea: {
    flex: 1,
    backgroundColor: theme.colors.white,
  },
  container: {
    flex: 1,
    backgroundColor: theme.colors.background1,
  },
  searchContainer: {
    backgroundColor: theme.colors.white,
  },
  searchView: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 40,
    backgroundColor: theme.colors.background1,
    marginHorizontal: theme.margins.xl,
    marginBottom: theme.margins.xl,
    paddingHorizontal: theme.margins.lg,
    borderRadius: 8,
  },
  searchInput: {
    flex: 1,
    height: 40,
    paddingLeft: theme.margins.md,
  },
  sportsHeading: {
    fontFamily: theme.fonts.medium,
    color: theme.colors.typography,
    fontSize: 13,
    marginVertical: theme.margins.xl,
  },
  content: {
    flex: 1,
    paddingHorizontal: 16,
  },
  sportCard: (isLeft: boolean) => ({
    backgroundColor: theme.colors.white,
    flex: 1,
    marginRight: isLeft ? 8 : 0,
    marginLeft: !isLeft ? 8 : 0,
    borderRadius: 8,
    paddingHorizontal: 20,
    paddingVertical: 14,
  }),
  sportIcon: {
    height: 20,
    width: 20,
    marginBottom: theme.margins.sm,
  },
  bottomView: {
    backgroundColor: theme.colors.white,
    padding: theme.margins.xl,
  },
  listStyle: {gap: 16},
  sportName: {
    color: theme.colors.black,
    fontSize: 12,
    fontFamily: theme.fonts.regular,
    lineHeight: 18,
  },
}));

export default stylesheet;
