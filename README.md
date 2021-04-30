# Atríviate

Train your brain and have fun with our history, geography, art, music, science and nature and sports questions. Customize your boards to get to the top! [Atríviate Game](https://atriviate.netlify.app/)

## Dependencies

This project is bootstrapped with React.
It is full responsive and SASS has been used to give styles.
For testing, I've decided to use [Jest framework](https://jestjs.io/). 

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
│   └───assetts
│   │   └───fonts
│   │   └───images
│   │   └───styles
│   │
│   └───components
│   │   └───Header
│   │   |   │   Header.css
│   │   |   |   Header.scss
│   │   |   │   Header.jsx
│   │   |   │   Header.test.jsx
│   │   |
│   │   └───Home
│   │   |   │   Home.css
│   │   |   |   Home.scss
│   │   |   │   Home.jsx
│   │   |   │   Home.test.jsx
│   │   |
│   │   └───Weather
│   │       │   Weather.css
│   │       |   Weather.scss
│   │       │   Weather.jsx
│   │       │   Weather.test.jsx
│   │
│   └───services
│   |   │   api.config.js
│   |   │   weatherFetcher.js
│   |   │   weatherLocation.js
│   │
│   └───utils
│       │   dateFormater.js
│       │   unitsFormater.js
│
│   .eslintrc.js
│   .gitignore
│   .env
│   package-lock.json   
│   package.json
│   README.md 

```

## API OpenTrivia
To obtain the information, we have used the [OpenTrivia](https://opentdb.com/) API.

