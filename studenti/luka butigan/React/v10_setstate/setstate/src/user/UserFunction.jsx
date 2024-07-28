function UserFunction(props) {
  const { ime, godine } = props;

  return (
    <p>
      Pozdrav, moje ime je {ime} i imam {godine} godine.
    </p>
  );
}

export default UserFunction;
