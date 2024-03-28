import {createStyleSheet} from 'react-native-unistyles';

const stylesheet = createStyleSheet(({colors, paddings, margins}) => ({
  container: {
    flex: 1,
    margin: margins.xl,
  },
  parent: {
    height: 48,
    backgroundColor: colors.background,
    alignItems: 'center',
    flexDirection: 'row',
    padding: paddings.md,
    borderRadius: 8,
    marginTop: margins.xl,
  },
  content: {
    paddingLeft: paddings.lg,
    color: colors.black,
  },
  iconsParent: {
    flex: 1,
    alignItems: 'flex-end',
  },
  button: {
    margin: margins.xl,
  },
}));

export default stylesheet;
