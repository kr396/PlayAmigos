import {UnistylesRuntime, createStyleSheet} from 'react-native-unistyles';

const stylesheet = createStyleSheet(theme => ({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
  },
  image: {
    height: UnistylesRuntime.screen.width * 0.7,
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
  title: {
    fontSize: 18,
    fontFamily: theme.fonts.semiBold,
    color: theme.colors.typography,
  },
  input: {
    marginTop: theme.margins.lg * 2,
  },
  sendLink: {
    marginTop: theme.margins.sm * 10,
    marginBottom: theme.margins.xl,
  },
}));

export default stylesheet;
