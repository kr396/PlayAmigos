export type IAxiosResponse<T, A = any> = {
  meta: ResponseMeta & A;
  data: T;
};

export type ResponseMeta = {
  status: number;
  message: string;
};
