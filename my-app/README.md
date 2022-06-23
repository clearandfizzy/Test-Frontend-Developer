# 4C Platform Frontend Technical Test

Create a `ToDoList` React application that holds a list of `ToDoItem`s ordered in chronological order. The `ToDoItem`s are added via a form. Each `ToDoItem` must have a title, timestamp and a solve button. When an item is solved, the title must appear as line through text and the item will move at the end of the list.

The application must make use of a `ToDoContext` that holds the state of the application. The state can be accessed and altered via the `useContext` hook. A `ToDoProvider` must make use of a `useReducer` hook and a reducer that helps modifying the state based on events and payload. Where appropriate, `useEffect` and `useState` hooks can be used.

**Please note:** All constructs **must** be implemented as **functional styled components** (conditional styles, etc..) and be **unit tested** using Jest and React Testing Library, with a **minimum coverage of 80%**.

All required dependencies are added in this package and are already configured.

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
