<template>
  <div>
    <h1>Login</h1>
    <form @submit="submitHandler">
      <div className="control">
        <label htmlFor="email">Your Email: </label>
        <input v-model="email" type="email" id="email" required />
      </div>
      <div className="control">
        <label htmlFor="password">Your Password: </label>
        <input v-model="password" type="password" id="password" required />
      </div>
      <div className="actions">
        <button>Login</button>
      </div>
    </form>
    <div v-if="loginFailed">
      Login Failed
    </div>
  </div>
</template>

<script>
export default {
  name: "AuthForm",
  data() {
    return {
      email: "",
      password: "",
      loginFailed: false
    };
  },
  methods: {
    submitHandler(event) {
      event.preventDefault();
      fetch(
          'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCrt1P4ixN3qJGdh5a0iOfh1Fds3X2S2KA',
          {
              method: 'POST',
              body: JSON.stringify({
                  email: this.email,
                  password: this.password,
                  returnSecureToken: true
              }),
              headers: {
                  'Content-Type': 'application/json'
              }
          }
      ).then(response => {
          response.json().then(data => {
              console.log('auth response', data);
              if (response.ok) {
                  alert('Login Successful');
              } else {
                  alert(data.error.message);
              }
          });
      })
      .catch(() => {
        this.loginFailed = true;
      })
    },
  },
};
</script>

<style scoped>
</style>