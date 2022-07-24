export type HttpErrorObject = {
  name: string;
  message: string;
  stack?: string;
  http: {
    url: string;
    status: number;
    statusText: string;
  };
};

export class HttpError extends Error {
  url: string;
  status: number;
  statusText: string;

  constructor(response: Response) {
    super(response.statusText);
    this.name = "HttpError";
    this.status = response.status;
    this.statusText = response.statusText;
    this.url = response.url;
  }

  serialize(): HttpErrorObject {
    return {
      name: this.name,
      message: this.message,
      stack: this.stack,
      http: {
        status: this.status,
        statusText: this.statusText,
        url: this.url,
      },
    };
  }
}

type ValidationResult = Pick<Response, "status"> & { message: string; name?: string; stack?: string };

type RequestObject = Omit<HttpErrorObject, "http"> & Pick<HttpErrorObject["http"], "status">;

export class RequestBaseError extends Error {
  status: number;

  constructor(result: ValidationResult) {
    super(result.message);
    this.name = result.name || "RequestError";
    this.status = result.status;
  }

  serialize(): RequestObject {
    return {
      name: this.name,
      message: this.message,
      stack: this.stack,
      status: this.status,
    };
  }
}

export class RequestQueryError extends RequestBaseError {
  constructor(result: ValidationResult) {
    super({ ...result, name: "RequestQueryError" });
  }
}

export class RequestBodyError extends RequestBaseError {
  constructor(result: ValidationResult) {
    super({ ...result, name: "RequestBodyError" });
  }
}
