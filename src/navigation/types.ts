export type RootStackParamList = {
  OnBoarding: undefined;
  Login: undefined;
  ForgotPassword: undefined;
  SignUp: undefined;
  VerifyOTP: {email: string};
  BottomTabs: undefined;
  SelectSports: undefined;
};

export type BottomTabParamList = {
  Home: undefined;
  PlayStack: undefined;
  ProfileStack: undefined;
};

export type ProfileStackParamList = {
  Profile: undefined;
  EditProfile: undefined;
};

export type PlayStackParamList = {
  Play: undefined;
  CreateGame: undefined;
};
