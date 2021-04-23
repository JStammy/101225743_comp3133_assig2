const { buildSchema } = require('graphql');

module.exports = buildSchema(`
    type User {
        user_id: Int!
        username: String!
        password: String!
        email: String!
    }
    type Hotel {
        hotel_id: Int!
        hotel_name: String!
        street: String!
        city: String!
        postal_code: String!
        price: Float!
        email: String!
        user_id: Int!
    }


    type Mutation {
    addHotel(
        hotel_id: ID!
        hotel_name: String!
        street: String!
        city: String!
        postal_code: String!
        price: Int!
        email: String!
        user_id: ID!
        ): Hotel
    
    addBooking(
        hotel_id: ID!
        booking_date: String!
        booking_start: String!
        booking_end: String!
        user_id: String!
    ): Booking

    
    type UserData {
        users: [User!]!
    }
    type RootQuery {
        users: UserData!
    }
    input UserInputData {
        user_id: Int!
        username: String!
        password: String!
        email: String!
    }
    type RootMutation {
        addUser(userInput: UserInputData ): User!
    }
    schema {
        query: RootQuery
        mutation: RootMutation
    }
`);
