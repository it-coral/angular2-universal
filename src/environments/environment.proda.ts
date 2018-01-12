import {Config} from './config';
export const environment: Config = {
  production: true,
  apiBaseUrl: 'https://api.proda.mustrace.com/api/v1',
  imagesBaseUrl: 'https://images.mustrace.com',
  adminUrl: 'http://admin.mustrace.com',
  stripe: {
    publishableKey: 'pk_live_2CBYUwkIFR6d2tvuQD85QT2a'
  },
  exceptionReporting: {
    enabled: true,
    rollbar: {
      accessToken: '55abc1bf2ade4fb79f7754f780137a26',
      environment: 'production',
      ignoredMessages: [],
      captureUncaught: true,
      sourceMapEnabled: true
    }
  }
};
