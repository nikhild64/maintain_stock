const { writeFile } = require('fs');
const { argv } = require('yargs');
// read environment variables from .env file
require('dotenv').config();
// read the command line arguments passed with yargs
const environment = argv.environment;
const isProduction = environment === 'prod';
const targetPath = isProduction
   ? `./src/environments/environment.prod.ts`
   : `./src/environments/environment.ts`;
// we have access to our environment variables
// in the process.env object thanks to dotenv
const environmentFileContent = `
export const environment = {
   production: ${isProduction},
   firebase: {
     apiKey: '${process.env.apiKey}',
   authDomain: '${process.env.authDomain}',
   databaseURL: '${process.env.databaseURL}',
   projectId: '${process.env.projectId}',
   storageBucket: '${process.env.storageBucket}',
   messagingSenderId: '${process.env.messagingSenderId}',
   appId: '${process.env.appId}',
   measurementId: '${process.env.measurementId}'}
};
`;
// write the content to the respective file
// eslint-disable-next-line prefer-arrow/prefer-arrow-functions
writeFile(targetPath, environmentFileContent, function(err: any) {
  if (err) {
     console.log(err);
  }
  console.log(`Wrote variables to ${targetPath}`);});
