// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase:{
    apiKey: "AIzaSyCW7lIIbt8F9LoH_bnoCWFcxyLs9MkXS6I",
    authDomain: "sn-todolist-app.firebaseapp.com",
    databaseURL: "https://sn-todolist-app.firebaseio.com",
    projectId: "sn-todolist-app",
    storageBucket: "sn-todolist-app.appspot.com",
    messagingSenderId: "849523132610"
  }
};
