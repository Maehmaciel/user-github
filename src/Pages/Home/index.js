import React, { useState } from 'react';
import { Form, Container, Section, Card } from './style';
import api from '../../services/api';

function Home() {
  const [userName, setUserName] = useState('');
  const [inputMessage, setInputMessage] = useState('');
  const [user, setUser] = useState({});
  const [repos, setRepos] = useState([]);
  const [cls, setClass] = useState('cad');

  async function searchUser(event) {
    event.preventDefault();
    if (!userName) {
      setInputMessage('Informe um usuário');
      return;
    }
    try {
      const { data } = await api.get(`${userName}/repos`);

      data.sort((a, b) => {
        if (a.name < b.name) {
          return -1;
        }
        if (a.name > b.name) {
          return 1;
        }
        return 0;
      });

      setRepos(data);
    } catch (error) {
      setClass('err');
      setInputMessage('Opa, Usuário não Encontrado');
    }
  }
  return (
    <>
      <Container>
        <Section className="flip-card">
          <div className={cls}>
            <Card className="front">
              <h1>IAI MENINA</h1>

              <Form onSubmit={searchUser}>
                <input
                  onChange={(e) => setUserName(e.target.value)}
                  type="text"
                  placeholder="Digite o nome de um Usuário"
                />

                <button type="submit">Pesquisar</button>
              </Form>
            </Card>
            <Card className="back">
              <h1>Erro :(</h1>
              {inputMessage && <p>{inputMessage}</p>}
              <button
                onClick={() => {
                  setClass('cad');
                }}
              >
                Pesquisar
              </button>
            </Card>
          </div>
        </Section>

        {repos.length > 0 && (
          <Section>
            <h1>{user.login}</h1>
            {repos.map((repo) => (
              <a key={repo.full_name}>{repo.full_name}</a>
            ))}
          </Section>
        )}
      </Container>
    </>
  );
}

export default Home;
