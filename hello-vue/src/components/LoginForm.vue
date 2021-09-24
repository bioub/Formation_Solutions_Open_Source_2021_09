<template>
<form @submit="verifyCredentials">
  <!--
    formEl.addEventListener('submit', ($event) => {
      verifyCredentials($event)
      refreshUi();
    });
  -->
  <div>
    Username : <input name="username" type="text" v-model="credentials.username" :className="!credentials.username ? 'error':  ''">
  </div>
  <div>
    Password : <input name="password" type="password" v-model="credentials.password" />
  </div>
  <div>
    <label>Remember me <input name="rememberMe" type="checkbox" v-model="credentials.rememberMe" /></label>
    <!--
      checkboxEl.checked = credentials.rememberMe;
    -->
  </div>
  <div>
    <button>Login</button>
  </div>
</form>

</template>

<script>
export default {
  name: 'LoginForm',
  data() {
    return {
      credentials: {
        username: 'romain',
        password: '123456',
        rememberMe: true,
      }
    };
  },
  methods: {
    verifyCredentials(event) {
      event.preventDefault();
      console.log(this.credentials);
    }
  }
}
</script>
