import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import {
  Item,
  Container,
  UserSection,
  RepoSection,
  UserName,
  InfoText,
  InfoTitle,
  InfoBox,
  UserImage,
  Back,
  Count,
} from './style';
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
        <>
          <Back to="/">
            <i style={{ color: '#FFF' }} className="fas fa-arrow-left" />
          </Back>
          <UserSection className="background">
            <UserImage
              src={user.avatar_url}
              style={{ width: 250, height: 250, alignSelf: 'center' }}
              alt="Imagem de Perfil do usuario"
            />

            <InfoBox>
              <UserName>{user.login}</UserName>

              {user.email ? (
                <InfoTitle>
                  Email:
                  <InfoText>{user.email}</InfoText>
                </InfoTitle>
              ) : (
                <InfoText>Nenhuma Informação de Email foi encontrada</InfoText>
              )}
              {user.bio ? (
                <InfoTitle>
                  Bio:
                  <InfoText>{user.bio}</InfoText>
                </InfoTitle>
              ) : (
                <InfoText>Nenhuma Informação de Bio foi encontrada</InfoText>
              )}

              {user.public_repos ? (
                <InfoTitle>
                  Repositórios públicos:
                  <InfoText>{user.public_repos}</InfoText>
                </InfoTitle>
              ) : null}

              {user.followers ? (
                <InfoTitle>
                  Seguidores:
                  <InfoText>{user.followers}</InfoText>
                </InfoTitle>
              ) : null}
              {user.following ? (
                <InfoTitle>
                  Seguindo:
                  <InfoText>{user.following}</InfoText>
                </InfoTitle>
              ) : null}
            </InfoBox>
          </UserSection>
        </>
      ) : (
        <div className="loader" />
      )}
      {repos.length > 0 && (
        <RepoSection>
          {repos.map((repo) => (
            <Item key={repo.full_name}>
              <span>{repo.name}</span>
              <div>
                <Count>
                  <i className="fas fa-star" />
                  {repo.stargazers_count}
                </Count>
                <Count>
                  <i className="fas fa-code-branch" />
                  {repo.forks_count}
                </Count>
              </div>
            </Item>
          ))}
        </RepoSection>
      )}
    </Container>
  );
}

export default User;
