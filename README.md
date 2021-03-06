# Payrank API

This is a REST API, using express and Cloud MongoDB to store data.

## API Requests

## Authentication

### Post

#### 1) Register: Takes in username, a unique email, password, and an optional image.

Route: localhost:3001/api/auth/register

#### 2) Login: Takes in email and password to validate.

Route: localhost:3001/api/auth/login

## User

### Put

#### 1) Update User: Takes in id.

Route: localhost:3001/api/users/:id

### Delete

#### 1) Delete user: Takes in id.

Route: localhost:3001/api/uses/:id

### Get

#### 1) Get user information: Takes in id.

Route: localhost:3001/api/users/:id

## Posts

### Post

#### 1) Create new post: Takes in post model.

Route: localhost:3001/api/posts

### Put

#### 1) Update post: Takes in post id and new post model.

Route: localhost:3001/api/posts/:id

### Delete

#### 1) Delete post: Takes in post id.

Route: localhost:3001/api/posts/:id

### Get

#### 1) Get post: Takes in post id.

Route: localhost:3001/api/posts/:id

#### 2) Get all post

Route: localhost:3001/api/posts

## Categories

### Post

#### 1) Create new category: Takes in category.

Route: localhost:3001/api/categories

### Get

#### 1) Get categories

Route: localhost:3001/api/categories


## Available Scripts

In the project directory, you can run:

### `npm start`

This uses Nodemon to listen for updates dynamically.

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
# payrank-api
