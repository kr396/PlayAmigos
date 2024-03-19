import {createStyleSheet} from 'react-native-unistyles';

const stylesheet = createStyleSheet(theme => ({
  safearea: {
    flex: 1,
    backgroundColor: theme.colors.background,
  },
  container: {
    flex: 1,
    backgroundColor: theme.colors.background1,
  },
  option: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: theme.colors.background,
    paddingVertical: theme.margins.lg,
    paddingHorizontal: theme.margins.xl,
    marginBottom: theme.margins.xl,
    marginHorizontal: theme.margins.xl,
    borderRadius: 8,
  },
  iconWrap: {
    height: 50,
    width: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.colors.lightBlue,
  },
  optionText: {
    flex: 1,
    fontSize: 15,
    fontFamily: theme.fonts.medium,
    color: theme.colors.typography,
    marginHorizontal: theme.margins.lg,
  },
  profileIcon: {
    height: 98,
    width: 98,
    borderRadius: 50,
    backgroundColor: theme.colors.lightBlue,
  },
  header: {
    flexDirection: 'row',
    backgroundColor: theme.colors.background,
    borderRadius: 8,
    margin: theme.margins.xl,
    padding: theme.margins.xl,
  },
  headerContent: {
    flex: 1,
    marginLeft: theme.margins.xl,
  },
  row: {
    flexDirection: 'row',
  },
  userName: {
    flex: 1,
    fontSize: 15,
    fontFamily: theme.fonts.semiBold,
    lineHeight: 22.5,
  },
  gameRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  gameText: {
    fontSize: 12,
    fontFamily: theme.fonts.light,
    marginHorizontal: theme.margins.md,
  },
  gameContainer: {
    alignItems: 'center',
    alignSelf: 'flex-start',
    marginTop: theme.margins.xl,
  },
}));

export default stylesheet;
