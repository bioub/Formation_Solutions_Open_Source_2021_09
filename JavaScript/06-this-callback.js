class User {
  name = 'Romain';
  helloAsync() {
    // this === user
    setTimeout(() => this.hello(), 1000);
  }
  hello() {
    console.log(this);
    console.log(this.name);
  }
}

const user = new User();

user.helloAsync();
