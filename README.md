# User Data GraphQL

Creates an Apollo GraphQL endpoint to manipulate fake user data.

## _Stack_

Front end

- ReactJS
- Apollo client
- GraphQL

Back end

- NodeJS
- ExpressJS
- GraphQL
- Express-GraphQL

Run a query

```json
query {
  getAllUsers {
    firstName,
    lastName
  }
}
```

Run a mutation

```json
mutation {
  createUser (firstName: "Kim", lastName: "Kardashian", email: "kim@gmail.com", password: "kanye") {
    firstName,
    lastName,
    email
  }
}
```
