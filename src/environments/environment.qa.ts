export const environment = {
  production: true,
  apiBaseUrl: 'https://api.qa.mustrace.com/api/v1',
  imagesBaseUrl: 'https://images.qa.mustrace.com',
  adminUrl: 'https://admin.qa.mustrace.com',
  stripe: {
    publishableKey: 'pk_test_gmA16xWDhJ0UtU01VbB41kUX'
  },
  exceptionReporting: {
    enabled: true,
    rollbar: {
      accessToken: '55abc1bf2ade4fb79f7754f780137a26',
      environment: 'qa',
      ignoredMessages: [],
      captureUncaught: true,
      sourceMapEnabled: true
    }
  }
};
