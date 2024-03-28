import {createStyleSheet} from 'react-native-unistyles';

const stylesheet = createStyleSheet(({colors, paddings, margins}) => ({
  container: {
    flex: 1,
    margin: margins.xl,
  },
  parent: {
    backgroundColor: colors.background,
    padding: paddings.lg,
    borderRadius: 8,
    marginTop: margins.xl,
  },
  content: {
    paddingLeft: paddings.lg,
    color: colors.black,
    fontSize: 14,
  },
  sportsContent: {
    color: colors.black,
    fontSize: 12,
  },
  button: {
    margin: margins.xl,
  },
  inputTextParent: {
    marginTop: -24,
    height: 48,
    width: '90%',
  },
  inputText: {
    backgroundColor: colors.background,
  },
  containerStyles: {
    flexDirection: 'row',
    height: 48,
    backgroundColor: colors.background,
    borderRadius: 8,
    paddingLeft: paddings.xl,
    marginTop: margins.xl,
  },
  searchIcon: {
    alignSelf: 'center',
  },
  image: {
    width: 20,
    height: 20,
  },
  itemContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: margins.xl / 2,
    marginRight: -20,
  },
  sportsContainer: {
    backgroundColor: colors.background,
    marginTop: margins.xl + 4,
    alignItems: 'flex-start',
  },
}));

export default stylesheet;
