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

extend type Query {
    tracks: [Track]
    track(id: ID!): Track
}

`;

export { typeDefs };