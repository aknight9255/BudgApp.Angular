// export const environment = {
//   production: true
// };

export let APIURL = '';

switch (window.location.hostname) {
    // this is the deployed angular application
    case 'tbc-budgapp.herokuapp.com':
        // this is the full url of your deployed backend API
        APIURL = 'https://budgapp.azurewebsites.net'
        break;
    default:
        // this is the local host name of your API
        APIURL = 'http://localhost:4200';
}
