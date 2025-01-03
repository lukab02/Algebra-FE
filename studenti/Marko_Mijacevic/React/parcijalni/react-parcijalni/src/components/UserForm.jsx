import React from "react";

class UserForm extends React.Component {

  state = {
    userName: ''
  };


  handleUserChange = (event) => {
    
    const userName = event.target.value;

    this.setState({ userName });
  }

  handleUserSelected = (event) => {
    event.preventDefault();

    const { setUser } = this.props;
    const { userName } = this.state;

    setUser(userName);
  };

  render() {
    
    const {userName} = this.state;
    
    return(
      <form onSubmit={this.handleUserSelected}>
        <div style={styles.container}>
          <label style={styles.label} htmlFor="name" >GitHub username:</label>
          <input style={styles.input} type="text" id="name" value={userName} onChange={this.handleUserChange}/>
          <button style={styles.button} type="submit" > GO! </button>
        </div>
      </form>
    );
  }
}

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
    width: "100%",
    boxSizing: "border-box",
  },
  button: {
    marginTop: 20,
    width: "100%",
  }
};

export default UserForm;
