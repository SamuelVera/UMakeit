// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
      // Initialize Firebase
    firebaseConfig: {
        apiKey: 'AIzaSyBTf-X_9FF9j9RHj91aNvVHX7yHCCOB1Yc',
        authDomain: 'u-make-it.firebaseapp.com',
        databaseURL: 'https://u-make-it.firebaseio.com',
        projectId: 'u-make-it',
        storageBucket: 'u-make-it.appspot.com',
        messagingSenderId: '960372428269'
    },
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
