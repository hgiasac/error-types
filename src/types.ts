import { ErrorModel, IBaseError, IErrorModel, IErrorType } from './error';

export interface IReplaceParams {
  [key: string]: any;
}

export interface II18nOption {
  language: string;
  locales: string[];
  country: string;
  province?: string;
  dateFormat?: string;
  timezone?: string;
}

export interface ITranslateOption {
  statusCode?: number;
  code?: string;
  language?: string;
  params?: IReplaceParams;
}

export interface IErrorManagerOption {
  language: string;
  locales: string[];
  httpCodes: any[];
}

export interface IErrorManager<E extends IBaseError> {
  fromLocale(locale?: string): IErrorManager<E>;
  translate(err?: IErrorType<E>, option?: ITranslateOption): IErrorModel<E>;
  internalServerError(err?: IErrorType<E>, option?: ITranslateOption): ErrorModel<E>;
  notFoundError(err?: IErrorType<E>, option?: ITranslateOption): ErrorModel<E>;
  badRequestError(err?: IErrorType<E>, option?: ITranslateOption): ErrorModel<E>;
  forbiddenError(err?: IErrorType<E>, option?: ITranslateOption): ErrorModel<E>;
  notImplementedError(err?: IErrorType<E>, option?: ITranslateOption): ErrorModel<E>;
  unprocessableEntityError(err?: IErrorType<E>, options?: ITranslateOption): ErrorModel<E>;
}

export interface IErrorDictionary {
  [key: string]: string;
}

export interface IErrorDictionaries {
  [key: string]: IErrorDictionary;
}

export interface ITitleDetailDictionary {
  title: IErrorDictionary;
  detail: IErrorDictionary;
}

export interface ITitleDetailDictionaries {
  title: IErrorDictionaries;
  detail: IErrorDictionaries;
}
