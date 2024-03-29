import {UnistylesRuntime, createStyleSheet} from 'react-native-unistyles';

const stylesheet = createStyleSheet(theme => ({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
  },
  image: {
    position: 'absolute',
    // height: UnistylesRuntime.screen.width * 0.7,
    width: UnistylesRuntime.screen.width,
    backgroundColor: theme.colors.typography2,
  },
  main: {
    flex: 1,
    padding: theme.margins.xl,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    backgroundColor: theme.colors.background,
    top: -16,
  },
  scrollView: {
    flexGrow: 1,
    paddingTop: UnistylesRuntime.screen.width * 0.4,
    paddingBottom: 40,
  },
  title: {
    fontSize: 18,
    fontFamily: theme.fonts.semiBold,
    color: theme.colors.typography,
  },
  input: {
    marginTop: theme.margins.lg * 2,
  },
  loginBtn: {
    marginTop: theme.margins.sm * 10,
  },
  bottomText: {
    color: theme.colors.typography2,
    fontSize: 14,
  },
  content: {
    flexGrow: 1,
  },
  signInText: {
    fontFamily: theme.fonts.semiBold,
    color: theme.colors.primary,
  },
  bottomRow: {
    flexDirection: 'row',
    alignSelf: 'center',
    alignItems: 'center',
    marginBottom: theme.margins.xl,
  },
  privacyLinkContainer: {
    flexDirection: 'row',
    marginTop: theme.margins.lg * 2,
  },
  privacyText: {
    fontSize: 13,
    fontFamily: theme.fonts.medium,
    color: theme.colors.typography2,
    marginHorizontal: theme.margins.lg,
  },
  themeText: {
    color: theme.colors.primary,
  },
  checkbox: {
    height: 20,
    width: 20,
  },
}));

export default stylesheet;
