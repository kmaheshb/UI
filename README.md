# Feature Flags UI

User Interface for displaying features and statuses by regions

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

Install Node JS on your local machine. 

### Installing

Open the source directory in command prompt

Run the following command to install package dependencies

```
npm install
```

And following command to start local dev server

```
npm start
```

Open http://localhost:8080 on your browser

## Deployment

For production, build the application with the following command

```
npm run-script build
```

The application will be build under "\dist" directory. Place the contents of this directory to the server
which will host the application

For example: In spring boot, place the contents under ".\src\main\resources\public" directory

## Built With

* [React](https://reactjs.org/) - The UI library used
* [Redux](https://redux.js.org/) - State Management

## Contributing

Please contact the author for contributing

## Versioning

v1.0

## Authors

* **Krishna M Bhat** - (https://github.com/kmaheshb)