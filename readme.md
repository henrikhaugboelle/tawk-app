TAWK APP
========

This application is created using Create React Native App and relies on Expo. For any troubleshooting, please see [create-react-native-app](https://github.com/react-community/create-react-native-app). 

# Dependencies

This project is dependent on the availability of [tawk-shared](https://github.com/henrikhaugboelle/tawk-shared) for development. Please see and setup that repository in advance to setting up this one.

The application needs the TAWK API. Which can be found here: [tawk-api](https://github.com/henrikhaugboelle/tawk-api). You should setup this application in advance as well.

# Installation

```
npm install (or yarn)
```

# Setup

Add a `.env` file to the root folder of the repository. The `.env` file needs paths for the API endpoints. The contents of the `.env` should look like this for local development:

```
REACT_APP_API_PATH=http://localhost:3001/api
REACT_APP_GRAPHQL_PATH=http://localhost:3001/graphql
REACT_APP_GRAPHQL_SUBSCRIPTIONS_PATH=ws://localhost:3001/subscriptions
```

# Development

To run in development, run the following command. You'll need a `.env` file as instructed above in the setup chapter.

```
npm start (or yarn start)
```

You will now be presented with a few options where you can choose whether to run an Android instance or iOS instance.

# Publishing

To publish your apps to the Expo app store, your should add a `.env.production` file and configure it with your production environment variables like shown below.

```
API_PATH=https://YOUR_URL/api
GRAPHQL_PATH=https://YOUR_URL/graphql
GRAPHQL_SUBSCRIPTIONS_PATH=wss://YOUR_URL/subscriptions
```

Before publishing, make sure that your have the Expo cli installed. You can install it with:

```
npm install -g exp
```

Before publishing, make sure to reconfigure the information in `app.json` file. Rename the project, choose different identifiers, etc.

```
exp publish
```

You can read more about publishing with expo and also how to actually publish to the Apple App Store and Google Play Store here: [Publishing with Expo](https://docs.expo.io/versions/latest/guides/publishing.html).