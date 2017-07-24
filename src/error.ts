export const ERROR_CODE = {
  FORBIDDEN: '403',
  NOT_FOUND: '404',
  INTERNAL: '500',
  NOT_IMPLEMENTED: '501',
};

export type IErrors<E> = E[];

export interface IBaseError {
  getMessage: () => string;
}

export interface IErrorModel<E extends IBaseError> {
  errors: IErrors<E>;
}
export type IErrorType<E extends IBaseError> = IErrorModel<E> | IErrors<E> | E | any;

export class ErrorModel<E extends IBaseError> extends Error implements IErrorModel<E> {

  public errors: E[];

  /**
   * Error Constructor
   *
   * @param  {IErrorType} err Error data
   */
  constructor(err: IErrorType<E>) {

    super();
    const errors: IErrors<E> = Array.isArray(err) ? err : [err];
    const message = errors[0].getMessage();

    this.message = message;
    this.errors = errors;

    if (typeof (Error as any).captureStackTrace === 'function') {
      (Error as any).captureStackTrace(this, this.constructor);
    } else {
      this.stack = (new Error(message)).stack;
    }
  }
}
