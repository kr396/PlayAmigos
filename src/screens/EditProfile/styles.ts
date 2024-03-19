import {createStyleSheet} from 'react-native-unistyles';

const stylesheet = createStyleSheet(theme => ({
  safeArea: {
    flex: 1,
    backgroundColor: theme.colors.background,
  },
  container: {
    flex: 1,
    backgroundColor: theme.colors.background1,
  },
  inputContainer: {
    backgroundColor: theme.colors.background,
    marginBottom: theme.margins.lg * 2,
    padding: theme.margins.lg * 2,
    gap: theme.margins.lg * 2,
  },
  profilePhoto: {
    height: 150,
    width: 150,
    borderRadius: 75,
    alignSelf: 'center',
    backgroundColor: theme.colors.lightBlue,
    borderWidth: 1,
    borderColor: theme.colors.primary,
  },
  cameraButton: {
    height: 38,
    width: 38,
    backgroundColor: theme.colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    borderWidth: 1,
    borderColor: theme.colors.white,
    bottom: 20,
  },
  profilePhotoContainer: {
    alignSelf: 'center',
    alignItems: 'center',
  },
  updateButton: {
    marginBottom: theme.margins.lg * 2,
    alignSelf: 'center',
    paddingHorizontal: theme.margins.lg * 2,
  },
}));

export default stylesheet;
