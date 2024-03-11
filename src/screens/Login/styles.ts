import {UnistylesRuntime, createStyleSheet} from 'react-native-unistyles';

const stylesheet = createStyleSheet(theme => ({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
  },
  image: {
    position: 'absolute',
    height: UnistylesRuntime.screen.width,
    width: UnistylesRuntime.screen.width,
    backgroundColor: theme.colors.typography2,
  },
  main: {
    flex: 1,
    padding: theme.margins.xl,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    backgroundColor: theme.colors.background,
    top: UnistylesRuntime.screen.width - 16,
  },
  scrollView: {
    flex: 1,
  },
  title: {
    fontSize: 18,
    fontFamily: theme.fonts.semiBold,
    color: theme.colors.typography,
  },
  input: {
    marginTop: theme.margins.lg * 2,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginTop: theme.margins.xl,
  },
  forgotPass: {
    color: theme.colors.primary,
    fontSize: 13,
    fontFamily: theme.fonts.regular,
  },
  loginBtn: {
    marginTop: theme.margins.sm * 10,
  },
}));

export default stylesheet;
