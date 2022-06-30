import { gql } from 'apollo-server';

const typeDefs = gql`

type Track {
    id: ID!
    title: String!
    albums: [Album]
    bands: [Band]
    duration: Int
    released: Int
    genres: [Genre]
}

type Query {
    tracks: [Track]
    track(id: ID!): Track
}

`;

module.exports = typeDefs;
