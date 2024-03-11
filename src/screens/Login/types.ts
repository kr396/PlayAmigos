export interface LoginResponse {
  meta: Meta;
  data: Data;
  statusCode: number;
}

export interface Meta {
  status: number;
  message: string;
  tokenData: string;
  isEmailVerified: boolean;
  otpTimeOut: number;
}

export interface Data {
  userId: number;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  gender: string;
  bio: string;
  profilePic: string;
  isEmailVerified: number;
  isSportAdded: number;
  sportData: any[];
}
