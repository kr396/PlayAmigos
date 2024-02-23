import {UnistylesRuntime, createStyleSheet} from 'react-native-unistyles';
import {fonts} from '../../config/fonts';

const stylesheet = createStyleSheet(theme => ({
  safeArea: {
    flex: 1,
    backgroundColor: theme.colors.background,
  },
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
  },
  item: {
    flex: 1,
    width: UnistylesRuntime.screen.width,
    alignItems: 'center',
    paddingBottom: 40,
  },
  image: {
    width: UnistylesRuntime.screen.width,
    height: UnistylesRuntime.screen.width,
    backgroundColor: theme.colors.typography2,
  },
  title: {
    textAlign: 'center',
    color: theme.colors.typography,
    fontFamily: theme.fonts.semiBold,
    fontSize: 24,
    marginTop: theme.margins.xl * 2,
  },
  subTitle: {
    textAlign: 'center',
    color: theme.colors.typography2,
    fontFamily: theme.fonts.regular,
    fontSize: 16,
    marginTop: 24,
  },
  bottomView: {
    justifyContent: 'space-around',
    marginHorizontal: theme.margins.xl,
    paddingVertical: theme.margins.xl,
  },
  pivotContainer: {
    flexDirection: 'row',
    alignSelf: 'center',
    gap: theme.margins.lg,
  },
  pivot: (index: number, activeIndex: number | null) => ({
    height: 10,
    width: 10,
    borderRadius: 10,
    backgroundColor:
      index === activeIndex ? theme.colors.primary : theme.colors.lightBlue,
    marginBottom: theme.margins.xl * 2,
  }),
  nextButton: {
    marginBottom: theme.margins.xl,
  },
  skipButton: {
    alignSelf: 'center',
    color: theme.colors.typography2,
    fontSize: 14,
    fontFamily: theme.fonts.regular,
  },
}));

export default stylesheet;
