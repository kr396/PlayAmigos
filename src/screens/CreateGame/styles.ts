import {createStyleSheet} from 'react-native-unistyles';

const stylesheet = createStyleSheet(({colors}) => ({
  safeArea: {
    flex: 1,
    backgroundColor: colors.background,
  },
  container: {
    flex: 1,
    backgroundColor: colors.background1,
  },
}));

export default stylesheet;
