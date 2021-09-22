function externe(varClosure) {

  function interne() {
    console.log(varClosure);
  }

  return interne;
}

const interne = externe('Hello')
interne()

const interne2 = externe('Bye')
interne2()
