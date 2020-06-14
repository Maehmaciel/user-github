import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import { Form, Container, Section, Card, Button } from './style';
import api from '../../services/api';

function Home() {
  const [userName, setUserName] = useState('');
  const [inputMessage, setInputMessage] = useState('');
  const [user, setUser] = useState('');
  const [cls, setClass] = useState('ini');
  useEffect(() => {
    localStorage.removeItem('@Git:user');
  }, []);
  async function searchUser(event) {
    event.preventDefault();
    if (!userName) {
      setInputMessage('Informe um usuário');
      return;
    }
    try {
      const { data } = await api.get(`${userName}`);
      localStorage.setItem('@Git:user', data.login);
      setUser(userName);
    } catch (error) {
      setInputMessage('');
      setClass('ini err');
    }
  }
  if (user) {
    return <Redirect to="/user" />;
  }
  return (
    <>
      <Container>
        <Section className="flip-card">
          <div className={cls}>
            <Card className="front">
              <i className="fab fa-github-square" style={{ fontSize: 150 }} />
              <Form onSubmit={searchUser}>
                <input
                  onChange={(e) => setUserName(e.target.value)}
                  type="text"
                  placeholder="Usuário do github"
                />
                {inputMessage && <p>{inputMessage}</p>}
                <Button type="submit">Pesquisar</Button>
              </Form>
            </Card>
            <Card className="back">
              <i
                className="fas fa-heart-broken"
                style={{ fontSize: 150, color: '#E74C3C' }}
              />
              <h1>Opa, não encontramos este usuário</h1>

              {inputMessage && <p>{inputMessage}</p>}
              <Button
                type="button"
                onClick={() => {
                  setClass('ini cad');
                }}
              >
                Pesquisar Novamente
              </Button>
            </Card>
          </div>
        </Section>
      </Container>
    </>
  );
}

export default Home;
