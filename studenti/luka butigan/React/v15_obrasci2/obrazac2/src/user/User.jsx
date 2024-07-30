function UserFunction({ ime, godine, onNameChange }) {
  /*   const { ime, godine, onNameChange } = props; */

  return (
    <>
      <p>
        Pozdrav, moje ime je {ime} i imam {godine} godine.
      </p>
      <input type="text" value={ime} onChange={onNameChange} />
    </>
  );
}

export default UserFunction;
