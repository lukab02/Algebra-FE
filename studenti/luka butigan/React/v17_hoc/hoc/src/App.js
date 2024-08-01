import './App.css';

function Btn(props) {
  return <button {...props}></button>;
}

function withColor(Element) {
  return function ({ color, ...otherProps }) {
    return <Element {...otherProps} style={{ backgroundColor: color }} />;
  };
}

const ColoredBtn = withColor(Btn);

function clickHandler() {
  alert('click');
}

function App() {
  return (
    <div className="App">
      <h1>Hello World!</h1>
      <Btn>Moj Button</Btn>
      <ColoredBtn color="grey">Bok ja sam siva</ColoredBtn>
      <ColoredBtn color="yellow" onClick={clickHandler}>
        Bok ja sam zuti
      </ColoredBtn>
    </div>
  );
}

export default App;
