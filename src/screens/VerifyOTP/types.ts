import {User} from '../../redux/commonSlice/userSlice';

export interface VerifyUserRespose {
  meta: Meta;
  data: User;
  statusCode: number;
}

export interface Meta {
  status: number;
  message: string;
  tokenData: string;
  isEmailVerified: number;
}
