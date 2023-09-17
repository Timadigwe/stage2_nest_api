# API Documentation

This documentation provides information on the endpoints and sample requests for the NestJS User Service API.

## Base URL

- Base URL: `http://localhost:3000` (if running locally)

## User Endpoints

### 1. Create User

- **Endpoint**: `POST /api/users`
- **Request Body**:

  ```json
  {
    "name": "John Doe",
    "email": "john@example.com"
  }
  ```

- **Response**:

  ```Status: 201 Created
   Body:
   json

   {
      "id": 1,
    "name": "John Doe",
     "email": "john@example.com"
    }
  ```

2.  Get All Users

    Endpoint: GET /users
    Response:
    Status: 200 OK
    Body (example):

        json

        [
          {
            "id": 1,
            "name": "John Doe",
            "email": "john@example.com"
          },
          {
            "id": 2,
            "name": "Jane Smith",
            "email": "jane@example.com"
          }
        ]

3.  Get User by ID

    Endpoint: GET /users/:id
    Response:
    Status: 200 OK
    Body (example):

        json

        {
          "id": 1,
          "name": "John Doe",
          "email": "john@example.com"
        }

4.  Update User by ID

    Endpoint: PUT /users/:id
    Request Body:

    json

{
"name": "Updated Name",
"email": "updated@example.com"
}

Response:

    Status: 200 OK
    Body:

    json

        {
          "id": 1,
          "name": "Updated Name",
          "email": "updated@example.com"
        }

5. Delete User by ID

   Endpoint: DELETE /users/:id
   Response:
   Status: 204 No Content (User deleted successfully)

Sample API Usage

Here are some sample commands to interact with the API using curl:

    Create a new user:

    bash

curl -X POST -H "Content-Type: application/json" -d '{"name":"John Doe","email":"john@example.com"}' http://localhost:3000/users

Get all users:

bash

curl http://localhost:3000/users

Get a user by ID (replace :id with the user's actual ID):

bash

curl http://localhost:3000/users/:id

Update a user by ID (replace :id with the user's actual ID):

bash

curl -X PUT -H "Content-Type: application/json" -d '{"name":"Updated Name","email":"updated@example.com"}' http://localhost:3000/users/:id

Delete a user by ID (replace :id with the user's actual ID):

bash

    curl -X DELETE http://localhost:3000/users/:id

javascript

This documentation provides an overview of the API endpoints, request/response examples, and sample `curl` commands for each endpoint. You can further customize it with additional details if required.
