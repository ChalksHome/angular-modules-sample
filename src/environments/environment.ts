// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

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

//   msalConfig: {
//       auth: {
//           clientId: '6ee12f99-4b04-410d-ac50-744778d1f737',
//           authority: 'https://login.microsoftonline.com/stevenchalkoutlook.onmicrosoft.com'
//       }
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
