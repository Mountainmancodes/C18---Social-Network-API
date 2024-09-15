# Social Network API

## Description

This project is a robust API for a social network web application where users can share their thoughts, react to friends' thoughts, and create a friend list. It uses Express.js for routing, a MongoDB database, and the Mongoose ODM.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [API Routes](#api-routes)
- [Technologies Used](#technologies-used)
- [Example and Demo](#example-and-demo)
- [Contributors](#contributors)
- [License](#license)
- [Questions](#questions)

## Installation

1. Clone the repository to your local machine.
2. Navigate to the project directory in your terminal.
3. Run `npm install` to install the necessary dependencies.
4. Ensure MongoDB is installed and running on your machine.
5. (Optional) Run `npm run seed` to seed the database with sample data.

## Usage

1. Start the server by running `npm start`.
2. The server will start running on `http://localhost:3001`.
3. Use an API client like Insomnia or Postman to test the API routes.

## API Routes

### Users

- GET all users: `GET /api/users`
- GET a single user by id: `GET /api/users/:userId`
- POST a new user: `POST /api/users`
- PUT to update a user: `PUT /api/users/:userId`
- DELETE a user: `DELETE /api/users/:userId`

### Thoughts

- GET all thoughts: `GET /api/thoughts`
- GET a single thought: `GET /api/thoughts/:thoughtId`
- POST a new thought: `POST /api/thoughts`
- PUT to update a thought: `PUT /api/thoughts/:thoughtId`
- DELETE a thought: `DELETE /api/thoughts/:thoughtId`

### Reactions

- POST to create a reaction: `POST /api/thoughts/:thoughtId/reactions`
- DELETE a reaction: `DELETE /api/thoughts/:thoughtId/reactions/:reactionId`

### Friends

- POST to add a friend: `POST /api/users/:userId/friends/:friendId`
- DELETE to remove a friend: `DELETE /api/users/:userId/friends/:friendId`

## Technologies Used

- Node.js
- Express.js
- MongoDB
- Mongoose ODM

## Example and Demo

For a visual demonstration of how this API works, please check out our demo video:

[Link to Demo Video](https://drive.google.com/file/d/1rJU4eH__e55JvWVZWu6saSjZtGA4wVf2/view?usp=sharing)

This video showcases:

- Testing various API routes using Insomnia
- Demonstrating CRUD operations for users, thoughts, reactions, and friend lists

## Contributors

This project was created and is maintained by [Mountainmancodes](https://github.com/Mountainmancodes).

Contributions to this project are welcome. Please fork the repository and submit a pull request with your changes.

## License

This project is licensed under the MIT License.

## Questions

You can find more of my work on my GitHub profile: [Mountainmancodes](https://github.com/Mountainmancodes)