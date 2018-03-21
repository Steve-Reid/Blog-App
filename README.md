# Blog App

A React Redux blogging demo app with a node/express API and MongDB database.
The app uses PassportJS and OAuth2 for authentication, and a Redis cache.

The app also connects to an AWS S3 bucket for image uploads and retrievals.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

To install the app the following is required:

* [Google API Account](http://console.developers.google.com/) - For google OAuth2 authentications
* [Mlabs account ](https://mlab.com/) - For a MongoDB database URI [or similar service]
* [Redis installation](https://redis.io/rome/) - Used to create a cache memory store for MongoDB
* [AWS S3 account](https://aws.amazon.com/) - to create an S3 bucket for image uploads

Using the prerequisites above, create a _dev.js_ file in the _config_ directory.

```
module.exports = {
  googleClientID: "<your.googleClientID>"
  googleClientSecret: "<your.googleClientSecret>",
  mongoURI: "<your.mongoURI>",
  cookieKey: "<your.key>",
  redisUrl: "redis://127.0.0.1:6379",
  accessKeyId: "<your.S3.accessKeyId>",
  secretAccessKey: "<your.S3.secretAccessKey>"
};
```

### Installing

To get a development env running

Get the code

```
git clone https://github.com/Steve-Reid/Blog-App.git
```

Install the node dependencies on the server

```
cd Blog-App
yarn
```

Install the node dependencies on the client

```
cd Blog-App/client
yarn
```

Start the servers

```
cd Blog-App
yarn run dev
```

Feel free to use npm instead of yarn if you prefer.

## Running the tests

The test suite was built using [Jest](https://facebook.github.io/jest/) and [Puppeteer](https://github.com/GoogleChrome/puppeteer/blob/master/docs/api.md#)

To run the tests

```
yarn run test
```

## Built With

* [React](https://reactjs.org/) - The frontend framework used
* [Redux](https://redux.js.org/) - State Management
* [React Router](https://reacttraining.com/react-router/) - Client side routing
* [Axios](https://github.com/axios/axios/) - Promise based HTTP client
* [Node.js](https://nodejs.org/en/) - a JavaScript runtime
* [Express.js](https://expressjs.com/) - a Node.js framework
* [Passport.js](http://www.passportjs.org/) - authentication middleware
* [Mongoose](http://mongoosejs.com/) - Object document mapper for MongDB
* [MongDB](https://docs.mongodb.com/) - NoSQL database
* [Jest](https://facebook.github.io/jest/) - Test Runner
* [Puppeteer](https://github.com/GoogleChrome/puppeteer/blob/master/docs/api.md#) - a headless chromium automated testing api
* [Travis-CI](https://travis-ci.org/) - Open sources continuous integration testing

## License

This project is licensed under the ISC License - see the [LICENSE.md](LICENSE.md) file for details
