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
    <div v-if="loginSuccess">Login Successful</div>
    <div v-if="loginFailed">Login Failed</div>
  </div>
</template>

<script>
export default {
  name: "AuthForm",
  props: ["userAPIKey"],
  data() {
    return {
      data: {
        email: "",
        password: "",
      },
      tokens: {
        idToken: "",
        refreshToken: ""
      },
      loginSuccess: false,
      loginFailed: false,
    };
  },
  methods: {
    submitHandler(event) {
      event.preventDefault();
      fetch(
        `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${this.userAPIKey}`,
        {
          method: "POST",
          body: JSON.stringify({
            email: this.email,
            password: this.password,
            returnSecureToken: true,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
        .then((response) => {
          response.json().then((data) => {
            if (response.ok) {
              this.loginSuccess = true;
              this.tokens.idToken = data.idToken;
              this.tokens.refreshToken = data.refreshToken;
              this.tokenSubmit(this.tokens);
              localStorage.setItem('idToken', data.idToken);
            } else {
              this.loginFailed = true;
            }
          });
        })
        .catch((error) => {
          console.log("AuthForm Error", error);
        });
    },
    tokenSubmit(tokens) {
      this.$store.commit({
        type: "loginHandler",
        tokens: {
          idToken: tokens.idToken,
          refreshToken: tokens.refreshToken
        }
      });
    },
  },
};
</script>

<style scoped>

</style>