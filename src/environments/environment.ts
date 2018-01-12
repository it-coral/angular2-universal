// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

import {Config} from './config';
export const environment: Config ={
  production: false,
  //apiBaseUrl: 'http://api.qa.mustrace.com/api/v1',
  apiBaseUrl: 'http://localhost:9000/api/v1',
  imagesBaseUrl: 'https://images.dev.mustrace.com',
  adminUrl: 'http://localhost:3001',
  stripe: {
    publishableKey: 'pk_test_gmA16xWDhJ0UtU01VbB41kUX'
  },
  exceptionReporting: {
    enabled: false,
    rollbar: {
      accessToken: '55abc1bf2ade4fb79f7754f780137a26',
      environment: 'development',
      ignoredMessages: [],
      captureUncaught: true,
      sourceMapEnabled: true
    }
  }
};
