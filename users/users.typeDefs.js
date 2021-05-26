import {gql} from "apollo-server"

export default gql`
type User{
    id: String!
    username: String!
    email: String!
    name: String!
    locations: String
    avatarURL: String
    githubUsername: String
    createdAt: String!
    updatedAt: String!
},
type Mutation{
    createAccount(
        id: Int
        username: String!
        email: String!
        name: String!
        password: String!
    ): User
},
type Query{
    seeProfile(username: String!): User
}


`;
