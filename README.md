# Angular 2 Project Installation with angular-cli
Install node latest version > 6.4
npm install -g angular-cli
ng new angular2basics
cd angular2basics
ng server

# Project structure
e2e - folder for end to end testing

app-
app.component.spec.ts - spec file for unit testing
app.module.ts - a bundle telling angular what to use in the app
app.components.css - css for only that component

envirmonents-
environment variables.

main.ts- starts the angular app
styles.css - global style rules for entire app

Install typekit globally
npm install typescript -g

# How Angular works
First main.ts runs which bootstraps AppModule from app.module.ts which includes app.component.ts and thus app.component.ts becomes the default ts file to run

# Create component
ng generate component other

# Angular2basics

This project was generated with [angular-cli](https://github.com/angular/angular-cli) version 1.0.0-beta.28.3.

## Development server
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive/pipe/service/class/module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Deploying to GitHub Pages

Run `ng github-pages:deploy` to deploy to GitHub Pages.

## Further help

To get more help on the `angular-cli` use `ng help` or go check out the [Angular-CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
