import {Inject, Injectable} from '@angular/core';

@Injectable()
export class Config {
  production: boolean;
  apiBaseUrl: string;
  imagesBaseUrl: string;
  adminUrl: string;
  stripe: StripeConfig;
  exceptionReporting: ExceptionReportingConfig;
};

export interface ExceptionReportingConfig {
  enabled: boolean;
  rollbar?: RollbarConfig;
}

export interface RollbarConfig {
  accessToken?: string;
  environment?: string;
  ignoredMessages: string[];
  captureUncaught: boolean;
  sourceMapEnabled: boolean;
}


export interface StripeConfig {
  publishableKey: string;
}

