import React from 'react';

class NewUser extends React.Component {
  state = {
    name: '',
    age: 0,
  };

  nameChangeHandler = (e) => {
    this.setState({ name: e.target.value });
  };

  ageChangeHandler = (e) => {
    this.setState({ age: +e.target.value });
  };

  userSubmitHandler = (e) => {
    e.preventDefault();

    const { onAddUser } = this.props;
    const { name, age } = this.state;

    if (name && age) {
      onAddUser({ name, age });
    }
    this.setState({ name: '', age: 0 });
  };

  render() {
    const { name, age } = this.state;

    return (
      <form onSubmit={this.userSubmitHandler}>
        <label>
          Ime:
          <input type="text" value={name} onChange={this.nameChangeHandler} />
        </label>
        <label>
          Godine:
          <input type="number" value={age} onChange={this.ageChangeHandler} />
        </label>
        <button>Send!</button>
      </form>
    );
  }
}

export default NewUser;
