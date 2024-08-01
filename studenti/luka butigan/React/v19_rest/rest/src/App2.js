import React from 'react';

class App2 extends React.Component {
  state = {
    title: null,
    url: null,
    explanation: null,
    isFetching: false,
  };

  componentDidMount() {
    const NASA_API_KEY = 'vHKY1XVvOMBmbJI77ZCn4qcEEJsaj6E6fh4TfB4i';

    this.setState({ ...this.state, isFetching: true });

    fetch(`https://api.nasa.gov/planetary/apod?api_key=${NASA_API_KEY}`)
      .then((response) => response.json())
      .then((responseData) =>
        this.setState({
          title: responseData.title,
          url: responseData.url,
          explanation: responseData.explanation,
          isFetching: false,
        })
      );
  }

  render() {
    const { title, url, explanation, isFetching } = this.state;

    return (
      <div className="App">
        {isFetching && <p>Loading...</p>}
        <h1>NASA Picture of the Day</h1>
        <h3>{title}</h3>
        <img src={url} alt="Slika" width={500} />
        <p>{explanation}</p>
      </div>
    );
  }
}
export default App2;
