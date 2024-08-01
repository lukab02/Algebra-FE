import { Routes, Route, Link, useNavigate } from 'react-router-dom';
import './App.css';

function Index() {
  return (
    <>
      <h1>Welcome to Router!</h1>
      <p>Ovo je primjer korištenja React Router-a</p>
      <p>Sad sam na početnoj stranici</p>
    </>
  );
}

function Komponenta1() {
  return (
    <>
      <h1>Welcome to Komponenta1.</h1>
      <p>Ovo je primjer korištenja React Router-a</p>
      <p>Sad sam na Komponenti 1</p>
    </>
  );
}

function Komponenta2() {
  const navigate = useNavigate();
  function ClickHandler() {
    navigate('/');
  }

  return (
    <>
      <h1>Welcome to Komponenta2.</h1>
      <p>Ovo je primjer korištenja React Router-a</p>
      <p>Sad sam na Komponenti 2</p>
      <button onClick={ClickHandler}>Home</button>
    </>
  );
}

function NotFound() {
  return (
    <>
      <h1>Welcome to Router</h1>
      <p>Trazena stranica nije pronađena.</p>
    </>
  );
}

function App() {
  return (
    <div className="App">
      <nav>
        <ul style={{ listStyleType: 'none' }}>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/komponenta1">Komponenta 1</Link>
          </li>
          <li>
            <Link to="/komponenta2">Komponenta 2</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/komponenta1" element={<Komponenta1 />} />
        <Route path="/komponenta2" element={<Komponenta2 />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
