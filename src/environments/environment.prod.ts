export const environment = {
  production: false,
  msalConfig: {
      auth: {
          clientId: '6ee12f99-4b04-410d-ac50-744778d1f737',
          authority: 'https://login.microsoftonline.com/stevenchalkoutlook.onmicrosoft.com'
      }
  },
  apiConfig: {
      scopes: ['User.Read', 'openid'],
      uri: 'https://login.microsoftonline.com/stevenchalkoutlook.onmicrosoft.com'
  }
};

