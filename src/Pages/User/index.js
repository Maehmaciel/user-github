import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import { Item, Container, UserSection, RepoSection } from './style';
import api from '../../services/api';

function User() {
  const [repos, setRepos] = useState([]);
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(false);
  const userName = localStorage.getItem('@Git:user');
  const userRepos = async () => {
    setLoading(true);
    const response = await api.get(`${userName}`);
    const { data } = await api.get(`${userName}/repos`);

    data.sort((a, b) => {
      if (a.stargazers_count > b.stargazers_count) {
        return -1;
      }
      if (a.stargazers_count < b.stargazers_count) {
        return 1;
      }
      return 0;
    });

    setRepos(data);
    setUser(response.data);
    setLoading(false);
  };
  useEffect(() => {
    userRepos();
  }, []);
  if (!userName) {
    return <Redirect to="/" />;
  }
  return (
    <Container>
      {!loading ? (
        <UserSection>
          <h1>{user.login}</h1>
          <img
            src={user.avatar_url}
            style={{ width: 250, height: 250 }}
            alt="Imagem de Perfil do usuario"
          />

          {user.twitter_username ? <p>Twitter:user.twitter_username</p> : null}

          <p>
            Repositórios públicos:
            {user.public_repos ? user.public_repos : null}
          </p>
          <p>
            Seguidores:
            {user.followers ? user.followers : null}
          </p>
          <p>
            Seguindo:
            {user.following ? user.following : null}
          </p>
        </UserSection>
      ) : (
        <div className="loader" />
      )}
      {repos.length > 0 && (
        <RepoSection>
          {repos.map((repo) => (
            <Item key={repo.full_name}>
              <span>{repo.name}</span>

              <span>{repo.stargazers_count}</span>
            </Item>
          ))}
        </RepoSection>
      )}
    </Container>
  );
}

export default User;
