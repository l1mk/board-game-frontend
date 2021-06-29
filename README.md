## board-game-frontend
React Redux project using HTML CSS for frontend and Rails API for backend.

## Setup:

Clone this repository and paste in your terminal.
Clone the backend repository called board-game-backend as well.
Go inside the folder you just cloned using $cd board-game-backend
While on it, start the migration with $rake db:migrate.
Feed the database with some basic examples using $rake db:seed. If you want you can test the API using the rails console command, $rails c. While on it, try creating new models for example:

$Game.create(turns: 1, player1: "red", pokemon1: "charmander", player2: "blue", pokemon2: "squirtle", player3: "yellow", pokemon3: "onix", player4: "pink", pokemon4: "staryu" )

After testing the models you can fire up the Server using $rails server
You can visit http://localhost:3000/games on your browser to confirm the server is live. Keep it live.
Go inside the other repository you copied, $cd board-game-frontend and fire the app using $npm start


## Usage:
The app consist on a board game for four players to compete on who arrives first to the end of the board using a dice to move around. The game is a start prototype to a more complicated game that will be improve with more functionalities and mechanics. In the meantime is just a race that is randomly finish by players taking turns using the dice.
The app has different pages to go throught to read more info about the state of the game, to see all records of all games that have been played and all players that has been created. Also you can learn a bit more on the pokemon characters available to be used in the game.

## Suppport: 
Feel free to reach out, if you see a bug or if you believe there is something to be improved.

## License: The pokemon artwork was taken from different sources online. Nintendo and the Pokemon company own the right of everything Pokemon related. I used free images and edited some of them using illustrator.


This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `yarn build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
