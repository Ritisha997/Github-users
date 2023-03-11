import React from 'react';
import { GithubContext } from '../context/context';
const Search = () => {
  const [user, setUser] = React.useState('');
  const { requests, searchGithubUser, isLoading } = React.useContext(
    GithubContext
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    if (user) {
      searchGithubUser(user);
    }
  };
  return (
    <section className='section'>
      <div className='section-center'>
        <form onSubmit={handleSubmit}>
          <div className='form-control'>
            <input
              type='text'
              placeholder='enter github user'
              value={user}
              onChange={(e) => setUser(e.target.value)}
            />
            {requests > 0 && !isLoading && (
              <button type='submit'>search</button>
            )}
          </div>
        </form>
        <h3>requests : {requests} / 60</h3>
      </div>
    </section>
  );
};

export default Search
