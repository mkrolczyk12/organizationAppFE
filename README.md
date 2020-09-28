# OrganizationApp

Frontend part of organizationApp

> Track your expenses, monitor your earnings, be aware of your finances!

## Table of contents

- [General info](#general-info)
- [Technologies and dependencies](#technologies-and-dependencies)
- [Build instruction](#build-instruction)
- [Status](#status)
- [Contact](#contact)

## General info

The main goal of the application is to track all user expenses and earnings. To use the application, you need to create an account and log in. The user authentication process is performed by using keycloak - an open source identity and access management solution. After a successful authentication process, the user gains access to the entire application. Thanks to the RWD technology, the web application can be used comfortably on any device.

## Technologies and dependencies

- React.js
- Html5
- Css3
- Bootstrap 4
- Radium
- React-router-dom
- Webpack
- Node Package Manager
- Keycloak open source Identity and Access Management - version 10.0.1

If you want to see the backend part of application, please follow the link below: <br />
https://github.com/mkrolczyk12/organizationApp

## Build instruction

Requirements: git, npm, node.js <br />
To run project, follow these steps: <br />

1. Open terminal and clone the project from github repository:

```
$ git clone https://github.com/mkrolczyk12/organizationAppFE.git
```

2. After successful clone go to project, open terminal and type below command:

```
$ `npm start`
```

This script runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console. <br />

3. Open browser and download keycloak .zip version <br />
   Link: https://www.keycloak.org//downloads.html <br />
   After download, extract file and move inside your previously cloned project. <br />
   Go to folder keycloak-[10.0.1]/bin, open console and write the following command:

```
windows:
$ standalone.bat -Djboss.socket.binding.port-offset=100
linux:
$ ./standalone.sh -Djboss.socket.binding.port-offset=100
```

Wait until script loaded. From this moment you are able to manage keycloak admin account. <br />
Realm managing page: http://localhost:8180/auth/ <br />
Create admin account and then find the "import" tab in the main menu. Check "realm-export.json" file from cloned project and import. As a result, you should get pre-prepared realm for your application.

4. After loading application is ready to use.

## Status

_in progress_

## Contact

Created by @mkrolczyk12 - feel free to contact me!

- Phone: (48) 503 699 962
- E-mail: m.krolczyk66@gmail.com

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
