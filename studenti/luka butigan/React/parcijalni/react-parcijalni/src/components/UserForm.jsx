import React from 'react';

class UserForm extends React.Component {
  state = {
    userName: '',
  };
  handleUserChange = (e) => {
    const userName = e.target.value;

    this.setState({ userName });
  };

  handleUserSelected = (e) => {
    e.preventDefault();

    const { setUser } = this.props;
    const { userName } = this.state;

    setUser(userName);
  };

  render() {
    const { userName } = this.state;

    return (
      <form onSubmit={this.handleUserSelected}>
        <div style={styles.container}>
          <label htmlFor="name" style={styles.label}>
            Github username:
          </label>
          <input
            type="text"
            id="name"
            value={userName}
            onChange={this.handleUserChange}
            style={styles.input}
          />
          <button type="submit" style={styles.button}>
            Search
          </button>
        </div>
      </form>
    );
  }
}

export default UserForm;

const styles = {
  container: {
    paddingLeft: 50,
    paddingRight: 50,
  },
  label: {
    fontWeight: 'bold',
  },
  input: {
    marginTop: 10,
    width: '100%',
    boxSizing: 'border-box',
  },
  button: {
    marginTop: 20,
    width: '100%',
  },
};
