# Khome Demo App

## :memo: Assignment

In the context of a recruitment process, this app is meant to showcase a fullstack project.

It features :

- A NestJS API with
  - A user entity
  - 4 REST routes on the user entity (GET, POST, PUT, DELETE)
  - A MongoDB database, connected to our API with TypeORM
  - Swagger endpoint documentation
- A React frontend
  - created with Create React App
  - A user page
  - A user form (creation / modification)
  - A user list

## :technologist: Usage

To run this app locally, you will need to boot the [api](packages/api), the [fronted](packages/frontend) and the database.

The entier workspace leverages javascript frameworks. Locally, javascript requires _NodeJS_ to run.

The recommendend way to setup node on your machine is by using `nvm`. Follow the [official documentation](https://github.com/nvm-sh/nvm#installing-and-updating), depending on your environement. Once your are able to use the `$ nvm` command, just run `$ nvm use` in this repo's root folder. This will read inside the `.nvmrc` file (also present in any of the packages sub-folders), and fetch the correct node version for you.

The default package manager for javascript packages is `npm`. It comes as a command line program with all installations of node, and behaves like any package manager by adding, removing and updating a list of dependencies.

For this demo app, I chose to use `yarn` instead. `yarn` is faster, and has more intutive CLI usage. Yarn, like `npm`, is written in javascript and comes as a CLI command to use as a replacement of `npm`. In order to install the `yarn` CLI on your machine, run `$ npm install --global yarn`. This will automatically install the latest version of yarn version 1 (also called `classic yarn`).

- The database is wrapped in a Docker configuration. You will need to install the [Docker Engine](https://docs.docker.com/get-docker/) and [Docker Compose](https://docs.docker.com/compose/). Once you are all set up, simply run `$ docker-compose up` inside the root directory.
- The api is built on _NodeJS_ using the _NestJS_ framework. To use this packages, read it's [README file](packages/api/README.md).
- The frontend is built on _React_ using the _Create React App_ framework. To use this packages, read it's [README file](packages/frontend/README.md).

> :warning: If this is your the first time checking out this repository, you might need to specify some environement variables. (see [Environement variables & files](#environement-variables--files)).

## Technical considerations

## Environement variables & files

Local environement variables are stored in various `.env` files for our packages to read & use.

The api will consume it's keys & values using the `ConfigModule` from the `@nestjs/config` library.

> **TODO** : incldue [schema validation](https://docs.nestjs.com/techniques/configuration#schema-validation) to look for missing variables

The Database is initialized and configured using _Docker Compose_ and it's dedicated `docker-compose.yml` file. _Docker Compose_ will automatically parse the content of the `.env` file located where-ever it is beeing called. For local setup, include the environement file in the root directory.

> The required content of the root `.env` is described within the `docker-compose.yml`. The `$ docker-compose up` command will fail if any variable is missing.

## Docker & Docker-compose

For smooth developer experience, I choose to wrap our database setup with _Docker_ & _Docker Compose_. This allows one to simply call `docker-compose up` in the root directory in order to have a running `mongo` instance.

To further improve this integration, I would have taken the time to also inclue our local API bootstrap in the _Docker Compose_ configuration. It would have meant taking the time to wrap our API inside a production-ready `Dockerfile`, and use it form the `docker-compose.yml`.

Since this app is not meant for production, I decided to spend my time on other matters. A local bootstrap will include calling `yarn start:dev` from within the api package.

## OpenAPI documentation

Our API implements the _OpenAPI_ specification for it's documentation using [_Swagger_](https://swagger.io/). Through the `@nestjs/swagger` package, _Nestjs_ serves an auto-generated frontend UI on the `[host]:[port]/docs` route. Swagger will automatically scan for every endpoint we defined, and append whatever documentation we append to them using dedicated decorators and methods in the code.

### Dev tools

TODO

### Monorepo pattern

TODO

### TypoeORM vs Mongoose

TODO

### React framework

TODO

### Linting & Formatting tools

TODO
