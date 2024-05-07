# Backend README

## Description

## Features

-   API (CRUD)

## Technologies Used

-   Docker
-   Express
-   Sequelize (ORM)
-   PostgreSQL

## Getting Started

### Prerequisites

-   Docker
-   Node min 18.19.1v
-   NPM

### Installation

1. Clone the repository
2. Install dependencies in `./proyectofinal-23-24-grupo08/app/server/`

```
npm install
```

3. In same path initialize docker compose:

```
docker compose down && docker compose up
```

4. Initialize Express server:

```
npx nodemon src/server.js
```

### Usage

1. https://localhost:9000/
2. https://locahost:9000/api/user
3. ...

## PG Admin

[http://localhost:8082/browser/](http://localhost:8082/browser/)

## API Documentation

### Restaurant

### [GET] Get all

`/restaurant`

### [GET] Get by restaurant id

`/restaurant/:id`

### [GET] Get by widget code

`/restaurant/widgetValidation?widgetCode=XXX`

### [GET] Get restaurant bookings

`/restaurant/:id/bookings`

### [POST] Create

`/restaurant`

### Bookings

### User

### getUser

-   endpoint: `/user`
-   params

Explain how to use the API and provide examples.

## Contributing

Explain how others can contribute to the project.

## License

## Acknowledgments

-   Acknowledgment 1
-   Acknowledgment 2
-   ...
