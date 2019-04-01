# calendar-challenge

This README outlines the details of collaborating on this Ember application.
A short introduction of this app could easily go here.

## Prerequisites

You will need the following things properly installed on your computer.

* [Git](https://git-scm.com/)
* [Node.js](https://nodejs.org/) (with npm)
* [Ember CLI](https://ember-cli.com/)
* [Google Chrome](https://google.com/chrome/)
* [Mongodb](https://docs.mongodb.com/manual/installation/)

## Installation

* `git clone <repository-url>` this repository
* `cd calendar-challenge`
* `npm install`

A mongodb dump is present in the `/dump` directory:

`cd dump`

`mongorestore --host 127.0.0.1 --port 27017 . --drop`

## Running / Development

* `ember server`
* Visit your app at [http://localhost:4200](http://localhost:4200).
* Visit your tests at [http://localhost:4200/tests](http://localhost:4200/tests).

#### Todo

-   currently does not support events across weeks;
-   method to delete event

### Code Generators

Make use of the many generators for code, try `ember help generate` for more details

### Running Tests

* `ember test`
* `ember test --server`

### Linting

* `npm run lint:hbs`
* `npm run lint:js`
* `npm run lint:js -- --fix`
