import { UseSelector, useSelector } from 'react-redux';

function MojaKomponenta() {
  const brojac = useSelector((skladiste) => skladiste.counter);
  return (
    <>
      <h2>Moja Komponenta</h2>
      <p>I moja Komponenta koristi redux store: {brojac}</p>
    </>
  );
}

export default MojaKomponenta;
