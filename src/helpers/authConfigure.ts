export const msalConfig = {
  auth: {
    clientId: `${process.env.REACT_APP_APPLICATION_ID}`,
    authority: `${process.env.REACT_APP_AUTHORITY}`,
    redirectUri: 'http://localhost:3000',
  },
  cache: {
    cacheLocation: 'localStorage',
    storeAuthStateInCookie: false,
  },
};

export const loginRequest = {
  scopes: ['User.Read'],
};

export const graphConfig = {
  graphMeEndpoint: 'https://graph.microsoft.com/v1.0/me',
};
