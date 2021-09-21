function externe() {
  const varClosure = 'closure';

  function interne() {
    console.log(varClosure);
  }

  interne()
}

externe()
