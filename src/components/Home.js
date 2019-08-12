import React from 'react';
import { graphql } from 'react-apollo';
import Container from 'muicss/lib/react/container';
import { singleActor } from '../graphql/queries';
import AddSong from './AddSong';

const Home = ({ data: { loading, error, songs } }) => {
  if (error) return <h1>Error fetching songs </h1>;
  if (loading) return <p>Loading...</p>;
  return (
    <Container>
      <AddSong />
      <div className={`song-container`}>
        {songs.map(song => (
          <div key={`song-${song.id}`} className={'song-list-item'}>
            <div className={'text-wrapper'}>
              <h1>{song.name}</h1>
              <h3>{song.actor}</h3>
              <p>{song.lyrics}</p>
            </div>
            {/*<Mutation*/}
            {/*mutation={DELETE_SONG}>*/}
            {/*{ (deleteSong) =>*/}
            {/*<button onClick={() => {*/}
            {/*dispatch({type: "DELETE_CONTENT", payload: {id: song.id}});*/}
            {/*deleteSong({variables: {id: {id: song.id}}});*/}
            {/*}}>*/}
            {/*Remove song*/}
            {/*</button>*/}
            {/*}*/}
            {/*</Mutation>*/}
          </div>
        ))}
      </div>
    </Container>
  );
};

export default graphql(singleActor, {
  options: ({ match }) => ({
    variables: {
      actor: match.params.slug,
      name: match.params.slug,
      lyrics: match.params.slug
    }
  })
})(Home);
