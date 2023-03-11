import React from 'react'
import { GithubContext } from '../context/context';

const User = () => {
    const { githubUser } = React.useContext(GithubContext);
    const { followers } = React.useContext(GithubContext);
    console.log(followers)
  return (
    <div>
       <header>
        <img src={githubUser.avatar_url} alt={githubUser.name} />
        <div>
          <h4>{githubUser.name}</h4>
          <p>@{githubUser.twitter_username || 'john doe'}</p>
        </div>
        <a href={githubUser.html_url}>follow</a>
      </header>
      <p className='bio'>{githubUser.bio}</p>
      <div className='links'>
        <p>
         B {githubUser.company}
        </p>
        <p>
         L {githubUser.location || 'earth'}
        </p>
        <a href={`https://${githubUser.blog}`}>
        C
          {githubUser.blog}
        </a>
      </div>


      <div className='followers'>
        {followers.map((follower, index) => {
          return (
            <article className='follower' key={follower.index}>
              <img className='img' src={follower.avatar_url} alt={follower.login} />
              <div>
                <h4>{follower.login}</h4>
                <a href={follower.html_url}>{follower.html_url}</a>
              </div>
            </article>
          );
        })}
      </div>
    </div>
  )
}

export default User
