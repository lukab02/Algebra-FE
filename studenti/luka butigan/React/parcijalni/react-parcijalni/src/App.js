import { useState } from 'react';
import './App.css';
import { UserForm, GithubUser, GithubRepos } from './components';
import { githubapi } from './services';

function App() {
  const [user, setUser] = useState(null);
  const [repos, setRepos] = useState();

  function getData(userName) {
    // dohvat podataka

    Promise.all([
      githubapi.fetchUser(userName),
      githubapi.fetchUserRepos(userName),
    ])
      .then(([user, repos]) => {
        setUser(user);
        setRepos(repos);
      })
      .catch((error) => alert(error));
    /*     githubapi
      .fetchUser(userName)
      .then((user) => {
        setUser(data);
        githubapi.fetchUserRepos(name).then((repos) => {
          setUser(user);
          setRepos(repos);
        });
      })
      .catch((error) => {
        alert(error);
      }); */
  }

  function handleResetUser() {
    setUser(null);
  }

  if (!user) {
    return (
      <div className="app">
        <UserForm setUser={getData} />
      </div>
    );
  }

  return (
    <div className="app">
      <GithubUser u ser={user} />
      <GithubRepos repos={repos} />
      <div style={styles.buttonContainer}>
        <button onClick={handleResetUser} style={styles.button}>
          Reset
        </button>
      </div>
    </div>
  );
}
export default App;

const styles = {
  buttonContainer: {
    textAlign: 'center',
  },
  button: {
    width: '100%',
    marginTop: '20px',
  },
};
