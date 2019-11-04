// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebaseConfig: {
    apiKey: "AIzaSyB3GFOHyLZFTyASauTbYXOD83PP3cQJs3U",
    authDomain: "eshop-eaa9a.firebaseapp.com",
    databaseURL: "https://eshop-eaa9a.firebaseio.com",
    projectId: "eshop-eaa9a",
    storageBucket: "eshop-eaa9a.appspot.com",
    messagingSenderId: "331752246954",
    appId: "1:331752246954:web:44e5281fdc5df5f29e4ad3",
    measurementId: "G-5T0JVHEXMM"
  },
  urlProductsById: "http://localhost:3000/api/products/by-id/",
  urlProductsByPartNumber: "http://localhost:3000/api/products/",
  urlProductsByIdPartNumbers: "http://localhost:3000/api/products/"
};

