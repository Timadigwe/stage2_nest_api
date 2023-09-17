## Description

NestJS User Service

This is a simple NestJS User Service that allows you to manage users in a PostgreSQL database. It provides basic CRUD (Create, Read, Update, Delete) operations for user entities.

## Prerequisites

Before you begin, ensure you have met the following requirements:

    Node.js and npm installed on your machine.
    PostgreSQL database server running locally or an accessible remote server.
    A database named nestjs_users created in your PostgreSQL server.
    Git installed (optional but recommended).

## Installation

To set up this service locally, follow these steps:

    Clone the repository to your local machine (or download the ZIP file and extract it):

```bash
$ git clone https://github.com/timadigwe/stage2_nest_api.git
```

Change into the project directory:

```bash
$ cd nestjs-user-service
```

Install the project dependencies:

```bash
$ npm install
```

```bash
$ yarn install
```

## Running the app

```bash
# development
$ yarn run start

# watch mode
$ yarn run start:dev

# production mode
$ yarn run start:prod
```

## Test

```bash
# unit tests
$ yarn run test

# e2e tests
$ yarn run test:e2e

# test coverage
$ yarn run test:cov
```

## API Endpoints

Here are the available API endpoints for the User Service:

    Create User: POST /api/users
    Get All Users: GET /api/users
    Get User by ID: GET /api/users/:id
    Update User by ID: PUT /api/users/:id
    Delete User by ID: DELETE /api/users/:id

## Usage

You can use tools like curl, Postman, or Insomnia to interact with the API endpoints. Refer to the API documentation or code comments for more details.
Testing

You can run tests using the following command:

bash

npm run test

## Contribution

Contributions are welcome! Feel free to open issues or submit pull requests.
License

This project is licensed under the MIT License - see the LICENSE file for details.

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## License

Nest is [MIT licensed](LICENSE).
