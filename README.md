# User Data GraphQL

Creates an Apollo GraphQL endpoint to manipulate fake user data.

## _Stack:_

Front end:

- ReactJS
- Apollo client
- GraphQL

Back end:

- NodeJS
- ExpressJS
- GraphQL
- Express-GraphQL

## _At the root of the project run:_

```sh
npm run watch
```

![image info](./img/2.png)

## _How to run a query:_

```sh
query {
  getAllUsers {
    firstName,
    lastName
  }
}
```

## _How to run a mutation:_

```json
mutation {
  createUser (firstName: "Kim", lastName: "Kardashian", email: "kim@gmail.com", password: "kanye") {
    firstName,
    lastName,
    email
  }
}
```

![image info](./img/1.png)
