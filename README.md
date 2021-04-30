# Atríviate

Train your brain and have fun with our history, geography, art, music, science and nature and sports questions. Customize your boards to get to the top! [Atríviate Game](https://atriviate.netlify.app/)

![home](https://user-images.githubusercontent.com/61200707/116747841-ceb9c300-a9fe-11eb-9af6-27d945adc277.png)
![boards](https://user-images.githubusercontent.com/61200707/116747851-d24d4a00-a9fe-11eb-817d-00a518d38672.png)
![game](https://user-images.githubusercontent.com/61200707/116747872-d6796780-a9fe-11eb-83b6-faa14f179aec.png)

## Dependencies

This project is bootstrapped with React.
It is full responsive and SASS has been used to give styles.
For testing, I've decided to use [Jest framework](https://jestjs.io/).
Authentication is done with [Auth0](https://auth0.com).


## Folder structure

```
atriviate-app
│
└───build  
│
└───coverage
│
└───public
│
└───src
│   │   index.jsx
│   │   index.scss
│   │   index.css
│   │   App.jsx
│   │   App.scss
│   │   App.css
│   │   logo.svg
│   │   setupTests.js
│   │
│   └───components
│   │   └───Board-detail
│   │   |   │   Board-detail.css
│   │   |   |   Board-detail.scss
│   │   |   │   Board-detail.jsx
│   │   |   │   Board-detail.test.jsx
│   │   |
│   │   └───Board-item
│   │   |   │   Board-item.css
│   │   |   |   Board-item.scss
│   │   |   │   Board-item.jsx
│   │   |   │   Board-item.test.jsx
│   │   |
│   │   └───Board-list
│   │   |   │   Board-list.css
│   │   |   |   Board-list.scss
│   │   |   │   Board-list.jsx
│   │   |   │   Board-list.test.jsx
│   │   |
│   │   └───Button-action
│   │   |   │   Button-action.css
│   │   |   |   Button-action.scss
│   │   |   │   Button-action.jsx
│   │   |   │   Button-action.test.jsx
│   │   |
│   │   └───Button-action-text
│   │   |   │   Button-action-text.css
│   │   |   |   Button-action-text.scss
│   │   |   │   Button-action-text.jsx
│   │   |   │   Button-action-text.test.jsx
│   │   |
│   │   └───Button-redirect
│   │   |   │   Button-redirect.css
│   │   |   |   Button-redirect.scss
│   │   |   │   Button-redirect.jsx
│   │   |   │   Button-redirect.test.jsx
│   │   |
│   │   └───Button-redirect-text
│   │   |   │   Button-redirect-text.css
│   │   |   |   Button-redirect-text.scss
│   │   |   │   Button-redirect-text.jsx
│   │   |   │   Button-redirect-text.test.jsx
│   │   |
│   │   └───Dashboard
│   │   |   │   Dashboard.css
│   │   |   |   Dashboard.scss
│   │   |   │   Dashboard.jsx
│   │   |   │   Dashboard.test.jsx
│   │   |
│   │   └───Header
│   │   |   │   Header.css
│   │   |   |   Header.scss
│   │   |   │   Header.jsx
│   │   |   │   Header.test.jsx
│   │   |
│   │   └───privateRoute
│   │   |   │   privateRoute.jsx
│   │   |
│   │   └───Profile
│   │   |   │   Profile.css
│   │   |   |   Profile.scss
│   │   |   │   Profile.jsx
│   │   |
│   │   └───trivial-game
│   │       │   trivial-game.css
│   │       |   trivial-game.scss
│   │       │   trivial-game.jsx
│   │       │   trivial-game.test.jsx
│   │
│   └───redux
│   │   └───actions
│   │   │   │   boards-action-creator.js
│   │   │   |   boards-action-creator.test.js
│   │   │   │   boards-action-types.js
│   │   │   │   question-action-creator.js
│   │   │   |   question-action-creator.test.js
│   │   │   │   question-action-types.js
│   │   │
│   │   └───reducers
│   │   │   │   boards-reducer.js
│   │   │   |   boards-reducer.test.js
│   │   │   │   index.js
│   │   │   │   questions-reducer.js
│   │   │   |   questions-reducer.test.js
│   │   │
│   │   └───stores
│   │   │   │   configure-store.js
│   │   │   |   initial-state.js
│   │   │
│   └───sass
│       │   _globals.scss
│       │   _mediaqueries.scss
│
│   .eslintrc.js
│   .gitignore
│   .env
│   package-lock.json   
│   package.json
│   README.md 

```

## API OpenTrivia
To obtain the questions, we have used the [OpenTrivia](https://opentdb.com/) API.

