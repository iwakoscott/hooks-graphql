import gql from 'graphql-tag';

export const singleActor = gql`
  query songs($actor: String) {
    songs(where: { actor: $actor }) {
      id
      name
      actor
      lyrics
    }
  }
`;
