import React, { useEffect } from 'react'
import { GithubContext } from '../context/context';
import MockUser from '../context/MockData/MockUser';

const Info = () => {
    const {githubUser}  = React.useContext(GithubContext);
    console.log(githubUser)
    const items = [
        {
          id: 1,
          label: 'repos',
          value: githubUser.public_repos,
        },
        {
          id: 2,
          label: 'followers',
          value: githubUser.followers,
        },
        {
          id: 3,
          label: 'following',
          value: githubUser.following,
        },
        {
          id: 4,
          label: 'gists',
          value: githubUser.public_gists,
        },
      ];
    
      return (
        <section className='section'>
          <div className='section-center'>
            {items.map((item) => {
              return  <article className='item' key={item.id}>
              <div>
                <h3>{item.value}</h3>
                <p>{item.label}</p>
              </div>
            </article>;
            })}
          </div>
        </section>
      );
    };
    



export default Info
