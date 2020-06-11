import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import { Section, Item } from './style';
import api from '../../services/api';

function User() {
  const [repos, setRepos] = useState([]);
  const userName = localStorage.getItem('@Git:user');
  const userRepos = async () => {
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
  };
  useEffect(() => {
    userRepos();
  });
  if (!userName) {
    return <Redirect to="/" />;
  }
  return (
    <>
      {repos.length > 0 && (
        <Section style={{ marginTop: 20 }}>
          {repos.map((repo) => (
            <Item key={repo.full_name}>
              <span>{repo.name}</span>

              <span>{repo.stargazers_count}</span>
            </Item>
          ))}
        </Section>
      )}
    </>
  );
}

export default User;
