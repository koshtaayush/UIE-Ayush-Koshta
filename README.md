# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Running the project in local
The following version has been used for this application
The node version used : v10.16.3
The npm version used : 6.9.0
1. Clone the repo
2. Run `npm install`
3. Run `npm start`
The project should be up and running in http://localhost:3000/
## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm run test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `Approach for the problem`

1. Have used polling for fetching the next messages after timestamp
2. Sending when the last fetch call was made and storing timestamp for that, so that we send the same timestamp after in the next fetch call
3. Currently the application is configured to take the sender name as Ayush. But can be changed to something else by changing SENDER_NAME in config.ts
4. An additional route has been made as /postMessage which would allow to send message as a different user. It can be accessed at localhost:3000/postMessage
5. Lazy loading has been implemented to not load whole chunk at once
6. The code has been made modular keeping in mind the time frame provided for the task.


### `Improvements which could have been made`
1. Instead of polling the API, a socket implementation
2. Redux/Context as a state management library
3. More exhaustive test cases implementation
4. Animations around the chat interface


