import gql from 'graphql-tag';

export const ADD_SONG = gql`
  mutation AddSong($song: SongCreateInput!) {
    createSong(data: $song) {
      id
      name
      actor
      lyrics
    }
  }
`;
